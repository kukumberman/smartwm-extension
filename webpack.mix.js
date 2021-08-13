

require("laravel-mix")
  .setPublicPath("./")
  .js("src/js/popup.js", "dist/js").vue()