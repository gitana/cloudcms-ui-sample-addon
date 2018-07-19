define(function(require, exports, module) {

    var html = require("./sample-random-product-dashlet.html");
    require("./sample-random-product-dashlet.css");

    var UI = require("ui");

    return UI.registerDashlet("sample-random-product-dashlet", UI.AbstractDashlet.extend({

        TEMPLATE: html,

        configureDefault: function()
        {
            this.base();
            this.config({
              "message": "now THIS is podracing"
            });
        },

        /**
         * Puts variables into the model for rendering within our template.
         * Once we've finished setting up the model, we must fire callback().
         *
         * @param el
         * @param model
         * @param callback
         */
        prepareModel: function(el, model, callback) {
            // get the current project
            // var project = this.observable("project").get();

            // the current branch
            var self = this;
            var branch = this.observable("branch").get();
            // call into base method and then set up the model
            this.base(el, model, function() {
                model.message = self.config().message;

                // query for catalog:product instances
                branch.queryNodes({ "_type": "catalog:product" }).then(function() {

                    // all of the products
                    var products = this.asArray();

                    // keep one at random
                    var product = model.product = products[Math.floor(Math.random() * products.length)];

                    // add "imageUrl" value to product (retrieve preview of width 256)
                    product.imageUrl = "/preview/repository/" + product.getRepositoryId() + "/branch/" + product.getBranchId() + "/node/" + product.getId() + "/default?size=256&name=preview256";

                    callback();
                });
            });
        },

        /**
         * This method gets called before the rendered DOM element is injected into the page.
         *
         * @param el the dom element
         * @param model the model used to render the template
         * @param callback
         */
        /*
        beforeSwap: function(el, model, callback)
        {
            this.base(el, model, function() {
                callback();
            });
        },
        */

        /**
         * This method gets called after the rendered DOM element has been injected into the page.
         *
         * @param el the new dom element (in page)
         * @param model the model used to render the template
         * @param originalContext the dispatch context used to inject
         * @param callback
         */
        afterSwap: function(el, model, context, callback)
        {
            var self = this;

            this.base(el, model, context, function() {

                // TODO: grab any injected DOM elements and bind JS behaviors if needed

                callback();

            });
        },

        isConfigurable: function()
        {
            return true;
        },

        handleConfiguration: function(div, data, callback)
        {
            var config = {};
            config.data = data;
            config.schema = {
                "type": "object",
                "properties": {
                    "message": {
                        "type": "string",
                        "title": "Message"
                    }
                }
            };
            config.options = {};
            config.observableHolder = Ratchet;

            UI.configureDashlet(config, function (err, data) {
                callback(err, data);
            });
        }

    }));
});
