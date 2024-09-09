/* es2-html-parser@0.0.1
(c) 2024-2024 itozyun <itozyun@gmail.com> (https://outcloud.blogspot.com/)(undefined), MIT. */
(function(O, G, V) {
  function P(a) {
    function q() {
      g && (h.ba(a.substring(0, g)), a = a.substring(g), g = 0);
    }
    function y(n, t, v) {
      for (var f = 0, m = v.length, k = 2, b, z, d; k < m && 3 !== f;) {
        z = v.charAt(k);
        switch(f) {
          case 0:
            u[z] & 3 && (f = 1, d = k);
            break;
          case 1:
            u[z] & 4 ? f = 2 : ">" === z && (f = 3);
            1 !== f && (b = v.substring(d, k));
            break;
          case 2:
            ">" === z && (f = 3);
        }
        ++k;
      }
      return 3 === f ? (A(n, t, w ? b : b.toUpperCase(), !1), k) : 0;
    }
    function A(n, t, v, f) {
      var m = 0, k = n.length;
      if (v) {
        for (m = k; 0 <= m && n[--m] !== v;) {
        }
      }
      if (0 <= m) {
        for (; m < k;) {
          t.ca(n[--k], f && !l[n[k]], !1), w && I[n[k]] && (w = !!t.da);
        }
        n.length = m;
      } else {
        t.ca(v, !1, !0);
      }
    }
    function Q(n, t, v, f) {
      function m(H, J) {
        K[H] = R[H.toLowerCase()] ? w ? J || H : !0 : J || "";
        ++L;
      }
      function k() {
        (D = "/>" === f.substr(d, 2)) && ++d;
        return D;
      }
      for (var b = 0, z = f.length, d = 1, K = {}, L = 0, D = !1, B, e, p, x, M, F; d < z && 9 > b;) {
        e = f.charAt(d);
        switch(b) {
          case 0:
            u[e] & 3 && (b = 1, p = d);
            break;
          case 1:
            if (u[e] & 4) {
              b = 2, B = f.substring(p, d);
            } else if (">" === e || k()) {
              b = 9, B = f.substring(p, d);
            }
            break;
          case 2:
            if (":" === e) {
              b = 3, p = d;
            } else if (u[e] & 3) {
              b = 4, p = d;
            } else if (">" === e || k()) {
              b = 9;
            }
            break;
          case 3:
            b = u[e] & 3 ? 4 : 9;
            break;
          case 4:
            if ("=" === e) {
              b = 6, x = f.substring(p, d);
            } else if (u[e] & 4) {
              b = 5, x = f.substring(p, d);
            } else if (">" === e || k()) {
              b = 9, m(f.substring(p, d));
            }
            break;
          case 5:
            if (":" === e) {
              b = 3, m(x), p = d;
            } else if (u[e] & 3) {
              b = 4, m(x), p = d;
            } else if ("=" === e) {
              b = 6;
            } else if (">" === e || k()) {
              b = 9, m(x);
            }
            break;
          case 6:
            '"' === e || "'" === e ? (b = 7, M = e, p = d + 1) : u[e] & 4 || (b = 8, p = d);
            F = !1;
            break;
          case 7:
            F || e !== M || (b = 2, m(x, f.substring(p, d)));
            F = "\\" === e && !F;
            break;
          case 8:
            u[e] & 4 ? b = 2 : ">" === e ? b = 9 : !S[x] && k() && (b = 9), 8 !== b && m(x, f.substring(p, d));
        }
        ++d;
      }
      if (9 === b) {
        b = B.toUpperCase();
        w || (w = !!I[B]);
        if (!w) {
          for (; t;) {
            if (l[t] && !l[t][b]) {
              A(n, v, t, !1), t = n[n.length - 1];
            } else {
              break;
            }
          }
        }
        (D = D || !!T[b]) || (n[n.length] = w ? B : b);
        v.ea(w ? B : b, L ? K : null, D, d);
        return d;
      }
      return 0;
    }
    for (var h = r, g = 0, C = [], w = !!h.da, N = a.length - g, c, E; a;) {
      (c = E = C[C.length - 1]) && w && (E = c.toUpperCase());
      if (U[E]) {
        if ("PLAINTEXT" === E) {
          h.ba(a), a = "";
        } else if (c = a.toUpperCase().indexOf("</" + E), 0 <= c) {
          if (g = c, q(), c = y(C, h, a)) {
            a = a.substring(c);
          } else {
            h.aa(a);
            return;
          }
        } else {
          h.aa(a);
          return;
        }
      } else if (a.indexOf("<!DOCTYPE ") === g) {
        if (q(), c = a.indexOf(">"), -1 !== c) {
          h.ia(a.substring(10, c)), a = a.substring(c + 1);
        } else {
          h.aa(a);
          return;
        }
      } else if (a.indexOf("<?") === g) {
        if (q(), c = a.indexOf("?>"), -1 !== c) {
          a = a.substring(c + 2);
        } else {
          h.aa(a);
          return;
        }
      } else if (a.indexOf("<![CDATA[") === g) {
        if (q(), c = a.indexOf("]]\x3e"), -1 !== c) {
          a = a.substring(c + 3);
        } else {
          h.aa(a);
          return;
        }
      } else if (a.indexOf("\x3c!--") === g) {
        if (q(), c = a.indexOf("--\x3e"), -1 !== c) {
          a = a.substring(c + 3);
        } else {
          h.aa(a);
          return;
        }
      } else if (a.indexOf("</") === g) {
        if (q(), c = y(C, h, a)) {
          a = a.substring(c);
        } else {
          h.aa(a);
          return;
        }
      } else if ("<" === a.charAt(g) && u[a.charAt(g + 1)] & 3) {
        if (q(), c = Q(C, c, h, a)) {
          a = a.substring(c);
        } else {
          h.aa(a);
          return;
        }
      } else {
        c = a.indexOf("<", g), -1 === c ? (h.ba(a), a = "") : g < c ? g = c : ++g;
      }
      c = a.length - g;
      if (c === N) {
        h.aa(a);
        return;
      }
      N = c;
    }
    q();
    A(C, h, "", !0);
  }
  var l = {CAPTION:{ARTICLE:!0, SECTION:!0, NAV:!0, ASIDE:!0, H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, HEADER:!0, FOOTER:!0, ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, 
  AUDIO:!0, MAP:!0, AREA:!0, MATH:!0, SVG:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, DD:{ARTICLE:!0, SECTION:!0, NAV:!0, ASIDE:!0, H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, HEADER:!0, FOOTER:!0, ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, 
  DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, MATH:!0, SVG:!0, TABLE:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, 
  DT:{ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, MATH:!0, SVG:!0, TABLE:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, 
  TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, P:{A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, MATH:!0, SVG:!0, LABEL:!0, INPUT:!0, 
  BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, HTML:{HEAD:!0, BODY:!0}, HEAD:{TITLE:!0, BASE:!0, BGSOUND:!0, LINK:!0, META:!0, STYLE:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLETE:!0}, COLGROUP:{COL:!0}, OPTGROUP:{OPTION:!0}, OPTION:{}, TBODY:{TR:!0}, TR:{TH:!0, TD:!0}, RBC:{RB:!0, RP:!0, RT:!0}}, I, T, U, S, R, u, r;
  l.LI = l.TD = l.DD;
  l.TH = l.DT;
  l.RB = l.RP = l.RT = l.P;
  l.TFOOT = l.THEAD = l.TBODY;
  l.RTC = l.RBC;
  I = {xml:!0, svg:!0, math:!0};
  T = {AREA:!0, BASE:!0, BASEFONT:!0, BR:!0, BGSOUND:!0, COL:!0, fa:!0, FRAME:!0, HR:!0, IMG:!0, INPUT:!0, ISINDEX:!0, KEYGEN:!0, LINK:!0, META:!0, PARAM:!0, SOURCE:!0, TRACK:!0, EMBED:!0, WBR:!0};
  U = {SCRIPT:!0, STYLE:!0, PLAINTEXT:!0, XMP:!0, TEXTAREA:!0};
  S = {action:!0, archive:!0, background:!0, cite:!0, classid:!0, codebase:!0, data:!0, href:!0, longdesc:!0, profile:!0, src:!0, usemap:!0};
  R = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0};
  u = {a:2, b:2, c:2, d:2, e:2, f:2, g:2, h:2, i:2, j:2, k:2, l:2, m:2, n:2, o:2, p:2, q:2, r:2, s:2, t:2, u:2, v:2, w:2, x:2, y:2, z:2, A:1, B:1, C:1, D:1, E:1, F:1, G:1, H:1, I:1, J:1, K:1, L:1, M:1, N:1, O:1, P:1, Q:1, R:1, S:1, T:1, U:1, V:1, W:1, X:1, Y:1, Z:1, "\b":4, "\f":4, "\n":4, "\r":4, "\t":4, " ":4};
  r = {$:"", aa:function(a) {
    r.$ = a;
  }, ea:function(a, q, y) {
    var A;
    r.$ += "<" + a;
    for (A in q) {
      a = q[A], r.$ += " " + A + (!0 !== a ? '="' + a.split('"').join('\\"').split('\\\\"').join('\\"') + '"' : "");
    }
    r.$ += (y ? "/" : "") + ">";
  }, ca:function(a) {
    r.$ += "</" + a + ">";
  }, ba:function(a) {
    a.split(" ").join("") && (a = " " === a.charAt(0) ? a.substr(1) : a, a = a.length && " " === a.charAt(a.length - 1) ? a.substr(0, a.length - 1) : a, r.$ += a);
  }, ha:function() {
  }, ga:function() {
  }, ja:function() {
  }};
  O.onload = function() {
    var a = G.all("input"), q = G.all("output");
    G.all("form").onsubmit = bz;
    function bz(y) {
      y && y.preventDefault();
      "undefined" != typeof event && (event.returnValue = !1);
      P(a.value);
      q.value = r.$;
      return !1;
    }
    bz = !1;
  };
})(this, document, Date);

