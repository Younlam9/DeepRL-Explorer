import { motion } from 'framer-motion'
import { BrainCircuit, Table2 } from 'lucide-react'

const classical = [
  'Utilise souvent une Q-table',
  'Fonctionne bien avec des petits espaces d’états',
  'Plus simple à comprendre',
  'Limité pour les problèmes complexes',
]

const deep = [
  'Utilise des réseaux de neurones',
  'Fonctionne avec des environnements complexes',
  'Peut traiter des images ou de grands espaces d’états',
  'Utilisé dans les jeux, la robotique et la conduite autonome',
]

function ComparisonSection() {
  return (
    <section className="section-shell">
      <div className="mb-10">
        <span className="section-kicker">Comparaison</span>
        <h2 className="section-heading">RL classique vs Deep Reinforcement Learning</h2>
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-6"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-md bg-cyan-300/10 text-cyan-200">
              <Table2 size={24} />
            </span>
            <h3 className="text-2xl font-semibold text-white">RL classique</h3>
          </div>
          <ul className="space-y-3 text-slate-300">
            {classical.map((item) => (
              <li key={item} className="rounded-md border border-white/10 bg-slate-950/55 p-3">
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="glass-card p-6"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-md bg-violet-300/10 text-violet-200">
              <BrainCircuit size={24} />
            </span>
            <h3 className="text-2xl font-semibold text-white">Deep RL</h3>
          </div>
          <ul className="space-y-3 text-slate-300">
            {deep.map((item) => (
              <li key={item} className="rounded-md border border-white/10 bg-slate-950/55 p-3">
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

export default ComparisonSection
