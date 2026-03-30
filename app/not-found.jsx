"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ScrollButton from "@/components/ScrollButton";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen mt-10 px-6 bg-white dark:bg-black text-black dark:text-white text-center">

      {/* Animated 404 */}
      <motion.h1
        className="text-[10rem] font-extrabold text-purple-600 dark:text-purple-400"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        404
      </motion.h1>

      <motion.p
        className="text-xl md:text-2xl font-semibold mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Oops! The page you are looking for doesn't exist.
      </motion.p>

      <motion.div
        className="mt-8 flex justify-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <Link
          href="/"
          className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-purple-400
                     text-white font-semibold shadow-lg hover:scale-105 transition"
        >
          Go Home
        </Link>

        {/* <ScrollButton
          targetId="projects"
          className="px-6 py-3 rounded-full border border-purple-600
                     text-purple-600 dark:text-purple-400 font-semibold hover:bg-purple-50 dark:hover:bg-purple-900 transition"
        >
          View Our Work →
        </ScrollButton> */}

        {/* <Link
          href="/contact"
          className="px-6 py-3 rounded-full border border-purple-600
                     text-purple-600 dark:text-purple-400 font-semibold hover:bg-purple-50 dark:hover:bg-purple-900 transition"
        >
          Contact Us
        </Link> */}
      </motion.div>

      {/* Optional Illustration */}
      <motion.img
        src="/404-illustration-1.webp"
        alt="404 illustration"
        className="w-full max-w-md mt-12"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5 }}
      />
    </section>
  );
}