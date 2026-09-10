import ArrowLink from './ArrowLink';

function ProjectCard({ project, featured = false }) {
  return (
    <article className={`group border-4 border-black bg-white transition duration-500 ease-out hover:-translate-y-2 hover:shadow-[10px_10px_0_0_#000] ${featured ? 'lg:grid lg:grid-cols-[150px_1fr]' : ''}`}>
      <div className="border-b-4 border-black bg-black p-5 text-white lg:border-b-0 lg:border-r-4">
        <p className="font-mono text-xs font-bold uppercase">PROJECT</p>
        <p className="mt-1 text-6xl font-black leading-none tracking-[-0.08em] transition-transform duration-500 group-hover:translate-x-2 sm:text-7xl">{project.number}</p>
        <p className="mt-8 font-mono text-[10px] font-bold uppercase">STATUS: {project.status}</p>
      </div>

      <div className="flex flex-col p-5 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <h2 className="max-w-3xl text-3xl font-black uppercase leading-[0.9] tracking-[-0.055em] transition-transform duration-500 group-hover:translate-x-1 sm:text-4xl">{project.name}</h2>
          <span className="hidden font-mono text-2xl transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-1 sm:block">↗</span>
        </div>

        <p className="mt-6 max-w-2xl text-sm leading-6 text-black/75 sm:text-base">{project.description}</p>

        <div className="mt-7 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="border-2 border-black px-2 py-1 font-mono text-[10px] font-bold uppercase transition duration-300 hover:bg-black hover:text-white">{tech}</span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3 border-t-2 border-black pt-5">
          {project.live ? <ArrowLink to={project.live} external>Live Project</ArrowLink> : <span className="border-2 border-dashed border-black px-4 py-3 font-mono text-xs font-bold uppercase">Live — Coming Soon</span>}
          {project.github ? <ArrowLink to={project.github} external>GitHub</ArrowLink> : <span className="border-2 border-dashed border-black px-4 py-3 font-mono text-xs font-bold uppercase">GitHub — Coming Soon</span>}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
