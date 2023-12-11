import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa6";

const Crad = () => {
  return (
    <>
      <div className="card w-72 bg-[#f3f4f6] shadow-xl ">
        <Link href={"/myproducts/product"}>
          <figure>
            <Image src={"/osm.jpg"} alt="Shoes" width={500} height={500} className="rounded-t-2xl"/>
          </figure>
        </Link>
        <div className="card-body">
          <span className="flex">
            <FaStar className="fill-yellow-400" size={20} />
            <FaStar className="fill-yellow-400" size={20} />
            <FaStar className="fill-yellow-400" size={20} />
            <FaStar className="fill-yellow-400" size={20} />
            <FaStar className="fill-yellow-400" size={20} />
          </span>
          <h2 className="card-title">HeadPhone</h2>
          <p className="text-red-500 font-semibold text-[20px]">$20.99</p>
          <div className="card-actions justify-end">
            <Link href={"/buyNow"}>
              <button className="btn  opacity-80 text-black px-4 py-2 bg-white text-[18px] rounded-2xl hover:bg-red-500 hover:text-white border-slate-300">
                Buy Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Crad;
