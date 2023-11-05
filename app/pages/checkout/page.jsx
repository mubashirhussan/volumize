import Checkout from "@/components/Checkout";
import CheckoutDetails from "@/components/CheckoutDetails";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const CheckoutPage = () => {
  return (
    <div>
      <Navbar />
      <Checkout />
      <CheckoutDetails />
      <Footer />
    </div>
  );
};

export default CheckoutPage;
