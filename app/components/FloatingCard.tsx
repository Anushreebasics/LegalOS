"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type CardColor = "blue" | "orange" | "dark" | "lavender";

const colorMap: Record<CardColor, string> = {
  blue: "bg-[#3D5AFE] text-white",
  orange: "bg-[#C97B30] text-white",
  dark: "bg-[#1E1B2E] text-white dark:bg-[#25223A]",
  lavender: "bg-[#B4BBDB] text-[#2D2A3E] dark:bg-[#2D334E] dark:text-[#DEE3F7]",
};

const iconBgMap: Record<CardColor, string> = {
  blue: "bg-white/20",
  orange: "bg-white/20",
  dark: "bg-white/10",
  lavender: "bg-white/30",
};

interface FloatingCardProps {
  color: CardColor;
  rotation: number;
  icon?: ReactNode;
  label?: string;
  className?: string;
  floatDelay?: number;
  floatDuration?: number;
  floatAmount?: number;
  variant?: "pill" | "portal";
  children?: ReactNode;
}

export default function FloatingCard({
  color,
  rotation,
  icon,
  label,
  className = "",
  floatDelay = 0,
  floatDuration = 4,
  floatAmount = 12,
  variant = "pill",
  children,
}: FloatingCardProps) {
  const isPortal = variant === "portal";

  return (
    <motion.div
      className={`absolute shadow-xl select-none ${isPortal
        ? `rounded-3xl overflow-hidden ${colorMap[color]} ${className}`
        : `flex items-center gap-3 px-6 py-4 rounded-full ${colorMap[color]} ${className}`
        }`}
      style={{ rotate: rotation }}
      initial={{ opacity: 0, y: 40 }}
      animate={{
        opacity: 1,
        y: [0, -floatAmount, 0],
      }}
      transition={{
        opacity: { duration: 0.6, delay: floatDelay },
        y: {
          duration: floatDuration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: floatDelay,
        },
      }}
      whileHover={{ scale: isPortal ? 1.03 : 1.07, transition: { duration: 0.2 } }}
    >
      {isPortal && children ? (
        children
      ) : (
        <>
          <div
            className={`flex items-center justify-center w-10 h-10 rounded-full ${iconBgMap[color]}`}
          >
            {icon}
          </div>
          <span className="text-xl font-bold tracking-tight whitespace-nowrap">
            {label}
          </span>
        </>
      )}
    </motion.div>
  );
}
