"use client";

import { Loader2 } from "lucide-react";

interface LoadingScreenProps {
    message?: string;
}

export function LoadingScreen({
    message = "Carregando...",
}: LoadingScreenProps) {
    return (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background">
            <div className="flex flex-col items-center gap-4">
                <Loader2 className="h-12 w-12 animate-spin text-primary" />

                <p className="text-sm text-muted-foreground animate-pulse">
                    {message}
                </p>
            </div>
        </div>
    );
}