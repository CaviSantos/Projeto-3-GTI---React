import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

function Head({ nome }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('');

  const navRef = useRef(null);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    if (navRef.current) {
      if (isOpen) {
        navRef.current.classList.add('hidden');
        navRef.current.classList.remove('block');
      } else {
        navRef.current.classList.add('block');
        navRef.current.classList.remove('hidden');
      }
    }
  };

  return (
    <nav className="border-b-2 border-purple-500 bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link className="flex items-center space-x-3 rtl:space-x-reverse" to="/Inicio">
          <img src={logo} className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-yellow-300">XYZ</span>
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-yellow-300">- Olá, {nome}</span>
        </Link>
        <button
          id="navbar-toggle"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-solid-bg"
          aria-expanded="false"
          onClick={toggleNavbar}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div ref={navRef} className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
          <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-900 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
            <li>
              <Link
                href="#"
                className={`block py-2 px-3 md:p-0 text-yellow-300 rounded hover:bg-gray-800 md:hover:bg-transparent md:border-0 md:hover:text-purple-500 
                ${activeItem === 'home' ? 'bg-purple-600 md:bg-transparent md:text-yellow-300 hover:bg-purple-500' : ''}`}
                to="/Inicio"
                onClick={() => setActiveItem('home')}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className={`block py-2 px-3 md:p-0 text-yellow-300 rounded hover:bg-gray-800 md:hover:bg-transparent md:border-0 md:hover:text-purple-500 
                ${activeItem === 'sobre' ? 'md:text-yellow-300 hover:text-purple-500' : ''}`}
                to="/Sobre"
                onClick={() => setActiveItem('sobre')}
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className={`block py-2 px-3 md:p-0 text-yellow-300 rounded hover:bg-gray-800 md:hover:bg-transparent md:border-0 md:hover:text-purple-500 
                ${activeItem === 'contato' ? 'md:text-yellow-300 hover:text-purple-500' : ''}`}
                to="/Contato"
                onClick={() => setActiveItem('contato')}
              >
                Contato
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Head;
