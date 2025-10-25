import { CheckCircle, Bell, Lock } from "lucide-react"

export default function WhyChooseSection() {
  const features = [
    {
      icon: CheckCircle,
      title: "Easy Booking",
      description: "Book your tickets in just a few clicks with our intuitive interface",
    },
    {
      icon: Bell,
      title: "Real-Time Updates",
      description: "Get instant notifications about train schedules and platform changes",
    },
    {
      icon: Lock,
      title: "Secure Payments",
      description: "Your transactions are protected with industry-standard encryption",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Why Choose RailwayMS</h2>
          <p className="text-gray-600">Experience the best in railway travel management</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="bg-white rounded-lg p-8 text-center hover:shadow-lg transition">
                <Icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
