"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Users, Rocket, Globe } from "lucide-react"

export default function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const steps = [
    {
      step: "01",
      title: "Sign Up & Configure",
      description: "Create your account and set up your project with our intuitive onboarding process.",
      icon: <Users className="w-12 h-12" />,
    },
    {
      step: "02",
      title: "Build & Customize",
      description: "Use our powerful tools and templates to build your SaaS product exactly how you envision it.",
      icon: <Rocket className="w-12 h-12" />,
    },
    {
      step: "03",
      title: "Launch & Scale",
      description: "Deploy with one click and scale automatically as your user base grows worldwide.",
      icon: <Globe className="w-12 h-12" />,
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-4xl font-bold mb-6">How It Works</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Get started in minutes with our simple three-step process.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              className="text-center group"
            >
              <div className="relative mb-8">
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="w-24 h-24 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full flex items-center justify-center mx-auto mb-4 text-white cursor-pointer"
                >
                  {step.icon}
                </motion.div>

                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.2 + 0.3,
                    ease: "easeOut",
                  }}
                  className="absolute -top-2 -right-2 w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center border-2 border-blue-500"
                >
                  <span className="text-sm font-bold text-blue-400">{step.step}</span>
                </motion.div>
              </div>

              <motion.h3
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2 + 0.4,
                  ease: "easeOut",
                }}
                className="text-xl font-semibold mb-4 group-hover:text-blue-400 transition-colors duration-300"
              >
                {step.title}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2 + 0.5,
                  ease: "easeOut",
                }}
                className="text-gray-300 text-base group-hover:text-gray-200 transition-colors duration-300"
              >
                {step.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
