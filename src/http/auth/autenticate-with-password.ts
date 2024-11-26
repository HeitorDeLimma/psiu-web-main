import { api } from '../api-client'

interface autenticateWithPasswordRequest {
  ra: string
  password: string
}

interface autenticateWithPasswordResponse {
  result: 'success' | 'error'
  message?: string
  data?: {
    token: string
    student: {
      id: string
      ra: string
      name: string
      birthdate: string
      createdAt: string
      updatedAt: string | null
    }
  }
}

export async function autenticateWithPassword({
  ra,
  password,
}: autenticateWithPasswordRequest) {
  const result = await api
    .post('authenticate/password', {
      json: {
        ra,
        password,
      },
    })
    .json<autenticateWithPasswordResponse>()

  return result
}
