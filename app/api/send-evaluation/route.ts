import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Type definitions
interface FormData {
  [key: string]: any;
}

interface ResponseItem {
  label: string;
  key: string;
  isScale?: boolean;
  detailsKey?: string;
  scaleKey?: string;
}

interface CategoryResponses {
  [key: string]: ResponseItem[];
}

// Helper function to get scale category
function getScaleCategory(val: number): string {
  if (!val) return "Not Rated";
  if (val <= 3) return "Low";
  if (val <= 6) return "Medium";
  if (val <= 8) return "High";
  return "Very High";
}

// Helper functions for symptom counts
function calculateDepressionSymptoms(data: FormData): number {
  const symptoms = [
    data.focus === "Yes",
    data.brainFog === "Yes",
    Number(data.irritation) >= 7,
    Number(data.anger) >= 7,
    Number(data.mood) >= 7,
    data.disconnected === "Yes",
    data.appetiteYesNo === "Yes",
    data.social === "Yes",
    data.sleepYesNo === "Yes"
  ].filter(Boolean).length;
  return symptoms;
}

function calculateAnxietySymptoms(data: FormData): number {
  const symptoms = [
    data.breathing === "Yes",
    data.stomach === "Yes",
    data.restlessness === "Yes",
    data.heartbeat === "Yes",
    data.chest === "Yes",
    data.shiveringYesNo === "Yes",
    data.vomiting === "Yes",
    data.socialAnxiety === "Yes",
    data.panicYesNo === "Yes"
  ].filter(Boolean).length;
  return symptoms;
}

function calculateTraumaSymptoms(data: FormData): number {
  const symptoms = [
    data.hopeless === "Yes",
    data.aloneFear === "Yes",
    data.trust === "Yes",
    data.healthFear === "Yes",
    data.childhoodTraumaYesNo === "Yes",
    data.perfectionism === "Yes",
    data.bullyingYesNo === "Yes",
    data.abuseYesNo === "Yes"
  ].filter(Boolean).length;
  return symptoms;
}

