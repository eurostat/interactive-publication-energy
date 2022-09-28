(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["npm.d3-voronoi"],{

/***/ "../node_modules/d3-voronoi/index.js":
/*!*******************************************!*\
  !*** ../node_modules/d3-voronoi/index.js ***!
  \*******************************************/
/*! exports provided: voronoi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_voronoi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/voronoi */ "../node_modules/d3-voronoi/src/voronoi.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "voronoi", function() { return _src_voronoi__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "../node_modules/d3-voronoi/src/Beach.js":
/*!***********************************************!*\
  !*** ../node_modules/d3-voronoi/src/Beach.js ***!
  \***********************************************/
/*! exports provided: removeBeach, addBeach */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeBeach", function() { return removeBeach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addBeach", function() { return addBeach; });
/* harmony import */ var _RedBlackTree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RedBlackTree */ "../node_modules/d3-voronoi/src/RedBlackTree.js");
/* harmony import */ var _Cell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cell */ "../node_modules/d3-voronoi/src/Cell.js");
/* harmony import */ var _Circle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Circle */ "../node_modules/d3-voronoi/src/Circle.js");
/* harmony import */ var _Edge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Edge */ "../node_modules/d3-voronoi/src/Edge.js");
/* harmony import */ var _Diagram__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Diagram */ "../node_modules/d3-voronoi/src/Diagram.js");






var beachPool = [];

function Beach() {
  Object(_RedBlackTree__WEBPACK_IMPORTED_MODULE_0__["RedBlackNode"])(this);
  this.edge =
  this.site =
  this.circle = null;
}

function createBeach(site) {
  var beach = beachPool.pop() || new Beach;
  beach.site = site;
  return beach;
}

function detachBeach(beach) {
  Object(_Circle__WEBPACK_IMPORTED_MODULE_2__["detachCircle"])(beach);
  _Diagram__WEBPACK_IMPORTED_MODULE_4__["beaches"].remove(beach);
  beachPool.push(beach);
  Object(_RedBlackTree__WEBPACK_IMPORTED_MODULE_0__["RedBlackNode"])(beach);
}

function removeBeach(beach) {
  var circle = beach.circle,
      x = circle.x,
      y = circle.cy,
      vertex = [x, y],
      previous = beach.P,
      next = beach.N,
      disappearing = [beach];

  detachBeach(beach);

  var lArc = previous;
  while (lArc.circle
      && Math.abs(x - lArc.circle.x) < _Diagram__WEBPACK_IMPORTED_MODULE_4__["epsilon"]
      && Math.abs(y - lArc.circle.cy) < _Diagram__WEBPACK_IMPORTED_MODULE_4__["epsilon"]) {
    previous = lArc.P;
    disappearing.unshift(lArc);
    detachBeach(lArc);
    lArc = previous;
  }

  disappearing.unshift(lArc);
  Object(_Circle__WEBPACK_IMPORTED_MODULE_2__["detachCircle"])(lArc);

  var rArc = next;
  while (rArc.circle
      && Math.abs(x - rArc.circle.x) < _Diagram__WEBPACK_IMPORTED_MODULE_4__["epsilon"]
      && Math.abs(y - rArc.circle.cy) < _Diagram__WEBPACK_IMPORTED_MODULE_4__["epsilon"]) {
    next = rArc.N;
    disappearing.push(rArc);
    detachBeach(rArc);
    rArc = next;
  }

  disappearing.push(rArc);
  Object(_Circle__WEBPACK_IMPORTED_MODULE_2__["detachCircle"])(rArc);

  var nArcs = disappearing.length,
      iArc;
  for (iArc = 1; iArc < nArcs; ++iArc) {
    rArc = disappearing[iArc];
    lArc = disappearing[iArc - 1];
    Object(_Edge__WEBPACK_IMPORTED_MODULE_3__["setEdgeEnd"])(rArc.edge, lArc.site, rArc.site, vertex);
  }

  lArc = disappearing[0];
  rArc = disappearing[nArcs - 1];
  rArc.edge = Object(_Edge__WEBPACK_IMPORTED_MODULE_3__["createEdge"])(lArc.site, rArc.site, null, vertex);

  Object(_Circle__WEBPACK_IMPORTED_MODULE_2__["attachCircle"])(lArc);
  Object(_Circle__WEBPACK_IMPORTED_MODULE_2__["attachCircle"])(rArc);
}

