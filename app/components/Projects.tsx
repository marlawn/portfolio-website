import React from 'react'

const Projects = () => {
  return (
    <div className="flex items-center justify-start text-left md:text-right md:justify-end">
        <ul>
            <div className='duration-500 hover:scale-105 hover:text-red-600 hover:cursor-pointer'>
                <a href="https://github.com/marlawn/recipe-app">
                    <li className='font-black'><pre>&lt;Recipe App &#47;&gt;</pre></li>
                    <li className='text-xs'>python/typescript/css, react.js (vite), tailwind, django, aws ec2, aws s3</li>
                </a>
            </div>
            <br />
            <div className='duration-500 hover:scale-105 hover:text-red-600 hover:cursor-pointer'>
                <a href="https://github.com/marlawn/GestureLink">
                    <li className='font-black'><pre>&lt;GestureLink &#47;&gt;</pre></li>
                    <li className='text-xs'>python/c, machine learning, esp32, wearable technology, iot, electrical engineering</li>
                </a>
            </div>
            <br />
            <div className='duration-500 hover:scale-105 hover:text-red-600 hover:cursor-pointer'>
                <a href="https://github.com/marlawn/crud-application">
                    <li className='font-black'><pre>&lt;UserLoggingSystem &#47;&gt;</pre></li>
                    <li className='text-xs'>java/javascript/html/css, crud, spring boot, mysql, postman, react, bootstrap</li>
                </a>
            </div>
            <br />
            <div className='duration-500 hover:scale-105 hover:text-red-600 hover:cursor-pointer'>
                <a href="https://github.com/marlawn/portfolio-website">
                    <li className='font-black'><pre>&lt;PortfolioWebsite &#47;&gt;</pre></li>
                    <li className='text-xs'>typescript/html/css, next.js, tailwind, anime.js</li>
                </a>
            </div>
            <br />
            <div className='duration-500 hover:scale-105 hover:text-red-600 hover:cursor-pointer'>
                <a href="https://github.com/marlawn/POS-System-Android">
                    <li className='font-black'><pre>&lt;AndroidPOS &#47;&gt;</pre></li>
                    <li className='text-xs'>java, android studio</li>
                </a>
            </div>
            <br />
            <div className='duration-500 hover:scale-105 hover:text-red-600 hover:cursor-pointer'>
                <a href="https://github.com/marlawn/GUI-Programming-with-Navigation">
                    <li className='font-black'><pre>&lt;JavaFXPOS &#47;&gt;</pre></li>
                    <li className='text-xs'>java, intellij, javafx, scenebuilder</li>
                </a>
            </div>
            <br />
            <div className='duration-500 hover:scale-105 hover:text-red-600 hover:cursor-pointer'>
                <a href="https://github.com/marlawn/previous-websites">
                    <li className='font-black'><pre>&lt;PreviousWebsites &#47;&gt;</pre></li>
                    <li className='text-xs'>html/css/javascript, react, chakra ui, responsive</li>
                </a>
            </div>
        </ul>
    </div>
  )
}

export default Projects
