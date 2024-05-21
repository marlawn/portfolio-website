import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='flex flex-col'>
      <div className='md:text-right'>
        Nice to meet you!
        I am searching for an opportunity where I can jumpstart my career and prove my skills in the workplace.
        My goal is to learn new skills and technologies to help further my knowledge in programming.
        My dedication lies in improvement, and someday I hope to be a well-established software engineer.
      </div>
      <div className="flex justify-center md:justify-end pt-[2vh]"><Image className="rounded-full" src="/nextjs-github-pages/images/headshot.jpg" alt="" width={150} height={150}/></div>
    </div>
  )
}

export default About
