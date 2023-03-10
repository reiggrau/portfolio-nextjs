import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";

export default function Intro() {
    return (
        <div id="home" className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center text-center pt-24 scroll-p-0">
            <div>
                <p className="uppercase text-sm tracking-widest text-gray-600">sample motto</p>
                <h1 className="py-4 text-gray-700">
                    Hi, I'm <span className="text-[#4e88d4]">Guillem</span>
                </h1>
                <h1 className="py-4 text-gray-700">A Full-Stack Web Developer</h1>
                <p className="py-4 text-gray-600 max-w-[70%] m-auto">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut autem quasi pariatur dignissimos iste dolorem expedita saepe distinctio assumenda ex consequuntur mollitia reiciendis sapiente corrupti, nihil sint numquam
                    quis obcaecati!
                </p>
                <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <FaLinkedinIn />
                    </div>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <FaGithub />
                    </div>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <AiOutlineMail />
                    </div>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <BsFillPersonLinesFill />
                    </div>
                </div>
            </div>
        </div>
    );
}
