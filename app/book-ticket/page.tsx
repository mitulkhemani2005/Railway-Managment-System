import Header from "@/components/header"
import Footer from "@/components/footer"

export default function BookTicketPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Book Your Ticket</h1>
        <p className="text-gray-600 mb-8">Search and book train tickets easily</p>
        <div className="bg-gray-50 rounded-lg p-8 text-center">
          <p className="text-gray-600">Booking system coming soon...</p>
        </div>
      </div>
      <Footer />
    </main>
  )
}
