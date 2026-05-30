import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Activity,
  BarChart3,
  Bot,
  Globe2,
  MousePointerClick,
  Radar,
  RefreshCw,
  Route,
  Search,
  Target,
  Trophy,
} from 'lucide-react'
import { concepts } from '../data/concepts'

const iconMap = {
  Activity,
  BarChart3,
  Bot,
  Globe2,
  MousePointerClick,
  Radar,
  RefreshCw,
  Route,
  Search,
  Target,
  Trophy,
}

function ConceptCards() {
  const [selected, setSelected] = useState(concepts[0])
  const SelectedIcon = iconMap[selected.icon] ?? Bot

  return (
    <section id="concepts" className="section-shell">
      <div className="mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
        <div>
          <span className="section-kicker">Concepts fondamentaux</span>
          <h2 className="section-heading">Les blocs de base du Reinforcement Learning</h2>
        </div>
        <p className="max-w-2xl text-slate-300">
          Clique sur une carte pour relier chaque terme à une explication simple et un exemple
          concret.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {concepts.map((concept, index) => {
            const Icon = iconMap[concept.icon] ?? Bot
            const active = selected.title === concept.title

            return (
              <motion.button
                key={concept.title}
                type="button"
                onClick={() => setSelected(concept)}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: index * 0.03 }}
                className={`interactive-card text-left ${active ? 'border-cyan-300/70 bg-cyan-300/10 shadow-glow' : ''}`}
              >
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-md border border-white/10 bg-white/10 text-cyan-200">
                  <Icon size={22} />
                </span>
                <span className="block text-lg font-semibold text-white">{concept.title}</span>
                <span className="mt-2 block text-sm text-slate-400">{concept.short}</span>
              </motion.button>
            )
          })}
        </div>

        <motion.aside
          key={selected.title}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass-card p-6"
        >
          <div className="mb-6 flex items-center gap-4">
            <motion.span
              animate={{ rotate: [0, 8, -8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity }}
              className="flex h-14 w-14 items-center justify-center rounded-md border border-cyan-300/30 bg-cyan-300/10 text-cyan-200"
            >
              <SelectedIcon size={28} />
            </motion.span>
            <div>
              <p className="text-sm text-cyan-200">Concept sélectionné</p>
              <h3 className="text-2xl font-semibold text-white">{selected.title}</h3>
            </div>
          </div>
          <p className="text-base leading-7 text-slate-200">{selected.explanation}</p>
          <div className="mt-6 rounded-lg border border-emerald-300/20 bg-emerald-300/10 p-4">
            <p className="text-sm font-semibold text-emerald-200">Exemple</p>
            <p className="mt-2 text-sm leading-6 text-slate-200">{selected.example}</p>
          </div>
        </motion.aside>
      </div>
    </section>
  )
}

export default ConceptCards
