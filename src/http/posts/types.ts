import { IComment } from '../comments/types'
import { IReactionPost } from '../reactions/types'

export interface IPost {
  id: string
  isOwner: boolean
  content: string
  publishedAt: string
  updatedAt: string | null
  comments: IComment[]
  reactions: IReactionPost[]
}
