import React from 'react';
import { FaInstagram, FaYoutube, FaFacebook, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col items-center md:flex-row md:justify-between">
        <p className="mb-4 md:mb-0 text-center md:text-left">
          © Divyang First Foundation. All rights reserved.
        </p>
        <ul className="flex space-x-4 mb-4 md:mb-0">
          <li>
            <a href="#" className="text-blue-100 hover:text-gray-400">
              Terms of Services
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-100 hover:text-gray-400">
              Privacy Policy
            </a>
          </li>
        </ul>
        <div className="flex space-x-4">
          <a
            href="https://www.instagram.com/divyangdiaries?igsh=NTc4MTIwNjQ2YQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-gray-100"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://youtube.com/@divyangfirstfoundation?si=6dESXMF_ufRlbGi5"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-gray-100"
          >
            <FaYoutube size={24} />
          </a>
          <a
            href="https://www.facebook.com/share/2qm3D1CidPkwNLwa/?mibextid=qi2Omg"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-gray-100"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-gray-100"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
