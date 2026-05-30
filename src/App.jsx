import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ConceptCards from './components/ConceptCards'
import AgentEnvironmentDiagram from './components/AgentEnvironmentDiagram'
import GridWorldSimulation from './components/GridWorldSimulation'
import QLearningSection from './components/QLearningSection'
import LearningChart from './components/LearningChart'
import DQNVisualizer from './components/DQNVisualizer'
import ComparisonSection from './components/ComparisonSection'
import ApplicationsSection from './components/ApplicationsSection'
import Conclusion from './components/Conclusion'

function App() {
  return (
    <div className="app-background min-h-screen text-slate-100">
      <div className="grid-overlay pointer-events-none fixed inset-0 opacity-60" />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <ConceptCards />
        <AgentEnvironmentDiagram />
        <GridWorldSimulation />
        <QLearningSection />
        <LearningChart />
        <DQNVisualizer />
        <ComparisonSection />
        <ApplicationsSection />
        <Conclusion />
      </main>
    </div>
  )
}

export default App
