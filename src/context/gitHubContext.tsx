"use client";

import { getGitHubApi } from "@/server/api";
import {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
} from "react";

interface GitHubUser {
    login: string;
    avatar_url: string;
    name: string;
    bio: string;
    public_repos: number;
    followers: number;
    following: number;
}

interface GitHubContextType {
    user: GitHubUser | null;
    loading: boolean;
    refresh: () => Promise<void>;
}

const GitHubContext = createContext<GitHubContextType>(
    {} as GitHubContextType
);

export function GitHubProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<GitHubUser | null>(null);
    const [loading, setLoading] = useState(true);

    async function loadUser() {
        try {
            setLoading(true);
            const data = await getGitHubApi();
            setUser(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadUser();
    }, []);

    return (
        <GitHubContext.Provider
            value={{
                user,
                loading,
                refresh: loadUser,
            }}
        >
            {children}
        </GitHubContext.Provider>
    );
}

export function useGitHub() {
    return useContext(GitHubContext);
}