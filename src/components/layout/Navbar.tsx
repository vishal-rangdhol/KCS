
"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { name: 'Home', href: '/#hero' },
  { name: 'Products', href: '/#products' },
  { name: 'Services', href: '/#services' },
  { name: 'Technology', href: '/#technology' },
  { name: 'About', href: '/#story' },
  { name: 'Careers', href: '/#careers' },
  { name: 'Contact', href: '/#contact' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const { scrollY } = useScroll()
  const pathname = usePathname()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  useEffect(() => {
    if (pathname !== '/') {
      setActiveSection('')
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
      const id = item.href.split('#')[1]
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [pathname])

  return (
    <header className="fixed top-0 left-0 right-0 z-[110] flex justify-center p-4 md:p-6 pointer-events-none">
      <nav 
        className={`glass rounded-full pointer-events-auto flex items-center justify-between w-full max-w-6xl transition-all duration-500 border ${
          isScrolled 
            ? 'px-6 py-3 md:px-8 bg-white/80 backdrop-blur-2xl shadow-[0_8px_32px_rgba(249,115,22,0.15)] scale-95 md:scale-100 border-primary/20 bg-gradient-to-r from-white/80 via-primary/[0.03] to-white/80' 
            : 'px-8 py-4 md:px-10 md:py-5 bg-transparent border-transparent shadow-none'
        }`}
      >
        <Link 
          href="/"
          className="flex items-center group cursor-pointer"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="relative flex items-center justify-center">
            <Image 
              src="/kcs-logo.png" 
              alt="KCS Logo" 
              width={120}
              height={40}
              className="h-10 w-auto object-contain antialiased"
              style={{ imageRendering: 'auto' }}
              priority
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex flex-row gap-4 lg:gap-6 items-center">
          {navItems.map((item) => {
            const id = item.href.split('#')[1]
            const isActive = activeSection === id
            const isContact = item.name === 'Contact'

            if (isContact) {
              return (
                <li key={item.name} className="ml-2">
                  <Link 
                    href={item.href}
                    className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 flex items-center gap-2 border-2 ${
                      isActive 
                        ? 'bg-primary text-white border-primary shadow-[0_0_20px_rgba(249,115,22,0.3)]' 
                        : 'border-primary/40 text-primary hover:bg-primary hover:text-white hover:border-primary shadow-sm'
                    }`}
                  >
                    {item.name}
                    <ArrowUpRight size={12} className={isActive ? 'opacity-100' : 'opacity-60'} />
                  </Link>
                </li>
              )
            }

            return (
              <li key={item.name} className="relative group">
                <Link 
                  href={item.href}
                  className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-300 block py-2 ${
                    isActive ? 'text-primary' : 'text-foreground/60 hover:text-foreground'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.span 
                      layoutId="activeUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-foreground hover:text-primary transition-colors focus:outline-none"
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
            className="absolute top-[90px] left-4 right-4 glass rounded-[2rem] p-6 md:hidden border border-primary/20 shadow-2xl pointer-events-auto bg-white/95 backdrop-blur-xl"
          >
            <ul className="grid grid-cols-2 gap-3">
              {navItems.map((item) => {
                const id = item.href.split('#')[1]
                const isActive = activeSection === id
                return (
                  <li key={item.name}>
                    <Link 
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block p-4 rounded-2xl transition-all duration-300 text-[10px] font-headline font-bold tracking-tight text-center border ${
                        isActive 
                          ? 'bg-primary/20 border-primary/40 text-primary shadow-[0_0_20px_rgba(249,115,22,0.1)]' 
                          : 'bg-black/5 border-black/5 hover:bg-black/10 text-foreground/70'
                      }`}
                    >
                      {item.name}
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
