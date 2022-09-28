(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["npm.d3-request"],{

/***/ "../node_modules/d3-request/index.js":
/*!*******************************************!*\
  !*** ../node_modules/d3-request/index.js ***!
  \*******************************************/
/*! exports provided: request, html, json, text, xml, csv, tsv */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/request */ "../node_modules/d3-request/src/request.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "request", function() { return _src_request__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _src_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/html */ "../node_modules/d3-request/src/html.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "html", function() { return _src_html__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _src_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/json */ "../node_modules/d3-request/src/json.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "json", function() { return _src_json__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _src_text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/text */ "../node_modules/d3-request/src/text.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "text", function() { return _src_text__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _src_xml__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/xml */ "../node_modules/d3-request/src/xml.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "xml", function() { return _src_xml__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _src_csv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/csv */ "../node_modules/d3-request/src/csv.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "csv", function() { return _src_csv__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _src_tsv__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/tsv */ "../node_modules/d3-request/src/tsv.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tsv", function() { return _src_tsv__WEBPACK_IMPORTED_MODULE_6__["default"]; });










/***/ }),

/***/ "../node_modules/d3-request/src/csv.js":
/*!*********************************************!*\
  !*** ../node_modules/d3-request/src/csv.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_dsv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-dsv */ "../node_modules/d3-dsv/src/index.js");
/* harmony import */ var _dsv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dsv */ "../node_modules/d3-request/src/dsv.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(_dsv__WEBPACK_IMPORTED_MODULE_1__["default"])("text/csv", d3_dsv__WEBPACK_IMPORTED_MODULE_0__["csvParse"]));


/***/ }),

/***/ "../node_modules/d3-request/src/dsv.js":
/*!*********************************************!*\
  !*** ../node_modules/d3-request/src/dsv.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request */ "../node_modules/d3-request/src/request.js");


/* harmony default export */ __webpack_exports__["default"] = (function(defaultMimeType, parse) {
  return function(url, row, callback) {
    if (arguments.length < 3) callback = row, row = null;
    var r = Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])(url).mimeType(defaultMimeType);
    r.row = function(_) { return arguments.length ? r.response(responseOf(parse, row = _)) : row; };
    r.row(row);
    return callback ? r.get(callback) : r;
  };
});

function responseOf(parse, row) {
  return function(request) {
    return parse(request.responseText, row);
  };
}


/***/ }),

/***/ "../node_modules/d3-request/src/html.js":
/*!**********************************************!*\
  !*** ../node_modules/d3-request/src/html.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type */ "../node_modules/d3-request/src/type.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(_type__WEBPACK_IMPORTED_MODULE_0__["default"])("text/html", function(xhr) {
  return document.createRange().createContextualFragment(xhr.responseText);
}));


/***/ }),

/***/ "../node_modules/d3-request/src/json.js":
/*!**********************************************!*\
  !*** ../node_modules/d3-request/src/json.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type */ "../node_modules/d3-request/src/type.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(_type__WEBPACK_IMPORTED_MODULE_0__["default"])("application/json", function(xhr) {
  return JSON.parse(xhr.responseText);
}));


/***/ }),

/***/ "../node_modules/d3-request/src/request.js":
/*!*************************************************!*\
  !*** ../node_modules/d3-request/src/request.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_collection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-collection */ "../node_modules/d3-collection/src/index.js");
/* harmony import */ var d3_dispatch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-dispatch */ "../node_modules/d3-dispatch/src/index.js");



