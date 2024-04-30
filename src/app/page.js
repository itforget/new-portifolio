'use client'
import { Github, Instagram, Linkedin, Moon, Send, Sun } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <main className={`flex min-h-screen flex-col ${darkMode ? 'bg-zinc-900 text-zinc-300' : 'bg-gradient-to-b from-zinc-300 to-indigo-400 text-zinc-700'}`}>
      <nav className={`flex flex-row justify-between rounded-2xl border-2 border-zinc-100 p-3 mx-44 mt-4 ${darkMode ? '' : 'bg-opacity-85 bg-zinc-200'}`}>
        <Image src={darkMode ? "/logo-white.png" : "/logo-no-background.svg"} width={145} height={145} />
        <div className="flex flex-row gap-20">
          <a className="text-xl font-medium ">About</a>
          <a className="text-xl font-medium ">Projects</a>
          <a className="text-xl font-medium ">Contact</a>
        </div>
        <div className="flex flex-row items-center gap-4">
          <a className="cursor-pointer"><Instagram /></a>
          <a className="cursor-pointer"><Github /></a>
          <a className="cursor-pointer"><Linkedin /></a>
          <div className=" border-l-2 border-zinc-500 items-center flex pl-3">
            <button onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? <Sun /> : <Moon />}
            </button>
          </div>
        </div>
      </nav>
      <div className="w-auto flex mt-44 h-auto justify-start flex-col gap-5 ml-24">
        <h1 className="text-7xl font-bold"><span className="text-zinc-500">Welcome</span>, my name is Ítalo C.</h1>
        <div className="w-[1000px]">
          <p className="text-xl font-medium">Lorem ipsum dolor sit amet. Sed doloremque doloremque cum reiciendis deleniti qui quia minima ab veniam facilis. Aut earum consequuntur id accusamus dolor ut dolorum enim quo laboriosam unde ut officia laboriosam. Et consequatur quasi quo nisi nesciunt qui quia iste qui praesentium maiores id tempore quibusdam et neque eligendi ea numquam modi.</p>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <a className={`w-44 h-14 flex items-center justify-center p-5 rounded-lg text-base font-bold cursor-pointer ${darkMode ? 'text-zinc-300 bg-zinc-800' : 'text-zinc-700 bg-zinc-200 bg-opacity-40'}`}>
            Open my CV
          </a>
          <a className={`w-44 h-14 flex items-center justify-center p-5 rounded-lg text-base font-bold cursor-pointer gap-2 ${darkMode ? 'text-zinc-300 bg-zinc-800' : 'text-zinc-700 bg-zinc-200 bg-opacity-40'}`}>
            Contact me
            <Send />
          </a>
        </div>
      </div>
    </main>
  );
}