function addBeach(site) {
  var x = site[0],
      directrix = site[1],
      lArc,
      rArc,
      dxl,
      dxr,
      node = _Diagram__WEBPACK_IMPORTED_MODULE_4__["beaches"]._;

  while (node) {
    dxl = leftBreakPoint(node, directrix) - x;
    if (dxl > _Diagram__WEBPACK_IMPORTED_MODULE_4__["epsilon"]) node = node.L; else {
      dxr = x - rightBreakPoint(node, directrix);
      if (dxr > _Diagram__WEBPACK_IMPORTED_MODULE_4__["epsilon"]) {
        if (!node.R) {
          lArc = node;
          break;
        }
        node = node.R;
      } else {
        if (dxl > -_Diagram__WEBPACK_IMPORTED_MODULE_4__["epsilon"]) {
          lArc = node.P;
          rArc = node;
        } else if (dxr > -_Diagram__WEBPACK_IMPORTED_MODULE_4__["epsilon"]) {
          lArc = node;
          rArc = node.N;
        } else {
          lArc = rArc = node;
        }
        break;
      }
    }
  }

  Object(_Cell__WEBPACK_IMPORTED_MODULE_1__["createCell"])(site);
  var newArc = createBeach(site);
  _Diagram__WEBPACK_IMPORTED_MODULE_4__["beaches"].insert(lArc, newArc);

  if (!lArc && !rArc) return;

  if (lArc === rArc) {
    Object(_Circle__WEBPACK_IMPORTED_MODULE_2__["detachCircle"])(lArc);
    rArc = createBeach(lArc.site);
    _Diagram__WEBPACK_IMPORTED_MODULE_4__["beaches"].insert(newArc, rArc);
    newArc.edge = rArc.edge = Object(_Edge__WEBPACK_IMPORTED_MODULE_3__["createEdge"])(lArc.site, newArc.site);
    Object(_Circle__WEBPACK_IMPORTED_MODULE_2__["attachCircle"])(lArc);
    Object(_Circle__WEBPACK_IMPORTED_MODULE_2__["attachCircle"])(rArc);
    return;
  }

  if (!rArc) { // && lArc
    newArc.edge = Object(_Edge__WEBPACK_IMPORTED_MODULE_3__["createEdge"])(lArc.site, newArc.site);
    return;
  }

  // else lArc !== rArc
  Object(_Circle__WEBPACK_IMPORTED_MODULE_2__["detachCircle"])(lArc);
  Object(_Circle__WEBPACK_IMPORTED_MODULE_2__["detachCircle"])(rArc);

  var lSite = lArc.site,
      ax = lSite[0],
      ay = lSite[1],
      bx = site[0] - ax,
      by = site[1] - ay,
      rSite = rArc.site,
      cx = rSite[0] - ax,
      cy = rSite[1] - ay,
      d = 2 * (bx * cy - by * cx),
      hb = bx * bx + by * by,
      hc = cx * cx + cy * cy,
      vertex = [(cy * hb - by * hc) / d + ax, (bx * hc - cx * hb) / d + ay];

  Object(_Edge__WEBPACK_IMPORTED_MODULE_3__["setEdgeEnd"])(rArc.edge, lSite, rSite, vertex);
  newArc.edge = Object(_Edge__WEBPACK_IMPORTED_MODULE_3__["createEdge"])(lSite, site, null, vertex);
  rArc.edge = Object(_Edge__WEBPACK_IMPORTED_MODULE_3__["createEdge"])(site, rSite, null, vertex);
  Object(_Circle__WEBPACK_IMPORTED_MODULE_2__["attachCircle"])(lArc);
  Object(_Circle__WEBPACK_IMPORTED_MODULE_2__["attachCircle"])(rArc);
}

function leftBreakPoint(arc, directrix) {
  var site = arc.site,
      rfocx = site[0],
      rfocy = site[1],
      pby2 = rfocy - directrix;

  if (!pby2) return rfocx;

  var lArc = arc.P;
  if (!lArc) return -Infinity;

  site = lArc.site;
  var lfocx = site[0],
      lfocy = site[1],
      plby2 = lfocy - directrix;

  if (!plby2) return lfocx;

  var hl = lfocx - rfocx,
      aby2 = 1 / pby2 - 1 / plby2,
      b = hl / plby2;

  if (aby2) return (-b + Math.sqrt(b * b - 2 * aby2 * (hl * hl / (-2 * plby2) - lfocy + plby2 / 2 + rfocy - pby2 / 2))) / aby2 + rfocx;

  return (rfocx + lfocx) / 2;
}

function rightBreakPoint(arc, directrix) {
  var rArc = arc.N;
  if (rArc) return leftBreakPoint(rArc, directrix);
  var site = arc.site;
  return site[1] === directrix ? site[0] : Infinity;
}


/***/ }),

/***/ "../node_modules/d3-voronoi/src/Cell.js":
/*!**********************************************!*\
  !*** ../node_modules/d3-voronoi/src/Cell.js ***!
  \**********************************************/
/*! exports provided: createCell, cellHalfedgeStart, cellHalfedgeEnd, sortCellHalfedges, clipCells */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCell", function() { return createCell; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cellHalfedgeStart", function() { return cellHalfedgeStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cellHalfedgeEnd", function() { return cellHalfedgeEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortCellHalfedges", function() { return sortCellHalfedges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clipCells", function() { return clipCells; });
/* harmony import */ var _Edge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edge */ "../node_modules/d3-voronoi/src/Edge.js");
/* harmony import */ var _Diagram__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Diagram */ "../node_modules/d3-voronoi/src/Diagram.js");



