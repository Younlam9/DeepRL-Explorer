# Deep RL Explorer

Deep RL Explorer est une application web interactive développée avec React pour présenter les concepts essentiels du Deep Reinforcement Learning de manière visuelle, pédagogique et moderne.

Le projet combine animations, schémas interactifs, simulation GridWorld, visualisation Q-Learning, graphique d’apprentissage et représentation d’un Deep Q-Network afin de rendre le Deep RL plus accessible et plus concret.

## Aperçu

Cette réalisation pratique a été conçue pour un cours de Deep Reinforcement Learning. Elle vise à dépasser le format classique d’un notebook ou d’une page statique en proposant une expérience interactive directement testable dans le navigateur.

Lien GitHub Pages prévu après validation :

```text
https://Younlam9.github.io/DeepRL-Explorer/
```

## Objectif pédagogique

L’objectif du projet est d’expliquer comment un agent apprend à prendre des décisions par interaction avec un environnement, en maximisant une récompense cumulée grâce à l’apprentissage par renforcement et aux réseaux de neurones.

L’application permet notamment de comprendre :

- le cycle Agent - Action - Environnement - Récompense - Nouvel état ;
- les notions fondamentales du Reinforcement Learning ;
- le fonctionnement intuitif du Q-Learning ;
- l’évolution des récompenses pendant l’apprentissage ;
- le rôle d’un réseau de neurones dans un Deep Q-Network ;
- les différences entre RL classique et Deep Reinforcement Learning.

## Fonctionnalités principales

- Navbar avec navigation fluide entre les sections
- Hero section animée et pédagogique
- Cartes interactives pour les concepts fondamentaux
- Schéma animé Agent-Environnement
- Simulation GridWorld 5x5 avec agent, objectif, piège et obstacles
- Contrôles manuels et simulation automatique
- Score de récompense cumulée, nombre d’étapes et état courant
- Section Q-Learning avec formule interactive
- Exemple numérique détaillé de mise à jour d’une Q-value
- Graphique d’apprentissage progressif avec Recharts
- Visualisation d’un Deep Q-Network avec neurones et Q-values
- Comparaison RL classique vs Deep RL
- Cartes d’applications réelles du Deep RL
- Design responsive pour ordinateur, tablette et téléphone

## Technologies utilisées

- React
- Vite
- Tailwind CSS
- Framer Motion
- Recharts
- Lucide React
- JavaScript / JSX

## Structure du projet

```text
DeepRL-Explorer/
├── public/
├── src/
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── ConceptCards.jsx
│   │   ├── AgentEnvironmentDiagram.jsx
│   │   ├── GridWorldSimulation.jsx
│   │   ├── QLearningSection.jsx
│   │   ├── LearningChart.jsx
│   │   ├── DQNVisualizer.jsx
│   │   ├── ComparisonSection.jsx
│   │   ├── ApplicationsSection.jsx
│   │   ├── Conclusion.jsx
│   │   └── Navbar.jsx
│   ├── data/
│   │   └── concepts.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .github/
│   └── workflows/
│       └── deploy.yml
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## Captures d’écran

Les captures seront ajoutées après validation locale du rendu final.

```text
docs/screenshots/hero.png
docs/screenshots/gridworld.png
docs/screenshots/dqn.png
```

## Installation locale

Cloner le repository :

```bash
git clone https://github.com/Younlam9/DeepRL-Explorer.git
```

Entrer dans le dossier du projet :

```bash
cd DeepRL-Explorer
```

Installer les dépendances :

```bash
npm install
```

## Lancement local

```bash
npm run dev
```

Avec la configuration GitHub Pages, l’application est servie localement sur :

```text
http://localhost:5173/DeepRL-Explorer/
```

Selon l’affichage de Vite, l’URL peut aussi apparaître sous la forme :

```text
http://127.0.0.1:5173/DeepRL-Explorer/
```

## Build de production

```bash
npm run build
```

Le dossier généré sera :

```text
dist/
```

## Prévisualisation du build

```bash
npm run preview
```

## Déploiement GitHub Pages

Le projet est déjà configuré pour être hébergé sur GitHub Pages avec Vite :

```js
base: '/DeepRL-Explorer/'
```

Un workflow GitHub Actions est disponible dans :

```text
.github/workflows/deploy.yml
```

Étapes recommandées après validation locale :

1. Créer le repository `DeepRL-Explorer` sur le compte GitHub `Younlam9`.
2. Pousser le projet sur la branche `main`.
3. Aller dans `Settings > Pages`.
4. Dans `Build and deployment`, choisir `GitHub Actions`.
5. Laisser le champ `Custom domain` vide.
6. Ne pas utiliser les workflows suggérés `Jekyll` ou `Static HTML`.
7. Ouvrir l’onglet `Actions` et attendre la fin du workflow.
8. Vérifier le site final :

```text
https://Younlam9.github.io/DeepRL-Explorer/
```

## Commandes utiles

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

## Auteur

**Youness Lamrini**

- GitHub : [Younlam9](https://github.com/Younlam9)
- LinkedIn : [Youness Lamrini](https://www.linkedin.com/in/youness-lamrini-987963286/)
- Repository : [DeepRL-Explorer](https://github.com/Younlam9/DeepRL-Explorer)

## Licence

Ce projet est réalisé dans un cadre académique pour une activité pratique de Deep Reinforcement Learning.
