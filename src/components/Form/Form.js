import React, { useState } from "react";
import MagneticButton from "../Miscellaneous/MagneticButton";

const Form = () => {
  const contactInfo = {
    title: "Schedule a call with me to see if I can help",
    description:
      "Whether you’re looking to start a new project or simply want to chat, feel free to reach out to me!",
    phone: "+2349059428606",
    phone2: "+2348147493495",
    email: "abdulrafiu.dev@gmail.com",
    address: "F.C.T Abuja, Nigeria.",
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="contact-area primary-bg">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-12 col-lg-4 order-last order-md-first">
            <div className="contact-info">
              <h3>{contactInfo.title}</h3>
              <p>{contactInfo.description}</p>

              <div className="content contact-form">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <i className="icon icon-phone"></i>
                    <a className="content" href={`tel:${contactInfo.phone}`}>
                      {contactInfo.phone}
                    </a>
                  </li>
                  <li className="list-group-item">
                    <i className="icon icon-phone"></i>
                    <a className="content" href={`tel:${contactInfo.phone2}`}>
                      {contactInfo.phone2}
                    </a>
                  </li>
                  <li className="list-group-item">
                    <i className="icon icon-envelope-open"></i>
                    <a className="content" href={`mailto:${contactInfo.email}`}>
                      {contactInfo.email}
                    </a>
                  </li>
                  <li className="list-group-item">
                    <i className="icon icon-location-pin"></i>
                    <a className="content" href="/#">
                      {contactInfo.address}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-7 order-first order-md-last mt-sm-4 mt-lg-0">
            <form
              id="contact-form"
              className="contact-form"
              onSubmit={handleSubmit}
            >
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                <label htmlFor="name">Name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <label htmlFor="email">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="number"
                  className="form-control"
                  id="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                <label htmlFor="phone">Phone</label>
              </div>

              <div className="form-group mb-3">
                <div className="form-label">I'm interested in:</div>
                <div className="form-input-group">
                  {[
                    "Web Development",
                    "UI/UX Design",
                    "Web Consultation",
                    "Other",
                  ].map((option, index) => (
                    <div className="form-input" key={index}>
                      <input
                        type="radio"
                        className="btn-check"
                        name="interest"
                        id={`option-${option.toLowerCase()}`}
                        value={option}
                        onChange={handleInputChange}
                      />
                      <label
                        className="btn magnetic-button btn-outline"
                        htmlFor={`option-${option.toLowerCase()}`}
                      >
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              <div className="form-group mb-3">
                <div className="form-label">My budget is:</div>
                <div className="form-input-group">
                  {["< 2k", "2-5k", "5-10k", "10-15k", "> 20k"].map(
                    (budget, index) => (
                      <div className="form-input" key={index}>
                        <input
                          type="radio"
                          className="btn-check"
                          name="budget"
                          id={`budget-${budget.replace(" ", "-")}`}
                          value={budget}
                          onChange={handleInputChange}
                        />
                        <label
                          className="btn magnetic-button btn-outline"
                          htmlFor={`budget-${budget.replace(" ", "-")}`}
                        >
                          {budget}
                        </label>
                      </div>
                    )
                  )}
                </div>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="budget"
                  placeholder="Exact Budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                />
                <label htmlFor="exact-budget">
                  Do you have an exact budget?
                </label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="timeline"
                  placeholder="Timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                />
                <label htmlFor="timeline">What is your timeline?</label>
              </div>
              <div className="form-floating mb-4">
                <textarea
                  className="form-control"
                  id="message"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                  value={formData.message}
                  onChange={handleInputChange}
                />
                <label htmlFor="message">Message</label>
              </div>
              <button className="btn magnetic-button">Submit Message</button>
            </form>
            <p className="form-message"></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
