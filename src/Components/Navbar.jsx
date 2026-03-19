import { RiCloseLine, RiMenu2Line } from '@remixicon/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20">
      <span className="text-xl font-bold tracking-wide">Portfolio</span>

      {/* Navigation Links */}
      <ul
        className={`${
          menuOpen ? 'block' : 'hidden'
        } w-full transition-all duration-300 md:w-auto md:flex md:static md:bg-transparent bg-black bg-opacity-80 md:border-none text-center gap-6 font-semibold rounded-xl mt-4 py-2 md:mt-0`}
      >
        <Link to="/" className="block text-md transition-all duration-300 p-2 md:p-0 hover:text-[#ff4d5a]" onClick={() => setMenuOpen(false)}>
          Home
        </Link>
        <Link to="/About" className="block text-md transition-all duration-300 p-2 md:p-0 hover:text-[#ff4d5a]" onClick={() => setMenuOpen(false)}>
          About
        </Link>
        <Link to="/Experience" className="block text-md transition-all duration-300 p-2 md:p-0 hover:text-[#ff4d5a]" onClick={() => setMenuOpen(false)}>
          Experience
        </Link>
        <Link to="/Projects" className="block text-md transition-all duration-300 p-2 md:p-0 hover:text-[#ff4d5a]" onClick={() => setMenuOpen(false)}>
          Projects
        </Link>
        <Link to="/Contact" className="block text-md transition-all duration-300 p-2 md:p-0 hover:text-[#ff4d5a]" onClick={() => setMenuOpen(false)}>
          Contact
        </Link>
      </ul>

      {/* Toggle Icons */}
      <div className="md:hidden absolute right-10 top-6 transition-all duration-300">
        {menuOpen ? (
          <RiCloseLine 
            size={30} 
            onClick={() => setMenuOpen(false)} 
            className="cursor-pointer"
          />
        ) : (
          <RiMenu2Line 
            size={30} 
            onClick={() => setMenuOpen(true)} 
            className="cursor-pointer"
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;