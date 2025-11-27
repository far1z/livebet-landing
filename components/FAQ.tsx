'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

const faqs = [
  {
    question: 'Is this legal where I live?',
    answer: 'Livebet operates as a prediction market platform. Legality varies by jurisdiction. We\'ll be launching first in jurisdictions where prediction markets are clearly legal, and expanding from there. Check back for updates on availability in your region.',
  },
  {
    question: 'Is this real money?',
    answer: 'Yes. Livebet uses crypto rails for transparent, instant settlements. All markets are settled on-chain with provable fairness. You can deposit, play, and withdraw anytime.',
  },
  {
    question: 'What events will Livebet work on first?',
    answer: 'We\'re starting with NFL and NBA games, plus top Twitch streamers. Our AI is trained on sports and gaming streams first. More content types (esports, reality TV, news) coming soon.',
  },
  {
    question: 'When is the app launching?',
    answer: 'Private beta launches Q1 2025. We\'re accepting waitlist signups now. Early users will get beta access, exclusive perks, and the chance to shape the product.',
  },
  {
    question: 'How does the AI detection work?',
    answer: 'Our computer vision AI watches the same screen you do. It recognizes game states, player positions, referee signals, and key moments in real-time. Then it generates relevant micro-markets on the fly.',
  },
  {
    question: 'Do I need crypto to use this?',
    answer: 'Not initially. We\'ll support easy onboarding with credit cards and instant conversion. Under the hood it\'s crypto for transparency and speed, but you don\'t need to be a crypto expert to play.',
  },
]

export default function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section ref={ref} className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">FAQ</span>
          </h2>
          <p className="text-xl text-gray-400">
            Questions? We got you.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <FAQItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQItem({ question, answer, isOpen, onClick }: {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="glass-effect rounded-xl overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      <div className="p-6 flex items-center justify-between">
        <h3 className="text-lg md:text-xl font-bold pr-4">{question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <svg
            className="w-6 h-6 text-neon-green"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-0 text-gray-400 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
