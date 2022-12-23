// ==UserScript==
// @name         Youtube Alert Remover
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://*.youtube.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=mozilla.org
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    setInterval(()=> {
        const alertbox = document.querySelector('#confirm-button > yt-button-shape > button')

        if (alertbox) {
            alertbox.click()
            console.log('Reanudado')
        }else {
            console.log('Alertbox no encontrado')
        }
    }, 300000)

})();