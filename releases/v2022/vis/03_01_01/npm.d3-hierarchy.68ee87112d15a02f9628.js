(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["npm.d3-hierarchy"],{

/***/ "../node_modules/d3-hierarchy/index.js":
/*!*********************************************!*\
  !*** ../node_modules/d3-hierarchy/index.js ***!
  \*********************************************/
/*! exports provided: cluster, hierarchy, pack, packSiblings, packEnclose, partition, stratify, tree, treemap, treemapBinary, treemapDice, treemapSlice, treemapSliceDice, treemapSquarify, treemapResquarify */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_cluster__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/cluster */ "../node_modules/d3-hierarchy/src/cluster.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cluster", function() { return _src_cluster__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _src_hierarchy_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/hierarchy/index */ "../node_modules/d3-hierarchy/src/hierarchy/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hierarchy", function() { return _src_hierarchy_index__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _src_pack_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/pack/index */ "../node_modules/d3-hierarchy/src/pack/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pack", function() { return _src_pack_index__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _src_pack_siblings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/pack/siblings */ "../node_modules/d3-hierarchy/src/pack/siblings.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "packSiblings", function() { return _src_pack_siblings__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _src_pack_enclose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/pack/enclose */ "../node_modules/d3-hierarchy/src/pack/enclose.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "packEnclose", function() { return _src_pack_enclose__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _src_partition__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/partition */ "../node_modules/d3-hierarchy/src/partition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "partition", function() { return _src_partition__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _src_stratify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/stratify */ "../node_modules/d3-hierarchy/src/stratify.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stratify", function() { return _src_stratify__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _src_tree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/tree */ "../node_modules/d3-hierarchy/src/tree.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tree", function() { return _src_tree__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _src_treemap_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./src/treemap/index */ "../node_modules/d3-hierarchy/src/treemap/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "treemap", function() { return _src_treemap_index__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _src_treemap_binary__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./src/treemap/binary */ "../node_modules/d3-hierarchy/src/treemap/binary.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "treemapBinary", function() { return _src_treemap_binary__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _src_treemap_dice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./src/treemap/dice */ "../node_modules/d3-hierarchy/src/treemap/dice.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "treemapDice", function() { return _src_treemap_dice__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _src_treemap_slice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./src/treemap/slice */ "../node_modules/d3-hierarchy/src/treemap/slice.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "treemapSlice", function() { return _src_treemap_slice__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _src_treemap_sliceDice__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./src/treemap/sliceDice */ "../node_modules/d3-hierarchy/src/treemap/sliceDice.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "treemapSliceDice", function() { return _src_treemap_sliceDice__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _src_treemap_squarify__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./src/treemap/squarify */ "../node_modules/d3-hierarchy/src/treemap/squarify.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "treemapSquarify", function() { return _src_treemap_squarify__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _src_treemap_resquarify__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./src/treemap/resquarify */ "../node_modules/d3-hierarchy/src/treemap/resquarify.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "treemapResquarify", function() { return _src_treemap_resquarify__WEBPACK_IMPORTED_MODULE_14__["default"]; });


















/***/ }),

/***/ "../node_modules/d3-hierarchy/src/accessors.js":
/*!*****************************************************!*\
  !*** ../node_modules/d3-hierarchy/src/accessors.js ***!
  \*****************************************************/
/*! exports provided: optional, required */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optional", function() { return optional; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "required", function() { return required; });
function optional(f) {
  return f == null ? null : required(f);
}

function required(f) {
  if (typeof f !== "function") throw new Error;
  return f;
}


/***/ }),

/***/ "../node_modules/d3-hierarchy/src/array.js":
/*!*************************************************!*\
  !*** ../node_modules/d3-hierarchy/src/array.js ***!
  \*************************************************/
/*! exports provided: slice, shuffle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slice", function() { return slice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shuffle", function() { return shuffle; });
var slice = Array.prototype.slice;

function shuffle(array) {
  var m = array.length,
      t,
      i;

  while (m) {
    i = Math.random() * m-- | 0;
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}


/***/ }),

/***/ "../node_modules/d3-hierarchy/src/cluster.js":
/*!***************************************************!*\
  !*** ../node_modules/d3-hierarchy/src/cluster.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function defaultSeparation(a, b) {
  return a.parent === b.parent ? 1 : 2;
}

function meanX(children) {
  return children.reduce(meanXReduce, 0) / children.length;
}

function meanXReduce(x, c) {
  return x + c.x;
}

function maxY(children) {
  return 1 + children.reduce(maxYReduce, 0);
}

function maxYReduce(y, c) {
  return Math.max(y, c.y);
}

function leafLeft(node) {
  var children;
  while (children = node.children) node = children[0];
  return node;
}

function leafRight(node) {
  var children;
  while (children = node.children) node = children[children.length - 1];
  return node;
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  var separation = defaultSeparation,
      dx = 1,
      dy = 1,
      nodeSize = false;

  function cluster(root) {
    var previousNode,
        x = 0;

    // First walk, computing the initial x & y values.
    root.eachAfter(function(node) {
      var children = node.children;
      if (children) {
        node.x = meanX(children);
        node.y = maxY(children);
      } else {
        node.x = previousNode ? x += separation(node, previousNode) : 0;
        node.y = 0;
        previousNode = node;
      }
    });

    var left = leafLeft(root),
        right = leafRight(root),
        x0 = left.x - separation(left, right) / 2,
        x1 = right.x + separation(right, left) / 2;

    // Second walk, normalizing x & y to the desired size.
    return root.eachAfter(nodeSize ? function(node) {
      node.x = (node.x - root.x) * dx;
      node.y = (root.y - node.y) * dy;
    } : function(node) {
      node.x = (node.x - x0) / (x1 - x0) * dx;
      node.y = (1 - (root.y ? node.y / root.y : 1)) * dy;
    });
  }

  cluster.separation = function(x) {
    return arguments.length ? (separation = x, cluster) : separation;
  };

  cluster.size = function(x) {
    return arguments.length ? (nodeSize = false, dx = +x[0], dy = +x[1], cluster) : (nodeSize ? null : [dx, dy]);
  };

  cluster.nodeSize = function(x) {
    return arguments.length ? (nodeSize = true, dx = +x[0], dy = +x[1], cluster) : (nodeSize ? [dx, dy] : null);
  };

  return cluster;
});


/***/ }),

/***/ "../node_modules/d3-hierarchy/src/constant.js":
/*!****************************************************!*\
  !*** ../node_modules/d3-hierarchy/src/constant.js ***!
  \****************************************************/
