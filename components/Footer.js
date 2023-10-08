import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-6 w-100 mt-5">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white">
          <h2 className="text-xl font-semibold">Movie Opener</h2>
          <p className="mt-2">Discover movies and TV shows</p>
        </div>  
      </div>
      <div className="mt-4 text-center text-gray-500">
        &copy; {new Date().getFullYear()} Made with ❤️ by harshit.
      </div>
    </footer>
  );
};

export default Footer;
