"use client"

import { motion } from "framer-motion"
import { Play, BarChart3, Users, Rocket } from "lucide-react"

export default function Hero() {
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

  const mockupVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, delay: 0.4, ease: "easeOut" },
    },
  }

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="text-center">
          <motion.h1 variants={itemVariants} className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Build Your SaaS
            <span className="block bg-gradient-to-r from-blue-400 via-teal-400 to-purple-400 bg-clip-text text-transparent">
              Dreams Into Reality
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            The all-in-one platform that empowers startups and enterprises to launch, scale, and optimize their SaaS
            products with confidence.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 px-8 py-3.5 rounded-xl font-semibold text-base transition-all duration-300"
            >
              Start Free Trial
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(55, 65, 81, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="border border-gray-600 hover:border-gray-400 px-8 py-3.5 rounded-xl font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Play className="w-4 h-4" />
              See Demo
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Product Mockup */}
        <motion.div variants={mockupVariants} initial="hidden" animate="visible" className="relative max-w-5xl mx-auto">
          <motion.div
            animate={{
              scale: [1, 1.02, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-teal-500/20 blur-3xl"
          />

          <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 p-8 shadow-2xl">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-600">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    icon: <BarChart3 className="w-8 h-8 text-blue-400" />,
                    title: "Analytics",
                    description: "Real-time insights",
                    gradient: "from-blue-500/10 to-teal-500/10",
                    border: "border-blue-500/20",
                  },
                  {
                    icon: <Users className="w-8 h-8 text-purple-400" />,
                    title: "Team Management",
                    description: "Collaborate seamlessly",
                    gradient: "from-purple-500/10 to-pink-500/10",
                    border: "border-purple-500/20",
                  },
                  {
                    icon: <Rocket className="w-8 h-8 text-teal-400" />,
                    title: "Deploy Fast",
                    description: "One-click deployment",
                    gradient: "from-teal-500/10 to-green-500/10",
                    border: "border-teal-500/20",
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.8 + index * 0.2,
                      ease: "easeOut",
                    }}
                    whileHover={{
                      scale: 1.05,
                      transition: { duration: 0.2, ease: "easeInOut" },
                    }}
                    className={`bg-gradient-to-br ${feature.gradient} p-4 rounded-lg border ${feature.border} cursor-pointer`}
                  >
                    <div className="mb-2">{feature.icon}</div>
                    <h3 className="font-semibold text-sm mb-1">{feature.title}</h3>
                    <p className="text-xs text-gray-400">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
