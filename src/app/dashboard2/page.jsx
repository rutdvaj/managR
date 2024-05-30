"use client";
import React from "react";
import AvatarDemo from "../dashboard1/avatar";
import { Section1 } from "../dashboard1/DBdivs";
import { CommentsProvider } from "./database";
import { UserProvider } from "../auth/authorization";
import DB2herosection from "./DB2hs";
import Dbherosection2 from "../dashboard1/dbherosection2";
import { LinkProvider } from "./linkDB";
import { TaskProvider } from "./taskContext";
export default function page() {
  return (
    <div>
      <div>
        <CommentsProvider
          databaseId="6560dcf034207b94d8ee"
          collectionId="65c64954cca31903891f"
        >
          <UserProvider>
            <TaskProvider>
              <LinkProvider>
                <div className="maindiv flex justify-between">
                  <div className="h-screen ml-5  w-screen">
                    <div className="div-avatar mt-16">
                      <AvatarDemo />
                    </div>
                    <div className="dashboard-div mt-12">
                      <Section1 />
                    </div>
                  </div>
                  <div className="dashrboard-herosection-2">
                    <DB2herosection />
                  </div>
                  <div className="dashboard-herosection-2">
                    <Dbherosection2 />
                  </div>
                </div>
              </LinkProvider>
            </TaskProvider>
          </UserProvider>
        </CommentsProvider>
      </div>
    </div>
  );
}
