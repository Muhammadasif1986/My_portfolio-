"use client";
import Image from "next/image";
import Pakwheel from "../../public/pakWheel.png";
import governor from "../../public/governor.png";
import amazon from "../../public/Amazone.png";
import resum from "../../public/resume.png";
import calculator from "../../public/calculator.png";
import Tasbeeh from "../../public/Tasbeeh.png"
import Timer from "../../public/countDown.png"

import Link from "next/link";
import { Ubuntu_Condensed } from "next/font/google";
import { useState } from "react";


const Ubuntu = Ubuntu_Condensed({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
function CardSection() {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    };
    setLiked(!liked)
  };
  return (
    <main className={Ubuntu.className}>
      <h1 className="text-center text-5xl mb-3 mt-4">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 bg-slate-600 p-12 gap-16 w-full text-white">
        <div className="flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-105 bg-slate-900 rounded-xl h-96 py-4 shadow-2xl shadow-zinc-300">
          <h2 className="text-xl mb-4">Pak Wheel UI</h2>
          <Image
            className="w-11/12 h-72 rounded-lg"
            src={Pakwheel}
            alt="pakwheel"
          />
          <div className="flex justify-between items-center w-full pt-4 px-6">
            <Link href="https://copy-pak-wheel.vercel.app/"
            target="_blank"
            rel="noopener noreferrer">
              <button className="bg-slate-900 py-2 px-4 rounded-lg hover:bg-slate-800 text-white">
                Visit
              </button>
            </Link>
            <button
              onClick={handleLike}
              className={`flex items-center bg-slate-900 px-4 py-2 rounded-lg  ${
                liked ? "bg-slate-700 text-white" : "bg-slate-800 text-white"
              } hover:shadow-md`}
            >
              {likeCount > 0
                ? `${likeCount} Like${likeCount > 1 ? "s" : ""}`
                : "Like"}
            </button>

            <Link href="https://github.com/Muhammadasif1986/Nextjs_class-Projects/tree/main/pak-wheel-copy/my-app"
            target="_blank"
            rel="noopener noreferrer">
              <button className="bg-slate-900 py-2 px-4 rounded-lg hover:bg-slate-800 text-white">
                Code
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-105 bg-slate-900 rounded-xl h-96 py-4 shadow-2xl shadow-zinc-300">
          <h2 className="text-xl mb-4">Governor Sindh UI</h2>
          <Image
            className="w-11/12 h-72 rounded-lg"
            src={governor}
            alt="governor"
          />
          <div className="flex justify-between items-center w-full pt-4 px-6">
            <Link href="https://copy-governor-website.vercel.app/"
            target="_blank"
            rel="noopener noreferrer">
              <button className="bg-slate-900 py-2 px-4 rounded-lg hover:bg-slate-800 text-white">
                Visit
              </button>
            </Link>
            <button
              onClick={handleLike}
              className={`flex items-center bg-slate-900 px-4 py-2 rounded-lg  ${
                liked ? "bg-slate-700 text-white" : "bg-slate-800 text-white"
              } hover:shadow-md`}
            >
              {likeCount > 0
                ? `${likeCount} Like${likeCount > 1 ? "s" : ""}`
                : "Like"}
            </button>

            <Link href="https://github.com/Muhammadasif1986/Nextjs_class-Projects/tree/main/copy-governor-web/my-app"
            target="_blank"
            rel="noopener noreferrer">
              <button className="bg-slate-900 py-2 px-4 rounded-lg hover:bg-slate-800 text-white">
                Code
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-105 bg-slate-900 rounded-xl h-96 py-4 shadow-2xl shadow-zinc-300">
          <h2 className="text-xl mb-4">Amazone UI</h2>
          <Image
            className="w-11/12 h-72 rounded-lg"
            src={amazon}
            alt="amazon"
          />
          <div className="flex justify-between items-center w-full pt-4 px-6">
            <Link href="https://nextjs-class-projects.vercel.app/"
            target="_blank"
            rel="noopener noreferrer">
              <button className="bg-slate-900 py-2 px-4 rounded-lg hover:bg-slate-800 text-white">
                Visit
              </button>
            </Link>
            <button
              onClick={handleLike}
              className={`flex items-center bg-slate-900 px-4 py-2 rounded-lg  ${
                liked ? "bg-slate-700 text-white" : "bg-slate-800 text-white"
              } hover:shadow-md`}
            >
              {likeCount > 0
                ? `${likeCount} Like${likeCount > 1 ? "s" : ""}`
                : "Like"}
            </button>

            <Link href="https://github.com/Muhammadasif1986/Nextjs_class-Projects/tree/main/copy-amazon"
            target="_blank"
            rel="noopener noreferrer">
              <button className="bg-slate-900 py-2 px-4 rounded-lg hover:bg-slate-800 text-white">
                Code
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-105 bg-slate-900 rounded-xl h-96 py-4 shadow-2xl shadow-zinc-300">
          <h2 className="text-xl mb-4">M.Asif resume</h2>
          <Image
            className="w-11/12 h-72 rounded-lg"
            src={resum}
            alt="resume"
          />
          <div className="flex justify-between items-center w-full pt-4 px-6">
            <Link href="https://asifresume.vercel.app/"
            target="_blank"
            rel="noopener noreferrer">
              <button className="bg-slate-900 py-2 px-4 rounded-lg hover:bg-slate-800 text-white">
                Visit
              </button>
            </Link>
            <button
              onClick={handleLike}
              className={`flex items-center bg-slate-900 px-4 py-2 rounded-lg  ${
                liked ? "bg-slate-700 text-white" : "bg-slate-800 text-white"
              } hover:shadow-md`}
            >
              {likeCount > 0
                ? `${likeCount} Like${likeCount > 1 ? "s" : ""}`
                : "Like"}
            </button>

            <Link href="https://github.com/Muhammadasif1986/HACKATHON/tree/main/resume_builder"
            target="_blank"
            rel="noopener noreferrer">
              <button className="bg-slate-900 py-2 px-4 rounded-lg hover:bg-slate-800 text-white">
                Code
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-105 bg-slate-900 rounded-xl h-96 py-4 shadow-2xl shadow-zinc-300">
          <h2 className="text-xl mb-4">Simple Calculator</h2>
          <Image
            className="w-11/12 h-72 rounded-lg"
            src={calculator}
            alt="calculator"
          />
          <div className="flex justify-between items-center w-full pt-4 px-6">
            <Link href="https://asif-simple-calculator.vercel.app/"
            target="_blank"
            rel="noopener noreferrer">
              <button className="bg-slate-900 py-2 px-4 rounded-lg hover:bg-slate-800 text-white">
                Visit
              </button>
            </Link>
            <button
              onClick={handleLike}
              className={`flex items-center bg-slate-900 px-4 py-2 rounded-lg  ${
                liked ? "bg-slate-700 text-white" : "bg-slate-800 text-white"
              } hover:shadow-md`}
            >
              {likeCount > 0
                ? `${likeCount} Like${likeCount > 1 ? "s" : ""}`
                : "Like"}
            </button>

            <Link href="https://github.com/Muhammadasif1986/Html-CSS-Typescript-projects/tree/main/Calculator%20html"
            target="_blank"
            rel="noopener noreferrer">
              <button className="bg-slate-900 py-2 px-4 rounded-lg hover:bg-slate-800 text-white">
                Code
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-105 bg-slate-900 rounded-xl h-96 py-4 shadow-2xl shadow-zinc-300">
          <h2 className="text-xl mb-4">Tasbeeh</h2>
          <Image
            className="w-11/12 h-64 rounded-lg"
            src={Tasbeeh}
            alt="Tasbeeh"
          />
          <div className="flex justify-between items-center w-full pt-4 px-6">
            <Link href="https://asif-tahbeeh.vercel.app/"
            target="_blank"
            rel="noopener noreferrer">
              <button className="bg-slate-900 py-2 px-4 rounded-lg hover:bg-slate-800 text-white">
                Visit
              </button>
            </Link>
            <button
              onClick={handleLike}
              className={`flex items-center bg-slate-900 px-4 py-2 rounded-lg  ${
                liked ? "bg-slate-700 text-white" : "bg-slate-800 text-white"
              } hover:shadow-md`}
            >
              {likeCount > 0
                ? `${likeCount} Like${likeCount > 1 ? "s" : ""}`
                : "Like"}
            </button>

            <Link href="https://github.com/Muhammadasif1986/Html-CSS-Typescript-projects/tree/main/Tasbeeh"
            target="_blank"
            rel="noopener noreferrer">
              <button className="bg-slate-900 py-2 px-4 rounded-lg hover:bg-slate-800 text-white">
                Code
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-105 bg-slate-900 rounded-xl h-96 py-4 shadow-2xl shadow-zinc-300">
          <h2 className="text-xl mb-4">Count Down Timer</h2>
          <Image
            className="w-11/12 h-72 rounded-lg"
            src={Timer}
            alt="pakwheel"
          />
          <div className="flex justify-between items-center w-full pt-4 px-6">
            <Link href="https://count-down-pearl.vercel.app/"
            target="_blank"
            rel="noopener noreferrer">
              <button className="bg-slate-900 py-2 px-4 rounded-lg hover:bg-slate-800 text-white">
                Visit
              </button>
            </Link>
            <button
              onClick={handleLike}
              className={`flex items-center bg-slate-900 px-4 py-2 rounded-lg  ${
                liked ? "bg-slate-700 text-white" : "bg-slate-800 text-white"
              } hover:shadow-md`}
            >
              {likeCount > 0
                ? `${likeCount} Like${likeCount > 1 ? "s" : ""}`
                : "Like"}
            </button>

            <Link href="https://github.com/Muhammadasif1986/30days-of-30projects/tree/main/Countdown-timer"
            target="_blank"
            rel="noopener noreferrer">
              <button className="bg-slate-900 py-2 px-4 rounded-lg hover:bg-slate-800 text-white">
                Code
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center transition-all duration-300 transform hover:scale-105 bg-slate-900 rounded-xl h-96 py-4 shadow-2xl shadow-zinc-300">
          <h2 className="text-xl mb-4">Pak Wheel UI</h2>
          <Image
            className="w-11/12 h-72 rounded-lg"
            src={Pakwheel}
            alt="pakwheel"
          />
          <div className="flex justify-between items-center w-full pt-4 px-6">
            <Link href="https://copy-pak-wheel.vercel.app/"
            target="_blank"
            rel="noopener noreferrer">
              <button className="bg-slate-900 py-2 px-4 rounded-lg hover:bg-slate-800 text-white">
                Visit
              </button>
            </Link>
            <button
              onClick={handleLike}
              className={`flex items-center bg-slate-900 px-4 py-2 rounded-lg  ${
                liked ? "bg-slate-700 text-white" : "bg-slate-800 text-white"
              } hover:shadow-md`}
            >
              {likeCount > 0
                ? `${likeCount} Like${likeCount > 1 ? "s" : ""}`
                : "Like"}
            </button>

            <Link href="https://github.com/Muhammadasif1986/Nextjs_class-Projects/tree/main/pak-wheel-copy/my-app"
            target="_blank"
            rel="noopener noreferrer">
              <button className="bg-slate-900 py-2 px-4 rounded-lg hover:bg-slate-800 text-white">
                Code
              </button>
            </Link>
          </div>
        </div>
        

      </div>
    </main>
  );
}

export default CardSection;
