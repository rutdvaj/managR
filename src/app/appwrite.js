"use client";
import { Client, Account, Databases, Storage } from "appwrite";

export const client = new Client();
export const databases = new Databases(client);
export const storage = new Storage(client)

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("65603d6ead21380f39ec");

export const account = new Account(client);
export { ID } from "appwrite";
