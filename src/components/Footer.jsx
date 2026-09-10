function Footer() {
  return (
    <footer className="border-t-4 border-black bg-black text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 md:flex-row md:items-end md:justify-between lg:px-8">
        <div>
          <p className="text-3xl font-black tracking-[-0.06em] transition-transform duration-300 hover:translate-x-1 sm:text-4xl">MANOJ KUMAR</p>
          <p className="mt-1 font-mono text-xs uppercase tracking-[0.15em]">React Developer</p>
        </div>
        <div className="flex flex-wrap gap-4 font-mono text-xs font-bold uppercase">
          <a className="underline underline-offset-4 transition hover:no-underline" href="https://github.com/manoj2161" target="_blank" rel="noreferrer">GitHub</a>
          <a className="underline underline-offset-4 transition hover:no-underline" href="https://www.linkedin.com/in/manoj-kumar-811245200" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="underline underline-offset-4 transition hover:no-underline" href="mailto:thakurmanu065@gmail.com">Email</a>
          <span>2026</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
