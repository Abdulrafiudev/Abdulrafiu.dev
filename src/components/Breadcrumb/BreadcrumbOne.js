import React from "react";

const BreadcrumbOne = () => {
  const breadcrumbContent = {
    title: "Fullstack",
    subtitle:
      "I’m Abdulrafiu Ibrahim,a passionate and detail-oriented full-stack web developer with expertise in modern technologies like React, Angular, Next.js, Node.js, and PostgreSQL. I specialize in building high-performance, scalable web applications with a strong focus on user experience, responsiveness, and maintainability. From front-end interactivity to back-end optimization, I ensure that every project is crafted with clean, efficient, and well-structured code.",
    subtitle2:
      "Beyond technical skills, I enjoy problem-solving and optimizing workflows to enhance efficiency. I have worked on diverse projects, including e-commerce platforms, booking systems, and investment portals, ensuring seamless functionality and security. My ability to meet deadlines while maintaining high-quality standards makes me a reliable developer for any project.",
    subtitle3:
      "I stay up to date with the latest industry trends to implement innovative and future-proof solutions. Whether working independently or in a team, I strive to transform ideas into impactful digital experiences that drive engagement and business success.",
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
              <p className="sub-title w-100 mt-4 ms-auto">
                {breadcrumbContent.subtitle}
              </p>
              <p className="sub-title w-100 mt-4 ms-auto">
                {breadcrumbContent.subtitle2}
              </p>
              <p className="sub-title w-100 mt-4 ms-auto">
                {breadcrumbContent.subtitle3}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreadcrumbOne;
