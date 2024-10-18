"use client";
import React from "react";
import Image from "next/image";
import img1 from "../../public/img/blog/1.jpg";
import img2 from "../../public/img/blog/2.jpg";
import Link from "next/link";

const BlogData = {
  title: "RECENT NEWS",
  title2: "NEWS & ARTICLES",
  BlogList: [
    {
      img: img1,
      date: "14 NOV 2019",
      posttitle: "In Spring Dumont Opens Mixed Reality Experience",
      postlink: "#",
      brief:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered teration some form, by injected humour, or randomised words which don't look even slightly believable.",
      author: "by admin",
      authorlink: "#",
      comment: "0 Comments",
      commentlink: "#",
    },
    {
      img: img2,
      date: "25 JAN 2008",
      posttitle: "There Are Many Variations Of Passages Of But",
      postlink: "#",
      brief:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered teration some form, by injected humour, or randomised words which don't look even slightly believable.",
      author: "by admin",
      authorlink: "#",
      comment: "1 Comments",
      commentlink: "#",
    },
  ],
};

const Blog = () => {
  return (
    <>
      <div
        id="merox-blog-area"
        className="merox-blog-area pt-[100px] pb-[70px]"
      >
        <div className="container">
          <div className="flex flex-wrap mx-[-12px]">
            <div className="w-full px-[12px] flex-[0_0_auto]">
              <div className="section-title mb-10">
                <h4 className="uppercase font-medium text-[20px] relative pl-[30px] mb-[15px] before:bg-[#ff2782] before:h-[2px] before:w-5 before:content-[''] before:absolute before:left-0 before:top-[11px]">
                  {BlogData.title}
                </h4>
                <h3 className="text-[50px] font-bold leading-[49px] uppercase">
                  {BlogData.title2}
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="flex flex-wrap mx-[-12px]">
            {BlogData.BlogList.map((item, i) => (
              <div
                className="xl:w-6/12 lg:w-6/12 md:w-full sm:w-full xsm:w-full px-[12px] flex-[0_0_auto]"
                key={i}
              >
                <div className="single-blog-wraper mb-[30px] cursor-pointer group wow fadeInUp">
                  <div className="blog-img overflow-hidden">
                    <Image
                      className="w-full group-hover:scale-[1.2] group-hover:opacity-[0.8]"
                      src={item.img}
                      alt="blog-img"
                    />
                  </div>
                  <div className="single-blog-content p-[30px] shadow-[0px_8px_20px_0px_rgba(0,0,0,0.14)]">
                    <div className="blog-date text-white inline-block font-bold uppercase transition-all duration-[0.3s] bg-[#000000] py-[15px] px-[30px] text-[15px] group-hover:bg-[#ff2782]">
                      {item.date}
                    </div>
                    <h4>
                      <Link
                        href={item.postlink}
                        className="post-title leading-tight block capitalize font-bold text-[#353858] text-[28px] my-[15px] px-0 transition-all duration-[0.3s] group-hover:text-[#ff2782]"
                      >
                        {item.posttitle}
                      </Link>
                    </h4>
                    <p>{item.brief}</p>
                    <div className="post-info mt-[15px] pt-[15px] border-t-[1px] border-solid border-t-[#e1e1e1]">
                      <Link
                        className="capitalize text-[#353858] font-semibold text-[18px] first:mr-[35px]"
                        href={item.authorlink}
                      >
                        {item.author}
                      </Link>
                      <Link
                        className="capitalize text-[#353858] font-semibold text-[18px]"
                        href={item.commentlink}
                      >
                        {item.comment}
                      </Link>
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

export default Blog;
