"use client"
import React from 'react'
import aboutimg1 from "../../public/img/about/about-1.jpg" 
import Image from 'next/image'
import Link from 'next/link'

const AboutData={
  aboutimg1:aboutimg1,
  title:"SAITECH STUDIO",
  title2:'about <span class="text-[#ff2782]">SAITECH</span> STUDIO',
  brief:"There are many variations of passages of Lorem Ipsum but the majority have suffered alteration in some form injected, or randomised words which don't look even slightly. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything",
  btntext:"about us",
  btnlink:"#",
  AboutList:[
    {
      title:"Proven Expertise: Our team of experienced IT professionals has a proven track record of delivering successful projects and solutions.",
    },
    {
      title:"Customized Solutions: We tailor our services to meet your unique requirements and goals",
    },
    {
      title:"Customer Satisfaction: Our commitment to customer satisfaction drives everything we do.",
    },
    {
      title:"Reliability and Trust: We prioritize reliability and trust in our partnerships.",
    },
  ],
}

const About = () => {
  return (
    <>
    <div id="merox-about-area" className="merox-about-area mt-[100px] mb-[70px]">
      <div className="container">
        <div className="flex flex-wrap mx-[-12px]">
          <div className="xl:w-5/12 lg:w-6/12 md:w-full sm:w-full xsm:w-full px-[12px] wow fadeInLeft">
            <div className="about-img-area relative before:absolute before:right-full before:top-0 before:bottom-0 before:m-auto before:h-[68%] before:opacity-[0.30] before:-z-[1] before:animate-[leftright_3s_infinite_alternate] before:content-[url('../../public/img/about/about.png')]">
              <Image className="w-full" src={AboutData.aboutimg1} alt="about" />
            </div>
          </div>
          <div className="xl:ml-[8.33333333%] xl:w-6/12 lg:w-6/12 md:w-full sm:w-full xsm:w-full px-[12px] wow fadeInRight">
            <div className="section-title mb-10 md:mt-10 sm:mt-10">
              <h4 className="uppercase font-medium text-[20px] relative pl-[30px] mb-[15px] before:bg-[#ff2782] before:h-[2px] before:w-5 before:content-[''] before:absolute before:left-0 before:top-[11px]">15 Years of Experience</h4>
              <h3 className="text-[50px] font-bold leading-[49px] uppercase"><span className="text-[#ff2782]">SAITECH</span> STUDIO </h3>
            </div>
            <div className="about-content">
              <p>SAITECH STUDIO is well known IT Company focusing on providing solutions in the Information and Communication Technology field. We ensure the technology supports organizations throughout their IT infrastructure solution services and lifecycle management.</p>
              <p>Our expertise spans Network & IT Infrastructure Services, IT Infrastructure Security Services, Information Access, Unified Communications, Infrastructure Management Lifecycle, and Managed Services.</p>
              <p>Our Innovative technologies authorize enterprises to leverage IT to achieve and enhance operational efficiency, speed, cost efficiency, and productivity. We provide standard best practice template solutions guiding every design. We deliver projects on time and in the most efficient manner.</p>

              <ul className="about-content-list p-0 mt-[25px] mb-[30px] mx-0 list-none">
      {AboutData.AboutList.map((item, i) => (
                <li className="text-[18px] text-[#24262d] font-semibold mb-[15px]" key={i}>
                  <i className="fa fa-check text-[#ff2782] mr-[10px]"></i>{item.title}
                </li>
      ))}
              </ul>
              {/* <Link href={AboutData.btnlink} className="btn btn-4">{AboutData.btntext}</Link> */}
            </div>
          </div>
        </div>
      </div>
    </div></>
  )
}

export default About