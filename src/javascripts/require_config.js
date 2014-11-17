require.config({
  paths: {
    "jquery": "javascripts/vendor/jquery.min",
    "transit": "javascripts/vendor/jquery.transit",
    "browserDetect": "javascripts/lib/browserDetection"
  },
  shim: {
    "transit": {
      "deps": ["jquery"],
      "exports": "$.transit"
    },
    "browserDetect": {
      "deps": ["jquery"]
    }
  }
});