function createCell(site) {
  return _Diagram__WEBPACK_IMPORTED_MODULE_1__["cells"][site.index] = {
    site: site,
    halfedges: []
  };
}

function cellHalfedgeAngle(cell, edge) {
  var site = cell.site,
      va = edge.left,
      vb = edge.right;
  if (site === vb) vb = va, va = site;
  if (vb) return Math.atan2(vb[1] - va[1], vb[0] - va[0]);
  if (site === va) va = edge[1], vb = edge[0];
  else va = edge[0], vb = edge[1];
  return Math.atan2(va[0] - vb[0], vb[1] - va[1]);
}

function cellHalfedgeStart(cell, edge) {
  return edge[+(edge.left !== cell.site)];
}

function cellHalfedgeEnd(cell, edge) {
  return edge[+(edge.left === cell.site)];
}

function sortCellHalfedges() {
  for (var i = 0, n = _Diagram__WEBPACK_IMPORTED_MODULE_1__["cells"].length, cell, halfedges, j, m; i < n; ++i) {
    if ((cell = _Diagram__WEBPACK_IMPORTED_MODULE_1__["cells"][i]) && (m = (halfedges = cell.halfedges).length)) {
      var index = new Array(m),
          array = new Array(m);
      for (j = 0; j < m; ++j) index[j] = j, array[j] = cellHalfedgeAngle(cell, _Diagram__WEBPACK_IMPORTED_MODULE_1__["edges"][halfedges[j]]);
      index.sort(function(i, j) { return array[j] - array[i]; });
      for (j = 0; j < m; ++j) array[j] = halfedges[index[j]];
      for (j = 0; j < m; ++j) halfedges[j] = array[j];
    }
  }
}

function clipCells(x0, y0, x1, y1) {
  var nCells = _Diagram__WEBPACK_IMPORTED_MODULE_1__["cells"].length,
      iCell,
      cell,
      site,
      iHalfedge,
      halfedges,
      nHalfedges,
      start,
      startX,
      startY,
      end,
      endX,
      endY,
      cover = true;

  for (iCell = 0; iCell < nCells; ++iCell) {
    if (cell = _Diagram__WEBPACK_IMPORTED_MODULE_1__["cells"][iCell]) {
      site = cell.site;
      halfedges = cell.halfedges;
      iHalfedge = halfedges.length;

      // Remove any dangling clipped edges.
      while (iHalfedge--) {
        if (!_Diagram__WEBPACK_IMPORTED_MODULE_1__["edges"][halfedges[iHalfedge]]) {
          halfedges.splice(iHalfedge, 1);
        }
      }

      // Insert any border edges as necessary.
      iHalfedge = 0, nHalfedges = halfedges.length;
      while (iHalfedge < nHalfedges) {
        end = cellHalfedgeEnd(cell, _Diagram__WEBPACK_IMPORTED_MODULE_1__["edges"][halfedges[iHalfedge]]), endX = end[0], endY = end[1];
        start = cellHalfedgeStart(cell, _Diagram__WEBPACK_IMPORTED_MODULE_1__["edges"][halfedges[++iHalfedge % nHalfedges]]), startX = start[0], startY = start[1];
        if (Math.abs(endX - startX) > _Diagram__WEBPACK_IMPORTED_MODULE_1__["epsilon"] || Math.abs(endY - startY) > _Diagram__WEBPACK_IMPORTED_MODULE_1__["epsilon"]) {
          halfedges.splice(iHalfedge, 0, _Diagram__WEBPACK_IMPORTED_MODULE_1__["edges"].push(Object(_Edge__WEBPACK_IMPORTED_MODULE_0__["createBorderEdge"])(site, end,
              Math.abs(endX - x0) < _Diagram__WEBPACK_IMPORTED_MODULE_1__["epsilon"] && y1 - endY > _Diagram__WEBPACK_IMPORTED_MODULE_1__["epsilon"] ? [x0, Math.abs(startX - x0) < _Diagram__WEBPACK_IMPORTED_MODULE_1__["epsilon"] ? startY : y1]
              : Math.abs(endY - y1) < _Diagram__WEBPACK_IMPORTED_MODULE_1__["epsilon"] && x1 - endX > _Diagram__WEBPACK_IMPORTED_MODULE_1__["epsilon"] ? [Math.abs(startY - y1) < _Diagram__WEBPACK_IMPORTED_MODULE_1__["epsilon"] ? startX : x1, y1]
              : Math.abs(endX - x1) < _Diagram__WEBPACK_IMPORTED_MODULE_1__["epsilon"] && endY - y0 > _Diagram__WEBPACK_IMPORTED_MODULE_1__["epsilon"] ? [x1, Math.abs(startX - x1) < _Diagram__WEBPACK_IMPORTED_MODULE_1__["epsilon"] ? startY : y0]
              : Math.abs(endY - y0) < _Diagram__WEBPACK_IMPORTED_MODULE_1__["epsilon"] && endX - x0 > _Diagram__WEBPACK_IMPORTED_MODULE_1__["epsilon"] ? [Math.abs(startY - y0) < _Diagram__WEBPACK_IMPORTED_MODULE_1__["epsilon"] ? startX : x0, y0]
              : null)) - 1);
          ++nHalfedges;
        }
      }

      if (nHalfedges) cover = false;
    }
  }

  // If there weren’t any edges, have the closest site cover the extent.
  // It doesn’t matter which corner of the extent we measure!
  if (cover) {
    var dx, dy, d2, dc = Infinity;

    for (iCell = 0, cover = null; iCell < nCells; ++iCell) {
      if (cell = _Diagram__WEBPACK_IMPORTED_MODULE_1__["cells"][iCell]) {
        site = cell.site;
        dx = site[0] - x0;
        dy = site[1] - y0;
        d2 = dx * dx + dy * dy;
        if (d2 < dc) dc = d2, cover = cell;
      }
    }

    if (cover) {
      var v00 = [x0, y0], v01 = [x0, y1], v11 = [x1, y1], v10 = [x1, y0];
      cover.halfedges.push(
        _Diagram__WEBPACK_IMPORTED_MODULE_1__["edges"].push(Object(_Edge__WEBPACK_IMPORTED_MODULE_0__["createBorderEdge"])(site = cover.site, v00, v01)) - 1,
        _Diagram__WEBPACK_IMPORTED_MODULE_1__["edges"].push(Object(_Edge__WEBPACK_IMPORTED_MODULE_0__["createBorderEdge"])(site, v01, v11)) - 1,
        _Diagram__WEBPACK_IMPORTED_MODULE_1__["edges"].push(Object(_Edge__WEBPACK_IMPORTED_MODULE_0__["createBorderEdge"])(site, v11, v10)) - 1,
        _Diagram__WEBPACK_IMPORTED_MODULE_1__["edges"].push(Object(_Edge__WEBPACK_IMPORTED_MODULE_0__["createBorderEdge"])(site, v10, v00)) - 1
      );
    }
  }

  // Lastly delete any cells with no edges; these were entirely clipped.
  for (iCell = 0; iCell < nCells; ++iCell) {
    if (cell = _Diagram__WEBPACK_IMPORTED_MODULE_1__["cells"][iCell]) {
      if (!cell.halfedges.length) {
        delete _Diagram__WEBPACK_IMPORTED_MODULE_1__["cells"][iCell];
      }
    }
  }
}


