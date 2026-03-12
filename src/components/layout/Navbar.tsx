"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#story' },
  { name: 'Services', href: '#services' },
  { name: 'Products', href: '#products' },
  { name: 'Impact', href: '#impact' },
  { name: 'Careers', href: '#careers' },
  { name: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [isSidebarPos, setIsSidebarPos] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setIsSidebarPos(true)
    } else {
      setIsSidebarPos(false)
    }
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
    <motion.header
      layout
      transition={{ 
        layout: { duration: 0.8, ease: [0.23, 1, 0.32, 1] },
        opacity: { duration: 0.4 }
      }}
      className="fixed z-[110] flex items-start pointer-events-none"
      style={{
        left: '24px',
        top: '24px',
        right: isSidebarPos ? 'auto' : '24px',
        width: isSidebarPos ? 'auto' : 'calc(100% - 48px)',
        justifyContent: isSidebarPos ? 'flex-start' : 'center',
      }}
    >
      <motion.nav 
        layout
        className={`glass rounded-[2rem] shadow-2xl pointer-events-auto bg-white/10 backdrop-blur-xl border-white/20 flex transition-all duration-700 ${
          isSidebarPos 
            ? 'flex-col py-8 px-4 gap-8 min-w-[80px]' 
            : 'flex-row py-4 px-8 sm:px-10 justify-between w-full max-w-5xl items-center'
        }`}
      >
        <div 
          className={`flex items-center gap-4 group cursor-pointer ${isSidebarPos ? 'flex-col' : 'flex-row'}`}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
            setMobileMenuOpen(false)
          }}
        >
          <div className="w-10 h-10 rounded-xl bg-primary group-hover:rotate-[360deg] transition-transform duration-1000 flex items-center justify-center font-bold text-white shadow-[0_0_20px_rgba(62,128,219,0.6)]">K</div>
          {!isSidebarPos && <span className="font-headline font-bold text-xl tracking-tight text-white">KCS</span>}
        </div>

        {/* Desktop Menu */}
        <ul className={`hidden md:flex items-center ${isSidebarPos ? 'flex-col gap-6' : 'flex-row gap-8 lg:gap-10'}`}>
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1)
            return (
              <li key={item.name} className="relative group">
                <a 
                  href={item.href}
                  className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300 block py-2 ${
                    isActive ? 'text-primary' : 'text-white/60 hover:text-white'
                  } ${isSidebarPos ? '[writing-mode:vertical-lr] rotate-180' : ''}`}
                >
                  {item.name}
                  {!isSidebarPos && (
                    <motion.span 
                      className="absolute bottom-0 left-0 h-[2px] bg-primary"
                      initial={false}
                      animate={{ width: isActive ? '100%' : '0%' }}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    />
                  )}
                  {isSidebarPos && isActive && (
                    <motion.span 
                      className="absolute left-[-10px] top-1/2 -translate-y-1/2 w-[3px] h-full bg-primary rounded-full"
                      layoutId="activeTabSidebar"
                    />
                  )}
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
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: -40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.95, x: -40 }}
            className={`absolute glass rounded-[2.5rem] p-8 md:hidden border border-white/20 shadow-2xl pointer-events-auto ${
              isSidebarPos ? 'left-[100px] top-0' : 'left-0 right-0 top-[85px]'
            }`}
          >
            <ul className="grid grid-cols-2 gap-4">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1)
                return (
                  <li key={item.name}>
                    <a 
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block p-5 rounded-3xl transition-all duration-300 text-sm font-headline font-bold tracking-tight text-center border ${
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
    </motion.header>
  )
}
