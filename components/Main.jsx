import React from "react";

// Sub-components
import Intro from "./subcomponents/Intro.jsx";
import About from "./subcomponents/About.jsx";
import Skills from "./subcomponents/Skills.jsx";

export default function Main() {
    return (
        <div className="w-full h-screen">
            <Intro />
            <About />
            <Skills />
        </div>
    );
}
