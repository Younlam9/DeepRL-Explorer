import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Bot, CircleDollarSign, Cpu, Globe2, MousePointerClick, Play } from 'lucide-react'

const nodes = [
  {
    id: 'agent',
    title: 'Agent',
    icon: Bot,
    text: 'L’agent observe l’état courant et choisit une action selon sa stratégie.',
  },
  {
    id: 'action',
    title: 'Action',
    icon: MousePointerClick,
    text: 'L’action est la décision prise: avancer, tourner, acheter, attendre, etc.',
  },
  {
    id: 'environment',
    title: 'Environnement',
    icon: Globe2,
    text: 'L’environnement applique l’action, modifie la situation et calcule un feedback.',
  },
  {
    id: 'reward',
    title: 'Récompense',
    icon: CircleDollarSign,
    text: 'La récompense mesure immédiatement si l’action était utile, neutre ou pénalisante.',
  },
  {
    id: 'state',
    title: 'Nouvel état',
    icon: Cpu,
    text: 'Le nouvel état devient la prochaine observation de l’agent, et le cycle recommence.',
  },
]

function AgentEnvironmentDiagram() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [running, setRunning] = useState(false)
  const active = nodes[activeIndex]
  const ActiveIcon = active.icon

  useEffect(() => {
    if (!running) return undefined

    const timer = window.setTimeout(() => {
      setActiveIndex((index) => {
        const next = (index + 1) % nodes.length
        if (next === 0) setRunning(false)
        return next
      })
    }, 850)

    return () => window.clearTimeout(timer)
  }, [activeIndex, running])

  const startCycle = () => {
    setActiveIndex(0)
    setRunning(true)
  }

  return (
    <section id="agent-environnement" className="section-shell">
      <div className="mb-10">
        <span className="section-kicker">Boucle d’apprentissage</span>
        <h2 className="section-heading">Schéma interactif Agent-Environnement</h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="glass-card p-5 sm:p-6">
          <div className="flex flex-col items-stretch gap-4 lg:flex-row lg:items-center">
            {nodes.map((node, index) => {
              const Icon = node.icon
              const isActive = index === activeIndex

              return (
                <div key={node.id} className="flex flex-1 items-center gap-3 lg:flex-col">
                  <button
                    type="button"
                    onClick={() => {
                      setRunning(false)
                      setActiveIndex(index)
                    }}
                    className={`w-full rounded-lg border p-4 text-left transition lg:text-center ${
                      isActive
                        ? 'border-cyan-300 bg-cyan-300/15 shadow-glow'
                        : 'border-white/10 bg-slate-950/55 hover:border-cyan-300/40'
                    }`}
                  >
                    <motion.span
                      animate={isActive ? { scale: [1, 1.08, 1] } : { scale: 1 }}
                      transition={{ duration: 0.8, repeat: isActive ? Infinity : 0 }}
                      className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-md bg-white/10 text-cyan-200"
                    >
                      <Icon size={24} />
                    </motion.span>
                    <span className="block text-sm font-semibold text-white">{node.title}</span>
                  </button>

                  {index < nodes.length - 1 && (
                    <motion.span
                      animate={{ opacity: [0.35, 1, 0.35], x: [0, 4, 0] }}
                      transition={{ duration: 1.2, repeat: Infinity }}
                      className="hidden text-cyan-200 lg:block"
                    >
                      <ArrowRight size={22} />
                    </motion.span>
                  )}
                </div>
              )
            })}
          </div>

          <div className="mt-6 flex flex-col justify-between gap-4 rounded-lg border border-white/10 bg-slate-950/60 p-4 sm:flex-row sm:items-center">
            <p className="text-sm text-slate-300">
              L’agent agit, reçoit un signal, puis ajuste sa stratégie pour le prochain état.
            </p>
            <button type="button" onClick={startCycle} className="primary-button">
              <Play size={17} />
              Lancer le cycle
            </button>
          </div>
        </div>

        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-6"
        >
          <div className="mb-5 flex items-center gap-4">
            <span className="flex h-14 w-14 items-center justify-center rounded-md border border-violet-300/30 bg-violet-300/10 text-violet-200">
              <ActiveIcon size={28} />
            </span>
            <div>
              <p className="text-sm text-violet-200">Étape active</p>
              <h3 className="text-2xl font-semibold text-white">{active.title}</h3>
            </div>
          </div>
          <p className="leading-7 text-slate-200">{active.text}</p>
        </motion.div>
      </div>
    </section>
  )
}

export default AgentEnvironmentDiagram
