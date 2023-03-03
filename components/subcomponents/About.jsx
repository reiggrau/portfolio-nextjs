import React from "react";
import Image from "next/image";

// Assets
import about_picture from "./../../public/assets/about_picture.jpg";

export default function About() {
    return (
        <div className="w-full md:h-screen p-2 flex items-center py-16">
            <div className="max-w[1240px] m-auto md:grid grid-cols-3 gap-8">
                <div className="col-span-2">
                    <p className="uppercase text-xl tracking-widest text-[#376299]">About</p>
                    <h2>Who I am</h2>
                    <p>I am developer yes</p>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse ut adipisci maiores, quibusdam at sed doloremque qui animi in, excepturi ex culpa aspernatur obcaecati nihil soluta consectetur debitis enim laboriosam.
                        Ipsum, cum rem! Reprehenderit ex maiores inventore praesentium eius? Totam.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia pariatur at saepe quam! Ipsum ducimus mollitia sapiente, voluptate consectetur harum dolorum ad maxime. Ut perferendis officia, architecto hic vel quidem.
                    </p>
                    <p>Check some of my projects.</p>
                </div>
                <div className="w-full h-min">
                    <Image src={about_picture} alt="/" />
                </div>
            </div>
        </div>
    );
}