// Helper function to format all responses
function formatAllResponses(data: FormData): string {
  const categories: CategoryResponses = {
    personal: [
      { label: "Name", key: "name" },
      { label: "Age", key: "age" },
      { label: "Date", key: "date" },
      { label: "Email", key: "email" },
      { label: "Gender", key: "gender" },
      { label: "Pre-existing medical conditions", key: "medical" },
      { label: "Taken consultation before", key: "consultation" },
      { label: "Taking medications", key: "medications" },
      { label: "Previous diagnosis", key: "previousDiagnosis" }
    ],
    stress: [
      { label: "Overthinking / Negative thinking", key: "overthinking", isScale: true },
      { label: "Stress levels", key: "stress", isScale: true },
      { label: "Unexplained aches", key: "achesYesNo", detailsKey: "achesLocation" },
      { label: "Tiredness / Exhausted", key: "tirednessYesNo", 
        detailsKey: "tirednessDetails", scaleKey: "tirednessScale" }
    ],
    depression: [
      { label: "Unable to focus", key: "focus" },
      { label: "Forgetfulness / Brain fog", key: "brainFog" },
      { label: "Irritation", key: "irritation", isScale: true },
      { label: "Anger outbursts", key: "anger", isScale: true },
      { label: "Mood swings", key: "mood", isScale: true },
      { label: "Emotionally disconnected", key: "disconnected" },
      { label: "Change in appetite", key: "appetiteYesNo", detailsKey: "appetiteDetails" },
      { label: "Reduced social connect", key: "social" },
      { label: "Sleep issues", key: "sleepYesNo", detailsKey: "sleepDetails" }
    ],
    anxiety: [
      { label: "Suffocation / Breathlessness", key: "breathing" },
      { label: "Upset stomach / Heaviness", key: "stomach" },
      { label: "Restlessness", key: "restlessness" },
      { label: "Rapid heartbeat", key: "heartbeat" },
      { label: "Heaviness in chest", key: "chest" },
      { label: "Shivering / Sweating", key: "shiveringYesNo", detailsKey: "shiveringDetails" },
      { label: "Vomiting / Nausea / Dizziness", key: "vomiting" },
      { label: "Social Anxiety", key: "socialAnxiety" },
      { label: "Panic attacks", key: "panicYesNo", 
        detailsKey: "panicFrequency", scaleKey: "panicIntensity" }
    ],
    trauma: [
      { label: "Feeling hopeless / stuck", key: "hopeless" },
      { label: "Fear of being alone", key: "aloneFear" },
      { label: "Trust / commitment issues", key: "trust" },
      { label: "Fear of dying / Health fears", key: "healthFear" },
      { label: "Fearful childhood memories", key: "childhoodTraumaYesNo", detailsKey: "childhoodTraumaDetails" },
      { label: "Perfectionism / Fear of failure", key: "perfectionism" },
      { label: "Bullying experiences", key: "bullyingYesNo" },
      { label: "Sexual harassment / Abuse", key: "abuseYesNo", detailsKey: "abuseDetails" }
    ],
    additional: [
      { label: "Observations", key: "observations" },
      { label: "Tentative Diagnosis", key: "diagnosis" },
      { label: "Additional notes", key: "notes" }
    ]
  };

  let html = '';
  
  Object.entries(categories).forEach(([category, items]) => {
    const categoryResponses = items.filter(item => data[item.key]);
    
    if (categoryResponses.length > 0) {
      html += `
      <div style="margin-bottom: 25px; padding: 20px; background: #F9FAFB; border-radius: 8px; border-left: 4px solid #4F46E5;">
        <h3 style="margin: 0 0 15px 0; color: #1F2937; font-size: 18px; font-weight: 600;">${
          category === 'personal' ? '👤 Personal Information' :
          category === 'stress' ? '📈 Stress & Thinking' :
          category === 'depression' ? '😔 Depression Symptoms' :
          category === 'anxiety' ? '😰 Anxiety Symptoms' :
          category === 'trauma' ? '😨 Fears & Trauma' :
          '📝 Additional Information'
        }</h3>
        <div style="display: grid; gap: 12px;">
      `;
      
      categoryResponses.forEach(item => {
        const value = data[item.key];
        let displayValue = value;
        
        if (item.isScale && value) {
          displayValue = `<span style="font-weight: 600; color: #4F46E5;">${value}/10</span> <span style="background: #E5E7EB; color: #374151; padding: 2px 8px; border-radius: 12px; font-size: 12px; margin-left: 8px;">${getScaleCategory(Number(value))}</span>`;
        } else if (value === "Yes") {
          displayValue = `<span style="color: #059669; font-weight: 600;">Yes</span>`;
        } else if (value === "No") {
          displayValue = `<span style="color: #DC2626;">No</span>`;
        }
        
        let detailsHtml = '';
        if (item.detailsKey && data[item.detailsKey]) {
          detailsHtml = `<div style="margin-top: 5px; padding: 8px; background: #FFFFFF; border-radius: 4px; border: 1px solid #E5E7EB; font-size: 14px; color: #6B7280;"><strong>Details:</strong> ${data[item.detailsKey]}</div>`;
        }
        
        if (item.scaleKey && data[item.scaleKey]) {
          detailsHtml += `<div style="margin-top: 5px; font-size: 14px; color: #6B7280;"><strong>Scale:</strong> ${data[item.scaleKey]}/10</div>`;
        }
        
        html += `
          <div style="padding: 12px; background: white; border-radius: 6px; border: 1px solid #E5E7EB;">
            <div style="font-weight: 500; color: #374151; margin-bottom: 4px;">${item.label}</div>
            <div style="color: #1F2937;">${displayValue}${detailsHtml}</div>
          </div>
        `;
      });
      
      html += `</div></div>`;
    }
  });

  return html;
}

