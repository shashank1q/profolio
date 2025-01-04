'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "4603a7cec9acc8783db4ca2accd14bbb",
"assets/AssetManifest.bin.json": "87482f77f04f49b428f7b6acc6f4dc97",
"assets/AssetManifest.json": "48647ed424040045e494813951f95e64",
"assets/assets/banner.jpg": "f0f23c832e4d461b0a20af3d1849f975",
"assets/assets/cheeta.jpg": "4a300323dc4c5d64359cad0fece74620",
"assets/assets/icons/email.png": "55bb160fd578c9df2ae66d36b796d197",
"assets/assets/icons/facebook.png": "1a99bcdab2c2d9e3d39ee4956bf4123a",
"assets/assets/icons/github.png": "01d067b4e5c95797c139cdd5bbc2da9f",
"assets/assets/icons/instagram.png": "73e4eefea7d1cae3f08d843697ffef27",
"assets/assets/icons/linkedin.png": "b7f679650a292ccf996c1a554ffa23f2",
"assets/assets/icons/phone.png": "ed9fdc4ab3405027434b4b300869ecc3",
"assets/assets/icons/twitter.png": "6fe57f119159e49f33816e9989b8bc87",
"assets/assets/icons/youtube.png": "ef14eee061cb2d8ce3a580a4193d2229",
"assets/assets/images/adarsh.jpeg": "0b139517215d28e575510ea127099a49",
"assets/assets/images/background_repeat.jpg": "9c1517006fc20cd6f2c644aad48bbf84",
"assets/assets/images/computer.jpg": "459526ee852e22af1873a11284a6f52e",
"assets/assets/images/contact.png": "67c0666e7dfd0005c39e842e1871bd12",
"assets/assets/images/error.jpg": "d0416eb21f4d633667ce3af0c7916281",
"assets/assets/images/me.jpeg": "8bee3798664131ace2a3bb4dac9d00d5",
"assets/assets/logo100.png": "52e1ecf8f23c8a8ce974fe387a55fecd",
"assets/assets/lottie/Animation1.json": "2a83bf9039923947df53dcc896ff166f",
"assets/assets/lottie/Animation2.json": "60d1d6cf46e93c8a059231515db5e191",
"assets/assets/lottie/Animation3.json": "edf6a884734d19bb78e29b0235568c9b",
"assets/assets/lottie/cross.json": "6e4fbf3021594ab9a0a056db0c0dc861",
"assets/assets/lottie/loding_json.json": "fb54677f8458b0f168a60ec2f18bd3d4",
"assets/assets/lottie/tick.json": "02bf923c2bf9c293fbc8a57cdc41f6e5",
"assets/assets/videos/copy_link.gif": "4ad112fefb8716081b4edc744c86bfde",
"assets/assets/videos/edit_save.gif": "b950aefa02b65b4c8ec9a568a6838840",
"assets/assets/videos/preview.gif": "8e1197065e551e8bbba838aba22fb763",
"assets/assets/videos/public_button.gif": "dbf4bf9990e8303cc08e84abc5eddea2",
"assets/assets/videos/removing.gif": "c118bba5435be7570c96e9a4d74438a0",
"assets/assets/videos/video1.mp4": "4b360975458bfda94f246a853454289e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "6a0d7f5bd544d55d1de6875d9450183e",
"assets/NOTICES": "d450e8b438c30c63239cc379fe0338b6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"fav32.png": "3aa44fd0195488de4b878348e4d39ad9",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "4024dd96238d9b70a54343281a6ec9be",
"icons/apple.png": "d2e2f53fedd8aaef5441418f0af4a039",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/icon192.png": "d4093e875bcb5d91784b5a57ea2860da",
"icons/icon512.png": "38359134e30c13d165074173ba8f1894",
"index.html": "e7dcdbde63ccb24f2356b276f92275b4",
"/": "e7dcdbde63ccb24f2356b276f92275b4",
"main.dart.js": "c4c3011c42e77223fffff1f5a99544e0",
"manifest.json": "e42acb81217d4a6ffdc248ac2df7c046",
"version.json": "dc8bcd9af1297849b5ea9effe1accbec"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
