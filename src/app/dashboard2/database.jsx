"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { databases } from "../appwrite";
import { ID } from "appwrite";

// export const COMMENTS_DATABASE_ID = "6560dcf034207b94d8ee"; // Replace with your database ID
// export const COMMENTS_COLLECTION_ID = "65c64954cca31903891f"; // Replace with your collection ID

const CommentsContext = createContext();

export function useComments() {
  return useContext(CommentsContext);
}

export function CommentsProvider({ databaseId, collectionId, children }) {
  const [comments, setComments] = useState([]);

  async function addComment(comment) {
    const response = await databases.createDocument(
      databaseId,
      collectionId,
      ID.unique(),
      comment
    );
    setComments((comments) => [...comments, response]);
  }

  async function init() {
    const response = await databases.listDocuments(databaseId, collectionId);
    setComments(response.documents);
  }

  useEffect(() => {
    init();
  }, [databaseId, collectionId]);

  return (
    <CommentsContext.Provider value={{ comments, addComment }}>
      {children}
    </CommentsContext.Provider>
  );
}