/***/ }),

/***/ "../node_modules/d3-voronoi/src/Circle.js":
/*!************************************************!*\
  !*** ../node_modules/d3-voronoi/src/Circle.js ***!
  \************************************************/
/*! exports provided: firstCircle, attachCircle, detachCircle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firstCircle", function() { return firstCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attachCircle", function() { return attachCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detachCircle", function() { return detachCircle; });
/* harmony import */ var _RedBlackTree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RedBlackTree */ "../node_modules/d3-voronoi/src/RedBlackTree.js");
/* harmony import */ var _Diagram__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Diagram */ "../node_modules/d3-voronoi/src/Diagram.js");



var circlePool = [];

var firstCircle;

function Circle() {
  Object(_RedBlackTree__WEBPACK_IMPORTED_MODULE_0__["RedBlackNode"])(this);
  this.x =
  this.y =
  this.arc =
  this.site =
  this.cy = null;
}

function attachCircle(arc) {
  var lArc = arc.P,
      rArc = arc.N;

  if (!lArc || !rArc) return;

  var lSite = lArc.site,
      cSite = arc.site,
      rSite = rArc.site;

  if (lSite === rSite) return;

  var bx = cSite[0],
      by = cSite[1],
      ax = lSite[0] - bx,
      ay = lSite[1] - by,
      cx = rSite[0] - bx,
      cy = rSite[1] - by;

  var d = 2 * (ax * cy - ay * cx);
  if (d >= -_Diagram__WEBPACK_IMPORTED_MODULE_1__["epsilon2"]) return;

  var ha = ax * ax + ay * ay,
      hc = cx * cx + cy * cy,
      x = (cy * ha - ay * hc) / d,
      y = (ax * hc - cx * ha) / d;

  var circle = circlePool.pop() || new Circle;
  circle.arc = arc;
  circle.site = cSite;
  circle.x = x + bx;
  circle.y = (circle.cy = y + by) + Math.sqrt(x * x + y * y); // y bottom

  arc.circle = circle;

  var before = null,
      node = _Diagram__WEBPACK_IMPORTED_MODULE_1__["circles"]._;

  while (node) {
    if (circle.y < node.y || (circle.y === node.y && circle.x <= node.x)) {
      if (node.L) node = node.L;
      else { before = node.P; break; }
    } else {
      if (node.R) node = node.R;
      else { before = node; break; }
    }
  }

  _Diagram__WEBPACK_IMPORTED_MODULE_1__["circles"].insert(before, circle);
  if (!before) firstCircle = circle;
}

