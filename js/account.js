function customCheckbox(t) {
    var e = $('input[name="' + t + '"]');
    $(e).each(function() {
        $(this).wrap("<span class='custom-checkbox'></span>"), $(this).is(":checked") && ($(this).parent().addClass("custom-checkbox--selected"), $(this).parent().parent().addClass("custom-checkbox--active"))
    }), $(e).click(function() {
        $(this).parent().toggleClass("custom-checkbox--selected"), $(this).parent().parent().toggleClass("custom-checkbox--active")
    })
}

function customCheckboxOptGroup(t) {
    var e;
    for (e = 0; e < t.inputs.length; e++) {
        var i = $(t.inputs[e]);
        0 != t.checked ? (i.parent().addClass("custom-checkbox--selected"), i.parent().parent().addClass("custom-checkbox--active")) : (i.parent().removeClass("custom-checkbox--selected"), i.parent().parent().removeClass("custom-checkbox--active"))
    }
}

function customCheckboxCheckAll(t, e) {
    var i, s = $('input[name="' + t + '"]');
    for (i = 0; i < s.length; i++) {
        var n = $(s[i]);
        e ? (n.parent().addClass("custom-checkbox--selected"), n.parent().parent().addClass("custom-checkbox--active")) : (n.parent().removeClass("custom-checkbox--selected"), n.parent().parent().removeClass("custom-checkbox--active"))
    }
}

function changeOptGroup() {
    var t = $(".ui-multiselect-optgroup");
    for (i = 0; i < t.length; i++) {
        $(t[i]).children("a").after('<span class="multiselect__span">(click to check all)</span>')
    }
}! function(t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
    function i(t) {
        var e = !!t && "length" in t && t.length,
        i = ot.type(t);
        return "function" !== i && !ot.isWindow(t) && ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
    }

    function s(t, e, i) {
        if (ot.isFunction(e)) return ot.grep(t, function(t, s) {
            return !!e.call(t, s, t) !== i
        });
            if (e.nodeType) return ot.grep(t, function(t) {
                return t === e !== i
            });
                if ("string" == typeof e) {
                    if (dt.test(e)) return ot.filter(e, t, i);
                    e = ot.filter(e, t)
                }
                return ot.grep(t, function(t) {
                    return Z.call(e, t) > -1 !== i
                })
            }

            function n(t, e) {
                for (;
                    (t = t[e]) && 1 !== t.nodeType;);
                    return t
            }

            function o(t) {
                var e = {};
                return ot.each(t.match(vt) || [], function(t, i) {
                    e[i] = !0
                }), e
            }

            function a() {
                X.removeEventListener("DOMContentLoaded", a), t.removeEventListener("load", a), ot.ready()
            }

            function r() {
                this.expando = ot.expando + r.uid++
            }

            function l(t, e, i) {
                var s;
                if (void 0 === i && 1 === t.nodeType)
                    if (s = "data-" + e.replace(Ct, "-$&").toLowerCase(), "string" == typeof(i = t.getAttribute(s))) {
                        try {
                            i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : kt.test(i) ? ot.parseJSON(i) : i)
                        } catch (t) {}
                        wt.set(t, e, i)
                    } else i = void 0;
                    return i
                }

                function h(t, e, i, s) {
                    var n, o = 1,
                    a = 20,
                    r = s ? function() {
                        return s.cur()
                    } : function() {
                        return ot.css(t, e, "")
                    },
                    l = r(),
                    h = i && i[3] || (ot.cssNumber[e] ? "" : "px"),
                    c = (ot.cssNumber[e] || "px" !== h && +l) && Tt.exec(ot.css(t, e));
                    if (c && c[3] !== h) {
                        h = h || c[3], i = i || [], c = +l || 1;
                        do {
                            o = o || ".5", c /= o, ot.style(t, e, c + h)
                        } while (o !== (o = r() / l) && 1 !== o && --a)
                    }
                    return i && (c = +c || +l || 0, n = i[1] ? c + (i[1] + 1) * i[2] : +i[2], s && (s.unit = h, s.start = c, s.end = n)), n
                }

                function c(t, e) {
                    var i = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
                    return void 0 === e || e && ot.nodeName(t, e) ? ot.merge([t], i) : i
                }

                function u(t, e) {
                    for (var i = 0, s = t.length; s > i; i++) xt.set(t[i], "globalEval", !e || xt.get(e[i], "globalEval"))
                }

            function d(t, e, i, s, n) {
                for (var o, a, r, l, h, d, p = e.createDocumentFragment(), f = [], g = 0, m = t.length; m > g; g++)
                    if ((o = t[g]) || 0 === o)
                        if ("object" === ot.type(o)) ot.merge(f, o.nodeType ? [o] : o);
                    else if (Nt.test(o)) {
                        for (a = a || p.appendChild(e.createElement("div")), r = (Mt.exec(o) || ["", ""])[1].toLowerCase(), l = Ot[r] || Ot._default, a.innerHTML = l[1] + ot.htmlPrefilter(o) + l[2], d = l[0]; d--;) a = a.lastChild;
                            ot.merge(f, a.childNodes), a = p.firstChild, a.textContent = ""
                    } else f.push(e.createTextNode(o));
                    for (p.textContent = "", g = 0; o = f[g++];)
                        if (s && ot.inArray(o, s) > -1) n && n.push(o);
                    else if (h = ot.contains(o.ownerDocument, o), a = c(p.appendChild(o), "script"), h && u(a), i)
                        for (d = 0; o = a[d++];) At.test(o.type || "") && i.push(o);
                            return p
                    }

                    function p() {
                        return !0
                    }

                    function f() {
                        return !1
                    }

                    function g() {
                        try {
                            return X.activeElement
                        } catch (t) {}
                    }

                    function m(t, e, i, s, n, o) {
                        var a, r;
                        if ("object" == typeof e) {
                            "string" != typeof i && (s = s || i, i = void 0);
                            for (r in e) m(t, r, i, s, e[r], o);
                                return t
                        }
                        if (null == s && null == n ? (n = i, s = i = void 0) : null == n && ("string" == typeof i ? (n = s, s = void 0) : (n = s, s = i, i = void 0)), !1 === n) n = f;
                        else if (!n) return t;
                        return 1 === o && (a = n, n = function(t) {
                            return ot().off(t), a.apply(this, arguments)
                        }, n.guid = a.guid || (a.guid = ot.guid++)), t.each(function() {
                            ot.event.add(this, e, n, s, i)
                        })
                    }

                    function v(t, e) {
                        return ot.nodeName(t, "table") && ot.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
                    }

                    function _(t) {
                        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
                    }

                    function b(t) {
                        var e = Ft.exec(t.type);
                        return e ? t.type = e[1] : t.removeAttribute("type"), t
                    }

                    function y(t, e) {
                        var i, s, n, o, a, r, l, h;
                        if (1 === e.nodeType) {
                            if (xt.hasData(t) && (o = xt.access(t), a = xt.set(e, o), h = o.events)) {
                                delete a.handle, a.events = {};
                                for (n in h)
                                    for (i = 0, s = h[n].length; s > i; i++) ot.event.add(e, n, h[n][i])
                                }
                            wt.hasData(t) && (r = wt.access(t), l = ot.extend({}, r), wt.set(e, l))
                        }
                    }

                    function x(t, e) {
                        var i = e.nodeName.toLowerCase();
                        "input" === i && Pt.test(t.type) ? e.checked = t.checked : ("input" === i || "textarea" === i) && (e.defaultValue = t.defaultValue)
                    }

                    function w(t, e, i, s) {
                        e = Q.apply([], e);
                        var n, o, a, r, l, h, u = 0,
                        p = t.length,
                        f = p - 1,
                        g = e[0],
                        m = ot.isFunction(g);
                        if (m || p > 1 && "string" == typeof g && !st.checkClone && zt.test(g)) return t.each(function(n) {
                            var o = t.eq(n);
                            m && (e[0] = g.call(this, n, o.html())), w(o, e, i, s)
                        });
                            if (p && (n = d(e, t[0].ownerDocument, !1, t, s), o = n.firstChild, 1 === n.childNodes.length && (n = o), o || s)) {
                                for (a = ot.map(c(n, "script"), _), r = a.length; p > u; u++) l = n, u !== f && (l = ot.clone(l, !0, !0), r && ot.merge(a, c(l, "script"))), i.call(t[u], l, u);
                                    if (r)
                                        for (h = a[a.length - 1].ownerDocument, ot.map(a, b), u = 0; r > u; u++) l = a[u], At.test(l.type || "") && !xt.access(l, "globalEval") && ot.contains(h, l) && (l.src ? ot._evalUrl && ot._evalUrl(l.src) : ot.globalEval(l.textContent.replace(jt, "")))
                                    }
                                return t
                            }

                            function k(t, e, i) {
                                for (var s, n = e ? ot.filter(e, t) : t, o = 0; null != (s = n[o]); o++) i || 1 !== s.nodeType || ot.cleanData(c(s)), s.parentNode && (i && ot.contains(s.ownerDocument, s) && u(c(s, "script")), s.parentNode.removeChild(s));
                                    return t
                            }

                            function C(t, e) {
                                var i = ot(e.createElement(t)).appendTo(e.body),
                                s = ot.css(i[0], "display");
                                return i.detach(), s
                            }

                            function D(t) {
                                var e = X,
                                i = qt[t];
                                return i || (i = C(t, e), "none" !== i && i || (Rt = (Rt || ot("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = Rt[0].contentDocument, e.write(), e.close(), i = C(t, e), Rt.detach()), qt[t] = i), i
                            }

                            function T(t, e, i) {
                                var s, n, o, a, r = t.style;
                                return i = i || Yt(t), a = i ? i.getPropertyValue(e) || i[e] : void 0, "" !== a && void 0 !== a || ot.contains(t.ownerDocument, t) || (a = ot.style(t, e)), i && !st.pixelMarginRight() && $t.test(a) && Bt.test(e) && (s = r.width, n = r.minWidth, o = r.maxWidth, r.minWidth = r.maxWidth = r.width = a, a = i.width, r.width = s, r.minWidth = n, r.maxWidth = o), void 0 !== a ? a + "" : a
                            }

                            function I(t, e) {
                                return {
                                    get: function() {
                                        return t() ? void delete this.get : (this.get = e).apply(this, arguments)
                                    }
                                }
                            }

                            function S(t) {
                                if (t in Jt) return t;
                                for (var e = t[0].toUpperCase() + t.slice(1), i = Qt.length; i--;)
                                    if ((t = Qt[i] + e) in Jt) return t
                                }

                            function P(t, e, i) {
                                var s = Tt.exec(e);
                                return s ? Math.max(0, s[2] - (i || 0)) + (s[3] || "px") : e
                            }

                            function M(t, e, i, s, n) {
                                for (var o = i === (s ? "border" : "content") ? 4 : "width" === e ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === i && (a += ot.css(t, i + It[o], !0, n)), s ? ("content" === i && (a -= ot.css(t, "padding" + It[o], !0, n)), "margin" !== i && (a -= ot.css(t, "border" + It[o] + "Width", !0, n))) : (a += ot.css(t, "padding" + It[o], !0, n), "padding" !== i && (a += ot.css(t, "border" + It[o] + "Width", !0, n)));
                                    return a
                            }

                            function A(e, i, s) {
                                var n = !0,
                                o = "width" === i ? e.offsetWidth : e.offsetHeight,
                                a = Yt(e),
                                r = "border-box" === ot.css(e, "boxSizing", !1, a);
                                if (X.msFullscreenElement && t.top !== t && e.getClientRects().length && (o = Math.round(100 * e.getBoundingClientRect()[i])), 0 >= o || null == o) {
                                    if (o = T(e, i, a), (0 > o || null == o) && (o = e.style[i]), $t.test(o)) return o;
                                    n = r && (st.boxSizingReliable() || o === e.style[i]), o = parseFloat(o) || 0
                                }
                                return o + M(e, i, s || (r ? "border" : "content"), n, a) + "px"
                            }

                            function O(t, e) {
                                for (var i, s, n, o = [], a = 0, r = t.length; r > a; a++) s = t[a], s.style && (o[a] = xt.get(s, "olddisplay"), i = s.style.display, e ? (o[a] || "none" !== i || (s.style.display = ""), "" === s.style.display && St(s) && (o[a] = xt.access(s, "olddisplay", D(s.nodeName)))) : (n = St(s), "none" === i && n || xt.set(s, "olddisplay", n ? i : ot.css(s, "display"))));
                                    for (a = 0; r > a; a++) s = t[a], s.style && (e && "none" !== s.style.display && "" !== s.style.display || (s.style.display = e ? o[a] || "" : "none"));
                                        return t
                                }

                                function N(t, e, i, s, n) {
                                    return new N.prototype.init(t, e, i, s, n)
                                }

                                function H() {
                                    return t.setTimeout(function() {
                                        Zt = void 0
                                    }), Zt = ot.now()
                                }

                                function E(t, e) {
                                    var i, s = 0,
                                    n = {
                                        height: t
                                    };
                                    for (e = e ? 1 : 0; 4 > s; s += 2 - e) i = It[s], n["margin" + i] = n["padding" + i] = t;
                                        return e && (n.opacity = n.width = t), n
                                }

                                function L(t, e, i) {
                                    for (var s, n = (F.tweeners[e] || []).concat(F.tweeners["*"]), o = 0, a = n.length; a > o; o++)
                                        if (s = n[o].call(i, e, t)) return s
                                    }

                                function W(t, e, i) {
                                    var s, n, o, a, r, l, h, c = this,
                                    u = {},
                                    d = t.style,
                                    p = t.nodeType && St(t),
                                    f = xt.get(t, "fxshow");
                                    i.queue || (r = ot._queueHooks(t, "fx"), null == r.unqueued && (r.unqueued = 0, l = r.empty.fire, r.empty.fire = function() {
                                        r.unqueued || l()
                                    }), r.unqueued++, c.always(function() {
                                        c.always(function() {
                                            r.unqueued--, ot.queue(t, "fx").length || r.empty.fire()
                                        })
                                    })), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [d.overflow, d.overflowX, d.overflowY], h = ot.css(t, "display"), "inline" === ("none" === h ? xt.get(t, "olddisplay") || D(t.nodeName) : h) && "none" === ot.css(t, "float") && (d.display = "inline-block")), i.overflow && (d.overflow = "hidden", c.always(function() {
                                        d.overflow = i.overflow[0], d.overflowX = i.overflow[1], d.overflowY = i.overflow[2]
                                    }));
                                    for (s in e)
                                        if (n = e[s], ee.exec(n)) {
                                            if (delete e[s], o = o || "toggle" === n, n === (p ? "hide" : "show")) {
                                                if ("show" !== n || !f || void 0 === f[s]) continue;
                                                p = !0
                                            }
                                            u[s] = f && f[s] || ot.style(t, s)
                                        } else h = void 0;
                                        if (ot.isEmptyObject(u)) "inline" === ("none" === h ? D(t.nodeName) : h) && (d.display = h);
                                        else {
                                            f ? "hidden" in f && (p = f.hidden) : f = xt.access(t, "fxshow", {}), o && (f.hidden = !p), p ? ot(t).show() : c.done(function() {
                                                ot(t).hide()
                                            }), c.done(function() {
                                                var e;
                                                xt.remove(t, "fxshow");
                                                for (e in u) ot.style(t, e, u[e])
                                            });
                                            for (s in u) a = L(p ? f[s] : 0, s, c), s in f || (f[s] = a.start, p && (a.end = a.start, a.start = "width" === s || "height" === s ? 1 : 0))
                                        }
                                }

                                function z(t, e) {
                                    var i, s, n, o, a;
                                    for (i in t)
                                        if (s = ot.camelCase(i), n = e[s], o = t[i], ot.isArray(o) && (n = o[1], o = t[i] = o[0]), i !== s && (t[s] = o, delete t[i]), (a = ot.cssHooks[s]) && "expand" in a) {
                                            o = a.expand(o), delete t[s];
                                            for (i in o) i in t || (t[i] = o[i], e[i] = n)
                                        } else e[s] = n
                                }

                                function F(t, e, i) {
                                    var s, n, o = 0,
                                    a = F.prefilters.length,
                                    r = ot.Deferred().always(function() {
                                        delete l.elem
                                    }),
                                    l = function() {
                                        if (n) return !1;
                                        for (var e = Zt || H(), i = Math.max(0, h.startTime + h.duration - e), s = i / h.duration || 0, o = 1 - s, a = 0, l = h.tweens.length; l > a; a++) h.tweens[a].run(o);
                                            return r.notifyWith(t, [h, o, i]), 1 > o && l ? i : (r.resolveWith(t, [h]), !1)
                                    },
                                    h = r.promise({
                                        elem: t,
                                        props: ot.extend({}, e),
                                        opts: ot.extend(!0, {
                                            specialEasing: {},
                                            easing: ot.easing._default
                                        }, i),
                                        originalProperties: e,
                                        originalOptions: i,
                                        startTime: Zt || H(),
                                        duration: i.duration,
                                        tweens: [],
                                        createTween: function(e, i) {
                                            var s = ot.Tween(t, h.opts, e, i, h.opts.specialEasing[e] || h.opts.easing);
                                            return h.tweens.push(s), s
                                        },
                                        stop: function(e) {
                                            var i = 0,
                                            s = e ? h.tweens.length : 0;
                                            if (n) return this;
                                            for (n = !0; s > i; i++) h.tweens[i].run(1);
                                                return e ? (r.notifyWith(t, [h, 1, 0]), r.resolveWith(t, [h, e])) : r.rejectWith(t, [h, e]), this
                                        }
                                    }),
                                    c = h.props;
                                    for (z(c, h.opts.specialEasing); a > o; o++)
                                        if (s = F.prefilters[o].call(h, t, c, h.opts)) return ot.isFunction(s.stop) && (ot._queueHooks(h.elem, h.opts.queue).stop = ot.proxy(s.stop, s)), s;
                                    return ot.map(c, L, h), ot.isFunction(h.opts.start) && h.opts.start.call(t, h), ot.fx.timer(ot.extend(l, {
                                        elem: t,
                                        anim: h,
                                        queue: h.opts.queue
                                    })), h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts.always)
                                }

                                function j(t) {
                                    return t.getAttribute && t.getAttribute("class") || ""
                                }

                                function R(t) {
                                    return function(e, i) {
                                        "string" != typeof e && (i = e, e = "*");
                                        var s, n = 0,
                                        o = e.toLowerCase().match(vt) || [];
                                        if (ot.isFunction(i))
                                            for (; s = o[n++];) "+" === s[0] ? (s = s.slice(1) || "*", (t[s] = t[s] || []).unshift(i)) : (t[s] = t[s] || []).push(i)
                                        }
                                }

                                function q(t, e, i, s) {
                                    function n(r) {
                                        var l;
                                        return o[r] = !0, ot.each(t[r] || [], function(t, r) {
                                            var h = r(e, i, s);
                                            return "string" != typeof h || a || o[h] ? a ? !(l = h) : void 0 : (e.dataTypes.unshift(h), n(h), !1)
                                        }), l
                                    }
                                    var o = {},
                                    a = t === ve;
                                    return n(e.dataTypes[0]) || !o["*"] && n("*")
                                }

                                function B(t, e) {
                                    var i, s, n = ot.ajaxSettings.flatOptions || {};
                                    for (i in e) void 0 !== e[i] && ((n[i] ? t : s || (s = {}))[i] = e[i]);
                                        return s && ot.extend(!0, t, s), t
                                }

                                function $(t, e, i) {
                                    for (var s, n, o, a, r = t.contents, l = t.dataTypes;
                                        "*" === l[0];) l.shift(), void 0 === s && (s = t.mimeType || e.getResponseHeader("Content-Type"));
                                        if (s)
                                            for (n in r)
                                                if (r[n] && r[n].test(s)) {
                                                    l.unshift(n);
                                                    break
                                                }
                                                if (l[0] in i) o = l[0];
                                                else {
                                                    for (n in i) {
                                                        if (!l[0] || t.converters[n + " " + l[0]]) {
                                                            o = n;
                                                            break
                                                        }
                                                        a || (a = n)
                                                    }
                                                    o = o || a
                                                }
                                                return o ? (o !== l[0] && l.unshift(o), i[o]) : void 0
                                            }

                                            function Y(t, e, i, s) {
                                                var n, o, a, r, l, h = {},
                                                c = t.dataTypes.slice();
                                                if (c[1])
                                                    for (a in t.converters) h[a.toLowerCase()] = t.converters[a];
                                                        for (o = c.shift(); o;)
                                                            if (t.responseFields[o] && (i[t.responseFields[o]] = e), !l && s && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = c.shift())
                                                                if ("*" === o) o = l;
                                                            else if ("*" !== l && l !== o) {
                                                                if (!(a = h[l + " " + o] || h["* " + o]))
                                                                    for (n in h)
                                                                        if (r = n.split(" "), r[1] === o && (a = h[l + " " + r[0]] || h["* " + r[0]])) {
                                                                            !0 === a ? a = h[n] : !0 !== h[n] && (o = r[0], c.unshift(r[1]));
                                                                            break
                                                                        }
                                                                        if (!0 !== a)
                                                                            if (a && t.throws) e = a(e);
                                                                        else try {
                                                                            e = a(e)
                                                                        } catch (t) {
                                                                            return {
                                                                                state: "parsererror",
                                                                                error: a ? t : "No conversion from " + l + " to " + o
                                                                            }
                                                                        }
                                                                    }
                                                                    return {
                                                                        state: "success",
                                                                        data: e
                                                                    }
                                                                }

                                                                function U(t, e, i, s) {
                                                                    var n;
                                                                    if (ot.isArray(e)) ot.each(e, function(e, n) {
                                                                        i || ye.test(t) ? s(t, n) : U(t + "[" + ("object" == typeof n && null != n ? e : "") + "]", n, i, s)
                                                                    });
                                                                        else if (i || "object" !== ot.type(e)) s(t, e);
                                                                        else
                                                                            for (n in e) U(t + "[" + n + "]", e[n], i, s)
                                                                        }

                                                                    function K(t) {
                                                                        return ot.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
                                                                    }
                                                                    var V = [],
                                                                    X = t.document,
                                                                    G = V.slice,
                                                                    Q = V.concat,
                                                                    J = V.push,
                                                                    Z = V.indexOf,
                                                                    tt = {},
                                                                    et = tt.toString,
                                                                    it = tt.hasOwnProperty,
                                                                    st = {},
                                                                    nt = "2.2.1",
                                                                    ot = function(t, e) {
                                                                        return new ot.fn.init(t, e)
                                                                    },
                                                                    at = function(t, e) {
                                                                        return e.toUpperCase()
                                                                    };
                                                                    ot.fn = ot.prototype = {
                                                                        jquery: nt,
                                                                        constructor: ot,
                                                                        selector: "",
                                                                        length: 0,
                                                                        toArray: function() {
                                                                            return G.call(this)
                                                                        },
                                                                        get: function(t) {
                                                                            return null != t ? 0 > t ? this[t + this.length] : this[t] : G.call(this)
                                                                        },
                                                                        pushStack: function(t) {
                                                                            var e = ot.merge(this.constructor(), t);
                                                                            return e.prevObject = this, e.context = this.context, e
                                                                        },
                                                                        each: function(t) {
                                                                            return ot.each(this, t)
                                                                        },
                                                                        map: function(t) {
                                                                            return this.pushStack(ot.map(this, function(e, i) {
                                                                                return t.call(e, i, e)
                                                                            }))
                                                                        },
                                                                        slice: function() {
                                                                            return this.pushStack(G.apply(this, arguments))
                                                                        },
                                                                        first: function() {
                                                                            return this.eq(0)
                                                                        },
                                                                        last: function() {
                                                                            return this.eq(-1)
                                                                        },
                                                                        eq: function(t) {
                                                                            var e = this.length,
                                                                            i = +t + (0 > t ? e : 0);
                                                                            return this.pushStack(i >= 0 && e > i ? [this[i]] : [])
                                                                        },
                                                                        end: function() {
                                                                            return this.prevObject || this.constructor()
                                                                        },
                                                                        push: J,
                                                                        sort: V.sort,
                                                                        splice: V.splice
                                                                    }, ot.extend = ot.fn.extend = function() {
                                                                        var t, e, i, s, n, o, a = arguments[0] || {},
                                                                        r = 1,
                                                                        l = arguments.length,
                                                                        h = !1;
                                                                        for ("boolean" == typeof a && (h = a, a = arguments[r] || {}, r++), "object" == typeof a || ot.isFunction(a) || (a = {}), r === l && (a = this, r--); l > r; r++)
                                                                            if (null != (t = arguments[r]))
                                                                                for (e in t) i = a[e], s = t[e], a !== s && (h && s && (ot.isPlainObject(s) || (n = ot.isArray(s))) ? (n ? (n = !1, o = i && ot.isArray(i) ? i : []) : o = i && ot.isPlainObject(i) ? i : {}, a[e] = ot.extend(h, o, s)) : void 0 !== s && (a[e] = s));
                                                                                    return a
                                                                            }, ot.extend({
                                                                                expando: "jQuery" + (nt + Math.random()).replace(/\D/g, ""),
                                                                                isReady: !0,
                                                                                error: function(t) {
                                                                                    throw new Error(t)
                                                                                },
                                                                                noop: function() {},
                                                                                isFunction: function(t) {
                                                                                    return "function" === ot.type(t)
                                                                                },
                                                                                isArray: Array.isArray,
                                                                                isWindow: function(t) {
                                                                                    return null != t && t === t.window
                                                                                },
                                                                                isNumeric: function(t) {
                                                                                    var e = t && t.toString();
                                                                                    return !ot.isArray(t) && e - parseFloat(e) + 1 >= 0
                                                                                },
                                                                                isPlainObject: function(t) {
                                                                                    return "object" === ot.type(t) && !t.nodeType && !ot.isWindow(t) && !(t.constructor && !it.call(t.constructor.prototype, "isPrototypeOf"))
                                                                                },
                                                                                isEmptyObject: function(t) {
                                                                                    var e;
                                                                                    for (e in t) return !1;
                                                                                        return !0
                                                                                },
                                                                                type: function(t) {
                                                                                    return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? tt[et.call(t)] || "object" : typeof t
                                                                                },
                                                                                globalEval: function(t) {
                                                                                    var e, i = eval;
                                                                                    (t = ot.trim(t)) && (1 === t.indexOf("use strict") ? (e = X.createElement("script"), e.text = t, X.head.appendChild(e).parentNode.removeChild(e)) : i(t))
                                                                                },
                                                                                camelCase: function(t) {
                                                                                    return t.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, at)
                                                                                },
                                                                                nodeName: function(t, e) {
                                                                                    return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
                                                                                },
                                                                                each: function(t, e) {
                                                                                    var s, n = 0;
                                                                                    if (i(t))
                                                                                        for (s = t.length; s > n && !1 !== e.call(t[n], n, t[n]); n++);
                                                                                            else
                                                                                                for (n in t)
                                                                                                    if (!1 === e.call(t[n], n, t[n])) break; return t
                                                                                            },
                                                                                            trim: function(t) {
                                                                                                return null == t ? "" : (t + "").replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
                                                                                            },
                                                                                            makeArray: function(t, e) {
                                                                                                var s = e || [];
                                                                                                return null != t && (i(Object(t)) ? ot.merge(s, "string" == typeof t ? [t] : t) : J.call(s, t)), s
                                                                                            },
                                                                                            inArray: function(t, e, i) {
                                                                                                return null == e ? -1 : Z.call(e, t, i)
                                                                                            },
                                                                                            merge: function(t, e) {
                                                                                                for (var i = +e.length, s = 0, n = t.length; i > s; s++) t[n++] = e[s];
                                                                                                    return t.length = n, t
                                                                                            },
                                                                                            grep: function(t, e, i) {
                                                                                                for (var s = [], n = 0, o = t.length, a = !i; o > n; n++) !e(t[n], n) !== a && s.push(t[n]);
                                                                                                    return s
                                                                                            },
                                                                                            map: function(t, e, s) {
                                                                                                var n, o, a = 0,
                                                                                                r = [];
                                                                                                if (i(t))
                                                                                                    for (n = t.length; n > a; a++) null != (o = e(t[a], a, s)) && r.push(o);
                                                                                                        else
                                                                                                            for (a in t) null != (o = e(t[a], a, s)) && r.push(o);
                                                                                                                return Q.apply([], r)
                                                                                                        },
                                                                                                        guid: 1,
                                                                                                        proxy: function(t, e) {
                                                                                                            var i, s, n;
                                                                                                            return "string" == typeof e && (i = t[e], e = t, t = i), ot.isFunction(t) ? (s = G.call(arguments, 2), n = function() {
                                                                                                                return t.apply(e || this, s.concat(G.call(arguments)))
                                                                                                            }, n.guid = t.guid = t.guid || ot.guid++, n) : void 0
                                                                                                        },
                                                                                                        now: Date.now,
                                                                                                        support: st
                                                                                                    }), "function" == typeof Symbol && (ot.fn[Symbol.iterator] = V[Symbol.iterator]), ot.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
                                                                                                        tt["[object " + e + "]"] = e.toLowerCase()
                                                                                                    });
                                                                                                    var rt = function(t) {
                                                                                                        function e(t, e, i, s) {
                                                                                                            var n, o, a, r, h, u, d, p, f = e && e.ownerDocument,
                                                                                                            g = e ? e.nodeType : 9;
                                                                                                            if (i = i || [], "string" != typeof t || !t || 1 !== g && 9 !== g && 11 !== g) return i;
                                                                                                            if (!s && ((e ? e.ownerDocument || e : z) !== M && P(e), e = e || M, O)) {
                                                                                                                if (11 !== g && (u = gt.exec(t)))
                                                                                                                    if (n = u[1]) {
                                                                                                                        if (9 === g) {
                                                                                                                            if (!(a = e.getElementById(n))) return i;
                                                                                                                            if (a.id === n) return i.push(a), i
                                                                                                                        } else if (f && (a = f.getElementById(n)) && L(e, a) && a.id === n) return i.push(a), i
                                                                                                                } else {
                                                                                                                    if (u[2]) return G.apply(i, e.getElementsByTagName(t)), i;
                                                                                                                    if ((n = u[3]) && b.getElementsByClassName && e.getElementsByClassName) return G.apply(i, e.getElementsByClassName(n)), i
                                                                                                                }
                                                                                                            if (b.qsa && !B[t + " "] && (!N || !N.test(t))) {
                                                                                                                if (1 !== g) f = e, p = t;
                                                                                                                else if ("object" !== e.nodeName.toLowerCase()) {
                                                                                                                    for ((r = e.getAttribute("id")) ? r = r.replace(vt, "\\$&") : e.setAttribute("id", r = W), d = k(t), o = d.length, h = ct.test(r) ? "#" + r : "[id='" + r + "']"; o--;) d[o] = h + " " + c(d[o]);
                                                                                                                        p = d.join(","), f = mt.test(t) && l(e.parentNode) || e
                                                                                                                }
                                                                                                                if (p) try {
                                                                                                                    return G.apply(i, f.querySelectorAll(p)), i
                                                                                                                } catch (t) {} finally {
                                                                                                                    r === W && e.removeAttribute("id")
                                                                                                                }
                                                                                                            }
                                                                                                        }
                                                                                                        return D(t.replace(ot, "$1"), e, i, s)
                                                                                                    }

                                                                                                    function i() {
                                                                                                        function t(i, s) {
                                                                                                            return e.push(i + " ") > y.cacheLength && delete t[e.shift()], t[i + " "] = s
                                                                                                        }
                                                                                                        var e = [];
                                                                                                        return t
                                                                                                    }

                                                                                                    function s(t) {
                                                                                                        return t[W] = !0, t
                                                                                                    }

                                                                                                    function n(t) {
                                                                                                        var e = M.createElement("div");
                                                                                                        try {
                                                                                                            return !!t(e)
                                                                                                        } catch (t) {
                                                                                                            return !1
                                                                                                        } finally {
                                                                                                            e.parentNode && e.parentNode.removeChild(e), e = null
                                                                                                        }
                                                                                                    }

                                                                                                    function o(t, e) {
                                                                                                        for (var i = t.split("|"), s = i.length; s--;) y.attrHandle[i[s]] = e
                                                                                                    }

                                                                                                function a(t, e) {
                                                                                                    var i = e && t,
                                                                                                    s = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || Y) - (~t.sourceIndex || Y);
                                                                                                    if (s) return s;
                                                                                                    if (i)
                                                                                                        for (; i = i.nextSibling;)
                                                                                                            if (i === e) return -1;
                                                                                                        return t ? 1 : -1
                                                                                                    }

                                                                                                    function r(t) {
                                                                                                        return s(function(e) {
                                                                                                            return e = +e, s(function(i, s) {
                                                                                                                for (var n, o = t([], i.length, e), a = o.length; a--;) i[n = o[a]] && (i[n] = !(s[n] = i[n]))
                                                                                                            })
                                                                                                        })
                                                                                                    }

                                                                                                    function l(t) {
                                                                                                        return t && void 0 !== t.getElementsByTagName && t
                                                                                                    }

                                                                                                    function h() {}

                                                                                                    function c(t) {
                                                                                                        for (var e = 0, i = t.length, s = ""; i > e; e++) s += t[e].value;
                                                                                                            return s
                                                                                                    }

                                                                                                    function u(t, e, i) {
                                                                                                        var s = e.dir,
                                                                                                        n = i && "parentNode" === s,
                                                                                                        o = j++;
                                                                                                        return e.first ? function(e, i, o) {
                                                                                                            for (; e = e[s];)
                                                                                                                if (1 === e.nodeType || n) return t(e, i, o)
                                                                                                            } : function(e, i, a) {
                                                                                                                var r, l, h, c = [F, o];
                                                                                                                if (a) {
                                                                                                                    for (; e = e[s];)
                                                                                                                        if ((1 === e.nodeType || n) && t(e, i, a)) return !0
                                                                                                                    } else
                                                                                                                for (; e = e[s];)
                                                                                                                    if (1 === e.nodeType || n) {
                                                                                                                        if (h = e[W] || (e[W] = {}), l = h[e.uniqueID] || (h[e.uniqueID] = {}), (r = l[s]) && r[0] === F && r[1] === o) return c[2] = r[2];
                                                                                                                        if (l[s] = c, c[2] = t(e, i, a)) return !0
                                                                                                                    }
                                                                                                            }
                                                                                                        }

                                                                                                        function d(t) {
                                                                                                            return t.length > 1 ? function(e, i, s) {
                                                                                                                for (var n = t.length; n--;)
                                                                                                                    if (!t[n](e, i, s)) return !1;
                                                                                                                return !0
                                                                                                            } : t[0]
                                                                                                        }

                                                                                                        function p(t, i, s) {
                                                                                                            for (var n = 0, o = i.length; o > n; n++) e(t, i[n], s);
                                                                                                                return s
                                                                                                        }

                                                                                                        function f(t, e, i, s, n) {
                                                                                                            for (var o, a = [], r = 0, l = t.length, h = null != e; l > r; r++)(o = t[r]) && (!i || i(o, s, n)) && (a.push(o), h && e.push(r));
                                                                                                                return a
                                                                                                        }

                                                                                                        function g(t, e, i, n, o, a) {
                                                                                                            return n && !n[W] && (n = g(n)), o && !o[W] && (o = g(o, a)), s(function(s, a, r, l) {
                                                                                                                var h, c, u, d = [],
                                                                                                                g = [],
                                                                                                                m = a.length,
                                                                                                                v = s || p(e || "*", r.nodeType ? [r] : r, []),
                                                                                                                _ = !t || !s && e ? v : f(v, d, t, r, l),
                                                                                                                b = i ? o || (s ? t : m || n) ? [] : a : _;
                                                                                                                if (i && i(_, b, r, l), n)
                                                                                                                    for (h = f(b, g), n(h, [], r, l), c = h.length; c--;)(u = h[c]) && (b[g[c]] = !(_[g[c]] = u));
                                                                                                                        if (s) {
                                                                                                                            if (o || t) {
                                                                                                                                if (o) {
                                                                                                                                    for (h = [], c = b.length; c--;)(u = b[c]) && h.push(_[c] = u);
                                                                                                                                        o(null, b = [], h, l)
                                                                                                                                }
                                                                                                                                for (c = b.length; c--;)(u = b[c]) && (h = o ? J(s, u) : d[c]) > -1 && (s[h] = !(a[h] = u))
                                                                                                                            }
                                                                                                                    } else b = f(b === a ? b.splice(m, b.length) : b), o ? o(null, a, b, l) : G.apply(a, b)
                                                                                                                })
                                                                                                        }

                                                                                                        function m(t) {
                                                                                                            for (var e, i, s, n = t.length, o = y.relative[t[0].type], a = o || y.relative[" "], r = o ? 1 : 0, l = u(function(t) {
                                                                                                                return t === e
                                                                                                            }, a, !0), h = u(function(t) {
                                                                                                                return J(e, t) > -1
                                                                                                            }, a, !0), p = [function(t, i, s) {
                                                                                                                var n = !o && (s || i !== T) || ((e = i).nodeType ? l(t, i, s) : h(t, i, s));
                                                                                                                return e = null, n
                                                                                                            }]; n > r; r++)
                                                                                                                if (i = y.relative[t[r].type]) p = [u(d(p), i)];
                                                                                                                else {
                                                                                                                    if (i = y.filter[t[r].type].apply(null, t[r].matches), i[W]) {
                                                                                                                        for (s = ++r; n > s && !y.relative[t[s].type]; s++);
                                                                                                                            return g(r > 1 && d(p), r > 1 && c(t.slice(0, r - 1).concat({
                                                                                                                                value: " " === t[r - 2].type ? "*" : ""
                                                                                                                            })).replace(ot, "$1"), i, s > r && m(t.slice(r, s)), n > s && m(t = t.slice(s)), n > s && c(t))
                                                                                                                    }
                                                                                                                    p.push(i)
                                                                                                                }
                                                                                                                return d(p)
                                                                                                            }

                                                                                                            function v(t, i) {
                                                                                                                var n = i.length > 0,
                                                                                                                o = t.length > 0,
                                                                                                                a = function(s, a, r, l, h) {
                                                                                                                    var c, u, d, p = 0,
                                                                                                                    g = "0",
                                                                                                                    m = s && [],
                                                                                                                    v = [],
                                                                                                                    _ = T,
                                                                                                                    b = s || o && y.find.TAG("*", h),
                                                                                                                    x = F += null == _ ? 1 : Math.random() || .1,
                                                                                                                    w = b.length;
                                                                                                                    for (h && (T = a === M || a || h); g !== w && null != (c = b[g]); g++) {
                                                                                                                        if (o && c) {
                                                                                                                            for (u = 0, a || c.ownerDocument === M || (P(c), r = !O); d = t[u++];)
                                                                                                                                if (d(c, a || M, r)) {
                                                                                                                                    l.push(c);
                                                                                                                                    break
                                                                                                                                }
                                                                                                                                h && (F = x)
                                                                                                                            }
                                                                                                                            n && ((c = !d && c) && p--, s && m.push(c))
                                                                                                                        }
                                                                                                                        if (p += g, n && g !== p) {
                                                                                                                            for (u = 0; d = i[u++];) d(m, v, a, r);
                                                                                                                                if (s) {
                                                                                                                                    if (p > 0)
                                                                                                                                        for (; g--;) m[g] || v[g] || (v[g] = V.call(l));
                                                                                                                                            v = f(v)
                                                                                                                                    }
                                                                                                                                    G.apply(l, v), h && !s && v.length > 0 && p + i.length > 1 && e.uniqueSort(l)
                                                                                                                                }
                                                                                                                                return h && (F = x, T = _), m
                                                                                                                            };
                                                                                                                            return n ? s(a) : a
                                                                                                                        }
                                                                                                                        var _, b, y, x, w, k, C, D, T, I, S, P, M, A, O, N, H, E, L, W = "sizzle" + 1 * new Date,
                                                                                                                        z = t.document,
                                                                                                                        F = 0,
                                                                                                                        j = 0,
                                                                                                                        R = i(),
                                                                                                                        q = i(),
                                                                                                                        B = i(),
                                                                                                                        $ = function(t, e) {
                                                                                                                            return t === e && (S = !0), 0
                                                                                                                        },
                                                                                                                        Y = 1 << 31,
                                                                                                                        U = {}.hasOwnProperty,
                                                                                                                        K = [],
                                                                                                                        V = K.pop,
                                                                                                                        X = K.push,
                                                                                                                        G = K.push,
                                                                                                                        Q = K.slice,
                                                                                                                        J = function(t, e) {
                                                                                                                            for (var i = 0, s = t.length; s > i; i++)
                                                                                                                                if (t[i] === e) return i;
                                                                                                                            return -1
                                                                                                                        },
                                                                                                                        Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                                                                                                                        tt = "[\\x20\\t\\r\\n\\f]",
                                                                                                                        et = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                                                                                                                        it = "\\[" + tt + "*(" + et + ")(?:" + tt + "*([*^$|!~]?=)" + tt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + et + "))|)" + tt + "*\\]",
                                                                                                                        st = ":(" + et + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + it + ")*)|.*)\\)|)",
                                                                                                                        nt = new RegExp(tt + "+", "g"),
                                                                                                                        ot = new RegExp("^" + tt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + tt + "+$", "g"),
                                                                                                                        at = new RegExp("^" + tt + "*," + tt + "*"),
                                                                                                                        rt = new RegExp("^" + tt + "*([>+~]|" + tt + ")" + tt + "*"),
                                                                                                                        lt = new RegExp("=" + tt + "*([^\\]'\"]*?)" + tt + "*\\]", "g"),
                                                                                                                        ht = new RegExp(st),
                                                                                                                        ct = new RegExp("^" + et + "$"),
                                                                                                                        ut = {
                                                                                                                            ID: new RegExp("^#(" + et + ")"),
                                                                                                                            CLASS: new RegExp("^\\.(" + et + ")"),
                                                                                                                            TAG: new RegExp("^(" + et + "|[*])"),
                                                                                                                            ATTR: new RegExp("^" + it),
                                                                                                                            PSEUDO: new RegExp("^" + st),
                                                                                                                            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + tt + "*(even|odd|(([+-]|)(\\d*)n|)" + tt + "*(?:([+-]|)" + tt + "*(\\d+)|))" + tt + "*\\)|)", "i"),
                                                                                                                            bool: new RegExp("^(?:" + Z + ")$", "i"),
                                                                                                                            needsContext: new RegExp("^" + tt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + tt + "*((?:-\\d)?\\d*)" + tt + "*\\)|)(?=[^-]|$)", "i")
                                                                                                                        },
                                                                                                                        dt = /^(?:input|select|textarea|button)$/i,
                                                                                                                        pt = /^h\d$/i,
                                                                                                                        ft = /^[^{]+\{\s*\[native \w/,
                                                                                                                            gt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                                                                                                                            mt = /[+~]/,
                                                                                                                            vt = /'|\\/g,
                                                                                                                            _t = new RegExp("\\\\([\\da-f]{1,6}" + tt + "?|(" + tt + ")|.)", "ig"),
                                                                                                                            bt = function(t, e, i) {
                                                                                                                                var s = "0x" + e - 65536;
                                                                                                                                return s !== s || i ? e : 0 > s ? String.fromCharCode(s + 65536) : String.fromCharCode(s >> 10 | 55296, 1023 & s | 56320)
                                                                                                                            },
                                                                                                                            yt = function() {
                                                                                                                                P()
                                                                                                                            };
                                                                                                                            try {
                                                                                                                                G.apply(K = Q.call(z.childNodes), z.childNodes), K[z.childNodes.length].nodeType
                                                                                                                            } catch (t) {
                                                                                                                                G = {
                                                                                                                                    apply: K.length ? function(t, e) {
                                                                                                                                        X.apply(t, Q.call(e))
                                                                                                                                    } : function(t, e) {
                                                                                                                                        for (var i = t.length, s = 0; t[i++] = e[s++];);
                                                                                                                                            t.length = i - 1
                                                                                                                                    }
                                                                                                                                }
                                                                                                                            }
                                                                                                                            b = e.support = {}, w = e.isXML = function(t) {
                                                                                                                                var e = t && (t.ownerDocument || t).documentElement;
                                                                                                                                return !!e && "HTML" !== e.nodeName
                                                                                                                            }, P = e.setDocument = function(t) {
                                                                                                                                var e, i, s = t ? t.ownerDocument || t : z;
                                                                                                                                return s !== M && 9 === s.nodeType && s.documentElement ? (M = s, A = M.documentElement, O = !w(M), (i = M.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", yt, !1) : i.attachEvent && i.attachEvent("onunload", yt)), b.attributes = n(function(t) {
                                                                                                                                    return t.className = "i", !t.getAttribute("className")
                                                                                                                                }), b.getElementsByTagName = n(function(t) {
                                                                                                                                    return t.appendChild(M.createComment("")), !t.getElementsByTagName("*").length
                                                                                                                                }), b.getElementsByClassName = ft.test(M.getElementsByClassName), b.getById = n(function(t) {
                                                                                                                                    return A.appendChild(t).id = W, !M.getElementsByName || !M.getElementsByName(W).length
                                                                                                                                }), b.getById ? (y.find.ID = function(t, e) {
                                                                                                                                    if (void 0 !== e.getElementById && O) {
                                                                                                                                        var i = e.getElementById(t);
                                                                                                                                        return i ? [i] : []
                                                                                                                                    }
                                                                                                                                }, y.filter.ID = function(t) {
                                                                                                                                    var e = t.replace(_t, bt);
                                                                                                                                    return function(t) {
                                                                                                                                        return t.getAttribute("id") === e
                                                                                                                                    }
                                                                                                                                }) : (delete y.find.ID, y.filter.ID = function(t) {
                                                                                                                                    var e = t.replace(_t, bt);
                                                                                                                                    return function(t) {
                                                                                                                                        var i = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                                                                                                                                        return i && i.value === e
                                                                                                                                    }
                                                                                                                                }), y.find.TAG = b.getElementsByTagName ? function(t, e) {
                                                                                                                                    return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : b.qsa ? e.querySelectorAll(t) : void 0
                                                                                                                                } : function(t, e) {
                                                                                                                                    var i, s = [],
                                                                                                                                    n = 0,
                                                                                                                                    o = e.getElementsByTagName(t);
                                                                                                                                    if ("*" === t) {
                                                                                                                                        for (; i = o[n++];) 1 === i.nodeType && s.push(i);
                                                                                                                                            return s
                                                                                                                                    }
                                                                                                                                    return o
                                                                                                                                }, y.find.CLASS = b.getElementsByClassName && function(t, e) {
                                                                                                                                    return void 0 !== e.getElementsByClassName && O ? e.getElementsByClassName(t) : void 0
                                                                                                                                }, H = [], N = [], (b.qsa = ft.test(M.querySelectorAll)) && (n(function(t) {
                                                                                                                                    A.appendChild(t).innerHTML = "<a id='" + W + "'></a><select id='" + W + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && N.push("[*^$]=" + tt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || N.push("\\[" + tt + "*(?:value|" + Z + ")"), t.querySelectorAll("[id~=" + W + "-]").length || N.push("~="), t.querySelectorAll(":checked").length || N.push(":checked"), t.querySelectorAll("a#" + W + "+*").length || N.push(".#.+[+~]")
                                                                                                                                }), n(function(t) {
                                                                                                                                    var e = M.createElement("input");
                                                                                                                                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && N.push("name" + tt + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || N.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), N.push(",.*:")
                                                                                                                                })), (b.matchesSelector = ft.test(E = A.matches || A.webkitMatchesSelector || A.mozMatchesSelector || A.oMatchesSelector || A.msMatchesSelector)) && n(function(t) {
                                                                                                                                    b.disconnectedMatch = E.call(t, "div"), E.call(t, "[s!='']:x"), H.push("!=", st)
                                                                                                                                }), N = N.length && new RegExp(N.join("|")), H = H.length && new RegExp(H.join("|")), e = ft.test(A.compareDocumentPosition), L = e || ft.test(A.contains) ? function(t, e) {
                                                                                                                                    var i = 9 === t.nodeType ? t.documentElement : t,
                                                                                                                                    s = e && e.parentNode;
                                                                                                                                    return t === s || !(!s || 1 !== s.nodeType || !(i.contains ? i.contains(s) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(s)))
                                                                                                                                } : function(t, e) {
                                                                                                                                    if (e)
                                                                                                                                        for (; e = e.parentNode;)
                                                                                                                                            if (e === t) return !0;
                                                                                                                                        return !1
                                                                                                                                    }, $ = e ? function(t, e) {
                                                                                                                                        if (t === e) return S = !0, 0;
                                                                                                                                        var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                                                                                                                                        return i || (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & i || !b.sortDetached && e.compareDocumentPosition(t) === i ? t === M || t.ownerDocument === z && L(z, t) ? -1 : e === M || e.ownerDocument === z && L(z, e) ? 1 : I ? J(I, t) - J(I, e) : 0 : 4 & i ? -1 : 1)
                                                                                                                                    } : function(t, e) {
                                                                                                                                        if (t === e) return S = !0, 0;
                                                                                                                                        var i, s = 0,
                                                                                                                                        n = t.parentNode,
                                                                                                                                        o = e.parentNode,
                                                                                                                                        r = [t],
                                                                                                                                        l = [e];
                                                                                                                                        if (!n || !o) return t === M ? -1 : e === M ? 1 : n ? -1 : o ? 1 : I ? J(I, t) - J(I, e) : 0;
                                                                                                                                        if (n === o) return a(t, e);
                                                                                                                                        for (i = t; i = i.parentNode;) r.unshift(i);
                                                                                                                                            for (i = e; i = i.parentNode;) l.unshift(i);
                                                                                                                                                for (; r[s] === l[s];) s++;
                                                                                                                                                    return s ? a(r[s], l[s]) : r[s] === z ? -1 : l[s] === z ? 1 : 0
                                                                                                                                            }, M) : M
}, e.matches = function(t, i) {
    return e(t, null, null, i)
}, e.matchesSelector = function(t, i) {
    if ((t.ownerDocument || t) !== M && P(t), i = i.replace(lt, "='$1']"), b.matchesSelector && O && !B[i + " "] && (!H || !H.test(i)) && (!N || !N.test(i))) try {
        var s = E.call(t, i);
        if (s || b.disconnectedMatch || t.document && 11 !== t.document.nodeType) return s
    } catch (t) {}
return e(i, M, null, [t]).length > 0
}, e.contains = function(t, e) {
    return (t.ownerDocument || t) !== M && P(t), L(t, e)
}, e.attr = function(t, e) {
    (t.ownerDocument || t) !== M && P(t);
    var i = y.attrHandle[e.toLowerCase()],
    s = i && U.call(y.attrHandle, e.toLowerCase()) ? i(t, e, !O) : void 0;
    return void 0 !== s ? s : b.attributes || !O ? t.getAttribute(e) : (s = t.getAttributeNode(e)) && s.specified ? s.value : null
}, e.error = function(t) {
    throw new Error("Syntax error, unrecognized expression: " + t)
}, e.uniqueSort = function(t) {
    var e, i = [],
    s = 0,
    n = 0;
    if (S = !b.detectDuplicates, I = !b.sortStable && t.slice(0), t.sort($), S) {
        for (; e = t[n++];) e === t[n] && (s = i.push(n));
            for (; s--;) t.splice(i[s], 1)
        }
    return I = null, t
}, x = e.getText = function(t) {
    var e, i = "",
    s = 0,
    n = t.nodeType;
    if (n) {
        if (1 === n || 9 === n || 11 === n) {
            if ("string" == typeof t.textContent) return t.textContent;
            for (t = t.firstChild; t; t = t.nextSibling) i += x(t)
        } else if (3 === n || 4 === n) return t.nodeValue
} else
for (; e = t[s++];) i += x(e);
    return i
}, y = e.selectors = {
    cacheLength: 50,
    createPseudo: s,
    match: ut,
    attrHandle: {},
    find: {},
    relative: {
        ">": {
            dir: "parentNode",
            first: !0
        },
        " ": {
            dir: "parentNode"
        },
        "+": {
            dir: "previousSibling",
            first: !0
        },
        "~": {
            dir: "previousSibling"
        }
    },
    preFilter: {
        ATTR: function(t) {
            return t[1] = t[1].replace(_t, bt), t[3] = (t[3] || t[4] || t[5] || "").replace(_t, bt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
        },
        CHILD: function(t) {
            return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
        },
        PSEUDO: function(t) {
            var e, i = !t[6] && t[2];
            return ut.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && ht.test(i) && (e = k(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
        }
    },
    filter: {
        TAG: function(t) {
            var e = t.replace(_t, bt).toLowerCase();
            return "*" === t ? function() {
                return !0
            } : function(t) {
                return t.nodeName && t.nodeName.toLowerCase() === e
            }
        },
        CLASS: function(t) {
            var e = R[t + " "];
            return e || (e = new RegExp("(^|" + tt + ")" + t + "(" + tt + "|$)")) && R(t, function(t) {
                return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
            })
        },
        ATTR: function(t, i, s) {
            return function(n) {
                var o = e.attr(n, t);
                return null == o ? "!=" === i : !i || (o += "", "=" === i ? o === s : "!=" === i ? o !== s : "^=" === i ? s && 0 === o.indexOf(s) : "*=" === i ? s && o.indexOf(s) > -1 : "$=" === i ? s && o.slice(-s.length) === s : "~=" === i ? (" " + o.replace(nt, " ") + " ").indexOf(s) > -1 : "|=" === i && (o === s || o.slice(0, s.length + 1) === s + "-"))
            }
        },
        CHILD: function(t, e, i, s, n) {
            var o = "nth" !== t.slice(0, 3),
            a = "last" !== t.slice(-4),
            r = "of-type" === e;
            return 1 === s && 0 === n ? function(t) {
                return !!t.parentNode
            } : function(e, i, l) {
                var h, c, u, d, p, f, g = o !== a ? "nextSibling" : "previousSibling",
                m = e.parentNode,
                v = r && e.nodeName.toLowerCase(),
                _ = !l && !r,
                b = !1;
                if (m) {
                    if (o) {
                        for (; g;) {
                            for (d = e; d = d[g];)
                                if (r ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                            f = g = "only" === t && !f && "nextSibling"
                        }
                        return !0
                    }
                    if (f = [a ? m.firstChild : m.lastChild], a && _) {
                        for (d = m, u = d[W] || (d[W] = {}), c = u[d.uniqueID] || (u[d.uniqueID] = {}), h = c[t] || [], p = h[0] === F && h[1], b = p && h[2], d = p && m.childNodes[p]; d = ++p && d && d[g] || (b = p = 0) || f.pop();)
                            if (1 === d.nodeType && ++b && d === e) {
                                c[t] = [F, p, b];
                                break
                            }
                        } else if (_ && (d = e, u = d[W] || (d[W] = {}), c = u[d.uniqueID] || (u[d.uniqueID] = {}), h = c[t] || [], p = h[0] === F && h[1], b = p), !1 === b)
                        for (;
                            (d = ++p && d && d[g] || (b = p = 0) || f.pop()) && ((r ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (_ && (u = d[W] || (d[W] = {}), c = u[d.uniqueID] || (u[d.uniqueID] = {}), c[t] = [F, b]), d !== e)););
                            return (b -= n) === s || b % s == 0 && b / s >= 0
                    }
                }
            },
            PSEUDO: function(t, i) {
                var n, o = y.pseudos[t] || y.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                return o[W] ? o(i) : o.length > 1 ? (n = [t, t, "", i], y.setFilters.hasOwnProperty(t.toLowerCase()) ? s(function(t, e) {
                    for (var s, n = o(t, i), a = n.length; a--;) s = J(t, n[a]), t[s] = !(e[s] = n[a])
                }) : function(t) {
                    return o(t, 0, n)
                }) : o
            }
        },
        pseudos: {
            not: s(function(t) {
                var e = [],
                i = [],
                n = C(t.replace(ot, "$1"));
                return n[W] ? s(function(t, e, i, s) {
                    for (var o, a = n(t, null, s, []), r = t.length; r--;)(o = a[r]) && (t[r] = !(e[r] = o))
                }) : function(t, s, o) {
                    return e[0] = t, n(e, null, o, i), e[0] = null, !i.pop()
                }
            }),
            has: s(function(t) {
                return function(i) {
                    return e(t, i).length > 0
                }
            }),
            contains: s(function(t) {
                return t = t.replace(_t, bt),
                function(e) {
                    return (e.textContent || e.innerText || x(e)).indexOf(t) > -1
                }
            }),
            lang: s(function(t) {
                return ct.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(_t, bt).toLowerCase(),
                function(e) {
                    var i;
                    do {
                        if (i = O ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (i = i.toLowerCase()) === t || 0 === i.indexOf(t + "-")
                    } while ((e = e.parentNode) && 1 === e.nodeType);
                return !1
            }
        }),
            target: function(e) {
                var i = t.location && t.location.hash;
                return i && i.slice(1) === e.id
            },
            root: function(t) {
                return t === A
            },
            focus: function(t) {
                return t === M.activeElement && (!M.hasFocus || M.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
            },
            enabled: function(t) {
                return !1 === t.disabled
            },
            disabled: function(t) {
                return !0 === t.disabled
            },
            checked: function(t) {
                var e = t.nodeName.toLowerCase();
                return "input" === e && !!t.checked || "option" === e && !!t.selected
            },
            selected: function(t) {
                return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
            },
            empty: function(t) {
                for (t = t.firstChild; t; t = t.nextSibling)
                    if (t.nodeType < 6) return !1;
                return !0
            },
            parent: function(t) {
                return !y.pseudos.empty(t)
            },
            header: function(t) {
                return pt.test(t.nodeName)
            },
            input: function(t) {
                return dt.test(t.nodeName)
            },
            button: function(t) {
                var e = t.nodeName.toLowerCase();
                return "input" === e && "button" === t.type || "button" === e
            },
            text: function(t) {
                var e;
                return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
            },
            first: r(function() {
                return [0]
            }),
            last: r(function(t, e) {
                return [e - 1]
            }),
            eq: r(function(t, e, i) {
                return [0 > i ? i + e : i]
            }),
            even: r(function(t, e) {
                for (var i = 0; e > i; i += 2) t.push(i);
                    return t
            }),
            odd: r(function(t, e) {
                for (var i = 1; e > i; i += 2) t.push(i);
                    return t
            }),
            lt: r(function(t, e, i) {
                for (var s = 0 > i ? i + e : i; --s >= 0;) t.push(s);
                    return t
            }),
            gt: r(function(t, e, i) {
                for (var s = 0 > i ? i + e : i; ++s < e;) t.push(s);
                    return t
            })
        }
    }, y.pseudos.nth = y.pseudos.eq;
    for (_ in {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0
    }) y.pseudos[_] = function(t) {
        return function(e) {
            return "input" === e.nodeName.toLowerCase() && e.type === t
        }
    }(_);
    for (_ in {
        submit: !0,
        reset: !0
    }) y.pseudos[_] = function(t) {
        return function(e) {
            var i = e.nodeName.toLowerCase();
            return ("input" === i || "button" === i) && e.type === t
        }
    }(_);
    return h.prototype = y.filters = y.pseudos, y.setFilters = new h, k = e.tokenize = function(t, i) {
        var s, n, o, a, r, l, h, c = q[t + " "];
        if (c) return i ? 0 : c.slice(0);
        for (r = t, l = [], h = y.preFilter; r;) {
            (!s || (n = at.exec(r))) && (n && (r = r.slice(n[0].length) || r), l.push(o = [])), s = !1, (n = rt.exec(r)) && (s = n.shift(), o.push({
                value: s,
                type: n[0].replace(ot, " ")
            }), r = r.slice(s.length));
            for (a in y.filter) !(n = ut[a].exec(r)) || h[a] && !(n = h[a](n)) || (s = n.shift(), o.push({
                value: s,
                type: a,
                matches: n
            }), r = r.slice(s.length));
                if (!s) break
            }
        return i ? r.length : r ? e.error(t) : q(t, l).slice(0)
    }, C = e.compile = function(t, e) {
        var i, s = [],
        n = [],
        o = B[t + " "];
        if (!o) {
            for (e || (e = k(t)), i = e.length; i--;) o = m(e[i]), o[W] ? s.push(o) : n.push(o);
                o = B(t, v(n, s)), o.selector = t
        }
        return o
    }, D = e.select = function(t, e, i, s) {
        var n, o, a, r, h, u = "function" == typeof t && t,
        d = !s && k(t = u.selector || t);
        if (i = i || [], 1 === d.length) {
            if (o = d[0] = d[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && b.getById && 9 === e.nodeType && O && y.relative[o[1].type]) {
                if (!(e = (y.find.ID(a.matches[0].replace(_t, bt), e) || [])[0])) return i;
                u && (e = e.parentNode), t = t.slice(o.shift().value.length)
            }
            for (n = ut.needsContext.test(t) ? 0 : o.length; n-- && (a = o[n], !y.relative[r = a.type]);)
                if ((h = y.find[r]) && (s = h(a.matches[0].replace(_t, bt), mt.test(o[0].type) && l(e.parentNode) || e))) {
                    if (o.splice(n, 1), !(t = s.length && c(o))) return G.apply(i, s), i;
                    break
                }
            }
            return (u || C(t, d))(s, e, !O, i, !e || mt.test(t) && l(e.parentNode) || e), i
        }, b.sortStable = W.split("").sort($).join("") === W, b.detectDuplicates = !!S, P(), b.sortDetached = n(function(t) {
            return 1 & t.compareDocumentPosition(M.createElement("div"))
        }), n(function(t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(t, e, i) {
            return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), b.attributes && n(function(t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || o("value", function(t, e, i) {
            return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
        }), n(function(t) {
            return null == t.getAttribute("disabled")
        }) || o(Z, function(t, e, i) {
            var s;
            return i ? void 0 : !0 === t[e] ? e.toLowerCase() : (s = t.getAttributeNode(e)) && s.specified ? s.value : null
        }), e
    }(t);
    ot.find = rt, ot.expr = rt.selectors, ot.expr[":"] = ot.expr.pseudos, ot.uniqueSort = ot.unique = rt.uniqueSort, ot.text = rt.getText, ot.isXMLDoc = rt.isXML, ot.contains = rt.contains;
    var lt = function(t, e, i) {
        for (var s = [], n = void 0 !== i;
            (t = t[e]) && 9 !== t.nodeType;)
            if (1 === t.nodeType) {
                if (n && ot(t).is(i)) break;
                s.push(t)
            }
            return s
        },
        ht = function(t, e) {
            for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
                return i
        },
        ct = ot.expr.match.needsContext,
        ut = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        dt = /^.[^:#\[\.,]*$/;
        ot.filter = function(t, e, i) {
            var s = e[0];
            return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === s.nodeType ? ot.find.matchesSelector(s, t) ? [s] : [] : ot.find.matches(t, ot.grep(e, function(t) {
                return 1 === t.nodeType
            }))
        }, ot.fn.extend({
            find: function(t) {
                var e, i = this.length,
                s = [],
                n = this;
                if ("string" != typeof t) return this.pushStack(ot(t).filter(function() {
                    for (e = 0; i > e; e++)
                        if (ot.contains(n[e], this)) return !0
                    }));
                    for (e = 0; i > e; e++) ot.find(t, n[e], s);
                        return s = this.pushStack(i > 1 ? ot.unique(s) : s), s.selector = this.selector ? this.selector + " " + t : t, s
                },
                filter: function(t) {
                    return this.pushStack(s(this, t || [], !1))
                },
                not: function(t) {
                    return this.pushStack(s(this, t || [], !0))
                },
                is: function(t) {
                    return !!s(this, "string" == typeof t && ct.test(t) ? ot(t) : t || [], !1).length
                }
            });
        var pt, ft = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
        (ot.fn.init = function(t, e, i) {
            var s, n;
            if (!t) return this;
            if (i = i || pt, "string" == typeof t) {
                if (!(s = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : ft.exec(t)) || !s[1] && e) return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
                if (s[1]) {
                    if (e = e instanceof ot ? e[0] : e, ot.merge(this, ot.parseHTML(s[1], e && e.nodeType ? e.ownerDocument || e : X, !0)), ut.test(s[1]) && ot.isPlainObject(e))
                        for (s in e) ot.isFunction(this[s]) ? this[s](e[s]) : this.attr(s, e[s]);
                            return this
                    }
                    return n = X.getElementById(s[2]), n && n.parentNode && (this.length = 1, this[0] = n), this.context = X, this.selector = t, this
                }
                return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : ot.isFunction(t) ? void 0 !== i.ready ? i.ready(t) : t(ot) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), ot.makeArray(t, this))
            }).prototype = ot.fn, pt = ot(X);
        var gt = /^(?:parents|prev(?:Until|All))/,
        mt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
        ot.fn.extend({
            has: function(t) {
                var e = ot(t, this),
                i = e.length;
                return this.filter(function() {
                    for (var t = 0; i > t; t++)
                        if (ot.contains(this, e[t])) return !0
                    })
            },
            closest: function(t, e) {
                for (var i, s = 0, n = this.length, o = [], a = ct.test(t) || "string" != typeof t ? ot(t, e || this.context) : 0; n > s; s++)
                    for (i = this[s]; i && i !== e; i = i.parentNode)
                        if (i.nodeType < 11 && (a ? a.index(i) > -1 : 1 === i.nodeType && ot.find.matchesSelector(i, t))) {
                            o.push(i);
                            break
                        }
                        return this.pushStack(o.length > 1 ? ot.uniqueSort(o) : o)
                    },
                    index: function(t) {
                        return t ? "string" == typeof t ? Z.call(ot(t), this[0]) : Z.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                    },
                    add: function(t, e) {
                        return this.pushStack(ot.uniqueSort(ot.merge(this.get(), ot(t, e))))
                    },
                    addBack: function(t) {
                        return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
                    }
                }), ot.each({
                    parent: function(t) {
                        var e = t.parentNode;
                        return e && 11 !== e.nodeType ? e : null
                    },
                    parents: function(t) {
                        return lt(t, "parentNode")
                    },
                    parentsUntil: function(t, e, i) {
                        return lt(t, "parentNode", i)
                    },
                    next: function(t) {
                        return n(t, "nextSibling")
                    },
                    prev: function(t) {
                        return n(t, "previousSibling")
                    },
                    nextAll: function(t) {
                        return lt(t, "nextSibling")
                    },
                    prevAll: function(t) {
                        return lt(t, "previousSibling")
                    },
                    nextUntil: function(t, e, i) {
                        return lt(t, "nextSibling", i)
                    },
                    prevUntil: function(t, e, i) {
                        return lt(t, "previousSibling", i)
                    },
                    siblings: function(t) {
                        return ht((t.parentNode || {}).firstChild, t)
                    },
                    children: function(t) {
                        return ht(t.firstChild)
                    },
                    contents: function(t) {
                        return t.contentDocument || ot.merge([], t.childNodes)
                    }
                }, function(t, e) {
                    ot.fn[t] = function(i, s) {
                        var n = ot.map(this, e, i);
                        return "Until" !== t.slice(-5) && (s = i), s && "string" == typeof s && (n = ot.filter(s, n)), this.length > 1 && (mt[t] || ot.uniqueSort(n), gt.test(t) && n.reverse()), this.pushStack(n)
                    }
                });
                var vt = /\S+/g;
                ot.Callbacks = function(t) {
                    t = "string" == typeof t ? o(t) : ot.extend({}, t);
                    var e, i, s, n, a = [],
                    r = [],
                    l = -1,
                    h = function() {
                        for (n = t.once, s = e = !0; r.length; l = -1)
                            for (i = r.shift(); ++l < a.length;) !1 === a[l].apply(i[0], i[1]) && t.stopOnFalse && (l = a.length, i = !1);
                                t.memory || (i = !1), e = !1, n && (a = i ? [] : "")
                        },
                        c = {
                            add: function() {
                                return a && (i && !e && (l = a.length - 1, r.push(i)), function e(i) {
                                    ot.each(i, function(i, s) {
                                        ot.isFunction(s) ? t.unique && c.has(s) || a.push(s) : s && s.length && "string" !== ot.type(s) && e(s)
                                    })
                                }(arguments), i && !e && h()), this
                            },
                            remove: function() {
                                return ot.each(arguments, function(t, e) {
                                    for (var i;
                                        (i = ot.inArray(e, a, i)) > -1;) a.splice(i, 1), l >= i && l--
                                }), this
                            },
                            has: function(t) {
                                return t ? ot.inArray(t, a) > -1 : a.length > 0
                            },
                            empty: function() {
                                return a && (a = []), this
                            },
                            disable: function() {
                                return n = r = [], a = i = "", this
                            },
                            disabled: function() {
                                return !a
                            },
                            lock: function() {
                                return n = r = [], i || (a = i = ""), this
                            },
                            locked: function() {
                                return !!n
                            },
                            fireWith: function(t, i) {
                                return n || (i = i || [], i = [t, i.slice ? i.slice() : i], r.push(i), e || h()), this
                            },
                            fire: function() {
                                return c.fireWith(this, arguments), this
                            },
                            fired: function() {
                                return !!s
                            }
                        };
                        return c
                    }, ot.extend({
                        Deferred: function(t) {
                            var e = [
                            ["resolve", "done", ot.Callbacks("once memory"), "resolved"],
                            ["reject", "fail", ot.Callbacks("once memory"), "rejected"],
                            ["notify", "progress", ot.Callbacks("memory")]
                            ],
                            i = "pending",
                            s = {
                                state: function() {
                                    return i
                                },
                                always: function() {
                                    return n.done(arguments).fail(arguments), this
                                },
                                then: function() {
                                    var t = arguments;
                                    return ot.Deferred(function(i) {
                                        ot.each(e, function(e, o) {
                                            var a = ot.isFunction(t[e]) && t[e];
                                            n[o[1]](function() {
                                                var t = a && a.apply(this, arguments);
                                                t && ot.isFunction(t.promise) ? t.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[o[0] + "With"](this === s ? i.promise() : this, a ? [t] : arguments)
                                            })
                                        }), t = null
                                    }).promise()
                                },
                                promise: function(t) {
                                    return null != t ? ot.extend(t, s) : s
                                }
                            },
                            n = {};
                            return s.pipe = s.then, ot.each(e, function(t, o) {
                                var a = o[2],
                                r = o[3];
                                s[o[1]] = a.add, r && a.add(function() {
                                    i = r
                                }, e[1 ^ t][2].disable, e[2][2].lock), n[o[0]] = function() {
                                    return n[o[0] + "With"](this === n ? s : this, arguments), this
                                }, n[o[0] + "With"] = a.fireWith
                            }), s.promise(n), t && t.call(n, n), n
                        },
                        when: function(t) {
                            var e, i, s, n = 0,
                            o = G.call(arguments),
                            a = o.length,
                            r = 1 !== a || t && ot.isFunction(t.promise) ? a : 0,
                            l = 1 === r ? t : ot.Deferred(),
                            h = function(t, i, s) {
                                return function(n) {
                                    i[t] = this, s[t] = arguments.length > 1 ? G.call(arguments) : n, s === e ? l.notifyWith(i, s) : --r || l.resolveWith(i, s)
                                }
                            };
                            if (a > 1)
                                for (e = new Array(a), i = new Array(a), s = new Array(a); a > n; n++) o[n] && ot.isFunction(o[n].promise) ? o[n].promise().progress(h(n, i, e)).done(h(n, s, o)).fail(l.reject) : --r;
                                    return r || l.resolveWith(s, o), l.promise()
                            }
                        });
                    var _t;
                    ot.fn.ready = function(t) {
                        return ot.ready.promise().done(t), this
                    }, ot.extend({
                        isReady: !1,
                        readyWait: 1,
                        holdReady: function(t) {
                            t ? ot.readyWait++ : ot.ready(!0)
                        },
                        ready: function(t) {
                            (!0 === t ? --ot.readyWait : ot.isReady) || (ot.isReady = !0, !0 !== t && --ot.readyWait > 0 || (_t.resolveWith(X, [ot]), ot.fn.triggerHandler && (ot(X).triggerHandler("ready"), ot(X).off("ready"))))
                        }
                    }), ot.ready.promise = function(e) {
                        return _t || (_t = ot.Deferred(), "complete" === X.readyState || "loading" !== X.readyState && !X.documentElement.doScroll ? t.setTimeout(ot.ready) : (X.addEventListener("DOMContentLoaded", a), t.addEventListener("load", a))), _t.promise(e)
                    }, ot.ready.promise();
                    var bt = function(t, e, i, s, n, o, a) {
                        var r = 0,
                        l = t.length,
                        h = null == i;
                        if ("object" === ot.type(i)) {
                            n = !0;
                            for (r in i) bt(t, e, r, i[r], !0, o, a)
                        } else if (void 0 !== s && (n = !0, ot.isFunction(s) || (a = !0), h && (a ? (e.call(t, s), e = null) : (h = e, e = function(t, e, i) {
                            return h.call(ot(t), i)
                        })), e))
                    for (; l > r; r++) e(t[r], i, a ? s : s.call(t[r], r, e(t[r], i)));
                        return n ? t : h ? e.call(t) : l ? e(t[0], i) : o
                },
                yt = function(t) {
                    return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
                };
                r.uid = 1, r.prototype = {
                    register: function(t, e) {
                        var i = e || {};
                        return t.nodeType ? t[this.expando] = i : Object.defineProperty(t, this.expando, {
                            value: i,
                            writable: !0,
                            configurable: !0
                        }), t[this.expando]
                    },
                    cache: function(t) {
                        if (!yt(t)) return {};
                        var e = t[this.expando];
                        return e || (e = {}, yt(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                            value: e,
                            configurable: !0
                        }))), e
                    },
                    set: function(t, e, i) {
                        var s, n = this.cache(t);
                        if ("string" == typeof e) n[e] = i;
                        else
                            for (s in e) n[s] = e[s];
                                return n
                        },
                        get: function(t, e) {
                            return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][e]
                        },
                        access: function(t, e, i) {
                            var s;
                            return void 0 === e || e && "string" == typeof e && void 0 === i ? (s = this.get(t, e), void 0 !== s ? s : this.get(t, ot.camelCase(e))) : (this.set(t, e, i), void 0 !== i ? i : e)
                        },
                        remove: function(t, e) {
                            var i, s, n, o = t[this.expando];
                            if (void 0 !== o) {
                                if (void 0 === e) this.register(t);
                                else {
                                    ot.isArray(e) ? s = e.concat(e.map(ot.camelCase)) : (n = ot.camelCase(e), e in o ? s = [e, n] : (s = n, s = s in o ? [s] : s.match(vt) || [])), i = s.length;
                                    for (; i--;) delete o[s[i]]
                                }(void 0 === e || ot.isEmptyObject(o)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
                        }
                    },
                    hasData: function(t) {
                        var e = t[this.expando];
                        return void 0 !== e && !ot.isEmptyObject(e)
                    }
                };
                var xt = new r,
                wt = new r,
                kt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                Ct = /[A-Z]/g;
                ot.extend({
                    hasData: function(t) {
                        return wt.hasData(t) || xt.hasData(t)
                    },
                    data: function(t, e, i) {
                        return wt.access(t, e, i)
                    },
                    removeData: function(t, e) {
                        wt.remove(t, e)
                    },
                    _data: function(t, e, i) {
                        return xt.access(t, e, i)
                    },
                    _removeData: function(t, e) {
                        xt.remove(t, e)
                    }
                }), ot.fn.extend({
                    data: function(t, e) {
                        var i, s, n, o = this[0],
                        a = o && o.attributes;
                        if (void 0 === t) {
                            if (this.length && (n = wt.get(o), 1 === o.nodeType && !xt.get(o, "hasDataAttrs"))) {
                                for (i = a.length; i--;) a[i] && (s = a[i].name, 0 === s.indexOf("data-") && (s = ot.camelCase(s.slice(5)), l(o, s, n[s])));
                                    xt.set(o, "hasDataAttrs", !0)
                            }
                            return n
                        }
                        return "object" == typeof t ? this.each(function() {
                            wt.set(this, t)
                        }) : bt(this, function(e) {
                            var i, s;
                            if (o && void 0 === e) {
                                if (void 0 !== (i = wt.get(o, t) || wt.get(o, t.replace(Ct, "-$&").toLowerCase()))) return i;
                                if (s = ot.camelCase(t), void 0 !== (i = wt.get(o, s))) return i;
                                if (void 0 !== (i = l(o, s, void 0))) return i
                            } else s = ot.camelCase(t), this.each(function() {
                                var i = wt.get(this, s);
                                wt.set(this, s, e), t.indexOf("-") > -1 && void 0 !== i && wt.set(this, t, e)
                            })
                    }, null, e, arguments.length > 1, null, !0)
                    },
                    removeData: function(t) {
                        return this.each(function() {
                            wt.remove(this, t)
                        })
                    }
                }), ot.extend({
                    queue: function(t, e, i) {
                        var s;
                        return t ? (e = (e || "fx") + "queue", s = xt.get(t, e), i && (!s || ot.isArray(i) ? s = xt.access(t, e, ot.makeArray(i)) : s.push(i)), s || []) : void 0
                    },
                    dequeue: function(t, e) {
                        e = e || "fx";
                        var i = ot.queue(t, e),
                        s = i.length,
                        n = i.shift(),
                        o = ot._queueHooks(t, e),
                        a = function() {
                            ot.dequeue(t, e)
                        };
                        "inprogress" === n && (n = i.shift(), s--), n && ("fx" === e && i.unshift("inprogress"), delete o.stop, n.call(t, a, o)), !s && o && o.empty.fire()
                    },
                    _queueHooks: function(t, e) {
                        var i = e + "queueHooks";
                        return xt.get(t, i) || xt.access(t, i, {
                            empty: ot.Callbacks("once memory").add(function() {
                                xt.remove(t, [e + "queue", i])
                            })
                        })
                    }
                }), ot.fn.extend({
                    queue: function(t, e) {
                        var i = 2;
                        return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? ot.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                            var i = ot.queue(this, t, e);
                            ot._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && ot.dequeue(this, t)
                        })
                    },
                    dequeue: function(t) {
                        return this.each(function() {
                            ot.dequeue(this, t)
                        })
                    },
                    clearQueue: function(t) {
                        return this.queue(t || "fx", [])
                    },
                    promise: function(t, e) {
                        var i, s = 1,
                        n = ot.Deferred(),
                        o = this,
                        a = this.length,
                        r = function() {
                            --s || n.resolveWith(o, [o])
                        };
                        for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;)(i = xt.get(o[a], t + "queueHooks")) && i.empty && (s++, i.empty.add(r));
                            return r(), n.promise(e)
                    }
                });
                var Dt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                Tt = new RegExp("^(?:([+-])=|)(" + Dt + ")([a-z%]*)$", "i"),
                It = ["Top", "Right", "Bottom", "Left"],
                St = function(t, e) {
                    return t = e || t, "none" === ot.css(t, "display") || !ot.contains(t.ownerDocument, t)
                },
                Pt = /^(?:checkbox|radio)$/i,
                Mt = /<([\w:-]+)/,
                At = /^$|\/(?:java|ecma)script/i,
                Ot = {
                    option: [1, "<select multiple='multiple'>", "</select>"],
                    thead: [1, "<table>", "</table>"],
                    col: [2, "<table><colgroup>", "</colgroup></table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: [0, "", ""]
                };
                Ot.optgroup = Ot.option, Ot.tbody = Ot.tfoot = Ot.colgroup = Ot.caption = Ot.thead, Ot.th = Ot.td;
                var Nt = /<|&#?\w+;/;
                ! function() {
                    var t = X.createDocumentFragment(),
                    e = t.appendChild(X.createElement("div")),
                    i = X.createElement("input");
                    i.setAttribute("type", "radio"), i.setAttribute("checked", "checked"), i.setAttribute("name", "t"), e.appendChild(i), st.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", st.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
                }();
                var Ht = /^key/,
                Et = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                Lt = /^([^.]*)(?:\.(.+)|)/;
                ot.event = {
                    global: {},
                    add: function(t, e, i, s, n) {
                        var o, a, r, l, h, c, u, d, p, f, g, m = xt.get(t);
                        if (m)
                            for (i.handler && (o = i, i = o.handler, n = o.selector), i.guid || (i.guid = ot.guid++), (l = m.events) || (l = m.events = {}), (a = m.handle) || (a = m.handle = function(e) {
                                return void 0 !== ot && ot.event.triggered !== e.type ? ot.event.dispatch.apply(t, arguments) : void 0
                            }), e = (e || "").match(vt) || [""], h = e.length; h--;) r = Lt.exec(e[h]) || [], p = g = r[1], f = (r[2] || "").split(".").sort(), p && (u = ot.event.special[p] || {}, p = (n ? u.delegateType : u.bindType) || p, u = ot.event.special[p] || {}, c = ot.extend({
                                type: p,
                                origType: g,
                                data: s,
                                handler: i,
                                guid: i.guid,
                                selector: n,
                                needsContext: n && ot.expr.match.needsContext.test(n),
                                namespace: f.join(".")
                            }, o), (d = l[p]) || (d = l[p] = [], d.delegateCount = 0, u.setup && !1 !== u.setup.call(t, s, f, a) || t.addEventListener && t.addEventListener(p, a)), u.add && (u.add.call(t, c), c.handler.guid || (c.handler.guid = i.guid)), n ? d.splice(d.delegateCount++, 0, c) : d.push(c), ot.event.global[p] = !0)
                        },
                        remove: function(t, e, i, s, n) {
                            var o, a, r, l, h, c, u, d, p, f, g, m = xt.hasData(t) && xt.get(t);
                            if (m && (l = m.events)) {
                                for (e = (e || "").match(vt) || [""], h = e.length; h--;)
                                    if (r = Lt.exec(e[h]) || [], p = g = r[1], f = (r[2] || "").split(".").sort(), p) {
                                        for (u = ot.event.special[p] || {}, p = (s ? u.delegateType : u.bindType) || p, d = l[p] || [], r = r[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = d.length; o--;) c = d[o], !n && g !== c.origType || i && i.guid !== c.guid || r && !r.test(c.namespace) || s && s !== c.selector && ("**" !== s || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, u.remove && u.remove.call(t, c));
                                            a && !d.length && (u.teardown && !1 !== u.teardown.call(t, f, m.handle) || ot.removeEvent(t, p, m.handle), delete l[p])
                                    } else
                                    for (p in l) ot.event.remove(t, p + e[h], i, s, !0);
                                        ot.isEmptyObject(l) && xt.remove(t, "handle events")
                                }
                            },
                            dispatch: function(t) {
                                t = ot.event.fix(t);
                                var e, i, s, n, o, a = [],
                                r = G.call(arguments),
                                l = (xt.get(this, "events") || {})[t.type] || [],
                                h = ot.event.special[t.type] || {};
                                if (r[0] = t, t.delegateTarget = this, !h.preDispatch || !1 !== h.preDispatch.call(this, t)) {
                                    for (a = ot.event.handlers.call(this, t, l), e = 0;
                                        (n = a[e++]) && !t.isPropagationStopped();)
                                        for (t.currentTarget = n.elem, i = 0;
                                            (o = n.handlers[i++]) && !t.isImmediatePropagationStopped();)(!t.rnamespace || t.rnamespace.test(o.namespace)) && (t.handleObj = o, t.data = o.data, void 0 !== (s = ((ot.event.special[o.origType] || {}).handle || o.handler).apply(n.elem, r)) && !1 === (t.result = s) && (t.preventDefault(), t.stopPropagation()));
                                            return h.postDispatch && h.postDispatch.call(this, t), t.result
                                        }
                                    },
                                    handlers: function(t, e) {
                                        var i, s, n, o, a = [],
                                        r = e.delegateCount,
                                        l = t.target;
                                        if (r && l.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))
                                            for (; l !== this; l = l.parentNode || this)
                                                if (1 === l.nodeType && (!0 !== l.disabled || "click" !== t.type)) {
                                                    for (s = [], i = 0; r > i; i++) o = e[i], n = o.selector + " ", void 0 === s[n] && (s[n] = o.needsContext ? ot(n, this).index(l) > -1 : ot.find(n, this, null, [l]).length), s[n] && s.push(o);
                                                        s.length && a.push({
                                                            elem: l,
                                                            handlers: s
                                                        })
                                                }
                                                return r < e.length && a.push({
                                                    elem: this,
                                                    handlers: e.slice(r)
                                                }), a
                                            },
                                            props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                                            fixHooks: {},
                                            keyHooks: {
                                                props: "char charCode key keyCode".split(" "),
                                                filter: function(t, e) {
                                                    return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                                                }
                                            },
                                            mouseHooks: {
                                                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                                                filter: function(t, e) {
                                                    var i, s, n, o = e.button;
                                                    return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || X, s = i.documentElement, n = i.body, t.pageX = e.clientX + (s && s.scrollLeft || n && n.scrollLeft || 0) - (s && s.clientLeft || n && n.clientLeft || 0), t.pageY = e.clientY + (s && s.scrollTop || n && n.scrollTop || 0) - (s && s.clientTop || n && n.clientTop || 0)), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
                                                }
                                            },
                                            fix: function(t) {
                                                if (t[ot.expando]) return t;
                                                var e, i, s, n = t.type,
                                                o = t,
                                                a = this.fixHooks[n];
                                                for (a || (this.fixHooks[n] = a = Et.test(n) ? this.mouseHooks : Ht.test(n) ? this.keyHooks : {}), s = a.props ? this.props.concat(a.props) : this.props, t = new ot.Event(o), e = s.length; e--;) i = s[e], t[i] = o[i];
                                                    return t.target || (t.target = X), 3 === t.target.nodeType && (t.target = t.target.parentNode), a.filter ? a.filter(t, o) : t
                                            },
                                            special: {
                                                load: {
                                                    noBubble: !0
                                                },
                                                focus: {
                                                    trigger: function() {
                                                        return this !== g() && this.focus ? (this.focus(), !1) : void 0
                                                    },
                                                    delegateType: "focusin"
                                                },
                                                blur: {
                                                    trigger: function() {
                                                        return this === g() && this.blur ? (this.blur(), !1) : void 0
                                                    },
                                                    delegateType: "focusout"
                                                },
                                                click: {
                                                    trigger: function() {
                                                        return "checkbox" === this.type && this.click && ot.nodeName(this, "input") ? (this.click(), !1) : void 0
                                                    },
                                                    _default: function(t) {
                                                        return ot.nodeName(t.target, "a")
                                                    }
                                                },
                                                beforeunload: {
                                                    postDispatch: function(t) {
                                                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                                                    }
                                                }
                                            }
                                        }, ot.removeEvent = function(t, e, i) {
                                            t.removeEventListener && t.removeEventListener(e, i)
                                        }, ot.Event = function(t, e) {
                                            return this instanceof ot.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? p : f) : this.type = t, e && ot.extend(this, e), this.timeStamp = t && t.timeStamp || ot.now(), void(this[ot.expando] = !0)) : new ot.Event(t, e)
                                        }, ot.Event.prototype = {
                                            constructor: ot.Event,
                                            isDefaultPrevented: f,
                                            isPropagationStopped: f,
                                            isImmediatePropagationStopped: f,
                                            preventDefault: function() {
                                                var t = this.originalEvent;
                                                this.isDefaultPrevented = p, t && t.preventDefault()
                                            },
                                            stopPropagation: function() {
                                                var t = this.originalEvent;
                                                this.isPropagationStopped = p, t && t.stopPropagation()
                                            },
                                            stopImmediatePropagation: function() {
                                                var t = this.originalEvent;
                                                this.isImmediatePropagationStopped = p, t && t.stopImmediatePropagation(), this.stopPropagation()
                                            }
                                        }, ot.each({
                                            mouseenter: "mouseover",
                                            mouseleave: "mouseout",
                                            pointerenter: "pointerover",
                                            pointerleave: "pointerout"
                                        }, function(t, e) {
                                            ot.event.special[t] = {
                                                delegateType: e,
                                                bindType: e,
                                                handle: function(t) {
                                                    var i, s = this,
                                                    n = t.relatedTarget,
                                                    o = t.handleObj;
                                                    return (!n || n !== s && !ot.contains(s, n)) && (t.type = o.origType, i = o.handler.apply(this, arguments), t.type = e), i
                                                }
                                            }
                                        }), ot.fn.extend({
                                            on: function(t, e, i, s) {
                                                return m(this, t, e, i, s)
                                            },
                                            one: function(t, e, i, s) {
                                                return m(this, t, e, i, s, 1)
                                            },
                                            off: function(t, e, i) {
                                                var s, n;
                                                if (t && t.preventDefault && t.handleObj) return s = t.handleObj, ot(t.delegateTarget).off(s.namespace ? s.origType + "." + s.namespace : s.origType, s.selector, s.handler), this;
                                                if ("object" == typeof t) {
                                                    for (n in t) this.off(n, e, t[n]);
                                                        return this
                                                }
                                                return (!1 === e || "function" == typeof e) && (i = e, e = void 0), !1 === i && (i = f), this.each(function() {
                                                    ot.event.remove(this, t, i, e)
                                                })
                                            }
                                        });
                                        var Wt = /<script|<style|<link/i,
                                        zt = /checked\s*(?:[^=]|=\s*.checked.)/i,
                                        Ft = /^true\/(.*)/,
                                        jt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
                                        ot.extend({
                                            htmlPrefilter: function(t) {
                                                return t.replace(/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, "<$1></$2>")
                                            },
                                            clone: function(t, e, i) {
                                                var s, n, o, a, r = t.cloneNode(!0),
                                                l = ot.contains(t.ownerDocument, t);
                                                if (!(st.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ot.isXMLDoc(t)))
                                                    for (a = c(r), o = c(t), s = 0, n = o.length; n > s; s++) x(o[s], a[s]);
                                                        if (e)
                                                            if (i)
                                                                for (o = o || c(t), a = a || c(r), s = 0, n = o.length; n > s; s++) y(o[s], a[s]);
                                                                    else y(t, r);
                                                                return a = c(r, "script"), a.length > 0 && u(a, !l && c(t, "script")), r
                                                            },
                                                            cleanData: function(t) {
                                                                for (var e, i, s, n = ot.event.special, o = 0; void 0 !== (i = t[o]); o++)
                                                                    if (yt(i)) {
                                                                        if (e = i[xt.expando]) {
                                                                            if (e.events)
                                                                                for (s in e.events) n[s] ? ot.event.remove(i, s) : ot.removeEvent(i, s, e.handle);
                                                                                    i[xt.expando] = void 0
                                                                            }
                                                                            i[wt.expando] && (i[wt.expando] = void 0)
                                                                        }
                                                                    }
                                                                }), ot.fn.extend({
                                                                    domManip: w,
                                                                    detach: function(t) {
                                                                        return k(this, t, !0)
                                                                    },
                                                                    remove: function(t) {
                                                                        return k(this, t)
                                                                    },
                                                                    text: function(t) {
                                                                        return bt(this, function(t) {
                                                                            return void 0 === t ? ot.text(this) : this.empty().each(function() {
                                                                                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = t)
                                                                            })
                                                                        }, null, t, arguments.length)
                                                                    },
                                                                    append: function() {
                                                                        return w(this, arguments, function(t) {
                                                                            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                                                                v(this, t).appendChild(t)
                                                                            }
                                                                        })
                                                                    },
                                                                    prepend: function() {
                                                                        return w(this, arguments, function(t) {
                                                                            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                                                                var e = v(this, t);
                                                                                e.insertBefore(t, e.firstChild)
                                                                            }
                                                                        })
                                                                    },
                                                                    before: function() {
                                                                        return w(this, arguments, function(t) {
                                                                            this.parentNode && this.parentNode.insertBefore(t, this)
                                                                        })
                                                                    },
                                                                    after: function() {
                                                                        return w(this, arguments, function(t) {
                                                                            this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                                                                        })
                                                                    },
                                                                    empty: function() {
                                                                        for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (ot.cleanData(c(t, !1)), t.textContent = "");
                                                                            return this
                                                                    },
                                                                    clone: function(t, e) {
                                                                        return t = null != t && t, e = null == e ? t : e, this.map(function() {
                                                                            return ot.clone(this, t, e)
                                                                        })
                                                                    },
                                                                    html: function(t) {
                                                                        return bt(this, function(t) {
                                                                            var e = this[0] || {},
                                                                            i = 0,
                                                                            s = this.length;
                                                                            if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                                                                            if ("string" == typeof t && !Wt.test(t) && !Ot[(Mt.exec(t) || ["", ""])[1].toLowerCase()]) {
                                                                                t = ot.htmlPrefilter(t);
                                                                                try {
                                                                                    for (; s > i; i++) e = this[i] || {}, 1 === e.nodeType && (ot.cleanData(c(e, !1)), e.innerHTML = t);
                                                                                        e = 0
                                                                                } catch (t) {}
                                                                            }
                                                                            e && this.empty().append(t)
                                                                        }, null, t, arguments.length)
                                                                    },
                                                                    replaceWith: function() {
                                                                        var t = [];
                                                                        return w(this, arguments, function(e) {
                                                                            var i = this.parentNode;
                                                                            ot.inArray(this, t) < 0 && (ot.cleanData(c(this)), i && i.replaceChild(e, this))
                                                                        }, t)
                                                                    }
                                                                }), ot.each({
                                                                    appendTo: "append",
                                                                    prependTo: "prepend",
                                                                    insertBefore: "before",
                                                                    insertAfter: "after",
                                                                    replaceAll: "replaceWith"
                                                                }, function(t, e) {
                                                                    ot.fn[t] = function(t) {
                                                                        for (var i, s = [], n = ot(t), o = n.length - 1, a = 0; o >= a; a++) i = a === o ? this : this.clone(!0), ot(n[a])[e](i), J.apply(s, i.get());
                                                                            return this.pushStack(s)
                                                                    }
                                                                });
                                                                var Rt, qt = {
                                                                    HTML: "block",
                                                                    BODY: "block"
                                                                },
                                                                Bt = /^margin/,
                                                                $t = new RegExp("^(" + Dt + ")(?!px)[a-z%]+$", "i"),
                                                                Yt = function(e) {
                                                                    var i = e.ownerDocument.defaultView;
                                                                    return i && i.opener || (i = t), i.getComputedStyle(e)
                                                                },
                                                                Ut = function(t, e, i, s) {
                                                                    var n, o, a = {};
                                                                    for (o in e) a[o] = t.style[o], t.style[o] = e[o];
                                                                        n = i.apply(t, s || []);
                                                                    for (o in e) t.style[o] = a[o];
                                                                        return n
                                                                },
                                                                Kt = X.documentElement;
                                                                ! function() {
                                                                    function e() {
                                                                        r.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", r.innerHTML = "", Kt.appendChild(a);
                                                                        var e = t.getComputedStyle(r);
                                                                        i = "1%" !== e.top, o = "2px" === e.marginLeft, s = "4px" === e.width, r.style.marginRight = "50%", n = "4px" === e.marginRight, Kt.removeChild(a)
                                                                    }
                                                                    var i, s, n, o, a = X.createElement("div"),
                                                                    r = X.createElement("div");
                                                                    r.style && (r.style.backgroundClip = "content-box", r.cloneNode(!0).style.backgroundClip = "", st.clearCloneStyle = "content-box" === r.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", a.appendChild(r), ot.extend(st, {
                                                                        pixelPosition: function() {
                                                                            return e(), i
                                                                        },
                                                                        boxSizingReliable: function() {
                                                                            return null == s && e(), s
                                                                        },
                                                                        pixelMarginRight: function() {
                                                                            return null == s && e(), n
                                                                        },
                                                                        reliableMarginLeft: function() {
                                                                            return null == s && e(), o
                                                                        },
                                                                        reliableMarginRight: function() {
                                                                            var e, i = r.appendChild(X.createElement("div"));
                                                                            return i.style.cssText = r.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", r.style.width = "1px", Kt.appendChild(a), e = !parseFloat(t.getComputedStyle(i).marginRight), Kt.removeChild(a), r.removeChild(i), e
                                                                        }
                                                                    }))
                                                                }();
                                                                var Vt = /^(none|table(?!-c[ea]).+)/,
                                                                Xt = {
                                                                    position: "absolute",
                                                                    visibility: "hidden",
                                                                    display: "block"
                                                                },
                                                                Gt = {
                                                                    letterSpacing: "0",
                                                                    fontWeight: "400"
                                                                },
                                                                Qt = ["Webkit", "O", "Moz", "ms"],
                                                                Jt = X.createElement("div").style;
                                                                ot.extend({
                                                                    cssHooks: {
                                                                        opacity: {
                                                                            get: function(t, e) {
                                                                                if (e) {
                                                                                    var i = T(t, "opacity");
                                                                                    return "" === i ? "1" : i
                                                                                }
                                                                            }
                                                                        }
                                                                    },
                                                                    cssNumber: {
                                                                        animationIterationCount: !0,
                                                                        columnCount: !0,
                                                                        fillOpacity: !0,
                                                                        flexGrow: !0,
                                                                        flexShrink: !0,
                                                                        fontWeight: !0,
                                                                        lineHeight: !0,
                                                                        opacity: !0,
                                                                        order: !0,
                                                                        orphans: !0,
                                                                        widows: !0,
                                                                        zIndex: !0,
                                                                        zoom: !0
                                                                    },
                                                                    cssProps: {
                                                                        float: "cssFloat"
                                                                    },
                                                                    style: function(t, e, i, s) {
                                                                        if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                                                                            var n, o, a, r = ot.camelCase(e),
                                                                            l = t.style;
                                                                            return e = ot.cssProps[r] || (ot.cssProps[r] = S(r) || r), a = ot.cssHooks[e] || ot.cssHooks[r], void 0 === i ? a && "get" in a && void 0 !== (n = a.get(t, !1, s)) ? n : l[e] : (o = typeof i, "string" === o && (n = Tt.exec(i)) && n[1] && (i = h(t, e, n), o = "number"), void(null != i && i === i && ("number" === o && (i += n && n[3] || (ot.cssNumber[r] ? "" : "px")), st.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), a && "set" in a && void 0 === (i = a.set(t, i, s)) || (l[e] = i))))
                                                                        }
                                                                    },
                                                                    css: function(t, e, i, s) {
                                                                        var n, o, a, r = ot.camelCase(e);
                                                                        return e = ot.cssProps[r] || (ot.cssProps[r] = S(r) || r), a = ot.cssHooks[e] || ot.cssHooks[r], a && "get" in a && (n = a.get(t, !0, i)), void 0 === n && (n = T(t, e, s)), "normal" === n && e in Gt && (n = Gt[e]), "" === i || i ? (o = parseFloat(n), !0 === i || isFinite(o) ? o || 0 : n) : n
                                                                    }
                                                                }), ot.each(["height", "width"], function(t, e) {
                                                                    ot.cssHooks[e] = {
                                                                        get: function(t, i, s) {
                                                                            return i ? Vt.test(ot.css(t, "display")) && 0 === t.offsetWidth ? Ut(t, Xt, function() {
                                                                                return A(t, e, s)
                                                                            }) : A(t, e, s) : void 0
                                                                        },
                                                                        set: function(t, i, s) {
                                                                            var n, o = s && Yt(t),
                                                                            a = s && M(t, e, s, "border-box" === ot.css(t, "boxSizing", !1, o), o);
                                                                            return a && (n = Tt.exec(i)) && "px" !== (n[3] || "px") && (t.style[e] = i, i = ot.css(t, e)), P(t, i, a)
                                                                        }
                                                                    }
                                                                }), ot.cssHooks.marginLeft = I(st.reliableMarginLeft, function(t, e) {
                                                                    return e ? (parseFloat(T(t, "marginLeft")) || t.getBoundingClientRect().left - Ut(t, {
                                                                        marginLeft: 0
                                                                    }, function() {
                                                                        return t.getBoundingClientRect().left
                                                                    })) + "px" : void 0
                                                                }), ot.cssHooks.marginRight = I(st.reliableMarginRight, function(t, e) {
                                                                    return e ? Ut(t, {
                                                                        display: "inline-block"
                                                                    }, T, [t, "marginRight"]) : void 0
                                                                }), ot.each({
                                                                    margin: "",
                                                                    padding: "",
                                                                    border: "Width"
                                                                }, function(t, e) {
                                                                    ot.cssHooks[t + e] = {
                                                                        expand: function(i) {
                                                                            for (var s = 0, n = {}, o = "string" == typeof i ? i.split(" ") : [i]; 4 > s; s++) n[t + It[s] + e] = o[s] || o[s - 2] || o[0];
                                                                                return n
                                                                        }
                                                                    }, Bt.test(t) || (ot.cssHooks[t + e].set = P)
                                                                }), ot.fn.extend({
                                                                    css: function(t, e) {
                                                                        return bt(this, function(t, e, i) {
                                                                            var s, n, o = {},
                                                                            a = 0;
                                                                            if (ot.isArray(e)) {
                                                                                for (s = Yt(t), n = e.length; n > a; a++) o[e[a]] = ot.css(t, e[a], !1, s);
                                                                                    return o
                                                                            }
                                                                            return void 0 !== i ? ot.style(t, e, i) : ot.css(t, e)
                                                                        }, t, e, arguments.length > 1)
                                                                    },
                                                                    show: function() {
                                                                        return O(this, !0)
                                                                    },
                                                                    hide: function() {
                                                                        return O(this)
                                                                    },
                                                                    toggle: function(t) {
                                                                        return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                                                                            St(this) ? ot(this).show() : ot(this).hide()
                                                                        })
                                                                    }
                                                                }), ot.Tween = N, N.prototype = {
                                                                    constructor: N,
                                                                    init: function(t, e, i, s, n, o) {
                                                                        this.elem = t, this.prop = i, this.easing = n || ot.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = s, this.unit = o || (ot.cssNumber[i] ? "" : "px")
                                                                    },
                                                                    cur: function() {
                                                                        var t = N.propHooks[this.prop];
                                                                        return t && t.get ? t.get(this) : N.propHooks._default.get(this)
                                                                    },
                                                                    run: function(t) {
                                                                        var e, i = N.propHooks[this.prop];
                                                                        return this.options.duration ? this.pos = e = ot.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : N.propHooks._default.set(this), this
                                                                    }
                                                                }, N.prototype.init.prototype = N.prototype, N.propHooks = {
                                                                    _default: {
                                                                        get: function(t) {
                                                                            var e;
                                                                            return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = ot.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0)
                                                                        },
                                                                        set: function(t) {
                                                                            ot.fx.step[t.prop] ? ot.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[ot.cssProps[t.prop]] && !ot.cssHooks[t.prop] ? t.elem[t.prop] = t.now : ot.style(t.elem, t.prop, t.now + t.unit)
                                                                        }
                                                                    }
                                                                }, N.propHooks.scrollTop = N.propHooks.scrollLeft = {
                                                                    set: function(t) {
                                                                        t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
                                                                    }
                                                                }, ot.easing = {
                                                                    linear: function(t) {
                                                                        return t
                                                                    },
                                                                    swing: function(t) {
                                                                        return .5 - Math.cos(t * Math.PI) / 2
                                                                    },
                                                                    _default: "swing"
                                                                }, ot.fx = N.prototype.init, ot.fx.step = {};
                                                                var Zt, te, ee = /^(?:toggle|show|hide)$/,
                                                                ie = /queueHooks$/;
                                                                ot.Animation = ot.extend(F, {
                                                                    tweeners: {
                                                                        "*": [function(t, e) {
                                                                            var i = this.createTween(t, e);
                                                                            return h(i.elem, t, Tt.exec(e), i), i
                                                                        }]
                                                                    },
                                                                    tweener: function(t, e) {
                                                                        ot.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(vt);
                                                                        for (var i, s = 0, n = t.length; n > s; s++) i = t[s], F.tweeners[i] = F.tweeners[i] || [], F.tweeners[i].unshift(e)
                                                                    },
                                                                prefilters: [W],
                                                                prefilter: function(t, e) {
                                                                    e ? F.prefilters.unshift(t) : F.prefilters.push(t)
                                                                }
                                                            }), ot.speed = function(t, e, i) {
                                                                    var s = t && "object" == typeof t ? ot.extend({}, t) : {
                                                                        complete: i || !i && e || ot.isFunction(t) && t,
                                                                        duration: t,
                                                                        easing: i && e || e && !ot.isFunction(e) && e
                                                                    };
                                                                    return s.duration = ot.fx.off ? 0 : "number" == typeof s.duration ? s.duration : s.duration in ot.fx.speeds ? ot.fx.speeds[s.duration] : ot.fx.speeds._default, (null == s.queue || !0 === s.queue) && (s.queue = "fx"), s.old = s.complete, s.complete = function() {
                                                                        ot.isFunction(s.old) && s.old.call(this), s.queue && ot.dequeue(this, s.queue)
                                                                    }, s
                                                                }, ot.fn.extend({
                                                                    fadeTo: function(t, e, i, s) {
                                                                        return this.filter(St).css("opacity", 0).show().end().animate({
                                                                            opacity: e
                                                                        }, t, i, s)
                                                                    },
                                                                    animate: function(t, e, i, s) {
                                                                        var n = ot.isEmptyObject(t),
                                                                        o = ot.speed(e, i, s),
                                                                        a = function() {
                                                                            var e = F(this, ot.extend({}, t), o);
                                                                            (n || xt.get(this, "finish")) && e.stop(!0)
                                                                        };
                                                                        return a.finish = a, n || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
                                                                    },
                                                                    stop: function(t, e, i) {
                                                                        var s = function(t) {
                                                                            var e = t.stop;
                                                                            delete t.stop, e(i)
                                                                        };
                                                                        return "string" != typeof t && (i = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each(function() {
                                                                            var e = !0,
                                                                            n = null != t && t + "queueHooks",
                                                                            o = ot.timers,
                                                                            a = xt.get(this);
                                                                            if (n) a[n] && a[n].stop && s(a[n]);
                                                                            else
                                                                                for (n in a) a[n] && a[n].stop && ie.test(n) && s(a[n]);
                                                                                    for (n = o.length; n--;) o[n].elem !== this || null != t && o[n].queue !== t || (o[n].anim.stop(i), e = !1, o.splice(n, 1));
                                                                                        (e || !i) && ot.dequeue(this, t)
                                                                                })
                                                                    },
                                                                    finish: function(t) {
                                                                        return !1 !== t && (t = t || "fx"), this.each(function() {
                                                                            var e, i = xt.get(this),
                                                                            s = i[t + "queue"],
                                                                            n = i[t + "queueHooks"],
                                                                            o = ot.timers,
                                                                            a = s ? s.length : 0;
                                                                            for (i.finish = !0, ot.queue(this, t, []), n && n.stop && n.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                                                                                for (e = 0; a > e; e++) s[e] && s[e].finish && s[e].finish.call(this);
                                                                                    delete i.finish
                                                                            })
                                                                    }
                                                                }), ot.each(["toggle", "show", "hide"], function(t, e) {
                                                                    var i = ot.fn[e];
                                                                    ot.fn[e] = function(t, s, n) {
                                                                        return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(E(e, !0), t, s, n)
                                                                    }
                                                                }), ot.each({
                                                                    slideDown: E("show"),
                                                                    slideUp: E("hide"),
                                                                    slideToggle: E("toggle"),
                                                                    fadeIn: {
                                                                        opacity: "show"
                                                                    },
                                                                    fadeOut: {
                                                                        opacity: "hide"
                                                                    },
                                                                    fadeToggle: {
                                                                        opacity: "toggle"
                                                                    }
                                                                }, function(t, e) {
                                                                    ot.fn[t] = function(t, i, s) {
                                                                        return this.animate(e, t, i, s)
                                                                    }
                                                                }), ot.timers = [], ot.fx.tick = function() {
                                                                    var t, e = 0,
                                                                    i = ot.timers;
                                                                    for (Zt = ot.now(); e < i.length; e++)(t = i[e])() || i[e] !== t || i.splice(e--, 1);
                                                                        i.length || ot.fx.stop(), Zt = void 0
                                                                }, ot.fx.timer = function(t) {
                                                                    ot.timers.push(t), t() ? ot.fx.start() : ot.timers.pop()
                                                                }, ot.fx.interval = 13, ot.fx.start = function() {
                                                                    te || (te = t.setInterval(ot.fx.tick, ot.fx.interval))
                                                                }, ot.fx.stop = function() {
                                                                    t.clearInterval(te), te = null
                                                                }, ot.fx.speeds = {
                                                                    slow: 600,
                                                                    fast: 200,
                                                                    _default: 400
                                                                }, ot.fn.delay = function(e, i) {
                                                                    return e = ot.fx ? ot.fx.speeds[e] || e : e, i = i || "fx", this.queue(i, function(i, s) {
                                                                        var n = t.setTimeout(i, e);
                                                                        s.stop = function() {
                                                                            t.clearTimeout(n)
                                                                        }
                                                                    })
                                                                },
                                                                function() {
                                                                    var t = X.createElement("input"),
                                                                    e = X.createElement("select"),
                                                                    i = e.appendChild(X.createElement("option"));
                                                                    t.type = "checkbox", st.checkOn = "" !== t.value, st.optSelected = i.selected, e.disabled = !0, st.optDisabled = !i.disabled, t = X.createElement("input"), t.value = "t", t.type = "radio", st.radioValue = "t" === t.value
                                                                }();
                                                                var se, ne = ot.expr.attrHandle;
                                                                ot.fn.extend({
                                                                    attr: function(t, e) {
                                                                        return bt(this, ot.attr, t, e, arguments.length > 1)
                                                                    },
                                                                    removeAttr: function(t) {
                                                                        return this.each(function() {
                                                                            ot.removeAttr(this, t)
                                                                        })
                                                                    }
                                                                }), ot.extend({
                                                                    attr: function(t, e, i) {
                                                                        var s, n, o = t.nodeType;
                                                                        if (3 !== o && 8 !== o && 2 !== o) return void 0 === t.getAttribute ? ot.prop(t, e, i) : (1 === o && ot.isXMLDoc(t) || (e = e.toLowerCase(), n = ot.attrHooks[e] || (ot.expr.match.bool.test(e) ? se : void 0)), void 0 !== i ? null === i ? void ot.removeAttr(t, e) : n && "set" in n && void 0 !== (s = n.set(t, i, e)) ? s : (t.setAttribute(e, i + ""), i) : n && "get" in n && null !== (s = n.get(t, e)) ? s : (s = ot.find.attr(t, e), null == s ? void 0 : s))
                                                                    },
                                                                attrHooks: {
                                                                    type: {
                                                                        set: function(t, e) {
                                                                            if (!st.radioValue && "radio" === e && ot.nodeName(t, "input")) {
                                                                                var i = t.value;
                                                                                return t.setAttribute("type", e), i && (t.value = i), e
                                                                            }
                                                                        }
                                                                    }
                                                                },
                                                                removeAttr: function(t, e) {
                                                                    var i, s, n = 0,
                                                                    o = e && e.match(vt);
                                                                    if (o && 1 === t.nodeType)
                                                                        for (; i = o[n++];) s = ot.propFix[i] || i, ot.expr.match.bool.test(i) && (t[s] = !1), t.removeAttribute(i)
                                                                    }
                                                            }), se = {
                                                                    set: function(t, e, i) {
                                                                        return !1 === e ? ot.removeAttr(t, i) : t.setAttribute(i, i), i
                                                                    }
                                                                }, ot.each(ot.expr.match.bool.source.match(/\w+/g), function(t, e) {
                                                                    var i = ne[e] || ot.find.attr;
                                                                    ne[e] = function(t, e, s) {
                                                                        var n, o;
                                                                        return s || (o = ne[e], ne[e] = n, n = null != i(t, e, s) ? e.toLowerCase() : null, ne[e] = o), n
                                                                    }
                                                                });
                                                                var oe = /^(?:input|select|textarea|button)$/i,
                                                                ae = /^(?:a|area)$/i;
                                                                ot.fn.extend({
                                                                    prop: function(t, e) {
                                                                        return bt(this, ot.prop, t, e, arguments.length > 1)
                                                                    },
                                                                    removeProp: function(t) {
                                                                        return this.each(function() {
                                                                            delete this[ot.propFix[t] || t]
                                                                        })
                                                                    }
                                                                }), ot.extend({
                                                                    prop: function(t, e, i) {
                                                                        var s, n, o = t.nodeType;
                                                                        if (3 !== o && 8 !== o && 2 !== o) return 1 === o && ot.isXMLDoc(t) || (e = ot.propFix[e] || e, n = ot.propHooks[e]), void 0 !== i ? n && "set" in n && void 0 !== (s = n.set(t, i, e)) ? s : t[e] = i : n && "get" in n && null !== (s = n.get(t, e)) ? s : t[e]
                                                                    },
                                                                propHooks: {
                                                                    tabIndex: {
                                                                        get: function(t) {
                                                                            var e = ot.find.attr(t, "tabindex");
                                                                            return e ? parseInt(e, 10) : oe.test(t.nodeName) || ae.test(t.nodeName) && t.href ? 0 : -1
                                                                        }
                                                                    }
                                                                },
                                                                propFix: {
                                                                    for: "htmlFor",
                                                                        class: "className"
                                                                }
                                                            }), st.optSelected || (ot.propHooks.selected = {
                                                                get: function(t) {
                                                                    var e = t.parentNode;
                                                                    return e && e.parentNode && e.parentNode.selectedIndex, null
                                                                }
                                                            }), ot.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
                                                                ot.propFix[this.toLowerCase()] = this
                                                            });
                                                            var re = /[\t\r\n\f]/g;
                                                            ot.fn.extend({
                                                                addClass: function(t) {
                                                                    var e, i, s, n, o, a, r, l = 0;
                                                                    if (ot.isFunction(t)) return this.each(function(e) {
                                                                        ot(this).addClass(t.call(this, e, j(this)))
                                                                    });
                                                                        if ("string" == typeof t && t)
                                                                            for (e = t.match(vt) || []; i = this[l++];)
                                                                                if (n = j(i), s = 1 === i.nodeType && (" " + n + " ").replace(re, " ")) {
                                                                                    for (a = 0; o = e[a++];) s.indexOf(" " + o + " ") < 0 && (s += o + " ");
                                                                                        r = ot.trim(s), n !== r && i.setAttribute("class", r)
                                                                                }
                                                                                return this
                                                                            },
                                                                            removeClass: function(t) {
                                                                                var e, i, s, n, o, a, r, l = 0;
                                                                                if (ot.isFunction(t)) return this.each(function(e) {
                                                                                    ot(this).removeClass(t.call(this, e, j(this)))
                                                                                });
                                                                                    if (!arguments.length) return this.attr("class", "");
                                                                                    if ("string" == typeof t && t)
                                                                                        for (e = t.match(vt) || []; i = this[l++];)
                                                                                            if (n = j(i), s = 1 === i.nodeType && (" " + n + " ").replace(re, " ")) {
                                                                                                for (a = 0; o = e[a++];)
                                                                                                    for (; s.indexOf(" " + o + " ") > -1;) s = s.replace(" " + o + " ", " ");
                                                                                                        r = ot.trim(s), n !== r && i.setAttribute("class", r)
                                                                                                }
                                                                                                return this
                                                                                            },
                                                                                            toggleClass: function(t, e) {
                                                                                                var i = typeof t;
                                                                                                return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : ot.isFunction(t) ? this.each(function(i) {
                                                                                                    ot(this).toggleClass(t.call(this, i, j(this), e), e)
                                                                                                }) : this.each(function() {
                                                                                                    var e, s, n, o;
                                                                                                    if ("string" === i)
                                                                                                        for (s = 0, n = ot(this), o = t.match(vt) || []; e = o[s++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                                                                                                            else(void 0 === t || "boolean" === i) && (e = j(this), e && xt.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : xt.get(this, "__className__") || ""))
                                                                                                        })
                                                                                            },
                                                                                            hasClass: function(t) {
                                                                                                var e, i, s = 0;
                                                                                                for (e = " " + t + " "; i = this[s++];)
                                                                                                    if (1 === i.nodeType && (" " + j(i) + " ").replace(re, " ").indexOf(e) > -1) return !0;
                                                                                                return !1
                                                                                            }
                                                                                        });
ot.fn.extend({
    val: function(t) {
        var e, i, s, n = this[0];
        return arguments.length ? (s = ot.isFunction(t), this.each(function(i) {
            var n;
            1 === this.nodeType && (n = s ? t.call(this, i, ot(this).val()) : t, null == n ? n = "" : "number" == typeof n ? n += "" : ot.isArray(n) && (n = ot.map(n, function(t) {
                return null == t ? "" : t + ""
            })), (e = ot.valHooks[this.type] || ot.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, n, "value") || (this.value = n))
        })) : n ? (e = ot.valHooks[n.type] || ot.valHooks[n.nodeName.toLowerCase()], e && "get" in e && void 0 !== (i = e.get(n, "value")) ? i : (i = n.value, "string" == typeof i ? i.replace(/\r/g, "") : null == i ? "" : i)) : void 0
    }
}), ot.extend({
    valHooks: {
        option: {
            get: function(t) {
                return ot.trim(t.value)
            }
        },
        select: {
            get: function(t) {
                for (var e, i, s = t.options, n = t.selectedIndex, o = "select-one" === t.type || 0 > n, a = o ? null : [], r = o ? n + 1 : s.length, l = 0 > n ? r : o ? n : 0; r > l; l++)
                    if (i = s[l], (i.selected || l === n) && (st.optDisabled ? !i.disabled : null === i.getAttribute("disabled")) && (!i.parentNode.disabled || !ot.nodeName(i.parentNode, "optgroup"))) {
                        if (e = ot(i).val(), o) return e;
                        a.push(e)
                    }
                    return a
                },
                set: function(t, e) {
                    for (var i, s, n = t.options, o = ot.makeArray(e), a = n.length; a--;) s = n[a], (s.selected = ot.inArray(ot.valHooks.option.get(s), o) > -1) && (i = !0);
                        return i || (t.selectedIndex = -1), o
                }
            }
        }
    }), ot.each(["radio", "checkbox"], function() {
        ot.valHooks[this] = {
            set: function(t, e) {
                return ot.isArray(e) ? t.checked = ot.inArray(ot(t).val(), e) > -1 : void 0
            }
        }, st.checkOn || (ot.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var le = /^(?:focusinfocus|focusoutblur)$/;
    ot.extend(ot.event, {
        trigger: function(e, i, s, n) {
            var o, a, r, l, h, c, u, d = [s || X],
            p = it.call(e, "type") ? e.type : e,
            f = it.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = r = s = s || X, 3 !== s.nodeType && 8 !== s.nodeType && !le.test(p + ot.event.triggered) && (p.indexOf(".") > -1 && (f = p.split("."), p = f.shift(), f.sort()), h = p.indexOf(":") < 0 && "on" + p, e = e[ot.expando] ? e : new ot.Event(p, "object" == typeof e && e), e.isTrigger = n ? 2 : 3, e.namespace = f.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = s), i = null == i ? [e] : ot.makeArray(i, [e]), u = ot.event.special[p] || {}, n || !u.trigger || !1 !== u.trigger.apply(s, i))) {
                if (!n && !u.noBubble && !ot.isWindow(s)) {
                    for (l = u.delegateType || p, le.test(l + p) || (a = a.parentNode); a; a = a.parentNode) d.push(a), r = a;
                        r === (s.ownerDocument || X) && d.push(r.defaultView || r.parentWindow || t)
                }
                for (o = 0;
                    (a = d[o++]) && !e.isPropagationStopped();) e.type = o > 1 ? l : u.bindType || p, c = (xt.get(a, "events") || {})[e.type] && xt.get(a, "handle"), c && c.apply(a, i), (c = h && a[h]) && c.apply && yt(a) && (e.result = c.apply(a, i), !1 === e.result && e.preventDefault());
                    return e.type = p, n || e.isDefaultPrevented() || u._default && !1 !== u._default.apply(d.pop(), i) || !yt(s) || h && ot.isFunction(s[p]) && !ot.isWindow(s) && (r = s[h], r && (s[h] = null), ot.event.triggered = p, s[p](), ot.event.triggered = void 0, r && (s[h] = r)), e.result
            }
        },
        simulate: function(t, e, i) {
            var s = ot.extend(new ot.Event, i, {
                type: t,
                isSimulated: !0
            });
            ot.event.trigger(s, null, e), s.isDefaultPrevented() && i.preventDefault()
        }
    }), ot.fn.extend({
        trigger: function(t, e) {
            return this.each(function() {
                ot.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var i = this[0];
            return i ? ot.event.trigger(t, e, i, !0) : void 0
        }
    }), ot.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
        ot.fn[e] = function(t, i) {
            return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
        }
    }), ot.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    }), st.focusin = "onfocusin" in t, st.focusin || ot.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var i = function(t) {
            ot.event.simulate(e, t.target, ot.event.fix(t))
        };
        ot.event.special[e] = {
            setup: function() {
                var s = this.ownerDocument || this,
                n = xt.access(s, e);
                n || s.addEventListener(t, i, !0), xt.access(s, e, (n || 0) + 1)
            },
            teardown: function() {
                var s = this.ownerDocument || this,
                n = xt.access(s, e) - 1;
                n ? xt.access(s, e, n) : (s.removeEventListener(t, i, !0), xt.remove(s, e))
            }
        }
    });
    var he = t.location,
    ce = ot.now(),
    ue = /\?/;
    ot.parseJSON = function(t) {
        return JSON.parse(t + "")
    }, ot.parseXML = function(e) {
        var i;
        if (!e || "string" != typeof e) return null;
        try {
            i = (new t.DOMParser).parseFromString(e, "text/xml")
        } catch (t) {
            i = void 0
        }
        return (!i || i.getElementsByTagName("parsererror").length) && ot.error("Invalid XML: " + e), i
    };
    var de = /([?&])_=[^&]*/,
    pe = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    fe = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    ge = /^(?:GET|HEAD)$/,
    me = {},
    ve = {},
    _e = "*/".concat("*"),
    be = X.createElement("a");
    be.href = he.href, ot.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: he.href,
            type: "GET",
            isLocal: fe.test(he.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": _e,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": ot.parseJSON,
                "text xml": ot.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? B(B(t, ot.ajaxSettings), e) : B(ot.ajaxSettings, t)
        },
        ajaxPrefilter: R(me),
        ajaxTransport: R(ve),
        ajax: function(e, i) {
            function s(e, i, s, r) {
                var h, u, _, b, x, k = i;
                2 !== y && (y = 2, l && t.clearTimeout(l), n = void 0, a = r || "", w.readyState = e > 0 ? 4 : 0, h = e >= 200 && 300 > e || 304 === e, s && (b = $(d, w, s)), b = Y(d, b, w, h), h ? (d.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (ot.lastModified[o] = x), (x = w.getResponseHeader("etag")) && (ot.etag[o] = x)), 204 === e || "HEAD" === d.type ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = b.state, u = b.data, _ = b.error, h = !_)) : (_ = k, (e || !k) && (k = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (i || k) + "", h ? g.resolveWith(p, [u, k, w]) : g.rejectWith(p, [w, k, _]), w.statusCode(v), v = void 0, c && f.trigger(h ? "ajaxSuccess" : "ajaxError", [w, d, h ? u : _]), m.fireWith(p, [w, k]), c && (f.trigger("ajaxComplete", [w, d]), --ot.active || ot.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (i = e, e = void 0), i = i || {};
            var n, o, a, r, l, h, c, u, d = ot.ajaxSetup({}, i),
            p = d.context || d,
            f = d.context && (p.nodeType || p.jquery) ? ot(p) : ot.event,
            g = ot.Deferred(),
            m = ot.Callbacks("once memory"),
            v = d.statusCode || {},
            _ = {},
            b = {},
            y = 0,
            x = "canceled",
            w = {
                readyState: 0,
                getResponseHeader: function(t) {
                    var e;
                    if (2 === y) {
                        if (!r)
                            for (r = {}; e = pe.exec(a);) r[e[1].toLowerCase()] = e[2];
                                e = r[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function() {
                        return 2 === y ? a : null
                    },
                    setRequestHeader: function(t, e) {
                        var i = t.toLowerCase();
                        return y || (t = b[i] = b[i] || t, _[t] = e), this
                    },
                    overrideMimeType: function(t) {
                        return y || (d.mimeType = t), this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (2 > y)
                                for (e in t) v[e] = [v[e], t[e]];
                                    else w.always(t[w.status]);
                                return this
                            },
                            abort: function(t) {
                                var e = t || x;
                                return n && n.abort(e), s(0, e), this
                            }
                        };
                        if (g.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, d.url = ((e || d.url || he.href) + "").replace(/#.*$/, "").replace(/^\/\//, he.protocol + "//"), d.type = i.method || i.type || d.method || d.type, d.dataTypes = ot.trim(d.dataType || "*").toLowerCase().match(vt) || [""], null == d.crossDomain) {
                            h = X.createElement("a");
                            try {
                                h.href = d.url, h.href = h.href, d.crossDomain = be.protocol + "//" + be.host != h.protocol + "//" + h.host
                            } catch (t) {
                                d.crossDomain = !0
                            }
                        }
                        if (d.data && d.processData && "string" != typeof d.data && (d.data = ot.param(d.data, d.traditional)), q(me, d, i, w), 2 === y) return w;
                        c = ot.event && d.global, c && 0 == ot.active++ && ot.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !ge.test(d.type), o = d.url, d.hasContent || (d.data && (o = d.url += (ue.test(o) ? "&" : "?") + d.data, delete d.data), !1 === d.cache && (d.url = de.test(o) ? o.replace(de, "$1_=" + ce++) : o + (ue.test(o) ? "&" : "?") + "_=" + ce++)), d.ifModified && (ot.lastModified[o] && w.setRequestHeader("If-Modified-Since", ot.lastModified[o]), ot.etag[o] && w.setRequestHeader("If-None-Match", ot.etag[o])), (d.data && d.hasContent && !1 !== d.contentType || i.contentType) && w.setRequestHeader("Content-Type", d.contentType), w.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + _e + "; q=0.01" : "") : d.accepts["*"]);
                        for (u in d.headers) w.setRequestHeader(u, d.headers[u]);
                            if (d.beforeSend && (!1 === d.beforeSend.call(p, w, d) || 2 === y)) return w.abort();
                        x = "abort";
                        for (u in {
                            success: 1,
                            error: 1,
                            complete: 1
                        }) w[u](d[u]);
                            if (n = q(ve, d, i, w)) {
                                if (w.readyState = 1, c && f.trigger("ajaxSend", [w, d]), 2 === y) return w;
                                d.async && d.timeout > 0 && (l = t.setTimeout(function() {
                                    w.abort("timeout")
                                }, d.timeout));
                                try {
                                    y = 1, n.send(_, s)
                                } catch (t) {
                                    if (!(2 > y)) throw t;
                                    s(-1, t)
                                }
                            } else s(-1, "No Transport");
                            return w
                        },
                        getJSON: function(t, e, i) {
                            return ot.get(t, e, i, "json")
                        },
                        getScript: function(t, e) {
                            return ot.get(t, void 0, e, "script")
                        }
                    }), ot.each(["get", "post"], function(t, e) {
                        ot[e] = function(t, i, s, n) {
                            return ot.isFunction(i) && (n = n || s, s = i, i = void 0), ot.ajax(ot.extend({
                                url: t,
                                type: e,
                                dataType: n,
                                data: i,
                                success: s
                            }, ot.isPlainObject(t) && t))
                        }
                    }), ot._evalUrl = function(t) {
                        return ot.ajax({
                            url: t,
                            type: "GET",
                            dataType: "script",
                            async: !1,
                            global: !1,
                            throws: !0
                        })
                    }, ot.fn.extend({
                        wrapAll: function(t) {
                            var e;
                            return ot.isFunction(t) ? this.each(function(e) {
                                ot(this).wrapAll(t.call(this, e))
                            }) : (this[0] && (e = ot(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                                for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                                    return t
                            }).append(this)), this)
                        },
                        wrapInner: function(t) {
                            return ot.isFunction(t) ? this.each(function(e) {
                                ot(this).wrapInner(t.call(this, e))
                            }) : this.each(function() {
                                var e = ot(this),
                                i = e.contents();
                                i.length ? i.wrapAll(t) : e.append(t)
                            })
                        },
                        wrap: function(t) {
                            var e = ot.isFunction(t);
                            return this.each(function(i) {
                                ot(this).wrapAll(e ? t.call(this, i) : t)
                            })
                        },
                        unwrap: function() {
                            return this.parent().each(function() {
                                ot.nodeName(this, "body") || ot(this).replaceWith(this.childNodes)
                            }).end()
                        }
                    }), ot.expr.filters.hidden = function(t) {
                        return !ot.expr.filters.visible(t)
                    }, ot.expr.filters.visible = function(t) {
                        return t.offsetWidth > 0 || t.offsetHeight > 0 || t.getClientRects().length > 0
                    };
                    var ye = /\[\]$/,
                    xe = /^(?:submit|button|image|reset|file)$/i,
                    we = /^(?:input|select|textarea|keygen)/i;
                    ot.param = function(t, e) {
                        var i, s = [],
                        n = function(t, e) {
                            e = ot.isFunction(e) ? e() : null == e ? "" : e, s[s.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
                        };
                        if (void 0 === e && (e = ot.ajaxSettings && ot.ajaxSettings.traditional), ot.isArray(t) || t.jquery && !ot.isPlainObject(t)) ot.each(t, function() {
                            n(this.name, this.value)
                        });
                            else
                                for (i in t) U(i, t[i], e, n);
                                    return s.join("&").replace(/%20/g, "+")
                            }, ot.fn.extend({
                                serialize: function() {
                                    return ot.param(this.serializeArray())
                                },
                                serializeArray: function() {
                                    return this.map(function() {
                                        var t = ot.prop(this, "elements");
                                        return t ? ot.makeArray(t) : this
                                    }).filter(function() {
                                        var t = this.type;
                                        return this.name && !ot(this).is(":disabled") && we.test(this.nodeName) && !xe.test(t) && (this.checked || !Pt.test(t))
                                    }).map(function(t, e) {
                                        var i = ot(this).val();
                                        return null == i ? null : ot.isArray(i) ? ot.map(i, function(t) {
                                            return {
                                                name: e.name,
                                                value: t.replace(/\r?\n/g, "\r\n")
                                            }
                                        }) : {
                                            name: e.name,
                                            value: i.replace(/\r?\n/g, "\r\n")
                                        }
                                    }).get()
                                }
                            }), ot.ajaxSettings.xhr = function() {
                                try {
                                    return new t.XMLHttpRequest
                                } catch (t) {}
                            };
                            var ke = {
                                0: 200,
                                1223: 204
                            },
                            Ce = ot.ajaxSettings.xhr();
                            st.cors = !!Ce && "withCredentials" in Ce, st.ajax = Ce = !!Ce, ot.ajaxTransport(function(e) {
                                var i, s;
                                return st.cors || Ce && !e.crossDomain ? {
                                    send: function(n, o) {
                                        var a, r = e.xhr();
                                        if (r.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                                            for (a in e.xhrFields) r[a] = e.xhrFields[a];
                                                e.mimeType && r.overrideMimeType && r.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                                            for (a in n) r.setRequestHeader(a, n[a]);
                                                i = function(t) {
                                                    return function() {
                                                        i && (i = s = r.onload = r.onerror = r.onabort = r.onreadystatechange = null, "abort" === t ? r.abort() : "error" === t ? "number" != typeof r.status ? o(0, "error") : o(r.status, r.statusText) : o(ke[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                                                            binary: r.response
                                                        } : {
                                                            text: r.responseText
                                                        }, r.getAllResponseHeaders()))
                                                    }
                                                }, r.onload = i(), s = r.onerror = i("error"), void 0 !== r.onabort ? r.onabort = s : r.onreadystatechange = function() {
                                                    4 === r.readyState && t.setTimeout(function() {
                                                        i && s()
                                                    })
                                                }, i = i("abort");
                                                try {
                                                    r.send(e.hasContent && e.data || null)
                                                } catch (t) {
                                                    if (i) throw t
                                                }
                                        },
                                        abort: function() {
                                            i && i()
                                        }
                                    } : void 0
                                }), ot.ajaxSetup({
                                    accepts: {
                                        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                                    },
                                    contents: {
                                        script: /\b(?:java|ecma)script\b/
                                    },
                                    converters: {
                                        "text script": function(t) {
                                            return ot.globalEval(t), t
                                        }
                                    }
                                }), ot.ajaxPrefilter("script", function(t) {
                                    void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
                                }), ot.ajaxTransport("script", function(t) {
                                    if (t.crossDomain) {
                                        var e, i;
                                        return {
                                            send: function(s, n) {
                                                e = ot("<script>").prop({
                                                    charset: t.scriptCharset,
                                                    src: t.url
                                                }).on("load error", i = function(t) {
                                                    e.remove(), i = null, t && n("error" === t.type ? 404 : 200, t.type)
                                                }), X.head.appendChild(e[0])
                                            },
                                            abort: function() {
                                                i && i()
                                            }
                                        }
                                    }
                                });
                                var De = [],
                                Te = /(=)\?(?=&|$)|\?\?/;
                                ot.ajaxSetup({
                                    jsonp: "callback",
                                    jsonpCallback: function() {
                                        var t = De.pop() || ot.expando + "_" + ce++;
                                        return this[t] = !0, t
                                    }
                                }), ot.ajaxPrefilter("json jsonp", function(e, i, s) {
                                    var n, o, a, r = !1 !== e.jsonp && (Te.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Te.test(e.data) && "data");
                                    return r || "jsonp" === e.dataTypes[0] ? (n = e.jsonpCallback = ot.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, r ? e[r] = e[r].replace(Te, "$1" + n) : !1 !== e.jsonp && (e.url += (ue.test(e.url) ? "&" : "?") + e.jsonp + "=" + n), e.converters["script json"] = function() {
                                        return a || ot.error(n + " was not called"), a[0]
                                    }, e.dataTypes[0] = "json", o = t[n], t[n] = function() {
                                        a = arguments
                                    }, s.always(function() {
                                        void 0 === o ? ot(t).removeProp(n) : t[n] = o, e[n] && (e.jsonpCallback = i.jsonpCallback, De.push(n)), a && ot.isFunction(o) && o(a[0]), a = o = void 0
                                    }), "script") : void 0
                                }), st.createHTMLDocument = function() {
                                    var t = X.implementation.createHTMLDocument("").body;
                                    return t.innerHTML = "<form></form><form></form>", 2 === t.childNodes.length
                                }(), ot.parseHTML = function(t, e, i) {
                                    if (!t || "string" != typeof t) return null;
                                    "boolean" == typeof e && (i = e, e = !1), e = e || (st.createHTMLDocument ? X.implementation.createHTMLDocument("") : X);
                                    var s = ut.exec(t),
                                    n = !i && [];
                                    return s ? [e.createElement(s[1])] : (s = d([t], e, n), n && n.length && ot(n).remove(), ot.merge([], s.childNodes))
                                };
                                var Ie = ot.fn.load;
                                ot.fn.load = function(t, e, i) {
                                    if ("string" != typeof t && Ie) return Ie.apply(this, arguments);
                                    var s, n, o, a = this,
                                    r = t.indexOf(" ");
                                    return r > -1 && (s = ot.trim(t.slice(r)), t = t.slice(0, r)), ot.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (n = "POST"), a.length > 0 && ot.ajax({
                                        url: t,
                                        type: n || "GET",
                                        dataType: "html",
                                        data: e
                                    }).done(function(t) {
                                        o = arguments, a.html(s ? ot("<div>").append(ot.parseHTML(t)).find(s) : t)
                                    }).always(i && function(t, e) {
                                        a.each(function() {
                                            i.apply(a, o || [t.responseText, e, t])
                                        })
                                    }), this
                                }, ot.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
                                    ot.fn[e] = function(t) {
                                        return this.on(e, t)
                                    }
                                }), ot.expr.filters.animated = function(t) {
                                    return ot.grep(ot.timers, function(e) {
                                        return t === e.elem
                                    }).length
                                }, ot.offset = {
                                    setOffset: function(t, e, i) {
                                        var s, n, o, a, r, l, h, c = ot.css(t, "position"),
                                        u = ot(t),
                                        d = {};
                                        "static" === c && (t.style.position = "relative"), r = u.offset(), o = ot.css(t, "top"), l = ot.css(t, "left"), h = ("absolute" === c || "fixed" === c) && (o + l).indexOf("auto") > -1, h ? (s = u.position(), a = s.top, n = s.left) : (a = parseFloat(o) || 0, n = parseFloat(l) || 0), ot.isFunction(e) && (e = e.call(t, i, ot.extend({}, r))), null != e.top && (d.top = e.top - r.top + a), null != e.left && (d.left = e.left - r.left + n), "using" in e ? e.using.call(t, d) : u.css(d)
                                    }
                                }, ot.fn.extend({
                                    offset: function(t) {
                                        if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                                            ot.offset.setOffset(this, t, e)
                                        });
                                            var e, i, s = this[0],
                                            n = {
                                                top: 0,
                                                left: 0
                                            },
                                            o = s && s.ownerDocument;
                                            return o ? (e = o.documentElement, ot.contains(e, s) ? (n = s.getBoundingClientRect(), i = K(o), {
                                                top: n.top + i.pageYOffset - e.clientTop,
                                                left: n.left + i.pageXOffset - e.clientLeft
                                            }) : n) : void 0
                                        },
                                        position: function() {
                                            if (this[0]) {
                                                var t, e, i = this[0],
                                                s = {
                                                    top: 0,
                                                    left: 0
                                                };
                                                return "fixed" === ot.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), ot.nodeName(t[0], "html") || (s = t.offset()), s.top += ot.css(t[0], "borderTopWidth", !0), s.left += ot.css(t[0], "borderLeftWidth", !0)), {
                                                    top: e.top - s.top - ot.css(i, "marginTop", !0),
                                                    left: e.left - s.left - ot.css(i, "marginLeft", !0)
                                                }
                                            }
                                        },
                                        offsetParent: function() {
                                            return this.map(function() {
                                                for (var t = this.offsetParent; t && "static" === ot.css(t, "position");) t = t.offsetParent;
                                                    return t || Kt
                                            })
                                        }
                                    }), ot.each({
                                        scrollLeft: "pageXOffset",
                                        scrollTop: "pageYOffset"
                                    }, function(t, e) {
                                        var i = "pageYOffset" === e;
                                        ot.fn[t] = function(s) {
                                            return bt(this, function(t, s, n) {
                                                var o = K(t);
                                                return void 0 === n ? o ? o[e] : t[s] : void(o ? o.scrollTo(i ? o.pageXOffset : n, i ? n : o.pageYOffset) : t[s] = n)
                                            }, t, s, arguments.length)
                                        }
                                    }), ot.each(["top", "left"], function(t, e) {
                                        ot.cssHooks[e] = I(st.pixelPosition, function(t, i) {
                                            return i ? (i = T(t, e), $t.test(i) ? ot(t).position()[e] + "px" : i) : void 0
                                        })
                                    }), ot.each({
                                        Height: "height",
                                        Width: "width"
                                    }, function(t, e) {
                                        ot.each({
                                            padding: "inner" + t,
                                            content: e,
                                            "": "outer" + t
                                        }, function(i, s) {
                                            ot.fn[s] = function(s, n) {
                                                var o = arguments.length && (i || "boolean" != typeof s),
                                                a = i || (!0 === s || !0 === n ? "margin" : "border");
                                                return bt(this, function(e, i, s) {
                                                    var n;
                                                    return ot.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (n = e.documentElement, Math.max(e.body["scroll" + t], n["scroll" + t], e.body["offset" + t], n["offset" + t], n["client" + t])) : void 0 === s ? ot.css(e, i, a) : ot.style(e, i, s, a)
                                                }, e, o ? s : void 0, o, null)
                                            }
                                        })
                                    }), ot.fn.extend({
                                        bind: function(t, e, i) {
                                            return this.on(t, null, e, i)
                                        },
                                        unbind: function(t, e) {
                                            return this.off(t, null, e)
                                        },
                                        delegate: function(t, e, i, s) {
                                            return this.on(e, t, i, s)
                                        },
                                        undelegate: function(t, e, i) {
                                            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
                                        },
                                        size: function() {
                                            return this.length
                                        }
                                    }), ot.fn.andSelf = ot.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
                                        return ot
                                    });
                                    var Se = t.jQuery,
                                    Pe = t.$;
                                    return ot.noConflict = function(e) {
                                        return t.$ === ot && (t.$ = Pe), e && t.jQuery === ot && (t.jQuery = Se), ot
                                    }, e || (t.jQuery = t.$ = ot), ot
                                }),
function(t) {
    function e(t) {
        var e = 0,
        i = t;
        return i = i.clone().attr("class", "hidden_element").appendTo("body"), e = i.width(!0), i.remove(), e
    }

    function i(t, e) {
        t && window.console && window.console.log && window.console.log("jQuery-LABELAUTY: " + e)
    }

    function s(t, e, i, s, n, o, a) {
        var r, l, h = "";
        return null == n ? r = l = "" : (r = n[0], l = null == n[1] ? r : n[1]), h = null == e ? "" : 'tabindex="0" role="' + s + '" aria-checked="' + i + '" aria-label="' + e + '"', 1 == o && 1 == a ? '<label for="' + t + '" ' + h + '><span class="labelauty-unchecked-image"></span><span class="labelauty-unchecked">' + r + '</span><span class="labelauty-checked-image"></span><span class="labelauty-checked">' + l + "</span></label>" : 1 == o ? '<label for="' + t + '" ' + h + '><span class="labelauty-unchecked">' + r + '</span><span class="labelauty-checked">' + l + "</span></label>" : '<label for="' + t + '" ' + h + '><span class="labelauty-unchecked-image"></span><span class="labelauty-checked-image"></span></label>'
    }
    t.fn.labelauty = function(n) {
        var o = t.extend({
            development: !1,
            class: "labelauty",
            icon: !0,
            label: !1,
            separator: "|",
            checked_label: "Checked",
            unchecked_label: "Unchecked",
            force_random_id: !1,
            minimum_width: !1,
            same_width: !0
        }, n);
        return this.each(function() {
            var n, a, r, l = t(this),
            h = l.is(":checked"),
            c = l.attr("type"),
            u = !0,
            d = !0,
            p = l.attr("aria-label");
            if (l.attr("aria-hidden", !0), !1 === l.is(":checkbox") && !1 === l.is(":radio")) return this;
            if (l.addClass(o.class), n = l.attr("data-labelauty"), d = o.label, u = o.icon, !0 === d && (null == n || 0 === n.length ? a = [o.unchecked_label, o.checked_label] : (a = n.split(o.separator), a.length > 2 ? (d = !1, i(o.development, "There's more than two labels. LABELAUTY will not use labels.")) : 1 === a.length && i(o.development, "There's just one label. LABELAUTY will use this one for both cases."))), l.css({
                display: "none"
            }), l.removeAttr("data-labelauty"), r = l.attr("id"), o.force_random_id || null == r || "" === r.trim()) {
                var f = 1 + Math.floor(1024e3 * Math.random());
                for (r = "labelauty-" + f; 0 !== t(r).length;) f++, r = "labelauty-" + f, i(o.development, "Holy crap, between 1024 thousand numbers, one raised a conflict. Trying again.");
                    l.attr("id", r)
            }
            var g = jQuery(s(r, p, h, c, a, d, u));
            if (g.click(function() {
                l.is(":checked") ? t(g).attr("aria-checked", !1) : t(g).attr("aria-checked", !0)
            }), g.keypress(function(e) {
                e.preventDefault(), 32 !== e.keyCode && 13 !== e.keyCode || (l.is(":checked") ? (l.prop("checked", !1), t(g).attr("aria-checked", !1)) : (l.prop("checked", !0), t(g).attr("aria-checked", !0)))
            }), l.after(g), !1 !== o.minimum_width && l.next("label[for=" + r + "]").css({
                "min-width": o.minimum_width
            }), 0 != o.same_width && 1 == o.label) {
                var m = l.next("label[for=" + r + "]"),
                v = e(m.find("span.labelauty-unchecked")),
                _ = e(m.find("span.labelauty-checked"));
                v > _ ? m.find("span.labelauty-checked").width(v) : m.find("span.labelauty-unchecked").width(_)
            }
        })
    }
}(jQuery),
function(t, e) {
    "use strict";

    function i(t) {
        return {
            fast: 200,
            normal: 400,
            slow: 600
        }[t] || t
    }

    function s(t, e, i, s) {
        if ("function" != typeof i) {
            var o = t + ("string" == typeof i ? "." + i : "string" == typeof s ? "." + s : "");
            e.trigger(o)
        } else n.call(e, t, i, s);
        return this
    }

    function n(t, e, i) {
        var s = t + ("string" == typeof i ? "." + i : "");
        this.bind(s, e)
    }

    function o() {
        return JSON.parse(this.find(C + T).val() || "[]")
    }

    function a() {
        var e = t(this).find(C + O + " p"),
        i = t(this).children(C + T),
        s = [];
        e.each(function() {
            var e = t(this);
            e.find(":checkbox").prop("checked") && s.push(e.data("value"))
        }), t(this).children("select").val(s), i.val(JSON.stringify(s))
    }

    function r(e) {
        for (var i, s = t(this).find(C + O + " p"), n = t(this).children(C + T), o = [], a = 0; a < s.length; a++) {
            var r = s.eq(a),
            l = e.indexOf(r.data("value"));
            e.indexOf(r.data("value")) >= 0 ? (i = r.find(":checkbox").prop("checked", !0), o.push(e[l])) : r.find(":checkbox").prop("checked", !1)
        }
        t(this).children("select").val(e), i && (i.trigger(k + "-chupdate", [!0]), n.val(JSON.stringify(o)))
    }

    function l(e) {
        var i = t(this),
        s = this.data(k),
        n = i.children("select"),
        o = i.children(C + T),
        a = i.children(C + D),
        r = n.find("option").filter(function() {
            return this.value == e
        });
        return a.removeClass(k + I).siblings(C + W).removeClass(k + W + I), r.length ? (i.find(C + O + " p").eq(r[0].index).addClass(k + H).siblings().removeClass(k + H), o.val(e).data("changed", !0), void n.val(e).change()) : (i.find(C + O + " p").removeClass(k + H), n.children().prop("selected", !1), s.invalidAsValue ? (s.highlightInvalid || (s.invalidAsValue ? s.highlightInvalid : null === s.highlightInvalid)) && a.addClass(k + I).siblings(C + W).addClass(k + W + I) : e = "", o.val(e), void a.val(e))
    }

    function h() {
        if (!this.data("listenersAdded")) {
            var i = this,
            s = i.data(k),
            n = null;
            this.on("keyup", C + D + ", " + C + S, function(e) {
                if (!([38, 40, 13, 27, 9, 37, 39, 17, 18, 16, 20, 33, 34, 35, 36].indexOf(e.which) >= 0)) {
                    var i = function(e) {
                        if ((e.ctrlKey || e.shiftKey || 45 != e.which) && (!e.ctrlKey || 65 != e.which)) {
                            var i = s.fullMatch,
                            n = s.highlight;
                            n = i ? !1 !== n : !!n;
                            var o = t(this),
                            a = this.value.trim();
                            s.filterIgnoreCase && (a = a.toLowerCase()), s.filterIgnoreAccents && String.prototype.latinize && (a = a.latinize());
                            var r = o.closest(C).children(C + O);
                            v.call(r, "down", !0);
                            var l = o.closest(C).find("select option");
                            if (t(C + " " + C + O).each(function() {
                                r[0] != this && v.call(t(this), "up")
                            }), !a) return void r.children("p").show().each(function() {
                                t(C + "-marker", this).contents().unwrap()
                            });
                            var h = s.hideSeparatorsOnSearch ? "p" : "p:not(" + C + E + ", " + C + L + ")";
                            r.children(h).hide(), l.each(function() {
                                var e = t(this).text().trim();
                                if (s.filterIgnoreCase && (e = e.toLowerCase()), s.filterIgnoreAccents && String.prototype.latinize && (e = e.latinize()), i ? e.indexOf(a) >= 0 : 0 == e.indexOf(a)) {
                                    var o = s.filterIgnoreCase ? "i" : "",
                                    h = new RegExp("(" + a.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1") + ")", i ? o + "g" : o),
                                    c = r.children("p:eq(" + l.index(this) + "):not(" + C + E + ", " + C + L + ")").show();
                                    n && c.each(function() {
                                        t(C + "-marker", this).contents().unwrap();
                                        var e = t(C + N, this)[0];
                                        e.innerHTML = e.innerHTML.replace(h, '<span class="' + k + '-marker">$1</span>')
                                    })
                                }
                            })
                        }
                    },
                    o = this,
                    a = s.filterDelay;
                    a ? (clearTimeout(n), n = setTimeout(function() {
                        i.call(o, e)
                    }, a)) : i.call(o, e)
                }
            }), this.on("keydown", C + D, function(e) {
                if ([38, 40, 13, 27, 9].indexOf(e.which) >= 0) {
                    9 != e.which && e.preventDefault();
                    var i, n, o = t(this).closest(C),
                    a = o.children(C + O),
                    r = t(C + H, a[0]),
                    l = t("p:first", a[0]),
                    h = s.loopScrolling,
                    c = ":not(" + C + E + "):not(" + C + L + ")",
                    u = "default" == s.mode && s.fillOnArrowPress;
                    if (!a.is(":animated")) {
                        var d = this.value.trim();
                        d = s.filterIgnoreCase ? d.toLowerCase() : d;
                        var p = a.scrollTop();
                        if (40 == e.which) {
                            if (a.is(":hidden")) return void v.call(a, "down");
                            if (0 == r.length) i = l.is(":visible" + c) ? l.addClass(k + H) : l.nextAll(":visible" + c).first().addClass(k + H);
                            else {
                                if (!h && !r.nextAll(":visible" + c).first().length) return;
                                i = r.removeClass(k + H).nextAll(":visible" + c).first().addClass(k + H), 0 == i.length && (i = l.is(":visible") ? l.addClass(k + H) : l.nextAll(":visible" + c).first().addClass(k + H)), 0 == i.length && (i = l), n = i.position().top - a.position().top;
                                var f = i.outerHeight();
                                n + 6 * f > a.height() ? n + 6 * f - a.height() > 1.5 * f ? a.scrollTop(p + n) : a.scrollTop(p + f) : 0 > n && a.scrollTop(p - -n)
                            }
                            u && (this.value = i.find(C + N).text(), o.children(C + D).data("fillonarrow", !0))
                        } else if (38 == e.which) {
                            if (a.is(":visible")) {
                                if (!h && !r.prevAll(":visible" + c).first().length) return;
                                i = r.removeClass(k + H).prevAll(":visible" + c).first().addClass(k + H), 0 == i.length && (i = t("p:visible" + c + ":last", a[0]).addClass(k + H)), n = i.position().top - a.position().top, f = i.outerHeight(), 3 * f > n ? a.scrollTop(p - -n - 3 * f) : n > a.height() - 3 * f && a.scrollTop(p + n - 3 * f), u && (this.value = i.find(C + N).text(), o.children(C + D).data("fillonarrow", !0))
                            }
                        } else if (13 == e.which) {
                            if (s.fillOnBlur) return void y(a).click();
                            a.children(C + H).click(), "default" == s.mode && v.call(a, "up")
                        } else if (27 == e.which) s.blurOnEscape ? t(this).blur() : t(this), a.is(":visible") && (v.call(a, "up"), e.stopPropagation());
                        else if (9 == e.which && s.fillOnTab && d) {
                            var g = a.children(C + H);
                            g.length && g.click()
                        }
                    }
                }
            }), this.on("change", "select", function(e, i) {
                var s = t(this).closest(C),
                n = t("option:selected", this).text();
                s.children(C + D).val(n).data("value", n);
                var o = s.children(C + T);
                return o.data("changed") ? void o.data("changed", !1) : i ? (a.call(s), void o.change()) : (o.change(), void v.call(s.children(C + O), "up"))
            }), this.on(k + "-chupdate", C + O + " p :checkbox", function(e, i) {
                i && (e.stopPropagation(), _.call(t(this).parent(), e, !0))
            }), this.on("click", C + O + " p", function(e) {
                if (clearTimeout(w), e.stopPropagation(), !t(this).is(C + E + ", " + C + L)) {
                    i.children(C + I).removeClass(k + I), i.children(C + W).removeClass(k + W + I);
                    var s = t(this),
                    n = s.parent(),
                    o = n.children(),
                    a = o.index(this);
                    if ("checkboxes" == i.data(k).mode) return void _.call(this, e);
                    var r = n.closest(C).children("select");
                    r.children("option").eq(a).prop("selected", !0), r.siblings(C + T).val(r.val()), r.change(), v.call(s.parent(), "up"), s.addClass(k + H).siblings().removeClass(k + H)
                }
            }), this.on("blur", C + D, function(n) {
                var o = t(this),
                a = t(n.relatedTarget).closest(C);
                if (!(a.length > 0 && a[0] === o.closest(C)[0])) {
                    w = setTimeout(function() {
                        var s = t(this);
                        i.data(k), this === e.activeElement && s.data("silentfocus", !0), s.data("fillonarrow", !1), v.call(s.closest(C).children(C + O), "up")
                    }.bind(this), 200);
                    var r = o.val().trim(),
                    l = o.siblings(C + T),
                    h = l.val();
                    if (r) {
                        var c;
                        o.siblings("select").find("option").each(function() {
                            s.filterIgnoreCase ? r.toLowerCase() == t(this).text().trim().toLowerCase() && (c = this.value) : r == t(this).text().trim() && (c = this.value)
                        }), c ? l.val(c) : l.val(s.invalidAsValue ? r : "")
                    } else l.val("");
                    h !== l.val() && l.change().data("changed", !0)
                }
            }), this.on("focus", C + D, function() {
                if (t(this).data("silentfocus")) return void t(this).data("silentfocus", !1);
                if (this.value.trim()) {
                    if (i.data(k).expandOnFocusWithValue || t(this).data("expandfocus"))
                        if (i[k]("val")) {
                            var e = i.children(C + O);
                            e.children().show(), v.call(e, "down")
                        } else t(this).keyup()
                    } else(i.data(k).expandOnFocus || t(this).data("expandfocus")) && t(this).keyup();
                    t(this).data("expandfocus", !1)
                }), this.on("click", C + D + "-div", function() {
                    i.data(k).disabled || v.call(t(this).siblings(C + O), "down")
                }), this.on("click", C + D, function(e) {
                    var i = t(this).closest(C)[0];
                    t(C).each(function() {
                        this != i && t(this)[k]("close")
                    }), e.stopPropagation()
                }), this.on("click", C + z, function(e) {
                    clearTimeout(w);
                    var i = t(this),
                    s = i.closest(C),
                    n = s.children(C + O);
                    n.is(":visible") ? (v.call(n, "up"), s.children(C + D).data("silentfocus", !0).focus()) : s.children(C + D).data("expandfocus", !0).focus()
                }), this.on("click", C + M, function(e) {
                    clearTimeout(w), e.stopPropagation();
                    var n = t(this),
                    o = n.parent();
                    i.children(C + O).children("p").eq(n.data("index")).find(":checkbox").prop("checked", !1), o.fadeOut(s.animation.duration), n.closest(C).children("select").trigger("change", [!0])
                }), s.autoLoad != t.noop && t(C + O, this).scroll(function() {
                    var e = t(this),
                    n = i.children("select"),
                    o = e.scrollTop();
                    o > e.data("scrollTop") ? this.scrollHeight - o - 50 < e.height() && (i.data("pending") || (i.data("pending", !0), s.autoLoad.call(i, n.find("option[value]:last").val(), "bottom"))) : o < e.height() / 2 && (i.data("pending") || (i.data("pending", !0), s.autoLoad.call(i, n.find("option[value]:first").val(), "top"))), e.data("scrollTop", o)
                }).data("scrollTop", 0), t(e).bind("click." + k, {
                    thisIs: this
                }, function(e) {
                    v.call(t(e.data.thisIs).children(C + O), "up")
                }), this.data("listenersAdded", !0)
            }
        }

        function c(e) {
            if ("string" == typeof e && null == (e = t.parseJSON(e))) return [];
            if (!e) return !1;
            if (!(e instanceof Array)) {
                if ("object" != typeof e) return !1;
                void 0 === e.length && (e.length = Object.keys(e).length), e = [].slice.call(e)
            }
            return e
        }

        function u(t) {
            for (var e = 0; e < t.length; e++) t[e].value && t[e].text || t[e].hasOwnProperty("separator") || t.splice(e, 1)
        }

    function d(e) {
        for (var i = 0; i < e.length; i++) e[i].value || t(e[i]).hasClass(k + E) || "optgroup" == e[i].tagName.toLowerCase() || t(e[i]).remove()
    }

function p(t, e) {
    var i = t.text.trim().toLowerCase(),
    s = e.text.trim().toLowerCase();
    return i > s ? 1 : i == s ? 0 : -1
}

function f(t) {
    for (var e = 0; e < t.length; e++)
        for (var i = e + 1; i < t.length; i++) t[e] && t[i] && t[e].value == t[i].value && t.splice(e, 1)
    }

function g(e) {
    for (var i = 0; i < e.length; i++)
        for (var s = i + 1; s < e.length; s++) e[i] && e[s] && e[i].value == e[s].value && "optgroup" != e[i].tagName.toLowerCase() && t(e[i]).remove()
    }

function m() {
    var e, i = this.children(C + D),
    s = this.children("select"),
    n = this.data(k),
    o = i.val().trim();
    o = n.filterIgnoreCase ? o.toLowerCase() : o, s.find("option").each(function() {
        var i = t(this).text().trim();
        (i = n.filterIgnoreCase ? i.toLowerCase() : i) == o && (e = this.value)
    }), !e && o ? (n.forbidInvalid ? i.closest(C).find(C + D).val("").data("value", "") : (n.highlightInvalid || (n.invalidAsValue ? n.highlightInvalid : null === n.highlightInvalid)) && i.addClass(k + I).siblings(C + W).addClass(k + W + I), n.invalidAsValue || i.siblings("select, " + C + T).val("")) : i.removeClass(k + I).siblings(C + W).removeClass(k + W + I)
}

function v(e, i) {
    if (!this.is(":animated") && this.length && ("up" != e || !this.is(":hidden") || 1 != this.length)) {
        var s = this.parent().data(k).animation;
        t.easing[s.easing] || (console.warn("no such easing: " + s.easing), s.easing = "swing");
        var n = this.parent(),
        o = n.data(k);
        "up" == e ? (o.beforeClose.call(n), s.complete = function() {
            "checkboxes" != o.mode && m.call(n), o.afterClose.call(n)
        }, this.slideUp(s).data("p-clicked-index", -1), n.children(C + z).removeClass(k + z + "-up")) : (o.beforeOpen.call(n), s.complete = function() {
            o.afterOpen.call(n)
        }, this.slideDown(s), n.children(C + z).addClass(k + z + "-up"), n.find(C + H).removeClass(k + H), t(C + "-marker", n).contents().unwrap(), n.children(C + O).children("p").show());
        n.children(C + D).each(function() {
            var s = t(this);
            if (s.data("fillonarrow") && !i && s.data("fillonarrow", !1).val(s.data("value")), "down" == e) {
                var a = this.value.trim();
                o.filterIgnoreCase && (a = a.toLowerCase());
                var r = n.find("select option");
                r.each(function() {
                    var e = t(this).text().trim();
                    return o.filterIgnoreCase && (e = e.toLowerCase()), e == a ? (n.children(C + O).children("p:eq(" + r.index(this) + "):not(" + C + E + ", " + C + L + ")").first().addClass(k + H), !1) : void 0
                })
            }
        })
    }
}

function _(e, s) {
    var n = t(this),
    o = n.closest(C),
    a = n.parent(),
    r = a.children("p"),
    l = r.index(this),
    h = i(a.parent().data(k).animation.duration);
    if (!s) {
        var c = n.find(":checkbox");
        t(e.target).is(":checkbox") || c.prop("checked", !c.prop("checked"));
        var u = c.prop("checked");
        if (e.shiftKey && a.data("p-clicked-index") >= 0)
            for (var d = a.data("p-clicked-index"), p = l > d ? d : l, f = l > d ? l : d, g = p; f >= g; g++) t(r[g]).find(":checkbox").prop("checked", u)
        }
    var m = o.find(C + A).prepend("<span />");
    o.find(C + A).fadeOut(h / 5, function() {
        m.empty().show(), r.each(function(e) {
            var i = t(this);
            i.find(":checkbox").prop("checked") && m.append(t("<div />").addClass(k + P).append(t("<div />").addClass(k + P + "-text").text(i.find(C + N).text())).append(t("<div />").addClass(k + M).text("×").data("index", e)).fadeIn(1.5 * h).attr("title", i.attr("title")))
        }), m.append('<div style="clear: both" />')
    }), a.data("p-clicked-index", l), n.closest(C).children("select").trigger("change", [!0])
}

function b(e, i) {
    for (var s = this.data(k), n = this.find("select"), o = this.find(C + O), a = 0; a < e.length; a++) {
        if (e[a].hasOwnProperty("separator")) {
            if (e[a].hasOwnProperty("header")) r = t('<p class="' + k + L + '" />').text(e[a].header);
            else var r = t('<p class="' + k + E + '" />');
            var l = t("<option />")
        } else l = t("<option />").val(e[a].value).text(e[a].text).prop("selected", !!e[a].selected), r = s.pFillFunc.call(this, e[a], s), "checkboxes" == s.mode && r.prepend('<input type="checkbox" />');
        r.data("value", e[a].value), i ? (n.prepend(l), o.prepend(r)) : (n.append(l), o.append(r))
    }
}

function y(t) {
    var e = t.children(C + H + ":visible");
    return 0 == e.length && (e = t.children(":visible:first")), e
}

function x(t) {
    if (null == t) return null;
    for (var e = Object.keys(t), i = 0; i < e.length; i++) {
        var s = e[i].replace(/-([a-z])/g, function(t) {
            return t[1].toUpperCase()
        });
        e[i] != s && (t[s] = t[e[i]], delete t[e[i]]), "object" == typeof t[s] && "data" != s && x(t[s])
    }
    return t
}
var w, k = "scombobox",
C = "." + k,
D = "-display",
T = "-value",
I = "-invalid",
S = D + "-div",
P = S + "-item",
M = P + "-remove",
A = S + "-holder",
O = "-list",
N = "-mainspan",
H = "-hovered",
E = "-separator",
L = "-header",
W = "-dropdown-background",
z = "-dropdown-arrow",
F = "-disabled",
j = parseInt,
R = {
    init: function() {
        var e = this.find(C + O),
        i = this.find("select"),
        s = this.find(C + W),
        n = this.find(C + z),
        o = this.data(k);
        if (this.addClass(k), 0 == i.length && this.append(t("<select />")), this.attr("id") && i.removeAttr("id"), i.attr("multiple") && (this.data(k).mode = "checkboxes"), 0 == s.length && this.append('<div class="' + k + W + '" />'), 0 == n.length && this.append('<div class="' + k + z + '" />'), R.displayDropdown.call(this, o.showDropDown), "checkboxes" != o.mode && 0 == this.find(C + D).length) {
            var a = t('<input class="' + k + D + '" type="text" />');
            a.attr("title", i.attr("title")), a.attr("placeholder", o.placeholder), this.append(a), this.height(+a.css("font-size") + +a.css("padding-top") + +a.css("padding-bottom"))
        }
        if (null != o.tabindex && this.find(C + D).attr("tabindex", o.tabindex), 0 == this.find(C + T).length && this.append('<input class="' + k + T + '" type="hidden" />'), (this.find(C + D).is(":disabled") || o.disabled) && this.find(C + W + ", " + C + z).hide(), o.disabled && (this.find(C + D).prop("disabled", !0), this.addClass(k + F)), (i.attr("required") || o.required) && (this.find(C + D).prop("required", "required"), this.addClass(k + "-required")), 0 == e.length && this.append(e = t('<div class="' + k + O + '"></div>')), "checkboxes" == o.mode) {
            this.addClass(k + "-checkboxes"), this.find(C + D).remove();
            var r = this.find(C + D + "-div");
            0 == r.length && (r = this.append('<div class="' + k + S + '"><div class="' + k + A + '" /></div>')), r.attr("title", i.attr("title")), e.insertAfter(this.find(C + D + "-div"));
            var l = this.find(C + A),
            c = t('<div class="' + k + P + '" id="' + k + '-test-item"><div class="' + k + P + '-text">x</div></div>');
            l.append(c.css("margin-left", "-9999px").show());
            var u = c.height() + j(c.css("padding-top")) + j(c.css("padding-top")) + j(c.css("margin-top")) + j(c.css("margin-top")) + j(c.css("border-top-width")) + j(c.css("border-top-width")) + j(l.css("padding-top")) + j(l.css("padding-top"));
            this.find(C + D + "-div").css("min-height", u + "px"), c.remove()
        } else this.find(C + "-display-div").remove(), e.insertAfter(this.find(C + D));
        return e.css({
            "max-width": o.listMaxWidth,
            "max-height": o.maxHeight
        }), 1 == o.wrap && e.css("white-space", "normal"), o.autoLoad != t.noop && (o.loopScrolling = !1), h.call(this), this.data(k + "-init", !0), R.fill.call(this, o.data)
    },
    fill: function(e, i) {
        var s = this.find("select").children("option, optgroup"),
        n = this.find("." + k + O),
        o = this.find("select");
        e = c(e);
        var a = this.data(k),
        r = a.mode;
        if (e ? (a.removeDuplicates && f(e), u(e), a.sort && (e.sort(p), a.sortAsc || e.reverse()), i || (o.empty(), n.empty(), this.children(C + T + ", " + C + D).val("")), b.call(this, e, 2 == i)) : (a.removeDuplicates && (g(s), d(s), s = this.find("select").children("option, optgroup")), 0 == s.length || s.each(function() {
            var e = t(this),
            i = t("<p />");
            if (i.attr("title", e.attr("title")), e.hasClass(k + E)) e.hasClass(k + L) ? n.append(i.addClass(k + L).text(e.text())) : i.addClass(k + E);
            else {
                if ("optgroup" == this.tagName.toLowerCase()) {
                    var s = e.attr("label"),
                    o = t("option", this);
                    return e.before("<option />"), e.after(o), e.remove(), n.append(s ? i.addClass(k + L).text(s) : i.addClass(k + E)), void o.each(function() {
                        n.append(t("<p />").attr("title", this.title).append(t('<span class="' + k + N + '" />').text(t(this).text())).data("value", this.value))
                    })
                }
                i.append(t('<span class="' + k + N + '" />').text(e.text())).data("value", this.value), "checkboxes" == r && i.prepend('<input type="checkbox" />')
            }
            n.append(i)
        })), this.data(k + "-init") && (a.callback.func.apply(this, a.callback.args), this.data(k + "-init", !1)), s = this.find("select").children("option"), !a.empty)
            if ("checkboxes" != r) this[k]("val", s.filter("option:selected:last").val());
            else {
                var l = s.filter(":selected").map(function() {
                    return t(this).val()
                }).get();
                this[k]("val", l)
            }
            return this
        },
        clear: function() {
            return this.children("select").empty(), this.children(C + O).empty().width(""), this.children(C + D).removeClass(k + I), this.children(C + W).removeClass(k + W + I), this
        },
        data: function(t) {
            return 0 == arguments.length ? this.data(k).data : (this.data(k).data = t, this)
        },
        disabled: function(t) {
            var e = this.data(k).mode;
            return 0 == arguments.length ? "checkboxes" == e ? this.hasClass(k + F) : this.children(C + D).prop("disabled") : (t = !!t, this.children(C + D).prop("disabled", t), t ? (this.addClass(k + F), this.children(C + W + ", " + C + z).hide()) : (this.removeClass(k + F), this.children(C + W + ", " + C + z).show()), this)
        },
        tabindex: function(t) {
            var e = this.find(C + D);
            return 0 == arguments.length ? e.attr("tabindex") : (e.attr("tabindex", t), this)
        },
        options: function(e) {
            return 0 == arguments.length ? this.data(k) : (t.extend(!0, this.data(k), x(e)), this)
        },
        val: function(t) {
            var e = this.data(k),
            i = e.mode;
            if (0 == arguments.length) {
                if ("default" == i) var s = this.find(C + T).val();
                return "default" == i ? this.find(C + D).is(":disabled") ? "" : s : "checkboxes" == i ? o.call(this) : null
            }
            return "default" == i ? l.call(this, t) : "checkboxes" == i && r.call(this, t), this
        },
        open: function() {
            return v.call(this.children(C + O), "down"), this
        },
        close: function() {
            return v.call(this.children(C + O), "up"), this
        },
        change: function(t, e) {
            return s.call(this, "change", this.children(C + T), t, e)
        },
        focus: function(t, e) {
            return s.call(this, "focus", this.children(C + D), t, e)
        },
        blur: function(t, e) {
            return s.call(this, "blur", this.children(C + D), t, e)
        },
        keyup: function(t, e) {
            return s.call(this, "keyup", this.children(C + D), t, e)
        },
        keydown: function(t, e) {
            return s.call(this, "keydown", this.children(C + D), t, e)
        },
        keypress: function(t, e) {
            return s.call(this, "keypress", this.children(C + D), t, e)
        },
        click: function(t, e) {
            return s.call(this, "click", this.children(C + D), t, e)
        },
        mousedown: function(t, e) {
            return s.call(this, "mousedown", this.children(C + D), t, e)
        },
        clickDropdown: function(t, e) {
            return s.call(this, "click", this.children(C + z), t, e)
        },
        toSelect: function() {
            var t = this.children("select").insertAfter(this);
            return this.data(k).reassignId && t.attr("id", this.attr("id")), this.remove(), t
        },
        displayDropdown: function(t) {
            return arguments.length ? t ? this.children(C + z + ", " + C + W).show() : this.children(C + z + ", " + C + W).hide() : this.data(k).showDropdown ? this.children(C + z + ", " + C + W).show() : this.children(C + z + ", " + C + W).hide(), this
        },
        placeholder: function(t) {
            var e = this.children(C + D);
            return arguments.length ? (e.attr("placeholder", t), this) : e.attr("placeholder")
        }
    };
    t.fn[k] = function(e) {
        if ("string" == typeof e) {
            this.length || t.error("Calling " + k + "." + e + "() method on empty collection"), null == this.data(k + "-init") && t.error("Calling " + k + "." + e + "() method prior to initialization");
            var i = R[e];
            i || t.error("No such method: " + e + " in jQuery." + k + "()")
        } else {
            if (!(["object", "undefined"].indexOf(typeof e) >= 0)) return t.error("Incorrect usage"), this;
            var s = t.extend(!0, {}, t.fn[k].defaults, x(e))
        }
        return i ? i.apply(this, Array.prototype.slice.call(arguments, 1)) : this.each(function() {
            var e = t(this);
            e.parent().hasClass(k) || (e.is("select") && (e.wrap("<div />"), s.reassignId && e.parent().attr("id", e.attr("id")), e = e.parent()), e.data(k, t.extend(!0, {}, s)), R.init.apply(e))
        })
    }, t.fn[k].defaults = {
        data: null,
        empty: !1,
        required: !1,
        disabled: !1,
        sort: !0,
        sortAsc: !0,
        removeDuplicates: !0,
        fullMatch: !1,
        highlight: null,
        filterIgnoreCase: !0,
        filterIgnoreAccents: !1,
        filterDelay: 0,
        hideSeparatorsOnSearch: !1,
        expandOnFocus: !0,
        expandOnFocusWithValue: !0,
        tabindex: null,
        forbidInvalid: !1,
        invalidAsValue: !1,
        highlightInvalid: null,
        reassignId: !0,
        mode: "default",
        pMarkup: '<span class="' + k + N + '">${text}</span> <span>${additional}</span>',
        pFillFunc: function(e, i) {
            return t("<p />").html(i.pMarkup.replace("${text}", e.text).replace("${additional}", e.additional ? e.additional : ""))
        },
        animation: {
            duration: "fast",
            easing: "swing"
        },
        listMaxWidth: window.screen.width / 2,
        wrap: !0,
        maxHeight: "",
        fillOnArrowPress: !0,
        fillOnBlur: !1,
        blurOnEscape: !1,
        fillOnTab: !0,
        showDropDown: !0,
        callback: {
            func: t.noop,
            args: []
        },
        beforeOpen: t.noop,
        beforeClose: t.noop,
        afterOpen: t.noop,
        afterClose: t.noop,
        autoLoad: t.noop,
        loopScrolling: !0,
        placeholder: ""
    }, t.fn[k].extendDefaults = function(e) {
        t.extend(!0, t.fn[k].defaults, e)
    }
}(jQuery, document),
function() {
    var t, e, i, s, n, o = function(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    },
    a = {}.hasOwnProperty,
    r = function(t, e) {
        function i() {
            this.constructor = t
        }
        for (var s in e) a.call(e, s) && (t[s] = e[s]);
            return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
    };
    s = function() {
        function t() {
            this.options_index = 0, this.parsed = []
        }
        return t.prototype.add_node = function(t) {
            return "OPTGROUP" === t.nodeName.toUpperCase() ? this.add_group(t) : this.add_option(t)
        }, t.prototype.add_group = function(t) {
            var e, i, s, n, o, a;
            for (e = this.parsed.length, this.parsed.push({
                array_index: e,
                group: !0,
                label: this.escapeExpression(t.label),
                title: t.title ? t.title : void 0,
                children: 0,
                disabled: t.disabled,
                classes: t.className
            }), o = t.childNodes, a = [], s = 0, n = o.length; s < n; s++) i = o[s], a.push(this.add_option(i, e, t.disabled));
                return a
            }, t.prototype.add_option = function(t, e, i) {
                if ("OPTION" === t.nodeName.toUpperCase()) return "" !== t.text ? (null != e && (this.parsed[e].children += 1), this.parsed.push({
                    array_index: this.parsed.length,
                    options_index: this.options_index,
                    value: t.value,
                    text: t.text,
                    html: t.innerHTML,
                    title: t.title ? t.title : void 0,
                    selected: t.selected,
                    disabled: !0 === i ? i : t.disabled,
                    group_array_index: e,
                    group_label: null != e ? this.parsed[e].label : null,
                    classes: t.className,
                    style: t.style.cssText
                })) : this.parsed.push({
                    array_index: this.parsed.length,
                    options_index: this.options_index,
                    empty: !0
                }), this.options_index += 1
            }, t.prototype.escapeExpression = function(t) {
                var e, i;
                return null == t || !1 === t ? "" : /[\&\<\>\"\'\`]/.test(t) ? (e = {
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#x27;",
                    "`": "&#x60;"
                }, i = /&(?!\w+;)|[\<\>\"\'\`]/g, t.replace(i, function(t) {
                    return e[t] || "&amp;"
                })) : t
            }, t
        }(), s.select_to_array = function(t) {
            var e, i, n, o, a;
            for (i = new s, a = t.childNodes, n = 0, o = a.length; n < o; n++) e = a[n], i.add_node(e);
                return i.parsed
        }, e = function() {
            function t(e, i) {
                this.form_field = e, this.options = null != i ? i : {}, this.label_click_handler = o(this.label_click_handler, this), t.browser_is_supported() && (this.is_multiple = this.form_field.multiple, this.set_default_text(), this.set_default_values(), this.setup(), this.set_up_html(), this.register_observers(), this.on_ready())
            }
            return t.prototype.set_default_values = function() {
                var t = this;
                return this.click_test_action = function(e) {
                    return t.test_active_click(e)
                }, this.activate_action = function(e) {
                    return t.activate_field(e)
                }, this.active_field = !1, this.mouse_on_container = !1, this.results_showing = !1, this.result_highlighted = null, this.is_rtl = this.options.rtl || /\bchosen-rtl\b/.test(this.form_field.className), this.allow_single_deselect = null != this.options.allow_single_deselect && null != this.form_field.options[0] && "" === this.form_field.options[0].text && this.options.allow_single_deselect, this.disable_search_threshold = this.options.disable_search_threshold || 0, this.disable_search = this.options.disable_search || !1, this.enable_split_word_search = null == this.options.enable_split_word_search || this.options.enable_split_word_search, this.group_search = null == this.options.group_search || this.options.group_search, this.search_contains = this.options.search_contains || !1, this.single_backstroke_delete = null == this.options.single_backstroke_delete || this.options.single_backstroke_delete, this.max_selected_options = this.options.max_selected_options || 1 / 0, this.inherit_select_classes = this.options.inherit_select_classes || !1, this.display_selected_options = null == this.options.display_selected_options || this.options.display_selected_options, this.display_disabled_options = null == this.options.display_disabled_options || this.options.display_disabled_options, this.include_group_label_in_selected = this.options.include_group_label_in_selected || !1, this.max_shown_results = this.options.max_shown_results || Number.POSITIVE_INFINITY, this.case_sensitive_search = this.options.case_sensitive_search || !1, this.hide_results_on_select = null == this.options.hide_results_on_select || this.options.hide_results_on_select
            }, t.prototype.set_default_text = function() {
                return this.form_field.getAttribute("data-placeholder") ? this.default_text = this.form_field.getAttribute("data-placeholder") : this.is_multiple ? this.default_text = this.options.placeholder_text_multiple || this.options.placeholder_text || t.default_multiple_text : this.default_text = this.options.placeholder_text_single || this.options.placeholder_text || t.default_single_text, this.default_text = this.escape_html(this.default_text), this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || t.default_no_result_text
            }, t.prototype.choice_label = function(t) {
                return this.include_group_label_in_selected && null != t.group_label ? "<b class='group-name'>" + t.group_label + "</b>" + t.html : t.html
            }, t.prototype.mouse_enter = function() {
                return this.mouse_on_container = !0
            }, t.prototype.mouse_leave = function() {
                return this.mouse_on_container = !1
            }, t.prototype.input_focus = function(t) {
                var e = this;
                if (this.is_multiple) {
                    if (!this.active_field) return setTimeout(function() {
                        return e.container_mousedown()
                    }, 50)
                } else if (!this.active_field) return this.activate_field()
            }, t.prototype.input_blur = function(t) {
                var e = this;
                if (!this.mouse_on_container) return this.active_field = !1, setTimeout(function() {
                    return e.blur_test()
                }, 100)
            }, t.prototype.label_click_handler = function(t) {
                return this.is_multiple ? this.container_mousedown(t) : this.activate_field()
            }, t.prototype.results_option_build = function(t) {
                var e, i, s, n, o, a, r;
                for (e = "", n = 0, r = this.results_data, o = 0, a = r.length; o < a && (i = r[o], s = "", s = i.group ? this.result_add_group(i) : this.result_add_option(i), "" !== s && (n++, e += s), (null != t ? t.first : void 0) && (i.selected && this.is_multiple ? this.choice_build(i) : i.selected && !this.is_multiple && this.single_set_selected_text(this.choice_label(i))), !(n >= this.max_shown_results)); o++);
                    return e
            }, t.prototype.result_add_option = function(t) {
                var e, i;
                return t.search_match && this.include_option_in_results(t) ? (e = [], t.disabled || t.selected && this.is_multiple || e.push("active-result"), !t.disabled || t.selected && this.is_multiple || e.push("disabled-result"), t.selected && e.push("result-selected"), null != t.group_array_index && e.push("group-option"), "" !== t.classes && e.push(t.classes), i = document.createElement("li"), i.className = e.join(" "), i.style.cssText = t.style, i.setAttribute("data-option-array-index", t.array_index), i.innerHTML = t.search_text, t.title && (i.title = t.title), this.outerHTML(i)) : ""
            }, t.prototype.result_add_group = function(t) {
                var e, i;
                return (t.search_match || t.group_match) && t.active_options > 0 ? (e = [], e.push("group-result"), t.classes && e.push(t.classes), i = document.createElement("li"), i.className = e.join(" "), i.innerHTML = t.search_text, t.title && (i.title = t.title), this.outerHTML(i)) : ""
            }, t.prototype.results_update_field = function() {
                if (this.set_default_text(), this.is_multiple || this.results_reset_cleanup(), this.result_clear_highlight(), this.results_build(), this.results_showing) return this.winnow_results()
            }, t.prototype.reset_single_select_options = function() {
                var t, e, i, s, n;
                for (s = this.results_data, n = [], e = 0, i = s.length; e < i; e++) t = s[e], t.selected ? n.push(t.selected = !1) : n.push(void 0);
                    return n
            }, t.prototype.results_toggle = function() {
                return this.results_showing ? this.results_hide() : this.results_show()
            }, t.prototype.results_search = function(t) {
                return this.results_showing ? this.winnow_results() : this.results_show()
            }, t.prototype.winnow_results = function() {
                var t, e, i, s, n, o, a, r, l, h, c, u;
                for (this.no_results_clear(), n = 0, a = this.get_search_text(), t = a.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), s = this.get_search_regex(t), e = this.get_highlight_regex(t), u = this.results_data, h = 0, c = u.length; h < c; h++) i = u[h], i.search_match = !1, o = null, this.include_option_in_results(i) && (i.group && (i.group_match = !1, i.active_options = 0), null != i.group_array_index && this.results_data[i.group_array_index] && (o = this.results_data[i.group_array_index], 0 === o.active_options && o.search_match && (n += 1), o.active_options += 1), i.search_text = i.group ? i.label : i.html, i.group && !this.group_search || (i.search_match = this.search_string_match(i.search_text, s), i.search_match && !i.group && (n += 1), i.search_match ? (a.length && (r = i.search_text.search(e), l = i.search_text.substr(0, r + a.length) + "</em>" + i.search_text.substr(r + a.length), i.search_text = l.substr(0, r) + "<em>" + l.substr(r)), null != o && (o.group_match = !0)) : null != i.group_array_index && this.results_data[i.group_array_index].search_match && (i.search_match = !0)));
                    return this.result_clear_highlight(), n < 1 && a.length ? (this.update_results_content(""), this.no_results(a)) : (this.update_results_content(this.results_option_build()), this.winnow_results_set_highlight())
            }, t.prototype.get_search_regex = function(t) {
                var e, i;
                return e = this.search_contains ? "" : "^", i = this.case_sensitive_search ? "" : "i", new RegExp(e + t, i)
            }, t.prototype.get_highlight_regex = function(t) {
                var e, i;
                return e = this.search_contains ? "" : "\\b", i = this.case_sensitive_search ? "" : "i", new RegExp(e + t, i)
            }, t.prototype.search_string_match = function(t, e) {
                var i, s, n, o;
                if (e.test(t)) return !0;
                if (this.enable_split_word_search && (t.indexOf(" ") >= 0 || 0 === t.indexOf("[")) && (s = t.replace(/\[|\]/g, "").split(" "), s.length))
                    for (n = 0, o = s.length; n < o; n++)
                        if (i = s[n], e.test(i)) return !0
                    }, t.prototype.choices_count = function() {
                        var t, e, i, s;
                        if (null != this.selected_option_count) return this.selected_option_count;
                        for (this.selected_option_count = 0, s = this.form_field.options, e = 0, i = s.length; e < i; e++) t = s[e], t.selected && (this.selected_option_count += 1);
                            return this.selected_option_count
                    }, t.prototype.choices_click = function(t) {
                        if (t.preventDefault(), this.activate_field(), !this.results_showing && !this.is_disabled) return this.results_show()
                    }, t.prototype.keydown_checker = function(t) {
                        var e, i;
                        switch (e = null != (i = t.which) ? i : t.keyCode, this.search_field_scale(), 8 !== e && this.pending_backstroke && this.clear_backstroke(), e) {
                            case 8:
                            this.backstroke_length = this.get_search_field_value().length;
                            break;
                            case 9:
                            this.results_showing && !this.is_multiple && this.result_select(t), this.mouse_on_container = !1;
                            break;
                            case 13:
                            case 27:
                            this.results_showing && t.preventDefault();
                            break;
                            case 32:
                            this.disable_search && t.preventDefault();
                            break;
                            case 38:
                            t.preventDefault(), this.keyup_arrow();
                            break;
                            case 40:
                            t.preventDefault(), this.keydown_arrow()
                        }
                    }, t.prototype.keyup_checker = function(t) {
                        var e, i;
                        switch (e = null != (i = t.which) ? i : t.keyCode, this.search_field_scale(), e) {
                            case 8:
                            this.is_multiple && this.backstroke_length < 1 && this.choices_count() > 0 ? this.keydown_backstroke() : this.pending_backstroke || (this.result_clear_highlight(), this.results_search());
                            break;
                            case 13:
                            t.preventDefault(), this.results_showing && this.result_select(t);
                            break;
                            case 27:
                            this.results_showing && this.results_hide();
                            break;
                            case 9:
                            case 16:
                            case 17:
                            case 18:
                            case 38:
                            case 40:
                            case 91:
                            break;
                            default:
                            this.results_search()
                        }
                    }, t.prototype.clipboard_event_checker = function(t) {
                        var e = this;
                        if (!this.is_disabled) return setTimeout(function() {
                            return e.results_search()
                        }, 50)
                    }, t.prototype.container_width = function() {
                        return null != this.options.width ? this.options.width : this.form_field.offsetWidth + "px"
                    }, t.prototype.include_option_in_results = function(t) {
                        return !(this.is_multiple && !this.display_selected_options && t.selected) && (!(!this.display_disabled_options && t.disabled) && !t.empty)
                    }, t.prototype.search_results_touchstart = function(t) {
                        return this.touch_started = !0, this.search_results_mouseover(t)
                    }, t.prototype.search_results_touchmove = function(t) {
                        return this.touch_started = !1, this.search_results_mouseout(t)
                    }, t.prototype.search_results_touchend = function(t) {
                        if (this.touch_started) return this.search_results_mouseup(t)
                    }, t.prototype.outerHTML = function(t) {
                        var e;
                        return t.outerHTML ? t.outerHTML : (e = document.createElement("div"), e.appendChild(t), e.innerHTML)
                    }, t.prototype.get_single_html = function() {
                        return '<a class="chosen-single chosen-default">\n  <span>' + this.default_text + '</span>\n  <div><b></b></div>\n</a>\n<div class="chosen-drop">\n  <div class="chosen-search">\n    <input class="chosen-search-input" type="text" autocomplete="off" />\n  </div>\n  <ul class="chosen-results"></ul>\n</div>'
                    }, t.prototype.get_multi_html = function() {
                        return '<ul class="chosen-choices">\n  <li class="search-field">\n    <input class="chosen-search-input" type="text" autocomplete="off" value="' + this.default_text + '" />\n  </li>\n</ul>\n<div class="chosen-drop">\n  <ul class="chosen-results"></ul>\n</div>'
                    }, t.prototype.get_no_results_html = function(t) {
                        return '<li class="no-results">\n  ' + this.results_none_found + " <span>" + t + "</span>\n</li>"
                    }, t.browser_is_supported = function() {
                        return "Microsoft Internet Explorer" === window.navigator.appName ? document.documentMode >= 8 : !(/iP(od|hone)/i.test(window.navigator.userAgent) || /IEMobile/i.test(window.navigator.userAgent) || /Windows Phone/i.test(window.navigator.userAgent) || /BlackBerry/i.test(window.navigator.userAgent) || /BB10/i.test(window.navigator.userAgent) || /Android.*Mobile/i.test(window.navigator.userAgent))
                    }, t.default_multiple_text = "Select Some Options", t.default_single_text = "Select an Option", t.default_no_result_text = "No results match", t
                }(), t = jQuery, t.fn.extend({
                    chosen: function(s) {
                        return e.browser_is_supported() ? this.each(function(e) {
                            var n, o;
                            if (n = t(this), o = n.data("chosen"), "destroy" === s) return void(o instanceof i && o.destroy());
                            o instanceof i || n.data("chosen", new i(this, s))
                        }) : this
                    }
                }), i = function(e) {
                    function i() {
                        return n = i.__super__.constructor.apply(this, arguments)
                    }
                    return r(i, e), i.prototype.setup = function() {
                        return this.form_field_jq = t(this.form_field), this.current_selectedIndex = this.form_field.selectedIndex
                    }, i.prototype.set_up_html = function() {
                        var e, i;
                        return e = ["chosen-container"], e.push("chosen-container-" + (this.is_multiple ? "multi" : "single")), this.inherit_select_classes && this.form_field.className && e.push(this.form_field.className), this.is_rtl && e.push("chosen-rtl"), i = {
                            class: e.join(" "),
                            title: this.form_field.title
                        }, this.form_field.id.length && (i.id = this.form_field.id.replace(/[^\w]/g, "_") + "_chosen"), this.container = t("<div />", i), this.container.width(this.container_width()), this.is_multiple ? this.container.html(this.get_multi_html()) : this.container.html(this.get_single_html()), this.form_field_jq.hide().after(this.container), this.dropdown = this.container.find("div.chosen-drop").first(), this.search_field = this.container.find("input").first(), this.search_results = this.container.find("ul.chosen-results").first(), this.search_field_scale(), this.search_no_results = this.container.find("li.no-results").first(), this.is_multiple ? (this.search_choices = this.container.find("ul.chosen-choices").first(), this.search_container = this.container.find("li.search-field").first()) : (this.search_container = this.container.find("div.chosen-search").first(), this.selected_item = this.container.find(".chosen-single").first()), this.results_build(), this.set_tab_index(), this.set_label_behavior()
                    }, i.prototype.on_ready = function() {
                        return this.form_field_jq.trigger("chosen:ready", {
                            chosen: this
                        })
                    }, i.prototype.register_observers = function() {
                        var t = this;
                        return this.container.bind("touchstart.chosen", function(e) {
                            t.container_mousedown(e)
                        }), this.container.bind("touchend.chosen", function(e) {
                            t.container_mouseup(e)
                        }), this.container.bind("mousedown.chosen", function(e) {
                            t.container_mousedown(e)
                        }), this.container.bind("mouseup.chosen", function(e) {
                            t.container_mouseup(e)
                        }), this.container.bind("mouseenter.chosen", function(e) {
                            t.mouse_enter(e)
                        }), this.container.bind("mouseleave.chosen", function(e) {
                            t.mouse_leave(e)
                        }), this.search_results.bind("mouseup.chosen", function(e) {
                            t.search_results_mouseup(e)
                        }), this.search_results.bind("mouseover.chosen", function(e) {
                            t.search_results_mouseover(e)
                        }), this.search_results.bind("mouseout.chosen", function(e) {
                            t.search_results_mouseout(e)
                        }), this.search_results.bind("mousewheel.chosen DOMMouseScroll.chosen", function(e) {
                            t.search_results_mousewheel(e)
                        }), this.search_results.bind("touchstart.chosen", function(e) {
                            t.search_results_touchstart(e)
                        }), this.search_results.bind("touchmove.chosen", function(e) {
                            t.search_results_touchmove(e)
                        }), this.search_results.bind("touchend.chosen", function(e) {
                            t.search_results_touchend(e)
                        }), this.form_field_jq.bind("chosen:updated.chosen", function(e) {
                            t.results_update_field(e)
                        }), this.form_field_jq.bind("chosen:activate.chosen", function(e) {
                            t.activate_field(e)
                        }), this.form_field_jq.bind("chosen:open.chosen", function(e) {
                            t.container_mousedown(e)
                        }), this.form_field_jq.bind("chosen:close.chosen", function(e) {
                            t.close_field(e)
                        }), this.search_field.bind("blur.chosen", function(e) {
                            t.input_blur(e)
                        }), this.search_field.bind("keyup.chosen", function(e) {
                            t.keyup_checker(e)
                        }), this.search_field.bind("keydown.chosen", function(e) {
                            t.keydown_checker(e)
                        }), this.search_field.bind("focus.chosen", function(e) {
                            t.input_focus(e)
                        }), this.search_field.bind("cut.chosen", function(e) {
                            t.clipboard_event_checker(e)
                        }), this.search_field.bind("paste.chosen", function(e) {
                            t.clipboard_event_checker(e)
                        }), this.is_multiple ? this.search_choices.bind("click.chosen", function(e) {
                            t.choices_click(e)
                        }) : this.container.bind("click.chosen", function(t) {
                            t.preventDefault()
                        })
                    }, i.prototype.destroy = function() {
                        return t(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action), this.form_field_label.length > 0 && this.form_field_label.unbind("click.chosen"), this.search_field[0].tabIndex && (this.form_field_jq[0].tabIndex = this.search_field[0].tabIndex), this.container.remove(), this.form_field_jq.removeData("chosen"), this.form_field_jq.show()
                    }, i.prototype.search_field_disabled = function() {
                        return this.is_disabled = this.form_field.disabled || this.form_field_jq.parents("fieldset").is(":disabled"), this.container.toggleClass("chosen-disabled", this.is_disabled), this.search_field[0].disabled = this.is_disabled, this.is_multiple || this.selected_item.unbind("focus.chosen", this.activate_field), this.is_disabled ? this.close_field() : this.is_multiple ? void 0 : this.selected_item.bind("focus.chosen", this.activate_field)
                    }, i.prototype.container_mousedown = function(e) {
                        var i;
                        if (!this.is_disabled) return !e || "mousedown" !== (i = e.type) && "touchstart" !== i || this.results_showing || e.preventDefault(), null != e && t(e.target).hasClass("search-choice-close") ? void 0 : (this.active_field ? this.is_multiple || !e || t(e.target)[0] !== this.selected_item[0] && !t(e.target).parents("a.chosen-single").length || (e.preventDefault(), this.results_toggle()) : (this.is_multiple && this.search_field.val(""), t(this.container[0].ownerDocument).bind("click.chosen", this.click_test_action), this.results_show()), this.activate_field())
                    },
                i.prototype.container_mouseup = function(t) {
                    if ("ABBR" === t.target.nodeName && !this.is_disabled) return this.results_reset(t)
                }, i.prototype.search_results_mousewheel = function(t) {
                    var e;
                    if (t.originalEvent && (e = t.originalEvent.deltaY || -t.originalEvent.wheelDelta || t.originalEvent.detail), null != e) return t.preventDefault(), "DOMMouseScroll" === t.type && (e *= 40), this.search_results.scrollTop(e + this.search_results.scrollTop())
                }, i.prototype.blur_test = function(t) {
                    if (!this.active_field && this.container.hasClass("chosen-container-active")) return this.close_field()
                }, i.prototype.close_field = function() {
                    return t(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action), this.active_field = !1, this.results_hide(), this.container.removeClass("chosen-container-active"), this.clear_backstroke(), this.show_search_field_default(), this.search_field_scale(), this.search_field.blur()
                }, i.prototype.activate_field = function() {
                    if (!this.is_disabled) return this.container.addClass("chosen-container-active"), this.active_field = !0, this.search_field.val(this.search_field.val()), this.search_field.focus()
                }, i.prototype.test_active_click = function(e) {
                    var i;
                    return i = t(e.target).closest(".chosen-container"), i.length && this.container[0] === i[0] ? this.active_field = !0 : this.close_field()
                }, i.prototype.results_build = function() {
                    return this.parsing = !0, this.selected_option_count = null, this.results_data = s.select_to_array(this.form_field), this.is_multiple ? this.search_choices.find("li.search-choice").remove() : this.is_multiple || (this.single_set_selected_text(), this.disable_search || this.form_field.options.length <= this.disable_search_threshold ? (this.search_field[0].readOnly = !0, this.container.addClass("chosen-container-single-nosearch")) : (this.search_field[0].readOnly = !1, this.container.removeClass("chosen-container-single-nosearch"))), this.update_results_content(this.results_option_build({
                        first: !0
                    })), this.search_field_disabled(), this.show_search_field_default(), this.search_field_scale(), this.parsing = !1
                }, i.prototype.result_do_highlight = function(t) {
                    var e, i, s, n, o;
                    if (t.length) {
                        if (this.result_clear_highlight(), this.result_highlight = t, this.result_highlight.addClass("highlighted"), s = parseInt(this.search_results.css("maxHeight"), 10), o = this.search_results.scrollTop(), n = s + o, i = this.result_highlight.position().top + this.search_results.scrollTop(), (e = i + this.result_highlight.outerHeight()) >= n) return this.search_results.scrollTop(e - s > 0 ? e - s : 0);
                        if (i < o) return this.search_results.scrollTop(i)
                    }
            }, i.prototype.result_clear_highlight = function() {
                return this.result_highlight && this.result_highlight.removeClass("highlighted"), this.result_highlight = null
            }, i.prototype.results_show = function() {
                return this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {
                    chosen: this
                }), !1) : (this.container.addClass("chosen-with-drop"), this.results_showing = !0, this.search_field.focus(), this.search_field.val(this.get_search_field_value()), this.winnow_results(), this.form_field_jq.trigger("chosen:showing_dropdown", {
                    chosen: this
                }))
            }, i.prototype.update_results_content = function(t) {
                return this.search_results.html(t)
            }, i.prototype.results_hide = function() {
                return this.results_showing && (this.result_clear_highlight(), this.container.removeClass("chosen-with-drop"), this.form_field_jq.trigger("chosen:hiding_dropdown", {
                    chosen: this
                })), this.results_showing = !1
            }, i.prototype.set_tab_index = function(t) {
                var e;
                if (this.form_field.tabIndex) return e = this.form_field.tabIndex, this.form_field.tabIndex = -1, this.search_field[0].tabIndex = e
            }, i.prototype.set_label_behavior = function() {
                if (this.form_field_label = this.form_field_jq.parents("label"), !this.form_field_label.length && this.form_field.id.length && (this.form_field_label = t("label[for='" + this.form_field.id + "']")), this.form_field_label.length > 0) return this.form_field_label.bind("click.chosen", this.label_click_handler)
            }, i.prototype.show_search_field_default = function() {
                return this.is_multiple && this.choices_count() < 1 && !this.active_field ? (this.search_field.val(this.default_text), this.search_field.addClass("default")) : (this.search_field.val(""), this.search_field.removeClass("default"))
            }, i.prototype.search_results_mouseup = function(e) {
                var i;
                if (i = t(e.target).hasClass("active-result") ? t(e.target) : t(e.target).parents(".active-result").first(), i.length) return this.result_highlight = i, this.result_select(e), this.search_field.focus()
            }, i.prototype.search_results_mouseover = function(e) {
                var i;
                if (i = t(e.target).hasClass("active-result") ? t(e.target) : t(e.target).parents(".active-result").first()) return this.result_do_highlight(i)
            }, i.prototype.search_results_mouseout = function(e) {
                if (t(e.target).hasClass("active-result")) return this.result_clear_highlight()
            }, i.prototype.choice_build = function(e) {
                var i, s, n = this;
                return i = t("<li />", {
                    class: "search-choice"
                }).html("<span>" + this.choice_label(e) + "</span>"), e.disabled ? i.addClass("search-choice-disabled") : (s = t("<a />", {
                    class: "search-choice-close",
                    "data-option-array-index": e.array_index
                }), s.bind("click.chosen", function(t) {
                    return n.choice_destroy_link_click(t)
                }), i.append(s)), this.search_container.before(i)
            }, i.prototype.choice_destroy_link_click = function(e) {
                if (e.preventDefault(), e.stopPropagation(), !this.is_disabled) return this.choice_destroy(t(e.target))
            }, i.prototype.choice_destroy = function(t) {
                if (this.result_deselect(t[0].getAttribute("data-option-array-index"))) return this.active_field ? this.search_field.focus() : this.show_search_field_default(), this.is_multiple && this.choices_count() > 0 && this.get_search_field_value().length < 1 && this.results_hide(), t.parents("li").first().remove(), this.search_field_scale()
            }, i.prototype.results_reset = function() {
                if (this.reset_single_select_options(), this.form_field.options[0].selected = !0, this.single_set_selected_text(), this.show_search_field_default(), this.results_reset_cleanup(), this.trigger_form_field_change(), this.active_field) return this.results_hide()
            }, i.prototype.results_reset_cleanup = function() {
                return this.current_selectedIndex = this.form_field.selectedIndex, this.selected_item.find("abbr").remove()
            }, i.prototype.result_select = function(t) {
                var e, i;
                if (this.result_highlight) return e = this.result_highlight, this.result_clear_highlight(), this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {
                    chosen: this
                }), !1) : (this.is_multiple ? e.removeClass("active-result") : this.reset_single_select_options(), e.addClass("result-selected"), i = this.results_data[e[0].getAttribute("data-option-array-index")], i.selected = !0, this.form_field.options[i.options_index].selected = !0, this.selected_option_count = null, this.is_multiple ? this.choice_build(i) : this.single_set_selected_text(this.choice_label(i)), this.is_multiple && (!this.hide_results_on_select || t.metaKey || t.ctrlKey) || (this.results_hide(), this.show_search_field_default()), (this.is_multiple || this.form_field.selectedIndex !== this.current_selectedIndex) && this.trigger_form_field_change({
                    selected: this.form_field.options[i.options_index].value
                }), this.current_selectedIndex = this.form_field.selectedIndex, t.preventDefault(), this.search_field_scale())
            }, i.prototype.single_set_selected_text = function(t) {
                return null == t && (t = this.default_text), t === this.default_text ? this.selected_item.addClass("chosen-default") : (this.single_deselect_control_build(), this.selected_item.removeClass("chosen-default")), this.selected_item.find("span").html(t)
            }, i.prototype.result_deselect = function(t) {
                var e;
                return e = this.results_data[t], !this.form_field.options[e.options_index].disabled && (e.selected = !1, this.form_field.options[e.options_index].selected = !1, this.selected_option_count = null, this.result_clear_highlight(), this.results_showing && this.winnow_results(), this.trigger_form_field_change({
                    deselected: this.form_field.options[e.options_index].value
                }), this.search_field_scale(), !0)
            }, i.prototype.single_deselect_control_build = function() {
                if (this.allow_single_deselect) return this.selected_item.find("abbr").length || this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>'), this.selected_item.addClass("chosen-single-with-deselect")
            }, i.prototype.get_search_field_value = function() {
                return this.search_field.val()
            }, i.prototype.get_search_text = function() {
                return this.escape_html(t.trim(this.get_search_field_value()))
            }, i.prototype.escape_html = function(e) {
                return t("<div/>").text(e).html()
            }, i.prototype.winnow_results_set_highlight = function() {
                var t, e;
                if (e = this.is_multiple ? [] : this.search_results.find(".result-selected.active-result"), null != (t = e.length ? e.first() : this.search_results.find(".active-result").first())) return this.result_do_highlight(t)
            }, i.prototype.no_results = function(t) {
                var e;
                return e = this.get_no_results_html(t), this.search_results.append(e), this.form_field_jq.trigger("chosen:no_results", {
                    chosen: this
                })
            }, i.prototype.no_results_clear = function() {
                return this.search_results.find(".no-results").remove()
            }, i.prototype.keydown_arrow = function() {
                var t;
                return this.results_showing && this.result_highlight ? (t = this.result_highlight.nextAll("li.active-result").first()) ? this.result_do_highlight(t) : void 0 : this.results_show()
            }, i.prototype.keyup_arrow = function() {
                var t;
                return this.results_showing || this.is_multiple ? this.result_highlight ? (t = this.result_highlight.prevAll("li.active-result"), t.length ? this.result_do_highlight(t.first()) : (this.choices_count() > 0 && this.results_hide(), this.result_clear_highlight())) : void 0 : this.results_show()
            }, i.prototype.keydown_backstroke = function() {
                var t;
                return this.pending_backstroke ? (this.choice_destroy(this.pending_backstroke.find("a").first()), this.clear_backstroke()) : (t = this.search_container.siblings("li.search-choice").last(), t.length && !t.hasClass("search-choice-disabled") ? (this.pending_backstroke = t, this.single_backstroke_delete ? this.keydown_backstroke() : this.pending_backstroke.addClass("search-choice-focus")) : void 0)
            }, i.prototype.clear_backstroke = function() {
                return this.pending_backstroke && this.pending_backstroke.removeClass("search-choice-focus"), this.pending_backstroke = null
            }, i.prototype.search_field_scale = function() {
                var e, i, s, n, o, a, r, l;
                if (this.is_multiple) {
                    for (n = {
                        position: "absolute",
                        left: "-1000px",
                        top: "-1000px",
                        display: "none",
                        whiteSpace: "pre"
                    }, o = ["fontSize", "fontStyle", "fontWeight", "fontFamily", "lineHeight", "textTransform", "letterSpacing"], r = 0, l = o.length; r < l; r++) s = o[r], n[s] = this.search_field.css(s);
                        return i = t("<div />").css(n), i.text(this.get_search_field_value()), t("body").append(i), a = i.width() + 25, i.remove(), e = this.container.outerWidth(), a = Math.min(e - 10, a), this.search_field.width(a)
                    }
                }, i.prototype.trigger_form_field_change = function(t) {
                    return this.form_field_jq.trigger("input", t), this.form_field_jq.trigger("change", t)
                }, i
            }(e)
        }.call(this),
        function(t) {
            "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
        }(function(t) {
            function e(t) {
                for (var e = t.css("visibility");
                    "inherit" === e;) t = t.parent(), e = t.css("visibility");
                    return "hidden" !== e
            }

            function i(t) {
                for (var e, i; t.length && t[0] !== document;) {
                    if (("absolute" === (e = t.css("position")) || "relative" === e || "fixed" === e) && (i = parseInt(t.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
                    t = t.parent()
                }
                return 0
            }

            function s() {
                this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
                    closeText: "Done",
                    prevText: "Prev",
                    nextText: "Next",
                    currentText: "Today",
                    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                    weekHeader: "Wk",
                    dateFormat: "mm/dd/yy",
                    firstDay: 0,
                    isRTL: !1,
                    showMonthAfterYear: !1,
                    yearSuffix: ""
                }, this._defaults = {
                    showOn: "focus",
                    showAnim: "fadeIn",
                    showOptions: {},
                    defaultDate: null,
                    appendText: "",
                    buttonText: "...",
                    buttonImage: "",
                    buttonImageOnly: !1,
                    hideIfNoPrevNext: !1,
                    navigationAsDateFormat: !1,
                    gotoCurrent: !1,
                    changeMonth: !1,
                    changeYear: !1,
                    yearRange: "c-10:c+10",
                    showOtherMonths: !1,
                    selectOtherMonths: !1,
                    showWeek: !1,
                    calculateWeek: this.iso8601Week,
                    shortYearCutoff: "+10",
                    minDate: null,
                    maxDate: null,
                    duration: "fast",
                    beforeShowDay: null,
                    beforeShow: null,
                    onSelect: null,
                    onChangeMonthYear: null,
                    onClose: null,
                    numberOfMonths: 1,
                    showCurrentAtPos: 0,
                    stepMonths: 1,
                    stepBigMonths: 12,
                    altField: "",
                    altFormat: "",
                    constrainInput: !0,
                    showButtonPanel: !1,
                    autoSize: !1,
                    disabled: !1
                }, t.extend(this._defaults, this.regional[""]), this.regional.en = t.extend(!0, {}, this.regional[""]), this.regional["en-US"] = t.extend(!0, {}, this.regional.en), this.dpDiv = n(t("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
            }

            function n(e) {
                var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
                return e.on("mouseout", i, function() {
                    t(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).removeClass("ui-datepicker-next-hover")
                }).on("mouseover", i, o)
            }

            function o() {
                t.datepicker._isDisabledDatepicker(d.inline ? d.dpDiv.parent()[0] : d.input[0]) || (t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), t(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).addClass("ui-datepicker-next-hover"))
            }

            function a(e, i) {
                t.extend(e, i);
                for (var s in i) null == i[s] && (e[s] = i[s]);
                    return e
            }

            function r(t) {
                return function() {
                    var e = this.element.val();
                    t.apply(this, arguments), this._refresh(), e !== this.element.val() && this._trigger("change")
                }
            }
            t.ui = t.ui || {};
            var l = (t.ui.version = "1.12.1", 0),
            h = Array.prototype.slice;
            t.cleanData = function(e) {
                return function(i) {
                    var s, n, o;
                    for (o = 0; null != (n = i[o]); o++) try {
                        s = t._data(n, "events"), s && s.remove && t(n).triggerHandler("remove")
                    } catch (t) {}
                    e(i)
                }
            }(t.cleanData), t.widget = function(e, i, s) {
                var n, o, a, r = {},
                l = e.split(".")[0];
                e = e.split(".")[1];
                var h = l + "-" + e;
                return s || (s = i, i = t.Widget), t.isArray(s) && (s = t.extend.apply(null, [{}].concat(s))), t.expr[":"][h.toLowerCase()] = function(e) {
                    return !!t.data(e, h)
                }, t[l] = t[l] || {}, n = t[l][e], o = t[l][e] = function(t, e) {
                    if (!this._createWidget) return new o(t, e);
                    arguments.length && this._createWidget(t, e)
                }, t.extend(o, n, {
                    version: s.version,
                    _proto: t.extend({}, s),
                    _childConstructors: []
                }), a = new i, a.options = t.widget.extend({}, a.options), t.each(s, function(e, s) {
                    if (!t.isFunction(s)) return void(r[e] = s);
                    r[e] = function() {
                        function t() {
                            return i.prototype[e].apply(this, arguments)
                        }

                        function n(t) {
                            return i.prototype[e].apply(this, t)
                        }
                        return function() {
                            var e, i = this._super,
                            o = this._superApply;
                            return this._super = t, this._superApply = n, e = s.apply(this, arguments), this._super = i, this._superApply = o, e
                        }
                    }()
                }), o.prototype = t.widget.extend(a, {
                    widgetEventPrefix: n ? a.widgetEventPrefix || e : e
                }, r, {
                    constructor: o,
                    namespace: l,
                    widgetName: e,
                    widgetFullName: h
                }), n ? (t.each(n._childConstructors, function(e, i) {
                    var s = i.prototype;
                    t.widget(s.namespace + "." + s.widgetName, o, i._proto)
                }), delete n._childConstructors) : i._childConstructors.push(o), t.widget.bridge(e, o), o
            }, t.widget.extend = function(e) {
                for (var i, s, n = h.call(arguments, 1), o = 0, a = n.length; o < a; o++)
                    for (i in n[o]) s = n[o][i], n[o].hasOwnProperty(i) && void 0 !== s && (t.isPlainObject(s) ? e[i] = t.isPlainObject(e[i]) ? t.widget.extend({}, e[i], s) : t.widget.extend({}, s) : e[i] = s);
                        return e
                }, t.widget.bridge = function(e, i) {
                    var s = i.prototype.widgetFullName || e;
                    t.fn[e] = function(n) {
                        var o = "string" == typeof n,
                        a = h.call(arguments, 1),
                        r = this;
                        return o ? this.length || "instance" !== n ? this.each(function() {
                            var i, o = t.data(this, s);
                            return "instance" === n ? (r = o, !1) : o ? t.isFunction(o[n]) && "_" !== n.charAt(0) ? (i = o[n].apply(o, a), i !== o && void 0 !== i ? (r = i && i.jquery ? r.pushStack(i.get()) : i, !1) : void 0) : t.error("no such method '" + n + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + n + "'")
                        }) : r = void 0 : (a.length && (n = t.widget.extend.apply(null, [n].concat(a))), this.each(function() {
                            var e = t.data(this, s);
                            e ? (e.option(n || {}), e._init && e._init()) : t.data(this, s, new i(n, this))
                        })), r
                    }
                }, t.Widget = function() {}, t.Widget._childConstructors = [], t.Widget.prototype = {
                    widgetName: "widget",
                    widgetEventPrefix: "",
                    defaultElement: "<div>",
                    options: {
                        classes: {},
                        disabled: !1,
                        create: null
                    },
                    _createWidget: function(e, i) {
                        i = t(i || this.defaultElement || this)[0], this.element = t(i), this.uuid = l++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), this.classesElementLookup = {}, i !== this && (t.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                            remove: function(t) {
                                t.target === i && this.destroy()
                            }
                        }), this.document = t(i.style ? i.ownerDocument : i.document || i), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init()
                    },
                    _getCreateOptions: function() {
                        return {}
                    },
                    _getCreateEventData: t.noop,
                    _create: t.noop,
                    _init: t.noop,
                    destroy: function() {
                        var e = this;
                        this._destroy(), t.each(this.classesElementLookup, function(t, i) {
                            e._removeClass(i, t)
                        }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace)
                    },
                    _destroy: t.noop,
                    widget: function() {
                        return this.element
                    },
                    option: function(e, i) {
                        var s, n, o, a = e;
                        if (0 === arguments.length) return t.widget.extend({}, this.options);
                        if ("string" == typeof e)
                            if (a = {}, s = e.split("."), e = s.shift(), s.length) {
                                for (n = a[e] = t.widget.extend({}, this.options[e]), o = 0; o < s.length - 1; o++) n[s[o]] = n[s[o]] || {}, n = n[s[o]];
                                    if (e = s.pop(), 1 === arguments.length) return void 0 === n[e] ? null : n[e];
                                n[e] = i
                            } else {
                                if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
                                a[e] = i
                            }
                            return this._setOptions(a), this
                        },
                        _setOptions: function(t) {
                            var e;
                            for (e in t) this._setOption(e, t[e]);
                                return this
                        },
                        _setOption: function(t, e) {
                            return "classes" === t && this._setOptionClasses(e), this.options[t] = e, "disabled" === t && this._setOptionDisabled(e), this
                        },
                        _setOptionClasses: function(e) {
                            var i, s, n;
                            for (i in e) n = this.classesElementLookup[i], e[i] !== this.options.classes[i] && n && n.length && (s = t(n.get()), this._removeClass(n, i), s.addClass(this._classes({
                                element: s,
                                keys: i,
                                classes: e,
                                add: !0
                            })))
                        },
                        _setOptionDisabled: function(t) {
                            this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t), t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"))
                        },
                        enable: function() {
                            return this._setOptions({
                                disabled: !1
                            })
                        },
                        disable: function() {
                            return this._setOptions({
                                disabled: !0
                            })
                        },
                        _classes: function(e) {
                            function i(i, o) {
                                var a, r;
                                for (r = 0; r < i.length; r++) a = n.classesElementLookup[i[r]] || t(), a = t(e.add ? t.unique(a.get().concat(e.element.get())) : a.not(e.element).get()), n.classesElementLookup[i[r]] = a, s.push(i[r]), o && e.classes[i[r]] && s.push(e.classes[i[r]])
                            }
                        var s = [],
                        n = this;
                        return e = t.extend({
                            element: this.element,
                            classes: this.options.classes || {}
                        }, e), this._on(e.element, {
                            remove: "_untrackClassesElement"
                        }), e.keys && i(e.keys.match(/\S+/g) || [], !0), e.extra && i(e.extra.match(/\S+/g) || []), s.join(" ")
                    },
                    _untrackClassesElement: function(e) {
                        var i = this;
                        t.each(i.classesElementLookup, function(s, n) {
                            -1 !== t.inArray(e.target, n) && (i.classesElementLookup[s] = t(n.not(e.target).get()))
                        })
                    },
                    _removeClass: function(t, e, i) {
                        return this._toggleClass(t, e, i, !1)
                    },
                    _addClass: function(t, e, i) {
                        return this._toggleClass(t, e, i, !0)
                    },
                    _toggleClass: function(t, e, i, s) {
                        s = "boolean" == typeof s ? s : i;
                        var n = "string" == typeof t || null === t,
                        o = {
                            extra: n ? e : i,
                            keys: n ? t : e,
                            element: n ? this.element : t,
                            add: s
                        };
                        return o.element.toggleClass(this._classes(o), s), this
                    },
                    _on: function(e, i, s) {
                        var n, o = this;
                        "boolean" != typeof e && (s = i, i = e, e = !1), s ? (i = n = t(i), this.bindings = this.bindings.add(i)) : (s = i, i = this.element, n = this.widget()), t.each(s, function(s, a) {
                            function r() {
                                if (e || !0 !== o.options.disabled && !t(this).hasClass("ui-state-disabled")) return ("string" == typeof a ? o[a] : a).apply(o, arguments)
                            }
                        "string" != typeof a && (r.guid = a.guid = a.guid || r.guid || t.guid++);
                        var l = s.match(/^([\w:-]*)\s*(.*)$/),
                        h = l[1] + o.eventNamespace,
                        c = l[2];
                        c ? n.on(h, c, r) : i.on(h, r)
                    })
                    },
                    _off: function(e, i) {
                        i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.off(i).off(i), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get())
                    },
                    _delay: function(t, e) {
                        function i() {
                            return ("string" == typeof t ? s[t] : t).apply(s, arguments)
                        }
                        var s = this;
                        return setTimeout(i, e || 0)
                    },
                    _hoverable: function(e) {
                        this.hoverable = this.hoverable.add(e), this._on(e, {
                            mouseenter: function(e) {
                                this._addClass(t(e.currentTarget), null, "ui-state-hover")
                            },
                            mouseleave: function(e) {
                                this._removeClass(t(e.currentTarget), null, "ui-state-hover")
                            }
                        })
                    },
                    _focusable: function(e) {
                        this.focusable = this.focusable.add(e), this._on(e, {
                            focusin: function(e) {
                                this._addClass(t(e.currentTarget), null, "ui-state-focus")
                            },
                            focusout: function(e) {
                                this._removeClass(t(e.currentTarget), null, "ui-state-focus")
                            }
                        })
                    },
                    _trigger: function(e, i, s) {
                        var n, o, a = this.options[e];
                        if (s = s || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent)
                            for (n in o) n in i || (i[n] = o[n]);
                                return this.element.trigger(i, s), !(t.isFunction(a) && !1 === a.apply(this.element[0], [i].concat(s)) || i.isDefaultPrevented())
                        }
                    }, t.each({
                        show: "fadeIn",
                        hide: "fadeOut"
                    }, function(e, i) {
                        t.Widget.prototype["_" + e] = function(s, n, o) {
                            "string" == typeof n && (n = {
                                effect: n
                            });
                            var a, r = n ? !0 === n || "number" == typeof n ? i : n.effect || i : e;
                            n = n || {}, "number" == typeof n && (n = {
                                duration: n
                            }), a = !t.isEmptyObject(n), n.complete = o, n.delay && s.delay(n.delay), a && t.effects && t.effects.effect[r] ? s[e](n) : r !== e && s[r] ? s[r](n.duration, n.easing, o) : s.queue(function(i) {
                                t(this)[e](), o && o.call(s[0]), i()
                            })
                        }
                    });
                    t.widget;
                    ! function() {
                        function e(t, e, i) {
                            return [parseFloat(t[0]) * (u.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (u.test(t[1]) ? i / 100 : 1)]
                        }

                        function i(e, i) {
                            return parseInt(t.css(e, i), 10) || 0
                        }

                        function s(e) {
                            var i = e[0];
                            return 9 === i.nodeType ? {
                                width: e.width(),
                                height: e.height(),
                                offset: {
                                    top: 0,
                                    left: 0
                                }
                            } : t.isWindow(i) ? {
                                width: e.width(),
                                height: e.height(),
                                offset: {
                                    top: e.scrollTop(),
                                    left: e.scrollLeft()
                                }
                            } : i.preventDefault ? {
                                width: 0,
                                height: 0,
                                offset: {
                                    top: i.pageY,
                                    left: i.pageX
                                }
                            } : {
                                width: e.outerWidth(),
                                height: e.outerHeight(),
                                offset: e.offset()
                            }
                        }
                        var n, o = Math.max,
                        a = Math.abs,
                        r = /left|center|right/,
                        l = /top|center|bottom/,
                        h = /[\+\-]\d+(\.[\d]+)?%?/,
                        c = /^\w+/,
                        u = /%$/,
                        d = t.fn.position;
                        t.position = {
                            scrollbarWidth: function() {
                                if (void 0 !== n) return n;
                                var e, i, s = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                                o = s.children()[0];
                                return t("body").append(s), e = o.offsetWidth, s.css("overflow", "scroll"), i = o.offsetWidth, e === i && (i = s[0].clientWidth), s.remove(), n = e - i
                            },
                            getScrollInfo: function(e) {
                                var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
                                s = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
                                n = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth;
                                return {
                                    width: "scroll" === s || "auto" === s && e.height < e.element[0].scrollHeight ? t.position.scrollbarWidth() : 0,
                                    height: n ? t.position.scrollbarWidth() : 0
                                }
                            },
                            getWithinInfo: function(e) {
                                var i = t(e || window),
                                s = t.isWindow(i[0]),
                                n = !!i[0] && 9 === i[0].nodeType;
                                return {
                                    element: i,
                                    isWindow: s,
                                    isDocument: n,
                                    offset: s || n ? {
                                        left: 0,
                                        top: 0
                                    } : t(e).offset(),
                                    scrollLeft: i.scrollLeft(),
                                    scrollTop: i.scrollTop(),
                                    width: i.outerWidth(),
                                    height: i.outerHeight()
                                }
                            }
                        }, t.fn.position = function(n) {
                            if (!n || !n.of) return d.apply(this, arguments);
                            n = t.extend({}, n);
                            var u, p, f, g, m, v, _ = t(n.of),
                            b = t.position.getWithinInfo(n.within),
                            y = t.position.getScrollInfo(b),
                            x = (n.collision || "flip").split(" "),
                            w = {};
                            return v = s(_), _[0].preventDefault && (n.at = "left top"), p = v.width, f = v.height, g = v.offset, m = t.extend({}, g), t.each(["my", "at"], function() {
                                var t, e, i = (n[this] || "").split(" ");
                                1 === i.length && (i = r.test(i[0]) ? i.concat(["center"]) : l.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = r.test(i[0]) ? i[0] : "center", i[1] = l.test(i[1]) ? i[1] : "center", t = h.exec(i[0]), e = h.exec(i[1]), w[this] = [t ? t[0] : 0, e ? e[0] : 0], n[this] = [c.exec(i[0])[0], c.exec(i[1])[0]]
                            }), 1 === x.length && (x[1] = x[0]), "right" === n.at[0] ? m.left += p : "center" === n.at[0] && (m.left += p / 2), "bottom" === n.at[1] ? m.top += f : "center" === n.at[1] && (m.top += f / 2), u = e(w.at, p, f), m.left += u[0], m.top += u[1], this.each(function() {
                                var s, r, l = t(this),
                                h = l.outerWidth(),
                                c = l.outerHeight(),
                                d = i(this, "marginLeft"),
                                v = i(this, "marginTop"),
                                k = h + d + i(this, "marginRight") + y.width,
                                C = c + v + i(this, "marginBottom") + y.height,
                                D = t.extend({}, m),
                                T = e(w.my, l.outerWidth(), l.outerHeight());
                                "right" === n.my[0] ? D.left -= h : "center" === n.my[0] && (D.left -= h / 2), "bottom" === n.my[1] ? D.top -= c : "center" === n.my[1] && (D.top -= c / 2), D.left += T[0], D.top += T[1], s = {
                                    marginLeft: d,
                                    marginTop: v
                                }, t.each(["left", "top"], function(e, i) {
                                    t.ui.position[x[e]] && t.ui.position[x[e]][i](D, {
                                        targetWidth: p,
                                        targetHeight: f,
                                        elemWidth: h,
                                        elemHeight: c,
                                        collisionPosition: s,
                                        collisionWidth: k,
                                        collisionHeight: C,
                                        offset: [u[0] + T[0], u[1] + T[1]],
                                        my: n.my,
                                        at: n.at,
                                        within: b,
                                        elem: l
                                    })
                                }), n.using && (r = function(t) {
                                    var e = g.left - D.left,
                                    i = e + p - h,
                                    s = g.top - D.top,
                                    r = s + f - c,
                                    u = {
                                        target: {
                                            element: _,
                                            left: g.left,
                                            top: g.top,
                                            width: p,
                                            height: f
                                        },
                                        element: {
                                            element: l,
                                            left: D.left,
                                            top: D.top,
                                            width: h,
                                            height: c
                                        },
                                        horizontal: i < 0 ? "left" : e > 0 ? "right" : "center",
                                        vertical: r < 0 ? "top" : s > 0 ? "bottom" : "middle"
                                    };
                                    p < h && a(e + i) < p && (u.horizontal = "center"), f < c && a(s + r) < f && (u.vertical = "middle"), o(a(e), a(i)) > o(a(s), a(r)) ? u.important = "horizontal" : u.important = "vertical", n.using.call(this, t, u)
                                }), l.offset(t.extend(D, {
                                    using: r
                                }))
                            })
                        }, t.ui.position = {
                            fit: {
                                left: function(t, e) {
                                    var i, s = e.within,
                                    n = s.isWindow ? s.scrollLeft : s.offset.left,
                                    a = s.width,
                                    r = t.left - e.collisionPosition.marginLeft,
                                    l = n - r,
                                    h = r + e.collisionWidth - a - n;
                                    e.collisionWidth > a ? l > 0 && h <= 0 ? (i = t.left + l + e.collisionWidth - a - n, t.left += l - i) : t.left = h > 0 && l <= 0 ? n : l > h ? n + a - e.collisionWidth : n : l > 0 ? t.left += l : h > 0 ? t.left -= h : t.left = o(t.left - r, t.left)
                                },
                                top: function(t, e) {
                                    var i, s = e.within,
                                    n = s.isWindow ? s.scrollTop : s.offset.top,
                                    a = e.within.height,
                                    r = t.top - e.collisionPosition.marginTop,
                                    l = n - r,
                                    h = r + e.collisionHeight - a - n;
                                    e.collisionHeight > a ? l > 0 && h <= 0 ? (i = t.top + l + e.collisionHeight - a - n, t.top += l - i) : t.top = h > 0 && l <= 0 ? n : l > h ? n + a - e.collisionHeight : n : l > 0 ? t.top += l : h > 0 ? t.top -= h : t.top = o(t.top - r, t.top)
                                }
                            },
                            flip: {
                                left: function(t, e) {
                                    var i, s, n = e.within,
                                    o = n.offset.left + n.scrollLeft,
                                    r = n.width,
                                    l = n.isWindow ? n.scrollLeft : n.offset.left,
                                    h = t.left - e.collisionPosition.marginLeft,
                                    c = h - l,
                                    u = h + e.collisionWidth - r - l,
                                    d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
                                    p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
                                    f = -2 * e.offset[0];
                                    c < 0 ? ((i = t.left + d + p + f + e.collisionWidth - r - o) < 0 || i < a(c)) && (t.left += d + p + f) : u > 0 && ((s = t.left - e.collisionPosition.marginLeft + d + p + f - l) > 0 || a(s) < u) && (t.left += d + p + f)
                                },
                                top: function(t, e) {
                                    var i, s, n = e.within,
                                    o = n.offset.top + n.scrollTop,
                                    r = n.height,
                                    l = n.isWindow ? n.scrollTop : n.offset.top,
                                    h = t.top - e.collisionPosition.marginTop,
                                    c = h - l,
                                    u = h + e.collisionHeight - r - l,
                                    d = "top" === e.my[1],
                                    p = d ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
                                    f = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
                                    g = -2 * e.offset[1];
                                    c < 0 ? ((s = t.top + p + f + g + e.collisionHeight - r - o) < 0 || s < a(c)) && (t.top += p + f + g) : u > 0 && ((i = t.top - e.collisionPosition.marginTop + p + f + g - l) > 0 || a(i) < u) && (t.top += p + f + g)
                                }
                            },
                            flipfit: {
                                left: function() {
                                    t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments)
                                },
                                top: function() {
                                    t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments)
                                }
                            }
                        }
                    }();
                    var c = (t.ui.position, t.extend(t.expr[":"], {
                        data: t.expr.createPseudo ? t.expr.createPseudo(function(e) {
                            return function(i) {
                                return !!t.data(i, e)
                            }
                        }) : function(e, i, s) {
                            return !!t.data(e, s[3])
                        }
                    }), t.fn.extend({
                        disableSelection: function() {
                            var t = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
                            return function() {
                                return this.on(t + ".ui-disableSelection", function(t) {
                                    t.preventDefault()
                                })
                            }
                        }(),
                        enableSelection: function() {
                            return this.off(".ui-disableSelection")
                        }
                    }), "ui-effects-animated"),
                    u = t;
                    t.effects = {
                        effect: {}
                    },
                    function(t, e) {
                        function i(t, e, i) {
                            var s = c[e.type] || {};
                            return null == t ? i || !e.def ? null : e.def : (t = s.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : s.mod ? (t + s.mod) % s.mod : 0 > t ? 0 : s.max < t ? s.max : t)
                        }

                        function s(e) {
                            var i = l(),
                            s = i._rgba = [];
                            return e = e.toLowerCase(), p(r, function(t, n) {
                                var o, a = n.re.exec(e),
                                r = a && n.parse(a),
                                l = n.space || "rgba";
                                if (r) return o = i[l](r), i[h[l].cache] = o[h[l].cache], s = i._rgba = o._rgba, !1
                            }), s.length ? ("0,0,0,0" === s.join() && t.extend(s, o.transparent), i) : o[e]
                        }

                        function n(t, e, i) {
                            return i = (i + 1) % 1, 6 * i < 1 ? t + (e - t) * i * 6 : 2 * i < 1 ? e : 3 * i < 2 ? t + (e - t) * (2 / 3 - i) * 6 : t
                        }
                        var o, a = /^([\-+])=\s*(\d+\.?\d*)/,
                        r = [{
                            re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                            parse: function(t) {
                                return [t[1], t[2], t[3], t[4]]
                            }
                        }, {
                            re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                            parse: function(t) {
                                return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
                            }
                        }, {
                            re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                            parse: function(t) {
                                return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
                            }
                        }, {
                            re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                            parse: function(t) {
                                return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
                            }
                        }, {
                            re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                            space: "hsla",
                            parse: function(t) {
                                return [t[1], t[2] / 100, t[3] / 100, t[4]]
                            }
                        }],
                        l = t.Color = function(e, i, s, n) {
                            return new t.Color.fn.parse(e, i, s, n)
                        },
                        h = {
                            rgba: {
                                props: {
                                    red: {
                                        idx: 0,
                                        type: "byte"
                                    },
                                    green: {
                                        idx: 1,
                                        type: "byte"
                                    },
                                    blue: {
                                        idx: 2,
                                        type: "byte"
                                    }
                                }
                            },
                            hsla: {
                                props: {
                                    hue: {
                                        idx: 0,
                                        type: "degrees"
                                    },
                                    saturation: {
                                        idx: 1,
                                        type: "percent"
                                    },
                                    lightness: {
                                        idx: 2,
                                        type: "percent"
                                    }
                                }
                            }
                        },
                        c = {
                            byte: {
                                floor: !0,
                                max: 255
                            },
                            percent: {
                                max: 1
                            },
                            degrees: {
                                mod: 360,
                                floor: !0
                            }
                        },
                        u = l.support = {},
                        d = t("<p>")[0],
                        p = t.each;
                        d.style.cssText = "background-color:rgba(1,1,1,.5)", u.rgba = d.style.backgroundColor.indexOf("rgba") > -1, p(h, function(t, e) {
                            e.cache = "_" + t, e.props.alpha = {
                                idx: 3,
                                type: "percent",
                                def: 1
                            }
                        }), l.fn = t.extend(l.prototype, {
                            parse: function(e, n, a, r) {
                                if (void 0 === e) return this._rgba = [null, null, null, null], this;
                                (e.jquery || e.nodeType) && (e = t(e).css(n), n = void 0);
                                var c = this,
                                u = t.type(e),
                                d = this._rgba = [];
                                return void 0 !== n && (e = [e, n, a, r], u = "array"), "string" === u ? this.parse(s(e) || o._default) : "array" === u ? (p(h.rgba.props, function(t, s) {
                                    d[s.idx] = i(e[s.idx], s)
                                }), this) : "object" === u ? (e instanceof l ? p(h, function(t, i) {
                                    e[i.cache] && (c[i.cache] = e[i.cache].slice())
                                }) : p(h, function(s, n) {
                                    var o = n.cache;
                                    p(n.props, function(t, s) {
                                        if (!c[o] && n.to) {
                                            if ("alpha" === t || null == e[t]) return;
                                            c[o] = n.to(c._rgba)
                                        }
                                        c[o][s.idx] = i(e[t], s, !0)
                                    }), c[o] && t.inArray(null, c[o].slice(0, 3)) < 0 && (c[o][3] = 1, n.from && (c._rgba = n.from(c[o])))
                                }), this) : void 0
                            },
                            is: function(t) {
                                var e = l(t),
                                i = !0,
                                s = this;
                                return p(h, function(t, n) {
                                    var o, a = e[n.cache];
                                    return a && (o = s[n.cache] || n.to && n.to(s._rgba) || [], p(n.props, function(t, e) {
                                        if (null != a[e.idx]) return i = a[e.idx] === o[e.idx]
                                    })), i
                                }), i
                            },
                            _space: function() {
                                var t = [],
                                e = this;
                                return p(h, function(i, s) {
                                    e[s.cache] && t.push(i)
                                }), t.pop()
                            },
                            transition: function(t, e) {
                                var s = l(t),
                                n = s._space(),
                                o = h[n],
                                a = 0 === this.alpha() ? l("transparent") : this,
                                r = a[o.cache] || o.to(a._rgba),
                                u = r.slice();
                                return s = s[o.cache], p(o.props, function(t, n) {
                                    var o = n.idx,
                                    a = r[o],
                                    l = s[o],
                                    h = c[n.type] || {};
                                    null !== l && (null === a ? u[o] = l : (h.mod && (l - a > h.mod / 2 ? a += h.mod : a - l > h.mod / 2 && (a -= h.mod)), u[o] = i((l - a) * e + a, n)))
                                }), this[n](u)
                            },
                            blend: function(e) {
                                if (1 === this._rgba[3]) return this;
                                var i = this._rgba.slice(),
                                s = i.pop(),
                                n = l(e)._rgba;
                                return l(t.map(i, function(t, e) {
                                    return (1 - s) * n[e] + s * t
                                }))
                            },
                            toRgbaString: function() {
                                var e = "rgba(",
                                i = t.map(this._rgba, function(t, e) {
                                    return null == t ? e > 2 ? 1 : 0 : t
                                });
                                return 1 === i[3] && (i.pop(), e = "rgb("), e + i.join() + ")"
                            },
                            toHslaString: function() {
                                var e = "hsla(",
                                i = t.map(this.hsla(), function(t, e) {
                                    return null == t && (t = e > 2 ? 1 : 0), e && e < 3 && (t = Math.round(100 * t) + "%"), t
                                });
                                return 1 === i[3] && (i.pop(), e = "hsl("), e + i.join() + ")"
                            },
                            toHexString: function(e) {
                                var i = this._rgba.slice(),
                                s = i.pop();
                                return e && i.push(~~(255 * s)), "#" + t.map(i, function(t) {
                                    return t = (t || 0).toString(16), 1 === t.length ? "0" + t : t
                                }).join("")
                            },
                            toString: function() {
                                return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
                            }
                        }), l.fn.parse.prototype = l.fn, h.hsla.to = function(t) {
    if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
    var e, i, s = t[0] / 255,
    n = t[1] / 255,
    o = t[2] / 255,
    a = t[3],
    r = Math.max(s, n, o),
    l = Math.min(s, n, o),
    h = r - l,
    c = r + l,
    u = .5 * c;
    return e = l === r ? 0 : s === r ? 60 * (n - o) / h + 360 : n === r ? 60 * (o - s) / h + 120 : 60 * (s - n) / h + 240, i = 0 === h ? 0 : u <= .5 ? h / c : h / (2 - c), [Math.round(e) % 360, i, u, null == a ? 1 : a]
}, h.hsla.from = function(t) {
    if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
    var e = t[0] / 360,
    i = t[1],
    s = t[2],
    o = t[3],
    a = s <= .5 ? s * (1 + i) : s + i - s * i,
    r = 2 * s - a;
    return [Math.round(255 * n(r, a, e + 1 / 3)), Math.round(255 * n(r, a, e)), Math.round(255 * n(r, a, e - 1 / 3)), o]
}, p(h, function(e, s) {
    var n = s.props,
    o = s.cache,
    r = s.to,
    h = s.from;
    l.fn[e] = function(e) {
        if (r && !this[o] && (this[o] = r(this._rgba)), void 0 === e) return this[o].slice();
        var s, a = t.type(e),
        c = "array" === a || "object" === a ? e : arguments,
        u = this[o].slice();
        return p(n, function(t, e) {
            var s = c["object" === a ? t : e.idx];
            null == s && (s = u[e.idx]), u[e.idx] = i(s, e)
        }), h ? (s = l(h(u)), s[o] = u, s) : l(u)
    }, p(n, function(i, s) {
        l.fn[i] || (l.fn[i] = function(n) {
            var o, r = t.type(n),
            l = "alpha" === i ? this._hsla ? "hsla" : "rgba" : e,
            h = this[l](),
            c = h[s.idx];
            return "undefined" === r ? c : ("function" === r && (n = n.call(this, c), r = t.type(n)), null == n && s.empty ? this : ("string" === r && (o = a.exec(n)) && (n = c + parseFloat(o[2]) * ("+" === o[1] ? 1 : -1)), h[s.idx] = n, this[l](h)))
        })
    })
}), l.hook = function(e) {
    var i = e.split(" ");
    p(i, function(e, i) {
        t.cssHooks[i] = {
            set: function(e, n) {
                var o, a, r = "";
                if ("transparent" !== n && ("string" !== t.type(n) || (o = s(n)))) {
                    if (n = l(o || n), !u.rgba && 1 !== n._rgba[3]) {
                        for (a = "backgroundColor" === i ? e.parentNode : e;
                            ("" === r || "transparent" === r) && a && a.style;) try {
                            r = t.css(a, "backgroundColor"), a = a.parentNode
                    } catch (t) {}
                    n = n.blend(r && "transparent" !== r ? r : "_default")
                }
                n = n.toRgbaString()
            }
            try {
                e.style[i] = n
            } catch (t) {}
        }
    }, t.fx.step[i] = function(e) {
        e.colorInit || (e.start = l(e.elem, i), e.end = l(e.end), e.colorInit = !0), t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos))
    }
})
}, l.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"), t.cssHooks.borderColor = {
    expand: function(t) {
        var e = {};
        return p(["Top", "Right", "Bottom", "Left"], function(i, s) {
            e["border" + s + "Color"] = t
        }), e
    }
}, o = t.Color.names = {
    aqua: "#00ffff",
    black: "#000000",
    blue: "#0000ff",
    fuchsia: "#ff00ff",
    gray: "#808080",
    green: "#008000",
    lime: "#00ff00",
    maroon: "#800000",
    navy: "#000080",
    olive: "#808000",
    purple: "#800080",
    red: "#ff0000",
    silver: "#c0c0c0",
    teal: "#008080",
    white: "#ffffff",
    yellow: "#ffff00",
    transparent: [null, null, null, 0],
    _default: "#ffffff"
}
}(u),
function() {
    function e(e) {
        var i, s, n = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle,
        o = {};
        if (n && n.length && n[0] && n[n[0]])
            for (s = n.length; s--;) i = n[s], "string" == typeof n[i] && (o[t.camelCase(i)] = n[i]);
                else
                    for (i in n) "string" == typeof n[i] && (o[i] = n[i]);
                        return o
                }

                function i(e, i) {
                    var s, o, a = {};
                    for (s in i) o = i[s], e[s] !== o && (n[s] || !t.fx.step[s] && isNaN(parseFloat(o)) || (a[s] = o));
                        return a
                }
                var s = ["add", "remove", "toggle"],
                n = {
                    border: 1,
                    borderBottom: 1,
                    borderColor: 1,
                    borderLeft: 1,
                    borderRight: 1,
                    borderTop: 1,
                    borderWidth: 1,
                    margin: 1,
                    padding: 1
                };
                t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(e, i) {
                    t.fx.step[i] = function(t) {
                        ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (u.style(t.elem, i, t.end), t.setAttr = !0)
                    }
                }), t.fn.addBack || (t.fn.addBack = function(t) {
                    return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
                }), t.effects.animateClass = function(n, o, a, r) {
                    var l = t.speed(o, a, r);
                    return this.queue(function() {
                        var o, a = t(this),
                        r = a.attr("class") || "",
                        h = l.children ? a.find("*").addBack() : a;
                        h = h.map(function() {
                            return {
                                el: t(this),
                                start: e(this)
                            }
                        }), o = function() {
                            t.each(s, function(t, e) {
                                n[e] && a[e + "Class"](n[e])
                            })
                        }, o(), h = h.map(function() {
                            return this.end = e(this.el[0]), this.diff = i(this.start, this.end), this
                        }), a.attr("class", r), h = h.map(function() {
                            var e = this,
                            i = t.Deferred(),
                            s = t.extend({}, l, {
                                queue: !1,
                                complete: function() {
                                    i.resolve(e)
                                }
                            });
                            return this.el.animate(this.diff, s), i.promise()
                        }), t.when.apply(t, h.get()).done(function() {
                            o(), t.each(arguments, function() {
                                var e = this.el;
                                t.each(this.diff, function(t) {
                                    e.css(t, "")
                                })
                            }), l.complete.call(a[0])
                        })
                    })
                }, t.fn.extend({
                    addClass: function(e) {
                        return function(i, s, n, o) {
                            return s ? t.effects.animateClass.call(this, {
                                add: i
                            }, s, n, o) : e.apply(this, arguments)
                        }
                    }(t.fn.addClass),
                    removeClass: function(e) {
                        return function(i, s, n, o) {
                            return arguments.length > 1 ? t.effects.animateClass.call(this, {
                                remove: i
                            }, s, n, o) : e.apply(this, arguments)
                        }
                    }(t.fn.removeClass),
                    toggleClass: function(e) {
                        return function(i, s, n, o, a) {
                            return "boolean" == typeof s || void 0 === s ? n ? t.effects.animateClass.call(this, s ? {
                                add: i
                            } : {
                                remove: i
                            }, n, o, a) : e.apply(this, arguments) : t.effects.animateClass.call(this, {
                                toggle: i
                            }, s, n, o)
                        }
                    }(t.fn.toggleClass),
                    switchClass: function(e, i, s, n, o) {
                        return t.effects.animateClass.call(this, {
                            add: i,
                            remove: e
                        }, s, n, o)
                    }
                })
            }(),
            function() {
                function e(e, i, s, n) {
                    return t.isPlainObject(e) && (i = e, e = e.effect), e = {
                        effect: e
                    }, null == i && (i = {}), t.isFunction(i) && (n = i, s = null, i = {}), ("number" == typeof i || t.fx.speeds[i]) && (n = s, s = i, i = {}), t.isFunction(s) && (n = s, s = null), i && t.extend(e, i), s = s || i.duration, e.duration = t.fx.off ? 0 : "number" == typeof s ? s : s in t.fx.speeds ? t.fx.speeds[s] : t.fx.speeds._default, e.complete = n || i.complete, e
                }

                function i(e) {
                    return !(e && "number" != typeof e && !t.fx.speeds[e]) || ("string" == typeof e && !t.effects.effect[e] || (!!t.isFunction(e) || "object" == typeof e && !e.effect))
                }

                function s(t, e) {
                    var i = e.outerWidth(),
                    s = e.outerHeight(),
                    n = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,
                    o = n.exec(t) || ["", 0, i, s, 0];
                    return {
                        top: parseFloat(o[1]) || 0,
                        right: "auto" === o[2] ? i : parseFloat(o[2]),
                        bottom: "auto" === o[3] ? s : parseFloat(o[3]),
                        left: parseFloat(o[4]) || 0
                    }
                }
                t.expr && t.expr.filters && t.expr.filters.animated && (t.expr.filters.animated = function(e) {
                    return function(i) {
                        return !!t(i).data(c) || e(i)
                    }
                }(t.expr.filters.animated)), !1 !== t.uiBackCompat && t.extend(t.effects, {
                    save: function(t, e) {
                        for (var i = 0, s = e.length; i < s; i++) null !== e[i] && t.data("ui-effects-" + e[i], t[0].style[e[i]])
                    },
                restore: function(t, e) {
                    for (var i, s = 0, n = e.length; s < n; s++) null !== e[s] && (i = t.data("ui-effects-" + e[s]), t.css(e[s], i))
                },
            setMode: function(t, e) {
                return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e
            },
            createWrapper: function(e) {
                if (e.parent().is(".ui-effects-wrapper")) return e.parent();
                var i = {
                    width: e.outerWidth(!0),
                    height: e.outerHeight(!0),
                    float: e.css("float")
                },
                s = t("<div></div>").addClass("ui-effects-wrapper").css({
                    fontSize: "100%",
                    background: "transparent",
                    border: "none",
                    margin: 0,
                    padding: 0
                }),
                n = {
                    width: e.width(),
                    height: e.height()
                },
                o = document.activeElement;
                try {
                    o.id
                } catch (t) {
                    o = document.body
                }
                return e.wrap(s), (e[0] === o || t.contains(e[0], o)) && t(o).trigger("focus"), s = e.parent(), "static" === e.css("position") ? (s.css({
                    position: "relative"
                }), e.css({
                    position: "relative"
                })) : (t.extend(i, {
                    position: e.css("position"),
                    zIndex: e.css("z-index")
                }), t.each(["top", "left", "bottom", "right"], function(t, s) {
                    i[s] = e.css(s), isNaN(parseInt(i[s], 10)) && (i[s] = "auto")
                }), e.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto"
                })), e.css(n), s.css(i).show()
            },
            removeWrapper: function(e) {
                var i = document.activeElement;
                return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).trigger("focus")), e
            }
        }), t.extend(t.effects, {
            version: "1.12.1",
            define: function(e, i, s) {
                return s || (s = i, i = "effect"), t.effects.effect[e] = s, t.effects.effect[e].mode = i, s
            },
            scaledDimensions: function(t, e, i) {
                if (0 === e) return {
                    height: 0,
                    width: 0,
                    outerHeight: 0,
                    outerWidth: 0
                };
                var s = "horizontal" !== i ? (e || 100) / 100 : 1,
                n = "vertical" !== i ? (e || 100) / 100 : 1;
                return {
                    height: t.height() * n,
                    width: t.width() * s,
                    outerHeight: t.outerHeight() * n,
                    outerWidth: t.outerWidth() * s
                }
            },
            clipToBox: function(t) {
                return {
                    width: t.clip.right - t.clip.left,
                    height: t.clip.bottom - t.clip.top,
                    left: t.clip.left,
                    top: t.clip.top
                }
            },
            unshift: function(t, e, i) {
                var s = t.queue();
                e > 1 && s.splice.apply(s, [1, 0].concat(s.splice(e, i))), t.dequeue()
            },
            saveStyle: function(t) {
                t.data("ui-effects-style", t[0].style.cssText)
            },
            restoreStyle: function(t) {
                t[0].style.cssText = t.data("ui-effects-style") || "", t.removeData("ui-effects-style")
            },
            mode: function(t, e) {
                var i = t.is(":hidden");
                return "toggle" === e && (e = i ? "show" : "hide"), (i ? "hide" === e : "show" === e) && (e = "none"), e
            },
            getBaseline: function(t, e) {
                var i, s;
                switch (t[0]) {
                    case "top":
                    i = 0;
                    break;
                    case "middle":
                    i = .5;
                    break;
                    case "bottom":
                    i = 1;
                    break;
                    default:
                    i = t[0] / e.height
                }
                switch (t[1]) {
                    case "left":
                    s = 0;
                    break;
                    case "center":
                    s = .5;
                    break;
                    case "right":
                    s = 1;
                    break;
                    default:
                    s = t[1] / e.width
                }
                return {
                    x: s,
                    y: i
                }
            },
            createPlaceholder: function(e) {
                var i, s = e.css("position"),
                n = e.position();
                return e.css({
                    marginTop: e.css("marginTop"),
                    marginBottom: e.css("marginBottom"),
                    marginLeft: e.css("marginLeft"),
                    marginRight: e.css("marginRight")
                }).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()), /^(static|relative)/.test(s) && (s = "absolute", i = t("<" + e[0].nodeName + ">").insertAfter(e).css({
                    display: /^(inline|ruby)/.test(e.css("display")) ? "inline-block" : "block",
                    visibility: "hidden",
                    marginTop: e.css("marginTop"),
                    marginBottom: e.css("marginBottom"),
                    marginLeft: e.css("marginLeft"),
                    marginRight: e.css("marginRight"),
                    float: e.css("float")
                }).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).addClass("ui-effects-placeholder"), e.data("ui-effects-placeholder", i)), e.css({
                    position: s,
                    left: n.left,
                    top: n.top
                }), i
            },
            removePlaceholder: function(t) {
                var e = "ui-effects-placeholder",
                i = t.data(e);
                i && (i.remove(), t.removeData(e))
            },
            cleanUp: function(e) {
                t.effects.restoreStyle(e), t.effects.removePlaceholder(e)
            },
            setTransition: function(e, i, s, n) {
                return n = n || {}, t.each(i, function(t, i) {
                    var o = e.cssUnit(i);
                    o[0] > 0 && (n[i] = o[0] * s + o[1])
                }), n
            }
        }), t.fn.extend({
            effect: function() {
                function i(e) {
                    function i() {
                        r.removeData(c), t.effects.cleanUp(r), "hide" === s.mode && r.hide(), a()
                    }

                    function a() {
                        t.isFunction(l) && l.call(r[0]), t.isFunction(e) && e()
                    }
                    var r = t(this);
                    s.mode = u.shift(), !1 === t.uiBackCompat || o ? "none" === s.mode ? (r[h](), a()) : n.call(r[0], s, i) : (r.is(":hidden") ? "hide" === h : "show" === h) ? (r[h](), a()) : n.call(r[0], s, a)
                }
                var s = e.apply(this, arguments),
                n = t.effects.effect[s.effect],
                o = n.mode,
                a = s.queue,
                r = a || "fx",
                l = s.complete,
                h = s.mode,
                u = [],
                d = function(e) {
                    var i = t(this),
                    s = t.effects.mode(i, h) || o;
                    i.data(c, !0), u.push(s), o && ("show" === s || s === o && "hide" === s) && i.show(), o && "none" === s || t.effects.saveStyle(i), t.isFunction(e) && e()
                };
                return t.fx.off || !n ? h ? this[h](s.duration, l) : this.each(function() {
                    l && l.call(this)
                }) : !1 === a ? this.each(d).each(i) : this.queue(r, d).queue(r, i)
            },
            show: function(t) {
                return function(s) {
                    if (i(s)) return t.apply(this, arguments);
                    var n = e.apply(this, arguments);
                    return n.mode = "show", this.effect.call(this, n)
                }
            }(t.fn.show),
            hide: function(t) {
                return function(s) {
                    if (i(s)) return t.apply(this, arguments);
                    var n = e.apply(this, arguments);
                    return n.mode = "hide", this.effect.call(this, n)
                }
            }(t.fn.hide),
            toggle: function(t) {
                return function(s) {
                    if (i(s) || "boolean" == typeof s) return t.apply(this, arguments);
                    var n = e.apply(this, arguments);
                    return n.mode = "toggle", this.effect.call(this, n)
                }
            }(t.fn.toggle),
            cssUnit: function(e) {
                var i = this.css(e),
                s = [];
                return t.each(["em", "px", "%", "pt"], function(t, e) {
                    i.indexOf(e) > 0 && (s = [parseFloat(i), e])
                }), s
            },
            cssClip: function(t) {
                return t ? this.css("clip", "rect(" + t.top + "px " + t.right + "px " + t.bottom + "px " + t.left + "px)") : s(this.css("clip"), this)
            },
            transfer: function(e, i) {
                var s = t(this),
                n = t(e.to),
                o = "fixed" === n.css("position"),
                a = t("body"),
                r = o ? a.scrollTop() : 0,
                l = o ? a.scrollLeft() : 0,
                h = n.offset(),
                c = {
                    top: h.top - r,
                    left: h.left - l,
                    height: n.innerHeight(),
                    width: n.innerWidth()
                },
                u = s.offset(),
                d = t("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(e.className).css({
                    top: u.top - r,
                    left: u.left - l,
                    height: s.innerHeight(),
                    width: s.innerWidth(),
                    position: o ? "fixed" : "absolute"
                }).animate(c, e.duration, e.easing, function() {
                    d.remove(), t.isFunction(i) && i()
                })
            }
        }), t.fx.step.clip = function(e) {
            e.clipInit || (e.start = t(e.elem).cssClip(), "string" == typeof e.end && (e.end = s(e.end, e.elem)), e.clipInit = !0), t(e.elem).cssClip({
                top: e.pos * (e.end.top - e.start.top) + e.start.top,
                right: e.pos * (e.end.right - e.start.right) + e.start.right,
                bottom: e.pos * (e.end.bottom - e.start.bottom) + e.start.bottom,
                left: e.pos * (e.end.left - e.start.left) + e.start.left
            })
        }
    }(),
    function() {
        var e = {};
        t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(t, i) {
            e[i] = function(e) {
                return Math.pow(e, t + 2)
            }
        }), t.extend(e, {
            Sine: function(t) {
                return 1 - Math.cos(t * Math.PI / 2)
            },
            Circ: function(t) {
                return 1 - Math.sqrt(1 - t * t)
            },
            Elastic: function(t) {
                return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
            },
            Back: function(t) {
                return t * t * (3 * t - 2)
            },
            Bounce: function(t) {
                for (var e, i = 4; t < ((e = Math.pow(2, --i)) - 1) / 11;);
                    return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
            }
        }), t.each(e, function(e, i) {
            t.easing["easeIn" + e] = i, t.easing["easeOut" + e] = function(t) {
                return 1 - i(1 - t)
            }, t.easing["easeInOut" + e] = function(t) {
                return t < .5 ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2
            }
        })
    }();
    t.effects, t.effects.define("blind", "hide", function(e, i) {
        var s = {
            up: ["bottom", "top"],
            vertical: ["bottom", "top"],
            down: ["top", "bottom"],
            left: ["right", "left"],
            horizontal: ["right", "left"],
            right: ["left", "right"]
        },
        n = t(this),
        o = e.direction || "up",
        a = n.cssClip(),
        r = {
            clip: t.extend({}, a)
        },
        l = t.effects.createPlaceholder(n);
        r.clip[s[o][0]] = r.clip[s[o][1]], "show" === e.mode && (n.cssClip(r.clip), l && l.css(t.effects.clipToBox(r)), r.clip = a), l && l.animate(t.effects.clipToBox(r), e.duration, e.easing), n.animate(r, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: i
        })
    }), t.effects.define("bounce", function(e, i) {
        var s, n, o, a = t(this),
        r = e.mode,
        l = "hide" === r,
        h = "show" === r,
        c = e.direction || "up",
        u = e.distance,
        d = e.times || 5,
        p = 2 * d + (h || l ? 1 : 0),
        f = e.duration / p,
        g = e.easing,
        m = "up" === c || "down" === c ? "top" : "left",
        v = "up" === c || "left" === c,
        _ = 0,
        b = a.queue().length;
        for (t.effects.createPlaceholder(a), o = a.css(m), u || (u = a["top" === m ? "outerHeight" : "outerWidth"]() / 3), h && (n = {
            opacity: 1
        }, n[m] = o, a.css("opacity", 0).css(m, v ? 2 * -u : 2 * u).animate(n, f, g)), l && (u /= Math.pow(2, d - 1)), n = {}, n[m] = o; _ < d; _++) s = {}, s[m] = (v ? "-=" : "+=") + u, a.animate(s, f, g).animate(n, f, g), u = l ? 2 * u : u / 2;
            l && (s = {
                opacity: 0
            }, s[m] = (v ? "-=" : "+=") + u, a.animate(s, f, g)), a.queue(i), t.effects.unshift(a, b, p + 1)
        }), t.effects.define("clip", "hide", function(e, i) {
            var s, n = {},
            o = t(this),
            a = e.direction || "vertical",
            r = "both" === a,
            l = r || "horizontal" === a,
            h = r || "vertical" === a;
            s = o.cssClip(), n.clip = {
                top: h ? (s.bottom - s.top) / 2 : s.top,
                right: l ? (s.right - s.left) / 2 : s.right,
                bottom: h ? (s.bottom - s.top) / 2 : s.bottom,
                left: l ? (s.right - s.left) / 2 : s.left
            }, t.effects.createPlaceholder(o), "show" === e.mode && (o.cssClip(n.clip), n.clip = s), o.animate(n, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: i
            })
        }), t.effects.define("drop", "hide", function(e, i) {
            var s, n = t(this),
            o = e.mode,
            a = "show" === o,
            r = e.direction || "left",
            l = "up" === r || "down" === r ? "top" : "left",
            h = "up" === r || "left" === r ? "-=" : "+=",
            c = "+=" === h ? "-=" : "+=",
            u = {
                opacity: 0
            };
            t.effects.createPlaceholder(n), s = e.distance || n["top" === l ? "outerHeight" : "outerWidth"](!0) / 2, u[l] = h + s, a && (n.css(u), u[l] = c + s, u.opacity = 1), n.animate(u, {
                queue: !1,
                duration: e.duration,
                easing: e.easing,
                complete: i
            })
        }), t.effects.define("explode", "hide", function(e, i) {
            function s() {
                b.push(this), b.length === u * d && n()
            }

            function n() {
                p.css({
                    visibility: "visible"
                }), t(b).remove(), i()
            }
            var o, a, r, l, h, c, u = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3,
            d = u,
            p = t(this),
            f = e.mode,
            g = "show" === f,
            m = p.show().css("visibility", "hidden").offset(),
            v = Math.ceil(p.outerWidth() / d),
            _ = Math.ceil(p.outerHeight() / u),
            b = [];
            for (o = 0; o < u; o++)
                for (l = m.top + o * _, c = o - (u - 1) / 2, a = 0; a < d; a++) r = m.left + a * v, h = a - (d - 1) / 2, p.clone().appendTo("body").wrap("<div></div>").css({
                    position: "absolute",
                    visibility: "visible",
                    left: -a * v,
                    top: -o * _
                }).parent().addClass("ui-effects-explode").css({
                    position: "absolute",
                    overflow: "hidden",
                    width: v,
                    height: _,
                    left: r + (g ? h * v : 0),
                    top: l + (g ? c * _ : 0),
                    opacity: g ? 0 : 1
                }).animate({
                    left: r + (g ? 0 : h * v),
                    top: l + (g ? 0 : c * _),
                    opacity: g ? 1 : 0
                }, e.duration || 500, e.easing, s)
            }), t.effects.define("fade", "toggle", function(e, i) {
                var s = "show" === e.mode;
                t(this).css("opacity", s ? 0 : 1).animate({
                    opacity: s ? 1 : 0
                }, {
                    queue: !1,
                    duration: e.duration,
                    easing: e.easing,
                    complete: i
                })
            }), t.effects.define("fold", "hide", function(e, i) {
                var s = t(this),
                n = e.mode,
                o = "show" === n,
                a = "hide" === n,
                r = e.size || 15,
                l = /([0-9]+)%/.exec(r),
                h = !!e.horizFirst,
                c = h ? ["right", "bottom"] : ["bottom", "right"],
                u = e.duration / 2,
                d = t.effects.createPlaceholder(s),
                p = s.cssClip(),
                f = {
                    clip: t.extend({}, p)
                },
                g = {
                    clip: t.extend({}, p)
                },
                m = [p[c[0]], p[c[1]]],
                v = s.queue().length;
                l && (r = parseInt(l[1], 10) / 100 * m[a ? 0 : 1]), f.clip[c[0]] = r, g.clip[c[0]] = r, g.clip[c[1]] = 0, o && (s.cssClip(g.clip), d && d.css(t.effects.clipToBox(g)), g.clip = p), s.queue(function(i) {
                    d && d.animate(t.effects.clipToBox(f), u, e.easing).animate(t.effects.clipToBox(g), u, e.easing), i()
                }).animate(f, u, e.easing).animate(g, u, e.easing).queue(i), t.effects.unshift(s, v, 4)
            }), t.effects.define("highlight", "show", function(e, i) {
                var s = t(this),
                n = {
                    backgroundColor: s.css("backgroundColor")
                };
                "hide" === e.mode && (n.opacity = 0), t.effects.saveStyle(s), s.css({
                    backgroundImage: "none",
                    backgroundColor: e.color || "#ffff99"
                }).animate(n, {
                    queue: !1,
                    duration: e.duration,
                    easing: e.easing,
                    complete: i
                })
            }), t.effects.define("size", function(e, i) {
                var s, n, o, a = t(this),
                r = ["fontSize"],
                l = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
                h = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
                c = e.mode,
                u = "effect" !== c,
                d = e.scale || "both",
                p = e.origin || ["middle", "center"],
                f = a.css("position"),
                g = a.position(),
                m = t.effects.scaledDimensions(a),
                v = e.from || m,
                _ = e.to || t.effects.scaledDimensions(a, 0);
                t.effects.createPlaceholder(a), "show" === c && (o = v, v = _, _ = o), n = {
                    from: {
                        y: v.height / m.height,
                        x: v.width / m.width
                    },
                    to: {
                        y: _.height / m.height,
                        x: _.width / m.width
                    }
                }, "box" !== d && "both" !== d || (n.from.y !== n.to.y && (v = t.effects.setTransition(a, l, n.from.y, v), _ = t.effects.setTransition(a, l, n.to.y, _)), n.from.x !== n.to.x && (v = t.effects.setTransition(a, h, n.from.x, v), _ = t.effects.setTransition(a, h, n.to.x, _))), "content" !== d && "both" !== d || n.from.y !== n.to.y && (v = t.effects.setTransition(a, r, n.from.y, v), _ = t.effects.setTransition(a, r, n.to.y, _)), p && (s = t.effects.getBaseline(p, m), v.top = (m.outerHeight - v.outerHeight) * s.y + g.top, v.left = (m.outerWidth - v.outerWidth) * s.x + g.left, _.top = (m.outerHeight - _.outerHeight) * s.y + g.top, _.left = (m.outerWidth - _.outerWidth) * s.x + g.left), a.css(v), "content" !== d && "both" !== d || (l = l.concat(["marginTop", "marginBottom"]).concat(r), h = h.concat(["marginLeft", "marginRight"]), a.find("*[width]").each(function() {
                    var i = t(this),
                    s = t.effects.scaledDimensions(i),
                    o = {
                        height: s.height * n.from.y,
                        width: s.width * n.from.x,
                        outerHeight: s.outerHeight * n.from.y,
                        outerWidth: s.outerWidth * n.from.x
                    },
                    a = {
                        height: s.height * n.to.y,
                        width: s.width * n.to.x,
                        outerHeight: s.height * n.to.y,
                        outerWidth: s.width * n.to.x
                    };
                    n.from.y !== n.to.y && (o = t.effects.setTransition(i, l, n.from.y, o), a = t.effects.setTransition(i, l, n.to.y, a)), n.from.x !== n.to.x && (o = t.effects.setTransition(i, h, n.from.x, o), a = t.effects.setTransition(i, h, n.to.x, a)), u && t.effects.saveStyle(i), i.css(o), i.animate(a, e.duration, e.easing, function() {
                        u && t.effects.restoreStyle(i)
                    })
                })), a.animate(_, {
                    queue: !1,
                    duration: e.duration,
                    easing: e.easing,
                    complete: function() {
                        var e = a.offset();
                        0 === _.opacity && a.css("opacity", v.opacity), u || (a.css("position", "static" === f ? "relative" : f).offset(e), t.effects.saveStyle(a)), i()
                    }
                })
            }), t.effects.define("scale", function(e, i) {
                var s = t(this),
                n = e.mode,
                o = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : "effect" !== n ? 0 : 100),
                a = t.extend(!0, {
                    from: t.effects.scaledDimensions(s),
                    to: t.effects.scaledDimensions(s, o, e.direction || "both"),
                    origin: e.origin || ["middle", "center"]
                }, e);
                e.fade && (a.from.opacity = 1, a.to.opacity = 0), t.effects.effect.size.call(this, a, i)
            }), t.effects.define("puff", "hide", function(e, i) {
                var s = t.extend(!0, {}, e, {
                    fade: !0,
                    percent: parseInt(e.percent, 10) || 150
                });
                t.effects.effect.scale.call(this, s, i)
            }), t.effects.define("pulsate", "show", function(e, i) {
                var s = t(this),
                n = e.mode,
                o = "show" === n,
                a = "hide" === n,
                r = o || a,
                l = 2 * (e.times || 5) + (r ? 1 : 0),
                h = e.duration / l,
                c = 0,
                u = 1,
                d = s.queue().length;
                for (!o && s.is(":visible") || (s.css("opacity", 0).show(), c = 1); u < l; u++) s.animate({
                    opacity: c
                }, h, e.easing), c = 1 - c;
                    s.animate({
                        opacity: c
                    }, h, e.easing), s.queue(i), t.effects.unshift(s, d, l + 1)
                }), t.effects.define("shake", function(e, i) {
                    var s = 1,
                    n = t(this),
                    o = e.direction || "left",
                    a = e.distance || 20,
                    r = e.times || 3,
                    l = 2 * r + 1,
                    h = Math.round(e.duration / l),
                    c = "up" === o || "down" === o ? "top" : "left",
                    u = "up" === o || "left" === o,
                    d = {},
                    p = {},
                    f = {},
                    g = n.queue().length;
                    for (t.effects.createPlaceholder(n), d[c] = (u ? "-=" : "+=") + a, p[c] = (u ? "+=" : "-=") + 2 * a, f[c] = (u ? "-=" : "+=") + 2 * a, n.animate(d, h, e.easing); s < r; s++) n.animate(p, h, e.easing).animate(f, h, e.easing);
                        n.animate(p, h, e.easing).animate(d, h / 2, e.easing).queue(i), t.effects.unshift(n, g, l + 1)
                }), t.effects.define("slide", "show", function(e, i) {
                    var s, n, o = t(this),
                    a = {
                        up: ["bottom", "top"],
                        down: ["top", "bottom"],
                        left: ["right", "left"],
                        right: ["left", "right"]
                    },
                    r = e.mode,
                    l = e.direction || "left",
                    h = "up" === l || "down" === l ? "top" : "left",
                    c = "up" === l || "left" === l,
                    u = e.distance || o["top" === h ? "outerHeight" : "outerWidth"](!0),
                    d = {};
                    t.effects.createPlaceholder(o), s = o.cssClip(), n = o.position()[h], d[h] = (c ? -1 : 1) * u + n, d.clip = o.cssClip(), d.clip[a[l][1]] = d.clip[a[l][0]], "show" === r && (o.cssClip(d.clip), o.css(h, d[h]), d.clip = s, d[h] = n), o.animate(d, {
                        queue: !1,
                        duration: e.duration,
                        easing: e.easing,
                        complete: i
                    })
                });
                !1 !== t.uiBackCompat && t.effects.define("transfer", function(e, i) {
                    t(this).transfer(e, i)
                });
                t.ui.focusable = function(i, s) {
                    var n, o, a, r, l, h = i.nodeName.toLowerCase();
                    return "area" === h ? (n = i.parentNode, o = n.name, !(!i.href || !o || "map" !== n.nodeName.toLowerCase()) && (a = t("img[usemap='#" + o + "']"), a.length > 0 && a.is(":visible"))) : (/^(input|select|textarea|button|object)$/.test(h) ? (r = !i.disabled) && (l = t(i).closest("fieldset")[0]) && (r = !l.disabled) : r = "a" === h ? i.href || s : s, r && t(i).is(":visible") && e(t(i)))
                }, t.extend(t.expr[":"], {
                    focusable: function(e) {
                        return t.ui.focusable(e, null != t.attr(e, "tabindex"))
                    }
                });
                t.ui.focusable, t.fn.form = function() {
                    return "string" == typeof this[0].form ? this.closest("form") : t(this[0].form)
                }, t.ui.formResetMixin = {
                    _formResetHandler: function() {
                        var e = t(this);
                        setTimeout(function() {
                            var i = e.data("ui-form-reset-instances");
                            t.each(i, function() {
                                this.refresh()
                            })
                        })
                    },
                    _bindFormResetHandler: function() {
                        if (this.form = this.element.form(), this.form.length) {
                            var t = this.form.data("ui-form-reset-instances") || [];
                            t.length || this.form.on("reset.ui-form-reset", this._formResetHandler), t.push(this), this.form.data("ui-form-reset-instances", t)
                        }
                    },
                    _unbindFormResetHandler: function() {
                        if (this.form.length) {
                            var e = this.form.data("ui-form-reset-instances");
                            e.splice(t.inArray(this, e), 1), e.length ? this.form.data("ui-form-reset-instances", e) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")
                        }
                    }
                };
                "1.7" === t.fn.jquery.substring(0, 3) && (t.each(["Width", "Height"], function(e, i) {
                    function s(e, i, s, o) {
                        return t.each(n, function() {
                            i -= parseFloat(t.css(e, "padding" + this)) || 0, s && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0), o && (i -= parseFloat(t.css(e, "margin" + this)) || 0)
                        }), i
                    }
                    var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
                    o = i.toLowerCase(),
                    a = {
                        innerWidth: t.fn.innerWidth,
                        innerHeight: t.fn.innerHeight,
                        outerWidth: t.fn.outerWidth,
                        outerHeight: t.fn.outerHeight
                    };
                    t.fn["inner" + i] = function(e) {
                        return void 0 === e ? a["inner" + i].call(this) : this.each(function() {
                            t(this).css(o, s(this, e) + "px")
                        })
                    }, t.fn["outer" + i] = function(e, n) {
                        return "number" != typeof e ? a["outer" + i].call(this, e) : this.each(function() {
                            t(this).css(o, s(this, e, !0, n) + "px")
                        })
                    }
                }), t.fn.addBack = function(t) {
                    return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
                });
                t.ui.keyCode = {
                    BACKSPACE: 8,
                    COMMA: 188,
                    DELETE: 46,
                    DOWN: 40,
                    END: 35,
                    ENTER: 13,
                    ESCAPE: 27,
                    HOME: 36,
                    LEFT: 37,
                    PAGE_DOWN: 34,
                    PAGE_UP: 33,
                    PERIOD: 190,
                    RIGHT: 39,
                    SPACE: 32,
                    TAB: 9,
                    UP: 38
                }, t.ui.escapeSelector = function() {
                    return function(t) {
                        return t.replace(/([!"#$%&'()*+,.\/:;<=>?@[\]^`{|}~])/g, "\\$1")
                    }
                }(), t.fn.labels = function() {
                    var e, i, s, n, o;
                    return this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (n = this.eq(0).parents("label"), s = this.attr("id"), s && (e = this.eq(0).parents().last(), o = e.add(e.length ? e.siblings() : this.siblings()), i = "label[for='" + t.ui.escapeSelector(s) + "']", n = n.add(o.find(i).addBack(i))), this.pushStack(n))
                }, t.fn.scrollParent = function(e) {
                    var i = this.css("position"),
                    s = "absolute" === i,
                    n = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                    o = this.parents().filter(function() {
                        var e = t(this);
                        return (!s || "static" !== e.css("position")) && n.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"))
                    }).eq(0);
                    return "fixed" !== i && o.length ? o : t(this[0].ownerDocument || document)
                }, t.extend(t.expr[":"], {
                    tabbable: function(e) {
                        var i = t.attr(e, "tabindex"),
                        s = null != i;
                        return (!s || i >= 0) && t.ui.focusable(e, s)
                    }
                }), t.fn.extend({
                    uniqueId: function() {
                        var t = 0;
                        return function() {
                            return this.each(function() {
                                this.id || (this.id = "ui-id-" + ++t)
                            })
                        }
                    }(),
                    removeUniqueId: function() {
                        return this.each(function() {
                            /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id")
                        })
                    }
                }), t.widget("ui.accordion", {
                    version: "1.12.1",
                    options: {
                        active: 0,
                        animate: {},
                        classes: {
                            "ui-accordion-header": "ui-corner-top",
                            "ui-accordion-header-collapsed": "ui-corner-all",
                            "ui-accordion-content": "ui-corner-bottom"
                        },
                        collapsible: !1,
                        event: "click",
                        header: "> li > :first-child, > :not(li):even",
                        heightStyle: "auto",
                        icons: {
                            activeHeader: "ui-icon-triangle-1-s",
                            header: "ui-icon-triangle-1-e"
                        },
                        activate: null,
                        beforeActivate: null
                    },
                    hideProps: {
                        borderTopWidth: "hide",
                        borderBottomWidth: "hide",
                        paddingTop: "hide",
                        paddingBottom: "hide",
                        height: "hide"
                    },
                    showProps: {
                        borderTopWidth: "show",
                        borderBottomWidth: "show",
                        paddingTop: "show",
                        paddingBottom: "show",
                        height: "show"
                    },
                    _create: function() {
                        var e = this.options;
                        this.prevShow = this.prevHide = t(), this._addClass("ui-accordion", "ui-widget ui-helper-reset"), this.element.attr("role", "tablist"), e.collapsible || !1 !== e.active && null != e.active || (e.active = 0), this._processPanels(), e.active < 0 && (e.active += this.headers.length), this._refresh()
                    },
                    _getCreateEventData: function() {
                        return {
                            header: this.active,
                            panel: this.active.length ? this.active.next() : t()
                        }
                    },
                    _createIcons: function() {
                        var e, i, s = this.options.icons;
                        s && (e = t("<span>"), this._addClass(e, "ui-accordion-header-icon", "ui-icon " + s.header), e.prependTo(this.headers), i = this.active.children(".ui-accordion-header-icon"), this._removeClass(i, s.header)._addClass(i, null, s.activeHeader)._addClass(this.headers, "ui-accordion-icons"))
                    },
                    _destroyIcons: function() {
                        this._removeClass(this.headers, "ui-accordion-icons"), this.headers.children(".ui-accordion-header-icon").remove()
                    },
                    _destroy: function() {
                        var t;
                        this.element.removeAttr("role"), this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(), this._destroyIcons(), t = this.headers.next().css("display", "").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(), "content" !== this.options.heightStyle && t.css("height", "")
                    },
                    _setOption: function(t, e) {
                        if ("active" === t) return void this._activate(e);
                        "event" === t && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e)), this._super(t, e), "collapsible" !== t || e || !1 !== this.options.active || this._activate(0), "icons" === t && (this._destroyIcons(), e && this._createIcons())
                    },
                    _setOptionDisabled: function(t) {
                        this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t), this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled", !!t)
                    },
                    _keydown: function(e) {
                        if (!e.altKey && !e.ctrlKey) {
                            var i = t.ui.keyCode,
                            s = this.headers.length,
                            n = this.headers.index(e.target),
                            o = !1;
                            switch (e.keyCode) {
                                case i.RIGHT:
                                case i.DOWN:
                                o = this.headers[(n + 1) % s];
                                break;
                                case i.LEFT:
                                case i.UP:
                                o = this.headers[(n - 1 + s) % s];
                                break;
                                case i.SPACE:
                                case i.ENTER:
                                this._eventHandler(e);
                                break;
                                case i.HOME:
                                o = this.headers[0];
                                break;
                                case i.END:
                                o = this.headers[s - 1]
                            }
                            o && (t(e.target).attr("tabIndex", -1), t(o).attr("tabIndex", 0), t(o).trigger("focus"), e.preventDefault())
                        }
                    },
                    _panelKeyDown: function(e) {
                        e.keyCode === t.ui.keyCode.UP && e.ctrlKey && t(e.currentTarget).prev().trigger("focus")
                    },
                    refresh: function() {
                        var e = this.options;
                        this._processPanels(), !1 === e.active && !0 === e.collapsible || !this.headers.length ? (e.active = !1, this.active = t()) : !1 === e.active ? this._activate(0) : this.active.length && !t.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (e.active = !1, this.active = t()) : this._activate(Math.max(0, e.active - 1)) : e.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
                    },
                    _processPanels: function() {
                        var t = this.headers,
                        e = this.panels;
                        this.headers = this.element.find(this.options.header), this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed", "ui-state-default"), this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide(), this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content"), e && (this._off(t.not(this.headers)), this._off(e.not(this.panels)))
                    },
                    _refresh: function() {
                        var e, i = this.options,
                        s = i.heightStyle,
                        n = this.element.parent();
                        this.active = this._findActive(i.active), this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")._removeClass(this.active, "ui-accordion-header-collapsed"), this._addClass(this.active.next(), "ui-accordion-content-active"), this.active.next().show(), this.headers.attr("role", "tab").each(function() {
                            var e = t(this),
                            i = e.uniqueId().attr("id"),
                            s = e.next(),
                            n = s.uniqueId().attr("id");
                            e.attr("aria-controls", n), s.attr("aria-labelledby", i)
                        }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
                            "aria-selected": "false",
                            "aria-expanded": "false",
                            tabIndex: -1
                        }).next().attr({
                            "aria-hidden": "true"
                        }).hide(), this.active.length ? this.active.attr({
                            "aria-selected": "true",
                            "aria-expanded": "true",
                            tabIndex: 0
                        }).next().attr({
                            "aria-hidden": "false"
                        }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(i.event), "fill" === s ? (e = n.height(), this.element.siblings(":visible").each(function() {
                            var i = t(this),
                            s = i.css("position");
                            "absolute" !== s && "fixed" !== s && (e -= i.outerHeight(!0))
                        }), this.headers.each(function() {
                            e -= t(this).outerHeight(!0)
                        }), this.headers.next().each(function() {
                            t(this).height(Math.max(0, e - t(this).innerHeight() + t(this).height()))
                        }).css("overflow", "auto")) : "auto" === s && (e = 0, this.headers.next().each(function() {
                            var i = t(this).is(":visible");
                            i || t(this).show(), e = Math.max(e, t(this).css("height", "").height()), i || t(this).hide()
                        }).height(e))
                    },
                    _activate: function(e) {
                        var i = this._findActive(e)[0];
                        i !== this.active[0] && (i = i || this.active[0], this._eventHandler({
                            target: i,
                            currentTarget: i,
                            preventDefault: t.noop
                        }))
                    },
                    _findActive: function(e) {
                        return "number" == typeof e ? this.headers.eq(e) : t()
                    },
                    _setupEvents: function(e) {
                        var i = {
                            keydown: "_keydown"
                        };
                        e && t.each(e.split(" "), function(t, e) {
                            i[e] = "_eventHandler"
                        }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), {
                            keydown: "_panelKeyDown"
                        }), this._hoverable(this.headers), this._focusable(this.headers)
                    },
                    _eventHandler: function(e) {
                        var i, s, n = this.options,
                        o = this.active,
                        a = t(e.currentTarget),
                        r = a[0] === o[0],
                        l = r && n.collapsible,
                        h = l ? t() : a.next(),
                        c = o.next(),
                        u = {
                            oldHeader: o,
                            oldPanel: c,
                            newHeader: l ? t() : a,
                            newPanel: h
                        };
                        e.preventDefault(), r && !n.collapsible || !1 === this._trigger("beforeActivate", e, u) || (n.active = !l && this.headers.index(a), this.active = r ? t() : a, this._toggle(u), this._removeClass(o, "ui-accordion-header-active", "ui-state-active"), n.icons && (i = o.children(".ui-accordion-header-icon"), this._removeClass(i, null, n.icons.activeHeader)._addClass(i, null, n.icons.header)), r || (this._removeClass(a, "ui-accordion-header-collapsed")._addClass(a, "ui-accordion-header-active", "ui-state-active"), n.icons && (s = a.children(".ui-accordion-header-icon"), this._removeClass(s, null, n.icons.header)._addClass(s, null, n.icons.activeHeader)), this._addClass(a.next(), "ui-accordion-content-active")))
                    },
                    _toggle: function(e) {
                        var i = e.newPanel,
                        s = this.prevShow.length ? this.prevShow : e.oldPanel;
                        this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = s, this.options.animate ? this._animate(i, s, e) : (s.hide(), i.show(), this._toggleComplete(e)), s.attr({
                            "aria-hidden": "true"
                        }), s.prev().attr({
                            "aria-selected": "false",
                            "aria-expanded": "false"
                        }), i.length && s.length ? s.prev().attr({
                            tabIndex: -1,
                            "aria-expanded": "false"
                        }) : i.length && this.headers.filter(function() {
                            return 0 === parseInt(t(this).attr("tabIndex"), 10)
                        }).attr("tabIndex", -1), i.attr("aria-hidden", "false").prev().attr({
                            "aria-selected": "true",
                            "aria-expanded": "true",
                            tabIndex: 0
                        })
                    },
                    _animate: function(t, e, i) {
                        var s, n, o, a = this,
                        r = 0,
                        l = t.css("box-sizing"),
                        h = t.length && (!e.length || t.index() < e.index()),
                        c = this.options.animate || {},
                        u = h && c.down || c,
                        d = function() {
                            a._toggleComplete(i)
                        };
                        return "number" == typeof u && (o = u), "string" == typeof u && (n = u), n = n || u.easing || c.easing, o = o || u.duration || c.duration, e.length ? t.length ? (s = t.show().outerHeight(), e.animate(this.hideProps, {
                            duration: o,
                            easing: n,
                            step: function(t, e) {
                                e.now = Math.round(t)
                            }
                        }), void t.hide().animate(this.showProps, {
                            duration: o,
                            easing: n,
                            complete: d,
                            step: function(t, i) {
                                i.now = Math.round(t), "height" !== i.prop ? "content-box" === l && (r += i.now) : "content" !== a.options.heightStyle && (i.now = Math.round(s - e.outerHeight() - r), r = 0)
                            }
                        })) : e.animate(this.hideProps, o, n, d) : t.animate(this.showProps, o, n, d)
                    },
                    _toggleComplete: function(t) {
                        var e = t.oldPanel,
                        i = e.prev();
                        this._removeClass(e, "ui-accordion-content-active"), this._removeClass(i, "ui-accordion-header-active")._addClass(i, "ui-accordion-header-collapsed"), e.length && (e.parent()[0].className = e.parent()[0].className), this._trigger("activate", null, t)
                    }
                }), t.ui.safeActiveElement = function(t) {
    var e;
    try {
        e = t.activeElement
    } catch (i) {
        e = t.body
    }
    return e || (e = t.body), e.nodeName || (e = t.body), e
}, t.widget("ui.menu", {
    version: "1.12.1",
    defaultElement: "<ul>",
    delay: 300,
    options: {
        icons: {
            submenu: "ui-icon-caret-1-e"
        },
        items: "> *",
        menus: "ul",
        position: {
            my: "left top",
            at: "right top"
        },
        role: "menu",
        blur: null,
        focus: null,
        select: null
    },
    _create: function() {
        this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().attr({
            role: this.options.role,
            tabIndex: 0
        }), this._addClass("ui-menu", "ui-widget ui-widget-content"), this._on({
            "mousedown .ui-menu-item": function(t) {
                t.preventDefault()
            },
            "click .ui-menu-item": function(e) {
                var i = t(e.target),
                s = t(t.ui.safeActiveElement(this.document[0]));
                !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(e), e.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(e) : !this.element.is(":focus") && s.closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
            },
            "mouseenter .ui-menu-item": function(e) {
                if (!this.previousFilter) {
                    var i = t(e.target).closest(".ui-menu-item"),
                    s = t(e.currentTarget);
                    i[0] === s[0] && (this._removeClass(s.siblings().children(".ui-state-active"), null, "ui-state-active"), this.focus(e, s))
                }
            },
            mouseleave: "collapseAll",
            "mouseleave .ui-menu": "collapseAll",
            focus: function(t, e) {
                var i = this.active || this.element.find(this.options.items).eq(0);
                e || this.focus(t, i)
            },
            blur: function(e) {
                this._delay(function() {
                    !t.contains(this.element[0], t.ui.safeActiveElement(this.document[0])) && this.collapseAll(e)
                })
            },
            keydown: "_keydown"
        }), this.refresh(), this._on(this.document, {
            click: function(t) {
                this._closeOnDocumentClick(t) && this.collapseAll(t), this.mouseHandled = !1
            }
        })
    },
    _destroy: function() {
        var e = this.element.find(".ui-menu-item").removeAttr("role aria-disabled"),
        i = e.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
        this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(), i.children().each(function() {
            var e = t(this);
            e.data("ui-menu-submenu-caret") && e.remove()
        })
    },
    _keydown: function(e) {
        var i, s, n, o, a = !0;
        switch (e.keyCode) {
            case t.ui.keyCode.PAGE_UP:
            this.previousPage(e);
            break;
            case t.ui.keyCode.PAGE_DOWN:
            this.nextPage(e);
            break;
            case t.ui.keyCode.HOME:
            this._move("first", "first", e);
            break;
            case t.ui.keyCode.END:
            this._move("last", "last", e);
            break;
            case t.ui.keyCode.UP:
            this.previous(e);
            break;
            case t.ui.keyCode.DOWN:
            this.next(e);
            break;
            case t.ui.keyCode.LEFT:
            this.collapse(e);
            break;
            case t.ui.keyCode.RIGHT:
            this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
            break;
            case t.ui.keyCode.ENTER:
            case t.ui.keyCode.SPACE:
            this._activate(e);
            break;
            case t.ui.keyCode.ESCAPE:
            this.collapse(e);
            break;
            default:
            a = !1, s = this.previousFilter || "", o = !1, n = e.keyCode >= 96 && e.keyCode <= 105 ? (e.keyCode - 96).toString() : String.fromCharCode(e.keyCode), clearTimeout(this.filterTimer), n === s ? o = !0 : n = s + n, i = this._filterMenuItems(n), i = o && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i, i.length || (n = String.fromCharCode(e.keyCode), i = this._filterMenuItems(n)), i.length ? (this.focus(e, i), this.previousFilter = n, this.filterTimer = this._delay(function() {
                delete this.previousFilter
            }, 1e3)) : delete this.previousFilter
        }
        a && e.preventDefault()
    },
    _activate: function(t) {
        this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(t) : this.select(t))
    },
    refresh: function() {
        var e, i, s, n, o, a = this,
        r = this.options.icons.submenu,
        l = this.element.find(this.options.menus);
        this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length), s = l.filter(":not(.ui-menu)").hide().attr({
            role: this.options.role,
            "aria-hidden": "true",
            "aria-expanded": "false"
        }).each(function() {
            var e = t(this),
            i = e.prev(),
            s = t("<span>").data("ui-menu-submenu-caret", !0);
            a._addClass(s, "ui-menu-icon", "ui-icon " + r), i.attr("aria-haspopup", "true").prepend(s), e.attr("aria-labelledby", i.attr("id"))
        }), this._addClass(s, "ui-menu", "ui-widget ui-widget-content ui-front"), e = l.add(this.element), i = e.find(this.options.items), i.not(".ui-menu-item").each(function() {
            var e = t(this);
            a._isDivider(e) && a._addClass(e, "ui-menu-divider", "ui-widget-content")
        }), n = i.not(".ui-menu-item, .ui-menu-divider"), o = n.children().not(".ui-menu").uniqueId().attr({
            tabIndex: -1,
            role: this._itemRole()
        }), this._addClass(n, "ui-menu-item")._addClass(o, "ui-menu-item-wrapper"), i.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !t.contains(this.element[0], this.active[0]) && this.blur()
    },
    _itemRole: function() {
        return {
            menu: "menuitem",
            listbox: "option"
        }[this.options.role]
    },
    _setOption: function(t, e) {
        if ("icons" === t) {
            var i = this.element.find(".ui-menu-icon");
            this._removeClass(i, null, this.options.icons.submenu)._addClass(i, null, e.submenu)
        }
        this._super(t, e)
    },
    _setOptionDisabled: function(t) {
        this._super(t), this.element.attr("aria-disabled", String(t)), this._toggleClass(null, "ui-state-disabled", !!t)
    },
    focus: function(t, e) {
        var i, s, n;
        this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), s = this.active.children(".ui-menu-item-wrapper"), this._addClass(s, null, "ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", s.attr("id")), n = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"), this._addClass(n, null, "ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function() {
            this._close()
        }, this.delay), i = e.children(".ui-menu"), i.length && t && /^mouse/.test(t.type) && this._startOpening(i), this.activeMenu = e.parent(), this._trigger("focus", t, {
            item: e
        })
    },
    _scrollIntoView: function(e) {
        var i, s, n, o, a, r;
        this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, s = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, n = e.offset().top - this.activeMenu.offset().top - i - s, o = this.activeMenu.scrollTop(), a = this.activeMenu.height(), r = e.outerHeight(), n < 0 ? this.activeMenu.scrollTop(o + n) : n + r > a && this.activeMenu.scrollTop(o + n - a + r))
    },
    blur: function(t, e) {
        e || clearTimeout(this.timer), this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"), this._trigger("blur", t, {
            item: this.active
        }), this.active = null)
    },
    _startOpening: function(t) {
        clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function() {
            this._close(), this._open(t)
        }, this.delay))
    },
    _open: function(e) {
        var i = t.extend({
            of: this.active
        }, this.options.position);
        clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
    },
    collapseAll: function(e, i) {
        clearTimeout(this.timer), this.timer = this._delay(function() {
            var s = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
            s.length || (s = this.element), this._close(s), this.blur(e), this._removeClass(s.find(".ui-state-active"), null, "ui-state-active"), this.activeMenu = s
        }, this.delay)
    },
    _close: function(t) {
        t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false")
    },
    _closeOnDocumentClick: function(e) {
        return !t(e.target).closest(".ui-menu").length
    },
    _isDivider: function(t) {
        return !/[^\-\u2014\u2013\s]/.test(t.text())
    },
    collapse: function(t) {
        var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
        e && e.length && (this._close(), this.focus(t, e))
    },
    expand: function(t) {
        var e = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
        e && e.length && (this._open(e.parent()), this._delay(function() {
            this.focus(t, e)
        }))
    },
    next: function(t) {
        this._move("next", "first", t)
    },
    previous: function(t) {
        this._move("prev", "last", t)
    },
    isFirstItem: function() {
        return this.active && !this.active.prevAll(".ui-menu-item").length
    },
    isLastItem: function() {
        return this.active && !this.active.nextAll(".ui-menu-item").length
    },
    _move: function(t, e, i) {
        var s;
        this.active && (s = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), s && s.length && this.active || (s = this.activeMenu.find(this.options.items)[e]()), this.focus(i, s)
    },
    nextPage: function(e) {
        var i, s, n;
        if (!this.active) return void this.next(e);
        this.isLastItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
            return i = t(this), i.offset().top - s - n < 0
        }), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]()))
    },
    previousPage: function(e) {
        var i, s, n;
        if (!this.active) return void this.next(e);
        this.isFirstItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
            return i = t(this), i.offset().top - s + n > 0
        }), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items).first()))
    },
    _hasScroll: function() {
        return this.element.outerHeight() < this.element.prop("scrollHeight")
    },
    select: function(e) {
        this.active = this.active || t(e.target).closest(".ui-menu-item");
        var i = {
            item: this.active
        };
        this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, i)
    },
    _filterMenuItems: function(e) {
        var i = e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
        s = new RegExp("^" + i, "i");
        return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() {
            return s.test(t.trim(t(this).children(".ui-menu-item-wrapper").text()))
        })
    }
});
t.widget("ui.autocomplete", {
    version: "1.12.1",
    defaultElement: "<input>",
    options: {
        appendTo: null,
        autoFocus: !1,
        delay: 300,
        minLength: 1,
        position: {
            my: "left top",
            at: "left bottom",
            collision: "none"
        },
        source: null,
        change: null,
        close: null,
        focus: null,
        open: null,
        response: null,
        search: null,
        select: null
    },
    requestIndex: 0,
    pending: 0,
    _create: function() {
        var e, i, s, n = this.element[0].nodeName.toLowerCase(),
        o = "textarea" === n,
        a = "input" === n;
        this.isMultiLine = o || !a && this._isContentEditable(this.element), this.valueMethod = this.element[o || a ? "val" : "text"], this.isNewMenu = !0, this._addClass("ui-autocomplete-input"), this.element.attr("autocomplete", "off"), this._on(this.element, {
            keydown: function(n) {
                if (this.element.prop("readOnly")) return e = !0, s = !0, void(i = !0);
                e = !1, s = !1, i = !1;
                var o = t.ui.keyCode;
                switch (n.keyCode) {
                    case o.PAGE_UP:
                    e = !0, this._move("previousPage", n);
                    break;
                    case o.PAGE_DOWN:
                    e = !0, this._move("nextPage", n);
                    break;
                    case o.UP:
                    e = !0, this._keyEvent("previous", n);
                    break;
                    case o.DOWN:
                    e = !0, this._keyEvent("next", n);
                    break;
                    case o.ENTER:
                    this.menu.active && (e = !0, n.preventDefault(), this.menu.select(n));
                    break;
                    case o.TAB:
                    this.menu.active && this.menu.select(n);
                    break;
                    case o.ESCAPE:
                    this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(n), n.preventDefault());
                    break;
                    default:
                    i = !0, this._searchTimeout(n)
                }
            },
            keypress: function(s) {
                if (e) return e = !1, void(this.isMultiLine && !this.menu.element.is(":visible") || s.preventDefault());
                if (!i) {
                    var n = t.ui.keyCode;
                    switch (s.keyCode) {
                        case n.PAGE_UP:
                        this._move("previousPage", s);
                        break;
                        case n.PAGE_DOWN:
                        this._move("nextPage", s);
                        break;
                        case n.UP:
                        this._keyEvent("previous", s);
                        break;
                        case n.DOWN:
                        this._keyEvent("next", s)
                    }
                }
            },
            input: function(t) {
                if (s) return s = !1, void t.preventDefault();
                this._searchTimeout(t)
            },
            focus: function() {
                this.selectedItem = null, this.previous = this._value()
            },
            blur: function(t) {
                if (this.cancelBlur) return void delete this.cancelBlur;
                clearTimeout(this.searching), this.close(t), this._change(t)
            }
        }), this._initSource(), this.menu = t("<ul>").appendTo(this._appendTo()).menu({
            role: null
        }).hide().menu("instance"), this._addClass(this.menu.element, "ui-autocomplete", "ui-front"), this._on(this.menu.element, {
            mousedown: function(e) {
                e.preventDefault(), this.cancelBlur = !0, this._delay(function() {
                    delete this.cancelBlur, this.element[0] !== t.ui.safeActiveElement(this.document[0]) && this.element.trigger("focus")
                })
            },
            menufocus: function(e, i) {
                var s, n;
                if (this.isNewMenu && (this.isNewMenu = !1, e.originalEvent && /^mouse/.test(e.originalEvent.type))) return this.menu.blur(), void this.document.one("mousemove", function() {
                    t(e.target).trigger(e.originalEvent)
                });
                    n = i.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", e, {
                        item: n
                    }) && e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(n.value), (s = i.item.attr("aria-label") || n.value) && t.trim(s).length && (this.liveRegion.children().hide(), t("<div>").text(s).appendTo(this.liveRegion))
                },
                menuselect: function(e, i) {
                    var s = i.item.data("ui-autocomplete-item"),
                    n = this.previous;
                    this.element[0] !== t.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"), this.previous = n, this._delay(function() {
                        this.previous = n, this.selectedItem = s
                    })), !1 !== this._trigger("select", e, {
                        item: s
                    }) && this._value(s.value), this.term = this._value(), this.close(e), this.selectedItem = s
                }
            }), this.liveRegion = t("<div>", {
                role: "status",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _destroy: function() {
            clearTimeout(this.searching), this.element.removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
        },
        _setOption: function(t, e) {
            this._super(t, e), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(this._appendTo()), "disabled" === t && e && this.xhr && this.xhr.abort()
        },
        _isEventTargetInWidget: function(e) {
            var i = this.menu.element[0];
            return e.target === this.element[0] || e.target === i || t.contains(i, e.target)
        },
        _closeOnClickOutside: function(t) {
            this._isEventTargetInWidget(t) || this.close()
        },
        _appendTo: function() {
            var e = this.options.appendTo;
            return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front, dialog")), e.length || (e = this.document[0].body), e
        },
        _initSource: function() {
            var e, i, s = this;
            t.isArray(this.options.source) ? (e = this.options.source, this.source = function(i, s) {
                s(t.ui.autocomplete.filter(e, i.term))
            }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function(e, n) {
                s.xhr && s.xhr.abort(), s.xhr = t.ajax({
                    url: i,
                    data: e,
                    dataType: "json",
                    success: function(t) {
                        n(t)
                    },
                    error: function() {
                        n([])
                    }
                })
            }) : this.source = this.options.source
        },
        _searchTimeout: function(t) {
            clearTimeout(this.searching), this.searching = this._delay(function() {
                var e = this.term === this._value(),
                i = this.menu.element.is(":visible"),
                s = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;
                e && (!e || i || s) || (this.selectedItem = null, this.search(null, t))
            }, this.options.delay)
        },
        search: function(t, e) {
            return t = null != t ? t : this._value(), this.term = this._value(), t.length < this.options.minLength ? this.close(e) : !1 !== this._trigger("search", e) ? this._search(t) : void 0
        },
        _search: function(t) {
            this.pending++, this._addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
                term: t
            }, this._response())
        },
        _response: function() {
            var e = ++this.requestIndex;
            return t.proxy(function(t) {
                e === this.requestIndex && this.__response(t), --this.pending || this._removeClass("ui-autocomplete-loading")
            }, this)
        },
        __response: function(t) {
            t && (t = this._normalize(t)), this._trigger("response", null, {
                content: t
            }), !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), this._trigger("open")) : this._close()
        },
        close: function(t) {
            this.cancelSearch = !0, this._close(t)
        },
        _close: function(t) {
            this._off(this.document, "mousedown"), this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", t))
        },
        _change: function(t) {
            this.previous !== this._value() && this._trigger("change", t, {
                item: this.selectedItem
            })
        },
        _normalize: function(e) {
            return e.length && e[0].label && e[0].value ? e : t.map(e, function(e) {
                return "string" == typeof e ? {
                    label: e,
                    value: e
                } : t.extend({}, e, {
                    label: e.label || e.value,
                    value: e.value || e.label
                })
            })
        },
        _suggest: function(e) {
            var i = this.menu.element.empty();
            this._renderMenu(i, e), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(t.extend({
                of: this.element
            }, this.options.position)), this.options.autoFocus && this.menu.next(), this._on(this.document, {
                mousedown: "_closeOnClickOutside"
            })
        },
        _resizeMenu: function() {
            var t = this.menu.element;
            t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function(e, i) {
            var s = this;
            t.each(i, function(t, i) {
                s._renderItemData(e, i)
            })
        },
        _renderItemData: function(t, e) {
            return this._renderItem(t, e).data("ui-autocomplete-item", e)
        },
        _renderItem: function(e, i) {
            return t("<li>").append(t("<div>").text(i.label)).appendTo(e)
        },
        _move: function(t, e) {
            return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this.isMultiLine || this._value(this.term), void this.menu.blur()) : void this.menu[t](e) : void this.search(null, e)
        },
        widget: function() {
            return this.menu.element
        },
        _value: function() {
            return this.valueMethod.apply(this.element, arguments)
        },
        _keyEvent: function(t, e) {
            this.isMultiLine && !this.menu.element.is(":visible") || (this._move(t, e), e.preventDefault())
        },
        _isContentEditable: function(t) {
            if (!t.length) return !1;
            var e = t.prop("contentEditable");
            return "inherit" === e ? this._isContentEditable(t.parent()) : "true" === e
        }
    }), t.extend(t.ui.autocomplete, {
        escapeRegex: function(t) {
            return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        },
        filter: function(e, i) {
            var s = new RegExp(t.ui.autocomplete.escapeRegex(i), "i");
            return t.grep(e, function(t) {
                return s.test(t.label || t.value || t)
            })
        }
    }), t.widget("ui.autocomplete", t.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function(t) {
                    return t + (t > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                }
            }
        },
        __response: function(e) {
            var i;
            this._superApply(arguments), this.options.disabled || this.cancelSearch || (i = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults, this.liveRegion.children().hide(), t("<div>").text(i).appendTo(this.liveRegion))
        }
    });
    t.ui.autocomplete, t.widget("ui.controlgroup", {
        version: "1.12.1",
        defaultElement: "<div>",
        options: {
            direction: "horizontal",
            disabled: null,
            onlyVisible: !0,
            items: {
                button: "input[type=button], input[type=submit], input[type=reset], button, a",
                controlgroupLabel: ".ui-controlgroup-label",
                checkboxradio: "input[type='checkbox'], input[type='radio']",
                selectmenu: "select",
                spinner: ".ui-spinner-input"
            }
        },
        _create: function() {
            this._enhance()
        },
        _enhance: function() {
            this.element.attr("role", "toolbar"), this.refresh()
        },
        _destroy: function() {
            this._callChildMethod("destroy"), this.childWidgets.removeData("ui-controlgroup-data"), this.element.removeAttr("role"), this.options.items.controlgroupLabel && this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()
        },
        _initWidgets: function() {
            var e = this,
            i = [];
            t.each(this.options.items, function(s, n) {
                var o, a = {};
                if (n) return "controlgroupLabel" === s ? (o = e.element.find(n), o.each(function() {
                    var e = t(this);
                    e.children(".ui-controlgroup-label-contents").length || e.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")
                }), e._addClass(o, null, "ui-widget ui-widget-content ui-state-default"), void(i = i.concat(o.get()))) : void(t.fn[s] && (a = e["_" + s + "Options"] ? e["_" + s + "Options"]("middle") : {
                    classes: {}
                }, e.element.find(n).each(function() {
                    var n = t(this),
                    o = n[s]("instance"),
                    r = t.widget.extend({}, a);
                    if ("button" !== s || !n.parent(".ui-spinner").length) {
                        o || (o = n[s]()[s]("instance")), o && (r.classes = e._resolveClassesValues(r.classes, o)), n[s](r);
                        var l = n[s]("widget");
                        t.data(l[0], "ui-controlgroup-data", o || n[s]("instance")), i.push(l[0])
                    }
                })))
            }), this.childWidgets = t(t.unique(i)), this._addClass(this.childWidgets, "ui-controlgroup-item")
        },
        _callChildMethod: function(e) {
            this.childWidgets.each(function() {
                var i = t(this),
                s = i.data("ui-controlgroup-data");
                s && s[e] && s[e]()
            })
        },
        _updateCornerClass: function(t, e) {
            var i = this._buildSimpleOptions(e, "label").classes.label;
            this._removeClass(t, null, "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all"), this._addClass(t, null, i)
        },
        _buildSimpleOptions: function(t, e) {
            var i = "vertical" === this.options.direction,
            s = {
                classes: {}
            };
            return s.classes[e] = {
                middle: "",
                first: "ui-corner-" + (i ? "top" : "left"),
                last: "ui-corner-" + (i ? "bottom" : "right"),
                only: "ui-corner-all"
            }[t], s
        },
        _spinnerOptions: function(t) {
            var e = this._buildSimpleOptions(t, "ui-spinner");
            return e.classes["ui-spinner-up"] = "", e.classes["ui-spinner-down"] = "", e
        },
        _buttonOptions: function(t) {
            return this._buildSimpleOptions(t, "ui-button")
        },
        _checkboxradioOptions: function(t) {
            return this._buildSimpleOptions(t, "ui-checkboxradio-label")
        },
        _selectmenuOptions: function(t) {
            var e = "vertical" === this.options.direction;
            return {
                width: !!e && "auto",
                classes: {
                    middle: {
                        "ui-selectmenu-button-open": "",
                        "ui-selectmenu-button-closed": ""
                    },
                    first: {
                        "ui-selectmenu-button-open": "ui-corner-" + (e ? "top" : "tl"),
                        "ui-selectmenu-button-closed": "ui-corner-" + (e ? "top" : "left")
                    },
                    last: {
                        "ui-selectmenu-button-open": e ? "" : "ui-corner-tr",
                        "ui-selectmenu-button-closed": "ui-corner-" + (e ? "bottom" : "right")
                    },
                    only: {
                        "ui-selectmenu-button-open": "ui-corner-top",
                        "ui-selectmenu-button-closed": "ui-corner-all"
                    }
                }[t]
            }
        },
        _resolveClassesValues: function(e, i) {
            var s = {};
            return t.each(e, function(n) {
                var o = i.options.classes[n] || "";
                o = t.trim(o.replace(/ui-corner-([a-z]){2,6}/g, "")), s[n] = (o + " " + e[n]).replace(/\s+/g, " ")
            }), s
        },
        _setOption: function(t, e) {
            if ("direction" === t && this._removeClass("ui-controlgroup-" + this.options.direction), this._super(t, e), "disabled" === t) return void this._callChildMethod(e ? "disable" : "enable");
            this.refresh()
        },
        refresh: function() {
            var e, i = this;
            this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction), "horizontal" === this.options.direction && this._addClass(null, "ui-helper-clearfix"), this._initWidgets(), e = this.childWidgets, this.options.onlyVisible && (e = e.filter(":visible")), e.length && (t.each(["first", "last"], function(t, s) {
                var n = e[s]().data("ui-controlgroup-data");
                if (n && i["_" + n.widgetName + "Options"]) {
                    var o = i["_" + n.widgetName + "Options"](1 === e.length ? "only" : s);
                    o.classes = i._resolveClassesValues(o.classes, n), n.element[n.widgetName](o)
                } else i._updateCornerClass(e[s](), s)
            }), this._callChildMethod("refresh"))
        }
    });
t.widget("ui.checkboxradio", [t.ui.formResetMixin, {
    version: "1.12.1",
    options: {
        disabled: null,
        label: null,
        icon: !0,
        classes: {
            "ui-checkboxradio-label": "ui-corner-all",
            "ui-checkboxradio-icon": "ui-corner-all"
        }
    },
    _getCreateOptions: function() {
        var e, i, s = this,
        n = this._super() || {};
        return this._readType(), i = this.element.labels(), this.label = t(i[i.length - 1]), this.label.length || t.error("No label found for checkboxradio widget"), this.originalLabel = "", this.label.contents().not(this.element[0]).each(function() {
            s.originalLabel += 3 === this.nodeType ? t(this).text() : this.outerHTML
        }), this.originalLabel && (n.label = this.originalLabel), e = this.element[0].disabled, null != e && (n.disabled = e), n
    },
    _create: function() {
        var t = this.element[0].checked;
        this._bindFormResetHandler(), null == this.options.disabled && (this.options.disabled = this.element[0].disabled), this._setOption("disabled", this.options.disabled), this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible"), this._addClass(this.label, "ui-checkboxradio-label", "ui-button ui-widget"), "radio" === this.type && this._addClass(this.label, "ui-checkboxradio-radio-label"), this.options.label && this.options.label !== this.originalLabel ? this._updateLabel() : this.originalLabel && (this.options.label = this.originalLabel), this._enhance(), t && (this._addClass(this.label, "ui-checkboxradio-checked", "ui-state-active"), this.icon && this._addClass(this.icon, null, "ui-state-hover")), this._on({
            change: "_toggleClasses",
            focus: function() {
                this._addClass(this.label, null, "ui-state-focus ui-visual-focus")
            },
            blur: function() {
                this._removeClass(this.label, null, "ui-state-focus ui-visual-focus")
            }
        })
    },
    _readType: function() {
        var e = this.element[0].nodeName.toLowerCase();
        this.type = this.element[0].type, "input" === e && /radio|checkbox/.test(this.type) || t.error("Can't create checkboxradio on element.nodeName=" + e + " and element.type=" + this.type)
    },
    _enhance: function() {
        this._updateIcon(this.element[0].checked)
    },
    widget: function() {
        return this.label
    },
    _getRadioGroup: function() {
        var e, i = this.element[0].name,
        s = "input[name='" + t.ui.escapeSelector(i) + "']";
        return i ? (e = this.form.length ? t(this.form[0].elements).filter(s) : t(s).filter(function() {
            return 0 === t(this).form().length
        }), e.not(this.element)) : t([])
    },
    _toggleClasses: function() {
        var e = this.element[0].checked;
        this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", e), this.options.icon && "checkbox" === this.type && this._toggleClass(this.icon, null, "ui-icon-check ui-state-checked", e)._toggleClass(this.icon, null, "ui-icon-blank", !e), "radio" === this.type && this._getRadioGroup().each(function() {
            var e = t(this).checkboxradio("instance");
            e && e._removeClass(e.label, "ui-checkboxradio-checked", "ui-state-active")
        })
    },
    _destroy: function() {
        this._unbindFormResetHandler(), this.icon && (this.icon.remove(), this.iconSpace.remove())
    },
    _setOption: function(t, e) {
        if ("label" !== t || e) {
            if (this._super(t, e), "disabled" === t) return this._toggleClass(this.label, null, "ui-state-disabled", e), void(this.element[0].disabled = e);
            this.refresh()
        }
    },
    _updateIcon: function(e) {
        var i = "ui-icon ui-icon-background ";
        this.options.icon ? (this.icon || (this.icon = t("<span>"), this.iconSpace = t("<span> </span>"), this._addClass(this.iconSpace, "ui-checkboxradio-icon-space")), "checkbox" === this.type ? (i += e ? "ui-icon-check ui-state-checked" : "ui-icon-blank", this._removeClass(this.icon, null, e ? "ui-icon-blank" : "ui-icon-check")) : i += "ui-icon-blank", this._addClass(this.icon, "ui-checkboxradio-icon", i), e || this._removeClass(this.icon, null, "ui-icon-check ui-state-checked"), this.icon.prependTo(this.label).after(this.iconSpace)) : void 0 !== this.icon && (this.icon.remove(), this.iconSpace.remove(), delete this.icon)
    },
    _updateLabel: function() {
        var t = this.label.contents().not(this.element[0]);
        this.icon && (t = t.not(this.icon[0])), this.iconSpace && (t = t.not(this.iconSpace[0])), t.remove(), this.label.append(this.options.label)
    },
    refresh: function() {
        var t = this.element[0].checked,
        e = this.element[0].disabled;
        this._updateIcon(t), this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", t), null !== this.options.label && this._updateLabel(), e !== this.options.disabled && this._setOptions({
            disabled: e
        })
    }
}]);
t.ui.checkboxradio;
t.widget("ui.button", {
    version: "1.12.1",
    defaultElement: "<button>",
    options: {
        classes: {
            "ui-button": "ui-corner-all"
        },
        disabled: null,
        icon: null,
        iconPosition: "beginning",
        label: null,
        showLabel: !0
    },
    _getCreateOptions: function() {
        var t, e = this._super() || {};
        return this.isInput = this.element.is("input"), t = this.element[0].disabled, null != t && (e.disabled = t), this.originalLabel = this.isInput ? this.element.val() : this.element.html(), this.originalLabel && (e.label = this.originalLabel), e
    },
    _create: function() {
        !this.option.showLabel & !this.options.icon && (this.options.showLabel = !0), null == this.options.disabled && (this.options.disabled = this.element[0].disabled || !1), this.hasTitle = !!this.element.attr("title"), this.options.label && this.options.label !== this.originalLabel && (this.isInput ? this.element.val(this.options.label) : this.element.html(this.options.label)), this._addClass("ui-button", "ui-widget"), this._setOption("disabled", this.options.disabled), this._enhance(), this.element.is("a") && this._on({
            keyup: function(e) {
                e.keyCode === t.ui.keyCode.SPACE && (e.preventDefault(), this.element[0].click ? this.element[0].click() : this.element.trigger("click"))
            }
        })
    },
    _enhance: function() {
        this.element.is("button") || this.element.attr("role", "button"), this.options.icon && (this._updateIcon("icon", this.options.icon), this._updateTooltip())
    },
    _updateTooltip: function() {
        this.title = this.element.attr("title"), this.options.showLabel || this.title || this.element.attr("title", this.options.label)
    },
    _updateIcon: function(e, i) {
        var s = "iconPosition" !== e,
        n = s ? this.options.iconPosition : i,
        o = "top" === n || "bottom" === n;
        this.icon ? s && this._removeClass(this.icon, null, this.options.icon) : (this.icon = t("<span>"), this._addClass(this.icon, "ui-button-icon", "ui-icon"), this.options.showLabel || this._addClass("ui-button-icon-only")), s && this._addClass(this.icon, null, i), this._attachIcon(n), o ? (this._addClass(this.icon, null, "ui-widget-icon-block"), this.iconSpace && this.iconSpace.remove()) : (this.iconSpace || (this.iconSpace = t("<span> </span>"), this._addClass(this.iconSpace, "ui-button-icon-space")), this._removeClass(this.icon, null, "ui-wiget-icon-block"), this._attachIconSpace(n))
    },
    _destroy: function() {
        this.element.removeAttr("role"), this.icon && this.icon.remove(), this.iconSpace && this.iconSpace.remove(), this.hasTitle || this.element.removeAttr("title")
    },
    _attachIconSpace: function(t) {
        this.icon[/^(?:end|bottom)/.test(t) ? "before" : "after"](this.iconSpace)
    },
    _attachIcon: function(t) {
        this.element[/^(?:end|bottom)/.test(t) ? "append" : "prepend"](this.icon)
    },
    _setOptions: function(t) {
        var e = void 0 === t.showLabel ? this.options.showLabel : t.showLabel,
        i = void 0 === t.icon ? this.options.icon : t.icon;
        e || i || (t.showLabel = !0), this._super(t)
    },
    _setOption: function(t, e) {
        "icon" === t && (e ? this._updateIcon(t, e) : this.icon && (this.icon.remove(), this.iconSpace && this.iconSpace.remove())), "iconPosition" === t && this._updateIcon(t, e), "showLabel" === t && (this._toggleClass("ui-button-icon-only", null, !e), this._updateTooltip()), "label" === t && (this.isInput ? this.element.val(e) : (this.element.html(e), this.icon && (this._attachIcon(this.options.iconPosition), this._attachIconSpace(this.options.iconPosition)))), this._super(t, e), "disabled" === t && (this._toggleClass(null, "ui-state-disabled", e), this.element[0].disabled = e, e && this.element.blur())
    },
    refresh: function() {
        var t = this.element.is("input, button") ? this.element[0].disabled : this.element.hasClass("ui-button-disabled");
        t !== this.options.disabled && this._setOptions({
            disabled: t
        }), this._updateTooltip()
    }
}), !1 !== t.uiBackCompat && (t.widget("ui.button", t.ui.button, {
    options: {
        text: !0,
        icons: {
            primary: null,
            secondary: null
        }
    },
    _create: function() {
        this.options.showLabel && !this.options.text && (this.options.showLabel = this.options.text), !this.options.showLabel && this.options.text && (this.options.text = this.options.showLabel), this.options.icon || !this.options.icons.primary && !this.options.icons.secondary ? this.options.icon && (this.options.icons.primary = this.options.icon) : this.options.icons.primary ? this.options.icon = this.options.icons.primary : (this.options.icon = this.options.icons.secondary, this.options.iconPosition = "end"), this._super()
    },
    _setOption: function(t, e) {
        if ("text" === t) return void this._super("showLabel", e);
        "showLabel" === t && (this.options.text = e), "icon" === t && (this.options.icons.primary = e), "icons" === t && (e.primary ? (this._super("icon", e.primary), this._super("iconPosition", "beginning")) : e.secondary && (this._super("icon", e.secondary), this._super("iconPosition", "end"))), this._superApply(arguments)
    }
}), t.fn.button = function(e) {
    return function() {
        return !this.length || this.length && "INPUT" !== this[0].tagName || this.length && "INPUT" === this[0].tagName && "checkbox" !== this.attr("type") && "radio" !== this.attr("type") ? e.apply(this, arguments) : (t.ui.checkboxradio || t.error("Checkboxradio widget missing"), 0 === arguments.length ? this.checkboxradio({
            icon: !1
        }) : this.checkboxradio.apply(this, arguments))
    }
}(t.fn.button), t.fn.buttonset = function() {
    return t.ui.controlgroup || t.error("Controlgroup widget missing"), "option" === arguments[0] && "items" === arguments[1] && arguments[2] ? this.controlgroup.apply(this, [arguments[0], "items.button", arguments[2]]) : "option" === arguments[0] && "items" === arguments[1] ? this.controlgroup.apply(this, [arguments[0], "items.button"]) : ("object" == typeof arguments[0] && arguments[0].items && (arguments[0].items = {
        button: arguments[0].items
    }),
    this.controlgroup.apply(this, arguments))
});
t.ui.button;
t.extend(t.ui, {
    datepicker: {
        version: "1.12.1"
    }
});
var d;
t.extend(s.prototype, {
    markerClassName: "hasDatepicker",
    maxRows: 4,
    _widgetDatepicker: function() {
        return this.dpDiv
    },
    setDefaults: function(t) {
        return a(this._defaults, t || {}), this
    },
    _attachDatepicker: function(e, i) {
        var s, n, o;
        s = e.nodeName.toLowerCase(), n = "div" === s || "span" === s, e.id || (this.uuid += 1, e.id = "dp" + this.uuid), o = this._newInst(t(e), n), o.settings = t.extend({}, i || {}), "input" === s ? this._connectDatepicker(e, o) : n && this._inlineDatepicker(e, o)
    },
    _newInst: function(e, i) {
        return {
            id: e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"),
            input: e,
            selectedDay: 0,
            selectedMonth: 0,
            selectedYear: 0,
            drawMonth: 0,
            drawYear: 0,
            inline: i,
            dpDiv: i ? n(t("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
        }
    },
    _connectDatepicker: function(e, i) {
        var s = t(e);
        i.append = t([]), i.trigger = t([]), s.hasClass(this.markerClassName) || (this._attachments(s, i), s.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp), this._autoSize(i), t.data(e, "datepicker", i), i.settings.disabled && this._disableDatepicker(e))
    },
    _attachments: function(e, i) {
        var s, n, o, a = this._get(i, "appendText"),
        r = this._get(i, "isRTL");
        i.append && i.append.remove(), a && (i.append = t("<span class='" + this._appendClass + "'>" + a + "</span>"), e[r ? "before" : "after"](i.append)), e.off("focus", this._showDatepicker), i.trigger && i.trigger.remove(), s = this._get(i, "showOn"), "focus" !== s && "both" !== s || e.on("focus", this._showDatepicker), "button" !== s && "both" !== s || (n = this._get(i, "buttonText"), o = this._get(i, "buttonImage"), i.trigger = t(this._get(i, "buttonImageOnly") ? t("<img/>").addClass(this._triggerClass).attr({
            src: o,
            alt: n,
            title: n
        }) : t("<button type='button'></button>").addClass(this._triggerClass).html(o ? t("<img/>").attr({
            src: o,
            alt: n,
            title: n
        }) : n)), e[r ? "before" : "after"](i.trigger), i.trigger.on("click", function() {
            return t.datepicker._datepickerShowing && t.datepicker._lastInput === e[0] ? t.datepicker._hideDatepicker() : t.datepicker._datepickerShowing && t.datepicker._lastInput !== e[0] ? (t.datepicker._hideDatepicker(), t.datepicker._showDatepicker(e[0])) : t.datepicker._showDatepicker(e[0]), !1
        }))
    },
    _autoSize: function(t) {
        if (this._get(t, "autoSize") && !t.inline) {
            var e, i, s, n, o = new Date(2009, 11, 20),
            a = this._get(t, "dateFormat");
            a.match(/[DM]/) && (e = function(t) {
                for (i = 0, s = 0, n = 0; n < t.length; n++) t[n].length > i && (i = t[n].length, s = n);
                    return s
            }, o.setMonth(e(this._get(t, a.match(/MM/) ? "monthNames" : "monthNamesShort"))), o.setDate(e(this._get(t, a.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - o.getDay())), t.input.attr("size", this._formatDate(t, o).length)
        }
    },
    _inlineDatepicker: function(e, i) {
        var s = t(e);
        s.hasClass(this.markerClassName) || (s.addClass(this.markerClassName).append(i.dpDiv), t.data(e, "datepicker", i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(e), i.dpDiv.css("display", "block"))
    },
    _dialogDatepicker: function(e, i, s, n, o) {
        var r, l, h, c, u, d = this._dialogInst;
        return d || (this.uuid += 1, r = "dp" + this.uuid, this._dialogInput = t("<input type='text' id='" + r + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.on("keydown", this._doKeyDown), t("body").append(this._dialogInput), d = this._dialogInst = this._newInst(this._dialogInput, !1), d.settings = {}, t.data(this._dialogInput[0], "datepicker", d)), a(d.settings, n || {}), i = i && i.constructor === Date ? this._formatDate(d, i) : i, this._dialogInput.val(i), this._pos = o ? o.length ? o : [o.pageX, o.pageY] : null, this._pos || (l = document.documentElement.clientWidth, h = document.documentElement.clientHeight, c = document.documentElement.scrollLeft || document.body.scrollLeft, u = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [l / 2 - 100 + c, h / 2 - 150 + u]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), d.settings.onSelect = s, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), t.blockUI && t.blockUI(this.dpDiv), t.data(this._dialogInput[0], "datepicker", d), this
    },
    _destroyDatepicker: function(e) {
        var i, s = t(e),
        n = t.data(e, "datepicker");
        s.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), t.removeData(e, "datepicker"), "input" === i ? (n.append.remove(), n.trigger.remove(), s.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp)) : "div" !== i && "span" !== i || s.removeClass(this.markerClassName).empty(), d === n && (d = null))
    },
    _enableDatepicker: function(e) {
        var i, s, n = t(e),
        o = t.data(e, "datepicker");
        n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !1, o.trigger.filter("button").each(function() {
            this.disabled = !1
        }).end().filter("img").css({
            opacity: "1.0",
            cursor: ""
        })) : "div" !== i && "span" !== i || (s = n.children("." + this._inlineClass), s.children().removeClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = t.map(this._disabledInputs, function(t) {
            return t === e ? null : t
        }))
    },
    _disableDatepicker: function(e) {
        var i, s, n = t(e),
        o = t.data(e, "datepicker");
        n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !0, o.trigger.filter("button").each(function() {
            this.disabled = !0
        }).end().filter("img").css({
            opacity: "0.5",
            cursor: "default"
        })) : "div" !== i && "span" !== i || (s = n.children("." + this._inlineClass), s.children().addClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = t.map(this._disabledInputs, function(t) {
            return t === e ? null : t
        }), this._disabledInputs[this._disabledInputs.length] = e)
    },
    _isDisabledDatepicker: function(t) {
        if (!t) return !1;
        for (var e = 0; e < this._disabledInputs.length; e++)
            if (this._disabledInputs[e] === t) return !0;
        return !1
    },
    _getInst: function(e) {
        try {
            return t.data(e, "datepicker")
        } catch (t) {
            throw "Missing instance data for this datepicker"
        }
    },
    _optionDatepicker: function(e, i, s) {
        var n, o, r, l, h = this._getInst(e);
        if (2 === arguments.length && "string" == typeof i) return "defaults" === i ? t.extend({}, t.datepicker._defaults) : h ? "all" === i ? t.extend({}, h.settings) : this._get(h, i) : null;
        n = i || {}, "string" == typeof i && (n = {}, n[i] = s), h && (this._curInst === h && this._hideDatepicker(), o = this._getDateDatepicker(e, !0), r = this._getMinMaxDate(h, "min"), l = this._getMinMaxDate(h, "max"), a(h.settings, n), null !== r && void 0 !== n.dateFormat && void 0 === n.minDate && (h.settings.minDate = this._formatDate(h, r)), null !== l && void 0 !== n.dateFormat && void 0 === n.maxDate && (h.settings.maxDate = this._formatDate(h, l)), "disabled" in n && (n.disabled ? this._disableDatepicker(e) : this._enableDatepicker(e)), this._attachments(t(e), h), this._autoSize(h), this._setDate(h, o), this._updateAlternate(h), this._updateDatepicker(h))
    },
    _changeDatepicker: function(t, e, i) {
        this._optionDatepicker(t, e, i)
    },
    _refreshDatepicker: function(t) {
        var e = this._getInst(t);
        e && this._updateDatepicker(e)
    },
    _setDateDatepicker: function(t, e) {
        var i = this._getInst(t);
        i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i))
    },
    _getDateDatepicker: function(t, e) {
        var i = this._getInst(t);
        return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null
    },
    _doKeyDown: function(e) {
        var i, s, n, o = t.datepicker._getInst(e.target),
        a = !0,
        r = o.dpDiv.is(".ui-datepicker-rtl");
        if (o._keyEvent = !0, t.datepicker._datepickerShowing) switch (e.keyCode) {
            case 9:
            t.datepicker._hideDatepicker(), a = !1;
            break;
            case 13:
            return n = t("td." + t.datepicker._dayOverClass + ":not(." + t.datepicker._currentClass + ")", o.dpDiv), n[0] && t.datepicker._selectDay(e.target, o.selectedMonth, o.selectedYear, n[0]), i = t.datepicker._get(o, "onSelect"), i ? (s = t.datepicker._formatDate(o), i.apply(o.input ? o.input[0] : null, [s, o])) : t.datepicker._hideDatepicker(), !1;
            case 27:
            t.datepicker._hideDatepicker();
            break;
            case 33:
            t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
            break;
            case 34:
            t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
            break;
            case 35:
            (e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target), a = e.ctrlKey || e.metaKey;
            break;
            case 36:
            (e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target), a = e.ctrlKey || e.metaKey;
            break;
            case 37:
            (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? 1 : -1, "D"), a = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
            break;
            case 38:
            (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, -7, "D"), a = e.ctrlKey || e.metaKey;
            break;
            case 39:
            (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? -1 : 1, "D"), a = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
            break;
            case 40:
            (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, 7, "D"), a = e.ctrlKey || e.metaKey;
            break;
            default:
            a = !1
        } else 36 === e.keyCode && e.ctrlKey ? t.datepicker._showDatepicker(this) : a = !1;
        a && (e.preventDefault(), e.stopPropagation())
    },
    _doKeyPress: function(e) {
        var i, s, n = t.datepicker._getInst(e.target);
        if (t.datepicker._get(n, "constrainInput")) return i = t.datepicker._possibleChars(t.datepicker._get(n, "dateFormat")), s = String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), e.ctrlKey || e.metaKey || s < " " || !i || i.indexOf(s) > -1
    },
_doKeyUp: function(e) {
    var i, s = t.datepicker._getInst(e.target);
    if (s.input.val() !== s.lastVal) try {
        i = t.datepicker.parseDate(t.datepicker._get(s, "dateFormat"), s.input ? s.input.val() : null, t.datepicker._getFormatConfig(s)), i && (t.datepicker._setDateFromField(s), t.datepicker._updateAlternate(s), t.datepicker._updateDatepicker(s))
    } catch (t) {}
    return !0
},
_showDatepicker: function(e) {
    if (e = e.target || e, "input" !== e.nodeName.toLowerCase() && (e = t("input", e.parentNode)[0]), !t.datepicker._isDisabledDatepicker(e) && t.datepicker._lastInput !== e) {
        var s, n, o, r, l, h, c;
        s = t.datepicker._getInst(e), t.datepicker._curInst && t.datepicker._curInst !== s && (t.datepicker._curInst.dpDiv.stop(!0, !0), s && t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])), n = t.datepicker._get(s, "beforeShow"), o = n ? n.apply(e, [e, s]) : {}, !1 !== o && (a(s.settings, o), s.lastVal = null, t.datepicker._lastInput = e, t.datepicker._setDateFromField(s), t.datepicker._inDialog && (e.value = ""), t.datepicker._pos || (t.datepicker._pos = t.datepicker._findPos(e), t.datepicker._pos[1] += e.offsetHeight), r = !1, t(e).parents().each(function() {
            return !(r |= "fixed" === t(this).css("position"))
        }), l = {
            left: t.datepicker._pos[0],
            top: t.datepicker._pos[1]
        }, t.datepicker._pos = null, s.dpDiv.empty(), s.dpDiv.css({
            position: "absolute",
            display: "block",
            top: "-1000px"
        }), t.datepicker._updateDatepicker(s), l = t.datepicker._checkOffset(s, l, r), s.dpDiv.css({
            position: t.datepicker._inDialog && t.blockUI ? "static" : r ? "fixed" : "absolute",
            display: "none",
            left: l.left + "px",
            top: l.top + "px"
        }), s.inline || (h = t.datepicker._get(s, "showAnim"), c = t.datepicker._get(s, "duration"), s.dpDiv.css("z-index", i(t(e)) + 1), t.datepicker._datepickerShowing = !0, t.effects && t.effects.effect[h] ? s.dpDiv.show(h, t.datepicker._get(s, "showOptions"), c) : s.dpDiv[h || "show"](h ? c : null), t.datepicker._shouldFocusInput(s) && s.input.trigger("focus"), t.datepicker._curInst = s))
    }
},
_updateDatepicker: function(e) {
    this.maxRows = 4, d = e, e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e);
    var i, s = this._getNumberOfMonths(e),
    n = s[1],
    a = e.dpDiv.find("." + this._dayOverClass + " a");
    a.length > 0 && o.apply(a.get(0)), e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), n > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + n).css("width", 17 * n + "em"), e.dpDiv[(1 !== s[0] || 1 !== s[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e === t.datepicker._curInst && t.datepicker._datepickerShowing && t.datepicker._shouldFocusInput(e) && e.input.trigger("focus"), e.yearshtml && (i = e.yearshtml, setTimeout(function() {
        i === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), i = e.yearshtml = null
    }, 0))
},
_shouldFocusInput: function(t) {
    return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus")
},
_checkOffset: function(e, i, s) {
    var n = e.dpDiv.outerWidth(),
    o = e.dpDiv.outerHeight(),
    a = e.input ? e.input.outerWidth() : 0,
    r = e.input ? e.input.outerHeight() : 0,
    l = document.documentElement.clientWidth + (s ? 0 : t(document).scrollLeft()),
    h = document.documentElement.clientHeight + (s ? 0 : t(document).scrollTop());
    return i.left -= this._get(e, "isRTL") ? n - a : 0, i.left -= s && i.left === e.input.offset().left ? t(document).scrollLeft() : 0, i.top -= s && i.top === e.input.offset().top + r ? t(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + n > l && l > n ? Math.abs(i.left + n - l) : 0), i.top -= Math.min(i.top, i.top + o > h && h > o ? Math.abs(o + r) : 0), i
},
_findPos: function(e) {
    for (var i, s = this._getInst(e), n = this._get(s, "isRTL"); e && ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e));) e = e[n ? "previousSibling" : "nextSibling"];
        return i = t(e).offset(), [i.left, i.top]
},
_hideDatepicker: function(e) {
    var i, s, n, o, a = this._curInst;
    !a || e && a !== t.data(e, "datepicker") || this._datepickerShowing && (i = this._get(a, "showAnim"), s = this._get(a, "duration"), n = function() {
        t.datepicker._tidyDialog(a)
    }, t.effects && (t.effects.effect[i] || t.effects[i]) ? a.dpDiv.hide(i, t.datepicker._get(a, "showOptions"), s, n) : a.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? s : null, n), i || n(), this._datepickerShowing = !1, o = this._get(a, "onClose"), o && o.apply(a.input ? a.input[0] : null, [a.input ? a.input.val() : "", a]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
        position: "absolute",
        left: "0",
        top: "-100px"
    }), t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))), this._inDialog = !1)
},
_tidyDialog: function(t) {
    t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")
},
_checkExternalClick: function(e) {
    if (t.datepicker._curInst) {
        var i = t(e.target),
        s = t.datepicker._getInst(i[0]);
        (i[0].id === t.datepicker._mainDivId || 0 !== i.parents("#" + t.datepicker._mainDivId).length || i.hasClass(t.datepicker.markerClassName) || i.closest("." + t.datepicker._triggerClass).length || !t.datepicker._datepickerShowing || t.datepicker._inDialog && t.blockUI) && (!i.hasClass(t.datepicker.markerClassName) || t.datepicker._curInst === s) || t.datepicker._hideDatepicker()
    }
},
_adjustDate: function(e, i, s) {
    var n = t(e),
    o = this._getInst(n[0]);
    this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(o, i + ("M" === s ? this._get(o, "showCurrentAtPos") : 0), s), this._updateDatepicker(o))
},
_gotoToday: function(e) {
    var i, s = t(e),
    n = this._getInst(s[0]);
    this._get(n, "gotoCurrent") && n.currentDay ? (n.selectedDay = n.currentDay, n.drawMonth = n.selectedMonth = n.currentMonth, n.drawYear = n.selectedYear = n.currentYear) : (i = new Date, n.selectedDay = i.getDate(), n.drawMonth = n.selectedMonth = i.getMonth(), n.drawYear = n.selectedYear = i.getFullYear()), this._notifyChange(n), this._adjustDate(s)
},
_selectMonthYear: function(e, i, s) {
    var n = t(e),
    o = this._getInst(n[0]);
    o["selected" + ("M" === s ? "Month" : "Year")] = o["draw" + ("M" === s ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(o), this._adjustDate(n)
},
_selectDay: function(e, i, s, n) {
    var o, a = t(e);
    t(n).hasClass(this._unselectableClass) || this._isDisabledDatepicker(a[0]) || (o = this._getInst(a[0]), o.selectedDay = o.currentDay = t("a", n).html(), o.selectedMonth = o.currentMonth = i, o.selectedYear = o.currentYear = s, this._selectDate(e, this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear)))
},
_clearDate: function(e) {
    var i = t(e);
    this._selectDate(i, "")
},
_selectDate: function(e, i) {
    var s, n = t(e),
    o = this._getInst(n[0]);
    i = null != i ? i : this._formatDate(o), o.input && o.input.val(i), this._updateAlternate(o), s = this._get(o, "onSelect"), s ? s.apply(o.input ? o.input[0] : null, [i, o]) : o.input && o.input.trigger("change"), o.inline ? this._updateDatepicker(o) : (this._hideDatepicker(), this._lastInput = o.input[0], "object" != typeof o.input[0] && o.input.trigger("focus"), this._lastInput = null)
},
_updateAlternate: function(e) {
    var i, s, n, o = this._get(e, "altField");
    o && (i = this._get(e, "altFormat") || this._get(e, "dateFormat"), s = this._getDate(e), n = this.formatDate(i, s, this._getFormatConfig(e)), t(o).val(n))
},
noWeekends: function(t) {
    var e = t.getDay();
    return [e > 0 && e < 6, ""]
},
iso8601Week: function(t) {
    var e, i = new Date(t.getTime());
    return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), e = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((e - i) / 864e5) / 7) + 1
},
parseDate: function(e, i, s) {
    if (null == e || null == i) throw "Invalid arguments";
    if ("" === (i = "object" == typeof i ? i.toString() : i + "")) return null;
    var n, o, a, r, l = 0,
    h = (s ? s.shortYearCutoff : null) || this._defaults.shortYearCutoff,
    c = "string" != typeof h ? h : (new Date).getFullYear() % 100 + parseInt(h, 10),
    u = (s ? s.dayNamesShort : null) || this._defaults.dayNamesShort,
    d = (s ? s.dayNames : null) || this._defaults.dayNames,
    p = (s ? s.monthNamesShort : null) || this._defaults.monthNamesShort,
    f = (s ? s.monthNames : null) || this._defaults.monthNames,
    g = -1,
    m = -1,
    v = -1,
    _ = -1,
    b = !1,
    y = function(t) {
        var i = n + 1 < e.length && e.charAt(n + 1) === t;
        return i && n++, i
    },
    x = function(t) {
        var e = y(t),
        s = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2,
        n = "y" === t ? s : 1,
        o = new RegExp("^\\d{" + n + "," + s + "}"),
        a = i.substring(l).match(o);
        if (!a) throw "Missing number at position " + l;
        return l += a[0].length, parseInt(a[0], 10)
    },
    w = function(e, s, n) {
        var o = -1,
        a = t.map(y(e) ? n : s, function(t, e) {
            return [
            [e, t]
            ]
        }).sort(function(t, e) {
            return -(t[1].length - e[1].length)
        });
        if (t.each(a, function(t, e) {
            var s = e[1];
            if (i.substr(l, s.length).toLowerCase() === s.toLowerCase()) return o = e[0], l += s.length, !1
        }), -1 !== o) return o + 1;
            throw "Unknown name at position " + l
        },
        k = function() {
            if (i.charAt(l) !== e.charAt(n)) throw "Unexpected literal at position " + l;
            l++
        };
        for (n = 0; n < e.length; n++)
            if (b) "'" !== e.charAt(n) || y("'") ? k() : b = !1;
        else switch (e.charAt(n)) {
            case "d":
            v = x("d");
            break;
            case "D":
            w("D", u, d);
            break;
            case "o":
            _ = x("o");
            break;
            case "m":
            m = x("m");
            break;
            case "M":
            m = w("M", p, f);
            break;
            case "y":
            g = x("y");
            break;
            case "@":
            r = new Date(x("@")), g = r.getFullYear(), m = r.getMonth() + 1, v = r.getDate();
            break;
            case "!":
            r = new Date((x("!") - this._ticksTo1970) / 1e4), g = r.getFullYear(), m = r.getMonth() + 1, v = r.getDate();
            break;
            case "'":
            y("'") ? k() : b = !0;
            break;
            default:
            k()
        }
        if (l < i.length && (a = i.substr(l), !/^\s+/.test(a))) throw "Extra/unparsed characters found in date: " + a;
        if (-1 === g ? g = (new Date).getFullYear() : g < 100 && (g += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (g <= c ? 0 : -100)), _ > -1)
            for (m = 1, v = _;;) {
                if (o = this._getDaysInMonth(g, m - 1), v <= o) break;
                m++, v -= o
            }
            if (r = this._daylightSavingAdjust(new Date(g, m - 1, v)), r.getFullYear() !== g || r.getMonth() + 1 !== m || r.getDate() !== v) throw "Invalid date";
            return r
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 60 * 60 * 1e7,
        formatDate: function(t, e, i) {
            if (!e) return "";
            var s, n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
            o = (i ? i.dayNames : null) || this._defaults.dayNames,
            a = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
            r = (i ? i.monthNames : null) || this._defaults.monthNames,
            l = function(e) {
                var i = s + 1 < t.length && t.charAt(s + 1) === e;
                return i && s++, i
            },
            h = function(t, e, i) {
                var s = "" + e;
                if (l(t))
                    for (; s.length < i;) s = "0" + s;
                        return s
                },
                c = function(t, e, i, s) {
                    return l(t) ? s[e] : i[e]
                },
                u = "",
                d = !1;
                if (e)
                    for (s = 0; s < t.length; s++)
                        if (d) "'" !== t.charAt(s) || l("'") ? u += t.charAt(s) : d = !1;
                    else switch (t.charAt(s)) {
                        case "d":
                        u += h("d", e.getDate(), 2);
                        break;
                        case "D":
                        u += c("D", e.getDay(), n, o);
                        break;
                        case "o":
                        u += h("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                        break;
                        case "m":
                        u += h("m", e.getMonth() + 1, 2);
                        break;
                        case "M":
                        u += c("M", e.getMonth(), a, r);
                        break;
                        case "y":
                        u += l("y") ? e.getFullYear() : (e.getFullYear() % 100 < 10 ? "0" : "") + e.getFullYear() % 100;
                        break;
                        case "@":
                        u += e.getTime();
                        break;
                        case "!":
                        u += 1e4 * e.getTime() + this._ticksTo1970;
                        break;
                        case "'":
                        l("'") ? u += "'" : d = !0;
                        break;
                        default:
                        u += t.charAt(s)
                    }
                    return u
                },
                _possibleChars: function(t) {
                    var e, i = "",
                    s = !1,
                    n = function(i) {
                        var s = e + 1 < t.length && t.charAt(e + 1) === i;
                        return s && e++, s
                    };
                    for (e = 0; e < t.length; e++)
                        if (s) "'" !== t.charAt(e) || n("'") ? i += t.charAt(e) : s = !1;
                    else switch (t.charAt(e)) {
                        case "d":
                        case "m":
                        case "y":
                        case "@":
                        i += "0123456789";
                        break;
                        case "D":
                        case "M":
                        return null;
                        case "'":
                        n("'") ? i += "'" : s = !0;
                        break;
                        default:
                        i += t.charAt(e)
                    }
                    return i
                },
                _get: function(t, e) {
                    return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e]
                },
                _setDateFromField: function(t, e) {
                    if (t.input.val() !== t.lastVal) {
                        var i = this._get(t, "dateFormat"),
                        s = t.lastVal = t.input ? t.input.val() : null,
                        n = this._getDefaultDate(t),
                        o = n,
                        a = this._getFormatConfig(t);
                        try {
                            o = this.parseDate(i, s, a) || n
                        } catch (t) {
                            s = e ? "" : s
                        }
                        t.selectedDay = o.getDate(), t.drawMonth = t.selectedMonth = o.getMonth(), t.drawYear = t.selectedYear = o.getFullYear(), t.currentDay = s ? o.getDate() : 0, t.currentMonth = s ? o.getMonth() : 0, t.currentYear = s ? o.getFullYear() : 0, this._adjustInstDate(t)
                    }
                },
                _getDefaultDate: function(t) {
                    return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date))
                },
                _determineDate: function(e, i, s) {
                    var n = null == i || "" === i ? s : "string" == typeof i ? function(i) {
                        try {
                            return t.datepicker.parseDate(t.datepicker._get(e, "dateFormat"), i, t.datepicker._getFormatConfig(e))
                        } catch (t) {}
                        for (var s = (i.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date, n = s.getFullYear(), o = s.getMonth(), a = s.getDate(), r = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = r.exec(i); l;) {
                            switch (l[2] || "d") {
                                case "d":
                                case "D":
                                a += parseInt(l[1], 10);
                                break;
                                case "w":
                                case "W":
                                a += 7 * parseInt(l[1], 10);
                                break;
                                case "m":
                                case "M":
                                o += parseInt(l[1], 10), a = Math.min(a, t.datepicker._getDaysInMonth(n, o));
                                break;
                                case "y":
                                case "Y":
                                n += parseInt(l[1], 10), a = Math.min(a, t.datepicker._getDaysInMonth(n, o))
                            }
                            l = r.exec(i)
                        }
                        return new Date(n, o, a)
                    }(i) : "number" == typeof i ? isNaN(i) ? s : function(t) {
                        var e = new Date;
                        return e.setDate(e.getDate() + t), e
                    }(i) : new Date(i.getTime());
                    return n = n && "Invalid Date" === n.toString() ? s : n, n && (n.setHours(0), n.setMinutes(0), n.setSeconds(0), n.setMilliseconds(0)), this._daylightSavingAdjust(n)
                },
                _daylightSavingAdjust: function(t) {
                    return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null
                },
                _setDate: function(t, e, i) {
                    var s = !e,
                    n = t.selectedMonth,
                    o = t.selectedYear,
                    a = this._restrictMinMax(t, this._determineDate(t, e, new Date));
                    t.selectedDay = t.currentDay = a.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = a.getMonth(), t.drawYear = t.selectedYear = t.currentYear = a.getFullYear(), n === t.selectedMonth && o === t.selectedYear || i || this._notifyChange(t), this._adjustInstDate(t), t.input && t.input.val(s ? "" : this._formatDate(t))
                },
                _getDate: function(t) {
                    return !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay))
                },
                _attachHandlers: function(e) {
                    var i = this._get(e, "stepMonths"),
                    s = "#" + e.id.replace(/\\\\/g, "\\");
                    e.dpDiv.find("[data-handler]").map(function() {
                        var e = {
                            prev: function() {
                                t.datepicker._adjustDate(s, -i, "M")
                            },
                            next: function() {
                                t.datepicker._adjustDate(s, +i, "M")
                            },
                            hide: function() {
                                t.datepicker._hideDatepicker()
                            },
                            today: function() {
                                t.datepicker._gotoToday(s)
                            },
                            selectDay: function() {
                                return t.datepicker._selectDay(s, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                            },
                            selectMonth: function() {
                                return t.datepicker._selectMonthYear(s, this, "M"), !1
                            },
                            selectYear: function() {
                                return t.datepicker._selectMonthYear(s, this, "Y"), !1
                            }
                        };
                        t(this).on(this.getAttribute("data-event"), e[this.getAttribute("data-handler")])
                    })
                },
                _generateHTML: function(t) {
                    var e, i, s, n, o, a, r, l, h, c, u, d, p, f, g, m, v, _, b, y, x, w, k, C, D, T, I, S, P, M, A, O, N, H, E, L, W, z, F, j = new Date,
                    R = this._daylightSavingAdjust(new Date(j.getFullYear(), j.getMonth(), j.getDate())),
                    q = this._get(t, "isRTL"),
                    B = this._get(t, "showButtonPanel"),
                    $ = this._get(t, "hideIfNoPrevNext"),
                    Y = this._get(t, "navigationAsDateFormat"),
                    U = this._getNumberOfMonths(t),
                    K = this._get(t, "showCurrentAtPos"),
                    V = this._get(t, "stepMonths"),
                    X = 1 !== U[0] || 1 !== U[1],
                    G = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
                    Q = this._getMinMaxDate(t, "min"),
                    J = this._getMinMaxDate(t, "max"),
                    Z = t.drawMonth - K,
                    tt = t.drawYear;
                    if (Z < 0 && (Z += 12, tt--), J)
                        for (e = this._daylightSavingAdjust(new Date(J.getFullYear(), J.getMonth() - U[0] * U[1] + 1, J.getDate())), e = Q && e < Q ? Q : e; this._daylightSavingAdjust(new Date(tt, Z, 1)) > e;) --Z < 0 && (Z = 11, tt--);
                            for (t.drawMonth = Z, t.drawYear = tt, i = this._get(t, "prevText"), i = Y ? this.formatDate(i, this._daylightSavingAdjust(new Date(tt, Z - V, 1)), this._getFormatConfig(t)) : i, s = this._canAdjustMonth(t, -1, tt, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (q ? "e" : "w") + "'>" + i + "</span></a>" : $ ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (q ? "e" : "w") + "'>" + i + "</span></a>", n = this._get(t, "nextText"), n = Y ? this.formatDate(n, this._daylightSavingAdjust(new Date(tt, Z + V, 1)), this._getFormatConfig(t)) : n, o = this._canAdjustMonth(t, 1, tt, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (q ? "w" : "e") + "'>" + n + "</span></a>" : $ ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (q ? "w" : "e") + "'>" + n + "</span></a>", a = this._get(t, "currentText"), r = this._get(t, "gotoCurrent") && t.currentDay ? G : R, a = Y ? this.formatDate(a, r, this._getFormatConfig(t)) : a, l = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>", h = B ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (q ? l : "") + (this._isInRange(t, r) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + a + "</button>" : "") + (q ? "" : l) + "</div>" : "", c = parseInt(this._get(t, "firstDay"), 10), c = isNaN(c) ? 0 : c, u = this._get(t, "showWeek"), d = this._get(t, "dayNames"), p = this._get(t, "dayNamesMin"), f = this._get(t, "monthNames"), g = this._get(t, "monthNamesShort"), m = this._get(t, "beforeShowDay"), v = this._get(t, "showOtherMonths"), _ = this._get(t, "selectOtherMonths"), b = this._getDefaultDate(t), y = "", w = 0; w < U[0]; w++) {
                                for (k = "", this.maxRows = 4, C = 0; C < U[1]; C++) {
                                    if (D = this._daylightSavingAdjust(new Date(tt, Z, t.selectedDay)), T = " ui-corner-all", I = "", X) {
                                        if (I += "<div class='ui-datepicker-group", U[1] > 1) switch (C) {
                                            case 0:
                                            I += " ui-datepicker-group-first", T = " ui-corner-" + (q ? "right" : "left");
                                            break;
                                            case U[1] - 1:
                                            I += " ui-datepicker-group-last", T = " ui-corner-" + (q ? "left" : "right");
                                            break;
                                            default:
                                            I += " ui-datepicker-group-middle", T = ""
                                        }
                                        I += "'>"
                                    }
                                    for (I += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + T + "'>" + (/all|left/.test(T) && 0 === w ? q ? o : s : "") + (/all|right/.test(T) && 0 === w ? q ? s : o : "") + this._generateMonthYearHeader(t, Z, tt, Q, J, w > 0 || C > 0, f, g) + "</div><table class='ui-datepicker-calendar'><thead><tr>", S = u ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "", x = 0; x < 7; x++) P = (x + c) % 7, S += "<th scope='col'" + ((x + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + d[P] + "'>" + p[P] + "</span></th>";
                                        for (I += S + "</tr></thead><tbody>", M = this._getDaysInMonth(tt, Z), tt === t.selectedYear && Z === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, M)), A = (this._getFirstDayOfMonth(tt, Z) - c + 7) % 7, O = Math.ceil((A + M) / 7), N = X && this.maxRows > O ? this.maxRows : O, this.maxRows = N, H = this._daylightSavingAdjust(new Date(tt, Z, 1 - A)), E = 0; E < N; E++) {
                                            for (I += "<tr>", L = u ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(H) + "</td>" : "", x = 0; x < 7; x++) W = m ? m.apply(t.input ? t.input[0] : null, [H]) : [!0, ""], z = H.getMonth() !== Z, F = z && !_ || !W[0] || Q && H < Q || J && H > J, L += "<td class='" + ((x + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (z ? " ui-datepicker-other-month" : "") + (H.getTime() === D.getTime() && Z === t.selectedMonth && t._keyEvent || b.getTime() === H.getTime() && b.getTime() === D.getTime() ? " " + this._dayOverClass : "") + (F ? " " + this._unselectableClass + " ui-state-disabled" : "") + (z && !v ? "" : " " + W[1] + (H.getTime() === G.getTime() ? " " + this._currentClass : "") + (H.getTime() === R.getTime() ? " ui-datepicker-today" : "")) + "'" + (z && !v || !W[2] ? "" : " title='" + W[2].replace(/'/g, "&#39;") + "'") + (F ? "" : " data-handler='selectDay' data-event='click' data-month='" + H.getMonth() + "' data-year='" + H.getFullYear() + "'") + ">" + (z && !v ? "&#xa0;" : F ? "<span class='ui-state-default'>" + H.getDate() + "</span>" : "<a class='ui-state-default" + (H.getTime() === R.getTime() ? " ui-state-highlight" : "") + (H.getTime() === G.getTime() ? " ui-state-active" : "") + (z ? " ui-priority-secondary" : "") + "' href='#'>" + H.getDate() + "</a>") + "</td>", H.setDate(H.getDate() + 1), H = this._daylightSavingAdjust(H);
                                                I += L + "</tr>"
                                        }
                                        Z++, Z > 11 && (Z = 0, tt++), I += "</tbody></table>" + (X ? "</div>" + (U[0] > 0 && C === U[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), k += I
                                    }
                                    y += k
                                }
                                return y += h, t._keyEvent = !1, y
                            },
                            _generateMonthYearHeader: function(t, e, i, s, n, o, a, r) {
                                var l, h, c, u, d, p, f, g, m = this._get(t, "changeMonth"),
                                v = this._get(t, "changeYear"),
                                _ = this._get(t, "showMonthAfterYear"),
                                b = "<div class='ui-datepicker-title'>",
                                y = "";
                                if (o || !m) y += "<span class='ui-datepicker-month'>" + a[e] + "</span>";
                                else {
                                    for (l = s && s.getFullYear() === i, h = n && n.getFullYear() === i, y += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", c = 0; c < 12; c++)(!l || c >= s.getMonth()) && (!h || c <= n.getMonth()) && (y += "<option value='" + c + "'" + (c === e ? " selected='selected'" : "") + ">" + r[c] + "</option>");
                                        y += "</select>"
                                }
                                if (_ || (b += y + (!o && m && v ? "" : "&#xa0;")), !t.yearshtml)
                                if (t.yearshtml = "", o || !v) b += "<span class='ui-datepicker-year'>" + i + "</span>";
                                else {
                                    for (u = this._get(t, "yearRange").split(":"), d = (new Date).getFullYear(), p = function(t) {
                                        var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? d + parseInt(t, 10) : parseInt(t, 10);
                                        return isNaN(e) ? d : e
                                    }, f = p(u[0]), g = Math.max(f, p(u[1] || "")), f = s ? Math.max(f, s.getFullYear()) : f, g = n ? Math.min(g, n.getFullYear()) : g, t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; f <= g; f++) t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
                                        t.yearshtml += "</select>", b += t.yearshtml, t.yearshtml = null
                                    }
                                    return b += this._get(t, "yearSuffix"), _ && (b += (!o && m && v ? "" : "&#xa0;") + y), b += "</div>"
                                },
                                _adjustInstDate: function(t, e, i) {
                                    var s = t.selectedYear + ("Y" === i ? e : 0),
                                    n = t.selectedMonth + ("M" === i ? e : 0),
                                    o = Math.min(t.selectedDay, this._getDaysInMonth(s, n)) + ("D" === i ? e : 0),
                                    a = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(s, n, o)));
                                    t.selectedDay = a.getDate(), t.drawMonth = t.selectedMonth = a.getMonth(), t.drawYear = t.selectedYear = a.getFullYear(), "M" !== i && "Y" !== i || this._notifyChange(t)
                                },
                                _restrictMinMax: function(t, e) {
                                    var i = this._getMinMaxDate(t, "min"),
                                    s = this._getMinMaxDate(t, "max"),
                                    n = i && e < i ? i : e;
                                    return s && n > s ? s : n
                                },
                                _notifyChange: function(t) {
                                    var e = this._get(t, "onChangeMonthYear");
                                    e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
                                },
                                _getNumberOfMonths: function(t) {
                                    var e = this._get(t, "numberOfMonths");
                                    return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e
                                },
                                _getMinMaxDate: function(t, e) {
                                    return this._determineDate(t, this._get(t, e + "Date"), null)
                                },
                                _getDaysInMonth: function(t, e) {
                                    return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate()
                                },
                                _getFirstDayOfMonth: function(t, e) {
                                    return new Date(t, e, 1).getDay()
                                },
                                _canAdjustMonth: function(t, e, i, s) {
                                    var n = this._getNumberOfMonths(t),
                                    o = this._daylightSavingAdjust(new Date(i, s + (e < 0 ? e : n[0] * n[1]), 1));
                                    return e < 0 && o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())), this._isInRange(t, o)
                                },
                                _isInRange: function(t, e) {
                                    var i, s, n = this._getMinMaxDate(t, "min"),
                                    o = this._getMinMaxDate(t, "max"),
                                    a = null,
                                    r = null,
                                    l = this._get(t, "yearRange");
                                    return l && (i = l.split(":"), s = (new Date).getFullYear(), a = parseInt(i[0], 10), r = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (a += s), i[1].match(/[+\-].*/) && (r += s)), (!n || e.getTime() >= n.getTime()) && (!o || e.getTime() <= o.getTime()) && (!a || e.getFullYear() >= a) && (!r || e.getFullYear() <= r)
                                },
                                _getFormatConfig: function(t) {
                                    var e = this._get(t, "shortYearCutoff");
                                    return e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10), {
                                        shortYearCutoff: e,
                                        dayNamesShort: this._get(t, "dayNamesShort"),
                                        dayNames: this._get(t, "dayNames"),
                                        monthNamesShort: this._get(t, "monthNamesShort"),
                                        monthNames: this._get(t, "monthNames")
                                    }
                                },
                                _formatDate: function(t, e, i, s) {
                                    e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear);
                                    var n = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(s, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
                                    return this.formatDate(this._get(t, "dateFormat"), n, this._getFormatConfig(t))
                                }
                            }), t.fn.datepicker = function(e) {
    if (!this.length) return this;
    t.datepicker.initialized || (t(document).on("mousedown", t.datepicker._checkExternalClick), t.datepicker.initialized = !0), 0 === t("#" + t.datepicker._mainDivId).length && t("body").append(t.datepicker.dpDiv);
    var i = Array.prototype.slice.call(arguments, 1);
    return "string" != typeof e || "isDisabled" !== e && "getDate" !== e && "widget" !== e ? "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i)) : this.each(function() {
        "string" == typeof e ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this].concat(i)) : t.datepicker._attachDatepicker(this, e)
    }) : t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i))
}, t.datepicker = new s, t.datepicker.initialized = !1, t.datepicker.uuid = (new Date).getTime(), t.datepicker.version = "1.12.1";
var p = (t.datepicker, t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), !1);
t(document).on("mouseup", function() {
    p = !1
});
t.widget("ui.mouse", {
    version: "1.12.1",
    options: {
        cancel: "input, textarea, button, select, option",
        distance: 1,
        delay: 0
    },
    _mouseInit: function() {
        var e = this;
        this.element.on("mousedown." + this.widgetName, function(t) {
            return e._mouseDown(t)
        }).on("click." + this.widgetName, function(i) {
            if (!0 === t.data(i.target, e.widgetName + ".preventClickEvent")) return t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1
        }), this.started = !1
    },
    _mouseDestroy: function() {
        this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate)
    },
    _mouseDown: function(e) {
        if (!p) {
            this._mouseMoved = !1, this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e;
            var i = this,
            s = 1 === e.which,
            n = !("string" != typeof this.options.cancel || !e.target.nodeName) && t(e.target).closest(this.options.cancel).length;
            return !(s && !n && this._mouseCapture(e)) || (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                i.mouseDelayMet = !0
            }, this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(e), !this._mouseStarted) ? (e.preventDefault(), !0) : (!0 === t.data(e.target, this.widgetName + ".preventClickEvent") && t.removeData(e.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(t) {
                return i._mouseMove(t)
            }, this._mouseUpDelegate = function(t) {
                return i._mouseUp(t)
            }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), e.preventDefault(), p = !0, !0))
        }
    },
    _mouseMove: function(e) {
        if (this._mouseMoved) {
            if (t.ui.ie && (!document.documentMode || document.documentMode < 9) && !e.button) return this._mouseUp(e);
            if (!e.which)
                if (e.originalEvent.altKey || e.originalEvent.ctrlKey || e.originalEvent.metaKey || e.originalEvent.shiftKey) this.ignoreMissingWhich = !0;
            else if (!this.ignoreMissingWhich) return this._mouseUp(e)
        }
    return (e.which || e.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, e), this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
},
_mouseUp: function(e) {
    this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, p = !1, e.preventDefault()
},
_mouseDistanceMet: function(t) {
    return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
},
_mouseDelayMet: function() {
    return this.mouseDelayMet
},
_mouseStart: function() {},
_mouseDrag: function() {},
_mouseStop: function() {},
_mouseCapture: function() {
    return !0
}
}), t.ui.plugin = {
    add: function(e, i, s) {
        var n, o = t.ui[e].prototype;
        for (n in s) o.plugins[n] = o.plugins[n] || [], o.plugins[n].push([i, s[n]])
    },
call: function(t, e, i, s) {
    var n, o = t.plugins[e];
    if (o && (s || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType))
        for (n = 0; n < o.length; n++) t.options[o[n][0]] && o[n][1].apply(t.element, i)
    }
}, t.ui.safeBlur = function(e) {
    e && "body" !== e.nodeName.toLowerCase() && t(e).trigger("blur")
};
t.widget("ui.draggable", t.ui.mouse, {
    version: "1.12.1",
    widgetEventPrefix: "drag",
    options: {
        addClasses: !0,
        appendTo: "parent",
        axis: !1,
        connectToSortable: !1,
        containment: !1,
        cursor: "auto",
        cursorAt: !1,
        grid: !1,
        handle: !1,
        helper: "original",
        iframeFix: !1,
        opacity: !1,
        refreshPositions: !1,
        revert: !1,
        revertDuration: 500,
        scope: "default",
        scroll: !0,
        scrollSensitivity: 20,
        scrollSpeed: 20,
        snap: !1,
        snapMode: "both",
        snapTolerance: 20,
        stack: !1,
        zIndex: !1,
        drag: null,
        start: null,
        stop: null
    },
    _create: function() {
        "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this._addClass("ui-draggable"), this._setHandleClassName(), this._mouseInit()
    },
    _setOption: function(t, e) {
        this._super(t, e), "handle" === t && (this._removeHandleClassName(), this._setHandleClassName())
    },
    _destroy: function() {
        if ((this.helper || this.element).is(".ui-draggable-dragging")) return void(this.destroyOnClear = !0);
        this._removeHandleClassName(), this._mouseDestroy()
    },
    _mouseCapture: function(e) {
        var i = this.options;
        return !(this.helper || i.disabled || t(e.target).closest(".ui-resizable-handle").length > 0) && (this.handle = this._getHandle(e), !!this.handle && (this._blurActiveElement(e), this._blockFrames(!0 === i.iframeFix ? "iframe" : i.iframeFix), !0))
    },
    _blockFrames: function(e) {
        this.iframeBlocks = this.document.find(e).map(function() {
            var e = t(this);
            return t("<div>").css("position", "absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0]
        })
    },
    _unblockFrames: function() {
        this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
    },
    _blurActiveElement: function(e) {
        var i = t.ui.safeActiveElement(this.document[0]);
        t(e.target).closest(i).length || t.ui.safeBlur(i)
    },
    _mouseStart: function(e) {
        var i = this.options;
        return this.helper = this._createHelper(e), this._addClass(this.helper, "ui-draggable-dragging"), this._cacheHelperProportions(), t.ui.ddmanager && (t.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function() {
            return "fixed" === t(this).css("position")
        }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(e), this.originalPosition = this.position = this._generatePosition(e, !1), this.originalPageX = e.pageX, this.originalPageY = e.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), !1 === this._trigger("start", e) ? (this._clear(), !1) : (this._cacheHelperProportions(), t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this._mouseDrag(e, !0), t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0)
    },
    _refreshOffsets: function(t) {
        this.offset = {
            top: this.positionAbs.top - this.margins.top,
            left: this.positionAbs.left - this.margins.left,
            scroll: !1,
            parent: this._getParentOffset(),
            relative: this._getRelativeOffset()
        }, this.offset.click = {
            left: t.pageX - this.offset.left,
            top: t.pageY - this.offset.top
        }
    },
    _mouseDrag: function(e, i) {
        if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(e, !0), this.positionAbs = this._convertPositionTo("absolute"), !i) {
            var s = this._uiHash();
            if (!1 === this._trigger("drag", e, s)) return this._mouseUp(new t.Event("mouseup", e)), !1;
            this.position = s.position
        }
        return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", t.ui.ddmanager && t.ui.ddmanager.drag(this, e), !1
    },
    _mouseStop: function(e) {
        var i = this,
        s = !1;
        return t.ui.ddmanager && !this.options.dropBehaviour && (s = t.ui.ddmanager.drop(this, e)), this.dropped && (s = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !s || "valid" === this.options.revert && s || !0 === this.options.revert || t.isFunction(this.options.revert) && this.options.revert.call(this.element, s) ? t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
            !1 !== i._trigger("stop", e) && i._clear()
        }) : !1 !== this._trigger("stop", e) && this._clear(), !1
    },
    _mouseUp: function(e) {
        return this._unblockFrames(), t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e), this.handleElement.is(e.target) && this.element.trigger("focus"), t.ui.mouse.prototype._mouseUp.call(this, e)
    },
    cancel: function() {
        return this.helper.is(".ui-draggable-dragging") ? this._mouseUp(new t.Event("mouseup", {
            target: this.element[0]
        })) : this._clear(), this
    },
    _getHandle: function(e) {
        return !this.options.handle || !!t(e.target).closest(this.element.find(this.options.handle)).length
    },
    _setHandleClassName: function() {
        this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this._addClass(this.handleElement, "ui-draggable-handle")
    },
    _removeHandleClassName: function() {
        this._removeClass(this.handleElement, "ui-draggable-handle")
    },
    _createHelper: function(e) {
        var i = this.options,
        s = t.isFunction(i.helper),
        n = s ? t(i.helper.apply(this.element[0], [e])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
        return n.parents("body").length || n.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), s && n[0] === this.element[0] && this._setPositionRelative(), n[0] === this.element[0] || /(fixed|absolute)/.test(n.css("position")) || n.css("position", "absolute"), n
    },
    _setPositionRelative: function() {
        /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
    },
    _adjustOffsetFromHelper: function(e) {
        "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
            left: +e[0],
            top: +e[1] || 0
        }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
    },
    _isRootNode: function(t) {
        return /(html|body)/i.test(t.tagName) || t === this.document[0]
    },
    _getParentOffset: function() {
        var e = this.offsetParent.offset(),
        i = this.document[0];
        return "absolute" === this.cssPosition && this.scrollParent[0] !== i && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (e = {
            top: 0,
            left: 0
        }), {
            top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
            left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
        }
    },
    _getRelativeOffset: function() {
        if ("relative" !== this.cssPosition) return {
            top: 0,
            left: 0
        };
        var t = this.element.position(),
        e = this._isRootNode(this.scrollParent[0]);
        return {
            top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + (e ? 0 : this.scrollParent.scrollTop()),
            left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + (e ? 0 : this.scrollParent.scrollLeft())
        }
    },
    _cacheMargins: function() {
        this.margins = {
            left: parseInt(this.element.css("marginLeft"), 10) || 0,
            top: parseInt(this.element.css("marginTop"), 10) || 0,
            right: parseInt(this.element.css("marginRight"), 10) || 0,
            bottom: parseInt(this.element.css("marginBottom"), 10) || 0
        }
    },
    _cacheHelperProportions: function() {
        this.helperProportions = {
            width: this.helper.outerWidth(),
            height: this.helper.outerHeight()
        }
    },
    _setContainment: function() {
        var e, i, s, n = this.options,
        o = this.document[0];
        return this.relativeContainer = null, n.containment ? "window" === n.containment ? void(this.containment = [t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left, t(window).scrollTop() + (t(window).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : "document" === n.containment ? void(this.containment = [0, 0, t(o).width() - this.helperProportions.width - this.margins.left, (t(o).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : n.containment.constructor === Array ? void(this.containment = n.containment) : ("parent" === n.containment && (n.containment = this.helper[0].parentNode), i = t(n.containment), void((s = i[0]) && (e = /(scroll|auto)/.test(i.css("overflow")), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (e ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = i))) : void(this.containment = null)
    },
    _convertPositionTo: function(t, e) {
        e || (e = this.position);
        var i = "absolute" === t ? 1 : -1,
        s = this._isRootNode(this.scrollParent[0]);
        return {
            top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : s ? 0 : this.offset.scroll.top) * i,
            left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : s ? 0 : this.offset.scroll.left) * i
        }
    },
    _generatePosition: function(t, e) {
        var i, s, n, o, a = this.options,
        r = this._isRootNode(this.scrollParent[0]),
        l = t.pageX,
        h = t.pageY;
        return r && this.offset.scroll || (this.offset.scroll = {
            top: this.scrollParent.scrollTop(),
            left: this.scrollParent.scrollLeft()
        }), e && (this.containment && (this.relativeContainer ? (s = this.relativeContainer.offset(), i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment, t.pageX - this.offset.click.left < i[0] && (l = i[0] + this.offset.click.left), t.pageY - this.offset.click.top < i[1] && (h = i[1] + this.offset.click.top), t.pageX - this.offset.click.left > i[2] && (l = i[2] + this.offset.click.left), t.pageY - this.offset.click.top > i[3] && (h = i[3] + this.offset.click.top)), a.grid && (n = a.grid[1] ? this.originalPageY + Math.round((h - this.originalPageY) / a.grid[1]) * a.grid[1] : this.originalPageY, h = i ? n - this.offset.click.top >= i[1] || n - this.offset.click.top > i[3] ? n : n - this.offset.click.top >= i[1] ? n - a.grid[1] : n + a.grid[1] : n, o = a.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / a.grid[0]) * a.grid[0] : this.originalPageX, l = i ? o - this.offset.click.left >= i[0] || o - this.offset.click.left > i[2] ? o : o - this.offset.click.left >= i[0] ? o - a.grid[0] : o + a.grid[0] : o), "y" === a.axis && (l = this.originalPageX), "x" === a.axis && (h = this.originalPageY)), {
            top: h - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : r ? 0 : this.offset.scroll.top),
            left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : r ? 0 : this.offset.scroll.left)
        }
    },
    _clear: function() {
        this._removeClass(this.helper, "ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy()
    },
    _trigger: function(e, i, s) {
        return s = s || this._uiHash(), t.ui.plugin.call(this, e, [i, s, this], !0), /^(drag|start|stop)/.test(e) && (this.positionAbs = this._convertPositionTo("absolute"), s.offset = this.positionAbs), t.Widget.prototype._trigger.call(this, e, i, s)
    },
    plugins: {},
    _uiHash: function() {
        return {
            helper: this.helper,
            position: this.position,
            originalPosition: this.originalPosition,
            offset: this.positionAbs
        }
    }
}), t.ui.plugin.add("draggable", "connectToSortable", {
    start: function(e, i, s) {
        var n = t.extend({}, i, {
            item: s.element
        });
        s.sortables = [], t(s.options.connectToSortable).each(function() {
            var i = t(this).sortable("instance");
            i && !i.options.disabled && (s.sortables.push(i), i.refreshPositions(), i._trigger("activate", e, n))
        })
    },
    stop: function(e, i, s) {
        var n = t.extend({}, i, {
            item: s.element
        });
        s.cancelHelperRemoval = !1, t.each(s.sortables, function() {
            var t = this;
            t.isOver ? (t.isOver = 0, s.cancelHelperRemoval = !0, t.cancelHelperRemoval = !1, t._storedCSS = {
                position: t.placeholder.css("position"),
                top: t.placeholder.css("top"),
                left: t.placeholder.css("left")
            }, t._mouseStop(e), t.options.helper = t.options._helper) : (t.cancelHelperRemoval = !0, t._trigger("deactivate", e, n))
        })
    },
    drag: function(e, i, s) {
        t.each(s.sortables, function() {
            var n = !1,
            o = this;
            o.positionAbs = s.positionAbs, o.helperProportions = s.helperProportions, o.offset.click = s.offset.click, o._intersectsWith(o.containerCache) && (n = !0, t.each(s.sortables, function() {
                return this.positionAbs = s.positionAbs, this.helperProportions = s.helperProportions, this.offset.click = s.offset.click, this !== o && this._intersectsWith(this.containerCache) && t.contains(o.element[0], this.element[0]) && (n = !1), n
            })), n ? (o.isOver || (o.isOver = 1, s._parent = i.helper.parent(), o.currentItem = i.helper.appendTo(o.element).data("ui-sortable-item", !0), o.options._helper = o.options.helper, o.options.helper = function() {
                return i.helper[0]
            }, e.target = o.currentItem[0], o._mouseCapture(e, !0), o._mouseStart(e, !0, !0), o.offset.click.top = s.offset.click.top, o.offset.click.left = s.offset.click.left, o.offset.parent.left -= s.offset.parent.left - o.offset.parent.left, o.offset.parent.top -= s.offset.parent.top - o.offset.parent.top, s._trigger("toSortable", e), s.dropped = o.element, t.each(s.sortables, function() {
                this.refreshPositions()
            }), s.currentItem = s.element, o.fromOutside = s), o.currentItem && (o._mouseDrag(e), i.position = o.position)) : o.isOver && (o.isOver = 0, o.cancelHelperRemoval = !0, o.options._revert = o.options.revert, o.options.revert = !1, o._trigger("out", e, o._uiHash(o)), o._mouseStop(e, !0), o.options.revert = o.options._revert, o.options.helper = o.options._helper, o.placeholder && o.placeholder.remove(), i.helper.appendTo(s._parent), s._refreshOffsets(e), i.position = s._generatePosition(e, !0), s._trigger("fromSortable", e), s.dropped = !1, t.each(s.sortables, function() {
                this.refreshPositions()
            }))
        })
    }
}), t.ui.plugin.add("draggable", "cursor", {
    start: function(e, i, s) {
        var n = t("body"),
        o = s.options;
        n.css("cursor") && (o._cursor = n.css("cursor")), n.css("cursor", o.cursor)
    },
    stop: function(e, i, s) {
        var n = s.options;
        n._cursor && t("body").css("cursor", n._cursor)
    }
}), t.ui.plugin.add("draggable", "opacity", {
    start: function(e, i, s) {
        var n = t(i.helper),
        o = s.options;
        n.css("opacity") && (o._opacity = n.css("opacity")), n.css("opacity", o.opacity)
    },
    stop: function(e, i, s) {
        var n = s.options;
        n._opacity && t(i.helper).css("opacity", n._opacity)
    }
}), t.ui.plugin.add("draggable", "scroll", {
    start: function(t, e, i) {
        i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)), i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset())
    },
    drag: function(e, i, s) {
        var n = s.options,
        o = !1,
        a = s.scrollParentNotHidden[0],
        r = s.document[0];
        a !== r && "HTML" !== a.tagName ? (n.axis && "x" === n.axis || (s.overflowOffset.top + a.offsetHeight - e.pageY < n.scrollSensitivity ? a.scrollTop = o = a.scrollTop + n.scrollSpeed : e.pageY - s.overflowOffset.top < n.scrollSensitivity && (a.scrollTop = o = a.scrollTop - n.scrollSpeed)), n.axis && "y" === n.axis || (s.overflowOffset.left + a.offsetWidth - e.pageX < n.scrollSensitivity ? a.scrollLeft = o = a.scrollLeft + n.scrollSpeed : e.pageX - s.overflowOffset.left < n.scrollSensitivity && (a.scrollLeft = o = a.scrollLeft - n.scrollSpeed))) : (n.axis && "x" === n.axis || (e.pageY - t(r).scrollTop() < n.scrollSensitivity ? o = t(r).scrollTop(t(r).scrollTop() - n.scrollSpeed) : t(window).height() - (e.pageY - t(r).scrollTop()) < n.scrollSensitivity && (o = t(r).scrollTop(t(r).scrollTop() + n.scrollSpeed))), n.axis && "y" === n.axis || (e.pageX - t(r).scrollLeft() < n.scrollSensitivity ? o = t(r).scrollLeft(t(r).scrollLeft() - n.scrollSpeed) : t(window).width() - (e.pageX - t(r).scrollLeft()) < n.scrollSensitivity && (o = t(r).scrollLeft(t(r).scrollLeft() + n.scrollSpeed)))), !1 !== o && t.ui.ddmanager && !n.dropBehaviour && t.ui.ddmanager.prepareOffsets(s, e)
    }
}), t.ui.plugin.add("draggable", "snap", {
    start: function(e, i, s) {
        var n = s.options;
        s.snapElements = [], t(n.snap.constructor !== String ? n.snap.items || ":data(ui-draggable)" : n.snap).each(function() {
            var e = t(this),
            i = e.offset();
            this !== s.element[0] && s.snapElements.push({
                item: this,
                width: e.outerWidth(),
                height: e.outerHeight(),
                top: i.top,
                left: i.left
            })
        })
    },
    drag: function(e, i, s) {
        var n, o, a, r, l, h, c, u, d, p, f = s.options,
        g = f.snapTolerance,
        m = i.offset.left,
        v = m + s.helperProportions.width,
        _ = i.offset.top,
        b = _ + s.helperProportions.height;
        for (d = s.snapElements.length - 1; d >= 0; d--) l = s.snapElements[d].left - s.margins.left, h = l + s.snapElements[d].width, c = s.snapElements[d].top - s.margins.top, u = c + s.snapElements[d].height, v < l - g || m > h + g || b < c - g || _ > u + g || !t.contains(s.snapElements[d].item.ownerDocument, s.snapElements[d].item) ? (s.snapElements[d].snapping && s.options.snap.release && s.options.snap.release.call(s.element, e, t.extend(s._uiHash(), {
            snapItem: s.snapElements[d].item
        })), s.snapElements[d].snapping = !1) : ("inner" !== f.snapMode && (n = Math.abs(c - b) <= g, o = Math.abs(u - _) <= g, a = Math.abs(l - v) <= g, r = Math.abs(h - m) <= g, n && (i.position.top = s._convertPositionTo("relative", {
            top: c - s.helperProportions.height,
            left: 0
        }).top), o && (i.position.top = s._convertPositionTo("relative", {
            top: u,
            left: 0
        }).top), a && (i.position.left = s._convertPositionTo("relative", {
            top: 0,
            left: l - s.helperProportions.width
        }).left), r && (i.position.left = s._convertPositionTo("relative", {
            top: 0,
            left: h
        }).left)), p = n || o || a || r, "outer" !== f.snapMode && (n = Math.abs(c - _) <= g, o = Math.abs(u - b) <= g, a = Math.abs(l - m) <= g, r = Math.abs(h - v) <= g, n && (i.position.top = s._convertPositionTo("relative", {
            top: c,
            left: 0
        }).top), o && (i.position.top = s._convertPositionTo("relative", {
            top: u - s.helperProportions.height,
            left: 0
        }).top), a && (i.position.left = s._convertPositionTo("relative", {
            top: 0,
            left: l
        }).left), r && (i.position.left = s._convertPositionTo("relative", {
            top: 0,
            left: h - s.helperProportions.width
        }).left)), !s.snapElements[d].snapping && (n || o || a || r || p) && s.options.snap.snap && s.options.snap.snap.call(s.element, e, t.extend(s._uiHash(), {
            snapItem: s.snapElements[d].item
        })), s.snapElements[d].snapping = n || o || a || r || p)
    }
}), t.ui.plugin.add("draggable", "stack", {
    start: function(e, i, s) {
        var n, o = s.options,
        a = t.makeArray(t(o.stack)).sort(function(e, i) {
            return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0)
        });
        a.length && (n = parseInt(t(a[0]).css("zIndex"), 10) || 0, t(a).each(function(e) {
            t(this).css("zIndex", n + e)
        }), this.css("zIndex", n + a.length))
    }
}), t.ui.plugin.add("draggable", "zIndex", {
    start: function(e, i, s) {
        var n = t(i.helper),
        o = s.options;
        n.css("zIndex") && (o._zIndex = n.css("zIndex")), n.css("zIndex", o.zIndex)
    },
    stop: function(e, i, s) {
        var n = s.options;
        n._zIndex && t(i.helper).css("zIndex", n._zIndex)
    }
});
t.ui.draggable;
t.widget("ui.resizable", t.ui.mouse, {
    version: "1.12.1",
    widgetEventPrefix: "resize",
    options: {
        alsoResize: !1,
        animate: !1,
        animateDuration: "slow",
        animateEasing: "swing",
        aspectRatio: !1,
        autoHide: !1,
        classes: {
            "ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se"
        },
        containment: !1,
        ghost: !1,
        grid: !1,
        handles: "e,s,se",
        helper: !1,
        maxHeight: null,
        maxWidth: null,
        minHeight: 10,
        minWidth: 10,
        zIndex: 90,
        resize: null,
        start: null,
        stop: null
    },
    _num: function(t) {
        return parseFloat(t) || 0
    },
    _isNumber: function(t) {
        return !isNaN(parseFloat(t))
    },
    _hasScroll: function(e, i) {
        if ("hidden" === t(e).css("overflow")) return !1;
        var s = i && "left" === i ? "scrollLeft" : "scrollTop",
        n = !1;
        return e[s] > 0 || (e[s] = 1, n = e[s] > 0, e[s] = 0, n)
    },
    _create: function() {
        var e, i = this.options,
        s = this;
        this._addClass("ui-resizable"), t.extend(this, {
            _aspectRatio: !!i.aspectRatio,
            aspectRatio: i.aspectRatio,
            originalElement: this.element,
            _proportionallyResizeElements: [],
            _helper: i.helper || i.ghost || i.animate ? i.helper || "ui-resizable-helper" : null
        }), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
            position: this.element.css("position"),
            width: this.element.outerWidth(),
            height: this.element.outerHeight(),
            top: this.element.css("top"),
            left: this.element.css("left")
        })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, e = {
            marginTop: this.originalElement.css("marginTop"),
            marginRight: this.originalElement.css("marginRight"),
            marginBottom: this.originalElement.css("marginBottom"),
            marginLeft: this.originalElement.css("marginLeft")
        }, this.element.css(e), this.originalElement.css("margin", 0), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
            position: "static",
            zoom: 1,
            display: "block"
        })), this.originalElement.css(e), this._proportionallyResize()), this._setupHandles(), i.autoHide && t(this.element).on("mouseenter", function() {
            i.disabled || (s._removeClass("ui-resizable-autohide"), s._handles.show())
        }).on("mouseleave", function() {
            i.disabled || s.resizing || (s._addClass("ui-resizable-autohide"), s._handles.hide())
        }), this._mouseInit()
    },
    _destroy: function() {
        this._mouseDestroy();
        var e, i = function(e) {
            t(e).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()
        };
        return this.elementIsWrapper && (i(this.element), e = this.element, this.originalElement.css({
            position: e.css("position"),
            width: e.outerWidth(),
            height: e.outerHeight(),
            top: e.css("top"),
            left: e.css("left")
        }).insertAfter(e), e.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this
    },
    _setOption: function(t, e) {
        switch (this._super(t, e), t) {
            case "handles":
            this._removeHandles(), this._setupHandles()
        }
    },
    _setupHandles: function() {
        var e, i, s, n, o, a = this.options,
        r = this;
        if (this.handles = a.handles || (t(".ui-resizable-handle", this.element).length ? {
            n: ".ui-resizable-n",
            e: ".ui-resizable-e",
            s: ".ui-resizable-s",
            w: ".ui-resizable-w",
            se: ".ui-resizable-se",
            sw: ".ui-resizable-sw",
            ne: ".ui-resizable-ne",
            nw: ".ui-resizable-nw"
        } : "e,s,se"), this._handles = t(), this.handles.constructor === String)
            for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), s = this.handles.split(","), this.handles = {}, i = 0; i < s.length; i++) e = t.trim(s[i]), n = "ui-resizable-" + e, o = t("<div>"), this._addClass(o, "ui-resizable-handle " + n), o.css({
                zIndex: a.zIndex
            }), this.handles[e] = ".ui-resizable-" + e, this.element.append(o);
                this._renderAxis = function(e) {
                    var i, s, n, o;
                    e = e || this.element;
                    for (i in this.handles) this.handles[i].constructor === String ? this.handles[i] = this.element.children(this.handles[i]).first().show() : (this.handles[i].jquery || this.handles[i].nodeType) && (this.handles[i] = t(this.handles[i]), this._on(this.handles[i], {
                        mousedown: r._mouseDown
                    })), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (s = t(this.handles[i], this.element), o = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight() : s.outerWidth(), n = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), e.css(n, o), this._proportionallyResize()), this._handles = this._handles.add(this.handles[i])
                }, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find(".ui-resizable-handle")), this._handles.disableSelection(), this._handles.on("mouseover", function() {
                    r.resizing || (this.className && (o = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), r.axis = o && o[1] ? o[1] : "se")
                }), a.autoHide && (this._handles.hide(), this._addClass("ui-resizable-autohide"))
            },
            _removeHandles: function() {
                this._handles.remove()
            },
            _mouseCapture: function(e) {
                var i, s, n = !1;
                for (i in this.handles)((s = t(this.handles[i])[0]) === e.target || t.contains(s, e.target)) && (n = !0);
                    return !this.options.disabled && n
            },
            _mouseStart: function(e) {
                var i, s, n, o = this.options,
                a = this.element;
                return this.resizing = !0, this._renderProxy(), i = this._num(this.helper.css("left")), s = this._num(this.helper.css("top")), o.containment && (i += t(o.containment).scrollLeft() || 0, s += t(o.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                    left: i,
                    top: s
                }, this.size = this._helper ? {
                    width: this.helper.width(),
                    height: this.helper.height()
                } : {
                    width: a.width(),
                    height: a.height()
                }, this.originalSize = this._helper ? {
                    width: a.outerWidth(),
                    height: a.outerHeight()
                } : {
                    width: a.width(),
                    height: a.height()
                }, this.sizeDiff = {
                    width: a.outerWidth() - a.width(),
                    height: a.outerHeight() - a.height()
                }, this.originalPosition = {
                    left: i,
                    top: s
                }, this.originalMousePosition = {
                    left: e.pageX,
                    top: e.pageY
                }, this.aspectRatio = "number" == typeof o.aspectRatio ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1, n = t(".ui-resizable-" + this.axis).css("cursor"), t("body").css("cursor", "auto" === n ? this.axis + "-resize" : n), this._addClass("ui-resizable-resizing"), this._propagate("start", e), !0
            },
            _mouseDrag: function(e) {
                var i, s, n = this.originalMousePosition,
                o = this.axis,
                a = e.pageX - n.left || 0,
                r = e.pageY - n.top || 0,
                l = this._change[o];
                return this._updatePrevProperties(), !!l && (i = l.apply(this, [e, a, r]), this._updateVirtualBoundaries(e.shiftKey), (this._aspectRatio || e.shiftKey) && (i = this._updateRatio(i, e)), i = this._respectSize(i, e), this._updateCache(i), this._propagate("resize", e), s = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), t.isEmptyObject(s) || (this._updatePrevProperties(), this._trigger("resize", e, this.ui()), this._applyChanges()), !1)
            },
            _mouseStop: function(e) {
                this.resizing = !1;
                var i, s, n, o, a, r, l, h = this.options,
                c = this;
                return this._helper && (i = this._proportionallyResizeElements, s = i.length && /textarea/i.test(i[0].nodeName), n = s && this._hasScroll(i[0], "left") ? 0 : c.sizeDiff.height, o = s ? 0 : c.sizeDiff.width, a = {
                    width: c.helper.width() - o,
                    height: c.helper.height() - n
                }, r = parseFloat(c.element.css("left")) + (c.position.left - c.originalPosition.left) || null, l = parseFloat(c.element.css("top")) + (c.position.top - c.originalPosition.top) || null, h.animate || this.element.css(t.extend(a, {
                    top: l,
                    left: r
                })), c.helper.height(c.size.height), c.helper.width(c.size.width), this._helper && !h.animate && this._proportionallyResize()), t("body").css("cursor", "auto"), this._removeClass("ui-resizable-resizing"), this._propagate("stop", e), this._helper && this.helper.remove(), !1
            },
            _updatePrevProperties: function() {
                this.prevPosition = {
                    top: this.position.top,
                    left: this.position.left
                }, this.prevSize = {
                    width: this.size.width,
                    height: this.size.height
                }
            },
            _applyChanges: function() {
                var t = {};
                return this.position.top !== this.prevPosition.top && (t.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (t.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (t.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (t.height = this.size.height + "px"), this.helper.css(t), t
            },
            _updateVirtualBoundaries: function(t) {
                var e, i, s, n, o, a = this.options;
                o = {
                    minWidth: this._isNumber(a.minWidth) ? a.minWidth : 0,
                    maxWidth: this._isNumber(a.maxWidth) ? a.maxWidth : 1 / 0,
                    minHeight: this._isNumber(a.minHeight) ? a.minHeight : 0,
                    maxHeight: this._isNumber(a.maxHeight) ? a.maxHeight : 1 / 0
                }, (this._aspectRatio || t) && (e = o.minHeight * this.aspectRatio, s = o.minWidth / this.aspectRatio, i = o.maxHeight * this.aspectRatio, n = o.maxWidth / this.aspectRatio, e > o.minWidth && (o.minWidth = e), s > o.minHeight && (o.minHeight = s), i < o.maxWidth && (o.maxWidth = i), n < o.maxHeight && (o.maxHeight = n)), this._vBoundaries = o
            },
            _updateCache: function(t) {
                this.offset = this.helper.offset(), this._isNumber(t.left) && (this.position.left = t.left), this._isNumber(t.top) && (this.position.top = t.top), this._isNumber(t.height) && (this.size.height = t.height), this._isNumber(t.width) && (this.size.width = t.width)
            },
            _updateRatio: function(t) {
                var e = this.position,
                i = this.size,
                s = this.axis;
                return this._isNumber(t.height) ? t.width = t.height * this.aspectRatio : this._isNumber(t.width) && (t.height = t.width / this.aspectRatio), "sw" === s && (t.left = e.left + (i.width - t.width), t.top = null), "nw" === s && (t.top = e.top + (i.height - t.height), t.left = e.left + (i.width - t.width)), t
            },
            _respectSize: function(t) {
                var e = this._vBoundaries,
                i = this.axis,
                s = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width,
                n = this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height,
                o = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width,
                a = this._isNumber(t.height) && e.minHeight && e.minHeight > t.height,
                r = this.originalPosition.left + this.originalSize.width,
                l = this.originalPosition.top + this.originalSize.height,
                h = /sw|nw|w/.test(i),
                c = /nw|ne|n/.test(i);
                return o && (t.width = e.minWidth), a && (t.height = e.minHeight), s && (t.width = e.maxWidth), n && (t.height = e.maxHeight), o && h && (t.left = r - e.minWidth), s && h && (t.left = r - e.maxWidth), a && c && (t.top = l - e.minHeight), n && c && (t.top = l - e.maxHeight), t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null, t
            },
            _getPaddingPlusBorderDimensions: function(t) {
                for (var e = 0, i = [], s = [t.css("borderTopWidth"), t.css("borderRightWidth"), t.css("borderBottomWidth"), t.css("borderLeftWidth")], n = [t.css("paddingTop"), t.css("paddingRight"), t.css("paddingBottom"), t.css("paddingLeft")]; e < 4; e++) i[e] = parseFloat(s[e]) || 0, i[e] += parseFloat(n[e]) || 0;
                    return {
                        height: i[0] + i[2],
                        width: i[1] + i[3]
                    }
                },
                _proportionallyResize: function() {
                    if (this._proportionallyResizeElements.length)
                        for (var t, e = 0, i = this.helper || this.element; e < this._proportionallyResizeElements.length; e++) t = this._proportionallyResizeElements[e], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(t)), t.css({
                            height: i.height() - this.outerDimensions.height || 0,
                            width: i.width() - this.outerDimensions.width || 0
                        })
                    },
                    _renderProxy: function() {
                        var e = this.element,
                        i = this.options;
                        this.elementOffset = e.offset(), this._helper ? (this.helper = this.helper || t("<div style='overflow:hidden;'></div>"), this._addClass(this.helper, this._helper), this.helper.css({
                            width: this.element.outerWidth(),
                            height: this.element.outerHeight(),
                            position: "absolute",
                            left: this.elementOffset.left + "px",
                            top: this.elementOffset.top + "px",
                            zIndex: ++i.zIndex
                        }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
                    },
                    _change: {
                        e: function(t, e) {
                            return {
                                width: this.originalSize.width + e
                            }
                        },
                        w: function(t, e) {
                            var i = this.originalSize;
                            return {
                                left: this.originalPosition.left + e,
                                width: i.width - e
                            }
                        },
                        n: function(t, e, i) {
                            var s = this.originalSize;
                            return {
                                top: this.originalPosition.top + i,
                                height: s.height - i
                            }
                        },
                        s: function(t, e, i) {
                            return {
                                height: this.originalSize.height + i
                            }
                        },
                        se: function(e, i, s) {
                            return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, i, s]))
                        },
                        sw: function(e, i, s) {
                            return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, i, s]))
                        },
                        ne: function(e, i, s) {
                            return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, i, s]))
                        },
                        nw: function(e, i, s) {
                            return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, i, s]))
                        }
                    },
                    _propagate: function(e, i) {
                        t.ui.plugin.call(this, e, [i, this.ui()]), "resize" !== e && this._trigger(e, i, this.ui())
                    },
                    plugins: {},
                    ui: function() {
                        return {
                            originalElement: this.originalElement,
                            element: this.element,
                            helper: this.helper,
                            position: this.position,
                            size: this.size,
                            originalSize: this.originalSize,
                            originalPosition: this.originalPosition
                        }
                    }
                }), t.ui.plugin.add("resizable", "animate", {
                    stop: function(e) {
                        var i = t(this).resizable("instance"),
                        s = i.options,
                        n = i._proportionallyResizeElements,
                        o = n.length && /textarea/i.test(n[0].nodeName),
                        a = o && i._hasScroll(n[0], "left") ? 0 : i.sizeDiff.height,
                        r = o ? 0 : i.sizeDiff.width,
                        l = {
                            width: i.size.width - r,
                            height: i.size.height - a
                        },
                        h = parseFloat(i.element.css("left")) + (i.position.left - i.originalPosition.left) || null,
                        c = parseFloat(i.element.css("top")) + (i.position.top - i.originalPosition.top) || null;
                        i.element.animate(t.extend(l, c && h ? {
                            top: c,
                            left: h
                        } : {}), {
                            duration: s.animateDuration,
                            easing: s.animateEasing,
                            step: function() {
                                var s = {
                                    width: parseFloat(i.element.css("width")),
                                    height: parseFloat(i.element.css("height")),
                                    top: parseFloat(i.element.css("top")),
                                    left: parseFloat(i.element.css("left"))
                                };
                                n && n.length && t(n[0]).css({
                                    width: s.width,
                                    height: s.height
                                }), i._updateCache(s), i._propagate("resize", e)
                            }
                        })
                    }
                }), t.ui.plugin.add("resizable", "containment", {
                    start: function() {
                        var e, i, s, n, o, a, r, l = t(this).resizable("instance"),
                        h = l.options,
                        c = l.element,
                        u = h.containment,
                        d = u instanceof t ? u.get(0) : /parent/.test(u) ? c.parent().get(0) : u;
                        d && (l.containerElement = t(d), /document/.test(u) || u === document ? (l.containerOffset = {
                            left: 0,
                            top: 0
                        }, l.containerPosition = {
                            left: 0,
                            top: 0
                        }, l.parentData = {
                            element: t(document),
                            left: 0,
                            top: 0,
                            width: t(document).width(),
                            height: t(document).height() || document.body.parentNode.scrollHeight
                        }) : (e = t(d), i = [], t(["Top", "Right", "Left", "Bottom"]).each(function(t, s) {
                            i[t] = l._num(e.css("padding" + s))
                        }), l.containerOffset = e.offset(), l.containerPosition = e.position(), l.containerSize = {
                            height: e.innerHeight() - i[3],
                            width: e.innerWidth() - i[1]
                        }, s = l.containerOffset, n = l.containerSize.height, o = l.containerSize.width, a = l._hasScroll(d, "left") ? d.scrollWidth : o, r = l._hasScroll(d) ? d.scrollHeight : n, l.parentData = {
                            element: d,
                            left: s.left,
                            top: s.top,
                            width: a,
                            height: r
                        }))
                    },
                    resize: function(e) {
                        var i, s, n, o, a = t(this).resizable("instance"),
                        r = a.options,
                        l = a.containerOffset,
                        h = a.position,
                        c = a._aspectRatio || e.shiftKey,
                        u = {
                            top: 0,
                            left: 0
                        },
                        d = a.containerElement,
                        p = !0;
                        d[0] !== document && /static/.test(d.css("position")) && (u = l), h.left < (a._helper ? l.left : 0) && (a.size.width = a.size.width + (a._helper ? a.position.left - l.left : a.position.left - u.left), c && (a.size.height = a.size.width / a.aspectRatio, p = !1), a.position.left = r.helper ? l.left : 0), h.top < (a._helper ? l.top : 0) && (a.size.height = a.size.height + (a._helper ? a.position.top - l.top : a.position.top), c && (a.size.width = a.size.height * a.aspectRatio, p = !1), a.position.top = a._helper ? l.top : 0), n = a.containerElement.get(0) === a.element.parent().get(0), o = /relative|absolute/.test(a.containerElement.css("position")), n && o ? (a.offset.left = a.parentData.left + a.position.left, a.offset.top = a.parentData.top + a.position.top) : (a.offset.left = a.element.offset().left, a.offset.top = a.element.offset().top), i = Math.abs(a.sizeDiff.width + (a._helper ? a.offset.left - u.left : a.offset.left - l.left)), s = Math.abs(a.sizeDiff.height + (a._helper ? a.offset.top - u.top : a.offset.top - l.top)), i + a.size.width >= a.parentData.width && (a.size.width = a.parentData.width - i, c && (a.size.height = a.size.width / a.aspectRatio, p = !1)), s + a.size.height >= a.parentData.height && (a.size.height = a.parentData.height - s, c && (a.size.width = a.size.height * a.aspectRatio, p = !1)), p || (a.position.left = a.prevPosition.left, a.position.top = a.prevPosition.top, a.size.width = a.prevSize.width, a.size.height = a.prevSize.height)
                    },
                    stop: function() {
                        var e = t(this).resizable("instance"),
                        i = e.options,
                        s = e.containerOffset,
                        n = e.containerPosition,
                        o = e.containerElement,
                        a = t(e.helper),
                        r = a.offset(),
                        l = a.outerWidth() - e.sizeDiff.width,
                        h = a.outerHeight() - e.sizeDiff.height;
                        e._helper && !i.animate && /relative/.test(o.css("position")) && t(this).css({
                            left: r.left - n.left - s.left,
                            width: l,
                            height: h
                        }), e._helper && !i.animate && /static/.test(o.css("position")) && t(this).css({
                            left: r.left - n.left - s.left,
                            width: l,
                            height: h
                        })
                    }
                }), t.ui.plugin.add("resizable", "alsoResize", {
                    start: function() {
                        var e = t(this).resizable("instance"),
                        i = e.options;
                        t(i.alsoResize).each(function() {
                            var e = t(this);
                            e.data("ui-resizable-alsoresize", {
                                width: parseFloat(e.width()),
                                height: parseFloat(e.height()),
                                left: parseFloat(e.css("left")),
                                top: parseFloat(e.css("top"))
                            })
                        })
                    },
                    resize: function(e, i) {
                        var s = t(this).resizable("instance"),
                        n = s.options,
                        o = s.originalSize,
                        a = s.originalPosition,
                        r = {
                            height: s.size.height - o.height || 0,
                            width: s.size.width - o.width || 0,
                            top: s.position.top - a.top || 0,
                            left: s.position.left - a.left || 0
                        };
                        t(n.alsoResize).each(function() {
                            var e = t(this),
                            s = t(this).data("ui-resizable-alsoresize"),
                            n = {},
                            o = e.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                            t.each(o, function(t, e) {
                                var i = (s[e] || 0) + (r[e] || 0);
                                i && i >= 0 && (n[e] = i || null)
                            }), e.css(n)
                        })
                    },
                    stop: function() {
                        t(this).removeData("ui-resizable-alsoresize")
                    }
                }), t.ui.plugin.add("resizable", "ghost", {
                    start: function() {
                        var e = t(this).resizable("instance"),
                        i = e.size;
                        e.ghost = e.originalElement.clone(), e.ghost.css({
                            opacity: .25,
                            display: "block",
                            position: "relative",
                            height: i.height,
                            width: i.width,
                            margin: 0,
                            left: 0,
                            top: 0
                        }), e._addClass(e.ghost, "ui-resizable-ghost"), !1 !== t.uiBackCompat && "string" == typeof e.options.ghost && e.ghost.addClass(this.options.ghost), e.ghost.appendTo(e.helper)
                    },
                    resize: function() {
                        var e = t(this).resizable("instance");
                        e.ghost && e.ghost.css({
                            position: "relative",
                            height: e.size.height,
                            width: e.size.width
                        })
                    },
                    stop: function() {
                        var e = t(this).resizable("instance");
                        e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0))
                    }
                }), t.ui.plugin.add("resizable", "grid", {
                    resize: function() {
                        var e, i = t(this).resizable("instance"),
                        s = i.options,
                        n = i.size,
                        o = i.originalSize,
                        a = i.originalPosition,
                        r = i.axis,
                        l = "number" == typeof s.grid ? [s.grid, s.grid] : s.grid,
                        h = l[0] || 1,
                        c = l[1] || 1,
                        u = Math.round((n.width - o.width) / h) * h,
                        d = Math.round((n.height - o.height) / c) * c,
                        p = o.width + u,
                        f = o.height + d,
                        g = s.maxWidth && s.maxWidth < p,
                        m = s.maxHeight && s.maxHeight < f,
                        v = s.minWidth && s.minWidth > p,
                        _ = s.minHeight && s.minHeight > f;
                        s.grid = l, v && (p += h), _ && (f += c), g && (p -= h), m && (f -= c), /^(se|s|e)$/.test(r) ? (i.size.width = p, i.size.height = f) : /^(ne)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.top = a.top - d) : /^(sw)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.left = a.left - u) : ((f - c <= 0 || p - h <= 0) && (e = i._getPaddingPlusBorderDimensions(this)), f - c > 0 ? (i.size.height = f, i.position.top = a.top - d) : (f = c - e.height, i.size.height = f, i.position.top = a.top + o.height - f), p - h > 0 ? (i.size.width = p, i.position.left = a.left - u) : (p = h - e.width, i.size.width = p, i.position.left = a.left + o.width - p))
                    }
                });
                t.ui.resizable;
                t.widget("ui.dialog", {
                    version: "1.12.1",
                    options: {
                        appendTo: "body",
                        autoOpen: !0,
                        buttons: [],
                        classes: {
                            "ui-dialog": "ui-corner-all",
                            "ui-dialog-titlebar": "ui-corner-all"
                        },
                        closeOnEscape: !0,
                        closeText: "Close",
                        draggable: !0,
                        hide: null,
                        height: "auto",
                        maxHeight: null,
                        maxWidth: null,
                        minHeight: 150,
                        minWidth: 150,
                        modal: !1,
                        position: {
                            my: "center",
                            at: "center",
                            of: window,
                            collision: "fit",
                            using: function(e) {
                                var i = t(this).css(e).offset().top;
                                i < 0 && t(this).css("top", e.top - i)
                            }
                        },
                        resizable: !0,
                        show: null,
                        title: null,
                        width: 300,
                        beforeClose: null,
                        close: null,
                        drag: null,
                        dragStart: null,
                        dragStop: null,
                        focus: null,
                        open: null,
                        resize: null,
                        resizeStart: null,
                        resizeStop: null
                    },
                    sizeRelatedOptions: {
                        buttons: !0,
                        height: !0,
                        maxHeight: !0,
                        maxWidth: !0,
                        minHeight: !0,
                        minWidth: !0,
                        width: !0
                    },
                    resizableRelatedOptions: {
                        maxHeight: !0,
                        maxWidth: !0,
                        minHeight: !0,
                        minWidth: !0
                    },
                    _create: function() {
                        this.originalCss = {
                            display: this.element[0].style.display,
                            width: this.element[0].style.width,
                            minHeight: this.element[0].style.minHeight,
                            maxHeight: this.element[0].style.maxHeight,
                            height: this.element[0].style.height
                        }, this.originalPosition = {
                            parent: this.element.parent(),
                            index: this.element.parent().children().index(this.element)
                        }, this.originalTitle = this.element.attr("title"), null == this.options.title && null != this.originalTitle && (this.options.title = this.originalTitle), this.options.disabled && (this.options.disabled = !1), this._createWrapper(), this.element.show().removeAttr("title").appendTo(this.uiDialog), this._addClass("ui-dialog-content", "ui-widget-content"), this._createTitlebar(), this._createButtonPane(), this.options.draggable && t.fn.draggable && this._makeDraggable(), this.options.resizable && t.fn.resizable && this._makeResizable(), this._isOpen = !1, this._trackFocus()
                    },
                    _init: function() {
                        this.options.autoOpen && this.open()
                    },
                    _appendTo: function() {
                        var e = this.options.appendTo;
                        return e && (e.jquery || e.nodeType) ? t(e) : this.document.find(e || "body").eq(0)
                    },
                    _destroy: function() {
                        var t, e = this.originalPosition;
                        this._untrackInstance(), this._destroyOverlay(), this.element.removeUniqueId().css(this.originalCss).detach(), this.uiDialog.remove(), this.originalTitle && this.element.attr("title", this.originalTitle), t = e.parent.children().eq(e.index), t.length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element)
                    },
                    widget: function() {
                        return this.uiDialog
                    },
                    disable: t.noop,
                    enable: t.noop,
                    close: function(e) {
                        var i = this;
                        this._isOpen && !1 !== this._trigger("beforeClose", e) && (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), this.opener.filter(":focusable").trigger("focus").length || t.ui.safeBlur(t.ui.safeActiveElement(this.document[0])), this._hide(this.uiDialog, this.options.hide, function() {
                            i._trigger("close", e)
                        }))
                    },
                    isOpen: function() {
                        return this._isOpen
                    },
                    moveToTop: function() {
                        this._moveToTop()
                    },
                    _moveToTop: function(e, i) {
                        var s = !1,
                        n = this.uiDialog.siblings(".ui-front:visible").map(function() {
                            return +t(this).css("z-index")
                        }).get(),
                        o = Math.max.apply(null, n);
                        return o >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", o + 1), s = !0), s && !i && this._trigger("focus", e), s
                    },
                    open: function() {
                        var e = this;
                        if (this._isOpen) return void(this._moveToTop() && this._focusTabbable());
                        this._isOpen = !0, this.opener = t(t.ui.safeActiveElement(this.document[0])), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function() {
                            e._focusTabbable(), e._trigger("focus")
                        }), this._makeFocusTarget(), this._trigger("open")
                    },
                    _focusTabbable: function() {
                        var t = this._focusedElement;
                        t || (t = this.element.find("[autofocus]")), t.length || (t = this.element.find(":tabbable")), t.length || (t = this.uiDialogButtonPane.find(":tabbable")), t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")), t.length || (t = this.uiDialog), t.eq(0).trigger("focus")
                    },
                    _keepFocus: function(e) {
                        function i() {
                            var e = t.ui.safeActiveElement(this.document[0]);
                            this.uiDialog[0] === e || t.contains(this.uiDialog[0], e) || this._focusTabbable()
                        }
                        e.preventDefault(), i.call(this), this._delay(i)
                    },
                    _createWrapper: function() {
                        this.uiDialog = t("<div>").hide().attr({
                            tabIndex: -1,
                            role: "dialog"
                        }).appendTo(this._appendTo()), this._addClass(this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front"), this._on(this.uiDialog, {
                            keydown: function(e) {
                                if (this.options.closeOnEscape && !e.isDefaultPrevented() && e.keyCode && e.keyCode === t.ui.keyCode.ESCAPE) return e.preventDefault(), void this.close(e);
                                if (e.keyCode === t.ui.keyCode.TAB && !e.isDefaultPrevented()) {
                                    var i = this.uiDialog.find(":tabbable"),
                                    s = i.filter(":first"),
                                    n = i.filter(":last");
                                    e.target !== n[0] && e.target !== this.uiDialog[0] || e.shiftKey ? e.target !== s[0] && e.target !== this.uiDialog[0] || !e.shiftKey || (this._delay(function() {
                                        n.trigger("focus")
                                    }), e.preventDefault()) : (this._delay(function() {
                                        s.trigger("focus")
                                    }), e.preventDefault())
                                }
                            },
                            mousedown: function(t) {
                                this._moveToTop(t) && this._focusTabbable()
                            }
                        }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                            "aria-describedby": this.element.uniqueId().attr("id")
                        })
                    },
                    _createTitlebar: function() {
                        var e;
                        this.uiDialogTitlebar = t("<div>"), this._addClass(this.uiDialogTitlebar, "ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix"), this._on(this.uiDialogTitlebar, {
                            mousedown: function(e) {
                                t(e.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.trigger("focus")
                            }
                        }), this.uiDialogTitlebarClose = t("<button type='button'></button>").button({
                            label: t("<a>").text(this.options.closeText).html(),
                            icon: "ui-icon-closethick",
                            showLabel: !1
                        }).appendTo(this.uiDialogTitlebar), this._addClass(this.uiDialogTitlebarClose, "ui-dialog-titlebar-close"), this._on(this.uiDialogTitlebarClose, {
                            click: function(t) {
                                t.preventDefault(), this.close(t)
                            }
                        }), e = t("<span>").uniqueId().prependTo(this.uiDialogTitlebar), this._addClass(e, "ui-dialog-title"), this._title(e), this.uiDialogTitlebar.prependTo(this.uiDialog), this.uiDialog.attr({
                            "aria-labelledby": e.attr("id")
                        })
                    },
                    _title: function(t) {
                        this.options.title ? t.text(this.options.title) : t.html("&#160;")
                    },
                    _createButtonPane: function() {
                        this.uiDialogButtonPane = t("<div>"), this._addClass(this.uiDialogButtonPane, "ui-dialog-buttonpane", "ui-widget-content ui-helper-clearfix"), this.uiButtonSet = t("<div>").appendTo(this.uiDialogButtonPane), this._addClass(this.uiButtonSet, "ui-dialog-buttonset"), this._createButtons()
                    },
                    _createButtons: function() {
                        var e = this,
                        i = this.options.buttons;
                        if (this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), t.isEmptyObject(i) || t.isArray(i) && !i.length) return void this._removeClass(this.uiDialog, "ui-dialog-buttons");
                        t.each(i, function(i, s) {
                            var n, o;
                            s = t.isFunction(s) ? {
                                click: s,
                                text: i
                            } : s, s = t.extend({
                                type: "button"
                            }, s), n = s.click, o = {
                                icon: s.icon,
                                iconPosition: s.iconPosition,
                                showLabel: s.showLabel,
                                icons: s.icons,
                                text: s.text
                            }, delete s.click, delete s.icon, delete s.iconPosition, delete s.showLabel, delete s.icons, "boolean" == typeof s.text && delete s.text, t("<button></button>", s).button(o).appendTo(e.uiButtonSet).on("click", function() {
                                n.apply(e.element[0], arguments)
                            })
                        }), this._addClass(this.uiDialog, "ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog)
                    },
                    _makeDraggable: function() {
                        function e(t) {
                            return {
                                position: t.position,
                                offset: t.offset
                            }
                        }
                        var i = this,
                        s = this.options;
                        this.uiDialog.draggable({
                            cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                            handle: ".ui-dialog-titlebar",
                            containment: "document",
                            start: function(s, n) {
                                i._addClass(t(this), "ui-dialog-dragging"), i._blockFrames(), i._trigger("dragStart", s, e(n))
                            },
                            drag: function(t, s) {
                                i._trigger("drag", t, e(s))
                            },
                            stop: function(n, o) {
                                var a = o.offset.left - i.document.scrollLeft(),
                                r = o.offset.top - i.document.scrollTop();
                                s.position = {
                                    my: "left top",
                                    at: "left" + (a >= 0 ? "+" : "") + a + " top" + (r >= 0 ? "+" : "") + r,
                                    of: i.window
                                }, i._removeClass(t(this), "ui-dialog-dragging"), i._unblockFrames(), i._trigger("dragStop", n, e(o))
                            }
                        })
                    },
                    _makeResizable: function() {
                        function e(t) {
                            return {
                                originalPosition: t.originalPosition,
                                originalSize: t.originalSize,
                                position: t.position,
                                size: t.size
                            }
                        }
                        var i = this,
                        s = this.options,
                        n = s.resizable,
                        o = this.uiDialog.css("position"),
                        a = "string" == typeof n ? n : "n,e,s,w,se,sw,ne,nw";
                        this.uiDialog.resizable({
                            cancel: ".ui-dialog-content",
                            containment: "document",
                            alsoResize: this.element,
                            maxWidth: s.maxWidth,
                            maxHeight: s.maxHeight,
                            minWidth: s.minWidth,
                            minHeight: this._minHeight(),
                            handles: a,
                            start: function(s, n) {
                                i._addClass(t(this), "ui-dialog-resizing"), i._blockFrames(), i._trigger("resizeStart", s, e(n))
                            },
                            resize: function(t, s) {
                                i._trigger("resize", t, e(s))
                            },
                            stop: function(n, o) {
                                var a = i.uiDialog.offset(),
                                r = a.left - i.document.scrollLeft(),
                                l = a.top - i.document.scrollTop();
                                s.height = i.uiDialog.height(), s.width = i.uiDialog.width(), s.position = {
                                    my: "left top",
                                    at: "left" + (r >= 0 ? "+" : "") + r + " top" + (l >= 0 ? "+" : "") + l,
                                    of: i.window
                                }, i._removeClass(t(this), "ui-dialog-resizing"), i._unblockFrames(), i._trigger("resizeStop", n, e(o))
                            }
                        }).css("position", o)
                    },
                    _trackFocus: function() {
                        this._on(this.widget(), {
                            focusin: function(e) {
                                this._makeFocusTarget(), this._focusedElement = t(e.target)
                            }
                        })
                    },
                    _makeFocusTarget: function() {
                        this._untrackInstance(), this._trackingInstances().unshift(this)
                    },
                    _untrackInstance: function() {
                        var e = this._trackingInstances(),
                        i = t.inArray(this, e); - 1 !== i && e.splice(i, 1)
                    },
                    _trackingInstances: function() {
                        var t = this.document.data("ui-dialog-instances");
                        return t || (t = [], this.document.data("ui-dialog-instances", t)), t
                    },
                    _minHeight: function() {
                        var t = this.options;
                        return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height)
                    },
                    _position: function() {
                        var t = this.uiDialog.is(":visible");
                        t || this.uiDialog.show(), this.uiDialog.position(this.options.position), t || this.uiDialog.hide()
                    },
                    _setOptions: function(e) {
                        var i = this,
                        s = !1,
                        n = {};
                        t.each(e, function(t, e) {
                            i._setOption(t, e), t in i.sizeRelatedOptions && (s = !0), t in i.resizableRelatedOptions && (n[t] = e)
                        }), s && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", n)
                    },
                    _setOption: function(e, i) {
                        var s, n, o = this.uiDialog;
                        "disabled" !== e && (this._super(e, i), "appendTo" === e && this.uiDialog.appendTo(this._appendTo()), "buttons" === e && this._createButtons(), "closeText" === e && this.uiDialogTitlebarClose.button({
                            label: t("<a>").text("" + this.options.closeText).html()
                        }), "draggable" === e && (s = o.is(":data(ui-draggable)"), s && !i && o.draggable("destroy"), !s && i && this._makeDraggable()), "position" === e && this._position(), "resizable" === e && (n = o.is(":data(ui-resizable)"), n && !i && o.resizable("destroy"), n && "string" == typeof i && o.resizable("option", "handles", i), n || !1 === i || this._makeResizable()), "title" === e && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
                    },
                    _size: function() {
                        var t, e, i, s = this.options;
                        this.element.show().css({
                            width: "auto",
                            minHeight: 0,
                            maxHeight: "none",
                            height: 0
                        }), s.minWidth > s.width && (s.width = s.minWidth), t = this.uiDialog.css({
                            height: "auto",
                            width: s.width
                        }).outerHeight(), e = Math.max(0, s.minHeight - t), i = "number" == typeof s.maxHeight ? Math.max(0, s.maxHeight - t) : "none", "auto" === s.height ? this.element.css({
                            minHeight: e,
                            maxHeight: i,
                            height: "auto"
                        }) : this.element.height(Math.max(0, s.height - t)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
                    },
                    _blockFrames: function() {
                        this.iframeBlocks = this.document.find("iframe").map(function() {
                            var e = t(this);
                            return t("<div>").css({
                                position: "absolute",
                                width: e.outerWidth(),
                                height: e.outerHeight()
                            }).appendTo(e.parent()).offset(e.offset())[0]
                        })
                    },
                    _unblockFrames: function() {
                        this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
                    },
                    _allowInteraction: function(e) {
                        return !!t(e.target).closest(".ui-dialog").length || !!t(e.target).closest(".ui-datepicker").length
                    },
                    _createOverlay: function() {
                        if (this.options.modal) {
                            var e = !0;
                            this._delay(function() {
                                e = !1
                            }), this.document.data("ui-dialog-overlays") || this._on(this.document, {
                                focusin: function(t) {
                                    e || this._allowInteraction(t) || (t.preventDefault(), this._trackingInstances()[0]._focusTabbable())
                                }
                            }), this.overlay = t("<div>").appendTo(this._appendTo()), this._addClass(this.overlay, null, "ui-widget-overlay ui-front"), this._on(this.overlay, {
                                mousedown: "_keepFocus"
                            }), this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
                        }
                    },
                    _destroyOverlay: function() {
                        if (this.options.modal && this.overlay) {
                            var t = this.document.data("ui-dialog-overlays") - 1;
                            t ? this.document.data("ui-dialog-overlays", t) : (this._off(this.document, "focusin"), this.document.removeData("ui-dialog-overlays")), this.overlay.remove(), this.overlay = null
                        }
                    }
                }), !1 !== t.uiBackCompat && t.widget("ui.dialog", t.ui.dialog, {
                    options: {
                        dialogClass: ""
                    },
                    _createWrapper: function() {
                        this._super(), this.uiDialog.addClass(this.options.dialogClass)
                    },
                    _setOption: function(t, e) {
                        "dialogClass" === t && this.uiDialog.removeClass(this.options.dialogClass).addClass(e), this._superApply(arguments)
                    }
                });
                t.ui.dialog;
                t.widget("ui.droppable", {
                    version: "1.12.1",
                    widgetEventPrefix: "drop",
                    options: {
                        accept: "*",
                        addClasses: !0,
                        greedy: !1,
                        scope: "default",
                        tolerance: "intersect",
                        activate: null,
                        deactivate: null,
                        drop: null,
                        out: null,
                        over: null
                    },
                    _create: function() {
                        var e, i = this.options,
                        s = i.accept;
                        this.isover = !1, this.isout = !0, this.accept = t.isFunction(s) ? s : function(t) {
                            return t.is(s)
                        }, this.proportions = function() {
                            if (!arguments.length) return e || (e = {
                                width: this.element[0].offsetWidth,
                                height: this.element[0].offsetHeight
                            });
                                e = arguments[0]
                            }, this._addToManager(i.scope), i.addClasses && this._addClass("ui-droppable")
                        },
                        _addToManager: function(e) {
                            t.ui.ddmanager.droppables[e] = t.ui.ddmanager.droppables[e] || [], t.ui.ddmanager.droppables[e].push(this)
                        },
                        _splice: function(t) {
                            for (var e = 0; e < t.length; e++) t[e] === this && t.splice(e, 1)
                        },
                    _destroy: function() {
                        var e = t.ui.ddmanager.droppables[this.options.scope];
                        this._splice(e)
                    },
                    _setOption: function(e, i) {
                        if ("accept" === e) this.accept = t.isFunction(i) ? i : function(t) {
                            return t.is(i)
                        };
                        else if ("scope" === e) {
                            var s = t.ui.ddmanager.droppables[this.options.scope];
                            this._splice(s), this._addToManager(i)
                        }
                        this._super(e, i)
                    },
                    _activate: function(e) {
                        var i = t.ui.ddmanager.current;
                        this._addActiveClass(), i && this._trigger("activate", e, this.ui(i))
                    },
                    _deactivate: function(e) {
                        var i = t.ui.ddmanager.current;
                        this._removeActiveClass(), i && this._trigger("deactivate", e, this.ui(i))
                    },
                    _over: function(e) {
                        var i = t.ui.ddmanager.current;
                        i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._addHoverClass(), this._trigger("over", e, this.ui(i)))
                    },
                    _out: function(e) {
                        var i = t.ui.ddmanager.current;
                        i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._removeHoverClass(), this._trigger("out", e, this.ui(i)))
                    },
                    _drop: function(e, i) {
                        var s = i || t.ui.ddmanager.current,
                        n = !1;
                        return !(!s || (s.currentItem || s.element)[0] === this.element[0]) && (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
                            var i = t(this).droppable("instance");
                            if (i.options.greedy && !i.options.disabled && i.options.scope === s.options.scope && i.accept.call(i.element[0], s.currentItem || s.element) && f(s, t.extend(i, {
                                offset: i.element.offset()
                            }), i.options.tolerance, e)) return n = !0, !1
                        }), !n && (!!this.accept.call(this.element[0], s.currentItem || s.element) && (this._removeActiveClass(), this._removeHoverClass(), this._trigger("drop", e, this.ui(s)), this.element)))
                    },
                    ui: function(t) {
                        return {
                            draggable: t.currentItem || t.element,
                            helper: t.helper,
                            position: t.position,
                            offset: t.positionAbs
                        }
                    },
                    _addHoverClass: function() {
                        this._addClass("ui-droppable-hover")
                    },
                    _removeHoverClass: function() {
                        this._removeClass("ui-droppable-hover")
                    },
                    _addActiveClass: function() {
                        this._addClass("ui-droppable-active")
                    },
                    _removeActiveClass: function() {
                        this._removeClass("ui-droppable-active")
                    }
                });
var f = t.ui.intersect = function() {
    function t(t, e, i) {
        return t >= e && t < e + i
    }
    return function(e, i, s, n) {
        if (!i.offset) return !1;
        var o = (e.positionAbs || e.position.absolute).left + e.margins.left,
        a = (e.positionAbs || e.position.absolute).top + e.margins.top,
        r = o + e.helperProportions.width,
        l = a + e.helperProportions.height,
        h = i.offset.left,
        c = i.offset.top,
        u = h + i.proportions().width,
        d = c + i.proportions().height;
        switch (s) {
            case "fit":
            return h <= o && r <= u && c <= a && l <= d;
            case "intersect":
            return h < o + e.helperProportions.width / 2 && r - e.helperProportions.width / 2 < u && c < a + e.helperProportions.height / 2 && l - e.helperProportions.height / 2 < d;
            case "pointer":
            return t(n.pageY, c, i.proportions().height) && t(n.pageX, h, i.proportions().width);
            case "touch":
            return (a >= c && a <= d || l >= c && l <= d || a < c && l > d) && (o >= h && o <= u || r >= h && r <= u || o < h && r > u);
            default:
            return !1
        }
    }
}();
t.ui.ddmanager = {
    current: null,
    droppables: {
        default: []
    },
    prepareOffsets: function(e, i) {
        var s, n, o = t.ui.ddmanager.droppables[e.options.scope] || [],
        a = i ? i.type : null,
        r = (e.currentItem || e.element).find(":data(ui-droppable)").addBack();
        t: for (s = 0; s < o.length; s++)
        if (!(o[s].options.disabled || e && !o[s].accept.call(o[s].element[0], e.currentItem || e.element))) {
            for (n = 0; n < r.length; n++)
                if (r[n] === o[s].element[0]) {
                    o[s].proportions().height = 0;
                    continue t
                }
                o[s].visible = "none" !== o[s].element.css("display"), o[s].visible && ("mousedown" === a && o[s]._activate.call(o[s], i), o[s].offset = o[s].element.offset(), o[s].proportions({
                    width: o[s].element[0].offsetWidth,
                    height: o[s].element[0].offsetHeight
                }))
            }
        },
        drop: function(e, i) {
            var s = !1;
            return t.each((t.ui.ddmanager.droppables[e.options.scope] || []).slice(), function() {
                this.options && (!this.options.disabled && this.visible && f(e, this, this.options.tolerance, i) && (s = this._drop.call(this, i) || s), !this.options.disabled && this.visible && this.accept.call(this.element[0], e.currentItem || e.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i)))
            }), s
        },
        dragStart: function(e, i) {
            e.element.parentsUntil("body").on("scroll.droppable", function() {
                e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
            })
        },
        drag: function(e, i) {
            e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i), t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function() {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var s, n, o, a = f(e, this, this.options.tolerance, i),
                    r = !a && this.isover ? "isout" : a && !this.isover ? "isover" : null;
                    r && (this.options.greedy && (n = this.options.scope, o = this.element.parents(":data(ui-droppable)").filter(function() {
                        return t(this).droppable("instance").options.scope === n
                    }), o.length && (s = t(o[0]).droppable("instance"), s.greedyChild = "isover" === r)), s && "isover" === r && (s.isover = !1, s.isout = !0, s._out.call(s, i)), this[r] = !0, this["isout" === r ? "isover" : "isout"] = !1, this["isover" === r ? "_over" : "_out"].call(this, i), s && "isout" === r && (s.isout = !1, s.isover = !0, s._over.call(s, i)))
                }
            })
        },
        dragStop: function(e, i) {
            e.element.parentsUntil("body").off("scroll.droppable"), e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
        }
    }, !1 !== t.uiBackCompat && t.widget("ui.droppable", t.ui.droppable, {
        options: {
            hoverClass: !1,
            activeClass: !1
        },
        _addActiveClass: function() {
            this._super(), this.options.activeClass && this.element.addClass(this.options.activeClass)
        },
        _removeActiveClass: function() {
            this._super(), this.options.activeClass && this.element.removeClass(this.options.activeClass)
        },
        _addHoverClass: function() {
            this._super(), this.options.hoverClass && this.element.addClass(this.options.hoverClass)
        },
        _removeHoverClass: function() {
            this._super(), this.options.hoverClass && this.element.removeClass(this.options.hoverClass)
        }
    });
    t.ui.droppable, t.widget("ui.progressbar", {
        version: "1.12.1",
        options: {
            classes: {
                "ui-progressbar": "ui-corner-all",
                "ui-progressbar-value": "ui-corner-left",
                "ui-progressbar-complete": "ui-corner-right"
            },
            max: 100,
            value: 0,
            change: null,
            complete: null
        },
        min: 0,
        _create: function() {
            this.oldValue = this.options.value = this._constrainedValue(), this.element.attr({
                role: "progressbar",
                "aria-valuemin": this.min
            }), this._addClass("ui-progressbar", "ui-widget ui-widget-content"), this.valueDiv = t("<div>").appendTo(this.element), this._addClass(this.valueDiv, "ui-progressbar-value", "ui-widget-header"), this._refreshValue()
        },
        _destroy: function() {
            this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"), this.valueDiv.remove()
        },
        value: function(t) {
            if (void 0 === t) return this.options.value;
            this.options.value = this._constrainedValue(t), this._refreshValue()
        },
        _constrainedValue: function(t) {
            return void 0 === t && (t = this.options.value), this.indeterminate = !1 === t, "number" != typeof t && (t = 0), !this.indeterminate && Math.min(this.options.max, Math.max(this.min, t))
        },
        _setOptions: function(t) {
            var e = t.value;
            delete t.value, this._super(t), this.options.value = this._constrainedValue(e), this._refreshValue()
        },
        _setOption: function(t, e) {
            "max" === t && (e = Math.max(this.min, e)), this._super(t, e)
        },
        _setOptionDisabled: function(t) {
            this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t)
        },
        _percentage: function() {
            return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
        },
        _refreshValue: function() {
            var e = this.options.value,
            i = this._percentage();
            this.valueDiv.toggle(this.indeterminate || e > this.min).width(i.toFixed(0) + "%"), this._toggleClass(this.valueDiv, "ui-progressbar-complete", null, e === this.options.max)._toggleClass("ui-progressbar-indeterminate", null, this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = t("<div>").appendTo(this.valueDiv), this._addClass(this.overlayDiv, "ui-progressbar-overlay"))) : (this.element.attr({
                "aria-valuemax": this.options.max,
                "aria-valuenow": e
            }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== e && (this.oldValue = e, this._trigger("change")), e === this.options.max && this._trigger("complete")
        }
    }), t.widget("ui.selectable", t.ui.mouse, {
        version: "1.12.1",
        options: {
            appendTo: "body",
            autoRefresh: !0,
            distance: 0,
            filter: "*",
            tolerance: "touch",
            selected: null,
            selecting: null,
            start: null,
            stop: null,
            unselected: null,
            unselecting: null
        },
        _create: function() {
            var e = this;
            this._addClass("ui-selectable"), this.dragged = !1, this.refresh = function() {
                e.elementPos = t(e.element[0]).offset(), e.selectees = t(e.options.filter, e.element[0]), e._addClass(e.selectees, "ui-selectee"), e.selectees.each(function() {
                    var i = t(this),
                    s = i.offset(),
                    n = {
                        left: s.left - e.elementPos.left,
                        top: s.top - e.elementPos.top
                    };
                    t.data(this, "selectable-item", {
                        element: this,
                        $element: i,
                        left: n.left,
                        top: n.top,
                        right: n.left + i.outerWidth(),
                        bottom: n.top + i.outerHeight(),
                        startselected: !1,
                        selected: i.hasClass("ui-selected"),
                        selecting: i.hasClass("ui-selecting"),
                        unselecting: i.hasClass("ui-unselecting")
                    })
                })
            }, this.refresh(), this._mouseInit(), this.helper = t("<div>"), this._addClass(this.helper, "ui-selectable-helper")
        },
        _destroy: function() {
            this.selectees.removeData("selectable-item"), this._mouseDestroy()
        },
        _mouseStart: function(e) {
            var i = this,
            s = this.options;
            this.opos = [e.pageX, e.pageY], this.elementPos = t(this.element[0]).offset(), this.options.disabled || (this.selectees = t(s.filter, this.element[0]), this._trigger("start", e), t(s.appendTo).append(this.helper), this.helper.css({
                left: e.pageX,
                top: e.pageY,
                width: 0,
                height: 0
            }), s.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
                var s = t.data(this, "selectable-item");
                s.startselected = !0, e.metaKey || e.ctrlKey || (i._removeClass(s.$element, "ui-selected"), s.selected = !1, i._addClass(s.$element, "ui-unselecting"), s.unselecting = !0, i._trigger("unselecting", e, {
                    unselecting: s.element
                }))
            }),
            t(e.target).parents().addBack().each(function() {
                var s, n = t.data(this, "selectable-item");
                if (n) return s = !e.metaKey && !e.ctrlKey || !n.$element.hasClass("ui-selected"), i._removeClass(n.$element, s ? "ui-unselecting" : "ui-selected")._addClass(n.$element, s ? "ui-selecting" : "ui-unselecting"), n.unselecting = !s, n.selecting = s, n.selected = s, s ? i._trigger("selecting", e, {
                    selecting: n.element
                }) : i._trigger("unselecting", e, {
                    unselecting: n.element
                }), !1
            }))
        },
        _mouseDrag: function(e) {
            if (this.dragged = !0, !this.options.disabled) {
                var i, s = this,
                n = this.options,
                o = this.opos[0],
                a = this.opos[1],
                r = e.pageX,
                l = e.pageY;
                return o > r && (i = r, r = o, o = i), a > l && (i = l, l = a, a = i), this.helper.css({
                    left: o,
                    top: a,
                    width: r - o,
                    height: l - a
                }), this.selectees.each(function() {
                    var i = t.data(this, "selectable-item"),
                    h = !1,
                    c = {};
                    i && i.element !== s.element[0] && (c.left = i.left + s.elementPos.left, c.right = i.right + s.elementPos.left, c.top = i.top + s.elementPos.top, c.bottom = i.bottom + s.elementPos.top, "touch" === n.tolerance ? h = !(c.left > r || c.right < o || c.top > l || c.bottom < a) : "fit" === n.tolerance && (h = c.left > o && c.right < r && c.top > a && c.bottom < l), h ? (i.selected && (s._removeClass(i.$element, "ui-selected"), i.selected = !1), i.unselecting && (s._removeClass(i.$element, "ui-unselecting"), i.unselecting = !1), i.selecting || (s._addClass(i.$element, "ui-selecting"), i.selecting = !0, s._trigger("selecting", e, {
                        selecting: i.element
                    }))) : (i.selecting && ((e.metaKey || e.ctrlKey) && i.startselected ? (s._removeClass(i.$element, "ui-selecting"), i.selecting = !1, s._addClass(i.$element, "ui-selected"), i.selected = !0) : (s._removeClass(i.$element, "ui-selecting"), i.selecting = !1, i.startselected && (s._addClass(i.$element, "ui-unselecting"), i.unselecting = !0), s._trigger("unselecting", e, {
                        unselecting: i.element
                    }))), i.selected && (e.metaKey || e.ctrlKey || i.startselected || (s._removeClass(i.$element, "ui-selected"), i.selected = !1, s._addClass(i.$element, "ui-unselecting"), i.unselecting = !0, s._trigger("unselecting", e, {
                        unselecting: i.element
                    })))))
                }), !1
            }
        },
        _mouseStop: function(e) {
            var i = this;
            return this.dragged = !1, t(".ui-unselecting", this.element[0]).each(function() {
                var s = t.data(this, "selectable-item");
                i._removeClass(s.$element, "ui-unselecting"), s.unselecting = !1, s.startselected = !1, i._trigger("unselected", e, {
                    unselected: s.element
                })
            }), t(".ui-selecting", this.element[0]).each(function() {
                var s = t.data(this, "selectable-item");
                i._removeClass(s.$element, "ui-selecting")._addClass(s.$element, "ui-selected"), s.selecting = !1, s.selected = !0, s.startselected = !0, i._trigger("selected", e, {
                    selected: s.element
                })
            }), this._trigger("stop", e), this.helper.remove(), !1
        }
    }), t.widget("ui.selectmenu", [t.ui.formResetMixin, {
        version: "1.12.1",
        defaultElement: "<select>",
        options: {
            appendTo: null,
            classes: {
                "ui-selectmenu-button-open": "ui-corner-top",
                "ui-selectmenu-button-closed": "ui-corner-all"
            },
            disabled: null,
            icons: {
                button: "ui-icon-triangle-1-s"
            },
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            width: !1,
            change: null,
            close: null,
            focus: null,
            open: null,
            select: null
        },
        _create: function() {
            var e = this.element.uniqueId().attr("id");
            this.ids = {
                element: e,
                button: e + "-button",
                menu: e + "-menu"
            }, this._drawButton(), this._drawMenu(), this._bindFormResetHandler(), this._rendered = !1, this.menuItems = t()
        },
        _drawButton: function() {
            var e, i = this,
            s = this._parseOption(this.element.find("option:selected"), this.element[0].selectedIndex);
            this.labels = this.element.labels().attr("for", this.ids.button), this._on(this.labels, {
                click: function(t) {
                    this.button.focus(), t.preventDefault()
                }
            }), this.element.hide(), this.button = t("<span>", {
                tabindex: this.options.disabled ? -1 : 0,
                id: this.ids.button,
                role: "combobox",
                "aria-expanded": "false",
                "aria-autocomplete": "list",
                "aria-owns": this.ids.menu,
                "aria-haspopup": "true",
                title: this.element.attr("title")
            }).insertAfter(this.element), this._addClass(this.button, "ui-selectmenu-button ui-selectmenu-button-closed", "ui-button ui-widget"), e = t("<span>").appendTo(this.button), this._addClass(e, "ui-selectmenu-icon", "ui-icon " + this.options.icons.button), this.buttonItem = this._renderButtonItem(s).appendTo(this.button), !1 !== this.options.width && this._resizeButton(), this._on(this.button, this._buttonEvents), this.button.one("focusin", function() {
                i._rendered || i._refreshMenu()
            })
        },
        _drawMenu: function() {
            var e = this;
            this.menu = t("<ul>", {
                "aria-hidden": "true",
                "aria-labelledby": this.ids.button,
                id: this.ids.menu
            }), this.menuWrap = t("<div>").append(this.menu), this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front"), this.menuWrap.appendTo(this._appendTo()), this.menuInstance = this.menu.menu({
                classes: {
                    "ui-menu": "ui-corner-bottom"
                },
                role: "listbox",
                select: function(t, i) {
                    t.preventDefault(), e._setSelection(), e._select(i.item.data("ui-selectmenu-item"), t)
                },
                focus: function(t, i) {
                    var s = i.item.data("ui-selectmenu-item");
                    null != e.focusIndex && s.index !== e.focusIndex && (e._trigger("focus", t, {
                        item: s
                    }), e.isOpen || e._select(s, t)), e.focusIndex = s.index, e.button.attr("aria-activedescendant", e.menuItems.eq(s.index).attr("id"))
                }
            }).menu("instance"), this.menuInstance._off(this.menu, "mouseleave"), this.menuInstance._closeOnDocumentClick = function() {
                return !1
            }, this.menuInstance._isDivider = function() {
                return !1
            }
        },
        refresh: function() {
            this._refreshMenu(), this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item") || {})), null === this.options.width && this._resizeButton()
        },
        _refreshMenu: function() {
            var t, e = this.element.find("option");
            this.menu.empty(), this._parseOptions(e), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"), this._rendered = !0, e.length && (t = this._getSelectedItem(), this.menuInstance.focus(null, t), this._setAria(t.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")))
        },
        open: function(t) {
            this.options.disabled || (this._rendered ? (this._removeClass(this.menu.find(".ui-state-active"), null, "ui-state-active"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.menuItems.length && (this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", t)))
        },
        _position: function() {
            this.menuWrap.position(t.extend({
                of: this.button
            }, this.options.position))
        },
        close: function(t) {
            this.isOpen && (this.isOpen = !1, this._toggleAttr(), this.range = null, this._off(this.document), this._trigger("close", t))
        },
        widget: function() {
            return this.button
        },
        menuWidget: function() {
            return this.menu
        },
        _renderButtonItem: function(e) {
            var i = t("<span>");
            return this._setText(i, e.label), this._addClass(i, "ui-selectmenu-text"), i
        },
        _renderMenu: function(e, i) {
            var s = this,
            n = "";
            t.each(i, function(i, o) {
                var a;
                o.optgroup !== n && (a = t("<li>", {
                    text: o.optgroup
                }), s._addClass(a, "ui-selectmenu-optgroup", "ui-menu-divider" + (o.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : "")), a.appendTo(e), n = o.optgroup), s._renderItemData(e, o)
            })
        },
        _renderItemData: function(t, e) {
            return this._renderItem(t, e).data("ui-selectmenu-item", e)
        },
        _renderItem: function(e, i) {
            var s = t("<li>"),
            n = t("<div>", {
                title: i.element.attr("title")
            });
            return i.disabled && this._addClass(s, null, "ui-state-disabled"), this._setText(n, i.label), s.append(n).appendTo(e)
        },
        _setText: function(t, e) {
            e ? t.text(e) : t.html("&#160;")
        },
        _move: function(t, e) {
            var i, s, n = ".ui-menu-item";
            this.isOpen ? i = this.menuItems.eq(this.focusIndex).parent("li") : (i = this.menuItems.eq(this.element[0].selectedIndex).parent("li"), n += ":not(.ui-state-disabled)"), s = "first" === t || "last" === t ? i["first" === t ? "prevAll" : "nextAll"](n).eq(-1) : i[t + "All"](n).eq(0), s.length && this.menuInstance.focus(e, s)
        },
        _getSelectedItem: function() {
            return this.menuItems.eq(this.element[0].selectedIndex).parent("li")
        },
        _toggle: function(t) {
            this[this.isOpen ? "close" : "open"](t)
        },
        _setSelection: function() {
            var t;
            this.range && (window.getSelection ? (t = window.getSelection(), t.removeAllRanges(), t.addRange(this.range)) : this.range.select(), this.button.focus())
        },
        _documentClick: {
            mousedown: function(e) {
                this.isOpen && (t(e.target).closest(".ui-selectmenu-menu, #" + t.ui.escapeSelector(this.ids.button)).length || this.close(e))
            }
        },
        _buttonEvents: {
            mousedown: function() {
                var t;
                window.getSelection ? (t = window.getSelection(), t.rangeCount && (this.range = t.getRangeAt(0))) : this.range = document.selection.createRange()
            },
            click: function(t) {
                this._setSelection(), this._toggle(t)
            },
            keydown: function(e) {
                var i = !0;
                switch (e.keyCode) {
                    case t.ui.keyCode.TAB:
                    case t.ui.keyCode.ESCAPE:
                    this.close(e), i = !1;
                    break;
                    case t.ui.keyCode.ENTER:
                    this.isOpen && this._selectFocusedItem(e);
                    break;
                    case t.ui.keyCode.UP:
                    e.altKey ? this._toggle(e) : this._move("prev", e);
                    break;
                    case t.ui.keyCode.DOWN:
                    e.altKey ? this._toggle(e) : this._move("next", e);
                    break;
                    case t.ui.keyCode.SPACE:
                    this.isOpen ? this._selectFocusedItem(e) : this._toggle(e);
                    break;
                    case t.ui.keyCode.LEFT:
                    this._move("prev", e);
                    break;
                    case t.ui.keyCode.RIGHT:
                    this._move("next", e);
                    break;
                    case t.ui.keyCode.HOME:
                    case t.ui.keyCode.PAGE_UP:
                    this._move("first", e);
                    break;
                    case t.ui.keyCode.END:
                    case t.ui.keyCode.PAGE_DOWN:
                    this._move("last", e);
                    break;
                    default:
                    this.menu.trigger(e), i = !1
                }
                i && e.preventDefault()
            }
        },
        _selectFocusedItem: function(t) {
            var e = this.menuItems.eq(this.focusIndex).parent("li");
            e.hasClass("ui-state-disabled") || this._select(e.data("ui-selectmenu-item"), t)
        },
        _select: function(t, e) {
            var i = this.element[0].selectedIndex;
            this.element[0].selectedIndex = t.index, this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(t)), this._setAria(t), this._trigger("select", e, {
                item: t
            }), t.index !== i && this._trigger("change", e, {
                item: t
            }), this.close(e)
        },
        _setAria: function(t) {
            var e = this.menuItems.eq(t.index).attr("id");
            this.button.attr({
                "aria-labelledby": e,
                "aria-activedescendant": e
            }), this.menu.attr("aria-activedescendant", e)
        },
        _setOption: function(t, e) {
            if ("icons" === t) {
                var i = this.button.find("span.ui-icon");
                this._removeClass(i, null, this.options.icons.button)._addClass(i, null, e.button)
            }
            this._super(t, e), "appendTo" === t && this.menuWrap.appendTo(this._appendTo()), "width" === t && this._resizeButton()
        },
        _setOptionDisabled: function(t) {
            this._super(t), this.menuInstance.option("disabled", t), this.button.attr("aria-disabled", t), this._toggleClass(this.button, null, "ui-state-disabled", t), this.element.prop("disabled", t), t ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0)
        },
        _appendTo: function() {
            var e = this.options.appendTo;
            return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front, dialog")), e.length || (e = this.document[0].body), e
        },
        _toggleAttr: function() {
            this.button.attr("aria-expanded", this.isOpen), this._removeClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "closed" : "open"))._addClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "open" : "closed"))._toggleClass(this.menuWrap, "ui-selectmenu-open", null, this.isOpen), this.menu.attr("aria-hidden", !this.isOpen)
        },
        _resizeButton: function() {
            var t = this.options.width;
            if (!1 === t) return void this.button.css("width", "");
            null === t && (t = this.element.show().outerWidth(), this.element.hide()), this.button.outerWidth(t)
        },
        _resizeMenu: function() {
            this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1))
        },
        _getCreateOptions: function() {
            var t = this._super();
            return t.disabled = this.element.prop("disabled"), t
        },
        _parseOptions: function(e) {
            var i = this,
            s = [];
            e.each(function(e, n) {
                s.push(i._parseOption(t(n), e))
            }), this.items = s
        },
        _parseOption: function(t, e) {
            var i = t.parent("optgroup");
            return {
                element: t,
                index: e,
                value: t.val(),
                label: t.text(),
                optgroup: i.attr("label") || "",
                disabled: i.prop("disabled") || t.prop("disabled")
            }
        },
        _destroy: function() {
            this._unbindFormResetHandler(), this.menuWrap.remove(), this.button.remove(), this.element.show(), this.element.removeUniqueId(), this.labels.attr("for", this.ids.element)
        }
    }]), t.widget("ui.slider", t.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            classes: {
                "ui-slider": "ui-corner-all",
                "ui-slider-handle": "ui-corner-all",
                "ui-slider-range": "ui-corner-all ui-widget-header"
            },
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        numPages: 5,
        _create: function() {
            this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"), this._refresh(), this._animateOff = !1
        },
        _refresh: function() {
            this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
        },
        _createHandles: function() {
            var e, i, s = this.options,
            n = this.element.find(".ui-slider-handle"),
            o = [];
            for (i = s.values && s.values.length || 1, n.length > i && (n.slice(i).remove(), n = n.slice(0, i)), e = n.length; e < i; e++) o.push("<span tabindex='0'></span>");
                this.handles = n.add(t(o.join("")).appendTo(this.element)), this._addClass(this.handles, "ui-slider-handle", "ui-state-default"), this.handle = this.handles.eq(0), this.handles.each(function(e) {
                    t(this).data("ui-slider-handle-index", e).attr("tabIndex", 0)
                })
        },
        _createRange: function() {
            var e = this.options;
            e.range ? (!0 === e.range && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"), this.range.css({
                left: "",
                bottom: ""
            })) : (this.range = t("<div>").appendTo(this.element), this._addClass(this.range, "ui-slider-range")), "min" !== e.range && "max" !== e.range || this._addClass(this.range, "ui-slider-range-" + e.range)) : (this.range && this.range.remove(), this.range = null)
        },
        _setupEvents: function() {
            this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles)
        },
        _destroy: function() {
            this.handles.remove(), this.range && this.range.remove(), this._mouseDestroy()
        },
        _mouseCapture: function(e) {
            var i, s, n, o, a, r, l, h = this,
            c = this.options;
            return !c.disabled && (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            }, this.elementOffset = this.element.offset(), i = {
                x: e.pageX,
                y: e.pageY
            }, s = this._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, this.handles.each(function(e) {
                var i = Math.abs(s - h.values(e));
                (n > i || n === i && (e === h._lastChangedValue || h.values(e) === c.min)) && (n = i, o = t(this), a = e)
            }), !1 !== this._start(e, a) && (this._mouseSliding = !0, this._handleIndex = a, this._addClass(o, null, "ui-state-active"), o.trigger("focus"), r = o.offset(), l = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = l ? {
                left: 0,
                top: 0
            } : {
                left: e.pageX - r.left - o.width() / 2,
                top: e.pageY - r.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0)
            }, this.handles.hasClass("ui-state-hover") || this._slide(e, a, s), this._animateOff = !0, !0))
        },
        _mouseStart: function() {
            return !0
        },
        _mouseDrag: function(t) {
            var e = {
                x: t.pageX,
                y: t.pageY
            },
            i = this._normValueFromMouse(e);
            return this._slide(t, this._handleIndex, i), !1
        },
        _mouseStop: function(t) {
            return this._removeClass(this.handles, null, "ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
        },
        _detectOrientation: function() {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function(t) {
            var e, i, s, n, o;
            return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), s = i / e, s > 1 && (s = 1), s < 0 && (s = 0), "vertical" === this.orientation && (s = 1 - s), n = this._valueMax() - this._valueMin(), o = this._valueMin() + s * n, this._trimAlignValue(o)
        },
        _uiHash: function(t, e, i) {
            var s = {
                handle: this.handles[t],
                handleIndex: t,
                value: void 0 !== e ? e : this.value()
            };
            return this._hasMultipleValues() && (s.value = void 0 !== e ? e : this.values(t), s.values = i || this.values()), s
        },
        _hasMultipleValues: function() {
            return this.options.values && this.options.values.length
        },
        _start: function(t, e) {
            return this._trigger("start", t, this._uiHash(e))
        },
        _slide: function(t, e, i) {
            var s, n = this.value(),
            o = this.values();
            this._hasMultipleValues() && (s = this.values(e ? 0 : 1), n = this.values(e), 2 === this.options.values.length && !0 === this.options.range && (i = 0 === e ? Math.min(s, i) : Math.max(s, i)), o[e] = i), i !== n && !1 !== this._trigger("slide", t, this._uiHash(e, i, o)) && (this._hasMultipleValues() ? this.values(e, i) : this.value(i))
        },
        _stop: function(t, e) {
            this._trigger("stop", t, this._uiHash(e))
        },
        _change: function(t, e) {
            this._keySliding || this._mouseSliding || (this._lastChangedValue = e, this._trigger("change", t, this._uiHash(e)))
        },
        value: function(t) {
            return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), void this._change(null, 0)) : this._value()
        },
        values: function(e, i) {
            var s, n, o;
            if (arguments.length > 1) return this.options.values[e] = this._trimAlignValue(i), this._refreshValue(), void this._change(null, e);
            if (!arguments.length) return this._values();
            if (!t.isArray(arguments[0])) return this._hasMultipleValues() ? this._values(e) : this.value();
            for (s = this.options.values, n = arguments[0], o = 0; o < s.length; o += 1) s[o] = this._trimAlignValue(n[o]), this._change(null, o);
                this._refreshValue()
        },
        _setOption: function(e, i) {
            var s, n = 0;
            switch ("range" === e && !0 === this.options.range && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), t.isArray(this.options.values) && (n = this.options.values.length), this._super(e, i), e) {
                case "orientation":
                this._detectOrientation(), this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation), this._refreshValue(), this.options.range && this._refreshRange(i), this.handles.css("horizontal" === i ? "bottom" : "left", "");
                break;
                case "value":
                this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                break;
                case "values":
                for (this._animateOff = !0, this._refreshValue(), s = n - 1; s >= 0; s--) this._change(null, s);
                    this._animateOff = !1;
                break;
                case "step":
                case "min":
                case "max":
                this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
                break;
                case "range":
                this._animateOff = !0, this._refresh(), this._animateOff = !1
            }
        },
        _setOptionDisabled: function(t) {
            this._super(t), this._toggleClass(null, "ui-state-disabled", !!t)
        },
        _value: function() {
            var t = this.options.value;
            return t = this._trimAlignValue(t)
        },
        _values: function(t) {
            var e, i, s;
            if (arguments.length) return e = this.options.values[t], e = this._trimAlignValue(e);
            if (this._hasMultipleValues()) {
                for (i = this.options.values.slice(), s = 0; s < i.length; s += 1) i[s] = this._trimAlignValue(i[s]);
                    return i
            }
            return []
        },
        _trimAlignValue: function(t) {
            if (t <= this._valueMin()) return this._valueMin();
            if (t >= this._valueMax()) return this._valueMax();
            var e = this.options.step > 0 ? this.options.step : 1,
            i = (t - this._valueMin()) % e,
            s = t - i;
            return 2 * Math.abs(i) >= e && (s += i > 0 ? e : -e), parseFloat(s.toFixed(5))
        },
        _calculateNewMax: function() {
            var t = this.options.max,
            e = this._valueMin(),
            i = this.options.step;
            t = Math.round((t - e) / i) * i + e, t > this.options.max && (t -= i), this.max = parseFloat(t.toFixed(this._precision()))
        },
        _precision: function() {
            var t = this._precisionOf(this.options.step);
            return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
        },
        _precisionOf: function(t) {
            var e = t.toString(),
            i = e.indexOf(".");
            return -1 === i ? 0 : e.length - i - 1
        },
        _valueMin: function() {
            return this.options.min
        },
        _valueMax: function() {
            return this.max
        },
        _refreshRange: function(t) {
            "vertical" === t && this.range.css({
                width: "",
                left: ""
            }), "horizontal" === t && this.range.css({
                height: "",
                bottom: ""
            })
        },
        _refreshValue: function() {
            var e, i, s, n, o, a = this.options.range,
            r = this.options,
            l = this,
            h = !this._animateOff && r.animate,
            c = {};
            this._hasMultipleValues() ? this.handles.each(function(s) {
                i = (l.values(s) - l._valueMin()) / (l._valueMax() - l._valueMin()) * 100, c["horizontal" === l.orientation ? "left" : "bottom"] = i + "%", t(this).stop(1, 1)[h ? "animate" : "css"](c, r.animate), !0 === l.options.range && ("horizontal" === l.orientation ? (0 === s && l.range.stop(1, 1)[h ? "animate" : "css"]({
                    left: i + "%"
                }, r.animate), 1 === s && l.range[h ? "animate" : "css"]({
                    width: i - e + "%"
                }, {
                    queue: !1,
                    duration: r.animate
                })) : (0 === s && l.range.stop(1, 1)[h ? "animate" : "css"]({
                    bottom: i + "%"
                }, r.animate), 1 === s && l.range[h ? "animate" : "css"]({
                    height: i - e + "%"
                }, {
                    queue: !1,
                    duration: r.animate
                }))), e = i
            }) : (s = this.value(), n = this._valueMin(), o = this._valueMax(), i = o !== n ? (s - n) / (o - n) * 100 : 0, c["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[h ? "animate" : "css"](c, r.animate), "min" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                width: i + "%"
            }, r.animate), "max" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                width: 100 - i + "%"
            }, r.animate), "min" === a && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                height: i + "%"
            }, r.animate), "max" === a && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                height: 100 - i + "%"
            }, r.animate))
        },
        _handleEvents: {
            keydown: function(e) {
                var i, s, n, o = t(e.target).data("ui-slider-handle-index");
                switch (e.keyCode) {
                    case t.ui.keyCode.HOME:
                    case t.ui.keyCode.END:
                    case t.ui.keyCode.PAGE_UP:
                    case t.ui.keyCode.PAGE_DOWN:
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.RIGHT:
                    case t.ui.keyCode.DOWN:
                    case t.ui.keyCode.LEFT:
                    if (e.preventDefault(), !this._keySliding && (this._keySliding = !0, this._addClass(t(e.target), null, "ui-state-active"), !1 === this._start(e, o))) return
                }
            switch (n = this.options.step, i = s = this._hasMultipleValues() ? this.values(o) : this.value(), e.keyCode) {
                case t.ui.keyCode.HOME:
                s = this._valueMin();
                break;
                case t.ui.keyCode.END:
                s = this._valueMax();
                break;
                case t.ui.keyCode.PAGE_UP:
                s = this._trimAlignValue(i + (this._valueMax() - this._valueMin()) / this.numPages);
                break;
                case t.ui.keyCode.PAGE_DOWN:
                s = this._trimAlignValue(i - (this._valueMax() - this._valueMin()) / this.numPages);
                break;
                case t.ui.keyCode.UP:
                case t.ui.keyCode.RIGHT:
                if (i === this._valueMax()) return;
                s = this._trimAlignValue(i + n);
                break;
                case t.ui.keyCode.DOWN:
                case t.ui.keyCode.LEFT:
                if (i === this._valueMin()) return;
                s = this._trimAlignValue(i - n)
            }
            this._slide(e, o, s)
        },
        keyup: function(e) {
            var i = t(e.target).data("ui-slider-handle-index");
            this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), this._removeClass(t(e.target), null, "ui-state-active"))
        }
    }
}), t.widget("ui.sortable", t.ui.mouse, {
    version: "1.12.1",
    widgetEventPrefix: "sort",
    ready: !1,
    options: {
        appendTo: "parent",
        axis: !1,
        connectWith: !1,
        containment: !1,
        cursor: "auto",
        cursorAt: !1,
        dropOnEmpty: !0,
        forcePlaceholderSize: !1,
        forceHelperSize: !1,
        grid: !1,
        handle: !1,
        helper: "original",
        items: "> *",
        opacity: !1,
        placeholder: !1,
        revert: !1,
        scroll: !0,
        scrollSensitivity: 20,
        scrollSpeed: 20,
        scope: "default",
        tolerance: "intersect",
        zIndex: 1e3,
        activate: null,
        beforeStop: null,
        change: null,
        deactivate: null,
        out: null,
        over: null,
        receive: null,
        remove: null,
        sort: null,
        start: null,
        stop: null,
        update: null
    },
    _isOverAxis: function(t, e, i) {
        return t >= e && t < e + i
    },
    _isFloating: function(t) {
        return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"))
    },
    _create: function() {
        this.containerCache = {}, this._addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0
    },
    _setOption: function(t, e) {
        this._super(t, e), "handle" === t && this._setHandleClassName()
    },
    _setHandleClassName: function() {
        var e = this;
        this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle"), t.each(this.items, function() {
            e._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle")
        })
    },
    _destroy: function() {
        this._mouseDestroy();
        for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item");
            return this
    },
    _mouseCapture: function(e, i) {
        var s = null,
        n = !1,
        o = this;
        return !this.reverting && (!this.options.disabled && "static" !== this.options.type && (this._refreshItems(e), t(e.target).parents().each(function() {
            if (t.data(this, o.widgetName + "-item") === o) return s = t(this), !1
        }), t.data(e.target, o.widgetName + "-item") === o && (s = t(e.target)), !!s && (!(this.options.handle && !i && (t(this.options.handle, s).find("*").addBack().each(function() {
            this === e.target && (n = !0)
        }), !n)) && (this.currentItem = s, this._removeCurrentsFromItems(), !0))))
    },
    _mouseStart: function(e, i, s) {
        var n, o, a = this.options;
        if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
            top: this.offset.top - this.margins.top,
            left: this.offset.left - this.margins.left
        }, t.extend(this.offset, {
            click: {
                left: e.pageX - this.offset.left,
                top: e.pageY - this.offset.top
            },
            parent: this._getParentOffset(),
            relative: this._getRelativeOffset()
        }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, a.cursorAt && this._adjustOffsetFromHelper(a.cursorAt), this.domPosition = {
            prev: this.currentItem.prev()[0],
            parent: this.currentItem.parent()[0]
        }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), a.containment && this._setContainment(), a.cursor && "auto" !== a.cursor && (o = this.document.find("body"), this.storedCursor = o.css("cursor"), o.css("cursor", a.cursor), this.storedStylesheet = t("<style>*{ cursor: " + a.cursor + " !important; }</style>").appendTo(o)), a.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", a.opacity)), a.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", a.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !s)
            for (n = this.containers.length - 1; n >= 0; n--) this.containers[n]._trigger("activate", e, this._uiHash(this));
                return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this._addClass(this.helper, "ui-sortable-helper"), this._mouseDrag(e), !0
        },
        _mouseDrag: function(e) {
            var i, s, n, o, a = this.options,
            r = !1;
            for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < a.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + a.scrollSpeed : e.pageY - this.overflowOffset.top < a.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - a.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < a.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + a.scrollSpeed : e.pageX - this.overflowOffset.left < a.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - a.scrollSpeed)) : (e.pageY - this.document.scrollTop() < a.scrollSensitivity ? r = this.document.scrollTop(this.document.scrollTop() - a.scrollSpeed) : this.window.height() - (e.pageY - this.document.scrollTop()) < a.scrollSensitivity && (r = this.document.scrollTop(this.document.scrollTop() + a.scrollSpeed)), e.pageX - this.document.scrollLeft() < a.scrollSensitivity ? r = this.document.scrollLeft(this.document.scrollLeft() - a.scrollSpeed) : this.window.width() - (e.pageX - this.document.scrollLeft()) < a.scrollSensitivity && (r = this.document.scrollLeft(this.document.scrollLeft() + a.scrollSpeed))), !1 !== r && t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--)
                if (s = this.items[i], n = s.item[0], (o = this._intersectsWithPointer(s)) && s.instance === this.currentContainer && !(n === this.currentItem[0] || this.placeholder[1 === o ? "next" : "prev"]()[0] === n || t.contains(this.placeholder[0], n) || "semi-dynamic" === this.options.type && t.contains(this.element[0], n))) {
                    if (this.direction = 1 === o ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(s)) break;
                    this._rearrange(e, s), this._trigger("change", e, this._uiHash());
                    break
                }
                return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
            },
            _mouseStop: function(e, i) {
                if (e) {
                    if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
                        var s = this,
                        n = this.placeholder.offset(),
                        o = this.options.axis,
                        a = {};
                        o && "x" !== o || (a.left = n.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), o && "y" !== o || (a.top = n.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, t(this.helper).animate(a, parseInt(this.options.revert, 10) || 500, function() {
                            s._clear(e)
                        })
                    } else this._clear(e, i);
                    return !1
                }
            },
            cancel: function() {
                if (this.dragging) {
                    this._mouseUp(new t.Event("mouseup", {
                        target: null
                    })), "original" === this.options.helper ? (this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")) : this.currentItem.show();
                    for (var e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0)
                }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), this
        },
        serialize: function(e) {
            var i = this._getItemsAsjQuery(e && e.connected),
            s = [];
            return e = e || {}, t(i).each(function() {
                var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
                i && s.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]))
            }), !s.length && e.key && s.push(e.key + "="), s.join("&")
        },
        toArray: function(e) {
            var i = this._getItemsAsjQuery(e && e.connected),
            s = [];
            return e = e || {}, i.each(function() {
                s.push(t(e.item || this).attr(e.attribute || "id") || "")
            }), s
        },
        _intersectsWith: function(t) {
            var e = this.positionAbs.left,
            i = e + this.helperProportions.width,
            s = this.positionAbs.top,
            n = s + this.helperProportions.height,
            o = t.left,
            a = o + t.width,
            r = t.top,
            l = r + t.height,
            h = this.offset.click.top,
            c = this.offset.click.left,
            u = "x" === this.options.axis || s + h > r && s + h < l,
            d = "y" === this.options.axis || e + c > o && e + c < a,
            p = u && d;
            return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? p : o < e + this.helperProportions.width / 2 && i - this.helperProportions.width / 2 < a && r < s + this.helperProportions.height / 2 && n - this.helperProportions.height / 2 < l
        },
        _intersectsWithPointer: function(t) {
            var e, i, s = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height),
            n = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width);
            return !(!s || !n) && (e = this._getDragVerticalDirection(), i = this._getDragHorizontalDirection(), this.floating ? "right" === i || "down" === e ? 2 : 1 : e && ("down" === e ? 2 : 1))
        },
        _intersectsWithSides: function(t) {
            var e = this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
            i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
            s = this._getDragVerticalDirection(),
            n = this._getDragHorizontalDirection();
            return this.floating && n ? "right" === n && i || "left" === n && !i : s && ("down" === s && e || "up" === s && !e)
        },
        _getDragVerticalDirection: function() {
            var t = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 !== t && (t > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function() {
            var t = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 !== t && (t > 0 ? "right" : "left")
        },
        refresh: function(t) {
            return this._refreshItems(t), this._setHandleClassName(), this.refreshPositions(), this
        },
        _connectWith: function() {
            var t = this.options;
            return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
        },
        _getItemsAsjQuery: function(e) {
            function i() {
                r.push(this)
            }
            var s, n, o, a, r = [],
            l = [],
            h = this._connectWith();
            if (h && e)
                for (s = h.length - 1; s >= 0; s--)
                    for (o = t(h[s], this.document[0]), n = o.length - 1; n >= 0; n--)(a = t.data(o[n], this.widgetFullName)) && a !== this && !a.options.disabled && l.push([t.isFunction(a.options.items) ? a.options.items.call(a.element) : t(a.options.items, a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), a]);
                        for (l.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                            options: this.options,
                            item: this.currentItem
                        }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), s = l.length - 1; s >= 0; s--) l[s][0].each(i);
                            return t(r)
                        },
                        _removeCurrentsFromItems: function() {
                            var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
                            this.items = t.grep(this.items, function(t) {
                                for (var i = 0; i < e.length; i++)
                                    if (e[i] === t.item[0]) return !1;
                                return !0
                            })
                        },
                        _refreshItems: function(e) {
                            this.items = [], this.containers = [this];
                            var i, s, n, o, a, r, l, h, c = this.items,
                            u = [
                            [t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
                                item: this.currentItem
                            }) : t(this.options.items, this.element), this]
                            ],
                            d = this._connectWith();
                            if (d && this.ready)
                                for (i = d.length - 1; i >= 0; i--)
                                    for (n = t(d[i], this.document[0]), s = n.length - 1; s >= 0; s--)(o = t.data(n[s], this.widgetFullName)) && o !== this && !o.options.disabled && (u.push([t.isFunction(o.options.items) ? o.options.items.call(o.element[0], e, {
                                        item: this.currentItem
                                    }) : t(o.options.items, o.element), o]), this.containers.push(o));
                                        for (i = u.length - 1; i >= 0; i--)
                                            for (a = u[i][1], r = u[i][0], s = 0, h = r.length; s < h; s++) l = t(r[s]), l.data(this.widgetName + "-item", a), c.push({
                                                item: l,
                                                instance: a,
                                                width: 0,
                                                height: 0,
                                                left: 0,
                                                top: 0
                                            })
                                        },
                                        refreshPositions: function(e) {
                                            this.floating = !!this.items.length && ("x" === this.options.axis || this._isFloating(this.items[0].item)), this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
                                            var i, s, n, o;
                                            for (i = this.items.length - 1; i >= 0; i--) s = this.items[i], s.instance !== this.currentContainer && this.currentContainer && s.item[0] !== this.currentItem[0] || (n = this.options.toleranceElement ? t(this.options.toleranceElement, s.item) : s.item, e || (s.width = n.outerWidth(), s.height = n.outerHeight()), o = n.offset(), s.left = o.left, s.top = o.top);
                                                if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
                                            else
                                                for (i = this.containers.length - 1; i >= 0; i--) o = this.containers[i].element.offset(), this.containers[i].containerCache.left = o.left, this.containers[i].containerCache.top = o.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
                                                    return this
                                            },
                                            _createPlaceholder: function(e) {
                                                e = e || this;
                                                var i, s = e.options;
                                                s.placeholder && s.placeholder.constructor !== String || (i = s.placeholder, s.placeholder = {
                                                    element: function() {
                                                        var s = e.currentItem[0].nodeName.toLowerCase(),
                                                        n = t("<" + s + ">", e.document[0]);
                                                        return e._addClass(n, "ui-sortable-placeholder", i || e.currentItem[0].className)._removeClass(n, "ui-sortable-helper"), "tbody" === s ? e._createTrPlaceholder(e.currentItem.find("tr").eq(0), t("<tr>", e.document[0]).appendTo(n)) : "tr" === s ? e._createTrPlaceholder(e.currentItem, n) : "img" === s && n.attr("src", e.currentItem.attr("src")), i || n.css("visibility", "hidden"), n
                                                    },
                                                    update: function(t, n) {
                                                        i && !s.forcePlaceholderSize || (n.height() || n.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), n.width() || n.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)))
                                                    }
                                                }), e.placeholder = t(s.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), s.placeholder.update(e, e.placeholder)
                                            },
                                            _createTrPlaceholder: function(e, i) {
                                                var s = this;
                                                e.children().each(function() {
                                                    t("<td>&#160;</td>", s.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(i)
                                                })
                                            },
                                            _contactContainers: function(e) {
                                                var i, s, n, o, a, r, l, h, c, u, d = null,
                                                p = null;
                                                for (i = this.containers.length - 1; i >= 0; i--)
                                                    if (!t.contains(this.currentItem[0], this.containers[i].element[0]))
                                                        if (this._intersectsWith(this.containers[i].containerCache)) {
                                                            if (d && t.contains(this.containers[i].element[0], d.element[0])) continue;
                                                            d = this.containers[i], p = i
                                                        } else this.containers[i].containerCache.over && (this.containers[i]._trigger("out", e, this._uiHash(this)), this.containers[i].containerCache.over = 0);
                                                        if (d)
                                                            if (1 === this.containers.length) this.containers[p].containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1);
                                                        else {
                                                            for (n = 1e4, o = null, c = d.floating || this._isFloating(this.currentItem), a = c ? "left" : "top", r = c ? "width" : "height", u = c ? "pageX" : "pageY", s = this.items.length - 1; s >= 0; s--) t.contains(this.containers[p].element[0], this.items[s].item[0]) && this.items[s].item[0] !== this.currentItem[0] && (l = this.items[s].item.offset()[a], h = !1, e[u] - l > this.items[s][r] / 2 && (h = !0), Math.abs(e[u] - l) < n && (n = Math.abs(e[u] - l), o = this.items[s], this.direction = h ? "up" : "down"));
                                                                if (!o && !this.options.dropOnEmpty) return;
                                                            if (this.currentContainer === this.containers[p]) return void(this.currentContainer.containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash()), this.currentContainer.containerCache.over = 1));
                                                            o ? this._rearrange(e, o, null, !0) : this._rearrange(e, null, this.containers[p].element, !0), this._trigger("change", e, this._uiHash()), this.containers[p]._trigger("change", e, this._uiHash(this)), this.currentContainer = this.containers[p], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1
                                                        }
                                                    },
                                                    _createHelper: function(e) {
                                                        var i = this.options,
                                                        s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
                                                        return s.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(s[0]), s[0] === this.currentItem[0] && (this._storedCSS = {
                                                            width: this.currentItem[0].style.width,
                                                            height: this.currentItem[0].style.height,
                                                            position: this.currentItem.css("position"),
                                                            top: this.currentItem.css("top"),
                                                            left: this.currentItem.css("left")
                                                        }), s[0].style.width && !i.forceHelperSize || s.width(this.currentItem.width()), s[0].style.height && !i.forceHelperSize || s.height(this.currentItem.height()), s
                                                    },
                                                    _adjustOffsetFromHelper: function(e) {
                                                        "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                                                            left: +e[0],
                                                            top: +e[1] || 0
                                                        }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
                                                    },
                                                    _getParentOffset: function() {
                                                        this.offsetParent = this.helper.offsetParent();
                                                        var e = this.offsetParent.offset();
                                                        return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
                                                            top: 0,
                                                            left: 0
                                                        }), {
                                                            top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                                                            left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                                                        }
                                                    },
                                                    _getRelativeOffset: function() {
                                                        if ("relative" === this.cssPosition) {
                                                            var t = this.currentItem.position();
                                                            return {
                                                                top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                                                                left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                                                            }
                                                        }
                                                        return {
                                                            top: 0,
                                                            left: 0
                                                        }
                                                    },
                                                    _cacheMargins: function() {
                                                        this.margins = {
                                                            left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                                                            top: parseInt(this.currentItem.css("marginTop"), 10) || 0
                                                        }
                                                    },
                                                    _cacheHelperProportions: function() {
                                                        this.helperProportions = {
                                                            width: this.helper.outerWidth(),
                                                            height: this.helper.outerHeight()
                                                        }
                                                    },
                                                    _setContainment: function() {
                                                        var e, i, s, n = this.options;
                                                        "parent" === n.containment && (n.containment = this.helper[0].parentNode), "document" !== n.containment && "window" !== n.containment || (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === n.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === n.containment ? this.document.height() || document.body.parentNode.scrollHeight : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(n.containment) || (e = t(n.containment)[0], i = t(n.containment).offset(), s = "hidden" !== t(e).css("overflow"), this.containment = [i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (s ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (s ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
                                                    },
                                                    _convertPositionTo: function(e, i) {
                                                        i || (i = this.position);
                                                        var s = "absolute" === e ? 1 : -1,
                                                        n = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                                                        o = /(html|body)/i.test(n[0].tagName);
                                                        return {
                                                            top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : n.scrollTop()) * s,
                                                            left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : n.scrollLeft()) * s
                                                        }
                                                    },
                                                    _generatePosition: function(e) {
                                                        var i, s, n = this.options,
                                                        o = e.pageX,
                                                        a = e.pageY,
                                                        r = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                                                        l = /(html|body)/i.test(r[0].tagName);
                                                        return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (a = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (a = this.containment[3] + this.offset.click.top)), n.grid && (i = this.originalPageY + Math.round((a - this.originalPageY) / n.grid[1]) * n.grid[1], a = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - n.grid[1] : i + n.grid[1] : i, s = this.originalPageX + Math.round((o - this.originalPageX) / n.grid[0]) * n.grid[0], o = this.containment ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2] ? s : s - this.offset.click.left >= this.containment[0] ? s - n.grid[0] : s + n.grid[0] : s)), {
                                                            top: a - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : l ? 0 : r.scrollTop()),
                                                            left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : l ? 0 : r.scrollLeft())
                                                        }
                                                    },
                                                    _rearrange: function(t, e, i, s) {
                                                        i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
                                                        var n = this.counter;
                                                        this._delay(function() {
                                                            n === this.counter && this.refreshPositions(!s)
                                                        })
                                                    },
                                                    _clear: function(t, e) {
                                                        function i(t, e, i) {
                                                            return function(s) {
                                                                i._trigger(t, s, e._uiHash(e))
                                                            }
                                                        }
                                                        this.reverting = !1;
                                                        var s, n = [];
                                                        if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                                                            for (s in this._storedCSS) "auto" !== this._storedCSS[s] && "static" !== this._storedCSS[s] || (this._storedCSS[s] = "");
                                                                this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")
                                                        } else this.currentItem.show();
                                                        for (this.fromOutside && !e && n.push(function(t) {
                                                            this._trigger("receive", t, this._uiHash(this.fromOutside))
                                                        }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || n.push(function(t) {
                                                            this._trigger("update", t, this._uiHash())
                                                        }), this !== this.currentContainer && (e || (n.push(function(t) {
                                                            this._trigger("remove", t, this._uiHash())
                                                        }), n.push(function(t) {
                                                            return function(e) {
                                                                t._trigger("receive", e, this._uiHash(this))
                                                            }
                                                        }.call(this, this.currentContainer)), n.push(function(t) {
                                                            return function(e) {
                                                                t._trigger("update", e, this._uiHash(this))
                                                            }
                                                        }.call(this, this.currentContainer)))), s = this.containers.length - 1; s >= 0; s--) e || n.push(i("deactivate", this, this.containers[s])), this.containers[s].containerCache.over && (n.push(i("out", this, this.containers[s])), this.containers[s].containerCache.over = 0);
                                                            if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !e) {
                                                                for (s = 0; s < n.length; s++) n[s].call(this, t);
                                                                    this._trigger("stop", t, this._uiHash())
                                                            }
                                                            return this.fromOutside = !1, !this.cancelHelperRemoval
                                                        },
                                                        _trigger: function() {
                                                            !1 === t.Widget.prototype._trigger.apply(this, arguments) && this.cancel()
                                                        },
                                                        _uiHash: function(e) {
                                                            var i = e || this;
                                                            return {
                                                                helper: i.helper,
                                                                placeholder: i.placeholder || t([]),
                                                                position: i.position,
                                                                originalPosition: i.originalPosition,
                                                                offset: i.positionAbs,
                                                                item: i.currentItem,
                                                                sender: e ? e.element : null
                                                            }
                                                        }
                                                    });
t.widget("ui.spinner", {
    version: "1.12.1",
    defaultElement: "<input>",
    widgetEventPrefix: "spin",
    options: {
        classes: {
            "ui-spinner": "ui-corner-all",
            "ui-spinner-down": "ui-corner-br",
            "ui-spinner-up": "ui-corner-tr"
        },
        culture: null,
        icons: {
            down: "ui-icon-triangle-1-s",
            up: "ui-icon-triangle-1-n"
        },
        incremental: !0,
        max: null,
        min: null,
        numberFormat: null,
        page: 10,
        step: 1,
        change: null,
        spin: null,
        start: null,
        stop: null
    },
    _create: function() {
        this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
            beforeunload: function() {
                this.element.removeAttr("autocomplete")
            }
        })
    },
    _getCreateOptions: function() {
        var e = this._super(),
        i = this.element;
        return t.each(["min", "max", "step"], function(t, s) {
            var n = i.attr(s);
            null != n && n.length && (e[s] = n)
        }), e
    },
    _events: {
        keydown: function(t) {
            this._start(t) && this._keydown(t) && t.preventDefault()
        },
        keyup: "_stop",
        focus: function() {
            this.previous = this.element.val()
        },
        blur: function(t) {
            if (this.cancelBlur) return void delete this.cancelBlur;
            this._stop(), this._refresh(), this.previous !== this.element.val() && this._trigger("change", t)
        },
        mousewheel: function(t, e) {
            if (e) {
                if (!this.spinning && !this._start(t)) return !1;
                this._spin((e > 0 ? 1 : -1) * this.options.step, t), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function() {
                    this.spinning && this._stop(t)
                }, 100), t.preventDefault()
            }
        },
        "mousedown .ui-spinner-button": function(e) {
            function i() {
                this.element[0] === t.ui.safeActiveElement(this.document[0]) || (this.element.trigger("focus"), this.previous = s, this._delay(function() {
                    this.previous = s
                }))
            }
            var s;
            s = this.element[0] === t.ui.safeActiveElement(this.document[0]) ? this.previous : this.element.val(), e.preventDefault(), i.call(this), this.cancelBlur = !0, this._delay(function() {
                delete this.cancelBlur, i.call(this)
            }), !1 !== this._start(e) && this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e)
        },
        "mouseup .ui-spinner-button": "_stop",
        "mouseenter .ui-spinner-button": function(e) {
            if (t(e.currentTarget).hasClass("ui-state-active")) return !1 !== this._start(e) && void this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e)
        },
    "mouseleave .ui-spinner-button": "_stop"
},
_enhance: function() {
    this.uiSpinner = this.element.attr("autocomplete", "off").wrap("<span>").parent().append("<a></a><a></a>")
},
_draw: function() {
    this._enhance(), this._addClass(this.uiSpinner, "ui-spinner", "ui-widget ui-widget-content"), this._addClass("ui-spinner-input"), this.element.attr("role", "spinbutton"), this.buttons = this.uiSpinner.children("a").attr("tabIndex", -1).attr("aria-hidden", !0).button({
        classes: {
            "ui-button": ""
        }
    }), this._removeClass(this.buttons, "ui-corner-all"), this._addClass(this.buttons.first(), "ui-spinner-button ui-spinner-up"), this._addClass(this.buttons.last(), "ui-spinner-button ui-spinner-down"), this.buttons.first().button({
        icon: this.options.icons.up,
        showLabel: !1
    }), this.buttons.last().button({
        icon: this.options.icons.down,
        showLabel: !1
    }), this.buttons.height() > Math.ceil(.5 * this.uiSpinner.height()) && this.uiSpinner.height() > 0 && this.uiSpinner.height(this.uiSpinner.height())
},
_keydown: function(e) {
    var i = this.options,
    s = t.ui.keyCode;
    switch (e.keyCode) {
        case s.UP:
        return this._repeat(null, 1, e), !0;
        case s.DOWN:
        return this._repeat(null, -1, e), !0;
        case s.PAGE_UP:
        return this._repeat(null, i.page, e), !0;
        case s.PAGE_DOWN:
        return this._repeat(null, -i.page, e), !0
    }
    return !1
},
_start: function(t) {
    return !(!this.spinning && !1 === this._trigger("start", t)) && (this.counter || (this.counter = 1), this.spinning = !0, !0)
},
_repeat: function(t, e, i) {
    t = t || 500, clearTimeout(this.timer), this.timer = this._delay(function() {
        this._repeat(40, e, i)
    }, t), this._spin(e * this.options.step, i)
},
_spin: function(t, e) {
    var i = this.value() || 0;
    this.counter || (this.counter = 1), i = this._adjustValue(i + t * this._increment(this.counter)), this.spinning && !1 === this._trigger("spin", e, {
        value: i
    }) || (this._value(i), this.counter++)
},
_increment: function(e) {
    var i = this.options.incremental;
    return i ? t.isFunction(i) ? i(e) : Math.floor(e * e * e / 5e4 - e * e / 500 + 17 * e / 200 + 1) : 1
},
_precision: function() {
    var t = this._precisionOf(this.options.step);
    return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
},
_precisionOf: function(t) {
    var e = t.toString(),
    i = e.indexOf(".");
    return -1 === i ? 0 : e.length - i - 1
},
_adjustValue: function(t) {
    var e, i, s = this.options;
    return e = null !== s.min ? s.min : 0, i = t - e, i = Math.round(i / s.step) * s.step, t = e + i, t = parseFloat(t.toFixed(this._precision())), null !== s.max && t > s.max ? s.max : null !== s.min && t < s.min ? s.min : t
},
_stop: function(t) {
    this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", t))
},
_setOption: function(t, e) {
    var i, s, n;
    if ("culture" === t || "numberFormat" === t) return i = this._parse(this.element.val()), this.options[t] = e, void this.element.val(this._format(i));
    "max" !== t && "min" !== t && "step" !== t || "string" == typeof e && (e = this._parse(e)), "icons" === t && (s = this.buttons.first().find(".ui-icon"), this._removeClass(s, null, this.options.icons.up), this._addClass(s, null, e.up), n = this.buttons.last().find(".ui-icon"), this._removeClass(n, null, this.options.icons.down), this._addClass(n, null, e.down)), this._super(t, e)
},
_setOptionDisabled: function(t) {
    this._super(t), this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!t), this.element.prop("disabled", !!t), this.buttons.button(t ? "disable" : "enable")
},
_setOptions: r(function(t) {
    this._super(t)
}),
_parse: function(t) {
    return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t), "" === t || isNaN(t) ? null : t
},
_format: function(t) {
    return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t
},
_refresh: function() {
    this.element.attr({
        "aria-valuemin": this.options.min,
        "aria-valuemax": this.options.max,
        "aria-valuenow": this._parse(this.element.val())
    })
},
isValid: function() {
    var t = this.value();
    return null !== t && t === this._adjustValue(t)
},
_value: function(t, e) {
    var i;
    "" !== t && null !== (i = this._parse(t)) && (e || (i = this._adjustValue(i)), t = this._format(i)), this.element.val(t), this._refresh()
},
_destroy: function() {
    this.element.prop("disabled", !1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"), this.uiSpinner.replaceWith(this.element)
},
stepUp: r(function(t) {
    this._stepUp(t)
}),
_stepUp: function(t) {
    this._start() && (this._spin((t || 1) * this.options.step), this._stop())
},
stepDown: r(function(t) {
    this._stepDown(t)
}),
_stepDown: function(t) {
    this._start() && (this._spin((t || 1) * -this.options.step), this._stop())
},
pageUp: r(function(t) {
    this._stepUp((t || 1) * this.options.page)
}),
pageDown: r(function(t) {
    this._stepDown((t || 1) * this.options.page)
}),
value: function(t) {
    if (!arguments.length) return this._parse(this.element.val());
    r(this._value).call(this, t)
},
widget: function() {
    return this.uiSpinner
}
}), !1 !== t.uiBackCompat && t.widget("ui.spinner", t.ui.spinner, {
    _enhance: function() {
        this.uiSpinner = this.element.attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml())
    },
    _uiSpinnerHtml: function() {
        return "<span>"
    },
    _buttonHtml: function() {
        return "<a></a><a></a>"
    }
});
t.ui.spinner;
t.widget("ui.tabs", {
    version: "1.12.1",
    delay: 300,
    options: {
        active: null,
        classes: {
            "ui-tabs": "ui-corner-all",
            "ui-tabs-nav": "ui-corner-all",
            "ui-tabs-panel": "ui-corner-bottom",
            "ui-tabs-tab": "ui-corner-top"
        },
        collapsible: !1,
        event: "click",
        heightStyle: "content",
        hide: null,
        show: null,
        activate: null,
        beforeActivate: null,
        beforeLoad: null,
        load: null
    },
    _isLocal: function() {
        return function(t) {
            var e, i;
            e = t.href.replace(/#.*$/, ""), i = location.href.replace(/#.*$/, "");
            try {
                e = decodeURIComponent(e)
            } catch (t) {}
            try {
                i = decodeURIComponent(i)
            } catch (t) {}
            return t.hash.length > 1 && e === i
        }
    }(),
    _create: function() {
        var e = this,
        i = this.options;
        this.running = !1, this._addClass("ui-tabs", "ui-widget ui-widget-content"), this._toggleClass("ui-tabs-collapsible", null, i.collapsible), this._processTabs(), i.active = this._initialActive(), t.isArray(i.disabled) && (i.disabled = t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), function(t) {
            return e.tabs.index(t)
        }))).sort()), !1 !== this.options.active && this.anchors.length ? this.active = this._findActive(i.active) : this.active = t(), this._refresh(), this.active.length && this.load(i.active)
    },
    _initialActive: function() {
        var e = this.options.active,
        i = this.options.collapsible,
        s = location.hash.substring(1);
        return null === e && (s && this.tabs.each(function(i, n) {
            if (t(n).attr("aria-controls") === s) return e = i, !1
        }), null === e && (e = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), null !== e && -1 !== e || (e = !!this.tabs.length && 0)), !1 !== e && -1 === (e = this.tabs.index(this.tabs.eq(e))) && (e = !i && 0), !i && !1 === e && this.anchors.length && (e = 0), e
    },
    _getCreateEventData: function() {
        return {
            tab: this.active,
            panel: this.active.length ? this._getPanelForTab(this.active) : t()
        }
    },
    _tabKeydown: function(e) {
        var i = t(t.ui.safeActiveElement(this.document[0])).closest("li"),
        s = this.tabs.index(i),
        n = !0;
        if (!this._handlePageNav(e)) {
            switch (e.keyCode) {
                case t.ui.keyCode.RIGHT:
                case t.ui.keyCode.DOWN:
                s++;
                break;
                case t.ui.keyCode.UP:
                case t.ui.keyCode.LEFT:
                n = !1, s--;
                break;
                case t.ui.keyCode.END:
                s = this.anchors.length - 1;
                break;
                case t.ui.keyCode.HOME:
                s = 0;
                break;
                case t.ui.keyCode.SPACE:
                return e.preventDefault(), clearTimeout(this.activating), void this._activate(s);
                case t.ui.keyCode.ENTER:
                return e.preventDefault(), clearTimeout(this.activating), void this._activate(s !== this.options.active && s);
                default:
                return
            }
            e.preventDefault(), clearTimeout(this.activating), s = this._focusNextTab(s, n), e.ctrlKey || e.metaKey || (i.attr("aria-selected", "false"), this.tabs.eq(s).attr("aria-selected", "true"), this.activating = this._delay(function() {
                this.option("active", s)
            }, this.delay))
        }
    },
    _panelKeydown: function(e) {
        this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), this.active.trigger("focus"))
    },
    _handlePageNav: function(e) {
        return e.altKey && e.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : e.altKey && e.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
    },
    _findNextTab: function(e, i) {
        for (var s = this.tabs.length - 1; - 1 !== t.inArray(function() {
            return e > s && (e = 0), e < 0 && (e = s), e
        }(), this.options.disabled);) e = i ? e + 1 : e - 1;
            return e
        },
        _focusNextTab: function(t, e) {
            return t = this._findNextTab(t, e), this.tabs.eq(t).trigger("focus"), t
        },
        _setOption: function(t, e) {
            if ("active" === t) return void this._activate(e);
            this._super(t, e), "collapsible" === t && (this._toggleClass("ui-tabs-collapsible", null, e), e || !1 !== this.options.active || this._activate(0)), "event" === t && this._setupEvents(e), "heightStyle" === t && this._setupHeightStyle(e)
        },
        _sanitizeSelector: function(t) {
            return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
        },
        refresh: function() {
            var e = this.options,
            i = this.tablist.children(":has(a[href])");
            e.disabled = t.map(i.filter(".ui-state-disabled"), function(t) {
                return i.index(t)
            }), this._processTabs(), !1 !== e.active && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1, this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1, this.active = t()), this._refresh()
        },
        _refresh: function() {
            this._setOptionDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                "aria-hidden": "true"
            }), this.active.length ? (this.active.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }), this._addClass(this.active, "ui-tabs-active", "ui-state-active"), this._getPanelForTab(this.active).show().attr({
                "aria-hidden": "false"
            })) : this.tabs.eq(0).attr("tabIndex", 0)
        },
        _processTabs: function() {
            var e = this,
            i = this.tabs,
            s = this.anchors,
            n = this.panels;
            this.tablist = this._getList().attr("role", "tablist"), this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header"), this.tablist.on("mousedown" + this.eventNamespace, "> li", function(e) {
                t(this).is(".ui-state-disabled") && e.preventDefault()
            }).on("focus" + this.eventNamespace, ".ui-tabs-anchor", function() {
                t(this).closest("li").is(".ui-state-disabled") && this.blur()
            }), this.tabs = this.tablist.find("> li:has(a[href])").attr({
                role: "tab",
                tabIndex: -1
            }), this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default"), this.anchors = this.tabs.map(function() {
                return t("a", this)[0]
            }).attr({
                role: "presentation",
                tabIndex: -1
            }), this._addClass(this.anchors, "ui-tabs-anchor"), this.panels = t(), this.anchors.each(function(i, s) {
                var n, o, a, r = t(s).uniqueId().attr("id"),
                l = t(s).closest("li"),
                h = l.attr("aria-controls");
                e._isLocal(s) ? (n = s.hash, a = n.substring(1), o = e.element.find(e._sanitizeSelector(n))) : (a = l.attr("aria-controls") || t({}).uniqueId()[0].id, n = "#" + a, o = e.element.find(n), o.length || (o = e._createPanel(a), o.insertAfter(e.panels[i - 1] || e.tablist)), o.attr("aria-live", "polite")), o.length && (e.panels = e.panels.add(o)), h && l.data("ui-tabs-aria-controls", h), l.attr({
                    "aria-controls": a,
                    "aria-labelledby": r
                }), o.attr("aria-labelledby", r)
            }), this.panels.attr("role", "tabpanel"), this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content"), i && (this._off(i.not(this.tabs)), this._off(s.not(this.anchors)), this._off(n.not(this.panels)))
        },
        _getList: function() {
            return this.tablist || this.element.find("ol, ul").eq(0)
        },
        _createPanel: function(e) {
            return t("<div>").attr("id", e).data("ui-tabs-destroy", !0)
        },
        _setOptionDisabled: function(e) {
            var i, s, n;
            for (t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1), n = 0; s = this.tabs[n]; n++) i = t(s), !0 === e || -1 !== t.inArray(n, e) ? (i.attr("aria-disabled", "true"), this._addClass(i, null, "ui-state-disabled")) : (i.removeAttr("aria-disabled"), this._removeClass(i, null, "ui-state-disabled"));
                this.options.disabled = e, this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !0 === e)
        },
        _setupEvents: function(e) {
            var i = {};
            e && t.each(e.split(" "), function(t, e) {
                i[e] = "_eventHandler"
            }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, {
                click: function(t) {
                    t.preventDefault()
                }
            }), this._on(this.anchors, i), this._on(this.tabs, {
                keydown: "_tabKeydown"
            }), this._on(this.panels, {
                keydown: "_panelKeydown"
            }), this._focusable(this.tabs), this._hoverable(this.tabs)
        },
        _setupHeightStyle: function(e) {
            var i, s = this.element.parent();
            "fill" === e ? (i = s.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function() {
                var e = t(this),
                s = e.css("position");
                "absolute" !== s && "fixed" !== s && (i -= e.outerHeight(!0))
            }), this.element.children().not(this.panels).each(function() {
                i -= t(this).outerHeight(!0)
            }), this.panels.each(function() {
                t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()))
            }).css("overflow", "auto")) : "auto" === e && (i = 0, this.panels.each(function() {
                i = Math.max(i, t(this).height("").height())
            }).height(i))
        },
        _eventHandler: function(e) {
            var i = this.options,
            s = this.active,
            n = t(e.currentTarget),
            o = n.closest("li"),
            a = o[0] === s[0],
            r = a && i.collapsible,
            l = r ? t() : this._getPanelForTab(o),
            h = s.length ? this._getPanelForTab(s) : t(),
            c = {
                oldTab: s,
                oldPanel: h,
                newTab: r ? t() : o,
                newPanel: l
            };
            e.preventDefault(), o.hasClass("ui-state-disabled") || o.hasClass("ui-tabs-loading") || this.running || a && !i.collapsible || !1 === this._trigger("beforeActivate", e, c) || (i.active = !r && this.tabs.index(o), this.active = a ? t() : o, this.xhr && this.xhr.abort(), h.length || l.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."), l.length && this.load(this.tabs.index(o), e), this._toggle(e, c))
        },
        _toggle: function(e, i) {
            function s() {
                o.running = !1, o._trigger("activate", e, i)
            }

            function n() {
                o._addClass(i.newTab.closest("li"), "ui-tabs-active", "ui-state-active"), a.length && o.options.show ? o._show(a, o.options.show, s) : (a.show(), s())
            }
            var o = this,
            a = i.newPanel,
            r = i.oldPanel;
            this.running = !0, r.length && this.options.hide ? this._hide(r, this.options.hide, function() {
                o._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), n()
            }) : (this._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), r.hide(), n()), r.attr("aria-hidden", "true"), i.oldTab.attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            }), a.length && r.length ? i.oldTab.attr("tabIndex", -1) : a.length && this.tabs.filter(function() {
                return 0 === t(this).attr("tabIndex")
            }).attr("tabIndex", -1), a.attr("aria-hidden", "false"), i.newTab.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            })
        },
        _activate: function(e) {
            var i, s = this._findActive(e);
            s[0] !== this.active[0] && (s.length || (s = this.active), i = s.find(".ui-tabs-anchor")[0], this._eventHandler({
                target: i,
                currentTarget: i,
                preventDefault: t.noop
            }))
        },
        _findActive: function(e) {
            return !1 === e ? t() : this.tabs.eq(e)
        },
        _getIndex: function(e) {
            return "string" == typeof e && (e = this.anchors.index(this.anchors.filter("[href$='" + t.ui.escapeSelector(e) + "']"))), e
        },
        _destroy: function() {
            this.xhr && this.xhr.abort(), this.tablist.removeAttr("role").off(this.eventNamespace), this.anchors.removeAttr("role tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function() {
                t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded")
            }), this.tabs.each(function() {
                var e = t(this),
                i = e.data("ui-tabs-aria-controls");
                i ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls")
            }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
        },
        enable: function(e) {
            var i = this.options.disabled;
            !1 !== i && (void 0 === e ? i = !1 : (e = this._getIndex(e), i = t.isArray(i) ? t.map(i, function(t) {
                return t !== e ? t : null
            }) : t.map(this.tabs, function(t, i) {
                return i !== e ? i : null
            })), this._setOptionDisabled(i))
        },
        disable: function(e) {
            var i = this.options.disabled;
            if (!0 !== i) {
                if (void 0 === e) i = !0;
                else {
                    if (e = this._getIndex(e), -1 !== t.inArray(e, i)) return;
                    i = t.isArray(i) ? t.merge([e], i).sort() : [e]
                }
                this._setOptionDisabled(i)
            }
        },
        load: function(e, i) {
            e = this._getIndex(e);
            var s = this,
            n = this.tabs.eq(e),
            o = n.find(".ui-tabs-anchor"),
            a = this._getPanelForTab(n),
            r = {
                tab: n,
                panel: a
            },
            l = function(t, e) {
                "abort" === e && s.panels.stop(!1, !0), s._removeClass(n, "ui-tabs-loading"), a.removeAttr("aria-busy"), t === s.xhr && delete s.xhr
            };
            this._isLocal(o[0]) || (this.xhr = t.ajax(this._ajaxSettings(o, i, r)), this.xhr && "canceled" !== this.xhr.statusText && (this._addClass(n, "ui-tabs-loading"), a.attr("aria-busy", "true"), this.xhr.done(function(t, e, n) {
                setTimeout(function() {
                    a.html(t), s._trigger("load", i, r), l(n, e)
                }, 1)
            }).fail(function(t, e) {
                setTimeout(function() {
                    l(t, e)
                }, 1)
            })))
        },
        _ajaxSettings: function(e, i, s) {
            var n = this;
            return {
                url: e.attr("href").replace(/#.*$/, ""),
                beforeSend: function(e, o) {
                    return n._trigger("beforeLoad", i, t.extend({
                        jqXHR: e,
                        ajaxSettings: o
                    }, s))
                }
            }
        },
        _getPanelForTab: function(e) {
            var i = t(e).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + i))
        }
    }), !1 !== t.uiBackCompat && t.widget("ui.tabs", t.ui.tabs, {
        _processTabs: function() {
            this._superApply(arguments), this._addClass(this.tabs, "ui-tab")
        }
    });
    t.ui.tabs;
    t.widget("ui.tooltip", {
        version: "1.12.1",
        options: {
            classes: {
                "ui-tooltip": "ui-corner-all ui-widget-shadow"
            },
            content: function() {
                var e = t(this).attr("title") || "";
                return t("<a>").text(e).html()
            },
            hide: !0,
            items: "[title]:not([disabled])",
            position: {
                my: "left top+15",
                at: "left bottom",
                collision: "flipfit flip"
            },
            show: !0,
            track: !1,
            close: null,
            open: null
        },
        _addDescribedBy: function(e, i) {
            var s = (e.attr("aria-describedby") || "").split(/\s+/);
            s.push(i), e.data("ui-tooltip-id", i).attr("aria-describedby", t.trim(s.join(" ")))
        },
        _removeDescribedBy: function(e) {
            var i = e.data("ui-tooltip-id"),
            s = (e.attr("aria-describedby") || "").split(/\s+/),
            n = t.inArray(i, s); - 1 !== n && s.splice(n, 1), e.removeData("ui-tooltip-id"), s = t.trim(s.join(" ")), s ? e.attr("aria-describedby", s) : e.removeAttr("aria-describedby")
        },
        _create: function() {
            this._on({
                mouseover: "open",
                focusin: "open"
            }), this.tooltips = {}, this.parents = {}, this.liveRegion = t("<div>").attr({
                role: "log",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this.disabledTitles = t([])
        },
        _setOption: function(e, i) {
            var s = this;
            this._super(e, i), "content" === e && t.each(this.tooltips, function(t, e) {
                s._updateContent(e.element)
            })
        },
        _setOptionDisabled: function(t) {
            this[t ? "_disable" : "_enable"]()
        },
        _disable: function() {
            var e = this;
            t.each(this.tooltips, function(i, s) {
                var n = t.Event("blur");
                n.target = n.currentTarget = s.element[0], e.close(n, !0)
            }), this.disabledTitles = this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function() {
                var e = t(this);
                if (e.is("[title]")) return e.data("ui-tooltip-title", e.attr("title")).removeAttr("title")
            }))
        },
        _enable: function() {
            this.disabledTitles.each(function() {
                var e = t(this);
                e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title"))
            }), this.disabledTitles = t([])
        },
        open: function(e) {
            var i = this,
            s = t(e ? e.target : this.element).closest(this.options.items);
            s.length && !s.data("ui-tooltip-id") && (s.attr("title") && s.data("ui-tooltip-title", s.attr("title")), s.data("ui-tooltip-open", !0), e && "mouseover" === e.type && s.parents().each(function() {
                var e, s = t(this);
                s.data("ui-tooltip-open") && (e = t.Event("blur"), e.target = e.currentTarget = this, i.close(e, !0)), s.attr("title") && (s.uniqueId(), i.parents[this.id] = {
                    element: this,
                    title: s.attr("title")
                }, s.attr("title", ""))
            }), this._registerCloseHandlers(e, s), this._updateContent(s, e))
        },
        _updateContent: function(t, e) {
            var i, s = this.options.content,
            n = this,
            o = e ? e.type : null;
            if ("string" == typeof s || s.nodeType || s.jquery) return this._open(e, t, s);
            (i = s.call(t[0], function(i) {
                n._delay(function() {
                    t.data("ui-tooltip-open") && (e && (e.type = o), this._open(e, t, i))
                })
            })) && this._open(e, t, i)
        },
        _open: function(e, i, s) {
            function n(t) {
                h.of = t, a.is(":hidden") || a.position(h)
            }
            var o, a, r, l, h = t.extend({}, this.options.position);
            if (s) {
                if (o = this._find(i)) return void o.tooltip.find(".ui-tooltip-content").html(s);
                i.is("[title]") && (e && "mouseover" === e.type ? i.attr("title", "") : i.removeAttr("title")), o = this._tooltip(i), a = o.tooltip, this._addDescribedBy(i, a.attr("id")), a.find(".ui-tooltip-content").html(s), this.liveRegion.children().hide(), l = t("<div>").html(a.find(".ui-tooltip-content").html()), l.removeAttr("name").find("[name]").removeAttr("name"), l.removeAttr("id").find("[id]").removeAttr("id"), l.appendTo(this.liveRegion), this.options.track && e && /^mouse/.test(e.type) ? (this._on(this.document, {
                    mousemove: n
                }), n(e)) : a.position(t.extend({
                    of: i
                }, this.options.position)), a.hide(), this._show(a, this.options.show), this.options.track && this.options.show && this.options.show.delay && (r = this.delayedShow = setInterval(function() {
                    a.is(":visible") && (n(h.of), clearInterval(r))
                }, t.fx.interval)), this._trigger("open", e, {
                    tooltip: a
                })
            }
        },
        _registerCloseHandlers: function(e, i) {
            var s = {
                keyup: function(e) {
                    if (e.keyCode === t.ui.keyCode.ESCAPE) {
                        var s = t.Event(e);
                        s.currentTarget = i[0], this.close(s, !0)
                    }
                }
            };
            i[0] !== this.element[0] && (s.remove = function() {
                this._removeTooltip(this._find(i).tooltip)
            }), e && "mouseover" !== e.type || (s.mouseleave = "close"), e && "focusin" !== e.type || (s.focusout = "close"), this._on(!0, i, s)
        },
        close: function(e) {
            var i, s = this,
            n = t(e ? e.currentTarget : this.element),
            o = this._find(n);
            if (!o) return void n.removeData("ui-tooltip-open");
            i = o.tooltip, o.closing || (clearInterval(this.delayedShow), n.data("ui-tooltip-title") && !n.attr("title") && n.attr("title", n.data("ui-tooltip-title")), this._removeDescribedBy(n), o.hiding = !0, i.stop(!0), this._hide(i, this.options.hide, function() {
                s._removeTooltip(t(this))
            }), n.removeData("ui-tooltip-open"), this._off(n, "mouseleave focusout keyup"), n[0] !== this.element[0] && this._off(n, "remove"), this._off(this.document, "mousemove"), e && "mouseleave" === e.type && t.each(this.parents, function(e, i) {
                t(i.element).attr("title", i.title), delete s.parents[e]
            }), o.closing = !0, this._trigger("close", e, {
                tooltip: i
            }), o.hiding || (o.closing = !1))
        },
        _tooltip: function(e) {
            var i = t("<div>").attr("role", "tooltip"),
            s = t("<div>").appendTo(i),
            n = i.uniqueId().attr("id");
            return this._addClass(s, "ui-tooltip-content"), this._addClass(i, "ui-tooltip", "ui-widget ui-widget-content"), i.appendTo(this._appendTo(e)), this.tooltips[n] = {
                element: e,
                tooltip: i
            }
        },
        _find: function(t) {
            var e = t.data("ui-tooltip-id");
            return e ? this.tooltips[e] : null
        },
        _removeTooltip: function(t) {
            t.remove(), delete this.tooltips[t.attr("id")]
        },
        _appendTo: function(t) {
            var e = t.closest(".ui-front, dialog");
            return e.length || (e = this.document[0].body), e
        },
        _destroy: function() {
            var e = this;
            t.each(this.tooltips, function(i, s) {
                var n = t.Event("blur"),
                o = s.element;
                n.target = n.currentTarget = o[0], e.close(n, !0), t("#" + i).remove(), o.data("ui-tooltip-title") && (o.attr("title") || o.attr("title", o.data("ui-tooltip-title")), o.removeData("ui-tooltip-title"))
            }), this.liveRegion.remove()
        }
    }), !1 !== t.uiBackCompat && t.widget("ui.tooltip", t.ui.tooltip, {
        options: {
            tooltipClass: null
        },
        _tooltip: function() {
            var t = this._superApply(arguments);
            return this.options.tooltipClass && t.tooltip.addClass(this.options.tooltipClass), t
        }
    });
    t.ui.tooltip
}),
function(t, e) {
    var i = 0,
    s = t(document);
    t.widget("ech.multiselect", {
        options: {
            header: !0,
            height: 175,
            minWidth: 225,
            classes: "",
            checkAllText: "Check all",
            uncheckAllText: "Uncheck all",
            noneSelectedText: "Select options",
            showCheckAll: !0,
            showUncheckAll: !0,
            selectedText: "# selected",
            selectedList: 0,
            closeIcon: "ui-icon-circle-close",
            show: null,
            hide: null,
            autoOpen: !1,
            multiple: !0,
            position: {},
            appendTo: null,
            menuWidth: null,
            selectedListSeparator: ", ",
            disableInputsOnToggle: !0,
            groupColumns: !1
        },
        _getAppendEl: function() {
            var e = this.options.appendTo;
            return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front, dialog")), e.length || (e = this.document[0].body), e
        },
        _create: function() {
            var e = this.element,
            s = this.options;
            this.speed = t.fx.speeds._default, this._isOpen = !1, this.inputIdCounter = 0, this._namespaceID = this.eventNamespace || "multiselect" + i, this.multiselectID = i++;
            var n = (this.button = t('<button type="button"><span class="ui-icon ui-icon-triangle-1-s"></span></button>')).addClass("ui-multiselect ui-widget ui-state-default ui-corner-all").addClass(s.classes).attr({
                title: e.attr("title"),
                tabIndex: e.attr("tabIndex"),
                id: e.attr("id") ? e.attr("id") + "_ms" : null
            }).prop("aria-haspopup", !0).insertAfter(e);
            this.buttonlabel = t("<span />").html(s.noneSelectedText).appendTo(n), this.menu = t("<div />").addClass("ui-multiselect-menu ui-widget ui-widget-content ui-corner-all").addClass(s.classes).appendTo(this._getAppendEl()), this.header = t("<div />").addClass("ui-widget-header ui-corner-all ui-multiselect-header ui-helper-clearfix").appendTo(this.menu), this.headerLinkContainer = t("<ul />").addClass("ui-helper-reset").html(function() {
                if (!0 === s.header) {
                    var t = "";
                    return s.showCheckAll && (t = '<li><a class="ui-multiselect-all" href="#"><span class="ui-icon ui-icon-check"></span><span>' + s.checkAllText + "</span></a></li>"), s.showUncheckAll && (t += '<li><a class="ui-multiselect-none" href="#"><span class="ui-icon ui-icon-closethick"></span><span>' + s.uncheckAllText + "</span></a></li>"), t
                }
                return "string" == typeof s.header ? "<li>" + s.header + "</li>" : ""
            }).append('<li class="ui-multiselect-close"><a href="#" class="ui-multiselect-close"><span class="ui-icon ' + s.closeIcon + '"></span></a></li>').appendTo(this.header);
            (this.checkboxContainer = t("<ul />")).addClass("ui-multiselect-checkboxes ui-helper-reset").appendTo(this.menu);
            this._bindEvents(), this.refresh(!0), s.multiple || this.menu.addClass("ui-multiselect-single"), e.hide()
        },
        _init: function() {
            !1 === this.options.header && this.header.hide(), this.options.multiple ? this.headerLinkContainer.find(".ui-multiselect-all, .ui-multiselect-none").show() : this.headerLinkContainer.find(".ui-multiselect-all, .ui-multiselect-none").hide(), this.options.autoOpen && this.open(), this.element.is(":disabled") && this.disable()
        },
        _makeOption: function(e) {
            var i = e.title ? e.title : null,
            s = e.value,
            n = this.element.attr("id") || this.multiselectID,
            o = "ui-multiselect-" + this.multiselectID + "-" + (e.id || n + "-option-" + this.inputIdCounter++),
            a = e.disabled,
            r = e.selected,
            l = ["ui-corner-all"],
            h = [],
            c = this.options;
            a && (h.push("ui-multiselect-disabled"), l.push("ui-state-disabled")), e.className && h.push(e.className), r && !c.multiple && l.push("ui-state-active");
            var u = t("<li/>").addClass(h.join(" ")),
            d = t("<label/>").attr({
                for: o,
                    title: i
            }).addClass(l.join(" ")).appendTo(u),
            p = t("<input/>").attr({
                name: "multiselect_" + n,
                type: c.multiple ? "checkbox" : "radio",
                value: s,
                title: i,
                id: o,
                checked: r ? "checked" : null,
                "aria-selected": r ? "true" : null,
                disabled: a ? "disabled" : null,
                "aria-disabled": a ? "true" : null
            }).data(t(e).data()).appendTo(d),
            f = t("<span/>").text(t(e).text());
            return p.data("image-src") && f.prepend(t("<img/>").attr({
                src: p.data("image-src")
            })), f.appendTo(d), u
        },
        _buildOptionList: function(e, i) {
            var s = this;
            e.children().each(function() {
                var e = t(this);
                if ("OPTGROUP" === this.tagName) {
                    var n = t("<ul/>").addClass("ui-multiselect-optgroup " + this.className).appendTo(i);
                    s.options.groupColumns && n.addClass("ui-multiselect-columns"), t("<a/>").text(this.getAttribute("label")).appendTo(n), s._buildOptionList(e, n)
                } else {
                    s._makeOption(this).appendTo(i)
                }
            })
        },
        refresh: function(e) {
            var i = this.element,
            s = (this.options, this.menu),
            n = (this.checkboxContainer, t("<ul/>").addClass("ui-multiselect-checkboxes ui-helper-reset"));
            this.inputIdCounter = 0, this.options.header && (this.options.multiple ? this.headerLinkContainer.find(".ui-multiselect-all, .ui-multiselect-none").show() : this.headerLinkContainer.find(".ui-multiselect-all, .ui-multiselect-none").hide()), this._buildOptionList(i, n), this.menu.find(".ui-multiselect-checkboxes").remove(), this.menu.append(n), this.labels = s.find("label"), this.inputs = this.labels.children("input"), this._setButtonWidth(), this.update(!0), e || this._trigger("refresh")
        },
        update: function(e) {
            var i, s = this.options,
            n = this.inputs,
            o = n.filter(":checked"),
            a = o.length;
            i = 0 === a ? s.noneSelectedText : t.isFunction(s.selectedText) ? s.selectedText.call(this, a, n.length, o.get()) : /\d/.test(s.selectedList) && s.selectedList > 0 && a <= s.selectedList ? o.map(function() {
                return t(this).next().text()
            }).get().join(s.selectedListSeparator) : s.selectedText.replace("#", a).replace("#", n.length), this._setButtonValue(i), e && (this.button[0].defaultValue = i)
        },
        _setButtonValue: function(t) {
            this.buttonlabel.text(t)
        },
        _bindButtonEvents: function() {
            function e() {
                return i[i._isOpen ? "close" : "open"](), !1
            }
            var i = this,
            s = this.button;
            s.find("span").bind("click.multiselect", e), s.bind({
                click: e,
                keypress: function(t) {
                    switch (t.which) {
                        case 27:
                        case 38:
                        case 37:
                        i.close();
                        break;
                        case 39:
                        case 40:
                        i.open()
                    }
                },
                mouseenter: function() {
                    s.hasClass("ui-state-disabled") || t(this).addClass("ui-state-hover")
                },
                mouseleave: function() {
                    t(this).removeClass("ui-state-hover")
                },
                focus: function() {
                    s.hasClass("ui-state-disabled") || t(this).addClass("ui-state-focus")
                },
                blur: function() {
                    t(this).removeClass("ui-state-focus")
                }
            })
        },
        _bindMenuEvents: function() {
            var e = this;
            this.menu.delegate(".ui-multiselect-optgroup a", "click.multiselect", function(i) {
                i.preventDefault();
                var s = t(this),
                n = s.parent().find("input:visible:not(:disabled)"),
                o = n.get(),
                a = s.text();
                !1 !== e._trigger("beforeoptgrouptoggle", i, {
                    inputs: o,
                    label: a
                }) && (e._toggleChecked(n.filter(":checked").length !== n.length, n), e._trigger("optgrouptoggle", i, {
                    inputs: o,
                    label: a,
                    checked: o.length ? o[0].checked : null
                }))
            }).delegate("label", "mouseenter.multiselect", function() {
                t(this).hasClass("ui-state-disabled") || (e.labels.removeClass("ui-state-hover"), t(this).addClass("ui-state-hover").find("input").focus())
            }).delegate("label", "keydown.multiselect", function(i) {
                if (82 !== i.which && !(i.which > 111 && i.which < 124)) switch (i.preventDefault(), i.which) {
                    case 9:
                    i.shiftKey ? (e.menu.find(".ui-state-hover").removeClass("ui-state-hover"), e.header.find("li").last().find("a").focus()) : e.close();
                    break;
                    case 27:
                    e.close();
                    break;
                    case 38:
                    case 40:
                    case 37:
                    case 39:
                    e._traverse(i.which, this);
                    break;
                    case 13:
                    case 32:
                    t(this).find("input")[0].click();
                    break;
                    case 65:
                    i.altKey && e.checkAll();
                    break;
                    case 85:
                    i.altKey && e.uncheckAll()
                }
            }).delegate('input[type="checkbox"], input[type="radio"]', "click.multiselect", function(i) {
                var s = t(this),
                n = this.value,
                o = s.parent().find("span").text(),
                a = this.checked,
                r = e.element.find("option");
                if (this.disabled || !1 === e._trigger("click", i, {
                    value: n,
                    text: o,
                    checked: a
                })) return void i.preventDefault();
                    s.focus(), s.prop("aria-selected", a), r.each(function() {
                        this.value === n ? this.selected = a : e.options.multiple || (this.selected = !1)
                    }), e.options.multiple || (e.labels.removeClass("ui-state-active"), s.closest("label").toggleClass("ui-state-active", a), e.close()), e.element.trigger("change"), setTimeout(t.proxy(e.update, e), 10)
                })
        },
        _bindHeaderEvents: function() {
            var e = this;
            this.header.delegate("a", "click.multiselect", function(i) {
                var s = t(this);
                s.hasClass("ui-multiselect-close") ? e.close() : s.hasClass("ui-multiselect-all") ? e.checkAll() : s.hasClass("ui-multiselect-none") && e.uncheckAll(), i.preventDefault()
            }).delegate("a", "keydown.multiselect", function(i) {
                switch (i.which) {
                    case 27:
                    e.close();
                    break;
                    case 9:
                    var s = t(i.target);
                    (!i.shiftKey || s.parent().prev().length || e.header.find(".ui-multiselect-filter").length) && (s.parent().next().length || e.labels.length || i.shiftKey) || (e.close(), i.preventDefault())
                }
            })
        },
        _bindEvents: function() {
            var e = this;
            this._bindButtonEvents(), this._bindMenuEvents(), this._bindHeaderEvents(), s.bind("mousedown." + e._namespaceID, function(i) {
                var s = i.target;
                !e._isOpen || s === e.button[0] || s === e.menu[0] || t.contains(e.menu[0], s) || t.contains(e.button[0], s) || e.close()
            }), t(this.element[0].form).bind("reset." + this._namespaceID, function() {
                setTimeout(t.proxy(e.refresh, e), 10)
            })
        },
        _getMinWidth: function() {
            var t = this.options.minWidth,
            e = 0;
            switch (typeof t) {
                case "number":
                e = t;
                break;
                case "string":
                var i = t[t.length - 1];
                e = t.match(/\d+/), e = "%" === i ? this.element.parent().outerWidth() * (e / 100) : parseInt(t, 10)
            }
            return e
        },
        _setButtonWidth: function() {
            var t = this.element.outerWidth(),
            e = this._getMinWidth();
            t < e && (t = e), this.button.outerWidth(t)
        },
        _setMenuWidth: function() {
            var t = this.menu,
            e = this.button.outerWidth() <= 0 ? this._getMinWidth() : this.button.outerWidth();
            t.outerWidth(this.options.menuWidth || e)
        },
        _setMenuHeight: function() {
            var e = this.menu.children(".ui-multiselect-header:visible").outerHeight(!0),
            i = 0;
            this.menu.find(".ui-multiselect-checkboxes li, .ui-multiselect-checkboxes a").each(function(e, s) {
                i += t(s).outerHeight(!0)
            }), i > this.options.height ? (this.menu.children(".ui-multiselect-checkboxes").css("overflow", "auto"), i = this.options.height) : this.menu.children(".ui-multiselect-checkboxes").css("overflow", "hidden"), this.menu.children(".ui-multiselect-checkboxes").height(i), this.menu.height(i + e)
        },
        _resizeMenu: function() {
            this._setMenuWidth(), this._setMenuHeight()
        },
        _traverse: function(e, i) {
            var s = t(i),
            n = 38 === e || 37 === e,
            o = s.parent()[n ? "prevAll" : "nextAll"]("li:not(.ui-multiselect-disabled, .ui-multiselect-optgroup):visible").first();
            if (o.length || (o = s.parents(".ui-multiselect-optgroup")[n ? "prev" : "next"]()), o.length) o.find("label:visible")[n ? "last" : "first"]().trigger("mouseover");
            else {
                var a = this.menu.find("ul").last();
                this.menu.find("label:visible")[n ? "last" : "first"]().trigger("mouseover"), a.scrollTop(n ? a.height() : 0)
            }
        },
        _toggleState: function(t, e) {
            return function() {
                this.disabled || (this[t] = e), e ? this.setAttribute("aria-selected", !0) : this.removeAttribute("aria-selected")
            }
        },
        _toggleChecked: function(t, e) {
            var i = e && e.length ? e : this.inputs,
            s = this;
            i.each(this._toggleState("checked", t)), i.eq(0).focus(), this.update();
            var n = {};
            i.each(function() {
                n[this.value] = !0
            }), this.element.find("option").each(function() {
                !this.disabled && n[this.value] && s._toggleState("selected", t).call(this)
            }), i.length && this.element.trigger("change")
        },
        _toggleDisabled: function(t) {
            if (this.button.prop({
                disabled: t,
                "aria-disabled": t
            })[t ? "addClass" : "removeClass"]("ui-state-disabled"), this.options.disableInputsOnToggle) {
                var e = this.menu.find(".ui-multiselect-checkboxes").get(0),
                i = [],
                s = "ech-multiselect-disabled",
                n = 0;
                if (t)
                    for (i = e.querySelectorAll("input:enabled"), n = 0; n < i.length; n++) i[n].setAttribute(s, !0), i[n].setAttribute("disabled", "disabled"), i[n].setAttribute("aria-disabled", "disabled"), i[n].parentNode.className = i[n].parentNode.className + " ui-state-disabled";
                        else
                            for (i = e.querySelectorAll("input:disabled"), n = 0; n < i.length; n++) i[n].hasAttribute(s) && (i[n].removeAttribute(s), i[n].removeAttribute("disabled"), i[n].removeAttribute("aria-disabled"), i[n].parentNode.className = i[n].parentNode.className.replace(" ui-state-disabled", ""))
                        }
                    this.element.prop({
                        disabled: t,
                        "aria-disabled": t
                    })
                },
                open: function(e) {
                    var i = this,
                    s = this.button,
                    n = this.menu,
                    o = this.speed,
                    a = this.options,
                    r = [];
                    if (!1 !== this._trigger("beforeopen") && !s.hasClass("ui-state-disabled") && !this._isOpen) {
                        var l = n.find(".ui-multiselect-checkboxes"),
                        h = a.show;
                        t.isArray(a.show) && (h = a.show[0], o = a.show[1] || i.speed), h && (r = [h, o]), l.scrollTop(0), t.fn.show.apply(n, r), this._resizeMenu(), this.position();
                        var c = this.header.find(".ui-multiselect-filter");
                        c.length ? c.first().find("input").trigger("focus") : this.labels.length ? this.labels.filter(":not(.ui-state-disabled)").eq(0).trigger("mouseover").trigger("mouseenter").find("input").trigger("focus") : this.header.find("a").first().trigger("focus"), s.addClass("ui-state-active"), this._isOpen = !0, this._trigger("open")
                    }
                },
                close: function() {
                    if (!1 !== this._trigger("beforeclose")) {
                        var e = this.options,
                        i = e.hide,
                        s = this.speed,
                        n = [];
                        t.isArray(e.hide) && (i = e.hide[0], s = e.hide[1] || this.speed), i && (n = [i, s]), t.fn.hide.apply(this.menu, n), this.button.removeClass("ui-state-active").trigger("blur").trigger("mouseleave"), this._isOpen = !1, this._trigger("close"), this.button.trigger("focus")
                    }
                },
                enable: function() {
                    this._toggleDisabled(!1)
                },
                disable: function() {
                    this._toggleDisabled(!0)
                },
                checkAll: function(t) {
                    this._toggleChecked(!0), this._trigger("checkAll")
                },
                uncheckAll: function() {
                    this._toggleChecked(!1), this._trigger("uncheckAll")
                },
                getChecked: function() {
                    return this.menu.find("input").filter(":checked")
                },
                getUnchecked: function() {
                    return this.menu.find("input").not(":checked")
                },
                destroy: function() {
                    return t.Widget.prototype.destroy.call(this), s.unbind(this._namespaceID), t(this.element[0].form).unbind(this._namespaceID), this.button.remove(), this.menu.remove(), this.element.show(), this
                },
                isOpen: function() {
                    return this._isOpen
                },
                widget: function() {
                    return this.menu
                },
                getButton: function() {
                    return this.button
                },
                getMenu: function() {
                    return this.menu
                },
                getLabels: function() {
                    return this.labels
                },
                addOption: function(e, i, s) {
                    var n = t("<option/>").attr(e).text(i),
                    o = n.get(0);
                    s ? (this.element.children("OPTGROUP").filter(function() {
                        return t(this).prop("label") === s
                    }).append(n), this.menu.find(".ui-multiselect-optgroup").filter(function() {
                        return t(this).find("a").text() === s
                    }).append(this._makeOption(o))) : (this.element.append(n), this.menu.find(".ui-multiselect-checkboxes").append(this._makeOption(o))), this.labels = this.menu.find("label"), this.inputs = this.labels.children("input")
                },
                removeOption: function(t) {
                    t && (this.element.find("option[value=" + t + "]").remove(), this.labels.find("input[value=" + t + "]").parents("li").remove(), this.labels = this.menu.find("label"), this.inputs = this.labels.children("input"))
                },
                position: function() {
                    var e = {
                        my: "top",
                        at: "bottom",
                        of: this.button
                    };
                    t.isEmptyObject(this.options.position) || (e.my = this.options.position.my || e.my, e.at = this.options.position.at || e.at, e.of = this.options.position.of || e.of), t.ui && t.ui.position ? this.menu.position(e) : (e = this.button.position(), e.top += this.button.outerHeight(!1), this.menu.offset(e))
                },
                _setOption: function(e, i) {
                    var s = this.menu;
                    switch (e) {
                        case "header":
                        "boolean" == typeof i ? this.header[i ? "show" : "hide"]() : "string" == typeof i && (this.headerLinkContainer.children("li:not(:last-child)").remove(), this.headerLinkContainer.prepend("<li>" + i + "</li>"));
                        break;
                        case "checkAllText":
                        s.find("a.ui-multiselect-all span").eq(-1).text(i);
                        break;
                        case "uncheckAllText":
                        s.find("a.ui-multiselect-none span").eq(-1).text(i);
                        break;
                        case "height":
                        this.options[e] = i, this._setMenuHeight();
                        break;
                        case "minWidth":
                        case "menuWidth":
                        this.options[e] = i, this._setButtonWidth(), this._setMenuWidth();
                        break;
                        case "selectedText":
                        case "selectedList":
                        case "noneSelectedText":
                        this.options[e] = i, this.update();
                        break;
                        case "classes":
                        s.add(this.button).removeClass(this.options.classes).addClass(i);
                        break;
                        case "multiple":
                        s.toggleClass("ui-multiselect-single", !i), this.options.multiple = i, this.element[0].multiple = i, this.uncheckAll(), this.refresh();
                        break;
                        case "position":
                        this.position();
                        break;
                        case "selectedListSeparator":
                        this.options[e] = i, this.update(!0)
                    }
                    t.Widget.prototype._setOption.apply(this, arguments)
                }
            })
}(jQuery), 
$(document).ready(function() {
    $(".account-header__description-input").labelauty({
        development: false,
        class: "labelauty",
        icon: true,
        label: false,
        separator: "|",
        checked_label: "Checked",
        unchecked_label: "Unchecked",
        force_random_id: false,
        minimum_width: false,
        same_width: true });
    $(".account-payment__agree-input").labelauty(), 
    $(".account-payment__accept-input").labelauty(), 
    $(".account-capabilities__heading").click(function() {
        $(".account-capabilities__form").toggle("slow")
    }), $(".account-payment__heading").click(function() {
        $(".account-payment__form").toggle("slow")
    })
    var t = $("#seller_subcategory_capability");
    t.multiselect({
        header: !0,
        width: 466,
        maxWidth: 466,
        noneSelectedText: "Category",
        showCheckAll: !1,
        showUncheckAll: !1,
        closeIcon: "ui-multiselect-icon-closethick"
    }), changeOptGroup(), customCheckbox("multiselect_seller_subcategory_capability"), t.bind("multiselectoptgrouptoggle", function(t, e) {
        customCheckboxOptGroup(e)
    });
    var e = $(".capibil");
    e.multiselect({
        header: !0,
        noneSelectedText: "Perforation"
    }), customCheckbox("multiselect_perforation"), e.bind("multiselectcheckall", function(t, e) {
        customCheckboxCheckAll("multiselect_perforation", !0)
    }), e.bind("multiselectuncheckall", function(t, e) {
        customCheckboxCheckAll("multiselect_perforation", !1)
    }), e.multiselect({
        header: !0,
        noneSelectedText: "Foil"
    }), customCheckbox("multiselect_foil"), e.bind("multiselectcheckall", function(t, e) {
        customCheckboxCheckAll("multiselect_foil", !0)
    }), e.bind("multiselectuncheckall", function(t, e) {
        customCheckboxCheckAll("multiselect_foil", !1)
    }),e.multiselect({
        header: !0,
        noneSelectedText: "Stamping"
    }), customCheckbox("multiselect_stamping"), e.bind("multiselectcheckall", function(t, e) {
        customCheckboxCheckAll("multiselect_stamping", !0)
    }), e.bind("multiselectuncheckall", function(t, e) {
        customCheckboxCheckAll("multiselect_stamping", !1)
    }),e.multiselect({
        header: !0,
        noneSelectedText: "Corners"
    }), customCheckbox("multiselect_corners"), e.bind("multiselectcheckall", function(t, e) {
        customCheckboxCheckAll("multiselect_corners", !0)
    }), e.bind("multiselectuncheckall", function(t, e) {
        customCheckboxCheckAll("multiselect_corners", !1)
    }),e.multiselect({
        header: !0,
        noneSelectedText: "Numbering"
    }), customCheckbox("multiselect_numbering"), e.bind("multiselectcheckall", function(t, e) {
        customCheckboxCheckAll("multiselect_numbering", !0)
    }), e.bind("multiselectuncheckall", function(t, e) {
        customCheckboxCheckAll("multiselect_numbering", !1)
    }),e.multiselect({
        header: !0,
        noneSelectedText: "Shape"
    }), customCheckbox("multiselect_shape"), e.bind("multiselectcheckall", function(t, e) {
        customCheckboxCheckAll("multiselect_shape", !0)
    }), e.bind("multiselectuncheckall", function(t, e) {
        customCheckboxCheckAll("multiselect_shape", !1)
    }),e.multiselect({
        header: !0,
        noneSelectedText: "Die Cut"
    }), customCheckbox("multiselect_die_cut"), e.bind("multiselectcheckall", function(t, e) {
        customCheckboxCheckAll("multiselect_die_cut", !0)
    }), e.bind("multiselectuncheckall", function(t, e) {
        customCheckboxCheckAll("multiselect_die_cut", !1)
    }),e.multiselect({
        header: !0,
        noneSelectedText: "Binding"
    }), customCheckbox("multiselect_binding"), e.bind("multiselectcheckall", function(t, e) {
        customCheckboxCheckAll("multiselect_binding", !0)
    }), e.bind("multiselectuncheckall", function(t, e) {
        customCheckboxCheckAll("multiselect_binding", !1)
    }),e.multiselect({
        header: !0,
        noneSelectedText: "Material"
    }), customCheckbox("multiselect_material"), e.bind("multiselectcheckall", function(t, e) {
        customCheckboxCheckAll("multiselect_material", !0)
    }), e.bind("multiselectuncheckall", function(t, e) {
        customCheckboxCheckAll("multiselect_material", !1)
    }),e.multiselect({
        header: !0,
        noneSelectedText: "Mailing Services"
    }), customCheckbox("multiselect_mailing_services"), e.bind("multiselectcheckall", function(t, e) {
        customCheckboxCheckAll("multiselect_mailing_services", !0)
    }), e.bind("multiselectuncheckall", function(t, e) {
        customCheckboxCheckAll("multiselect_mailing_services", !1)
    }),e.multiselect({
        header: !0,
        noneSelectedText: "Embossing"
    }), customCheckbox("multiselect_embossing"), e.bind("multiselectcheckall", function(t, e) {
        customCheckboxCheckAll("multiselect_embossing", !0)
    }), e.bind("multiselectuncheckall", function(t, e) {
        customCheckboxCheckAll("multiselect_embossing", !1)
    }),e.multiselect({
        header: !0,
        noneSelectedText: "Paper Type"
    }), customCheckbox("multiselect_paper_type"), e.bind("multiselectcheckall", function(t, e) {
        customCheckboxCheckAll("multiselect_paper_type", !0)
    }), e.bind("multiselectuncheckall", function(t, e) {
        customCheckboxCheckAll("multiselect_paper_type", !1)
    }),e.multiselect({
        header: !0,
        noneSelectedText: "Raised Ink"
    }), customCheckbox("multiselect_raised_ink"), e.bind("multiselectcheckall", function(t, e) {
        customCheckboxCheckAll("multiselect_raised_ink", !0)
    }), e.bind("multiselectuncheckall", function(t, e) {
        customCheckboxCheckAll("multiselect_raised_ink", !1)
    }),e.multiselect({
        header: !0,
        noneSelectedText: "Folding"
    }), customCheckbox("multiselect_folding"), e.bind("multiselectcheckall", function(t, e) {
        customCheckboxCheckAll("multiselect_folding", !0)
    }), e.bind("multiselectuncheckall", function(t, e) {
        customCheckboxCheckAll("multiselect_folding", !1)
    }),e.multiselect({
        header: !0,
        noneSelectedText: "Coating"
    }), customCheckbox("multiselect_coating"), e.bind("multiselectcheckall", function(t, e) {
        customCheckboxCheckAll("multiselect_coating", !0)
    }), e.bind("multiselectuncheckall", function(t, e) {
        customCheckboxCheckAll("multiselect_coating", !1)
    }),e.multiselect({
        header: !0,
        noneSelectedText: "Scoring"
    }), customCheckbox("multiselect_scoring"), e.bind("multiselectcheckall", function(t, e) {
        customCheckboxCheckAll("multiselect_scoring", !0)
    }), e.bind("multiselectuncheckall", function(t, e) {
        customCheckboxCheckAll("multiselect_scoring", !1)
    }),e.multiselect({
        header: !0,
        noneSelectedText: "Order Quantity"
    }), customCheckbox("multiselect_order_quantity"), e.bind("multiselectcheckall", function(t, e) {
        customCheckboxCheckAll("multiselect_order_quantity", !0)
    }), e.bind("multiselectuncheckall", function(t, e) {
        customCheckboxCheckAll("multiselect_order_quantity", !1)
    }), 
    $(".chosen-select").chosen({
        width: "100%",
        disable_search_threshold: 10
    }), 
    $("#selectState").scombobox({
        filterDelay: 300,
        highlight: !0,
        filterIgnoreCase: !0,
        fillOnTab: !0,
        showDropDown: !0,
        placeholder: " "
    }), 
    $("#company").scombobox({
        filterDelay: 300,
        highlight: !0,
        filterIgnoreCase: !0,
        fillOnTab: !0,
        showDropDown: !0,
        placeholder: " "
    }), 
    $("#individual").scombobox({
        filterDelay: 300,
        highlight: !0,
        filterIgnoreCase: !0,
        fillOnTab: !0,
        showDropDown: !0,
        placeholder: " "
    }), 
    $("#self").scombobox({
        filterDelay: 300,
        highlight: !0,
        filterIgnoreCase: !0,
        fillOnTab: !0,
        showDropDown: !0,
        placeholder: " "
    }), 
    $("#check").scombobox({
        filterDelay: 300,
        highlight: !0,
        filterIgnoreCase: !0,
        fillOnTab: !0,
        showDropDown: !0,
        placeholder: " "
    }), 
    $("#type").scombobox({
        filterDelay: 300,
        highlight: !0,
        filterIgnoreCase: !0,
        fillOnTab: !0,
        showDropDown: !0,
        placeholder: " "
    }), 
    $("#check_country").scombobox({
        filterDelay: 300,
        highlight: !0,
        filterIgnoreCase: !0,
        fillOnTab: !0,
        showDropDown: !0,
        placeholder: " "
    }), 
    $("#payment_by").scombobox({
        filterDelay: 300,
        highlight: !0,
        filterIgnoreCase: !0,
        fillOnTab: !0,
        showDropDown: !0,
        placeholder: " "
    }),
    $("#country").scombobox({
        filterDelay: 300,
        highlight: !0,
        filterIgnoreCase: !0,
        fillOnTab: !0,
        showDropDown: !0,
        placeholder: " "
    }),
    $("#state").scombobox({
        filterDelay: 300,
        highlight: !0,
        filterIgnoreCase: !0,
        fillOnTab: !0,
        showDropDown: !0,
        placeholder: " "
    }),        
    $('select[name="sell[payment_by]"]').change(function () {
        var el = $(this).val();
        if (el == 'cheque') {
            $('#paymentpaychek').css('display', 'block');
            $('#paymentpaypal').css('display', 'none');
            $('#paymentbank').css('display', 'none');
            $('#paymentindividual').css('display', 'none');
            $('#paymentcompany').css('display', 'none')
        }
        if (el == 'paypal_payment') {
            $('#paymentpaychek').css('display', 'none');
            $('#paymentpaypal').css('display', 'block');
            $('#paymentbank').css('display', 'none');
            $('#paymentindividual').css('display', 'none');
            $('#paymentcompany').css('display', 'none')
        }
        if (el == 'online_payment') {
            $('#paymentpaychek').css('display', 'none');
            $('#paymentpaypal').css('display', 'none');
            $('#paymentbank').css('display', 'block');
            $('#paymentcompany').css('display', 'block');
            $('#paymentindividual').css('display', 'none')
        }
    });
    $('select[name="sell[type]"]').change(function () {
        var el = $(this).val();
        if (el == 'company') {
            $('#paymentpaychek').css('display', 'none');
            $('#paymentpaypal').css('display', 'none');
            $('#paymentbank').css('display', 'block');
            $('#paymentcompany').css('display', 'block');
            $('#paymentindividual').css('display', 'none')
        }
        else {
            $('#paymentpaychek').css('display', 'none');
            $('#paymentpaypal').css('display', 'none');
            $('#paymentbank').css('display', 'block');
            $('#paymentcompany').css('display', 'none');
            $('#paymentindividual').css('display', 'block')
        }
    });
    $(function() {
        $("#datepicker").datepicker()
    }), 
    $(function() {
        $("#monthpicker").datepicker()
    }), 
    $(function() {
        $("#yearpicker").datepicker()
    }),
    $('#payment_by').change(function () {
        var stripe_detail = $(this).val();

        $('#frmpay').find("input[type=text], textarea").val("");
        if (stripe_detail == "online_payment") {
            $('#paymentpaychek').show();
            $('#paymentbank').hide();
            $('#paymentpaypal').hide();
        }
        else if (stripe_detail == "paypal_payment") {
            $('#paymentpaypal').show();
            $('#paymentpaychek').hide();
            $('#paymentbank').hide();
        }
        else {
            $('#paymentpaychek').hide();
            $('#paymentpaypal').hide();
            $('#paymentbank').show();
        }
    });
});