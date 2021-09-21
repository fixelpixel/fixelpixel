if (Shopify.shop == 'my-test-api.myshopify.com') {var checkExist = setInterval(function() {
      if (typeof window.ShopifyAnalytics.lib.config!=="undefined") {
      var fbSetup = "Facebook Pixel" in window.ShopifyAnalytics.lib.config;
			var pinSetup = "Pinterest Pixel" in window.ShopifyAnalytics.lib.config;
         if(fbSetup){delete window.ShopifyAnalytics.lib.config["Facebook Pixel"]
         }
				 if(pinSetup){delete window.ShopifyAnalytics.lib.config["Pinterest Pixel"]}}
         clearInterval(checkExist);
      
   }, 1);}
