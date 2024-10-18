"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Sidewidget from "./Sidewidget";
import img1 from "../../public/img/blog/details.jpg";
import img2 from "../../public/img/blog/details-1.jpg";
import cmtimg1 from "../../public/img/blog/comments1.png";
import cmtimg2 from "../../public/img/blog/comments2.png";

const BlogdetailsData = {
  img1: img1,
  date:'14 NOV 2019',
  title: "In Spring Dumont Opens Mixed Reality On Experience Popular Belief",
  brief1:"There are many variations of passages of Lorem Ipsum available, but the have and majority have suffered teration some form, by injected humour, and omised words which don't look even slightly believable. There are many of it passages of Lorem’s Ipsum available, but the",
  img2: img2,
  title2: "We’re Fortunate To Work With Worldwide Clients",
  brief2:
    "It is a long established fact that a reader will be distracted by the readable of a page when this looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
  brief3:
    "It is a long established fact that a reader will be distracted by the readable of a page when this looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
  blockquote:
    "industry.has been the industry's standard dummy text ever since the 1500s, when an unk nown printer took a galley of type and and scrales",
  blockquoteauthor: "Mr. Robul Islam",
  brief4:
    "It is a long established fact that a reader will be distracted by the readable of a page when this looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters",
  brief5:
    "It is a long established fact that a reader will be distracted by the readable of a page when this looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
  tagtitle: "Post Tags:",
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
  ],

  commentitle: "3 Comments",
  CommentList: [
    {
      img: cmtimg1,
      title: "Merox",
      date: "Dec 08 2022",
      brief:
        "industry. Lorem Ipsum has been the industry's standard dummy text ever since t he 1500s, when an unknown",
      replay: "replay",
      replaylink: "#",
    },
    {
      img: cmtimg2,
      title: "Worker Man",
      date: "Jan 11 2018",
      brief:
        "industry. Lorem Ipsum has been the industry's standard dummy text ever since t he",
      replay: "replay",
      replaylink: "#",
    },
    {
      img: cmtimg1,
      title: "Merox",
      date: "Dec 08 2022",
      brief:
        "industry. Lorem Ipsum has been the industry's standard dummy text ever since t he 1500s, when an unknown",
      replay: "replay",
      replaylink: "#",
    },
  ],
  leavtitle: "Leave A Comment",
  btn: "post comments",
};