function detachCircle(arc) {
  var circle = arc.circle;
  if (circle) {
    if (!circle.P) firstCircle = circle.N;
    _Diagram__WEBPACK_IMPORTED_MODULE_1__["circles"].remove(circle);
    circlePool.push(circle);
    Object(_RedBlackTree__WEBPACK_IMPORTED_MODULE_0__["RedBlackNode"])(circle);
    arc.circle = null;
  }
}


/***/ }),

/***/ "../node_modules/d3-voronoi/src/Diagram.js":
/*!*************************************************!*\
  !*** ../node_modules/d3-voronoi/src/Diagram.js ***!
  \*************************************************/
/*! exports provided: epsilon, epsilon2, beaches, cells, circles, edges, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "epsilon", function() { return epsilon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "epsilon2", function() { return epsilon2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "beaches", function() { return beaches; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cells", function() { return cells; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circles", function() { return circles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "edges", function() { return edges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Diagram; });
/* harmony import */ var _Beach__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Beach */ "../node_modules/d3-voronoi/src/Beach.js");
/* harmony import */ var _Cell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cell */ "../node_modules/d3-voronoi/src/Cell.js");
/* harmony import */ var _Circle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Circle */ "../node_modules/d3-voronoi/src/Circle.js");
/* harmony import */ var _Edge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Edge */ "../node_modules/d3-voronoi/src/Edge.js");
/* harmony import */ var _RedBlackTree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RedBlackTree */ "../node_modules/d3-voronoi/src/RedBlackTree.js");






var epsilon = 1e-6;
var epsilon2 = 1e-12;
var beaches;
var cells;
var circles;
var edges;

function triangleArea(a, b, c) {
  return (a[0] - c[0]) * (b[1] - a[1]) - (a[0] - b[0]) * (c[1] - a[1]);
}

function lexicographic(a, b) {
  return b[1] - a[1]
      || b[0] - a[0];
}

function Diagram(sites, extent) {
  var site = sites.sort(lexicographic).pop(),
      x,
      y,
      circle;

  edges = [];
  cells = new Array(sites.length);
  beaches = new _RedBlackTree__WEBPACK_IMPORTED_MODULE_4__["default"];
  circles = new _RedBlackTree__WEBPACK_IMPORTED_MODULE_4__["default"];

  while (true) {
    circle = _Circle__WEBPACK_IMPORTED_MODULE_2__["firstCircle"];
    if (site && (!circle || site[1] < circle.y || (site[1] === circle.y && site[0] < circle.x))) {
      if (site[0] !== x || site[1] !== y) {
        Object(_Beach__WEBPACK_IMPORTED_MODULE_0__["addBeach"])(site);
        x = site[0], y = site[1];
      }
      site = sites.pop();
    } else if (circle) {
      Object(_Beach__WEBPACK_IMPORTED_MODULE_0__["removeBeach"])(circle.arc);
    } else {
      break;
    }
  }

  Object(_Cell__WEBPACK_IMPORTED_MODULE_1__["sortCellHalfedges"])();

  if (extent) {
    var x0 = +extent[0][0],
        y0 = +extent[0][1],
        x1 = +extent[1][0],
        y1 = +extent[1][1];
    Object(_Edge__WEBPACK_IMPORTED_MODULE_3__["clipEdges"])(x0, y0, x1, y1);
    Object(_Cell__WEBPACK_IMPORTED_MODULE_1__["clipCells"])(x0, y0, x1, y1);
  }

  this.edges = edges;
  this.cells = cells;

  beaches =
  circles =
  edges =
  cells = null;
}

Diagram.prototype = {
  constructor: Diagram,

  polygons: function() {
    var edges = this.edges;

    return this.cells.map(function(cell) {
      var polygon = cell.halfedges.map(function(i) { return Object(_Cell__WEBPACK_IMPORTED_MODULE_1__["cellHalfedgeStart"])(cell, edges[i]); });
      polygon.data = cell.site.data;
      return polygon;
    });
  },

  triangles: function() {
    var triangles = [],
        edges = this.edges;

    this.cells.forEach(function(cell, i) {
      if (!(m = (halfedges = cell.halfedges).length)) return;
      var site = cell.site,
          halfedges,
          j = -1,
          m,
          s0,
          e1 = edges[halfedges[m - 1]],
          s1 = e1.left === site ? e1.right : e1.left;

      while (++j < m) {
        s0 = s1;
        e1 = edges[halfedges[j]];
        s1 = e1.left === site ? e1.right : e1.left;
        if (s0 && s1 && i < s0.index && i < s1.index && triangleArea(site, s0, s1) < 0) {
          triangles.push([site.data, s0.data, s1.data]);
        }
      }
    });

    return triangles;
  },

  links: function() {
    return this.edges.filter(function(edge) {
      return edge.right;
    }).map(function(edge) {
      return {
        source: edge.left.data,
        target: edge.right.data
      };
    });
  },

  find: function(x, y, radius) {
    var that = this, i0, i1 = that._found || 0, n = that.cells.length, cell;

    // Use the previously-found cell, or start with an arbitrary one.
    while (!(cell = that.cells[i1])) if (++i1 >= n) return null;
    var dx = x - cell.site[0], dy = y - cell.site[1], d2 = dx * dx + dy * dy;

    // Traverse the half-edges to find a closer cell, if any.
    do {
      cell = that.cells[i0 = i1], i1 = null;
      cell.halfedges.forEach(function(e) {
        var edge = that.edges[e], v = edge.left;
        if ((v === cell.site || !v) && !(v = edge.right)) return;
        var vx = x - v[0], vy = y - v[1], v2 = vx * vx + vy * vy;
        if (v2 < d2) d2 = v2, i1 = v.index;
      });
    } while (i1 !== null);

    that._found = i0;

    return radius == null || d2 <= radius * radius ? cell.site : null;
  }
}


