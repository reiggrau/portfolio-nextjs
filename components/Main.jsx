import React from "react";

// Sub-components
import Intro from "./subcomponents/Intro.jsx";
import About from "./subcomponents/About.jsx";
import Skills from "./subcomponents/Skills.jsx";
import Projects from "./subcomponents/Projects.jsx";

export default function Main() {
    return (
        <div className="w-full h-screen">
            <Intro />
            <About />
            <Skills />
            <Projects />
        </div>
    );
}
