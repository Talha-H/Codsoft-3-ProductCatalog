import React from "react";
import Image from "next/image";
import Link from "next/link";
// import Btn from "./Btn";

const Collection = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex-1 relative">
        <Image
          src={"/img-1.jpg"}
          alt="img"
          width={1000}
          height={1000}
          className="w-[100%]"
        />
        <h2 className="absolute top-20 left-20 sm:left-40 sm:top-40 md:top-20 md:left-6 lg:top-36 lg:left-28 rounded-xl opacity-80 bg-black/60 text-2xl lg:text-3xl text-white px-2 py-1 lg:px-3  lg:py-2">
          Discover Your Favourite Item
        </h2>
        <button className="absolute top-48 left-44 sm:left-64 sm:top-64  md:top-36 md:left-32 lg:top-72 lg:left-64 text-black px-5 py-2 rounded-xl bg-white opacity-80 ">
          <Link href="/myproducts">Collection</Link>
        </button>
      </div>
      <div className="flex-1">
        <div className="flex relative">
          <Image
            src={"/img-3.jpg"}
            alt="img-2"
            width={1000}
            height={1000}
            className="w-[50%]"
          />
          <div className="flex items-center justify-center mx-auto flex-col gap-4 bg-[#ece9d9] w-full">
            <span className="font-light text-[15px] ">
              joystick Design 2023
            </span>
            <h2 className="text-[22px] lg:text-2xl font-semibold capitalize text-center">
              Creation Conquered
            </h2>
            <button className="px-2 py-1 lg:px-5 lg:py-2 rounded-xl bg-transparent border-2 border-slate-400">
              <Link href="/myproducts">Collection</Link>
            </button>
          </div>
        </div>
        <div className="flex relative">
          <div className="flex items-center justify-center mx-auto flex-col gap-4 bg-black/80 w-full text-white">
            <span className="font-light text-[15px] ">Best Brand 2023</span>
            <h2 className="text-[22px] lg:text-2xl font-semibold capitalize text-center">
              Surround Sound
            </h2>
            <button className="px-2 py-1 lg:px-5 lg:py-2 rounded-xl bg-transparent border-2 border-slate-400">
              <Link href="/myproducts">Collection</Link>
            </button>
          </div>
          <Image
            src={"/img-4.jpg"}
            alt="img-2"
            width={1000}
            height={1000}
            className="w-[50%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Collection;
