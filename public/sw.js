self.addEventListener('install', (event) => {
    console.log('Version installing', event);
 
    event.waitUntil(
        caches.open("gczc-1").then(cache => cache.add("https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1791378218,1610637684&fm=26&gp=0.jpg"))
    );
});
 
self.addEventListener('activate', (event) => {
    // console.log('Version now ready to handle');
});
 
self.addEventListener("fetch", event => {
    // const url = new URL(event.request.url);
    // console.log('fetch', event.request);
}); 