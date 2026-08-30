// Un objet par projet. "id" sert dans l'URL (/projets/:id), garde-le unique et sans espace.
// "image" attend un chemin importé (voir en haut de Projects.jsx / ProjectDetail.jsx) ou une URL.

import laceenImg from "../assets/image.png"
import selebreoImg from "../assets/selebreo.png"

const projects = [
  {
    id: "projet-1",
    title: "Laceen",
    text: "Plateforme web dédiée au partage de contenus sur l'intelligence artificielle, la technologie et le gaming, développée avec React et PostgreSQL.",
    longText:
      "Laceen est une plateforme web de partage de contenus autour de l'intelligence artificielle, des nouvelles technologies et du gaming. Le projet propose une interface moderne permettant aux utilisateurs de découvrir différents articles et contenus classés par thématique. J'ai participé à la conception et au développement de la plateforme, notamment au niveau de l'interface, de la gestion des contenus et de l'intégration de la base de données PostgreSQL. Ce projet m'a permis de renforcer mes compétences en développement web, en gestion de données et en conception d'interfaces.",
    image: laceenImg,
    tags: ["React", "Web"],
    tech: ["React", "Tailwind CSS", "JavaScript", "PostgreSQL"],
    link: "#",
  },
  {
    id: "selebreo",
    title: "Selebreo",
    text: "Réseau social de découverte de talents avec compétition à élimination par classement, développé en React et Node.js, packagé en application mobile via Capacitor.",
    longText:
      "Selebreo est une application mobile de type réseau social où les utilisateurs publient des vidéos pour se faire découvrir et progressent dans un classement à élimination (Top 100 jusqu'au Top 1), avec système de vote de la communauté et duels lors des phases avancées. J'ai travaillé sur le frontend en React ainsi que sur le backend en Node.js (API, authentification, calcul automatique du classement), avant un packaging mobile avec Capacitor. Ce projet m'a permis d'approfondir la gestion d'une architecture complète (frontend, backend, base de données) ainsi que la conception d'un système de classement et d'anti-fraude pour les votes.",
    image: selebreoImg,
    tags: ["React", "Node.js", "Mobile"],
    tech: ["React", "Node.js", "PostgreSQL", "Capacitor"],
    link: "#",
  },
  // {
  //   id: "projet-3",
  //   title: "Nom du projet",
  //   text: "Description courte du projet : ce qu'il fait, les technologies utilisées, et le rôle que tu as joué.",
  //   longText:
  //     "Décris ici plus en détail le contexte du projet, le problème résolu, les choix techniques faits et ce que tu en as retenu.",
  //   image: null,
  //   tags: ["Full-stack"],
  //   tech: ["React", "Node.js"],
  //   link: "#",
  // },
]

export default projects