import React from 'react'
import { Zap, Shield, Layers, GitBranch, Sparkles, Rocket, Lock, Database, Cloud, Code, Globe, Settings } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Feature {
  title: string
  description: string
  icon: string
  illustration: string
}

interface FeatureShowcaseProps {
  heading?: string
  subheading?: string
  features: Feature[]
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Zap,
  Shield,
  Layers,
  GitBranch,
  Sparkles,
  Rocket,
  Lock,
  Database,
  Cloud,
  Code,
  Globe,
  Settings,
}

const LightningIllustration = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="lightning-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="oklch(0.65 0.25 265)" />
        <stop offset="100%" stopColor="oklch(0.75 0.20 210)" />
      </linearGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>

    {/* Background circles */}
    <circle cx="100" cy="100" r="70" fill="none" stroke="oklch(0.25 0.08 265)" strokeWidth="1" opacity="0.3" />
    <circle cx="100" cy="100" r="50" fill="none" stroke="oklch(0.25 0.08 265)" strokeWidth="1" opacity="0.5" />

    {/* Lightning bolt */}
    <path
      d="M 100 40 L 85 85 L 105 85 L 95 120 L 120 95 L 100 95 L 110 60 Z"
      fill="url(#lightning-gradient)"
      filter="url(#glow)"
      className="animate-pulse"
    />

    {/* Energy particles */}
    <circle cx="70" cy="60" r="2" fill="oklch(0.65 0.25 265)" className="animate-pulse" style={{animationDelay: '0.2s'}} />
    <circle cx="130" cy="70" r="2" fill="oklch(0.75 0.20 210)" className="animate-pulse" style={{animationDelay: '0.4s'}} />
    <circle cx="75" cy="130" r="2" fill="oklch(0.65 0.25 265)" className="animate-pulse" style={{animationDelay: '0.6s'}} />
    <circle cx="125" cy="140" r="2" fill="oklch(0.75 0.20 210)" className="animate-pulse" style={{animationDelay: '0.8s'}} />
  </svg>
)

const ShieldIllustration = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="shield-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="oklch(0.65 0.25 265)" />
        <stop offset="100%" stopColor="oklch(0.75 0.20 210)" />
      </linearGradient>
    </defs>

    {/* Hexagon grid background */}
    <path d="M 70 50 L 85 40 L 100 50 L 100 70 L 85 80 L 70 70 Z" fill="none" stroke="oklch(0.25 0.08 265)" strokeWidth="1" opacity="0.3" />
    <path d="M 100 50 L 115 40 L 130 50 L 130 70 L 115 80 L 100 70 Z" fill="none" stroke="oklch(0.25 0.08 265)" strokeWidth="1" opacity="0.3" />
    <path d="M 85 80 L 100 70 L 115 80 L 115 100 L 100 110 L 85 100 Z" fill="none" stroke="oklch(0.25 0.08 265)" strokeWidth="1" opacity="0.4" />

    {/* Main shield */}
    <path
      d="M 100 40 L 130 55 L 130 100 Q 130 140 100 160 Q 70 140 70 100 L 70 55 Z"
      fill="url(#shield-gradient)"
      opacity="0.2"
    />
    <path
      d="M 100 40 L 130 55 L 130 100 Q 130 140 100 160 Q 70 140 70 100 L 70 55 Z"
      fill="none"
      stroke="url(#shield-gradient)"
      strokeWidth="2"
    />

    {/* Lock symbol inside */}
    <rect x="90" y="85" width="20" height="25" rx="2" fill="oklch(0.65 0.25 265)" />
    <path d="M 95 85 L 95 75 Q 95 68 100 68 Q 105 68 105 75 L 105 85" fill="none" stroke="oklch(0.65 0.25 265)" strokeWidth="3" />
    <circle cx="100" cy="97" r="2" fill="oklch(0.08 0.01 265)" />
  </svg>
)

