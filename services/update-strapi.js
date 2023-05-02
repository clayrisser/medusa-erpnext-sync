"use strict";

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _medusaInterfaces = require("medusa-interfaces");
var _axios = _interopRequireDefault(require("axios"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && _instanceof(outerFn.prototype, Generator) ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
var IGNORE_THRESHOLD = 3; // seconds
var UpdateStrapiService = /*#__PURE__*/function (_BaseService) {
  _inherits(UpdateStrapiService, _BaseService);
  var _super = _createSuper(UpdateStrapiService);
  function UpdateStrapiService(_ref, options) {
    var _this$protocol, _this$options_$strapi, _this$options_$strapi2;
    var _this;
    var regionService = _ref.regionService,
      productService = _ref.productService,
      redisClient = _ref.redisClient,
      productVariantService = _ref.productVariantService,
      eventBusService = _ref.eventBusService;
    _classCallCheck(this, UpdateStrapiService);
    _this = _super.call(this);
    _this.productService_ = productService;
    _this.productVariantService_ = productVariantService;
    _this.regionService_ = regionService;
    _this.eventBus_ = eventBusService;
    _this.options_ = options;
    _this.protocol = _this.options_.strapi_protocol;
    _this.strapi_URL_STRING = "".concat((_this$protocol = _this.protocol) !== null && _this$protocol !== void 0 ? _this$protocol : "https", "://").concat((_this$options_$strapi = _this.options_.strapi_url) !== null && _this$options_$strapi !== void 0 ? _this$options_$strapi : "localhost", ":").concat((_this$options_$strapi2 = _this.options_.strapi_port) !== null && _this$options_$strapi2 !== void 0 ? _this$options_$strapi2 : 1337);
    _this.strapiAuthToken = "";
    _this.checkErpnextHealth().then(function (res) {
      if (res) {
        _this.loginToStrapi();
      }
    });
    _this.redis_ = redisClient;
    return _this;
  }
  _createClass(UpdateStrapiService, [{
    key: "addIgnore_",
    value: function () {
      var _addIgnore_ = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(id, side) {
        var key;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              key = "".concat(id, "_ignore_").concat(side);
              _context.next = 3;
              return this.redis_.set(key, 1, "EX", this.options_.ignore_threshold || IGNORE_THRESHOLD);
            case 3:
              return _context.abrupt("return", _context.sent);
            case 4:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function addIgnore_(_x, _x2) {
        return _addIgnore_.apply(this, arguments);
      }
      return addIgnore_;
    }()
  }, {
    key: "shouldIgnore_",
    value: function () {
      var _shouldIgnore_ = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(id, side) {
        var key;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              key = "".concat(id, "_ignore_").concat(side);
              _context2.next = 3;
              return this.redis_.get(key);
            case 3:
              return _context2.abrupt("return", _context2.sent);
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function shouldIgnore_(_x3, _x4) {
        return _shouldIgnore_.apply(this, arguments);
      }
      return shouldIgnore_;
    }()
  }, {
    key: "getVariantEntries_",
    value: function () {
      var _getVariantEntries_ = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(variants) {
        var _this2 = this;
        var allVariants;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              allVariants = variants.map( /*#__PURE__*/function () {
                var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(variant) {
                  var result;
                  return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                    while (1) switch (_context3.prev = _context3.next) {
                      case 0:
                        _context3.next = 2;
                        return _this2.updateProductVariantInStrapi(variant);
                      case 2:
                        result = _context3.sent;
                        return _context3.abrupt("return", result.productVariant);
                      case 4:
                      case "end":
                        return _context3.stop();
                    }
                  }, _callee3);
                }));
                return function (_x6) {
                  return _ref2.apply(this, arguments);
                };
              }());
              return _context4.abrupt("return", Promise.all(allVariants));
            case 5:
              _context4.prev = 5;
              _context4.t0 = _context4["catch"](0);
              throw _context4.t0;
            case 8:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[0, 5]]);
      }));
      function getVariantEntries_(_x5) {
        return _getVariantEntries_.apply(this, arguments);
      }
      return getVariantEntries_;
    }()
  }, {
    key: "createImageAssets",
    value: function () {
      var _createImageAssets = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(product) {
        var _this3 = this;
        var assets;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return Promise.all(product.images.filter(function (image) {
                return image.url !== product.thumbnail;
              }).map( /*#__PURE__*/function () {
                var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(image, i) {
                  var result;
                  return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                    while (1) switch (_context5.prev = _context5.next) {
                      case 0:
                        _context5.next = 2;
                        return _this3.createEntryInStrapi("images", product.id, {
                          image_id: image.id,
                          url: image.url,
                          metadata: image.metadata || {}
                        });
                      case 2:
                        result = _context5.sent;
                        return _context5.abrupt("return", result.image);
                      case 4:
                      case "end":
                        return _context5.stop();
                    }
                  }, _callee5);
                }));
                return function (_x8, _x9) {
                  return _ref3.apply(this, arguments);
                };
              }()));
            case 2:
              assets = _context6.sent;
              return _context6.abrupt("return", assets || []);
            case 4:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }));
      function createImageAssets(_x7) {
        return _createImageAssets.apply(this, arguments);
      }
      return createImageAssets;
    }()
  }, {
    key: "getCustomField",
    value: function getCustomField(field, type) {
      var customOptions = this.options_["custom_".concat(type, "_fields")];
      if (customOptions) {
        return customOptions[field] || field;
      } else {
        return field;
      }
    }
  }, {
    key: "createProductInStrapi",
    value: function () {
      var _createProductInStrapi = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(productId) {
        var hasType, product;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return this.getType("products").then(function () {
                return true;
              })["catch"](function (err) {
                // console.log(err)
                return false;
              });
            case 2:
              hasType = _context7.sent;
              if (hasType) {
                _context7.next = 5;
                break;
              }
              return _context7.abrupt("return", Promise.resolve());
            case 5:
              _context7.prev = 5;
              _context7.next = 8;
              return this.productService_.retrieve(productId, {
                relations: ["options", "variants", "variants.prices", "variants.options", "type", "collection", "tags", "images"],
                select: ["id", "title", "subtitle", "description", "handle", "is_giftcard", "discountable", "thumbnail", "weight", "length", "height", "width", "hs_code", "origin_country", "mid_code", "material", "metadata"]
              });
            case 8:
              product = _context7.sent;
              if (!product) {
                _context7.next = 13;
                break;
              }
              _context7.next = 12;
              return this.createEntryInStrapi("products", productId, product);
            case 12:
              return _context7.abrupt("return", _context7.sent);
            case 13:
              _context7.next = 18;
              break;
            case 15:
              _context7.prev = 15;
              _context7.t0 = _context7["catch"](5);
              throw _context7.t0;
            case 18:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this, [[5, 15]]);
      }));
      function createProductInStrapi(_x10) {
        return _createProductInStrapi.apply(this, arguments);
      }
      return createProductInStrapi;
    }()
  }, {
    key: "createProductVariantInStrapi",
    value: function () {
      var _createProductVariantInStrapi = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(variantId) {
        var hasType, variant;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return this.getType("product-variants").then(function () {
                return true;
              })["catch"](function () {
                return false;
              });
            case 2:
              hasType = _context8.sent;
              if (hasType) {
                _context8.next = 5;
                break;
              }
              return _context8.abrupt("return", Promise.resolve());
            case 5:
              _context8.prev = 5;
              _context8.next = 8;
              return this.productVariantService_.retrieve(variantId, {
                relations: ["prices", "options", "product"]
              });
            case 8:
              variant = _context8.sent;
              if (!variant) {
                _context8.next = 13;
                break;
              }
              _context8.next = 12;
              return this.createEntryInStrapi("product-variants", variantId, variant);
            case 12:
              return _context8.abrupt("return", _context8.sent);
            case 13:
              _context8.next = 18;
              break;
            case 15:
              _context8.prev = 15;
              _context8.t0 = _context8["catch"](5);
              throw _context8.t0;
            case 18:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this, [[5, 15]]);
      }));
      function createProductVariantInStrapi(_x11) {
        return _createProductVariantInStrapi.apply(this, arguments);
      }
      return createProductVariantInStrapi;
    }()
  }, {
    key: "createRegionInStrapi",
    value: function () {
      var _createRegionInStrapi = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(regionId) {
        var hasType, region;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              _context9.next = 2;
              return this.getType("regions").then(function () {
                return true;
              })["catch"](function () {
                return false;
              });
            case 2:
              hasType = _context9.sent;
              if (hasType) {
                _context9.next = 6;
                break;
              }
              console.log('Type "Regions" doesnt exist in Strapi');
              return _context9.abrupt("return", Promise.resolve());
            case 6:
              _context9.prev = 6;
              _context9.next = 9;
              return this.regionService_.retrieve(regionId, {
                relations: ["countries", "payment_providers", "fulfillment_providers", "currency"],
                select: ["id", "name", "tax_rate", "tax_code", "metadata"]
              });
            case 9:
              region = _context9.sent;
              _context9.next = 12;
              return this.createEntryInStrapi("regions", regionId, region);
            case 12:
              return _context9.abrupt("return", _context9.sent);
            case 15:
              _context9.prev = 15;
              _context9.t0 = _context9["catch"](6);
              throw _context9.t0;
            case 18:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this, [[6, 15]]);
      }));
      function createRegionInStrapi(_x12) {
        return _createRegionInStrapi.apply(this, arguments);
      }
      return createRegionInStrapi;
    }()
  }, {
    key: "updateRegionInStrapi",
    value: function () {
      var _updateRegionInStrapi = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(data) {
        var hasType, updateFields, found, ignore, region, response;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              _context10.next = 2;
              return this.getType("regions").then(function (res) {
                // console.log(res.data)
                return true;
              })["catch"](function (error) {
                // console.log(error.response.status)
                return false;
              });
            case 2:
              hasType = _context10.sent;
              if (hasType) {
                _context10.next = 5;
                break;
              }
              return _context10.abrupt("return", Promise.resolve());
            case 5:
              updateFields = ["name", "currency_code", "countries", "payment_providers", "fulfillment_providers"]; // check if update contains any fields in Strapi to minimize runs
              found = data.fields.find(function (f) {
                return updateFields.includes(f);
              });
              if (found) {
                _context10.next = 9;
                break;
              }
              return _context10.abrupt("return");
            case 9:
              _context10.prev = 9;
              _context10.next = 12;
              return this.shouldIgnore_(data.id, "strapi");
            case 12:
              ignore = _context10.sent;
              if (!ignore) {
                _context10.next = 15;
                break;
              }
              return _context10.abrupt("return");
            case 15:
              _context10.next = 17;
              return this.regionService_.retrieve(data.id, {
                relations: ["countries", "payment_providers", "fulfillment_providers", "currency"],
                select: ["id", "name", "tax_rate", "tax_code", "metadata"]
              });
            case 17:
              region = _context10.sent;
              if (!region) {
                _context10.next = 23;
                break;
              }
              _context10.next = 21;
              return this.updateEntryInStrapi("regions", region.id, region);
            case 21:
              response = _context10.sent;
              console.log("Region Strapi Id - ", response);
            case 23:
              return _context10.abrupt("return", region);
            case 26:
              _context10.prev = 26;
              _context10.t0 = _context10["catch"](9);
              throw _context10.t0;
            case 29:
            case "end":
              return _context10.stop();
          }
        }, _callee10, this, [[9, 26]]);
      }));
      function updateRegionInStrapi(_x13) {
        return _updateRegionInStrapi.apply(this, arguments);
      }
      return updateRegionInStrapi;
    }()
  }, {
    key: "updateProductInStrapi",
    value: function () {
      var _updateProductInStrapi = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(data) {
        var hasType, updateFields, found, ignore, product;
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              _context11.next = 2;
              return this.getType("products").then(function (res) {
                // console.log(res.data)
                return true;
              })["catch"](function (error) {
                // console.log(error.response.status)
                return false;
              });
            case 2:
              hasType = _context11.sent;
              if (hasType) {
                _context11.next = 5;
                break;
              }
              return _context11.abrupt("return", Promise.resolve());
            case 5:
              // console.log(data)
              updateFields = ["variants", "options", "tags", "title", "subtitle", "tags", "type", "type_id", "collection", "collection_id", "thumbnail"]; // check if update contains any fields in Strapi to minimize runs
              found = data.fields.find(function (f) {
                return updateFields.includes(f);
              });
              if (found) {
                _context11.next = 9;
                break;
              }
              return _context11.abrupt("return", Promise.resolve());
            case 9:
              _context11.prev = 9;
              _context11.next = 12;
              return this.shouldIgnore_(data.id, "strapi");
            case 12:
              ignore = _context11.sent;
              if (!ignore) {
                _context11.next = 16;
                break;
              }
              console.log("Strapi has just updated this product which triggered this function. IGNORING... ");
              return _context11.abrupt("return", Promise.resolve());
            case 16:
              _context11.next = 18;
              return this.productService_.retrieve(data.id, {
                relations: ["options", "variants", "variants.prices", "variants.options", "type", "collection", "tags", "images"],
                select: ["id", "title", "subtitle", "description", "handle", "is_giftcard", "discountable", "thumbnail", "weight", "length", "height", "width", "hs_code", "origin_country", "mid_code", "material", "metadata"]
              });
            case 18:
              product = _context11.sent;
              if (!product) {
                _context11.next = 22;
                break;
              }
              _context11.next = 22;
              return this.updateEntryInStrapi("products", product.id, product);
            case 22:
              return _context11.abrupt("return", product);
            case 25:
              _context11.prev = 25;
              _context11.t0 = _context11["catch"](9);
              throw _context11.t0;
            case 28:
            case "end":
              return _context11.stop();
          }
        }, _callee11, this, [[9, 25]]);
      }));
      function updateProductInStrapi(_x14) {
        return _updateProductInStrapi.apply(this, arguments);
      }
      return updateProductInStrapi;
    }()
  }, {
    key: "updateProductVariantInStrapi",
    value: function () {
      var _updateProductVariantInStrapi = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(data) {
        var hasType, updateFields, found, ignore, variant, response;
        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              _context12.next = 2;
              return this.getType("product-variants").then(function (res) {
                // console.log(res.data)
                return true;
              })["catch"](function (error) {
                // console.log(error.response.status)
                return false;
              });
            case 2:
              hasType = _context12.sent;
              if (hasType) {
                _context12.next = 5;
                break;
              }
              return _context12.abrupt("return", Promise.resolve());
            case 5:
              updateFields = ["title", "prices", "sku", "material", "weight", "length", "height", "origin_country", "options"]; // Update came directly from product variant service so only act on a couple
              // of fields. When the update comes from the product we want to ensure
              // references are set up correctly so we run through everything.
              if (!data.fields) {
                _context12.next = 10;
                break;
              }
              found = data.fields.find(function (f) {
                return updateFields.includes(f);
              });
              if (found) {
                _context12.next = 10;
                break;
              }
              return _context12.abrupt("return", Promise.resolve());
            case 10:
              _context12.prev = 10;
              _context12.next = 13;
              return this.shouldIgnore_(data.id, "strapi");
            case 13:
              ignore = _context12.sent;
              if (!ignore) {
                _context12.next = 16;
                break;
              }
              return _context12.abrupt("return", Promise.resolve());
            case 16:
              _context12.next = 18;
              return this.productVariantService_.retrieve(data.id, {
                relations: ["prices", "options"]
              });
            case 18:
              variant = _context12.sent;
              console.log(variant);
              if (!variant) {
                _context12.next = 25;
                break;
              }
              _context12.next = 23;
              return this.updateEntryInStrapi("product-variants", variant.id, variant);
            case 23:
              response = _context12.sent;
              console.log("Variant Strapi Id - ", response);
            case 25:
              return _context12.abrupt("return", variant);
            case 28:
              _context12.prev = 28;
              _context12.t0 = _context12["catch"](10);
              console.log("Failed to update product variant", data.id);
              throw _context12.t0;
            case 32:
            case "end":
              return _context12.stop();
          }
        }, _callee12, this, [[10, 28]]);
      }));
      function updateProductVariantInStrapi(_x15) {
        return _updateProductVariantInStrapi.apply(this, arguments);
      }
      return updateProductVariantInStrapi;
    }()
  }, {
    key: "deleteProductInStrapi",
    value: function () {
      var _deleteProductInStrapi = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(data) {
        var hasType, ignore;
        return _regeneratorRuntime().wrap(function _callee13$(_context13) {
          while (1) switch (_context13.prev = _context13.next) {
            case 0:
              _context13.next = 2;
              return this.getType("products").then(function () {
                return true;
              })["catch"](function (err) {
                // console.log(err)
                return false;
              });
            case 2:
              hasType = _context13.sent;
              if (hasType) {
                _context13.next = 5;
                break;
              }
              return _context13.abrupt("return", Promise.resolve());
            case 5:
              _context13.next = 7;
              return this.shouldIgnore_(data.id, "strapi");
            case 7:
              ignore = _context13.sent;
              if (!ignore) {
                _context13.next = 10;
                break;
              }
              return _context13.abrupt("return", Promise.resolve());
            case 10:
              _context13.next = 12;
              return this.deleteEntryInStrapi("products", data.id);
            case 12:
              return _context13.abrupt("return", _context13.sent);
            case 13:
            case "end":
              return _context13.stop();
          }
        }, _callee13, this);
      }));
      function deleteProductInStrapi(_x16) {
        return _deleteProductInStrapi.apply(this, arguments);
      }
      return deleteProductInStrapi;
    }()
  }, {
    key: "deleteProductVariantInStrapi",
    value: function () {
      var _deleteProductVariantInStrapi = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(data) {
        var hasType, ignore;
        return _regeneratorRuntime().wrap(function _callee14$(_context14) {
          while (1) switch (_context14.prev = _context14.next) {
            case 0:
              _context14.next = 2;
              return this.getType("product-variants").then(function () {
                return true;
              })["catch"](function (err) {
                // console.log(err)
                return false;
              });
            case 2:
              hasType = _context14.sent;
              if (hasType) {
                _context14.next = 5;
                break;
              }
              return _context14.abrupt("return", Promise.resolve());
            case 5:
              _context14.next = 7;
              return this.shouldIgnore_(data.id, "strapi");
            case 7:
              ignore = _context14.sent;
              if (!ignore) {
                _context14.next = 10;
                break;
              }
              return _context14.abrupt("return", Promise.resolve());
            case 10:
              _context14.next = 12;
              return this.deleteEntryInStrapi("product-variants", data.id);
            case 12:
              return _context14.abrupt("return", _context14.sent);
            case 13:
            case "end":
              return _context14.stop();
          }
        }, _callee14, this);
      }));
      function deleteProductVariantInStrapi(_x17) {
        return _deleteProductVariantInStrapi.apply(this, arguments);
      }
      return deleteProductVariantInStrapi;
    }() // Blocker - Delete Region API
  }, {
    key: "deleteRegionInStrapi",
    value: function () {
      var _deleteRegionInStrapi = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(data) {
        return _regeneratorRuntime().wrap(function _callee15$(_context15) {
          while (1) switch (_context15.prev = _context15.next) {
            case 0:
            case "end":
              return _context15.stop();
          }
        }, _callee15);
      }));
      function deleteRegionInStrapi(_x18) {
        return _deleteRegionInStrapi.apply(this, arguments);
      }
      return deleteRegionInStrapi;
    }()
  }, {
    key: "getType",
    value: function () {
      var _getType = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(type) {
        var config;
        return _regeneratorRuntime().wrap(function _callee16$(_context16) {
          while (1) switch (_context16.prev = _context16.next) {
            case 0:
              if (this.strapiAuthToken) {
                _context16.next = 3;
                break;
              }
              _context16.next = 3;
              return this.loginToStrapi();
            case 3:
              config = {
                url: "".concat(this.strapi_URL_STRING, "/api/").concat(type),
                method: "get",
                headers: {
                  Authorization: "Bearer ".concat(this.strapiAuthToken)
                }
              };
              return _context16.abrupt("return", (0, _axios["default"])(config));
            case 5:
            case "end":
              return _context16.stop();
          }
        }, _callee16, this);
      }));
      function getType(_x19) {
        return _getType.apply(this, arguments);
      }
      return getType;
    }()
  }, {
    key: "checkErpnextHealth",
    value: function () {
      var _checkErpnextHealth = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17() {
        var config;
        return _regeneratorRuntime().wrap(function _callee17$(_context17) {
          while (1) switch (_context17.prev = _context17.next) {
            case 0:
              config = {
                method: "head",
                url: "".concat(this.strapi_URL_STRING, "/_health")
              };
              console.log("Checking strapi Health");
              return _context17.abrupt("return", (0, _axios["default"])(config).then(function (res) {
                if (res.status === 204) {
                  console.log("\n Strapi Health Check OK \n");
                }
                return true;
              })["catch"](function (error) {
                if (error.code === "ECONNREFUSED") {
                  console.error("\nCould not connect to strapi. Please make sure strapi is running.\n");
                }
                return false;
              }));
            case 3:
            case "end":
              return _context17.stop();
          }
        }, _callee17, this);
      }));
      function checkErpnextHealth() {
        return _checkErpnextHealth.apply(this, arguments);
      }
      return checkErpnextHealth;
    }()
  }, {
    key: "loginToStrapi",
    value: function () {
      var _loginToStrapi = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18() {
        var _this4 = this;
        var config;
        return _regeneratorRuntime().wrap(function _callee18$(_context18) {
          while (1) switch (_context18.prev = _context18.next) {
            case 0:
              config = {
                method: "post",
                url: "".concat(this.strapi_URL_STRING, "/api/auth/local"),
                data: {
                  identifier: this.options_.strapi_medusa_user,
                  password: this.options_.strapi_medusa_password
                }
              };
              return _context18.abrupt("return", (0, _axios["default"])(config).then(function (res) {
                if (res.data.jwt) {
                  _this4.strapiAuthToken = res.data.jwt;
                  console.log("\n Successfully logged in to Strapi \n");
                  return true;
                }
                return false;
              })["catch"](function (error) {
                if (error) {
                  throw new Error("\nError while trying to login to strapi\n" + error);
                }
              }));
            case 2:
            case "end":
              return _context18.stop();
          }
        }, _callee18, this);
      }));
      function loginToStrapi() {
        return _loginToStrapi.apply(this, arguments);
      }
      return loginToStrapi;
    }()
  }, {
    key: "createEntryInStrapi",
    value: function () {
      var _createEntryInStrapi = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee20(type, id, data) {
        var _this5 = this;
        var config;
        return _regeneratorRuntime().wrap(function _callee20$(_context20) {
          while (1) switch (_context20.prev = _context20.next) {
            case 0:
              if (this.strapiAuthToken) {
                _context20.next = 3;
                break;
              }
              _context20.next = 3;
              return this.loginToStrapi();
            case 3:
              config = {
                method: "post",
                url: "".concat(this.strapi_URL_STRING, "/api/").concat(type),
                headers: {
                  Authorization: "Bearer ".concat(this.strapiAuthToken)
                },
                data: data
              };
              return _context20.abrupt("return", (0, _axios["default"])(config).then(function (res) {
                if (res.data.result) {
                  _this5.addIgnore_(id, "medusa");
                  return res.data.data;
                }
                return null;
              })["catch"]( /*#__PURE__*/function () {
                var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19(error) {
                  return _regeneratorRuntime().wrap(function _callee19$(_context19) {
                    while (1) switch (_context19.prev = _context19.next) {
                      case 0:
                        if (!(error && error.response && error.response.status)) {
                          _context19.next = 2;
                          break;
                        }
                        throw new Error("Error while trying to create entry in strapi - " + type);
                      case 2:
                      case "end":
                        return _context19.stop();
                    }
                  }, _callee19);
                }));
                return function (_x23) {
                  return _ref4.apply(this, arguments);
                };
              }()));
            case 5:
            case "end":
              return _context20.stop();
          }
        }, _callee20, this);
      }));
      function createEntryInStrapi(_x20, _x21, _x22) {
        return _createEntryInStrapi.apply(this, arguments);
      }
      return createEntryInStrapi;
    }()
  }, {
    key: "updateEntryInStrapi",
    value: function () {
      var _updateEntryInStrapi = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee22(type, id, data) {
        var _this6 = this;
        var config;
        return _regeneratorRuntime().wrap(function _callee22$(_context22) {
          while (1) switch (_context22.prev = _context22.next) {
            case 0:
              if (this.strapiAuthToken) {
                _context22.next = 3;
                break;
              }
              _context22.next = 3;
              return this.loginToStrapi();
            case 3:
              config = {
                method: "put",
                url: "".concat(this.strapi_URL_STRING, "/api/").concat(type, "/").concat(id),
                headers: {
                  Authorization: "Bearer ".concat(this.strapiAuthToken)
                },
                data: data
              };
              return _context22.abrupt("return", (0, _axios["default"])(config).then(function (res) {
                if (res.data.result) {
                  _this6.addIgnore_(id, "medusa");
                  return res.data.data;
                }
                return null;
              })["catch"]( /*#__PURE__*/function () {
                var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee21(error) {
                  return _regeneratorRuntime().wrap(function _callee21$(_context21) {
                    while (1) switch (_context21.prev = _context21.next) {
                      case 0:
                        if (!(error && error.response && error.response.status)) {
                          _context21.next = 2;
                          break;
                        }
                        throw new Error("Error while trying to update entry in strapi ");
                      case 2:
                      case "end":
                        return _context21.stop();
                    }
                  }, _callee21);
                }));
                return function (_x27) {
                  return _ref5.apply(this, arguments);
                };
              }()));
            case 5:
            case "end":
              return _context22.stop();
          }
        }, _callee22, this);
      }));
      function updateEntryInStrapi(_x24, _x25, _x26) {
        return _updateEntryInStrapi.apply(this, arguments);
      }
      return updateEntryInStrapi;
    }()
  }, {
    key: "deleteEntryInStrapi",
    value: function () {
      var _deleteEntryInStrapi = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee24(type, id) {
        var config;
        return _regeneratorRuntime().wrap(function _callee24$(_context24) {
          while (1) switch (_context24.prev = _context24.next) {
            case 0:
              if (this.strapiAuthToken) {
                _context24.next = 3;
                break;
              }
              _context24.next = 3;
              return this.loginToStrapi();
            case 3:
              config = {
                method: "delete",
                url: "".concat(this.strapi_URL_STRING, "/api/").concat(type, "/").concat(id),
                headers: {
                  Authorization: "Bearer ".concat(this.strapiAuthToken)
                }
              };
              return _context24.abrupt("return", (0, _axios["default"])(config).then(function (res) {
                if (res.data.result) {
                  return res.data.data;
                }
                return null;
              })["catch"]( /*#__PURE__*/function () {
                var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee23(error) {
                  return _regeneratorRuntime().wrap(function _callee23$(_context23) {
                    while (1) switch (_context23.prev = _context23.next) {
                      case 0:
                        if (!(error && error.response && error.response.status)) {
                          _context23.next = 2;
                          break;
                        }
                        throw new Error("Error while trying to delete entry in strapi ");
                      case 2:
                      case "end":
                        return _context23.stop();
                    }
                  }, _callee23);
                }));
                return function (_x30) {
                  return _ref6.apply(this, arguments);
                };
              }()));
            case 5:
            case "end":
              return _context24.stop();
          }
        }, _callee24, this);
      }));
      function deleteEntryInStrapi(_x28, _x29) {
        return _deleteEntryInStrapi.apply(this, arguments);
      }
      return deleteEntryInStrapi;
    }()
  }, {
    key: "doesEntryExistInStrapi",
    value: function () {
      var _doesEntryExistInStrapi = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee25(type, id) {
        var config;
        return _regeneratorRuntime().wrap(function _callee25$(_context25) {
          while (1) switch (_context25.prev = _context25.next) {
            case 0:
              if (this.strapiAuthToken) {
                _context25.next = 3;
                break;
              }
              _context25.next = 3;
              return this.loginToStrapi();
            case 3:
              config = {
                method: "get",
                url: "".concat(this.strapi_URL_STRING, "/api/").concat(type, "/").concat(id),
                headers: {
                  Authorization: "Bearer ".concat(this.strapiAuthToken)
                }
              };
              return _context25.abrupt("return", (0, _axios["default"])(config).then(function (res) {
                return true;
              })["catch"](function (error) {
                console.log(error.response.status, id);
                throw new Error("Given entry doesn't exist in Strapi");
              }));
            case 5:
            case "end":
              return _context25.stop();
          }
        }, _callee25, this);
      }));
      function doesEntryExistInStrapi(_x31, _x32) {
        return _doesEntryExistInStrapi.apply(this, arguments);
      }
      return doesEntryExistInStrapi;
    }()
  }]);
  return UpdateStrapiService;
}(_medusaInterfaces.BaseService);
var _default = UpdateStrapiService;
exports["default"] = _default;