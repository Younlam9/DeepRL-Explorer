import { ArrowUp, Code2, GraduationCap } from 'lucide-react'

function Conclusion() {
  const backToTop = () => {
    document.querySelector('#accueil')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="conclusion" className="section-shell pb-12">
      <div className="glass-card p-6 sm:p-8 lg:p-10">
        <span className="section-kicker">
          <GraduationCap size={15} />
          Conclusion
        </span>
        <h2 className="section-heading">Synthèse de la réalisation pratique</h2>
        <p className="mt-6 max-w-4xl text-base leading-8 text-slate-200">
          Le Deep Reinforcement Learning permet à un agent d’apprendre par interaction avec son
          environnement. Grâce aux récompenses, l’agent améliore progressivement sa stratégie.
          L’utilisation des réseaux de neurones permet d’appliquer ces méthodes à des problèmes
          complexes comme les jeux, la robotique, la conduite autonome ou l’optimisation.
        </p>

        <div className="mt-8 grid gap-4 rounded-lg border border-white/10 bg-slate-950/60 p-5 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-sm text-slate-400">Réalisation pratique</p>
            <p className="font-semibold text-white">Deep Reinforcement Learning</p>
          </div>
          <div>
            <p className="text-sm text-slate-400">Nom de l’étudiant</p>
            <p className="font-semibold text-white">Youness Lamrini</p>
          </div>
          <div>
            <p className="text-sm text-slate-400">GitHub</p>
            <p className="font-semibold text-white">Younlam9</p>
          </div>
          <div>
            <p className="text-sm text-slate-400">Repository</p>
            <p className="font-semibold text-white">DeepRL-Explorer</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="https://github.com/Younlam9/DeepRL-Explorer"
            target="_blank"
            rel="noreferrer"
            className="primary-button"
          >
            <Code2 size={18} />
            Voir le code sur GitHub
          </a>
          <button type="button" onClick={backToTop} className="secondary-button">
            <ArrowUp size={18} />
            Revenir en haut
          </button>
        </div>
      </div>
    </section>
  )
}

export default Conclusion
