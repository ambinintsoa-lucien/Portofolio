# Portfolio

Portfolio personnel en React + Tailwind CSS (Vite), avec pages de projets et routing.

## Démarrage

```bash
npm install
npm run dev
```

Puis ouvre l'URL affichée dans le terminal (généralement `http://localhost:5173`).

Pour une version de production :

```bash
npm run build
npm run preview
```

## Où modifier le contenu

- **`src/components/Hero.jsx`** — nom, rôle, et lien de téléchargement du CV.
- **`public/cv.pdf`** — place ici ton CV au format PDF (le bouton "Télécharger CV" pointe vers `/cv.pdf`).
- **`src/components/About.jsx`** — texte de présentation (bio).
- **`src/data/stats.js`** — chiffres clés animés (compteurs).
- **`src/data/formation.js`** — cartes de la section Formation.
- **`src/data/skills.js`** — compétences et note sur 10.
- **`src/data/experience.js`** — expériences pro (cartes "circuit imprimé").
- **`src/data/certifications.js`** — certifications/badges.
- **`src/data/projects.js`** — projets : titre, description courte/longue, image, tags (pour le filtre), technologies, lien. Chaque projet a désormais une page dédiée `/projets/<id>`.
- **`src/components/Vision.jsx`** — section "Ma vision" (texte + photo).
- **`src/components/Contact.jsx`** — email, téléphone, LinkedIn (`CONTACT_INFO`) — remplace `ton.email@example.com` par ta vraie adresse pour que le lien "Email" fonctionne.
- **`src/components/Footer.jsx`** — liens du footer (même remplacement d'email à faire ici).

## Pages de projets

Chaque carte projet est maintenant cliquable et mène à `/projets/<id>` avec image, titre, description longue, technologies et lien vers le site/repo (`src/pages/ProjectDetail.jsx`). L'`id` de chaque projet vient de `src/data/projects.js` — garde-le unique et sans espace.

## Filtrage des projets

Les `tags` de chaque projet dans `src/data/projects.js` génèrent automatiquement les boutons de filtre au-dessus de la grille de projets.

## Configurer le formulaire de contact (EmailJS)

1. Crée un compte gratuit sur [emailjs.com](https://www.emailjs.com).
2. Ajoute un **Email Service** (ex: Gmail).
3. Crée un **Email Template** avec les variables `user_name`, `user_email`, `message`.
4. Récupère ton **Service ID**, **Template ID** et **Public Key**, et renseigne-les en haut de `src/components/Contact.jsx`.

## SEO & favicon

- Titre, description et balises Open Graph/Twitter sont dans `index.html` — remplace "Ton Nom" par ton vrai nom.
- Le favicon est `public/favicon.svg` (style HUD) — remplace-le si tu veux ton propre logo.
- Ajoute une image `public/og-image.png` (1200×630px environ) pour un bel aperçu quand le lien est partagé sur LinkedIn/réseaux.

## Effets ajoutés

- **Préchargeur (`Preloader.jsx`)** — écran de chargement façon HUD au premier affichage du site.
- **Barre de progression de scroll + bouton retour en haut** (`ScrollProgress.jsx`).
- **Apparition au scroll** (`Reveal.jsx`) — chaque section a un style d'entrée qui lui est propre (néon pour À propos, glissement HUD pour Compétences/Projets, zoom pour Expérience, déploiement doré pour Contact...).
- **Hover** sur toutes les cartes/sections cliquables ou interactives.
- **"Ma vision"** — carte avec bordure au dégradé qui tourne en continu.

## Structure

```
src/
  components/   → Navbar, Hero, About, Stats, Formation, Skills, Experience,
                   Certifications, Projects, Vision, Contact, Footer,
                   CircuitCard, Reveal, Preloader, ScrollProgress
  pages/        → Home.jsx (page d'accueil), ProjectDetail.jsx (page projet)
  data/         → contenu éditable (stats, formation, skills, experience,
                   certifications, projects)
  assets/       → images (photo du hero, photo de la section vision...)
  hooks/        → useInView.js, useCountUp.js
```
