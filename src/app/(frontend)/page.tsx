"use client"

import React from 'react'
import './globals.css'
import DarkVeil from '@/components/DarkVeil'
import MagicBento from '@/components/MagicBento'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'

export default function HomePage() {
  return (
    <div className="min-h-dvh">
      {/* Hero Section with DarkVeil Background */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-slate-900 to-black">
        <div style={{ width: '100%', height: '100vh', position: 'absolute', top: 0, left: 0 }}>
          <DarkVeil
            hueShift={0}
            noiseIntensity={0}
            scanlineIntensity={0.02}
            speed={0.5}
            scanlineFrequency={0.05}
            warpAmount={0}
            resolutionScale={1}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Build Something Amazing
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            The modern platform for businesses that want to scale fast and build better products
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg text-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105">
              Get Started
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-lg text-lg font-semibold hover:bg-white/20 transition-all border border-white/20">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section with MagicBento */}
      <section className="py-20 px-4 bg-background flex items-center justify-center">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-muted-foreground text-lg">
              Everything you need to succeed
            </p>
          </div>
          <MagicBento
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            disableAnimations={false}
            spotlightRadius={300}
            particleCount={12}
            enableTilt={false}
            clickEffect={true}
            enableMagnetism={true}
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-muted/20 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to get started?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of teams already building with us
          </p>
          <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg text-lg font-semibold hover:bg-primary/90 transition-all hover:scale-105">
            Start Free Trial
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Product</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Features</li>
              <li>Pricing</li>
              <li>Security</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Resources</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Documentation</li>
              <li>Help Center</li>
              <li>API</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Privacy</li>
              <li>Terms</li>
              <li>Cookies</li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t text-center text-muted-foreground">
          <p>&copy; 2025 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
