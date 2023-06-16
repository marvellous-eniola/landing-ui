import React from "react";
import Navbar from "./Components/Navbar";
import Services from "./Components/Services";
import SignUp from "./Components/SignUp";
import Listing from "./Components/Listing";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <Services />
      <SignUp />
      <Listing />
      <Footer />
    </div>
  );
}
