/* es2-html-parser@0.0.1
(c) 2024-2024 itozyun <itozyun@gmail.com> (https://outcloud.blogspot.com/)(undefined), MIT. */
(function(P, G, W) {
  function Q(a) {
    function q() {
      f && (g.ba(r(a.substring(0, f))), a = a.substring(f), f = 0);
    }
    function r(n) {
      return n.split("&lt;").join("<").split("&gt;").join(">").split("&amp;").join("&");
    }
    function z(n, u, v) {
      for (var d = 0, p = v.length, h = 2, c, l, E; h < p && 3 !== d;) {
        l = v.charAt(h);
        switch(d) {
          case 0:
            x[l] & 3 && (d = 1, E = h);
            break;
          case 1:
            x[l] & 4 ? d = 2 : ">" === l && (d = 3);
            1 !== d && (c = v.substring(E, h));
            break;
          case 2:
            ">" === l && (d = 3);
        }
        ++h;
      }
      return 3 === d ? (H(n, u, w ? c : c.toUpperCase(), !1), h) : 0;
    }
    function H(n, u, v, d) {
      var p = 0, h = n.length;
      if (v) {
        for (p = h; 0 <= p && n[--p] !== v;) {
        }
      }
      if (0 <= p) {
        for (; p < h;) {
          u.ca(n[--h], d && !m[n[h]], !1), w && K[n[h]] && (w = !!u.da);
        }
        n.length = p;
      } else {
        u.ca(v, !1, !0);
      }
    }
    function R(n, u, v, d) {
      function p(I, J) {
        L[I] = !0 === J ? !0 : S[I.toLowerCase()] ? w ? r(J || I) : !0 : r(J || "");
        ++M;
      }
      function h() {
        (C = "/>" === d.substr(k, 2)) && ++k;
        return C;
      }
      for (var c = 1, l = 1, E = d.length, k = 2, L = {}, M = 0, C = !1, A, e, y, N, F; k < E && 9 > c;) {
        e = d.charAt(k);
        switch(c) {
          case 1:
            if (x[e] & 4) {
              c = 2, A = d.substring(l, k);
            } else if (">" === e || h()) {
              c = 9, A = d.substring(l, k);
            }
            break;
          case 2:
            ">" === e || h() ? c = 9 : x[e] & 4 || (c = 3, l = k);
            break;
          case 3:
            if ("=" === e) {
              c = 5, y = d.substring(l, k);
            } else if (x[e] & 4) {
              c = 4, y = d.substring(l, k);
            } else if (">" === e || h()) {
              c = 9, p(d.substring(l, k), !0);
            }
            break;
          case 4:
            "=" === e ? c = 5 : ">" === e || h() ? (c = 9, p(y, !0)) : x[e] & 4 || (c = 3, p(y, !0), l = k);
            break;
          case 5:
            '"' === e || "'" === e ? (c = 6, N = e, l = k + 1) : x[e] & 4 || (c = 7, l = k);
            F = !1;
            break;
          case 6:
            F || e !== N || (c = 2, p(y, d.substring(l, k)));
            F = "\\" === e && !F;
            break;
          case 7:
            x[e] & 4 ? c = 2 : ">" === e ? c = 9 : !T[y] && h() && (c = 9), 7 !== c && p(y, d.substring(l, k));
        }
        ++k;
      }
      if (9 === c) {
        c = A.toUpperCase();
        w || (w = !!K[A]);
        if (!w) {
          for (; u;) {
            if (m[u] && !m[u][c]) {
              H(n, v, u, !1), u = n[n.length - 1];
            } else {
              break;
            }
          }
        }
        (C = C || !!U[c]) || (n[n.length] = w ? A : c);
        v.ea(w ? A : c, M ? L : null, C, k);
        return k;
      }
      return 0;
    }
    for (var g = t, f = 0, B = [], w = !!g.da, O = a.length - f, b, D; a;) {
      (b = D = B[B.length - 1]) && w && (D = b.toUpperCase());
      if (V[D]) {
        if ("PLAINTEXT" === D) {
          g.ba(r(a)), a = "";
        } else if (b = a.toUpperCase().indexOf("</" + D), 0 <= b) {
          if (f = b, q(), b = z(B, g, a)) {
            a = a.substring(b);
          } else {
            g.aa(a);
            return;
          }
        } else {
          g.aa(a);
          return;
        }
      } else if (a.indexOf("<!DOCTYPE ") === f) {
        if (q(), b = a.indexOf(">"), -1 !== b) {
          g.ia(a.substring(10, b)), a = a.substring(b + 1);
        } else {
          g.aa(a);
          return;
        }
      } else if (a.indexOf("<?") === f) {
        if (q(), b = a.indexOf("?>"), -1 !== b) {
          r(a.substring(2, b)), a = a.substring(b + 2);
        } else {
          g.aa(a);
          return;
        }
      } else if (a.indexOf("<![CDATA[") === f) {
        if (q(), b = a.indexOf("]]\x3e"), -1 !== b) {
          r(a.substring(9, b)), a = a.substring(b + 3);
        } else {
          g.aa(a);
          return;
        }
      } else if (a.indexOf("\x3c!--") === f) {
        if (q(), b = a.indexOf("--\x3e"), -1 !== b) {
          r(a.substring(4, b)), a = a.substring(b + 3);
        } else {
          g.aa(a);
          return;
        }
      } else if (a.indexOf("</") === f) {
        if (q(), b = z(B, g, a)) {
          a = a.substring(b);
        } else {
          g.aa(a);
          return;
        }
      } else if ("<" === a.charAt(f) && x[a.charAt(f + 1)] & 3) {
        if (q(), b = R(B, b, g, a)) {
          a = a.substring(b);
        } else {
          g.aa(a);
          return;
        }
      } else {
        b = a.indexOf("<", f), -1 === b ? (g.ba(r(a)), a = "") : f < b ? f = b : ++f;
      }
      b = a.length - f;
      if (b === O) {
        g.aa(a);
        return;
      }
      O = b;
    }
    q();
    H(B, g, "", !0);
  }
  var m = {CAPTION:{ARTICLE:!0, SECTION:!0, NAV:!0, ASIDE:!0, H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, HEADER:!0, FOOTER:!0, ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, 
  AUDIO:!0, MAP:!0, AREA:!0, MATH:!0, SVG:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, DD:{ARTICLE:!0, SECTION:!0, NAV:!0, ASIDE:!0, H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, HEADER:!0, FOOTER:!0, ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, 
  DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, MATH:!0, SVG:!0, TABLE:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, 
  DT:{ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, MATH:!0, SVG:!0, TABLE:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, 
  TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, P:{A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, MATH:!0, SVG:!0, LABEL:!0, INPUT:!0, 
  BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, HTML:{HEAD:!0, BODY:!0}, HEAD:{TITLE:!0, BASE:!0, BGSOUND:!0, LINK:!0, META:!0, STYLE:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLETE:!0}, COLGROUP:{COL:!0}, OPTGROUP:{OPTION:!0}, OPTION:{}, TBODY:{TR:!0}, TR:{TH:!0, TD:!0}, RBC:{RB:!0, RP:!0, RT:!0}}, K, U, V, T, S, x, t;
  m.LI = m.TD = m.DD;
  m.TH = m.DT;
  m.RB = m.RP = m.RT = m.P;
  m.TFOOT = m.THEAD = m.TBODY;
  m.RTC = m.RBC;
  K = {xml:!0, svg:!0, math:!0};
  U = {AREA:!0, BASE:!0, BASEFONT:!0, BR:!0, BGSOUND:!0, COL:!0, fa:!0, FRAME:!0, HR:!0, IMG:!0, INPUT:!0, ISINDEX:!0, KEYGEN:!0, LINK:!0, META:!0, PARAM:!0, SOURCE:!0, TRACK:!0, EMBED:!0, WBR:!0};
  V = {SCRIPT:!0, STYLE:!0, PLAINTEXT:!0, XMP:!0, TEXTAREA:!0};
  T = {action:!0, archive:!0, background:!0, cite:!0, classid:!0, codebase:!0, data:!0, href:!0, longdesc:!0, profile:!0, src:!0, usemap:!0};
  S = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0};
  x = {a:2, b:2, c:2, d:2, e:2, f:2, g:2, h:2, i:2, j:2, k:2, l:2, m:2, n:2, o:2, p:2, q:2, r:2, s:2, t:2, u:2, v:2, w:2, x:2, y:2, z:2, A:1, B:1, C:1, D:1, E:1, F:1, G:1, H:1, I:1, J:1, K:1, L:1, M:1, N:1, O:1, P:1, Q:1, R:1, S:1, T:1, U:1, V:1, W:1, X:1, Y:1, Z:1, "\b":4, "\f":4, "\n":4, "\r":4, "\t":4, " ":4};
  t = {$:"", aa:function(a) {
    t.$ = a;
  }, ea:function(a, q, r) {
    var z;
    t.$ += "<" + a;
    for (z in q) {
      a = q[z], t.$ += " " + z + (!0 !== a ? '="' + a.split('"').join('\\"').split('\\\\"').join('\\"') + '"' : "");
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

