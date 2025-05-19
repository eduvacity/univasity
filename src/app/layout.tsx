import type { Metadata } from "next"
import { Mada, Manrope, Outfit } from "next/font/google"
import localFont from "next/font/local"
import type React from "react"
import "./globals.css"
import Head from "next/head"

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
})
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
})
const mada = Mada({
  variable: "--font-mada",
  subsets: ["latin"],
  display: "swap",
})
export const bradley = localFont({
  src: [
    {
      path: "../../public/fonts/bradleys_pen-webfont.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/bradleyhanditctt-bold-webfont.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-bradley",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Univasity",
  description:
    "Univasity helps you design a learning experience that’s flexible, deeply human, and built for how people actually learn today, wherever they are",
  metadataBase: new URL("https://univasity.com"),
  openGraph: {
    title: "Univasity",
    description:
      "Univasity helps you design a learning experience that’s flexible, deeply human, and built for how people actually learn today, wherever they are",
    url: "https://univasity.com",
    siteName: "Univasity Digital",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Univasity",
    description:
      "Univasity helps you design a learning experience that’s flexible, deeply human, and built for how people actually learn today, wherever they are",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <Head>
        {/* Standard favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />

        {/* High-resolution PNG */}
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon-192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/favicon-512.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/favicon-16.png"
        />

        {/* Apple touch icon */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
      </Head>
      <body
        className={`${outfit.variable} ${manrope.variable} ${mada.variable} ${bradley.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
