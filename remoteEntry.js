var RemoteGameModule;
(() => {
    "use strict";
    var e, t, r, a, n, o, i, u, s, l, f, d, h = {
            84793501: (e, t, r) => {
                var a = {
                        "./Crash": () => r.e(54589007).then((() => () => r(54589007))),
                        "./moduleNameList": () => r.e(28673430).then((() => () => r(28673430)))
                    },
                    n = (e, t) => (r.R = t, t = r.o(a, e) ? a[e]() : Promise.resolve().then((() => {
                        throw new Error('Module "' + e + '" does not exist in container.')
                    })), r.R = void 0, t),
                    o = (e, t) => {
                        if (r.S) {
                            var a = "default",
                                n = r.S[a];
                            if (n && n !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                            return r.S[a] = e, r.I(a, t)
                        }
                    };
                r.d(t, {
                    get: () => n,
                    init: () => o
                })
            }
        },
        p = {};

    function c(e) {
        var t = p[e];
        if (void 0 !== t) return t.exports;
        var r = p[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        return h[e].call(r.exports, r, r.exports, c), r.loaded = !0, r.exports
    }
    c.m = h, c.c = p, c.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return c.d(t, {
            a: t
        }), t
    }, c.d = (e, t) => {
        for (var r in t) c.o(t, r) && !c.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
        })
    }, c.f = {}, c.e = e => Promise.all(Object.keys(c.f).reduce(((t, r) => (c.f[r](e, t), t)), [])), c.u = e => (({
        10368095: "popup.result.game",
        16803518: "autogame",
        20961004: "bets.buttons",
        29234815: "popup.auth0",
        40071279: "Crash-Mobile",
        65804308: "Crash-Desktop",
        78777492: "popup.auth1",
        92123703: "popup.proxy-rules",
        94053719: "popup.rules.crash"
    }[e] || e) + "." + e + "." + {
        10133394: "3d39e05e72bb",
        10368095: "2fa085fab9ca",
        10564490: "6bc4449eb37c",
        11420629: "e5a9195b08f0",
        12109992: "4074de932a7b",
        13530243: "f20c62f164b5",
        16803518: "08bd7f8bdceb",
        20609685: "af1f0fc6f612",
        20961004: "90240e385729",
        21488697: "b268640be10f",
        22028159: "03b8c49ea749",
        27547968: "becc6c3472b0",
        28673430: "24de3d6ad8f6",
        29234815: "e3b59af4a797",
        29854472: "3b486fa32e47",
        32369483: "badb94e6637a",
        34319941: "62a3d0e44f8e",
        35755482: "f2d829172bb3",
        36409669: "5019d79b3f41",
        40071279: "6843549e94d2",
        40742310: "c0ca127241f7",
        42935746: "25b932848e98",
        43843009: "13f14875929a",
        45441766: "c41e700495b3",
        47839666: "3a12a536f18b",
        52720144: "703f7a3557a7",
        53089673: "5843f000ffe6",
        53973762: "0f499e1273a3",
        54086901: "0d84b0c49d7c",
        54589007: "4f8c5445c449",
        55918590: "54b624def771",
        64687937: "e04c6b591763",
        65731392: "54dc7a4716c7",
        65804308: "6de05154ad35",
        72785123: "22c3854a89d6",
        73305985: "1fe0583cb214",
        73444652: "bb9cdb9f9026",
        74317152: "a3bf774115f7",
        76247907: "204fca0aa16a",
        78777492: "02ca43d55bc9",
        78997898: "26163bbe95bd",
        81779389: "e50eff606c9d",
        83197902: "708b34c7f2fc",
        92123703: "29188ef18d63",
        93013264: "a5fb331e8690",
        94053719: "cf70152b97c4",
        96565936: "7dfd34ca704e"
    }[e] + ".js"), c.miniCssF = e => ({
        10368095: "popup.result.game",
        16803518: "autogame",
        29234815: "popup.auth0",
        40071279: "Crash-Mobile",
        65804308: "Crash-Desktop",
        78777492: "popup.auth1",
        92123703: "popup.proxy-rules",
        94053719: "popup.rules.crash"
    }[e] + "." + e + "." + {
        10368095: "326964765874",
        16803518: "74631776b64e",
        29234815: "f6c64939907a",
        40071279: "7bfa2ea7e833",
        65804308: "98103dbe4a37",
        78777492: "f05fb3cfb3f7",
        92123703: "72c264a59b2f",
        94053719: "f5be39223962"
    }[e] + ".css"), c.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), c.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), e = {}, t = "games:", c.l = (r, a, n, o) => {
        if (e[r]) e[r].push(a);
        else {
            var i, u;
            if (void 0 !== n)
                for (var s = document.getElementsByTagName("script"), l = 0; l < s.length; l++) {
                    var f = s[l];
                    if (f.getAttribute("src") == r || f.getAttribute("data-webpack") == t + n) {
                        i = f;
                        break
                    }
                }
            i || (u = !0, (i = document.createElement("script")).charset = "utf-8", i.timeout = 120, c.nc && i.setAttribute("nonce", c.nc), i.setAttribute("data-webpack", t + n), i.src = r), e[r] = [a];
            var d = (t, a) => {
                    i.onerror = i.onload = null, clearTimeout(h);
                    var n = e[r];
                    if (delete e[r], i.parentNode && i.parentNode.removeChild(i), n && n.forEach((e => e(a))), t) return t(a)
                },
                h = setTimeout(d.bind(null, void 0, {
                    type: "timeout",
                    target: i
                }), 12e4);
            i.onerror = d.bind(null, i.onerror), i.onload = d.bind(null, i.onload), u && document.head.appendChild(i)
        }
    }, c.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, c.nmd = e => (e.paths = [], e.children || (e.children = []), e), (() => {
        c.S = {};
        var e = {},
            t = {};
        c.I = (r, a) => {
            a || (a = []);
            var n = t[r];
            if (n || (n = t[r] = {}), !(a.indexOf(n) >= 0)) {
                if (a.push(n), e[r]) return e[r];
                c.o(c.S, r) || (c.S[r] = {});
                var o = c.S[r],
                    i = "games",
                    u = (e, t, r, a) => {
                        var n = o[e] = o[e] || {},
                            u = n[t];
                        (!u || !u.loaded && (!a != !u.eager ? a : i > u.from)) && (n[t] = {
                            get: r,
                            from: i,
                            eager: !!a
                        })
                    },
                    s = [];
                if ("default" === r) u("@fingerprintjs/fingerprintjs", "3.3.6", (() => c.e(96565936).then((() => () => c(96565936))))), u("@games/api", "0.0.1", (() => c.e(10564490).then((() => () => c(10564490))))), u("@games/app-assets-manager", "0.0.1", (() => c.e(93013264).then((() => () => c(93013264))))), u("@games/app-storage", "0.0.1", (() => c.e(12109992).then((() => () => c(12109992))))), u("@games/app-store", "0.0.1", (() => c.e(54086901).then((() => () => c(54086901))))), u("@games/bridge", "0.0.1", (() => c.e(72785123).then((() => () => c(72785123))))), u("@games/build-name", "0.0.1", (() => c.e(29854472).then((() => () => c(29854472))))), u("@games/cdn", "0.0.1", (() => c.e(53973762).then((() => () => c(53973762))))), u("@games/element-class-queue", "0.0.1", (() => c.e(83197902).then((() => () => c(83197902))))), u("@games/events", "0.0.1", (() => c.e(10133394).then((() => () => c(10133394))))), u("@games/preloader", "0.0.1", (() => c.e(65731392).then((() => () => c(65731392))))), u("@games/vue-plugin-i18n", "0.0.1", (() => c.e(20609685).then((() => () => c(20609685))))), u("@games/with-public-path", "0.0.1", (() => c.e(21488697).then((() => () => c(21488697))))), u("@microsoft/signalr", "6.0.4", (() => c.e(47839666).then((() => () => c(47839666))))), u("axios", "0.21.1", (() => c.e(36409669).then((() => () => c(36409669))))), u("consola", "2.15.3", (() => c.e(73444652).then((() => () => c(73444652))))), u("howler", "2.2.3", (() => c.e(45441766).then((() => () => c(45441766))))), u("localforage", "1.9.0", (() => c.e(32369483).then((() => () => c(32369483))))), u("tslib", "2.6.2", (() => c.e(42935746).then((() => () => c(42935746))))), u("vue-i18n", "8.28.2", (() => c.e(74317152).then((() => () => c(74317152))))), u("vue-inline-svg", "2.1.3", (() => c.e(35755482).then((() => () => c(35755482))))), u("vue-multiselect", "2.1.6", (() => c.e(76247907).then((() => () => c(76247907))))), u("vue", "2.7.14", (() => c.e(52720144).then((() => () => c(52720144))))), u("vuex", "3.4.0", (() => c.e(11420629).then((() => () => c(11420629)))));
                return s.length ? e[r] = Promise.all(s).then((() => e[r] = 1)) : e[r] = 1
            }
        }
    })(), (() => {
        var e;
        c.g.importScripts && (e = c.g.location + "");
        var t = c.g.document;
        if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var r = t.getElementsByTagName("script");
            if (r.length)
                for (var a = r.length - 1; a > -1 && !e;) e = r[a--].src
        }
        if (!e) throw new Error("Automatic publicPath is not supported in this browser");
        e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), c.p = e
    })(), r = e => {
        var t = e => e.split(".").map((e => +e == e ? +e : e)),
            r = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
            a = r[1] ? t(r[1]) : [];
        return r[2] && (a.length++, a.push.apply(a, t(r[2]))), r[3] && (a.push([]), a.push.apply(a, t(r[3]))), a
    }, a = (e, t) => {
        e = r(e), t = r(t);
        for (var a = 0;;) {
            if (a >= e.length) return a < t.length && "u" != (typeof t[a])[0];
            var n = e[a],
                o = (typeof n)[0];
            if (a >= t.length) return "u" == o;
            var i = t[a],
                u = (typeof i)[0];
            if (o != u) return "o" == o && "n" == u || "s" == u || "u" == o;
            if ("o" != o && "u" != o && n != i) return n < i;
            a++
        }
    }, n = (e, t) => {
        if (0 in e) {
            t = r(t);
            var a = e[0],
                o = a < 0;
            o && (a = -a - 1);
            for (var i = 0, u = 1, s = !0;; u++, i++) {
                var l, f, d = u < e.length ? (typeof e[u])[0] : "";
                if (i >= t.length || "o" == (f = (typeof(l = t[i]))[0])) return !s || ("u" == d ? u > a && !o : "" == d != o);
                if ("u" == f) {
                    if (!s || "u" != d) return !1
                } else if (s)
                    if (d == f)
                        if (u <= a) {
                            if (l != e[u]) return !1
                        } else {
                            if (o ? l > e[u] : l < e[u]) return !1;
                            l != e[u] && (s = !1)
                        }
                else if ("s" != d && "n" != d) {
                    if (o || u <= a) return !1;
                    s = !1, u--
                } else {
                    if (u <= a || f < d != o) return !1;
                    s = !1
                } else "s" != d && "n" != d && (s = !1, u--)
            }
        }
        var h = [],
            p = h.pop.bind(h);
        for (i = 1; i < e.length; i++) {
            var c = e[i];
            h.push(1 == c ? p() | p() : 2 == c ? p() & p() : c ? n(c, t) : !p())
        }
        return !!p()
    }, o = (e, t) => {
        var r = e[t];
        return Object.keys(r).reduce(((e, t) => !e || !r[e].loaded && a(e, t) ? t : e), 0)
    }, i = (e, t, r, a) => {
        var i = o(e, r);
        return n(a, i) || "undefined" != typeof console && console.warn, u(e[r][i])
    }, u = e => (e.loaded = 1, e.get()), s = (e => function(t, r, a, n) {
        var o = c.I(t);
        return o && o.then ? o.then(e.bind(e, t, c.S[t], r, a, n)) : e(t, c.S[t], r, a, n)
    })(((e, t, r, a, n) => t && c.o(t, r) ? i(t, 0, r, a) : n())), l = {}, f = {
        32059017: () => s("default", "tslib", [4, 2, 4, 1], (() => c.e(42935746).then((() => () => c(42935746))))),
        24891070: () => s("default", "@games/bridge", [4, 0, 0, 1], (() => c.e(53089673).then((() => () => c(72785123))))),
        50584124: () => s("default", "@games/with-public-path", [4, 0, 0, 1], (() => c.e(27547968).then((() => () => c(21488697))))),
        54966191: () => s("default", "axios", [4, 0, 21, 1], (() => c.e(36409669).then((() => () => c(36409669))))),
        92602033: () => s("default", "@games/vue-plugin-i18n", [4, 0, 0, 1], (() => c.e(13530243).then((() => () => c(20609685))))),
        18396198: () => s("default", "howler", [4, 2, 2, 3], (() => c.e(45441766).then((() => () => c(45441766))))),
        26608302: () => s("default", "@games/preloader", [4, 0, 0, 1], (() => c.e(34319941).then((() => () => c(65731392))))),
        61948003: () => s("default", "@games/cdn", [4, 0, 0, 1], (() => c.e(78997898).then((() => () => c(53973762))))),
        28672300: () => s("default", "localforage", [4, 1, 9, 0], (() => c.e(32369483).then((() => () => c(32369483))))),
        47221005: () => s("default", "@games/api", [4, 0, 0, 1], (() => c.e(43843009).then((() => () => c(10564490))))),
        66020765: () => s("default", "vue", [4, 2, 7, 14], (() => c.e(52720144).then((() => () => c(52720144))))),
        84440687: () => s("default", "vuex", [4, 3, 4, 0], (() => c.e(11420629).then((() => () => c(11420629))))),
        87582712: () => s("default", "@games/app-storage", [4, 0, 0, 1], (() => c.e(73305985).then((() => () => c(12109992))))),
        86028113: () => s("default", "consola", [4, 2, 15, 3], (() => c.e(73444652).then((() => () => c(73444652))))),
        46985684: () => s("default", "vue-i18n", [1, 8], (() => c.e(74317152).then((() => () => c(74317152))))),
        31002233: () => s("default", "@microsoft/signalr", [4, 6, 0, 4], (() => c.e(55918590).then((() => () => c(47839666))))),
        7593937: () => s("default", "vue-multiselect", [4, 2, 1, 6], (() => c.e(76247907).then((() => () => c(76247907))))),
        87853387: () => s("default", "@games/build-name", [4, 0, 0, 1], (() => c.e(29854472).then((() => () => c(29854472))))),
        91831702: () => s("default", "@games/events", [4, 0, 0, 1], (() => c.e(22028159).then((() => () => c(10133394))))),
        65362469: () => s("default", "@fingerprintjs/fingerprintjs", [4, 3, 3, 6], (() => c.e(96565936).then((() => () => c(96565936))))),
        5907454: () => s("default", "@games/app-store", [4, 0, 0, 1], (() => c.e(40742310).then((() => () => c(54086901))))),
        46919652: () => s("default", "@games/app-assets-manager", [4, 0, 0, 1], (() => c.e(64687937).then((() => () => c(93013264))))),
        30935557: () => s("default", "vue-inline-svg", [4, 2, 1, 3], (() => c.e(35755482).then((() => () => c(35755482))))),
        86228702: () => s("default", "@games/element-class-queue", [4, 0, 0, 1], (() => c.e(81779389).then((() => () => c(83197902)))))
    }, d = {
        10133394: [66020765],
        10564490: [24891070, 50584124, 54966191, 92602033],
        12109992: [28672300],
        13530243: [46985684, 66020765, 87582712],
        20609685: [46985684, 50584124, 54966191, 66020765, 87582712],
        22028159: [66020765],
        40071279: [84440687, 86228702, 24891070, 92602033, 31002233, 50584124, 7593937, 47221005, 87853387, 91831702, 54966191, 65362469, 5907454, 46919652, 30935557, 26608302],
        40742310: [66020765, 87582712],
        43843009: [24891070, 50584124, 54966191, 92602033],
        53089673: [86028113],
        53973762: [50584124],
        54086901: [47221005, 66020765, 84440687, 87582712],
        64687937: [18396198, 61948003],
        65804308: [84440687, 92602033, 31002233, 50584124, 24891070, 7593937, 47221005, 87853387, 91831702, 54966191, 65362469, 5907454, 46919652, 30935557, 86228702, 26608302],
        72785123: [86028113],
        73305985: [28672300],
        78997898: [50584124],
        93013264: [18396198, 24891070, 26608302, 61948003],
        96565936: [32059017]
    }, c.f.consumes = (e, t) => {
        c.o(d, e) && d[e].forEach((e => {
            if (c.o(l, e)) return t.push(l[e]);
            var r = t => {
                    l[e] = 0, c.m[e] = r => {
                        delete c.c[e], r.exports = t()
                    }
                },
                a = t => {
                    delete l[e], c.m[e] = r => {
                        throw delete c.c[e], t
                    }
                };
            try {
                var n = f[e]();
                n.then ? t.push(l[e] = n.then(r).catch(a)) : r(n)
            } catch (o) {
                a(o)
            }
        }))
    }, (() => {
        if ("undefined" != typeof document) {
            var e = e => new Promise(((t, r) => {
                    var a = c.miniCssF(e),
                        n = c.p + a;
                    if (((e, t) => {
                            for (var r = document.getElementsByTagName("link"), a = 0; a < r.length; a++) {
                                var n = (i = r[a]).getAttribute("data-href") || i.getAttribute("href");
                                if ("stylesheet" === i.rel && (n === e || n === t)) return i
                            }
                            var o = document.getElementsByTagName("style");
                            for (a = 0; a < o.length; a++) {
                                var i;
                                if ((n = (i = o[a]).getAttribute("data-href")) === e || n === t) return i
                            }
                        })(a, n)) return t();
                    ((e, t, r, a, n) => {
                        var o = document.createElement("link");
                        o.rel = "stylesheet", o.type = "text/css", o.onerror = o.onload = r => {
                            if (o.onerror = o.onload = null, "load" === r.type) a();
                            else {
                                var i = r && ("load" === r.type ? "missing" : r.type),
                                    u = r && r.target && r.target.href || t,
                                    s = new Error("Loading CSS chunk " + e + " failed.\n(" + u + ")");
                                s.code = "CSS_CHUNK_LOAD_FAILED", s.type = i, s.request = u, o.parentNode && o.parentNode.removeChild(o), n(s)
                            }
                        }, o.href = t, r ? r.parentNode.insertBefore(o, r.nextSibling) : document.head.appendChild(o)
                    })(e, n, null, t, r)
                })),
                t = {
                    30130331: 0
                };
            c.f.miniCss = (r, a) => {
                t[r] ? a.push(t[r]) : 0 !== t[r] && {
                    10368095: 1,
                    16803518: 1,
                    29234815: 1,
                    40071279: 1,
                    65804308: 1,
                    78777492: 1,
                    92123703: 1,
                    94053719: 1
                }[r] && a.push(t[r] = e(r).then((() => {
                    t[r] = 0
                }), (e => {
                    throw delete t[r], e
                })))
            }
        }
    })(), (() => {
        var e = {
            30130331: 0
        };
        c.f.j = (t, r) => {
            var a = c.o(e, t) ? e[t] : void 0;
            if (0 !== a)
                if (a) r.push(a[2]);
                else {
                    var n = new Promise(((r, n) => a = e[t] = [r, n]));
                    r.push(a[2] = n);
                    var o = c.p + c.u(t),
                        i = new Error;
                    c.l(o, (r => {
                        if (c.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                            var n = r && ("load" === r.type ? "missing" : r.type),
                                o = r && r.target && r.target.src;
                            i.message = "Loading chunk " + t + " failed.\n(" + n + ": " + o + ")", i.name = "ChunkLoadError", i.type = n, i.request = o, a[1](i)
                        }
                    }), "chunk-" + t, t)
                }
        };
        var t = (t, r) => {
                var a, n, [o, i, u] = r,
                    s = 0;
                if (o.some((t => 0 !== e[t]))) {
                    for (a in i) c.o(i, a) && (c.m[a] = i[a]);
                    if (u) u(c)
                }
                for (t && t(r); s < o.length; s++) n = o[s], c.o(e, n) && e[n] && e[n][0](), e[n] = 0
            },
            r = self.webpackChunkgames = self.webpackChunkgames || [];
        r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
    })();
    var g = c(84793501);
    RemoteGameModule = g
})();