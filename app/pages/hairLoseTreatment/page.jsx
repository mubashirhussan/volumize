import React from "react";
import Doctor from "@/components/Doctor";
import Footer from "@/components/Footer";
import HairLossTreatment from "@/components/HairLossTreatment";
import Navbar from "@/components/Navbar";
import Revitalise from "@/components/Revitalise";

const HairLoseTreatmentPage = () => {
  return (
    <div>
      <Navbar />
      <HairLossTreatment />
      <Revitalise />
      <Doctor />
      <Footer />
    </div>
  );
};

export default HairLoseTreatmentPage;
