import React from "react";

const Header = () => {
  const classList = "text-gray-500 inline-block mr-5";
  return (
    <nav className="bg-dark px-lg-5 py-2">
      <div className="header1 container px-5">
        <a className="text-white text-xl" href="#">
          Start Boostrap
        </a>
        <div className="navbar">
          <ul className="ms-auto mb-2 mb-lg-0">
            <li>
              <a className="text-white mr-5" href="#">
                Home
              </a>
            </li>
            <li>
              <a className={classList} href="#">
                About
              </a>
            </li>
            <li>
              <a className={classList} href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
