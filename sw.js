// ── SERVICE WORKER – Lär dig svenska ──────────────────────────────
const CACHE_NAME = 'svenska-v1';

// Ressources à mettre en cache au premier chargement
const PRECACHE_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  'https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;900&display=swap'
];

// ── Installation : mise en cache initiale ──────────────────────────
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      // On met en cache les assets locaux (les Google Fonts peuvent échouer hors-ligne, ce n'est pas bloquant)
      return cache.addAll(PRECACHE_ASSETS).catch(() => {
        return cache.add('./index.html');
      });
    }).then(() => self.skipWaiting())
  );
});

// ── Activation : nettoyage des anciens caches ──────────────────────
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

// ── Fetch : stratégie Cache First pour les assets locaux ──────────
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Ignorer les requêtes non-GET et les extensions navigateur
  if (request.method !== 'GET') return;
  if (url.protocol === 'chrome-extension:') return;

  // Stratégie : Cache First → Network → Fallback
  event.respondWith(
    caches.match(request).then(cached => {
      if (cached) return cached;

      return fetch(request)
        .then(response => {
          // Ne mettre en cache que les réponses valides (pas les opaque)
          if (!response || response.status !== 200 || response.type === 'opaque') {
            return response;
          }

          // Mise en cache dynamique (cloner car le stream ne peut être lu qu'une fois)
          const toCache = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(request, toCache));
          return response;
        })
        .catch(() => {
          // Hors-ligne : servir le HTML principal en fallback
          if (request.destination === 'document') {
            return caches.match('./index.html');
          }
        });
    })
  );
});

// ── Message : forcer la mise à jour depuis l'appli ─────────────────
self.addEventListener('message', event => {
  if (event.data === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
