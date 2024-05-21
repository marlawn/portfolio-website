import React, { useEffect, useState } from 'react'
import anime from "animejs";
import Image from 'next/image';

const SplashScreen = ({ finishLoading }) => {

  const [isMounted, setIsMounted] = useState(false)

  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading()
    })

    loader.add({
      targets: "#splash",
      delay: 0,
      scale: 1,
      duration: 200,
      easing: "linear"
    })
    .add({
      targets: "#splash",
      delay: 0,
      scale: 20,
      opacity: 0,
      duration: 1200,
      easing: "easeInOutExpo"
    })
  }

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10)
    animate()
    return () => clearTimeout(timeout)
  })

  return (
    <div className="flex h-screen items-center justify-center overflow-hidden" isMounted = {isMounted}>
      <Image id="splash" src="/images/screen.png" alt ="" width={200} height={200}/>
    </div>
  )
}

export default SplashScreen

