import React, { useState } from "react";
import MagneticButton from "../Miscellaneous/MagneticButton";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const contactInfo = {
    title: "Schedule a call with me to see if I can help",
    description:
      "Whether you’re looking to start a new project or simply want to chat, feel free to reach out to me!",
    phone: "(+234)-9059428606",
    phone2: "(+234)-8147493495",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    // Sending mail via Emailjs
    try {
      const response = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          service_id: "service_dz12h7p",
          template_id: "template_wj5z9ul",
          user_id: "5tqts9tVEIevlbcZM",
          template_params: {
            name: formData.name,
            service: "",
            phone: formData.phone,
            budget: formData.budget,
            timeline: formData.timeline,
            message: formData.message,
            email: formData.email,
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      toast.success("Email Sent Successfully", {
        position: "top-right",
        autoClose: 2000,
      });
      console.log(response.data);
    } catch (e) {
      console.log(e);
      toast.error("Error In Sending Email", {
        position: "top-right",
        autoClose: 2000,
      });
    }
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
                    <a className="content" href={`tel:09059428608`}>
                      {contactInfo.phone}
                    </a>
                  </li>
                  <li className="list-group-item">
                    <i className="icon icon-phone"></i>
                    <a className="content" href={`tel:08147493495`}>
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
                  required
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
                  required
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
                  required
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
                        id={`option-${option.toLocaleLowerCase()}`}
                        value={option}
                        onChange={handleInputChange}
                        required
                      />
                      <label
                        className="btn magnetic-button btn-outline"
                        htmlFor={`option-${option.toLocaleLowerCase()}`}
                      >
                        {option}
                      </label>
                    </div>
                  ))}
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
                  required
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
                  required
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
                  required
                />
                <label htmlFor="message">Message</label>
              </div>
              <button className="btn magnetic-button">Submit Message</button>
            </form>
            <p className="form-message"></p>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Form;
