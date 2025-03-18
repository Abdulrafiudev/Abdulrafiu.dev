import React from "react";

const Experiences = () => {
  const experiences = [
    {
      id: 1,
      count: "01.",
      title: "Elitessentials.",
      position: "Full-Stack Developer",
      date: "March 2024 – Present",
      description:
        "As a Full-Stack Developer At ElitEssentials,  I work as a full-stack web developer, building and optimizing their platform using Shopify. I develop key features like dynamic product pages, a secure checkout system, and third-party payment integration. I also focus on SEO, performance optimization, and responsive design to improve user experience. My contributions helped enhance the platform’s functionality, making it more efficient for both customers and administrators.",
    },
    {
      id: 2,
      count: "02.",
      title: "Upwork",
      position: "Freelance Web Developer",
      date: "January 2025 – Present",
      description:
        "As a freelancer on Upwork, I am actively building my presence and seeking opportunities to apply my web development skills. I specialize in creating responsive and high-performance websites using technologies like React, Next.js, Node.js, and PostgreSQL.",
    },

    {
      id: 3,
      count: "03.",
      title: "CyberCharm",
      position: "Full-Stack Developer",
      date: "December 2024 – Febuary 2025",
      description:
        "At CyberCharm, a company focused on creating a new Linux distribution, I worked as a web developer, building and maintaining the landing page and other web interfaces. Using modern technologies, I designed a sleek, responsive, and user-friendly website to showcase the distro’s features.",
    },
    {
      id: 4,
      count: "04.",
      title: "Piquora",
      position: "Frontend Developer",
      date: "July 2024 – August 2024",
      description:
        "As a Frontend Developer at Piquora, I was responsible for developing the user interface of a dating platform, ensuring a seamless and engaging user experience. Using HTML, CSS and JavaScript, I built responsive and interactive UI components that enhanced usability and performance. I collaborated closely with the backend developers and designers to translate ideas into a visually appealing and functional web application. ",
    },
  ];

  return (
    <section className="experiences sticky primary-bg">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-12 col-lg-3">
            {/* Intro */}
            <div className="intro">
              <h3 className="title">Work Experiences</h3>
            </div>
          </div>

          <div className="col-12 col-lg-8">
            <div className="row items">
              {experiences.map((experience) => (
                <div key={experience.id} className="col-12 col-md-6 item">
                  <div className="content">
                    <span className="count">{experience.count}</span>
                    <h4 className="title mt-0 mb-3">{experience.title}</h4>
                    <h6 className="position my-3">{experience.position}</h6>
                    <span className="badge small">{experience.date}</span>
                    <p>{experience.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
