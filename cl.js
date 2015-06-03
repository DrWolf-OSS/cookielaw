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
    document.getElementsByTagName('body')[0].removeChild(cl.div);
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
        cl.setCookie(cookieName, cookieChk, 365);
    } else {
        cl.div = document.createElement("div");
        cl.div.innerHTML = '<p style="text-align: center;color: white;padding: 1em;">'+
            'Su questo sito utilizziamo cookie tecnici e per raccogliere '+
            'in modo anonimo statistiche sugli accessi</p>'+
            '<p style="text-align:center">'+
            '<a style="color: black;background: white;padding: .5em 2em;border: 1px solid black;" href="javascript:void(0)" onclick="cl.acceptCookies()">OK</a></p>';
        document.getElementsByTagName('body')[0].appendChild(cl.div);
        cl.div.style.position='fixed';
        cl.div.style.bottom='0';
        cl.div.style.width="100%";
        cl.div.style.background="rgba(0,0,0,0.75)";
        
    }
};

cl.checkCookie();