import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const contactInfo = {
    title: "Schedule a call with me to see if I can help",
    description:
      "Whether you're looking to start a new project or simply want to chat, feel free to reach out to me!",
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
    option: "",
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

    try {
      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
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
          }),
        }
      );

      toast.success("Email Sent Successfully", {
        position: "top-right",
        autoClose: 2000,
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        budget: "",
        timeline: "",
        message: "",
      });
      console.log(await response.json());
    } catch (e) {
      console.log(e);
      toast.error("Error In Sending Email", {
        position: "top-right",
        autoClose: 2000,
      });
    }
  };

  return (
    <>
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
                      <a
                        className="content"
                        href={`mailto:${contactInfo.email}`}
                      >
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
              <div id="contact-form" className="contact-form">
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
                  <label htmlFor="exact-budget">What is your budget?</label>
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
                <button className="btn magnetic-button" onClick={handleSubmit}>
                  Submit Message
                </button>
              </div>
              <p className="form-message"></p>
            </div>
          </div>
        </div>
        <ToastContainer />
      </section>

      {/* Cal.com Booking Section */}
      <section
        className="booking-area primary-bg"
        style={{ paddingTop: "80px", paddingBottom: "80px" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10">
              <div className="section-heading text-center mb-5">
                <h2 className="heading-title">Or Book a Call Directly</h2>
                <p
                  className="heading-description"
                  style={{ marginTop: "15px" }}
                >
                  Prefer to schedule a call right away? Choose a time that works
                  best for you.
                </p>
              </div>

              <div
                className="cal-embed-wrapper"
                style={{
                  background: "white",
                  borderRadius: "12px",
                  padding: "20px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  minHeight: "700px",
                }}
              >
                <iframe
                  src="https://cal.com/abdulrafiu-ibrahim-tueost/quick-consultation-call?embed=true&theme=light&layout=month_view"
                  width="100%"
                  height="700"
                  frameBorder="0"
                  style={{
                    border: "none",
                    borderRadius: "8px",
                  }}
                  title="Book a consultation call"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Form;
