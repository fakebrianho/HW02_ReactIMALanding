import React, {useState, useRef, useEffect} from 'react'
import {Image} from './styles'
import gsap from 'gsap'

const ImgBox = ({x, y, percent}) => {
  const [position, setPosition] = useState([0, 0])
  const imageRef = useRef()

  useEffect(() => {
    setPosition([
      Math.random() * 600 - x * 100 - 50,
      Math.random() * 600 - y * 100 - 50
    ])
    gsap.to(imageRef.current, {opacity: 1, delay: 2, duration: 1.5})
  }, [x, y])

  return (
    <Image
      ref={imageRef}
      $initialX={x}
      $initialY={y}
      $movedX={position[0] * percent}
      $movedY={position[1] * percent}
    />
  )
}

export default ImgBox
