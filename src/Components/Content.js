import React from "react";

import MyImage from "../img/logo2.jpg"

function Content() {
  return (
    <main id="main">
      <section id="about" className="about">
        <div className="container">
          <div className="section-title">
            <h2>About Us</h2>
            <div id="ab-box" className="ab-box"></div>
            <p>
              <cite>
                Welcome to Prachand, where we're revolutionizing healthcare
                with cutting-edge technology.
                <br></br>Join us on this exciting journey as
                we reshape the future of healthcare. Together, we're making
                quality healthcare accessible to all, one innovative click at a
                time.
              </cite>
            </p>
          </div>

          <div id="info-title" className="row mt-2">
            <div className="col-lg-4 col-md-6 icon-box">
              <div className="icon">
                <i className="bi bi-briefcase"></i>
              </div>
              <h4 className="title">
                <a href="/">Our Mission</a>
              </h4>
              <p className="description">
                <cite>
                  We're on a mission to revolutionize the healthcare industry by
                  creating a one-stop-shop superapp that connects doctors and
                  patients seamlessly. Our HealthTech platform, built on the
                  foundation of UHI, is set to transform the way healthcare
                  services are accessed and delivered.
                </cite>
              </p>
            </div>
            <div className="col-lg-4 col-md-6 icon-box">
              <div className="icon">
                <i className="bi bi-bar-chart"></i>
              </div>
              <h4 className="title">
                <a href="/">Healthcare at Your Fingertips</a>
              </h4>
              <p className="description">
                <cite>
                  Imagine a world where healthcare is just a click away! With
                  our app, we're making that vision a reality. We provide
                  lightning-fast, 10-minute delivery of healthcare services,
                  ensuring that patients get the care they need when they need
                  it most.
                </cite>
              </p>
            </div>
            <div className="col-lg-4 col-md-6 icon-box">
              <div className="icon">
                <i className="bi bi-brightness-high"></i>
              </div>
              <h4 className="title">
                <a href="/">Healthcare Revolution</a>
              </h4>
              <p className="description">
                <cite>
                  Our platform brings together all facets of healthcare delivery
                  under one digital roof, simplifying the entire process for
                  both patients and healthcare providers. We're breaking down
                  barriers and making healthcare more accessible, convenient,
                  and patient-centric than ever before.
                </cite>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <div className="section-title">
            <h2>Contact Us</h2>
          </div>

          <div className="row justify-content-center">
            <div className="d-flex al"></div>

            <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-center">
              <form
                action="forms/contact.php"
                method="post"
               
                className="php-email-form rounded"
              >
                <div className="row">
                  <div className="form-group col-md-6">
                    <label for="name">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control rounded"
                      id="name"
                      required
                    />
                  </div>
                  <div className="form-group col-md-6 mt-3 mt-md-0">
                    <label for="name">Your Email</label>
                    <input
                      type="email"
                      className="form-control rounded"
                      name="email"
                      id="email"
                      required
                    />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <label for="name">Subject</label>
                  <input
                    type="text"
                    className="form-control rounded"
                    name="subject"
                    id="subject"
                    required
                  />
                </div>
                <div className="form-group mt-3">
                  <label for="name">Message</label>
                  <textarea
                    className="form-control rounded"
                    name="message"
                    rows="10"
                    required
                  ></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Content;