/*! exports provided: constantZero, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constantZero", function() { return constantZero; });
function constantZero() {
  return 0;
}

/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),

/***/ "../node_modules/d3-hierarchy/src/hierarchy/ancestors.js":
/*!***************************************************************!*\
  !*** ../node_modules/d3-hierarchy/src/hierarchy/ancestors.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {
  var node = this, nodes = [node];
  while (node = node.parent) {
    nodes.push(node);
  }
  return nodes;
});


/***/ }),

/***/ "../node_modules/d3-hierarchy/src/hierarchy/count.js":
/*!***********************************************************!*\
  !*** ../node_modules/d3-hierarchy/src/hierarchy/count.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function count(node) {
  var sum = 0,
      children = node.children,
      i = children && children.length;
  if (!i) sum = 1;
  else while (--i >= 0) sum += children[i].value;
  node.value = sum;
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return this.eachAfter(count);
});


/***/ }),

/***/ "../node_modules/d3-hierarchy/src/hierarchy/descendants.js":
/*!*****************************************************************!*\
  !*** ../node_modules/d3-hierarchy/src/hierarchy/descendants.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {
  var nodes = [];
  this.each(function(node) {
    nodes.push(node);
  });
  return nodes;
});


/***/ }),

/***/ "../node_modules/d3-hierarchy/src/hierarchy/each.js":
/*!**********************************************************!*\
  !*** ../node_modules/d3-hierarchy/src/hierarchy/each.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(callback) {
  var node = this, current, next = [node], children, i, n;
  do {
    current = next.reverse(), next = [];
    while (node = current.pop()) {
      callback(node), children = node.children;
      if (children) for (i = 0, n = children.length; i < n; ++i) {
        next.push(children[i]);
      }
    }
  } while (next.length);
  return this;
});


/***/ }),

/***/ "../node_modules/d3-hierarchy/src/hierarchy/eachAfter.js":
/*!***************************************************************!*\
  !*** ../node_modules/d3-hierarchy/src/hierarchy/eachAfter.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(callback) {
  var node = this, nodes = [node], next = [], children, i, n;
  while (node = nodes.pop()) {
    next.push(node), children = node.children;
    if (children) for (i = 0, n = children.length; i < n; ++i) {
      nodes.push(children[i]);
    }
  }
  while (node = next.pop()) {
    callback(node);
  }
  return this;
});


/***/ }),

/***/ "../node_modules/d3-hierarchy/src/hierarchy/eachBefore.js":
/*!****************************************************************!*\
  !*** ../node_modules/d3-hierarchy/src/hierarchy/eachBefore.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(callback) {
  var node = this, nodes = [node], children, i;
  while (node = nodes.pop()) {
    callback(node), children = node.children;
    if (children) for (i = children.length - 1; i >= 0; --i) {
      nodes.push(children[i]);
    }
  }
  return this;
});


/***/ }),

/***/ "../node_modules/d3-hierarchy/src/hierarchy/index.js":
/*!***********************************************************!*\
  !*** ../node_modules/d3-hierarchy/src/hierarchy/index.js ***!
  \***********************************************************/
/*! exports provided: default, computeHeight, Node */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return hierarchy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeHeight", function() { return computeHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Node", function() { return Node; });
/* harmony import */ var _count__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./count */ "../node_modules/d3-hierarchy/src/hierarchy/count.js");
/* harmony import */ var _each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./each */ "../node_modules/d3-hierarchy/src/hierarchy/each.js");
/* harmony import */ var _eachBefore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./eachBefore */ "../node_modules/d3-hierarchy/src/hierarchy/eachBefore.js");
/* harmony import */ var _eachAfter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eachAfter */ "../node_modules/d3-hierarchy/src/hierarchy/eachAfter.js");
/* harmony import */ var _sum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sum */ "../node_modules/d3-hierarchy/src/hierarchy/sum.js");
/* harmony import */ var _sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sort */ "../node_modules/d3-hierarchy/src/hierarchy/sort.js");
/* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./path */ "../node_modules/d3-hierarchy/src/hierarchy/path.js");
/* harmony import */ var _ancestors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ancestors */ "../node_modules/d3-hierarchy/src/hierarchy/ancestors.js");
/* harmony import */ var _descendants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./descendants */ "../node_modules/d3-hierarchy/src/hierarchy/descendants.js");
/* harmony import */ var _leaves__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./leaves */ "../node_modules/d3-hierarchy/src/hierarchy/leaves.js");
/* harmony import */ var _links__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./links */ "../node_modules/d3-hierarchy/src/hierarchy/links.js");












function hierarchy(data, children) {
  var root = new Node(data),
      valued = +data.value && (root.value = data.value),
      node,
      nodes = [root],
      child,
      childs,
      i,
      n;

  if (children == null) children = defaultChildren;

  while (node = nodes.pop()) {
    if (valued) node.value = +node.data.value;
    if ((childs = children(node.data)) && (n = childs.length)) {
      node.children = new Array(n);
      for (i = n - 1; i >= 0; --i) {
        nodes.push(child = node.children[i] = new Node(childs[i]));
        child.parent = node;
        child.depth = node.depth + 1;
      }
    }
  }

  return root.eachBefore(computeHeight);
}

function node_copy() {
  return hierarchy(this).eachBefore(copyData);
}

function defaultChildren(d) {
  return d.children;
}

function copyData(node) {
  node.data = node.data.data;
}

function computeHeight(node) {
  var height = 0;
  do node.height = height;
  while ((node = node.parent) && (node.height < ++height));
}

function Node(data) {
  this.data = data;
  this.depth =
  this.height = 0;
  this.parent = null;
}

Node.prototype = hierarchy.prototype = {
  constructor: Node,
  count: _count__WEBPACK_IMPORTED_MODULE_0__["default"],
  each: _each__WEBPACK_IMPORTED_MODULE_1__["default"],
  eachAfter: _eachAfter__WEBPACK_IMPORTED_MODULE_3__["default"],
  eachBefore: _eachBefore__WEBPACK_IMPORTED_MODULE_2__["default"],
  sum: _sum__WEBPACK_IMPORTED_MODULE_4__["default"],
  sort: _sort__WEBPACK_IMPORTED_MODULE_5__["default"],
  path: _path__WEBPACK_IMPORTED_MODULE_6__["default"],
  ancestors: _ancestors__WEBPACK_IMPORTED_MODULE_7__["default"],
  descendants: _descendants__WEBPACK_IMPORTED_MODULE_8__["default"],
  leaves: _leaves__WEBPACK_IMPORTED_MODULE_9__["default"],
  links: _links__WEBPACK_IMPORTED_MODULE_10__["default"],
  copy: node_copy
};


