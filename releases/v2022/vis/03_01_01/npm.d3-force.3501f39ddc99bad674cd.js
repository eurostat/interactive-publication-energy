(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["npm.d3-force"],{

/***/ "../node_modules/d3-force/index.js":
/*!*****************************************!*\
  !*** ../node_modules/d3-force/index.js ***!
  \*****************************************/
/*! exports provided: forceCenter, forceCollide, forceLink, forceManyBody, forceRadial, forceSimulation, forceX, forceY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_center__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/center */ "../node_modules/d3-force/src/center.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forceCenter", function() { return _src_center__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _src_collide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/collide */ "../node_modules/d3-force/src/collide.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forceCollide", function() { return _src_collide__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _src_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/link */ "../node_modules/d3-force/src/link.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forceLink", function() { return _src_link__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _src_manyBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/manyBody */ "../node_modules/d3-force/src/manyBody.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forceManyBody", function() { return _src_manyBody__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _src_radial__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/radial */ "../node_modules/d3-force/src/radial.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forceRadial", function() { return _src_radial__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _src_simulation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/simulation */ "../node_modules/d3-force/src/simulation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forceSimulation", function() { return _src_simulation__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _src_x__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./src/x */ "../node_modules/d3-force/src/x.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forceX", function() { return _src_x__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _src_y__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./src/y */ "../node_modules/d3-force/src/y.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forceY", function() { return _src_y__WEBPACK_IMPORTED_MODULE_7__["default"]; });











/***/ }),

/***/ "../node_modules/d3-force/src/center.js":
/*!**********************************************!*\
  !*** ../node_modules/d3-force/src/center.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x, y) {
  var nodes;

  if (x == null) x = 0;
  if (y == null) y = 0;

  function force() {
    var i,
        n = nodes.length,
        node,
        sx = 0,
        sy = 0;

    for (i = 0; i < n; ++i) {
      node = nodes[i], sx += node.x, sy += node.y;
    }

    for (sx = sx / n - x, sy = sy / n - y, i = 0; i < n; ++i) {
      node = nodes[i], node.x -= sx, node.y -= sy;
    }
  }

  force.initialize = function(_) {
    nodes = _;
  };

  force.x = function(_) {
    return arguments.length ? (x = +_, force) : x;
  };

  force.y = function(_) {
    return arguments.length ? (y = +_, force) : y;
  };

  return force;
});


/***/ }),

/***/ "../node_modules/d3-force/src/collide.js":
/*!***********************************************!*\
  !*** ../node_modules/d3-force/src/collide.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant */ "../node_modules/d3-force/src/constant.js");
/* harmony import */ var _jiggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jiggle */ "../node_modules/d3-force/src/jiggle.js");
/* harmony import */ var d3_quadtree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-quadtree */ "../node_modules/d3-quadtree/index.js");




function x(d) {
  return d.x + d.vx;
}

function y(d) {
  return d.y + d.vy;
}

/* harmony default export */ __webpack_exports__["default"] = (function(radius) {
  var nodes,
      radii,
      strength = 1,
      iterations = 1;

  if (typeof radius !== "function") radius = Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(radius == null ? 1 : +radius);

  function force() {
    var i, n = nodes.length,
        tree,
        node,
        xi,
        yi,
        ri,
        ri2;

    for (var k = 0; k < iterations; ++k) {
      tree = Object(d3_quadtree__WEBPACK_IMPORTED_MODULE_2__["quadtree"])(nodes, x, y).visitAfter(prepare);
      for (i = 0; i < n; ++i) {
        node = nodes[i];
        ri = radii[node.index], ri2 = ri * ri;
        xi = node.x + node.vx;
        yi = node.y + node.vy;
        tree.visit(apply);
      }
    }

    function apply(quad, x0, y0, x1, y1) {
      var data = quad.data, rj = quad.r, r = ri + rj;
      if (data) {
        if (data.index > node.index) {
          var x = xi - data.x - data.vx,
              y = yi - data.y - data.vy,
              l = x * x + y * y;
          if (l < r * r) {
            if (x === 0) x = Object(_jiggle__WEBPACK_IMPORTED_MODULE_1__["default"])(), l += x * x;
            if (y === 0) y = Object(_jiggle__WEBPACK_IMPORTED_MODULE_1__["default"])(), l += y * y;
            l = (r - (l = Math.sqrt(l))) / l * strength;
            node.vx += (x *= l) * (r = (rj *= rj) / (ri2 + rj));
            node.vy += (y *= l) * r;
            data.vx -= x * (r = 1 - r);
            data.vy -= y * r;
          }
        }
        return;
      }
      return x0 > xi + r || x1 < xi - r || y0 > yi + r || y1 < yi - r;
    }
  }

  function prepare(quad) {
    if (quad.data) return quad.r = radii[quad.data.index];
    for (var i = quad.r = 0; i < 4; ++i) {
      if (quad[i] && quad[i].r > quad.r) {
        quad.r = quad[i].r;
      }
    }
  }

  function initialize() {
    if (!nodes) return;
    var i, n = nodes.length, node;
    radii = new Array(n);
    for (i = 0; i < n; ++i) node = nodes[i], radii[node.index] = +radius(node, i, nodes);
  }

  force.initialize = function(_) {
    nodes = _;
    initialize();
  };

  force.iterations = function(_) {
    return arguments.length ? (iterations = +_, force) : iterations;
  };

  force.strength = function(_) {
    return arguments.length ? (strength = +_, force) : strength;
  };

  force.radius = function(_) {
    return arguments.length ? (radius = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), initialize(), force) : radius;
  };

  return force;
});


