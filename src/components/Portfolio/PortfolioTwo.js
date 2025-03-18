import React from "react";

const portfolioData = [
  {
    id: 1,
    title: "A Full-Stack E-Commerce Website Replica",
    image: "/img/amazon-clone1.png",
    categories: '["Fullstack Web Development"]',
    projectLink: "/portfolio-single",
  },
  {
    id: 2,
    title: "Engaging & Modern Dating Site Landing Page",
    image: "/img/towsheart.png",
    categories: '["Frontend Web Debelopment"]',
    projectLink: "/portfolio-single",
  },
  {
    id: 3,
    title: "A Creative & Dynamic Poem Generator Landing Page",
    image: "/img/poem-generator.png",
    categories: '["ui-ux", "Frontend Web Development"]',
    projectLink: "/portfolio-single",
  },
  {
    id: 4,
    title: "A custom made chatbot",
    image: "/img/abdulrafiu.ai-chatbot.png",
    categories: '["API Integration", "ui-ux"]',
    projectLink: "/portfolio-single",
  },
];

const categories = [
  { id: "all", label: "All" },
  { id: "Fullstack Web Development", label: "Fullstack Web Development" },
  { id: "ui-ux", label: "UI/UX" },
  { id: "Frontend Web Development", label: "Frontend Web Development" },
];

const getCategoryCount = (category) => {
  const count =
    category === "all"
      ? portfolioData.length
      : portfolioData.filter((item) =>
          JSON.parse(item.categories).includes(category)
        ).length;
  return count.toString().padStart(2, "0"); // Adds leading zero if count < 10
};

const PortfolioTwo = () => {
  return (
    <section className="works explore-area portfolio-filter pt-0">
      <div className="container p-0">
        <div className="row justify-content-center text-center">
          <div className="col-12 no-pad">
            <div
              className="btn-group filter-menu"
              role="group"
              aria-label="Basic radio toggle button group"
            >
              {categories.map(({ id, label }) => (
                <div key={id} className="input-item d-flex">
                  <div className="content">
                    <input
                      type="radio"
                      className="btn-check filter-btn"
                      name="shuffle-filter"
                      id={id}
                      defaultValue={id}
                      defaultChecked={id === "all"}
                    />
                    <label className="btn" htmlFor={id}>
                      {label}
                    </label>
                  </div>
                  <span className="count">{getCategoryCount(id)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="row filter-items items inner">
          {/* Dynamically rendering Portfolio Items */}
          {portfolioData.map((item) => (
            <div
              key={item.id}
              className="col-12 col-lg-4 item filter-item"
              data-groups={item.categories}
            >
              {/* Portfolio Item */}
              <div className="card portfolio-item layout-2 scale has-shadow">
                <div className="image-holder">
                  {/* Card Thumb */}
                  <a className="card-thumb" href={item.projectLink}>
                    <img src={item.image} alt={item.title} />
                  </a>
                </div>
                {/* Card content */}
                <div className="card-content p-2">
                  <div className="heading">
                    <h4 className="title mt-2 mt-md-3 mb-3">{item.title}</h4>
                    <div className="show-project">
                      <div className="card-terms">
                        {typeof item.categories === "string"
                          ? JSON.parse(item.categories).map(
                              (category, index) => (
                                <a
                                  key={index}
                                  className="terms badge"
                                  href="/portfolio"
                                >
                                  {category.replace("-", " ")}
                                </a>
                              )
                            )
                          : null}
                      </div>
                      <div className="project-link">
                        <a href={item.projectLink}>Show Project</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioTwo;
