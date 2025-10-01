/* es2-html-parser@1.0.0
(c) 2024-2025 itozyun <itozyun@gmail.com> (https://outcloud.blogspot.com/)(undefined), MIT. */
(function(H, L, da) {
  function W(a, q, g) {
    function x() {
      var d = a.indexOf("<", e + 1);
      -1 === d ? (e = a.length, y()) : e < d ? e = d : ++e;
    }
    function y() {
      var d;
      if (e) {
        d = a.substring(0, e);
        q.ea(I && !X[t] ? d : E(d));
        a = a.substring(e);
        e = 0;
      }
    }
    function z(d) {
      q.ba && q.ba(d);
    }
    function E(d) {
      return d.split("&lt;").join("<").split("&gt;").join(">").split("&amp;lt;").join("&lt;").split("&amp;gt;").join("&gt;");
    }
    function Y(d, r, u) {
      for (var f = 0, n = u.length, m = 3, b, A; m < n && 2 !== f;) {
        A = u.charAt(m);
        switch(f) {
          case 0:
            v[A] & 4 ? f = 1 : ">" === A && (f = 2);
            f && (b = u.substring(2, m));
            break;
          case 1:
            ">" === A && (f = 2);
        }
        ++m;
      }
      return 2 === f ? (P[b] || M(d, r, g || B ? b : b.toUpperCase(), !1), m) : 0;
    }
    function M(d, r, u, f) {
      var n = 0, m = d.length;
      if (u) {
        for (n = m; 0 <= n && d[--n] !== u;) {
        }
      }
      if (0 <= n) {
        for (; n < m;) {
          r.aa(d[--m], f && !l[d[m]], !1), g && Q[d[m]] && (g = !!r.ca);
        }
        d.length = n;
      } else {
        r.aa(u, !1, !0);
      }
    }
    function Z(d, r, u, f) {
      function n(N, O) {
        function R(aa) {
          return E(aa).split('\\"').join('"').split("\\'").join("'").split("&quot;").join('"').split("&apos;").join("'");
        }
        S[N] = !0 === O ? !0 : ba[N.toLowerCase()] ? g ? R(O || N) : !0 : R(O || "");
        ++T;
      }
      function m() {
        (F = "/>" === f.substr(k, 2)) && ++k;
        return F;
      }
      for (var b = 1, A = f.length, k = 2, S = {}, T = 0, F = !1, h, C, w, D, U, J; k < A && 9 > b;) {
        h = f.charAt(k);
        switch(b) {
          case 1:
            if (v[h] & 4) {
              b = 2, C = f.substring(1, k);
            } else if (">" === h || m()) {
              b = 9, C = f.substring(1, k);
            }
            break;
          case 2:
            ">" === h || m() ? b = 9 : v[h] & 4 || (b = 3, w = k);
            break;
          case 3:
            if ("=" === h) {
              b = 5, D = f.substring(w, k);
            } else if (v[h] & 4) {
              b = 4, D = f.substring(w, k);
            } else if (">" === h || m()) {
              b = 9, n(f.substring(w, k), !0);
            }
            break;
          case 4:
            "=" === h ? b = 5 : ">" === h || m() ? (b = 9, n(D, !0)) : v[h] & 4 || (b = 3, n(D, !0), w = k);
            break;
          case 5:
            '"' === h || "'" === h ? (b = 6, U = h, w = k + 1) : v[h] & 4 || (b = 7, w = k);
            J = !1;
            break;
          case 6:
            J || h !== U || (b = 2, n(D, f.substring(w, k)));
            J = "\\" === h && !J;
            break;
          case 7:
            v[h] & 4 ? b = 2 : ">" === h && (b = 9), 7 !== b && n(D, f.substring(w, k));
        }
        ++k;
      }
      if (9 === b) {
        b = C.toUpperCase();
        g || (g = !!Q[C]);
        if (!g && !B) {
          for (; r;) {
            if (l[r] && !l[r][b]) {
              M(d, u, r, !1), r = d[d.length - 1];
            } else {
              break;
            }
          }
        }
        (F = F || !!P[b]) || (d[d.length] = g || B ? C : b);
        u.da(g || B ? C : b, T ? S : null, F, k);
        return k;
      }
      return 0;
    }
    for (var e = 0, B = !1, G = [], V = a.length - e, t, I, c, K; a;) {
      t = G[G.length - 1];
      I = ca[t];
      if (a.indexOf("<?") === e) {
        if (y(), c = a.indexOf("?>"), -1 !== c) {
          E(a.substring(2, c)), a = a.substring(c + 2);
        } else {
          z(a);
          return;
        }
      } else if (a.indexOf("</") === e && v[a.charAt(e + 2)] & 3) {
        if (I && ("PLAINTEXT" === t || "plaintext" === t ? (x(), K = !0) : (c = a.indexOf("</" + (g || B ? t : t.toLowerCase())), -1 === c && (c = a.indexOf("</" + (g || B ? t.toUpperCase() : t))), -1 === c && (x(), K = !0))), K) {
          K = !1;
        } else if (y(), c = Y(G, q, a)) {
          a = a.substring(c);
        } else {
          z(a);
          return;
        }
      } else if (I) {
        x();
      } else if (a.indexOf("<!DOCTYPE ") === e) {
        if (y(), c = a.indexOf(">"), -1 !== c) {
          q.ha(a.substring(e, c + 1)), a = a.substring(c + 1);
        } else {
          z(a);
          return;
        }
      } else if (a.indexOf("<![CDATA[") === e) {
        if (y(), c = a.indexOf("]]\x3e"), -1 !== c) {
          E(a.substring(9, c)), a = a.substring(c + 3);
        } else {
          z(a);
          return;
        }
      } else if (a.indexOf("\x3c!--") === e) {
        if (y(), c = a.indexOf("--\x3e"), -1 !== c) {
          E(a.substring(4, c)), a = a.substring(c + 3);
        } else {
          z(a);
          return;
        }
      } else if ("<" === a.charAt(e) && v[a.charAt(e + 1)] & 3) {
        if (y(), c = Z(G, t, q, a)) {
          a = a.substring(c);
        } else {
          z(a);
          return;
        }
      } else {
        x();
      }
      c = a.length - e;
      if (c === V) {
        z(a);
        return;
      }
      V = c;
    }
    M(G, q, "", !0);
  }
  var Q = {xml:!0, svg:!0, math:!0}, ba = {async:!0, autofocus:!0, checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, draggable:!0, hidden:!0, ismap:!0, loop:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, novalidate:!0, nowrap:!0, readonly:!0, required:!0, reversed:!0, scoped:!0, selected:!0}, P = {AREA:!0, BASE:!0, BASEFONT:!0, BR:!0, BGSOUND:!0, COL:!0, COMMAND:!0, FRAME:!0, HR:!0, IMG:!0, INPUT:!0, ISINDEX:!0, KEYGEN:!0, LINK:!0, META:!0, PARAM:!0, SOURCE:!0, TRACK:!0, EMBED:!0, 
  WBR:!0, area:!0, base:!0, basefont:!0, br:!0, bgsound:!0, col:!0, command:!0, frame:!0, hr:!0, img:!0, input:!0, isindex:!0, keygen:!0, link:!0, meta:!0, param:!0, source:!0, track:!0, embed:!0, wbr:!0}, ca = {SCRIPT:!0, STYLE:!0, TEXTAREA:!0, TITLE:!0, PLAINTEXT:!0, XMP:!0, script:!0, style:!0, textarea:!0, title:!0, plaintext:!0, xmp:!0}, X = {TEXTAREA:!0, TITLE:!0, textarea:!0, title:!0}, l = {CAPTION:{ARTICLE:!0, SECTION:!0, NAV:!0, ASIDE:!0, H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, HEADER:!0, 
  FOOTER:!0, ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, 
  TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, DD:{ARTICLE:!0, SECTION:!0, NAV:!0, ASIDE:!0, H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, HEADER:!0, FOOTER:!0, ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, 
  MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, TABLE:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, DT:{ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, 
  STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, TABLE:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, 
  NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, P:{A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, SCRIPT:!0, 
  NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, HTML:{HEAD:!0, BODY:!0}, HEAD:{TITLE:!0, BASE:!0, BGSOUND:!0, LINK:!0, META:!0, STYLE:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0}, COLGROUP:{COL:!0}, OPTGROUP:{OPTION:!0}, OPTION:{}, TBODY:{TR:!0}, TR:{TH:!0, TD:!0}, RBC:{RB:!0, RP:!0, RT:!0}}, v, p;
  l.LI = l.TD = l.DD;
  l.TH = l.DT;
  l.RB = l.RP = l.RT = l.P;
  l.TFOOT = l.THEAD = l.TBODY;
  l.RTC = l.RBC;
  v = {a:2, b:2, c:2, d:2, e:2, f:2, g:2, h:2, i:2, j:2, k:2, l:2, m:2, n:2, o:2, p:2, q:2, r:2, s:2, t:2, u:2, v:2, w:2, x:2, y:2, z:2, A:1, B:1, C:1, D:1, E:1, F:1, G:1, H:1, I:1, J:1, K:1, L:1, M:1, N:1, O:1, P:1, Q:1, R:1, S:1, T:1, U:1, V:1, W:1, X:1, Y:1, Z:1, "\t":4, "\n":4, "\f":4, "\r":4, " ":4};
  p = {$:"", ba:function(a) {
    p.$ = a;
  }, da:function(a, q, g) {
    var x;
    p.$ += "<" + a;
    for (x in q) {
      a = q[x], p.$ += " " + x + (!0 !== a ? '="' + a.split('"').join('\\"').split('\\\\"').join('\\"') + '"' : "");
    }
    p.$ += (g ? "/" : "") + ">";
  }, aa:function(a) {
    p.$ += "</" + a + ">";
  }, ea:function(a) {
    a.split(" ").join("") && (a = " " === a.charAt(0) ? a.substr(1) : a, a = a.length && " " === a.charAt(a.length - 1) ? a.substr(0, a.length - 1) : a, p.$ += a);
  }, ga:function() {
  }, fa:function() {
  }, ia:function() {
  }};
  H.onload = function() {
    var a = H.input || L.all("input"), q = H.output || L.all("output");
    (H.form || L.all("form")).onsubmit = bz;
    function bz(g) {
      g && g.preventDefault();
      "undefined" != typeof event && (event.returnValue = !1);
      g = p;
      W(a.value, g, !!g.ca);
      q.value = p.$;
      return !1;
    }
    bz = !1;
  };
})(this, document, Date);

