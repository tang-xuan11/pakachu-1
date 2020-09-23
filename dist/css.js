// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"K4Xi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n  .skin * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n  .skin *::after,\n  .skin *::before {\n    box-sizing: border-box;\n  }\n  .skin {\n    background: rgb(255, 230, 0);\n    min-height: 100vh;\n    position: relative;\n  }\n  .nose {\n    border: 10px solid black;\n    border-color: black transparent transparent;\n    border-bottom: none;\n    width: 10px;\n    height: 10px;\n    position: relative;\n    left: 50%;\n    top: 145px;\n    margin-left: -10px;\n    z-index: 10;\n  }\n  @media (max-width: 500px) {\n    .nose {\n      top : 105px;\n    }\n  }\n  @keyframes wave {\n    0% {\n      transform: rotate(0deg);\n    }\n    33% {\n      transform: rotate(5deg);\n    }\n    66% {\n      transform: rotate(-5deg);\n    }\n    100% {\n      transform: rotate(0deg);\n    }\n  }\n  .nose:hover{\n    transform-origin: 50% 100%;\n    animation: wave 200ms infinite linear;\n  }\n  .yuan {\n    position: absolute;\n    border: 1px solid black;\n    width: 20px;\n    height: 4px;\n    top: -14px;\n    transform: translateX(-10px);\n    border-top-left-radius: 11em 5em;\n    border-top-right-radius: 11em 5em;\n    background-color: black;\n  }\n  .eye {\n    position: absolute;\n    border: 3px solid rgb(0, 0, 0);\n    width: 64px;\n    height: 64px;\n    left: 50%;\n    top: 100px;\n    margin-left: -32px;\n    background: rgb(46, 46, 46);\n    border-radius: 50%;\n  }\n  @media (max-width: 500px) {\n    .eye {\n      top : 60px;\n    }\n  }  \n  .eye::before {\n    content: \"\";\n    display: block;\n    position: relative;\n    border: 3px solid rgb(0, 0, 0);\n    width: 31px;\n    height: 31px;\n    background: rgb(255, 255, 255);\n    border-radius: 50%;\n    left: 8px;\n    top: -2px;\n  }\n  .eye.right {\n    transform: translateX(115px);\n  }\n  .eye.left {\n    transform: translateX(-115px);\n  }\n  .mouth {\n    position: absolute;\n    width: 200px;\n    height: 200px;\n    left: 50%;\n    top: 170px;\n    margin-left: -100px;\n  }\n  @media (max-width: 500px) {\n    .mouth {\n      top:130px;\n    }\n  }  \n  .mouth .up {\n    position: relative;\n    top: -10px;\n  }\n  .mouth .up .lip {\n    position: absolute;\n    width: 80px;\n    height: 30px;\n    border: 3px solid rgb(0, 0, 0);\n    border-top: none;\n    z-index: 1;\n    background: rgb(255, 230, 0);\n  }\n  .mouth .up .lip.left {\n    border-radius: 0 0 0 50px;\n    border-right: none;\n    transform: rotate(-20deg) translateX(-0.5px);\n    left: 50%;\n    margin-left: -81px;\n  }\n  .mouth .up .lip.right {\n    border-radius: 0 0 50px 0;\n    border-left: none;\n    transform: rotate(20deg) translateX(0.5px);\n    right: 50%;\n    margin-right: -81px;\n  }\n  .mouth .down {\n    height: 170px;\n    position: absolute;\n    top: 5px;\n    width: 100%;\n    overflow: hidden;\n  }\n  .mouth .down .yuan1 {\n    border: 3px solid black;\n    height: 1000px;\n    position: absolute;\n    width: 140px;\n    left: 50%;\n    margin-left: -70px;\n    border-radius: 75px/300px;\n    bottom: 0;\n    background: rgb(155, 0, 10);\n    overflow: hidden;\n  }\n  .mouth .down .yuan1 .yuan2 {\n    border: 1px solid red;\n    position: absolute;\n    width: 150px;\n    height: 140px;\n    bottom: 0;\n    left: 50%;\n    margin-left: -75px;\n    background: rgb(255, 72, 95);\n    border-radius: 50%;\n  }\n  .face {\n    position: absolute;\n    width: 82px;\n    height: 82px;\n    border: 3px solid black;\n    left: 50%;\n    margin-left: -41px;\n    top: 210px;\n    border-radius: 50%;\n    background: rgb(255, 0, 0);\n  }\n  @media (max-width: 500px) {\n    .face {\n      top : 170px;\n    }\n  }  \n  .face.left {\n    transform: translateX(-150px);\n  }\n  @media (max-width: 500px) {\n    .face.left {\n      transform: translateX(-140px);\n    }\n  }  \n  .face.right {\n    transform: translateX(150px);\n  }\n  @media (max-width: 500px) {\n    .face.right {\n      transform: translateX(140px);\n    }\n  }  \n";
var _default = string;
exports.default = _default;
},{}]},{},["K4Xi"], null)
//# sourceMappingURL=css.js.map