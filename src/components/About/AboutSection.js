import About from "./AboutOne";
import Services from "../Services/Services";

const AboutSection = () => {
  return (
    <section className="services">
      <div className="container">
        {/* About Component */}
        <About />

        {/* Services Component */}
        <Services />
      </div>
    </section>
  );
};

export default AboutSection;
