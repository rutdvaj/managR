"use client";
import React from "react";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";

export function CalendarDemo() {
  const [date, setDate] = useState(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className=" text-white font--poppins rounded-lg "
    />
  );
}
