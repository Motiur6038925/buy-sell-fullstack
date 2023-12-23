"use client";
import axios from "axios";
import { Cloudinary } from "@cloudinary/url-gen";
import Checkout from "@/component/Checkout";
import DashboardMaster from "@/component/DashboardMaster";
import { ServiceUpdateDialog } from "@/component/ServiceUpdateDialog";
import {
  create_service__Request__API,
  read_all_service__Request__API,
} from "@/utility/api";
import { DeleteAlertServicePost } from "@/utility/DeleteAlert";
import { SuccessToast } from "@/utility/FormHelper";
import { useEffect, useRef, useState } from "react";
import { Toaster } from "react-hot-toast";
import { image } from "@cloudinary/url-gen/qualifiers/source";

// import { ServiceUpdateDialog } from "@/component/ServiceUpdateDialog";
// import { DeleteAlertServicePost } from "@/utility/DeleteAlert";

export default function Service({ CategoryParams, LocationParams }) {
  const [ParamsOfCategory, setParamsOfCategory] = useState([]);
  const [ParamsOfLocation, setParamsOfLocation] = useState([]);

  useEffect(() => {
    if (CategoryParams && LocationParams) {
      setParamsOfCategory(CategoryParams);
      setParamsOfLocation(LocationParams);
    }
  }, [CategoryParams, LocationParams]);
  let catagoryidref = ParamsOfCategory;
  let locationidref = ParamsOfLocation;
  console.log(LocationParams, "hell");

  const cld = new Cloudinary({ cloud: { cloudName: "dsfpo54dz" } });

  const preset_key = "de2plpsw";
  const cloud_name = "cld";

  const defaultNoImage = "/photo_10536874.png";
  const [Image1, setImage1] = useState(defaultNoImage);
  const [Image2, setImage2] = useState(defaultNoImage);
  function handleImg() {
    setImage2(defaultNoImage);
    console.log(Image2);
  }
  function handleImg1() {
    setImage1(defaultNoImage);
  }
  console.log(Image2);
  // ---func1---
  function handleFile(event) {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", preset_key);
    axios
      .post(`https://api.cloudinary.com/v1_1/dsfpo54dz/image/upload`, formData)
      .then((res) => setImage1(res.data.secure_url))
      .catch((err) => console.log(err));
  }
  // ---func2---
  function handleFile2(event) {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", preset_key);
    axios
      .post(`https://api.cloudinary.com/v1_1/dsfpo54dz/image/upload`, formData)
      .then((res) => setImage2(res.data.secure_url))
      .catch((err) => console.log(err));
  }

  const handleChange = (e) => {
    console.log(e.target.files);
  };
  const [codition, setcodition] = useState("New");
  const [authenticity, setauthenticity] = useState("Original");
  const [features, setFeatures] = useState([]);
  console.log(features);

  const pushFeatures = (value) => {
    const check = features.includes(value);

    if (check) {
      setFeatures(features.filter((filvalue) => filvalue !== value));
    } else {
      setFeatures([...features, value]);
    }
  };
  console.log(features);

  const [service, setService] = useState([]);
  let ConditionRef,
    AuthenticityRef,
    BrandRef,
    ModelRef,
    EditionRef,
    FeaturesRef,
    DescriptionRef,
    PriceRef,
    NameRef,
    EmailRef,
    PhoneRef = useRef();
  console.log(ConditionRef);
  const submit = (e) => {
    e.preventDefault();
    let Condition = codition;
    let Authenticity = authenticity;

    let Brand = BrandRef.value;
    let Model = ModelRef.value;
    let Edition = EditionRef.value;
    let Features = features;
    let Description = DescriptionRef.value;
    let Price = PriceRef.value;
    let image1 = Image1;
    let image2 = Image2;
    let Name = NameRef.value;
    let Email = EmailRef.value;
    let Phone = PhoneRef.value;
    let catagoryid = parseInt(catagoryidref);
    let locationid = parseInt(locationidref);
    create_service__Request__API({
      Condition,
      Authenticity,
      Brand,
      Model,
      Edition,
      Features,
      Description,
      Price,
      image1,
      image2,
      Name,
      Email,
      Phone,
      catagoryid,
      locationid,
    }).then((res) => {
      if (res) {
        SuccessToast("Service add successful!");

        ConditionRef.value = "";
        AuthenticityRef.value = "";

        BrandRef.value = "";
        ModelRef.value = "";
        EditionRef.value = "";
        FeaturesRef.value = "";
        DescriptionRef.value = "";
        PriceRef.value = "";
        NameRef.value = "";
        EmailRef.value = "";
        PhoneRef.value = "";
        read_all_service__Request__API().then((res) => {
          setService(res.data);
        });
      }
    });
  };

  const deleteServiceControl = (id) => {
    DeleteAlertServicePost(id).then((res) => {
      if (res) {
        read_all_service__Request__API().then((res) => {
          setService(res.data);
        });
      }
    });
  };

  useEffect(() => {
    read_all_service__Request__API().then((res) => {
      setService(res.data);
    });
  }, []);

  return (
    <main>
      <Toaster position="top-center" reverseOrder={false} />

      <div className="  flex items-center justify-center py-[100px]">
        <div className="grid ">
          <div className="p-5">
            <h1 className="text-xl font-semibold">Fill in the details</h1>
            <div className="mt-6 p-[50px]">
              <div className="grid gap-5">
                {/* ---Condition--- */}
                <h1>Condition</h1>
                <section className=" flex items-center gap-4">
                  <div className="flex items-center ">
                    <input
                      onChange={() => setcodition("Use")}
                      id="default-radio-1"
                      type="radio"
                      value="Use"
                      name="default-radio"
                      checked={codition === "Use"}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="default-radio-1"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Use
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      onChange={() => setcodition("New")}
                      id="default-radio-2"
                      type="radio"
                      value="New"
                      name="default-radio"
                      checked={codition === "New"}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="default-radio-2"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      New
                    </label>
                  </div>
                </section>

                {/* ---Authenticity---- */}
                <h1>Authenticity</h1>
                <section className="   flex items-center  gap-4">
                  <div className="flex items-center ">
                    <input
                      onChange={() => setauthenticity("Original")}
                      id="default-radio-3"
                      type="radio"
                      value="Original"
                      name="default-radio-2"
                      checked={authenticity === "Original"}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="default-radio-3"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Original
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      onChange={() => setauthenticity("Refurbished")}
                      id="default-radio-4"
                      type="radio"
                      value="Refurbished"
                      name="default-radio-2"
                      checked={authenticity === "Refurbished"}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label
                      htmlFor="default-radio-4"
                      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Refurbished
                    </label>
                  </div>
                </section>
                {/* //catagory */}
                {/* <div>
                  <label
                    htmlFor="firstname"
                    className="block text-xs font-semibold text-white uppercase"
                  >
                    CatagoryId
                  </label>
                  <input
                    ref={(input) => (catagoryidref = input)}
                    id="firstname"
                    type="text"
                    name="firstname"
                    placeholder="Brand"
                    autoComplete="given-name"
                    className="block w-[650px] p-1 rounded-sm mt-2 text-gray-700 bg-gray-200 appearance-none"
                    required=""
                  />
                </div> */}
                <div>
                  <label
                    htmlFor="firstname"
                    className="block text-xs font-semibold text-white uppercase"
                  >
                    Brand
                  </label>
                  <input
                    ref={(input) => (BrandRef = input)}
                    id="firstname"
                    type="text"
                    name="firstname"
                    placeholder="Brand"
                    autoComplete="given-name"
                    className="block w-[650px] p-1 rounded-sm mt-2 text-gray-700 bg-gray-200 appearance-none"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="firstname"
                    className="block text-xs font-semibold text-white uppercase"
                  >
                    Model
                  </label>
                  <input
                    ref={(input) => (ModelRef = input)}
                    id="firstname"
                    type="text"
                    name="firstname"
                    placeholder="Model"
                    autoComplete="given-name"
                    className="block w-[650px] p-1 rounded-sm mt-2 text-gray-700 bg-gray-200 appearance-none"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="firstname"
                    className="block text-xs font-semibold text-white uppercase"
                  >
                    Edition
                  </label>
                  <input
                    ref={(input) => (EditionRef = input)}
                    id="firstname"
                    type="text"
                    name="firstname"
                    placeholder="Edition"
                    autoComplete="given-name"
                    className="block w-[650px] p-1 rounded-sm mt-2 text-gray-700 bg-gray-200 appearance-none"
                    required=""
                  />
                </div>

                {/* ---Features--- */}
                <section>
                  <div>
                    <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
                      Features
                    </h3>
                    <ul className="  items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                      <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div className="flex items-center ps-3">
                          <input
                            onClick={() => pushFeatures("5G")}
                            id="vue-checkbox-list"
                            type="checkbox"
                            value="5G"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            htmlFor="vue-checkbox-list"
                            className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            5G
                          </label>
                        </div>
                      </li>
                      <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div className="flex items-center ps-3">
                          <input
                            onClick={() => pushFeatures("8GB")}
                            id="vue-checkbox-list"
                            type="checkbox"
                            value="8GB"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                          />
                          <label
                            htmlFor="vue-checkbox-list"
                            className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          >
                            8GB
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                </section>
                {/* ---Description--- */}
                <div>
                  <label
                    htmlFor="firstname"
                    className="block text-xs font-semibold text-white uppercase"
                  >
                    Description
                  </label>
                  <input
                    ref={(input) => (DescriptionRef = input)}
                    placeholder="More Details = more intrrested Buyers"
                    id="firstname"
                    type="text"
                    name="firstname"
                    autoComplete="given-name"
                    className="block w-[650px] py-16  mt-2  border-white border-[2px] text-gray-700 bg-gray-200 appearance-none "
                    required=""
                  />
                </div>
                {/* ---Price--- */}
                <div>
                  <label
                    htmlFor="firstname"
                    className="block text-xs font-semibold text-white uppercase"
                  >
                    Price
                  </label>
                  <input
                    ref={(input) => (PriceRef = input)}
                    id="firstname"
                    type="text"
                    name="firstname"
                    placeholder="Price"
                    autoComplete="given-name"
                    className="block w-[650px] p-1 rounded-sm mt-2 text-gray-700 bg-gray-200 appearance-none"
                    required=""
                  />
                </div>
                {/* ---Multiple Img file Upload--- */}
                <h1> Uplod Image File</h1>
                <section className=" flex  items-center gap-4">
                  {/* 1 Frist  Img */}
                  <div
                    style={{
                      backgroundImage: `url(${Image1})`,
                      backgroundSize: "35px",
                      backgroundPosition: "center",
                      width: "100px",
                      height: "100px",
                      display: "flex",
                      justifyContent: "center" /* Horizontal centering */,
                      alignItems: "center",

                      /* Vertical centering */
                    }}
                    className="    border-[1px] w-[100px] h-[100px]  border-green-500   mt-5 relative   bg-no-repeat   bg-cover "
                  >
                    <img src="" alt="" />
                    {Image1 === defaultNoImage ? (
                      <input
                        className="absolute top-0 bottom-0 left-0 opacity-0 cursor-pointer"
                        type="file"
                        name="image1"
                        multiple
                        onChange={handleFile}
                      />
                    ) : (
                      <div>
                        <input
                          className="absolute top-0 bottom-0 left-0 opacity-0 cursor-pointer"
                          type="text"
                          name="image1"
                          multiple
                          onChange={handleFile}
                        />
                        <span className=" absolute  right-1 top-1 z-10">
                          <img
                            onClick={handleImg1}
                            src="/minus-button_4436695.png"
                            className="w-[20px]"
                            alt=""
                          />
                        </span>
                      </div>
                    )}

                    <br />
                    <br />
                  </div>
                  {/* 2 Frist  Img */}
                  <div
                    style={{
                      backgroundImage: `url(${Image2})`,
                      backgroundSize: "35px",
                      backgroundPosition: "center",
                      width: "100px",
                      height: "100px",
                      display: "flex",
                      justifyContent: "center" /* Horizontal centering */,
                      alignItems: "center",

                      /* Vertical centering */
                    }}
                    className="    border-[1px] w-[100px] h-[100px]  border-green-500   mt-5 relative   bg-no-repeat   bg-cover "
                  >
                    <img src="" alt="" />
                    {Image2 === defaultNoImage ? (
                      <input
                        className="absolute top-0 bottom-0 left-0 opacity-0 cursor-pointer"
                        type="file"
                        name="image2"
                        multiple
                        onChange={handleFile2}
                      />
                    ) : (
                      <div>
                        <input
                          className="absolute top-0 bottom-0 left-0 opacity-0 cursor-pointer"
                          type="text"
                          name="image2"
                          multiple
                          onChange={handleFile}
                        />
                        <span className=" absolute  right-1 top-1 z-10">
                          <img
                            onClick={handleImg}
                            src="/minus-button_4436695.png"
                            className="w-[20px]"
                            alt=""
                          />
                        </span>
                      </div>
                    )}

                    <br />
                    <br />
                  </div>
                </section>
                <div>
                  <label
                    htmlFor="firstname"
                    className="block text-xs font-semibold text-white uppercase"
                  >
                    Name
                  </label>
                  <input
                    ref={(input) => (NameRef = input)}
                    id="firstname"
                    type="text"
                    name="firstname"
                    placeholder="Name"
                    autoComplete="given-name"
                    className="block w-[650px] p-1 rounded-sm mt-2 text-gray-700 bg-gray-200 appearance-none"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="firstname"
                    className="block text-xs font-semibold text-white uppercase"
                  >
                    Email
                  </label>
                  <input
                    ref={(input) => (EmailRef = input)}
                    id="firstname"
                    type="text"
                    name="firstname"
                    placeholder="Name"
                    autoComplete="given-name"
                    className="block w-[650px] p-1 rounded-sm mt-2 text-gray-700 bg-gray-200 appearance-none"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="firstname"
                    className="block text-xs font-semibold text-white uppercase"
                  >
                    Phone
                  </label>
                  <input
                    ref={(input) => (PhoneRef = input)}
                    id="firstname"
                    type="text"
                    name="firstname"
                    placeholder="Phone"
                    autoComplete="given-name"
                    className="block w-[650px] p-1 rounded-sm mt-2 text-gray-700 bg-gray-200 appearance-none"
                    required=""
                  />
                </div>
              </div>

              <button
                onClick={submit}
                type="submit"
                className=" py-2 px-4 mt-4  rounded-md text-white uppercase  bg-purple-600 shadow-lg focus:outline-none  hover:shadow-none"
              >
                Add Prroduct
              </button>
            </div>
          </div>
        </div>

        <br />
        <br />
      </div>
    </main>
  );
}
