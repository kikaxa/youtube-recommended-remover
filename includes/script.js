// ==UserScript==
// @name YouTube recommended remover
// @author Kix
// @namespace 0
// @include http://youtube.com/*
// @include http://*.youtube.com/*
// @include https://youtube.com/*
// @include https://*.youtube.com/*
// ==/UserScript==

hideElement0 = function(e) {
    if (e === null)
        return;
    e.style.display = "none";
    e.id = "asd2";
    e.setAttribute("class", "asd");
    e.parentNode.removeChild(e);
    //console.log(e, e.parentNode);
}

removeBleagh = function() {
    //class="video-list-item"
     //class="content-wrapper"
      //class="stat view-count"

    var list = document.getElementById('watch-related');
    var new_iface = false;
    if (list === null) {
        new_iface = true;
        list = document.getElementById('items');
        hideElement0(document.getElementById('player-ads'));
    }

    if (list === null) {
        console.log("again changed interface!");
        return;
    }
    var c, j = 0;
    do {
        var list2 = list.getElementsByClassName(new_iface ? "yt-formatted-string-0" : "view-count");
        var i;
        c = 0;
        j++;
        for (i = 0; i < list2.length; i++) {
            if ((!new_iface || list2[i].id == "views") &&
                    list2[i].textContent == "Recommended for you") {
                c++;

                var e = list2[i];
                while (e.parentNode && e.parentNode != list)
                    e = e.parentNode;

                hideElement0(e);
            }
        }
        console.log(c, list2.length);
    } while (c != 0 && j < 10); //WHAT THE SPINNIN' FUCK?! how many times do you need?
}

document.addEventListener( "DOMContentLoaded",
function () {

    removeBleagh();
    //one time is not enough :/
    setTimeout(removeBleagh, 1000);

}, false )