/* harmony default export */ __webpack_exports__["default"] = (function(url, callback) {
  var request,
      event = Object(d3_dispatch__WEBPACK_IMPORTED_MODULE_1__["dispatch"])("beforesend", "progress", "load", "error"),
      mimeType,
      headers = Object(d3_collection__WEBPACK_IMPORTED_MODULE_0__["map"])(),
      xhr = new XMLHttpRequest,
      user = null,
      password = null,
      response,
      responseType,
      timeout = 0;

  // If IE does not support CORS, use XDomainRequest.
  if (typeof XDomainRequest !== "undefined"
      && !("withCredentials" in xhr)
      && /^(http(s)?:)?\/\//.test(url)) xhr = new XDomainRequest;

  "onload" in xhr
      ? xhr.onload = xhr.onerror = xhr.ontimeout = respond
      : xhr.onreadystatechange = function(o) { xhr.readyState > 3 && respond(o); };

  function respond(o) {
    var status = xhr.status, result;
    if (!status && hasResponse(xhr)
        || status >= 200 && status < 300
        || status === 304) {
      if (response) {
        try {
          result = response.call(request, xhr);
        } catch (e) {
          event.call("error", request, e);
          return;
        }
      } else {
        result = xhr;
      }
      event.call("load", request, result);
    } else {
      event.call("error", request, o);
    }
  }

  xhr.onprogress = function(e) {
    event.call("progress", request, e);
  };

  request = {
    header: function(name, value) {
      name = (name + "").toLowerCase();
      if (arguments.length < 2) return headers.get(name);
      if (value == null) headers.remove(name);
      else headers.set(name, value + "");
      return request;
    },

    // If mimeType is non-null and no Accept header is set, a default is used.
    mimeType: function(value) {
      if (!arguments.length) return mimeType;
      mimeType = value == null ? null : value + "";
      return request;
    },

    // Specifies what type the response value should take;
    // for instance, arraybuffer, blob, document, or text.
    responseType: function(value) {
      if (!arguments.length) return responseType;
      responseType = value;
      return request;
    },

    timeout: function(value) {
      if (!arguments.length) return timeout;
      timeout = +value;
      return request;
    },

    user: function(value) {
      return arguments.length < 1 ? user : (user = value == null ? null : value + "", request);
    },

    password: function(value) {
      return arguments.length < 1 ? password : (password = value == null ? null : value + "", request);
    },

    // Specify how to convert the response content to a specific type;
    // changes the callback value on "load" events.
    response: function(value) {
      response = value;
      return request;
    },

    // Alias for send("GET", …).
    get: function(data, callback) {
      return request.send("GET", data, callback);
    },

    // Alias for send("POST", …).
    post: function(data, callback) {
      return request.send("POST", data, callback);
    },

    // If callback is non-null, it will be used for error and load events.
    send: function(method, data, callback) {
      xhr.open(method, url, true, user, password);
      if (mimeType != null && !headers.has("accept")) headers.set("accept", mimeType + ",*/*");
      if (xhr.setRequestHeader) headers.each(function(value, name) { xhr.setRequestHeader(name, value); });
      if (mimeType != null && xhr.overrideMimeType) xhr.overrideMimeType(mimeType);
      if (responseType != null) xhr.responseType = responseType;
      if (timeout > 0) xhr.timeout = timeout;
      if (callback == null && typeof data === "function") callback = data, data = null;
      if (callback != null && callback.length === 1) callback = fixCallback(callback);
      if (callback != null) request.on("error", callback).on("load", function(xhr) { callback(null, xhr); });
      event.call("beforesend", request, xhr);
      xhr.send(data == null ? null : data);
      return request;
    },

    abort: function() {
      xhr.abort();
      return request;
    },

    on: function() {
      var value = event.on.apply(event, arguments);
      return value === event ? request : value;
    }
  };

  if (callback != null) {
    if (typeof callback !== "function") throw new Error("invalid callback: " + callback);
    return request.get(callback);
  }

  return request;
});

function fixCallback(callback) {
  return function(error, xhr) {
    callback(error == null ? xhr : null);
  };
}

function hasResponse(xhr) {
  var type = xhr.responseType;
  return type && type !== "text"
      ? xhr.response // null on error
      : xhr.responseText; // "" on error
}


/***/ }),

/***/ "../node_modules/d3-request/src/text.js":
/*!**********************************************!*\
  !*** ../node_modules/d3-request/src/text.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type */ "../node_modules/d3-request/src/type.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(_type__WEBPACK_IMPORTED_MODULE_0__["default"])("text/plain", function(xhr) {
  return xhr.responseText;
}));


/***/ }),

/***/ "../node_modules/d3-request/src/tsv.js":
/*!*********************************************!*\
  !*** ../node_modules/d3-request/src/tsv.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_dsv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-dsv */ "../node_modules/d3-dsv/src/index.js");
/* harmony import */ var _dsv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dsv */ "../node_modules/d3-request/src/dsv.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(_dsv__WEBPACK_IMPORTED_MODULE_1__["default"])("text/tab-separated-values", d3_dsv__WEBPACK_IMPORTED_MODULE_0__["tsvParse"]));


/***/ }),

/***/ "../node_modules/d3-request/src/type.js":
/*!**********************************************!*\
  !*** ../node_modules/d3-request/src/type.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request */ "../node_modules/d3-request/src/request.js");


/* harmony default export */ __webpack_exports__["default"] = (function(defaultMimeType, response) {
  return function(url, callback) {
    var r = Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])(url).mimeType(defaultMimeType).response(response);
    if (callback != null) {
      if (typeof callback !== "function") throw new Error("invalid callback: " + callback);
      return r.get(callback);
    }
    return r;
  };
});


/***/ }),

/***/ "../node_modules/d3-request/src/xml.js":
/*!*********************************************!*\
  !*** ../node_modules/d3-request/src/xml.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type */ "../node_modules/d3-request/src/type.js");


/* harmony default export */ __webpack_exports__["default"] = (Object(_type__WEBPACK_IMPORTED_MODULE_0__["default"])("application/xml", function(xhr) {
  var xml = xhr.responseXML;
  if (!xml) throw new Error("parse error");
  return xml;
}));


/***/ })

}]);
//# sourceMappingURL=npm.d3-request.3b2999f1efd256c49a71.js.map