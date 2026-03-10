"use client"

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false)
  const [isPressed, setIsPressed] = useState(false)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  // Bolder, smoother spring configuration
  const springConfig = { damping: 30, stiffness: 300, mass: 0.5 }
  const x = useSpring(cursorX, springConfig)
  const y = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const handleMouseDown = () => setIsPressed(true)
    const handleMouseUp = () => setIsPressed(false)

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('button') || 
        target.closest('a') ||
        target.classList.contains('cursor-pointer')
      ) {
        setIsHovered(true)
      } else {
        setIsHovered(false)
      }
    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseover', handleHover)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseover', handleHover)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [cursorX, cursorY])

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
      {/* Outer Circle - Bolder and Glowy */}
      <motion.div
        className="w-12 h-12 rounded-full border-2 border-primary/60 flex items-center justify-center mix-blend-screen shadow-[0_0_15px_rgba(62,128,219,0.3)]"
        style={{
          x,
          y,
          translateX: '-50%',
          translateY: '-50%',
          scale: isPressed ? 0.8 : isHovered ? 1.8 : 1,
          backgroundColor: isHovered ? 'rgba(62, 128, 219, 0.2)' : 'rgba(62, 128, 219, 0.05)',
          borderColor: isHovered ? 'rgba(62, 128, 219, 1)' : 'rgba(62, 128, 219, 0.6)',
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 200 }}
      >
        {/* Inner Dot - Larger and Vibrant */}
        <motion.div 
          className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_10px_rgba(62,128,219,0.8)]"
          animate={{ 
            scale: isHovered ? 0.4 : 1,
            opacity: isPressed ? 0.5 : 1
          }}
        />
      </motion.div>
      
      {/* Secondary trail for better tracking */}
      <motion.div
        className="absolute w-2 h-2 rounded-full bg-secondary/40 blur-sm"
        style={{
          x: useSpring(cursorX, { damping: 40, stiffness: 200 }),
          y: useSpring(cursorY, { damping: 40, stiffness: 200 }),
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </div>
  )
}
