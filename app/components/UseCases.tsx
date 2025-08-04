"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Brain, DollarSign, Heart, BarChart3, Smartphone, Globe } from "lucide-react"

export default function UseCases() {
  const scrollRef = useRef(null);
  const ref = useRef(null)
  const isInView = useInView(ref, {  margin: "-100px" })

  const useCases = [
    { icon: <Brain className="w-8 h-8" />, title: "AI Tools", gradient: "from-purple-500 to-pink-500" },
    { icon: <DollarSign className="w-8 h-8" />, title: "Fintech", gradient: "from-green-500 to-teal-500" },
    { icon: <Heart className="w-8 h-8" />, title: "Healthcare", gradient: "from-red-500 to-pink-500" },
    { icon: <BarChart3 className="w-8 h-8" />, title: "Analytics", gradient: "from-blue-500 to-cyan-500" },
    { icon: <Smartphone className="w-8 h-8" />, title: "Mobile Apps", gradient: "from-indigo-500 to-purple-500" },
    { icon: <Globe className="w-8 h-8" />, title: "E-commerce", gradient: "from-orange-500 to-red-500" },
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
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  }

  return (
<section className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
  <div className="max-w-7xl mx-auto">
    {/* Title */}
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="text-center mb-16"
    >
      <h2 className="text-2xl sm:text-4xl font-bold mb-6">
        Perfect for Every
        <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Industry
        </span>
      </h2>
      <p className="text-lg text-gray-300 max-w-3xl mx-auto">
        Our platform adapts to your industry needs, whether you're in AI, fintech, healthcare, or beyond.
      </p>
    </motion.div>

    {/* Horizontal scroll area */}
    <motion.div
  ref={scrollRef}
  variants={containerVariants}
  initial="hidden"
  animate={isInView ? "visible" : "hidden"}
  className="relative h-[280px] sm:h-[320px] overflow-x-auto flex space-x-12 px-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gradient-to-r scrollbar-thumb-purple-500 scrollbar-thumb-rounded-full"
>
  {useCases.map((useCase, index) => {
    // Size logic (optional customization)
    let sizeClass = "min-w-[160px] h-[160px]";
    if (index === 2) sizeClass = "min-w-[220px] h-[220px]";
    else if (index === 1 || index === 3) sizeClass = "min-w-[200px] h-[200px]";
    else if (index === 0 || index === 4) sizeClass = "min-w-[180px] h-[180px]";

    return (
      <motion.div
        key={index}
        onMouseEnter={(e) => {
          // Scroll the item into center smoothly
          e.currentTarget.scrollIntoView({
            behavior: "smooth",
            inline: "center",
            block: "nearest",
          });
        }}
        variants={itemVariants}
        whileHover={{
          scale: 1.1,
          zIndex: 10,
          x: 0,
          transition: { duration: 0.3, ease: "easeOut" },
        }}
        className={`${sizeClass} rounded-full bg-gray-800/50 backdrop-blur-md border border-gray-700 hover:border-gray-500 flex flex-col items-center justify-center text-white text-center p-4 cursor-pointer transition-transform duration-500`}
      >
        <motion.div
          whileHover={{
            scale: 1.2,
            rotate: 8,
            transition: { duration: 0.3, ease: "easeInOut" },
          }}
          className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r ${useCase.gradient} rounded-full flex items-center justify-center mb-4 text-white`}
        >
          {useCase.icon}
        </motion.div>
        <h3 className="font-semibold text-sm sm:text-base group-hover:text-blue-400 transition-colors duration-300">
          {useCase.title}
        </h3>
      </motion.div>
    );
  })}
</motion.div>

  </div>
</section>



  )
}
