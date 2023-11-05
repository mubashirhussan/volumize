import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Signup from "@/components/Signup";
import SignupDetails from "@/components/SignupDetails";
import React from "react";

const SignupPage = () => {
  return (
    <div>
      <Navbar />
      <Signup />
      <SignupDetails />
      <Footer />
    </div>
  );
};

export default SignupPage;
