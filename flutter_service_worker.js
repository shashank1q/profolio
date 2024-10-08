'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "4e3ea69e72a0b902666bea2a79f99fc0",
".git/config": "5c1733d0341b0f12cf7c619c8b5df9dc",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "e36ada4c7ce8e310453d197ddbb862cd",
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
".git/index": "5cffac256f3ea1053c9bcd094b653263",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "fe1f4be059e3a1ba3808ca3e433e0726",
".git/logs/refs/heads/main": "fe1f4be059e3a1ba3808ca3e433e0726",
".git/logs/refs/remotes/origin/main": "cf1fa69e048a496ffcaa779e3761b228",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0c/e2b45d49cc52a9ffd5fe4d94b3a9253517ef06": "b47e3a7dfc9efbb08cc1f5e194d8663d",
".git/objects/0f/7c6fdbe48fa035da821fffe800701d844fed8e": "e992c45b35883a4321cf8507f5af508f",
".git/objects/10/db7696111283c395a68b14ca97e788c1841959": "446270ffbf1cc2d4e7dde1bf256ac8c8",
".git/objects/12/2ce1e26ac1b09b064c4803ca44563d7ddafbac": "7c7eeaf3409a2f54e4c541fb331ad4f9",
".git/objects/12/7b0b65f432100d57be84831f23df34dc408ef9": "5e3cf8fcaeab44cabdd8ad3992563344",
".git/objects/17/68d0d12fbfd23a3d3ec5f367a9a1f6b0cd5088": "3c65329cb9752cd418c3c2d7b54fdfed",
".git/objects/19/280d082c49a6a8a58b315050519d9ce742ff49": "8e1afc9b0cb37168d47dd7f4d0d3b2a5",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/21/d93ededd7ce89a3bf0689e485da449e17ded77": "ead4a7615f03ae4fd9d9536ba7a02008",
".git/objects/22/cce45c51fc60c218842ee6621ed21a461e684d": "ae933838327090b7e25b022093a36772",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/25/e0a486dafce230e5d933d793a0736b2b8c6d7c": "ce1dd8d79d17195e4d062a122d822c0d",
".git/objects/27/5199abe8b84ba4ed9086e712f8969047966f57": "b9cc7f9a156f0fc2a48d832044c0d0c5",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/33/9c0c980a225fe9451bf643a48566941e7253ff": "6fe02b85e73d319bc59b86d8fd91a8d1",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3c/4f84e57c4ea238ca85bb631e0ed7260245ae06": "44dcecf5d3af863f1e354fa42f57fc19",
".git/objects/3e/575edbad7eec6c716a433e6a2156a5a60a39c0": "db3fe04a5ce83130177a8e198f88ca81",
".git/objects/3f/a72b053bf1da9a8390b2f49014e8c2c6eac9a8": "5ced96e804e7ce905f9bdfdf98c1a5e3",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/40/860b2e68e713a12e672d3e46b424a56b0f6beb": "030ab22a9e1a37253011f6ec3d6359be",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/e197f88622e7023552e4b14836aa989fe7886d": "c5e843f37aa17336cb5454080e88589f",
".git/objects/4c/39ae3720cdcda7573e97de7cb17e924846751a": "7e9aed17b6ef294f7353cd95a097a69b",
".git/objects/4e/0ae9ebebf098cc441b531ee4f0f8f04cd1d3c0": "9f976e8c95ae25dcbeebc282bd890182",
".git/objects/51/1c75b1414b7ee4775851259e9eb76d67c08434": "09f0281e0c3a9aa8b46953f5451ebc9e",
".git/objects/51/c4bcd88818266ee312d5b0174fd0d0dde6e94c": "ea57e7d0edbd9410966c436ad5d1f78d",
".git/objects/59/a605f55c6a02b8810a8ca6c4c80c3c3b4f904e": "cfc23f0d54d1523c01691ab00ad73df5",
".git/objects/5b/e0152cb21466967bae981fcbb48256a48c990d": "4374b82b8e5b0afce2387208f15edb51",
".git/objects/5f/b6e8d604278cc7589c6df27375834568e00282": "d23ee8caf189e637f4cdea1a72b7a6a2",
".git/objects/5f/d2bca3bb9b0fbb305839dbf900381660d9aa20": "da0c35795ce63d1226302eb330a16ef1",
".git/objects/60/253a68deebed24f6a296084f8ca193b488240c": "ee26d3ac3636a581819dc34a9c13f537",
".git/objects/60/6e8db7335f8e5b04427fece03abe6af3b6a349": "bbb6d77c60c2d01858629e4bfaa416e6",
".git/objects/61/3987ef1e0f6784608089c0dbec7f9bc49a48d7": "cd70eb7d50674859b1ea000821e9cd04",
".git/objects/63/1181d17658d8ed2d206c6b5938f5e21033a9f6": "7ace0140f1da21c6f642e6e6329f6904",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6e/6dac1466ace28ada6a82a2b246ae8f9e92a090": "5bd45bd83fd0228f17438da6eb82be82",
".git/objects/6f/bd6b375254d053eb06e3469be4243c63d1407b": "4be7948e5e87bd06fbac4b0d76d676ba",
".git/objects/73/157261c9aeb5a72d3f9c16239f65eec2daec5d": "157064e6783681d4d637f2d882d6dbe2",
".git/objects/73/f7588dd5ce760e3a2930f4c658a0e94a6ea2f0": "93cc15cd1f6e85b7732f5c1608aed714",
".git/objects/75/cd8f5ba8a970667b63c16880b0e98990e22a70": "91837610fdb6e82d1e3b80a79b175c07",
".git/objects/7f/da0c52492186ff0145a1ab32c29c881f08831c": "16ee4bb7da80ed37179731f10aeec1db",
".git/objects/83/31152c451ad9c60d7aeb6d0df28063de941c2a": "8b029f93568515bd0fb0dea28f8592c3",
".git/objects/83/c1e91c4e39a58722a955e32427ac64bed16ad7": "951d466bced11a61638a385d8c876bf8",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/84/44b30a0aa78cbdc822cdd55aa6e19940f83785": "b42fed8630f2db2c4ce4fe771cdb05ca",
".git/objects/84/d27ef86b64e1303d2559e952a1360fcba12730": "de1b95c3f99a3b48e181eb7e7fbb0267",
".git/objects/85/1eb97cba572434522cf3bba6c229590f8f76dd": "6cb8656d07b4c96d395b44b0f9c8672c",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/4918c26124ef425a105d9ff636b518c4106978": "087866b08c0af5a05845d57ed0df0406",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/ef58600d86410a5bcf403fc66b18c0d819a56f": "f429df27cd63bb207d2c3ef3b126b27b",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/94/f0e3a7bbe6deb992b56be299546896a647404f": "0c8a8f17cfd4e68bc3a9de322d298d97",
".git/objects/96/20bc662b0e1e74bcd98f415f2a47b1b86b6fa9": "7018373fa4ec0a8b15aaf646fa469f28",
".git/objects/97/ab3e1274c33c91b04dc6c6211179ac40d2df7d": "6f28ba26824aa188d63a58d953c6d4af",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9c/87d763b4b1765e1ed5648d82c147f7ae732479": "26cb17811103834c008ab74dc915a0fa",
".git/objects/9e/90e6bc158c6c8ad29104a812186d5881bbad7b": "a389262e376f9c9dac910803ff8d98b5",
".git/objects/a2/3a86ad3f2dc89d3eb7810ada513409ee4fbef2": "9b9db901ffab92146c2972657ce60704",
".git/objects/a6/996e859e5df727f12d2d06c3dbc9d51485de45": "063fe295edee03df96cd1f7872c7243a",
".git/objects/a7/b598d98030164e6b025e11f1724bbedf72a7f0": "0bae413cc99edfaa8a091c8f4847ccf6",
".git/objects/a8/3fce86bbf5ddadd26da91b36b2e2f63355a1c3": "c6fb5fe13fee091b07e4326bf84b007e",
".git/objects/aa/c0272fdd0452b3dbf619a9f26c758824f3ac16": "9c04599e778c74873af542ee03c0d14c",
".git/objects/ad/afb2132d15bc96eb2a340872739175a2cb3eeb": "6ed722391d9394c8b0939fcbf90c417a",
".git/objects/ae/466cc19d976350d34177e14663b20e5d862582": "cbf52ba14856e2857de5af68201e027d",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b6/79794faa064f7b4a4c72190fe72ead204db32a": "d54e14f8ac361e4e355a3a3520499137",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/e84f33cdf7e49f325b117ff5bf6f24ab931a76": "60b728b8fc0f4ffa4443c3938d7b8068",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bc/8c80cf508649fe8c43e284e2218fef2cad7541": "4cb321afe0c3e58febd68cf9263eabb3",
".git/objects/bd/f2feb35abe2d78b8697c5a2502c0eac8f12859": "58419226cdb142fa36e99227372eefa9",
".git/objects/c1/a252270249ecd7312ba64675d7958c2ea86689": "31a37c6e88927dc9b79fdad689c4de7c",
".git/objects/c4/43b65fcf570a3278380d302cab64764a4c954c": "125685a61b6f8a3aa2276c65ad4bb340",
".git/objects/c4/cf3b86d45f524e9ddaf102f63d3362fe441232": "3ecb50b202613ef4f9ed7148cfba5597",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/398451e19f746e01d6118893c2f59e47a13a6a": "7b733b9c9c59a105b045fdc5caf9329d",
".git/objects/da/56ffbd2eb2c9805348c86484c6b8cab57461bc": "b2f662fcd26abec3b135ab4224957045",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/dc/0dd9c30a702dfa2cad301379b0497332b2cdc1": "6ffc77cf27bb094d81abe5c1defb952d",
".git/objects/e0/ccfa584292893ea7b9ddd1fcc6d7478dde7612": "0c3b8082e0f18d9482efdac17ba0a3c5",
".git/objects/e1/b8a2a6cfabf188b6298c5267deb7b69b9e0ae6": "9f0dd5571bace8fc441b97493a440e06",
".git/objects/e1/f100d9e6bf68d18ce00cff8ba0443fba4a91ec": "ea5ece3c7af4fb9300778b041702b718",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/ff4ae62c4d4d2428ae3530a40a5071c6985b8f": "3a46f014c607fafcb3331caacf8cbcc2",
".git/objects/ee/d9658dc5dbfe767143294190cb067f827f99f5": "cb1b5374ed37dca6a56e31a57156294b",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/19cbdd8cec8c7b55524298fe8efbcd1f8700a0": "8386d95a8c8901d5ae47857dbd168ae4",
".git/objects/f8/97a1ddadc79edf701bd4572c9e619e3efc49b6": "f99ae82c1e282780774ccf89f5f00555",
".git/objects/fa/9617aeec21d49e8c250f0234326b4f4e3b7c40": "10e25aa84204a26ebaf8a511520b2c7d",
".git/ORIG_HEAD": "5644700055c1078836f308d71209e01f",
".git/refs/heads/main": "3d7a526cf75d983a3149d83b705a9ca0",
".git/refs/remotes/origin/main": "3d7a526cf75d983a3149d83b705a9ca0",
"assets/AssetManifest.bin": "7e5ae0551d7ad0df7d3298cef47da824",
"assets/AssetManifest.bin.json": "7d52f0e681dc2ec94f2efb8b17850af1",
"assets/AssetManifest.json": "56126990a2d820e1df44037593deabfb",
"assets/assets/banner.jpg": "f0f23c832e4d461b0a20af3d1849f975",
"assets/assets/cheeta.jpg": "4a300323dc4c5d64359cad0fece74620",
"assets/assets/CV.pdf": "c7e36ddffd4fe4b58d00a198b58aba2c",
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
"assets/assets/videos/video1.mp4": "4b360975458bfda94f246a853454289e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "8c7a89b0c16fd4f25181f11bdbfeba47",
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
"assets/NOTICES": "720b0c6e57f7ae2205a5388dcb2dcfef",
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
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "6d8736203ffaef32a99561bc6eb6274c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "fb6de3925418713790a6f5b330420afd",
"/": "fb6de3925418713790a6f5b330420afd",
"main.dart.js": "3aec144eb46b284754d887fecc0ec802",
"manifest.json": "b4cf8338659761741ae93aef02b42e4d",
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
