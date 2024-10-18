"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "../../public/img/logo-1.png";
import Link from "next/link";

const HeaderData = {
  logo: logo,
  btntext: "let's talk with us ",
  btnlink: "#",
  searchbtn: "search",
  Menu: [
   
  ],
};

const Header = () => {
  //mobile menu function
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const toggleSubmenu = (item) => {
    setActiveSubmenu(activeSubmenu === item ? null : item);
  };

  
  //Search function
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const handleSearchOpen = () => {
    setIsSearchOpen(true);
    document.body.classList.add("search-active");
  };

  const handleSearchClose = () => {
    setIsSearchOpen(false);
    document.body.classList.remove("search-active");
  };
  const currentRoute = usePathname();
  
  //sticky menu function
  const [sticky, setSticky] = useState(false);
  const stickyHeader = () => {
    if (window.scrollY > 200) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", stickyHeader);
  }, []);

  //mobile menu
  const navLinksRef = useRef(null);

  useEffect(() => {
    const handleClick = (event) => {
      const clickedLink = event.target;
      const clickedLinkId = clickedLink.href.split("#")[1];

      navLinksRef.current
        .querySelector("ul")
        .querySelectorAll("a")
        .forEach((link) => {
          link.parentNode.classList.remove("active");
          if (link.href.includes(clickedLinkId)) {
            link.parentNode.classList.add("active");
          }
        });

      const targetSection = document.getElementById(clickedLinkId);
      targetSection.scrollIntoView({ behavior: "smooth" });
    };
  }, []);

  return (
    <>
      <header>
        <div
          className={`header-area absolute left-0 right-0 top-0 z-10  border-solid border-[#cacaca] transition-all duration-[0.3s] ${
            sticky ? "header-fixed animated slideInDown" : ""
          }`}
        >
          <div className="container">
            <div className="flex flex-wrap mx-[-12px] relative">
              <div className="xl:w-2/12 lg:w-2/12 md:w-3/12 sm:w-3/12 xsm:w-3/12 px-[12px] flex-[0_0_auto]">
                <div className="header-logo py-5 lg:border-r-[1px] md:border-r-[1px] sm:border-r-0 border-solid border-[#cacaca]">
                  <Link className="block" href="/">
                    <Image
                      src={HeaderData.logo}
                      alt="logo"
                      className="img-fluid"
                    />
                  </Link>
                </div>
              </div>
              <div className="xl:w-10/12 lg:w-10/12 md:w-9/12 sm:w-9/12 xsm:w-9/12 px-[12px] flex-[0_0_auto]">
                {/* <div className="header-top-right float-right xl:pr-0 lg:pr-[70px] md:pr-[70px] sm:pr-[50px]">
                  <ul
                    className="header-search inline-block list-none p-0 m-0 sm:hidden xsm:hidden"
                    onClick={handleSearchOpen}
                  >
                    <li className="list-none p-0 m-0">
                      <div
                        className="text-white text-center block p-9 bg-[#0000004d] hover:text-[#ff60a3] cursor-pointer"
                        href="#"
                      >
                        <i className="fa fa-search w-[30px] h-[30px] !text-[30px]"></i>
                      </div>
                    </li>
                  </ul>
                </div> */}
                <div className="main-menu-area text-right md:hidden sm:hidden">
                  <div className="main-menu">
                    <nav>
                      <ul>
                        {HeaderData.Menu.map((item, i) => (
                          <li
                            key={i}
                            className={`${
                              item.link === currentRoute ||
                              (item.submenu &&
                                item.submenu.some(
                                  (sub_m) =>
                                    sub_m.link && sub_m.link === currentRoute
                                ))
                                ? "active"
                                : ""
                            }`}
                          >
                            <Link href={item.link}>
                              {item.title}
                              {item.submenu && (
                                <i className="fa fa-angle-down ml-[4px]"></i>
                              )}
                            </Link>
                            {item.submenu && (
                              <ul className="sub-menu text-left">
                                {item.submenu.map((item, i) => (
                                  <li key={i}>
                                    <Link href={item.link}>{item.title}</Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>

              <div className="mobile-menu dropdown inline-block md:visible sm:visible invisible absolute w-full top-full inset-x-0">
                <div
                  tabIndex={0}
                  className="meanmenu-reveal xl:hidden lg:hidden border text-white cursor-pointer block h-10 w-[45px] px-[9px] py-2 border-solid border-white absolute right-0 top-[-75px]"
                >
                  <span className="block h-[3px] relative mt-[3px] before:content-[''] before:absolute before:block before:h-[3px] before:mt-[3px] before:top-3 before:inset-x-0 after:content-[''] after:absolute after:block after:h-[3px] after:mt-[3px] after:top-1 after:inset-x-0 bg-white before:bg-white after:bg-white"></span>
                </div>
                <ul
                  tabIndex={0}
                  className="menu dropdown-content absolute top-full inset-x-0 bg-[#0c1923] p-0"
                >
                  {HeaderData.Menu.map((item, i) => (
                    <li className="m-0" key={i}>
                      <Link
                        className="text-white uppercase text-sm m-0 px-[5%] py-[15px] border-b-[rgba(255,255,255,0.5)] border-b border-solid"
                        href={item.link}
                        onClick={(e) => {
                          if (item.submenu) {
                            e.preventDefault();
                            toggleSubmenu(item);
                          }
                        }}
                      >
                        {item.title}
                                {item.submenu && (
                                  <i className="fa fa-angle-down text-right"></i>
                                )}
                      </Link>
                      {item.submenu && (
                          <ul className={`p-0 m-0 before:bg-transparent menu-dropdown ${activeSubmenu === item ? 'menu-dropdown-show' : ''}`}>
                            {item.submenu.map((item, i) => (
                              <li className="m-0" key={i}>
                                <Link
                                  className="text-white uppercase text-sm m-0 px-[10%] py-[15px] border-b-[rgba(255,255,255,0.5)] border-b border-solid"
                                  href={item.link}
                                >
                                  {item.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          className="search-form-area hidden bg-[#24262df0] fixed top-0 right-0 bottom-0 left-0 overflow-auto text-center border-[1px] border-solid border-[#a0a0a0] m-0 z-[99999] before:content-[''] before:inline-block before:h-full before:align-middle before:mr-0"
          id="search-overlay"
        >
          <div className="search-form-centered bg-transparent border-none text-white p-[10px_15px] w-6/12 align-middle inline-block">
            <div id="search-box" className="relative w-full m-0">
              <i
                id="close-btn"
                className="fa fa-times fa-2x fixed top-4 right-4 hover:text-[#ff60a3] hover:cursor-pointer"
                onClick={handleSearchClose}
              ></i>
              <form className="search-form">
                <input
                  className="form-control shadow-none text-[#777777] h-20 bg-[#f8f8f8] border-none rounded-none py-5 px-[30px] block w-full"
                  required
                  placeholder="Type your text"
                  type="text"
                />
                <button
                  type="submit"
                  className="bg-[#ff60a3] absolute top-[10px] right-[10px] text-center leading-[42px] border-x-0 rounded-none cursor-pointer py-[9px] px-[50px] text-white text-[18px] uppercase font-bold transition-all duration-[0.3s] hover:bg-[#24262d]"
                >
                  <span>{HeaderData.searchbtn}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
