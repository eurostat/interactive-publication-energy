(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["npm.d3-chord"],{

/***/ "../node_modules/d3-chord/index.js":
/*!*****************************************!*\
  !*** ../node_modules/d3-chord/index.js ***!
  \*****************************************/
/*! exports provided: chord, ribbon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_chord__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/chord */ "../node_modules/d3-chord/src/chord.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chord", function() { return _src_chord__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _src_ribbon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/ribbon */ "../node_modules/d3-chord/src/ribbon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ribbon", function() { return _src_ribbon__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "../node_modules/d3-chord/src/array.js":
/*!*********************************************!*\
  !*** ../node_modules/d3-chord/src/array.js ***!
  \*********************************************/
/*! exports provided: slice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slice", function() { return slice; });
var slice = Array.prototype.slice;


/***/ }),

/***/ "../node_modules/d3-chord/src/chord.js":
/*!*********************************************!*\
  !*** ../node_modules/d3-chord/src/chord.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "../node_modules/d3-array/src/index.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./math */ "../node_modules/d3-chord/src/math.js");



function compareValue(compare) {
  return function(a, b) {
    return compare(
      a.source.value + a.target.value,
      b.source.value + b.target.value
    );
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  var padAngle = 0,
      sortGroups = null,
      sortSubgroups = null,
      sortChords = null;

  function chord(matrix) {
    var n = matrix.length,
        groupSums = [],
        groupIndex = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["range"])(n),
        subgroupIndex = [],
        chords = [],
        groups = chords.groups = new Array(n),
        subgroups = new Array(n * n),
        k,
        x,
        x0,
        dx,
        i,
        j;

    // Compute the sum.
    k = 0, i = -1; while (++i < n) {
      x = 0, j = -1; while (++j < n) {
        x += matrix[i][j];
      }
      groupSums.push(x);
      subgroupIndex.push(Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["range"])(n));
      k += x;
    }

    // Sort groups…
    if (sortGroups) groupIndex.sort(function(a, b) {
      return sortGroups(groupSums[a], groupSums[b]);
    });

    // Sort subgroups…
    if (sortSubgroups) subgroupIndex.forEach(function(d, i) {
      d.sort(function(a, b) {
        return sortSubgroups(matrix[i][a], matrix[i][b]);
      });
    });

    // Convert the sum to scaling factor for [0, 2pi].
    // TODO Allow start and end angle to be specified?
    // TODO Allow padding to be specified as percentage?
    k = Object(_math__WEBPACK_IMPORTED_MODULE_1__["max"])(0, _math__WEBPACK_IMPORTED_MODULE_1__["tau"] - padAngle * n) / k;
    dx = k ? padAngle : _math__WEBPACK_IMPORTED_MODULE_1__["tau"] / n;

    // Compute the start and end angle for each group and subgroup.
    // Note: Opera has a bug reordering object literal properties!
    x = 0, i = -1; while (++i < n) {
      x0 = x, j = -1; while (++j < n) {
        var di = groupIndex[i],
            dj = subgroupIndex[di][j],
            v = matrix[di][dj],
            a0 = x,
            a1 = x += v * k;
        subgroups[dj * n + di] = {
          index: di,
          subindex: dj,
          startAngle: a0,
          endAngle: a1,
          value: v
        };
      }
      groups[di] = {
        index: di,
        startAngle: x0,
        endAngle: x,
        value: groupSums[di]
      };
      x += dx;
    }

    // Generate chords for each (non-empty) subgroup-subgroup link.
    i = -1; while (++i < n) {
      j = i - 1; while (++j < n) {
        var source = subgroups[j * n + i],
            target = subgroups[i * n + j];
        if (source.value || target.value) {
          chords.push(source.value < target.value
              ? {source: target, target: source}
              : {source: source, target: target});
        }
      }
    }

    return sortChords ? chords.sort(sortChords) : chords;
  }

  chord.padAngle = function(_) {
    return arguments.length ? (padAngle = Object(_math__WEBPACK_IMPORTED_MODULE_1__["max"])(0, _), chord) : padAngle;
  };

  chord.sortGroups = function(_) {
    return arguments.length ? (sortGroups = _, chord) : sortGroups;
  };

  chord.sortSubgroups = function(_) {
    return arguments.length ? (sortSubgroups = _, chord) : sortSubgroups;
  };

  chord.sortChords = function(_) {
    return arguments.length ? (_ == null ? sortChords = null : (sortChords = compareValue(_))._ = _, chord) : sortChords && sortChords._;
  };

  return chord;
});


