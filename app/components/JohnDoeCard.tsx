"use client";

import FloatingCard from "./FloatingCard";

interface JohnDoeCardProps {
    className?: string;
    rotation?: number;
    floatDelay?: number;
}

export default function JohnDoeCard({
    className = "",
    rotation = -4,
    floatDelay = 0.4,
}: JohnDoeCardProps) {
    return (
        <FloatingCard
            variant="portal"
            color="lavender"
            rotation={rotation}
            className={`min-w-[280px] ${className}`}
            floatDelay={floatDelay}
            floatDuration={5}
            floatAmount={10}
        >
            <div className="flex items-start gap-3 p-5">
                <div className="w-1 self-stretch rounded-full bg-[#C97B30] flex-shrink-0" />
                <div className="w-12 h-12 rounded-full bg-[#B0916A] dark:bg-[#B79A72] flex-shrink-0 overflow-hidden flex items-center justify-center text-2xl shadow-md">
                    🧑🏾
                </div>
                <div className="flex flex-col min-w-0">
                    <span className="font-bold text-sm text-[#1E1B2E] dark:text-[#E6EBFF] leading-tight">
                        John Doe – Portal
                    </span>
                    <span className="text-xs text-[#4A4870] dark:text-[#C4CCE8] mt-0.5 leading-snug">
                        Hey! Could you please review a document for me?
                    </span>
                    <span className="text-[10px] text-[#7A789A] dark:text-[#A9B2D4] mt-1 font-medium underline underline-offset-1">
                        MAT-2233 · 2 h ago
                    </span>
                </div>
            </div>
        </FloatingCard>
    );
}
