import { useState } from "react";
import Logo from "../assets/header/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg  top-0 left-0 right-0 z-50">
      <div className="max-w-[1460px] flex items-center justify-between mx-auto p-4 ">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src={Logo}
            className="w-52 transition-transform duration-300 hover:scale-110"
            alt="Logo"
          />
        </a>

        <div className="flex gap-5 items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="flex items-center text-sm  rounded-full md:me-0 focus:ring-4 focus:ring-blue-200"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <p className="font-bold text-xl p-1 py-2 px-3 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 bg-[length:400%_400%] animate-gradient-motion bg-clip-text text-transparent">
              Profile
            </p>

            <span className="sr-only">Open user menu</span>
      
            <img
              className="w-12 h-12 rounded-full hover:scale-110 transition-transform duration-300"
              src="https://cdn-icons-png.flaticon.com/512/5556/5556468.png"
              alt="user"
            />
          </button>

          {isDropdownOpen && (
            <div className="z-50 my-4 text-base list-none absolute top-14 right-60 bg-white divide-y divide-gray-100 rounded-lg shadow-lg animate-fade-in">
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900">
                  Bonnie Green
                </span>
                <span className="block text-sm text-gray-500 truncate">
                  name@flowbite.com
                </span>
              </div>
              <ul className="py-2">
                {["Dashboard", "Settings", "Earnings", "Sign out"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 transition-all duration-200"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          )}

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-200"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 17 14"
              xmlns="http://www.w3.org/2000/svg"
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
        </div>

        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 transition-all duration-300 ease-in-out ${
            isMenuOpen ? "block animate-slide-down" : "hidden"
          }`}
        >
          <ul className="flex flex-col font-semibold text-xl p-4 md:p-0 mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
            {["Home", "About", "Services", "Pricing", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="group relative inline-block py-2 px-3 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 bg-[length:400%_400%] animate-gradient-motion bg-clip-text text-transparent"
                >
                  {item}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
