"use client";
import { useState } from "react";
import Modal from "./Modal";
import Link from "next/link";

const ModalImplement = ({ locations, Sublocations, Slug }) => {
  const [visibleLinks, setVisibleLinks] = useState([]);

  const handleLinkClick = (sublocation) => {
    // Toggle visibility for the clicked sublocation
    setVisibleLinks([]);
    setVisibleLinks((prevVisibleLinks) =>
      prevVisibleLinks.includes(sublocation)
        ? prevVisibleLinks.filter((item) => item !== sublocation)
        : [...prevVisibleLinks, sublocation]
    );
  };

  // Get the "slug" parameter from the query object
  // const { slug } = router.;
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isSubLocationOpen, setIsSubLocationOpen] = useState(true);
  const [selectedLocation, setSelectedLocation] = useState("");

  const openLocation = () => {
    setIsLocationOpen(true);
  };

  const closeModal = () => {
    setIsLocationOpen(false);
  };

  const openSubLocation = (location) => {
    // setSelectedLocation(location);
    // setIsSubLocationOpen(true);
    // setIsLocationOpen(false);
  };

  const closeSubLocation = () => {
    setIsSubLocationOpen(false);
    setIsLocationOpen(true);
  };

  return (
    <section className="bg-white ">
      <button
        className="py-2 px-2 text-sm bg-purple-600 text-white rounded"
        onClick={openLocation}
      >
        Select Your Location
      </button>

      <Modal className="  " isOpen={isLocationOpen} onClose={closeModal}>
        <div className="p-8 bg-white  w-[1000px] relative ">
          {/* location */}
          <img
            onClick={closeModal}
            className=" w-[24px] h-[24px]  absolute   right-[20px]  top-0"
            src="https://cdn-icons-png.flaticon.com/128/1828/1828665.png?ga=GA1.1.1939879715.1701420004&semt=ais"
            alt=""
          />
          <section className=" flex items-center justify-center">
            <section className="  w-1/2">
              <h1 className="text-black mb-4">Select a Location</h1>
              <div className="w-full">
                <ul className="space-y-4">
                  {locations?.map((item, index) => {
                    return (
                      <li
                        key={index}
                        onClick={() =>
                          handleLinkClick(`sublocation-${item.id}`)
                        }
                        className="flex justify-between items-center border-2 p-2 cursor-pointer"
                      >
                        <span className="text-[#0074ba]">{item.name}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </section>
            {/* subLocation */}

            <section className=" w-1/2">
              <div className="p-8 bg-white">
                <h1 className="text-black mb-4">Select a SubLocation</h1>
                <h1 className="text-black mb-4"></h1>

                <section className="flex flex-col">
                  <div className="w-full">
                    <ul className="space-y-4">
                      <>
                        {Sublocations?.map((item, index) => {
                          return (
                            <Link
                              href={`/ads/${item.id}/?slug=${Slug}`}
                              className={`sublock sublocation-${
                                item.locationid
                              } ${
                                visibleLinks.includes(
                                  `sublocation-${item.locationid}`
                                )
                                  ? ""
                                  : "hidden"
                              }`}
                            >
                              <li
                                key={index}
                                className="flex justify-between items-center border-2 p-2"
                              >
                                <span className="text-[#0074ba]">
                                  {item.name}
                                </span>
                              </li>
                            </Link>
                          );
                        })}
                      </>
                    </ul>
                  </div>
                </section>
              </div>
            </section>
          </section>
        </div>
      </Modal>

      {/* <Modal isOpen={isSubLocationOpen} onClose={closeSubLocation}>
        <div className="p-8 bg-white">
          <h1 className="text-black mb-4">
            Select a Sub-location in {selectedLocation}
          </h1>

          <section className="flex flex-col">
            <div className="w-full">
              <ul className="space-y-4">
                {selectedLocation === "Dhaka" && (
                  <>
                    {Sublocations.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="flex justify-between items-center border-2 p-2"
                        >
                          <span className="text-[#0074ba]">{item.name}</span>
                        </li>
                      );
                    })}
                  </>
                )}

                {selectedLocation === "Gazipur" && (
                  <>
                    {Sublocations.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="flex justify-between items-center border-2 p-2"
                        >
                          <span className="text-[#0074ba]">{item.name}</span>
                        </li>
                      );
                    })}
                  </>
                )}
              </ul>
            </div>
          </section>
        </div>
      </Modal> */}
    </section>
  );
};

export default ModalImplement;
