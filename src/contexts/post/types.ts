import type { ReactNode } from 'react'

import type {
  CreateCommentRequest,
  CreateCommentResponse,
} from '@/http/comments/create-comment'
import type {
  CreatePostRequest,
  CreatePostResponse,
} from '@/http/posts/create-posts'
import { IPost } from '@/http/posts/types'
import type {
  CreatePostReactionRequest,
  CreatePostReactionResponse,
} from '@/http/reactions/create-post-reaction'

export interface PostProviderProps {
  children: ReactNode
}

export interface PostContextType {
  posts: IPost[]
  onCreatePost(post: CreatePostRequest): Promise<CreatePostResponse>
  onCreateComment(comment: CreateCommentRequest): Promise<CreateCommentResponse>
  onCreatePostReaction(
    comment: CreatePostReactionRequest,
  ): Promise<CreatePostReactionResponse>
}
