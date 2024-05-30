"use client";
import React, { use } from "react";
import { useState } from "react";
import Buttontask from "./taskButton";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import msgimg from "../../../public/images/Vectormsg.png";
import linkimg from "../../../public/images/Vectorlink.png";
import galleryimg from "../../../public/images/Vectorimage.png";
import ddimg from "../../../public/images/Vectordrop.png";
import HandleSubmitComment from "./commentLogic";
import HandleLinkLogic from "./linkLogic";
import StorageComp from "./storage";
import { AddTasks } from "./task";

function DB2herosection() {
  const [Active, SetActive] = useState(false);
  const handleDropdown = () => {
    SetActive(!Active);
  };

  return (
    <div className="main h-screen w-[950px]">
      <div className="main-1 flex justify-between mt-56 mr-60 py-10 ">
        <div className="heading text-[32px] text-white font--poppins font-medium ">
          <h1>Track Progress</h1>
        </div>
        <div className="task-button">
          <AddTasks />
        </div>
      </div>
      <div className="h1">
        <h1 className="text-[28px] font--poppins font-normal text-white mt-10">
          Tasks :-
        </h1>
      </div>
      <div className="task-buttons flex flex-row justify-around mt-10">
        <div className="button-1">
          <Buttontask children="completed" />
        </div>
        <div className="button-2">
          <Buttontask children="In-progress" />
        </div>
        <div className="button-3">
          <Buttontask children="New tasks" />
        </div>
      </div>
      <div className="task-progress">
        <div className="tp-1 w-[760px] h-[75px] bg-normaltask text-white flex justify-around rounded-[32px] mt-10 items-center">
          <h1 className="text-[20px] font-normal"> Design Changes </h1>
          <div className="img-1 cursor-pointer">
            <HandleSubmitComment />
          </div>
          <div className="img-2 cursor-pointer">
            {/* <Image src={linkimg} alt="" />
             */}
            <HandleLinkLogic />
          </div>
          <div className="img-3 cursor-pointer">
            <StorageComp />
          </div>
          <div className="img-4 cursor-pointer" onClick={handleDropdown}>
            <Image src={ddimg} alt="" />
          </div>
        </div>
        {Active && (
          <div className="tp-1-dropdown">
            <div className="tester flex flex-col tp-1 w-[760px] h-[275px] bg-normaltask text-white  justify-between rounded-[32px] mt-10 items-start">
              <div className=" flex flex-row items-start justify-around w-full mt-5">
                <h1 className="text-[20px] font-normal"> Design Change</h1>
                <div className="img-1">
                  <Image src={msgimg} alt="" />
                </div>
                <div className="img-2">
                  <Image src={linkimg} alt="" />
                </div>
                <div className="img-3">
                  <Image src={galleryimg} alt="" />
                </div>
                <div className="img-4 cursor-pointer" onClick={handleDropdown}>
                  <Image src={ddimg} alt="" />
                </div>
              </div>
              <div className="flex items-center w-full justify-center mb-5">
                <Button className="button-test text-black bg-inputrr font--poppins text-[20px] font-regular p-8 rounded-[34px] text-center  hover:bg-redesigntask">
                  <Link href="https://github.com/users/rutdvaj/projects/9">
                    Track Progress
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
        <div className="tp-1 w-[760px] h-[75px] bg-normaltask text-white flex justify-around rounded-[32px] mt-20 items-center ">
          <h1 className="text-[20px] font-normal"> Database Changes </h1>
          <div className="img-1">
            <Image src={msgimg} alt="" />
          </div>
          <div className="img-2">
            <Image src={linkimg} alt="" />
          </div>
          <div className="img-3">
            <Image src={galleryimg} alt="" />
          </div>
          <div className="img-4">
            <Image src={ddimg} alt="" />
          </div>
        </div>
        <div className="tp-1 w-[760px] h-[75px] bg-redesigntask text-white flex justify-around rounded-[32px] mt-20 items-center">
          <h1 className="text-[20px] font-normal"> Database Changes </h1>
          <div className="img-1">
            <Image src={msgimg} alt="" />
          </div>
          <div className="img-2">
            <Image src={linkimg} alt="" />
          </div>
          <div className="img-3">
            <Image src={galleryimg} alt="" />
          </div>
          <div className="img-4">
            <Image src={ddimg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DB2herosection;
