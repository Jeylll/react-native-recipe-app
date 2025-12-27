// contexts are used to share data globlly
import React, { createContext, useState, ReactNode } from 'react';

interface User {
    id?: string;
    email?: string;
    username?: string;
}

interface UserContextType {
    user: User | null;
    login: (username: string, password: string) => Promise<void>;
    signup: (email: string, username: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }): React.ReactElement => {
    const [user, setUser] = useState<User | null>(null);

    async function login(username: string, password: string) {
        // Implement login logic here
    }

    async function signup(email: string, username: string, password: string) {
        // Implement signup logic here
    }

    async function logout() {
        // Implement logout logic here
        setUser(null);
    }

    return (
        <UserContext.Provider value={{ user, login, signup, logout }}>
            {children}
        </UserContext.Provider>
    );
};
