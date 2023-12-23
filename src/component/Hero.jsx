"use client";

import { read_all_aproved__Request__API } from "@/utility/api";

import { useEffect, useRef, useState } from "react";
import { Toaster } from "react-hot-toast";

export default function Hero() {
  const [service, setService] = useState([]);

  useEffect(() => {
    read_all_aproved__Request__API().then((res) => {
      setService(res.data);
    });
  }, []);

  return (
    <main>
      <Toaster position="top-center" reverseOrder={false} />

      {/* Service Input Form */}

      {/* Table */}
      <h1 className=" text-center text-xl font-extrabold">Home Page</h1>

      {service?.map((item, index) => (
        <div
          key={index}
          className="  mx-auto w-[450px] border-[1px]  border-orange-300  bg-white grid   grid-cols-3 gap-x-[90px]"
        >
          <div className=" h-[120px] w-[160px]  col-span-1">
            <img src={item.image1} alt="" />
          </div>
          <div className="   grid text-black gap-y-[2px]">
            <h1>{item.Brand}</h1>
            <span
              className=" rounded-[2px] w-[50px] h-[15px] py-[2px] px-2 text-center text-[9px] font-[800px]
     bg-slate-400 text-white"
            >
              Member
            </span>
            <h3 className=" text-[#009877]">{item.Price}</h3>
          </div>
        </div>
      ))}
    </main>
  );
}
