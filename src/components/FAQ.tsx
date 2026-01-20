"use client"

import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

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
    <section className="h-dvh px-6 bg-background flex items-center justify-center snap-start snap-always relative">
      {/* Dot Grid Background */}
      <div className="absolute inset-0 size-full -z-10 dot-grid opacity-30" />
      <div className="max-w-7xl mx-auto w-full space-y-8 relative z-10">
        <div className="text-center space-y-3">
          <h2 className="text-4xl font-bold">{heading}</h2>
          {subheading && (
            <p className="text-muted-foreground text-lg">
              {subheading}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-border bg-card/20">
          {faqs.map((faq, index) => (
            <Accordion key={index} type="single" collapsible className="w-full">
              <AccordionItem
                value={`item-${index}`}
                className={cn(
                  "border-b lg:border-r px-6 bg-transparent",
                  index >= faqs.length - 2 && "border-b-0",
                  (index + 1) % 2 === 0 && "lg:border-r-0"
                )}
              >
                <AccordionTrigger>
                  <span className="text-lg font-semibold text-left">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>

        <div className="mt-8 text-center space-y-4 pt-8 border-t border-border">
          <p className="text-muted-foreground text-sm">Still have questions?</p>
          <Button variant="default" size="lg">
            Contact Support
          </Button>
        </div>
      </div>
    </section>
  )
}
