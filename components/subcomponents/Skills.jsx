import React from "react";

export default function Skills() {
    const skillsArr = ["HTML", "CSS", "JavaScript", "TypeScript", "jQuery", "Vue", "React", "Redux", "Nuxt", "Next", "Node", "Express", "Jest", "PostgreSQL", "AWS", "Firebase"]; // Add skills here (case sensitive). Make sure file is same name

    return (
        <div id="skills" className="w-full lg:h-screen p-2">
            <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full pt-24">
                <p className="uppercase text-xl tracking-widest text-[#376299]">Skills</p>
                <h2 className="py-4">What I Can Do</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
                    {skillsArr.map((skill) => {
                        return (
                            <div key={skill} className="p-2 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                                <div className="flex flex-col justify-center items-center gap-2">
                                    <div className="flex justify-center items-center m-auto h-[100px] w-[100px]">
                                        <img src={`/assets/skills/${skill}.png`} className="object-contain w-auto h-[100px]" alt={skill} />
                                    </div>
                                    <div className="flex felx-col items-center justify-center">
                                        <h3>{skill}</h3>
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