/***/ }),

/***/ "../node_modules/d3-voronoi/src/Edge.js":
/*!**********************************************!*\
  !*** ../node_modules/d3-voronoi/src/Edge.js ***!
  \**********************************************/
/*! exports provided: createEdge, createBorderEdge, setEdgeEnd, clipEdges */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEdge", function() { return createEdge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBorderEdge", function() { return createBorderEdge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setEdgeEnd", function() { return setEdgeEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clipEdges", function() { return clipEdges; });
/* harmony import */ var _Diagram__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Diagram */ "../node_modules/d3-voronoi/src/Diagram.js");


function createEdge(left, right, v0, v1) {
  var edge = [null, null],
      index = _Diagram__WEBPACK_IMPORTED_MODULE_0__["edges"].push(edge) - 1;
  edge.left = left;
  edge.right = right;
  if (v0) setEdgeEnd(edge, left, right, v0);
  if (v1) setEdgeEnd(edge, right, left, v1);
  _Diagram__WEBPACK_IMPORTED_MODULE_0__["cells"][left.index].halfedges.push(index);
  _Diagram__WEBPACK_IMPORTED_MODULE_0__["cells"][right.index].halfedges.push(index);
  return edge;
}

function createBorderEdge(left, v0, v1) {
  var edge = [v0, v1];
  edge.left = left;
  return edge;
}

function setEdgeEnd(edge, left, right, vertex) {
  if (!edge[0] && !edge[1]) {
    edge[0] = vertex;
    edge.left = left;
    edge.right = right;
  } else if (edge.left === right) {
    edge[1] = vertex;
  } else {
    edge[0] = vertex;
  }
}

// Liang–Barsky line clipping.
function clipEdge(edge, x0, y0, x1, y1) {
  var a = edge[0],
      b = edge[1],
      ax = a[0],
      ay = a[1],
      bx = b[0],
      by = b[1],
      t0 = 0,
      t1 = 1,
      dx = bx - ax,
      dy = by - ay,
      r;

  r = x0 - ax;
  if (!dx && r > 0) return;
  r /= dx;
  if (dx < 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  } else if (dx > 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  }

  r = x1 - ax;
  if (!dx && r < 0) return;
  r /= dx;
  if (dx < 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  } else if (dx > 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  }

  r = y0 - ay;
  if (!dy && r > 0) return;
  r /= dy;
  if (dy < 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  } else if (dy > 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  }

  r = y1 - ay;
  if (!dy && r < 0) return;
  r /= dy;
  if (dy < 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  } else if (dy > 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  }

  if (!(t0 > 0) && !(t1 < 1)) return true; // TODO Better check?

  if (t0 > 0) edge[0] = [ax + t0 * dx, ay + t0 * dy];
  if (t1 < 1) edge[1] = [ax + t1 * dx, ay + t1 * dy];
  return true;
}

function connectEdge(edge, x0, y0, x1, y1) {
  var v1 = edge[1];
  if (v1) return true;

  var v0 = edge[0],
      left = edge.left,
      right = edge.right,
      lx = left[0],
      ly = left[1],
      rx = right[0],
      ry = right[1],
      fx = (lx + rx) / 2,
      fy = (ly + ry) / 2,
      fm,
      fb;

  if (ry === ly) {
    if (fx < x0 || fx >= x1) return;
    if (lx > rx) {
      if (!v0) v0 = [fx, y0];
      else if (v0[1] >= y1) return;
      v1 = [fx, y1];
    } else {
      if (!v0) v0 = [fx, y1];
      else if (v0[1] < y0) return;
      v1 = [fx, y0];
    }
  } else {
    fm = (lx - rx) / (ry - ly);
    fb = fy - fm * fx;
    if (fm < -1 || fm > 1) {
      if (lx > rx) {
        if (!v0) v0 = [(y0 - fb) / fm, y0];
        else if (v0[1] >= y1) return;
        v1 = [(y1 - fb) / fm, y1];
      } else {
        if (!v0) v0 = [(y1 - fb) / fm, y1];
        else if (v0[1] < y0) return;
        v1 = [(y0 - fb) / fm, y0];
      }
    } else {
      if (ly < ry) {
        if (!v0) v0 = [x0, fm * x0 + fb];
        else if (v0[0] >= x1) return;
        v1 = [x1, fm * x1 + fb];
      } else {
        if (!v0) v0 = [x1, fm * x1 + fb];
        else if (v0[0] < x0) return;
        v1 = [x0, fm * x0 + fb];
      }
    }
  }

  edge[0] = v0;
  edge[1] = v1;
  return true;
}

