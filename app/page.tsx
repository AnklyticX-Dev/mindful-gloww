import Hero from "./components/home/Hero";
import Problem from "./components/home/Problem";
import Empathy from "./components/home/Empathy";
import Guide from "./components/home/Guide";
import Services from "./components/home/Services";
import Specialisation from "./components/home/Specialisation";
import Form from "./components/home/form";
import Plan from "./components/home/Plan";
import CTA from "./components/home/CTA";
import Questionnaire from "./components/home/Questionare";

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Empathy />
      <Form />
      <Guide />
      {/* <Services /> */}
      <Specialisation />
      <Plan />
      <CTA />
      <Questionnaire />
    </main>
  );
}
