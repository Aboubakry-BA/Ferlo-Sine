/* ========================================
   FERLO-SINE APP.JS
   Logique interactive pour le site
   ======================================== */

// ============================================
// INTERSECTION OBSERVER (animations au scroll)
// Déclaré globalement pour être utilisé partout
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('anim-visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

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

// Publications du projet Ferlo-Sine
const publications = [
    {
        id: 1,
        title: "EcosysML: A metamodel for socio-ecological systems (SES) integrating machine learning",
        authors: "Kane C.A., Diaw S., Ba M., Bah A., Delay E.",
        year: 2025,
        type: "conference",
        abstract: "EcosysML est un métamodèle innovant conçu pour représenter et analyser les systèmes socio-écologiques (SES) en intégrant des techniques d'apprentissage automatique. Ce cadre conceptuel permet de modéliser les interactions complexes entre composantes sociales et écologiques tout en exploitant la puissance prédictive du machine learning pour simuler et anticiper les dynamiques de ces systèmes interdépendants.",
        doi: "https://link.springer.com/chapter/10.1007/978-3-031-99958-1_2",
        keywords: ["systèmes socio-écologiques", "métamodèle", "machine learning", "modélisation"]
    },
    {
        id: 2,
        title: "Short-term forecasting of land use and land cover changes in Senegal's Great Green Wall using deep learning and Sentinel-2 imagery",
        authors: "Diouf M.D., Ba M., Diaw S., Fall A., Delay E., Masse D., Bah A.",
        year: 2026,
        type: "conference",
        abstract: "Cette étude propose une approche de prévision à court terme des changements d'occupation et d'utilisation des sols dans la zone de la Grande Muraille Verte du Sénégal. En combinant l'apprentissage profond (deep learning) et les images satellites Sentinel-2, les auteurs développent un modèle prédictif capable d'anticiper les dynamiques territoriales et d'appuyer les décisions de gestion durable des terres.",
        doi: "https://doi.org/10.1007/978-3-031-77099-8_35",
        keywords: ["deep learning", "Sentinel-2", "occupation du sol", "Grande Muraille Verte", "prévision"]
    },
    {
        id: 3,
        title: "Towards a predictive and explainable mapping of soil organic carbon stocks with TabPFN and SHAP: a case study from agro-sylvo-pastoral ecosystems in Senegal",
        authors: "Diouf M.D., Diaw S., Ba M., Delay E., Bah A., Masse D.",
        year: 2026,
        type: "conference",
        abstract: "Cette recherche développe une méthode de cartographie prédictive et explicable des stocks de carbone organique dans les sols des écosystèmes agro-sylvo-pastoraux sénégalais. En utilisant TabPFN (Tabular Prior-data Fitted Networks) et SHAP (SHapley Additive exPlanations), l'approche permet non seulement de prédire la distribution du carbone organique, mais aussi d'expliquer les facteurs qui influencent ces stocks, offrant ainsi un outil précieux pour la gestion durable des sols.",
        doi: "https://doi.org/10.example/ic3it-2026",
        keywords: ["carbone organique", "TabPFN", "SHAP", "cartographie", "explicabilité", "IA"]
    },
    {
        id: 4,
        title: "Reinforcement learning and agent-based modeling for socio-ecological systems management: A systematic review",
        authors: "Kane C.A., Diaw S., Ba M., Bah A.",
        year: 2026,
        type: "conference",
        abstract: "Cette revue systématique examine l'utilisation conjointe de l'apprentissage par renforcement (reinforcement learning) et de la modélisation à base d'agents pour la gestion des systèmes socio-écologiques. Les auteurs analysent l'état de l'art, identifient les approches prometteuses et discutent des défis et opportunités pour intégrer ces deux paradigmes de modélisation dans le contexte de la gestion durable des ressources naturelles et des territoires.",
        doi: "https://doi.org/10.example/ic3it-2026-rl",
        keywords: ["apprentissage par renforcement", "modélisation multi-agents", "systèmes socio-écologiques", "gestion durable", "revue systématique"]
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
            'conference': 'Conférence indexée',
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
// 5. SECTION ACTIVITÉS + LIGHTBOX
// ============================================

/*
 * Pour ajouter vos propres photos :
 * 1. Placez les images dans le dossier  images/activities/
 * 2. Ajoutez un objet dans le tableau `activities` ci-dessous
 *    avec : id, title, category, date, description, img (chemin relatif)
 *
 * Catégories disponibles : reunion | terrain | prototype | formation | autre
 */
const activities = [
    {
        id: 1,
        title: "Réunion de lancement du projet",
        category: "reunion",
        date: "Janvier 2024",
        description: "Réunion de lancement réunissant l'ensemble des partenaires : ESP, IRD, CIRAD.",
        img: null  // Remplacer par : 'images/activities/reunion-lancement.jpg'
    },
    {
        id: 2,
        title: "Mission de terrain à Diohine",
        category: "terrain",
        date: "Mars 2024",
        description: "Collecte de données pédologiques et d'occupation du sol sur le site de Diohine.",
        img: null  // Remplacer par : 'images/activities/terrain-diohine.jpg'
    },
    {
        id: 3,
        title: "Prototype capteur Tree Talker",
        category: "prototype",
        date: "Juin 2024",
        description: "Développement au laboratoire du prototype de capteur de flux de sève.",
        img: null
    },
    {
        id: 4,
        title: "Atelier de co-construction des scénarios",
        category: "reunion",
        date: "Septembre 2024",
        description: "Atelier participatif avec les acteurs locaux pour co-construire les scénarios prospectifs.",
        img: null
    },
    {
        id: 5,
        title: "Formation modélisation MAELIA",
        category: "formation",
        date: "Octobre 2024",
        description: "Session de formation sur la plateforme de modélisation multi-agents MAELIA.",
        img: null
    },
    {
        id: 6,
        title: "Déploiement capteurs sur le terrain",
        category: "terrain",
        date: "Novembre 2024",
        description: "Installation des capteurs Tree Talker sur les arbres du site de Diohine.",
        img: null
    }
];

const categoryLabels = {
    reunion: 'Réunion',
    terrain: 'Terrain',
    prototype: 'Prototype',
    formation: 'Formation',
    autre: 'Autre'
};

const activitiesGrid = document.getElementById('activitiesGrid');
const activitiesFilters = document.getElementById('activitiesFilters');

if (activitiesGrid && activitiesFilters) {
    let currentFilter = 'all';
    let currentLightboxIndex = 0;
    let filteredActivities = [...activities];

    // Rendu d'une carte activité
    function renderActivityCard(activity, index) {
        const catClass = `cat-${activity.category}`;
        const catLabel = categoryLabels[activity.category] || 'Autre';

        const imgHtml = activity.img
            ? `<img src="${activity.img}" alt="${activity.title}" loading="lazy">`
            : `<div class="activity-card-img-placeholder">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>
                        <polyline points="21 15 16 10 5 21"/>
                    </svg>
                    <span>Photo à venir</span>
               </div>`;

        return `
            <div class="activity-card" data-category="${activity.category}" data-index="${index}" tabindex="0" role="button" aria-label="Voir ${activity.title}">
                <div class="activity-card-img">
                    ${imgHtml}
                    <div class="activity-overlay">
                        <div class="activity-overlay-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                                <line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="activity-card-body">
                    <span class="activity-category-badge ${catClass}">${catLabel}</span>
                    <div class="activity-card-title">${activity.title}</div>
                    <p class="activity-card-date">${activity.date}</p>
                </div>
            </div>
        `;
    }

    // Affichage des cartes filtrées
    function displayActivities() {
        filteredActivities = currentFilter === 'all'
            ? [...activities]
            : activities.filter(a => a.category === currentFilter);

        if (filteredActivities.length === 0) {
            activitiesGrid.innerHTML = `
                <div class="activities-empty-hint" style="grid-column:1/-1;">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <rect x="3" y="3" width="18" height="18" rx="2"/>
                        <circle cx="8.5" cy="8.5" r="1.5"/>
                        <polyline points="21 15 16 10 5 21"/>
                    </svg>
                    <p>Aucune activité dans cette catégorie pour le moment.</p>
                </div>`;
        } else {
            activitiesGrid.innerHTML = filteredActivities
                .map((a, i) => renderActivityCard(a, i))
                .join('');
        }

        // Ré-attacher les listeners de clic sur les cartes
        activitiesGrid.querySelectorAll('.activity-card').forEach(card => {
            card.addEventListener('click', () => openLightbox(parseInt(card.dataset.index)));
            card.addEventListener('keydown', e => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openLightbox(parseInt(card.dataset.index));
                }
            });
        });

        // pas d'animation sur les activity-cards (cliquables)
    }

    // Filtres
    activitiesFilters.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            activitiesFilters.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            displayActivities();
        });
    });

    displayActivities();

    // --- LIGHTBOX ---
    const lightbox = document.getElementById('lightbox');
    const lightboxImgWrap = document.getElementById('lightboxImgWrap');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const lightboxClose = document.getElementById('lightboxClose');
    const lightboxOverlay = document.getElementById('lightboxOverlay');
    const lightboxPrev = document.getElementById('lightboxPrev');
    const lightboxNext = document.getElementById('lightboxNext');
    const lightboxCounter = document.getElementById('lightboxCounter');

    function openLightbox(index) {
        currentLightboxIndex = index;
        renderLightboxSlide();
        lightbox.classList.add('active');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        lightboxClose.focus();
    }

    function closeLightbox() {
        lightbox.classList.remove('active');
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    function renderLightboxSlide() {
        const activity = filteredActivities[currentLightboxIndex];
        if (!activity) return;

        const imgHtml = activity.img
            ? `<img src="${activity.img}" alt="${activity.title}">`
            : `<div class="lightbox-img-placeholder">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <rect x="3" y="3" width="18" height="18" rx="2"/>
                        <circle cx="8.5" cy="8.5" r="1.5"/>
                        <polyline points="21 15 16 10 5 21"/>
                    </svg>
                    <p>Image à ajouter dans images/activities/</p>
               </div>`;

        lightboxImgWrap.innerHTML = imgHtml;
        lightboxCaption.innerHTML = `
            <h4>${activity.title}</h4>
            <p>${activity.description} · ${activity.date}</p>
        `;
        lightboxCounter.textContent = `${currentLightboxIndex + 1} / ${filteredActivities.length}`;
    }

    function prevLightbox() {
        currentLightboxIndex = (currentLightboxIndex - 1 + filteredActivities.length) % filteredActivities.length;
        renderLightboxSlide();
    }

    function nextLightbox() {
        currentLightboxIndex = (currentLightboxIndex + 1) % filteredActivities.length;
        renderLightboxSlide();
    }

    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    if (lightboxOverlay) lightboxOverlay.addEventListener('click', closeLightbox);
    if (lightboxPrev) lightboxPrev.addEventListener('click', prevLightbox);
    if (lightboxNext) lightboxNext.addEventListener('click', nextLightbox);

    document.addEventListener('keydown', e => {
        if (!lightbox || !lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') prevLightbox();
        if (e.key === 'ArrowRight') nextLightbox();
    });

    // Swipe mobile sur lightbox
    let lbTouchStart = 0;
    if (lightbox) {
        lightbox.addEventListener('touchstart', e => { lbTouchStart = e.changedTouches[0].screenX; });
        lightbox.addEventListener('touchend', e => {
            const diff = lbTouchStart - e.changedTouches[0].screenX;
            if (diff > 50) nextLightbox();
            if (diff < -50) prevLightbox();
        });
    }
}

// ============================================
// 6. CAROUSEL D'IMAGES
// ============================================

const carouselInner = document.getElementById('carouselInner');
const carouselPrev = document.getElementById('carouselPrev');
const carouselNext = document.getElementById('carouselNext');
const carouselIndicators = document.getElementById('carouselIndicators');

if (carouselInner && carouselPrev && carouselNext && carouselIndicators) {
    // Images du carrousel (à personnaliser avec vos propres images)
    const carouselImages = [
        { src: 'images/carousel1.png', alt: '' },
        { src: 'images/carousel2.png', alt: '' },
        { src: 'images/carousel3.png', alt: '' },
        { src: 'images/carousel4.png', alt: '' }
    ];

    let currentSlide = 0;

    // Créer les slides
    carouselImages.forEach((img, index) => {
        const slide = document.createElement('div');
        slide.className = 'carousel-slide';
        slide.innerHTML = `<img src="${img.src}" alt="${img.alt}">`;
        carouselInner.appendChild(slide);
    });

    // Créer les indicateurs
    carouselImages.forEach((img, index) => {
        const indicator = document.createElement('button');
        indicator.className = 'carousel-indicator';
        indicator.setAttribute('aria-label', `Aller à l'image ${index + 1}`);
        if (index === 0) indicator.classList.add('active');
        indicator.addEventListener('click', () => goToSlide(index));
        carouselIndicators.appendChild(indicator);
    });

    // Fonction pour aller à une slide spécifique
    function goToSlide(n) {
        currentSlide = n;
        if (currentSlide < 0) currentSlide = carouselImages.length - 1;
        if (currentSlide >= carouselImages.length) currentSlide = 0;

        carouselInner.style.transform = `translateX(-${currentSlide * 100}%)`;

        // Mettre à jour les indicateurs
        const indicators = carouselIndicators.querySelectorAll('.carousel-indicator');
        indicators.forEach((ind, i) => {
            ind.classList.toggle('active', i === currentSlide);
        });
    }

    // Boutons précédent/suivant
    carouselPrev.addEventListener('click', () => goToSlide(currentSlide - 1));
    carouselNext.addEventListener('click', () => goToSlide(currentSlide + 1));

    // Auto-play (optionnel)
    let autoplayInterval = setInterval(() => goToSlide(currentSlide + 1), 5000);

    // Pause auto-play au survol
    const carousel = document.querySelector('.carousel');
    if (carousel) {
        carousel.addEventListener('mouseenter', () => clearInterval(autoplayInterval));
        carousel.addEventListener('mouseleave', () => {
            autoplayInterval = setInterval(() => goToSlide(currentSlide + 1), 5000);
        });
    }

    // Support du swipe sur mobile
    let touchStartX = 0;
    let touchEndX = 0;

    carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    carousel.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        if (touchStartX - touchEndX > 50) {
            goToSlide(currentSlide + 1);
        }
        if (touchEndX - touchStartX > 50) {
            goToSlide(currentSlide - 1);
        }
    }

    // Support des touches clavier
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') goToSlide(currentSlide - 1);
        if (e.key === 'ArrowRight') goToSlide(currentSlide + 1);
    });
}

// ============================================
// 7. SMOOTH SCROLL (amélioré pour les ancres)
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
// 8. ANIMATIONS AU SCROLL (Intersection Observer)
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Uniquement les éléments qui ne contiennent PAS de boutons interactifs
    document.querySelectorAll(
        '.feature-card, .content-block, .step, .stakeholder-item'
    ).forEach(el => {
        el.classList.add('anim-hidden');
        observer.observe(el);
    });
});

// ============================================
// 9. ACCESSIBILITÉ : Gestion du focus
// ============================================

// Améliorer la navigation au clavier
document.addEventListener('keydown', (e) => {
    // Fermer les modales avec Escape (déjà géré au-dessus)

    // Ajouter d'autres améliorations d'accessibilité si nécessaire
});

// ============================================
// 10. UTILITAIRES
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
