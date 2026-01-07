import Hero from "./components/home/Hero";
import Problem from "./components/home/Problem";
import Empathy from "./components/home/Empathy";
import Guide from "./components/home/Guide";
import Services from "./components/home/Services";
import Specialisation from "./components/home/Specialisation";
import Plan from "./components/home/Plan";
import CTA from "./components/home/CTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Empathy />
      <Guide />
      <Services />
      <Specialisation />
      <Plan />
      <CTA />
    </main>
  );
}
