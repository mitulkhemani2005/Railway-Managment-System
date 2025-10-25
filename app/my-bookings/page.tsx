"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { MapPin, Calendar } from "lucide-react"

export default function MyBookingsPage() {
  const bookings = [
    {
      id: "BK001",
      trainName: "Rajdhani Express",
      from: "Mumbai",
      to: "Delhi",
      date: "2025-11-15",
      departure: "14:30",
      seats: "A1, A2",
      price: "₹2,900",
      status: "Confirmed",
      pnr: "1234567890",
    },
    {
      id: "BK002",
      trainName: "Shatabdi Express",
      from: "Delhi",
      to: "Jaipur",
      date: "2025-11-20",
      departure: "06:00",
      seats: "B5",
      price: "₹650",
      status: "Confirmed",
      pnr: "1234567891",
    },
    {
      id: "BK003",
      trainName: "Bangalore Express",
      from: "Bangalore",
      to: "Chennai",
      date: "2025-12-01",
      departure: "22:00",
      seats: "C3, C4, C5",
      price: "₹2,550",
      status: "Pending",
      pnr: "1234567892",
    },
  ]

  const getStatusColor = (status: string) => {
    return status === "Confirmed" ? "bg-green-50 text-green-700" : "bg-yellow-50 text-yellow-700"
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">My Bookings</h1>
          <p className="text-gray-600">View and manage your train bookings</p>
        </div>

        <div className="space-y-4">
          {bookings.map((booking) => (
            <div key={booking.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">{booking.trainName}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(booking.status)}`}>
                      {booking.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600 mb-1">Route</p>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4 text-blue-600" />
                        <span className="font-medium text-gray-900">
                          {booking.from} → {booking.to}
                        </span>
                      </div>
                    </div>

                    <div>
                      <p className="text-gray-600 mb-1">Date & Time</p>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4 text-blue-600" />
                        <span className="font-medium text-gray-900">
                          {booking.date} {booking.departure}
                        </span>
                      </div>
                    </div>

                    <div>
                      <p className="text-gray-600 mb-1">Seats</p>
                      <p className="font-medium text-gray-900">{booking.seats}</p>
                    </div>

                    <div>
                      <p className="text-gray-600 mb-1">PNR</p>
                      <p className="font-medium text-gray-900">{booking.pnr}</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-3">
                  <div className="text-right">
                    <p className="text-gray-600 text-sm mb-1">Total Price</p>
                    <p className="text-2xl font-bold text-gray-900">{booking.price}</p>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  )
}
