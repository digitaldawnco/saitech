"use client";
import React from "react";
import bgimg from "../../public/img/cta/cta-bg.jpg";
import Link from "next/link";

const CtaData = {
  title: "Do You Have Any Project ?",
  title2: "let’s talk about business soluations with us",
  btntext: "join with us",
  btnurl: "#",
  bgimg: bgimg,
};

const Cta = () => {
  return (
    <>
      <div
        id="merox-cta-area"
        className="merox-cta-area py-[100px] text-center bg-center bg-cover relative h-full bg-[#1a2b3c] bg-no-repeat before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#2018d8] before:opacity-[0.6]"
        style={{ backgroundImage: `url(${CtaData.bgimg.src})` }}
      >
        <div className="container relative text-center">
          <div className="flex flex-wrap mx-[-12px]">
            <div className="xl:w-10/12 lg:w-10/12 md:w-full sm:w-full xsm:w-full mx-auto px-[12px] flex-[0_0_auto]">
              <div className="cta-content">
                <p className="text-white capitalize m-0 font-semibold text-[24px]">
                  {CtaData.title}
                </p>
                <h2 className="wow fadeInUp text-[50px] text-white font-bold leading-[55px] inline-block capitalize mt-5 mb-[25px]">
                  {CtaData.title2}
                </h2>
                <div className="cta-btn my-[13px] mx-0">
                  <Link
                    href={CtaData.btnurl}
                    className="btn btn-5 wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    {CtaData.btntext} <i className="fa fa-long-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cta;