/***/ }),

/***/ "../node_modules/d3-hierarchy/src/hierarchy/leaves.js":
/*!************************************************************!*\
  !*** ../node_modules/d3-hierarchy/src/hierarchy/leaves.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {
  var leaves = [];
  this.eachBefore(function(node) {
    if (!node.children) {
      leaves.push(node);
    }
  });
  return leaves;
});


/***/ }),

/***/ "../node_modules/d3-hierarchy/src/hierarchy/links.js":
/*!***********************************************************!*\
  !*** ../node_modules/d3-hierarchy/src/hierarchy/links.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {
  var root = this, links = [];
  root.each(function(node) {
    if (node !== root) { // Don’t include the root’s parent, if any.
      links.push({source: node.parent, target: node});
    }
  });
  return links;
});


/***/ }),

/***/ "../node_modules/d3-hierarchy/src/hierarchy/path.js":
/*!**********************************************************!*\
  !*** ../node_modules/d3-hierarchy/src/hierarchy/path.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(end) {
  var start = this,
      ancestor = leastCommonAncestor(start, end),
      nodes = [start];
  while (start !== ancestor) {
    start = start.parent;
    nodes.push(start);
  }
  var k = nodes.length;
  while (end !== ancestor) {
    nodes.splice(k, 0, end);
    end = end.parent;
  }
  return nodes;
});

function leastCommonAncestor(a, b) {
  if (a === b) return a;
  var aNodes = a.ancestors(),
      bNodes = b.ancestors(),
      c = null;
  a = aNodes.pop();
  b = bNodes.pop();
  while (a === b) {
    c = a;
    a = aNodes.pop();
    b = bNodes.pop();
  }
  return c;
}


/***/ }),

/***/ "../node_modules/d3-hierarchy/src/hierarchy/sort.js":
/*!**********************************************************!*\
  !*** ../node_modules/d3-hierarchy/src/hierarchy/sort.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(compare) {
  return this.eachBefore(function(node) {
    if (node.children) {
      node.children.sort(compare);
    }
  });
});


/***/ }),

/***/ "../node_modules/d3-hierarchy/src/hierarchy/sum.js":
/*!*********************************************************!*\
  !*** ../node_modules/d3-hierarchy/src/hierarchy/sum.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(value) {
  return this.eachAfter(function(node) {
    var sum = +value(node.data) || 0,
        children = node.children,
        i = children && children.length;
    while (--i >= 0) sum += children[i].value;
    node.value = sum;
  });
});


/***/ }),

/***/ "../node_modules/d3-hierarchy/src/pack/enclose.js":
/*!********************************************************!*\
  !*** ../node_modules/d3-hierarchy/src/pack/enclose.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../array */ "../node_modules/d3-hierarchy/src/array.js");


/* harmony default export */ __webpack_exports__["default"] = (function(circles) {
  var i = 0, n = (circles = Object(_array__WEBPACK_IMPORTED_MODULE_0__["shuffle"])(_array__WEBPACK_IMPORTED_MODULE_0__["slice"].call(circles))).length, B = [], p, e;

  while (i < n) {
    p = circles[i];
    if (e && enclosesWeak(e, p)) ++i;
    else e = encloseBasis(B = extendBasis(B, p)), i = 0;
  }

  return e;
});

function extendBasis(B, p) {
  var i, j;

  if (enclosesWeakAll(p, B)) return [p];

  // If we get here then B must have at least one element.
  for (i = 0; i < B.length; ++i) {
    if (enclosesNot(p, B[i])
        && enclosesWeakAll(encloseBasis2(B[i], p), B)) {
      return [B[i], p];
    }
  }

  // If we get here then B must have at least two elements.
  for (i = 0; i < B.length - 1; ++i) {
    for (j = i + 1; j < B.length; ++j) {
      if (enclosesNot(encloseBasis2(B[i], B[j]), p)
          && enclosesNot(encloseBasis2(B[i], p), B[j])
          && enclosesNot(encloseBasis2(B[j], p), B[i])
          && enclosesWeakAll(encloseBasis3(B[i], B[j], p), B)) {
        return [B[i], B[j], p];
      }
    }
  }

  // If we get here then something is very wrong.
  throw new Error;
}

function enclosesNot(a, b) {
  var dr = a.r - b.r, dx = b.x - a.x, dy = b.y - a.y;
  return dr < 0 || dr * dr < dx * dx + dy * dy;
}

function enclosesWeak(a, b) {
  var dr = a.r - b.r + 1e-6, dx = b.x - a.x, dy = b.y - a.y;
  return dr > 0 && dr * dr > dx * dx + dy * dy;
}

function enclosesWeakAll(a, B) {
  for (var i = 0; i < B.length; ++i) {
    if (!enclosesWeak(a, B[i])) {
      return false;
    }
  }
  return true;
}

function encloseBasis(B) {
  switch (B.length) {
    case 1: return encloseBasis1(B[0]);
    case 2: return encloseBasis2(B[0], B[1]);
    case 3: return encloseBasis3(B[0], B[1], B[2]);
  }
}

function encloseBasis1(a) {
  return {
    x: a.x,
    y: a.y,
    r: a.r
  };
}

function encloseBasis2(a, b) {
  var x1 = a.x, y1 = a.y, r1 = a.r,
      x2 = b.x, y2 = b.y, r2 = b.r,
      x21 = x2 - x1, y21 = y2 - y1, r21 = r2 - r1,
      l = Math.sqrt(x21 * x21 + y21 * y21);
  return {
    x: (x1 + x2 + x21 / l * r21) / 2,
    y: (y1 + y2 + y21 / l * r21) / 2,
    r: (l + r1 + r2) / 2
  };
}

function encloseBasis3(a, b, c) {
  var x1 = a.x, y1 = a.y, r1 = a.r,
      x2 = b.x, y2 = b.y, r2 = b.r,
      x3 = c.x, y3 = c.y, r3 = c.r,
      a2 = x1 - x2,
      a3 = x1 - x3,
      b2 = y1 - y2,
      b3 = y1 - y3,
      c2 = r2 - r1,
      c3 = r3 - r1,
      d1 = x1 * x1 + y1 * y1 - r1 * r1,
      d2 = d1 - x2 * x2 - y2 * y2 + r2 * r2,
      d3 = d1 - x3 * x3 - y3 * y3 + r3 * r3,
      ab = a3 * b2 - a2 * b3,
      xa = (b2 * d3 - b3 * d2) / (ab * 2) - x1,
      xb = (b3 * c2 - b2 * c3) / ab,
      ya = (a3 * d2 - a2 * d3) / (ab * 2) - y1,
      yb = (a2 * c3 - a3 * c2) / ab,
      A = xb * xb + yb * yb - 1,
      B = 2 * (r1 + xa * xb + ya * yb),
      C = xa * xa + ya * ya - r1 * r1,
      r = -(A ? (B + Math.sqrt(B * B - 4 * A * C)) / (2 * A) : C / B);
  return {
    x: x1 + xa + xb * r,
    y: y1 + ya + yb * r,
    r: r
  };
}