/***/ }),

/***/ "../node_modules/d3-force/src/constant.js":
/*!************************************************!*\
  !*** ../node_modules/d3-force/src/constant.js ***!
  \************************************************/
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

/***/ "../node_modules/d3-force/src/jiggle.js":
/*!**********************************************!*\
  !*** ../node_modules/d3-force/src/jiggle.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function() {
  return (Math.random() - 0.5) * 1e-6;
});


/***/ }),

/***/ "../node_modules/d3-force/src/link.js":
/*!********************************************!*\
  !*** ../node_modules/d3-force/src/link.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant */ "../node_modules/d3-force/src/constant.js");
/* harmony import */ var _jiggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jiggle */ "../node_modules/d3-force/src/jiggle.js");
/* harmony import */ var d3_collection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-collection */ "../node_modules/d3-collection/src/index.js");




function index(d) {
  return d.index;
}

function find(nodeById, nodeId) {
  var node = nodeById.get(nodeId);
  if (!node) throw new Error("missing: " + nodeId);
  return node;
}

/* harmony default export */ __webpack_exports__["default"] = (function(links) {
  var id = index,
      strength = defaultStrength,
      strengths,
      distance = Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(30),
      distances,
      nodes,
      count,
      bias,
      iterations = 1;

  if (links == null) links = [];

  function defaultStrength(link) {
    return 1 / Math.min(count[link.source.index], count[link.target.index]);
  }

  function force(alpha) {
    for (var k = 0, n = links.length; k < iterations; ++k) {
      for (var i = 0, link, source, target, x, y, l, b; i < n; ++i) {
        link = links[i], source = link.source, target = link.target;
        x = target.x + target.vx - source.x - source.vx || Object(_jiggle__WEBPACK_IMPORTED_MODULE_1__["default"])();
        y = target.y + target.vy - source.y - source.vy || Object(_jiggle__WEBPACK_IMPORTED_MODULE_1__["default"])();
        l = Math.sqrt(x * x + y * y);
        l = (l - distances[i]) / l * alpha * strengths[i];
        x *= l, y *= l;
        target.vx -= x * (b = bias[i]);
        target.vy -= y * b;
        source.vx += x * (b = 1 - b);
        source.vy += y * b;
      }
    }
  }

  function initialize() {
    if (!nodes) return;

    var i,
        n = nodes.length,
        m = links.length,
        nodeById = Object(d3_collection__WEBPACK_IMPORTED_MODULE_2__["map"])(nodes, id),
        link;

    for (i = 0, count = new Array(n); i < m; ++i) {
      link = links[i], link.index = i;
      if (typeof link.source !== "object") link.source = find(nodeById, link.source);
      if (typeof link.target !== "object") link.target = find(nodeById, link.target);
      count[link.source.index] = (count[link.source.index] || 0) + 1;
      count[link.target.index] = (count[link.target.index] || 0) + 1;
    }

    for (i = 0, bias = new Array(m); i < m; ++i) {
      link = links[i], bias[i] = count[link.source.index] / (count[link.source.index] + count[link.target.index]);
    }

    strengths = new Array(m), initializeStrength();
    distances = new Array(m), initializeDistance();
  }

  function initializeStrength() {
    if (!nodes) return;

    for (var i = 0, n = links.length; i < n; ++i) {
      strengths[i] = +strength(links[i], i, links);
    }
  }

  function initializeDistance() {
    if (!nodes) return;

    for (var i = 0, n = links.length; i < n; ++i) {
      distances[i] = +distance(links[i], i, links);
    }
  }

  force.initialize = function(_) {
    nodes = _;
    initialize();
  };

  force.links = function(_) {
    return arguments.length ? (links = _, initialize(), force) : links;
  };

  force.id = function(_) {
    return arguments.length ? (id = _, force) : id;
  };

  force.iterations = function(_) {
    return arguments.length ? (iterations = +_, force) : iterations;
  };

  force.strength = function(_) {
    return arguments.length ? (strength = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), initializeStrength(), force) : strength;
  };

  force.distance = function(_) {
    return arguments.length ? (distance = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), initializeDistance(), force) : distance;
  };

  return force;
});


