import React from 'react'

const Contact = () => {
  return (
    <div className="flex items-center justify-start text-left md:text-right md:justify-end">
        <ul>
            <li className="duration-500 hover:scale-105 hover:text-red-600 hover:cursor-pointer"><a href="https://www.linkedin.com/in/marlon-vergara/">linkedin</a></li>
            <li className="duration-500 hover:scale-105 hover:text-red-600 hover:cursor-pointer"><a href="https://github.com/marlawn">github</a></li>
            <li className="duration-500 hover:scale-105 hover:text-red-600 hover:cursor-pointer"><a href="mailto:marlonvergara12@gmail.com">email</a></li>
        </ul>
    </div>
  )
}

export default Contact