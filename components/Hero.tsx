'use client'

import { motion } from 'framer-motion'
import Button from './Button'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-20">
      {/* Animated background gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-neon-cyan/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            >
              <span className="text-gradient">TikTok</span> for
              <br />
              Prediction Markets.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
            >
              Point your phone at the game. Live markets appear for every moment you're watching.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button variant="primary" onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}>
                Get Early Access
              </Button>
              <Button variant="secondary">
                Watch Demo
              </Button>
            </motion.div>
          </motion.div>

          {/* Right content - Phone mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-sm">
              {/* Phone frame */}
              <div className="relative bg-dark-card rounded-[3rem] p-4 glass-effect glow-green">
                <div className="bg-dark-bg rounded-[2.5rem] p-6 aspect-[9/19]">
                  {/* Status bar */}
                  <div className="flex justify-between items-center mb-6 text-xs">
                    <span>9:41</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-4 bg-white/20 rounded-full" />
                      <div className="w-4 h-4 bg-white/20 rounded-full" />
                      <div className="w-4 h-4 bg-white/20 rounded-full" />
                    </div>
                  </div>

                  {/* Live game thumbnail */}
                  <motion.div
                    animate={{
                      boxShadow: [
                        '0 0 20px rgba(0, 255, 148, 0.3)',
                        '0 0 40px rgba(0, 240, 255, 0.5)',
                        '0 0 20px rgba(0, 255, 148, 0.3)',
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="relative bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 rounded-2xl p-4 mb-4 aspect-video flex items-center justify-center"
                  >
                    <div className="text-center">
                      <div className="text-4xl mb-2">🏈</div>
                      <div className="text-xs text-neon-green">LIVE</div>
                    </div>
                  </motion.div>

                  {/* Market cards */}
                  <div className="space-y-3">
                    <MarketCard
                      question="Will this drive end in a touchdown?"
                      yes={65}
                      no={35}
                      delay={0}
                    />
                    <MarketCard
                      question="Will this call get overturned?"
                      yes={42}
                      no={58}
                      delay={0.2}
                    />
                    <MarketCard
                      question="Over 10 yards this play?"
                      yes={71}
                      no={29}
                      delay={0.4}
                    />
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-8 -right-8 bg-neon-green text-dark-bg px-4 py-2 rounded-full font-bold text-sm glow-green"
              >
                AI Powered
              </motion.div>
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-8 -left-8 bg-neon-cyan text-dark-bg px-4 py-2 rounded-full font-bold text-sm glow-cyan"
              >
                Real-time
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-neon-green rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  )
}

function MarketCard({ question, yes, no, delay }: { question: string; yes: number; no: number; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      className="glass-effect rounded-xl p-3"
    >
      <p className="text-xs mb-2 font-medium">{question}</p>
      <div className="grid grid-cols-2 gap-2">
        <button className="bg-neon-green/20 hover:bg-neon-green/30 text-neon-green rounded-lg py-2 text-xs font-bold transition-colors">
          YES {yes}%
        </button>
        <button className="bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg py-2 text-xs font-bold transition-colors">
          NO {no}%
        </button>
      </div>
    </motion.div>
  )
}
