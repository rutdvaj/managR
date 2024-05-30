"use client";
import React from "react";
import { UserProvider } from "../authorization";
import { Register } from "./registerlogic";

export default function page() {
  return (
    <div>
      <div className="main">
        <UserProvider>
          <div className=" flex justify-center items-center  h-screen dark:bg-slate-900 ">
            <div className="">
              <Register />
            </div>
          </div>
        </UserProvider>
      </div>
    </div>
  );
}
