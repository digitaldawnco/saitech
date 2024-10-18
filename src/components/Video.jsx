"use client";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import bgimg from "../../public/img/video/video-bg.jpg";
import videobg from "../../public/img/video/video-1.jpg";
import Image from "next/image";

const VideoData = {
  title: "MEROX VIDEOS",
  title2: "VIDEOS",
  bgimg: bgimg,
  videobg: videobg,
  videoid: "snvzakfcTmY",
};

const Video = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div
        id="merox-video-area"
        className="merox-video-area py-32 bg-[#24262d] relative md:pb-20"
      >
        <div className="merox-video-area-img absolute right-0 top-0 h-full w-2/3 bg-no-repeat bg-center bg-cover ">
          <Image
            className="h-full w-full"
            src={VideoData.bgimg}
            alt="video-img"
          />
        </div>
        <div className="container relative">
          <div className="flex flex-wrap mx-[-12px]">
            <div className="xl:ml-[8.33333333%] xl:w-4/12 lg:w-4/12 md:w-full sm:w-full order-2 wow fadeInRight flex-[0_0_auto]">
              <div className="section-title lite mb-10 mt-[245px] sm:mt-20">
                <h4 className="text-white uppercase font-medium text-[20px] relative pl-[30px] mb-[15px] before:bg-[#ff2782] before:h-[2px] before:w-5 before:content-[''] before:absolute before:left-0 before:top-[11px]">
                  {VideoData.title}
                </h4>
                <h3 className="text-white text-[50px] font-bold leading-[49px] uppercase">
                  {VideoData.title2}
                </h3>
              </div>
            </div>
            <div className="xl:w-7/12 lg:w-8/12 md:w-full sm:w-full wow fadeInLeft flex-[0_0_auto]">
              <div className="video-box text-center relative z-[1] before:content-[''] before:absolute before:left-0 before:top-0 before:bg-[#24262d80] before:w-full before:h-full">
                <Image
                  className="w-full rounded-[20px]"
                  src={VideoData.videobg}
                  alt="video-img"
                />
                <div className="videos-icon absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 ">
                  <div
                    className="popup-video inline-block relative rounded-[50%] text-[#ff2782] bg-white duration-[0.3s] h-20 w-20 text-[30px] leading-[80px] animate-[heartbeat_1s_infinite_alternate]  before:content-[''] before:inline-block before:absolute before:-top-[15px] before:-bottom-[15px] before:-left-[15px] before:-right-[15px] before:border-[1px] before:border-solid before:border-white before:animate-[btnIconRipple_3s_cubic-bezier(0.23,1,0.32,1)_both_infinite] before:rounded-[50%] after:content-[''] after:inline-block after:absolute after:-top-[30px] after:-right-[30px] after:-bottom-[30px] after:-left-[30px] after:animate-[btnIconRipple_2s_cubic-bezier(0.23,1,0.32,1)_both_infinite] after:rounded-[50%] cursor-pointer"
                    onClick={() => setOpen(true)}
                  >
                    <i className="fa fa-play"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId={VideoData.videoid}
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default Video;
