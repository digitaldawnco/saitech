"use client";
import React from "react";
import bgimg from "../../public/img/services/services-bg.jpg";
import icon1 from "../../public/img/services/1.png";
import icon2 from "../../public/img/services/2.png";
import icon3 from "../../public/img/services/3.png";
import Image from "next/image";

const ServicesData = {
  title: "SAITECH STUDIO SERVICES",
  title2: "SAITECH STUDIO SERVICES",
  bgimg: bgimg,
  ServicesList: [
    {
      icon: icon1,
      title: "Consultancy",
      brief:
        "We excel at implementing IT infrastructures for corporate and public sector organizations. Our experienced project management resources ensure on-time and on-budget delivery. At the same time, our unique blend of technical expertise and business acumen helps us transform recommendations into actual business benefits partners with us for seamless IT infrastructure roll-outs that drive business success. Contact us today to learn more.",
    },
    {
      icon: icon2,
      title: "Vulnerability Assessment",
      brief:
        "With sophisticated attacks on the rise, quick mitigation of network vulnerabilities is imperative. SAITECH STUDIO conducts exhaustive network security testing, identifies vulnerabilities, and provides user-friendly reports with step-by-step remediation procedures. Protect your enterprise systems from security threats with our comprehensive Vulnerability Assessment services.",
    },
    {
      icon: icon3,
      title: "Penetration Testing",
      brief:
        "SAITECH STUDIO provides exhaustive network security testing on your Internet network security infrastructure from outside over the Internet. Our Penetration Testing simulates the same methods an attacker would follow to exploit multiple network security weaknesses in different combinations. Individually, some network vulnerabilities may not be critical, but when combined in specific ways, they can compromise your business-critical data or computer network.",
    },
  ],
};

const Services = () => {
  return (
    <>
      <div
        id="merox-services-area"
        className="merox-services-area py-32 bg-[#24262d] relative z-[1] md:pb-20 sm:pb-20"
      >
        <div className="merox-services-area-img absolute right-0 top-0 h-full w-2/3 bg-no-repeat bg-center bg-cover -z-[1]">
          <Image
            className="h-full w-full"
            src={ServicesData.bgimg}
            alt="bgimage"
          />
        </div>
        <div className="container relative">
          <div className="flex flex-wrap mx-[-12px]">
            <div className="xl:ml-[8.33333333%] xl:w-4/12 lg:w-4/12 md:w-full sm:w-full xsm:w-full order-2 wow fadeInRight flex-[0_0_auto]">
              <div className="section-title lite mb-10 mt-[245px] sm:mt-20">
                <h4 className="text-white uppercase font-medium text-[20px] relative pl-[30px] mb-[15px] before:bg-[#ff2782] before:h-[2px] before:w-5 before:content-[''] before:absolute before:left-0 before:top-[11px]">
                  {ServicesData.title}
                </h4>
                <h3 className="text-white text-[50px] font-bold leading-[49px] uppercase">
                  {ServicesData.title2}
                </h3>
              </div>
            </div>
            <div className="xl:w-7/12 lg:w-8/12 md:w-full sm:w-full xsm:w-full wow fadeInLeft flex-[0_0_auto]">
              <div className="services-box bg-white xl:p-[100px] lg:p-[100px] md:p-20 sm:py-20 sm:px-10">
                {ServicesData.ServicesList.map((item, i) => (
                  <div
                    className="single-services flex mb-9 transition-all duration-[0.3s] cursor-pointer hover:scale-[0.90] last:mb-0"
                    key={i}
                  >
                    <Image
                      className="shadow-[0px_8px_20px_0px_rgba(0,0,0,0.14)] rounded-[50%] w-[100px] h-[100px]"
                      src={item.icon}
                      alt="icon"
                    />
                    <div className="services-content-box ml-[30px]">
                      <h3 className="text-[24px] font-medium leading-none capitalize mb-[15px]">
                        {item.title}
                      </h3>
                      <p className="mb-0">{item.brief}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
