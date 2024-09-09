/* es2-html-parser@0.0.1
(c) 2024-2024 itozyun <itozyun@gmail.com> (https://outcloud.blogspot.com/)(undefined), MIT. */
(function(P, G, W) {
  function Q(a) {
    function q() {
      g && (h.ba(r(a.substring(0, g))), a = a.substring(g), g = 0);
    }
    function r(m) {
      return m.split("&lt;").join("<").split("&gt;").join(">").split("&amp;").join("&");
    }
    function A(m, u, w) {
      for (var f = 0, n = w.length, k = 2, c, z, d; k < n && 3 !== f;) {
        z = w.charAt(k);
        switch(f) {
          case 0:
            v[z] & 3 && (f = 1, d = k);
            break;
          case 1:
            v[z] & 4 ? f = 2 : ">" === z && (f = 3);
            1 !== f && (c = w.substring(d, k));
            break;
          case 2:
            ">" === z && (f = 3);
        }
        ++k;
      }
      return 3 === f ? (H(m, u, x ? c : c.toUpperCase(), !1), k) : 0;
    }
    function H(m, u, w, f) {
      var n = 0, k = m.length;
      if (w) {
        for (n = k; 0 <= n && m[--n] !== w;) {
        }
      }
      if (0 <= n) {
        for (; n < k;) {
          u.ca(m[--k], f && !l[m[k]], !1), x && J[m[k]] && (x = !!u.da);
        }
        m.length = n;
      } else {
        u.ca(w, !1, !0);
      }
    }
    function R(m, u, w, f) {
      function n(I, K) {
        L[I] = S[I.toLowerCase()] ? x ? r(K || I) : !0 : r(K || "");
        ++M;
      }
      function k() {
        (D = "/>" === f.substr(d, 2)) && ++d;
        return D;
      }
      for (var c = 0, z = f.length, d = 1, L = {}, M = 0, D = !1, B, e, p, y, N, F; d < z && 9 > c;) {
        e = f.charAt(d);
        switch(c) {
          case 0:
            v[e] & 3 && (c = 1, p = d);
            break;
          case 1:
            if (v[e] & 4) {
              c = 2, B = f.substring(p, d);
            } else if (">" === e || k()) {
              c = 9, B = f.substring(p, d);
            }
            break;
          case 2:
            if (":" === e) {
              c = 3, p = d;
            } else if (v[e] & 3) {
              c = 4, p = d;
            } else if (">" === e || k()) {
              c = 9;
            }
            break;
          case 3:
            c = v[e] & 3 ? 4 : 9;
            break;
          case 4:
            if ("=" === e) {
              c = 6, y = f.substring(p, d);
            } else if (v[e] & 4) {
              c = 5, y = f.substring(p, d);
            } else if (">" === e || k()) {
              c = 9, n(f.substring(p, d));
            }
            break;
          case 5:
            if (":" === e) {
              c = 3, n(y), p = d;
            } else if (v[e] & 3) {
              c = 4, n(y), p = d;
            } else if ("=" === e) {
              c = 6;
            } else if (">" === e || k()) {
              c = 9, n(y);
            }
            break;
          case 6:
            '"' === e || "'" === e ? (c = 7, N = e, p = d + 1) : v[e] & 4 || (c = 8, p = d);
            F = !1;
            break;
          case 7:
            F || e !== N || (c = 2, n(y, f.substring(p, d)));
            F = "\\" === e && !F;
            break;
          case 8:
            v[e] & 4 ? c = 2 : ">" === e ? c = 9 : !T[y] && k() && (c = 9), 8 !== c && n(y, f.substring(p, d));
        }
        ++d;
      }
      if (9 === c) {
        c = B.toUpperCase();
        x || (x = !!J[B]);
        if (!x) {
          for (; u;) {
            if (l[u] && !l[u][c]) {
              H(m, w, u, !1), u = m[m.length - 1];
            } else {
              break;
            }
          }
        }
        (D = D || !!U[c]) || (m[m.length] = x ? B : c);
        w.ea(x ? B : c, M ? L : null, D, d);
        return d;
      }
      return 0;
    }
    for (var h = t, g = 0, C = [], x = !!h.da, O = a.length - g, b, E; a;) {
      (b = E = C[C.length - 1]) && x && (E = b.toUpperCase());
      if (V[E]) {
        if ("PLAINTEXT" === E) {
          h.ba(r(a)), a = "";
        } else if (b = a.toUpperCase().indexOf("</" + E), 0 <= b) {
          if (g = b, q(), b = A(C, h, a)) {
            a = a.substring(b);
          } else {
            h.aa(a);
            return;
          }
        } else {
          h.aa(a);
          return;
        }
      } else if (a.indexOf("<!DOCTYPE ") === g) {
        if (q(), b = a.indexOf(">"), -1 !== b) {
          h.ia(a.substring(10, b)), a = a.substring(b + 1);
        } else {
          h.aa(a);
          return;
        }
      } else if (a.indexOf("<?") === g) {
        if (q(), b = a.indexOf("?>"), -1 !== b) {
          r(a.substring(2, b)), a = a.substring(b + 2);
        } else {
          h.aa(a);
          return;
        }
      } else if (a.indexOf("<![CDATA[") === g) {
        if (q(), b = a.indexOf("]]\x3e"), -1 !== b) {
          r(a.substring(9, b)), a = a.substring(b + 3);
        } else {
          h.aa(a);
          return;
        }
      } else if (a.indexOf("\x3c!--") === g) {
        if (q(), b = a.indexOf("--\x3e"), -1 !== b) {
          r(a.substring(4, b)), a = a.substring(b + 3);
        } else {
          h.aa(a);
          return;
        }
      } else if (a.indexOf("</") === g) {
        if (q(), b = A(C, h, a)) {
          a = a.substring(b);
        } else {
          h.aa(a);
          return;
        }
      } else if ("<" === a.charAt(g) && v[a.charAt(g + 1)] & 3) {
        if (q(), b = R(C, b, h, a)) {
          a = a.substring(b);
        } else {
          h.aa(a);
          return;
        }
      } else {
        b = a.indexOf("<", g), -1 === b ? (h.ba(r(a)), a = "") : g < b ? g = b : ++g;
      }
      b = a.length - g;
      if (b === O) {
        h.aa(a);
        return;
      }
      O = b;
    }
    q();
    H(C, h, "", !0);
  }
  var l = {CAPTION:{ARTICLE:!0, SECTION:!0, NAV:!0, ASIDE:!0, H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, HEADER:!0, FOOTER:!0, ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, 
  AUDIO:!0, MAP:!0, AREA:!0, MATH:!0, SVG:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, DD:{ARTICLE:!0, SECTION:!0, NAV:!0, ASIDE:!0, H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, HEADER:!0, FOOTER:!0, ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, 
  DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, MATH:!0, SVG:!0, TABLE:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, 
  DT:{ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, MATH:!0, SVG:!0, TABLE:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, 
  TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, P:{A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, MATH:!0, SVG:!0, LABEL:!0, INPUT:!0, 
  BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, HTML:{HEAD:!0, BODY:!0}, HEAD:{TITLE:!0, BASE:!0, BGSOUND:!0, LINK:!0, META:!0, STYLE:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLETE:!0}, COLGROUP:{COL:!0}, OPTGROUP:{OPTION:!0}, OPTION:{}, TBODY:{TR:!0}, TR:{TH:!0, TD:!0}, RBC:{RB:!0, RP:!0, RT:!0}}, J, U, V, T, S, v, t;
  l.LI = l.TD = l.DD;
  l.TH = l.DT;
  l.RB = l.RP = l.RT = l.P;
  l.TFOOT = l.THEAD = l.TBODY;
  l.RTC = l.RBC;
  J = {xml:!0, svg:!0, math:!0};
  U = {AREA:!0, BASE:!0, BASEFONT:!0, BR:!0, BGSOUND:!0, COL:!0, fa:!0, FRAME:!0, HR:!0, IMG:!0, INPUT:!0, ISINDEX:!0, KEYGEN:!0, LINK:!0, META:!0, PARAM:!0, SOURCE:!0, TRACK:!0, EMBED:!0, WBR:!0};
  V = {SCRIPT:!0, STYLE:!0, PLAINTEXT:!0, XMP:!0, TEXTAREA:!0};
  T = {action:!0, archive:!0, background:!0, cite:!0, classid:!0, codebase:!0, data:!0, href:!0, longdesc:!0, profile:!0, src:!0, usemap:!0};
  S = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0};
  v = {a:2, b:2, c:2, d:2, e:2, f:2, g:2, h:2, i:2, j:2, k:2, l:2, m:2, n:2, o:2, p:2, q:2, r:2, s:2, t:2, u:2, v:2, w:2, x:2, y:2, z:2, A:1, B:1, C:1, D:1, E:1, F:1, G:1, H:1, I:1, J:1, K:1, L:1, M:1, N:1, O:1, P:1, Q:1, R:1, S:1, T:1, U:1, V:1, W:1, X:1, Y:1, Z:1, "\b":4, "\f":4, "\n":4, "\r":4, "\t":4, " ":4};
  t = {$:"", aa:function(a) {
    t.$ = a;
  }, ea:function(a, q, r) {
    var A;
    t.$ += "<" + a;
    for (A in q) {
      a = q[A], t.$ += " " + A + (!0 !== a ? '="' + a.split('"').join('\\"').split('\\\\"').join('\\"') + '"' : "");
    }
    t.$ += (r ? "/" : "") + ">";
  }, ca:function(a) {
    t.$ += "</" + a + ">";
  }, ba:function(a) {
    a.split(" ").join("") && (a = " " === a.charAt(0) ? a.substr(1) : a, a = a.length && " " === a.charAt(a.length - 1) ? a.substr(0, a.length - 1) : a, t.$ += a);
  }, ha:function() {
  }, ga:function() {
  }, ja:function() {
  }};
  P.onload = function() {
    var a = G.all("input"), q = G.all("output");
    G.all("form").onsubmit = bz;
    function bz(r) {
      r && r.preventDefault();
      "undefined" != typeof event && (event.returnValue = !1);
      Q(a.value);
      q.value = t.$;
      return !1;
    }
    bz = !1;
  };
})(this, document, Date);

