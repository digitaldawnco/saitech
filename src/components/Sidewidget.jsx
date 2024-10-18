"use client";
import Image from "next/image";
import React from "react";
import img1 from "../../public/img/wdg/wdg-img-1.jpg";
import img2 from "../../public/img/wdg/wdg-img-2.jpg";
import img3 from "../../public/img/wdg/wdg-img-3.jpg";
import Link from "next/link";
const SidewdgData = {
  title: "Popular Posts",
  title2: "Follow Us",
  title3: "Post Tags",
  title4: "Categories",
  Postlist: [
    {
      img: img1,
      title: "How to build a company culture of success",
      date: "May 03, 2019",
      link: "#",
    },
    {
      img: img2,
      title: "Investment Update, Successful people ask",
      date: "Jun 08, 2019",
      link: "#",
    },
    {
      img: img3,
      title: "Connects different and countries trying times natio",
      date: "Aug 11, 2022",
      link: "#",
    },
  ],
  SocialList: [
    {
      title: "fa fa-facebook",
      link: "#",
    },
    {
      title: "fa fa-twitter",
      link: "#",
    },
    {
      title: "fa fa-linkedin",
      link: "#",
    },
    {
      title: "fa fa-pinterest-p",
      link: "#",
    },
    {
      title: "fa fa-instagram",
      link: "#",
    },
  ],
  TagsList: [
    {
      title: "awesome",
      link: "#",
    },
    {
      title: "template",
      link: "#",
    },
    {
      title: "ui/ux",
      link: "#",
    },
    {
      title: "software",
      link: "#",
    },
    {
      title: "develop",
      link: "#",
    },
  ],
  CtgList: [
    {
      title: "Gallery",
      link: "#",
    },
    {
      title: "Business",
      link: "#",
    },
    {
      title: "Office",
      link: "#",
    },
    {
      title: "Design",
      link: "#",
    },
  ],
};
const Sidewidget = () => {
  return (
    <>
      <div className="xl:w-4/12 lg:w-4/12 md:w-5/12 sm:w-full xsm:w-full px-[12px] flex-[0_0_auto]">
        <div className="single-sid-wdg p-[30px] mb-[50px] border-[1px] border-solid border-[#f1f1f1] sm:mt-[30px]">
          <form action="#" className="wdg-search-form relative">
            <input
              type="text"
              placeholder="search"
              className="h-[57px] rounded-none shadow-none text-[#1a2b3c] bg-transparent border-[1px] border-solid border-[#f1f1f1] w-full p-5 font-poppins text-[15px] capitalize focus:!ring-[none] focus:!border-[#f1f1f1] focus:border-solid focus:!outline-offset-0  focus:outline-0"
              required
            />
            <button
              className="submit-btn h-[57px] bg-[#ff2782] border-[1px] border-solid border-[#f1f1f1] text-white text-[15px] font-semibold tracking-[1px] p-[15px_30px] inline-block rounded-none absolute right-0 top-0 cursor-pointer border-l-[#f7faff] focus:bg-[#ff2782]"
              type="submit"
            >
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>
        <div className="single-sid-wdg p-[30px] mb-[50px] border-[1px] border-solid border-[#f1f1f1]">
          <div className="widget_recent_entries">
            <h3 className="font-bold text-[#353858] mb-10 capitalize text-[24px] relative before:absolute before:left-0 before:content-[''] before:-bottom-[15px] before:w-[70px] before:h-1 before:bg-[#ff2782]">
              {SidewdgData.title}
            </h3>
            {SidewdgData.Postlist.map((item, i) => (
              <div
                className="single-wdg-post flex mb-5 pb-5 border-b-[1px] border-solid border-[#f1f1f1] group last:mb-0 last:pb-0 last:border-none group"
                key={i}
              >
                <div className="wdg-post-img min-w-[100px] h-auto">
                  <Link href={item.link}>
                    <Image
                      src={item.img}
                      alt="blog thumbnail"
                      className="img-fluid"
                    />
                  </Link>
                </div>
                <div className="wdg-post-content pl-[12px]">
                  <h5 className="text-[16px] font-medium leading-[22px] text-[#1a2b3c]">
                    <Link
                      className="group-hover:text-[#ff60a3]"
                      href={item.link}
                    >
                      {item.title}
                    </Link>
                  </h5>
                  <span className="mt-[10px] block text-[14px] leading-6 font-normal text-[#777777] capitalize">
                    {item.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="single-sid-wdg p-[30px] mb-[50px] border-[1px] border-solid border-[#f1f1f1]">
          <h3 className="font-bold text-[#353858] mb-10 capitalize text-[24px] relative before:absolute before:left-0 before:content-[''] before:-bottom-[15px] before:w-[70px] before:h-1 before:bg-[#ff2782]">
            {SidewdgData.title2}
          </h3>
          <ul className="wdg-follow-us p-0 m-0">
            {SidewdgData.SocialList.map((item, i) => (
              <li className="inline-block my-0 mx-[5px]" key={i}>
                <Link
                  className="block text-center text-[20px] text-[#1a2b3c] bg-white rounded-[50%] leading-10 w-10 h-10 transition-all duration-[0.3s] border-[1px] border-solid border-[#f1f1f1] hover:text-white hover:bg-[#ff2782] "
                  href={item.link}
                >
                  <i className={item.title}></i>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="single-sid-wdg p-[30px] mb-[50px] border-[1px] border-solid border-[#f1f1f1]">
          <div className="widget_tag_cloud">
            <h3 className="font-bold text-[#353858] mb-10 capitalize text-[24px] relative before:absolute before:left-0 before:content-[''] before:-bottom-[15px] before:w-[70px] before:h-1 before:bg-[#ff2782]">
              {SidewdgData.title3}
            </h3>
            <div className="tagcloud">
              {SidewdgData.TagsList.map((item, i) => (
                <Link
                  className="text-[13px] leading-6 text-[#1a2b3c] py-[10px] px-[15px] border-[1px] border-solid border-[#f1f1f1] inline-block transition-all duration-[0.2s] capitalize rounded-[20px] mt-0 mr-[5px] mb-[10px] ml-0 hover:bg-[#ff2782] hover:text-white"
                  href={item.link}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="single-sid-wdg p-[30px] mb-[50px] border-[1px] border-solid border-[#f1f1f1]">
          <div className="widget_categories m-0 p-0 list-none">
            <h3 className="font-bold text-[#353858] mb-10 capitalize text-[24px] relative before:absolute before:left-0 before:content-[''] before:-bottom-[15px] before:w-[70px] before:h-1 before:bg-[#ff2782]">
              {SidewdgData.title4}
            </h3>
            <ul>
              {SidewdgData.CtgList.map((item, i) => (
                <li className="group last:mb-0" key={i}>
                  <Link
                    className="capitalize text-[16px] text-[#757575] transition-all duration-[0.3s] group-hover:text-[#ff2782]"
                    href={item.link}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidewidget;
