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

    const isMobile = window.innerWidth < 768
    const particlesCount = isMobile ? 300 : 600
    const positions = new Float32Array(particlesCount * 3)
    const velocities = new Float32Array(particlesCount * 3)
    
    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 12
      velocities[i] = (Math.random() - 0.5) * 0.003
    }

    const particlesGeometry = new THREE.BufferGeometry()
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: isMobile ? 0.03 : 0.02,
      color: 0xF97316, // Solar Orange
      transparent: true,
      opacity: 0.15,
      blending: THREE.NormalBlending 
    })
    
    const particles = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particles)

    const secondaryCount = isMobile ? 80 : 200
    const secPositions = new Float32Array(secondaryCount * 3)
    for (let i = 0; i < secondaryCount * 3; i++) {
      secPositions[i] = (Math.random() - 0.5) * 15
    }
    const secGeometry = new THREE.BufferGeometry()
    secGeometry.setAttribute('position', new THREE.BufferAttribute(secPositions, 3))
    const secMaterial = new THREE.PointsMaterial({
      size: 0.025,
      color: 0xEA580C, // Hover Orange
      transparent: true,
      opacity: 0.1,
      blending: THREE.NormalBlending
    })
    const secParticles = new THREE.Points(secGeometry, secMaterial)
    scene.add(secParticles)

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

    let animationId: number
    const animate = () => {
      animationId = requestAnimationFrame(animate)

      const positionsAttr = particles.geometry.attributes.position as THREE.BufferAttribute
      
      for (let i = 0; i < particlesCount; i++) {
        const i3 = i * 3
        positionsAttr.array[i3] += velocities[i3]
        positionsAttr.array[i3 + 1] += velocities[i3 + 1]
        positionsAttr.array[i3 + 2] += velocities[i3 + 2]

        if (Math.abs(positionsAttr.array[i3]) > 7) velocities[i3] *= -1
        if (Math.abs(positionsAttr.array[i3 + 1]) > 7) velocities[i3 + 1] *= -1
        if (Math.abs(positionsAttr.array[i3 + 2]) > 7) velocities[i3 + 2] *= -1
      }

      positionsAttr.needsUpdate = true

      camera.position.x += (mouse.current.x * 1.5 - camera.position.x) * 0.015
      camera.position.y += (-mouse.current.y * 1.5 - camera.position.y) * 0.015
      camera.lookAt(scene.position)

      particles.rotation.y += 0.00015
      secParticles.rotation.y -= 0.00008

      renderer.render(scene, camera)
    }

    window.addEventListener('resize', handleResize)
    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove)
    }
    animate()

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationId)
      renderer.dispose()
      particlesGeometry.dispose()
      particlesMaterial.dispose()
      secGeometry.dispose()
      secMaterial.dispose()
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement)
      }
    }
  }, [])

  return <div ref={containerRef} className="canvas-container opacity-60" />
}