/***/ }),

/***/ "../node_modules/d3-hierarchy/src/pack/index.js":
/*!******************************************************!*\
  !*** ../node_modules/d3-hierarchy/src/pack/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _siblings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./siblings */ "../node_modules/d3-hierarchy/src/pack/siblings.js");
/* harmony import */ var _accessors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accessors */ "../node_modules/d3-hierarchy/src/accessors.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constant */ "../node_modules/d3-hierarchy/src/constant.js");




function defaultRadius(d) {
  return Math.sqrt(d.value);
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  var radius = null,
      dx = 1,
      dy = 1,
      padding = _constant__WEBPACK_IMPORTED_MODULE_2__["constantZero"];

  function pack(root) {
    root.x = dx / 2, root.y = dy / 2;
    if (radius) {
      root.eachBefore(radiusLeaf(radius))
          .eachAfter(packChildren(padding, 0.5))
          .eachBefore(translateChild(1));
    } else {
      root.eachBefore(radiusLeaf(defaultRadius))
          .eachAfter(packChildren(_constant__WEBPACK_IMPORTED_MODULE_2__["constantZero"], 1))
          .eachAfter(packChildren(padding, root.r / Math.min(dx, dy)))
          .eachBefore(translateChild(Math.min(dx, dy) / (2 * root.r)));
    }
    return root;
  }

  pack.radius = function(x) {
    return arguments.length ? (radius = Object(_accessors__WEBPACK_IMPORTED_MODULE_1__["optional"])(x), pack) : radius;
  };

  pack.size = function(x) {
    return arguments.length ? (dx = +x[0], dy = +x[1], pack) : [dx, dy];
  };

  pack.padding = function(x) {
    return arguments.length ? (padding = typeof x === "function" ? x : Object(_constant__WEBPACK_IMPORTED_MODULE_2__["default"])(+x), pack) : padding;
  };

  return pack;
});

function radiusLeaf(radius) {
  return function(node) {
    if (!node.children) {
      node.r = Math.max(0, +radius(node) || 0);
    }
  };
}

function packChildren(padding, k) {
  return function(node) {
    if (children = node.children) {
      var children,
          i,
          n = children.length,
          r = padding(node) * k || 0,
          e;

      if (r) for (i = 0; i < n; ++i) children[i].r += r;
      e = Object(_siblings__WEBPACK_IMPORTED_MODULE_0__["packEnclose"])(children);
      if (r) for (i = 0; i < n; ++i) children[i].r -= r;
      node.r = e + r;
    }
  };
}

function translateChild(k) {
  return function(node) {
    var parent = node.parent;
    node.r *= k;
    if (parent) {
      node.x = parent.x + k * node.x;
      node.y = parent.y + k * node.y;
    }
  };
}


/***/ }),

/***/ "../node_modules/d3-hierarchy/src/pack/siblings.js":
/*!*********************************************************!*\
  !*** ../node_modules/d3-hierarchy/src/pack/siblings.js ***!
  \*********************************************************/
/*! exports provided: packEnclose, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "packEnclose", function() { return packEnclose; });
/* harmony import */ var _enclose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enclose */ "../node_modules/d3-hierarchy/src/pack/enclose.js");


function place(a, b, c) {
  var ax = a.x,
      ay = a.y,
      da = b.r + c.r,
      db = a.r + c.r,
      dx = b.x - ax,
      dy = b.y - ay,
      dc = dx * dx + dy * dy;
  if (dc) {
    var x = 0.5 + ((db *= db) - (da *= da)) / (2 * dc),
        y = Math.sqrt(Math.max(0, 2 * da * (db + dc) - (db -= dc) * db - da * da)) / (2 * dc);
    c.x = ax + x * dx + y * dy;
    c.y = ay + x * dy - y * dx;
  } else {
    c.x = ax + db;
    c.y = ay;
  }
}

function intersects(a, b) {
  var dx = b.x - a.x,
      dy = b.y - a.y,
      dr = a.r + b.r;
  return dr * dr - 1e-6 > dx * dx + dy * dy;
}

function score(node) {
  var a = node._,
      b = node.next._,
      ab = a.r + b.r,
      dx = (a.x * b.r + b.x * a.r) / ab,
      dy = (a.y * b.r + b.y * a.r) / ab;
  return dx * dx + dy * dy;
}

function Node(circle) {
  this._ = circle;
  this.next = null;
  this.previous = null;
}

function packEnclose(circles) {
  if (!(n = circles.length)) return 0;

  var a, b, c, n, aa, ca, i, j, k, sj, sk;

  // Place the first circle.
  a = circles[0], a.x = 0, a.y = 0;
  if (!(n > 1)) return a.r;

  // Place the second circle.
  b = circles[1], a.x = -b.r, b.x = a.r, b.y = 0;
  if (!(n > 2)) return a.r + b.r;

  // Place the third circle.
  place(b, a, c = circles[2]);

  // Initialize the front-chain using the first three circles a, b and c.
  a = new Node(a), b = new Node(b), c = new Node(c);
  a.next = c.previous = b;
  b.next = a.previous = c;
  c.next = b.previous = a;

  // Attempt to place each remaining circle…
  pack: for (i = 3; i < n; ++i) {
    place(a._, b._, c = circles[i]), c = new Node(c);

    // Find the closest intersecting circle on the front-chain, if any.
    // “Closeness” is determined by linear distance along the front-chain.
    // “Ahead” or “behind” is likewise determined by linear distance.
    j = b.next, k = a.previous, sj = b._.r, sk = a._.r;
    do {
      if (sj <= sk) {
        if (intersects(j._, c._)) {
          b = j, a.next = b, b.previous = a, --i;
          continue pack;
        }
        sj += j._.r, j = j.next;
      } else {
        if (intersects(k._, c._)) {
          a = k, a.next = b, b.previous = a, --i;
          continue pack;
        }
        sk += k._.r, k = k.previous;
      }
    } while (j !== k.next);

    // Success! Insert the new circle c between a and b.
    c.previous = a, c.next = b, a.next = b.previous = b = c;

    // Compute the new closest circle pair to the centroid.
    aa = score(a);
    while ((c = c.next) !== b) {
      if ((ca = score(c)) < aa) {
        a = c, aa = ca;
      }
    }
    b = a.next;
  }

  // Compute the enclosing circle of the front chain.
  a = [b._], c = b; while ((c = c.next) !== b) a.push(c._); c = Object(_enclose__WEBPACK_IMPORTED_MODULE_0__["default"])(a);

  // Translate the circles to put the enclosing circle around the origin.
  for (i = 0; i < n; ++i) a = circles[i], a.x -= c.x, a.y -= c.y;

  return c.r;
}

