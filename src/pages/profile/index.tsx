import { LogOut, SquarePenIcon } from 'lucide-react'

export function Profile() {
  return (
    <div className="px-16 py-8 space-y-8">
      <div className="flex gap-16 items-center">
        <div className="bg-zinc-400 size-28 rounded-full" />

        <div>
          <h1 className="text-zinc-200 font-medium">Heitor Lima</h1>
          <p className="text-zinc-400 text-sm">000112493927</p>
        </div>
      </div>

      {/* <p className="text-zinc-300 text-xs">23 publicações</p> */}

      <div className="flex items-center gap-2">
        <button className="flex items-center gap-2 bg-zinc-900 text-zinc-300 text-sm py-3 px-4 rounded-md transition-opacity hover:opacity-75">
          <SquarePenIcon className="size-4" />
          Editar Perfil
        </button>
        <button className="flex items-center gap-2 bg-zinc-900 text-zinc-300 text-sm py-3 px-4 rounded-md transition-opacity hover:opacity-75">
          <LogOut className="size-4" />
          Sair
        </button>
      </div>
    </div>
  )
}
