const staticContagemValores = "contagem-valores-v1.0"
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
            cache.addAll(assets)
        })
    )
});

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})