"use client";

import { motion } from "framer-motion";

export default function BlobBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
            <motion.div
                className="absolute top-[-70px] right-[-80px] w-[420px] h-[220px] rounded-full opacity-30"
                style={{
                    background: "radial-gradient(ellipse, #b8c0e0 0%, transparent 70%)",
                    filter: "blur(40px)",
                    transform: "rotate(-10deg)",
                }}
                animate={{ x: [0, 12, 0], y: [0, -8, 0], opacity: [0.28, 0.36, 0.28] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
                className="absolute top-[35%] left-[-80px] w-[320px] h-[160px] rounded-full opacity-25"
                style={{
                    background: "radial-gradient(ellipse, #c5cadf 0%, transparent 70%)",
                    filter: "blur(35px)",
                    transform: "rotate(8deg)",
                }}
                animate={{ x: [0, -14, 0], y: [0, 10, 0], opacity: [0.2, 0.3, 0.2] }}
                transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            />

            <motion.div
                className="absolute bottom-[-40px] left-[5%] w-[300px] h-[160px] rounded-full opacity-30"
                style={{
                    background: "radial-gradient(ellipse, #b0bbd8 0%, transparent 70%)",
                    filter: "blur(30px)",
                    transform: "rotate(-5deg)",
                }}
                animate={{ x: [0, 9, 0], y: [0, -7, 0], opacity: [0.24, 0.34, 0.24] }}
                transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1.1 }}
            />

            <motion.div
                className="absolute bottom-[10%] right-[10%] w-[200px] h-[120px] rounded-full opacity-20"
                style={{
                    background: "radial-gradient(ellipse, #9aa5cc 0%, transparent 70%)",
                    filter: "blur(25px)",
                }}
                animate={{ x: [0, -8, 0], y: [0, 6, 0], opacity: [0.17, 0.24, 0.17] }}
                transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            />

            <motion.div
                className="absolute top-[95px] right-[-35px] h-[84px] w-[310px] rounded-full bg-[#DEE3F1] opacity-85 dark:bg-[#1E2436] dark:opacity-95"
                animate={{ x: [0, 8, 0] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute top-[205px] right-[-45px] h-[84px] w-[390px] rounded-full bg-[#DEE3F1] opacity-85 dark:bg-[#1E2436] dark:opacity-95"
                animate={{ x: [0, -10, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            />
            <motion.div
                className="absolute top-[315px] right-[-20px] h-[84px] w-[300px] rounded-full bg-[#DEE3F1] opacity-85 dark:bg-[#1E2436] dark:opacity-95"
                animate={{ x: [0, 7, 0] }}
                transition={{ duration: 8.8, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
            />

            <motion.div
                className="absolute top-[330px] left-[-95px] h-[84px] w-[310px] rounded-full bg-[#DEE3F1] opacity-85 dark:bg-[#1E2436] dark:opacity-95"
                animate={{ x: [0, -9, 0] }}
                transition={{ duration: 9.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
            <motion.div
                className="absolute top-[445px] left-[-80px] h-[84px] w-[280px] rounded-full bg-[#DEE3F1] opacity-85 dark:bg-[#1E2436] dark:opacity-95"
                animate={{ x: [0, 8, 0] }}
                transition={{ duration: 8.6, repeat: Infinity, ease: "easeInOut", delay: 0.25 }}
            />
            <motion.div
                className="absolute bottom-[70px] left-[-70px] h-[84px] w-[480px] rounded-full bg-[#DEE3F1] opacity-85 dark:bg-[#1E2436] dark:opacity-95"
                animate={{ x: [0, -12, 0] }}
                transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            />
        </div>
    );
}
