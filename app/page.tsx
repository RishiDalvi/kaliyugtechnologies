"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

export default function Home() {
  const [activeNav, setActiveNav] = useState("home")
  const [scrolled, setScrolled] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const productsRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll("[data-animate]").forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Update nav based on scroll position
      const heroPos = heroRef.current?.offsetTop || 0
      const productsPos = productsRef.current?.offsetTop || 0
      const aboutPos = aboutRef.current?.offsetTop || 0
      const servicesPos = servicesRef.current?.offsetTop || 0

      if (window.scrollY < heroPos + 500) setActiveNav("home")
      else if (window.scrollY < productsPos + 500) setActiveNav("products")
      else if (window.scrollY < aboutPos + 500) setActiveNav("about")
      else if (window.scrollY < servicesPos + 500) setActiveNav("services")
      else setActiveNav("contact")
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="bg-[#0A0A0A] text-white font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#1A1A2E]/95 backdrop-blur-sm py-3" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <button
            onClick={() => scrollToSection(heroRef)}
            className="text-xl font-bold hover:text-[#FF9500] transition-colors"
          >
            KT
          </button>

          <div className="hidden md:flex gap-8">
            {["home", "products", "about", "services", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => {
                  if (item === "home") scrollToSection(heroRef)
                  else if (item === "products") scrollToSection(productsRef)
                  else if (item === "about") scrollToSection(aboutRef)
                  else if (item === "services") scrollToSection(servicesRef)
                }}
                className={`capitalize font-semibold text-sm transition-colors ${
                  activeNav === item ? "text-[#FF9500] border-b-2 border-[#FF9500]" : "hover:text-[#FF9500]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="hidden md:flex gap-4">
            <a href="https://www.instagram.com/kaliyug.technologies" className="hover:text-[#FF9500] transition-colors">
              Instagram
            </a>
            <a href="https://www.linkedin.com/in/rushikesh-dalavi/" className="hover:text-[#FF9500] transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0A0A0A] via-[#1A1A2E] to-[#0A0A0A] px-4 text-center"
      >
        <div className="mb-8" data-animate>
          <div className="w-24 h-24 mx-auto bg-[#FF9500] rounded-full flex items-center justify-center text-4xl font-bold">
            KT
          </div>
        </div>

        <h1 className="text-5xl sm:text-6xl font-black font-sans max-w-4xl leading-tight mb-6" data-animate>
          From Lines of Code to Leaders of Change
        </h1>

        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mb-10 font-light" data-animate>
          Building prototypes · Digital transformation · Next-gen solutions
        </p>

        <button
          onClick={() => scrollToSection(productsRef)}
          className="px-8 py-3 bg-[#FF9500] text-black font-bold rounded-lg hover:bg-[#FFD700] hover:shadow-lg hover:shadow-[#FF9500]/50 transition-all duration-300"
          data-animate
        >
          Explore Products
        </button>
      </section>

      {/* Products Section */}
      <section ref={productsRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1A1A2E]">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16" data-animate>
          Our Products
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            "Techmatelabs",
            "Politix Matrix",
            "Sanscript",
            "AdSpecta",
            "Jalseva",
            "Laone",
            "KrishDrishti",
            "Ravi Research Labs",
            "BitFit India",
            "WeedKiller",
          ].map((product, idx) => (
            <a
              key={idx}
              href="#"
              className="group p-6 rounded-lg bg-[#0A0A0A] hover:bg-[#2A2A3E] transition-all duration-300 hover:shadow-lg hover:shadow-[#FF9500]/30 text-center"
              data-animate
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-[#FF9500] rounded-full flex items-center justify-center font-bold text-black group-hover:bg-[#FFD700] transition-colors">
                {product.charAt(0)}
              </div>
              <h3 className="font-bold text-lg group-hover:text-[#FF9500] transition-colors">{product}</h3>
            </a>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12" data-animate>
            Innovation Without Borders
          </h2>

          <p className="text-lg text-gray-300 text-center mb-16 leading-relaxed" data-animate>
            Kaliyug Technologies crafts next-gen AI prototypes and digital solutions from Pune, India. Powering multiple
            specialized brands across technology domains.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { stat: "10+", label: "Products" },
              { stat: "AI", label: "First Solutions" },
              { stat: "Pune", label: "Expertise" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-[#FFD700] rounded-lg text-center hover:shadow-lg hover:shadow-[#FFD700]/50 transition-all"
                data-animate
              >
                <div className="text-3xl font-black text-[#0A0A0A] mb-2">{item.stat}</div>
                <div className="text-[#0A0A0A] font-semibold">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1A1A2E]">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16" data-animate>
          Services
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: "🧠", title: "AI Transformation" },
            { icon: "⚙️", title: "Rapid Prototyping" },
            { icon: "🗺️", title: "Data Insights" },
            { icon: "🔒", title: "Secure Solutions" },
          ].map((service, idx) => (
            <div
              key={idx}
              className="p-8 bg-[#0A0A0A] rounded-lg hover:bg-[#2A2A3E] transition-all hover:shadow-lg hover:shadow-[#FF9500]/30 text-center"
              data-animate
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="font-bold text-lg text-[#FF9500]">{service.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A0A0A] border-t border-[#2A2A3E] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-[#FF9500] mb-4">Kaliyug Technologies</h3>
              <p className="text-gray-400 text-sm">Building the future of AI.</p>
            </div>

            <div>
              <h3 className="font-bold text-[#FF9500] mb-4">Quick Links</h3>
              <div className="space-y-2 text-sm">
                <a href="#" className="text-gray-400 hover:text-[#FF9500] transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-[#FF9500] transition-colors block">
                  Terms & Conditions
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-[#FF9500] mb-4">Connect</h3>
              <p className="text-gray-400 text-sm">techmatelabs@gmail.com</p>
            </div>
          </div>

          <div className="border-t border-[#2A2A3E] pt-8 text-center text-gray-500 text-sm">
            © 2026 Kaliyug Technologies | Pune City, India
          </div>
        </div>
      </footer>
    </div>
  )
}
