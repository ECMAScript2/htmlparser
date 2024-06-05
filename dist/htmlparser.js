/* es2-html-parser@0.0.1
(c) 2024-2024 itozyun <itozyun@gmail.com> (https://outcloud.blogspot.com/)(undefined), MIT. */
(function(O, ba) {
  function P(a, d) {
    function c(p, l, r, e) {
      for (var k = 1, E = r.length, m = 2, t, b, B; m < E && 4 !== k;) {
        b = r.charAt(m);
        switch(k) {
          case 1:
            u[b] & 3 && (k = 2, B = m);
            break;
          case 2:
            u[b] & 4 ? k = 3 : ">" === b && (k = 4);
            2 !== k && (t = r.substring(B, m));
            break;
          case 3:
            ">" === b && (k = 4);
        }
        ++m;
      }
      return 4 === k ? (x(p, l, e ? t : t.toUpperCase()), m) : 0;
    }
    function x(p, l, r) {
      var e = 0, k = p.length;
      if (r) {
        for (e = k; 0 <= e && p[--e] !== r;) {
        }
      }
      if (0 <= e) {
        for (; e < k;) {
          l.h(p[--k]);
        }
        p.length = e;
      }
    }
    function F(p, l, r, e, k, E) {
      function m(Q, R) {
        var G = Q.toLowerCase(), H = S[G] ? G : R || "";
        I[++K] = G;
        I[++K] = -1 !== H.indexOf('"') ? H.split('"').join('\\"').split('\\\\"').join('\\"') : H;
      }
      function t() {
        (z = "/>" === e.substr(f, 2)) && ++f;
        return z;
      }
      for (var b = 1, B = e.length, f = 1, I = [], K = -1, z = !1, y, h, n, v, L, C; f < B && 9 > b;) {
        h = e.charAt(f);
        switch(b) {
          case 1:
            u[h] & 3 && (b = 2, n = f);
            break;
          case 2:
            if (u[h] & 4) {
              b = 3, y = e.substring(n, f);
            } else if (">" === h || t()) {
              b = 9, y = e.substring(n, f);
            }
            break;
          case 3:
            if (u[h] & 3) {
              b = 4, n = f;
            } else if (">" === h || t()) {
              b = 9;
            }
            break;
          case 4:
            if ("=" === h) {
              b = 6, v = e.substring(n, f);
            } else if (u[h] & 4) {
              b = 5, v = e.substring(n, f);
            } else if (">" === h || t()) {
              b = 9, m(e.substring(n, f));
            }
            break;
          case 5:
            if (u[h] & 3) {
              b = 4, m(v), n = f;
            } else if ("=" === h) {
              b = 6;
            } else if (">" === h || t()) {
              b = 9, m(v);
            }
            break;
          case 6:
            '"' === h || "'" === h ? (b = 7, L = h, n = f + 1) : u[h] & 4 || (b = 8, n = f);
            break;
          case 7:
            C || h !== L || (b = 3, m(v, e.substring(n, f)));
            break;
          case 8:
            u[h] & 4 ? (b = 3, m(v, e.substring(n, f))) : ">" === h ? (b = 9, m(v, e.substring(n, f))) : C || T[v] || !t() || (b = 9, m(v, e.substring(n, f)));
        }
        C = "\\" === h && !C;
        ++f;
      }
      if (9 === b) {
        b = y.toUpperCase();
        if (!E && U[b]) {
          for (; l && V[k ? l.toUpperCase() : l];) {
            x(p, r, l), l = p[p.length - 1];
          }
        }
        l && W[b] && (l === y || M[b] && M[b][k ? l.toUpperCase() : l]) && x(p, r, l);
        (z = z || X[b]) || (p[p.length] = k ? y : b);
        r.j(k ? y : b, I, z, f);
        return f;
      }
      return 0;
    }
    for (var q = [], N = a, g, J; a;) {
      (g = J = q[q.length - 1]) && Y[J] ? (g = a.toUpperCase().indexOf("</" + J), 0 <= g ? (g && d.g(a.substring(0, g)), a = a.substring(g), (g = c(q, d, a)) ? a = a.substring(g) : (d.g(a), a = "")) : (d.g(a), a = "")) : 0 === a.indexOf("\x3c!--") ? (g = a.indexOf("--\x3e"), a = -1 !== g ? a.substring(g + 3) : "") : (0 === a.indexOf("</") ? a = (g = c(q, d, a)) ? a.substring(g) : "&lt;" + a.substr(1) : 0 === a.indexOf("<") && (a = (g = F(q, g, d, a, !1, !1)) ? a.substring(g) : "&lt;" + a.substr(1)), 
      g = a.indexOf("<"), -1 === g ? (d.g(a), a = "") : g && (d.g(a.substring(0, g)), a = a.substring(g)));
      if (a === N) {
        d.i(a);
        return;
      }
      N = a;
    }
    x(q, d);
  }
  function Z(a, d) {
    P(a, d);
  }
  function aa(a) {
    var d = "";
    Z(a, {l:!0, i:function(c) {
      d = c;
    }, j:function(c, x, F) {
      if ("![CDATA[]]" === c) {
        d += "<![CDATA[\n]]\x3e";
      } else {
        d += "<" + c;
        c = 0;
        for (var q; c < x.length; ++c) {
          q = x[c], d += " " + q[0] + '="' + (q[1] || q[0]) + '"';
        }
        d += (F ? "/" : "") + ">";
      }
    }, h:function(c) {
      "![CDATA[]]" !== c && (d += "</" + c + ">");
    }, g:function(c) {
      c.split(" ").join("") && (c = " " === c.charAt(0) ? c.substr(1) : c, c = c.length && " " === c.charAt(c.length - 1) ? c.substr(0, c.length - 1) : c, d += c);
    }, m:function() {
    }});
    return d;
  }
  var X = {AREA:!0, BASE:!0, BASEFONT:!0, BR:!0, COL:!0, FRAME:!0, HR:!0, IMG:!0, INPUT:!0, ISINDEX:!0, LINK:!0, META:!0, PARAM:!0, EMBED:!0}, U = {ADDRESS:!0, APPLET:!0, BLOCKQUOTE:!0, BUTTON:!0, CENTER:!0, DD:!0, DEL:!0, DIR:!0, DIV:!0, DL:!0, DT:!0, FIELDSET:!0, FORM:!0, FRAMESET:!0, HR:!0, IFRAME:!0, INS:!0, ISINDEX:!0, LI:!0, MAP:!0, MENU:!0, NOFRAMES:!0, NOSCRIPT:!0, OBJECT:!0, OL:!0, P:!0, PRE:!0, SCRIPT:!0, TABLE:!0, TBODY:!0, TD:!0, TFOOT:!0, TH:!0, THEAD:!0, TR:!0, UL:!0}, V = {ABBR:!0, 
  ACRONYM:!0, APPLET:!0, B:!0, BASEFONT:!0, BDO:!0, BIG:!0, BR:!0, BUTTON:!0, CITE:!0, CODE:!0, DEL:!0, DFN:!0, EM:!0, FONT:!0, I:!0, IFRAME:!0, IMG:!0, INPUT:!0, INS:!0, KBD:!0, LABEL:!0, MAP:!0, OBJECT:!0, Q:!0, S:!0, SAMP:!0, SCRIPT:!0, SELECT:!0, SMALL:!0, SPAN:!0, STRIKE:!0, STRONG:!0, SUB:!0, SUP:!0, TEXTAREA:!0, TT:!0, U:!0, VAR:!0}, W = {COLGROUP:!0, DD:!0, DT:!0, LI:!0, OPTIONS:!0, P:!0, TBODY:!0, TD:!0, TFOOT:!0, TH:!0, THEAD:!0, TR:!0}, M = {TH:{TD:!0}, TD:{TH:!0}, DT:{DD:!0}, DD:{DT:!0}, 
  COLGROUP:{CAPTION:!0}, THEAD:{CAPTION:!0, COLGROUP:!0}, TFOOT:{CAPTION:!0, COLGROUP:!0, THEAD:!0, TBODY:!0}, TBODY:{CAPTION:!0, COLGROUP:!0, THEAD:!0, TFOOT:!0}}, Y = {SCRIPT:!0, STYLE:!0, PLAINTEXT:!0, XMP:!0, TEXTAREA:!0}, T = {action:!0, archive:!0, background:!0, cite:!0, classid:!0, codebase:!0, data:!0, href:!0, longdesc:!0, profile:!0, src:!0, usemap:!0}, S = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, 
  readonly:!0, selected:!0}, A = "abcdefghijklmnopqrstuvwxyz! \t\r\n\f\b", D = {}, w, u;
  for (w = 26; w;) {
    D[A.charAt(--w)] = 2;
  }
  w = 27;
  for (A = A.toUpperCase(); w;) {
    D[A.charAt(--w)] = 1;
  }
  for (w = 33; 27 < w;) {
    D[A.charAt(--w)] = 4;
  }
  u = D;
  O.onload = function() {
    var a = document.all("input"), d = document.all("output");
    document.all("form").onsubmit = o;
    function o(c) {
      c && c.preventDefault();
      "undefined" != typeof event && (event.returnValue = !1);
      d.value = aa(a.value);
      return !1;
    }
    o = !1;
  };
})(this, parseFloat);

