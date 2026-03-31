"use client";

import { useState, useEffect } from "react";
// import { FaArrowUp } from "react-icons/fa";
import { IoIosArrowUp } from "react-icons/io";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) setShow(true);
      else setShow(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {show && (
        <button
          onClick={scrollTop}
          className="fixed cursor-pointer bottom-16 right-8 z-50 p-3 rounded-2xl
                     bg-gradient-to-r from-purple-600/70 to-purple-400/70
                     text-white shadow-lg hover:scale-110 transition-transform
                     dark:from-purple-900/70 dark:to-purple-700/70"
          title="Scroll to top"
        >
          <IoIosArrowUp size={18} />
        </button>
      )}
    </>
  );
}