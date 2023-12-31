import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from "next/link";
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <nav className="flex flex-row justify-center w-full">
        <ul className=" w-full flex flex-row justify-around">
          <li>
            <Link href="/shop">Shop</Link>
          </li>
          <li>
            <Link href="/collections">Collections</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          <li>
            <Link href="/shopping-cart">Shopping Cart</Link>
          </li>
        </ul>
        </nav>{children}
      </body>

    </html>
  )
}