# Railway Management System (RailwayMS)

A modern, full-stack railway ticket booking and management system built with Next.js, React, TypeScript, and Tailwind CSS. This application provides a seamless experience for users to browse train schedules, book tickets, and manage their bookings, while offering administrators comprehensive management tools.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Configuration](#configuration)
- [HTML Structure](#html-structure)
- [JavaScript/TypeScript Code](#javascripttypescript-code)
- [Database Schema](#database-schema)
- [API Endpoints](#api-endpoints)
- [Usage Guide](#usage-guide)
- [Development](#development)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

### User Features
- **Browse Trains**: View available trains with real-time schedules and pricing
- **Book Tickets**: Easy-to-use booking interface with date and station selection
- **Manage Bookings**: View, modify, and cancel existing bookings
- **Search Functionality**: Find trains by route, date, and time
- **Responsive Design**: Seamless experience on desktop, tablet, and mobile devices
- **Real-time Updates**: Live train status and availability updates

### Admin Features
- **Dashboard**: Comprehensive overview of system metrics
- **Train Management**: Add, edit, and manage train schedules
- **Booking Management**: View and manage all user bookings
- **Revenue Tracking**: Monitor revenue and passenger statistics
- **User Management**: Manage user accounts and permissions
- **Reports**: Generate detailed reports on bookings and revenue

## Tech Stack

### Frontend
- **Framework**: Next.js 16.0.0 (React 19.2.0)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4.1.9 with PostCSS
- **UI Components**: shadcn/ui (Radix UI based)
- **Form Handling**: React Hook Form with Zod validation
- **Charts**: Recharts for data visualization
- **Icons**: Lucide React
- **Animations**: Tailwind CSS Animate
- **Notifications**: Sonner Toast

### Backend
- **Runtime**: Node.js (Next.js API Routes)
- **Database**: SQL (PostgreSQL recommended)
- **ORM**: Direct SQL queries (can be extended with Prisma/Drizzle)

### Development Tools
- **Package Manager**: pnpm
- **Build Tool**: Turbopack (Next.js 16 default)
- **Linting**: ESLint
- **Version Control**: Git

## Project Structure

\`\`\`
railway-management/
├── app/
│   ├── layout.tsx              # Root layout with metadata
│   ├── page.tsx                # Homepage
│   ├── globals.css             # Global styles and Tailwind config
│   ├── admin/
│   │   └── page.tsx            # Admin dashboard
│   ├── book-ticket/
│   │   └── page.tsx            # Ticket booking page
│   ├── my-bookings/
│   │   └── page.tsx            # User bookings management
│   └── schedules/
│       └── page.tsx            # Train schedules page
├── components/
│   ├── header.tsx              # Navigation header
│   ├── hero-section.tsx        # Hero section with booking form
│   ├── stats-cards.tsx         # Statistics cards component
│   ├── popular-routes.tsx      # Popular routes section
│   ├── why-choose-section.tsx  # Features section
│   ├── footer.tsx              # Footer component
│   ├── theme-provider.tsx      # Theme provider
│   └── ui/                     # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── select.tsx
│       ├── table.tsx
│       └── ... (60+ UI components)
├── hooks/
│   ├── use-mobile.ts           # Mobile detection hook
│   └── use-toast.ts            # Toast notification hook
├── lib/
│   └── utils.ts                # Utility functions
├── public/
│   ├── placeholder-logo.png
│   ├── placeholder-logo.svg
│   ├── placeholder-user.jpg
│   └── placeholder.svg
├── styles/
│   └── globals.css             # Additional global styles
├── package.json                # Dependencies
├── tsconfig.json               # TypeScript configuration
├── next.config.mjs             # Next.js configuration
├── postcss.config.mjs          # PostCSS configuration
├── tailwind.config.js          # Tailwind CSS configuration
└── components.json             # shadcn/ui configuration
\`\`\`

## Installation

### Prerequisites
- Node.js 18+ or higher
- pnpm (recommended) or npm/yarn
- Git

### Steps

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/yourusername/railway-management.git
   cd railway-management
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   pnpm install
   # or
   npm install
   \`\`\`

3. **Set up environment variables**
   \`\`\`bash
   cp .env.example .env.local
   \`\`\`

4. **Configure database** (see Database Schema section)

5. **Run development server**
   \`\`\`bash
   pnpm dev
   # or
   npm run dev
   \`\`\`

6. **Open browser**
   Navigate to \`http://localhost:3000\`

## Configuration

### Environment Variables

Create a \`.env.local\` file in the root directory:

\`\`\`env
# Database Configuration
DATABASE_URL=postgresql://user:password@localhost:5432/railway_db

# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:3000/api

# Authentication (if implementing)
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=http://localhost:3000

# Analytics
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
\`\`\`

### Database Setup

The application uses PostgreSQL. Create a new database:

\`\`\`sql
CREATE DATABASE railway_db;
\`\`\`

## HTML Structure

### Header Component HTML

The header component provides navigation and branding:

\`\`\`html
<header class="bg-white border-b border-gray-200">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-16">
      <!-- Logo Section -->
      <div class="flex items-center gap-2">
        <div class="bg-blue-600 text-white p-2 rounded">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 3h18v2H3V3zm0 4h18v2H3V7zm0 4h18v2H3v-2zm0 4h18v2H3v-2zm0 4h18v2H3v-2z" />
          </svg>
        </div>
        <span class="text-xl font-bold text-gray-900">RailwayMS</span>
      </div>

      <!-- Navigation Menu -->
      <nav class="hidden md:flex gap-8">
        <a href="/" class="text-gray-700 hover:text-gray-900 font-medium">Home</a>
        <a href="/schedules" class="text-gray-700 hover:text-gray-900 font-medium">Schedules</a>
        <a href="/book-ticket" class="text-gray-700 hover:text-gray-900 font-medium">Book Ticket</a>
        <a href="/my-bookings" class="text-gray-700 hover:text-gray-900 font-medium">My Bookings</a>
        <a href="/admin" class="text-gray-700 hover:text-gray-900 font-medium">Admin</a>
      </nav>

      <!-- User Profile Button -->
      <button class="p-2 hover:bg-gray-100 rounded-full">
        <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      </button>
    </div>
  </div>
</header>
\`\`\`

### Hero Section HTML

The hero section contains the main booking form:

\`\`\`html
<section class="bg-blue-50 py-16">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Hero Title -->
    <div class="text-center mb-12">
      <p class="text-gray-600 text-sm font-medium mb-2">Trusted by millions of travelers</p>
      <h1 class="text-5xl font-bold text-gray-900 mb-4">Your Journey Starts Here</h1>
      <p class="text-gray-600 text-lg">
        Book train tickets across India with ease. Fast, reliable, and affordable travel solutions.
      </p>
    </div>

    <!-- Booking Form -->
    <div class="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
      <div class="space-y-6">
        <!-- From and To Fields -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- From Station -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">From</label>
            <div class="relative">
              <svg class="absolute left-3 top-3 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              <input
                type="text"
                placeholder="Select departure station"
                class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <!-- To Station -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">To</label>
            <div class="relative">
              <svg class="absolute left-3 top-3 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              <input
                type="text"
                placeholder="Select arrival station"
                class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        <!-- Swap Button -->
        <div class="flex justify-center">
          <button class="p-2 hover:bg-gray-100 rounded-full">
            <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16V4m0 0L3 8m4-4l4 4" />
            </svg>
          </button>
        </div>

        <!-- Date Field -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Date</label>
          <div class="relative">
            <svg class="absolute left-3 top-3 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <input
              type="text"
              placeholder="mm/dd/yyyy"
              class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <!-- Search Button -->
        <button class="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-lg flex items-center justify-center gap-2">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          Search Trains
        </button>
      </div>
    </div>
  </div>
</section>
\`\`\`

## JavaScript/TypeScript Code

### Header Component (TypeScript/React)

\`\`\`typescript
"use client"

import Link from "next/link"
import { User } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 text-white p-2 rounded">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 3h18v2H3V3zm0 4h18v2H3V7zm0 4h18v2H3v-2zm0 4h18v2H3v-2zm0 4h18v2H3v-2z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-gray-900">RailwayMS</span>
          </div>

          {/* Navigation */}
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

          {/* User Profile */}
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <User className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>
    </header>
  )
}
\`\`\`

### Hero Section Component (TypeScript/React)

\`\`\`typescript
"use client"

import { useState } from "react"
import { MapPin, Calendar, ArrowRightLeft, Search } from 'lucide-react'

export default function HeroSection() {
  // State management for form inputs
  const [from, setFrom] = useState("")
  const [to, setTo] = useState("")
  const [date, setDate] = useState("")

  // Handle swap stations
  const handleSwap = () => {
    const temp = from
    setFrom(to)
    setTo(temp)
  }

  // Handle search
  const handleSearch = () => {
    if (!from || !to || !date) {
      alert("Please fill all fields")
      return
    }
    console.log("Searching trains:", { from, to, date })
    // API call would go here
  }

  return (
    <section className="bg-blue-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Title */}
        <div className="text-center mb-12">
          <p className="text-gray-600 text-sm font-medium mb-2">Trusted by millions of travelers</p>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Your Journey Starts Here</h1>
          <p className="text-gray-600 text-lg">
            Book train tickets across India with ease. Fast, reliable, and affordable travel solutions.
          </p>
        </div>

        {/* Booking Form */}
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
          <div className="space-y-6">
            {/* From and To Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* From Station */}
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

              {/* To Station */}
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

            {/* Swap Button */}
            <div className="flex justify-center">
              <button 
                onClick={handleSwap}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <ArrowRightLeft className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Date Field */}
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

            {/* Search Button */}
            <button 
              onClick={handleSearch}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-lg flex items-center justify-center gap-2 transition-colors"
            >
              <Search className="w-5 h-5" />
              Search Trains
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
\`\`\`

### Home Page Component (TypeScript/React)

\`\`\`typescript
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import StatsCards from "@/components/stats-cards"
import PopularRoutes from "@/components/popular-routes"
import WhyChooseSection from "@/components/why-choose-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <StatsCards />
      <PopularRoutes />
      <WhyChooseSection />
      <Footer />
    </main>
  )
}
\`\`\`

### API Route Example (TypeScript)

\`\`\`typescript
// app/api/trains/route.ts
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  try {
    // Example: Fetch trains from database
    const trains = [
      {
        id: 1,
        name: "Express 101",
        number: "EX101",
        from: "Mumbai",
        to: "Delhi",
        departure: "10:00 AM",
        arrival: "08:00 PM",
        price: 2500,
        seats: 45,
      },
      {
        id: 2,
        name: "Rajdhani 202",
        number: "RJ202",
        from: "Bangalore",
        to: "Chennai",
        departure: "02:00 PM",
        arrival: "08:30 PM",
        price: 1800,
        seats: 32,
      },
    ]

    return NextResponse.json(trains, { status: 200 })
  } catch (error) {
    console.error("Error fetching trains:", error)
    return NextResponse.json(
      { error: "Failed to fetch trains" },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate input
    if (!body.name || !body.number) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Example: Save train to database
    const newTrain = {
      id: Math.random(),
      ...body,
      createdAt: new Date(),
    }

    return NextResponse.json(newTrain, { status: 201 })
  } catch (error) {
    console.error("Error creating train:", error)
    return NextResponse.json(
      { error: "Failed to create train" },
      { status: 500 }
    )
  }
}
\`\`\`

### Booking Service (TypeScript)

\`\`\`typescript
// lib/booking-service.ts
interface BookingData {
  userId: number
  scheduleId: number
  numberOfSeats: number
  passengerDetails: Array<{
    name: string
    age: number
  }>
}

interface BookingResponse {
  success: boolean
  bookingId?: string
  message: string
}

export async function createBooking(data: BookingData): Promise<BookingResponse> {
  try {
    // Validate booking data
    if (!data.userId || !data.scheduleId || data.numberOfSeats <= 0) {
      return {
        success: false,
        message: "Invalid booking data",
      }
    }

    // API call to create booking
    const response = await fetch("/api/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      throw new Error("Booking failed")
    }

    const result = await response.json()

    return {
      success: true,
      bookingId: result.id,
      message: "Booking created successfully",
    }
  } catch (error) {
    console.error("Booking error:", error)
    return {
      success: false,
      message: "Failed to create booking",
    }
  }
}

export async function getBookings(userId: number) {
  try {
    const response = await fetch(\`/api/bookings?userId=\${userId}\`)

    if (!response.ok) {
      throw new Error("Failed to fetch bookings")
    }

    return await response.json()
  } catch (error) {
    console.error("Error fetching bookings:", error)
    return []
  }
}

export async function cancelBooking(bookingId: string): Promise<BookingResponse> {
  try {
    const response = await fetch(\`/api/bookings/\${bookingId}\`, {
      method: "DELETE",
    })

    if (!response.ok) {
      throw new Error("Cancellation failed")
    }

    return {
      success: true,
      message: "Booking cancelled successfully",
    }
  } catch (error) {
    console.error("Cancellation error:", error)
    return {
      success: false,
      message: "Failed to cancel booking",
    }
  }
}
\`\`\`

## Database Schema

### SQL Schema

\`\`\`sql
-- Users Table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  phone VARCHAR(20),
  role ENUM('user', 'admin') DEFAULT 'user',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Trains Table
CREATE TABLE trains (
  id SERIAL PRIMARY KEY,
  train_name VARCHAR(100) NOT NULL,
  train_number VARCHAR(20) UNIQUE NOT NULL,
  total_seats INT NOT NULL,
  available_seats INT NOT NULL,
  status ENUM('active', 'inactive', 'maintenance') DEFAULT 'active',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Routes Table
CREATE TABLE routes (
  id SERIAL PRIMARY KEY,
  train_id INT NOT NULL,
  departure_station VARCHAR(100) NOT NULL,
  arrival_station VARCHAR(100) NOT NULL,
  departure_time TIME NOT NULL,
  arrival_time TIME NOT NULL,
  distance_km INT,
  base_fare DECIMAL(10, 2) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (train_id) REFERENCES trains(id) ON DELETE CASCADE
);

-- Schedules Table
CREATE TABLE schedules (
  id SERIAL PRIMARY KEY,
  route_id INT NOT NULL,
  schedule_date DATE NOT NULL,
  available_seats INT NOT NULL,
  status ENUM('scheduled', 'running', 'completed', 'cancelled') DEFAULT 'scheduled',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (route_id) REFERENCES routes(id) ON DELETE CASCADE,
  UNIQUE KEY unique_schedule (route_id, schedule_date)
);

-- Bookings Table
CREATE TABLE bookings (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  schedule_id INT NOT NULL,
  booking_reference VARCHAR(20) UNIQUE NOT NULL,
  number_of_seats INT NOT NULL,
  total_price DECIMAL(10, 2) NOT NULL,
  status ENUM('confirmed', 'pending', 'cancelled') DEFAULT 'pending',
  booking_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  travel_date DATE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (schedule_id) REFERENCES schedules(id) ON DELETE CASCADE
);

-- Passengers Table
CREATE TABLE passengers (
  id SERIAL PRIMARY KEY,
  booking_id INT NOT NULL,
  passenger_name VARCHAR(100) NOT NULL,
  passenger_age INT,
  seat_number VARCHAR(10),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (booking_id) REFERENCES bookings(id) ON DELETE CASCADE
);

-- Payments Table
CREATE TABLE payments (
  id SERIAL PRIMARY KEY,
  booking_id INT NOT NULL,
  amount DECIMAL(10, 2) NOT NULL,
  payment_method ENUM('credit_card', 'debit_card', 'upi', 'net_banking') NOT NULL,
  transaction_id VARCHAR(100) UNIQUE,
  status ENUM('pending', 'completed', 'failed', 'refunded') DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (booking_id) REFERENCES bookings(id) ON DELETE CASCADE
);

-- Create Indexes for Performance
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_bookings_user_id ON bookings(user_id);
CREATE INDEX idx_bookings_schedule_id ON bookings(schedule_id);
CREATE INDEX idx_schedules_route_id ON schedules(route_id);
CREATE INDEX idx_schedules_date ON schedules(schedule_date);
CREATE INDEX idx_routes_train_id ON routes(train_id);
CREATE INDEX idx_passengers_booking_id ON passengers(booking_id);
CREATE INDEX idx_payments_booking_id ON payments(booking_id);
\`\`\`

### Database Relationships

\`\`\`
users (1) ──→ (many) bookings
trains (1) ──→ (many) routes
routes (1) ──→ (many) schedules
schedules (1) ──→ (many) bookings
bookings (1) ──→ (many) passengers
bookings (1) ──→ (many) payments
\`\`\`

## API Endpoints

### Authentication
- \`POST /api/auth/register\` - Register new user
- \`POST /api/auth/login\` - User login
- \`POST /api/auth/logout\` - User logout
- \`GET /api/auth/me\` - Get current user

### Trains
- \`GET /api/trains\` - Get all trains
- \`GET /api/trains/:id\` - Get train details
- \`POST /api/trains\` - Create train (Admin)
- \`PUT /api/trains/:id\` - Update train (Admin)
- \`DELETE /api/trains/:id\` - Delete train (Admin)

### Routes
- \`GET /api/routes\` - Get all routes
- \`GET /api/routes/search\` - Search routes by stations and date
- \`POST /api/routes\` - Create route (Admin)
- \`PUT /api/routes/:id\` - Update route (Admin)

### Schedules
- \`GET /api/schedules\` - Get all schedules
- \`GET /api/schedules/:id\` - Get schedule details
- \`POST /api/schedules\` - Create schedule (Admin)
- \`PUT /api/schedules/:id\` - Update schedule (Admin)

### Bookings
- \`GET /api/bookings\` - Get user bookings
- \`GET /api/bookings/:id\` - Get booking details
- \`POST /api/bookings\` - Create booking
- \`PUT /api/bookings/:id\` - Update booking
- \`DELETE /api/bookings/:id\` - Cancel booking

### Payments
- \`POST /api/payments\` - Process payment
- \`GET /api/payments/:id\` - Get payment details

## Usage Guide

### For Users

1. **Browse Trains**
   - Visit the homepage to see popular routes
   - Use the search form to find trains by departure and arrival stations

2. **Book a Ticket**
   - Click "Book Ticket" in the navigation
   - Select departure and arrival stations
   - Choose travel date
   - Select number of seats
   - Enter passenger details
   - Complete payment

3. **Manage Bookings**
   - Click "My Bookings" to view all bookings
   - View booking details and status
   - Cancel bookings if needed
   - Download booking confirmation

### For Administrators

1. **Access Admin Dashboard**
   - Click "Admin" in the navigation
   - View key metrics and statistics

2. **Manage Trains**
   - Add new trains with details
   - Update train information
   - Manage train status

3. **Manage Routes**
   - Create new routes
   - Set departure/arrival times
   - Configure pricing

4. **View Reports**
   - Monitor bookings and revenue
   - Track passenger statistics
   - Generate custom reports

## Development

### Running Development Server

\`\`\`bash
pnpm dev
\`\`\`

The application will be available at \`http://localhost:3000\`

### Building for Production

\`\`\`bash
pnpm build
pnpm start
\`\`\`

### Code Quality

\`\`\`bash
# Run linting
pnpm lint

# Format code
pnpm format
\`\`\`

### Adding New Components

Use shadcn/ui CLI to add new components:

\`\`\`bash
npx shadcn@latest add [component-name]
\`\`\`

## Deployment

### Deploy to Vercel

1. **Push to GitHub**
   \`\`\`bash
   git push origin main
   \`\`\`

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Configure environment variables
   - Deploy

3. **Set Environment Variables in Vercel**
   - Go to Project Settings → Environment Variables
   - Add all required variables from \`.env.local\`

### Deploy to Other Platforms

#### Docker Deployment

\`\`\`dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install
COPY . .
RUN pnpm build
EXPOSE 3000
CMD ["pnpm", "start"]
\`\`\`

#### Traditional Server

\`\`\`bash
# Build
pnpm build

# Start
pnpm start
\`\`\`

## Contributing

1. Fork the repository
2. Create a feature branch (\`git checkout -b feature/amazing-feature\`)
3. Commit changes (\`git commit -m 'Add amazing feature'\`)
4. Push to branch (\`git push origin feature/amazing-feature\`)
5. Open a Pull Request

### Code Style

- Use TypeScript for type safety
- Follow ESLint configuration
- Use Tailwind CSS for styling
- Keep components small and reusable

## Performance Optimization

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic route-based code splitting
- **Caching**: Implement proper caching strategies
- **Database Indexing**: Indexes on frequently queried columns
- **API Optimization**: Pagination and filtering on API endpoints

## Security Considerations

- **Authentication**: Implement JWT or session-based auth
- **Authorization**: Role-based access control (RBAC)
- **Input Validation**: Zod schema validation on all inputs
- **SQL Injection Prevention**: Use parameterized queries
- **CORS**: Configure CORS properly
- **Rate Limiting**: Implement rate limiting on API endpoints
- **HTTPS**: Always use HTTPS in production

## Troubleshooting

### Common Issues

**Port 3000 already in use**
\`\`\`bash
# Use different port
pnpm dev -p 3001
\`\`\`

**Database connection error**
- Check DATABASE_URL in \`.env.local\`
- Ensure PostgreSQL is running
- Verify database credentials

**Build errors**
\`\`\`bash
# Clear cache and rebuild
rm -rf .next
pnpm build
\`\`\`

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email support@railwayms.com or open an issue on GitHub.

## Roadmap

- [ ] Mobile app (React Native)
- [ ] Real-time notifications
- [ ] Advanced search filters
- [ ] Loyalty program
- [ ] Multi-language support
- [ ] Payment gateway integration
- [ ] SMS/Email notifications
- [ ] Seat selection UI

## Changelog

### Version 0.1.0
- Initial release
- Basic train booking functionality
- User and admin dashboards
- Responsive design

---

**Last Updated**: October 2025
**Version**: 0.1.0
**Maintainer**: Railway Management Team
