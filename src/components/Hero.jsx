import { motion } from 'framer-motion'
import { ArrowRight, Bot, BrainCircuit, Cpu, Network, Sparkles } from 'lucide-react'

const cycleItems = [
  { label: 'Agent', icon: Bot, color: 'text-cyan-200' },
  { label: 'Action', icon: ArrowRight, color: 'text-emerald-200' },
  { label: 'Environnement', icon: Network, color: 'text-violet-200' },
  { label: 'Récompense', icon: Sparkles, color: 'text-amber-200' },
  { label: 'Nouvel état', icon: Cpu, color: 'text-blue-200' },
]

function Hero() {
  const scrollToStart = () => {
    document.querySelector('#concepts')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="accueil" className="section-shell min-h-screen pt-32">
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-kicker">
            <BrainCircuit size={15} />
            Réalisation pratique Deep RL
          </span>
          <h1 className="max-w-4xl text-5xl font-semibold tracking-normal text-white sm:text-6xl lg:text-7xl">
            Deep Reinforcement Learning Explorer
          </h1>
          <p className="mt-5 max-w-2xl text-xl text-cyan-100">
            Apprendre le Deep RL par l’interaction, la visualisation et la simulation
          </p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">
            Le Deep Reinforcement Learning combine l’apprentissage par renforcement et les réseaux
            de neurones afin de permettre à un agent d’apprendre par essais et erreurs dans un
            environnement complexe.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button type="button" onClick={scrollToStart} className="primary-button">
              Commencer l’exploration
              <ArrowRight size={18} />
            </button>
            <a
              href="https://github.com/Younlam9/DeepRL-Explorer"
              target="_blank"
              rel="noreferrer"
              className="secondary-button"
            >
              Repository prévu
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative"
        >
          <div className="absolute -left-4 top-8 h-28 w-28 rounded-full bg-cyan-300/10 blur-2xl" />
          <div className="absolute bottom-4 right-4 h-36 w-36 rounded-full bg-violet-400/10 blur-2xl" />

          <div className="glass-card relative overflow-hidden p-5 sm:p-6">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-cyan-200">Cycle d’apprentissage</p>
                <p className="text-xs text-slate-400">Agent → Action → Feedback</p>
              </div>
              <span className="rounded-md border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs text-emerald-200">
                interactif
              </span>
            </div>

            <div className="relative grid gap-4">
              {cycleItems.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.label}
                    animate={{ x: index % 2 === 0 ? [0, 8, 0] : [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.25 }}
                    className="flex items-center gap-4 rounded-lg border border-white/10 bg-slate-950/70 p-4"
                  >
                    <span className={`flex h-11 w-11 items-center justify-center rounded-md bg-white/10 ${item.color}`}>
                      <Icon size={22} />
                    </span>
                    <span className="font-semibold text-white">{item.label}</span>
                    {index < cycleItems.length - 1 && (
                      <ArrowRight className="ml-auto text-slate-500" size={18} />
                    )}
                  </motion.div>
                )
              })}
            </div>

            <motion.div
              className="absolute right-6 top-20 h-2 w-2 rounded-full bg-cyan-200"
              animate={{ y: [0, 300], opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 3.6, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
