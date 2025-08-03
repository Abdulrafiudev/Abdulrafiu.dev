import React from "react";

const Technicalskills = () => {
  return (
    <>
      <section className="skills-section">
        <div className="container technical-skills-container">
          <h2>Technical Skills</h2>

          <div className="skills-grid">
            {/* <!-- Languages --> */}
            <div className="skill-category languages">
              <h3>Languages</h3>
              <div className="skill-tags">
                <span className="skill-tag">Python</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">C#</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">SQL</span>
              </div>
            </div>

            {/* <!-- Backend --> */}
            <div className="skill-category backend">
              <h3>Backend</h3>
              <div className="skill-tags">
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Express.js</span>
                <span className="skill-tag">Nest.js</span>
                <span className="skill-tag">Django</span>
                <span className="skill-tag">Microservices</span>
                <span className="skill-tag">REST APIs</span>
              </div>
            </div>

            {/* <!-- Frontend --> */}
            <div className="skill-category frontend">
              <h3>Frontend</h3>
              <div className="skill-tags">
                <span className="skill-tag">React</span>
                <span className="skill-tag">Next.js</span>
                <span className="skill-tag">Astro.js</span>
                <span className="skill-tag">Angular</span>
                <span className="skill-tag">HTML5 & CSS3</span>
                <span className="skill-tag">TailwindCSS</span>
                <span className="skill-tag">Sass/SCSS</span>
              </div>
            </div>

            {/* <!-- Databases --> */}
            <div className="skill-category databases">
              <h3>Databases</h3>
              <div className="skill-tags">
                <span className="skill-tag">MySQL</span>
                <span className="skill-tag">PostgreSQL</span>
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">Firebase</span>
              </div>
            </div>

            {/* <!-- DevOps & Tools --> */}
            <div className="skill-category devops">
              <h3>DevOps & Tools</h3>
              <div className="skill-tags">
                <span className="skill-tag">AWS</span>
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">CI/CD</span>
                <span className="skill-tag">Git & GitHub</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Technicalskills;
