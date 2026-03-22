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
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const { scrollY } = useScroll()
  const pathname = usePathname()

  const mainNavItems = navItems.filter(item => item.name !== 'Contact')
  const contactItem = navItems.find(item => item.name === 'Contact')

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  useEffect(() => {
    if (pathname !== '/') {
      const id = pathname.replace('/', '') || 'hero'
      setActiveSection(id)
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
      if (item.href.startsWith('/#')) {
        const id = item.href.split('#')[1]
        const element = document.getElementById(id)
        if (element) observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [pathname])

  return (
    <header className="fixed top-0 left-0 right-0 z-[110] flex justify-center p-4 md:p-6 pointer-events-none">
      <nav 
        className={`rounded-full pointer-events-auto flex items-center justify-between w-full max-w-[95%] transition-all duration-700 border ${
          isScrolled 
            ? 'px-6 py-3 md:px-8 bg-background/80 backdrop-blur-xl shadow-2xl border-primary/10 scale-95 md:scale-100' 
            : 'px-8 py-4 md:px-10 md:py-5 border-border/10 bg-background shadow-sm'
        }`}
      >
        {/* Left: Logo */}
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
                width={110}
                height={36}
                className="h-9 w-auto object-contain antialiased"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Center: Main Nav */}
        <div className="hidden md:flex flex-1 justify-center px-4">
          <ul className="flex flex-row gap-4 lg:gap-10 items-center">
            {mainNavItems.map((item) => {
              const id = item.href.includes('#') ? item.href.split('#')[1] : item.href.replace('/', '')
              const isActive = activeSection === id || (pathname === item.href)

              return (
                <li key={item.name} className="relative group">
                  <Link 
                    href={item.href}
                    className={`text-[9px] font-bold uppercase tracking-[0.3em] transition-all duration-500 block py-2 ${
                      isActive ? 'text-primary' : 'text-foreground/60 hover:text-foreground'
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <motion.span 
                        layoutId="activeUnderline"
                        className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-primary z-10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>

        {/* Right: Contact & Mobile Toggle */}
        <div className="flex items-center gap-4 flex-shrink-0">
          {contactItem && (
            <div className="hidden md:block">
              <Link 
                href={contactItem.href}
                className={`px-5 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-[0.3em] transition-all duration-500 flex items-center gap-2 border-2 ${
                  activeSection === 'contact' || pathname === contactItem.href
                    ? 'bg-primary text-white border-primary shadow-xl' 
                    : 'border-primary/20 text-foreground hover:bg-primary hover:text-white hover:border-primary shadow-sm'
                }`}
              >
                {contactItem.name}
                <ArrowUpRight size={10} className="opacity-60 group-hover:opacity-100" />
              </Link>
            </div>
          )}

          <button 
            className="md:hidden p-2 text-foreground/80 hover:text-primary transition-colors focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute top-[90px] left-4 right-4 bg-background rounded-[2.5rem] p-6 md:hidden border border-border/10 shadow-2xl pointer-events-auto"
          >
            <ul className="grid grid-cols-2 gap-4">
              {navItems.map((item) => {
                const id = item.href.includes('#') ? item.href.split('#')[1] : item.href.replace('/', '')
                const isActive = activeSection === id || (pathname === item.href)
                return (
                  <li key={item.name}>
                    <Link 
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block p-5 rounded-2xl transition-all duration-500 text-[10px] font-headline font-bold tracking-widest text-center border ${
                        isActive 
                          ? 'bg-primary/10 border-primary/40 text-primary' 
                          : 'bg-card/40 border-border/10 hover:bg-card text-foreground/70'
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
