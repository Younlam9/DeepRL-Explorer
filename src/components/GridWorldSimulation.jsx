import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Bot,
  Flag,
  Pause,
  Play,
  RotateCcw,
  ShieldAlert,
  Square,
} from 'lucide-react'

const size = 5
const start = { x: 0, y: 0 }
const goal = { x: 4, y: 4 }
const trap = { x: 3, y: 2 }
const obstacles = [
  { x: 1, y: 1 },
  { x: 2, y: 1 },
  { x: 2, y: 3 },
  { x: 3, y: 3 },
]

const directions = {
  up: { x: 0, y: -1 },
  down: { x: 0, y: 1 },
  left: { x: -1, y: 0 },
  right: { x: 1, y: 0 },
}

const isSame = (a, b) => a.x === b.x && a.y === b.y
const isObstacle = (cell) => obstacles.some((obstacle) => isSame(obstacle, cell))
const inBounds = (cell) => cell.x >= 0 && cell.y >= 0 && cell.x < size && cell.y < size

function findPath(from) {
  const queue = [{ cell: from, path: [] }]
  const visited = new Set([`${from.x},${from.y}`])

  while (queue.length > 0) {
    const current = queue.shift()
    if (isSame(current.cell, goal)) return current.path

    Object.values(directions).forEach((direction) => {
      const next = { x: current.cell.x + direction.x, y: current.cell.y + direction.y }
      const key = `${next.x},${next.y}`

      if (!inBounds(next) || isObstacle(next) || isSame(next, trap) || visited.has(key)) {
        return
      }

      visited.add(key)
      queue.push({ cell: next, path: [...current.path, next] })
    })
  }

  return []
}

