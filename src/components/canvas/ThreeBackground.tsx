
"use client"

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouse = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (!containerRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    containerRef.current.appendChild(renderer.domElement)

    // Neural Network Style Particles
    const particlesCount = 1500
    const positions = new Float32Array(particlesCount * 3)
    const velocities = new Float32Array(particlesCount * 3)
    
    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 12
      velocities[i] = (Math.random() - 0.5) * 0.01
    }

    const particlesGeometry = new THREE.BufferGeometry()
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.015,
      color: 0x3E80DB,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    })
    
    const particles = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particles)

    // Connections (Neural Network effect)
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x3E80DB,
      transparent: true,
      opacity: 0.05
    })
    
    // Using a limited number of lines for performance
    const maxConnections = 400
    const lineGeometry = new THREE.BufferGeometry()
    const linePositions = new Float32Array(maxConnections * 2 * 3)
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3))
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial)
    scene.add(lines)

    camera.position.z = 5

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    const handleMouseMove = (event: MouseEvent) => {
      mouse.current.x = (event.clientX / window.innerWidth) - 0.5
      mouse.current.y = (event.clientY / window.innerHeight) - 0.5
    }

    const animate = () => {
      requestAnimationFrame(animate)

      const positionsAttr = particles.geometry.attributes.position as THREE.BufferAttribute
      const linePositionsAttr = lines.geometry.attributes.position as THREE.BufferAttribute
      
      let lineIndex = 0

      for (let i = 0; i < particlesCount; i++) {
        const i3 = i * 3
        
        // Update positions
        positionsAttr.array[i3] += velocities[i3]
        positionsAttr.array[i3 + 1] += velocities[i3 + 1]
        positionsAttr.array[i3 + 2] += velocities[i3 + 2]

        // Boundary checks
        if (Math.abs(positionsAttr.array[i3]) > 6) velocities[i3] *= -1
        if (Math.abs(positionsAttr.array[i3 + 1]) > 6) velocities[i3 + 1] *= -1
        if (Math.abs(positionsAttr.array[i3 + 2]) > 6) velocities[i3 + 2] *= -1

        // Simple line connection logic (random nodes for neural network look)
        if (i < maxConnections && lineIndex < maxConnections * 6) {
          const nextIndex = (i + 1) % particlesCount
          const n3 = nextIndex * 3
          
          linePositionsAttr.array[lineIndex++] = positionsAttr.array[i3]
          linePositionsAttr.array[lineIndex++] = positionsAttr.array[i3 + 1]
          linePositionsAttr.array[lineIndex++] = positionsAttr.array[i3 + 2]
          
          linePositionsAttr.array[lineIndex++] = positionsAttr.array[n3]
          linePositionsAttr.array[lineIndex++] = positionsAttr.array[n3 + 1]
          linePositionsAttr.array[lineIndex++] = positionsAttr.array[n3 + 2]
        }
      }

      positionsAttr.needsUpdate = true
      linePositionsAttr.needsUpdate = true

      // Gentle camera parallax
      camera.position.x += (mouse.current.x * 2 - camera.position.x) * 0.05
      camera.position.y += (-mouse.current.y * 2 - camera.position.y) * 0.05
      camera.lookAt(scene.position)

      particles.rotation.y += 0.0002
      lines.rotation.y += 0.0002

      renderer.render(scene, camera)
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)
    animate()

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      renderer.dispose()
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
      }
    }
  }, [])

  return <div ref={containerRef} className="canvas-container opacity-40" />
}
