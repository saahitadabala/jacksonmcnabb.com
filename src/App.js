import Navbar from "./components/navigation";
import Heading from "./components/heading";
import About from "./components/about";
import Experience from "./components/experience";
import Research from "./components/research";
import Skills from "./components/skills";
import Footer from "./components/footer";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Fade from "react-reveal/Fade";

/* Adds brand icons for nav bar */
library.add(fab);
/* Entire Page is loaded here into App! */

function App() {
  return (
    <div className="app-base" id="app-container">
      <Navbar></Navbar>
      <div id="main-container">
        {/* Add a courses section and maybe area to attach resume */}
        <Fade top>
          <Heading></Heading>
        </Fade>
        <Fade bottom delay={1000}>
          <About></About>
        </Fade>
        <Fade bottom delay={2000}>
          <Experience></Experience>{" "}
        </Fade>
        <Fade bottom>
          <Research></Research>
        </Fade>
        <Skills></Skills>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
