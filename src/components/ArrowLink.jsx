import { Link } from 'react-router-dom';

function ArrowLink({ to, children, external = false }) {
  const className = 'group inline-flex items-center gap-3 border-2 border-black bg-white px-4 py-3 font-mono text-xs font-bold uppercase transition duration-300 hover:-translate-y-1 hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2';
  const content = <><span>{children}</span><span className="text-base transition-transform duration-300 group-hover:translate-x-1">→</span></>;

  if (external) {
    return <a className={className} href={to} target="_blank" rel="noreferrer">{content}</a>;
  }

  return <Link className={className} to={to}>{content}</Link>;
}

export default ArrowLink;
