// ===================================
// DONNÉES DES RESSOURCES - STRUCTURE PEARLTREES
// ===================================

const resourcesData = {
    'mdph-aah': {
        title: 'MDPH - AAH',
        icon: 'fa-file-contract',
        color: '#667eea',
        resources: [
            {
                title: 'Site officiel des MDPH',
                url: 'https://www.mdph.fr',
                description: 'Portail national des Maisons Départementales des Personnes Handicapées',
                type: 'Site officiel',
                tags: ['Officiel', 'National']
            },
            {
                title: 'Simulateur AAH - Service Public',
                url: 'https://www.service-public.fr/simulateur/calcul/AAH',
                description: 'Calculez vos droits à l\'Allocation aux Adultes Handicapés',
                type: 'Outil',
                tags: ['Simulateur', 'AAH']
            },
            {
                title: 'Guide AAH 2024 - Handicap.fr',
                url: 'https://www.handicap.fr/aah',
                description: 'Guide complet sur l\'AAH : montants, conditions, démarches',
                type: 'Guide',
                tags: ['AAH', 'Complet']
            },
            {
                title: 'Formulaire Cerfa 15692 - Demande MDPH',
                url: 'https://www.service-public.fr/particuliers/vosdroits/R19993',
                description: 'Télécharger le formulaire officiel de demande MDPH',
                type: 'Formulaire',
                tags: ['Cerfa', 'Téléchargement']
            },
            {
                title: 'Certificat médical MDPH - Cerfa 15695',
                url: 'https://www.service-public.fr/particuliers/vosdroits/R19994',
                description: 'Formulaire médical à joindre à votre dossier MDPH',
                type: 'Formulaire',
                tags: ['Médical', 'Cerfa']
            }
        ]
    },
    
    'culture': {
        title: 'Culture',
        icon: 'fa-palette',
        color: '#f093fb',
        resources: [
            {
                title: 'Schizophrénie au cinéma - Liste IMDb',
                url: 'https://www.imdb.com/list/ls068976997/',
                description: 'Films abordant la schizophrénie et les troubles psychotiques',
                type: 'Liste',
                tags: ['Cinéma', 'Films']
            },
            {
                title: '"Une belle vie" - Virginie Linhart',
                url: 'https://www.babelio.com/livres/Linhart-Une-belle-vie/1234567',
                description: 'Récit poignant d\'une fille face à la schizophrénie de sa mère',
                type: 'Livre',
                tags: ['Témoignage', 'Littérature']
            },
            {
                title: '"Les démons de mon frère" - Michel Leclerc',
                url: 'https://www.allocine.fr/film/fichefilm_gen_cfilm=12345.html',
                description: 'Film français sur la schizophrénie et les liens fraternels',
                type: 'Film',
                tags: ['Cinéma', 'Français']
            },
            {
                title: 'Exposition "Folie/Art Brut" - Collection de l\'Art Brut',
                url: 'https://www.artbrut.ch',
                description: 'Découvrir l\'art créé par des personnes en situation de handicap psychique',
                type: 'Exposition',
                tags: ['Art', 'Culture']
            }
        ]
    },
    
    'associations': {
        title: 'Associations',
        icon: 'fa-users',
        color: '#4facfe',
        resources: [
            {
                title: 'UNAFAM - Union Nationale des Familles',
                url: 'https://www.unafam.org',
                description: 'Association de familles de personnes malades psychiques',
                type: 'Association nationale',
                tags: ['Familles', 'Soutien']
            },
            {
                title: 'Schizo Espoir',
                url: 'https://www.schizo-espoir.com',
                description: 'Association d\'aide aux personnes atteintes de schizophrénie et à leurs proches',
                type: 'Association',
                tags: ['Aide', 'Schizophrénie']
            },
            {
                title: 'PromeSse - Schizophrénie',
                url: 'https://www.promesse.asso.fr',
                description: 'Association de lutte contre la schizophrénie',
                type: 'Association',
                tags: ['Recherche', 'Information']
            },
            {
                title: 'Fondation FondaMental',
                url: 'https://www.fondation-fondamental.org',
                description: 'Fondation de recherche et de soins en psychiatrie',
                type: 'Fondation',
                tags: ['Recherche', 'Soins']
            }
        ]
    }
};

// ===================================
// GESTION DU MODE SOMBRE
// ===================================

const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Charger la préférence sauvegardée
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    updateDarkModeIcon(true);
}

// Toggle mode sombre
if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const isDark = body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        updateDarkModeIcon(isDark);
    });
}

function updateDarkModeIcon(isDark) {
    if (darkModeToggle) {
        const icon = darkModeToggle.querySelector('i');
        icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
    }
}

// ===================================
// NAVIGATION RESPONSIVE
// ===================================

