"use client";
import React from "react";
import Image from "next/image";
import CountUp from "react-countup";
import icon1 from "../../public/img/counter/1.svg";
import icon2 from "../../public/img/counter/2.svg";
import icon3 from "../../public/img/counter/3.svg";
import icon4 from "../../public/img/counter/4.svg";

const CounterData = {
  CounterList: [
    {
      icon: icon1,
      number: "653",
      title: "Project Done",
    },
    {
      icon: icon2,
      number: "465",
      title: "Trusted Users",
    },
    {
      icon: icon3,
      number: "784",
      title: "Projects Done",
    },
    {
      icon: icon4,
      number: "123",
      title: "Coffe Cup",
    },
  ],
};
const Counter = () => {
  return (
    <>
      <div
        id="merox-counter-area"
        className="merox-counter-area mb-[70px] wow fadeInUp"
      >
        <div className="container">
          <div className="flex flex-wrap mx-[-12px]">
            {CounterData.CounterList.map((item, i) => (
              <div
                className="xl:w-3/12 lg:w-3/12 md:w-6/12 sm:w-full xsm:w-full px-[12px] flex-[0_0_auto]"
                key={i}
              >
                <div className="about-single-counter text-center border-[1px] border-solid border-[#f1f1f1] py-10 px-[10px] rounded-[20px] transition-all duration-[0.3s] cursor-pointer mb-[30px] hover:shadow-[0px_8px_20px_0px_rgba(0,0,0,0.14)]">
                  <Image
                    className="mx-auto w-16 h-16"
                    src={item.icon}
                    alt="icon"
                  />
                  <CountUp start={0} end={item.number} delay={0}>
                    {({ countUpRef }) => (
                      <h2
                        className="counter font-bold text-[48px] mt-[15px] mb-[10px] mx-0"
                        ref={countUpRef}
                      />
                    )}
                  </CountUp>
                  <span className="text-[22px] leading-8 font-medium text-[#8b95a3] capitalize">
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Counter;
