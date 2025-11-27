'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const features = [
  {
    title: 'AI-Powered Event Detection',
    description: 'Our computer vision AI recognizes what\'s happening on screen in real-time - plays, calls, key moments.',
    icon: '🧠',
    gradient: 'from-neon-purple to-neon-cyan',
  },
  {
    title: 'Micro-Markets for Every Moment',
    description: 'Not just "who wins" - predict drives, plays, calls, reactions. Thousands of moments, thousands of markets.',
    icon: '⚡',
    gradient: 'from-neon-green to-neon-cyan',
  },
  {
    title: 'Built for Streams, Sports & Live Events',
    description: 'Works on NFL, NBA, Twitch, YouTube Live - anywhere there\'s action happening right now.',
    icon: '🎮',
    gradient: 'from-neon-cyan to-neon-purple',
  },
  {
    title: 'Onchain Prediction Rails',
    description: 'Transparent, instant settlements powered by crypto rails. No middleman, no delays.',
    icon: '⛓️',
    gradient: 'from-neon-purple to-neon-green',
  },
  {
    title: 'Friends & Group Moments',
    description: 'When multiple users watch the same moment, markets emerge automatically. Shared reality, shared markets.',
    icon: '👥',
    gradient: 'from-neon-green to-neon-purple',
  },
  {
    title: 'Zero Friction',
    description: 'Point your phone. Markets appear. Tap to play. That\'s it. No setup, no spreadsheets, no friction.',
    icon: '🎯',
    gradient: 'from-neon-cyan to-neon-green',
  },
]

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-6">
            Built for the <span className="text-gradient">Moment</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Every feature designed to turn watching into playing.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <FeatureCard {...feature} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ title, description, icon, gradient }: { title: string; description: string; icon: string; gradient: string }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="relative group h-full"
    >
      <div className="glass-effect rounded-2xl p-6 h-full flex flex-col">
        {/* Icon with gradient background */}
        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-3xl mb-4`}>
          {icon}
        </div>

        {/* Content */}
        <h3 className="text-2xl font-bold mb-3 font-display">
          {title}
        </h3>
        <p className="text-gray-400 leading-relaxed flex-grow">
          {description}
        </p>
      </div>

      {/* Hover glow effect */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 rounded-2xl blur-xl -z-10`}
        style={{ filter: 'blur(20px)' }}
      />
    </motion.div>
  )
}
