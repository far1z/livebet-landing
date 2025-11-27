'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const roadmapItems = [
  {
    phase: 'Phase 1',
    title: 'Private Beta: Sports + Streams',
    description: 'Launch with NFL, NBA, and top Twitch streamers. Prove the concept with early adopters.',
    status: 'Q1 2025',
    icon: '🚀',
  },
  {
    phase: 'Phase 2',
    title: 'Shared Moments',
    description: 'When multiple viewers watch the same event, markets emerge automatically. Collective reality.',
    status: 'Q2 2025',
    icon: '👥',
  },
  {
    phase: 'Phase 3',
    title: 'Creator Markets',
    description: 'Streamers spawn markets for their audience. Turn your stream into an interactive prediction layer.',
    status: 'Q3 2025',
    icon: '✨',
  },
  {
    phase: 'Phase 4',
    title: 'Global Launch',
    description: 'Open to everyone, everywhere. Any event, any moment, any screen.',
    status: 'Q4 2025',
    icon: '🌍',
  },
]

export default function Roadmap() {
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
            The <span className="text-gradient">Roadmap</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            From private beta to the prediction layer for reality itself.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-green via-neon-cyan to-neon-purple transform -translate-x-1/2" />

          <div className="space-y-12">
            {roadmapItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <RoadmapItem {...item} index={index} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <p className="text-xl text-gray-400">
            Want to be part of the journey?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
            className="mt-4 px-8 py-4 bg-neon-green text-dark-bg rounded-full font-bold text-lg glow-green hover:glow-cyan transition-all"
          >
            Join the Waitlist
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

function RoadmapItem({ phase, title, description, status, icon, index }: {
  phase: string
  title: string
  description: string
  status: string
  icon: string
  index: number
}) {
  const isLeft = index % 2 === 0

  return (
    <div className={`lg:grid lg:grid-cols-2 lg:gap-8 items-center ${isLeft ? '' : 'lg:flex-row-reverse'}`}>
      {/* Content */}
      <div className={`${isLeft ? 'lg:text-right lg:pr-12' : 'lg:col-start-2 lg:pl-12'}`}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="glass-effect rounded-2xl p-6 relative"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-semibold text-neon-cyan">{phase}</span>
            <span className="text-3xl">{icon}</span>
          </div>
          <h3 className="text-2xl font-bold mb-2 font-display">{title}</h3>
          <p className="text-gray-400 leading-relaxed mb-3">{description}</p>
          <div className="inline-block px-4 py-1 bg-neon-green/20 text-neon-green rounded-full text-sm font-semibold">
            {status}
          </div>
        </motion.div>
      </div>

      {/* Timeline dot */}
      <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
        <motion.div
          initial={{ scale: 0 }}
          animate={isLeft ? { scale: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
          className="w-4 h-4 bg-neon-green rounded-full glow-green"
        />
      </div>

      {/* Spacer for alternate layout */}
      {isLeft && <div className="hidden lg:block" />}
    </div>
  )
}