/* harmony default export */ __webpack_exports__["default"] = (function(circles) {
  packEnclose(circles);
  return circles;
});


/***/ }),

/***/ "../node_modules/d3-hierarchy/src/partition.js":
/*!*****************************************************!*\
  !*** ../node_modules/d3-hierarchy/src/partition.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _treemap_round__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./treemap/round */ "../node_modules/d3-hierarchy/src/treemap/round.js");
/* harmony import */ var _treemap_dice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./treemap/dice */ "../node_modules/d3-hierarchy/src/treemap/dice.js");



/* harmony default export */ __webpack_exports__["default"] = (function() {
  var dx = 1,
      dy = 1,
      padding = 0,
      round = false;

  function partition(root) {
    var n = root.height + 1;
    root.x0 =
    root.y0 = padding;
    root.x1 = dx;
    root.y1 = dy / n;
    root.eachBefore(positionNode(dy, n));
    if (round) root.eachBefore(_treemap_round__WEBPACK_IMPORTED_MODULE_0__["default"]);
    return root;
  }

  function positionNode(dy, n) {
    return function(node) {
      if (node.children) {
        Object(_treemap_dice__WEBPACK_IMPORTED_MODULE_1__["default"])(node, node.x0, dy * (node.depth + 1) / n, node.x1, dy * (node.depth + 2) / n);
      }
      var x0 = node.x0,
          y0 = node.y0,
          x1 = node.x1 - padding,
          y1 = node.y1 - padding;
      if (x1 < x0) x0 = x1 = (x0 + x1) / 2;
      if (y1 < y0) y0 = y1 = (y0 + y1) / 2;
      node.x0 = x0;
      node.y0 = y0;
      node.x1 = x1;
      node.y1 = y1;
    };
  }

  partition.round = function(x) {
    return arguments.length ? (round = !!x, partition) : round;
  };

  partition.size = function(x) {
    return arguments.length ? (dx = +x[0], dy = +x[1], partition) : [dx, dy];
  };

  partition.padding = function(x) {
    return arguments.length ? (padding = +x, partition) : padding;
  };

  return partition;
});


/***/ }),

/***/ "../node_modules/d3-hierarchy/src/stratify.js":
/*!****************************************************!*\
  !*** ../node_modules/d3-hierarchy/src/stratify.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _accessors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accessors */ "../node_modules/d3-hierarchy/src/accessors.js");
/* harmony import */ var _hierarchy_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hierarchy/index */ "../node_modules/d3-hierarchy/src/hierarchy/index.js");



var keyPrefix = "$", // Protect against keys like “__proto__”.
    preroot = {depth: -1},
    ambiguous = {};

function defaultId(d) {
  return d.id;
}

function defaultParentId(d) {
  return d.parentId;
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  var id = defaultId,
      parentId = defaultParentId;

  function stratify(data) {
    var d,
        i,
        n = data.length,
        root,
        parent,
        node,
        nodes = new Array(n),
        nodeId,
        nodeKey,
        nodeByKey = {};

    for (i = 0; i < n; ++i) {
      d = data[i], node = nodes[i] = new _hierarchy_index__WEBPACK_IMPORTED_MODULE_1__["Node"](d);
      if ((nodeId = id(d, i, data)) != null && (nodeId += "")) {
        nodeKey = keyPrefix + (node.id = nodeId);
        nodeByKey[nodeKey] = nodeKey in nodeByKey ? ambiguous : node;
      }
    }

    for (i = 0; i < n; ++i) {
      node = nodes[i], nodeId = parentId(data[i], i, data);
      if (nodeId == null || !(nodeId += "")) {
        if (root) throw new Error("multiple roots");
        root = node;
      } else {
        parent = nodeByKey[keyPrefix + nodeId];
        if (!parent) throw new Error("missing: " + nodeId);
        if (parent === ambiguous) throw new Error("ambiguous: " + nodeId);
        if (parent.children) parent.children.push(node);
        else parent.children = [node];
        node.parent = parent;
      }
    }

    if (!root) throw new Error("no root");
    root.parent = preroot;
    root.eachBefore(function(node) { node.depth = node.parent.depth + 1; --n; }).eachBefore(_hierarchy_index__WEBPACK_IMPORTED_MODULE_1__["computeHeight"]);
    root.parent = null;
    if (n > 0) throw new Error("cycle");

    return root;
  }

  stratify.id = function(x) {
    return arguments.length ? (id = Object(_accessors__WEBPACK_IMPORTED_MODULE_0__["required"])(x), stratify) : id;
  };

  stratify.parentId = function(x) {
    return arguments.length ? (parentId = Object(_accessors__WEBPACK_IMPORTED_MODULE_0__["required"])(x), stratify) : parentId;
  };

  return stratify;
});


/***/ }),

/***/ "../node_modules/d3-hierarchy/src/tree.js":
/*!************************************************!*\
  !*** ../node_modules/d3-hierarchy/src/tree.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hierarchy_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hierarchy/index */ "../node_modules/d3-hierarchy/src/hierarchy/index.js");


function defaultSeparation(a, b) {
  return a.parent === b.parent ? 1 : 2;
}

// function radialSeparation(a, b) {
//   return (a.parent === b.parent ? 1 : 2) / a.depth;
// }

// This function is used to traverse the left contour of a subtree (or
// subforest). It returns the successor of v on this contour. This successor is
// either given by the leftmost child of v or by the thread of v. The function
// returns null if and only if v is on the highest level of its subtree.
function nextLeft(v) {
  var children = v.children;
  return children ? children[0] : v.t;
}

// This function works analogously to nextLeft.
function nextRight(v) {
  var children = v.children;
  return children ? children[children.length - 1] : v.t;
}

// Shifts the current subtree rooted at w+. This is done by increasing
// prelim(w+) and mod(w+) by shift.
function moveSubtree(wm, wp, shift) {
  var change = shift / (wp.i - wm.i);
  wp.c -= change;
  wp.s += shift;
  wm.c += change;
  wp.z += shift;
  wp.m += shift;
}

