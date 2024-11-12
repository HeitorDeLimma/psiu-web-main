import { ImgHTMLAttributes } from 'react'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  classname?: string
}

export function Avatar({ className = '', ...rest }: AvatarProps) {
  return (
    <img
      {...rest}
      alt=""
      className={`rounded-full bg-zinc-200 ${className} `}
    />
  )
}
