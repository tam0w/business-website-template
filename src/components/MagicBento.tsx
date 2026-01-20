import { motion } from 'framer-motion'
import { FileText, MessageSquare, Linkedin, Sparkles, TrendingUp, Users } from 'lucide-react'

const services = [
  {
    icon: FileText,
    title: 'Technical Content',
    description: 'Deep-dive articles, documentation, and thought leadership that positions you as an industry expert.',
    span: 'lg:col-span-2',
  },
  {
    icon: MessageSquare,
    title: "Founder's Voice",
    description: 'Personal brand positioning that attracts investors, talent, and customers.',
    span: '',
  },
  {
    icon: Linkedin,
    title: 'LinkedIn Management',
    description: 'Full-service presence management to build authority and generate leads.',
    span: '',
  },
  {
    icon: Sparkles,
    title: 'AI Automation',
    description: 'Intelligent workflows that scale your content operations without scaling your team.',
    span: 'lg:col-span-2',
  },
  {
    icon: TrendingUp,
    title: 'Growth Strategy',
    description: 'Data-driven content strategies aligned with your business objectives.',
    span: '',
  },
  {
    icon: Users,
    title: 'Team Training',
    description: 'Equip your team with the skills to create and scale great content.',
    span: '',
  },
]

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

export default function MagicBento() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
    >
      {services.map((service, index) => {
        const Icon = service.icon
        return (
          <motion.div
            key={index}
            variants={itemVariants}
            className={`group relative p-6 lg:p-8 bg-card border border-border hover:border-primary/30 transition-all duration-300 ${service.span}`}
          >
            <div className="flex flex-col h-full">
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono text-muted-foreground">0{index + 1}</span>
              </div>

              <h3 className="text-xl font-display text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Subtle corner accent on hover */}
            <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 -translate-y-12 translate-x-12 bg-primary/5 rotate-45" />
            </div>
          </motion.div>
        )
      })}
    </motion.div>
  )
}