/***/ }),

/***/ "../node_modules/d3-force/src/manyBody.js":
/*!************************************************!*\
  !*** ../node_modules/d3-force/src/manyBody.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant */ "../node_modules/d3-force/src/constant.js");
/* harmony import */ var _jiggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jiggle */ "../node_modules/d3-force/src/jiggle.js");
/* harmony import */ var d3_quadtree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-quadtree */ "../node_modules/d3-quadtree/index.js");
/* harmony import */ var _simulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./simulation */ "../node_modules/d3-force/src/simulation.js");





/* harmony default export */ __webpack_exports__["default"] = (function() {
  var nodes,
      node,
      alpha,
      strength = Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(-30),
      strengths,
      distanceMin2 = 1,
      distanceMax2 = Infinity,
      theta2 = 0.81;

  function force(_) {
    var i, n = nodes.length, tree = Object(d3_quadtree__WEBPACK_IMPORTED_MODULE_2__["quadtree"])(nodes, _simulation__WEBPACK_IMPORTED_MODULE_3__["x"], _simulation__WEBPACK_IMPORTED_MODULE_3__["y"]).visitAfter(accumulate);
    for (alpha = _, i = 0; i < n; ++i) node = nodes[i], tree.visit(apply);
  }

  function initialize() {
    if (!nodes) return;
    var i, n = nodes.length, node;
    strengths = new Array(n);
    for (i = 0; i < n; ++i) node = nodes[i], strengths[node.index] = +strength(node, i, nodes);
  }

  function accumulate(quad) {
    var strength = 0, q, c, weight = 0, x, y, i;

    // For internal nodes, accumulate forces from child quadrants.
    if (quad.length) {
      for (x = y = i = 0; i < 4; ++i) {
        if ((q = quad[i]) && (c = Math.abs(q.value))) {
          strength += q.value, weight += c, x += c * q.x, y += c * q.y;
        }
      }
      quad.x = x / weight;
      quad.y = y / weight;
    }

    // For leaf nodes, accumulate forces from coincident quadrants.
    else {
      q = quad;
      q.x = q.data.x;
      q.y = q.data.y;
      do strength += strengths[q.data.index];
      while (q = q.next);
    }

    quad.value = strength;
  }

  function apply(quad, x1, _, x2) {
    if (!quad.value) return true;

    var x = quad.x - node.x,
        y = quad.y - node.y,
        w = x2 - x1,
        l = x * x + y * y;

    // Apply the Barnes-Hut approximation if possible.
    // Limit forces for very close nodes; randomize direction if coincident.
    if (w * w / theta2 < l) {
      if (l < distanceMax2) {
        if (x === 0) x = Object(_jiggle__WEBPACK_IMPORTED_MODULE_1__["default"])(), l += x * x;
        if (y === 0) y = Object(_jiggle__WEBPACK_IMPORTED_MODULE_1__["default"])(), l += y * y;
        if (l < distanceMin2) l = Math.sqrt(distanceMin2 * l);
        node.vx += x * quad.value * alpha / l;
        node.vy += y * quad.value * alpha / l;
      }
      return true;
    }

    // Otherwise, process points directly.
    else if (quad.length || l >= distanceMax2) return;

    // Limit forces for very close nodes; randomize direction if coincident.
    if (quad.data !== node || quad.next) {
      if (x === 0) x = Object(_jiggle__WEBPACK_IMPORTED_MODULE_1__["default"])(), l += x * x;
      if (y === 0) y = Object(_jiggle__WEBPACK_IMPORTED_MODULE_1__["default"])(), l += y * y;
      if (l < distanceMin2) l = Math.sqrt(distanceMin2 * l);
    }

    do if (quad.data !== node) {
      w = strengths[quad.data.index] * alpha / l;
      node.vx += x * w;
      node.vy += y * w;
    } while (quad = quad.next);
  }

  force.initialize = function(_) {
    nodes = _;
    initialize();
  };

  force.strength = function(_) {
    return arguments.length ? (strength = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), initialize(), force) : strength;
  };

  force.distanceMin = function(_) {
    return arguments.length ? (distanceMin2 = _ * _, force) : Math.sqrt(distanceMin2);
  };

  force.distanceMax = function(_) {
    return arguments.length ? (distanceMax2 = _ * _, force) : Math.sqrt(distanceMax2);
  };

  force.theta = function(_) {
    return arguments.length ? (theta2 = _ * _, force) : Math.sqrt(theta2);
  };

  return force;
});


