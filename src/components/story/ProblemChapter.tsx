"use client"

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function ProblemChapter() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const text1Ref = useRef<HTMLDivElement>(null)
  const text2Ref = useRef<HTMLDivElement>(null)
  const text3Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const container = containerRef.current
    if (!section || !container) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=300%",
        pin: true,
        scrub: 1,
        anticipatePin: 1,
      }
    })

    tl.fromTo(text1Ref.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 })
      .to(text1Ref.current, { opacity: 0, y: -50, duration: 1 }, "+=1")
      
      .fromTo(text2Ref.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 })
      .to(text2Ref.current, { opacity: 0, y: -50, duration: 1 }, "+=1")
      
      .fromTo(text3Ref.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 })
      .to(text3Ref.current, { opacity: 0, y: -50, duration: 1 }, "+=1")

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} id="problem" className="relative h-screen w-full bg-background overflow-hidden">
      {/* Background Gradient Effect - Solar Mode */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--primary)_0%,_transparent_70%)] opacity-5 pointer-events-none" />
      
      <div ref={containerRef} className="relative h-full w-full flex items-center justify-center px-4 sm:px-12">
        <div className="max-w-7xl w-full text-center space-y-0 relative">
          
          <div ref={text1Ref} className="absolute inset-0 flex flex-col items-center justify-center opacity-0 pointer-events-none">
            <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-[7rem] font-bold leading-tight tracking-tighter px-2 md:px-4 text-foreground font-headline uppercase">
              Technology is evolving <br className="hidden md:block" />
              <span className="text-primary italic">faster than businesses</span> <br className="hidden md:block" />
              can adapt.
            </h2>
          </div>

          <div ref={text2Ref} className="absolute inset-0 flex flex-col items-center justify-center opacity-0 pointer-events-none">
            <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-[7rem] font-bold leading-tight tracking-tighter px-2 md:px-4 text-foreground font-headline uppercase">
              Data is everywhere, <br className="hidden md:block" />
              but <span className="text-primary">insights are rare.</span>
            </h2>
          </div>

          <div ref={text3Ref} className="absolute inset-0 flex flex-col items-center justify-center opacity-0 pointer-events-none">
            <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-[7rem] font-bold leading-tight tracking-tighter px-2 md:px-4 text-foreground font-headline uppercase">
              Security threats <br className="hidden md:block" />
              <span className="text-destructive">grow every second.</span>
            </h2>
          </div>

        </div>
      </div>
    </section>
  )
}
