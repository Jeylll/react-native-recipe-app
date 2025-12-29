import { Client, Account, Avatars } from 'appwrite';

export const client = new Client()
    .setProject('6951e13e002b36e91895')
    .setEndpoint('https://sgp.cloud.appwrite.io/v1');

export const account = new Account(client);
export const avatars = new Avatars(client);
