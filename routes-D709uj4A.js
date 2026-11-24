import {
    n as e,
    r as t,
    t as n
} from "./index-BhbHOl9N.js";
var r = (...e) => e.filter((e, t, n) => !!e && e.trim() !== `` && n.indexOf(e) === t).join(` `).trim(),
    i = e => e.replace(/([a-z0-9])([A-Z])/g, `$1-$2`).toLowerCase(),
    a = e => e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) => n ? n.toUpperCase() : t.toLowerCase()),
    o = e => {
        let t = a(e);
        return t.charAt(0).toUpperCase() + t.slice(1)
    },
    s = {
        xmlns: `http://www.w3.org/2000/svg`,
        width: 24,
        height: 24,
        viewBox: `0 0 24 24`,
        fill: `none`,
        stroke: `currentColor`,
        strokeWidth: 2,
        strokeLinecap: `round`,
        strokeLinejoin: `round`
    },
    c = e => {
        for (let t in e)
            if (t.startsWith(`aria-`) || t === `role` || t === `title`) return !0;
        return !1
    },
    l = t(e()),
    u = (0, l.forwardRef)(({
        color: e = `currentColor`,
        size: t = 24,
        strokeWidth: n = 2,
        absoluteStrokeWidth: i,
        className: a = ``,
        children: o,
        iconNode: u,
        ...d
    }, f) => (0, l.createElement)(`svg`, {
        ref: f,
        ...s,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: i ? Number(n) * 24 / Number(t) : n,
        className: r(`lucide`, a),
        ...!o && !c(d) && {
            "aria-hidden": `true`
        },
        ...d
    }, [...u.map(([e, t]) => (0, l.createElement)(e, t)), ...Array.isArray(o) ? o : [o]])),
    d = (e, t) => {
        let n = (0, l.forwardRef)(({
            className: n,
            ...a
        }, s) => (0, l.createElement)(u, {
            ref: s,
            iconNode: t,
            className: r(`lucide-${i(o(e))}`, `lucide-${e}`, n),
            ...a
        }));
        return n.displayName = o(e), n
    },
    f = d(`arrow-right`, [
        [`path`, {
            d: `M5 12h14`,
            key: `1ays0h`
        }],
        [`path`, {
            d: `m12 5 7 7-7 7`,
            key: `xquz4c`
        }]
    ]),
    p = d(`check`, [
        [`path`, {
            d: `M20 6 9 17l-5-5`,
            key: `1gmf2c`
        }]
    ]),
    m = d(`clock`, [
        [`circle`, {
            cx: `12`,
            cy: `12`,
            r: `10`,
            key: `1mglay`
        }],
        [`path`, {
            d: `M12 6v6l4 2`,
            key: `mmk7yg`
        }]
    ]),
    h = d(`gift`, [
        [`path`, {
            d: `M12 7v14`,
            key: `1akyts`
        }],
        [`path`, {
            d: `M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8`,
            key: `1sqzm4`
        }],
        [`path`, {
            d: `M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5`,
            key: `kc0143`
        }],
        [`rect`, {
            x: `3`,
            y: `7`,
            width: `18`,
            height: `4`,
            rx: `1`,
            key: `1hberx`
        }]
    ]),
    g = d(`shield-check`, [
        [`path`, {
            d: `M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,
            key: `oel41y`
        }],
        [`path`, {
            d: `m9 12 2 2 4-4`,
            key: `dzmm74`
        }]
    ]),
    _ = `/assets/bg-haul-CSdz3Jks.jpg`,
    v = n(),
    y = [`Mia`, `Emma`, `Olivia`, `Sophia`, `Ava`, `Chloe`, `Isla`, `Zoe`, `Ethan`, `Liam`, `Noah`, `Lucas`, `Amelia`, `Harper`, `Ella`, `Ruby`, `Grace`, `Layla`, `Mason`, `Leo`],
    b = `KMRTBLSDHPCWNGA`.split(``),
    x = [`Melbourne`, `Sydney`, `Toronto`, `Vancouver`, `London`, `Manchester`, `New York`, `Chicago`, `Austin`, `Dublin`, `Perth`, `Calgary`, `Leeds`, `Miami`, `Seattle`];

function S(e) {
    return e[Math.floor(Math.random() * e.length)]
}

function C(e) {
    return {
        id: e,
        name: `${S(y)} ${S(b)}.`,
        city: S(x),
        amount: Math.round((100 + Math.random() * 650) / 1)
    }
}

function w() {
    let [e, t] = (0, l.useState)(null);
    return (0, l.useEffect)(() => {
        let e = 0,
            n, r = () => {
                t(C(e++)), n = setTimeout(() => t(null), 5e3)
            },
            i = setTimeout(r, 2500),
            a = setInterval(r, 9e3);
        return () => {
            clearTimeout(i), clearTimeout(n), clearInterval(a)
        }
    }, []), (0, v.jsx)(`div`, {
        "aria-live": `polite`,
        className: `pointer-events-none fixed left-3 top-3 z-30 w-fit max-w-[calc(100vw-1.5rem)] sm:left-5 sm:top-5`,
        "data-tsd-source": `/src/components/ClaimNotifications.tsx:51:5`,
        children: e && (0, v.jsxs)(`div`, {
            className: `flex animate-[claim-in_320ms_ease-out] items-center gap-3 rounded-full border border-border bg-card/95 py-2 pl-2 pr-4 backdrop-blur`,
            style: {
                boxShadow: `var(--shadow-lift)`
            },
            "data-tsd-source": `/src/components/ClaimNotifications.tsx:56:9`,
            children: [(0, v.jsx)(`span`, {
                className: `flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold text-brand-foreground`,
                style: {
                    backgroundImage: `var(--gradient-brand)`
                },
                "data-tsd-source": `/src/components/ClaimNotifications.tsx:61:11`,
                children: e.name[0]
            }), (0, v.jsxs)(`span`, {
                className: `min-w-0`,
                "data-tsd-source": `/src/components/ClaimNotifications.tsx:67:11`,
                children: [(0, v.jsxs)(`span`, {
                    className: `block truncate text-[13px] font-bold leading-tight text-foreground`,
                    "data-tsd-source": `/src/components/ClaimNotifications.tsx:68:13`,
                    children: [e.name, ` · `, e.city]
                }), (0, v.jsxs)(`span`, {
                    className: `block truncate text-[12px] leading-tight text-muted-foreground`,
                    "data-tsd-source": `/src/components/ClaimNotifications.tsx:71:13`,
                    children: [`just claimed a`, ` `, (0, v.jsxs)(`span`, {
                        className: `font-bold text-brand`,
                        "data-tsd-source": `/src/components/ClaimNotifications.tsx:73:15`,
                        children: [`$`, e.amount]
                    }), ` gift card`]
                })]
            }), (0, v.jsx)(`span`, {
                className: `h-2 w-2 shrink-0 rounded-full bg-brand`,
                "data-tsd-source": `/src/components/ClaimNotifications.tsx:76:11`
            })]
        }, e.id)
    })
}

function T({
    className: e = ``,
    withWordmark: t = !0
}) {
    return (0, v.jsxs)(`span`, {
        className: `inline-flex items-center gap-2 ${e}`,
        "data-tsd-source": `/src/components/LululemonLogo.tsx:11:5`,
        children: [(0, v.jsx)(`svg`, {
            viewBox: `0 0 64 64`,
            role: `img`,
            "aria-label": `lululemon`,
            className: `h-7 w-7`,
            fill: `none`,
            "data-tsd-source": `/src/components/LululemonLogo.tsx:12:7`,
            children: (0, v.jsx)(`path`, {
                d: `M14 54c9-4 12-10 12-17 0-6-4-9-4-15 0-6 4-10 10-10s10 4 10 10c0 6-4 9-4 15 0 7 3 13 12 17`,
                stroke: `currentColor`,
                strokeWidth: `5.5`,
                strokeLinecap: `round`,
                strokeLinejoin: `round`,
                "data-tsd-source": `/src/components/LululemonLogo.tsx:19:9`
            })
        }), t && (0, v.jsx)(`span`, {
            className: `text-lg font-extrabold lowercase tracking-tight`,
            "data-tsd-source": `/src/components/LululemonLogo.tsx:28:9`,
            children: `lululemon`
        })]
    })
}
var E = [{
        icon: h,
        label: `Digital delivery`
    }, {
        icon: g,
        label: `No purchase needed`
    }, {
        icon: m,
        label: `Limited spots`
    }],
    D = [{
        title: `Tap the claim button`,
        desc: `Takes you straight to the reward page.`
    }, {
        title: `Enter your basic info`,
        desc: `Name, email and country — that's it.`
    }, {
        title: `Complete required offers`,
        desc: `Finish 4+ simple offers to unlock your reward.`
    }, {
        title: `Claim your gift card`,
        desc: `Delivered digitally, ready to spend.`
    }],
    O = [{
        code: `US`,
        name: `United States`
    }, {
        code: `CA`,
        name: `Canada`
    }, {
        code: `GB`,
        name: `United Kingdom`
    }, {
        code: `AU`,
        name: `Australia`
    }];

function k() {
    return (0, v.jsxs)(`main`, {
        className: `min-h-screen bg-background font-sans lg:grid lg:grid-cols-2`,
        "data-tsd-source": `/src/routes/index.tsx:51:5`,
        children: [(0, v.jsx)(w, {
            "data-tsd-source": `/src/routes/index.tsx:52:7`
        }), (0, v.jsxs)(`section`, {
            className: `relative isolate overflow-hidden lg:sticky lg:top-0 lg:flex lg:h-screen lg:items-center`,
            "data-tsd-source": `/src/routes/index.tsx:55:7`,
            children: [(0, v.jsx)(`img`, {
                src: _,
                alt: `Woman stretching in athletic wear in a sunlit yoga studio`,
                width: 1536,
                height: 1920,
                className: `absolute inset-0 h-full w-full object-cover`,
                "data-tsd-source": `/src/routes/index.tsx:56:9`
            }), (0, v.jsx)(`div`, {
                "aria-hidden": `true`,
                className: `absolute inset-0 bg-[linear-gradient(180deg,oklch(0.18_0.04_25/0.72)_0%,oklch(0.18_0.04_25/0.45)_45%,oklch(0.985_0.008_70)_100%)] lg:bg-[linear-gradient(180deg,oklch(0.18_0.04_25/0.7)_0%,oklch(0.18_0.04_25/0.55)_100%)]`,
                "data-tsd-source": `/src/routes/index.tsx:63:9`
            }), (0, v.jsxs)(`div`, {
                className: `relative mx-auto w-full max-w-xl px-5 pb-16 pt-6 lg:py-12`,
                "data-tsd-source": `/src/routes/index.tsx:68:9`,
                children: [(0, v.jsxs)(`div`, {
                    className: `grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3`,
                    "data-tsd-source": `/src/routes/index.tsx:69:11`,
                    children: [(0, v.jsx)(T, {
                        className: `min-w-0 text-brand-foreground`,
                        "data-tsd-source": `/src/routes/index.tsx:70:13`
                    }), (0, v.jsx)(`span`, {
                        className: `shrink-0 rounded-full border border-brand-foreground/30 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.16em] text-brand-foreground/90`,
                        "data-tsd-source": `/src/routes/index.tsx:71:13`,
                        children: `Member Rewards`
                    })]
                }), (0, v.jsxs)(`div`, {
                    className: `mt-14 text-center lg:mt-16 lg:text-left`,
                    "data-tsd-source": `/src/routes/index.tsx:76:11`,
                    children: [(0, v.jsx)(`p`, {
                        className: `text-[10px] font-semibold uppercase tracking-[0.3em] text-brand-foreground/75`,
                        "data-tsd-source": `/src/routes/index.tsx:77:13`,
                        children: `Reward value up to`
                    }), (0, v.jsx)(`p`, {
                        className: `mt-2 font-display text-[6rem] leading-[0.82] tracking-tight text-brand-foreground drop-shadow-[0_8px_30px_oklch(0.2_0.05_25/0.6)] sm:text-[7.5rem]`,
                        "data-tsd-source": `/src/routes/index.tsx:80:13`,
                        children: `$750`
                    }), (0, v.jsx)(`h1`, {
                        className: `mt-3 font-display text-2xl text-brand-foreground/95 sm:text-3xl`,
                        "data-tsd-source": `/src/routes/index.tsx:83:13`,
                        children: `lululemon gift card`
                    }), (0, v.jsx)(`p`, {
                        className: `mx-auto mt-3 max-w-xs text-sm leading-relaxed text-brand-foreground/80 lg:mx-0 lg:max-w-sm lg:text-base`,
                        "data-tsd-source": `/src/routes/index.tsx:86:13`,
                        children: `Restock your wardrobe on us. A short registration unlocks your reward.`
                    }), (0, v.jsxs)(`a`, {
                        href: `https://linkthem.net/aff_c?offer_id=1139&aff_id=149987`,
                        target: `_blank`,
                        rel: `noopener noreferrer`,
                        className: `group mt-8 hidden w-full max-w-sm items-center justify-center gap-2 rounded-full px-6 py-4 text-base font-bold text-brand-foreground transition-transform hover:-translate-y-0.5 lg:inline-flex`,
                        style: {
                            backgroundImage: `var(--gradient-brand)`,
                            boxShadow: `var(--shadow-lift)`
                        },
                        "data-tsd-source": `/src/routes/index.tsx:90:13`,
                        children: [`Claim Your Reward`, (0, v.jsx)(f, {
                            className: `h-5 w-5 transition-transform group-hover:translate-x-1`,
                            "data-tsd-source": `/src/routes/index.tsx:98:15`
                        })]
                    })]
                })]
            })]
        }), (0, v.jsxs)(`div`, {
            className: `mx-auto w-full max-w-xl pb-28 sm:pb-16 lg:py-16`,
            "data-tsd-source": `/src/routes/index.tsx:105:7`,
            children: [(0, v.jsx)(`section`, {
                className: `relative z-10 -mt-8 px-5 lg:mt-0`,
                "data-tsd-source": `/src/routes/index.tsx:107:9`,
                children: (0, v.jsx)(`ul`, {
                    className: `grid grid-cols-3 gap-2`,
                    "data-tsd-source": `/src/routes/index.tsx:108:11`,
                    children: E.map(({
                        icon: e,
                        label: t
                    }) => (0, v.jsxs)(`li`, {
                        className: `flex flex-col items-center gap-1.5 rounded-2xl border border-border bg-card px-2 py-3 text-center`,
                        style: {
                            boxShadow: `var(--shadow-lift)`
                        },
                        "data-tsd-source": `/src/routes/index.tsx:110:15`,
                        children: [(0, v.jsx)(e, {
                            className: `h-4 w-4 text-brand`,
                            strokeWidth: 2.2,
                            "data-tsd-source": `/src/routes/index.tsx:115:17`
                        }), (0, v.jsx)(`span`, {
                            className: `text-[11px] font-semibold leading-tight text-foreground`,
                            "data-tsd-source": `/src/routes/index.tsx:116:17`,
                            children: t
                        })]
                    }, t))
                })
            }), (0, v.jsxs)(`section`, {
                className: `px-5 pt-10`,
                "data-tsd-source": `/src/routes/index.tsx:125:9`,
                children: [(0, v.jsx)(`h2`, {
                    className: `text-[10px] font-semibold uppercase tracking-[0.28em] text-muted-foreground`,
                    "data-tsd-source": `/src/routes/index.tsx:126:11`,
                    children: `How to claim`
                }), (0, v.jsx)(`ol`, {
                    className: `mt-4 space-y-0`,
                    "data-tsd-source": `/src/routes/index.tsx:129:11`,
                    children: D.map((e, t) => (0, v.jsxs)(`li`, {
                        className: `flex gap-4`,
                        "data-tsd-source": `/src/routes/index.tsx:131:15`,
                        children: [(0, v.jsxs)(`div`, {
                            className: `flex flex-col items-center`,
                            "data-tsd-source": `/src/routes/index.tsx:132:17`,
                            children: [(0, v.jsx)(`span`, {
                                className: `flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-brand-foreground`,
                                style: {
                                    backgroundImage: `var(--gradient-brand)`
                                },
                                "data-tsd-source": `/src/routes/index.tsx:133:19`,
                                children: t + 1
                            }), t < D.length - 1 && (0, v.jsx)(`span`, {
                                className: `w-px flex-1 bg-border`,
                                "data-tsd-source": `/src/routes/index.tsx:139:44`
                            })]
                        }), (0, v.jsxs)(`div`, {
                            className: `min-w-0 pb-6`,
                            "data-tsd-source": `/src/routes/index.tsx:141:17`,
                            children: [(0, v.jsx)(`p`, {
                                className: `pt-1.5 text-sm font-bold text-foreground`,
                                "data-tsd-source": `/src/routes/index.tsx:142:19`,
                                children: e.title
                            }), (0, v.jsx)(`p`, {
                                className: `mt-0.5 text-sm leading-relaxed text-muted-foreground`,
                                "data-tsd-source": `/src/routes/index.tsx:143:19`,
                                children: e.desc
                            })]
                        })]
                    }, e.title))
                }), (0, v.jsxs)(`a`, {
                    href: `https://linkthem.net/aff_c?offer_id=1139&aff_id=149987`,
                    target: `_blank`,
                    rel: `noopener noreferrer`,
                    className: `group hidden w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-base font-bold text-brand-foreground transition-transform hover:-translate-y-0.5 sm:flex lg:hidden`,
                    style: {
                        backgroundImage: `var(--gradient-brand)`,
                        boxShadow: `var(--shadow-lift)`
                    },
                    "data-tsd-source": `/src/routes/index.tsx:151:11`,
                    children: [`Claim Your Reward`, (0, v.jsx)(f, {
                        className: `h-5 w-5 transition-transform group-hover:translate-x-1`,
                        "data-tsd-source": `/src/routes/index.tsx:159:13`
                    })]
                })]
            }), (0, v.jsxs)(`section`, {
                className: `mt-8 border-y border-border bg-secondary/50 px-5 py-7 lg:rounded-3xl lg:border`,
                "data-tsd-source": `/src/routes/index.tsx:164:9`,
                children: [(0, v.jsx)(`h2`, {
                    className: `text-[10px] font-semibold uppercase tracking-[0.28em] text-muted-foreground`,
                    "data-tsd-source": `/src/routes/index.tsx:165:11`,
                    children: `Availability`
                }), (0, v.jsx)(`ul`, {
                    className: `mt-4 grid grid-cols-2 gap-2`,
                    "data-tsd-source": `/src/routes/index.tsx:168:11`,
                    children: O.map(e => (0, v.jsxs)(`li`, {
                        className: `flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-2.5`,
                        "data-tsd-source": `/src/routes/index.tsx:170:15`,
                        children: [(0, v.jsx)(p, {
                            className: `h-3.5 w-3.5 shrink-0 text-brand`,
                            strokeWidth: 3,
                            "data-tsd-source": `/src/routes/index.tsx:174:17`
                        }), (0, v.jsx)(`span`, {
                            className: `truncate text-[13px] font-semibold text-foreground`,
                            "data-tsd-source": `/src/routes/index.tsx:175:17`,
                            children: e.name
                        })]
                    }, e.code))
                })]
            }), (0, v.jsxs)(`div`, {
                className: `flex flex-col items-center gap-2 px-6 py-7`,
                "data-tsd-source": `/src/routes/index.tsx:181:9`,
                children: [(0, v.jsx)(T, {
                    className: `text-foreground/70`,
                    "data-tsd-source": `/src/routes/index.tsx:182:11`
                }), (0, v.jsx)(`p`, {
                    className: `text-center text-[11px] leading-relaxed text-muted-foreground`,
                    "data-tsd-source": `/src/routes/index.tsx:183:11`,
                    children: `Takes only a few minutes · Ages 18+. Reward fulfilment requires completion of partner offers.`
                })]
            })]
        }), (0, v.jsx)(`div`, {
            className: `fixed inset-x-0 bottom-0 z-20 border-t border-border bg-background/95 px-4 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] pt-3 backdrop-blur sm:hidden`,
            "data-tsd-source": `/src/routes/index.tsx:191:7`,
            children: (0, v.jsxs)(`a`, {
                href: `https://linkthem.net/aff_c?offer_id=1139&aff_id=149987`,
                target: `_blank`,
                rel: `noopener noreferrer`,
                className: `flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-base font-bold text-brand-foreground`,
                style: {
                    backgroundImage: `var(--gradient-brand)`,
                    boxShadow: `var(--shadow-lift)`
                },
                "data-tsd-source": `/src/routes/index.tsx:192:9`,
                children: [`Claim Your Reward`, (0, v.jsx)(f, {
                    className: `h-5 w-5`,
                    "data-tsd-source": `/src/routes/index.tsx:200:11`
                })]
            })
        })]
    })
}
export {
    k as component
};