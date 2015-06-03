define(function(require, exports, module) {

    require("css!./sample.css");
    var html = require("text!./sample.html");

    var Ratchet = require("ratchet/web");
    var OneTeam = require("oneteam");
    var Empty = require("ratchet/dynamic/empty");

    return Ratchet.GadgetRegistry.register("sample", Empty.extend({

        TEMPLATE: html,

        setup: function() {
            this.get("/projects/{projectId}/sample", this.index);
        },

        prepareModel: function(el, model, callback) {

            var self = this;

            this.base(el, model, function() {

                var project = self.observable("project").get();

                model.title = "Hello World for project " + project.title;

                callback();

            });
        },

        afterSwap: function(el, model, originalContext, callback)
        {
            var self = this;

            this.base(el, model, originalContext, function() {

                // TODO: any post-render setup
                // this is where you'd plug in custom JS post DOM render

                callback();
            });
        }

    }));

});