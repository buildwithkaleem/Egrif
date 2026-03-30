"use client";

import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

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
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full
                     bg-gradient-to-r from-purple-600 to-purple-400
                     text-white shadow-lg hover:scale-110 transition-transform
                     dark:from-purple-900 dark:to-purple-700"
          title="Scroll to top"
        >
          <FaArrowUp size={18} />
        </button>
      )}
    </>
  );
}