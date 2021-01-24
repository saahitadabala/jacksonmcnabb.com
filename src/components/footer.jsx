import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHeart } from "@fortawesome/free-solid-svg-icons";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer mt-auto py-4" id="footer">
        <div className="container-footer">
          <span className="footer-text footer">
            Designed and built by Jackson McNabb. Coded with
            <a
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
              id="react-icon"
            >
              <FontAwesomeIcon icon={["fab", "react"]} size="lg" />
            </a>
            and
            <a id="love-icon">
              <FontAwesomeIcon icon={faHeart} size="lg" />
            </a>
            at
            <a
              href="https://github.com/JacksonMcNabb"
              target="_blank"
              rel="noopener noreferrer"
              id="project-repo"
            >
              <FontAwesomeIcon icon={["fab", "github"]} size="lg" /> .
            </a>
          </span>
        </div>
      </footer>
    );
  }
}
