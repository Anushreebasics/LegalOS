"use client";

import { motion, type Variants } from "framer-motion";
import {
  Receipt,
  Gavel,
  CheckSquare,
  FileText,
} from "lucide-react";
import FloatingCard from "./components/FloatingCard";
import JohnDoeCard from "./components/JohnDoeCard";
import BlobBackground from "./components/BlobBackground";
import DarkModeToggle from "./components/DarkModeToggle";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const textVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#EEEEF5] transition-colors duration-300 dark:bg-[#0F1220]">
      <BlobBackground />
      <DarkModeToggle />

      <section className="relative z-10 flex flex-col lg:flex-row items-center min-h-screen px-6 md:px-12 xl:px-16 py-16 max-w-7xl mx-auto gap-10 lg:gap-8">
        <motion.div
          className="w-full lg:w-[48%] flex flex-col items-start justify-center space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={textVariants}
            className="text-[2.25rem] sm:text-6xl xl:text-[4.5rem] leading-[1.1] tracking-[-0.03em] text-[#7D84AB] dark:text-[#A7AFD6]"
          >
            A single platform to{" "}
            <strong className="font-extrabold text-[#111184] dark:text-[#DFE5FF]">
              manage
            </strong>{" "}
            every part of your{" "}
            <strong className="font-extrabold text-[#111184] dark:text-[#DFE5FF]">
              legal work
            </strong>
          </motion.h1>

          <motion.p
            variants={textVariants}
            className="text-base md:text-xl text-[#3D5AFE] dark:text-[#87A0FF] max-w-[600px] leading-[1.4]"
          >
            Track matters, coordinate schedules, manage clients, centralize
            documents, and handle communication — all in one system.
          </motion.p>
        </motion.div>

        <div className="relative hidden lg:block w-full lg:w-[52%]" style={{ minHeight: 520 }}>
          <FloatingCard
            color="blue"
            rotation={11}
            icon={<Receipt size={22} className="text-white" />}
            label="Billing"
            className="top-[110px] right-[40px] text-lg"
            floatDelay={0.1}
            floatDuration={4.5}
            floatAmount={14}
          />

          <FloatingCard
            color="orange"
            rotation={-12}
            icon={<Gavel size={22} className="text-white" />}
            label="Matters"
            className="top-[235px] left-[-15px] z-10"
            floatDelay={0.3}
            floatDuration={5}
            floatAmount={10}
          />

          <JohnDoeCard
            className="top-[270px] right-[45px] z-20"
            rotation={-4}
            floatDelay={0.5}
          />

          <FloatingCard
            color="dark"
            rotation={0}
            icon={<CheckSquare size={22} className="text-[#C97B30]" />}
            label="Tasks"
            className="bottom-[32px] left-[95px]"
            floatDelay={0.2}
            floatDuration={4}
            floatAmount={12}
          />

          <FloatingCard
            color="dark"
            rotation={8}
            icon={<FileText size={22} className="text-[#C97B30]" />}
            label="Documents"
            className="bottom-[18px] right-[-10px]"
            floatDelay={0.6}
            floatDuration={4.8}
            floatAmount={11}
          />
        </div>

        <div className="w-full lg:hidden mt-2">
          <div className="relative mx-auto max-w-[430px] overflow-hidden rounded-[28px] bg-[#E9ECF6] p-4 dark:bg-[#12172A]">
            <div className="absolute -right-10 top-3 h-12 w-44 rounded-full bg-[#DEE3F1] dark:bg-[#1E2436]" />
            <div className="absolute -left-10 bottom-4 h-12 w-52 rounded-full bg-[#DEE3F1] dark:bg-[#1E2436]" />

            <div className="relative z-10 grid grid-cols-2 gap-3">
              {([
                {
                  icon: <Receipt size={15} className="text-white" />,
                  label: "Billing",
                  className: "bg-[#3D5AFE] text-white rotate-[6deg] justify-self-end dark:bg-[#4B66FF]",
                  delay: 0.4,
                },
                {
                  icon: <Gavel size={15} className="text-white" />,
                  label: "Matters",
                  className: "bg-[#C97B30] text-white -rotate-[6deg] justify-self-start mt-3 dark:bg-[#D58A3D]",
                  delay: 0.5,
                },
              ] as const).map(({ icon, label, className, delay }) => (
                <motion.div
                  key={label}
                  className={`inline-flex w-fit items-center gap-2 rounded-[40px] p-5 text-sm font-bold whitespace-nowrap border border-transparent dark:border-white/10 shadow-lg ${className}`}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: [0, -5, 0] }}
                  transition={{
                    opacity: { duration: 0.45, delay },
                    y: { duration: 4.2, repeat: Infinity, ease: "easeInOut", delay },
                  }}
                >
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/15">
                    {icon}
                  </span>
                  <span>{label}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="relative z-10 mt-3 w-full rounded-[40px] bg-[#CBD1E8] p-5 border border-transparent dark:border-white/10 shadow-lg dark:bg-[#46527C]"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: [0, -5, 0] }}
              transition={{
                opacity: { duration: 0.45, delay: 0.6 },
                y: { duration: 4.6, repeat: Infinity, ease: "easeInOut", delay: 0.6 },
              }}
              style={{ rotate: -2 }}
            >
              <div className="flex items-start gap-2.5">
                <div className="h-10 w-1 rounded-full bg-[#C97B30]" />
                <div className="h-9 w-9 rounded-full bg-[#B0916A] dark:bg-[#B79A72]" />
                <div className="min-w-0">
                  <p className="truncate text-[12px] font-bold text-[#1E1B2E] dark:text-[#E6EBFF]">John Doe - Portal</p>
                  <p className="line-clamp-1 text-[10px] text-[#4A4870] dark:text-[#C4CCE8]">Could you please review a document for me?</p>
                </div>
              </div>
            </motion.div>

            <div className="relative z-10 mt-3 grid grid-cols-2 gap-3">
              {([
                {
                  icon: <CheckSquare size={15} className="text-[#C97B30]" />,
                  label: "Tasks",
                  className: "bg-[#1E1B2E] text-white justify-self-start dark:bg-[#2F3352]",
                  delay: 0.65,
                },
                {
                  icon: <FileText size={15} className="text-[#C97B30]" />,
                  label: "Documents",
                  className: "bg-[#1E1B2E] text-white rotate-[5deg] justify-self-end dark:bg-[#2F3352]",
                  delay: 0.7,
                },
              ] as const).map(({ icon, label, className, delay }) => (
                <motion.div
                  key={label}
                  className={`inline-flex w-fit items-center gap-2 rounded-[40px] p-5 text-sm font-bold whitespace-nowrap border border-transparent dark:border-white/10 shadow-lg ${className}`}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: [0, -5, 0] }}
                  transition={{
                    opacity: { duration: 0.45, delay },
                    y: { duration: 4.2, repeat: Infinity, ease: "easeInOut", delay },
                  }}
                >
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/10">
                    {icon}
                  </span>
                  <span>{label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
