import { useState } from 'react'
import { motion } from 'framer-motion'

const symbols = [
  {
    key: 'q',
    label: 'Q(s,a)',
    title: 'Q(s,a)',
    text: 'La valeur actuelle de l’action a dans l’état s.',
    example: 'Si l’agent est en (1, 2), Q peut estimer si aller à droite est intéressant.',
  },
  {
    key: 'alpha',
    label: 'α',
    title: 'Alpha',
    text: 'Le taux d’apprentissage, qui contrôle à quelle vitesse la Q-value change.',
    example: 'Avec α = 0.5, l’agent garde une partie de l’ancienne estimation.',
  },
  {
    key: 'r',
    label: 'r',
    title: 'Récompense',
    text: 'Le feedback immédiat reçu après l’action.',
    example: 'Atteindre l’objectif donne par exemple r = 10.',
  },
  {
    key: 'gamma',
    label: 'γ',
    title: 'Gamma',
    text: 'Le facteur de réduction qui donne plus ou moins d’importance au futur.',
    example: 'Avec γ = 0.9, les récompenses futures restent très importantes.',
  },
  {
    key: 'sp',
    label: "s'",
    title: 'Nouvel état',
    text: 'L’état obtenu après l’action.',
    example: 'Après un déplacement vers la droite, l’agent passe de (1, 2) à (2, 2).',
  },
  {
    key: 'max',
    label: "max Q(s',a')",
    title: 'Meilleure valeur future',
    text: 'La meilleure Q-value estimée dans le nouvel état.',
    example: 'Si le meilleur choix futur vaut 4, cette valeur influence la mise à jour.',
  },
]

function QLearningSection() {
  const [active, setActive] = useState(symbols[0])

  return (
    <section id="q-learning" className="section-shell">
      <div className="mb-10">
        <span className="section-kicker">Q-Learning</span>
        <h2 className="section-heading">Comprendre la mise à jour d’une Q-value</h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="glass-card p-6">
          <div className="rounded-lg border border-cyan-300/20 bg-slate-950/70 p-5 text-center">
            <p className="text-lg leading-10 text-white sm:text-2xl">
              <button
                type="button"
                onClick={() => setActive(symbols[0])}
                className={`formula-token ${active.key === 'q' ? 'active' : ''}`}
              >
                Q(s,a)
              </button>{' '}
              ←{' '}
              <button
                type="button"
                onClick={() => setActive(symbols[0])}
                className={`formula-token ${active.key === 'q' ? 'active' : ''}`}
              >
                Q(s,a)
              </button>{' '}
              +{' '}
              <button
                type="button"
                onClick={() => setActive(symbols[1])}
                className={`formula-token ${active.key === 'alpha' ? 'active' : ''}`}
              >
                α
              </button>{' '}
              [
              <button
                type="button"
                onClick={() => setActive(symbols[2])}
                className={`formula-token ${active.key === 'r' ? 'active' : ''}`}
              >
                r
              </button>{' '}
              +{' '}
              <button
                type="button"
                onClick={() => setActive(symbols[3])}
                className={`formula-token ${active.key === 'gamma' ? 'active' : ''}`}
              >
                γ
              </button>{' '}
              <button
                type="button"
                onClick={() => setActive(symbols[5])}
                className={`formula-token ${active.key === 'max' ? 'active' : ''}`}
              >
                max Q(s’,a’)
              </button>{' '}
              -{' '}
              <button
                type="button"
                onClick={() => setActive(symbols[0])}
                className={`formula-token ${active.key === 'q' ? 'active' : ''}`}
              >
                Q(s,a)
              </button>
              ]
            </p>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {symbols.map((symbol) => (
              <button
                key={symbol.key}
                type="button"
                onClick={() => setActive(symbol)}
                className={`formula-token ${active.key === symbol.key ? 'active' : ''}`}
              >
                {symbol.label}
              </button>
            ))}
          </div>

          <div className="mt-6 rounded-lg border border-emerald-300/20 bg-emerald-300/10 p-5">
            <p className="font-semibold text-emerald-100">Exemple numérique</p>
            <div className="mt-3 grid gap-2 text-sm text-slate-200 sm:grid-cols-2">
              <p>Q actuel = 2</p>
              <p>α = 0.5</p>
              <p>r = 10</p>
              <p>γ = 0.9</p>
              <p>max Q futur = 4</p>
            </div>
            <div className="mt-4 space-y-2 rounded-md bg-slate-950/60 p-4 font-mono text-sm text-cyan-100">
              <p>Nouvelle Q-value = 2 + 0.5 × [10 + 0.9 × 4 - 2]</p>
              <p>Nouvelle Q-value = 2 + 0.5 × [11.6]</p>
              <p>Nouvelle Q-value = 7.8</p>
            </div>
          </div>
        </div>

        <motion.aside
          key={active.key}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-6"
        >
          <p className="text-sm text-violet-200">Symbole sélectionné</p>
          <h3 className="mt-2 text-3xl font-semibold text-white">{active.title}</h3>
          <p className="mt-5 leading-7 text-slate-200">{active.text}</p>
          <div className="mt-6 rounded-lg border border-violet-300/20 bg-violet-300/10 p-4">
            <p className="text-sm font-semibold text-violet-100">Phrase simple</p>
            <p className="mt-2 text-sm leading-6 text-slate-200">{active.example}</p>
          </div>
        </motion.aside>
      </div>
    </section>
  )
}

export default QLearningSection
