
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Button from './ui/Button';

const BookOpenIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-secondary-DEFAULT">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
    </svg>
);


const Header: React.FC = () => {
  const linkClasses = "px-3 py-2 rounded-md text-sm font-medium text-neutral-200 hover:bg-primary-light hover:text-white transition-colors";
  const activeLinkClasses = "bg-primary-light text-white";

  return (
    <header className="bg-primary-dark shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-2">
                <BookOpenIcon />
                <span className="text-white text-xl font-bold">Basti Ki Pathshala</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to="/" className={({ isActive }) => (isActive ? `${linkClasses} ${activeLinkClasses}` : linkClasses)}>Home</NavLink>
              <NavLink to="/register" className={({ isActive }) => (isActive ? `${linkClasses} ${activeLinkClasses}` : linkClasses)}>Register</NavLink>
              <NavLink to="/contact" className={({ isActive }) => (isActive ? `${linkClasses} ${activeLinkClasses}` : linkClasses)}>Contact</NavLink>
              <NavLink to="/admin" className={({ isActive }) => (isActive ? `${linkClasses} ${activeLinkClasses}` : linkClasses)}>Admin View</NavLink>
            </div>
             <Link to="/donate" className="ml-4">
                <Button variant="secondary">Donate Now</Button>
            </Link>
          </div>
          {/* Mobile menu button could be added here */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