function clipEdges(x0, y0, x1, y1) {
  var i = _Diagram__WEBPACK_IMPORTED_MODULE_0__["edges"].length,
      edge;

  while (i--) {
    if (!connectEdge(edge = _Diagram__WEBPACK_IMPORTED_MODULE_0__["edges"][i], x0, y0, x1, y1)
        || !clipEdge(edge, x0, y0, x1, y1)
        || !(Math.abs(edge[0][0] - edge[1][0]) > _Diagram__WEBPACK_IMPORTED_MODULE_0__["epsilon"]
            || Math.abs(edge[0][1] - edge[1][1]) > _Diagram__WEBPACK_IMPORTED_MODULE_0__["epsilon"])) {
      delete _Diagram__WEBPACK_IMPORTED_MODULE_0__["edges"][i];
    }
  }
}


/***/ }),

/***/ "../node_modules/d3-voronoi/src/RedBlackTree.js":
/*!******************************************************!*\
  !*** ../node_modules/d3-voronoi/src/RedBlackTree.js ***!
  \******************************************************/
/*! exports provided: RedBlackNode, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedBlackNode", function() { return RedBlackNode; });
function RedBlackTree() {
  this._ = null; // root node
}

function RedBlackNode(node) {
  node.U = // parent node
  node.C = // color - true for red, false for black
  node.L = // left node
  node.R = // right node
  node.P = // previous node
  node.N = null; // next node
}

RedBlackTree.prototype = {
  constructor: RedBlackTree,

  insert: function(after, node) {
    var parent, grandpa, uncle;

    if (after) {
      node.P = after;
      node.N = after.N;
      if (after.N) after.N.P = node;
      after.N = node;
      if (after.R) {
        after = after.R;
        while (after.L) after = after.L;
        after.L = node;
      } else {
        after.R = node;
      }
      parent = after;
    } else if (this._) {
      after = RedBlackFirst(this._);
      node.P = null;
      node.N = after;
      after.P = after.L = node;
      parent = after;
    } else {
      node.P = node.N = null;
      this._ = node;
      parent = null;
    }
    node.L = node.R = null;
    node.U = parent;
    node.C = true;

    after = node;
    while (parent && parent.C) {
      grandpa = parent.U;
      if (parent === grandpa.L) {
        uncle = grandpa.R;
        if (uncle && uncle.C) {
          parent.C = uncle.C = false;
          grandpa.C = true;
          after = grandpa;
        } else {
          if (after === parent.R) {
            RedBlackRotateLeft(this, parent);
            after = parent;
            parent = after.U;
          }
          parent.C = false;
          grandpa.C = true;
          RedBlackRotateRight(this, grandpa);
        }
      } else {
        uncle = grandpa.L;
        if (uncle && uncle.C) {
          parent.C = uncle.C = false;
          grandpa.C = true;
          after = grandpa;
        } else {
          if (after === parent.L) {
            RedBlackRotateRight(this, parent);
            after = parent;
            parent = after.U;
          }
          parent.C = false;
          grandpa.C = true;
          RedBlackRotateLeft(this, grandpa);
        }
      }
      parent = after.U;
    }
    this._.C = false;
  },

  remove: function(node) {
    if (node.N) node.N.P = node.P;
    if (node.P) node.P.N = node.N;
    node.N = node.P = null;

    var parent = node.U,
        sibling,
        left = node.L,
        right = node.R,
        next,
        red;

    if (!left) next = right;
    else if (!right) next = left;
    else next = RedBlackFirst(right);

    if (parent) {
      if (parent.L === node) parent.L = next;
      else parent.R = next;
    } else {
      this._ = next;
    }

    if (left && right) {
      red = next.C;
      next.C = node.C;
      next.L = left;
      left.U = next;
      if (next !== right) {
        parent = next.U;
        next.U = node.U;
        node = next.R;
        parent.L = node;
        next.R = right;
        right.U = next;
      } else {
        next.U = parent;
        parent = next;
        node = next.R;
      }
    } else {
      red = node.C;
      node = next;
    }

    if (node) node.U = parent;
    if (red) return;
    if (node && node.C) { node.C = false; return; }

    do {
      if (node === this._) break;
      if (node === parent.L) {
        sibling = parent.R;
        if (sibling.C) {
          sibling.C = false;
          parent.C = true;
          RedBlackRotateLeft(this, parent);
          sibling = parent.R;
        }
        if ((sibling.L && sibling.L.C)
            || (sibling.R && sibling.R.C)) {
          if (!sibling.R || !sibling.R.C) {
            sibling.L.C = false;
            sibling.C = true;
            RedBlackRotateRight(this, sibling);
            sibling = parent.R;
          }
          sibling.C = parent.C;
          parent.C = sibling.R.C = false;
          RedBlackRotateLeft(this, parent);
          node = this._;
          break;
        }
      } else {
        sibling = parent.L;
        if (sibling.C) {
          sibling.C = false;
          parent.C = true;
          RedBlackRotateRight(this, parent);
          sibling = parent.L;
        }
        if ((sibling.L && sibling.L.C)
          || (sibling.R && sibling.R.C)) {
          if (!sibling.L || !sibling.L.C) {
            sibling.R.C = false;
            sibling.C = true;
            RedBlackRotateLeft(this, sibling);
            sibling = parent.L;
          }
          sibling.C = parent.C;
          parent.C = sibling.L.C = false;
          RedBlackRotateRight(this, parent);
          node = this._;
          break;
        }
      }
      sibling.C = true;
      node = parent;
      parent = parent.U;
    } while (!node.C);

    if (node) node.C = false;
  }
};

function RedBlackRotateLeft(tree, node) {
  var p = node,
      q = node.R,
      parent = p.U;

  if (parent) {
    if (parent.L === p) parent.L = q;
    else parent.R = q;
  } else {
    tree._ = q;
  }

  q.U = parent;
  p.U = q;
  p.R = q.L;
  if (p.R) p.R.U = p;
  q.L = p;
}

function RedBlackRotateRight(tree, node) {
  var p = node,
      q = node.L,
      parent = p.U;

  if (parent) {
    if (parent.L === p) parent.L = q;
    else parent.R = q;
  } else {
    tree._ = q;
  }

  q.U = parent;
  p.U = q;
  p.L = q.R;
  if (p.L) p.L.U = p;
  q.R = p;
}

function RedBlackFirst(node) {
  while (node.L) node = node.L;
  return node;
}

/* harmony default export */ __webpack_exports__["default"] = (RedBlackTree);


