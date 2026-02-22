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
  const swayAmount = isPortal ? 0.9 : 1.8;

  return (
    <motion.div
      className={`absolute shadow-xl select-none ${isPortal
        ? `rounded-3xl overflow-hidden ${colorMap[color]} ${className}`
        : `flex items-center gap-3 px-6 py-4 rounded-full ${colorMap[color]} ${className}`
        }`}
      initial={{ opacity: 0, y: 40 }}
      animate={{
        opacity: 1,
        y: [0, -floatAmount, 0],
        rotate: [rotation, rotation + swayAmount, rotation - swayAmount, rotation],
      }}
      transition={{
        opacity: { duration: 0.6, delay: floatDelay },
        y: {
          duration: floatDuration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: floatDelay,
        },
        rotate: {
          duration: floatDuration + 1.2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: floatDelay,
        },
      }}
      whileHover={{
        scale: isPortal ? 1.035 : 1.07,
        y: -4,
        boxShadow: isPortal
          ? "0 18px 34px rgba(30, 40, 90, 0.22)"
          : "0 18px 34px rgba(32, 42, 105, 0.26)",
        transition: { duration: 0.22 },
      }}
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
