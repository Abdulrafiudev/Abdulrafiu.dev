import React, { useState, useEffect } from "react";

const portfolioData = [
  {
    id: 1,
    title: "Propollio -A Smart Contract to Proposal Generation Platform",
    image: "/img/propollio_4.png",
    categories: ["Web Development", "Full-stack Applications"],
    projectLink: "/project-single",
    description: "",
  },
  {
    id: 2,
    title: "CursorCart - An E-commerce Platform",
    image: "/img/cusorcart_2.png",
    categories: ["Full-stack Applications", "E-commerce"],
    projectLink: "/project-single",
    description: "",
  },
  {
    id: 3,
    title: "Cryptic - A Creative & Dynamic Crypto Landing Page",
    image: "/img/cryptic.png",
    categories: ["Landing Pages", "ui-ux", "web3"],
    projectLink: "/project-single",
    description: "",
  },
  {
    id: 4,
    title: "Glacier Gardens Waitlist - GameFi on Sui Blockchain",
    image: "/img/glacier_2.png",
    categories: ["Landing Pages", "Web3"],
    projectLink: "/project-single",
    description:
      "The first Gamefi platform that gamefi's the experience of yield farming and liquidity provision on the  sui blockchain.",
  },
];

const categories = [
  { id: "all", label: "All Work" },
  { id: "Landing Pages", label: "Landing Pages" },
  { id: "Full-stack Applications", label: "Full-stack" },
  { id: "Web3", label: "Web3" },
  { id: "E-commerce", label: "E-commerce" },
];

const getCategoryCount = (category) => {
  const count =
    category === "all"
      ? portfolioData.length
      : portfolioData.filter((item) => item.categories.includes(category))
          .length;
  return count.toString().padStart(2, "0");
};

