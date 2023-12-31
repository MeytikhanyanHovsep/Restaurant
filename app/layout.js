import { Inter } from 'next/font/google'
import './globals.css'
import Componetns from '@/components'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ inter.className + " text-[#353535] bg-[#fcfcfc] max-w-[100vw] overflow-x-hidden" }>
        <Componetns >{ children }</Componetns>
      </body>
    </html>
  )
}