const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const floatingNav = document.getElementById('floatingNav');

// Toggle menu mobile
if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = navToggle.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });

    // Fermer le menu au clic sur un lien
    const navLinks = navMenu.querySelectorAll('.nav-item');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.querySelector('i').classList.add('fa-bars');
            navToggle.querySelector('i').classList.remove('fa-times');
        });
    });
}

// Navigation sticky au scroll
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (floatingNav) {
        if (currentScroll > 100) {
            floatingNav.classList.add('scrolled');
            
            // Masquer/afficher selon la direction du scroll
            if (currentScroll > lastScroll && currentScroll > 300) {
                floatingNav.style.transform = 'translateY(-100%)';
            } else {
                floatingNav.style.transform = 'translateY(0)';
            }
        } else {
            floatingNav.classList.remove('scrolled');
            floatingNav.style.transform = 'translateY(0)';
        }
    }
    
    lastScroll = currentScroll;
    
    // Bouton retour en haut
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        if (currentScroll > 400) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }
});

// ===================================
// BOUTON RETOUR EN HAUT
// ===================================

const backToTop = document.getElementById('backToTop');
if (backToTop) {
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===================================
// RECHERCHE GLOBALE (PAGE D'ACCUEIL)
// ===================================

const globalSearch = document.getElementById('globalSearch');
const searchResults = document.getElementById('searchResults');
const clearGlobalSearch = document.getElementById('clearGlobalSearch');

if (globalSearch && searchResults) {
    globalSearch.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        
        // Afficher/masquer le bouton clear
        if (clearGlobalSearch) {
            clearGlobalSearch.style.display = query ? 'block' : 'none';
        }
        
        if (query.length < 2) {
            searchResults.innerHTML = '';
            searchResults.style.display = 'none';
            return;
        }
        
        // Recherche dans toutes les catégories
        const results = [];
        Object.entries(resourcesData).forEach(([category, data]) => {
            data.resources.forEach(resource => {
                const searchText = `${resource.title} ${resource.description} ${resource.tags.join(' ')}`.toLowerCase();
                if (searchText.includes(query)) {
                    results.push({
                        ...resource,
                        category: data.title,
                        categoryUrl: `${category}.html`
                    });
                }
            });
        });
        
        // Afficher les résultats
        if (results.length > 0) {
            searchResults.innerHTML = `
                <div class="search-results-header">
                    <h3><i class="fas fa-search"></i> ${results.length} résultat${results.length > 1 ? 's' : ''} trouvé${results.length > 1 ? 's' : ''}</h3>
                </div>
                ${results.slice(0, 10).map(result => `
                    <a href="${result.url}" target="_blank" rel="noopener" class="search-result-item">
                        <div class="search-result-content">
                            <h4>${highlightText(result.title, query)}</h4>
                            <p>${highlightText(result.description, query)}</p>
                            <span class="search-result-category">
                                <i class="fas fa-folder"></i> ${result.category}
                            </span>
                        </div>
                        <i class="fas fa-external-link-alt"></i>
                    </a>
                `).join('')}
                ${results.length > 10 ? `<p class="search-more">+ ${results.length - 10} autres résultats...</p>` : ''}
            `;
            searchResults.style.display = 'block';
        } else {
            searchResults.innerHTML = `
                <div class="search-no-results">
                    <i class="fas fa-search"></i>
                    <p>Aucun résultat pour "${query}"</p>
                </div>
            `;
            searchResults.style.display = 'block';
        }
    });
    
    // Fermer les résultats en cliquant ailleurs
    document.addEventListener('click', (e) => {
        if (!globalSearch.contains(e.target) && !searchResults.contains(e.target)) {
            searchResults.style.display = 'none';
        }
    });
    
    // Clear search
    if (clearGlobalSearch) {
        clearGlobalSearch.addEventListener('click', () => {
            globalSearch.value = '';
            searchResults.innerHTML = '';
            searchResults.style.display = 'none';
            clearGlobalSearch.style.display = 'none';
            globalSearch.focus();
        });
    }
}

// ===================================
// RECHERCHE LOCALE (PAGES DE CATÉGORIE)
// ===================================

const localSearch = document.getElementById('localSearch');
const resourcesList = document.getElementById('resourcesList');
const clearSearch = document.getElementById('clearSearch');
const resultsInfo = document.getElementById('resultsInfo');

