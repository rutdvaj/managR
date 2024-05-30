"use client";
import { createContext, useContext, useEffect } from "react";
import { databases } from "../appwrite";
import { ID, Query } from "appwrite";
import { useState } from "react";

export const TASK_DATABASE_ID = "6560dcf034207b94d8ee"; // Replace with your database ID
export const TASK_COLLECTION_ID = "6652449a00370467cf92"; // Replace with your collection ID

const taskContext = createContext();

export function useTask() {
  return useContext(taskContext);
}

export function TaskProvider(props) {
  const [tasks, setTasks] = useState([]);

  async function addTask(task) {
    const response = await databases.createDocument(
      TASK_DATABASE_ID,
      TASK_COLLECTION_ID,
      ID.unique(),
      task
    );
    setTasks((tasks) => [...tasks, response]);
  }

  async function init() {
    const response = await databases.listDocuments(
      TASK_DATABASE_ID,
      TASK_COLLECTION_ID,
      [Query.orderDesc("$createdAt"), Query.limit(10)]
    );
    setTasks(response.documents);
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <taskContext.Provider value={{ tasks, addTask }}>
      {props.children}
    </taskContext.Provider>
  );
}