// All other shifts, applied to the smaller subtrees between w- and w+, are
// performed by this function. To prepare the shifts, we have to adjust
// change(w+), shift(w+), and change(w-).
function executeShifts(v) {
  var shift = 0,
      change = 0,
      children = v.children,
      i = children.length,
      w;
  while (--i >= 0) {
    w = children[i];
    w.z += shift;
    w.m += shift;
    shift += w.s + (change += w.c);
  }
}

// If vi-’s ancestor is a sibling of v, returns vi-’s ancestor. Otherwise,
// returns the specified (default) ancestor.
function nextAncestor(vim, v, ancestor) {
  return vim.a.parent === v.parent ? vim.a : ancestor;
}

function TreeNode(node, i) {
  this._ = node;
  this.parent = null;
  this.children = null;
  this.A = null; // default ancestor
  this.a = this; // ancestor
  this.z = 0; // prelim
  this.m = 0; // mod
  this.c = 0; // change
  this.s = 0; // shift
  this.t = null; // thread
  this.i = i; // number
}

TreeNode.prototype = Object.create(_hierarchy_index__WEBPACK_IMPORTED_MODULE_0__["Node"].prototype);

function treeRoot(root) {
  var tree = new TreeNode(root, 0),
      node,
      nodes = [tree],
      child,
      children,
      i,
      n;

  while (node = nodes.pop()) {
    if (children = node._.children) {
      node.children = new Array(n = children.length);
      for (i = n - 1; i >= 0; --i) {
        nodes.push(child = node.children[i] = new TreeNode(children[i], i));
        child.parent = node;
      }
    }
  }

  (tree.parent = new TreeNode(null, 0)).children = [tree];
  return tree;
}

// Node-link tree diagram using the Reingold-Tilford "tidy" algorithm
/* harmony default export */ __webpack_exports__["default"] = (function() {
  var separation = defaultSeparation,
      dx = 1,
      dy = 1,
      nodeSize = null;

  function tree(root) {
    var t = treeRoot(root);

    // Compute the layout using Buchheim et al.’s algorithm.
    t.eachAfter(firstWalk), t.parent.m = -t.z;
    t.eachBefore(secondWalk);

    // If a fixed node size is specified, scale x and y.
    if (nodeSize) root.eachBefore(sizeNode);

    // If a fixed tree size is specified, scale x and y based on the extent.
    // Compute the left-most, right-most, and depth-most nodes for extents.
    else {
      var left = root,
          right = root,
          bottom = root;
      root.eachBefore(function(node) {
        if (node.x < left.x) left = node;
        if (node.x > right.x) right = node;
        if (node.depth > bottom.depth) bottom = node;
      });
      var s = left === right ? 1 : separation(left, right) / 2,
          tx = s - left.x,
          kx = dx / (right.x + s + tx),
          ky = dy / (bottom.depth || 1);
      root.eachBefore(function(node) {
        node.x = (node.x + tx) * kx;
        node.y = node.depth * ky;
      });
    }

    return root;
  }

  // Computes a preliminary x-coordinate for v. Before that, FIRST WALK is
  // applied recursively to the children of v, as well as the function
  // APPORTION. After spacing out the children by calling EXECUTE SHIFTS, the
  // node v is placed to the midpoint of its outermost children.
  function firstWalk(v) {
    var children = v.children,
        siblings = v.parent.children,
        w = v.i ? siblings[v.i - 1] : null;
    if (children) {
      executeShifts(v);
      var midpoint = (children[0].z + children[children.length - 1].z) / 2;
      if (w) {
        v.z = w.z + separation(v._, w._);
        v.m = v.z - midpoint;
      } else {
        v.z = midpoint;
      }
    } else if (w) {
      v.z = w.z + separation(v._, w._);
    }
    v.parent.A = apportion(v, w, v.parent.A || siblings[0]);
  }

  // Computes all real x-coordinates by summing up the modifiers recursively.
  function secondWalk(v) {
    v._.x = v.z + v.parent.m;
    v.m += v.parent.m;
  }

  // The core of the algorithm. Here, a new subtree is combined with the
  // previous subtrees. Threads are used to traverse the inside and outside
  // contours of the left and right subtree up to the highest common level. The
  // vertices used for the traversals are vi+, vi-, vo-, and vo+, where the
  // superscript o means outside and i means inside, the subscript - means left
  // subtree and + means right subtree. For summing up the modifiers along the
  // contour, we use respective variables si+, si-, so-, and so+. Whenever two
  // nodes of the inside contours conflict, we compute the left one of the
  // greatest uncommon ancestors using the function ANCESTOR and call MOVE
  // SUBTREE to shift the subtree and prepare the shifts of smaller subtrees.
  // Finally, we add a new thread (if necessary).
  function apportion(v, w, ancestor) {
    if (w) {
      var vip = v,
          vop = v,
          vim = w,
          vom = vip.parent.children[0],
          sip = vip.m,
          sop = vop.m,
          sim = vim.m,
          som = vom.m,
          shift;
      while (vim = nextRight(vim), vip = nextLeft(vip), vim && vip) {
        vom = nextLeft(vom);
        vop = nextRight(vop);
        vop.a = v;
        shift = vim.z + sim - vip.z - sip + separation(vim._, vip._);
        if (shift > 0) {
          moveSubtree(nextAncestor(vim, v, ancestor), v, shift);
          sip += shift;
          sop += shift;
        }
        sim += vim.m;
        sip += vip.m;
        som += vom.m;
        sop += vop.m;
      }
      if (vim && !nextRight(vop)) {
        vop.t = vim;
        vop.m += sim - sop;
      }
      if (vip && !nextLeft(vom)) {
        vom.t = vip;
        vom.m += sip - som;
        ancestor = v;
      }
    }
    return ancestor;
  }

  function sizeNode(node) {
    node.x *= dx;
    node.y = node.depth * dy;
  }

  tree.separation = function(x) {
    return arguments.length ? (separation = x, tree) : separation;
  };

  tree.size = function(x) {
    return arguments.length ? (nodeSize = false, dx = +x[0], dy = +x[1], tree) : (nodeSize ? null : [dx, dy]);
  };

  tree.nodeSize = function(x) {
    return arguments.length ? (nodeSize = true, dx = +x[0], dy = +x[1], tree) : (nodeSize ? [dx, dy] : null);
  };

  return tree;
});


/***/ }),

