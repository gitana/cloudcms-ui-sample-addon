define(function(require, exports, module) {

    var UI = require("ui");
    var ContentHelpers = require("content-helpers");

    return UI.registerAction("create-sample-space", UI.AbstractUIAction.extend({

        defaultConfiguration: function() {

            var config = this.base();

            config.title = "Create Sample Space";
            config.iconClass = "fa fa-plus";
            return config;
        },

        prepareAction: function(actionContext, config, callback) {

            actionContext.sampleFileName = "HelloWorld.txt";
            callback();
        },

        executeAction: function(actionContext, config, callback) {

            var self = this;

            // define the form
            var formConfig = {
                "data": {
                    "title": "My Sample Space",
                    "description": "Description of my sample space"
                },
                "schema": {
                    "type": "object",
                    "properties": {
                        "title": {
                            "type": "string",
                            "required": true
                        },
                        "description": {
                            "type": "string"
                        }
                    }
                },
                "options": {
                    "fields": {
                        "title": {
                            "type": "text",
                            "label": "Title"
                        },
                        "description": {
                            "type": "textarea",
                            "label": "Description"
                        }
                    },
                    "focus": "title"
                }
            };

            // render the form
            UI.renderForm(formConfig, function(form) {

                // pop up a modal and render a form into the body
                UI.showModal({
                    "title": config.title,
                    "form": form,
                    "buttons": [{
                        "id": "create",
                        "title": "Create",
                        "handler": function(e) {
                            UI.showWaitModal("Creating the sample space...", function() {
                                self.createHandler(actionContext, form, function() {
                                    UI.hideWaitModal();
                                });
                            });
                        }
                    }],
                    "bindFormEnterKeyToButton": "create",
                    "cancel": true
                }, function(modalDiv) {
                    // TODO: add any post-render logic here to manipulate the modal div
                });
            });
        },

        createHandler: function(actionContext, form, callback)
        {
            ContentHelpers.addFolder(actionContext, form.getValue(), "/Spaces", function() {
                ContentHelpers.addFolder(actionContext, {"title": "Images" }, "/Spaces/" + form.title, function(folder) {
                    ContentHelpers.addFile(actionContext, {"title": actionContext.sampleFileName}, "/Spaces/" + form.title, function(file) {
                        callback();
                    })
                });
            });
        }

    }));
});

