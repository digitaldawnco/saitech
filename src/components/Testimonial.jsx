"use client";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import React from "react";
import img1 from "../../public/img/testimonial/client-1.png";
import img2 from "../../public/img/testimonial/client-2.png";

const TestimonialData = {
  title: "TESTIMONIALS",
  title2: "CLIENT’S SAY",
  TesstimonialList: [
    {
      title: "Daniel Wells",
      desig: "DEVELOPER",
      brief:
        "dummy text of the printing and type setting and industry. Lorem Ipsum has been the industry's",
      img: img1,
    },
    {
      title: "Morgan Liu",
      desig: "EXPERT",
      brief:
        "dummy text of the printing and type setting and industry. Lorem Ipsum has been the industry's",
      img: img2,
    },
    {
      title: "Daniel Wells",
      desig: "DEVELOPER",
      brief:
        "dummy text of the printing and type setting and industry. Lorem Ipsum has been the industry's",
      img: img1,
    },
  ],
};

const Testimonial = () => {
  return (
    <>
      <div
        id="merox-testimonial-area"
        className="merox-testimonial-area py-[100px] wow fadeInUp"
      >
        <div className="container">
          <div className="flex flex-wrap mx-[-12px]">
            <div className="w-full px-[12px] flex-[0_0_auto]">
              <div className="section-title mb-10">
                <h4 className="uppercase font-medium text-[20px] relative pl-[30px] mb-[15px] before:bg-[#ff2782] before:h-[2px] before:w-5 before:content-[''] before:absolute before:left-0 before:top-[11px]">
                  {TestimonialData.title}
                </h4>
                <h3 className="text-[50px] font-bold leading-[49px] uppercase">
                  {TestimonialData.title2}
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="container relative">
          <div className="flex flex-wrap mx-[-12px]">
            <div className="w-full px-[12px] flex-[0_0_auto]">
              <Swiper
                className="testimonial-wraper"
                modules={[Pagination, Autoplay]}
                slidesPerView="auto"
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  600: {
                    slidesPerView: 2,
                  },
                  992: {
                    slidesPerView: 2,
                  },
                  1200: {
                    slidesPerView: 2,
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
                {TestimonialData.TesstimonialList.map((item, i) => (
                  <SwiperSlide key={i}>
                    <div className="single-testimonial flex py-0 px-[15px]">
                      <div className="testimonial-img inline-block">
                        <Image
                          src={item.img}
                          className="img-fluid !w-[180px] h-auto rounded-[50%] border-[5px] border-solid border-[#ff2782]"
                          alt="testimonial-img"
                        />
                      </div>
                      <div className="testimonial-content pl-[15px]">
                        <p className="m-0">{item.brief}</p>
                        <div className="title-desig mb-[15px]">
                          <h3 className="text-[24px] font-bold capitalize font-poppins mt-[13px] mb-[10px]">
                            {item.title}
                          </h3>
                          <h4 className="uppercase text-[16px]">{item.desig}</h4>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;