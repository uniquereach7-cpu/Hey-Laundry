const CACHE_NAME = 'hey-laundry-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  'assets/images/loogoo.png',
  'assets/images/video.mp4'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

self.addEventListener('fetch', (event) => {
  // Only cache images and videos for "instant" loading
  if (event.request.url.match(/\.(png|jpg|jpeg|gif|webp|svg|mp4|webm|ogg)$/i)) {
    event.respondWith(
      caches.match(event.request).then((response) => {
        if (response) {
          return response; // Return from cache
        }
        return fetch(event.request).then((networkResponse) => {
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        });
      })
    );
  } else {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  }
});