const LayersIllustration = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="layer-gradient-1" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="oklch(0.65 0.25 265)" />
        <stop offset="100%" stopColor="oklch(0.75 0.20 210)" />
      </linearGradient>
      <linearGradient id="layer-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="oklch(0.55 0.25 265)" />
        <stop offset="100%" stopColor="oklch(0.65 0.20 210)" />
      </linearGradient>
      <linearGradient id="layer-gradient-3" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="oklch(0.45 0.25 265)" />
        <stop offset="100%" stopColor="oklch(0.55 0.20 210)" />
      </linearGradient>
    </defs>

    {/* Connection lines */}
    <line x1="100" y1="60" x2="100" y2="90" stroke="oklch(0.25 0.08 265)" strokeWidth="2" strokeDasharray="4 4" opacity="0.5" />
    <line x1="100" y1="110" x2="100" y2="140" stroke="oklch(0.25 0.08 265)" strokeWidth="2" strokeDasharray="4 4" opacity="0.5" />

    {/* Three layers with perspective */}
    <g className="animate-float" style={{animationDelay: '0s'}}>
      <path d="M 60 50 L 140 50 L 130 70 L 70 70 Z" fill="url(#layer-gradient-1)" opacity="0.9" />
      <path d="M 60 50 L 140 50 L 130 70 L 70 70 Z" fill="none" stroke="oklch(0.65 0.25 265)" strokeWidth="2" />
    </g>

    <g className="animate-float" style={{animationDelay: '0.2s'}}>
      <path d="M 65 95 L 135 95 L 128 115 L 72 115 Z" fill="url(#layer-gradient-2)" opacity="0.9" />
      <path d="M 65 95 L 135 95 L 128 115 L 72 115 Z" fill="none" stroke="oklch(0.55 0.25 265)" strokeWidth="2" />
    </g>

    <g className="animate-float" style={{animationDelay: '0.4s'}}>
      <path d="M 70 140 L 130 140 L 125 160 L 75 160 Z" fill="url(#layer-gradient-3)" opacity="0.9" />
      <path d="M 70 140 L 130 140 L 125 160 L 75 160 Z" fill="none" stroke="oklch(0.45 0.25 265)" strokeWidth="2" />
    </g>

    {/* Data dots */}
    <circle cx="80" cy="60" r="2" fill="oklch(0.75 0.20 210)" />
    <circle cx="100" cy="60" r="2" fill="oklch(0.75 0.20 210)" />
    <circle cx="120" cy="60" r="2" fill="oklch(0.75 0.20 210)" />
  </svg>
)

const BranchesIllustration = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="branch-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="oklch(0.65 0.25 265)" />
        <stop offset="100%" stopColor="oklch(0.75 0.20 210)" />
      </linearGradient>
    </defs>

    {/* Git branch structure */}
    <line x1="100" y1="40" x2="100" y2="80" stroke="url(#branch-gradient)" strokeWidth="3" />
    <line x1="100" y1="80" x2="140" y2="120" stroke="url(#branch-gradient)" strokeWidth="3" />
    <line x1="100" y1="80" x2="60" y2="120" stroke="url(#branch-gradient)" strokeWidth="3" />
    <line x1="140" y1="120" x2="140" y2="160" stroke="url(#branch-gradient)" strokeWidth="3" />
    <line x1="60" y1="120" x2="60" y2="160" stroke="url(#branch-gradient)" strokeWidth="3" />
    <line x1="100" y1="80" x2="100" y2="160" stroke="url(#branch-gradient)" strokeWidth="3" strokeDasharray="4 4" opacity="0.5" />

    {/* Commit nodes */}
    <circle cx="100" cy="40" r="8" fill="oklch(0.08 0.01 265)" stroke="oklch(0.65 0.25 265)" strokeWidth="3" className="animate-pulse" style={{animationDelay: '0s'}} />
    <circle cx="100" cy="80" r="8" fill="oklch(0.08 0.01 265)" stroke="oklch(0.65 0.25 265)" strokeWidth="3" className="animate-pulse" style={{animationDelay: '0.2s'}} />
    <circle cx="140" cy="120" r="8" fill="oklch(0.08 0.01 265)" stroke="oklch(0.75 0.20 210)" strokeWidth="3" className="animate-pulse" style={{animationDelay: '0.4s'}} />
    <circle cx="60" cy="120" r="8" fill="oklch(0.08 0.01 265)" stroke="oklch(0.75 0.20 210)" strokeWidth="3" className="animate-pulse" style={{animationDelay: '0.6s'}} />
    <circle cx="140" cy="160" r="8" fill="oklch(0.08 0.01 265)" stroke="oklch(0.65 0.25 265)" strokeWidth="3" className="animate-pulse" style={{animationDelay: '0.8s'}} />
    <circle cx="60" cy="160" r="8" fill="oklch(0.08 0.01 265)" stroke="oklch(0.65 0.25 265)" strokeWidth="3" className="animate-pulse" style={{animationDelay: '1s'}} />
    <circle cx="100" cy="160" r="8" fill="oklch(0.08 0.01 265)" stroke="oklch(0.65 0.25 265)" strokeWidth="3" className="animate-pulse" style={{animationDelay: '1.2s'}} />
  </svg>
)

