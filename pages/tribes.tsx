import React from "react";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";

// Assets
import tribesImg from "./../public/assets/projects/tribes.jpg";

const tribes = () => {
    return (
        <div className="w-full top-20 relative">
            <div className="w-screen h-[30vh] lg:h-[40vh] relative">
                <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
                <Image className="absolute z-1" fill objectFit="cover" src={tribesImg} alt="/" />
                <div className="absolute top-[60%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] text-white z-10 p-2">
                    <h2 className="py-2">TRIBES</h2>
                    <h3>React / Socket.io / PostgreSQL</h3>
                </div>
            </div>
            <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
                <div className="col-span-4">
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p>
                        This is a single-page application website made with React that allows users to sign in and play a 'choose-your-path' browser game. The app also includes a functional lobby where users can find other users, befriend
                        each other, and chat globally or privately. At the game's prologue the player is asked a few questions, and the answers given determine the stats of the new character.
                    </p>
                    <button className="px-8 py-2 mt-4 mr-8">Demo</button>
                    <button className="px-8 py-2 mt-4">Code</button>
                </div>
                <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
                    <div className="p-2">
                        <p>Technologies</p>
                        <div>
                            <p>
                                <RiRadioButtonFill />
                                React
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default tribes;
