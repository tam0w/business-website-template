"use client"

import React from 'react'
import './globals.css'
import DarkVeil from '@/components/DarkVeil'
import MagicBento from '@/components/MagicBento'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import { TextReveal } from '@/components/ui/text-reveal'

export default function HomePage() {
  return (
    <div className="min-h-dvh space-y-16">
      {/* Hero Section with DarkVeil Background */}
      <section className="relative min-h-dvh flex items-center justify-center bg-gradient-to-br from-[oklch(0.15_0.15_265)] via-[oklch(0.08_0.05_265)] to-background pt-40 md:pt-52 lg:pt-64">
        <div className="absolute inset-0 w-full h-full">
          <DarkVeil
            hueShift={27}
            noiseIntensity={0}
            scanlineIntensity={0.02}
            speed={0.5}
            scanlineFrequency={0.05}
            warpAmount={0}
            resolutionScale={1}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground">
            <TextReveal split="word" delay={0.15} duration={0.8} from="bottom" blur={10}>
              Build Something Amazing
            </TextReveal>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mx-auto leading-relaxed">
            The modern platform for businesses that want to scale fast and build better products
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <button className="px-12 py-4 bg-primary text-primary-foreground rounded-xl text-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105 glow-primary border border-primary/20">
              Get Started
            </button>
            <button className="px-12 py-4 glass text-foreground rounded-xl text-lg font-semibold hover:border-primary/40 transition-all duration-300 border-glow-hover">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section with MagicBento */}
      <section className="py-16 px-6 bg-background flex items-center justify-center">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold">Powerful Features</h2>
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
      <section className="py-16 px-6 bg-gradient-radial-accent">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl font-bold">Ready to get started?</h2>
          <p className="text-xl text-muted-foreground">
            Join thousands of teams already building with us
          </p>
          <button className="px-12 py-6 bg-primary text-primary-foreground rounded-xl text-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:scale-105 glow-primary border border-primary/20">
            Start Free Trial
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-16 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div className="space-y-4">
            <h3 className="font-bold">Product</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="hover:text-primary transition-colors cursor-pointer">Features</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Pricing</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Security</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold">Company</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="hover:text-primary transition-colors cursor-pointer">About</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Blog</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Careers</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold">Resources</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="hover:text-primary transition-colors cursor-pointer">Documentation</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Help Center</li>
              <li className="hover:text-primary transition-colors cursor-pointer">API</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold">Legal</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="hover:text-primary transition-colors cursor-pointer">Privacy</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Terms</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Cookies</li>
            </ul>
          </div>
        </div>
        <div className="pt-12 border-t border-border text-center text-muted-foreground">
          <p>&copy; 2025 Your Company. All rights reserved.</p>
        </div>
        </div>
      </footer>
    </div>
  )
}
