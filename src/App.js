import Navbar from "./components/navigation";
import About from "./components/about";
import Experience from "./components/experience";
import Skills from "./components/skills";

import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import Research from "./components/research";

/* Adds brand icons for nav bar */
library.add(fab);
/* Entire Page is loaded here into App! */

function App() {
  return (
    <div className="app-base" id="app-container">
      <Navbar></Navbar>
      <div id="main-container">
        <About></About>
        <Experience></Experience>
        <Research></Research>
        <Skills></Skills>
        {/* Add a courses section and maybe area to attach resume */}
      </div>
    </div>
  );
}

export default App;
