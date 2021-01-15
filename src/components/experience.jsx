import React, { Component } from "react";
import Fade from "react-reveal/Fade";
let siteText = require("./data/site-text.json");

export default class Experience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: "no section selected",
      cardParity: "",
    };
  }
  createExperienceCard = (numEntry, xpInfo) => {
    this.cardParity = numEntry % 2;
    return (
      <Fade bottom>
        <div
          id={xpInfo.company}
          className={
            this.cardParity
              ? "card research-card card-coloring-left"
              : "card research-card card-coloring-right"
          }
        >
          <div className="card-header">
            {xpInfo.company} | {xpInfo.date}
          </div>
          <div className="card-body">
            <h5>{xpInfo.title}</h5>
            <h6 className="card-subtitle mb-2" style={{ opacity: "0.5" }}>
              {xpInfo.location}
            </h6>
            <p>{xpInfo.description}</p>
          </div>
        </div>
      </Fade>
    );
  };
  render() {
    var numAcademicEntries = Object.keys(siteText["Selected Academic Projects"])
      .length;
    var academicEntryIterator = Array.from(Array(numAcademicEntries).keys());
    var numProfessionalEntries = Object.keys(
      siteText["Professional Experience"]
    ).length;
    var professionalEntryIterator = Array.from(
      Array(numProfessionalEntries).keys()
    );
    return (
      <div
        className="base-section card card-coloring"
        data-section="experience"
        data-target="experience"
        id="experience"
      >
        <section className="section-header base-section">Experience</section>
        <p className="section-body padded base-section about-section">
          {siteText["Experience Description Part 1"]}
          <a href="#IBM Watson Health">IBM Watson Health</a> and{" "}
          <a href="#GE Healthcare">GE Healthcare</a>
          {siteText["Experience Description Part 2"]}
        </p>
        {/* <a
          data-bs-toggle="collapse"
          href="#multiCollapseExample2"
          role="button"
          aria-expanded="true"
          aria-controls="multiCollapseExample2"
        >
          Professional Experience
        </a> */}
        {/* <div className="collapse show" id="multiCollapseExample2"> */}
        <div>
          {professionalEntryIterator.map((numEntry) => {
            var entryInfo = siteText["Professional Experience"][numEntry];
            return this.createExperienceCard(numEntry, entryInfo);
          })}
        </div>
        {/* </div> */}
        {/* <a
          data-bs-toggle="collapse"
          href="#multiCollapseExample1"
          role="button"
          aria-expanded="false"
          aria-controls="multiCollapseExample1"
        >
          Selected Academic Experience
        </a> */}
        {/* <div className="collapse multi-collapse" id="multiCollapseExample1"> */}
        <div>
          {academicEntryIterator.map((numEntry) => {
            var entryInfo = siteText["Selected Academic Projects"][numEntry];
            return this.createExperienceCard(numEntry, entryInfo);
          })}
        </div>
        {/* </div> */}
      </div>
    );
  }
}
