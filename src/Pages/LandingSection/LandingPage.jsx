import React from "react";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import Login from "../../Components/Login";
import Carousel from "../../Components/Carousel";
import About from "../../Components/About/About";

const LandingPage = () => {
  return (
    <>
      <div className="p-0">
        <Header />
        <div style={{ backgroundColor: "#ebe3d636" }}>
          <div className=" container p-0 py-5  ">
            <div className=" row  ">
              <Carousel />
              <Login />
            </div>
          </div>
        </div>
        <About></About>
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
