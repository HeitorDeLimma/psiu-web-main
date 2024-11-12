import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Bookmark, Ellipsis, Heart, MessageCircle, X } from 'lucide-react'
import { FormEvent, useRef, useState } from 'react'

import { Avatar } from '../avatar'

interface PostPreviewProps {
  open: boolean
  setOpen(): void
}

export function PostPreview({ open, setOpen }: PostPreviewProps) {
  const [comment, setComment] = useState('')

  const inputRef = useRef<HTMLInputElement | null>(null)

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
  }

  return (
    open && (
      <div
        onClick={setOpen}
        className="absolute inset-0 flex justify-center bg-black/25 py-8"
      >
        <X
          onClick={setOpen}
          className="absolute top-4 right-8 text-zinc-200 cursor-pointer"
        />

        <div
          onClick={(e) => e.stopPropagation()}
          className="w-[1280px] grid grid-cols-12 rounded-lg bg-zinc-800"
        >
          <div className="col-span-7 flex justify-center items-center p-6">
            <p className="text-zinc-300 text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Explicabo, provident! Veritatis natus minima repudiandae, cumque
              libero ab non sit in. Expedita dignissimos exercitationem
              voluptatum id voluptatem modi deserunt dolor illo.
            </p>
          </div>

          <div className="flex flex-col col-span-5 rounded-r-lg bg-zinc-950">
            <div className="flex justify-between border-b-[1px] border-zinc-900 p-6">
              <div className="flex items-center gap-3">
                <Avatar className="size-10" />
                <div>
                  <h1 className="text-zinc-300 text-sm font-semibold">
                    heitorlima
                  </h1>
                  <time className="text-zinc-500 text-xs">
                    {formatDistanceToNow(new Date(), {
                      locale: ptBR,
                    })}{' '}
                    {new Date() && '(editado)'}
                  </time>
                </div>
              </div>

              <Ellipsis className="text-zinc-500 size-5 cursor-pointer transition-colors hover:text-zinc-400" />
            </div>

            <div className="flex-1 border-b-[1px] border-zinc-900"></div>

            <div className="flex items-center justify-between p-4 border-b-[1px] border-zinc-900">
              <div className="flex items-center gap-2 text-zinc-400">
                <Heart className="size-5 cursor-pointer transition-opacity hover:opacity-50" />
                <MessageCircle
                  onClick={() => inputRef.current?.focus()}
                  className="size-5 cursor-pointer transition-opacity hover:opacity-50"
                />
              </div>

              <Bookmark className="size-5 text-zinc-400 cursor-pointer transition-opacity hover:opacity-50" />
            </div>

            <form onSubmit={handleSubmit} className="flex items-center">
              <input
                ref={inputRef}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                type="text"
                placeholder="Adicione um comentário"
                className="flex-1 bg-transparent text-xs text-zinc-300 outline-0 border-0 p-4"
              />

              <button
                disabled={!comment}
                className="h-min px-2 text-yellow-500 text-sm font-semibold transition-colors disabled:text-zinc-500"
              >
                Publicar
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  )
}
