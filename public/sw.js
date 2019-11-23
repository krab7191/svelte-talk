const version = "1.0.0";
const cacheName = `svelte-app-${version}`;

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll([
      `/`,
      `/index.html`,
      `./bundle.css`,
      `./global.css`,
      `./bundle.js`,
      `./prism.js`,
      `./assets/images/_error.png`,
      `./assets/images/sapper.png`,
      `./assets/images/svelte-logo.png`,
      `./assets/video/simpsons-svelte.mp4`,
      `./assets/video/simpsons-svelte.ogg`,
    ])
      .then(() => self.skipWaiting()))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.open(cacheName)
      .then(cache => cache.match(event.request, { ignoreSearch: true }))
      .then(response => response || fetch(event.request))
  );
});
