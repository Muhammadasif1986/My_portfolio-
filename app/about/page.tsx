'use client';
import Image from 'next/image';
import profile from '../../public/my-image.jpg';
import { Ubuntu_Condensed } from 'next/font/google';

const Ubuntu = Ubuntu_Condensed({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default function About() {
  return (
    <main className={`${Ubuntu.className} bg-gray-100`}>
      <div className="container mx-auto px-6 py-12">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Me</h1>
          <p className="text-lg text-gray-600">
            Get to know me better — My background, skills, and experiences.
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center mt-10">
          {/* Profile Image */}
          <div className="lg:w-1/3 mb-6 lg:mb-0 flex justify-center">
            <Image
              src={profile}
              alt="My Profile Picture"
              className="rounded-full shadow-xl border-4 border-gray-400"
              width={300}
              height={300}
            />
          </div>

          {/* About Information */}
          <div className="lg:w-2/3 lg:pl-12 text-gray-800">
            <h2 className="text-3xl font-bold mb-4">Who I Am</h2>
            <p className="text-lg mb-4">
              Hello! I&apos;m <span className="font-bold">Muhammad Asif</span>, a
              passionate and driven web developer. I specialize in creating
              intuitive, dynamic, and visually engaging websites and
              applications. My journey into development began with a curiosity
              to understand how websites function — and I haven&apos;t looked back
              since.
            </p>
            <p className="text-lg mb-4">
              Currently, I am a student in the{' '}
              <span className="font-bold">
                Governor Sindh&apos;s GenAI Program
              </span>{' '}
              where I am enhancing my skills in cutting-edge technologies.
              Beyond coding, I enjoy solving complex problems, working on
              creative projects, and continuously learning to improve myself.
            </p>

            <h3 className="text-2xl font-bold mt-6 mb-4">Skills</h3>
            <ul className="list-disc ml-6 space-y-2">
              <li>Proficient in HTML, CSS, JavaScript, and TypeScript</li>
              <li>Experienced with React.js, Next.js, and Tailwind CSS</li>
              <li>Backend knowledge in Node.js, Express.js, and REST APIs</li>
              <li>Version Control using Git and GitHub</li>
              <li>Strong understanding of UI/UX principles</li>
            </ul>

            <p className="mt-6 text-lg">
              My goal is to become a leading web developer by contributing to
              impactful projects that help businesses and individuals achieve
              their goals. I&apos;m always eager to collaborate, learn, and grow
              alongside other talented individuals in the tech community.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Let&apos;s Connect</h3>
          <p className="text-lg">
            I&apos;m always open to discussing exciting opportunities, projects, or
            just a casual chat!
          </p>
          <a
            href="/asif-cv.pdf"
            download
            className="mt-6 inline-block px-6 py-3 text-white bg-blue-600 hover:bg-blue-500 rounded shadow-lg"
          >
            Download My Resume
          </a>
        </div>
      </div>
    </main>
  );
}
