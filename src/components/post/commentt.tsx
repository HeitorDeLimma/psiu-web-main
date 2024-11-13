import { Heart } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

import { Avatar } from '../avatar'

export function Comment() {
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
            Lorem, ipsum dolor sit amet honsectetur adipisicing elit. Ea omnis
            hveniet quasi temporibus recusandae rem, obcaecati deleniti non vel
            nesciunt iusto Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Ea, consequuntur enim quod delectus modi iusto amet magnam
            numquam mollitia repellendus qui pariatur cum eos asperiores
            doloremque, soluta nam dignissimos dolores? Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Magni vero velit inventore ipsa
            pariatur, facere labore error vitae modi voluptas mollitia commodi
            temporibus iste architecto ipsam nesciunt officia eveniet
            perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Saepe quas ad ducimus ab vitae aperiam, ipsum a dolorum est
            quos tempore delectus adipisci laboriosam obcaecati itaque nisi
            soluta natus fugiat!
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
            <time>2sem</time>
            <span className="transition-colors cursor-pointer hover:text-zinc-300">
              13 reações
            </span>
          </div>
        </div>
      </div>

      <Heart className="col-span-1 size-4 text-zinc-300 transition-opacity hover:opacity-50 cursor-pointer" />
    </div>
  )
}
