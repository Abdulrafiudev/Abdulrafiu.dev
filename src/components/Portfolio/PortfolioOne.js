import React, { useState, useEffect, useRef } from "react";

const PortfolioOne = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const swiperRef = useRef(null);

  const portfolioItems = [
    {
      id: 1,
      image: "/img/propollio_4.png",
      mobileImage: "/img/propollio_mobile_1.png",
      title: "A Smart Contract to Proposal Generation Platform",
      categories: [
        {
          categoryName: "Full-stack Applications",
        },
      ],
    },
    {
      id: 2,
      image: "/img/cusorcart_2.png",
      mobileImage: "/img/cusorcart_mobile_1.png",
      title: "CursorCart - An E-commerce Platform",
      categories: [
        {
          categoryName: "E-commerce",
        },
      ],
    },
    {
      id: 3,
      image: "/img/cryptic.png",
      mobileImage: "/img/cryptic_mobile_1.png",
      title: "A Creative & Dynamic Crypto Landing Page",
      categories: [
        {
          categoryName: "Landing Pages",
        },
      ],
    },
    {
      id: 4,
      image: "/img/glacier_2.png",
      mobileImage: "/img/glacier_mobile_1.png",
      title: "Glacier Gardens Waitlist - GameFi on Sui Blockchain",
      categories: [
        {
          categoryName: "Web3",
        },
      ],
    },
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Initialize Swiper for mobile
  useEffect(() => {
    if (isMobile && typeof window !== "undefined") {
      // Load Swiper CSS
      const swiperCSS = document.createElement("link");
      swiperCSS.rel = "stylesheet";
      swiperCSS.href =
        "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css";
      document.head.appendChild(swiperCSS);

      // Load Swiper JS
      const swiperScript = document.createElement("script");
      swiperScript.src =
        "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js";
      swiperScript.onload = () => {
        if (window.Swiper && swiperRef.current) {
          new window.Swiper(swiperRef.current, {
            slidesPerView: 1,
            spaceBetween: 20,
            speed: 800,
            loop: true,
            autoplay: {
              delay: 3000,
              disableOnInteraction: false,
            },
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            effect: "slide",
          });
        }
      };
      document.body.appendChild(swiperScript);

      return () => {
        if (swiperCSS.parentNode) {
          swiperCSS.parentNode.removeChild(swiperCSS);
        }
        if (swiperScript.parentNode) {
          swiperScript.parentNode.removeChild(swiperScript);
        }
      };
    }
  }, [isMobile]);

  // Helper function to get the appropriate image
  const getImage = (item) => {
    return isMobile && item.mobileImage ? item.mobileImage : item.image;
  };

  // Desktop view
  if (!isMobile) {
    return (
      <div className="row">
        <div className="stack-wrapper">
          {portfolioItems.map((item, index) => (
            <div className="stack-item" key={index}>
              <div className="card portfolio-item layout-2 scale has-shadow">
                <div
                  className="image-holder"
                  style={{
                    background: "#f8f8f8",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <a
                    className="card-thumb"
                    href={`/project-single?id=${item.id}`}
                    style={{
                      display: "flex",
                      height: "100%",
                      width: "100%",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={getImage(item)}
                      alt={item.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        minHeight: "auto",
                        objectFit: "contain",
                      }}
                    />
                  </a>
                  <div className="card-overlay">
                    <div className="heading">
                      <h4 className="title mt-2 mt-md-3 mb-3">{item.title}</h4>
                      <div className="show-project">
                        <div className="card-terms">
                          {item.categories.map((category, idx) => (
                            <a
                              className="terms badge outlined"
                              href="/projects"
                              key={idx}
                            >
                              {category.categoryName}
                            </a>
                          ))}
                        </div>
                        <div className="project-link">
                          <a href={`/project-single?id=${item.id}`}>
                            Show Project
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
    );
  }

  // Mobile slider view with Swiper
  return (
    <div
      style={{
        width: "100%",
        padding: "0 1rem",
        marginBottom: "3rem",
      }}
    >
      <div className="swiper" ref={swiperRef}>
        <div className="swiper-wrapper">
          {portfolioItems.map((item, index) => (
            <div className="swiper-slide" key={index}>
              <div
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                style={{
                  position: "relative",
                  perspective: "1500px",
                }}
              >
                {/* Decorative Border Frame */}
                <div
                  style={{
                    position: "absolute",
                    top: "12px",
                    left: "12px",
                    right: "-12px",
                    bottom: "-12px",
                    border: "2px solid #ccc",
                    borderRadius: "18px",
                    transform: "rotate(-2deg)",
                    zIndex: 1,
                    opacity: 0.5,
                  }}
                />

                {/* Main Card */}
                <div
                  className="card portfolio-item layout-2 scale has-shadow"
                  style={{
                    position: "relative",
                    borderRadius: "18px",
                    overflow: "hidden",
                    transform: "rotate(-0.5deg)",
                    zIndex: 2,
                    border: "2px solid #e0e0e0",
                    boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                  }}
                >
                  {/* Image Section */}
                  <div
                    className="image-holder"
                    style={{
                      aspectRatio: "4/3",
                      overflow: "hidden",
                      position: "relative",
                      background: "#f8f8f8",
                    }}
                  >
                    <a
                      className="card-thumb"
                      href={`/project-single?id=${item.id}`}
                      style={{
                        display: "block",
                        height: "100%",
                        width: "100%",
                      }}
                    >
                      <img
                        src={getImage(item)}
                        alt={item.title}
                        style={{
                          width: "100%",
                          height: "100%",
                          minHeight: "auto",
                          objectFit: "cover",
                          display: "block",
                        }}
                      />
                    </a>

                    {/* Number Badge */}
                    <div
                      style={{
                        position: "absolute",
                        top: "18px",
                        right: "18px",
                        width: "45px",
                        height: "45px",
                        background: "#000",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "1.2rem",
                        fontWeight: "700",
                        color: "white",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                        zIndex: 10,
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>

                  {/* Content Section */}
                  <div
                    className="card-content"
                    style={{
                      padding: "1.5rem",
                      minHeight: "auto",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <div className="heading">
                      <h4
                        className="title mt-0 mb-3"
                        style={{
                          fontSize: "1.15rem",
                          lineHeight: "1.4",
                          fontWeight: "600",
                        }}
                      >
                        {item.title}
                      </h4>

                      <div className="show-project">
                        <div
                          className="card-terms"
                          style={{
                            display: "flex",
                            gap: "0.5rem",
                            flexWrap: "wrap",
                            marginBottom: "1rem",
                          }}
                        >
                          {item.categories.map((category, idx) => (
                            <a
                              key={idx}
                              className="terms badge"
                              href="/portfolio"
                              style={{
                                fontSize: "0.85rem",
                              }}
                            >
                              {category.categoryName}
                            </a>
                          ))}
                        </div>

                        <div className="project-link">
                          <a
                            href={`/project-single?id=${item.id}`}
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "0.5rem",
                              fontSize: "0.95rem",
                            }}
                          >
                            Show Project
                            <svg
                              width="16"
                              height="16"
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

        {/* Pagination */}
        <div
          className="swiper-pagination"
          style={{
            position: "relative",
            marginTop: "2rem",
          }}
        ></div>
      </div>

      {/* Swipe Indicator */}
      <div
        style={{
          textAlign: "center",
          color: "#6b7280",
          fontSize: "0.9rem",
          marginTop: "1rem",
        }}
      >
        ← Swipe to explore more →
      </div>
    </div>
  );
};

export default PortfolioOne;
