"use client";

import { read_all_Cataroy__Request__API } from "@/utility/api";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Catagorywaisecommponet = () => {
  const [catagory, setcatagory] = useState([]);

  useEffect(() => {
    read_all_Cataroy__Request__API().then((res) => {
      setcatagory(res.data);
    });
  }, []);

  return (
    <div className=" h-screen py-[100px] bg-white">
      <div className="  grid grid-cols-4 gap-8 py-[50px] px-[50px]">
        {catagory?.map((item, index) => {
          return (
            <Link href={`/ads/Bangladesh/?slug=${item.id}`}>
              <div
                className=" flex items-center gap-6  justify-center
            
            "
              >
                <img className="h-[56px] w-[56px] " src={item.image} alt="" />
                <span>
                  <h1 className="  text-[#2f3432] text-[16px]">{item.name}</h1>
                  <p className=" text-[#2f3432] text-[16px]">76.365</p>
                </span>
              </div>
            </Link>
          );
        })}

        {/* <div
          className=" flex items-center gap-6  justify-center
        
        "
        >
          <img
            className="h-[56px] w-[56px] "
            src="/computer_8374679.png"
            alt=""
          />
          <span>
            <h1 className="  text-[#2f3432] text-[16px]">Electronic</h1>
            <p className=" text-[#2f3432] text-[16px]">76.365</p>
          </span>
        </div>
        <div
          className=" flex items-center gap-6  justify-center
        
        "
        >
          <img className="h-[56px] w-[56px] " src="/car_741407.png" alt="" />
          <span>
            <h1 className="  text-[#2f3432] text-[16px]">Car</h1>
            <p className=" text-[#2f3432] text-[16px]">76.365</p>
          </span>
        </div>
        <div
          className=" flex items-center gap-6  justify-center
        
        "
        >
          <img className="h-[56px] w-[56px] " src="/house_619032.png" alt="" />
          <span>
            <h1 className="  text-[#2f3432] text-[16px]">House</h1>
            <p className=" text-[#2f3432] text-[16px]">76.365</p>
          </span>
        </div>
        <div
          className=" flex items-center gap-6  justify-center
        
        "
        >
          <img
            className="h-[56px] w-[56px] "
            src="football_1099672.png"
            alt=""
          />
          <span>
            <h1 className="  text-[#2f3432] text-[16px]">Sports</h1>
            <p className=" text-[#2f3432] text-[16px]">76.365</p>
          </span>
        </div> */}
      </div>
    </div>
  );
};

export default Catagorywaisecommponet;
