
import React from 'react';
import { Link } from 'react-router-dom';

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3l-.5 3h-2.5v6.8c4.56-.93 8-4.96 8-9.8z"></path></svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.7 2 8.3 2.1 7.1 2.2c-1.2.1-2.1.3-2.9.6-.8.3-1.5.7-2.1 1.3-.6.6-1 1.3-1.3 2.1-.3.8-.5 1.7-.6 2.9C2.1 8.3 2 8.7 2 12s.1 3.7.2 4.9c.1 1.2.3 2.1.6 2.9.3.8.7 1.5 1.3 2.1.6.6 1.3 1 2.1 1.3.8.3 1.7.5 2.9.6 1.2.1 1.6.2 4.9.2s3.7-.1 4.9-.2c1.2-.1 2.1-.3 2.9-.6.8-.3 1.5-.7 2.1-1.3.6-.6 1-1.3 1.3-2.1.3-.8.5-1.7.6-2.9.1-1.2.2-1.6.2-4.9s-.1-3.7-.2-4.9c-.1-1.2-.3-2.1-.6-2.9-.3-.8-.7-1.5-1.3-2.1-.6-.6-1.3-1-2.1-1.3-.8-.3-1.7-.5-2.9-.6C15.7 2.1 15.3 2 12 2zm0 1.8c3.2 0 3.6 0 4.8.1.9.1 1.5.2 1.9.4.5.2.9.5 1.3.9s.7.8.9 1.3c.2.4.3 1 .4 1.9.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1.9-.2 1.5-.4 1.9-.2.5-.5.9-.9 1.3s-.8.7-1.3.9c-.4.2-1 .3-1.9.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-.9-.1-1.5-.2-1.9-.4-.5-.2-.9-.5-1.3-.9s-.7-.8-.9-1.3c-.2-.4-.3-1-.4-1.9-.1-1.2-.1-1.6-.1-4.8s0-3.6.1-4.8c.1-.9.2-1.5.4-1.9.2-.5.5-.9.9-1.3s.8-.7 1.3-.9c.4-.2 1-.3 1.9-.4C8.4 3.9 8.8 3.8 12 3.8zm0 4.4c-2.4 0-4.4 2-4.4 4.4s2 4.4 4.4 4.4 4.4-2 4.4-4.4-2-4.4-4.4-4.4zm0 7.2c-1.5 0-2.8-1.3-2.8-2.8s1.3-2.8 2.8-2.8 2.8 1.3 2.8 2.8-1.3 2.8-2.8 2.8zm5.2-7.4c0 .6-.4 1-1 1s-1-.4-1-1 .4-1 1-1 1 .4 1 1z"></path></svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M22.46 6c-.77.34-1.6.57-2.47.67.89-.53 1.56-1.37 1.88-2.38-.83.49-1.75.85-2.72 1.04C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71-.02-1.37-.22-1.95-.54v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.94.07 4.28 4.28 0 0 0 4 2.98 8.52 8.52 0 0 1-5.33 1.84c-.34 0-.68-.02-1.01-.06A12.07 12.07 0 0 0 8.81 20c7.34 0 11.35-6.08 11.35-11.35 0-.17 0-.34-.01-.51.78-.57 1.45-1.28 1.97-2.09z"></path></svg>
);


const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-dark text-neutral-200 mt-auto">
      <div className="container mx-auto py-6 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
            <div className="flex-1">
                <p>&copy; {new Date().getFullYear()} Basti Ki Pathshala. All Rights Reserved.</p>
                <p className="text-sm text-neutral-400 mt-1">Made with ❤️ for a better future.</p>
            </div>
            <div className="flex-1 flex justify-center items-center gap-4">
                <Link to="/contact" className="text-sm text-neutral-300 hover:text-white transition-colors">Contact Us</Link>
                <span className="text-neutral-500">|</span>
                <Link to="/register" className="text-sm text-neutral-300 hover:text-white transition-colors">Volunteer</Link>
                <span className="text-neutral-500">|</span>
                <Link to="/admin" className="text-sm text-neutral-300 hover:text-white transition-colors">Admin</Link>
            </div>
            <div className="flex-1 flex justify-center md:justify-end space-x-6">
                <a href="#" aria-label="Facebook" className="text-neutral-400 hover:text-white transition-colors"><FacebookIcon/></a>
                <a href="#" aria-label="Instagram" className="text-neutral-400 hover:text-white transition-colors"><InstagramIcon/></a>
                <a href="#" aria-label="Twitter" className="text-neutral-400 hover:text-white transition-colors"><TwitterIcon/></a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
