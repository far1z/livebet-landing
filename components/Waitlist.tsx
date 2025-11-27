'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import Button from './Button'

export default function Waitlist() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to join waitlist')
      }

      setSubmitted(true)
      setEmail('')
      setName('')

      // Reset form after 5 seconds
      setTimeout(() => {
        setSubmitted(false)
      }, 5000)

    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="waitlist" ref={ref} className="py-24 px-4 relative overflow-hidden">
      {/* Glowing background */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 bg-gradient-to-br from-neon-green/10 via-neon-cyan/10 to-neon-purple/10 blur-3xl"
      />

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="glass-effect rounded-3xl p-8 md:p-12 glow-green"
        >
          <div className="text-center mb-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display text-4xl md:text-5xl font-bold mb-4"
            >
              Be First When Markets Start
              <br />
              <span className="text-gradient">Following Reality</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-gray-400"
            >
              Join the private beta. Limited spots available.
            </motion.p>
          </div>

          {!submitted ? (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-6 py-4 bg-dark-card border border-white/10 rounded-xl focus:border-neon-green focus:outline-none focus:ring-2 focus:ring-neon-green/20 transition-all text-white placeholder-gray-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-6 py-4 bg-dark-card border border-white/10 rounded-xl focus:border-neon-green focus:outline-none focus:ring-2 focus:ring-neon-green/20 transition-all text-white placeholder-gray-500"
                />
              </div>
              <Button type="submit" variant="primary" className="w-full" disabled={loading}>
                {loading ? 'Joining...' : 'Join the Waitlist'}
              </Button>
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-sm text-center mt-2"
                >
                  {error}
                </motion.p>
              )}
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold text-neon-green mb-2">You're on the list!</h3>
              <p className="text-gray-400">We'll be in touch soon.</p>
            </motion.div>
          )}

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-8 pt-8 border-t border-white/10 grid grid-cols-3 gap-4 text-center"
          >
            <div>
              <div className="text-3xl font-bold text-neon-green">1000+</div>
              <div className="text-sm text-gray-400">On Waitlist</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-neon-cyan">50+</div>
              <div className="text-sm text-gray-400">Beta Testers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-neon-purple">$0</div>
              <div className="text-sm text-gray-400">Cost to Join</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
