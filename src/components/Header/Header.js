import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { menuItems } from "./menuConfig";
import resume from "../../resume.pdf";

const Header = () => {
  const location = useLocation();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = (e) => {
    e.preventDefault();
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const body = document.body;
    if (isDarkMode) {
      body.classList.add("odd");
    } else {
      body.classList.remove("odd");
    }
  }, [isDarkMode]);

  return (
    <header id="header">
      <nav className="navbar navbar-expand">
        <div className="container header">
          {/* Navbar Brand with Avatar */}
          <div className="magnetic d-flex align-items-center">
            <div
              className="avatar-wrapper me-3"
              style={{
                width: "45px",
                height: "45px",
                borderRadius: "50%",
                overflow: "hidden",
                border: "2px solid #ccc",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0 6px 12px rgba(0, 0, 0, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 4px 8px rgba(0, 0, 0, 0.1)";
              }}
            >
              <a href="/">
                <img
                  src="/img/passport2.jpg"
                  alt="Abdulrafiu Ibrahim"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </a>
            </div>
            <a className="navbar-brand" href="/">
              Abdulrafiu.dev
            </a>
          </div>

          <div className="ms-auto"></div>

          {/* Navbar Nav */}
          <ul className="navbar-nav items d-none d-md-block">
            {menuItems.map((item, index) => (
              <li className="nav-item" key={index}>
                <a
                  href={item.href}
                  className={`nav-link ${
                    location.pathname === item.href ? "active" : ""
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* <a href={resume} download="resume.pdf" className="resumebtn">
            Resume <i className="fas fa-download me-2"></i>
          </a> */}

          {/* <ul className="navbar-nav icons d-flex align-items-center">
            <li className="nav-item">
              <a
                href="#"
                className="nav-link"
                onClick={toggleDarkMode}
                aria-label={
                  isDarkMode ? "Change to light theme" : "Change to dark theme"
                }
              >
                <span className="icon material-symbols-outlined">
                  {isDarkMode ? "light_mode" : "dark_mode"}
                </span>
              </a>
            </li>
          </ul> */}

          {/* Navbar Toggler */}
          <div
            className="navbar-toggler scrolled"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
          >
            <div className="navbar-header">
              <div className="content">
                <div className="toggler-icon"></div>
                <span className="title">Menu</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div id="navbar-main" className="main"></div>
    </header>
  );
};

export default Header;