const SparklesIllustration = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="ai-gradient">
        <stop offset="0%" stopColor="oklch(0.75 0.25 265)" />
        <stop offset="100%" stopColor="oklch(0.55 0.20 210)" />
      </radialGradient>
      <filter id="ai-glow">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>

    {/* Neural network connections */}
    <line x1="100" y1="100" x2="70" y2="60" stroke="oklch(0.35 0.15 265)" strokeWidth="1.5" opacity="0.6" />
    <line x1="100" y1="100" x2="130" y2="60" stroke="oklch(0.35 0.15 265)" strokeWidth="1.5" opacity="0.6" />
    <line x1="100" y1="100" x2="60" y2="100" stroke="oklch(0.35 0.15 265)" strokeWidth="1.5" opacity="0.6" />
    <line x1="100" y1="100" x2="140" y2="100" stroke="oklch(0.35 0.15 265)" strokeWidth="1.5" opacity="0.6" />
    <line x1="100" y1="100" x2="70" y2="140" stroke="oklch(0.35 0.15 265)" strokeWidth="1.5" opacity="0.6" />
    <line x1="100" y1="100" x2="130" y2="140" stroke="oklch(0.35 0.15 265)" strokeWidth="1.5" opacity="0.6" />

    {/* Central AI brain */}
    <circle cx="100" cy="100" r="25" fill="url(#ai-gradient)" opacity="0.3" filter="url(#ai-glow)" className="animate-pulse" />
    <circle cx="100" cy="100" r="25" fill="none" stroke="url(#ai-gradient)" strokeWidth="2" />

    {/* Neural nodes */}
    <circle cx="70" cy="60" r="6" fill="oklch(0.65 0.25 265)" className="animate-pulse" style={{animationDelay: '0.1s'}} />
    <circle cx="130" cy="60" r="6" fill="oklch(0.75 0.20 210)" className="animate-pulse" style={{animationDelay: '0.2s'}} />
    <circle cx="60" cy="100" r="6" fill="oklch(0.65 0.25 265)" className="animate-pulse" style={{animationDelay: '0.3s'}} />
    <circle cx="140" cy="100" r="6" fill="oklch(0.75 0.20 210)" className="animate-pulse" style={{animationDelay: '0.4s'}} />
    <circle cx="70" cy="140" r="6" fill="oklch(0.65 0.25 265)" className="animate-pulse" style={{animationDelay: '0.5s'}} />
    <circle cx="130" cy="140" r="6" fill="oklch(0.75 0.20 210)" className="animate-pulse" style={{animationDelay: '0.6s'}} />

    {/* Sparkle effects */}
    <path d="M 100 75 L 102 85 L 112 87 L 102 89 L 100 99 L 98 89 L 88 87 L 98 85 Z" fill="oklch(0.85 0.25 265)" className="animate-pulse" />
  </svg>
)

