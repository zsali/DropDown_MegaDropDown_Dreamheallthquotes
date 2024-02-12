"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [412],
  {
    5418: function (e, l, i) {
      i.d(l, {
        Z: function () {
          return A;
        },
      });
      var n,
        a = i(5893),
        s = i(7294),
        t = i(1163),
        r = i(2742),
        o = i.n(r),
        d = i(936),
        c = i(2510);
      let u = (e) => {
        var l;
        let {
            item: { fields: i },
            level: n = 1,
            show: t,
          } = e,
          [r, o] = (0, s.useState)(!1),
          d =
            i.parent &&
            (null === (l = i.childItems) || void 0 === l ? void 0 : l.length) >
              0;
        return (
          (0, s.useEffect)(() => {
            t || o(!1);
          }, [t]),
          (0, a.jsxs)("li", {
            className: "main-header-mobile-nav-item".concat(
              r ? " is-active" : ""
            ),
            children: [
              (0, a.jsxs)("div", {
                className: "main-header-mobile-nav-item-label".concat(
                  i.heading ? " is-heading" : ""
                ),
                children: [
                  i.hyperlink
                    ? (0, a.jsx)("a", {
                        className: "main-header-mobile-nav-item-label-text",
                        href: i.linkUrl,
                        children: i.linkText,
                      })
                    : (0, a.jsx)("span", {
                        className: "main-header-mobile-nav-item-label-text",
                        children: i.linkText,
                      }),
                  d &&
                    (0, a.jsx)("span", {
                      className: "main-header-mobile-nav-item-label-arrow",
                      onClick: () => o((e) => !e),
                      children: "3",
                    }),
                ],
              }),
              d &&
                (0, a.jsx)("div", {
                  className:
                    "main-header-mobile-nav-item-subitems level-".concat(n),
                  children: (0, a.jsx)("ul", {
                    children: i.childItems.map((e) =>
                      (0, a.jsx)(
                        u,
                        { item: e, level: n + 1, show: t },
                        e.sys.id
                      )
                    ),
                  }),
                }),
            ],
          })
        );
      };
      var h = (e) => {
          let { items: l, show: i } = e;
          return (
            (0, s.useEffect)(() => {
              document.body.style.overflow = i ? "hidden" : "auto";
            }, [i]),
            (0, a.jsxs)("div", {
              className: "main-header-mobile-nav".concat(i ? " show" : ""),
              children: [
                (0, a.jsx)("div", {
                  className: "main-header-mobile-nav-links",
                  children: (0, a.jsx)("ul", {
                    children: l.map((e) =>
                      (0, a.jsx)(u, { item: e, show: i }, e.sys.id)
                    ),
                  }),
                }),
                (0, a.jsx)("div", {
                  className: "main-header-mobile-nav-get-a-quote",
                  children: (0, a.jsx)("a", {
                    href: "/quotes",
                    className: "free-quote-btn",
                    children: "Get a Quote",
                  }),
                }),
              ],
            })
          );
        },
        m = i(7739),
        v = i.n(m);
      let p = (e) => {
          var l;
          let { active: i, item: n, level: t = 1, onToggle: r } = e,
            [o, d] = (0, s.useState)("");
          return (0, a.jsxs)("li", {
            className: "main-header-nav-item"
              .concat(n.fields.heading ? " is-heading " : "")
              .concat(n.fields.parent ? " is-parent " : "")
              .concat(i ? " is-active" : ""),
            onMouseOver: () => r(!0),
            onMouseOut: () => r(!1),
            children: [
              n.fields.hyperlink
                ? (0, a.jsx)("a", {
                    className: "main-header-nav-label",
                    href: n.fields.linkUrl,
                    children: n.fields.linkText,
                  })
                : (0, a.jsx)("span", {
                    className: "main-header-nav-label",
                    children: n.fields.linkText,
                  }),
              !!n.fields.parent &&
                (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)("span", {
                      className: "main-header-nav-arrow",
                      onClick: () => r(!i),
                      children: "3",
                    }),
                    (null === (l = n.fields.childItems) || void 0 === l
                      ? void 0
                      : l.length) > 0 &&
                      (0, a.jsx)("ul", {
                        className: "main-header-nav-deep",
                        children: n.fields.childItems.map((e) =>
                          (0, a.jsx)(
                            p,
                            {
                              active: o === e.sys.id,
                              item: e,
                              level: t + 1,
                              onToggle: (l) => d(l ? e.sys.id : ""),
                            },
                            e.sys.id
                          )
                        ),
                      }),
                  ],
                }),
            ],
          });
        },
        x = (e) => {
          let { rows: l } = e,
            [i, n] = (0, s.useState)("");
          return (0, a.jsx)("div", {
            className: "main-header-nav-column",
            children: (0, a.jsx)("ul", {
              children: l.map((e, l) =>
                (0, a.jsx)(
                  p,
                  {
                    active: i === e.sys.id,
                    item: e,
                    onToggle: (l) => n(l ? e.sys.id : ""),
                  },
                  "".concat(e.sys.id, "-").concat(l)
                )
              ),
            }),
          });
        };
      var f = (e) => {
        var l, i, n, t, r, o, d;
        let {
            hasBannerItems: c,
            items: u,
            logo: h,
            setShowMobileMenu: m,
            setShowSearch: p,
            showSearch: f,
          } = e,
          [g, j] = (0, s.useState)(-1),
          b = (0, s.useMemo)(() => {
            var e, l;
            return Object.values(
              v()(
                null !==
                  (o =
                    null === (l = u[g]) || void 0 === l
                      ? void 0
                      : null === (e = l.fields) || void 0 === e
                      ? void 0
                      : e.childItems) && void 0 !== o
                  ? o
                  : [],
                (e) => (null !== (d = e.fields.column) && void 0 !== d ? d : 1)
              )
            );
          }, [g, u]);
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)("div", {
              className: "container",
              children: (0, a.jsxs)("ul", {
                className: "main-nav d-flex",
                children: [
                  (0, a.jsx)("li", {
                    className: "sq-logo",
                    children: (0, a.jsx)("a", {
                      href: "/",
                      onClick: () => p(!1),
                      children: (0, a.jsx)("img", {
                        src:
                          null == h
                            ? void 0
                            : null === (t = h.fields) || void 0 === t
                            ? void 0
                            : null === (n = t.imageFile) || void 0 === n
                            ? void 0
                            : null === (i = n.fields) || void 0 === i
                            ? void 0
                            : null === (l = i.file) || void 0 === l
                            ? void 0
                            : l.url,
                        width: 210,
                        alt:
                          (null == h
                            ? void 0
                            : null === (r = h.fields) || void 0 === r
                            ? void 0
                            : r.imageName) || "logo",
                      }),
                    }),
                  }),
                  null == u
                    ? void 0
                    : u.map((e, l) =>
                        (0, a.jsx)(
                          "li",
                          {
                            className: ""
                              .concat(
                                e.fields.parent && g === l ? "is-hover " : ""
                              )
                              .concat(e.fields.parent ? "is-parent " : ""),
                            onMouseOver: () => j(l),
                            onMouseOut: () => j(-1),
                            children: e.fields.hyperlink
                              ? (0, a.jsx)("a", {
                                  href: e.fields.linkUrl,
                                  children: e.fields.linkText,
                                })
                              : (0, a.jsx)("span", {
                                  children: e.fields.linkText,
                                }),
                          },
                          "".concat(e.sys.id, "-").concat(l)
                        )
                      ),
                  !c &&
                    (0, a.jsx)("li", {
                      className: "search-logo",
                      onClick: () => {
                        m(!1), p(!f);
                      },
                      children: (0, a.jsx)("img", {
                        width: 24,
                        height: 24,
                        src: "/images/content/search.webp",
                        alt: "search-icon",
                      }),
                    }),
                  (0, a.jsx)("li", {
                    className: "get-a-quote",
                    children: (0, a.jsx)("a", {
                      href: "/quotes",
                      className: "free-quote-btn",
                      children: "Get a Quote",
                    }),
                  }),
                ],
              }),
            }),
            b.length > 0 &&
              (0, a.jsx)("div", {
                className: "main-header-nav-popup",
                children: (0, a.jsx)("div", {
                  className: "main-header-nav-columns",
                  onMouseOver: () => j(g),
                  onMouseOut: () => j(-1),
                  children: b.map((e, l) => (0, a.jsx)(x, { rows: e }, l)),
                }),
              }),
          ],
        });
      };
      let g = (e) =>
        null !==
          (n = e
            .split(":")
            .map((e) => o()(e))
            .pop()) && void 0 !== n
          ? n
          : "";
      function j(e) {
        let {
            childItems: l,
            linkText: i,
            linkUrl: n,
            hyperlink: t,
            parent: r,
            renderSubChildLInk: o,
          } = e,
          [d, c] = (0, s.useState)(null),
          [u, h] = (0, s.useState)(!1),
          [m, v] = (0, s.useState)(!1),
          p = l.length;
        return (
          (0, s.useEffect)(() => {
            if (d && u && !1 === m) {
              let e = (() => {
                  let e = d.parentElement;
                  for (
                    ;
                    e &&
                    !(e.className || "")
                      .split(" ")
                      .includes("dropdown-content");

                  )
                    e = e.parentElement;
                  return e;
                })(),
                l = e.getBoundingClientRect().top,
                i = d.getBoundingClientRect().top,
                n = -(((p - 1) * 45) / 2),
                a = i + n;
              v(i + n < l ? n + (l - a) : n);
            }
          }, [p, u, d, m]),
          (0, a.jsxs)("div", {
            className: "dropdown",
            onMouseOver: () => h(!0),
            onMouseOut: () => h(!1),
            children: [
              (0, a.jsx)("a", {
                href: "".concat(t ? n : "/#"),
                className: "dropbtn".concat(t ? "" : " not-hyperlink"),
                onClick: (e) => {
                  t || (e.preventDefault(), e.stopPropagation());
                },
                children: (0, a.jsx)("div", {
                  className: "anchor-wrap",
                  children: i,
                }),
              }),
              (0, a.jsx)("div", {
                className: "dropdown-content",
                ref: c,
                style: { top: !1 === m ? void 0 : "".concat(m, "px") },
                children: l.map((e, l) => o(e, "subchild".concat(l))),
              }),
            ],
          })
        );
      }
      var b = i(9008),
        y = i.n(b),
        N = (e) => {
          let { page: l } = e,
            { title: i, seo: n } = l.fields,
            t = "https://www.selectquote.com",
            r = "/images/form/form-header-logo.png",
            o = "",
            d = "",
            c = !1,
            u = !1,
            h = "";
          if (n) {
            let {
              shareCardImage: e,
              description: l,
              keywords: i,
              noIndex: a,
              noFollow: s,
              canonicalUrl: t,
            } = n.fields;
            e &&
              (r = e
                ? "https:".concat(
                    null == e ? void 0 : e.fields.imageFile.fields.file.url
                  )
                : ""),
              l && (o = l),
              i && (d = i),
              t && (h = t),
              "/" == h && (h = ""),
              (c = a),
              (u = s);
          }
          let m = [
              {
                element: "script",
                type: "text/javascript",
                source:
                  "https://cdn.jsdelivr.net/npm/addsearch-js-client@0.4/dist/addsearch-js-client.min.js",
                async: !0,
              },
              {
                element: "script",
                type: "text/javascript",
                source:
                  "https://cdn.jsdelivr.net/npm/addsearch-search-ui@0.4.8/dist/addsearch-search-ui.min.js",
                async: !0,
              },
            ],
            v = (e) => {
              let l = document.createElement(e.element);
              (l.type = e.type),
                (l.src = e.source),
                (l.async = e.async),
                document.head.appendChild(l);
            };
          return (
            (0, s.useEffect)(() => {
              m.forEach((e) => {
                v(e);
              });
              var e = document.createElement("link");
              (e.rel = "stylesheet"),
                (e.href =
                  "https://cdn.jsdelivr.net/npm/addsearch-search-ui@0.4/dist/addsearch-search-ui.min.css"),
                document.head.appendChild(e);
            }, []),
            (0, s.useEffect)(() => {
              setTimeout(() => {
                var e = document.createElement("script");
                (e.type = "text/javascript"),
                  (e.src = "/addsearch/js/ui.js"),
                  document.body.appendChild(e);
              }, 800);
            }, []),
            (0, a.jsxs)(y(), {
              children: [
                (0, a.jsx)("link", { rel: "icon", href: "/favicon.ico" }),
                (0, a.jsx)("title", { children: i }),
                (0, a.jsx)("meta", { name: "title", content: i }),
                (0, a.jsx)("meta", { name: "description", content: o }),
                (0, a.jsx)("meta", { property: "og:locale", content: "en_US" }),
                (0, a.jsx)("meta", { property: "og:type", content: "website" }),
                (0, a.jsx)("meta", { name: "og:title", content: i }),
                (0, a.jsx)("meta", { property: "og:description", content: o }),
                (0, a.jsx)("meta", { property: "og:image", content: r }),
                (0, a.jsx)("meta", {
                  property: "og:url",
                  content: "".concat(t).concat(""),
                }),
                (0, a.jsx)("meta", {
                  property: "og:site_name",
                  content: "SelectQuote Life",
                }),
                (0, a.jsx)("meta", { name: "twitter:title", content: i }),
                (0, a.jsx)("meta", { name: "twitter:description", content: o }),
                (0, a.jsx)("meta", {
                  name: "twitter:card",
                  content: "summary_large_image",
                }),
                (0, a.jsx)("meta", {
                  name: "twitter:label1",
                  content: "Est. reading time",
                }),
                (0, a.jsx)("meta", {
                  name: "twitter:data1",
                  content: "9 minutes",
                }),
                (0, a.jsx)("meta", { name: "keywords", content: d }),
                (0, a.jsx)("link", {
                  rel: "canonical",
                  href: "".concat(t).concat(h),
                }),
                c && u
                  ? (0, a.jsx)("meta", {
                      name: "robots",
                      content: "noindex, nofollow",
                    })
                  : (0, a.jsxs)(a.Fragment, {
                      children: [
                        c &&
                          (0, a.jsx)("meta", {
                            name: "robots",
                            content: "noindex",
                          }),
                        u &&
                          (0, a.jsx)("meta", {
                            name: "robots",
                            content: "nofollow",
                          }),
                      ],
                    }),
                (0, a.jsx)("link", {
                  rel: "preconnect",
                  href: "https://fonts.googleapis.com",
                }),
                (0, a.jsx)("link", {
                  rel: "preconnect",
                  href: "https://fonts.gstatic.com",
                }),
                (0, a.jsx)("link", {
                  href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
                  rel: "stylesheet",
                }),
                (0, a.jsx)("link", {
                  href: "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
                  rel: "stylesheet",
                }),
              ],
            })
          );
        },
        w = i(4897),
        S = i(57),
        k = i(9429),
        M = i(6486),
        C = i.n(M),
        I = i(3505),
        P = i(1785),
        q = i.n(P);
      function A(e) {
        let { page: l, header: i, children: n } = e,
          r = (0, t.useRouter)(),
          { gtmContainerId: o } = null == l ? void 0 : l.fields,
          u = r.query,
          h = (e) => {
            d.uR.setItem(c.P_.SITE_SESSION_DATA, e),
              window.dispatchEvent(new Event("storage"));
          },
          m = (e) => {
            let l =
              null == e
                ? void 0
                : e.find((e) => e === c.L_.BSQ || e === c.L_.LSQ);
            return l;
          },
          v = async () => {
            let e,
              l =
                (null == u ? void 0 : u.campaignKey) ||
                (null == u ? void 0 : u.sCode),
              i = d.uR.getItem("sCode");
            d.uR.removeItem(c.P_.SITE_SESSION_DATA),
              l
                ? (d.uR.setItem("sCode", l), (e = await I.v.getScode(l)))
                : i
                ? (e = await I.v.getScode(i))
                : (d.uR.setItem("sCode", c.L_.DEFAULT),
                  (e = await I.v.getScode(c.L_.DEFAULT)));
            let n = d.uR.getItem(c.P_.SITE_SESSION_DATA),
              a = n ? n.site_session_id : (0, k.xv)(),
              s = { site_session_id: a, site_campaign_phone: c.CM };
            e &&
              m(e["Site ID"]) &&
              (s = {
                ...s,
                site_campaign_phone: e["Phone Number"],
                campaign_key: e["Campaign Key"],
                campaign_id: e["Campaign ID"],
                campaign_category: e.Category,
                campaign_partner: e.Partner ? e.Partner : null,
                utm_source: null,
                utm_medium: null,
                utm_campaign: null,
                utm_content: null,
                utm_term: null,
              }),
              n ? h({ ...n, ...s }) : h(s),
              p(s);
          },
          p = (e) => {
            let l;
            l = window.location.href;
            let i = {
              dataLayer: {
                event: "pageOnload",
                fullURL: l,
                session_id: null == e ? void 0 : e.site_session_id,
                sCode: null == e ? void 0 : e.campaign_key,
                CampaignID: null == e ? void 0 : e.campaign_id,
                campaignCategory: e.campaign_category,
                campaignPartner: e.campaign_partner,
                utm_source: e.utm_source,
                utm_medium: e.utm_medium,
                utm_campaign: e.utm_campaign,
                utm_content: e.utm_content,
                utm_term: e.utm_term,
              },
            };
            q().dataLayer(i);
          },
          x = () => {
            setTimeout(() => {
              var e = window.location.href,
                l = document.querySelector(".free-quote-btn");
              if (
                (l &&
                  (e.includes("final-expense")
                    ? (l.href =
                        "https://life.selectquote.com/final-expenses/quote-form/")
                    : e.includes("life")
                    ? (l.href = "https://life.selectquote.com/quote-form/")
                    : e.includes("medicare") &&
                      (l.href = "https://medicare.selectquote.com/quote-form")),
                e.includes("medicare"))
              ) {
                let e = document.createElement("script");
                (e.src = "https://cdn.optimizely.com/js/25067410829.js"),
                  document.head.appendChild(e);
              }
            }, 2e3);
          };
        return (
          (0, s.useEffect)(() => {
            x(),
              o && q().initialize({ gtmId: o }),
              q().initialize({ gtmId: c.Fl }),
              (window.history.scrollRestoration = "manual");
          }, []),
          (0, s.useEffect)(() => {
            v();
          }, [u]),
          (0, a.jsxs)(w.Z, {
            children: [
              (0, a.jsx)(N, { page: l }),
              i &&
                (() => {
                  let e = C().get(i, "sys.contentType.sys.id"),
                    l = D[e];
                  if (!l)
                    return (
                      console.warn("".concat(e, " can not be handled")), null
                    );
                  let { id: n } = i.sys;
                  return (0, a.jsx)(
                    l,
                    { header: i },
                    "".concat(e, "-").concat(n)
                  );
                })(),
              n,
            ],
          })
        );
      }
      let D = {
        [c.HV.MainHeader]: function (e) {
          var l, i, n, r, o, u, m, v, p, x, b;
          let { header: y } = e,
            N = (0, t.useRouter)(),
            {
              logo: w,
              logoWithTag: S,
              bannerText: k,
              menuItems: M,
              bannerItems: C,
              showBannerOnly: I,
              primaryPhoneNumber: P,
              secondaryPhoneNumber: q,
              workingHours: A,
            } = y.fields,
            D = (null == C ? void 0 : C.length) > 0,
            F = (0, s.useRef)(null),
            [L, T] = (0, s.useState)(!1),
            [z, E] = (0, s.useState)(!1),
            [O, _] = (0, s.useState)(0),
            [H, Y] = (0, s.useState)(c.CM),
            [R, B] = (0, s.useState)(""),
            Z = (0, s.useRef)(null),
            W = (0, s.useRef)(null),
            V = (0, t.useRouter)(),
            Q =
              (null !==
                (x =
                  null == Z
                    ? void 0
                    : null === (i = Z.current) || void 0 === i
                    ? void 0
                    : null === (l = i.getBoundingClientRect()) || void 0 === l
                    ? void 0
                    : l.height) && void 0 !== x
                ? x
                : 0) +
              (null !==
                (b =
                  null == W
                    ? void 0
                    : null === (r = W.current) || void 0 === r
                    ? void 0
                    : null === (n = r.getBoundingClientRect()) || void 0 === n
                    ? void 0
                    : n.height) && void 0 !== b
                ? b
                : 0);
          (0, s.useEffect)(() => {
            let e = () => {
              let e = d.uR.getItem(c.P_.SITE_SESSION_DATA);
              if (e) {
                let { site_campaign_phone: l } = e;
                Y(l);
              }
            };
            return (
              window.addEventListener("storage", e),
              () => {
                window.removeEventListener("storage", e);
              }
            );
          }, []),
            (0, s.useEffect)(() => {
              let e = d.uR.getItem(c.P_.SITE_SESSION_DATA);
              if (e) {
                let { site_campaign_phone: l, site_source_code: i } = e;
                Y(l), B(i);
              }
            }, [V.query.slug]);
          let U = (e) => {
            var l = new Event("input", { bubbles: !0, cancelable: !0 });
            e.dispatchEvent(l);
          };
          (0, s.useEffect)(() => {
            if (
              (L &&
                window.location.href.split("=")[1] &&
                setTimeout(() => {
                  let e = document.getElementsByTagName("input");
                  for (let l = 0; l < e.length; l++)
                    if ("search" === e[l].type) {
                      let i = decodeURI(window.location.href.split("=")[1]);
                      (e[l].value = i),
                        e[l].addEventListener("click", () => U(e[l]), !1),
                        e[l].click();
                    }
                }, 800),
              !L)
            ) {
              let { query: e } = N;
              delete e.search, N.push({ query: e });
            }
          }, [L]);
          let J = N.asPath,
            G = (e) => {
              let {
                linkUrl: l,
                linkText: i,
                hyperlink: n,
                parent: s,
                childItems: t,
              } = e.fields;
              return n
                ? (0, a.jsx)("div", {
                    children: (0, a.jsx)("a", {
                      href: "".concat(l),
                      className: "basicbtn",
                      onClick: () => T(!1),
                      children: i,
                    }),
                  })
                : s
                ? s
                  ? (0, a.jsxs)("div", {
                      className: "dropdown",
                      children: [
                        (0, a.jsx)("a", {
                          target: "_self",
                          rel: "noopener noreferrer",
                          className: "dropbtn",
                          children: i,
                        }),
                        (0, a.jsx)("div", {
                          className: "dropdown-content",
                          children:
                            null == t
                              ? void 0
                              : t.map((e, l) => $(e, "subchild".concat(l))),
                        }),
                      ],
                    })
                  : void 0
                : (0, a.jsx)("div", {
                    children: (0, a.jsx)("a", {
                      href: l,
                      className: "basicbtn",
                      onClick: () => T(!1),
                      children: i,
                    }),
                  });
            },
            $ = (e, l) => {
              let {
                linkUrl: i,
                linkText: n,
                hyperlink: s,
                parent: t,
                childItems: r,
              } = e.fields;
              return s && !t
                ? (0, a.jsx)(
                    "a",
                    {
                      href: "".concat(i),
                      onClick: () => T(!1),
                      children: (0, a.jsx)("div", {
                        className: "anchor-wrap",
                        children: n,
                      }),
                    },
                    l
                  )
                : t
                ? t
                  ? (0, a.jsx)(
                      j,
                      {
                        childItems: null != r ? r : [],
                        linkText: n,
                        linkUrl: i,
                        hyperlink: s,
                        parent: t,
                        renderSubChildLInk: $,
                      },
                      l
                    )
                  : void 0
                : (0, a.jsx)(
                    "a",
                    {
                      href: i,
                      target: "_self",
                      onClick: () => T(!1),
                      children: (0, a.jsx)("div", {
                        className: "anchor-wrap",
                        children: n,
                      }),
                    },
                    l
                  );
            };
          return (
            (0, s.useEffect)(() => {
              function e() {
                _(window.innerWidth);
              }
              return (
                _(window.innerWidth),
                window.addEventListener("resize", e),
                () => window.removeEventListener("resize", e)
              );
            }, []),
            (0, s.useEffect)(() => {
              if (null == F ? void 0 : F.current)
                return (
                  F.current.style.setProperty(
                    "--main-header-top-height",
                    "".concat(Q, "px")
                  ),
                  () => {
                    (null == F ? void 0 : F.current) &&
                      F.current.style.removeProperty(
                        "--main-header-top-height"
                      );
                  }
                );
            }, [F, Q]),
            (0, a.jsxs)("header", {
              ref: F,
              className: "content-header w-100 sticky-top".concat(
                D && !I ? " has-banner-items" : ""
              ),
              children: [
                I &&
                  (0, a.jsx)("div", {
                    className: "content-banner",
                    ref: Z,
                    children: (0, a.jsx)("div", {
                      className: "container h-100",
                      children: (0, a.jsx)("div", {
                        className: "d-flex h-100",
                        children: (0, a.jsxs)("div", {
                          className: "content-header-wrapper",
                          children: [
                            (0, a.jsx)("span", {
                              className: "content-header-text",
                              children: k,
                            }),
                            (0, a.jsxs)("div", {
                              className: "phone d-flex gap-2",
                              children: [
                                (0, a.jsx)("div", {
                                  className:
                                    "phone-icon d-flex align-items-center",
                                  children: J.includes("quote-form")
                                    ? (0, a.jsx)("img", {
                                        src: "/images/form/form-phone-icon.webp",
                                        width: 30,
                                        alt: "phone",
                                      })
                                    : (0, a.jsx)("img", {
                                        src: "/images/homepage/phone-icon-mobile.webp",
                                        width: 15,
                                        height: 20,
                                        alt: "phone",
                                      }),
                                }),
                                P
                                  ? (0, a.jsx)("a", {
                                      className: "phone-cta",
                                      href: "tel:".concat(P),
                                      children: P,
                                    })
                                  : (0, a.jsx)("a", {
                                      className: "phone-cta",
                                      href: "tel:".concat(H),
                                      children: H,
                                    }),
                                !!q &&
                                  (0, a.jsx)("a", {
                                    className: "secondary-phone",
                                    href: "tel:".concat(g(q)),
                                    children: q,
                                  }),
                              ],
                            }),
                            (0, a.jsx)("span", {
                              className: "content-header-text",
                              children: A,
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                !I &&
                  (0, a.jsxs)("div", {
                    children: [
                      (0, a.jsx)("div", {
                        className: "content-banner",
                        ref: Z,
                        children: (0, a.jsx)("div", {
                          className: "container h-100",
                          children: (0, a.jsxs)("div", {
                            className: "d-flex h-100",
                            children: [
                              (0, a.jsxs)("div", {
                                className: "content-header-wrapper",
                                children: [
                                  (0, a.jsx)("span", {
                                    className: "content-header-text",
                                    children: k,
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: "phone d-flex gap-2",
                                    children: [
                                      (0, a.jsx)("div", {
                                        className:
                                          "phone-icon d-flex align-items-center",
                                        children: J.includes("quote-form")
                                          ? (0, a.jsx)("img", {
                                              src: "/images/form/form-phone-icon.webp",
                                              width: 30,
                                              alt: "phone",
                                            })
                                          : (0, a.jsx)("img", {
                                              src: "/images/homepage/phone-icon-mobile.webp",
                                              width: 15,
                                              height: 20,
                                              alt: "phone",
                                            }),
                                      }),
                                      P
                                        ? (0, a.jsx)("a", {
                                            className: "phone-cta",
                                            href: "tel:".concat(H),
                                            children: P,
                                          })
                                        : (0, a.jsx)("a", {
                                            className: "phone-cta",
                                            href: "tel:".concat(H),
                                            children: H,
                                          }),
                                      !!q &&
                                        (0, a.jsx)("a", {
                                          className: "secondary-phone",
                                          href: "tel:".concat(g(q)),
                                          children: q,
                                        }),
                                    ],
                                  }),
                                  (0, a.jsx)("span", {
                                    className: "content-header-text",
                                    children: A,
                                  }),
                                ],
                              }),
                              O > 0 &&
                                O > 979 &&
                                (0, a.jsxs)("ul", {
                                  className: "banner-nav",
                                  children: [
                                    null == C
                                      ? void 0
                                      : C.map((e, l) =>
                                          (0, a.jsx)(
                                            "li",
                                            { children: G(e) },
                                            "menuItem".concat(l)
                                          )
                                        ),
                                    (0, a.jsx)("li", {
                                      className: "search-logo",
                                      onClick: () => {
                                        E(!1), T(!L);
                                      },
                                      children: (0, a.jsx)("img", {
                                        width: 14,
                                        height: 14,
                                        src: "/images/content/search-white.svg",
                                        alt: "search-icon",
                                      }),
                                    }),
                                  ],
                                }),
                            ],
                          }),
                        }),
                      }),
                      (0, a.jsxs)("div", {
                        className: "content-main-navbar",
                        ref: W,
                        children: [
                          O > 0 &&
                            O > 979 &&
                            (0, a.jsx)(f, {
                              hasBannerItems: !0,
                              items: null != M ? M : [],
                              logo: w,
                              setShowMobileMenu: E,
                              setShowSearch: T,
                              showSearch: L,
                            }),
                          O > 0 &&
                            O < 1024 &&
                            (0, a.jsxs)(a.Fragment, {
                              children: [
                                (0, a.jsxs)("div", {
                                  className:
                                    "container wp-container main-mobile-nav",
                                  children: [
                                    (0, a.jsx)("a", {
                                      href: "/",
                                      onClick: () => T(!1),
                                      children: (0, a.jsx)("img", {
                                        className: "logo",
                                        src:
                                          null == S
                                            ? void 0
                                            : null === (v = S.fields) ||
                                              void 0 === v
                                            ? void 0
                                            : null === (m = v.imageFile) ||
                                              void 0 === m
                                            ? void 0
                                            : null === (u = m.fields) ||
                                              void 0 === u
                                            ? void 0
                                            : null === (o = u.file) ||
                                              void 0 === o
                                            ? void 0
                                            : o.url,
                                        width: 300,
                                        height: 62,
                                        alt:
                                          (null == S
                                            ? void 0
                                            : null === (p = S.fields) ||
                                              void 0 === p
                                            ? void 0
                                            : p.imageName) || "logo",
                                      }),
                                    }),
                                    (0, a.jsxs)("div", {
                                      className: "right-buttons-group",
                                      children: [
                                        (0, a.jsx)("div", {
                                          className: "search-logo",
                                          onClick: () => {
                                            E(!1), T(!L);
                                          },
                                          children: (0, a.jsx)("img", {
                                            width: 24,
                                            height: 24,
                                            src: "/images/content/search.webp",
                                            alt: "search-icon",
                                          }),
                                        }),
                                        (0, a.jsx)("div", {
                                          className: "burger-logo".concat(
                                            z ? " active" : ""
                                          ),
                                          onClick: () => {
                                            T(!1), E(!z);
                                          },
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, a.jsx)(h, {
                                  items: [
                                    ...(null != M ? M : []),
                                    ...(null != C ? C : []),
                                  ],
                                  show: z,
                                }),
                              ],
                            }),
                          (0, a.jsx)("div", {
                            className: "search-container " + (L ? "show" : ""),
                            children: (0, a.jsxs)("div", {
                              className:
                                "container wp-container position-relative d-flex flex-column align-items-center",
                              children: [
                                (0, a.jsx)("div", {
                                  className: "close-btn",
                                  onClick: () => T(!1),
                                  children: (0, a.jsx)("img", {
                                    src: "/images/content/close.svg",
                                  }),
                                }),
                                (0, a.jsx)("div", {
                                  id: "searchfield-container",
                                }),
                                (0, a.jsx)("div", {
                                  id: "autocomplete-container",
                                }),
                                (0, a.jsx)("div", { id: "tabs" }),
                                (0, a.jsx)("div", {
                                  className: "select-wrapper",
                                  children: (0, a.jsx)("div", {
                                    id: "select-list",
                                  }),
                                }),
                                (0, a.jsx)("div", {
                                  id: "searchresults-container",
                                }),
                                (0, a.jsx)("div", { id: "loadmore" }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
              ],
            })
          );
        },
        [c.HV.RocketLawyerHeader]: (e) => {
          var l,
            i,
            n,
            r,
            o,
            u,
            h,
            m,
            v,
            p,
            x,
            f,
            g,
            j,
            b,
            y,
            N,
            w,
            M,
            C,
            I,
            P,
            q,
            A;
          let { header: D } = e,
            { deviceSize: F } = (0, S.b)(),
            { primaryNumber: L, secondaryNumber: T } = D.fields,
            [z, E] = (0, s.useState)(c.CM),
            [O, _] = (0, s.useState)(""),
            H = (0, t.useRouter)();
          return (
            (0, s.useEffect)(() => {
              let e = () => {
                let e = d.uR.getItem(c.P_.SITE_SESSION_DATA);
                if (e) {
                  let { site_campaign_phone: l } = e;
                  E(l);
                }
              };
              return (
                window.addEventListener("storage", e),
                () => {
                  window.removeEventListener("storage", e);
                }
              );
            }, []),
            (0, s.useEffect)(() => {
              let e = d.uR.getItem(c.P_.SITE_SESSION_DATA);
              if (e) {
                let { site_campaign_phone: l, site_source_code: i } = e;
                E(l), _(i);
              }
            }, [H.query.slug]),
            (0, a.jsx)("div", {
              children: (0, a.jsxs)("div", {
                className: "content-main-navbar",
                children: [
                  (0, k.sD)(F) &&
                    (0, a.jsxs)("ul", {
                      className: "main-nav d-flex rocket-section-nav",
                      children: [
                        (0, a.jsx)("li", {
                          className: "right-border",
                          children: (0, a.jsx)("a", {
                            href: "/",
                            children: (0, a.jsx)("img", {
                              src:
                                null == D
                                  ? void 0
                                  : null === (u = D.fields) || void 0 === u
                                  ? void 0
                                  : null === (o = u.appLogo) || void 0 === o
                                  ? void 0
                                  : null === (r = o.fields) || void 0 === r
                                  ? void 0
                                  : null === (n = r.imageFile) || void 0 === n
                                  ? void 0
                                  : null === (i = n.fields) || void 0 === i
                                  ? void 0
                                  : null === (l = i.file) || void 0 === l
                                  ? void 0
                                  : l.url,
                              width: 254,
                              height: 54,
                            }),
                          }),
                        }),
                        (0, a.jsx)("li", {
                          className: "rocket-logo right-border",
                          children: (0, a.jsx)("a", {
                            href: "/",
                            className: "rocket-logo-link",
                            children: (0, a.jsx)("img", {
                              src:
                                null == D
                                  ? void 0
                                  : null === (f = D.fields) || void 0 === f
                                  ? void 0
                                  : null === (x = f.rocketLawyerLogo) ||
                                    void 0 === x
                                  ? void 0
                                  : null === (p = x.fields) || void 0 === p
                                  ? void 0
                                  : null === (v = p.imageFile) || void 0 === v
                                  ? void 0
                                  : null === (m = v.fields) || void 0 === m
                                  ? void 0
                                  : null === (h = m.file) || void 0 === h
                                  ? void 0
                                  : h.url,
                              width: 210,
                              height: 35,
                            }),
                          }),
                        }),
                        (0, a.jsx)("div", {
                          className:
                            "phone d-flex align-items-center justify-content-center rocket-phone",
                          children: (0, a.jsxs)("div", {
                            className:
                              "phone-icon d-flex align-items-center phone-number-container",
                            children: [
                              (0, a.jsx)("img", {
                                className: "rocket-tel-icon",
                                src: "/images/homepage/rocket-tel-icon.svg",
                                width: 15,
                                height: 20,
                                alt: "phone",
                              }),
                              (0, a.jsx)("a", {
                                className: "rocket-number",
                                href: "tel:".concat(z),
                                children: z,
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  (0, k.UJ)(F) &&
                    (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsxs)("div", {
                          className:
                            "container wp-container main-mobile-nav d-flex justify-content-center",
                          children: [
                            (0, a.jsx)("div", {
                              className: "right-border-mobile",
                              children: (0, a.jsx)("a", {
                                href: "/",
                                children: (0, a.jsx)("img", {
                                  src:
                                    null == D
                                      ? void 0
                                      : null === (w = D.fields) || void 0 === w
                                      ? void 0
                                      : null === (N = w.appLogo) || void 0 === N
                                      ? void 0
                                      : null === (y = N.fields) || void 0 === y
                                      ? void 0
                                      : null === (b = y.imageFile) ||
                                        void 0 === b
                                      ? void 0
                                      : null === (j = b.fields) || void 0 === j
                                      ? void 0
                                      : null === (g = j.file) || void 0 === g
                                      ? void 0
                                      : g.url,
                                  width: 139,
                                  height: 29,
                                }),
                              }),
                            }),
                            (0, a.jsx)("a", {
                              href: "/",
                              className: "rocket-mobile-logo",
                              children: (0, a.jsx)("img", {
                                src:
                                  null == D
                                    ? void 0
                                    : null === (A = D.fields) || void 0 === A
                                    ? void 0
                                    : null === (q = A.rocketLawyerLogo) ||
                                      void 0 === q
                                    ? void 0
                                    : null === (P = q.fields) || void 0 === P
                                    ? void 0
                                    : null === (I = P.imageFile) || void 0 === I
                                    ? void 0
                                    : null === (C = I.fields) || void 0 === C
                                    ? void 0
                                    : null === (M = C.file) || void 0 === M
                                    ? void 0
                                    : M.url,
                                width: 145,
                                height: 25,
                              }),
                            }),
                          ],
                        }),
                        (0, a.jsx)("div", {
                          className:
                            "rocket-content-banner d-flex align-items-center justify-content-center",
                          children: (0, a.jsxs)("div", {
                            className:
                              "phone-icon d-flex align-items-center phone-number-mobile-container",
                            children: [
                              (0, a.jsx)("img", {
                                src: "/images/homepage/phone-icon-mobile.webp",
                                width: 15,
                                height: 20,
                                alt: "phone",
                              }),
                              (0, a.jsx)("a", {
                                className: "rocket-number-mobile",
                                href: "tel:".concat(L),
                                children: L,
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                ],
              }),
            })
          );
        },
      };
    },
    8596: function (e, l, i) {
      i.d(l, {
        H: function () {
          return eX;
        },
      });
      var n,
        a,
        s,
        t,
        r = i(5893),
        o = i(7294),
        d = i(6486),
        c = i.n(d),
        u = i(2510),
        h = i(9429),
        m = i(6518);
      ((n = s || (s = {})).Desktop = "Desktop"),
        (n.Mobile = "Mobile"),
        (n.Tablet = "Tablet");
      let v = (e) => {
          switch (e) {
            case "textColor":
              return "color";
            case "direction":
              return "flexDirection";
            default:
              return e;
          }
        },
        p = (e, l) => {
          if ("direction" === e)
            switch (l) {
              case m.N.Horizontal:
                return "row";
              case m.N.Vertical:
                return "column";
              case m.N.HorizontalReverse:
                return "row-reverse";
              case m.N.VerticalReverse:
                return "column-reverse";
            }
          return l;
        };
      var x = i(4129),
        f = i(6437),
        g = i(57);
      let j = ["_blank", "_self"];
      function b(e) {
        var l;
        let i =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          n = null === (l = i.shift()) || void 0 === l ? void 0 : l.type;
        switch (n) {
          case "bold":
            return (0, r.jsx)("strong", { children: b(e, i) });
          case "italic":
            return (0, r.jsx)("em", { children: b(e, i) });
          default:
            return (0, r.jsx)(r.Fragment, { children: e });
        }
      }
      let y = (e) => {
        var l, i;
        let { primaryColor: n } = (0, g.b)(),
          a =
            "AssetLink" === e.type ? e.data.target.fields.file.url : e.data.uri;
        return (
          null == e
            ? void 0
            : null === (i = e.data) || void 0 === i
            ? void 0
            : null === (l = i.uri) || void 0 === l
            ? void 0
            : l.includes("_download")
        )
          ? ((l) => {
              let i = l.split("/"),
                a = e.data.uri.includes("_external"),
                s = e.data.uri.includes("_download"),
                t = { ...(s && !a && { download: "/".concat(i[2]) }) };
              return (0, r.jsx)("a", {
                className: "richtext-hyperlink",
                href: "/documents/".concat(i[2]),
                ...t,
                target: a ? "_blank" : "",
                rel: a ? "noopener noreferrer" : "",
                style: {
                  color: n || "#07aec7",
                  textDecoration: "none",
                  fontWeight: 700,
                },
                children: b(e.content[0].value, e.content[0].marks),
              });
            })(e.data.uri)
          : !(function (e) {
              if (void 0 != e || "" != e) {
                var l = e.match(
                  /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/
                );
                return !!l && 11 == l[2].length;
              }
            })(e.data.uri)
          ? (0, r.jsx)("a", {
              className: "richtext-hyperlink",
              ...(function (e) {
                let l = j.find((l) => e.startsWith("".concat(l, ":")));
                return { href: e.substring(l ? l.length + 1 : 0), target: l };
              })(a || "/"),
              style: {
                color: n || "#07aec7",
                textDecoration: "none",
                fontWeight: 700,
              },
              children: b(e.content[0].value, e.content[0].marks),
            })
          : (0, r.jsx)("iframe", {
              id: "ytplayer",
              src: e.data.uri,
              className: "iframe",
              width: "100%",
              allow:
                "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture ; fullscreen",
            });
      };
      var N = i(5675),
        w = i.n(N);
      let S = (e) => {
          var l, i, n, a, s, t, o, d, c, u, h, m, v, p, x, f, g;
          let { data: j, device: b } = e,
            y =
              null == j
                ? void 0
                : null === (i = j.target) || void 0 === i
                ? void 0
                : null === (l = i.fields) || void 0 === l
                ? void 0
                : l.file.contentType.includes("image");
          return y
            ? (0, r.jsx)(w(), {
                src: "https:".concat(
                  null == j
                    ? void 0
                    : null === (s = j.target) || void 0 === s
                    ? void 0
                    : null === (a = s.fields) || void 0 === a
                    ? void 0
                    : null === (n = a.file) || void 0 === n
                    ? void 0
                    : n.url
                ),
                width:
                  null == j
                    ? void 0
                    : null === (u = j.target) || void 0 === u
                    ? void 0
                    : null === (c = u.fields) || void 0 === c
                    ? void 0
                    : null === (d = c.file) || void 0 === d
                    ? void 0
                    : null === (o = d.details) || void 0 === o
                    ? void 0
                    : null === (t = o.image) || void 0 === t
                    ? void 0
                    : t.width,
                height:
                  null == j
                    ? void 0
                    : null === (x = j.target) || void 0 === x
                    ? void 0
                    : null === (p = x.fields) || void 0 === p
                    ? void 0
                    : null === (v = p.file) || void 0 === v
                    ? void 0
                    : null === (m = v.details) || void 0 === m
                    ? void 0
                    : null === (h = m.image) || void 0 === h
                    ? void 0
                    : h.height,
                alt:
                  null == j
                    ? void 0
                    : null === (g = j.target) || void 0 === g
                    ? void 0
                    : null === (f = g.fields) || void 0 === f
                    ? void 0
                    : f.title,
                style: {
                  border: null == b ? void 0 : b.border,
                  display: null == b ? void 0 : b.display,
                  flex: null == b ? void 0 : b.flex,
                  float: null == b ? void 0 : b.float,
                  height: null == b ? void 0 : b.height,
                  margin: null == b ? void 0 : b.margin,
                  maxWidth: null == b ? void 0 : b.maxWidth,
                  minHeight: null == b ? void 0 : b.minHeight,
                  width: null == b ? void 0 : b.width,
                },
              })
            : null;
        },
        k = (e) => (l) => S({ ...l, device: e });
      var M = i(7204),
        C = i.n(M),
        I = i(1469),
        P = i.n(I),
        q = i(7037),
        A = i.n(q);
      let D = (e) => (0, r.jsx)(y, { ...e, type: "PlainLink" }),
        F = (e) => (0, r.jsx)(y, { ...e, type: "AssetLink" }),
        L = function (e) {
          let l =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
          return l.length
            ? C()(
                l
                  .map((l) => [v(l), p(l, null == e ? void 0 : e[l])])
                  .filter((e) => {
                    let [, l] = e;
                    return void 0 !== l;
                  })
              )
            : {};
        },
        T = (e, l) => {
          let i = Object.keys(e);
          return i.length > 0 && P()(l)
            ? l.map((l) =>
                P()(l)
                  ? l.map((l) => {
                      if (!A()(l)) return l;
                      var n = l;
                      return (
                        i.forEach((l) => {
                          n = n.replace("{".concat(l, "}"), e[l]);
                        }),
                        n
                      );
                    })
                  : l
              )
            : l;
        };
      var z = (e) => {
          let {
              text: l,
              device: i,
              imageDevice: n,
              applyDeviceStyles: a = [],
              variables: s = {},
            } = e,
            t = k(n);
          return (0, r.jsx)(r.Fragment, {
            children: (0, x.h)(l, {
              renderNode: {
                [f.INLINES.HYPERLINK]: D,
                [f.INLINES.ASSET_HYPERLINK]: F,
                [f.INLINES.ENTRY_HYPERLINK]: () => null,
                [f.BLOCKS.EMBEDDED_ASSET]: t,
                [f.BLOCKS.LIST_ITEM]: (e, l) =>
                  (0, r.jsx)("li", {
                    style: { color: null == i ? void 0 : i.textColor },
                    children: l,
                  }),
                [f.BLOCKS.PARAGRAPH]: (e, l) =>
                  (0, r.jsx)("span", {
                    style: {
                      fontWeight: "".concat(null == i ? void 0 : i.fontWeight),
                      color: "".concat(null == i ? void 0 : i.textColor),
                      fontSize: "".concat(null == i ? void 0 : i.fontSize),
                      lineHeight: "".concat(null == i ? void 0 : i.lineHeight),
                      letterSpacing: "".concat(
                        null == i ? void 0 : i.letterSpacing
                      ),
                      fontFamily: "".concat(null == i ? void 0 : i.fontFamily),
                      overflowWrap: "".concat(
                        null == i ? void 0 : i.overflowWrap
                      ),
                      background: null == i ? void 0 : i.backgroundColor,
                      wordBreak: null == i ? void 0 : i.wordBreak,
                      ...L(i, a),
                    },
                    children: T(s, l),
                  }),
              },
              renderText: (e) =>
                e
                  .split("\n")
                  .flatMap((e, l) => [
                    l > 0 &&
                      (0, r.jsx)(
                        "div",
                        { style: { paddingBottom: "10px" } },
                        l.toString()
                      ),
                    e,
                  ]),
            }),
          });
        },
        E = (e) => {
          var l, i, n, a, t, o, d, c, u, m, v, p, x, f, j, b, y, N;
          let { section: w } = e,
            {
              content: S,
              devices: k,
              contentId: M,
              scrollTopMargin: C,
            } = w.fields,
            { deviceSize: I, richtextVariables: P } = (0, g.b)(),
            q =
              null == k
                ? void 0
                : k.find((e) => {
                    var l;
                    return (
                      (null === (l = e.fields) || void 0 === l
                        ? void 0
                        : l.type) === s.Desktop
                    );
                  }),
            A =
              null == k
                ? void 0
                : k.find((e) => {
                    var l;
                    return (
                      (null === (l = e.fields) || void 0 === l
                        ? void 0
                        : l.type) === s.Mobile
                    );
                  });
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, h.sD)(I) &&
                (0, r.jsx)("span", {
                  id: M,
                  style: {
                    padding: "".concat(
                      null == q
                        ? void 0
                        : null === (l = q.fields) || void 0 === l
                        ? void 0
                        : l.padding
                    ),
                    margin: "".concat(
                      null == q
                        ? void 0
                        : null === (i = q.fields) || void 0 === i
                        ? void 0
                        : i.margin
                    ),
                    width: "".concat(
                      null == q
                        ? void 0
                        : null === (n = q.fields) || void 0 === n
                        ? void 0
                        : n.width
                    ),
                    textAlign: "".concat(
                      null == q
                        ? void 0
                        : null === (a = q.fields) || void 0 === a
                        ? void 0
                        : a.textAlign
                    ),
                    display: (
                      null == q
                        ? void 0
                        : null === (t = q.fields) || void 0 === t
                        ? void 0
                        : t.display
                    )
                      ? null == q
                        ? void 0
                        : null === (o = q.fields) || void 0 === o
                        ? void 0
                        : o.display
                      : "inline-block",
                    scrollMarginTop: "".concat(C),
                    maxWidth:
                      null == q
                        ? void 0
                        : null === (d = q.fields) || void 0 === d
                        ? void 0
                        : d.maxWidth,
                    wordBreak: "".concat(
                      null == q
                        ? void 0
                        : null === (c = q.fields) || void 0 === c
                        ? void 0
                        : c.wordBreak
                    ),
                    border: "".concat(
                      null == q
                        ? void 0
                        : null === (u = q.fields) || void 0 === u
                        ? void 0
                        : u.border
                    ),
                  },
                  children: (0, r.jsx)(z, {
                    text: S,
                    device: null == q ? void 0 : q.fields,
                    variables: P,
                  }),
                }),
              (0, h.UJ)(I) &&
                (0, r.jsx)("span", {
                  id: M,
                  style: {
                    padding: "".concat(
                      null == A
                        ? void 0
                        : null === (m = A.fields) || void 0 === m
                        ? void 0
                        : m.padding
                    ),
                    margin: "".concat(
                      null == A
                        ? void 0
                        : null === (v = A.fields) || void 0 === v
                        ? void 0
                        : v.margin
                    ),
                    textAlign: "".concat(
                      null == A
                        ? void 0
                        : null === (p = A.fields) || void 0 === p
                        ? void 0
                        : p.textAlign
                    ),
                    width: "".concat(
                      null == A
                        ? void 0
                        : null === (x = A.fields) || void 0 === x
                        ? void 0
                        : x.width
                    ),
                    display: (
                      null == A
                        ? void 0
                        : null === (f = A.fields) || void 0 === f
                        ? void 0
                        : f.display
                    )
                      ? null == A
                        ? void 0
                        : null === (j = A.fields) || void 0 === j
                        ? void 0
                        : j.display
                      : "inline-block",
                    scrollMarginTop: "".concat(C),
                    maxWidth:
                      null == A
                        ? void 0
                        : null === (b = A.fields) || void 0 === b
                        ? void 0
                        : b.maxWidth,
                    wordBreak:
                      null == A
                        ? void 0
                        : null === (y = A.fields) || void 0 === y
                        ? void 0
                        : y.wordBreak,
                    border: "".concat(
                      null == A
                        ? void 0
                        : null === (N = A.fields) || void 0 === N
                        ? void 0
                        : N.border
                    ),
                  },
                  children: (0, r.jsx)(z, {
                    text: S,
                    device: null == A ? void 0 : A.fields,
                    variables: P,
                  }),
                }),
            ],
          });
        },
        O = i(5401);
      let _ = (e) => {
          let {
              children: l,
              externalLink: i,
              link: n,
              device: a,
              download: s,
            } = e,
            t = { ...(s && !i && { download: n }) };
          return (
            (n = s ? "/documents".concat(n) : n),
            (0, r.jsx)("a", {
              style: { width: (null == a ? void 0 : a.widthPercentage) + "%" },
              rel: i ? "noopener noreferrer" : "",
              target: i ? "_blank" : "",
              href: "".concat(n),
              ...t,
              children: l,
            })
          );
        },
        H = (e) => {
          var l, i, n, a, s, t, d, c, u, h, m, x, f, g, j, b, y, N, S, k, M, I;
          let { section: P, device: q } = e,
            [A, D] = (0, o.useState)(null),
            [F, L] = (0, o.useState)(!1),
            {
              imageName: T,
              fill: z,
              applyDeviceStyles: E = [],
              hoverTrigger: O,
            } = P.fields,
            _ = F ? P.fields.hoverImage : P.fields.imageFile,
            H = (null == q ? void 0 : q.height) === "auto",
            Y = H
              ? null == _
                ? void 0
                : null === (a = _.fields) || void 0 === a
                ? void 0
                : null === (n = a.file) || void 0 === n
                ? void 0
                : null === (i = n.details) || void 0 === i
                ? void 0
                : null === (l = i.image) || void 0 === l
                ? void 0
                : l.width
              : (null == q ? void 0 : q.width)
              ? null == q
                ? void 0
                : q.width.replace("px", "")
              : null == _
              ? void 0
              : null === (c = _.fields) || void 0 === c
              ? void 0
              : null === (d = c.file) || void 0 === d
              ? void 0
              : null === (t = d.details) || void 0 === t
              ? void 0
              : null === (s = t.image) || void 0 === s
              ? void 0
              : s.width,
            R = H
              ? null == _
                ? void 0
                : null === (x = _.fields) || void 0 === x
                ? void 0
                : null === (m = x.file) || void 0 === m
                ? void 0
                : null === (h = m.details) || void 0 === h
                ? void 0
                : null === (u = h.image) || void 0 === u
                ? void 0
                : u.height
              : (null == q ? void 0 : q.height)
              ? null == q
                ? void 0
                : q.height.replace("px", "")
              : null == _
              ? void 0
              : null === (b = _.fields) || void 0 === b
              ? void 0
              : null === (j = b.file) || void 0 === j
              ? void 0
              : null === (g = j.details) || void 0 === g
              ? void 0
              : null === (f = g.image) || void 0 === f
              ? void 0
              : f.height,
            B = {
              height: "auto",
              maxWidth: null == q ? void 0 : q.maxWidth,
              width: null == q ? void 0 : q.width,
            },
            Z = C()(
              E.map((e) => [v(e), p(e, null == q ? void 0 : q[e])]).filter(
                (e) => {
                  let [, l] = e;
                  return void 0 !== l;
                }
              )
            );
          return (
            (0, o.useEffect)(() => {
              if (O && A)
                for (var e = A.parentElement; e; ) {
                  let l = e.querySelector(O);
                  if (l) {
                    let e = () => L(!0),
                      i = () => L(!1);
                    return (
                      l.addEventListener("mouseover", e),
                      l.addEventListener("mouseout", i),
                      () => {
                        l.removeEventListener("mouseover", e),
                          l.removeEventListener("mouseout", i);
                      }
                    );
                  }
                  e = e.parentElement;
                }
            }, [O, A]),
            (0, r.jsx)("span", {
              className: "image-container",
              style: {
                width: (null == q ? void 0 : q.widthPercentage) + "%",
                ...(H ? { display: null == q ? void 0 : q.display } : {}),
                boxShadow: null == q ? void 0 : q.boxShadow,
              },
              ref: D,
              children: z
                ? (0, r.jsx)(w(), {
                    quality: 100,
                    style: {
                      borderRadius: null == q ? void 0 : q.borderRadius,
                      ...Z,
                    },
                    src: "https:".concat(
                      null == _
                        ? void 0
                        : null === (N = _.fields) || void 0 === N
                        ? void 0
                        : null === (y = N.file) || void 0 === y
                        ? void 0
                        : y.url
                    ),
                    fill: !0,
                    className: "image h-unset",
                    alt:
                      T ||
                      (null == _
                        ? void 0
                        : null === (S = _.fields) || void 0 === S
                        ? void 0
                        : S.title),
                  })
                : (0, r.jsx)(w(), {
                    quality: 100,
                    style: {
                      borderRadius: null == q ? void 0 : q.borderRadius,
                      ...(H ? B : {}),
                      ...Z,
                    },
                    src: "https:".concat(
                      null == _
                        ? void 0
                        : null === (M = _.fields) || void 0 === M
                        ? void 0
                        : null === (k = M.file) || void 0 === k
                        ? void 0
                        : k.url
                    ),
                    width: Number(Y),
                    height: Number(R),
                    className: "image ",
                    alt:
                      T ||
                      (null == _
                        ? void 0
                        : null === (I = _.fields) || void 0 === I
                        ? void 0
                        : I.title),
                  }),
            })
          );
        };
      var Y = (e) => {
          var l, i, n, a, t, o;
          let { section: d } = e,
            { externalLink: c, link: u, tooltip: m } = d.fields,
            v =
              null == d
                ? void 0
                : null === (i = d.fields) || void 0 === i
                ? void 0
                : null === (l = i.devices) || void 0 === l
                ? void 0
                : l.find((e) => {
                    var l;
                    return (
                      (null == e
                        ? void 0
                        : null === (l = e.fields) || void 0 === l
                        ? void 0
                        : l.type) === s.Desktop
                    );
                  }),
            p =
              null == d
                ? void 0
                : null === (a = d.fields) || void 0 === a
                ? void 0
                : null === (n = a.devices) || void 0 === n
                ? void 0
                : n.find((e) => {
                    var l;
                    return (
                      (null == e
                        ? void 0
                        : null === (l = e.fields) || void 0 === l
                        ? void 0
                        : l.type) === s.Mobile
                    );
                  }),
            { deviceSize: x } = (0, g.b)(),
            f = () => {
              var e, l, i, n, a;
              return (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, h.sD)(x) &&
                    (m
                      ? (0, r.jsx)("a", {
                          "data-tooltip-id":
                            null == m
                              ? void 0
                              : null === (e = m.fields) || void 0 === e
                              ? void 0
                              : e.tooltipId,
                          children: (0, r.jsx)(H, {
                            device: null == v ? void 0 : v.fields,
                            section: d,
                          }),
                        })
                      : (0, r.jsx)(H, {
                          device: null == v ? void 0 : v.fields,
                          section: d,
                        })),
                  (0, h.UJ)(x) &&
                    (m
                      ? (0, r.jsx)("a", {
                          "data-tooltip-id":
                            null == m
                              ? void 0
                              : null === (l = m.fields) || void 0 === l
                              ? void 0
                              : l.tooltipId,
                          children: (0, r.jsx)(H, {
                            device: null == p ? void 0 : p.fields,
                            section: d,
                          }),
                        })
                      : (0, r.jsx)(H, {
                          device: null == p ? void 0 : p.fields,
                          section: d,
                        })),
                  m &&
                    (0, r.jsx)(O.u, {
                      id:
                        null == m
                          ? void 0
                          : null === (i = m.fields) || void 0 === i
                          ? void 0
                          : i.tooltipId,
                      className: "tooltip",
                      openOnClick:
                        null == m
                          ? void 0
                          : null === (n = m.fields) || void 0 === n
                          ? void 0
                          : n.openOnClick,
                      clickable: !0,
                      children: (0, r.jsx)(z, {
                        text:
                          null == m
                            ? void 0
                            : null === (a = m.fields) || void 0 === a
                            ? void 0
                            : a.content,
                      }),
                    }),
                ],
              });
            };
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, h.sD)(x) &&
                (u
                  ? (0, r.jsx)(_, {
                      externalLink: c,
                      link: u,
                      device: v,
                      download:
                        null == d
                          ? void 0
                          : null === (t = d.fields) || void 0 === t
                          ? void 0
                          : t.download,
                      children: f(),
                    })
                  : f()),
              (0, h.UJ)(x) &&
                (u
                  ? (0, r.jsx)(_, {
                      externalLink: c,
                      link: u,
                      device: p,
                      download:
                        null == d
                          ? void 0
                          : null === (o = d.fields) || void 0 === o
                          ? void 0
                          : o.download,
                      children: f(),
                    })
                  : f()),
            ],
          });
        },
        R = (e) => {
          var l, i;
          let { section: n } = e,
            {
              type: a,
              underline: t,
              externalLink: d,
              applyDeviceStyles: c = [],
              applyHoverStyles: u = [],
              devices: m,
              hoverStyles: x,
              download: f,
              linkUrl: j,
            } = n.fields,
            { deviceSize: b } = (0, g.b)(),
            [y, N] = (0, o.useState)(!1),
            w = n.fields.title,
            S = "",
            k = 0;
          for (;;) {
            let e = w.indexOf("\xae", k);
            if (-1 === e) {
              S += w.substring(k);
              break;
            }
            (S += w.substring(k, e) + "<sup>\xae</sup>"), (k = e + 1);
          }
          let M = { ...(f && !d && { download: j }) };
          j = f ? "/documents".concat(j) : j;
          let I = (0, h.sD)(b)
              ? null == m
                ? void 0
                : m.find((e) => {
                    var l;
                    return (
                      (null == e
                        ? void 0
                        : null === (l = e.fields) || void 0 === l
                        ? void 0
                        : l.type) === s.Desktop
                    );
                  })
              : (0, h.UJ)(b)
              ? null == m
                ? void 0
                : m.find((e) => {
                    var l;
                    return (
                      (null == e
                        ? void 0
                        : null === (l = e.fields) || void 0 === l
                        ? void 0
                        : l.type) === s.Mobile
                    );
                  })
              : void 0,
            P = (0, h.sD)(b)
              ? null == x
                ? void 0
                : x.find((e) => {
                    var l;
                    return (
                      (null == e
                        ? void 0
                        : null === (l = e.fields) || void 0 === l
                        ? void 0
                        : l.type) === s.Desktop
                    );
                  })
              : (0, h.UJ)(b)
              ? null == x
                ? void 0
                : x.find((e) => {
                    var l;
                    return (
                      (null == e
                        ? void 0
                        : null === (l = e.fields) || void 0 === l
                        ? void 0
                        : l.type) === s.Mobile
                    );
                  })
              : void 0,
            q = C()(
              c
                .map((e) => {
                  var l;
                  return [
                    v(e),
                    p(
                      e,
                      null == I
                        ? void 0
                        : null === (l = I.fields) || void 0 === l
                        ? void 0
                        : l[e]
                    ),
                  ];
                })
                .filter((e) => {
                  let [, l] = e;
                  return void 0 !== l;
                })
            ),
            A = C()(
              u.map((e) => {
                var l;
                return [
                  v(e),
                  p(
                    e,
                    null == P
                      ? void 0
                      : null === (l = P.fields) || void 0 === l
                      ? void 0
                      : l[e]
                  ),
                ];
              })
            );
          return (0, r.jsx)("a", {
            title: n.fields.title,
            href:
              null !== (i = n.fields.scrollToId) && void 0 !== i ? i : j || "/",
            ...M,
            className: "Button" === a ? "link-button hyperlink" : "hyperlink",
            target: d ? "_blank" : "",
            rel: d ? "noopener noreferrer" : "",
            onMouseOver: () => N(!0),
            onMouseOut: () => N(!1),
            style: {
              color: null === (l = n.fields) || void 0 === l ? void 0 : l.color,
              textDecoration: t ? "underline" : "none",
              fontSize: n.fields.fontSize,
              fontWeight: n.fields.fontWeight,
              transition: "0.3s ease all",
              ...q,
              ...(y ? A : {}),
            },
            children: (0, r.jsx)("span", {
              dangerouslySetInnerHTML: { __html: S },
            }),
          });
        },
        B = (e) => {
          var l;
          let { section: i } = e,
            n =
              null == i
                ? void 0
                : null === (l = i.fields) || void 0 === l
                ? void 0
                : l.margin;
          return (
            (0, o.useEffect)(() => {
              setTimeout(() => {
                if (window.location.href.includes("page_anchor=")) {
                  let e = window.location.href.replace(/.*\=/, ""),
                    l = document.getElementById(e);
                  l.scrollIntoView({ behavior: "smooth" });
                }
              }, 500);
            }, []),
            (0, r.jsx)("div", { style: { margin: n } })
          );
        },
        Z = i(7397),
        W = i(956),
        V = (e) => {
          var l, i, n;
          let { section: a } = e,
            { title: t, list: d, devices: c } = a.fields,
            u =
              null == c
                ? void 0
                : c.find((e) => {
                    var l;
                    return (
                      (null === (l = e.fields) || void 0 === l
                        ? void 0
                        : l.type) === s.Desktop
                    );
                  }),
            m =
              null == c
                ? void 0
                : c.find((e) => {
                    var l;
                    return (
                      (null === (l = e.fields) || void 0 === l
                        ? void 0
                        : l.type) === s.Mobile
                    );
                  }),
            { deviceSize: v } = (0, g.b)(),
            [p, x] = (0, o.useState)([]),
            f = (e) => p.includes(e),
            j = (e) => {
              var l, i, n, a;
              return (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)("button", {
                    className:
                      "rounded-circle accordion-symbol wp-container-desktop",
                    style: {
                      background: f(e)
                        ? null == u
                          ? void 0
                          : null === (l = u.fields) || void 0 === l
                          ? void 0
                          : l.textColor
                        : null == u
                        ? void 0
                        : null === (i = u.fields) || void 0 === i
                        ? void 0
                        : i.textColor,
                    },
                    children: f(e) ? "-" : "+",
                  }),
                  (0, r.jsx)("button", {
                    className:
                      "rounded-circle accordion-symbol wp-container-mobile",
                    style: {
                      background: f(e)
                        ? null == m
                          ? void 0
                          : null === (n = m.fields) || void 0 === n
                          ? void 0
                          : n.textColor
                        : null == m
                        ? void 0
                        : null === (a = m.fields) || void 0 === a
                        ? void 0
                        : a.textColor,
                    },
                    children: f(e) ? "-" : "+",
                  }),
                ],
              });
            },
            b = (e) => {
              x((l) => (l.includes(e) ? l.filter((l) => l !== e) : [...l, e]));
            };
          return (
            (0, o.useEffect)(() => {
              b(d[0].sys.id);
            }, [1]),
            (0, r.jsx)("div", {
              className: "accordian-model",
              children: (0, r.jsx)("div", {
                children:
                  !(null == m
                    ? void 0
                    : null === (l = m.fields) || void 0 === l
                    ? void 0
                    : l.hidden) &&
                  (0, r.jsx)(r.Fragment, {
                    children:
                      (0, h.UJ)(v) &&
                      (0, r.jsx)("section", {
                        style: {
                          padding:
                            null == m
                              ? void 0
                              : null === (i = m.fields) || void 0 === i
                              ? void 0
                              : i.padding,
                          margin:
                            null == m
                              ? void 0
                              : null === (n = m.fields) || void 0 === n
                              ? void 0
                              : n.margin,
                        },
                        className: "faqs-section-mobile ",
                        children: (0, r.jsxs)("div", {
                          className: "faq-container",
                          children: [
                            (0, r.jsx)("h2", { children: t }),
                            (0, r.jsx)(Z.Z, {
                              activeKey: p,
                              className: "accordion-card",
                              children: d.map((e, l) =>
                                (0, r.jsxs)(
                                  W.Z,
                                  {
                                    onClick: () => b(e.sys.id),
                                    className: "".concat(
                                      f(e.sys.id)
                                        ? "card-active"
                                        : "card-inactive"
                                    ),
                                    children: [
                                      (0, r.jsx)(W.Z.Header, {
                                        children: (0, r.jsxs)("div", {
                                          className: "faq-title",
                                          children: [
                                            (0, r.jsx)("span", {
                                              className: "header-title",
                                              children: (0, r.jsx)(z, {
                                                text: e.fields.question,
                                              }),
                                            }),
                                            j(e.sys.id),
                                          ],
                                        }),
                                      }),
                                      (0, r.jsx)(Z.Z.Collapse, {
                                        eventKey: e.sys.id,
                                        children: (0, r.jsxs)(W.Z.Body, {
                                          children: [
                                            (0, r.jsx)("div", {
                                              className: "faq-sub-title",
                                              children: (0, r.jsx)("span", {
                                                className: "header-sub-title",
                                                children: (0, r.jsx)("p", {
                                                  children: (0, r.jsx)(
                                                    "strong",
                                                    {
                                                      children:
                                                        "What This Coverage Protects...",
                                                    }
                                                  ),
                                                }),
                                              }),
                                            }),
                                            (0, r.jsx)(z, {
                                              text: e.fields.answer,
                                            }),
                                          ],
                                        }),
                                      }),
                                    ],
                                  },
                                  l
                                )
                              ),
                            }),
                          ],
                        }),
                      }),
                  }),
              }),
            })
          );
        },
        Q = i(3750),
        U = (e) => {
          var l, i, n, a, t;
          let { section: d } = e,
            { title: c, list: u, devices: m } = d.fields,
            v =
              null == m
                ? void 0
                : m.find((e) => {
                    var l;
                    return (
                      (null === (l = e.fields) || void 0 === l
                        ? void 0
                        : l.type) === s.Desktop
                    );
                  }),
            p =
              null == m
                ? void 0
                : m.find((e) => {
                    var l;
                    return (
                      (null === (l = e.fields) || void 0 === l
                        ? void 0
                        : l.type) === s.Mobile
                    );
                  }),
            { deviceSize: x } = (0, g.b)(),
            [f, j] = (0, o.useState)([]),
            b = (e) => f.includes(e),
            y = (e) =>
              (0, r.jsx)(r.Fragment, {
                children: (b(e), (0, r.jsx)(Q.IAR, {})),
              }),
            N = (e) => {
              j((l) => (l.includes(e) ? l.filter((l) => l !== e) : [...l, e]));
            };
          return (
            (0, o.useEffect)(() => {
              N(u[0].sys.id);
            }, [1]),
            (0, r.jsxs)("div", {
              className: "faq-cards",
              children: [
                (0, h.sD)(x) &&
                  (0, r.jsxs)("section", {
                    style: {
                      padding:
                        null == v
                          ? void 0
                          : null === (l = v.fields) || void 0 === l
                          ? void 0
                          : l.padding,
                      margin:
                        null == v
                          ? void 0
                          : null === (i = v.fields) || void 0 === i
                          ? void 0
                          : i.margin,
                    },
                    className: "faqs-container  ".concat(
                      (
                        null == v
                          ? void 0
                          : null === (n = v.fields) || void 0 === n
                          ? void 0
                          : n.fullWidth
                      )
                        ? "container-fluid px-0"
                        : ""
                    ),
                    children: [
                      (0, r.jsx)("h2", { children: c }),
                      (0, r.jsx)(Z.Z, {
                        activeKey: f,
                        className: "accordion-card",
                        children: u.map((e, l) =>
                          (0, r.jsxs)(
                            W.Z,
                            {
                              onClick: () => N(e.sys.id),
                              className: "".concat(
                                b(e.sys.id) ? "card-active" : "card-inactive"
                              ),
                              children: [
                                (0, r.jsx)(W.Z.Header, {
                                  children: (0, r.jsxs)("div", {
                                    className: "faq-title",
                                    children: [
                                      (0, r.jsx)("span", {
                                        className: "header-title",
                                        children: (0, r.jsx)(z, {
                                          text: e.fields.question,
                                        }),
                                      }),
                                      y(e.sys.id),
                                    ],
                                  }),
                                }),
                                (0, r.jsx)(Z.Z.Collapse, {
                                  eventKey: e.sys.id,
                                  children: (0, r.jsx)(W.Z.Body, {
                                    children: (0, r.jsx)(z, {
                                      text: e.fields.answer,
                                    }),
                                  }),
                                }),
                              ],
                            },
                            l
                          )
                        ),
                      }),
                    ],
                  }),
                (0, h.UJ)(x) &&
                  (0, r.jsxs)("section", {
                    style: {
                      padding:
                        null == p
                          ? void 0
                          : null === (a = p.fields) || void 0 === a
                          ? void 0
                          : a.padding,
                      margin:
                        null == p
                          ? void 0
                          : null === (t = p.fields) || void 0 === t
                          ? void 0
                          : t.margin,
                    },
                    className: "faqs-container ",
                    children: [
                      (0, r.jsx)("h2", { children: c }),
                      (0, r.jsx)(Z.Z, {
                        activeKey: f,
                        className: "accordion-card",
                        children: u.map((e, l) =>
                          (0, r.jsxs)(
                            W.Z,
                            {
                              onClick: () => N(e.sys.id),
                              className: "".concat(
                                b(e.sys.id) ? "card-active" : "card-inactive"
                              ),
                              children: [
                                (0, r.jsx)(W.Z.Header, {
                                  children: (0, r.jsx)("div", {
                                    className: "faq-title",
                                    children: (0, r.jsx)("span", {
                                      className: "header-title",
                                      children: (0, r.jsx)(z, {
                                        text: e.fields.question,
                                      }),
                                    }),
                                  }),
                                }),
                                (0, r.jsx)(Z.Z.Collapse, {
                                  eventKey: e.sys.id,
                                  children: (0, r.jsx)(W.Z.Body, {
                                    children: (0, r.jsx)(z, {
                                      text: e.fields.answer,
                                    }),
                                  }),
                                }),
                              ],
                            },
                            l
                          )
                        ),
                      }),
                    ],
                  }),
              ],
            })
          );
        },
        J = (e) => {
          var l, i, n, a, t, d, c;
          let { section: u } = e,
            {
              title: m,
              list: v,
              devices: p,
              homePage: x,
              tableAlternate: f,
            } = u.fields,
            j =
              null == p
                ? void 0
                : p.find((e) => {
                    var l;
                    return (
                      (null === (l = e.fields) || void 0 === l
                        ? void 0
                        : l.type) === s.Desktop
                    );
                  }),
            b =
              null == p
                ? void 0
                : p.find((e) => {
                    var l;
                    return (
                      (null === (l = e.fields) || void 0 === l
                        ? void 0
                        : l.type) === s.Mobile
                    );
                  }),
            y =
              null == p
                ? void 0
                : p.find((e) => {
                    var l;
                    return (
                      (null === (l = e.fields) || void 0 === l
                        ? void 0
                        : l.type) === s.Tablet
                    );
                  }),
            { deviceType: N } = (0, g.b)(),
            [w, S] = (0, o.useState)([]),
            k = (e) => w.includes(e),
            M = (e) => {
              var l, i, n, a;
              return (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)("button", {
                    className:
                      "rounded-circle accordion-symbol wp-container-desktop",
                    style: {
                      background: k(e)
                        ? null == j
                          ? void 0
                          : null === (l = j.fields) || void 0 === l
                          ? void 0
                          : l.textColor
                        : null == j
                        ? void 0
                        : null === (i = j.fields) || void 0 === i
                        ? void 0
                        : i.textColor,
                    },
                    children: k(e) ? "-" : "+",
                  }),
                  (0, r.jsx)("button", {
                    className:
                      "rounded-circle accordion-symbol wp-container-mobile",
                    style: {
                      background: k(e)
                        ? null == b
                          ? void 0
                          : null === (n = b.fields) || void 0 === n
                          ? void 0
                          : n.textColor
                        : null == b
                        ? void 0
                        : null === (a = b.fields) || void 0 === a
                        ? void 0
                        : a.textColor,
                    },
                    children: k(e) ? "-" : "+",
                  }),
                ],
              });
            },
            C = (e) => {
              S((l) => (l.includes(e) ? l.filter((l) => l !== e) : [...l, e]));
            };
          return (
            (0, o.useEffect)(() => {
              C(v[0].sys.id);
            }, [1]),
            f
              ? (0, r.jsx)(V, { section: u })
              : (0, r.jsx)("div", {
                  className: "faq-model",
                  children: x
                    ? (0, r.jsx)(U, { section: u })
                    : (0, r.jsxs)(r.Fragment, {
                        children: [
                          (0, h.nI)(N) &&
                            (0, r.jsx)("section", {
                              style: {
                                padding:
                                  null == j
                                    ? void 0
                                    : null === (l = j.fields) || void 0 === l
                                    ? void 0
                                    : l.padding,
                                margin:
                                  null == j
                                    ? void 0
                                    : null === (i = j.fields) || void 0 === i
                                    ? void 0
                                    : i.margin,
                              },
                              className: "faqs-container ".concat(
                                (
                                  null == j
                                    ? void 0
                                    : null === (n = j.fields) || void 0 === n
                                    ? void 0
                                    : n.fullWidth
                                )
                                  ? "container-fluid px-0"
                                  : ""
                              ),
                              children: (0, r.jsxs)("div", {
                                className: "w-100",
                                children: [
                                  (0, r.jsx)("h2", { children: m }),
                                  (0, r.jsx)(Z.Z, {
                                    activeKey: w,
                                    className: "accordion-card",
                                    children: v.map((e, l) => {
                                      var i;
                                      return (0, r.jsxs)(
                                        W.Z,
                                        {
                                          style: {
                                            borderLeftColor: k(e.sys.id)
                                              ? "#ed6306"
                                              : null == j
                                              ? void 0
                                              : null === (i = j.fields) ||
                                                void 0 === i
                                              ? void 0
                                              : i.textColor,
                                          },
                                          onClick: () => C(e.sys.id),
                                          className: "".concat(
                                            k(e.sys.id)
                                              ? "card-active"
                                              : "card-inactive"
                                          ),
                                          children: [
                                            (0, r.jsx)(W.Z.Header, {
                                              children: (0, r.jsxs)("div", {
                                                className: "faq-title",
                                                children: [
                                                  (0, r.jsx)("span", {
                                                    className: "header-title",
                                                    children: (0, r.jsx)(z, {
                                                      text: e.fields.question,
                                                    }),
                                                  }),
                                                  M(e.sys.id),
                                                ],
                                              }),
                                            }),
                                            (0, r.jsx)(Z.Z.Collapse, {
                                              eventKey: e.sys.id,
                                              children: (0, r.jsx)(W.Z.Body, {
                                                children: (0, r.jsx)(z, {
                                                  text: e.fields.answer,
                                                }),
                                              }),
                                            }),
                                          ],
                                        },
                                        l
                                      );
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          (0, h.Em)(N) &&
                            (0, r.jsx)("section", {
                              style: {
                                padding:
                                  null == y
                                    ? void 0
                                    : null === (a = y.fields) || void 0 === a
                                    ? void 0
                                    : a.padding,
                                margin:
                                  null == y
                                    ? void 0
                                    : null === (t = y.fields) || void 0 === t
                                    ? void 0
                                    : t.margin,
                              },
                              className: " faqs-container",
                              children: (0, r.jsxs)("div", {
                                className: "w-100",
                                children: [
                                  (0, r.jsx)("h2", { children: m }),
                                  (0, r.jsx)(Z.Z, {
                                    activeKey: w,
                                    className: "accordion-card",
                                    children: v.map((e, l) => {
                                      var i;
                                      return (0, r.jsxs)(
                                        W.Z,
                                        {
                                          style: {
                                            borderLeftColor: k(e.sys.id)
                                              ? "#ed6306"
                                              : null == y
                                              ? void 0
                                              : null === (i = y.fields) ||
                                                void 0 === i
                                              ? void 0
                                              : i.textColor,
                                          },
                                          onClick: () => C(e.sys.id),
                                          className: "".concat(
                                            k(e.sys.id)
                                              ? "card-active"
                                              : "card-inactive"
                                          ),
                                          children: [
                                            (0, r.jsx)(W.Z.Header, {
                                              children: (0, r.jsxs)("div", {
                                                className: "faq-title",
                                                children: [
                                                  (0, r.jsx)("span", {
                                                    className: "header-title",
                                                    children: (0, r.jsx)(z, {
                                                      text: e.fields.question,
                                                    }),
                                                  }),
                                                  M(e.sys.id),
                                                ],
                                              }),
                                            }),
                                            (0, r.jsx)(Z.Z.Collapse, {
                                              eventKey: e.sys.id,
                                              children: (0, r.jsx)(W.Z.Body, {
                                                children: (0, r.jsx)(z, {
                                                  text: e.fields.answer,
                                                }),
                                              }),
                                            }),
                                          ],
                                        },
                                        l
                                      );
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          (0, h.tq)(N) &&
                            (0, r.jsx)("section", {
                              style: {
                                padding:
                                  null == b
                                    ? void 0
                                    : null === (d = b.fields) || void 0 === d
                                    ? void 0
                                    : d.padding,
                                margin:
                                  null == b
                                    ? void 0
                                    : null === (c = b.fields) || void 0 === c
                                    ? void 0
                                    : c.margin,
                              },
                              className: "faqs-container",
                              children: (0, r.jsxs)("div", {
                                className: "w-100",
                                children: [
                                  (0, r.jsx)("h2", { children: m }),
                                  (0, r.jsx)(Z.Z, {
                                    activeKey: w,
                                    className: "accordion-card",
                                    children: v.map((e, l) => {
                                      var i;
                                      return (0, r.jsxs)(
                                        W.Z,
                                        {
                                          style: {
                                            borderLeftColor: k(e.sys.id)
                                              ? "#ed6306"
                                              : null == b
                                              ? void 0
                                              : null === (i = b.fields) ||
                                                void 0 === i
                                              ? void 0
                                              : i.textColor,
                                          },
                                          onClick: () => C(e.sys.id),
                                          className: "".concat(
                                            k(e.sys.id)
                                              ? "card-active"
                                              : "card-inactive"
                                          ),
                                          children: [
                                            (0, r.jsx)(W.Z.Header, {
                                              children: (0, r.jsxs)("div", {
                                                className: "faq-title",
                                                children: [
                                                  (0, r.jsx)("span", {
                                                    className: "header-title",
                                                    children: (0, r.jsx)(z, {
                                                      text: e.fields.question,
                                                    }),
                                                  }),
                                                  M(e.sys.id),
                                                ],
                                              }),
                                            }),
                                            (0, r.jsx)(Z.Z.Collapse, {
                                              eventKey: e.sys.id,
                                              children: (0, r.jsx)(W.Z.Body, {
                                                children: (0, r.jsx)(z, {
                                                  text: e.fields.answer,
                                                }),
                                              }),
                                            }),
                                          ],
                                        },
                                        l
                                      );
                                    }),
                                  }),
                                ],
                              }),
                            }),
                        ],
                      }),
                })
          );
        },
        G = i(1163);
      let $ = (e) => {
          var l,
            i,
            n,
            a,
            t,
            d,
            c,
            m,
            x,
            f,
            j,
            b,
            y,
            N,
            w,
            S,
            k,
            M,
            I,
            P,
            q,
            A,
            D,
            F,
            L,
            T,
            z,
            E,
            O,
            _,
            H,
            Y,
            R,
            B,
            Z,
            W,
            V,
            Q,
            U,
            J,
            G,
            $,
            X,
            ee,
            el,
            ei,
            en;
          let { parent: ea, item: es } = e,
            { section: et } = ea,
            { columnPerRow: er, tabletMode: eo } = et.fields,
            { deviceType: ed, deviceSize: ec } = (0, g.b)(),
            eu =
              null == es
                ? void 0
                : null === (i = es.fields) || void 0 === i
                ? void 0
                : null === (l = i.devices) || void 0 === l
                ? void 0
                : l.find((e) => {
                    var l;
                    return (
                      (null == e
                        ? void 0
                        : null === (l = e.fields) || void 0 === l
                        ? void 0
                        : l.type) === s.Desktop
                    );
                  }),
            eh =
              null == es
                ? void 0
                : null === (a = es.fields) || void 0 === a
                ? void 0
                : null === (n = a.devices) || void 0 === n
                ? void 0
                : n.find((e) => {
                    var l;
                    return (
                      (null == e
                        ? void 0
                        : null === (l = e.fields) || void 0 === l
                        ? void 0
                        : l.type) === s.Mobile
                    );
                  }),
            em =
              null == es
                ? void 0
                : null === (d = es.fields) || void 0 === d
                ? void 0
                : null === (t = d.devices) || void 0 === t
                ? void 0
                : t.find((e) => {
                    var l;
                    return (
                      (null == e
                        ? void 0
                        : null === (l = e.fields) || void 0 === l
                        ? void 0
                        : l.type) === s.Tablet
                    );
                  }),
            ev =
              null !==
                (en =
                  null == es
                    ? void 0
                    : null === (c = es.fields) || void 0 === c
                    ? void 0
                    : c.applyDeviceStyles) && void 0 !== en
                ? en
                : [],
            ep =
              (0, h.sD)(ec) &&
              (!eo || !(0, h.Em)(ed)) &&
              !(null == eu
                ? void 0
                : null === (m = eu.fields) || void 0 === m
                ? void 0
                : m.hidden),
            ex = eo && (0, h.Em)(ed),
            ef =
              (0, h.UJ)(ec) &&
              (!eo || !(0, h.Em)(ed)) &&
              !(null == eh
                ? void 0
                : null === (x = eh.fields) || void 0 === x
                ? void 0
                : x.hidden),
            eg = (0, o.useMemo)(
              () =>
                ev.length
                  ? C()(
                      ev
                        .map((e) => {
                          var l, i, n;
                          let a = v(e);
                          return ep
                            ? [
                                a,
                                p(
                                  e,
                                  null == eu
                                    ? void 0
                                    : null === (l = eu.fields) || void 0 === l
                                    ? void 0
                                    : l[e]
                                ),
                              ]
                            : ex
                            ? [
                                a,
                                p(
                                  e,
                                  null == em
                                    ? void 0
                                    : null === (i = em.fields) || void 0 === i
                                    ? void 0
                                    : i[e]
                                ),
                              ]
                            : ef
                            ? [
                                a,
                                p(
                                  e,
                                  null == eh
                                    ? void 0
                                    : null === (n = eh.fields) || void 0 === n
                                    ? void 0
                                    : n[e]
                                ),
                              ]
                            : [a, void 0];
                        })
                        .filter((e) => {
                          let [, l] = e;
                          return void 0 !== l;
                        })
                    )
                  : {},
              [ev, ep, ex, ef, eu, em, eh]
            );
          return (0, r.jsxs)(r.Fragment, {
            children: [
              ep &&
                (0, r.jsx)(
                  "div",
                  {
                    "data-key": "desktop-".concat(es.sys.id),
                    className: "".concat(
                      (
                        null == eu
                          ? void 0
                          : null === (f = eu.fields) || void 0 === f
                          ? void 0
                          : f.flexWrap
                      )
                        ? null == eu
                          ? void 0
                          : null === (j = eu.fields) || void 0 === j
                          ? void 0
                          : j.flexWrap
                        : "flex-wrap"
                    ),
                    style: {
                      width: "".concat(
                        (null === (b = es.sys.contentType) || void 0 === b
                          ? void 0
                          : b.sys.id) !== u.HV.MultiColumn ||
                          (null == eu
                            ? void 0
                            : null === (y = eu.fields) || void 0 === y
                            ? void 0
                            : y.widthPercentage)
                          ? null == eu
                            ? void 0
                            : null === (N = eu.fields) || void 0 === N
                            ? void 0
                            : N.widthPercentage
                          : 100 / Number(er),
                        "%"
                      ),
                      display: (
                        null == eu
                          ? void 0
                          : null === (w = eu.fields) || void 0 === w
                          ? void 0
                          : w.display
                      )
                        ? null == eu
                          ? void 0
                          : null === (S = eu.fields) || void 0 === S
                          ? void 0
                          : S.display
                        : "flex",
                      justifyContent: "".concat(
                        null == eu
                          ? void 0
                          : null === (k = eu.fields) || void 0 === k
                          ? void 0
                          : k.justifyContent
                      ),
                      alignItems:
                        null == eu
                          ? void 0
                          : null === (M = eu.fields) || void 0 === M
                          ? void 0
                          : M.alignItems,
                      float:
                        null == eu
                          ? void 0
                          : null === (I = eu.fields) || void 0 === I
                          ? void 0
                          : I.float,
                      flex:
                        null == eu
                          ? void 0
                          : null === (P = eu.fields) || void 0 === P
                          ? void 0
                          : P.flex,
                      minHeight:
                        null == eu
                          ? void 0
                          : null === (q = eu.fields) || void 0 === q
                          ? void 0
                          : q.minHeight,
                      ...eg,
                    },
                    children:
                      (null === (A = es.sys.contentType) || void 0 === A
                        ? void 0
                        : A.sys.id) === u.HV.MultiColumn
                        ? (0, r.jsx)(K, { section: es })
                        : (0, r.jsx)(eM, { section: es }),
                  },
                  "desktop-".concat(es.sys.id)
                ),
              ex &&
                (0, r.jsx)(
                  "div",
                  {
                    "data-key": "tablet-".concat(es.sys.id),
                    className: "".concat(
                      (
                        null == em
                          ? void 0
                          : null === (D = em.fields) || void 0 === D
                          ? void 0
                          : D.flexWrap
                      )
                        ? null == em
                          ? void 0
                          : null === (F = em.fields) || void 0 === F
                          ? void 0
                          : F.flexWrap
                        : "flex-wrap"
                    ),
                    style: {
                      width: "".concat(
                        null == em
                          ? void 0
                          : null === (L = em.fields) || void 0 === L
                          ? void 0
                          : L.widthPercentage,
                        "%"
                      ),
                      display: (
                        null == em
                          ? void 0
                          : null === (T = em.fields) || void 0 === T
                          ? void 0
                          : T.display
                      )
                        ? null == em
                          ? void 0
                          : null === (z = em.fields) || void 0 === z
                          ? void 0
                          : z.display
                        : "flex",
                      justifyContent: "".concat(
                        null == em
                          ? void 0
                          : null === (E = em.fields) || void 0 === E
                          ? void 0
                          : E.justifyContent
                      ),
                      alignItems:
                        null == em
                          ? void 0
                          : null === (O = em.fields) || void 0 === O
                          ? void 0
                          : O.alignItems,
                      float:
                        null == em
                          ? void 0
                          : null === (_ = em.fields) || void 0 === _
                          ? void 0
                          : _.float,
                      flex:
                        null == em
                          ? void 0
                          : null === (H = em.fields) || void 0 === H
                          ? void 0
                          : H.flex,
                      minHeight:
                        null == em
                          ? void 0
                          : null === (Y = em.fields) || void 0 === Y
                          ? void 0
                          : Y.minHeight,
                      ...eg,
                    },
                    children:
                      (null === (R = es.sys.contentType) || void 0 === R
                        ? void 0
                        : R.sys.id) === u.HV.MultiColumn
                        ? (0, r.jsx)(K, { section: es })
                        : (0, r.jsx)(eM, { section: es }),
                  },
                  "tablet-".concat(es.sys.id)
                ),
              ef &&
                (0, r.jsx)(
                  "div",
                  {
                    className: "".concat(
                      (
                        null == eh
                          ? void 0
                          : null === (B = eh.fields) || void 0 === B
                          ? void 0
                          : B.flexWrap
                      )
                        ? null == eh
                          ? void 0
                          : null === (Z = eh.fields) || void 0 === Z
                          ? void 0
                          : Z.flexWrap
                        : "flex-wrap"
                    ),
                    "data-key": "mobile-".concat(es.sys.id),
                    style: {
                      width: "".concat(
                        (null === (W = es.sys.contentType) || void 0 === W
                          ? void 0
                          : W.sys.id) !== u.HV.MultiColumn ||
                          (null == eh
                            ? void 0
                            : null === (V = eh.fields) || void 0 === V
                            ? void 0
                            : V.widthPercentage)
                          ? null == eh
                            ? void 0
                            : null === (Q = eh.fields) || void 0 === Q
                            ? void 0
                            : Q.widthPercentage
                          : 100 / Number(er),
                        "%"
                      ),
                      display: (
                        null == eh
                          ? void 0
                          : null === (U = eh.fields) || void 0 === U
                          ? void 0
                          : U.display
                      )
                        ? null == eh
                          ? void 0
                          : null === (J = eh.fields) || void 0 === J
                          ? void 0
                          : J.display
                        : "flex",
                      justifyContent: "".concat(
                        null == eh
                          ? void 0
                          : null === (G = eh.fields) || void 0 === G
                          ? void 0
                          : G.justifyContent
                      ),
                      alignItems:
                        null == eh
                          ? void 0
                          : null === ($ = eh.fields) || void 0 === $
                          ? void 0
                          : $.alignItems,
                      float:
                        null == eh
                          ? void 0
                          : null === (X = eh.fields) || void 0 === X
                          ? void 0
                          : X.float,
                      flex:
                        null == eh
                          ? void 0
                          : null === (ee = eh.fields) || void 0 === ee
                          ? void 0
                          : ee.flex,
                      minHeight:
                        null == eh
                          ? void 0
                          : null === (el = eh.fields) || void 0 === el
                          ? void 0
                          : el.minHeight,
                      ...eg,
                    },
                    children:
                      (null === (ei = es.sys.contentType) || void 0 === ei
                        ? void 0
                        : ei.sys.id) === u.HV.MultiColumn
                        ? (0, r.jsx)(K, { section: es })
                        : (0, r.jsx)(eM, { section: es }),
                  },
                  "mobile-".concat(es.sys.id)
                ),
            ],
          });
        },
        K = (e) => {
          var l,
            i,
            n,
            a,
            t,
            d,
            c,
            u,
            x,
            f,
            j,
            b,
            y,
            N,
            w,
            S,
            k,
            M,
            I,
            P,
            q,
            A,
            D,
            F,
            L,
            T,
            z,
            E,
            O,
            _,
            H,
            Y,
            R,
            B,
            Z,
            W,
            V,
            Q,
            U,
            J,
            G,
            K,
            X,
            ee,
            el,
            ei,
            en,
            ea,
            es,
            et;
          let { section: er } = e,
            {
              columns: eo,
              backgroundImage: ed,
              tabletMode: ec,
              applyDeviceStyles: eu = [],
            } = er.fields,
            { deviceType: eh, deviceSize: em } = (0, g.b)(),
            ev =
              null == er
                ? void 0
                : null === (i = er.fields) || void 0 === i
                ? void 0
                : null === (l = i.devices) || void 0 === l
                ? void 0
                : l.find((e) => {
                    var l;
                    return (
                      (null == e
                        ? void 0
                        : null === (l = e.fields) || void 0 === l
                        ? void 0
                        : l.type) === s.Desktop
                    );
                  }),
            ep =
              null == er
                ? void 0
                : null === (a = er.fields) || void 0 === a
                ? void 0
                : null === (n = a.devices) || void 0 === n
                ? void 0
                : n.find((e) => {
                    var l;
                    return (
                      (null == e
                        ? void 0
                        : null === (l = e.fields) || void 0 === l
                        ? void 0
                        : l.type) === s.Mobile
                    );
                  }),
            ex =
              null == er
                ? void 0
                : null === (d = er.fields) || void 0 === d
                ? void 0
                : null === (t = d.devices) || void 0 === t
                ? void 0
                : t.find((e) => {
                    var l;
                    return (
                      (null == e
                        ? void 0
                        : null === (l = e.fields) || void 0 === l
                        ? void 0
                        : l.type) === s.Tablet
                    );
                  }),
            ef = (0, h.sD)(em) && (!ec || !(0, h.Em)(eh)),
            eg = ec && (0, h.Em)(eh),
            ej = (0, h.UJ)(em) && (!ec || !(0, h.Em)(eh)),
            eb = (0, o.useMemo)(
              () =>
                eu.length
                  ? C()(
                      eu
                        .map((e) => {
                          var l, i, n;
                          let a = v(e);
                          return ef
                            ? [
                                a,
                                p(
                                  e,
                                  null == ev
                                    ? void 0
                                    : null === (l = ev.fields) || void 0 === l
                                    ? void 0
                                    : l[e]
                                ),
                              ]
                            : eg
                            ? [
                                a,
                                p(
                                  e,
                                  null == ex
                                    ? void 0
                                    : null === (i = ex.fields) || void 0 === i
                                    ? void 0
                                    : i[e]
                                ),
                              ]
                            : ej
                            ? [
                                a,
                                p(
                                  e,
                                  null == ep
                                    ? void 0
                                    : null === (n = ep.fields) || void 0 === n
                                    ? void 0
                                    : n[e]
                                ),
                              ]
                            : [a, void 0];
                        })
                        .filter((e) => {
                          let [, l] = e;
                          return void 0 !== l;
                        })
                    )
                  : {},
              [eu, ef, eg, ej, ev, ex, ep]
            );
          return (0, r.jsxs)(r.Fragment, {
            children: [
              ef &&
                (0, r.jsx)("section", {
                  className: "w-100 h-100",
                  style: {
                    padding:
                      null == ev
                        ? void 0
                        : null === (c = ev.fields) || void 0 === c
                        ? void 0
                        : c.padding,
                    margin:
                      null == ev
                        ? void 0
                        : null === (u = ev.fields) || void 0 === u
                        ? void 0
                        : u.margin,
                    borderRadius:
                      null == ev
                        ? void 0
                        : null === (x = ev.fields) || void 0 === x
                        ? void 0
                        : x.borderRadius,
                    backgroundPosition: "left center",
                    backgroundColor: "".concat(
                      null == ev
                        ? void 0
                        : null === (f = ev.fields) || void 0 === f
                        ? void 0
                        : f.backgroundColor
                    ),
                    boxShadow:
                      null == ev
                        ? void 0
                        : null === (j = ev.fields) || void 0 === j
                        ? void 0
                        : j.boxShadow,
                    maxWidth:
                      null == ev
                        ? void 0
                        : null === (b = ev.fields) || void 0 === b
                        ? void 0
                        : b.maxWidth,
                    ...eb,
                  },
                  children: (0, r.jsx)("div", {
                    className: ""
                      .concat(
                        (
                          null == ev
                            ? void 0
                            : null === (y = ev.fields) || void 0 === y
                            ? void 0
                            : y.flexWrap
                        )
                          ? null == ev
                            ? void 0
                            : null === (N = ev.fields) || void 0 === N
                            ? void 0
                            : N.flexWrap
                          : "flex-wrap",
                        " w-100 \n        "
                      )
                      .concat(
                        (0, h.Mg)(
                          null == ev
                            ? void 0
                            : null === (w = ev.fields) || void 0 === w
                            ? void 0
                            : w.direction
                        ),
                        "\n        "
                      )
                      .concat(
                        (
                          null == ev
                            ? void 0
                            : null === (S = ev.fields) || void 0 === S
                            ? void 0
                            : S.separater
                        )
                          ? "border-r "
                          : "",
                        "\n            }"
                      ),
                    style: {
                      display: (
                        null == ev
                          ? void 0
                          : null === (k = ev.fields) || void 0 === k
                          ? void 0
                          : k.display
                      )
                        ? null == ev
                          ? void 0
                          : null === (M = ev.fields) || void 0 === M
                          ? void 0
                          : M.display
                        : "flex",
                      alignItems:
                        null == ev
                          ? void 0
                          : null === (I = ev.fields) || void 0 === I
                          ? void 0
                          : I.alignItems,
                      justifyContent: "".concat(
                        null == ev
                          ? void 0
                          : null === (P = ev.fields) || void 0 === P
                          ? void 0
                          : P.justifyContent
                      ),
                      minHeight:
                        null == ev
                          ? void 0
                          : null === (q = ev.fields) || void 0 === q
                          ? void 0
                          : q.minHeight,
                    },
                    children: eo.map((e) =>
                      (0, r.jsx)(
                        $,
                        { parent: { section: er }, item: e },
                        "dekstop-col-".concat(e.sys.id)
                      )
                    ),
                  }),
                }),
              eg &&
                (0, r.jsx)("section", {
                  className: "h-100 w-100 ",
                  style: {
                    width: "".concat(
                      null == ex
                        ? void 0
                        : null === (A = ex.fields) || void 0 === A
                        ? void 0
                        : A.widthPercentage,
                      "% !important"
                    ),
                    padding:
                      null == ex
                        ? void 0
                        : null === (D = ex.fields) || void 0 === D
                        ? void 0
                        : D.padding,
                    margin:
                      null == ex
                        ? void 0
                        : null === (F = ex.fields) || void 0 === F
                        ? void 0
                        : F.margin,
                    borderRadius:
                      null == ex
                        ? void 0
                        : null === (L = ex.fields) || void 0 === L
                        ? void 0
                        : L.borderRadius,
                    backgroundPosition: "left center",
                    backgroundColor: "".concat(
                      null == ex
                        ? void 0
                        : null === (T = ex.fields) || void 0 === T
                        ? void 0
                        : T.backgroundColor
                    ),
                    boxShadow:
                      null == ex
                        ? void 0
                        : null === (z = ex.fields) || void 0 === z
                        ? void 0
                        : z.boxShadow,
                    ...eb,
                  },
                  children: (0, r.jsx)("div", {
                    className: " flex-wrap  w-100 \n        "
                      .concat(
                        (null == ex
                          ? void 0
                          : null === (E = ex.fields) || void 0 === E
                          ? void 0
                          : E.direction) == m.N.Horizontal
                          ? "flex-row"
                          : "flex-column",
                        "\n        "
                      )
                      .concat(
                        (
                          null == ex
                            ? void 0
                            : null === (O = ex.fields) || void 0 === O
                            ? void 0
                            : O.separater
                        )
                          ? "border-r "
                          : "",
                        "\n            }"
                      ),
                    style: {
                      display: (
                        null == ex
                          ? void 0
                          : null === (_ = ex.fields) || void 0 === _
                          ? void 0
                          : _.display
                      )
                        ? null == ex
                          ? void 0
                          : null === (H = ex.fields) || void 0 === H
                          ? void 0
                          : H.display
                        : "flex",
                      alignItems:
                        null == ex
                          ? void 0
                          : null === (Y = ex.fields) || void 0 === Y
                          ? void 0
                          : Y.alignItems,
                      justifyContent: "".concat(
                        null == ex
                          ? void 0
                          : null === (R = ex.fields) || void 0 === R
                          ? void 0
                          : R.justifyContent
                      ),
                      minHeight:
                        null == ev
                          ? void 0
                          : null === (B = ev.fields) || void 0 === B
                          ? void 0
                          : B.minHeight,
                    },
                    children: eo.map((e) =>
                      (0, r.jsx)(
                        $,
                        { parent: { section: er }, item: e },
                        "tablet-col-".concat(e.sys.id)
                      )
                    ),
                  }),
                }),
              ej &&
                (0, r.jsx)("section", {
                  className: "w-100",
                  style: {
                    padding:
                      null == ep
                        ? void 0
                        : null === (Z = ep.fields) || void 0 === Z
                        ? void 0
                        : Z.padding,
                    margin:
                      null == ep
                        ? void 0
                        : null === (W = ep.fields) || void 0 === W
                        ? void 0
                        : W.margin,
                    backgroundColor: "".concat(
                      null == ep
                        ? void 0
                        : null === (V = ep.fields) || void 0 === V
                        ? void 0
                        : V.backgroundColor
                    ),
                    backgroundImage: "url(https:".concat(
                      null == ed
                        ? void 0
                        : null === (G = ed.fields) || void 0 === G
                        ? void 0
                        : null === (J = G.imageFile) || void 0 === J
                        ? void 0
                        : null === (U = J.fields) || void 0 === U
                        ? void 0
                        : null === (Q = U.file) || void 0 === Q
                        ? void 0
                        : Q.url,
                      ")"
                    ),
                    borderRadius:
                      null == ep
                        ? void 0
                        : null === (K = ep.fields) || void 0 === K
                        ? void 0
                        : K.borderRadius,
                    boxShadow:
                      null == ep
                        ? void 0
                        : null === (X = ep.fields) || void 0 === X
                        ? void 0
                        : X.boxShadow,
                    ...eb,
                  },
                  children: (0, r.jsx)("div", {
                    className: "flex-wrap w-100 \n            "
                      .concat(
                        (
                          null == ep
                            ? void 0
                            : null === (ee = ep.fields) || void 0 === ee
                            ? void 0
                            : ee.separater
                        )
                          ? "border-b"
                          : "",
                        "\n            "
                      )
                      .concat(
                        (0, h.Mg)(
                          null == ep
                            ? void 0
                            : null === (el = ep.fields) || void 0 === el
                            ? void 0
                            : el.direction
                        )
                      ),
                    style: {
                      display: (
                        null == ep
                          ? void 0
                          : null === (ei = ep.fields) || void 0 === ei
                          ? void 0
                          : ei.display
                      )
                        ? null == ep
                          ? void 0
                          : null === (en = ep.fields) || void 0 === en
                          ? void 0
                          : en.display
                        : "flex",
                      justifyContent: "".concat(
                        null == ep
                          ? void 0
                          : null === (ea = ep.fields) || void 0 === ea
                          ? void 0
                          : ea.justifyContent
                      ),
                      alignItems:
                        null == ep
                          ? void 0
                          : null === (es = ep.fields) || void 0 === es
                          ? void 0
                          : es.alignItems,
                      minHeight:
                        null == ev
                          ? void 0
                          : null === (et = ev.fields) || void 0 === et
                          ? void 0
                          : et.minHeight,
                    },
                    children: eo.map((e) =>
                      (0, r.jsx)(
                        $,
                        { parent: { section: er }, item: e },
                        "mobile-col-".concat(e.sys.id)
                      )
                    ),
                  }),
                }),
            ],
          });
        },
        X = {
          [u.HV.ProductReview]: (e) => {
            var l;
            let { item: i, child: n, itemsMargin: a } = e,
              { color: s, title: t, content: d, showRating: c } = i.fields,
              [u, h] = (0, o.useState)(0),
              m = (0, G.useRouter)().asPath;
            return (
              (0, o.useEffect)(() => {
                function e() {
                  h(window.innerWidth);
                }
                return (
                  h(window.innerWidth),
                  window.addEventListener("resize", e),
                  () => window.removeEventListener("resize", e)
                );
              }, []),
              (0, r.jsx)("div", {
                className: "col-lg-4 col-md-12 review-card px-0\n    "
                  .concat(
                    n % 3 < 2 && u >= 1024
                      ? "border-end"
                      : u > 0 && u < 1024
                      ? " border-right-0"
                      : "",
                    "\n    "
                  )
                  .concat(m.includes("contact-us") ? " border-bottom" : ""),
                style: {
                  backgroundColor:
                    [3, 4, 5, 9, 10, 11].includes(n) && u >= 1024
                      ? "#efefef"
                      : "",
                },
                children: (0, r.jsxs)("div", {
                  children: [
                    (0, r.jsx)("div", {
                      className: "card-header px-4 py-4 review-card-header",
                      style: { backgroundColor: s },
                      children: (0, r.jsx)("h2", {
                        className: "text-center fs-3 fw-bolder",
                        children: t,
                      }),
                    }),
                    (0, r.jsxs)("div", {
                      className:
                        "card-body d-flex flex-column justify-content-start d-grid gap-4 pb-4 px-4\n          ".concat(
                          m.includes("customer-reviews")
                            ? " card-body-p-override"
                            : ""
                        ),
                      style: {
                        color: "".concat(
                          null === (l = d.fields) || void 0 === l
                            ? void 0
                            : l.textColor,
                          " !important"
                        ),
                        height:
                          m.includes("customer-reviews") && u >= 1024
                            ? "775px"
                            : "",
                      },
                      children: [
                        c &&
                          (0, r.jsx)("div", {
                            className:
                              "card-review-rating d-flex align-items-center justify-content-center pt-4",
                            children: (0, r.jsx)("img", {
                              src: "/images/content/".concat(
                                null == s ? void 0 : s.substring(1),
                                ".png"
                              ),
                              alt: "5 start rating",
                            }),
                          }),
                        (0, r.jsx)("span", {
                          className: "text-center",
                          children: (0, r.jsx)(K, { section: d }),
                        }),
                      ],
                    }),
                  ],
                }),
              })
            );
          },
          [u.HV.Card]: (e) => {
            var l, i, n, a, s;
            let {
                fluidRows: t,
                item: d,
                itemsMargin: c,
                noBorder: u,
                noPadding: h,
              } = e,
              {
                headerImage: m,
                content: v,
                imageMaxWidth: p,
                link: x,
                fluidHeight: f,
                fluidWidth: g,
                externalLink: j = !0,
                hoverQuerySelector: b,
                hoverStyle: y,
              } = d.fields,
              [N, w] = (0, o.useState)(null),
              S =
                null !==
                  (s =
                    null == m
                      ? void 0
                      : null === (a = m.fields) || void 0 === a
                      ? void 0
                      : null === (n = a.imageFile) || void 0 === n
                      ? void 0
                      : null === (i = n.fields) || void 0 === i
                      ? void 0
                      : null === (l = i.file) || void 0 === l
                      ? void 0
                      : l.url) && void 0 !== s
                  ? s
                  : "",
              k = {},
              M = {};
            if (
              (u && (k.border = "0"),
              f && (k.height = f),
              g && (k.width = g),
              t)
            ) {
              if (c) {
                let e = parseInt(c, 10),
                  l = e / 2;
                k.margin = "0 "
                  .concat(l, "px ")
                  .concat(e, "px ")
                  .concat(l, "px");
              }
              M.height = "100%";
            }
            return (
              h && (M.padding = "0"),
              (0, o.useEffect)(() => {
                if (N && b && y) {
                  let e = ["display"],
                    l = [],
                    i = () => {
                      let i = N.querySelectorAll(b),
                        n = 0 === l.length;
                      i.forEach((i) => {
                        if (n) {
                          let n = {};
                          e.forEach((e) => {
                            n[e] = i.style[e];
                          }),
                            l.push(n);
                        }
                        e.forEach((e) => {
                          var l;
                          i.style[e] =
                            null === (l = y.fields) || void 0 === l
                              ? void 0
                              : l[e];
                        });
                      });
                    },
                    n = () => {
                      let i = N.querySelectorAll(b);
                      i.forEach((i, n) => {
                        e.forEach((e) => {
                          var a;
                          i.style[e] =
                            null === (a = l[n]) || void 0 === a ? void 0 : a[e];
                        });
                      });
                    };
                  return (
                    N.addEventListener("mouseenter", i),
                    N.addEventListener("mouseleave", n),
                    () => {
                      N.removeEventListener("mouseenter", i),
                        N.removeEventListener("mouseleave", n);
                    }
                  );
                }
              }, [N, b, y]),
              (0, r.jsx)("div", {
                className:
                  "col-lg-3 col-xs-12 template-card newsroom-card px-0",
                style: k,
                ref: w,
                children: (0, r.jsxs)("a", {
                  href: x,
                  target: j ? "_blank" : "",
                  children: [
                    (!h || S) &&
                      (0, r.jsx)("div", {
                        className: "card-header",
                        children: (0, r.jsx)("img", {
                          src: S,
                          style: { maxWidth: p },
                          alt: "newsroom image header",
                        }),
                      }),
                    (0, r.jsx)("div", {
                      className: "card-content",
                      style: M,
                      children: (0, r.jsx)(K, { section: v }),
                    }),
                  ],
                }),
              })
            );
          },
        };
      var ee = (e) => {
        var l, i, n, a;
        let { section: t } = e,
          {
            items: o,
            itemsMargin: d,
            devices: u,
            fluidRows: h,
            noBorder: m,
            noPadding: v,
          } = t.fields,
          p = null == u ? void 0 : u.find((e) => e.fields.type === s.Desktop),
          x = null == u ? void 0 : u.find((e) => e.fields.type === s.Mobile),
          f = (e, l, i) => {
            let n = c().get(e, "sys.contentType.sys.id"),
              a = X[n];
            if (!a)
              return (
                console.warn(
                  "Component: Cards -".concat(n, " can not be handled")
                ),
                null
              );
            let { id: s } = e.sys;
            return (0, r.jsx)(
              a,
              {
                item: e,
                child: l,
                itemsMargin: i,
                fluidRows: h,
                noBorder: m,
                noPadding: v,
              },
              "".concat(n, "-").concat(s)
            );
          };
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsxs)("div", {
            className: "cards-container".concat(h ? " cards-fluid-rows" : ""),
            children: [
              (0, r.jsx)("div", {
                className: "row d-flex review-cards-desktop",
                style: {
                  margin:
                    null == p
                      ? void 0
                      : null === (l = p.fields) || void 0 === l
                      ? void 0
                      : l.margin,
                  padding:
                    null == p
                      ? void 0
                      : null === (i = p.fields) || void 0 === i
                      ? void 0
                      : i.padding,
                },
                children: o.map((e, l) =>
                  (0, r.jsx)(r.Fragment, { children: f(e, l, d) })
                ),
              }),
              (0, r.jsx)("div", {
                className: "row d-flex review-cards-mobile w-100 m-0",
                style: {
                  margin:
                    null == x
                      ? void 0
                      : null === (n = x.fields) || void 0 === n
                      ? void 0
                      : n.margin,
                  padding:
                    null == x
                      ? void 0
                      : null === (a = x.fields) || void 0 === a
                      ? void 0
                      : a.padding,
                },
                children: o.map((e, l) =>
                  (0, r.jsx)(r.Fragment, { children: f(e, l, d) })
                ),
              }),
            ],
          }),
        });
      };
      let el = (e) => {
        let { device: l, section: i, url: n } = e,
          [a, s] = (0, o.useState)(!1),
          {
            title: t,
            rounded: d = !0,
            hoverBackground: c,
            hoverColor: u,
            externalLink: h,
            scrollToId: m,
            altText: v,
            download: p,
          } = i.fields,
          x = () => {
            setTimeout(() => {
              let e = document.getElementById(m);
              e && e.scrollIntoView({ behavior: "smooth" });
            }, 500);
          },
          f = { ...(p && !h && { download: n }) };
        return (
          (n = p ? "/documents".concat(n) : n),
          (0, r.jsx)("a", {
            href: n,
            ...f,
            target: h ? "_blank" : "",
            rel: h ? "noopener noreferrer" : "",
            onClick: () => x(),
            title: v,
            onMouseEnter: () => s(!0),
            onMouseLeave: () => s(!1),
            className: "pointer action-btn "
              .concat(d ? "btn-border" : "", " text-")
              .concat(null == l ? void 0 : l.textAlign),
            style: {
              fontSize: null == l ? void 0 : l.fontSize,
              padding: (null == l ? void 0 : l.padding)
                ? null == l
                  ? void 0
                  : l.padding
                : "",
              borderRadius: null == l ? void 0 : l.borderRadius,
              border: null == l ? void 0 : l.border,
              backgroundColor: a ? c : null == l ? void 0 : l.backgroundColor,
              color: a ? u : null == l ? void 0 : l.textColor,
              borderColor: a ? u : null == l ? void 0 : l.textColor,
              boxShadow: (null == l ? void 0 : l.boxShadow)
                ? null == l
                  ? void 0
                  : l.boxShadow
                : "0px 2px 4px 0px rgba(0, 0, 0, 30%)",
            },
            children: t,
          })
        );
      };
      var ei = (e) => {
          let { section: l } = e,
            { linkUrl: i, devices: n, scrollToId: a } = l.fields,
            { deviceSize: t } = (0, g.b)(),
            o = null == n ? void 0 : n.find((e) => e.fields.type === s.Desktop),
            d = null == n ? void 0 : n.find((e) => e.fields.type === s.Mobile),
            c,
            m = i;
          return (
            (null == (c = window.location.pathname)
              ? void 0
              : c.includes("rocket-lawyer")) &&
              (m = "".concat(m, "?sCode=").concat(u.e0.LIFE)),
            (0, r.jsxs)(r.Fragment, {
              children: [
                (0, h.sD)(t) &&
                  (0, r.jsx)("div", {
                    className: "button-container",
                    children: (0, r.jsx)(el, {
                      device: null == o ? void 0 : o.fields,
                      section: l,
                      url: m,
                    }),
                  }),
                (0, h.UJ)(t) &&
                  (0, r.jsx)("div", {
                    className: "button-container",
                    children: (0, r.jsx)(el, {
                      device: null == d ? void 0 : d.fields,
                      section: l,
                      url: m,
                    }),
                  }),
              ],
            })
          );
        },
        en = (e) => {
          var l, i, n, a, t, o, d, c, u, m;
          let { section: v } = e,
            { thickBorder: p, devices: x } = v.fields,
            f = null == x ? void 0 : x.find((e) => e.fields.type === s.Desktop),
            j = null == x ? void 0 : x.find((e) => e.fields.type === s.Mobile),
            { deviceSize: b } = (0, g.b)();
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, h.sD)(b) &&
                (0, r.jsx)("div", {
                  className: "w-100",
                  children:
                    !(null == f
                      ? void 0
                      : null === (l = f.fields) || void 0 === l
                      ? void 0
                      : l.hidden) &&
                    (0, r.jsxs)(r.Fragment, {
                      children: [
                        !p &&
                          (0, r.jsx)("hr", {
                            style: {
                              margin:
                                null == f
                                  ? void 0
                                  : null === (i = f.fields) || void 0 === i
                                  ? void 0
                                  : i.margin,
                            },
                          }),
                        p &&
                          (0, r.jsx)("div", {
                            style: {
                              margin:
                                null == f
                                  ? void 0
                                  : null === (n = f.fields) || void 0 === n
                                  ? void 0
                                  : n.margin,
                              borderBottom: ""
                                .concat(
                                  null == f
                                    ? void 0
                                    : null === (a = f.fields) || void 0 === a
                                    ? void 0
                                    : a.height,
                                  " solid "
                                )
                                .concat(
                                  null == f
                                    ? void 0
                                    : null === (t = f.fields) || void 0 === t
                                    ? void 0
                                    : t.backgroundColor
                                ),
                            },
                          }),
                      ],
                    }),
                }),
              (0, h.UJ)(b) &&
                (0, r.jsx)("div", {
                  className: "w-100",
                  children:
                    !(null == j
                      ? void 0
                      : null === (o = j.fields) || void 0 === o
                      ? void 0
                      : o.hidden) &&
                    (0, r.jsxs)(r.Fragment, {
                      children: [
                        !p &&
                          (0, r.jsx)("hr", {
                            style: {
                              margin:
                                null == j
                                  ? void 0
                                  : null === (d = j.fields) || void 0 === d
                                  ? void 0
                                  : d.margin,
                            },
                          }),
                        p &&
                          (0, r.jsx)("div", {
                            style: {
                              margin:
                                null == j
                                  ? void 0
                                  : null === (c = j.fields) || void 0 === c
                                  ? void 0
                                  : c.margin,
                              borderBottom: ""
                                .concat(
                                  null == j
                                    ? void 0
                                    : null === (u = j.fields) || void 0 === u
                                    ? void 0
                                    : u.height,
                                  " solid "
                                )
                                .concat(
                                  null == j
                                    ? void 0
                                    : null === (m = j.fields) || void 0 === m
                                    ? void 0
                                    : m.backgroundColor
                                ),
                            },
                          }),
                      ],
                    }),
                }),
            ],
          });
        },
        ea = i(2004),
        es = (e) => {
          var l, i, n, a, t, d, c, u, m, v, p, x, f, j, b, y;
          let { section: N } = e,
            [w, S] = (0, o.useState)(null),
            { rows: k, devices: M } = N.fields,
            C = k.find((e) => e.fields.header),
            I = k.filter((e) => !e.fields.header),
            P =
              null == M
                ? void 0
                : M.find((e) => {
                    var l;
                    return (
                      (null === (l = e.fields) || void 0 === l
                        ? void 0
                        : l.type) === s.Desktop
                    );
                  }),
            q =
              null == M
                ? void 0
                : M.find((e) => {
                    var l;
                    return (
                      (null === (l = e.fields) || void 0 === l
                        ? void 0
                        : l.type) === s.Mobile
                    );
                  }),
            { deviceSize: A } = (0, g.b)(),
            D = (0, h.sD)(A),
            F = (0, h.UJ)(A),
            L = D
              ? null == P
                ? void 0
                : null === (l = P.fields) || void 0 === l
                ? void 0
                : l.border
              : F
              ? null == q
                ? void 0
                : null === (i = q.fields) || void 0 === i
                ? void 0
                : i.border
              : void 0,
            T = D
              ? null == P
                ? void 0
                : null === (n = P.fields) || void 0 === n
                ? void 0
                : n.margin
              : F
              ? null == q
                ? void 0
                : null === (a = q.fields) || void 0 === a
                ? void 0
                : a.margin
              : void 0,
            E = D
              ? null == P
                ? void 0
                : null === (t = P.fields) || void 0 === t
                ? void 0
                : t.maxWidth
              : F
              ? null == q
                ? void 0
                : null === (d = q.fields) || void 0 === d
                ? void 0
                : d.maxWidth
              : void 0,
            O = "section-table".concat(L ? " table-has-border" : "");
          return (
            (0, o.useEffect)(() => {
              w &&
                L &&
                (w.style.setProperty("--table-border", L),
                w.style.setProperty("--table-margin", T),
                w.style.setProperty("--table-max-width", E));
            }, [L, T, E, w]),
            (0, r.jsxs)(r.Fragment, {
              children: [
                D &&
                  !(null == P
                    ? void 0
                    : null === (c = P.fields) || void 0 === c
                    ? void 0
                    : c.hidden) &&
                  (0, r.jsx)("div", {
                    className: " w-100",
                    style: {
                      padding:
                        null == P
                          ? void 0
                          : null === (u = P.fields) || void 0 === u
                          ? void 0
                          : u.padding,
                      margin: L
                        ? void 0
                        : null == P
                        ? void 0
                        : null === (m = P.fields) || void 0 === m
                        ? void 0
                        : m.margin,
                    },
                    children: (0, r.jsxs)("table", {
                      className: O,
                      ref: S,
                      children: [
                        C &&
                          (0, r.jsx)(r.Fragment, {
                            children: (0, r.jsx)("tr", {
                              style: {
                                backgroundColor: C.fields.backgroundColor,
                              },
                              children:
                                null == C
                                  ? void 0
                                  : null === (p = C.fields) || void 0 === p
                                  ? void 0
                                  : null === (v = p.columns) || void 0 === v
                                  ? void 0
                                  : v.map((e) => {
                                      var l, i, n, a, s, t;
                                      return (0, r.jsx)("th", {
                                        style: {
                                          textAlign: e.fields.textAlign,
                                        },
                                        rowSpan: e.fields.rowSpan,
                                        colSpan: e.fields.colSpan,
                                        children: (0, r.jsx)(z, {
                                          text:
                                            null == e
                                              ? void 0
                                              : null === (l = e.fields) ||
                                                void 0 === l
                                              ? void 0
                                              : l.content,
                                          device:
                                            null == e
                                              ? void 0
                                              : null === (n = e.fields) ||
                                                void 0 === n
                                              ? void 0
                                              : null === (i = n.styles) ||
                                                void 0 === i
                                              ? void 0
                                              : i.fields,
                                          imageDevice:
                                            null == e
                                              ? void 0
                                              : null === (s = e.fields) ||
                                                void 0 === s
                                              ? void 0
                                              : null === (a = s.imageStyles) ||
                                                void 0 === a
                                              ? void 0
                                              : a.fields,
                                          applyDeviceStyles:
                                            null == e
                                              ? void 0
                                              : null === (t = e.fields) ||
                                                void 0 === t
                                              ? void 0
                                              : t.applyDeviceStyles,
                                        }),
                                      });
                                    }),
                            }),
                          }),
                        I &&
                          (0, r.jsx)(r.Fragment, {
                            children: I.map((e) => {
                              var l, i;
                              return (0, r.jsx)(r.Fragment, {
                                children: (0, r.jsx)("tr", {
                                  style: {
                                    backgroundColor: e.fields.backgroundColor,
                                  },
                                  children:
                                    null == e
                                      ? void 0
                                      : null === (i = e.fields) || void 0 === i
                                      ? void 0
                                      : null === (l = i.columns) || void 0 === l
                                      ? void 0
                                      : l.map((e) => {
                                          var l, i, n, a, s, t, o, d, c;
                                          return (0, r.jsx)("td", {
                                            style: {
                                              textAlign: e.fields.textAlign,
                                              width:
                                                null == e
                                                  ? void 0
                                                  : null === (n = e.fields) ||
                                                    void 0 === n
                                                  ? void 0
                                                  : null === (i = n.styles) ||
                                                    void 0 === i
                                                  ? void 0
                                                  : null === (l = i.fields) ||
                                                    void 0 === l
                                                  ? void 0
                                                  : l.width,
                                            },
                                            rowSpan: e.fields.rowSpan,
                                            colSpan: e.fields.colSpan,
                                            children: (0, r.jsx)(z, {
                                              text:
                                                null == e
                                                  ? void 0
                                                  : null === (a = e.fields) ||
                                                    void 0 === a
                                                  ? void 0
                                                  : a.content,
                                              device:
                                                null == e
                                                  ? void 0
                                                  : null === (t = e.fields) ||
                                                    void 0 === t
                                                  ? void 0
                                                  : null === (s = t.styles) ||
                                                    void 0 === s
                                                  ? void 0
                                                  : s.fields,
                                              imageDevice:
                                                null == e
                                                  ? void 0
                                                  : null === (d = e.fields) ||
                                                    void 0 === d
                                                  ? void 0
                                                  : null ===
                                                      (o = d.imageStyles) ||
                                                    void 0 === o
                                                  ? void 0
                                                  : o.fields,
                                              applyDeviceStyles:
                                                null == e
                                                  ? void 0
                                                  : null === (c = e.fields) ||
                                                    void 0 === c
                                                  ? void 0
                                                  : c.applyDeviceStyles,
                                            }),
                                          });
                                        }),
                                }),
                              });
                            }),
                          }),
                      ],
                    }),
                  }),
                F &&
                  !(null == q
                    ? void 0
                    : null === (x = q.fields) || void 0 === x
                    ? void 0
                    : x.hidden) &&
                  (0, r.jsx)("div", {
                    className: " w-100 overflow-auto",
                    style: {
                      padding:
                        null == q
                          ? void 0
                          : null === (f = q.fields) || void 0 === f
                          ? void 0
                          : f.padding,
                      margin: L
                        ? void 0
                        : null == q
                        ? void 0
                        : null === (j = q.fields) || void 0 === j
                        ? void 0
                        : j.margin,
                      whiteSpace: "nowrap",
                    },
                    children: (0, r.jsxs)("table", {
                      className: O,
                      ref: S,
                      children: [
                        C &&
                          (0, r.jsx)(r.Fragment, {
                            children: (0, r.jsx)("tr", {
                              style: {
                                backgroundColor: C.fields.backgroundColor,
                              },
                              children:
                                null == C
                                  ? void 0
                                  : null === (y = C.fields) || void 0 === y
                                  ? void 0
                                  : null === (b = y.columns) || void 0 === b
                                  ? void 0
                                  : b.map((e) => {
                                      var l, i, n, a, s, t;
                                      return (0, r.jsx)("th", {
                                        style: {
                                          textAlign: e.fields.textAlign,
                                        },
                                        rowSpan: e.fields.rowSpan,
                                        colSpan: e.fields.colSpan,
                                        children: (0, r.jsx)(z, {
                                          text:
                                            null == e
                                              ? void 0
                                              : null === (l = e.fields) ||
                                                void 0 === l
                                              ? void 0
                                              : l.content,
                                          device:
                                            null == e
                                              ? void 0
                                              : null === (n = e.fields) ||
                                                void 0 === n
                                              ? void 0
                                              : null === (i = n.styles) ||
                                                void 0 === i
                                              ? void 0
                                              : i.fields,
                                          imageDevice:
                                            null == e
                                              ? void 0
                                              : null === (s = e.fields) ||
                                                void 0 === s
                                              ? void 0
                                              : null === (a = s.imageStyles) ||
                                                void 0 === a
                                              ? void 0
                                              : a.fields,
                                          applyDeviceStyles:
                                            null == e
                                              ? void 0
                                              : null === (t = e.fields) ||
                                                void 0 === t
                                              ? void 0
                                              : t.applyDeviceStyles,
                                        }),
                                      });
                                    }),
                            }),
                          }),
                        I &&
                          (0, r.jsx)(r.Fragment, {
                            children: I.map((e) => {
                              var l, i;
                              return (0, r.jsx)(r.Fragment, {
                                children: (0, r.jsx)("tr", {
                                  style: {
                                    backgroundColor: e.fields.backgroundColor,
                                  },
                                  children:
                                    null == e
                                      ? void 0
                                      : null === (i = e.fields) || void 0 === i
                                      ? void 0
                                      : null === (l = i.columns) || void 0 === l
                                      ? void 0
                                      : l.map((e) => {
                                          var l, i, n, a, s, t;
                                          return (0, r.jsx)("td", {
                                            style: {
                                              textAlign: e.fields.textAlign,
                                            },
                                            rowSpan: e.fields.rowSpan,
                                            colSpan: e.fields.colSpan,
                                            children: (0, r.jsx)(z, {
                                              text:
                                                null == e
                                                  ? void 0
                                                  : null === (l = e.fields) ||
                                                    void 0 === l
                                                  ? void 0
                                                  : l.content,
                                              device:
                                                null == e
                                                  ? void 0
                                                  : null === (n = e.fields) ||
                                                    void 0 === n
                                                  ? void 0
                                                  : null === (i = n.styles) ||
                                                    void 0 === i
                                                  ? void 0
                                                  : i.fields,
                                              imageDevice:
                                                null == e
                                                  ? void 0
                                                  : null === (s = e.fields) ||
                                                    void 0 === s
                                                  ? void 0
                                                  : null ===
                                                      (a = s.imageStyles) ||
                                                    void 0 === a
                                                  ? void 0
                                                  : a.fields,
                                              applyDeviceStyles:
                                                null == e
                                                  ? void 0
                                                  : null === (t = e.fields) ||
                                                    void 0 === t
                                                  ? void 0
                                                  : t.applyDeviceStyles,
                                            }),
                                          });
                                        }),
                                }),
                              });
                            }),
                          }),
                      ],
                    }),
                  }),
              ],
            })
          );
        };
      ((a = t || (t = {})).Grid = "Grid"), (a.Carousel = "Carousel");
      var et = (e) => {
          let { section: l } = e,
            {
              type: i,
              businessType: n,
              stars: a,
              templateId: s,
              tags: d,
            } = l.fields,
            [c, h] = (0, o.useState)(),
            [m, v] = (0, o.useState)(),
            p = () => {
              switch (n) {
                case u.K0.SENIOR:
                  h("selectquotesenior.com"), v("54f488c10000ff00057dc6cd");
                  break;
                case u.K0.LIFE:
                  h("selectquote.com"), v("5400958400006400057a03de");
                  break;
                case u.K0.AUTO_REVIEWS:
                  h("selectquoteautoandhome.com"),
                    v("5519c5390000ff00057e6498");
              }
            };
          return (
            (0, o.useEffect)(() => {
              p(),
                setTimeout(() => {
                  var e = document.getElementById("trustbox");
                  e &&
                    window.Trustpilot &&
                    window.Trustpilot.loadFromElement(e, !0);
                }, 2e3);
            }, []),
            (0, r.jsx)("section", {
              className: "w-100",
              children:
                i === t.Carousel
                  ? (0, r.jsx)("div", {
                      id: "trustbox",
                      "data-locale": "en-US",
                      "data-template-id": s,
                      "data-businessunit-id": m,
                      "data-style-height": "240px",
                      "data-style-width": "100%",
                      "data-theme": "light",
                      "data-stars": a,
                      "data-review-languages": "en",
                      "data-tags": d,
                      children: (0, r.jsx)("a", {
                        href: "https://www.trustpilot.com/review/".concat(c),
                        target: "_blank",
                        rel: "noopener",
                        children: (0, r.jsx)("span", {
                          children: "Loading Trustpilot...",
                        }),
                      }),
                    })
                  : i === t.Grid
                  ? (0, r.jsx)("div", {
                      id: "trustbox",
                      "data-locale": "en-US",
                      "data-template-id": s,
                      "data-tags": d,
                      "data-businessunit-id": m,
                      "data-style-height": "500px",
                      "data-style-width": "100%",
                      "data-theme": "light",
                      "data-stars": a,
                      "data-review-languages": "en",
                      children: (0, r.jsx)("a", {
                        href: "https://www.trustpilot.com/review/".concat(c),
                        target: "_blank",
                        rel: "noopener",
                        children: (0, r.jsx)("span", {
                          children: "Loading Trustpilot...",
                        }),
                      }),
                    })
                  : void 0,
            })
          );
        },
        er = (e) => {
          let { section: l } = e,
            { content: i, devices: n, applyDeviceStyles: a = [] } = l.fields,
            { deviceSize: t } = (0, g.b)(),
            d =
              null == n
                ? void 0
                : n.find((e) => {
                    var l;
                    return (
                      (null === (l = e.fields) || void 0 === l
                        ? void 0
                        : l.type) === s.Desktop
                    );
                  }),
            u =
              null == n
                ? void 0
                : n.find((e) => {
                    var l;
                    return (
                      (null === (l = e.fields) || void 0 === l
                        ? void 0
                        : l.type) === s.Mobile
                    );
                  }),
            m = (0, h.sD)(t),
            x = (0, h.UJ)(t),
            f = (0, o.useMemo)(
              () =>
                a.length
                  ? C()(
                      a
                        .map((e) => {
                          var l, i;
                          let n = v(e);
                          return m
                            ? [
                                n,
                                p(
                                  e,
                                  null == d
                                    ? void 0
                                    : null === (l = d.fields) || void 0 === l
                                    ? void 0
                                    : l[e]
                                ),
                              ]
                            : x
                            ? [
                                n,
                                p(
                                  e,
                                  null == u
                                    ? void 0
                                    : null === (i = u.fields) || void 0 === i
                                    ? void 0
                                    : i[e]
                                ),
                              ]
                            : [n, void 0];
                        })
                        .filter((e) => {
                          let [, l] = e;
                          return void 0 !== l;
                        })
                    )
                  : {},
              [a, m, x, d, u]
            );
          if (Array.isArray(i)) {
            var j, b, y, N, w, S, k, M, I, P, q, A, D, F, L, T, z, E, O;
            return (0, r.jsxs)(r.Fragment, {
              children: [
                m &&
                  (0, r.jsx)("div", {
                    className: "".concat(
                      (
                        null == d
                          ? void 0
                          : null === (j = d.fields) || void 0 === j
                          ? void 0
                          : j.flexWrap
                      )
                        ? null == d
                          ? void 0
                          : null === (b = d.fields) || void 0 === b
                          ? void 0
                          : b.flexWrap
                        : "flex-wrap"
                    ),
                    style: {
                      display: (
                        null == d
                          ? void 0
                          : null === (y = d.fields) || void 0 === y
                          ? void 0
                          : y.display
                      )
                        ? null == d
                          ? void 0
                          : null === (N = d.fields) || void 0 === N
                          ? void 0
                          : N.display
                        : "flex",
                      justifyContent: "".concat(
                        null == d
                          ? void 0
                          : null === (w = d.fields) || void 0 === w
                          ? void 0
                          : w.justifyContent
                      ),
                      alignItems:
                        null == d
                          ? void 0
                          : null === (S = d.fields) || void 0 === S
                          ? void 0
                          : S.alignItems,
                      width:
                        null == d
                          ? void 0
                          : null === (k = d.fields) || void 0 === k
                          ? void 0
                          : k.width,
                    },
                    children: (0, r.jsx)("div", {
                      style: {
                        margin:
                          null == d
                            ? void 0
                            : null === (M = d.fields) || void 0 === M
                            ? void 0
                            : M.margin,
                        padding:
                          null == d
                            ? void 0
                            : null === (I = d.fields) || void 0 === I
                            ? void 0
                            : I.padding,
                        textAlign: "".concat(
                          null == d
                            ? void 0
                            : null === (P = d.fields) || void 0 === P
                            ? void 0
                            : P.textAlign
                        ),
                        ...f,
                      },
                      children: i.map((e, i) => {
                        let n = c().get(e, "sys.contentType.sys.id"),
                          a = eo[n];
                        if (!a)
                          return (
                            console.warn("".concat(n, " can not be handled")),
                            null
                          );
                        let { id: s } = l.sys;
                        return (0, r.jsx)(
                          a,
                          { section: e },
                          "".concat(n, "-").concat(s)
                        );
                      }),
                    }),
                  }),
                x &&
                  (0, r.jsx)("div", {
                    className: "".concat(
                      (
                        null == u
                          ? void 0
                          : null === (q = u.fields) || void 0 === q
                          ? void 0
                          : q.flexWrap
                      )
                        ? null == u
                          ? void 0
                          : null === (A = u.fields) || void 0 === A
                          ? void 0
                          : A.flexWrap
                        : "flex-wrap"
                    ),
                    style: {
                      display: (
                        null == u
                          ? void 0
                          : null === (D = u.fields) || void 0 === D
                          ? void 0
                          : D.display
                      )
                        ? null == u
                          ? void 0
                          : null === (F = u.fields) || void 0 === F
                          ? void 0
                          : F.display
                        : "flex",
                      justifyContent: "".concat(
                        null == u
                          ? void 0
                          : null === (L = u.fields) || void 0 === L
                          ? void 0
                          : L.justifyContent
                      ),
                      alignItems:
                        null == u
                          ? void 0
                          : null === (T = u.fields) || void 0 === T
                          ? void 0
                          : T.alignItems,
                    },
                    children: (0, r.jsx)("div", {
                      style: {
                        margin:
                          null == u
                            ? void 0
                            : null === (z = u.fields) || void 0 === z
                            ? void 0
                            : z.margin,
                        padding:
                          null == u
                            ? void 0
                            : null === (E = u.fields) || void 0 === E
                            ? void 0
                            : E.padding,
                        textAlign: "".concat(
                          null == u
                            ? void 0
                            : null === (O = u.fields) || void 0 === O
                            ? void 0
                            : O.textAlign
                        ),
                        ...f,
                      },
                      children: i.map((e, i) => {
                        let n = c().get(e, "sys.contentType.sys.id"),
                          a = eo[n];
                        if (!a)
                          return (
                            console.warn("".concat(n, " can not be handled")),
                            null
                          );
                        let { id: s } = l.sys;
                        return (0, r.jsx)(
                          a,
                          { section: e },
                          "".concat(n, "-").concat(s)
                        );
                      }),
                    }),
                  }),
              ],
            });
          }
        };
      let eo = {
        [u.HV.Hyperlink]: R,
        [u.HV.RichTextContent]: E,
        [u.HV.Image]: Y,
      };
      var ed = i(6066),
        ec = (e) => {
          var l, i, n, a, t, o;
          let { section: d } = e,
            {
              images: c,
              devices: u,
              config: m,
              dotColor: v = "#f47b20",
            } = d.fields,
            { deviceSize: p } = (0, g.b)(),
            x =
              null == u
                ? void 0
                : u.find((e) => {
                    var l;
                    return (
                      (null === (l = e.fields) || void 0 === l
                        ? void 0
                        : l.type) === s.Desktop
                    );
                  }),
            f =
              null == u
                ? void 0
                : u.find((e) => {
                    var l;
                    return (
                      (null === (l = e.fields) || void 0 === l
                        ? void 0
                        : l.type) === s.Mobile
                    );
                  }),
            j = {
              responsive:
                null == m
                  ? void 0
                  : m.map((e) => {
                      var l;
                      return {
                        breakpoint:
                          null == e
                            ? void 0
                            : null === (l = e.fields) || void 0 === l
                            ? void 0
                            : l.breakpoint,
                        settings: { ...(null == e ? void 0 : e.fields) },
                      };
                    }),
            },
            b = (e) => {
              var l, i, n, a, t, o, d, c;
              let u =
                  null == e
                    ? void 0
                    : null === (i = e.fields) || void 0 === i
                    ? void 0
                    : null === (l = i.devices) || void 0 === l
                    ? void 0
                    : l.find((e) => {
                        var l;
                        return (
                          (null === (l = e.fields) || void 0 === l
                            ? void 0
                            : l.type) === s.Desktop
                        );
                      }),
                m =
                  null == e
                    ? void 0
                    : null === (a = e.fields) || void 0 === a
                    ? void 0
                    : null === (n = a.devices) || void 0 === n
                    ? void 0
                    : n.find((e) => {
                        var l;
                        return (
                          (null === (l = e.fields) || void 0 === l
                            ? void 0
                            : l.type) === s.Mobile
                        );
                      });
              return (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, h.sD)(p) &&
                    (0, r.jsx)("img", {
                      src: "https:".concat(e.fields.imageFile.fields.file.url),
                      width:
                        null == u
                          ? void 0
                          : null === (t = u.fields) || void 0 === t
                          ? void 0
                          : t.width,
                      height:
                        null == u
                          ? void 0
                          : null === (o = u.fields) || void 0 === o
                          ? void 0
                          : o.height,
                      alt: e.fields.imageName,
                    }),
                  (0, h.UJ)(p) &&
                    (0, r.jsx)("img", {
                      src: "https:".concat(e.fields.imageFile.fields.file.url),
                      width:
                        null == m
                          ? void 0
                          : null === (d = m.fields) || void 0 === d
                          ? void 0
                          : d.width,
                      height:
                        null == m
                          ? void 0
                          : null === (c = m.fields) || void 0 === c
                          ? void 0
                          : c.height,
                      alt: e.fields.imageName,
                    }),
                ],
              });
            },
            y = (e) => {
              let { dots: l, dotColor: i } = e;
              return (0, r.jsx)("ul", {
                className: "slick-dots",
                children: l.map((e) => {
                  var l, n;
                  return (0, r.jsx)("span", {
                    className:
                      null == e
                        ? void 0
                        : null === (l = e.props) || void 0 === l
                        ? void 0
                        : l.className,
                    style:
                      (null == e
                        ? void 0
                        : null === (n = e.props) || void 0 === n
                        ? void 0
                        : n.className) == "slick-active"
                        ? { color: i, backgroundColor: i }
                        : {},
                    children: e,
                  });
                }),
              });
            },
            N = () =>
              (0, r.jsx)(ed.Z, {
                className: "companies-slider",
                ...j,
                appendDots: (e) => (0, r.jsx)(y, { dots: e, dotColor: v }),
                children: c.map((e) => {
                  var l, i, n, a;
                  return (0, r.jsx)(
                    "div",
                    {
                      className: "company position-relative",
                      children: (
                        null == e
                          ? void 0
                          : null === (l = e.fields) || void 0 === l
                          ? void 0
                          : l.link
                      )
                        ? (0, r.jsx)("a", {
                            rel: (
                              null == e
                                ? void 0
                                : null === (i = e.fields) || void 0 === i
                                ? void 0
                                : i.externalLink
                            )
                              ? "noopener noreferrer"
                              : "",
                            target: (
                              null == e
                                ? void 0
                                : null === (n = e.fields) || void 0 === n
                                ? void 0
                                : n.externalLink
                            )
                              ? "_blank"
                              : "",
                            href: "".concat(
                              null == e
                                ? void 0
                                : null === (a = e.fields) || void 0 === a
                                ? void 0
                                : a.link
                            ),
                            children: b(e),
                          })
                        : b(e),
                    },
                    e.sys.id
                  );
                }),
              });
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, h.sD)(p) &&
                (0, r.jsx)("section", {
                  style: {
                    margin:
                      null == x
                        ? void 0
                        : null === (l = x.fields) || void 0 === l
                        ? void 0
                        : l.margin,
                  },
                  className: "company-section ",
                  children: (0, r.jsx)("div", {
                    style: {
                      backgroundColor:
                        null == x
                          ? void 0
                          : null === (i = x.fields) || void 0 === i
                          ? void 0
                          : i.backgroundColor,
                      padding:
                        null == x
                          ? void 0
                          : null === (n = x.fields) || void 0 === n
                          ? void 0
                          : n.padding,
                    },
                    children: N(),
                  }),
                }),
              (0, h.UJ)(p) &&
                (0, r.jsx)("section", {
                  style: {
                    margin:
                      null == f
                        ? void 0
                        : null === (a = f.fields) || void 0 === a
                        ? void 0
                        : a.margin,
                  },
                  className: "company-section ",
                  children: (0, r.jsx)("div", {
                    style: {
                      backgroundColor:
                        null == f
                          ? void 0
                          : null === (t = f.fields) || void 0 === t
                          ? void 0
                          : t.backgroundColor,
                      padding:
                        null == f
                          ? void 0
                          : null === (o = f.fields) || void 0 === o
                          ? void 0
                          : o.padding,
                    },
                    children: N(),
                  }),
                }),
            ],
          });
        },
        eu = i(6154);
      let eh = {},
        em = async (e) => {
          if (eh[e]) return eh[e];
          try {
            var l, i, n;
            let a = await eu.Z.get("/api/getZipInfo", {
              params: { zipcode: e },
            });
            return null !==
              (n = (
                null !==
                  (i =
                    null === (l = a.data) || void 0 === l
                      ? void 0
                      : l.states) && void 0 !== i
                  ? i
                  : []
              )[0]) && void 0 !== n
              ? n
              : null;
          } catch (e) {
            return console.error(e), null;
          }
        };
      var ev = i(246),
        ep = (e) => {
          let {
              firstName: l,
              lastName: i,
              selectedYear: n,
              selectedMonth: a,
              selectedDay: s,
              annualIncome: t,
              age: o,
              lifeInsuranceCoverage: d,
              hasLifeInsurance: c,
              savingsAmount: h,
              chooseOption: m,
              debtAmount: v,
            } = e,
            p = (e) => {
              let l = new Date("".concat(e, " 1, 2000")),
                i = l.getMonth() + 1;
              return i;
            },
            x = ""
              .concat(10 > p(a) ? "0" + p(a) : p(a), "/")
              .concat(s, "/")
              .concat(n),
            f = () => {
              let e = new Date(),
                l = new Date(parseInt(n), p(a) - 1, parseInt(s)),
                i = e.getFullYear(),
                t = l.getFullYear(),
                r = i - t,
                o = e.getMonth() - l.getMonth();
              return o < 0 || (0 === o && e.getDate() < l.getDate())
                ? r - 1
                : r;
            },
            g = () => {
              let e = f(),
                l = parseInt(t.replace(/\$|,/g, ""), 10) || 0,
                i = u.V6.find((l) => l[0] === e);
              return i ? i[2] * l : 0;
            },
            j = () => g(),
            b = () => j() + (parseFloat(v) || 0) + (parseFloat(m) || 0) - N(),
            y = () => {
              let e = parseInt(m.replace(/\$|,/g, ""), 10) || 0;
              return j() + (parseInt(v) || 0) + e;
            },
            N = () => (parseFloat(h) || 0) + (parseFloat(d) || 0);
          return (0, r.jsx)("div", {
            children:
              0 >= parseInt(b().toString())
                ? (0, r.jsx)("div", {
                    className: "text-center",
                    children: (0, r.jsxs)("p", {
                      className: "font-500 font-20 center-content",
                      children: [
                        "You can probably do without life insurance right now. However, if you think you have a unique circumstance please contact one of our experienced agents at ",
                        (0, r.jsxs)("span", {
                          className: "font-blue",
                          children: [
                            " ",
                            (0, r.jsx)("a", {
                              className: "font-700 font-blue font-20",
                              href: "tel:1-833-520-7539",
                              children: "1-833-520-7539",
                            }),
                          ],
                        }),
                      ],
                    }),
                  })
                : (0, r.jsxs)("div", {
                    children: [
                      (0, r.jsxs)("h2", {
                        className: "mb-40-auto w-89",
                        children: [
                          l,
                          ", We recommend this life insurance coverage based on your answers and your coverage needs.",
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className: "screen-9-parent-container",
                        children: [
                          (0, r.jsxs)("div", {
                            className: "coverage-recommendation",
                            children: [
                              (0, r.jsx)("p", {
                                className: "font-700 mtb-20 center-content",
                                children: "Coverage Recommendation",
                              }),
                              (0, r.jsxs)("div", {
                                className: "coverage-amount-box",
                                children: [
                                  (0, r.jsx)("p", {
                                    className: "font-700 mb-10 center-content",
                                    children: "Coverage Amount",
                                  }),
                                  (0, r.jsxs)("p", {
                                    className:
                                      "font-800-orange mb-10 center-content",
                                    children: ["$", b().toLocaleString()],
                                  }),
                                  (0, r.jsx)("p", {
                                    className: "font-700 mb-10 center-content",
                                    children: "Policy Length",
                                  }),
                                  (0, r.jsx)("p", {
                                    className: "font-800-orange center-content",
                                    children:
                                      (() => {
                                        let e = [10, 15, 20, 25, 30];
                                        if ("0" === o) {
                                          let l = f(),
                                            i = 65 - l;
                                          if (l >= 65) return 10;
                                          if (i > 30) return 30;
                                          for (let l = 0; l < e.length; l++)
                                            if (i === e[l] || i < e[l])
                                              return e[l];
                                        } else {
                                          let l = parseInt(o),
                                            i = 22 - l;
                                          if (l >= 22) return 10;
                                          if (i > 30) return 30;
                                          for (let l = 0; l < e.length; l++)
                                            if (i === e[l] || i < e[l])
                                              return e[l];
                                        }
                                      })() + " Years",
                                  }),
                                ],
                              }),
                              (0, r.jsx)("p", {
                                className:
                                  "font-400 w-235 mt-20 center-content",
                                children:
                                  "Want to compare life insurance rates for this amount of coverage? We can do it for free.",
                              }),
                              (0, r.jsx)("a", {
                                href: "https://life-selectquote.outliant.com/quote-form?dob="
                                  .concat(x, "&sta[…]ori&lastname=")
                                  .concat(i, "&firstname=")
                                  .concat(l, "&currently_insured=")
                                  .concat(
                                    "yes" === c ? "1" : "0",
                                    "&coverage_amount="
                                  )
                                  .concat(d),
                                target: "_blank",
                                children: (0, r.jsx)("button", {
                                  className:
                                    "compare-quotes-now-button mtb-20 centered-button",
                                  children: "Compare Quotes Now",
                                }),
                              }),
                            ],
                          }),
                          (0, r.jsxs)("div", {
                            className: "coverage-calculations mr-20",
                            children: [
                              (0, r.jsx)("p", {
                                className: "font-700 mtb-20 center-content",
                                children: "Coverage Calculations",
                              }),
                              (0, r.jsxs)("div", {
                                className: "financial-cushion",
                                children: [
                                  (0, r.jsxs)("div", {
                                    className: "financial-cushion-left-div",
                                    children: [
                                      (0, r.jsx)("div", {
                                        className: "h-40 mb-10",
                                        children: (0, r.jsx)("p", {
                                          className: "font-400 mb-10",
                                          children: "Financial Cushion",
                                        }),
                                      }),
                                      (0, r.jsx)("div", {
                                        className: "h-40",
                                        children: (0, r.jsx)("p", {
                                          className: "font-400 mb-10",
                                          children: "Debt",
                                        }),
                                      }),
                                      (0, r.jsx)("div", {
                                        children:
                                          "0" !== o &&
                                          (0, r.jsx)("p", {
                                            className: "font-400",
                                            children:
                                              "Post High School Education Support",
                                          }),
                                      }),
                                    ],
                                  }),
                                  (0, r.jsxs)("div", {
                                    className: "financial-cushion-right-div",
                                    children: [
                                      (0, r.jsx)("div", {
                                        className: "h-40 mb-10",
                                        children: (0, r.jsxs)("p", {
                                          className: "font-400 mb-10",
                                          children: [
                                            "$",
                                            j().toLocaleString() || 0,
                                          ],
                                        }),
                                      }),
                                      (0, r.jsx)("div", {
                                        className: "h-40",
                                        children: (0, r.jsxs)("p", {
                                          className: "font-400 mb-10",
                                          children: [
                                            "$",
                                            parseFloat(v || 0).toLocaleString(),
                                          ],
                                        }),
                                      }),
                                      (0, r.jsx)("div", {
                                        children:
                                          "0" !== o &&
                                          (0, r.jsxs)("p", {
                                            className: "font-400",
                                            children: [
                                              "$",
                                              parseFloat(
                                                m || 0
                                              ).toLocaleString(),
                                            ],
                                          }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, r.jsx)("hr", {}),
                              (0, r.jsxs)("div", {
                                className: "total",
                                children: [
                                  (0, r.jsxs)("div", {
                                    className: "total-left-side",
                                    children: [
                                      (0, r.jsx)("p", {
                                        className: "font-700 mb-10",
                                        children: "Total",
                                      }),
                                      (0, r.jsx)("p", {
                                        className: "font-400",
                                        children: "Assets",
                                      }),
                                    ],
                                  }),
                                  (0, r.jsxs)("div", {
                                    className: "total-right-side",
                                    children: [
                                      (0, r.jsxs)("p", {
                                        className: "font-700 mb-10",
                                        children: [
                                          "$",
                                          y().toLocaleString() || 0,
                                        ],
                                      }),
                                      (0, r.jsxs)("p", {
                                        className: "font-400",
                                        children: [
                                          " $",
                                          (
                                            parseInt(d) + parseFloat(h || 0)
                                          ).toLocaleString(),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, r.jsx)("hr", {}),
                              (0, r.jsxs)("div", {
                                className: "your-needs",
                                children: [
                                  (0, r.jsx)("div", {
                                    className: "your-needs-left-side",
                                    children: (0, r.jsx)("p", {
                                      className: "font-700",
                                      children: "Your Needs",
                                    }),
                                  }),
                                  (0, r.jsx)("div", {
                                    className: "your-needs-right-side",
                                    children: (0, r.jsxs)("p", {
                                      className: "font-700",
                                      children: [
                                        "$",
                                        (
                                          y() -
                                          ((parseInt(h) || 0) + parseInt(d))
                                        ).toLocaleString(),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, r.jsxs)("p", {
                        className: "font-400 mtb-10 center-content",
                        children: [
                          "For more information call us at ",
                          (0, r.jsxs)("span", {
                            className: "font-blue",
                            children: [
                              " ",
                              (0, r.jsx)("a", {
                                className: "font-blue",
                                href: "tel:1-833-520-7539",
                                children: "1-833-520-7539",
                              }),
                            ],
                          }),
                          " to get started.",
                        ],
                      }),
                    ],
                  }),
          });
        },
        ex = i(1664),
        ef = i.n(ex),
        eg = { src: "/_next/static/media/1.1a8082ed.jpeg" },
        ej = { src: "/_next/static/media/2.e12941db.jpeg" },
        eb = { src: "/_next/static/media/3.23f5db61.jpeg" },
        ey = { src: "/_next/static/media/4.d66ade1b.jpeg" },
        eN = { src: "/_next/static/media/5.8abaa100.jpeg" },
        ew = { src: "/_next/static/media/6.552ae856.jpeg" },
        eS = { src: "/_next/static/media/7.0f59b416.jpeg" },
        ek = (e) => {
          let { selectedOptions: l } = e,
            [i, n] = (0, o.useState)(""),
            [a, s] = (0, o.useState)(""),
            [t, d] = (0, o.useState)((0, r.jsx)(r.Fragment, {}));
          return (
            (0, o.useEffect)(() => {
              let {
                  question1: e,
                  question2: i,
                  question3: a,
                  question4: t,
                } = l,
                o = "Yes" === e,
                c = "Yes" === i,
                u = "Yes" === a,
                h = "Yes" === t,
                m = "No" === e,
                v = "No" === i,
                p = "No" === a,
                x = "No" === t;
              o &&
                c &&
                u &&
                h &&
                (n(
                  "A Medicare Advantage Prescription Drug Plan (MAPD) with Travel Benefits or a Medicare Supplement Plan"
                ),
                s(eg.src),
                d(
                  (0, r.jsxs)("div", {
                    children: [
                      "Will you be doing a lot of traveling or wintering down south? Then a ",
                      (0, r.jsx)(ef(), {
                        href: "/medicare/medicare-plans/advantage-plans",
                        children: "Medicare Advantage Prescription Drug Plan",
                      }),
                      " with travel benefits is a good option. If these are not available in your area, consider a ",
                      (0, r.jsx)(ef(), {
                        href: "/medicare/medicare-plans/supplement-plans",
                        children: "Medicare Supplement",
                      }),
                      ". If you choose a Medicare Supplement plan, add a separate ",
                      (0, r.jsx)(ef(), {
                        href: "/medicare/medicare-plans/prescription-drug-plans",
                        children: "Medicare Part D",
                      }),
                      " plan to cover your prescriptions.",
                    ],
                  })
                )),
                m &&
                  c &&
                  u &&
                  h &&
                  (n(
                    "A Medicare Supplement Plan + Part D Prescription Drug Plan"
                  ),
                  s(ej.src),
                  d(
                    (0, r.jsxs)("div", {
                      children: [
                        "A ",
                        (0, r.jsx)(ef(), {
                          href: "/medicare/medicare-plans/supplement-plans",
                          children: "Medicare Supplement Plan",
                        }),
                        " provides you comprehensive care and access to routine care when you travel. We recommend adding a separate ",
                        (0, r.jsx)(ef(), {
                          href: "/medicare/medicare-plans/prescription-drug-plans",
                          children: "Medicare Part D",
                        }),
                        " prescription drug plan to cover prescriptions.",
                      ],
                    })
                  )),
                o &&
                  v &&
                  u &&
                  h &&
                  (n("A Medicare Advantage Prescription Drug Plan (MAPD)"),
                  s(eb.src),
                  d(
                    (0, r.jsxs)("div", {
                      children: [
                        "If keeping your monthly upfront cost on the low side is important to you, a ",
                        (0, r.jsx)(ef(), {
                          href: "/medicare/medicare-plans/advantage-plans",
                          children:
                            "Medicare Advantage Plan with Prescription Drug",
                        }),
                        " coverage is a good choice for you.",
                      ],
                    })
                  )),
                o &&
                  c &&
                  p &&
                  h &&
                  (n(
                    "A Medicare Advantage Prescription Drug Plan (MAPD) with Travel Benefits or a Medicare Supplement Plan."
                  ),
                  s(ey.src),
                  d(
                    (0, r.jsxs)("div", {
                      children: [
                        "Will you be doing a lot of traveling or wintering down south? Then a ",
                        (0, r.jsx)(ef(), {
                          href: "/medicare/medicare-plans/advantage-plans",
                          children: "Medicare Advantage Prescription Drug Plan",
                        }),
                        " with travel benefits is a good option. If these are not available in your area, consider a ",
                        (0, r.jsx)(ef(), {
                          href: "/medicare/medicare-plans/supplement-plans",
                          children: "Medicare Supplement Plan",
                        }),
                        ". If you choose a Medicare Supplement plan, add a separate Medicare Part D plan to cover your prescriptions.",
                      ],
                    })
                  )),
                o &&
                  c &&
                  u &&
                  x &&
                  (n(
                    "A Medicare Advantage Plan (MA) or Medicare Supplement Plan"
                  ),
                  s(eg.src),
                  d(
                    (0, r.jsxs)("div", {
                      children: [
                        "You’re pretty healthy. Since you visit doctors and the hospital less than 6 times a year, weigh the cost difference between a ",
                        (0, r.jsx)(ef(), {
                          href: "/medicare/medicare-plans/advantage-plans",
                          children: "Medicare Advantage Plan",
                        }),
                        " and ",
                        (0, r.jsx)(ef(), {
                          href: "/medicare/medicare-plans/supplement-plans",
                          children: "Medicare Supplement",
                        }),
                        ".",
                      ],
                    })
                  )),
                m &&
                  v &&
                  u &&
                  h &&
                  (n(
                    "A Medicare Supplement Plan + Part D Prescription Drug Plan"
                  ),
                  s(eN.src),
                  d(
                    (0, r.jsxs)("div", {
                      children: [
                        "For comprehensive care and to limit your out of pocket exposure, this is the ",
                        (0, r.jsx)(ef(), {
                          href: "/medicare/medicare-plans/supplement-plans",
                          children: "Medicare Supplement Plan",
                        }),
                        " to consider. Be sure to add a separate ",
                        (0, r.jsx)(ef(), {
                          href: "/medicare/medicare-plans/prescription-drug-plans",
                          children: "Medicare Part D prescription drug plan",
                        }),
                        ".",
                      ],
                    })
                  )),
                o &&
                  v &&
                  p &&
                  h &&
                  (n(
                    "A Medicare Supplement Plan + Part D Prescription Drug Plan"
                  ),
                  s(ej.src),
                  d(
                    (0, r.jsxs)("div", {
                      children: [
                        "Because you visit doctors and go to the hospital more than 6 times a year, weigh out the costs of both a ",
                        (0, r.jsx)(ef(), {
                          href: "/medicare/medicare-plans/advantage-plans/",
                          children: "Medicare Advantage",
                        }),
                        " Prescription Drug Plan and a ",
                        (0, r.jsx)(ef(), {
                          href: "/medicare/medicare-plans/supplement-plans/",
                          children: "Medicare Supplement Plan",
                        }),
                        ". Be sure to get a separate ",
                        (0, r.jsx)(ef(), {
                          href: "/medicare/medicare-plans/prescription-drug-plans",
                          children: "Medicare Part D prescription drug plan",
                        }),
                        " if you choose a Medicare Supplement plan.",
                      ],
                    })
                  )),
                o &&
                  c &&
                  p &&
                  x &&
                  (n(
                    "A Medicare Advantage Plan (MA) with Travel Benefits or a Medicare Supplement Plan"
                  ),
                  s(ej.src),
                  d(
                    (0, r.jsxs)("div", {
                      children: [
                        "You’re not sitting around. For routine care when you’re traveling, a ",
                        (0, r.jsx)(ef(), {
                          href: "/medicare/medicare-plans/advantage-plans",
                          children: "Medicare Advantage Plan",
                        }),
                        " with travel benefits is the way to go. If we don’t have these available in your area, consider a ",
                        (0, r.jsx)(ef(), {
                          href: "/medicare/medicare-plans/supplement-plans",
                          children: "Medicare Supplement Plan.",
                        }),
                      ],
                    })
                  )),
                m &&
                  v &&
                  p &&
                  h &&
                  (n(
                    "A Medicare Supplement Plan + Part D Prescription Drug Plan"
                  ),
                  s(eb.src),
                  d(
                    (0, r.jsxs)("div", {
                      children: [
                        "A ",
                        (0, r.jsx)(ef(), {
                          href: "/medicare/medicare-plans/supplement-plans",
                          children: "Medicare Supplement Plan",
                        }),
                        " delivers comprehensive care and limits your out-of-pocket costs. If you choose this plan, and a separate ",
                        (0, r.jsx)(ef(), {
                          href: "/medicare/medicare-plans/prescription-drug-plans",
                          children: "Medicare Part D",
                        }),
                        " prescription drug plan.",
                      ],
                    })
                  )),
                o &&
                  v &&
                  u &&
                  x &&
                  (n("A Medicare Advantage Plan (MA) or Medicare Supplement"),
                  s(eg.src),
                  d(
                    (0, r.jsx)("div", {
                      children:
                        "You’re pretty healthy. Since you visit doctors and the hospital less than 6 times a year, weigh the cost difference between a Medicare Advantage Plan and Medicare Supplement.",
                    })
                  )),
                m &&
                  c &&
                  p &&
                  h &&
                  (n(
                    "A Medicare Supplement Plan + Part D Prescription Drug Plan"
                  ),
                  s(ew.src),
                  d(
                    (0, r.jsxs)("div", {
                      children: [
                        "You want to travel, but still need routine care. A ",
                        (0, r.jsx)(ef(), {
                          href: "/medicare/medicare-plans/supplement-plans",
                          children: "Medicare Supplement Plan",
                        }),
                        " will provide you comprehensive care wherever you go. Be sure to add a separate ",
                        (0, r.jsx)(ef(), {
                          href: "/medicare/medicare-plans/prescription-drug-plans",
                          children: "Medicare Part D",
                        }),
                        " prescription drug plan.",
                      ],
                    })
                  )),
                m &&
                  c &&
                  u &&
                  x &&
                  (n("A Medicare Supplement Plan"),
                  s(ey.src),
                  d(
                    (0, r.jsxs)("div", {
                      children: [
                        "A ",
                        (0, r.jsx)(ef(), {
                          href: "/medicare/medicare-plans/supplement-plans",
                          children: "Medicare Supplement Plan",
                        }),
                        " will provide coverage and help pay for some of the healthcare costs Medicare Parts A and B don’t cover.",
                      ],
                    })
                  )),
                o &&
                  v &&
                  p &&
                  x &&
                  (n("A Medicare Advantage Plan (MA) or Medicare Supplement"),
                  s(eg.src),
                  d(
                    (0, r.jsxs)("div", {
                      children: [
                        "Weigh out the costs of both ",
                        (0, r.jsx)(ef(), {
                          href: "/medicare/medicare-plans/advantage-plans",
                          children: "Medicare Advantage Plan",
                        }),
                        " and ",
                        (0, r.jsx)(ef(), {
                          href: "/medicare/medicare-plans/supplement-plans",
                          children: "Medicare Supplement Plan",
                        }),
                        " because you visit doctors or go to the hospital more than 6 times a year.",
                      ],
                    })
                  )),
                m &&
                  c &&
                  p &&
                  x &&
                  (n("A Medicare Supplement Plan"),
                  s(eS.src),
                  d(
                    (0, r.jsxs)("div", {
                      children: [
                        "A ",
                        (0, r.jsx)(ef(), {
                          href: "/medicare/medicare-plans/supplement-plans",
                          children: "Medicare Supplement Plan",
                        }),
                        " will deliver comprehensive care and the option to travel and still have access to routine care.",
                      ],
                    })
                  )),
                m &&
                  v &&
                  u &&
                  x &&
                  (n("A Medicare Supplement Plan"),
                  s(eN.src),
                  d(
                    (0, r.jsxs)("div", {
                      children: [
                        "You’ll receive comprehensive care and limit your out-of-pocket costs with a ",
                        (0, r.jsx)(ef(), {
                          href: "/medicare/medicare-plans/supplement-plans",
                          children: "Medicare Supplement Plan.",
                        }),
                      ],
                    })
                  )),
                m &&
                  v &&
                  p &&
                  x &&
                  (n("A Medicare Supplement Plan"),
                  s(ej.src),
                  d(
                    (0, r.jsxs)("div", {
                      children: [
                        "A ",
                        (0, r.jsx)(ef(), {
                          href: "/medicare/medicare-plans/supplement-plans",
                          children: "Medicare Supplement Plan",
                        }),
                        " will provide coverage and help pay for some of the healthcare costs Medicare ",
                        (0, r.jsx)(ef(), {
                          href: "/medicare/medicare-parts/part-a",
                          children: "Parts A",
                        }),
                        " and ",
                        (0, r.jsx)(ef(), {
                          href: "/medicare/medicare-parts/part-b",
                          children: "B",
                        }),
                        " don’t cover.",
                      ],
                    })
                  ));
            }, []),
            (0, r.jsx)("div", {
              className: "plan-quiz-result",
              children: (0, r.jsx)("div", {
                className: "modal1",
                children: (0, r.jsxs)("div", {
                  className: "modal-content1",
                  children: [
                    (0, r.jsx)("h2", { className: "heading", children: i }),
                    (0, r.jsxs)("div", {
                      className: "flex",
                      children: [
                        (0, r.jsx)("img", { src: a, alt: "img" }),
                        (0, r.jsx)("p", {
                          className: "paragraph",
                          children: t,
                        }),
                      ],
                    }),
                    (0, r.jsx)("div", {
                      className: "btn-container",
                      children: (0, r.jsxs)("div", {
                        children: [
                          (0, r.jsx)("button", {
                            type: "submit",
                            children: (0, r.jsx)("a", {
                              href: "https://medicare.selectquote.com/quote-form/",
                              children: "Get Free Quotes",
                            }),
                          }),
                          (0, r.jsx)("p", {
                            children: "No obligation to enroll.",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            })
          );
        },
        eM = (e) => {
          var l,
            i,
            n,
            a,
            t,
            o,
            d,
            u,
            m,
            v,
            p,
            x,
            f,
            j,
            b,
            y,
            N,
            w,
            S,
            k,
            M,
            C,
            I,
            P,
            q,
            A;
          let { section: D } = e,
            F =
              null == D
                ? void 0
                : null === (i = D.fields) || void 0 === i
                ? void 0
                : null === (l = i.devices) || void 0 === l
                ? void 0
                : l.find((e) => {
                    var l;
                    return (
                      (null == e
                        ? void 0
                        : null === (l = e.fields) || void 0 === l
                        ? void 0
                        : l.type) === s.Desktop
                    );
                  }),
            L =
              null == D
                ? void 0
                : null === (a = D.fields) || void 0 === a
                ? void 0
                : null === (n = a.devices) || void 0 === n
                ? void 0
                : n.find((e) => {
                    var l;
                    return (
                      (null == e
                        ? void 0
                        : null === (l = e.fields) || void 0 === l
                        ? void 0
                        : l.type) === s.Mobile
                    );
                  }),
            { deviceSize: T } = (0, g.b)(),
            z = c().get(
              null == D
                ? void 0
                : null === (t = D.fields) || void 0 === t
                ? void 0
                : t.content,
              "sys.contentType.sys.id"
            ),
            E = eC[z];
          if (!E)
            return console.warn("".concat(z, " can not be handled")), null;
          let { id: O } = D.sys,
            _ = {
              section:
                null == D
                  ? void 0
                  : null === (o = D.fields) || void 0 === o
                  ? void 0
                  : o.content,
            };
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, h.sD)(T) &&
                (0, r.jsx)("div", {
                  style: {
                    width: "100%",
                    padding:
                      null == F
                        ? void 0
                        : null === (d = F.fields) || void 0 === d
                        ? void 0
                        : d.padding,
                    margin:
                      null == F
                        ? void 0
                        : null === (u = F.fields) || void 0 === u
                        ? void 0
                        : u.margin,
                    display: (
                      null == F
                        ? void 0
                        : null === (m = F.fields) || void 0 === m
                        ? void 0
                        : m.display
                    )
                      ? null == F
                        ? void 0
                        : null === (v = F.fields) || void 0 === v
                        ? void 0
                        : v.display
                      : "flex",
                    justifyContent: "".concat(
                      null == F
                        ? void 0
                        : null === (p = F.fields) || void 0 === p
                        ? void 0
                        : p.justifyContent
                    ),
                    alignItems:
                      null == F
                        ? void 0
                        : null === (x = F.fields) || void 0 === x
                        ? void 0
                        : x.alignItems,
                    backgroundColor: "".concat(
                      null == F
                        ? void 0
                        : null === (f = F.fields) || void 0 === f
                        ? void 0
                        : f.backgroundColor
                    ),
                    borderRadius:
                      null == F
                        ? void 0
                        : null === (j = F.fields) || void 0 === j
                        ? void 0
                        : j.borderRadius,
                    float:
                      null == F
                        ? void 0
                        : null === (b = F.fields) || void 0 === b
                        ? void 0
                        : b.float,
                    flex:
                      null == F
                        ? void 0
                        : null === (y = F.fields) || void 0 === y
                        ? void 0
                        : y.flex,
                  },
                  children: (0, r.jsx)(
                    E,
                    { ..._ },
                    "".concat(z, "-").concat(O)
                  ),
                }),
              (0, h.UJ)(T) &&
                (0, r.jsx)("div", {
                  style: {
                    display: (
                      null == L
                        ? void 0
                        : null === (N = L.fields) || void 0 === N
                        ? void 0
                        : N.display
                    )
                      ? null == L
                        ? void 0
                        : null === (w = L.fields) || void 0 === w
                        ? void 0
                        : w.display
                      : "flex",
                    width: "100%",
                    padding:
                      null == L
                        ? void 0
                        : null === (S = L.fields) || void 0 === S
                        ? void 0
                        : S.padding,
                    margin:
                      null == L
                        ? void 0
                        : null === (k = L.fields) || void 0 === k
                        ? void 0
                        : k.margin,
                    justifyContent: "".concat(
                      null == L
                        ? void 0
                        : null === (M = L.fields) || void 0 === M
                        ? void 0
                        : M.justifyContent
                    ),
                    alignItems:
                      null == L
                        ? void 0
                        : null === (C = L.fields) || void 0 === C
                        ? void 0
                        : C.alignItems,
                    backgroundColor: "".concat(
                      null == L
                        ? void 0
                        : null === (I = L.fields) || void 0 === I
                        ? void 0
                        : I.backgroundColor
                    ),
                    borderRadius:
                      null == L
                        ? void 0
                        : null === (P = L.fields) || void 0 === P
                        ? void 0
                        : P.borderRadius,
                    float:
                      null == L
                        ? void 0
                        : null === (q = L.fields) || void 0 === q
                        ? void 0
                        : q.float,
                    flex:
                      null == L
                        ? void 0
                        : null === (A = L.fields) || void 0 === A
                        ? void 0
                        : A.flex,
                  },
                  children: (0, r.jsx)(
                    E,
                    { ..._ },
                    "".concat(z, "-").concat(O)
                  ),
                }),
            ],
          });
        };
      let eC = {
        [u.HV.Hyperlink]: R,
        [u.HV.Image]: Y,
        [u.HV.RichTextContent]: E,
        [u.HV.Style]: B,
        [u.HV.FAQ]: J,
        [u.HV.Button]: ei,
        [u.HV.Divider]: en,
        [u.HV.MultiColumn]: K,
        [u.HV.Video]: (e) => {
          let { section: l } = e,
            { title: i, video: n, body: a, footer: s } = l.fields;
          return (0, r.jsx)("div", {
            className: "video-section",
            children: (0, r.jsxs)("div", {
              className: "wrapper",
              children: [
                (0, r.jsx)("div", {
                  className: "video",
                  children: (0, r.jsx)(ea.Z, {
                    controls: !0,
                    width: "217px",
                    height: "250px",
                    url: "".concat(n.fields.file.url),
                  }),
                }),
                (0, r.jsxs)("div", {
                  className: "copy",
                  children: [
                    (0, r.jsx)("p", { className: "title", children: i }),
                    (0, r.jsx)("h5", { className: "body", children: a }),
                    (0, r.jsx)("div", {
                      className: "footer-wrapper",
                      children: (0, r.jsx)("p", {
                        className: "footer",
                        children: s,
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        [u.HV.Table]: es,
        [u.HV.TrustPilot]: et,
        [u.HV.InlineContent]: er,
        [u.HV.SliderSection]: ec,
        [u.HV.SearchQuote]: (e) => {
          var l, i, n, a, s, t, d, c;
          let { section: u } = e,
            {
              styles: h,
              linkUrl: m,
              margin: v,
              buttonText: p,
              variant: x = "default",
              stateRichtextVariable: f,
              helperText: j,
              errorText: b,
              hoverBackground: y,
              hoverColor: N,
              helperTextAlignment: w,
            } = u.fields,
            [S, k] = (0, o.useState)(""),
            [M, C] = (0, o.useState)(""),
            I = "rounded" === x,
            [P, q] = (0, o.useState)(!1),
            [A, D] = (0, o.useState)(!1),
            [F, L] = (0, o.useState)(!1),
            { setRichtextVariable: T } = (0, g.b)(),
            z = !!b && (F || !A),
            E = (0, o.useCallback)((e) => {
              let l = sessionStorage.getItem("sCode");
              (l = l.replace(/^"|"$/g, "")),
                k("".concat(m, "?zip=").concat(e, "&sCode=").concat(l));
            }, []),
            O = (e) => {
              var l;
              C(e),
                (null == e
                  ? void 0
                  : null === (l = e.trim()) || void 0 === l
                  ? void 0
                  : l.length) !== 5 || isNaN(e)
                  ? (k(null), D(!1))
                  : b
                  ? (L(!0),
                    em(e)
                      .then(D)
                      .finally(() => L(!1)))
                  : E(e);
            };
          return (
            (0, o.useEffect)(() => {
              if (!b) return;
              let [e, ...l] = (null != f ? f : "").split(":");
              A
                ? (E(M), e && T(e, A.state))
                : (k(null), e && T(e, l.join(":").trim()));
            }, [b, A, f, E, M]),
            (0, r.jsx)(r.Fragment, {
              children: (0, r.jsxs)("div", {
                className: ""
                  .concat(I ? "template-search-quote-rounded" : "", " ")
                  .concat(5 !== M.length ? "input-is-not-full" : ""),
                style: {
                  boxShadow:
                    null == h
                      ? void 0
                      : null === (l = h.fields) || void 0 === l
                      ? void 0
                      : l.boxShadow,
                  maxWidth:
                    null == h
                      ? void 0
                      : null === (i = h.fields) || void 0 === i
                      ? void 0
                      : i.maxWidth,
                  width:
                    null == h
                      ? void 0
                      : null === (n = h.fields) || void 0 === n
                      ? void 0
                      : n.width,
                },
                children: [
                  (0, r.jsx)("input", {
                    placeholder: I ? "Enter your zip code" : "Enter Zip",
                    name: "zip",
                    style: {
                      width: "44%",
                      border: "1px solid ".concat(
                        null == h
                          ? void 0
                          : null === (a = h.fields) || void 0 === a
                          ? void 0
                          : a.backgroundColor
                      ),
                      padding: "10px 0px",
                      textAlign: "center",
                      color:
                        null == h
                          ? void 0
                          : null === (s = h.fields) || void 0 === s
                          ? void 0
                          : s.backgroundColor,
                    },
                    className: "cursor-center",
                    minLength: 5,
                    maxLength: 5,
                    onChange: (e) => {
                      O(e.target.value);
                    },
                  }),
                  (0, r.jsx)("a", {
                    onMouseEnter: () => q(!0),
                    onMouseLeave: () => q(!1),
                    href: S && !z ? S : "javascript:void(0);",
                    style: {
                      cursor: "pointer",
                      backgroundColor:
                        P && !z
                          ? y
                          : null == h
                          ? void 0
                          : null === (t = h.fields) || void 0 === t
                          ? void 0
                          : t.backgroundColor,
                      width: "56%",
                      marginLeft: v,
                      display: "inline-block",
                      textAlign: "center",
                      color:
                        P && !z
                          ? N
                          : null == h
                          ? void 0
                          : null === (d = h.fields) || void 0 === d
                          ? void 0
                          : d.textColor,
                      borderColor:
                        P && !z
                          ? N
                          : null == h
                          ? void 0
                          : null === (c = h.fields) || void 0 === c
                          ? void 0
                          : c.textColor,
                      padding: "11px 0px",
                    },
                    className: "flat-button fw-bold quote-btn",
                    children: p,
                  }),
                  null === A &&
                    !!b &&
                    (0, r.jsx)("span", {
                      className: "template-search-quote-error-text".concat(
                        w ? " template-search-quote-error-text-".concat(w) : ""
                      ),
                      children: b,
                    }),
                  I &&
                    !!j &&
                    (0, r.jsx)("span", {
                      className: "template-search-quote-helper-text".concat(
                        w ? " template-search-quote-helper-text-".concat(w) : ""
                      ),
                      children: j,
                    }),
                ],
              }),
            })
          );
        },
        [u.HV.CalculateInsurance]: () => {
          let [e, l] = (0, o.useState)(1),
            [i, n] = (0, o.useState)(!1),
            [a, s] = (0, o.useState)(""),
            [t, d] = (0, o.useState)(""),
            [c, h] = (0, o.useState)(""),
            [m, v] = (0, o.useState)(""),
            [p, x] = (0, o.useState)(""),
            [f, g] = (0, o.useState)(""),
            [j, b] = (0, o.useState)(""),
            [y, N] = (0, o.useState)(""),
            [w, S] = (0, o.useState)(""),
            [k, M] = (0, o.useState)(""),
            [C, I] = (0, o.useState)(""),
            [P, q] = (0, o.useState)(""),
            [A, D] = (0, o.useState)(""),
            [F, L] = (0, o.useState)(""),
            [T, z] = (0, o.useState)(""),
            [E, O] = (0, o.useState)(""),
            [_, H] = (0, o.useState)(""),
            [Y, R] = (0, o.useState)(""),
            [B, Z] = (0, o.useState)(""),
            [W, V] = (0, o.useState)(""),
            [Q, U] = (0, o.useState)(""),
            [J, G] = (0, o.useState)(""),
            [$, K] = (0, o.useState)(""),
            [X, ee] = (0, o.useState)(""),
            [el, ei] = (0, o.useState)(""),
            [en, ea] = (0, o.useState)(""),
            [es, et] = (0, o.useState)(""),
            [er, eo] = (0, o.useState)(""),
            [ed, ec] = (0, o.useState)(""),
            [eu, eh] = (0, o.useState)(""),
            [em, ex] = (0, o.useState)(!1),
            [ef, eg] = (0, o.useState)(!1),
            [ej, eb] = (0, o.useState)(!1);
          (0, o.useEffect)(() => {
            if (i) {
              let e = [document.body.style.overflowY];
              return (
                (document.body.style.overflowY = "hidden"),
                () => {
                  document.body.style.overflowY = e[0];
                }
              );
            }
          }, [i]);
          let ey = () => {
            l(e - 1);
          };
          function eN() {
            1 === e
              ? "" !== a &&
                "" !== c &&
                "" !== p &&
                "" !== el &&
                "" !== en &&
                "" !== es &&
                u.mL.NUMARICAL.test(p) &&
                u.mL.ALPHABETIC_SPACE_REGEX.test(a) &&
                u.mL.ALPHABETIC_SPACE_REGEX.test(c) &&
                !ef &&
                !ej
                ? "" === er && "1" === en
                  ? ec("Day field cannot be blank")
                  : (d(""), v(""), g(""), eo(""), ec(""), eh(""), l(2))
                : (a || d("This field cannot be blank."),
                  c || v("This field cannot be blank."),
                  p || g("This field cannot be blank."),
                  el || eo("Month field cannot be blank."),
                  en || ec("Day field cannot be blank."),
                  es || eh("Year field cannot be blank."))
              : 2 === e
              ? "" === j
                ? (N("This field cannot be blank."), S(""))
                : (N(""), "yes" === j ? l(3) : l(6))
              : 3 === e
              ? "" === w
                ? M("This field cannot be blank.")
                : /^[0-9]+(\.[0-9]+)?$/.test(w)
                ? 0 >= parseFloat(w)
                  ? M("Age should be greater than Zero")
                  : parseFloat(w) % 1 != 0
                  ? M("Age must be a whole number.")
                  : (M(""), l(4))
                : M("Age must be a numerical value.")
              : 4 === e
              ? "" === C
                ? q("This field cannot be blank.")
                : (q(""), "yes" === C ? l(5) : l(6))
              : 5 === e
              ? "" === A
                ? L("This field cannot be blank.")
                : /^\d+$/.test(A)
                ? (L(""), l(6))
                : L("Amount must be a numerical value.")
              : 6 === e
              ? "" === T
                ? O("This field cannot be blank.")
                : /^\d+$/.test(T)
                ? (O(""), l(7))
                : O("Amount must be a numerical value.")
              : 7 === e
              ? "" === _
                ? R("This field cannot be blank.")
                : /^\d+$/.test(_)
                ? (R(""), l(8))
                : R("Amount must be a numerical value.")
              : 8 === e
              ? "" === B
                ? V("This field cannot be blank.")
                : (V(""), "yes" === B ? l(9) : l(10))
              : 9 === e
              ? "" === Q
                ? G("This field cannot be blank.")
                : /^\d+$/.test(Q)
                ? 0 >= parseInt(Q)
                  ? G("Amount must be greater than 0.")
                  : (G(""), l(10))
                : G("Amount must be a numerical value.")
              : 10 === e
              ? "" === $
                ? ee("Please select an option")
                : (ee(""), l(11))
              : 11 === e && (!1 === em ? ex(!0) : (ex(!1), l(12)));
          }
          (0, o.useEffect)(() => {
            let e = ek(el, es, en);
            1 > parseInt(en) || parseInt(en) > e
              ? ec("Day must be between 1 - ".concat(e))
              : (console.log("first1", en), "" !== en && ec(""));
            let l = parseInt(es);
            "February" === el &&
              "29" === en &&
              "" !== es.trim() &&
              ((l % 4 == 0 && l % 100 != 0) || l % 400 == 0
                ? (ec(""), eb(!1))
                : (ec("February 29 is only valid in a leap year."), eb(!0)));
          }, [el, en, es]);
          let [ew, eS] = (0, o.useState)(31),
            ek = (e, l, i) => {
              if ("February" === e) {
                if ("30" === i || "31" === i || i < 1) return 29;
              } else if (
                [
                  "January",
                  "March",
                  "May",
                  "July",
                  "August",
                  "October",
                  "December",
                ].includes(e)
              )
                return 31;
              else if (["April", "June", "September", "November"].includes(e))
                return 30;
            },
            eM = (e) => {
              "" === e || /^[0-9]*$/.test(e)
                ? g("")
                : g("Field should only contain numerical values."),
                x(e);
            };
          return (0, r.jsxs)("div", {
            className: "multi-step-form",
            children: [
              (0, r.jsx)("button", {
                className: "open-modal-button",
                onClick: () => n(!0),
                children: "Calculate Life Insurance Coverage",
              }),
              i &&
                (0, r.jsx)("div", {
                  className: "modal",
                  children: (0, r.jsx)("div", {
                    className: "modal-content",
                    children: (0, r.jsxs)("div", {
                      className: "form-content relative",
                      children: [
                        (0, r.jsx)("div", {
                          className: "flex w-full justify-end",
                          children: (0, r.jsx)("h2", {
                            className: "font-18 mr-neg-50",
                            children: (0, r.jsx)("div", {
                              onClick: () => n(!1),
                              className: "cursor-pointer",
                              children: (0, r.jsx)("p", {
                                className: "font-20",
                                children: "X",
                              }),
                            }),
                          }),
                        }),
                        1 === e &&
                          (0, r.jsxs)("div", {
                            className: "step-content",
                            children: [
                              (0, r.jsx)("h2", {
                                className: "mb-30",
                                children:
                                  "Tell us a little bit about yourself:",
                              }),
                              (0, r.jsxs)("form", {
                                action: "",
                                children: [
                                  (0, r.jsx)("div", {
                                    className: "mb-30 two-col",
                                    children: (0, r.jsxs)("div", {
                                      className: "name-input-fields",
                                      children: [
                                        (0, r.jsxs)("div", {
                                          className: "col1",
                                          children: [
                                            (0, r.jsx)("label", {
                                              className: "mb-10 font-700",
                                              htmlFor: "firstNameInput",
                                              children: "First Name",
                                            }),
                                            (0, r.jsx)("input", {
                                              className: "first-name",
                                              type: "text",
                                              id: "firstNameInput",
                                              value: a,
                                              placeholder: "First Name",
                                              onChange: (e) => {
                                                s(e.target.value),
                                                  e.target.value.length > 0 &&
                                                    d("");
                                              },
                                            }),
                                            !u.mL.ALPHABETIC_SPACE_REGEX.test(
                                              a
                                            ) &&
                                              (0, r.jsx)("div", {
                                                style: { color: "red" },
                                                children:
                                                  "Field should not contain numbers or punctuation",
                                              }),
                                            t &&
                                              (0, r.jsx)("div", {
                                                style: { color: "red" },
                                                children: t,
                                              }),
                                          ],
                                        }),
                                        (0, r.jsxs)("div", {
                                          className: "col2",
                                          children: [
                                            (0, r.jsx)("label", {
                                              className: "mb-10 font-700",
                                              htmlFor: "lastNameInput",
                                              children: "Last Name",
                                            }),
                                            (0, r.jsx)("input", {
                                              className: "last-name",
                                              type: "text",
                                              id: "lastNameInput",
                                              value: c,
                                              placeholder: "Last Name",
                                              onChange: (e) => {
                                                h(e.target.value),
                                                  "" !== e.target.value &&
                                                    v("");
                                              },
                                            }),
                                            !u.mL.ALPHABETIC_SPACE_REGEX.test(
                                              c
                                            ) &&
                                              (0, r.jsx)("div", {
                                                style: { color: "red" },
                                                children:
                                                  "Field should not contain numbers or punctuation",
                                              }),
                                            m &&
                                              (0, r.jsx)("div", {
                                                style: { color: "red" },
                                                children: m,
                                              }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, r.jsx)("div", {
                                    className: "birthday-div",
                                    children: (0, r.jsx)("label", {
                                      className:
                                        "birthday-label mb-10 font-700",
                                      children: "Birthday",
                                    }),
                                  }),
                                  (0, r.jsx)("div", {
                                    className: "mb-30 birthday-fields",
                                    children: (0, r.jsxs)("div", {
                                      className:
                                        "mb-2 form-row birthday-container",
                                      children: [
                                        (0, r.jsxs)("div", {
                                          className: "birthday mr-10",
                                          children: [
                                            (0, r.jsx)("label", {
                                              htmlFor: "",
                                              className: "font-400 mb-10",
                                              children: "Month",
                                            }),
                                            (0, r.jsxs)("select", {
                                              className:
                                                "birthday-select arrow",
                                              id: "birthday-month",
                                              name: "birthday-month",
                                              required: !0,
                                              value: el,
                                              onChange: (e) => {
                                                let l = e.target.value;
                                                ei(l);
                                                let i = ek(l, es, en);
                                                eS(i), eo("");
                                              },
                                              children: [
                                                (0, r.jsx)("option", {
                                                  value: "",
                                                  children: "Month",
                                                }),
                                                u.BR.map((e) =>
                                                  (0, r.jsx)(
                                                    "option",
                                                    {
                                                      value: e.value,
                                                      children: e.label,
                                                    },
                                                    e.value
                                                  )
                                                ),
                                              ],
                                            }),
                                            er &&
                                              (0, r.jsx)("div", {
                                                style: { color: "red" },
                                                children: er,
                                              }),
                                          ],
                                        }),
                                        (0, r.jsxs)("div", {
                                          className: "birthday mr-10",
                                          children: [
                                            (0, r.jsx)("label", {
                                              htmlFor: "",
                                              className: "font-400 mb-10",
                                              children: "Day",
                                            }),
                                            (0, r.jsxs)("select", {
                                              className:
                                                "birthday-select arrow",
                                              id: "birthday-day",
                                              name: "birthday-day",
                                              required: !0,
                                              value: en,
                                              onChange: (e) => {
                                                let l = e.target.value;
                                                ea(l);
                                                let i = ek(el, es, l);
                                                l < 1 || l > i
                                                  ? (ec(
                                                      "Day must be between 1 - ".concat(
                                                        i
                                                      )
                                                    ),
                                                    eb(!0))
                                                  : (ec(""), eb(!1));
                                              },
                                              children: [
                                                (0, r.jsx)("option", {
                                                  value: "",
                                                  children: "Day",
                                                }),
                                                u.dA.map((e) =>
                                                  (0, r.jsx)(
                                                    "option",
                                                    {
                                                      value: e.value,
                                                      children: e.label,
                                                    },
                                                    e.value
                                                  )
                                                ),
                                              ],
                                            }),
                                            ed &&
                                              (0, r.jsx)("div", {
                                                style: { color: "red" },
                                                children: ed,
                                              }),
                                          ],
                                        }),
                                        (0, r.jsxs)("div", {
                                          className: "birthday",
                                          children: [
                                            (0, r.jsx)("label", {
                                              htmlFor: "",
                                              className: "font-400 mb-10",
                                              children: "Year",
                                            }),
                                            (0, r.jsx)("input", {
                                              type: "text",
                                              className:
                                                "birthday-select w-full",
                                              placeholder: "XXXX",
                                              id: "birthday-year",
                                              name: "birthday-year",
                                              required: !0,
                                              value: es,
                                              onChange: (e) => {
                                                let l = e.target.value,
                                                  i = new Date().getFullYear(),
                                                  n = parseInt(l);
                                                "" === l.trim()
                                                  ? (eh(""), eg(!1))
                                                  : isNaN(n)
                                                  ? (eh(
                                                      "Field should only contain numerical values."
                                                    ),
                                                    eg(!0))
                                                  : n < i - 80 || n > i - 18
                                                  ? (eh(
                                                      "Age must be between 18 and 80"
                                                    ),
                                                    eg(!0))
                                                  : (eh(""), eg(!1)),
                                                  et(l),
                                                  "February" === el &&
                                                    "29" === en &&
                                                    "" !== l.trim() &&
                                                    ((n % 4 == 0 &&
                                                      n % 100 != 0) ||
                                                    n % 400 == 0
                                                      ? (ec(""), eb(!1))
                                                      : (ec(
                                                          "February 29 is only valid in a leap year."
                                                        ),
                                                        eb(!0)));
                                              },
                                            }),
                                            eu &&
                                              (0, r.jsx)("div", {
                                                style: { color: "red" },
                                                children: eu,
                                              }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, r.jsxs)("div", {
                                    children: [
                                      (0, r.jsx)("div", {
                                        className: "annual-income-label-div",
                                        children: (0, r.jsx)("label", {
                                          className:
                                            "annual-income-label mb-10 font-700",
                                          htmlFor: "annualIncomeInput",
                                          children: "Annual Income ",
                                        }),
                                      }),
                                      (0, r.jsx)(ev.Z, {
                                        id: "annualIncomeInput",
                                        className: "annual-income",
                                        placeholder: "e.g. $50,000",
                                        value: p,
                                        prefix: "$",
                                        decimalsLimit: 2,
                                        onValueChange: (e, l) => eM(e),
                                      }),
                                      f &&
                                        (0, r.jsx)("div", {
                                          style: { color: "red" },
                                          children: f,
                                        }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, r.jsx)("div", {
                                className: "button-div mt-30",
                                children: (0, r.jsx)("button", {
                                  onClick: eN,
                                  className: "next-button button font-800",
                                  children: "Next",
                                }),
                              }),
                            ],
                          }),
                        2 === e &&
                          (0, r.jsxs)("div", {
                            className: "step-content",
                            children: [
                              (0, r.jsxs)("h2", {
                                className: "mb-30",
                                children: [
                                  a,
                                  ", do you have any children/dependents?",
                                ],
                              }),
                              (0, r.jsxs)("div", {
                                className: "radio-button-container mb-30",
                                children: [
                                  (0, r.jsxs)("label", {
                                    className: "radio-button-label",
                                    children: [
                                      (0, r.jsx)("input", {
                                        type: "radio",
                                        name: "hasChildren",
                                        value: "yes",
                                        checked: "yes" === j,
                                        onChange: (e) => {
                                          b(e.target.value),
                                            N(""),
                                            S(""),
                                            D("");
                                        },
                                      }),
                                      (0, r.jsx)("span", {
                                        className: "radio-button",
                                        children: "Yes",
                                      }),
                                    ],
                                  }),
                                  (0, r.jsxs)("label", {
                                    className: "radio-button-label",
                                    children: [
                                      (0, r.jsx)("input", {
                                        type: "radio",
                                        name: "hasChildren",
                                        value: "no",
                                        checked: "no" === j,
                                        onChange: (e) => {
                                          b(e.target.value),
                                            N(""),
                                            S("0"),
                                            D("0");
                                        },
                                      }),
                                      (0, r.jsx)("span", {
                                        className: "radio-button",
                                        children: "No",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              y &&
                                (0, r.jsx)("div", {
                                  style: { color: "red", textAlign: "center" },
                                  children: y,
                                }),
                              (0, r.jsx)("div", {
                                className: "button-div",
                                children: (0, r.jsx)("button", {
                                  onClick: eN,
                                  className:
                                    "next-button button font-800 mt-30",
                                  children: "Next",
                                }),
                              }),
                              (0, r.jsx)("div", {
                                className: "back-button-div",
                                children: (0, r.jsx)("button", {
                                  onClick: ey,
                                  className: "back-button button",
                                  children: "Back",
                                }),
                              }),
                            ],
                          }),
                        3 === e &&
                          (0, r.jsxs)("div", {
                            className: "step-content",
                            children: [
                              (0, r.jsx)("h2", {
                                className: "mb-30",
                                children:
                                  "What is the age of your youngest child/dependent?",
                              }),
                              (0, r.jsxs)("div", {
                                className: "age-container",
                                children: [
                                  (0, r.jsx)("label", {
                                    className: "mb-10 left-aligned-label",
                                    htmlFor: "ageInput",
                                    children: "Age",
                                  }),
                                  (0, r.jsx)("input", {
                                    type: "text",
                                    value: w,
                                    placeholder: "e.g. 12",
                                    onChange: (e) => {
                                      S(e.target.value), M("");
                                    },
                                  }),
                                  w &&
                                    !/^\d+$/.test(w) &&
                                    (0, r.jsx)("div", {
                                      style: { color: "red" },
                                    }),
                                  k &&
                                    (0, r.jsx)("div", {
                                      style: { color: "red" },
                                      children: k,
                                    }),
                                ],
                              }),
                              (0, r.jsx)("div", {
                                className: "button-div",
                                children: (0, r.jsx)("button", {
                                  onClick: eN,
                                  className:
                                    "next-button button font-800 mt-30",
                                  children: "Next",
                                }),
                              }),
                              (0, r.jsx)("div", {
                                className: "back-button-div",
                                children: (0, r.jsx)("button", {
                                  onClick: ey,
                                  className: "back-button button",
                                  children: "Back",
                                }),
                              }),
                            ],
                          }),
                        4 === e &&
                          (0, r.jsxs)("div", {
                            className: "step-content",
                            children: [
                              (0, r.jsx)("h2", {
                                className: "mb-30",
                                children:
                                  "Will your children/dependents be attending post high school education or college?",
                              }),
                              (0, r.jsxs)("div", {
                                className: "radio-button-container mb-30",
                                children: [
                                  (0, r.jsxs)("label", {
                                    className: "radio-button-label",
                                    children: [
                                      (0, r.jsx)("input", {
                                        type: "radio",
                                        value: "yes",
                                        checked: "yes" === C,
                                        onChange: (e) => {
                                          I(e.target.value), q("");
                                        },
                                      }),
                                      (0, r.jsx)("span", {
                                        className: "radio-button",
                                        children: "Yes",
                                      }),
                                    ],
                                  }),
                                  (0, r.jsxs)("label", {
                                    className: "radio-button-label",
                                    children: [
                                      (0, r.jsx)("input", {
                                        type: "radio",
                                        value: "no",
                                        checked: "no" === C,
                                        onChange: (e) => {
                                          I(e.target.value), q("");
                                        },
                                      }),
                                      (0, r.jsx)("span", {
                                        className: "radio-button",
                                        children: "No",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              P &&
                                (0, r.jsx)("div", {
                                  style: { color: "red", textAlign: "center" },
                                  children: P,
                                }),
                              (0, r.jsx)("div", {
                                className: "button-div",
                                children: (0, r.jsx)("button", {
                                  onClick: eN,
                                  className:
                                    "next-button button font-800 mt-30",
                                  children: "Next",
                                }),
                              }),
                              (0, r.jsx)("div", {
                                className: "back-button-div",
                                children: (0, r.jsx)("button", {
                                  onClick: ey,
                                  className: "back-button button",
                                  children: "Back",
                                }),
                              }),
                            ],
                          }),
                        5 === e &&
                          (0, r.jsxs)("div", {
                            className: "step-content",
                            children: [
                              (0, r.jsx)("h2", {
                                className: "mb-30",
                                children:
                                  "How much would your children/dependents need to fund college or post high school education?",
                              }),
                              (0, r.jsxs)("div", {
                                className: "select-div",
                                children: [
                                  (0, r.jsx)(ev.Z, {
                                    placeholder: "e.g. $50,000",
                                    value: A,
                                    prefix: "$",
                                    decimalsLimit: 2,
                                    onValueChange: (e) => {
                                      D(e), L("");
                                    },
                                  }),
                                  A &&
                                    (0, r.jsx)("div", {
                                      style: { color: "red" },
                                    }),
                                  F &&
                                    (0, r.jsx)("div", {
                                      style: {
                                        color: "red",
                                        margin: "10px 0 0 0",
                                      },
                                      children: F,
                                    }),
                                ],
                              }),
                              (0, r.jsx)("div", {
                                className: "button-div",
                                children: (0, r.jsx)("button", {
                                  onClick: eN,
                                  className:
                                    "next-button button font-800 mt-30",
                                  children: "Next",
                                }),
                              }),
                              (0, r.jsx)("div", {
                                className: "back-button-div",
                                children: (0, r.jsx)("button", {
                                  onClick: ey,
                                  className: "back-button button",
                                  children: "Back",
                                }),
                              }),
                            ],
                          }),
                        6 === e &&
                          (0, r.jsxs)("div", {
                            className: "step-content",
                            children: [
                              (0, r.jsx)("h2", {
                                className: "mb-30",
                                children:
                                  "How much do you have in savings and liquid assets?",
                              }),
                              (0, r.jsxs)("div", {
                                className: "age-container",
                                children: [
                                  (0, r.jsx)("label", {
                                    className:
                                      "age-label mb-10 left-aligned-label",
                                    htmlFor: "savingsAmountInput",
                                    children: "Savings Amount:",
                                  }),
                                  (0, r.jsx)(ev.Z, {
                                    placeholder: "e.g. $50,000",
                                    value: T,
                                    prefix: "$",
                                    decimalsLimit: 2,
                                    onValueChange: (e) => {
                                      z(e), O("");
                                    },
                                  }),
                                  T &&
                                    !/^\d+$/.test(T) &&
                                    (0, r.jsx)("div", {
                                      style: { color: "red" },
                                    }),
                                  E &&
                                    (0, r.jsx)("div", {
                                      style: { color: "red" },
                                      children: E,
                                    }),
                                ],
                              }),
                              (0, r.jsx)("div", {
                                className: "button-div",
                                children: (0, r.jsx)("button", {
                                  onClick: eN,
                                  className:
                                    "next-button button font-800 mt-30",
                                  children: "Next",
                                }),
                              }),
                              (0, r.jsx)("div", {
                                className: "back-button-div",
                                children: (0, r.jsx)("button", {
                                  onClick: () => {
                                    "yes" === j ? l(5) : l(2),
                                      "yes" == j && ("yes" === C ? l(5) : l(4));
                                  },
                                  className: "back-button button",
                                  children: "Back",
                                }),
                              }),
                            ],
                          }),
                        7 === e &&
                          (0, r.jsxs)("div", {
                            className: "step-content",
                            children: [
                              (0, r.jsx)("h2", {
                                className: "mb-30",
                                children:
                                  "How much significant debt do you have? (example, mortgage)",
                              }),
                              (0, r.jsxs)("div", {
                                className: "age-container",
                                children: [
                                  (0, r.jsx)(ev.Z, {
                                    placeholder: "e.g. $50,000",
                                    value: _,
                                    prefix: "$",
                                    decimalsLimit: 2,
                                    onValueChange: (e) => {
                                      H(e), R("");
                                    },
                                  }),
                                  _ &&
                                    !/^\d+$/.test(_) &&
                                    (0, r.jsx)("div", {
                                      style: { color: "red" },
                                    }),
                                  Y &&
                                    (0, r.jsx)("div", {
                                      style: { color: "red" },
                                      children: Y,
                                    }),
                                ],
                              }),
                              (0, r.jsx)("div", {
                                className: "button-div",
                                children: (0, r.jsx)("button", {
                                  onClick: eN,
                                  className:
                                    "next-button button font-800 mt-30",
                                  children: "Next",
                                }),
                              }),
                              (0, r.jsx)("div", {
                                className: "back-button-div",
                                children: (0, r.jsx)("button", {
                                  onClick: ey,
                                  className: "back-button button",
                                  children: "Back",
                                }),
                              }),
                            ],
                          }),
                        8 === e &&
                          (0, r.jsxs)("div", {
                            className: "step-content",
                            children: [
                              (0, r.jsx)("h2", {
                                className: "mb-30",
                                children:
                                  "Do you currently have a life insurance policy?",
                              }),
                              (0, r.jsxs)("div", {
                                className: "radio-button-container mb-30",
                                children: [
                                  (0, r.jsxs)("label", {
                                    className: "radio-button-label",
                                    children: [
                                      (0, r.jsx)("input", {
                                        className: "option",
                                        type: "radio",
                                        value: "yes",
                                        checked: "yes" === B,
                                        onChange: (e) => {
                                          Z(e.target.value), V(""), U("");
                                        },
                                      }),
                                      (0, r.jsx)("span", {
                                        className: "radio-button",
                                        children: "Yes",
                                      }),
                                    ],
                                  }),
                                  (0, r.jsxs)("label", {
                                    className: "radio-button-label",
                                    children: [
                                      (0, r.jsx)("input", {
                                        className: "option",
                                        type: "radio",
                                        value: "no",
                                        checked: "no" === B,
                                        onChange: (e) => {
                                          Z(e.target.value), V(""), U("0");
                                        },
                                      }),
                                      (0, r.jsx)("span", {
                                        className: "radio-button",
                                        children: "No",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              W &&
                                (0, r.jsx)("div", {
                                  style: { color: "red", textAlign: "center" },
                                  children: W,
                                }),
                              (0, r.jsx)("div", {
                                className: "button-div",
                                children: (0, r.jsx)("button", {
                                  onClick: eN,
                                  className:
                                    "next-button button font-800 mt-30",
                                  children: "Next",
                                }),
                              }),
                              (0, r.jsx)("div", {
                                className: "back-button-div",
                                children: (0, r.jsx)("button", {
                                  onClick: ey,
                                  className: "back-button button",
                                  children: "Back",
                                }),
                              }),
                            ],
                          }),
                        9 === e &&
                          (0, r.jsxs)("div", {
                            className: "step-content",
                            children: [
                              (0, r.jsx)("h2", {
                                className: "mb-30",
                                children:
                                  "How much life insurance coverage do you currently have?",
                              }),
                              (0, r.jsxs)("div", {
                                className: "select-div",
                                children: [
                                  (0, r.jsx)("label", {
                                    className:
                                      "age-label mb-10 left-aligned-label",
                                    children: "Coverage Amount",
                                  }),
                                  (0, r.jsx)(ev.Z, {
                                    placeholder: "e.g. $50,000",
                                    value: Q,
                                    prefix: "$",
                                    decimalsLimit: 2,
                                    onValueChange: (e) => {
                                      U(e), G("");
                                    },
                                  }),
                                  Q &&
                                    (0, r.jsx)("div", {
                                      style: { color: "red" },
                                    }),
                                  J &&
                                    (0, r.jsx)("div", {
                                      style: {
                                        color: "red",
                                        margin: "10px 0 0 0",
                                      },
                                      children: J,
                                    }),
                                ],
                              }),
                              (0, r.jsx)("div", {
                                className: "button-div",
                                children: (0, r.jsx)("button", {
                                  onClick: eN,
                                  className:
                                    "next-button button font-800 mt-30",
                                  children: "Next",
                                }),
                              }),
                              (0, r.jsx)("div", {
                                className: "back-button-div",
                                children: (0, r.jsx)("button", {
                                  onClick: ey,
                                  className: "back-button button",
                                  children: "Back",
                                }),
                              }),
                            ],
                          }),
                        10 === e &&
                          (0, r.jsxs)("div", {
                            className: "step-content cushion",
                            children: [
                              (0, r.jsx)("h2", {
                                className: "mb-30",
                                children:
                                  "How much of a financial cushion would you like to leave your family?",
                              }),
                              (0, r.jsxs)("div", {
                                className:
                                  "radio-button-container finalcial-cushion-radio mb-30",
                                children: [
                                  (0, r.jsxs)("label", {
                                    className: "radio-button-label",
                                    children: [
                                      (0, r.jsx)("input", {
                                        className: "option-a-lot",
                                        type: "radio",
                                        value: "a lot",
                                        checked: "a lot" === $,
                                        onChange: (e) => {
                                          K(e.target.value), ee("");
                                        },
                                      }),
                                      (0, r.jsx)("span", {
                                        className: "radio-button",
                                        children: "A Lot",
                                      }),
                                    ],
                                  }),
                                  (0, r.jsxs)("label", {
                                    className: "radio-button-label",
                                    children: [
                                      (0, r.jsx)("input", {
                                        type: "radio",
                                        value: "somewhere in the middle",
                                        checked:
                                          "somewhere in the middle" === $,
                                        onChange: (e) => {
                                          K(e.target.value), ee("");
                                        },
                                      }),
                                      (0, r.jsx)("span", {
                                        className:
                                          "radio-button radio-button-middle",
                                        children: "Somewhere in the Middle",
                                      }),
                                    ],
                                  }),
                                  (0, r.jsxs)("label", {
                                    children: [
                                      (0, r.jsx)("input", {
                                        className: "option-a-lot",
                                        type: "radio",
                                        value: "a little",
                                        checked: "a little" === $,
                                        onChange: (e) => {
                                          K(e.target.value), ee("");
                                        },
                                      }),
                                      (0, r.jsx)("span", {
                                        className: "radio-button",
                                        children: "A Little",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              X &&
                                (0, r.jsx)("div", {
                                  style: { color: "red", textAlign: "center" },
                                  children: X,
                                }),
                              (0, r.jsx)("div", {
                                className: "button-div",
                                children: (0, r.jsx)("button", {
                                  onClick: eN,
                                  className:
                                    "calculate-my-coverage-button button font-800 mt-30",
                                  children: "Calculate My Coverage",
                                }),
                              }),
                              (0, r.jsx)("div", {
                                className: "back-button-div",
                                children: (0, r.jsx)("button", {
                                  onClick: () => {
                                    "yes" === B ? l(9) : l(8);
                                  },
                                  className: "back-button button",
                                  children: "Back",
                                }),
                              }),
                            ],
                          }),
                        11 === e &&
                          (0, r.jsx)("div", {
                            className: "step-content",
                            children: (0, r.jsx)(ep, {
                              firstName: a,
                              lastName: c,
                              selectedYear: es,
                              selectedMonth: el,
                              selectedDay: en,
                              annualIncome: p,
                              age: w,
                              lifeInsuranceCoverage: Q,
                              hasLifeInsurance: B,
                              debtAmount: _,
                              chooseOption: A,
                              savingsAmount: T,
                            }),
                          }),
                      ],
                    }),
                  }),
                }),
            ],
          });
        },
        [u.HV.Cards]: ee,
        [u.HV.Select]: (e) => {
          var l, i, n, a, t, d, c, u, m, v, p;
          let { section: x } = e,
            [f, j] = (0, o.useState)(null),
            {
              options: b,
              type: y,
              arrowImage: N,
              arrowSize: w,
              devices: S = [],
            } = x.fields,
            { deviceSize: k } = (0, g.b)(),
            M =
              null == S
                ? void 0
                : S.find((e) => {
                    var l;
                    return (
                      (null === (l = e.fields) || void 0 === l
                        ? void 0
                        : l.type) === s.Desktop
                    );
                  }),
            C =
              null == S
                ? void 0
                : S.find((e) => {
                    var l;
                    return (
                      (null === (l = e.fields) || void 0 === l
                        ? void 0
                        : l.type) === s.Mobile
                    );
                  }),
            I =
              (null == N
                ? void 0
                : null === (i = N.fields) || void 0 === i
                ? void 0
                : null === (l = i.file) || void 0 === l
                ? void 0
                : l.url) || "/images/form/down-arrow.png",
            P = (0, o.useMemo)(
              () =>
                b.map((e) => {
                  let [l, i = l] = e.split(" : ");
                  return [i, l];
                }),
              [b]
            ),
            [q, A] = (0, o.useState)(
              null !== (p = P[0][0]) && void 0 !== p ? p : ""
            ),
            D = (0, h.sD)(k) ? M : (0, h.UJ)(k) ? C : void 0,
            F = {
              fontWeight:
                null == D
                  ? void 0
                  : null === (n = D.fields) || void 0 === n
                  ? void 0
                  : n.fontWeight,
              color:
                null == D
                  ? void 0
                  : null === (a = D.fields) || void 0 === a
                  ? void 0
                  : a.textColor,
              fontSize:
                null == D
                  ? void 0
                  : null === (t = D.fields) || void 0 === t
                  ? void 0
                  : t.fontSize,
              lineHeight:
                null == D
                  ? void 0
                  : null === (d = D.fields) || void 0 === d
                  ? void 0
                  : d.lineHeight,
              letterSpacing:
                null == D
                  ? void 0
                  : null === (c = D.fields) || void 0 === c
                  ? void 0
                  : c.letterSpacing,
              fontFamily:
                null == D
                  ? void 0
                  : null === (u = D.fields) || void 0 === u
                  ? void 0
                  : u.fontFamily,
              maxWidth:
                null == D
                  ? void 0
                  : null === (m = D.fields) || void 0 === m
                  ? void 0
                  : m.maxWidth,
            },
            L = {
              borderRadius:
                null == D
                  ? void 0
                  : null === (v = D.fields) || void 0 === v
                  ? void 0
                  : v.borderRadius,
            },
            T = (e) => {
              "location" === y &&
                (A(e),
                e && e !== location.pathname && (window.location.href = e));
            };
          return (
            (0, o.useEffect)(() => {
              if ("location" === y) {
                let e = location.pathname,
                  l = P.find((l) => {
                    let [i] = l;
                    return e === i;
                  });
                void 0 !== l && A(l[0]);
              }
            }, [y, P]),
            (0, o.useEffect)(() => {
              f &&
                (f.style.setProperty(
                  "--select-arrow-src",
                  'url("'.concat(I, '")')
                ),
                f.style.setProperty(
                  "--select-arrow-size",
                  null != w ? w : "cover"
                ));
            }, [f, I, w]),
            (0, r.jsx)("div", {
              className: "template-select template-select-".concat(y),
              style: F,
              ref: j,
              children: (0, r.jsx)("select", {
                onChange: (e) => T(e.target.value),
                value: q,
                style: L,
                children: P.map((e) => {
                  let [l, i] = e;
                  return (0, r.jsx)("option", { value: l, children: i }, l);
                }),
              }),
            })
          );
        },
        [u.HV.StateMap]: () =>
          (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            version: "1.1",
            id: "us-map",
            preserveAspectRatio: "xMinYMin meet",
            viewBox: "174 100 959 593",
            enableBackground: "new 174 100 959 593",
            xmlSpace: "preserve",
            xmlnsXlink: "http://www.w3.org/1999/xlink",
            xmlnsCc: "http://creativecommons.org/ns#",
            xmlnsDc: "http://purl.org/dc/elements/1.1/",
            xmlnsRdf: "http://www.w3.org/1999/02/22-rdf-syntax-ns#",
            xmlnsInkscape: "http://www.inkscape.org/namespaces/inkscape",
            xmlnsSodipodi: "http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd",
            children: (0, r.jsxs)("g", {
              id: "states",
              children: [
                (0, r.jsx)("a", {
                  href: "/medicare/medicare-plans/supplement-plans/hawaii/",
                  children: (0, r.jsx)("path", {
                    id: "HI",
                    "data-info": "<div>Hawaii Medicare Supplement Plans</div>",
                    fill: "#29b3c9",
                    d: "M407.1,619.3l1.9-3.6l2.3-0.3l0.3,0.8l-2.1,3.1H407.1z M417.3,615.6l6.1,2.6l2.1-0.3l1.6-3.9   l-0.6-3.4l-4.2-0.5l-4,1.8L417.3,615.6z M448,625.6l3.7,5.5l2.4-0.3l1.1-0.5l1.5,1.3l3.7-0.2l1-1.5l-2.9-1.8l-1.9-3.7l-2.1-3.6   l-5.8,2.9L448,625.6z M468.2,634.5l1.3-1.9l4.7,1l0.6-0.5l6.1,0.6l-0.3,1.3l-2.6,1.5l-4.4-0.3L468.2,634.5z M473.5,639.7l1.9,3.9   l3.1-1.1l0.3-1.6l-1.6-2.1l-3.7-0.3V639.7z M480.5,638.5l2.3-2.9l4.7,2.4l4.4,1.1l4.4,2.7v1.9l-3.6,1.8l-4.8,1l-2.4-1.5   L480.5,638.5z M497.1,654.1l1.6-1.3l3.4,1.6l7.6,3.6l3.4,2.1l1.6,2.4l1.9,4.4l4,2.6l-0.3,1.3l-3.9,3.2l-4.2,1.5l-1.5-0.6l-3.1,1.8   l-2.4,3.2l-2.3,2.9l-1.8-0.2l-3.6-2.6l-0.3-4.5l0.6-2.4l-1.6-5.7l-2.1-1.8l-0.2-2.6l2.3-1l2.1-3.1l0.5-1l-1.6-1.8L497.1,654.1z",
                  }),
                }),
                (0, r.jsx)("a", {
                  href: "/medicare/medicare-plans/supplement-plans/alaska/",
                  children: (0, r.jsx)("path", {
                    id: "AK",
                    "data-info": "<div> Alaska Medicare Supplement Plans</div>",
                    fill: "#29b3c9",
                    d: "M332.1,553.7l-0.3,85.4l1.6,1l3.1,0.2l1.5-1.1h2.6l0.2,2.9l7,6.8l0.5,2.6l3.4-1.9l0.6-0.2l0.3-3.1   l1.5-1.6l1.1-0.2l1.9-1.5l3.1,2.1l0.6,2.9l1.9,1.1l1.1,2.4l3.9,1.8l3.4,6l2.7,3.9l2.3,2.7l1.5,3.7l5,1.8l5.2,2.1l1,4.4l0.5,3.1   l-1,3.4l-1.8,2.3l-1.6-0.8l-1.5-3.1l-2.7-1.5l-1.8-1.1l-0.8,0.8l1.5,2.7l0.2,3.7l-1.1,0.5l-1.9-1.9l-2.1-1.3l0.5,1.6l1.3,1.8   l-0.8,0.8c0,0-0.8-0.3-1.3-1c-0.5-0.6-2.1-3.4-2.1-3.4l-1-2.3c0,0-0.3,1.3-1,1c-0.6-0.3-1.3-1.5-1.3-1.5l1.8-1.9l-1.5-1.5v-5h-0.8   l-0.8,3.4l-1.1,0.5l-1-3.7l-0.6-3.7l-0.8-0.5l0.3,5.7v1.1l-1.5-1.3l-3.6-6l-2.1-0.5l-0.6-3.7l-1.6-2.9l-1.6-1.1v-2.3l2.1-1.3   l-0.5-0.3l-2.6,0.6l-3.4-2.4l-2.6-2.9l-4.8-2.6l-4-2.6l1.3-3.2v-1.6l-1.8,1.6l-2.9,1.1l-3.7-1.1l-5.7-2.4h-5.5l-0.6,0.5l-6.5-3.9   l-2.1-0.3l-2.7-5.8l-3.6,0.3l-3.6,1.5l0.5,4.5l1.1-2.9l1,0.3l-1.5,4.4l3.2-2.7l0.6,1.6l-3.9,4.4l-1.3-0.3l-0.5-1.9l-1.3-0.8   l-1.3,1.1l-2.7-1.8l-3.1,2.1l-1.8,2.1l-3.4,2.1l-4.7-0.2l-0.5-2.1l3.7-0.6v-1.3l-2.3-0.6l1-2.4l2.3-3.9v-1.8l0.2-0.8l4.4-2.3l1,1.3   h2.7l-1.3-2.6l-3.7-0.3l-5,2.7l-2.4,3.4l-1.8,2.6l-1.1,2.3l-4.2,1.5l-3.1,2.6l-0.3,1.6l2.3,1l0.8,2.1l-2.7,3.2l-6.5,4.2l-7.8,4.2   l-2.1,1.1l-5.3,1.1l-5.3,2.3l1.8,1.3l-1.5,1.5l-0.5,1.1l-2.7-1l-3.2,0.2l-0.8,2.3h-1l0.3-2.4l-3.6,1.3l-2.9,1l-3.4-1.3l-2.9,1.9   h-3.2l-2.1,1.3l-1.6,0.8l-2.1-0.3l-2.6-1.1l-2.3,0.6l-1,1l-1.6-1.1v-1.9l3.1-1.3l6.3,0.6l4.4-1.6l2.1-2.1l2.9-0.6l1.8-0.8l2.7,0.2   l1.6,1.3l1-0.3l2.3-2.7l3.1-1l3.4-0.6l1.3-0.3l0.6,0.5h0.8l1.3-3.7l4-1.5l1.9-3.7l2.3-4.5l1.6-1.5l0.3-2.6l-1.6,1.3l-3.4,0.6   l-0.6-2.4l-1.3-0.3l-1,1l-0.2,2.9l-1.5-0.2l-1.5-5.8l-1.3,1.3l-1.1-0.5l-0.3-1.9l-4,0.2l-2.1,1.1l-2.6-0.3l1.5-1.5l0.5-2.6   l-0.6-1.9l1.5-1l1.3-0.2l-0.6-1.8v-4.4l-1-1l-0.8,1.5h-6.1l-1.5-1.3l-0.6-3.9l-2.1-3.6v-1l2.1-0.8l0.2-2.1l1.1-1.1l-0.8-0.5   l-1.3,0.5l-1.1-2.7l1-5l4.5-3.2l2.6-1.6l1.9-3.7l2.7-1.3l2.6,1.1l0.3,2.4l2.4-0.3l3.2-2.4l1.6,0.6l1,0.6h1.6l2.3-1.3l0.8-4.4   c0,0,0.3-2.9,1-3.4c0.6-0.5,1-1,1-1l-1.1-1.9l-2.6,0.8l-3.2,0.8l-1.9-0.5l-3.6-1.8l-5-0.2l-3.6-3.7l0.5-3.9l0.6-2.4l-2.1-1.8   l-1.9-3.7l0.5-0.8l6.8-0.5h2.1l1,1h0.6l-0.2-1.6l3.9-0.6l2.6,0.3l1.5,1.1l-1.5,2.1l-0.5,1.5l2.7,1.6l5,1.8l1.8-1l-2.3-4.4l-1-3.2   l1-0.8l-3.4-1.9l-0.5-1.1l0.5-1.6l-0.8-3.9l-2.9-4.7l-2.4-4.2l2.9-1.9h3.2l1.8,0.6l4.2-0.2l3.7-3.6l1.1-3.1l3.7-2.4l1.6,1l2.7-0.6   l3.7-2.1l1.1-0.2l1,0.8l4.5-0.2l2.7-3.1h1.1l3.6,2.4l1.9,2.1l-0.5,1.1l0.6,1.1l1.6-1.6l3.9,0.3l0.3,3.7l1.9,1.5l7.1,0.6l6.3,4.2   l1.5-1l5.2,2.6l2.1-0.6l1.9-0.8l4.8,1.9L332.1,553.7z M217,582.6l2.1,5.3l-0.2,1l-2.9-0.3l-1.8-4l-1.8-1.5H210l-0.2-2.6l1.8-2.4   l1.1,2.4l1.5,1.5L217,582.6z M214.4,616.1l3.7,0.8l3.7,1l0.8,1l-1.6,3.7l-3.1-0.2l-3.4-3.6L214.4,616.1z M193.7,602l1.1,2.6   l1.1,1.6l-1.1,0.8l-2.1-3.1V602H193.7z M180,675.1l3.4-2.3l3.4-1l2.6,0.3l0.5,1.6l1.9,0.5l1.9-1.9l-0.3-1.6l2.7-0.6l2.9,2.6   l-1.1,1.8l-4.4,1.1l-2.7-0.5l-3.7-1.1l-4.4,1.5l-1.6,0.3L180,675.1z M228.9,670.6l1.6,1.9l2.1-1.6l-1.5-1.3L228.9,670.6z    M231.8,673.6l1.1-2.3l2.1,0.3l-0.8,1.9H231.8z M255.4,671.7l1.5,1.8l1-1.1l-0.8-1.9L255.4,671.7z M264.2,659.2l1.1,5.8l2.9,0.8   l5-2.9l4.4-2.6l-1.6-2.4l0.5-2.4l-2.1,1.3l-2.9-0.8l1.6-1.1l1.9,0.8l3.9-1.8l0.5-1.5l-2.4-0.8l0.8-1.9l-2.7,1.9l-4.7,3.6l-4.8,2.9   L264.2,659.2z M306.5,639.4l2.4-1.5l-1-1.8l-1.8,1L306.5,639.4z",
                  }),
                }),
                (0, r.jsx)("a", {
                  href: "/medicare/medicare-plans/supplement-plans/florida/",
                  children: (0, r.jsx)("path", {
                    id: "FL",
                    "data-info": "<div>Florida Medicare Supplement Plans</div>",
                    fill: "#29b3c9",
                    d: "M929.4,545.5l2.3,7.3l3.7,9.7l5.3,9.4l3.7,6.3l4.8,5.5l4,3.7l1.6,2.9l-1.1,1.3L953,593l2.9,7.4   l2.9,2.9l2.6,5.3l3.6,5.8l4.5,8.2l1.3,7.6l0.5,12l0.6,1.8l-0.3,3.4l-2.4,1.3l0.3,1.9l-0.6,1.9l0.3,2.4l0.5,1.9l-2.7,3.2l-3.1,1.5   l-3.9,0.2l-1.5,1.6l-2.4,1l-1.3-0.5l-1.1-1l-0.3-2.9l-0.8-3.4l-3.4-5.2l-3.6-2.3l-3.9-0.3l-0.8,1.3l-3.1-4.4l-0.6-3.6l-2.6-4   l-1.8-1.1l-1.6,2.1l-1.8-0.3l-2.1-5l-2.9-3.9l-2.9-5.3l-2.6-3.1l-3.6-3.7l2.1-2.4l3.2-5.5l-0.2-1.6l-4.5-1l-1.6,0.6l0.3,0.6l2.6,1   l-1.5,4.5l-0.8,0.5l-1.8-4l-1.3-4.8l-0.3-2.7l1.5-4.7v-9.5L910,585l-1.3-3.1l-5.2-1.3l-1.9-0.6l-1.6-2.6l-3.4-1.6l-1.1-3.4l-2.7-1   l-2.4-3.7l-4.2-1.5l-2.9-1.5h-2.6l-4,0.8l-0.2,1.9l0.8,1l-0.5,1.1l-3.1-0.2l-3.7,3.6l-3.6,1.9h-3.9l-3.2,1.3l-0.3-2.7l-1.6-1.9   l-2.9-1.1l-1.6-1.5l-8.1-3.9l-7.6-1.8l-4.4,0.6l-6,0.5l-6,2.1l-3.5,0.6l-0.2-8l-2.6-1.9l-1.8-1.8l0.3-3.1l10.2-1.3l25.5-2.9   l6.8-0.6l5.4,0.3l2.6,3.9l1.5,1.5l8.1,0.5l10.8-0.6l21.5-1.3l5.4-0.7l4.6,0l0.2,2.9l3.8,0.8l0.3-4.8l-1.6-4.5l1-0.7l5.1,0.5   L929.4,545.5z M941.9,677.9l2.4-0.6l1.3-0.2l1.5-2.3l2.3-1.6l1.3,0.5l1.7,0.3l0.4,1.1l-3.5,1.2l-4.2,1.5l-2.3,1.2L941.9,677.9z    M955.4,672.9l1.2,1.1l2.7-2.1l5.3-4.2l3.7-3.9l2.5-6.6l1-1.7l0.2-3.4l-0.7,0.5l-1,2.8l-1.5,4.6l-3.2,5.3l-4.4,4.2l-3.4,1.9   L955.4,672.9z",
                  }),
                }),
                (0, r.jsx)("a", {
                  href: "/medicare/medicare-plans/supplement-plans/south-carolina/",
                  children: (0, r.jsx)("path", {
                    id: "SC",
                    "data-info":
                      "<div>South Carolina Medicare Supplement Plans</div>",
                    fill: "#29b3c9",
                    d: "M935.2,512.9l-1.8,1l-2.6-1.3l-0.6-2.1l-1.3-3.6l-2.3-2.1l-2.6-0.6l-1.6-4.8l-2.7-6l-4.2-1.9   l-2.1-1.9l-1.3-2.6L910,485l-2.3-1.3l-2.3-2.9l-3.1-2.3l-4.5-1.8l-0.5-1.5l-2.4-2.9l-0.5-1.5l-3.4-5.2l-3.4,0.2l-4-2.4l-1.3-1.3   l-0.3-1.8l0.8-1.9l2.3-1l-0.3-2.1l6.1-2.6l9.1-4.5l7.3-0.8l16.5-0.5l2.3,1.9l1.6,3.2l4.4-0.5l12.6-1.5l2.9,0.8l12.6,7.6l10.1,8.1   l-5.4,5.5l-2.6,6.1l-0.5,6.3l-1.6,0.8l-1.1,2.7l-2.4,0.6l-2.1,3.6l-2.7,2.7l-2.3,3.4l-1.6,0.8l-3.6,3.4l-2.9,0.2l1,3.2l-5,5.5   L935.2,512.9z",
                  }),
                }),
                (0, r.jsx)("a", {
                  href: "/medicare/medicare-plans/supplement-plans/georgia/",
                  children: (0, r.jsx)("path", {
                    id: "GA",
                    "data-info": "<div>Georgia Medicare Supplement Plans</div>",
                    fill: "#29b3c9",
                    d: "M863.6,458l-4.8,0.8l-8.4,1.1l-8.6,0.9v2.2l0.2,2.1l0.6,3.4l3.4,7.9l2.4,9.9l1.5,6.1l1.6,4.8l1.5,7   l2.1,6.3l2.6,3.4l0.5,3.4l1.9,0.8l0.2,2.1l-1.8,4.8l-0.5,3.2l-0.2,1.9l1.6,4.4l0.3,5.3l-0.8,2.4l0.6,0.8l1.5,0.8l0.6,3.4l2.6,3.9   l1.5,1.5l7.9,0.2l10.8-0.6l21.5-1.3l5.4-0.7l4.6,0l0.2,2.9l2.6,0.8l0.3-4.4l-1.6-4.5l1.1-1.6l5.8,0.8l5,0.3l-0.8-6.3l2.3-10   l1.5-4.2l-0.5-2.6l3.3-6.2l-0.5-1.4l-1.9,0.7l-2.6-1.3l-0.6-2.1l-1.3-3.6l-2.3-2.1l-2.6-0.6l-1.6-4.8l-2.9-6.3l-4.2-1.9l-2.1-1.9   l-1.3-2.6l-2.1-1.9l-2.3-1.3l-2.3-2.9l-3.1-2.3l-4.5-1.8l-0.5-1.5l-2.4-2.9l-0.5-1.5l-3.4-4.9l-3.4,0.2l-4.1-3l-1.3-1.3l-0.3-1.8   l0.8-1.9l2.4-1.2l-1.1-1.2l0.1-0.3l-5.8,1l-7,0.8L863.6,458z",
                  }),
                }),
                (0, r.jsx)("a", {
                  href: "/medicare/medicare-plans/supplement-plans/alabama/",
                  children: (0, r.jsx)("path", {
                    id: "AL",
                    "data-info": "<div>Alabama Medicare Supplement Plans</div>",
                    fill: "#29b3c9",
                    d: "M799.6,566.8l-1.6-15.2l-2.7-18.8l0.2-14.1l0.8-31l-0.2-16.7l0.2-6.4l7.8-0.4l27.8-2.6l8.9-0.7   l-0.1,2.2l0.2,2.1l0.6,3.4l3.4,7.9l2.4,9.9l1.5,6.1l1.6,4.8l1.5,7l2.1,6.3l2.6,3.4l0.5,3.4l1.9,0.8l0.2,2.1l-1.8,4.8l-0.5,3.2   l-0.2,1.9l1.6,4.4l0.3,5.3l-0.8,2.4l0.6,0.8l1.5,0.8l1,2.5h-6.3l-6.8,0.6l-25.5,2.9l-10.4,1.4l-0.1,3.8l1.8,1.8l2.6,1.9l0.6,7.9   l-5.5,2.6l-2.7-0.3l2.7-1.9v-1l-3.1-6l-2.3-0.6l-1.5,4.4l-1.3,2.7l-0.6-0.2H799.6z",
                  }),
                }),
                (0, r.jsx)("a", {
                  href: "/medicare/medicare-plans/supplement-plans/north-carolina/",
                  children: (0, r.jsx)("path", {
                    id: "NC",
                    "data-info":
                      "<div>North Carolina Medicare Supplement Plans</div>",
                    fill: "#29b3c9",
                    d: "M1006.1,398.5l1.7,4.7l3.6,6.5l2.4,2.4l0.6,2.3l-2.4,0.2l0.8,0.6l-0.3,4.2l-2.6,1.3l-0.6,2.1   l-1.3,2.9l-3.7,1.6l-2.4-0.3l-1.5-0.2l-1.6-1.3l0.3,1.3v1h1.9l0.8,1.3l-1.9,6.3h4.2l0.6,1.6l2.3-2.3l1.3-0.5l-1.9,3.6l-3.1,4.8   h-1.3l-1.1-0.5l-2.7,0.6l-5.2,2.4l-6.5,5.3l-3.4,4.7l-1.9,6.5l-0.5,2.4l-4.7,0.5l-5.5,1.3l-9.9-8.2l-12.6-7.6l-2.9-0.8l-12.6,1.5   l-4.3,0.8l-1.6-3.2l-3-2.1l-16.5,0.5l-7.3,0.8l-9.1,4.5l-6.1,2.6l-1.6,0.3l-5.8,1l-7,0.8l-6.8,0.5l0.5-4.1l1.8-1.5l2.7-0.6l0.6-3.7   l4.2-2.7l3.9-1.5l4.2-3.6l4.4-2.1l0.6-3.1l3.9-3.9l0.6-0.2c0,0,0,1.1,0.8,1.1c0.8,0,1.9,0.3,1.9,0.3l2.3-3.6l2.1-0.6l2.3,0.3   l1.6-3.6l2.9-2.6l0.5-2.1v-4l4.5,0.7l7.1-1.3l15.8-1.9l17.1-2.6l19.9-4l19.7-4.2l11.4-2.8L1006.1,398.5z M1010,431.5l2.6-2.5   l3.2-2.6l1.5-0.6l0.2-2l-0.6-6.1l-1.5-2.3l-0.6-1.9l0.7-0.2l2.7,5.5l0.4,4.4l-0.2,3.4l-3.4,1.5l-2.8,2.4l-1.1,1.2L1010,431.5z",
                  }),
                }),
                (0, r.jsx)("a", {
                  href: "/medicare/medicare-plans/supplement-plans/tennessee/",
                  children: (0, r.jsx)("path", {
                    id: "TN",
                    "data-info":
                      "<div>Tennessee Medicare Supplement Plans</div>",
                    fill: "#29b3c9",
                    d: "M871.1,420.6l-51.9,5l-15.8,1.8l-4.6,0.5l-3.9,0v3.9l-8.4,0.5l-7,0.6l-11.1,0.1l-0.3,5.8l-2.1,6.3   l-1,3l-1.3,4.4l-0.3,2.6l-4,2.3l1.5,3.6l-1,4.4l-1,0.8l7.3-0.2l24.1-1.9l5.3-0.2l8.1-0.5l27.8-2.6l10.2-0.8l8.4-1l8.4-1.1l4.8-0.8   l-0.1-4.5l1.8-1.5l2.7-0.6l0.6-3.7l4.2-2.7l3.9-1.5l4.2-3.6l4.4-2.1l0.9-3.5l4.3-3.9l0.6-0.2c0,0,0,1.1,0.8,1.1s1.9,0.3,1.9,0.3   l2.3-3.6l2.1-0.6l2.3,0.3l1.6-3.6l2.1-2.2l0.6-1l0.2-3.9l-1.5-0.3l-2.4,1.9l-7.9,0.2l-12,1.9L871.1,420.6z",
                  }),
                }),
                (0, r.jsx)("a", {
                  href: "/medicare/medicare-plans/supplement-plans/rhode-island/",
                  children: (0, r.jsx)("path", {
                    id: "RI",
                    "data-info":
                      "<div>Rhode Island Medicare Supplement Plans</div>",
                    fill: "#29b3c9",
                    d: "M1048.1,279.8l-0.5-4.2l-0.8-4.4l-1.7-5.9l5.7-1.5l1.6,1.1l3.4,4.4l2.9,4.4l-2.9,1.5l-1.3-0.2   l-1.1,1.8l-2.4,1.9L1048.1,279.8z",
                  }),
                }),
                (0, r.jsx)("a", {
                  href: "/medicare/medicare-plans/supplement-plans/connecticut/",
                  children: (0, r.jsx)("path", {
                    id: "CT",
                    "data-info":
                      "<div>Connecticut Medicare Supplement Plans</div>",
                    fill: "#29b3c9",
                    d: "M1047.2,280.1l-0.6-4.2l-0.8-4.4l-1.6-6l-4.2,0.9l-21.8,4.8l0.6,3.3l1.5,7.3v8.1l-1.1,2.3l1.8,2.1   l5-3.4l3.6-3.2l1.9-2.1l0.8,0.6l2.7-1.5l5.2-1.1L1047.2,280.1z",
                  }),
                }),
                (0, r.jsx)("a", {
                  href: "/medicare/medicare-plans/supplement-plans/massachusetts/",
                  children: (0, r.jsx)("path", {
                    id: "MA",
                    "data-info":
                      "<div>Massachusetts Medicare Supplement Plans</div>",
                    fill: "#29b3c9",
                    d: "M1074,273.9l2.2-0.7l0.5-1.7l1,0.1l1,2.3l-1.3,0.5l-3.9,0.1L1074,273.9z M1064.6,274.7l2.3-2.6h1.6   l1.8,1.5l-2.4,1l-2.2,1L1064.6,274.7z M1029.8,252.7l17.5-4.2l2.3-0.6l2.1-3.2l3.7-1.7l2.9,4.4l-2.4,5.2l-0.3,1.5l1.9,2.6l1.1-0.8   h1.8l2.3,2.6l3.9,6l3.6,0.5l2.3-1l1.8-1.8l-0.8-2.7l-2.1-1.6l-1.5,0.8l-1-1.3l0.5-0.5l2.1-0.2l1.8,0.8l1.9,2.4l1,2.9l0.3,2.4   l-4.2,1.5l-3.9,1.9l-3.9,4.5l-1.9,1.5v-1l2.4-1.5l0.5-1.8l-0.8-3.1l-2.9,1.5l-0.8,1.5l0.5,2.3l-2.1,1l-2.7-4.5l-3.4-4.4l-2.1-1.8   l-6.5,1.9l-5.1,1.1l-21.8,4.8l-0.4-4.9l0.6-10.6l5.2-0.9L1029.8,252.7z",
                  }),
                }),
                (0, r.jsx)("a", {
                  href: "/medicare/medicare-plans/supplement-plans/maine/",
                  children: (0, r.jsx)("path", {
                    id: "ME",
                    "data-info": "<div>Maine Medicare Supplement Plans</div>",
                    fill: "#29b3c9",
                    d: "M1097.2,177.3l1.9,2.1l2.3,3.7v1.9l-2.1,4.7l-1.9,0.6l-3.4,3.1l-4.8,5.5c0,0-0.6,0-1.3,0   c-0.6,0-1-2.1-1-2.1l-1.8,0.2l-1,1.5l-2.4,1.5l-1,1.5l1.6,1.5l-0.5,0.6l-0.5,2.7l-1.9-0.2v-1.6l-0.3-1.3l-1.5,0.3l-1.8-3.2   l-2.1,1.3l1.3,1.5l0.3,1.1l-0.8,1.3l0.3,3.1l0.2,1.6l-1.6,2.6l-2.9,0.5l-0.3,2.9l-5.3,3.1l-1.3,0.5l-1.6-1.5l-3.1,3.6l1,3.2   l-1.5,1.3l-0.2,4.4l-1.1,6.3l-2.5-1.2l-0.5-3.1l-3.9-1.1l-0.3-2.7l-7.3-23.4l-4.2-13.6l1.4-0.1l1.5,0.4v-2.6l0.8-5.5l2.6-4.7l1.5-4   l-1.9-2.4v-6l0.8-1l0.8-2.7l-0.2-1.5l-0.2-4.8l1.8-4.8l2.9-8.9l2.1-4.2h1.3l1.3,0.2v1.1l1.3,2.3l2.7,0.6l0.8-0.8v-1l4-2.9l1.8-1.8   l1.5,0.2l6,2.4l1.9,1l9.1,29.9h6l0.8,1.9l0.2,4.8l2.9,2.3h0.8l0.2-0.5l-0.5-1.1L1097.2,177.3z M1076.3,207.5l1.5-1.5l1.4,1.1   l0.6,2.4l-1.7,0.9L1076.3,207.5z M1083,201.6l1.8,1.9c0,0,1.3,0.1,1.3-0.2s0.2-2,0.2-2l0.9-0.8l-0.8-1.8l-2,0.7L1083,201.6z",
                  }),
                }),
                (0, r.jsx)("a", {
                  href: "/medicare/medicare-plans/supplement-plans/new-hampshire/",
                  children: (0, r.jsx)("path", {
                    id: "NH",
                    "data-info":
                      "<div>New Hampshire Medicare Supplement Plans</div>",
                    fill: "#29b3c9",
                    d: "M1054.8,242.4l0.9-1.1l1.1-3.3l-2.5-0.9l-0.5-3.1l-3.9-1.1l-0.3-2.7l-7.3-23.4l-4.6-14.5l-0.9,0   l-0.6,1.6l-0.6-0.5l-1-1l-1.5,1.9l0,5l0.3,5.7l1.9,2.7v4l-3.7,5.1l-2.6,1.1v1.1l1.1,1.8v8.6l-0.8,9.2l-0.2,4.8l1,1.3l-0.2,4.5   l-0.5,1.8l1.5,0.9l16.4-4.7l2.3-0.6l1.5-2.6L1054.8,242.4z",
                  }),
                }),
                (0, r.jsx)("a", {
                  href: "/medicare/medicare-plans/supplement-plans/vermont/",
                  children: (0, r.jsx)("path", {
                    id: "VT",
                    "data-info": "<div>Vermont Medicare Supplement Plans</div>",
                    fill: "#29b3c9",
                    d: "M1018.3,253.7l-0.8-5.7l-2.4-10l-0.6-0.3l-2.9-1.3l0.8-2.9l-0.8-2.1l-2.7-4.6l1-3.9l-0.8-5.2   l-2.4-6.5l-0.8-4.9l26.2-6.7l0.3,5.8l1.9,2.7v4l-3.7,4l-2.6,1.1v1.1l1.1,1.8v8.6l-0.8,9.2l-0.2,4.8l1,1.3l-0.2,4.5l-0.5,1.8   l0.7,1.6l-7,1.4L1018.3,253.7z",
                  }),
                }),
                (0, r.jsx)("a", {
                  href: "/medicare/medicare-plans/supplement-plans/new-york/",
                  children: (0, r.jsx)("path", {
                    id: "NY",
                    "data-info":
                      "<div>New York Medicare Supplement Plans</div>",
                    fill: "#29b3c9",
                    d: "M1002.6,289.4l-1.1-1l-2.6-0.2l-2.3-1.9l-1.6-6.1l-3.5,0.1l-2.4-2.7l-19.4,4.4l-43,8.7l-7.5,1.2   l-0.7-6.5l1.4-1.1l1.3-1.1l1-1.6l1.8-1.1l1.9-1.8l0.5-1.6l2.1-2.7l1.1-1l-0.2-1l-1.3-3.1l-1.8-0.2l-1.9-6.1l2.9-1.8l4.4-1.5l4-1.3   l3.2-0.5l6.3-0.2l1.9,1.3l1.6,0.2l2.1-1.3l2.6-1.1l5.2-0.5l2.1-1.8l1.8-3.2l1.6-1.9h2.1l1.9-1.1l0.2-2.3l-1.5-2.1l-0.3-1.5l1.1-2.1   v-1.5h-1.8l-1.8-0.8l-0.8-1.1l-0.2-2.6l5.8-5.5l0.6-0.8l1.5-2.9l2.9-4.5l2.7-3.7l2.1-2.4l2.4-1.8l3.1-1.2l5.5-1.3l3.2,0.2l4.5-1.5   l7.6-2.1l0.5,5l2.4,6.5l0.8,5.2l-1,3.9l2.6,4.5l0.8,2.1l-0.8,2.9l2.9,1.3l0.6,0.3l3.1,11l-0.5,5.1l-0.5,10.8l0.8,5.5l0.8,3.6   l1.5,7.3v8.1l-1.1,2.3l1.8,2l0.8,1.7l-1.9,1.8l0.3,1.3l1.3-0.3l1.5-1.3l2.3-2.6l1.1-0.6l1.6,0.6l2.3,0.2l7.9-3.9l2.9-2.7l1.3-1.5   l4.2,1.6l-3.4,3.6l-3.9,2.9l-7.1,5.3l-2.6,1l-5.8,1.9l-4,1.1l-1.2-0.5l-0.2-3.7l0.5-2.7l-0.2-2.1l-2.8-1.7l-4.5-1l-3.9-1.1   L1002.6,289.4z",
                  }),
                }),
                (0, r.jsx)("a", {
                  href: "/medicare/medicare-plans/supplement-plans/new-jersey/",
                  children: (0, r.jsx)("path", {
                    id: "NJ",
                    "data-info":
                      "<div>New Jersey Medicare Supplement Plans</div>",
                    fill: "#29b3c9",
                    d: "M1002.2,290.3l-2.1,2.4v3.1l-1.9,3.1l-0.2,1.6l1.3,1.3l-0.2,2.4l-2.3,1.1l0.8,2.7l0.2,1.1l2.7,0.3   l1,2.6l3.6,2.4l2.4,1.6v0.8l-3.2,3.1l-1.6,2.3l-1.5,2.7l-2.3,1.3l-1.2,0.7l-0.2,1.2l-0.6,2.6l1.1,2.2l3.2,2.9l4.8,2.3l4,0.6   l0.2,1.5l-0.8,1l0.3,2.7h0.8l2.1-2.4l0.8-4.8l2.7-4l3.1-6.5l1.1-5.5l-0.6-1.1l-0.2-9.4l-1.6-3.4l-1.1,0.8l-2.7,0.3l-0.5-0.5l1.1-1   l2.1-1.9l0.1-1.1l-0.4-3.4l0.5-2.7l-0.2-2.1l-2.6-1.1l-4.5-1l-3.9-1.1L1002.2,290.3z",
                  }),
                }),
                (0, r.jsx)("a", {
                  href: "/medicare/medicare-plans/supplement-plans/pennsylvania/",
                  children: (0, r.jsx)("path", {
                    id: "PA",
                    "data-info":
                      "<div>Pennsylvania Medicare Supplement Plans</div>",
                    fill: "#29b3c9",
                    d: "M996.2,326.5l1.1-0.6l2.3-0.6l1.5-2.7l1.6-2.3l3.2-3.1v-0.8l-2.4-1.6l-3.6-2.4l-1-2.6l-2.7-0.3   l-0.2-1.1l-0.8-2.7l2.3-1.1l0.2-2.4l-1.3-1.3l0.2-1.6l1.9-3.1v-3.1l2.3-2.4l0.2-1.1l-2.6-0.2l-2.3-1.9l-2.4-5.3l-3-0.9l-2.3-2.1   l-18.6,4l-43,8.7l-8.9,1.5l-0.5-7.1l-5.5,5.6l-1.3,0.5l-4.2,3l2.9,19.1l2.5,9.7l3.6,19.3l3.3-0.6l11.9-1.5l37.9-7.7l14.9-2.8   l8.3-1.6l0.3-0.2l2.1-1.6L996.2,326.5z",
                  }),
                }),
                (0, r.jsx)("a", {
                  href: "/medicare/medicare-plans/supplement-plans/delaware/",
                  children: (0, r.jsx)("path", {
                    id: "DE",
                    "data-info":
                      "<div>Delaware Medicare Supplement Plans</div>",
                    fill: "#29b3c9",
                    d: "M996.4,330.4l0.6-2.1l0-1.2l-1.3-0.1l-2.1,1.6l-1.5,1.5l1.5,4.2l2.3,5.7l2.1,9.7l1.6,6.3l5-0.2   l6.1-1.2l-2.3-7.4l-1,0.5l-3.6-2.4l-1.8-4.7l-1.9-3.6l-2.3-1l-2.1-3.6L996.4,330.4z",
                  }),
                }),
                (0, r.jsx)("a", {
                  href: "/medicare/medicare-plans/supplement-plans/maryland/",
                  children: (0, r.jsx)("path", {
                    id: "MD",
                    "data-info":
                      "<div>Maryland Medicare Supplement Plans</div>",
                    fill: "#29b3c9",
                    d: "M1011,355.3l-6.1,1.3l-5.8,0.2l-1.8-7.1l-2.1-9.7l-2.3-5.7l-1.3-4.4l-7.5,1.6l-14.9,2.8l-37.5,7.6   l1.1,5l1,5.7l0.3-0.3l2.1-2.4l2.3-2.6l2.4-0.6l1.5-1.5l1.8-2.6l1.3,0.6l2.9-0.3l2.6-2.1l2-1.5l1.8-0.5l1.6,1.1l2.9,1.5l1.9,1.8   l1.2,1.5l4.1,1.7v2.9l5.5,1.3l1.1,0.5l1.4-2l2.9,2l-1.3,2.5l-0.8,4l-1.8,2.6v2.1l0.6,1.8l5.1,1.4l4.3-0.1l3.1,1l2.1,0.3l1-2.1   l-1.5-2.1v-1.8l-2.4-2.1l-2.1-5.5l1.3-5.3l-0.2-2.1l-1.3-1.3c0,0,1.5-1.6,1.5-2.3c0-0.6,0.5-2.1,0.5-2.1l1.9-1.3l1.9-1.6l0.5,1   l-1.5,1.6l-1.3,3.7l0.3,1.1l1.8,0.3l0.5,5.5l-2.1,1l0.3,3.6l0.5-0.2l1.1-1.9l1.6,1.8l-1.6,1.3l-0.3,3.4l2.6,3.4l3.9,0.5l1.6-0.8   l3.2,4.2l1.4,0.5l6.7-2.8l2-4L1011,355.3z M994.3,364.3l1.1,2.5l0.2,1.8l1.1,1.9c0,0,0.9-0.9,0.9-1.2c0-0.3-0.7-3.1-0.7-3.1   l-0.7-2.3L994.3,364.3z",
                  }),
                }),
                (0, r.jsx)("a", {
                  href: "/medicare/medicare-plans/supplement-plans/west-virginia/",
                  children: (0, r.jsx)("path", {
                    id: "WV",
                    "data-info":
                      "<div>West Virginia Medicare Supplement Plans</div>",
                    fill: "#29b3c9",
                    d: "M930.6,342l1.1,4.9l1.1,6.9l3.6-2.7l2.3-3.1l2.5-0.6l1.5-1.5l1.8-2.6l1.2,0.6l2.9-0.3l2.6-2.1   l2-1.5l1.8-0.5l1.3,1l2.2,1.1l1.9,1.8l1.4,1.3l-0.1,4.7l-5.7-3.1l-4.5-1.8l-0.2,5.3l-0.5,2.1l-1.6,2.7l-0.6,1.6l-3.1,2.4l-0.5,2.3   l-3.4,0.3l-0.3,3.1l-1.1,5.5h-2.6l-1.3-0.8l-1.6-2.7l-1.8,0.2l-0.3,4.4l-2.1,6.6l-5,10.8l0.8,1.3l-0.2,2.7l-2.1,1.9l-1.5-0.3   l-3.2,2.4l-2.6-1l-1.8,4.7c0,0-3.7,0.8-4.4,1c-0.6,0.2-2.4-1.3-2.4-1.3l-2.4,2.3l-2.6,0.6l-2.9-0.8l-1.3-1.3l-2.2-3l-3.1-2   l-2.6-2.7l-2.9-3.7l-0.6-2.3l-2.6-1.5l-0.8-1.6l-0.2-5.3l2.2-0.1l1.9-0.8l0.2-2.7l1.6-1.5l0.2-5l1-3.9l1.3-0.6l1.3,1.1l0.5,1.8   l1.8-1l0.5-1.6l-1.1-1.8v-2.4l1-1.3l2.3-3.4l1.3-1.5l2.1,0.5l2.3-1.6l3.1-3.4l2.3-3.9l0.3-5.7l0.5-5v-4.7l-1.1-3.1l1-1.5l1.3-1.3   l3.5,19.8l4.6-0.8L930.6,342z",
                  }),
                }),
                (0, r.jsx)("a", {
                  href: "/medicare/medicare-plans/supplement-plans/kentucky/",
                  children: (0, r.jsx)("path", {
                    id: "KY",
                    "data-info":
                      "<div>Kentucky Medicare Supplement Plans</div>",
                    fill: "#29b3c9",
                    d: "M895.8,397.8l-2.3,2.7l-4.2,3.6L885,410l-1.8,1.8v2.1l-3.9,2.1l-5.7,3.4l-3.5,0.4l-51.9,4.9   l-15.8,1.8l-4.6,0.5l-3.9,0l-0.2,4.2l-8.2,0.1l-7,0.6l-10.4,0.2l1.9-0.2l2.2-1.8l2.1-1.1l0.2-3.2l0.9-1.8l-1.6-2.5l0.8-1.9l2.3-1.8   l2.1-0.6l2.7,1.3l3.6,1.3l1.1-0.3l0.2-2.3l-1.3-2.4l0.3-2.3l1.9-1.5l2.6-0.6l1.6-0.6l-0.8-1.8l-0.6-1.9l1.1-0.8l1.1-3.3l3-1.7   l5.8-1l3.6-0.5l1.5,1.9l1.8,0.8l1.8-3.2l2.9-1.5l1.9,1.6l0.8,1.1l2.1-0.5l-0.2-3.4l2.9-1.6l1.1-0.8l1.1,1.6h4.7l0.8-2.1l-0.3-2.3   l2.9-3.6l4.7-3.9l0.5-4.5l2.7-0.3l3.9-1.8l2.7-1.9l-0.3-1.9l-1.5-1.5l0.6-2.2l4.1-0.2l2.4-0.8l2.9,1.6l1.6,4.4l5.8,0.3l1.8,1.8   l2.1,0.2l2.4-1.5l3.1,0.5l1.3,1.5l2.7-2.6l1.8-1.3h1.6l0.6,2.7l1.8,1l2.4,2.2l0.2,5.5l0.8,1.6l2.6,1.5l0.6,2.3l2.9,3.7l2.6,2.7   L895.8,397.8z",
                  }),
                }),
                (0, r.jsx)("a", {
                  href: "/medicare/medicare-plans/supplement-plans/ohio/",
                  children: (0, r.jsx)("path", {
                    id: "OH",
                    "data-info": "<div>Ohio Medicare Supplement Plans</div>",
                    fill: "#29b3c9",
                    d: "M905.4,295l-6.1,4.1l-3.9,2.3l-3.4,3.7l-4,3.9l-3.2,0.8l-2.9,0.5l-5.5,2.6l-2.1,0.2l-3.4-3.1   l-5.2,0.6l-2.6-1.5l-2.4-1.4l-4.9,0.7l-10.2,1.6l-7.8,1.2l1.3,14.6l1.8,13.7l2.6,23.4l0.6,4.8l4.1-0.1l2.4-0.8l3.4,1.5l2.1,4.4   l5.1,0l1.9,2.1l1.8-0.1l2.5-1.3l2.5,0.4l2,1.5l1.7-2.1l2.3-1.3l2.1-0.7l0.6,2.7l1.8,1l3.5,2.3l2.2-0.1l1.1-1.1l-0.1-1.4l1.6-1.5   l0.2-5l1-3.9l1.5-1.4l1.5,0.9l0.8,1.2l1.2-0.2l-0.4-2.4l-0.6-0.6v-2.4l1-1.3l2.3-3.4l1.3-1.5l2.1,0.5l2.3-1.6l3.1-3.4l2.3-3.9   l0.2-5.4l0.5-5v-4.7l-1.1-3.1l1-1.5l0.9-1l-1.4-9.8L905.4,295z",
                  }),
                }),
                (0, r.jsx)("a", {
                  href: "/medicare/medicare-plans/supplement-plans/michigan/",
                  children: (0, r.jsx)("path", {
                    id: "MI",
                    "data-info":
                      "<div>Michigan Medicare Supplement Plans</div>",
                    fill: "#29b3c9",
                    d: "M755.6,182.1l1.8-2.1l2.2-0.8l5.4-3.9l2.3-0.6l0.5,0.5l-5.1,5.1l-3.3,1.9l-2.1,0.9L755.6,182.1z    M841.8,214.2l0.6,2.5l3.2,0.2l1.3-1.2c0,0-0.1-1.5-0.4-1.6c-0.3-0.2-1.6-1.9-1.6-1.9l-2.2,0.2l-1.6,0.2l-0.3,1.1L841.8,214.2z    M871.9,277.2l-3.2-8.2l-2.3-9.1l-2.4-3.2l-2.6-1.8l-1.6,1.1l-3.9,1.8l-1.9,5l-2.7,3.7l-1.1,0.6l-1.5-0.6c0,0-2.6-1.5-2.4-2.1   c0.2-0.6,0.5-5,0.5-5l3.4-1.3l0.8-3.4l0.6-2.6l2.4-1.6l-0.3-10l-1.6-2.3l-1.3-0.8l-0.8-2.1l0.8-0.8l1.6,0.3l0.2-1.6L850,231   l-1.3-2.6h-2.6l-4.5-1.5l-5.5-3.4h-2.7l-0.6,0.6l-1-0.5l-3.1-2.3l-2.9,1.8l-2.9,2.3l0.3,3.6l1,0.3l2.1,0.5l0.5,0.8l-2.6,0.8   l-2.6,0.3l-1.5,1.8l-0.3,2.1l0.3,1.6l0.3,5.5l-3.6,2.1l-0.6-0.2v-4.2l1.3-2.4l0.6-2.4l-0.8-0.8l-1.9,0.8l-1,4.2l-2.7,1.1l-1.8,1.9   l-0.2,1l0.6,0.8l-0.6,2.6l-2.3,0.5v1.1l0.8,2.4l-1.1,6.1l-1.6,4l0.6,4.7l0.5,1.1l-0.8,2.4l-0.3,0.8l-0.3,2.7l3.6,6l2.9,6.5l1.5,4.8   l-0.8,4.7l-1,6l-2.4,5.2l-0.3,2.7l-3.3,3.1l4.4-0.2l21.4-2.3l7.3-1l0.1,1.7l6.9-1.2l10.3-1.5l3.9-0.5l0.1-0.6l0.2-1.5l2.1-3.7   l2-1.7l-0.2-5.1l1.6-1.6l1.1-0.3l0.2-3.6l1.5-3l1.1,0.6l0.2,0.6l0.8,0.2l1.9-1L871.9,277.2z M741.5,211.2l0.7-0.6l2.7-0.8l3.6-2.3   v-1l0.6-0.6l6-1l2.4-1.9l4.4-2.1l0.2-1.3l1.9-2.9l1.8-0.8l1.3-1.8l2.3-2.3l4.4-2.4l4.7-0.5l1.1,1.1l-0.3,1l-3.7,1l-1.5,3.1   l-2.3,0.8l-0.5,2.4l-2.4,3.2l-0.3,2.6l0.8,0.5l1-1.1l3.6-2.9l1.3,1.3h2.3l3.2,1l1.5,1.1l1.5,3.1l2.7,2.7l3.9-0.2l1.5-1l1.6,1.3   l1.6,0.5l1.3-0.8h1.1l1.6-1l4-3.6l3.4-1.1l6.6-0.3l4.5-1.9l2.6-1.3l1.5,0.2v5.7l0.5,0.3l2.9,0.8l1.9-0.5l6.1-1.6l1.1-1.1l1.5,0.5v7   l3.2,3.1l1.3,0.6l1.3,1l-1.3,0.3l-0.8-0.3l-3.7-0.5l-2.1,0.6l-2.3-0.2l-3.2,1.5h-1.8l-5.8-1.3l-5.2,0.2l-1.9,2.6l-7,0.6l-2.4,0.8   l-1.1,3.1l-1.3,1.1l-0.5-0.2l-1.5-1.6l-4.5,2.4h-0.6l-1.1-1.6l-0.8,0.2l-1.9,4.4l-1,4l-3.2,7l-1.2-1l-1.4-1l-1.9-10.3l-3.5-1.4   l-2.1-2.3l-12.1-2.7l-2.9-1l-8.2-2.2l-7.9-1.1L741.5,211.2z",
                  }),
                }),
                (0, r.jsx)("a", {
                  href: "/medicare/medicare-plans/supplement-plans/wyoming/",
                  children: (0, r.jsx)("path", {
                    id: "WY",
                    "data-info": "<div>Wyoming Medicare Supplement Plans</div>",
                    fill: "#29b3c9",
                    d: "M528.3,243.8l-10.5-0.8l-32.1-3.3l-16.2-2.1l-28.3-4.1l-19.9-3l-1.4,11.2l-3.8,24.3l-5.3,30.4   l-1.5,10.5l-1.7,11.9l6.5,0.9l25.9,2.5l20.6,2.3l36.8,4.1l23.8,2.9l4.5-44.2l1.4-25.4L528.3,243.8z",
                  }),
                }),
                (0, r.jsx)("a", {
                  href: "/medicare/medicare-plans/supplement-plans/montana/",
                  children: (0, r.jsx)("path", {
                    id: "MT",
                    "data-info": "<div>Montana Medicare Supplement Plans</div>",
                    fill: "#29b3c9",
                    d: "M530.7,222.3l0.6-11.2l2.3-24.8c0.5-5,1.1-8.5,1.4-15.4l0.9-14.6l-30.7-2.8L476,150l-29.3-4   l-32.3-5.3l-18.4-3.4l-32.7-6.9l-4.5,21.3l3.4,7.5l-1.4,4.6l1.8,4.6l3.2,1.4l4.6,10.8l2.7,3.2l0.5,1.1l3.4,1.1l0.5,2.1l-7.1,17.6   v2.5l2.5,3.2h0.9l4.8-3l0.7-1.1l1.6,0.7l-0.2,5.3l2.7,12.6l3,2.5l0.9,0.7l1.8,2.3l-0.5,3.4l0.7,3.4l1.1,0.9l2.3-2.3h2.7l3.2,1.6   l2.5-0.9h4.1l3.7,1.6l2.7-0.5l0.5-3l3-0.7l1.4,1.4l0.5,3.2l1.8,1.4l1.5-11.6l20.7,3l28.2,4l16.6,1.9l31.4,3.5l11,1.5l1.1-15.4   L530.7,222.3z",
                  }),
                }),
                (0, r.jsx)("a", {
                  href: "/medicare/medicare-plans/supplement-plans/idaho/",
                  children: (0, r.jsx)("path", {
                    id: "ID",
                    "data-info": "<div>Idaho Medicare Supplement Plans</div>",
                    fill: "#29b3c9",
                    d: "M336.1,281c-22.6-4.3-14.1-2.8-21.1-4.4l4.4-17.5l4.3-17.7l1.4-4.2l2.5-5.9l-1.3-2.3l-2.5,0.1   l-0.8-1l0.5-1.1l0.3-3.1l4.5-5.5l1.8-0.5l1.1-1.1l0.6-3.2l0.9-0.7l3.9-5.8l3.9-4.3l0.2-3.8l-3.4-2.6l-1.3-4.4l0.4-9.7l3.7-16.5   l4.5-20.8l3.8-13.5l0.8-3.8l13,2.5l-4.2,21.5l2.9,7.7l-1.1,4.6l2,4.6l3.2,1.7l4.5,9.8l2.7,3.8l0.6,1.1l3.4,1.1l0.5,2.5l-6.9,16.8   l0.3,3.3l2.7,2.9l1.9,0.5l4.8-3.6l0.4-0.5l0.2,0.8l0.3,4.1l2.6,12.9l3.5,2.7l0.4,0.8l2.1,2.4l-0.8,2.8l0.7,3.8l1.9,0.9l2.1-1.6   l2.6-0.5l3.4,1.6l2.5-0.6l3.8-0.2l4,1.6l2.7-0.3l0.9-2.3l2.5-1.6l0.7,1.7l0.6,2.2l2.3,2.5l-3.8,24l-5.1,29l-4.2-0.3l-8.2-1.5   l-9.8-1.8l-12.2-2.4l-12.5-2.5l-8.5-1.8l-9.3-1.7L336.1,281z",
                  }),
                }),
                (0, r.jsx)("a", {
                  href: "/medicare/medicare-plans/supplement-plans/washington/",
                  children: (0, r.jsx)("path", {
                    id: "WA",
                    "data-info":
                      "<div>Washington Medicare Supplement Plans</div>",
                    fill: "#29b3c9",
                    d: "M267.6,106.4l4.4,1.5l9.7,2.7l8.6,1.9l20,5.7l23,5.7l15.2,3.4l-1,3.9l-4.1,13.8l-4.5,20.8   l-3.2,16.1l-0.4,9.4l-13.2-3.9l-15.6-3.4l-13.7,0.6l-1.6-1.5l-5.3,1.9l-4-0.3l-2.7-1.8l-1.6,0.5l-4.2-0.2l-1.9-1.4l-4.8-1.7   l-1.4-0.2l-5-1.3l-1.8,1.5l-5.7-0.3l-4.8-3.8l0.2-0.8l0.1-7.9l-2.1-3.9l-4.1-0.7l-0.4-2.4l-2.5-0.6l-2.9-0.5l-1.8,1l-2.3-2.9   l0.3-2.9l2.7-0.3l1.6-4l-2.6-1.1l0.2-3.7l4.4-0.6l-2.7-2.7l-1.5-7.1l0.6-2.9v-7.9l-1.8-3.2l2.3-9.4l2.1,0.5l2.4,2.9l2.7,2.6   l3.2,1.9l4.5,2.1l3.1,0.6l2.9,1.5l3.4,1l2.3-0.2v-2.4l1.3-1.1l2.1-1.3l0.3,1.1l0.3,1.8l-2.3,0.5l-0.3,2.1l1.8,1.5l1.1,2.4l0.6,1.9   l1.5-0.2l0.2-1.3l-1-1.3l-0.5-3.2l0.8-1.8l-0.6-1.5V119l1.8-3.6l-1.1-2.6l-2.4-4.8l0.3-0.8L267.6,106.4z M258.1,112.3l2-0.2   l0.5,1.4l1.5-1.6h2.3l0.8,1.5l-1.5,1.7l0.6,0.8l-0.7,2l-1.4,0.4c0,0-0.9,0.1-0.9-0.2s1.5-2.6,1.5-2.6l-1.7-0.6l-0.3,1.5l-0.7,0.6   l-1.5-2.3L258.1,112.3z",
                  }),
                }),
                (0, r.jsx)("a", {
                  href: "/medicare/medicare-plans/supplement-plans/texas/",
                  children: (0, r.jsx)("path", {
                    id: "TX",
                    "data-info": "<div>Texas Medicare Supplement Plans</div>",
                    fill: "#29b3c9",
                    d: "M531.1,433.4l22.7,1.1l31.1,1.1l-2.3,23.5l-0.3,18.2l0.1,2.1l4.3,3.8l1.7,0.8l1.8,0.3l0.7-1.3   l0.9,0.9l1.7,0.5l1.6-0.7l1.1,0.4l-0.3,3.4l4.3,1l2.7,0.8l4,0.5l2.2,1.8l3.2-1.6l2.8,0.4l2,2.8l1.1,0.3l-0.2,2l3.1,1.2l2.8-1.8   l1.5,0.4l2.4,0.2l0.4,1.9l4.6,2l2.7-0.2l2-4.1h0.3l1.1,1.9l4.4,1l3.3,1.2l3.3,0.8l2.1-0.8l0.8-2.5h3.7l1.9,0.8l3.1-1.6h0.7l0.4,1.1   h4.3l2.4-1.3l1.7,0.3l1.4,1.9l2.9,1.7l3.5,1.1l2.7,1.4l2.4,1.6l3.3-0.9l1.9,1l0.5,10.1l0.3,9.7l0.7,9.5l0.5,4l2.7,4.6l1.1,4.1   l3.9,6.3l0.5,2.9l0.5,1l-0.7,7.5l-2.7,4.4l1,2.9l-0.4,2.5l-0.8,7.3l-1.4,2.7l0.6,4.4l-5.7,1.6l-9.9,4.5l-1,1.9l-2.6,1.9l-2.1,1.5   l-1.3,0.8l-5.7,5.3l-2.7,2.1l-5.3,3.2l-5.7,2.4l-6.3,3.4l-1.8,1.5l-5.8,3.6l-3.4,0.6l-3.9,5.5l-4,0.3l-1,1.9l2.3,1.9l-1.5,5.5   l-1.3,4.5l-1.1,3.9l-0.8,4.5l0.8,2.4l1.8,7l1,6.1l1.8,2.7l-1,1.5l-3.1,1.9l-5.7-3.9l-5.5-1.1l-1.3,0.5l-3.2-0.6l-4.2-3.1l-5.2-1.1   l-7.6-3.4l-2.1-3.9l-1.3-6.5l-3.2-1.9l-0.6-2.3l0.6-0.6l0.3-3.4l-1.3-0.6l-0.6-1l1.3-4.4l-1.6-2.3l-3.2-1.3l-3.4-4.4l-3.6-6.6   l-4.2-2.6l0.2-1.9l-5.3-12.3l-0.8-4.2l-1.8-1.9l-0.2-1.5l-6-5.3l-2.6-3.1v-1.1l-2.6-2.1l-6.8-1.1l-7.4-0.6l-3.1-2.3l-4.5,1.8   l-3.6,1.5l-2.3,3.2l-1,3.7l-4.4,6.1l-2.4,2.4l-2.6-1l-1.8-1.1l-1.9-0.6l-3.9-2.3v-0.6l-1.8-1.9l-5.2-2.1l-7.4-7.8l-2.3-4.7v-8.1   l-3.2-6.5l-0.5-2.7l-1.6-1l-1.1-2.1l-5-2.1l-1.3-1.6l-7.1-7.9l-1.3-3.2l-4.7-2.3l-1.5-4.4l-2.6-2.9l-1.9-0.5l-0.6-4.7l8,0.7l29,2.7   l29,1.6l2.3-23.8l3.9-55.6l1.6-18.7l1.4,0 M631.2,667.3l-0.6-7.1l-2.7-7.2l-0.6-7l1.5-8.2l3.3-6.9l3.5-5.4l3.2-3.6l0.6,0.2   l-4.8,6.6l-4.4,6.5l-2,6.6l-0.3,5.2l0.9,6.1l2.6,7.2l0.5,5.2l0.2,1.5L631.2,667.3z",
                  }),
                }),
                (0, r.jsx)("a", {
                  href: "/medicare/medicare-plans/supplement-plans/california/",
                  children: (0, r.jsx)("path", {
                    id: "CA",
                    "data-info":
                      "<div>California Medicare Supplement Plans</div>",
                    fill: "#29b3c9",
                    d: "M310.7,486.8l3.8-0.5l1.5-2l0.7-1.9l-3.2-0.1l-1.1-1.8l0.8-1.7l0-6.2l2.2-1.3l2.7-2.6l0.4-4.9   l1.6-3.5l1.9-2.1l3.3-1.7l1.3-0.7l0.8-1.5l-0.9-0.9l-1-1.5l-0.9-5.3l-2.9-5.2l0.1-2.8l-2.2-3.2l-15-23.2l-19.4-28.7l-22.4-33   l-12.7-19.5l1.8-7.2l6.8-25.9l8.1-31.4l-12.4-3.3l-13.5-3.4l-12.6-4.1l-7.5-2.1l-11.4-3l-7.1-2.4l-1.6,4.7l-0.2,7.4l-5.2,11.8   l-3.1,2.6l-0.3,1.1l-1.8,0.8l-1.5,4.2l-0.8,3.2l2.7,4.2l1.6,4.2l1.1,3.6l-0.3,6.5l-1.8,3.1l-0.6,5.8l-1,3.7l1.8,3.9l2.7,4.5   l2.3,4.8l1.3,4l-0.3,3.2l-0.3,0.5v2.1l5.7,6.3l-0.5,2.4l-0.6,2.3l-0.6,1.9l0.2,8.2l2.1,3.7l1.9,2.6l2.7,0.5l1,2.7l-1.1,3.6   l-2.1,1.6h-1.1l-0.8,3.9l0.5,2.9l3.2,4.4l1.6,5.3l1.5,4.7l1.3,3.1l3.4,5.8l1.5,2.6l0.5,2.9l1.6,1v2.4l-0.8,1.9l-1.8,7.1l-0.5,1.9   l2.4,2.7l4.2,0.5l4.5,1.8l3.9,2.1h2.9l2.9,3.1l2.6,4.8l1.1,2.3l3.9,2.1l4.8,0.8l1.5,2.1l0.6,3.2l-1.5,0.6l0.3,1l3.2,0.8l2.7,0.2   l2.9,4.7l3.9,4.2l0.8,2.3l2.6,4.2l0.3,3.2v9.4l0.5,1.8l10,1.5l19.7,2.7L310.7,486.8z M222.8,437l1.3,1.5l-0.2,1.3l-3.2-0.1   l-0.6-1.2l-0.6-1.5L222.8,437z M224.7,437l1.2-0.6l3.6,2.1l3.1,1.2l-0.9,0.6l-4.5-0.2l-1.6-1.6L224.7,437z M245.4,456.8l1.8,2.3   l0.8,1l1.5,0.6l0.6-1.5l-1-1.8l-2.7-2l-1.1,0.2V456.8z M244,465.5l1.8,3.2l1.2,1.9l-1.5,0.2l-1.3-1.2c0,0-0.7-1.5-0.7-1.9   s0-2.2,0-2.2L244,465.5z",
                  }),
                }),
                (0, r.jsx)("a", {
                  href: "/medicare/medicare-plans/supplement-plans/arizona/",
                  children: (0, r.jsx)("path", {
                    id: "AZ",
                    "data-info": "<div>Arizona Medicare Supplement Plans</div>",
                    fill: "#29b3c9",
                    d: "M311.7,487.5l-2.6,2.2l-0.3,1.5l0.5,1l18.9,10.7l12.1,7.6l14.7,8.6l16.8,10l12.3,2.4l25.1,2.7   l2.5-12.5l3.8-27.2l7-52.9l4.3-31l-24.6-3.7l-27.2-4.6l-33.4-6.3l-2.9,18.1l-0.5,0.5l-1.7,2.6l-2.5-0.1l-1.3-2.7l-2.7-0.3l-0.9-1.1   h-0.9l-0.9,0.6l-1.9,1l-0.1,7l-0.2,1.7l-0.6,12.6l-1.5,2.2l-0.6,3.3l2.7,4.9l1.3,5.8l0.8,1l1,0.6l-0.1,2.3l-1.6,1.4l-3.4,1.7   l-1.9,1.9l-1.5,3.7l-0.6,4.9l-2.9,2.7l-2.1,0.7l-0.1,5.8l-0.5,1.7l0.5,0.8l3.7,0.6l-0.6,2.7l-1.5,2.2L311.7,487.5z",
                  }),
                }),
                (0, r.jsx)("a", {
                  href: "/medicare/medicare-plans/supplement-plans/nevada/",
                  children: (0, r.jsx)("path", {
                    id: "NV",
                    "data-info": "<div>Nevada Medicare Supplement Plans</div>",
                    fill: "#29b3c9",
                    d: "M314.7,277.6l21,4.5l9.7,1.9l9.3,1.8l6.6,1.6l-0.6,5.9l-3.5,17.3l-4.1,20l-1.9,9.7l-2.2,13.3   l-3.2,16.4l-3.5,15.7l-2,10.2l-2.5,16.8l-0.5,1.1l-1.1,2.5l-1.9-0.1l-1.1-2.7l-2.7-0.5l-1.4-1l-2,0.3l-0.9,0.7l-1.3,1.3l-0.4,7   l-0.5,1.7l-0.4,12.1l-1.3,1.7l-1.9-2.3l-14.5-22.7l-19.4-29L263.6,349l-12.4-18.6l1.6-6.6l7-25.9l7.9-31.3l33.6,8.1l13.7,3",
                  }),
                }),
                (0, r.jsx)("a", {
                  href: "/medicare/medicare-plans/supplement-plans/utah/",
                  children: (0, r.jsx)("path", {
                    id: "UT",
                    "data-info": "<div>Utah Medicare Supplement Plans</div>",
                    fill: "#29b3c9",
                    d: "M427,409.3l-24.6-3.5l-26.6-4.9l-33.8-6l1.6-9.2l3.2-15.2L350,354l2.2-13.6l1.9-8.9l3.8-20.5   l3.5-17.5l1.1-5.6l12.7,2.3l12,2.1l10.3,1.8l8.3,1.4l3.7,0.5l-1.5,10.6l-2.3,13.2l7.8,0.9l16.4,1.8l8.2,0.9l-2.1,22l-3.2,22.6   l-3.8,27.8l-1.7,11.1L427,409.3z",
                  }),
                }),
                (0, r.jsx)("a", {
                  href: "/medicare/medicare-plans/supplement-plans/colorado/",
                  children: (0, r.jsx)("path", {
                    id: "CO",
                    "data-info":
                      "<div>Colorado Medicare Supplement Plans</div>",
                    fill: "#29b3c9",
                    d: "M552.6,356.8l1.4-21.3l-32.1-3.1l-24.5-2.7l-37.3-4.1l-20.7-2.5l-2.6,22.2l-3.2,22.4l-3.8,28   l-1.5,11.1l-0.3,2.8l33.9,3.8l37.7,4.3l32,3.2l16.6,0.8",
                  }),
                }),
                (0, r.jsx)("a", {
                  href: "/medicare/medicare-plans/supplement-plans/new-mexico/",
                  children: (0, r.jsx)("path", {
                    id: "NM",
                    "data-info":
                      "<div>New Mexico Medicare Supplement Plans</div>",
                    fill: "#29b3c9",
                    d: "M456.7,531l-0.7-6.1l8.6,0.5l29.5,3.1l28.4,1.4l2-22.3l3.7-55.9l1.1-19.4l2,0.3l0-11.1l-32.2-2.4   l-36.9-4.4l-34.5-4.1l-4.2,30.8l-7,53.2l-3.8,26.9l-2,13.3l15.5,2l1.3-10l16.7,2.6L456.7,531z",
                  }),
                }),
                (0, r.jsx)("a", {
                  href: "/medicare/medicare-plans/supplement-plans/oregon/",
                  children: (0, r.jsx)("path", {
                    id: "OR",
                    "data-info": "<div>Oregon Medicare Supplement Plans</div>",
                    fill: "#29b3c9",
                    d: "M314.3,276.7l4.3-17.9l4.7-17.9l1.1-4.2l2.4-5.6l-0.6-1.2l-2.5,0l-1.3-1.7l0.5-1.5l0.5-3.2l4.5-5.5   l1.8-1.1l1.1-1.1l1.5-3.6l4-5.7l3.6-3.9l0.2-3.5l-3.3-2.5l-1.2-4.5l-13.2-3.7l-15.1-3.5l-15.4,0.1l-0.5-1.4l-5.5,2.1l-4.5-0.6   l-2.4-1.6l-1.3,0.7L273,184l-1.7-1.4l-5.3-2.1l-0.8,0.1l-4.3-1.5l-1.9,1.8l-6.2-0.3l-5.9-4.1l0.7-0.8l0.2-7.8l-2.3-3.9l-4.1-0.6   l-0.7-2.5l-2.4-0.5l-5.8,2.1l-2.3,6.5l-3.2,10l-3.2,6.5l-5,14.1l-6.5,13.6l-8.1,12.6l-1.9,2.9l-0.8,8.6l-1.3,6l2.7,3.5l6.7,2.3   l11.6,3.3l7.9,2.5l12.4,3.6l13.3,3.6l13.2,3.6",
                  }),
                }),
                (0, r.jsx)("a", {
                  href: "/medicare/medicare-plans/supplement-plans/north-dakota/",
                  children: (0, r.jsx)("path", {
                    id: "ND",
                    "data-info":
                      "<div>North Dakota Medicare Supplement Plans</div>",
                    fill: "#29b3c9",
                    d: "M645.3,227.7l-0.4-7.5l-2-7.3l-1.8-13.6l-0.5-9.8l-2-3.1l-1.6-5.4v-10.3l0.7-3.9l-2.1-5.5   l-28.4-0.6l-18.6-0.6l-26.5-1.3l-24.9-1.9l-1.3,14.2l-1.4,15.1l-2.3,24.9l-0.5,11l56.8,3.8L645.3,227.7z",
                  }),
                }),
                (0, r.jsx)("a", {
                  href: "/medicare/medicare-plans/supplement-plans/south-dakota/",
                  children: (0, r.jsx)("path", {
                    id: "SD",
                    "data-info":
                      "<div>South Dakota Medicare Supplement Plans</div>",
                    fill: "#da8c27",
                    d: "M646.8,303.2l-1-1.1l-1.5-3.6l1.8-3.7l1.1-5.6l-2.6-2.1l-0.3-2.7l0.6-3l2.2-0.8l0.3-5.7l-0.1-30.1   l-0.6-3l-4.1-3.6l-1-2v-1.9l1.9-1.3l1.5-1.9l0.2-2.7l-57.4-1.6l-56.2-3.9l-0.8,5.3l-1.6,15.9l-1.3,17.9l-1.6,24.6l16,1l19.6,1.1   l18,1.3l23.8,1.3l10.7-0.8l2.9,2.3l4.3,3l1,0.8l3.5-0.9l4-0.3l2.7-0.1l3.1,1.2l4.5,1.4l3.1,1.8l0.6,1.9l0.9,1.9l0.7-0.5   L646.8,303.2z",
                  }),
                }),
                (0, r.jsx)("a", {
                  href: "/medicare/medicare-plans/supplement-plans/nebraska/",
                  children: (0, r.jsx)("path", {
                    id: "NE",
                    "data-info":
                      "<div>Nebraska Medicare Supplement Plans</div>",
                    fill: "#29b3c9",
                    d: "M658.2,347l1.4,2.7l0.1,2.1l2.4,3.7l2.7,3.2h-5l-43.5-0.9l-40.8-0.9l-21.2-1l1.1-21.3l-33.4-2.7   l4.3-44l15.5,1L562,290l17.8,1.1l23.8,1.1l10.7-0.5l2.1,2.3l4.8,3l1.1,0.9l4.3-1.4l3.9-0.5l2.7-0.2l1.8,1.4l5,1.6l3,1.6l0.5,1.6   l0.9,2.1h1.8l0.8,0l1,5.2l2.7,8l1.2,4.6l2.1,3.8l0.5,4.9l1.4,4.3l0.5,6.5",
                  }),
                }),
                (0, r.jsx)("a", {
                  href: "/medicare/medicare-plans/supplement-plans/iowa/",
                  children: (0, r.jsx)("path", {
                    id: "IA",
                    "data-info": "<div>Iowa Medicare Supplement Plans</div>",
                    fill: "#29b3c9",
                    d: "M740.6,301.6l0.2,1.9l2.3,1.1l1.1,1.3l0.3,1.3l3.9,3.2l0.7,2.2l-0.8,2.9l-1.5,3.5l-0.8,2.7   l-2.2,1.6l-1.7,0.6l-5.5,1.5l-0.7,2.3l-0.8,2.3l0.6,1.4l1.7,1.7l0,3.7l-2.2,1.6l-0.5,1.5v2.5l-1.5,0.5l-1.7,1.4l-0.5,1.5l0.5,1.7   l-1.4,1.2l-2.3-2.7l-1.5-2.6l-8.3,0.8l-10.2,0.6l-25,0.7l-13,0.2l-9.4,0.2l-1.3,0.1l-1.7-4.5l-0.2-6.6l-1.6-4.1l-0.7-5.3l-2.3-3.7   l-0.9-4.8l-2.7-7.5l-1.1-5.4l-1.4-2.2l-1.6-2.7l1.8-4.3l1.4-5.7l-2.7-2.1l-0.5-2.7l0.9-2.5h1.7h11.5l49.6-0.7l19.9-0.7l1.9,2.7   l1.8,2.6l0.5,0.8l-1.8,2.7l0.5,4.2l2.5,3.9l3,1.8l2.4,0.2L740.6,301.6z",
                  }),
                }),
                (0, r.jsx)("a", {
                  href: "/medicare/medicare-plans/supplement-plans/mississippi/",
                  children: (0, r.jsx)("path", {
                    id: "MS",
                    "data-info":
                      "<div>Mississippi Medicare Supplement Plans</div>",
                    fill: "#29b3c9",
                    d: "M798.6,567l-0.3,1.3h-5.2l-1.5-0.8l-2.1-0.3l-6.8,1.9l-1.8-0.8l-2.6,4.2l-1.1,0.8l-1.1-2.5   l-1.1-3.9l-3.4-3.2l1.1-7.5l-0.7-0.9l-1.8,0.2l-8.2,0.7l-24.2,0.7l-0.5-1.6l0.7-8l3.4-6.2l5.3-9.1l-0.9-2.1h1.1l0.7-3.2l-2.3-1.8   l0.2-1.8l-2.1-4.6l-0.3-5.3l1.4-2.7l-0.4-4.3l-1.4-3l1.4-1.4l-1.4-2.1l0.5-1.8l0.9-6.2l3-2.7l-0.7-2.1l3.7-5.3l2.7-0.9v-2.5   l-0.7-1.4l2.7-5.3l2.7-1.1l0.1-3.4l8.7-0.1l24.1-1.9l4.6-0.2l0,6.4l0.2,16.7l-0.8,31l-0.2,14.1l2.7,18.8L798.6,567z",
                  }),
                }),
                (0, r.jsx)("a", {
                  href: "/medicare/medicare-plans/supplement-plans/indiana/",
                  children: (0, r.jsx)("path", {
                    id: "IN",
                    "data-info": "<div>Indiana Medicare Supplement Plans</div>",
                    fill: "#29b3c9",
                    d: "M792.4,400.9l0.1-2.9l0.5-4.5l2.3-2.9l1.8-3.9l2.6-4.2l-0.5-5.8l-1.8-2.7l-0.3-3.2l0.8-5.5l-0.5-7   l-1.3-16l-1.3-15.4l-1-11.7l3.1,0.9l1.5,1l1.1-0.3l2.1-1.9l2.8-1.6l5.1-0.2l22-2.3l5.6-0.5l1.5,16l4.3,36.8l0.6,5.8L843,371   l1.2,1.8l0.1,1.4l-2.5,1.6l-3.5,1.6l-3.2,0.6l-0.6,4.9l-4.6,3.3l-2.8,4l0.3,2.4l-0.6,1.5h-3.3l-1.6-1.6l-2.5,1.3l-2.7,1.5l0.2,3.1   l-1.2,0.3l-0.5-1l-2.2-1.5l-3.3,1.3l-1.6,3l-1.4-0.8l-1.5-1.6l-4.5,0.5l-5.6,1L792.4,400.9z",
                  }),
                }),
                (0, r.jsx)("a", {
                  href: "/medicare/medicare-plans/supplement-plans/illinois/",
                  children: (0, r.jsx)("path", {
                    id: "IL",
                    "data-info":
                      "<div>Illinois Medicare Supplement Plans</div>",
                    fill: "#29b3c9",
                    d: "M791.8,401.6V398l0.3-4.9l2.4-3.1l1.8-3.8l2.6-3.9l-0.4-5.3l-2-3.5l-0.1-3.3l0.7-5.3l-0.8-7.2   l-1.1-15.8l-1.3-15l-0.9-11.6l-0.3-0.9l-0.8-2.6l-1.3-3.7l-1.6-1.8l-1.5-2.6l-0.2-5.5l-9.9,1.3l-27.2,1.7l-8.7-0.4l0.2,2.4l2.3,0.7   l0.9,1.1l0.5,1.8l3.9,3.4l0.7,2.3l-0.7,3.4l-1.8,3.7l-0.7,2.5l-2.3,1.8l-1.8,0.7l-5.3,1.4l-0.7,1.8L736,330l0.7,1.4l1.8,1.6   l-0.2,4.1l-1.8,1.6l-0.7,1.6v2.7l-1.8,0.5l-1.6,1.1l-0.2,1.4l0.2,2.1l-1.7,1.3l-1,2.8l0.5,3.7l2.3,7.3l7.3,7.5l5.5,3.7l-0.2,4.3   l0.9,1.4l6.4,0.5l2.7,1.4l-0.7,3.7l-2.3,5.9l-0.7,3.2l2.3,3.9l6.4,5.3l4.6,0.7l2.1,5l2.1,3.2l-0.9,3l1.6,4.1l1.8,2.1l1.9-0.8   l0.7-2.2l2-1.4l3.2-1.1l3.1,1.2l2.9,1.1l0.8-0.2l-0.1-1.2l-1.1-2.8l0.4-2.4l2.3-1.6l2.4-1l1.2-0.4l-0.6-1.3l-0.8-2.2l1.2-1.3   L791.8,401.6z",
                  }),
                }),
                (0, r.jsx)("a", {
                  href: "/medicare/medicare-plans/supplement-plans/minnesota/",
                  children: (0, r.jsx)("path", {
                    id: "MN",
                    "data-info":
                      "<div>Minnesota Medicare Supplement Plans</div>",
                    fill: "#29b3c9",
                    d: "M645.9,228.5l-0.5-8.5l-1.8-7.3l-1.8-13.5l-0.5-9.8l-1.8-3.4l-1.6-5v-10.3l0.7-3.9l-1.8-5.5l30.1,0   l0.3-8.2l0.6-0.2l2.3,0.5l1.9,0.8l0.8,5.5l1.5,6.1l1.6,1.6h4.8l0.3,1.5l6.3,0.3v2.1h4.8l0.3-1.3l1.1-1.1l2.3-0.6l1.3,1h2.9l3.9,2.6   l5.3,2.4l2.4,0.5l0.5-1l1.5-0.5l0.5,2.9l2.6,1.3l0.5-0.5l1.3,0.2v2.1l2.6,1h3.1l1.6-0.8l3.2-3.2l2.6-0.5l0.8,1.8l0.5,1.3h1l1-0.8   l8.9-0.3l1.8,3.1h0.6l0.7-1.1l4.4-0.4l-0.6,2.3l-3.9,1.8l-9.2,4.1l-4.8,2l-3.1,2.6l-2.4,3.6l-2.3,3.9l-1.8,0.8l-4.5,5l-1.3,0.2   l-3.8,2.9l-2.8,3.2l-0.2,3l0.2,7.8l-1.6,1.6L704,228l-1.8,5.7l2.5,3.6l0.5,2.5l-1.1,3l-0.2,3.7l0.5,7.1l3.4,4.1h3l2.5,2.3l3.2,1.4   l3.7,5l7.1,5l1.8,2.1l0.2,5.5l-20.6,0.7l-60.2,0.5l-0.3-35.7l-0.5-3l-4.1-3.4l-1.1-1.8v-1.6l2.1-1.6l1.4-1.4L645.9,228.5z",
                  }),
                }),
                (0, r.jsx)("a", {
                  href: "/medicare/medicare-plans/supplement-plans/wisconsin/",
                  children: (0, r.jsx)("path", {
                    id: "WI",
                    "data-info":
                      "<div>Wisconsin Medicare Supplement Plans</div>",
                    fill: "#29b3c9",
                    d: "M786.9,297.2l0.4-3l-1.6-4.5l-0.6-6.1l-1.1-2.4l1-3.1l0.8-2.9l1.5-2.6l-0.6-3.4l-0.6-3.6l0.5-1.8   l1.9-2.4l0.2-2.7l-0.8-1.3l0.6-2.6l0.5-3.2l2.7-5.7l2.9-6.8l0.2-2.3l-0.3-1l-0.8,0.5l-4.2,6.3l-2.7,4l-1.9,1.8l-0.8,2.3l-1.5,0.8   l-1.1,1.9l-1.5-0.3l-0.2-1.8l1.3-2.4l2.1-4.7l1.8-1.6l1.1-2.3l-1.6-0.9l-1.4-1.4l-1.6-10.3l-3.7-1.1l-1.4-2.3l-12.6-2.7l-2.5-1.1   l-8.2-2.3l-8.2-1.1l-4.2-5.4l-0.5,1.3l-1.1-0.2l-0.6-1.1l-2.7-0.8l-1.1,0.2l-1.8,1l-1-0.6l0.6-1.9l1.9-3.1l1.1-1.1l-1.9-1.5   l-2.1,0.8l-2.9,1.9l-7.4,3.2l-2.9,0.6l-2.9-0.5l-1-0.9l-2.1,2.8l-0.2,2.7v8.5l-1.1,1.6l-5.3,3.9l-2.3,5.9l0.5,0.2l2.5,2.1l0.7,3.2   l-1.8,3.2v3.9l0.5,6.6l3,3h3.4l1.8,3.2l3.4,0.5l3.9,5.7l7.1,4.1l2.1,2.7l0.9,7.4l0.7,3.3l2.3,1.6l0.2,1.4l-2.1,3.4l0.2,3.2l2.5,3.9   l2.5,1.1l3,0.5l1.3,1.4l9.2,0l26.1-1.5L786.9,297.2z",
                  }),
                }),
                (0, r.jsx)("a", {
                  href: "/medicare/medicare-plans/supplement-plans/missouri/",
                  children: (0, r.jsx)("path", {
                    id: "MO",
                    "data-info":
                      "<div>Missouri Medicare Supplement Plans</div>",
                    fill: "#29b3c9",
                    d: "M729.8,349.5l-2.5-3.1l-1.1-2.3l-7.8,0.7l-9.8,0.5l-25.4,0.9l-13.5,0.2l-7.9,0.1l-2.3,0.1l1.3,2.5   l-0.2,2.3l2.5,3.9l3.1,4.1l3.1,2.7l2.3,0.2l1.4,0.9v3l-1.8,1.6l-0.5,2.3l2.1,3.4l2.5,3l2.5,1.8l1.4,11.7l-0.7,35.3l0.2,4.7l0.5,5.4   l23.4-0.1l23.2-0.7l20.8-0.8l11.7-0.2l2.2,3.4l-0.7,3.3l-3.1,2.4l-0.6,1.8l5.4,0.5l3.9-0.7l1.7-5.5l0.7-5.9l2.3-2l1.7-1.5l2.1-1   l0.1-2.9l0.6-1.7l-1-1.7l-2.7,0.1l-2.2-2.6l-1.4-4.2l0.8-2.5l-1.9-3.4l-1.8-4.6l-4.8-0.8l-7-5.6l-1.7-4.1l0.8-3.2l2.1-6.1l0.5-2.9   l-1.9-1l-6.9-0.8l-1-1.7l-0.1-4.2l-5.5-3.4l-7-7.8l-2.3-7.3l-0.2-4.2L729.8,349.5z",
                  }),
                }),
                (0, r.jsx)("a", {
                  href: "/medicare/medicare-plans/supplement-plans/arkansas/",
                  children: (0, r.jsx)("path", {
                    id: "AR",
                    "data-info":
                      "<div>Arkansas Medicare Supplement Plans</div>",
                    fill: "#29b3c9",
                    d: "M765,445l-3.8,0.9l-6.2-0.5l0.7-3l3.2-2.7l0.5-2.3l-1.8-3l-11,0.5l-20.8,0.9l-23.3,0.7L679,437   l1.6,6.9v8.2l1.4,11l0.2,37.8l2.3,1.9l3-1.4l2.7,1.1l0.4,10.3l22.9-0.1l18.9-0.8l10.1-0.2l1.1-2.1l-0.3-3.5l-1.8-3l1.6-1.5   l-1.6-2.5l0.7-2.5l1.4-5.6l2.5-2.1l-0.7-2.3l3.7-5.4l2.7-1.4l-0.1-1.5l-0.3-1.8l2.9-5.6l2.4-1.3l0.4-3.4l1.8-1.2l0.9-4.2l-1.3-4   l4-2.4l0.6-2l1.2-4.3L765,445z",
                  }),
                }),
                (0, r.jsx)("a", {
                  href: "/medicare/medicare-plans/supplement-plans/oklahoma/",
                  children: (0, r.jsx)("path", {
                    id: "OK",
                    "data-info":
                      "<div>Oklahoma Medicare Supplement Plans</div>",
                    fill: "#29b3c9",
                    d: "M549.3,422.6l-10.7-0.5l-6.4-0.5l0.3,0.2l-0.7,10.4l22,1.4l32.1,1.3l-2.3,24.4l-0.5,17.8l0.2,1.6   l4.3,3.7l2.1,1.1l0.7-0.2l0.7-2.1l1.4,1.8h2.1v-1.4l2.7,1.4l-0.5,3.9l4.1,0.2l2.5,1.1l4.1,0.7l2.5,1.8l2.3-2.1l3.4,0.7l2.5,3.4h0.9   v2.3l2.3,0.7l2.3-2.3l1.8,0.7h2.5l0.9,2.5l4.8,1.8l1.4-0.7l1.8-4.1h1.1l1.1,2.1l4.1,0.7l3.7,1.4l3,0.9l1.8-0.9l0.7-2.5h4.3l2.1,0.9   l2.7-2.1h1.1l0.7,1.6h4.1l1.6-2.1l1.8,0.5l2.1,2.5l3.2,1.8l3.2,0.9l1.9,1.1l-0.4-37.2l-1.4-11l-0.2-8.9l-1.4-6.5l-0.8-7.2l-0.1-3.8   l-12.1,0.3l-46.4-0.5l-45-2.1L549.3,422.6z",
                  }),
                }),
                (0, r.jsx)("a", {
                  href: "/medicare/medicare-plans/supplement-plans/kansas/",
                  children: (0, r.jsx)("path", {
                    id: "KS",
                    "data-info": "<div>Kansas Medicare Supplement Plans</div>",
                    fill: "#29b3c9",
                    d: "M677.4,425.1l-12.6,0.2l-46.1-0.5l-44.6-2.1l-24.6-1.3l4.1-64.7l21.8,0.8l40.5,1.4l44.1,0.5h5.1   l3.2,3.2l2.8,0.2l0.9,1.1v2l-1.8,1.6l-0.5,2.6l2.2,3.6l2.5,3.1l2.5,2l1.1,11.2L677.4,425.1z",
                  }),
                }),
                (0, r.jsx)("a", {
                  href: "/medicare/medicare-plans/supplement-plans/louisiana/",
                  children: (0, r.jsx)("path", {
                    id: "LA",
                    "data-info":
                      "<div>Louisiana Medicare Supplement Plans</div>",
                    fill: "#29b3c9",
                    d: "M776.2,573l-1-2.6l-1.1-3.1l-3.3-3.5l0.9-6.8l-0.1-1.1l-1.3,0.3l-8.2,0.9l-25,0.5l-0.7-2.4l0.9-8.5   l3.3-5.9l5-8.7l-0.6-2.4l1.3-0.7l0.5-2l-2.3-2.1l-0.1-1.9l-1.8-4.3l-0.5-5.9l-9.7,0.1l-19.2,0.9l-22.2,0l0,9.6l0.7,9.4l0.7,3.9   l2.5,4.1l0.9,5l4.3,5.5l0.2,3.2l0.7,0.7l-0.7,8.5l-3,5l1.6,2.1l-0.7,2.5l-0.7,7.3l-1.4,3.2l0.1,3.6l4.7-1.5l8.1-0.3l10.3,3.6   l6.5,1.1l3.7-1.5l3.2,1.1l3.2,1l0.8-2.1l-3.2-1.1l-2.6,0.5l-2.7-1.6c0,0,0.2-1.3,0.8-1.5c0.6-0.2,3.1-1,3.1-1l1.8,1.5l1.8-1   l3.2,0.6l1.5,2.4l0.3,2.3l4.5,0.3l1.8,1.8l-0.8,1.6l-1.3,0.8l1.6,1.6l8.4,3.6l3.6-1.3l1-2.4l2.6-0.6l1.8-1.5l1.3,1l0.8,2.9   l-2.3,0.8l0.6,0.6l3.4-1.3l2.3-3.4l0.8-0.5l-2.1-0.3l0.8-1.6l-0.2-1.5l2.1-0.5l1.1-1.3l0.6,0.8c0,0-0.2,3.1,0.6,3.1   c0.8,0,4.2,0.6,4.2,0.6l4,1.9l1,1.5h2.9l1.1,1l2.3-3.1v-1.5h-1.3l-3.4-2.7l-5.8-0.8l-3.2-2.3l1.1-2.7l2.3,0.3l0.2-0.6l-1.8-1v-0.5   h3.2l1.8-3.1l-1.3-1.9l-0.3-2.7l-1.5,0.2l-1.9,2.1l-0.6,2.6l-3.1-0.6l-1-1.8l1.8-1.9l2-1.8L776.2,573z",
                  }),
                }),
                (0, r.jsx)("a", {
                  href: "/medicare/medicare-plans/supplement-plans/virginia/",
                  children: (0, r.jsx)("path", {
                    id: "VA",
                    "data-info":
                      "<div>Virginia Medicare Supplement Plans</div>",
                    fill: "#29b3c9",
                    d: "M1002.9,369.2l-0.1-1.9l6.5-2.5l-0.8,3.2l-2.9,3.8l-0.4,4.6l0.5,3.4l-1.8,5l-2.2,1.9l-1.5-4.6   l0.4-5.4l1.6-4.2L1002.9,369.2z M1005.2,397.5L947,410.1l-37.4,5.3l-6.7-0.4l-2.6,1.9l-7.3,0.2l-8.4,1l-8.9,1l8.5-4.9l0-2.1   l1.5-2.1l10.6-11.5l3.9,4.5l3.8,1l2.5-1.1l2.2-1.3l2.5,1.3l3.9-1.4l1.9-4.6l2.6,0.5l2.9-2.1l1.8,0.5l2.8-3.7l0.3-2.1l-1-1.3l1-1.9   l5.3-12.3l0.6-5.7l1.2-0.5l2.2,2.4l3.9-0.3l1.9-7.6l2.8-0.6l1-2.7l2.6-2.3l1.3-2.3l1.5-3.4l0.1-5.1l9.8,3.8   c0.7,0.3,0.7-4.8,0.7-4.8l4.1,1.4l-0.5,2.6l8.2,2.9l1.3,1.8l-0.9,3.7l-1.3,1.3l-0.5,1.7l0.5,2.4l2,1.3l3.9,1.4l2.9,1l4.9,0.9   l2.2,2.1l3.2,0.4l0.9,1.2l-0.4,4.7l1.4,1.1l-0.5,1.9l1.2,0.8l-0.2,1.4l-2.7-0.1l0.1,1.6l2.3,1.5l0.1,1.4l1.8,1.8l0.5,2.5l-2.6,1.4   l1.6,1.5l5.8-1.7L1005.2,397.5z",
                  }),
                }),
                (0, r.jsx)("g", {
                  id: "DC",
                  children: (0, r.jsx)("path", {
                    id: "path58",
                    fill: "#29b3c9",
                    d: "M975.8,353.8l-1.1-1.6l-1-0.8l1.1-1.6l2.2,1.5L975.8,353.8z",
                  }),
                }),
              ],
            }),
          }),
        [u.HV.EnrollQuiz]: () => {
          let [e, l] = (0, o.useState)(1),
            [i, n] = (0, o.useState)(""),
            [a, s] = (0, o.useState)(""),
            [t, d] = (0, o.useState)(""),
            [c, u] = (0, o.useState)(""),
            [h, m] = (0, o.useState)(""),
            [v, p] = (0, o.useState)(""),
            [x, f] = (0, o.useState)(""),
            [g, j] = (0, o.useState)(""),
            [b, y] = (0, o.useState)(""),
            [N, w] = (0, o.useState)(""),
            [S, k] = (0, o.useState)(""),
            [M, C] = (0, o.useState)(""),
            [I, P] = (0, o.useState)(""),
            [q, A] = (0, o.useState)(""),
            [D, F] = (0, o.useState)(""),
            [L, T] = (0, o.useState)(""),
            [z, E] = (0, o.useState)(""),
            [O, _] = (0, o.useState)(""),
            [H, Y] = (0, o.useState)(""),
            [R, B] = (0, o.useState)(""),
            [Z, W] = (0, o.useState)(""),
            [V, Q] = (0, o.useState)(""),
            [U, J] = (0, o.useState)(""),
            [G, $] = (0, o.useState)(""),
            [K, X] = (0, o.useState)(""),
            [ee, el] = (0, o.useState)(""),
            [ei, en] = (0, o.useState)(""),
            [ea, es] = (0, o.useState)(""),
            [et, er] = (0, o.useState)(""),
            [eo, ed] = (0, o.useState)(""),
            [ec, eu] = (0, o.useState)(""),
            [eh, em] = (0, o.useState)(null),
            ev = () => {
              if (b && N) {
                let e = new Date(parseInt(b, 10), parseInt(N, 10) - 1, 1),
                  l = new Date(e);
                l.setFullYear(l.getFullYear() + 65, e.getMonth() - 6, 1);
                let i = new Date(e);
                i.setFullYear(i.getFullYear() + 65, e.getMonth() - 3, 1);
                let n = new Date(e);
                n.setFullYear(n.getFullYear() + 65, e.getMonth() + 3, 1);
                let a = new Date(e);
                a.setFullYear(a.getFullYear() + 65, e.getMonth() + 2, 1);
                let s = new Date(e);
                s.setFullYear(s.getFullYear() + 65, e.getMonth() - 4, 1);
                let t = new Date(e);
                t.setFullYear(t.getFullYear() + 65, e.getMonth(), 1);
                let r = new Date(e);
                r.setFullYear(r.getFullYear() + 65, e.getMonth() + 6, 1);
                let o = ""
                    .concat(
                      l.toLocaleDateString("en-US", { month: "long" }),
                      " "
                    )
                    .concat(l.getFullYear()),
                  d = ""
                    .concat(
                      i.toLocaleDateString("en-US", { month: "long" }),
                      " "
                    )
                    .concat(i.getFullYear()),
                  c = ""
                    .concat(
                      t.toLocaleDateString("en-US", { month: "long" }),
                      " "
                    )
                    .concat(t.getFullYear()),
                  u = ""
                    .concat(
                      r.toLocaleDateString("en-US", { month: "long" }),
                      " "
                    )
                    .concat(r.getFullYear()),
                  h = ""
                    .concat(
                      n.toLocaleDateString("en-US", { month: "long" }),
                      " "
                    )
                    .concat(n.getFullYear()),
                  m = ""
                    .concat(
                      a.toLocaleDateString("en-US", { month: "long" }),
                      " "
                    )
                    .concat(a.getFullYear()),
                  v = ""
                    .concat(
                      s.toLocaleDateString("en-US", { month: "long" }),
                      " "
                    )
                    .concat(s.getFullYear());
                E(o), _(d), B(c), W(u), Y(h), Q(m), J(v);
              }
            },
            ep = () => {
              if (t && c) {
                let e = new Date("".concat(c, "-").concat(t, "-11")),
                  l = new Date(e);
                l.setMonth(e.getMonth() - 6);
                let i = new Date(e);
                i.setMonth(e.getMonth() + 6);
                let n = new Date(e);
                n.setMonth(e.getMonth() - 3);
                let a = new Date(e);
                a.setMonth(e.getMonth() + 3);
                let s = ""
                    .concat(
                      l.toLocaleDateString("en-US", { month: "long" }),
                      " "
                    )
                    .concat(l.getFullYear()),
                  r = ""
                    .concat(
                      i.toLocaleDateString("en-US", { month: "long" }),
                      " "
                    )
                    .concat(i.getFullYear()),
                  o = ""
                    .concat(
                      n.toLocaleDateString("en-US", { month: "long" }),
                      " "
                    )
                    .concat(n.getFullYear()),
                  d = ""
                    .concat(
                      a.toLocaleDateString("en-US", { month: "long" }),
                      " "
                    )
                    .concat(a.getFullYear());
                $(s), X(r), el(o), en(d);
              }
            };
          new Date(R).getFullYear();
          let ex = () => {
              if (I && q) {
                let e = new Date("".concat(q, "-").concat(I, "-11")),
                  l = new Date(e);
                l.setMonth(e.getMonth() - 2);
                let i = new Date(e);
                i.setMonth(e.getMonth() + 2),
                  console.log("first selectedDate", e),
                  console.log("first lossMonth", I),
                  console.log("first lossYear", q),
                  console.log("first", l),
                  console.log("first", i);
                let n = new Date(e);
                n.setMonth(e.getMonth() + 8);
                let a = ""
                    .concat(
                      l.toLocaleDateString("en-US", { month: "long" }),
                      " "
                    )
                    .concat(l.getFullYear()),
                  s = ""
                    .concat(
                      i.toLocaleDateString("en-US", { month: "long" }),
                      " "
                    )
                    .concat(i.getFullYear()),
                  t = ""
                    .concat(
                      n.toLocaleDateString("en-US", { month: "long" }),
                      " "
                    )
                    .concat(n.getFullYear());
                ed(
                  ""
                    .concat(
                      e.toLocaleDateString("en-US", { month: "long" }),
                      " "
                    )
                    .concat(e.getFullYear())
                ),
                  es(a),
                  er(s),
                  eu(t);
              }
            },
            ef = () => {
              l(e + 1);
            },
            eg = () => {
              l(e - 1);
            },
            ej = new Date().getFullYear(),
            eb = Array.from({ length: 100 }, (e, l) => ej - l);
          new Date().getFullYear();
          let ey = Array.from({ length: 9 }, (e, l) => 2019 + l),
            eN = [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ],
            ew = Array.from({ length: 31 }, (e, l) => l + 1),
            eS = () => {
              window.location.reload();
            };
          parseInt(b, 10);
          let ek = R.split(" ")[1],
            eM = (parseInt(ek, 10), new Date());
          return (
            eM.getFullYear(),
            parseInt(c, 10),
            parseInt(q, 10),
            (0, r.jsxs)("div", {
              className: "enroll-form",
              children: [
                1 === e &&
                  (0, r.jsx)(() => {
                    let [e, a] = (0, o.useState)(""),
                      s = (e) => {
                        n(e.target.value), a("");
                      };
                    return (0, r.jsx)("div", {
                      className: "",
                      children: (0, r.jsxs)("div", {
                        className: "parent",
                        children: [
                          (0, r.jsx)("h2", {
                            id: "question-heading",
                            children:
                              "Click the option below that applies to you.",
                          }),
                          (0, r.jsxs)("div", {
                            className: "child-1",
                            children: [
                              (0, r.jsxs)("div", {
                                className: "fit-content-container mb-30",
                                children: [
                                  (0, r.jsxs)("label", {
                                    className: "radio-button-label-enroll-quiz",
                                    children: [
                                      (0, r.jsx)("input", {
                                        type: "radio",
                                        value: "I'm eligible for Medicare",
                                        checked:
                                          "I'm eligible for Medicare" === i,
                                        onChange: s,
                                      }),
                                      (0, r.jsx)("span", {
                                        className: "radio-button-enroll-quiz",
                                        children:
                                          "I'm newly eligible for Medicare",
                                      }),
                                    ],
                                  }),
                                  (0, r.jsxs)("label", {
                                    className: "radio-button-label-enroll-quiz",
                                    children: [
                                      (0, r.jsx)("input", {
                                        type: "radio",
                                        value:
                                          "I already have Medicare Parts A and B, but no additional coverage",
                                        checked:
                                          "I already have Medicare Parts A and B, but no additional coverage" ===
                                          i,
                                        onChange: s,
                                      }),
                                      (0, r.jsx)("span", {
                                        className: "radio-button-enroll-quiz",
                                        children:
                                          "I already have Medicare Parts A and B, but no additional coverage",
                                      }),
                                    ],
                                  }),
                                  (0, r.jsxs)("label", {
                                    children: [
                                      (0, r.jsx)("input", {
                                        type: "radio",
                                        value: "I'm losing employer coverage",
                                        checked:
                                          "I'm losing employer coverage" === i,
                                        onChange: s,
                                      }),
                                      (0, r.jsx)("span", {
                                        className: "radio-button-enroll-quiz",
                                        children:
                                          "I'm losing employer coverage",
                                      }),
                                    ],
                                  }),
                                  e &&
                                    (0, r.jsx)("p", {
                                      className: "error-message",
                                      children: e,
                                    }),
                                ],
                              }),
                              (0, r.jsx)("button", {
                                onClick: () => {
                                  i
                                    ? "I already have Medicare Parts A and B, but no additional coverage" ===
                                      i
                                      ? l(9)
                                      : "I'm losing employer coverage" === i
                                      ? l(10)
                                      : ef()
                                    : a("This field cannot be blank");
                                },
                                className: "next-click-button next-alone",
                                children: "Next",
                              }),
                            ],
                          }),
                        ],
                      }),
                    });
                  }, {}),
                2 === e &&
                  (0, r.jsx)(() => {
                    let [e, n] = (0, o.useState)(""),
                      t = (e) => {
                        s(e.target.value), n("");
                      };
                    return (0, r.jsxs)("div", {
                      className: "parent",
                      children: [
                        (0, r.jsx)("h2", {
                          id: "question-heading",
                          children:
                            "Which of the following statements applies to you?",
                        }),
                        (0, r.jsxs)("div", {
                          className: "child-1",
                          children: [
                            (0, r.jsxs)("div", {
                              className: "fit-content-container mb-30",
                              children: [
                                (0, r.jsxs)("label", {
                                  className: "radio-button-label-enroll-quiz",
                                  children: [
                                    (0, r.jsx)("input", {
                                      type: "radio",
                                      value:
                                        "I'm turning 65 or recently turned 65",
                                      checked:
                                        "I'm turning 65 or recently turned 65" ===
                                        a,
                                      onChange: t,
                                    }),
                                    (0, r.jsx)("span", {
                                      className: "radio-button-enroll-quiz",
                                      children:
                                        "I'm turning 65 or recently turned 65",
                                    }),
                                  ],
                                }),
                                (0, r.jsxs)("label", {
                                  className: "radio-button-label-enroll-quiz",
                                  children: [
                                    (0, r.jsx)("input", {
                                      type: "radio",
                                      value: "I've been on disability 2+ years",
                                      checked:
                                        "I've been on disability 2+ years" ===
                                        a,
                                      onChange: t,
                                    }),
                                    (0, r.jsx)("span", {
                                      className: "radio-button-enroll-quiz",
                                      children:
                                        "I've been on disability 2+ years",
                                    }),
                                  ],
                                }),
                                (0, r.jsxs)("label", {
                                  children: [
                                    (0, r.jsx)("input", {
                                      type: "radio",
                                      value: "I'm losing employer coverage",
                                      checked:
                                        "I'm losing employer coverage" === a,
                                      onChange: t,
                                    }),
                                    (0, r.jsx)("span", {
                                      className: "radio-button-enroll-quiz",
                                      children: "I'm losing employer coverage",
                                    }),
                                  ],
                                }),
                                e &&
                                  (0, r.jsx)("p", {
                                    className: "error-message",
                                    children: e,
                                  }),
                              ],
                            }),
                            (0, r.jsxs)("div", {
                              className: "prev-next-button-container",
                              children: [
                                (0, r.jsx)("button", {
                                  onClick: eg,
                                  className: "previous-button",
                                  children: "Previous",
                                }),
                                (0, r.jsx)("button", {
                                  onClick: () => {
                                    a
                                      ? "I've been on disability 2+ years" === a
                                        ? l(3)
                                        : "I'm turning 65 or recently turned 65" ===
                                          a
                                        ? l(4)
                                        : "I'm eligible for Medicare" === i &&
                                          "I'm losing employer coverage" ===
                                            a &&
                                          l(10)
                                      : n("This field cannot be blank");
                                  },
                                  className: "next-click-button next-not-alone",
                                  children: "Next",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    });
                  }, {}),
                3 === e &&
                  (0, r.jsx)(() => {
                    let [e, i] = (0, o.useState)(""),
                      [n, a] = (0, o.useState)("");
                    return (0, r.jsxs)("div", {
                      children: [
                        (0, r.jsx)("h2", {
                          id: "question-heading",
                          children: "When do you become eligible for Medicare?",
                        }),
                        (0, r.jsxs)("div", {
                          className: "select-parent-width-50 mb-30",
                          children: [
                            (0, r.jsxs)("div", {
                              className: "mb-mobile-36",
                              children: [
                                (0, r.jsxs)("select", {
                                  onChange: (e) => d(e.target.value),
                                  value: t,
                                  children: [
                                    (0, r.jsx)("option", { value: "" }),
                                    eN.map((e, l) =>
                                      (0, r.jsx)(
                                        "option",
                                        {
                                          value: String(l + 1).padStart(2, "0"),
                                          children: e,
                                        },
                                        l + 1
                                      )
                                    ),
                                  ],
                                }),
                                e &&
                                  (0, r.jsx)("p", {
                                    className: "error-message",
                                    children: e,
                                  }),
                              ],
                            }),
                            (0, r.jsxs)("div", {
                              children: [
                                (0, r.jsxs)("select", {
                                  onChange: (e) => u(e.target.value),
                                  value: c,
                                  children: [
                                    (0, r.jsx)("option", { value: "" }),
                                    ey.map((e) =>
                                      (0, r.jsx)(
                                        "option",
                                        { value: e, children: e },
                                        e
                                      )
                                    ),
                                  ],
                                }),
                                n &&
                                  (0, r.jsx)("p", {
                                    className: "error-message",
                                    children: n,
                                  }),
                              ],
                            }),
                          ],
                        }),
                        (0, r.jsxs)("div", {
                          className: "birthday-buttons-container",
                          children: [
                            (0, r.jsx)("button", {
                              onClick: eg,
                              className: "previous-button",
                              children: "Previous",
                            }),
                            (0, r.jsx)("button", {
                              onClick: () => {
                                t || c
                                  ? t
                                    ? c
                                      ? l(7)
                                      : a("This field cannot be blank")
                                    : i("This field cannot be blank")
                                  : (i("This field cannot be blank"),
                                    a("This field cannot be blank")),
                                  ep();
                              },
                              className: "next-click-button next-not-alone",
                              children: "Next",
                            }),
                          ],
                        }),
                      ],
                    });
                  }, {}),
                4 === e &&
                  (0, r.jsx)(() => {
                    let [e, i] = (0, o.useState)(""),
                      n = (e) => {
                        p(e.target.value), i("");
                      };
                    return (0, r.jsxs)("div", {
                      className: "parent",
                      children: [
                        (0, r.jsx)("h2", {
                          id: "question-heading",
                          children:
                            "Have you already enrolled in Parts A and B?",
                        }),
                        (0, r.jsxs)("div", {
                          className: "child-1",
                          children: [
                            (0, r.jsxs)("div", {
                              className: "fit-content-container mb-30",
                              children: [
                                (0, r.jsxs)("label", {
                                  className: "radio-button-label-enroll-quiz",
                                  children: [
                                    (0, r.jsx)("input", {
                                      type: "radio",
                                      value: "Yes",
                                      checked: "Yes" === v,
                                      onChange: n,
                                    }),
                                    (0, r.jsx)("span", {
                                      className:
                                        "radio-button-enroll-quiz-yes-no",
                                      children: "Yes",
                                    }),
                                  ],
                                }),
                                (0, r.jsxs)("label", {
                                  children: [
                                    (0, r.jsx)("input", {
                                      type: "radio",
                                      value: "No",
                                      checked: "No" === v,
                                      onChange: n,
                                    }),
                                    (0, r.jsx)("span", {
                                      className:
                                        "radio-button-enroll-quiz-yes-no",
                                      children: "No",
                                    }),
                                  ],
                                }),
                                e &&
                                  (0, r.jsx)("p", {
                                    className: "error-message",
                                    children: e,
                                  }),
                              ],
                            }),
                            (0, r.jsxs)("div", {
                              className: "prev-next-button-container",
                              children: [
                                (0, r.jsx)("button", {
                                  onClick: () => {
                                    "I'm turning 65 or recently turned 65" ===
                                      a && l(2);
                                  },
                                  className: "previous-button",
                                  children: "Previous",
                                }),
                                (0, r.jsx)("button", {
                                  onClick: () => {
                                    v
                                      ? "No" === v
                                        ? l(6)
                                        : ef()
                                      : i("This field cannot be blank");
                                  },
                                  className: "next-click-button next-not-alone",
                                  children: "Next",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    });
                  }, {}),
                5 === e &&
                  (0, r.jsx)(() => {
                    let [e, n] = (0, o.useState)(""),
                      s = (e) => {
                        f(e.target.value), n("");
                      };
                    return (0, r.jsxs)("div", {
                      className: "parent",
                      children: [
                        (0, r.jsx)("h2", {
                          id: "question-heading",
                          children:
                            "Which type of plan would you like to enroll in?",
                        }),
                        (0, r.jsxs)("div", {
                          className: "child-1",
                          children: [
                            (0, r.jsxs)("div", {
                              className: "fit-content-container mb-30",
                              children: [
                                (0, r.jsxs)("label", {
                                  className: "radio-button-label-enroll-quiz",
                                  children: [
                                    (0, r.jsx)("input", {
                                      type: "radio",
                                      value: "Medicare Supplement",
                                      checked: "Medicare Supplement" === x,
                                      onChange: s,
                                    }),
                                    (0, r.jsx)("span", {
                                      className: "radio-button-enroll-quiz",
                                      children: "Medicare Supplement",
                                    }),
                                  ],
                                }),
                                (0, r.jsxs)("label", {
                                  className: "radio-button-label-enroll-quiz",
                                  children: [
                                    (0, r.jsx)("input", {
                                      type: "radio",
                                      value: "Medicare Advantage",
                                      checked: "Medicare Advantage" === x,
                                      onChange: s,
                                    }),
                                    (0, r.jsx)("span", {
                                      className: "radio-button-enroll-quiz",
                                      children: "Medicare Advantage",
                                    }),
                                  ],
                                }),
                                (0, r.jsxs)("label", {
                                  children: [
                                    (0, r.jsx)("input", {
                                      type: "radio",
                                      value: "I'm not sure",
                                      checked: "I'm not sure" === x,
                                      onChange: s,
                                    }),
                                    (0, r.jsx)("span", {
                                      className: "radio-button-enroll-quiz",
                                      children: "I'm not sure",
                                    }),
                                  ],
                                }),
                                e &&
                                  (0, r.jsx)("p", {
                                    className: "error-message",
                                    children: e,
                                  }),
                              ],
                            }),
                            (0, r.jsxs)("div", {
                              className: "prev-next-button-container",
                              children: [
                                (0, r.jsx)("button", {
                                  onClick: eg,
                                  className: "previous-button",
                                  children: "Previous",
                                }),
                                (0, r.jsx)("button", {
                                  onClick: () => {
                                    x
                                      ? "I'm eligible for Medicare" === i &&
                                        "I'm turning 65 or recently turned 65" ===
                                          a &&
                                        "Yes" === v &&
                                        "I'm not sure" === x
                                        ? l(23)
                                        : ef()
                                      : n("This field cannot be blank");
                                  },
                                  className: "next-click-button next-not-alone",
                                  children: "Next",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    });
                  }, {}),
                6 === e &&
                  (0, r.jsx)(() => {
                    let [e, n] = (0, o.useState)(""),
                      [s, t] = (0, o.useState)(""),
                      [d, c] = (0, o.useState)(""),
                      [u, h] = (0, o.useState)("");
                    return (0, r.jsxs)("div", {
                      children: [
                        (0, r.jsx)("h2", {
                          id: "question-heading",
                          children: "When is your birthday?",
                        }),
                        (0, r.jsxs)("div", {
                          className: "select-parent mb-30",
                          children: [
                            (0, r.jsxs)("div", {
                              className: "mb-mobile-36",
                              children: [
                                (0, r.jsxs)("select", {
                                  onChange: (e) => y(e.target.value),
                                  value: b,
                                  children: [
                                    (0, r.jsx)("option", { value: "" }),
                                    eb.map((e) =>
                                      (0, r.jsx)(
                                        "option",
                                        { value: e, children: e },
                                        e
                                      )
                                    ),
                                  ],
                                }),
                                s &&
                                  (0, r.jsx)("p", {
                                    className: "error-message",
                                    children: s,
                                  }),
                              ],
                            }),
                            (0, r.jsxs)("div", {
                              className: "mb-mobile-36",
                              children: [
                                (0, r.jsxs)("select", {
                                  onChange: (e) => w(e.target.value),
                                  value: N,
                                  children: [
                                    (0, r.jsx)("option", { value: "" }),
                                    eN.map((e, l) =>
                                      (0, r.jsx)(
                                        "option",
                                        { value: l + 1, children: e },
                                        l + 1
                                      )
                                    ),
                                  ],
                                }),
                                d &&
                                  (0, r.jsx)("p", {
                                    className: "error-message",
                                    children: d,
                                  }),
                              ],
                            }),
                            (0, r.jsxs)("div", {
                              children: [
                                (0, r.jsxs)("select", {
                                  onChange: (e) => k(e.target.value),
                                  value: S,
                                  children: [
                                    (0, r.jsx)("option", { value: "" }),
                                    ew.map((e) =>
                                      (0, r.jsx)(
                                        "option",
                                        { value: e, children: e },
                                        e
                                      )
                                    ),
                                  ],
                                }),
                                u &&
                                  (0, r.jsx)("p", {
                                    className: "error-message",
                                    children: u,
                                  }),
                              ],
                            }),
                          ],
                        }),
                        (0, r.jsxs)("div", {
                          className: "birthday-buttons-container",
                          children: [
                            (0, r.jsx)("button", {
                              onClick: () => {
                                "I'm eligible for Medicare" === i &&
                                "I'm turning 65 or recently turned 65" === a &&
                                "Yes" === v &&
                                "Medicare Supplement" === x
                                  ? l(5)
                                  : "I'm eligible for Medicare" === i &&
                                    "I'm turning 65 or recently turned 65" ===
                                      a &&
                                    "No" === v
                                  ? l(4)
                                  : "I'm eligible for Medicare" === i &&
                                    "I'm turning 65 or recently turned 65" ===
                                      a &&
                                    "Yes" === v &&
                                    "Medicare Advantage" === x &&
                                    l(5);
                              },
                              className: "previous-button",
                              children: "Previous",
                            }),
                            (0, r.jsx)("button", {
                              onClick: () => {
                                b || N || S
                                  ? S || N
                                    ? S || b
                                      ? N || b
                                        ? b
                                          ? N
                                            ? S
                                              ? "I'm eligible for Medicare" ===
                                                  i &&
                                                "I'm turning 65 or recently turned 65" ===
                                                  a &&
                                                "Yes" === v &&
                                                "Medicare Supplement" === x
                                                ? l(11)
                                                : "I'm eligible for Medicare" ===
                                                    i &&
                                                  "I'm turning 65 or recently turned 65" ===
                                                    a &&
                                                  "No" === v
                                                ? l(12)
                                                : "I'm eligible for Medicare" ===
                                                    i &&
                                                  "I'm turning 65 or recently turned 65" ===
                                                    a &&
                                                  "Yes" === v &&
                                                  "Medicare Advantage" === x &&
                                                  l(22)
                                              : h("This field cannot be blank")
                                            : c("This field cannot be blank")
                                          : t("This field cannot be blank")
                                        : (c("This field cannot be blank"),
                                          t("This field cannot be blank"))
                                      : (h("This field cannot be blank"),
                                        t("This field cannot be blank"))
                                    : (h("This field cannot be blank"),
                                      c("This field cannot be blank"))
                                  : (t("This field cannot be blank"),
                                    c("This field cannot be blank"),
                                    h("This field cannot be blank")),
                                  ev();
                              },
                              className: "next-click-button next-not-alone",
                              children: "Next",
                            }),
                          ],
                        }),
                      ],
                    });
                  }, {}),
                7 === e &&
                  (0, r.jsx)(() => {
                    let [e, n] = (0, o.useState)(""),
                      s = (e) => {
                        C(e.target.value), n("");
                      };
                    return (0, r.jsxs)("div", {
                      className: "parent",
                      children: [
                        (0, r.jsx)("h2", {
                          id: "question-heading",
                          children:
                            "You'll automatically be enrolled in Medicare Parts A and B once you reach your eligibility date.",
                        }),
                        (0, r.jsxs)("div", {
                          className: "child-1",
                          children: [
                            (0, r.jsxs)("div", {
                              className: "fit-content-container mb-30",
                              children: [
                                (0, r.jsxs)("label", {
                                  className: "radio-button-label-enroll-quiz",
                                  children: [
                                    (0, r.jsx)("input", {
                                      type: "radio",
                                      value: "Medicare Supplement",
                                      checked: "Medicare Supplement" === M,
                                      onChange: s,
                                    }),
                                    (0, r.jsx)("span", {
                                      className: "radio-button-enroll-quiz",
                                      children: "Medicare Supplement",
                                    }),
                                  ],
                                }),
                                (0, r.jsxs)("label", {
                                  className: "radio-button-label-enroll-quiz",
                                  children: [
                                    (0, r.jsx)("input", {
                                      type: "radio",
                                      value: "Medicare Advantage",
                                      checked: "Medicare Advantage" === M,
                                      onChange: s,
                                    }),
                                    (0, r.jsx)("span", {
                                      className: "radio-button-enroll-quiz",
                                      children: "Medicare Advantage",
                                    }),
                                  ],
                                }),
                                (0, r.jsxs)("label", {
                                  children: [
                                    (0, r.jsx)("input", {
                                      type: "radio",
                                      value: "I'm not sure",
                                      checked: "I'm not sure" === M,
                                      onChange: s,
                                    }),
                                    (0, r.jsx)("span", {
                                      className: "radio-button-enroll-quiz",
                                      children: "I'm not sure",
                                    }),
                                  ],
                                }),
                                e &&
                                  (0, r.jsx)("p", {
                                    className: "error-message",
                                    children: e,
                                  }),
                              ],
                            }),
                            (0, r.jsxs)("div", {
                              className: "prev-next-button-container",
                              children: [
                                (0, r.jsx)("button", {
                                  onClick: () => {
                                    "I'm eligible for Medicare" === i &&
                                      "I've been on disability 2+ years" ===
                                        a &&
                                      l(3);
                                  },
                                  className: "previous-button",
                                  children: "Previous",
                                }),
                                (0, r.jsx)("button", {
                                  onClick: () => {
                                    M
                                      ? "I'm eligible for Medicare" === i &&
                                        "I've been on disability 2+ years" ===
                                          a &&
                                        "Medicare Supplement" === M
                                        ? l(13)
                                        : "I'm eligible for Medicare" === i &&
                                          "I've been on disability 2+ years" ===
                                            a &&
                                          "Medicare Advantage" === M
                                        ? l(14)
                                        : "I'm eligible for Medicare" === i &&
                                          "I've been on disability 2+ years" ===
                                            a &&
                                          "I'm not sure" === M &&
                                          l(15)
                                      : n("This field cannot be blank");
                                  },
                                  className: "next-click-button next-not-alone",
                                  children: "Next",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    });
                  }, {}),
                8 === e &&
                  (0, r.jsx)(() => {
                    let [e, n] = (0, o.useState)(""),
                      [s, t] = (0, o.useState)(""),
                      [d, c] = (0, o.useState)("");
                    return (0, r.jsxs)("div", {
                      className: "parent",
                      children: [
                        (0, r.jsx)("h2", {
                          id: "question-heading",
                          children: "When did or will you lose coverage?",
                        }),
                        (0, r.jsxs)("div", {
                          className: "select-parent mb-30",
                          children: [
                            (0, r.jsxs)("div", {
                              className: "mb-mobile-36",
                              children: [
                                (0, r.jsxs)("select", {
                                  onChange: (e) => {
                                    P(e.target.value), t(""), c(""), n("");
                                  },
                                  value: I,
                                  children: [
                                    (0, r.jsx)("option", { value: "" }),
                                    eN.map((e, l) =>
                                      (0, r.jsx)(
                                        "option",
                                        {
                                          value: String(l + 1).padStart(2, "0"),
                                          children: e,
                                        },
                                        l + 1
                                      )
                                    ),
                                  ],
                                }),
                                s &&
                                  (0, r.jsx)("p", {
                                    className: "error-message",
                                    children: s,
                                  }),
                              ],
                            }),
                            (0, r.jsxs)("div", {
                              children: [
                                (0, r.jsxs)("select", {
                                  onChange: (e) => {
                                    A(e.target.value), t(""), c(""), n("");
                                  },
                                  value: q,
                                  children: [
                                    (0, r.jsx)("option", { value: "" }),
                                    ey.map((e) =>
                                      (0, r.jsx)(
                                        "option",
                                        { value: e, children: e },
                                        e
                                      )
                                    ),
                                  ],
                                }),
                                d &&
                                  (0, r.jsx)("p", {
                                    className: "error-message",
                                    children: d,
                                  }),
                              ],
                            }),
                          ],
                        }),
                        e &&
                          (0, r.jsx)("p", {
                            className: "error-message",
                            children: e,
                          }),
                        (0, r.jsxs)("div", {
                          className: "birthday-buttons-container",
                          children: [
                            (0, r.jsx)("button", {
                              onClick: () => {
                                "I'm eligible for Medicare" === i &&
                                "I'm losing employer coverage" === a
                                  ? l(10)
                                  : "I'm losing employer coverage" === i &&
                                    "Yes" === L
                                  ? l(10)
                                  : "I'm losing employer coverage" === i &&
                                    "No" === L &&
                                    l(10);
                              },
                              className: "previous-button",
                              children: "Previous",
                            }),
                            (0, r.jsx)("button", {
                              onClick: () => {
                                I || q
                                  ? I
                                    ? q
                                      ? "I'm eligible for Medicare" === i &&
                                        "I'm losing employer coverage" === a &&
                                        "Yes" === L
                                        ? l(16)
                                        : "I'm eligible for Medicare" === i &&
                                          "I'm losing employer coverage" ===
                                            a &&
                                          "No" === L
                                        ? l(17)
                                        : "I'm losing employer coverage" ===
                                            i && "Yes" === L
                                        ? l(20)
                                        : "I'm losing employer coverage" ===
                                            i &&
                                          "No" === L &&
                                          l(21)
                                      : c("This field cannot be blank")
                                    : t("This field cannot be blank")
                                  : (t("This field cannot be blank"),
                                    c("This field cannot be blank")),
                                  ex();
                              },
                              className: "next-click-button next-not-alone",
                              children: "Next",
                            }),
                          ],
                        }),
                      ],
                    });
                  }, {}),
                9 === e &&
                  (0, r.jsx)(() => {
                    let [e, n] = (0, o.useState)(""),
                      a = (e) => {
                        F(e.target.value), n("");
                      };
                    return (0, r.jsxs)("div", {
                      className: "parent",
                      children: [
                        (0, r.jsx)("h2", {
                          id: "question-heading",
                          children: "Which type of plan are you interested in?",
                        }),
                        (0, r.jsxs)("div", {
                          className: "child-1",
                          children: [
                            (0, r.jsxs)("div", {
                              className: "fit-content-container mb-30",
                              children: [
                                (0, r.jsxs)("label", {
                                  className: "radio-button-label-enroll-quiz",
                                  children: [
                                    (0, r.jsx)("input", {
                                      type: "radio",
                                      value: "Medicare Supplement",
                                      checked: "Medicare Supplement" === D,
                                      onChange: a,
                                    }),
                                    (0, r.jsx)("span", {
                                      className: "radio-button-enroll-quiz",
                                      children: "Medicare Supplement",
                                    }),
                                  ],
                                }),
                                (0, r.jsxs)("label", {
                                  children: [
                                    (0, r.jsx)("input", {
                                      type: "radio",
                                      value: "Medicare Advantage",
                                      checked: "Medicare Advantage" === D,
                                      onChange: a,
                                    }),
                                    (0, r.jsx)("span", {
                                      className: "radio-button-enroll-quiz",
                                      children: "Medicare Advantage",
                                    }),
                                  ],
                                }),
                                e &&
                                  (0, r.jsx)("p", {
                                    className: "error-message",
                                    children: e,
                                  }),
                              ],
                            }),
                            (0, r.jsxs)("div", {
                              className: "prev-next-button-container",
                              children: [
                                (0, r.jsx)("button", {
                                  onClick: () => {
                                    "I already have Medicare Parts A and B, but no additional coverage" ===
                                      i && l(1);
                                  },
                                  className: "previous-button",
                                  children: "Previous",
                                }),
                                (0, r.jsx)("button", {
                                  onClick: () => {
                                    D
                                      ? "I already have Medicare Parts A and B, but no additional coverage" ===
                                          i && "Medicare Supplement" === D
                                        ? l(18)
                                        : "I already have Medicare Parts A and B, but no additional coverage" ===
                                            i &&
                                          "Medicare Advantage" === D &&
                                          l(19)
                                      : n("This field cannot be blank");
                                  },
                                  className: "next-click-button next-not-alone",
                                  children: "Next",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    });
                  }, {}),
                10 === e &&
                  (0, r.jsx)(() => {
                    let [e, n] = (0, o.useState)(""),
                      s = (e) => {
                        T(e.target.value), n("");
                      };
                    return (0, r.jsxs)("div", {
                      className: "parent",
                      children: [
                        (0, r.jsx)("h2", {
                          id: "question-heading",
                          children:
                            "Do you already have Medicare Parts A and B?",
                        }),
                        (0, r.jsxs)("div", {
                          className: "child-1",
                          children: [
                            (0, r.jsxs)("div", {
                              className: "fit-content-container mb-30",
                              children: [
                                (0, r.jsxs)("label", {
                                  className: "radio-button-label-enroll-quiz",
                                  children: [
                                    (0, r.jsx)("input", {
                                      type: "radio",
                                      value: "Yes",
                                      checked: "Yes" === L,
                                      onChange: s,
                                    }),
                                    (0, r.jsx)("span", {
                                      className:
                                        "radio-button-enroll-quiz-yes-no",
                                      children: "Yes",
                                    }),
                                  ],
                                }),
                                (0, r.jsxs)("label", {
                                  children: [
                                    (0, r.jsx)("input", {
                                      type: "radio",
                                      value: "No",
                                      checked: "No" === L,
                                      onChange: s,
                                    }),
                                    (0, r.jsx)("span", {
                                      className:
                                        "radio-button-enroll-quiz-yes-no",
                                      children: "No",
                                    }),
                                  ],
                                }),
                                e &&
                                  (0, r.jsx)("p", {
                                    className: "error-message",
                                    children: e,
                                  }),
                              ],
                            }),
                            (0, r.jsxs)("div", {
                              className: "prev-next-button-container",
                              children: [
                                (0, r.jsx)("button", {
                                  onClick: () => {
                                    "I'm eligible for Medicare" === i &&
                                    "I'm losing employer coverage" === a
                                      ? l(2)
                                      : "I'm losing employer coverage" === i &&
                                        l(1);
                                  },
                                  className: "previous-button",
                                  children: "Previous",
                                }),
                                (0, r.jsx)("button", {
                                  onClick: () => {
                                    L
                                      ? "I'm eligible for Medicare" === i &&
                                        "I'm losing employer coverage" === a &&
                                        "Yes" === L
                                        ? l(8)
                                        : "I'm eligible for Medicare" === i &&
                                          "I'm losing employer coverage" ===
                                            a &&
                                          "No" === L
                                        ? l(8)
                                        : "I'm losing employer coverage" ===
                                            i && "Yes" === L
                                        ? l(8)
                                        : "I'm losing employer coverage" ===
                                            i &&
                                          "No" === L &&
                                          l(8)
                                      : n("This field cannot be blank");
                                  },
                                  className: "next-click-button next-not-alone",
                                  children: "Next",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    });
                  }, {}),
                11 === e &&
                  (0, r.jsx)(
                    () =>
                      (0, r.jsx)("div", {
                        className: "parent mtb-110-mobile",
                        children: (0, r.jsxs)("div", {
                          children: [
                            (0, r.jsx)("div", {
                              children: (0, r.jsx)("p", {
                                className:
                                  "text-center default-paragraph mb-36",
                                children:
                                  "Based on your answers, we recommend enrolling between",
                              }),
                            }),
                            (0, r.jsxs)("p", {
                              className: "text-center date mb-20",
                              children: [
                                z && (0, r.jsx)("span", { children: z }),
                                " - ",
                                Z && (0, r.jsx)("span", { children: Z }),
                              ],
                            }),
                            (0, r.jsxs)("p", {
                              className: "default-paragraph mb-16",
                              children: [
                                "You can enroll in a ",
                                (0, r.jsx)("a", {
                                  href: "/medicare/medicare-plans/supplement-plans",
                                  children: "Medicare Supplement plan",
                                }),
                                " from 6 months ahead of your birth month to 6 months later with most carriers.* Coverage cannot start prior to the beginning of your coverage under Medicare ",
                                (0, r.jsx)("a", {
                                  href: "/medicare/medicare-parts/part-a",
                                  children: "Parts A",
                                }),
                                " and",
                                (0, r.jsx)("a", {
                                  href: "/medicare/medicare-parts/part-b",
                                  children: " B",
                                }),
                                ".",
                              ],
                            }),
                            (0, r.jsx)("p", {
                              className: "default-paragraph mb-16",
                              children: (0, r.jsx)("a", {
                                href: "/medicare/medicare-enrollment-periods",
                                children:
                                  "Learn about the various enrollment periods to get a better idea about when you can review and change your current coverage.",
                              }),
                            }),
                            (0, r.jsx)("p", {
                              className: "default-paragraph",
                              children: "*Dependent on state availability",
                            }),
                            (0, r.jsx)("div", {
                              className: "button-parent",
                              children: (0, r.jsx)("button", {
                                className:
                                  "next-click-button text-center m-auto-center",
                                children: (0, r.jsx)("a", {
                                  href: "https://medicare.selectquote.com/quote-form/",
                                  children: "Get Free Quotes",
                                }),
                              }),
                            }),
                            (0, r.jsx)("p", {
                              className: "text-center default-paragraph",
                              children: "No obligation to enroll.",
                            }),
                            (0, r.jsx)("p", {
                              className: "text-center default-paragraph",
                              children: "or",
                            }),
                            (0, r.jsxs)("p", {
                              className:
                                "text-center default-paragraph start-over",
                              onClick: eS,
                              children: [
                                "Start Over ",
                                (0, r.jsx)("span", {
                                  className: "refresh-icon",
                                  children: "",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    {}
                  ),
                12 === e &&
                  (0, r.jsx)(
                    () =>
                      (0, r.jsx)("div", {
                        className: "parent mtb-110-mobile",
                        children: (0, r.jsxs)("div", {
                          children: [
                            (0, r.jsx)("div", {
                              children: (0, r.jsx)("p", {
                                className:
                                  "text-center default-paragraph mb-36",
                                children:
                                  "Based on your answers, we recommend enrolling between",
                              }),
                            }),
                            (0, r.jsxs)("p", {
                              className: "text-center date mb-20",
                              children: [
                                O && (0, r.jsx)("span", { children: O }),
                                " - ",
                                R && (0, r.jsx)("span", { children: R }),
                              ],
                            }),
                            (0, r.jsxs)("p", {
                              className: "default-paragraph mb-16",
                              children: [
                                (0, r.jsx)("span", {
                                  className: "f-w-700",
                                  children: "Medicare Parts A and B:",
                                }),
                                " You can enroll in Medicare ",
                                (0, r.jsx)("a", {
                                  href: "/medicare/medicare-parts/part-a",
                                  children: "Parts A",
                                }),
                                " and/or ",
                                (0, r.jsx)("a", {
                                  href: "/medicare/medicare-parts/part-b",
                                  children: "B",
                                }),
                                " up to 3 months before your birth month. Enroll by contacting Social Security.",
                              ],
                            }),
                            (0, r.jsxs)("p", {
                              className: "default-paragraph mb-16",
                              children: [
                                (0, r.jsx)("span", {
                                  className: "f-w-700",
                                  children: "Medicare Advantage:",
                                }),
                                " You can enroll in a ",
                                (0, r.jsx)("a", {
                                  href: "/medicare/medicare-plans/advantage-plans",
                                  children: "Medicare Advantage plan ",
                                }),
                                "usually 3 months before the month of your Part B effective date and 2 months after.",
                              ],
                            }),
                            (0, r.jsxs)("p", {
                              className: "default-paragraph mb-16",
                              children: [
                                (0, r.jsx)("span", {
                                  className: "f-w-700",
                                  children: "Medicare Supplement:",
                                }),
                                " You can enroll in a ",
                                (0, r.jsx)("a", {
                                  href: "/medicare/medicare-plans/supplement-plans",
                                  children: "Medicare Supplement plan",
                                }),
                                " beginning the same month as your Part B effective date through the following 5 months. Coverage cannot start prior to the beginning of your coverage under Medicare Parts A and B.",
                              ],
                            }),
                            (0, r.jsx)("p", {
                              className: "default-paragraph mb-16",
                              children: (0, r.jsx)("a", {
                                href: "/medicare/medicare-enrollment-periods",
                                children:
                                  "Learn about the various enrollment periods to get a better idea about when you can review and change your current coverage.",
                              }),
                            }),
                            (0, r.jsx)("div", {
                              className: "button-parent",
                              children: (0, r.jsx)("button", {
                                className:
                                  "next-click-button text-center m-auto-center",
                                children: (0, r.jsx)("a", {
                                  href: "https://medicare.selectquote.com/quote-form/",
                                  children: "Get Free Quotes",
                                }),
                              }),
                            }),
                            (0, r.jsx)("p", {
                              className: "text-center default-paragraph",
                              children: "No obligation to enroll.",
                            }),
                            (0, r.jsx)("p", {
                              className: "text-center default-paragraph",
                              children: "or",
                            }),
                            (0, r.jsxs)("p", {
                              className:
                                "text-center default-paragraph start-over",
                              onClick: eS,
                              children: [
                                "Start Over ",
                                (0, r.jsx)("span", {
                                  className: "refresh-icon",
                                  children: "",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    {}
                  ),
                13 === e &&
                  (0, r.jsx)(
                    () =>
                      (0, r.jsx)("div", {
                        className: "parent mtb-110-mobile",
                        children: (0, r.jsxs)("div", {
                          children: [
                            (0, r.jsx)("div", {
                              children: (0, r.jsx)("p", {
                                className:
                                  "text-center default-paragraph mb-36",
                                children:
                                  "Based on your answers, we recommend enrolling between",
                              }),
                            }),
                            (0, r.jsxs)("p", {
                              className: "text-center date mb-20",
                              children: [
                                G && (0, r.jsx)("span", { children: G }),
                                " - ",
                                K && (0, r.jsx)("span", { children: K }),
                              ],
                            }),
                            (0, r.jsxs)("p", {
                              className: "default-paragraph mb-16",
                              children: [
                                "You can enroll in a ",
                                (0, r.jsx)("a", {
                                  href: "/medicare/medicare-plans/supplement-plans",
                                  children: "Medicare Supplement plan",
                                }),
                                " from 6 months ahead of your Medicare Eligibility date due to disability to 6 months later with most carriers.* Coverage cannot start prior to the beginning of your coverage under Medicare ",
                                (0, r.jsx)("a", {
                                  href: "/medicare/medicare-parts/part-a",
                                  children: "Parts A ",
                                }),
                                "and ",
                                (0, r.jsx)("a", {
                                  href: "/medicare/medicare-parts/part-b",
                                  children: "B",
                                }),
                                ".",
                              ],
                            }),
                            (0, r.jsx)("p", {
                              className: "default-paragraph mb-16",
                              children: (0, r.jsx)("a", {
                                href: "/medicare/medicare-enrollment-periods",
                                children:
                                  "Learn about the various enrollment periods to get a better idea about when you can review and change your current coverage.",
                              }),
                            }),
                            (0, r.jsx)("p", {
                              className: "default-paragraph",
                              children: "*Dependent on state availability",
                            }),
                            (0, r.jsx)("div", {
                              className: "button-parent",
                              children: (0, r.jsx)("button", {
                                className:
                                  "next-click-button text-center m-auto-center",
                                children: (0, r.jsx)("a", {
                                  href: "https://medicare.selectquote.com/quote-form/",
                                  children: "Get Free Quotes",
                                }),
                              }),
                            }),
                            (0, r.jsx)("p", {
                              className: "text-center default-paragraph",
                              children: "No obligation to enroll.",
                            }),
                            (0, r.jsx)("p", {
                              className: "text-center default-paragraph",
                              children: "or",
                            }),
                            (0, r.jsxs)("p", {
                              className:
                                "text-center default-paragraph start-over",
                              onClick: eS,
                              children: [
                                "Start Over ",
                                (0, r.jsx)("span", {
                                  className: "refresh-icon",
                                  children: "",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    {}
                  ),
                14 === e &&
                  (0, r.jsx)(
                    () =>
                      (0, r.jsx)("div", {
                        className: "parent mtb-110-mobile",
                        children: (0, r.jsxs)("div", {
                          children: [
                            (0, r.jsx)("div", {
                              children: (0, r.jsx)("p", {
                                className:
                                  "text-center default-paragraph mb-36",
                                children:
                                  "Based on your answers, we recommend enrolling between",
                              }),
                            }),
                            (0, r.jsxs)("p", {
                              className: "text-center date mb-20",
                              children: [
                                ee && (0, r.jsx)("span", { children: ee }),
                                " - ",
                                ei && (0, r.jsx)("span", { children: ei }),
                              ],
                            }),
                            (0, r.jsxs)("p", {
                              className: "default-paragraph mb-16",
                              children: [
                                "You can enroll in a ",
                                (0, r.jsx)("a", {
                                  href: "/medicare/medicare-plans/advantage-plans",
                                  children: "Medicare Advantage plan",
                                }),
                                " from 3 months ahead of your Medicare Eligibility date due to disability to 3 months after with most carriers.",
                              ],
                            }),
                            (0, r.jsx)("p", {
                              className: "default-paragraph mb-16",
                              children: (0, r.jsx)("a", {
                                href: "/medicare/medicare-enrollment-periods",
                                children:
                                  "Learn about the various enrollment periods to get a better idea about when you can review and change your current coverage.",
                              }),
                            }),
                            (0, r.jsx)("div", {
                              className: "button-parent",
                              children: (0, r.jsx)("button", {
                                className:
                                  "next-click-button text-center m-auto-center",
                                children: (0, r.jsx)("a", {
                                  href: "https://medicare.selectquote.com/quote-form/",
                                  children: "Get Free Quotes",
                                }),
                              }),
                            }),
                            (0, r.jsx)("p", {
                              className: "text-center default-paragraph",
                              children: "No obligation to enroll.",
                            }),
                            (0, r.jsx)("p", {
                              className: "text-center default-paragraph",
                              children: "or",
                            }),
                            (0, r.jsxs)("p", {
                              className:
                                "text-center default-paragraph start-over",
                              onClick: eS,
                              children: [
                                "Start Over ",
                                (0, r.jsx)("span", {
                                  className: "refresh-icon",
                                  children: "",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    {}
                  ),
                15 === e &&
                  (0, r.jsx)(
                    () =>
                      (0, r.jsx)("div", {
                        className: "parent mtb-110-mobile",
                        children: (0, r.jsxs)("div", {
                          children: [
                            (0, r.jsxs)("p", {
                              className: "default-paragraph mb-16",
                              children: [
                                "No Problem. We can help you find the type of plan you need here. We do recommend signing up for a ",
                                (0, r.jsx)("a", {
                                  href: "/medicare/medicare-plans/supplement-plans",
                                  children: "Medicare Supplement",
                                }),
                                " or ",
                                (0, r.jsx)("a", {
                                  href: "/medicare/medicare-plans/advantage-plans",
                                  children: "Medicare Advantage Plan",
                                }),
                                " to protect you from unexpected costs not covered by Medicare Parts ",
                                (0, r.jsx)("a", {
                                  href: "/medicare/medicare-parts/part-a",
                                  children: "A",
                                }),
                                " and ",
                                (0, r.jsx)("a", {
                                  href: "/medicare/medicare-parts/part-b",
                                  children: "B",
                                }),
                                ".",
                              ],
                            }),
                            (0, r.jsx)("p", {
                              className: "default-paragraph mb-16",
                              children: (0, r.jsx)("a", {
                                href: "/medicare/medicare-enrollment-periods",
                                children:
                                  "Learn about the various enrollment periods to get a better idea about when you can review and change your current coverage.",
                              }),
                            }),
                            (0, r.jsx)("div", {
                              className: "button-parent",
                              children: (0, r.jsx)("button", {
                                className:
                                  "next-click-button text-center m-auto-center",
                                children: (0, r.jsx)("a", {
                                  href: "https://medicare.selectquote.com/quote-form/",
                                  children: "Get Free Quotes",
                                }),
                              }),
                            }),
                            (0, r.jsx)("p", {
                              className: "text-center default-paragraph",
                              children: "No obligation to enroll.",
                            }),
                            (0, r.jsx)("p", {
                              className: "text-center default-paragraph",
                              children: "or",
                            }),
                            (0, r.jsxs)("p", {
                              className:
                                "text-center default-paragraph start-over",
                              onClick: eS,
                              children: [
                                "Start Over ",
                                (0, r.jsx)("span", {
                                  className: "refresh-icon",
                                  children: "",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    {}
                  ),
                16 === e &&
                  (0, r.jsx)(
                    () =>
                      (0, r.jsx)("div", {
                        className: "parent mtb-110-mobile",
                        children: (0, r.jsxs)("div", {
                          children: [
                            (0, r.jsx)("div", {
                              children: (0, r.jsx)("p", {
                                className:
                                  "text-center default-paragraph mb-36",
                                children:
                                  "Based on your answers, we recommend enrolling between",
                              }),
                            }),
                            (0, r.jsxs)("p", {
                              className: "text-center date mb-20",
                              children: [
                                ea && (0, r.jsx)("span", { children: ea }),
                                " - ",
                                et && (0, r.jsx)("span", { children: et }),
                              ],
                            }),
                            (0, r.jsxs)("p", {
                              className: "default-paragraph mb-16",
                              children: [
                                (0, r.jsx)("span", {
                                  className: "f-w-700",
                                  children: "For Medicare Advantage:",
                                }),
                                " The window to enroll in ",
                                (0, r.jsx)("a", {
                                  href: "/medicare/medicare-plans/advantage-plans",
                                  children: "Medicare Advantage ",
                                }),
                                "is usually 2 months before loss of coverage and 2 months after.",
                              ],
                            }),
                            (0, r.jsxs)("p", {
                              className: "default-paragraph mb-16",
                              children: [
                                (0, r.jsx)("span", {
                                  className: "f-w-700",
                                  children: "For Medicare Supplement:",
                                }),
                                " The window to enroll in ",
                                (0, r.jsx)("a", {
                                  href: "/medicare/medicare-plans/supplement-plans",
                                  children: "Medicare Supplement",
                                }),
                                " is usually 60 days before date of coverage loss and 63 days after for guaranteed issue.",
                              ],
                            }),
                            (0, r.jsx)("p", {
                              className: "default-paragraph",
                              children: (0, r.jsx)("a", {
                                href: "/medicare/medicare-enrollment-periods",
                                children:
                                  "Learn about the various enrollment periods to get a better idea about when you can review and change your current coverage.",
                              }),
                            }),
                            (0, r.jsx)("div", {
                              className: "button-parent",
                              children: (0, r.jsx)("button", {
                                className:
                                  "next-click-button text-center m-auto-center",
                                children: (0, r.jsx)("a", {
                                  href: "https://medicare.selectquote.com/quote-form/",
                                  children: "Get Free Quotes",
                                }),
                              }),
                            }),
                            (0, r.jsx)("p", {
                              className: "text-center default-paragraph",
                              children: "No obligation to enroll.",
                            }),
                            (0, r.jsx)("p", {
                              className: "text-center default-paragraph",
                              children: "or",
                            }),
                            (0, r.jsxs)("p", {
                              className:
                                "text-center default-paragraph start-over",
                              onClick: eS,
                              children: [
                                "Start Over ",
                                (0, r.jsx)("span", {
                                  className: "refresh-icon",
                                  children: "",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    {}
                  ),
                17 === e &&
                  (0, r.jsx)(
                    () =>
                      (0, r.jsx)("div", {
                        className: "parent mtb-110-mobile",
                        children: (0, r.jsxs)("div", {
                          children: [
                            (0, r.jsx)("div", {
                              children: (0, r.jsx)("p", {
                                className:
                                  "text-center default-paragraph mb-36",
                                children:
                                  "Based on your answers, we recommend enrolling between",
                              }),
                            }),
                            (0, r.jsxs)("p", {
                              className: "text-center date mb-20",
                              children: [
                                eo && (0, r.jsx)("span", { children: eo }),
                                " - ",
                                ec && (0, r.jsx)("span", { children: ec }),
                              ],
                            }),
                            (0, r.jsxs)("p", {
                              className: "default-paragraph mb-16",
                              children: [
                                (0, r.jsx)("span", {
                                  className: "f-w-700",
                                  children: "For Medicare Parts A and/or B:",
                                }),
                                " You have 8 months after coverage loss to join ",
                                (0, r.jsx)("a", {
                                  href: "/medicare/medicare-parts/part-b",
                                  children: "Part B",
                                }),
                                ". Once you are enrolled in Medicare ",
                                (0, r.jsx)("a", {
                                  href: "/medicare/medicare-parts/part-a",
                                  children: "Parts A",
                                }),
                                " and B, you will be eligible to enroll in ",
                                (0, r.jsx)("a", {
                                  href: "/medicare/medicare-plans/advantage-plans",
                                  children: "Medicare Advantage",
                                }),
                                " or ",
                                (0, r.jsx)("a", {
                                  href: "/medicare/medicare-plans/supplement-plans",
                                  children: "Medicare Supplement",
                                }),
                                " during the following windows:",
                              ],
                            }),
                            (0, r.jsxs)("p", {
                              className: "default-paragraph mb-16",
                              children: [
                                (0, r.jsx)("span", {
                                  className: "f-w-700",
                                  children: "Medicare Advantage:",
                                }),
                                " You can enroll in a Medicare Advantage plan usually 3 months before the month of your Part B effective date and 2 months after.",
                              ],
                            }),
                            (0, r.jsxs)("p", {
                              className: "default-paragraph mb-16",
                              children: [
                                (0, r.jsx)("span", {
                                  className: "f-w-700",
                                  children: "Medicare Supplement:",
                                }),
                                " You can enroll in a Medicare Supplement plan beginning the same month as your Part B effective date through the following 5 months. Coverage cannot start prior to the beginning of your coverage under Medicare Parts A and B.",
                              ],
                            }),
                            (0, r.jsx)("p", {
                              className: "default-paragraph mb-16",
                              children:
                                "Note: if you’re planning on enrolling in COBRA, you will still need to enroll in Part B to avoid penalties and unexpected out of pocket costs.",
                            }),
                            (0, r.jsx)("p", {
                              className: "default-paragraph",
                              children: (0, r.jsx)("a", {
                                href: "/medicare/medicare-enrollment-periods",
                                children:
                                  "Learn about the various enrollment periods to get a better idea about when you can review and change your current coverage.",
                              }),
                            }),
                            (0, r.jsx)("div", {
                              className: "button-parent",
                              children: (0, r.jsx)("button", {
                                className:
                                  "next-click-button text-center m-auto-center",
                                children: (0, r.jsx)("a", {
                                  href: "https://medicare.selectquote.com/quote-form/",
                                  children: "Get Free Quotes",
                                }),
                              }),
                            }),
                            (0, r.jsx)("p", {
                              className: "text-center default-paragraph",
                              children: "No obligation to enroll.",
                            }),
                            (0, r.jsx)("p", {
                              className: "text-center default-paragraph",
                              children: "or",
                            }),
                            (0, r.jsxs)("p", {
                              className:
                                "text-center default-paragraph start-over",
                              onClick: eS,
                              children: [
                                "Start Over ",
                                (0, r.jsx)("span", {
                                  className: "refresh-icon",
                                  children: "",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    {}
                  ),
                18 === e &&
                  (0, r.jsx)(
                    () =>
                      (0, r.jsx)("div", {
                        className: "parent mtb-110-mobile",
                        children: (0, r.jsxs)("div", {
                          children: [
                            (0, r.jsx)("p", {
                              className: "text-center enroll-anytime mb-20",
                              children: "You can enroll anytime!",
                            }),
                            (0, r.jsxs)("p", {
                              className: "default-paragraph mb-16",
                              children: [
                                "Even if you’ve missed your ",
                                (0, r.jsx)("a", {
                                  href: "/medicare/medicare-enrollment-periods/advantage-open-enrollment",
                                  children: "Open Enrollment Period",
                                }),
                                ", you can still apply for a Medicare Supplement policy at any time. Since there is no open enrollment period for ",
                                (0, r.jsx)("a", {
                                  href: "/medicare/medicare-plans/supplement-plans",
                                  children: "Medicare Supplement",
                                }),
                                ", you might need to pass medical underwriting unless you qualify for guaranteed issue.",
                              ],
                            }),
                            (0, r.jsx)("div", {
                              className: "button-parent",
                              children: (0, r.jsx)("button", {
                                className:
                                  "next-click-button text-center m-auto-center",
                                children: (0, r.jsx)("a", {
                                  href: "https://medicare.selectquote.com/quote-form/",
                                  children: "Get Free Quotes",
                                }),
                              }),
                            }),
                            (0, r.jsx)("p", {
                              className: "text-center default-paragraph",
                              children: "No obligation to enroll.",
                            }),
                            (0, r.jsx)("p", {
                              className: "text-center default-paragraph",
                              children: "or",
                            }),
                            (0, r.jsxs)("p", {
                              className:
                                "text-center default-paragraph start-over",
                              onClick: eS,
                              children: [
                                "Start Over ",
                                (0, r.jsx)("span", {
                                  className: "refresh-icon",
                                  children: "",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    {}
                  ),
                19 === e &&
                  (0, r.jsx)(
                    () =>
                      (0, r.jsx)("div", {
                        className: "parent mtb-110-mobile",
                        children: (0, r.jsxs)("div", {
                          children: [
                            (0, r.jsx)("p", {
                              className:
                                "text-center date mt-mobile-110-desktop-mb-20",
                              children: "October 15 – December 7",
                            }),
                            (0, r.jsxs)("p", {
                              className: "default-paragraph mb-16",
                              children: [
                                "You’ll be able to enroll in a ",
                                (0, r.jsx)("a", {
                                  href: "/medicare/medicare-plans/advantage-plans",
                                  children: "Medicare Advantage plan",
                                }),
                                " during Medicare’s ",
                                (0, r.jsx)("a", {
                                  href: "/medicare/medicare-enrollment-periods/annual-enrollment",
                                  children: "Annual Election Period",
                                }),
                                " each fall if you’ve missed your ",
                                (0, r.jsx)("a", {
                                  href: "/medicare/medicare-enrollment-periods/initial-enrollment",
                                  children: "initial enrollment period",
                                }),
                                ".",
                              ],
                            }),
                            (0, r.jsx)("p", {
                              className: "default-paragraph",
                              children:
                                "There may also be an opportunity for you to enroll in a Medicare Advantage plan outside of the Annual Election Period if you meet certain criteria. Call one of our licensed sales agents to see if you are eligible to enroll.",
                            }),
                            (0, r.jsx)("div", {
                              className: "button-parent",
                              children: (0, r.jsx)("button", {
                                className:
                                  "next-click-button text-center m-auto-center",
                                children: (0, r.jsx)("a", {
                                  href: "https://medicare.selectquote.com/quote-form/",
                                  children: "Get Free Quotes",
                                }),
                              }),
                            }),
                            (0, r.jsx)("p", {
                              className: "text-center default-paragraph",
                              children: "No obligation to enroll.",
                            }),
                            (0, r.jsx)("p", {
                              className: "text-center default-paragraph",
                              children: "or",
                            }),
                            (0, r.jsxs)("p", {
                              className:
                                "text-center default-paragraph start-over",
                              onClick: eS,
                              children: [
                                "Start Over ",
                                (0, r.jsx)("span", {
                                  className: "refresh-icon",
                                  children: "",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    {}
                  ),
                20 === e &&
                  (0, r.jsx)(
                    () =>
                      (0, r.jsx)("div", {
                        className: "parent mtb-110-mobile",
                        children: (0, r.jsxs)("div", {
                          children: [
                            (0, r.jsx)("div", {
                              children: (0, r.jsx)("p", {
                                className:
                                  "text-center default-paragraph mb-36",
                                children:
                                  "Based on your answers, we recommend enrolling between",
                              }),
                            }),
                            (0, r.jsxs)("p", {
                              className: "text-center date mb-20",
                              children: [
                                ea && (0, r.jsx)("span", { children: ea }),
                                " - ",
                                et && (0, r.jsx)("span", { children: et }),
                              ],
                            }),
                            (0, r.jsxs)("p", {
                              className: "default-paragraph mb-16",
                              children: [
                                (0, r.jsx)("span", {
                                  className: "f-w-700",
                                  children: "For Medicare Advantage:",
                                }),
                                " The window to enroll in ",
                                (0, r.jsx)("a", {
                                  href: "/medicare/medicare-plans/advantage-plans",
                                  children: "Medicare Advantage",
                                }),
                                " is usually 2 months before loss of coverage and 2 months after.",
                              ],
                            }),
                            (0, r.jsxs)("p", {
                              className: "default-paragraph mb-16",
                              children: [
                                (0, r.jsx)("span", {
                                  className: "f-w-700",
                                  children: "For Medicare Supplement:",
                                }),
                                " The window to enroll in ",
                                (0, r.jsx)("a", {
                                  href: "/medicare/medicare-plans/supplement-plans",
                                  children: "Medicare Supplement",
                                }),
                                " is usually 60 days before date of coverage loss and 63 days after for guaranteed issue.",
                              ],
                            }),
                            (0, r.jsx)("p", {
                              className: "default-paragraph",
                              children: (0, r.jsx)("a", {
                                href: "/medicare/medicare-enrollment-periods",
                                children:
                                  "Learn about the various enrollment periods to get a better idea about when you can review and change your current coverage.",
                              }),
                            }),
                            (0, r.jsx)("div", {
                              className: "button-parent",
                              children: (0, r.jsx)("button", {
                                className:
                                  "next-click-button text-center m-auto-center",
                                children: (0, r.jsx)("a", {
                                  href: "https://medicare.selectquote.com/quote-form/",
                                  children: "Get Free Quotes",
                                }),
                              }),
                            }),
                            (0, r.jsx)("p", {
                              className: "text-center default-paragraph",
                              children: "No obligation to enroll.",
                            }),
                            (0, r.jsx)("p", {
                              className: "text-center default-paragraph",
                              children: "or",
                            }),
                            (0, r.jsxs)("p", {
                              className:
                                "text-center default-paragraph start-over",
                              onClick: eS,
                              children: [
                                "Start Over ",
                                (0, r.jsx)("span", {
                                  className: "refresh-icon",
                                  children: "",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    {}
                  ),
                21 === e &&
                  (0, r.jsx)(
                    () =>
                      (0, r.jsx)("div", {
                        className: "parent mtb-110-mobile",
                        children: (0, r.jsxs)("div", {
                          children: [
                            (0, r.jsx)("div", {
                              children: (0, r.jsx)("p", {
                                className:
                                  "text-center default-paragraph mb-36",
                                children:
                                  "Based on your answers, we recommend enrolling between",
                              }),
                            }),
                            (0, r.jsxs)("p", {
                              className: "text-center date mb-20",
                              children: [
                                eo && (0, r.jsx)("span", { children: eo }),
                                " - ",
                                ec && (0, r.jsx)("span", { children: ec }),
                              ],
                            }),
                            (0, r.jsxs)("p", {
                              className: "default-paragraph mb-16",
                              children: [
                                (0, r.jsx)("span", {
                                  className: "f-w-700",
                                  children: "For Medicare Parts A and/or B:",
                                }),
                                " You have 8 months after coverage loss to join ",
                                (0, r.jsx)("a", {
                                  href: "/medicare/medicare-parts/part-b",
                                  children: "Part B",
                                }),
                                ". Once you are enrolled in Medicare ",
                                (0, r.jsx)("a", {
                                  href: "/medicare/medicare-parts/part-a",
                                  children: "Parts A",
                                }),
                                " and B, you will be eligible to enroll in ",
                                (0, r.jsx)("a", {
                                  href: "/medicare/medicare-plans/advantage-plans",
                                  children: "Medicare Advantage",
                                }),
                                " or ",
                                (0, r.jsx)("a", {
                                  href: "/medicare/medicare-plans/supplement-plans",
                                  children: "Medicare Supplement",
                                }),
                                " during the following windows:",
                              ],
                            }),
                            (0, r.jsxs)("p", {
                              className: "default-paragraph mb-16",
                              children: [
                                (0, r.jsx)("span", {
                                  className: "f-w-700",
                                  children: "Medicare Advantage:",
                                }),
                                " You can enroll in a Medicare Advantage plan usually 3 months before the month of your Part B effective date and 2 months after.",
                              ],
                            }),
                            (0, r.jsxs)("p", {
                              className: "default-paragraph mb-16",
                              children: [
                                (0, r.jsx)("span", {
                                  className: "f-w-700",
                                  children: "Medicare Supplement:",
                                }),
                                " You can enroll in a Medicare Supplement plan beginning the same month as your Part B effective date through the following 5 months. Coverage cannot start prior to the beginning of your coverage under Medicare Parts A and B.",
                              ],
                            }),
                            (0, r.jsx)("p", {
                              className: "default-paragraph mb-16",
                              children:
                                "Note: if you’re planning on enrolling in COBRA, you will still need to enroll in Part B to avoid penalties and unexpected out of pocket costs.",
                            }),
                            (0, r.jsx)("p", {
                              className: "default-paragraph",
                              children: (0, r.jsx)("a", {
                                href: "/medicare/medicare-enrollment-periods",
                                children:
                                  "Learn about the various enrollment periods to get a better idea about when you can review and change your current coverage.",
                              }),
                            }),
                            (0, r.jsx)("div", {
                              className: "button-parent",
                              children: (0, r.jsx)("button", {
                                className:
                                  "next-click-button text-center m-auto-center",
                                children: (0, r.jsx)("a", {
                                  href: "https://medicare.selectquote.com/quote-form/",
                                  children: "Get Free Quotes",
                                }),
                              }),
                            }),
                            (0, r.jsx)("p", {
                              className: "text-center default-paragraph",
                              children: "No obligation to enroll.",
                            }),
                            (0, r.jsx)("p", {
                              className: "text-center default-paragraph",
                              children: "or",
                            }),
                            (0, r.jsxs)("p", {
                              className:
                                "text-center default-paragraph start-over",
                              onClick: eS,
                              children: [
                                "Start Over ",
                                (0, r.jsx)("span", {
                                  className: "refresh-icon",
                                  children: "",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    {}
                  ),
                22 === e &&
                  (0, r.jsx)(
                    () =>
                      (0, r.jsx)("div", {
                        className: "parent mtb-110-mobile",
                        children: (0, r.jsxs)("div", {
                          children: [
                            (0, r.jsx)("div", {
                              children: (0, r.jsx)("p", {
                                className:
                                  "text-center default-paragraph mb-36",
                                children:
                                  "Based on your answers, we recommend enrolling between",
                              }),
                            }),
                            (0, r.jsxs)("p", {
                              className: "text-center date mb-20",
                              children: [
                                U && (0, r.jsx)("span", { children: U }),
                                " - ",
                                V && (0, r.jsx)("span", { children: V }),
                              ],
                            }),
                            (0, r.jsx)("p", {
                              className: "default-paragraph mb-16",
                              children:
                                "You can enroll in a Medicare Advantage plan from 3 months ahead of your birth month to 3 months after with most carriers.",
                            }),
                            (0, r.jsx)("div", {
                              className: "button-parent",
                              children: (0, r.jsx)("button", {
                                className:
                                  "next-click-button text-center m-auto-center",
                                children: (0, r.jsx)("a", {
                                  href: "https://medicare.selectquote.com/quote-form/",
                                  children: "Get Free Quotes",
                                }),
                              }),
                            }),
                            (0, r.jsx)("p", {
                              className: "text-center default-paragraph",
                              children: "No obligation to enroll.",
                            }),
                            (0, r.jsx)("p", {
                              className: "text-center default-paragraph",
                              children: "or",
                            }),
                            (0, r.jsxs)("p", {
                              className:
                                "text-center default-paragraph start-over",
                              onClick: eS,
                              children: [
                                "Start Over ",
                                (0, r.jsx)("span", {
                                  className: "refresh-icon",
                                  children: "",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    {}
                  ),
                23 === e &&
                  (0, r.jsx)(
                    () =>
                      (0, r.jsx)("div", {
                        className: "parent mtb-110-mobile",
                        children: (0, r.jsxs)("div", {
                          children: [
                            (0, r.jsxs)("p", {
                              className: "default-paragraph mb-16",
                              children: [
                                "No Problem. We can help you find the type of plan you need here. We do recommend signing up for a ",
                                (0, r.jsx)("a", {
                                  href: "/medicare/medicare-plans/supplement-plans",
                                  children: "Medicare Supplement",
                                }),
                                " or ",
                                (0, r.jsx)("a", {
                                  href: "/medicare/medicare-plans/advantage-plans",
                                  children: "Medicare Advantage Plan",
                                }),
                                " to protect you from unexpected costs not covered by Medicare Parts ",
                                (0, r.jsx)("a", {
                                  href: "/medicare/medicare-parts/part-a",
                                  children: "A",
                                }),
                                " and ",
                                (0, r.jsx)("a", {
                                  href: "/medicare/medicare-parts/part-b",
                                  children: "B",
                                }),
                                ".",
                              ],
                            }),
                            (0, r.jsx)("p", {
                              className: "default-paragraph mb-16",
                              children: (0, r.jsx)("a", {
                                href: "/medicare/medicare-enrollment-periods",
                                children:
                                  "Learn about the various enrollment periods to get a better idea about when you can review and change your current coverage.",
                              }),
                            }),
                            (0, r.jsx)("div", {
                              className: "button-parent",
                              children: (0, r.jsx)("button", {
                                className:
                                  "next-click-button text-center m-auto-center",
                                children: (0, r.jsx)("a", {
                                  href: "https://medicare.selectquote.com/quote-form/",
                                  children: "Get Free Quotes",
                                }),
                              }),
                            }),
                            (0, r.jsx)("p", {
                              className: "text-center default-paragraph",
                              children: "No obligation to enroll.",
                            }),
                            (0, r.jsx)("p", {
                              className: "text-center default-paragraph",
                              children: "or",
                            }),
                            (0, r.jsxs)("p", {
                              className:
                                "text-center default-paragraph start-over",
                              onClick: eS,
                              children: [
                                "Start Over ",
                                (0, r.jsx)("span", {
                                  className: "refresh-icon",
                                  children: "",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    {}
                  ),
              ],
            })
          );
        },
        [u.HV.PlanQuiz]: () => {
          let [e, l] = (0, o.useState)(!1),
            [i, n] = (0, o.useState)(!1),
            [a, s] = (0, o.useState)({
              question1: "",
              question2: "",
              question3: "",
              question4: "",
            }),
            t = (e, l) => {
              s((i) => ({ ...i, [e]: l }));
            };
          return (0, r.jsx)("div", {
            className: "plan-quiz-form",
            children: e
              ? (0, r.jsx)(ek, { selectedOptions: a })
              : (0, r.jsx)("div", {
                  children: (0, r.jsx)("div", {
                    className: "modal1",
                    children: (0, r.jsxs)("div", {
                      className: "modal-content1",
                      children: [
                        (0, r.jsx)("p", {
                          className: "heading",
                          children:
                            "Answer a few questions and we'll recommend a plan for you.",
                        }),
                        (0, r.jsxs)("form", {
                          children: [
                            (0, r.jsxs)("div", {
                              className: "q-row",
                              children: [
                                (0, r.jsxs)("div", {
                                  className: "w-50 mr-30",
                                  children: [
                                    (0, r.jsx)("label", {
                                      className: "text-orange",
                                      children: (0, r.jsx)("p", {
                                        className: "text-color-646464",
                                        children:
                                          "Which would you rather plan for?",
                                      }),
                                    }),
                                    (0, r.jsxs)("div", {
                                      children: [
                                        (0, r.jsxs)("label", {
                                          className:
                                            "option " +
                                            ("Yes" === a.question1
                                              ? "bg-orange"
                                              : "bg-grey") +
                                            (i && a.question1.length < 1
                                              ? " error-text"
                                              : ""),
                                          children: [
                                            (0, r.jsx)("input", {
                                              type: "radio",
                                              name: "question1",
                                              value: "Yes",
                                              checked: "Yes" === a.question1,
                                              onChange: () =>
                                                t("question1", "Yes"),
                                              required: !0,
                                            }),
                                            "Lower monthly premiums and pay co-pays when you go to the doctor or hospital",
                                          ],
                                        }),
                                        (0, r.jsxs)("label", {
                                          className:
                                            "option " +
                                            ("No" === a.question1
                                              ? "bg-orange"
                                              : "bg-grey") +
                                            (i && a.question1.length < 1
                                              ? " error-text"
                                              : ""),
                                          children: [
                                            (0, r.jsx)("input", {
                                              type: "radio",
                                              name: "question1",
                                              value: "No",
                                              checked: "No" === a.question1,
                                              onChange: () =>
                                                t("question1", "No"),
                                              required: !0,
                                            }),
                                            "Higher monthly premiums, no co-pays when you go to the doctor or hospital",
                                          ],
                                        }),
                                      ],
                                    }),
                                    i &&
                                      a.question1.length < 1 &&
                                      (0, r.jsx)("p", {
                                        className: "error-red",
                                        children: "This field cannot be blank.",
                                      }),
                                  ],
                                }),
                                (0, r.jsxs)("div", {
                                  className: "w-50",
                                  children: [
                                    (0, r.jsx)("label", {
                                      className: "text-orange",
                                      children: (0, r.jsx)("p", {
                                        className: "text-color-646464",
                                        children:
                                          "How many times a year would you like coverage to go to the doctor or hospital?",
                                      }),
                                    }),
                                    (0, r.jsxs)("div", {
                                      children: [
                                        (0, r.jsxs)("label", {
                                          className:
                                            "option " +
                                            ("Yes" === a.question3
                                              ? "bg-orange"
                                              : "bg-grey") +
                                            (i && a.question3.length < 1
                                              ? " error-text"
                                              : ""),
                                          children: [
                                            (0, r.jsx)("input", {
                                              type: "radio",
                                              name: "question3",
                                              value: "Yes",
                                              checked: "Yes" === a.question3,
                                              onChange: () =>
                                                t("question3", "Yes"),
                                              required: !0,
                                            }),
                                            "6 or fewer times a year",
                                          ],
                                        }),
                                        (0, r.jsxs)("label", {
                                          className:
                                            "option " +
                                            ("No" === a.question3
                                              ? "bg-orange"
                                              : "bg-grey") +
                                            (i && a.question3.length < 1
                                              ? " error-text"
                                              : ""),
                                          children: [
                                            (0, r.jsx)("input", {
                                              type: "radio",
                                              name: "question3",
                                              value: "No",
                                              checked: "No" === a.question3,
                                              onChange: () =>
                                                t("question3", "No"),
                                              required: !0,
                                            }),
                                            "More than 6 times a year",
                                          ],
                                        }),
                                      ],
                                    }),
                                    i &&
                                      a.question3.length < 1 &&
                                      (0, r.jsx)("p", {
                                        className: "error-red",
                                        children: "This field cannot be blank.",
                                      }),
                                  ],
                                }),
                              ],
                            }),
                            (0, r.jsxs)("div", {
                              className: "q-row",
                              children: [
                                (0, r.jsxs)("div", {
                                  className: "w-50 mr-30",
                                  children: [
                                    (0, r.jsx)("label", {
                                      className: "text-orange",
                                      children: (0, r.jsx)("p", {
                                        className: "text-color-646464",
                                        children: "Do you travel often?",
                                      }),
                                    }),
                                    (0, r.jsxs)("div", {
                                      children: [
                                        (0, r.jsxs)("label", {
                                          className:
                                            "option " +
                                            ("Yes" === a.question2
                                              ? "bg-orange"
                                              : "bg-grey") +
                                            (i && a.question2.length < 1
                                              ? " error-text"
                                              : ""),
                                          children: [
                                            (0, r.jsx)("input", {
                                              type: "radio",
                                              name: "question2",
                                              value: "Yes",
                                              checked: "Yes" === a.question2,
                                              onChange: () =>
                                                t("question2", "Yes"),
                                              required: !0,
                                            }),
                                            "Yes",
                                          ],
                                        }),
                                        (0, r.jsxs)("label", {
                                          className:
                                            "option " +
                                            ("No" === a.question2
                                              ? "bg-orange"
                                              : "bg-grey") +
                                            (i && a.question2.length < 1
                                              ? " error-text"
                                              : ""),
                                          children: [
                                            (0, r.jsx)("input", {
                                              type: "radio",
                                              name: "question2",
                                              value: "No",
                                              checked: "No" === a.question2,
                                              onChange: () =>
                                                t("question2", "No"),
                                              required: !0,
                                            }),
                                            "No",
                                          ],
                                        }),
                                      ],
                                    }),
                                    i &&
                                      a.question2.length < 1 &&
                                      (0, r.jsx)("p", {
                                        className: "error-red",
                                        children: "This field cannot be blank.",
                                      }),
                                  ],
                                }),
                                (0, r.jsxs)("div", {
                                  className: "w-50",
                                  children: [
                                    (0, r.jsx)("label", {
                                      className: "text-orange",
                                      children: (0, r.jsx)("p", {
                                        className: "text-color-646464",
                                        children:
                                          "Would you like prescriptions to be covered?",
                                      }),
                                    }),
                                    (0, r.jsxs)("div", {
                                      children: [
                                        (0, r.jsxs)("label", {
                                          className:
                                            "option " +
                                            ("Yes" === a.question4
                                              ? "bg-orange"
                                              : "bg-grey") +
                                            (i && a.question4.length < 1
                                              ? " error-text"
                                              : ""),
                                          children: [
                                            (0, r.jsx)("input", {
                                              type: "radio",
                                              name: "question4",
                                              value: "Yes",
                                              checked: "Yes" === a.question4,
                                              onChange: () =>
                                                t("question4", "Yes"),
                                              required: !0,
                                            }),
                                            "Yes",
                                          ],
                                        }),
                                        (0, r.jsxs)("label", {
                                          className:
                                            "option " +
                                            ("No" === a.question4
                                              ? "bg-orange"
                                              : "bg-grey") +
                                            (i && a.question4.length < 1
                                              ? " error-text"
                                              : ""),
                                          children: [
                                            (0, r.jsx)("input", {
                                              type: "radio",
                                              name: "question4",
                                              value: "No",
                                              checked: "No" === a.question4,
                                              onChange: () =>
                                                t("question4", "No"),
                                              required: !0,
                                            }),
                                            "No",
                                          ],
                                        }),
                                      ],
                                    }),
                                    i &&
                                      a.question4.length < 1 &&
                                      (0, r.jsx)("p", {
                                        className: "error-red",
                                        children: "This field cannot be blank.",
                                      }),
                                  ],
                                }),
                              ],
                            }),
                            (0, r.jsx)("div", {
                              className: "btn-container",
                              children: (0, r.jsx)("button", {
                                type: "submit",
                                onClick: () => {
                                  !(function () {
                                    let e = window.pageYOffset,
                                      l = 0 - e,
                                      i = null;
                                    requestAnimationFrame(function n(a) {
                                      var s;
                                      null === i && (i = a);
                                      let t = a - i,
                                        r =
                                          (s = t / 25) < 1
                                            ? (l / 2) * s * s + e
                                            : (-l / 2) * (--s * (s - 2) - 1) +
                                              e;
                                      window.scrollTo(0, r),
                                        t < 50 && requestAnimationFrame(n);
                                    });
                                  })(),
                                    n(!0),
                                    a.question1 &&
                                    a.question2 &&
                                    a.question3 &&
                                    a.question4
                                      ? l(!0)
                                      : l(!1),
                                    console.log("Selected options:", a);
                                },
                                children: "Submit",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
          });
        },
      };
      var eI = i(3408),
        eP = i(8546),
        eq = i(7536);
      let eA = (e) => {
        let {
          width: l = "100%",
          height: i = "50px",
          control: n,
          name: a,
          disabled: s = !1,
          placeholder: t,
          type: o = "text",
          className: d,
          defaultValue: c = "",
          children: u,
          customChange: h,
          accept: m,
          border: v,
          outline: p,
        } = e;
        return (0, r.jsx)(eq.Qr, {
          name: a,
          control: n,
          defaultValue: c,
          render: (e) => {
            let {
              field: { onChange: n, value: c },
              fieldState: { error: x, isDirty: f },
            } = e;
            return (0, r.jsx)(r.Fragment, {
              children:
                "text" === o
                  ? (0, r.jsxs)(eP.Z, {
                      style: { flexDirection: "column" },
                      children: [
                        (0, r.jsx)(eI.Z.Control, {
                          type: o,
                          placeholder: t,
                          value: c,
                          isInvalid: !!x,
                          onChange: (e) => {
                            "img" === a && h(e), n(e);
                          },
                          disabled: s,
                          className: d,
                          style: { width: l, height: i, border: v, outline: p },
                          accept: m,
                        }),
                        u,
                        x &&
                          (0, r.jsx)(eI.Z.Text, {
                            id: "passwordHelpBlock",
                            className: "text-danger",
                            muted: !0,
                            children: null == x ? void 0 : x.message,
                          }),
                      ],
                    })
                  : (0, r.jsxs)(eI.Z.Group, {
                      controlId: "exampleForm.ControlTextarea1",
                      children: [
                        (0, r.jsx)(eI.Z.Control, {
                          as: "textarea",
                          rows: 3,
                          type: o,
                          placeholder: t,
                          value: c,
                          isInvalid: !!x,
                          onChange: (e) => {
                            "img" === a && h(e), n(e);
                          },
                          disabled: s,
                          className: d,
                          style: { width: l, height: i, border: v, outline: p },
                        }),
                        u,
                        x &&
                          (0, r.jsx)(eI.Z.Text, {
                            id: "passwordHelpBlock",
                            className: "text-danger",
                            muted: !0,
                            children: null == x ? void 0 : x.message,
                          }),
                      ],
                    }),
            });
          },
        });
      };
      var eD = i(6627),
        eF = i.n(eD);
      let eL = (e) => {
        let {
          control: l,
          name: i,
          type: n,
          defaultValue: a,
          placeholder: s,
          className: t,
          disabled: o,
          mask: d,
          height: c,
        } = e;
        return (0, r.jsx)(
          eq.Qr,
          {
            name: i,
            defaultValue: a,
            control: l,
            render: (e) => {
              let {
                field: { onChange: l, value: i },
                fieldState: { error: a },
              } = e;
              return (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsx)(eF(), {
                    mask: d,
                    value: i,
                    onChange: l,
                    children: (e) =>
                      (0, r.jsx)(eI.Z.Control, {
                        ...e,
                        type: n,
                        placeholder: s,
                        value: i,
                        onChange: l,
                        isInvalid: !!a,
                        disabled: o,
                        className: t,
                        style: { width: "100%", height: c },
                      }),
                  }),
                  a &&
                    (0, r.jsx)(eI.Z.Text, {
                      id: "passwordHelpBlock",
                      className: "text-danger",
                      muted: !0,
                      children: null == a ? void 0 : a.message,
                    }),
                ],
              });
            },
          },
          i
        );
      };
      var eT = i(4231);
      let ez = eT
          .Ry()
          .shape({
            firstName: eT.Z_().required("This field is required"),
            lastName: eT.Z_().required("This field is required"),
            companyName: eT.Z_().required("This field is required"),
            email: eT
              .Z_()
              .required("This field is required")
              .matches(u.mL.EMAIL, "Please enter a valid email"),
            title: eT.Z_().required("This field is required"),
            phoneNumber: eT.Z_().required("This field is required"),
          }),
        eE = eT
          .Ry()
          .shape({
            comments: eT.Z_(),
            attachment: eT.Z_(),
            city: eT.Z_().required("This field is required"),
            state: eT.Z_().required("This field is required"),
            volume: eT.Z_().required("This field is required"),
            canswer: eT.Z_().required("This field is required"),
            lanswer: eT.Z_().required("This field is required"),
            sanswer: eT.Z_().required("This field is required"),
            ganswer: eT.Z_().required("This field is required"),
            danswer: eT.Z_().required("This field is required"),
            uanswer: eT.Z_().required("This field is required"),
            radiooption: eT.Z_().required("This field is required"),
            radiooption1: eT.Z_().required("This field is required"),
            radiooption2: eT.Z_().required("This field is required"),
            radiooption3: eT.Z_().required("This field is required"),
            radiooption4: eT.Z_().required("This field is required"),
            radiooption5: eT.Z_().required("This field is required"),
            radiooption6: eT.Z_().required("This field is required"),
            insuranceverticals: eT
              .IX()
              .required("This field is required")
              .min(1, "Please select at least one option"),
            checkboxinput: eT
              .Z_()
              .when("insuranceverticals", {
                is: (e) => e && e.includes("Auto1"),
                then: eT.Z_().required("This field is required"),
                otherwise: eT.Z_(),
              }),
            leadtype: eT
              .IX()
              .required("This field is required")
              .min(1, "Please select at least one option"),
            checkboxinput1: eT
              .Z_()
              .when("leadtype", {
                is: (e) => e && e.includes("Auto"),
                then: eT.Z_().required("This field is required"),
                otherwise: eT.Z_(),
              }),
            primarysources: eT
              .IX()
              .required("This field is required")
              .min(1, "Please select at least one option"),
            checkboxinput2: eT
              .Z_()
              .when("primarysources", {
                is: (e) => e && e.includes("Auto"),
                then: eT.Z_().required("This field is required"),
                otherwise: eT.Z_(),
              }),
            others: eT
              .Z_()
              .when("radiooption1", {
                is: "Others",
                then: eT.Z_().required("This field is required"),
                otherwise: eT.Z_(),
              }),
            others1: eT
              .Z_()
              .when("radiooption2", {
                is: "Others1",
                then: eT.Z_().required("This field is required"),
                otherwise: eT.Z_(),
              }),
            others3: eT
              .Z_()
              .when("radiooption6", {
                is: "Others2",
                then: eT.Z_().required("This field is required"),
                otherwise: eT.Z_(),
              }),
          }),
        eO = eT
          .Ry()
          .shape({
            firstName: eT.Z_().required("Please enter your first name"),
            lastName: eT.Z_().required("Please enter your last name."),
            email: eT
              .Z_()
              .required("Please enter your email address.")
              .matches(u.mL.EMAIL, "Please enter a valid email address"),
            phoneNumber: eT.Z_().required("Please enter your phone number."),
            organizationName: eT
              .Z_()
              .required("Please enter your organization name."),
            organizationWesbsite: eT
              .Z_()
              .required("Please enter your organization website."),
            organizationAddress: eT
              .Z_()
              .required("Please enter your organization address."),
            organizationStatement: eT
              .Z_()
              .required("Please enter your organization mission statement."),
            organizationOverview: eT
              .Z_()
              .required("Please provide organization over view."),
            organizationDescription: eT
              .Z_()
              .required("Please enter your organization description."),
            program: eT.Z_().required("This field cannot be blank."),
            amount: eT.Z_().required("This field cannot be blank."),
            IRS: eT.Z_().required("Please enter your organization IRS EIN."),
            reference: eT
              .Z_()
              .required("Please enter your third party reference."),
            boardOfDirector: eT
              .Z_()
              .required("Please enter your board directors."),
            staffInvolved: eT.Z_().required("This field cannot be blank."),
            attachment: eT.Z_(),
          });
      var e_ = i(7533),
        eH = i(936),
        eY = () => {
          let e = (0, G.useRouter)(),
            { control: l, handleSubmit: i } = (0, eq.cI)({
              resolver: (0, e_.X)(ez),
            });
          return (0, r.jsx)("div", {
            children: (0, r.jsx)("div", {
              className: "partnership-form",
              children: (0, r.jsxs)("form", {
                noValidate: !0,
                autoComplete: "off",
                onSubmit: i((l) => {
                  eH.V1.setItem("partnerShipModel", l),
                    e.push("/partnerships-detail");
                }),
                children: [
                  (0, r.jsxs)("div", {
                    className: "row intro-fields",
                    children: [
                      (0, r.jsx)("div", {
                        className: "col",
                        children: (0, r.jsx)(eA, {
                          control: l,
                          name: "firstName",
                          placeholder: "First Name *",
                        }),
                      }),
                      (0, r.jsx)("div", {
                        className: "col",
                        children: (0, r.jsx)(eA, {
                          control: l,
                          name: "lastName",
                          placeholder: "Last Name *",
                        }),
                      }),
                    ],
                  }),
                  (0, r.jsx)("div", {
                    className: "row intro-fields",
                    children: (0, r.jsx)("div", {
                      className: "col",
                      children: (0, r.jsx)(eA, {
                        control: l,
                        name: "companyName",
                        placeholder: "Company Name *",
                      }),
                    }),
                  }),
                  (0, r.jsx)("div", {
                    className: "row intro-fields",
                    children: (0, r.jsx)("div", {
                      className: "col",
                      children: (0, r.jsx)(eA, {
                        control: l,
                        name: "title",
                        placeholder: "Your Title *",
                      }),
                    }),
                  }),
                  (0, r.jsxs)("div", {
                    className: "row intro-fields",
                    children: [
                      (0, r.jsx)("div", {
                        className: "col",
                        children: (0, r.jsx)(eA, {
                          control: l,
                          name: "email",
                          placeholder: "Email *",
                          height: "50px",
                        }),
                      }),
                      (0, r.jsx)("div", {
                        className: "col",
                        children: (0, r.jsx)(eL, {
                          className: "phone-field",
                          control: l,
                          defaultValue: "",
                          name: "phoneNumber",
                          mask: u.RX,
                          placeholder: "Phone Number *",
                          height: "50px",
                        }),
                      }),
                    ],
                  }),
                  (0, r.jsx)("div", {
                    className: "mt-4 button-container",
                    children: (0, r.jsx)("button", {
                      className: "action-btn btn-border submit-button",
                      type: "submit",
                      children: "Continue",
                    }),
                  }),
                ],
              }),
            }),
          });
        },
        eR = i(3505);
      let eB = (e) =>
          '\n    <img src="https://images.ctfassets.net/vr7x4vru4gls/7jsdaiHlxfZvNlRcxtuXXw/80b01324683fa841714ce8e42436345e/SelectQuote_Logo.jpg" width="250"><br/><br/>\n    '
            .concat(
              e.firstName,
              ", <br/><br/>\n    Thank you for sharing your interest in partnering with SelectQuote. A member of our team will be in touch shortly. Below is a copy of your submission.<br/><br/>\n    <strong>Name:</strong> "
            )
            .concat(e.firstName, " ")
            .concat(e.lastName, "<br/>\n    <strong>Company Name:</strong> ")
            .concat(e.companyName, " <br/>\n    <strong>Title: </strong> ")
            .concat(e.title, "<br/>\n    <strong>Email: </strong> ")
            .concat(e.email, "<br/>\n    <strong>Phone: </strong> ")
            .concat(
              null == e ? void 0 : e.phoneNumber,
              " <br/>\n    <strong>Company location: </strong> "
            )
            .concat(e.city, " , ")
            .concat(e.state, "<br/>\n    <strong>Company employees: </strong> ")
            .concat(
              e.radiooption,
              "<br/>\n    <strong>Company insurance coverage: </strong> "
            )
            .concat(e.radiooption1, " ")
            .concat(
              e.others,
              "<br/>\n    <strong>Company Acord Certificate: </strong> "
            )
            .concat(e.radiooption2, " ")
            .concat(
              e.others1,
              " <br/>\n    <strong>Insurance verticals call: </strong> "
            )
            .concat(e.insuranceverticals, " ")
            .concat(
              e.checkboxinput,
              " <br/>\n    <strong>Currently lead type(s) offer: </strong> "
            )
            .concat(e.leadtype, " ")
            .concat(
              e.checkboxinput1,
              " <br/>\n    <strong>Primary sources leads: </strong> "
            )
            .concat(e.primarysources, " ")
            .concat(
              e.checkboxinput2,
              " <br/>\n    <strong>Daily average volume by insurance vertical and lead type: </strong> "
            )
            .concat(
              e.volume,
              " <br/>\n    <strong>Call center detail: </strong> "
            )
            .concat(
              e.canswer,
              " <br/>\n    <strong>Majority of your sources: </strong> "
            )
            .concat(
              e.radiooption3,
              " <br/>\n    <strong>Changes to your sources: </strong> "
            )
            .concat(
              e.radiooption4,
              " <br/>\n    <strong>General pricing range by lead type: </strong> "
            )
            .concat(
              e.lanswer,
              " <br/>\n    <strong>Api key for data posting: </strong> "
            )
            .concat(
              e.radiooption5,
              " <br/>\n    <strong>Routing system/softwre(s): </strong> "
            )
            .concat(e.sanswer, " <br/>\n    <strong>Filter calls: </strong> ")
            .concat(
              e.ganswer,
              " <br/>\n    <strong>Specified amount of calls by day and/or hour : </strong> "
            )
            .concat(
              e.danswer,
              " <br/>\n    <strong>Majority of your traffic: </strong> "
            )
            .concat(
              e.uanswer,
              " <br/>\n    <strong>Jornaya or Trusted: </strong> "
            )
            .concat(e.radiooption6, " ")
            .concat(
              e.others3,
              " <br/>\n    <strong>Additional Comments: </strong> "
            )
            .concat(e.comments, "\n"),
        eZ = (e) =>
          '\n    <img src="https://images.ctfassets.net/vr7x4vru4gls/7jsdaiHlxfZvNlRcxtuXXw/80b01324683fa841714ce8e42436345e/SelectQuote_Logo.jpg" width="250"><br/><br/>\n    '
            .concat(
              e.firstName,
              ", <br/><br/>\n    Thank you for sharing your interest in partnering with SelectQuote. A member of our team will be in touch shortly. Below is a copy of your submission.<br/><br/>\n    <strong>Name:</strong> "
            )
            .concat(e.firstName, " ")
            .concat(e.lastName, "<br/>\n    <strong>Company Name:</strong> ")
            .concat(e.companyName, " <br/>\n    <strong>Title: </strong> ")
            .concat(e.title, "<br/>\n    <strong>Email: </strong> ")
            .concat(e.email, "<br/>\n    <strong>Phone: </strong> ")
            .concat(
              null == e ? void 0 : e.phoneNumber,
              " <br/>\n    <strong>Company location: </strong> "
            )
            .concat(e.city, " , ")
            .concat(e.state, "<br/>\n    <strong>Company employees: </strong> ")
            .concat(
              e.radiooption,
              "<br/>\n    <strong>Company insurance coverage: </strong> "
            )
            .concat(e.radiooption1, " ")
            .concat(
              e.others,
              "<br/>\n    <strong>Company Acord Certificate: </strong> "
            )
            .concat(e.radiooption2, " ")
            .concat(
              e.others1,
              " <br/>\n    <strong>Insurance verticals call: </strong> "
            )
            .concat(e.insuranceverticals, " ")
            .concat(
              e.checkboxinput,
              " <br/>\n    <strong>Currently lead type(s) offer: </strong> "
            )
            .concat(e.leadtype, " ")
            .concat(
              e.checkboxinput1,
              " <br/>\n    <strong>Primary sources leads: </strong> "
            )
            .concat(e.primarysources, " ")
            .concat(
              e.checkboxinput2,
              " <br/>\n    <strong>Daily average volume by insurance vertical and lead type: </strong> "
            )
            .concat(
              e.volume,
              " <br/>\n    <strong>Call center detail: </strong> "
            )
            .concat(
              e.canswer,
              " <br/>\n    <strong>Majority of your sources: </strong> "
            )
            .concat(
              e.radiooption3,
              " <br/>\n    <strong>Changes to your sources: </strong> "
            )
            .concat(
              e.radiooption4,
              " <br/>\n    <strong>General pricing range by lead type: </strong> "
            )
            .concat(
              e.lanswer,
              " <br/>\n    <strong>Api key for data posting: </strong> "
            )
            .concat(
              e.radiooption5,
              " <br/>\n    <strong>Routing system/softwre(s): </strong> "
            )
            .concat(e.sanswer, " <br/>\n    <strong>Filter calls: </strong> ")
            .concat(
              e.ganswer,
              " <br/>\n    <strong>Specified amount of calls by day and/or hour : </strong> "
            )
            .concat(
              e.danswer,
              " <br/>\n    <strong>Majority of your traffic: </strong> "
            )
            .concat(
              e.uanswer,
              " <br/>\n    <strong>Jornaya or Trusted: </strong> "
            )
            .concat(e.radiooption6, " ")
            .concat(
              e.others3,
              " <br/>\n    <strong>Additional Comments: </strong> "
            )
            .concat(e.comments, "\n");
      var eW = i(3888),
        eV = () => {
          let [e, l] = (0, o.useState)(!1),
            [i, n] = (0, o.useState)(""),
            [a, s] = (0, o.useState)(!1),
            [t, d] = (0, o.useState)(null),
            [c, m] = (0, o.useState)(void 0),
            [v, p] = (0, o.useState)(void 0),
            [x, f] = (0, o.useState)(void 0),
            [j, b] = (0, o.useState)(null),
            y = (0, G.useRouter)(),
            { deviceSize: N } = (0, g.b)();
          (0, o.useEffect)(() => {
            let e = eH.V1.getItem("partnerShipModel");
            (null == e ? void 0 : e.firstName) || y.push("/partnerships");
          }, [x]);
          let {
              control: w,
              handleSubmit: S,
              reset: k,
              getValues: M,
            } = (0, eq.cI)({ resolver: (0, e_.X)(eE) }),
            C = async (e) => {
              let n = eH.V1.getItem("partnerShipModel"),
                a = { ...n, ...e };
              try {
                let n = await eR.v.sendPartnership({
                    toEmail: a.email,
                    fromEmail: "donotreply@selectquote.com",
                    subject: "Thank you for contacting SelectQuote",
                    body: eB(a),
                    attachment: i,
                    ...e,
                  }),
                  s = await eR.v.sendPartnership({
                    toEmail: "partnerships@selectquote.com",
                    fromEmail: "donotreply@selectquote.com",
                    subject: "SelectQuote Partnerships Inquiry",
                    attachment: i,
                    body: eZ(a),
                    ...e,
                  });
                200 === n.status &&
                  200 === s.status &&
                  (l(!0),
                  (function () {
                    let e = window.pageYOffset,
                      l = 0 - e,
                      i = null;
                    requestAnimationFrame(function n(a) {
                      var s;
                      null === i && (i = a);
                      let t = a - i,
                        r =
                          (s = t / 250) < 1
                            ? (l / 2) * s * s + e
                            : (-l / 2) * (--s * (s - 2) - 1) + e;
                      window.scrollTo(0, r),
                        t < 500 && requestAnimationFrame(n);
                    });
                  })()),
                  await eR.v.deleteImg(i);
              } catch (e) {
                console.log(e);
              }
              eH.V1.clear();
            },
            I = async (e) => {
              let l = e[0];
              if (l.size <= 15e5) d(l);
              else {
                alert("File size must be less than 1.5 MB");
                return;
              }
              let a = null == l ? void 0 : l.name;
              b(a), s(!0);
              try {
                let l = new FormData();
                i.length && (await eR.v.deleteImg(i), n("")),
                  l.append("img", e[0]);
                let {
                  data: { filepath: a },
                } = await eR.v.uploadImg(l);
                n(a);
              } catch (e) {
                console.log(e);
              }
              s(!1);
            };
          return (0, r.jsx)("div", {
            className: "partnership-form-detail",
            children: (0, r.jsx)("form", {
              noValidate: !0,
              autoComplete: "off",
              onSubmit: S(C),
              children: e
                ? (0, r.jsx)("div", {
                    className: "mb-120",
                    children: (0, r.jsx)("p", {
                      className: "grey",
                      children:
                        "Thank you for sharing your interest in partnering with SelectQuote. A member of our team will be in touch shortly.",
                    }),
                  })
                : (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)("div", {
                        className: "row",
                        children: (0, r.jsx)("span", {
                          children:
                            "Please fill out the questions below to submit your interest in partnering with SelectQuote.",
                        }),
                      }),
                      (0, r.jsxs)("div", {
                        className: "row mt-100",
                        children: [
                          (0, r.jsx)("label", {
                            className: "form-label grey mb-30",
                            children: (0, r.jsxs)("b", {
                              children: [
                                "Where is this company located? ",
                                (0, r.jsx)("span", {
                                  className: "text-danger",
                                  children: "*",
                                }),
                              ],
                            }),
                          }),
                          (0, r.jsx)("div", {
                            className: "comapny-located",
                            children: (0, r.jsx)(eA, {
                              control: w,
                              name: "city",
                              placeholder: "City ",
                            }),
                          }),
                          (0, r.jsx)("div", {
                            className: "comapny-located",
                            children: (0, r.jsx)(eA, {
                              control: w,
                              name: "state",
                              placeholder: "State ",
                            }),
                          }),
                        ],
                      }),
                      (0, r.jsx)("div", {
                        className: "row top-space",
                        children: (0, r.jsxs)("div", {
                          className: "col",
                          children: [
                            (0, r.jsx)("label", {
                              className: "form-label grey mb-15",
                              children: (0, r.jsxs)("b", {
                                children: [
                                  "How many employees does your company have? ",
                                  (0, r.jsx)("span", {
                                    className: "text-danger",
                                    children: "*",
                                  }),
                                ],
                              }),
                            }),
                            (0, r.jsxs)("ul", {
                              className: "custom-radio employees-section",
                              children: [
                                (0, r.jsx)("li", {
                                  className: "radio-list",
                                  children: (0, r.jsx)(eq.Qr, {
                                    name: "radiooption",
                                    control: w,
                                    render: (e) => {
                                      let {
                                        field: { onChange: l, value: i },
                                        fieldState: { error: n, isDirty: a },
                                      } = e;
                                      return (0, r.jsxs)(r.Fragment, {
                                        children: [
                                          (0, r.jsxs)("div", {
                                            children: [
                                              (0, r.jsx)("input", {
                                                type: "radio",
                                                onChange: l,
                                                value: "1-25",
                                                name: "radioOption",
                                                id: "radioOption",
                                              }),
                                              (0, r.jsx)("label", {
                                                className: "grey radius-30",
                                                htmlFor: "radioOption",
                                                children: "1-25",
                                              }),
                                            ],
                                          }),
                                          n &&
                                            (0, r.jsx)("span", {
                                              className: "error",
                                              style: {
                                                marginTop: (0, h.sD)(N)
                                                  ? "50px"
                                                  : "120px",
                                              },
                                              children:
                                                "Please select an option",
                                            }),
                                        ],
                                      });
                                    },
                                  }),
                                }),
                                (0, r.jsx)("li", {
                                  className: "radio-list",
                                  children: (0, r.jsx)(eq.Qr, {
                                    name: "radiooption",
                                    control: w,
                                    rules: { required: !0 },
                                    render: (e) => {
                                      let {
                                        field: { onChange: l, value: i },
                                        fieldState: { error: n, isDirty: a },
                                      } = e;
                                      return (0, r.jsxs)(r.Fragment, {
                                        children: [
                                          (0, r.jsx)("input", {
                                            type: "radio",
                                            onChange: l,
                                            value: "26-50",
                                            name: "radioOption",
                                            id: "radioOption2",
                                          }),
                                          (0, r.jsx)("label", {
                                            className: "grey radius-30",
                                            htmlFor: "radioOption2",
                                            children: "26-50",
                                          }),
                                        ],
                                      });
                                    },
                                  }),
                                }),
                                (0, r.jsx)("li", {
                                  className: "radio-list",
                                  children: (0, r.jsx)(eq.Qr, {
                                    name: "radiooption",
                                    control: w,
                                    render: (e) => {
                                      let {
                                        field: { onChange: l, value: i },
                                        fieldState: { error: n, isDirty: a },
                                      } = e;
                                      return (0, r.jsxs)(r.Fragment, {
                                        children: [
                                          (0, r.jsx)("input", {
                                            type: "radio",
                                            onChange: l,
                                            value: "51-100",
                                            name: "radioOption",
                                            id: "radioOption3",
                                          }),
                                          (0, r.jsx)("label", {
                                            className: "grey radius-30",
                                            htmlFor: "radioOption3",
                                            children: "51-100",
                                          }),
                                        ],
                                      });
                                    },
                                  }),
                                }),
                                (0, r.jsx)("li", {
                                  className: "radio-list",
                                  children: (0, r.jsx)(eq.Qr, {
                                    name: "radiooption",
                                    control: w,
                                    render: (e) => {
                                      let {
                                        field: { onChange: l, value: i },
                                        fieldState: { error: n, isDirty: a },
                                      } = e;
                                      return (0, r.jsxs)(r.Fragment, {
                                        children: [
                                          (0, r.jsx)("input", {
                                            type: "radio",
                                            onChange: l,
                                            value: "100 or more",
                                            name: "radioOption",
                                            id: "radioOption4",
                                          }),
                                          (0, r.jsx)("label", {
                                            className: "grey radius-30",
                                            htmlFor: "radioOption4",
                                            children: "100 or more",
                                          }),
                                        ],
                                      });
                                    },
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, r.jsxs)("div", {
                        className: "row top-space",
                        children: [
                          (0, r.jsxs)("div", {
                            className: "col",
                            children: [
                              (0, r.jsx)("label", {
                                className: "form-label grey mb-15",
                                children: (0, r.jsxs)("b", {
                                  children: [
                                    "Does your company have insurance coverage? ",
                                    (0, r.jsx)("span", {
                                      className: "text-danger",
                                      children: "*",
                                    }),
                                  ],
                                }),
                              }),
                              (0, r.jsxs)("ul", {
                                className: "custom-radio",
                                children: [
                                  (0, r.jsx)("li", {
                                    className: "radio-list",
                                    children: (0, r.jsx)(eq.Qr, {
                                      name: "radiooption1",
                                      control: w,
                                      render: (e) => {
                                        let {
                                          field: { onChange: l, value: i },
                                          fieldState: { error: n, isDirty: a },
                                        } = e;
                                        return (0, r.jsxs)(r.Fragment, {
                                          children: [
                                            (0, r.jsx)("input", {
                                              type: "radio",
                                              checked: "Yes" === c,
                                              onChange: (e) => {
                                                l(e), m(e.target.value);
                                              },
                                              value: "Yes",
                                              name: "radioOption1",
                                              id: "radioOption5",
                                            }),
                                            (0, r.jsx)("label", {
                                              className: "grey radius-30",
                                              htmlFor: "radioOption5",
                                              children: "Yes",
                                            }),
                                            n &&
                                              (0, r.jsx)("span", {
                                                className: "mt-40 error",
                                                style: { marginTop: "50px" },
                                                children:
                                                  "Please select an option",
                                              }),
                                          ],
                                        });
                                      },
                                    }),
                                  }),
                                  (0, r.jsx)("li", {
                                    className: "radio-list",
                                    children: (0, r.jsx)(eq.Qr, {
                                      name: "radiooption1",
                                      control: w,
                                      render: (e) => {
                                        let {
                                          field: { onChange: l, value: i },
                                          fieldState: { error: n, isDirty: a },
                                        } = e;
                                        return (0, r.jsxs)(r.Fragment, {
                                          children: [
                                            (0, r.jsx)("input", {
                                              type: "radio",
                                              checked: "No" === c,
                                              onChange: (e) => {
                                                l(e), m(e.target.value);
                                              },
                                              value: "No",
                                              name: "radioOption1",
                                              id: "radioOption6",
                                            }),
                                            (0, r.jsx)("label", {
                                              className: "grey radius-30",
                                              htmlFor: "radioOption6",
                                              children: "No",
                                            }),
                                          ],
                                        });
                                      },
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, r.jsxs)("div", {
                            className: "mt-4 other-field",
                            children: [
                              (0, r.jsx)("ul", {
                                className: "custom-radio mt-0 p-0",
                                children: (0, r.jsx)("li", {
                                  className: "radio-list",
                                  children: (0, r.jsx)(eq.Qr, {
                                    name: "radiooption1",
                                    control: w,
                                    render: (e) => {
                                      let {
                                        field: { onChange: l, value: i },
                                        fieldState: { error: n, isDirty: a },
                                      } = e;
                                      return (0, r.jsxs)(r.Fragment, {
                                        children: [
                                          (0, r.jsx)("input", {
                                            type: "radio",
                                            checked: "Others" === c,
                                            onChange: (e) => {
                                              l(e), m(e.target.value);
                                            },
                                            value: "Others",
                                            name: "radioOptionOther",
                                            id: "radioOption7",
                                          }),
                                          (0, r.jsx)("label", {
                                            className: "grey radius-30",
                                            htmlFor: "radioOption7",
                                            children: "Other",
                                          }),
                                        ],
                                      });
                                    },
                                  }),
                                }),
                              }),
                              (0, r.jsx)(eA, {
                                placeholder: "Enter text here",
                                control: w,
                                border: "none",
                                outline: "none",
                                name: "others",
                                width: "101.2%",
                                height: "50px",
                                defaultValue: "",
                                disabled: "Others" !== c,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className: "row ".concat(
                          (0, h.sD)(N) ? "top-space" : "mt-55",
                          " \n                  "
                        ),
                        children: [
                          (0, r.jsxs)("div", {
                            className: "col",
                            children: [
                              (0, r.jsxs)("label", {
                                className: "form-label grey  mb-15",
                                children: [
                                  (0, r.jsx)("b", {
                                    children:
                                      "Can your company provide an Acord Certificate?",
                                  }),
                                  "(General Liability, Erros & Omissions, and/ or Cyber Protection)",
                                  (0, r.jsxs)("b", {
                                    children: [
                                      " ",
                                      (0, r.jsx)("span", {
                                        className: "text-danger",
                                        children: "*",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, r.jsxs)("ul", {
                                className: "custom-radio",
                                children: [
                                  (0, r.jsx)("li", {
                                    className: "radio-list",
                                    children: (0, r.jsx)(eq.Qr, {
                                      name: "radiooption2",
                                      control: w,
                                      render: (e) => {
                                        let {
                                          field: { onChange: l, value: i },
                                          fieldState: { error: n, isDirty: a },
                                        } = e;
                                        return (0, r.jsxs)(r.Fragment, {
                                          children: [
                                            (0, r.jsx)("input", {
                                              type: "radio",
                                              checked: "Yes" === v,
                                              onChange: (e) => {
                                                l(e), p(e.target.value);
                                              },
                                              value: "Yes",
                                              name: "radioOption2",
                                              id: "radioOption8",
                                            }),
                                            (0, r.jsx)("label", {
                                              className: "grey radius-30",
                                              htmlFor: "radioOption8",
                                              children: "Yes",
                                            }),
                                            n &&
                                              (0, r.jsx)("span", {
                                                className: "mt-40 error",
                                                style: { marginTop: "50px" },
                                                children:
                                                  "Please select an option",
                                              }),
                                          ],
                                        });
                                      },
                                    }),
                                  }),
                                  (0, r.jsx)("li", {
                                    className: "radio-list",
                                    children: (0, r.jsx)(eq.Qr, {
                                      name: "radiooption2",
                                      control: w,
                                      render: (e) => {
                                        let {
                                          field: { onChange: l, value: i },
                                          fieldState: { error: n, isDirty: a },
                                        } = e;
                                        return (0, r.jsxs)(r.Fragment, {
                                          children: [
                                            (0, r.jsx)("input", {
                                              type: "radio",
                                              checked: "No" === v,
                                              onChange: (e) => {
                                                l(e), p(e.target.value);
                                              },
                                              value: "No",
                                              name: "radioOption2",
                                              id: "radioOption9",
                                            }),
                                            (0, r.jsx)("label", {
                                              className: "grey radius-30",
                                              htmlFor: "radioOption9",
                                              children: "No",
                                            }),
                                          ],
                                        });
                                      },
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, r.jsxs)("div", {
                            className: "mt-4 other-field",
                            children: [
                              (0, r.jsx)("ul", {
                                className: "custom-radio mt-0 p-0",
                                children: (0, r.jsx)("li", {
                                  className: "radio-list",
                                  children: (0, r.jsx)(eq.Qr, {
                                    name: "radiooption2",
                                    control: w,
                                    render: (e) => {
                                      let {
                                        field: { onChange: l, value: i },
                                        fieldState: { error: n, isDirty: a },
                                      } = e;
                                      return (0, r.jsxs)(r.Fragment, {
                                        children: [
                                          (0, r.jsx)("input", {
                                            type: "radio",
                                            checked: "Others1" === v,
                                            onChange: (e) => {
                                              l(e), p(e.target.value);
                                            },
                                            value: "Others1",
                                            name: "radioOptionOther2",
                                            id: "radioOption10",
                                          }),
                                          (0, r.jsx)("label", {
                                            className: "grey radius-30",
                                            htmlFor: "radioOption10",
                                            children: "Other",
                                          }),
                                        ],
                                      });
                                    },
                                  }),
                                }),
                              }),
                              (0, r.jsx)(eA, {
                                placeholder: "Enter text here",
                                control: w,
                                border: "none",
                                outline: "none",
                                name: "others1",
                                width: "101.2%",
                                defaultValue: "",
                                disabled: "Others1" !== v,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className: "row ".concat(
                          (0, h.sD)(N) ? "top-space" : "mt-55",
                          " \n                  "
                        ),
                        children: [
                          (0, r.jsxs)("label", {
                            className: "form-label grey ".concat(
                              (0, h.sD)(N) ? "mb-0" : "mb-30",
                              " \n                  "
                            ),
                            children: [
                              (0, r.jsx)("b", {
                                children:
                                  "What insurance verticals are you selling call/leads in?",
                              }),
                              " ",
                              "(Select all that apply)",
                              (0, r.jsxs)("b", {
                                children: [
                                  " ",
                                  (0, r.jsx)("span", {
                                    className: "text-danger",
                                    children: "*",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, r.jsxs)("div", {
                            className: "checkbox-list relative",
                            children: [
                              (0, r.jsxs)("div", {
                                className: "check-list",
                                children: [
                                  (0, r.jsxs)("label", {
                                    htmlFor: "checkbox1",
                                    children: [
                                      (0, r.jsx)(eq.Qr, {
                                        control: w,
                                        name: "insuranceverticals",
                                        render: (e) => {
                                          let {
                                            field: l,
                                            fieldState: {
                                              error: i,
                                              isDirty: n,
                                            },
                                          } = e;
                                          return (0, r.jsxs)(r.Fragment, {
                                            children: [
                                              (0, r.jsx)("input", {
                                                ...l,
                                                type: "checkbox",
                                                value: "Medicare",
                                                name: "insuranceverticals",
                                                onChange: (e) => {
                                                  let i =
                                                      M().insuranceverticals ||
                                                      [],
                                                    n =
                                                      null == i
                                                        ? void 0
                                                        : i.indexOf(0);
                                                  e.target.checked
                                                    ? i.push("Medicare")
                                                    : i.splice(n, 1),
                                                    l.onChange(i);
                                                },
                                              }),
                                              i &&
                                                (0, r.jsx)("span", {
                                                  className: "left-10 error",
                                                  style: {
                                                    marginTop: (0, h.sD)(N)
                                                      ? "180px"
                                                      : "240px",
                                                  },
                                                  children:
                                                    "Please select an option",
                                                }),
                                            ],
                                          });
                                        },
                                      }),
                                      "Medicare",
                                    ],
                                  }),
                                  (0, r.jsx)(eq.Qr, {
                                    control: w,
                                    name: "insuranceverticals",
                                    render: (e) => {
                                      let { field: l, formState: i } = e;
                                      return (0, r.jsxs)("label", {
                                        children: [
                                          (0, r.jsx)("input", {
                                            ...l,
                                            type: "checkbox",
                                            value: "FE",
                                            onChange: (e) => {
                                              let i =
                                                  M().insuranceverticals || [],
                                                n =
                                                  null == i
                                                    ? void 0
                                                    : i.indexOf(1);
                                              e.target.checked
                                                ? i.push("FE")
                                                : i.splice(n, 1),
                                                l.onChange(i);
                                            },
                                          }),
                                          "FE",
                                        ],
                                      });
                                    },
                                  }),
                                  (0, r.jsx)(eq.Qr, {
                                    control: w,
                                    name: "insuranceverticals",
                                    render: (e) => {
                                      let { field: l, formState: i } = e;
                                      return (0, r.jsxs)("label", {
                                        children: [
                                          (0, r.jsx)("input", {
                                            ...l,
                                            type: "checkbox",
                                            value: "Term",
                                            onChange: (e) => {
                                              let i =
                                                  M().insuranceverticals || [],
                                                n =
                                                  null == i
                                                    ? void 0
                                                    : i.indexOf(2);
                                              e.target.checked
                                                ? i.push("Term")
                                                : i.splice(n, 1),
                                                l.onChange(i);
                                            },
                                          }),
                                          "Term",
                                        ],
                                      });
                                    },
                                  }),
                                ],
                              }),
                              (0, r.jsxs)("div", {
                                className: "check-list",
                                children: [
                                  (0, r.jsx)(eq.Qr, {
                                    control: w,
                                    name: "insuranceverticals",
                                    render: (e) => {
                                      let { field: l, formState: i } = e;
                                      return (0, r.jsxs)("label", {
                                        children: [
                                          (0, r.jsx)("input", {
                                            ...l,
                                            type: "checkbox",
                                            value: "Home",
                                            onChange: (e) => {
                                              let i =
                                                  M().insuranceverticals || [],
                                                n =
                                                  null == i
                                                    ? void 0
                                                    : i.indexOf(3);
                                              e.target.checked
                                                ? i.push("Home")
                                                : i.splice(n, 1),
                                                l.onChange(i);
                                            },
                                          }),
                                          "Home",
                                        ],
                                      });
                                    },
                                  }),
                                  (0, r.jsx)(eq.Qr, {
                                    control: w,
                                    name: "insuranceverticals",
                                    render: (e) => {
                                      let { field: l, formState: i } = e;
                                      return (0, r.jsxs)("label", {
                                        children: [
                                          (0, r.jsx)("input", {
                                            ...l,
                                            type: "checkbox",
                                            value: "Auto",
                                            onChange: (e) => {
                                              let i =
                                                  M().insuranceverticals || [],
                                                n =
                                                  null == i
                                                    ? void 0
                                                    : i.indexOf(4);
                                              e.target.checked
                                                ? i.push("Auto")
                                                : i.splice(n, 1),
                                                l.onChange(i);
                                            },
                                          }),
                                          "Auto",
                                        ],
                                      });
                                    },
                                  }),
                                ],
                              }),
                              (0, r.jsx)("div", {
                                className: "check-list",
                                children: (0, r.jsx)(eq.Qr, {
                                  control: w,
                                  name: "insuranceverticals",
                                  render: (e) => {
                                    let { field: l, formState: i } = e;
                                    return (0, r.jsxs)(r.Fragment, {
                                      children: [
                                        (0, r.jsxs)("label", {
                                          children: [
                                            (0, r.jsx)("input", {
                                              ...l,
                                              type: "checkbox",
                                              value: "",
                                              onChange: (e) => {
                                                let i =
                                                    M().insuranceverticals ||
                                                    [],
                                                  n =
                                                    null == i
                                                      ? void 0
                                                      : i.indexOf("Auto1");
                                                e.target.checked
                                                  ? i.push("Auto1")
                                                  : i.splice(n, 1),
                                                  l.onChange(i);
                                              },
                                            }),
                                            "Other",
                                          ],
                                        }),
                                        (0, r.jsx)(eA, {
                                          control: w,
                                          name: "checkboxinput",
                                          className: "other-line-input",
                                        }),
                                      ],
                                    });
                                  },
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className: "row top-space",
                        children: [
                          (0, r.jsx)("label", {
                            className: "form-label grey ".concat(
                              (0, h.sD)(N) ? "mb-0" : "mb-30",
                              " \n                  "
                            ),
                            children: (0, r.jsxs)("b", {
                              children: [
                                "What lead type(s) do you currently offer? ",
                                (0, r.jsx)("span", {
                                  className: "text-danger",
                                  children: "*",
                                }),
                              ],
                            }),
                          }),
                          (0, r.jsxs)("div", {
                            className: "checkbox-list relative",
                            children: [
                              (0, r.jsxs)("div", {
                                className: "check-list",
                                children: [
                                  (0, r.jsx)("label", {
                                    children: (0, r.jsx)(eq.Qr, {
                                      control: w,
                                      name: "leadtype",
                                      render: (e) => {
                                        let {
                                          field: l,
                                          fieldState: { error: i, isDirty: n },
                                        } = e;
                                        return (0, r.jsxs)(r.Fragment, {
                                          children: [
                                            (0, r.jsx)("input", {
                                              ...l,
                                              type: "checkbox",
                                              value: "Transfers",
                                              onChange: (e) => {
                                                let i = M().leadtype || [],
                                                  n =
                                                    null == i
                                                      ? void 0
                                                      : i.indexOf(0);
                                                e.target.checked
                                                  ? i.push("Transfers")
                                                  : i.splice(n, 1),
                                                  l.onChange(i);
                                              },
                                            }),
                                            "Transfers",
                                            i &&
                                              (0, r.jsx)("span", {
                                                className: "left-10 error",
                                                style: {
                                                  marginTop: (0, h.sD)(N)
                                                    ? "110px"
                                                    : "200px",
                                                },
                                                children:
                                                  "Please select an option",
                                              }),
                                          ],
                                        });
                                      },
                                    }),
                                  }),
                                  (0, r.jsx)(eq.Qr, {
                                    control: w,
                                    name: "leadtype",
                                    render: (e) => {
                                      let { field: l, formState: i } = e;
                                      return (0, r.jsxs)("label", {
                                        children: [
                                          (0, r.jsx)("input", {
                                            ...l,
                                            type: "checkbox",
                                            value: "Inbounds",
                                            onChange: (e) => {
                                              let i = M().leadtype || [],
                                                n =
                                                  null == i
                                                    ? void 0
                                                    : i.indexOf(1);
                                              e.target.checked
                                                ? i.push("Inbounds")
                                                : i.splice(n, 1),
                                                l.onChange(i);
                                            },
                                          }),
                                          "Inbounds",
                                        ],
                                      });
                                    },
                                  }),
                                  (0, r.jsx)(eq.Qr, {
                                    control: w,
                                    name: "leadtype",
                                    render: (e) => {
                                      let { field: l, formState: i } = e;
                                      return (0, r.jsxs)("label", {
                                        children: [
                                          (0, r.jsx)("input", {
                                            ...l,
                                            type: "checkbox",
                                            value: "Data",
                                            onChange: (e) => {
                                              let i = M().leadtype || [],
                                                n =
                                                  null == i
                                                    ? void 0
                                                    : i.indexOf(2);
                                              e.target.checked
                                                ? i.push("Data")
                                                : i.splice(n, 1),
                                                l.onChange(i);
                                            },
                                          }),
                                          "Data",
                                        ],
                                      });
                                    },
                                  }),
                                  (0, r.jsx)(eq.Qr, {
                                    control: w,
                                    name: "leadtype",
                                    render: (e) => {
                                      let { field: l, formState: i } = e;
                                      return (0, r.jsxs)("label", {
                                        children: [
                                          (0, r.jsx)("input", {
                                            ...l,
                                            type: "checkbox",
                                            value: "Clicks",
                                            onChange: (e) => {
                                              let i = M().leadtype || [],
                                                n =
                                                  null == i
                                                    ? void 0
                                                    : i.indexOf(3);
                                              e.target.checked
                                                ? i.push("Data")
                                                : i.splice(n, 1),
                                                l.onChange(i);
                                            },
                                          }),
                                          "Clicks",
                                        ],
                                      });
                                    },
                                  }),
                                ],
                              }),
                              (0, r.jsx)("div", {
                                className: "check-list",
                                children: (0, r.jsx)(eq.Qr, {
                                  control: w,
                                  name: "leadtype",
                                  render: (e) => {
                                    let { field: l, formState: i } = e;
                                    return (0, r.jsxs)(r.Fragment, {
                                      children: [
                                        (0, r.jsxs)("label", {
                                          children: [
                                            (0, r.jsx)("input", {
                                              ...l,
                                              type: "checkbox",
                                              value: "",
                                              onChange: (e) => {
                                                let i = M().leadtype || [],
                                                  n =
                                                    null == i
                                                      ? void 0
                                                      : i.indexOf("Auto");
                                                e.target.checked
                                                  ? i.push("Auto")
                                                  : i.splice(n, 1),
                                                  l.onChange(i);
                                              },
                                            }),
                                            "Other",
                                          ],
                                        }),
                                        (0, r.jsx)(eA, {
                                          control: w,
                                          name: "checkboxinput1",
                                          className: "other-line-input",
                                        }),
                                      ],
                                    });
                                  },
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className: "row top-space",
                        children: [
                          (0, r.jsx)("label", {
                            className: "form-label grey ".concat(
                              (0, h.sD)(N) ? "mb-0" : "mb-30",
                              " \n                  "
                            ),
                            children: (0, r.jsxs)("b", {
                              children: [
                                "What are the primary sources of these leads? ",
                                (0, r.jsx)("span", {
                                  className: "text-danger",
                                  children: "*",
                                }),
                              ],
                            }),
                          }),
                          (0, r.jsxs)("div", {
                            className: "checkbox-list relative",
                            children: [
                              (0, r.jsxs)("div", {
                                className: "check-list",
                                children: [
                                  (0, r.jsxs)("label", {
                                    children: [
                                      (0, r.jsx)(eq.Qr, {
                                        control: w,
                                        name: "primarysources",
                                        render: (e) => {
                                          let {
                                            field: l,
                                            fieldState: {
                                              error: i,
                                              isDirty: n,
                                            },
                                          } = e;
                                          return (0, r.jsxs)(r.Fragment, {
                                            children: [
                                              (0, r.jsx)("input", {
                                                ...l,
                                                type: "checkbox",
                                                value: "Websites",
                                                onChange: (e) => {
                                                  let i =
                                                      M().primarysources || [],
                                                    n =
                                                      null == i
                                                        ? void 0
                                                        : i.indexOf(0);
                                                  e.target.checked
                                                    ? i.push("Websites")
                                                    : i.splice(n, 1),
                                                    l.onChange(i);
                                                },
                                              }),
                                              i &&
                                                (0, r.jsx)("span", {
                                                  className: "left-10 error",
                                                  style: {
                                                    marginTop: (0, h.sD)(N)
                                                      ? "180px"
                                                      : "280px",
                                                  },
                                                  children:
                                                    "Please select an option",
                                                }),
                                            ],
                                          });
                                        },
                                      }),
                                      "Websites",
                                    ],
                                  }),
                                  (0, r.jsx)(eq.Qr, {
                                    control: w,
                                    name: "primarysources",
                                    render: (e) => {
                                      let { field: l, formState: i } = e;
                                      return (0, r.jsxs)("label", {
                                        children: [
                                          (0, r.jsx)("input", {
                                            ...l,
                                            type: "checkbox",
                                            value: "Tv",
                                            onChange: (e) => {
                                              let i = M().primarysources || [],
                                                n =
                                                  null == i
                                                    ? void 0
                                                    : i.indexOf(1);
                                              e.target.checked
                                                ? i.push("Tv")
                                                : i.splice(n, 1),
                                                l.onChange(i);
                                            },
                                          }),
                                          "TV",
                                        ],
                                      });
                                    },
                                  }),
                                  (0, r.jsx)(eq.Qr, {
                                    control: w,
                                    name: "primarysources",
                                    render: (e) => {
                                      let { field: l, formState: i } = e;
                                      return (0, r.jsxs)("label", {
                                        children: [
                                          (0, r.jsx)("input", {
                                            ...l,
                                            type: "checkbox",
                                            value: "Radio",
                                            onChange: (e) => {
                                              let i = M().primarysources || [],
                                                n =
                                                  null == i
                                                    ? void 0
                                                    : i.indexOf(2);
                                              e.target.checked
                                                ? i.push("Radio")
                                                : i.splice(n, 1),
                                                l.onChange(i);
                                            },
                                          }),
                                          "Radio",
                                        ],
                                      });
                                    },
                                  }),
                                  (0, r.jsx)(eq.Qr, {
                                    control: w,
                                    name: "primarysources",
                                    render: (e) => {
                                      let { field: l, formState: i } = e;
                                      return (0, r.jsxs)("label", {
                                        children: [
                                          (0, r.jsx)("input", {
                                            ...l,
                                            type: "checkbox",
                                            value: "Direct Mail",
                                            onChange: (e) => {
                                              let i = M().primarysources || [],
                                                n =
                                                  null == i
                                                    ? void 0
                                                    : i.indexOf(3);
                                              e.target.checked
                                                ? i.push("Direct Mail")
                                                : i.splice(n, 1),
                                                l.onChange(i);
                                            },
                                          }),
                                          "Direct Mail",
                                        ],
                                      });
                                    },
                                  }),
                                ],
                              }),
                              (0, r.jsxs)("div", {
                                className: "check-list primary-leads",
                                children: [
                                  (0, r.jsx)(eq.Qr, {
                                    control: w,
                                    name: "primarysources",
                                    render: (e) => {
                                      let { field: l, formState: i } = e;
                                      return (0, r.jsxs)("label", {
                                        children: [
                                          (0, r.jsx)("input", {
                                            ...l,
                                            type: "checkbox",
                                            value: "Social",
                                            onChange: (e) => {
                                              let i = M().primarysources || [],
                                                n =
                                                  null == i
                                                    ? void 0
                                                    : i.indexOf(4);
                                              e.target.checked
                                                ? i.push("Social")
                                                : i.splice(n, 1),
                                                l.onChange(i);
                                            },
                                          }),
                                          "Social",
                                        ],
                                      });
                                    },
                                  }),
                                  (0, r.jsx)(eq.Qr, {
                                    control: w,
                                    name: "primarysources",
                                    render: (e) => {
                                      let { field: l, formState: i } = e;
                                      return (0, r.jsxs)("label", {
                                        children: [
                                          (0, r.jsx)("input", {
                                            ...l,
                                            type: "checkbox",
                                            value: "Data",
                                            onChange: (e) => {
                                              let i = M().primarysources || [],
                                                n =
                                                  null == i
                                                    ? void 0
                                                    : i.indexOf(5);
                                              e.target.checked
                                                ? i.push("Data")
                                                : i.splice(n, 1),
                                                l.onChange(i);
                                            },
                                          }),
                                          "Data",
                                        ],
                                      });
                                    },
                                  }),
                                ],
                              }),
                              (0, r.jsx)("div", {
                                className: "check-list",
                                children: (0, r.jsx)(eq.Qr, {
                                  control: w,
                                  name: "primarysources",
                                  render: (e) => {
                                    let { field: l, formState: i } = e;
                                    return (0, r.jsxs)(r.Fragment, {
                                      children: [
                                        (0, r.jsxs)("label", {
                                          children: [
                                            (0, r.jsx)("input", {
                                              ...l,
                                              type: "checkbox",
                                              value: "",
                                              onChange: (e) => {
                                                let i =
                                                    M().primarysources || [],
                                                  n =
                                                    null == i
                                                      ? void 0
                                                      : i.indexOf(4);
                                                e.target.checked
                                                  ? i.push("Auto")
                                                  : i.splice(n, 1),
                                                  l.onChange(i);
                                              },
                                            }),
                                            "Other",
                                          ],
                                        }),
                                        (0, r.jsx)(eA, {
                                          control: w,
                                          name: "checkboxinput2",
                                          className: "other-line-input",
                                        }),
                                      ],
                                    });
                                  },
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className: "row top-space large-input",
                        children: [
                          (0, r.jsx)("label", {
                            className: "form-label grey ".concat(
                              (0, h.sD)(N) ? "mb-30" : "mb-35",
                              " \n                  "
                            ),
                            children: (0, r.jsxs)("b", {
                              children: [
                                "What is your daily average volume by insurance vertical and lead type and how does this vary by season? ",
                                (0, r.jsx)("span", {
                                  className: "text-danger",
                                  children: "*",
                                }),
                              ],
                            }),
                          }),
                          (0, r.jsx)("div", {
                            className: "col",
                            children: (0, r.jsx)(eA, {
                              control: w,
                              type: (0, h.sD)(N) ? "text" : "textarea",
                              name: "volume",
                              placeholder: "Volume ",
                            }),
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className: "row large-input ".concat(
                          (0, h.sD)(N) ? "top-space" : "mt-55",
                          " \n                  "
                        ),
                        children: [
                          (0, r.jsx)("label", {
                            className: "form-label grey ".concat(
                              (0, h.sD)(N) ? "mb-30" : "mb-35",
                              " \n                  "
                            ),
                            children: (0, r.jsxs)("b", {
                              children: [
                                "Do you work with a Call Center? Is this an owned and operated call center? Where is it located? Is the Customer data stored in the United States? ",
                                (0, r.jsx)("span", {
                                  className: "text-danger",
                                  children: "*",
                                }),
                                " ",
                              ],
                            }),
                          }),
                          (0, r.jsx)("div", {
                            className: "col",
                            children: (0, r.jsx)(eA, {
                              control: w,
                              type: (0, h.sD)(N) ? "text" : "textarea",
                              name: "canswer",
                              placeholder: "Your answer ",
                            }),
                          }),
                        ],
                      }),
                      (0, r.jsx)("div", {
                        className: "row ".concat(
                          (0, h.sD)(N) ? "top-space" : "mt-55",
                          " \n                  "
                        ),
                        children: (0, r.jsxs)("div", {
                          className: "col",
                          children: [
                            (0, r.jsx)("label", {
                              className: "form-label grey ".concat(
                                (0, h.sD)(N) ? "mb-15" : "mb-5",
                                " \n                  "
                              ),
                              children: (0, r.jsxs)("b", {
                                children: [
                                  "Are the majority of your sources (sites, ads, etc.) owned and operated or 3rd party? ",
                                  (0, r.jsx)("span", {
                                    className: "text-danger",
                                    children: "*",
                                  }),
                                ],
                              }),
                            }),
                            (0, r.jsxs)("ul", {
                              className: "custom-radio simple-radio",
                              children: [
                                (0, r.jsx)("li", {
                                  className: "mb-5",
                                  style: {
                                    width: (0, h.sD)(N) ? "50%" : "100%",
                                  },
                                  children: (0, r.jsx)(eq.Qr, {
                                    name: "radiooption3",
                                    control: w,
                                    render: (e) => {
                                      let {
                                        field: { onChange: l, value: i },
                                        fieldState: { error: n, isDirty: a },
                                      } = e;
                                      return (0, r.jsxs)(r.Fragment, {
                                        children: [
                                          (0, r.jsx)("input", {
                                            type: "radio",
                                            onChange: l,
                                            value: "Owned & Operated",
                                            name: "radioOption3",
                                            id: "radioOption11",
                                          }),
                                          (0, r.jsx)("label", {
                                            className: "grey radius-30",
                                            htmlFor: "radioOption11",
                                            children: "Owned & Operated",
                                          }),
                                          n &&
                                            (0, r.jsx)("span", {
                                              className: "error",
                                              style: {
                                                marginTop: (0, h.sD)(N)
                                                  ? "50px"
                                                  : "140px",
                                              },
                                              children:
                                                "Please select an option",
                                            }),
                                        ],
                                      });
                                    },
                                  }),
                                }),
                                (0, r.jsx)("li", {
                                  children: (0, r.jsx)(eq.Qr, {
                                    name: "radiooption3",
                                    control: w,
                                    render: (e) => {
                                      let {
                                        field: { onChange: l, value: i },
                                        fieldState: { error: n, isDirty: a },
                                      } = e;
                                      return (0, r.jsxs)(r.Fragment, {
                                        children: [
                                          (0, r.jsx)("input", {
                                            type: "radio",
                                            onChange: l,
                                            value: "3rd Party",
                                            defaultValue: "",
                                            name: "radioOption3",
                                            id: "radioOption12",
                                          }),
                                          (0, r.jsx)("label", {
                                            className: "grey radius-30",
                                            htmlFor: "radioOption12",
                                            children: "3rd Party",
                                          }),
                                        ],
                                      });
                                    },
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, r.jsx)("div", {
                        className: "row ".concat(
                          (0, h.sD)(N) ? "top-space" : "mt-55",
                          " \n                  "
                        ),
                        children: (0, r.jsxs)("div", {
                          className: "col",
                          children: [
                            (0, r.jsx)("label", {
                              className: "form-label grey ".concat(
                                (0, h.sD)(N) ? "mb-15" : "mb-5",
                                " \n                  "
                              ),
                              children: (0, r.jsxs)("b", {
                                children: [
                                  "Can you make changes to your sources? ",
                                  (0, r.jsx)("span", {
                                    className: "text-danger",
                                    children: "*",
                                  }),
                                ],
                              }),
                            }),
                            (0, r.jsxs)("ul", {
                              className: "custom-radio simple-radio",
                              children: [
                                (0, r.jsx)("li", {
                                  className: "mb-5",
                                  children: (0, r.jsx)(eq.Qr, {
                                    name: "radiooption4",
                                    control: w,
                                    render: (e) => {
                                      let {
                                        field: { onChange: l, value: i },
                                        fieldState: { error: n, isDirty: a },
                                      } = e;
                                      return (0, r.jsxs)(r.Fragment, {
                                        children: [
                                          (0, r.jsx)("input", {
                                            type: "radio",
                                            onChange: l,
                                            value: "Yes",
                                            name: "radioOption4",
                                            id: "radioOption13",
                                          }),
                                          (0, r.jsx)("label", {
                                            className: "grey radius-30",
                                            htmlFor: "radioOption13",
                                            children: "Yes",
                                          }),
                                          n &&
                                            (0, r.jsx)("span", {
                                              className: "error",
                                              style: {
                                                marginTop: (0, h.sD)(N)
                                                  ? "50px"
                                                  : "210px",
                                              },
                                              children:
                                                "Please select an option",
                                            }),
                                        ],
                                      });
                                    },
                                  }),
                                }),
                                (0, r.jsx)("li", {
                                  className: "mb-5",
                                  children: (0, r.jsx)(eq.Qr, {
                                    name: "radiooption4",
                                    control: w,
                                    render: (e) => {
                                      let {
                                        field: { onChange: l, value: i },
                                        fieldState: { error: n, isDirty: a },
                                      } = e;
                                      return (0, r.jsxs)(r.Fragment, {
                                        children: [
                                          (0, r.jsx)("input", {
                                            type: "radio",
                                            onChange: l,
                                            value: "No",
                                            name: "radioOption4",
                                            id: "radioOption14",
                                          }),
                                          (0, r.jsx)("label", {
                                            className: "grey radius-30",
                                            htmlFor: "radioOption14",
                                            children: "No",
                                          }),
                                        ],
                                      });
                                    },
                                  }),
                                }),
                                (0, r.jsx)("li", {
                                  children: (0, r.jsx)(eq.Qr, {
                                    name: "radiooption4",
                                    control: w,
                                    render: (e) => {
                                      let {
                                        field: { onChange: l, value: i },
                                        fieldState: { error: n, isDirty: a },
                                      } = e;
                                      return (0, r.jsxs)(r.Fragment, {
                                        children: [
                                          (0, r.jsx)("input", {
                                            type: "radio",
                                            onChange: l,
                                            value: "maybe",
                                            name: "radioOption4",
                                            id: "radioOption15",
                                          }),
                                          (0, r.jsx)("label", {
                                            className: "grey radius-30",
                                            htmlFor: "radioOption15",
                                            children: "Maybe",
                                          }),
                                        ],
                                      });
                                    },
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, r.jsxs)("div", {
                        className: "row large-input ".concat(
                          (0, h.sD)(N) ? "top-space" : "mt-55",
                          " \n                  "
                        ),
                        children: [
                          (0, r.jsx)("label", {
                            className: "form-label grey ".concat(
                              (0, h.sD)(N) ? "mb-30" : "mb-35",
                              " \n                  "
                            ),
                            children: (0, r.jsxs)("b", {
                              children: [
                                "What is your general pricing range by lead type? ",
                                (0, r.jsx)("span", {
                                  className: "text-danger",
                                  children: "*",
                                }),
                              ],
                            }),
                          }),
                          (0, r.jsx)("div", {
                            className: "col",
                            children: (0, r.jsx)(eA, {
                              control: w,
                              type: (0, h.sD)(N) ? "text" : "textarea",
                              name: "lanswer",
                              placeholder: "Your answer ",
                            }),
                          }),
                        ],
                      }),
                      (0, r.jsx)("div", {
                        className: "row ".concat(
                          (0, h.sD)(N) ? "top-space" : "mt-55",
                          " \n                  "
                        ),
                        children: (0, r.jsxs)("div", {
                          className: "col",
                          children: [
                            (0, r.jsx)("label", {
                              className: "form-label grey ".concat(
                                (0, h.sD)(N) ? "mb-15" : "mb-5",
                                " \n                  "
                              ),
                              children: (0, r.jsxs)("b", {
                                children: [
                                  "Can you implement an API key for data posting? ",
                                  (0, r.jsx)("span", {
                                    className: "text-danger",
                                    children: "*",
                                  }),
                                ],
                              }),
                            }),
                            (0, r.jsxs)("ul", {
                              className: "custom-radio simple-radio",
                              children: [
                                (0, r.jsx)("li", {
                                  className: "mb-5",
                                  children: (0, r.jsx)(eq.Qr, {
                                    name: "radiooption5",
                                    control: w,
                                    render: (e) => {
                                      let {
                                        field: { onChange: l, value: i },
                                        fieldState: { error: n, isDirty: a },
                                      } = e;
                                      return (0, r.jsxs)(r.Fragment, {
                                        children: [
                                          (0, r.jsx)("input", {
                                            type: "radio",
                                            onChange: l,
                                            value: "Yes",
                                            name: "radioOption5",
                                            id: "radioOption16",
                                          }),
                                          (0, r.jsx)("label", {
                                            className: "grey radius-30",
                                            htmlFor: "radioOption16",
                                            children: "Yes",
                                          }),
                                          n &&
                                            (0, r.jsx)("span", {
                                              className: "error",
                                              style: {
                                                marginTop: (0, h.sD)(N)
                                                  ? "50px"
                                                  : "210px",
                                              },
                                              children:
                                                "Please select an option",
                                            }),
                                        ],
                                      });
                                    },
                                  }),
                                }),
                                (0, r.jsxs)("li", {
                                  className: "mb-5",
                                  children: [
                                    (0, r.jsx)("input", {
                                      type: "radio",
                                      id: "No",
                                      name: "radio-option",
                                    }),
                                    (0, r.jsx)(eq.Qr, {
                                      name: "radiooption5",
                                      control: w,
                                      render: (e) => {
                                        let {
                                          field: { onChange: l, value: i },
                                          fieldState: { error: n, isDirty: a },
                                        } = e;
                                        return (0, r.jsxs)(r.Fragment, {
                                          children: [
                                            (0, r.jsx)("input", {
                                              type: "radio",
                                              onChange: l,
                                              value: "No",
                                              name: "radioOption5",
                                              id: "radioOption17",
                                            }),
                                            (0, r.jsx)("label", {
                                              className: "grey radius-30",
                                              htmlFor: "radioOption17",
                                              children: "No",
                                            }),
                                          ],
                                        });
                                      },
                                    }),
                                  ],
                                }),
                                (0, r.jsx)("li", {
                                  children: (0, r.jsx)(eq.Qr, {
                                    name: "radiooption5",
                                    control: w,
                                    render: (e) => {
                                      let {
                                        field: { onChange: l, value: i },
                                        fieldState: { error: n, isDirty: a },
                                      } = e;
                                      return (0, r.jsxs)(r.Fragment, {
                                        children: [
                                          (0, r.jsx)("input", {
                                            type: "radio",
                                            onChange: l,
                                            value: "maybe",
                                            name: "radioOption5",
                                            id: "radioOption18",
                                          }),
                                          (0, r.jsx)("label", {
                                            className: "grey radius-30",
                                            htmlFor: "radioOption18",
                                            children: "Maybe",
                                          }),
                                        ],
                                      });
                                    },
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, r.jsxs)("div", {
                        className: "row large-input ".concat(
                          (0, h.sD)(N) ? "top-space" : "mt-55",
                          " \n                  "
                        ),
                        children: [
                          (0, r.jsx)("label", {
                            className: "form-label grey ".concat(
                              (0, h.sD)(N) ? "mb-30" : "mb-35",
                              " \n                  "
                            ),
                            children: (0, r.jsxs)("b", {
                              children: [
                                "What call routing system/software(s) do you currently use? ",
                                (0, r.jsx)("span", {
                                  className: "text-danger",
                                  children: "*",
                                }),
                                " ",
                              ],
                            }),
                          }),
                          (0, r.jsx)("div", {
                            className: "col",
                            children: (0, r.jsx)(eA, {
                              control: w,
                              type: (0, h.sD)(N) ? "text" : "textarea",
                              name: "sanswer",
                              placeholder: "Your answer ",
                            }),
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className: "row large-input ".concat(
                          (0, h.sD)(N) ? "mt-100" : "mt-55",
                          " \n                  "
                        ),
                        children: [
                          (0, r.jsxs)("label", {
                            className: "form-label grey ".concat(
                              (0, h.sD)(N) ? "mb-30" : "mb-35",
                              " \n                  "
                            ),
                            children: [
                              (0, r.jsxs)("b", {
                                children: [
                                  "Are you able to filter calls by age/geographical area/states/zip codes? ",
                                  " ",
                                ],
                              }),
                              " ",
                              "(List all that apply)",
                              (0, r.jsx)("b", {
                                children: (0, r.jsx)("span", {
                                  className: "text-danger",
                                  children: "*",
                                }),
                              }),
                            ],
                          }),
                          (0, r.jsx)("div", {
                            className: "col",
                            children: (0, r.jsx)(eA, {
                              control: w,
                              type: (0, h.sD)(N) ? "text" : "textarea",
                              name: "ganswer",
                              placeholder: "Your answer ",
                            }),
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className: "row large-input ".concat(
                          (0, h.sD)(N) ? "top-space" : "mt-55",
                          " \n                  "
                        ),
                        children: [
                          (0, r.jsxs)("label", {
                            className: "form-label grey ".concat(
                              (0, h.sD)(N) ? "mb-30" : "mb-35",
                              " \n                  "
                            ),
                            children: [
                              (0, r.jsxs)("b", {
                                children: [
                                  "Are you able to send a specified amount of calls by day and/or hour? ",
                                  " ",
                                ],
                              }),
                              "(i.e if we give you a maximum number of calls per day of the week/set schedule, etc.)",
                              (0, r.jsx)("b", {
                                children: (0, r.jsx)("span", {
                                  className: "text-danger",
                                  children: "*",
                                }),
                              }),
                            ],
                          }),
                          (0, r.jsx)("div", {
                            className: "col",
                            children: (0, r.jsx)(eA, {
                              control: w,
                              type: (0, h.sD)(N) ? "text" : "textarea",
                              name: "danswer",
                              placeholder: "Your answer ",
                            }),
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className: "row large-input ".concat(
                          (0, h.sD)(N) ? "top-space" : "mt-55",
                          " \n                  "
                        ),
                        children: [
                          (0, r.jsx)("label", {
                            className: "form-label grey ".concat(
                              (0, h.sD)(N) ? "mb-30" : "mb-35",
                              " \n                  "
                            ),
                            children: (0, r.jsxs)("b", {
                              children: [
                                "Is the majority of your traffic U65 or 065, if both what is the split between both? ",
                                (0, r.jsx)("span", {
                                  className: "text-danger",
                                  children: "*",
                                }),
                                " ",
                              ],
                            }),
                          }),
                          (0, r.jsx)("div", {
                            className: "col",
                            children: (0, r.jsx)(eA, {
                              control: w,
                              type: (0, h.sD)(N) ? "text" : "textarea",
                              name: "uanswer",
                              placeholder: "Your answer ",
                            }),
                          }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className: "row ".concat(
                          (0, h.sD)(N) ? "top-space" : "mt-55",
                          " \n                  "
                        ),
                        children: [
                          (0, r.jsxs)("div", {
                            className: "col",
                            children: [
                              (0, r.jsx)("label", {
                                className: "form-label grey ".concat(
                                  (0, h.sD)(N) ? "mb-15" : "mb-5",
                                  " \n                  "
                                ),
                                children: (0, r.jsxs)("b", {
                                  children: [
                                    "Do you use Jornaya or Trusted Form? ",
                                    (0, r.jsx)("span", {
                                      className: "text-danger",
                                      children: "*",
                                    }),
                                  ],
                                }),
                              }),
                              (0, r.jsxs)("ul", {
                                className: "custom-radio simple-radio",
                                children: [
                                  (0, r.jsx)("li", {
                                    className: "mb-5",
                                    children: (0, r.jsx)(eq.Qr, {
                                      name: "radiooption6",
                                      control: w,
                                      render: (e) => {
                                        let {
                                          field: { onChange: l, value: i },
                                          fieldState: { error: n, isDirty: a },
                                        } = e;
                                        return (0, r.jsxs)(r.Fragment, {
                                          children: [
                                            (0, r.jsx)("input", {
                                              type: "radio",
                                              checked: "Yes" === x,
                                              onChange: (e) => {
                                                l(e), f(e.target.value);
                                              },
                                              value: "Yes",
                                              name: "radioOption6",
                                              id: "radioOption19",
                                            }),
                                            (0, r.jsx)("label", {
                                              className: "grey radius-30",
                                              htmlFor: "radioOption19",
                                              children: "Yes",
                                            }),
                                            n &&
                                              (0, r.jsx)("span", {
                                                className: "error",
                                                style: {
                                                  marginTop: (0, h.sD)(N)
                                                    ? "50px"
                                                    : "205px",
                                                },
                                                children:
                                                  "Please select an option",
                                              }),
                                          ],
                                        });
                                      },
                                    }),
                                  }),
                                  (0, r.jsx)("li", {
                                    className: "mb-5",
                                    children: (0, r.jsx)(eq.Qr, {
                                      name: "radiooption6",
                                      control: w,
                                      render: (e) => {
                                        let {
                                          field: { onChange: l, value: i },
                                          fieldState: { error: n, isDirty: a },
                                        } = e;
                                        return (0, r.jsxs)(r.Fragment, {
                                          children: [
                                            (0, r.jsx)("input", {
                                              type: "radio",
                                              checked: "No" === x,
                                              onChange: (e) => {
                                                l(e), f(e.target.value);
                                              },
                                              value: "No",
                                              name: "radioOption6",
                                              id: "radioOption20",
                                            }),
                                            (0, r.jsx)("label", {
                                              className: "grey radius-30",
                                              htmlFor: "radioOption20",
                                              children: "No",
                                            }),
                                          ],
                                        });
                                      },
                                    }),
                                  }),
                                  (0, r.jsx)("li", {
                                    className: "mb-5",
                                    children: (0, r.jsx)(eq.Qr, {
                                      name: "radiooption6",
                                      control: w,
                                      render: (e) => {
                                        let {
                                          field: { onChange: l, value: i },
                                          fieldState: { error: n, isDirty: a },
                                        } = e;
                                        return (0, r.jsxs)(r.Fragment, {
                                          children: [
                                            (0, r.jsx)("input", {
                                              type: "radio",
                                              checked: "N/A" === x,
                                              onChange: (e) => {
                                                l(e), f(e.target.value);
                                              },
                                              value: "N/A",
                                              name: "radioOption6",
                                              id: "radioOption21",
                                            }),
                                            (0, r.jsx)("label", {
                                              className: "grey radius-30",
                                              htmlFor: "radioOption21",
                                              children: "N/A",
                                            }),
                                          ],
                                        });
                                      },
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, r.jsxs)("div", {
                            className: "mt-4 other-field",
                            children: [
                              (0, r.jsx)("ul", {
                                className: "custom-radio mt-0 p-0",
                                children: (0, r.jsx)("li", {
                                  className: "radio-list",
                                  children: (0, r.jsx)(eq.Qr, {
                                    name: "radiooption6",
                                    control: w,
                                    render: (e) => {
                                      let {
                                        field: { onChange: l, value: i },
                                        fieldState: { error: n, isDirty: a },
                                      } = e;
                                      return (0, r.jsxs)(r.Fragment, {
                                        children: [
                                          (0, r.jsx)("input", {
                                            type: "radio",
                                            checked: "Others2" === x,
                                            onChange: (e) => {
                                              l(e), f(e.target.value);
                                            },
                                            value: "Others2",
                                            name: "radioOptionOther3",
                                            id: "radioOption22",
                                          }),
                                          (0, r.jsx)("label", {
                                            className: "grey radius-30",
                                            htmlFor: "radioOption22",
                                            children: "Other",
                                          }),
                                        ],
                                      });
                                    },
                                  }),
                                }),
                              }),
                              (0, r.jsx)(eA, {
                                placeholder: "Enter text here",
                                control: w,
                                border: "none",
                                outline: "none",
                                name: "others3",
                                width: "101.2%",
                                defaultValue: "",
                                disabled: "Others2" !== x,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, r.jsx)("div", {
                        className: "row large-input ".concat(
                          (0, h.sD)(N) ? "top-space" : "mt-55",
                          " \n                  "
                        ),
                        children: (0, r.jsxs)("div", {
                          className: "col",
                          children: [
                            (0, r.jsx)("label", {
                              className: "form-label grey ".concat(
                                (0, h.sD)(N) ? "mb-30" : "mb-35",
                                " \n                  "
                              ),
                              children: (0, r.jsx)("b", {
                                children: "Additional Comments",
                              }),
                            }),
                            (0, r.jsx)(eA, {
                              control: w,
                              type: "textarea",
                              name: "comments",
                              width: "100%",
                              height: "100px",
                              placeholder: "Enter text here",
                            }),
                          ],
                        }),
                      }),
                      (0, r.jsx)("div", {
                        className: "row top-space",
                        children: (0, r.jsxs)("div", {
                          className: "col",
                          children: [
                            (0, r.jsx)("label", {
                              className: "grey",
                              children: "Add Attachments",
                            }),
                            (0, r.jsxs)("div", {
                              id: "fileupload",
                              children: [
                                (0, r.jsx)(eW.b, {
                                  handleChange: I,
                                  types: u.vH,
                                  multiple: "false",
                                  label:
                                    "Drop a file here or click to upload\nMaximum upload size: 1.5MB",
                                  maxSize: 15e5,
                                }),
                                j && (0, r.jsx)("p", { children: j }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, r.jsx)("div", {
                        className: "mt-4 button-container",
                        children: (0, r.jsx)("button", {
                          className: "action-btn btn-border submit-button",
                          type: "submit",
                          onClick: () => S(C),
                          disabled: a,
                          children: "Submit",
                        }),
                      }),
                    ],
                  }),
            }),
          });
        },
        eQ = i(734);
      let eU = (e) =>
          '\n    <img src="https://images.ctfassets.net/vr7x4vru4gls/7jsdaiHlxfZvNlRcxtuXXw/80b01324683fa841714ce8e42436345e/SelectQuote_Logo.jpg" width="250"><br/><br/>\n    '
            .concat(
              e.firstName,
              "<br/><br/>\n    Thank you for sharing your interest in partnering with SelectQuote. A member of our team will be in touch shortly. Below is a copy of your submission.<br/><br/>\n    <strong>Name:</strong> "
            )
            .concat(e.firstName, " ")
            .concat(e.lastName, "<br/>\n    <strong>Email:</strong> ")
            .concat(e.email, "<br/>\n    <strong>Phone:</strong> ")
            .concat(
              e.phoneNumber,
              " <br/>\n    <strong>Organization Name:</strong> "
            )
            .concat(
              e.organizationName,
              " <br/>\n    <strong>Organization Website: </strong> "
            )
            .concat(
              e.organizationWesbsite,
              "<br/>\n    <strong>Organization Address: </strong> "
            )
            .concat(
              e.organizationAddress,
              "<br/>\n    <strong>Organization Mission Statement: </strong> "
            )
            .concat(
              e.organizationStatement,
              "<br/>\n    <strong>Organization History: </strong> "
            )
            .concat(
              e.organizationOverview,
              "<br/>\n    <strong>Objectives: </strong> "
            )
            .concat(
              e.organizationDescription,
              "<br/>\n    <strong>Organization Grant: </strong> "
            )
            .concat(
              e.amount,
              "<br/>\n    <strong>Requested Finances: </strong>"
            )
            .concat(e.program, "<br/>\n    <strong>IRS EIN Number : </strong> ")
            .concat(
              e.IRS,
              "<br/>\n    <strong>Third Party Reference : </strong> "
            )
            .concat(
              e.reference,
              "<br/>\n    <strong>Board of Directors: </strong> "
            )
            .concat(e.boardOfDirector, "<br/>\n<strong>Key Staff: </strong> ")
            .concat(e.staffInvolved, "<br/>\n"),
        eJ = (e) =>
          '\n    <img src="https://images.ctfassets.net/vr7x4vru4gls/7jsdaiHlxfZvNlRcxtuXXw/80b01324683fa841714ce8e42436345e/SelectQuote_Logo.jpg" width="250"><br/><br/>\n    '
            .concat(
              e.firstName,
              "<br/><br/>\n    Thank you for sharing your interest in partnering with SelectQuote.<br/><br/>\n    <strong>Name:</strong> "
            )
            .concat(e.firstName, " ")
            .concat(e.lastName, "<br/>\n    <strong>Email: </strong> ")
            .concat(e.email, "<br/>\n    <strong>Phone: </strong> ")
            .concat(
              e.phoneNumber,
              " <br/>\n    <strong>Organization Name:</strong> "
            )
            .concat(
              e.organizationName,
              "  <br/>\n    <strong>Organization Website: </strong> "
            )
            .concat(
              e.organizationWesbsite,
              "<br/>\n    <strong>Organization Address: </strong> "
            )
            .concat(
              e.organizationAddress,
              "<br/>\n    <strong>Organization Mission Statement: </strong> "
            )
            .concat(
              e.organizationStatement,
              "<br/>\n    <strong>Organization History: </strong> "
            )
            .concat(
              e.organizationOverview,
              "<br/>\n    <strong>Objectives: </strong> "
            )
            .concat(
              e.organizationDescription,
              "<br/>\n    <strong>Organization Grant: </strong>  "
            )
            .concat(
              e.amount,
              " <br/>\n    <strong>Requested Finances: </strong>"
            )
            .concat(
              e.program,
              " <br/>\n    <strong>IRS EIN Number : </strong> "
            )
            .concat(
              e.IRS,
              "<br/>\n    <strong>Third Party Reference : </strong> "
            )
            .concat(
              e.reference,
              "]<br/>\n    <strong>Board of Directors: </strong> "
            )
            .concat(e.boardOfDirector, "<br/>\n<strong>Key Staff: </strong> ")
            .concat(e.staffInvolved, "<br/>\n"),
        eG = (e) => {
          var l,
            i,
            n,
            a,
            s,
            t,
            r,
            o,
            d,
            c,
            u,
            h,
            m,
            v,
            p,
            x,
            f,
            g,
            j,
            b,
            y,
            N,
            w,
            S,
            k,
            M,
            C,
            I,
            P,
            q,
            A,
            D,
            F,
            L,
            T,
            z,
            E;
          let O =
              null !==
                (F =
                  null === (t = e.fields.sections) || void 0 === t
                    ? void 0
                    : null === (s = t[0]) || void 0 === s
                    ? void 0
                    : null === (a = s.fields) || void 0 === a
                    ? void 0
                    : null === (n = a.columns) || void 0 === n
                    ? void 0
                    : null === (i = n[0]) || void 0 === i
                    ? void 0
                    : null === (l = i.fields) || void 0 === l
                    ? void 0
                    : l.columns) && void 0 !== F
                ? F
                : [],
            _ =
              null !==
                (T =
                  null !==
                    (L =
                      null ===
                        (m = O.slice(1).find((e) => {
                          var l, i, n, a, s, t;
                          return !!(null === (t = e.fields) || void 0 === t
                            ? void 0
                            : null === (s = t.content) || void 0 === s
                            ? void 0
                            : null === (a = s.fields) || void 0 === a
                            ? void 0
                            : null === (n = a.imageFile) || void 0 === n
                            ? void 0
                            : null === (i = n.fields) || void 0 === i
                            ? void 0
                            : null === (l = i.file) || void 0 === l
                            ? void 0
                            : l.url);
                        })) || void 0 === m
                        ? void 0
                        : null === (h = m.fields) || void 0 === h
                        ? void 0
                        : null === (u = h.content) || void 0 === u
                        ? void 0
                        : null === (c = u.fields) || void 0 === c
                        ? void 0
                        : null === (d = c.imageFile) || void 0 === d
                        ? void 0
                        : null === (o = d.fields) || void 0 === o
                        ? void 0
                        : null === (r = o.file) || void 0 === r
                        ? void 0
                        : r.url) && void 0 !== L
                    ? L
                    : null === (y = e.fields) || void 0 === y
                    ? void 0
                    : null === (b = y.seo) || void 0 === b
                    ? void 0
                    : null === (j = b.fields) || void 0 === j
                    ? void 0
                    : null === (g = j.shareCardImage) || void 0 === g
                    ? void 0
                    : null === (f = g.fields) || void 0 === f
                    ? void 0
                    : null === (x = f.imageFile) || void 0 === x
                    ? void 0
                    : null === (p = x.fields) || void 0 === p
                    ? void 0
                    : null === (v = p.file) || void 0 === v
                    ? void 0
                    : v.url) && void 0 !== T
                ? T
                : "";
          return {
            excerpt:
              null == e
                ? void 0
                : null === (N = e.fields) || void 0 === N
                ? void 0
                : N.subTitle,
            id:
              null !==
                (z = null === (w = e.sys) || void 0 === w ? void 0 : w.id) &&
              void 0 !== z
                ? z
                : "",
            imageUrl: _ ? "".concat(window.location.protocol).concat(_) : "",
            title:
              null !==
                (E =
                  null === (D = O[0]) || void 0 === D
                    ? void 0
                    : null === (A = D.fields) || void 0 === A
                    ? void 0
                    : null === (q = A.content) || void 0 === q
                    ? void 0
                    : null === (P = q.fields) || void 0 === P
                    ? void 0
                    : null === (I = P.content) || void 0 === I
                    ? void 0
                    : null === (C = I.content) || void 0 === C
                    ? void 0
                    : null === (M = C[0]) || void 0 === M
                    ? void 0
                    : null === (k = M.content) || void 0 === k
                    ? void 0
                    : null === (S = k[0]) || void 0 === S
                    ? void 0
                    : S.value) && void 0 !== E
                ? E
                : e.fields.title,
            url: "/".concat(e.fields.slug),
          };
        };
      var e$ = i(1111);
      let eK = function () {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            { deviceSize: l } = (0, g.b)(),
            i =
              null == e
                ? void 0
                : e.find((e) => {
                    var l;
                    return (
                      (null === (l = e.fields) || void 0 === l
                        ? void 0
                        : l.type) === e$.Y.Desktop
                    );
                  }),
            n =
              null == e
                ? void 0
                : e.find((e) => {
                    var l;
                    return (
                      (null === (l = e.fields) || void 0 === l
                        ? void 0
                        : l.type) === e$.Y.Mobile
                    );
                  });
          return (0, h.sD)(l) ? i : (0, h.UJ)(l) ? n : null;
        },
        eX = (e) => {
          let { page: l, section: i } = e,
            { deviceType: n } = (0, g.b)(),
            [a, t] = (0, o.useState)(!1),
            d = (e) => {
              var l, i, a, t, r, o, d, c, u;
              let m =
                  null == e
                    ? void 0
                    : null === (i = e.fields) || void 0 === i
                    ? void 0
                    : null === (l = i.devices) || void 0 === l
                    ? void 0
                    : l.find((e) => {
                        var l;
                        return (
                          (null === (l = e.fields) || void 0 === l
                            ? void 0
                            : l.type) === s.Desktop
                        );
                      }),
                v =
                  null == e
                    ? void 0
                    : null === (t = e.fields) || void 0 === t
                    ? void 0
                    : null === (a = t.devices) || void 0 === a
                    ? void 0
                    : a.find((e) => {
                        var l;
                        return (
                          (null === (l = e.fields) || void 0 === l
                            ? void 0
                            : l.type) === s.Mobile
                        );
                      }),
                p =
                  null == e
                    ? void 0
                    : null === (o = e.fields) || void 0 === o
                    ? void 0
                    : null === (r = o.devices) || void 0 === r
                    ? void 0
                    : r.find((e) => {
                        var l;
                        return (
                          (null === (l = e.fields) || void 0 === l
                            ? void 0
                            : l.type) === s.Tablet
                        );
                      }),
                x = (0, h.nI)(n)
                  ? null == m
                    ? void 0
                    : null === (d = m.fields) || void 0 === d
                    ? void 0
                    : d.fullWidth
                  : (0, h.Em)(n)
                  ? null == p
                    ? void 0
                    : null === (c = p.fields) || void 0 === c
                    ? void 0
                    : c.fullWidth
                  : null == v
                  ? void 0
                  : null === (u = v.fields) || void 0 === u
                  ? void 0
                  : u.fullWidth;
              return "".concat(x ? "container-fluid px-0" : "container");
            };
          if (
            ((0, o.useEffect)(() => {
              setTimeout(() => {
                t(!0);
              }, 300);
            }, []),
            Array.isArray(i) && a)
          )
            return (0, r.jsx)("div", {
              className: "block-render",
              children:
                null == i
                  ? void 0
                  : i.map((e, i) => {
                      var n, a, s, t, o, c;
                      let u =
                          null == e
                            ? void 0
                            : null === (n = e.fields) || void 0 === n
                            ? void 0
                            : n.fullBackgroundColor,
                        h =
                          null == e
                            ? void 0
                            : null === (a = e.fields) || void 0 === a
                            ? void 0
                            : a.fullBackgroundImage;
                      return (0, r.jsx)(r.Fragment, {
                        children: (0, r.jsx)(
                          "div",
                          {
                            className: d(e),
                            style: {
                              backgroundColor: u || "",
                              backgroundImage: "url(https:".concat(
                                null == h
                                  ? void 0
                                  : null === (c = h.fields) || void 0 === c
                                  ? void 0
                                  : null === (o = c.imageFile) || void 0 === o
                                  ? void 0
                                  : null === (t = o.fields) || void 0 === t
                                  ? void 0
                                  : null === (s = t.file) || void 0 === s
                                  ? void 0
                                  : s.url,
                                ")"
                              ),
                              backgroundSize: "cover",
                            },
                            children:
                              u || h
                                ? (0, r.jsx)("div", {
                                    className: "container",
                                    children: (0, r.jsx)(
                                      eX,
                                      { page: l, section: e },
                                      i
                                    ),
                                  })
                                : (0, r.jsx)(eX, { page: l, section: e }, i),
                          },
                          "".concat(i, "-desktop")
                        ),
                      });
                    }),
            });
          let u = c().get(i, "sys.contentType.sys.id"),
            m = e0[u];
          if (!m)
            return console.warn("".concat(u, " can not be handled")), null;
          let { id: v } = i.sys;
          return (0, r.jsx)(
            m,
            { section: i, page: l },
            "".concat(u, "-").concat(v)
          );
        },
        e0 = {
          [u.HV.Hero]: (e) => {
            var l,
              i,
              n,
              a,
              t,
              d,
              c,
              m,
              v,
              p,
              x,
              f,
              j,
              b,
              y,
              N,
              w,
              S,
              k,
              M,
              C,
              I,
              P,
              q;
            let { section: A } = e,
              { heroDevices: D, topSection: F, content: L } = A.fields,
              [T, z] = (0, o.useState)(0),
              { deviceSize: E, deviceType: O } = (0, g.b)(),
              _ =
                null == D
                  ? void 0
                  : D.find((e) => e.fields.heroTypeDevice === s.Desktop),
              H =
                null == D
                  ? void 0
                  : D.find((e) => {
                      var l;
                      return (
                        (null === (l = e.fields) || void 0 === l
                          ? void 0
                          : l.heroTypeDevice) === s.Mobile
                      );
                    }),
              Y =
                null == D
                  ? void 0
                  : D.find((e) => {
                      var l;
                      return (
                        (null === (l = e.fields) || void 0 === l
                          ? void 0
                          : l.heroTypeDevice) === s.Tablet
                      );
                    }),
              R = (0, h.Em)(O) ? Y : H;
            return (
              (0, o.useEffect)(() => {
                let e = document.getElementById("heroSection"),
                  l = document.getElementById("heroContent");
                e &&
                  l &&
                  (e.classList.remove("container"),
                  l.classList.add("container"),
                  l.classList.remove("px-4"),
                  T >= 1920 &&
                    (e.classList.add("container"),
                    e.classList.remove("hero-section-shadow"),
                    l.classList.remove("container"),
                    l.classList.add("px-4")));
              }, [T]),
              (0, o.useEffect)(() => {
                function e() {
                  z(window.innerWidth);
                }
                return (
                  z(window.innerWidth),
                  window.addEventListener("resize", e),
                  () => window.removeEventListener("resize", e)
                );
              }, []),
              (0, r.jsxs)("div", {
                className: "hero-block",
                children: [
                  (0, h.nI)(O) &&
                    (0, r.jsx)("section", {
                      className: "hero-section "
                        .concat(F ? "  hero-section-shadow" : "", " ")
                        .concat(F ? "" : "container"),
                      style: {
                        backgroundSize: "".concat(
                          null == _
                            ? void 0
                            : null === (l = _.fields) || void 0 === l
                            ? void 0
                            : l.backgroundSize
                        ),
                        backgroundPosition: "".concat(
                          null == _
                            ? void 0
                            : null === (i = _.fields) || void 0 === i
                            ? void 0
                            : i.backgroundPosition
                        ),
                        backgroundImage: (
                          null == _
                            ? void 0
                            : null === (n = _.fields) || void 0 === n
                            ? void 0
                            : n.backgroundImage
                        )
                          ? "linear-gradient(90deg,"
                              .concat(
                                null == _
                                  ? void 0
                                  : null === (a = _.fields) || void 0 === a
                                  ? void 0
                                  : a.gradientStartingColor,
                                " "
                              )
                              .concat(
                                null == _
                                  ? void 0
                                  : null === (t = _.fields) || void 0 === t
                                  ? void 0
                                  : t.gradientStartingPercentage,
                                ","
                              )
                              .concat(
                                null == _
                                  ? void 0
                                  : null === (d = _.fields) || void 0 === d
                                  ? void 0
                                  : d.gradientEndColor,
                                " "
                              )
                              .concat(
                                null == _
                                  ? void 0
                                  : null === (c = _.fields) || void 0 === c
                                  ? void 0
                                  : c.gradientEndPercentage,
                                "), url(https:"
                              )
                              .concat(
                                null == _
                                  ? void 0
                                  : null === (v = _.fields) || void 0 === v
                                  ? void 0
                                  : null === (m = v.backgroundImage) ||
                                    void 0 === m
                                  ? void 0
                                  : m.fields.imageFile.fields.file.url,
                                ")"
                              )
                          : "",
                      },
                      id: "heroSection",
                      children: (0, r.jsx)("div", {
                        className:
                          "hero-content d-flex align-items-center  wp-container ".concat(
                            F ? "container" : ""
                          ),
                        id: "heroContent",
                        children: (0, r.jsx)("div", {
                          className: "w-50 position-relative",
                          children: (0, r.jsx)("div", {
                            className: "content-left",
                            children:
                              null == L
                                ? void 0
                                : L.map((e) => {
                                    var l;
                                    return (0, r.jsx)(
                                      "div",
                                      {
                                        className: "d-flex",
                                        children: (0, r.jsx)(
                                          "div",
                                          {
                                            style: { width: "100%" },
                                            children:
                                              (null ===
                                                (l = e.sys.contentType) ||
                                              void 0 === l
                                                ? void 0
                                                : l.sys.id) === u.HV.MultiColumn
                                                ? (0, r.jsx)(K, { section: e })
                                                : (0, r.jsx)(eM, {
                                                    section: e,
                                                  }),
                                          },
                                          A.sys.id
                                        ),
                                      },
                                      e.sys.id
                                    );
                                  }),
                          }),
                        }),
                      }),
                    }),
                  ((0, h.tq)(O) || (0, h.Em)(O)) &&
                    !(0, h.nI)(O) &&
                    ((
                      null == R
                        ? void 0
                        : null === (p = R.fields) || void 0 === p
                        ? void 0
                        : p.reverseImagePosition
                    )
                      ? (0, r.jsxs)("section", {
                          className: "hero-section",
                          children: [
                            (0, r.jsx)("div", {
                              className:
                                "hero-content d-flex align-items-center",
                              children: (0, r.jsx)("div", {
                                style: { padding: F ? "40px 0" : "0 0 40px 0" },
                                children: (0, r.jsx)("div", {
                                  children:
                                    null == L
                                      ? void 0
                                      : L.map((e) => {
                                          var l;
                                          return (0, r.jsx)(
                                            "div",
                                            {
                                              className: "d-flex",
                                              children: (0, r.jsx)(
                                                "div",
                                                {
                                                  style: { width: "100%" },
                                                  children:
                                                    (null ===
                                                      (l = e.sys.contentType) ||
                                                    void 0 === l
                                                      ? void 0
                                                      : l.sys.id) ===
                                                    u.HV.MultiColumn
                                                      ? (0, r.jsx)(K, {
                                                          section: e,
                                                        })
                                                      : (0, r.jsx)("div", {
                                                          children: (0, r.jsx)(
                                                            eM,
                                                            { section: e }
                                                          ),
                                                        }),
                                                },
                                                A.sys.id
                                              ),
                                            },
                                            e.sys.id
                                          );
                                        }),
                                }),
                              }),
                            }),
                            (null == R
                              ? void 0
                              : null === (I = R.fields) || void 0 === I
                              ? void 0
                              : I.backgroundImage) &&
                              (0, r.jsx)("div", {
                                style: {
                                  display: "inline-block",
                                  position: "relative",
                                  width: "100%",
                                },
                                children: (0, r.jsx)("div", {
                                  className: "hero-image",
                                  style: {
                                    backgroundSize: "cover",
                                    backgroundPosition: "center top",
                                    backgroundImage: "url(https:".concat(
                                      null == R
                                        ? void 0
                                        : null === (P = R.fields) ||
                                          void 0 === P
                                        ? void 0
                                        : P.backgroundImage.fields.imageFile
                                            .fields.file.url,
                                      ")"
                                    ),
                                    backgroundRepeat: "no-repeat",
                                    minHeight: "".concat(
                                      null == R
                                        ? void 0
                                        : null === (q = R.fields) ||
                                          void 0 === q
                                        ? void 0
                                        : q.imageHeight
                                    ),
                                  },
                                }),
                              }),
                          ],
                        })
                      : (0, r.jsx)("section", {
                          className: "hero-section ".concat(
                            null == R
                              ? void 0
                              : null === (x = R.fields) || void 0 === x
                              ? void 0
                              : x.styleClass
                          ),
                          style: {
                            backgroundSize: "".concat(
                              null == R
                                ? void 0
                                : null === (f = R.fields) || void 0 === f
                                ? void 0
                                : f.backgroundSize
                            ),
                            backgroundPosition: "".concat(
                              null == R
                                ? void 0
                                : null === (j = R.fields) || void 0 === j
                                ? void 0
                                : j.backgroundPosition
                            ),
                            backgroundImage: (
                              null == R
                                ? void 0
                                : null === (b = R.fields) || void 0 === b
                                ? void 0
                                : b.backgroundImage
                            )
                              ? "linear-gradient(0deg,"
                                  .concat(
                                    null == R
                                      ? void 0
                                      : null === (y = R.fields) || void 0 === y
                                      ? void 0
                                      : y.gradientStartingColor,
                                    " "
                                  )
                                  .concat(
                                    null == R
                                      ? void 0
                                      : null === (N = R.fields) || void 0 === N
                                      ? void 0
                                      : N.gradientStartingPercentage,
                                    ","
                                  )
                                  .concat(
                                    null == R
                                      ? void 0
                                      : null === (w = R.fields) || void 0 === w
                                      ? void 0
                                      : w.gradientEndColor,
                                    " "
                                  )
                                  .concat(
                                    null == R
                                      ? void 0
                                      : null === (S = R.fields) || void 0 === S
                                      ? void 0
                                      : S.gradientEndPercentage,
                                    "), url(https:"
                                  )
                                  .concat(
                                    null == R
                                      ? void 0
                                      : null === (M = R.fields) || void 0 === M
                                      ? void 0
                                      : null === (k = M.backgroundImage) ||
                                        void 0 === k
                                      ? void 0
                                      : k.fields.imageFile.fields.file.url,
                                    ")"
                                  )
                              : "",
                          },
                          children: (0, r.jsx)("div", {
                            className: "hero-content d-flex align-items-center",
                            style: {
                              paddingTop: "".concat(
                                null == R
                                  ? void 0
                                  : null === (C = R.fields) || void 0 === C
                                  ? void 0
                                  : C.contentTop
                              ),
                            },
                            children: (0, r.jsx)("div", {
                              style: { padding: F ? "40px 0" : "0 0 40px 0" },
                              children: (0, r.jsx)("div", {
                                children:
                                  null == L
                                    ? void 0
                                    : L.map((e) => {
                                        var l;
                                        return (0, r.jsx)(
                                          "div",
                                          {
                                            className: "d-flex",
                                            children: (0, r.jsx)(
                                              "div",
                                              {
                                                style: { width: "100%" },
                                                children:
                                                  (null ===
                                                    (l = e.sys.contentType) ||
                                                  void 0 === l
                                                    ? void 0
                                                    : l.sys.id) ===
                                                  u.HV.MultiColumn
                                                    ? (0, r.jsx)(K, {
                                                        section: e,
                                                      })
                                                    : (0, r.jsx)("div", {
                                                        children: (0, r.jsx)(
                                                          eM,
                                                          { section: e }
                                                        ),
                                                      }),
                                              },
                                              A.sys.id
                                            ),
                                          },
                                          e.sys.id
                                        );
                                      }),
                              }),
                            }),
                          }),
                        })),
                ],
              })
            );
          },
          [u.HV.SliderSection]: ec,
          [u.HV.FAQ]: J,
          [u.HV.MultiColumn]: K,
          [u.HV.Hyperlink]: R,
          [u.HV.Image]: Y,
          [u.HV.RichTextContent]: E,
          [u.HV.Cards]: ee,
          [u.HV.Style]: B,
          [u.HV.Button]: ei,
          [u.HV.PartnershipForm]: (e) => {
            let { section: l } = e,
              { title: i, step: n } = l.fields;
            return (0, r.jsx)("div", {
              className: "partnership-form",
              children: (0, r.jsx)("div", {
                className: "partnership-form-dekstop",
                children: (0, r.jsxs)("div", {
                  children: [
                    (0, r.jsx)(z, { text: i }),
                    (0, r.jsxs)("div", {
                      children: [
                        "Intro" === n && (0, r.jsx)(eY, {}),
                        "Detail" === n && (0, r.jsx)(eV, {}),
                      ],
                    }),
                  ],
                }),
              }),
            });
          },
          [u.HV.Tabs]: (e) => {
            var l, i, n, a;
            let { section: s } = e,
              { items: t } = s.fields,
              [d, c] = (0, o.useState)(t[0]),
              [u, h] = (0, o.useState)(null),
              m = (e) => {
                let l = t[e];
                h(e), c(l);
              };
            return (
              (0, o.useEffect)(() => {
                h(0), c(t[0]);
              }, []),
              (0, r.jsxs)(r.Fragment, {
                children: [
                  (0, r.jsxs)("div", {
                    className: " desktop-tab",
                    children: [
                      (0, r.jsx)("table", {
                        id: "tab",
                        children: (0, r.jsx)("tbody", {
                          children: (0, r.jsx)("tr", {
                            children: t.map((e, l) =>
                              (0, r.jsx)(
                                "td",
                                {
                                  className: "".concat(u == l && "active"),
                                  onClick: () => m(l),
                                  "data-year": "30",
                                  children: e.fields.header,
                                },
                                "tab-".concat(l)
                              )
                            ),
                          }),
                        }),
                      }),
                      (0, r.jsx)("div", {
                        className: "head-title",
                        children:
                          null == d
                            ? void 0
                            : null === (l = d.fields) || void 0 === l
                            ? void 0
                            : l.title,
                      }),
                      (0, r.jsx)(es, {
                        section:
                          null == d
                            ? void 0
                            : null === (i = d.fields) || void 0 === i
                            ? void 0
                            : i.content,
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className: "mobile-tab",
                    children: [
                      (0, r.jsx)("div", {
                        className: "mobile-dropdown",
                        children: (0, r.jsx)("select", {
                          onChange: (e) => {
                            m(Number(e.target.value));
                          },
                          style: {
                            width: "100%",
                            padding: "10px 0 10px 10px",
                            color: "#4e4e4e",
                            fontSize: "16px",
                            fontWeight: "700",
                            border: "1px solid #646464",
                          },
                          children: t.map((e, l) =>
                            (0, r.jsx)(
                              "option",
                              {
                                className: "".concat(u == l && "active"),
                                "data-year": "30",
                                value: l,
                                children: e.fields.header,
                              },
                              "tab-".concat(l)
                            )
                          ),
                        }),
                      }),
                      (0, r.jsx)("div", {
                        className: "head-title",
                        children:
                          null == d
                            ? void 0
                            : null === (n = d.fields) || void 0 === n
                            ? void 0
                            : n.title,
                      }),
                      (0, r.jsx)(es, {
                        section:
                          null == d
                            ? void 0
                            : null === (a = d.fields) || void 0 === a
                            ? void 0
                            : a.content,
                      }),
                    ],
                  }),
                ],
              })
            );
          },
          [u.HV.Gallery]: (e) => {
            let { section: l } = e,
              { images: i } = l.fields,
              [n, a] = (0, o.useState)(0),
              [s, t] = (0, o.useState)(!1),
              d = (0, o.useCallback)((e) => {
                a(e), t(!0);
              }, []);
            return (0, r.jsx)("div", {
              children: (0, r.jsxs)("div", {
                className: "gallery d-flex",
                children: [
                  i.map((e, l) => {
                    var i, n, a, s;
                    return (0, r.jsx)(
                      "img",
                      {
                        src:
                          null === (s = e.fields) || void 0 === s
                            ? void 0
                            : null === (a = s.imageFile) || void 0 === a
                            ? void 0
                            : null === (n = a.fields) || void 0 === n
                            ? void 0
                            : null === (i = n.file) || void 0 === i
                            ? void 0
                            : i.url,
                        onClick: () => d(l),
                      },
                      l
                    );
                  }),
                  s &&
                    (0, r.jsx)("div", {
                      style: { zIndex: 1e4 },
                      children: (0, r.jsx)(eQ.Z, {
                        src: (function (e) {
                          let l = [];
                          for (let t = 0; t < e.length; t++) {
                            var i, n, a, s;
                            let r =
                              null === (s = e[t].fields) || void 0 === s
                                ? void 0
                                : null === (a = s.imageFile) || void 0 === a
                                ? void 0
                                : null === (n = a.fields) || void 0 === n
                                ? void 0
                                : null === (i = n.file) || void 0 === i
                                ? void 0
                                : i.url;
                            l.push(r);
                          }
                          return l;
                        })(i),
                        currentIndex: n,
                        disableScroll: !0,
                        closeOnClickOutside: !0,
                        onClose: () => {
                          a(0), t(!1);
                        },
                        backgroundStyle: { opacity: 0.97 },
                      }),
                    }),
                ],
              }),
            });
          },
          [u.HV.FundingForm]: (e) => {
            let { section: l } = e,
              [i, n] = (0, o.useState)(!1),
              [a, s] = (0, o.useState)(""),
              [t, d] = (0, o.useState)(!1),
              [c, m] = (0, o.useState)(null),
              { title: v } = l.fields,
              [p, x] = (0, o.useState)(null),
              { deviceSize: f } = (0, g.b)(),
              {
                control: j,
                handleSubmit: b,
                reset: y,
              } = (0, eq.cI)({ resolver: (0, e_.X)(eO) }),
              N = async (e) => {
                try {
                  let l = await eR.v.sendFoundation({
                      toEmail: e.email,
                      fromEmail: "donotreply@selectquote.com",
                      subject: "Thank you for contacting SelectQuote",
                      body: eU(e),
                      attachment: a,
                      ...e,
                    }),
                    i = await eR.v.sendFoundation({
                      toEmail: "sqcommunity@selectquote.com",
                      fromEmail: "donotreply@selectquote.com",
                      subject: "SelectQuote Partnerships Inquiry",
                      body: eJ(e),
                      attachment: a,
                      ...e,
                    });
                  200 === l.status && 200 === i.status && n(!0),
                    await eR.v.deleteImg(a);
                } catch (e) {
                  console.log(e);
                }
              },
              w = async (e) => {
                let l = e[0];
                if (l.size <= 15e5) m(l);
                else {
                  alert("File size must be less than 1.5 MB");
                  return;
                }
                let i = null == l ? void 0 : l.name;
                x(i), d(!0);
                try {
                  let l = new FormData();
                  a.length && (await eR.v.deleteImg(a), s("")),
                    l.append("img", e[0]);
                  let {
                    data: { filepath: i },
                  } = await eR.v.uploadImg(l);
                  s(i);
                } catch (e) {
                  console.log(e);
                }
                d(!1);
              };
            return (0, r.jsx)("div", {
              className: "pt-5 pb-5",
              children: (0, h.sD)(f)
                ? (0, r.jsx)("div", {
                    className: "desktop-form",
                    id: "foundation-form",
                    children: (0, r.jsxs)("form", {
                      noValidate: !0,
                      autoComplete: "off",
                      onSubmit: b(N),
                      children: [
                        (0, r.jsx)(z, { text: v.fields.content }),
                        i
                          ? (0, r.jsx)("p", {
                              style: { color: "#646464" },
                              children:
                                "Thank you for sahring you interest in partnering with SelectQuote. A member of our team will be in touch shortly.",
                            })
                          : (0, r.jsxs)(r.Fragment, {
                              children: [
                                (0, r.jsxs)("div", {
                                  className: "row",
                                  children: [
                                    (0, r.jsxs)("div", {
                                      className: "col",
                                      children: [
                                        (0, r.jsxs)("label", {
                                          className: "form-label",
                                          children: [
                                            "First Name ",
                                            (0, r.jsx)("span", {
                                              className: "text-danger",
                                              children: "*",
                                            }),
                                          ],
                                        }),
                                        (0, r.jsx)(eA, {
                                          placeholder: "",
                                          control: j,
                                          name: "firstName",
                                          width: "100%",
                                        }),
                                      ],
                                    }),
                                    (0, r.jsxs)("div", {
                                      className: "col",
                                      children: [
                                        (0, r.jsxs)("label", {
                                          className: "form-label",
                                          children: [
                                            "Last Name ",
                                            (0, r.jsx)("span", {
                                              className: "text-danger",
                                              children: "*",
                                            }),
                                          ],
                                        }),
                                        (0, r.jsx)(eA, {
                                          placeholder: "",
                                          control: j,
                                          name: "lastName",
                                          width: "100%",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, r.jsxs)("div", {
                                  className: "row mt-4",
                                  children: [
                                    (0, r.jsxs)("div", {
                                      className: "col",
                                      children: [
                                        (0, r.jsxs)("label", {
                                          className: "form-label",
                                          children: [
                                            "Email ",
                                            (0, r.jsx)("span", {
                                              className: "text-danger",
                                              children: "*",
                                            }),
                                          ],
                                        }),
                                        (0, r.jsx)(eA, {
                                          placeholder: "",
                                          control: j,
                                          name: "email",
                                          width: "100%",
                                        }),
                                      ],
                                    }),
                                    (0, r.jsxs)("div", {
                                      className: "col",
                                      children: [
                                        (0, r.jsxs)("label", {
                                          className: "form-label",
                                          children: [
                                            "Phone Number ",
                                            (0, r.jsx)("span", {
                                              className: "text-danger",
                                              children: "*",
                                            }),
                                          ],
                                        }),
                                        (0, r.jsx)(eA, {
                                          placeholder: "",
                                          control: j,
                                          name: "phoneNumber",
                                          width: "100%",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, r.jsx)("div", {
                                  className: "row mt-4",
                                  children: (0, r.jsxs)("div", {
                                    className: "col",
                                    children: [
                                      (0, r.jsxs)("label", {
                                        className: "form-label",
                                        children: [
                                          "Organization Name ",
                                          (0, r.jsx)("span", {
                                            className: "text-danger",
                                            children: "*",
                                          }),
                                        ],
                                      }),
                                      (0, r.jsx)(eA, {
                                        placeholder: "",
                                        control: j,
                                        name: "organizationName",
                                        width: "100%",
                                      }),
                                    ],
                                  }),
                                }),
                                (0, r.jsx)("div", {
                                  className: "row mt-4",
                                  children: (0, r.jsxs)("div", {
                                    className: "col",
                                    children: [
                                      (0, r.jsxs)("label", {
                                        className: "form-label",
                                        children: [
                                          "Organization Website ",
                                          (0, r.jsx)("span", {
                                            className: "text-danger",
                                            children: "*",
                                          }),
                                        ],
                                      }),
                                      (0, r.jsx)(eA, {
                                        placeholder: "",
                                        control: j,
                                        name: "organizationWesbsite",
                                        width: "100%",
                                      }),
                                    ],
                                  }),
                                }),
                                (0, r.jsx)("div", {
                                  className: "row mt-4",
                                  children: (0, r.jsxs)("div", {
                                    className: "col",
                                    children: [
                                      (0, r.jsxs)("label", {
                                        className: "form-label",
                                        children: [
                                          "Organization Address ",
                                          (0, r.jsx)("span", {
                                            className: "text-danger",
                                            children: "*",
                                          }),
                                        ],
                                      }),
                                      (0, r.jsx)(eA, {
                                        placeholder: "",
                                        control: j,
                                        name: "organizationAddress",
                                        width: "100%",
                                      }),
                                    ],
                                  }),
                                }),
                                (0, r.jsx)("div", {
                                  className: "row mt-4",
                                  children: (0, r.jsxs)("div", {
                                    className: "col",
                                    children: [
                                      (0, r.jsxs)("label", {
                                        className: "form-label",
                                        children: [
                                          "Organization Mission Statement ",
                                          (0, r.jsx)("span", {
                                            className: "text-danger",
                                            children: "*",
                                          }),
                                        ],
                                      }),
                                      (0, r.jsx)(eA, {
                                        placeholder: "",
                                        control: j,
                                        name: "organizationStatement",
                                        width: "100%",
                                      }),
                                    ],
                                  }),
                                }),
                                (0, r.jsx)("div", {
                                  className: "row mt-4",
                                  children: (0, r.jsxs)("div", {
                                    className: "col",
                                    children: [
                                      (0, r.jsxs)("label", {
                                        className: "form-label",
                                        children: [
                                          "Please provide an overview of your organization, including history, current programs and activities, and any accomplishments from the last three years ",
                                          (0, r.jsx)("span", {
                                            className: "text-danger",
                                            children: "*",
                                          }),
                                        ],
                                      }),
                                      (0, r.jsx)(eA, {
                                        placeholder: "",
                                        control: j,
                                        name: "organizationOverview",
                                        width: "100%",
                                      }),
                                    ],
                                  }),
                                }),
                                (0, r.jsxs)("div", {
                                  className: "row mt-4",
                                  children: [
                                    (0, r.jsxs)("p", {
                                      children: [
                                        "Please provide a brief description of your proposal, including: ",
                                        (0, r.jsx)("span", {
                                          className: "text-danger",
                                          children: "*",
                                        }),
                                      ],
                                    }),
                                    (0, r.jsx)("div", {
                                      className: "col",
                                      children: (0, r.jsxs)("ul", {
                                        children: [
                                          (0, r.jsx)("li", {
                                            children:
                                              "Problem or need which you seek to address",
                                          }),
                                          (0, r.jsx)("li", {
                                            children:
                                              "Purpose, objectives, and key anticipated outcomes",
                                          }),
                                          (0, r.jsx)("li", {
                                            children:
                                              "Individuals or communities served",
                                          }),
                                        ],
                                      }),
                                    }),
                                    (0, r.jsx)("div", {
                                      className: "col",
                                      children: (0, r.jsxs)("ul", {
                                        children: [
                                          (0, r.jsx)("li", {
                                            children:
                                              "Budget/amount of funding requested",
                                          }),
                                          (0, r.jsx)("li", {
                                            children:
                                              "Overview of how funds will be spent",
                                          }),
                                          (0, r.jsx)("li", {
                                            children: "Timeline",
                                          }),
                                        ],
                                      }),
                                    }),
                                    (0, r.jsx)("div", {
                                      children: (0, r.jsx)(eA, {
                                        placeholder: "",
                                        control: j,
                                        name: "organizationDescription",
                                        width: "100%",
                                      }),
                                    }),
                                  ],
                                }),
                                (0, r.jsx)("div", {
                                  className: "row mt-4",
                                  children: (0, r.jsxs)("div", {
                                    className: "col",
                                    children: [
                                      (0, r.jsxs)("label", {
                                        className: "form-label",
                                        children: [
                                          "Please specify the needs and/or program this grant will directly support. ",
                                          (0, r.jsx)("span", {
                                            className: "text-danger",
                                            children: "*",
                                          }),
                                        ],
                                      }),
                                      (0, r.jsx)(eA, {
                                        placeholder: "",
                                        control: j,
                                        name: "program",
                                        width: "100%",
                                      }),
                                    ],
                                  }),
                                }),
                                (0, r.jsx)("div", {
                                  className: "row mt-4",
                                  children: (0, r.jsxs)("div", {
                                    className: "col",
                                    children: [
                                      (0, r.jsxs)("label", {
                                        className: "form-label",
                                        children: [
                                          "Please list how much money you're requesting. ",
                                          (0, r.jsx)("span", {
                                            className: "text-danger",
                                            children: "*",
                                          }),
                                        ],
                                      }),
                                      (0, r.jsx)(eA, {
                                        placeholder: "",
                                        control: j,
                                        name: "amount",
                                        width: "100%",
                                      }),
                                    ],
                                  }),
                                }),
                                (0, r.jsx)("div", {
                                  className: "row mt-4",
                                  children: (0, r.jsxs)("div", {
                                    className: "col",
                                    children: [
                                      (0, r.jsx)("label", {
                                        className: "form-label",
                                        children:
                                          "Will there be any partners in this proposal?",
                                      }),
                                      (0, r.jsxs)("ul", {
                                        className: "custom-radio radio1",
                                        children: [
                                          (0, r.jsxs)("li", {
                                            children: [
                                              (0, r.jsx)("input", {
                                                type: "radio",
                                                id: "yes",
                                                name: "radio-option",
                                              }),
                                              (0, r.jsx)("label", {
                                                htmlFor: "yes",
                                                children: "Yes",
                                              }),
                                            ],
                                          }),
                                          (0, r.jsxs)("li", {
                                            children: [
                                              (0, r.jsx)("input", {
                                                type: "radio",
                                                id: "no",
                                                name: "radio-option",
                                              }),
                                              (0, r.jsx)("label", {
                                                htmlFor: "no",
                                                children: "No",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                                (0, r.jsx)("div", {
                                  className: "row mt-4",
                                  children: (0, r.jsxs)("div", {
                                    className: "col",
                                    children: [
                                      (0, r.jsxs)("label", {
                                        className: "form-label",
                                        children: [
                                          "Organization IRS EIN Number ",
                                          (0, r.jsx)("span", {
                                            className: "text-danger",
                                            children: "*",
                                          }),
                                        ],
                                      }),
                                      (0, r.jsx)(eA, {
                                        placeholder: "",
                                        control: j,
                                        name: "IRS",
                                        width: "100%",
                                      }),
                                    ],
                                  }),
                                }),
                                (0, r.jsx)("div", {
                                  className: "row mt-4",
                                  children: (0, r.jsxs)("div", {
                                    className: "col",
                                    children: [
                                      (0, r.jsxs)("label", {
                                        className: "form-label",
                                        children: [
                                          "Please provide a third-party reference ",
                                          (0, r.jsx)("span", {
                                            className: "text-danger",
                                            children: "*",
                                          }),
                                        ],
                                      }),
                                      (0, r.jsx)(eA, {
                                        placeholder: "",
                                        control: j,
                                        name: "reference",
                                        width: "100%",
                                      }),
                                    ],
                                  }),
                                }),
                                (0, r.jsx)("div", {
                                  className: "row mt-4",
                                  children: (0, r.jsxs)("div", {
                                    className: "col",
                                    children: [
                                      (0, r.jsxs)("label", {
                                        className: "form-label",
                                        children: [
                                          "Please list your Board of Directors: ",
                                          (0, r.jsx)("span", {
                                            className: "text-danger",
                                            children: "*",
                                          }),
                                        ],
                                      }),
                                      (0, r.jsx)(eA, {
                                        placeholder: "",
                                        control: j,
                                        name: "boardOfDirector",
                                        width: "100%",
                                      }),
                                    ],
                                  }),
                                }),
                                (0, r.jsx)("div", {
                                  className: "row mt-4",
                                  children: (0, r.jsxs)("div", {
                                    className: "col",
                                    children: [
                                      (0, r.jsxs)("label", {
                                        className: "form-label",
                                        children: [
                                          "Please list name and title of any key staff involved with this project: ",
                                          (0, r.jsx)("span", {
                                            className: "text-danger",
                                            children: "*",
                                          }),
                                        ],
                                      }),
                                      (0, r.jsx)(eA, {
                                        placeholder: "",
                                        control: j,
                                        name: "staffInvolved",
                                        width: "100%",
                                      }),
                                    ],
                                  }),
                                }),
                                (0, r.jsxs)("div", {
                                  className: "row mt-4",
                                  children: [
                                    (0, r.jsx)("label", {
                                      className: "form-label",
                                      children: "Please attach the following:",
                                    }),
                                    (0, r.jsx)("div", {
                                      className: "col",
                                      children: (0, r.jsxs)("ul", {
                                        children: [
                                          (0, r.jsx)("li", {
                                            children: "Cash flow statement",
                                          }),
                                          (0, r.jsx)("li", {
                                            children:
                                              "Audited financial statements",
                                          }),
                                          (0, r.jsx)("li", {
                                            children:
                                              "Current operating budget",
                                          }),
                                        ],
                                      }),
                                    }),
                                    (0, r.jsx)("div", {
                                      className: "col",
                                      children: (0, r.jsxs)("ul", {
                                        children: [
                                          (0, r.jsx)("li", {
                                            children: "Annual Report",
                                          }),
                                          (0, r.jsx)("li", {
                                            children:
                                              "Any supplementary documents which you feel will be essential to the review committee",
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                                (0, r.jsx)("div", {
                                  className: "row mt-4",
                                  children: (0, r.jsx)("div", {
                                    className: "col",
                                    children: (0, r.jsx)("div", {
                                      id: "fileupload",
                                      children: (0, r.jsx)(eW.b, {
                                        handleChange: w,
                                        name: "file",
                                        types: u.vH,
                                        multiple: "true",
                                        label:
                                          "Drop a file here or click to upload\nMaximum upload size: 1.5MB",
                                        maxSize: 15e5,
                                        style: { whiteSpace: "pre-line" },
                                        children:
                                          p && (0, r.jsx)("p", { children: p }),
                                      }),
                                    }),
                                  }),
                                }),
                                (0, r.jsx)("div", {
                                  className: "mt-4",
                                  children: (0, r.jsx)("div", {
                                    className: "button-container",
                                    children: (0, r.jsx)("button", {
                                      type: "submit",
                                      className: "action-btn btn-border",
                                      style: {
                                        color: "#ffffff",
                                        backgroundColor: "#F47B20",
                                      },
                                      disabled: t,
                                      children: "Apply Now",
                                    }),
                                  }),
                                }),
                              ],
                            }),
                      ],
                    }),
                  })
                : (0, r.jsx)("div", {
                    className: "mobile-form",
                    id: "foundation-form",
                    children: (0, r.jsxs)("form", {
                      noValidate: !0,
                      autoComplete: "off",
                      onSubmit: b(N),
                      children: [
                        (0, r.jsx)(z, { text: v.fields.content }),
                        i
                          ? (0, r.jsx)("p", {
                              style: { color: "#646464" },
                              children:
                                "Thank you for sahring you interest in partnering with SelectQuote. A member of our team will be in touch shortly.",
                            })
                          : (0, r.jsxs)(r.Fragment, {
                              children: [
                                (0, r.jsxs)("div", {
                                  className: "row",
                                  children: [
                                    (0, r.jsxs)("div", {
                                      className: "row",
                                      children: [
                                        (0, r.jsxs)("label", {
                                          className: "form-label",
                                          children: [
                                            "First Name ",
                                            (0, r.jsx)("span", {
                                              className: "text-danger",
                                              children: "*",
                                            }),
                                          ],
                                        }),
                                        (0, r.jsx)(eA, {
                                          placeholder: "",
                                          control: j,
                                          name: "firstName",
                                          width: "100%",
                                        }),
                                      ],
                                    }),
                                    (0, r.jsxs)("div", {
                                      className: "row mt-4",
                                      children: [
                                        (0, r.jsxs)("label", {
                                          className: "form-label",
                                          children: [
                                            "Last Name ",
                                            (0, r.jsx)("span", {
                                              className: "text-danger",
                                              children: "*",
                                            }),
                                          ],
                                        }),
                                        (0, r.jsx)(eA, {
                                          placeholder: "",
                                          control: j,
                                          name: "lastName",
                                          width: "100%",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, r.jsxs)("div", {
                                  className: "row mt-4",
                                  children: [
                                    (0, r.jsxs)("div", {
                                      className: "row",
                                      children: [
                                        (0, r.jsxs)("label", {
                                          className: "form-label",
                                          children: [
                                            "Email ",
                                            (0, r.jsx)("span", {
                                              className: "text-danger",
                                              children: "*",
                                            }),
                                          ],
                                        }),
                                        (0, r.jsx)(eA, {
                                          placeholder: "",
                                          control: j,
                                          name: "email",
                                          width: "100%",
                                        }),
                                      ],
                                    }),
                                    (0, r.jsxs)("div", {
                                      className: "row mt-4",
                                      children: [
                                        (0, r.jsxs)("label", {
                                          className: "form-label",
                                          children: [
                                            "Phone Number ",
                                            (0, r.jsx)("span", {
                                              className: "text-danger",
                                              children: "*",
                                            }),
                                          ],
                                        }),
                                        (0, r.jsx)(eA, {
                                          placeholder: "",
                                          control: j,
                                          name: "phoneNumber",
                                          width: "100%",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, r.jsx)("div", {
                                  className: "row mt-4",
                                  children: (0, r.jsxs)("div", {
                                    className: "col",
                                    children: [
                                      (0, r.jsxs)("label", {
                                        className: "form-label",
                                        children: [
                                          "Organization Name ",
                                          (0, r.jsx)("span", {
                                            className: "text-danger",
                                            children: "*",
                                          }),
                                        ],
                                      }),
                                      (0, r.jsx)(eA, {
                                        placeholder: "",
                                        control: j,
                                        name: "organizationName",
                                        width: "94%",
                                      }),
                                    ],
                                  }),
                                }),
                                (0, r.jsx)("div", {
                                  className: "row mt-4",
                                  children: (0, r.jsxs)("div", {
                                    className: "col",
                                    children: [
                                      (0, r.jsxs)("label", {
                                        className: "form-label",
                                        children: [
                                          "Organization Website ",
                                          (0, r.jsx)("span", {
                                            className: "text-danger",
                                            children: "*",
                                          }),
                                        ],
                                      }),
                                      (0, r.jsx)(eA, {
                                        placeholder: "",
                                        control: j,
                                        name: "organizationWesbsite",
                                        width: "94%",
                                      }),
                                    ],
                                  }),
                                }),
                                (0, r.jsx)("div", {
                                  className: "row mt-4",
                                  children: (0, r.jsxs)("div", {
                                    className: "col",
                                    children: [
                                      (0, r.jsxs)("label", {
                                        className: "form-label",
                                        children: [
                                          "Organization Address ",
                                          (0, r.jsx)("span", {
                                            className: "text-danger",
                                            children: "*",
                                          }),
                                        ],
                                      }),
                                      (0, r.jsx)(eA, {
                                        placeholder: "",
                                        control: j,
                                        name: "organizationAddress",
                                        width: "94%",
                                      }),
                                    ],
                                  }),
                                }),
                                (0, r.jsx)("div", {
                                  className: "row mt-4",
                                  children: (0, r.jsxs)("div", {
                                    className: "col",
                                    children: [
                                      (0, r.jsxs)("label", {
                                        className: "form-label",
                                        children: [
                                          "Organization Mission Statement ",
                                          (0, r.jsx)("span", {
                                            className: "text-danger",
                                            children: "*",
                                          }),
                                        ],
                                      }),
                                      (0, r.jsx)(eA, {
                                        placeholder: "",
                                        control: j,
                                        name: "organizationStatement",
                                        width: "94%",
                                      }),
                                    ],
                                  }),
                                }),
                                (0, r.jsx)("div", {
                                  className: "row mt-4",
                                  children: (0, r.jsxs)("div", {
                                    className: "col",
                                    children: [
                                      (0, r.jsxs)("label", {
                                        className: "form-label",
                                        children: [
                                          "Please provide an overview of your organization, including history, current programs and activities, and any accomplishments from the last three years ",
                                          (0, r.jsx)("span", {
                                            className: "text-danger",
                                            children: "*",
                                          }),
                                        ],
                                      }),
                                      (0, r.jsx)(eA, {
                                        placeholder: "",
                                        control: j,
                                        name: "organizationOverview",
                                        width: "94%",
                                      }),
                                    ],
                                  }),
                                }),
                                (0, r.jsxs)("div", {
                                  className: "row mt-4",
                                  children: [
                                    (0, r.jsxs)("p", {
                                      children: [
                                        "Please provide a brief description of your proposal, including: ",
                                        (0, r.jsx)("span", {
                                          className: "text-danger",
                                          children: "*",
                                        }),
                                      ],
                                    }),
                                    (0, r.jsx)("div", {
                                      className: "row mt-5",
                                      children: (0, r.jsxs)("ul", {
                                        children: [
                                          (0, r.jsx)("li", {
                                            children:
                                              "Problem or need which you seek to address",
                                          }),
                                          (0, r.jsx)("li", {
                                            children:
                                              "Purpose, objectives, and key anticipated outcomes",
                                          }),
                                          (0, r.jsx)("li", {
                                            children:
                                              "Individuals or communities served",
                                          }),
                                        ],
                                      }),
                                    }),
                                    (0, r.jsx)("div", {
                                      className: "row",
                                      children: (0, r.jsxs)("ul", {
                                        children: [
                                          (0, r.jsx)("li", {
                                            children:
                                              "Budget/amount of funding requested",
                                          }),
                                          (0, r.jsx)("li", {
                                            children:
                                              "Overview of how funds will be spent",
                                          }),
                                          (0, r.jsx)("li", {
                                            children: "Timeline",
                                          }),
                                        ],
                                      }),
                                    }),
                                    (0, r.jsx)("div", {
                                      children: (0, r.jsx)(eA, {
                                        placeholder: "",
                                        control: j,
                                        name: "organizationDescription",
                                        width: "94%",
                                      }),
                                    }),
                                  ],
                                }),
                                (0, r.jsx)("div", {
                                  className: "row mt-4",
                                  children: (0, r.jsxs)("div", {
                                    className: "col",
                                    children: [
                                      (0, r.jsxs)("label", {
                                        className: "form-label",
                                        children: [
                                          "Please specify the needs and/or program this grant will directly support. ",
                                          (0, r.jsx)("span", {
                                            className: "text-danger",
                                            children: "*",
                                          }),
                                        ],
                                      }),
                                      (0, r.jsx)(eA, {
                                        placeholder: "",
                                        control: j,
                                        name: "program",
                                        width: "94%",
                                      }),
                                    ],
                                  }),
                                }),
                                (0, r.jsx)("div", {
                                  className: "row mt-4",
                                  children: (0, r.jsxs)("div", {
                                    className: "col",
                                    children: [
                                      (0, r.jsxs)("label", {
                                        className: "form-label",
                                        children: [
                                          "Please list how much money you're requesting. ",
                                          (0, r.jsx)("span", {
                                            className: "text-danger",
                                            children: "*",
                                          }),
                                        ],
                                      }),
                                      (0, r.jsx)(eA, {
                                        placeholder: "",
                                        control: j,
                                        name: "amount",
                                        width: "94%",
                                      }),
                                    ],
                                  }),
                                }),
                                (0, r.jsx)("div", {
                                  className: "row mt-4",
                                  children: (0, r.jsxs)("div", {
                                    className: "row",
                                    children: [
                                      (0, r.jsx)("label", {
                                        className: "form-label",
                                        children:
                                          "Will there be any partners in this proposal?",
                                      }),
                                      (0, r.jsxs)("ul", {
                                        className:
                                          "custom-radio radio1 col pb-1 radio-align",
                                        children: [
                                          (0, r.jsxs)("li", {
                                            children: [
                                              (0, r.jsx)("input", {
                                                type: "radio",
                                                id: "yes",
                                                name: "radio-option",
                                              }),
                                              (0, r.jsx)("label", {
                                                htmlFor: "yes",
                                                children: "Yes",
                                              }),
                                            ],
                                          }),
                                          (0, r.jsxs)("li", {
                                            children: [
                                              (0, r.jsx)("input", {
                                                type: "radio",
                                                id: "no",
                                                name: "radio-option",
                                              }),
                                              (0, r.jsx)("label", {
                                                htmlFor: "no",
                                                children: "No",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                                (0, r.jsx)("div", {
                                  className: "row mt-4",
                                  children: (0, r.jsxs)("div", {
                                    className: "col",
                                    children: [
                                      (0, r.jsxs)("label", {
                                        className: "form-label",
                                        children: [
                                          "Organization IRS EIN Number ",
                                          (0, r.jsx)("span", {
                                            className: "text-danger",
                                            children: "*",
                                          }),
                                        ],
                                      }),
                                      (0, r.jsx)(eA, {
                                        placeholder: "",
                                        control: j,
                                        name: "IRS",
                                        width: "94%",
                                      }),
                                    ],
                                  }),
                                }),
                                (0, r.jsx)("div", {
                                  className: "row mt-4",
                                  children: (0, r.jsxs)("div", {
                                    className: "col",
                                    children: [
                                      (0, r.jsxs)("label", {
                                        className: "form-label",
                                        children: [
                                          "Please provide a third-party reference ",
                                          (0, r.jsx)("span", {
                                            className: "text-danger",
                                            children: "*",
                                          }),
                                        ],
                                      }),
                                      (0, r.jsx)(eA, {
                                        placeholder: "",
                                        control: j,
                                        name: "reference",
                                        width: "94%",
                                      }),
                                    ],
                                  }),
                                }),
                                (0, r.jsx)("div", {
                                  className: "row mt-4",
                                  children: (0, r.jsxs)("div", {
                                    className: "col",
                                    children: [
                                      (0, r.jsxs)("label", {
                                        className: "form-label",
                                        children: [
                                          "Please list your Board of Directors: ",
                                          (0, r.jsx)("span", {
                                            className: "text-danger",
                                            children: "*",
                                          }),
                                        ],
                                      }),
                                      (0, r.jsx)(eA, {
                                        placeholder: "",
                                        control: j,
                                        name: "boardOfDirector",
                                        width: "94%",
                                      }),
                                    ],
                                  }),
                                }),
                                (0, r.jsx)("div", {
                                  className: "row mt-4",
                                  children: (0, r.jsxs)("div", {
                                    className: "col",
                                    children: [
                                      (0, r.jsxs)("label", {
                                        className: "form-label",
                                        children: [
                                          "Please list name and title of any key staff involved with this project: ",
                                          (0, r.jsx)("span", {
                                            className: "text-danger",
                                            children: "*",
                                          }),
                                        ],
                                      }),
                                      (0, r.jsx)(eA, {
                                        placeholder: "",
                                        control: j,
                                        name: "staffInvolved",
                                        width: "94%",
                                      }),
                                    ],
                                  }),
                                }),
                                (0, r.jsxs)("div", {
                                  className: "row mt-4",
                                  children: [
                                    (0, r.jsx)("label", {
                                      className: "form-label",
                                      children: "Please attach the following:",
                                    }),
                                    (0, r.jsx)("div", {
                                      className: "row mt-4",
                                      children: (0, r.jsxs)("ul", {
                                        children: [
                                          (0, r.jsx)("li", {
                                            children: "Cash flow statement",
                                          }),
                                          (0, r.jsx)("li", {
                                            children:
                                              "Audited financial statements",
                                          }),
                                          (0, r.jsx)("li", {
                                            children:
                                              "Current operating budget",
                                          }),
                                        ],
                                      }),
                                    }),
                                    (0, r.jsx)("div", {
                                      className: "row",
                                      children: (0, r.jsxs)("ul", {
                                        children: [
                                          (0, r.jsx)("li", {
                                            children: "Annual Report",
                                          }),
                                          (0, r.jsx)("li", {
                                            children:
                                              "Any supplementary documents which you feel will be essential to the review committee",
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                                (0, r.jsx)("div", {
                                  className: "row mt-4",
                                  children: (0, r.jsx)("div", {
                                    className: "col",
                                    children: (0, r.jsxs)("div", {
                                      id: "fileupload",
                                      children: [
                                        (0, r.jsx)(eW.b, {
                                          handleChange: w,
                                          name: "file",
                                          types: u.vH,
                                          multiple: !1,
                                          label:
                                            "Drop a file here or click to upload\nMaximum upload size: 1.5MB",
                                          maxSize: 15e5,
                                          style: { whiteSpace: "pre-line" },
                                        }),
                                        p && (0, r.jsx)("p", { children: p }),
                                      ],
                                    }),
                                  }),
                                }),
                                (0, r.jsx)("div", {
                                  className: "mt-4",
                                  children: (0, r.jsx)("div", {
                                    className: "button-container",
                                    children: (0, r.jsx)("button", {
                                      type: "submit",
                                      className: "action-btn btn-border",
                                      style: {
                                        color: "#ffffff",
                                        backgroundColor: "#F47B20",
                                      },
                                      disabled: t,
                                      children: "Apply Now",
                                    }),
                                  }),
                                }),
                              ],
                            }),
                      ],
                    }),
                  }),
            });
          },
          [u.HV.Divider]: en,
          [u.HV.Table]: es,
          [u.HV.TrustPilot]: et,
          [u.HV.StaticReviews]: (e) => {
            var l, i, n, a;
            let { section: t } = e,
              { items: o, title: d, devices: c } = t.fields,
              u =
                null == c
                  ? void 0
                  : c.find((e) => {
                      var l;
                      return (
                        (null === (l = e.fields) || void 0 === l
                          ? void 0
                          : l.type) === s.Desktop
                      );
                    }),
              h =
                null == c
                  ? void 0
                  : c.find((e) => {
                      var l;
                      return (
                        (null === (l = e.fields) || void 0 === l
                          ? void 0
                          : l.type) === s.Mobile
                      );
                    }),
              m = {
                dots: !0,
                infinite: !0,
                speed: 500,
                autoplay: !0,
                responsive: [
                  {
                    breakpoint: 400,
                    settings: { slidesToShow: 1, slidesToScroll: 1 },
                  },
                ],
              };
            return (0, r.jsx)(r.Fragment, {
              children: (0, r.jsx)("div", {
                className: "review-container ",
                children: (0, r.jsxs)("div", {
                  children: [
                    (0, r.jsxs)("div", {
                      className: "wp-container-desktop",
                      style: {
                        padding:
                          null == u
                            ? void 0
                            : null === (l = u.fields) || void 0 === l
                            ? void 0
                            : l.padding,
                        width:
                          null == u
                            ? void 0
                            : null === (i = u.fields) || void 0 === i
                            ? void 0
                            : i.width,
                      },
                      children: [
                        (0, r.jsx)("p", {
                          className: "review-title",
                          children: (0, r.jsx)(z, { text: d }),
                        }),
                        (0, r.jsx)(ed.Z, {
                          className: "slider-list",
                          ...m,
                          children: o.map((e, l) =>
                            (0, r.jsxs)(r.Fragment, {
                              children: [
                                (0, r.jsx)(E, { section: e }, l),
                                (0, r.jsx)("div", {
                                  className: "trust-pilot",
                                  children: (0, r.jsx)("img", {
                                    alt: "TrustPilot",
                                    src: "/images/homepage/trustpilot.png",
                                  }),
                                }),
                              ],
                            })
                          ),
                        }),
                      ],
                    }),
                    (0, r.jsxs)("div", {
                      className: "wp-container-mobile",
                      style: {
                        padding:
                          null == h
                            ? void 0
                            : null === (n = h.fields) || void 0 === n
                            ? void 0
                            : n.padding,
                        width:
                          null == h
                            ? void 0
                            : null === (a = h.fields) || void 0 === a
                            ? void 0
                            : a.width,
                      },
                      children: [
                        (0, r.jsx)("p", {
                          className: "review-title",
                          children: (0, r.jsx)(z, { text: d }),
                        }),
                        (0, r.jsx)(ed.Z, {
                          className: "slider-list",
                          ...m,
                          children: o.map((e, l) =>
                            (0, r.jsxs)(r.Fragment, {
                              children: [
                                (0, r.jsx)(E, { section: e }, l),
                                (0, r.jsx)("div", {
                                  className: "trust-pilot",
                                  children: (0, r.jsx)("img", {
                                    alt: "TrustPilot",
                                    src: "/images/homepage/trustpilot.png",
                                    height: 28,
                                    width: 115,
                                  }),
                                }),
                              ],
                            })
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            });
          },
          [u.HV.RocketLawyer]: () => {
            let e = {
                fields: {
                  type: "Carousel",
                  businessType: u.K0.LIFE,
                  stars: "4,5",
                  templateId: "54ad5defc6454f065c28af8b",
                },
              },
              { deviceSize: l } = (0, g.b)(),
              [i, n] = (0, o.useState)(u.CM),
              [a, s] = (0, o.useState)(""),
              t = (0, G.useRouter)();
            (0, o.useEffect)(() => {
              let e = () => {
                let e = eH.uR.getItem(u.P_.SITE_SESSION_DATA);
                if (e) {
                  let { site_campaign_phone: l } = e;
                  n(l);
                }
              };
              return (
                window.addEventListener("storage", e),
                () => {
                  window.removeEventListener("storage", e);
                }
              );
            }, []);
            let d = (e) => {
              let l = new FormData(e.target),
                i = Object.fromEntries(l);
              window.location.replace(
                "https://life.selectquote.com/quote-form?sCode="
                  .concat(u.e0.LIFE)
                  .concat(
                    (null == i ? void 0 : i.zip)
                      ? "&zip=" + (null == i ? void 0 : i.zip)
                      : ""
                  )
              ),
                e.preventDefault();
            };
            return (
              (0, o.useEffect)(() => {
                let e = eH.uR.getItem(u.P_.SITE_SESSION_DATA);
                if (e) {
                  let { site_campaign_phone: l, site_source_code: i } = e;
                  n(l), s(i);
                }
              }, [t.query.slug]),
              (0, r.jsxs)("div", {
                className: "rock-lawyer",
                children: [
                  (0, r.jsxs)("div", {
                    className: "container header",
                    children: [
                      (0, r.jsx)("p", {
                        className: "title",
                        children:
                          "Make sure your loved ones are protected with SelectQuote, a trusted partner of Rocket Lawyer.",
                      }),
                      (0, r.jsx)("p", {
                        className: "sub-section",
                        children:
                          "Buying life insurance can seem intimidating, but with the cost of everything on the rise, it’s important to make sure your loved ones are protected financially. And did you know life insurance rates are actually decreasing? In just minutes, we can find the insurance you need at a price you can afford—with some policies less than $1/day.",
                      }),
                      (0, r.jsxs)("p", {
                        className: "sub-section",
                        children: [
                          "Life insurance can play a significant role in your estate plans, which is why SelectQuote and Rocket Lawyer are working together to make sure you have the right coverage for your needs. Get a free quote today at ",
                          (0, r.jsx)("span", {
                            className: "mobile",
                            children: i,
                          }),
                          ".",
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className: "why-selectquote ".concat(
                      "".concat((0, h.sD)(l) ? "container" : "")
                    ),
                    children: [
                      (0, r.jsxs)("div", {
                        className: "copy-container",
                        children: [
                          (0, r.jsx)("p", {
                            className: "title text-center",
                            children: "Why SelectQuote?",
                          }),
                          (0, r.jsx)("p", {
                            className: "sub-section",
                            children:
                              "At SelectQuote, we’re dedicated to helping you find the right coverage with the right carrier at the right price.",
                          }),
                          (0, r.jsxs)("div", {
                            className: "multi-column",
                            children: [
                              (0, r.jsxs)("div", {
                                children: [
                                  (0, r.jsx)("img", {
                                    width: 106,
                                    height: 106,
                                    src: "/images/content/piggybank.png",
                                    alt: "search-icon",
                                  }),
                                  (0, r.jsx)("p", {
                                    className: "col",
                                    children:
                                      "Life insurance starting as low as $1/day",
                                  }),
                                ],
                              }),
                              (0, r.jsxs)("div", {
                                children: [
                                  (0, r.jsx)("img", {
                                    width: 106,
                                    height: 106,
                                    src: "/images/content/handheart.png",
                                    alt: "search-icon",
                                  }),
                                  (0, r.jsx)("p", {
                                    className: "col",
                                    children:
                                      "Helped millions of families find the right life insurance for 35+ years",
                                  }),
                                ],
                              }),
                              (0, r.jsxs)("div", {
                                children: [
                                  (0, r.jsx)("img", {
                                    width: 106,
                                    height: 106,
                                    src: "/images/content/handshake.png",
                                    alt: "search-icon",
                                  }),
                                  (0, r.jsx)("p", {
                                    className: "col",
                                    children:
                                      "Work with some of the nation’s most trusted insurance carriers",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, r.jsx)("div", {
                        className: "cta-container",
                        children: (0, r.jsx)("button", {
                          onClick: () => {
                            window.open(
                              "https://life.selectquote.com/quote-form?sCode=".concat(
                                u.e0.LIFE
                              ),
                              "_self"
                            );
                          },
                          children: "Get a Free Quote",
                        }),
                      }),
                    ],
                  }),
                  (0, r.jsx)("div", {
                    className: "trust-pilot-box",
                    children: (0, r.jsxs)("div", {
                      className: " container",
                      children: [
                        (0, r.jsx)("p", {
                          children: "SelectQuote Customer Reviews",
                        }),
                        (0, r.jsx)(et, { section: e }),
                      ],
                    }),
                  }),
                  (0, r.jsxs)("div", {
                    className: "help-container  container",
                    children: [
                      (0, r.jsx)("p", {
                        className: "title",
                        children: "We can help with all your insurance needs.",
                      }),
                      (0, r.jsx)("p", {
                        className: "sub-section",
                        children:
                          "Whether it’s your family, your home or your health, we can help you protect the things in life that matter most.",
                      }),
                      (0, r.jsxs)("div", {
                        className: "help-column",
                        children: [
                          (0, r.jsxs)("div", {
                            children: [
                              " ",
                              (0, r.jsx)("img", {
                                width: 200,
                                height: 100,
                                src: "/images/content/auto-home-icon.png",
                                alt: "search-icon",
                              }),
                              (0, r.jsx)("p", {
                                className: "product-title",
                                children: "Auto & Home Insurance",
                              }),
                              (0, r.jsx)("p", {
                                children:
                                  "We’ll work to find the best price available rates in your area.",
                              }),
                              (0, r.jsx)("button", {
                                onClick: () => {
                                  window.open(
                                    "https://homeandauto.selectquote.com/quote-form?sCode=".concat(
                                      u.e0.AUTO_HOME
                                    ),
                                    "_self"
                                  );
                                },
                                children: "Get a Free Quote",
                              }),
                            ],
                          }),
                          (0, r.jsxs)("div", {
                            className: "medical",
                            children: [
                              (0, r.jsx)("img", {
                                width: 200,
                                height: 100,
                                src: "/images/content/medicare-icon.png",
                                alt: "search-icon",
                              }),
                              (0, r.jsx)("p", {
                                className: "product-title",
                                children: "Medicare Insurance",
                              }),
                              (0, r.jsx)("p", {
                                children:
                                  "Find the perfect plan to fill your healthcare needs.",
                              }),
                              (0, r.jsx)("button", {
                                onClick: () => {
                                  window.open(
                                    "https://medicare.selectquote.com/quote-form?sCode=".concat(
                                      u.e0.MEDICARE
                                    ),
                                    "_self"
                                  );
                                },
                                children: "Get a Free Quote",
                              }),
                              (0, r.jsx)("p", {
                                className: "sub-copy",
                                children: "No obligation to enroll",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, r.jsxs)("div", {
                    className: "footer-cta",
                    children: [
                      (0, r.jsx)("div", {
                        className: "copy",
                        children: (0, r.jsx)("p", {
                          className: "title",
                          children: "We do the shopping. You do the saving.",
                        }),
                      }),
                      (0, r.jsx)("div", {
                        className: "cta-form",
                        children: (0, r.jsxs)("form", {
                          onSubmit: (e) => {
                            d(e);
                          },
                          children: [
                            (0, r.jsx)("input", {
                              placeholder: "Enter Zip",
                              name: "zip",
                              className: "cursor-center",
                              minLength: 5,
                              maxLength: 5,
                            }),
                            (0, r.jsx)("button", {
                              type: "submit",
                              className: "flat-button",
                              children: "Get a Free Quote",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              })
            );
          },
          [u.HV.InlineContent]: er,
          [u.HV.Articles]: (e) => {
            var l, i;
            let { section: n } = e,
              { primaryColor: a } = (0, g.b)(),
              [s, t] = (0, o.useState)(null),
              [d, c] = (0, o.useState)(!1),
              [u, h] = (0, o.useState)([]),
              [m, v] = (0, o.useState)(1),
              [p, x] = (0, o.useState)(1),
              f = Math.max(
                null !== (l = n.fields.pageSize) && void 0 !== l ? l : 1,
                1
              ),
              j = null !== (i = n.fields.tags) && void 0 !== i ? i : [],
              b = a || "inherit",
              y = (0, o.useCallback)(
                async (e) => {
                  let l = { page: e, limit: f };
                  j.length && (l.tags = j.join(","));
                  try {
                    var i, n;
                    c(!0);
                    let { data: a = {} } = await eu.Z.get("/api/articles", {
                      params: l,
                    });
                    h(
                      (null !== (i = a.articles) && void 0 !== i ? i : []).map(
                        (e) => eG(e)
                      )
                    ),
                      v(e),
                      x(null !== (n = a.pages) && void 0 !== n ? n : 1);
                  } finally {
                    c(!1);
                  }
                },
                [f]
              ),
              N = async (e, l) => {
                e.preventDefault(),
                  e.stopPropagation(),
                  !d &&
                    (await y(l),
                    s &&
                      setTimeout(() => {
                        window.scrollTo({
                          top: s.offsetTop - 180,
                          left: 0,
                          behavior: "smooth",
                        });
                      }, 200));
              };
            return (
              (0, o.useEffect)(() => {
                y(1);
              }, [y]),
              (0, r.jsxs)("section", {
                className: "section-articles".concat(
                  d ? " section-articles-is-busy" : ""
                ),
                ref: t,
                children: [
                  (0, r.jsx)("div", {
                    className: "section-articles-items",
                    children: u.map((e) =>
                      (0, r.jsxs)(
                        "div",
                        {
                          className: "section-articles-item",
                          children: [
                            (0, r.jsx)("div", {
                              className: "section-articles-item-image",
                              children:
                                !!e.imageUrl &&
                                (0, r.jsx)("a", {
                                  href: e.url,
                                  children: (0, r.jsx)(w(), {
                                    width: 450,
                                    height: 300,
                                    src: e.imageUrl,
                                    alt: e.title,
                                  }),
                                }),
                            }),
                            (0, r.jsxs)("div", {
                              className: "section-articles-item-content",
                              children: [
                                (0, r.jsx)("h2", {
                                  children: (0, r.jsx)("a", {
                                    href: e.url,
                                    children: e.title,
                                  }),
                                }),
                                !!e.excerpt &&
                                  (0, r.jsx)("div", {
                                    className: "section-articles-item-excerpt",
                                    children: e.excerpt
                                      .split("\n")
                                      .map((e, l) =>
                                        (0, r.jsx)("p", { children: e }, l)
                                      ),
                                  }),
                                (0, r.jsx)("div", {
                                  className: "section-articles-item-buttons",
                                  children: (0, r.jsx)("a", {
                                    href: e.url,
                                    style: { color: b },
                                    children: "Continue Reading",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        },
                        e.id
                      )
                    ),
                  }),
                  (0, r.jsx)("div", {
                    className: "section-articles-buttons",
                    children: (0, r.jsxs)("div", {
                      className: "section-articles-buttons-wrapper",
                      children: [
                        m < p &&
                          (0, r.jsx)("div", {
                            children: (0, r.jsx)("a", {
                              href: "#",
                              style: { color: b },
                              className: 1 == m ? "mb-8" : "mb-28",
                              onClick: (e) => {
                                N(e, m + 1);
                              },
                              role: "button",
                              children: "Older Articles",
                            }),
                          }),
                        m > 1 &&
                          (0, r.jsx)("div", {
                            children: (0, r.jsx)("a", {
                              href: "#",
                              style: { color: b },
                              className: "mb-8",
                              onClick: (e) => {
                                N(e, m - 1);
                              },
                              role: "button",
                              children: "Newer Articles",
                            }),
                          }),
                      ],
                    }),
                  }),
                ],
              })
            );
          },
          [u.HV.StatePlanQuote]: (e) => {
            var l, i, n, a, s, t;
            let { section: d } = e,
              [c, u] = (0, o.useState)(null),
              {
                title: h,
                leftSection: m,
                rightSection: v,
                devices: p,
              } = d.fields,
              { imageSection: x, leftSectionWidthPercentage: f = 47.25 } =
                d.fields,
              { primaryColor: j } = (0, g.b)(),
              b = eK(p),
              y = eK(
                null == x
                  ? void 0
                  : null === (l = x.fields) || void 0 === l
                  ? void 0
                  : l.devices
              );
            return (
              (0, o.useEffect)(() => {
                if (c && y) {
                  let e = 100 - f;
                  c.style.setProperty(
                    "--left-section-width",
                    "".concat(f, "%")
                  ),
                    c.style.setProperty(
                      "--right-section-width",
                      "".concat(e, "%")
                    ),
                    c.style.setProperty("--image-max-width", y.fields.maxWidth);
                }
              }, [f, y, c]),
              (0, r.jsxs)("div", {
                ref: u,
                className: "template-state-plan-quote",
                style: {
                  margin:
                    null == b
                      ? void 0
                      : null === (i = b.fields) || void 0 === i
                      ? void 0
                      : i.margin,
                  padding:
                    null == b
                      ? void 0
                      : null === (n = b.fields) || void 0 === n
                      ? void 0
                      : n.padding,
                },
                children: [
                  !!x &&
                    (0, r.jsx)("div", {
                      className: "template-state-plan-quote-mobile-image",
                      style: {
                        margin:
                          null == y
                            ? void 0
                            : null === (a = y.fields) || void 0 === a
                            ? void 0
                            : a.margin,
                        padding:
                          null == y
                            ? void 0
                            : null === (s = y.fields) || void 0 === s
                            ? void 0
                            : s.padding,
                        width:
                          null == y
                            ? void 0
                            : null === (t = y.fields) || void 0 === t
                            ? void 0
                            : t.width,
                      },
                      children: (0, r.jsx)(eM, { section: x }),
                    }),
                  (0, r.jsxs)("div", {
                    className: "template-state-plan-quote-main",
                    children: [
                      (0, r.jsxs)("div", {
                        className: "template-state-plan-quote-left-section",
                        children: [
                          (0, r.jsxs)("div", {
                            className: "template-state-plan-quote-title",
                            children: [
                              (0, r.jsx)(E, { section: h }),
                              (0, r.jsx)("div", {
                                className:
                                  "template-state-plan-quote-title-background",
                                style: { backgroundColor: j },
                              }),
                            ],
                          }),
                          (0, r.jsx)(K, { section: m }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className: "template-state-plan-quote-right-section",
                        children: [
                          (0, r.jsx)("div", {
                            className:
                              "template-state-plan-quote-desktop-image",
                            children: (0, r.jsx)(eM, { section: x }),
                          }),
                          (0, r.jsx)(K, { section: v }),
                        ],
                      }),
                    ],
                  }),
                ],
              })
            );
          },
        };
    },
    2510: function (e, l, i) {
      var n, a;
      i.d(l, {
        BR: function () {
          return x;
        },
        CM: function () {
          return c;
        },
        Fl: function () {
          return o;
        },
        HV: function () {
          return s;
        },
        K0: function () {
          return t;
        },
        L_: function () {
          return d;
        },
        P_: function () {
          return u;
        },
        RX: function () {
          return m;
        },
        V6: function () {
          return f;
        },
        dA: function () {
          return p;
        },
        e0: function () {
          return r;
        },
        mL: function () {
          return h;
        },
        vH: function () {
          return v;
        },
      });
      let s = {
        Hero: "templateHeroSection",
        FAQ: "faqItem",
        SliderSection: "templateSlider",
        MultiColumn: "templateMultiColumn",
        RichTextContent: "richTextContent",
        RichText: "richText",
        Image: "image",
        TrustPilot: "templateTrustPilot",
        Hyperlink: "hyperLink",
        Cards: "templateCards",
        Style: "templateStyle",
        Button: "templateButton",
        ProductReview: "templateProductReview",
        Card: "templateCard",
        PartnershipForm: "templatePartnershipForm",
        FundingForm: "templateFundingForm",
        Divider: "templateDivider",
        Tabs: "templateTabs",
        Gallery: "templateGallery",
        Video: "templateVideo",
        Table: "templateTable",
        StaticReviews: "templateStaticReviews",
        RocketLawyer: "templateRocketLawyer",
        RocketLawyerHeader: "rocketLawyerHeader",
        MainHeader: "header",
        InlineContent: "templateInlineContent",
        SearchQuote: "templateSearchQuote",
        Select: "templateSelect",
        CalculateInsurance: "calculateInsurance",
        Articles: "templateArticles",
        StatePlanQuote: "templateStatePlanQuote",
        StateMap: "templateStateMap",
        EnrollQuiz: "templateEnrollQuiz",
        PlanQuiz: "templatePlanQuiz",
      };
      ((a = n || (n = {})).MAIN = "MAIN"), (a.MSQ = "MSQ");
      let t = { LIFE: "Life", AUTO_REVIEWS: "Auto Reviews", SENIOR: "Senior" },
        r = { LIFE: "CLMM", MEDICARE: "RLMED", AUTO_HOME: "RLSQAH" },
        o = "GTM-W37STD3",
        d = { DEFAULT: "UCMS", BSQ: "BSQ", LSQ: "LSQ" },
        c = "1-855-653-6700",
        u = { SITE_SESSION_DATA: "site_session_data" },
        h = {
          YEAR: /^(19|20)\d{2}$/,
          PHONE: /[^\d]/g,
          POSITIVE_NUMBER: /^[1-9][0-9]*$/,
          EMAIL:
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          NUMARICAL: /^\d+$/,
          ALPHABETIC_SPACE_REGEX: /^[a-zA-Z\s]*$/,
        },
        m = "(999) 999-9999",
        v = [
          "PNG",
          "JFIF",
          "JPEG",
          "PJP",
          "JPG",
          "PPT",
          "PPTX",
          "PDF",
          "JPE",
          "POT",
          "PPS",
        ],
        p = [
          { value: "01", label: "1" },
          { value: "02", label: "2" },
          { value: "03", label: "3" },
          { value: "04", label: "4" },
          { value: "05", label: "5" },
          { value: "06", label: "6" },
          { value: "07", label: "7" },
          { value: "08", label: "8" },
          { value: "09", label: "9" },
          { value: "10", label: "10" },
          { value: "11", label: "11" },
          { value: "12", label: "12" },
          { value: "13", label: "13" },
          { value: "14", label: "14" },
          { value: "15", label: "15" },
          { value: "16", label: "16" },
          { value: "17", label: "17" },
          { value: "18", label: "18" },
          { value: "19", label: "19" },
          { value: "20", label: "20" },
          { value: "21", label: "21" },
          { value: "22", label: "22" },
          { value: "23", label: "23" },
          { value: "24", label: "24" },
          { value: "25", label: "25" },
          { value: "26", label: "26" },
          { value: "27", label: "27" },
          { value: "28", label: "28" },
          { value: "29", label: "29" },
          { value: "30", label: "30" },
          { value: "31", label: "31" },
        ],
        x = [
          { value: "January", label: "January" },
          { value: "February", label: "February" },
          { value: "March", label: "March" },
          { value: "April", label: "April" },
          { value: "May", label: "May" },
          { value: "June", label: "June" },
          { value: "July", label: "July" },
          { value: "August", label: "August" },
          { value: "September", label: "September" },
          { value: "October", label: "October" },
          { value: "November", label: "November" },
          { value: "December", label: "December" },
        ],
        f = [
          [18, 25, 32, 40],
          [19, 25, 32, 40],
          [20, 25, 32, 40],
          [21, 25, 32, 40],
          [22, 25, 32, 40],
          [23, 25, 32, 40],
          [24, 25, 32, 40],
          [25, 25, 32, 40],
          [26, 25, 32, 40],
          [27, 25, 32, 40],
          [28, 25, 32, 40],
          [29, 25, 32, 40],
          [30, 25, 31.3, 35],
          [31, 25, 30.6, 35],
          [32, 25, 30.6, 35],
          [33, 25, 30.6, 35],
          [34, 25, 30.6, 35],
          [35, 25, 30.6, 35],
          [36, 25, 30, 35],
          [37, 25, 30, 35],
          [38, 25, 30, 35],
          [39, 25, 30, 35],
          [40, 25, 29.4, 35],
          [41, 20, 23.1, 30],
          [42, 20, 23.1, 30],
          [43, 20, 23.1, 30],
          [44, 20, 23.1, 30],
          [45, 20, 23.1, 30],
          [46, 20, 22.5, 30],
          [47, 20, 22.5, 30],
          [48, 20, 22.5, 30],
          [49, 20, 22.5, 30],
          [50, 20, 21.3, 25],
          [51, 15, 16.9, 20],
          [52, 15, 16.9, 20],
          [53, 15, 16.9, 20],
          [54, 15, 16.9, 20],
          [55, 15, 16.9, 20],
          [56, 10, 15.6, 20],
          [57, 10, 15.6, 20],
          [58, 10, 15.6, 20],
          [59, 10, 15.6, 20],
          [60, 10, 14.4, 20],
          [61, 10, 10, 10],
          [62, 10, 10, 10],
          [63, 10, 10, 10],
          [64, 10, 10, 10],
          [65, 5, 9.4, 10],
          [66, 5, 6.6, 10],
          [67, 5, 6.6, 10],
          [68, 5, 6.6, 10],
          [69, 5, 6.6, 10],
          [70, 5, 5, 6],
          [71, 5, 5, 6],
          [72, 5, 5, 6],
          [73, 5, 5, 6],
          [74, 5, 5, 6],
          [75, 5, 5, 6],
          [76, 5, 5, 6],
          [77, 5, 5, 6],
          [78, 5, 5, 6],
          [79, 5, 5, 6],
          [80, 5, 5, 6],
          [81, 5, 5, 6],
          [82, 5, 5, 6],
          [83, 5, 5, 6],
          [84, 5, 5, 6],
          [85, 5, 5, 6],
        ];
    },
    6518: function (e, l, i) {
      var n, a;
      i.d(l, {
        N: function () {
          return n;
        },
      }),
        ((a = n || (n = {})).Horizontal = "Horizontal"),
        (a.Vertical = "Vertical"),
        (a.HorizontalReverse = "Horizontal Reverse"),
        (a.VerticalReverse = "Vertical Reverse");
    },
    9429: function (e, l, i) {
      i.d(l, {
        Em: function () {
          return r;
        },
        Mg: function () {
          return u;
        },
        UJ: function () {
          return o;
        },
        nI: function () {
          return t;
        },
        sD: function () {
          return d;
        },
        tq: function () {
          return s;
        },
        xv: function () {
          return c;
        },
      });
      var n = i(6518),
        a = i(1111);
      i(4445);
      let s = (e) => e === a.Y.Mobile,
        t = (e) => e === a.Y.Desktop,
        r = (e) => e === a.Y.Tablet,
        o = (e) => e === a._.Small,
        d = (e) => e === a._.Large,
        c = () => {
          var e = new Date().getTime();
          return "xxxxxx-xxxx-xxxxxx".replace(/[xy]/g, function (l) {
            var i = (e + 16 * Math.random()) % 16 | 0;
            return (
              (e = Math.floor(e / 16)),
              ("x" == l ? i : (3 & i) | 8).toString(16)
            );
          });
        },
        u = (e) => {
          switch (e) {
            case n.N.Vertical:
              return "flex-column";
            case n.N.VerticalReverse:
              return "flex-column-reverse";
            case n.N.Horizontal:
              return "flex-row";
            case n.N.HorizontalReverse:
              return "flex-row-reverse";
          }
        };
    },
    3505: function (e, l, i) {
      i.d(l, {
        v: function () {
          return s;
        },
      });
      var n = i(6154);
      let a = new (class {
          post(e, l) {
            return n.Z.post(e, l);
          }
          get(e) {
            return n.Z.get(e);
          }
        })(),
        s = new (class {
          async sendPartnership(e) {
            return await a.post("/api/partnership", e);
          }
          async sendFoundation(e) {
            return await a.post("api/foundation", e);
          }
          async deleteImg(e) {
            await n.Z.post("/api/delete", { filepath: e });
          }
          async uploadImg(e) {
            return await a.post("/api/upload", e);
          }
          async getScode(e) {
            try {
              let l = await a.get(
                "https://d9fs82ix42pq1.cloudfront.net/dev/sqcmp1/get_campaigns_table_csv?campaignKey=".concat(
                  e
                )
              );
              if (l && l.data) return l.data[0];
            } catch (e) {
              console.log(e);
            }
            return null;
          }
        })();
    },
    936: function (e, l, i) {
      i.d(l, {
        V1: function () {
          return n;
        },
        uR: function () {
          return a;
        },
      });
      let n = new (class {
          getItem(e) {
            let l = localStorage.getItem(e);
            return l ? JSON.parse(l) : null;
          }
          setItem(e, l) {
            localStorage.setItem(e, JSON.stringify(l));
          }
          removeItem(e) {
            localStorage.removeItem(e);
          }
          clear() {
            localStorage.clear();
          }
        })(),
        a = new (class {
          getItem(e) {
            let l = sessionStorage.getItem(e);
            return l && this.isValidJSON(l) ? JSON.parse(l) : l;
          }
          setItem(e, l) {
            sessionStorage.setItem(e, JSON.stringify(l));
          }
          removeItem(e) {
            sessionStorage.removeItem(e);
          }
          clear() {
            sessionStorage.clear();
          }
          isValidJSON(e) {
            try {
              JSON.parse(e);
            } catch (e) {
              return !1;
            }
            return !0;
          }
        })();
    },
    57: function (e, l, i) {
      i.d(l, {
        b: function () {
          return s;
        },
      });
      var n = i(7294),
        a = i(8128);
      let s = () => (0, n.useContext)(a.k);
    },
  },
]);
