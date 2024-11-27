import type { ReactNode } from 'react'

import { IPost } from '@/http/posts/types'

export interface PostProviderProps {
  children: ReactNode
}

export interface PostContextType {
  posts: IPost[]
}
