// Service Worker para F.A.L.L.O - Finder And Logger of Lost Occurrences
// Versión 1.0 - Soporte offline con cache de archivos

const CACHE_NAME = 'fallo-v1';
const URLS_TO_CACHE = [
    './manifest.json'
];

// Instalar Service Worker y cachear archivos
self.addEventListener('install', (event) => {
    console.log('Service Worker instalando...');
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('Cache abierto');
            return cache.addAll(URLS_TO_CACHE)
                .catch(() => {
                    console.log('Algunos archivos no pudieron ser cacheados');
                });
        })
    );
    self.skipWaiting();
});

// Activar Service Worker
self.addEventListener('activate', (event) => {
    console.log('Service Worker activando...');
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Eliminando cache antiguo:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

// Estrategia: Network first para HTML, cache first para otros recursos
self.addEventListener('fetch', (event) => {
    // No cachear requests POST u otras operaciones que modifiquen datos
    if (event.request.method !== 'GET') {
        return;
    }

    const url = event.request.url;

    // Para archivos HTML: Network first (siempre actualizar)
    if (url.endsWith('.html') || url.endsWith('/')) {
        event.respondWith(
            fetch(event.request).then((response) => {
                return response;
            }).catch(() => {
                // Si la red falla, intentar cache
                return caches.match(event.request);
            })
        );
        return;
    }

    // Para otros archivos: Cache first, fallback a network
    event.respondWith(
        caches.match(event.request).then((response) => {
            if (response) {
                console.log('Sirviendo desde cache:', url);
                return response;
            }

            return fetch(event.request).then((response) => {
                if (!response || response.status !== 200 || response.type === 'error') {
                    return response;
                }

                const responseToCache = response.clone();
                caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, responseToCache);
                });

                return response;
            }).catch(() => {
                return new Response(
                    'Recurso no disponible en modo offline',
                    { status: 503, statusText: 'Service Unavailable' }
                );
            });
        })
    );
});
