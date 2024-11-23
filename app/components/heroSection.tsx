import Image from "next/image"
import profile from "../../public/my-image.jpg"
import {Ubuntu_Condensed } from "next/font/google";


const Ubuntu = Ubuntu_Condensed({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

function HeroSection() {
  return (
<main className={Ubuntu.className}>
    <div className="flex justify-center items-center h-auto w-full p-16">
    <div className=" flex flex-col lg:flex-row justify-center items-center">
    <Image className="shadow-2xl shadow-black h-72 w-80 rounded-full p-2 border-r-8 border-slate-600" src={profile} alt="window"/>
<div className=" text-5xl w-full text-center mt-8 lg:ml-10 lg:mt-0 lg:text-start "> <p>Hello! I'am </p>
<p>Muhammad Asif</p>
<p className="mt-4 text-xl">
        I'm a creative web developer passionate about building innovative digital solutions.
      </p>
</div>

    </div>   
    </div>
</main>
  )
}
export default HeroSection
