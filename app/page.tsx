"use client"

import { useState, useEffect } from "react"
import Navigation from "../components/Navigation"
import Hero from "../components/Hero"
import Features from "../components/Features"
import HowItWorks from "../components/HowItWorks"
import UseCases from "../components/UseCases"
import Testimonials from "../components/Testimonials"
import Pricing from "../components/Pricing"
import FAQ from "../components/FAQ"
import FinalCTA from "../components/FinalCTA"
import Footer from "../components/Footer"

export default function SaaSLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null)

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in")
        }
      })
    }, observerOptions)

    const animatedElements = document.querySelectorAll(".animate-on-scroll")
    animatedElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Hero />
      <Features />
      <HowItWorks />
      <UseCases />
      <Testimonials />
      <Pricing />
      <FAQ activeAccordion={activeAccordion} toggleAccordion={toggleAccordion} />
      <FinalCTA />
      <Footer />
    </div>
  )
}
