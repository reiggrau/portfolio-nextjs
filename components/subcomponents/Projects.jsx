import React from "react";
import Image from "next/image";
import Link from "next/link";

// Assets
import tribesImg from "./../../public/assets/projects/tribes.jpg";
import imageboardImg from "./../../public/assets/projects/imageboard.jpg";
import petitionImg from "./../../public/assets/projects/petition.jpeg";
import connect4Img from "./../../public/assets/projects/connect4.png";

export default function Projects() {
    const projectsArr = [
        { name: "TRIBES", description: "A prehistory-themed browser game & lobby", stack: "React, Redux, PostgreSQL", picture: tribesImg, api: "tribes" },
        { name: "imageBoard", description: "A minimalistic photo-sharing web app", stack: "Vue, Nuxt, Firestore", picture: imageboardImg, api: "imageboard" },
        { name: "No One at the Wheel", description: "A satirical petition board & social media", stack: "jQuery, Handlebars, PostgreSQL", picture: petitionImg, api: "petition" },
        { name: "Connect4", description: "A 'connect 4' videogame", stack: "jQuery", picture: connect4Img, api: "connect4" },
    ];

    return (
        <div id="projects" className="w-full">
            <div className="max-w-[1240px] mx-auto px-2 pt-24">
                <p className="uppercase text-xl tracking-widest text-[#376299]">Projects</p>
                <h2 className="py-4">What I've Built</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {projectsArr.map((project) => {
                        return (
                            <div key={project.name} className="relative h-auto w-full shadow-xl shadow-gray-400 group p-1 rounded-lg hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
                                <Image className="rounded-lg group-hover:opacity-10" src={project.picture} alt="/" />
                                <div className="w-full hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                                    <div className="flex-col items-center justify-center">
                                        <h3 className="text-2xl text-white tracking-wider text-center">{project.name}</h3>
                                        <p className="pt-2 text-white text-center">{project.description}</p>
                                        <p className="pb-4 text-gray-800 text-center">{project.stack}</p>
                                        <p className="text-center">
                                            <Link className="px-5 py-3 rounded-lg bg-white text-center text-gray-700 font-bold text-lg cursor-pointer" href={`/${project.api}`}>
                                                More info
                                            </Link>
                                        </p>
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
