import React from "react";
import MagneticButton from "../Miscellaneous/MagneticButton";

const CTAOne = () => {
  const ctaData = {
    title: "Let's Build Something Powerful",
    highlight: "Together",
    button: {
      text: "Let's Talk",
      link: "/contact",
    },
    socials: [
      {
        name: "Github",
        icon: "bi-github",
        link: "https://github.com/Abdulrafiudev",
      },
      {
        name: "Linkedin",
        icon: "bi-linkedin",
        link: "https://www.linkedin.com/in/abdulrafiu-ibrahim-176621343/",
      },
      {
        name: "Twitter",
        icon: "bi-twitter-x",
        link: "https://x.com/Abdulrafiu_dev",
      },
      {
        name: "Gmail",
        icon: "bi-envelope",
        link: "mailto:abdulrafiu.dev@gmail.com",
      },
      {
        name: "Whatsapp",
        icon: "bi-whatsapp",
        link: "https://wa.me/2348147493495",
      },
    ],
  };

  return (
    <section className="cta border-top border-light-subtle">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-12 col-md-10 col-lg-7">
            <h2 className="title mb-0 mb-md-2">{ctaData.title}</h2>
            <div className="cta-text">
              <span className="line-item">{ctaData.highlight}</span>
              <span className="line"></span>
              <MagneticButton href={ctaData.button?.link}>
                {ctaData.button?.text}
              </MagneticButton>
            </div>
            {/* Socials */}
            <div className="socials mt-5">
              <nav className="nav justify-content-center">
                {ctaData.socials?.length > 0 ? (
                  ctaData.socials.map((social, index) => (
                    <a
                      key={index}
                      className="nav-link swap-icon"
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                    >
                      <i className={`icon bi ${social.icon}`}></i>
                    </a>
                  ))
                ) : (
                  <p>No social links available.</p>
                )}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAOne;
