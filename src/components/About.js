import React from "react";

function About() {
  return (
    <div id="about-container">
      <div id="about-header">
        <h1>about us</h1>
      </div>
      <div id="about-info">
        <p>
          the met | replica is a mock e-commerce site that utilizes{" "}
          <a className="about-links" href="https://metmuseum.github.io/">
            the metropolitan museum of art's API
          </a>
          . the images and information throughout this mock site belong to the
          metropolitan museum of art.
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
  );
}

export default About;
