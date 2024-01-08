// ==UserScript==
// @name         Redirect to New Truck Simulator Wiki
// @namespace    https://github.com/Wolf68k/Trucksimulator-Wiki-Redirect/blob/main/trucksimulatorwiki.user.js
// @version      1.0
// @description  Redirect automatically from the old Truck Simulator Wiki (Fandom) to the new Wiki
// @author       Wolf68k
// @match        https://truck-simulator.fandom.com/wiki/*
// @icon         https://trucksimulator.wiki.gg/favicon.ico
// @run-at       document-start
// @grant        none
// @license MIT
// ==/UserScript==

(function() {
    // only move the english wiki
    if((location.host + location.pathname).indexOf("truck-simulator.fandom.com/wiki") == 0) {
        location.replace(location.protocol + "//trucksimulator.wiki.gg" + location.pathname + location.search + location.hash);
    }
})();
