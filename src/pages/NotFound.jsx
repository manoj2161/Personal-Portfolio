import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';

function NotFound() {
  return (
    <div className="flex min-h-[65vh] w-full items-center py-16">
      <Reveal className="w-full border-4 border-black bg-black p-6 text-white sm:p-10 lg:p-14">
        <p className="font-mono text-xs font-bold uppercase">ERROR / ROUTE NOT FOUND</p>
        <p className="mt-6 text-[28vw] font-black leading-[0.65] tracking-[-0.1em] sm:text-[18rem]">404</p>
        <div className="mt-12 flex flex-col gap-6 border-t-2 border-white pt-6 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-xl text-xl font-black uppercase">This page does not exist. The rest of the system is still operational.</p>
          <Link to="/" className="border-2 border-white px-5 py-3 font-mono text-xs font-bold uppercase transition duration-300 hover:bg-white hover:text-black">Return Home →</Link>
        </div>
      </Reveal>
    </div>
  );
}

export default NotFound;
