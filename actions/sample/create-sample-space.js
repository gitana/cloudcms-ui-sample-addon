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

            actionContext.currentPath = actionContext.observable("path").get();

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
            UI.renderForm(actionContext, formConfig, function(form) {
                // pop up a modal and render a form into the body
                UI.showModal({
                    "title": config.title,
                    "form": form,
                    "buttons": [{
                        "id": "create",
                        "title": "Create",
                        "handler": function(e) {
                            UI.showWaitModal("Creating the sample space...", function() {
                                self.createHandler(actionContext, form.getValue(), function() {
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

        createHandler: function(actionContext, props, callback)
        {
            ContentHelpers.addContent(actionContext, [{
                "type": "folder",
                "properties": props,
                "parentFolderPath": actionContext.currentPath
            }, {
                "type": "folder",
                "properties": {
                    "title": "Files"
                },
                "parentFolderPath": actionContext.currentPath + "/" + props.title
            }, {
                "type": "file",
                "properties": {
                    "title": "helloworld.txt"
                },
                "parentFolderPath": actionContext.currentPath + "/" + props.title + "/Files",
                "text": "Hello World!"
            }], function(files) {
                callback();
            });
        }

    }));
});

