"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Header = () => {
  const router = useRouter();
  function POST_ADD() {
    router.replace("/Post_Ads");
  }
  function GotoLogin() {
    router.replace("/sign-up");
  }
  return (
    <section className="  ">
      <div className="  flex items-center   justify-center gap-[450px]   px-[30px]   bg-[#149777] w-full h-[150px]">
        <div className=" flex items-center justify-center  gap-8">
          <Link href="/">
            <img
              className=" w-[150px]"
              src="/bikroy-removebg-preview.png"
              alt=""
            />
          </Link>
          <Link href="/">
            <h1 className=" text-white">All Ads</h1>{" "}
          </Link>
          <span
            className="   border   border-[#475569] rounded-[2px] w-[50px] h-[20px] py-[2px] px-2 text-center text-[9px] font-[800px]
         text-white"
          >
            English
          </span>
        </div>
        <div className=" flex items-center justify-center gap-[24px]">
          <span
            className="  gap-3  text-white flex items-center justify-center
        "
          >
            <img className="w-[25px]     " src="/chat_9710438.png" alt="Chat" />
            Chat
          </span>
          <span
            onClick={GotoLogin}
            className=" gap-3 text-white flex items-center justify-center"
          >
            <img className=" w-[25px]" src="/lock_9073369.png" alt="" />
            SignUp
          </span>

          <button
            onClick={POST_ADD}
            className="  rounded-md bg-[#FFC800] py-2 px-4 text-black text-center"
          >
            POST YOUR ADD
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
