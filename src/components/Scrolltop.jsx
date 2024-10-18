"use client";
import React, { useState, useEffect } from "react";
import bgimg from "../../public/img/top-arrow.svg"; // Assuming you have a CSS module for styling

const Scrolltop = () => {
  const [sticky, setSticky] = useState(false);

  const stickyHeader = () => {
    if (window.scrollY > 200) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", stickyHeader);
  }, []);

  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, []);

  return (
    <>
      <div
        className={`material-scrolltop block fixed w-0 h-0 bottom-6 right-6 p-0 overflow-hidden outline-none border-none rounded-full bg-black cursor-pointer transition-all duration-[0.3s] shadow-[0_3px_10px_rgba(0,0,0,0.5)] ease-out hover:bg-[#ff60a3] hover:shadow-[0_3px_10px_rgba(0,0,0,0.5)] before:absolute before:content-[''] before:left-2/4 before:top-2/4 before:w-0 before:rounded-full before:bg-[#ff60a3] before:-translate-x-2/4 before:-translate-y-2/4 bg-no-repeat bg-center ${
          sticky ? "reveal" : ""
        }`}
        style={{ backgroundImage: `url(${bgimg.src})` }}
        onClick={scrollTop}
      ></div>
    </>
  );
};
export default Scrolltop;
