const CACHE_NAME = 'auralrelief-v1';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/my-ear-hurts',
  '/waiting-for-ent-appointment',
  '/sounds-for-ear-discomfort',
  '/what-is-sound-masking',
  '/ear-pain-at-night',
  '/clogged-ears-sound-relief',
  '/hyperacusis-acoustic-shield',
  '/manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)));
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then((cached) => {
      return cached || fetch(event.request).catch(() => caches.match('/index.html'));
    })
  );
});
