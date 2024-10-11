'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "94e582141bb4808e22b47409a0adad21",
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
".git/index": "0a6b7456bb2427975cabb56e5899d718",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "81bb0eb7b7db164d0fd5edd710a48673",
".git/logs/refs/heads/main": "81bb0eb7b7db164d0fd5edd710a48673",
".git/logs/refs/remotes/origin/HEAD": "a538edb2a02800c526342ecdfcc0eae5",
".git/logs/refs/remotes/origin/main": "94780f7e125cf6451630f732090850f6",
".git/objects/05/4c88aae28ca7254e56e677402bda131ec57445": "253c5cac8f8ec6dc05d30d956a05bc66",
".git/objects/08/10564efd6465be718e23dbd8d38cdd3ad61046": "bd0dfe78322042cbbeeb41e5c5e4460b",
".git/objects/15/d2f8ea730be2a516eda18a823b05990cc8c8b4": "243a13aeed836edafcd4de537eb20cb1",
".git/objects/1f/848f10963c9502da1ce60febe0978d9abd8117": "87a427940904341571bd1f77b43a7d83",
".git/objects/22/23ab0542c946dd4015bd38b6b7f44e021eac4f": "8510e76a219df6a7ad887c11a54c6542",
".git/objects/28/de2131f5818de8c39e0234bcf4e33109359e4a": "a98e4226b64e3273f993cd10f66ca11a",
".git/objects/2d/85b39e818ba36ec88d060f46f551a236359555": "4c04ff0c5b71771981397cca2b46d5ed",
".git/objects/5b/d6e3eef567250b95dde430b22492a50a19bf3a": "f4416ea60b290253583387749dfe2dec",
".git/objects/60/081ad30cc4f2a5d967f2ac886e47dd295bf8b7": "ed9bda22f65d8cb0efde0840a39e6073",
".git/objects/70/824935aeb37366a4f8cdb31988907d0ce7d7e2": "0af296e86a4ec9024d34e8d3ccf9aa0e",
".git/objects/73/4ec651c6d276eeff655a10c282e591fbda09e5": "2339c58310548845703b2a2fa5e65ae9",
".git/objects/73/c35e3a8ceb0f1997fa79b19afaea55e80a5caf": "f060b7f19bcdf3b5738128df7a61fc3e",
".git/objects/84/573893d46dc907111949665df789f59487f744": "b1538eae36d6a90a221941bdad6708f5",
".git/objects/9a/158202c06d08b2f42c6dda3d2ca9bfa8fdacfe": "14a70d20b17d0ef12c49a9fb9e17c313",
".git/objects/9b/7d6ff3a3e0c4abb818a30ca1dca1ab176b41e3": "a6351ea0b8d373d30ec54e56c3fec64f",
".git/objects/c1/b0157a927958d153eff36e032eb3fbecd26d3b": "d16fd485ef3eae95f109fbd0eb084a6c",
".git/objects/dd/f4c7f5d49b2380a52f55770193ba26eb6e8198": "845b43c219980e1fbbc20a8224531352",
".git/objects/e5/96482295da7a7dd5b648b1e32fb9aab0493f72": "946631a914dee02c57593da4020e3ca1",
".git/objects/f0/26a7322e8d3599a4778da33a8a6bebe1de89b1": "618e1e6a89a04e899dd7cc4a53a40465",
".git/objects/pack/pack-78d8784a42b894ea0508cd7000050f22ef60d8ae.idx": "60453aa861a65e3f79659e1f20a5c341",
".git/objects/pack/pack-78d8784a42b894ea0508cd7000050f22ef60d8ae.pack": "cdfd320d8731fc8e46a2818b9b0b6d26",
".git/objects/pack/pack-78d8784a42b894ea0508cd7000050f22ef60d8ae.rev": "53e4abbcfcaa7050bc8856cafa48ff07",
".git/packed-refs": "4d58165e3e5c9e256145d7c211789cf0",
".git/refs/heads/main": "efb1d55fca0bf4e1c8c6ad5e8556b045",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "efb1d55fca0bf4e1c8c6ad5e8556b045",
"assets/AssetManifest.bin": "b1841476ea7496158248272554bd441a",
"assets/AssetManifest.bin.json": "e078522742fc7056acc1a5ffa3a6c68b",
"assets/AssetManifest.json": "1a6b3172a222ae0838f389eb07b338e7",
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
"assets/assets/lottie/Animation1.json": "2a83bf9039923947df53dcc896ff166f",
"assets/assets/lottie/Animation2.json": "60d1d6cf46e93c8a059231515db5e191",
"assets/assets/lottie/Animation3.json": "edf6a884734d19bb78e29b0235568c9b",
"assets/assets/lottie/cross.json": "6e4fbf3021594ab9a0a056db0c0dc861",
"assets/assets/lottie/loding_json.json": "fb54677f8458b0f168a60ec2f18bd3d4",
"assets/assets/lottie/tick.json": "02bf923c2bf9c293fbc8a57cdc41f6e5",
"assets/assets/transparentLogo.png": "7bd3c52734e5a5e91a4ad1b615390725",
"assets/assets/videos/video1.mp4": "4b360975458bfda94f246a853454289e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c0272d9e33a9c22d05f1a256e4c056f8",
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
"assets/NOTICES": "35f95661a82a21723fdce071125a08fd",
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
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "0456b6dd1d322c7db7bd5ceb4debfcbe",
"icons/apple.png": "d2e2f53fedd8aaef5441418f0af4a039",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/icon192.png": "d4093e875bcb5d91784b5a57ea2860da",
"icons/icon512.png": "38359134e30c13d165074173ba8f1894",
"index.html": "86074935073d2b3139dd1403e4410cea",
"/": "86074935073d2b3139dd1403e4410cea",
"main.dart.js": "dc0a2145f112f51766a1230d7abac441",
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
