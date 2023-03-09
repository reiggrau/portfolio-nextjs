import React from "react";
import Image from "next/image";

// Assets
import about_picture from "./../../public/assets/about_picture.jpg";

export default function About() {
    return (
        <div id="about" className="w-full md:h-screen p-2 flex items-center pt-24">
            <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
                <div className="col-span-2">
                    <p className="uppercase text-xl tracking-widest text-[#376299]">About</p>
                    <h2 className="py-4">Who I am</h2>
                    <p className="py-2 text-gray-600">I am developer yes</p>
                    <p className="py-2 text-gray-600">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse ut adipisci maiores, quibusdam at sed doloremque qui animi in, excepturi ex culpa aspernatur obcaecati nihil soluta consectetur debitis enim laboriosam.
                        Ipsum, cum rem! Reprehenderit ex maiores inventore praesentium eius? Totam.
                    </p>
                    <p className="py-2 text-gray-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia pariatur at saepe quam! Ipsum ducimus mollitia sapiente, voluptate consectetur harum dolorum ad maxime. Ut perferendis officia, architecto hic vel quidem.
                    </p>
                    <p className="py-2 text-gray-600 underline cursor-pointer">Check some of my projects.</p>
                </div>
                <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
                    <Image className="rounded-lg" src={about_picture} alt="/" />
                </div>
            </div>
        </div>
    );
}
