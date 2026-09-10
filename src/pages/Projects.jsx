import ProjectCard from '../components/ProjectCard';
import Reveal from '../components/Reveal';
import SectionLabel from '../components/SectionLabel';
import { projects } from '../data/projects';

function Projects() {
  return (
    <div className="w-full py-12 lg:py-20">
      <Reveal>
        <div className="border-b-4 border-black pb-8">
          <SectionLabel number="02">Project Archive</SectionLabel>
          <h1 className="mt-8 text-6xl font-black uppercase leading-[0.78] tracking-[-0.08em] sm:text-8xl">PROJECT<br />INDEX</h1>
          <p className="mt-7 max-w-2xl text-base leading-7">A collection of practical web applications. No filler projects — just work that represents what I am learning and building.</p>
        </div>
      </Reveal>

      <div className="mt-8 space-y-8">
        {projects.map((project, index) => (
          <Reveal key={project.number} delay={index * 100}>
            <ProjectCard project={project} featured={project.number === '01'} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export default Projects;
