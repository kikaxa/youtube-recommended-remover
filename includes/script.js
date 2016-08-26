// ==UserScript==
// @name YouTube recommended remover
// @author Kix
// @namespace 0
// @include http://youtube.com/*
// @include http://*.youtube.com/*
// @include https://youtube.com/*
// @include https://*.youtube.com/*
// ==/UserScript==

removeBleagh = function() {
    //class="video-list-item"
     //class="content-wrapper"
      //class="stat view-count"

    var list = document.getElementById('watch-related');
    var c, j = 0;
    do {
        var list2 = list.getElementsByClassName("view-count");
        var i;
        c = 0;
        j++;
        for (i = 0; i < list2.length; i++) {
            if (list2[i].textContent == "Recommended for you") {
                c++;

                var e = list2[i];
                while (e.parentNode && e.parentNode != list)
                    e = e.parentNode;

                //list2[i].style.display = "none";
                e.style.display = "none";
                e.setAttribute("class", "asd");
                list.removeChild(e);
                //console.log(e, e.parentNode);
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
