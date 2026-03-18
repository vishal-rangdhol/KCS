"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#story' },
  { name: 'Services', href: '#services' },
  { name: 'Products', href: '#products' },
  { name: 'Careers', href: '#careers' },
  { name: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
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
      const element = document.querySelector(item.href)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-[110] flex justify-center p-4 md:p-6 pointer-events-none">
      <nav 
        className={`glass rounded-full pointer-events-auto flex items-center justify-between w-full max-w-5xl transition-all duration-500 border ${
          isScrolled 
            ? 'px-6 py-3 md:px-8 bg-white/10 backdrop-blur-2xl shadow-2xl scale-95 md:scale-100 border-white/20' 
            : 'px-8 py-4 md:px-10 md:py-5 bg-transparent border-transparent'
        }`}
      >
        <div 
          className="flex items-center gap-4 group cursor-pointer"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
            setMobileMenuOpen(false)
          }}
        >
          <div className="relative rounded-xl bg-white/5 flex items-center justify-center shadow-[0_0_20px_rgba(62,128,219,0.3)] border border-white/10 overflow-hidden p-1">
            <Image 
              src="/kcs-logo.png" 
              alt="KCS Logo" 
              width={40}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
          </div>
          <span className="font-headline font-bold text-xl tracking-tight text-white">KCS</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex flex-row gap-8 lg:gap-10 items-center">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1)
            return (
              <li key={item.name} className="relative group">
                <a 
                  href={item.href}
                  className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300 block py-2 ${
                    isActive ? 'text-primary' : 'text-white/60 hover:text-white'
                  }`}
                >
                  {item.name}
                  <motion.span 
                    className="absolute bottom-0 left-0 h-[2px] bg-primary"
                    initial={false}
                    animate={{ width: isActive ? '100%' : '0%' }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                </a>
              </li>
            )
          })}
        </ul>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-white hover:text-primary transition-colors focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute top-[90px] left-4 right-4 glass rounded-[2rem] p-6 md:hidden border border-white/20 shadow-2xl pointer-events-auto"
          >
            <ul className="grid grid-cols-2 gap-3">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1)
                return (
                  <li key={item.name}>
                    <a 
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block p-4 rounded-2xl transition-all duration-300 text-xs font-headline font-bold tracking-tight text-center border ${
                        isActive 
                          ? 'bg-primary/20 border-primary/40 text-primary shadow-[0_0_20px_rgba(62,128,219,0.2)]' 
                          : 'bg-white/5 border-white/5 hover:bg-white/10 text-white/70'
                      }`}
                    >
                      {item.name}
                    </a>
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
