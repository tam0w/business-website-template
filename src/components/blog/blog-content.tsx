import type { Post } from '@/payload-types'

interface BlogContentProps {
  content: Post['content']
}

export function BlogContent({ content }: BlogContentProps) {
  if (!content?.root?.children) {
    return (
      <div>
        <p className="text-muted-foreground">No content available.</p>
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
        if (node.format & 1) element = <strong key={index}>{element}</strong> // Bold
        if (node.format & 2) element = <em key={index}>{element}</em> // Italic
        if (node.format & 4) element = <s key={index}>{element}</s> // Strikethrough
        if (node.format & 8) element = <u key={index}>{element}</u> // Underline
        if (node.format & 16) element = <code key={index}>{element}</code> // Code
      }

      return element
    }

    // Handle paragraph
    if (node.type === 'paragraph') {
      return (
        <p key={index} className="mb-4 text-base leading-relaxed">
          {node.children?.map((child: any, i: number) => renderNode(child, i))}
        </p>
      )
    }

    // Handle headings
    if (node.type === 'heading') {
      const tag = node.tag || 'h2'
      const classNames: Record<string, string> = {
        h1: 'text-4xl font-bold mb-6 mt-8',
        h2: 'text-3xl font-bold mb-4 mt-6',
        h3: 'text-2xl font-bold mb-3 mt-5',
        h4: 'text-xl font-bold mb-2 mt-4',
        h5: 'text-lg font-bold mb-2 mt-3',
        h6: 'text-base font-bold mb-2 mt-2',
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
      const className = node.listType === 'number' ? 'list-decimal ml-6 mb-4' : 'list-disc ml-6 mb-4'

      return (
        <ListTag key={index} className={className}>
          {node.children?.map((child: any, i: number) => renderNode(child, i))}
        </ListTag>
      )
    }

    if (node.type === 'listitem') {
      return (
        <li key={index} className="mb-1">
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
          className="text-primary hover:underline"
        >
          {node.children?.map((child: any, i: number) => renderNode(child, i))}
        </a>
      )
    }

    // Handle quotes
    if (node.type === 'quote') {
      return (
        <blockquote key={index} className="border-l-4 border-gray-300 pl-4 italic my-4">
          {node.children?.map((child: any, i: number) => renderNode(child, i))}
        </blockquote>
      )
    }

    // Handle code blocks
    if (node.type === 'code') {
      return (
        <pre key={index} className="bg-gray-100 dark:bg-gray-800 p-4 border border-border overflow-x-auto my-4">
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
          <figure key={index} className="my-6">
            <img
              src={value.url}
              alt={value.alt || ''}
              className="w-full h-auto border border-border"
              width={value.width}
              height={value.height}
            />
            {value.alt && (
              <figcaption className="text-sm text-muted-foreground mt-2 text-center">
                {value.alt}
              </figcaption>
            )}
          </figure>
        )
      }
    }

    // Fallback for unknown nodes with children
    if (node.children) {
      return <div key={index}>{node.children.map((child: any, i: number) => renderNode(child, i))}</div>
    }

    return null
  }

  return (
    <div>
      {content.root.children.map((node: any, index: number) => renderNode(node, index))}
    </div>
  )
}
