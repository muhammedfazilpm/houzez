import React, { useState } from 'react';
import './navbar.css';
import { useNavigate } from 'react-router-dom';

function Navbarbarwhite() {
  const navigate=useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav  className="homenavbar border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ml-6">
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center ml-0 p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <a className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/INDUS WAYFAIR Logo_page-0001.jpg" className="h-12" alt="Flowbite Logo" />
          <span className="self-center text-2xl text-white font-semibold whitespace-nowrap dark:text-white">Indus Wayfair</span>
        </a>

        <div className={`w-full md:flex md:w-auto ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:mt-0 md:flex-row md:space-x-8 rtl:space-x-reverse">
            <li>
              <a onClick={()=>{
                navigate('/')
              }} className="block py-2 px-3 text-white bg-transparent rounded md:bg-transparent md:text-white md:p-0  md:hover:text-gray-400 dark:text-white md:dark:text-white" aria-current="page">HOME</a>
            </li>
            <li>
              <a onClick={()=>{
                navigate('/about')
              }} className="block py-2 px-3 text-white rounded hover:bg-gray-400 md:hover:bg-transparent md:border-0 md:hover:text-gray-400 md:p-0 dark:text-white md:dark:hover:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">ABOUT US</a>
            </li>
            <li>
              <a onClick={()=>{
                navigate('/properties')
              }} className="block py-2 px-3 text-white rounded hover:bg-gray-400 md:hover:bg-transparent md:border-0 md:hover:text-gray-400 md:p-0 dark:text-white md:dark:hover:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">PROPERTIES</a>
            </li>
            <li>
              <a onClick={()=>{
                navigate('/blog')
              }} className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-400 md:p-0 dark:text-white md:dark:hover:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">BLOG</a>
            </li>
            <li>
              <a onClick={()=>{
                navigate('/contact')
              }} className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-400 md:p-0 dark:text-white md:dark:hover:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">CONTACT US</a>
            </li>
            {/* <li>
            <a onClick={()=>{
              navigate('/getingstarted')
            }} className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-400 md:p-0 dark:text-white md:dark:hover:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">GETTING STARTED</a>
          </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbarbarwhite;
