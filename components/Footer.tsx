'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-white/10 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-neon-green/5 to-transparent" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center md:text-left"
          >
            <h3 className="text-3xl font-bold font-display">
              <span className="text-gradient">Livebet</span>
            </h3>
            <p className="text-gray-500 text-sm mt-1">
              TikTok for Prediction Markets
            </p>
          </motion.div>

          {/* Social Links */}
          <div className="flex gap-6">
            <SocialLink
              href="https://twitter.com/livebet"
              icon={
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              }
              label="X (Twitter)"
            />
            <SocialLink
              href="mailto:hello@livebet.com"
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              }
              label="Contact"
            />
            <SocialLink
              href="#"
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              }
              label="Privacy (Coming Soon)"
            />
          </div>
        </div>

        {/* Bottom text */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
          <p>© 2025 Livebet. All rights reserved.</p>
          <p className="mt-2">
            Point your phone. Markets appear. The future is instant.
          </p>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <motion.a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="w-12 h-12 rounded-full glass-effect flex items-center justify-center text-gray-400 hover:text-neon-green hover:border-neon-green transition-colors group"
      aria-label={label}
    >
      {icon}
    </motion.a>
  )
}
