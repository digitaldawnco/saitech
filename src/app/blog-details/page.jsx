"use client";
import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import Scrolltop from "@/components/Scrolltop";
import Breadcrumb from "@/components/Breadcrumb";
import Bloglist from "@/components/Bloglist";
import Blogdetails from "@/components/Blogdetails";

const Index = () => {
  return (
    <>
      <Preloader />
      <Header />
      <main>
        <Breadcrumb title="blog details" />
        <Blogdetails/>
        <Footer />
      </main>
      <Scrolltop />
    </>
  );
};
export default Index;
