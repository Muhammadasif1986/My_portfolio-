import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-8 px-4 flex flex-col md:flex-row justify-between items-center">
        <div>
          <h1 className="text-xl font-medium">M.Asif Portfolio</h1>
          <p className="text-sm mt-2 text-gray-400">
            Building dreams, one project at a time.
          </p>
        </div>

        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link
            href="https://twitter.com/asifabdulqadir"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
            aria-label="Twitter"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22.46 6c-.77.35-1.61.58-2.46.69a4.32 4.32 0 001.88-2.38 8.59 8.59 0 01-2.72 1.05A4.28 4.28 0 0016.4 4a4.28 4.28 0 00-4.17 5.28 12.15 12.15 0 01-8.82-4.48A4.28 4.28 0 004.1 10a4.26 4.26 0 01-1.93-.54v.05a4.28 4.28 0 003.44 4.2A4.28 4.28 0 013.9 14a4.28 4.28 0 004 3.13A8.56 8.56 0 012 18.15a12.12 12.12 0 006.55 1.92" />
            </svg>
          </Link>
          <Link
            href="https://www.linkedin.com/in/muhammad-asif-489220134/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.55C0 23.2.8 24 1.77 24h20.46c.97 0 1.77-.8 1.77-1.77V1.72C24 .77 23.2 0 22.23 0zM7.12 20.45H3.56V9h3.56zm-1.78-13c-1.14 0-2.06-.92-2.06-2.06S4.2 3.34 5.34 3.34s2.06.92 2.06 2.06-.92 2.06-2.06 2.06zm14.67 13h-3.56v-5.73c0-1.37-.03-3.14-1.91-3.14-1.91 0-2.21 1.5-2.21 3.03v5.84h-3.56V9h3.42v1.56h.05c.48-.91 1.66-1.87 3.42-1.87 3.65 0 4.33 2.4 4.33 5.5v6.26z" />
            </svg>
          </Link>
          <Link
            href="https://github.com/Muhammadasif1986"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
            aria-label="GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.724-4.033-1.415-4.033-1.415-.546-1.385-1.333-1.754-1.333-1.754-1.086-.744.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.067 1.83 2.801 1.302 3.49.996.107-.776.417-1.302.762-1.601-2.665-.303-5.466-1.333-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.123-.303-.536-1.521.117-3.176 0 0 1.009-.322 3.301 1.23a11.51 11.51 0 016.006 0c2.292-1.552 3.301-1.23 3.301-1.23.653 1.655.24 2.873.117 3.176.768.84 1.236 1.911 1.236 3.221 0 4.609-2.807 5.625-5.479 5.921.429.369.823 1.096.823 2.209v3.293c0 .319.216.694.825.576C20.565 22.093 24 17.594 24 12.297 24 5.372 18.627.297 12 .297z" />
            </svg>
          </Link>
        </div>

        <div className="text-sm text-gray-400 mt-4 md:mt-0">
          © {new Date().getFullYear()} My Portfolio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
