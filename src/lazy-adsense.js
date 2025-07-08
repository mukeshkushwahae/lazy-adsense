/**
 * Plugin Name: Lazy AdSense
 * Plugin URI: https://github.com/mukeshkushwahae/lazy-adsense
 * Description: Lightweight script to delay the loading of Google AdSense until user interaction (scroll or click), improving performance and Core Web Vitals. Automatically stores a flag in localStorage to prevent repeated triggering.
 * Version: 1.0.0
 * Author: Mukesh Kushwaha
 * Author URI: https://github.com/mukeshkushwahae
 * License: MIT
 * License URI: https://github.com/mukeshkushwahae/lazy-adsense/blob/main/LICENSE.md
 */
(() => {
   /**
    * Check whether the AdSense script has already been loaded in this session
    * using a flag stored in localStorage.
    */
   const isAdSenseLoaded = localStorage.getItem("lazyAdsense") === "1";

   /**
    * Dynamically inject the AdSense script into <head>.
    * Optionally includes the "client" param if a valid `window.lazyAdClient` is provided.
    */
   const loadAdSenseScript = () => {
      const script = document.createElement("script");

      script.async = true;
      script.crossOrigin = "anonymous";

      const hasValidPubID =
         typeof window.lazyAdClient === "string" &&
         window.lazyAdClient.startsWith("ca-pub-");

      script.src = hasValidPubID ?
         "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=" + window.lazyAdClient :
         "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";

      document.head.appendChild(script);
   };

   /**
    * Trigger the AdSense script and set the localStorage flag to avoid redundant calls.
    */
   const triggerAdSenseLoading = () => {
      loadAdSenseScript();
      localStorage.setItem("lazyAdsense", "1");
   };

   /**
    * If not already loaded, register event listeners for user engagement:
    * - First scroll or first click will trigger the loading.
    */
   if (!isAdSenseLoaded) {
      let isScrolled = false;
      let isClicked = false;

      /**
       * Unified handler for both scroll and click.
       * Only triggers once on first user interaction.
       */
      const handleUserInteraction = () => {
         if (!isScrolled && !isClicked) {
            triggerAdSenseLoading();
            isScrolled = true;
            isClicked = true;
         }
      };

      /**
       * Listen for user's scroll event to lazily load AdSense.
       * Passive event listener improves scroll performance.
       */
      window.addEventListener(
         "scroll",
         () => {
            const scrollTop =
               document.documentElement.scrollTop || document.body.scrollTop;

            if (scrollTop > 0 && !isScrolled) {
               handleUserInteraction();
            }
         }, {
            passive: true
         }
      );

      /**
       * Listen for user's click to load AdSense immediately.
       */
      window.addEventListener(
         "click",
         () => {
            if (!isClicked) {
               handleUserInteraction();
            }
         }, {
            passive: true
         }
      );
   } else {
      /**
       * If AdSense already marked as loaded in previous session,
       * load the script immediately again.
       */
      loadAdSenseScript();
   }
})();