(self.webpackChunkgames = self.webpackChunkgames || []).push([
    [65804308], {
        46842594: (t, e, r) => {
            var n = {
                "./Desktop/index": [78368788, 29234815],
                "./Mobile/index": [99594944, 78777492]
            };

            function o(t) {
                if (!r.o(n, t)) return Promise.resolve().then((() => {
                    var e = new Error("Cannot find module '" + t + "'");
                    throw e.code = "MODULE_NOT_FOUND", e
                }));
                var e = n[t],
                    o = e[0];
                return r.e(e[1]).then((() => r(o)))
            }
            o.keys = () => Object.keys(n), o.id = 46842594, t.exports = o
        },
        61433582: (t, e, r) => {
            "use strict";
            r.d(e, {
                W: () => n
            });
            var n = {
                "airplane-shine.png": r.p + "airplane-shine.0a74d5b6ea74.png" + "?cdn=1",
                "airplane.png": r.p + "airplane.04f7825eb785.png" + "?cdn=1",
                "aitplane-crash.png": r.p + "aitplane-crash.4a069a31c928.png" + "?cdn=1",
                "mountain-1.svg": r.p + "mountain-1.ab33c8a2a170.svg" + "?cdn=1",
                "mountain-2.svg": r.p + "mountain-2.83e818c24d10.svg" + "?cdn=1",
                "mountain-3.svg": r.p + "mountain-3.e4410556c8d0.svg" + "?cdn=1",
                "mountain-4.svg": r.p + "mountain-4.1d63c9cb5f57.svg" + "?cdn=1",
                "mountain-5.svg": r.p + "mountain-5.eb0b5111981b.svg" + "?cdn=1",
                "mountains.png": r.p + "mountains.b45459d63c60.png" + "?cdn=1"
            }
        },
        11167113: (t, e, r) => {
            "use strict";
            r.d(e, {
                $x: () => E,
                Cf: () => C,
                DS: () => A,
                GD: () => m,
                Hd: () => P,
                LS: () => j,
                N4: () => w,
                QL: () => o,
                QR: () => v,
                TH: () => p,
                Td: () => O,
                U1: () => f,
                Uy: () => s,
                WT: () => l,
                ad: () => b,
                c: () => i,
                cM: () => a,
                d7: () => d,
                i9: () => c,
                lo: () => u,
                mX: () => g,
                p5: () => h,
                s$: () => _,
                u9: () => S,
                v7: () => y,
                xJ: () => x
            });
            var n = r(50584124),
                o = r.n(n)()("sockets/cafeed"),
                i = {
                    isWaiting: 1,
                    isAcceptingBets: 2,
                    isStarted: 3,
                    isEnded: 4
                },
                a = {
                    active: 1,
                    win: 2,
                    lose: 3,
                    isError: 999
                },
                s = 30,
                c = 18,
                u = 7,
                l = 1e3,
                f = 10,
                h = 1e3 * f,
                p = 2e3,
                d = [0, 1],
                m = 9,
                v = 5,
                y = 500,
                b = 2 * y,
                g = 1.01,
                w = l / 20,
                S = {
                    bottom: 0,
                    left: 0,
                    transform: -29
                },
                O = 2,
                _ = 3,
                A = 5e3,
                P = "00000000-0000-0000-0000-000000000000",
                x = 3e3,
                E = {
                    REG_IN_HUB2: "RegInHub2",
                    ON_REGISTER_IN_HUB: "OnRegisterInHub",
                    ON_TAKE_WIN: "OnTakeWin",
                    ON_STAGE_CHANGE: "OnStageChange",
                    ON_CURRENT_USER_CHANGE: "OnCurrentUserChange",
                    ON_COEFF_CHANGE: "OnCoeffChange",
                    TAKE_WIN: "TakeWin",
                    PING: "Ping"
                },
                C = 35,
                j = 2500
        },
        98359512: (t, e, r) => {
            "use strict";
            r.r(e), r.d(e, {
                component: () => i.Z,
                images: () => l
            });
            r(76696649), r(27396078), r(15382526), r(58141817), r(87241539), r(5021703), r(23209653), r(88369070), r(56447941), r(88057327), r(59438880), r(6757658), r(61454747), r(3749337), r(88833321), r(65932165), r(72066992), r(7978783), r(89333948);
            var n = r(61433582);
            var o = {
                    "empty-history-ico.svg": r.p + "empty-history-ico.eb59dcca29ee.svg" + "?cdn=1",
                    "ico-sprite.svg": r.p + "ico-sprite.6afc52308432.svg" + "?cdn=1"
                },
                i = r(56696617);

            function a(t) {
                return a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, a(t)
            }

            function s(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function c(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? s(Object(r), !0).forEach((function(e) {
                        u(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function u(t, e, r) {
                return (e = function(t) {
                    var e = function(t, e) {
                        if ("object" !== a(t) || null === t) return t;
                        var r = t[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var n = r.call(t, e || "default");
                            if ("object" !== a(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(t, "string");
                    return "symbol" === a(e) ? e : String(e)
                }(e)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
            var l = c(c({}, n.W), o)
        },
        54436511: (t, e, r) => {
            "use strict";
            r.d(e, {
                e: () => D
            });
            r(72066992), r(87241539), r(64788674), r(7978783), r(89333948), r(76696649), r(27396078), r(15382526), r(58141817), r(5021703), r(23209653), r(88369070), r(56447941), r(88057327), r(59438880), r(6757658), r(61454747), r(3749337), r(88833321), r(65932165), r(70472443), r(93639341), r(94173706), r(7910408), r(10530489), r(57968304), r(88365069), r(94747042);
            var n = r(87853387),
                o = r(24891070),
                i = (r(46892222), r(84440687)),
                a = r(46919652);
            var s = {
                    "sprite.svg": r.p + "sprite.95be757093b7.svg"
                },
                c = function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        ref: "popup",
                        staticClass: "games-popup games-popup--error",
                        class: {
                            "games-popup--mobile": t.$store.getters["application/isMobileView"]
                        },
                        style: t.popupStyles
                    }, [e("SvgShadowLayout", {
                        attrs: {
                            svg: "sprite.svg",
                            moduleName: t.$consts.ASSETS_MODULE_ERROR_POPUP
                        }
                    }), t._v(" "), e("button", {
                        staticClass: "games-popup__close",
                        attrs: {
                            "aria-label": t.$t("common.close"),
                            title: t.$t("common.close")
                        },
                        on: {
                            click: function(e) {
                                return t.hidePopup()
                            }
                        }
                    }), t._v(" "), e("div", {
                        staticClass: "games-popup__content"
                    }, [e("div", {
                        staticClass: "games-popup__icon games-popup-icon"
                    }, [e("div", {
                        staticClass: "games-popup-icon__content"
                    }, [e("svg", {
                        staticClass: "games-popup-icon__icon",
                        attrs: {
                            width: "34",
                            height: "34",
                            "aria-hidden": "true"
                        }
                    }, [e("use", {
                        attrs: {
                            "xlink:href": "#error"
                        }
                    })])])]), t._v(" "), e("h3", {
                        staticClass: "games-popup__title"
                    }, [t._v("\n            " + t._s(t.$t("common.error")) + "\n        ")]), t._v(" "), e("p", {
                        staticClass: "games-popup__subtitle",
                        domProps: {
                            innerHTML: t._s(t.errorMsg)
                        }
                    }), t._v(" "), t.customButton ? e("button", {
                        staticClass: "games-popup__button games-popup__button--light games-popup-button",
                        on: {
                            click: function(e) {
                                return e.preventDefault(), t.customButton.action(t.hidePopup)
                            }
                        }
                    }, [e("span", {
                        staticClass: "games-popup-button__text"
                    }, [t._v("\n                " + t._s(t.customButton.text) + "\n            ")])]) : e("button", {
                        staticClass: "games-popup__button games-popup__button--light games-popup-button",
                        on: {
                            click: function(e) {
                                return e.preventDefault(), t.hidePopup()
                            }
                        }
                    }, [e("span", {
                        staticClass: "games-popup-button__text"
                    }, [t._v("\n                " + t._s(t.$t("common.ok")) + "\n            ")])])])], 1)
                };
            c._withStripped = !0;
            var u = r(74807901);
            const l = {
                name: "ErrorPopup",
                components: {
                    SvgShadowLayout: r(37283298).M
                },
                mixins: [u.e],
                constants: {
                    ASSETS_MODULE_ERROR_POPUP: a.ASSETS_MODULE_ERROR_POPUP
                },
                props: {
                    errorMsg: {
                        type: String,
                        default: ""
                    },
                    customButton: {
                        type: Object,
                        default: null,
                        validator: function(t) {
                            return null === t || Object.prototype.hasOwnProperty.call(t, "text") && Object.prototype.hasOwnProperty.call(t, "action")
                        }
                    }
                },
                data: function() {
                    return {
                        isFullScreenPopupOnMobi: !1
                    }
                }
            };
            const f = (0, r(83551900).Z)(l, c, [], !1, null, "02bbb3c2", null).exports;

            function h(t) {
                return h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, h(t)
            }

            function p() {
                p = function() {
                    return e
                };
                var t, e = {},
                    r = Object.prototype,
                    n = r.hasOwnProperty,
                    o = Object.defineProperty || function(t, e, r) {
                        t[e] = r.value
                    },
                    i = "function" == typeof Symbol ? Symbol : {},
                    a = i.iterator || "@@iterator",
                    s = i.asyncIterator || "@@asyncIterator",
                    c = i.toStringTag || "@@toStringTag";

                function u(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    u({}, "")
                } catch (t) {
                    u = function(t, e, r) {
                        return t[e] = r
                    }
                }

                function l(t, e, r, n) {
                    var i = e && e.prototype instanceof g ? e : g,
                        a = Object.create(i.prototype),
                        s = new T(n || []);
                    return o(a, "_invoke", {
                        value: C(t, r, s)
                    }), a
                }

                function f(t, e, r) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, r)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                e.wrap = l;
                var d = "suspendedStart",
                    m = "suspendedYield",
                    v = "executing",
                    y = "completed",
                    b = {};

                function g() {}

                function w() {}

                function S() {}
                var O = {};
                u(O, a, (function() {
                    return this
                }));
                var _ = Object.getPrototypeOf,
                    A = _ && _(_(L([])));
                A && A !== r && n.call(A, a) && (O = A);
                var P = S.prototype = g.prototype = Object.create(O);

                function x(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        u(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function E(t, e) {
                    function r(o, i, a, s) {
                        var c = f(t[o], t, i);
                        if ("throw" !== c.type) {
                            var u = c.arg,
                                l = u.value;
                            return l && "object" == h(l) && n.call(l, "__await") ? e.resolve(l.__await).then((function(t) {
                                r("next", t, a, s)
                            }), (function(t) {
                                r("throw", t, a, s)
                            })) : e.resolve(l).then((function(t) {
                                u.value = t, a(u)
                            }), (function(t) {
                                return r("throw", t, a, s)
                            }))
                        }
                        s(c.arg)
                    }
                    var i;
                    o(this, "_invoke", {
                        value: function(t, n) {
                            function o() {
                                return new e((function(e, o) {
                                    r(t, n, e, o)
                                }))
                            }
                            return i = i ? i.then(o, o) : o()
                        }
                    })
                }

                function C(e, r, n) {
                    var o = d;
                    return function(i, a) {
                        if (o === v) throw new Error("Generator is already running");
                        if (o === y) {
                            if ("throw" === i) throw a;
                            return {
                                value: t,
                                done: !0
                            }
                        }
                        for (n.method = i, n.arg = a;;) {
                            var s = n.delegate;
                            if (s) {
                                var c = j(s, n);
                                if (c) {
                                    if (c === b) continue;
                                    return c
                                }
                            }
                            if ("next" === n.method) n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) {
                                if (o === d) throw o = y, n.arg;
                                n.dispatchException(n.arg)
                            } else "return" === n.method && n.abrupt("return", n.arg);
                            o = v;
                            var u = f(e, r, n);
                            if ("normal" === u.type) {
                                if (o = n.done ? y : m, u.arg === b) continue;
                                return {
                                    value: u.arg,
                                    done: n.done
                                }
                            }
                            "throw" === u.type && (o = y, n.method = "throw", n.arg = u.arg)
                        }
                    }
                }

                function j(e, r) {
                    var n = r.method,
                        o = e.iterator[n];
                    if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, j(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), b;
                    var i = f(o, e.iterator, r.arg);
                    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, b;
                    var a = i.arg;
                    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, b) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, b)
                }

                function B(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function k(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function T(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(B, this), this.reset(!0)
                }

                function L(e) {
                    if (e || "" === e) {
                        var r = e[a];
                        if (r) return r.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var o = -1,
                                i = function r() {
                                    for (; ++o < e.length;)
                                        if (n.call(e, o)) return r.value = e[o], r.done = !1, r;
                                    return r.value = t, r.done = !0, r
                                };
                            return i.next = i
                        }
                    }
                    throw new TypeError(h(e) + " is not iterable")
                }
                return w.prototype = S, o(P, "constructor", {
                    value: S,
                    configurable: !0
                }), o(S, "constructor", {
                    value: w,
                    configurable: !0
                }), w.displayName = u(S, c, "GeneratorFunction"), e.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === w || "GeneratorFunction" === (e.displayName || e.name))
                }, e.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, S) : (t.__proto__ = S, u(t, c, "GeneratorFunction")), t.prototype = Object.create(P), t
                }, e.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, x(E.prototype), u(E.prototype, s, (function() {
                    return this
                })), e.AsyncIterator = E, e.async = function(t, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new E(l(t, r, n, o), i);
                    return e.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, x(P), u(P, c, "Generator"), u(P, a, (function() {
                    return this
                })), u(P, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(t) {
                    var e = Object(t),
                        r = [];
                    for (var n in e) r.push(n);
                    return r.reverse(),
                        function t() {
                            for (; r.length;) {
                                var n = r.pop();
                                if (n in e) return t.value = n, t.done = !1, t
                            }
                            return t.done = !0, t
                        }
                }, e.values = L, T.prototype = {
                    constructor: T,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(k), !e)
                            for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t)
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        if (this.done) throw e;
                        var r = this;

                        function o(n, o) {
                            return s.type = "throw", s.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o
                        }
                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var a = this.tryEntries[i],
                                s = a.completion;
                            if ("root" === a.tryLoc) return o("end");
                            if (a.tryLoc <= this.prev) {
                                var c = n.call(a, "catchLoc"),
                                    u = n.call(a, "finallyLoc");
                                if (c && u) {
                                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                                } else if (c) {
                                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0)
                                } else {
                                    if (!u) throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r];
                            if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var i = o;
                                break
                            }
                        }
                        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                        var a = i ? i.completion : {};
                        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, b) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), b
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), k(r), b
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    k(r)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, r, n) {
                        return this.delegate = {
                            iterator: L(e),
                            resultName: r,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = t), b
                    }
                }, e
            }

            function d(t, e, r, n, o, i, a) {
                try {
                    var s = t[i](a),
                        c = s.value
                } catch (u) {
                    return void r(u)
                }
                s.done ? e(c) : Promise.resolve(c).then(n, o)
            }

            function m(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = t.apply(e, r);

                        function a(t) {
                            d(i, n, o, a, s, "next", t)
                        }

                        function s(t) {
                            d(i, n, o, a, s, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }
            const v = m(p().mark((function t() {
                return p().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return t.next = 2, a.assetsManager.loadModule(a.ASSETS_MODULE_ERROR_POPUP, {
                                images: s
                            });
                        case 2:
                            return t.abrupt("return", f);
                        case 3:
                        case "end":
                            return t.stop()
                    }
                }), t)
            })));
            r(98226699), r(72132023);

            function y(t) {
                return y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, y(t)
            }

            function b() {
                b = function() {
                    return e
                };
                var t, e = {},
                    r = Object.prototype,
                    n = r.hasOwnProperty,
                    o = Object.defineProperty || function(t, e, r) {
                        t[e] = r.value
                    },
                    i = "function" == typeof Symbol ? Symbol : {},
                    a = i.iterator || "@@iterator",
                    s = i.asyncIterator || "@@asyncIterator",
                    c = i.toStringTag || "@@toStringTag";

                function u(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    u({}, "")
                } catch (t) {
                    u = function(t, e, r) {
                        return t[e] = r
                    }
                }

                function l(t, e, r, n) {
                    var i = e && e.prototype instanceof g ? e : g,
                        a = Object.create(i.prototype),
                        s = new T(n || []);
                    return o(a, "_invoke", {
                        value: C(t, r, s)
                    }), a
                }

                function f(t, e, r) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, r)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                e.wrap = l;
                var h = "suspendedStart",
                    p = "suspendedYield",
                    d = "executing",
                    m = "completed",
                    v = {};

                function g() {}

                function w() {}

                function S() {}
                var O = {};
                u(O, a, (function() {
                    return this
                }));
                var _ = Object.getPrototypeOf,
                    A = _ && _(_(L([])));
                A && A !== r && n.call(A, a) && (O = A);
                var P = S.prototype = g.prototype = Object.create(O);

                function x(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        u(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function E(t, e) {
                    function r(o, i, a, s) {
                        var c = f(t[o], t, i);
                        if ("throw" !== c.type) {
                            var u = c.arg,
                                l = u.value;
                            return l && "object" == y(l) && n.call(l, "__await") ? e.resolve(l.__await).then((function(t) {
                                r("next", t, a, s)
                            }), (function(t) {
                                r("throw", t, a, s)
                            })) : e.resolve(l).then((function(t) {
                                u.value = t, a(u)
                            }), (function(t) {
                                return r("throw", t, a, s)
                            }))
                        }
                        s(c.arg)
                    }
                    var i;
                    o(this, "_invoke", {
                        value: function(t, n) {
                            function o() {
                                return new e((function(e, o) {
                                    r(t, n, e, o)
                                }))
                            }
                            return i = i ? i.then(o, o) : o()
                        }
                    })
                }

                function C(e, r, n) {
                    var o = h;
                    return function(i, a) {
                        if (o === d) throw new Error("Generator is already running");
                        if (o === m) {
                            if ("throw" === i) throw a;
                            return {
                                value: t,
                                done: !0
                            }
                        }
                        for (n.method = i, n.arg = a;;) {
                            var s = n.delegate;
                            if (s) {
                                var c = j(s, n);
                                if (c) {
                                    if (c === v) continue;
                                    return c
                                }
                            }
                            if ("next" === n.method) n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) {
                                if (o === h) throw o = m, n.arg;
                                n.dispatchException(n.arg)
                            } else "return" === n.method && n.abrupt("return", n.arg);
                            o = d;
                            var u = f(e, r, n);
                            if ("normal" === u.type) {
                                if (o = n.done ? m : p, u.arg === v) continue;
                                return {
                                    value: u.arg,
                                    done: n.done
                                }
                            }
                            "throw" === u.type && (o = m, n.method = "throw", n.arg = u.arg)
                        }
                    }
                }

                function j(e, r) {
                    var n = r.method,
                        o = e.iterator[n];
                    if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, j(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), v;
                    var i = f(o, e.iterator, r.arg);
                    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, v;
                    var a = i.arg;
                    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, v) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, v)
                }

                function B(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function k(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function T(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(B, this), this.reset(!0)
                }

                function L(e) {
                    if (e || "" === e) {
                        var r = e[a];
                        if (r) return r.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var o = -1,
                                i = function r() {
                                    for (; ++o < e.length;)
                                        if (n.call(e, o)) return r.value = e[o], r.done = !1, r;
                                    return r.value = t, r.done = !0, r
                                };
                            return i.next = i
                        }
                    }
                    throw new TypeError(y(e) + " is not iterable")
                }
                return w.prototype = S, o(P, "constructor", {
                    value: S,
                    configurable: !0
                }), o(S, "constructor", {
                    value: w,
                    configurable: !0
                }), w.displayName = u(S, c, "GeneratorFunction"), e.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === w || "GeneratorFunction" === (e.displayName || e.name))
                }, e.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, S) : (t.__proto__ = S, u(t, c, "GeneratorFunction")), t.prototype = Object.create(P), t
                }, e.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, x(E.prototype), u(E.prototype, s, (function() {
                    return this
                })), e.AsyncIterator = E, e.async = function(t, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new E(l(t, r, n, o), i);
                    return e.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, x(P), u(P, c, "Generator"), u(P, a, (function() {
                    return this
                })), u(P, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(t) {
                    var e = Object(t),
                        r = [];
                    for (var n in e) r.push(n);
                    return r.reverse(),
                        function t() {
                            for (; r.length;) {
                                var n = r.pop();
                                if (n in e) return t.value = n, t.done = !1, t
                            }
                            return t.done = !0, t
                        }
                }, e.values = L, T.prototype = {
                    constructor: T,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(k), !e)
                            for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t)
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        if (this.done) throw e;
                        var r = this;

                        function o(n, o) {
                            return s.type = "throw", s.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o
                        }
                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var a = this.tryEntries[i],
                                s = a.completion;
                            if ("root" === a.tryLoc) return o("end");
                            if (a.tryLoc <= this.prev) {
                                var c = n.call(a, "catchLoc"),
                                    u = n.call(a, "finallyLoc");
                                if (c && u) {
                                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                                } else if (c) {
                                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0)
                                } else {
                                    if (!u) throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r];
                            if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var i = o;
                                break
                            }
                        }
                        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                        var a = i ? i.completion : {};
                        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, v) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), v
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), k(r), v
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    k(r)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, r, n) {
                        return this.delegate = {
                            iterator: L(e),
                            resultName: r,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = t), v
                    }
                }, e
            }

            function g(t, e, r, n, o, i, a) {
                try {
                    var s = t[i](a),
                        c = s.value
                } catch (u) {
                    return void r(u)
                }
                s.done ? e(c) : Promise.resolve(c).then(n, o)
            }
            var w, S = function() {
                    var t, e = (t = b().mark((function t() {
                        var e;
                        return b().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return document.documentElement.scrollTop = 0, e = window.innerHeight, t.next = 4, (0, o.emitSetIframeHeight)({
                                        height: 0
                                    });
                                case 4:
                                    e === window.innerHeight && window.dispatchEvent(new Event("resize"));
                                case 5:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })), function() {
                        var e = this,
                            r = arguments;
                        return new Promise((function(n, o) {
                            var i = t.apply(e, r);

                            function a(t) {
                                g(i, n, o, a, s, "next", t)
                            }

                            function s(t) {
                                g(i, n, o, a, s, "throw", t)
                            }
                            a(void 0)
                        }))
                    });
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                O = r(86228702);

            function _(t) {
                return _ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, _(t)
            }

            function A() {
                A = function() {
                    return e
                };
                var t, e = {},
                    r = Object.prototype,
                    n = r.hasOwnProperty,
                    o = Object.defineProperty || function(t, e, r) {
                        t[e] = r.value
                    },
                    i = "function" == typeof Symbol ? Symbol : {},
                    a = i.iterator || "@@iterator",
                    s = i.asyncIterator || "@@asyncIterator",
                    c = i.toStringTag || "@@toStringTag";

                function u(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    u({}, "")
                } catch (t) {
                    u = function(t, e, r) {
                        return t[e] = r
                    }
                }

                function l(t, e, r, n) {
                    var i = e && e.prototype instanceof y ? e : y,
                        a = Object.create(i.prototype),
                        s = new T(n || []);
                    return o(a, "_invoke", {
                        value: C(t, r, s)
                    }), a
                }

                function f(t, e, r) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, r)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                e.wrap = l;
                var h = "suspendedStart",
                    p = "suspendedYield",
                    d = "executing",
                    m = "completed",
                    v = {};

                function y() {}

                function b() {}

                function g() {}
                var w = {};
                u(w, a, (function() {
                    return this
                }));
                var S = Object.getPrototypeOf,
                    O = S && S(S(L([])));
                O && O !== r && n.call(O, a) && (w = O);
                var P = g.prototype = y.prototype = Object.create(w);

                function x(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        u(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function E(t, e) {
                    function r(o, i, a, s) {
                        var c = f(t[o], t, i);
                        if ("throw" !== c.type) {
                            var u = c.arg,
                                l = u.value;
                            return l && "object" == _(l) && n.call(l, "__await") ? e.resolve(l.__await).then((function(t) {
                                r("next", t, a, s)
                            }), (function(t) {
                                r("throw", t, a, s)
                            })) : e.resolve(l).then((function(t) {
                                u.value = t, a(u)
                            }), (function(t) {
                                return r("throw", t, a, s)
                            }))
                        }
                        s(c.arg)
                    }
                    var i;
                    o(this, "_invoke", {
                        value: function(t, n) {
                            function o() {
                                return new e((function(e, o) {
                                    r(t, n, e, o)
                                }))
                            }
                            return i = i ? i.then(o, o) : o()
                        }
                    })
                }

                function C(e, r, n) {
                    var o = h;
                    return function(i, a) {
                        if (o === d) throw new Error("Generator is already running");
                        if (o === m) {
                            if ("throw" === i) throw a;
                            return {
                                value: t,
                                done: !0
                            }
                        }
                        for (n.method = i, n.arg = a;;) {
                            var s = n.delegate;
                            if (s) {
                                var c = j(s, n);
                                if (c) {
                                    if (c === v) continue;
                                    return c
                                }
                            }
                            if ("next" === n.method) n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) {
                                if (o === h) throw o = m, n.arg;
                                n.dispatchException(n.arg)
                            } else "return" === n.method && n.abrupt("return", n.arg);
                            o = d;
                            var u = f(e, r, n);
                            if ("normal" === u.type) {
                                if (o = n.done ? m : p, u.arg === v) continue;
                                return {
                                    value: u.arg,
                                    done: n.done
                                }
                            }
                            "throw" === u.type && (o = m, n.method = "throw", n.arg = u.arg)
                        }
                    }
                }

                function j(e, r) {
                    var n = r.method,
                        o = e.iterator[n];
                    if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, j(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), v;
                    var i = f(o, e.iterator, r.arg);
                    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, v;
                    var a = i.arg;
                    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, v) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, v)
                }

                function B(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function k(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function T(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(B, this), this.reset(!0)
                }

                function L(e) {
                    if (e || "" === e) {
                        var r = e[a];
                        if (r) return r.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var o = -1,
                                i = function r() {
                                    for (; ++o < e.length;)
                                        if (n.call(e, o)) return r.value = e[o], r.done = !1, r;
                                    return r.value = t, r.done = !0, r
                                };
                            return i.next = i
                        }
                    }
                    throw new TypeError(_(e) + " is not iterable")
                }
                return b.prototype = g, o(P, "constructor", {
                    value: g,
                    configurable: !0
                }), o(g, "constructor", {
                    value: b,
                    configurable: !0
                }), b.displayName = u(g, c, "GeneratorFunction"), e.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === b || "GeneratorFunction" === (e.displayName || e.name))
                }, e.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, g) : (t.__proto__ = g, u(t, c, "GeneratorFunction")), t.prototype = Object.create(P), t
                }, e.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, x(E.prototype), u(E.prototype, s, (function() {
                    return this
                })), e.AsyncIterator = E, e.async = function(t, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new E(l(t, r, n, o), i);
                    return e.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, x(P), u(P, c, "Generator"), u(P, a, (function() {
                    return this
                })), u(P, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(t) {
                    var e = Object(t),
                        r = [];
                    for (var n in e) r.push(n);
                    return r.reverse(),
                        function t() {
                            for (; r.length;) {
                                var n = r.pop();
                                if (n in e) return t.value = n, t.done = !1, t
                            }
                            return t.done = !0, t
                        }
                }, e.values = L, T.prototype = {
                    constructor: T,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(k), !e)
                            for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t)
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        if (this.done) throw e;
                        var r = this;

                        function o(n, o) {
                            return s.type = "throw", s.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o
                        }
                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var a = this.tryEntries[i],
                                s = a.completion;
                            if ("root" === a.tryLoc) return o("end");
                            if (a.tryLoc <= this.prev) {
                                var c = n.call(a, "catchLoc"),
                                    u = n.call(a, "finallyLoc");
                                if (c && u) {
                                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                                } else if (c) {
                                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0)
                                } else {
                                    if (!u) throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r];
                            if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var i = o;
                                break
                            }
                        }
                        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                        var a = i ? i.completion : {};
                        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, v) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), v
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), k(r), v
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    k(r)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, r, n) {
                        return this.delegate = {
                            iterator: L(e),
                            resultName: r,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = t), v
                    }
                }, e
            }

            function P(t, e, r, n, o, i, a) {
                try {
                    var s = t[i](a),
                        c = s.value
                } catch (u) {
                    return void r(u)
                }
                s.done ? e(c) : Promise.resolve(c).then(n, o)
            }

            function x(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = t.apply(e, r);

                        function a(t) {
                            P(i, n, o, a, s, "next", t)
                        }

                        function s(t) {
                            P(i, n, o, a, s, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }

            function E(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function C(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? E(Object(r), !0).forEach((function(e) {
                        j(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : E(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function j(t, e, r) {
                return (e = function(t) {
                    var e = function(t, e) {
                        if ("object" !== _(t) || null === t) return t;
                        var r = t[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var n = r.call(t, e || "default");
                            if ("object" !== _(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(t, "string");
                    return "symbol" === _(e) ? e : String(e)
                }(e)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
            var B = {
                computed: C(C({}, (0, i.mapGetters)("user", ["mainAccountId"])), (0, i.mapGetters)("application", ["isMobileView", "isMobileAppPlatform", "isWebPlatform"])),
                beforeCreate: function() {
                    return x(A().mark((function t() {
                        return A().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (w) {
                                        t.next = 4;
                                        break
                                    }
                                    return t.next = 3, v();
                                case 3:
                                    w = t.sent;
                                case 4:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))()
                },
                data: function() {
                    return {
                        isLuckyWheelLoading: !1,
                        preventErrorModal: !1,
                        modalId: 0
                    }
                },
                methods: C(C(C({}, (0, i.mapMutations)("bonuses", ["setActiveButtons"])), (0, i.mapMutations)("common", ["setIsModalActive", "setResizeToScrollHeightEnabled"])), {}, {
                    defaultOpenModal: function(t, e) {
                        var r = this,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
                            a = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
                            s = "".concat(t.name || t.default.name, "_").concat(this.modalId++);
                        this.$modal.show(t.default || t, C({
                            clickBackgroundToClose: a,
                            modalName: s
                        }, n), {
                            width: 0,
                            height: "auto",
                            root: this.$root,
                            clickToClose: a,
                            classes: "v--modal s-games-popup ".concat(i),
                            overlayTransition: "modal-overlay-fade",
                            name: s
                        }, {
                            "before-open": function(t) {
                                var e = t.name;
                                r.setIsModalActive(!0), O.bodyOverflowQueue.register(e), r.isMobileView && (0, o.emitSetScrollState)({
                                    isBlocked: !0
                                }), r.updateFrameHeightToWindowHeight(!1)
                            },
                            "before-close": function(t) {
                                var e = t.name;
                                1 === O.bodyOverflowQueue.registeredNumber() && (r.setIsModalActive(!1), r.isMobileView && (0, o.emitSetScrollState)({
                                    isBlocked: !1
                                }), r.updateFrameHeightToWindowHeight(!0)), O.bodyOverflowQueue.unregister(e)
                            }
                        })
                    },
                    closePopup: function(t) {
                        this.$eventBus.$emit("handle-close-popup", t)
                    },
                    handleCloseAllPopup: function() {
                        this.$eventBus.$emit("handle-close-all-popup")
                    },
                    showAuthErrorPopup: function() {
                        var t = this;
                        return x(A().mark((function e() {
                            var r, i, a, s;
                            return A().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (r = function(t) {
                                                (0, o.bridgeSupports)("GPWebAppRefreshPage") ? (0, o.emitRefreshPage)() : t()
                                            }, i = t.$t("common.authError"), a = t.$t("common.popupRefreshPage"), n.BUILD_NAME_IS.MOBILE_APP_DEFAULT && (i = t.$t("common.connectionErrorMobileApp"), a = t.$t("common.popupApprove")), !(0, o.bridgeSupports)("GPWebAppShowAlert")) {
                                            e.next = 8;
                                            break
                                        }
                                        return e.next = 7, t.$alert.error({
                                            text: i,
                                            html: i,
                                            title: t.$t("common.error"),
                                            confirmButtonText: a,
                                            preConfirm: r,
                                            isPermanent: !0
                                        });
                                    case 7:
                                        return e.abrupt("return");
                                    case 8:
                                        s = {
                                            errorMsg: i,
                                            customButton: {
                                                text: a,
                                                action: r
                                            }
                                        }, t.defaultOpenModal(w, "ErrorPopup", s);
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    },
                    showErrorPopup: function() {
                        var t = arguments,
                            e = this;
                        return x(A().mark((function r() {
                            var i, a, s, c, u;
                            return A().wrap((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        if (i = t.length > 0 && void 0 !== t[0] ? t[0] : "", a = t.length > 1 && void 0 !== t[1] && t[1], s = e.$t("common.rechargeDeposit"), c = e.rechargeDepositRoute, !e.preventErrorModal) {
                                            r.next = 6;
                                            break
                                        }
                                        return r.abrupt("return");
                                    case 6:
                                        if (!(0, o.bridgeSupports)("GPWebAppShowAlert") || n.BUILD_NAME_IS.MOBILE_APP_DEFAULT) {
                                            r.next = 10;
                                            break
                                        }
                                        return r.next = 9, e.$alert.error(a && !e.isDemo ? {
                                            title: e.$t("common.error"),
                                            text: i,
                                            confirmButtonText: s,
                                            preConfirm: c
                                        } : {
                                            title: e.$t("common.error"),
                                            text: i
                                        });
                                    case 9:
                                        return r.abrupt("return");
                                    case 10:
                                        u = !a || n.BUILD_NAME_IS.MOBILE_APP_DEFAULT || e.isDemo ? {
                                            errorMsg: i
                                        } : {
                                            errorMsg: i,
                                            customButton: {
                                                text: s,
                                                action: c
                                            }
                                        }, e.defaultOpenModal(w, "ErrorPopup", u);
                                    case 12:
                                    case "end":
                                        return r.stop()
                                }
                            }), r)
                        })))()
                    },
                    rechargeDepositRoute: function() {
                        (0, o.emitSetRoute)({
                            name: "recharge"
                        })
                    },
                    updateFrameHeightToWindowHeight: function(t) {
                        var e = this;
                        return x(A().mark((function r() {
                            return A().wrap((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        if (!e.isMobileView || "Lobby" !== e.$route.name) {
                                            r.next = 4;
                                            break
                                        }
                                        return e.setResizeToScrollHeightEnabled(t), r.next = 4, S();
                                    case 4:
                                    case "end":
                                        return r.stop()
                                }
                            }), r)
                        })))()
                    }
                })
            };

            function k(t) {
                return k = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, k(t)
            }

            function T() {
                T = function() {
                    return e
                };
                var t, e = {},
                    r = Object.prototype,
                    n = r.hasOwnProperty,
                    o = Object.defineProperty || function(t, e, r) {
                        t[e] = r.value
                    },
                    i = "function" == typeof Symbol ? Symbol : {},
                    a = i.iterator || "@@iterator",
                    s = i.asyncIterator || "@@asyncIterator",
                    c = i.toStringTag || "@@toStringTag";

                function u(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    u({}, "")
                } catch (t) {
                    u = function(t, e, r) {
                        return t[e] = r
                    }
                }

                function l(t, e, r, n) {
                    var i = e && e.prototype instanceof y ? e : y,
                        a = Object.create(i.prototype),
                        s = new B(n || []);
                    return o(a, "_invoke", {
                        value: x(t, r, s)
                    }), a
                }

                function f(t, e, r) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, r)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                e.wrap = l;
                var h = "suspendedStart",
                    p = "suspendedYield",
                    d = "executing",
                    m = "completed",
                    v = {};

                function y() {}

                function b() {}

                function g() {}
                var w = {};
                u(w, a, (function() {
                    return this
                }));
                var S = Object.getPrototypeOf,
                    O = S && S(S(L([])));
                O && O !== r && n.call(O, a) && (w = O);
                var _ = g.prototype = y.prototype = Object.create(w);

                function A(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        u(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function P(t, e) {
                    function r(o, i, a, s) {
                        var c = f(t[o], t, i);
                        if ("throw" !== c.type) {
                            var u = c.arg,
                                l = u.value;
                            return l && "object" == k(l) && n.call(l, "__await") ? e.resolve(l.__await).then((function(t) {
                                r("next", t, a, s)
                            }), (function(t) {
                                r("throw", t, a, s)
                            })) : e.resolve(l).then((function(t) {
                                u.value = t, a(u)
                            }), (function(t) {
                                return r("throw", t, a, s)
                            }))
                        }
                        s(c.arg)
                    }
                    var i;
                    o(this, "_invoke", {
                        value: function(t, n) {
                            function o() {
                                return new e((function(e, o) {
                                    r(t, n, e, o)
                                }))
                            }
                            return i = i ? i.then(o, o) : o()
                        }
                    })
                }

                function x(e, r, n) {
                    var o = h;
                    return function(i, a) {
                        if (o === d) throw new Error("Generator is already running");
                        if (o === m) {
                            if ("throw" === i) throw a;
                            return {
                                value: t,
                                done: !0
                            }
                        }
                        for (n.method = i, n.arg = a;;) {
                            var s = n.delegate;
                            if (s) {
                                var c = E(s, n);
                                if (c) {
                                    if (c === v) continue;
                                    return c
                                }
                            }
                            if ("next" === n.method) n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) {
                                if (o === h) throw o = m, n.arg;
                                n.dispatchException(n.arg)
                            } else "return" === n.method && n.abrupt("return", n.arg);
                            o = d;
                            var u = f(e, r, n);
                            if ("normal" === u.type) {
                                if (o = n.done ? m : p, u.arg === v) continue;
                                return {
                                    value: u.arg,
                                    done: n.done
                                }
                            }
                            "throw" === u.type && (o = m, n.method = "throw", n.arg = u.arg)
                        }
                    }
                }

                function E(e, r) {
                    var n = r.method,
                        o = e.iterator[n];
                    if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, E(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), v;
                    var i = f(o, e.iterator, r.arg);
                    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, v;
                    var a = i.arg;
                    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, v) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, v)
                }

                function C(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function j(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function B(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(C, this), this.reset(!0)
                }

                function L(e) {
                    if (e || "" === e) {
                        var r = e[a];
                        if (r) return r.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var o = -1,
                                i = function r() {
                                    for (; ++o < e.length;)
                                        if (n.call(e, o)) return r.value = e[o], r.done = !1, r;
                                    return r.value = t, r.done = !0, r
                                };
                            return i.next = i
                        }
                    }
                    throw new TypeError(k(e) + " is not iterable")
                }
                return b.prototype = g, o(_, "constructor", {
                    value: g,
                    configurable: !0
                }), o(g, "constructor", {
                    value: b,
                    configurable: !0
                }), b.displayName = u(g, c, "GeneratorFunction"), e.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === b || "GeneratorFunction" === (e.displayName || e.name))
                }, e.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, g) : (t.__proto__ = g, u(t, c, "GeneratorFunction")), t.prototype = Object.create(_), t
                }, e.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, A(P.prototype), u(P.prototype, s, (function() {
                    return this
                })), e.AsyncIterator = P, e.async = function(t, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new P(l(t, r, n, o), i);
                    return e.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, A(_), u(_, c, "Generator"), u(_, a, (function() {
                    return this
                })), u(_, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(t) {
                    var e = Object(t),
                        r = [];
                    for (var n in e) r.push(n);
                    return r.reverse(),
                        function t() {
                            for (; r.length;) {
                                var n = r.pop();
                                if (n in e) return t.value = n, t.done = !1, t
                            }
                            return t.done = !0, t
                        }
                }, e.values = L, B.prototype = {
                    constructor: B,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(j), !e)
                            for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t)
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        if (this.done) throw e;
                        var r = this;

                        function o(n, o) {
                            return s.type = "throw", s.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o
                        }
                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var a = this.tryEntries[i],
                                s = a.completion;
                            if ("root" === a.tryLoc) return o("end");
                            if (a.tryLoc <= this.prev) {
                                var c = n.call(a, "catchLoc"),
                                    u = n.call(a, "finallyLoc");
                                if (c && u) {
                                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                                } else if (c) {
                                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0)
                                } else {
                                    if (!u) throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r];
                            if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var i = o;
                                break
                            }
                        }
                        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                        var a = i ? i.completion : {};
                        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, v) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), v
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), j(r), v
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    j(r)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, r, n) {
                        return this.delegate = {
                            iterator: L(e),
                            resultName: r,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = t), v
                    }
                }, e
            }

            function L(t, e, r, n, o, i, a) {
                try {
                    var s = t[i](a),
                        c = s.value
                } catch (u) {
                    return void r(u)
                }
                s.done ? e(c) : Promise.resolve(c).then(n, o)
            }

            function I(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function G(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? I(Object(r), !0).forEach((function(e) {
                        R(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : I(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function R(t, e, r) {
                return (e = function(t) {
                    var e = function(t, e) {
                        if ("object" !== k(t) || null === t) return t;
                        var r = t[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var n = r.call(t, e || "default");
                            if ("object" !== k(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(t, "string");
                    return "symbol" === k(e) ? e : String(e)
                }(e)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
            var D = {
                mixins: [B],
                methods: G(G({}, (0, i.mapMutations)("common", ["setIsModalActive"])), {}, {
                    showAuthenticationRequired: function() {
                        var t, e = this;
                        return (t = T().mark((function t() {
                            var i, s, c, u, l;
                            return T().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (i = e.$store.state.application.view, !n.BUILD_NAME_IS.V2) {
                                            t.next = 13;
                                            break
                                        }
                                        return t.next = 4, r(46842594)("./".concat(i, "/index"));
                                    case 4:
                                        return s = t.sent, c = s.component, u = s.images, l = void 0 === u ? {} : u, t.next = 10, a.assetsManager.loadModule(a.ASSETS_MODULE_AUTH_POPUP, {
                                            images: l
                                        });
                                    case 10:
                                        e.defaultOpenModal(c, "AuthPopup"), t.next = 15;
                                        break;
                                    case 13:
                                        (0, o.emitShowAuthenticationRequired)(), e.setIsModalActive(!0);
                                    case 15:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })), function() {
                            var e = this,
                                r = arguments;
                            return new Promise((function(n, o) {
                                var i = t.apply(e, r);

                                function a(t) {
                                    L(i, n, o, a, s, "next", t)
                                }

                                function s(t) {
                                    L(i, n, o, a, s, "throw", t)
                                }
                                a(void 0)
                            }))
                        })()
                    }
                })
            }
        },
        7858873: (t, e, r) => {
            "use strict";
            r.d(e, {
                IV: () => n,
                SR: () => o,
                pV: () => i,
                D2: () => h
            });
            var n = function(t) {
                    return t.Web = "Web", t.Android = "Android", t.IOS = "IOS", t
                }({}),
                o = function(t) {
                    return t.Desktop = "Desktop", t.Mobile = "Mobile", t
                }({}),
                i = {
                    doubleWin: 1,
                    revertHalfBet: 2,
                    freeBet: 3,
                    oneTime: 666
                };
            r(10185827), r(87241539), r(76696649), r(27396078), r(15382526), r(58141817), r(5021703), r(23209653), r(88369070), r(56447941), r(88057327), r(59438880), r(6757658), r(61454747), r(3749337), r(88833321), r(65932165), r(72066992), r(7978783), r(89333948);

            function a(t) {
                return a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, a(t)
            }

            function s(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function c(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? s(Object(r), !0).forEach((function(e) {
                        u(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function u(t, e, r) {
                return (e = function(t) {
                    var e = function(t, e) {
                        if ("object" !== a(t) || null === t) return t;
                        var r = t[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var n = r.call(t, e || "default");
                            if ("object" !== a(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(t, "string");
                    return "symbol" === a(e) ? e : String(e)
                }(e)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
            var l = [{
                    id: 1,
                    code: "RUB"
                }, {
                    id: 2,
                    code: "BYR"
                }, {
                    id: 3,
                    code: "UAH"
                }, {
                    id: 4,
                    code: "AZN"
                }, {
                    id: 5,
                    code: "TMT"
                }, {
                    id: 6,
                    code: "GEL"
                }, {
                    id: 7,
                    code: "KGS"
                }, {
                    id: 8,
                    code: "MDL"
                }, {
                    id: 9,
                    code: "KZT"
                }, {
                    id: 10,
                    code: "USD"
                }, {
                    id: 12,
                    code: "EUR"
                }, {
                    id: 14,
                    code: "AMD"
                }, {
                    id: 15,
                    code: "TJS"
                }, {
                    id: 16,
                    code: "PRB"
                }, {
                    id: 18,
                    code: "GBP"
                }, {
                    id: 20,
                    code: "TRY"
                }, {
                    id: 22,
                    code: "MNT"
                }, {
                    id: 23,
                    code: "µBT"
                }, {
                    id: 24,
                    code: "COP"
                }, {
                    id: 25,
                    code: "mBT"
                }, {
                    id: 26,
                    code: "XAF"
                }, {
                    id: 27,
                    code: "XOF"
                }, {
                    id: 28,
                    code: "BRL"
                }, {
                    id: 30,
                    code: "CNY"
                }, {
                    id: 31,
                    code: "IRR"
                }, {
                    id: 33,
                    code: "CLP"
                }, {
                    id: 35,
                    code: "PEN"
                }, {
                    id: 37,
                    code: "ARS"
                }, {
                    id: 39,
                    code: "VEF"
                }, {
                    id: 41,
                    code: "MXN"
                }, {
                    id: 43,
                    code: "UYU"
                }, {
                    id: 45,
                    code: "HTG"
                }, {
                    id: 47,
                    code: "PLN"
                }, {
                    id: 49,
                    code: "CHF"
                }, {
                    id: 51,
                    code: "BGN"
                }, {
                    id: 53,
                    code: "CZK"
                }, {
                    id: 55,
                    code: "DKK"
                }, {
                    id: 57,
                    code: "HRK"
                }, {
                    id: 59,
                    code: "HUF"
                }, {
                    id: 61,
                    code: "SEK"
                }, {
                    id: 63,
                    code: "NOK"
                }, {
                    id: 65,
                    code: "RSD"
                }, {
                    id: 67,
                    code: "RON"
                }, {
                    id: 69,
                    code: "ALL"
                }, {
                    id: 71,
                    code: "BAM"
                }, {
                    id: 73,
                    code: "ISK"
                }, {
                    id: 75,
                    code: "MKD"
                }, {
                    id: 77,
                    code: "AUD"
                }, {
                    id: 79,
                    code: "NZD"
                }, {
                    id: 81,
                    code: "CAD"
                }, {
                    id: 83,
                    code: "BOB"
                }, {
                    id: 85,
                    code: "PYG"
                }, {
                    id: 87,
                    code: "UZS"
                }, {
                    id: 89,
                    code: "BDT"
                }, {
                    id: 91,
                    code: "VND"
                }, {
                    id: 93,
                    code: "KRW"
                }, {
                    id: 95,
                    code: "LTC"
                }, {
                    id: 97,
                    code: "DTC"
                }, {
                    id: 99,
                    code: "INR"
                }, {
                    id: 100,
                    code: "GMC"
                }, {
                    id: 101,
                    code: "ILS"
                }, {
                    id: 103,
                    code: "JPY"
                }, {
                    id: 105,
                    code: "MYR"
                }, {
                    id: 107,
                    code: "PHP"
                }, {
                    id: 109,
                    code: "SGD"
                }, {
                    id: 111,
                    code: "THB"
                }, {
                    id: 113,
                    code: "TWD"
                }, {
                    id: 115,
                    code: "NGN"
                }, {
                    id: 117,
                    code: "ETB"
                }, {
                    id: 119,
                    code: "EGP"
                }, {
                    id: 121,
                    code: "CDF"
                }, {
                    id: 123,
                    code: "ZAR"
                }, {
                    id: 125,
                    code: "TZS"
                }, {
                    id: 127,
                    code: "SDG"
                }, {
                    id: 129,
                    code: "KES"
                }, {
                    id: 131,
                    code: "DZD"
                }, {
                    id: 133,
                    code: "UGX"
                }, {
                    id: 135,
                    code: "MAD"
                }, {
                    id: 137,
                    code: "GHS"
                }, {
                    id: 139,
                    code: "MZN"
                }, {
                    id: 141,
                    code: "AOA"
                }, {
                    id: 143,
                    code: "AED"
                }, {
                    id: 145,
                    code: "HKD"
                }, {
                    id: 147,
                    code: "IDR"
                }, {
                    id: 149,
                    code: "MMK"
                }, {
                    id: 151,
                    code: "KWD"
                }, {
                    id: 153,
                    code: "SAR"
                }, {
                    id: 155,
                    code: "BYN"
                }, {
                    id: 157,
                    code: "TND"
                }, {
                    id: 159,
                    code: "OMR"
                }, {
                    id: 161,
                    code: "JOD"
                }, {
                    id: 163,
                    code: "BHD"
                }, {
                    id: 165,
                    code: "QAR"
                }, {
                    id: 167,
                    code: "ZMW"
                }, {
                    id: 169,
                    code: "ZWL"
                }, {
                    id: 171,
                    code: "DASH"
                }, {
                    id: 173,
                    code: "XMR"
                }, {
                    id: 175,
                    code: "ETH"
                }, {
                    id: 177,
                    code: "IQD"
                }, {
                    id: 179,
                    code: "ZEC"
                }, {
                    id: 181,
                    code: "GAME"
                }, {
                    id: 183,
                    code: "XEM"
                }, {
                    id: 185,
                    code: "PKR"
                }, {
                    id: 187,
                    code: "KHR"
                }, {
                    id: 189,
                    code: "mDASH"
                }, {
                    id: 190,
                    code: "mLTC"
                }, {
                    id: 191,
                    code: "mETH"
                }, {
                    id: 192,
                    code: "mXMR"
                }, {
                    id: 193,
                    code: "mZEC"
                }, {
                    id: 194,
                    code: "BCN"
                }, {
                    id: 195,
                    code: "SIB"
                }, {
                    id: 197,
                    code: "XAU"
                }, {
                    id: 199,
                    code: "DGB"
                }, {
                    id: 201,
                    code: "mBCH"
                }, {
                    id: 203,
                    code: "mETC"
                }, {
                    id: 205,
                    code: "GNF"
                }, {
                    id: 207,
                    code: "FUNC"
                }, {
                    id: 209,
                    code: "BTS"
                }, {
                    id: 211,
                    code: "RWF"
                }, {
                    id: 213,
                    code: "XGOX"
                }, {
                    id: 215,
                    code: "BWP"
                }, {
                    id: 217,
                    code: "mBTG"
                }, {
                    id: 219,
                    code: "LKR"
                }, {
                    id: 221,
                    code: "NPR"
                }, {
                    id: 223,
                    code: "BIF"
                }, {
                    id: 225,
                    code: "GMD"
                }, {
                    id: 227,
                    code: "DJF"
                }, {
                    id: 229,
                    code: "CVE"
                }, {
                    id: 231,
                    code: "KMF"
                }, {
                    id: 233,
                    code: "LSL"
                }, {
                    id: 235,
                    code: "LRD"
                }, {
                    id: 237,
                    code: "LYD"
                }, {
                    id: 239,
                    code: "MGA"
                }, {
                    id: 241,
                    code: "MWK"
                }, {
                    id: 243,
                    code: "NAD"
                }, {
                    id: 245,
                    code: "SZL"
                }, {
                    id: 247,
                    code: "SCR"
                }, {
                    id: 249,
                    code: "SOS"
                }, {
                    id: 251,
                    code: "ERN"
                }, {
                    id: 253,
                    code: "MUR"
                }, {
                    id: 255,
                    code: "MRU"
                }, {
                    id: 257,
                    code: "SSP"
                }, {
                    id: 259,
                    code: "DOGE"
                }, {
                    id: 260,
                    code: "XVG"
                }, {
                    id: 261,
                    code: "QTUM"
                }, {
                    id: 262,
                    code: "STRAT"
                }, {
                    id: 263,
                    code: "TRX"
                }, {
                    id: 264,
                    code: "XRP"
                }, {
                    id: 265,
                    code: "LBP"
                }, {
                    id: 266,
                    code: "CRC"
                }, {
                    id: 267,
                    code: "USDC"
                }, {
                    id: 268,
                    code: "TUSD"
                }, {
                    id: 269,
                    code: "PAX"
                }, {
                    id: 270,
                    code: "USDT"
                }, {
                    id: 271,
                    code: "LINK"
                }, {
                    id: 272,
                    code: "OMG"
                }, {
                    id: 273,
                    code: "BAT"
                }, {
                    id: 274,
                    code: "TMTM"
                }, {
                    id: 275,
                    code: "IRT"
                }, {
                    id: 276,
                    code: "SLL"
                }, {
                    id: 277,
                    code: "HNL"
                }, {
                    id: 278,
                    code: "CUP"
                }, {
                    id: 279,
                    code: "DOP"
                }, {
                    id: 280,
                    code: "GTQ"
                }, {
                    id: 281,
                    code: "NIO"
                }, {
                    id: 282,
                    code: "PAB"
                }, {
                    id: 294,
                    code: "EOS"
                }, {
                    id: 295,
                    code: "BNB"
                }, {
                    id: 296,
                    code: "SYP"
                }, {
                    id: 297,
                    code: "BFGEX"
                }, {
                    id: 298,
                    code: "µWBTC"
                }, {
                    id: 299,
                    code: "ADA"
                }, {
                    id: 300,
                    code: "AFN"
                }, {
                    id: 301,
                    code: "ANG"
                }, {
                    id: 302,
                    code: "AWG"
                }, {
                    id: 303,
                    code: "BBD"
                }, {
                    id: 304,
                    code: "BMD"
                }, {
                    id: 305,
                    code: "BND"
                }, {
                    id: 306,
                    code: "BTN"
                }, {
                    id: 307,
                    code: "BZD"
                }, {
                    id: 308,
                    code: "CLF"
                }, {
                    id: 309,
                    code: "CUC"
                }, {
                    id: 310,
                    code: "FJD"
                }, {
                    id: 311,
                    code: "FKP"
                }, {
                    id: 312,
                    code: "GGP"
                }, {
                    id: 313,
                    code: "GIP"
                }, {
                    id: 314,
                    code: "GYD"
                }, {
                    id: 315,
                    code: "IMP"
                }, {
                    id: 316,
                    code: "JEP"
                }, {
                    id: 317,
                    code: "JMD"
                }, {
                    id: 318,
                    code: "KPW"
                }, {
                    id: 319,
                    code: "KYD"
                }, {
                    id: 320,
                    code: "LAK"
                }, {
                    id: 321,
                    code: "MOP"
                }, {
                    id: 322,
                    code: "MVR"
                }, {
                    id: 323,
                    code: "PGK"
                }, {
                    id: 324,
                    code: "SBD"
                }, {
                    id: 325,
                    code: "XAG"
                }, {
                    id: 326,
                    code: "SHP"
                }, {
                    id: 327,
                    code: "XCD"
                }, {
                    id: 328,
                    code: "SRD"
                }, {
                    id: 329,
                    code: "TOP"
                }, {
                    id: 330,
                    code: "XDR"
                }, {
                    id: 331,
                    code: "XPF"
                }, {
                    id: 332,
                    code: "YER"
                }, {
                    id: 333,
                    code: "VES"
                }, {
                    id: 334,
                    code: "TTD"
                }, {
                    id: 335,
                    code: "VUV"
                }, {
                    id: 336,
                    code: "WST"
                }, {
                    id: 337,
                    code: "mBNB"
                }, {
                    id: 338,
                    code: "XLM"
                }, {
                    id: 339,
                    code: "LBPM"
                }, {
                    id: 340,
                    code: "SYPM"
                }, {
                    id: 341,
                    code: "GAL"
                }, {
                    id: 342,
                    code: "PSG"
                }, {
                    id: 343,
                    code: "ACM"
                }, {
                    id: 344,
                    code: "JUV"
                }, {
                    id: 345,
                    code: "ASR"
                }, {
                    id: 346,
                    code: "DAI"
                }, {
                    id: 347,
                    code: "DOT"
                }, {
                    id: 348,
                    code: "BUSD"
                }, {
                    id: 350,
                    code: "kSHIB"
                }, {
                    id: 351,
                    code: "888"
                }, {
                    id: 352,
                    code: "mSOL"
                }, {
                    id: 353,
                    code: "mLUNA"
                }, {
                    id: 354,
                    code: "UST"
                }, {
                    id: 355,
                    code: "SLE"
                }, {
                    id: 356,
                    code: "TON"
                }, {
                    id: 357,
                    code: "AVAX"
                }, {
                    id: 358,
                    code: "XBIT"
                }, {
                    id: 359,
                    code: "ATOM"
                }, {
                    id: 360,
                    code: "MATIC"
                }, {
                    id: 361,
                    code: "DZDM"
                }, {
                    id: 362,
                    code: "µBTC"
                }, {
                    id: 363,
                    code: "mBTC"
                }, {
                    id: 364,
                    code: "ALGO"
                }],
                f = function(t) {
                    return l.reduce((function(e, r) {
                        return c(c({}, e), {}, u({}, t ? r.code : r.id, r))
                    }), {})
                },
                h = (f(!1), f(!0), function(t) {
                    return t[t.Main = 0] = "Main", t[t.BonusCasino = 7] = "BonusCasino", t[t.Bonus = 13] = "Bonus", t
                }({}))
        },
        7025295: (t, e, r) => {
            "use strict";
            r.d(e, {
                zJ: () => o,
                gv: () => i
            });
            r(87241539), r(98226699), r(72132023), r(88482481);
            var n = function(t) {
                    return "Enter" === t.key
                },
                o = function(t) {
                    var e = function(e) {
                        n(e) && !e.repeat && (e.preventDefault(), t())
                    };
                    return window.addEventListener("keydown", e),
                        function() {
                            return window.removeEventListener("keydown", e)
                        }
                },
                i = function() {
                    var t = function(t) {
                        n(t) && t.stopPropagation()
                    };
                    return window.addEventListener("keydown", t, !0),
                        function() {
                            return window.removeEventListener("keydown", t, !0)
                        }
                }
        },
        33240788: (t, e, r) => {
            "use strict";
            r.d(e, {
                Z: () => a
            });
            r(87241539), r(64788674), r(88369070), r(15382526), r(58141817), r(65932165), r(72066992), r(7978783), r(89333948), r(70472443), r(93639341), r(94173706), r(7910408), r(10530489), r(5021703), r(6757658), r(61454747), r(57968304), r(88365069), r(94747042);

            function n(t) {
                return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, n(t)
            }

            function o() {
                o = function() {
                    return e
                };
                var t, e = {},
                    r = Object.prototype,
                    i = r.hasOwnProperty,
                    a = Object.defineProperty || function(t, e, r) {
                        t[e] = r.value
                    },
                    s = "function" == typeof Symbol ? Symbol : {},
                    c = s.iterator || "@@iterator",
                    u = s.asyncIterator || "@@asyncIterator",
                    l = s.toStringTag || "@@toStringTag";

                function f(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    f({}, "")
                } catch (t) {
                    f = function(t, e, r) {
                        return t[e] = r
                    }
                }

                function h(t, e, r, n) {
                    var o = e && e.prototype instanceof g ? e : g,
                        i = Object.create(o.prototype),
                        s = new T(n || []);
                    return a(i, "_invoke", {
                        value: C(t, r, s)
                    }), i
                }

                function p(t, e, r) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, r)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                e.wrap = h;
                var d = "suspendedStart",
                    m = "suspendedYield",
                    v = "executing",
                    y = "completed",
                    b = {};

                function g() {}

                function w() {}

                function S() {}
                var O = {};
                f(O, c, (function() {
                    return this
                }));
                var _ = Object.getPrototypeOf,
                    A = _ && _(_(L([])));
                A && A !== r && i.call(A, c) && (O = A);
                var P = S.prototype = g.prototype = Object.create(O);

                function x(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        f(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function E(t, e) {
                    function r(o, a, s, c) {
                        var u = p(t[o], t, a);
                        if ("throw" !== u.type) {
                            var l = u.arg,
                                f = l.value;
                            return f && "object" == n(f) && i.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
                                r("next", t, s, c)
                            }), (function(t) {
                                r("throw", t, s, c)
                            })) : e.resolve(f).then((function(t) {
                                l.value = t, s(l)
                            }), (function(t) {
                                return r("throw", t, s, c)
                            }))
                        }
                        c(u.arg)
                    }
                    var o;
                    a(this, "_invoke", {
                        value: function(t, n) {
                            function i() {
                                return new e((function(e, o) {
                                    r(t, n, e, o)
                                }))
                            }
                            return o = o ? o.then(i, i) : i()
                        }
                    })
                }

                function C(e, r, n) {
                    var o = d;
                    return function(i, a) {
                        if (o === v) throw new Error("Generator is already running");
                        if (o === y) {
                            if ("throw" === i) throw a;
                            return {
                                value: t,
                                done: !0
                            }
                        }
                        for (n.method = i, n.arg = a;;) {
                            var s = n.delegate;
                            if (s) {
                                var c = j(s, n);
                                if (c) {
                                    if (c === b) continue;
                                    return c
                                }
                            }
                            if ("next" === n.method) n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) {
                                if (o === d) throw o = y, n.arg;
                                n.dispatchException(n.arg)
                            } else "return" === n.method && n.abrupt("return", n.arg);
                            o = v;
                            var u = p(e, r, n);
                            if ("normal" === u.type) {
                                if (o = n.done ? y : m, u.arg === b) continue;
                                return {
                                    value: u.arg,
                                    done: n.done
                                }
                            }
                            "throw" === u.type && (o = y, n.method = "throw", n.arg = u.arg)
                        }
                    }
                }

                function j(e, r) {
                    var n = r.method,
                        o = e.iterator[n];
                    if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, j(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), b;
                    var i = p(o, e.iterator, r.arg);
                    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, b;
                    var a = i.arg;
                    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, b) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, b)
                }

                function B(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function k(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function T(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(B, this), this.reset(!0)
                }

                function L(e) {
                    if (e || "" === e) {
                        var r = e[c];
                        if (r) return r.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var o = -1,
                                a = function r() {
                                    for (; ++o < e.length;)
                                        if (i.call(e, o)) return r.value = e[o], r.done = !1, r;
                                    return r.value = t, r.done = !0, r
                                };
                            return a.next = a
                        }
                    }
                    throw new TypeError(n(e) + " is not iterable")
                }
                return w.prototype = S, a(P, "constructor", {
                    value: S,
                    configurable: !0
                }), a(S, "constructor", {
                    value: w,
                    configurable: !0
                }), w.displayName = f(S, l, "GeneratorFunction"), e.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === w || "GeneratorFunction" === (e.displayName || e.name))
                }, e.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, S) : (t.__proto__ = S, f(t, l, "GeneratorFunction")), t.prototype = Object.create(P), t
                }, e.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, x(E.prototype), f(E.prototype, u, (function() {
                    return this
                })), e.AsyncIterator = E, e.async = function(t, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new E(h(t, r, n, o), i);
                    return e.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, x(P), f(P, l, "Generator"), f(P, c, (function() {
                    return this
                })), f(P, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(t) {
                    var e = Object(t),
                        r = [];
                    for (var n in e) r.push(n);
                    return r.reverse(),
                        function t() {
                            for (; r.length;) {
                                var n = r.pop();
                                if (n in e) return t.value = n, t.done = !1, t
                            }
                            return t.done = !0, t
                        }
                }, e.values = L, T.prototype = {
                    constructor: T,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(k), !e)
                            for (var r in this) "t" === r.charAt(0) && i.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t)
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        if (this.done) throw e;
                        var r = this;

                        function n(n, o) {
                            return s.type = "throw", s.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var a = this.tryEntries[o],
                                s = a.completion;
                            if ("root" === a.tryLoc) return n("end");
                            if (a.tryLoc <= this.prev) {
                                var c = i.call(a, "catchLoc"),
                                    u = i.call(a, "finallyLoc");
                                if (c && u) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                } else if (c) {
                                    if (this.prev < a.catchLoc) return n(a.catchLoc, !0)
                                } else {
                                    if (!u) throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return n(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var n = this.tryEntries[r];
                            if (n.tryLoc <= this.prev && i.call(n, "finallyLoc") && this.prev < n.finallyLoc) {
                                var o = n;
                                break
                            }
                        }
                        o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
                        var a = o ? o.completion : {};
                        return a.type = t, a.arg = e, o ? (this.method = "next", this.next = o.finallyLoc, b) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), b
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), k(r), b
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    k(r)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, r, n) {
                        return this.delegate = {
                            iterator: L(e),
                            resultName: r,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = t), b
                    }
                }, e
            }

            function i(t, e, r, n, o, i, a) {
                try {
                    var s = t[i](a),
                        c = s.value
                } catch (u) {
                    return void r(u)
                }
                s.done ? e(c) : Promise.resolve(c).then(n, o)
            }
            const a = function() {
                var t, e = (t = o().mark((function t(e) {
                    return o().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.abrupt("return", new Promise((function(t) {
                                    setTimeout(t, e)
                                })));
                            case 1:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })), function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var a = t.apply(e, r);

                        function s(t) {
                            i(a, n, o, s, c, "next", t)
                        }

                        function c(t) {
                            i(a, n, o, s, c, "throw", t)
                        }
                        s(void 0)
                    }))
                });
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
        },
        72126228: (t, e, r) => {
            "use strict";
            r.d(e, {
                Z: () => l
            });
            r(87241539), r(61454747), r(76696649), r(27396078), r(15382526), r(58141817), r(5021703), r(23209653), r(88369070), r(56447941), r(88057327), r(59438880), r(6757658), r(3749337), r(88833321), r(65932165), r(72066992), r(7978783), r(89333948);
            var n = r(84440687),
                o = function(t) {
                    return "--".concat(t)
                },
                i = function(t) {
                    return "url('".concat(t, "')")
                };

            function a(t) {
                return a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, a(t)
            }

            function s(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function c(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? s(Object(r), !0).forEach((function(e) {
                        u(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function u(t, e, r) {
                return (e = function(t) {
                    var e = function(t, e) {
                        if ("object" !== a(t) || null === t) return t;
                        var r = t[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var n = r.call(t, e || "default");
                            if ("object" !== a(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(t, "string");
                    return "symbol" === a(e) ? e : String(e)
                }(e)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
            const l = {
                components: {
                    SvgShadowLayout: r(37283298).M
                },
                data: function() {
                    return {
                        imagesVariablesStyle: {}
                    }
                },
                computed: c({}, (0, n.mapGetters)("assets", ["getAssetsImages"])),
                mounted: function() {
                    var t, e;
                    this.imagesVariablesStyle = (t = this.getAssetsImages, e = {}, t.forEach((function(t, r) {
                        e[o(r)] = i(t.src)
                    })), e)
                },
                methods: {
                    getImageSrc: function(t) {
                        var e;
                        return null === (e = this.getAssetsImages.get(t)) || void 0 === e ? void 0 : e.src
                    },
                    getImagesBgStyle: function(t) {
                        var e = this,
                            r = c({}, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {});
                        return (Array.isArray(t) ? t : [t]).forEach((function(t) {
                            r[o(t)] = i(e.getImageSrc(t))
                        })), r
                    }
                }
            }
        },
        32776368: (t, e, r) => {
            "use strict";
            r.d(e, {
                Z: () => g
            });
            r(23209653), r(76696649), r(27396078), r(15382526), r(58141817), r(87241539), r(5021703), r(88369070), r(56447941), r(88057327), r(59438880), r(6757658), r(61454747), r(3749337), r(88833321), r(65932165), r(72066992), r(7978783), r(89333948);
            var n = r(84440687),
                o = r(49336426),
                i = (r(46892222), r(94747042), function() {
                    var t = this,
                        e = t._self._c;
                    return "checkbox" === t.type ? e("input", t._g({
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.visibleValue,
                            expression: "visibleValue"
                        }],
                        ref: "betInput",
                        staticClass: "bet-input",
                        class: t.classes,
                        attrs: {
                            disabled: t.blockedBetBtns,
                            placeholder: t.placeholder || 0,
                            autocomplete: "off",
                            inputmode: "decimal",
                            type: "checkbox"
                        },
                        domProps: {
                            checked: Array.isArray(t.visibleValue) ? t._i(t.visibleValue, null) > -1 : t.visibleValue
                        },
                        on: {
                            change: function(e) {
                                var r = t.visibleValue,
                                    n = e.target,
                                    o = !!n.checked;
                                if (Array.isArray(r)) {
                                    var i = t._i(r, null);
                                    n.checked ? i < 0 && (t.visibleValue = r.concat([null])) : i > -1 && (t.visibleValue = r.slice(0, i).concat(r.slice(i + 1)))
                                } else t.visibleValue = o
                            }
                        }
                    }, t.inputListeners)) : "radio" === t.type ? e("input", t._g({
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.visibleValue,
                            expression: "visibleValue"
                        }],
                        ref: "betInput",
                        staticClass: "bet-input",
                        class: t.classes,
                        attrs: {
                            disabled: t.blockedBetBtns,
                            placeholder: t.placeholder || 0,
                            autocomplete: "off",
                            inputmode: "decimal",
                            type: "radio"
                        },
                        domProps: {
                            checked: t._q(t.visibleValue, null)
                        },
                        on: {
                            change: function(e) {
                                t.visibleValue = null
                            }
                        }
                    }, t.inputListeners)) : e("input", t._g({
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.visibleValue,
                            expression: "visibleValue"
                        }],
                        ref: "betInput",
                        staticClass: "bet-input",
                        class: t.classes,
                        attrs: {
                            disabled: t.blockedBetBtns,
                            placeholder: t.placeholder || 0,
                            autocomplete: "off",
                            inputmode: "decimal",
                            type: t.type
                        },
                        domProps: {
                            value: t.visibleValue
                        },
                        on: {
                            input: function(e) {
                                e.target.composing || (t.visibleValue = e.target.value)
                            }
                        }
                    }, t.inputListeners))
                });
            i._withStripped = !0;
            r(21339714), r(98226699);
            var a = r(24891070);

            function s(t) {
                return s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, s(t)
            }

            function c(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function u(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? c(Object(r), !0).forEach((function(e) {
                        l(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function l(t, e, r) {
                return (e = function(t) {
                    var e = function(t, e) {
                        if ("object" !== s(t) || null === t) return t;
                        var r = t[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var n = r.call(t, e || "default");
                            if ("object" !== s(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(t, "string");
                    return "symbol" === s(e) ? e : String(e)
                }(e)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
            const f = {
                name: "UiBetInput",
                props: {
                    placeholder: {
                        type: String,
                        default: null
                    }
                },
                data: function() {
                    return {
                        blurTimeout: 0,
                        inputIsFocused: !1,
                        localValue: 0
                    }
                },
                computed: u(u(u({}, (0, n.mapGetters)("betsButtons", ["blockedBetBtns"])), (0, n.mapGetters)("application", ["isMobileView", "isIOSPlatform"])), {}, {
                    inputListeners: function() {
                        var t = this;
                        return u(u({}, this.$listeners), {}, {
                            input: function(e) {
                                return t.$emit("input", e.target.value)
                            },
                            change: function(e) {
                                return t.$emit("change", e.target.value)
                            },
                            focus: function() {
                                return t.onFocus()
                            },
                            blur: function() {
                                return t.onBlur()
                            }
                        })
                    },
                    type: function() {
                        return this.isMobileView && !this.isIOSPlatform ? "number" : "text"
                    },
                    classes: function() {
                        return {
                            dont_touch: this.blockedBetBtns || this.$parent.extraBlock
                        }
                    },
                    visibleValue: {
                        get: function() {
                            return (this.inputIsFocused ? this.localValue : this.$parent.sumBet) || ""
                        },
                        set: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                e = (t = t.toString()).length - 1;
                            [",", "."].includes(t[e]) && (t = t.substring(0, e)), this.$parent.setUserInputValue && this.$parent.setUserInputValue(t)
                        }
                    }
                }),
                created: function() {
                    var t = this;
                    this.$eventBus.$on("show-bets-popup", (function() {
                        t.$nextTick((function() {
                            t.$refs.betInput.focus({
                                preventScroll: !0
                            }), t.$refs.betInput.click()
                        }))
                    })), this.$eventBus.$on("blur-bet-input", (function() {
                        t.$refs.betInput.blur()
                    }))
                },
                beforeMount: function() {
                    window.addEventListener("resize", this.windowResizeHandler)
                },
                beforeDestroy: function() {
                    window.removeEventListener("resize", this.windowResizeHandler), this.blurTimeout && clearTimeout(this.blurTimeout)
                },
                methods: {
                    updateLocalValue: function() {
                        this.localValue = this.$parent.sumBet
                    },
                    onFocus: function() {
                        this.updateLocalValue(), this.inputIsFocused = !0, this.avoidOrientationRotate(), this.$emit("focus")
                    },
                    onBlur: function() {
                        this.inputIsFocused = !1, this.updateLocalValue(), this.setViewportToDefault(), this.$emit("blur")
                    },
                    windowResizeHandler: function() {
                        this.inputIsFocused || this.$refs.betInput.blur()
                    },
                    avoidOrientationRotate: function() {
                        this.isMobileView && (0, a.emitSetViewportAttributes)({
                            isDefault: !1
                        })
                    },
                    setViewportToDefault: function() {
                        var t = this;
                        this.isMobileView && (this.blurTimeout = setTimeout((function() {
                            (0, a.emitSetViewportAttributes)({
                                isDefault: !0
                            }), t.blurTimeout = 0
                        }), 200))
                    }
                }
            };
            const h = (0, r(83551900).Z)(f, i, [], !1, null, "09c1f019", null).exports;
            var p = r(28922973);

            function d(t) {
                return d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, d(t)
            }

            function m(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function v(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? m(Object(r), !0).forEach((function(e) {
                        y(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : m(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function y(t, e, r) {
                return (e = function(t) {
                    var e = function(t, e) {
                        if ("object" !== d(t) || null === t) return t;
                        var r = t[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var n = r.call(t, e || "default");
                            if ("object" !== d(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(t, "string");
                    return "symbol" === d(e) ? e : String(e)
                }(e)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
            var b = {
                RUB: 100,
                BYR: 5e4,
                UAH: 50,
                AZN: 2.5,
                TMT: 5,
                GEL: 10,
                KGS: 50,
                MDL: 10,
                KZT: 500,
                USD: 2.5,
                EUR: 2.5,
                AMD: 500,
                TJS: 10,
                PRB: 10,
                GBP: 2.5,
                TRY: 10,
                MNT: 5e3,
                micBT: 10,
                COP: 5e3,
                mBT: .5,
                XAF: 500,
                XOF: 500,
                BRL: 10,
                CNY: 25,
                IRR: 1e5,
                CLP: 1e3,
                PEN: 5,
                ARS: 50,
                VEF: 1e5,
                MXN: 10,
                UYU: 50,
                HTG: 50,
                PLN: 10,
                CHF: 5,
                BGN: 5,
                CZK: 50,
                DKK: 50,
                HRK: 10,
                HUF: 500,
                SEK: 50,
                NOK: 50,
                RSD: 100,
                RON: 10,
                ALL: 100,
                BAM: 5,
                ISK: 500,
                MKD: 100,
                AUD: 1,
                NZD: 5,
                CAD: 5,
                BOB: 5,
                PYG: 5e3,
                UZS: 5e3,
                BDT: 50,
                VND: 5e4,
                KRW: 5e3,
                DTC: 200,
                INR: 100,
                ILS: 5,
                JPY: 500,
                MYR: 10,
                PHP: 50,
                SGD: 5,
                THB: 50,
                TWD: 100,
                NGN: 100,
                ETB: 10,
                EGP: 10,
                CDF: 500,
                ZAR: 10,
                TZS: 1e3,
                SDG: 10,
                KES: 100,
                DZD: 50,
                UGX: 500,
                MAD: 10,
                GHS: 5,
                MZN: 10,
                AOA: 500,
                AED: 10,
                HKD: 10,
                IDR: 1e4,
                MMK: 1e3,
                KWD: .5,
                SAR: 10,
                BYN: 5,
                TND: 5,
                OMR: .5,
                JOD: 1,
                BHD: 1,
                QAR: 10,
                ZMW: 5,
                ZWL: 100,
                IQD: 500,
                GAME: 1,
                XEM: 1,
                PKR: 100,
                mDASH: 1,
                mLTC: 5,
                mETH: 10,
                mXMR: 5,
                mZEC: 50,
                BCN: 500,
                SIB: 10,
                DGB: 50,
                mBCH: 10,
                mETC: 100,
                GNF: 5e3,
                BTS: 10,
                RWF: 500,
                BWP: 10,
                mBTG: 10,
                LKR: 100,
                NPR: 50,
                BIF: 500,
                GMD: 10,
                DJF: 50,
                CVE: 100,
                KMF: 100,
                LSL: 5,
                LRD: 50,
                LYD: 5,
                MGA: 1e3,
                MWK: 500,
                NAD: 5,
                SZL: 10,
                SCR: 5,
                SOS: 100,
                MUR: 50,
                DOGE: 100,
                XVG: 10,
                QTUM: 1,
                STRAT: 5,
                TRX: 50,
                XRP: 5,
                LBP: 1e3,
                CRC: 500,
                USDT: 5,
                LINK: .5,
                OMG: .5,
                BAT: 1,
                TMTM: 5,
                IRT: 50,
                SLL: 1e3,
                HNL: 10,
                CUP: 10,
                DOP: 50,
                GTQ: 5,
                NIO: 10,
                PAB: 1,
                GMC: 100
            };
            const g = {
                components: {
                    UiBetInput: h,
                    SelectBonusAccount: o.default
                },
                mixins: [p.Z],
                props: {
                    primaryId: {
                        type: Number,
                        default: null
                    },
                    onlyButtons: {
                        type: Boolean,
                        default: !1
                    },
                    onlySumInput: {
                        type: Boolean,
                        default: !1
                    },
                    onlyClear: {
                        type: Boolean,
                        default: !1
                    },
                    classes: {
                        default: ""
                    },
                    extraBlock: {
                        type: Boolean,
                        default: !1
                    },
                    isUseInputMinBet: {
                        type: Boolean,
                        default: !0
                    }
                },
                data: function() {
                    return {
                        id: -1,
                        isUserInputSet: !1
                    }
                },
                mounted: function() {
                    null === this.primaryId && (this.componentId = this.countBetsComponents, this.setCountBetsComponents(this.componentId + 1)), this.sumBet || (this.sumBet = 0), this.isUseInputMinBet || this.setUseMinBet(this.isUseInputMinBet)
                },
                beforeDestroy: function() {
                    null === this.primaryId && this.$store.commit("betsButtons/deleteComponent", this.componentId)
                },
                computed: v(v(v(v(v(v({}, (0, n.mapGetters)("betsButtons", ["blockedBetBtns", "bets", "countBetsComponents", "sumBetsArray", "minBet"])), (0, n.mapGetters)("bonuses", ["bonusFreeBetIsActive"])), (0, n.mapGetters)("game", ["maxBet", "gameStarted", "gameCurrencyCode"])), (0, n.mapGetters)("demo", ["isDemo"])), (0, n.mapState)("demo", ["demoCurrencyCode"])), {}, {
                    betBtnsIsBlocked: function() {
                        return this.blockedBetBtns || this.extraBlock
                    },
                    blockedClass: function() {
                        return this.betBtnsIsBlocked ? "dont_touch" : ""
                    },
                    sumBet: {
                        get: function() {
                            var t;
                            return (null === (t = this.sumBetsArray[this.componentId]) || void 0 === t ? void 0 : t.value) || ""
                        },
                        set: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                            this.$eventBus.$emit("change_bet_input", this.componentId);
                            var e = {
                                id: this.componentId,
                                value: this.prepareSum(t)
                            };
                            this.isUserInputSet && (e.isUserInputs = !0, this.isUserInputSet = !1), this.setSumBet(e)
                        }
                    },
                    componentId: {
                        get: function() {
                            return null !== this.primaryId ? this.primaryId : this.id
                        },
                        set: function(t) {
                            this.id = t
                        }
                    }
                }),
                methods: v(v(v({}, (0, n.mapMutations)("betsButtons", ["setCountBetsComponents", "setSumBet", "setUseMinBet"])), (0, n.mapActions)("betsButtons", ["clearAllBets"])), {}, {
                    setUserInputValue: function(t) {
                        this.isUserInputSet = !0, this.sumBet = t
                    },
                    clickBet: function(t) {
                        this.betBtnsIsBlocked || this.setUserInputValue(this.sumBet + t)
                    },
                    clearSumBet: function() {
                        this.betBtnsIsBlocked || this.setUserInputValue(0)
                    },
                    plusMinusBet: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                        if (!this.betBtnsIsBlocked) {
                            var e = this.sumBet + t * b[this.gameCurrencyCode];
                            e < 0 && (e = 0), this.setUserInputValue(e)
                        }
                    },
                    placeMaxBet: function() {
                        this.betBtnsIsBlocked || (this.sumBet = this.maxBet)
                    },
                    placeMinBet: function() {
                        this.betBtnsIsBlocked || (this.sumBet = this.minBet)
                    },
                    doubleBet: function() {
                        this.sumBet && this.setUserInputValue(2 * this.sumBet)
                    },
                    halfBet: function() {
                        this.sumBet && this.setUserInputValue(this.sumBet / 2)
                    }
                })
            }
        },
        28922973: (t, e, r) => {
            "use strict";
            r.d(e, {
                Z: () => c
            });
            r(26974916), r(5804723), r(87241539), r(21339714), r(54115306), r(46454678), r(76696649), r(27396078), r(15382526), r(58141817), r(5021703), r(23209653), r(88369070), r(56447941), r(88057327), r(59438880), r(6757658), r(61454747), r(3749337), r(88833321), r(65932165), r(72066992), r(7978783), r(89333948);
            var n = r(84440687);

            function o(t) {
                return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, o(t)
            }

            function i(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function a(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? i(Object(r), !0).forEach((function(e) {
                        s(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function s(t, e, r) {
                return (e = function(t) {
                    var e = function(t, e) {
                        if ("object" !== o(t) || null === t) return t;
                        var r = t[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var n = r.call(t, e || "default");
                            if ("object" !== o(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(t, "string");
                    return "symbol" === o(e) ? e : String(e)
                }(e)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
            const c = {
                computed: a(a(a(a({}, (0, n.mapState)("game", ["gameCurrencyCode"])), (0, n.mapGetters)("bonuses", ["bonusFreeBetIsActive"])), (0, n.mapGetters)("demo", ["isDemo"])), (0, n.mapGetters)("currency", ["currentCurrency"])),
                methods: {
                    testSum: function(t) {
                        return null === t.toString().match(/^\d+(\.\d+)?$/) ? 0 : t
                    },
                    prepareSum: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        return t = t.toString().replace(",", "."), t = this.testSum(t), t = parseFloat(parseFloat(t).toFixed(2)), (t = this.testSum(t)).toString().length > 13 ? 0 : parseFloat(t)
                    },
                    getSumWithCurrency: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                            n = this.isDemo ? "EUR" : r || this.currentCurrency.code,
                            o = this.prepareSum(t) + " " + n;
                        return e ? this.$t("common.sumWin", [o]) : o
                    },
                    getSumWithCurrencyGame: function(t, e) {
                        return this.getSumWithCurrency(t, e, this.gameCurrencyCode)
                    },
                    getSumWithCurrencyAndCheckBonus: function(t, e) {
                        var r = this.bonusFreeBetIsActive ? "EUR" : this.gameCurrencyCode;
                        return this.getSumWithCurrency(t, e, r)
                    }
                }
            }
        },
        37283298: (t, e, r) => {
            "use strict";
            r.d(e, {
                M: () => p
            });
            r(46892222);
            var n = function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "svg-shadow-layout"
                }, t._l(t.getUrlSvg, (function(t, r) {
                    return e("InlineSvg", {
                        key: "".concat(t, "-").concat(r),
                        attrs: {
                            src: t
                        }
                    })
                })), 1)
            };
            n._withStripped = !0;
            r(98226699), r(72132023), r(87241539), r(61454747), r(6757658), r(76696649), r(27396078), r(15382526), r(58141817), r(5021703), r(23209653), r(88369070), r(56447941), r(88057327), r(59438880), r(3749337), r(88833321), r(65932165), r(72066992), r(7978783), r(89333948);
            var o = r(84440687),
                i = r(30935557),
                a = r.n(i),
                s = r(46919652);

            function c(t) {
                return c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, c(t)
            }

            function u(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function l(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? u(Object(r), !0).forEach((function(e) {
                        f(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : u(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function f(t, e, r) {
                return (e = function(t) {
                    var e = function(t, e) {
                        if ("object" !== c(t) || null === t) return t;
                        var r = t[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var n = r.call(t, e || "default");
                            if ("object" !== c(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(t, "string");
                    return "symbol" === c(e) ? e : String(e)
                }(e)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
            const h = {
                name: "SvgShadowLayout",
                components: {
                    InlineSvg: a()
                },
                props: {
                    svg: {
                        type: [String, Array],
                        required: !0
                    },
                    moduleName: {
                        type: String,
                        default: void 0,
                        validator: function(t) {
                            return !t || [s.ASSETS_MODULE_BINGO, s.ASSETS_MODULE_JACKPOT, s.ASSETS_MODULE_CASHBACK, s.ASSETS_MODULE_DAILY_QUEST, s.ASSETS_MODULE_LUCKY_WHEEL, s.ASSETS_MODULE_USER_BONUS, s.ASSETS_MODULE_BONUSES, s.ASSETS_MODULE_WEEK_REWARD, s.ASSETS_MODULE_ERROR_POPUP, s.ASSETS_MODULE_AUTH_POPUP, s.ASSETS_MODULE_ERROR_PAGE, s.ASSETS_MODULE_LOBBY, s.ASSETS_MODULE_ICON_SPRITE, s.ASSETS_MODULE_WAIT_CONNECTION].includes(t)
                        }
                    }
                },
                data: function() {
                    return {
                        urlList: []
                    }
                },
                computed: l(l({}, (0, o.mapGetters)("assets", ["getAssetsImages"])), {}, {
                    getUrlSvg: function() {
                        var t = this,
                            e = [];
                        return Array.isArray(this.svg) ? this.svg.forEach((function(r) {
                            e.push(t.getImageSrc(r))
                        })) : e.push(this.getImageSrc(this.svg)), e
                    }
                }),
                methods: {
                    getImageSrc: function(t) {
                        var e, r;
                        return this.moduleName ? null === (r = s.assetsManager.getModule(this.moduleName)) || void 0 === r || null === (r = r.images) || void 0 === r || null === (r = r.get(t)) || void 0 === r ? void 0 : r.src : null === (e = this.getAssetsImages.get(t)) || void 0 === e ? void 0 : e.src
                    }
                }
            };
            const p = (0, r(83551900).Z)(h, n, [], !1, null, "6e64cff8", null).exports
        },
        74807901: (t, e, r) => {
            "use strict";
            r.d(e, {
                e: () => h
            });
            r(76696649), r(27396078), r(15382526), r(58141817), r(87241539), r(5021703), r(23209653), r(88369070), r(56447941), r(88057327), r(59438880), r(6757658), r(61454747), r(3749337), r(88833321), r(64788674), r(65932165), r(72066992), r(7978783), r(89333948), r(70472443), r(93639341), r(94173706), r(7910408), r(10530489), r(57968304), r(88365069), r(94747042);
            var n = r(84440687),
                o = r(24891070);

            function i(t) {
                return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, i(t)
            }

            function a() {
                a = function() {
                    return e
                };
                var t, e = {},
                    r = Object.prototype,
                    n = r.hasOwnProperty,
                    o = Object.defineProperty || function(t, e, r) {
                        t[e] = r.value
                    },
                    s = "function" == typeof Symbol ? Symbol : {},
                    c = s.iterator || "@@iterator",
                    u = s.asyncIterator || "@@asyncIterator",
                    l = s.toStringTag || "@@toStringTag";

                function f(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    f({}, "")
                } catch (t) {
                    f = function(t, e, r) {
                        return t[e] = r
                    }
                }

                function h(t, e, r, n) {
                    var i = e && e.prototype instanceof g ? e : g,
                        a = Object.create(i.prototype),
                        s = new T(n || []);
                    return o(a, "_invoke", {
                        value: C(t, r, s)
                    }), a
                }

                function p(t, e, r) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, r)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                e.wrap = h;
                var d = "suspendedStart",
                    m = "suspendedYield",
                    v = "executing",
                    y = "completed",
                    b = {};

                function g() {}

                function w() {}

                function S() {}
                var O = {};
                f(O, c, (function() {
                    return this
                }));
                var _ = Object.getPrototypeOf,
                    A = _ && _(_(L([])));
                A && A !== r && n.call(A, c) && (O = A);
                var P = S.prototype = g.prototype = Object.create(O);

                function x(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        f(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function E(t, e) {
                    function r(o, a, s, c) {
                        var u = p(t[o], t, a);
                        if ("throw" !== u.type) {
                            var l = u.arg,
                                f = l.value;
                            return f && "object" == i(f) && n.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
                                r("next", t, s, c)
                            }), (function(t) {
                                r("throw", t, s, c)
                            })) : e.resolve(f).then((function(t) {
                                l.value = t, s(l)
                            }), (function(t) {
                                return r("throw", t, s, c)
                            }))
                        }
                        c(u.arg)
                    }
                    var a;
                    o(this, "_invoke", {
                        value: function(t, n) {
                            function o() {
                                return new e((function(e, o) {
                                    r(t, n, e, o)
                                }))
                            }
                            return a = a ? a.then(o, o) : o()
                        }
                    })
                }

                function C(e, r, n) {
                    var o = d;
                    return function(i, a) {
                        if (o === v) throw new Error("Generator is already running");
                        if (o === y) {
                            if ("throw" === i) throw a;
                            return {
                                value: t,
                                done: !0
                            }
                        }
                        for (n.method = i, n.arg = a;;) {
                            var s = n.delegate;
                            if (s) {
                                var c = j(s, n);
                                if (c) {
                                    if (c === b) continue;
                                    return c
                                }
                            }
                            if ("next" === n.method) n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) {
                                if (o === d) throw o = y, n.arg;
                                n.dispatchException(n.arg)
                            } else "return" === n.method && n.abrupt("return", n.arg);
                            o = v;
                            var u = p(e, r, n);
                            if ("normal" === u.type) {
                                if (o = n.done ? y : m, u.arg === b) continue;
                                return {
                                    value: u.arg,
                                    done: n.done
                                }
                            }
                            "throw" === u.type && (o = y, n.method = "throw", n.arg = u.arg)
                        }
                    }
                }

                function j(e, r) {
                    var n = r.method,
                        o = e.iterator[n];
                    if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, j(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), b;
                    var i = p(o, e.iterator, r.arg);
                    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, b;
                    var a = i.arg;
                    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, b) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, b)
                }

                function B(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function k(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function T(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(B, this), this.reset(!0)
                }

                function L(e) {
                    if (e || "" === e) {
                        var r = e[c];
                        if (r) return r.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var o = -1,
                                a = function r() {
                                    for (; ++o < e.length;)
                                        if (n.call(e, o)) return r.value = e[o], r.done = !1, r;
                                    return r.value = t, r.done = !0, r
                                };
                            return a.next = a
                        }
                    }
                    throw new TypeError(i(e) + " is not iterable")
                }
                return w.prototype = S, o(P, "constructor", {
                    value: S,
                    configurable: !0
                }), o(S, "constructor", {
                    value: w,
                    configurable: !0
                }), w.displayName = f(S, l, "GeneratorFunction"), e.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === w || "GeneratorFunction" === (e.displayName || e.name))
                }, e.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, S) : (t.__proto__ = S, f(t, l, "GeneratorFunction")), t.prototype = Object.create(P), t
                }, e.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, x(E.prototype), f(E.prototype, u, (function() {
                    return this
                })), e.AsyncIterator = E, e.async = function(t, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new E(h(t, r, n, o), i);
                    return e.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, x(P), f(P, l, "Generator"), f(P, c, (function() {
                    return this
                })), f(P, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(t) {
                    var e = Object(t),
                        r = [];
                    for (var n in e) r.push(n);
                    return r.reverse(),
                        function t() {
                            for (; r.length;) {
                                var n = r.pop();
                                if (n in e) return t.value = n, t.done = !1, t
                            }
                            return t.done = !0, t
                        }
                }, e.values = L, T.prototype = {
                    constructor: T,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(k), !e)
                            for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t)
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        if (this.done) throw e;
                        var r = this;

                        function o(n, o) {
                            return s.type = "throw", s.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o
                        }
                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var a = this.tryEntries[i],
                                s = a.completion;
                            if ("root" === a.tryLoc) return o("end");
                            if (a.tryLoc <= this.prev) {
                                var c = n.call(a, "catchLoc"),
                                    u = n.call(a, "finallyLoc");
                                if (c && u) {
                                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                                } else if (c) {
                                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0)
                                } else {
                                    if (!u) throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r];
                            if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var i = o;
                                break
                            }
                        }
                        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                        var a = i ? i.completion : {};
                        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, b) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), b
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), k(r), b
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    k(r)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, r, n) {
                        return this.delegate = {
                            iterator: L(e),
                            resultName: r,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = t), b
                    }
                }, e
            }

            function s(t, e, r, n, o, i, a) {
                try {
                    var s = t[i](a),
                        c = s.value
                } catch (u) {
                    return void r(u)
                }
                s.done ? e(c) : Promise.resolve(c).then(n, o)
            }

            function c(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = t.apply(e, r);

                        function a(t) {
                            s(i, n, o, a, c, "next", t)
                        }

                        function c(t) {
                            s(i, n, o, a, c, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }

            function u(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function l(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? u(Object(r), !0).forEach((function(e) {
                        f(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : u(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function f(t, e, r) {
                return (e = function(t) {
                    var e = function(t, e) {
                        if ("object" !== i(t) || null === t) return t;
                        var r = t[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var n = r.call(t, e || "default");
                            if ("object" !== i(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(t, "string");
                    return "symbol" === i(e) ? e : String(e)
                }(e)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
            const h = {
                props: {
                    clickBackgroundToClose: {
                        type: Boolean,
                        default: !1
                    },
                    modalName: {
                        type: String,
                        default: void 0
                    }
                },
                data: function() {
                    return {
                        isFullScreenPopupOnMobi: !0
                    }
                },
                computed: l(l(l({}, (0, n.mapGetters)("common", ["pageAttributes", "isModalActive"])), (0, n.mapGetters)("application", ["isMobileView"])), {}, {
                    popupStyles: function() {
                        var t, e, r = this.pageAttributes,
                            n = r.availableFrameHeight,
                            i = r.scrollFromTop,
                            a = this.$refs.popup;
                        if (!a) return null;
                        var s = this.isFullScreenPopupOnMobi && this.isMobileView,
                            c = s ? n : null !== (t = null == a ? void 0 : a.offsetHeight) && void 0 !== t ? t : 0,
                            u = null !== (e = null == a ? void 0 : a.offsetWidth) && void 0 !== e ? e : 0,
                            l = o.bridge.isEmbedded() ? i + (n / 2 - c / 2) : 0,
                            f = window.innerWidth / 2 - u / 2;
                        return {
                            position: "fixed",
                            height: s ? "".concat(n, "px") : null,
                            top: "".concat(l, "px"),
                            left: "".concat(f, "px")
                        }
                    }
                }),
                beforeMount: function() {
                    var t = this;
                    return c(a().mark((function e() {
                        var r;
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = function e(r) {
                                        r !== t.modalName && r !== t.$options.name || (t.hidePopup(), t.$eventBus.$off("handle-close-popup", e))
                                    }, t.$eventBus.$on("handle-close-popup", r), t.$eventBus.$once("handle-close-all-popup", (function() {
                                        t.hidePopup()
                                    })), e.next = 5, (0, o.emitActivateScrollEvents)({
                                        activate: !0
                                    });
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))()
                },
                mounted: function() {
                    var t = this;
                    return c(a().mark((function e() {
                        var r;
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!o.bridge.isEmbedded()) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.next = 3, (0, o.emitGetPageAttributes)();
                                case 3:
                                    e.next = 7;
                                    break;
                                case 5:
                                    r = {
                                        availableFrameHeight: window.innerHeight,
                                        scrollFromTop: document.documentElement.scrollTop
                                    }, t.setPageAttributes(l(l({}, t.pageAttributes), r));
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))()
                },
                beforeDestroy: function() {
                    var t = this;
                    return c(a().mark((function e() {
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (t.$eventBus.$emit("close-popup", t.$options.name), t.isModalActive) {
                                        e.next = 4;
                                        break
                                    }
                                    return e.next = 4, (0, o.emitActivateScrollEvents)({
                                        activate: !1
                                    });
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))()
                },
                methods: l(l({}, (0, n.mapMutations)("common", ["setPageAttributes"])), {}, {
                    hidePopup: function() {
                        this.$emit("close"), this.$modal.hide(this.modalName)
                    },
                    hidePopupOnBackgroundClick: function() {
                        this.clickBackgroundToClose && this.hidePopup()
                    }
                })
            }
        },
        46631530: (t, e, r) => {
            "use strict";
            var n = r(67128710).charAt;
            t.exports = function(t, e, r) {
                return e + (r ? n(t, e).length : 1)
            }
        },
        68107556: (t, e, r) => {
            "use strict";
            var n = r(41747293);
            t.exports = n((function() {
                if ("function" == typeof ArrayBuffer) {
                    var t = new ArrayBuffer(8);
                    Object.isExtensible(t) && Object.defineProperty(t, "a", {
                        value: 8
                    })
                }
            }))
        },
        79318533: (t, e, r) => {
            "use strict";
            var n = r(26842092).forEach,
                o = r(26609341)("forEach");
            t.exports = o ? [].forEach : function(t) {
                return n(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        },
        58148457: (t, e, r) => {
            "use strict";
            var n = r(84249974),
                o = r(97246916),
                i = r(42747908),
                a = r(82653411),
                s = r(58297659),
                c = r(51404411),
                u = r(46426244),
                l = r(97586135),
                f = r(41118554),
                h = r(81871246),
                p = Array;
            t.exports = function(t) {
                var e = i(t),
                    r = c(this),
                    d = arguments.length,
                    m = d > 1 ? arguments[1] : void 0,
                    v = void 0 !== m;
                v && (m = n(m, d > 2 ? arguments[2] : void 0));
                var y, b, g, w, S, O, _ = h(e),
                    A = 0;
                if (!_ || this === p && s(_))
                    for (y = u(e), b = r ? new this(y) : p(y); y > A; A++) O = v ? m(e[A], A) : e[A], l(b, A, O);
                else
                    for (S = (w = f(e, _)).next, b = r ? new this : []; !(g = o(S, w)).done; A++) O = v ? a(w, m, [g.value, A], !0) : g.value, l(b, A, O);
                return b.length = A, b
            }
        },
        26842092: (t, e, r) => {
            "use strict";
            var n = r(84249974),
                o = r(36901702),
                i = r(75168361),
                a = r(42747908),
                s = r(46426244),
                c = r(83165417),
                u = o([].push),
                l = function(t) {
                    var e = 1 === t,
                        r = 2 === t,
                        o = 3 === t,
                        l = 4 === t,
                        f = 6 === t,
                        h = 7 === t,
                        p = 5 === t || f;
                    return function(d, m, v, y) {
                        for (var b, g, w = a(d), S = i(w), O = n(m, v), _ = s(S), A = 0, P = y || c, x = e ? P(d, _) : r || h ? P(d, 0) : void 0; _ > A; A++)
                            if ((p || A in S) && (g = O(b = S[A], A, w), t))
                                if (e) x[A] = g;
                                else if (g) switch (t) {
                            case 3:
                                return !0;
                            case 5:
                                return b;
                            case 6:
                                return A;
                            case 2:
                                u(x, b)
                        } else switch (t) {
                            case 4:
                                return !1;
                            case 7:
                                u(x, b)
                        }
                        return f ? -1 : o || l ? l : x
                    }
                };
            t.exports = {
                forEach: l(0),
                map: l(1),
                filter: l(2),
                some: l(3),
                every: l(4),
                find: l(5),
                findIndex: l(6),
                filterReject: l(7)
            }
        },
        52881194: (t, e, r) => {
            "use strict";
            var n = r(41747293),
                o = r(51605112),
                i = r(91507392),
                a = o("species");
            t.exports = function(t) {
                return i >= 51 || !n((function() {
                    var e = [];
                    return (e.constructor = {})[a] = function() {
                        return {
                            foo: 1
                        }
                    }, 1 !== e[t](Boolean).foo
                }))
            }
        },
        26609341: (t, e, r) => {
            "use strict";
            var n = r(41747293);
            t.exports = function(t, e) {
                var r = [][t];
                return !!r && n((function() {
                    r.call(null, e || function() {
                        return 1
                    }, 1)
                }))
            }
        },
        67753671: (t, e, r) => {
            "use strict";
            var n = r(32419662),
                o = r(42747908),
                i = r(75168361),
                a = r(46426244),
                s = TypeError,
                c = function(t) {
                    return function(e, r, c, u) {
                        n(r);
                        var l = o(e),
                            f = i(l),
                            h = a(l),
                            p = t ? h - 1 : 0,
                            d = t ? -1 : 1;
                        if (c < 2)
                            for (;;) {
                                if (p in f) {
                                    u = f[p], p += d;
                                    break
                                }
                                if (p += d, t ? p < 0 : h <= p) throw new s("Reduce of empty array with no initial value")
                            }
                        for (; t ? p >= 0 : h > p; p += d) p in f && (u = r(u, f[p], p, l));
                        return u
                    }
                };
            t.exports = {
                left: c(!1),
                right: c(!0)
            }
        },
        30283658: (t, e, r) => {
            "use strict";
            var n = r(86919781),
                o = r(11243157),
                i = TypeError,
                a = Object.getOwnPropertyDescriptor,
                s = n && ! function() {
                    if (void 0 !== this) return !0;
                    try {
                        Object.defineProperty([], "length", {
                            writable: !1
                        }).length = 1
                    } catch (t) {
                        return t instanceof TypeError
                    }
                }();
            t.exports = s ? function(t, e) {
                if (o(t) && !a(t, "length").writable) throw new i("Cannot set read only .length");
                return t.length = e
            } : function(t, e) {
                return t.length = e
            }
        },
        22941589: (t, e, r) => {
            "use strict";
            var n = r(56951400),
                o = r(46426244),
                i = r(97586135),
                a = Array,
                s = Math.max;
            t.exports = function(t, e, r) {
                for (var c = o(t), u = n(e, c), l = n(void 0 === r ? c : r, c), f = a(s(l - u, 0)), h = 0; u < l; u++, h++) i(f, h, t[u]);
                return f.length = h, f
            }
        },
        27994362: (t, e, r) => {
            "use strict";
            var n = r(22941589),
                o = Math.floor,
                i = function(t, e) {
                    var r = t.length,
                        c = o(r / 2);
                    return r < 8 ? a(t, e) : s(t, i(n(t, 0, c), e), i(n(t, c), e), e)
                },
                a = function(t, e) {
                    for (var r, n, o = t.length, i = 1; i < o;) {
                        for (n = i, r = t[i]; n && e(t[n - 1], r) > 0;) t[n] = t[--n];
                        n !== i++ && (t[n] = r)
                    }
                    return t
                },
                s = function(t, e, r, n) {
                    for (var o = e.length, i = r.length, a = 0, s = 0; a < o || s < i;) t[a + s] = a < o && s < i ? n(e[a], r[s]) <= 0 ? e[a++] : r[s++] : a < o ? e[a++] : r[s++];
                    return t
                };
            t.exports = i
        },
        24777475: (t, e, r) => {
            "use strict";
            var n = r(11243157),
                o = r(51404411),
                i = r(43970111),
                a = r(51605112)("species"),
                s = Array;
            t.exports = function(t) {
                var e;
                return n(t) && (e = t.constructor, (o(e) && (e === s || n(e.prototype)) || i(e) && null === (e = e[a])) && (e = void 0)), void 0 === e ? s : e
            }
        },
        83165417: (t, e, r) => {
            "use strict";
            var n = r(24777475);
            t.exports = function(t, e) {
                return new(n(t))(0 === e ? 0 : e)
            }
        },
        82653411: (t, e, r) => {
            "use strict";
            var n = r(14919670),
                o = r(37199212);
            t.exports = function(t, e, r, i) {
                try {
                    return i ? e(n(r)[0], r[1]) : e(r)
                } catch (a) {
                    o(t, "throw", a)
                }
            }
        },
        34495631: (t, e, r) => {
            "use strict";
            var n = r(19070030),
                o = r(55447045),
                i = r(92389190),
                a = r(84249974),
                s = r(37825787),
                c = r(63768554),
                u = r(30720408),
                l = r(60851656),
                f = r(60876178),
                h = r(38996340),
                p = r(86919781),
                d = r(77962423).fastKey,
                m = r(77929909),
                v = m.set,
                y = m.getterFor;
            t.exports = {
                getConstructor: function(t, e, r, l) {
                    var f = t((function(t, o) {
                            s(t, h), v(t, {
                                type: e,
                                index: n(null),
                                first: void 0,
                                last: void 0,
                                size: 0
                            }), p || (t.size = 0), c(o) || u(o, t[l], {
                                that: t,
                                AS_ENTRIES: r
                            })
                        })),
                        h = f.prototype,
                        m = y(e),
                        b = function(t, e, r) {
                            var n, o, i = m(t),
                                a = g(t, e);
                            return a ? a.value = r : (i.last = a = {
                                index: o = d(e, !0),
                                key: e,
                                value: r,
                                previous: n = i.last,
                                next: void 0,
                                removed: !1
                            }, i.first || (i.first = a), n && (n.next = a), p ? i.size++ : t.size++, "F" !== o && (i.index[o] = a)), t
                        },
                        g = function(t, e) {
                            var r, n = m(t),
                                o = d(e);
                            if ("F" !== o) return n.index[o];
                            for (r = n.first; r; r = r.next)
                                if (r.key === e) return r
                        };
                    return i(h, {
                        clear: function() {
                            for (var t = m(this), e = t.index, r = t.first; r;) r.removed = !0, r.previous && (r.previous = r.previous.next = void 0), delete e[r.index], r = r.next;
                            t.first = t.last = void 0, p ? t.size = 0 : this.size = 0
                        },
                        delete: function(t) {
                            var e = this,
                                r = m(e),
                                n = g(e, t);
                            if (n) {
                                var o = n.next,
                                    i = n.previous;
                                delete r.index[n.index], n.removed = !0, i && (i.next = o), o && (o.previous = i), r.first === n && (r.first = o), r.last === n && (r.last = i), p ? r.size-- : e.size--
                            }
                            return !!n
                        },
                        forEach: function(t) {
                            for (var e, r = m(this), n = a(t, arguments.length > 1 ? arguments[1] : void 0); e = e ? e.next : r.first;)
                                for (n(e.value, e.key, this); e && e.removed;) e = e.previous
                        },
                        has: function(t) {
                            return !!g(this, t)
                        }
                    }), i(h, r ? {
                        get: function(t) {
                            var e = g(this, t);
                            return e && e.value
                        },
                        set: function(t, e) {
                            return b(this, 0 === t ? 0 : t, e)
                        }
                    } : {
                        add: function(t) {
                            return b(this, t = 0 === t ? 0 : t, t)
                        }
                    }), p && o(h, "size", {
                        configurable: !0,
                        get: function() {
                            return m(this).size
                        }
                    }), f
                },
                setStrong: function(t, e, r) {
                    var n = e + " Iterator",
                        o = y(e),
                        i = y(n);
                    l(t, e, (function(t, e) {
                        v(this, {
                            type: n,
                            target: t,
                            state: o(t),
                            kind: e,
                            last: void 0
                        })
                    }), (function() {
                        for (var t = i(this), e = t.kind, r = t.last; r && r.removed;) r = r.previous;
                        return t.target && (t.last = r = r ? r.next : t.state.first) ? f("keys" === e ? r.key : "values" === e ? r.value : [r.key, r.value], !1) : (t.target = void 0, f(void 0, !0))
                    }), r ? "entries" : "values", !r, !0), h(e)
                }
            }
        },
        26277710: (t, e, r) => {
            "use strict";
            var n = r(92082109),
                o = r(53317854),
                i = r(36901702),
                a = r(14554705),
                s = r(37298052),
                c = r(77962423),
                u = r(30720408),
                l = r(37825787),
                f = r(7360614),
                h = r(63768554),
                p = r(43970111),
                d = r(41747293),
                m = r(74617072),
                v = r(45158003),
                y = r(7979587);
            t.exports = function(t, e, r) {
                var b = -1 !== t.indexOf("Map"),
                    g = -1 !== t.indexOf("Weak"),
                    w = b ? "set" : "add",
                    S = o[t],
                    O = S && S.prototype,
                    _ = S,
                    A = {},
                    P = function(t) {
                        var e = i(O[t]);
                        s(O, t, "add" === t ? function(t) {
                            return e(this, 0 === t ? 0 : t), this
                        } : "delete" === t ? function(t) {
                            return !(g && !p(t)) && e(this, 0 === t ? 0 : t)
                        } : "get" === t ? function(t) {
                            return g && !p(t) ? void 0 : e(this, 0 === t ? 0 : t)
                        } : "has" === t ? function(t) {
                            return !(g && !p(t)) && e(this, 0 === t ? 0 : t)
                        } : function(t, r) {
                            return e(this, 0 === t ? 0 : t, r), this
                        })
                    };
                if (a(t, !f(S) || !(g || O.forEach && !d((function() {
                        (new S).entries().next()
                    }))))) _ = r.getConstructor(e, t, b, w), c.enable();
                else if (a(t, !0)) {
                    var x = new _,
                        E = x[w](g ? {} : -0, 1) !== x,
                        C = d((function() {
                            x.has(1)
                        })),
                        j = m((function(t) {
                            new S(t)
                        })),
                        B = !g && d((function() {
                            for (var t = new S, e = 5; e--;) t[w](e, e);
                            return !t.has(-0)
                        }));
                    j || ((_ = e((function(t, e) {
                        l(t, O);
                        var r = y(new S, t, _);
                        return h(e) || u(e, r[w], {
                            that: r,
                            AS_ENTRIES: b
                        }), r
                    }))).prototype = O, O.constructor = _), (C || B) && (P("delete"), P("has"), b && P("get")), (B || E) && P(w), g && O.clear && delete O.clear
                }
                return A[t] = _, n({
                    global: !0,
                    constructor: !0,
                    forced: _ !== S
                }, A), v(_, t), g || r.setStrong(_, t, b), _
            }
        },
        68484964: (t, e, r) => {
            "use strict";
            var n = r(51605112)("match");
            t.exports = function(t) {
                var e = /./;
                try {
                    "/./" [t](e)
                } catch (r) {
                    try {
                        return e[n] = !1, "/./" [t](e)
                    } catch (o) {}
                }
                return !1
            }
        },
        97586135: (t, e, r) => {
            "use strict";
            var n = r(42734948),
                o = r(95403070),
                i = r(39679114);
            t.exports = function(t, e, r) {
                var a = n(e);
                a in t ? o.f(t, a, i(0, r)) : t[a] = r
            }
        },
        10338709: (t, e, r) => {
            "use strict";
            var n = r(14919670),
                o = r(92392140),
                i = TypeError;
            t.exports = function(t) {
                if (n(this), "string" === t || "default" === t) t = "string";
                else if ("number" !== t) throw new i("Incorrect hint");
                return o(this, t)
            }
        },
        92389190: (t, e, r) => {
            "use strict";
            var n = r(37298052);
            t.exports = function(t, e, r) {
                for (var o in e) n(t, o, e[o], r);
                return t
            }
        },
        79285117: (t, e, r) => {
            "use strict";
            var n = r(18266330),
                o = TypeError;
            t.exports = function(t, e) {
                if (!delete t[e]) throw new o("Cannot delete property " + n(e) + " of " + n(t))
            }
        },
        2507207: t => {
            "use strict";
            var e = TypeError;
            t.exports = function(t) {
                if (t > 9007199254740991) throw e("Maximum allowed index exceeded");
                return t
            }
        },
        7568886: (t, e, r) => {
            "use strict";
            var n = r(5188113).match(/firefox\/(\d+)/i);
            t.exports = !!n && +n[1]
        },
        86530256: (t, e, r) => {
            "use strict";
            var n = r(5188113);
            t.exports = /MSIE|Trident/.test(n)
        },
        40498008: (t, e, r) => {
            "use strict";
            var n = r(5188113).match(/AppleWebKit\/(\d+)\./);
            t.exports = !!n && +n[1]
        },
        67511060: (t, e, r) => {
            "use strict";
            var n = r(36901702),
                o = Error,
                i = n("".replace),
                a = String(new o("zxcasd").stack),
                s = /\n\s*at [^:]*:[^\n]*/,
                c = s.test(a);
            t.exports = function(t, e) {
                if (c && "string" == typeof t && !o.prepareStackTrace)
                    for (; e--;) t = i(t, s, "");
                return t
            }
        },
        43705392: (t, e, r) => {
            "use strict";
            var n = r(17168880),
                o = r(67511060),
                i = r(21722914),
                a = Error.captureStackTrace;
            t.exports = function(t, e, r, s) {
                i && (a ? a(t, e) : n(t, "stack", o(r, s)))
            }
        },
        21722914: (t, e, r) => {
            "use strict";
            var n = r(41747293),
                o = r(39679114);
            t.exports = !n((function() {
                var t = new Error("a");
                return !("stack" in t) || (Object.defineProperty(t, "stack", o(1, 7)), 7 !== t.stack)
            }))
        },
        66227007: (t, e, r) => {
            "use strict";
            r(26974916);
            var n = r(82121470),
                o = r(37298052),
                i = r(87722261),
                a = r(41747293),
                s = r(51605112),
                c = r(17168880),
                u = s("species"),
                l = RegExp.prototype;
            t.exports = function(t, e, r, f) {
                var h = s(t),
                    p = !a((function() {
                        var e = {};
                        return e[h] = function() {
                            return 7
                        }, 7 !== "" [t](e)
                    })),
                    d = p && !a((function() {
                        var e = !1,
                            r = /a/;
                        return "split" === t && ((r = {}).constructor = {}, r.constructor[u] = function() {
                            return r
                        }, r.flags = "", r[h] = /./ [h]), r.exec = function() {
                            return e = !0, null
                        }, r[h](""), !e
                    }));
                if (!p || !d || r) {
                    var m = n(/./ [h]),
                        v = e(h, "" [t], (function(t, e, r, o, a) {
                            var s = n(t),
                                c = e.exec;
                            return c === i || c === l.exec ? p && !a ? {
                                done: !0,
                                value: m(e, r, o)
                            } : {
                                done: !0,
                                value: s(r, e, o)
                            } : {
                                done: !1
                            }
                        }));
                    o(String.prototype, t, v[0]), o(l, h, v[1])
                }
                f && c(l[h], "sham", !0)
            }
        },
        57876677: (t, e, r) => {
            "use strict";
            var n = r(41747293);
            t.exports = !n((function() {
                return Object.isExtensible(Object.preventExtensions({}))
            }))
        },
        94427065: (t, e, r) => {
            "use strict";
            var n = r(36901702),
                o = r(32419662),
                i = r(43970111),
                a = r(52892597),
                s = r(46650206),
                c = r(72034374),
                u = Function,
                l = n([].concat),
                f = n([].join),
                h = {};
            t.exports = c ? u.bind : function(t) {
                var e = o(this),
                    r = e.prototype,
                    n = s(arguments, 1),
                    c = function() {
                        var r = l(n, s(arguments));
                        return this instanceof c ? function(t, e, r) {
                            if (!a(h, e)) {
                                for (var n = [], o = 0; o < e; o++) n[o] = "a[" + o + "]";
                                h[e] = u("C,a", "return new C(" + f(n, ",") + ")")
                            }
                            return h[e](t, r)
                        }(e, r.length, r) : e.apply(t, r)
                    };
                return i(r) && (c.prototype = r), c
            }
        },
        43688044: (t, e, r) => {
            "use strict";
            var n = r(36901702),
                o = r(11243157),
                i = r(7360614),
                a = r(52884326),
                s = r(53141340),
                c = n([].push);
            t.exports = function(t) {
                if (i(t)) return t;
                if (o(t)) {
                    for (var e = t.length, r = [], n = 0; n < e; n++) {
                        var u = t[n];
                        "string" == typeof u ? c(r, u) : "number" != typeof u && "Number" !== a(u) && "String" !== a(u) || c(r, s(u))
                    }
                    var l = r.length,
                        f = !0;
                    return function(t, e) {
                        if (f) return f = !1, e;
                        if (o(this)) return e;
                        for (var n = 0; n < l; n++)
                            if (r[n] === t) return e
                    }
                }
            }
        },
        45010647: (t, e, r) => {
            "use strict";
            var n = r(36901702),
                o = r(42747908),
                i = Math.floor,
                a = n("".charAt),
                s = n("".replace),
                c = n("".slice),
                u = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
                l = /\$([$&'`]|\d{1,2})/g;
            t.exports = function(t, e, r, n, f, h) {
                var p = r + t.length,
                    d = n.length,
                    m = l;
                return void 0 !== f && (f = o(f), m = u), s(h, m, (function(o, s) {
                    var u;
                    switch (a(s, 0)) {
                        case "$":
                            return "$";
                        case "&":
                            return t;
                        case "`":
                            return c(e, 0, r);
                        case "'":
                            return c(e, p);
                        case "<":
                            u = f[c(s, 1, -1)];
                            break;
                        default:
                            var l = +s;
                            if (0 === l) return o;
                            if (l > d) {
                                var h = i(l / 10);
                                return 0 === h ? o : h <= d ? void 0 === n[h - 1] ? a(s, 1) : n[h - 1] + a(s, 1) : o
                            }
                            u = n[l - 1]
                    }
                    return void 0 === u ? "" : u
                }))
            }
        },
        7979587: (t, e, r) => {
            "use strict";
            var n = r(7360614),
                o = r(43970111),
                i = r(727674);
            t.exports = function(t, e, r) {
                var a, s;
                return i && n(a = e.constructor) && a !== r && o(s = a.prototype) && s !== r.prototype && i(t, s), t
            }
        },
        64058340: (t, e, r) => {
            "use strict";
            var n = r(43970111),
                o = r(17168880);
            t.exports = function(t, e) {
                n(e) && "cause" in e && o(t, "cause", e.cause)
            }
        },
        77962423: (t, e, r) => {
            "use strict";
            var n = r(92082109),
                o = r(36901702),
                i = r(74703501),
                a = r(43970111),
                s = r(52892597),
                c = r(95403070).f,
                u = r(57308006),
                l = r(61501156),
                f = r(34852050),
                h = r(89269711),
                p = r(57876677),
                d = !1,
                m = h("meta"),
                v = 0,
                y = function(t) {
                    c(t, m, {
                        value: {
                            objectID: "O" + v++,
                            weakData: {}
                        }
                    })
                },
                b = t.exports = {
                    enable: function() {
                        b.enable = function() {}, d = !0;
                        var t = u.f,
                            e = o([].splice),
                            r = {};
                        r[m] = 1, t(r).length && (u.f = function(r) {
                            for (var n = t(r), o = 0, i = n.length; o < i; o++)
                                if (n[o] === m) {
                                    e(n, o, 1);
                                    break
                                }
                            return n
                        }, n({
                            target: "Object",
                            stat: !0,
                            forced: !0
                        }, {
                            getOwnPropertyNames: l.f
                        }))
                    },
                    fastKey: function(t, e) {
                        if (!a(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                        if (!s(t, m)) {
                            if (!f(t)) return "F";
                            if (!e) return "E";
                            y(t)
                        }
                        return t[m].objectID
                    },
                    getWeakData: function(t, e) {
                        if (!s(t, m)) {
                            if (!f(t)) return !0;
                            if (!e) return !1;
                            y(t)
                        }
                        return t[m].weakData
                    },
                    onFreeze: function(t) {
                        return p && d && f(t) && !s(t, m) && y(t), t
                    }
                };
            i[m] = !0
        },
        11243157: (t, e, r) => {
            "use strict";
            var n = r(52884326);
            t.exports = Array.isArray || function(t) {
                return "Array" === n(t)
            }
        },
        5247850: (t, e, r) => {
            "use strict";
            var n = r(43970111),
                o = r(52884326),
                i = r(51605112)("match");
            t.exports = function(t) {
                var e;
                return n(t) && (void 0 !== (e = t[i]) ? !!e : "RegExp" === o(t))
            }
        },
        4856277: (t, e, r) => {
            "use strict";
            var n = r(53141340);
            t.exports = function(t, e) {
                return void 0 === t ? arguments.length < 2 ? "" : e : n(t)
            }
        },
        61303929: (t, e, r) => {
            "use strict";
            var n = r(5247850),
                o = TypeError;
            t.exports = function(t) {
                if (n(t)) throw new o("The method doesn't accept regular expressions");
                return t
            }
        },
        63702814: (t, e, r) => {
            "use strict";
            var n = r(53317854),
                o = r(41747293),
                i = r(36901702),
                a = r(53141340),
                s = r(78453111).trim,
                c = r(30581361),
                u = i("".charAt),
                l = n.parseFloat,
                f = n.Symbol,
                h = f && f.iterator,
                p = 1 / l(c + "-0") != -1 / 0 || h && !o((function() {
                    l(Object(h))
                }));
            t.exports = p ? function(t) {
                var e = s(a(t)),
                    r = l(e);
                return 0 === r && "-" === u(e, 0) ? -0 : r
            } : l
        },
        37283009: (t, e, r) => {
            "use strict";
            var n = r(53317854),
                o = r(41747293),
                i = r(36901702),
                a = r(53141340),
                s = r(78453111).trim,
                c = r(30581361),
                u = n.parseInt,
                l = n.Symbol,
                f = l && l.iterator,
                h = /^[+-]?0x/i,
                p = i(h.exec),
                d = 8 !== u(c + "08") || 22 !== u(c + "0x16") || f && !o((function() {
                    u(Object(f))
                }));
            t.exports = d ? function(t, e) {
                var r = s(a(t));
                return u(r, e >>> 0 || (p(h, r) ? 16 : 10))
            } : u
        },
        89921574: (t, e, r) => {
            "use strict";
            var n = r(86919781),
                o = r(36901702),
                i = r(97246916),
                a = r(41747293),
                s = r(80181956),
                c = r(67525181),
                u = r(50755296),
                l = r(42747908),
                f = r(75168361),
                h = Object.assign,
                p = Object.defineProperty,
                d = o([].concat);
            t.exports = !h || a((function() {
                if (n && 1 !== h({
                        b: 1
                    }, h(p({}, "a", {
                        enumerable: !0,
                        get: function() {
                            p(this, "b", {
                                value: 3,
                                enumerable: !1
                            })
                        }
                    }), {
                        b: 2
                    })).b) return !0;
                var t = {},
                    e = {},
                    r = Symbol("assign detection"),
                    o = "abcdefghijklmnopqrst";
                return t[r] = 7, o.split("").forEach((function(t) {
                    e[t] = t
                })), 7 !== h({}, t)[r] || s(h({}, e)).join("") !== o
            })) ? function(t, e) {
                for (var r = l(t), o = arguments.length, a = 1, h = c.f, p = u.f; o > a;)
                    for (var m, v = f(arguments[a++]), y = h ? d(s(v), h(v)) : s(v), b = y.length, g = 0; b > g;) m = y[g++], n && !i(p, v, m) || (r[m] = v[m]);
                return r
            } : h
        },
        61501156: (t, e, r) => {
            "use strict";
            var n = r(52884326),
                o = r(96045656),
                i = r(57308006).f,
                a = r(22941589),
                s = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
            t.exports.f = function(t) {
                return s && "Window" === n(t) ? function(t) {
                    try {
                        return i(t)
                    } catch (e) {
                        return a(s)
                    }
                }(t) : i(o(t))
            }
        },
        34852050: (t, e, r) => {
            "use strict";
            var n = r(41747293),
                o = r(43970111),
                i = r(52884326),
                a = r(68107556),
                s = Object.isExtensible,
                c = n((function() {
                    s(1)
                }));
            t.exports = c || a ? function(t) {
                return !!o(t) && ((!a || "ArrayBuffer" !== i(t)) && (!s || s(t)))
            } : s
        },
        48344699: (t, e, r) => {
            "use strict";
            var n = r(86919781),
                o = r(41747293),
                i = r(36901702),
                a = r(11579518),
                s = r(80181956),
                c = r(96045656),
                u = i(r(50755296).f),
                l = i([].push),
                f = n && o((function() {
                    var t = Object.create(null);
                    return t[2] = 2, !u(t, 2)
                })),
                h = function(t) {
                    return function(e) {
                        for (var r, o = c(e), i = s(o), h = f && null === a(o), p = i.length, d = 0, m = []; p > d;) r = i[d++], n && !(h ? r in o : u(o, r)) || l(m, t ? [r, o[r]] : o[r]);
                        return m
                    }
                };
            t.exports = {
                entries: h(!0),
                values: h(!1)
            }
        },
        79140857: (t, e, r) => {
            "use strict";
            var n = r(53317854);
            t.exports = n
        },
        61402626: (t, e, r) => {
            "use strict";
            var n = r(95403070).f;
            t.exports = function(t, e, r) {
                r in t || n(t, r, {
                    configurable: !0,
                    get: function() {
                        return e[r]
                    },
                    set: function(t) {
                        e[r] = t
                    }
                })
            }
        },
        66597651: (t, e, r) => {
            "use strict";
            var n = r(97246916),
                o = r(14919670),
                i = r(7360614),
                a = r(52884326),
                s = r(87722261),
                c = TypeError;
            t.exports = function(t, e) {
                var r = t.exec;
                if (i(r)) {
                    var u = n(r, t, e);
                    return null !== u && o(u), u
                }
                if ("RegExp" === a(t)) return n(s, t, e);
                throw new c("RegExp#exec called on incompatible receiver")
            }
        },
        87722261: (t, e, r) => {
            "use strict";
            var n, o, i = r(97246916),
                a = r(36901702),
                s = r(53141340),
                c = r(38567066),
                u = r(16852999),
                l = r(74672309),
                f = r(19070030),
                h = r(77929909).get,
                p = r(77309441),
                d = r(2038173),
                m = l("native-string-replace", String.prototype.replace),
                v = RegExp.prototype.exec,
                y = v,
                b = a("".charAt),
                g = a("".indexOf),
                w = a("".replace),
                S = a("".slice),
                O = (o = /b*/g, i(v, n = /a/, "a"), i(v, o, "a"), 0 !== n.lastIndex || 0 !== o.lastIndex),
                _ = u.BROKEN_CARET,
                A = void 0 !== /()??/.exec("")[1];
            (O || A || _ || p || d) && (y = function(t) {
                var e, r, n, o, a, u, l, p = this,
                    d = h(p),
                    P = s(t),
                    x = d.raw;
                if (x) return x.lastIndex = p.lastIndex, e = i(y, x, P), p.lastIndex = x.lastIndex, e;
                var E = d.groups,
                    C = _ && p.sticky,
                    j = i(c, p),
                    B = p.source,
                    k = 0,
                    T = P;
                if (C && (j = w(j, "y", ""), -1 === g(j, "g") && (j += "g"), T = S(P, p.lastIndex), p.lastIndex > 0 && (!p.multiline || p.multiline && "\n" !== b(P, p.lastIndex - 1)) && (B = "(?: " + B + ")", T = " " + T, k++), r = new RegExp("^(?:" + B + ")", j)), A && (r = new RegExp("^" + B + "$(?!\\s)", j)), O && (n = p.lastIndex), o = i(v, C ? r : p, T), C ? o ? (o.input = S(o.input, k), o[0] = S(o[0], k), o.index = p.lastIndex, p.lastIndex += o[0].length) : p.lastIndex = 0 : O && o && (p.lastIndex = p.global ? o.index + o[0].length : n), A && o && o.length > 1 && i(m, o[0], r, (function() {
                        for (a = 1; a < arguments.length - 2; a++) void 0 === arguments[a] && (o[a] = void 0)
                    })), o && E)
                    for (o.groups = u = f(null), a = 0; a < E.length; a++) u[(l = E[a])[0]] = o[l[1]];
                return o
            }), t.exports = y
        },
        38567066: (t, e, r) => {
            "use strict";
            var n = r(14919670);
            t.exports = function() {
                var t = n(this),
                    e = "";
                return t.hasIndices && (e += "d"), t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.dotAll && (e += "s"), t.unicode && (e += "u"), t.unicodeSets && (e += "v"), t.sticky && (e += "y"), e
            }
        },
        534706: (t, e, r) => {
            "use strict";
            var n = r(97246916),
                o = r(52892597),
                i = r(79347976),
                a = r(38567066),
                s = RegExp.prototype;
            t.exports = function(t) {
                var e = t.flags;
                return void 0 !== e || "flags" in s || o(t, "flags") || !i(s, t) ? e : n(a, t)
            }
        },
        16852999: (t, e, r) => {
            "use strict";
            var n = r(41747293),
                o = r(53317854).RegExp,
                i = n((function() {
                    var t = o("a", "y");
                    return t.lastIndex = 2, null !== t.exec("abcd")
                })),
                a = i || n((function() {
                    return !o("a", "y").sticky
                })),
                s = i || n((function() {
                    var t = o("^r", "gy");
                    return t.lastIndex = 2, null !== t.exec("str")
                }));
            t.exports = {
                BROKEN_CARET: s,
                MISSED_STICKY: a,
                UNSUPPORTED_Y: i
            }
        },
        77309441: (t, e, r) => {
            "use strict";
            var n = r(41747293),
                o = r(53317854).RegExp;
            t.exports = n((function() {
                var t = o(".", "s");
                return !(t.dotAll && t.test("\n") && "s" === t.flags)
            }))
        },
        2038173: (t, e, r) => {
            "use strict";
            var n = r(41747293),
                o = r(53317854).RegExp;
            t.exports = n((function() {
                var t = o("(?<a>b)", "g");
                return "b" !== t.exec("b").groups.a || "bc" !== "b".replace(t, "$<a>c")
            }))
        },
        90281150: t => {
            "use strict";
            t.exports = Object.is || function(t, e) {
                return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e
            }
        },
        1233197: (t, e, r) => {
            "use strict";
            var n = r(36901702),
                o = 2147483647,
                i = /[^\0-\u007E]/,
                a = /[.\u3002\uFF0E\uFF61]/g,
                s = "Overflow: input needs wider integers to process",
                c = RangeError,
                u = n(a.exec),
                l = Math.floor,
                f = String.fromCharCode,
                h = n("".charCodeAt),
                p = n([].join),
                d = n([].push),
                m = n("".replace),
                v = n("".split),
                y = n("".toLowerCase),
                b = function(t) {
                    return t + 22 + 75 * (t < 26)
                },
                g = function(t, e, r) {
                    var n = 0;
                    for (t = r ? l(t / 700) : t >> 1, t += l(t / e); t > 455;) t = l(t / 35), n += 36;
                    return l(n + 36 * t / (t + 38))
                },
                w = function(t) {
                    var e = [];
                    t = function(t) {
                        for (var e = [], r = 0, n = t.length; r < n;) {
                            var o = h(t, r++);
                            if (o >= 55296 && o <= 56319 && r < n) {
                                var i = h(t, r++);
                                56320 == (64512 & i) ? d(e, ((1023 & o) << 10) + (1023 & i) + 65536) : (d(e, o), r--)
                            } else d(e, o)
                        }
                        return e
                    }(t);
                    var r, n, i = t.length,
                        a = 128,
                        u = 0,
                        m = 72;
                    for (r = 0; r < t.length; r++)(n = t[r]) < 128 && d(e, f(n));
                    var v = e.length,
                        y = v;
                    for (v && d(e, "-"); y < i;) {
                        var w = o;
                        for (r = 0; r < t.length; r++)(n = t[r]) >= a && n < w && (w = n);
                        var S = y + 1;
                        if (w - a > l((o - u) / S)) throw new c(s);
                        for (u += (w - a) * S, a = w, r = 0; r < t.length; r++) {
                            if ((n = t[r]) < a && ++u > o) throw new c(s);
                            if (n === a) {
                                for (var O = u, _ = 36;;) {
                                    var A = _ <= m ? 1 : _ >= m + 26 ? 26 : _ - m;
                                    if (O < A) break;
                                    var P = O - A,
                                        x = 36 - A;
                                    d(e, f(b(A + P % x))), O = l(P / x), _ += 36
                                }
                                d(e, f(b(O))), m = g(u, S, y === v), u = 0, y++
                            }
                        }
                        u++, a++
                    }
                    return p(e, "")
                };
            t.exports = function(t) {
                var e, r, n = [],
                    o = v(m(y(t), a, "."), ".");
                for (e = 0; e < o.length; e++) r = o[e], d(n, u(i, r) ? "xn--" + w(r) : r);
                return p(n, ".")
            }
        },
        60338415: (t, e, r) => {
            "use strict";
            var n = r(69019303),
                o = r(53141340),
                i = r(62784488),
                a = RangeError;
            t.exports = function(t) {
                var e = o(i(this)),
                    r = "",
                    s = n(t);
                if (s < 0 || s === 1 / 0) throw new a("Wrong number of repetitions");
                for (; s > 0;
                    (s >>>= 1) && (e += e)) 1 & s && (r += e);
                return r
            }
        },
        78453111: (t, e, r) => {
            "use strict";
            var n = r(36901702),
                o = r(62784488),
                i = r(53141340),
                a = r(30581361),
                s = n("".replace),
                c = RegExp("^[" + a + "]+"),
                u = RegExp("(^|[^" + a + "])[" + a + "]+$"),
                l = function(t) {
                    return function(e) {
                        var r = i(o(e));
                        return 1 & t && (r = s(r, c, "")), 2 & t && (r = s(r, u, "$1")), r
                    }
                };
            t.exports = {
                start: l(1),
                end: l(2),
                trim: l(3)
            }
        },
        59356532: (t, e, r) => {
            "use strict";
            var n = r(97246916),
                o = r(46435005),
                i = r(51605112),
                a = r(37298052);
            t.exports = function() {
                var t = o("Symbol"),
                    e = t && t.prototype,
                    r = e && e.valueOf,
                    s = i("toPrimitive");
                e && !e[s] && a(e, s, (function(t) {
                    return n(r, this)
                }), {
                    arity: 1
                })
            }
        },
        78502015: (t, e, r) => {
            "use strict";
            var n = r(99536293);
            t.exports = n && !!Symbol.for && !!Symbol.keyFor
        },
        81450863: (t, e, r) => {
            "use strict";
            var n = r(36901702);
            t.exports = n(1..valueOf)
        },
        41385143: (t, e, r) => {
            "use strict";
            var n = r(41747293),
                o = r(51605112),
                i = r(86919781),
                a = r(97831913),
                s = o("iterator");
            t.exports = !n((function() {
                var t = new URL("b?a=1&b=2&c=3", "http://a"),
                    e = t.searchParams,
                    r = new URLSearchParams("a=1&a=2&b=3"),
                    n = "";
                return t.pathname = "c%20d", e.forEach((function(t, r) {
                    e.delete("b"), n += r + t
                })), r.delete("a", 2), r.delete("b", void 0), a && (!t.toJSON || !r.has("a", 1) || r.has("a", 2) || !r.has("a", void 0) || r.has("b")) || !e.size && (a || !i) || !e.sort || "http://a/c%20d?a=1&c=3" !== t.href || "3" !== e.get("c") || "a=1" !== String(new URLSearchParams("?a=1")) || !e[s] || "a" !== new URL("https://a@b").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("http://тест").host || "#%D0%B1" !== new URL("http://a#б").hash || "a1c3" !== n || "x" !== new URL("http://x", void 0).host
            }))
        },
        20126800: (t, e, r) => {
            "use strict";
            var n = r(79140857),
                o = r(52892597),
                i = r(84506061),
                a = r(95403070).f;
            t.exports = function(t) {
                var e = n.Symbol || (n.Symbol = {});
                o(e, t) || a(e, t, {
                    value: i.f(t)
                })
            }
        },
        84506061: (t, e, r) => {
            "use strict";
            var n = r(51605112);
            e.f = n
        },
        30581361: t => {
            "use strict";
            t.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff"
        },
        88089191: (t, e, r) => {
            "use strict";
            var n = r(46435005),
                o = r(52892597),
                i = r(17168880),
                a = r(79347976),
                s = r(727674),
                c = r(26099920),
                u = r(61402626),
                l = r(7979587),
                f = r(4856277),
                h = r(64058340),
                p = r(43705392),
                d = r(86919781),
                m = r(97831913);
            t.exports = function(t, e, r, v) {
                var y = "stackTraceLimit",
                    b = v ? 2 : 1,
                    g = t.split("."),
                    w = g[g.length - 1],
                    S = n.apply(null, g);
                if (S) {
                    var O = S.prototype;
                    if (!m && o(O, "cause") && delete O.cause, !r) return S;
                    var _ = n("Error"),
                        A = e((function(t, e) {
                            var r = f(v ? e : t, void 0),
                                n = v ? new S(t) : new S;
                            return void 0 !== r && i(n, "message", r), p(n, A, n.stack, 2), this && a(O, this) && l(n, this, A), arguments.length > b && h(n, arguments[b]), n
                        }));
                    if (A.prototype = O, "Error" !== w ? s ? s(A, _) : c(A, _, {
                            name: !0
                        }) : d && y in S && (u(A, S, y), u(A, S, "prepareStackTrace")), c(A, S), !m) try {
                        O.name !== w && i(O, "name", w), O.constructor = A
                    } catch (P) {}
                    return A
                }
            }
        },
        46892222: (t, e, r) => {
            "use strict";
            var n = r(92082109),
                o = r(41747293),
                i = r(11243157),
                a = r(43970111),
                s = r(42747908),
                c = r(46426244),
                u = r(2507207),
                l = r(97586135),
                f = r(83165417),
                h = r(52881194),
                p = r(51605112),
                d = r(91507392),
                m = p("isConcatSpreadable"),
                v = d >= 51 || !o((function() {
                    var t = [];
                    return t[m] = !1, t.concat()[0] !== t
                })),
                y = function(t) {
                    if (!a(t)) return !1;
                    var e = t[m];
                    return void 0 !== e ? !!e : i(t)
                };
            n({
                target: "Array",
                proto: !0,
                arity: 1,
                forced: !v || !h("concat")
            }, {
                concat: function(t) {
                    var e, r, n, o, i, a = s(this),
                        h = f(a, 0),
                        p = 0;
                    for (e = -1, n = arguments.length; e < n; e++)
                        if (y(i = -1 === e ? a : arguments[e]))
                            for (o = c(i), u(p + o), r = 0; r < o; r++, p++) r in i && l(h, p, i[r]);
                        else u(p + 1), l(h, p++, i);
                    return h.length = p, h
                }
            })
        },
        88057327: (t, e, r) => {
            "use strict";
            var n = r(92082109),
                o = r(26842092).filter;
            n({
                target: "Array",
                proto: !0,
                forced: !r(52881194)("filter")
            }, {
                filter: function(t) {
                    return o(this, t, arguments.length > 1 ? arguments[1] : void 0)
                }
            })
        },
        64969826: (t, e, r) => {
            "use strict";
            var n = r(92082109),
                o = r(26842092).find,
                i = r(27951223),
                a = "find",
                s = !0;
            a in [] && Array(1)[a]((function() {
                s = !1
            })), n({
                target: "Array",
                proto: !0,
                forced: s
            }, {
                find: function(t) {
                    return o(this, t, arguments.length > 1 ? arguments[1] : void 0)
                }
            }), i(a)
        },
        91491038: (t, e, r) => {
            "use strict";
            var n = r(92082109),
                o = r(58148457);
            n({
                target: "Array",
                stat: !0,
                forced: !r(74617072)((function(t) {
                    Array.from(t)
                }))
            }, {
                from: o
            })
        },
        98226699: (t, e, r) => {
            "use strict";
            var n = r(92082109),
                o = r(95841318).includes,
                i = r(41747293),
                a = r(27951223);
            n({
                target: "Array",
                proto: !0,
                forced: i((function() {
                    return !Array(1).includes()
                }))
            }, {
                includes: function(t) {
                    return o(this, t, arguments.length > 1 ? arguments[1] : void 0)
                }
            }), a("includes")
        },
        51682772: (t, e, r) => {
            "use strict";
            var n = r(92082109),
                o = r(82121470),
                i = r(95841318).indexOf,
                a = r(26609341),
                s = o([].indexOf),
                c = !!s && 1 / s([1], 1, -0) < 0;
            n({
                target: "Array",
                proto: !0,
                forced: c || !a("indexOf")
            }, {
                indexOf: function(t) {
                    var e = arguments.length > 1 ? arguments[1] : void 0;
                    return c ? s(this, t, e) || 0 : i(this, t, e)
                }
            })
        },
        19821249: (t, e, r) => {
            "use strict";
            var n = r(92082109),
                o = r(26842092).map;
            n({
                target: "Array",
                proto: !0,
                forced: !r(52881194)("map")
            }, {
                map: function(t) {
                    return o(this, t, arguments.length > 1 ? arguments[1] : void 0)
                }
            })
        },
        6757658: (t, e, r) => {
            "use strict";
            var n = r(92082109),
                o = r(42747908),
                i = r(46426244),
                a = r(30283658),
                s = r(2507207);
            n({
                target: "Array",
                proto: !0,
                arity: 1,
                forced: r(41747293)((function() {
                    return 4294967297 !== [].push.call({
                        length: 4294967296
                    }, 1)
                })) || ! function() {
                    try {
                        Object.defineProperty([], "length", {
                            writable: !1
                        }).push()
                    } catch (t) {
                        return t instanceof TypeError
                    }
                }()
            }, {
                push: function(t) {
                    var e = o(this),
                        r = i(e),
                        n = arguments.length;
                    s(r + n);
                    for (var c = 0; c < n; c++) e[r] = arguments[c], r++;
                    return a(e, r), r
                }
            })
        },
        10185827: (t, e, r) => {
            "use strict";
            var n = r(92082109),
                o = r(67753671).left,
                i = r(26609341),
                a = r(91507392);
            n({
                target: "Array",
                proto: !0,
                forced: !r(65235268) && a > 79 && a < 83 || !i("reduce")
            }, {
                reduce: function(t) {
                    var e = arguments.length;
                    return o(this, t, e, e > 1 ? arguments[1] : void 0)
                }
            })
        },
        88365069: (t, e, r) => {
            "use strict";
            var n = r(92082109),
                o = r(36901702),
                i = r(11243157),
                a = o([].reverse),
                s = [1, 2];
            n({
                target: "Array",
                proto: !0,
                forced: String(s) === String(s.reverse())
            }, {
                reverse: function() {
                    return i(this) && (this.length = this.length), a(this)
                }
            })
        },
        94747042: (t, e, r) => {
            "use strict";
            var n = r(92082109),
                o = r(11243157),
                i = r(51404411),
                a = r(43970111),
                s = r(56951400),
                c = r(46426244),
                u = r(96045656),
                l = r(97586135),
                f = r(51605112),
                h = r(52881194),
                p = r(46650206),
                d = h("slice"),
                m = f("species"),
                v = Array,
                y = Math.max;
            n({
                target: "Array",
                proto: !0,
                forced: !d
            }, {
                slice: function(t, e) {
                    var r, n, f, h = u(this),
                        d = c(h),
                        b = s(t, d),
                        g = s(void 0 === e ? d : e, d);
                    if (o(h) && (r = h.constructor, (i(r) && (r === v || o(r.prototype)) || a(r) && null === (r = r[m])) && (r = void 0), r === v || void 0 === r)) return p(h, b, g);
                    for (n = new(void 0 === r ? v : r)(y(g - b, 0)), f = 0; b < g; b++, f++) b in h && l(n, f, h[b]);
                    return n.length = f, n
                }
            })
        },
        55702707: (t, e, r) => {
            "use strict";
            var n = r(92082109),
                o = r(36901702),
                i = r(32419662),
                a = r(42747908),
                s = r(46426244),
                c = r(79285117),
                u = r(53141340),
                l = r(41747293),
                f = r(27994362),
                h = r(26609341),
                p = r(7568886),
                d = r(86530256),
                m = r(91507392),
                v = r(40498008),
                y = [],
                b = o(y.sort),
                g = o(y.push),
                w = l((function() {
                    y.sort(void 0)
                })),
                S = l((function() {
                    y.sort(null)
                })),
                O = h("sort"),
                _ = !l((function() {
                    if (m) return m < 70;
                    if (!(p && p > 3)) {
                        if (d) return !0;
                        if (v) return v < 603;
                        var t, e, r, n, o = "";
                        for (t = 65; t < 76; t++) {
                            switch (e = String.fromCharCode(t), t) {
                                case 66:
                                case 69:
                                case 70:
                                case 72:
                                    r = 3;
                                    break;
                                case 68:
                                case 71:
                                    r = 4;
                                    break;
                                default:
                                    r = 2
                            }
                            for (n = 0; n < 47; n++) y.push({
                                k: e + n,
                                v: r
                            })
                        }
                        for (y.sort((function(t, e) {
                                return e.v - t.v
                            })), n = 0; n < y.length; n++) e = y[n].k.charAt(0), o.charAt(o.length - 1) !== e && (o += e);
                        return "DGBEFHACIJK" !== o
                    }
                }));
            n({
                target: "Array",
                proto: !0,
                forced: w || !S || !O || !_
            }, {
                sort: function(t) {
                    void 0 !== t && i(t);
                    var e = a(this);
                    if (_) return void 0 === t ? b(e) : b(e, t);
                    var r, n, o = [],
                        l = s(e);
                    for (n = 0; n < l; n++) n in e && g(o, e[n]);
                    for (f(o, function(t) {
                            return function(e, r) {
                                return void 0 === r ? -1 : void 0 === e ? 1 : void 0 !== t ? +t(e, r) || 0 : u(e) > u(r) ? 1 : -1
                            }
                        }(t)), r = s(o), n = 0; n < r;) e[n] = o[n++];
                    for (; n < l;) c(e, n++);
                    return e
                }
            })
        },
        55430541: (t, e, r) => {
            "use strict";
            var n = r(92082109),
                o = r(42747908),
                i = r(46426244),
                a = r(30283658),
                s = r(79285117),
                c = r(2507207);
            n({
                target: "Array",
                proto: !0,
                arity: 1,
                forced: 1 !== [].unshift(0) || ! function() {
                    try {
                        Object.defineProperty([], "length", {
                            writable: !1
                        }).unshift()
                    } catch (t) {
                        return t instanceof TypeError
                    }
                }()
            }, {
                unshift: function(t) {
                    var e = o(this),
                        r = i(e),
                        n = arguments.length;
                    if (n) {
                        c(r + n);
                        for (var u = r; u--;) {
                            var l = u + n;
                            u in e ? e[l] = e[u] : s(e, l)
                        }
                        for (var f = 0; f < n; f++) e[f] = arguments[f]
                    }
                    return a(e, r + n)
                }
            })
        },
        27396078: (t, e, r) => {
            "use strict";
            var n = r(52892597),
                o = r(37298052),
                i = r(10338709),
                a = r(51605112)("toPrimitive"),
                s = Date.prototype;
            n(s, a) || o(s, a, i)
        },
        5021703: (t, e, r) => {
            "use strict";
            var n = r(92082109),
                o = r(53317854),
                i = r(56522104),
                a = r(88089191),
                s = "WebAssembly",
                c = o[s],
                u = 7 !== new Error("e", {
                    cause: 7
                }).cause,
                l = function(t, e) {
                    var r = {};
                    r[t] = a(t, e, u), n({
                        global: !0,
                        constructor: !0,
                        arity: 1,
                        forced: u
                    }, r)
                },
                f = function(t, e) {
                    if (c && c[t]) {
                        var r = {};
                        r[t] = a(s + "." + t, e, u), n({
                            target: s,
                            stat: !0,
                            constructor: !0,
                            arity: 1,
                            forced: u
                        }, r)
                    }
                };
            l("Error", (function(t) {
                return function(e) {
                    return i(t, this, arguments)
                }
            })), l("EvalError", (function(t) {
                return function(e) {
                    return i(t, this, arguments)
                }
            })), l("RangeError", (function(t) {
                return function(e) {
                    return i(t, this, arguments)
                }
            })), l("ReferenceError", (function(t) {
                return function(e) {
                    return i(t, this, arguments)
                }
            })), l("SyntaxError", (function(t) {
                return function(e) {
                    return i(t, this, arguments)
                }
            })), l("TypeError", (function(t) {
                return function(e) {
                    return i(t, this, arguments)
                }
            })), l("URIError", (function(t) {
                return function(e) {
                    return i(t, this, arguments)
                }
            })), f("CompileError", (function(t) {
                return function(e) {
                    return i(t, this, arguments)
                }
            })), f("LinkError", (function(t) {
                return function(e) {
                    return i(t, this, arguments)
                }
            })), f("RuntimeError", (function(t) {
                return function(e) {
                    return i(t, this, arguments)
                }
            }))
        },
        31838862: (t, e, r) => {
            "use strict";
            var n = r(92082109),
                o = r(46435005),
                i = r(56522104),
                a = r(97246916),
                s = r(36901702),
                c = r(41747293),
                u = r(7360614),
                l = r(64952190),
                f = r(46650206),
                h = r(43688044),
                p = r(99536293),
                d = String,
                m = o("JSON", "stringify"),
                v = s(/./.exec),
                y = s("".charAt),
                b = s("".charCodeAt),
                g = s("".replace),
                w = s(1..toString),
                S = /[\uD800-\uDFFF]/g,
                O = /^[\uD800-\uDBFF]$/,
                _ = /^[\uDC00-\uDFFF]$/,
                A = !p || c((function() {
                    var t = o("Symbol")("stringify detection");
                    return "[null]" !== m([t]) || "{}" !== m({
                        a: t
                    }) || "{}" !== m(Object(t))
                })),
                P = c((function() {
                    return '"\\udf06\\ud834"' !== m("\udf06\ud834") || '"\\udead"' !== m("\udead")
                })),
                x = function(t, e) {
                    var r = f(arguments),
                        n = h(e);
                    if (u(n) || void 0 !== t && !l(t)) return r[1] = function(t, e) {
                        if (u(n) && (e = a(n, this, d(t), e)), !l(e)) return e
                    }, i(m, null, r)
                },
                E = function(t, e, r) {
                    var n = y(r, e - 1),
                        o = y(r, e + 1);
                    return v(O, t) && !v(_, o) || v(_, t) && !v(O, n) ? "\\u" + w(b(t, 0), 16) : t
                };
            m && n({
                target: "JSON",
                stat: !0,
                arity: 3,
                forced: A || P
            }, {
                stringify: function(t, e, r) {
                    var n = f(arguments),
                        o = i(A ? x : m, null, n);
                    return P && "string" == typeof o ? g(o, S, E) : o
                }
            })
        },
        94173706: (t, e, r) => {
            "use strict";
            var n = r(53317854);
            r(45158003)(n.JSON, "JSON", !0)
        },
        12669098: (t, e, r) => {
            "use strict";
            r(26277710)("Map", (function(t) {
                return function() {
                    return t(this, arguments.length ? arguments[0] : void 0)
                }
            }), r(34495631))
        },
        44651532: (t, e, r) => {
            "use strict";
            r(12669098)
        },
        7910408: (t, e, r) => {
            "use strict";
            r(45158003)(Math, "Math", !0)
        },
        2873689: (t, e, r) => {
            "use strict";
            r(92082109)({
                target: "Math",
                stat: !0
            }, {
                trunc: r(13074758)
            })
        },
        23209653: (t, e, r) => {
            "use strict";
            var n = r(92082109),
                o = r(97831913),
                i = r(86919781),
                a = r(53317854),
                s = r(79140857),
                c = r(36901702),
                u = r(14554705),
                l = r(52892597),
                f = r(7979587),
                h = r(79347976),
                p = r(64952190),
                d = r(77457593),
                m = r(41747293),
                v = r(57308006).f,
                y = r(41231236).f,
                b = r(95403070).f,
                g = r(81450863),
                w = r(78453111).trim,
                S = "Number",
                O = a[S],
                _ = s[S],
                A = O.prototype,
                P = a.TypeError,
                x = c("".slice),
                E = c("".charCodeAt),
                C = function(t) {
                    var e, r, n, o, i, a, s, c, u = d(t, "number");
                    if (p(u)) throw new P("Cannot convert a Symbol value to a number");
                    if ("string" == typeof u && u.length > 2)
                        if (u = w(u), 43 === (e = E(u, 0)) || 45 === e) {
                            if (88 === (r = E(u, 2)) || 120 === r) return NaN
                        } else if (48 === e) {
                        switch (E(u, 1)) {
                            case 66:
                            case 98:
                                n = 2, o = 49;
                                break;
                            case 79:
                            case 111:
                                n = 8, o = 55;
                                break;
                            default:
                                return +u
                        }
                        for (a = (i = x(u, 2)).length, s = 0; s < a; s++)
                            if ((c = E(i, s)) < 48 || c > o) return NaN;
                        return parseInt(i, n)
                    }
                    return +u
                },
                j = u(S, !O(" 0o1") || !O("0b1") || O("+0x1")),
                B = function(t) {
                    var e, r = arguments.length < 1 ? 0 : O(function(t) {
                        var e = d(t, "number");
                        return "bigint" == typeof e ? e : C(e)
                    }(t));
                    return h(A, e = this) && m((function() {
                        g(e)
                    })) ? f(Object(r), this, B) : r
                };
            B.prototype = A, j && !o && (A.constructor = B), n({
                global: !0,
                constructor: !0,
                wrap: !0,
                forced: j
            }, {
                Number: B
            });
            var k = function(t, e) {
                for (var r, n = i ? v(e) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","), o = 0; n.length > o; o++) l(e, r = n[o]) && !l(t, r) && b(t, r, y(e, r))
            };
            o && _ && k(s[S], _), (j || o) && k(s[S], O)
        },
        88833321: (t, e, r) => {
            "use strict";
            var n = r(92082109),
                o = r(86919781),
                i = r(26536048).f;
            n({
                target: "Object",
                stat: !0,
                forced: Object.defineProperties !== i,
                sham: !o
            }, {
                defineProperties: i
            })
        },
        88369070: (t, e, r) => {
            "use strict";
            var n = r(92082109),
                o = r(86919781),
                i = r(95403070).f;
            n({
                target: "Object",
                stat: !0,
                forced: Object.defineProperty !== i,
                sham: !o
            }, {
                defineProperty: i
            })
        },
        25569720: (t, e, r) => {
            "use strict";
            var n = r(92082109),
                o = r(48344699).entries;
            n({
                target: "Object",
                stat: !0
            }, {
                entries: function(t) {
                    return o(t)
                }
            })
        },
        59438880: (t, e, r) => {
            "use strict";
            var n = r(92082109),
                o = r(41747293),
                i = r(96045656),
                a = r(41231236).f,
                s = r(86919781);
            n({
                target: "Object",
                stat: !0,
                forced: !s || o((function() {
                    a(1)
                })),
                sham: !s
            }, {
                getOwnPropertyDescriptor: function(t, e) {
                    return a(i(t), e)
                }
            })
        },
        3749337: (t, e, r) => {
            "use strict";
            var n = r(92082109),
                o = r(86919781),
                i = r(64053887),
                a = r(96045656),
                s = r(41231236),
                c = r(97586135);
            n({
                target: "Object",
                stat: !0,
                sham: !o
            }, {
                getOwnPropertyDescriptors: function(t) {
                    for (var e, r, n = a(t), o = s.f, u = i(n), l = {}, f = 0; u.length > f;) void 0 !== (r = o(n, e = u[f++])) && c(l, e, r);
                    return l
                }
            })
        },
        77029660: (t, e, r) => {
            "use strict";
            var n = r(92082109),
                o = r(99536293),
                i = r(41747293),
                a = r(67525181),
                s = r(42747908);
            n({
                target: "Object",
                stat: !0,
                forced: !o || i((function() {
                    a.f(1)
                }))
            }, {
                getOwnPropertySymbols: function(t) {
                    var e = a.f;
                    return e ? e(s(t)) : []
                }
            })
        },
        10530489: (t, e, r) => {
            "use strict";
            var n = r(92082109),
                o = r(41747293),
                i = r(42747908),
                a = r(11579518),
                s = r(89849920);
            n({
                target: "Object",
                stat: !0,
                forced: o((function() {
                    a(1)
                })),
                sham: !s
            }, {
                getPrototypeOf: function(t) {
                    return a(i(t))
                }
            })
        },
        56447941: (t, e, r) => {
            "use strict";
            var n = r(92082109),
                o = r(42747908),
                i = r(80181956);
            n({
                target: "Object",
                stat: !0,
                forced: r(41747293)((function() {
                    i(1)
                }))
            }, {
                keys: function(t) {
                    return i(o(t))
                }
            })
        },
        57968304: (t, e, r) => {
            "use strict";
            r(92082109)({
                target: "Object",
                stat: !0
            }, {
                setPrototypeOf: r(727674)
            })
        },
        56426833: (t, e, r) => {
            "use strict";
            var n = r(92082109),
                o = r(48344699).values;
            n({
                target: "Object",
                stat: !0
            }, {
                values: function(t) {
                    return o(t)
                }
            })
        },
        46454678: (t, e, r) => {
            "use strict";
            var n = r(92082109),
                o = r(63702814);
            n({
                global: !0,
                forced: parseFloat !== o
            }, {
                parseFloat: o
            })
        },
        15891058: (t, e, r) => {
            "use strict";
            var n = r(92082109),
                o = r(37283009);
            n({
                global: !0,
                forced: parseInt !== o
            }, {
                parseInt: o
            })
        },
        33912419: (t, e, r) => {
            "use strict";
            var n = r(92082109),
                o = r(46435005),
                i = r(56522104),
                a = r(94427065),
                s = r(75239483),
                c = r(14919670),
                u = r(43970111),
                l = r(19070030),
                f = r(41747293),
                h = o("Reflect", "construct"),
                p = Object.prototype,
                d = [].push,
                m = f((function() {
                    function t() {}
                    return !(h((function() {}), [], t) instanceof t)
                })),
                v = !f((function() {
                    h((function() {}))
                })),
                y = m || v;
            n({
                target: "Reflect",
                stat: !0,
                forced: y,
                sham: y
            }, {
                construct: function(t, e) {
                    s(t), c(e);
                    var r = arguments.length < 3 ? t : s(arguments[2]);
                    if (v && !m) return h(t, e, r);
                    if (t === r) {
                        switch (e.length) {
                            case 0:
                                return new t;
                            case 1:
                                return new t(e[0]);
                            case 2:
                                return new t(e[0], e[1]);
                            case 3:
                                return new t(e[0], e[1], e[2]);
                            case 4:
                                return new t(e[0], e[1], e[2], e[3])
                        }
                        var n = [null];
                        return i(d, n, e), new(i(a, t, n))
                    }
                    var o = r.prototype,
                        f = l(u(o) ? o : p),
                        y = i(t, f, e);
                    return u(y) ? y : f
                }
            })
        },
        52481299: (t, e, r) => {
            "use strict";
            var n = r(92082109),
                o = r(53317854),
                i = r(45158003);
            n({
                global: !0
            }, {
                Reflect: {}
            }), i(o.Reflect, "Reflect", !0)
        },
        26974916: (t, e, r) => {
            "use strict";
            var n = r(92082109),
                o = r(87722261);
            n({
                target: "RegExp",
                proto: !0,
                forced: /./.exec !== o
            }, {
                exec: o
            })
        },
        13477601: (t, e, r) => {
            "use strict";
            r(26974916);
            var n, o, i = r(92082109),
                a = r(97246916),
                s = r(7360614),
                c = r(14919670),
                u = r(53141340),
                l = (n = !1, (o = /[ac]/).exec = function() {
                    return n = !0, /./.exec.apply(this, arguments)
                }, !0 === o.test("abc") && n),
                f = /./.test;
            i({
                target: "RegExp",
                proto: !0,
                forced: !l
            }, {
                test: function(t) {
                    var e = c(this),
                        r = u(t),
                        n = e.exec;
                    if (!s(n)) return a(f, e, r);
                    var o = a(n, e, r);
                    return null !== o && (c(o), !0)
                }
            })
        },
        21339714: (t, e, r) => {
            "use strict";
            var n = r(56676530).PROPER,
                o = r(37298052),
                i = r(14919670),
                a = r(53141340),
                s = r(41747293),
                c = r(534706),
                u = "toString",
                l = RegExp.prototype[u],
                f = s((function() {
                    return "/a/b" !== l.call({
                        source: "a",
                        flags: "b"
                    })
                })),
                h = n && l.name !== u;
            (f || h) && o(RegExp.prototype, u, (function() {
                var t = i(this);
                return "/" + a(t.source) + "/" + a(c(t))
            }), {
                unsafe: !0
            })
        },
        72132023: (t, e, r) => {
            "use strict";
            var n = r(92082109),
                o = r(36901702),
                i = r(61303929),
                a = r(62784488),
                s = r(53141340),
                c = r(68484964),
                u = o("".indexOf);
            n({
                target: "String",
                proto: !0,
                forced: !c("includes")
            }, {
                includes: function(t) {
                    return !!~u(s(a(this)), s(i(t)), arguments.length > 1 ? arguments[1] : void 0)
                }
            })
        },
        5804723: (t, e, r) => {
            "use strict";
            var n = r(97246916),
                o = r(66227007),
                i = r(14919670),
                a = r(63768554),
                s = r(85717466),
                c = r(53141340),
                u = r(62784488),
                l = r(97158173),
                f = r(46631530),
                h = r(66597651);
            o("match", (function(t, e, r) {
                return [function(e) {
                    var r = u(this),
                        o = a(e) ? void 0 : l(e, t);
                    return o ? n(o, e, r) : new RegExp(e)[t](c(r))
                }, function(t) {
                    var n = i(this),
                        o = c(t),
                        a = r(e, n, o);
                    if (a.done) return a.value;
                    if (!n.global) return h(n, o);
                    var u = n.unicode;
                    n.lastIndex = 0;
                    for (var l, p = [], d = 0; null !== (l = h(n, o));) {
                        var m = c(l[0]);
                        p[d] = m, "" === m && (n.lastIndex = f(o, s(n.lastIndex), u)), d++
                    }
                    return 0 === d ? null : p
                }]
            }))
        },
        88482481: (t, e, r) => {
            "use strict";
            r(92082109)({
                target: "String",
                proto: !0
            }, {
                repeat: r(60338415)
            })
        },
        54115306: (t, e, r) => {
            "use strict";
            var n = r(56522104),
                o = r(97246916),
                i = r(36901702),
                a = r(66227007),
                s = r(41747293),
                c = r(14919670),
                u = r(7360614),
                l = r(63768554),
                f = r(69019303),
                h = r(85717466),
                p = r(53141340),
                d = r(62784488),
                m = r(46631530),
                v = r(97158173),
                y = r(45010647),
                b = r(66597651),
                g = r(51605112)("replace"),
                w = Math.max,
                S = Math.min,
                O = i([].concat),
                _ = i([].push),
                A = i("".indexOf),
                P = i("".slice),
                x = "$0" === "a".replace(/./, "$0"),
                E = !!/./ [g] && "" === /./ [g]("a", "$0");
            a("replace", (function(t, e, r) {
                var i = E ? "$" : "$0";
                return [function(t, r) {
                    var n = d(this),
                        i = l(t) ? void 0 : v(t, g);
                    return i ? o(i, t, n, r) : o(e, p(n), t, r)
                }, function(t, o) {
                    var a = c(this),
                        s = p(t);
                    if ("string" == typeof o && -1 === A(o, i) && -1 === A(o, "$<")) {
                        var l = r(e, a, s, o);
                        if (l.done) return l.value
                    }
                    var d = u(o);
                    d || (o = p(o));
                    var v, g = a.global;
                    g && (v = a.unicode, a.lastIndex = 0);
                    for (var x, E = []; null !== (x = b(a, s)) && (_(E, x), g);) {
                        "" === p(x[0]) && (a.lastIndex = m(s, h(a.lastIndex), v))
                    }
                    for (var C, j = "", B = 0, k = 0; k < E.length; k++) {
                        for (var T, L = p((x = E[k])[0]), I = w(S(f(x.index), s.length), 0), G = [], R = 1; R < x.length; R++) _(G, void 0 === (C = x[R]) ? C : String(C));
                        var D = x.groups;
                        if (d) {
                            var N = O([L], G, I, s);
                            void 0 !== D && _(N, D), T = p(n(o, void 0, N))
                        } else T = y(L, s, I, G, D, o);
                        I >= B && (j += P(s, B, I) + T, B = I + L.length)
                    }
                    return j + P(s, B)
                }]
            }), !!s((function() {
                var t = /./;
                return t.exec = function() {
                    var t = [];
                    return t.groups = {
                        a: "7"
                    }, t
                }, "7" !== "".replace(t, "$<a>")
            })) || !x || E)
        },
        74864765: (t, e, r) => {
            "use strict";
            var n = r(97246916),
                o = r(66227007),
                i = r(14919670),
                a = r(63768554),
                s = r(62784488),
                c = r(90281150),
                u = r(53141340),
                l = r(97158173),
                f = r(66597651);
            o("search", (function(t, e, r) {
                return [function(e) {
                    var r = s(this),
                        o = a(e) ? void 0 : l(e, t);
                    return o ? n(o, e, r) : new RegExp(e)[t](u(r))
                }, function(t) {
                    var n = i(this),
                        o = u(t),
                        a = r(e, n, o);
                    if (a.done) return a.value;
                    var s = n.lastIndex;
                    c(s, 0) || (n.lastIndex = 0);
                    var l = f(n, o);
                    return c(n.lastIndex, s) || (n.lastIndex = s), null === l ? -1 : l.index
                }]
            }))
        },
        70472443: (t, e, r) => {
            "use strict";
            r(20126800)("asyncIterator")
        },
        33304032: (t, e, r) => {
            "use strict";
            var n = r(92082109),
                o = r(53317854),
                i = r(97246916),
                a = r(36901702),
                s = r(97831913),
                c = r(86919781),
                u = r(99536293),
                l = r(41747293),
                f = r(52892597),
                h = r(79347976),
                p = r(14919670),
                d = r(96045656),
                m = r(42734948),
                v = r(53141340),
                y = r(39679114),
                b = r(19070030),
                g = r(80181956),
                w = r(57308006),
                S = r(61501156),
                O = r(67525181),
                _ = r(41231236),
                A = r(95403070),
                P = r(26536048),
                x = r(50755296),
                E = r(37298052),
                C = r(55447045),
                j = r(74672309),
                B = r(34306200),
                k = r(74703501),
                T = r(89269711),
                L = r(51605112),
                I = r(84506061),
                G = r(20126800),
                R = r(59356532),
                D = r(45158003),
                N = r(77929909),
                F = r(26842092).forEach,
                M = B("hidden"),
                U = "Symbol",
                $ = "prototype",
                W = N.set,
                H = N.getterFor(U),
                q = Object[$],
                V = o.Symbol,
                z = V && V[$],
                K = o.RangeError,
                Y = o.TypeError,
                Z = o.QObject,
                X = _.f,
                J = A.f,
                Q = S.f,
                tt = x.f,
                et = a([].push),
                rt = j("symbols"),
                nt = j("op-symbols"),
                ot = j("wks"),
                it = !Z || !Z[$] || !Z[$].findChild,
                at = function(t, e, r) {
                    var n = X(q, e);
                    n && delete q[e], J(t, e, r), n && t !== q && J(q, e, n)
                },
                st = c && l((function() {
                    return 7 !== b(J({}, "a", {
                        get: function() {
                            return J(this, "a", {
                                value: 7
                            }).a
                        }
                    })).a
                })) ? at : J,
                ct = function(t, e) {
                    var r = rt[t] = b(z);
                    return W(r, {
                        type: U,
                        tag: t,
                        description: e
                    }), c || (r.description = e), r
                },
                ut = function(t, e, r) {
                    t === q && ut(nt, e, r), p(t);
                    var n = m(e);
                    return p(r), f(rt, n) ? (r.enumerable ? (f(t, M) && t[M][n] && (t[M][n] = !1), r = b(r, {
                        enumerable: y(0, !1)
                    })) : (f(t, M) || J(t, M, y(1, {})), t[M][n] = !0), st(t, n, r)) : J(t, n, r)
                },
                lt = function(t, e) {
                    p(t);
                    var r = d(e),
                        n = g(r).concat(dt(r));
                    return F(n, (function(e) {
                        c && !i(ft, r, e) || ut(t, e, r[e])
                    })), t
                },
                ft = function(t) {
                    var e = m(t),
                        r = i(tt, this, e);
                    return !(this === q && f(rt, e) && !f(nt, e)) && (!(r || !f(this, e) || !f(rt, e) || f(this, M) && this[M][e]) || r)
                },
                ht = function(t, e) {
                    var r = d(t),
                        n = m(e);
                    if (r !== q || !f(rt, n) || f(nt, n)) {
                        var o = X(r, n);
                        return !o || !f(rt, n) || f(r, M) && r[M][n] || (o.enumerable = !0), o
                    }
                },
                pt = function(t) {
                    var e = Q(d(t)),
                        r = [];
                    return F(e, (function(t) {
                        f(rt, t) || f(k, t) || et(r, t)
                    })), r
                },
                dt = function(t) {
                    var e = t === q,
                        r = Q(e ? nt : d(t)),
                        n = [];
                    return F(r, (function(t) {
                        !f(rt, t) || e && !f(q, t) || et(n, rt[t])
                    })), n
                };
            u || (E(z = (V = function() {
                if (h(z, this)) throw new Y("Symbol is not a constructor");
                var t = arguments.length && void 0 !== arguments[0] ? v(arguments[0]) : void 0,
                    e = T(t),
                    r = function(t) {
                        this === q && i(r, nt, t), f(this, M) && f(this[M], e) && (this[M][e] = !1);
                        var n = y(1, t);
                        try {
                            st(this, e, n)
                        } catch (o) {
                            if (!(o instanceof K)) throw o;
                            at(this, e, n)
                        }
                    };
                return c && it && st(q, e, {
                    configurable: !0,
                    set: r
                }), ct(e, t)
            })[$], "toString", (function() {
                return H(this).tag
            })), E(V, "withoutSetter", (function(t) {
                return ct(T(t), t)
            })), x.f = ft, A.f = ut, P.f = lt, _.f = ht, w.f = S.f = pt, O.f = dt, I.f = function(t) {
                return ct(L(t), t)
            }, c && (C(z, "description", {
                configurable: !0,
                get: function() {
                    return H(this).description
                }
            }), s || E(q, "propertyIsEnumerable", ft, {
                unsafe: !0
            }))), n({
                global: !0,
                constructor: !0,
                wrap: !0,
                forced: !u,
                sham: !u
            }, {
                Symbol: V
            }), F(g(ot), (function(t) {
                G(t)
            })), n({
                target: U,
                stat: !0,
                forced: !u
            }, {
                useSetter: function() {
                    it = !0
                },
                useSimple: function() {
                    it = !1
                }
            }), n({
                target: "Object",
                stat: !0,
                forced: !u,
                sham: !c
            }, {
                create: function(t, e) {
                    return void 0 === e ? b(t) : lt(b(t), e)
                },
                defineProperty: ut,
                defineProperties: lt,
                getOwnPropertyDescriptor: ht
            }), n({
                target: "Object",
                stat: !0,
                forced: !u
            }, {
                getOwnPropertyNames: pt
            }), R(), D(V, U), k[M] = !0
        },
        58141817: (t, e, r) => {
            "use strict";
            var n = r(92082109),
                o = r(86919781),
                i = r(53317854),
                a = r(36901702),
                s = r(52892597),
                c = r(7360614),
                u = r(79347976),
                l = r(53141340),
                f = r(55447045),
                h = r(26099920),
                p = i.Symbol,
                d = p && p.prototype;
            if (o && c(p) && (!("description" in d) || void 0 !== p().description)) {
                var m = {},
                    v = function() {
                        var t = arguments.length < 1 || void 0 === arguments[0] ? void 0 : l(arguments[0]),
                            e = u(d, this) ? new p(t) : void 0 === t ? p() : p(t);
                        return "" === t && (m[e] = !0), e
                    };
                h(v, p), v.prototype = d, d.constructor = v;
                var y = "Symbol(description detection)" === String(p("description detection")),
                    b = a(d.valueOf),
                    g = a(d.toString),
                    w = /^Symbol\((.*)\)[^)]+$/,
                    S = a("".replace),
                    O = a("".slice);
                f(d, "description", {
                    configurable: !0,
                    get: function() {
                        var t = b(this);
                        if (s(m, t)) return "";
                        var e = g(t),
                            r = y ? O(e, 7, -1) : S(e, w, "$1");
                        return "" === r ? void 0 : r
                    }
                }), n({
                    global: !0,
                    constructor: !0,
                    forced: !0
                }, {
                    Symbol: v
                })
            }
        },
        73040763: (t, e, r) => {
            "use strict";
            var n = r(92082109),
                o = r(46435005),
                i = r(52892597),
                a = r(53141340),
                s = r(74672309),
                c = r(78502015),
                u = s("string-to-symbol-registry"),
                l = s("symbol-to-string-registry");
            n({
                target: "Symbol",
                stat: !0,
                forced: !c
            }, {
                for: function(t) {
                    var e = a(t);
                    if (i(u, e)) return u[e];
                    var r = o("Symbol")(e);
                    return u[e] = r, l[r] = e, r
                }
            })
        },
        65932165: (t, e, r) => {
            "use strict";
            r(20126800)("iterator")
        },
        15382526: (t, e, r) => {
            "use strict";
            r(33304032), r(73040763), r(27926620), r(31838862), r(77029660)
        },
        27926620: (t, e, r) => {
            "use strict";
            var n = r(92082109),
                o = r(52892597),
                i = r(64952190),
                a = r(18266330),
                s = r(74672309),
                c = r(78502015),
                u = s("symbol-to-string-registry");
            n({
                target: "Symbol",
                stat: !0,
                forced: !c
            }, {
                keyFor: function(t) {
                    if (!i(t)) throw new TypeError(a(t) + " is not a symbol");
                    if (o(u, t)) return u[t]
                }
            })
        },
        76696649: (t, e, r) => {
            "use strict";
            var n = r(20126800),
                o = r(59356532);
            n("toPrimitive"), o()
        },
        93639341: (t, e, r) => {
            "use strict";
            var n = r(46435005),
                o = r(20126800),
                i = r(45158003);
            o("toStringTag"), i(n("Symbol"), "Symbol")
        },
        61454747: (t, e, r) => {
            "use strict";
            var n = r(53317854),
                o = r(78848324),
                i = r(12598509),
                a = r(79318533),
                s = r(17168880),
                c = function(t) {
                    if (t && t.forEach !== a) try {
                        s(t, "forEach", a)
                    } catch (e) {
                        t.forEach = a
                    }
                };
            for (var u in o) o[u] && c(n[u] && n[u].prototype);
            c(i)
        },
        2065556: (t, e, r) => {
            "use strict";
            r(72066992);
            var n = r(92082109),
                o = r(53317854),
                i = r(97246916),
                a = r(36901702),
                s = r(86919781),
                c = r(41385143),
                u = r(37298052),
                l = r(55447045),
                f = r(92389190),
                h = r(45158003),
                p = r(58763061),
                d = r(77929909),
                m = r(37825787),
                v = r(7360614),
                y = r(52892597),
                b = r(84249974),
                g = r(67870648),
                w = r(14919670),
                S = r(43970111),
                O = r(53141340),
                _ = r(19070030),
                A = r(39679114),
                P = r(41118554),
                x = r(81871246),
                E = r(83548053),
                C = r(51605112),
                j = r(27994362),
                B = C("iterator"),
                k = "URLSearchParams",
                T = k + "Iterator",
                L = d.set,
                I = d.getterFor(k),
                G = d.getterFor(T),
                R = Object.getOwnPropertyDescriptor,
                D = function(t) {
                    if (!s) return o[t];
                    var e = R(o, t);
                    return e && e.value
                },
                N = D("fetch"),
                F = D("Request"),
                M = D("Headers"),
                U = F && F.prototype,
                $ = M && M.prototype,
                W = o.RegExp,
                H = o.TypeError,
                q = o.decodeURIComponent,
                V = o.encodeURIComponent,
                z = a("".charAt),
                K = a([].join),
                Y = a([].push),
                Z = a("".replace),
                X = a([].shift),
                J = a([].splice),
                Q = a("".split),
                tt = a("".slice),
                et = /\+/g,
                rt = Array(4),
                nt = function(t) {
                    return rt[t - 1] || (rt[t - 1] = W("((?:%[\\da-f]{2}){" + t + "})", "gi"))
                },
                ot = function(t) {
                    try {
                        return q(t)
                    } catch (e) {
                        return t
                    }
                },
                it = function(t) {
                    var e = Z(t, et, " "),
                        r = 4;
                    try {
                        return q(e)
                    } catch (n) {
                        for (; r;) e = Z(e, nt(r--), ot);
                        return e
                    }
                },
                at = /[!'()~]|%20/g,
                st = {
                    "!": "%21",
                    "'": "%27",
                    "(": "%28",
                    ")": "%29",
                    "~": "%7E",
                    "%20": "+"
                },
                ct = function(t) {
                    return st[t]
                },
                ut = function(t) {
                    return Z(V(t), at, ct)
                },
                lt = p((function(t, e) {
                    L(this, {
                        type: T,
                        iterator: P(I(t).entries),
                        kind: e
                    })
                }), "Iterator", (function() {
                    var t = G(this),
                        e = t.kind,
                        r = t.iterator.next(),
                        n = r.value;
                    return r.done || (r.value = "keys" === e ? n.key : "values" === e ? n.value : [n.key, n.value]), r
                }), !0),
                ft = function(t) {
                    this.entries = [], this.url = null, void 0 !== t && (S(t) ? this.parseObject(t) : this.parseQuery("string" == typeof t ? "?" === z(t, 0) ? tt(t, 1) : t : O(t)))
                };
            ft.prototype = {
                type: k,
                bindURL: function(t) {
                    this.url = t, this.update()
                },
                parseObject: function(t) {
                    var e, r, n, o, a, s, c, u = x(t);
                    if (u)
                        for (r = (e = P(t, u)).next; !(n = i(r, e)).done;) {
                            if (a = (o = P(w(n.value))).next, (s = i(a, o)).done || (c = i(a, o)).done || !i(a, o).done) throw new H("Expected sequence with length 2");
                            Y(this.entries, {
                                key: O(s.value),
                                value: O(c.value)
                            })
                        } else
                            for (var l in t) y(t, l) && Y(this.entries, {
                                key: l,
                                value: O(t[l])
                            })
                },
                parseQuery: function(t) {
                    if (t)
                        for (var e, r, n = Q(t, "&"), o = 0; o < n.length;)(e = n[o++]).length && (r = Q(e, "="), Y(this.entries, {
                            key: it(X(r)),
                            value: it(K(r, "="))
                        }))
                },
                serialize: function() {
                    for (var t, e = this.entries, r = [], n = 0; n < e.length;) t = e[n++], Y(r, ut(t.key) + "=" + ut(t.value));
                    return K(r, "&")
                },
                update: function() {
                    this.entries.length = 0, this.parseQuery(this.url.query)
                },
                updateURL: function() {
                    this.url && this.url.update()
                }
            };
            var ht = function() {
                    m(this, pt);
                    var t = L(this, new ft(arguments.length > 0 ? arguments[0] : void 0));
                    s || (this.size = t.entries.length)
                },
                pt = ht.prototype;
            if (f(pt, {
                    append: function(t, e) {
                        var r = I(this);
                        E(arguments.length, 2), Y(r.entries, {
                            key: O(t),
                            value: O(e)
                        }), s || this.length++, r.updateURL()
                    },
                    delete: function(t) {
                        for (var e = I(this), r = E(arguments.length, 1), n = e.entries, o = O(t), i = r < 2 ? void 0 : arguments[1], a = void 0 === i ? i : O(i), c = 0; c < n.length;) {
                            var u = n[c];
                            if (u.key !== o || void 0 !== a && u.value !== a) c++;
                            else if (J(n, c, 1), void 0 !== a) break
                        }
                        s || (this.size = n.length), e.updateURL()
                    },
                    get: function(t) {
                        var e = I(this).entries;
                        E(arguments.length, 1);
                        for (var r = O(t), n = 0; n < e.length; n++)
                            if (e[n].key === r) return e[n].value;
                        return null
                    },
                    getAll: function(t) {
                        var e = I(this).entries;
                        E(arguments.length, 1);
                        for (var r = O(t), n = [], o = 0; o < e.length; o++) e[o].key === r && Y(n, e[o].value);
                        return n
                    },
                    has: function(t) {
                        for (var e = I(this).entries, r = E(arguments.length, 1), n = O(t), o = r < 2 ? void 0 : arguments[1], i = void 0 === o ? o : O(o), a = 0; a < e.length;) {
                            var s = e[a++];
                            if (s.key === n && (void 0 === i || s.value === i)) return !0
                        }
                        return !1
                    },
                    set: function(t, e) {
                        var r = I(this);
                        E(arguments.length, 1);
                        for (var n, o = r.entries, i = !1, a = O(t), c = O(e), u = 0; u < o.length; u++)(n = o[u]).key === a && (i ? J(o, u--, 1) : (i = !0, n.value = c));
                        i || Y(o, {
                            key: a,
                            value: c
                        }), s || (this.size = o.length), r.updateURL()
                    },
                    sort: function() {
                        var t = I(this);
                        j(t.entries, (function(t, e) {
                            return t.key > e.key ? 1 : -1
                        })), t.updateURL()
                    },
                    forEach: function(t) {
                        for (var e, r = I(this).entries, n = b(t, arguments.length > 1 ? arguments[1] : void 0), o = 0; o < r.length;) n((e = r[o++]).value, e.key, this)
                    },
                    keys: function() {
                        return new lt(this, "keys")
                    },
                    values: function() {
                        return new lt(this, "values")
                    },
                    entries: function() {
                        return new lt(this, "entries")
                    }
                }, {
                    enumerable: !0
                }), u(pt, B, pt.entries, {
                    name: "entries"
                }), u(pt, "toString", (function() {
                    return I(this).serialize()
                }), {
                    enumerable: !0
                }), s && l(pt, "size", {
                    get: function() {
                        return I(this).entries.length
                    },
                    configurable: !0,
                    enumerable: !0
                }), h(ht, k), n({
                    global: !0,
                    constructor: !0,
                    forced: !c
                }, {
                    URLSearchParams: ht
                }), !c && v(M)) {
                var dt = a($.has),
                    mt = a($.set),
                    vt = function(t) {
                        if (S(t)) {
                            var e, r = t.body;
                            if (g(r) === k) return e = t.headers ? new M(t.headers) : new M, dt(e, "content-type") || mt(e, "content-type", "application/x-www-form-urlencoded;charset=UTF-8"), _(t, {
                                body: A(0, O(r)),
                                headers: A(0, e)
                            })
                        }
                        return t
                    };
                if (v(N) && n({
                        global: !0,
                        enumerable: !0,
                        dontCallGetSet: !0,
                        forced: !0
                    }, {
                        fetch: function(t) {
                            return N(t, arguments.length > 1 ? vt(arguments[1]) : {})
                        }
                    }), v(F)) {
                    var yt = function(t) {
                        return m(this, U), new F(t, arguments.length > 1 ? vt(arguments[1]) : {})
                    };
                    U.constructor = yt, yt.prototype = U, n({
                        global: !0,
                        constructor: !0,
                        dontCallGetSet: !0,
                        forced: !0
                    }, {
                        Request: yt
                    })
                }
            }
            t.exports = {
                URLSearchParams: ht,
                getState: I
            }
        },
        24646229: (t, e, r) => {
            "use strict";
            var n = r(37298052),
                o = r(36901702),
                i = r(53141340),
                a = r(83548053),
                s = URLSearchParams,
                c = s.prototype,
                u = o(c.append),
                l = o(c.delete),
                f = o(c.forEach),
                h = o([].push),
                p = new s("a=1&a=2&b=3");
            p.delete("a", 1), p.delete("b", void 0), p + "" != "a=2" && n(c, "delete", (function(t) {
                var e = arguments.length,
                    r = e < 2 ? void 0 : arguments[1];
                if (e && void 0 === r) return l(this, t);
                var n = [];
                f(this, (function(t, e) {
                    h(n, {
                        key: e,
                        value: t
                    })
                })), a(e, 1);
                for (var o, s = i(t), c = i(r), p = 0, d = 0, m = !1, v = n.length; p < v;) o = n[p++], m || o.key === s ? (m = !0, l(this, o.key)) : d++;
                for (; d < v;)(o = n[d++]).key === s && o.value === c || u(this, o.key, o.value)
            }), {
                enumerable: !0,
                unsafe: !0
            })
        },
        70017330: (t, e, r) => {
            "use strict";
            var n = r(37298052),
                o = r(36901702),
                i = r(53141340),
                a = r(83548053),
                s = URLSearchParams,
                c = s.prototype,
                u = o(c.getAll),
                l = o(c.has),
                f = new s("a=1");
            !f.has("a", 2) && f.has("a", void 0) || n(c, "has", (function(t) {
                var e = arguments.length,
                    r = e < 2 ? void 0 : arguments[1];
                if (e && void 0 === r) return l(this, t);
                var n = u(this, t);
                a(e, 1);
                for (var o = i(r), s = 0; s < n.length;)
                    if (n[s++] === o) return !0;
                return !1
            }), {
                enumerable: !0,
                unsafe: !0
            })
        },
        77241637: (t, e, r) => {
            "use strict";
            r(2065556)
        },
        38362062: (t, e, r) => {
            "use strict";
            var n = r(86919781),
                o = r(36901702),
                i = r(55447045),
                a = URLSearchParams.prototype,
                s = o(a.forEach);
            n && !("size" in a) && i(a, "size", {
                get: function() {
                    var t = 0;
                    return s(this, (function() {
                        t++
                    })), t
                },
                configurable: !0,
                enumerable: !0
            })
        },
        97368789: (t, e, r) => {
            "use strict";
            r(7978783);
            var n, o = r(92082109),
                i = r(86919781),
                a = r(41385143),
                s = r(53317854),
                c = r(84249974),
                u = r(36901702),
                l = r(37298052),
                f = r(55447045),
                h = r(37825787),
                p = r(52892597),
                d = r(89921574),
                m = r(58148457),
                v = r(22941589),
                y = r(67128710).codeAt,
                b = r(1233197),
                g = r(53141340),
                w = r(45158003),
                S = r(83548053),
                O = r(2065556),
                _ = r(77929909),
                A = _.set,
                P = _.getterFor("URL"),
                x = O.URLSearchParams,
                E = O.getState,
                C = s.URL,
                j = s.TypeError,
                B = s.parseInt,
                k = Math.floor,
                T = Math.pow,
                L = u("".charAt),
                I = u(/./.exec),
                G = u([].join),
                R = u(1..toString),
                D = u([].pop),
                N = u([].push),
                F = u("".replace),
                M = u([].shift),
                U = u("".split),
                $ = u("".slice),
                W = u("".toLowerCase),
                H = u([].unshift),
                q = "Invalid scheme",
                V = "Invalid host",
                z = "Invalid port",
                K = /[a-z]/i,
                Y = /[\d+-.a-z]/i,
                Z = /\d/,
                X = /^0x/i,
                J = /^[0-7]+$/,
                Q = /^\d+$/,
                tt = /^[\da-f]+$/i,
                et = /[\0\t\n\r #%/:<>?@[\\\]^|]/,
                rt = /[\0\t\n\r #/:<>?@[\\\]^|]/,
                nt = /^[\u0000-\u0020]+/,
                ot = /(^|[^\u0000-\u0020])[\u0000-\u0020]+$/,
                it = /[\t\n\r]/g,
                at = function(t) {
                    var e, r, n, o;
                    if ("number" == typeof t) {
                        for (e = [], r = 0; r < 4; r++) H(e, t % 256), t = k(t / 256);
                        return G(e, ".")
                    }
                    if ("object" == typeof t) {
                        for (e = "", n = function(t) {
                                for (var e = null, r = 1, n = null, o = 0, i = 0; i < 8; i++) 0 !== t[i] ? (o > r && (e = n, r = o), n = null, o = 0) : (null === n && (n = i), ++o);
                                return o > r && (e = n, r = o), e
                            }(t), r = 0; r < 8; r++) o && 0 === t[r] || (o && (o = !1), n === r ? (e += r ? ":" : "::", o = !0) : (e += R(t[r], 16), r < 7 && (e += ":")));
                        return "[" + e + "]"
                    }
                    return t
                },
                st = {},
                ct = d({}, st, {
                    " ": 1,
                    '"': 1,
                    "<": 1,
                    ">": 1,
                    "`": 1
                }),
                ut = d({}, ct, {
                    "#": 1,
                    "?": 1,
                    "{": 1,
                    "}": 1
                }),
                lt = d({}, ut, {
                    "/": 1,
                    ":": 1,
                    ";": 1,
                    "=": 1,
                    "@": 1,
                    "[": 1,
                    "\\": 1,
                    "]": 1,
                    "^": 1,
                    "|": 1
                }),
                ft = function(t, e) {
                    var r = y(t, 0);
                    return r > 32 && r < 127 && !p(e, t) ? t : encodeURIComponent(t)
                },
                ht = {
                    ftp: 21,
                    file: null,
                    http: 80,
                    https: 443,
                    ws: 80,
                    wss: 443
                },
                pt = function(t, e) {
                    var r;
                    return 2 === t.length && I(K, L(t, 0)) && (":" === (r = L(t, 1)) || !e && "|" === r)
                },
                dt = function(t) {
                    var e;
                    return t.length > 1 && pt($(t, 0, 2)) && (2 === t.length || "/" === (e = L(t, 2)) || "\\" === e || "?" === e || "#" === e)
                },
                mt = function(t) {
                    return "." === t || "%2e" === W(t)
                },
                vt = {},
                yt = {},
                bt = {},
                gt = {},
                wt = {},
                St = {},
                Ot = {},
                _t = {},
                At = {},
                Pt = {},
                xt = {},
                Et = {},
                Ct = {},
                jt = {},
                Bt = {},
                kt = {},
                Tt = {},
                Lt = {},
                It = {},
                Gt = {},
                Rt = {},
                Dt = function(t, e, r) {
                    var n, o, i, a = g(t);
                    if (e) {
                        if (o = this.parse(a)) throw new j(o);
                        this.searchParams = null
                    } else {
                        if (void 0 !== r && (n = new Dt(r, !0)), o = this.parse(a, null, n)) throw new j(o);
                        (i = E(new x)).bindURL(this), this.searchParams = i
                    }
                };
            Dt.prototype = {
                type: "URL",
                parse: function(t, e, r) {
                    var o, i, a, s, c, u = this,
                        l = e || vt,
                        f = 0,
                        h = "",
                        d = !1,
                        y = !1,
                        b = !1;
                    for (t = g(t), e || (u.scheme = "", u.username = "", u.password = "", u.host = null, u.port = null, u.path = [], u.query = null, u.fragment = null, u.cannotBeABaseURL = !1, t = F(t, nt, ""), t = F(t, ot, "$1")), t = F(t, it, ""), o = m(t); f <= o.length;) {
                        switch (i = o[f], l) {
                            case vt:
                                if (!i || !I(K, i)) {
                                    if (e) return q;
                                    l = bt;
                                    continue
                                }
                                h += W(i), l = yt;
                                break;
                            case yt:
                                if (i && (I(Y, i) || "+" === i || "-" === i || "." === i)) h += W(i);
                                else {
                                    if (":" !== i) {
                                        if (e) return q;
                                        h = "", l = bt, f = 0;
                                        continue
                                    }
                                    if (e && (u.isSpecial() !== p(ht, h) || "file" === h && (u.includesCredentials() || null !== u.port) || "file" === u.scheme && !u.host)) return;
                                    if (u.scheme = h, e) return void(u.isSpecial() && ht[u.scheme] === u.port && (u.port = null));
                                    h = "", "file" === u.scheme ? l = jt : u.isSpecial() && r && r.scheme === u.scheme ? l = gt : u.isSpecial() ? l = _t : "/" === o[f + 1] ? (l = wt, f++) : (u.cannotBeABaseURL = !0, N(u.path, ""), l = It)
                                }
                                break;
                            case bt:
                                if (!r || r.cannotBeABaseURL && "#" !== i) return q;
                                if (r.cannotBeABaseURL && "#" === i) {
                                    u.scheme = r.scheme, u.path = v(r.path), u.query = r.query, u.fragment = "", u.cannotBeABaseURL = !0, l = Rt;
                                    break
                                }
                                l = "file" === r.scheme ? jt : St;
                                continue;
                            case gt:
                                if ("/" !== i || "/" !== o[f + 1]) {
                                    l = St;
                                    continue
                                }
                                l = At, f++;
                                break;
                            case wt:
                                if ("/" === i) {
                                    l = Pt;
                                    break
                                }
                                l = Lt;
                                continue;
                            case St:
                                if (u.scheme = r.scheme, i === n) u.username = r.username, u.password = r.password, u.host = r.host, u.port = r.port, u.path = v(r.path), u.query = r.query;
                                else if ("/" === i || "\\" === i && u.isSpecial()) l = Ot;
                                else if ("?" === i) u.username = r.username, u.password = r.password, u.host = r.host, u.port = r.port, u.path = v(r.path), u.query = "", l = Gt;
                                else {
                                    if ("#" !== i) {
                                        u.username = r.username, u.password = r.password, u.host = r.host, u.port = r.port, u.path = v(r.path), u.path.length--, l = Lt;
                                        continue
                                    }
                                    u.username = r.username, u.password = r.password, u.host = r.host, u.port = r.port, u.path = v(r.path), u.query = r.query, u.fragment = "", l = Rt
                                }
                                break;
                            case Ot:
                                if (!u.isSpecial() || "/" !== i && "\\" !== i) {
                                    if ("/" !== i) {
                                        u.username = r.username, u.password = r.password, u.host = r.host, u.port = r.port, l = Lt;
                                        continue
                                    }
                                    l = Pt
                                } else l = At;
                                break;
                            case _t:
                                if (l = At, "/" !== i || "/" !== L(h, f + 1)) continue;
                                f++;
                                break;
                            case At:
                                if ("/" !== i && "\\" !== i) {
                                    l = Pt;
                                    continue
                                }
                                break;
                            case Pt:
                                if ("@" === i) {
                                    d && (h = "%40" + h), d = !0, a = m(h);
                                    for (var w = 0; w < a.length; w++) {
                                        var S = a[w];
                                        if (":" !== S || b) {
                                            var O = ft(S, lt);
                                            b ? u.password += O : u.username += O
                                        } else b = !0
                                    }
                                    h = ""
                                } else if (i === n || "/" === i || "?" === i || "#" === i || "\\" === i && u.isSpecial()) {
                                    if (d && "" === h) return "Invalid authority";
                                    f -= m(h).length + 1, h = "", l = xt
                                } else h += i;
                                break;
                            case xt:
                            case Et:
                                if (e && "file" === u.scheme) {
                                    l = kt;
                                    continue
                                }
                                if (":" !== i || y) {
                                    if (i === n || "/" === i || "?" === i || "#" === i || "\\" === i && u.isSpecial()) {
                                        if (u.isSpecial() && "" === h) return V;
                                        if (e && "" === h && (u.includesCredentials() || null !== u.port)) return;
                                        if (s = u.parseHost(h)) return s;
                                        if (h = "", l = Tt, e) return;
                                        continue
                                    }
                                    "[" === i ? y = !0 : "]" === i && (y = !1), h += i
                                } else {
                                    if ("" === h) return V;
                                    if (s = u.parseHost(h)) return s;
                                    if (h = "", l = Ct, e === Et) return
                                }
                                break;
                            case Ct:
                                if (!I(Z, i)) {
                                    if (i === n || "/" === i || "?" === i || "#" === i || "\\" === i && u.isSpecial() || e) {
                                        if ("" !== h) {
                                            var _ = B(h, 10);
                                            if (_ > 65535) return z;
                                            u.port = u.isSpecial() && _ === ht[u.scheme] ? null : _, h = ""
                                        }
                                        if (e) return;
                                        l = Tt;
                                        continue
                                    }
                                    return z
                                }
                                h += i;
                                break;
                            case jt:
                                if (u.scheme = "file", "/" === i || "\\" === i) l = Bt;
                                else {
                                    if (!r || "file" !== r.scheme) {
                                        l = Lt;
                                        continue
                                    }
                                    switch (i) {
                                        case n:
                                            u.host = r.host, u.path = v(r.path), u.query = r.query;
                                            break;
                                        case "?":
                                            u.host = r.host, u.path = v(r.path), u.query = "", l = Gt;
                                            break;
                                        case "#":
                                            u.host = r.host, u.path = v(r.path), u.query = r.query, u.fragment = "", l = Rt;
                                            break;
                                        default:
                                            dt(G(v(o, f), "")) || (u.host = r.host, u.path = v(r.path), u.shortenPath()), l = Lt;
                                            continue
                                    }
                                }
                                break;
                            case Bt:
                                if ("/" === i || "\\" === i) {
                                    l = kt;
                                    break
                                }
                                r && "file" === r.scheme && !dt(G(v(o, f), "")) && (pt(r.path[0], !0) ? N(u.path, r.path[0]) : u.host = r.host), l = Lt;
                                continue;
                            case kt:
                                if (i === n || "/" === i || "\\" === i || "?" === i || "#" === i) {
                                    if (!e && pt(h)) l = Lt;
                                    else if ("" === h) {
                                        if (u.host = "", e) return;
                                        l = Tt
                                    } else {
                                        if (s = u.parseHost(h)) return s;
                                        if ("localhost" === u.host && (u.host = ""), e) return;
                                        h = "", l = Tt
                                    }
                                    continue
                                }
                                h += i;
                                break;
                            case Tt:
                                if (u.isSpecial()) {
                                    if (l = Lt, "/" !== i && "\\" !== i) continue
                                } else if (e || "?" !== i)
                                    if (e || "#" !== i) {
                                        if (i !== n && (l = Lt, "/" !== i)) continue
                                    } else u.fragment = "", l = Rt;
                                else u.query = "", l = Gt;
                                break;
                            case Lt:
                                if (i === n || "/" === i || "\\" === i && u.isSpecial() || !e && ("?" === i || "#" === i)) {
                                    if (".." === (c = W(c = h)) || "%2e." === c || ".%2e" === c || "%2e%2e" === c ? (u.shortenPath(), "/" === i || "\\" === i && u.isSpecial() || N(u.path, "")) : mt(h) ? "/" === i || "\\" === i && u.isSpecial() || N(u.path, "") : ("file" === u.scheme && !u.path.length && pt(h) && (u.host && (u.host = ""), h = L(h, 0) + ":"), N(u.path, h)), h = "", "file" === u.scheme && (i === n || "?" === i || "#" === i))
                                        for (; u.path.length > 1 && "" === u.path[0];) M(u.path);
                                    "?" === i ? (u.query = "", l = Gt) : "#" === i && (u.fragment = "", l = Rt)
                                } else h += ft(i, ut);
                                break;
                            case It:
                                "?" === i ? (u.query = "", l = Gt) : "#" === i ? (u.fragment = "", l = Rt) : i !== n && (u.path[0] += ft(i, st));
                                break;
                            case Gt:
                                e || "#" !== i ? i !== n && ("'" === i && u.isSpecial() ? u.query += "%27" : u.query += "#" === i ? "%23" : ft(i, st)) : (u.fragment = "", l = Rt);
                                break;
                            case Rt:
                                i !== n && (u.fragment += ft(i, ct))
                        }
                        f++
                    }
                },
                parseHost: function(t) {
                    var e, r, n;
                    if ("[" === L(t, 0)) {
                        if ("]" !== L(t, t.length - 1)) return V;
                        if (e = function(t) {
                                var e, r, n, o, i, a, s, c = [0, 0, 0, 0, 0, 0, 0, 0],
                                    u = 0,
                                    l = null,
                                    f = 0,
                                    h = function() {
                                        return L(t, f)
                                    };
                                if (":" === h()) {
                                    if (":" !== L(t, 1)) return;
                                    f += 2, l = ++u
                                }
                                for (; h();) {
                                    if (8 === u) return;
                                    if (":" !== h()) {
                                        for (e = r = 0; r < 4 && I(tt, h());) e = 16 * e + B(h(), 16), f++, r++;
                                        if ("." === h()) {
                                            if (0 === r) return;
                                            if (f -= r, u > 6) return;
                                            for (n = 0; h();) {
                                                if (o = null, n > 0) {
                                                    if (!("." === h() && n < 4)) return;
                                                    f++
                                                }
                                                if (!I(Z, h())) return;
                                                for (; I(Z, h());) {
                                                    if (i = B(h(), 10), null === o) o = i;
                                                    else {
                                                        if (0 === o) return;
                                                        o = 10 * o + i
                                                    }
                                                    if (o > 255) return;
                                                    f++
                                                }
                                                c[u] = 256 * c[u] + o, 2 != ++n && 4 !== n || u++
                                            }
                                            if (4 !== n) return;
                                            break
                                        }
                                        if (":" === h()) {
                                            if (f++, !h()) return
                                        } else if (h()) return;
                                        c[u++] = e
                                    } else {
                                        if (null !== l) return;
                                        f++, l = ++u
                                    }
                                }
                                if (null !== l)
                                    for (a = u - l, u = 7; 0 !== u && a > 0;) s = c[u], c[u--] = c[l + a - 1], c[l + --a] = s;
                                else if (8 !== u) return;
                                return c
                            }($(t, 1, -1)), !e) return V;
                        this.host = e
                    } else if (this.isSpecial()) {
                        if (t = b(t), I(et, t)) return V;
                        if (e = function(t) {
                                var e, r, n, o, i, a, s, c = U(t, ".");
                                if (c.length && "" === c[c.length - 1] && c.length--, (e = c.length) > 4) return t;
                                for (r = [], n = 0; n < e; n++) {
                                    if ("" === (o = c[n])) return t;
                                    if (i = 10, o.length > 1 && "0" === L(o, 0) && (i = I(X, o) ? 16 : 8, o = $(o, 8 === i ? 1 : 2)), "" === o) a = 0;
                                    else {
                                        if (!I(10 === i ? Q : 8 === i ? J : tt, o)) return t;
                                        a = B(o, i)
                                    }
                                    N(r, a)
                                }
                                for (n = 0; n < e; n++)
                                    if (a = r[n], n === e - 1) {
                                        if (a >= T(256, 5 - e)) return null
                                    } else if (a > 255) return null;
                                for (s = D(r), n = 0; n < r.length; n++) s += r[n] * T(256, 3 - n);
                                return s
                            }(t), null === e) return V;
                        this.host = e
                    } else {
                        if (I(rt, t)) return V;
                        for (e = "", r = m(t), n = 0; n < r.length; n++) e += ft(r[n], st);
                        this.host = e
                    }
                },
                cannotHaveUsernamePasswordPort: function() {
                    return !this.host || this.cannotBeABaseURL || "file" === this.scheme
                },
                includesCredentials: function() {
                    return "" !== this.username || "" !== this.password
                },
                isSpecial: function() {
                    return p(ht, this.scheme)
                },
                shortenPath: function() {
                    var t = this.path,
                        e = t.length;
                    !e || "file" === this.scheme && 1 === e && pt(t[0], !0) || t.length--
                },
                serialize: function() {
                    var t = this,
                        e = t.scheme,
                        r = t.username,
                        n = t.password,
                        o = t.host,
                        i = t.port,
                        a = t.path,
                        s = t.query,
                        c = t.fragment,
                        u = e + ":";
                    return null !== o ? (u += "//", t.includesCredentials() && (u += r + (n ? ":" + n : "") + "@"), u += at(o), null !== i && (u += ":" + i)) : "file" === e && (u += "//"), u += t.cannotBeABaseURL ? a[0] : a.length ? "/" + G(a, "/") : "", null !== s && (u += "?" + s), null !== c && (u += "#" + c), u
                },
                setHref: function(t) {
                    var e = this.parse(t);
                    if (e) throw new j(e);
                    this.searchParams.update()
                },
                getOrigin: function() {
                    var t = this.scheme,
                        e = this.port;
                    if ("blob" === t) try {
                        return new Nt(t.path[0]).origin
                    } catch (r) {
                        return "null"
                    }
                    return "file" !== t && this.isSpecial() ? t + "://" + at(this.host) + (null !== e ? ":" + e : "") : "null"
                },
                getProtocol: function() {
                    return this.scheme + ":"
                },
                setProtocol: function(t) {
                    this.parse(g(t) + ":", vt)
                },
                getUsername: function() {
                    return this.username
                },
                setUsername: function(t) {
                    var e = m(g(t));
                    if (!this.cannotHaveUsernamePasswordPort()) {
                        this.username = "";
                        for (var r = 0; r < e.length; r++) this.username += ft(e[r], lt)
                    }
                },
                getPassword: function() {
                    return this.password
                },
                setPassword: function(t) {
                    var e = m(g(t));
                    if (!this.cannotHaveUsernamePasswordPort()) {
                        this.password = "";
                        for (var r = 0; r < e.length; r++) this.password += ft(e[r], lt)
                    }
                },
                getHost: function() {
                    var t = this.host,
                        e = this.port;
                    return null === t ? "" : null === e ? at(t) : at(t) + ":" + e
                },
                setHost: function(t) {
                    this.cannotBeABaseURL || this.parse(t, xt)
                },
                getHostname: function() {
                    var t = this.host;
                    return null === t ? "" : at(t)
                },
                setHostname: function(t) {
                    this.cannotBeABaseURL || this.parse(t, Et)
                },
                getPort: function() {
                    var t = this.port;
                    return null === t ? "" : g(t)
                },
                setPort: function(t) {
                    this.cannotHaveUsernamePasswordPort() || ("" === (t = g(t)) ? this.port = null : this.parse(t, Ct))
                },
                getPathname: function() {
                    var t = this.path;
                    return this.cannotBeABaseURL ? t[0] : t.length ? "/" + G(t, "/") : ""
                },
                setPathname: function(t) {
                    this.cannotBeABaseURL || (this.path = [], this.parse(t, Tt))
                },
                getSearch: function() {
                    var t = this.query;
                    return t ? "?" + t : ""
                },
                setSearch: function(t) {
                    "" === (t = g(t)) ? this.query = null: ("?" === L(t, 0) && (t = $(t, 1)), this.query = "", this.parse(t, Gt)), this.searchParams.update()
                },
                getSearchParams: function() {
                    return this.searchParams.facade
                },
                getHash: function() {
                    var t = this.fragment;
                    return t ? "#" + t : ""
                },
                setHash: function(t) {
                    "" !== (t = g(t)) ? ("#" === L(t, 0) && (t = $(t, 1)), this.fragment = "", this.parse(t, Rt)) : this.fragment = null
                },
                update: function() {
                    this.query = this.searchParams.serialize() || null
                }
            };
            var Nt = function(t) {
                    var e = h(this, Ft),
                        r = S(arguments.length, 1) > 1 ? arguments[1] : void 0,
                        n = A(e, new Dt(t, !1, r));
                    i || (e.href = n.serialize(), e.origin = n.getOrigin(), e.protocol = n.getProtocol(), e.username = n.getUsername(), e.password = n.getPassword(), e.host = n.getHost(), e.hostname = n.getHostname(), e.port = n.getPort(), e.pathname = n.getPathname(), e.search = n.getSearch(), e.searchParams = n.getSearchParams(), e.hash = n.getHash())
                },
                Ft = Nt.prototype,
                Mt = function(t, e) {
                    return {
                        get: function() {
                            return P(this)[t]()
                        },
                        set: e && function(t) {
                            return P(this)[e](t)
                        },
                        configurable: !0,
                        enumerable: !0
                    }
                };
            if (i && (f(Ft, "href", Mt("serialize", "setHref")), f(Ft, "origin", Mt("getOrigin")), f(Ft, "protocol", Mt("getProtocol", "setProtocol")), f(Ft, "username", Mt("getUsername", "setUsername")), f(Ft, "password", Mt("getPassword", "setPassword")), f(Ft, "host", Mt("getHost", "setHost")), f(Ft, "hostname", Mt("getHostname", "setHostname")), f(Ft, "port", Mt("getPort", "setPort")), f(Ft, "pathname", Mt("getPathname", "setPathname")), f(Ft, "search", Mt("getSearch", "setSearch")), f(Ft, "searchParams", Mt("getSearchParams")), f(Ft, "hash", Mt("getHash", "setHash"))), l(Ft, "toJSON", (function() {
                    return P(this).serialize()
                }), {
                    enumerable: !0
                }), l(Ft, "toString", (function() {
                    return P(this).serialize()
                }), {
                    enumerable: !0
                }), C) {
                var Ut = C.createObjectURL,
                    $t = C.revokeObjectURL;
                Ut && l(Nt, "createObjectURL", c(Ut, C)), $t && l(Nt, "revokeObjectURL", c($t, C))
            }
            w(Nt, "URL"), o({
                global: !0,
                constructor: !0,
                forced: !a,
                sham: !i
            }, {
                URL: Nt
            })
        },
        80560285: (t, e, r) => {
            "use strict";
            r(97368789)
        },
        28618552: (t, e, r) => {
            var n = r(37610852)(r(29555639), "DataView");
            t.exports = n
        },
        42301989: (t, e, r) => {
            var n = r(71751789),
                o = r(1780401),
                i = r(45657667),
                a = r(96521327),
                s = r(1281866);

            function c(t) {
                var e = -1,
                    r = null == t ? 0 : t.length;
                for (this.clear(); ++e < r;) {
                    var n = t[e];
                    this.set(n[0], n[1])
                }
            }
            c.prototype.clear = n, c.prototype.delete = o, c.prototype.get = i, c.prototype.has = a, c.prototype.set = s, t.exports = c
        },
        92738407: (t, e, r) => {
            var n = r(76327040),
                o = r(82514125),
                i = r(31882117),
                a = r(10567518),
                s = r(95654705);

            function c(t) {
                var e = -1,
                    r = null == t ? 0 : t.length;
                for (this.clear(); ++e < r;) {
                    var n = t[e];
                    this.set(n[0], n[1])
                }
            }
            c.prototype.clear = n, c.prototype.delete = o, c.prototype.get = i, c.prototype.has = a, c.prototype.set = s, t.exports = c
        },
        97357071: (t, e, r) => {
            var n = r(37610852)(r(29555639), "Map");
            t.exports = n
        },
        41883369: (t, e, r) => {
            var n = r(94924785),
                o = r(67611285),
                i = r(72396e3),
                a = r(55349916),
                s = r(61195265);

            function c(t) {
                var e = -1,
                    r = null == t ? 0 : t.length;
                for (this.clear(); ++e < r;) {
                    var n = t[e];
                    this.set(n[0], n[1])
                }
            }
            c.prototype.clear = n, c.prototype.delete = o, c.prototype.get = i, c.prototype.has = a, c.prototype.set = s, t.exports = c
        },
        2853818: (t, e, r) => {
            var n = r(37610852)(r(29555639), "Promise");
            t.exports = n
        },
        20458525: (t, e, r) => {
            var n = r(37610852)(r(29555639), "Set");
            t.exports = n
        },
        41288668: (t, e, r) => {
            var n = r(41883369),
                o = r(59090619),
                i = r(17572385);

            function a(t) {
                var e = -1,
                    r = null == t ? 0 : t.length;
                for (this.__data__ = new n; ++e < r;) this.add(t[e])
            }
            a.prototype.add = a.prototype.push = o, a.prototype.has = i, t.exports = a
        },
        74646384: (t, e, r) => {
            var n = r(92738407),
                o = r(29737465),
                i = r(36963779),
                a = r(40267599),
                s = r(39744758),
                c = r(30234309);

            function u(t) {
                var e = this.__data__ = new n(t);
                this.size = e.size
            }
            u.prototype.clear = o, u.prototype.delete = i, u.prototype.get = a, u.prototype.has = s, u.prototype.set = c, t.exports = u
        },
        52562705: (t, e, r) => {
            var n = r(29555639).Symbol;
            t.exports = n
        },
        97611149: (t, e, r) => {
            var n = r(29555639).Uint8Array;
            t.exports = n
        },
        39070577: (t, e, r) => {
            var n = r(37610852)(r(29555639), "WeakMap");
            t.exports = n
        },
        14477412: t => {
            t.exports = function(t, e) {
                for (var r = -1, n = null == t ? 0 : t.length; ++r < n && !1 !== e(t[r], r, t););
                return t
            }
        },
        53234963: t => {
            t.exports = function(t, e) {
                for (var r = -1, n = null == t ? 0 : t.length, o = 0, i = []; ++r < n;) {
                    var a = t[r];
                    e(a, r, t) && (i[o++] = a)
                }
                return i
            }
        },
        10014636: (t, e, r) => {
            var n = r(64422545),
                o = r(67135694),
                i = r(56701469),
                a = r(99644144),
                s = r(72565776),
                c = r(30936719),
                u = Object.prototype.hasOwnProperty;
            t.exports = function(t, e) {
                var r = i(t),
                    l = !r && o(t),
                    f = !r && !l && a(t),
                    h = !r && !l && !f && c(t),
                    p = r || l || f || h,
                    d = p ? n(t.length, String) : [],
                    m = d.length;
                for (var v in t) !e && !u.call(t, v) || p && ("length" == v || f && ("offset" == v || "parent" == v) || h && ("buffer" == v || "byteLength" == v || "byteOffset" == v) || s(v, m)) || d.push(v);
                return d
            }
        },
        74829932: t => {
            t.exports = function(t, e) {
                for (var r = -1, n = null == t ? 0 : t.length, o = Array(n); ++r < n;) o[r] = e(t[r], r, t);
                return o
            }
        },
        62862488: t => {
            t.exports = function(t, e) {
                for (var r = -1, n = e.length, o = t.length; ++r < n;) t[o + r] = e[r];
                return t
            }
        },
        70282908: t => {
            t.exports = function(t, e) {
                for (var r = -1, n = null == t ? 0 : t.length; ++r < n;)
                    if (e(t[r], r, t)) return !0;
                return !1
            }
        },
        63234865: (t, e, r) => {
            var n = r(28789465),
                o = r(58977813),
                i = Object.prototype.hasOwnProperty;
            t.exports = function(t, e, r) {
                var a = t[e];
                i.call(t, e) && o(a, r) && (void 0 !== r || e in t) || n(t, e, r)
            }
        },
        24218470: (t, e, r) => {
            var n = r(58977813);
            t.exports = function(t, e) {
                for (var r = t.length; r--;)
                    if (n(t[r][0], e)) return r;
                return -1
            }
        },
        69744037: (t, e, r) => {
            var n = r(17698363),
                o = r(6003674);
            t.exports = function(t, e) {
                return t && n(e, o(e), t)
            }
        },
        74163886: (t, e, r) => {
            var n = r(17698363),
                o = r(76481704);
            t.exports = function(t, e) {
                return t && n(e, o(e), t)
            }
        },
        28789465: (t, e, r) => {
            var n = r(91538777);
            t.exports = function(t, e, r) {
                "__proto__" == e && n ? n(t, e, {
                    configurable: !0,
                    enumerable: !0,
                    value: r,
                    writable: !0
                }) : t[e] = r
            }
        },
        9285990: (t, e, r) => {
            var n = r(74646384),
                o = r(14477412),
                i = r(63234865),
                a = r(69744037),
                s = r(74163886),
                c = r(32364626),
                u = r(80200278),
                l = r(92318805),
                f = r(83201911),
                h = r(70458234),
                p = r(65946904),
                d = r(78664160),
                m = r(38043824),
                v = r(90529148),
                y = r(94738517),
                b = r(56701469),
                g = r(99644144),
                w = r(72356688),
                S = r(75513218),
                O = r(62472928),
                _ = r(6003674),
                A = r(76481704),
                P = "[object Arguments]",
                x = "[object Function]",
                E = "[object Object]",
                C = {};
            C[P] = C["[object Array]"] = C["[object ArrayBuffer]"] = C["[object DataView]"] = C["[object Boolean]"] = C["[object Date]"] = C["[object Float32Array]"] = C["[object Float64Array]"] = C["[object Int8Array]"] = C["[object Int16Array]"] = C["[object Int32Array]"] = C["[object Map]"] = C["[object Number]"] = C[E] = C["[object RegExp]"] = C["[object Set]"] = C["[object String]"] = C["[object Symbol]"] = C["[object Uint8Array]"] = C["[object Uint8ClampedArray]"] = C["[object Uint16Array]"] = C["[object Uint32Array]"] = !0, C["[object Error]"] = C[x] = C["[object WeakMap]"] = !1, t.exports = function t(e, r, j, B, k, T) {
                var L, I = 1 & r,
                    G = 2 & r,
                    R = 4 & r;
                if (j && (L = k ? j(e, B, k, T) : j(e)), void 0 !== L) return L;
                if (!S(e)) return e;
                var D = b(e);
                if (D) {
                    if (L = m(e), !I) return u(e, L)
                } else {
                    var N = d(e),
                        F = N == x || "[object GeneratorFunction]" == N;
                    if (g(e)) return c(e, I);
                    if (N == E || N == P || F && !k) {
                        if (L = G || F ? {} : y(e), !I) return G ? f(e, s(L, e)) : l(e, a(L, e))
                    } else {
                        if (!C[N]) return k ? e : {};
                        L = v(e, N, I)
                    }
                }
                T || (T = new n);
                var M = T.get(e);
                if (M) return M;
                T.set(e, L), O(e) ? e.forEach((function(n) {
                    L.add(t(n, r, j, n, e, T))
                })) : w(e) && e.forEach((function(n, o) {
                    L.set(o, t(n, r, j, o, e, T))
                }));
                var U = D ? void 0 : (R ? G ? p : h : G ? A : _)(e);
                return o(U || e, (function(n, o) {
                    U && (n = e[o = n]), i(L, o, t(n, r, j, o, e, T))
                })), L
            }
        },
        50603118: (t, e, r) => {
            var n = r(75513218),
                o = Object.create,
                i = function() {
                    function t() {}
                    return function(e) {
                        if (!n(e)) return {};
                        if (o) return o(e);
                        t.prototype = e;
                        var r = new t;
                        return t.prototype = void 0, r
                    }
                }();
            t.exports = i
        },
        37041848: t => {
            t.exports = function(t, e, r, n) {
                for (var o = t.length, i = r + (n ? 1 : -1); n ? i-- : ++i < o;)
                    if (e(t[i], i, t)) return i;
                return -1
            }
        },
        56297786: (t, e, r) => {
            var n = r(23671811),
                o = r(7240327);
            t.exports = function(t, e) {
                for (var r = 0, i = (e = n(e, t)).length; null != t && r < i;) t = t[o(e[r++])];
                return r && r == i ? t : void 0
            }
        },
        22868866: (t, e, r) => {
            var n = r(62862488),
                o = r(56701469);
            t.exports = function(t, e, r) {
                var i = e(t);
                return o(t) ? i : n(i, r(t))
            }
        },
        64644239: (t, e, r) => {
            var n = r(52562705),
                o = r(81789607),
                i = r(63902333),
                a = n ? n.toStringTag : void 0;
            t.exports = function(t) {
                return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : a && a in Object(t) ? o(t) : i(t)
            }
        },
        3200013: t => {
            t.exports = function(t, e) {
                return null != t && e in Object(t)
            }
        },
        37909454: (t, e, r) => {
            var n = r(64644239),
                o = r(49637005);
            t.exports = function(t) {
                return o(t) && "[object Arguments]" == n(t)
            }
        },
        54690939: (t, e, r) => {
            var n = r(81902492),
                o = r(49637005);
            t.exports = function t(e, r, i, a, s) {
                return e === r || (null == e || null == r || !o(e) && !o(r) ? e != e && r != r : n(e, r, i, a, t, s))
            }
        },
        81902492: (t, e, r) => {
            var n = r(74646384),
                o = r(56967114),
                i = r(59518351),
                a = r(66916096),
                s = r(78664160),
                c = r(56701469),
                u = r(99644144),
                l = r(30936719),
                f = "[object Arguments]",
                h = "[object Array]",
                p = "[object Object]",
                d = Object.prototype.hasOwnProperty;
            t.exports = function(t, e, r, m, v, y) {
                var b = c(t),
                    g = c(e),
                    w = b ? h : s(t),
                    S = g ? h : s(e),
                    O = (w = w == f ? p : w) == p,
                    _ = (S = S == f ? p : S) == p,
                    A = w == S;
                if (A && u(t)) {
                    if (!u(e)) return !1;
                    b = !0, O = !1
                }
                if (A && !O) return y || (y = new n), b || l(t) ? o(t, e, r, m, v, y) : i(t, e, w, r, m, v, y);
                if (!(1 & r)) {
                    var P = O && d.call(t, "__wrapped__"),
                        x = _ && d.call(e, "__wrapped__");
                    if (P || x) {
                        var E = P ? t.value() : t,
                            C = x ? e.value() : e;
                        return y || (y = new n), v(E, C, r, m, y)
                    }
                }
                return !!A && (y || (y = new n), a(t, e, r, m, v, y))
            }
        },
        63225588: (t, e, r) => {
            var n = r(78664160),
                o = r(49637005);
            t.exports = function(t) {
                return o(t) && "[object Map]" == n(t)
            }
        },
        98702958: (t, e, r) => {
            var n = r(74646384),
                o = r(54690939);
            t.exports = function(t, e, r, i) {
                var a = r.length,
                    s = a,
                    c = !i;
                if (null == t) return !s;
                for (t = Object(t); a--;) {
                    var u = r[a];
                    if (c && u[2] ? u[1] !== t[u[0]] : !(u[0] in t)) return !1
                }
                for (; ++a < s;) {
                    var l = (u = r[a])[0],
                        f = t[l],
                        h = u[1];
                    if (c && u[2]) {
                        if (void 0 === f && !(l in t)) return !1
                    } else {
                        var p = new n;
                        if (i) var d = i(f, h, l, t, e, p);
                        if (!(void 0 === d ? o(h, f, 3, i, p) : d)) return !1
                    }
                }
                return !0
            }
        },
        32028458: (t, e, r) => {
            var n = r(33623560),
                o = r(45215346),
                i = r(75513218),
                a = r(79680346),
                s = /^\[object .+?Constructor\]$/,
                c = Function.prototype,
                u = Object.prototype,
                l = c.toString,
                f = u.hasOwnProperty,
                h = RegExp("^" + l.call(f).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
            t.exports = function(t) {
                return !(!i(t) || o(t)) && (n(t) ? h : s).test(a(t))
            }
        },
        23829221: (t, e, r) => {
            var n = r(78664160),
                o = r(49637005);
            t.exports = function(t) {
                return o(t) && "[object Set]" == n(t)
            }
        },
        77238749: (t, e, r) => {
            var n = r(64644239),
                o = r(64541780),
                i = r(49637005),
                a = {};
            a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1, t.exports = function(t) {
                return i(t) && o(t.length) && !!a[n(t)]
            }
        },
        55267206: (t, e, r) => {
            var n = r(17191573),
                o = r(13716432),
                i = r(20406557),
                a = r(56701469),
                s = r(22139601);
            t.exports = function(t) {
                return "function" == typeof t ? t : null == t ? i : "object" == typeof t ? a(t) ? o(t[0], t[1]) : n(t) : s(t)
            }
        },
        46400280: (t, e, r) => {
            var n = r(5225726),
                o = r(61086916),
                i = Object.prototype.hasOwnProperty;
            t.exports = function(t) {
                if (!n(t)) return o(t);
                var e = [];
                for (var r in Object(t)) i.call(t, r) && "constructor" != r && e.push(r);
                return e
            }
        },
        70710313: (t, e, r) => {
            var n = r(75513218),
                o = r(5225726),
                i = r(66133498),
                a = Object.prototype.hasOwnProperty;
            t.exports = function(t) {
                if (!n(t)) return i(t);
                var e = o(t),
                    r = [];
                for (var s in t)("constructor" != s || !e && a.call(t, s)) && r.push(s);
                return r
            }
        },
        17191573: (t, e, r) => {
            var n = r(98702958),
                o = r(20301499),
                i = r(84542634);
            t.exports = function(t) {
                var e = o(t);
                return 1 == e.length && e[0][2] ? i(e[0][0], e[0][1]) : function(r) {
                    return r === t || n(r, t, e)
                }
            }
        },
        13716432: (t, e, r) => {
            var n = r(54690939),
                o = r(79227361),
                i = r(18379095),
                a = r(74115403),
                s = r(57689162),
                c = r(84542634),
                u = r(7240327);
            t.exports = function(t, e) {
                return a(t) && s(e) ? c(u(t), e) : function(r) {
                    var a = o(r, t);
                    return void 0 === a && a === e ? i(r, t) : n(e, a, 3)
                }
            }
        },
        93840371: t => {
            t.exports = function(t) {
                return function(e) {
                    return null == e ? void 0 : e[t]
                }
            }
        },
        87379152: (t, e, r) => {
            var n = r(56297786);
            t.exports = function(t) {
                return function(e) {
                    return n(e, t)
                }
            }
        },
        64422545: t => {
            t.exports = function(t, e) {
                for (var r = -1, n = Array(t); ++r < t;) n[r] = e(r);
                return n
            }
        },
        9880531: (t, e, r) => {
            var n = r(52562705),
                o = r(74829932),
                i = r(56701469),
                a = r(21733448),
                s = n ? n.prototype : void 0,
                c = s ? s.toString : void 0;
            t.exports = function t(e) {
                if ("string" == typeof e) return e;
                if (i(e)) return o(e, t) + "";
                if (a(e)) return c ? c.call(e) : "";
                var r = e + "";
                return "0" == r && 1 / e == -Infinity ? "-0" : r
            }
        },
        70727561: (t, e, r) => {
            var n = r(55567990),
                o = /^\s+/;
            t.exports = function(t) {
                return t ? t.slice(0, n(t) + 1).replace(o, "") : t
            }
        },
        97307518: t => {
            t.exports = function(t) {
                return function(e) {
                    return t(e)
                }
            }
        },
        88274757: t => {
            t.exports = function(t, e) {
                return t.has(e)
            }
        },
        23671811: (t, e, r) => {
            var n = r(56701469),
                o = r(74115403),
                i = r(60555514),
                a = r(66479833);
            t.exports = function(t, e) {
                return n(t) ? t : o(t, e) ? [t] : i(a(t))
            }
        },
        10274318: (t, e, r) => {
            var n = r(97611149);
            t.exports = function(t) {
                var e = new t.constructor(t.byteLength);
                return new n(e).set(new n(t)), e
            }
        },
        32364626: (t, e, r) => {
            t = r.nmd(t);
            var n = r(29555639),
                o = e && !e.nodeType && e,
                i = o && t && !t.nodeType && t,
                a = i && i.exports === o ? n.Buffer : void 0,
                s = a ? a.allocUnsafe : void 0;
            t.exports = function(t, e) {
                if (e) return t.slice();
                var r = t.length,
                    n = s ? s(r) : new t.constructor(r);
                return t.copy(n), n
            }
        },
        39257157: (t, e, r) => {
            var n = r(10274318);
            t.exports = function(t, e) {
                var r = e ? n(t.buffer) : t.buffer;
                return new t.constructor(r, t.byteOffset, t.byteLength)
            }
        },
        55593147: t => {
            var e = /\w*$/;
            t.exports = function(t) {
                var r = new t.constructor(t.source, e.exec(t));
                return r.lastIndex = t.lastIndex, r
            }
        },
        17540419: (t, e, r) => {
            var n = r(52562705),
                o = n ? n.prototype : void 0,
                i = o ? o.valueOf : void 0;
            t.exports = function(t) {
                return i ? Object(i.call(t)) : {}
            }
        },
        15477133: (t, e, r) => {
            var n = r(10274318);
            t.exports = function(t, e) {
                var r = e ? n(t.buffer) : t.buffer;
                return new t.constructor(r, t.byteOffset, t.length)
            }
        },
        80200278: t => {
            t.exports = function(t, e) {
                var r = -1,
                    n = t.length;
                for (e || (e = Array(n)); ++r < n;) e[r] = t[r];
                return e
            }
        },
        17698363: (t, e, r) => {
            var n = r(63234865),
                o = r(28789465);
            t.exports = function(t, e, r, i) {
                var a = !r;
                r || (r = {});
                for (var s = -1, c = e.length; ++s < c;) {
                    var u = e[s],
                        l = i ? i(r[u], t[u], u, r, t) : void 0;
                    void 0 === l && (l = t[u]), a ? o(r, u, l) : n(r, u, l)
                }
                return r
            }
        },
        92318805: (t, e, r) => {
            var n = r(17698363),
                o = r(60799551);
            t.exports = function(t, e) {
                return n(t, o(t), e)
            }
        },
        83201911: (t, e, r) => {
            var n = r(17698363),
                o = r(25151442);
            t.exports = function(t, e) {
                return n(t, o(t), e)
            }
        },
        1614429: (t, e, r) => {
            var n = r(29555639)["__core-js_shared__"];
            t.exports = n
        },
        53367740: (t, e, r) => {
            var n = r(55267206),
                o = r(39498612),
                i = r(6003674);
            t.exports = function(t) {
                return function(e, r, a) {
                    var s = Object(e);
                    if (!o(e)) {
                        var c = n(r, 3);
                        e = i(e), r = function(t) {
                            return c(s[t], t, s)
                        }
                    }
                    var u = t(e, r, a);
                    return u > -1 ? s[c ? e[u] : u] : void 0
                }
            }
        },
        91538777: (t, e, r) => {
            var n = r(37610852),
                o = function() {
                    try {
                        var t = n(Object, "defineProperty");
                        return t({}, "", {}), t
                    } catch (e) {}
                }();
            t.exports = o
        },
        56967114: (t, e, r) => {
            var n = r(41288668),
                o = r(70282908),
                i = r(88274757);
            t.exports = function(t, e, r, a, s, c) {
                var u = 1 & r,
                    l = t.length,
                    f = e.length;
                if (l != f && !(u && f > l)) return !1;
                var h = c.get(t),
                    p = c.get(e);
                if (h && p) return h == e && p == t;
                var d = -1,
                    m = !0,
                    v = 2 & r ? new n : void 0;
                for (c.set(t, e), c.set(e, t); ++d < l;) {
                    var y = t[d],
                        b = e[d];
                    if (a) var g = u ? a(b, y, d, e, t, c) : a(y, b, d, t, e, c);
                    if (void 0 !== g) {
                        if (g) continue;
                        m = !1;
                        break
                    }
                    if (v) {
                        if (!o(e, (function(t, e) {
                                if (!i(v, e) && (y === t || s(y, t, r, a, c))) return v.push(e)
                            }))) {
                            m = !1;
                            break
                        }
                    } else if (y !== b && !s(y, b, r, a, c)) {
                        m = !1;
                        break
                    }
                }
                return c.delete(t), c.delete(e), m
            }
        },
        59518351: (t, e, r) => {
            var n = r(52562705),
                o = r(97611149),
                i = r(58977813),
                a = r(56967114),
                s = r(45668776),
                c = r(35321814),
                u = n ? n.prototype : void 0,
                l = u ? u.valueOf : void 0;
            t.exports = function(t, e, r, n, u, f, h) {
                switch (r) {
                    case "[object DataView]":
                        if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
                        t = t.buffer, e = e.buffer;
                    case "[object ArrayBuffer]":
                        return !(t.byteLength != e.byteLength || !f(new o(t), new o(e)));
                    case "[object Boolean]":
                    case "[object Date]":
                    case "[object Number]":
                        return i(+t, +e);
                    case "[object Error]":
                        return t.name == e.name && t.message == e.message;
                    case "[object RegExp]":
                    case "[object String]":
                        return t == e + "";
                    case "[object Map]":
                        var p = s;
                    case "[object Set]":
                        var d = 1 & n;
                        if (p || (p = c), t.size != e.size && !d) return !1;
                        var m = h.get(t);
                        if (m) return m == e;
                        n |= 2, h.set(t, e);
                        var v = a(p(t), p(e), n, u, f, h);
                        return h.delete(t), v;
                    case "[object Symbol]":
                        if (l) return l.call(t) == l.call(e)
                }
                return !1
            }
        },
        66916096: (t, e, r) => {
            var n = r(70458234),
                o = Object.prototype.hasOwnProperty;
            t.exports = function(t, e, r, i, a, s) {
                var c = 1 & r,
                    u = n(t),
                    l = u.length;
                if (l != n(e).length && !c) return !1;
                for (var f = l; f--;) {
                    var h = u[f];
                    if (!(c ? h in e : o.call(e, h))) return !1
                }
                var p = s.get(t),
                    d = s.get(e);
                if (p && d) return p == e && d == t;
                var m = !0;
                s.set(t, e), s.set(e, t);
                for (var v = c; ++f < l;) {
                    var y = t[h = u[f]],
                        b = e[h];
                    if (i) var g = c ? i(b, y, h, e, t, s) : i(y, b, h, t, e, s);
                    if (!(void 0 === g ? y === b || a(y, b, r, i, s) : g)) {
                        m = !1;
                        break
                    }
                    v || (v = "constructor" == h)
                }
                if (m && !v) {
                    var w = t.constructor,
                        S = e.constructor;
                    w == S || !("constructor" in t) || !("constructor" in e) || "function" == typeof w && w instanceof w && "function" == typeof S && S instanceof S || (m = !1)
                }
                return s.delete(t), s.delete(e), m
            }
        },
        65431957: (t, e, r) => {
            var n = "object" == typeof r.g && r.g && r.g.Object === Object && r.g;
            t.exports = n
        },
        70458234: (t, e, r) => {
            var n = r(22868866),
                o = r(60799551),
                i = r(6003674);
            t.exports = function(t) {
                return n(t, i, o)
            }
        },
        65946904: (t, e, r) => {
            var n = r(22868866),
                o = r(25151442),
                i = r(76481704);
            t.exports = function(t) {
                return n(t, i, o)
            }
        },
        56045050: (t, e, r) => {
            var n = r(13037019);
            t.exports = function(t, e) {
                var r = t.__data__;
                return n(e) ? r["string" == typeof e ? "string" : "hash"] : r.map
            }
        },
        20301499: (t, e, r) => {
            var n = r(57689162),
                o = r(6003674);
            t.exports = function(t) {
                for (var e = o(t), r = e.length; r--;) {
                    var i = e[r],
                        a = t[i];
                    e[r] = [i, a, n(a)]
                }
                return e
            }
        },
        37610852: (t, e, r) => {
            var n = r(32028458),
                o = r(11647801);
            t.exports = function(t, e) {
                var r = o(t, e);
                return n(r) ? r : void 0
            }
        },
        61385924: (t, e, r) => {
            var n = r(6205569)(Object.getPrototypeOf, Object);
            t.exports = n
        },
        81789607: (t, e, r) => {
            var n = r(52562705),
                o = Object.prototype,
                i = o.hasOwnProperty,
                a = o.toString,
                s = n ? n.toStringTag : void 0;
            t.exports = function(t) {
                var e = i.call(t, s),
                    r = t[s];
                try {
                    t[s] = void 0;
                    var n = !0
                } catch (c) {}
                var o = a.call(t);
                return n && (e ? t[s] = r : delete t[s]), o
            }
        },
        60799551: (t, e, r) => {
            var n = r(53234963),
                o = r(85770479),
                i = Object.prototype.propertyIsEnumerable,
                a = Object.getOwnPropertySymbols,
                s = a ? function(t) {
                    return null == t ? [] : (t = Object(t), n(a(t), (function(e) {
                        return i.call(t, e)
                    })))
                } : o;
            t.exports = s
        },
        25151442: (t, e, r) => {
            var n = r(62862488),
                o = r(61385924),
                i = r(60799551),
                a = r(85770479),
                s = Object.getOwnPropertySymbols ? function(t) {
                    for (var e = []; t;) n(e, i(t)), t = o(t);
                    return e
                } : a;
            t.exports = s
        },
        78664160: (t, e, r) => {
            var n = r(28618552),
                o = r(97357071),
                i = r(2853818),
                a = r(20458525),
                s = r(39070577),
                c = r(64644239),
                u = r(79680346),
                l = "[object Map]",
                f = "[object Promise]",
                h = "[object Set]",
                p = "[object WeakMap]",
                d = "[object DataView]",
                m = u(n),
                v = u(o),
                y = u(i),
                b = u(a),
                g = u(s),
                w = c;
            (n && w(new n(new ArrayBuffer(1))) != d || o && w(new o) != l || i && w(i.resolve()) != f || a && w(new a) != h || s && w(new s) != p) && (w = function(t) {
                var e = c(t),
                    r = "[object Object]" == e ? t.constructor : void 0,
                    n = r ? u(r) : "";
                if (n) switch (n) {
                    case m:
                        return d;
                    case v:
                        return l;
                    case y:
                        return f;
                    case b:
                        return h;
                    case g:
                        return p
                }
                return e
            }), t.exports = w
        },
        11647801: t => {
            t.exports = function(t, e) {
                return null == t ? void 0 : t[e]
            }
        },
        78900222: (t, e, r) => {
            var n = r(23671811),
                o = r(67135694),
                i = r(56701469),
                a = r(72565776),
                s = r(64541780),
                c = r(7240327);
            t.exports = function(t, e, r) {
                for (var u = -1, l = (e = n(e, t)).length, f = !1; ++u < l;) {
                    var h = c(e[u]);
                    if (!(f = null != t && r(t, h))) break;
                    t = t[h]
                }
                return f || ++u != l ? f : !!(l = null == t ? 0 : t.length) && s(l) && a(h, l) && (i(t) || o(t))
            }
        },
        71751789: (t, e, r) => {
            var n = r(79894536);
            t.exports = function() {
                this.__data__ = n ? n(null) : {}, this.size = 0
            }
        },
        1780401: t => {
            t.exports = function(t) {
                var e = this.has(t) && delete this.__data__[t];
                return this.size -= e ? 1 : 0, e
            }
        },
        45657667: (t, e, r) => {
            var n = r(79894536),
                o = Object.prototype.hasOwnProperty;
            t.exports = function(t) {
                var e = this.__data__;
                if (n) {
                    var r = e[t];
                    return "__lodash_hash_undefined__" === r ? void 0 : r
                }
                return o.call(e, t) ? e[t] : void 0
            }
        },
        96521327: (t, e, r) => {
            var n = r(79894536),
                o = Object.prototype.hasOwnProperty;
            t.exports = function(t) {
                var e = this.__data__;
                return n ? void 0 !== e[t] : o.call(e, t)
            }
        },
        1281866: (t, e, r) => {
            var n = r(79894536);
            t.exports = function(t, e) {
                var r = this.__data__;
                return this.size += this.has(t) ? 0 : 1, r[t] = n && void 0 === e ? "__lodash_hash_undefined__" : e, this
            }
        },
        38043824: t => {
            var e = Object.prototype.hasOwnProperty;
            t.exports = function(t) {
                var r = t.length,
                    n = new t.constructor(r);
                return r && "string" == typeof t[0] && e.call(t, "index") && (n.index = t.index, n.input = t.input), n
            }
        },
        90529148: (t, e, r) => {
            var n = r(10274318),
                o = r(39257157),
                i = r(55593147),
                a = r(17540419),
                s = r(15477133);
            t.exports = function(t, e, r) {
                var c = t.constructor;
                switch (e) {
                    case "[object ArrayBuffer]":
                        return n(t);
                    case "[object Boolean]":
                    case "[object Date]":
                        return new c(+t);
                    case "[object DataView]":
                        return o(t, r);
                    case "[object Float32Array]":
                    case "[object Float64Array]":
                    case "[object Int8Array]":
                    case "[object Int16Array]":
                    case "[object Int32Array]":
                    case "[object Uint8Array]":
                    case "[object Uint8ClampedArray]":
                    case "[object Uint16Array]":
                    case "[object Uint32Array]":
                        return s(t, r);
                    case "[object Map]":
                    case "[object Set]":
                        return new c;
                    case "[object Number]":
                    case "[object String]":
                        return new c(t);
                    case "[object RegExp]":
                        return i(t);
                    case "[object Symbol]":
                        return a(t)
                }
            }
        },
        94738517: (t, e, r) => {
            var n = r(50603118),
                o = r(61385924),
                i = r(5225726);
            t.exports = function(t) {
                return "function" != typeof t.constructor || i(t) ? {} : n(o(t))
            }
        },
        72565776: t => {
            var e = /^(?:0|[1-9]\d*)$/;
            t.exports = function(t, r) {
                var n = typeof t;
                return !!(r = null == r ? 9007199254740991 : r) && ("number" == n || "symbol" != n && e.test(t)) && t > -1 && t % 1 == 0 && t < r
            }
        },
        74115403: (t, e, r) => {
            var n = r(56701469),
                o = r(21733448),
                i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                a = /^\w*$/;
            t.exports = function(t, e) {
                if (n(t)) return !1;
                var r = typeof t;
                return !("number" != r && "symbol" != r && "boolean" != r && null != t && !o(t)) || (a.test(t) || !i.test(t) || null != e && t in Object(e))
            }
        },
        13037019: t => {
            t.exports = function(t) {
                var e = typeof t;
                return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
            }
        },
        45215346: (t, e, r) => {
            var n, o = r(1614429),
                i = (n = /[^.]+$/.exec(o && o.keys && o.keys.IE_PROTO || "")) ? "Symbol(src)_1." + n : "";
            t.exports = function(t) {
                return !!i && i in t
            }
        },
        5225726: t => {
            var e = Object.prototype;
            t.exports = function(t) {
                var r = t && t.constructor;
                return t === ("function" == typeof r && r.prototype || e)
            }
        },
        57689162: (t, e, r) => {
            var n = r(75513218);
            t.exports = function(t) {
                return t == t && !n(t)
            }
        },
        76327040: t => {
            t.exports = function() {
                this.__data__ = [], this.size = 0
            }
        },
        82514125: (t, e, r) => {
            var n = r(24218470),
                o = Array.prototype.splice;
            t.exports = function(t) {
                var e = this.__data__,
                    r = n(e, t);
                return !(r < 0) && (r == e.length - 1 ? e.pop() : o.call(e, r, 1), --this.size, !0)
            }
        },
        31882117: (t, e, r) => {
            var n = r(24218470);
            t.exports = function(t) {
                var e = this.__data__,
                    r = n(e, t);
                return r < 0 ? void 0 : e[r][1]
            }
        },
        10567518: (t, e, r) => {
            var n = r(24218470);
            t.exports = function(t) {
                return n(this.__data__, t) > -1
            }
        },
        95654705: (t, e, r) => {
            var n = r(24218470);
            t.exports = function(t, e) {
                var r = this.__data__,
                    o = n(r, t);
                return o < 0 ? (++this.size, r.push([t, e])) : r[o][1] = e, this
            }
        },
        94924785: (t, e, r) => {
            var n = r(42301989),
                o = r(92738407),
                i = r(97357071);
            t.exports = function() {
                this.size = 0, this.__data__ = {
                    hash: new n,
                    map: new(i || o),
                    string: new n
                }
            }
        },
        67611285: (t, e, r) => {
            var n = r(56045050);
            t.exports = function(t) {
                var e = n(this, t).delete(t);
                return this.size -= e ? 1 : 0, e
            }
        },
        72396e3: (t, e, r) => {
            var n = r(56045050);
            t.exports = function(t) {
                return n(this, t).get(t)
            }
        },
        55349916: (t, e, r) => {
            var n = r(56045050);
            t.exports = function(t) {
                return n(this, t).has(t)
            }
        },
        61195265: (t, e, r) => {
            var n = r(56045050);
            t.exports = function(t, e) {
                var r = n(this, t),
                    o = r.size;
                return r.set(t, e), this.size += r.size == o ? 0 : 1, this
            }
        },
        45668776: t => {
            t.exports = function(t) {
                var e = -1,
                    r = Array(t.size);
                return t.forEach((function(t, n) {
                    r[++e] = [n, t]
                })), r
            }
        },
        84542634: t => {
            t.exports = function(t, e) {
                return function(r) {
                    return null != r && (r[t] === e && (void 0 !== e || t in Object(r)))
                }
            }
        },
        92624523: (t, e, r) => {
            var n = r(35288306);
            t.exports = function(t) {
                var e = n(t, (function(t) {
                        return 500 === r.size && r.clear(), t
                    })),
                    r = e.cache;
                return e
            }
        },
        79894536: (t, e, r) => {
            var n = r(37610852)(Object, "create");
            t.exports = n
        },
        61086916: (t, e, r) => {
            var n = r(6205569)(Object.keys, Object);
            t.exports = n
        },
        66133498: t => {
            t.exports = function(t) {
                var e = [];
                if (null != t)
                    for (var r in Object(t)) e.push(r);
                return e
            }
        },
        10531167: (t, e, r) => {
            t = r.nmd(t);
            var n = r(65431957),
                o = e && !e.nodeType && e,
                i = o && t && !t.nodeType && t,
                a = i && i.exports === o && n.process,
                s = function() {
                    try {
                        var t = i && i.require && i.require("util").types;
                        return t || a && a.binding && a.binding("util")
                    } catch (e) {}
                }();
            t.exports = s
        },
        63902333: t => {
            var e = Object.prototype.toString;
            t.exports = function(t) {
                return e.call(t)
            }
        },
        6205569: t => {
            t.exports = function(t, e) {
                return function(r) {
                    return t(e(r))
                }
            }
        },
        29555639: (t, e, r) => {
            var n = r(65431957),
                o = "object" == typeof self && self && self.Object === Object && self,
                i = n || o || Function("return this")();
            t.exports = i
        },
        59090619: t => {
            t.exports = function(t) {
                return this.__data__.set(t, "__lodash_hash_undefined__"), this
            }
        },
        17572385: t => {
            t.exports = function(t) {
                return this.__data__.has(t)
            }
        },
        35321814: t => {
            t.exports = function(t) {
                var e = -1,
                    r = Array(t.size);
                return t.forEach((function(t) {
                    r[++e] = t
                })), r
            }
        },
        29737465: (t, e, r) => {
            var n = r(92738407);
            t.exports = function() {
                this.__data__ = new n, this.size = 0
            }
        },
        36963779: t => {
            t.exports = function(t) {
                var e = this.__data__,
                    r = e.delete(t);
                return this.size = e.size, r
            }
        },
        40267599: t => {
            t.exports = function(t) {
                return this.__data__.get(t)
            }
        },
        39744758: t => {
            t.exports = function(t) {
                return this.__data__.has(t)
            }
        },
        30234309: (t, e, r) => {
            var n = r(92738407),
                o = r(97357071),
                i = r(41883369);
            t.exports = function(t, e) {
                var r = this.__data__;
                if (r instanceof n) {
                    var a = r.__data__;
                    if (!o || a.length < 199) return a.push([t, e]), this.size = ++r.size, this;
                    r = this.__data__ = new i(a)
                }
                return r.set(t, e), this.size = r.size, this
            }
        },
        60555514: (t, e, r) => {
            var n = r(92624523),
                o = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                i = /\\(\\)?/g,
                a = n((function(t) {
                    var e = [];
                    return 46 === t.charCodeAt(0) && e.push(""), t.replace(o, (function(t, r, n, o) {
                        e.push(n ? o.replace(i, "$1") : r || t)
                    })), e
                }));
            t.exports = a
        },
        7240327: (t, e, r) => {
            var n = r(21733448);
            t.exports = function(t) {
                if ("string" == typeof t || n(t)) return t;
                var e = t + "";
                return "0" == e && 1 / t == -Infinity ? "-0" : e
            }
        },
        79680346: t => {
            var e = Function.prototype.toString;
            t.exports = function(t) {
                if (null != t) {
                    try {
                        return e.call(t)
                    } catch (r) {}
                    try {
                        return t + ""
                    } catch (r) {}
                }
                return ""
            }
        },
        55567990: t => {
            var e = /\s/;
            t.exports = function(t) {
                for (var r = t.length; r-- && e.test(t.charAt(r)););
                return r
            }
        },
        6766678: (t, e, r) => {
            var n = r(9285990);
            t.exports = function(t) {
                return n(t, 4)
            }
        },
        58977813: t => {
            t.exports = function(t, e) {
                return t === e || t != t && e != e
            }
        },
        66313311: (t, e, r) => {
            var n = r(53367740)(r(15630998));
            t.exports = n
        },
        15630998: (t, e, r) => {
            var n = r(37041848),
                o = r(55267206),
                i = r(17640554),
                a = Math.max;
            t.exports = function(t, e, r) {
                var s = null == t ? 0 : t.length;
                if (!s) return -1;
                var c = null == r ? 0 : i(r);
                return c < 0 && (c = a(s + c, 0)), n(t, o(e, 3), c)
            }
        },
        79227361: (t, e, r) => {
            var n = r(56297786);
            t.exports = function(t, e, r) {
                var o = null == t ? void 0 : n(t, e);
                return void 0 === o ? r : o
            }
        },
        18379095: (t, e, r) => {
            var n = r(3200013),
                o = r(78900222);
            t.exports = function(t, e) {
                return null != t && o(t, e, n)
            }
        },
        20406557: t => {
            t.exports = function(t) {
                return t
            }
        },
        67135694: (t, e, r) => {
            var n = r(37909454),
                o = r(49637005),
                i = Object.prototype,
                a = i.hasOwnProperty,
                s = i.propertyIsEnumerable,
                c = n(function() {
                    return arguments
                }()) ? n : function(t) {
                    return o(t) && a.call(t, "callee") && !s.call(t, "callee")
                };
            t.exports = c
        },
        56701469: t => {
            var e = Array.isArray;
            t.exports = e
        },
        39498612: (t, e, r) => {
            var n = r(33623560),
                o = r(64541780);
            t.exports = function(t) {
                return null != t && o(t.length) && !n(t)
            }
        },
        99644144: (t, e, r) => {
            t = r.nmd(t);
            var n = r(29555639),
                o = r(85595062),
                i = e && !e.nodeType && e,
                a = i && t && !t.nodeType && t,
                s = a && a.exports === i ? n.Buffer : void 0,
                c = (s ? s.isBuffer : void 0) || o;
            t.exports = c
        },
        95618446: (t, e, r) => {
            var n = r(54690939);
            t.exports = function(t, e) {
                return n(t, e)
            }
        },
        33623560: (t, e, r) => {
            var n = r(64644239),
                o = r(75513218);
            t.exports = function(t) {
                if (!o(t)) return !1;
                var e = n(t);
                return "[object Function]" == e || "[object GeneratorFunction]" == e || "[object AsyncFunction]" == e || "[object Proxy]" == e
            }
        },
        64541780: t => {
            t.exports = function(t) {
                return "number" == typeof t && t > -1 && t % 1 == 0 && t <= 9007199254740991
            }
        },
        72356688: (t, e, r) => {
            var n = r(63225588),
                o = r(97307518),
                i = r(10531167),
                a = i && i.isMap,
                s = a ? o(a) : n;
            t.exports = s
        },
        75513218: t => {
            t.exports = function(t) {
                var e = typeof t;
                return null != t && ("object" == e || "function" == e)
            }
        },
        49637005: t => {
            t.exports = function(t) {
                return null != t && "object" == typeof t
            }
        },
        62472928: (t, e, r) => {
            var n = r(23829221),
                o = r(97307518),
                i = r(10531167),
                a = i && i.isSet,
                s = a ? o(a) : n;
            t.exports = s
        },
        16747037: (t, e, r) => {
            var n = r(64644239),
                o = r(56701469),
                i = r(49637005);
            t.exports = function(t) {
                return "string" == typeof t || !o(t) && i(t) && "[object String]" == n(t)
            }
        },
        21733448: (t, e, r) => {
            var n = r(64644239),
                o = r(49637005);
            t.exports = function(t) {
                return "symbol" == typeof t || o(t) && "[object Symbol]" == n(t)
            }
        },
        30936719: (t, e, r) => {
            var n = r(77238749),
                o = r(97307518),
                i = r(10531167),
                a = i && i.isTypedArray,
                s = a ? o(a) : n;
            t.exports = s
        },
        6003674: (t, e, r) => {
            var n = r(10014636),
                o = r(46400280),
                i = r(39498612);
            t.exports = function(t) {
                return i(t) ? n(t) : o(t)
            }
        },
        76481704: (t, e, r) => {
            var n = r(10014636),
                o = r(70710313),
                i = r(39498612);
            t.exports = function(t) {
                return i(t) ? n(t, !0) : o(t)
            }
        },
        35288306: (t, e, r) => {
            var n = r(41883369);

            function o(t, e) {
                if ("function" != typeof t || null != e && "function" != typeof e) throw new TypeError("Expected a function");
                var r = function() {
                    var n = arguments,
                        o = e ? e.apply(this, n) : n[0],
                        i = r.cache;
                    if (i.has(o)) return i.get(o);
                    var a = t.apply(this, n);
                    return r.cache = i.set(o, a) || i, a
                };
                return r.cache = new(o.Cache || n), r
            }
            o.Cache = n, t.exports = o
        },
        22139601: (t, e, r) => {
            var n = r(93840371),
                o = r(87379152),
                i = r(74115403),
                a = r(7240327);
            t.exports = function(t) {
                return i(t) ? n(a(t)) : o(t)
            }
        },
        85770479: t => {
            t.exports = function() {
                return []
            }
        },
        85595062: t => {
            t.exports = function() {
                return !1
            }
        },
        41418601: (t, e, r) => {
            var n = r(64014841),
                o = 1 / 0;
            t.exports = function(t) {
                return t ? (t = n(t)) === o || t === -1 / 0 ? 17976931348623157e292 * (t < 0 ? -1 : 1) : t == t ? t : 0 : 0 === t ? t : 0
            }
        },
        17640554: (t, e, r) => {
            var n = r(41418601);
            t.exports = function(t) {
                var e = n(t),
                    r = e % 1;
                return e == e ? r ? e - r : e : 0
            }
        },
        64014841: (t, e, r) => {
            var n = r(70727561),
                o = r(75513218),
                i = r(21733448),
                a = /^[-+]0x[0-9a-f]+$/i,
                s = /^0b[01]+$/i,
                c = /^0o[0-7]+$/i,
                u = parseInt;
            t.exports = function(t) {
                if ("number" == typeof t) return t;
                if (i(t)) return NaN;
                if (o(t)) {
                    var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                    t = o(e) ? e + "" : e
                }
                if ("string" != typeof t) return 0 === t ? t : +t;
                t = n(t);
                var r = s.test(t);
                return r || c.test(t) ? u(t.slice(2), r ? 2 : 8) : a.test(t) ? NaN : +t
            }
        },
        66479833: (t, e, r) => {
            var n = r(9880531);
            t.exports = function(t) {
                return null == t ? "" : n(t)
            }
        },
        75089783: (t, e, r) => {
            "use strict";
            r.d(e, {
                Z: () => f
            });
            var n = function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "crash-players-bets"
                }, [e("div", {
                    staticClass: "crash-players-bets__total crash-total"
                }, [e("div", {
                    staticClass: "crash-total__field"
                }, [e("p", {
                    staticClass: "crash-total__text crash-text"
                }, [t._v("\n                " + t._s(t.$t("crash.totalValuePlayers")) + "\n            ")]), t._v(" "), e("span", {
                    staticClass: "crash-total__value crash-total__value--players crash-text"
                }, [t._v("\n                " + t._s(t.countAllPlayers) + "\n            ")])]), t._v(" "), e("div", {
                    staticClass: "crash-total__field"
                }, [e("p", {
                    staticClass: "crash-total__text crash-text"
                }, [t._v("\n                " + t._s(t.$t("crash.totalValueBets")) + "\n            ")]), t._v(" "), e("span", {
                    staticClass: "crash-total__value crash-total__value--bets crash-text"
                }, [t._v("\n                " + t._s(t.getAmountSum(t.betsAmount) + " " + t.currentCurrency.code) + "\n            ")])]), t._v(" "), e("div", {
                    staticClass: "crash-total__field"
                }, [e("p", {
                    staticClass: "crash-total__text crash-text"
                }, [t._v("\n                " + t._s(t.$t("crash.totalWin")) + "\n            ")]), t._v(" "), e("span", {
                    staticClass: "crash-total__value crash-total__value--prize crash-text"
                }, [t._v("\n                " + t._s(t.getAmountSum(t.totalGain) + " " + t.currentCurrency.code) + "\n            ")])])]), t._v(" "), e("div", {
                    staticClass: "crash-players-bets__results crash-results"
                }, [e("div", {
                    staticClass: "crash-results__main",
                    class: {
                        scrollbar: t.notAllPlayersAreVisible
                    }
                }, [e("table", {
                    staticClass: "crash-results__table"
                }, [e("thead", {
                    staticClass: "crash-results__thead"
                }, [e("tr", {
                    staticClass: "crash-results__row crash-results__row--header"
                }, [e("th", {
                    staticClass: "crash-results__th"
                }, [t._v("\n                            " + t._s(t.$t("crash.resultsLogin")) + "\n                        ")]), t._v(" "), e("th", {
                    staticClass: "crash-results__th"
                }, [t._v("\n                            " + t._s(t.$t("common.coef")) + "\n                        ")]), t._v(" "), e("th", {
                    staticClass: "crash-results__th"
                }, [t._v("\n                            " + t._s(t.$t("common.bet")) + "\n                        ")]), t._v(" "), e("th", {
                    staticClass: "crash-results__th"
                }, [t._v("\n                            " + t._s(t.$t("crash.resultsPrize")) + "\n                        ")])])]), t._v(" "), e("tbody", {
                    staticClass: "crash-results__tbody"
                }, t._l(t.players, (function(r) {
                    return e("tr", {
                        staticClass: "crash-results__row",
                        class: t.getRowClasses(r)
                    }, [e("td", {
                        staticClass: "crash-results__td"
                    }, [t._v("\n                            " + t._s(r.userId) + "\n                        ")]), t._v(" "), e("td", {
                        staticClass: "crash-results__td"
                    }, [t._v("\n                            x" + t._s(r.coefficient) + "\n                        ")]), t._v(" "), e("td", {
                        staticClass: "crash-results__td"
                    }, [t._v("\n                            " + t._s(t.getAmountSum(r.betAmount) + " " + t.currentCurrency.code) + "\n                        ")]), t._v(" "), e("td", {
                        staticClass: "crash-results__td"
                    }, [t._v("\n                            " + t._s(t.getAmountSum(r.winningAmount) + " " + t.currentCurrency.code) + "\n                        ")])])
                })), 0)])])])])
            };
            n._withStripped = !0;
            r(76696649), r(27396078), r(15382526), r(58141817), r(87241539), r(5021703), r(23209653), r(88369070), r(56447941), r(88057327), r(59438880), r(6757658), r(61454747), r(3749337), r(88833321), r(65932165), r(72066992), r(7978783), r(89333948);
            var o = r(84440687),
                i = r(11167113);

            function a(t) {
                return a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, a(t)
            }

            function s(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function c(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? s(Object(r), !0).forEach((function(e) {
                        u(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function u(t, e, r) {
                return (e = function(t) {
                    var e = function(t, e) {
                        if ("object" !== a(t) || null === t) return t;
                        var r = t[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var n = r.call(t, e || "default");
                            if ("object" !== a(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(t, "string");
                    return "symbol" === a(e) ? e : String(e)
                }(e)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
            const l = {
                name: "CrashPlayersBoard",
                constants: {
                    ROW_CLASSES: {
                        WIN: "crash-results__row--win",
                        LOSE: "crash-results__row--loss",
                        USER: "crash-results__row--user"
                    }
                },
                props: {
                    getAmountSum: {
                        type: Function,
                        required: !0
                    }
                },
                computed: c(c(c({}, (0, o.mapGetters)("crash", ["stageId", "players", "betsAmount", "totalGain", "countAllPlayers"])), (0, o.mapGetters)("currency", ["currentCurrency"])), {}, {
                    notAllPlayersAreVisible: function() {
                        return this.countAllPlayers > this.isMobileView ? i.lo : i.i9
                    }
                }),
                methods: {
                    getRowClasses: function(t) {
                        var e, r = t.itsPlayersAccount,
                            n = void 0 !== r && r,
                            o = t.winningAmount,
                            a = void 0 === o ? 0 : o;
                        return u(e = {}, this.$consts.ROW_CLASSES.WIN, a > 0), u(e, this.$consts.ROW_CLASSES.LOSE, !a && this.stageId === i.c.isEnded), u(e, this.$consts.ROW_CLASSES.USER, n), e
                    }
                }
            };
            const f = (0, r(83551900).Z)(l, n, [], !1, null, null, null).exports
        },
        56696617: (t, e, r) => {
            "use strict";
            r.d(e, {
                Z: () => fo
            });
            var n = function() {
                var t = this,
                    e = t._self._c;
                t._self._setupProxy;
                return e("div", {
                    staticClass: "crash"
                }, [e("CrashPlayersBoard", {
                    staticClass: "crash__wrap crash__wrap--left",
                    attrs: {
                        getAmountSum: function(e) {
                            return t.prepareSum(e)
                        }
                    }
                }), t._v(" "), e("div", {
                    staticClass: "crash__wrap crash__wrap--main"
                }, [e("div", {
                    staticClass: "crash__game crash-game"
                }, [e("div", {
                    staticClass: "crash-game__timeline"
                }, [e("svg", {
                    staticClass: "crash-game__svg",
                    attrs: {
                        height: "420",
                        viewBox: "0 0 1230 420",
                        width: "1230"
                    }
                }, [e("defs", [e("filter", {
                    attrs: {
                        id: "dropshadow",
                        height: "200%",
                        width: "200%",
                        x: "-50%",
                        y: "-50%"
                    }
                }, [e("feDropShadow", {
                    attrs: {
                        dx: "0",
                        dy: "0",
                        "flood-color": "#fff",
                        "flood-opacity": "1",
                        stdDeviation: "15"
                    }
                })], 1), t._v(" "), e("filter", {
                    attrs: {
                        id: "shadow",
                        height: "200%",
                        width: "200%",
                        x: "-50%",
                        y: "-50%"
                    }
                }, [e("feFlood", {
                    attrs: {
                        "flood-opacity": "0",
                        result: "BackgroundImageFix"
                    }
                }), t._v(" "), e("feColorMatrix", {
                    attrs: { in: "SourceAlpha",
                        type: "matrix",
                        values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    }
                }), t._v(" "), e("feOffset"), t._v(" "), e("feGaussianBlur", {
                    attrs: {
                        stdDeviation: "10.5"
                    }
                }), t._v(" "), e("feColorMatrix", {
                    attrs: {
                        type: "matrix",
                        values: "0 0 0 0 0.819608 0 0 0 0 0.345098 0 0 0 0 0.121569 0 0 0 1 0"
                    }
                }), t._v(" "), e("feBlend", {
                    attrs: {
                        in2: "BackgroundImageFix",
                        mode: "normal",
                        result: "effect1_dropShadow"
                    }
                }), t._v(" "), e("feBlend", {
                    attrs: { in: "SourceGraphic",
                        in2: "effect1_dropShadow",
                        mode: "normal",
                        result: "shape"
                    }
                })], 1), t._v(" "), e("linearGradient", {
                    attrs: {
                        id: "grad",
                        gradientUnits: "userSpaceOnUse"
                    }
                }, [e("stop", {
                    attrs: {
                        offset: "0%",
                        "stop-color": "#FFE400"
                    }
                }), t._v(" "), e("stop", {
                    attrs: {
                        offset: "100%",
                        "stop-color": "#C76404"
                    }
                })], 1), t._v(" "), e("linearGradient", {
                    attrs: {
                        id: "grad2",
                        gradientUnits: "userSpaceOnUse",
                        x1: "250",
                        x2: "250",
                        y1: "170",
                        y2: "365"
                    }
                }, [e("stop", {
                    attrs: {
                        offset: "0%",
                        "stop-color": "#C1521E"
                    }
                }), t._v(" "), e("stop", {
                    attrs: {
                        offset: "100%",
                        "stop-color": "#C1521E",
                        "stop-opacity": "0"
                    }
                })], 1)], 1), t._v(" "), e("g", [e("path", {
                    staticClass: "crash-game__grid",
                    attrs: {
                        d: "M47 324 h1160"
                    }
                }), t._v(" "), e("path", {
                    staticClass: "crash-game__grid",
                    attrs: {
                        d: "M47 263 h1160"
                    }
                }), t._v(" "), e("path", {
                    staticClass: "crash-game__grid",
                    attrs: {
                        d: "M47 202 h1160"
                    }
                }), t._v(" "), e("path", {
                    staticClass: "crash-game__grid",
                    attrs: {
                        d: "M47 141 h1160"
                    }
                }), t._v(" "), e("path", {
                    staticClass: "crash-game__grid",
                    attrs: {
                        d: "M47 80 h1160"
                    }
                })]), t._v(" "), e("g", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.showRunningCoeff,
                        expression: "showRunningCoeff"
                    }],
                    attrs: {
                        "clip-path": "url(#a)"
                    }
                }, [e("path", {
                    attrs: {
                        d: t.getStrokeGrad2,
                        fill: "url(#grad2)"
                    }
                }), t._v(" "), e("path", {
                    staticClass: "crash-game__stroke",
                    attrs: {
                        d: t.getStrokeShadow,
                        filter: "url(#shadow)"
                    }
                }), t._v(" "), e("circle", {
                    attrs: {
                        cx: t.getStrokeCoordX2,
                        cy: t.getStrokeCoordY2,
                        fill: "#de8a06",
                        r: "7"
                    }
                })]), t._v(" "), e("clipPath", {
                    attrs: {
                        id: "a"
                    }
                }, [e("rect", {
                    attrs: {
                        height: "365",
                        "stroke-width": "0",
                        width: "1160",
                        x: "47",
                        y: "20"
                    }
                })]), t._v(" "), e("g", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.showRunningCoeff,
                        expression: "showRunningCoeff"
                    }]
                }, [e("text", {
                    staticClass: "crash-game__counter",
                    attrs: {
                        "font-size": "83",
                        x: "1160",
                        y: "356"
                    }
                }, [t._v("\n                            " + t._s(t.runningCoeffValue) + "x\n                        ")])]), t._v(" "), e("g", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.showRunningCoeff,
                        expression: "showRunningCoeff"
                    }],
                    staticClass: "crash-game__axis"
                }, [e("path", {
                    attrs: {
                        d: "M47 ".concat(t.$consts.gameStrokeValue, " h1160")
                    }
                })]), t._v(" "), e("g", t._l(t.getCurrentTimeLine, (function(t, r) {
                    return e("circle", {
                        key: r,
                        staticClass: "crash-game__coordinate",
                        attrs: {
                            transform: "translate(".concat(t.transform, " 410)"),
                            cx: "0",
                            cy: "-17",
                            r: "3"
                        }
                    })
                })), 0), t._v(" "), e("g", t._l(t.getCurrentCoeffsLine, (function(t, r) {
                    return e("circle", {
                        key: r,
                        staticClass: "crash-game__coordinate",
                        attrs: {
                            transform: "translate(20 ".concat(t.transform, ")"),
                            cx: "17",
                            cy: "-5",
                            r: "3"
                        }
                    })
                })), 0)])]), t._v(" "), e("div", {
                    staticClass: "crash-game__mountains",
                    class: {
                        "crash-game__mountains--game": t.gameRunning
                    }
                }, [e("div", {
                    staticClass: "crash-game__mountain crash-game__mountain--5"
                }), t._v(" "), e("div", {
                    staticClass: "crash-game__mountain crash-game__mountain--4"
                }), t._v(" "), e("div", {
                    staticClass: "crash-game__mountain crash-game__mountain--3"
                }), t._v(" "), e("div", {
                    staticClass: "crash-game__mountain crash-game__mountain--2"
                }), t._v(" "), e("div", {
                    staticClass: "crash-game__mountain"
                })]), t._v(" "), e("div", {
                    staticClass: "crash-game__waiting",
                    class: t.getWaitBetClass
                }, [t._m(0), t._v(" "), e("p", {
                    staticClass: "crash-game__text"
                }, [t._v("\n                    " + t._s(t.$t("crash.waitingGame")) + "\n                ")])]), t._v(" "), e("div", {
                    staticClass: "crash-game__wrap"
                }, [e("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.gameRunning,
                        expression: "gameRunning"
                    }],
                    staticClass: "crash-game__shine",
                    style: t.getShineStyle
                }), t._v(" "), e("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.showRunningCoeff,
                        expression: "showRunningCoeff"
                    }],
                    staticClass: "crash-game__pin",
                    class: {
                        "crash-game__pin--crash": t.isCrashedGame
                    },
                    style: t.getPinStyle
                })]), t._v(" "), e("div", {
                    staticClass: "crash-game__info crash-game-info",
                    class: {
                        "crash-game-info--show": t.showBetAcceptedInfo
                    }
                }, [e("p", {
                    staticClass: "crash-game-info__text crash-game-info__text--size-l"
                }, [t._v("\n                    " + t._s(t.$t("common.betAccepted")) + "\n                ")])]), t._v(" "), e("div", {
                    staticClass: "crash-game__info crash-game__info--results crash-game-info",
                    class: {
                        "crash-game-info--show": t.resultMsg && !t.showBetAcceptedInfo
                    }
                }, [e("p", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.showWin,
                        expression: "showWin"
                    }],
                    staticClass: "crash-game-info__text"
                }, [t._v("\n                    " + t._s(t.resultMsg) + "\n                ")]), t._v(" "), e("p", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.showLose,
                        expression: "showLose"
                    }],
                    staticClass: "crash-game-info__text crash-game-info__text--loss"
                }, [t._v("\n                    " + t._s(t.$t("common.badLuckExclamation")) + "\n                ")])]), t._v(" "), e("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.timerInSeconds && !t.gameRenderingStopped,
                        expression: "timerInSeconds && !gameRenderingStopped"
                    }],
                    staticClass: "crash-game__timer crash-timer",
                    class: {
                        "crash-timer--countdown": t.timerInSeconds <= 6
                    }
                }, [e("p", {
                    staticClass: "crash-timer__counter"
                }, [t._v("\n                    " + t._s(t.timerInSeconds) + "\n                ")]), t._v(" "), e("div", {
                    staticClass: "crash-timer__circle"
                }), t._v(" "), e("div", {
                    staticClass: "crash-timer__segments",
                    style: t.getTimerStyle
                }, t._l(12, (function(t) {
                    return e("div", {
                        staticClass: "crash-timer__segment"
                    })
                })), 0)]), t._v(" "), e("button", {
                    staticClass: "crash-btn crash-btn--transparent",
                    on: {
                        click: function(e) {
                            return t.showGameRulesPopup()
                        }
                    }
                }, [e("span", {
                    staticClass: "crash-btn__text"
                }, [t._v("\n                    " + t._s(t.$t("common.rulesWithSpaces")) + "\n                ")])])]), t._v(" "), e("div", {
                    staticClass: "crash__wrap crash__wrap--bottom"
                }, [e("CrashHistory", {
                    staticClass: "crash__history"
                }), t._v(" "), e("div", {
                    staticClass: "crash__bet crash-bet"
                }, [e("div", {
                    staticClass: "crash-bet__types"
                }, t._l(t.betTabs, (function(r) {
                    return e("button", {
                        key: r.type,
                        staticClass: "crash-bet__type",
                        class: {
                            "crash-bet__type--is-active": t.selectedBetType === r.type
                        },
                        attrs: {
                            disabled: t.disabledSetSelectedBetType
                        },
                        on: {
                            click: function(e) {
                                return t.setSelectedBetType(r.type)
                            }
                        }
                    }, [e("span", {
                        staticClass: "crash-bet__text"
                    }, [t._v("\n                            " + t._s(t.$t(r.text)) + "\n                        ")])])
                })), 0), t._v(" "), e("form", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.selectedBetType === t.$consts.betTypeHands,
                        expression: "selectedBetType === $consts.betTypeHands"
                    }],
                    staticClass: "crash-bet__body"
                }, [e("BetsButtons", {
                    staticClass: "crash-bet__form"
                }), t._v(" "), e("button", {
                    staticClass: "crash-btn crash-bet__btn crash-bet__btn--play",
                    attrs: {
                        disabled: t.disabledMakeBet,
                        type: "button"
                    },
                    on: {
                        click: t.startGame
                    }
                }, [e("span", {
                    staticClass: "crash-bet__text crash-bet__text--play"
                }, [t._v("\n                            " + t._s(t.$t("common.placeBet")) + "\n                        ")])]), t._v(" "), e("button", {
                    staticClass: "crash-btn crash-bet__btn crash-bet__btn--stop",
                    attrs: {
                        disabled: t.blockedBtnTakeWin,
                        type: "button"
                    },
                    on: {
                        click: t.takeWin
                    }
                }, [e("span", {
                    staticClass: "crash-bet__text crash-bet__text--stop"
                }, [t._v("\n                            " + t._s(t.$t("common.takeWin")) + "\n                        ")])])], 1), t._v(" "), e("form", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.selectedBetType === t.$consts.betTypeAuto,
                        expression: "selectedBetType === $consts.betTypeAuto"
                    }],
                    staticClass: "crash-bet__body"
                }, [e("CrashBetsButtonsAutoGame", {
                    staticClass: "crash-bet__form",
                    attrs: {
                        disabledChangeSettings: t.disabledChangeSettingsAutoGame,
                        maxBet: t.maxBet,
                        minBet: t.minBet,
                        prepareSumFunc: t.prepareSum
                    }
                }), t._v(" "), e("button", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !t.gameStarted,
                        expression: "!gameStarted"
                    }],
                    staticClass: "crash-btn crash-bet__btn crash-bet__btn--play crash-bet__btn--size-l",
                    attrs: {
                        disabled: t.disabledStartAutoGame,
                        type: "button"
                    },
                    on: {
                        click: t.startAutoGame
                    }
                }, [e("span", {
                    staticClass: "crash-bet__text crash-bet__text--play"
                }, [t._v("\n                            " + t._s(t.$t("crash.betsAuto")) + "\n                        ")])]), t._v(" "), e("button", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.gameStarted,
                        expression: "gameStarted"
                    }],
                    staticClass: "crash-btn crash-bet__btn crash-bet__btn--play crash-bet__btn--size-l",
                    attrs: {
                        disabled: t.disabledStopAutoGame,
                        type: "button"
                    },
                    on: {
                        click: t.stopAutoGame
                    }
                }, [e("span", {
                    staticClass: "crash-bet__text crash-bet__text--play"
                }, [t._v("\n                            " + t._s(t.$t("crash.stopAuto")) + "\n                        ")])])], 1)])], 1)])], 1)
            };
            n._withStripped = !0;
            r(94747042), r(46454678), r(46892222), r(87241539), r(21339714), r(72066992), r(7978783), r(89333948), r(80560285), r(77241637), r(24646229), r(70017330), r(38362062), r(98226699), r(72132023), r(2873689), r(6757658), r(19821249), r(61454747), r(64788674), r(76696649), r(27396078), r(15382526), r(58141817), r(5021703), r(23209653), r(88369070), r(56447941), r(88057327), r(59438880), r(3749337), r(88833321), r(65932165), r(70472443), r(93639341), r(94173706), r(7910408), r(10530489), r(57968304), r(88365069);
            var o = r(84440687),
                i = (r(64969826), r(56426833), r(26974916), r(54115306), r(51682772), r(47221005)),
                a = r(24891070),
                s = r(87853387),
                c = r(33240788),
                u = r(91831702),
                l = r(7858873);
            r(10185827), r(74864765);

            function f(t) {
                return f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, f(t)
            }

            function h(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, (o = n.key, i = void 0, i = function(t, e) {
                        if ("object" !== f(t) || null === t) return t;
                        var r = t[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var n = r.call(t, e || "default");
                            if ("object" !== f(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(o, "string"), "symbol" === f(i) ? i : String(i)), n)
                }
                var o, i
            }
            var p = function() {
                    function t() {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t)
                    }
                    var e, r, n;
                    return e = t, (r = [{
                        key: "onFulfilled",
                        value: function(t) {
                            var e = new URLSearchParams(window.location.search).get("ut");
                            return e && (t.headers["X-Authorization"] = "Bearer ".concat(e)), t
                        }
                    }]) && h(e.prototype, r), n && h(e, n), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), t
                }(),
                d = r(92602033);

            function m(t) {
                return m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, m(t)
            }

            function v(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function y(t, e, r) {
                return (e = g(e)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function b(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, g(n.key), n)
                }
            }

            function g(t) {
                var e = function(t, e) {
                    if ("object" !== m(t) || null === t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" !== m(n)) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" === m(e) ? e : String(e)
            }
            var w = function() {
                    function t() {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t)
                    }
                    var e, r, n;
                    return e = t, r = [{
                        key: "onFulfilled",
                        value: function(t) {
                            return t.params = function(t) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var r = null != arguments[e] ? arguments[e] : {};
                                    e % 2 ? v(Object(r), !0).forEach((function(e) {
                                        y(t, e, r[e])
                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : v(Object(r)).forEach((function(e) {
                                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                                    }))
                                }
                                return t
                            }({
                                language: (0, d.getCurrentLanguage)()
                            }, t.params), t
                        }
                    }], r && b(e.prototype, r), n && b(e, n), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), t
                }(),
                S = function() {
                    return Number(new URLSearchParams(window.location.search).get("wh")) || 50
                };

            function O(t) {
                return O = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, O(t)
            }

            function _(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function A(t, e, r) {
                return (e = x(e)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function P(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, x(n.key), n)
                }
            }

            function x(t) {
                var e = function(t, e) {
                    if ("object" !== O(t) || null === t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" !== O(n)) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" === O(e) ? e : String(e)
            }
            var E = function() {
                function t() {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t)
                }
                var e, r, n;
                return e = t, r = [{
                    key: "onFulfilled",
                    value: function(t) {
                        return t.params = function(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var r = null != arguments[e] ? arguments[e] : {};
                                e % 2 ? _(Object(r), !0).forEach((function(e) {
                                    A(t, e, r[e])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : _(Object(r)).forEach((function(e) {
                                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                                }))
                            }
                            return t
                        }({
                            whence: S()
                        }, t.params), t
                    }
                }], r && P(e.prototype, r), n && P(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t
            }();

            function C(t) {
                return C = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, C(t)
            }

            function j(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function B(t, e, r) {
                return (e = T(e)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function k(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, T(n.key), n)
                }
            }

            function T(t) {
                var e = function(t, e) {
                    if ("object" !== C(t) || null === t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" !== C(n)) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" === C(e) ? e : String(e)
            }
            var L = function() {
                function t() {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t)
                }
                var e, r, n;
                return e = t, r = [{
                    key: "onFulfilled",
                    value: function(t) {
                        var e = new URLSearchParams(window.location.search).get("mpi");
                        return e && (t.params = function(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var r = null != arguments[e] ? arguments[e] : {};
                                e % 2 ? j(Object(r), !0).forEach((function(e) {
                                    B(t, e, r[e])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : j(Object(r)).forEach((function(e) {
                                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                                }))
                            }
                            return t
                        }({
                            mpi: e
                        }, t.params)), t
                    }
                }], r && k(e.prototype, r), n && k(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t
            }();

            function I(t) {
                return I = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, I(t)
            }

            function G(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function R(t, e, r) {
                return (e = N(e)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function D(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, N(n.key), n)
                }
            }

            function N(t) {
                var e = function(t, e) {
                    if ("object" !== I(t) || null === t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" !== I(n)) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" === I(e) ? e : String(e)
            }
            var F = function() {
                function t() {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t)
                }
                var e, r, n;
                return e = t, r = [{
                    key: "onFulfilled",
                    value: function(t) {
                        var e;
                        return "post" === (null === (e = t.method) || void 0 === e ? void 0 : e.toLowerCase()) && (t.data = function(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var r = null != arguments[e] ? arguments[e] : {};
                                e % 2 ? G(Object(r), !0).forEach((function(e) {
                                    R(t, e, r[e])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : G(Object(r)).forEach((function(e) {
                                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                                }))
                            }
                            return t
                        }({
                            WH: S()
                        }, t.data)), t
                    }
                }], r && D(e.prototype, r), n && D(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t
            }();

            function M(t) {
                return M = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, M(t)
            }

            function U(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function $(t, e, r) {
                return (e = H(e)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function W(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, H(n.key), n)
                }
            }

            function H(t) {
                var e = function(t, e) {
                    if ("object" !== M(t) || null === t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" !== M(n)) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" === M(e) ? e : String(e)
            }
            var q = function() {
                function t() {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t)
                }
                var e, r, n;
                return e = t, r = [{
                    key: "onFulfilled",
                    value: function(t) {
                        var e;
                        return "post" === (null === (e = t.method) || void 0 === e ? void 0 : e.toLowerCase()) && (t.data = function(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var r = null != arguments[e] ? arguments[e] : {};
                                e % 2 ? U(Object(r), !0).forEach((function(e) {
                                    $(t, e, r[e])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : U(Object(r)).forEach((function(e) {
                                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                                }))
                            }
                            return t
                        }({
                            LG: (0, d.getCurrentLanguage)()
                        }, t.data)), t
                    }
                }], r && W(e.prototype, r), n && W(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t
            }();
            r(52481299), r(33912419), r(44651532);

            function V(t) {
                return V = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, V(t)
            }

            function z(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, (o = n.key, i = void 0, i = function(t, e) {
                        if ("object" !== V(t) || null === t) return t;
                        var r = t[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var n = r.call(t, e || "default");
                            if ("object" !== V(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(o, "string"), "symbol" === V(i) ? i : String(i)), n)
                }
                var o, i
            }

            function K(t) {
                var e = J();
                return function() {
                    var r, n = tt(t);
                    if (e) {
                        var o = tt(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return function(t, e) {
                        if (e && ("object" === V(e) || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                        return Y(t)
                    }(this, r)
                }
            }

            function Y(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function Z(t) {
                var e = "function" == typeof Map ? new Map : void 0;
                return Z = function(t) {
                    if (null === t || (r = t, -1 === Function.toString.call(r).indexOf("[native code]"))) return t;
                    var r;
                    if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
                    if (void 0 !== e) {
                        if (e.has(t)) return e.get(t);
                        e.set(t, n)
                    }

                    function n() {
                        return X(t, arguments, tt(this).constructor)
                    }
                    return n.prototype = Object.create(t.prototype, {
                        constructor: {
                            value: n,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), Q(n, t)
                }, Z(t)
            }

            function X(t, e, r) {
                return X = J() ? Reflect.construct.bind() : function(t, e, r) {
                    var n = [null];
                    n.push.apply(n, e);
                    var o = new(Function.bind.apply(t, n));
                    return r && Q(o, r.prototype), o
                }, X.apply(null, arguments)
            }

            function J() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                } catch (t) {
                    return !1
                }
            }

            function Q(t, e) {
                return Q = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, Q(t, e)
            }

            function tt(t) {
                return tt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, tt(t)
            }
            var et = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e && Q(t, e)
                }(i, t);
                var e, r, n, o = K(i);

                function i(t, e, r, n, a) {
                    var s;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, i), (s = o.call(this, null != a ? a : "Service Api Response Error")).statusCode = t, s.serviceApiErrorCode = e, s.serviceApiMessage = r, s.response = n, s.errorMessage = a, Object.setPrototypeOf(Y(s), i.prototype), s
                }
                return e = i, r && z(e.prototype, r), n && z(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }(Z(Error));

            function rt(t) {
                return rt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, rt(t)
            }

            function nt(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function ot(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? nt(Object(r), !0).forEach((function(e) {
                        it(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : nt(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function it(t, e, r) {
                return (e = st(e)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function at(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, st(n.key), n)
                }
            }

            function st(t) {
                var e = function(t, e) {
                    if ("object" !== rt(t) || null === t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" !== rt(n)) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" === rt(e) ? e : String(e)
            }
            var ct = function(t) {
                    var e, r, n, o;
                    return Promise.reject(new et(null !== (e = t.status) && void 0 !== e ? e : 400, null !== (r = null === (n = t.data) || void 0 === n ? void 0 : n.ErrorCode) && void 0 !== r ? r : 0, null === (o = t.data) || void 0 === o ? void 0 : o.Error, t))
                },
                ut = function() {
                    function t() {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t)
                    }
                    var e, r, n;
                    return e = t, (r = [{
                        key: "onFulfilled",
                        value: function(t) {
                            var e, r = t.data;
                            if (!1 === r.Success) return ct(t);
                            var n = null !== (e = r.Value) && void 0 !== e ? e : r;
                            return void 0 !== r.JackpotSum && void 0 === r.Value.JS && (n.JS = r.JackpotSum), ot(ot({}, t), {}, {
                                data: n
                            })
                        }
                    }, {
                        key: "onRejected",
                        value: function(t) {
                            return t.response ? ct(t.response) : Promise.reject(t)
                        }
                    }]) && at(e.prototype, r), n && at(e, n), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), t
                }();

            function lt(t) {
                return lt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, lt(t)
            }

            function ft(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, (o = n.key, i = void 0, i = function(t, e) {
                        if ("object" !== lt(t) || null === t) return t;
                        var r = t[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var n = r.call(t, e || "default");
                            if ("object" !== lt(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(o, "string"), "symbol" === lt(i) ? i : String(i)), n)
                }
                var o, i
            }
            var ht = function() {
                    function t() {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t)
                    }
                    var e, r, n;
                    return e = t, (r = [{
                        key: "onFulfilled",
                        value: function(t) {
                            return t
                        }
                    }, {
                        key: "onRejected",
                        value: function(t) {
                            var e, r;
                            return t instanceof et ? Promise.reject(t) : Promise.reject(new et(null !== (e = null === (r = t.response) || void 0 === r ? void 0 : r.status) && void 0 !== e ? e : 400, 0, void 0, t.response, t.message))
                        }
                    }]) && ft(e.prototype, r), n && ft(e, n), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), t
                }(),
                pt = r(54966191),
                dt = r.n(pt),
                mt = r(50584124),
                vt = r.n(mt);

            function yt(t) {
                return yt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, yt(t)
            }

            function bt() {
                bt = function() {
                    return e
                };
                var t, e = {},
                    r = Object.prototype,
                    n = r.hasOwnProperty,
                    o = Object.defineProperty || function(t, e, r) {
                        t[e] = r.value
                    },
                    i = "function" == typeof Symbol ? Symbol : {},
                    a = i.iterator || "@@iterator",
                    s = i.asyncIterator || "@@asyncIterator",
                    c = i.toStringTag || "@@toStringTag";

                function u(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    u({}, "")
                } catch (t) {
                    u = function(t, e, r) {
                        return t[e] = r
                    }
                }

                function l(t, e, r, n) {
                    var i = e && e.prototype instanceof y ? e : y,
                        a = Object.create(i.prototype),
                        s = new B(n || []);
                    return o(a, "_invoke", {
                        value: x(t, r, s)
                    }), a
                }

                function f(t, e, r) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, r)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                e.wrap = l;
                var h = "suspendedStart",
                    p = "suspendedYield",
                    d = "executing",
                    m = "completed",
                    v = {};

                function y() {}

                function b() {}

                function g() {}
                var w = {};
                u(w, a, (function() {
                    return this
                }));
                var S = Object.getPrototypeOf,
                    O = S && S(S(k([])));
                O && O !== r && n.call(O, a) && (w = O);
                var _ = g.prototype = y.prototype = Object.create(w);

                function A(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        u(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function P(t, e) {
                    function r(o, i, a, s) {
                        var c = f(t[o], t, i);
                        if ("throw" !== c.type) {
                            var u = c.arg,
                                l = u.value;
                            return l && "object" == yt(l) && n.call(l, "__await") ? e.resolve(l.__await).then((function(t) {
                                r("next", t, a, s)
                            }), (function(t) {
                                r("throw", t, a, s)
                            })) : e.resolve(l).then((function(t) {
                                u.value = t, a(u)
                            }), (function(t) {
                                return r("throw", t, a, s)
                            }))
                        }
                        s(c.arg)
                    }
                    var i;
                    o(this, "_invoke", {
                        value: function(t, n) {
                            function o() {
                                return new e((function(e, o) {
                                    r(t, n, e, o)
                                }))
                            }
                            return i = i ? i.then(o, o) : o()
                        }
                    })
                }

                function x(e, r, n) {
                    var o = h;
                    return function(i, a) {
                        if (o === d) throw new Error("Generator is already running");
                        if (o === m) {
                            if ("throw" === i) throw a;
                            return {
                                value: t,
                                done: !0
                            }
                        }
                        for (n.method = i, n.arg = a;;) {
                            var s = n.delegate;
                            if (s) {
                                var c = E(s, n);
                                if (c) {
                                    if (c === v) continue;
                                    return c
                                }
                            }
                            if ("next" === n.method) n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) {
                                if (o === h) throw o = m, n.arg;
                                n.dispatchException(n.arg)
                            } else "return" === n.method && n.abrupt("return", n.arg);
                            o = d;
                            var u = f(e, r, n);
                            if ("normal" === u.type) {
                                if (o = n.done ? m : p, u.arg === v) continue;
                                return {
                                    value: u.arg,
                                    done: n.done
                                }
                            }
                            "throw" === u.type && (o = m, n.method = "throw", n.arg = u.arg)
                        }
                    }
                }

                function E(e, r) {
                    var n = r.method,
                        o = e.iterator[n];
                    if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, E(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), v;
                    var i = f(o, e.iterator, r.arg);
                    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, v;
                    var a = i.arg;
                    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, v) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, v)
                }

                function C(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function j(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function B(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(C, this), this.reset(!0)
                }

                function k(e) {
                    if (e || "" === e) {
                        var r = e[a];
                        if (r) return r.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var o = -1,
                                i = function r() {
                                    for (; ++o < e.length;)
                                        if (n.call(e, o)) return r.value = e[o], r.done = !1, r;
                                    return r.value = t, r.done = !0, r
                                };
                            return i.next = i
                        }
                    }
                    throw new TypeError(yt(e) + " is not iterable")
                }
                return b.prototype = g, o(_, "constructor", {
                    value: g,
                    configurable: !0
                }), o(g, "constructor", {
                    value: b,
                    configurable: !0
                }), b.displayName = u(g, c, "GeneratorFunction"), e.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === b || "GeneratorFunction" === (e.displayName || e.name))
                }, e.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, g) : (t.__proto__ = g, u(t, c, "GeneratorFunction")), t.prototype = Object.create(_), t
                }, e.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, A(P.prototype), u(P.prototype, s, (function() {
                    return this
                })), e.AsyncIterator = P, e.async = function(t, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new P(l(t, r, n, o), i);
                    return e.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, A(_), u(_, c, "Generator"), u(_, a, (function() {
                    return this
                })), u(_, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(t) {
                    var e = Object(t),
                        r = [];
                    for (var n in e) r.push(n);
                    return r.reverse(),
                        function t() {
                            for (; r.length;) {
                                var n = r.pop();
                                if (n in e) return t.value = n, t.done = !1, t
                            }
                            return t.done = !0, t
                        }
                }, e.values = k, B.prototype = {
                    constructor: B,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(j), !e)
                            for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t)
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        if (this.done) throw e;
                        var r = this;

                        function o(n, o) {
                            return s.type = "throw", s.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o
                        }
                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var a = this.tryEntries[i],
                                s = a.completion;
                            if ("root" === a.tryLoc) return o("end");
                            if (a.tryLoc <= this.prev) {
                                var c = n.call(a, "catchLoc"),
                                    u = n.call(a, "finallyLoc");
                                if (c && u) {
                                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                                } else if (c) {
                                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0)
                                } else {
                                    if (!u) throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r];
                            if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var i = o;
                                break
                            }
                        }
                        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                        var a = i ? i.completion : {};
                        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, v) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), v
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), j(r), v
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    j(r)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, r, n) {
                        return this.delegate = {
                            iterator: k(e),
                            resultName: r,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = t), v
                    }
                }, e
            }

            function gt(t, e, r, n, o, i, a) {
                try {
                    var s = t[i](a),
                        c = s.value
                } catch (u) {
                    return void r(u)
                }
                s.done ? e(c) : Promise.resolve(c).then(n, o)
            }
            var wt = function() {
                var t = dt().defaults.adapter,
                    e = [],
                    r = 0,
                    n = function(t, e) {
                        t.headers["X-Authorization"] && (t.headers["X-Authorization"] = "Bearer ".concat(e))
                    },
                    o = function() {
                        var i, s = (i = bt().mark((function i(s) {
                            var c, u, l, f, h;
                            return bt().wrap((function(i) {
                                for (;;) switch (i.prev = i.next) {
                                    case 0:
                                        if (401 === (null == s || null === (c = s.response) || void 0 === c ? void 0 : c.status) && (0, a.IsBridgeEmbedded)() && (0, a.bridgeSupports)("GPWebAppShowAuthenticationFailed")) {
                                            i.next = 2;
                                            break
                                        }
                                        return i.abrupt("return", Promise.reject(s));
                                    case 2:
                                        if (!((r += 1) > 2)) {
                                            i.next = 8;
                                            break
                                        }
                                        return r = 0, e.forEach((function(t) {
                                            var e = t.config;
                                            (0, t.reject)(new Error("Service Api queue request - ".concat(e.baseURL + "/" + e.url, " failed. Unauthorized Response.")))
                                        })), e = [], i.abrupt("return", Promise.reject(s));
                                    case 8:
                                        return i.next = 10, (0, a.emitShowAuthenticationFailed)();
                                    case 10:
                                        return u = i.sent, l = u.token, (f = new URL(window.location.href)).searchParams.set("ut", l), window.history.replaceState(null, "", f), n(null == s ? void 0 : s.config, l), i.prev = 16, i.next = 19, t(null == s ? void 0 : s.config);
                                    case 19:
                                        return h = i.sent, r = 0, e.forEach((function(e) {
                                            var r = e.config,
                                                i = e.resolve,
                                                a = e.reject;
                                            n(r, l), t(r).then(i).catch((function(t) {
                                                return o(t).then(i).catch(a)
                                            }))
                                        })), e = [], i.abrupt("return", h);
                                    case 26:
                                        return i.prev = 26, i.t0 = i.catch(16), i.abrupt("return", o(i.t0));
                                    case 29:
                                    case "end":
                                        return i.stop()
                                }
                            }), i, null, [
                                [16, 26]
                            ])
                        })), function() {
                            var t = this,
                                e = arguments;
                            return new Promise((function(r, n) {
                                var o = i.apply(t, e);

                                function a(t) {
                                    gt(o, r, n, a, s, "next", t)
                                }

                                function s(t) {
                                    gt(o, r, n, a, s, "throw", t)
                                }
                                a(void 0)
                            }))
                        });
                        return function(t) {
                            return s.apply(this, arguments)
                        }
                    }();
                return function(n) {
                    return 0 !== r ? new Promise((function(t, r) {
                        e.push({
                            config: n,
                            resolve: t,
                            reject: r
                        })
                    })) : t(n).catch(o)
                }
            };
            const St = function() {
                return wt()
            };

            function Ot(t) {
                return Ot = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, Ot(t)
            }

            function _t(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function At(t, e, r) {
                return (e = function(t) {
                    var e = function(t, e) {
                        if ("object" !== Ot(t) || null === t) return t;
                        var r = t[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var n = r.call(t, e || "default");
                            if ("object" !== Ot(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(t, "string");
                    return "symbol" === Ot(e) ? e : String(e)
                }(e)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
            const Pt = function(t, e, r, n) {
                var o = dt().create(function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? _t(Object(r), !0).forEach((function(e) {
                            At(t, e, r[e])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : _t(Object(r)).forEach((function(e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                        }))
                    }
                    return t
                }({
                    baseURL: vt()("service-api/".concat(t)),
                    adapter: St()
                }, n));
                return e.forEach((function(t) {
                    o.interceptors.request.use(t.onFulfilled, t.onRejected)
                })), r.forEach((function(t) {
                    o.interceptors.response.use(t.onFulfilled, t.onRejected)
                })), o
            };
            var xt = "games";
            const Et = function(t) {
                var e = [new p, new w, new E, new L, new F, new q],
                    r = [new ut, new ht];
                return Pt(xt, e, r, t)
            };

            function Ct(t) {
                return Ct = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, Ct(t)
            }

            function jt(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, (o = n.key, i = void 0, i = function(t, e) {
                        if ("object" !== Ct(t) || null === t) return t;
                        var r = t[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var n = r.call(t, e || "default");
                            if ("object" !== Ct(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(o, "string"), "symbol" === Ct(i) ? i : String(i)), n)
                }
                var o, i
            }
            var Bt = function() {
                    function t() {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t)
                    }
                    var e, r, n;
                    return e = t, (r = [{
                        key: "onFulfilled",
                        value: function(t) {
                            var e = window.location.pathname.split("/").filter(Boolean),
                                r = e[e.length - 1];
                            return r && (t.headers["X-GameId"] = r), t
                        }
                    }]) && jt(e.prototype, r), n && jt(e, n), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), t
                }(),
                kt = "games-demo";
            const Tt = function(t) {
                var e = [new Bt, new w, new E, new L, new F, new q],
                    r = [new ut, new ht];
                return Pt(kt, e, r, t)
            };

            function Lt(t) {
                return Lt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, Lt(t)
            }

            function It(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function Gt(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? It(Object(r), !0).forEach((function(e) {
                        Rt(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : It(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function Rt(t, e, r) {
                return (e = Nt(e)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function Dt(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, Nt(n.key), n)
                }
            }

            function Nt(t) {
                var e = function(t, e) {
                    if ("object" !== Lt(t) || null === t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" !== Lt(n)) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" === Lt(e) ? e : String(e)
            }
            var Ft = function(t) {
                    var e, r, n, o;
                    return Promise.reject(new et(null !== (e = t.status) && void 0 !== e ? e : 400, null !== (r = null === (n = t.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.errorCode) && void 0 !== r ? r : 0, null === (o = t.data) || void 0 === o || null === (o = o.error) || void 0 === o ? void 0 : o.title, t))
                },
                Mt = function() {
                    function t() {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t)
                    }
                    var e, r, n;
                    return e = t, (r = [{
                        key: "onFulfilled",
                        value: function(t) {
                            var e = t.data;
                            return void 0 === e.data ? Ft(t) : Gt(Gt({}, t), {}, {
                                data: e.data
                            })
                        }
                    }, {
                        key: "onRejected",
                        value: function(t) {
                            return t.response ? Ft(t.response) : Promise.reject(t)
                        }
                    }]) && Dt(e.prototype, r), n && Dt(e, n), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), t
                }(),
                Ut = "games-gambling";
            const $t = function(t) {
                var e = [new p, new w, new E, new L, new F, new q],
                    r = [new Mt, new ht];
                return Pt(Ut, e, r, t)
            };
            var Wt = "games-demo-gambling";
            const Ht = function(t) {
                var e = [new Bt, new w, new E, new L, new F, new q],
                    r = [new Mt, new ht];
                return Pt(Wt, e, r, t)
            };
            var qt = "games-crash";
            const Vt = function(t) {
                var e = [new p, new w, new E, new L, new F, new q],
                    r = [new ut, new ht];
                return Pt(qt, e, r, t)
            };

            function zt(t) {
                return zt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, zt(t)
            }

            function Kt(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, (o = n.key, i = void 0, i = function(t, e) {
                        if ("object" !== zt(t) || null === t) return t;
                        var r = t[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var n = r.call(t, e || "default");
                            if ("object" !== zt(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(o, "string"), "symbol" === zt(i) ? i : String(i)), n)
                }
                var o, i
            }
            var Yt = function() {
                    function t() {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t)
                    }
                    var e, r, n;
                    return e = t, (r = [{
                        key: "onFulfilled",
                        value: function(t) {
                            return t
                        }
                    }, {
                        key: "onRejected",
                        value: function(t) {
                            var e, r, n, o, i = t.response;
                            return i ? Promise.reject(new et(null !== (e = i.status) && void 0 !== e ? e : 400, null !== (r = null === (n = i.data) || void 0 === n ? void 0 : n.errorCode) && void 0 !== r ? r : 0, null === (o = i.data) || void 0 === o ? void 0 : o.title, i)) : Promise.reject(t)
                        }
                    }]) && Kt(e.prototype, r), n && Kt(e, n), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), t
                }(),
                Zt = "games-plinko";
            const Xt = function(t) {
                var e = [new p, new w, new E, new L, new F, new q],
                    r = [new Yt, new ht];
                return Pt(Zt, e, r, t)
            };
            var Jt = "games-fear-or-win";
            const Qt = function(t) {
                var e = [new p, new w, new E, new L, new F, new q],
                    r = [new ut, new ht];
                return Pt(Jt, e, r, t)
            };
            var te = "games-wild-fruits";
            const ee = function(t) {
                var e = [new p, new w, new E, new L, new F, new q],
                    r = [new ut, new ht];
                return Pt(te, e, r, t)
            };

            function re(t) {
                return re = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, re(t)
            }

            function ne(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function oe(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? ne(Object(r), !0).forEach((function(e) {
                        ie(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : ne(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function ie(t, e, r) {
                return (e = se(e)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function ae(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, se(n.key), n)
                }
            }

            function se(t) {
                var e = function(t, e) {
                    if ("object" !== re(t) || null === t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" !== re(n)) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" === re(e) ? e : String(e)
            }
            var ce = function(t) {
                    var e, r, n, o;
                    return Promise.reject(new et(null !== (e = t.status) && void 0 !== e ? e : 400, null !== (r = null === (n = t.data) || void 0 === n ? void 0 : n.ErrorCode) && void 0 !== r ? r : 0, null === (o = t.data) || void 0 === o ? void 0 : o.Error, t))
                },
                ue = function() {
                    function t() {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t)
                    }
                    var e, r, n;
                    return e = t, (r = [{
                        key: "onFulfilled",
                        value: function(t) {
                            var e = t.data;
                            return !0 !== e.Success ? ce(t) : oe(oe({}, t), {}, {
                                data: e.Response
                            })
                        }
                    }, {
                        key: "onRejected",
                        value: function(t) {
                            return t.response ? ce(t.response) : Promise.reject(t)
                        }
                    }]) && ae(e.prototype, r), n && ae(e, n), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), t
                }(),
                le = "games-dice";
            const fe = function(t) {
                var e = [new p, new w, new E, new L, new F, new q],
                    r = [new ue, new ht];
                return Pt(le, e, r, t)
            };

            function he(t) {
                return he = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, he(t)
            }

            function pe(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, (o = n.key, i = void 0, i = function(t, e) {
                        if ("object" !== he(t) || null === t) return t;
                        var r = t[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var n = r.call(t, e || "default");
                            if ("object" !== he(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(o, "string"), "symbol" === he(i) ? i : String(i)), n)
                }
                var o, i
            }
            var de = function() {
                    function t() {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t)
                    }
                    var e, r, n;
                    return e = t, (r = [{
                        key: "onFulfilled",
                        value: function(t) {
                            return t
                        }
                    }, {
                        key: "onRejected",
                        value: function(t) {
                            var e, r, n, o, i = t.response;
                            return i ? Promise.reject(new et(null !== (e = i.status) && void 0 !== e ? e : 400, null !== (r = null === (n = i.data) || void 0 === n ? void 0 : n.errorCode) && void 0 !== r ? r : 0, null === (o = i.data) || void 0 === o ? void 0 : o.title, i)) : Promise.reject(t)
                        }
                    }]) && pe(e.prototype, r), n && pe(e, n), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), t
                }(),
                me = "games-steampunk-kingdom";
            const ve = function(t) {
                var e = [new p, new w, new E, new L, new F, new q],
                    r = [new de, new ht];
                return Pt(me, e, r, t)
            };

            function ye(t) {
                return ye = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, ye(t)
            }

            function be(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, (o = n.key, i = void 0, i = function(t, e) {
                        if ("object" !== ye(t) || null === t) return t;
                        var r = t[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var n = r.call(t, e || "default");
                            if ("object" !== ye(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(o, "string"), "symbol" === ye(i) ? i : String(i)), n)
                }
                var o, i
            }
            var ge = function() {
                    function t() {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t)
                    }
                    var e, r, n;
                    return e = t, (r = [{
                        key: "onFulfilled",
                        value: function(t) {
                            return t
                        }
                    }, {
                        key: "onRejected",
                        value: function(t) {
                            var e, r, n, o, i = t.response;
                            return i ? Promise.reject(new et(null !== (e = i.status) && void 0 !== e ? e : 400, null !== (r = null === (n = i.data) || void 0 === n ? void 0 : n.errorCode) && void 0 !== r ? r : 0, null === (o = i.data) || void 0 === o ? void 0 : o.title, i)) : Promise.reject(t)
                        }
                    }]) && be(e.prototype, r), n && be(e, n), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), t
                }(),
                we = "games-pokerlight";
            const Se = function(t) {
                var e = [new p, new w, new E, new L, new F, new q],
                    r = [new ge, new ht];
                return Pt(we, e, r, t)
            };
            var Oe = "games-twenty-one";
            const _e = function(t) {
                var e = [new p, new w, new E, new L, new F, new q],
                    r = [new Mt, new ht];
                return Pt(Oe, e, r, t)
            };

            function Ae(t) {
                return Ae = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, Ae(t)
            }

            function Pe(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, (o = n.key, i = void 0, i = function(t, e) {
                        if ("object" !== Ae(t) || null === t) return t;
                        var r = t[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var n = r.call(t, e || "default");
                            if ("object" !== Ae(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(o, "string"), "symbol" === Ae(i) ? i : String(i)), n)
                }
                var o, i
            }
            var xe = function(t) {
                    var e, r, n, o, i;
                    return Promise.reject(new et(null !== (e = t.status) && void 0 !== e ? e : 400, null !== (r = null === (n = t.data) || void 0 === n || null === (n = n.error) || void 0 === n ? void 0 : n.errorCode) && void 0 !== r ? r : 0, null !== (o = null === (i = t.data) || void 0 === i || null === (i = i.error) || void 0 === i ? void 0 : i.title) && void 0 !== o ? o : "", t))
                },
                Ee = function() {
                    function t() {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t)
                    }
                    var e, r, n;
                    return e = t, (r = [{
                        key: "onFulfilled",
                        value: function(t) {
                            return !t.data || t.data.error ? xe(t) : t.data
                        }
                    }, {
                        key: "onRejected",
                        value: function(t) {
                            var e = t.response;
                            return e ? xe(e) : Promise.reject(t)
                        }
                    }]) && Pe(e.prototype, r), n && Pe(e, n), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), t
                }(),
                Ce = "games-fruit-blast";
            const je = function(t) {
                var e = [new p, new w, new E, new L, new F, new q],
                    r = [new Ee, new ht];
                return Pt(Ce, e, r, t)
            };

            function Be(t) {
                return Be = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, Be(t)
            }

            function ke(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, (o = n.key, i = void 0, i = function(t, e) {
                        if ("object" !== Be(t) || null === t) return t;
                        var r = t[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var n = r.call(t, e || "default");
                            if ("object" !== Be(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(o, "string"), "symbol" === Be(i) ? i : String(i)), n)
                }
                var o, i
            }
            var Te = function() {
                    function t() {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t)
                    }
                    var e, r, n;
                    return e = t, (r = [{
                        key: "onFulfilled",
                        value: function(t) {
                            return t
                        }
                    }, {
                        key: "onRejected",
                        value: function(t) {
                            var e, r, n, o, i = t.response;
                            return i ? Promise.reject(new et(null !== (e = i.status) && void 0 !== e ? e : 400, null !== (r = null === (n = i.data) || void 0 === n ? void 0 : n.errorCode) && void 0 !== r ? r : 0, null === (o = i.data) || void 0 === o ? void 0 : o.title, i)) : Promise.reject(t)
                        }
                    }]) && ke(e.prototype, r), n && ke(e, n), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), t
                }(),
                Le = "games-flip-card";
            const Ie = function(t) {
                var e = [new p, new w, new E, new L, new F, new q],
                    r = [new Te, new ht];
                return Pt(Le, e, r, t)
            };

            function Ge(t) {
                return Ge = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, Ge(t)
            }

            function Re(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function De(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Re(Object(r), !0).forEach((function(e) {
                        Ne(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Re(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function Ne(t, e, r) {
                return (e = Me(e)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function Fe(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, Me(n.key), n)
                }
            }

            function Me(t) {
                var e = function(t, e) {
                    if ("object" !== Ge(t) || null === t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" !== Ge(n)) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" === Ge(e) ? e : String(e)
            }
            var Ue = function(t) {
                    var e, r, n, o;
                    return Promise.reject(new et(null !== (e = t.status) && void 0 !== e ? e : 400, null !== (r = null === (n = t.data) || void 0 === n ? void 0 : n.ErrorCode) && void 0 !== r ? r : 0, null === (o = t.data) || void 0 === o ? void 0 : o.Error, t))
                },
                $e = function() {
                    function t() {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t)
                    }
                    var e, r, n;
                    return e = t, (r = [{
                        key: "onFulfilled",
                        value: function(t) {
                            return !t.data || t.data.Error ? Ue(t) : De(De({}, t), {}, {
                                data: t.data
                            })
                        }
                    }, {
                        key: "onRejected",
                        value: function(t) {
                            var e = t.response;
                            return e ? Ue(e) : Promise.reject(t)
                        }
                    }]) && Fe(e.prototype, r), n && Fe(e, n), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), t
                }(),
                We = "games-thimbles";
            const He = function(t) {
                var e = [new p, new w, new E, new L, new F, new q],
                    r = [new $e, new ht];
                return Pt(We, e, r, t)
            };

            function qe(t) {
                return qe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, qe(t)
            }

            function Ve(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, (o = n.key, i = void 0, i = function(t, e) {
                        if ("object" !== qe(t) || null === t) return t;
                        var r = t[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var n = r.call(t, e || "default");
                            if ("object" !== qe(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(o, "string"), "symbol" === qe(i) ? i : String(i)), n)
                }
                var o, i
            }
            var ze = function() {
                    function t() {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t)
                    }
                    var e, r, n;
                    return e = t, (r = [{
                        key: "onFulfilled",
                        value: function(t) {
                            return t
                        }
                    }, {
                        key: "onRejected",
                        value: function(t) {
                            var e, r, n, o, i = t.response;
                            return i ? Promise.reject(new et(null !== (e = i.status) && void 0 !== e ? e : 400, null !== (r = null === (n = i.data) || void 0 === n ? void 0 : n.errorCode) && void 0 !== r ? r : 0, null === (o = i.data) || void 0 === o ? void 0 : o.title, i)) : Promise.reject(t)
                        }
                    }]) && Ve(e.prototype, r), n && Ve(e, n), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), t
                }(),
                Ke = "games-star-lotto";
            const Ye = function(t) {
                var e = [new p, new w, new E, new L, new F, new q],
                    r = [new ze, new ht];
                return Pt(Ke, e, r, t)
            };

            function Ze(t) {
                return Ze = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, Ze(t)
            }

            function Xe(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function Je(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Xe(Object(r), !0).forEach((function(e) {
                        Qe(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Xe(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function Qe(t, e, r) {
                return (e = er(e)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function tr(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, er(n.key), n)
                }
            }

            function er(t) {
                var e = function(t, e) {
                    if ("object" !== Ze(t) || null === t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" !== Ze(n)) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" === Ze(e) ? e : String(e)
            }
            var rr = function(t) {
                    var e, r, n, o;
                    return Promise.reject(new et(null !== (e = t.status) && void 0 !== e ? e : 400, null !== (r = null === (n = t.data) || void 0 === n ? void 0 : n.ErrorCode) && void 0 !== r ? r : 0, null === (o = t.data) || void 0 === o ? void 0 : o.Error, t))
                },
                nr = function() {
                    function t() {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t)
                    }
                    var e, r, n;
                    return e = t, (r = [{
                        key: "onFulfilled",
                        value: function(t) {
                            var e = t.data;
                            return 400 === t.status ? rr(t) : Je(Je({}, t), {}, {
                                data: e
                            })
                        }
                    }, {
                        key: "onRejected",
                        value: function(t) {
                            return t.response ? rr(t.response) : Promise.reject(t)
                        }
                    }]) && tr(e.prototype, r), n && tr(e, n), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), t
                }(),
                or = "rest-core";
            const ir = function(t) {
                var e = [new w],
                    r = [new nr, new ht];
                return Pt(or, e, r, t)
            };

            function ar(t) {
                return ar = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, ar(t)
            }

            function sr(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, (o = n.key, i = void 0, i = function(t, e) {
                        if ("object" !== ar(t) || null === t) return t;
                        var r = t[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var n = r.call(t, e || "default");
                            if ("object" !== ar(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(o, "string"), "symbol" === ar(i) ? i : String(i)), n)
                }
                var o, i
            }
            var cr = function() {
                    function t() {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t)
                    }
                    var e, r, n;
                    return e = t, (r = [{
                        key: "onFulfilled",
                        value: function(t) {
                            return t
                        }
                    }, {
                        key: "onRejected",
                        value: function(t) {
                            var e, r, n, o, i = t.response;
                            return i ? Promise.reject(new et(null !== (e = i.status) && void 0 !== e ? e : 400, null !== (r = null === (n = i.data) || void 0 === n ? void 0 : n.errorCode) && void 0 !== r ? r : 0, null === (o = i.data) || void 0 === o ? void 0 : o.title, i)) : Promise.reject(t)
                        }
                    }]) && sr(e.prototype, r), n && sr(e, n), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), t
                }(),
                ur = "games-jackpot-wheel";
            const lr = function(t) {
                var e = [new p, new w, new E, new L],
                    r = [new cr, new ht];
                return Pt(ur, e, r, t)
            };
            var fr = "games-demo-twenty-one";
            const hr = function(t) {
                var e = [new Bt, new w, new E, new L, new F, new q],
                    r = [new Mt, new ht];
                return Pt(fr, e, r, t)
            };
            var pr;

            function dr(t) {
                return dr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, dr(t)
            }

            function mr(t, e, r) {
                return (e = function(t) {
                    var e = function(t, e) {
                        if ("object" !== dr(t) || null === t) return t;
                        var r = t[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var n = r.call(t, e || "default");
                            if ("object" !== dr(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(t, "string");
                    return "symbol" === dr(e) ? e : String(e)
                }(e)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
            var vr = (mr(pr = {}, xt, Et), mr(pr, kt, Tt), mr(pr, Ut, $t), mr(pr, Wt, Ht), mr(pr, Jt, Qt), mr(pr, te, ee), mr(pr, qt, Vt), mr(pr, Zt, Xt), mr(pr, le, fe), mr(pr, me, ve), mr(pr, we, Se), mr(pr, Oe, _e), mr(pr, Ce, je), mr(pr, Le, Ie), mr(pr, We, He), mr(pr, Ke, Ye), mr(pr, ur, lr), mr(pr, or, ir), mr(pr, fr, hr), pr);
            const yr = {
                SWIRLY_SPIN: {
                    id: 464,
                    name: "SwirlySpin",
                    serviceApi: {
                        location: Ut
                    },
                    webglRequired: !0
                },
                AVENGERS_SCRATCH: {
                    id: 401,
                    name: "AvengersScratch"
                },
                MAYAN_TOMB: {
                    id: 439,
                    webglRequired: !0,
                    name: "MayanTomb"
                },
                MONEY_WHEEL: {
                    id: 85,
                    name: "MoneyWheel"
                },
                HIGHER_LOWER: {
                    id: 127,
                    name: "HigherLower"
                },
                HIGHER_LOWER_ALT: {
                    id: 434,
                    name: "HigherLowerAlt"
                },
                DICE: {
                    id: 66,
                    name: "Dice",
                    webglRequired: !0,
                    serviceApi: {
                        location: le
                    }
                },
                EASTERN_NIGHT: {
                    id: 386,
                    name: "EasternNight"
                },
                WITCH: {
                    id: 202,
                    name: "Witch"
                },
                MUNDIAL: {
                    id: 482,
                    name: "Mundial",
                    webglRequired: !0,
                    serviceApi: {
                        location: Ut
                    }
                },
                FLIP_CARD: {
                    id: 517,
                    name: "FlipCard",
                    webglRequired: !0,
                    serviceApi: {
                        location: Le
                    }
                },
                TEXAS: {
                    id: 484,
                    name: "Texas",
                    webglRequired: !0,
                    serviceApi: {
                        location: xt
                    }
                },
                SNOW_WHEEL: {
                    id: 492,
                    name: "SnowWheel",
                    webglRequired: !0
                },
                VAMPIRE_CURSE: {
                    id: 456,
                    name: "VampireCurse",
                    webglRequired: !0,
                    serviceApi: {
                        location: Ut,
                        demoLocation: Wt
                    }
                },
                FEAR_OR_WIN: {
                    id: 485,
                    name: "FearOrWin",
                    webglRequired: !0,
                    serviceApi: {
                        location: Jt
                    }
                },
                PLINKO: {
                    id: 499,
                    name: "Plinko",
                    webglRequired: !0,
                    serviceApi: {
                        location: Zt
                    }
                },
                BATTLE_CITY: {
                    id: 317,
                    name: "BattleCity"
                },
                FOUR_ACES: {
                    id: 137,
                    name: "FourAces",
                    webglRequired: !0
                },
                ROCK_SCISSOR_PAPER: {
                    id: 70,
                    name: "RockScissorPaper"
                },
                GEMS_BONANZA: {
                    id: 446,
                    name: "GemsBonanza",
                    webglRequired: !0,
                    serviceApi: {
                        location: Ut
                    }
                },
                DRAGONS_GOLD: {
                    id: 181,
                    name: "DragonsGold"
                },
                ISLAND: {
                    id: 208,
                    name: "Island"
                },
                SWAMPLAND: {
                    id: 223,
                    name: "Swampland"
                },
                MINESWEEPER: {
                    id: 224,
                    name: "Minesweeper"
                },
                FRUIT_COCKTAIL: {
                    id: 156,
                    name: "FruitCocktail"
                },
                KAMIKAZE: {
                    id: 276,
                    name: "Kamikaze"
                },
                FORTUNE_APPLE: {
                    id: 138,
                    name: "FortuneApple"
                },
                GOAL: {
                    id: 219,
                    name: "Goal"
                },
                LUCKY_SLOT: {
                    id: 241,
                    name: "LuckySlot"
                },
                FORTUNE_EIGHTEEN: {
                    id: 174,
                    name: "FortuneEighteen"
                },
                UFC: {
                    id: 220,
                    name: "UfcGame"
                },
                BOTTLE: {
                    id: 285,
                    name: "Bottle"
                },
                DRAGON: {
                    id: 196,
                    name: "Dragon"
                },
                REELS_OF_WEALTH: {
                    id: 290,
                    name: "ReelsOfWealth"
                },
                SOLITAIRE: {
                    id: 158,
                    name: "Solitaire"
                },
                WESTERN: {
                    id: 169,
                    name: "Western"
                },
                PANDORAS_SLOTS: {
                    id: 226,
                    name: "PandorasSlots"
                },
                FIVE_DICE_POKER: {
                    id: 417,
                    name: "FiveDicePoker"
                },
                RESPIN_SLOT: {
                    id: 307,
                    name: "RespinSlot"
                },
                BASKETBALL: {
                    id: 197,
                    name: "Basketball"
                },
                VEGAS_SLOTS: {
                    id: 438,
                    name: "VegasSlots"
                },
                OXO: {
                    id: 359,
                    name: "Oxo",
                    serviceApi: {
                        location: Ut,
                        demoLocation: Wt
                    }
                },
                TREASURE_FRIGHT: {
                    id: 263,
                    name: "TreasureFright"
                },
                EGG_CATCHER: {
                    id: 221,
                    name: "EggCatcher",
                    serviceApi: {
                        location: Ut,
                        demoLocation: Wt
                    }
                },
                HEADS_OR_TAILS: {
                    id: 54,
                    name: "HeadsOrTails",
                    webglRequired: !0
                },
                CASES: {
                    id: 394,
                    name: "Cases"
                },
                BOOK_OF_RA: {
                    id: 412,
                    name: "BookOfRa"
                },
                UFO_SHEEP_DEFENDER: {
                    id: 222,
                    name: "UfoSheep"
                },
                VIKINGS: {
                    id: 324,
                    name: "Vikings"
                },
                COMMANDER: {
                    id: 413,
                    name: "Commander"
                },
                MASTER_PANDA: {
                    id: 398,
                    name: "MasterPanda"
                },
                KINGS_MOVE: {
                    id: 454,
                    name: "KingsMove"
                },
                DICE_OF_RICHES: {
                    id: 339,
                    name: "DiceOfRiches"
                },
                RUSSIAN_LOTTO: {
                    id: 253,
                    name: "RussianLotto"
                },
                PLUMBER: {
                    id: 353,
                    name: "Plumber"
                },
                DIAMOND_SLOTS: {
                    id: 130,
                    name: "DiamondSlots"
                },
                CYBER2077: {
                    id: 421,
                    name: "Cyber2077"
                },
                DOTA_21: {
                    id: 431,
                    name: "TwentyOneDota",
                    serviceApi: {
                        location: Oe
                    }
                },
                OVER_UNDER: {
                    id: 69,
                    name: "OverUnder"
                },
                BATTLE_ROYALE: {
                    id: 233,
                    name: "BattleRoyale"
                },
                ROYAL_FEAST: {
                    id: 425,
                    name: "RoyalFeast"
                },
                TRIPLE_HOLDEM: {
                    id: 377,
                    name: "TripleHoldem"
                },
                TRIPLE_SEVEN: {
                    id: 68,
                    name: "TripleSeven",
                    webglRequired: !0,
                    serviceApi: {
                        location: xt
                    }
                },
                GTA: {
                    id: 230,
                    name: "Gta"
                },
                KILLER_CLUBS: {
                    id: 270,
                    name: "KillerClubs"
                },
                PENALTY: {
                    id: 418,
                    name: "Penalty",
                    serviceApi: {
                        location: Ut,
                        demoLocation: Wt
                    }
                },
                SHOOTOUT: {
                    id: 170,
                    name: "Shootout"
                },
                DELUXE_CARDS: {
                    id: 345,
                    name: "DeluxeCards"
                },
                JUNGLE_SECRETS: {
                    id: 390,
                    name: "JungleSecrets"
                },
                CRASH: {
                    id: 371,
                    name: "Crash",
                    serviceApi: {
                        location: qt
                    }
                },
                GOLD_OF_WEST: {
                    id: 117,
                    name: "GoldOfWest"
                },
                BACCARA: {
                    id: 126,
                    name: "Baccara"
                },
                TWENTY_ONE: {
                    id: 58,
                    name: "TwentyOne",
                    webglRequired: !0,
                    serviceApi: {
                        location: Oe,
                        demoLocation: fr
                    }
                },
                TWENTY_ONE_HOTS: {
                    id: 432,
                    name: "TwentyOneHots",
                    serviceApi: {
                        location: Oe
                    }
                },
                REELS_OF_GODS: {
                    id: 171,
                    name: "ReelsOfGods"
                },
                JACKPOT_GAME: {
                    id: 164,
                    name: "JackpotGame"
                },
                DOMINO: {
                    id: 128,
                    name: "Domino"
                },
                GET_BONUS: {
                    id: 167,
                    name: "GetBonus"
                },
                YAHTZEE: {
                    id: 175,
                    name: "Yahtzee"
                },
                RUSSIAN_ROULETTE: {
                    id: 76,
                    name: "RussianRoulette"
                },
                CRYSTAL: {
                    id: 249,
                    name: "Crystal",
                    serviceApi: {
                        location: Ut,
                        demoLocation: Wt
                    }
                },
                XKENO: {
                    id: 214,
                    name: "Xkeno"
                },
                WILD_FRUITS: {
                    id: 388,
                    name: "WildFruits",
                    serviceApi: {
                        location: te
                    }
                },
                MONKEYS: {
                    id: 154,
                    name: "Monkeys"
                },
                FAITH: {
                    id: 195,
                    name: "Faith"
                },
                SUPER_MARIO: {
                    id: 314,
                    name: "SuperMario"
                },
                NEW_YEAR: {
                    id: 183,
                    name: "NewYear"
                },
                SCRATCH: {
                    id: 139,
                    name: "Scratch"
                },
                PARTY: {
                    id: 72,
                    name: "Party"
                },
                BURA: {
                    id: 118,
                    name: "Bura"
                },
                SECRET_CASE: {
                    id: 297,
                    name: "SecretCase"
                },
                BLACKJACK_SWITCH: {
                    id: 357,
                    name: "BlackjackSwitch"
                },
                CRYPT_CRUSADE: {
                    id: 205,
                    name: "CryptCrusade"
                },
                TURKISH_RUMMY: {
                    id: 179,
                    name: "TurkishRummy"
                },
                BURNING_HOT: {
                    id: 373,
                    name: "BurningHot"
                },
                LUCKY_CARD: {
                    id: 122,
                    name: "LuckyCard"
                },
                JACKPOT_WHEEL: {
                    id: 496,
                    name: "JackpotWheel",
                    webglRequired: !0,
                    serviceApi: {
                        location: ur
                    }
                },
                SCRATCH_CARD: {
                    id: 189,
                    name: "ScratchCard"
                },
                RED_DOG: {
                    id: 210,
                    name: "RedDog"
                },
                HILO_TRIPLE_CHANCE: {
                    id: 269,
                    name: "HiloTripleChance"
                },
                IND_POKER: {
                    id: 184,
                    name: "IndPoker"
                },
                NERVES_OF_STEEL: {
                    id: 298,
                    name: "NervesOfSteel"
                },
                GOT: {
                    id: 168,
                    name: "Got"
                },
                THIMBLES: {
                    id: 62,
                    name: "Thimbles",
                    serviceApi: {
                        location: We
                    }
                },
                PIRATE_CHEST: {
                    id: 152,
                    name: "PirateChest"
                },
                RESIDENT: {
                    id: 74,
                    name: "Resident"
                },
                MERRY_CHRISTMAS: {
                    id: 182,
                    name: "MerryChristmas"
                },
                PIPELINE: {
                    id: 328,
                    name: "Pipeline"
                },
                BINGO_BONANZA: {
                    id: 213,
                    name: "BingoBonanza"
                },
                SPIN_AND_WIN: {
                    id: 185,
                    name: "SpinAndWin"
                },
                WHICH_HAND: {
                    id: 173,
                    name: "WhichHand"
                },
                WORLD_CUP: {
                    id: 286,
                    name: "WorldCup"
                },
                CRYPT_CRUSADE_2: {
                    id: 273,
                    name: "CryptCrusade2"
                },
                SATTAMATKA: {
                    id: 229,
                    name: "Sattamatka"
                },
                MAZZETTI: {
                    id: 212,
                    name: "Mazzetti"
                },
                AFRICAN_ROULETTE: {
                    id: 190,
                    name: "AfricanRoulette"
                },
                POSEIDON: {
                    id: 172,
                    name: "Poseidon"
                },
                PHARAOHS_KINGDOM: {
                    id: 242,
                    name: "PharaohsKingdom"
                },
                HOT_DICE: {
                    id: 341,
                    name: "HotDice"
                },
                WONDERLAND: {
                    id: 362,
                    name: "Wonderland"
                },
                BATTLESHIPS: {
                    id: 140,
                    name: "Battleships"
                },
                WALKING_DEAD: {
                    id: 188,
                    name: "WalkingDead"
                },
                STAR_LOTTO: {
                    id: 228,
                    name: "StarLotto",
                    serviceApi: {
                        location: Ke
                    }
                },
                ROYAL_HILO: {
                    id: 207,
                    name: "RoyalHiLo"
                },
                SPACE_ADVENTURE: {
                    id: 450,
                    name: "SpaceAdventure"
                },
                SETTEEMEZZO: {
                    id: 278,
                    name: "Setteemezzo"
                },
                CROWN_ANCHOR: {
                    id: 217,
                    name: "CrownAnchor"
                },
                STAR_WARS: {
                    id: 236,
                    name: "StarWars"
                },
                FORMULA_ONE: {
                    id: 312,
                    name: "FormulaOne"
                },
                TWENTY_ONE_ISO: {
                    id: 433,
                    name: "TwentyOneIso",
                    serviceApi: {
                        location: Oe
                    }
                },
                FRUIT_BLAST: {
                    id: 343,
                    name: "FruitBlast",
                    serviceApi: {
                        location: Ce
                    }
                },
                SHARP_SHOOTER: {
                    id: 262,
                    name: "SharpShooter",
                    webglRequired: !0,
                    serviceApi: {
                        location: Ut,
                        demoLocation: Wt
                    }
                },
                GREYHOUND: {
                    id: 143,
                    name: "Greyhound"
                },
                GAMES_MANIA: {
                    id: 384,
                    name: "GamesMania",
                    serviceApi: {
                        location: Ut,
                        demoLocation: Wt
                    }
                },
                MUFFINS: {
                    id: 227,
                    name: "Muffins",
                    webglRequired: !0
                },
                CARD_WAR: {
                    id: 265,
                    name: "CardWar"
                },
                SAFE: {
                    id: 40,
                    name: "Safe"
                },
                CHEST: {
                    id: 41,
                    name: "Chest"
                },
                EL_CAMINO: {
                    id: 383,
                    name: "ElCamino",
                    webglRequired: !0
                },
                LOTTERY: {
                    id: 45,
                    name: "Lottery"
                },
                MEMORY: {
                    id: 39,
                    name: "Memory"
                },
                BEAT_THE_CLOWN: {
                    id: 364,
                    name: "BeatTheClown"
                },
                SHERLOCKS_SECRET: {
                    id: 361,
                    name: "SherlocksSecret"
                },
                ANDAR_BAHAR: {
                    id: 363,
                    name: "AndarBahar",
                    webglRequired: !0,
                    serviceApi: {
                        location: Ut,
                        demoLocation: Wt
                    }
                },
                ROULETTE_PF: {
                    id: 109,
                    name: "RoulettePf"
                },
                ROULETTE: {
                    id: 142,
                    name: "Roulette"
                },
                FISHING: {
                    id: 488,
                    name: "Fishing",
                    webglRequired: !0
                },
                FORTUNA: {
                    id: 37,
                    name: "Fortuna"
                },
                GARAGE: {
                    id: 180,
                    name: "Garage",
                    webglRequired: !0
                },
                GEMS_ODYSSEY: {
                    id: 316,
                    name: "GemsOdyssey"
                },
                CARDS: {
                    id: 90,
                    name: "Cards"
                },
                DRAGON_BONUS: {
                    id: 355,
                    name: "DragonBonus"
                },
                DICE_PF: {
                    id: 35,
                    name: "DicePf"
                },
                STEAMPUNK_KINGDOM: {
                    id: 460,
                    name: "SteampunkKingdom",
                    webglRequired: !0,
                    serviceApi: {
                        location: me
                    }
                },
                DERBY: {
                    id: 116,
                    name: "Derby"
                },
                POKERLIGHT: {
                    id: 71,
                    name: "Pokerlight",
                    serviceApi: {
                        location: we
                    }
                },
                LUCKY_WHEEL: {
                    id: 311,
                    name: "LuckyWheel"
                }
            };
            const br = [yr.SAFE, yr.CHEST, yr.FORTUNA, yr.DRAGON_BONUS, yr.LOTTERY, yr.MEMORY];
            var gr = Object.values(yr).reduce((function(t, e) {
                    return t[e.id] = e, t
                }), {}),
                wr = function(t) {
                    return gr[t]
                },
                Sr = function(t) {
                    return t.Stopped = "STOPPED", t.Unavailable = "UNAVAILABLE", t.Prompt = "PROMPT", t
                }({}),
                Or = (r(15891058), r(65362469)),
                _r = r(5907454),
                Ar = r.n(_r);

            function Pr(t) {
                return Pr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, Pr(t)
            }

            function xr() {
                xr = function() {
                    return e
                };
                var t, e = {},
                    r = Object.prototype,
                    n = r.hasOwnProperty,
                    o = Object.defineProperty || function(t, e, r) {
                        t[e] = r.value
                    },
                    i = "function" == typeof Symbol ? Symbol : {},
                    a = i.iterator || "@@iterator",
                    s = i.asyncIterator || "@@asyncIterator",
                    c = i.toStringTag || "@@toStringTag";

                function u(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    u({}, "")
                } catch (t) {
                    u = function(t, e, r) {
                        return t[e] = r
                    }
                }

                function l(t, e, r, n) {
                    var i = e && e.prototype instanceof y ? e : y,
                        a = Object.create(i.prototype),
                        s = new B(n || []);
                    return o(a, "_invoke", {
                        value: x(t, r, s)
                    }), a
                }

                function f(t, e, r) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, r)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                e.wrap = l;
                var h = "suspendedStart",
                    p = "suspendedYield",
                    d = "executing",
                    m = "completed",
                    v = {};

                function y() {}

                function b() {}

                function g() {}
                var w = {};
                u(w, a, (function() {
                    return this
                }));
                var S = Object.getPrototypeOf,
                    O = S && S(S(k([])));
                O && O !== r && n.call(O, a) && (w = O);
                var _ = g.prototype = y.prototype = Object.create(w);

                function A(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        u(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function P(t, e) {
                    function r(o, i, a, s) {
                        var c = f(t[o], t, i);
                        if ("throw" !== c.type) {
                            var u = c.arg,
                                l = u.value;
                            return l && "object" == Pr(l) && n.call(l, "__await") ? e.resolve(l.__await).then((function(t) {
                                r("next", t, a, s)
                            }), (function(t) {
                                r("throw", t, a, s)
                            })) : e.resolve(l).then((function(t) {
                                u.value = t, a(u)
                            }), (function(t) {
                                return r("throw", t, a, s)
                            }))
                        }
                        s(c.arg)
                    }
                    var i;
                    o(this, "_invoke", {
                        value: function(t, n) {
                            function o() {
                                return new e((function(e, o) {
                                    r(t, n, e, o)
                                }))
                            }
                            return i = i ? i.then(o, o) : o()
                        }
                    })
                }

                function x(e, r, n) {
                    var o = h;
                    return function(i, a) {
                        if (o === d) throw new Error("Generator is already running");
                        if (o === m) {
                            if ("throw" === i) throw a;
                            return {
                                value: t,
                                done: !0
                            }
                        }
                        for (n.method = i, n.arg = a;;) {
                            var s = n.delegate;
                            if (s) {
                                var c = E(s, n);
                                if (c) {
                                    if (c === v) continue;
                                    return c
                                }
                            }
                            if ("next" === n.method) n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) {
                                if (o === h) throw o = m, n.arg;
                                n.dispatchException(n.arg)
                            } else "return" === n.method && n.abrupt("return", n.arg);
                            o = d;
                            var u = f(e, r, n);
                            if ("normal" === u.type) {
                                if (o = n.done ? m : p, u.arg === v) continue;
                                return {
                                    value: u.arg,
                                    done: n.done
                                }
                            }
                            "throw" === u.type && (o = m, n.method = "throw", n.arg = u.arg)
                        }
                    }
                }

                function E(e, r) {
                    var n = r.method,
                        o = e.iterator[n];
                    if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, E(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), v;
                    var i = f(o, e.iterator, r.arg);
                    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, v;
                    var a = i.arg;
                    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, v) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, v)
                }

                function C(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function j(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function B(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(C, this), this.reset(!0)
                }

                function k(e) {
                    if (e || "" === e) {
                        var r = e[a];
                        if (r) return r.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var o = -1,
                                i = function r() {
                                    for (; ++o < e.length;)
                                        if (n.call(e, o)) return r.value = e[o], r.done = !1, r;
                                    return r.value = t, r.done = !0, r
                                };
                            return i.next = i
                        }
                    }
                    throw new TypeError(Pr(e) + " is not iterable")
                }
                return b.prototype = g, o(_, "constructor", {
                    value: g,
                    configurable: !0
                }), o(g, "constructor", {
                    value: b,
                    configurable: !0
                }), b.displayName = u(g, c, "GeneratorFunction"), e.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === b || "GeneratorFunction" === (e.displayName || e.name))
                }, e.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, g) : (t.__proto__ = g, u(t, c, "GeneratorFunction")), t.prototype = Object.create(_), t
                }, e.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, A(P.prototype), u(P.prototype, s, (function() {
                    return this
                })), e.AsyncIterator = P, e.async = function(t, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new P(l(t, r, n, o), i);
                    return e.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, A(_), u(_, c, "Generator"), u(_, a, (function() {
                    return this
                })), u(_, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(t) {
                    var e = Object(t),
                        r = [];
                    for (var n in e) r.push(n);
                    return r.reverse(),
                        function t() {
                            for (; r.length;) {
                                var n = r.pop();
                                if (n in e) return t.value = n, t.done = !1, t
                            }
                            return t.done = !0, t
                        }
                }, e.values = k, B.prototype = {
                    constructor: B,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(j), !e)
                            for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t)
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        if (this.done) throw e;
                        var r = this;

                        function o(n, o) {
                            return s.type = "throw", s.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o
                        }
                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var a = this.tryEntries[i],
                                s = a.completion;
                            if ("root" === a.tryLoc) return o("end");
                            if (a.tryLoc <= this.prev) {
                                var c = n.call(a, "catchLoc"),
                                    u = n.call(a, "finallyLoc");
                                if (c && u) {
                                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                                } else if (c) {
                                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0)
                                } else {
                                    if (!u) throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r];
                            if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var i = o;
                                break
                            }
                        }
                        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                        var a = i ? i.completion : {};
                        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, v) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), v
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), j(r), v
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    j(r)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, r, n) {
                        return this.delegate = {
                            iterator: k(e),
                            resultName: r,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = t), v
                    }
                }, e
            }

            function Er(t, e, r, n, o, i, a) {
                try {
                    var s = t[i](a),
                        c = s.value
                } catch (u) {
                    return void r(u)
                }
                s.done ? e(c) : Promise.resolve(c).then(n, o)
            }

            function Cr(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = t.apply(e, r);

                        function a(t) {
                            Er(i, n, o, a, s, "next", t)
                        }

                        function s(t) {
                            Er(i, n, o, a, s, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }
            var jr = function(t) {
                    return t[t.active = 1] = "active", t[t.withOpen = 2] = "withOpen", t
                }({}),
                Br = function(t) {
                    for (var e = "", r = 0; r < 8; r++) {
                        var n = 4 * r,
                            o = t.slice(n, n + 4);
                        e += parseInt(o, 16).toString()
                    }
                    return e
                },
                kr = function() {
                    var t = Cr(xr().mark((function t(e, r) {
                        var n;
                        return xr().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (window === window.top) {
                                        t.next = 5;
                                        break
                                    }
                                    return t.next = 3, (0, a.emitSetRoute)({
                                        name: "game",
                                        params: {
                                            id: +e,
                                            demo: r ? 1 : 0
                                        }
                                    });
                                case 3:
                                    t.next = 8;
                                    break;
                                case 5:
                                    n = new URL(window.location.toString()), r ? n.searchParams.append("demo", "1") : n.searchParams.delete("demo"), window.history.replaceState({}, "", n);
                                case 8:
                                    return r || Ar().commit("demo/setIsModeBlockOpen", !1), t.next = 11, Ar().dispatch("demo/dispatchDemoActivated", r);
                                case 11:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function(e, r) {
                        return t.apply(this, arguments)
                    }
                }(),
                Tr = function() {
                    var t = Cr(xr().mark((function t() {
                        var e, r, n, o;
                        return xr().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, (0, Or.load)();
                                case 2:
                                    return e = t.sent, t.next = 5, e.get();
                                case 5:
                                    return r = t.sent, n = r.visitorId, o = Br(n), Ar().commit("demo/setFingerprint", o), t.abrupt("return", o);
                                case 10:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function() {
                        return t.apply(this, arguments)
                    }
                }(),
                Lr = function() {
                    var t = Cr(xr().mark((function t(e, r, n, o) {
                        var i, a, s, c, u, l, f, h = arguments;
                        return xr().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (i = h.length > 4 && void 0 !== h[4] && h[4], r) {
                                        t.next = 5;
                                        break
                                    }
                                    return t.next = 4, kr(n, !1);
                                case 4:
                                    return t.abrupt("return");
                                case 5:
                                    if (s = (a = e).minAmount, c = a.maxAmount, u = a.balance, l = a.currencyCode, f = a.bets, !(u < s) || i) {
                                        t.next = 11;
                                        break
                                    }
                                    return Ar().commit("demo/setDemoTip", Sr.Unavailable), t.next = 10, kr(n, !1);
                                case 10:
                                    return t.abrupt("return");
                                case 11:
                                    Ar().commit("demo/setDemoCurrency", l), Ar().commit("demo/setDemoBets", f), Ar().commit("demo/setDemoGame", {
                                        balance: u,
                                        minAmount: s,
                                        maxAmount: c
                                    }), Ar().commit("demo/setIsDemoGameUnfinished", i), Ar().getters["application/isMobileView"] || Ar().state.demo.isModeBlockOpen || Ar().commit("demo/setIsModeBlockOpen", o === jr.withOpen);
                                case 16:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function(e, r, n, o) {
                        return t.apply(this, arguments)
                    }
                }();
            var Ir = {
                    extends: {
                        data: function() {
                            return {
                                errorCallbacks: {
                                    158225: void 0,
                                    160428: this.errorUpdateGame,
                                    160431: this.errorRefreshGame,
                                    160429: this.errorStateGame
                                }
                            }
                        },
                        methods: {
                            errorUpdateGame: function() {},
                            errorRefreshGame: function() {},
                            errorStateGame: function() {}
                        }
                    },
                    methods: {
                        errorCallbackHandler: function(t) {
                            var e, r = null === (e = t.response) || void 0 === e || null === (e = e.data) || void 0 === e ? void 0 : e.errorCode;
                            r && this.errorCallbacks[r] && this.errorCallbacks[r]()
                        },
                        getRequestError: function(t) {
                            var e, r, n, o, i = function(t) {
                                return {
                                    title: t
                                }
                            };
                            if (t.serviceApiMessage) return i(t.serviceApiMessage);
                            if (401 === (null === (e = t.response) || void 0 === e ? void 0 : e.status)) return i(this.$t("common.connectionError"));
                            if (400 === (null === (r = t.response) || void 0 === r ? void 0 : r.status) && (null === (n = t.response) || void 0 === n || null === (n = n.data) || void 0 === n || null === (n = n.error) || void 0 === n || !n.title)) return i(this.$t("common.errorDefault"));
                            var a = null === (o = t.response) || void 0 === o || null === (o = o.data) || void 0 === o ? void 0 : o.error;
                            if (a) {
                                var s = a.data,
                                    c = (void 0 === s ? {} : s).translation;
                                if (c) return i(this.$t(c.key, c.params));
                                if (a.title) return i(a.title)
                            }
                            return t.response ? i(this.$t("common.errorDefault")) : i(this.$t("common.errorNetwork"))
                        }
                    }
                },
                Gr = r(7025295),
                Rr = r(16747037),
                Dr = r.n(Rr),
                Nr = r(54436511),
                Fr = r(26608302);
            r(25569720), r(91491038), r(13477601);
            const Mr = {
                namespaced: !0,
                state: function() {
                    return {
                        balanceGame: 0,
                        costGame: 0,
                        countPay: 1,
                        denied: !1,
                        payByPromoPoints: !1,
                        promoPoints: 0,
                        isPromoOnly: !1
                    }
                },
                mutations: {
                    setBalanceGame: function(t, e) {
                        t.balanceGame = e
                    },
                    setCostGame: function(t, e) {
                        t.costGame = e
                    },
                    setCountPay: function(t, e) {
                        t.countPay = e
                    },
                    setDenied: function(t, e) {
                        t.denied = e
                    },
                    setTypeOfPurchase: function(t, e) {
                        t.payByPromoPoints = e
                    },
                    setPromoPoints: function(t, e) {
                        t.promoPoints = e
                    },
                    setPromoOnly: function(t, e) {
                        t.isPromoOnly = e
                    }
                },
                getters: {
                    payByPromoPoints: function(t) {
                        return t.payByPromoPoints
                    },
                    balanceGame: function(t) {
                        return t.balanceGame
                    },
                    costGame: function(t) {
                        return t.costGame
                    },
                    countPay: function(t) {
                        return t.countPay
                    },
                    denied: function(t) {
                        return t.denied
                    },
                    promoPoints: function(t) {
                        return t.promoPoints
                    },
                    isPromoOnly: function(t) {
                        return t.isPromoOnly
                    }
                }
            };

            function Ur(t) {
                return Ur = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, Ur(t)
            }

            function $r(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != r) {
                        var n, o, i, a, s = [],
                            c = !0,
                            u = !1;
                        try {
                            if (i = (r = r.call(t)).next, 0 === e) {
                                if (Object(r) !== r) return;
                                c = !1
                            } else
                                for (; !(c = (n = i.call(r)).done) && (s.push(n.value), s.length !== e); c = !0);
                        } catch (t) {
                            u = !0, o = t
                        } finally {
                            try {
                                if (!c && null != r.return && (a = r.return(), Object(a) !== a)) return
                            } finally {
                                if (u) throw o
                            }
                        }
                        return s
                    }
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return Wr(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === r && t.constructor && (r = t.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(t);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Wr(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Wr(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function Hr() {
                Hr = function() {
                    return e
                };
                var t, e = {},
                    r = Object.prototype,
                    n = r.hasOwnProperty,
                    o = Object.defineProperty || function(t, e, r) {
                        t[e] = r.value
                    },
                    i = "function" == typeof Symbol ? Symbol : {},
                    a = i.iterator || "@@iterator",
                    s = i.asyncIterator || "@@asyncIterator",
                    c = i.toStringTag || "@@toStringTag";

                function u(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    u({}, "")
                } catch (t) {
                    u = function(t, e, r) {
                        return t[e] = r
                    }
                }

                function l(t, e, r, n) {
                    var i = e && e.prototype instanceof y ? e : y,
                        a = Object.create(i.prototype),
                        s = new B(n || []);
                    return o(a, "_invoke", {
                        value: x(t, r, s)
                    }), a
                }

                function f(t, e, r) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, r)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                e.wrap = l;
                var h = "suspendedStart",
                    p = "suspendedYield",
                    d = "executing",
                    m = "completed",
                    v = {};

                function y() {}

                function b() {}

                function g() {}
                var w = {};
                u(w, a, (function() {
                    return this
                }));
                var S = Object.getPrototypeOf,
                    O = S && S(S(k([])));
                O && O !== r && n.call(O, a) && (w = O);
                var _ = g.prototype = y.prototype = Object.create(w);

                function A(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        u(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function P(t, e) {
                    function r(o, i, a, s) {
                        var c = f(t[o], t, i);
                        if ("throw" !== c.type) {
                            var u = c.arg,
                                l = u.value;
                            return l && "object" == Ur(l) && n.call(l, "__await") ? e.resolve(l.__await).then((function(t) {
                                r("next", t, a, s)
                            }), (function(t) {
                                r("throw", t, a, s)
                            })) : e.resolve(l).then((function(t) {
                                u.value = t, a(u)
                            }), (function(t) {
                                return r("throw", t, a, s)
                            }))
                        }
                        s(c.arg)
                    }
                    var i;
                    o(this, "_invoke", {
                        value: function(t, n) {
                            function o() {
                                return new e((function(e, o) {
                                    r(t, n, e, o)
                                }))
                            }
                            return i = i ? i.then(o, o) : o()
                        }
                    })
                }

                function x(e, r, n) {
                    var o = h;
                    return function(i, a) {
                        if (o === d) throw new Error("Generator is already running");
                        if (o === m) {
                            if ("throw" === i) throw a;
                            return {
                                value: t,
                                done: !0
                            }
                        }
                        for (n.method = i, n.arg = a;;) {
                            var s = n.delegate;
                            if (s) {
                                var c = E(s, n);
                                if (c) {
                                    if (c === v) continue;
                                    return c
                                }
                            }
                            if ("next" === n.method) n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) {
                                if (o === h) throw o = m, n.arg;
                                n.dispatchException(n.arg)
                            } else "return" === n.method && n.abrupt("return", n.arg);
                            o = d;
                            var u = f(e, r, n);
                            if ("normal" === u.type) {
                                if (o = n.done ? m : p, u.arg === v) continue;
                                return {
                                    value: u.arg,
                                    done: n.done
                                }
                            }
                            "throw" === u.type && (o = m, n.method = "throw", n.arg = u.arg)
                        }
                    }
                }

                function E(e, r) {
                    var n = r.method,
                        o = e.iterator[n];
                    if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, E(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), v;
                    var i = f(o, e.iterator, r.arg);
                    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, v;
                    var a = i.arg;
                    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, v) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, v)
                }

                function C(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function j(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function B(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(C, this), this.reset(!0)
                }

                function k(e) {
                    if (e || "" === e) {
                        var r = e[a];
                        if (r) return r.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var o = -1,
                                i = function r() {
                                    for (; ++o < e.length;)
                                        if (n.call(e, o)) return r.value = e[o], r.done = !1, r;
                                    return r.value = t, r.done = !0, r
                                };
                            return i.next = i
                        }
                    }
                    throw new TypeError(Ur(e) + " is not iterable")
                }
                return b.prototype = g, o(_, "constructor", {
                    value: g,
                    configurable: !0
                }), o(g, "constructor", {
                    value: b,
                    configurable: !0
                }), b.displayName = u(g, c, "GeneratorFunction"), e.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === b || "GeneratorFunction" === (e.displayName || e.name))
                }, e.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, g) : (t.__proto__ = g, u(t, c, "GeneratorFunction")), t.prototype = Object.create(_), t
                }, e.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, A(P.prototype), u(P.prototype, s, (function() {
                    return this
                })), e.AsyncIterator = P, e.async = function(t, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new P(l(t, r, n, o), i);
                    return e.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, A(_), u(_, c, "Generator"), u(_, a, (function() {
                    return this
                })), u(_, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(t) {
                    var e = Object(t),
                        r = [];
                    for (var n in e) r.push(n);
                    return r.reverse(),
                        function t() {
                            for (; r.length;) {
                                var n = r.pop();
                                if (n in e) return t.value = n, t.done = !1, t
                            }
                            return t.done = !0, t
                        }
                }, e.values = k, B.prototype = {
                    constructor: B,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(j), !e)
                            for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t)
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        if (this.done) throw e;
                        var r = this;

                        function o(n, o) {
                            return s.type = "throw", s.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o
                        }
                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var a = this.tryEntries[i],
                                s = a.completion;
                            if ("root" === a.tryLoc) return o("end");
                            if (a.tryLoc <= this.prev) {
                                var c = n.call(a, "catchLoc"),
                                    u = n.call(a, "finallyLoc");
                                if (c && u) {
                                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                                } else if (c) {
                                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0)
                                } else {
                                    if (!u) throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r];
                            if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var i = o;
                                break
                            }
                        }
                        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                        var a = i ? i.completion : {};
                        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, v) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), v
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), j(r), v
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    j(r)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, r, n) {
                        return this.delegate = {
                            iterator: k(e),
                            resultName: r,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = t), v
                    }
                }, e
            }

            function qr(t, e, r, n, o, i, a) {
                try {
                    var s = t[i](a),
                        c = s.value
                } catch (u) {
                    return void r(u)
                }
                s.done ? e(c) : Promise.resolve(c).then(n, o)
            }

            function Vr(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = t.apply(e, r);

                        function a(t) {
                            qr(i, n, o, a, s, "next", t)
                        }

                        function s(t) {
                            qr(i, n, o, a, s, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }

            function zr(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function Kr(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? zr(Object(r), !0).forEach((function(e) {
                        Yr(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : zr(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function Yr(t, e, r) {
                return (e = function(t) {
                    var e = function(t, e) {
                        if ("object" !== Ur(t) || null === t) return t;
                        var r = t[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var n = r.call(t, e || "default");
                            if ("object" !== Ur(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(t, "string");
                    return "symbol" === Ur(e) ? e : String(e)
                }(e)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
            const Zr = {
                computed: Kr(Kr(Kr(Kr(Kr(Kr({}, (0, o.mapState)("demo", ["demoCurrencyCode"])), (0, o.mapGetters)("application", ["isMobileView"])), (0, o.mapGetters)("user", ["mainAccount", "activeAccount"])), (0, o.mapGetters)("demo", ["isDemo"])), (0, o.mapGetters)("currency", ["defaultCurrency"])), {}, {
                    isRouteBonusGame: function() {
                        return t = Number(this.$route.params.gameId), br.some((function(e) {
                            return e.id === t
                        }));
                        var t
                    },
                    demoExcludedBuilds: function() {
                        return s.BUILD_NAME_IS.MOBILE_APP_DEFAULT || s.BUILD_NAME_IS.B2B
                    }
                }),
                beforeMount: function() {
                    this.isRouteBonusGame && !this.$store.state.bonusGame && this.$store.registerModule("bonusGame", Mr)
                },
                beforeDestroy: function() {
                    this.isRouteBonusGame && this.$store.state.bonusGame && this.$store.unregisterModule("bonusGame")
                },
                methods: {
                    gameRequest: function(t, e) {
                        return Vr(Hr().mark((function r() {
                            var n;
                            return Hr().wrap((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        return r.next = 2, i.apiClient.get("games/".concat(e), {
                                            headers: t
                                        });
                                    case 2:
                                        return n = r.sent, r.abrupt("return", n.data.data);
                                    case 4:
                                    case "end":
                                        return r.stop()
                                }
                            }), r)
                        })))()
                    },
                    loadGameData: function() {
                        var t = this;
                        return Vr(Hr().mark((function e() {
                            var r, n, o, i, s, c, u, l, f, h, p, d, m, v, y, b, g, w, S, O, _, A, P, x, E, C, j, B, k, T, L, I, G, R, D, N, F, M;
                            return Hr().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (o = null === (r = wr(Number(t.$route.params.gameId))) || void 0 === r ? void 0 : r.name, !(i = !t.demoExcludedBuilds && t.isDemo && !Number(t.$route.query.wg))) {
                                            e.next = 9;
                                            break
                                        }
                                        return e.next = 5, Tr();
                                    case 5:
                                        e.t1 = e.sent, e.t0 = {
                                            fingerprint: e.t1
                                        }, e.next = 10;
                                        break;
                                    case 9:
                                        e.t0 = {};
                                    case 10:
                                        return s = e.t0, e.prev = 11, e.next = 14, t.gameRequest(s, o);
                                    case 14:
                                        if (c = e.sent, !i || c) {
                                            e.next = 24;
                                            break
                                        }
                                        return i = !1, s = {}, t.$store.commit("demo/setDemoError", !0), e.next = 21, kr(t.$route.params.gameId, !1);
                                    case 21:
                                        return e.next = 23, t.gameRequest({}, o);
                                    case 23:
                                        c = e.sent;
                                    case 24:
                                        e.next = 29;
                                        break;
                                    case 26:
                                        e.prev = 26, e.t2 = e.catch(11), 401 === (null === e.t2 || void 0 === e.t2 || null === (u = e.t2.response) || void 0 === u ? void 0 : u.status) && (t.$router.replace({
                                            name: "ErrorPage"
                                        }), t.showAuthErrorPopup());
                                    case 29:
                                        if (c) {
                                            e.next = 31;
                                            break
                                        }
                                        throw new Error("game: ".concat(o, " not found"));
                                    case 31:
                                        if (f = (l = c).game, h = l.user, p = void 0 === h ? null : h, d = l.games, m = l.tags, v = l.regionName, y = void 0 === v ? "" : v, b = l.userSession, g = f.id, w = f.name, S = f.maximumBetAmount, O = f.minimumBetAmount, _ = f.offeredBetAmounts, A = f.isBonusAccountAllowed, P = f.coefficients, x = void 0 === P ? [] : P, E = f.lastUnfinishedGame, C = void 0 === E ? null : E, j = f.isDemoAvailable, B = void 0 !== j && j, k = f.balance, T = void 0 === k ? {} : k, L = f.categories, I = void 0 === L ? [] : L, G = f.demo, R = void 0 === G ? {} : G, D = !!C && 0 !== Object.entries(C).filter((function(t) {
                                                return "time" !== $r(t, 1)[0]
                                            })).length, !i) {
                                            e.next = 37;
                                            break
                                        }
                                        return e.next = 37, Lr(R, B, g, Number(t.$route.query.demo), D);
                                    case 37:
                                        if (b && ((N = new URL(window.location.href)).searchParams.set("ut", b), window.history.replaceState(null, null, N)), F = t.isDemo ? t.demoCurrencyCode : (null == p || null === (n = p.accounts.find((function(t) {
                                                return !0 === t.isActive
                                            }))) || void 0 === n ? void 0 : n.currency.code) || t.defaultCurrency.code, t.isRouteBonusGame && (t.$store.commit("bonusGame/setPromoPoints", T.PT), t.$store.commit("bonusGame/setBalanceGame", T.RT), t.$store.commit("bonusGame/setCostGame", T.PR), t.$store.commit("bonusGame/setDenied", T.ZP)), g && Number(g) === Number(t.$route.params.gameId)) {
                                            e.next = 43;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 43:
                                        return document.title = w, (0, a.emitSetPageTitle)({
                                            title: w
                                        }), t.$store.commit("common/setAllGamesConfig", d), t.$store.commit("common/setTags", m), t.$store.commit("common/setIsWidget", Number(t.$route.query.wg)), p && (t.$store.commit("user/setAccounts", p.accounts), t.$store.commit("user/setGuid", p.guid)), t.$store.commit("betsButtons/setOfferedBets", _), t.$store.commit("game/setInternalGameName", o), t.$store.commit("game/setGameName", w), t.$store.commit("game/setGameCurrencyCode", F), t.$store.commit("game/setMaxMinBets", [O, S]), t.$store.commit("game/setGameCoefs", x), t.$store.commit("game/setLastUnfinishedGame", C), t.$store.commit("game/setDefaultHideSelectBonusAccount", !A), t.$store.commit("game/setCategories", I), M = "w", "Africa" === y && (M = "b"), "Asia" === y && (M = "a"), t.$store.commit("game/setGirlPostfix", M), e.abrupt("return", c);
                                    case 63:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [11, 26]
                            ])
                        })))()
                    }
                }
            };
            var Xr = r(72126228);

            function Jr(t) {
                return Jr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, Jr(t)
            }

            function Qr() {
                Qr = function() {
                    return e
                };
                var t, e = {},
                    r = Object.prototype,
                    n = r.hasOwnProperty,
                    o = Object.defineProperty || function(t, e, r) {
                        t[e] = r.value
                    },
                    i = "function" == typeof Symbol ? Symbol : {},
                    a = i.iterator || "@@iterator",
                    s = i.asyncIterator || "@@asyncIterator",
                    c = i.toStringTag || "@@toStringTag";

                function u(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    u({}, "")
                } catch (t) {
                    u = function(t, e, r) {
                        return t[e] = r
                    }
                }

                function l(t, e, r, n) {
                    var i = e && e.prototype instanceof y ? e : y,
                        a = Object.create(i.prototype),
                        s = new B(n || []);
                    return o(a, "_invoke", {
                        value: x(t, r, s)
                    }), a
                }

                function f(t, e, r) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, r)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                e.wrap = l;
                var h = "suspendedStart",
                    p = "suspendedYield",
                    d = "executing",
                    m = "completed",
                    v = {};

                function y() {}

                function b() {}

                function g() {}
                var w = {};
                u(w, a, (function() {
                    return this
                }));
                var S = Object.getPrototypeOf,
                    O = S && S(S(k([])));
                O && O !== r && n.call(O, a) && (w = O);
                var _ = g.prototype = y.prototype = Object.create(w);

                function A(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        u(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function P(t, e) {
                    function r(o, i, a, s) {
                        var c = f(t[o], t, i);
                        if ("throw" !== c.type) {
                            var u = c.arg,
                                l = u.value;
                            return l && "object" == Jr(l) && n.call(l, "__await") ? e.resolve(l.__await).then((function(t) {
                                r("next", t, a, s)
                            }), (function(t) {
                                r("throw", t, a, s)
                            })) : e.resolve(l).then((function(t) {
                                u.value = t, a(u)
                            }), (function(t) {
                                return r("throw", t, a, s)
                            }))
                        }
                        s(c.arg)
                    }
                    var i;
                    o(this, "_invoke", {
                        value: function(t, n) {
                            function o() {
                                return new e((function(e, o) {
                                    r(t, n, e, o)
                                }))
                            }
                            return i = i ? i.then(o, o) : o()
                        }
                    })
                }

                function x(e, r, n) {
                    var o = h;
                    return function(i, a) {
                        if (o === d) throw new Error("Generator is already running");
                        if (o === m) {
                            if ("throw" === i) throw a;
                            return {
                                value: t,
                                done: !0
                            }
                        }
                        for (n.method = i, n.arg = a;;) {
                            var s = n.delegate;
                            if (s) {
                                var c = E(s, n);
                                if (c) {
                                    if (c === v) continue;
                                    return c
                                }
                            }
                            if ("next" === n.method) n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) {
                                if (o === h) throw o = m, n.arg;
                                n.dispatchException(n.arg)
                            } else "return" === n.method && n.abrupt("return", n.arg);
                            o = d;
                            var u = f(e, r, n);
                            if ("normal" === u.type) {
                                if (o = n.done ? m : p, u.arg === v) continue;
                                return {
                                    value: u.arg,
                                    done: n.done
                                }
                            }
                            "throw" === u.type && (o = m, n.method = "throw", n.arg = u.arg)
                        }
                    }
                }

                function E(e, r) {
                    var n = r.method,
                        o = e.iterator[n];
                    if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, E(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), v;
                    var i = f(o, e.iterator, r.arg);
                    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, v;
                    var a = i.arg;
                    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, v) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, v)
                }

                function C(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function j(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function B(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(C, this), this.reset(!0)
                }

                function k(e) {
                    if (e || "" === e) {
                        var r = e[a];
                        if (r) return r.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var o = -1,
                                i = function r() {
                                    for (; ++o < e.length;)
                                        if (n.call(e, o)) return r.value = e[o], r.done = !1, r;
                                    return r.value = t, r.done = !0, r
                                };
                            return i.next = i
                        }
                    }
                    throw new TypeError(Jr(e) + " is not iterable")
                }
                return b.prototype = g, o(_, "constructor", {
                    value: g,
                    configurable: !0
                }), o(g, "constructor", {
                    value: b,
                    configurable: !0
                }), b.displayName = u(g, c, "GeneratorFunction"), e.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === b || "GeneratorFunction" === (e.displayName || e.name))
                }, e.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, g) : (t.__proto__ = g, u(t, c, "GeneratorFunction")), t.prototype = Object.create(_), t
                }, e.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, A(P.prototype), u(P.prototype, s, (function() {
                    return this
                })), e.AsyncIterator = P, e.async = function(t, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new P(l(t, r, n, o), i);
                    return e.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, A(_), u(_, c, "Generator"), u(_, a, (function() {
                    return this
                })), u(_, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(t) {
                    var e = Object(t),
                        r = [];
                    for (var n in e) r.push(n);
                    return r.reverse(),
                        function t() {
                            for (; r.length;) {
                                var n = r.pop();
                                if (n in e) return t.value = n, t.done = !1, t
                            }
                            return t.done = !0, t
                        }
                }, e.values = k, B.prototype = {
                    constructor: B,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(j), !e)
                            for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t)
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        if (this.done) throw e;
                        var r = this;

                        function o(n, o) {
                            return s.type = "throw", s.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o
                        }
                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var a = this.tryEntries[i],
                                s = a.completion;
                            if ("root" === a.tryLoc) return o("end");
                            if (a.tryLoc <= this.prev) {
                                var c = n.call(a, "catchLoc"),
                                    u = n.call(a, "finallyLoc");
                                if (c && u) {
                                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                                } else if (c) {
                                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0)
                                } else {
                                    if (!u) throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r];
                            if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var i = o;
                                break
                            }
                        }
                        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                        var a = i ? i.completion : {};
                        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, v) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), v
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), j(r), v
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    j(r)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, r, n) {
                        return this.delegate = {
                            iterator: k(e),
                            resultName: r,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = t), v
                    }
                }, e
            }

            function tn(t, e, r, n, o, i, a) {
                try {
                    var s = t[i](a),
                        c = s.value
                } catch (u) {
                    return void r(u)
                }
                s.done ? e(c) : Promise.resolve(c).then(n, o)
            }

            function en(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = t.apply(e, r);

                        function a(t) {
                            tn(i, n, o, a, s, "next", t)
                        }

                        function s(t) {
                            tn(i, n, o, a, s, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }

            function rn(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function nn(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? rn(Object(r), !0).forEach((function(e) {
                        on(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : rn(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function on(t, e, r) {
                return (e = function(t) {
                    var e = function(t, e) {
                        if ("object" !== Jr(t) || null === t) return t;
                        var r = t[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var n = r.call(t, e || "default");
                            if ("object" !== Jr(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(t, "string");
                    return "symbol" === Jr(e) ? e : String(e)
                }(e)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
            const an = {
                mixins: [Nr.e, Zr, Xr.Z],
                computed: nn(nn(nn(nn(nn(nn(nn(nn(nn(nn(nn({}, (0, o.mapGetters)("project", ["hotContentsEnabled"])), (0, o.mapState)("demo", ["demoCurrencyCode"])), (0, o.mapState)("demo", ["demoCurrencyCode"])), (0, o.mapGetters)("game", ["internalGameName", "gameStarted", "blockedActivity", "gameAccountId", "gameAccountBalance"])), (0, o.mapGetters)("bonusGame", ["promoPoints"])), (0, o.mapGetters)("user", ["getAccountById", "activeAccountCurrency", "activeAccountId"])), (0, o.mapGetters)("bonuses", ["bonusId"])), (0, o.mapGetters)("currency", ["currentCurrency"])), (0, o.mapGetters)("preloader", ["isShown"])), (0, o.mapGetters)("demo", ["isDemo", "demoBalance"])), {}, {
                    checkBlockedGame: function() {
                        return !this.calculatedSumBet && !this.bonusFreeBetIsActive
                    }
                }),
                watch: {
                    gameStarted: function(t) {
                        this.emitShowGameStateByGameStatus(t)
                    }
                },
                created: function() {
                    var t = this;
                    this.$eventBus.$on("close-popup", (function(e) {
                        "ProxyResultGame" === e && t.closeResultPopupCallback()
                    })), (0, u.addUserAuthHandler)((function(e) {
                        if (t.$route.query.ut !== e) {
                            var r = {
                                query: nn(nn({}, t.$route.query), {}, {
                                    ut: e
                                })
                            };
                            t.setToken(e), t.$router.push(r)
                        }
                    })), (0, u.addUserLogoutHandler)((function() {
                        t.setToken("")
                    })), (0, u.addChangeUserActiveAccount)(this.onChangeUserActiveAccount.bind(this))
                },
                beforeMount: function() {
                    0
                },
                mounted: function() {
                    var t = this;
                    return en(Qr().mark((function e() {
                        return Qr().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, t.$updateFrame();
                                case 2:
                                    t.customMakeAdditionalAssetsReadyOnMounted(), t.onPreloaderHide(t.hidePreloaderCallback);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))()
                },
                methods: nn(nn(nn(nn(nn(nn({}, (0, o.mapMutations)("game", ["setGameStarted", "setBlockedActivity", "setGameAccountId", "setGameAccountBalance", "clearGameAccountId", "setGameCurrencyCode", "setSelectedBonusAccount", "setIsGameStateInited", "setEnableAutogame"])), (0, o.mapMutations)("bonusGame", ["setPromoPoints"])), (0, o.mapMutations)("resultGame", ["setResultMsg"])), (0, o.mapMutations)("user", ["setIsUserAuthProcessed", "setToken"])), (0, o.mapActions)("resultGame", ["setResult", "clearResult"])), {}, {
                    showDefaultResultPopup: function() {
                        var t = this,
                            e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                            o = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                        r.e(10368095).then(r.bind(r, 3197960)).then((function(r) {
                            t.defaultOpenModal(r, "ProxyResultGame", e, n, o)
                        }))
                    },
                    hidePreloaderCallback: function() {
                        var t = this;
                        return en(Qr().mark((function e() {
                            return Qr().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t.customAfterHidePreloader(), e.next = 3, t.resetPrevGameFromStore();
                                    case 3:
                                        t.gameStarted || t.emitShowGameStateByGameStatus();
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    },
                    restoreBonus: function() {},
                    customMakeAdditionalAssetsReadyOnMounted: function() {
                        (0, Fr.makeAdditionalAssetsReady)()
                    },
                    customAfterHidePreloader: function() {},
                    closeResultPopupCallback: function() {},
                    resetPrevGame: function() {},
                    showGameRulesPopup: function(t) {
                        var e = this,
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        r.e(92123703).then(r.bind(r, 11909766)).then((function(r) {
                            e.defaultOpenModal(r, "ProxyRules", nn(nn({}, n), {}, {
                                internalGameName: e.internalGameName,
                                name: Dr()(t) ? t : void 0
                            }))
                        }))
                    },
                    getAccountIdFromGame: function() {
                        var t, e, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return null != r && r.AI ? r.AI : null != r && null !== (t = r.Game) && void 0 !== t && t.AI ? r.Game.AI : null != r && null !== (e = r.GAME) && void 0 !== e && e.AI ? r.GAME.AI : null != r && r.BAC ? r.BAC : null != r && r.UI ? r.UI : 0
                    },
                    getAccountBalanceFromGame: function(t) {
                        var e, r, n, o, i, a;
                        return null != t && t.AB ? t.AB : null != t && t.NB ? t.NB : null != t && null !== (e = t.Game) && void 0 !== e && e.NB ? t.Game.NB : null != t && null !== (r = t.GAME) && void 0 !== r && r.NB ? t.GAME.NB : null != t && null !== (n = t.GAME) && void 0 !== n && n.BL ? t.GAME.BL : t.BA ? t.BA : t.BL ? t.BL : null != t && null !== (o = t.Balance) && void 0 !== o && o.BalanceAfter ? t.Balance.BalanceAfter : null != t && null !== (i = t.Result) && void 0 !== i && i.NB ? t.Result.NB : null != t && null !== (a = t.balance) && void 0 !== a && a.BL ? t.balance.BL : 0
                    },
                    setDefaultDataFromGame: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            e = this.getAccountIdFromGame(t);
                        if (e) {
                            var r = this.getAccountById(e).currency;
                            this.setGameCurrencyCode(r.code), this.setGameAccountId(e), this.setGameAccountBalance(this.getAccountBalanceFromGame(t))
                        }
                        void 0 !== t.PT && this.setPromoPoints(t.PT)
                    },
                    resetDataForGame: function() {
                        if (this.activeAccountCurrency || this.isDemo) {
                            var t = this.isDemo ? this.demoCurrencyCode : this.currentCurrency.code;
                            this.setGameCurrencyCode(t), this.setGameAccountId(this.activeAccountId), this.setGameAccountBalance(this.activeAccountBalance)
                        }
                    },
                    onChangeUserActiveAccount: function() {},
                    authFunction: function() {},
                    closeResultGamePopup: function() {
                        this.closePopup("ProxyResultGame")
                    },
                    frameUpdate: function() {
                        var t = this;
                        return en(Qr().mark((function e() {
                            return Qr().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, t.$nextTick();
                                    case 2:
                                        return e.next = 4, new Promise((function(t) {
                                            requestAnimationFrame(t)
                                        }));
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    },
                    resetPrevGameFromStore: function() {
                        var t = arguments,
                            e = this;
                        return en(Qr().mark((function r() {
                            var n, o;
                            return Qr().wrap((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        if (n = !(t.length > 0 && void 0 !== t[0]) || t[0], !(o = e.$store.getters["game/lastUnfinishedGame"])) {
                                            r.next = 9;
                                            break
                                        }
                                        return r.next = 5, e.resetPrevGame(nn({}, o), n);
                                    case 5:
                                        e.$store.commit("game/setLastUnfinishedGame", null), e.isRouteBonusGame || e.unfinishedGameAccountHandler(null, o), r.next = 11;
                                        break;
                                    case 9:
                                        return r.next = 11, e.restoreBonus();
                                    case 11:
                                    case "end":
                                        return r.stop()
                                }
                            }), r)
                        })))()
                    },
                    unfinishedGameAccountHandler: function() {
                        var t, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        if (e || (e = this.getAccountIdFromGame(r)), e) {
                            var n = this.getAccountById(e);
                            n && ([l.D2.BonusCasino, l.D2.Bonus].includes(n.type) ? this.setFreezeAccount(!0, this.mainAccountId) : this.setFreezeAccount(!0, e), this.setPrevGameCurrency(null === (t = n.currency) || void 0 === t ? void 0 : t.code))
                        }
                    },
                    emitShowGameStateByGameStatus: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        this.setIsGameStateInited(), (0, a.emitShowGameState)({
                            state: t ? "started" : "finished",
                            bonusIsActive: t && !!this.bonusId
                        })
                    },
                    onPreloaderHide: function(t) {
                        if (this.isShown) var e = Ar().watch((function(t, e) {
                            return e["preloader/isShown"]
                        }), (function(r) {
                            r || (t(), e())
                        }));
                        else t()
                    },
                    setFreezeAccount: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
                        if (!this.isDemo) {
                            var r = {
                                isFreeze: t
                            };
                            e && (r.accountId = e), (0, a.emitSetFreezeAccount)(r)
                        }
                    },
                    getCoefText: function() {
                        return "x".concat(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0)
                    },
                    setPrevGameCurrency: function() {},
                    checkSumBet: function() {
                        if (this.checkBlockedGame) return this.showErrorPopup(this.$t("common.inputBetAmount")), this.restoreAfterErrorCallback(), void this.setEnableAutogame();
                        var t, e = this.isDemo ? this.demoBalance : this.currentBalance,
                            r = this.isDemo ? this.demoCurrencyCode : this.gameCurrencyCode,
                            n = !1;
                        switch (!0) {
                            case this.calculatedSumBet < this.minBet:
                                t = this.$t("common.minimumBetAmountIs", {
                                    amount: this.minBet,
                                    currency: r
                                });
                                break;
                            case e < this.calculatedSumBet:
                                this.checkAutoGamePossibility(), t = this.$t("common.notEnoughMoney"), n = !0;
                                break;
                            case this.calculatedSumBet > this.maxBet:
                                t = this.$t("common.maximumBetAmountIs", {
                                    amount: this.maxBet,
                                    currency: r
                                })
                        }
                        return !(t && !this.bonusFreeBetIsActive) || (this.showErrorPopup(t, n), this.restoreAfterErrorCallback(), void this.setEnableAutogame())
                    },
                    restoreAfterErrorCallback: function() {},
                    checkAutoGamePossibility: function() {}
                })
            };
            var sn = r(28922973);

            function cn(t) {
                return cn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, cn(t)
            }
            var un = ["customOptions"],
                ln = ["games_bonuses_code", "games_bonuses_id"];

            function fn(t, e) {
                if (null == t) return {};
                var r, n, o = function(t, e) {
                    if (null == t) return {};
                    var r, n, o = {},
                        i = Object.keys(t);
                    for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || (o[r] = t[r]);
                    return o
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (n = 0; n < i.length; n++) r = i[n], e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
                }
                return o
            }

            function hn() {
                hn = function() {
                    return e
                };
                var t, e = {},
                    r = Object.prototype,
                    n = r.hasOwnProperty,
                    o = Object.defineProperty || function(t, e, r) {
                        t[e] = r.value
                    },
                    i = "function" == typeof Symbol ? Symbol : {},
                    a = i.iterator || "@@iterator",
                    s = i.asyncIterator || "@@asyncIterator",
                    c = i.toStringTag || "@@toStringTag";

                function u(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    u({}, "")
                } catch (t) {
                    u = function(t, e, r) {
                        return t[e] = r
                    }
                }

                function l(t, e, r, n) {
                    var i = e && e.prototype instanceof y ? e : y,
                        a = Object.create(i.prototype),
                        s = new B(n || []);
                    return o(a, "_invoke", {
                        value: x(t, r, s)
                    }), a
                }

                function f(t, e, r) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, r)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                e.wrap = l;
                var h = "suspendedStart",
                    p = "suspendedYield",
                    d = "executing",
                    m = "completed",
                    v = {};

                function y() {}

                function b() {}

                function g() {}
                var w = {};
                u(w, a, (function() {
                    return this
                }));
                var S = Object.getPrototypeOf,
                    O = S && S(S(k([])));
                O && O !== r && n.call(O, a) && (w = O);
                var _ = g.prototype = y.prototype = Object.create(w);

                function A(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        u(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function P(t, e) {
                    function r(o, i, a, s) {
                        var c = f(t[o], t, i);
                        if ("throw" !== c.type) {
                            var u = c.arg,
                                l = u.value;
                            return l && "object" == cn(l) && n.call(l, "__await") ? e.resolve(l.__await).then((function(t) {
                                r("next", t, a, s)
                            }), (function(t) {
                                r("throw", t, a, s)
                            })) : e.resolve(l).then((function(t) {
                                u.value = t, a(u)
                            }), (function(t) {
                                return r("throw", t, a, s)
                            }))
                        }
                        s(c.arg)
                    }
                    var i;
                    o(this, "_invoke", {
                        value: function(t, n) {
                            function o() {
                                return new e((function(e, o) {
                                    r(t, n, e, o)
                                }))
                            }
                            return i = i ? i.then(o, o) : o()
                        }
                    })
                }

                function x(e, r, n) {
                    var o = h;
                    return function(i, a) {
                        if (o === d) throw new Error("Generator is already running");
                        if (o === m) {
                            if ("throw" === i) throw a;
                            return {
                                value: t,
                                done: !0
                            }
                        }
                        for (n.method = i, n.arg = a;;) {
                            var s = n.delegate;
                            if (s) {
                                var c = E(s, n);
                                if (c) {
                                    if (c === v) continue;
                                    return c
                                }
                            }
                            if ("next" === n.method) n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) {
                                if (o === h) throw o = m, n.arg;
                                n.dispatchException(n.arg)
                            } else "return" === n.method && n.abrupt("return", n.arg);
                            o = d;
                            var u = f(e, r, n);
                            if ("normal" === u.type) {
                                if (o = n.done ? m : p, u.arg === v) continue;
                                return {
                                    value: u.arg,
                                    done: n.done
                                }
                            }
                            "throw" === u.type && (o = m, n.method = "throw", n.arg = u.arg)
                        }
                    }
                }

                function E(e, r) {
                    var n = r.method,
                        o = e.iterator[n];
                    if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, E(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), v;
                    var i = f(o, e.iterator, r.arg);
                    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, v;
                    var a = i.arg;
                    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, v) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, v)
                }

                function C(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function j(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function B(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(C, this), this.reset(!0)
                }

                function k(e) {
                    if (e || "" === e) {
                        var r = e[a];
                        if (r) return r.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var o = -1,
                                i = function r() {
                                    for (; ++o < e.length;)
                                        if (n.call(e, o)) return r.value = e[o], r.done = !1, r;
                                    return r.value = t, r.done = !0, r
                                };
                            return i.next = i
                        }
                    }
                    throw new TypeError(cn(e) + " is not iterable")
                }
                return b.prototype = g, o(_, "constructor", {
                    value: g,
                    configurable: !0
                }), o(g, "constructor", {
                    value: b,
                    configurable: !0
                }), b.displayName = u(g, c, "GeneratorFunction"), e.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === b || "GeneratorFunction" === (e.displayName || e.name))
                }, e.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, g) : (t.__proto__ = g, u(t, c, "GeneratorFunction")), t.prototype = Object.create(_), t
                }, e.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, A(P.prototype), u(P.prototype, s, (function() {
                    return this
                })), e.AsyncIterator = P, e.async = function(t, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new P(l(t, r, n, o), i);
                    return e.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, A(_), u(_, c, "Generator"), u(_, a, (function() {
                    return this
                })), u(_, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(t) {
                    var e = Object(t),
                        r = [];
                    for (var n in e) r.push(n);
                    return r.reverse(),
                        function t() {
                            for (; r.length;) {
                                var n = r.pop();
                                if (n in e) return t.value = n, t.done = !1, t
                            }
                            return t.done = !0, t
                        }
                }, e.values = k, B.prototype = {
                    constructor: B,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(j), !e)
                            for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t)
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        if (this.done) throw e;
                        var r = this;

                        function o(n, o) {
                            return s.type = "throw", s.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o
                        }
                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var a = this.tryEntries[i],
                                s = a.completion;
                            if ("root" === a.tryLoc) return o("end");
                            if (a.tryLoc <= this.prev) {
                                var c = n.call(a, "catchLoc"),
                                    u = n.call(a, "finallyLoc");
                                if (c && u) {
                                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                                } else if (c) {
                                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0)
                                } else {
                                    if (!u) throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r];
                            if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var i = o;
                                break
                            }
                        }
                        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                        var a = i ? i.completion : {};
                        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, v) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), v
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), j(r), v
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    j(r)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, r, n) {
                        return this.delegate = {
                            iterator: k(e),
                            resultName: r,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = t), v
                    }
                }, e
            }

            function pn(t, e, r, n, o, i, a) {
                try {
                    var s = t[i](a),
                        c = s.value
                } catch (u) {
                    return void r(u)
                }
                s.done ? e(c) : Promise.resolve(c).then(n, o)
            }

            function dn(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = t.apply(e, r);

                        function a(t) {
                            pn(i, n, o, a, s, "next", t)
                        }

                        function s(t) {
                            pn(i, n, o, a, s, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }

            function mn(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function vn(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? mn(Object(r), !0).forEach((function(e) {
                        yn(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : mn(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function yn(t, e, r) {
                return (e = function(t) {
                    var e = function(t, e) {
                        if ("object" !== cn(t) || null === t) return t;
                        var r = t[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var n = r.call(t, e || "default");
                            if ("object" !== cn(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(t, "string");
                    return "symbol" === cn(e) ? e : String(e)
                }(e)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
            const bn = {
                components: {
                    BetsButtons: function() {
                        return r.e(20961004).then(r.bind(r, 13727605))
                    },
                    SelectBonusAccount: function() {
                        return Promise.resolve().then(r.bind(r, 49336426))
                    },
                    AutoGame: function() {
                        return r.e(16803518).then(r.bind(r, 31454260))
                    }
                },
                mixins: [an, sn.Z, Ir],
                data: function() {
                    return {
                        timeAutogame: 2e3,
                        afterGame: !1,
                        demoGameCounter: 0,
                        demoStraightWinCounter: 0,
                        realMoneyPopupShown: !1,
                        onlineWaitingConnection: null,
                        prevGameCurrency: null
                    }
                },
                beforeMount: function() {
                    var t = this,
                        e = this.addEnterSubscribe();
                    this.$once("hook:beforeDestroy", (function() {
                        "function" == typeof e && e()
                    })), window.addEventListener("offline", this.offlineHandler), window.addEventListener("online", this.onlineHandler), (0, u.addUserAuthHandler)((function(e) {
                        e && t.isDemo && kr(t.$route.params.gameId, !1)
                    })), this.switchBets(), this.setPrevGameCurrency()
                },
                beforeDestroy: function() {
                    window.removeEventListener("offline", this.offlineHandler), window.removeEventListener("online", this.onlineHandler)
                },
                computed: vn(vn(vn(vn(vn(vn(vn(vn(vn(vn(vn(vn(vn({}, (0, o.mapState)("demo", ["fingerprint"])), (0, o.mapState)("common", ["isWidget"])), (0, o.mapState)("game", ["selectedBonusAccount"])), (0, o.mapGetters)("demo", ["demoMinBet", "demoMaxBet", "demoBets", "demoBalance", "sessionGainUpdated", "demoError", "currentGain"])), (0, o.mapGetters)("common", ["activeExtraModules"])), (0, o.mapGetters)("game", ["enableAutogame", "gameCoefs", "gameSingleCoef", "maxBet", "gameCurrencyCode", "girlPostfix", "visibleBonusAccounts"])), (0, o.mapGetters)("betsButtons", ["blockedBetBtns", "getCurrBet", "getPrevBet", "calculatedSumBet", "sumBetsArray", "isMultiBets", "offeredBets", "minBet"])), (0, o.mapGetters)("bonuses", ["bonusDoubleWinIsActive", "bonusRevertHalfBetIsActive", "bonusFreeBetIsActive", "bonusType", "bonusId"])), (0, o.mapGetters)("resultGame", ["resultMsg", "showDraw", "showWin", "showLose"])), (0, o.mapGetters)("user", ["activeAccountBalance", "accounts", "mainAccountId", "guid"])), (0, o.mapGetters)("application", ["isMobileView"])), (0, o.mapGetters)("project", ["isJackpotActivityEnabled"])), {}, {
                    calculatedSumBetWithCurrency: function() {
                        var t, e;
                        return this.getSumWithCurrency(this.calculatedSumBet, !1, null !== (t = null !== (e = this.gameCurrencyCode) && void 0 !== e ? e : this.demoCurrencyCode) && void 0 !== t ? t : "")
                    },
                    calculatedSumBetWithCurrencyAndCheckBonus: function() {
                        return this.bonusFreeBetIsActive ? "FREE" : this.getSumWithCurrencyAndCheckBonus(this.calculatedSumBet)
                    },
                    getPrevSumBetWithCurrency: function() {
                        return this.getSumWithCurrency(this.getPrevBet, !1, this.gameCurrencyCode)
                    },
                    selectedBonusAccount: {
                        get: function() {
                            var t, e;
                            return null !== (t = null === (e = this.$store.state.game) || void 0 === e || null === (e = e.selectedBonusAccount) || void 0 === e ? void 0 : e.id) && void 0 !== t ? t : 0
                        },
                        set: function(t) {
                            this.setSelectedBonusAccount(this.$store.getters["user/getAccountById"](t))
                        }
                    },
                    isSelectedBonusAccount: function() {
                        return !this.selectedBonusAccount || this.activeAccountId === this.mainAccountId && this.gameAccountId !== this.selectedBonusAccount || this.activeAccountId !== this.mainAccountId && this.gameAccountId === this.selectedBonusAccount
                    },
                    isChangedAccount: function() {
                        return this.gameAccountId !== this.activeAccountId && this.isSelectedBonusAccount && !this.isDemo
                    },
                    currentBalance: function() {
                        var t = this;
                        return this.selectedBonusAccount && !this.bonusType ? this.accounts.find((function(e) {
                            return e.id === t.selectedBonusAccount
                        })).balance : this.activeAccountBalance
                    },
                    bonusAccountRequestParam: function() {
                        return !this.bonusType && this.selectedBonusAccount ? this.selectedBonusAccount : this.activeAccountId
                    }
                }),
                watch: {
                    bonusId: function(t) {
                        (0, a.emitShowGameBonus)({
                            bonus: t ? {
                                type: this.$store.state.bonuses.bonusType,
                                id: t
                            } : null
                        }), this.toggleBonusHandler()
                    },
                    calculatedSumBet: function() {
                        this.afterChangeSumBet()
                    },
                    isDemo: function(t) {
                        var e = this;
                        return dn(hn().mark((function r() {
                            return hn().wrap((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        if (e.demoError) {
                                            r.next = 8;
                                            break
                                        }
                                        return r.next = 3, e.demoReset();
                                    case 3:
                                        return e.clearAllBets(), r.next = 6, e.authFunction();
                                    case 6:
                                        e.clearResult(), e.setDemoStatus(t);
                                    case 8:
                                    case "end":
                                        return r.stop()
                                }
                            }), r)
                        })))()
                    },
                    selectedBonusAccount: {
                        deep: !0,
                        handler: function(t) {
                            this.clearAllBets(), this.switchBets();
                            var e = t ? this.getAccountById(t).currency : this.activeAccountCurrency;
                            this.$store.commit("game/setGameCurrencyCode", null == e ? void 0 : e.code)
                        }
                    }
                },
                methods: vn(vn(vn(vn(vn(vn(vn(vn(vn(vn({}, (0, o.mapMutations)("common", ["setGameIsVisualBlocked"])), (0, o.mapMutations)("betsButtons", ["setBets", "setBlockBetBtns", "setSumBet", "setPrevSumBet"])), (0, o.mapMutations)("game", ["setGameCoefs", "setGameSingleCoef", "setEnableAutogame", "setSelectedBonusAccount", "toggleAuto"])), (0, o.mapMutations)("bonuses", ["setExtraHideBonusButton"])), (0, o.mapMutations)("demo", ["setDemoResult", "flushResult", "setDemoTip", "setDemoStatus", "setSessionGainUpdated"])), (0, o.mapActions)("betsButtons", ["clearAllBets", "clearPrevBets", "savePrevBets"])), (0, o.mapActions)("bonuses", ["destroyBonus", "activatedBonus"])), (0, o.mapActions)("waitingConnection", ["startWaitingConnection"])), (0, o.mapActions)("jackpot", ["showAnim"])), {}, {
                    offlineHandler: function() {
                        var t = this;
                        return dn(hn().mark((function e() {
                            return hn().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, t.startWaitingConnection(0);
                                    case 2:
                                        t.onlineWaitingConnection = e.sent;
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    },
                    onlineHandler: function() {
                        var t = this;
                        return dn(hn().mark((function e() {
                            return hn().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        t.gameStarted || t.setBlockGame(), t.onlineWaitingConnection && (t.onlineWaitingConnection(), t.onlineWaitingConnection = null);
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    },
                    demoReset: function() {},
                    gameAjaxGet: function(t) {
                        var e = arguments,
                            r = this;
                        return dn(hn().mark((function n() {
                            var o, a, s, c, u, l, f;
                            return hn().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (o = e.length > 1 && void 0 !== e[1] ? e[1] : {}, a = e.length > 2 && void 0 !== e[2] ? e[2] : null, s = e.length > 3 && void 0 !== e[3] ? e[3] : 2500, c = e.length > 4 && void 0 !== e[4] && e[4], n.t0 = !c, !n.t0) {
                                            n.next = 9;
                                            break
                                        }
                                        return n.next = 8, r.startWaitingConnection(s);
                                    case 8:
                                        n.t0 = n.sent;
                                    case 9:
                                        return u = n.t0, n.prev = 10, n.next = 13, i.apiClient.get("Games/".concat(r.internalGameName, "/").concat(t), {
                                            params: o
                                        });
                                    case 13:
                                        l = n.sent, f = l.data.data, r.setDefaultDataFromGame(f), a && a(f), n.next = 22;
                                        break;
                                    case 19:
                                        n.prev = 19, n.t1 = n.catch(10), r.handleRequestError(n.t1, t, c);
                                    case 22:
                                        return n.prev = 22, u && u(), n.finish(22);
                                    case 25:
                                    case "end":
                                        return n.stop()
                                }
                            }), n, null, [
                                [10, 19, 22, 25]
                            ])
                        })))()
                    },
                    gameAjax: function(t, e) {
                        var r = arguments,
                            n = this;
                        return dn(hn().mark((function o() {
                            var a, s, c, u, l, f, h, p, d, m;
                            return hn().wrap((function(o) {
                                for (;;) switch (o.prev = o.next) {
                                    case 0:
                                        if (a = r.length > 2 && void 0 !== r[2] ? r[2] : null, s = r.length > 3 && void 0 !== r[3] ? r[3] : 2500, c = r.length > 4 && void 0 !== r[4] && r[4], u = n.isDemo ? {
                                                fingerprint: n.fingerprint
                                            } : {}, l = {}, l = ["bet", "check-bet"].includes(t) && !n.isDemo ? vn({
                                                bonusAccountId: n.bonusType ? 0 : n.selectedBonusAccount,
                                                games_bonuses_code: n.bonusType,
                                                games_bonuses_id: n.bonusId
                                            }, e) : vn({}, e), o.t0 = !c, !o.t0) {
                                            o.next = 11;
                                            break
                                        }
                                        return o.next = 10, n.startWaitingConnection(s);
                                    case 10:
                                        o.t0 = o.sent;
                                    case 11:
                                        return f = o.t0, o.prev = 12, o.next = 15, i.apiClient.post("Games/".concat(n.internalGameName, "/").concat(t), l, {
                                            headers: u
                                        });
                                    case 15:
                                        h = o.sent, p = h.data.data, d = ["bet", "side-bet"].includes(t), n.isDemo ? ["bet", "check-bet", "select", "collect", "choice"].includes(t) && (m = {
                                            newBalance: n.getAccountBalanceFromGame(p),
                                            currentGain: (null == p ? void 0 : p.SW) || 0
                                        }, n.setDemoResult(m), d && n.demoGameCounter++) : (d && !n.isMobileView && n.isJackpotActivityEnabled && !n.bonusFreeBetIsActive && n.showAnim(), n.setDefaultDataFromGame(p)), a && a(p), d && n.savePrevBets(), o.next = 28;
                                        break;
                                    case 23:
                                        return o.prev = 23, o.t1 = o.catch(12), o.next = 27, n.handleRequestError(o.t1, t, c);
                                    case 27:
                                        throw o.t1;
                                    case 28:
                                        return o.prev = 28, f && f(), o.finish(28);
                                    case 31:
                                    case "end":
                                        return o.stop()
                                }
                            }), o, null, [
                                [12, 23, 28, 31]
                            ])
                        })))()
                    },
                    makeBetRequest: function(t, e, r) {
                        var n = this;
                        return dn(hn().mark((function o() {
                            var i, a;
                            return hn().wrap((function(o) {
                                for (;;) switch (o.prev = o.next) {
                                    case 0:
                                        return i = n.isDemo ? e : vn({
                                            BAC: n.bonusAccountRequestParam,
                                            BC: n.bonusType,
                                            BN: n.bonusId
                                        }, e), o.next = 3, n.makePostRequest(t, i, vn(vn({}, r), {}, {
                                            customOptions: vn(vn({}, null == r ? void 0 : r.customOptions), {}, {
                                                action: "bet"
                                            })
                                        }));
                                    case 3:
                                        return a = o.sent, n.isDemo ? n.demoGameCounter++ : n.isMobileView || !n.isJackpotActivityEnabled || n.bonusFreeBetIsActive || n.showAnim(), n.savePrevBets(), o.abrupt("return", a);
                                    case 7:
                                    case "end":
                                        return o.stop()
                                }
                            }), o)
                        })))()
                    },
                    makePostRequest: function(t, e, r) {
                        var n = this;
                        return dn(hn().mark((function o() {
                            var i, a, s, c, u;
                            return hn().wrap((function(o) {
                                for (;;) switch (o.prev = o.next) {
                                    case 0:
                                        return a = n.isDemo ? e : vn({
                                            UI: n.mainAccountId
                                        }, e), s = n.isDemo ? vn({
                                            "X-Finger-Print": n.fingerprint
                                        }, null == r ? void 0 : r.headers) : null == r ? void 0 : r.headers, o.next = 4, n.makeRequest(vn(vn({}, r), {}, {
                                            url: t,
                                            method: "POST",
                                            data: a,
                                            headers: s
                                        }));
                                    case 4:
                                        return c = o.sent, n.isDemo && ["bet", "select", "collect"].includes(null == r || null === (i = r.customOptions) || void 0 === i ? void 0 : i.action) && (u = {
                                            newBalance: n.getAccountBalanceFromGame(c),
                                            currentGain: (null == c ? void 0 : c.SW) || 0
                                        }, n.setDemoResult(u)), o.abrupt("return", c);
                                    case 7:
                                    case "end":
                                        return o.stop()
                                }
                            }), o)
                        })))()
                    },
                    makeGetRequest: function(t, e) {
                        return this.makeRequest(vn(vn({}, e), {}, {
                            url: t,
                            method: "GET"
                        }))
                    },
                    makeRequest: function(t) {
                        var e = this;
                        return dn(hn().mark((function r() {
                            var n, o, i, a, s, c, u, l, f, h;
                            return hn().wrap((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        if (n = t.customOptions, o = fn(t, un), i = vn({
                                                action: t.url,
                                                waitingConnectionTime: 2500,
                                                handleError: !0,
                                                showErrorMessage: !0
                                            }, n), a = i.action, s = i.waitingConnectionTime, c = i.handleError, u = i.showErrorMessage, r.t0 = u, !r.t0) {
                                            r.next = 7;
                                            break
                                        }
                                        return r.next = 6, e.startWaitingConnection(s);
                                    case 6:
                                        r.t0 = r.sent;
                                    case 7:
                                        if (l = r.t0, r.prev = 8, e.gameServiceApiClient) {
                                            r.next = 11;
                                            break
                                        }
                                        return r.abrupt("return", Promise.reject(new Error("Game service api client not defined.")));
                                    case 11:
                                        return r.next = 13, e.gameServiceApiClient().request(o);
                                    case 13:
                                        return f = r.sent, h = f.data, e.isDemo || e.setDefaultDataFromGame(h), r.abrupt("return", h);
                                    case 19:
                                        if (r.prev = 19, r.t1 = r.catch(8), !c) {
                                            r.next = 25;
                                            break
                                        }
                                        return r.next = 24, e.handleRequestError(r.t1, a, !u);
                                    case 24:
                                        0;
                                    case 25:
                                        return r.abrupt("return", Promise.reject(r.t1));
                                    case 26:
                                        return r.prev = 26, "function" == typeof l && l(), r.finish(26);
                                    case 29:
                                    case "end":
                                        return r.stop()
                                }
                            }), r, null, [
                                [8, 19, 26, 29]
                            ])
                        })))()
                    },
                    gameServiceApiClient: function() {
                        var t, e, r, n, o, i = wr(Number(this.$route.params.gameId));
                        if (i) {
                            var a = this.isDemo ? null !== (t = null === (e = i.serviceApi) || void 0 === e ? void 0 : e.demoLocation) && void 0 !== t ? t : kt : null !== (r = null === (n = i.serviceApi) || void 0 === n ? void 0 : n.location) && void 0 !== r ? r : xt;
                            return null === (o = vr[a]) || void 0 === o ? void 0 : o()
                        }
                    },
                    addEnterSubscribe: function() {
                        var t = this;
                        return (0, Gr.zJ)((function() {
                            (t.activeAccountId || t.isDemo) && (t.handleCloseAllPopup(), document.querySelectorAll("input").forEach((function(t) {
                                return t.blur()
                            })), t.$nextTick(t.handlePressEnter))
                        }))
                    },
                    handlePressEnter: function() {
                        this.startGame(!0)
                    },
                    changeBalanceCallback: function() {},
                    closeResultPopupCallback: function() {},
                    parseGameErrors: function(t, e) {
                        arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || this.showErrorPopup(t.title), this.setBlockGame()
                    },
                    handleRequestError: function(t, e) {
                        var r = arguments,
                            n = this;
                        return dn(hn().mark((function o() {
                            var i, a;
                            return hn().wrap((function(o) {
                                for (;;) switch (o.prev = o.next) {
                                    case 0:
                                        return a = r.length > 2 && void 0 !== r[2] && r[2], 401 === (null == t || null === (i = t.response) || void 0 === i ? void 0 : i.status) ? (n.preventErrorModal = !0, n.parseGameErrors(n.getRequestError(t), e, !0), n.preventErrorModal = !1, n.showAuthErrorPopup()) : (n.errorCallbackHandler(t), n.parseGameErrors(n.getRequestError(t), e, a)), n.setEnableAutogame(), o.next = 5, n.restoreAfterError(e);
                                    case 5:
                                    case "end":
                                        return o.stop()
                                }
                            }), o)
                        })))()
                    },
                    restoreAfterError: function(t) {
                        var e = this;
                        return dn(hn().mark((function r() {
                            return hn().wrap((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        return e.checkAutoGamePossibility(), ["bet", "check-bet"].includes(t) ? (e.setFreezeAccount(!1), e.clearPrevBets()) : (e.setBlockBetBtns(!0), e.setGameStarted(!0), e.setBlockedActivity(!1)), r.next = 4, e.restoreAfterErrorCallback();
                                    case 4:
                                    case "end":
                                        return r.stop()
                                }
                            }), r)
                        })))()
                    },
                    setBlockGame: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        this.setBlockBetBtns(t), this.setGameStarted(t), t || this.setBlockedActivity(!0)
                    },
                    startGameCallback: function() {},
                    startGame: function() {
                        this.startGameCallback(), this.mainAccountId || this.isDemo ? this.checkSumBet() && (this.gameStarted || (this.setPrevGameCurrency(), this.clearResult(), this.setBlockGame(!0), this.placeBet(), this.setFreezeAccount(!0, this.activeAccountId))) : this.showAuthenticationRequired()
                    },
                    placeBet: function() {},
                    endGameCallback: function() {
                        var t = arguments,
                            e = this;
                        return dn(hn().mark((function r() {
                            var n;
                            return hn().wrap((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        if (n = t.length > 0 && void 0 !== t[0] ? t[0] : null, e.isChangedAccount && e.clearPrevBets(), e.updateBalanceFromGame(), e.gameAccountId !== e.activeAccountId && (0, a.emitSetUserAccountBalance)({
                                                accountId: e.activeAccountId,
                                                balance: e.activeAccountBalance
                                            }), e.defaultClearGame(), !e.isDemo) {
                                            r.next = 14;
                                            break
                                        }
                                        if (e.currentGain ? e.demoStraightWinCounter++ : e.demoStraightWinCounter = 0, e.setSessionGainUpdated(!1), !(e.demoGameCounter >= 5 && e.demoStraightWinCounter >= 2) || e.realMoneyPopupShown) {
                                            r.next = 14;
                                            break
                                        }
                                        return r.next = 11, (0, c.Z)(150);
                                    case 11:
                                        e.setDemoTip(Sr.Prompt), e.realMoneyPopupShown = !0, e.setEnableAutogame();
                                    case 14:
                                        if (e.enableAutogame) {
                                            r.next = 18;
                                            break
                                        }
                                        return e.setFreezeAccount(!1), e.setBlockGame(), r.abrupt("return");
                                    case 18:
                                        return r.next = 20, (0, c.Z)(e.timeAutogame);
                                    case 20:
                                        e.checkStartAutoGame(n);
                                    case 21:
                                    case "end":
                                        return r.stop()
                                }
                            }), r)
                        })))()
                    },
                    checkStartAutoGame: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                        if (!this.checkSumBet() && this.enableAutogame) return this.setFreezeAccount(!1), void this.setBlockGame();
                        this.enableAutogame ? (this.handleCloseAllPopup(), "function" == typeof t ? t() : (this.clearResult(), this.startGameCallback(), this.placeBet())) : (this.setFreezeAccount(!1), this.setBlockGame())
                    },
                    updateBalanceFromGame: function() {
                        var t = arguments,
                            e = this;
                        return dn(hn().mark((function r() {
                            var n, o, i;
                            return hn().wrap((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        if (n = t.length > 0 && void 0 !== t[0] && t[0], !e.isDemo || e.sessionGainUpdated) {
                                            r.next = 5;
                                            break
                                        }
                                        return e.flushResult(), e.setSessionGainUpdated(n), r.abrupt("return");
                                    case 5:
                                        if (e.gameAccountBalance) {
                                            r.next = 13;
                                            break
                                        }
                                        return r.next = 8, (0, c.Z)(1500);
                                    case 8:
                                        return r.next = 10, e.$store.dispatch("user/updateAccounts");
                                    case 10:
                                        return ((i = null === (o = e.accounts.find((function(t) {
                                            return t.id === e.gameAccountId
                                        }))) || void 0 === o ? void 0 : o.balance) || 0 === i) && (0, a.emitSetUserAccountBalance)({
                                            accountId: e.gameAccountId,
                                            balance: i
                                        }), r.abrupt("return");
                                    case 13:
                                        (0, a.emitSetUserAccountBalance)({
                                            accountId: e.gameAccountId,
                                            balance: e.gameAccountBalance
                                        }), e.$store.dispatch("user/updateAccountBalance", {
                                            id: e.gameAccountId,
                                            balance: e.gameAccountBalance
                                        });
                                    case 15:
                                    case "end":
                                        return r.stop()
                                }
                            }), r)
                        })))()
                    },
                    defaultClearGame: function() {
                        var t = this;
                        return dn(hn().mark((function e() {
                            var r;
                            return hn().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        t.bonusFreeBetIsActive && (t.clearPrevBets(), t.clearAllBets()), t.destroyBonus(), t.bonusId && (t.clearPrevBets(), t.clearAllBets()), t.clearGameAccountId(), t.selectedBonusAccount && t.mainAccountId !== t.activeAccountId && t.resetSelectBalance(), (null === (r = t.currentCurrency) || void 0 === r ? void 0 : r.code) === t.gameCurrencyCode || t.isMultiBets || t.isDemo || t.insertSingleBet(t.minBet), t.resetDataForGame(), t.clearAfterGame();
                                    case 8:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    },
                    clickClearAllBets: function() {
                        this.gameStarted || this.clearAllBets()
                    },
                    clearAfterGame: function() {},
                    afterChangeSumBet: function() {
                        this.afterGame && (this.afterGame = !1, this.afterChangeSumBetCallback())
                    },
                    afterChangeSumBetCallback: function() {},
                    authFunction: function() {
                        var t = arguments,
                            e = this;
                        return dn(hn().mark((function r() {
                            var n, o, i;
                            return hn().wrap((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        return n = !(t.length > 0 && void 0 !== t[0]) || t[0], e.setIsUserAuthProcessed(!0), e.setBlockBetBtns(!0), r.prev = 3, r.next = 6, e.loadGameData();
                                    case 6:
                                        o = r.sent, e.switchBets(), r.next = 20;
                                        break;
                                    case 10:
                                        if (r.prev = 10, r.t0 = r.catch(3), 401 !== (null === r.t0 || void 0 === r.t0 || null === (i = r.t0.response) || void 0 === i ? void 0 : i.status)) {
                                            r.next = 15;
                                            break
                                        }
                                        return e.showErrorPopup(e.$t("common.connectionError")), r.abrupt("return");
                                    case 15:
                                        return e.redirectToErrorPage(), r.abrupt("return");
                                    case 18:
                                        return r.abrupt("return");
                                    case 20:
                                        if ((0, a.emitSetUserAccountBalance)({
                                                accountId: e.activeAccountId,
                                                balance: e.activeAccountBalance
                                            }), e.clearPrevBets(), e.gameStarted) {
                                            r.next = 27;
                                            break
                                        }
                                        return e.clearAllBets(), e.setBlockBetBtns(), r.next = 27, e.resetPrevGameFromStore(n);
                                    case 27:
                                        e.authCallBack(o), e.setIsUserAuthProcessed();
                                    case 29:
                                    case "end":
                                        return r.stop()
                                }
                            }), r, null, [
                                [3, 10]
                            ])
                        })))()
                    },
                    authCallBack: function(t) {},
                    restoreBonus: function() {
                        var t = arguments,
                            e = this;
                        return dn(hn().mark((function r() {
                            var n, o, i, a;
                            return hn().wrap((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        if (o = t.length > 0 && void 0 !== t[0] ? t[0] : {}, i = Number(e.$route.query.games_bonuses_code), a = Number(e.$route.query.games_bonuses_id), e.clearBonusesParams(), null == o || null === (n = o.BNINF) || void 0 === n || !n.BNID) {
                                            r.next = 9;
                                            break
                                        }
                                        return r.next = 7, e.activatedBonus(o.BNINF);
                                    case 7:
                                        return i && a && e.showErrorPopup(e.$t("bonuses.dontClosed")), r.abrupt("return");
                                    case 9:
                                        if (!i || !a) {
                                            r.next = 18;
                                            break
                                        }
                                        if (e.mainAccountId === e.activeAccountId) {
                                            r.next = 13;
                                            break
                                        }
                                        return e.clearBonusesParams(), r.abrupt("return");
                                    case 13:
                                        if (!e.gameStarted && !e.getAccountIdFromGame(o)) {
                                            r.next = 16;
                                            break
                                        }
                                        return e.showErrorPopup(e.$t("bonuses.dontClosed")), r.abrupt("return");
                                    case 16:
                                        return r.next = 18, e.activatedBonus({
                                            BNTP: i,
                                            BNID: a
                                        });
                                    case 18:
                                    case "end":
                                        return r.stop()
                                }
                            }), r)
                        })))()
                    },
                    resetPrevGame: function() {
                        var t = arguments,
                            e = this;
                        return dn(hn().mark((function r() {
                            var n, o, i, s;
                            return hn().wrap((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        return n = t.length > 0 && void 0 !== t[0] ? t[0] : {}, o = !(t.length > 1 && void 0 !== t[1]) || t[1], i = e.getAccountIdFromGame(n), r.next = 5, e.restoreBonus(n);
                                    case 5:
                                        if (!i) {
                                            r.next = 19;
                                            break
                                        }
                                        if (e.isDemo) {
                                            r.next = 16;
                                            break
                                        }
                                        if ((s = e.$store.getters["user/getAccountById"](i)) && Object.values(l.D2).includes(s.type) && e.setSelectedBonusAccount(s), !o) {
                                            r.next = 12;
                                            break
                                        }
                                        return r.next = 12, e.emitShowGameRestoreMessage();
                                    case 12:
                                        e.setDefaultDataFromGame(n), (0, a.emitSetUserAccountBalance)({
                                            accountId: i,
                                            balance: s.balance
                                        }), r.next = 19;
                                        break;
                                    case 16:
                                        if (!o) {
                                            r.next = 19;
                                            break
                                        }
                                        return r.next = 19, e.emitShowGameRestoreMessage();
                                    case 19:
                                        n.BS && e.setPrevSumBet({
                                            id: 0,
                                            prevValue: n.BS
                                        }), e.setPrevGameCurrency(), e.parsePrevGame(n);
                                    case 22:
                                    case "end":
                                        return r.stop()
                                }
                            }), r)
                        })))()
                    },
                    showGameRestoreMessage: function() {
                        var t = this;
                        return dn(hn().mark((function e() {
                            return hn().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!Number(t.$route.query.games_bonuses_id)) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return (0, a.bridgeSupports)("GPWebAppShowAlert") && (t.setBlockedActivity(!0), t.setBlockBetBtns(!0)), t.setGameIsVisualBlocked(!0), e.next = 6, t.$alert.info({
                                            text: t.$t("common.restoreGameMessage"),
                                            title: (0, a.bridgeSupports)("GPWebAppShowAlert") ? t.$t("common.message") : t.$t("common.gameNotFinish"),
                                            confirmButtonText: t.$t("common.ok")
                                        });
                                    case 6:
                                        t.setGameIsVisualBlocked();
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    },
                    emitShowGameRestoreMessage: function() {
                        var t = this;
                        return dn(hn().mark((function e() {
                            return hn().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.abrupt("return", t.showGameRestoreMessage());
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    },
                    parsePrevGame: function(t) {},
                    getAccountId: function() {
                        return this.gameAccountId || this.selectedBonusAccount || this.activeAccountId
                    },
                    setDefaultResult: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                            e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        this.setResult({
                            sumWin: this.prepareSum(t),
                            currency: this.prevGameCurrency || this.gameCurrencyCode,
                            resultMsg: this.getSumWithCurrency(t, e, this.prevGameCurrency || this.gameCurrencyCode),
                            itsDraw: r
                        })
                    },
                    showResultPopup: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                            e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                            o = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
                        this.setDefaultResult(t, e, r), this.showDefaultResultPopup(n, "", o)
                    },
                    updateJackpot: function(t) {
                        var e;
                        null !== (e = this.$store.state) && void 0 !== e && e.jackpot && t && this.$store.dispatch("jackpot/updateJackpotFromGames", t)
                    },
                    insertSingleBet: function(t) {
                        this.setSumBet({
                            id: 0,
                            value: this.prepareSum(t),
                            isUserInputs: !0
                        })
                    },
                    bonusAccountRestriction: function() {
                        var t = this;
                        this.$eventBus.$on("change_bet_input", (function(e) {
                            t.selectedBonusAccount && t.sumBetsArray.forEach((function(r, n) {
                                n !== e && t.setSumBet({
                                    id: n,
                                    value: 0
                                })
                            }))
                        }))
                    },
                    resetSelectBalance: function() {
                        this.setSelectedBonusAccount(this.mainAccountId)
                    },
                    onChangeUserActiveAccount: function() {
                        var t = this;
                        return dn(hn().mark((function e() {
                            return hn().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t.setEnableAutogame(), t.gameStarted || (t.handleCloseAllPopup(), t.clearResult(), t.destroyBonus(), t.clearBonusesParams(), t.resetSelectBalance()), e.next = 4, t.authFunction();
                                    case 4:
                                        if (!s.BUILD_NAME_IS.MOBILE_APP_DEFAULT) {
                                            e.next = 7;
                                            break
                                        }
                                        return e.next = 7, t.$alert.success({
                                            text: t.$t("common.accountWillSet"),
                                            title: "",
                                            confirmButtonText: t.$t("common.ok")
                                        });
                                    case 7:
                                        t.changeBalanceCallback();
                                    case 8:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    },
                    toggleBonusHandler: function() {},
                    clearBonusesParams: function() {
                        var t = this.$route.query,
                            e = t.games_bonuses_code,
                            r = t.games_bonuses_id,
                            n = fn(t, ln);
                        void 0 === e && void 0 === r || this.$router.replace({
                            query: n
                        })
                    },
                    switchBets: function() {
                        this.isDemo ? this.setBets(this.demoBets) : this.setBets(this.offeredBets)
                    },
                    setPrevGameCurrency: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                        this.prevGameCurrency = t || this.gameCurrencyCode
                    },
                    checkAutoGamePossibility: function() {
                        this.getCurrBet > this.activeAccountBalance && this.setEnableAutogame()
                    }
                })
            };
            var gn = r(6766678),
                wn = r.n(gn),
                Sn = r(95618446),
                On = r.n(Sn);

            function _n(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != r) {
                        var n, o, i, a, s = [],
                            c = !0,
                            u = !1;
                        try {
                            if (i = (r = r.call(t)).next, 0 === e) {
                                if (Object(r) !== r) return;
                                c = !1
                            } else
                                for (; !(c = (n = i.call(r)).done) && (s.push(n.value), s.length !== e); c = !0);
                        } catch (t) {
                            u = !0, o = t
                        } finally {
                            try {
                                if (!c && null != r.return && (a = r.return(), Object(a) !== a)) return
                            } finally {
                                if (u) throw o
                            }
                        }
                        return s
                    }
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return An(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === r && t.constructor && (r = t.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(t);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return An(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function An(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }
            const Pn = function(t, e) {
                var r, n = Object.entries(e);

                function o() {
                    var t = this;
                    n.forEach((function(e) {
                        var r = _n(e, 2),
                            n = r[0],
                            o = r[1];
                        t.$store.registerModule(n, o, {
                            preserveState: t.$store.state[n]
                        })
                    })), this.$once("hook:beforeDestroy", (function() {
                        n.forEach((function(e) {
                            var r = _n(e, 1)[0];
                            t.$store.unregisterModule(r)
                        }))
                    }))
                }
                var i = null !== (r = t.beforeMount) && void 0 !== r ? r : null;
                return t.beforeMount = function() {
                    o.call(this), i && i.call(this)
                }, t
            };
            var xn = r(66313311),
                En = r.n(xn),
                Cn = r(31002233);
            const jn = function(t) {
                return "number" == typeof t ? t : !t || Number.isNaN(t) ? -(new Date).getTimezoneOffset() / 60 : +t
            };
            var Bn = function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "crash-bet-form"
                }, [e("fieldset", {
                    staticClass: "crash-bet-form__wrap crash-bet-form__wrap--autogame"
                }, [e("p", {
                    staticClass: "crash-bet-form__field crash-bet-form__field--size-s"
                }, [e("label", {
                    staticClass: "crash-bet-form__label",
                    attrs: {
                        title: t.$t("crash.betBase"),
                        for: "crash-bet-base"
                    }
                }, [t._v("\n                " + t._s(t.$t("crash.betBase")) + "\n            ")]), t._v(" "), e("input", t._g({
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.baseAutoBetGet,
                        expression: "baseAutoBetGet"
                    }],
                    staticClass: "crash-bet-form__input",
                    attrs: {
                        id: "crash-bet-base",
                        disabled: t.disabledChangeSettings,
                        placeholder: t.$t("crash.inputBet"),
                        name: "baseAutoBetGet",
                        type: "number",
                        autocomplete: "off",
                        inputmode: "decimal"
                    },
                    domProps: {
                        value: t.baseAutoBetGet
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.baseAutoBetGet = e.target.value)
                        }
                    }
                }, t.inputListeners))]), t._v(" "), e("p", {
                    staticClass: "crash-bet-form__field crash-bet-form__field--size-s"
                }, [e("label", {
                    staticClass: "crash-bet-form__label",
                    attrs: {
                        title: t.$t("crash.betLimit"),
                        for: "crash-bet-limit"
                    }
                }, [t._v("\n                " + t._s(t.$t("crash.betLimit")) + "\n            ")]), t._v(" "), e("input", t._g({
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.limitAutoBetGet,
                        expression: "limitAutoBetGet"
                    }],
                    staticClass: "crash-bet-form__input",
                    attrs: {
                        id: "crash-bet-limit",
                        disabled: t.disabledChangeSettings,
                        placeholder: t.$t("crash.inputBet"),
                        name: "limitAutoBetGet",
                        type: "number",
                        autocomplete: "off",
                        inputmode: "decimal"
                    },
                    domProps: {
                        value: t.limitAutoBetGet
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.limitAutoBetGet = e.target.value)
                        }
                    }
                }, t.inputListeners))]), t._v(" "), e("p", {
                    staticClass: "crash-bet-form__field crash-bet-form__field--size-s"
                }, [e("label", {
                    staticClass: "crash-bet-form__label",
                    attrs: {
                        for: "crash-bet-cashout",
                        title: t.$t("crash.betCashOut") + " (≥ 1.01)"
                    }
                }, [t._v("\n                " + t._s(t.$t("crash.betCashOut")) + " (≥ 1.01)\n            ")]), t._v(" "), e("input", t._g({
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.cashoutAutoBetGet,
                        expression: "cashoutAutoBetGet"
                    }],
                    staticClass: "crash-bet-form__input",
                    attrs: {
                        id: "crash-bet-cashout",
                        disabled: t.disabledChangeSettings,
                        placeholder: t.$t("crash.inputCoef"),
                        name: "cashoutAutoBetGet",
                        type: "number",
                        autocomplete: "off",
                        inputmode: "decimal"
                    },
                    domProps: {
                        value: t.cashoutAutoBetGet
                    },
                    on: {
                        input: function(e) {
                            e.target.composing || (t.cashoutAutoBetGet = e.target.value)
                        }
                    }
                }, t.inputListeners))])]), t._v(" "), e("div", {
                    staticClass: "crash-bet-form__wrap crash-bet-form__wrap--autogame"
                }, [e("fieldset", {
                    staticClass: "crash-bet-form__field"
                }, [e("legend", {
                    staticClass: "crash-bet-form__text crash-bet-form__text--win crash-text"
                }, [t._v("\n                " + t._s(t.$t("crash.betTextWin")) + "\n            ")]), t._v(" "), e("ul", {
                    staticClass: "crash-bet-form__group"
                }, t._l(t.autoBetInWinOptions, (function(r) {
                    return e("li", {
                        key: r.id,
                        staticClass: "crash-bet-form__option"
                    }, [e("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.selectedAutoBetInWinOptionGet,
                            expression: "selectedAutoBetInWinOptionGet"
                        }],
                        staticClass: "crash-bet-form__radio crash-bet-form__radio--win",
                        attrs: {
                            id: r.id,
                            type: "radio",
                            name: "win"
                        },
                        domProps: {
                            value: r.value,
                            checked: t._q(t.selectedAutoBetInWinOptionGet, r.value)
                        },
                        on: {
                            change: function(e) {
                                t.selectedAutoBetInWinOptionGet = r.value
                            }
                        }
                    }), t._v(" "), e("label", {
                        staticClass: "crash-bet-form__label crash-bet-form__label--radio",
                        attrs: {
                            for: r.id
                        }
                    }, [t._v("\n                        " + t._s(t.$t(r.text)) + "\n                    ")])])
                })), 0)]), t._v(" "), e("fieldset", {
                    staticClass: "crash-bet-form__field"
                }, [e("legend", {
                    staticClass: "crash-bet-form__text crash-bet-form__text--loss crash-text"
                }, [t._v("\n                " + t._s(t.$t("crash.betTextLoss")) + "\n            ")]), t._v(" "), e("ul", {
                    staticClass: "crash-bet-form__group"
                }, t._l(t.autoBetOnLossOptions, (function(r) {
                    return e("li", {
                        key: r.id,
                        staticClass: "crash-bet-form__option"
                    }, [e("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.selectedAutoBetOnLossOptionGet,
                            expression: "selectedAutoBetOnLossOptionGet"
                        }],
                        staticClass: "crash-bet-form__radio crash-bet-form__radio--loss",
                        attrs: {
                            id: r.id,
                            type: "radio",
                            name: "loss"
                        },
                        domProps: {
                            value: r.value,
                            checked: t._q(t.selectedAutoBetOnLossOptionGet, r.value)
                        },
                        on: {
                            change: function(e) {
                                t.selectedAutoBetOnLossOptionGet = r.value
                            }
                        }
                    }), t._v(" "), e("label", {
                        staticClass: "crash-bet-form__label crash-bet-form__label--radio",
                        attrs: {
                            for: r.id
                        }
                    }, [t._v("\n                        " + t._s(t.$t(r.text)) + "\n                    ")])])
                })), 0)])])])
            };

            function kn(t) {
                return kn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, kn(t)
            }

            function Tn(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function Ln(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Tn(Object(r), !0).forEach((function(e) {
                        In(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Tn(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function In(t, e, r) {
                return (e = function(t) {
                    var e = function(t, e) {
                        if ("object" !== kn(t) || null === t) return t;
                        var r = t[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var n = r.call(t, e || "default");
                            if ("object" !== kn(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(t, "string");
                    return "symbol" === kn(e) ? e : String(e)
                }(e)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
            Bn._withStripped = !0;
            const Gn = {
                props: {
                    disabledChangeSettings: {
                        type: Boolean,
                        required: !0
                    },
                    prepareSumFunc: {
                        type: Function,
                        required: !0
                    },
                    minBet: {
                        type: Number,
                        required: !0
                    },
                    maxBet: {
                        type: Number,
                        required: !0
                    }
                },
                data: function() {
                    return {
                        isFocusedbaseAutoBetGet: !1,
                        isFocusedlimitAutoBetGet: !1,
                        isFocusedcashoutAutoBetGet: !1,
                        autoBetInWinOptions: [{
                            id: "radio-win-base",
                            value: !1,
                            text: "crash.betBackBase"
                        }, {
                            id: "radio-win-doubling",
                            value: !0,
                            text: "crash.betDoubling"
                        }],
                        autoBetOnLossOptions: [{
                            id: "radio-loss-base",
                            value: !1,
                            text: "crash.betBackBase"
                        }, {
                            id: "radio-loss-doubling",
                            value: !0,
                            text: "crash.betDoubling"
                        }]
                    }
                },
                computed: Ln(Ln({}, (0, o.mapGetters)("crash", ["baseAutoBet", "limitAutoBet", "cashoutAutoBet", "selectedAutoBetInWinOption", "selectedAutoBetOnLossOption"])), {}, {
                    baseAutoBetGet: {
                        get: function() {
                            return (this.isFocusedbaseAutoBetGet ? this.localValueAutoGame : this.baseAutoBet) || ""
                        },
                        set: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                e = this.filterValueAutoGame(t);
                            this.setBaseAutoBet(this.prepareSumFunc(e))
                        }
                    },
                    limitAutoBetGet: {
                        get: function() {
                            return (this.isFocusedlimitAutoBetGet ? this.localValueAutoGame : this.limitAutoBet) || ""
                        },
                        set: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                e = this.filterValueAutoGame(t);
                            this.setLimitAutoBet(this.prepareSumFunc(e))
                        }
                    },
                    cashoutAutoBetGet: {
                        get: function() {
                            return (this.isFocusedcashoutAutoBetGet ? this.localValueAutoGame : this.cashoutAutoBet) || ""
                        },
                        set: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                e = this.filterValueAutoGame(t);
                            this.setCashoutAutoBet(this.prepareSumFunc(e))
                        }
                    },
                    selectedAutoBetInWinOptionGet: {
                        get: function() {
                            return this.selectedAutoBetInWinOption
                        },
                        set: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                            this.setSelectedAutoBetInWinOption(t)
                        }
                    },
                    selectedAutoBetOnLossOptionGet: {
                        get: function() {
                            return this.selectedAutoBetOnLossOption
                        },
                        set: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                            this.setSelectedAutoBetOnLossOption(t)
                        }
                    },
                    inputListeners: function() {
                        var t = this;
                        return Ln(Ln({}, this.$listeners), {}, {
                            input: function(e) {
                                return t.$emit("input", e.target.value)
                            },
                            change: function(e) {
                                return t.$emit("change", e.target.value)
                            },
                            focus: function(e) {
                                return t.onFocus(e)
                            },
                            blur: function(e) {
                                return t.onBlur(e)
                            }
                        })
                    }
                }),
                methods: Ln(Ln({}, (0, o.mapMutations)("crash", ["setBaseAutoBet", "setLimitAutoBet", "setCashoutAutoBet", "setSelectedAutoBetInWinOption", "setSelectedAutoBetOnLossOption"])), {}, {
                    filterValueAutoGame: function(t) {
                        var e = (t = t.toString()).length - 1;
                        return [",", "."].includes(t[e]) && (t = t.substring(0, e)), t
                    },
                    updateLocalValueAutoGame: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        this.localValueAutoGame = t ? this[t] : t
                    },
                    onFocus: function(t) {
                        this.updateLocalValueAutoGame(t.target.name), this["isFocused".concat(t.target.name)] = !0, this.$emit("focus")
                    },
                    onBlur: function(t) {
                        this["isFocused".concat(t.target.name)] = !1, this.updateLocalValueAutoGame(), this.$emit("blur")
                    }
                })
            };
            var Rn = r(83551900);
            const Dn = (0, Rn.Z)(Gn, Bn, [], !1, null, null, null).exports;
            var Nn = r(75089783),
                Fn = function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "crash-history"
                    }, [e("div", {
                        staticClass: "crash-history__header"
                    }, [e("p", {
                        staticClass: "crash-history__title"
                    }, [t._v("\n            " + t._s(t.$t("crash.history")) + "\n        ")])]), t._v(" "), e("div", {
                        staticClass: "crash-history__main scrollbar"
                    }, [e("div", {
                        staticClass: "crash-history__row crash-history__row--head"
                    }, [e("p", {
                        staticClass: "crash-history__td"
                    }, [t._v("\n                " + t._s(t.$t("common.date")) + "\n            ")]), t._v(" "), e("p", {
                        staticClass: "crash-history__td"
                    }, [t._v("\n                " + t._s(t.$t("common.betGamesTime")) + "\n            ")]), t._v(" "), e("p", {
                        staticClass: "crash-history__td"
                    }, [t._v("\n                " + t._s(t.$t("common.bet")) + "\n            ")]), t._v(" "), e("p", {
                        staticClass: "crash-history__td"
                    }, [t._v("\n                " + t._s(t.$t("common.coef")) + "\n            ")]), t._v(" "), e("p", {
                        staticClass: "crash-history__td"
                    }, [t._v("\n                " + t._s(t.$t("crash.resultsPrize")) + "\n            ")]), t._v(" "), e("p", {
                        staticClass: "crash-history__td"
                    }, [t._v("\n                " + t._s(t.$t("common.betGamesCrash")) + "\n            ")])]), t._v(" "), t.history.length ? t._e() : e("div", {
                        staticClass: "crash-history__empty crash-history-empty"
                    }, [e("div", {
                        staticClass: "crash-history-empty__ico"
                    }), t._v(" "), e("p", {
                        staticClass: "crash-history-empty__text"
                    }, [t._v("\n                " + t._s(t.$t("crash.historyEmptyText")) + "\n            ")])]), t._v(" "), t._l(t.history, (function(r, n) {
                        return e("div", {
                            key: t.getKey(r, n),
                            staticClass: "crash-history__row",
                            class: t.getRowClass(r.winningAmount)
                        }, [e("p", {
                            staticClass: "crash-history__td"
                        }, [t._v("\n                " + t._s(r.date) + "\n            ")]), t._v(" "), e("p", {
                            staticClass: "crash-history__td"
                        }, [t._v("\n                " + t._s(r.time) + "\n            ")]), t._v(" "), e("p", {
                            staticClass: "crash-history__td"
                        }, [t._v("\n                " + t._s(t.getBetAmountWithCurrency(r.balanceId, r.betAmount)) + "\n            ")]), t._v(" "), e("p", {
                            staticClass: "crash-history__td"
                        }, [t._v("\n                x" + t._s(r.userCoefficient) + "\n            ")]), t._v(" "), e("p", {
                            staticClass: "crash-history__td"
                        }, [t._v("\n                " + t._s(t.getWinningAmountWithCurrency(r.balanceId, r.winningAmount)) + "\n            ")]), t._v(" "), e("p", {
                            staticClass: "crash-history__td"
                        }, [t._v("\n                x" + t._s(r.crashCoefficient) + "\n            ")])])
                    }))], 2)])
                };

            function Mn(t) {
                return Mn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, Mn(t)
            }

            function Un(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function $n(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Un(Object(r), !0).forEach((function(e) {
                        Wn(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Un(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function Wn(t, e, r) {
                return (e = function(t) {
                    var e = function(t, e) {
                        if ("object" !== Mn(t) || null === t) return t;
                        var r = t[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var n = r.call(t, e || "default");
                            if ("object" !== Mn(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(t, "string");
                    return "symbol" === Mn(e) ? e : String(e)
                }(e)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
            Fn._withStripped = !0;
            const Hn = {
                name: "CrashHistory",
                mixins: [r(74807901).e],
                computed: $n($n({}, (0, o.mapGetters)("crash", ["history"])), (0, o.mapGetters)("user", ["accounts", "activeAccountCurrency"])),
                methods: {
                    getRowClass: function(t) {
                        return t ? "crash-history__row--win" : "crash-history__row--lose"
                    },
                    getCurrency: function(t) {
                        var e;
                        return (null === (e = this.accounts.find((function(e) {
                            return e.id === t
                        }))) || void 0 === e ? void 0 : e.currency.code) || this.activeAccountCurrency.code
                    },
                    getBetAmountWithCurrency: function(t, e) {
                        var r = this.getCurrency(t);
                        return "".concat(e, " ").concat(r)
                    },
                    getWinningAmountWithCurrency: function(t, e) {
                        var r = this.getCurrency(t);
                        return "".concat(e, " ").concat(r)
                    },
                    getKey: function(t, e) {
                        var r = t.date;
                        return "".concat(r, "_").concat(e)
                    }
                }
            };
            const qn = (0, Rn.Z)(Hn, Fn, [], !1, null, null, null).exports;
            var Vn = r(11167113);
            r(55702707), r(55430541);

            function zn(t) {
                return zn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, zn(t)
            }

            function Kn(t) {
                return function(t) {
                    if (Array.isArray(t)) return Yn(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return Yn(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === r && t.constructor && (r = t.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(t);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Yn(t, e)
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function Yn(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function Zn(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function Xn(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Zn(Object(r), !0).forEach((function(e) {
                        Jn(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Zn(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function Jn(t, e, r) {
                return (e = function(t) {
                    var e = function(t, e) {
                        if ("object" !== zn(t) || null === t) return t;
                        var r = t[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var n = r.call(t, e || "default");
                            if ("object" !== zn(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(t, "string");
                    return "symbol" === zn(e) ? e : String(e)
                }(e)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
            const Qn = {
                namespaced: !0,
                state: {
                    baseAutoBet: "",
                    limitAutoBet: "",
                    cashoutAutoBet: "",
                    selectedAutoBetInWinOption: !1,
                    selectedAutoBetOnLossOption: !1,
                    stageId: null,
                    players: [],
                    countAllPlayers: 0,
                    playersBoardActivityIsBlocked: !1,
                    history: [],
                    betsAmount: 0,
                    totalGain: 0
                },
                getters: {
                    baseAutoBet: function(t) {
                        return t.baseAutoBet
                    },
                    limitAutoBet: function(t) {
                        return t.limitAutoBet
                    },
                    cashoutAutoBet: function(t) {
                        return t.cashoutAutoBet
                    },
                    selectedAutoBetInWinOption: function(t) {
                        return t.selectedAutoBetInWinOption
                    },
                    selectedAutoBetOnLossOption: function(t) {
                        return t.selectedAutoBetOnLossOption
                    },
                    playersBoardActivityIsBlocked: function(t) {
                        return t.playersBoardActivityIsBlocked
                    },
                    countAllPlayers: function(t) {
                        return t.countAllPlayers
                    },
                    stageId: function(t) {
                        return t.stageId
                    },
                    players: function(t) {
                        return t.players
                    },
                    history: function(t) {
                        return t.history
                    },
                    betsAmount: function(t) {
                        return t.betsAmount
                    },
                    totalGain: function(t) {
                        return t.totalGain
                    }
                },
                mutations: {
                    setBaseAutoBet: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                        t.baseAutoBet = e
                    },
                    setLimitAutoBet: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                        t.limitAutoBet = e
                    },
                    setCashoutAutoBet: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                        t.cashoutAutoBet = e
                    },
                    setSelectedAutoBetInWinOption: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        t.selectedAutoBetInWinOption = e
                    },
                    setSelectedAutoBetOnLossOption: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        t.selectedAutoBetOnLossOption = e
                    },
                    setStageId: function(t, e) {
                        t.stageId = e
                    },
                    setPlayers: function(t, e) {
                        t.players = e
                    },
                    setHistory: function(t, e) {
                        t.history = e
                    },
                    setBetsAmount: function(t, e) {
                        t.betsAmount = e
                    },
                    setTotalGain: function(t, e) {
                        t.totalGain = e
                    },
                    setPlayersBoardActivityIsBlocked: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        t.playersBoardActivityIsBlocked = e
                    },
                    setCountAllPlayers: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                        t.countAllPlayers = e
                    }
                },
                actions: {
                    setStageId: function(t, e) {
                        var r = t.commit;
                        Object.values(Vn.c).includes(e) && r("setStageId", e)
                    },
                    setPlayers: function(t, e) {
                        var r = t.commit,
                            n = t.state,
                            o = new Map,
                            i = e.allUserAccounts.map((function(t) {
                                return t.id.toString()
                            }));
                        n.players.forEach((function(t) {
                            return o.set(t.betId, t)
                        })), e.players.forEach((function(t) {
                            if (t.hdui && !o.has(t.id)) {
                                var e = (a = (n = t).id, s = void 0 === a ? 0 : a, c = n.hdui, u = void 0 === c ? "0" : c, l = n.bet, f = void 0 === l ? 0 : l, h = n.cf, p = void 0 === h ? 0 : h, d = n.win, m = void 0 === d ? 0 : d, v = n.itsPlayersAccount, {
                                    betId: s,
                                    userId: u,
                                    betAmount: f,
                                    coefficient: p,
                                    winningAmount: m,
                                    itsPlayersAccount: void 0 !== v && v
                                });
                                i.includes(e.userId) && (e.itsPlayersAccount = !0), o.set(t.id, e)
                            } else if (o.has(t.id)) {
                                var r = o.get(t.id);
                                o.set(t.id, Xn(Xn({}, r), {}, {
                                    coefficient: t.cf || 0,
                                    winningAmount: t.win || 0
                                }))
                            }
                            var n, a, s, c, u, l, f, h, p, d, m, v
                        })), r("setPlayers", Array.from(o.values()).sort((function(t, e) {
                            return e.betAmount - t.betAmount
                        })).sort((function(t, e) {
                            return e.itsPlayersAccount - t.itsPlayersAccount
                        })).slice(0, Vn.Uy))
                    },
                    clearPlayers: function(t) {
                        (0, t.commit)("setPlayers", [])
                    },
                    setHistory: function(t, e) {
                        var r = t.commit,
                            n = t.state,
                            o = e.history,
                            i = e.timezone,
                            a = e.isNewHistoryItem,
                            s = void 0 !== a && a,
                            c = function(t) {
                                var e = t.co,
                                    r = void 0 === e ? 0 : e,
                                    n = t.tm,
                                    o = void 0 === n ? 0 : n,
                                    a = t.cr,
                                    s = void 0 === a ? 0 : a,
                                    c = t.bs,
                                    u = void 0 === c ? 0 : c,
                                    l = t.ws,
                                    f = void 0 === l ? 0 : l,
                                    h = t.bac,
                                    p = void 0 === h ? 0 : h,
                                    d = function(t) {
                                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3,
                                            r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                                            n = "string" == typeof e ? parseInt(e, 10) : e,
                                            o = new Date(new Date(t).getTime() + 36e5 * n),
                                            i = o.getUTCDate() < 10 ? "0" + o.getUTCDate() : o.getUTCDate(),
                                            a = o.getUTCMonth() + 1 < 10 ? "0" + (o.getUTCMonth() + 1) : o.getUTCMonth() + 1,
                                            s = o.getUTCHours() < 10 ? "0" + o.getUTCHours() : o.getUTCHours(),
                                            c = o.getUTCFullYear(),
                                            u = o.getUTCMinutes() < 10 ? "0" + o.getUTCMinutes() : o.getUTCMinutes(),
                                            l = o.getUTCSeconds() < 10 ? "0" + o.getUTCSeconds() : o.getUTCSeconds();
                                        return {
                                            date: i + "." + a + (r ? "" : "." + c),
                                            time: s + ":" + u + (r ? "" : ":" + l)
                                        }
                                    }(1e3 * o, i);
                                return {
                                    date: d.date,
                                    time: d.time,
                                    crashCoefficient: s,
                                    userCoefficient: r,
                                    betAmount: u,
                                    winningAmount: f,
                                    balanceId: p
                                }
                            },
                            u = Kn(n.history);
                        if (s) {
                            var l = c(o);
                            u.unshift(l)
                        } else u = o.map(c);
                        r("setHistory", u)
                    },
                    setBetsAmount: function(t, e) {
                        (0, t.commit)("setBetsAmount", e || 0)
                    },
                    setTotalGain: function(t, e) {
                        (0, t.commit)("setTotalGain", e || 0)
                    }
                }
            };
            var to = function() {
                var t = this,
                    e = t._self._c;
                return e("div", {
                    staticClass: "crash-bet-form"
                }, [e("div", {
                    staticClass: "crash-bet-form__wrap"
                }, [e("p", {
                    staticClass: "crash-bet-form__field"
                }, [e("label", {
                    staticClass: "crash-bet-form__label crash-bet-form__label--size-s",
                    attrs: {
                        title: t.$t("common.bet"),
                        for: "crash-bet"
                    }
                }, [t._v("\n                " + t._s(t.$t("common.bet")) + "\n            ")]), t._v(" "), e("UiBetInput", {
                    staticClass: "crash-bet-form__input",
                    attrs: {
                        id: "crash-bet"
                    }
                })], 1)]), t._v(" "), e("div", {
                    staticClass: "crash-bet-form__btns"
                }, [t._l(t.bets, (function(r) {
                    return e("button", {
                        staticClass: "crash-btn crash-bet-form__btn crash-bet-form__btn--sum",
                        class: t.blockedClass,
                        attrs: {
                            disabled: t.blockedBetBtns,
                            type: "button"
                        },
                        on: {
                            click: function(e) {
                                return t.clickBet(r)
                            }
                        }
                    }, [e("span", {
                        staticClass: "crash-bet-form__text"
                    }, [t._v("\n                " + t._s(r) + "\n            ")])])
                })), t._v(" "), e("button", {
                    staticClass: "crash-btn crash-bet-form__btn crash-bet-form__btn--reset",
                    class: t.blockedClass,
                    attrs: {
                        disabled: t.blockedBetBtns,
                        title: t.$t("common.clear"),
                        "aria-label": t.$t("common.clear"),
                        type: "reset"
                    },
                    on: {
                        click: function(e) {
                            return t.clearSumBet()
                        }
                    }
                })], 2)])
            };
            to._withStripped = !0;
            const eo = {
                mixins: [r(32776368).Z]
            };
            const ro = (0, Rn.Z)(eo, to, [], !1, null, null, null).exports;

            function no(t) {
                return no = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, no(t)
            }

            function oo() {
                oo = function() {
                    return e
                };
                var t, e = {},
                    r = Object.prototype,
                    n = r.hasOwnProperty,
                    o = Object.defineProperty || function(t, e, r) {
                        t[e] = r.value
                    },
                    i = "function" == typeof Symbol ? Symbol : {},
                    a = i.iterator || "@@iterator",
                    s = i.asyncIterator || "@@asyncIterator",
                    c = i.toStringTag || "@@toStringTag";

                function u(t, e, r) {
                    return Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    u({}, "")
                } catch (t) {
                    u = function(t, e, r) {
                        return t[e] = r
                    }
                }

                function l(t, e, r, n) {
                    var i = e && e.prototype instanceof y ? e : y,
                        a = Object.create(i.prototype),
                        s = new B(n || []);
                    return o(a, "_invoke", {
                        value: x(t, r, s)
                    }), a
                }

                function f(t, e, r) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, r)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                e.wrap = l;
                var h = "suspendedStart",
                    p = "suspendedYield",
                    d = "executing",
                    m = "completed",
                    v = {};

                function y() {}

                function b() {}

                function g() {}
                var w = {};
                u(w, a, (function() {
                    return this
                }));
                var S = Object.getPrototypeOf,
                    O = S && S(S(k([])));
                O && O !== r && n.call(O, a) && (w = O);
                var _ = g.prototype = y.prototype = Object.create(w);

                function A(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        u(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function P(t, e) {
                    function r(o, i, a, s) {
                        var c = f(t[o], t, i);
                        if ("throw" !== c.type) {
                            var u = c.arg,
                                l = u.value;
                            return l && "object" == no(l) && n.call(l, "__await") ? e.resolve(l.__await).then((function(t) {
                                r("next", t, a, s)
                            }), (function(t) {
                                r("throw", t, a, s)
                            })) : e.resolve(l).then((function(t) {
                                u.value = t, a(u)
                            }), (function(t) {
                                return r("throw", t, a, s)
                            }))
                        }
                        s(c.arg)
                    }
                    var i;
                    o(this, "_invoke", {
                        value: function(t, n) {
                            function o() {
                                return new e((function(e, o) {
                                    r(t, n, e, o)
                                }))
                            }
                            return i = i ? i.then(o, o) : o()
                        }
                    })
                }

                function x(e, r, n) {
                    var o = h;
                    return function(i, a) {
                        if (o === d) throw new Error("Generator is already running");
                        if (o === m) {
                            if ("throw" === i) throw a;
                            return {
                                value: t,
                                done: !0
                            }
                        }
                        for (n.method = i, n.arg = a;;) {
                            var s = n.delegate;
                            if (s) {
                                var c = E(s, n);
                                if (c) {
                                    if (c === v) continue;
                                    return c
                                }
                            }
                            if ("next" === n.method) n.sent = n._sent = n.arg;
                            else if ("throw" === n.method) {
                                if (o === h) throw o = m, n.arg;
                                n.dispatchException(n.arg)
                            } else "return" === n.method && n.abrupt("return", n.arg);
                            o = d;
                            var u = f(e, r, n);
                            if ("normal" === u.type) {
                                if (o = n.done ? m : p, u.arg === v) continue;
                                return {
                                    value: u.arg,
                                    done: n.done
                                }
                            }
                            "throw" === u.type && (o = m, n.method = "throw", n.arg = u.arg)
                        }
                    }
                }

                function E(e, r) {
                    var n = r.method,
                        o = e.iterator[n];
                    if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, E(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), v;
                    var i = f(o, e.iterator, r.arg);
                    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, v;
                    var a = i.arg;
                    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, v) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, v)
                }

                function C(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function j(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function B(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(C, this), this.reset(!0)
                }

                function k(e) {
                    if (e || "" === e) {
                        var r = e[a];
                        if (r) return r.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var o = -1,
                                i = function r() {
                                    for (; ++o < e.length;)
                                        if (n.call(e, o)) return r.value = e[o], r.done = !1, r;
                                    return r.value = t, r.done = !0, r
                                };
                            return i.next = i
                        }
                    }
                    throw new TypeError(no(e) + " is not iterable")
                }
                return b.prototype = g, o(_, "constructor", {
                    value: g,
                    configurable: !0
                }), o(g, "constructor", {
                    value: b,
                    configurable: !0
                }), b.displayName = u(g, c, "GeneratorFunction"), e.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === b || "GeneratorFunction" === (e.displayName || e.name))
                }, e.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, g) : (t.__proto__ = g, u(t, c, "GeneratorFunction")), t.prototype = Object.create(_), t
                }, e.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, A(P.prototype), u(P.prototype, s, (function() {
                    return this
                })), e.AsyncIterator = P, e.async = function(t, r, n, o, i) {
                    void 0 === i && (i = Promise);
                    var a = new P(l(t, r, n, o), i);
                    return e.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, A(_), u(_, c, "Generator"), u(_, a, (function() {
                    return this
                })), u(_, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(t) {
                    var e = Object(t),
                        r = [];
                    for (var n in e) r.push(n);
                    return r.reverse(),
                        function t() {
                            for (; r.length;) {
                                var n = r.pop();
                                if (n in e) return t.value = n, t.done = !1, t
                            }
                            return t.done = !0, t
                        }
                }, e.values = k, B.prototype = {
                    constructor: B,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(j), !e)
                            for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t)
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        if (this.done) throw e;
                        var r = this;

                        function o(n, o) {
                            return s.type = "throw", s.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o
                        }
                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var a = this.tryEntries[i],
                                s = a.completion;
                            if ("root" === a.tryLoc) return o("end");
                            if (a.tryLoc <= this.prev) {
                                var c = n.call(a, "catchLoc"),
                                    u = n.call(a, "finallyLoc");
                                if (c && u) {
                                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                                } else if (c) {
                                    if (this.prev < a.catchLoc) return o(a.catchLoc, !0)
                                } else {
                                    if (!u) throw new Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return o(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r];
                            if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var i = o;
                                break
                            }
                        }
                        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                        var a = i ? i.completion : {};
                        return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, v) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), v
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), j(r), v
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var r = this.tryEntries[e];
                            if (r.tryLoc === t) {
                                var n = r.completion;
                                if ("throw" === n.type) {
                                    var o = n.arg;
                                    j(r)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(e, r, n) {
                        return this.delegate = {
                            iterator: k(e),
                            resultName: r,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = t), v
                    }
                }, e
            }

            function io(t, e, r, n, o, i, a) {
                try {
                    var s = t[i](a),
                        c = s.value
                } catch (u) {
                    return void r(u)
                }
                s.done ? e(c) : Promise.resolve(c).then(n, o)
            }

            function ao(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var i = t.apply(e, r);

                        function a(t) {
                            io(i, n, o, a, s, "next", t)
                        }

                        function s(t) {
                            io(i, n, o, a, s, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }

            function so(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function co(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? so(Object(r), !0).forEach((function(e) {
                        uo(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : so(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function uo(t, e, r) {
                return (e = function(t) {
                    var e = function(t, e) {
                        if ("object" !== no(t) || null === t) return t;
                        var r = t[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var n = r.call(t, e || "default");
                            if ("object" !== no(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(t, "string");
                    return "symbol" === no(e) ? e : String(e)
                }(e)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
            const lo = Pn({
                name: "Crash",
                mixins: [bn],
                components: {
                    CrashBetsButtonsAutoGame: Dn,
                    CrashPlayersBoard: Nn.Z,
                    CrashHistory: qn,
                    BetsButtons: ro
                },
                constants: {
                    betTypeAuto: "auto",
                    betTypeHands: "hands",
                    gameStrokeValue: 385,
                    DEVIATION_TRANSFORM_COEFFS_LINE: 61,
                    DEFAULT_TRANSFORM_COEFFS_LINE: 380,
                    DEVIATION_TRANSFORM_TIME_LINE: 150,
                    DEFAULT_TRANSFORM_TIME_LINE: 90,
                    MAX_COUNT_OF_TIME_LINE: 8,
                    DEFAULT_COEFFS_LINE: [{
                        value: 1.2,
                        transform: 329
                    }, {
                        value: 1.4,
                        transform: 268
                    }, {
                        value: 1.6,
                        transform: 207
                    }, {
                        value: 1.8,
                        transform: 146
                    }, {
                        value: 2,
                        transform: 85
                    }],
                    DEFAULT_TIME_LINE: [{
                        value: 1,
                        transform: 90
                    }, {
                        value: 2,
                        transform: 240
                    }, {
                        value: 3,
                        transform: 390
                    }, {
                        value: 4,
                        transform: 540
                    }, {
                        value: 5,
                        transform: 690
                    }, {
                        value: 6,
                        transform: 840
                    }, {
                        value: 7,
                        transform: 990
                    }, {
                        value: 8,
                        transform: 1140
                    }]
                },
                data: function() {
                    return {
                        requestTimerId: null,
                        requestShowTimerId: null,
                        requestCoeffId: null,
                        requestAnimationId: null,
                        then: 0,
                        thenForCoeff: 0,
                        startTime: 0,
                        sinceStart: 0,
                        elapsed: 0,
                        elapsedForCoeff: 0,
                        remainingTimeInSeconds: null,
                        startTimerTimestamp: 0,
                        timeAutogame: 5e3,
                        currentAutoBet: 0,
                        middleAutoBet: 0,
                        timeToStart: null,
                        timeFromPrevCoeff: 0,
                        totalTimeInSeconds: 0,
                        runningCoeffValue: null,
                        runningCoeffTime: null,
                        shiftCoeffTime: null,
                        MFS: 0,
                        connection: null,
                        hub: null,
                        coeffStartTime: 0,
                        drawId: null,
                        prevDrawId: null,
                        coeffList: [],
                        isCoeffDown: Vn.d7[1],
                        hasTakeWin: !1,
                        isCrashedGame: !1,
                        isGameCompleted: !1,
                        pinPosition: wn()(Vn.u9),
                        timeLine: wn()(this.$consts.DEFAULT_TIME_LINE),
                        coeffsLine: wn()(this.$consts.DEFAULT_COEFFS_LINE),
                        currentUser: null,
                        selectedBetType: this.$consts.betTypeHands,
                        betTabs: [{
                            type: this.$consts.betTypeHands,
                            text: "crash.betHands"
                        }, {
                            type: this.$consts.betTypeAuto,
                            text: "common.autoBet"
                        }],
                        reconnectCount: 0,
                        makeConnectionIsProcessed: !1,
                        errorMakeConnectionIsProcessed: !1,
                        stopWaitingConnection: null,
                        stopWaitingConnectionPing: null,
                        stopWaitingConnectionCoeff: null,
                        freezeGame: !1,
                        serverTimeStamp: 0,
                        visibilityTimeout: 0,
                        disconnectedPromise: null,
                        requestTimers: [],
                        isAutoGameStarted: !1
                    }
                },
                computed: co(co(co(co({}, (0, o.mapGetters)("crash", ["baseAutoBet", "limitAutoBet", "cashoutAutoBet", "selectedAutoBetInWinOption", "selectedAutoBetOnLossOption", "playersBoardActivityIsBlocked", "stageId", "players"])), (0, o.mapGetters)("project", ["referenceId"])), (0, o.mapGetters)("currency", ["currentCurrency"])), {}, {
                    timerInSeconds: function() {
                        return this.remainingTimeInSeconds < 0 || this.stageId !== Vn.c.isAcceptingBets ? null : this.remainingTimeInSeconds >= Vn.U1 ? Vn.U1 : this.remainingTimeInSeconds
                    },
                    getCurrentTimeLine: function() {
                        return this.timeLine.slice(-this.$consts.MAX_COUNT_OF_TIME_LINE)
                    },
                    getCurrentCoeffsLine: function() {
                        return this.coeffsLine.slice(-5)
                    },
                    getShineStyle: function() {
                        return {
                            bottom: "".concat(this.pinPosition.bottom, "%"),
                            left: "".concat(this.pinPosition.left, "%")
                        }
                    },
                    getPinStyle: function() {
                        var t = this.$consts.MAX_COUNT_OF_TIME_LINE / 2,
                            e = parseFloat(this.sinceStart || 0),
                            r = e > 0 ? e / Vn.WT : 0,
                            n = 0;
                        return n = t - r > 0 ? t - r : -(r - t), r > this.$consts.MAX_COUNT_OF_TIME_LINE && (n = -t), {
                            bottom: "".concat(this.pinPosition.bottom + n, "%"),
                            left: "".concat(this.pinPosition.left, "%"),
                            transform: "rotate(".concat(this.pinPosition.transform, "deg)")
                        }
                    },
                    getStrokeCoordX2: function() {
                        return 0 === this.pinPosition.left ? 60 : 12 * this.pinPosition.left + 170
                    },
                    getStrokeCoordY2: function() {
                        return 0 === this.pinPosition.bottom ? 370 : this.$consts.gameStrokeValue - 3.85 * this.pinPosition.bottom - 40
                    },
                    getStrokeShadow: function() {
                        return "\n                    M47 ".concat(this.$consts.gameStrokeValue, "\n                    Q").concat((this.getStrokeCoordX2 - 47) / 2, "\n                    ").concat(this.$consts.gameStrokeValue, "\n                    ").concat(this.getStrokeCoordX2, " ").concat(this.getStrokeCoordY2, "\n                ")
                    },
                    getStrokeGrad2: function() {
                        return "\n                    ".concat(this.getStrokeShadow, "\n                    L").concat(this.getStrokeCoordX2, "\n                    ").concat(this.$consts.gameStrokeValue, " Z\n                ")
                    },
                    getWaitBetClass: function() {
                        return {
                            "crash-game__waiting--is-show": this.stageId === Vn.c.isWaiting && !this.resultMsg
                        }
                    },
                    blockedBtnTakeWin: function() {
                        var t;
                        return this.disabledTakeWin || (null === (t = this.currentUser) || void 0 === t ? void 0 : t.apcf) > 1
                    },
                    disabledTakeWin: function() {
                        return this.hasTakeWin || this.blockedActivity || !this.currentUser || this.currentUser && this.currentUser.ws || this.disabledMakeBetCurrencyAccount
                    },
                    disabledStartAutoGame: function() {
                        var t = this.cashoutAutoBet || 0;
                        return this.disabledMakeBet || this.bonusFreeBetIsActive || !this.baseAutoBet || !this.limitAutoBet || !this.cashoutAutoBet || this.baseAutoBet < this.minBet || this.limitAutoBet < this.baseAutoBet || this.limitAutoBet > this.maxBet || t < Vn.mX
                    },
                    disabledStopAutoGame: function() {
                        return this.stageId === Vn.c.isEnded || !this.enableAutogame
                    },
                    disabledMakeBetForStage: function() {
                        return null === this.drawId || this.drawId === this.prevDrawId
                    },
                    disabledMakeBetForSameAccount: function() {
                        var t = this;
                        return En()(this.players, (function(e) {
                            return e.userId.toString() === t.gameAccountId.toString()
                        }))
                    },
                    disabledMakeBet: function() {
                        return this.gameStarted || this.makeConnectionIsProcessed || null !== this.runningCoeffValue || this.disabledMakeBetForStage || this.disabledMakeBetCurrencyAccount || this.disabledMakeBetForSameAccount || this.currentUser || this.stageId === Vn.c.isAcceptingBets && null === this.remainingTimeInSeconds || this.stageId === Vn.c.isStarted || this.stageId === Vn.c.isEnded || null !== this.remainingTimeInSeconds && this.remainingTimeInSeconds <= Vn.Td
                    },
                    disabledMakeBetCurrencyAccount: function() {
                        return !!this.currentUser && this.currentUser.bac.toString() !== this.activeAccountId.toString()
                    },
                    disabledSetSelectedBetType: function() {
                        return !this.drawId || this.disabledMakeBetCurrencyAccount || this.stageId === Vn.c.isEnded || this.gameStarted || this.currentUser || this.bonusFreeBetIsActive
                    },
                    disabledChangeSettingsAutoGame: function() {
                        return !!this.currentUser || this.gameStarted
                    },
                    getTimerStyle: function() {
                        return this.timerInSeconds > 0 ? {
                            transform: "rotate(".concat(30 * this.timerInSeconds - 300, "deg)")
                        } : {}
                    },
                    showBetAcceptedInfo: function() {
                        return this.timerInSeconds && (this.disabledMakeBetForSameAccount || this.currentUser)
                    },
                    gameRenderingStopped: function() {
                        return this.freezeGame || this.makeConnectionIsProcessed
                    },
                    showRunningCoeff: function() {
                        return null !== this.runningCoeffValue && !this.gameRenderingStopped
                    },
                    gameRunning: function() {
                        return !this.isCrashedGame && this.showRunningCoeff
                    },
                    checkBlockedGame: function() {
                        return this.enableAutogame ? this.gameStarted || !this.baseAutoBet || !this.limitAutoBet || !this.cashoutAutoBet : !this.calculatedSumBet && !this.bonusFreeBetIsActive
                    },
                    currencyId: function() {
                        return this.activeAccountCurrency ? this.activeAccountCurrency.id : this.currentCurrency.id
                    }
                }),
                watch: {
                    bonusFreeBetIsActive: function(t) {
                        t && this.setSelectedBetType(this.$consts.betTypeHands, !0)
                    }
                },
                beforeDestroy: function() {
                    this.disconnect(), this.clearAllTimers()
                },
                mounted: function() {
                    this.isMobileView || this.onloadHandler()
                },
                methods: co(co(co(co({}, (0, o.mapActions)("crash", ["setStageId", "setPlayers", "clearPlayers", "setHistory", "setBetsAmount", "setTotalGain"])), (0, o.mapActions)("waitingConnection", ["startWaitingConnection"])), (0, o.mapMutations)("crash", ["setPlayersBoardActivityIsBlocked", "setCountAllPlayers"])), {}, {
                    onloadHandler: function() {
                        var t = this;
                        this.makeNewConnection();
                        var e = function() {
                            var e = ao(oo().mark((function e() {
                                return oo().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!(t.makeConnectionIsProcessed || t.reconnectCount >= Vn.s$)) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 2:
                                            if ("hidden" !== document.visibilityState || t.freezeGame) {
                                                e.next = 6;
                                                break
                                            }
                                            t.visibilityDisconnected(), e.next = 13;
                                            break;
                                        case 6:
                                            if (!t.visibilityTimeout) {
                                                e.next = 10;
                                                break
                                            }
                                            t.clearVisibilityTimeout(), e.next = 13;
                                            break;
                                        case 10:
                                            if (!t.freezeGame) {
                                                e.next = 13;
                                                break
                                            }
                                            return e.next = 13, t.connectAfterDisconnect();
                                        case 13:
                                            t.$forceUpdate();
                                        case 14:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                        document.addEventListener("visibilitychange", e), this.$once("hook:beforeDestroy", (function() {
                            document.removeEventListener("visibilitychange", e)
                        }))
                    },
                    offlineHandler: function() {
                        this.freezeGame || (this.startWaitingMakeConnection(0), this.hardClearGame(!0), this.stopAutoGame())
                    },
                    customAfterHidePreloader: function() {
                        this.isMobileView && this.onloadHandler()
                    },
                    visibilityDisconnected: function() {
                        this.clearVisibilityTimeout(), this.setEnableAutogame(!1), this.visibilityTimeout = setTimeout(this.hardClearGame, Vn.DS)
                    },
                    hardClearGame: function() {
                        var t = arguments,
                            e = this;
                        return ao(oo().mark((function r() {
                            var n;
                            return oo().wrap((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        return n = t.length > 0 && void 0 !== t[0] && t[0], e.disconnectedPromise = e.$createPromise(), e.visibilityTimeout = 0, e.freezeGame = !0, r.next = 6, e.disconnect();
                                    case 6:
                                        e.clearPlayers(), e.stopTimer(), e.stopRunningCoeff(), e.setCurrentUser(null), e.setHasTakeWin(!1), e.setDefaultGuideLines(), e.setStageId(Vn.c.isWaiting), n && e.endGameCallback(), e.clearAllTimers(), e.disconnectedPromise.resolve();
                                    case 16:
                                    case "end":
                                        return r.stop()
                                }
                            }), r)
                        })))()
                    },
                    clearVisibilityTimeout: function() {
                        this.visibilityTimeout && (clearTimeout(this.visibilityTimeout), this.visibilityTimeout = 0)
                    },
                    connectAfterDisconnect: function() {
                        var t = this;
                        return ao(oo().mark((function e() {
                            return oo().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!t.makeConnectionIsProcessed) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return e.next = 4, t.disconnectedPromise;
                                    case 4:
                                        return e.next = 6, t.makeNewConnection();
                                    case 6:
                                        t.freezeGame = !1;
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    },
                    onlineHandler: function() {
                        var t = this;
                        return ao(oo().mark((function e() {
                            var r, n;
                            return oo().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, t.disconnectedPromise;
                                    case 2:
                                        return t.reconnectCount = 0, e.next = 5, t.makeNewConnection();
                                    case 5:
                                        t.freezeGame = !1, e.t0 = !0, e.next = e.t0 === (t.stageId === Vn.c.isWaiting) ? 9 : e.t0 === ((null === (r = t.currentUser) || void 0 === r ? void 0 : r.bs) && t.stageId === Vn.c.isAcceptingBets) ? 12 : e.t0 === (!(null !== (n = t.currentUser) && void 0 !== n && n.bs) && t.stageId === Vn.c.isAcceptingBets) ? 15 : e.t0 === (t.calculatedSumBet && t.stageId === Vn.c.isStarted) ? 18 : 21;
                                        break;
                                    case 9:
                                        return t.setBlockedActivity(!1), t.setBlockBetBtns(!1), e.abrupt("break", 21);
                                    case 12:
                                        return t.setBlockedActivity(!0), t.setBlockBetBtns(!0), e.abrupt("break", 21);
                                    case 15:
                                        return t.setBlockedActivity(!0), t.setBlockBetBtns(!1), e.abrupt("break", 21);
                                    case 18:
                                        return t.setBlockedActivity(!1), t.setBlockBetBtns(!0), e.abrupt("break", 21);
                                    case 21:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    },
                    resetWaitingConnectionPing: function() {
                        var t = this;
                        return ao(oo().mark((function e() {
                            return oo().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t.stopWaitingConnectionPing && t.stopWaitingConnectionPing(), e.next = 3, t.startWaitingConnection(Vn.LS);
                                    case 3:
                                        t.stopWaitingConnectionPing = e.sent;
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    },
                    clearWaitingConnectionPing: function() {
                        this.stopWaitingConnectionPing && (this.stopWaitingConnectionPing(), this.stopWaitingConnectionPing = null)
                    },
                    clearWaitingConnection: function() {
                        this.stopWaitingConnection && (this.stopWaitingConnection(), this.stopWaitingConnection = null)
                    },
                    startWaitingMakeConnection: function() {
                        var t = arguments,
                            e = this;
                        return ao(oo().mark((function r() {
                            var n;
                            return oo().wrap((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        if (n = t.length > 0 && void 0 !== t[0] ? t[0] : 600, !e.stopWaitingConnection) {
                                            r.next = 3;
                                            break
                                        }
                                        return r.abrupt("return");
                                    case 3:
                                        return r.next = 5, e.startWaitingConnection(n);
                                    case 5:
                                        e.stopWaitingConnection = r.sent;
                                    case 6:
                                    case "end":
                                        return r.stop()
                                }
                            }), r)
                        })))()
                    },
                    createConnection: function() {
                        var t = this;
                        return ao(oo().mark((function e() {
                            return oo().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t.connection = (new Cn.HubConnectionBuilder).withUrl(Vn.QL, {
                                            transport: Cn.HttpTransportType.WebSockets,
                                            logMessageContent: !0,
                                            withCredentials: !1,
                                            skipNegotiation: !0
                                        }).build(), t.connection.onclose((function() {
                                            t.makeConnectionIsProcessed || t.freezeGame || t.errorMakeConnectionHandler()
                                        })), e.next = 4, t.subscribeHubEvents();
                                    case 4:
                                        return e.next = 6, t.startConnection();
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    },
                    startConnection: function() {
                        var t = this;
                        return ao(oo().mark((function e() {
                            return oo().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (t.connection) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return e.next = 4, t.connection.start();
                                    case 4:
                                        return e.next = 6, t.registerInHub();
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    },
                    registerInHub: function() {
                        var t = this;
                        return ao(oo().mark((function e() {
                            var r, n, o, i;
                            return oo().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return r = t.guid || Vn.Hd, n = t.activeAccountId || 0, o = new URL(window.location).searchParams.get("lg") || d.DEFAULT_LANGUAGE, i = t.referenceId || 0, e.next = 6, t.connection.invoke(Vn.$x.REG_IN_HUB2, r, n, t.currencyId, o, Vn.Uy, i);
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    },
                    disconnect: function() {
                        var t = this;
                        return ao(oo().mark((function e() {
                            return oo().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (t.connection) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return e.next = 4, t.connection.stop();
                                    case 4:
                                        t.connection = null;
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    },
                    authCallBack: function() {
                        var t = this;
                        return ao(oo().mark((function e() {
                            return oo().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (t.errorMakeConnectionIsProcessed) {
                                            e.next = 6;
                                            break
                                        }
                                        return e.next = 3, t.hardClearGame();
                                    case 3:
                                        return e.next = 5, (0, c.Z)(500);
                                    case 5:
                                        t.connectAfterDisconnect();
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    },
                    makeNewConnection: function() {
                        var t = this;
                        return ao(oo().mark((function e() {
                            return oo().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!(t.reconnectCount >= Vn.s$)) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return t.closePopup("ErrorPopup"), t.makeConnectionIsProcessed = !0, e.next = 6, t.startWaitingMakeConnection();
                                    case 6:
                                        return e.next = 8, t.disconnect();
                                    case 8:
                                        return e.next = 10, (0, c.Z)(1e3);
                                    case 10:
                                        return e.prev = 10, e.next = 13, t.createConnection();
                                    case 13:
                                        e.next = 18;
                                        break;
                                    case 15:
                                        e.prev = 15, e.t0 = e.catch(10), t.errorMakeConnectionHandler();
                                    case 18:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [10, 15]
                            ])
                        })))()
                    },
                    connectionEstablished: function() {
                        this.makeConnectionIsProcessed && (this.clearWaitingConnection(), this.clearWaitingConnectionPing(), this.reconnectCount = 0, this.makeConnectionIsProcessed = !1, this.errorMakeConnectionIsProcessed = !1, this.$forceUpdate())
                    },
                    errorMakeConnectionHandler: function() {
                        var t = this;
                        return ao(oo().mark((function e() {
                            return oo().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t.errorMakeConnectionIsProcessed = !0, e.next = 3, t.disconnect();
                                    case 3:
                                        return e.next = 5, t.authFunction(!0);
                                    case 5:
                                        if (!(t.reconnectCount <= Vn.s$)) {
                                            e.next = 11;
                                            break
                                        }
                                        return t.reconnectCount += 1, e.next = 9, t.makeNewConnection();
                                    case 9:
                                        e.next = 18;
                                        break;
                                    case 11:
                                        t.clearWaitingConnection(), t.clearWaitingConnectionPing(), t.closePopup("ErrorPopup"), t.makeConnectionIsProcessed = !1, t.errorMakeConnectionIsProcessed = !1, t.showAuthErrorPopup(), t.setBlockGame(!0);
                                    case 18:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    },
                    subscribeHubEvents: function() {
                        var t = this;
                        return ao(oo().mark((function e() {
                            var r;
                            return oo().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return r = !1, e.next = 3, t.connection.on(Vn.$x.ON_REGISTER_IN_HUB, (function(e) {
                                            if (e.success) {
                                                var n;
                                                if (e.value.sts !== Vn.c.isEnded) {
                                                    var o, i = null === (o = t.$route.query) || void 0 === o ? void 0 : o.tzo,
                                                        a = jn(i);
                                                    t.setStage(e.value), t.setHistory({
                                                        history: e.value.uh,
                                                        timezone: a
                                                    })
                                                }
                                                null !== (n = t.currentUser) && void 0 !== n && n.bs && t.insertSingleBet(t.currentUser.bs), r = !0
                                            }
                                        }));
                                    case 3:
                                        return e.next = 5, t.connection.on(Vn.$x.ON_TAKE_WIN, (function(e) {
                                            r && (t.setBlockedActivity(!0), e.success || 158710 === (null == e ? void 0 : e.errorCode) || t.showErrorPopup((null == e ? void 0 : e.error) || t.$t("common.errorDefault")))
                                        }));
                                    case 5:
                                        return e.next = 7, t.connection.on(Vn.$x.ON_STAGE_CHANGE, (function(e) {
                                            e && r && t.setStage(e)
                                        }));
                                    case 7:
                                        return e.next = 9, t.connection.on(Vn.$x.ON_CURRENT_USER_CHANGE, (function(e) {
                                            if (e && r && (t.setCurrentUser(e), t.currentUser)) {
                                                if (e.cr) {
                                                    var n, o = null === (n = t.$route.query) || void 0 === n ? void 0 : n.tzo,
                                                        i = jn(o);
                                                    t.setHistory({
                                                        history: e,
                                                        timezone: i,
                                                        isNewHistoryItem: !0
                                                    })
                                                }
                                                e.st === Vn.cM.win && t.setResultPopup(t.currentUser.ws), e.st === Vn.cM.lose && t.completeGame(t.currentUser.ws), e.st === Vn.cM.isError && t.showErrorPopup(e.title)
                                            }
                                        }));
                                    case 9:
                                        return e.next = 11, t.connection.on(Vn.$x.ON_COEFF_CHANGE, (function(e) {
                                            e && r && (t.setCoeffChange(e), t.connectionEstablished())
                                        }));
                                    case 11:
                                        return e.next = 13, t.connection.on(Vn.$x.PING, (function() {
                                            t.resetWaitingConnectionPing()
                                        }));
                                    case 13:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    },
                    checkStartAutoGame: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                        if (this.currentBalance < this.currentAutoBet) return this.showErrorPopup(this.$t("common.notEnoughMoney"), !0), this.stopAutoGame(), void this.setBlockGame();
                        this.enableAutogame && this.isAutoGameStarted && this.gameStarted ? (this.handleCloseAllPopup(), "function" == typeof t ? t() : (this.clearResult(), this.startGameCallback(), this.placeBet())) : this.setBlockGame()
                    },
                    placeBet: function() {
                        var t = this;
                        return ao(oo().mark((function e() {
                            var r, n, o;
                            return oo().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return r = t.getCurrBet, n = 0, t.enableAutogame && (t.currentAutoBet && t.middleAutoBet === t.baseAutoBet || (t.currentAutoBet = t.baseAutoBet), r = t.currentAutoBet, n = t.cashoutAutoBet), t.handleCloseAllPopup(), e.prev = 4, e.next = 7, t.makeBetRequest("crash-aviator/make-bet", {
                                            BS: r,
                                            CI: t.currencyId,
                                            SI: t.drawId,
                                            APCF: n || 0
                                        });
                                    case 7:
                                        o = e.sent, t.parseGame(o), e.next = 13;
                                        break;
                                    case 11:
                                        e.prev = 11, e.t0 = e.catch(4);
                                    case 13:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [4, 11]
                            ])
                        })))()
                    },
                    parseGame: function(t) {
                        this.clearResult(), this.updateBalanceFromGame(), this.setCurrentUser({
                            apcf: t.APCF,
                            bac: t.BAC,
                            bs: t.BS,
                            nb: t.NB,
                            ui: t.UI
                        }), this.prevDrawId = this.drawId, this.isGameCompleted = !1, this.middleAutoBet = this.baseAutoBet
                    },
                    parseGameErrors: function(t) {
                        this.showErrorPopup(t.title), this.setBlockGame(!1), this.stopAutoGame(), this.clearWaitingConnection(), this.clearWaitingConnectionPing()
                    },
                    setStage: function(t) {
                        if (t) {
                            var e = t.cidt,
                                r = t.si,
                                n = t.sts,
                                o = t.tb,
                                i = t.tw,
                                a = t.LC,
                                s = void 0 === a ? [] : a,
                                c = t.us,
                                u = void 0 === c ? [] : c,
                                l = t.uc,
                                f = void 0 === l ? 0 : l,
                                h = t.cu,
                                p = void 0 === h ? null : h,
                                d = t.ts;
                            this.serverTimeStamp = d, n !== Vn.c.isStarted && n !== Vn.c.isEnded && (this.coeffStartTime = e), this.drawId = r, this.coeffList = s && s.length ? s : this.coeffList, this.setCountAllPlayers(f), this.setPlayers({
                                players: u,
                                allUserAccounts: this.accounts
                            }), this.setBetsAmount(o), this.setTotalGain(i), p && !On()(this.currentUser, p) && this.setCurrentUser(p), null != p && p.bt && null != p && p.bn && (this.activatedBonus({
                                BNTP: p.bt,
                                BNID: p.bn
                            }), [Vn.c.isAcceptingBets, Vn.c.isStarted].includes(n) && this.setBlockGame(!0)), this.setStageId(n), this.checkStage(), this.runAutoGameByNewStageId()
                        }
                    },
                    runAutoGameByNewStageId: function() {
                        this.gameStarted && this.stageId === Vn.c.isWaiting && null !== this.drawId && null !== this.prevDrawId && this.drawId !== this.prevDrawId && this.endGameCallback()
                    },
                    checkStage: function() {
                        var t = this;
                        switch (this.stageId) {
                            case Vn.c.isWaiting:
                                this.isCrashedGame = !1, this.setCurrentUser(null), this.clearPlayers();
                                break;
                            case Vn.c.isAcceptingBets:
                                if (this.totalTimeInSeconds) return;
                                this.runTimer(), this.requestTimeout((function() {
                                    t.clearResult()
                                }), Vn.TH);
                                break;
                            case Vn.c.isEnded:
                                this.stopGame()
                        }
                        this.connectionEstablished()
                    },
                    setCurrentUser: function(t) {
                        this.currentUser = t, this.activeAccountId && (t ? this.unfinishedGameAccountHandler(t.bac) : this.gameStarted || this.isAutoGameStarted || this.stageId === Vn.c.isAcceptingBets || this.stageId === Vn.c.isStarted || this.setFreezeAccount(!1))
                    },
                    clearWaitingConnectionCoeff: function() {
                        this.stopWaitingConnectionCoeff && (this.stopWaitingConnectionCoeff(), this.stopWaitingConnectionCoeff = null)
                    },
                    checkCoeffChangeWaitingConnection: function() {
                        var t = this;
                        return ao(oo().mark((function e() {
                            return oo().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!t.stopWaitingConnectionCoeff) {
                                            e.next = 3;
                                            break
                                        }
                                        return t.clearWaitingConnectionCoeff(), e.abrupt("return");
                                    case 3:
                                        if (t.isCoeffDown !== Vn.d7[0]) {
                                            e.next = 7;
                                            break
                                        }
                                        return e.next = 6, t.startWaitingConnection(Vn.ad);
                                    case 6:
                                        t.stopWaitingConnectionCoeff = e.sent;
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    },
                    checkCoeffOnPause: function() {
                        var t = Date.now();
                        this.timeFromPrevCoeff + Vn.v7 < t && (this.timeFromPrevCoeff = t), this.isCoeffDown === Vn.d7[0] && (t - this.timeFromPrevCoeff > Vn.WT ? this.pauseCoeffGrowth() : this.runGame())
                    },
                    setCoeffChange: function(t) {
                        var e = t.cf,
                            r = t.mfs,
                            n = t.ic,
                            o = t.ts;
                        this.serverTimeStamp = o, this.coeffStartTime = (Date.now() - r) / Vn.WT;
                        var i = n ? Vn.d7[1] : Vn.d7[0];
                        1 === e && i === Vn.d7[1] && 0 === r ? this.pseudoRunGame() : null === this.shiftCoeffTime && (this.stopTimer(), this.isCoeffDown = i, this.runGame()), this.isCoeffDown = i, this.shiftCoeffTime = r, this.MFS = r, i === Vn.d7[1] && (this.isCrashedGame = !0, this.stopGame())
                    },
                    showTimer: function(t) {
                        var e = this;
                        return ao(oo().mark((function r() {
                            var n, o;
                            return oo().wrap((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        if (e.startTimerTimestamp || (e.startTimerTimestamp = t), n = Math.trunc((t - e.startTimerTimestamp) / Vn.WT % 60), (o = e.totalTimeInSeconds - n) === e.remainingTimeInSeconds) {
                                            r.next = 8;
                                            break
                                        }
                                        return e.remainingTimeInSeconds = o, e.$forceUpdate(), r.next = 8, e.$updateFrame();
                                    case 8:
                                        e.remainingTimeInSeconds >= 1 && (e.requestShowTimerId = requestAnimationFrame(e.showTimer));
                                    case 9:
                                    case "end":
                                        return r.stop()
                                }
                            }), r)
                        })))()
                    },
                    runTimer: function() {
                        var t = this;
                        return ao(oo().mark((function e() {
                            var r, n;
                            return oo().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return r = (t.coeffStartTime - t.serverTimeStamp) * Vn.WT, n = r <= Vn.p5 ? r : Vn.p5, t.totalTimeInSeconds = Math.trunc(n / Vn.WT), t.remainingTimeInSeconds = t.totalTimeInSeconds, t.$forceUpdate(), e.next = 7, t.$updateFrame();
                                    case 7:
                                        t.requestTimerId = requestAnimationFrame((function(e) {
                                            t.showTimer(e), t.requestTimeout(t.stopTimer, n)
                                        }));
                                    case 8:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    },
                    stopTimer: function() {
                        cancelAnimationFrame(this.requestTimerId), cancelAnimationFrame(this.requestShowTimerId), this.requestTimerId = null, this.requestShowTimerId = null, this.remainingTimeInSeconds = null, this.startTimerTimestamp = 0, this.totalTimeInSeconds = 0
                    },
                    requestTimeout: function(t, e) {
                        var r, n = Date.now();
                        r = requestAnimationFrame((function o() {
                            Date.now() - n >= e ? t() : r = requestAnimationFrame(o)
                        })), this.requestTimers.push((function() {
                            return cancelAnimationFrame(r)
                        }))
                    },
                    setSelectedBetType: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        this.disabledSetSelectedBetType && !e || (this.selectedBetType = t, t === this.$consts.betTypeAuto && (this.setEnableAutogame(!0), this.calculatedSumBet < this.minBet && this.insertSingleBet(this.minBet)), t === this.$consts.betTypeHands && (this.currentAutoBet = this.baseAutoBet, this.setEnableAutogame(!1)))
                    },
                    startAutoGame: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        this.activeAccountId ? this.currentAutoBet && this.currentBalance < this.currentAutoBet || this.currentBalance < this.baseAutoBet ? this.showErrorPopup(this.$t("common.notEnoughMoney"), !0) : (this.isAutoGameStarted = !0, this.setEnableAutogame(!0), this.startGame(t)) : this.showAuthenticationRequired()
                    },
                    stopAutoGame: function() {
                        this.currentAutoBet = this.baseAutoBet, this.isAutoGameStarted = !1, this.setEnableAutogame(!1), this.currentUser || this.setFreezeAccount(!1)
                    },
                    handlePressEnter: function() {
                        this.selectedBetType !== this.$consts.betTypeAuto || this.disabledStartAutoGame || this.startAutoGame(!0), this.selectedBetType !== this.$consts.betTypeHands || this.disabledMakeBet || this.startGame(!0)
                    },
                    getCurrentTime: function() {
                        return this.isCoeffDown === Vn.d7[1] ? this.shiftCoeffTime : Date.now() - this.coeffStartTime * Vn.WT
                    },
                    getValueByFormula: function(t) {
                        if (!t) return 1;
                        var e = 25 / Math.pow(10, 9) * Math.pow(t, 2) + 1;
                        return e > Vn.Cf ? Vn.Cf : e
                    },
                    setPinPosition: function() {
                        var t = parseFloat(this.sinceStart || 0),
                            e = t > 0 ? t / Vn.WT : 0,
                            r = e * Vn.GD;
                        r > 67 && (r = 67), r < 0 && (r = 0), this.pinPosition.bottom = r;
                        var n = e * Vn.GD;
                        n > 80 && (n = 80), n < 0 && (n = 0), this.pinPosition.left = n
                    },
                    getTransformTime: function(t) {
                        return this.$consts.DEFAULT_TRANSFORM_TIME_LINE + this.$consts.DEVIATION_TRANSFORM_TIME_LINE * t
                    },
                    setTimeLinePosition: function() {
                        var t = this,
                            e = Math.floor(this.sinceStart / Vn.WT),
                            r = this.timeLine.length - 1;
                        this.timeLine[r].value !== e && (this.timeLine.push({
                            value: e,
                            transform: this.getTransformTime(this.$consts.MAX_COUNT_OF_TIME_LINE)
                        }), this.timeLine.shift());
                        var n = Vn.WT / this.$consts.DEVIATION_TRANSFORM_TIME_LINE,
                            o = this.sinceStart % Vn.WT,
                            i = (Vn.WT - o) / n;
                        this.timeLine = this.timeLine.map((function(e, r) {
                            return co(co({}, e), {}, {
                                transform: t.getTransformTime(r) + i
                            })
                        }))
                    },
                    getTransformCoeff: function(t) {
                        return this.$consts.DEFAULT_TRANSFORM_COEFFS_LINE - this.$consts.DEVIATION_TRANSFORM_COEFFS_LINE * t
                    },
                    setDefaultGuideLines: function() {
                        this.timeLine = wn()(this.$consts.DEFAULT_TIME_LINE), this.coeffsLine = wn()(this.$consts.DEFAULT_COEFFS_LINE), this.pinPosition = wn()(Vn.u9)
                    },
                    setCoeffsLinePosition: function() {
                        var t = this,
                            e = Math.floor(this.sinceStart / Vn.WT),
                            r = this.coeffsLine.length - 1;
                        this.coeffsLine[r].value !== e && (this.coeffsLine.push({
                            value: e,
                            transform: this.getTransformCoeff(Vn.QR)
                        }), this.coeffsLine.shift());
                        var n = Vn.WT / this.$consts.DEVIATION_TRANSFORM_COEFFS_LINE,
                            o = this.sinceStart % Vn.WT,
                            i = (Vn.WT - o) / n;
                        this.coeffsLine = this.coeffsLine.map((function(e, r) {
                            return co(co({}, e), {}, {
                                transform: t.getTransformCoeff(r) - i
                            })
                        }))
                    },
                    pauseCoeffGrowth: function() {
                        cancelAnimationFrame(this.requestCoeffId), cancelAnimationFrame(this.requestAnimationId), this.requestCoeffId = null, this.requestAnimationId = null
                    },
                    runGame: function() {
                        this.setBlockedActivity(!1), null === this.requestCoeffId && (this.thenForCoeff = Date.now(), this.requestCoeffId = requestAnimationFrame(this.startCoeffGrowth)), null === this.requestAnimationId && (this.then = Date.now(), this.startTime = this.then - this.MFS, this.requestAnimationId = requestAnimationFrame(this.startAnimation))
                    },
                    setCoeffValue: function(t) {
                        var e = this.getValueByFormula(t);
                        this.runningCoeffValue = e.toFixed(3).slice(0, -1)
                    },
                    startCoeffGrowth: function() {
                        if (this.isCoeffDown === Vn.d7[0] ? this.requestCoeffId = requestAnimationFrame(this.startCoeffGrowth) : this.setCoeffValue(this.MFS), !this.isWaitingConnectionShown) {
                            var t = Date.now();
                            if (this.elapsedForCoeff = t - this.thenForCoeff, this.elapsedForCoeff > Vn.N4) {
                                this.thenForCoeff = t - this.elapsedForCoeff % Vn.N4;
                                var e = this.isCoeffDown === Vn.d7[0] ? this.getCurrentTime() : this.MFS;
                                this.runningCoeffTime = e, this.setCoeffValue(e)
                            }
                        }
                    },
                    startAnimation: function() {
                        if (this.isCoeffDown === Vn.d7[0] && (this.requestAnimationId = requestAnimationFrame(this.startAnimation)), !this.isWaitingConnectionShown) {
                            var t = Date.now();
                            this.elapsed = t - this.then, this.elapsed > Vn.N4 && (this.then = t - this.elapsed % Vn.N4, this.setPinPosition(), this.setTimeLinePosition(), this.setCoeffsLinePosition(), this.sinceStart = t - this.startTime)
                        }
                    },
                    pseudoRunGame: function() {
                        this.setBlockedActivity(!1), this.requestCoeffId = requestAnimationFrame(this.startCoeffGrowth), this.requestAnimationId = requestAnimationFrame(this.startAnimation)
                    },
                    clearAllTimers: function() {
                        this.clearVisibilityTimeout(), this.requestTimers.forEach(cancelAnimationFrame), this.requestTimers = []
                    },
                    stopGame: function() {
                        var t = this;
                        this.MFS && this.setCoeffValue(this.MFS), this.setBlockedActivity(!0), this.setHasTakeWin(!1), this.requestTimeout((function() {
                            t.stopRunningCoeff(), t.setDefaultGuideLines(), t.clearResult(), t.enableAutogame || (t.gameStarted && t.defaultClearGame(), t.setBlockGame())
                        }), Vn.TH)
                    },
                    stopRunningCoeff: function() {
                        this.setBlockedActivity(!0), this.clearCoeffAnimationFrame()
                    },
                    clearCoeffAnimationFrame: function() {
                        cancelAnimationFrame(this.requestCoeffId), cancelAnimationFrame(this.requestAnimationId), this.clearWaitingConnectionCoeff(), this.isCrashedGame = !1, this.runningCoeffValue = null, this.runningCoeffTime = null, this.requestCoeffId = null, this.requestAnimationId = null, this.isCoeffDown = Vn.d7[1], this.shiftCoeffTime = null, this.MFS = 0, this.then = 0, this.thenForCoeff = 0, this.startTime = 0, this.elapsed = 0, this.elapsedForCoeff = 0, this.sinceStart = 0
                    },
                    setHasTakeWin: function(t) {
                        this.hasTakeWin = t
                    },
                    setAutoGameSettings: function(t) {
                        var e = this;
                        if (this.enableAutogame)
                            if (this.currentUser.nb < this.currentAutoBet) this.requestTimeout((function() {
                                e.stopAutoGame(), e.showErrorPopup(e.$t("common.notEnoughMoney"), !0), e.setCurrentUser(null), e.endGameCallback()
                            }), Vn.xJ);
                            else {
                                var r = 2 * this.currentAutoBet;
                                (t && this.selectedAutoBetInWinOption || !t && this.selectedAutoBetOnLossOption) && (r <= this.limitAutoBet ? this.currentAutoBet *= 2 : this.currentAutoBet = this.limitAutoBet), (t && !this.selectedAutoBetInWinOption || !t && !this.selectedAutoBetOnLossOption) && (this.currentAutoBet = this.baseAutoBet)
                            }
                        else this.currentAutoBet = this.baseAutoBet
                    },
                    takeWin: function() {
                        var t = this;
                        return ao(oo().mark((function e() {
                            return oo().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!t.disabledTakeWin) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return t.setHasTakeWin(!0), e.prev = 3, e.next = 6, t.connection.invoke(Vn.$x.TAKE_WIN, t.drawId);
                                    case 6:
                                        e.next = 11;
                                        break;
                                    case 8:
                                        e.prev = 8, e.t0 = e.catch(3), t.showErrorPopup(e.t0.title);
                                    case 11:
                                        t.setHasTakeWin(!1);
                                    case 12:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [3, 8]
                            ])
                        })))()
                    },
                    setResultPopup: function(t) {
                        var e = this;
                        if (!this.isGameCompleted) {
                            this.isGameCompleted = !0, this.setAutoGameSettings(t), this.requestTimeout((function() {
                                e.setDefaultResult(t, !0)
                            }), Vn.WT), this.selectedBetType === this.$consts.betTypeAuto && this.requestTimeout((function() {
                                e.clearResult()
                            }), Vn.TH);
                            var r = this.currentUser,
                                n = r.nb,
                                o = r.ui,
                                i = r.bac;
                            this.setDefaultDataFromGame({
                                NB: n,
                                UI: o,
                                BAC: i
                            }), this.updateBalanceFromGame(), this.setCurrentUser(null)
                        }
                    },
                    completeGame: function(t) {
                        var e = this;
                        this.isGameCompleted || (this.isGameCompleted = !0, this.setAutoGameSettings(t), t || this.requestTimeout((function() {
                            e.setDefaultResult(t, !0)
                        }), Vn.WT), this.updateBalanceFromGame(), this.selectedBetType !== this.$consts.betTypeAuto && this.setCurrentUser(null))
                    },
                    showGameRulesPopup: function() {
                        var t = this;
                        return ao(oo().mark((function e() {
                            var n;
                            return oo().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, r.e(94053719).then(r.bind(r, 40658724));
                                    case 2:
                                        n = e.sent, t.defaultOpenModal(n, "GameRules");
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    }
                })
            }, {
                crash: Qn
            });
            const fo = (0, Rn.Z)(lo, n, [function() {
                var t = this._self._c;
                this._self._setupProxy;
                return t("div", {
                    staticClass: "crash-game__pin crash-game__pin--waiting"
                }, [t("div", {
                    staticClass: "crash-game__shine crash-game__shine--waiting"
                })])
            }], !1, null, null, null).exports
        },
        49336426: (t, e, r) => {
            "use strict";
            r.r(e), r.d(e, {
                default: () => h
            });
            var n = function() {
                var t = this,
                    e = t._self._c;
                return t.$store.getters["game/isShowSelect"] ? e("div", {
                    staticClass: "main-multiselect"
                }, [e("multiselect", {
                    ref: "multiselect",
                    staticClass: "games_select",
                    class: t.selectClass,
                    attrs: {
                        options: t.$store.getters["game/visibleBonusAccounts"],
                        disabled: t.selectBlocked,
                        placeholder: t.$t("common.selectAccount"),
                        searchable: !1,
                        trackBy: "name",
                        showLabels: !1,
                        label: "name"
                    },
                    on: {
                        input: function(e) {
                            return t.$emit("selectAccount", e)
                        },
                        open: function(e) {
                            return t.$emit("open", e)
                        },
                        close: function(e) {
                            return t.$emit("close", e)
                        }
                    },
                    model: {
                        value: t.selectedAccount,
                        callback: function(e) {
                            t.selectedAccount = e
                        },
                        expression: "selectedAccount"
                    }
                })], 1) : t._e()
            };
            n._withStripped = !0;
            r(76696649), r(27396078), r(15382526), r(58141817), r(87241539), r(5021703), r(23209653), r(88369070), r(56447941), r(88057327), r(59438880), r(6757658), r(61454747), r(3749337), r(88833321), r(65932165), r(72066992), r(7978783), r(89333948);
            var o = r(7593937),
                i = r.n(o),
                a = r(84440687);

            function s(t) {
                return s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, s(t)
            }

            function c(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function u(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? c(Object(r), !0).forEach((function(e) {
                        l(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function l(t, e, r) {
                return (e = function(t) {
                    var e = function(t, e) {
                        if ("object" !== s(t) || null === t) return t;
                        var r = t[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var n = r.call(t, e || "default");
                            if ("object" !== s(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(t, "string");
                    return "symbol" === s(e) ? e : String(e)
                }(e)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
            const f = {
                components: {
                    Multiselect: i()
                },
                props: {
                    extraDisabledSelect: {
                        type: Boolean,
                        default: !1
                    },
                    selectClass: {
                        type: String,
                        default: "",
                        required: !1
                    }
                },
                computed: u(u({}, (0, a.mapGetters)("application", ["isMobileView"])), {}, {
                    selectedAccount: {
                        get: function() {
                            return this.$store.state.game.selectedBonusAccount.id ? this.$store.state.game.selectedBonusAccount : this.$store.getters["user/mainAccount"]
                        },
                        set: function(t) {
                            t && (this.$store.dispatch("betsButtons/clearAllBets"), this.$store.dispatch("betsButtons/clearPrevBets"), this.$store.commit("game/setSelectedBonusAccount", t))
                        }
                    },
                    selectBlocked: function() {
                        return this.extraDisabledSelect || this.$store.getters["betsButtons/blockedBetBtns"]
                    }
                }),
                beforeMount: function() {
                    this.isMobileView && document.addEventListener("click", this.clickOutsideEvent)
                },
                beforeDestroy: function() {
                    this.isMobileView && document.removeEventListener("click", this.clickOutsideEvent)
                },
                methods: {
                    clickOutsideEvent: function(t) {
                        var e, r = !(this.$el === t.target || this.$el.contains(t.target));
                        null !== (e = this.$refs.multiselect) && void 0 !== e && e.$el && r && this.$refs.multiselect.$el.blur()
                    }
                }
            };
            const h = (0, r(83551900).Z)(f, n, [], !1, null, null, null).exports
        },
        83551900: (t, e, r) => {
            "use strict";

            function n(t, e, r, n, o, i, a, s) {
                var c, u = "function" == typeof t ? t.options : t;
                if (e && (u.render = e, u.staticRenderFns = r, u._compiled = !0), n && (u.functional = !0), i && (u._scopeId = "data-v-" + i), a ? (c = function(t) {
                        (t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), o && o.call(this, t), t && t._registeredComponents && t._registeredComponents.add(a)
                    }, u._ssrRegister = c) : o && (c = s ? function() {
                        o.call(this, (u.functional ? this.parent : this).$root.$options.shadowRoot)
                    } : o), c)
                    if (u.functional) {
                        u._injectStyles = c;
                        var l = u.render;
                        u.render = function(t, e) {
                            return c.call(e), l(t, e)
                        }
                    } else {
                        var f = u.beforeCreate;
                        u.beforeCreate = f ? [].concat(f, c) : [c]
                    }
                return {
                    exports: t,
                    options: u
                }
            }
            r.d(e, {
                Z: () => n
            })
        }
    }
]);