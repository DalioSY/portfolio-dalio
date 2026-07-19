"use client";

import { getGitHubApi } from "@/server/api";
import { GitHubUserType } from "@/types/gitHubUserType";
import {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
} from "react";

interface GitHubContextType {
    user: GitHubUserType | null;
    loading: boolean;
    refresh: () => Promise<void>;
}

const GitHubContext = createContext<GitHubContextType>(
    {} as GitHubContextType
);

export function GitHubProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<GitHubUserType | null>(null);
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