import React from 'react';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="w-full py-10 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="mb-4">
            <a href="https://github.com/rudrakshsimlote" target="_blank" rel="noopener noreferrer" className="text-2xl mx-2"><FaGithub /></a>
            <a href="https://www.instagram.com/rudrakshsimlote/" target="_blank" rel="noopener noreferrer" className="text-2xl mx-2"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/rudrakshsimlote/" target="_blank" rel="noopener noreferrer" className="text-2xl mx-2"><FaLinkedinIn /></a>
          </div>
          <p className="text-center text-gray-500">&copy; {new Date().getFullYear()} Rudraksh Simlote. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
