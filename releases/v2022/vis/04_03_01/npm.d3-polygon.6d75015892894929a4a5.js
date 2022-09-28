(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["npm.d3-polygon"],{

/***/ "../node_modules/d3-polygon/index.js":
/*!*******************************************!*\
  !*** ../node_modules/d3-polygon/index.js ***!
  \*******************************************/
/*! exports provided: polygonArea, polygonCentroid, polygonHull, polygonContains, polygonLength */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_area__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/area */ "../node_modules/d3-polygon/src/area.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "polygonArea", function() { return _src_area__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _src_centroid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/centroid */ "../node_modules/d3-polygon/src/centroid.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "polygonCentroid", function() { return _src_centroid__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _src_hull__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/hull */ "../node_modules/d3-polygon/src/hull.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "polygonHull", function() { return _src_hull__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _src_contains__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/contains */ "../node_modules/d3-polygon/src/contains.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "polygonContains", function() { return _src_contains__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _src_length__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/length */ "../node_modules/d3-polygon/src/length.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "polygonLength", function() { return _src_length__WEBPACK_IMPORTED_MODULE_4__["default"]; });








/***/ }),

/***/ "../node_modules/d3-polygon/src/area.js":
/*!**********************************************!*\
  !*** ../node_modules/d3-polygon/src/area.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(polygon) {
  var i = -1,
      n = polygon.length,
      a,
      b = polygon[n - 1],
      area = 0;

  while (++i < n) {
    a = b;
    b = polygon[i];
    area += a[1] * b[0] - a[0] * b[1];
  }

  return area / 2;
});


/***/ }),

/***/ "../node_modules/d3-polygon/src/centroid.js":
/*!**************************************************!*\
  !*** ../node_modules/d3-polygon/src/centroid.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(polygon) {
  var i = -1,
      n = polygon.length,
      x = 0,
      y = 0,
      a,
      b = polygon[n - 1],
      c,
      k = 0;

  while (++i < n) {
    a = b;
    b = polygon[i];
    k += c = a[0] * b[1] - b[0] * a[1];
    x += (a[0] + b[0]) * c;
    y += (a[1] + b[1]) * c;
  }

  return k *= 3, [x / k, y / k];
});


/***/ }),

/***/ "../node_modules/d3-polygon/src/contains.js":
/*!**************************************************!*\
  !*** ../node_modules/d3-polygon/src/contains.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(polygon, point) {
  var n = polygon.length,
      p = polygon[n - 1],
      x = point[0], y = point[1],
      x0 = p[0], y0 = p[1],
      x1, y1,
      inside = false;

  for (var i = 0; i < n; ++i) {
    p = polygon[i], x1 = p[0], y1 = p[1];
    if (((y1 > y) !== (y0 > y)) && (x < (x0 - x1) * (y - y1) / (y0 - y1) + x1)) inside = !inside;
    x0 = x1, y0 = y1;
  }

  return inside;
});


/***/ }),

/***/ "../node_modules/d3-polygon/src/cross.js":
/*!***********************************************!*\
  !*** ../node_modules/d3-polygon/src/cross.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Returns the 2D cross product of AB and AC vectors, i.e., the z-component of
// the 3D cross product in a quadrant I Cartesian coordinate system (+x is
// right, +y is up). Returns a positive value if ABC is counter-clockwise,
// negative if clockwise, and zero if the points are collinear.
/* harmony default export */ __webpack_exports__["default"] = (function(a, b, c) {
  return (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
});


/***/ }),

/***/ "../node_modules/d3-polygon/src/hull.js":
/*!**********************************************!*\
  !*** ../node_modules/d3-polygon/src/hull.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cross__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cross */ "../node_modules/d3-polygon/src/cross.js");


function lexicographicOrder(a, b) {
  return a[0] - b[0] || a[1] - b[1];
}

// Computes the upper convex hull per the monotone chain algorithm.
// Assumes points.length >= 3, is sorted by x, unique in y.
// Returns an array of indices into points in left-to-right order.
function computeUpperHullIndexes(points) {
  var n = points.length,
      indexes = [0, 1],
      size = 2;

  for (var i = 2; i < n; ++i) {
    while (size > 1 && Object(_cross__WEBPACK_IMPORTED_MODULE_0__["default"])(points[indexes[size - 2]], points[indexes[size - 1]], points[i]) <= 0) --size;
    indexes[size++] = i;
  }

  return indexes.slice(0, size); // remove popped points
}

/* harmony default export */ __webpack_exports__["default"] = (function(points) {
  if ((n = points.length) < 3) return null;

  var i,
      n,
      sortedPoints = new Array(n),
      flippedPoints = new Array(n);

  for (i = 0; i < n; ++i) sortedPoints[i] = [+points[i][0], +points[i][1], i];
  sortedPoints.sort(lexicographicOrder);
  for (i = 0; i < n; ++i) flippedPoints[i] = [sortedPoints[i][0], -sortedPoints[i][1]];

  var upperIndexes = computeUpperHullIndexes(sortedPoints),
      lowerIndexes = computeUpperHullIndexes(flippedPoints);

  // Construct the hull polygon, removing possible duplicate endpoints.
  var skipLeft = lowerIndexes[0] === upperIndexes[0],
      skipRight = lowerIndexes[lowerIndexes.length - 1] === upperIndexes[upperIndexes.length - 1],
      hull = [];

  // Add upper hull in right-to-l order.
  // Then add lower hull in left-to-right order.
  for (i = upperIndexes.length - 1; i >= 0; --i) hull.push(points[sortedPoints[upperIndexes[i]][2]]);
  for (i = +skipLeft; i < lowerIndexes.length - skipRight; ++i) hull.push(points[sortedPoints[lowerIndexes[i]][2]]);

  return hull;
});


/***/ }),

/***/ "../node_modules/d3-polygon/src/length.js":
/*!************************************************!*\
  !*** ../node_modules/d3-polygon/src/length.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(polygon) {
  var i = -1,
      n = polygon.length,
      b = polygon[n - 1],
      xa,
      ya,
      xb = b[0],
      yb = b[1],
      perimeter = 0;

  while (++i < n) {
    xa = xb;
    ya = yb;
    b = polygon[i];
    xb = b[0];
    yb = b[1];
    xa -= xb;
    ya -= yb;
    perimeter += Math.sqrt(xa * xa + ya * ya);
  }

  return perimeter;
});


/***/ })

}]);
//# sourceMappingURL=npm.d3-polygon.6d75015892894929a4a5.js.map