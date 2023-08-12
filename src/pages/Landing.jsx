import React from "react";
import phone from "../assets/phone.svg";
import ServicesCmp from "../components/Services.cmp";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Reviews from "../components/Reviews";
import Hero from "../components/Hero";
import One from "../components/One";
import Two from "../components/Two";

const Landing = () => {
  return (
    <>
      <Nav />
      <Hero />
      <ServicesCmp />
      <img className=" fixed bottom-1 right-1 scale-90 hover:cursor-pointer hover:animate-rotate transition-all duration-300" src={phone} alt="" />
      <One />
      <div className=" h-[1px] bg-gray-100 my-12"></div>
      <Two />
      <div className=" h-[1px] bg-gray-100 my-12"></div>
      <Reviews />
      <div className="w-[80%] h-4 mx-auto my-32"></div>
      <Footer />
     
    </>
  );
};

export default Landing;
