"use client";
import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import Scrolltop from "@/components/Scrolltop";
import Breadcrumb from "@/components/Breadcrumb";
import Testimonial from "@/components/Testimonial";

const Index = () => {
  return (
    <>
      <Preloader />
      <Header />
      <main>
        <Breadcrumb title="Testimonial" />
        <Testimonial/>
        <Footer />
      </main>
      <Scrolltop />
    </>
  );
};
export default Index;
