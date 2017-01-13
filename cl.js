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
    var it = "Utilizzando questo sito, accetti la nostra ";
    var en = "By using this site, you accept our ";
    var cpl = "https://support.google.com/analytics/answer/6004245";
    var el = document.getElementById('cookie-policy');
    if (el) {
      cpl = el.href;
    }

    cl.div.innerHTML =
      '<p style="text-align: left;color: white;padding: .75em .75em 0em .75em;">' +
      it +
      '<a href="' + cpl + '" >Cookie Policy</a></p>' +
      '<p style="text-align: left;color: white;padding: .5em .75em 0em .75em; border-top:1px dashed #444;margin-right:42px">' +
      en +
      '<a target="_blank" href="' + cpl + '" >Cookie Policy</a></p>' +
      '<p style="text-align:center">' +
      '<a style="text-decoration:none;color: black;background: white;padding: 5px;border: 0;position: absolute;right: 5px;bottom: 5px;width: 32px;" href="javascript:void(0)" onclick="cl.acceptCookies()">OK</a></p>';
    cl.div.style.position = 'fixed';
    cl.div.style.zIndex = '99999';
    cl.div.style.right = '15px';
    cl.div.style.bottom = '15px';
    cl.div.style.background = "rgba(0,0,0,0.85)";
    cl.div.style.fontSize = '75%';
    cl.div.style.borderRadius = '2px';
    cl.div.style.boxShadow = '1px 1px 2px rgba(0,0,0,0.3)';

    document.getElementsByTagName('body')[0].appendChild(cl.div);

  }
};

cl.checkCookie();
