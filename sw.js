/* Service worker: app shell em cache; páginas do guia em cache sob demanda */
var VERSION = "v10";
var SHELL = "pqo-shell-" + VERSION;
var PAGES = "pqo-pages";
var ASSETS = ["./", "index.html", "css/styles.css", "js/questions.js", "js/pagemap.js", "js/app.js", "js/mobile.js", "manifest.json", "icons/icon-192.png", "icons/icon-512.png"];

self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(SHELL).then(function (c) { return c.addAll(ASSETS); }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (ks) {
    return Promise.all(ks.filter(function (k) { return k.indexOf("pqo-shell-") === 0 && k !== SHELL; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});

self.addEventListener("fetch", function (e) {
  var req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
  var isPage = /\/pages\/p\d+\.webp$/.test(req.url);
  if (isPage) {
    e.respondWith(caches.open(PAGES).then(function (c) {
      return c.match(req).then(function (hit) {
        return hit || fetch(req).then(function (r) { if (r.ok) c.put(req, r.clone()); return r; });
      });
    }));
    return;
  }
  // stale-while-revalidate para o shell
  e.respondWith(caches.open(SHELL).then(function (c) {
    return c.match(req).then(function (hit) {
      var net = fetch(req).then(function (r) { if (r.ok) c.put(req, r.clone()); return r; }).catch(function () { return hit; });
      return hit || net;
    });
  }));
});

