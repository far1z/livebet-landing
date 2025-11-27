'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Comparison() {
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
            TV Era vs <span className="text-gradient">TikTok Era</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Prediction markets are stuck in the past. We're bringing them to the future.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {/* Old Markets - TV Era */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative group"
          >
            <div className="glass-effect rounded-3xl p-8 border-2 border-red-500/20">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-3xl font-bold font-display text-red-400">
                  Old Prediction Markets
                </h3>
                <span className="text-4xl">📺</span>
              </div>
              <div className="text-sm text-gray-500 mb-6 font-semibold">
                (TV ERA)
              </div>

              <ul className="space-y-4">
                <ComparisonItem
                  icon="❌"
                  text="Curated, slow, admin-listed markets"
                  negative
                />
                <ComparisonItem
                  icon="❌"
                  text='Macro only: "Will Team A win?", "Will inflation be 3%?"'
                  negative
                />
                <ComparisonItem
                  icon="❌"
                  text="Feels like homework"
                  negative
                />
                <ComparisonItem
                  icon="❌"
                  text="Scheduled, not spontaneous"
                  negative
                />
                <ComparisonItem
                  icon="❌"
                  text="Spreadsheets & research required"
                  negative
                />
              </ul>
            </div>
          </motion.div>

          {/* Livebet - TikTok Era */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative group"
          >
            <div className="glass-effect rounded-3xl p-8 border-2 border-neon-green/50 glow-green">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-3xl font-bold font-display text-gradient">
                  Livebet
                </h3>
                <span className="text-4xl">🚀</span>
              </div>
              <div className="text-sm text-neon-green mb-6 font-semibold">
                (TIKTOK ERA)
              </div>

              <ul className="space-y-4">
                <ComparisonItem
                  icon="✨"
                  text="AI-generated, user-driven markets"
                />
                <ComparisonItem
                  icon="⚡"
                  text="Micro-moments: drives, plays, calls, streamer moments"
                />
                <ComparisonItem
                  icon="🎮"
                  text="Fast, fun, addictive"
                />
                <ComparisonItem
                  icon="🔥"
                  text="Instant, spontaneous markets"
                />
                <ComparisonItem
                  icon="📱"
                  text="Point & play - zero friction"
                />
              </ul>
            </div>

            {/* Extra glow for Livebet side */}
            <motion.div
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-gradient-to-br from-neon-green/20 to-neon-cyan/20 rounded-3xl blur-2xl -z-10"
            />
          </motion.div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-2xl font-bold text-gradient">
            The future of prediction markets isn't curated. It's created.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function ComparisonItem({ icon, text, negative = false }: { icon: string; text: string; negative?: boolean }) {
  return (
    <motion.li
      whileHover={{ x: 5 }}
      className={`flex items-start gap-3 ${negative ? 'text-gray-400' : 'text-white'}`}
    >
      <span className="text-xl flex-shrink-0 mt-0.5">{icon}</span>
      <span className="leading-relaxed">{text}</span>
    </motion.li>
  )
}
