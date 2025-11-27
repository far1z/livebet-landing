'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  {
    number: '01',
    title: 'Point your phone',
    description: 'Open Livebet and point at any live game or stream.',
    icon: '📱',
  },
  {
    number: '02',
    title: 'AI recognizes the moment',
    description: 'We detect what\'s happening in real-time: plays, calls, hype moments.',
    icon: '🤖',
  },
  {
    number: '03',
    title: 'Markets appear instantly',
    description: 'Micro-markets auto-generate around that moment.',
    icon: '⚡',
  },
  {
    number: '04',
    title: 'Tap to play',
    description: 'You choose your side and ride the moment.',
    icon: '🎯',
  },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-6">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            From watching to playing in seconds. No spreadsheets, no delays.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <StepCard {...step} />
            </motion.div>
          ))}
        </div>

        {/* Connecting line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-neon-green via-neon-cyan to-neon-purple opacity-30 origin-left"
          style={{ maxWidth: '80%', margin: '0 auto' }}
        />
      </div>
    </section>
  )
}

function StepCard({ number, title, description, icon }: { number: string; title: string; description: string; icon: string }) {
  return (
    <div className="relative group">
      <motion.div
        whileHover={{ y: -10 }}
        transition={{ duration: 0.3 }}
        className="glass-effect rounded-2xl p-6 h-full relative z-10"
      >
        {/* Number badge */}
        <div className="text-6xl mb-4 opacity-20 font-display font-bold">
          {number}
        </div>

        {/* Icon */}
        <div className="text-6xl mb-4">
          {icon}
        </div>

        {/* Content */}
        <h3 className="text-2xl font-bold mb-3 font-display">
          {title}
        </h3>
        <p className="text-gray-400 leading-relaxed">
          {description}
        </p>
      </motion.div>

      {/* Hover glow effect */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 bg-gradient-to-br from-neon-green/10 to-neon-purple/10 rounded-2xl blur-xl -z-10"
      />
    </div>
  )
}
