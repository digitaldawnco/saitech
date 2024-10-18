"use client";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import logo1 from "../../public/img/client/client-1.png";
import logo2 from "../../public/img/client/client-2.png";
import logo3 from "../../public/img/client/client-3.png";
import logo4 from "../../public/img/client/client-4.png";
import logo5 from "../../public/img/client/client-5.png";


const ClientData = {
  ClientList: [
    {
      img: logo1,
      link: "#",
    },
    {
      img: logo2,
      link: "#",
    },
    {
      img: logo3,
      link: "#",
    },
    {
      img: logo4,
      link: "#",
    },
    {
      img: logo5,
      link: "#",
    },
  ],
};
const Client = () => {
  return (
    <>
      <div id="merox-client-slider" className="merox-client-slider py-[30px]">
        <div className="container">
          <div className="flex flex-wrap mx-[-12px]">
            <div className="xl:w-10/12 lg:w-10/12 md:w-full sm:w-full xsm:w-full mx-auto flex-[0_0_auto]">
              <Swiper
                className="all-client-slider"
                modules={[Navigation, Autoplay]}
                slidesPerView="auto"
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  600: {
                    slidesPerView: 2,
                  },
                  992: {
                    slidesPerView: 3,
                  },
                  1200: {
                    slidesPerView: 4,
                  },
                }}
                autoplay={true}
                allowTouchMove={true}
                loop={true}
                speed={500}
              >
                {ClientData.ClientList.map((item, i) => (
                  <SwiperSlide key={i}>
                    <Link href={item.link}>
                      <div className="single-client py-[52px] px-[52px]">
                        <Image
                          src={item.img}
                          alt="client-img"
                          className="img-fluid h-32"
                        />
                      </div>
                    </Link>
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

export default Client;
