import { Train, Users, Clock, TrendingUp } from "lucide-react"

export default function StatsCards() {
  const stats = [
    {
      icon: Train,
      value: "245",
      label: "Active Trains",
      change: "+12%",
      color: "text-blue-600",
    },
    {
      icon: Users,
      value: "15.2K",
      label: "Daily Passengers",
      change: "+8%",
      color: "text-blue-600",
    },
    {
      icon: Clock,
      value: "94.5%",
      label: "On-Time Rate",
      change: "+2.3%",
      color: "text-blue-600",
    },
    {
      icon: TrendingUp,
      value: "₹34.2L",
      label: "Revenue Today",
      change: "+15%",
      color: "text-blue-600",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
                <div className="flex items-start justify-between mb-4">
                  <Icon className={`w-8 h-8 ${stat.color}`} />
                  <span className="text-green-600 text-sm font-medium">{stat.change}</span>
                </div>
                <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
