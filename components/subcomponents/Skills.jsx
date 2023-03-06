import React from "react";
import Image from "next/image";

// Assets
// Import skill icons here
import html_icon from "./../../public/assets/skills/HTML.png";
import css_icon from "./../../public/assets/skills/CSS.png";
import javascript_icon from "./../../public/assets/skills/JavaScript.png";
import typescript_icon from "./../../public/assets/skills/TypeScript.png";
import jquery_icon from "./../../public/assets/skills/jQuery.png";
import vue_icon from "./../../public/assets/skills/Vue.png";
import react_icon from "./../../public/assets/skills/React.png";
import redux_icon from "./../../public/assets/skills/Redux.png";
import next_icon from "./../../public/assets/skills/Next.png";

export default function Skills() {
    const skillsArr = [
        ["HTML", html_icon],
        ["CSS", css_icon],
        ["JavaScript", javascript_icon],
        ["TypeScript", typescript_icon],
        ["jQuery", jquery_icon],
        ["Vue", vue_icon],
        ["React", react_icon],
        ["Redux", redux_icon],
        ["Next", next_icon],
    ]; // Add skills here (case sensitive)

    return (
        <div className="w-full lg:h-screen p-2">
            <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
                <p className="uppercase text-xl tracking-widest text-[#376299]">Skills</p>
                <h2 className="py-4">What I Can Do</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillsArr.map((skill) => {
                        return (
                            <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                                    <div className="m-auto">
                                        <Image src={skill[1]} width="64" height="64" alt="/" />
                                    </div>
                                    <div className="flex felx-col items-center justify-center">
                                        <h3>{skill[0]}</h3>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
