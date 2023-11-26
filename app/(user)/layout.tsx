import type { Metadata } from 'next'
import '../globals.css'
import { Lexend_Deca, Caveat } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Provider from '@/components/Hooks/Provider'
import AnimatePresenc from '@/components/AnimatePresence'

const lexend_deca = Lexend_Deca({
  subsets: ['latin'],
  variable: '--font-lex',
  display: 'swap',
  // adjustFontFallback: false
})
const caveat = Caveat({
  subsets: ['latin'],
  display: 'swap',
  // adjustFontFallback: false,
  variable: "--font-cav"
})


export const metadata: Metadata = {
  title: 'Lewis Meta | Portfolio website',
  description: 'Welcome to my portfolio website. Lets work together',
  generator: 'Next.js',
  applicationName: 'Next.js',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'JavaScript'],
  authors: [{ name: 'Seb' }, { name: 'Josh', url: 'https://nextjs.org' }],
  creator: 'Lewis Meta',
  publisher: 'Lewis Meta',
  openGraph: {
    title: 'Lewis Meta Portfolio',
    description: 'Welcome to my portfolio website. Lets work together',
    url: 'https://nextjs.org',
    siteName: 'LewMeta',
    images: [
      {
        url: 'https://nextjs.org/og.png',
        width: 800,
        height: 600,
      },
      {
        url: 'https://nextjs.org/og-alt.png',
        width: 1800,
        height: 1600,
        alt: 'My custom alt',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${caveat.variable} ${lexend_deca.variable} font-lex bg-lightBlue dark:bg-black dark:text-primaryText text-dark leading-5 scroll-smooth text-sm font-normal`}>
        <Provider>
          <Navbar />
          <AnimatePresenc>
            <main >
              {children}
            </main>
          </AnimatePresenc>
          <Footer />
        </Provider>
      </body>
    </html>
  )
}