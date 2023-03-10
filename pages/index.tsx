import Head from "next/head";
import { Inter } from "@next/font/google";
// import styles from '@/styles/Home.module.css'

// Components
import Main from "../components/Main.jsx";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <div>
            <Head>
                <title>Guillem RG | Full-Stack Developer</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Main />
        </div>
    );
}