const RocketIllustration = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="rocket-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="oklch(0.75 0.25 265)" />
        <stop offset="50%" stopColor="oklch(0.65 0.25 265)" />
        <stop offset="100%" stopColor="oklch(0.55 0.20 210)" />
      </linearGradient>
      <linearGradient id="flame-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="oklch(0.75 0.25 265)" />
        <stop offset="50%" stopColor="oklch(0.70 0.25 30)" />
        <stop offset="100%" stopColor="oklch(0.65 0.20 210)" />
      </linearGradient>
    </defs>

    {/* Trajectory lines */}
    <path d="M 100 140 Q 80 110 70 70" stroke="oklch(0.25 0.08 265)" strokeWidth="1" strokeDasharray="3 3" opacity="0.3" />
    <path d="M 100 140 Q 110 100 120 60" stroke="oklch(0.25 0.08 265)" strokeWidth="1" strokeDasharray="3 3" opacity="0.3" />

    {/* Rocket body */}
    <ellipse cx="100" cy="40" rx="12" ry="18" fill="url(#rocket-gradient)" />
    <rect x="88" y="40" width="24" height="50" fill="url(#rocket-gradient)" />
    <circle cx="100" cy="60" r="6" fill="oklch(0.20 0.15 210)" opacity="0.7" />

    {/* Rocket fins */}
    <path d="M 88 70 L 75 90 L 88 85 Z" fill="oklch(0.55 0.20 210)" />
    <path d="M 112 70 L 125 90 L 112 85 Z" fill="oklch(0.55 0.20 210)" />

    {/* Flames */}
    <g className="animate-bounce">
      <path d="M 100 90 L 95 110 Q 100 120 100 130 Q 100 120 105 110 Z" fill="url(#flame-gradient)" opacity="0.8" />
      <path d="M 92 90 L 88 105 Q 92 112 92 120 Q 92 112 96 105 Z" fill="url(#flame-gradient)" opacity="0.6" />
      <path d="M 108 90 L 112 105 Q 108 112 108 120 Q 108 112 104 105 Z" fill="url(#flame-gradient)" opacity="0.6" />
    </g>

    {/* Stars */}
    <path d="M 50 50 L 51 52 L 53 52 L 51 53 L 52 55 L 50 54 L 48 55 L 49 53 L 47 52 L 49 52 Z" fill="oklch(0.75 0.20 210)" className="animate-pulse" />
    <path d="M 145 70 L 146 72 L 148 72 L 146 73 L 147 75 L 145 74 L 143 75 L 144 73 L 142 72 L 144 72 Z" fill="oklch(0.75 0.20 210)" className="animate-pulse" style={{animationDelay: '0.3s'}} />
    <path d="M 130 40 L 131 42 L 133 42 L 131 43 L 132 45 L 130 44 L 128 45 L 129 43 L 127 42 L 129 42 Z" fill="oklch(0.75 0.20 210)" className="animate-pulse" style={{animationDelay: '0.6s'}} />
  </svg>
)

