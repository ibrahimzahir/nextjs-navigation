import React from "react";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header>
      <nav
        className="navbar navbar-expand-lg shadow-md py-4 px-16 bg-white 
        relative flex items-center w-full justify-between"
      >
        <div className="px-6 w-full flex flex-wrap items-center justify-between">
          <div
            className="navbar-collapse collapse grow items-center"
            id="navbarSupportedContentY"
          >
            <ul className="navbar-nav mr-auto lg:flex lg:flex-row">
              <li className="nav-item">
                <Link href="/">
                  <a
                    className="nav-link block pr-2 lg:px-2 py-2 text-gray-600
                   hover:text-gray-700 focus:text-gray-700 
                   transition duration-150 ease-in-out navtext uppercase"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about">
                  <a
                    className="nav-link block pr-2 lg:px-2 py-2 text-gray-600
                  hover:text-gray-700 focus:text-gray-700 
                  transition duration-150 ease-in-out navtext uppercase"
                    href="#!"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    about
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/pricing">
                  <a
                    className="nav-link block pr-2 lg:px-2 py-2 text-gray-600
                  hover:text-gray-700 focus:text-gray-700 
                  transition duration-150 ease-in-out navtext uppercase"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    pricing
                  </a>
                </Link>
              </li>
              <li className="nav-item mb-2 lg:mb-0">
                <Link href="/contact">
                  <a
                    className="nav-link block pr-2 lg:px-2 py-2 text-gray-600
                  hover:text-gray-700 focus:text-gray-700 
                  transition duration-150 ease-in-out navtext uppercase"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
