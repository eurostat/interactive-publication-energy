/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"stackedbarchart": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./scripts/main.js","npm.core-js","npm.d3","npm.d3-geo","npm.d3-shape","npm.d3-selection","npm.d3-array","npm.d3-hierarchy","npm.d3-transition","npm.d3-interpolate","npm.d3-scale","npm.d3-time","npm.d3-format","npm.d3-quadtree","npm.d3-ease","npm.d3-force","npm.d3-request","npm.d3-voronoi","npm.d3-random","npm.d3-collection","npm.d3-polygon","npm.d3-chord","npm.d3-color","npm.d3-drag","npm.d3-zoom","npm.d3-brush","npm.d3-dsv","npm.d3-time-format","npm.fortawesome","npm.d3-axis","npm.d3-timer","npm.billboard.js","npm.bootstrap-select-v4","npm.bootstrap","npm.d3-queue","npm.d3-dispatch","npm.d3-path","npm.jquery-csv","npm.jquery","npm.jsonstat","npm.l10n.js","npm.popper.js","npm.process","npm.regenerator-runtime","npm.setimmediate","npm.timers-browserify","npm.webpack"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../configs/configuration.js":
/*!********************************************************************************************************!*\
  !*** /Users/mathieutholl/Documents/EUROSTAT/Sources/SVN/Main-Vis/stacked_bar/configs/configuration.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  configuration: {
    defaultSortProperty: "data1",
    defaultSortDirection: "desc",
    data: {
      url_dev: "//www.development.ec.europa.eu/dsws-wd/dsws/rest/data/v2.1/json/",
      url_dev_serve: "http://localhost:8081/data/",
      url_acc: "//www.acceptance.ec.europa.eu/eurostat/wdds/rest/data/v2.1/json/",
      url_prod: "https://ec.europa.eu/eurostat/api/dissemination/statistics/1.0/data/",
      url_settings: "&format=JSON&lang=EN",
      url_local: "http://localhost:8080/data/",
      lang: "en",
      countriesEu: ["EU27_2020", "EU28"],
      countriesMS: ["AT", "BE", "BG", "CY", "CZ", "DE", "DK", "EE", "EL", "ES", "FI", "FR", "HR", "HU", "IE", "IT", "LT", "LU", "LV", "MT", "NL", "PL", "PT", "RO", "SE", "SI", "SK"
      /*,"UK"*/
      ],
      countriesOthers: [],
      countriesEfta: ["LI", "NO", "CH", "IS"],

      get countriesGroupped() {
        return [this.countriesEu, this.countriesMS, this.countriesOthers, this.countriesEfta];
      },

      get countries() {
        return this.countriesEu.concat(this.countriesMS).concat(this.countriesOthers).concat(this.countriesEfta);
      },

      iconColorNotSelected: "#044AA3",
      iconColorSelected: "#CC7395"
    }
  }
};

/***/ }),

/***/ "../../configs/energy/energy_04_03_01/indicator.js":
/*!***************************************************************************************************************************!*\
  !*** /Users/mathieutholl/Documents/EUROSTAT/Sources/SVN/Main-Vis/stacked_bar/configs/energy/energy_04_03_01/indicator.js ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  visData: [{
    "chartType": "scatter",
    "title": "",
    "publication": "Energy",
    "publicationId": "Energy",
    "dataType": "file",
    "dataFileFilter": {
      filterKey: "Data",
      filterValue: "Data"
    },
    "chapter": "4.3.1",
    "periods": ["2020"],
    "table": "nrg_ind_ren",
    "params": {},

    /*
    "params" : {//nrg_ind_ren?precision=1&unit=PC&nrg_bal=REN
      "time" : [ "2019","2020"],
      "unit" : ["PC"],
      "nrg_bal" : ["REN"],
      "precision" : ["1"]
    },*/
    "grouping": {
      "unit": "indicatorenergy_04_03_01.hoverUnit",
      "paramName": "Data",
      "default": "2020",
      "groups": [
      /*
      {"code" : "2001", "elems" :["2001"],"title":"energy.year.2001", "color": "#f26522", "pattern" : '<g class="scaled"><polygon style="fill:inherit;" points="19.5,16 31.7,28.1 28.1,31.7 15.9,19.5 3.7,31.7 0.2,28.2 12.4,15.9 0.1,3.7 3.6,0.1 15.9,12.4 &#10;&#9;&#9;28.2,0.1 31.8,3.7 &#9;"></polygon></g>'},
      {"code" : "2010", "elems" : [ "2010"], "title": "energy.year.2010", "color": "#00A3E4", "pattern" : '<g class="scaled"><path style="fill:inherit;" d="M15.9,0.3L0.2,16.1l15.8,15.8l15.8-15.8L15.9,0.3z M15.8,26.5L5.5,16.1L15.8,5.8l10.3,10.3L15.8,26.5z"/></g>'},
      {"code" : "2020", "elems" : ["2020" ], "title" : "energy.year.2020", "color": "#286FB7", "pattern" : '<g class="scaled"><path style="fill:inherit;" d="M23,19.6l-3.5-3.5L31.6,3.9l-3.5-3.5l-7.6,7.6l-4.5-7.8L11.4,8L3.8,0.4L0.3,3.9l12.2,12.2l-3.5,3.5l-8.6,8.6 l3.5,3.5l7.6-7.6l4.5,7.8l4.5-7.8l7.6,7.6l3.5-3.5L23,19.6L23,19.6z M16,12.5L16,12.5h-0.2H16z M15.9,19.6L15.9,19.6L15.9,19.6 L15.9,19.6z"/></g>'}
      */
      {
        "code": "2020",
        "patternInLegend": "false",
        "type": "bar",
        "elems": ["2020"],
        "title": "energy.year.2020",
        "color": "#193769",
        "pattern": '<g class="scaled"><polygon style="fill:inherit;" points="19.5,16 31.7,28.1 28.1,31.7 15.9,19.5 3.7,31.7 0.2,28.2 12.4,15.9 0.1,3.7 3.6,0.1 15.9,12.4 &#10;&#9;&#9;28.2,0.1 31.8,3.7 &#9;"></polygon></g>'
      }, {
        "code": "2020_target",
        "patternInLegend": "false",
        "type": "line",
        "elems": ["2020_target"],
        "title": "energy.year.2020_target",
        "color": "#F79416",
        "pattern": '<g class="scaled"><rect class="thinBar" y="0" height="10" width="40px" x="0" style="fill:inherit;stroke:inherit;stroke-width:4px"></rect></g>'
      }],
      "tooltipOrder": ["2020", "2020_target"]
    },
    "code": "energy_04_03_01",
    "defaultSelection": "EU27_2020",
    "bookmark": "https://ec.europa.eu/eurostat/databrowser/bookmark/0b03020a-8345-49fd-9623-e5c2343593a2?lang=en",
    "bookmarkText": "source_text_v2",
    "correctDataTo100": false,
    "sourceText": "bookmark_link_v2",
    "showVertLines": false,
    "UISortGroup": "checkboxSort",
    "countries2Remove": ["EU28", 'UK'],
    "showWithUndefined": true,

    /*"yAxis":{min: 64, max:86},*/
    "displaySharing": "no",
    "sharing": {
      "facebook": {
        "title": "Shedding light on energy in the EU: Share of energy from renewable sources",
        "image": "https://ec.europa.eu/eurostat/cache/infographs/energy_2022/vis/04_03_01/energy_04_03_01.png"
      }
    }
  }],
  outputFolder: "energy/04_03_01"
};

/***/ }),

/***/ "./img sync recursive ^\\.\\/.*\\.svg$":
/*!********************************!*\
  !*** ./img sync ^\.\/.*\.svg$ ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./DIGECO_03_03_01.svg": "./img/DIGECO_03_03_01.svg",
	"./DIGECO_03_03_02.svg": "./img/DIGECO_03_03_02.svg",
	"./DIGECO_03_03_03.svg": "./img/DIGECO_03_03_03.svg",
	"./EUMOVE_2_1_3_1.svg": "./img/EUMOVE_2_1_3_1.svg",
	"./EUMOVE_2_1_3_2.svg": "./img/EUMOVE_2_1_3_2.svg",
	"./EUMOVE_2_1_3_3.svg": "./img/EUMOVE_2_1_3_3.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./img sync recursive ^\\.\\/.*\\.svg$";

/***/ }),

/***/ "./img/DIGECO_03_03_01.svg":
/*!*********************************!*\
  !*** ./img/DIGECO_03_03_01.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img//DIGECO_03_03_01.svg";

/***/ }),

/***/ "./img/DIGECO_03_03_02.svg":
/*!*********************************!*\
  !*** ./img/DIGECO_03_03_02.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img//DIGECO_03_03_02.svg";

/***/ }),

/***/ "./img/DIGECO_03_03_03.svg":
/*!*********************************!*\
  !*** ./img/DIGECO_03_03_03.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img//DIGECO_03_03_03.svg";

/***/ }),

/***/ "./img/EUMOVE_2_1_3_1.svg":
/*!********************************!*\
  !*** ./img/EUMOVE_2_1_3_1.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img//EUMOVE_2_1_3_1.svg";

/***/ }),

/***/ "./img/EUMOVE_2_1_3_2.svg":
/*!********************************!*\
  !*** ./img/EUMOVE_2_1_3_2.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img//EUMOVE_2_1_3_2.svg";

/***/ }),

/***/ "./img/EUMOVE_2_1_3_3.svg":
/*!********************************!*\
  !*** ./img/EUMOVE_2_1_3_3.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img//EUMOVE_2_1_3_3.svg";

/***/ }),

/***/ "./scripts/components/social.js":
/*!**************************************!*\
  !*** ./scripts/components/social.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createSocial; });
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lang */ "./scripts/lang.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap */ "../node_modules/bootstrap/dist/js/bootstrap.js");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_1__);
var config = __webpack_require__(/*! ../../../../configs/configuration.js */ "../../configs/configuration.js");

var constants = config.configuration.data;


function createSocial() {
  'use strict'; //get container

  var socialContainer = document.getElementById('social-container'); //recreate

  socialContainer.innerHTML = '';
  var currentLocation = window.location; //always append the lang parameter if not already there

  if (currentLocation.href.indexOf('lang') === -1) {
    currentLocation = currentLocation.href + (currentLocation.href.indexOf('?') !== -1 ? "&lang=" + String.locale : "?lang=" + String.locale);
  } //check if it is embeded or not


  var isEmbed = window.top !== window.self ? true : false;
  var w = window.innerWidth;

  if (w > 1830 || w < 990 || true) {
    if (window.indicators[0].info) {
      var infomark = document.createElement('span');
      infomark.setAttribute('class', 'fa-stack');
      infomark.setAttribute('data-toggle', 'modal');
      infomark.setAttribute('data-target', '#container-modal-instructions');
      infomark.setAttribute('data-tooltip', 'tooltip');
      infomark.setAttribute('data-placement', 'bottom');
      infomark.setAttribute('title', Object(_lang__WEBPACK_IMPORTED_MODULE_0__["_"])('instructions-header'));
      var circleInfo = document.createElement('i');
      circleInfo.setAttribute('class', 'fa fa-circle fa-stack-2x');
      var iconInfo = document.createElement('i');
      iconInfo.setAttribute('class', 'fa fa-info fa-stack-1x fa-inverse');
      infomark.appendChild(circleInfo);
      infomark.appendChild(iconInfo);
      socialContainer.appendChild(infomark); //localise

      var instructions = document.getElementById('instructions');

      var instructionsText0 = Object(_lang__WEBPACK_IMPORTED_MODULE_0__["_"])(window.indicators[0].info);

      var no = new Image();
      no.src = 'img/no.gif';
      instructions.innerHTML = "";
      instructions.appendChild(document.createTextNode(instructionsText0)); //alert(instructionsText0);
      //add informations

      var informationsHeader = document.getElementById('instructions-header');
      informationsHeader.insertBefore(document.createTextNode(Object(_lang__WEBPACK_IMPORTED_MODULE_0__["_"])('instructions-header')), informationsHeader.firstChild);
    }

    var embed = document.createElement('span');
    embed.setAttribute('class', 'fa-layers fa-fw fa-2x');
    embed.setAttribute('data-toggle', 'modal');
    embed.setAttribute('data-target', '#container-modal-embed');
    embed.setAttribute('data-tooltip', 'tooltip');
    embed.setAttribute('data-placement', 'top');
    embed.setAttribute('title', Object(_lang__WEBPACK_IMPORTED_MODULE_0__["_"])('embed-icon'));
    var circleEmbed = document.createElement('i');
    circleEmbed.setAttribute('class', 'fas fa-circle');
    var iconEmbed = document.createElement('i');
    iconEmbed.setAttribute('class', 'fas fa-code fa-inverse');
    iconEmbed.setAttribute('data-fa-transform', 'shrink-7');
    embed.appendChild(circleEmbed);
    embed.appendChild(iconEmbed);
    socialContainer.appendChild(embed);
    var twitter = document.createElement('span');
    twitter.setAttribute('class', 'fa-layers fa-2x');
    twitter.setAttribute('data-tooltip', 'tooltip');
    twitter.setAttribute('data-placement', 'top');
    twitter.setAttribute('title', Object(_lang__WEBPACK_IMPORTED_MODULE_0__["_"])('twitter-icon'));
    twitter.setAttribute('id', 'twitterButton');
    var circleTwitter = document.createElement('i');
    circleTwitter.setAttribute('class', 'fas fa-circle');
    var iconTwitter = document.createElement('i');
    iconTwitter.setAttribute('class', 'fab fa-twitter fa-inverse');
    iconTwitter.setAttribute('data-fa-transform', 'shrink-7 down-.25 right-.25');
    twitter.appendChild(circleTwitter);
    twitter.appendChild(iconTwitter);
    var twitterLink = document.createElement('a');
    twitterLink.appendChild(twitter);
    var twitterHashtags = encodeURIComponent(Object(_lang__WEBPACK_IMPORTED_MODULE_0__["_"])("twitter-hashtags"));
    twitterLink.addEventListener('click', function () {
      var chapter = window.indicators[0].code.replace(/\./g, '_');

      var sharingText = Object(_lang__WEBPACK_IMPORTED_MODULE_0__["_"])("indicator".concat(chapter, ".sharing.text"));

      window.open('https://twitter.com/intent/tweet?' + "hashtags=" + encodeURIComponent(Object(_lang__WEBPACK_IMPORTED_MODULE_0__["_"])("indicator".concat(chapter, ".sharing.hashtags"))) + '&text=' + sharingText + //' pic.twitter.com/xtihHf0oZn' +            
      '&original_referer=' + currentLocation + '&tw_p=tweetbutton&' + 'url=' + currentLocation + '', '_blank', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
      return false;
    });
    socialContainer.appendChild(twitterLink);
    var fb = document.createElement('span');
    fb.setAttribute('class', 'fa-layers fa-fw fa-2x');
    fb.setAttribute('data-tooltip', 'tooltip');
    fb.setAttribute('data-placement', 'top');
    fb.setAttribute('title', Object(_lang__WEBPACK_IMPORTED_MODULE_0__["_"])('facebook-icon'));
    var circleFacebook = document.createElement('i');
    circleFacebook.setAttribute('class', 'fas fa-circle');
    var iconFacebook = document.createElement('i');
    iconFacebook.setAttribute('class', 'fab fa-facebook-f fa-inverse');
    iconFacebook.setAttribute('data-fa-transform', 'shrink-7');
    fb.appendChild(circleFacebook);
    fb.appendChild(iconFacebook);
    var fbLink = document.createElement('a');
    fbLink.appendChild(fb);
    fbLink.addEventListener('click', function () {
      var u = window.location.href;

      var t = Object(_lang__WEBPACK_IMPORTED_MODULE_0__["_"])('title');

      var url = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(u) + '&t=' + encodeURIComponent(t);
      window.open(url + '?redirect=facebook', 'sharer', 'toolbar=0,status=0,width=626,height=436');
    });
    socialContainer.appendChild(fbLink);
    var embedContainer = document.getElementById('embed');
    embedContainer.innerHTML = '<pre class="pre-scrollable"><code>&lt;iframe width="100%" height="800" src="' + currentLocation + '"&gt;&lt;/iframe&gt;</code></pre>';
    var embedHeader = document.getElementById('embed-header');
    embedHeader.innerHTML = '';
    embedHeader.insertBefore(document.createTextNode(Object(_lang__WEBPACK_IMPORTED_MODULE_0__["_"])('embed_instruction')), embedHeader.firstChild);
    var closeButton = document.createElement('button');
    closeButton.setAttribute('type', 'button');
    closeButton.setAttribute('class', 'close');
    closeButton.setAttribute('data-dismiss', 'modal');
    closeButton.setAttribute('aria-label', Object(_lang__WEBPACK_IMPORTED_MODULE_0__["_"])('close'));
    var spanButton = document.createElement('span');
    spanButton.setAttribute('aria-hidden', 'true');
    spanButton.innerHTML = '&times';
    closeButton.appendChild(spanButton);
    embedHeader.appendChild(closeButton);
  } else {
    window.indicators = window.appData[currentId];

    if (window.indicators[0].info) {
      var _infomark = document.createElement('span');

      _infomark.setAttribute('class', 'fa-stack');

      _infomark.setAttribute('data-toggle', 'modal');

      _infomark.setAttribute('data-target', '#container-modal-instructions');

      _infomark.setAttribute('data-tooltip', 'tooltip');

      _infomark.setAttribute('data-placement', 'bottom');

      _infomark.setAttribute('title', Object(_lang__WEBPACK_IMPORTED_MODULE_0__["_"])('instructions-header'));

      var _circleInfo = document.createElement('i');

      _circleInfo.setAttribute('class', 'fa fa-circle fa-stack-2x');

      var _iconInfo = document.createElement('i');

      _iconInfo.setAttribute('class', 'fa fa-info fa-stack-1x fa-inverse');

      _infomark.appendChild(_circleInfo);

      _infomark.appendChild(_iconInfo);

      socialContainer.appendChild(_infomark); //localise

      var _instructions = document.getElementById('instructions');

      var _instructionsText = Object(_lang__WEBPACK_IMPORTED_MODULE_0__["_"])(window.indicators[0].info);

      var _no = new Image();

      _no.src = 'img/no.gif';
      _instructions.innerHTML = "";

      _instructions.appendChild(document.createTextNode(_instructionsText)); //alert(instructionsText0);
      //add informations


      var _informationsHeader = document.getElementById('instructions-header');

      _informationsHeader.insertBefore(document.createTextNode(Object(_lang__WEBPACK_IMPORTED_MODULE_0__["_"])('instructions-header')), _informationsHeader.firstChild);
    }

    var _iconFacebook = document.createElement('i');

    _iconFacebook.setAttribute('class', 'fab fa-facebook-f fa-3x fa-fw');

    _iconFacebook.setAttribute('style', 'margin-right: 5px;');

    var textFacebook = document.createTextNode(Object(_lang__WEBPACK_IMPORTED_MODULE_0__["_"])('facebook-icon'));

    var _fbLink = document.createElement('a');

    _fbLink.setAttribute('class', 'list-group-item');

    _fbLink.appendChild(_iconFacebook);

    _fbLink.appendChild(textFacebook);

    _fbLink.addEventListener('click', function () {
      var u = window.location.href;

      var t = Object(_lang__WEBPACK_IMPORTED_MODULE_0__["_"])('title');

      var url = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(u) + '&t=' + encodeURIComponent(t);
      window.open(url + '?redirect=facebook', 'sharer', 'toolbar=0,status=0,width=626,height=436');
    });

    var _iconTwitter = document.createElement('i');

    _iconTwitter.setAttribute('class', 'fab fa-twitter fa-3x fa-fw');

    _iconTwitter.setAttribute('style', 'margin-right: 5px;');

    var textTwitter = document.createTextNode(Object(_lang__WEBPACK_IMPORTED_MODULE_0__["_"])('twitter-icon'));

    var _twitterLink = document.createElement('a');

    _twitterLink.setAttribute('class', 'list-group-item');

    _twitterLink.appendChild(_iconTwitter);

    _twitterLink.appendChild(textTwitter);

    _twitterLink.setAttribute('id', 'twitterButton');

    _twitterLink.addEventListener('click', function () {
      var chapter = window.indicators[0].code.replace(/\./g, '_');

      var sharingText = Object(_lang__WEBPACK_IMPORTED_MODULE_0__["_"])("indicator".concat(chapter, ".sharing.text"));

      window.open('https://twitter.com/intent/tweet?' + "hashtags=" + encodeURIComponent(Object(_lang__WEBPACK_IMPORTED_MODULE_0__["_"])("indicator".concat(chapter, ".sharing.hashtags"))) + '&text=' + sharingText + //' pic.twitter.com/xtihHf0oZn' +            
      '&original_referer=' + currentLocation + '&tw_p=tweetbutton&' + 'url=' + currentLocation + '', '_blank', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
      return false;
    });

    var _embedContainer = document.createElement('pre');

    _embedContainer.setAttribute('class', 'pre-scrollable');

    _embedContainer.innerHTML = '<pre class="pre-scrollable"><code>&lt;iframe width="100%" height="800" src="' + currentLocation + '"&gt;&lt;/iframe&gt;</code></pre>';

    var _embedHeader = document.createElement('h6');

    _embedHeader.insertBefore(document.createTextNode(Object(_lang__WEBPACK_IMPORTED_MODULE_0__["_"])('embed_instruction_2')), _embedHeader.firstChild);

    var embedSpace = document.createElement('br');
    var share = document.createElement('span');
    share.setAttribute('class', 'fa-layers fa-fw fa-2x');
    share.setAttribute('data-tooltip', 'tooltip');
    share.setAttribute('data-placement', 'top');
    share.setAttribute('title', Object(_lang__WEBPACK_IMPORTED_MODULE_0__["_"])('share-icon'));
    share.setAttribute('data-toggle', 'modal');
    share.setAttribute('data-target', '#container-modal-share');
    var circleShare = document.createElement('i');
    circleShare.setAttribute('class', 'fas fa-circle');
    var iconShare = document.createElement('i');
    iconShare.setAttribute('class', 'fas fa-share-alt fa-inverse');
    iconShare.setAttribute('data-fa-transform', 'shrink-7');
    share.appendChild(circleShare);
    share.appendChild(iconShare);
    socialContainer.innerHTML = '';
    socialContainer.appendChild(share);
    var shareHeader = document.getElementById('share-header');
    shareHeader.innerHTML = '';

    var _closeButton = document.createElement('button');

    _closeButton.setAttribute('type', 'button');

    _closeButton.setAttribute('class', 'close');

    _closeButton.setAttribute('data-dismiss', 'modal');

    _closeButton.setAttribute('aria-label', Object(_lang__WEBPACK_IMPORTED_MODULE_0__["_"])('close'));

    var _spanButton = document.createElement('span');

    _spanButton.setAttribute('aria-hidden', 'true');

    _spanButton.innerHTML = '&times';

    _closeButton.appendChild(_spanButton);

    shareHeader.insertBefore(document.createTextNode(Object(_lang__WEBPACK_IMPORTED_MODULE_0__["_"])('share-header')), shareHeader.firstChild);
    shareHeader.appendChild(_closeButton);
    var shareList = document.getElementById('share-list');
    shareList.innerHTML = '';
    shareList.appendChild(_fbLink);
    shareList.appendChild(_twitterLink);
    shareList.appendChild(embedSpace);
    shareList.appendChild(embedSpace);
    shareList.appendChild(_embedHeader);
    shareList.appendChild(_embedContainer);
  }

  $('[data-tooltip="tooltip"]').tooltip();
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./scripts/components/ui-component.js":
/*!********************************************!*\
  !*** ./scripts/components/ui-component.js ***!
  \********************************************/
/*! exports provided: createIndSelectionCheckBoxes, createIndSelectionBigIcons, createOnClick, createIndSelectionSelectbox, buildCustomList, checkSortIcons, applySort, selectedSortProperty, selectedSortDirection, currentSorting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($, jQuery) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createIndSelectionCheckBoxes", function() { return createIndSelectionCheckBoxes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createIndSelectionBigIcons", function() { return createIndSelectionBigIcons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createOnClick", function() { return createOnClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createIndSelectionSelectbox", function() { return createIndSelectionSelectbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildCustomList", function() { return buildCustomList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkSortIcons", function() { return checkSortIcons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applySort", function() { return applySort; });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../storage */ "./scripts/storage.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storage__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dataservice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dataservice */ "./scripts/dataservice.js");
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lang */ "./scripts/lang.js");
/* harmony import */ var _localizeservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../localizeservice */ "./scripts/localizeservice.js");
/* harmony import */ var d3_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! d3-request */ "../node_modules/d3-request/index.js");
/* harmony import */ var d3_selection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! d3-selection */ "../node_modules/d3-selection/src/index.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../main */ "./scripts/main.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectedSortProperty", function() { return _main__WEBPACK_IMPORTED_MODULE_6__["selectedSortProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectedSortDirection", function() { return _main__WEBPACK_IMPORTED_MODULE_6__["selectedSortDirection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "currentSorting", function() { return _main__WEBPACK_IMPORTED_MODULE_6__["currentSorting"]; });

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }









var config = __webpack_require__(/*! ../../../../configs/configuration.js */ "../../configs/configuration.js");

var constants = config.configuration.data;
var indicators;
/* 
UI To change indicator : 
CHECKBOXES
*/

