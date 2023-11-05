import Confirmation from "@/components/Confirmation";
import ConfirmationDetails from "@/components/ConfirmationDetails";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const ConfirmationPage = () => {
  return (
    <div>
      <Navbar />
      <Confirmation />
      <ConfirmationDetails />
      <Footer />
    </div>
  );
};

export default ConfirmationPage;
