import React, { Component } from "react";
let siteText = require("./data/site-text.json");

export default class Research extends Component {
  render() {
    return (
      <p
        className="section-body about-section base-section padded"
        id="research"
      >
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
