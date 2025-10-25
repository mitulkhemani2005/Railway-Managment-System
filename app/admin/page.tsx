"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Train, Users, TrendingUp, Calendar, Plus } from "lucide-react"

export default function AdminPage() {
  const stats = [
    {
      icon: Train,
      label: "Active Trains",
      value: "245",
      change: "+12%",
      color: "bg-blue-50 text-blue-600",
    },
    {
      icon: Users,
      label: "Total Passengers",
      value: "52.3K",
      change: "+8%",
      color: "bg-green-50 text-green-600",
    },
    {
      icon: TrendingUp,
      label: "Revenue",
      value: "₹2.4Cr",
      change: "+15%",
      color: "bg-purple-50 text-purple-600",
    },
    {
      icon: Calendar,
      label: "Bookings Today",
      value: "1,245",
      change: "+5%",
      color: "bg-orange-50 text-orange-600",
    },
  ]

  const recentBookings = [
    { id: "BK001", passenger: "John Doe", train: "Rajdhani Express", status: "Confirmed" },
    { id: "BK002", passenger: "Jane Smith", train: "Shatabdi Express", status: "Confirmed" },
    { id: "BK003", passenger: "Mike Johnson", train: "Bangalore Express", status: "Pending" },
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Manage trains, schedules, and bookings</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="bg-white rounded-lg p-6 border border-gray-200">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg ${stat.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-green-600 text-sm font-medium">{stat.change}</span>
                </div>
                <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
              </div>
            )
          })}
        </div>

        {/* Management Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Train Management */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Train Management</h2>
              <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg flex items-center gap-2">
                <Plus className="w-5 h-5" />
                <span className="hidden sm:inline">Add Train</span>
              </button>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">Rajdhani Express</p>
                  <p className="text-sm text-gray-600">Mumbai - Delhi</p>
                </div>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">Edit</button>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">Shatabdi Express</p>
                  <p className="text-sm text-gray-600">Delhi - Jaipur</p>
                </div>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">Edit</button>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">Bangalore Express</p>
                  <p className="text-sm text-gray-600">Bangalore - Chennai</p>
                </div>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">Edit</button>
              </div>
            </div>
          </div>

          {/* Recent Bookings */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Bookings</h2>
            <div className="space-y-3">
              {recentBookings.map((booking) => (
                <div key={booking.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{booking.passenger}</p>
                    <p className="text-sm text-gray-600">{booking.train}</p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      booking.status === "Confirmed" ? "bg-green-50 text-green-700" : "bg-yellow-50 text-yellow-700"
                    }`}
                  >
                    {booking.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-white rounded-lg border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition text-left">
              <p className="font-medium text-gray-900">Generate Reports</p>
              <p className="text-sm text-gray-600">View analytics and reports</p>
            </button>
            <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition text-left">
              <p className="font-medium text-gray-900">Manage Users</p>
              <p className="text-sm text-gray-600">View and manage user accounts</p>
            </button>
            <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition text-left">
              <p className="font-medium text-gray-900">System Settings</p>
              <p className="text-sm text-gray-600">Configure system preferences</p>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
