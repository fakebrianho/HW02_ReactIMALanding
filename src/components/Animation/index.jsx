import React, {useState, useEffect} from 'react'
import {Timeline} from 'react-gsap'
import {timeline, gsap} from 'gsap'
// import * as gsap from 'gsap'
// const Animation = () => {
//   const carousels = document.querySelectorAll('header h1, header h2')
//   carousels.forEach((carousel) => {
//     const spanTag = carousel.querySelector('span')
//     const spanWidth = spanTag.clientWidth
//     for (let i = 0; i < 20; i++) {
//       carousel.appendChild(spanTag.cloneNode(true))
//     }
//     const movementTimeline = gsap.timeline({
//       repeat: -1
//     })
//     movementTimeline
//       .set(carousel, {x: 0})
//       .to(carousel, {x: spanWidth * -1, duration: 6, ease: 'linear'})
//   })
//   return <Timeline></Timeline>
// }

// export default Animation
