
"use client"

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isPressed, setIsPressed] = useState(false)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  // Smooth spring configuration
  const springConfig = { damping: 35, stiffness: 350, mass: 0.5 }
  const x = useSpring(cursorX, springConfig)
  const y = useSpring(cursorY, springConfig)

  useEffect(() => {
    // Only enable for non-touch devices
    const isTouch = window.matchMedia("(pointer: coarse)").matches
    if (isTouch) {
      setEnabled(false)
      return
    }
    
    setEnabled(true)

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
        target.classList.contains('cursor-pointer') ||
        target.closest('.cursor-pointer')
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

  if (!enabled) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
      <motion.div
        className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center mix-blend-multiply shadow-[0_0_20px_rgba(249,115,22,0.1)]"
        style={{
          x,
          y,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isPressed ? 0.7 : isHovered ? 1.6 : 1,
          backgroundColor: isHovered ? 'rgba(249, 115, 22, 0.15)' : 'rgba(249, 115, 22, 0.02)',
          borderColor: isHovered ? 'rgba(249, 115, 22, 1)' : 'rgba(249, 115, 22, 0.4)',
        }}
        transition={{ 
          type: 'spring', 
          damping: 25, 
          stiffness: 250,
          mass: 0.5
        }}
      >
        <motion.div 
          className="w-2.5 h-2.5 rounded-full bg-primary"
          animate={{ 
            scale: isHovered ? 0.5 : 1,
            opacity: isPressed ? 0.6 : 1
          }}
          transition={{ type: 'spring', damping: 20, stiffness: 200 }}
        />
      </motion.div>
      
      <motion.div
        className="absolute w-2 h-2 rounded-full bg-secondary/20 blur-sm"
        style={{
          x: useSpring(cursorX, { damping: 45, stiffness: 250 }),
          y: useSpring(cursorY, { damping: 45, stiffness: 250 }),
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </div>
  )
}
