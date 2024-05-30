"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { databases } from "../appwrite";
import { ID, Query } from "appwrite";

export const LINKS_DATABASE_ID = "6560dcf034207b94d8ee"; // Replace with your database ID
export const LINKS_COLLECTION_ID = "663b2ca0002ecc15a595"; // Replace with your collection ID

const LinkContext = createContext();

export function useLink() {
  return useContext(LinkContext);
}

export function LinkProvider(props) {
  const [links, setlinks] = useState([]);

  async function addlink(link) {
    const response = await databases.createDocument(
      LINKS_DATABASE_ID,
      LINKS_COLLECTION_ID,
      ID.unique(),
      link
    );
    setlinks((links) => [...links, response]);
  }

  async function init() {
    const response = await databases.listDocuments(
      LINKS_DATABASE_ID,
      LINKS_COLLECTION_ID,
      [Query.orderDesc("$createdAt"), Query.limit(10)]
    );
    setlinks(response.documents);
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <LinkContext.Provider value={{ links, addlink }}>
      {props.children}
    </LinkContext.Provider>
  );
}