/***/ }),

/***/ "../node_modules/d3-voronoi/src/constant.js":
/*!**************************************************!*\
  !*** ../node_modules/d3-voronoi/src/constant.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),

/***/ "../node_modules/d3-voronoi/src/point.js":
/*!***********************************************!*\
  !*** ../node_modules/d3-voronoi/src/point.js ***!
  \***********************************************/
/*! exports provided: x, y */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return y; });
function x(d) {
  return d[0];
}

function y(d) {
  return d[1];
}


/***/ }),

/***/ "../node_modules/d3-voronoi/src/voronoi.js":
/*!*************************************************!*\
  !*** ../node_modules/d3-voronoi/src/voronoi.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant */ "../node_modules/d3-voronoi/src/constant.js");
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./point */ "../node_modules/d3-voronoi/src/point.js");
/* harmony import */ var _Diagram__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Diagram */ "../node_modules/d3-voronoi/src/Diagram.js");




/* harmony default export */ __webpack_exports__["default"] = (function() {
  var x = _point__WEBPACK_IMPORTED_MODULE_1__["x"],
      y = _point__WEBPACK_IMPORTED_MODULE_1__["y"],
      extent = null;

  function voronoi(data) {
    return new _Diagram__WEBPACK_IMPORTED_MODULE_2__["default"](data.map(function(d, i) {
      var s = [Math.round(x(d, i, data) / _Diagram__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) * _Diagram__WEBPACK_IMPORTED_MODULE_2__["epsilon"], Math.round(y(d, i, data) / _Diagram__WEBPACK_IMPORTED_MODULE_2__["epsilon"]) * _Diagram__WEBPACK_IMPORTED_MODULE_2__["epsilon"]];
      s.index = i;
      s.data = d;
      return s;
    }), extent);
  }

  voronoi.polygons = function(data) {
    return voronoi(data).polygons();
  };

  voronoi.links = function(data) {
    return voronoi(data).links();
  };

  voronoi.triangles = function(data) {
    return voronoi(data).triangles();
  };

  voronoi.x = function(_) {
    return arguments.length ? (x = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), voronoi) : x;
  };

  voronoi.y = function(_) {
    return arguments.length ? (y = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), voronoi) : y;
  };

  voronoi.extent = function(_) {
    return arguments.length ? (extent = _ == null ? null : [[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]], voronoi) : extent && [[extent[0][0], extent[0][1]], [extent[1][0], extent[1][1]]];
  };

  voronoi.size = function(_) {
    return arguments.length ? (extent = _ == null ? null : [[0, 0], [+_[0], +_[1]]], voronoi) : extent && [extent[1][0] - extent[0][0], extent[1][1] - extent[0][1]];
  };

  return voronoi;
});


/***/ })

}]);
//# sourceMappingURL=npm.d3-voronoi.42704bd17e5ab0ec8f27.js.map