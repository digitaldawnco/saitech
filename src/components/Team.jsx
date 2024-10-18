"use client";
import React from "react";
import Image from "next/image";
import img1 from "../../public/img/team/1.jpg";
import img2 from "../../public/img/team/2.jpg";
import img3 from "../../public/img/team/3.jpg";
import img4 from "../../public/img/team/4.jpg";
import Link from "next/link";
const TeamData = {
  title: "MEROX TEAM",
  title2: "EXPERIENCE TEAM",
  TeamList: [
    {
      img: img1,
      title: "David Walillams",
      desig: "CONSULTANT",
      SocialList: [
        {
          title: "facebook",
          link: "#",
        },
        {
          title: "twitter",
          link: "#",
        },
        {
          title: "instagram",
          link: "#",
        },
        {
          title: "vk",
          link: "#",
        },
      ],
    },
    {
      img: img2,
      title: "Benjamin Mark",
      desig: "DIRECTOR",
      SocialList: [
        {
          title: "facebook",
          link: "#",
        },
        {
          title: "twitter",
          link: "#",
        },
        {
          title: "instagram",
          link: "#",
        },
        {
          title: "vk",
          link: "#",
        },
      ],
    },
    {
      img: img3,
      title: "Steve Louis",
      desig: "DEVELOPER",
      SocialList: [
        {
          title: "facebook",
          link: "#",
        },
        {
          title: "twitter",
          link: "#",
        },
        {
          title: "instagram",
          link: "#",
        },
        {
          title: "vk",
          link: "#",
        },
      ],
    },
    {
      img: img4,
      title: "Shawn Philip",
      desig: "DESIGNER",
      SocialList: [
        {
          title: "facebook",
          link: "#",
        },
        {
          title: "twitter",
          link: "#",
        },
        {
          title: "instagram",
          link: "#",
        },
        {
          title: "vk",
          link: "#",
        },
      ],
    },
  ],
};

const Team = () => {
  return (
    <>
      <div
        id="merox-team-area"
        className="merox-team-area pt-[100px] pb-[70px] wow fadeInUp"
      >
        <div className="container">
          <div className="flex flex-wrap mx-[-12px]">
            <div className="w-full px-[12px] flex-[0_0_auto]">
              <div className="section-title mb-10">
                <h4 className="uppercase font-medium text-[20px] relative pl-[30px] mb-[15px] before:bg-[#ff2782] before:h-[2px] before:w-5 before:content-[''] before:absolute before:left-0 before:top-[11px]">
                  {TeamData.title}
                </h4>
                <h3 className="text-[50px] font-bold leading-[49px] uppercase">
                  {TeamData.title2}
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="flex flex-wrap mx-[-12px]">
            {TeamData.TeamList.map((item, i) => (
              <div
                className="xl:w-3/12 lg:w-3/12 md:w-6/12 sm:w-full xsm:w-full px-[12px] flex-[0_0_auto]"
                key={i}
              >
                <div className="single-team-wrapper text-center mb-[30px] overflow-hidden transition-all duration-[0.35s] shadow-[0px_8px_20px_0px_rgba(0,0,0,0.14)] animate-[all_0.35s_cubic-bezier(0.6,-0.02,0.39,1.13)] group">
                  <div className="team-img relative">
                    <Image
                      className="rounded-tr-[5px] rounded-tl-[5px] w-full"
                      src={item.img}
                      alt="team"
                    />
                  </div>
                  <div className="team-content py-5 px-[35px] bg-white rounded-br-[5px] rounded-bl-[5px] -mt-[50px] translate-y-[50px] transition-all duration-[0.3s] ease-linear before:content-[''] before:absolute before:bottom-full before:h-0 before:border-l-[15px] before:border-solid before:border-transparent before:border-r-[15px] before:border-b-[15px] before:border-b-[#ffffff] before:-ml-[15px] before:transition-all before:duration-[0.3s] group-hover:translate-y-0 group-hover:bg-[#ff2782] group-hover:before:border-b-[#ff2782]">
                    <h4 className="text-[24px] font-bold capitalize mb-[5px] group-hover:text-white">
                      {item.title}
                    </h4>
                    <span className="group-hover:text-white uppercase text-[16px] text-[#ff2782] font-semibold block pb-[15px] mb-[15px] border-b-[1px] border-solid border-white">
                      {item.desig}
                    </span>
                    <div className="team-social-box transition-all duration-[0.3s]">
                      {item.SocialList.map((item, ii) => (
                        <Link
                          className="group-hover:text-white text-[#cbcbcb] text-[14px] duration-[0.3s] mr-[15px]"
                          href={item.link}
                          key={ii}
                        >
                          <i className={`fa fa-${item.title}`}></i>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
