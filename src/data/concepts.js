export const navItems = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Concepts', href: '#concepts' },
  { label: 'Agent-Environnement', href: '#agent-environnement' },
  { label: 'GridWorld', href: '#gridworld' },
  { label: 'Q-Learning', href: '#q-learning' },
  { label: 'DQN', href: '#dqn' },
  { label: 'Applications', href: '#applications' },
  { label: 'Conclusion', href: '#conclusion' },
]

export const concepts = [
  {
    title: 'Agent',
    icon: 'Bot',
    short: 'L’entité qui décide.',
    explanation:
      'L’agent observe l’état de l’environnement et choisit une action pour atteindre un objectif.',
    example:
      'Par exemple, un robot qui apprend à se déplacer dans une pièce sans heurter les obstacles.',
  },
  {
    title: 'Environnement',
    icon: 'Globe2',
    short: 'Le monde où l’agent agit.',
    explanation:
      'L’environnement reçoit les actions de l’agent, change d’état et renvoie une récompense.',
    example:
      'Dans un jeu vidéo, l’environnement contient la carte, les ennemis, les règles et le score.',
  },
  {
    title: 'État',
    icon: 'Radar',
    short: 'La situation observée.',
    explanation:
      'Un état décrit ce que l’agent connaît à un instant donné pour prendre sa décision.',
    example:
      'Dans GridWorld, l’état peut être la position actuelle de l’agent, comme (2, 3).',
  },
  {
    title: 'Action',
    icon: 'MousePointerClick',
    short: 'Le choix effectué.',
    explanation:
      'Une action est une décision possible que l’agent peut exécuter dans un état.',
    example:
      'Dans une grille, les actions possibles sont monter, descendre, aller à gauche ou aller à droite.',
  },
  {
    title: 'Récompense',
    icon: 'Trophy',
    short: 'Le feedback reçu.',
    explanation:
      'La récompense indique si l’action choisie rapproche l’agent de son objectif ou non.',
    example:
      'Atteindre l’objectif peut donner +10 points, tandis qu’un piège peut donner -10 points.',
  },
  {
    title: 'Politique',
    icon: 'Route',
    short: 'La stratégie de décision.',
    explanation:
      'La politique indique quelle action l’agent choisit dans chaque état.',
    example:
      'Une politique peut dire: si l’objectif est à droite et la case est libre, aller à droite.',
  },
  {
    title: 'Valeur',
    icon: 'BarChart3',
    short: 'L’intérêt d’un état.',
    explanation:
      'La valeur estime la récompense future qu’un agent peut espérer obtenir à partir d’un état.',
    example:
      'Un état proche de l’objectif aura souvent une valeur plus élevée qu’un état proche du piège.',
  },
  {
    title: 'Q-value',
    icon: 'Activity',
    short: 'L’intérêt d’une action.',
    explanation:
      'La Q-value estime la qualité d’une action précise dans un état précis.',
    example:
      'Si Q((1, 2), droite) = 8, aller à droite depuis (1, 2) semble prometteur.',
  },
  {
    title: 'Épisode',
    icon: 'RefreshCw',
    short: 'Une tentative complète.',
    explanation:
      'Un épisode commence au départ et se termine quand l’agent réussit, échoue ou atteint une limite.',
    example:
      'Dans GridWorld, un épisode se termine quand l’agent atteint l’objectif ou tombe dans le piège.',
  },
  {
    title: 'Exploration',
    icon: 'Search',
    short: 'Essayer de nouvelles actions.',
    explanation:
      'L’exploration permet à l’agent de découvrir des stratégies qu’il ne connaît pas encore.',
    example:
      'Un agent peut tester un chemin inconnu pour vérifier s’il donne une meilleure récompense.',
  },
  {
    title: 'Exploitation',
    icon: 'Target',
    short: 'Utiliser ce qui marche.',
    explanation:
      'L’exploitation consiste à choisir l’action qui semble actuellement la meilleure.',
    example:
      'Après apprentissage, l’agent suit le chemin le plus rentable vers l’objectif.',
  },
]

export const applications = [
  {
    title: 'Jeux vidéo',
    icon: 'Gamepad2',
    text: 'Des agents apprennent à jouer, planifier et battre des stratégies complexes par essais et erreurs.',
  },
  {
    title: 'Robotique',
    icon: 'Bot',
    text: 'Un robot peut apprendre à marcher, saisir des objets ou éviter des obstacles grâce au Deep RL.',
  },
  {
    title: 'Voitures autonomes',
    icon: 'Car',
    text: 'Le Deep RL aide à apprendre des décisions de conduite dans des situations dynamiques.',
  },
  {
    title: 'Finance',
    icon: 'LineChart',
    text: 'Des modèles peuvent optimiser des décisions séquentielles sous incertitude et contrainte.',
  },
  {
    title: 'Santé',
    icon: 'HeartPulse',
    text: 'Il peut aider à personnaliser des stratégies de traitement ou de suivi patient.',
  },
  {
    title: 'Optimisation énergétique',
    icon: 'Zap',
    text: 'Un agent peut équilibrer consommation, coût et confort dans des systèmes énergétiques.',
  },
  {
    title: 'Agriculture intelligente',
    icon: 'Leaf',
    text: 'Le Deep RL peut optimiser l’irrigation, la récolte ou la gestion de ressources agricoles.',
  },
  {
    title: 'Logistique',
    icon: 'Truck',
    text: 'Il peut apprendre à planifier des routes, prioriser des livraisons et réduire les retards.',
  },
]
