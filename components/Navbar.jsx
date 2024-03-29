import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";

// Assets
// import logo from "/public/assets/logoRG.png";

// Component
export default function Navbar() {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);

    function toggleNav() {
        setNav(!nav);
    }

    function handleShadow() {
        if (!shadow && window.scrollY >= 1) {
            setShadow(true);
        } else if (window.scrollY < 1) {
            setShadow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleShadow);
    }, []);

    return (
        <div className={shadow ? "fixed w-full h-20 bg-[#ecf0f3] shadow-xl z-[100] ease-in duration-100" : "fixed w-full h-20 bg-[#ecf0f3] z-[100] ease-in duration-100"}>
            <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
                {/* <Image src={logo} alt="/" width="auto" height="50" /> */}
                <Link href="/">
                    <div>
                        <h1>RG</h1>
                    </div>
                </Link>
                <div>
                    <ul className="hidden md:flex">
                        <Link href="/#home" scroll={false}>
                            <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
                        </Link>
                        <Link href="/#about" scroll={false}>
                            <li className="ml-10 text-sm uppercase hover:border-b">About</li>
                        </Link>
                        <Link href="/#skills" scroll={false}>
                            <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
                        </Link>
                        <Link href="/#projects" scroll={false}>
                            <li className="ml-10 text-sm uppercase hover:border-b">Projects</li>
                        </Link>
                        <Link href="/#contact" scroll={false}>
                            <li className="ml-10 text-sm uppercase hover:border-b">Contact</li>
                        </Link>
                    </ul>
                    <div onClick={toggleNav} className="md:hidden">
                        <AiOutlineMenu size={25} />
                    </div>
                </div>
            </div>
            <div className={nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""}>
                <div className={nav ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500" : "fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen p-10 ease-in duration-500"}>
                    <div>
                        <div className="flex w-full items-center justify-between">
                            {/* <Image src={logo} alt="/" width="auto" height="50" /> */}
                            <div>
                                <h1>RG</h1>
                            </div>
                            <div onClick={toggleNav} className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                                <AiOutlineClose />
                            </div>
                        </div>
                        <div className="border-b border-gray-300 my-4">
                            <p className="w-[85%] md:w-[90%] py-4">Test text</p>
                        </div>
                    </div>
                    <div className="py-4 flex-col">
                        <ul className="uppercase">
                            <Link href="/#home" scroll={false}>
                                <li onClick={() => setNav(false)} className="py-4 text-sm">
                                    Home
                                </li>
                            </Link>
                            <Link href="/#about" scroll={false}>
                                <li onClick={() => setNav(false)} className="py-4 text-sm">
                                    About
                                </li>
                            </Link>
                            <Link href="/#skills" scroll={false}>
                                <li onClick={() => setNav(false)} className="py-4 text-sm">
                                    Skills
                                </li>
                            </Link>
                            <Link href="/#projects" scroll={false}>
                                <li onClick={() => setNav(false)} className="py-4 text-sm">
                                    Projects
                                </li>
                            </Link>
                            <Link href="/#contact" scroll={false}>
                                <li onClick={() => setNav(false)} className="py-4 text-sm">
                                    Contact
                                </li>
                            </Link>
                        </ul>
                        <div className="pt-40 ">
                            <p className="uppercase ">Contact me</p>
                            <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                    <FaLinkedinIn />
                                </div>
                                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                    <FaGithub />
                                </div>
                                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                    <AiOutlineMail />
                                </div>
                                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                    <BsFillPersonLinesFill />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
