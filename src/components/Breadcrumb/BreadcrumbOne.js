import React from "react";

const BreadcrumbOne = () => {
  const breadcrumbContent = {
    title: "Fullstack",
    subtitle:
      "I’m Abdulrafiu Ibrahim, a skilled full-stack web developer with expertise in frontend development using Next.js, Angular, and JavaScript, creating responsive, high-performance, and SEO-friendly user interfaces. On the backend, I specialize in Node.js, Express and Nestjs, building scalable, secure, and efficient server-side applications with seamless API integrations. For database management, I work with PostgreSQL and Mongoose, ensuring optimized, reliable, and high-performing database solutions. With a strong focus on clean code, maintainability, and user experience, I’m dedicated to delivering top-tier digital solutions that drive results. Let’s build something great together! 🚀",
    imageSrc: "/img/developerImage2.jpg",
    subheading: "Web Developer.",
  };

  return (
    <section id="home" className="breadcrumb-section">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-12">
            <div className="content d-flex flex-column justify-content-between">
              <div className="heading w-60">
                <h1 className="title">
                  {breadcrumbContent.title}{" "}
                  <img src={breadcrumbContent.imageSrc} alt="Photographer" />
                </h1>
                <div className="flex ms-auto">
                  <span className="line animate-line my-3 my-md-0"></span>
                  <h1 className="title">{breadcrumbContent.subheading}</h1>
                </div>
              </div>
              <p className="sub-title w-50 mt-4 ms-auto">
                {breadcrumbContent.subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreadcrumbOne;
