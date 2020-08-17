define(function(require, exports, module) {

    var DocumentProperties = require("app/gadgets/project/document/view/document-view-properties");

    var UI = require("ui");

    return UI.registerGadget("sample-product-document-properties", DocumentProperties.extend({

        prepareModel: function(el, model, callback)
        {
            var self = this;

            var document = self.observable("document").get();
            //var project = self.observable("project").get();

            this.base(el, model, function () {

                // if we're looking at a product, add in a link
                if (document.getTypeQName() === "catalog:product" && propertyName === "sku")
                {
                    model.properties.push({
                        "key": "wickedgoodcupcakes",
                        "title": "Wicked Good Cupcakes",
                        "value": "https://www.wickedgoodcupcakes.com",
                        "link": "https://www.wickedgoodcupcakes.com"//,
                        //"linkAttributes": null
                    });
                }

                // all done
                callback();
            });
        }

    }));

});