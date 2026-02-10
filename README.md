# Ferlo-Sine (PC2) - Site Web du Projet

![Ferlo-Sine](https://img.shields.io/badge/Ferlo--Sine-PC2-a67c52?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

Site web officiel du projet de recherche **Ferlo-Sine (PC2)** sur les trajectoires pour la neutralité carbone et le développement durable le long d'un gradient agro-sylvo-pastoral au Sénégal.

## 🌍 À propos du projet

Le projet PC2 Ferlo-Sine favorise une recherche interdisciplinaire pour répondre aux enjeux de dégradation des ressources agro-sylvo-pastorales au Sahel, d'adaptation au changement climatique et d'amélioration des conditions de vie des populations vulnérables.

### Objectifs principaux

- **Modélisation d'évaluation intégrée (MEI)** pour la neutralité carbone et le développement durable
- **Réintégration des arbres** dans les systèmes agro-pastoraux
- **Approche interdisciplinaire** mobilisant chercheurs, acteurs locaux et institutions
- Développement d'un **simulateur multi-agents** via la plateforme MAELIA

## 🚀 Démonstration

> 🔗 **Site en ligne** : [À déployer sur Netlify](https://netlify.com)

## 📋 Structure du projet

```
ferlo-sine/
├── index.html              # Page d'accueil
├── publications.html       # Liste des publications scientifiques
├── contact.html           # Page équipe et contact
├── styles.css             # Styles CSS du site
├── app.js                 # Logique JavaScript (filtres, navigation)
├── sasseme.zip            # Données d'instanciation MAELIA (optionnel)
└── README.md              # Ce fichier
```

## 🛠️ Technologies utilisées

- **HTML5** - Structure sémantique
- **CSS3** - Design moderne et responsive (mobile-first)
- **JavaScript Vanilla** - Sans frameworks ni dépendances
- **SVG inline** - Icônes vectorielles légères

### Caractéristiques techniques

✅ **100% statique** - Aucun build nécessaire
✅ **Responsive** - Adapté mobile, tablette, desktop
✅ **Accessible** - WCAG 2.1 AA (contrastes, focus, aria-labels)
✅ **Performant** - Pas de dépendances externes
✅ **SEO-friendly** - Meta descriptions, structure sémantique

## 🎨 Design

- **Palette de couleurs** inspirée du Sahel
  - Primaire : `#a67c52` (Ocre/terre)
  - Secondaire : `#6b8e6f` (Vert doux/végétation)
- **Typographie** : Police système + Georgia pour les titres
- **Layout** : Grilles CSS modernes, cartes, sections aérées

## 📦 Installation et utilisation

### Prérequis

Aucun ! Le site fonctionne directement dans un navigateur.

### Utilisation locale

1. **Clonez le repository**
   ```bash
   git clone https://github.com/votre-username/ferlo-sine.git
   cd ferlo-sine
   ```

2. **Ouvrez le site**
   - Double-cliquez sur `index.html`
   - Ou utilisez un serveur local :
     ```bash
     # Avec Python 3
     python -m http.server 8000

     # Avec Node.js
     npx serve

     # Avec PHP
     php -S localhost:8000
     ```
   - Accédez à `http://localhost:8000`

### Déploiement

Le site peut être déployé sur n'importe quelle plateforme d'hébergement statique :

- **Netlify** (recommandé)
- **Vercel**
- **GitHub Pages**
- **Cloudflare Pages**

Voir le guide de déploiement détaillé dans [DEPLOYMENT.md](DEPLOYMENT.md) *(à créer si nécessaire)*.

## 📄 Pages du site

### 🏠 Accueil (`index.html`)
- Hero section avec titre et CTA
- Section Contexte (défis sahéliens)
- Le projet en bref (hypothèse, approche, outil MAELIA)
- Objectifs du projet
- Réalisations (3 livrables avec modales)
- Méthodologie Scenario Lab
- Parties prenantes

### 📚 Publications (`publications.html`)
- Liste des publications scientifiques du projet
- Filtres dynamiques (recherche, année, type)
- 4 publications actuellement :
  - EcosysML (Kane et al., 2025)
  - Prévision LULC avec Deep Learning (Diouf et al., 2026)
  - Cartographie carbone avec TabPFN (Diouf et al., 2026)
  - Revue RL & ABM (Kane et al., 2026)

### 👥 Équipe (`contact.html`)
- Contact principal : **Pr. Alassane BAH** (alassane.bah@esp.sn)
- 6 chercheurs principaux (ESP, IRD, CIRAD)
- 6 doctorants et jeunes chercheurs
- Institutions partenaires

## ✏️ Personnalisation

### Modifier les publications

Éditez le fichier `app.js` (lignes 103-146) :

```javascript
const publications = [
    {
        id: 1,
        title: "Votre titre",
        authors: "Auteur1, Auteur2",
        year: 2026,
        type: "article", // article, conference, rapport, these
        abstract: "Votre résumé",
        doi: "https://doi.org/...",
        keywords: ["mot1", "mot2"]
    },
    // ...
];
```

### Modifier les couleurs

Éditez `styles.css` (lignes 12-17) :

```css
:root {
    --color-primary: #a67c52;        /* Couleur principale */
    --color-secondary: #6b8e6f;      /* Couleur secondaire */
    /* ... */
}
```

### Ajouter un membre d'équipe

Dans `contact.html`, dupliquez une carte `.team-card` et modifiez :
- Initiales dans `.team-avatar`
- Badge institution/rôle
- Nom, rôle, institution/focus

## 📊 Données du projet

### Réalisations disponibles

1. **Instanciation de Diohine sur MAELIA**
   - Fichier : `sasseme.zip` (téléchargeable)
   - Documentation technique disponible

2. **Livre numérique - Collecte de données**
   - Lien : [https://diohine.netlify.app/docs/intro.html](https://diohine.netlify.app/docs/intro.html)

3. **Application Tree Talker**
   - En développement

## 🤝 Contribution

Ce site est maintenu par l'équipe du Scenario Lab Ferlo-Sine.

### Signaler un problème

Ouvrez une issue sur GitHub ou contactez directement :
- **Pr. Alassane BAH** : [alassane.bah@esp.sn](mailto:alassane.bah@esp.sn)

### Proposer des modifications

1. Forkez le projet
2. Créez une branche (`git checkout -b feature/amelioration`)
3. Committez vos changements (`git commit -m 'Ajout de...'`)
4. Poussez vers la branche (`git push origin feature/amelioration`)
5. Ouvrez une Pull Request

## 📝 Licence

Ce projet est sous licence **MIT** - voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 👥 Équipe

### Coordinateur
- **Pr. Alassane BAH** - École Supérieure Polytechnique (ESP)

### Chercheurs principaux
- **Jean-Luc CHOTTE** - IRD
- **Dominique MASSE** - IRD
- **Etienne DELAY** - CIRAD
- **Pr. Samba DIAW** - ESP
- **Pr. Mandicou BA** - ESP

### Doctorants
- **Cheikhou A. KANE** - Systèmes socio-écologiques & ML
- **Anna NDIAYE** - Modélisation agro-pastorale
- **Mame Diarra DIOUF** - Télédétection & Deep Learning
- **Ousmane FAYE** - Géomatique
- **Aboubakry BA** - Modélisation & Développement
- **Momar SOURANG** - Prospective territoriale

## 🏛️ Institutions partenaires

- **ESP** - École Supérieure Polytechnique de Dakar
- **IRD** - Institut de Recherche pour le Développement
- **CIRAD** - Centre de coopération Internationale en Recherche Agronomique

## 🔗 Liens utiles

- **Publications** : Voir [publications.html](publications.html)
- **MAELIA** : Plateforme de modélisation multi-agents
- **Livre numérique** : [https://diohine.netlify.app](https://diohine.netlify.app)

## 📞 Contact

**Point de contact principal :**
Pr. Alassane BAH
École Supérieure Polytechnique (ESP)
Email : [alassane.bah@esp.sn](mailto:alassane.bah@esp.sn)

---

<div align="center">

**Ferlo-Sine (PC2)** - Trajectoires pour la neutralité carbone au Sahel

© 2026 - Tous droits réservés

</div>
