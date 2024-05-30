"use client";
import React from "react";
import { Section1 } from "./DBdivs";
import { UserProvider } from "../auth/authorization";
import Dbherosection from "./dbherosection";
import Dbherosection2 from "./dbherosection2";
import AvatarDemo from "./avatar";
export default function page() {
  return (
    <div className="main">
      <UserProvider>
        <div className="maindiv flex justify-between">
          <div className="h-screen ml-5  w-screen">
            <div className="div-avatar mt-16">
              <AvatarDemo />
            </div>
            <div className="dashboard-div mt-12">
              <Section1 />
            </div>
          </div>
          <div className="dashboard-herosection">
            <Dbherosection />
          </div>
          <div className="dashboard-herosection-2">
            <Dbherosection2 />
          </div>
        </div>
      </UserProvider>
    </div>
  );
}
