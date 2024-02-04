/*
WARNING —— DO NOT EDIT SCRIPT
Script consists of connection to analytics
*/

'use strict';

!function() {
    var windowObj = window,
        documentObj = document,
        scriptTag = 'script',
        argumentsList = arguments,
        scriptAttributes = {
            async: 1,
            src: 'https://static.woopra.com/js/w.js'
        },
        methodList = ['call', 'cancelAction', 'config', 'identify', 'push', 'track', 'trackClick', 'trackForm', 'update', 'visit'],
        woopraInstance = function() {
            var self = this,
                createMethod = function(method) {
                    self[method] = function() {
                        return self._e.push([method].concat(Array.prototype.slice.call(arguments, 0))), self;
                    };
                };

            self._e = [];

            for (var i = 0; i < methodList.length; i++) {
                createMethod(methodList[i]);
            }
        };

    windowObj.__woo = windowObj.__woo || {};

    for (var i = 0; i < argumentsList.length; i++) {
        windowObj.__woo[argumentsList[i]] = windowObj[argumentsList[i]] = windowObj[argumentsList[i]] || new woopraInstance();
    }

    var scriptElement = documentObj.createElement(scriptTag),
        firstScriptTag = documentObj.getElementsByTagName(scriptTag)[0];

    for (var attribute in scriptAttributes) {
        scriptElement[attribute] = scriptAttributes[attribute];
    }

    firstScriptTag.parentNode.insertBefore(scriptElement, firstScriptTag);
}('woopra');

woopra.config({
    domain: 'cuddly-palm-tree-5gg57r7gv5gp37qwv-5173.app.github.dev',
    outgoing_tracking: true,
    download_tracking: true,
    click_tracking: true
});

woopra.track();