define(function(require, exports, module) {

    var UI = require("ui");
    var Alpaca = require("alpaca");

    var $ = require("jquery");

    /**
     * Defines a City Picker field that can be used within a form.  The City Picker makes an AJAX call over to a remote data
     * source which is modeled here using a static JSON file that is publicly hosted.  The JSON file provides array of
     * city text/value pairs.  These are loaded and then passed to the callback to populate the select field.
     *
     * To use this in a form, simply set the form options type to "sample-city-picker".
     */

    return UI.registerField("sample-city-picker", Alpaca.Fields.SelectField.extend({

        setup: function () {

            this.base();

            // set data source to cities.json
            this.options.dataSource = function(callback) {
                $.ajax({
                    method: "GET",
//                    url: "https://raw.githubusercontent.com/gitana/cloudcms-ui-sample-addon/master/data/cities.json",
                    url: "./data/cities.json",
                    dataType: "json"
                }).done(function(json) {
                    callback(json.cities);
                });
            };
        }

    }));

});
