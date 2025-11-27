'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary'
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit'
}

export default function Button({
  children,
  variant = 'primary',
  onClick,
  className = '',
  type = 'button'
}: ButtonProps) {
  const baseStyles = 'px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300'

  const variants = {
    primary: 'bg-neon-green text-dark-bg hover:bg-neon-cyan glow-green hover:glow-cyan',
    secondary: 'glass-effect text-white hover:border-neon-green hover:glow-green'
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  )
}
