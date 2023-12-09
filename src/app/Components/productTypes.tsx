import Image from "next/image";
import React from "react";

const productTypes = () => {
  return (
    <div>
      <div className="flex items-center justify-around flex-wrap gap-3 py-12">
        <div>
          <Image
            src={"/redd.jpg"}
            alt="image-1"
            width={1000}
            height={1000}
            className="w-44"
          />
          <h3 className="text-center font-medium text-xl tracking-wide">
            Gaming
          </h3>
        </div>
        <div>
          <Image
            src={"/sports.jpg"}
            alt="image-1"
            width={1000}
            height={1000}
            className="w-44"
          />
          <h3 className="text-center font-medium text-xl tracking-wide">
            Sports
          </h3>
        </div>
        <div >
          <Image
            src={"/boney.jpg"}
            alt="image-1"
            width={1000}
            height={1000}
            className="w-44"
          />
          <h3 className="text-center font-medium text-xl tracking-wide">
            Bone Conduction
          </h3>
        </div>
        <div>
          <Image
            src={"/movie.jpg"}
            alt="image-1"
            width={1000}
            height={1000}
            className="w-44"
          />
          <h3 className="text-center font-medium text-xl tracking-wide">
            Movies & Web series
          </h3>
        </div>
        <div>
          <Image
            src={"/song.jpg"}
            alt="image-1"
            width={1000}
            height={1000}
            className="w-44"
          />
          <h3 className="text-center font-medium text-xl tracking-wide">
            Songs
          </h3>
        </div>
      </div>
    </div>
  );
};

export default productTypes;
