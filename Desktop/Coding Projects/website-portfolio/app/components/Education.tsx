import Link from 'next/link'
import React from 'react'

const Education = () => {
  return (
    <div className="flex items-center justify-end text-left md:text-right">
        <ul>
            <li className='font-black'>UNIVERSITY:</li>
            <li>rutgers university</li>
            <br />
            <li className='font-black'>GPA:</li>
            <li>3.694/4.000</li>
            <br />
            <li className="font-black">HONORS:</li>
            <li>summa cum laude (highest honors)</li>
            <li>dean&apos;s list (all semesters)</li>
            <br />
            <li className="text-gray-500 duration-500 hover:scale-105 hover:text-red-600 hover:cursor-pointer"><Link href="/coursework">RELEVANT COURSEWORK AND GRADES<br/>(WORK IN PROGRESS)</Link></li>
        </ul>
    </div>
  )
}

export default Education