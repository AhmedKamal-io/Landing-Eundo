import React from "react";

const NavBar = () => {
  return (
    <nav className="flex bg-transparent items-center gap-10 fixed top-6">
      <div className="text-xl mx-7 font-bold">
        Eundo<span className="text-blue-700">Air</span>
      </div>
      <div className="gap-5 flex">
        <a href="@" className="font-bold ">
          Home
        </a>
        <a href="@" className="font-bold">
          Product
        </a>
        <a href="@" className="font-bold">
          Companies
        </a>
        <a href="@" className="font-bold">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
