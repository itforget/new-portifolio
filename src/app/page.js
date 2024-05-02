'use client'
import { Github, Instagram, Linkedin, Send } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import Navigation from "./components/navigation.js";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const audioRef = useRef(null);

  return (
    <main className={`flex min-h-screen h-screen flex-col ${darkMode ? 'bg-zinc-900 text-zinc-300' : 'bg-gradient-to-b from-zinc-300 to-indigo-400 text-zinc-700'}`}>
      <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="w-auto flex mt-44 h-auto justify-start flex-col gap-5 ml-24">
        <h1 className="text-7xl font-bold"><span className="text-zinc-500">Welcome</span>, my name is Ítalo C.</h1>
        <div className="w-[1000px]">
          <p className="text-xl font-medium">Lorem ipsum dolor sit amet. Sed doloremque doloremque cum reiciendis deleniti qui quia minima ab veniam facilis. Aut earum consequuntur id accusamus dolor ut dolorum enim quo laboriosam unde ut officia laboriosam. Et consequatur quasi quo nisi nesciunt qui quia iste qui praesentium maiores id tempore quibusdam et neque eligendi ea numquam modi.</p>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <a className={`w-44 h-14 flex items-center justify-center p-5 rounded-lg text-base font-bold shadow-xl cursor-pointer ${darkMode ? 'text-zinc-300 bg-zinc-800 hover:bg-opacity-5 transition-colors' : 'text-zinc-700 bg-zinc-200 bg-opacity-40 hover:bg-opacity-85 transition-colors'}`}>
            Open my CV
          </a> 
          <a href="mailto:italcordeiro.s@gmail.com" className={`w-44 h-14 flex items-center justify-center p-5 rounded-lg text-base font-bold shadow-xl cursor-pointer gap-2 ${darkMode ? 'text-zinc-300 bg-zinc-800 hover:bg-opacity-5 transition-colors' : 'text-zinc-700 bg-zinc-200 bg-opacity-40 hover:bg-opacity-85 transition-colors'}`}>
            Contact me
            <Send />
          </a>
        </div>
      </div>
      <div className="h-72 w-72"></div>
      <footer className="justify-end flex">
      <button className="p-2" onMouseEnter={() => {audioRef.current.play()} }>
        <Image className="cursor-pointer hover:animate-bounce" alt="coin" src="/coin.gif" unoptimized width={80} height={80}/>
      </button>
      <audio ref={audioRef} src="/coin.wav"></audio>
      </footer>
    </main>
  );
}
