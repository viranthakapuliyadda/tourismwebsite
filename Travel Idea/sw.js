//creating a constant for static cache
const statCache='statv4';
//creating a constant for dynamic cache
const dynaCache='dynav1';

//storing shell/static assets in an array
const assets=['./','./images\685870490Uppuveli_Beach.jpg','./images\amaya hotel.jpg','./images\android-chrome-192x192.png','./images\android-chrome-512x512.png','./images\apple-touch-icon.png','./images\backjpg.jpg','./images\batik.jpeg','./images\can do in sl.jpg','./images\cinnamon lodge.jpg','./images\Classic-Cultural-l.jpg','./images\Cover-for-Snorkeling-in-Hikkaduwa.jpg','./images\elegant resort.jpg','./images\favicon-16x16.png','./images\favicon-32x32.png','./images\galle face hotel.jpg','./images\gems.jpg','./images\heritage-sites-1-2.jpg','./images\hike2.jpg','./images\hikkaduwa hotel.jpg','./images\hikkaduwa.jpg','./images\history of srilanka.jpeg','./images\Hortanplains1.jpg','./images\horton-plains-sri-lanka.jpg','./images\IMG_2024+-+Edit.jpg','./images\inora-travel-lanka-14-Days-Sigiriya3.jpg','./images\istockphoto-1061332954-640_adpp_is.mp4','./images\logo.jpg','./images\maligawa 2.jpg','./images\maligawa old.jpg','./images\marino beach.jpg','./images\masks.jpg','./images\mligawa.jpg','./images\mstile-150x150.png','./images\nilaweli.jpg','./images\safari.jpg','./images\save ocean.jpg','./images\save rain.jpg','./images\Screen-Shot-2015-02-02-at-17.20.30.png','./images\shangila.jpg','./images\sigiriya back.jpg','./images\sigiriya front.jpg','./images\sigiriya1.jpg','./images\Sinharaja Rainforest Day Trek from Colombo.jpg','./images\sinharaja.jpg','./images\sri lanka map.jpg','./images\Sri_Dalada_Maligawa_Kandy_Srilanka.jpg','./images\surf2.jpg','./images\tea.jpg','./images\turtles.jpeg','./images\Unawatuna-1024x699.jpg','./images\yala 2.jpg','./images\yala.jpg','./images\yapahuwa 75.jpg','./activities.css','./activities.html','./activities.js','./beaches.css','./beaches.html','./browserconfig.xml','./donate.js','./donations.css','./donations.html','./favicon.ico','./heitage1.html','./heritage2.css','./homepage.css','./homepage.html','./main.js','./manifest.json','./safari-pinned-tab.svg','./site.webmanifest','./wildlife.css','./wildlife.html','./images\Wooden-Watch-Craft-Idea.jpg','./images\saree.jpg']

//the install event
self.addEventListener('install',(evt)=>{
    //console.log("Service worker installed.");
    //install event should wait until whatever inside evt.waitUntil() finishes.
    evt.waitUntil(
        //open static cache
        caches.open(statCache)
    .then((cache)=>{
        console.log("Caching assets...");
        //adding all assets in assets array into cache
        cache.addAll(assets);
    })
    );
    
});

//The activate event
self.addEventListener('activate',(evt)=>{
    //console.log("Service worker is active!");
    evt.waitUntil(
        //accessing all versions of caches available currently
        caches.keys()
        .then((keys)=>{
            //console.log(keys);
            //going through the list pf caches, checking whether the cache name is equal to current cache version/s:static and dynamic and getting rid of any old cache versions
            return Promise.all(
                keys.filter(key=>key!==statCache && key!==dynaCache)
                .map(key=>caches.delete(key))
            );

        })
    );
});

//The fetch event handler
self.addEventListener('fetch',(evt)=>{
    //console.log("Fetch event",evt);
    //interrupt the normal request and respond with a custom response
    evt.respondWith(
        //check if the resource exists in cache
        caches.match(evt.request)
        .then((cacheRes)=>{
            //return from cache if it is there in cache. or else fetch from server
            return cacheRes || fetch(evt.request)
            //when fetching from server, add the request and response to dynamic cache to access the resource/s when offline
            .then(fetchRes=>{
                return caches.open(dynaCache)
                .then(cache=>{
                    cache.put(evt.request.url,fetchRes.clone());
                    return fetchRes;
                });
            });
            //returning the fallback page if the resource is not available in any of the caches
        }).catch(()=>{
            //check whether the request url contains .html in it
            if(evt.request.url.indexOf('.html')>-1){
                return caches.match('/fallback.html')
            }
            })
    );
})
