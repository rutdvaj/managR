import React from "react";
import { UserProvider } from "../authorization";
import LoginCard from "./loginlogic";
import LoginPage from "./loginlogic";

export default function page() {
  return (
    <div>
      <UserProvider>
        <div className=" flex justify-center items-center  h-screen dark:bg-slate-900 ">
          <LoginCard />
        </div>
      </UserProvider>
    </div>
  );
}
