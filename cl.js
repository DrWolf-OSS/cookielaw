var cl = cl || {};

cl.getCookie = function (c_name) {
    var i, x, y, ARRcookies = document.cookie.split(";");
    for (i = 0; i < ARRcookies.length; i++) {
        x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
        y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, "");
        if (x == c_name) {
            return unescape(y);
        }
    }
};

cl.acceptCookies = function () {
    cl.setCookie("jsCookieCheck", "OK", 365);
    cl.showCookieNotification = false;
};

cl.setCookie = function (c_name, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = escape(value) + ((exdays === null) ? "" : "; expires=" + exdate.toUTCString() + "; path=/");
    document.cookie = c_name + "=" + c_value;
};

cl.checkCookie = function () {
    var cookieName = "jsCookieCheck";
    var cookieChk = cl.getCookie(cookieName);
    if (cookieChk == "OK") {
        setCookie(cookieName, cookieChk, 365);
    } else {
        cl.div = document.createElement("div");
        cl.div.innerHTML = '<p style="color:white">Su questo sito utilizziamo cookie tecnici e per raccogliere '+
            'in modo anonimo statistiche sugli accessi<p>'+
            '<a href="javascript:void(0)" onclick="cl.acceptCookies()">OK</a>';
        document.getElementsByTagName('body')[0].appendChild(div);
        cl.div.style.position='fixed';
        cl.div.style.width="100%";
        cl.div.style.background="rgba(0,0,0,0.7)";
        
    }
};

checkCookie();