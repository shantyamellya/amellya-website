import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import { Settings } from '@/components/common/Settings'
import { ThemeProvider } from '@/provider/themesProvider'

export const metadata: Metadata = {
  title: 'Shanty Amellya - Portfolio',
  description: 'Shanty Amellya | Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="mb-10 p-5 md:p-8">{children}</main>
          <Settings />
          {/* <Tawk /> */}
        </ThemeProvider>
      </body>
    </html>
  )
}
