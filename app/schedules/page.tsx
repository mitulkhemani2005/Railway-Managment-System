"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Clock, MapPin, IndianRupee } from "lucide-react"

export default function SchedulesPage() {
  const schedules = [
    {
      id: 1,
      trainName: "Rajdhani Express",
      trainNumber: "12001",
      from: "Mumbai",
      to: "Delhi",
      departure: "14:30",
      arrival: "07:00",
      duration: "16h 30m",
      price: "₹1,450",
      seats: 245,
    },
    {
      id: 2,
      trainName: "Shatabdi Express",
      trainNumber: "12002",
      from: "Delhi",
      to: "Jaipur",
      departure: "06:00",
      arrival: "10:30",
      duration: "4h 30m",
      price: "₹650",
      seats: 180,
    },
    {
      id: 3,
      trainName: "Bangalore Express",
      trainNumber: "12003",
      from: "Bangalore",
      to: "Chennai",
      departure: "22:00",
      arrival: "03:45",
      duration: "5h 45m",
      price: "₹850",
      seats: 320,
    },
    {
      id: 4,
      trainName: "Varanasi Express",
      trainNumber: "12004",
      from: "Kolkata",
      to: "Varanasi",
      departure: "18:15",
      arrival: "06:30",
      duration: "12h 15m",
      price: "₹980",
      seats: 210,
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Train Schedules</h1>
          <p className="text-gray-600">View all available train schedules and timings</p>
        </div>

        <div className="space-y-4">
          {schedules.map((schedule) => (
            <div
              key={schedule.id}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition"
            >
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Train</p>
                  <p className="font-semibold text-gray-900">{schedule.trainName}</p>
                  <p className="text-xs text-gray-500">#{schedule.trainNumber}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-1">Route</p>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-600" />
                    <span className="font-medium text-gray-900">{schedule.from}</span>
                    <span className="text-gray-400">→</span>
                    <span className="font-medium text-gray-900">{schedule.to}</span>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-1">Timing</p>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-600" />
                    <span className="text-sm text-gray-900">
                      {schedule.departure} - {schedule.arrival}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{schedule.duration}</p>
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-1">Price</p>
                  <div className="flex items-center gap-1">
                    <IndianRupee className="w-4 h-4 text-blue-600" />
                    <span className="font-semibold text-gray-900">{schedule.price}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{schedule.seats} seats available</p>
                </div>

                <div className="text-right">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition">
                    Book Now
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
