import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Kaliyug Technologies | Multi-Brand Tech Innovation",
  description:
    "Building prototypes, digital transformation, and next-gen AI solutions from Pune, India. Multi-brand technology innovation platform.",
  keywords: "AI, Prototyping, Digital Transformation, Technology Solutions, Pune",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#0A0A0A" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
