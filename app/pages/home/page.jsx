import Complementry from "@/components/Complementry";
import Doctor from "@/components/Doctor";
import Faqs from "@/components/Faqs";
import Feedback from "@/components/Feedback";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Process from "@/components/Process";
import Product from "@/components/Product";
import Revitalise from "@/components/Revitalise";
import SprayWork from "@/components/SprayWork";
import React from "react";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Process />
      <Complementry />
      <Revitalise />
      <Faqs />
      <Feedback />
      <SprayWork />
      <Product />
      <Doctor />
      <Footer />
    </div>
  );
};

export default Home;
