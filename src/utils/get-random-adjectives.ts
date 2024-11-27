import { ADJECTIVES } from '@/constants/adjectives'

export function getRandomAdjectives() {
  return ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)]
}
