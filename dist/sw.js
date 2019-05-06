importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/7fc127458d88e5f73bbb.js",
    "revision": "626ca2855a27a1b0d83e052dafcff681"
  },
  {
    "url": "/_nuxt/bea48c83626bbe6b671d.js",
    "revision": "c0160692384b448fbc3baeea86a9bccd"
  },
  {
    "url": "/_nuxt/ef2fd8fa1695b47de6fd.js",
    "revision": "0e3f3e261179e383972b19e8f70684f5"
  },
  {
    "url": "/_nuxt/f03f82920ec02e2c1b61.js",
    "revision": "4681432899abbf619ed388ec1a9f19e8"
  }
], {
  "cacheId": "bradwaropay",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
