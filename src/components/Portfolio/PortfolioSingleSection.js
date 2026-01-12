import React, { useState } from "react";

const PortfolioSingleSection = () => {
  const [hoveredImage, setHoveredImage] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState("");

  const portfolios = [
    {
      id: 1,
      title: "Propollio -A Smart Contract to Proposal Generation Platform",
      description:
        "Propollio is a full-stack web platform built to simplify how freelancers and agencies manage client work — from proposals to contracts to payments — within a single, automated workflow. The platform enables users to send beautifully structured proposals with clear milestones and deliverables, automatically generate legally structured contracts upon acceptance, and activate contracts instantly through integrated online payments. ",
      categories: [
        "Full-Stack Applications",
        "SaaS",
        "Web Development",
        "ui-ux",
      ],
      task: "The task of the project was to design and implement an end-to-end automation platform that streamlines proposal creation, contract generation, and payment processing for freelancers and agencies. The focus was on building a clean, intuitive user experience, implementing secure payment flows, automating document generation, and providing actionable insights through analytics and real-time notifications. 🚀",
      role: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Node.js",
        "Express.js",
        "API Integration",
        "Payment Integration",
      ],
      liveSite: "https://www.propollio.xyz/",
      client: "Personal (Startup Project)",
      gallery: [
        "/img/propollio_4.png",
        "/img/propollio_4.png",
        "/img/propollio_7.png",
      ],
    },
    {
      id: 2,
      title: "CursorCart - An E-commerce Platform",
      description:
        "CursorCart is a full-stack e-commerce platform designed to deliver a fast, intuitive, and scalable online shopping experience for both customers and store owners. The platform features dynamic product listings, a smooth shopping cart flow, and a streamlined checkout process optimized for performance and usability. With a clean, modern interface and responsive design, CursorCart ensures seamless browsing across devices while providing a solid foundation for managing products, orders, and customer interactions. This project demonstrates strong expertise in frontend performance, backend integration, and building production-ready e-commerce solutions.",
      categories: [
        "Full-Stack Applications",
        "E-Commerce",
        "Web Development",
        "ui-ux",
      ],
      task: "The task of the project was to build a modern e-commerce platform with dynamic product management, cart functionality, and a responsive checkout flow. Emphasis was placed on performance optimization, clean UI/UX, secure data handling, and creating a scalable architecture capable of supporting real-world online stores.",
      role: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Laravel",
        "API Integration",
      ],
      liveSite: "https://cusorcart.com/",
      client: "Client Owned",
      gallery: ["/img/cusorcart_2.png"],
    },
    {
      id: 3,
      title: "Cryptic - A Creative & Dynamic Crypto Landing Page",
      description:
        "Cryptic is a modern, visually engaging crypto management landing page designed to captivate users and effectively communicate complex blockchain concepts. The landing page features a sleek, responsive design with smooth animations and a clear information hierarchy, ensuring an intuitive user experience across all devices. With strong call-to-action placements and visually appealing graphics, Cryptic aims to drive user engagement and conversions in the competitive crypto space.",
      categories: ["Landing Pages", "ui-ux", "web3"],
      task: "The task of the project was to design and develop a creative, high-conversion crypto landing page that clearly communicates complex blockchain concepts in a simple and visually appealing manner. The focus was on responsive design, smooth animations, clear information hierarchy, and strong call-to-action placement to drive user engagement.",
      role: [
        "Next.js",
        "Tailwind CSS",
        "Responsive Design",
        "UI/UX Design",
        "Animation",
      ],
      liveSite: "https://crypto-landing-page-flame.vercel.app/",
      client: "Personal",
      gallery: ["/img/cryptic.png"],
    },
    {
      id: 4,
      title: "Glacier Gardens Waitlist - GameFi on Sui Blockchain",
      description:
        "Glacier Gardens is a GameFi-focused Web3 platform built on the Sui Network, designed to gamify the experience of yield farming and liquidity provision. The waitlist landing page introduces users to a new way of interacting with DeFi by blending financial mechanics with engaging, game-inspired experiences. Featuring a visually immersive interface, clear value propositions, and seamless onboarding, the waitlist page is optimized to capture early adopters while communicating the platform’s innovative approach to decentralized finance. This project highlights expertise in Web3 product design, conversion-focused landing pages, and user engagement strategies. ",
      categories: ["Web3", "GameFi", "Landing Pages", "Crypto", "ui-ux"],
      task: "The task of the project was to design and develop a high-conversion waitlist landing page for a GameFi platform on the Sui Network. The focus was on  building trust with early users, optimizing signup flows, and creating an engaging visual experience that appeals to both gamers and crypto-native audiences.",
      role: [
        "HTML",
        "CSS",
        "JavaScript",
        "Landing Page Development",
        "UI/UX Design",
        "Web3 Product Design",
      ],
      liveSite: "https://glaciergardens.pro/",
      client: "Client Owned",
      gallery: ["/img/glacier_2.png"],
    },
  ];

  // Get portfolio id from url
  const urlParams = new URLSearchParams(window.location.search);
  const portfolioId = parseInt(urlParams.get("id"));

  // Get correct portfolio
  const portfolio = portfolios.find((p) => {
    return p.id === portfolioId;
  });

  if (!portfolio) {
    return <p>Loading...</p>;
  }

  const openLightbox = (image) => {
    setLightboxImage(image);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxImage("");
  };

  // Dynamic layout patterns based on gallery length
  const getGalleryLayout = () => {
    const length = portfolio.gallery.length;

    if (length === 1) {
      return portfolio.gallery.map((img, index) => (
        <div
          key={index}
          style={{
            gridColumn: "1 / -1",
            position: "relative",
            overflow: "hidden",
            borderRadius: "24px",
            aspectRatio: "16/9",
            cursor: "pointer",
          }}
          onMouseEnter={() => setHoveredImage(index)}
          onMouseLeave={() => setHoveredImage(null)}
          onClick={() => openLightbox(img)}
        >
          <div
            style={{
              position: "absolute",
              top: "-20px",
              left: "-20px",
              right: "-20px",
              bottom: "-20px",
              border: "3px solid #e0e0e0",
              borderRadius: "28px",
              transform:
                hoveredImage === index
                  ? "rotate(2deg) scale(1.02)"
                  : "rotate(-3deg)",
              transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
              zIndex: 0,
              opacity: 0.6,
            }}
          />
          <img
            src={img}
            alt={`Gallery ${index + 1}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transform:
                hoveredImage === index
                  ? "scale(1.05) rotate(0deg)"
                  : "scale(1) rotate(-1deg)",
              transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
              filter:
                hoveredImage === index ? "brightness(1.05)" : "brightness(1)",
              position: "relative",
              zIndex: 1,
              border: "2px solid #e5e7eb",
              borderRadius: "24px",
              boxShadow:
                hoveredImage === index
                  ? "0 20px 40px rgba(0, 0, 0, 0.15)"
                  : "0 10px 25px rgba(0, 0, 0, 0.08)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "24px",
              right: "24px",
              background: "rgba(0, 0, 0, 0.75)",
              backdropFilter: "blur(10px)",
              color: "white",
              padding: "12px 20px",
              borderRadius: "50px",
              fontSize: "0.9rem",
              fontWeight: "600",
              opacity: hoveredImage === index ? 1 : 0,
              transform:
                hoveredImage === index ? "translateY(0)" : "translateY(-10px)",
              transition: "all 0.4s ease",
              zIndex: 2,
            }}
          >
            Click to expand
          </div>
        </div>
      ));
    }

    if (length === 2) {
      return portfolio.gallery.map((img, index) => (
        <div
          key={index}
          style={{
            gridColumn: index === 0 ? "span 7" : "span 5",
            position: "relative",
            overflow: "hidden",
            borderRadius: "24px",
            aspectRatio: index === 0 ? "3/2" : "4/3",
            cursor: "pointer",
          }}
          onMouseEnter={() => setHoveredImage(index)}
          onMouseLeave={() => setHoveredImage(null)}
          onClick={() => openLightbox(img)}
        >
          <div
            style={{
              position: "absolute",
              top: index === 0 ? "-18px" : "-15px",
              left: index === 0 ? "-18px" : "-15px",
              right: index === 0 ? "-18px" : "-15px",
              bottom: index === 0 ? "-18px" : "-15px",
              border: "3px solid #ccc",
              borderRadius: "28px",
              transform:
                hoveredImage === index
                  ? "rotate(1deg) scale(1.02)"
                  : index === 0
                  ? "rotate(-2deg)"
                  : "rotate(3deg)",
              transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
              zIndex: 0,
              opacity: 0.5,
            }}
          />
          <img
            src={img}
            alt={`Gallery ${index + 1}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transform:
                hoveredImage === index
                  ? "scale(1.08) rotate(0deg)"
                  : index === 0
                  ? "scale(1) rotate(-0.5deg)"
                  : "scale(1) rotate(1deg)",
              transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
              filter:
                hoveredImage === index ? "brightness(1.05)" : "brightness(1)",
              position: "relative",
              zIndex: 1,
              border: "2px solid #e5e7eb",
              borderRadius: "24px",
              boxShadow:
                hoveredImage === index
                  ? "0 20px 40px rgba(0, 0, 0, 0.15)"
                  : "0 10px 25px rgba(0, 0, 0, 0.08)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "20px",
              left: "20px",
              background: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(10px)",
              color: "#030712",
              padding: "10px 18px",
              borderRadius: "50px",
              fontSize: "0.85rem",
              fontWeight: "600",
              opacity: hoveredImage === index ? 1 : 0,
              transform:
                hoveredImage === index ? "translateY(0)" : "translateY(10px)",
              transition: "all 0.4s ease",
              zIndex: 2,
            }}
          >
            View {index + 1} of {length}
          </div>
        </div>
      ));
    }

    // 3+ images - creative masonry layout
    return portfolio.gallery.map((img, index) => {
      const patterns = [
        { column: "span 7", aspect: "16/10", rotate: "-2deg" },
        { column: "span 5", aspect: "1/1", rotate: "2deg" },
        { column: "span 5", aspect: "4/3", rotate: "1deg" },
        { column: "span 7", aspect: "3/2", rotate: "-1deg" },
        { column: "span 6", aspect: "16/9", rotate: "2deg" },
        { column: "span 6", aspect: "4/3", rotate: "-1deg" },
      ];

      const pattern = patterns[index % patterns.length];

      return (
        <div
          key={index}
          style={{
            gridColumn: pattern.column,
            position: "relative",
            overflow: "hidden",
            borderRadius: "20px",
            aspectRatio: pattern.aspect,
            cursor: "pointer",
          }}
          onMouseEnter={() => setHoveredImage(index)}
          onMouseLeave={() => setHoveredImage(null)}
          onClick={() => openLightbox(img)}
        >
          <div
            style={{
              position: "absolute",
              top: "-14px",
              left: "-14px",
              right: "-14px",
              bottom: "-14px",
              border: "2px solid #d1d5db",
              borderRadius: "24px",
              transform:
                hoveredImage === index
                  ? "rotate(0deg) scale(1.03)"
                  : `rotate(${pattern.rotate})`,
              transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
              zIndex: 0,
              opacity: 0.5,
            }}
          />
          <img
            src={img}
            alt={`Gallery ${index + 1}`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transform:
                hoveredImage === index
                  ? "scale(1.1) rotate(0deg)"
                  : `scale(1) rotate(calc(${pattern.rotate} / 2))`,
              transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
              filter:
                hoveredImage === index
                  ? "brightness(1.05) saturate(1.1)"
                  : "brightness(1)",
              position: "relative",
              zIndex: 1,
              border: "2px solid #e5e7eb",
              borderRadius: "20px",
              boxShadow:
                hoveredImage === index
                  ? "0 20px 40px rgba(0, 0, 0, 0.15)"
                  : "0 10px 25px rgba(0, 0, 0, 0.08)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "16px",
              left: "16px",
              background: "rgba(0, 0, 0, 0.8)",
              backdropFilter: "blur(8px)",
              color: "white",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "0.9rem",
              fontWeight: "700",
              opacity: hoveredImage === index ? 1 : 0.7,
              transform:
                hoveredImage === index
                  ? "scale(1.15) rotate(360deg)"
                  : "scale(1) rotate(0deg)",
              transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
              zIndex: 2,
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </div>
        </div>
      );
    });
  };

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
              <h2 className="singlePortfolioTitle">{portfolio.title}</h2>
              <p className="descriptionJustify">{portfolio.description}</p>
            </div>
          </div>
          <div className="col-12 col-lg-6 items portfolio-meta mt-3 mt-md-0">
            <div className="task">
              <h6 className="title mb-3">Task</h6>
              <p className="details taskJustify">{portfolio.task}</p>
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

        {/* Creative Gallery Section */}
        <div className="row portfolio-content" style={{ marginTop: "5rem" }}>
          <div className="col-12">
            <div
              style={{
                marginBottom: "2rem",
                textAlign: "center",
              }}
            >
              <h3
                style={{
                  fontSize: "2rem",
                  fontWeight: "600",
                  marginBottom: "0.5rem",
                }}
              >
                Project Gallery
              </h3>
              <p style={{ color: "#6b7280", fontSize: "1.1rem" }}>
                Click any image to view full size
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(12, 1fr)",
                gap: "24px",
                marginTop: "3rem",
              }}
            >
              {getGalleryLayout()}
            </div>
          </div>
        </div>

        {/* Lightbox */}
        {lightboxOpen && (
          <div
            onClick={closeLightbox}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "rgba(0, 0, 0, 0.95)",
              backdropFilter: "blur(10px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 9999,
              padding: "20px",
              animation: "fadeIn 0.3s ease",
            }}
          >
            <button
              onClick={closeLightbox}
              style={{
                position: "absolute",
                top: "30px",
                right: "30px",
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                border: "2px solid rgba(255, 255, 255, 0.2)",
                color: "white",
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                fontSize: "1.5rem",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.3s ease",
                zIndex: 10000,
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "rgba(255, 255, 255, 0.2)";
                e.target.style.transform = "scale(1.1) rotate(90deg)";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "rgba(255, 255, 255, 0.1)";
                e.target.style.transform = "scale(1) rotate(0deg)";
              }}
            >
              ×
            </button>
            <img
              src={lightboxImage}
              alt="Gallery fullsize"
              style={{
                maxWidth: "90%",
                maxHeight: "90%",
                objectFit: "contain",
                borderRadius: "12px",
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.5)",
              }}
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @media (max-width: 768px) {
          .portfolio-content > div > div {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          .portfolio-content > div > div > div {
            grid-column: 1 / -1 !important;
            aspect-ratio: 16/10 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default PortfolioSingleSection;
