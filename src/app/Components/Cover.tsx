import React from "react";
import Image from "next/image";

const Cover = () => {
  return (
    <div className="relative text-white">
      <video width={"100%"} height={"1000"} autoPlay>
        <source src={"/video.mp4"} type="video/mp4" />
      </video>

      <div className="absolute top-10 md:top-40 left-32 md:left-60 lg:left-[28rem]">
        <span className="font-light text-[15px] opacity-80">
          Google Technology
        </span>
        <h1 className="uppercase tracking-widest font-bold text-6xl">
          HEAd phone
        </h1>
      </div>
      <button className="absolute top-52 md:top-96 left-40 md:left-96 lg:left-[36rem] opacity-80 text-black px-4 py-2 bg-white text-[18px] rounded-2xl">
        <a href="/myproducts">Shop Collection</a>
      </button>
    </div>
  );
};

export default Cover;
