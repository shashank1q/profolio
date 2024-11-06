'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "4e3ea69e72a0b902666bea2a79f99fc0",
".git/config": "38995d4151504b438cec16bd96b9b1d3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "86891615980ff0d4313e0bcbe67c317f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "45512553b6cf90e8477620e1b47001a4",
".git/logs/refs/heads/main": "45512553b6cf90e8477620e1b47001a4",
".git/logs/refs/remotes/origin/HEAD": "110bb919be634ab99c0af6c34490d6f3",
".git/logs/refs/remotes/origin/main": "dd62821f971ddc832b98fb7ccf460da8",
".git/objects/72/ceabf9b38aa0e8b6510b2b0212d622cf1b45a6": "6d026be0fe2a1be8ceb2746248b978a6",
".git/objects/7a/cc26712d7ffc59a2764e3d6a3dccae65bac31f": "067b29e20f033a6ef5952b7ece8c869d",
".git/objects/9c/1bcdf67747747fb68c06049079ece8513335ac": "97e3ebf9a69094f4ddea4f3a1887a4c4",
".git/objects/d7/7f182a8723fda855fc2fbd49c08efae2459a52": "c19860ca89dfbf32c11b59e8bd62ddb5",
".git/objects/ec/ff49d536193657254f8ea93b7d8c1d00f0d8da": "0e5ee1d564a1ddefb69e75493a3e3eab",
".git/objects/pack/pack-03eeaf490cca088a24a8ef8368e3ddaf3152d613.idx": "4227c36b7d4a430369c357d1d6ad2b5c",
".git/objects/pack/pack-03eeaf490cca088a24a8ef8368e3ddaf3152d613.pack": "2cb4723fdd519ebfaf2f618e0bb4cc88",
".git/objects/pack/pack-03eeaf490cca088a24a8ef8368e3ddaf3152d613.rev": "6f5ea8b3a163cf3ed32b9638fa02ac4c",
".git/packed-refs": "61c95e90558b47f64b8e143e14088a9e",
".git/refs/heads/main": "80a143ad20054f5934d5f540d4b2bf7b",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "80a143ad20054f5934d5f540d4b2bf7b",
"assets/AssetManifest.bin": "4603a7cec9acc8783db4ca2accd14bbb",
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
"assets/icons/email.png": "55bb160fd578c9df2ae66d36b796d197",
"assets/icons/facebook.png": "1a99bcdab2c2d9e3d39ee4956bf4123a",
"assets/icons/github.png": "01d067b4e5c95797c139cdd5bbc2da9f",
"assets/icons/instagram.png": "73e4eefea7d1cae3f08d843697ffef27",
"assets/icons/linkedin.png": "b7f679650a292ccf996c1a554ffa23f2",
"assets/icons/phone.png": "ed9fdc4ab3405027434b4b300869ecc3",
"assets/icons/twitter.png": "6fe57f119159e49f33816e9989b8bc87",
"assets/icons/youtube.png": "ef14eee061cb2d8ce3a580a4193d2229",
"assets/images/adarsh.jpeg": "0b139517215d28e575510ea127099a49",
"assets/images/background_repeat.jpg": "9c1517006fc20cd6f2c644aad48bbf84",
"assets/images/computer.jpg": "459526ee852e22af1873a11284a6f52e",
"assets/images/contact.png": "67c0666e7dfd0005c39e842e1871bd12",
"assets/images/error.jpg": "832b35389ac6853fad9cd98de54f9531",
"assets/images/me.jpeg": "8bee3798664131ace2a3bb4dac9d00d5",
"assets/lottie/Animation1.json": "2a83bf9039923947df53dcc896ff166f",
"assets/lottie/Animation2.json": "60d1d6cf46e93c8a059231515db5e191",
"assets/lottie/Animation3.json": "edf6a884734d19bb78e29b0235568c9b",
"assets/lottie/cross.json": "6e4fbf3021594ab9a0a056db0c0dc861",
"assets/lottie/loding_json.json": "fb54677f8458b0f168a60ec2f18bd3d4",
"assets/lottie/tick.json": "02bf923c2bf9c293fbc8a57cdc41f6e5",
"assets/NOTICES": "52bd3dc21f3ccc1b53c2dc0cea6627cc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/videos/video1.mp4": "4b360975458bfda94f246a853454289e",
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
"flutter_bootstrap.js": "6a2509aa53301d9eddea9af9a14eb7dd",
"icons/apple.png": "d2e2f53fedd8aaef5441418f0af4a039",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/icon192.png": "d4093e875bcb5d91784b5a57ea2860da",
"icons/icon512.png": "38359134e30c13d165074173ba8f1894",
"index.html": "86074935073d2b3139dd1403e4410cea",
"/": "86074935073d2b3139dd1403e4410cea",
"main.dart.js": "4d57fef9fad7fa8c33378eb6a96e8560",
"manifest.json": "046a48d8ca95c21e1c7ebfe68970c355",
"README.md": "793fb5e693d4b3c225ecbe7d3477d34e",
"version.json": "4d5f4cd2c52a04188970c03c123041e2"};
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
