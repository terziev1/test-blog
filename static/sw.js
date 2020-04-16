importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0179ddf182ae847afcf7.js",
    "revision": "71559c220a2ae33b668148a5dee0f40d"
  },
  {
    "url": "/_nuxt/0c59ccbfb9080d520984.js",
    "revision": "2b984aa0297e0f22d4ca47afce14787a"
  },
  {
    "url": "/_nuxt/267a63fef2e4cd8e083e.js",
    "revision": "7e81bdc0e308d1b59915ea792c46cacb"
  },
  {
    "url": "/_nuxt/464d25bf588bfbac2841.css",
    "revision": "49a73f71935b878ccb7f81c876cee4fb"
  },
  {
    "url": "/_nuxt/673206fd8eea85f7c927.css",
    "revision": "3e3569ee1fdeca689c8b42a2f26636bd"
  },
  {
    "url": "/_nuxt/88793d286ba83887c850.css",
    "revision": "0e8fe3dc0c4390bea768f6703ff36523"
  },
  {
    "url": "/_nuxt/9ce7388e6c18897dfce1.js",
    "revision": "5161fbe993956d69e56506613ce4f364"
  },
  {
    "url": "/_nuxt/b59466419972155797bf.js",
    "revision": "963dfb1d498004f04339cfe9fdf6437f"
  },
  {
    "url": "/_nuxt/b77b390a09ecb3183abd.js",
    "revision": "1f3db1b48076e0e611d612fd46a911a0"
  },
  {
    "url": "/_nuxt/b7d3bdfd2c7c14ce24eb.js",
    "revision": "7f13d805a48eaa0be037f8a73ab8cc75"
  },
  {
    "url": "/_nuxt/b8ccfd3658d5d787fa5f.js",
    "revision": "b5ca33aa77571336a360669b7c191082"
  },
  {
    "url": "/_nuxt/bd86b8e3686688980713.css",
    "revision": "f7bc8955914af36923c679cfc658454f"
  },
  {
    "url": "/_nuxt/d8053093838459fc44da.css",
    "revision": "35fe37fa1283265322ba30dfb8c9b75c"
  },
  {
    "url": "/_nuxt/f96a5883c017a517f013.js",
    "revision": "b5e3b589260aabb4341975d6edae1680"
  }
], {
  "cacheId": "bael-cms-template",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/images/uploads/.*'), workbox.strategies.cacheFirst({"cacheName":"image-cache","cacheExpiration":{"maxEntries":100,"maxAgeSeconds":86400}}), 'GET')