/***/ }),

/***/ "../node_modules/d3-chord/src/constant.js":
/*!************************************************!*\
  !*** ../node_modules/d3-chord/src/constant.js ***!
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

/***/ "../node_modules/d3-chord/src/math.js":
/*!********************************************!*\
  !*** ../node_modules/d3-chord/src/math.js ***!
  \********************************************/
/*! exports provided: cos, sin, pi, halfPi, tau, max */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cos", function() { return cos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sin", function() { return sin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pi", function() { return pi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "halfPi", function() { return halfPi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tau", function() { return tau; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return max; });
var cos = Math.cos;
var sin = Math.sin;
var pi = Math.PI;
var halfPi = pi / 2;
var tau = pi * 2;
var max = Math.max;


/***/ }),

/***/ "../node_modules/d3-chord/src/ribbon.js":
/*!**********************************************!*\
  !*** ../node_modules/d3-chord/src/ribbon.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array */ "../node_modules/d3-chord/src/array.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constant */ "../node_modules/d3-chord/src/constant.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math */ "../node_modules/d3-chord/src/math.js");
/* harmony import */ var d3_path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3-path */ "../node_modules/d3-path/src/index.js");





function defaultSource(d) {
  return d.source;
}

function defaultTarget(d) {
  return d.target;
}

function defaultRadius(d) {
  return d.radius;
}

function defaultStartAngle(d) {
  return d.startAngle;
}

function defaultEndAngle(d) {
  return d.endAngle;
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  var source = defaultSource,
      target = defaultTarget,
      radius = defaultRadius,
      startAngle = defaultStartAngle,
      endAngle = defaultEndAngle,
      context = null;

  function ribbon() {
    var buffer,
        argv = _array__WEBPACK_IMPORTED_MODULE_0__["slice"].call(arguments),
        s = source.apply(this, argv),
        t = target.apply(this, argv),
        sr = +radius.apply(this, (argv[0] = s, argv)),
        sa0 = startAngle.apply(this, argv) - _math__WEBPACK_IMPORTED_MODULE_2__["halfPi"],
        sa1 = endAngle.apply(this, argv) - _math__WEBPACK_IMPORTED_MODULE_2__["halfPi"],
        sx0 = sr * Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(sa0),
        sy0 = sr * Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(sa0),
        tr = +radius.apply(this, (argv[0] = t, argv)),
        ta0 = startAngle.apply(this, argv) - _math__WEBPACK_IMPORTED_MODULE_2__["halfPi"],
        ta1 = endAngle.apply(this, argv) - _math__WEBPACK_IMPORTED_MODULE_2__["halfPi"];

    if (!context) context = buffer = Object(d3_path__WEBPACK_IMPORTED_MODULE_3__["path"])();

    context.moveTo(sx0, sy0);
    context.arc(0, 0, sr, sa0, sa1);
    if (sa0 !== ta0 || sa1 !== ta1) { // TODO sr !== tr?
      context.quadraticCurveTo(0, 0, tr * Object(_math__WEBPACK_IMPORTED_MODULE_2__["cos"])(ta0), tr * Object(_math__WEBPACK_IMPORTED_MODULE_2__["sin"])(ta0));
      context.arc(0, 0, tr, ta0, ta1);
    }
    context.quadraticCurveTo(0, 0, sx0, sy0);
    context.closePath();

    if (buffer) return context = null, buffer + "" || null;
  }

  ribbon.radius = function(_) {
    return arguments.length ? (radius = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), ribbon) : radius;
  };

  ribbon.startAngle = function(_) {
    return arguments.length ? (startAngle = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), ribbon) : startAngle;
  };

  ribbon.endAngle = function(_) {
    return arguments.length ? (endAngle = typeof _ === "function" ? _ : Object(_constant__WEBPACK_IMPORTED_MODULE_1__["default"])(+_), ribbon) : endAngle;
  };

  ribbon.source = function(_) {
    return arguments.length ? (source = _, ribbon) : source;
  };

  ribbon.target = function(_) {
    return arguments.length ? (target = _, ribbon) : target;
  };

  ribbon.context = function(_) {
    return arguments.length ? ((context = _ == null ? null : _), ribbon) : context;
  };

  return ribbon;
});


/***/ })

}]);
//# sourceMappingURL=npm.d3-chord.d54dc18e66da3e130b13.js.map