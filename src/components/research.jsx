import React, { Component } from "react";
import Fade from "react-reveal/Fade";

let siteText = require("./data/site-text.json");

export default class Research extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: "no section selected",
      cardParity: "",
    };
  }
  createResearchCard = (numPaper, paperInfo) => {
    this.cardParity = numPaper % 2;

    return (
      <Fade bottom>
        <div
          onMouseOver={() => {
            this.setState({ selected: numPaper });
          }}
          onMouseOut={() => {
            this.setState({ selected: "no section selected" });
          }}
        >
          <a
            id={paperInfo.title}
            className={
              this.cardParity
                ? "card research-card card-coloring-left"
                : "card research-card card-coloring-right"
            }
            href={paperInfo.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="card-header">
              {paperInfo.conference} | {paperInfo.date}
            </div>
            <div className="card-body">
              <h5>{paperInfo.title}</h5>
              <h6 className="card-subtitle mb-2" style={{ opacity: "0.5" }}>
                {paperInfo.authors}
              </h6>
              <div
                className={
                  this.cardParity
                    ? "research-image-wrapper-left"
                    : "research-image-wrapper-right"
                }
              >
                <img
                  className={
                    this.state.selected === numPaper
                      ? "research-image-active"
                      : "research-image-not-active"
                  }
                  src={"./images/" + paperInfo.file}
                  alt={paperInfo.affiliation + " image"}
                />
              </div>
              <p>With support from {paperInfo.affiliation}</p>
            </div>
          </a>
        </div>
      </Fade>
    );
  };

  render() {
    var numPapers = Object.keys(siteText["Research Papers"]).length;
    var paperIterator = Array.from(Array(numPapers).keys());
    return (
      <div id="research" className="card card-coloring">
        <section className="section-header base-section">Research</section>
        <p className="section-body padded base-section about-section">
          {siteText["Research Description"]}{" "}
        </p>
        {/* animate__animated animate__fadeInRight */}
        <div>
          {paperIterator.map((numPaper) => {
            var paperInfo = siteText["Research Papers"][numPaper];
            return this.createResearchCard(numPaper, paperInfo);
          })}
        </div>
      </div>
    );
  }
}
