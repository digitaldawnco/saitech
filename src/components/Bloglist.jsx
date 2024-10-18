"use client";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import img1 from "../../public/img/blog/1.jpg";
import img2 from "../../public/img/blog/2.jpg";
import img3 from "../../public/img/blog/3.jpg";
import Sidewidget from "./Sidewidget";

const BlogData = {
  videoid: "snvzakfcTmY",
  SimplepostList: [
    {
      img: img1,
      date: "14 NOV 2019",
      posttitle: "In Spring Dumont Opens Mixed Reality Experience",
      postlink: "#",
      brief:
        "there are many variations of passages of Lorem Ipsum available, but the have majority have suffered teration some form, by injected humour, and omised words which don't look even slightly believable. There are many of it passages of Lorem Ipsum available, but the",
      author: "by admin",
      authorlink: "#",
      comment: "0 Comments",
      commentlink: "#",
    },
  ],
  SliderpostList: [
    {
      date: "25 JAN 2008",
      posttitle: "Contrary To Popular Belief, Lorem Sims Ply Random Text",
      postlink: "#",
      brief:
        "there are many variations of passages of Lorem Ipsum available, but the have majority have suffered teration some form, by injected humour, and omised words which don't look even slightly believable. There are many of it passages of Lorem Ipsum available, but the",
      author: "by admin",
      authorlink: "#",
      comment: "1 Comments",
      commentlink: "#",
      Sliderimg: [
        {
          img: img1,
        },
        {
          img: img2,
        },
        {
          img: img3,
        },
      ],
    },
  ],
  VideopostList: [
    {
      img: img3,
      date: "10 MAr 2000",
      posttitle: "Not Simply Random Text. It Ha Roots In A Piece Of",
      postlink: "#",
      brief:
        "there are many variations of passages of Lorem Ipsum available, but the have majority have suffered teration some form, by injected humour, and omised words which don't look even slightly believable. There are many of it passages of Lorem Ipsum available, but the",
      author: "by admin",
      authorlink: "#",
      comment: "1 Comments",
      commentlink: "#",
    },
  ],
};

const Bloglist = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div id="merox-blog-area" className="merox-blog-area my-[100px]">
        <div className="container">
          <div className="flex flex-wrap mx-[-12px]">
            <div className="xl:w-8/12 lg:w-8/12 md:w-7/12 sm:w-full xl:pr-[30px] lg:pr-[30px] md:pr-[30px] px-[12px]">
              {BlogData.SimplepostList.map((item, i) => (
                <div
                  className="single-blog-wraper mb-[30px] cursor-pointer group wow fadeInUp"
                  key={i}
                >
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
              ))}
              {BlogData.SliderpostList.map((item, i) => (
                <div
                  className="single-blog-wraper mb-[30px] cursor-pointer relative group wow fadeInUp"
                  key={i}
                >
                  <Swiper
                    className="blog-img-slider"
                    modules={[Pagination, Autoplay]}
                    slidesPerView="auto"
                    breakpoints={{
                      0: {
                        slidesPerView: 1,
                      },
                      600: {
                        slidesPerView: 1,
                      },
                      992: {
                        slidesPerView: 1,
                      },
                      1200: {
                        slidesPerView: 1,
                      },
                    }}
                    autoplay={true}
                    allowTouchMove={true}
                    loop={true}
                    pagination={{
                      clickable: true,
                    }}
                    speed={1000}
                  >
                    {item.Sliderimg.map((item, ii) => (
                      <SwiperSlide key={ii}>
                        <Image
                          className="w-full"
                          src={item.img}
                          alt="blog-img"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
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
              ))}

              {BlogData.VideopostList.map((item, iii) => (
                <div
                  className="single-blog-wraper mb-[30px] cursor-pointer group wow fadeInUp"
                  key={iii}
                >
                  <div className="blog-video-img text-center relative before:content-[''] before:absolute before:left-0 before:top-0 before:right-0 before:bottom-0 before:bg-[#24262d80]">
                    <Image className="w-full" src={item.img} alt="blog-img" />
                    <div className="blog-video-icon absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
                      <div
                        className="blog-popup-video inline-block relative rounded-[50%] h-20 w-20 text-[#ff2782] bg-white text-[30px] leading-[80px] duration-[0.3s] animate-[heartbeat_1s_infinite_alternate] before:content-[''] before:inline-block before:absolute before:-top-[15px] before:-left-[15px] before:-bottom-[15px] before:-right-[15px] before:border-[1px] before:border-solid before:border-white before:animate-[btnIconRipple_3s_cubic-bezier(0.23,1,0.32,1)_both_infinite] before:rounded-[50%] after:content-[''] after:inline-block after:absolute after:-top-[30px] after:-left-[30px] after:-bottom-[30px] after:-right-[30px] after:border-[1px] after:border-solid after:border-white after:animate-[btnIconRipple_2s_cubic-bezier(0.23,1,0.32,1)_both_infinite] after:rounded-[50%]"
                        onClick={() => setOpen(true)}
                      >
                        <i className="fa fa-play"></i>
                      </div>
                    </div>
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
              ))}
              <div className="merox-pagination my-[50px]">
                <ul className="pagination flex items-center text-center">
                  <li className="w-[50px] h-[50px] leading-[50px] border-[1px] border-solid border-[#eeeeee]  text-[#ff2782] mr-4 hover:bg-[#ff2782] hover:text-white transition-all duration-[0.3s] font-semibold font-poppins text-[18px] cursor-pointer">
                    <Link href="#">1</Link>
                  </li>
                  <li className="w-[50px] h-[50px] leading-[50px] border-[1px] border-solid border-[#eeeeee]  text-[#ff2782] mr-4 hover:bg-[#ff2782] hover:text-white transition-all duration-[0.3s] font-semibold font-poppins text-[18px] cursor-pointer">
                    <Link href="#">2</Link>
                  </li>
                  <li className="w-[50px] h-[50px] leading-[50px] border-[1px] border-solid border-[#eeeeee]  text-[#ff2782] mr-4 hover:bg-[#ff2782] hover:text-white transition-all duration-[0.3s] font-semibold font-poppins text-[18px] cursor-pointer">
                    <Link href="#">
                      <i className="fa fa-long-arrow-right"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <Sidewidget />
          </div>
        </div>
      </div>

      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId={BlogData.videoid}
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default Bloglist;
