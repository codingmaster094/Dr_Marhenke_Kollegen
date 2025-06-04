"use client";
import React, { useEffect, useState } from "react";

const TopButton = () => {
  const [visible, setVisible] = useState(false);
  const [borderProgress, setBorderProgress] = useState(0);
  const toggleVisibility = () => {
    const scrollY = window.scrollY;
    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;

    setVisible(scrollY > 100);
    setBorderProgress((scrollY / maxScroll) * 100);
  };
  const smoothScrollToTop = () => {
    const scrollStep = -window.scrollY / 50;
    const scrollAnimation = () => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
        requestAnimationFrame(scrollAnimation);
      }
    };
    requestAnimationFrame(scrollAnimation);
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <button
      id="back-to-top"
      onClick={smoothScrollToTop}
      className={`fixed p-4 bg-yellow text-white bottom-5 right-5 shadow shadow-white rounded-full transition-all duration-300 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-label="Back to top"
    >
      {/* Circular progress border */}
      <span
        className="absolute inset-0 rounded-full"
        style={{
          content: "''",
          position: "absolute",
          top: "-3px",
          left: "-3px",
          right: "-3px",
          bottom: "-3px",
          borderRadius: "50%",
          zIndex: "-1",
        }}
      ></span>

      {/* Up Arrow Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-up"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 5l0 14" />
        <path d="M16 9l-4 -4" />
        <path d="M8 9l4 -4" />
      </svg>
    </button>
  );
};

export default TopButton;
