import React from "react";

const Experiences = () => {
  const experiences = [
    {
      id: 1,
      count: "01.",
      title: "Piquora",
      position: "Frontend Developer",
      date: "July 2024 – August 2024",
      description:
        "As a Frontend Developer at Piquora, I was responsible for developing the user interface of a dating platform, ensuring a seamless and engaging user experience. Using HTML, CSS and JavaScript, I built responsive and interactive UI components that enhanced usability and performance. I collaborated closely with the backend developers and designers to translate ideas into a visually appealing and functional web application. ",
    },
    {
      id: 2,
      count: "02.",
      title: "Tech Innovations Inc.",
      position: "Full-Stack Developer",
      date: "Jun 2021 – Dec 2023",
      description:
        "As a Full-Stack Developer at Tech Innovations Inc., I worked on a variety of projects that required both front-end and back-end expertise for developing web applications.",
    },
    {
      id: 3,
      count: "03.",
      title: "StartUp Solutions",
      position: "Web Developer",
      date: "Aug 2019 – May 2021",
      description:
        "At StartUp Solutions, I began my career as a Web Developer, where I focused on building and maintaining websites for small businesses. I honed my skills in HTML, CSS, JavaScript, and WordPress.",
    },
    {
      id: 4,
      count: "04.",
      title: "WebWorks Agency",
      position: "Junior Web Developer (Internship)",
      date: "Jun 2017 – Jul 2019",
      description:
        "During my internship at WebWorks Agency, I had the opportunity to work alongside experienced developers on various web design and development projects.",
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
