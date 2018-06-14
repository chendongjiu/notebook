// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

define([
    'jquery',
    'base/js/dialog',
    'base/js/i18n',
    'base/js/utils',
], function (
    $,
    dialog,
    i18n,
    utils
) {
    "use strict";

    var LoginWidget = function (selector, options) {
        options = options || {};
        this.base_url = options.base_url || utils.get_body_data("baseUrl");
        this.selector = selector;
        if (this.selector !== undefined) {
            this.element = $(selector);
            this.bind_events();
        }
    };


    LoginWidget.prototype.bind_events = function () {
        var that = this;
        this.element.find("button#logout").click(function () {
            dialog.modal({
                title: i18n.msg._("Logout"),
                body: i18n.msg._("Are you sure you want to logout?"),
                default_button: "Cancel",
                buttons: {
                    Cancel: {},
                    Logout: {
                        class: "btn-warning",
                        click: function () {
                            window.location = utils.url_path_join(
                                that.base_url,
                                "logout"
                            );
                        }
                    }
                }
            });
        });
        this.element.find("button#login").click(function () {
            window.location = utils.url_path_join(
                that.base_url,
                "login"
            );
        });
    };

    return {'LoginWidget': LoginWidget};
});