/***/ }),

/***/ "../node_modules/d3-force/src/radial.js":
/*!**********************************************!*\
  !*** ../node_modules/d3-force/src/radial.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant */ "../node_modules/d3-force/src/constant.js");


/* harmony default export */ __webpack_exports__["default"] = (function(radius, x, y) {
  var nodes,
      strength = Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(0.1),
      strengths,
      radiuses;

  if (typeof radius !== "function") radius = Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(+radius);
  if (x == null) x = 0;
  if (y == null) y = 0;

  function force(alpha) {
    for (var i = 0, n = nodes.length; i < n; ++i) {
      var node = nodes[i],
          dx = node.x - x || 1e-6,
          dy = node.y - y || 1e-6,
          r = Math.sqrt(dx * dx + dy * dy),
          k = (radiuses[i] - r) * strengths[i] * alpha / r;
      node.vx += dx * k;
      node.vy += dy * k;
    }
  }

  function initialize() {
    if (!nodes) return;
    var i, n = nodes.length;
    strengths = new Array(n);
    radiuses = new Array(n);
    for (i = 0; i < n; ++i) {
      radiuses[i] = +radius(nodes[i], i, nodes);
      strengths[i] = isNaN(radiuses[i]) ? 0 : +strength(nodes[i], i, nodes);
    }
  }

  force.initialize = function(_) {
    nodes = _, initialize();
  };

  force.strength = function(_) {
    return arguments.length ? (strength = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), initialize(), force) : strength;
  };

  force.radius = function(_) {
    return arguments.length ? (radius = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), initialize(), force) : radius;
  };

  force.x = function(_) {
    return arguments.length ? (x = +_, force) : x;
  };

  force.y = function(_) {
    return arguments.length ? (y = +_, force) : y;
  };

  return force;
});


/***/ }),

/***/ "../node_modules/d3-force/src/simulation.js":
/*!**************************************************!*\
  !*** ../node_modules/d3-force/src/simulation.js ***!
  \**************************************************/
/*! exports provided: x, y, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return y; });
/* harmony import */ var d3_dispatch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-dispatch */ "../node_modules/d3-dispatch/src/index.js");
/* harmony import */ var d3_collection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-collection */ "../node_modules/d3-collection/src/index.js");
/* harmony import */ var d3_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-timer */ "../node_modules/d3-timer/src/index.js");




function x(d) {
  return d.x;
}

function y(d) {
  return d.y;
}

var initialRadius = 10,
    initialAngle = Math.PI * (3 - Math.sqrt(5));

