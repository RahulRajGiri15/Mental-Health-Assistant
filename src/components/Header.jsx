/**
 * This code was generated by Builder.io.
 */
import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Mental Health Assistant</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#home" className="hover:text-blue-200">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-200">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-200">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
