"use client";
import React from "react";
import bgimg from "../../public/img/subscribe/subscribe-bg.jpg";

const SubscribeData = {
  title: "subscribe our newsletter <br/> to get more update",
  bgimg: bgimg,
  btntext: "subscribe",
};

const Subscribe = () => {
  return (
    <>
      <div
        id="merox-subscribe-area"
        className="merox-subscribe-area pt-[100px] pb-[100px] bg-center bg-cover relative h-full bg-[#1a2b3c] bg-no-repeat before:content-[''] before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-[#2018d8] before:opacity-[0.6]"
        style={{ backgroundImage: `url(${SubscribeData.bgimg.src})` }}
      >
        <div className="container relative">
          <div className="flex flex-wrap mx-[-12px]">
            <div className="xl:w-5/12 lg:w-5/12 md:w-full sm:w-full xsm:w-full wow fadeInLeft flex-[0_0_auto]">
              <div className="subscribe-title sm:text-center">
                <h3
                  className="text-white font-bold capitalize text-[35px] my-[18px] mx-0"
                  dangerouslySetInnerHTML={{ __html: SubscribeData.title }}
                ></h3>
              </div>
            </div>
            <div className="xl:w-7/12 lg:w-7/12 md:w-full sm:w-full md:text-center sm:text-center xsm:text-center wow fadeInRight flex-[0_0_auto]">
              <form className="subscribe-form-box bg-white p-[30px]">
                <input
                  className="form-control h-[60px] py-0 px-[30px] bg-[#dfebf7] text-[#696969] text-[15px] rounded-[5px] border-none float-left capitalize block focus:bg-[#dfebf7] focus:border-none xl:w-[70%] lg:w-[62%] md:w-full sm:w-full xsm:w-full"
                  placeholder="type your email"
                  name="email"
                  type="email"
                  required 
                />
                <button
                  className="btn btn-2 xl:ml-[10px] lg:ml-[10px] xl:mt-0 lg:mt-0 md:mt-5 sm:mt-5"
                  type="submit"
                >
                  {SubscribeData.btntext} 
                  <i className="fa fa-long-arrow-right"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
