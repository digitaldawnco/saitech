import React from "react";
import bgimg from "../../public/img/breadcrumb/bg.jpg";
import Link from "next/link";

const BreadcrumbData = {
  bgimg: bgimg,
  home: "home",
};
const Breadcrumb = ({ title }) => {
  return (
    <>
      <div
        id="merox-breadcrumb-area"
        className="merox-breadcrumb-area bg-center bg-cover relative pt-[234px] px-0 pb-[134px] text-left"
        style={{ backgroundImage: `url(${BreadcrumbData.bgimg.src})` }}
      >
        <div className="container">
          <div className="flex flex-wrap mx-[-12px]">
            <div className="w-full px-[12px] flex-[0_0_auto]">
              <h2 className="uppercase mb-[10px] font-medium text-[70px] text-white">
                {title}
              </h2>
              <ul className="breadcrumb bg-inherit flex items-center justify-start">
                <li className="breadcrumb-item text-[24px] font-poppins">
                  <Link href="/" title="Home" className="text-white capitalize">
                    {BreadcrumbData.home}
                  </Link>
                </li>
                <li
                  className="breadcrumb-item capitalize text-[24px] font-poppins ml-2 active relative
                        text-white inline-block before:mr-2 before:content-['/']"
                >
                  {title}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;