/***/ "../node_modules/d3-hierarchy/src/treemap/binary.js":
/*!**********************************************************!*\
  !*** ../node_modules/d3-hierarchy/src/treemap/binary.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(parent, x0, y0, x1, y1) {
  var nodes = parent.children,
      i, n = nodes.length,
      sum, sums = new Array(n + 1);

  for (sums[0] = sum = i = 0; i < n; ++i) {
    sums[i + 1] = sum += nodes[i].value;
  }

  partition(0, n, parent.value, x0, y0, x1, y1);

  function partition(i, j, value, x0, y0, x1, y1) {
    if (i >= j - 1) {
      var node = nodes[i];
      node.x0 = x0, node.y0 = y0;
      node.x1 = x1, node.y1 = y1;
      return;
    }

    var valueOffset = sums[i],
        valueTarget = (value / 2) + valueOffset,
        k = i + 1,
        hi = j - 1;

    while (k < hi) {
      var mid = k + hi >>> 1;
      if (sums[mid] < valueTarget) k = mid + 1;
      else hi = mid;
    }

    if ((valueTarget - sums[k - 1]) < (sums[k] - valueTarget) && i + 1 < k) --k;

    var valueLeft = sums[k] - valueOffset,
        valueRight = value - valueLeft;

    if ((x1 - x0) > (y1 - y0)) {
      var xk = (x0 * valueRight + x1 * valueLeft) / value;
      partition(i, k, valueLeft, x0, y0, xk, y1);
      partition(k, j, valueRight, xk, y0, x1, y1);
    } else {
      var yk = (y0 * valueRight + y1 * valueLeft) / value;
      partition(i, k, valueLeft, x0, y0, x1, yk);
      partition(k, j, valueRight, x0, yk, x1, y1);
    }
  }
});


/***/ }),

/***/ "../node_modules/d3-hierarchy/src/treemap/dice.js":
/*!********************************************************!*\
  !*** ../node_modules/d3-hierarchy/src/treemap/dice.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(parent, x0, y0, x1, y1) {
  var nodes = parent.children,
      node,
      i = -1,
      n = nodes.length,
      k = parent.value && (x1 - x0) / parent.value;

  while (++i < n) {
    node = nodes[i], node.y0 = y0, node.y1 = y1;
    node.x0 = x0, node.x1 = x0 += node.value * k;
  }
});


/***/ }),

/***/ "../node_modules/d3-hierarchy/src/treemap/index.js":
/*!*********************************************************!*\
  !*** ../node_modules/d3-hierarchy/src/treemap/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _round__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./round */ "../node_modules/d3-hierarchy/src/treemap/round.js");
/* harmony import */ var _squarify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./squarify */ "../node_modules/d3-hierarchy/src/treemap/squarify.js");
/* harmony import */ var _accessors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../accessors */ "../node_modules/d3-hierarchy/src/accessors.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constant */ "../node_modules/d3-hierarchy/src/constant.js");





/* harmony default export */ __webpack_exports__["default"] = (function() {
  var tile = _squarify__WEBPACK_IMPORTED_MODULE_1__["default"],
      round = false,
      dx = 1,
      dy = 1,
      paddingStack = [0],
      paddingInner = _constant__WEBPACK_IMPORTED_MODULE_3__["constantZero"],
      paddingTop = _constant__WEBPACK_IMPORTED_MODULE_3__["constantZero"],
      paddingRight = _constant__WEBPACK_IMPORTED_MODULE_3__["constantZero"],
      paddingBottom = _constant__WEBPACK_IMPORTED_MODULE_3__["constantZero"],
      paddingLeft = _constant__WEBPACK_IMPORTED_MODULE_3__["constantZero"];

  function treemap(root) {
    root.x0 =
    root.y0 = 0;
    root.x1 = dx;
    root.y1 = dy;
    root.eachBefore(positionNode);
    paddingStack = [0];
    if (round) root.eachBefore(_round__WEBPACK_IMPORTED_MODULE_0__["default"]);
    return root;
  }

  function positionNode(node) {
    var p = paddingStack[node.depth],
        x0 = node.x0 + p,
        y0 = node.y0 + p,
        x1 = node.x1 - p,
        y1 = node.y1 - p;
    if (x1 < x0) x0 = x1 = (x0 + x1) / 2;
    if (y1 < y0) y0 = y1 = (y0 + y1) / 2;
    node.x0 = x0;
    node.y0 = y0;
    node.x1 = x1;
    node.y1 = y1;
    if (node.children) {
      p = paddingStack[node.depth + 1] = paddingInner(node) / 2;
      x0 += paddingLeft(node) - p;
      y0 += paddingTop(node) - p;
      x1 -= paddingRight(node) - p;
      y1 -= paddingBottom(node) - p;
      if (x1 < x0) x0 = x1 = (x0 + x1) / 2;
      if (y1 < y0) y0 = y1 = (y0 + y1) / 2;
      tile(node, x0, y0, x1, y1);
    }
  }

  treemap.round = function(x) {
    return arguments.length ? (round = !!x, treemap) : round;
  };

  treemap.size = function(x) {
    return arguments.length ? (dx = +x[0], dy = +x[1], treemap) : [dx, dy];
  };

  treemap.tile = function(x) {
    return arguments.length ? (tile = Object(_accessors__WEBPACK_IMPORTED_MODULE_2__["required"])(x), treemap) : tile;
  };

  treemap.padding = function(x) {
    return arguments.length ? treemap.paddingInner(x).paddingOuter(x) : treemap.paddingInner();
  };

  treemap.paddingInner = function(x) {
    return arguments.length ? (paddingInner = typeof x === "function" ? x : Object(_constant__WEBPACK_IMPORTED_MODULE_3__["default"])(+x), treemap) : paddingInner;
  };

  treemap.paddingOuter = function(x) {
    return arguments.length ? treemap.paddingTop(x).paddingRight(x).paddingBottom(x).paddingLeft(x) : treemap.paddingTop();
  };

  treemap.paddingTop = function(x) {
    return arguments.length ? (paddingTop = typeof x === "function" ? x : Object(_constant__WEBPACK_IMPORTED_MODULE_3__["default"])(+x), treemap) : paddingTop;
  };

  treemap.paddingRight = function(x) {
    return arguments.length ? (paddingRight = typeof x === "function" ? x : Object(_constant__WEBPACK_IMPORTED_MODULE_3__["default"])(+x), treemap) : paddingRight;
  };

  treemap.paddingBottom = function(x) {
    return arguments.length ? (paddingBottom = typeof x === "function" ? x : Object(_constant__WEBPACK_IMPORTED_MODULE_3__["default"])(+x), treemap) : paddingBottom;
  };

  treemap.paddingLeft = function(x) {
    return arguments.length ? (paddingLeft = typeof x === "function" ? x : Object(_constant__WEBPACK_IMPORTED_MODULE_3__["default"])(+x), treemap) : paddingLeft;
  };

  return treemap;
});


