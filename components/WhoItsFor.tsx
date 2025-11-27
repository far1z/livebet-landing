'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const personas = [
  {
    title: 'Sports Degens',
    description: 'Every drive, every flag, every call becomes a market. The game never stops, neither do the plays.',
    icon: '🏈',
    color: 'neon-green',
    examples: [
      'Live touchdown predictions',
      'Flag challenge outcomes',
      'Quarter-by-quarter action',
    ]
  },
  {
    title: 'Stream Addicts',
    description: 'Turn Twitch and YouTube Live into interactive game layers. Every moment is playable.',
    icon: '🎮',
    color: 'neon-purple',
    examples: [
      'Streamer rage moments',
      'Boss fight predictions',
      'Chat reaction markets',
    ]
  },
  {
    title: 'Prediction Nerds',
    description: 'Finally: a market primitive that feels like a toy, not a spreadsheet. Data meets dopamine.',
    icon: '📊',
    color: 'neon-cyan',
    examples: [
      'Real-time market dynamics',
      'Crowd wisdom in action',
      'Instant settlement feedback',
    ]
  },
]

export default function WhoItsFor() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-green rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-neon-purple rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-6">
            Who It's <span className="text-gradient">For</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Built for everyone who's ever wanted to play along with what they're watching.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {personas.map((persona, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <PersonaCard {...persona} />
            </motion.div>
          ))}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto">
            <p className="text-2xl md:text-3xl font-bold mb-4">
              If you watch it, you can play it.
            </p>
            <p className="text-lg text-gray-400">
              Livebet turns passive viewing into active participation. Every screen becomes a playground.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function PersonaCard({ title, description, icon, color, examples }: {
  title: string
  description: string
  icon: string
  color: string
  examples: string[]
}) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="relative group h-full"
    >
      <div className="glass-effect rounded-2xl p-8 h-full flex flex-col">
        {/* Icon */}
        <div className="text-6xl mb-4">
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-3xl font-bold mb-4 font-display">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 leading-relaxed mb-6 flex-grow">
          {description}
        </p>

        {/* Examples */}
        <div className="space-y-2">
          {examples.map((example, idx) => (
            <div
              key={idx}
              className={`text-sm bg-${color}/10 border border-${color}/30 rounded-lg px-3 py-2`}
            >
              {example}
            </div>
          ))}
        </div>
      </div>

      {/* Hover glow effect */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className={`absolute inset-0 bg-${color}/20 rounded-2xl blur-xl -z-10`}
      />
    </motion.div>
  )
}
