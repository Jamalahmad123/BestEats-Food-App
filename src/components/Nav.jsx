import { useState } from "react";
import { navData } from "../data/data";
import { MdMenu, MdSearch, MdShoppingCart, MdClose } from "react-icons/md";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle((prevState) => !prevState);
  }

  // Markup
  return (
    <nav>
      <div className="container mx-auto flex items-center justify-between border-b border-gray-100 py-4 px-2">
        {/* Left Side */}
        <div className="flex items-center gap-2">
          <MdMenu size={30} className="cursor-pointer" onClick={handleToggle} />
          <h1 className="text-gray-800 text-xl md:text-2xl">
            Best <span className="font-bold">Eats</span>
          </h1>
        </div>
        {/* Search */}
        <div className="flex items-center gap-2 bg-gray-200 px-2 py-1 rounded-3xl md:min-w-[300px] lg:min-w-[400px]">
          <MdSearch size={25} />
          <input
            type="text"
            className="bg-transparent w-full focus:outline-none"
            placeholder="Search Food"
          />
        </div>

        {/* Shoping Cart */}
        <button className="hidden md:flex items-center gap-1 bg-gray-800 text-white rounded-full px-2 py-1">
          <MdShoppingCart size={20} /> Cart
        </button>

        {/* Mobile Manu */}
        {/* Overlay */}
        {toggle && (
          <div className="bg-black/80 fixed w-full h-screen top-0 left-0 z-10"></div>
        )}
        {/* Manu */}
        <div
          className={`bg-white fixed top-0 left-0 p-4 h-screen z-50 space-y-8 w-72 transition ease-in delay-200 ${
            toggle ? "translate-x-0" : "-translate-x-full"
          } `}
        >
          <div className="flex items-center justify-between">
            <h2 className="text-2xl text-gray-800">
              Best <span className="font-bold">Eats</span>
            </h2>
            <MdClose
              size={30}
              className="text-gray-800 cursor-pointer"
              onClick={handleToggle}
            />
          </div>
          {/* Manu Items*/}
          <ul className="space-y-6 text-gray-800">
            {navData.map((link) => {
              const { id, navLink, Icon } = link;
              return (
                <li
                  className="flex items-center gap-2 capitalize cursor-pointer"
                  key={id}
                >
                  <Icon size={25} />
                  <a href="#">{navLink}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
