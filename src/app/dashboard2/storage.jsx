"use client";
import React from "react";
import galleryimg from "../../../public/images/Vectorimage.png";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ID } from "appwrite";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { storage } from "../appwrite";

const BUCKET_ID = "663b8add0022e3741108";

export default function StorageComp() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please choose a file to upload.");
      return;
    }

    try {
      const fileId = ID.unique();
      const promise = storage.createFile(BUCKET_ID, fileId, file);
      const response = await promise;
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <div className="alert-img">
            <Image src={galleryimg} alt="" />
          </div>
        </AlertDialogTrigger>
        <AlertDialogContent className="bg-verydark">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="picture">Choose a Picture</Label>
            <Input id="picture" type="file" onChange={handleFileChange} />
            <Button onClick={handleUpload}>Upload</Button>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
