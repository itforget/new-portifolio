import Image from "next/image";
import { Instagram, Linkedin } from "lucide-react";
import { Github } from "lucide-react";
import { Moon, Sun } from "lucide-react";

export default function Navigation({ darkMode, setDarkMode }) {
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <nav className={`flex flex-row justify-between rounded-2xl border-2 border-zinc-100 p-3 mx-44 mt-4 shadow-xl ${darkMode ? "" : "bg-opacity-85 bg-zinc-200"}`}>
        <a className="flex items-center" href="/"><Image src={darkMode ? "/logo-white.svg" : "/logo-no-background.svg"} alt="logo" width={145} height={145} /></a>
        <a  href="/about" className="text-xl font-medium cursor-pointer p-2 rounded-md hover:bg-zinc-500 transition-colors">
            About
        </a>
        <a className="text-xl font-medium cursor-pointer p-2 rounded-md hover:bg-zinc-500 transition-colors">
          Projects
        </a>
        <a className="text-xl font-medium cursor-pointer p-2 rounded-md hover:bg-zinc-500 transition-colors">
          Contact
        </a>
        <div className="flex flex-row items-center gap-4">
          <a
            href="https://www.instagram.com/_italocds/"
            target="_blank"
            className="cursor-pointer"
          >
            <Instagram />
          </a>
          <a
            href="https://github.com/itforget"
            target="_blank"
            className="cursor-pointer"
          >
            <Github />
          </a>
          <a
            href="https://www.linkedin.com/in/%C3%ADtalo-cordeiro-238a4a21a/"
            target="_blank"
            className="cursor-pointer"
          >
            <Linkedin />
          </a>
          <div className="border-l-2 border-zinc-500 items-center flex pl-3">
            <button onClick={toggleDarkMode}>
              {darkMode ? <Sun /> : <Moon />}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
