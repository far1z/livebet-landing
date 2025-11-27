import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Livebet - TikTok for Prediction Markets',
  description: 'Point your phone at the game. Live markets appear for every moment you\'re watching.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
