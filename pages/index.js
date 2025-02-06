import Hero from '../components/Hero';
import TechSkills from '../components/TechSkills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div>
      <Hero />
      <TechSkills />
      <Projects />
      <Contact />
    </div>
  );
}