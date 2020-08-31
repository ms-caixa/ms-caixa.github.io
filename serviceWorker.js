const staticContagemValores = "contagem-valores-v1.2"
const assets = [
    "/",
    "/index.html",
    // "/css/style.css",
    "/js/index.js",
    "/js/app.js",
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticContagemValores).then(cache => {
            // cache.addAll(assets)
        })
    )
});

// self.addEventListener("fetch", fetchEvent => {
//     fetchEvent.respondWith(
//         caches.match(fetchEvent.request).then(res => {
//             return res || fetch(fetchEvent.request)
//         })
//     )
// })

// Cache Strategy
// https://blog.bitsrc.io/5-service-worker-caching-strategies-for-your-next-pwa-app-58539f156f52

// Cache First, then Network Strategy
// self.addEventListener('fetch', function (event) {
//     event.respondWith(
//         caches.open(cacheName)
//             .then(function(cache) {
//                 cache.match(event.request)
//                     .then( function(cacheResponse) {
//                         if(cacheResponse)
//                             return cacheResponse
//                         else
//                             return fetch(event.request)
//                                 .then(function(networkResponse) {
//                                     cache.put(event.request, networkResponse.clone())
//                                     return networkResponse
//                                 })
//                     })
//             })
//     )
// });

// Network First, then Cache Strategy
self.addEventListener('fetch', function(event) {
    event.respondWith(
        fetch(event.request).catch(function() {
            return caches.match(event.request)
        })
    )
})

// Cache Only Strategy
// self.addEventListener('fetch', function (event) {
//     event.respondWith(
//         caches.open(cacheName).then(function(cache) {
//             cache.match(event.request).then(function(cacheResponse) {
//                 return cacheResponse;
//             })
//         })
//     )
// })

// Network Only Strategy
// self.addEventListener('fetch', function (event) {
//     event.respondWith(
//         fetch(event.request).then(function(networkResponse) {
//             return networkResponse
//         })
//     )
// })