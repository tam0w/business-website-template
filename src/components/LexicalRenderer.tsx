import type { LexicalContent } from '@/types'

interface LexicalRendererProps {
  content: LexicalContent
  className?: string
}

interface TextNode {
  type: 'text'
  text: string
  format?: number
  style?: string
}

interface ParagraphNode {
  type: 'paragraph'
  children: TextNode[]
}

interface HeadingNode {
  type: 'heading'
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  children: TextNode[]
}

interface ListItemNode {
  type: 'listitem'
  children: TextNode[]
}

interface ListNode {
  type: 'list'
  listType: 'bullet' | 'number'
  children: ListItemNode[]
}

type ContentNode = ParagraphNode | HeadingNode | ListNode | ListItemNode | TextNode

// Format flags from Lexical
const IS_BOLD = 1
const IS_ITALIC = 2
const IS_UNDERLINE = 8
const IS_CODE = 16

function renderTextNode(node: TextNode, index: number): React.ReactNode {
  let content: React.ReactNode = node.text

  const format = node.format || 0

  if (format & IS_CODE) {
    content = <code key={index} className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">{content}</code>
  }
  if (format & IS_BOLD) {
    content = <strong key={index}>{content}</strong>
  }
  if (format & IS_ITALIC) {
    content = <em key={index}>{content}</em>
  }
  if (format & IS_UNDERLINE) {
    content = <u key={index}>{content}</u>
  }

  return content
}

function renderNode(node: ContentNode, index: number): React.ReactNode {
  if (node.type === 'text') {
    return renderTextNode(node as TextNode, index)
  }

  if (node.type === 'paragraph') {
    const paragraphNode = node as ParagraphNode
    return (
      <p key={index} className="mb-4 last:mb-0 leading-relaxed">
        {paragraphNode.children?.map((child, i) => renderNode(child as ContentNode, i))}
      </p>
    )
  }

  if (node.type === 'heading') {
    const headingNode = node as HeadingNode
    const Tag = headingNode.tag || 'h2'
    const sizeClasses: Record<string, string> = {
      h1: 'text-4xl font-display font-bold mb-8 mt-12 first:mt-0',
      h2: 'text-3xl font-display font-bold mb-6 mt-10 first:mt-0',
      h3: 'text-2xl font-display font-bold mb-4 mt-8 first:mt-0',
      h4: 'text-xl font-display font-semibold mb-3 mt-6 first:mt-0',
      h5: 'text-lg font-display font-semibold mb-2 mt-4 first:mt-0',
      h6: 'text-base font-display font-semibold mb-2 mt-4 first:mt-0',
    }
    return (
      <Tag key={index} className={sizeClasses[Tag]}>
        {headingNode.children?.map((child, i) => renderNode(child as ContentNode, i))}
      </Tag>
    )
  }

  if (node.type === 'list') {
    const listNode = node as ListNode
    const Tag = listNode.listType === 'number' ? 'ol' : 'ul'
    const listClass = listNode.listType === 'number'
      ? 'list-decimal list-inside mb-4 space-y-2'
      : 'list-disc list-inside mb-4 space-y-2'
    return (
      <Tag key={index} className={listClass}>
        {listNode.children?.map((child, i) => renderNode(child as ContentNode, i))}
      </Tag>
    )
  }

  if (node.type === 'listitem') {
    const listItemNode = node as ListItemNode
    return (
      <li key={index}>
        {listItemNode.children?.map((child, i) => renderNode(child as ContentNode, i))}
      </li>
    )
  }

  return null
}

export function LexicalRenderer({ content, className = '' }: LexicalRendererProps) {
  if (!content?.root?.children) {
    return null
  }

  return (
    <div className={`text-foreground ${className}`}>
      {content.root.children.map((node, index) => renderNode(node as ContentNode, index))}
    </div>
  )
}
