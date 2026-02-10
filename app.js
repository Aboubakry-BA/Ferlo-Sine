/* ========================================
   FERLO-SINE APP.JS
   Logique interactive pour le site
   ======================================== */

// ============================================
// 1. MENU HAMBURGER (MOBILE)
// ============================================

const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');

if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';

        // Toggle menu
        menuToggle.setAttribute('aria-expanded', !isExpanded);
        mainNav.classList.toggle('active');

        // Empêcher le scroll du body quand le menu est ouvert
        if (!isExpanded) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });

    // Fermer le menu quand on clique sur un lien
    const navLinks = mainNav.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.setAttribute('aria-expanded', 'false');
            mainNav.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Fermer le menu si on clique en dehors
    document.addEventListener('click', (e) => {
        if (!mainNav.contains(e.target) && !menuToggle.contains(e.target)) {
            menuToggle.setAttribute('aria-expanded', 'false');
            mainNav.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

// ============================================
// 2. MODALES (pour les réalisations)
// ============================================

// Ouvrir une modale
const modalTriggers = document.querySelectorAll('[data-modal]');
modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
        const modalId = trigger.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('active');
            modal.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';

            // Focus sur le bouton de fermeture pour l'accessibilité
            const closeButton = modal.querySelector('.modal-close');
            if (closeButton) {
                closeButton.focus();
            }
        }
    });
});

// Fermer une modale
const closeModalElements = document.querySelectorAll('[data-close-modal]');
closeModalElements.forEach(element => {
    element.addEventListener('click', (e) => {
        const modal = element.closest('.modal');
        if (modal) {
            modal.classList.remove('active');
            modal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        }
    });
});

// Fermer avec la touche Échap
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const activeModal = document.querySelector('.modal.active');
        if (activeModal) {
            activeModal.classList.remove('active');
            activeModal.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        }
    }
});

// ============================================
// 3. DONNÉES DES PUBLICATIONS
// ============================================

