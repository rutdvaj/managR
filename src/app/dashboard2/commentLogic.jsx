"use client";
import React, { useState, useEffect } from "react";
import { CommentsProvider } from "./database";
import { account } from "../appwrite";
import Image from "next/image";
import { useComments } from "./database";
import { ID } from "appwrite";
import { useUser } from "../auth/authorization";
import msgimg from "../../../public/images/Vectormsg.png";
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

function HandleSubmitComment(content) {
  const [contents, setContents] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { addComment } = useComments();
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

    const comment = {
      comment_id: ID.unique(),
      content: trimmedContent,
      timestamp: Math.floor(Date.now() / 1000),
    };

    // Assign user_id only if userId is a non-empty string
    if (typeof userId === "string" && userId.trim().length > 0) {
      comment.user_id = userId;
    } else {
      console.error("Invalid user ID:", userId);
      return;
    }

    setIsSubmitting(true);
    try {
      addComment(comment);
      setContents("");
      setIsSubmitting(false);
    } catch (error) {
      setIsSubmitting(false);
      console.error("Error submitting comment:", error);
    }
  };

  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <div className="alert-img">
            <Image src={msgimg} alt="" />
          </div>
        </AlertDialogTrigger>
        <div className="alert-test bg-darkmode outline-none border-none">
          <AlertDialogContent className="bg-verydark">
            <AlertDialogHeader>
              <AlertDialogTitle className="text-white">
                Got Something to share? Type Here
              </AlertDialogTitle>
              <TextareaDemo
                value={contents}
                onChange={(e) => setContents(e.target.value)}
              />
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleSubmit}>
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </div>
      </AlertDialog>
      );
    </>
  );
}
// console.log(user_id);

export default HandleSubmitComment;
