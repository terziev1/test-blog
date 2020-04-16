importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0179ddf182ae847afcf7.js",
    "revision": "71559c220a2ae33b668148a5dee0f40d"
  },
  {
    "url": "/_nuxt/0d057c10243531f49f1c.js",
    "revision": "372e4b8cb28d66707a46c5b0badfd750"
  },
  {
    "url": "/_nuxt/464d25bf588bfbac2841.css",
    "revision": "49a73f71935b878ccb7f81c876cee4fb"
  },
  {
    "url": "/_nuxt/541b1bc34f1b30aea8c0.js",
    "revision": "b281de44894b700cf90fd0496a9ec515"
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
    "url": "/_nuxt/a4d84e6b7ea2bc7cfcc0.js",
    "revision": "ddebad6a74ff4915ac6cc5574e8e828c"
  },
  {
    "url": "/_nuxt/b59466419972155797bf.js",
    "revision": "963dfb1d498004f04339cfe9fdf6437f"
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
    "url": "/_nuxt/f1a573821c53be52205c.js",
    "revision": "cdc78d6a278651b06d2b5a97026e455a"
  },
  {
    "url": "/_nuxt/f977c0a587163fd46cd4.js",
    "revision": "cb13f0494344f1be3bb361a6fe338def"
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
