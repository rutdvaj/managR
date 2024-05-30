import React, { useState, useEffect } from "react";
import { account } from "../appwrite";
import { ID } from "appwrite";
import Image from "next/image";
import TextareaDemo from "./textarea";
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
import linkimg from "../../../public/images/Vectorlink.png";
import { useLink } from "./linkDB";

export default function HandleLinkLogic() {
  const [contents, setContents] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { addlink } = useLink();
  // const { loggedInUser } = useUser();
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        {
          const accountData = await account.get();
          const fetchedUserId = accountData.$id;
          setUserId(fetchedUserId);
          console.log("User ID:", fetchedUserId);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        setUserId(null);
      }
    };

    fetchUserData();
  }, [userId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmedContent = contents.trim();
    if (trimmedContent === "") {
      console.log("Comment cannot be empty");
      return;
    }

    const links = {
      link: trimmedContent,
    };

    // Assign user_id only if userId is a non-empty string
    if (typeof userId === "string" && userId.trim().length > 0) {
      links.user_ID = userId;
    } else {
      console.error("Invalid user ID:", userId);
      return;
    }

    setIsSubmitting(true);
    try {
      addlink(links);
      setContents("");
      setIsSubmitting(false);
    } catch (error) {
      setIsSubmitting(false);
      console.error("Error submitting link:", error);
    }
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <div className="alert-img">
          <Image src={linkimg} alt="" />
        </div>
      </AlertDialogTrigger>
      <div className="filler">
        <div className="alert-test bg-darkmode outline-none border-none">
          <AlertDialogContent className="bg-verydark">
            <AlertDialogHeader>
              <AlertDialogTitle className="text-white">
                Paste Your Link Here.
              </AlertDialogTitle>
              <TextareaDemo
                value={contents}
                onChange={(e) => setContents(e.target.value)}
              />
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleSubmit}>
                Submit
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </div>
      </div>
    </AlertDialog>
  );
}
