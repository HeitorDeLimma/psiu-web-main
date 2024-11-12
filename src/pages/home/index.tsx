import { Post } from '@/components/post'

import { NewPost } from './new-post'

export function Home() {
  return (
    <div className="h-screen w-full px-16 py-8 space-y-12 overflow-y-auto">
      <NewPost />

      <div className="flex flex-col justify-center items-center gap-12">
        <Post
          id=""
          content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio itaque ut magnam dicta ea, commodi vero eius voluptates soluta maiores non sit. Perspiciatis commodi animi nesciunt culpa, tempora labore exercitationem!"
          publishedAt="2024-11-08T23:57:50.054Z"
          updatedAt={null}
        />

        <Post
          id=""
          content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio itaque ut magnam dicta ea, commodi vero eius voluptates soluta maiores non sit. Perspiciatis commodi animi nesciunt culpa, tempora labore exercitationem!"
          publishedAt="2024-10-08T23:57:50.054Z"
          updatedAt={null}
        />

        <Post
          id=""
          content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio itaque ut magnam dicta ea, commodi vero eius voluptates soluta maiores non sit. Perspiciatis commodi animi nesciunt culpa, tempora labore exercitationem!"
          publishedAt="2022-11-08T23:57:50.054Z"
          updatedAt="2024-11-08T23:57:50.054Z"
        />
      </div>
    </div>
  )
}