const PortfolioTwo = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="works explore-area portfolio-filter pt-0">
      <div className="container p-0">
        {/* Filter Menu */}
        <div className="row justify-content-center text-center">
          <div className="col-12 no-pad">
            <div
              className="btn-group filter-menu"
              role="group"
              style={{
                display: "flex",
                flexWrap: isMobile ? "nowrap" : "wrap",
                gap: "1rem",
                justifyContent: isMobile ? "flex-start" : "center",
                marginBottom: "4rem",
                overflowX: isMobile ? "auto" : "visible",
                overflowY: "hidden",
                paddingBottom: isMobile ? "1rem" : "0",
                scrollbarWidth: "thin",
                scrollbarColor: "#ccc transparent",
                WebkitOverflowScrolling: "touch",
                msOverflowStyle: "-ms-autohiding-scrollbar",
              }}
            >
              {categories.map(({ id, label }) => (
                <div
                  key={id}
                  className="input-item d-flex align-items-center"
                  style={{
                    gap: "0.5rem",
                    flexShrink: 0,
                  }}
                >
                  <div className="content">
                    <input
                      type="radio"
                      className="btn-check filter-btn"
                      name="shuffle-filter"
                      id={id}
                      defaultValue={id}
                      defaultChecked={id === "all"}
                      onChange={() => setActiveFilter(id)}
                      style={{ display: "none" }}
                    />
                    <label
                      className="btn"
                      htmlFor={id}
                      style={{
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {label}
                    </label>
                  </div>
                  <span className="count">{getCategoryCount(id)}</span>
                </div>
              ))}
            </div>

            {/* Scroll indicator for mobile */}
            {isMobile && (
              <div
                style={{
                  textAlign: "center",
                  color: "#999",
                  fontSize: "0.85rem",
                  marginTop: "-2.5rem",
                  marginBottom: "2rem",
                }}
              >
                ← Scroll to see more →
              </div>
            )}
          </div>
        </div>

        {/* Portfolio Grid - Tilted Cards */}
        <div className="row filter-items items inner">
          {portfolioData.map((item, index) => (
            <div
              key={item.id}
              className="col-12 col-md-6 item filter-item"
              data-groups={JSON.stringify(item.categories)}
              style={{
                marginBottom: "4rem",
                padding: "0 1rem",
              }}
            >
              <div
                className="projectImageContainer"
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                style={{
                  position: "relative",
                  height: isMobile ? "auto" : "520px",
                  perspective: "1500px",
                }}
              >
                {/* Decorative Border Frame - Hide on mobile */}
                {!isMobile && (
                  <div
                    className="border-frame"
                    style={{
                      position: "absolute",
                      top: "15px",
                      left: "15px",
                      right: "-15px",
                      bottom: "-15px",
                      border: "3px solid #ccc",
                      borderRadius: "20px",
                      transform:
                        hoveredItem === item.id
                          ? "rotate(-1deg) scale(1.02)"
                          : "rotate(-2deg)",
                      transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                      zIndex: 1,
                      opacity: 0.5,
                    }}
                  />
                )}

                {/* Main Card */}
                <div
                  className="card portfolio-item layout-2 scale has-shadow"
                  style={{
                    position: "relative",
                    height: isMobile ? "auto" : "100%",
                    borderRadius: "20px",
                    overflow: "hidden",
                    transform:
                      hoveredItem === item.id && !isMobile
                        ? "rotate(0deg) translateY(-8px)"
                        : isMobile
                        ? "rotate(0deg)"
                        : "rotate(-0.5deg)",
                    transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                    zIndex: 2,
                    border: "2px solid #e0e0e0",
                    boxShadow:
                      hoveredItem === item.id
                        ? "0 25px 50px rgba(0,0,0,0.2)"
                        : "0 15px 30px rgba(0,0,0,0.1)",
                  }}
                >
                  {/* Image Section */}
                  <div
                    className="image-holder"
                    style={{
                      height: isMobile ? "auto" : "65%",
                      aspectRatio: isMobile ? "16/10" : "auto",
                      overflow: "hidden",
                      position: "relative",
                      background: "#f8f8f8",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <a
                      className="card-thumb"
                      href={`${item.projectLink}?id=${item.id}`}
                      style={{
                        display: "block",
                        height: "100%",
                        width: "100%",
                      }}
                    >
                      <img
                        className="projectImage"
                        src={item.image}
                        alt={item.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          minHeight: "auto",
                          objectFit: "cover",
                          display: "block",
                        }}
                      />
                      {/* Hover Overlay */}
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background:
                            "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.3) 100%)",
                          opacity: hoveredItem === item.id ? 1 : 0,
                          transition: "opacity 0.4s ease",
                        }}
                      />
                    </a>

                    {/* Number Badge */}
                    <div
                      style={{
                        position: "absolute",
                        top: "20px",
                        right: "20px",
                        width: "50px",
                        height: "50px",
                        background: "#000",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.3rem",
                        fontWeight: "700",
                        color: "white",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                        transform:
                          hoveredItem === item.id && !isMobile
                            ? "rotate(360deg) scale(1.1)"
                            : "rotate(0deg)",
                        transition:
                          "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div
                    className="card-content cardContentMobile"
                    style={{
                      padding: isMobile ? "1.5rem" : "2rem",
                      height: isMobile ? "auto" : "35%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <div className="heading">
                      <h4
                        className="title mt-0 mb-3"
                        style={{
                          fontSize: isMobile ? "1.1rem" : "1.3rem",
                          lineHeight: "1.4",
                          fontWeight: "600",
                        }}
                      >
                        {item.title}
                      </h4>

                      <div className="show-project imageCardContent">
                        <div
                          className="card-terms"
                          style={{
                            display: "flex",
                            gap: "0.5rem",
                            flexWrap: "wrap",
                            marginBottom: "1.25rem",
                          }}
                        >
                          {item.categories.map((category, idx) => (
                            <a
                              key={idx}
                              className="terms badge"
                              href="/portfolio"
                            >
                              {category.replace("-", " ")}
                            </a>
                          ))}
                        </div>

                        <div className="project-link">
                          <a
                            href={`${item.projectLink}?id=${item.id}`}
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "0.5rem",
                              transition: "gap 0.3s ease",
                            }}
                            onMouseEnter={(e) =>
                              (e.currentTarget.style.gap = "0.75rem")
                            }
                            onMouseLeave={(e) =>
                              (e.currentTarget.style.gap = "0.5rem")
                            }
                          >
                            Show Project
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <line x1="5" y1="12" x2="19" y2="12"></line>
                              <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                          </a>
                        </div>
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
