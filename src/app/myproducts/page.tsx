import React from "react";
import Products from "../Components/Products";
import Crad from "../Components/Crad";

const page = () => {
  return (
    <div>
      <div className="flex items-center my-8 justify-center">
        <h2 className="font-semibold text-4xl tracking-wider inline-blocktext-white opacity-80 text-white px-4 py-2 mt-3 bg-red-500 text-[18px] rounded-2xl">
          Latest Products
        </h2>
      </div>
      <div className="flex py-7 mx-5 my-10 flex-wrap items-center justify-evenly gap-5 ">
        <Crad />
        <Crad />
      </div>
      <Products />
    </div>
  );
};

export default page;
