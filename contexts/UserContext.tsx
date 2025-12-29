import React, { createContext, useState, ReactNode } from 'react';
import { account } from '@/services/appwrite';
import { ID } from 'appwrite';

interface User {
    id?: string;
    email?: string;
    username?: string;
}

interface UserContextType {
    user: User | null;
    login: (emailOrUsername: string, password: string) => Promise<void>;
    signup: (email: string, username: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }): React.ReactElement => {
    const [user, setUser] = useState<User | null>(null);

    async function login(emailOrUsername: string, password: string) {
        try {
            await (account as any).createSession(emailOrUsername, password);
            const response = await account.get();
            setUser({
                id: (response as any).$id,
                email: (response as any).email,
                username: (response as any).name ?? (response as any).username,
            });
        } catch (error: unknown) {
            const msg = error instanceof Error ? error.message : String(error);
            throw new Error(`login error: ${msg}`);
        }
    }

    async function signup(email: string, username: string, password: string) {
        try {
            await (account as any).create(ID.unique(), email, password, username);
            await login(email, password);
        } catch (error: unknown) {
            const msg = error instanceof Error ? error.message : String(error);
            throw new Error(`signup error: ${msg}`);
        }
    }

    async function logout() {
        try {
            await (account as any).deleteSession('current');
        } catch (error: unknown) {
            const msg = error instanceof Error ? error.message : String(error);
            throw new Error(`logout error: ${msg}`);
        } finally {
            setUser(null);
        }
    }

    return (
        <UserContext.Provider value={{ user, login, signup, logout }}>
            {children}
        </UserContext.Provider>
    );
};
