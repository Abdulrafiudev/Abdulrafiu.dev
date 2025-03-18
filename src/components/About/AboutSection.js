import React from "react";
import About from "./AboutOne";
import Services from "../Services/Services";
import Clients from "../Clients/Clients";
import Testimonial from "../Testimonial/Testimonial";

const AboutSection = () => {
  return (
    <section className="services">
      <div className="container">
        {/* About Component */}
        <About />

        {/* Services Component */}
        <Services />

        {/* Clients Component */}
        <Clients />
      </div>
    </section>
  );
};

export default AboutSection;
