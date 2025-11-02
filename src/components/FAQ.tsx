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

interface FAQProps {
  heading?: string
  subheading?: string
  faqs: FAQItem[]
}

export default function FAQ({ heading = 'Frequently Asked Questions', subheading = 'Everything you need to know about our product', faqs }: FAQProps) {
  return (
    <section className="h-dvh px-6 bg-background flex items-center justify-center snap-start snap-always">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold">{heading}</h2>
          {subheading && (
            <p className="text-muted-foreground text-lg">
              {subheading}
            </p>
          )}
        </div>

        <Accordion type="single" collapsible className="w-full space-y-6">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border rounded-xl px-8 glass border-glow-hover overflow-hidden"
            >
              <AccordionTrigger>
                <span className="text-lg font-semibold">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center space-y-6">
          <p className="text-muted-foreground">Still have questions?</p>
          <button className="px-8 py-4 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-300 hover:shadow-[0_0_20px_oklch(0.55_0.25_265_/_30%)] border border-primary/20">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  )
}
