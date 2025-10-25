"use client"

import { useState } from "react"
import { MapPin, Calendar, ArrowRightLeft, Search } from "lucide-react"

export default function HeroSection() {
  const [from, setFrom] = useState("")
  const [to, setTo] = useState("")
  const [date, setDate] = useState("")

  return (
    <section className="bg-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gray-600 text-sm font-medium mb-2">Trusted by millions of travelers</p>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Your Journey Starts Here</h1>
          <p className="text-gray-600 text-lg">
            Book train tickets across India with ease. Fast, reliable, and affordable travel solutions.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">From</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Select departure station"
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">To</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Select arrival station"
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <ArrowRightLeft className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="mm/dd/yyyy"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-lg flex items-center justify-center gap-2">
              <Search className="w-5 h-5" />
              Search Trains
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