const DatabaseIllustration = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="db-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="oklch(0.75 0.25 265)" />
        <stop offset="100%" stopColor="oklch(0.55 0.20 210)" />
      </linearGradient>
    </defs>

    {/* Data flow lines */}
    <path d="M 50 100 L 70 100" stroke="oklch(0.35 0.15 265)" strokeWidth="2" strokeDasharray="4 2" opacity="0.5" className="animate-pulse" />
    <path d="M 130 100 L 150 100" stroke="oklch(0.35 0.15 265)" strokeWidth="2" strokeDasharray="4 2" opacity="0.5" className="animate-pulse" style={{animationDelay: '0.3s'}} />

    {/* Database cylinders */}
    <g>
      {/* Bottom cylinder */}
      <ellipse cx="100" cy="140" rx="35" ry="12" fill="url(#db-gradient)" opacity="0.3" />
      <ellipse cx="100" cy="140" rx="35" ry="12" fill="none" stroke="oklch(0.65 0.25 265)" strokeWidth="2" />
      <rect x="65" y="115" width="70" height="25" fill="oklch(0.65 0.25 265)" opacity="0.2" />
      <line x1="65" y1="115" x2="65" y2="140" stroke="oklch(0.65 0.25 265)" strokeWidth="2" />
      <line x1="135" y1="115" x2="135" y2="140" stroke="oklch(0.65 0.25 265)" strokeWidth="2" />
      <ellipse cx="100" cy="115" rx="35" ry="12" fill="oklch(0.08 0.01 265)" stroke="oklch(0.65 0.25 265)" strokeWidth="2" />

      {/* Middle cylinder */}
      <ellipse cx="100" cy="95" rx="35" ry="12" fill="url(#db-gradient)" opacity="0.3" />
      <ellipse cx="100" cy="95" rx="35" ry="12" fill="none" stroke="oklch(0.65 0.25 265)" strokeWidth="2" />
      <rect x="65" y="70" width="70" height="25" fill="oklch(0.65 0.25 265)" opacity="0.2" />
      <line x1="65" y1="70" x2="65" y2="95" stroke="oklch(0.65 0.25 265)" strokeWidth="2" />
      <line x1="135" y1="70" x2="135" y2="95" stroke="oklch(0.65 0.25 265)" strokeWidth="2" />
      <ellipse cx="100" cy="70" rx="35" ry="12" fill="oklch(0.08 0.01 265)" stroke="oklch(0.65 0.25 265)" strokeWidth="2" />

      {/* Top cylinder */}
      <ellipse cx="100" cy="50" rx="35" ry="12" fill="url(#db-gradient)" opacity="0.3" />
      <ellipse cx="100" cy="50" rx="35" ry="12" fill="none" stroke="oklch(0.75 0.25 265)" strokeWidth="2" />
      <rect x="65" y="25" width="70" height="25" fill="oklch(0.75 0.25 265)" opacity="0.2" />
      <line x1="65" y1="25" x2="65" y2="50" stroke="oklch(0.75 0.25 265)" strokeWidth="2" />
      <line x1="135" y1="25" x2="135" y2="50" stroke="oklch(0.75 0.25 265)" strokeWidth="2" />
      <ellipse cx="100" cy="25" rx="35" ry="12" fill="oklch(0.08 0.01 265)" stroke="oklch(0.75 0.25 265)" strokeWidth="2" />
    </g>

    {/* Data indicators */}
    <line x1="80" y1="35" x2="120" y2="35" stroke="oklch(0.75 0.20 210)" strokeWidth="2" opacity="0.6" />
    <line x1="85" y1="40" x2="115" y2="40" stroke="oklch(0.75 0.20 210)" strokeWidth="2" opacity="0.6" />
  </svg>
)

const CloudIllustration = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="cloud-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="oklch(0.75 0.25 265)" />
        <stop offset="100%" stopColor="oklch(0.65 0.20 210)" />
      </linearGradient>
      <filter id="cloud-glow">
        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>

    {/* Upload/Download arrows */}
    <g className="animate-pulse" style={{animationDelay: '0s'}}>
      <path d="M 100 140 L 100 160" stroke="oklch(0.65 0.25 265)" strokeWidth="2" markerEnd="url(#arrowdown)" />
      <path d="M 100 160 L 95 155 M 100 160 L 105 155" stroke="oklch(0.65 0.25 265)" strokeWidth="2" />
    </g>
    <g className="animate-pulse" style={{animationDelay: '0.5s'}}>
      <path d="M 120 140 L 120 155" stroke="oklch(0.75 0.20 210)" strokeWidth="2" />
      <path d="M 120 155 L 115 160 M 120 155 L 125 160" stroke="oklch(0.75 0.20 210)" strokeWidth="2" />
    </g>

    {/* Main cloud shape */}
    <path
      d="M 70 80 Q 70 60 85 55 Q 90 45 105 45 Q 120 45 125 55 Q 140 60 140 80 Q 140 95 130 100 L 80 100 Q 70 95 70 80 Z"
      fill="url(#cloud-gradient)"
      opacity="0.3"
      filter="url(#cloud-glow)"
    />
    <path
      d="M 70 80 Q 70 60 85 55 Q 90 45 105 45 Q 120 45 125 55 Q 140 60 140 80 Q 140 95 130 100 L 80 100 Q 70 95 70 80 Z"
      fill="none"
      stroke="url(#cloud-gradient)"
      strokeWidth="2"
    />

    {/* Data nodes inside cloud */}
    <circle cx="90" cy="75" r="4" fill="oklch(0.75 0.25 265)" className="animate-pulse" style={{animationDelay: '0.2s'}} />
    <circle cx="105" cy="70" r="4" fill="oklch(0.65 0.25 265)" className="animate-pulse" style={{animationDelay: '0.4s'}} />
    <circle cx="120" cy="75" r="4" fill="oklch(0.75 0.20 210)" className="animate-pulse" style={{animationDelay: '0.6s'}} />
    <circle cx="95" cy="85" r="3" fill="oklch(0.75 0.20 210)" className="animate-pulse" style={{animationDelay: '0.8s'}} />
    <circle cx="115" cy="85" r="3" fill="oklch(0.65 0.25 265)" className="animate-pulse" style={{animationDelay: '1s'}} />

    {/* Connection lines between nodes */}
    <line x1="90" y1="75" x2="105" y2="70" stroke="oklch(0.45 0.15 265)" strokeWidth="1" opacity="0.4" />
    <line x1="105" y1="70" x2="120" y2="75" stroke="oklch(0.45 0.15 265)" strokeWidth="1" opacity="0.4" />
    <line x1="90" y1="75" x2="95" y2="85" stroke="oklch(0.45 0.15 265)" strokeWidth="1" opacity="0.4" />
    <line x1="120" y1="75" x2="115" y2="85" stroke="oklch(0.45 0.15 265)" strokeWidth="1" opacity="0.4" />

    {/* Device icons at bottom */}
    <rect x="50" y="165" width="20" height="15" rx="2" fill="none" stroke="oklch(0.45 0.15 265)" strokeWidth="1.5" opacity="0.6" />
    <rect x="90" y="165" width="20" height="15" rx="2" fill="none" stroke="oklch(0.45 0.15 265)" strokeWidth="1.5" opacity="0.6" />
    <rect x="130" y="165" width="20" height="15" rx="2" fill="none" stroke="oklch(0.45 0.15 265)" strokeWidth="1.5" opacity="0.6" />
  </svg>
)

