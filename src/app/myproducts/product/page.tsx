import React from "react";
import ProductDetail from "@/app/Components/ProductDetail";
import { IoMdHeartEmpty } from "react-icons/io";

const page = () => {
  return (
    <div className="w-full md:py-20 max-w-[1280px] px-5 md:px-10 mx-auto">
      <div className="flex flex-col lg:flex-row md:px-10 gap-12 lg:gap-[100px]">
        <div className="left w-full md:w-auto flex-[1.5] max-w-[500px] lg:w-full mx-auto lg:mx-0">
          <ProductDetail />
        </div>
        <div className="right flex-[1] py-3">
          <div className="title text-[34px] mb-2 font-bold text-black">
            Wireless
          </div>
          <div className="subTitle text-lg mb-5 font-semibold">
            Noise-Canceling
          </div>
          <div className="price text-lg font-semibold">MRP : $ 199</div>
          <div className="text-xl font-medium text-black/[0.5]">
            incl. of taxes
          </div>
          <div className="text-xl font-medium text-black/[0.5] mb-20">{`(Also include all applicable duties)`}</div>
          <div className="main mb-20">
            <button className="w-full  mb-3 hover:opacity-75 active:scale-95 text-center text-lg  font-medium py-4 rounded-full text-white bg-black transition-transform">
              Add to Cart
            </button>
            <button className="w-full mb-10 flex justify-around items-center hover:opacity-75 active:scale-95 text-center text-lg  font-medium py-4 rounded-full text-white bg-black transition-transform">
              Add to Whishlist <IoMdHeartEmpty size={20} />
            </button>
            <div>
              <div className="title font-bold text-xl">Products Details</div>
              <div className="para text-lg mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates voluptatibus illum repellat! Nulla, nemo ipsa
                expedita aliquam corporis quaerat facilis sequi eum, iste, quia
                illum at suscipit dolor ducimus in. Ratione veniam eaque eos
                corporis!
              </div>
              <div className="para text-lg mt-3 mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates voluptatibus illum repellat! Nulla, nemo ipsa
                expedita aliquam corporis quaerat facilis sequi eum, iste, quia
                illum at suscipit dolor ducimus in. Ratione veniam eaque eos
                corporis!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
