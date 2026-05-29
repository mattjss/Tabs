import { motion } from 'framer-motion'
import React from 'react'

interface ShimmerProps {
  children: React.ReactNode
  duration?: number
  spread?: number
}

export function Shimmer({ children, duration = 2, spread = 1.5 }: ShimmerProps) {
  const peak = Math.min(0.95, 0.3 * spread)
  return (
    <motion.span
      style={{
        display: 'inline',
        background: `linear-gradient(90deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,${peak}) 50%, rgba(255,255,255,0.2) 100%)`,
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        color: 'transparent' as const,
      }}
      animate={{ backgroundPosition: ['100% 0', '-100% 0'] }}
      transition={{ duration, repeat: Infinity, ease: 'linear' }}
    >
      {children}
    </motion.span>
  )
}
