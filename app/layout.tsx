import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import BottomBar from "@/components/Bottombar/BottomBar"
import Navbar from "@/components/Navbar/Navbar"

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Propsoch | Home of Intelligent Homebuying",
  description:
    "Propsoch is India's most advanced real estate platform. It's the home of intelligent homebuying",
  openGraph: {
    title: "Propsoch | Home of Intelligent Homebuying",
    description:
      "Propsoch is India's most advanced real estate platform. It's the home of intelligent homebuying",
    images: [
      {
        url: "/propsoch-og.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <main className="">
          <Navbar />
          {children}
          <div className="bottom-0 right-0 left-0 fixed">
            <BottomBar />
          </div>
        </main>
      </body>
    </html>
  )
}
