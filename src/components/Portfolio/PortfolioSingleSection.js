import React, { useEffect, useState } from "react";
import axios from "axios";

const PortfolioSingleSection = () => {
  // const [portfolio, setPortfolio] = useState(null);
  const portfolios = [
    {
      id: 1,
      title: "A Full-Stack E-Commerce Website Replica",
      description:
        "This Amazon clone is a fully responsive e-commerce web application featuring dynamic product listings, a shopping cart system, and a seamless checkout process. It allows users to browse products with images, descriptions, and prices, add items to their cart, and proceed to checkout. The design is optimized for both mobile and desktop, ensuring a smooth user experience. This project highlights your expertise in frontend development, state management, and API integration. 🚀",
      categories: ["Web Development", "ui-ux"],
      task: "The task of the project was to replicate key Amazon features, including dynamic product listings, a shopping cart, and a responsive checkout process, focusing on smooth navigation, API integration, and an optimized user experience across devices. 🚀",
      role: ["HTML", "CSS", "Javascript", "Axios", "Node.js", "Express.js"],
      liveSite: "https://amazon-clone-7o25.onrender.com",
      client: "Personal",
      gallery: [
        "/img/amazon-clone1.png",
        "/img/amazon-clone2.png",
        "/img/amazon-clone3.png",
      ],
    },
    {
      id: 2,
      title: "Engaging & Modern Dating Site Landing Page",
      description:
        "This landing page for my client's dating web app is a visually appealing and engaging platform designed to attract users and encourage sign-ups. It features a modern, responsive design with eye-catching graphics, and a smooth user experience.This project showcases your expertise in UI/UX design, responsiveness, and conversion-focused development. 🚀",
      categories: ["Web Development", "ui-ux"],
      task: "The task of the project was to design and develop a captivating landing page for a dating web app, focusing on user engagement, responsiveness, and conversion optimization. It highlights key app features, encourages sign-ups, and ensures a smooth user experience across devices. 🚀",
      role: ["HTML", "CSS", "Javascript", "Framer Motion"],
      liveSite: "https://abdulrafiudev.github.io/tows-heart-html/",
      client: "Client Owned",
      gallery: ["/img/towsheart.png"],
    },
    {
      id: 3,
      title: "A Creative & Dynamic Poem Generator Landing Page",
      description:
        "The landing page for the Poem generator web app is a clean, user-friendly interface designed to showcase the app’s functionality and attract users. It features a modern, responsive design with clear call-to-action buttons, a concise explanation of how the generator works, and an intuitive layout for easy navigation. This project highlights my expertise in UI/UX design, responsiveness, and performance optimization. 🚀",
      categories: ["Web Development", "ui-ux"],
      task: "The task of the project was to design and develop a responsive landing page for a poem generator web app, focusing on clear functionality, user engagement, and seamless navigation to ensure a smooth experience across all devices. 🚀",
      role: ["Next.js", "Tailwind CSS", "Material UI"],
      liveSite: "https://poem-generator-front-end.vercel.app/",
      client: "Client Owned",
      gallery: [
        "/img/poem-generator.png",
        "/img/poem-generator2.png",
        "/img/poem-generator3.png",
      ],
    },
    {
      id: 4,
      title: "A custom made chatbot",
      description:
        "This AI-powered chatbot leverages the Gemini API to generate intelligent responses while ensuring a seamless user experience. To enhance functionality, I integrated Local Storage persistence, allowing chat history to remain even after a page reload. With a smooth and interactive UI, this chatbot provides a reliable and engaging conversation flow, making AI interactions more intuitive and efficient. 🚀",
      categories: ["API Integration", "ui-ux"],
      task: "The task of the project was to develop a custom chatbot with intelligent response handling, real-time interaction, and a user-friendly interface, enhancing automation and improving user engagement. 🚀",
      role: ["React.js", "Css"],
      liveSite: "https://chat-bot-ten-ebon.vercel.app/",
      client: "Personal",
      gallery: ["/img/abdulrafiu.ai-chatbot.png"],
    },
  ];

  // Get portfolio id from url
  const urlParams = new URLSearchParams(window.location.search);
  console.log("url param:", urlParams);
  const portfolioId = parseInt(urlParams.get("id"));
  console.log("portfolio id:", portfolioId);

  // Get correct portfolio
  const portfolio = portfolios.find((p) => {
    return p.id === portfolioId;
  });

  console.log(portfolio);
  if (!portfolio) {
    return <p>Loading...</p>;
  }

  return (
    <section className="content">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-12 col-lg-5">
            <div className="heading">
              <div className="portfolio-meta d-flex align-items-center">
                <div className="portfolio-terms">
                  {portfolio.categories.map((category, index) => (
                    <a key={index} className="terms" href="/projects">
                      {category}
                    </a>
                  ))}
                </div>
              </div>
              <h2>{portfolio.title}</h2>
              <p>{portfolio.description}</p>
            </div>
          </div>
          <div className="col-12 col-lg-6 items portfolio-meta mt-3 mt-md-0">
            <div className="task">
              <h6 className="title mb-3">Task</h6>
              <span className="details">{portfolio.task}</span>
            </div>
            <div className="content item d-flex flex-column flex-md-row justify-content-between">
              <div className="role">
                <h6 className="title mt-0 mb-1 mb-md-3">Technologies used:</h6>
                <div className="portfolio-terms technologies">
                  {portfolio.role.map((role, index) => (
                    <a key={index} className="terms" href="/portfolio">
                      {role}
                    </a>
                  ))}
                </div>
              </div>
              <div className="client my-3 my-md-0">
                <h6 className="title mt-0 mb-1 mb-md-3">Project Type</h6>
                <span>{portfolio.client}</span>
              </div>
            </div>
            <div className="socials item">
              <a
                className="nav-link d-inline-flex swap-icon ms-0"
                href={portfolio.liveSite}
                target="_blank"
              >
                Live Site <i className="icon bi bi-arrow-right-short"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row portfolio-content items">
          <div className="col-12">
            {/* Directly render the images from the gallery without animation */}
            {portfolio.gallery.map((img, index) => (
              <div key={index} className="item item1">
                <img src={img} alt={`Gallery ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSingleSection;
