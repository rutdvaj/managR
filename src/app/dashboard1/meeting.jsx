import { Button } from "@/components/ui/button";
import Link from "next/link";

import React from "react";

export default function ButtonDemo() {
  return (
    <div>
      <Button className="font--poppins text-[20px] text-white bg-verydark font-regular p-8 rounded-[34px] text-center">
        <Link href="https://calendly.com/rutdvajrawal/30min">
          Setup Meeting
        </Link>
      </Button>
    </div>
  );
}
