import React, { Component } from "react";
let siteText = require("./data/site-text.json");

export default class About extends Component {
  render() {
    return (
      <p className="section-body about-section base-section padded" id="about">
        <h2>About</h2>

        {siteText["About"]}
        <span>
          <a href="mailto:jacksondmcnabb@gmail.com;jackson.mcnabb@duke.edu">
            Contact me
          </a>{" "}
          about some of my <a href="#experience">projects</a> or{" "}
          <a href="#research">research</a>!
        </span>
      </p>
    );
  }
}
