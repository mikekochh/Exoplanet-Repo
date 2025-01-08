import React from 'react'
import { Globe, Rocket, Star, Plane, Map, BookOpen } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/exoplanetBanner.jpeg')] bg-cover bg-center"></div>
          <div className="absolute inset-0"></div>
        </div>
        <div className="relative z-10 text-center space-y-6 px-4 mt-28"> 
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-600">
            Own a Piece of the Cosmos
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            Secure your plot on distant exoplanets and be part of humanity's cosmic future.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg transition-all duration-300 transform hover:scale-105">
            Explore Exoplanets
          </button>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Rocket className="h-8 w-8 text-blue-400" />
        </div>
      </section>


      {/* What We Offer Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: Globe, 
                title: "Ownership Certificate", 
                description: "Receive a personalized certificate proving your ownership of a plot of land on an exoplanet." 
              },
              { 
                icon: Plane, 
                title: "Boarding Pass", 
                description: "Get a futuristic boarding pass symbolizing your journey to your designated exoplanet." 
              },
              { 
                icon: Map, 
                title: "Exoplanet Fact Sheet", 
                description: "Explore detailed facts about your exoplanet, including its coordinates and unique characteristics." 
              },
              { 
                icon: BookOpen, 
                title: "Educational Insights", 
                description: "Learn about exoplanets and gain a deeper understanding of your specific celestial property." 
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-800 border border-gray-700 rounded-lg p-6 text-center">
                <feature.icon className="h-12 w-12 text-blue-400 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* How It Works Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: 1, title: "Choose Your Exoplanet", description: "Browse our catalog of verified exoplanets" },
              { step: 2, title: "Select Your Plot", description: "Pick the perfect location on your chosen world" },
              { step: 3, title: "Secure Your Ownership", description: "Complete the purchase and receive your digital deed" }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Choose Your Cosmic Real Estate
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                title: "1 Acre of Land", 
                price: "$20", 
                features: [
                  "Certificate of Authenticity",
                  "Boarding Pass for Your Exoplanet",
                  "Fact Sheet About Your Exoplanet (Coordinates, Details, and More)",
                  "Educational Fact Sheet About Exoplanets"
                ] 
              },
              { 
                title: "10 Acres of Land", 
                price: "$40", 
                features: [
                  "Certificate of Authenticity",
                  "Boarding Pass for Your Exoplanet",
                  "Fact Sheet About Your Exoplanet (Coordinates, Details, and More)",
                  "Educational Fact Sheet About Exoplanets"
                ] 
              }
            ].map((plan, index) => (
              <div key={index} className="bg-gray-800 border border-gray-700 rounded-lg p-6 text-center">
                <h3 className="text-2xl font-bold mb-2 text-white">{plan.title}</h3>
                <p className="text-4xl font-bold text-blue-400 mb-4">{plan.price}</p>
                <ul className="space-y-2 mb-6 text-gray-300">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center justify-center">
                      <Star className="h-5 w-5 text-yellow-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                  Claim Your Plot
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2025 Cosmic Real Estate, Inc. All rights reserved.</p>
          <p className="mt-2">Disclaimer: Exoplanet ownership is conceptual and for entertainment purposes only.</p>
        </div>
      </footer>
    </div>
  )
}