const CodeIllustration = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="code-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="oklch(0.75 0.25 265)" />
        <stop offset="100%" stopColor="oklch(0.65 0.20 210)" />
      </linearGradient>
    </defs>

    {/* Code editor window */}
    <rect x="40" y="40" width="120" height="120" rx="8" fill="oklch(0.08 0.01 265)" stroke="oklch(0.65 0.25 265)" strokeWidth="2" />

    {/* Window controls */}
    <circle cx="50" cy="50" r="3" fill="oklch(0.60 0.20 20)" />
    <circle cx="60" cy="50" r="3" fill="oklch(0.70 0.20 90)" />
    <circle cx="70" cy="50" r="3" fill="oklch(0.65 0.20 140)" />

    {/* Code lines with syntax highlighting effect */}
    <g opacity="0.8">
      {/* Line 1 */}
      <rect x="50" y="70" width="15" height="4" rx="2" fill="oklch(0.75 0.25 265)" className="animate-pulse" style={{animationDelay: '0s'}} />
      <rect x="68" y="70" width="35" height="4" rx="2" fill="oklch(0.65 0.20 210)" />
      <rect x="106" y="70" width="20" height="4" rx="2" fill="oklch(0.70 0.20 30)" />

      {/* Line 2 */}
      <rect x="55" y="80" width="25" height="4" rx="2" fill="oklch(0.75 0.20 210)" />
      <rect x="83" y="80" width="30" height="4" rx="2" fill="oklch(0.70 0.25 265)" className="animate-pulse" style={{animationDelay: '0.2s'}} />
      <rect x="116" y="80" width="15" height="4" rx="2" fill="oklch(0.65 0.20 210)" />

      {/* Line 3 */}
      <rect x="55" y="90" width="40" height="4" rx="2" fill="oklch(0.65 0.25 265)" />
      <rect x="98" y="90" width="25" height="4" rx="2" fill="oklch(0.70 0.20 30)" className="animate-pulse" style={{animationDelay: '0.4s'}} />

      {/* Line 4 - empty */}

      {/* Line 5 */}
      <rect x="50" y="110" width="20" height="4" rx="2" fill="oklch(0.75 0.25 265)" />
      <rect x="73" y="110" width="45" height="4" rx="2" fill="oklch(0.65 0.20 210)" className="animate-pulse" style={{animationDelay: '0.6s'}} />

      {/* Line 6 */}
      <rect x="55" y="120" width="30" height="4" rx="2" fill="oklch(0.70 0.25 265)" />
      <rect x="88" y="120" width="35" height="4" rx="2" fill="oklch(0.75 0.20 210)" />

      {/* Line 7 */}
      <rect x="50" y="130" width="25" height="4" rx="2" fill="oklch(0.75 0.25 265)" className="animate-pulse" style={{animationDelay: '0.8s'}} />
    </g>

    {/* Code brackets decoration */}
    <path d="M 30 80 L 25 80 L 25 120 L 30 120" stroke="url(#code-gradient)" strokeWidth="2" fill="none" opacity="0.5" />
    <path d="M 170 80 L 175 80 L 175 120 L 170 120" stroke="url(#code-gradient)" strokeWidth="2" fill="none" opacity="0.5" />

    {/* Cursor blink */}
    <rect x="77" y="129" width="2" height="6" fill="oklch(0.75 0.25 265)" className="animate-pulse" />
  </svg>
)

