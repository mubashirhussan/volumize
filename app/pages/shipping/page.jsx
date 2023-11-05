import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Shipping from "@/components/Shipping";
import ShippingDetails from "@/components/ShippingDetails";
import React from "react";

const ShippingPage = () => {
  return (
    <div>
      <Navbar />
      <Shipping />
      <ShippingDetails />
      <Footer />
    </div>
  );
};

export default ShippingPage;
