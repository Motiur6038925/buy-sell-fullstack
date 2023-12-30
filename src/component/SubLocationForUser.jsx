"use client";
import Link from "next/link";
import React from "react";
const SubLocationForUser = ({ Data }) => {
  const sublocation = Data;

  return (
    <div>
      <div>
        <div className="  p-[50px] bg-white ">
          <span className=" flex items-center justify-between">
            <h1 className=" text-black mb-4">Select a Location</h1>{" "}
            <img
              className=" w-[24px] h-[24px]"
              src="https://cdn-icons-png.flaticon.com/128/1828/1828665.png?ga=GA1.1.1939879715.1701420004&semt=ais"
              alt=""
            />
          </span>

          <section
            className="  flex items-center
             "
          >
            <div className=" w-[50%]">
              <ul className="">
                {sublocation?.map((item, index) => {
                  return (
                    // `/ads/Bangladesh/?slug=${item?.id}`
                    // `/ads/sublocation=${item.name}/?sublocationparams=${item.id}`
                    <Link href={`/ads/${item.id}/?slug=${item?.id}`}>
                      <li
                        key={index}
                        className=" text-[#0074ba] flex items-center justify-between border-2 p-[8px]"
                      >
                        {item?.name}
                        <span>
                          <svg
                            class="w-5 h-5 text-gray-500 transition group-open:rotate-90"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                            ></path>
                          </svg>
                        </span>
                      </li>
                    </Link>
                  );
                })}
              </ul>
            </div>
            <div></div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SubLocationForUser;