const Blogdetails = () => {
  return (
    <>
    <div id="merox-blog-area" className="merox-blog-area my-[100px]">
      <div className="container">
        <div className="flex flex-wrap mx-[-12px]">
          <div className="xl:w-8/12 lg:w-8/12 md:w-7/12 sm:w-full xl:pr-[30px] lg:pr-[30px] md:pr-[30px] px-[12px]">
            <div className="merox-blog-details-wraper">
              <div className="blog-details-content">
                <div className="blog-details-img">
                  <Image className="w-full" src={BlogdetailsData.img1} alt="img" />
                </div>
                <div className="blog-date inline-block bg-[#000000] text-white  py-[15px] px-[30px] text-[15px] font-bold uppercase transition-all duration-[0.3s] mt-[35px]">{BlogdetailsData.date}</div>
                <h4 className="block capitalize text-[#353858] font-bold text-[28px] transition-all duration-[0.3s] my-5 mx-0 mb-[15px]">{BlogdetailsData.title}</h4>
                <p className="mb-4">{BlogdetailsData.brief}</p>
                <figure className="mb-4">
                  <Image className="w-full my-[15px] px-0" src={BlogdetailsData.img2} alt="img" />
                </figure>
                <h3 className="text-[30px] font-medium capitalize mb-[15px]">{BlogdetailsData.title2}</h3>
                <p className="mb-4">{BlogdetailsData.brief1}</p>
                <p className="mb-4">{BlogdetailsData.brief2}</p>
                <blockquote className="block-quote bg-white border-l-[6px] border-solid border-[#ff2782] !p-[35px] shadow-[0px_0px_30px_0px_rgba(26,43,60,0.15)] rounded-md relative overflow-hidden my-10 mx-0 z-[1] before:content-['\f10d'] before:absolute before:top-2/4 before:left-2/4 before:-translate-x-2/4 before:-translate-y-2/4 before:text-[#ff2782] before:leading-none before:font-fontawesome before:text-[150px] before:opacity-[0.1] before:-z-[1]">
                  <p className="text-[#1a2b3c] text-[24px] font-medium leading-8">{BlogdetailsData.blockquote}</p>
                  <cite className="relative text-[16px] font-semibold capitalize pl-[15px] block mt-[30px] before:absolute before:content-[''] before:bottom-0 before:bg-[#ff2782] before:top-2/4 before:left-0 before:w-[10px] before:h-[2px] before:my-0 before:mx-auto before:-translate-y-2/4">{BlogdetailsData.blockquoteauthor}</cite>
                </blockquote>
                <p className="mb-4">{BlogdetailsData.brief3}</p>
                <p className="mb-4">{BlogdetailsData.brief4}</p>
              </div>
              <div className="blog-post-tag bg-white pt-[30px] pb-0 w-full overflow-hidden">
                <span className="font-semibold block text-[#1a2b3c] capitalize text-[20px] mb-5">{BlogdetailsData.tagtitle}</span>
                {BlogdetailsData.TagsList.map((item, i) => (
                <Link className="text-[#1a2b3c] inline-block font-medium uppercase duration-[0.3s] text-xs border-[1px] border-solid border-[#e5e5e5] py-[10px] px-6 mr-[5px] rounded-[30px] mb-[10px] hover:text-white hover:bg-[#ff2782] hover:border-[#ff2782]" href={item.link} key={i}>{item.title}</Link>
                ))}
              </div>
              <div className="recent-comments-area mt-[50px]">
                <div className="post-heading">
                  <h3 className="text-[28px] font-bold capitalize mb-[30px] text-[#1a2b3c] leading-[1]">{BlogdetailsData.commentitle}</h3>
                </div>
                <div className="latest-comments">
                  <ul>
                    {BlogdetailsData.CommentList.map((item, i) => (
                    <li key={i}>
                      <div className="comments-box border-b-[1px] border-solid border-[#e7eaf0] pb-[30px] mb-[30px]">
                        <div className="comments-avatar w-[100px] float-left">
                          <Image className="rounded-[50%]" src={item.img} alt=""/>
                        </div>
                        <div className="comments-text overflow-hidden pl-[30px]">
                          <div className="avatar-name-date overflow-hidden">
                            <h5 className="font-poppins text-[#1a2b3c] capitalize text-[18px] font-medium">{item.title}</h5>
                            <span className="font-poppins text-[#333333] block capitalize text-[14px] font-normal mt-[10px] mb-[12px]">{item.date}</span>
                          </div>
                          <p className="text-[17px] text-[#878991] mb-5">{item.brief}</p>
                          <Link className="inline-block text-[16px] font-semibold capitalize text-[#1a2b3c] font-poppins" href={item.replaylink}>{item.replay}</Link>
                        </div>
                      </div>
                    </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="post-comments-form-area">
                <div className="post-heading">
                  <h3 className="text-[28px] font-bold capitalize mb-[30px] text-[#1a2b3c] leading-[1]">{BlogdetailsData.leavtitle}</h3>
                </div>
                <form action="#" className="post-comments-form bg-[#f7faff] p-[50px] shadow-[0px_10px_20px_0px_rgba(0,0,0,0.14)]">
                  <div className="flex flex-wrap mx-[-12px]">
                    <div className="w-full px-[12px] flex-[0_0_auto]">
                      <textarea name="comments" className="form-control shadow-none text-[#777777] h-[133px] mb-[30px] bg-white border-[1px] border-solid border-[#e7eaf0] p-[15px] transition-all duration-[0.3s] w-full focus:shadow-[0px_10px_14px_0px_rgba(12,0,46,0.06)] focus:border-[1px] focus:border-solid focus:border-[#ff60a3]" cols="30" rows="10" placeholder="Your Comments"></textarea>
                    </div>
                    <div className="w-6/12 px-[12px] flex-[0_0_auto]">
                      <input type="text" className="form-control shadow-none text-[#777777] h-[50px] mb-[30px] bg-white border-[1px] border-solid border-[#e7eaf0] py-[5px] px-5 transition-all duration-[0.3s] w-full focus:shadow-[0px_10px_14px_0px_rgba(12,0,46,0.06)] focus:border-[1px] focus:border-solid focus:border-[#ff60a3]" placeholder="Name *"/>
                    </div>
                    <div className="w-6/12 px-[12px] flex-[0_0_auto]">
                      <input type="email" className="form-control shadow-none text-[#777777] h-[50px] mb-[30px] bg-white border-[1px] border-solid border-[#e7eaf0] py-[5px] px-5 transition-all duration-[0.3s] w-full focus:shadow-[0px_10px_14px_0px_rgba(12,0,46,0.06)] focus:border-[1px] focus:border-solid focus:border-[#ff60a3]" placeholder="E-mail *"/>
                    </div>
                    <div className="w-full px-[12px] flex-[0_0_auto]">
                      <button className="btn btn-1" type="submit">{BlogdetailsData.btn}</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <Sidewidget/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Blogdetails