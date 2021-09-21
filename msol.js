   var fpx="123";
   var ppx; 
   var tkx;
   var snx;
	 var gads;
 	 var gadslbl;
if (Shopify.shop == 'my-test-api.myshopify.com') { 
	var checkExist = setInterval(function() {
      if (typeof window.ShopifyAnalytics.lib.config!=="undefined") {
      var fbSetup = "Facebook Pixel" in window.ShopifyAnalytics.lib.config;
         if(fpx){fbSetup  ? window.ShopifyAnalytics.lib.config["Facebook Pixel"].pixelIds.push(fpx) : Object.assign(window.ShopifyAnalytics.lib.config, {"Facebook Pixel":{"pixelIds":fpx,"agent":"plshopify1.2"}});}
         if(ppx){window.ShopifyAnalytics.lib.config["Pinterest Pixel"]!=="undefined" && ppx!="undefined" && Object.assign(window.ShopifyAnalytics.lib.config, {"Pinterest Pixel":{"pixelId":ppx,"pixelVersion":"3.0"}});}
         if(tkx){window.ShopifyAnalytics.lib.config["TikTok Pixel"]!=="undefined" && tkx!="undefined" && Object.assign(window.ShopifyAnalytics.lib.config, {"TikTok Pixel":{"pixelId":tkx}});}
         if(snx){window.ShopifyAnalytics.lib.config["Snap Pixel"]!=="undefined" && snx!="undefined" && Object.assign(window.ShopifyAnalytics.lib.config, {"Snap Pixel":{"pixelId":snx}});}
if(gads){window.ShopifyAnalytics.lib.config["Google Gtag Pixel"]!=="undefined" && gads!="undefined" && Object.assign(window.ShopifyAnalytics.lib.config, {"Google Gtag Pixel":{"conversionId":gads,"eventLabels":[{"type":"purchase","action_label":gadslbl}]}})};
         }
         clearInterval(checkExist);
      
   }, 1);};
