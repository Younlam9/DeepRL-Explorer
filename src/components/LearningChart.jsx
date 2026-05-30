import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { Play } from 'lucide-react'

const learningData = [
  { episode: 1, reward: -18 },
  { episode: 2, reward: -15 },
  { episode: 3, reward: -17 },
  { episode: 4, reward: -11 },
  { episode: 5, reward: -8 },
  { episode: 6, reward: -9 },
  { episode: 7, reward: -4 },
  { episode: 8, reward: -2 },
  { episode: 9, reward: 1 },
  { episode: 10, reward: 3 },
  { episode: 11, reward: 5 },
  { episode: 12, reward: 7 },
  { episode: 13, reward: 8 },
  { episode: 14, reward: 9 },
  { episode: 15, reward: 10 },
]

function LearningChart() {
  const [visibleCount, setVisibleCount] = useState(5)
  const [playing, setPlaying] = useState(false)
  const visibleData = learningData.slice(0, visibleCount)

  useEffect(() => {
    if (!playing) return undefined

    const timer = window.setInterval(() => {
      setVisibleCount((count) => {
        if (count >= learningData.length) {
          setPlaying(false)
          return count
        }
        return count + 1
      })
    }, 450)

    return () => window.clearInterval(timer)
  }, [playing])

  const simulate = () => {
    setVisibleCount(1)
    setPlaying(true)
  }

  return (
    <section className="section-shell">
      <div className="mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
        <div>
          <span className="section-kicker">Graphique d’apprentissage</span>
          <h2 className="section-heading">La récompense augmente avec les épisodes</h2>
        </div>
        <button type="button" onClick={simulate} className="primary-button">
          <Play size={18} />
          Simuler l’apprentissage
        </button>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_0.45fr]">
        <div className="glass-card h-[360px] p-4">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={visibleData} margin={{ top: 20, right: 24, bottom: 10, left: 0 }}>
              <CartesianGrid stroke="rgba(148, 163, 184, 0.16)" strokeDasharray="4 4" />
              <XAxis
                dataKey="episode"
                tick={{ fill: '#cbd5e1', fontSize: 12 }}
                axisLine={{ stroke: 'rgba(148, 163, 184, 0.25)' }}
                label={{ value: 'Épisodes', position: 'insideBottom', offset: -4, fill: '#94a3b8' }}
              />
              <YAxis
                tick={{ fill: '#cbd5e1', fontSize: 12 }}
                axisLine={{ stroke: 'rgba(148, 163, 184, 0.25)' }}
                label={{
                  value: 'Récompense cumulée',
                  angle: -90,
                  position: 'insideLeft',
                  fill: '#94a3b8',
                }}
              />
              <Tooltip
                contentStyle={{
                  background: '#0f172a',
                  border: '1px solid rgba(103, 232, 249, 0.25)',
                  borderRadius: '8px',
                  color: '#e2e8f0',
                }}
              />
              <Line
                type="monotone"
                dataKey="reward"
                name="Récompense"
                stroke="#67e8f9"
                strokeWidth={3}
                dot={{ r: 4, fill: '#67e8f9' }}
                activeDot={{ r: 6 }}
                isAnimationActive
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <motion.div
          key={visibleCount}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-6"
        >
          <p className="text-sm font-semibold text-cyan-200">Lecture pédagogique</p>
          <p className="mt-4 leading-7 text-slate-200">
            Au début, l’agent explore beaucoup. Ensuite, il apprend les meilleures actions et
            obtient de meilleures récompenses.
          </p>
          <div className="mt-6 rounded-lg border border-cyan-300/20 bg-cyan-300/10 p-4">
            <p className="text-sm text-slate-300">Épisodes affichés</p>
            <p className="mt-1 text-3xl font-semibold text-white">
              {visibleCount}/{learningData.length}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default LearningChart
