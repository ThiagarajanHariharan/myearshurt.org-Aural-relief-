const CACHE_NAME = 'auralrelief-v2';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/research',
  '/best-sound-therapy-tools',
  '/for-clinics',
  '/my-ear-hurts',
  '/waiting-for-ent-appointment',
  '/tmj-ear-pain',
  '/post-concert-ear-ringing',
  '/ear-pressure-on-flights',
  '/eustachian-tube-dysfunction-exercises',
  '/misophonia-sound-sensitivity',
  '/noise-induced-ear-fatigue',
  '/sounds-for-ear-discomfort',
  '/what-is-sound-masking',
  '/ear-pain-at-night',
  '/clogged-ears-sound-relief',
  '/hyperacusis-acoustic-shield',
  '/manifest.json',
  '/favicon.ico',
  '/favicon.svg'
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
  // Let audio files stream directly with native byte-range support
  if (event.request.url.includes('/music/')) {
    return;
  }
  event.respondWith(
    caches.match(event.request).then((cached) => {
      return cached || fetch(event.request).catch(() => caches.match('/index.html'));
    })
  );
});
