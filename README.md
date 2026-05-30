<p align="center">
  <img src=".github/assets/banner.svg" alt="Deep RL Explorer banner" width="100%" />
</p>

<h1 align="center">🧠 Deep RL Explorer</h1>

<p align="center">
  <strong>Une application web interactive pour apprendre le Deep Reinforcement Learning par la visualisation, la simulation et l’expérimentation.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=06111f" alt="React" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Tailwind-CSS-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=06111f" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Framer-Motion-FF57D8?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/Recharts-Data%20Viz-22C55E?style=for-the-badge" alt="Recharts" />
</p>

<p align="center">
  <a href="#-démo-en-ligne">Démo</a>
  ·
  <a href="#-aperçu-visuel">Aperçu</a>
  ·
  <a href="#-fonctionnalités">Fonctionnalités</a>
  ·
  <a href="#-installation-locale">Installation</a>
  ·
  <a href="#-auteur">Auteur</a>
</p>

---

## ✨ Présentation

**Deep RL Explorer** est une réalisation pratique moderne conçue pour un cours de **Deep Reinforcement Learning**.

Le projet transforme les notions théoriques du Deep RL en une expérience interactive : l’utilisateur peut explorer les concepts, manipuler une simulation GridWorld, visualiser une courbe d’apprentissage et comprendre le rôle d’un réseau de neurones dans un Deep Q-Network.

> 🎯 Objectif : rendre le Deep Reinforcement Learning plus clair, plus visuel et plus mémorable qu’un simple notebook.

---

## 🌐 Démo en ligne

<p align="center">
  <a href="https://younlam9.github.io/DeepRL-Explorer/">
    <img src="https://img.shields.io/badge/Ouvrir%20la%20démo-GitHub%20Pages-2EA44F?style=for-the-badge&logo=githubpages&logoColor=white" alt="Ouvrir la démo GitHub Pages" />
  </a>
</p>

<p align="center">
  <strong>🔗 Lien du projet :</strong>
  <a href="https://younlam9.github.io/DeepRL-Explorer/">https://younlam9.github.io/DeepRL-Explorer/</a>
</p>

---

## 🖼️ Aperçu visuel

<p align="center">
  <img src=".github/assets/preview-hero.svg" alt="Hero preview" width="32%" />
  <img src=".github/assets/preview-gridworld.svg" alt="GridWorld preview" width="32%" />
  <img src=".github/assets/preview-dqn.svg" alt="DQN preview" width="32%" />
</p>

---

## 🎓 Objectif pédagogique

L’application explique comment un agent apprend à prendre de meilleures décisions en interagissant avec un environnement.

Elle met en avant les idées principales du Deep RL :

- 🧩 un agent observe un état ;
- 🎮 il choisit une action ;
- 🌍 l’environnement réagit ;
- 🏆 une récompense guide l’apprentissage ;
- 📈 la stratégie s’améliore progressivement ;
- 🧠 un réseau de neurones peut remplacer une Q-table classique.

---

## 🚀 Fonctionnalités

| Module | Description |
| --- | --- |
| 🏠 Hero interactif | Introduction moderne avec animation du cycle Agent → Action → Environnement → Récompense |
| 🧠 Concepts RL | Cartes interactives pour Agent, État, Action, Politique, Q-value, Exploration, Exploitation |
| 🔁 Agent-Environnement | Schéma animé et cliquable du cycle d’apprentissage |
| 🤖 GridWorld | Simulation 5x5 avec agent, objectif, piège, obstacles, score et état courant |
| 🎯 Contrôles | Déplacement manuel, reset et simulation automatique |
| 📐 Q-Learning | Formule interactive avec explication des symboles |
| 🧮 Exemple numérique | Calcul détaillé d’une nouvelle Q-value |
| 📊 Learning Chart | Courbe de récompense cumulée avec Recharts |
| 🧬 DQN Visualizer | Réseau de neurones animé avec Q-values fictives |
| ⚖️ Comparaison | RL classique vs Deep Reinforcement Learning |
| 🌍 Applications | Jeux vidéo, robotique, voitures autonomes, santé, finance, énergie, agriculture et logistique |

---

## 🛠️ Stack technique

<p align="center">
  <img src="https://skillicons.dev/icons?i=react,vite,tailwind,js,github" alt="Tech stack icons" />
</p>

- **React** pour l’interface utilisateur
- **Vite** pour un environnement rapide et moderne
- **Tailwind CSS** pour le design responsive
- **Framer Motion** pour les animations fluides
- **Recharts** pour les graphiques pédagogiques
- **Lucide React** pour les icônes
- **JavaScript / JSX** pour le développement des composants

---

## 📁 Structure du projet

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
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

---

## 💻 Installation locale

Cloner le projet :

```bash
git clone https://github.com/Younlam9/DeepRL-Explorer.git
```

Entrer dans le dossier :

```bash
cd DeepRL-Explorer
```

Installer les dépendances :

```bash
npm install
```

Lancer l’application :

```bash
npm run dev
```

Ouvrir dans le navigateur :

```text
http://localhost:5173/DeepRL-Explorer/
```

---

## 🧪 Commandes utiles

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

---

## 👤 Auteur

<h3 align="center">Youness Lamrini</h3>

<p align="center">
  <a href="https://github.com/Younlam9">
    <img src="https://img.shields.io/badge/Youness%20Lamrini-GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub - Youness Lamrini" />
  </a>
  <a href="https://www.linkedin.com/in/youness-lamrini-987963286/">
    <img src="https://img.shields.io/badge/Youness%20Lamrini-LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn - Youness Lamrini" />
  </a>
</p>

---

<p align="center">
  ⭐ Projet académique réalisé pour présenter le Deep Reinforcement Learning de manière interactive.
</p>
