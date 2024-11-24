'use client'
import Image from "next/image";
import profile from "../../public/my-image.jpg";
import { Ubuntu_Condensed } from "next/font/google";
import Link from "next/link";
const Ubuntu = Ubuntu_Condensed({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

function HeroSection() {
  return (
    <main className={Ubuntu.className}>
      <div className="flex justify-center items-center h-auto w-full p-16">
        <div className="flex flex-col lg:flex-row justify-center items-center">
         
          <Image
            className="shadow-2xl shadow-black h-72 w-80 rounded-full p-2 border-r-8 border-slate-600"
            src={profile}
            alt="profile"
          />

          <div className="text-5xl w-full text-center mt-8 lg:ml-10 lg:mt-0 lg:text-start">
            <p>Hello! I`&apos;`m</p>
            <p>Muhammad Asif</p>
            <p className="mt-4 text-xl">
              I'm a creative web developer passionate about building innovative digital solutions.
            </p>

            <p className="mt-4 text-lg text-gray-600">
              I am currently enrolled in the Governor Sindh`&apos;`s GenAI Programme, where I am honing my skills in web development, artificial intelligence, and other cutting-edge technologies.
            </p>

            <div className="flex flex-col justify-center space-y-4 lg:justify-start md:flex-row md:space-y-0 space-x-4 mt-6">
            
              <Link
                href="/asif-cv.pdf"
                download
                className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              >
                Download CV
              </Link>

              <button
                className="px-6 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition"
                onClick={() =>window.alert("Thank you for your interest! Contact No: +92 3333765210; ")}
              >
                Hire Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default HeroSection;
