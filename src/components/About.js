import React from "react";

function About() {
  return (
    <div>
      <div id="about-header">
        <h1>about us</h1>
      </div>
      <div id="about-container">
        <div id="about-info-container">
          <p id="about-text">
            <span id="text-logo">the met | replica</span> is a mock e-commerce
            site that utilizes{" "}
            <a
              className="linkToMet"
              target="_blank"
              rel="noreferrer"
              href="https://metmuseum.github.io/"
            >
              the metropolitan museum of art's API
            </a>
            . the images and information throughout this mock site belong to{" "}
            <a
              className="linkToMet"
              target="_blank"
              rel="noreferrer"
              href="https://www.metmuseum.org/"
            >
              the metropolitan museum of art
            </a>
            .
          </p>
        </div>
        <div id="about-img-container">
          <img
            id="about-img"
            src="https://www.metmuseum.org/-/media/images/about-the-met/new-landing-page/atm_banner_buddha-medicine_1444x1360.jpg"
            alt="wall motif of Buddha"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default About;
