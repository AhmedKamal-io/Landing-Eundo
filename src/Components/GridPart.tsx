import Image from "next/image";
import React from "react";

const grid = () => {
  return (
    <div>
      <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[75vb] mt-14">
        <div className="col-start-2 relative bg-Assend p-4 rounded-2xl border-2 border-Blacky text-Whitey font-bold flex justify-center items-end">
          <Image
            src={`/Sky.jpg`}
            alt=""
            fill
            className="object-cover z-10 rounded-2xl"
          />
          <p className="z-20 text-xl font-bold text-BlackyFade">
            less smog around the world
          </p>
        </div>
        <div className="col-start-2 row-start-2 relative bg-Assend p-4 rounded-2xl border-2 border-Blacky text-Whitey font-bold flex justify-center items-end">
          <Image
            src={`/Doun.jpg`}
            alt=""
            fill
            className="object-cover z-0 rounded-2xl"
          />
          <p className="z-10 text-xl text-Blacky font-bold relative">
            more clean sky&apos;s
          </p>
        </div>

        <div className="col-start-1 row-start-2 relative bg-Assend p-4 rounded-2xl border-2 border-Blacky text-Whitey font-bold flex justify-center items-end">
          <Image
            src={`/Bird.jpg`}
            alt=""
            fill
            className="rounded-2xl object-cover z-10"
          />
          <p className="z-20 text-xl font-bold">hundreds of birds saved</p>
        </div>
      </div>
    </div>
  );
};

export default grid;
