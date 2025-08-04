"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Plus, Minus } from "lucide-react"

export default function FAQ() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null)
  const ref = useRef(null)
  const isInView = useInView(ref, {  margin: "-100px" })

  const faqs = [
    {
      question: "How quickly can I get started?",
      answer:
        "You can be up and running in less than 5 minutes. Our onboarding process is designed to get you from signup to your first deployment as quickly as possible.",
    },
    {
      question: "Do you offer a free trial?",
      answer:
        "Yes! We offer a 14-day free trial with full access to all Pro features. No credit card required to get started.",
    },
    {
      question: "Can I change my plan at any time?",
      answer:
        "Absolutely. You can upgrade, downgrade, or cancel your plan at any time. Changes take effect immediately and we'll prorate any billing adjustments.",
    },
    {
      question: "What kind of support do you provide?",
      answer:
        "We provide email support for all users, priority support for Pro users, and 24/7 phone support for Enterprise customers. Our average response time is under 2 hours.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Security is our top priority. We use enterprise-grade encryption, are SOC 2 compliant, and undergo regular security audits. Your data is always protected and never shared.",
    },
  ]

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-300">Everything you need to know about our platform.</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
                ease: "easeOut",
              }}
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 overflow-hidden hover:border-gray-600 transition-colors duration-300">
                <motion.button
                  onClick={() => toggleAccordion(index)}
                  whileHover={{ backgroundColor: "rgba(55, 65, 81, 0.5)" }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="w-full px-6 py-4 text-left flex items-center justify-between transition-colors duration-300"
                >
                  <span className="font-semibold text-base pr-4">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: activeAccordion === index ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    {activeAccordion === index ? (
                      <Minus className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    )}
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {activeAccordion === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4">
                        <motion.p
                          initial={{ y: -10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -10, opacity: 0 }}
                          transition={{ duration: 0.2, delay: 0.1, ease: "easeOut" }}
                          className="text-gray-300 leading-relaxed text-sm"
                        >
                          {faq.answer}
                        </motion.p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
