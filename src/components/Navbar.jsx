import { useState } from 'react'
import { BrainCircuit, Menu, X } from 'lucide-react'
import { navItems } from '../data/concepts'

function Navbar() {
  const [open, setOpen] = useState(false)

  const handleClick = (href) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => handleClick('#accueil')}
          className="flex items-center gap-3 text-left"
          aria-label="Revenir à l'accueil"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-md border border-cyan-300/30 bg-cyan-300/10 text-cyan-200 shadow-glow">
            <BrainCircuit size={22} />
          </span>
          <span>
            <span className="block text-sm font-semibold text-white">Deep RL Explorer</span>
            <span className="block text-xs text-slate-400">Simulation interactive</span>
          </span>
        </button>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.href}
              type="button"
              onClick={() => handleClick(item.href)}
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-slate-100 lg:hidden"
          aria-label="Ouvrir la navigation"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-slate-950/95 px-4 py-3 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                type="button"
                onClick={() => handleClick(item.href)}
                className="rounded-md px-3 py-3 text-left text-sm font-medium text-slate-200 hover:bg-white/10"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
