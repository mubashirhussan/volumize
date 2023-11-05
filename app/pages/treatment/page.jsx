import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Treatment from "@/components/Treatment";
// import TreatmentDetails from "@/components/TreatmentDetails";
import TreatmentPlan from "@/components/TreatmentPlan";
import React from "react";

const TreatmentPage = () => {
  return (
    <div>
      <Navbar />
      <Treatment />
      <TreatmentPlan />
      {/* <TreatmentDetails /> */}
      <Footer />
    </div>
  );
};

export default TreatmentPage;
