import Link from 'next/link'
import React from 'react'

const CourseworkPage = () => {
  return (
    <div className='flex h-[100vh] w-[100vw] justify-center items-center'>
      <div className="flex flex-col text-center">
        <div className='text-white text-2xl'>WORK IN PROGRESS</div>
        <div className="py-1 text-white duration-500 hover:scale-105 hover:text-red-600 hover:cursor-pointer"><Link href="/">back to homepage</Link></div>
      </div>
    </div>
  )
}

export default CourseworkPage