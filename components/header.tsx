"use client"

import Link from "next/link"
import { User } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 text-white p-2 rounded">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 3h18v2H3V3zm0 4h18v2H3V7zm0 4h18v2H3v-2zm0 4h18v2H3v-2zm0 4h18v2H3v-2z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-gray-900">RailwayMS</span>
          </div>

          <nav className="hidden md:flex gap-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium">
              Home
            </Link>
            <Link href="/schedules" className="text-gray-700 hover:text-gray-900 font-medium">
              Schedules
            </Link>
            <Link href="/book-ticket" className="text-gray-700 hover:text-gray-900 font-medium">
              Book Ticket
            </Link>
            <Link href="/my-bookings" className="text-gray-700 hover:text-gray-900 font-medium">
              My Bookings
            </Link>
            <Link href="/admin" className="text-gray-700 hover:text-gray-900 font-medium">
              Admin
            </Link>
          </nav>

          <button className="p-2 hover:bg-gray-100 rounded-full">
            <User className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>
    </header>
  )
}
