"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "../auth/authorization";
import ovimg from "../../../../my-app/public/images/Vectoroverview-selected.png";
import usovimg from "../../../public/images/VectorOV-unselected.png";
import tpimg from "../../../public/images/VectorTP.png";
import stpimg from "../../../public/images/Vectortp-selected.png";
import rrimg from "../../../public/images/GroupRR.png";
import srrimg from "../../../public/images/Groupselected-rr.png";
import logoutimg from "../../../public/images/solar_logout-2-brokenlogout.png";

export function Section1() {
  const { logout } = useUser();
  const router = useRouter();
  const [selected, setSelected] = useState([0]);

  const toggleSelected = (index) => {
    setSelected(index);
  };

  const handleLogout = async () => {
    // Call the logout function when the "Logout" div is clicked
    await logout();

    // Use useRouter to navigate to the login page
    router.push("../auth/login");
  };
  return (
    <>
      <div>
        <div className="div1 p-14 flex">
          <div className="img1 mr-4 flex">
            {selected === 1 ? (
              <Image src={ovimg} alt="" />
            ) : (
              <Image src={usovimg} alt="" />
            )}
          </div>
          <Link href="../dashboard1">
            <h1
              className={
                selected === 1
                  ? "text-white font-bold cursor-pointer"
                  : "font-normal text-white cursor-pointer"
              }
              onClick={() => toggleSelected(1)}
            >
              Project Overview
            </h1>
          </Link>
        </div>
        <div className="div2 p-14 flex">
          <div className="img2 mr-4">
            {selected === 2 ? (
              <Image src={stpimg} alt="" />
            ) : (
              <Image src={tpimg} alt="" />
            )}
          </div>
          <Link href="../dashboard2">
            <h1
              className={
                selected === 2
                  ? "text-white cursor-pointer font-bold"
                  : "font-normal text-white cursor-pointer"
              }
              onClick={() => toggleSelected(2)}
            >
              Track progress
            </h1>
          </Link>
        </div>
        <div className="div3 p-14 flex">
          <div className="img3 mr-4">
            {selected === 3 ? (
              <Image src={srrimg} alt="" />
            ) : (
              <Image src={rrimg} alt="" />
            )}
          </div>
          <Link href="../dashboard3">
            <h1
              className={
                selected === 3
                  ? "text-white cursor-pointer font-bold "
                  : "font-normal text-white cursor-pointer"
              }
              onClick={() => toggleSelected(3)}
            >
              Redesign Requests
            </h1>
          </Link>
        </div>

        <div
          className="logout-div p-14 flex mt-24"
          onClick={() => handleLogout()}
        >
          <div className="img4 mr-4">
            <Image src={logoutimg} alt="" />
          </div>
          <h1 className="text-white cursor-pointer">Logout</h1>
        </div>
      </div>
    </>
  );
}
