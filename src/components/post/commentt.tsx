import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Heart } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

import { Avatar } from '../avatar'
import { Reaction } from '.'

export interface CommentProps {
  id: string
  postId: string
  content: string
  commentedAt: string
  updatedAt: string | null
  reactions: Reaction[]
}

export function Comment({
  content,
  commentedAt,
  updatedAt,
  reactions,
}: CommentProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isOverflowing, setIsOverflowing] = useState(false)

  const paragraphRef = useRef<HTMLParagraphElement | null>(null)

  function handleToggleExpanded() {
    setIsExpanded(!isExpanded)
  }

  useEffect(() => {
    if (paragraphRef.current) {
      setIsOverflowing(paragraphRef.current.scrollHeight > 160)
    }
  }, [])

  return (
    <div className="grid grid-cols-12 items-center gap-3">
      <div className="col-span-11 flex items-start gap-3">
        <Avatar className="min-w-10 min-h-10" />

        <div>
          <p
            ref={paragraphRef}
            className={`
            text-zinc-400 
            text-sm 
            overflow-hidden 
            ${isExpanded ? '' : isOverflowing ? 'h-40' : ''}`}
          >
            <span className="text-zinc-300 text-sm font-semibold mr-2">
              heitorlima
            </span>
            {content}
          </p>

          {isOverflowing && (
            <button
              onClick={handleToggleExpanded}
              className="text-xs text-zinc-400 cursor-pointer transition-colors hover:text-zinc-300"
            >
              {isExpanded ? 'ver menos...' : 'ver mais...'}
            </button>
          )}

          <div className="space-x-3 text-zinc-500 text-xs font-medium mt-2">
            <time>
              {formatDistanceToNow(updatedAt || commentedAt, {
                locale: ptBR,
              })}{' '}
              {updatedAt && '(editado)'}
            </time>
            <span className="transition-colors cursor-pointer hover:text-zinc-300">
              {reactions.length} reações
            </span>
          </div>
        </div>
      </div>

      <Heart className="col-span-1 size-4 text-zinc-300 transition-opacity hover:opacity-50 cursor-pointer" />
    </div>
  )
}
