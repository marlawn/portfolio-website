import Image from 'next/image'
import React from 'react'

const Skills = () => {
  return (
    <div className="flex flex-col">
        <div className="font-black">LANGUAGES:</div>
        <ul>
          <li>java</li>
          <li>python</li>
          <li>javascript/typescript</li>
          <li>c/c#</li>
          <li>matlab</li>
          <li>html/css</li>
          <li>sql</li>
        </ul>
        <br />
        <div className="font-black">FRAMEWORKS/TOOLS:</div>
        <ul>
          <li>next.js</li>
          <li>react/vite</li>
          <li>android studio</li>
          <li>spring boot</li>
          <li>django</li>
          <li>bootstrap + tailwind</li>
          <li>javafx</li>
          <li>github</li>
        </ul>
    </div>
  )
}

export default Skills