const illustrationMap: Record<string, React.ComponentType> = {
  lightning: LightningIllustration,
  shield: ShieldIllustration,
  layers: LayersIllustration,
  branches: BranchesIllustration,
  sparkles: SparklesIllustration,
  rocket: RocketIllustration,
  database: DatabaseIllustration,
  cloud: CloudIllustration,
  code: CodeIllustration,
}

export default function FeatureShowcase({ heading, subheading, features }: FeatureShowcaseProps) {
  // Split features: last one is the hero (horizontal), rest are regular cards
  const regularFeatures = features.slice(0, -1)
  const heroFeature = features[features.length - 1]

  return (
    <div className="w-full max-w-7xl mx-auto space-y-12">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}} />

      {/* Section Header */}
      {(heading || subheading) && (
        <div className="text-center space-y-4">
          {heading && <h2 className="text-4xl font-bold">{heading}</h2>}
          {subheading && <p className="text-muted-foreground text-lg">{subheading}</p>}
        </div>
      )}

      {/* Regular Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {regularFeatures.map((feature, index) => {
          const Icon = iconMap[feature.icon] || Zap
          const Illustration = illustrationMap[feature.illustration] || LightningIllustration

          return (
            <div
              key={index}
              className={cn(
                "group relative overflow-hidden rounded-2xl border border-border bg-card",
                "transition-all duration-500 hover:border-primary/40",
                "hover:shadow-[0_0_30px_oklch(0.55_0.25_265_/_20%)]",
                "hover:-translate-y-1"
              )}
            >
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* SVG Illustration Container */}
              <div className="relative h-48 p-8 flex items-center justify-center overflow-hidden">
                <div className="w-full h-full relative">
                  <Illustration />
                </div>

                {/* Floating icon badge */}
                <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="relative p-6 pt-4 space-y-3 border-t border-border/50">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          )
        })}
      </div>

      {/* Hero Feature - Full Width Horizontal */}
      {heroFeature && (() => {
        const Icon = iconMap[heroFeature.icon] || Zap
        const Illustration = illustrationMap[heroFeature.illustration] || LightningIllustration

        return (
          <div
            className={cn(
              "group relative overflow-hidden rounded-2xl border border-border bg-card",
              "transition-all duration-500 hover:border-primary/40",
              "hover:shadow-[0_0_30px_oklch(0.55_0.25_265_/_20%)]",
              "hover:-translate-y-1"
            )}
          >
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Horizontal Layout */}
            <div className="flex flex-col md:flex-row items-center">
              {/* Content Section - 70% */}
              <div className="relative p-6 md:p-8 flex-1 flex flex-col justify-center space-y-3 md:border-r border-border/50">
                {/* Floating icon badge */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {heroFeature.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {heroFeature.description}
                </p>
              </div>

              {/* SVG Illustration Section - 30% */}
              <div className="relative w-full md:w-[30%] h-[200px] md:h-[240px] p-6 md:p-8 flex items-center justify-center overflow-hidden">
                <div className="w-full h-full">
                  <Illustration />
                </div>
              </div>
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        )
      })()}
    </div>
  )
}
