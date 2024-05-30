"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import DDimg from "../../../public/images/Vectordrop.png";
import DDupimg from "../../../public/images/Vectorvectorup.png";
import gotoimg from "../../../public/images/ion_open-outlinegoto.png";
export default function Dbherosection() {
  const [Dropdown, setDropDown] = useState(false);

  const toggleDropdown = () => {
    setDropDown(!Dropdown);
  };
  return (
    <div>
      <div className="main-db-hs-div flex-column">
        <div className="mt-44 mr-40 ">
          <div className=" flex w-[760px] h-[50px] justify-around bg-projecttask rounded font--poppins font-bold   text-xl bg-opacity-25">
            <h1 className="text-white">Sports E-store</h1>
            <div
              className="dd-img mt-4 ml-24 cursor-pointer"
              onClick={toggleDropdown}
            >
              <Image src={DDimg} alt="" />
            </div>
          </div>
        </div>

        {Dropdown && (
          <div className="db-hs-2 bg-projecttask rounded-lg bg-opacity-25 w-[760px] h-[250px] mt-24 p-6 ">
            <div className="first-part flex justify-around">
              <div className="prj-desc">
                <h1 className="text-lg font-semibold text-white ml-4 mt-2">
                  Project Name :- Sports store
                </h1>
              </div>
              <div
                className="ddupimg mt-2 cursor-pointer"
                onClick={toggleDropdown}
              >
                <Image src={DDupimg} alt="" />
              </div>
            </div>
            <h1 className="font-semibold text-white text-lg ml-4">
              Description :-
            </h1>
            <p className="font--poppins text-white font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="go-to flex justify-around">
              <div className="go-to-1 flex mt-9">
                <h1 className="text-white">Track Progress</h1>
                <div className="go2img">
                  <Image src={gotoimg} alt="" />
                </div>
              </div>
              <div className="go-to-2 flex mt-9">
                <h1 className="text-white">Request Redesign</h1>
                <div className="go2img1">
                  <Image src={gotoimg} alt="" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
