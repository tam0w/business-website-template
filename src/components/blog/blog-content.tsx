import type { Post } from '@/payload-types'

interface BlogContentProps {
  content: Post['content']
}

export function BlogContent({ content }: BlogContentProps) {
  if (!content?.root?.children) {
    return (
      <div>
        <p className="text-[#666666]">No content available.</p>
      </div>
    )
  }

  const renderNode = (node: any, index: number): React.ReactNode => {
    if (!node) return null

    // Handle text nodes
    if (node.type === 'text') {
      let text = node.text || ''
      let element: React.ReactNode = text

      // Apply formatting
      if (node.format) {
        if (node.format & 1) element = <strong key={index} className="font-semibold text-[#0A1628]">{element}</strong>
        if (node.format & 2) element = <em key={index}>{element}</em>
        if (node.format & 4) element = <s key={index}>{element}</s>
        if (node.format & 8) element = <u key={index} className="underline underline-offset-2">{element}</u>
        if (node.format & 16) element = (
          <code key={index} className="px-1.5 py-0.5 bg-[#F5F5F5] text-[#0070B3] rounded text-sm font-mono">
            {element}
          </code>
        )
      }

      return element
    }

    // Handle paragraph
    if (node.type === 'paragraph') {
      return (
        <p key={index} className="mb-6 text-[#0A1628] text-lg leading-[1.8] last:mb-0">
          {node.children?.map((child: any, i: number) => renderNode(child, i))}
        </p>
      )
    }

    // Handle headings
    if (node.type === 'heading') {
      const tag = node.tag || 'h2'
      const classNames: Record<string, string> = {
        h1: 'text-3xl md:text-4xl font-semibold mb-6 mt-12 first:mt-0 text-[#0A1628] tracking-[-0.02em]',
        h2: 'text-2xl md:text-3xl font-semibold mb-5 mt-10 first:mt-0 text-[#0A1628] tracking-[-0.02em]',
        h3: 'text-xl md:text-2xl font-semibold mb-4 mt-8 first:mt-0 text-[#0A1628] tracking-[-0.01em]',
        h4: 'text-lg md:text-xl font-semibold mb-3 mt-6 first:mt-0 text-[#0A1628]',
        h5: 'text-base md:text-lg font-semibold mb-3 mt-5 first:mt-0 text-[#0A1628]',
        h6: 'text-base font-semibold mb-2 mt-4 first:mt-0 text-[#0A1628]',
      }
      const className = classNames[tag] || classNames.h2

      const children = node.children?.map((child: any, i: number) => renderNode(child, i))

      switch (tag) {
        case 'h1':
          return <h1 key={index} className={className}>{children}</h1>
        case 'h2':
          return <h2 key={index} className={className}>{children}</h2>
        case 'h3':
          return <h3 key={index} className={className}>{children}</h3>
        case 'h4':
          return <h4 key={index} className={className}>{children}</h4>
        case 'h5':
          return <h5 key={index} className={className}>{children}</h5>
        case 'h6':
          return <h6 key={index} className={className}>{children}</h6>
        default:
          return <h2 key={index} className={className}>{children}</h2>
      }
    }

    // Handle lists
    if (node.type === 'list') {
      const ListTag = node.listType === 'number' ? 'ol' : 'ul'
      const className = node.listType === 'number'
        ? 'list-decimal ml-6 mb-6 space-y-2 text-[#0A1628] text-lg marker:text-[#0070B3]'
        : 'list-disc ml-6 mb-6 space-y-2 text-[#0A1628] text-lg marker:text-[#0070B3]'

      return (
        <ListTag key={index} className={className}>
          {node.children?.map((child: any, i: number) => renderNode(child, i))}
        </ListTag>
      )
    }

    if (node.type === 'listitem') {
      return (
        <li key={index} className="leading-[1.7] pl-1">
          {node.children?.map((child: any, i: number) => renderNode(child, i))}
        </li>
      )
    }

    // Handle links
    if (node.type === 'link' || node.type === 'autolink') {
      return (
        <a
          key={index}
          href={node.url || node.fields?.url}
          target={node.fields?.newTab ? '_blank' : undefined}
          rel={node.fields?.newTab ? 'noopener noreferrer' : undefined}
          className="text-[#0070B3] hover:text-[#00A0FF] underline underline-offset-2 transition-colors"
        >
          {node.children?.map((child: any, i: number) => renderNode(child, i))}
        </a>
      )
    }

    // Handle quotes
    if (node.type === 'quote') {
      return (
        <blockquote
          key={index}
          className="border-l-4 border-[#0070B3] pl-6 py-2 my-8 bg-[#F5F5F5] rounded-r-lg"
        >
          <div className="text-[#0A1628] text-lg italic leading-relaxed">
            {node.children?.map((child: any, i: number) => renderNode(child, i))}
          </div>
        </blockquote>
      )
    }

    // Handle code blocks
    if (node.type === 'code') {
      return (
        <pre
          key={index}
          className="bg-[#0A1628] text-[#EDEDED] p-6 rounded-xl overflow-x-auto my-8 text-sm font-mono leading-relaxed"
        >
          <code>{node.children?.map((child: any, i: number) => renderNode(child, i))}</code>
        </pre>
      )
    }

    // Handle line breaks
    if (node.type === 'linebreak') {
      return <br key={index} />
    }

    // Handle upload nodes (images)
    if (node.type === 'upload') {
      const value = node.value
      if (value?.url) {
        return (
          <figure key={index} className="my-10">
            <div className="rounded-xl overflow-hidden border border-[#DADADA]">
              <img
                src={value.url}
                alt={value.alt || ''}
                className="w-full h-auto"
                width={value.width}
                height={value.height}
              />
            </div>
            {value.alt && (
              <figcaption className="text-sm text-[#666666] mt-3 text-center italic">
                {value.alt}
              </figcaption>
            )}
          </figure>
        )
      }
    }

    // Handle horizontal rule
    if (node.type === 'horizontalrule') {
      return <hr key={index} className="my-10 border-t border-[#DADADA]" />
    }

    // Fallback for unknown nodes with children
    if (node.children) {
      return <div key={index}>{node.children.map((child: any, i: number) => renderNode(child, i))}</div>
    }

    return null
  }

  return (
    <div className="prose-enrich">
      {content.root.children.map((node: any, index: number) => renderNode(node, index))}
    </div>
  )
}
