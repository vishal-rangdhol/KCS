
"use client"

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent, useMotionValue, useSpring } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const navItems = [
  { name: 'Home', href: '/#hero' },
  { name: 'Services', href: '/#services' },
  { name: 'Products', href: '/#products' },
  { name: 'About', href: '/#story' },
  { name: 'Careers', href: '/careers', tag: '[HIRING]' },
  { name: 'Contact', href: '/contact' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  const { scrollY } = useScroll()
  const pathname = usePathname()

  const mainNavItems = navItems.filter(item => item.name !== 'Contact')
  const contactItem = navItems.find(item => item.name === 'Contact')

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  useEffect(() => {
    if (pathname === '/contact') {
      setActiveSection('contact')
      return
    }

    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    }

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(handleIntersection, observerOptions)

    navItems.forEach((item) => {
      const id = item.href.includes('#') ? item.href.split('#')[1] : null
      if (id) {
        const element = document.getElementById(id)
        if (element) observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [pathname])

  return (
    <header className="fixed top-0 left-0 right-0 z-[110] flex justify-center p-0 pointer-events-none">
      <nav 
        className={cn(
          "w-full transition-all duration-500 border-b pointer-events-auto flex items-center justify-between px-6 md:px-12",
          isScrolled 
            ? 'py-3 bg-white/90 backdrop-blur-xl border-black/5 shadow-sm' 
            : 'py-5 bg-white/80 backdrop-blur-md border-black/5'
        )}
      >
        <div className="flex-shrink-0">
          <Link 
            href="/"
            className="flex items-center group cursor-pointer"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="relative flex items-center justify-center">
              <Image 
                src="/kcs-logo.png" 
                alt="KCS Logo" 
                width={100}
                height={32}
                className="h-6 md:h-8 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                priority
              />
              <div className="absolute -right-2 top-0 w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_10px_#F97316]" />
            </div>
          </Link>
        </div>

        <div className="hidden md:flex flex-1 justify-center px-4">
          <ul className="flex flex-row gap-8 lg:gap-12 items-center">
            {mainNavItems.map((item) => {
              const id = item.href.includes('#') ? item.href.split('#')[1] : item.href.replace('/', '')
              const isActive = activeSection === id || (pathname === item.href)
              const isHovered = hoveredItem === item.name

              return (
                <li 
                  key={item.name} 
                  className="relative group flex items-center"
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <Link 
                    href={item.href}
                    className={cn(
                      "text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 block py-2 relative flex items-center gap-1.5",
                      isActive 
                        ? 'text-black' 
                        : 'text-gray-500 hover:text-black'
                    )}
                  >
                    {item.name}
                    {item.tag && (
                      <span className="text-[8px] font-mono text-primary font-bold ml-0.5">{item.tag}</span>
                    )}
                    
                    {/* Liquid Underline Protocol */}
                    {isActive && (
                      <motion.div 
                        layoutId="activeUnderline"
                        className="absolute -bottom-1 left-0 right-0 h-[2px] bg-primary rounded-full"
                        transition={{ 
                          type: "spring", 
                          stiffness: 300, 
                          damping: 30 
                        }}
                      >
                        {/* Shimmer Effect */}
                        <motion.div 
                          animate={{ opacity: [0.3, 0.6, 0.3] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute inset-0 bg-white/40 rounded-full"
                        />
                      </motion.div>
                    )}

                    {/* Hover Preview Underline */}
                    {isHovered && !isActive && (
                      <motion.div 
                        layoutId="hoverUnderline"
                        className="absolute -bottom-1 left-0 right-0 h-[2px] bg-primary/20 rounded-full"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="flex items-center gap-2 md:gap-4 flex-shrink-0">
          {contactItem && (
            <div className="hidden md:block">
              <MagneticButton>
                <Link 
                  href={contactItem.href}
                  className={cn(
                    "px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 flex items-center gap-2 border group",
                    pathname === '/contact'
                      ? 'bg-primary border-primary text-white'
                      : 'bg-transparent border-primary text-primary hover:bg-primary hover:text-white'
                  )}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {contactItem.name}
                    <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </Link>
              </MagneticButton>
            </div>
          )}

          <button 
            className="md:hidden p-2 text-black hover:text-primary transition-colors focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-[64px] left-0 right-0 bg-white border-b border-black/5 p-6 md:hidden pointer-events-auto shadow-xl"
          >
            <ul className="flex flex-col gap-6">
              {navItems.map((item) => {
                const id = item.href.includes('#') ? item.href.split('#')[1] : item.href.replace('/', '')
                const isActive = activeSection === id || (pathname === item.href)
                return (
                  <li key={item.name}>
                    <Link 
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "block text-xs font-bold uppercase tracking-widest transition-colors",
                        isActive ? 'text-primary' : 'text-gray-500'
                      )}
                    >
                      {item.name} {item.tag && <span className="text-[8px] ml-1">{item.tag}</span>}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function MagneticButton({ children }: { children: React.ReactNode }) {
  const buttonRef = useRef<HTMLDivElement>(null)
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 })
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth < 768) return
    const div = buttonRef.current
    if (!div) return

    const { clientX, clientY } = e
    const { left, top, width, height } = div.getBoundingClientRect()
    
    const centerX = left + width / 2
    const centerY = top + height / 2
    
    const moveX = clientX - centerX
    const moveY = clientY - centerY
    
    const factor = 0.2
    x.set(moveX * factor)
    y.set(moveY * factor)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block relative"
    >
      <motion.div
        style={{ x: springX, y: springY }}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </div>
  )
}
