import { motion } from 'framer-motion'
import { ArrowRight, BrainCircuit, Cpu } from 'lucide-react'

const layers = [
  { name: 'État', neurons: 3, x: 12 },
  { name: 'Couche 1', neurons: 5, x: 36 },
  { name: 'Couche 2', neurons: 4, x: 62 },
  { name: 'Q-values', neurons: 4, x: 88 },
]

const qValues = [
  { action: 'Haut', value: 1.2 },
  { action: 'Bas', value: 0.5 },
  { action: 'Gauche', value: 2.8 },
  { action: 'Droite', value: 1.7 },
]

function yPositions(count) {
  if (count === 1) return [30]
  return Array.from({ length: count }, (_, index) => 10 + (index * 40) / (count - 1))
}

function DQNVisualizer() {
  const connections = []
  layers.slice(0, -1).forEach((layer, layerIndex) => {
    const nextLayer = layers[layerIndex + 1]
    yPositions(layer.neurons).forEach((y1) => {
      yPositions(nextLayer.neurons).forEach((y2) => {
        connections.push({ x1: layer.x, y1, x2: nextLayer.x, y2 })
      })
    })
  })

  return (
    <section id="dqn" className="section-shell">
      <div className="mb-10">
        <span className="section-kicker">Deep Q-Network</span>
        <h2 className="section-heading">Quand un réseau de neurones remplace la Q-table</h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="glass-card overflow-hidden p-5">
          <div className="mb-5 flex flex-wrap items-center gap-3 text-sm text-slate-300">
            <span className="flex items-center gap-2 rounded-md bg-cyan-300/10 px-3 py-2 text-cyan-100">
              <Cpu size={17} /> État d’entrée
            </span>
            <ArrowRight size={18} className="text-slate-500" />
            <span className="flex items-center gap-2 rounded-md bg-violet-300/10 px-3 py-2 text-violet-100">
              <BrainCircuit size={17} /> Réseau de neurones
            </span>
            <ArrowRight size={18} className="text-slate-500" />
            <span className="rounded-md bg-emerald-300/10 px-3 py-2 text-emerald-100">
              Meilleure action
            </span>
          </div>

          <div className="relative h-[360px] rounded-lg border border-white/10 bg-slate-950/70">
            <svg viewBox="0 0 100 60" className="absolute inset-0 h-full w-full">
              {connections.map((connection, index) => (
                <motion.line
                  key={`${connection.x1}-${connection.y1}-${connection.x2}-${connection.y2}-${index}`}
                  x1={connection.x1}
                  y1={connection.y1}
                  x2={connection.x2}
                  y2={connection.y2}
                  stroke="rgba(103, 232, 249, 0.18)"
                  strokeWidth="0.25"
                  initial={{ pathLength: 0, opacity: 0.1 }}
                  animate={{ pathLength: [0.2, 1, 0.2], opacity: [0.1, 0.45, 0.1] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.01 }}
                />
              ))}

              {layers.map((layer) =>
                yPositions(layer.neurons).map((y, index) => (
                  <motion.circle
                    key={`${layer.name}-${index}`}
                    cx={layer.x}
                    cy={y}
                    r="1.8"
                    fill={layer.name === 'Q-values' ? '#a7f3d0' : '#67e8f9'}
                    initial={{ scale: 0.8, opacity: 0.7 }}
                    animate={{ scale: [0.8, 1.15, 0.8], opacity: [0.65, 1, 0.65] }}
                    transition={{ duration: 2.2, repeat: Infinity, delay: index * 0.15 }}
                  />
                )),
              )}
            </svg>

            <div className="absolute inset-x-0 bottom-4 grid grid-cols-4 px-3 text-center text-xs text-slate-400">
              {layers.map((layer) => (
                <span key={layer.name}>{layer.name}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="glass-card p-6">
            <p className="text-sm font-semibold text-violet-200">Q-values prédites</p>
            <div className="mt-4 grid gap-3">
              {qValues.map((item) => {
                const best = item.action === 'Gauche'
                return (
                  <div
                    key={item.action}
                    className={`flex items-center justify-between rounded-lg border p-4 ${
                      best
                        ? 'border-emerald-300/60 bg-emerald-300/15 text-emerald-50'
                        : 'border-white/10 bg-slate-950/60 text-slate-200'
                    }`}
                  >
                    <span className="font-semibold">{item.action}</span>
                    <span className="font-mono text-lg">{item.value}</span>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-slate-950/65 p-6">
            <p className="font-semibold text-white">Meilleure action: Gauche</p>
            <p className="mt-3 leading-7 text-slate-300">
              Dans un DQN, le réseau de neurones remplace la Q-table. Il reçoit l’état en entrée et
              prédit une Q-value pour chaque action possible. Ici, Gauche est choisi car sa Q-value
              vaut 2.8.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DQNVisualizer
