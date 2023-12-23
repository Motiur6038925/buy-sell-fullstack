"use client";

import { useState } from "react";

import Link from "next/link";

const CatagorySelect = ({ Data }) => {
  const { categories, locations } = Data;
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showLocation, setShowLocation] = useState(false);

  return (
    <div
      className="  grid grid-cols-2

      bg-white"
    >
      {/* Category */}
      <div
        id="category"
        className={`p-[50px] bg-white ${
          selectedCategory || showLocation ? "hidden" : ""
        }`}
      >
        <span className=" flex items-center justify-between">
          <h1 className=" text-black mb-4">Select a Category</h1>{" "}
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
          {/* //routig path href={`/dashboard/service/category/${item.id}`} */}
          {/* dashboard/service/category?category=1&location=2 */}
          {/* service/[catagory]/[slug]/[location]/[slug] */}
          <div className=" w-[50%]">
            <ul className="">
              {categories.map((item, index) => {
                return (
                  <Link
                    href={`/SubCategorySelect/?category=${item.name}&categoryparams=${item.id}`}
                  >
                    <li
                      key={index}
                      className=" text-[#0074ba] flex items-center justify-between border-2 p-[8px]
         "
                    >
                      <span className=" flex items-center gap-4">
                        <img
                          className=" w-[24px] h-[24px]"
                          src={item.image}
                          alt=""
                        />
                        {item.name}
                      </span>

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
        </section>
      </div>

      {/* Location */}
      {/* id="location"
        className={`p-[50px] bg-white ${showLocation ? "" : "hidden"}`} */}
    </div>
  );
};

export default CatagorySelect;
