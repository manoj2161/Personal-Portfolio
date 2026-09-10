import ArrowLink from '../components/ArrowLink';
import Reveal from '../components/Reveal';
import SectionLabel from '../components/SectionLabel';

const contacts = [
  { label: 'EMAIL', value: 'thakurmanu065@gmail.com', href: 'mailto:thakurmanu065@gmail.com' },
  { label: 'PHONE', value: '+91 8091468213', href: 'tel:+918091468213' },
  { label: 'GITHUB', value: 'github.com/manoj2161', href: 'https://github.com/manoj2161' },
  { label: 'LINKEDIN', value: 'linkedin.com/in/manoj-kumar-811245200', href: 'https://www.linkedin.com/in/manoj-kumar-811245200' },
];

function Contact() {
  return (
    <div className="w-full py-12 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-[0.32fr_1fr]">
        <Reveal><SectionLabel number="03">Contact / Connect</SectionLabel></Reveal>
        <div>
          <Reveal className="border-4 border-black bg-black p-6 text-white sm:p-10 lg:p-14">
            <p className="font-mono text-xs font-bold uppercase">OPEN TO OPPORTUNITIES</p>
            <h1 className="mt-8 text-6xl font-black uppercase leading-[0.76] tracking-[-0.08em] sm:text-8xl lg:text-9xl">LET'S<br />TALK.</h1>
            <p className="mt-10 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">Looking for a developer role and opportunities to build practical web applications. The fastest way to reach me is email.</p>
          </Reveal>

          <Reveal delay={100} className="mt-8 border-4 border-black">
            {contacts.map((contact, index) => (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noreferrer' : undefined}
                className={`group flex flex-col gap-4 p-5 transition duration-300 hover:bg-black hover:text-white sm:flex-row sm:items-center sm:justify-between sm:p-7 ${index !== contacts.length - 1 ? 'border-b-4 border-black' : ''}`}
              >
                <span className="font-mono text-xs font-bold">{contact.label}</span>
                <span className="break-all text-xl font-black uppercase tracking-[-0.03em] sm:text-2xl">{contact.value}</span>
                <span className="text-3xl transition-transform duration-300 group-hover:translate-x-2">→</span>
              </a>
            ))}
          </Reveal>

          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            <Reveal className="border-4 border-black p-6">
              <p className="font-mono text-xs font-bold uppercase">RESUME</p>
              <p className="mt-6 text-3xl font-black uppercase leading-none">Manoj Kumar<br />Resume.pdf</p>
              <div className="mt-8"><ArrowLink to="/Manoj_Kumar_Resume.pdf" external>Open Resume</ArrowLink></div>
            </Reveal>
            <Reveal delay={100} className="border-4 border-black p-6">
              <p className="font-mono text-xs font-bold uppercase">RESPONSE CHANNEL</p>
              <p className="mt-6 text-3xl font-black uppercase leading-none">Email<br />Preferred</p>
              <a className="mt-8 inline-block font-mono text-xs font-bold underline underline-offset-4 transition-transform duration-300 hover:translate-x-1" href="mailto:thakurmanu065@gmail.com">SEND EMAIL →</a>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
