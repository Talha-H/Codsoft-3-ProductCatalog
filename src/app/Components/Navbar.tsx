"use client";
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import Image from "next/image";
import Link from "next/link";
import { CiShoppingCart } from "react-icons/ci";
import { BsChevronCompactUp } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";

const Navbar = () => {
  const [showProfile, setShowProfile] = useState<boolean>(false);
  const [showNav, setShowNav] = useState<boolean>(false);

  return (
    <div>
      <div className="flex items-center justify-between py-4 relative ">
        <div className="flex items-center md:space-x-10 lg:space-x-20">
          <div className="font-semibold text-2xl">
            <a href="/">Jolly</a>
          </div>
          <nav className="max-md:hidden">
            <ul className="flex space-x-7 lg:space-x-10 opacity-70 text-[15px]">
              <li>
                <a href="/" className="inline-block py-3 w-full">
                  Shop
                </a>
              </li>
              <li>
                <a href="filters" className="inline-block py-3 w-full">
                  Filters
                </a>
              </li>
              <li>
                <a href="myproducts" className="inline-block py-3 w-full">
                  Product
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <SearchBar />
          <div
            onClick={() => setShowProfile(!showProfile)}
            className="relative cursor-pointer"
          >
            <Image
              src={"/person2.png"}
              alt="profile_img"
              width={35}
              height={35}
              className="w-[35px] h-[35px] rounded-full object-cover"
            />
            <div
              className={`absolute bg-white z-[2] rounded-lg shadow-lg ${
                showProfile ? "" : "hidden"
              }`}
            >
              <Link href={"/signIn"}>SignIn</Link>
            </div>
          </div>
          <Link href={"/cart"}>
            <div className="p-2 bg-gray-100 rounded-full">
              <CiShoppingCart size={20} />
            </div>
          </Link>
          <span
            onClick={() => setShowNav(!showNav)}
            className="bg-gray-100 rounded-full p-[9px] cursor-pointer md:hidden"
          >
            <BsChevronCompactUp
              className={`transition ease-in duration-150 ${
                showNav ? "rotate-180" : "0"
              }`}
            />
          </span>
        </div>
      </div>
      <div
        className={`md:hidden ${
          showNav ? "pb-4 px-5" : "h-0 invisible opacity-0"
        }`}
      >
        <ul className="flex flex-col text-[15px] opacity-75 px-2">
          <li>
            <a href="/" className="inline-block py-3 w-full">
              Shop
            </a>
          </li>
          <li>
            <a href="/filters" className="inline-block py-3 w-full">
              Filters
            </a>
          </li>
          <li>
            <a href="/myproducts" className="inline-block py-3 w-full">
              Products
            </a>
          </li>
        </ul>
        <div className="flex items-center bg-gray-100 p-2 rounded-lg py-3 my-4">
          <input
            type="text"
            className="outline-none w-full bg-transparent ml-2 caret-blue-500 placeholder:font-light placeholder:text-gray-600 text-[15px]"
            placeholder="Search"
            autoComplete="false"
          />
          <button>
            <BiSearch size={20} className="opacity-50" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
