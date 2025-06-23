const CACHE_NAME = 'os-escalenos-trivia-v2.0.ULTIMATE-FORCE-20250624-' + Date.now();
const urlsToCache = [
  './',
  './index.html',
  './css/styles.css',
  './js/app.js',
  './js/game.js',
  './js/storage.js',
  './js/questions.js',
  './version.js',
  './manifest.json'
];

// Evento de instalación
self.addEventListener('install', event => {
  console.log('Service Worker: Instalando...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Service Worker: Cache aberto');
        return cache.addAll(urlsToCache);
      })
      .catch(error => {
        console.error('Service Worker: Error ao cachear arquivos:', error);
      })
  );
});

// Evento de activación
self.addEventListener('activate', event => {
  console.log('Service Worker: Activando...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Service Worker: Borrando cache antigo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Evento de intercepción de peticiones
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Se está en cache, devolvelo
        if (response) {
          return response;
        }

        // Se non, fai a petición á rede
        return fetch(event.request)
          .then(response => {
            // Verifica se a resposta é válida
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clona a resposta
            const responseToCache = response.clone();

            // Engade á cache
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });

            return response;
          })
          .catch(() => {
            // Se non hai conexión, mostra unha páxina offline personalizada
            if (event.request.destination === 'document') {
              return caches.match('/index.html');
            }
          });
      })
  );
});

// Manexa as notificacións push (para futuras funcionalidades)
self.addEventListener('push', event => {  const options = {
    body: event.data ? event.data.text() : 'Nova pregunta dispoñible en OS ESCALENOS!',
    icon: '/icons/icon-192x192.png',
    badge: '/icons/icon-72x72.png',
    vibrate: [200, 100, 200],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    },
    actions: [
      {
        action: 'explore',
        title: 'Xogar agora',
        icon: '/icons/icon-192x192.png'
      },
      {
        action: 'close',
        title: 'Pechar',
        icon: '/icons/icon-192x192.png'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('OS ESCALENOS - Trivia Galega', options)
  );
});

// Manexa os clics nas notificacións
self.addEventListener('notificationclick', event => {
  event.notification.close();

  if (event.action === 'explore') {
    // Abre a aplicación
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Sincronización en segundo plano
self.addEventListener('sync', event => {
  if (event.tag === 'background-sync') {
    event.waitUntil(
      // Aquí podes sincronizar datos cando haxa conexión
      console.log('Service Worker: Sincronización en segundo plano')
    );
  }
});
