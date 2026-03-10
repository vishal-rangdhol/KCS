
"use client"

import { useState } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#story' },
  { name: 'Services', href: '#services' },
  { name: 'Products', href: '#products' },
  { name: 'Careers', href: '#careers' },
  { name: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [isBottomPos, setIsBottomPos] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 10) {
      setIsBottomPos(true)
    } else {
      setIsBottomPos(false)
    }
  })

  return (
    <motion.header
      layout
      transition={{ 
        layout: { duration: 0.8, ease: [0.23, 1, 0.32, 1] },
        opacity: { duration: 0.4 }
      }}
      style={{
        top: isBottomPos ? 'auto' : '16px',
        bottom: isBottomPos ? '16px' : 'auto',
      }}
      className="fixed left-0 right-0 z-[100] flex justify-center px-4 sm:px-6 pointer-events-none"
    >
      <motion.nav 
        layout
        className="glass rounded-full px-6 sm:px-8 py-3 sm:py-4 flex items-center justify-between w-full max-w-5xl shadow-2xl border border-white/10 pointer-events-auto"
      >
        <div 
          className="flex items-center gap-2 sm:gap-3 group cursor-pointer"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
            setMobileMenuOpen(false)
          }}
        >
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-primary group-hover:rotate-[360deg] transition-transform duration-700 flex items-center justify-center font-bold text-xs sm:text-sm text-white shadow-[0_0_15px_rgba(62,128,219,0.5)]">K</div>
          <span className="font-headline font-bold text-base sm:text-lg tracking-tight">KCS <span className="text-primary">Narrative</span></span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => (
            <li key={item.name} className="relative group">
              <a 
                href={item.href}
                className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors block py-1"
              >
                {item.name}
                <motion.span 
                  className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary"
                  whileHover={{ width: '100%' }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-foreground focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: isBottomPos ? 20 : -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: isBottomPos ? 20 : -20 }}
            style={{
              top: isBottomPos ? 'auto' : '70px',
              bottom: isBottomPos ? '70px' : 'auto',
            }}
            className="absolute left-4 right-4 glass rounded-3xl p-6 md:hidden border border-white/10 shadow-2xl pointer-events-auto"
          >
            <ul className="grid grid-cols-2 gap-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block p-4 rounded-2xl bg-white/5 hover:bg-primary/20 text-sm font-headline font-bold tracking-tight hover:text-primary transition-all text-center border border-white/5"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