function GridWorldSimulation() {
  const [agent, setAgent] = useState(start)
  const [reward, setReward] = useState(0)
  const [steps, setSteps] = useState(0)
  const [message, setMessage] = useState('Choisis une action pour commencer l’épisode.')
  const [autoPath, setAutoPath] = useState([])
  const [autoRunning, setAutoRunning] = useState(false)

  const cells = useMemo(
    () =>
      Array.from({ length: size * size }, (_, index) => ({
        x: index % size,
        y: Math.floor(index / size),
      })),
    [],
  )

  const applyMove = (nextCell) => {
    if (!inBounds(nextCell)) {
      setReward((value) => value - 1)
      setMessage('Action invalide: le bord de la grille bloque le mouvement. Récompense -1.')
      return false
    }

    if (isObstacle(nextCell)) {
      setReward((value) => value - 1)
      setMessage('Obstacle détecté: l’agent reste sur place. Récompense -1.')
      return false
    }

    setAgent(nextCell)
    setSteps((value) => value + 1)

    if (isSame(nextCell, goal)) {
      setReward((value) => value + 10)
      setMessage('Succès: objectif atteint. Récompense +10.')
      setAutoRunning(false)
      return true
    }

    if (isSame(nextCell, trap)) {
      setReward((value) => value - 10)
      setMessage('Échec: l’agent est tombé dans le piège. Récompense -10.')
      setAutoRunning(false)
      return true
    }

    setReward((value) => value - 1)
    setMessage('Déplacement effectué. Coût de l’action: -1.')
    return true
  }

  const move = (directionName) => {
    setAutoRunning(false)
    const direction = directions[directionName]
    applyMove({ x: agent.x + direction.x, y: agent.y + direction.y })
  }

  const reset = () => {
    setAgent(start)
    setReward(0)
    setSteps(0)
    setAutoPath([])
    setAutoRunning(false)
    setMessage('Nouvel épisode: l’agent repart du coin supérieur gauche.')
  }

  const startAuto = () => {
    const path = findPath(agent)
    setAutoPath(path)
    setAutoRunning(path.length > 0)
    setMessage(
      path.length > 0
        ? 'Simulation automatique: l’agent suit un chemin sûr vers l’objectif.'
        : 'Aucun chemin sûr trouvé depuis cette position.',
    )
  }

  useEffect(() => {
    if (!autoRunning || autoPath.length === 0) return undefined

    const timer = window.setTimeout(() => {
      const [next, ...rest] = autoPath
      applyMove(next)
      setAutoPath(rest)
      if (rest.length === 0) setAutoRunning(false)
    }, 600)

    return () => window.clearTimeout(timer)
  }, [autoPath, autoRunning])

  return (
    <section id="gridworld" className="section-shell">
      <div className="mb-10">
        <span className="section-kicker">Simulation GridWorld</span>
        <h2 className="section-heading">Un mini-environnement pour expérimenter les récompenses</h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="glass-card p-5">
          <div className="grid aspect-square grid-cols-5 gap-2">
            {cells.map((cell) => {
              const agentHere = isSame(agent, cell)
              const goalHere = isSame(goal, cell)
              const trapHere = isSame(trap, cell)
              const obstacleHere = isObstacle(cell)

              return (
                <div
                  key={`${cell.x}-${cell.y}`}
                  className={`relative flex items-center justify-center rounded-md border text-sm ${
                    goalHere
                      ? 'border-emerald-300/50 bg-emerald-300/15 text-emerald-100'
                      : trapHere
                        ? 'border-rose-300/50 bg-rose-300/15 text-rose-100'
                        : obstacleHere
                          ? 'border-slate-500/50 bg-slate-800 text-slate-400'
                          : 'border-white/10 bg-slate-950/60 text-slate-500'
                  }`}
                >
                  {goalHere && <Flag size={22} />}
                  {trapHere && <ShieldAlert size={22} />}
                  {obstacleHere && <Square size={20} />}
                  {agentHere && (
                    <motion.span
                      layout
                      className="absolute flex h-10 w-10 items-center justify-center rounded-md border border-cyan-200 bg-cyan-300 text-slate-950 shadow-glow"
                    >
                      <Bot size={22} />
                    </motion.span>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        <div className="grid gap-4">
          <div className="glass-card grid gap-4 p-5 sm:grid-cols-3">
            <div>
              <p className="text-sm text-slate-400">Récompense cumulée</p>
              <p className="mt-1 text-3xl font-semibold text-white">{reward}</p>
            </div>
            <div>
              <p className="text-sm text-slate-400">Étapes</p>
              <p className="mt-1 text-3xl font-semibold text-white">{steps}</p>
            </div>
            <div>
              <p className="text-sm text-slate-400">État actuel</p>
              <p className="mt-1 text-3xl font-semibold text-white">
                ({agent.x}, {agent.y})
              </p>
            </div>
          </div>

          <div className="glass-card p-5">
            <p className="mb-4 text-sm font-semibold text-cyan-200">Contrôles</p>
            <div className="grid grid-cols-3 gap-3">
              <span />
              <button type="button" onClick={() => move('up')} className="secondary-button">
                <ArrowUp size={18} />
                Haut
              </button>
              <span />
              <button type="button" onClick={() => move('left')} className="secondary-button">
                <ArrowLeft size={18} />
                Gauche
              </button>
              <button type="button" onClick={reset} className="secondary-button">
                <RotateCcw size={18} />
                Reset
              </button>
              <button type="button" onClick={() => move('right')} className="secondary-button">
                <ArrowRight size={18} />
                Droite
              </button>
              <span />
              <button type="button" onClick={() => move('down')} className="secondary-button">
                <ArrowDown size={18} />
                Bas
              </button>
              <span />
            </div>
            <button
              type="button"
              onClick={autoRunning ? () => setAutoRunning(false) : startAuto}
              className="primary-button mt-4 w-full"
            >
              {autoRunning ? <Pause size={18} /> : <Play size={18} />}
              Simulation automatique
            </button>
          </div>

          <div className="rounded-lg border border-white/10 bg-slate-950/65 p-5">
            <p className="font-semibold text-white">{message}</p>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Cette simulation illustre comment un agent apprend à choisir des actions pour
              maximiser la récompense cumulée.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GridWorldSimulation
