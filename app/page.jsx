'use client'
import React from "react";
import HeaderSlider from "../components/HeaderSlider";
import ProductCategories from "../components/ProductCategories";
import HomeProducts from "../components/HomeProducts";
import Banner from "../components/Banner";
import NewsLetter from "../components/NewsLetter";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="px-6 md:px-20 lg:px-40 bg-gradient-to-r from-indigo-50 via-white to-indigo-50">
        <HeaderSlider />
        <div className="my-12 text-center">
          <h2 className="text-5xl font-extrabold text-indigo-900 mb-6 tracking-wide">Welcome to QuickKart</h2>
          <p className="text-xl text-gray-700 mb-4 max-w-3xl mx-auto">
            Your One-Stop Shop for Everything! Find the best products at unbeatable prices. Fast delivery and excellent customer service.
          </p>
        </div>
        <ProductCategories />
        <HomeProducts />
        <Banner />
        <NewsLetter />
      </div>
      <Footer />
    </>
  );
};

export default Home;
