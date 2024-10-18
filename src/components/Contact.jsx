import Image from "next/image";
import React from "react";
import img1 from "../../public/img/contact/icon-1.png";
import img2 from "../../public/img/contact/icon-2.png";
import img3 from "../../public/img/contact/icon-3.png";

const ContactData = {
  title: "contact",
  title2: "contact us",
  btntext: "Send Message",
  ContactinfoList: [
    {
      img: img1,
      info: '<li class="text-[20px] font-medium mb-0 font-poppins leading-[30px] text-[#656970]">+1-234-567-8991</li><li class="text-[20px] font-medium mb-0 font-poppins leading-[30px] text-[#656970]">+1-234-567-8991</li>',
    },
    {
      img: img2,
      info: '<li class="text-[20px] font-medium mb-0 font-poppins leading-[30px] text-[#656970]">189 Matex Street, Badly</li><li class="text-[20px] font-medium mb-0 font-poppins leading-[30px] text-[#656970]">New York, NY-12548</li>',
    },
    {
      img: img3,
      info: '<li class="text-[20px] font-medium mb-0 font-poppins leading-[30px] text-[#656970]"><a class="text-[20px] font-medium mb-0 font-poppins leading-[30px] text-[#656970]" href="mailto:merox@web.com">merox@web.com</a></li><li class="text-[20px] font-medium mb-0 font-poppins leading-[30px] text-[#656970]"><a class="text-[20px] font-medium mb-0 font-poppins leading-[30px] text-[#656970]" href="mailto:sales@website.com">sales@website.com</a></li>',
    },
  ],
};

const Contact = () => {
  return (
    <>
      <div id="merox-contact-area" className="merox-contact-area my-[100px]">
        <div className="container">
          <div className="flex flex-wrap mx-[-12px]">
            <div className="w-full px-[12px] flex-[0_0_auto]">
              <div className="section-title mb-10">
                <h4 className="uppercase font-medium text-[20px] relative pl-[30px] mb-[15px] before:bg-[#ff2782] before:h-[2px] before:w-5 before:content-[''] before:absolute before:left-0 before:top-[11px]">
                  {ContactData.title}
                </h4>
                <h3 className="text-[50px] font-bold leading-[49px] uppercase">
                  {ContactData.title2}
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="flex flex-wrap mx-[-12px]">
            <div className="xl:w-7/12 lg:w-7/12 md:w-full sm:w-full xl:pr-[30px] lg:pr-[30px] md:mb-[30px] sm:mb-[30px]">
              <div className="merox-contact-form-area py-[70px] px-[50px] bg-[#f7faff] shadow-[0px_15px_30px_0px_rgba(0,0,0,0.14)] rounded-[10px]">
                <form
                  className="merox-contact-form"
                  id="ajax-contact"
                  action="mail.php"
                  method="post"
                >
                  <div className="container">
                    <div className="flex flex-wrap mx-[-12px]">
                      <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 sm:w-full xsm:w-full px-[12px] flex-[0_0_auto]">
                        <input
                          className="form-control shadow-none text-[#777777] h-[50px] mb-[30px] bg-white border-[1px] border-solid border-[#e7eaf0] py-[5px] px-5 transition-all duration-[0.3s] w-full focus:shadow-[0px_10px_14px_0px_rgba(12,0,46,0.06)] focus:border-[1px] focus:border-solid focus:border-[#ff60a3]"
                          type="text"
                          name="name"
                          placeholder="Name *"
                        />
                      </div>
                      <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 sm:w-full xsm:w-full px-[12px] flex-[0_0_auto]">
                        <input
                          className="form-control shadow-none text-[#777777] h-[50px] mb-[30px] bg-white border-[1px] border-solid border-[#e7eaf0] py-[5px] px-5 transition-all duration-[0.3s] w-full focus:shadow-[0px_10px_14px_0px_rgba(12,0,46,0.06)] focus:border-[1px] focus:border-solid focus:border-[#ff60a3]"
                          type="email"
                          name="email"
                          placeholder="E-mail *"
                        />
                      </div>
                      <div className="xl:w-full lg:w-full md:w-full sm:w-full xsm:w-full px-[12px] flex-[0_0_auto]">
                        <input
                          className="form-control shadow-none text-[#777777] h-[50px] mb-[30px] bg-white border-[1px] border-solid border-[#e7eaf0] py-[5px] px-5 transition-all duration-[0.3s] w-full focus:shadow-[0px_10px_14px_0px_rgba(12,0,46,0.06)] focus:border-[1px] focus:border-solid focus:border-[#ff60a3]"
                          type="text"
                          name="subject"
                          placeholder="Subject"
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap mx-[-12px]">
                      <div className="w-full px-[12px] flex-[0_0_auto]">
                        <textarea
                          className="form-control h-[133px] shadow-none text-[#777777] mb-[30px] bg-white border-[1px] border-solid border-[#e7eaf0] py-[15px] px-5 transition-all duration-[0.3s] w-full focus:shadow-[0px_10px_14px_0px_rgba(12,0,46,0.06)] focus:border-[1px] focus:border-solid focus:border-[#ff60a3]"
                          name="message"
                          cols="30"
                          rows="8"
                          placeholder="Message"
                        ></textarea>
                        <button type="submit" className="btn btn-1">
                          {ContactData.btntext}
                        </button>
                      </div>
                    </div>
                    <p className="form-message float-left mt-[15px] text-[15px]"></p>
                  </div>
                </form>
              </div>
            </div>
            <div className="xl:w-5/12 lg:w-5/12 md:w-full sm:w-full xsm:w-full px-[12px] flex-[0_0_auto]">
              <div className="contact-map-area">
                <iframe
                  id="merox-map"
                  className="w-full h-[525px]"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96652.27317354927!2d-74.33557928194516!3d40.79756494697628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3a82f1352d0dd%3A0x81d4f72c4435aab5!2sTroy+Meadows+Wetlands!5e0!3m2!1sen!2sbd!4v1563075599994!5m2!1sen!2sbd"
                  allowFullScreen={true}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="merox-contact-info-area"
        className="merox-contact-info-area mb-[70px]"
      >
        <div className="container">
          <div className="flex flex-wrap mx-[-12px]">
            {ContactData.ContactinfoList.map((item, i) => (
              <div
                className="xl:w-4/12 lg:w-4/12 md:w-6/12 sm:w-full xsm:w-full px-[12px] flex-[0_0_auto]"
                key={i}
              >
                <div className="contact-info-box flex mb-[30px]">
                  <div className="contact-info-icon bg-white rounded-[50%] w-20 h-20 inline-flex text-center justify-center shadow-[0px_15px_30px_0px_rgba(0,0,0,0.14)] items-center mr-5">
                    <Image src={item.img} alt="icon-img" />
                  </div>
                  <ul
                    className="contact-info py-[10px] px-0 m-0 list-none"
                    dangerouslySetInnerHTML={{ __html: item.info }}
                  ></ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
