import { Link } from 'react-router-dom';
import ArrowLink from '../components/ArrowLink';
import ProjectCard from '../components/ProjectCard';
import Reveal from '../components/Reveal';
import SectionLabel from '../components/SectionLabel';
import { projects } from '../data/projects';

function Home() {
  return (
    <div>
      <section className="grid border-b-4 border-black lg:grid-cols-[1.2fr_0.8fr]">
        <div className="reveal border-b-4 border-black p-5 sm:p-8 lg:border-b-0 lg:border-r-4 lg:p-10">
          <SectionLabel number="00">Identity / Frontend</SectionLabel>
          <p className="mt-12 font-mono text-xs font-bold uppercase tracking-[0.16em]">AVAILABLE FOR OPPORTUNITIES</p>
          <h1 className="mt-3 text-[18vw] font-black uppercase leading-[0.72] tracking-[-0.09em] sm:text-[13vw] lg:text-[9.3rem]">MANOJ</h1>
          <div className="mt-7 border-t-4 border-black pt-5">
            <p className="text-3xl font-black uppercase leading-none tracking-[-0.04em] sm:text-5xl">React Developer</p>
            <p className="mt-5 max-w-2xl text-base leading-7 sm:text-lg">I build web applications with React and Tailwind and make them responsive, good-looking, and interactive.</p>
          </div>
        </div>

        <div className="reveal reveal-delay-1 grid grid-cols-2 lg:grid-cols-1">
          <div className="col-span-2 flex min-h-32 flex-col justify-between border-b-4 border-black p-5 lg:col-span-1">
            <span className="font-mono text-[10px] font-bold uppercase">CURRENT MODE</span>
            <strong className="mt-8 text-3xl font-black uppercase tracking-[-0.04em]">MERN TRAINEE</strong>
            <span className="mt-2 font-mono text-xs uppercase">APNITOR SOLUTIONS / MOHALI</span>
          </div>
          <div className="border-r-4 border-black p-5 lg:border-r-0 lg:border-b-4">
            <span className="font-mono text-[10px] font-bold uppercase">EDUCATION</span>
            <p className="mt-7 text-2xl font-black uppercase leading-none">BCA<br />GRADUATE</p>
          </div>
          <div className="p-5 lg:border-b-4 lg:border-black">
            <span className="font-mono text-[10px] font-bold uppercase">FOCUS</span>
            <p className="mt-7 text-2xl font-black uppercase leading-none">PRACTICAL<br />APPS</p>
          </div>
          <div className="col-span-2 border-t-4 border-black bg-black p-5 text-white">
            <span className="font-mono text-[10px] font-bold uppercase">STACK / CURRENT</span>
            <p className="mt-5 font-mono text-xs font-bold uppercase leading-7">HTML / CSS / JAVASCRIPT<br />REACT / TAILWIND CSS<br />LEARNING: MERN STACK</p>
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-y-4 border-black bg-black py-3 text-white" aria-hidden="true">
        <div className="ticker-track flex w-max font-mono text-sm font-bold uppercase tracking-[0.15em]">
          <span className="px-5">BUILD PRACTICAL WEB APPLICATIONS ★ REACT DEVELOPER ★ RESPONSIVE UI ★ </span>
          <span className="px-5">BUILD PRACTICAL WEB APPLICATIONS ★ REACT DEVELOPER ★ RESPONSIVE UI ★ </span>
        </div>
      </div>

      <section className="w-full py-16 sm:py-20 lg:py-24">
        <div className="border-b-4 border-black px-0 pb-7">
          <div className="flex flex-col gap-6 px-0 sm:flex-row sm:items-end sm:justify-between">
            <Reveal>
              <div className="pl-0">
                <SectionLabel number="01">Selected Work</SectionLabel>
                <h2 className="mt-7 max-w-4xl px-0 text-5xl font-black uppercase leading-[0.84] tracking-[-0.065em] sm:text-7xl lg:text-8xl">Things I<br />actually built.</h2>
              </div>
            </Reveal>
            <div className="px-0 sm:pb-1"><ArrowLink to="/projects">All Projects</ArrowLink></div>
          </div>
        </div>

        <div className="mt-8 space-y-0">
          {projects.slice(0, 2).map((project, index) => (
            <Reveal key={project.number} delay={index * 100}>
              <ProjectCard project={project} featured={project.number === '01'} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y-4 border-black bg-white">
        <div className="grid lg:grid-cols-[1fr_1fr]">
          <Reveal className="border-b-4 border-black p-6 sm:p-10 lg:border-b-0 lg:border-r-4 lg:p-14">
            <SectionLabel number="02">Developer Statement</SectionLabel>
            <p className="mt-10 max-w-xl text-4xl font-black uppercase leading-[0.92] tracking-[-0.055em] sm:text-6xl">I like turning ideas into interfaces that people can actually use.</p>
          </Reveal>
          <Reveal delay={120} className="flex flex-col justify-between p-6 sm:p-10 lg:p-14">
            <p className="max-w-lg text-base leading-7 sm:text-lg">I am focused on practical applications, responsive UI, React, and learning the MERN stack through hands-on work. I am looking for a developer role where I can keep building and improving.</p>
            <div className="mt-12"><ArrowLink to="/contact">Start a Conversation</ArrowLink></div>
          </Reveal>
        </div>
      </section>

      <Reveal className="w-full py-16 sm:py-20 lg:py-24">
        <Link to="/contact" className="group block border-4 border-black bg-black p-6 text-white transition duration-300 hover:bg-white hover:text-black sm:p-10">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-xs font-bold uppercase">NEXT / CONTACT</p>
              <p className="mt-6 text-6xl font-black uppercase leading-[0.78] tracking-[-0.08em] sm:text-8xl">LET'S<br />BUILD.</p>
            </div>
            <span className="text-6xl transition-transform duration-300 group-hover:translate-x-3">→</span>
          </div>
        </Link>
      </Reveal>
    </div>
  );
}

export default Home;