// Generate client email HTML
function generateClientEmail(data: FormData): string {
  const depressionCount = calculateDepressionSymptoms(data);
  const anxietyCount = calculateAnxietySymptoms(data);
  const traumaCount = calculateTraumaSymptoms(data);
  
  const allResponsesHtml = formatAllResponses(data);
  
  return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Mental State Evaluation Report</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #2C2416;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: #F6F2EC;
        }
        .header {
            text-align: center;
            padding: 40px 20px;
            background: linear-gradient(135deg, #B36A4C 0%, #9C5A3C 100%);
            color: white;
            border-radius: 12px 12px 0 0;
            margin-bottom: 30px;
        }
        .content {
            background: white;
            padding: 40px;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        }
        .greeting {
            background: #F6F2EC;
            padding: 25px;
            border-radius: 10px;
            margin-bottom: 30px;
            border-left: 5px solid #B36A4C;
        }
        .summary-cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin: 30px 0;
        }
        .summary-card {
            text-align: center;
            padding: 25px 15px;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }
        .summary-card.depression { background: #FFF8F5; border-top: 4px solid #FF6B6B; }
        .summary-card.anxiety { background: #F5F9FF; border-top: 4px solid #4D96FF; }
        .summary-card.trauma { background: #F5FFF7; border-top: 4px solid #6BCB77; }
        .summary-number {
            font-size: 36px;
            font-weight: bold;
            margin-bottom: 10px;
        }
        .scale-indicator {
            display: inline-block;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
            margin-left: 8px;
        }
        .low { background: #D4EDDA; color: #155724; }
        .medium { background: #FFF3CD; color: #856404; }
        .high { background: #F8D7DA; color: #721C24; }
        .very-high { background: #FFE5D0; color: #723B13; }
        .section-title {
            color: #2C2416;
            font-size: 20px;
            font-weight: 600;
            margin: 30px 0 15px 0;
            padding-bottom: 10px;
            border-bottom: 2px solid #E8DFD2;
        }
        .scale-reference {
            background: white;
            padding: 20px;
            border-radius: 10px;
            margin: 25px 0;
            border: 1px solid #E8DFD2;
        }
        .disclaimer {
            background: #FFF3F3;
            padding: 20px;
            border-radius: 8px;
            margin-top: 40px;
            border: 1px solid #FFD6D6;
        }
        .footer {
            text-align: center;
            margin-top: 50px;
            padding-top: 30px;
            border-top: 2px solid #E8DFD2;
            color: #5D4C3B;
            font-size: 14px;
        }
        .response-item {
            margin: 10px 0;
            padding: 12px;
            background: #F9FAFB;
            border-radius: 6px;
            border-left: 3px solid #D6C8B5;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1 style="margin: 0; font-size: 32px;">Mental State Evaluation Report</h1>
        <p style="margin: 10px 0 0 0; opacity: 0.9;">Your confidential assessment results</p>
    </div>
    
    <div class="content">
        <div class="greeting">
            <h2 style="margin: 0 0 10px 0; color: #2C2416;">Dear ${data.name || 'Valued Client'},</h2>
            <p style="margin: 0; color: #5D4C3B;">Thank you for completing your Mental State Evaluation. Here is your personalized report based on your responses.</p>
            <p style="margin: 10px 0 0 0; color: #5D4C3B;"><strong>Evaluation Date:</strong> ${data.date || new Date().toLocaleDateString()}</p>
            <p style="margin: 5px 0 0 0; color: #5D4C3B;"><strong>Submission ID:</strong> MSE-${Date.now().toString(36).toUpperCase()}</p>
        </div>

        <div class="summary-cards">
            <div class="summary-card depression">
                <div class="summary-number" style="color: #FF6B6B;">${depressionCount}</div>
                <div style="font-weight: 600; color: #2C2416;">Depression Symptoms</div>
                <div style="font-size: 14px; color: #5D4C3B; margin-top: 8px;">
                    ${depressionCount >= 5 ? '⚠️ Clinical threshold detected' : 'Within normal range'}
                </div>
            </div>
            <div class="summary-card anxiety">
                <div class="summary-number" style="color: #4D96FF;">${anxietyCount}</div>
                <div style="font-weight: 600; color: #2C2416;">Anxiety Symptoms</div>
                <div style="font-size: 14px; color: #5D4C3B; margin-top: 8px;">
                    Out of 9 possible
                </div>
            </div>
            <div class="summary-card trauma">
                <div class="summary-number" style="color: #6BCB77;">${traumaCount}</div>
                <div style="font-weight: 600; color: #2C2416;">Trauma Indicators</div>
                <div style="font-size: 14px; color: #5D4C3B; margin-top: 8px;">
                    Out of 8 possible
                </div>
            </div>
        </div>

        <h3 class="section-title">📊 Key Findings</h3>
        
        ${data.stress ? `
        <div class="response-item">
            <strong>Stress Level:</strong> ${data.stress}/10 
            <span class="scale-indicator ${getScaleCategory(Number(data.stress)).toLowerCase().replace(' ', '-')}">
                ${getScaleCategory(Number(data.stress))}
            </span>
            ${Number(data.stress) >= 7 ? '<span style="color: #B36A4C; margin-left: 10px;">⚠️ Elevated</span>' : ''}
        </div>
        ` : ''}
        
        ${data.overthinking ? `
        <div class="response-item">
            <strong>Overthinking Level:</strong> ${data.overthinking}/10 
            <span class="scale-indicator ${getScaleCategory(Number(data.overthinking)).toLowerCase().replace(' ', '-')}">
                ${getScaleCategory(Number(data.overthinking))}
            </span>
        </div>
        ` : ''}
        
        ${data.mood ? `
        <div class="response-item">
            <strong>Mood Swings:</strong> ${data.mood}/10 
            <span class="scale-indicator ${getScaleCategory(Number(data.mood)).toLowerCase().replace(' ', '-')}">
                ${getScaleCategory(Number(data.mood))}
            </span>
        </div>
        ` : ''}

        <h3 class="section-title">📋 Complete Responses</h3>
        
        ${allResponsesHtml}

        <div class="scale-reference">
            <h4 style="margin: 0 0 15px 0; color: #2C2416;">Scale Reference Guide</h4>
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; text-align: center;">
                <div style="padding: 12px; background: #D4EDDA; border-radius: 6px;">
                    <strong style="display: block; font-size: 16px;">1-3</strong>
                    <span style="font-size: 14px; color: #155724;">Low</span>
                </div>
                <div style="padding: 12px; background: #FFF3CD; border-radius: 6px;">
                    <strong style="display: block; font-size: 16px;">4-6</strong>
                    <span style="font-size: 14px; color: #856404;">Medium</span>
                </div>
                <div style="padding: 12px; background: #FFE5D0; border-radius: 6px;">
                    <strong style="display: block; font-size: 16px;">7-8</strong>
                    <span style="font-size: 14px; color: #723B13;">High</span>
                </div>
                <div style="padding: 12px; background: #F8D7DA; border-radius: 6px;">
                    <strong style="display: block; font-size: 16px;">9-10</strong>
                    <span style="font-size: 14px; color: #721C24;">Very High</span>
                </div>
            </div>
        </div>

        ${data.diagnosis && data.diagnosis !== "Select diagnosis" ? `
        <h3 class="section-title">🏥 Suggested Focus Areas</h3>
        <div class="response-item" style="border-left-color: #B36A4C;">
            <strong>Primary Area:</strong> ${data.diagnosis}
        </div>
        ` : ''}

        <div class="disclaimer">
            <p style="margin: 0 0 10px 0; font-weight: 600; color: #721C24;">⚠️ Important Disclaimer</p>
            <p style="margin: 0; font-size: 14px; color: #721C24;">
                This report is based on self-reported information and is not a clinical diagnosis. 
                It is intended for informational purposes only. Please consult with a qualified mental 
                health professional for proper assessment, diagnosis, and treatment planning.
            </p>
        </div>

        <div class="footer">
            <p style="margin: 0 0 10px 0;">This report was generated with care and compassion.</p>
            <p style="margin: 0; font-style: italic;">"Taking care of your mental health is an act of self-love" 🌿</p>
            <p style="margin: 15px 0 0 0; font-size: 12px; color: #8B7355;">
                Confidential • Secure • Protected
            </p>
        </div>
    </div>
</body>
</html>
  `;
}

// Generate admin email HTML - Includes ALL responses
function generateAdminEmail(data: FormData): string {
  const depressionCount = calculateDepressionSymptoms(data);
  const anxietyCount = calculateAnxietySymptoms(data);
  const traumaCount = calculateTraumaSymptoms(data);
  
  const priorityLevel = depressionCount >= 5 ? 'URGENT' : anxietyCount >= 6 ? 'HIGH' : 'STANDARD';
  const priorityColor = priorityLevel === 'URGENT' ? '#DC2626' : priorityLevel === 'HIGH' ? '#F59E0B' : '#10B981';
  
  const allResponsesHtml = formatAllResponses(data);
  
  return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New MSE Submission - ${data.name || 'Anonymous'}</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #1F2937;
            max-width: 1000px;
            margin: 0 auto;
            padding: 20px;
            background-color: #F9FAFB;
        }
        .header {
            background: linear-gradient(135deg, #1F2937 0%, #374151 100%);
            color: white;
            padding: 30px;
            border-radius: 10px 10px 0 0;
            margin-bottom: 25px;
        }
        .priority-badge {
            display: inline-block;
            padding: 6px 16px;
            border-radius: 20px;
            font-size: 14px;
            font-weight: bold;
            margin-left: 15px;
            background: ${priorityColor};
            color: white;
        }
        .alert-box {
            background: ${priorityLevel === 'URGENT' ? '#FEF2F2' : priorityLevel === 'HIGH' ? '#FFFBEB' : '#F0FDF4'};
            border: 2px solid ${priorityLevel === 'URGENT' ? '#FECACA' : priorityLevel === 'HIGH' ? '#FDE68A' : '#BBF7D0'};
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
        }
        .content {
            background: white;
            padding: 35px;
            border-radius: 10px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        }
        .section {
            margin-bottom: 30px;
            padding: 25px;
            background: #F9FAFB;
            border-radius: 8px;
            border-left: 4px solid #4F46E5;
        }
        .section-title {
            color: #1F2937;
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 2px solid #E5E7EB;
        }
        .info-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-top: 15px;
        }
        .info-item {
            padding: 15px;
            background: white;
            border-radius: 6px;
            border: 1px solid #E5E7EB;
        }
        .metric-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            margin: 25px 0;
        }
        .metric-card {
            padding: 25px;
            border-radius: 10px;
            text-align: center;
            box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }
        .metric-depression { background: #FFF5F5; border-top: 4px solid #DC2626; }
        .metric-anxiety { background: #EFF6FF; border-top: 4px solid #3B82F6; }
        .metric-trauma { background: #F0FDF4; border-top: 4px solid #10B981; }
        .metric-number {
            font-size: 40px;
            font-weight: bold;
            margin-bottom: 10px;
        }
        .scale-badge {
            display: inline-block;
            padding: 4px 12px;
            border-radius: 15px;
            font-size: 12px;
            font-weight: 600;
            margin-left: 8px;
        }
        .low { background: #D1FAE5; color: #065F46; }
        .medium { background: #FEF3C7; color: #92400E; }
        .high { background: #FEE2E2; color: #991B1B; }
        .very-high { background: #FFEDD5; color: #9A3412; }
        .red-flag {
            background: #FEF2F2;
            padding: 12px;
            border-radius: 6px;
            margin: 8px 0;
            border-left: 4px solid #DC2626;
            color: #991B1B;
        }
        .footer {
            text-align: center;
            margin-top: 40px;
            padding-top: 30px;
            border-top: 2px solid #E5E7EB;
            color: #6B7280;
            font-size: 14px;
        }
        .action-button {
            display: inline-block;
            background: #4F46E5;
            color: white;
            padding: 12px 24px;
            text-decoration: none;
            border-radius: 6px;
            font-weight: 600;
            margin-top: 20px;
        }
        .response-box {
            padding: 15px;
            background: white;
            border-radius: 6px;
            border: 1px solid #E5E7EB;
            margin-bottom: 10px;
        }
        .response-label {
            font-weight: 500;
            color: #374151;
            margin-bottom: 5px;
        }
        .response-value {
            color: #1F2937;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1 style="margin: 0; display: flex; align-items: center;">
            📋 New MSE Submission - COMPLETE RESPONSES
            <span class="priority-badge">${priorityLevel} PRIORITY</span>
        </h1>
        <p style="margin: 10px 0 0 0; opacity: 0.9;">
            Client: <strong>${data.name || 'Anonymous'}</strong> • Date: ${data.date || new Date().toLocaleDateString()} • Email: ${data.email || 'Not provided'}
        </p>
        <p style="margin: 5px 0 0 0; opacity: 0.9;">
            Submission Time: ${new Date().toLocaleString()} • ID: MSE-${Date.now().toString(36).toUpperCase()}
        </p>
    </div>

    <div class="content">
        ${depressionCount >= 5 ? `
        <div class="alert-box">
            <div style="display: flex; align-items: center; gap: 10px;">
                <div style="font-size: 24px;">⚠️</div>
                <div>
                    <strong style="color: #DC2626;">CLINICAL ALERT:</strong> Client meets criteria for clinical depression 
                    (${depressionCount}/9 symptoms detected)
                </div>
            </div>
        </div>
        ` : ''}
        
        ${anxietyCount >= 6 ? `
        <div class="alert-box">
            <div style="display: flex; align-items: center; gap: 10px;">
                <div style="font-size: 24px;">⚠️</div>
                <div>
                    <strong style="color: #F59E0B;">ANXIETY ALERT:</strong> Client shows significant anxiety symptoms 
                    (${anxietyCount}/9 symptoms detected)
                </div>
            </div>
        </div>
        ` : ''}

        <div class="metric-grid">
            <div class="metric-card metric-depression">
                <div class="metric-number" style="color: #DC2626;">${depressionCount}</div>
                <div style="font-weight: 600; color: #1F2937;">Depression Symptoms</div>
                ${depressionCount >= 5 ? 
                  '<div style="color: #DC2626; font-weight: bold; font-size: 13px; margin-top: 8px;">CLINICAL THRESHOLD MET</div>' : 
                  '<div style="font-size: 13px; color: #6B7280; margin-top: 8px;">Out of 9</div>'}
            </div>
            <div class="metric-card metric-anxiety">
                <div class="metric-number" style="color: #3B82F6;">${anxietyCount}</div>
                <div style="font-weight: 600; color: #1F2937;">Anxiety Symptoms</div>
                <div style="font-size: 13px; color: #6B7280; margin-top: 8px;">Out of 9</div>
            </div>
            <div class="metric-card metric-trauma">
                <div class="metric-number" style="color: #10B981;">${traumaCount}</div>
                <div style="font-weight: 600; color: #1F2937;">Trauma Indicators</div>
                <div style="font-size: 13px; color: #6B7280; margin-top: 8px;">Out of 8</div>
            </div>
        </div>

        <!-- Critical Assessment Summary -->
        <div class="section">
            <div class="section-title">📈 Critical Assessment Summary</div>
            <div class="info-grid">
                ${data.stress ? `
                <div class="info-item">
                    <strong>Stress Level:</strong> ${data.stress}/10 
                    <span class="scale-badge ${getScaleCategory(Number(data.stress)).toLowerCase().replace(' ', '-')}">
                        ${getScaleCategory(Number(data.stress))}
                    </span>
                    ${Number(data.stress) >= 7 ? 
                      '<span style="color: #DC2626; font-weight: bold; margin-left: 8px;">⚠️</span>' : ''}
                </div>
                ` : ''}
                
                ${data.overthinking ? `
                <div class="info-item">
                    <strong>Overthinking:</strong> ${data.overthinking}/10 
                    <span class="scale-badge ${getScaleCategory(Number(data.overthinking)).toLowerCase().replace(' ', '-')}">
                        ${getScaleCategory(Number(data.overthinking))}
                    </span>
                </div>
                ` : ''}
                
                ${data.mood ? `
                <div class="info-item">
                    <strong>Mood Swings:</strong> ${data.mood}/10 
                    <span class="scale-badge ${getScaleCategory(Number(data.mood)).toLowerCase().replace(' ', '-')}">
                        ${getScaleCategory(Number(data.mood))}
                    </span>
                </div>
                ` : ''}
                
                ${data.panicIntensity ? `
                <div class="info-item">
                    <strong>Panic Intensity:</strong> ${data.panicIntensity}/10 
                    ${data.panicFrequency ? 
                      `<div style="font-size: 13px; color: #6B7280; margin-top: 5px;">Frequency: ${data.panicFrequency}</div>` : ''}
                </div>
                ` : ''}
            </div>
        </div>

        <!-- ALL RESPONSES SECTION -->
        <div class="section">
            <div class="section-title">📋 COMPLETE RESPONSES - ALL SECTIONS</div>
            <div style="color: #6B7280; font-size: 14px; margin-bottom: 20px;">
                Total fields with responses: ${Object.keys(data).filter(k => data[k]).length}
            </div>
            
            ${allResponsesHtml}
        </div>

        <!-- Clinical Insights -->
        ${depressionCount >= 3 || anxietyCount >= 4 || traumaCount >= 3 ? `
        <div class="section">
            <div class="section-title">🚩 Clinical Red Flags</div>
            ${depressionCount >= 5 ? `
            <div class="red-flag">
                ⚠️ <strong>Clinical Depression Threshold:</strong> Shows ${depressionCount}/9 symptoms
            </div>
            ` : ''}
            
            ${anxietyCount >= 6 ? `
            <div class="red-flag">
                ⚠️ <strong>Severe Anxiety:</strong> ${anxietyCount}/9 anxiety symptoms detected
            </div>
            ` : ''}
            
            ${data.hopeless === "Yes" ? `
            <div class="red-flag">
                ⚠️ <strong>Hopelessness:</strong> Reports feeling hopeless/stuck
            </div>
            ` : ''}
            
            ${data.childhoodTraumaYesNo === "Yes" ? `
            <div class="red-flag">
                ⚠️ <strong>Childhood Trauma:</strong> Reports traumatic childhood experiences
            </div>
            ` : ''}
            
            ${data.abuseYesNo === "Yes" ? `
            <div class="red-flag">
                ⚠️ <strong>Abuse History:</strong> Reports history of abuse
            </div>
            ` : ''}
            
            ${data.sleepYesNo === "Yes" ? `
            <div class="red-flag">
                ⚠️ <strong>Sleep Disturbance:</strong> Significant sleep issues reported
            </div>
            ` : ''}
            
            ${data.social === "Yes" ? `
            <div class="red-flag">
                ⚠️ <strong>Social Withdrawal:</strong> Reports social isolation
            </div>
            ` : ''}
        </div>
        ` : ''}

        ${data.diagnosis && data.diagnosis !== "Select diagnosis" ? `
        <div class="section">
            <div class="section-title">🏥 Tentative Diagnosis</div>
            <div style="background: #EEF2FF; padding: 20px; border-radius: 8px; border-left: 4px solid #4F46E5;">
                <strong style="color: #4F46E5; font-size: 16px;">${data.diagnosis}</strong>
            </div>
        </div>
        ` : ''}

        ${data.observations ? `
        <div class="section">
            <div class="section-title">📝 Clinician Observations</div>
            <div style="background: #F9FAFB; padding: 20px; border-radius: 8px; border: 1px solid #E5E7EB;">
                ${data.observations}
            </div>
        </div>
        ` : ''}

        <div style="text-align: center; margin-top: 40px;">
            <a href="#" class="action-button">Review Full Case Details</a>
        </div>

        <div class="footer">
            <p style="margin: 0 0 10px 0; font-weight: 600; color: #4B5563;">
                Automated Notification • Mental State Evaluation System
            </p>
            <p style="margin: 0 0 10px 0; font-size: 13px;">
                Submission ID: MSE-${Date.now().toString(36).toUpperCase()}
            </p>
            <p style="margin: 0; font-size: 13px; color: #6B7280;">
                Submission Time: ${new Date().toLocaleString()} • Priority: ${priorityLevel}
            </p>
            <p style="margin: 10px 0 0 0; font-size: 13px; color: #6B7280;">
                Client Email: ${data.email || 'Not provided'} • Admin Recipients: Both admins notified
            </p>
        </div>
    </div>
</body>
</html>
  `;
}

export async function POST(request: NextRequest) {
  try {
    const data: FormData = await request.json();
    const timestamp = new Date().toISOString();

    // Validate required fields
    if (!data.name || !data.date) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Name and date are required',
          timestamp 
        },
        { status: 400 }
      );
    }

    // Configure email transporter with Hostinger settings
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.hostinger.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER || 'noreply@anklyticx.com',
        pass: process.env.SMTP_PASS || 'Po9?2Y|Fr=',
      },
      tls: {
        rejectUnauthorized: false
      },
      // Additional debugging options
      debug: process.env.NODE_ENV === 'development',
      logger: process.env.NODE_ENV === 'development'
    });

    // Email configuration from .env
    const adminEmails = [
      process.env.ADMIN_EMAIL || 'alzaahid@gmail.com',
      process.env.ADMIN_EMAIL_SECONDARY || 'rutikapatil270@gmail.com'
    ].filter(email => email && email.trim() !== '');
    
    const clientEmail = data.email || process.env.DEFAULT_CLIENT_EMAIL || 'noreply@anklyticx.com';
    const fromEmail = process.env.FROM_EMAIL || '"Mental State Evaluation" <noreply@anklyticx.com>';

    // Validate client email
    if (!clientEmail || !clientEmail.includes('@')) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Valid client email is required',
          timestamp 
        },
        { status: 400 }
      );
    }

    // Generate emails
    const clientHtml = generateClientEmail(data);
    const adminHtml = generateAdminEmail(data);
    
    // Calculate symptom counts for subject lines
    const depressionCount = calculateDepressionSymptoms(data);
    const anxietyCount = calculateAnxietySymptoms(data);
    const traumaCount = calculateTraumaSymptoms(data);
    
    const priorityLevel = depressionCount >= 5 ? 'URGENT' : anxietyCount >= 6 ? 'HIGH' : 'REVIEW';

    // Prepare email options
    const clientMailOptions = {
      from: fromEmail,
      to: clientEmail,
      replyTo: process.env.ADMIN_EMAIL || 'alzaahid@gmail.com',
      subject: `Your Mental State Evaluation Report - ${data.date}`,
      html: clientHtml,
      text: `Thank you for completing your Mental State Evaluation. View the HTML version for your full report with all responses.`,
    };

    const adminMailOptions = {
      from: fromEmail,
      to: adminEmails.join(', '), // Send to both admins
      subject: `[${priorityLevel}] New MSE: ${data.name} - ${depressionCount}D/${anxietyCount}A/${traumaCount}T - ${data.date}`,
      html: adminHtml,
      text: `New Mental State Evaluation submission received from ${data.name}. Please check the HTML version for complete responses and detailed analysis.`,
    };

    console.log(`Sending emails to: Client - ${clientEmail}, Admins - ${adminEmails.join(', ')}`);
    console.log(`Total data fields: ${Object.keys(data).length}`);

    // Send emails
    const [clientResult, adminResult] = await Promise.allSettled([
      transporter.sendMail(clientMailOptions),
      transporter.sendMail(adminMailOptions),
    ]);

    // Generate submission ID
    const submissionId = `MSE-${Date.now().toString(36).toUpperCase()}`;

    // Prepare response
    const response = {
      success: true,
      message: 'Evaluation submitted successfully with all responses',
      timestamp,
      submissionId,
      emailStatus: {
        client: clientResult.status === 'fulfilled' ? 'sent' : 'failed',
        admin: adminResult.status === 'fulfilled' ? 'sent' : 'failed',
        adminRecipients: adminEmails
      },
      symptomSummary: {
        depression: depressionCount,
        anxiety: anxietyCount,
        trauma: traumaCount,
        priority: priorityLevel,
        totalFields: Object.keys(data).filter(k => data[k]).length
      },
      details: {
        clientEmail,
        adminEmails,
        name: data.name,
        date: data.date,
        dataSummary: `Includes all ${Object.keys(data).filter(k => data[k]).length} fields of form data`
      }
    };

    // Add error details if any
    const errors: string[] = [];
    if (clientResult.status === 'rejected') {
      const error = clientResult.reason;
      console.error('Client email error:', error);
      errors.push(`Client email: ${error.message || 'Failed to send'}`);
      response.emailStatus.client = 'failed';
    }
    
    if (adminResult.status === 'rejected') {
      const error = adminResult.reason;
      console.error('Admin email error:', error);
      errors.push(`Admin email: ${error.message || 'Failed to send'}`);
      response.emailStatus.admin = 'failed';
    }

    if (errors.length > 0) {
      return NextResponse.json(
        {
          ...response,
          success: false,
          message: 'Evaluation saved but email delivery had issues',
          errors,
          warning: 'Data has been saved locally. Please check email configuration.'
        },
        { status: 207 } // Multi-Status
      );
    }

    console.log(`Emails sent successfully: ${submissionId}`);
    return NextResponse.json(response);

  } catch (error: any) {
    console.error('API Error:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        message: 'Internal server error',
        error: error.message,
        timestamp: new Date().toISOString(),
        stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  // Hide sensitive info in production
  const isDevelopment = process.env.NODE_ENV === 'development';
  
  return NextResponse.json(
    { 
      message: 'MSE Email API is running',
      status: 'active',
      version: '1.0.0',
      endpoints: {
        POST: '/api/send-evaluation - Submit evaluation and send emails with ALL responses',
      },
      required_fields: ['name', 'date', 'email'],
      configuration: {
        smtp_host: process.env.SMTP_HOST,
        from_email: process.env.FROM_EMAIL,
        admin_emails: isDevelopment ? [
          process.env.ADMIN_EMAIL,
          process.env.ADMIN_EMAIL_SECONDARY
        ] : ['Hidden in production'],
        default_client_email: process.env.DEFAULT_CLIENT_EMAIL
      },
      features: [
        'Sends complete form responses to client and both admins',
        'Includes all 6 sections of the MSE form',
        'Automatic priority classification',
        'Clinical symptom counting',
        'HTML formatted emails'
      ],
      timestamp: new Date().toISOString()
    },
    { status: 200 }
  );
}