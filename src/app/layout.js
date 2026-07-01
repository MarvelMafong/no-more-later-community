import { Inter } from 'next/font/google'
import { Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata = {
  title: 'No More Later — Stop Waiting. Start Doing.',
  description: 'A free personal growth community for people who are tired of procrastinating and ready to take action through books, accountability, and discipline.',
  keywords: 'personal growth, accountability, stop procrastinating, free community, discipline, book reading, self improvement',
  metadataBase: new URL('https://nomorelater.com'),
  openGraph: {
    title: 'No More Later — Stop Waiting. Start Doing.',
    description: 'A free personal growth community for people who are tired of procrastinating and ready to take action.',
    url: 'https://nomorelater.com',
    siteName: 'No More Later',
    type: 'website',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'No More Later Community',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'No More Later — Stop Waiting. Start Doing.',
    description: 'A free personal growth community. Join us on WhatsApp, Telegram, Instagram, TikTok, Facebook, LinkedIn and X.',
    images: ['/images/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  )
}