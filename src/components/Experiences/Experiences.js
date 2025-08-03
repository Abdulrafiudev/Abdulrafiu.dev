const Experiences = () => {
  const experiences = [
    {
      id: 1,
      count: "01.",
      title: "Cusorcart",
      position: "Frontend Developer",
      date: "May 2025 – Present",
      description: [
        "Developed and maintained responsive web interfaces using modern frontend technologies (React.js and Next.js) toensure smooth user experiences across the e-commerce platform for vendors and customers",
        "Collaborated with cross-functional teams including backend developers and product designers to implement scalable features such as product listing modules, vendor dashboards, and real-time notifications.",
        "Optimized frontend performance and accessibility, ensuring fast page loads, mobile-first designs, and SEO-compliant structures for improved discoverability and user engagement.",
      ],
    },
    {
      id: 2,
      count: "02.",
      title: "CyberCharm",
      position: "Full-Stack Developer",
      date: "December 2024 – Febuary 2025",
      description: [
        "Engineered interactive web interfaces using modern JavaScript frameworks (such as React.js or Vue.js), delivering seamless UX for client-based and internal projects across various industries",
        "Translated UI/UX wireframes into clean, maintainable code, collaborating closely with designers and backend developers to ensure consistency and responsiveness across devices.",
        "Designed and integrated PostgreSQL/MongoDB databases, ensuring efficient data management, security, and smooth API interactions across multiple client projects.",
      ],
    },
    {
      id: 3,
      count: "03.",
      title: "Upwork",
      position: "Freelance Web Developer",
      date: "August 2023 – Present",
      description: [
        "Developed a dynamic real estate website (Niacasa) with property listings, search filters, and contact forms using Wordpress",
        "Collaborated closely with international clients to understand project goals, deliver custom solutions, and implement responsive designs across multiple platforms and screen sizes",
        "Handled full project lifecycle, including frontend/backend integration, domain setup, hosting deployment, and performance optimization to ensure reliable, high-performing web applications.",
      ],
    },

    // {
    //   id: 4,
    //   count: "04.",
    //   title: "Piquora",
    //   position: "Frontend Developer",
    //   date: "June 2024 – August 2024",
    //   description:
    //     "As a Frontend Developer at Piquora, I was responsible for developing the user interface of a dating platform, ensuring a seamless and engaging user experience. Using HTML, CSS and JavaScript, I built responsive and interactive UI components that enhanced usability and performance. I collaborated closely with the backend developers and designers to translate ideas into a visually appealing and functional web application. ",
    // },
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
                    <ul className="description-list mt-3">
                      {experience.description.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
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
