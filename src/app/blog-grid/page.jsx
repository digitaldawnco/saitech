"use client";
import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import Scrolltop from "@/components/Scrolltop";
import Breadcrumb from "@/components/Breadcrumb";
import Bloggrid from "@/components/Bloggrid";

const Index = () => {
  return (
    <>
      <Preloader />
      <Header />
      <main>
        <Breadcrumb title="blog grid" />
        <Bloggrid/>
        <Footer />
      </main>
      <Scrolltop />
    </>
  );
};
export default Index;
