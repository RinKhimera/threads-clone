import { ClerkProvider } from "@clerk/nextjs"
import { dark, shadesOfPurple } from "@clerk/themes"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Threads | Authentification",
  description: "A Next.js 13 Meta Threads Application",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: shadesOfPurple,
      }}
    >
      <html lang="en">
        <body className={`${inter.className} bg-dark-4`}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
