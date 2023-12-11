import React, { useState } from "react";
import Crad from "./Crad";

const Products = () => {
  return (
    <div>
      <div className="flex items-center my-8 justify-center">
        <h2 className="font-semibold text-4xl tracking-wider inline-blocktext-white opacity-80 text-white px-4 py-2 mt-3 bg-red-500 text-[18px] rounded-2xl">
          All Products
        </h2>
      </div>
      <div className="flex py-7 mx-5 my-10 flex-wrap items-center justify-evenly gap-5 ">
        <Crad />
        <Crad />
        <Crad />
        <Crad />
        <Crad />
        <Crad />
        <Crad />
      </div>
    </div>
  );
};

export default Products;