function createIndSelectionCheckBoxes() {
  indicators = window.indicators;
  $("#chartInd").html("<div id=\"sortContainer\"></div>");
  $("#sortContainer").empty();

  if (indicators.length > 1) {
    indicators = window.indicators;

    var _iterator = _createForOfIteratorHelper(indicators.entries()),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _step$value = _slicedToArray(_step.value, 2),
            index = _step$value[0],
            entry = _step$value[1];

        var chapter = entry.code.replace(/\./g, '_');
        var hoverTitle = "indicator".concat(chapter, ".hoverTitle");
        var code = index;

        var title = Object(_lang__WEBPACK_IMPORTED_MODULE_2__["_"])(hoverTitle);

        var checked = index == 0;

        if (checked) {
          $("#sortContainer").append('<div class="checkbox checkbox-success" data-checked="true" id="checkbox' + index + '">' + _main__WEBPACK_IMPORTED_MODULE_6__["CHECKED_FA_HTML"] + '<label for="checkbox' + code + '">' + title + '</label></div>');
        } else {
          $("#sortContainer").append('<div class="checkbox checkbox-success" id="checkbox' + index + '">' + _main__WEBPACK_IMPORTED_MODULE_6__["UNCHECKED_FA_HTML"] + '<label for="checkbox' + code + '">' + title + '</label></div>');
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    handleIndCheckbox();
  }
}

function handleIndCheckbox() {
  $(".checkbox").click(function () {
    if ($(this).attr("data-checked") === "true") {
      return false;
    }

    ; // need to change the div content of each.

    updateCheckboxes(this); // get category and load the data

    var category = $(this).attr("id").replace('checkbox', '');
    Object(_main__WEBPACK_IMPORTED_MODULE_6__["indicatorClick"])(category);
  });
}

function updateCheckboxes(activeElement) {
  // there can only be one active element:
  $(".checkbox").not(activeElement).attr("data-checked", "false");
  $(activeElement).attr("data-checked", "true"); // change all checkboxes to have content as if not checked. 

  $(".checkbox").find('span').remove();
  $(".checkbox").not(activeElement).prepend(_main__WEBPACK_IMPORTED_MODULE_6__["UNCHECKED_FA_HTML"]); // find the one that is checked, and set it's content to checked.

  $(activeElement).prepend(_main__WEBPACK_IMPORTED_MODULE_6__["CHECKED_FA_HTML"]);
}
/* 
UI To change indicator : 
BIG SQUARE ICONS
*/


function createIndSelectionBigIcons() {
  indicators = window.indicators;

  if (indicators.length == 1) {
    return;
  }

  'use strict'; // get container


  var iconsContainer = document.getElementById('icons-container'); // remove visible tooltips, after clearing innerHTML no longer accessible

  $('[data-tooltip="tooltip"]').tooltip('dispose'); // recreate

  iconsContainer.innerHTML = ''; // add icons dynamically based on chapter information

  var _iterator2 = _createForOfIteratorHelper(indicators.entries()),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _step2$value = _slicedToArray(_step2.value, 2),
          index = _step2$value[0],
          entry = _step2$value[1];

      var chapter = entry.code.replace(/\./g, '_');

      var iconSrc = __webpack_require__("./img sync recursive ^\\.\\/.*\\.svg$")("./".concat(chapter, ".svg")); // d3.xml(iconSrc, function (xml) {
      // xml(iconSrc, function (xml) {
      //   let icon = document.importNode(xml.documentElement, true)


      var icon = new window.Image();
      icon.src = iconSrc;
      icon.setAttribute('style', 'width: 55px; height: 55px;'); // d3.select('div#icons-container')
      // select('div#icons-container')
      //   .each(function () {

      var div = document.createElement('button');

      if (index === window.categorySelected) {
        div.setAttribute('class', 'btn btn-default btn-xl icon-active');
        div.setAttribute('style', "background-color: ".concat(constants.iconColorSelected));
      } else {
        div.setAttribute('class', 'btn btn-default btn-xl icon-nonactive');
        div.setAttribute('style', "background-color: ".concat(constants.iconColorNotSelected));
        $(div).hover(function () {
          $(this).css('background-color', constants.iconColorSelected);
        }, function () {
          $(this).css('background-color', constants.iconColorNotSelected);
        });
        div.onclick = createOnClick(index);
      }

      var hoverTitle = "indicator".concat(chapter, ".hoverTitle");
      div.setAttribute('title', Object(_lang__WEBPACK_IMPORTED_MODULE_2__["_"])(hoverTitle));
      div.setAttribute('data-tooltip', 'tooltip');
      div.setAttribute('data-placement', 'top');
      div.setAttribute('container', 'body');
      div.setAttribute('role', 'tooltip');
      div.setAttribute('id', chapter);
      div.appendChild(icon);
      iconsContainer.appendChild(div);
    } // activate all tooltips

  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  $('[data-tooltip="tooltip"]').tooltip({
    container: '#dummy'
  });
}
function createOnClick(category) {
  return function () {
    $.when(Object(_dataservice__WEBPACK_IMPORTED_MODULE_1__["default"])(category)).done(function () {
      window.categorySelected = category;
      var data = _storage__WEBPACK_IMPORTED_MODULE_0__["storage"].processedData[category];
      createIndSelectionBigIcons(); // localise

      Object(_localizeservice__WEBPACK_IMPORTED_MODULE_3__["localiseInterface"])(category);
      Object(_main__WEBPACK_IMPORTED_MODULE_6__["processDataForCategory"])(category); //drawLinechart(data, 'linechart', category)
    });
  };
}
/* 
UI To change indicator : 
SELECTBOX
*/

function createIndSelectionSelectbox() {
  $("#selectIndi").show();
  $("#selectIndi").empty();
  $("#selectIndi").unbind('click');
  var indicators = window.indicators;
  var iterator = 0;

  var _iterator3 = _createForOfIteratorHelper(indicators.entries()),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var _step3$value = _slicedToArray(_step3.value, 2),
          index = _step3$value[0],
          entry = _step3$value[1];

      var chapter = entry.code.replace(/\./g, '_');
      var hoverTitle = "indicator".concat(chapter, ".hoverTitle");
      $("#selectIndi").append('<option value="' + iterator + '">' + Object(_lang__WEBPACK_IMPORTED_MODULE_2__["_"])(hoverTitle) + '</option>');
      iterator++;
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  $('#selectIndi').selectpicker();
  $("#selectIndi").change(function () {
    var category = $('#selectIndi option:selected').val();
    Object(_main__WEBPACK_IMPORTED_MODULE_6__["indicatorClick"])(category);
  });
}
function buildCustomList() {
  var indicators = window.indicators;
  var paramIndicator = indicators[_main__WEBPACK_IMPORTED_MODULE_6__["currentCategory"]];
  var params = paramIndicator.params;

  var _loop = function _loop() {
    var valuesArr = params[key];

    if (valuesArr["type"] == "list") {
      sel = $('<select>').attr("id", valuesArr["listId"]).attr("style", "display:none").appendTo(valuesArr["conteiner"]);
      $(valuesArr["items"]).each(function () {
        sel.append($("<option>").attr('value', this.code).text(Object(_lang__WEBPACK_IMPORTED_MODULE_2__["_"])(this.title)));
      });
      sel.val(Object(_lang__WEBPACK_IMPORTED_MODULE_2__["getParameterValue"])(valuesArr.urlParam));
      sel.on("change", function () {
        var currentCode = this.value;
        var itemObj = valuesArr["items"].find(function (el) {
          return el.code === currentCode;
        });
        var countries2Ignore = itemObj.exculdeCountry;
        Object(_main__WEBPACK_IMPORTED_MODULE_6__["changeParams"])(key, this.value);
        delete _storage__WEBPACK_IMPORTED_MODULE_0__["storage"].processedData[window.categorySelected];
        jQuery.when(Object(_dataservice__WEBPACK_IMPORTED_MODULE_1__["default"])(window.categorySelected)).done(function () {
          Object(_main__WEBPACK_IMPORTED_MODULE_6__["processData"])(window.categorySelected, _main__WEBPACK_IMPORTED_MODULE_6__["currentSorting"], countries2Ignore);
        });
      });
      $("#" + valuesArr["listId"]).selectpicker(Object(_lang__WEBPACK_IMPORTED_MODULE_2__["getParameterValue"])(valuesArr.visibleParam) == "false" ? "hide" : "show");

      if (Object(_lang__WEBPACK_IMPORTED_MODULE_2__["getParameterValue"])(valuesArr.visibleParam) == "false") {//$("#dropdown-container").addClass("disabled");
      }
    }
  };

  for (var key in params) {
    var sel;

    _loop();
  }
}
/* Sorting */

function checkSortIcons(selectedSortProperty, selectedSortDirection) {
  $('.sort').off('click').on('click', applySort); // check, which icons to display for the sorts!

  $('.sort i').removeClass('fa-sort').removeClass('fa-sort-down').removeClass('fa-sort-up');
  $('#sort_' + selectedSortProperty + ' i').addClass('fa-sort-down');
  $('#sort_' + selectedSortProperty + ' i').attr('title', selectedSortDirection === 'desc' ? Object(_lang__WEBPACK_IMPORTED_MODULE_2__["_"])('sort.hover.ascending') : Object(_lang__WEBPACK_IMPORTED_MODULE_2__["_"])('sort.hover.descending'));
  $('.sort i').each(function (idx, element) {
    if (!$(element).hasClass('fa-sort-down') && !$(element).hasClass('fa-sort-up')) {
      $(element).addClass('fa-sort');
    }
  });
}
function applySort(event) {
  var indicators = window.indicators;
  event.stopPropagation();
  event.preventDefault();
  var e = event.currentTarget.id;
  var g = _main__WEBPACK_IMPORTED_MODULE_6__["selectedSortDirection"];
  var p = _main__WEBPACK_IMPORTED_MODULE_6__["selectedSortProperty"];
  e = e.substr(5, e.length - 1);
  g = p === e ? "desc" === g ? "asc" : "desc" : (p = e, "desc");
  var grouping = indicators[_main__WEBPACK_IMPORTED_MODULE_6__["currentCategory"]].grouping;
  var index = _main__WEBPACK_IMPORTED_MODULE_6__["groups"].indexOf(e);
  Object(_main__WEBPACK_IMPORTED_MODULE_6__["setcurrentSortingCS"])(grouping.groups[index].code);
  Object(_main__WEBPACK_IMPORTED_MODULE_6__["selectedSortPropertyCS"])(e);
  Object(_main__WEBPACK_IMPORTED_MODULE_6__["selectedSortDirectionCS"])(g);
  Object(_main__WEBPACK_IMPORTED_MODULE_6__["processData"])(window.categorySelected, _main__WEBPACK_IMPORTED_MODULE_6__["currentSorting"], g);
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./scripts/components/utils.js":
/*!*************************************!*\
  !*** ./scripts/components/utils.js ***!
  \*************************************/
/*! exports provided: isIE, inIframe, isMobileDevice, nbOfDavaAvailableForCountries, roundValue, compare, removeParam, isMobile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIE", function() { return isIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inIframe", function() { return inIframe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobileDevice", function() { return isMobileDevice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nbOfDavaAvailableForCountries", function() { return nbOfDavaAvailableForCountries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roundValue", function() { return roundValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compare", function() { return compare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeParam", function() { return removeParam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return isMobile; });
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../main */ "./scripts/main.js");

function isIE(userAgent) {
  userAgent = userAgent || navigator.userAgent;
  return userAgent.indexOf("MSIE ") > -1 || userAgent.indexOf("Trident/") > -1 || userAgent.indexOf("Edge/") > -1;
}
function inIframe() {
  console.log("disregardSimpleMode  = " + this.currentIndicator.disregardSimpleMode); //return true;

  if (_main__WEBPACK_IMPORTED_MODULE_0__["currentCategory"] != undefined && window.indicators && window.indicators[_main__WEBPACK_IMPORTED_MODULE_0__["currentCategory"]].hideTopBarForIframe == true) {
    return false;
  } //return true;


  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
}
function isMobileDevice() {
  'use strict';

  return typeof window.orientation !== 'undefined' || navigator.userAgent.indexOf('IEMobile') !== -1;
}
function nbOfDavaAvailableForCountries(data, countries) {
  var countriesMSWithData = 0;
  $(countries).each(function (key, value) {
    var arrayResults = new Array();
    var result = $.map(data, function (valueData, index) {
      if (valueData.Geo == value.toUpperCase()) {
        countriesMSWithData++;
      }
    });
  });
  return countriesMSWithData;
}
function roundValue(value) {
  var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return value ? parseFloat(value).toFixed(precision) : "0";
}
function compare(key) {
  return function (a, b) {
    var valueA = parseFloat(a[key]);
    var valueB = parseFloat(b[key]);
    var ascending = false;

    if (valueA === null) {
      return 1;
    } else if (valueB === null) {
      return -1;
    } else if (valueA === valueB) {
      return 0;
    } else if (ascending) {
      return valueA < valueB ? -1 : 1;
    } else if (!ascending) {
      return valueA < valueB ? 1 : -1;
    }

    if (valueA == undefined || valueB == undefined) {
      return 1;
    }

    var comparison = 0;

    if (valueA > valueB) {
      comparison = 1;
    } else if (valueA < valueB) {
      comparison = -1;
    }

    return comparison;
  };
}
function removeParam(key, sourceURL) {
  var rtn = sourceURL.split("?")[0],
      param,
      params_arr = [],
      queryString = sourceURL.indexOf("?") !== -1 ? sourceURL.split("?")[1] : "";

  if (queryString !== "") {
    params_arr = queryString.split("&");

    for (var i = params_arr.length - 1; i >= 0; i -= 1) {
      param = params_arr[i].split("=")[0];

      if (param === key) {
        params_arr.splice(i, 1);
      }
    }

    rtn = rtn + "?" + params_arr.join("&");
  }

  return rtn;
}
function isMobile() {
  var check = false;

  (function (a) {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);

  return check;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./scripts/dataservice.js":
/*!********************************!*\
  !*** ./scripts/dataservice.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(jQuery, $) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return requestData; });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./scripts/storage.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storage__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsonstat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonstat */ "../node_modules/jsonstat/module.js");
/* harmony import */ var jsonstat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonstat__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _extracts_extract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extracts/extract */ "./scripts/extracts/extract.js");
/* harmony import */ var _components_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/utils */ "./scripts/components/utils.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/*global JSONstat:false */
var config = __webpack_require__(/*! ../../../configs/configuration.js */ "../../configs/configuration.js");

var constants = config.configuration.data;




var indicators;

function queryService(category) {
  indicators = window.indicators;
  'use strict';

  var environment = _storage__WEBPACK_IMPORTED_MODULE_0__["storage"].NODE_ENV; //create the countries

  var countries = constants.countries;
  var countries2remove = indicators[category].countries2Remove;

  var _iterator = _createForOfIteratorHelper(countries2remove),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var country2remove = _step.value;
      var index = countries.indexOf(country2remove);

      if (index > -1) {
        countries.splice(index, 1);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  var countriesUrl = '';

  var _iterator2 = _createForOfIteratorHelper(countries),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var country = _step2.value;
      countriesUrl += "&geo=".concat(country);
    } //retrieve correct webservice endpoint depending on environment

  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  var jsonURL = constants["url_".concat(environment)]; //create time

  var timeIndicators = indicators[category].periods;
  var timeUrl = '';

  var _iterator3 = _createForOfIteratorHelper(timeIndicators),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var time = _step3.value;
      timeUrl += "&time=".concat(time);
    } //create parameters which need to be added to request

  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  var paramUrl = '?';
  var paramIndicator = indicators[category];
  var params = paramIndicator.params;

  for (var key in params) {
    var valuesArr = params[key];

    if (valuesArr["selected"]) {
      valuesArr = [valuesArr.selected];
      /*valuesArr = $.map( valuesArr.items, function( val, i ) {
          return val.code;
        });*/
    }

    var _iterator4 = _createForOfIteratorHelper(valuesArr),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var value = _step4.value;
        paramUrl += "".concat(key, "=").concat(value, "&");
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }
  }

  paramUrl = paramUrl.slice(0, paramUrl.length - 1); //assemble URL

  var url; // = jsonURL + constants.lang + '/' + constants.dataUrls[category] + countriesUrl + timeUrl;

  if (environment !== 'local' && environment !== 'dev_serve') {
    url = jsonURL + indicators[category].table + paramUrl + countriesUrl + timeUrl; //url = jsonURL + constants.lang + '/'+"sbs_sc_sca_r2?nace_r2=B-N_S95_X_K&precision=1&size_emp=0-9&size_emp=10-19&size_emp=20-49&size_emp=50-249&size_emp=GE250&size_emp=TOTAL&indic_sb=V11110";

    if (paramUrl.includes("precision")) {
      url = Object(_components_utils__WEBPACK_IMPORTED_MODULE_3__["removeParam"])("precision", url);
      url += constants["url_settings"];
    } else {}
  } else {
    var pos = constants.dataUrls[category].indexOf('?');
    var datasetName;

    if (pos !== -1) {
      datasetName = constants.dataUrls[category].substr(0, pos);
    } else {
      datasetName = constants.dataUrls[category];
    }

    url = jsonURL + datasetName + '.json';
  }

  return jQuery.ajax({
    type: 'GET',
    url: url,
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    crossDomain: true,
    cache: true,
    timeout: 30000,
    processData: false,
    data: ''
  }).done(function (data) {
    _storage__WEBPACK_IMPORTED_MODULE_0__["storage"].rawData[category] = data;
  }).fail(function (jqXHR, textStatus, errorThrown) {
    console.log("error WS");
    jQuery('#graph-container').empty();
    jQuery('#graph-container').append('<div style=\'text-align: center; vertical-align: middle;\'>There was an error retrieving data.<br />Please try again in a few minutes.</div>');
    jQuery('#graph-container').text('There was an error retrieving data. Please try again in a few minutes.');
    jQuery('#loader').hide();
  });
}

function assembleData(category) {
  'use strict'; // let paramObj = constants.paramObj[category],

  var paramIndicator = indicators[category];
  var params = paramIndicator.params;
  var paramObj = {},
      data = [],
      countries = constants.countries;
  var countries2remove = indicators[category].countries2Remove;

  var _iterator5 = _createForOfIteratorHelper(countries2remove),
      _step5;

  try {
    for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
      var country2remove = _step5.value;
      var index = countries.indexOf(country2remove);

      if (index > -1) {
        countries.splice(index, 1);
      }
    }
  } catch (err) {
    _iterator5.e(err);
  } finally {
    _iterator5.f();
  }

  var jsonStat = jsonstat__WEBPACK_IMPORTED_MODULE_1___default()(_storage__WEBPACK_IMPORTED_MODULE_0__["storage"].rawData[category]);
  var jsonData = jsonStat.Dataset(0); //fill paramObj

  for (var key in params) {
    var valuesArr = params[key];

    if (valuesArr["selected"]) {
      valuesArr = [valuesArr.selected];
    }

    var _iterator6 = _createForOfIteratorHelper(valuesArr),
        _step6;

    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var value = _step6.value;
        paramObj[key] = value;
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
  }

  paramObj.dataset = paramIndicator.table;
  data = Object(_extracts_extract__WEBPACK_IMPORTED_MODULE_2__["default"])(countries, jsonData, paramObj, category, paramIndicator.params.size_emp);
  return data;
}

function requestData(category) {
  'use strict';

  if (_storage__WEBPACK_IMPORTED_MODULE_0__["storage"].processedData[category]) {
    return _storage__WEBPACK_IMPORTED_MODULE_0__["storage"].processedData[category];
  } else {
    // Array of requests
    var requests = [];
    requests.push(queryService(category));
    var defer = $.when.apply($, requests);
    return defer.done(function () {
      // This is executed only after all ajax request have been completed
      // for (const [index, para] of Array.from(constants.paramObj).entries()) {
      //     storage.processedData[index] = assembleData(index);
      // }
      _storage__WEBPACK_IMPORTED_MODULE_0__["storage"].processedData[category] = assembleData(category);
    });
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./scripts/extracts/extract.js":
/*!*************************************!*\
  !*** ./scripts/extracts/extract.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return extractData; });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function extractData(countries, ds, paramObj, category, sizes) {
  var config = __webpack_require__(/*! ../../../../configs/configuration.js */ "../../configs/configuration.js");

  var constants = config.configuration.data;
  'use strict';

  var collection = {};
  var data = [];
  var timeIndicators = indicators[category].periods;
  var grouping = indicators[category].grouping;
  var arrayNoData = []; // console.log(grouping);

  var value = 0;

  var _iterator = _createForOfIteratorHelper(countries),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var country = _step.value;
      // collection[country] = country;
      paramObj.geo = country;
      var times = [];

      var _iterator4 = _createForOfIteratorHelper(timeIndicators),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var time = _step4.value;
          var value = {};
          var total = 0;
          var calculatedTotal = 0;
          data = [];
          var hasUndefined = false;

          if (grouping.process == "CALCULATEDTOTAL%") {
            for (var groupIndex in grouping.groups) {
              var groupCode = grouping.groups[groupIndex].code;
              value.year = time;
              value.Geo = country;
              var _paramsType2 = grouping.groups[groupIndex].elems;
              var sum = 0;

              for (var paramItem in _paramsType2) {
                paramObj.time = time;
                paramObj[grouping.paramName] = _paramsType2[paramItem];
                var _valueTmp = ds.Data(paramObj).value;

                if (_valueTmp != undefined) {
                  calculatedTotal += parseFloat(_valueTmp);
                }
              }
            }
          }

          for (var groupIndex in grouping.groups) {
            var groupCode = grouping.groups[groupIndex].code;
            value.year = time;
            value.Geo = country;
            var _paramsType3 = grouping.groups[groupIndex].elems;
            var sum = 0;

            for (var paramItem in _paramsType3) {
              paramObj.time = time;
              paramObj[grouping.paramName] = _paramsType3[paramItem];
              var _valueTmp2 = ds.Data(paramObj).value; //console.log("value country : "+country+"  :  "+valueTmp);

              if (_valueTmp2 == undefined) {
                hasUndefined = true;
              } else {
                sum += parseFloat(_valueTmp2);
              }
              /*
              console.log("***************");
              console.log("Country = "+country+"   Param = "+grouping.paramName+" value = "+paramsType[paramItem]+"   value = "+valueTmp+"   Sum  = "+sum);
              */

            }

            if (grouping.process == "TOTAL%" || grouping.process == "CALCULATEDTOTAL%") {
              //console.log("%total");
              var valueTot;

              if (grouping.process == "CALCULATEDTOTAL%") {
                valueTot = calculatedTotal;
              } else {
                paramObj[grouping.paramName] = "TOTAL";
                valueTot = ds.Data(paramObj).value;
              }

              if (grouping.groups[groupIndex].process) {
                if (grouping.groups[groupIndex].process == "TOTAL-") {
                  sum = (valueTot - sum) / valueTot * 100;
                }
              } else {
                sum = sum / valueTot * 100;
              }
              /*
              console.log("Process = "+grouping.process);
              console.log("Sum = "+sum);
              console.log("Total = "+valueTot); 
              console.log("Calculated Total = "+calculatedTotal); 
              console.log("Sum % = "+sum);
              */

            }

            if (indicators[category].showWithUndefined) {
              //console.log("show With undefined");
              value[groupCode] = sum;
            } else {
              value[groupCode] = hasUndefined ? undefined : sum;
            } //value[groupCode] = sum;


            total += sum;
            value.Total = total;
            data = value;
          }

          if (hasUndefined) {// console.log ("Undefined = "+country);
            // console.log(data);
          }

          if (hasUndefined == false || indicators[category].showWithUndefined) {
            //console.log("add data "+ country);
            collection[country] = data;
          } else {
            arrayNoData.push(country);
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      data = [];
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  if (indicators[category].calculateEU) {
    var calculatedEU = {};
    var value = {};
    var total = 0;

    var _iterator2 = _createForOfIteratorHelper(indicators[category].calculateEU.countries),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var country = _step2.value;
        // collection[country] = country;
        paramObj.geo = country;
        var times = [];

        var _iterator3 = _createForOfIteratorHelper(timeIndicators),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var time = _step3.value;
            var sum;
            var hasUndefined = false;

            for (var groupIndex in grouping.groups) {
              var groupCode = grouping.groups[groupIndex].code;
              value.year = time;
              value.Geo = country;
              var _paramsType = grouping.groups[groupIndex].elems;
              var sum = 0;

              for (var paramItem in _paramsType) {
                paramObj.time = time;
                paramObj[grouping.paramName] = _paramsType[paramItem];
                var valueTmp = ds.Data(paramObj).value;

                if (valueTmp == undefined) {
                  hasUndefined = true;
                } else {
                  sum += parseFloat(valueTmp);
                }
              }

              data[groupCode] = data[groupCode] == undefined ? sum : data[groupCode] + sum; //console.log("********* "+country+"  : "+sum+"   *******  Total : "+total+"  *****");
              //console.log(data);
            }

            paramObj[grouping.paramName] = "TOTAL";
            var totalTmp = ds.Data(paramObj).value;
            total += totalTmp;
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    data.Geo = indicators[category].calculateEU.code;
    data.Total = total; //console.log("After loop");
    //console.log(data);

    calculatedEU = data;

    if (grouping.process == "TOTAL%") {
      var paramsType = grouping.groups[0].elems;

      for (var key in data) {
        if (key != "year" && key != "Geo" && key != "Total") {
          data[key] = data[key] / data["Total"] * 100;
        }
      }

      data["Total"] = 100;
    }

    var collectionTmp = collection;
    var code = indicators[category].calculateEU.code;
    collection = {
      code: data
    };

    for (var strKey in collectionTmp) {
      collection[strKey] = collectionTmp[strKey];
    } //console.log(collection);
    //console.log(data);
    //collection.push(...collectionTmp);
    //collection["EU28"] = data; 

  } //console.log("Data processed")
  //console.log(collection);


  collection.time = timeIndicators;

  if (window.parent !== window && window.parent.disableCountries) {
    window.parent.disableCountries(arrayNoData);
  }

  return collection;
}

/***/ }),

/***/ "./scripts/lang.js":
/*!*************************!*\
  !*** ./scripts/lang.js ***!
  \*************************/
