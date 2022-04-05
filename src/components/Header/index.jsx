import React, {useRef, useEffect} from 'react'
import {Logo, Header} from './styles'
import {Timeline, Tween} from 'react-gsap'
import gsap from 'gsap'

function HeaderComponent() {
  const headerRef = useRef()

  useEffect(() => {
    gsap.to(headerRef.current, {opacity: 1, delay: 1.5, duration: 1.5})
  })
  return (
    <Header ref={headerRef}>
      <Logo title="Milky Mood Logo" />
    </Header>
  )
}

export default HeaderComponent