// PLACEHOLDER: Remplacer ces publications par vos vraies données
const publications = [
    {
        id: 1,
        title: "Neutralité carbone et systèmes agro-sylvo-pastoraux au Sahel : approche par modélisation d'accompagnement",
        authors: "Dia A., Sall M., Ndiaye O., Tamba S.",
        year: 2025,
        type: "article",
        abstract: "Cette étude explore l'utilisation du modèle MAELIA pour évaluer la faisabilité de la neutralité carbone dans les territoires sahéliens en intégrant les dynamiques agricoles, pastorales et forestières.",
        doi: "https://doi.org/10.example/placeholder-1",
        keywords: ["neutralité carbone", "MAELIA", "modélisation", "Sahel"]
    },
    {
        id: 2,
        title: "Co-construction de scénarios prospectifs avec les acteurs locaux : enseignements du Scenario Lab de Diohine",
        authors: "Ndiaye O., Fall C., Sarr B., Dia A.",
        year: 2025,
        type: "conference",
        abstract: "Présentation de la démarche participative de Scenario Lab appliquée au territoire de Diohine. Analyse des processus de dialogue et d'élaboration collective de scénarios pour la gestion durable des terres.",
        doi: "https://doi.org/10.example/placeholder-2",
        keywords: ["prospective", "participation", "scénarios", "Diohine"]
    },
    {
        id: 3,
        title: "Dégradation des terres et services écosystémiques dans le périmètre de la Grande Muraille Verte",
        authors: "Sall M., Tamba S., Gueye L., Dia A.",
        year: 2024,
        type: "article",
        abstract: "Analyse quantitative de la dégradation des terres et de ses impacts sur les services écosystémiques (eau, alimentation, énergie) dans les zones ciblées par l'initiative GMV.",
        doi: "https://doi.org/10.example/placeholder-3",
        keywords: ["dégradation", "services écosystémiques", "GMV"]
    },
    {
        id: 4,
        title: "Rapport technique : Instanciation du modèle MAELIA pour le territoire de Diohine",
        authors: "Équipe Ferlo-Sine",
        year: 2024,
        type: "rapport",
        abstract: "Documentation technique détaillée du processus d'instanciation de MAELIA : collecte de données, paramétrage, calibration et simulations de scénarios pour le territoire de Diohine.",
        doi: "https://example.com/rapport-maelia-diohine",
        keywords: ["MAELIA", "modèle", "Diohine", "documentation"]
    },
    {
        id: 5,
        title: "Pratiques agro-pastorales et séquestration du carbone : analyse comparative sur un gradient d'occupation du sol",
        authors: "Sarr B., Ndiaye O., Fall C.",
        year: 2024,
        type: "article",
        abstract: "Étude comparative des capacités de séquestration du carbone selon différentes pratiques agricoles et pastorales observées sur un gradient d'occupation du sol représentatif du Sahel.",
        doi: "https://doi.org/10.example/placeholder-5",
        keywords: ["carbone", "agro-pastoralisme", "séquestration", "occupation du sol"]
    },
    {
        id: 6,
        title: "Livre numérique : Collecte de données de terrain dans le Ferlo – Protocoles et enseignements",
        authors: "Gueye L., Dia A., Tamba S., Sall M.",
        year: 2023,
        type: "rapport",
        abstract: "Synthèse méthodologique de la collecte de données de terrain : dictionnaire de données, protocoles d'enquête, retours d'expérience et recommandations pour de futures collectes dans des contextes similaires.",
        doi: "https://example.com/livre-collecte-terrain",
        keywords: ["collecte", "méthodologie", "terrain", "protocoles"]
    },
    {
        id: 7,
        title: "Tree Talker : une application mobile pour le suivi participatif des arbres et parcelles au Sahel",
        authors: "Fall C., Ndiaye O., Sarr B.",
        year: 2023,
        type: "conference",
        abstract: "Présentation de l'application Tree Talker et de son utilisation sur le terrain pour le suivi géolocalisé des arbres, parcelles et indicateurs environnementaux co-définis avec les populations locales.",
        doi: "https://doi.org/10.example/placeholder-7",
        keywords: ["application mobile", "suivi", "arbres", "participation"]
    },
    {
        id: 8,
        title: "Modélisation multi-agents et prospective territoriale : apport pour les politiques de restauration des terres",
        authors: "Tamba S., Dia A., Gueye L.",
        year: 2023,
        type: "these",
        abstract: "Thèse explorant l'apport de la modélisation multi-agents et de la prospective territoriale pour éclairer les politiques publiques de restauration des terres dans les contextes sahéliens.",
        doi: "https://doi.org/10.example/placeholder-8",
        keywords: ["modélisation multi-agents", "prospective", "politiques publiques", "restauration"]
    }
];

// ============================================
// 4. FILTRAGE DES PUBLICATIONS
// ============================================

// Vérifier si on est sur la page publications
const publicationsList = document.getElementById('publicationsList');

