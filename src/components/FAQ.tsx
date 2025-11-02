"use client"

import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'How does the pricing work?',
    answer: 'We offer flexible pricing plans to suit businesses of all sizes. Contact our sales team for a custom quote tailored to your specific needs.',
  },
  {
    question: 'What kind of support do you provide?',
    answer: 'We provide 24/7 customer support via email, chat, and phone. Our dedicated support team is always ready to help you succeed.',
  },
  {
    question: 'Can I cancel my subscription at any time?',
    answer: 'Yes, you can cancel your subscription at any time with no penalties. We believe in earning your business every month.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Absolutely. We use enterprise-grade encryption and security measures to protect your data. Our platform is SOC 2 compliant and regularly audited.',
  },
  {
    question: 'Do you offer integrations with other tools?',
    answer: 'Yes, we integrate with over 100+ popular tools and platforms. Our API also allows for custom integrations to fit your workflow.',
  },
  {
    question: 'How long does implementation take?',
    answer: 'Most customers are up and running within 24 hours. Our onboarding team will guide you through every step of the process.',
  },
]

export default function FAQ() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about our product
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border rounded-lg px-6 bg-card"
            >
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="text-lg font-semibold">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  )
}
