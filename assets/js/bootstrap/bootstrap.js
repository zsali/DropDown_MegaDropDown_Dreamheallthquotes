!(function n(o, s, r) {
  function a(t, e) {
    if (!s[t]) {
      if (!o[t]) {
        var i = "function" == typeof require && require;
        if (!e && i) return i(t, !0);
        if (l) return l(t, !0);
        throw (
          (((e = new Error("Cannot find module '" + t + "'")).code =
            "MODULE_NOT_FOUND"),
          e)
        );
      }
      (i = s[t] = { exports: {} }),
        o[t][0].call(
          i.exports,
          function (e) {
            return a(o[t][1][e] || e);
          },
          i,
          i.exports,
          n,
          o,
          s,
          r
        );
    }
    return s[t].exports;
  }
  for (
    var l = "function" == typeof require && require, e = 0;
    e < r.length;
    e++
  )
    a(r[e]);
  return a;
})(
  {
    1: [
      function (e, t, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", { value: !0 });
        (i.EMPTY_WIDGET_ID = "000000000000000000000000"),
          (i.LAZY_LOADED_WIDGETS = [
            "54d39695764ea907c0f34825",
            "577258fb31f02306e4e3aaf9",
          ]);
      },
      {},
    ],
    2: [
      function (e, t, i) {
        "use strict";
        function n(e, t) {
          for (var i = 0; i < t.length; i++) {
            var n = t[i];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
          }
        }
        Object.defineProperty(i, "__esModule", { value: !0 });
        (function (e, t, i) {
          t && n(e.prototype, t), i && n(e, i);
        })(s, [
          {
            key: "mutationHandler",
            value: function (d) {
              var e = !0,
                t = !1,
                i = void 0;
              try {
                for (
                  var n, o = d[Symbol.iterator]();
                  !(e = (n = o.next()).done);
                  e = !0
                ) {
                  var s = n.value;
                  if ("childList" === s.type) {
                    var r = !0,
                      a = !1,
                      l = void 0;
                    try {
                      for (
                        var c, u = s.addedNodes[Symbol.iterator]();
                        !(r = (c = u.next()).done);
                        r = !0
                      )
                        1 === c.value.nodeType && this.handleMutations();
                    } catch (e) {
                      (a = !0), (l = e);
                    } finally {
                      try {
                        !r && u.return && u.return();
                      } finally {
                        if (a) throw l;
                      }
                    }
                  }
                }
              } catch (e) {
                (t = !0), (i = e);
              } finally {
                try {
                  !e && o.return && o.return();
                } finally {
                  if (t) throw i;
                }
              }
            },
          },
          {
            key: "debounce",
            value: function (n, o) {
              var s = void 0;
              return function () {
                for (var e = arguments.length, t = Array(e), i = 0; i < e; i++)
                  t[i] = arguments[i];
                window.clearTimeout(s),
                  (s = window.setTimeout(function () {
                    n.apply(null, t);
                  }, o));
              };
            },
          },
          {
            key: "start",
            value: function () {
              this.observer.observe(this.document.body, {
                attributes: !1,
                childList: !0,
                subtree: !0,
              });
            },
          },
          {
            key: "stop",
            value: function () {
              var e = this.observer.takeRecords();
              this.observer.disconnect(),
                0 < e.length && this.mutationHandler(e);
            },
          },
        ]);
        var o = s;
        function s(e, t) {
          if (!(this instanceof s))
            throw new TypeError("Cannot call a class as a function");
          (this.document = e),
            (this.observer = new MutationObserver(
              this.mutationHandler.bind(this)
            )),
            (this.handleMutations = this.debounce(t, 200)),
            (this.start = this.start.bind(this)),
            (this.stop = this.stop.bind(this));
        }
        i.default = o;
      },
      {},
    ],
    3: [
      function (e, t, i) {
        "use strict";
        var d = !1;
        function c(e) {
          try {
            if (d) return;
            var t = document.createElement("script");
            t.setAttribute("type", "application/ld+json"),
              (t.innerHTML = JSON.stringify(e)),
              document.head.appendChild(
                document.createComment("Added by Trustpilot")
              ),
              document.head.appendChild(t),
              document.head.appendChild(
                document.createComment("/Added by Trustpilot")
              ),
              (d = !0);
          } catch (e) {}
        }
        var h = e("./xhr.js");
        t.exports = function (e) {
          if (d) return !1;
          var t,
            i,
            n,
            o,
            s,
            r,
            a,
            l,
            u = "60f537b5b0f1639de1fe048c" === e.templateId;
          return e.schemaType && e.location
            ? ((r = (s = e).businessunitId),
              (a = s.location),
              (l = s.locale),
              (s = s.templateId),
              (s = [
                "url=" + encodeURIComponent(window.location.href),
                "templateId=" + s,
                "locale=" + l,
              ].join("&")),
              h.xhrGet({
                url:
                  "https://widget.trustpilot.com" +
                  ("/data/jsonld/business-unit/" + r + "/location/" + a) +
                  "?" +
                  s,
                success: function (e) {
                  (e.url = document.location.href),
                    (e["@id"] = document.location.href),
                    c(e);
                },
                error: function (e) {
                  console.error(e);
                },
              }),
              !0)
            : !(!e.sku || !(e.name || (u && "Product" === e.schemaType))) &&
                ((r = (l = e).businessunitId),
                (a = l.locale),
                (s = l.templateId),
                (u = l.name),
                (e = l.sku),
                (t = l.reviewnumber),
                (i = l.price),
                (n = l.priceCurrency),
                (l = l.availability),
                (a = a && a.split("-")[0]),
                (r =
                  "https://widget.trustpilot.com" +
                  ("5763bccae0a06d08e809ecbb" === s
                    ? "/data/jsonld/business-unit/" + r + "/product-imported"
                    : "/data/jsonld/business-unit/" + r + "/product") +
                  "?sku=" +
                  encodeURIComponent(e) +
                  "&numberOfReviews=" +
                  (t || 10) +
                  (u ? "&productName=" + encodeURIComponent(u) : "") +
                  "&language=" +
                  a +
                  "&templateId=" +
                  s +
                  "&url=" +
                  encodeURIComponent(
                    window.location.origin + window.location.pathname
                  )),
                (o =
                  i && n && l
                    ? {
                        "@type": "Offer",
                        priceCurrency: n,
                        price: i,
                        availability: l,
                      }
                    : null),
                h.xhrGet({
                  url: r,
                  success: function (e) {
                    o && (e.offers = o),
                      (e.offers || e.review || e.aggregateRating) && c(e);
                  },
                  error: function (e) {
                    console.error(e);
                  },
                }),
                !0);
        };
      },
      { "./xhr.js": 8 },
    ],
    4: [
      function (e, u, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = function (e, t, i) {
          return t && n(e.prototype, t), i && n(e, i), e;
        };
        function n(e, t) {
          for (var i = 0; i < t.length; i++) {
            var n = t[i];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
          }
        }
        var o = a(e("./snippets")),
          s = a(e("./widget")),
          r = a(e("./observer"));
        function a(e) {
          return e && e.__esModule ? e : { default: e };
        }
        i(l, [
          {
            key: "initializeOnPageLoad",
            value: function () {
              var e = !(
                !document.currentScript ||
                !document.currentScript.hasAttribute("data-dynamic")
              );
              "loading" !== this.document.readyState
                ? (this.findAndApplyWidgets(), e && this.observer.start())
                : (this.document.addEventListener(
                    "DOMContentLoaded",
                    this.findAndApplyWidgets.bind(this)
                  ),
                  e &&
                    this.document.addEventListener(
                      "DOMContentLoaded",
                      this.observer.start
                    ));
            },
          },
          {
            key: "applyWidgetFromDomElement",
            value: function (t, e) {
              (Boolean(
                (t.firstChild && "IFRAME" === t.firstChild.tagName) ||
                  -1 <
                    this.widgets.findIndex(function (e) {
                      return e.container === t;
                    })
              ) &&
                !e) ||
                this.createWidget(t);
            },
          },
          {
            key: "findAndApplyWidgets",
            value: function () {
              var t = this,
                i =
                  !(0 < arguments.length && void 0 !== arguments[0]) ||
                  arguments[0],
                e = ((this.stats.findAndApplyCalls += 1), this.widgetElements);
              e &&
                0 !== e.length &&
                ((this.stats.elements = e.length),
                e.forEach(function (e) {
                  return t.applyWidgetFromDomElement(e, i);
                }));
            },
          },
          {
            key: "createWidget",
            value: function (e) {
              var t = this,
                i = (this.removeWidget(e), e.dataset);
              (0, o.default)(i);
              var n = new s.default({ container: e, dataset: i });
              return (
                n.initialize(),
                (this.stats.applied += 1),
                (this.stats.applyFromDomCalls += 1),
                this.widgets.push(n),
                this.onRemove(e, function () {
                  t.widgets = t.widgets.filter(function (e) {
                    return e._id !== n._id;
                  });
                }),
                n
              );
            },
          },
          {
            key: "removeWidget",
            value: function (t) {
              for (; t.firstChild; ) t.removeChild(t.firstChild);
              this.widgets
                .filter(function (e) {
                  return e.isLazyLoaded && e.isSameNodeAs(t);
                })
                .forEach(function (e) {
                  e.destroy();
                });
            },
          },
          {
            key: "closePopups",
            value: function () {
              this.widgets.forEach(function (e) {
                return e.closePopup();
              });
            },
          },
          {
            key: "onRemove",
            value: function (e, t) {
              var i = this,
                n = new MutationObserver(function () {
                  i.isDetached(e) && (n.disconnect(), t());
                });
              n.observe(this.document.body, {
                childList: !0,
                subtree: !0,
                attributes: !1,
              });
            },
          },
          {
            key: "isDetached",
            value: function (e) {
              return (
                e.parentNode !== document &&
                (null === e.parentNode || this.isDetached(e.parentNode))
              );
            },
          },
          {
            key: "businessUnitId",
            get: function () {
              return this.widgetElements[0].dataset.businessunitId;
            },
          },
          {
            key: "widgetElements",
            get: function () {
              return [].slice.call(
                this.document.getElementsByClassName("trustpilot-widget")
              );
            },
          },
        ]);
        e = l;
        function l(e, t, i) {
          var n = this;
          if (!(this instanceof l))
            throw new TypeError("Cannot call a class as a function");
          (this.window = e),
            (this.document = t),
            (this.widgets = []),
            (this.stats = {
              applied: 0,
              findAndApplyCalls: 0,
              applyFromDomCalls: 0,
              elements: 0,
            }),
            (this.version = i),
            (this.observer = new r.default(t, function () {
              return n.findAndApplyWidgets(!1);
            }));
        }
        t.default = e;
      },
      { "./observer": 2, "./snippets": 3, "./widget": 6 },
    ],
    5: [
      function (e, t, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", { value: !0 });
        var n =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var i,
                  n = arguments[t];
                for (i in n)
                  Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
              }
              return e;
            },
          o = function (e, t, i) {
            return t && s(e.prototype, t), i && s(e, i), e;
          };
        function s(e, t) {
          for (var i = 0; i < t.length; i++) {
            var n = t[i];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
          }
        }
        var r =
          "53aa8912dec7e10d38f59f36,539adbd6dec7e10e686debee,539ad60defb9600b94d7df2c,539ad998dec7e10e686debe0,539ad0ffdec7e10e686debd7,54d0e1d8764ea9078c79e6ee,54ad5defc6454f065c28af8b".split(
            ","
          );
        function a(e) {
          var t = "";
          return (
            e &&
              0 < e.length &&
              ((e = e.toLowerCase()), (t = /(px|\%)/i.test(e) ? e : e + "px")),
            t
          );
        }
        o(l, [
          {
            key: "getIframeOptionsFromData",
            value: function () {
              var e = this.iframeData || { styles: {} };
              return n({}, this.defaultIframeOptions, {
                position: e.styles.position || "",
                zindex: e.styles.zindex || "",
                margin: e.styles.margin || "",
                top: e.styles.top || "",
                bottom: e.styles.bottom || "",
                left: e.styles.left || "",
                right: e.styles.right || "",
                height: e.styles.height || "",
                width:
                  e.styles.width ||
                  this.defaultIframeOptions.styles.width ||
                  "",
                minWidth: e.styles.minWidth || "",
                minHeight: e.styles.minHeight || "",
                display: e.show ? "block" : "none",
                src: this.baseUrl + e.source + this.queryString,
                borderStyle: this.defaultIframeOptions.styles.borderStyle,
                overflow: this.defaultIframeOptions.styles.overflow,
                loading: this.dataset.loading,
                allow: e.allow,
              });
            },
          },
          {
            key: "initialize",
            value: function (e, t) {
              var i, n;
              (this._iframe =
                ((i = this.getIframeOptionsFromData()),
                ((n = document.createElement("iframe")).style.position =
                  i.position),
                (n.style.zIndex = i.zindex),
                (n.style.margin = i.margin),
                (n.style.top = i.top),
                (n.style.bottom = i.bottom),
                (n.style.left = i.left),
                (n.style.right = i.right),
                (n.style.height = i.height),
                (n.style.width = i.width),
                (n.style.minHeight = i.minHeight),
                (n.style.minWidth = i.minWidth),
                (n.style.borderStyle = i.borderStyle),
                (n.style.backgroundColor = i.backgroundColor),
                (n.style.display = i.display),
                (n.style.overflow = i.overflow),
                (n.allowTransparency = i.allowTransparency),
                (n.title = "Customer reviews powered by Trustpilot"),
                (n.loading = i.loading || "auto"),
                (n.src = i.src),
                i.allow && (n.allow = i.allow),
                n)),
                e.appendChild(this._iframe),
                this._iframe.addEventListener("load", t);
            },
          },
          {
            key: "sendMessage",
            value: function (e) {
              this._iframe.contentWindow &&
                ((e = JSON.stringify(e)),
                this._iframe.contentWindow.postMessage(
                  e,
                  "https://widget.trustpilot.com"
                ));
            },
          },
          {
            key: "isInViewport",
            value: function (e) {
              var t = this._iframe.getBoundingClientRect(),
                i = t.width || this._iframe.offsetWidth,
                n = t.height || this._iframe.offsetHeight;
              return (
                0 <= t.top &&
                0 <= t.left &&
                t.bottom - n * e <=
                  (window.innerHeight ||
                    document.documentElement.clientHeight) &&
                t.right - i * e <=
                  (window.innerWidth || document.documentElement.clientWidth)
              );
            },
          },
          {
            key: "setWidgetId",
            value: function (e) {
              this.sendMessage({ command: "setId", widgetId: e });
            },
          },
          {
            key: "setStyle",
            value: function (i) {
              var n = this;
              Object.keys(i).forEach(function (e) {
                var t = i[e];
                n._iframe.style[e] = t;
              });
            },
          },
          {
            key: "isScrollBlockingPopup",
            value: function () {
              return "popup" === this.name && this.isScrollBlocking;
            },
          },
          {
            key: "disablePageScroll",
            value: function () {
              (this.defaultOverflowProperties = this.OVERFLOW_PROPERTIES.reduce(
                function (e, t) {
                  return (e[t] = document.body.style.getPropertyValue(t)), e;
                },
                {}
              )),
                (document.body.style.overflow = "hidden");
            },
          },
          {
            key: "restorePageScroll",
            value: function () {
              var e = !0,
                t = !1,
                i = void 0;
              try {
                for (
                  var n, o = this.OVERFLOW_PROPERTIES[Symbol.iterator]();
                  !(e = (n = o.next()).done);
                  e = !0
                ) {
                  var s = n.value;
                  document.body.style.removeProperty(s),
                    this.defaultOverflowProperties[s] &&
                      document.body.style.setProperty(
                        s,
                        this.defaultOverflowProperties[s]
                      );
                }
              } catch (e) {
                (t = !0), (i = e);
              } finally {
                try {
                  !e && o.return && o.return();
                } finally {
                  if (t) throw i;
                }
              }
            },
          },
          {
            key: "show",
            value: function () {
              this.isScrollBlockingPopup() &&
                !this.isVisible &&
                this.disablePageScroll(),
                (this._iframe.style.display = "block"),
                (this.isVisible = !0);
            },
          },
          {
            key: "hide",
            value: function () {
              this.isScrollBlockingPopup() &&
                this.isVisible &&
                this.restorePageScroll(),
                (this._iframe.style.display = "none"),
                (this.isVisible = !1);
            },
          },
          {
            key: "focus",
            value: function () {
              this._iframe.contentWindow.focus();
            },
          },
          {
            key: "resizeHeight",
            value: function (e) {
              "number" == typeof e &&
                0 !== e &&
                (this._iframe.style.height = e + "px");
            },
          },
          {
            key: "_shouldAllowRobots",
            value: function () {
              return (
                "true" === this.dataset.allowRobots &&
                this.dataset.location &&
                -1 < r.indexOf(this.templateId)
              );
            },
          },
          {
            key: "dimensions",
            get: function () {
              return {
                height: a(this.dataset.styleHeight),
                width: a(this.dataset.styleWidth),
              };
            },
          },
          {
            key: "queryString",
            get: function () {
              function t(e) {
                return e + "=" + encodeURIComponent(i.dataset[e]);
              }
              function e(e) {
                return Object.keys(i.dataset).filter(e).map(t);
              }
              var i = this,
                n = ["businessunitId", "templateId"],
                o = e(function (e) {
                  return -1 !== n.indexOf(e);
                }),
                s = e(function (e) {
                  return -1 === n.indexOf(e) && "allowRobots" !== e;
                });
              return "?" + o.join("&") + "#" + s.join("&");
            },
          },
          {
            key: "templateId",
            get: function () {
              return this.dataset.templateId;
            },
          },
          {
            key: "baseUrl",
            get: function () {
              return (
                "https://widget.trustpilot.com/trustboxes/" +
                this.templateId +
                "/"
              );
            },
          },
          {
            key: "defaultIframeOptions",
            get: function () {
              return {
                source: this._shouldAllowRobots()
                  ? "index_allow_robots.html"
                  : "index.html",
                allowTransparency: "true",
                styles: {
                  borderStyle: "none",
                  backgroundColor: "transparent",
                  display: "block",
                  overflow: "hidden",
                  height: this.dimensions.height,
                  width: this.dimensions.width,
                  position: "relative",
                },
                show: !0,
              };
            },
          },
        ]);
        o = l;
        function l(e, t, i) {
          var n =
              3 < arguments.length && void 0 !== arguments[3] && arguments[3],
            o = this,
            s = l;
          if (!(o instanceof s))
            throw new TypeError("Cannot call a class as a function");
          (this.OVERFLOW_PROPERTIES = ["overflow", "overflow-x", "overflow-y"]),
            (this.name = e),
            (this.dataset = t),
            (this.iframeData = i || this.defaultIframeOptions),
            (this.defaultOverflowProperties = {}),
            (this.isVisible = !1),
            (this.isScrollBlocking = n);
        }
        i.default = o;
      },
      {},
    ],
    6: [
      function (e, r, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = function (e, t, i) {
          return t && n(e.prototype, t), i && n(e, i), e;
        };
        function n(e, t) {
          for (var i = 0; i < t.length; i++) {
            var n = t[i];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
          }
        }
        var l = o(e("./tracking")),
          s = o(e("./iframe")),
          u = e("./../constants");
        function o(e) {
          return e && e.__esModule ? e : { default: e };
        }
        i(d, null, [
          {
            key: "generateId",
            value: function () {
              for (
                var e = this.usedIds, t = void 0;
                (t = Math.random()), -1 !== e.indexOf(t);

              );
              return this.usedIds.push(t);
            },
          },
        ]),
          i(d, [
            {
              key: "isContainerInViewport",
              value: function () {
                var e =
                    0 < arguments.length && void 0 !== arguments[0]
                      ? arguments[0]
                      : 200,
                  t = this.container.getBoundingClientRect(),
                  i = t.width || this.container.offsetWidth,
                  n = t.height || this.container.offsetHeight;
                return (
                  0 <= t.top &&
                  0 <= t.left &&
                  t.bottom - n - e <=
                    (window.innerHeight ||
                      document.documentElement.clientHeight) &&
                  t.right - i - e <=
                    (window.innerWidth || document.documentElement.clientWidth)
                );
              },
            },
            {
              key: "initialize",
              value: function () {
                !this.isLazyLoaded || this.isContainerInViewport()
                  ? ((this._widgetIFrameOrigin =
                      "https://widget.trustpilot.com"),
                    this.createIFrame("main"),
                    this.attachMessageListener())
                  : (this.lazyLoadTimeout = setTimeout(this.initialize, 500));
              },
            },
            {
              key: "handleCommand",
              value: function (e) {
                var t = e.data,
                  e = e.origin;
                try {
                  var i = "string" == typeof t ? JSON.parse(t) : t;
                  return e === this._widgetIFrameOrigin &&
                    i.widgetId === this.id
                    ? this.widgetIframeMessageHandler(i)
                    : !1;
                } catch (e) {
                  return !1;
                }
              },
            },
            {
              key: "attachMessageListener",
              value: function () {
                window.addEventListener(
                  "message",
                  this.handleCommand.bind(this),
                  !1
                );
              },
            },
            {
              key: "widgetIframeMessageHandler",
              value: function (e) {
                var t = this,
                  i =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : function () {},
                  n =
                    ((this.stats.events[e.command] =
                      (this.stats.events[e.command] || 0) + 1),
                    e.name),
                  o = e.style,
                  s = e.height,
                  r = e.targets,
                  u = e.attachToBody,
                  a = this.iframes[n],
                  l = {
                    createIFrame: function () {
                      return t.createIFrame(n, e, u);
                    },
                    setStyle: function () {
                      return a.setStyle(o);
                    },
                    show: function () {
                      return a.show();
                    },
                    hide: function () {
                      return a.hide();
                    },
                    focus: function () {
                      return a.focus();
                    },
                    loaded: function () {
                      return t.iframes.main.sendMessage("loaded");
                    },
                    message: function () {
                      return a.sendMessage(e);
                    },
                    ping: function () {
                      t.iframes.main.sendMessage({ command: "pong" }),
                        (t.stats.pongSent = !0);
                    },
                    "resize-height": function () {
                      return t.getIframeOrMain(n).resizeHeight(s);
                    },
                    impression: function () {
                      return t.tracking.initialize();
                    },
                    scrollTo: function () {
                      return t.scrollToTrustBox(r);
                    },
                  }[e.command];
                return l ? (l(), !0) : (i(), !1);
              },
            },
            {
              key: "createIFrame",
              value: function (e, t) {
                var i = this,
                  n =
                    2 < arguments.length &&
                    void 0 !== arguments[2] &&
                    arguments[2],
                  o = new s.default(e, this.dataset, t, n);
                (this.iframes[e] = o),
                  (this.stats.createIFrameCalls += 1),
                  o.initialize(n ? document.body : this.container, function () {
                    o.setWidgetId(i.id), (i.stats.iframeLoadEvents += 1);
                  });
              },
            },
            {
              key: "getIframeOrMain",
              value: function (e) {
                return this.iframes[e] || this.iframes.main;
              },
            },
            {
              key: "isInViewport",
              value: function (e) {
                return this.iframes.main.isInViewport(e);
              },
            },
            {
              key: "isSameNodeAs",
              value: function (e) {
                try {
                  return this.container.isSameNode(e);
                } catch (e) {
                  return !1;
                }
              },
            },
            {
              key: "destroy",
              value: function () {
                this.lazyLoadTimeout && clearTimeout(this.lazyLoadTimeout);
              },
            },
            {
              key: "closePopup",
              value: function () {
                "popup" in this.iframes &&
                  (this.iframes.main.sendMessage({
                    name: "main",
                    command: "message",
                    message: "popup toggled",
                    visible: !1,
                  }),
                  this.iframes.popup.hide());
              },
            },
            {
              key: "scrollToTrustBox",
              value: function () {
                var e,
                  t =
                    0 < arguments.length && void 0 !== arguments[0]
                      ? arguments[0]
                      : [],
                  t = document.querySelector(
                    t
                      .map(function (e) {
                        return "[data-template-id='" + e + "']";
                      })
                      .join(",")
                  );
                !t ||
                  ((e = t.querySelector("iframe")) &&
                    (t.scrollIntoView({ behavior: "smooth" }),
                    e.contentWindow.focus()));
              },
            },
            {
              key: "id",
              get: function () {
                return (
                  this._id || (this._id = this.constructor.generateId()),
                  this._id
                );
              },
            },
          ]);
        e = d;
        function d(e) {
          var t = this,
            i = e.container,
            n = e.dataset,
            o = e.session,
            s = e.anonymousId,
            r = e.testId,
            e = e.sessionExpiry;
          if (!(this instanceof d))
            throw new TypeError("Cannot call a class as a function");
          var a = {
            container: i,
            dataset: n,
            templateId: n.templateId,
            businessUnitId: n.businessunitId,
            locale: n.locale,
          };
          Object.keys(a).forEach(function (e) {
            if (!a[e]) throw "No " + e + " supplied for TrustBox";
          }),
            (this.container = i),
            (this.container.style.position = "relative"),
            (this.dataset = n),
            (this.iframes = {}),
            (this.tracking = new l.default(
              function (e) {
                return t.iframes.main.sendMessage(e);
              },
              function () {
                return t.isInViewport(0.5);
              },
              {
                session: o,
                group: n.group,
                sessionExpiry: e,
                anonymousId: s,
                testId: r,
                templateId: n.templateId,
              }
            )),
            (this.isLazyLoaded =
              -1 < u.LAZY_LOADED_WIDGETS.indexOf(n.templateId)),
            (this.lazyLoadTimeout = null),
            (this.isSameNodeAs = this.isSameNodeAs.bind(this)),
            (this.destroy = this.destroy.bind(this)),
            (this.stats = {
              createIFrameCalls: 0,
              iframeLoadEvents: 0,
              events: {},
              pongSent: !1,
            }),
            (this.initialize = this.initialize.bind(this));
        }
        (e.usedIds = []), (t.default = e);
      },
      { "./../constants": 1, "./iframe": 5, "./tracking": 7 },
    ],
    7: [
      function (e, t, i) {
        "use strict";
        Object.defineProperty(i, "__esModule", { value: !0 });
        var n = function (e, t, i) {
          return t && o(e.prototype, t), i && o(e, i), e;
        };
        function o(e, t) {
          for (var i = 0; i < t.length; i++) {
            var n = t[i];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
          }
        }
        var u = e("../constants");
        n(l, [
          {
            key: "initialize",
            value: function () {
              this.sendImpressionData(),
                this.attachListener(),
                this.shouldDetachListener();
            },
          },
          {
            key: "getTrackingData",
            value: function (e) {
              e = {
                command: e,
                url: window.document.URL,
                referrer: window.document.referrer,
                userAgent: window.navigator.userAgent,
                language:
                  window.navigator.userLanguage || window.navigator.language,
                platform: window.navigator.platform,
              };
              return (
                this.session &&
                  this.group &&
                  ((e.session = this.session),
                  (e.sessionExpiry = this.sessionExpiry)),
                this.anonymousId && (e.anonymousId = this.anonymousId),
                this.testId && (e.testId = this.testId),
                e
              );
            },
          },
          {
            key: "sendImpressionData",
            value: function () {
              var e;
              this.hasSentImpression ||
                ((this.hasSentImpression = !0),
                (e = this.getTrackingData("impression-received")),
                this.sendMessage(e));
            },
          },
          {
            key: "sendVisibilityData",
            value: function () {
              var e;
              this.hasSentViewTracking ||
                ((this.hasSentViewTracking = !0),
                (e = this.getTrackingData("trustbox-in-viewport")),
                this.sendMessage(e));
            },
          },
          {
            key: "attachListener",
            value: function () {
              var t,
                i,
                n,
                o = arguments,
                e = this,
                s =
                  ((t = function () {
                    (e.templateId !== u.EMPTY_WIDGET_ID &&
                      !e.shouldDetachListener()) ||
                      (window.removeEventListener("scroll", a, r),
                      window.removeEventListener("resize", l, r));
                  }),
                  function () {
                    var e = o;
                    clearTimeout(n),
                      (n = setTimeout(function () {
                        (n = null), t(e);
                      }, i));
                  }),
                r = { passive: !(n = void 0), capture: !(i = 100) },
                a = window.addEventListener("scroll", s, r),
                l = window.addEventListener("resize", s, r);
              s();
            },
          },
          {
            key: "shouldDetachListener",
            value: function () {
              return (
                !!this.hasSentViewTracking ||
                (this.hasBeenVisible
                  ? (this.hasSentImpression && this.sendVisibilityData(), !0)
                  : !!this.isTrustBoxVisible() &&
                    (this.hasSentImpression
                      ? (this.sendVisibilityData(), !0)
                      : (this.hasBeenVisible = !0)))
              );
            },
          },
        ]);
        e = l;
        function l(e, t, i) {
          var n = i.session,
            o = i.sessionExpiry,
            s = i.group,
            r = i.anonymousId,
            a = i.testId,
            i = i.templateId;
          if (!(this instanceof l))
            throw new TypeError("Cannot call a class as a function");
          (this.hasSentImpression = !1),
            (this.hasSentViewTracking = !1),
            (this.sendMessage = e),
            (this.isTrustBoxVisible = t),
            (this.session = n),
            (this.group = s),
            (this.sessionExpiry = o),
            (this.anonymousId = r),
            (this.testId = a),
            (this.templateId = i);
        }
        i.default = e;
      },
      { "../constants": 1 },
    ],
    8: [
      function (e, t, i) {
        "use strict";
        function n(t) {
          try {
            return JSON.parse(t.responseText);
          } catch (e) {
            return t.responseText;
          }
        }
        t.exports = {
          xhrGet: function (e) {
            var t = new window.XMLHttpRequest();
            t.open("GET", e.url, !0),
              t.setRequestHeader(
                "Content-type",
                "application/x-www-form-urlencoded"
              ),
              (t.onreadystatechange = function () {
                4 === t.readyState &&
                  (200 <= t.status && t.status < 300
                    ? e.success(n(t))
                    : e.error && e.error(n(t)));
              }),
              t.send();
          },
        };
      },
      {},
    ],
    9: [
      function (e, t, i) {
        "use strict";
        var n,
          o,
          s =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                },
          r = "1.437.0";
        try {
          (n = e("./lib/widget-management.js").default),
            (o =
              window.Trustpilot && 0 < Object.keys(window.Trustpilot).length),
            (window.Trustpilot = o
              ? window.Trustpilot
              : {
                  loadFromElement: function (e, t) {
                    if (e)
                      return (
                        this.Modules.WidgetManagement &&
                        this.Modules.WidgetManagement.applyWidgetFromDomElement(
                          e,
                          t
                        )
                      );
                    console.error(
                      'No element supplied to "Trustpilot.loadFromElement"'
                    );
                  },
                }),
            (window.Trustpilot.Modules = window.Trustpilot.Modules || {}),
            window.Trustpilot.Modules.WidgetManagement
              ? window.Trustpilot.Modules.WidgetManagement.version !== r &&
                console.log(
                  "Detected legacy TrustBox bootstrap with version:",
                  window.Trustpilot.Modules.WidgetManagement.version,
                  ", current:",
                  r
                )
              : ((window.Trustpilot.Modules.WidgetManagement = new n(
                  window,
                  document,
                  r
                )),
                window.Trustpilot.Modules.WidgetManagement.initializeOnPageLoad(),
                window.addEventListener("load", function () {
                  try {
                    for (
                      var e =
                          document.getElementsByClassName("trustpilot-widget"),
                        t = 0;
                      t < e.length;
                      ++t
                    ) {
                      var i = e[t],
                        n = i.firstChild && i.firstChild.tagName;
                      n &&
                        "IFRAME" !== n &&
                        window.Trustpilot.loadFromElement(i);
                    }
                  } catch (e) {
                    console.error("Error loading trustboxes " + e);
                  }
                })),
            window.addEventListener("click", function () {
              window.Trustpilot.Modules.WidgetManagement.closePopups();
            });
        } catch (e) {
          function a(e) {
            console.error("Error on bootstrap:" + e);
            e = [
              "error=" + encodeURIComponent(e),
              "uri=" + encodeURIComponent(document.URL),
              "bootstrapVersion=" + r,
            ].join("&");
            document.createElement("img").src =
              "https://widget.trustpilot.com/feedback/report-error?" + e;
          }
          try {
            "object" === (void 0 === e ? "undefined" : s(e))
              ? a(e.message)
              : a(e);
          } catch (e) {
            console.error("Error on error reporting method:" + e);
          }
        }
      },
      { "./lib/widget-management.js": 4 },
    ],
  },
  {},
  [9]
);
//# sourceMappingURL=tp.widget.bootstrap.min.js.map
