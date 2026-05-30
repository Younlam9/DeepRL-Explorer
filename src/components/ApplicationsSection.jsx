import { motion } from 'framer-motion'
import { Bot, Car, Gamepad2, HeartPulse, Leaf, LineChart, Truck, Zap } from 'lucide-react'
import { applications } from '../data/concepts'

const iconMap = {
  Bot,
  Car,
  Gamepad2,
  HeartPulse,
  Leaf,
  LineChart,
  Truck,
  Zap,
}

function ApplicationsSection() {
  return (
    <section id="applications" className="section-shell">
      <div className="mb-10">
        <span className="section-kicker">Applications réelles</span>
        <h2 className="section-heading">Où le Deep RL devient utile</h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {applications.map((application, index) => {
          const Icon = iconMap[application.icon] ?? Bot

          return (
            <motion.article
              key={application.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: index * 0.04 }}
              className="interactive-card"
            >
              <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-md border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
                <Icon size={24} />
              </span>
              <h3 className="text-lg font-semibold text-white">{application.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{application.text}</p>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}

export default ApplicationsSection
