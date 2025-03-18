import React from "react";

const services = [
  {
    id: "01",
    title: "Web Development",
    description:
      "I build high-performance, scalable, and SEO-friendly websites using modern frameworks like Next.js and Angular. Whether it's a business site, e-commerce platform, or custom web app, I ensure seamless functionality, responsive design, and an exceptional user experience.",
  },
  {
    id: "02",
    title: "UI/UX Design",
    description:
      "Crafting visually stunning and user-friendly interfaces to enhance user experience. I focus on intuitive navigation, modern aesthetics, and responsive designs that ensure seamless interactions across all devices. My approach combines creativity with usability to create engaging digital experiences that captivate and convert.",
  },
  {
    id: "03",
    title: "Web Consultation",
    description:
      "With deep expertise in front-end and back-end technologies, I provide strategic guidance to help businesses optimize their online presence. From improving website speed and SEO to choosing the right tech stack, I offer insights that drive efficiency and growth.",
  },
];

const Services = () => {
  return (
    <div className="row service-wrapper items mt-md-6">
      <h2> Services Offered:</h2>
      {services.map((service, index) => (
        <div key={index} className="col-12 col-md-6 col-lg-4">
          <div className="item d-flex align-items-start">
            <div className="item-count">{service.id}</div>
            <div className="content">
              <h4 className="mt-0">{service.title}</h4>
              <p>{service.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
