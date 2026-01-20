import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FileText, MessageSquare, Linkedin, Sparkles, Zap, Shield, Layers, GitBranch, Rocket, Database, PenTool, Bot, ArrowRight } from 'lucide-react'

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

const iconMap: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  Zap,
  Shield,
  Layers,
  GitBranch,
  Sparkles,
  Rocket,
  FileText,
  MessageSquare,
  Linkedin,
  Database,
  PenTool,
  Bot,
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function FeatureShowcase({ heading, subheading, features }: FeatureShowcaseProps) {
  return (
    <div className="w-full space-y-12">
      {/* Section Header */}
      {(heading || subheading) && (
        <div className="text-center space-y-3">
          {heading && (
            <h2 className="text-4xl font-bold">{heading}</h2>
          )}
          {subheading && (
            <p className="text-muted-foreground text-lg">{subheading}</p>
          )}
        </div>
      )}

      {/* Features List */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="max-w-4xl mx-auto"
      >
        {features.map((feature, index) => {
          const Icon = iconMap[feature.icon] || Zap

          return (
            <motion.div
              key={index}
              variants={itemVariants}
            >
              <Link
                to="/contact"
                className="group grid grid-cols-[auto_1fr_auto] gap-6 lg:gap-8 py-6 lg:py-8 border-b border-border cursor-pointer"
              >
                {/* Number */}
                <span className="text-4xl lg:text-5xl font-display text-primary/20 group-hover:text-primary/40 transition-colors duration-300">
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-xl lg:text-2xl font-semibold group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                    {feature.description}
                  </p>
                </div>

                {/* Icon + Learn more */}
                <div className="flex flex-col items-end justify-between self-stretch">
                  <Icon className="w-10 h-10 lg:w-12 lg:h-12 text-primary/50 group-hover:text-primary transition-colors duration-300" strokeWidth={1.1} />
                  <span className="flex items-center gap-1 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-4">
                    Know more <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}
