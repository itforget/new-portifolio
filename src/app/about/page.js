'use client'
import { useState } from "react"
import Navigation from "../components/navigation.js"
export default function About() {
    const [darkMode, setDarkMode] = useState(false)
  return(
    <div className={`flex min-h-screen h-screen flex-col ${darkMode ? 'bg-zinc-900 text-zinc-300' : 'bg-gradient-to-b from-zinc-300 to-indigo-400 text-zinc-700'}`} >
        <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  )
}