/*! exports provided: _, localizeHTMLTag, getParameterValue, translateAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_", function() { return _; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localizeHTMLTag", function() { return localizeHTMLTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParameterValue", function() { return getParameterValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translateAll", function() { return translateAll; });
/* harmony import */ var l10n_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! l10n.js */ "../node_modules/l10n.js/l10n.js");
/* harmony import */ var l10n_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(l10n_js__WEBPACK_IMPORTED_MODULE_0__);


function _(string) {
  'use strict';

  return string.toLocaleString();
}

function localizeHTMLTag(tagId, useLabel) {
  'use strict';

  var tag = document.getElementById(tagId);

  if (tag && tag.src) {
    tag.title = _(tag.title);
  } else {
    if (!useLabel) {
      tag.innerHTML = _(tag.innerHTML);
    } else {
      tag.innerHTML = _(useLabel);
    }
  }
}
/* To replace the structure <span translate="XX"></span> by the corresponding translation of the text with ID=XX */


function translateAll() {
  var translationAttribute = "translate";
  $('span[' + translationAttribute + ']').each(function (idx) {
    // get the value of the attribute.
    var translateId = $(this).attr(translationAttribute);

    var translatedValue = _(translateId);

    if (translatedValue === undefined) {
      console.log("Translation for " + translateId + " not found.");
    } // now replace the span's text with the translation:


    $(this).html(translatedValue);
  });
}

function getParameterValue(parameter) {
  'use strict';

  parameter = parameter.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
  var regexS = "[\\?&]" + parameter + "=([^&#]*)";
  var regex = new RegExp(regexS);
  var results = regex.exec(window.location.href);

  if (results === null) {
    return '';
  } else {
    return results[1];
  }
}


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./scripts/localizeservice.js":
/*!************************************!*\
  !*** ./scripts/localizeservice.js ***!
  \************************************/
/*! exports provided: setupLocalisation, localiseInterface */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupLocalisation", function() { return setupLocalisation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localiseInterface", function() { return localiseInterface; });
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lang */ "./scripts/lang.js");
var config = __webpack_require__(/*! ../../../configs/configuration.js */ "../../configs/configuration.js");

var constants = config.configuration.data;
var indicators;


function setupLocalisation() {
  'use strict';

  String.locale = window.defaultLanguage;
  String.toLocaleString(window.availableLanguages);
  var lang = Object(_lang__WEBPACK_IMPORTED_MODULE_0__["getParameterValue"])('lang');

  if (lang !== '' && lang !== "") {
    for (var value in window.availableLanguages) {
      if (value === lang) {
        String.locale = lang;
      }
    }
  }
}

function localise() {
  var category = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  indicators = window.indicators;
  document.title = Object(_lang__WEBPACK_IMPORTED_MODULE_0__["_"])("document.title");
  var indicator = indicators[category];
  var chapter = indicator.code.replace(/\./g, '_');
  var mainTitleString = "indicator".concat(chapter, ".title");
  var mainTitle = document.getElementById('chart_title');
  mainTitle.innerHTML = Object(_lang__WEBPACK_IMPORTED_MODULE_0__["_"])(mainTitleString);
  document.title = Object(_lang__WEBPACK_IMPORTED_MODULE_0__["_"])(mainTitleString).split(",")[0];
  var subTitleString = "indicator".concat(chapter, ".subTitle");
  var subTitle = document.getElementById('chart_subtitle');
  subTitle.innerHTML = Object(_lang__WEBPACK_IMPORTED_MODULE_0__["_"])(subTitleString);
  var footnoteString = "indicator".concat(chapter, ".footnote");
  var footnote = document.getElementById('footnote');
  footnote.innerHTML = Object(_lang__WEBPACK_IMPORTED_MODULE_0__["_"])(footnoteString); //bookmark 

  var link = Object(_lang__WEBPACK_IMPORTED_MODULE_0__["_"])(indicator.bookmarkText);

  var areaLink = document.createElement('a');
  var linkText = typeof indicator.sourceText == "function" ? indicator.sourceText() : Object(_lang__WEBPACK_IMPORTED_MODULE_0__["_"])(indicator.sourceText);
  var areaLinkText = document.createTextNode(linkText);
  var areaLinkLink = 'bookmarklink';
  areaLink.setAttribute('target', '_blank');
  areaLink.setAttribute('href', indicator.bookmark);
  areaLink.setAttribute('class', 'infolink');
  areaLink.appendChild(areaLinkText);
  var linkContainer = document.getElementById('bookmark-link');
  linkContainer.innerHTML = link;
  linkContainer.appendChild(areaLink);
}

function localiseInterface(category) {
  'use strict';

  try {
    localise(category);
  } catch (exp) {
    console.log(exp);
  }
}



/***/ }),

/***/ "./scripts/main.js":
/*!*************************!*\
  !*** ./scripts/main.js ***!
  \*************************/
