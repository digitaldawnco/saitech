"use client";
import { useEffect, useState } from "react";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <div
        className="preloader fixed top-0 left-0 z-[999] w-full h-full bg-[#24262d] overflow-hidden"
        style={{ display: isLoading ? "block" : "none" }}
      >
        <div className="preloader-inner absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2">
          <div className="preloader-icon w-[100px] h-[100px] inline-block p-0">
            <span className="absolute inline-block w-full h-full rounded-[100%] bg-[#ff2782] animate-[preloader-fx_1.6s_linear_infinite]"></span>
            <span className="absolute inline-block w-full h-full rounded-[100%] bg-[#ff2782] animate-[preloader-fx_1.6s_linear_infinite] last:delay-[-0.8s]"></span>
          </div>
        </div>
      </div>
    </>
  );
};
export default Preloader;
