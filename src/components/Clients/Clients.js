import React from "react";

const clientLogos = [
  "/img/html-icon.svg",
  "/img/css-icon.svg",
  "/img/javascript-icon.svg",
  "/img/tailwind-css-icon.svg",
  "/img/react-js-icon.svg",
  "/img/nextjs-icon.svg",
  "/img/angular-icon.svg",
  "/img/node-js-icon.svg",
  "/img/express-js-icon.svg",
  "/img/nest-js-icon.svg",
  "/img/postgresql-icon.svg",
  "/img/mongodb-icon.svg",
  "/img/git-icon.svg",
];

const Clients = () => {
  return (
    <div className="marquee mt-md-7">
      <h2>Technologies:</h2>
      <ul className="list-unstyled mt-md-5">
        {clientLogos.map((logo, index) => (
          <li key={index} className="item">
            <a href="/about" className="marquee-item rounded">
              <div className="marquee-content">
                <img src={logo} alt={`Brand ${index + 1}`} />
              </div>
            </a>
          </li>
        ))}
        {/* Duplicate items for seamless marquee effect */}
        {clientLogos.map((logo, index) => (
          <li key={`duplicate-${index}`} className="item">
            <a href="/about" className="marquee-item rounded">
              <div className="marquee-content">
                <img src={logo} alt={`Brand ${index + 1}`} />
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Clients;
