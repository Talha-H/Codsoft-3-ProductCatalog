import React from 'react'
import Image from 'next/image'

const Cover = () => {
  return (
    <div className="relative text-white">
        <Image
          src={"/bg.jpg"}
          alt="bg-img"
          width={1000}
          height={1000}
          className="w-[100%] h-[75vh]"
        />
        <div className="absolute top-40 left-32 md:left-60 lg:left-[28rem]">
          <span className="font-light text-[15px] opacity-80">
            Google Technology
          </span>
          <h1 className="uppercase tracking-widest font-bold text-6xl">
            HEAd phone
          </h1>
        </div>
        <button className="absolute top-96 left-40 md:left-96 lg:left-[36rem] opacity-80 text-black px-4 py-2 bg-white text-[18px] rounded-2xl">
          <a href="/myproducts">Shop Collection</a>
        </button>
      </div>
  )
}

export default Cover