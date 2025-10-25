import { MapPin, Clock, IndianRupee, ArrowRight } from "lucide-react"

export default function PopularRoutes() {
  const routes = [
    {
      from: "Mumbai",
      to: "Delhi",
      time: "16h 30m",
      price: "₹1,450",
    },
    {
      from: "Bangalore",
      to: "Chennai",
      time: "5h 45m",
      price: "₹850",
    },
    {
      from: "Delhi",
      to: "Jaipur",
      time: "4h 30m",
      price: "₹650",
    },
    {
      from: "Kolkata",
      to: "Varanasi",
      time: "12h 15m",
      price: "₹980",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Popular Routes</h2>
        <p className="text-gray-600 mb-8">Frequently traveled destinations with great connections</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {routes.map((route, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-gray-900">{route.from}</span>
                <ArrowRight className="w-4 h-4 text-gray-400" />
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-gray-900">{route.to}</span>
              </div>

              <div className="flex items-center gap-2 mb-3 text-gray-600">
                <Clock className="w-4 h-4" />
                <span className="text-sm">{route.time}</span>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1">
                  <IndianRupee className="w-5 h-5 text-blue-600" />
                  <span className="text-lg font-bold text-gray-900">{route.price}</span>
                </div>
              </div>

              <button className="w-full bg-blue-50 hover:bg-blue-100 text-blue-600 font-medium py-2 rounded-lg transition">
                View Trains
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
