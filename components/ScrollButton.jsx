"use client";

import React from "react";

const ScrollButton = ({ targetId, children, className }) => {
  const handleScroll = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleScroll}
      className={`cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};

export default ScrollButton;