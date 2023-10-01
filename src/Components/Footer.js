import React from "react";

function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div id="info" className="row d-flex justify-content-around">
          <div className="col-lg-3 d-flex ">
            <div id="address" className="d-flex flex-row">
    
              <div className="p-2"><i className="bi bi-geo-alt"></i></div>
              <div className="p-2"> <h6>Location:</h6></div>
              <div className="p-2"> <p>Bengaluru, Karnataka 560034</p></div>
                 
            </div>
          </div>
          <div className="col-lg-3 d-flex ">
            <div id="email" className="d-flex flex-row">
              <div className="p-2"><i className="bi bi-envelope"></i></div>
              <div className="p-2"><h6>Email:</h6></div>
              <div className="p-2"><p>abhishek@prachand.co.in</p></div>
            </div>
          </div>
          <div className="col-lg-3 d-flex ">
            <div id="phone" className="d-flex flex-row">
              <div className="p-2"><i className="bi bi-phone"></i></div>
              <div className="p-2"><h6>Call:</h6></div>
              <div className="p-2"><p>+91 9876543210</p></div>
            </div>
          </div>
        </div>
        <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>Prachand</span>
            </strong>
            . All Rights Reserved
          </div>
      </div>

    </footer>
  );
}

export default Footer;
