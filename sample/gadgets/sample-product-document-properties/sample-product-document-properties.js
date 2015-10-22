define(function(require, exports, module) {

    var DocumentProperties = require("app/gadgets/project/document/view/document-properties");

    var UI = require("ui");

    return UI.registerGadget("sample-product-document-properties", DocumentProperties.extend({

        determinePropertyDisplaySettings: function(document, propertyName)
        {
            if (document.getTypeQName() === "custom:product" && propertyName === "abc")
            {
                return {
                    "link": "http://www.cnn.com"
                };
            }

            return {
                "link": null,
                "linkAttributes": null
            };
        }

    }));

});