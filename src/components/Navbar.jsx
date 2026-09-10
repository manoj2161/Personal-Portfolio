import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  ['/', 'HOME'],
  ['/about', 'ABOUT'],
  ['/projects', 'PROJECTS'],
  ['/contact', 'CONTACT'],
];

function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `font-mono text-xs font-bold tracking-[0.12em] transition duration-300 ${isActive ? 'bg-black text-white' : 'hover:bg-black hover:text-white'} px-3 py-2`;

  return (
    <header className="sticky top-0 z-50 border-b-4 border-black bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8" aria-label="Main navigation">
        <NavLink to="/" onClick={() => setOpen(false)} className="font-mono text-sm font-black tracking-tight transition-transform duration-300 hover:-translate-y-0.5">
          MANOJ / 26
        </NavLink>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle navigation"
          className="border-2 border-black px-3 py-2 font-mono text-xs font-bold transition duration-300 hover:bg-black hover:text-white md:hidden"
        >
          {open ? 'CLOSE' : 'MENU'}
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {links.map(([to, label]) => <NavLink key={to} to={to} className={linkClass}>{label}</NavLink>)}
        </div>
      </nav>

      {open && (
        <div className="border-t-2 border-black bg-white px-4 py-3 md:hidden">
          <div className="grid grid-cols-2 gap-2">
            {links.map(([to, label]) => (
              <NavLink key={to} to={to} onClick={() => setOpen(false)} className={linkClass}>{label}</NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
