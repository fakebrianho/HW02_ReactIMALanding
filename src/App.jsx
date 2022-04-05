import './styles.css'
import React, {useState, useEffect, useRef} from 'react'
import {GlobalStyle, ImageContainer, Wrapper} from './styles'
import Header from './components/Header'
import Footer from './components/Footer'
import ImgBox from './components/ImgBox'
import gsap from 'gsap'
// import Animation from './components/Animation'
// prettier-ignore
const small = [
  [0,0], [1,0], [2,0],
  [0,1], [1,1], [2,1],
  [0,2], [1,2], [2,2]
]

// prettier-ignore
const big = [
  [0,0], [1,0] , [2,0], [3,0], [4,0], [5,0],
  [0,1], [1,1] , [2,1], [3,1], [4,1], [5,1],
  [0,2], [1,2] , [2,2], [3,2], [4,2], [5,2],
  [0,3], [1,3] , [2,3], [3,3], [4,3], [5,3],
  [0,4], [1,4] , [2,4], [3,4], [4,4], [5,4],
  [0,5], [1,5] , [2,5], [3,5], [4,5], [5,5]
]

let matrix = []
if (window.innerWidth > 900) {
  matrix = [...big]
} else {
  matrix = [...small]
}
const handleResize = () => {
  if (window.innerWidth > 900) {
    matrix = [...big]
  } else {
    matrix = [...small]
  }
}
window.addEventListener('resize', handleResize)

const carousels = document.querySelectorAll('.fakeHeader h1, .fakeHeader h2')
const fadeInTimeline = gsap.timeline()
fadeInTimeline
  .set(carousels, {opacity: 0})
  .to(carousels, {opacity: 1, delay: 1, stagger: 1, duration: 2})
carousels.forEach((carousel) => {
  const spanTag = carousel.querySelector('span')
  const spanWidth = spanTag.clientWidth
  for (let i = 0; i < 20; i++) {
    carousel.appendChild(spanTag.cloneNode(true))
  }
  const movementTimeline = gsap.timeline({
    repeat: -1
  })
  movementTimeline
    .set(carousel, {x: 0})
    .to(carousel, {x: spanWidth * -1, duration: 6, ease: 'linear'})
})
export default function App() {
  const [distance, setDistance] = useState(1)
  // const headerRef = useRef()

  // useEffect(() => {
  //   gsap.to(headerRef.current, {opacity: 1})
  // })
  const easing = (num) => Math.pow(num, 3)

  const calculateDistance = ([x, y]) => {
    const center = [window.innerWidth / 2, window.innerHeight / 2]
    const maxHypot = Math.hypot(center[0], center[1])
    const hypot = Math.hypot(center[0] - x, center[1] - y)
    const distance = hypot / maxHypot
    const easeDistance = easing(distance)
    setDistance(easeDistance)
  }

  const handleMove = ({clientX, clientY}) => {
    calculateDistance([clientX, clientY])
  }

  const handleTouchMove = ({touches}) => {
    calculateDistance([touches[0].clientX, touches[0].clientY])
  }

  return (
    <>
      <GlobalStyle />

      <Header />
      {/* <Animation /> */}
      <Footer />
      <Wrapper onMouseMove={handleMove} onTouchMove={handleTouchMove}>
        <ImageContainer $isTogether={distance < 0.001}>
          {matrix.map(([x, y], index) => (
            <ImgBox key={index} x={x} y={y} percent={distance} />
          ))}
        </ImageContainer>
      </Wrapper>
    </>
  )
}
