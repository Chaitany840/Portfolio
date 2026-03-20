import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { ProblemSolving } from "./components/ProblemSolving";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ProblemSolving />
      <Contact />
    </div>
  );
}