if (localSearch && resourcesList) {
    const allResources = Array.from(resourcesList.querySelectorAll('.resource-item'));
    
    localSearch.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        
        // Afficher/masquer le bouton clear
        if (clearSearch) {
            clearSearch.style.display = query ? 'block' : 'none';
        }
        
        let visibleCount = 0;
        
        allResources.forEach(item => {
            const title = item.querySelector('.resource-title')?.textContent.toLowerCase() || '';
            const description = item.querySelector('.resource-description')?.textContent.toLowerCase() || '';
            const tags = Array.from(item.querySelectorAll('.resource-tag')).map(tag => tag.textContent.toLowerCase()).join(' ');
            
            const searchText = `${title} ${description} ${tags}`;
            
            if (searchText.includes(query)) {
                item.style.display = '';
                visibleCount++;
                
                // Highlight des termes recherchés
                if (query.length >= 2) {
                    const titleEl = item.querySelector('.resource-title');
                    const descEl = item.querySelector('.resource-description');
                    
                    if (titleEl) titleEl.innerHTML = highlightText(titleEl.textContent, query);
                    if (descEl) descEl.innerHTML = highlightText(descEl.textContent, query);
                }
            } else {
                item.style.display = 'none';
            }
        });
        
        // Afficher le nombre de résultats
        if (resultsInfo) {
            if (query) {
                resultsInfo.textContent = `${visibleCount} résultat${visibleCount > 1 ? 's' : ''} trouvé${visibleCount > 1 ? 's' : ''}`;
                resultsInfo.style.display = 'block';
            } else {
                resultsInfo.style.display = 'none';
            }
        }
        
        // Message si aucun résultat
        const noResults = resourcesList.querySelector('.no-results-message');
        if (visibleCount === 0 && query) {
            if (!noResults) {
                const message = document.createElement('div');
                message.className = 'no-results-message';
                message.innerHTML = `
                    <i class="fas fa-search"></i>
                    <h3>Aucun résultat trouvé</h3>
                    <p>Essayez avec d'autres mots-clés</p>
                `;
                resourcesList.appendChild(message);
            }
        } else if (noResults) {
            noResults.remove();
        }
    });
    
    // Clear local search
    if (clearSearch) {
        clearSearch.addEventListener('click', () => {
            localSearch.value = '';
            allResources.forEach(item => {
                item.style.display = '';
                
                // Retirer les highlights
                const titleEl = item.querySelector('.resource-title');
                const descEl = item.querySelector('.resource-description');
                if (titleEl) titleEl.textContent = titleEl.textContent;
                if (descEl) descEl.textContent = descEl.textContent;
            });
            
            clearSearch.style.display = 'none';
            if (resultsInfo) resultsInfo.style.display = 'none';
            
            const noResults = resourcesList.querySelector('.no-results-message');
            if (noResults) noResults.remove();
            
            localSearch.focus();
        });
    }
}

// ===================================
// FONCTION DE HIGHLIGHT
// ===================================

function highlightText(text, query) {
    if (!query || query.length < 2) return text;
    
    const regex = new RegExp(`(${escapeRegex(query)})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
}

function escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// ===================================
// STATISTIQUES PAGE D'ACCUEIL
// ===================================

function updateStats() {
    const totalCategories = Object.keys(resourcesData).length;
    let totalResources = 0;
    
    Object.values(resourcesData).forEach(category => {
        totalResources += category.resources.length;
    });
    
    const categoriesCount = document.getElementById('categoriesCount');
    const resourcesCount = document.getElementById('resourcesCount');
    
    if (categoriesCount) {
        animateCounter(categoriesCount, totalCategories);
    }
    
    if (resourcesCount) {
        animateCounter(resourcesCount, totalResources);
    }
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 20);
}

// ===================================
// ANIMATIONS AU SCROLL
// ===================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observer les cartes de catégories
document.querySelectorAll('.category-card, .resource-item').forEach(card => {
    observer.observe(card);
});

// ===================================
// COPIER LE LIEN
// ===================================

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification('Lien copié dans le presse-papier !');
    });
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ===================================
// INITIALISATION
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    // Mettre à jour les statistiques si on est sur la page d'accueil
    if (document.getElementById('categoriesCount')) {
        updateStats();
    }
    
    // Ajouter la classe loaded pour les animations
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
    
    console.log('🧠 Schizothèque chargée avec succès !');
});

// ===================================
// GESTION DES ERREURS
// ===================================

window.addEventListener('error', (e) => {
    console.error('Erreur détectée:', e.error);
});

// ===================================
// SERVICE WORKER (OPTIONNEL - PWA)
// ===================================

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Décommenter pour activer le mode PWA
        // navigator.serviceWorker.register('/sw.js')
        //     .then(reg => console.log('Service Worker enregistré'))
        //     .catch(err => console.log('Erreur Service Worker:', err));
    });
}
// ===================================
// MODE SOMBRE
// ===================================

const darkModeToggle = document.getElementById('darkModeToggle');
const html = document.documentElement;

// Charger la préférence sauvegardée
const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);

// Toggle du mode sombre
if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Animation du bouton
        darkModeToggle.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            darkModeToggle.style.transform = 'rotate(0deg)';
        }, 300);
    });
}

