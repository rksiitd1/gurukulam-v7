import { Source_Serif_4, IBM_Plex_Mono } from "next/font/google"

export const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
})

export const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  display: "swap",
  weight: ["400", "500"],
})
