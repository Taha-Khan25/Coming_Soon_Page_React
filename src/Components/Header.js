import React, { useState, useEffect } from "react";

function Header() {
  const [countdown, setCountdown] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const countDownDate = new Date("2024/06/3").getTime();

    const updateCountdown = () => {
      const currentTime = new Date().getTime();
      const timeleft = countDownDate - currentTime;

      const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

      setCountdown({
        days: days.toString().padStart(2, "0"),
        hours: hours.toString().padStart(2, "0"),
        minutes: minutes.toString().padStart(2, "0"),
        seconds: seconds.toString().padStart(2, "0"),
      });
    };

    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  return (
    <header id="header" className="d-flex align-items-center">
      <div className="container d-flex flex-column align-items-center">
        <h1>Prachand</h1>
        <h2>
          We're working hard to improve our website and we'll ready to launch
          after
        </h2>
        <div
          className="countdown d-flex justify-content-center"
          data-count="2023/12/3"
        >
          <div>
            <h3>{countdown.days}</h3>
            <h4>Days</h4>
          </div>
          <div>
            <h3>{countdown.hours}</h3>
            <h4>Hours</h4>
          </div>
          <div>
            <h3>{countdown.minutes}</h3>
            <h4>Minutes</h4>
          </div>
          <div>
            <h3>{countdown.seconds}</h3>
            <h4>Seconds</h4>
          </div>
        </div>

        <div className="subscribe">
          <h4>Subscribe now to get the latest updates!</h4>
          <form method="post" className="php-email-form">
            <div className="subscribe-form">
              <input type="email" name="email" required />
              <input type="submit" value="Subscribe" />
            </div>
            <div className="mt-2">
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">
                Your notification request was sent. Thank you!
              </div>
            </div>
          </form>
        </div>

        <div className="social-links text-center">
          <a href="https://twitter.com/prachand_tech" className="twitter">
            <i className="bi bi-twitter"></i>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61551746175375&mibextid=LQQJ4d"
            className="facebook"
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/prachand.co.in/"
            className="instagram"
          >
            <i className="bi bi-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/jobs/view/3724315326/?alternateChannel=search&refId=8100eb1f-531b-4914-b032-922ee5aa9c1c&trackingId=%2BbIEV8qdRaybvymucKe1nw%3D%3D"
            className="linkedin"
          >
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
