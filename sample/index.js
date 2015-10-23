define(function(require) {

    // page: "sample-products-page"
    require("./gadgets/sample-products-page/sample-products-page.js");

    // dashlet: "sample-random-product-dashlet"
    require("./gadgets/sample-random-product-dashlet/sample-random-product-dashlet.js");

    // action: "create-sample-space"
    require("./actions/sample/create-sample-space.js");

    // sample form fields
    require("./fields/sample-city-picker.js");
    require("./fields/sample-content-picker.js");

    // sample override to document-properties
    require("./gadgets/sample-product-document-properties/sample-product-document-properties.js");

    // global CSS overrides
    require("css!./styles/sample.css");

});
