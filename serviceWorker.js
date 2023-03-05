const staticAnimeshData = "site-cache-v1";
const assets = [
  //   "/",
  "/index.html",
  "/assets/css/styles.css",
  "/assets/css/swiper-bundle.min.css",
  "/assets/js/main.js",
  "/assets/js/swiper-bundle.min.js",
  "/assets/pdf/manuel_resume.pdf",
  "/assets/img/blob.svg",
  "/assets/img/hacker-profile.png",
  "/assets/img/mt-fuji.jpg",
  "/assets/img/skills/vue.svg",
  "/assets/img/skills/javascript.svg",
  "/assets/img/skills/html.svg",
  "/assets/img/skills/css.svg",
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(staticAnimeshData).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    })
  );
});
