import { Grid3x3, LogOut, SquarePenIcon } from 'lucide-react'

import { Button } from '@/components/button'

export function Profile() {
  return (
    <div className="w-full px-16 py-8 space-y-8">
      <div className="flex gap-16 items-center">
        <div className="bg-zinc-400 size-28 rounded-full" />

        <div>
          <h1 className="text-zinc-200 font-medium">Heitor Lima</h1>
          <p className="text-zinc-400 text-sm">000112493927</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button>
          <SquarePenIcon className="size-4" />
          Editar Perfil
        </Button>

        <Button>
          <LogOut className="size-4" />
          Sair
        </Button>
      </div>

      <div className="space-y-1">
        <button className="flex items-center gap-1 text-xs text-zinc-400 rounded-md p-2 hover:bg-zinc-700">
          <Grid3x3 className="size-3" />
          PUBLICAÇÕES
        </button>

        <div className="w-full border-t border-zinc-700"></div>
      </div>
    </div>
  )
}
