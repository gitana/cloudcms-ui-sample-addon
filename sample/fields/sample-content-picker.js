define(function(require, exports, module) {

    var UI = require("ui");
    var Alpaca = require("alpaca");

    /**
     * Defines a Content picker field that populates a select field with the results of a query into Cloud CMS
     * for content of a given type.  The type can be provided in the field options using the "contentType"
     * property.
     *
     * To use this field, set your field option "type" to "sample-content-picker".  And then also set the field
     * option "contentType" to the definition QName that you want to query for.
     *
     * The select control will populate with all instances of the specified type.
     */
    return UI.registerField("sample-content-picker", Alpaca.Fields.SelectField.extend({

        setup: function () {

            this.base();

            if (!this.options.contentType) {
                this.options.contentType = "catalog:product";
            }

            this.options.dataSource = {
                "connector": true,
                "config": {
                    "query": {
                        "_type": this.options.contentType
                    },
                    "mappings": {
                        "value": "_doc",
                        "text": "title"
                    }
                }
            };
        }

    }));

});
