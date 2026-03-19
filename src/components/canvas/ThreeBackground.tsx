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
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: 'high-performance' 
    })
    
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    containerRef.current.appendChild(renderer.domElement)

    // Optimized Particle Counts for Performance
    const particlesCount = 1200 // Reduced from 2000 for faster initialization
    const positions = new Float32Array(particlesCount * 3)
    const velocities = new Float32Array(particlesCount * 3)
    
    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 12
      velocities[i] = (Math.random() - 0.5) * 0.008
    }

    const particlesGeometry = new THREE.BufferGeometry()
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.025,
      color: 0xF97316, 
      transparent: true,
      opacity: 0.4,
      blending: THREE.NormalBlending 
    })
    
    const particles = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particles)

    // Secondary Particles
    const secondaryCount = 500 // Reduced from 800
    const secPositions = new Float32Array(secondaryCount * 3)
    for (let i = 0; i < secondaryCount * 3; i++) {
      secPositions[i] = (Math.random() - 0.5) * 15
    }
    const secGeometry = new THREE.BufferGeometry()
    secGeometry.setAttribute('position', new THREE.BufferAttribute(secPositions, 3))
    const secMaterial = new THREE.PointsMaterial({
      size: 0.035,
      color: 0xFBBF24,
      transparent: true,
      opacity: 0.25,
      blending: THREE.NormalBlending
    })
    const secParticles = new THREE.Points(secGeometry, secMaterial)
    scene.add(secParticles)

    // Optimized Connections
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xF97316,
      transparent: true,
      opacity: 0.05
    })
    
    const maxConnections = 300 // Reduced from 500
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
        
        positionsAttr.array[i3] += velocities[i3]
        positionsAttr.array[i3 + 1] += velocities[i3 + 1]
        positionsAttr.array[i3 + 2] += velocities[i3 + 2]

        if (Math.abs(positionsAttr.array[i3]) > 7) velocities[i3] *= -1
        if (Math.abs(positionsAttr.array[i3 + 1]) > 7) velocities[i3 + 1] *= -1
        if (Math.abs(positionsAttr.array[i3 + 2]) > 7) velocities[i3 + 2] *= -1

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

      camera.position.x += (mouse.current.x * 2.5 - camera.position.x) * 0.05
      camera.position.y += (-mouse.current.y * 2.5 - camera.position.y) * 0.05
      camera.lookAt(scene.position)

      particles.rotation.y += 0.0003
      secParticles.rotation.y -= 0.0002
      lines.rotation.y += 0.0003

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
