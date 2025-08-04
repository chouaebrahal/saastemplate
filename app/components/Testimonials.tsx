"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Star } from "lucide-react"

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const testimonials = [
    {
      quote:
        "This platform transformed our startup from idea to $1M ARR in just 8 months. The tools are incredible and the support is unmatched.",
      author: "Sarah Chen",
      role: "CEO, TechFlow",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      quote:
        "We've tried every SaaS platform out there. This is the only one that scales with our enterprise needs while staying simple to use.",
      author: "Marcus Rodriguez",
      role: "CTO, DataVault",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      quote:
        "The analytics and insights helped us optimize our product and increase user engagement by 300%. Game-changing platform.",
      author: "Emily Watson",
      role: "Product Manager, GrowthLab",
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
        ease: "easeOut",
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-4xl font-bold mb-6">Loved by Thousands</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            See what our customers are saying about their experience with our platform.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                y: -5,
                transition: { duration: 0.2, ease: "easeInOut" },
              }}
              className="group"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-3xl border border-gray-700 hover:border-blue-500/50 transition-all duration-500 h-full">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  className="flex mb-4"
                >
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.2 + 0.4 + i * 0.1,
                        ease: "easeOut",
                      }}
                    >
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    </motion.div>
                  ))}
                </motion.div>

                <p className="text-gray-300 mb-6 text-base leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-sm group-hover:text-blue-400 transition-colors duration-300">
                      {testimonial.author}
                    </h4>
                    <p className="text-gray-400 text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