/***/ }),

/***/ "../node_modules/d3-hierarchy/src/treemap/resquarify.js":
/*!**************************************************************!*\
  !*** ../node_modules/d3-hierarchy/src/treemap/resquarify.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dice */ "../node_modules/d3-hierarchy/src/treemap/dice.js");
/* harmony import */ var _slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slice */ "../node_modules/d3-hierarchy/src/treemap/slice.js");
/* harmony import */ var _squarify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./squarify */ "../node_modules/d3-hierarchy/src/treemap/squarify.js");




/* harmony default export */ __webpack_exports__["default"] = ((function custom(ratio) {

  function resquarify(parent, x0, y0, x1, y1) {
    if ((rows = parent._squarify) && (rows.ratio === ratio)) {
      var rows,
          row,
          nodes,
          i,
          j = -1,
          n,
          m = rows.length,
          value = parent.value;

      while (++j < m) {
        row = rows[j], nodes = row.children;
        for (i = row.value = 0, n = nodes.length; i < n; ++i) row.value += nodes[i].value;
        if (row.dice) Object(_dice__WEBPACK_IMPORTED_MODULE_0__["default"])(row, x0, y0, x1, y0 += (y1 - y0) * row.value / value);
        else Object(_slice__WEBPACK_IMPORTED_MODULE_1__["default"])(row, x0, y0, x0 += (x1 - x0) * row.value / value, y1);
        value -= row.value;
      }
    } else {
      parent._squarify = rows = Object(_squarify__WEBPACK_IMPORTED_MODULE_2__["squarifyRatio"])(ratio, parent, x0, y0, x1, y1);
      rows.ratio = ratio;
    }
  }

  resquarify.ratio = function(x) {
    return custom((x = +x) > 1 ? x : 1);
  };

  return resquarify;
})(_squarify__WEBPACK_IMPORTED_MODULE_2__["phi"]));


/***/ }),

/***/ "../node_modules/d3-hierarchy/src/treemap/round.js":
/*!*********************************************************!*\
  !*** ../node_modules/d3-hierarchy/src/treemap/round.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(node) {
  node.x0 = Math.round(node.x0);
  node.y0 = Math.round(node.y0);
  node.x1 = Math.round(node.x1);
  node.y1 = Math.round(node.y1);
});


/***/ }),

/***/ "../node_modules/d3-hierarchy/src/treemap/slice.js":
/*!*********************************************************!*\
  !*** ../node_modules/d3-hierarchy/src/treemap/slice.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(parent, x0, y0, x1, y1) {
  var nodes = parent.children,
      node,
      i = -1,
      n = nodes.length,
      k = parent.value && (y1 - y0) / parent.value;

  while (++i < n) {
    node = nodes[i], node.x0 = x0, node.x1 = x1;
    node.y0 = y0, node.y1 = y0 += node.value * k;
  }
});


/***/ }),

/***/ "../node_modules/d3-hierarchy/src/treemap/sliceDice.js":
/*!*************************************************************!*\
  !*** ../node_modules/d3-hierarchy/src/treemap/sliceDice.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dice */ "../node_modules/d3-hierarchy/src/treemap/dice.js");
/* harmony import */ var _slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slice */ "../node_modules/d3-hierarchy/src/treemap/slice.js");



/* harmony default export */ __webpack_exports__["default"] = (function(parent, x0, y0, x1, y1) {
  (parent.depth & 1 ? _slice__WEBPACK_IMPORTED_MODULE_1__["default"] : _dice__WEBPACK_IMPORTED_MODULE_0__["default"])(parent, x0, y0, x1, y1);
});


/***/ }),

/***/ "../node_modules/d3-hierarchy/src/treemap/squarify.js":
/*!************************************************************!*\
  !*** ../node_modules/d3-hierarchy/src/treemap/squarify.js ***!
  \************************************************************/
/*! exports provided: phi, squarifyRatio, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phi", function() { return phi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "squarifyRatio", function() { return squarifyRatio; });
/* harmony import */ var _dice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dice */ "../node_modules/d3-hierarchy/src/treemap/dice.js");
/* harmony import */ var _slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slice */ "../node_modules/d3-hierarchy/src/treemap/slice.js");



var phi = (1 + Math.sqrt(5)) / 2;

function squarifyRatio(ratio, parent, x0, y0, x1, y1) {
  var rows = [],
      nodes = parent.children,
      row,
      nodeValue,
      i0 = 0,
      i1 = 0,
      n = nodes.length,
      dx, dy,
      value = parent.value,
      sumValue,
      minValue,
      maxValue,
      newRatio,
      minRatio,
      alpha,
      beta;

  while (i0 < n) {
    dx = x1 - x0, dy = y1 - y0;

    // Find the next non-empty node.
    do sumValue = nodes[i1++].value; while (!sumValue && i1 < n);
    minValue = maxValue = sumValue;
    alpha = Math.max(dy / dx, dx / dy) / (value * ratio);
    beta = sumValue * sumValue * alpha;
    minRatio = Math.max(maxValue / beta, beta / minValue);

    // Keep adding nodes while the aspect ratio maintains or improves.
    for (; i1 < n; ++i1) {
      sumValue += nodeValue = nodes[i1].value;
      if (nodeValue < minValue) minValue = nodeValue;
      if (nodeValue > maxValue) maxValue = nodeValue;
      beta = sumValue * sumValue * alpha;
      newRatio = Math.max(maxValue / beta, beta / minValue);
      if (newRatio > minRatio) { sumValue -= nodeValue; break; }
      minRatio = newRatio;
    }

    // Position and record the row orientation.
    rows.push(row = {value: sumValue, dice: dx < dy, children: nodes.slice(i0, i1)});
    if (row.dice) Object(_dice__WEBPACK_IMPORTED_MODULE_0__["default"])(row, x0, y0, x1, value ? y0 += dy * sumValue / value : y1);
    else Object(_slice__WEBPACK_IMPORTED_MODULE_1__["default"])(row, x0, y0, value ? x0 += dx * sumValue / value : x1, y1);
    value -= sumValue, i0 = i1;
  }

  return rows;
}

/* harmony default export */ __webpack_exports__["default"] = ((function custom(ratio) {

  function squarify(parent, x0, y0, x1, y1) {
    squarifyRatio(ratio, parent, x0, y0, x1, y1);
  }

  squarify.ratio = function(x) {
    return custom((x = +x) > 1 ? x : 1);
  };

  return squarify;
})(phi));


/***/ })

}]);
//# sourceMappingURL=npm.d3-hierarchy.68ee87112d15a02f9628.js.map