/* harmony default export */ __webpack_exports__["default"] = (function(nodes) {
  var simulation,
      alpha = 1,
      alphaMin = 0.001,
      alphaDecay = 1 - Math.pow(alphaMin, 1 / 300),
      alphaTarget = 0,
      velocityDecay = 0.6,
      forces = Object(d3_collection__WEBPACK_IMPORTED_MODULE_1__["map"])(),
      stepper = Object(d3_timer__WEBPACK_IMPORTED_MODULE_2__["timer"])(step),
      event = Object(d3_dispatch__WEBPACK_IMPORTED_MODULE_0__["dispatch"])("tick", "end");

  if (nodes == null) nodes = [];

  function step() {
    tick();
    event.call("tick", simulation);
    if (alpha < alphaMin) {
      stepper.stop();
      event.call("end", simulation);
    }
  }

  function tick() {
    var i, n = nodes.length, node;

    alpha += (alphaTarget - alpha) * alphaDecay;

    forces.each(function(force) {
      force(alpha);
    });

    for (i = 0; i < n; ++i) {
      node = nodes[i];
      if (node.fx == null) node.x += node.vx *= velocityDecay;
      else node.x = node.fx, node.vx = 0;
      if (node.fy == null) node.y += node.vy *= velocityDecay;
      else node.y = node.fy, node.vy = 0;
    }
  }

  function initializeNodes() {
    for (var i = 0, n = nodes.length, node; i < n; ++i) {
      node = nodes[i], node.index = i;
      if (isNaN(node.x) || isNaN(node.y)) {
        var radius = initialRadius * Math.sqrt(i), angle = i * initialAngle;
        node.x = radius * Math.cos(angle);
        node.y = radius * Math.sin(angle);
      }
      if (isNaN(node.vx) || isNaN(node.vy)) {
        node.vx = node.vy = 0;
      }
    }
  }

  function initializeForce(force) {
    if (force.initialize) force.initialize(nodes);
    return force;
  }

  initializeNodes();

  return simulation = {
    tick: tick,

    restart: function() {
      return stepper.restart(step), simulation;
    },

    stop: function() {
      return stepper.stop(), simulation;
    },

    nodes: function(_) {
      return arguments.length ? (nodes = _, initializeNodes(), forces.each(initializeForce), simulation) : nodes;
    },

    alpha: function(_) {
      return arguments.length ? (alpha = +_, simulation) : alpha;
    },

    alphaMin: function(_) {
      return arguments.length ? (alphaMin = +_, simulation) : alphaMin;
    },

    alphaDecay: function(_) {
      return arguments.length ? (alphaDecay = +_, simulation) : +alphaDecay;
    },

    alphaTarget: function(_) {
      return arguments.length ? (alphaTarget = +_, simulation) : alphaTarget;
    },

    velocityDecay: function(_) {
      return arguments.length ? (velocityDecay = 1 - _, simulation) : 1 - velocityDecay;
    },

    force: function(name, _) {
      return arguments.length > 1 ? ((_ == null ? forces.remove(name) : forces.set(name, initializeForce(_))), simulation) : forces.get(name);
    },

    find: function(x, y, radius) {
      var i = 0,
          n = nodes.length,
          dx,
          dy,
          d2,
          node,
          closest;

      if (radius == null) radius = Infinity;
      else radius *= radius;

      for (i = 0; i < n; ++i) {
        node = nodes[i];
        dx = x - node.x;
        dy = y - node.y;
        d2 = dx * dx + dy * dy;
        if (d2 < radius) closest = node, radius = d2;
      }

      return closest;
    },

    on: function(name, _) {
      return arguments.length > 1 ? (event.on(name, _), simulation) : event.on(name);
    }
  };
});


/***/ }),

/***/ "../node_modules/d3-force/src/x.js":
/*!*****************************************!*\
  !*** ../node_modules/d3-force/src/x.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant */ "../node_modules/d3-force/src/constant.js");


/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  var strength = Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(0.1),
      nodes,
      strengths,
      xz;

  if (typeof x !== "function") x = Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(x == null ? 0 : +x);

  function force(alpha) {
    for (var i = 0, n = nodes.length, node; i < n; ++i) {
      node = nodes[i], node.vx += (xz[i] - node.x) * strengths[i] * alpha;
    }
  }

  function initialize() {
    if (!nodes) return;
    var i, n = nodes.length;
    strengths = new Array(n);
    xz = new Array(n);
    for (i = 0; i < n; ++i) {
      strengths[i] = isNaN(xz[i] = +x(nodes[i], i, nodes)) ? 0 : +strength(nodes[i], i, nodes);
    }
  }

  force.initialize = function(_) {
    nodes = _;
    initialize();
  };

  force.strength = function(_) {
    return arguments.length ? (strength = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), initialize(), force) : strength;
  };

  force.x = function(_) {
    return arguments.length ? (x = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), initialize(), force) : x;
  };

  return force;
});


/***/ }),

/***/ "../node_modules/d3-force/src/y.js":
/*!*****************************************!*\
  !*** ../node_modules/d3-force/src/y.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant */ "../node_modules/d3-force/src/constant.js");


/* harmony default export */ __webpack_exports__["default"] = (function(y) {
  var strength = Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(0.1),
      nodes,
      strengths,
      yz;

  if (typeof y !== "function") y = Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(y == null ? 0 : +y);

  function force(alpha) {
    for (var i = 0, n = nodes.length, node; i < n; ++i) {
      node = nodes[i], node.vy += (yz[i] - node.y) * strengths[i] * alpha;
    }
  }

  function initialize() {
    if (!nodes) return;
    var i, n = nodes.length;
    strengths = new Array(n);
    yz = new Array(n);
    for (i = 0; i < n; ++i) {
      strengths[i] = isNaN(yz[i] = +y(nodes[i], i, nodes)) ? 0 : +strength(nodes[i], i, nodes);
    }
  }

  force.initialize = function(_) {
    nodes = _;
    initialize();
  };

  force.strength = function(_) {
    return arguments.length ? (strength = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), initialize(), force) : strength;
  };

  force.y = function(_) {
    return arguments.length ? (y = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_0__["default"])(+_), initialize(), force) : y;
  };

  return force;
});


/***/ })

}]);
//# sourceMappingURL=npm.d3-force.3501f39ddc99bad674cd.js.map