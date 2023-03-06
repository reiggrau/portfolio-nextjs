import React from "react";
import Image from "next/image";
import Link from "next/link";

// Assets
import tribesImg from "./../../public/assets/projects/TRIBES.jpg";

export default function Projects() {
    const projectsArr = [{ name: "TRIBES", description: "A prehistory-themed browser game", stack: "React, Redux, PostgreSQL", picture: tribesImg }];

    return (
        <div className="w-full">
            <div className="max-w-[1240px] mx-auto px-2 py-16">
                <p className="uppercase text-xl tracking-widest text-[#376299]">Projects</p>
                <h2 className="py-4">What I've Built</h2>
                <div className="grid md:grid-col-2 gap-8">
                    {projectsArr.map((project) => {
                        return (
                            <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
                                <Image className="rounded-xl group-hover:opacity-10" src={project.picture} alt="/" />
                                <div className="hidden group-hover:block">
                                    <h3>{project.name}</h3>
                                    <p>{project.description}</p>
                                    <p>{project.stack}</p>
                                    <Link href="/" target="_blank">
                                        <p>More info</p>
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
