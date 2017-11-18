define(function(require, exports, module) {

    var DocumentProperties = require("app/gadgets/project/document/view/document-properties");

    var UI = require("ui");

    return UI.registerGadget("sample-product-document-properties", DocumentProperties.extend({

        determinePropertyDisplaySettings: function(document, propertyName)
        {
            if (document.getTypeQName() === "catalog:product" && propertyName === "sku")
            {
                return {
                    "link": "https://www.wickedgoodcupcakes.com"
                };
            }

            // otherwise, let the base class handle this
            return this.base();
        }

    }));

});