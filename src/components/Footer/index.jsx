import React, {useEffect, useRef} from 'react'
import {Footer, H2, H2Middle} from './styles'
import gsap from 'gsap'

function FooterComponent() {
  const footerRef = useRef()
  useEffect(() => {
    gsap.to(footerRef.current, {opacity: 1, delay: 2.5, duration: 1.5})
  })
  return (
    <Footer ref={footerRef}>
      <H2>May 24</H2>
      <H2Middle>World Tour: New York</H2Middle>
      <H2>Jun 24</H2>
    </Footer>
  )
}

export default FooterComponent