if (publicationsList) {
    const searchInput = document.getElementById('searchInput');
    const yearFilter = document.getElementById('yearFilter');
    const typeFilter = document.getElementById('typeFilter');
    const resetFilters = document.getElementById('resetFilters');
    const resetFromNoResults = document.getElementById('resetFromNoResults');
    const resultsCount = document.getElementById('resultsCount');
    const noResults = document.getElementById('noResults');

    // Fonction pour rendre une publication
    function renderPublication(pub) {
        const typeLabels = {
            'article': 'Article de revue',
            'conference': 'Communication',
            'rapport': 'Rapport',
            'these': 'Thèse'
        };

        return `
            <article class="publication-card">
                <div class="publication-header">
                    <h3 class="publication-title">${pub.title}</h3>
                    <span class="publication-type type-${pub.type}">${typeLabels[pub.type]}</span>
                </div>
                <div class="publication-meta">
                    <span class="publication-authors">${pub.authors}</span>
                    <span class="publication-year">${pub.year}</span>
                </div>
                <p class="publication-abstract">${pub.abstract}</p>
                <a href="${pub.doi}" class="publication-link" target="_blank" rel="noopener">
                    Accéder à la publication →
                </a>
            </article>
        `;
    }

    // Fonction pour filtrer les publications
    function filterPublications() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        const selectedYear = yearFilter.value;
        const selectedType = typeFilter.value;

        const filtered = publications.filter(pub => {
            // Filtre de recherche textuelle
            const matchesSearch = !searchTerm ||
                pub.title.toLowerCase().includes(searchTerm) ||
                pub.authors.toLowerCase().includes(searchTerm) ||
                pub.abstract.toLowerCase().includes(searchTerm) ||
                pub.keywords.some(kw => kw.toLowerCase().includes(searchTerm));

            // Filtre par année
            const matchesYear = !selectedYear || pub.year.toString() === selectedYear;

            // Filtre par type
            const matchesType = !selectedType || pub.type === selectedType;

            return matchesSearch && matchesYear && matchesType;
        });

        return filtered;
    }

    // Fonction pour afficher les publications
    function displayPublications() {
        const filtered = filterPublications();

        if (filtered.length === 0) {
            publicationsList.style.display = 'none';
            noResults.style.display = 'block';
            resultsCount.textContent = 'Aucune publication trouvée';
        } else {
            publicationsList.style.display = 'flex';
            noResults.style.display = 'none';
            publicationsList.innerHTML = filtered.map(pub => renderPublication(pub)).join('');

            const count = filtered.length;
            const totalCount = publications.length;
            resultsCount.textContent = count === totalCount
                ? `${count} publication${count > 1 ? 's' : ''}`
                : `${count} publication${count > 1 ? 's' : ''} sur ${totalCount}`;
        }
    }

    // Fonction pour réinitialiser les filtres
    function resetAllFilters() {
        searchInput.value = '';
        yearFilter.value = '';
        typeFilter.value = '';
        displayPublications();
    }

    // Event listeners
    searchInput.addEventListener('input', displayPublications);
    yearFilter.addEventListener('change', displayPublications);
    typeFilter.addEventListener('change', displayPublications);
    resetFilters.addEventListener('click', resetAllFilters);
    resetFromNoResults.addEventListener('click', resetAllFilters);

    // Affichage initial
    displayPublications();
}

// ============================================
// 5. SMOOTH SCROLL (amélioré pour les ancres)
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Ignorer les liens vides ou "#"
        if (!href || href === '#') {
            e.preventDefault();
            return;
        }

        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// 6. ANIMATIONS AU SCROLL (Intersection Observer)
// ============================================

// Ajouter une animation douce à l'apparition des cartes et sections
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observer les éléments à animer
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(
        '.card, .feature-card, .content-block, .step, .stakeholder-item, .publication-card'
    );

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ============================================
// 7. ACCESSIBILITÉ : Gestion du focus
// ============================================

// Améliorer la navigation au clavier
document.addEventListener('keydown', (e) => {
    // Fermer les modales avec Escape (déjà géré au-dessus)

    // Ajouter d'autres améliorations d'accessibilité si nécessaire
});

// ============================================
// 8. UTILITAIRES
// ============================================

// Fonction utilitaire pour déboguer (à retirer en production)
function log(message, data) {
    if (typeof console !== 'undefined') {
        console.log(`[Ferlo-Sine] ${message}`, data || '');
    }
}

// Log de confirmation du chargement
log('App.js chargé avec succès');

/* ============================================
   NOTES POUR PERSONNALISATION :

   1. PUBLICATIONS :
      - Modifier le tableau "publications" ci-dessus
      - Ajouter vos vraies données (titre, auteurs, année, type, abstract, DOI)
      - Les publications apparaîtront automatiquement sur publications.html

   2. MODALES :
      - Modifier le contenu des modales dans index.html
      - Ajouter vos vrais liens et textes

   3. LIENS :
      - Remplacer les liens placeholder dans le footer
      - Ajouter vos vraies URLs (GitHub, contact, etc.)

   4. ANIMATIONS :
      - Les animations au scroll sont optionnelles
      - Commentez la section 6 si vous ne les voulez pas

   ============================================ */
