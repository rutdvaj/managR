"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import TextareaDemo from "./textarea";
import { useState, useEffect } from "react";
import { TaskType } from "./taskType";
import { account } from "../appwrite";
import { ID } from "../appwrite";
import { useTask } from "./taskContext";
import { Label } from "@/components/ui/label";

export function AddTasks() {
  const [content, setContent] = useState("");
  const [taskType, setTaskType] = useState("");
  const [userId, setUserId] = useState(null);
  const { addTask } = useTask();

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

  const handleTaskTypeChange = (value) => {
    setTaskType(value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmedContent = content.trim();
    if (trimmedContent === "") {
      console.log("Comment cannot be empty");
      return;
    }
    console.log("taskType value:", taskType);
    if (!taskType) {
      console.error("Task type is required");
      console.log(taskType);
      return;
    }
    const taskData = {
      taskType: taskType,
      task_desc: trimmedContent,
      user_id: userId,
    };

    if (typeof userId === "string" && userId.trim().length > 0) {
      taskData.user_id = userId;
    } else {
      console.error("Invalid user ID:", userId);
      return;
    }

    try {
      addTask(taskData);
      setContent("");
      // setTaskType(null);
    } catch (error) {
      console.error("Error submitting link:", error);
    }
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Add Task</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Describe task</AlertDialogTitle>
          <TextareaDemo
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </AlertDialogHeader>
        <AlertDialogHeader>
          <AlertDialogTitle>Task Type</AlertDialogTitle>
          <RadioGroup
            defaultValue="comfortable"
            onValueChange={handleTaskTypeChange}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="codebase-changes" id="r1" />
              <Label htmlFor="r1">codebase changes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="redesign-request" id="r2" />
              <Label htmlFor="r2">redesign request</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="feedback" id="r3" />
              <Label htmlFor="r3">feedback</Label>
            </div>
          </RadioGroup>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleSubmit}>Submit</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
