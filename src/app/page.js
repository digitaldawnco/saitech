"use client";
import React from "react";
import About from "@/components/About";
import Counter from "@/components/Counter";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Cta from "@/components/Cta";
import Testimonial from "@/components/Testimonial";
import Video from "@/components/Video";
import Blog from "@/components/Blog";
import Subscribe from "@/components/Subscribe";
import Client from "@/components/Client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Preloader from "@/components/Preloader";
import Scrolltop from "@/components/Scrolltop";

const Index = () => {
  return (
    <>
      <Preloader />
      <Header />
      <main>
        <Hero />
        <About />
        <Counter />
        <Services />
        <Client />
        <Cta/>
        <Testimonial/>
        <Subscribe/>
        <Footer />
      </main>
      <Scrolltop />
    </>
  );
};
export default Index;
