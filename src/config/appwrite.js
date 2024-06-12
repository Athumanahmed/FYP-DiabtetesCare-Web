import { Client, Account, Databases } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("66682801001aa93c9a72");

export const account = new Account(client);

// databases

export const databases = new Databases(client, "66682e8d0021614bfa8d");
