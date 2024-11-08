'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/config": "920a11de313bfb8d93d81f4a3a5b71b6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
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
".git/index": "b1fd4f79c83292d53ee85d2964040a65",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/objects/00/f2a42b6716ad94e1f75e9d133a292d916b20a4": "ba91102f9d17c4d19bffd5539081c772",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/12/2ce1e26ac1b09b064c4803ca44563d7ddafbac": "7c7eeaf3409a2f54e4c541fb331ad4f9",
".git/objects/15/d2f8ea730be2a516eda18a823b05990cc8c8b4": "243a13aeed836edafcd4de537eb20cb1",
".git/objects/16/16f1501ec285a737bb8010a2139d6974f5a430": "20cf747b41d005001d4c5246be094dee",
".git/objects/21/d93ededd7ce89a3bf0689e485da449e17ded77": "ead4a7615f03ae4fd9d9536ba7a02008",
".git/objects/23/cf232e77e2585579b84f854545981167c05c03": "f908bdfa8095577d8144105dd9ea79ee",
".git/objects/27/5199abe8b84ba4ed9086e712f8969047966f57": "b9cc7f9a156f0fc2a48d832044c0d0c5",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3c/4f84e57c4ea238ca85bb631e0ed7260245ae06": "44dcecf5d3af863f1e354fa42f57fc19",
".git/objects/3e/575edbad7eec6c716a433e6a2156a5a60a39c0": "db3fe04a5ce83130177a8e198f88ca81",
".git/objects/43/3ea92fa1eb81fb9625b91b534c08d28daa2366": "a6a343fe52645a94e319570ebb5adaad",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/921719d69c9ab88008348786fc3dd9e82ada0e": "0740f41e4832942d789015ec2e3886fd",
".git/objects/4f/cc47c3d108bcac56a77481b717fb82088f72a9": "11a517feab9407c9e3eb35ff467bd027",
".git/objects/5b/a8039c291a3aafcefc1280447a6f5523e4501f": "d204e2dc4ad0b3cc9a6733f9ae59b99d",
".git/objects/5f/b6e8d604278cc7589c6df27375834568e00282": "d23ee8caf189e637f4cdea1a72b7a6a2",
".git/objects/60/081ad30cc4f2a5d967f2ac886e47dd295bf8b7": "ed9bda22f65d8cb0efde0840a39e6073",
".git/objects/60/253a68deebed24f6a296084f8ca193b488240c": "ee26d3ac3636a581819dc34a9c13f537",
".git/objects/60/6e8db7335f8e5b04427fece03abe6af3b6a349": "bbb6d77c60c2d01858629e4bfaa416e6",
".git/objects/66/5d4bb26bd8f7c4ef326748f1e898785f78ddeb": "7c6a09327c3c78e269453a659a845552",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/73/c35e3a8ceb0f1997fa79b19afaea55e80a5caf": "f060b7f19bcdf3b5738128df7a61fc3e",
".git/objects/7f/da0c52492186ff0145a1ab32c29c881f08831c": "16ee4bb7da80ed37179731f10aeec1db",
".git/objects/82/4c4c9459ddcfa78121a6e5adeefcae2453c009": "a5f396f102827f513aa2088376ea4895",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/4918c26124ef425a105d9ff636b518c4106978": "087866b08c0af5a05845d57ed0df0406",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/97/ab3e1274c33c91b04dc6c6211179ac40d2df7d": "6f28ba26824aa188d63a58d953c6d4af",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9a/158202c06d08b2f42c6dda3d2ca9bfa8fdacfe": "14a70d20b17d0ef12c49a9fb9e17c313",
".git/objects/9b/faf9385462bc5977690d61e628c4cf5e8f0ffa": "5e0b469a595aca290d5261ab993f1787",
".git/objects/9f/fb232c8720ea7638b1445ddbe20afe816702ad": "120d9ae2626918f8cf737342232a76d7",
".git/objects/a0/82f5e1957f376b58f5a4e4cadca09fa006ee83": "50b096ceaa7e1dcde8425136e77f187e",
".git/objects/a2/3a86ad3f2dc89d3eb7810ada513409ee4fbef2": "9b9db901ffab92146c2972657ce60704",
".git/objects/a8/3fce86bbf5ddadd26da91b36b2e2f63355a1c3": "c6fb5fe13fee091b07e4326bf84b007e",
".git/objects/ad/afb2132d15bc96eb2a340872739175a2cb3eeb": "6ed722391d9394c8b0939fcbf90c417a",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b6/79794faa064f7b4a4c72190fe72ead204db32a": "d54e14f8ac361e4e355a3a3520499137",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/1834d0723b570f7254cab25827e3cfd4678332": "673a627b7204284165b9df493941afe0",
".git/objects/b9/e84f33cdf7e49f325b117ff5bf6f24ab931a76": "60b728b8fc0f4ffa4443c3938d7b8068",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/95721ee4b9abe5bbd00cc0cc0f0698a04d0282": "e88a11338838a7efc4030434c6e4c8a6",
".git/objects/c4/cf3b86d45f524e9ddaf102f63d3362fe441232": "3ecb50b202613ef4f9ed7148cfba5597",
".git/objects/ca/94a3d834f062d1db01fa182b75d90520ffb2cb": "577e377712adee1fae464c65b89d2cef",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/398451e19f746e01d6118893c2f59e47a13a6a": "7b733b9c9c59a105b045fdc5caf9329d",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/dd/f4c7f5d49b2380a52f55770193ba26eb6e8198": "845b43c219980e1fbbc20a8224531352",
".git/objects/e1/f100d9e6bf68d18ce00cff8ba0443fba4a91ec": "ea5ece3c7af4fb9300778b041702b718",
".git/objects/eb/859935dad65bb22bb6b00be6d3a9fa444f808b": "cce5915855f5ad328f5776f2505fe889",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/ff4ae62c4d4d2428ae3530a40a5071c6985b8f": "3a46f014c607fafcb3331caacf8cbcc2",
".git/objects/ee/d9658dc5dbfe767143294190cb067f827f99f5": "cb1b5374ed37dca6a56e31a57156294b",
".git/objects/f4/19cbdd8cec8c7b55524298fe8efbcd1f8700a0": "8386d95a8c8901d5ae47857dbd168ae4",
".git/objects/f8/caa44b5c36e0b85db9e0b6201744120f811800": "8339cb86cba79c1161230c380214b100",
".git/objects/fa/9617aeec21d49e8c250f0234326b4f4e3b7c40": "10e25aa84204a26ebaf8a511520b2c7d",
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
"flutter_bootstrap.js": "9072ae6c84ce928e5df09d503c1c0e58",
"icons/apple.png": "d2e2f53fedd8aaef5441418f0af4a039",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/icon192.png": "d4093e875bcb5d91784b5a57ea2860da",
"icons/icon512.png": "38359134e30c13d165074173ba8f1894",
"index.html": "7f4de7dc7d97f4290dd596909f6e30e3",
"/": "7f4de7dc7d97f4290dd596909f6e30e3",
"main.dart.js": "250abb133885a2f9db237a40103c71e2",
"manifest.json": "046a48d8ca95c21e1c7ebfe68970c355",
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