/*! exports provided: default, processData, processDataForCategory, highlightCountry, indicatorClick, setcurrentSortingCS, changeParams, selectedSortPropertyCS, selectedSortDirectionCS, currentCategory, CHECKED_FA_HTML, UNCHECKED_FA_HTML, selectedSortProperty, selectedSortDirection, currentSorting, groups */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($, jQuery) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return processData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processData", function() { return processData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processDataForCategory", function() { return processDataForCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "highlightCountry", function() { return highlightCountry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "indicatorClick", function() { return indicatorClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setcurrentSortingCS", function() { return setcurrentSortingCS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeParams", function() { return changeParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectedSortPropertyCS", function() { return selectedSortPropertyCS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectedSortDirectionCS", function() { return selectedSortDirectionCS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentCategory", function() { return currentCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECKED_FA_HTML", function() { return CHECKED_FA_HTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNCHECKED_FA_HTML", function() { return UNCHECKED_FA_HTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectedSortProperty", function() { return selectedSortProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectedSortDirection", function() { return selectedSortDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentSorting", function() { return currentSorting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groups", function() { return groups; });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "../node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "../node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "../node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_has_instance_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.has-instance.js */ "../node_modules/core-js/modules/es.symbol.has-instance.js");
/* harmony import */ var core_js_modules_es_symbol_has_instance_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_has_instance_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_is_concat_spreadable_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.is-concat-spreadable.js */ "../node_modules/core-js/modules/es.symbol.is-concat-spreadable.js");
/* harmony import */ var core_js_modules_es_symbol_is_concat_spreadable_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_is_concat_spreadable_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "../node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_match_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.match.js */ "../node_modules/core-js/modules/es.symbol.match.js");
/* harmony import */ var core_js_modules_es_symbol_match_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_match_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_replace_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.replace.js */ "../node_modules/core-js/modules/es.symbol.replace.js");
/* harmony import */ var core_js_modules_es_symbol_replace_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_replace_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_search_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.search.js */ "../node_modules/core-js/modules/es.symbol.search.js");
/* harmony import */ var core_js_modules_es_symbol_search_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_search_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_species_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.species.js */ "../node_modules/core-js/modules/es.symbol.species.js");
/* harmony import */ var core_js_modules_es_symbol_species_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_species_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_split_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.split.js */ "../node_modules/core-js/modules/es.symbol.split.js");
/* harmony import */ var core_js_modules_es_symbol_split_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_split_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "../node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "../node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_unscopables_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.unscopables.js */ "../node_modules/core-js/modules/es.symbol.unscopables.js");
/* harmony import */ var core_js_modules_es_symbol_unscopables_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_unscopables_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "../node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_array_copy_within_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.array.copy-within.js */ "../node_modules/core-js/modules/es.array.copy-within.js");
/* harmony import */ var core_js_modules_es_array_copy_within_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_copy_within_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.fill.js */ "../node_modules/core-js/modules/es.array.fill.js");
/* harmony import */ var core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "../node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "../node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.array.find-index.js */ "../node_modules/core-js/modules/es.array.find-index.js");
/* harmony import */ var core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_index_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_array_flat_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.array.flat.js */ "../node_modules/core-js/modules/es.array.flat.js");
/* harmony import */ var core_js_modules_es_array_flat_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_flat_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_array_flat_map_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.array.flat-map.js */ "../node_modules/core-js/modules/es.array.flat-map.js");
/* harmony import */ var core_js_modules_es_array_flat_map_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_flat_map_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "../node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "../node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "../node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "../node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "../node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_array_of_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.array.of.js */ "../node_modules/core-js/modules/es.array.of.js");
/* harmony import */ var core_js_modules_es_array_of_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_of_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "../node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_array_reduce_right_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.array.reduce-right.js */ "../node_modules/core-js/modules/es.array.reduce-right.js");
/* harmony import */ var core_js_modules_es_array_reduce_right_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_right_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "../node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "../node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/es.array.sort.js */ "../node_modules/core-js/modules/es.array.sort.js");
/* harmony import */ var core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_sort_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_es_array_species_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/es.array.species.js */ "../node_modules/core-js/modules/es.array.species.js");
/* harmony import */ var core_js_modules_es_array_species_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_species_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "../node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var core_js_modules_es_array_unscopables_flat_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! core-js/modules/es.array.unscopables.flat.js */ "../node_modules/core-js/modules/es.array.unscopables.flat.js");
/* harmony import */ var core_js_modules_es_array_unscopables_flat_js__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_unscopables_flat_js__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var core_js_modules_es_array_unscopables_flat_map_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! core-js/modules/es.array.unscopables.flat-map.js */ "../node_modules/core-js/modules/es.array.unscopables.flat-map.js");
/* harmony import */ var core_js_modules_es_array_unscopables_flat_map_js__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_unscopables_flat_map_js__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var core_js_modules_es_array_buffer_constructor_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! core-js/modules/es.array-buffer.constructor.js */ "../node_modules/core-js/modules/es.array-buffer.constructor.js");
/* harmony import */ var core_js_modules_es_array_buffer_constructor_js__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_buffer_constructor_js__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var core_js_modules_es_array_buffer_slice_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! core-js/modules/es.array-buffer.slice.js */ "../node_modules/core-js/modules/es.array-buffer.slice.js");
/* harmony import */ var core_js_modules_es_array_buffer_slice_js__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_buffer_slice_js__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "../node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var core_js_modules_es_function_has_instance_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! core-js/modules/es.function.has-instance.js */ "../node_modules/core-js/modules/es.function.has-instance.js");
/* harmony import */ var core_js_modules_es_function_has_instance_js__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_has_instance_js__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "../node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "../node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! core-js/modules/es.map.js */ "../node_modules/core-js/modules/es.map.js");
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_43__);
/* harmony import */ var core_js_modules_es_math_acosh_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! core-js/modules/es.math.acosh.js */ "../node_modules/core-js/modules/es.math.acosh.js");
/* harmony import */ var core_js_modules_es_math_acosh_js__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_acosh_js__WEBPACK_IMPORTED_MODULE_44__);
/* harmony import */ var core_js_modules_es_math_asinh_js__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! core-js/modules/es.math.asinh.js */ "../node_modules/core-js/modules/es.math.asinh.js");
/* harmony import */ var core_js_modules_es_math_asinh_js__WEBPACK_IMPORTED_MODULE_45___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_asinh_js__WEBPACK_IMPORTED_MODULE_45__);
/* harmony import */ var core_js_modules_es_math_atanh_js__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! core-js/modules/es.math.atanh.js */ "../node_modules/core-js/modules/es.math.atanh.js");
/* harmony import */ var core_js_modules_es_math_atanh_js__WEBPACK_IMPORTED_MODULE_46___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_atanh_js__WEBPACK_IMPORTED_MODULE_46__);
/* harmony import */ var core_js_modules_es_math_cbrt_js__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! core-js/modules/es.math.cbrt.js */ "../node_modules/core-js/modules/es.math.cbrt.js");
/* harmony import */ var core_js_modules_es_math_cbrt_js__WEBPACK_IMPORTED_MODULE_47___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_cbrt_js__WEBPACK_IMPORTED_MODULE_47__);
/* harmony import */ var core_js_modules_es_math_clz32_js__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! core-js/modules/es.math.clz32.js */ "../node_modules/core-js/modules/es.math.clz32.js");
/* harmony import */ var core_js_modules_es_math_clz32_js__WEBPACK_IMPORTED_MODULE_48___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_clz32_js__WEBPACK_IMPORTED_MODULE_48__);
/* harmony import */ var core_js_modules_es_math_cosh_js__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! core-js/modules/es.math.cosh.js */ "../node_modules/core-js/modules/es.math.cosh.js");
/* harmony import */ var core_js_modules_es_math_cosh_js__WEBPACK_IMPORTED_MODULE_49___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_cosh_js__WEBPACK_IMPORTED_MODULE_49__);
/* harmony import */ var core_js_modules_es_math_expm1_js__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! core-js/modules/es.math.expm1.js */ "../node_modules/core-js/modules/es.math.expm1.js");
/* harmony import */ var core_js_modules_es_math_expm1_js__WEBPACK_IMPORTED_MODULE_50___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_expm1_js__WEBPACK_IMPORTED_MODULE_50__);
/* harmony import */ var core_js_modules_es_math_fround_js__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! core-js/modules/es.math.fround.js */ "../node_modules/core-js/modules/es.math.fround.js");
/* harmony import */ var core_js_modules_es_math_fround_js__WEBPACK_IMPORTED_MODULE_51___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_fround_js__WEBPACK_IMPORTED_MODULE_51__);
/* harmony import */ var core_js_modules_es_math_hypot_js__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! core-js/modules/es.math.hypot.js */ "../node_modules/core-js/modules/es.math.hypot.js");
/* harmony import */ var core_js_modules_es_math_hypot_js__WEBPACK_IMPORTED_MODULE_52___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_hypot_js__WEBPACK_IMPORTED_MODULE_52__);
/* harmony import */ var core_js_modules_es_math_imul_js__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! core-js/modules/es.math.imul.js */ "../node_modules/core-js/modules/es.math.imul.js");
/* harmony import */ var core_js_modules_es_math_imul_js__WEBPACK_IMPORTED_MODULE_53___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_imul_js__WEBPACK_IMPORTED_MODULE_53__);
/* harmony import */ var core_js_modules_es_math_log10_js__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! core-js/modules/es.math.log10.js */ "../node_modules/core-js/modules/es.math.log10.js");
/* harmony import */ var core_js_modules_es_math_log10_js__WEBPACK_IMPORTED_MODULE_54___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_log10_js__WEBPACK_IMPORTED_MODULE_54__);
/* harmony import */ var core_js_modules_es_math_log1p_js__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! core-js/modules/es.math.log1p.js */ "../node_modules/core-js/modules/es.math.log1p.js");
/* harmony import */ var core_js_modules_es_math_log1p_js__WEBPACK_IMPORTED_MODULE_55___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_log1p_js__WEBPACK_IMPORTED_MODULE_55__);
/* harmony import */ var core_js_modules_es_math_log2_js__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! core-js/modules/es.math.log2.js */ "../node_modules/core-js/modules/es.math.log2.js");
/* harmony import */ var core_js_modules_es_math_log2_js__WEBPACK_IMPORTED_MODULE_56___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_log2_js__WEBPACK_IMPORTED_MODULE_56__);
/* harmony import */ var core_js_modules_es_math_sign_js__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! core-js/modules/es.math.sign.js */ "../node_modules/core-js/modules/es.math.sign.js");
/* harmony import */ var core_js_modules_es_math_sign_js__WEBPACK_IMPORTED_MODULE_57___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_sign_js__WEBPACK_IMPORTED_MODULE_57__);
/* harmony import */ var core_js_modules_es_math_sinh_js__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! core-js/modules/es.math.sinh.js */ "../node_modules/core-js/modules/es.math.sinh.js");
/* harmony import */ var core_js_modules_es_math_sinh_js__WEBPACK_IMPORTED_MODULE_58___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_sinh_js__WEBPACK_IMPORTED_MODULE_58__);
/* harmony import */ var core_js_modules_es_math_tanh_js__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! core-js/modules/es.math.tanh.js */ "../node_modules/core-js/modules/es.math.tanh.js");
/* harmony import */ var core_js_modules_es_math_tanh_js__WEBPACK_IMPORTED_MODULE_59___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_tanh_js__WEBPACK_IMPORTED_MODULE_59__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "../node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_60___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_60__);
/* harmony import */ var core_js_modules_es_math_trunc_js__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! core-js/modules/es.math.trunc.js */ "../node_modules/core-js/modules/es.math.trunc.js");
/* harmony import */ var core_js_modules_es_math_trunc_js__WEBPACK_IMPORTED_MODULE_61___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_trunc_js__WEBPACK_IMPORTED_MODULE_61__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "../node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_62___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_62__);
/* harmony import */ var core_js_modules_es_number_epsilon_js__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! core-js/modules/es.number.epsilon.js */ "../node_modules/core-js/modules/es.number.epsilon.js");
/* harmony import */ var core_js_modules_es_number_epsilon_js__WEBPACK_IMPORTED_MODULE_63___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_epsilon_js__WEBPACK_IMPORTED_MODULE_63__);
/* harmony import */ var core_js_modules_es_number_is_finite_js__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! core-js/modules/es.number.is-finite.js */ "../node_modules/core-js/modules/es.number.is-finite.js");
/* harmony import */ var core_js_modules_es_number_is_finite_js__WEBPACK_IMPORTED_MODULE_64___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_is_finite_js__WEBPACK_IMPORTED_MODULE_64__);
/* harmony import */ var core_js_modules_es_number_is_integer_js__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! core-js/modules/es.number.is-integer.js */ "../node_modules/core-js/modules/es.number.is-integer.js");
/* harmony import */ var core_js_modules_es_number_is_integer_js__WEBPACK_IMPORTED_MODULE_65___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_is_integer_js__WEBPACK_IMPORTED_MODULE_65__);
/* harmony import */ var core_js_modules_es_number_is_nan_js__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! core-js/modules/es.number.is-nan.js */ "../node_modules/core-js/modules/es.number.is-nan.js");
/* harmony import */ var core_js_modules_es_number_is_nan_js__WEBPACK_IMPORTED_MODULE_66___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_is_nan_js__WEBPACK_IMPORTED_MODULE_66__);
/* harmony import */ var core_js_modules_es_number_is_safe_integer_js__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! core-js/modules/es.number.is-safe-integer.js */ "../node_modules/core-js/modules/es.number.is-safe-integer.js");
/* harmony import */ var core_js_modules_es_number_is_safe_integer_js__WEBPACK_IMPORTED_MODULE_67___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_is_safe_integer_js__WEBPACK_IMPORTED_MODULE_67__);
/* harmony import */ var core_js_modules_es_number_max_safe_integer_js__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! core-js/modules/es.number.max-safe-integer.js */ "../node_modules/core-js/modules/es.number.max-safe-integer.js");
/* harmony import */ var core_js_modules_es_number_max_safe_integer_js__WEBPACK_IMPORTED_MODULE_68___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_max_safe_integer_js__WEBPACK_IMPORTED_MODULE_68__);
/* harmony import */ var core_js_modules_es_number_min_safe_integer_js__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! core-js/modules/es.number.min-safe-integer.js */ "../node_modules/core-js/modules/es.number.min-safe-integer.js");
/* harmony import */ var core_js_modules_es_number_min_safe_integer_js__WEBPACK_IMPORTED_MODULE_69___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_min_safe_integer_js__WEBPACK_IMPORTED_MODULE_69__);
/* harmony import */ var core_js_modules_es_number_parse_float_js__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! core-js/modules/es.number.parse-float.js */ "../node_modules/core-js/modules/es.number.parse-float.js");
/* harmony import */ var core_js_modules_es_number_parse_float_js__WEBPACK_IMPORTED_MODULE_70___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_parse_float_js__WEBPACK_IMPORTED_MODULE_70__);
/* harmony import */ var core_js_modules_es_number_parse_int_js__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! core-js/modules/es.number.parse-int.js */ "../node_modules/core-js/modules/es.number.parse-int.js");
/* harmony import */ var core_js_modules_es_number_parse_int_js__WEBPACK_IMPORTED_MODULE_71___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_parse_int_js__WEBPACK_IMPORTED_MODULE_71__);
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "../node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_72___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_72__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(/*! core-js/modules/es.object.assign.js */ "../node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_73___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_73__);
/* harmony import */ var core_js_modules_es_object_define_getter_js__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(/*! core-js/modules/es.object.define-getter.js */ "../node_modules/core-js/modules/es.object.define-getter.js");
/* harmony import */ var core_js_modules_es_object_define_getter_js__WEBPACK_IMPORTED_MODULE_74___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_getter_js__WEBPACK_IMPORTED_MODULE_74__);
/* harmony import */ var core_js_modules_es_object_define_setter_js__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(/*! core-js/modules/es.object.define-setter.js */ "../node_modules/core-js/modules/es.object.define-setter.js");
/* harmony import */ var core_js_modules_es_object_define_setter_js__WEBPACK_IMPORTED_MODULE_75___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_setter_js__WEBPACK_IMPORTED_MODULE_75__);
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(/*! core-js/modules/es.object.entries.js */ "../node_modules/core-js/modules/es.object.entries.js");
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_76___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_76__);
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(/*! core-js/modules/es.object.freeze.js */ "../node_modules/core-js/modules/es.object.freeze.js");
/* harmony import */ var core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_77___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_freeze_js__WEBPACK_IMPORTED_MODULE_77__);
/* harmony import */ var core_js_modules_es_object_from_entries_js__WEBPACK_IMPORTED_MODULE_78__ = __webpack_require__(/*! core-js/modules/es.object.from-entries.js */ "../node_modules/core-js/modules/es.object.from-entries.js");
/* harmony import */ var core_js_modules_es_object_from_entries_js__WEBPACK_IMPORTED_MODULE_78___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_from_entries_js__WEBPACK_IMPORTED_MODULE_78__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_79__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "../node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_79___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_79__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_80__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "../node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_80___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_80__);
/* harmony import */ var core_js_modules_es_object_get_own_property_names_js__WEBPACK_IMPORTED_MODULE_81__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-names.js */ "../node_modules/core-js/modules/es.object.get-own-property-names.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_names_js__WEBPACK_IMPORTED_MODULE_81___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_names_js__WEBPACK_IMPORTED_MODULE_81__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_82__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "../node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_82___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_82__);
/* harmony import */ var core_js_modules_es_object_is_js__WEBPACK_IMPORTED_MODULE_83__ = __webpack_require__(/*! core-js/modules/es.object.is.js */ "../node_modules/core-js/modules/es.object.is.js");
/* harmony import */ var core_js_modules_es_object_is_js__WEBPACK_IMPORTED_MODULE_83___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_is_js__WEBPACK_IMPORTED_MODULE_83__);
/* harmony import */ var core_js_modules_es_object_is_extensible_js__WEBPACK_IMPORTED_MODULE_84__ = __webpack_require__(/*! core-js/modules/es.object.is-extensible.js */ "../node_modules/core-js/modules/es.object.is-extensible.js");
/* harmony import */ var core_js_modules_es_object_is_extensible_js__WEBPACK_IMPORTED_MODULE_84___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_is_extensible_js__WEBPACK_IMPORTED_MODULE_84__);
/* harmony import */ var core_js_modules_es_object_is_frozen_js__WEBPACK_IMPORTED_MODULE_85__ = __webpack_require__(/*! core-js/modules/es.object.is-frozen.js */ "../node_modules/core-js/modules/es.object.is-frozen.js");
/* harmony import */ var core_js_modules_es_object_is_frozen_js__WEBPACK_IMPORTED_MODULE_85___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_is_frozen_js__WEBPACK_IMPORTED_MODULE_85__);
/* harmony import */ var core_js_modules_es_object_is_sealed_js__WEBPACK_IMPORTED_MODULE_86__ = __webpack_require__(/*! core-js/modules/es.object.is-sealed.js */ "../node_modules/core-js/modules/es.object.is-sealed.js");
/* harmony import */ var core_js_modules_es_object_is_sealed_js__WEBPACK_IMPORTED_MODULE_86___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_is_sealed_js__WEBPACK_IMPORTED_MODULE_86__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_87__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "../node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_87___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_87__);
/* harmony import */ var core_js_modules_es_object_lookup_getter_js__WEBPACK_IMPORTED_MODULE_88__ = __webpack_require__(/*! core-js/modules/es.object.lookup-getter.js */ "../node_modules/core-js/modules/es.object.lookup-getter.js");
/* harmony import */ var core_js_modules_es_object_lookup_getter_js__WEBPACK_IMPORTED_MODULE_88___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_lookup_getter_js__WEBPACK_IMPORTED_MODULE_88__);
/* harmony import */ var core_js_modules_es_object_lookup_setter_js__WEBPACK_IMPORTED_MODULE_89__ = __webpack_require__(/*! core-js/modules/es.object.lookup-setter.js */ "../node_modules/core-js/modules/es.object.lookup-setter.js");
/* harmony import */ var core_js_modules_es_object_lookup_setter_js__WEBPACK_IMPORTED_MODULE_89___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_lookup_setter_js__WEBPACK_IMPORTED_MODULE_89__);
/* harmony import */ var core_js_modules_es_object_prevent_extensions_js__WEBPACK_IMPORTED_MODULE_90__ = __webpack_require__(/*! core-js/modules/es.object.prevent-extensions.js */ "../node_modules/core-js/modules/es.object.prevent-extensions.js");
/* harmony import */ var core_js_modules_es_object_prevent_extensions_js__WEBPACK_IMPORTED_MODULE_90___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_prevent_extensions_js__WEBPACK_IMPORTED_MODULE_90__);
/* harmony import */ var core_js_modules_es_object_seal_js__WEBPACK_IMPORTED_MODULE_91__ = __webpack_require__(/*! core-js/modules/es.object.seal.js */ "../node_modules/core-js/modules/es.object.seal.js");
/* harmony import */ var core_js_modules_es_object_seal_js__WEBPACK_IMPORTED_MODULE_91___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_seal_js__WEBPACK_IMPORTED_MODULE_91__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_92__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "../node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_92___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_92__);
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_93__ = __webpack_require__(/*! core-js/modules/es.object.values.js */ "../node_modules/core-js/modules/es.object.values.js");
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_93___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_93__);
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_94__ = __webpack_require__(/*! core-js/modules/es.parse-float.js */ "../node_modules/core-js/modules/es.parse-float.js");
/* harmony import */ var core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_94___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_float_js__WEBPACK_IMPORTED_MODULE_94__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_95__ = __webpack_require__(/*! core-js/modules/es.parse-int.js */ "../node_modules/core-js/modules/es.parse-int.js");
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_95___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_95__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_96__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "../node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_96___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_96__);
/* harmony import */ var core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_97__ = __webpack_require__(/*! core-js/modules/es.promise.finally.js */ "../node_modules/core-js/modules/es.promise.finally.js");
/* harmony import */ var core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_97___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_97__);
/* harmony import */ var core_js_modules_es_reflect_apply_js__WEBPACK_IMPORTED_MODULE_98__ = __webpack_require__(/*! core-js/modules/es.reflect.apply.js */ "../node_modules/core-js/modules/es.reflect.apply.js");
/* harmony import */ var core_js_modules_es_reflect_apply_js__WEBPACK_IMPORTED_MODULE_98___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_apply_js__WEBPACK_IMPORTED_MODULE_98__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_99__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "../node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_99___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_99__);
/* harmony import */ var core_js_modules_es_reflect_define_property_js__WEBPACK_IMPORTED_MODULE_100__ = __webpack_require__(/*! core-js/modules/es.reflect.define-property.js */ "../node_modules/core-js/modules/es.reflect.define-property.js");
/* harmony import */ var core_js_modules_es_reflect_define_property_js__WEBPACK_IMPORTED_MODULE_100___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_define_property_js__WEBPACK_IMPORTED_MODULE_100__);
/* harmony import */ var core_js_modules_es_reflect_delete_property_js__WEBPACK_IMPORTED_MODULE_101__ = __webpack_require__(/*! core-js/modules/es.reflect.delete-property.js */ "../node_modules/core-js/modules/es.reflect.delete-property.js");
/* harmony import */ var core_js_modules_es_reflect_delete_property_js__WEBPACK_IMPORTED_MODULE_101___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_delete_property_js__WEBPACK_IMPORTED_MODULE_101__);
/* harmony import */ var core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_102__ = __webpack_require__(/*! core-js/modules/es.reflect.get.js */ "../node_modules/core-js/modules/es.reflect.get.js");
/* harmony import */ var core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_102___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_get_js__WEBPACK_IMPORTED_MODULE_102__);
/* harmony import */ var core_js_modules_es_reflect_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_103__ = __webpack_require__(/*! core-js/modules/es.reflect.get-own-property-descriptor.js */ "../node_modules/core-js/modules/es.reflect.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_reflect_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_103___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_103__);
/* harmony import */ var core_js_modules_es_reflect_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_104__ = __webpack_require__(/*! core-js/modules/es.reflect.get-prototype-of.js */ "../node_modules/core-js/modules/es.reflect.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_reflect_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_104___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_104__);
/* harmony import */ var core_js_modules_es_reflect_has_js__WEBPACK_IMPORTED_MODULE_105__ = __webpack_require__(/*! core-js/modules/es.reflect.has.js */ "../node_modules/core-js/modules/es.reflect.has.js");
/* harmony import */ var core_js_modules_es_reflect_has_js__WEBPACK_IMPORTED_MODULE_105___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_has_js__WEBPACK_IMPORTED_MODULE_105__);
/* harmony import */ var core_js_modules_es_reflect_is_extensible_js__WEBPACK_IMPORTED_MODULE_106__ = __webpack_require__(/*! core-js/modules/es.reflect.is-extensible.js */ "../node_modules/core-js/modules/es.reflect.is-extensible.js");
/* harmony import */ var core_js_modules_es_reflect_is_extensible_js__WEBPACK_IMPORTED_MODULE_106___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_is_extensible_js__WEBPACK_IMPORTED_MODULE_106__);
/* harmony import */ var core_js_modules_es_reflect_own_keys_js__WEBPACK_IMPORTED_MODULE_107__ = __webpack_require__(/*! core-js/modules/es.reflect.own-keys.js */ "../node_modules/core-js/modules/es.reflect.own-keys.js");
/* harmony import */ var core_js_modules_es_reflect_own_keys_js__WEBPACK_IMPORTED_MODULE_107___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_own_keys_js__WEBPACK_IMPORTED_MODULE_107__);
/* harmony import */ var core_js_modules_es_reflect_prevent_extensions_js__WEBPACK_IMPORTED_MODULE_108__ = __webpack_require__(/*! core-js/modules/es.reflect.prevent-extensions.js */ "../node_modules/core-js/modules/es.reflect.prevent-extensions.js");
/* harmony import */ var core_js_modules_es_reflect_prevent_extensions_js__WEBPACK_IMPORTED_MODULE_108___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_prevent_extensions_js__WEBPACK_IMPORTED_MODULE_108__);
/* harmony import */ var core_js_modules_es_reflect_set_js__WEBPACK_IMPORTED_MODULE_109__ = __webpack_require__(/*! core-js/modules/es.reflect.set.js */ "../node_modules/core-js/modules/es.reflect.set.js");
/* harmony import */ var core_js_modules_es_reflect_set_js__WEBPACK_IMPORTED_MODULE_109___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_set_js__WEBPACK_IMPORTED_MODULE_109__);
/* harmony import */ var core_js_modules_es_reflect_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_110__ = __webpack_require__(/*! core-js/modules/es.reflect.set-prototype-of.js */ "../node_modules/core-js/modules/es.reflect.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_reflect_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_110___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_110__);
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_111__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "../node_modules/core-js/modules/es.regexp.constructor.js");
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_111___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_111__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_112__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "../node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_112___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_112__);
/* harmony import */ var core_js_modules_es_regexp_flags_js__WEBPACK_IMPORTED_MODULE_113__ = __webpack_require__(/*! core-js/modules/es.regexp.flags.js */ "../node_modules/core-js/modules/es.regexp.flags.js");
/* harmony import */ var core_js_modules_es_regexp_flags_js__WEBPACK_IMPORTED_MODULE_113___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_flags_js__WEBPACK_IMPORTED_MODULE_113__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_114__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "../node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_114___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_114__);
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_115__ = __webpack_require__(/*! core-js/modules/es.set.js */ "../node_modules/core-js/modules/es.set.js");
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_115___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_115__);
/* harmony import */ var core_js_modules_es_string_code_point_at_js__WEBPACK_IMPORTED_MODULE_116__ = __webpack_require__(/*! core-js/modules/es.string.code-point-at.js */ "../node_modules/core-js/modules/es.string.code-point-at.js");
/* harmony import */ var core_js_modules_es_string_code_point_at_js__WEBPACK_IMPORTED_MODULE_116___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_code_point_at_js__WEBPACK_IMPORTED_MODULE_116__);
/* harmony import */ var core_js_modules_es_string_ends_with_js__WEBPACK_IMPORTED_MODULE_117__ = __webpack_require__(/*! core-js/modules/es.string.ends-with.js */ "../node_modules/core-js/modules/es.string.ends-with.js");
/* harmony import */ var core_js_modules_es_string_ends_with_js__WEBPACK_IMPORTED_MODULE_117___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_ends_with_js__WEBPACK_IMPORTED_MODULE_117__);
/* harmony import */ var core_js_modules_es_string_from_code_point_js__WEBPACK_IMPORTED_MODULE_118__ = __webpack_require__(/*! core-js/modules/es.string.from-code-point.js */ "../node_modules/core-js/modules/es.string.from-code-point.js");
/* harmony import */ var core_js_modules_es_string_from_code_point_js__WEBPACK_IMPORTED_MODULE_118___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_from_code_point_js__WEBPACK_IMPORTED_MODULE_118__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_119__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "../node_modules/core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_119___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_119__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_120__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "../node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_120___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_120__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_121__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "../node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_121___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_121__);
/* harmony import */ var core_js_modules_es_string_pad_end_js__WEBPACK_IMPORTED_MODULE_122__ = __webpack_require__(/*! core-js/modules/es.string.pad-end.js */ "../node_modules/core-js/modules/es.string.pad-end.js");
/* harmony import */ var core_js_modules_es_string_pad_end_js__WEBPACK_IMPORTED_MODULE_122___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_pad_end_js__WEBPACK_IMPORTED_MODULE_122__);
/* harmony import */ var core_js_modules_es_string_pad_start_js__WEBPACK_IMPORTED_MODULE_123__ = __webpack_require__(/*! core-js/modules/es.string.pad-start.js */ "../node_modules/core-js/modules/es.string.pad-start.js");
/* harmony import */ var core_js_modules_es_string_pad_start_js__WEBPACK_IMPORTED_MODULE_123___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_pad_start_js__WEBPACK_IMPORTED_MODULE_123__);
/* harmony import */ var core_js_modules_es_string_raw_js__WEBPACK_IMPORTED_MODULE_124__ = __webpack_require__(/*! core-js/modules/es.string.raw.js */ "../node_modules/core-js/modules/es.string.raw.js");
/* harmony import */ var core_js_modules_es_string_raw_js__WEBPACK_IMPORTED_MODULE_124___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_raw_js__WEBPACK_IMPORTED_MODULE_124__);
/* harmony import */ var core_js_modules_es_string_repeat_js__WEBPACK_IMPORTED_MODULE_125__ = __webpack_require__(/*! core-js/modules/es.string.repeat.js */ "../node_modules/core-js/modules/es.string.repeat.js");
/* harmony import */ var core_js_modules_es_string_repeat_js__WEBPACK_IMPORTED_MODULE_125___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_repeat_js__WEBPACK_IMPORTED_MODULE_125__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_126__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "../node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_126___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_126__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_127__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "../node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_127___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_127__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_128__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "../node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_128___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_128__);
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_129__ = __webpack_require__(/*! core-js/modules/es.string.starts-with.js */ "../node_modules/core-js/modules/es.string.starts-with.js");
/* harmony import */ var core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_129___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_starts_with_js__WEBPACK_IMPORTED_MODULE_129__);
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_130__ = __webpack_require__(/*! core-js/modules/es.string.trim.js */ "../node_modules/core-js/modules/es.string.trim.js");
/* harmony import */ var core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_130___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_js__WEBPACK_IMPORTED_MODULE_130__);
/* harmony import */ var core_js_modules_es_string_trim_end_js__WEBPACK_IMPORTED_MODULE_131__ = __webpack_require__(/*! core-js/modules/es.string.trim-end.js */ "../node_modules/core-js/modules/es.string.trim-end.js");
/* harmony import */ var core_js_modules_es_string_trim_end_js__WEBPACK_IMPORTED_MODULE_131___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_end_js__WEBPACK_IMPORTED_MODULE_131__);
/* harmony import */ var core_js_modules_es_string_trim_start_js__WEBPACK_IMPORTED_MODULE_132__ = __webpack_require__(/*! core-js/modules/es.string.trim-start.js */ "../node_modules/core-js/modules/es.string.trim-start.js");
/* harmony import */ var core_js_modules_es_string_trim_start_js__WEBPACK_IMPORTED_MODULE_132___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_trim_start_js__WEBPACK_IMPORTED_MODULE_132__);
/* harmony import */ var core_js_modules_es_string_anchor_js__WEBPACK_IMPORTED_MODULE_133__ = __webpack_require__(/*! core-js/modules/es.string.anchor.js */ "../node_modules/core-js/modules/es.string.anchor.js");
/* harmony import */ var core_js_modules_es_string_anchor_js__WEBPACK_IMPORTED_MODULE_133___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_anchor_js__WEBPACK_IMPORTED_MODULE_133__);
/* harmony import */ var core_js_modules_es_string_big_js__WEBPACK_IMPORTED_MODULE_134__ = __webpack_require__(/*! core-js/modules/es.string.big.js */ "../node_modules/core-js/modules/es.string.big.js");
/* harmony import */ var core_js_modules_es_string_big_js__WEBPACK_IMPORTED_MODULE_134___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_big_js__WEBPACK_IMPORTED_MODULE_134__);
/* harmony import */ var core_js_modules_es_string_blink_js__WEBPACK_IMPORTED_MODULE_135__ = __webpack_require__(/*! core-js/modules/es.string.blink.js */ "../node_modules/core-js/modules/es.string.blink.js");
/* harmony import */ var core_js_modules_es_string_blink_js__WEBPACK_IMPORTED_MODULE_135___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_blink_js__WEBPACK_IMPORTED_MODULE_135__);
/* harmony import */ var core_js_modules_es_string_bold_js__WEBPACK_IMPORTED_MODULE_136__ = __webpack_require__(/*! core-js/modules/es.string.bold.js */ "../node_modules/core-js/modules/es.string.bold.js");
/* harmony import */ var core_js_modules_es_string_bold_js__WEBPACK_IMPORTED_MODULE_136___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_bold_js__WEBPACK_IMPORTED_MODULE_136__);
/* harmony import */ var core_js_modules_es_string_fixed_js__WEBPACK_IMPORTED_MODULE_137__ = __webpack_require__(/*! core-js/modules/es.string.fixed.js */ "../node_modules/core-js/modules/es.string.fixed.js");
/* harmony import */ var core_js_modules_es_string_fixed_js__WEBPACK_IMPORTED_MODULE_137___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_fixed_js__WEBPACK_IMPORTED_MODULE_137__);
/* harmony import */ var core_js_modules_es_string_fontcolor_js__WEBPACK_IMPORTED_MODULE_138__ = __webpack_require__(/*! core-js/modules/es.string.fontcolor.js */ "../node_modules/core-js/modules/es.string.fontcolor.js");
/* harmony import */ var core_js_modules_es_string_fontcolor_js__WEBPACK_IMPORTED_MODULE_138___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_fontcolor_js__WEBPACK_IMPORTED_MODULE_138__);
/* harmony import */ var core_js_modules_es_string_fontsize_js__WEBPACK_IMPORTED_MODULE_139__ = __webpack_require__(/*! core-js/modules/es.string.fontsize.js */ "../node_modules/core-js/modules/es.string.fontsize.js");
/* harmony import */ var core_js_modules_es_string_fontsize_js__WEBPACK_IMPORTED_MODULE_139___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_fontsize_js__WEBPACK_IMPORTED_MODULE_139__);
/* harmony import */ var core_js_modules_es_string_italics_js__WEBPACK_IMPORTED_MODULE_140__ = __webpack_require__(/*! core-js/modules/es.string.italics.js */ "../node_modules/core-js/modules/es.string.italics.js");
/* harmony import */ var core_js_modules_es_string_italics_js__WEBPACK_IMPORTED_MODULE_140___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_italics_js__WEBPACK_IMPORTED_MODULE_140__);
/* harmony import */ var core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_141__ = __webpack_require__(/*! core-js/modules/es.string.link.js */ "../node_modules/core-js/modules/es.string.link.js");
/* harmony import */ var core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_141___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_link_js__WEBPACK_IMPORTED_MODULE_141__);
/* harmony import */ var core_js_modules_es_string_small_js__WEBPACK_IMPORTED_MODULE_142__ = __webpack_require__(/*! core-js/modules/es.string.small.js */ "../node_modules/core-js/modules/es.string.small.js");
/* harmony import */ var core_js_modules_es_string_small_js__WEBPACK_IMPORTED_MODULE_142___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_small_js__WEBPACK_IMPORTED_MODULE_142__);
/* harmony import */ var core_js_modules_es_string_strike_js__WEBPACK_IMPORTED_MODULE_143__ = __webpack_require__(/*! core-js/modules/es.string.strike.js */ "../node_modules/core-js/modules/es.string.strike.js");
/* harmony import */ var core_js_modules_es_string_strike_js__WEBPACK_IMPORTED_MODULE_143___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_strike_js__WEBPACK_IMPORTED_MODULE_143__);
/* harmony import */ var core_js_modules_es_string_sub_js__WEBPACK_IMPORTED_MODULE_144__ = __webpack_require__(/*! core-js/modules/es.string.sub.js */ "../node_modules/core-js/modules/es.string.sub.js");
/* harmony import */ var core_js_modules_es_string_sub_js__WEBPACK_IMPORTED_MODULE_144___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_sub_js__WEBPACK_IMPORTED_MODULE_144__);
/* harmony import */ var core_js_modules_es_string_sup_js__WEBPACK_IMPORTED_MODULE_145__ = __webpack_require__(/*! core-js/modules/es.string.sup.js */ "../node_modules/core-js/modules/es.string.sup.js");
/* harmony import */ var core_js_modules_es_string_sup_js__WEBPACK_IMPORTED_MODULE_145___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_sup_js__WEBPACK_IMPORTED_MODULE_145__);
/* harmony import */ var core_js_modules_es_typed_array_float32_array_js__WEBPACK_IMPORTED_MODULE_146__ = __webpack_require__(/*! core-js/modules/es.typed-array.float32-array.js */ "../node_modules/core-js/modules/es.typed-array.float32-array.js");
/* harmony import */ var core_js_modules_es_typed_array_float32_array_js__WEBPACK_IMPORTED_MODULE_146___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_float32_array_js__WEBPACK_IMPORTED_MODULE_146__);
/* harmony import */ var core_js_modules_es_typed_array_float64_array_js__WEBPACK_IMPORTED_MODULE_147__ = __webpack_require__(/*! core-js/modules/es.typed-array.float64-array.js */ "../node_modules/core-js/modules/es.typed-array.float64-array.js");
/* harmony import */ var core_js_modules_es_typed_array_float64_array_js__WEBPACK_IMPORTED_MODULE_147___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_float64_array_js__WEBPACK_IMPORTED_MODULE_147__);
/* harmony import */ var core_js_modules_es_typed_array_int8_array_js__WEBPACK_IMPORTED_MODULE_148__ = __webpack_require__(/*! core-js/modules/es.typed-array.int8-array.js */ "../node_modules/core-js/modules/es.typed-array.int8-array.js");
/* harmony import */ var core_js_modules_es_typed_array_int8_array_js__WEBPACK_IMPORTED_MODULE_148___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_int8_array_js__WEBPACK_IMPORTED_MODULE_148__);
/* harmony import */ var core_js_modules_es_typed_array_int16_array_js__WEBPACK_IMPORTED_MODULE_149__ = __webpack_require__(/*! core-js/modules/es.typed-array.int16-array.js */ "../node_modules/core-js/modules/es.typed-array.int16-array.js");
/* harmony import */ var core_js_modules_es_typed_array_int16_array_js__WEBPACK_IMPORTED_MODULE_149___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_int16_array_js__WEBPACK_IMPORTED_MODULE_149__);
/* harmony import */ var core_js_modules_es_typed_array_int32_array_js__WEBPACK_IMPORTED_MODULE_150__ = __webpack_require__(/*! core-js/modules/es.typed-array.int32-array.js */ "../node_modules/core-js/modules/es.typed-array.int32-array.js");
/* harmony import */ var core_js_modules_es_typed_array_int32_array_js__WEBPACK_IMPORTED_MODULE_150___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_int32_array_js__WEBPACK_IMPORTED_MODULE_150__);
/* harmony import */ var core_js_modules_es_typed_array_uint8_array_js__WEBPACK_IMPORTED_MODULE_151__ = __webpack_require__(/*! core-js/modules/es.typed-array.uint8-array.js */ "../node_modules/core-js/modules/es.typed-array.uint8-array.js");
/* harmony import */ var core_js_modules_es_typed_array_uint8_array_js__WEBPACK_IMPORTED_MODULE_151___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_uint8_array_js__WEBPACK_IMPORTED_MODULE_151__);
/* harmony import */ var core_js_modules_es_typed_array_uint8_clamped_array_js__WEBPACK_IMPORTED_MODULE_152__ = __webpack_require__(/*! core-js/modules/es.typed-array.uint8-clamped-array.js */ "../node_modules/core-js/modules/es.typed-array.uint8-clamped-array.js");
/* harmony import */ var core_js_modules_es_typed_array_uint8_clamped_array_js__WEBPACK_IMPORTED_MODULE_152___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_uint8_clamped_array_js__WEBPACK_IMPORTED_MODULE_152__);
/* harmony import */ var core_js_modules_es_typed_array_uint16_array_js__WEBPACK_IMPORTED_MODULE_153__ = __webpack_require__(/*! core-js/modules/es.typed-array.uint16-array.js */ "../node_modules/core-js/modules/es.typed-array.uint16-array.js");
/* harmony import */ var core_js_modules_es_typed_array_uint16_array_js__WEBPACK_IMPORTED_MODULE_153___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_uint16_array_js__WEBPACK_IMPORTED_MODULE_153__);
/* harmony import */ var core_js_modules_es_typed_array_uint32_array_js__WEBPACK_IMPORTED_MODULE_154__ = __webpack_require__(/*! core-js/modules/es.typed-array.uint32-array.js */ "../node_modules/core-js/modules/es.typed-array.uint32-array.js");
/* harmony import */ var core_js_modules_es_typed_array_uint32_array_js__WEBPACK_IMPORTED_MODULE_154___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_uint32_array_js__WEBPACK_IMPORTED_MODULE_154__);
/* harmony import */ var core_js_modules_es_typed_array_copy_within_js__WEBPACK_IMPORTED_MODULE_155__ = __webpack_require__(/*! core-js/modules/es.typed-array.copy-within.js */ "../node_modules/core-js/modules/es.typed-array.copy-within.js");
/* harmony import */ var core_js_modules_es_typed_array_copy_within_js__WEBPACK_IMPORTED_MODULE_155___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_copy_within_js__WEBPACK_IMPORTED_MODULE_155__);
/* harmony import */ var core_js_modules_es_typed_array_every_js__WEBPACK_IMPORTED_MODULE_156__ = __webpack_require__(/*! core-js/modules/es.typed-array.every.js */ "../node_modules/core-js/modules/es.typed-array.every.js");
/* harmony import */ var core_js_modules_es_typed_array_every_js__WEBPACK_IMPORTED_MODULE_156___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_every_js__WEBPACK_IMPORTED_MODULE_156__);
/* harmony import */ var core_js_modules_es_typed_array_fill_js__WEBPACK_IMPORTED_MODULE_157__ = __webpack_require__(/*! core-js/modules/es.typed-array.fill.js */ "../node_modules/core-js/modules/es.typed-array.fill.js");
/* harmony import */ var core_js_modules_es_typed_array_fill_js__WEBPACK_IMPORTED_MODULE_157___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_fill_js__WEBPACK_IMPORTED_MODULE_157__);
/* harmony import */ var core_js_modules_es_typed_array_filter_js__WEBPACK_IMPORTED_MODULE_158__ = __webpack_require__(/*! core-js/modules/es.typed-array.filter.js */ "../node_modules/core-js/modules/es.typed-array.filter.js");
/* harmony import */ var core_js_modules_es_typed_array_filter_js__WEBPACK_IMPORTED_MODULE_158___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_filter_js__WEBPACK_IMPORTED_MODULE_158__);
/* harmony import */ var core_js_modules_es_typed_array_find_js__WEBPACK_IMPORTED_MODULE_159__ = __webpack_require__(/*! core-js/modules/es.typed-array.find.js */ "../node_modules/core-js/modules/es.typed-array.find.js");
/* harmony import */ var core_js_modules_es_typed_array_find_js__WEBPACK_IMPORTED_MODULE_159___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_find_js__WEBPACK_IMPORTED_MODULE_159__);
/* harmony import */ var core_js_modules_es_typed_array_find_index_js__WEBPACK_IMPORTED_MODULE_160__ = __webpack_require__(/*! core-js/modules/es.typed-array.find-index.js */ "../node_modules/core-js/modules/es.typed-array.find-index.js");
/* harmony import */ var core_js_modules_es_typed_array_find_index_js__WEBPACK_IMPORTED_MODULE_160___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_find_index_js__WEBPACK_IMPORTED_MODULE_160__);
/* harmony import */ var core_js_modules_es_typed_array_for_each_js__WEBPACK_IMPORTED_MODULE_161__ = __webpack_require__(/*! core-js/modules/es.typed-array.for-each.js */ "../node_modules/core-js/modules/es.typed-array.for-each.js");
/* harmony import */ var core_js_modules_es_typed_array_for_each_js__WEBPACK_IMPORTED_MODULE_161___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_for_each_js__WEBPACK_IMPORTED_MODULE_161__);
/* harmony import */ var core_js_modules_es_typed_array_from_js__WEBPACK_IMPORTED_MODULE_162__ = __webpack_require__(/*! core-js/modules/es.typed-array.from.js */ "../node_modules/core-js/modules/es.typed-array.from.js");
/* harmony import */ var core_js_modules_es_typed_array_from_js__WEBPACK_IMPORTED_MODULE_162___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_from_js__WEBPACK_IMPORTED_MODULE_162__);
/* harmony import */ var core_js_modules_es_typed_array_includes_js__WEBPACK_IMPORTED_MODULE_163__ = __webpack_require__(/*! core-js/modules/es.typed-array.includes.js */ "../node_modules/core-js/modules/es.typed-array.includes.js");
/* harmony import */ var core_js_modules_es_typed_array_includes_js__WEBPACK_IMPORTED_MODULE_163___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_includes_js__WEBPACK_IMPORTED_MODULE_163__);
/* harmony import */ var core_js_modules_es_typed_array_index_of_js__WEBPACK_IMPORTED_MODULE_164__ = __webpack_require__(/*! core-js/modules/es.typed-array.index-of.js */ "../node_modules/core-js/modules/es.typed-array.index-of.js");
/* harmony import */ var core_js_modules_es_typed_array_index_of_js__WEBPACK_IMPORTED_MODULE_164___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_index_of_js__WEBPACK_IMPORTED_MODULE_164__);
/* harmony import */ var core_js_modules_es_typed_array_iterator_js__WEBPACK_IMPORTED_MODULE_165__ = __webpack_require__(/*! core-js/modules/es.typed-array.iterator.js */ "../node_modules/core-js/modules/es.typed-array.iterator.js");
/* harmony import */ var core_js_modules_es_typed_array_iterator_js__WEBPACK_IMPORTED_MODULE_165___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_iterator_js__WEBPACK_IMPORTED_MODULE_165__);
/* harmony import */ var core_js_modules_es_typed_array_join_js__WEBPACK_IMPORTED_MODULE_166__ = __webpack_require__(/*! core-js/modules/es.typed-array.join.js */ "../node_modules/core-js/modules/es.typed-array.join.js");
/* harmony import */ var core_js_modules_es_typed_array_join_js__WEBPACK_IMPORTED_MODULE_166___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_join_js__WEBPACK_IMPORTED_MODULE_166__);
/* harmony import */ var core_js_modules_es_typed_array_last_index_of_js__WEBPACK_IMPORTED_MODULE_167__ = __webpack_require__(/*! core-js/modules/es.typed-array.last-index-of.js */ "../node_modules/core-js/modules/es.typed-array.last-index-of.js");
/* harmony import */ var core_js_modules_es_typed_array_last_index_of_js__WEBPACK_IMPORTED_MODULE_167___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_last_index_of_js__WEBPACK_IMPORTED_MODULE_167__);
/* harmony import */ var core_js_modules_es_typed_array_map_js__WEBPACK_IMPORTED_MODULE_168__ = __webpack_require__(/*! core-js/modules/es.typed-array.map.js */ "../node_modules/core-js/modules/es.typed-array.map.js");
/* harmony import */ var core_js_modules_es_typed_array_map_js__WEBPACK_IMPORTED_MODULE_168___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_map_js__WEBPACK_IMPORTED_MODULE_168__);
/* harmony import */ var core_js_modules_es_typed_array_of_js__WEBPACK_IMPORTED_MODULE_169__ = __webpack_require__(/*! core-js/modules/es.typed-array.of.js */ "../node_modules/core-js/modules/es.typed-array.of.js");
/* harmony import */ var core_js_modules_es_typed_array_of_js__WEBPACK_IMPORTED_MODULE_169___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_of_js__WEBPACK_IMPORTED_MODULE_169__);
/* harmony import */ var core_js_modules_es_typed_array_reduce_js__WEBPACK_IMPORTED_MODULE_170__ = __webpack_require__(/*! core-js/modules/es.typed-array.reduce.js */ "../node_modules/core-js/modules/es.typed-array.reduce.js");
/* harmony import */ var core_js_modules_es_typed_array_reduce_js__WEBPACK_IMPORTED_MODULE_170___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_reduce_js__WEBPACK_IMPORTED_MODULE_170__);
/* harmony import */ var core_js_modules_es_typed_array_reduce_right_js__WEBPACK_IMPORTED_MODULE_171__ = __webpack_require__(/*! core-js/modules/es.typed-array.reduce-right.js */ "../node_modules/core-js/modules/es.typed-array.reduce-right.js");
/* harmony import */ var core_js_modules_es_typed_array_reduce_right_js__WEBPACK_IMPORTED_MODULE_171___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_reduce_right_js__WEBPACK_IMPORTED_MODULE_171__);
/* harmony import */ var core_js_modules_es_typed_array_reverse_js__WEBPACK_IMPORTED_MODULE_172__ = __webpack_require__(/*! core-js/modules/es.typed-array.reverse.js */ "../node_modules/core-js/modules/es.typed-array.reverse.js");
/* harmony import */ var core_js_modules_es_typed_array_reverse_js__WEBPACK_IMPORTED_MODULE_172___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_reverse_js__WEBPACK_IMPORTED_MODULE_172__);
/* harmony import */ var core_js_modules_es_typed_array_set_js__WEBPACK_IMPORTED_MODULE_173__ = __webpack_require__(/*! core-js/modules/es.typed-array.set.js */ "../node_modules/core-js/modules/es.typed-array.set.js");
/* harmony import */ var core_js_modules_es_typed_array_set_js__WEBPACK_IMPORTED_MODULE_173___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_set_js__WEBPACK_IMPORTED_MODULE_173__);
/* harmony import */ var core_js_modules_es_typed_array_slice_js__WEBPACK_IMPORTED_MODULE_174__ = __webpack_require__(/*! core-js/modules/es.typed-array.slice.js */ "../node_modules/core-js/modules/es.typed-array.slice.js");
/* harmony import */ var core_js_modules_es_typed_array_slice_js__WEBPACK_IMPORTED_MODULE_174___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_slice_js__WEBPACK_IMPORTED_MODULE_174__);
/* harmony import */ var core_js_modules_es_typed_array_some_js__WEBPACK_IMPORTED_MODULE_175__ = __webpack_require__(/*! core-js/modules/es.typed-array.some.js */ "../node_modules/core-js/modules/es.typed-array.some.js");
/* harmony import */ var core_js_modules_es_typed_array_some_js__WEBPACK_IMPORTED_MODULE_175___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_some_js__WEBPACK_IMPORTED_MODULE_175__);
/* harmony import */ var core_js_modules_es_typed_array_sort_js__WEBPACK_IMPORTED_MODULE_176__ = __webpack_require__(/*! core-js/modules/es.typed-array.sort.js */ "../node_modules/core-js/modules/es.typed-array.sort.js");
/* harmony import */ var core_js_modules_es_typed_array_sort_js__WEBPACK_IMPORTED_MODULE_176___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_sort_js__WEBPACK_IMPORTED_MODULE_176__);
/* harmony import */ var core_js_modules_es_typed_array_subarray_js__WEBPACK_IMPORTED_MODULE_177__ = __webpack_require__(/*! core-js/modules/es.typed-array.subarray.js */ "../node_modules/core-js/modules/es.typed-array.subarray.js");
/* harmony import */ var core_js_modules_es_typed_array_subarray_js__WEBPACK_IMPORTED_MODULE_177___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_subarray_js__WEBPACK_IMPORTED_MODULE_177__);
/* harmony import */ var core_js_modules_es_typed_array_to_locale_string_js__WEBPACK_IMPORTED_MODULE_178__ = __webpack_require__(/*! core-js/modules/es.typed-array.to-locale-string.js */ "../node_modules/core-js/modules/es.typed-array.to-locale-string.js");
/* harmony import */ var core_js_modules_es_typed_array_to_locale_string_js__WEBPACK_IMPORTED_MODULE_178___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_to_locale_string_js__WEBPACK_IMPORTED_MODULE_178__);
/* harmony import */ var core_js_modules_es_typed_array_to_string_js__WEBPACK_IMPORTED_MODULE_179__ = __webpack_require__(/*! core-js/modules/es.typed-array.to-string.js */ "../node_modules/core-js/modules/es.typed-array.to-string.js");
/* harmony import */ var core_js_modules_es_typed_array_to_string_js__WEBPACK_IMPORTED_MODULE_179___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_typed_array_to_string_js__WEBPACK_IMPORTED_MODULE_179__);
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_180__ = __webpack_require__(/*! core-js/modules/es.weak-map.js */ "../node_modules/core-js/modules/es.weak-map.js");
/* harmony import */ var core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_180___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_weak_map_js__WEBPACK_IMPORTED_MODULE_180__);
/* harmony import */ var core_js_modules_es_weak_set_js__WEBPACK_IMPORTED_MODULE_181__ = __webpack_require__(/*! core-js/modules/es.weak-set.js */ "../node_modules/core-js/modules/es.weak-set.js");
/* harmony import */ var core_js_modules_es_weak_set_js__WEBPACK_IMPORTED_MODULE_181___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_weak_set_js__WEBPACK_IMPORTED_MODULE_181__);
/* harmony import */ var core_js_modules_esnext_aggregate_error_js__WEBPACK_IMPORTED_MODULE_182__ = __webpack_require__(/*! core-js/modules/esnext.aggregate-error.js */ "../node_modules/core-js/modules/esnext.aggregate-error.js");
/* harmony import */ var core_js_modules_esnext_aggregate_error_js__WEBPACK_IMPORTED_MODULE_182___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_aggregate_error_js__WEBPACK_IMPORTED_MODULE_182__);
/* harmony import */ var core_js_modules_esnext_array_last_index_js__WEBPACK_IMPORTED_MODULE_183__ = __webpack_require__(/*! core-js/modules/esnext.array.last-index.js */ "../node_modules/core-js/modules/esnext.array.last-index.js");
/* harmony import */ var core_js_modules_esnext_array_last_index_js__WEBPACK_IMPORTED_MODULE_183___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_array_last_index_js__WEBPACK_IMPORTED_MODULE_183__);
/* harmony import */ var core_js_modules_esnext_array_last_item_js__WEBPACK_IMPORTED_MODULE_184__ = __webpack_require__(/*! core-js/modules/esnext.array.last-item.js */ "../node_modules/core-js/modules/esnext.array.last-item.js");
/* harmony import */ var core_js_modules_esnext_array_last_item_js__WEBPACK_IMPORTED_MODULE_184___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_array_last_item_js__WEBPACK_IMPORTED_MODULE_184__);
/* harmony import */ var core_js_modules_esnext_composite_key_js__WEBPACK_IMPORTED_MODULE_185__ = __webpack_require__(/*! core-js/modules/esnext.composite-key.js */ "../node_modules/core-js/modules/esnext.composite-key.js");
/* harmony import */ var core_js_modules_esnext_composite_key_js__WEBPACK_IMPORTED_MODULE_185___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_composite_key_js__WEBPACK_IMPORTED_MODULE_185__);
/* harmony import */ var core_js_modules_esnext_composite_symbol_js__WEBPACK_IMPORTED_MODULE_186__ = __webpack_require__(/*! core-js/modules/esnext.composite-symbol.js */ "../node_modules/core-js/modules/esnext.composite-symbol.js");
/* harmony import */ var core_js_modules_esnext_composite_symbol_js__WEBPACK_IMPORTED_MODULE_186___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_composite_symbol_js__WEBPACK_IMPORTED_MODULE_186__);
/* harmony import */ var core_js_modules_esnext_global_this_js__WEBPACK_IMPORTED_MODULE_187__ = __webpack_require__(/*! core-js/modules/esnext.global-this.js */ "../node_modules/core-js/modules/esnext.global-this.js");
/* harmony import */ var core_js_modules_esnext_global_this_js__WEBPACK_IMPORTED_MODULE_187___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_global_this_js__WEBPACK_IMPORTED_MODULE_187__);
/* harmony import */ var core_js_modules_esnext_map_delete_all_js__WEBPACK_IMPORTED_MODULE_188__ = __webpack_require__(/*! core-js/modules/esnext.map.delete-all.js */ "../node_modules/core-js/modules/esnext.map.delete-all.js");
/* harmony import */ var core_js_modules_esnext_map_delete_all_js__WEBPACK_IMPORTED_MODULE_188___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_delete_all_js__WEBPACK_IMPORTED_MODULE_188__);
/* harmony import */ var core_js_modules_esnext_map_every_js__WEBPACK_IMPORTED_MODULE_189__ = __webpack_require__(/*! core-js/modules/esnext.map.every.js */ "../node_modules/core-js/modules/esnext.map.every.js");
/* harmony import */ var core_js_modules_esnext_map_every_js__WEBPACK_IMPORTED_MODULE_189___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_every_js__WEBPACK_IMPORTED_MODULE_189__);
/* harmony import */ var core_js_modules_esnext_map_filter_js__WEBPACK_IMPORTED_MODULE_190__ = __webpack_require__(/*! core-js/modules/esnext.map.filter.js */ "../node_modules/core-js/modules/esnext.map.filter.js");
/* harmony import */ var core_js_modules_esnext_map_filter_js__WEBPACK_IMPORTED_MODULE_190___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_filter_js__WEBPACK_IMPORTED_MODULE_190__);
/* harmony import */ var core_js_modules_esnext_map_find_js__WEBPACK_IMPORTED_MODULE_191__ = __webpack_require__(/*! core-js/modules/esnext.map.find.js */ "../node_modules/core-js/modules/esnext.map.find.js");
/* harmony import */ var core_js_modules_esnext_map_find_js__WEBPACK_IMPORTED_MODULE_191___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_find_js__WEBPACK_IMPORTED_MODULE_191__);
/* harmony import */ var core_js_modules_esnext_map_find_key_js__WEBPACK_IMPORTED_MODULE_192__ = __webpack_require__(/*! core-js/modules/esnext.map.find-key.js */ "../node_modules/core-js/modules/esnext.map.find-key.js");
/* harmony import */ var core_js_modules_esnext_map_find_key_js__WEBPACK_IMPORTED_MODULE_192___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_find_key_js__WEBPACK_IMPORTED_MODULE_192__);
/* harmony import */ var core_js_modules_esnext_map_from_js__WEBPACK_IMPORTED_MODULE_193__ = __webpack_require__(/*! core-js/modules/esnext.map.from.js */ "../node_modules/core-js/modules/esnext.map.from.js");
/* harmony import */ var core_js_modules_esnext_map_from_js__WEBPACK_IMPORTED_MODULE_193___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_from_js__WEBPACK_IMPORTED_MODULE_193__);
/* harmony import */ var core_js_modules_esnext_map_group_by_js__WEBPACK_IMPORTED_MODULE_194__ = __webpack_require__(/*! core-js/modules/esnext.map.group-by.js */ "../node_modules/core-js/modules/esnext.map.group-by.js");
/* harmony import */ var core_js_modules_esnext_map_group_by_js__WEBPACK_IMPORTED_MODULE_194___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_group_by_js__WEBPACK_IMPORTED_MODULE_194__);
/* harmony import */ var core_js_modules_esnext_map_includes_js__WEBPACK_IMPORTED_MODULE_195__ = __webpack_require__(/*! core-js/modules/esnext.map.includes.js */ "../node_modules/core-js/modules/esnext.map.includes.js");
/* harmony import */ var core_js_modules_esnext_map_includes_js__WEBPACK_IMPORTED_MODULE_195___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_includes_js__WEBPACK_IMPORTED_MODULE_195__);
/* harmony import */ var core_js_modules_esnext_map_key_by_js__WEBPACK_IMPORTED_MODULE_196__ = __webpack_require__(/*! core-js/modules/esnext.map.key-by.js */ "../node_modules/core-js/modules/esnext.map.key-by.js");
/* harmony import */ var core_js_modules_esnext_map_key_by_js__WEBPACK_IMPORTED_MODULE_196___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_key_by_js__WEBPACK_IMPORTED_MODULE_196__);
/* harmony import */ var core_js_modules_esnext_map_key_of_js__WEBPACK_IMPORTED_MODULE_197__ = __webpack_require__(/*! core-js/modules/esnext.map.key-of.js */ "../node_modules/core-js/modules/esnext.map.key-of.js");
/* harmony import */ var core_js_modules_esnext_map_key_of_js__WEBPACK_IMPORTED_MODULE_197___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_key_of_js__WEBPACK_IMPORTED_MODULE_197__);
/* harmony import */ var core_js_modules_esnext_map_map_keys_js__WEBPACK_IMPORTED_MODULE_198__ = __webpack_require__(/*! core-js/modules/esnext.map.map-keys.js */ "../node_modules/core-js/modules/esnext.map.map-keys.js");
/* harmony import */ var core_js_modules_esnext_map_map_keys_js__WEBPACK_IMPORTED_MODULE_198___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_map_keys_js__WEBPACK_IMPORTED_MODULE_198__);
/* harmony import */ var core_js_modules_esnext_map_map_values_js__WEBPACK_IMPORTED_MODULE_199__ = __webpack_require__(/*! core-js/modules/esnext.map.map-values.js */ "../node_modules/core-js/modules/esnext.map.map-values.js");
/* harmony import */ var core_js_modules_esnext_map_map_values_js__WEBPACK_IMPORTED_MODULE_199___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_map_values_js__WEBPACK_IMPORTED_MODULE_199__);
/* harmony import */ var core_js_modules_esnext_map_merge_js__WEBPACK_IMPORTED_MODULE_200__ = __webpack_require__(/*! core-js/modules/esnext.map.merge.js */ "../node_modules/core-js/modules/esnext.map.merge.js");
/* harmony import */ var core_js_modules_esnext_map_merge_js__WEBPACK_IMPORTED_MODULE_200___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_merge_js__WEBPACK_IMPORTED_MODULE_200__);
/* harmony import */ var core_js_modules_esnext_map_of_js__WEBPACK_IMPORTED_MODULE_201__ = __webpack_require__(/*! core-js/modules/esnext.map.of.js */ "../node_modules/core-js/modules/esnext.map.of.js");
/* harmony import */ var core_js_modules_esnext_map_of_js__WEBPACK_IMPORTED_MODULE_201___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_of_js__WEBPACK_IMPORTED_MODULE_201__);
/* harmony import */ var core_js_modules_esnext_map_reduce_js__WEBPACK_IMPORTED_MODULE_202__ = __webpack_require__(/*! core-js/modules/esnext.map.reduce.js */ "../node_modules/core-js/modules/esnext.map.reduce.js");
/* harmony import */ var core_js_modules_esnext_map_reduce_js__WEBPACK_IMPORTED_MODULE_202___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_reduce_js__WEBPACK_IMPORTED_MODULE_202__);
/* harmony import */ var core_js_modules_esnext_map_some_js__WEBPACK_IMPORTED_MODULE_203__ = __webpack_require__(/*! core-js/modules/esnext.map.some.js */ "../node_modules/core-js/modules/esnext.map.some.js");
/* harmony import */ var core_js_modules_esnext_map_some_js__WEBPACK_IMPORTED_MODULE_203___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_some_js__WEBPACK_IMPORTED_MODULE_203__);
/* harmony import */ var core_js_modules_esnext_map_update_js__WEBPACK_IMPORTED_MODULE_204__ = __webpack_require__(/*! core-js/modules/esnext.map.update.js */ "../node_modules/core-js/modules/esnext.map.update.js");
/* harmony import */ var core_js_modules_esnext_map_update_js__WEBPACK_IMPORTED_MODULE_204___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_map_update_js__WEBPACK_IMPORTED_MODULE_204__);
/* harmony import */ var core_js_modules_esnext_math_clamp_js__WEBPACK_IMPORTED_MODULE_205__ = __webpack_require__(/*! core-js/modules/esnext.math.clamp.js */ "../node_modules/core-js/modules/esnext.math.clamp.js");
/* harmony import */ var core_js_modules_esnext_math_clamp_js__WEBPACK_IMPORTED_MODULE_205___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_math_clamp_js__WEBPACK_IMPORTED_MODULE_205__);
/* harmony import */ var core_js_modules_esnext_math_deg_per_rad_js__WEBPACK_IMPORTED_MODULE_206__ = __webpack_require__(/*! core-js/modules/esnext.math.deg-per-rad.js */ "../node_modules/core-js/modules/esnext.math.deg-per-rad.js");
/* harmony import */ var core_js_modules_esnext_math_deg_per_rad_js__WEBPACK_IMPORTED_MODULE_206___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_math_deg_per_rad_js__WEBPACK_IMPORTED_MODULE_206__);
/* harmony import */ var core_js_modules_esnext_math_degrees_js__WEBPACK_IMPORTED_MODULE_207__ = __webpack_require__(/*! core-js/modules/esnext.math.degrees.js */ "../node_modules/core-js/modules/esnext.math.degrees.js");
/* harmony import */ var core_js_modules_esnext_math_degrees_js__WEBPACK_IMPORTED_MODULE_207___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_math_degrees_js__WEBPACK_IMPORTED_MODULE_207__);
/* harmony import */ var core_js_modules_esnext_math_fscale_js__WEBPACK_IMPORTED_MODULE_208__ = __webpack_require__(/*! core-js/modules/esnext.math.fscale.js */ "../node_modules/core-js/modules/esnext.math.fscale.js");
/* harmony import */ var core_js_modules_esnext_math_fscale_js__WEBPACK_IMPORTED_MODULE_208___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_math_fscale_js__WEBPACK_IMPORTED_MODULE_208__);
/* harmony import */ var core_js_modules_esnext_math_iaddh_js__WEBPACK_IMPORTED_MODULE_209__ = __webpack_require__(/*! core-js/modules/esnext.math.iaddh.js */ "../node_modules/core-js/modules/esnext.math.iaddh.js");
/* harmony import */ var core_js_modules_esnext_math_iaddh_js__WEBPACK_IMPORTED_MODULE_209___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_math_iaddh_js__WEBPACK_IMPORTED_MODULE_209__);
/* harmony import */ var core_js_modules_esnext_math_imulh_js__WEBPACK_IMPORTED_MODULE_210__ = __webpack_require__(/*! core-js/modules/esnext.math.imulh.js */ "../node_modules/core-js/modules/esnext.math.imulh.js");
/* harmony import */ var core_js_modules_esnext_math_imulh_js__WEBPACK_IMPORTED_MODULE_210___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_math_imulh_js__WEBPACK_IMPORTED_MODULE_210__);
/* harmony import */ var core_js_modules_esnext_math_isubh_js__WEBPACK_IMPORTED_MODULE_211__ = __webpack_require__(/*! core-js/modules/esnext.math.isubh.js */ "../node_modules/core-js/modules/esnext.math.isubh.js");
/* harmony import */ var core_js_modules_esnext_math_isubh_js__WEBPACK_IMPORTED_MODULE_211___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_math_isubh_js__WEBPACK_IMPORTED_MODULE_211__);
/* harmony import */ var core_js_modules_esnext_math_rad_per_deg_js__WEBPACK_IMPORTED_MODULE_212__ = __webpack_require__(/*! core-js/modules/esnext.math.rad-per-deg.js */ "../node_modules/core-js/modules/esnext.math.rad-per-deg.js");
/* harmony import */ var core_js_modules_esnext_math_rad_per_deg_js__WEBPACK_IMPORTED_MODULE_212___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_math_rad_per_deg_js__WEBPACK_IMPORTED_MODULE_212__);
/* harmony import */ var core_js_modules_esnext_math_radians_js__WEBPACK_IMPORTED_MODULE_213__ = __webpack_require__(/*! core-js/modules/esnext.math.radians.js */ "../node_modules/core-js/modules/esnext.math.radians.js");
/* harmony import */ var core_js_modules_esnext_math_radians_js__WEBPACK_IMPORTED_MODULE_213___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_math_radians_js__WEBPACK_IMPORTED_MODULE_213__);
/* harmony import */ var core_js_modules_esnext_math_scale_js__WEBPACK_IMPORTED_MODULE_214__ = __webpack_require__(/*! core-js/modules/esnext.math.scale.js */ "../node_modules/core-js/modules/esnext.math.scale.js");
/* harmony import */ var core_js_modules_esnext_math_scale_js__WEBPACK_IMPORTED_MODULE_214___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_math_scale_js__WEBPACK_IMPORTED_MODULE_214__);
/* harmony import */ var core_js_modules_esnext_math_seeded_prng_js__WEBPACK_IMPORTED_MODULE_215__ = __webpack_require__(/*! core-js/modules/esnext.math.seeded-prng.js */ "../node_modules/core-js/modules/esnext.math.seeded-prng.js");
/* harmony import */ var core_js_modules_esnext_math_seeded_prng_js__WEBPACK_IMPORTED_MODULE_215___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_math_seeded_prng_js__WEBPACK_IMPORTED_MODULE_215__);
/* harmony import */ var core_js_modules_esnext_math_signbit_js__WEBPACK_IMPORTED_MODULE_216__ = __webpack_require__(/*! core-js/modules/esnext.math.signbit.js */ "../node_modules/core-js/modules/esnext.math.signbit.js");
/* harmony import */ var core_js_modules_esnext_math_signbit_js__WEBPACK_IMPORTED_MODULE_216___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_math_signbit_js__WEBPACK_IMPORTED_MODULE_216__);
/* harmony import */ var core_js_modules_esnext_math_umulh_js__WEBPACK_IMPORTED_MODULE_217__ = __webpack_require__(/*! core-js/modules/esnext.math.umulh.js */ "../node_modules/core-js/modules/esnext.math.umulh.js");
/* harmony import */ var core_js_modules_esnext_math_umulh_js__WEBPACK_IMPORTED_MODULE_217___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_math_umulh_js__WEBPACK_IMPORTED_MODULE_217__);
/* harmony import */ var core_js_modules_esnext_number_from_string_js__WEBPACK_IMPORTED_MODULE_218__ = __webpack_require__(/*! core-js/modules/esnext.number.from-string.js */ "../node_modules/core-js/modules/esnext.number.from-string.js");
/* harmony import */ var core_js_modules_esnext_number_from_string_js__WEBPACK_IMPORTED_MODULE_218___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_number_from_string_js__WEBPACK_IMPORTED_MODULE_218__);
/* harmony import */ var core_js_modules_esnext_observable_js__WEBPACK_IMPORTED_MODULE_219__ = __webpack_require__(/*! core-js/modules/esnext.observable.js */ "../node_modules/core-js/modules/esnext.observable.js");
/* harmony import */ var core_js_modules_esnext_observable_js__WEBPACK_IMPORTED_MODULE_219___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_observable_js__WEBPACK_IMPORTED_MODULE_219__);
/* harmony import */ var core_js_modules_esnext_promise_all_settled_js__WEBPACK_IMPORTED_MODULE_220__ = __webpack_require__(/*! core-js/modules/esnext.promise.all-settled.js */ "../node_modules/core-js/modules/esnext.promise.all-settled.js");
/* harmony import */ var core_js_modules_esnext_promise_all_settled_js__WEBPACK_IMPORTED_MODULE_220___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_promise_all_settled_js__WEBPACK_IMPORTED_MODULE_220__);
/* harmony import */ var core_js_modules_esnext_promise_any_js__WEBPACK_IMPORTED_MODULE_221__ = __webpack_require__(/*! core-js/modules/esnext.promise.any.js */ "../node_modules/core-js/modules/esnext.promise.any.js");
/* harmony import */ var core_js_modules_esnext_promise_any_js__WEBPACK_IMPORTED_MODULE_221___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_promise_any_js__WEBPACK_IMPORTED_MODULE_221__);
/* harmony import */ var core_js_modules_esnext_promise_try_js__WEBPACK_IMPORTED_MODULE_222__ = __webpack_require__(/*! core-js/modules/esnext.promise.try.js */ "../node_modules/core-js/modules/esnext.promise.try.js");
/* harmony import */ var core_js_modules_esnext_promise_try_js__WEBPACK_IMPORTED_MODULE_222___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_promise_try_js__WEBPACK_IMPORTED_MODULE_222__);
/* harmony import */ var core_js_modules_esnext_reflect_define_metadata_js__WEBPACK_IMPORTED_MODULE_223__ = __webpack_require__(/*! core-js/modules/esnext.reflect.define-metadata.js */ "../node_modules/core-js/modules/esnext.reflect.define-metadata.js");
/* harmony import */ var core_js_modules_esnext_reflect_define_metadata_js__WEBPACK_IMPORTED_MODULE_223___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_reflect_define_metadata_js__WEBPACK_IMPORTED_MODULE_223__);
/* harmony import */ var core_js_modules_esnext_reflect_delete_metadata_js__WEBPACK_IMPORTED_MODULE_224__ = __webpack_require__(/*! core-js/modules/esnext.reflect.delete-metadata.js */ "../node_modules/core-js/modules/esnext.reflect.delete-metadata.js");
/* harmony import */ var core_js_modules_esnext_reflect_delete_metadata_js__WEBPACK_IMPORTED_MODULE_224___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_reflect_delete_metadata_js__WEBPACK_IMPORTED_MODULE_224__);
/* harmony import */ var core_js_modules_esnext_reflect_get_metadata_js__WEBPACK_IMPORTED_MODULE_225__ = __webpack_require__(/*! core-js/modules/esnext.reflect.get-metadata.js */ "../node_modules/core-js/modules/esnext.reflect.get-metadata.js");
/* harmony import */ var core_js_modules_esnext_reflect_get_metadata_js__WEBPACK_IMPORTED_MODULE_225___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_reflect_get_metadata_js__WEBPACK_IMPORTED_MODULE_225__);
/* harmony import */ var core_js_modules_esnext_reflect_get_metadata_keys_js__WEBPACK_IMPORTED_MODULE_226__ = __webpack_require__(/*! core-js/modules/esnext.reflect.get-metadata-keys.js */ "../node_modules/core-js/modules/esnext.reflect.get-metadata-keys.js");
/* harmony import */ var core_js_modules_esnext_reflect_get_metadata_keys_js__WEBPACK_IMPORTED_MODULE_226___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_reflect_get_metadata_keys_js__WEBPACK_IMPORTED_MODULE_226__);
/* harmony import */ var core_js_modules_esnext_reflect_get_own_metadata_js__WEBPACK_IMPORTED_MODULE_227__ = __webpack_require__(/*! core-js/modules/esnext.reflect.get-own-metadata.js */ "../node_modules/core-js/modules/esnext.reflect.get-own-metadata.js");
/* harmony import */ var core_js_modules_esnext_reflect_get_own_metadata_js__WEBPACK_IMPORTED_MODULE_227___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_reflect_get_own_metadata_js__WEBPACK_IMPORTED_MODULE_227__);
/* harmony import */ var core_js_modules_esnext_reflect_get_own_metadata_keys_js__WEBPACK_IMPORTED_MODULE_228__ = __webpack_require__(/*! core-js/modules/esnext.reflect.get-own-metadata-keys.js */ "../node_modules/core-js/modules/esnext.reflect.get-own-metadata-keys.js");
/* harmony import */ var core_js_modules_esnext_reflect_get_own_metadata_keys_js__WEBPACK_IMPORTED_MODULE_228___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_reflect_get_own_metadata_keys_js__WEBPACK_IMPORTED_MODULE_228__);
/* harmony import */ var core_js_modules_esnext_reflect_has_metadata_js__WEBPACK_IMPORTED_MODULE_229__ = __webpack_require__(/*! core-js/modules/esnext.reflect.has-metadata.js */ "../node_modules/core-js/modules/esnext.reflect.has-metadata.js");
/* harmony import */ var core_js_modules_esnext_reflect_has_metadata_js__WEBPACK_IMPORTED_MODULE_229___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_reflect_has_metadata_js__WEBPACK_IMPORTED_MODULE_229__);
/* harmony import */ var core_js_modules_esnext_reflect_has_own_metadata_js__WEBPACK_IMPORTED_MODULE_230__ = __webpack_require__(/*! core-js/modules/esnext.reflect.has-own-metadata.js */ "../node_modules/core-js/modules/esnext.reflect.has-own-metadata.js");
/* harmony import */ var core_js_modules_esnext_reflect_has_own_metadata_js__WEBPACK_IMPORTED_MODULE_230___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_reflect_has_own_metadata_js__WEBPACK_IMPORTED_MODULE_230__);
/* harmony import */ var core_js_modules_esnext_reflect_metadata_js__WEBPACK_IMPORTED_MODULE_231__ = __webpack_require__(/*! core-js/modules/esnext.reflect.metadata.js */ "../node_modules/core-js/modules/esnext.reflect.metadata.js");
/* harmony import */ var core_js_modules_esnext_reflect_metadata_js__WEBPACK_IMPORTED_MODULE_231___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_reflect_metadata_js__WEBPACK_IMPORTED_MODULE_231__);
/* harmony import */ var core_js_modules_esnext_set_add_all_js__WEBPACK_IMPORTED_MODULE_232__ = __webpack_require__(/*! core-js/modules/esnext.set.add-all.js */ "../node_modules/core-js/modules/esnext.set.add-all.js");
/* harmony import */ var core_js_modules_esnext_set_add_all_js__WEBPACK_IMPORTED_MODULE_232___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_add_all_js__WEBPACK_IMPORTED_MODULE_232__);
/* harmony import */ var core_js_modules_esnext_set_delete_all_js__WEBPACK_IMPORTED_MODULE_233__ = __webpack_require__(/*! core-js/modules/esnext.set.delete-all.js */ "../node_modules/core-js/modules/esnext.set.delete-all.js");
/* harmony import */ var core_js_modules_esnext_set_delete_all_js__WEBPACK_IMPORTED_MODULE_233___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_delete_all_js__WEBPACK_IMPORTED_MODULE_233__);
/* harmony import */ var core_js_modules_esnext_set_difference_js__WEBPACK_IMPORTED_MODULE_234__ = __webpack_require__(/*! core-js/modules/esnext.set.difference.js */ "../node_modules/core-js/modules/esnext.set.difference.js");
/* harmony import */ var core_js_modules_esnext_set_difference_js__WEBPACK_IMPORTED_MODULE_234___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_difference_js__WEBPACK_IMPORTED_MODULE_234__);
/* harmony import */ var core_js_modules_esnext_set_every_js__WEBPACK_IMPORTED_MODULE_235__ = __webpack_require__(/*! core-js/modules/esnext.set.every.js */ "../node_modules/core-js/modules/esnext.set.every.js");
/* harmony import */ var core_js_modules_esnext_set_every_js__WEBPACK_IMPORTED_MODULE_235___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_every_js__WEBPACK_IMPORTED_MODULE_235__);
/* harmony import */ var core_js_modules_esnext_set_filter_js__WEBPACK_IMPORTED_MODULE_236__ = __webpack_require__(/*! core-js/modules/esnext.set.filter.js */ "../node_modules/core-js/modules/esnext.set.filter.js");
/* harmony import */ var core_js_modules_esnext_set_filter_js__WEBPACK_IMPORTED_MODULE_236___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_filter_js__WEBPACK_IMPORTED_MODULE_236__);
/* harmony import */ var core_js_modules_esnext_set_find_js__WEBPACK_IMPORTED_MODULE_237__ = __webpack_require__(/*! core-js/modules/esnext.set.find.js */ "../node_modules/core-js/modules/esnext.set.find.js");
/* harmony import */ var core_js_modules_esnext_set_find_js__WEBPACK_IMPORTED_MODULE_237___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_find_js__WEBPACK_IMPORTED_MODULE_237__);
/* harmony import */ var core_js_modules_esnext_set_from_js__WEBPACK_IMPORTED_MODULE_238__ = __webpack_require__(/*! core-js/modules/esnext.set.from.js */ "../node_modules/core-js/modules/esnext.set.from.js");
/* harmony import */ var core_js_modules_esnext_set_from_js__WEBPACK_IMPORTED_MODULE_238___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_from_js__WEBPACK_IMPORTED_MODULE_238__);
/* harmony import */ var core_js_modules_esnext_set_intersection_js__WEBPACK_IMPORTED_MODULE_239__ = __webpack_require__(/*! core-js/modules/esnext.set.intersection.js */ "../node_modules/core-js/modules/esnext.set.intersection.js");
/* harmony import */ var core_js_modules_esnext_set_intersection_js__WEBPACK_IMPORTED_MODULE_239___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_intersection_js__WEBPACK_IMPORTED_MODULE_239__);
/* harmony import */ var core_js_modules_esnext_set_is_disjoint_from_js__WEBPACK_IMPORTED_MODULE_240__ = __webpack_require__(/*! core-js/modules/esnext.set.is-disjoint-from.js */ "../node_modules/core-js/modules/esnext.set.is-disjoint-from.js");
/* harmony import */ var core_js_modules_esnext_set_is_disjoint_from_js__WEBPACK_IMPORTED_MODULE_240___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_is_disjoint_from_js__WEBPACK_IMPORTED_MODULE_240__);
/* harmony import */ var core_js_modules_esnext_set_is_subset_of_js__WEBPACK_IMPORTED_MODULE_241__ = __webpack_require__(/*! core-js/modules/esnext.set.is-subset-of.js */ "../node_modules/core-js/modules/esnext.set.is-subset-of.js");
/* harmony import */ var core_js_modules_esnext_set_is_subset_of_js__WEBPACK_IMPORTED_MODULE_241___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_is_subset_of_js__WEBPACK_IMPORTED_MODULE_241__);
/* harmony import */ var core_js_modules_esnext_set_is_superset_of_js__WEBPACK_IMPORTED_MODULE_242__ = __webpack_require__(/*! core-js/modules/esnext.set.is-superset-of.js */ "../node_modules/core-js/modules/esnext.set.is-superset-of.js");
/* harmony import */ var core_js_modules_esnext_set_is_superset_of_js__WEBPACK_IMPORTED_MODULE_242___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_is_superset_of_js__WEBPACK_IMPORTED_MODULE_242__);
/* harmony import */ var core_js_modules_esnext_set_join_js__WEBPACK_IMPORTED_MODULE_243__ = __webpack_require__(/*! core-js/modules/esnext.set.join.js */ "../node_modules/core-js/modules/esnext.set.join.js");
/* harmony import */ var core_js_modules_esnext_set_join_js__WEBPACK_IMPORTED_MODULE_243___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_join_js__WEBPACK_IMPORTED_MODULE_243__);
/* harmony import */ var core_js_modules_esnext_set_map_js__WEBPACK_IMPORTED_MODULE_244__ = __webpack_require__(/*! core-js/modules/esnext.set.map.js */ "../node_modules/core-js/modules/esnext.set.map.js");
/* harmony import */ var core_js_modules_esnext_set_map_js__WEBPACK_IMPORTED_MODULE_244___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_map_js__WEBPACK_IMPORTED_MODULE_244__);
/* harmony import */ var core_js_modules_esnext_set_of_js__WEBPACK_IMPORTED_MODULE_245__ = __webpack_require__(/*! core-js/modules/esnext.set.of.js */ "../node_modules/core-js/modules/esnext.set.of.js");
/* harmony import */ var core_js_modules_esnext_set_of_js__WEBPACK_IMPORTED_MODULE_245___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_of_js__WEBPACK_IMPORTED_MODULE_245__);
/* harmony import */ var core_js_modules_esnext_set_reduce_js__WEBPACK_IMPORTED_MODULE_246__ = __webpack_require__(/*! core-js/modules/esnext.set.reduce.js */ "../node_modules/core-js/modules/esnext.set.reduce.js");
/* harmony import */ var core_js_modules_esnext_set_reduce_js__WEBPACK_IMPORTED_MODULE_246___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_reduce_js__WEBPACK_IMPORTED_MODULE_246__);
/* harmony import */ var core_js_modules_esnext_set_some_js__WEBPACK_IMPORTED_MODULE_247__ = __webpack_require__(/*! core-js/modules/esnext.set.some.js */ "../node_modules/core-js/modules/esnext.set.some.js");
/* harmony import */ var core_js_modules_esnext_set_some_js__WEBPACK_IMPORTED_MODULE_247___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_some_js__WEBPACK_IMPORTED_MODULE_247__);
/* harmony import */ var core_js_modules_esnext_set_symmetric_difference_js__WEBPACK_IMPORTED_MODULE_248__ = __webpack_require__(/*! core-js/modules/esnext.set.symmetric-difference.js */ "../node_modules/core-js/modules/esnext.set.symmetric-difference.js");
/* harmony import */ var core_js_modules_esnext_set_symmetric_difference_js__WEBPACK_IMPORTED_MODULE_248___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_symmetric_difference_js__WEBPACK_IMPORTED_MODULE_248__);
/* harmony import */ var core_js_modules_esnext_set_union_js__WEBPACK_IMPORTED_MODULE_249__ = __webpack_require__(/*! core-js/modules/esnext.set.union.js */ "../node_modules/core-js/modules/esnext.set.union.js");
/* harmony import */ var core_js_modules_esnext_set_union_js__WEBPACK_IMPORTED_MODULE_249___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_set_union_js__WEBPACK_IMPORTED_MODULE_249__);
/* harmony import */ var core_js_modules_esnext_string_at_js__WEBPACK_IMPORTED_MODULE_250__ = __webpack_require__(/*! core-js/modules/esnext.string.at.js */ "../node_modules/core-js/modules/esnext.string.at.js");
/* harmony import */ var core_js_modules_esnext_string_at_js__WEBPACK_IMPORTED_MODULE_250___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_string_at_js__WEBPACK_IMPORTED_MODULE_250__);
/* harmony import */ var core_js_modules_esnext_string_code_points_js__WEBPACK_IMPORTED_MODULE_251__ = __webpack_require__(/*! core-js/modules/esnext.string.code-points.js */ "../node_modules/core-js/modules/esnext.string.code-points.js");
/* harmony import */ var core_js_modules_esnext_string_code_points_js__WEBPACK_IMPORTED_MODULE_251___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_string_code_points_js__WEBPACK_IMPORTED_MODULE_251__);
/* harmony import */ var core_js_modules_esnext_string_match_all_js__WEBPACK_IMPORTED_MODULE_252__ = __webpack_require__(/*! core-js/modules/esnext.string.match-all.js */ "../node_modules/core-js/modules/esnext.string.match-all.js");
/* harmony import */ var core_js_modules_esnext_string_match_all_js__WEBPACK_IMPORTED_MODULE_252___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_string_match_all_js__WEBPACK_IMPORTED_MODULE_252__);
/* harmony import */ var core_js_modules_esnext_string_replace_all_js__WEBPACK_IMPORTED_MODULE_253__ = __webpack_require__(/*! core-js/modules/esnext.string.replace-all.js */ "../node_modules/core-js/modules/esnext.string.replace-all.js");
/* harmony import */ var core_js_modules_esnext_string_replace_all_js__WEBPACK_IMPORTED_MODULE_253___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_string_replace_all_js__WEBPACK_IMPORTED_MODULE_253__);
/* harmony import */ var core_js_modules_esnext_symbol_dispose_js__WEBPACK_IMPORTED_MODULE_254__ = __webpack_require__(/*! core-js/modules/esnext.symbol.dispose.js */ "../node_modules/core-js/modules/esnext.symbol.dispose.js");
/* harmony import */ var core_js_modules_esnext_symbol_dispose_js__WEBPACK_IMPORTED_MODULE_254___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_symbol_dispose_js__WEBPACK_IMPORTED_MODULE_254__);
/* harmony import */ var core_js_modules_esnext_symbol_observable_js__WEBPACK_IMPORTED_MODULE_255__ = __webpack_require__(/*! core-js/modules/esnext.symbol.observable.js */ "../node_modules/core-js/modules/esnext.symbol.observable.js");
/* harmony import */ var core_js_modules_esnext_symbol_observable_js__WEBPACK_IMPORTED_MODULE_255___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_symbol_observable_js__WEBPACK_IMPORTED_MODULE_255__);
/* harmony import */ var core_js_modules_esnext_symbol_pattern_match_js__WEBPACK_IMPORTED_MODULE_256__ = __webpack_require__(/*! core-js/modules/esnext.symbol.pattern-match.js */ "../node_modules/core-js/modules/esnext.symbol.pattern-match.js");
/* harmony import */ var core_js_modules_esnext_symbol_pattern_match_js__WEBPACK_IMPORTED_MODULE_256___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_symbol_pattern_match_js__WEBPACK_IMPORTED_MODULE_256__);
/* harmony import */ var core_js_modules_esnext_weak_map_delete_all_js__WEBPACK_IMPORTED_MODULE_257__ = __webpack_require__(/*! core-js/modules/esnext.weak-map.delete-all.js */ "../node_modules/core-js/modules/esnext.weak-map.delete-all.js");
/* harmony import */ var core_js_modules_esnext_weak_map_delete_all_js__WEBPACK_IMPORTED_MODULE_257___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_weak_map_delete_all_js__WEBPACK_IMPORTED_MODULE_257__);
/* harmony import */ var core_js_modules_esnext_weak_map_from_js__WEBPACK_IMPORTED_MODULE_258__ = __webpack_require__(/*! core-js/modules/esnext.weak-map.from.js */ "../node_modules/core-js/modules/esnext.weak-map.from.js");
/* harmony import */ var core_js_modules_esnext_weak_map_from_js__WEBPACK_IMPORTED_MODULE_258___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_weak_map_from_js__WEBPACK_IMPORTED_MODULE_258__);
/* harmony import */ var core_js_modules_esnext_weak_map_of_js__WEBPACK_IMPORTED_MODULE_259__ = __webpack_require__(/*! core-js/modules/esnext.weak-map.of.js */ "../node_modules/core-js/modules/esnext.weak-map.of.js");
/* harmony import */ var core_js_modules_esnext_weak_map_of_js__WEBPACK_IMPORTED_MODULE_259___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_weak_map_of_js__WEBPACK_IMPORTED_MODULE_259__);
/* harmony import */ var core_js_modules_esnext_weak_set_add_all_js__WEBPACK_IMPORTED_MODULE_260__ = __webpack_require__(/*! core-js/modules/esnext.weak-set.add-all.js */ "../node_modules/core-js/modules/esnext.weak-set.add-all.js");
/* harmony import */ var core_js_modules_esnext_weak_set_add_all_js__WEBPACK_IMPORTED_MODULE_260___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_weak_set_add_all_js__WEBPACK_IMPORTED_MODULE_260__);
/* harmony import */ var core_js_modules_esnext_weak_set_delete_all_js__WEBPACK_IMPORTED_MODULE_261__ = __webpack_require__(/*! core-js/modules/esnext.weak-set.delete-all.js */ "../node_modules/core-js/modules/esnext.weak-set.delete-all.js");
/* harmony import */ var core_js_modules_esnext_weak_set_delete_all_js__WEBPACK_IMPORTED_MODULE_261___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_weak_set_delete_all_js__WEBPACK_IMPORTED_MODULE_261__);
/* harmony import */ var core_js_modules_esnext_weak_set_from_js__WEBPACK_IMPORTED_MODULE_262__ = __webpack_require__(/*! core-js/modules/esnext.weak-set.from.js */ "../node_modules/core-js/modules/esnext.weak-set.from.js");
/* harmony import */ var core_js_modules_esnext_weak_set_from_js__WEBPACK_IMPORTED_MODULE_262___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_weak_set_from_js__WEBPACK_IMPORTED_MODULE_262__);
/* harmony import */ var core_js_modules_esnext_weak_set_of_js__WEBPACK_IMPORTED_MODULE_263__ = __webpack_require__(/*! core-js/modules/esnext.weak-set.of.js */ "../node_modules/core-js/modules/esnext.weak-set.of.js");
/* harmony import */ var core_js_modules_esnext_weak_set_of_js__WEBPACK_IMPORTED_MODULE_263___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_weak_set_of_js__WEBPACK_IMPORTED_MODULE_263__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_264__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "../node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_264___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_264__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_265__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "../node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_265___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_265__);
/* harmony import */ var core_js_modules_web_immediate_js__WEBPACK_IMPORTED_MODULE_266__ = __webpack_require__(/*! core-js/modules/web.immediate.js */ "../node_modules/core-js/modules/web.immediate.js");
/* harmony import */ var core_js_modules_web_immediate_js__WEBPACK_IMPORTED_MODULE_266___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_immediate_js__WEBPACK_IMPORTED_MODULE_266__);
/* harmony import */ var core_js_modules_web_queue_microtask_js__WEBPACK_IMPORTED_MODULE_267__ = __webpack_require__(/*! core-js/modules/web.queue-microtask.js */ "../node_modules/core-js/modules/web.queue-microtask.js");
/* harmony import */ var core_js_modules_web_queue_microtask_js__WEBPACK_IMPORTED_MODULE_267___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_queue_microtask_js__WEBPACK_IMPORTED_MODULE_267__);
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_268__ = __webpack_require__(/*! core-js/modules/web.url.js */ "../node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_268___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_268__);
/* harmony import */ var core_js_modules_web_url_to_json_js__WEBPACK_IMPORTED_MODULE_269__ = __webpack_require__(/*! core-js/modules/web.url.to-json.js */ "../node_modules/core-js/modules/web.url.to-json.js");
/* harmony import */ var core_js_modules_web_url_to_json_js__WEBPACK_IMPORTED_MODULE_269___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_to_json_js__WEBPACK_IMPORTED_MODULE_269__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_270__ = __webpack_require__(/*! core-js/modules/web.url-search-params.js */ "../node_modules/core-js/modules/web.url-search-params.js");
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_270___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_270__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_271__ = __webpack_require__(/*! regenerator-runtime/runtime */ "../node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_271___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_271__);
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_272__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ "../node_modules/bootstrap/dist/css/bootstrap.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_272___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_272__);
/* harmony import */ var billboard_js_dist_billboard_css__WEBPACK_IMPORTED_MODULE_273__ = __webpack_require__(/*! billboard.js/dist/billboard.css */ "../node_modules/billboard.js/dist/billboard.css");
/* harmony import */ var billboard_js_dist_billboard_css__WEBPACK_IMPORTED_MODULE_273___default = /*#__PURE__*/__webpack_require__.n(billboard_js_dist_billboard_css__WEBPACK_IMPORTED_MODULE_273__);
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_274__ = __webpack_require__(/*! ../styles/main.css */ "./styles/main.css");
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_274___default = /*#__PURE__*/__webpack_require__.n(_styles_main_css__WEBPACK_IMPORTED_MODULE_274__);
/* harmony import */ var _styles_icons_css__WEBPACK_IMPORTED_MODULE_275__ = __webpack_require__(/*! ../styles/icons.css */ "./styles/icons.css");
/* harmony import */ var _styles_icons_css__WEBPACK_IMPORTED_MODULE_275___default = /*#__PURE__*/__webpack_require__.n(_styles_icons_css__WEBPACK_IMPORTED_MODULE_275__);
/* harmony import */ var _styles_social_css__WEBPACK_IMPORTED_MODULE_276__ = __webpack_require__(/*! ../styles/social.css */ "./styles/social.css");
/* harmony import */ var _styles_social_css__WEBPACK_IMPORTED_MODULE_276___default = /*#__PURE__*/__webpack_require__.n(_styles_social_css__WEBPACK_IMPORTED_MODULE_276__);
/* harmony import */ var _styles_pub_specific_css__WEBPACK_IMPORTED_MODULE_277__ = __webpack_require__(/*! ../styles/pub_specific.css */ "./styles/pub_specific.css");
/* harmony import */ var _styles_pub_specific_css__WEBPACK_IMPORTED_MODULE_277___default = /*#__PURE__*/__webpack_require__.n(_styles_pub_specific_css__WEBPACK_IMPORTED_MODULE_277__);
/* harmony import */ var bootstrap_select_v4__WEBPACK_IMPORTED_MODULE_278__ = __webpack_require__(/*! bootstrap-select-v4 */ "../node_modules/bootstrap-select-v4/dist/js/bootstrap-select.js");
/* harmony import */ var bootstrap_select_v4__WEBPACK_IMPORTED_MODULE_278___default = /*#__PURE__*/__webpack_require__.n(bootstrap_select_v4__WEBPACK_IMPORTED_MODULE_278__);
/* harmony import */ var _node_modules_bootstrap_select_v4_dist_css_bootstrap_select_min_css__WEBPACK_IMPORTED_MODULE_279__ = __webpack_require__(/*! ../../node_modules/bootstrap-select-v4/dist/css/bootstrap-select.min.css */ "../node_modules/bootstrap-select-v4/dist/css/bootstrap-select.min.css");
/* harmony import */ var _node_modules_bootstrap_select_v4_dist_css_bootstrap_select_min_css__WEBPACK_IMPORTED_MODULE_279___default = /*#__PURE__*/__webpack_require__.n(_node_modules_bootstrap_select_v4_dist_css_bootstrap_select_min_css__WEBPACK_IMPORTED_MODULE_279__);
/* harmony import */ var _styles_dropdown_css__WEBPACK_IMPORTED_MODULE_280__ = __webpack_require__(/*! ../styles/dropdown.css */ "./styles/dropdown.css");
/* harmony import */ var _styles_dropdown_css__WEBPACK_IMPORTED_MODULE_280___default = /*#__PURE__*/__webpack_require__.n(_styles_dropdown_css__WEBPACK_IMPORTED_MODULE_280__);
/* harmony import */ var jquery_csv__WEBPACK_IMPORTED_MODULE_281__ = __webpack_require__(/*! jquery-csv */ "../node_modules/jquery-csv/src/jquery.csv.js");
/* harmony import */ var jquery_csv__WEBPACK_IMPORTED_MODULE_281___default = /*#__PURE__*/__webpack_require__.n(jquery_csv__WEBPACK_IMPORTED_MODULE_281__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_282__ = __webpack_require__(/*! d3 */ "../node_modules/d3/index.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_283__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "../node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_284__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "../node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_285__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "../node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_286__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "../node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var _lang__WEBPACK_IMPORTED_MODULE_287__ = __webpack_require__(/*! ./lang */ "./scripts/lang.js");
/* harmony import */ var billboard_js__WEBPACK_IMPORTED_MODULE_288__ = __webpack_require__(/*! billboard.js */ "../node_modules/billboard.js/dist/billboard.js");
/* harmony import */ var billboard_js__WEBPACK_IMPORTED_MODULE_288___default = /*#__PURE__*/__webpack_require__.n(billboard_js__WEBPACK_IMPORTED_MODULE_288__);
/* harmony import */ var _components_social__WEBPACK_IMPORTED_MODULE_289__ = __webpack_require__(/*! ./components/social */ "./scripts/components/social.js");
/* harmony import */ var _localizeservice__WEBPACK_IMPORTED_MODULE_290__ = __webpack_require__(/*! ./localizeservice */ "./scripts/localizeservice.js");
/* harmony import */ var _dataservice__WEBPACK_IMPORTED_MODULE_291__ = __webpack_require__(/*! ./dataservice */ "./scripts/dataservice.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_292__ = __webpack_require__(/*! ./storage */ "./scripts/storage.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_292___default = /*#__PURE__*/__webpack_require__.n(_storage__WEBPACK_IMPORTED_MODULE_292__);
/* harmony import */ var _components_utils__WEBPACK_IMPORTED_MODULE_293__ = __webpack_require__(/*! ./components/utils */ "./scripts/components/utils.js");
/* harmony import */ var _components_ui_component__WEBPACK_IMPORTED_MODULE_294__ = __webpack_require__(/*! ./components/ui-component */ "./scripts/components/ui-component.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }



























































































































































































































































































var appData = __webpack_require__(/*! ../../../configs/energy/energy_04_03_01/indicator.js */ "../../configs/energy/energy_04_03_01/indicator.js");

var configFile = __webpack_require__(/*! ../../../configs/configuration.js */ "../../configs/configuration.js");

var constants = configFile.configuration.data;

window.data = configFile;
window.currentId = "energy_04_03_01";
window.indicators = appData.visData;













_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_283__["library"].add(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_284__["faTwitter"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_284__["faFacebookF"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_285__["faCircle"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_285__["faSquare"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_286__["faSquare"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_285__["faShareAlt"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_285__["faSpinner"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_285__["faInfo"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_285__["faCode"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_285__["faCheck"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_286__["faCheckSquare"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_285__["faSortUp"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_285__["faSortDown"], _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_285__["faSort"]);
var CHECKED_FA_HTML = '<span class="fa-layers"><i class="fas fa-square" data-fa-transform="grow-8"></i><i class="fas fa-check fa-inverse" data-fa-transform="shrink-2"></i></span>';
var UNCHECKED_FA_HTML = '<span class="fa-layers"><i class="far fa-square" style="color:grey" data-fa-transform="grow-8"></i></span>';
/*

var defaultAppId = "eumove_01_01_01";
var appId = getParameterValue("id") == "" ? defaultAppId : getParameterValue("id");

var appsId = Object.keys(window.appData);
var currentId = defaultAppId;

var urlPaths = window.location.href.split("/");
var urlLastFolder = urlPaths[urlPaths.length - 2];
urlLastFolder = urlLastFolder.replace("DIR_", "");

if (getParameterValue("id") != "" && inIframe() == false) {
    currentId = getParameterValue("id");
} else if (appsId.indexOf(urlLastFolder) != -1) {
    currentId = urlLastFolder;
}


window.currentId = currentId;
window.indicators = window.appData[currentId];
*/

var config = configFile.configuration;
var chart;
var UIComponentHeight;
var groupsNames = [];
var groups = [];
var groupsMapping = [];
var groupsColors = {};
var groupsTypes = {};
var dataColors;
var color;
var displayed;
var data;
var dataNotCorrected;
var arrayNotCorrected;
var arrayGrouped;
var dataColumns;
var countries = [];
var countriesCodes = [];
var arrayNoData = [];
var currentCategory = 0;
var currentSorting = "";
var selectedCountry = Object(_lang__WEBPACK_IMPORTED_MODULE_287__["getParameterValue"])("country") != "" && Object(_lang__WEBPACK_IMPORTED_MODULE_287__["getParameterValue"])("country") != null ? Object(_lang__WEBPACK_IMPORTED_MODULE_287__["getParameterValue"])("country") : "";
var selectedSortProperty = config.defaultSortProperty;
var selectedSortDirection = config.defaultSortDirection;
var hide = groups;
var legendItems;
var legendContent;
var legendHide = true;
var rtime;
var timeout = false;
var delta = 100;
var indexDataToNotTouch = null;
var dataFile = [];
var dataFileFiltered = [];
var simpleMode = indicators[currentCategory].disregardSimpleMode != null ? false : Object(_lang__WEBPACK_IMPORTED_MODULE_287__["getParameterValue"])("simple") != null && Object(_lang__WEBPACK_IMPORTED_MODULE_287__["getParameterValue"])("simple") === "true";
$(window).resize(function () {
  rtime = new Date();

  if (timeout === false) {
    timeout = true;
    setTimeout(resizeend, delta);
  }
});

function resizeend() {
  if (new Date() - rtime < delta) {
    setTimeout(resizeend, delta);
  } else {
    timeout = false; // alert('Done resizing');

    resize();
  }
}

d3__WEBPACK_IMPORTED_MODULE_282__["selection"].prototype.moveToBack = function () {
  return this.each(function () {
    var firstChild = this.parentNode.firstChild;

    if (firstChild) {
      this.parentNode.insertBefore(this, firstChild);
    }
  });
};

window.onorientationchange = function () {
  setTimeout(resizeend, 200);
};

var parentFrame;

function resizeParentFrame() {
  var height = document.getElementById("global").offsetHeight;

  if (parentFrame) {
    parentFrame.style.height = height + 20 + "px";
    return;
  }

  var ifs = window.top.document.getElementsByTagName("iframe");

  for (var i = 0, len = ifs.length; i < len; i++) {
    var f = ifs[i];

    if (window.location.href.includes($(f).attr("src"))) {
      parentFrame = f;
      f.style.height = height + "px";
    }
  }
}

function resize() {
  if (indicators[currentCategory].chartType == "scatter") {//return;
  }

  if ($(document).innerWidth() < 600 && indicators[0].resizeParentFrame) {
    resizeParentFrame();

    if (window.self !== window.top) {
      $("body, html").css("overflow-y", "hidden");
    }

    return;
  }

  $("#chart").html("");
  init();
}

function addNSILogo() {
  if (Object(_lang__WEBPACK_IMPORTED_MODULE_287__["_"])("imgYourLogo").length > 0) {
    var img = Object(_lang__WEBPACK_IMPORTED_MODULE_287__["_"])("imgYourLogo");

    var height = $("#estatLogo").height() * 0.6;
    $("#nsiConteiner").html(img);
    $("#nsiConteiner img").css("height", height);
  } else {
    $("#logo-desktop").attr("href", "");
  }
}

$(function () {
  _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_283__["dom"].watch();
  $('#logo-desktop').click(function (e) {
    e.preventDefault(); //do other stuff when a click happens
  }); // config.searchPseudoElements = true;

  if (indicators[currentCategory].displaySharing != "always" && simpleMode) {
    $("#navbar, #icons-container").hide();
  }

  if (indicators[currentCategory].displayCookieConsent && indicators[currentCategory].displayCookieConsent == true) {
    $("#cookies-link").show();
  } else {
    $(".col.side").hide();
  }

  Object(_localizeservice__WEBPACK_IMPORTED_MODULE_290__["setupLocalisation"])();
  addNSILogo();
  Object(_lang__WEBPACK_IMPORTED_MODULE_287__["translateAll"])();
  document.title = Object(_lang__WEBPACK_IMPORTED_MODULE_287__["_"])("document.title");
  initDefaultValues();

  var callback = function callback() {
    $("#loader").hide();
    window.categorySelected = 0;
    Object(_localizeservice__WEBPACK_IMPORTED_MODULE_290__["localiseInterface"])();

    if (indicators[currentCategory].UISelectInd == "Icons") {
      Object(_components_ui_component__WEBPACK_IMPORTED_MODULE_294__["createIndSelectionBigIcons"])();
    } else if (indicators[currentCategory].UISelectInd == "Select") {
      Object(_components_ui_component__WEBPACK_IMPORTED_MODULE_294__["createIndSelectionSelectbox"])();
    } else {
      Object(_components_ui_component__WEBPACK_IMPORTED_MODULE_294__["createIndSelectionCheckBoxes"])();
    }

    Object(_components_social__WEBPACK_IMPORTED_MODULE_289__["default"])();
    processData(currentCategory, currentSorting, null);
  };

  if (indicators[currentCategory].dataType == "file") {
    loadDataFromFile(function () {
      callback();
    });
  } else {
    jQuery.when(Object(_dataservice__WEBPACK_IMPORTED_MODULE_291__["default"])(0)).done(function () {
      callback();
    }).fail(function (error) {
      console.log('error while retrieving data', error);
    });
  }

  Object(_components_ui_component__WEBPACK_IMPORTED_MODULE_294__["buildCustomList"])();

  if ($(document).innerWidth() < 600 && indicators[0].resizeParentFrame) {
    setTimeout(resizeParentFrame, 500);
    return;
  }
});

function loadDataFromFile(callback) {
  $.ajax({
    type: "GET",
    url: "data/data.csv",
    dataType: "text",
    success: function success(response) {
      dataFile = $.csv.toObjects(response, {
        "separator": ";"
      });
      callback();
    }
  });
}

function filterDataFile(filterKey, filterValue) {
  var dataTmp = dataFile.filter(function (el) {
    return el[filterKey] == filterValue;
  });
  var allKeyValue = indicators[currentCategory].grouping.groups.map(function (value) {
    return value.code;
  });
  dataFileFiltered = dataTmp.map(function (value) {
    delete value.Total;

    if (value[allKeyValue[0]] != "z" && value[allKeyValue[0]] != NaN) {
      value.Total = 100;
    } else if (indicators[currentCategory].chartType == "scatter") {
      value.Total = 100;
    }

    for (var i = 0; i < allKeyValue.length; i++) {
      var key = allKeyValue[i];
      var valueTmp = value[key];

      if (valueTmp && typeof valueTmp == "string" && valueTmp.indexOf(",") !== -1) {
        valueTmp = valueTmp.replace(",", ".");
      }

      if (valueTmp == "z" && indicators[currentCategory].chartType == "scatter") {
        valueTmp = 0;
      } else {}

      value[key] = valueTmp;
    }

    return value;
  });
  return dataFileFiltered;
}

function changeParams(paramName, value) {
  for (var indicatorIndex in indicators) {
    var indicator = indicators[indicatorIndex];
    var params = indicator.params;

    for (var key in params) {
      var param = params[key];

      if (key == paramName) {
        param.selected = value;
      }
    }
  }
}

function initDefaultValues() {
  groupsNames = [];
  groupsColors = {};
  groups = [];
  var params = indicators[currentCategory].params;

  for (var paramKey in params) {
    var param = params[paramKey];

    if (param.items) {
      if (param.urlParam && Object(_lang__WEBPACK_IMPORTED_MODULE_287__["getParameterValue"])(param.urlParam)) {
        changeParams(paramKey, Object(_lang__WEBPACK_IMPORTED_MODULE_287__["getParameterValue"])(param.urlParam));
      }
    }
  }

  var grouping = indicators[currentCategory].grouping;
  currentSorting = grouping.default;
  var iterator = 1; // add all groups we need

  for (var group in grouping.groups) {
    var currData = "data" + iterator;

    if (grouping.groups[group].code == currentSorting) {
      selectedSortProperty = currData;
    }

    groupsMapping[grouping.groups[group].code] = currData;
    groups.push(currData);
    groupsNames[currData] = grouping.groups[group].legend ? Object(_lang__WEBPACK_IMPORTED_MODULE_287__["_"])(grouping.groups[group].legend) : Object(_lang__WEBPACK_IMPORTED_MODULE_287__["_"])(grouping.groups[group].title);
    groupsColors[currData] = grouping.groups[group].color;

    if (grouping.groups[group].type && grouping.groups[group].type != "bar") {}

    groupsTypes[currData] = grouping.groups[group].type ? grouping.groups[group].type : "line";
    iterator++;
  }

  displayed = groups;
}

function initSortingCheckboxes() {
  $("#chartSort").html('<p class="sortby">							' + Object(_lang__WEBPACK_IMPORTED_MODULE_287__["_"])("sortBy.title") + ' </p>');
  var html = '';
  var grouping = indicators[currentCategory].grouping;

  for (var group in grouping.groups) {
    var opacity = currentSorting == grouping.groups[group].code ? 'style="opacity:1"' : 'style="opacity:0.3"';
    var icon = currentSorting == grouping.groups[group].code ? CHECKED_FA_HTML : UNCHECKED_FA_HTML;
    html += '<div class="checkbox checkbox-success" id="sort' + grouping.groups[group].code + '">' + icon + '<label for="checkboxSmall">' + Object(_lang__WEBPACK_IMPORTED_MODULE_287__["_"])(grouping.groups[group].title) + '</label></div>';
  }

  html += "";
  $("#chartSort").append(html);
  $("#chartSort ul li a").click(function () {
    var code = $(this).attr("href").replace("#", "");
    currentSorting = code;
    processData(window.categorySelected, currentSorting, null);
  });
  $("#chartSort div.checkbox").click(function () {
    var code = $(this).attr("id").replace("sort", "");
    currentSorting = code;
    processData(window.categorySelected, currentSorting, null);
  });
}

function initSortingColorBoxes() {
  $("#chartSort").html('');
  var html = '<ul>';
  var grouping = indicators[currentCategory].grouping;
  var iterator = 1;

  for (var group in grouping.groups) {
    var opacity = currentSorting == grouping.groups[group].code ? 'style="opacity:1"' : 'style="opacity:0.3"';
    html += '<li ' + opacity + ' ><a href="#' + grouping.groups[group].code + '"><div class="square" style="background-color:' + grouping.groups[group].color + '"></div>' + Object(_lang__WEBPACK_IMPORTED_MODULE_287__["_"])(grouping.groups[group].title) + '</li></a>';
  }

  html += "</ul>";
  $("#chartSort").append(html);
  $("#chartSort ul li a").click(function () {
    var code = $(this).attr("href").replace("#", "");
    currentSorting = code;
    processData(window.categorySelected, currentSorting, null);
  });
}

function indicatorClick(category) {
  $("#loader").show();
  currentCategory = category;
  initDefaultValues();

  var callback = function callback() {
    $("#loader").hide();
    window.categorySelected = category;
    var data = _storage__WEBPACK_IMPORTED_MODULE_292__["storage"].processedData[category]; // localise

    Object(_localizeservice__WEBPACK_IMPORTED_MODULE_290__["localiseInterface"])(category);
    processDataForCategory(category);
  };

  if (indicators[category].dataType == "file") {
    callback();
  } else {
    jQuery.when(Object(_dataservice__WEBPACK_IMPORTED_MODULE_291__["default"])(category)).done(function () {
      callback();
    }).fail(function (error) {
      console.log('error while retrieving data', error);
    });
  }
}

function processDataForCategory(category) {
  var sort = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : currentSorting;
  processData(category, sort, null);
}

function correctData2(data, sort) {
  //return data;
  var grouping = indicators[currentCategory].grouping;
  var groups = grouping.groups.map(function (a) {
    return a.code;
  }); //console.log(groups);

  var groupsRemaining = groups.filter(function (el) {
    return el != sort;
  }); //console.log("groupsRemaining");
  //console.log(groupsRemaining);

  var dataToCorrect = groupsRemaining[0];
  data.forEach(function (item) {
    //console.log(item);
    if (item[sort + "_UNTOUCHED"]) {
      item[sort] = item[sort + "_UNTOUCHED"];
      delete item[sort + "_UNTOUCHED"];
    }

    if (item[dataToCorrect + "_UNTOUCHED"] == undefined) {
      item[dataToCorrect + "_UNTOUCHED"] = item[dataToCorrect];
    }

    var allOtherVal = 0; // = item.filter(function(el) { console.log(el);return el != sort }); ;

    jQuery.each(item, function (name, value) {
      if (groups.indexOf(name) !== -1 && name !== dataToCorrect) {
        allOtherVal += parseFloat(value);
      }
    }); //console.log(item);

    item[dataToCorrect] = 100 - allOtherVal;
  });
  return data;
}

function processData(category, sort, countries2Ignore) {
  var direction = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "desc";
  countries2Ignore = countries2Ignore == null ? [] : countries2Ignore;
  var grouping = indicators[currentCategory].grouping;
  data = [];
  countries = [];
  countriesCodes = [];
  var array;

  if (indicators[category].dataType == "file") {
    var filterKey = indicators[category].dataFileFilter.filterKey;
    var filterValue = indicators[category].dataFileFilter.filterValue;
    array = filterDataFile(filterKey, filterValue);
  } else {
    var dataProcess = _storage__WEBPACK_IMPORTED_MODULE_292__["storage"].processedData[category];
    array = $.map(dataProcess, function (value, index) {
      return [value];
    });
  }

  var compareCustum = Object(_components_utils__WEBPACK_IMPORTED_MODULE_293__["compare"])(sort);
  var indexFrom = 0;
  arrayGrouped = [];
  arrayNoData = constants.countries;
  constants.countriesGroupped.forEach(function (arrayCountries) {
    var arrayCountriesWithoutRemove = arrayCountries;

    if (arrayCountriesWithoutRemove.length > 0) {
      var nbDataAvailable = Object(_components_utils__WEBPACK_IMPORTED_MODULE_293__["nbOfDavaAvailableForCountries"])(array, arrayCountries);
      var arrayDataTmp = array.slice(indexFrom, eval(indexFrom + nbDataAvailable));

      if (_typeof(indicators[currentCategory].correctDataTo100) == undefined || typeof indicators[currentCategory].correctDataTo100 == "undefined" || typeof indicators[currentCategory].correctDataTo100 == true) {
        arrayDataTmp = correctData2(arrayDataTmp, sort);
      }

      var arrayDataCleaned = [];
      arrayDataTmp = arrayDataTmp.filter(function (el) {
        return indicators[category].countries2Remove.indexOf(el.Geo) < 0 && countries2Ignore.indexOf(el.Geo) < 0;
      });
      arrayDataTmp.forEach(function (item) {
        //console.log(item);
        if (item.Total != undefined) {
          //console.log(item);
          arrayDataCleaned.push(item);
          var indexCountry = arrayNoData.indexOf(item.Geo);

          if (indexCountry > -1) {
            arrayNoData.splice(indexCountry, 1);
          }
        }
      });
      arrayDataCleaned = arrayDataCleaned.sort(compareCustum); //console.log(arrayDataCleaned);

      if (direction == "asc") {
        arrayDataCleaned = arrayDataCleaned.reverse();
      }

      if (nbDataAvailable > 0) {
        var _arrayGrouped;

        (_arrayGrouped = arrayGrouped).push.apply(_arrayGrouped, _toConsumableArray(arrayDataCleaned));

        arrayGrouped.push([]);
        indexFrom += nbDataAvailable;
      }
    }
  });
  arrayGrouped.forEach(function (item) {
    if (item != undefined && item.Geo != undefined && item.Total != undefined) {
      var arrDataItem = [];

      for (var groupIndex in grouping.groups) {
        var code = grouping.groups[groupIndex].code;
        arrDataItem.push(item[code]);
      }

      arrDataItem.push(item.Geo);
      /*
      console.log("****************");
      console.log("Push country "+item.Geo);
      console.log(item);
      */

      data.push(arrDataItem);
      countries.push(Object(_lang__WEBPACK_IMPORTED_MODULE_287__["_"])(item.Geo));
      countriesCodes.push(item.Geo);
    } else if (item.Geo == undefined && arrayGrouped[arrayGrouped.length - 1] != item) {
      data.push([null, null, null, ""]);
      countries.push(item.Geo);
      countriesCodes.push(item.Geo);
    }
  });
  data = [groups].concat(data);
  var dataCorrectedTmp = correctData(data);
  dataNotCorrected = data.splice(0);
  data = dataCorrectedTmp;

  if (window.parent !== window && window.parent.disableCountries) {
    window.parent.disableCountries(arrayNoData);
  }

  if ($("#chart svg").length) {
    chart.destroy();
    init();
  } else {
    init();
  }

  return;
} // Dirty fix to have all sum to 100 as some data in the dataset has 99.9 or 100.1 sum

function correctData(data) {
  var indexToNotChange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  //indexToNotChange = indexDataToNotTouch;
  //console.log("indexDataToNotTouch  = "+indexDataToNotTouch);
  var dataTmp = [];
  var iterator = 0;
  arrayNotCorrected = [];
  data.forEach(function (item) {
    var itempTmp = item.slice(0);
    var code = item[item.length - 1];
    var itempTmpSum = item.slice(0, item.length - 1);
    var sum = itempTmpSum.reduce(function (pv, cv) {
      return pv + cv;
    }, 0);
    dataTmp.push(itempTmp);
    iterator++;
  });
  return dataTmp;
}

function getDimensions() {
  var padding = 45;
  var h = window.innerHeight; // * 0.5 - padding,

  if (window.orientation == 90 || window.orientation == -90
  /*&& window.innerHeight < 600*/
  ) {
    h = Math.max(h, 800);
  } // w = window.innerWidth * 0.95, //mobile!


  var w = window.innerWidth; // * 0.9;

  var dim = {};
  dim.axisRotated = false;
  dim.padding = 50;
  dim.barwidth = window.innerHeigh > 700 ? 25 : 10;

  if (window.isMobile) {
    // Find matches
    var mql = window.matchMedia('(orientation: portrait)'); // If there are matches, we're in portrait

    if (mql.matches) {
      // Portrait orientation
      if (w > 321 && w <= 480) {
        dim.axisRotated = true; // h = 800;

        dim.h = h * 0.6 + 30;
        dim.w = w * 0.95;
      } else if (w <= 320) {
        dim.axisRotated = true;
        dim.h = h * 0.57;
      } else {
        // Landscape orientation
        // check also for ultrawide screens
        if (h <= 768 && w > 1200) {
          dim.h = h * 0.45;
        } else {
          dim.h = h * 0.53; // dim.h = h * 0.5;
        }
      }
    }
  } else {
    if (h < 550) {
      dim.h = h * 0.84 - UIComponentHeight - padding;
    } else if (h < 700) {
      dim.h = h * 0.80 - UIComponentHeight - padding;
    } else if (h < 1000) {
      // const padding = 30,
      // h = window.innerHeight * 0.8 - padding,
      dim.h = h * 0.843 - UIComponentHeight - padding;
      dim.h += h < 768 ? 30 : 0;
    } else {
      // const padding = 30,
      // h = window.innerHeight * 0.8 - padding,
      dim.h = h * 0.843 - UIComponentHeight - padding;
    } // w = window.innerWidth * 0.95, //mobile!


    dim.w = w * 0.95;

    if (window.indicators[currentCategory].publicationId === "HousingInEurope") {
      dim.w = w * 0.95;
    }

    if (Object(_components_utils__WEBPACK_IMPORTED_MODULE_293__["isIE"])() && simpleMode) {
      dim.h = dim.h * 0.9;
    }
  } //$("#header, #titles, #chartInd, #chartFooter").hide();


  dim.h = calculateRemainingHeight();
  setTimeout(function () {
    calculateRemainingHeight();
  }, 2000);
  return dim;
}

function calculateRemainingHeight() {
  //console.log("**************************");
  var h = $(window).height();
  var height = h; //console.log("Height Initial  = "+h);

  h -= document.getElementById("header").offsetHeight; //console.log("Height Header = "+document.getElementById("header").offsetHeight);
  //console.log("Height  = "+h);

  if (simpleMode) {
    var topMargin;

    if (height < 400) {
      topMargin = 10;
    } else if (height < 600) {
      topMargin = 15;
    } else {
      topMargin = 20;
    }

    $("#titles").css("margin-top", topMargin + "px");
    h -= topMargin;
  }

  h -= $("#titles").height(); //console.log("Height Titles = "+$("#titles").height());
  //console.log("Height  = "+h);

  if (simpleMode && height < 600) {
    var marginBottom = -28;
    $("#chart").css("margin-bottom", marginBottom + "px");
    h -= marginBottom;
    var marginTop = -7;
    $("#chart").css("margin-top", marginTop + "px");
    h -= marginTop;
  } else {
    var marginBottom = -12;
    $("#chart").css("margin-bottom", marginBottom + "px");
    h -= marginBottom;
  }

  h -= $("#chartSort").height(); //console.log("Height Chart Sort = "+$("#chartSort").height());
  //console.log("Height  = "+h);

  h -= $("#chartInd").height(); //console.log("Height Chart Ind = "+$("#chartInd").height());
  //console.log("Height  = "+h);

  h -= $("#legend").height(); //console.log("Height Legend = "+$("#legend").height());
  //console.log("Height  = "+h);  

  if (indicators[currentCategory].UISortGroup == "checkboxSort" || indicators[currentCategory].UISortGroup == "checkbox") {
    var fixedLegendHeight = 40;
    h -= fixedLegendHeight; //console.log("Height Legend = "+fixedLegendHeight);
    //console.log("Height  = "+h);
  }

  h -= $("#chartFooter").height(); //console.log("Height Footer = "+$("#chartFooter").height()); 
  //console.log("Height  = "+h); 
  //$("#header, #titles, #chartInd, #chartFooter").css("background-color","red");
  //$("#chart").css("background-color","blue");

  $("#chartSort").css("margin", "unset"); // $("#dummy").hide();

  return h;
}

function init() {
  hide = groups;
  hide = hide.filter(function (displayedCat) {
    return !displayed.includes(displayedCat);
  });
  $("#logo").show();
  UIComponentHeight = 43;

  if (simpleMode) {
    UIComponentHeight -= 60;
  }

  $("html").addClass(indicators[currentCategory].publicationId);

  if (indicators[currentCategory].usePatterns == true) {
    var _color;

    dataColors = function dataColors(color, d) {
      if (d.index != undefined) {
        var dataRow = data[d.index + 1];
        var code = dataRow[dataRow.length - 1];

        if (code == selectedCountry) {
          var groupIndex = groups.indexOf(d.id);
          return "url(#pattern" + groupIndex + ")";
        } else {
          return groupsColors[d.id];
        }
      } else if (groupsColors[d]) {
        return groupsColors[d];
      }
    };

    color = (_color = {
      pattern: ["#1f77b4", "#aec7e8"],
      // Set colors' patterns;
      // it should return an array of SVGPatternElement
      tiles: function tiles() {
        var patterns = [];

        for (var groupIndex in groups) {
          var group = groups[groupIndex];
          var pattern = document.createElementNS("http://www.w3.org/2000/svg", "pattern");
          var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
          pattern.setAttribute("patternUnits", "userSpaceOnUse");
          pattern.setAttribute("patternTransform", "rotate(30)");
          pattern.setAttribute("id", "pattern" + group);
          pattern.setAttribute("id2", "pattern" + groupIndex);
          pattern.setAttribute("x", "0");
          pattern.setAttribute("y", "0");
          pattern.setAttribute("width", "8");
          pattern.setAttribute("height", "8");
          pattern.setAttribute("fill", "none");
          rect.setAttribute("x", "0");
          rect.setAttribute("y", "0");
          rect.setAttribute("width", "6");
          rect.setAttribute("height", "8");
          rect.setAttribute("style", "stroke:none;fill:" + groupsColors[group]);
          pattern.appendChild(rect);
          patterns.push(pattern);
        }

        return patterns;
      }
    }, _defineProperty(_color, "pattern", ["none", "none", "none", "none", "none"]), _defineProperty(_color, "onover", function onover(d) {
      return "pattern1";
      var dataRow = data[d.index + 1];
      var code = dataRow[dataRow.length - 1];

      if (code == selectedCountry) {
        return;
      } else {
        //return "blue";
        return "pattern1";
        return d.id === "data1" ? "#f26522" : "#f26522";
      }
    }), _color);
  } else {
    dataColors = groupsColors;
    color = groupsColors;

    dataColors = function dataColors(color, d) {
      if (d.id) {
        return groupsColors[d.id];
      } else {
        return groupsColors[d];
      }
    };
  }

  if (indicators[currentCategory].UISortGroup == "checkbox") {
    initSortingCheckboxes();
    legendItems = {
      onclick: function onclick(id) {},
      onover: function onover(id) {},
      onout: function onout(id) {}
    };
    legendHide = false;
    legendContent = {
      bindto: '#legend',
      template: function template(title, color, data) {
        if (title == "undefined") {
          return "";
        }

        return "<div class='noAction legend-wrapper' style='display:inline-block; margin-right: 16px;'><div id='checkbox-" + title + "' style='display:inline-block; color: black; margin-right: 8px'></div><div class='square' style='background-color:" + color + ";padding:4px; display:inline-block;'></div><span style='margin-left: 3px; color: black;font-size:10px;'>" + groupsNames[title] + "</span><span class='sort' style='display:inline-block; margin-left: 6px;' title='" + Object(_lang__WEBPACK_IMPORTED_MODULE_287__["_"])('sort.hover') + "' id='sort_" + title + "'></span></div>";
      }
    };
  } else if (indicators[currentCategory].UISortGroup == "checkboxSort") {
    legendItems = {
      onclick: function onclick(id) {
        // we only hide, if at least one series will stay active
        if (displayed.includes(id) && displayed.length > 1) {
          displayed = displayed.filter(function (curId) {
            return curId !== id;
          });
          chart.hide(id);
        } else if (!displayed.includes(id)) {
          displayed.push(id);
          chart.show(id);
        }

        if (displayed.length == 1) {
          var dataDisplayed = displayed[0];
          var idDisplayed = parseInt(dataDisplayed.replace("data", "")) - 1;
          var iterator = 0; //console.log("not touched = "+dataDisplayed+"  index = "+idDisplayed);

          indexDataToNotTouch = idDisplayed;
        } else {
          indexDataToNotTouch = null;
        }

        processData(window.categorySelected, currentSorting, null, selectedSortDirection);
        Object(_components_ui_component__WEBPACK_IMPORTED_MODULE_294__["checkSortIcons"])(selectedSortProperty, selectedSortDirection); //drawScatterLines();
      }
    };
    legendContent = {
      bindto: '#legend',
      template: function template(title, color, data) {
        if (title == "undefined") {
          return "";
        }

        var checkboxIcon = 'fa-check-square';

        if (!displayed.includes(title)) {
          checkboxIcon = 'fa-square';
        }

        var groups = indicators[currentCategory].grouping.groups;
        var item = groups.find(function (el) {
          return el.color == color;
        });
        var curSortIcon = 'fa-sort';

        if (title === selectedSortProperty || item.code == currentSorting) {
          curSortIcon = selectedSortDirection === 'desc' ? 'fa-sort-down' : 'fa-sort-up';
        }

        curSortIcon = "fa-sort-down";
        var legendShape = item.patternInLegend != "false" && item.pattern && item.type == "line" ? '<svg class="shape"  style="stroke:' + item.color + '" fill="' + item.color + '">' + item.pattern + '</svg>' : '<span style="width: 15px;height: 15px;display: inline-block;background-color:' + item.color + '"></span>'; //var legendShape = item.pattern  ? '<svg class="shape" style="stroke:'+item.color+'" fill="'+item.color+'">' + item.pattern + '</svg>' : "<div style='background-color:" + color + ";padding:8px; display:inline-block;'></div>";

        return "<div class='legend-wrapper' style='display:inline-block; margin-right: 16px;'><div id='checkbox-" + title + "' style='display:inline-block; color: black; margin-right: 8px'><i class='far " + checkboxIcon + " fa-2x' ></i></div>" + legendShape + "<span style='margin-left: 3px; color: black;font-size:14px;'>" + groupsNames[title] + "</span><span class='sort' style='display:inline-block; margin-left: 6px;' title='" + Object(_lang__WEBPACK_IMPORTED_MODULE_287__["_"])('sort.hover') + "' id='sort_" + title + "'><i class='fas " + curSortIcon + " fa-2x'  data-fa-transform='shrink-1 down-1' style='color:black'></i></span></div>";
      }
    };
    legendHide = "undefined";
  } else if (indicators[currentCategory].UISortGroup == "box") {
    initSortingColorBoxes();
  }

  if (indicators[currentCategory].UISelectInd && indicators[currentCategory].UISelectInd == "Icons") {
    UIComponentHeight += 69 + 10;
  } else if (indicators[currentCategory].UISelectInd && indicators[currentCategory].UISelectInd == "Select") {
    UIComponentHeight += 46 + 10;
  } else if (indicators[currentCategory].UISelectInd) {
    UIComponentHeight += 30;
  } // Script


  if (indicators[currentCategory].chartType == "scatter") {
    initScatterChart();
  } else {
    initChart();
  } // 

}

function findMinimum(data) {
  var min = 100;

  for (var i = 0; i < data.length; i++) {
    var item = data[i];

    for (var j = 0; j < item.length - 1; j++) {
      min = item[j] < min && item[j] != 0 ? item[j] : min;
    }
  }

  return min;
}

function initScatterChart() {
  var min = indicators[currentCategory].yAxis ? indicators[currentCategory].yAxis.min : findMinimum(data);
  var max = indicators[currentCategory].yAxis ? indicators[currentCategory].yAxis.max : null;
  var padding = indicators[currentCategory].yAxis ? 2 : null;
  var dim = getDimensions();
  var patterns = indicators[currentCategory].grouping.groups.map(function (a) {
    return a.pattern;
  });
  patterns = indicators[currentCategory].grouping.groups.filter(function (el) {
    return el.type != "bar";
  }).map(function (a) {
    return a.pattern;
  });
  $("body").addClass("scatter");
  chart = billboard_js__WEBPACK_IMPORTED_MODULE_288__["bb"].generate(_defineProperty({
    size: {
      height: Object(_components_utils__WEBPACK_IMPORTED_MODULE_293__["isMobile"])() ? dim.h : dim.h,
      width: dim.w
    },
    padding: {
      left: Object(_components_utils__WEBPACK_IMPORTED_MODULE_293__["isMobile"])() ? 32 : null
    },
    categories: groupsNames,
    data: {
      hide: hide,
      names: Object.assign({}, groupsNames),
      rows: data,
      //type: "line", // for ESM specify as: scatter()
      types: groupsTypes,
      color: dataColors
    },
    axis: {
      x: {
        type: "category",
        categories: countries,
        tick: {
          centered: true,
          rotate: 0,
          autorotate: true,
          multiline: false,
          culling: false,
          fit: true,
          "format": function format(x) {
            // x is the datetime data
            var code = countriesCodes[x];
            return code == "EU27_2020" ? "EU" : code;
          }
        }
      },
      y: {
        label: {
          text: Object(_lang__WEBPACK_IMPORTED_MODULE_287__["_"])("indicator" + indicators[currentCategory].code + ".yAxisTitle"),
          position: "outer-middle"
        },
        min: min,
        max: max,
        padding: padding
      }
    },
    bindto: "#chart",
    point: {
      pattern: patterns
    },
    onrendered: function onrendered() {
      if (indicators[currentCategory].showVertLines != false) {
        drawScatterLines();
      }

      $("#bookmark-link, #chartInd").show();
      Object(_components_ui_component__WEBPACK_IMPORTED_MODULE_294__["checkSortIcons"])(selectedSortProperty, selectedSortDirection);
      d3__WEBPACK_IMPORTED_MODULE_282__["selectAll"]("pattern").attr("id", function (d) {
        return $(this).attr("id2");
      });
      var code = selectedCountry;
      var countryFound = false;
      d3__WEBPACK_IMPORTED_MODULE_282__["selectAll"]('g.bb-axis.bb-axis-x .tick') //here's how you get all the nodes
      .each(function (d) {
        // your update code here as it was in your example
        if (d3__WEBPACK_IMPORTED_MODULE_282__["select"](this).selectAll("tspan").text() == code) {
          d3__WEBPACK_IMPORTED_MODULE_282__["select"](this).selectAll("text").attr("fill", "#E34A21");
          d3__WEBPACK_IMPORTED_MODULE_282__["select"](this).selectAll("text").attr("font-weight", "bold");
          countryFound = true;
        } else {
          d3__WEBPACK_IMPORTED_MODULE_282__["select"](this).selectAll("text").attr("fill", "black");
          d3__WEBPACK_IMPORTED_MODULE_282__["select"](this).selectAll("text").attr("font-weight", "regular");
        }
      });

      if (countryFound == false && parent.displayChartAlert) {
        parent.displayChartAlert("noData", code);
      } else {//alert('Data not available');
      }
    },
    legend: {
      hide: "undefined"
    },
    tooltip: {
      order: "desc",
      format: {
        value: function value(_value) {
          return Math.round(_value * 100) / 100 + Object(_lang__WEBPACK_IMPORTED_MODULE_287__["_"])(indicators[currentCategory].grouping.unit);
        }
      },
      contents: function contents(d, defaultTitleFormat, defaultValueFormat, color) {
        if (d[0].value == null && d[1].value == null) {
          return;
        }

        var content = '<table class="bb-tooltip"><tbody>' + '<tr><th style="background-color:black" colspan="2">' + countries[d[0].index] + '</th></tr>';
        var grouping = indicators[currentCategory].grouping;
        var originalData = arrayGrouped[d[0].index];
        var codes = indicators[currentCategory].grouping.tooltipOrder ? indicators[currentCategory].grouping.tooltipOrder : indicators[currentCategory].grouping.groups.map(function (n, i) {
          return n.code;
        });
        ;

        for (var indexCode in codes) {
          var code = codes[indexCode];
          var index = parseInt(indexCode) + 1;
          var dataCode = groupsMapping[code];
          var item = d.find(function (el) {
            return el.id == dataCode;
          }); // if (item == null) {console.log("item == null");return;}

          if (item != null && item.id != "undefined") {
            var groupIndex = groups.indexOf(item.id);
            var currentGroup = grouping.groups[groupIndex].code;
            var code = item.code;
            var value = Object(_components_utils__WEBPACK_IMPORTED_MODULE_293__["roundValue"])(item.value, indicators[currentCategory].precision);

            if (currentGroup != currentSorting && originalData[currentGroup + "_UNTOUCHED"]) {
              value = "Corrected";
              value = Object(_components_utils__WEBPACK_IMPORTED_MODULE_293__["roundValue"])(originalData[currentGroup + "_UNTOUCHED"], indicators[currentCategory].precision);
            }

            var legend = grouping.groups[groupIndex].legend ? grouping.groups[groupIndex].legend : grouping.groups[groupIndex].title;

            if (value != 0) {
              var strValue = value.toString();
              strValue = strValue.replace(".", Object(_lang__WEBPACK_IMPORTED_MODULE_287__["_"])("decimal_separator"));
              var legendShape = grouping.groups[groupIndex].patternInLegend != "false" && grouping.groups[groupIndex].pattern && grouping.groups[groupIndex].type == "line" ? '<svg class="shape"  style="stroke:' + grouping.groups[groupIndex].color + '" fill="' + grouping.groups[groupIndex].color + '">' + grouping.groups[groupIndex].pattern + '</svg>' : '<span style="background-color:' + grouping.groups[groupIndex].color + '"></span>';
              content += '<tr class="bb-tooltip-name-data1"><td class="name">' + legendShape + Object(_lang__WEBPACK_IMPORTED_MODULE_287__["_"])(legend) + '</td><td class="value">' + strValue + ' ' + Object(_lang__WEBPACK_IMPORTED_MODULE_287__["_"])(indicators[currentCategory].grouping.unit) + '</td></tr>';
            }
          }
        }

        content += '</tbody></table>';
        return content;
      }
    },
    grid: {
      y: {
        show: true
      }
    }
  }, "legend", {
    hide: legendHide,
    item: legendItems,
    contents: legendContent
  }));
}

function initChart() {
  // console.log(data);
  var dim = getDimensions();
  var barWidthRatio = dim.h < 500 ? 1.4 : 1.6; //console.log(data);

  chart = billboard_js__WEBPACK_IMPORTED_MODULE_288__["bb"].generate({
    size: {
      height: dim.h,
      width: dim.w
    },
    padding: {
      right: 11
    },
    data: {
      //columns:dataColumns,
      hide: hide,
      rows: data,
      names: groupsNames,
      labels: {
        format: function format(v, id, i, j) {
          return id == "data1" ? Math.round(v * 100) / 100 + '%' : "";
        },
        position: {
          x: -50,
          y: 1
        }
      },
      type: "bar",
      groups: [groups],
      order: null,
      color: dataColors
    },
    grid: {
      y: {
        lines: [{
          value: 0
        }]
      }
    },
    bar: {
      width: {
        ratio: barWidthRatio,
        max: 50
      },
      padding: -20
    },
    axis: {
      rotated: true,
      x: {
        type: "category",
        categories: countries,
        padding: {
          right: 0.2
        },
        tick: {
          height: 160,
          width: 180,
          multiline: false
        }
      },
      y: {
        max: 91
      }
    },
    tooltip: {
      order: "desc",
      format: {
        value: function value(_value2) {
          return Math.round(_value2 * 100) / 100 + '%';
        }
      },
      contents: function contents(d, defaultTitleFormat, defaultValueFormat, color) {
        if (d[0].value == 0) {
          return;
        } //EU27_2020_toolitp


        var countryName = countries[d[0].index];

        if (Object(_lang__WEBPACK_IMPORTED_MODULE_287__["_"])(countriesCodes[d[0].index] + "_tooltip") != countriesCodes[d[0].index] + "_tooltip") {
          countryName = Object(_lang__WEBPACK_IMPORTED_MODULE_287__["_"])(countriesCodes[d[0].index] + "_tooltip");
        }

        var content = '<table class="bb-tooltip"><tbody>' + '<tr><th style="background-color:black" colspan="2">' + countryName + '</th></tr>';
        var grouping = indicators[currentCategory].grouping;
        var originalData = arrayGrouped[d[0].index];

        for (var groupIndexTmp in d) {
          var item = d[groupIndexTmp];

          if (item.id != "undefined") {
            var groupIndex = groups.indexOf(item.id);
            var currentGroup = grouping.groups[groupIndex].code; //console.log(currentSorting);
            //console.log(currentGroup);

            var code = item.code;
            var value = Object(_components_utils__WEBPACK_IMPORTED_MODULE_293__["roundValue"])(item.value); // console.log(code);
            // var itemTmp = data.filter(function(el) {console.log(el); return el.Geo = code }); 
            // console.log(itemTmp)

            /*
            if (arrayNotCorrected[countriesCodes[d[0].index] + "_" + groupIndex]) {
                value = roundValue(arrayNotCorrected[countriesCodes[d[0].index] + "_" + groupIndex]);
            }
            */
            //console.log(originalData);

            if (currentGroup != currentSorting && originalData[currentGroup + "_UNTOUCHED"]) {
              value = "Corrected";
              value = Object(_components_utils__WEBPACK_IMPORTED_MODULE_293__["roundValue"])(originalData[currentGroup + "_UNTOUCHED"]);
            }

            var legend = grouping.groups[groupIndex].legend ? grouping.groups[groupIndex].legend : grouping.groups[groupIndex].title;

            if (value != 0) {
              var strValue = value.toString();
              strValue = strValue.replace(".", Object(_lang__WEBPACK_IMPORTED_MODULE_287__["_"])("decimal_separator"));
              content += '<tr class="bb-tooltip-name-data1"><td class="name"><span style="background-color:' + grouping.groups[groupIndex].color + '"></span>' + Object(_lang__WEBPACK_IMPORTED_MODULE_287__["_"])(legend) + '</td><td class="value">' + strValue + ' %</td></tr>';
            }
          }
        }

        content += '</tbody></table>';
        return content;
      }
    },
    legend: {
      hide: legendHide,
      item: legendItems,
      contents: legendContent
    },
    interaction: {
      inputType: {
        touch: {
          preventDefault: true
        }
      }
    },
    color: color,
    bindto: "#chart",
    onrendered: function onrendered() {
      d3__WEBPACK_IMPORTED_MODULE_282__["selectAll"]('g.bb-axis-x .tick') //here's how you get all the nodes
      .each(function (d) {
        // your update code here as it was in your example
        //console.log(d3.select(this).selectAll("tspan").text())
        if (d3__WEBPACK_IMPORTED_MODULE_282__["select"](this).selectAll("tspan").text() == "") {
          $(this).remove();
          d3__WEBPACK_IMPORTED_MODULE_282__["select"](".bb-event-rect-" + d).remove();
          d3__WEBPACK_IMPORTED_MODULE_282__["selectAll"](".bb-bar-0").style("height", "50px");
        } else {
          // -6
          d3__WEBPACK_IMPORTED_MODULE_282__["select"](this).selectAll("text").attr("y", "10px");
          d3__WEBPACK_IMPORTED_MODULE_282__["select"](this).selectAll("line").remove();
        }
      });
      d3__WEBPACK_IMPORTED_MODULE_282__["selectAll"]('rect.bb-event-rect') //here's how you get all the nodes
      .each(function (d) {
        d3__WEBPACK_IMPORTED_MODULE_282__["select"](this).attr("height", "8");
      });
      $("#bookmark-link, #chartInd").show();
      Object(_components_ui_component__WEBPACK_IMPORTED_MODULE_294__["checkSortIcons"])(selectedSortProperty, selectedSortDirection);
      d3__WEBPACK_IMPORTED_MODULE_282__["selectAll"]("pattern").attr("id", function (d) {
        return $(this).attr("id2");
      });
      var code = selectedCountry;
      var countryFound = false;
      d3__WEBPACK_IMPORTED_MODULE_282__["selectAll"]('g.bb-axis.bb-axis-x .tick') //here's how you get all the nodes
      .each(function (d) {
        // your update code here as it was in your example
        if (d3__WEBPACK_IMPORTED_MODULE_282__["select"](this).selectAll("tspan").text() == Object(_lang__WEBPACK_IMPORTED_MODULE_287__["_"])(code)) {
          d3__WEBPACK_IMPORTED_MODULE_282__["select"](this).selectAll("text").attr("fill", "#E34A21");
          d3__WEBPACK_IMPORTED_MODULE_282__["select"](this).selectAll("text").attr("font-weight", "bold");
          countryFound = true;
        } else {
          d3__WEBPACK_IMPORTED_MODULE_282__["select"](this).selectAll("text").attr("fill", "black");
          d3__WEBPACK_IMPORTED_MODULE_282__["select"](this).selectAll("text").attr("font-weight", "regular");
        }
      });

      if (countryFound == false && parent.displayChartAlert) {
        parent.displayChartAlert("noData", code);
      } else {//alert('Data not available');
      }
    }
  });
}

window.updateCountry = function (countryCode) {
  if (countryCode != "") {
    selectedCountry = countryCode;
    highlightCountry(chart, countryCode);
  }
};

function drawScatterLines() {
  $(".dotLine").remove();
  var svg;
  var lineFunction = d3__WEBPACK_IMPORTED_MODULE_282__["line"]().x(function (d) {
    return d.x;
  }).y(function (d) {
    return d.y;
  });

  for (var i = 0; i < data.length; i++) {
    var iterator = 0;
    var xSaved = 0;
    var circleCoords = [];
    var line = d3__WEBPACK_IMPORTED_MODULE_282__["line"]();
    var nodes = d3__WEBPACK_IMPORTED_MODULE_282__["selectAll"](".bb-circle-" + i).each(function (d) {
      var item = d3__WEBPACK_IMPORTED_MODULE_282__["select"](this);
      var visible = displayed.indexOf(d.id) !== -1;

      if (d.value != null && d.value != 0 && visible) {
        var xPadding = window.innerWidth < 600 ? 3 : 7;
        var yPadding = window.innerWidth < 600 ? 3 : 7;
        var cx = $(this).attr('cx') ? $(this).attr('cx') : parseFloat($(this).attr('x')) + xPadding;
        var cy = $(this).attr('cy') ? $(this).attr('cy') : parseFloat($(this).attr('y')) + yPadding;
        circleCoords.push({
          x: cx,
          y: cy
        });
      }

      if (indicators[currentCategory].removeZeroValue && d.value == 0) {
        this.remove();
      }

      if (d.id == "undefined") {
        this.remove();
      }

      iterator++;
    });
    svg = d3__WEBPACK_IMPORTED_MODULE_282__["selectAll"]("#chart svg .bb-chart-lines");
    var lineGraph = svg.append("path").attr("d", lineFunction(circleCoords)).attr("class", "dotLine").moveToBack();
  }
}

function highlightCountry(chart, code) {
  selectedCountry = code;
  var countryFound = false;
  var index = 0;
  d3__WEBPACK_IMPORTED_MODULE_282__["selectAll"]('g.bb-axis.bb-axis-x .tick') //here's how you get all the nodes
  .each(function (d) {
    // your update code here as it was in your example
    if (d3__WEBPACK_IMPORTED_MODULE_282__["select"](this).selectAll("tspan").text() == Object(_lang__WEBPACK_IMPORTED_MODULE_287__["_"])(code)) {
      d3__WEBPACK_IMPORTED_MODULE_282__["select"](this).selectAll("text").attr("fill", "#E34A21");
      d3__WEBPACK_IMPORTED_MODULE_282__["select"](this).selectAll("text").attr("font-weight", "bold");
      countryFound = true;
    } else {
      d3__WEBPACK_IMPORTED_MODULE_282__["select"](this).selectAll("text").attr("fill", "black");
      d3__WEBPACK_IMPORTED_MODULE_282__["select"](this).selectAll("text").attr("font-weight", "regular");
    }

    index++;
  });

  if (countryFound == false && parent) {
    parent.displayChartAlert("noData", code);
  } else {//alert('Data not available');
  }

  chart.load({
    rows: data
  });
}

function setcurrentSortingCS(newValue) {
  currentSorting = newValue;
}

function selectedSortPropertyCS(newValue) {
  selectedSortProperty = newValue;
}

function selectedSortDirectionCS(newValue) {
  selectedSortDirection = newValue;
}


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js"), __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./scripts/storage.js":
/*!****************************!*\
  !*** ./scripts/storage.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  storage: {
    NODE_ENV: "prod",
    processedData: [],
    rawData: []
  }
};

/***/ }),

/***/ "./styles/dropdown.css":
/*!*****************************!*\
  !*** ./styles/dropdown.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./styles/icons.css":
/*!**************************!*\
  !*** ./styles/icons.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./styles/main.css":
/*!*************************!*\
  !*** ./styles/main.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./styles/pub_specific.css":
/*!*********************************!*\
  !*** ./styles/pub_specific.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./styles/social.css":
/*!***************************!*\
  !*** ./styles/social.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=stackedbarchart.7dbdc4a60c91962ee88c.js.map