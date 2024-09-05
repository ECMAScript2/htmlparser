/* es2-html-parser@0.0.1
(c) 2024-2024 itozyun <itozyun@gmail.com> (https://outcloud.blogspot.com/)(undefined), MIT. */
(function(O, U) {
  function P(a) {
    function n() {
      g && (h.ba(a.substring(0, g)), a = a.substring(g), g = 0);
    }
    function y(p, t, v) {
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
      return 3 === f ? (A(p, t, w ? b : b.toUpperCase(), !1), k) : 0;
    }
    function A(p, t, v, f) {
      var m = 0, k = p.length;
      if (v) {
        for (m = k; 0 <= m && p[--m] !== v;) {
        }
      }
      if (0 <= m) {
        for (; m < k;) {
          t.ca(p[--k], f && !l[p[k]], !1), w && J[p[k]] && (w = !!t.da);
        }
        p.length = m;
      } else {
        t.ca(v, !1, !0);
      }
    }
    function D(p, t, v, f) {
      function m(H, K) {
        I[++L] = H;
        I[++L] = Q[H.toLowerCase()] ? w ? K || H : !0 : K || "";
      }
      function k() {
        (E = "/>" === f.substr(d, 2)) && ++d;
        return E;
      }
      for (var b = 0, z = f.length, d = 1, I = [], L = -1, E = !1, B, e, q, x, M, G; d < z && 9 > b;) {
        e = f.charAt(d);
        switch(b) {
          case 0:
            u[e] & 3 && (b = 1, q = d);
            break;
          case 1:
            if (u[e] & 4) {
              b = 2, B = f.substring(q, d);
            } else if (">" === e || k()) {
              b = 9, B = f.substring(q, d);
            }
            break;
          case 2:
            if (":" === e) {
              b = 3, q = d;
            } else if (u[e] & 3) {
              b = 4, q = d;
            } else if (">" === e || k()) {
              b = 9;
            }
            break;
          case 3:
            b = u[e] & 3 ? 4 : 9;
            break;
          case 4:
            if ("=" === e) {
              b = 6, x = f.substring(q, d);
            } else if (u[e] & 4) {
              b = 5, x = f.substring(q, d);
            } else if (">" === e || k()) {
              b = 9, m(f.substring(q, d));
            }
            break;
          case 5:
            if (":" === e) {
              b = 3, m(x), q = d;
            } else if (u[e] & 3) {
              b = 4, m(x), q = d;
            } else if ("=" === e) {
              b = 6;
            } else if (">" === e || k()) {
              b = 9, m(x);
            }
            break;
          case 6:
            '"' === e || "'" === e ? (b = 7, M = e, q = d + 1) : u[e] & 4 || (b = 8, q = d);
            G = !1;
            break;
          case 7:
            G || e !== M || (b = 2, m(x, f.substring(q, d)));
            G = "\\" === e && !G;
            break;
          case 8:
            u[e] & 4 ? b = 2 : ">" === e ? b = 9 : !R[x] && k() && (b = 9), 8 !== b && m(x, f.substring(q, d));
        }
        ++d;
      }
      if (9 === b) {
        b = B.toUpperCase();
        w || (w = !!J[B]);
        if (!w) {
          for (; t;) {
            if (l[t] && !l[t][b]) {
              A(p, v, t, !1), t = p[p.length - 1];
            } else {
              break;
            }
          }
        }
        (E = E || S[b]) || (p[p.length] = w ? B : b);
        v.ea(w ? B : b, I, E, d);
        return d;
      }
      return 0;
    }
    for (var h = r, g = 0, C = [], w = !!h.da, N = a.length - g, c, F; a;) {
      (c = F = C[C.length - 1]) && w && (F = c.toUpperCase());
      if (T[F]) {
        if ("PLAINTEXT" === F) {
          h.ba(a), a = "";
        } else if (c = a.toUpperCase().indexOf("</" + F), 0 <= c) {
          if (g = c, n(), c = y(C, h, a)) {
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
        if (n(), c = a.indexOf(">"), -1 !== c) {
          h.ha(a.substring(10, c)), a = a.substring(c + 1);
        } else {
          h.aa(a);
          return;
        }
      } else if (a.indexOf("<?") === g) {
        if (n(), c = a.indexOf("?>"), -1 !== c) {
          a = a.substring(c + 2);
        } else {
          h.aa(a);
          return;
        }
      } else if (a.indexOf("<![CDATA[") === g) {
        if (n(), c = a.indexOf("]]\x3e"), -1 !== c) {
          a = a.substring(c + 3);
        } else {
          h.aa(a);
          return;
        }
      } else if (a.indexOf("\x3c!--") === g) {
        if (n(), c = a.indexOf("--\x3e"), -1 !== c) {
          a = a.substring(c + 3);
        } else {
          h.aa(a);
          return;
        }
      } else if (a.indexOf("</") === g) {
        if (n(), c = y(C, h, a)) {
          a = a.substring(c);
        } else {
          h.aa(a);
          return;
        }
      } else if ("<" === a.charAt(g) && u[a.charAt(g + 1)] & 3) {
        if (n(), c = D(C, c, h, a)) {
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
    n();
    A(C, h, "", !0);
  }
  var l = {CAPTION:{ARTICLE:!0, SECTION:!0, NAV:!0, ASIDE:!0, H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, HEADER:!0, FOOTER:!0, ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, 
  AUDIO:!0, MAP:!0, AREA:!0, MATH:!0, SVG:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, DD:{ARTICLE:!0, SECTION:!0, NAV:!0, ASIDE:!0, H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, HEADER:!0, FOOTER:!0, ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, 
  DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, MATH:!0, SVG:!0, TABLE:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, 
  DT:{ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, MATH:!0, SVG:!0, TABLE:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, 
  TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, P:{A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, MATH:!0, SVG:!0, LABEL:!0, INPUT:!0, 
  BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, HTML:{HEAD:!0, BODY:!0}, HEAD:{TITLE:!0, BASE:!0, BGSOUND:!0, LINK:!0, META:!0, STYLE:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLETE:!0}, COLGROUP:{COL:!0}, OPTGROUP:{OPTION:!0}, OPTION:{}, TBODY:{TR:!0}, TR:{TH:!0, TD:!0}, RBC:{RB:!0, RP:!0, RT:!0}}, J, S, T, R, Q, u, r;
  l.LI = l.TD = l.DD;
  l.TH = l.DT;
  l.RB = l.RP = l.RT = l.P;
  l.TFOOT = l.THEAD = l.TBODY;
  l.RTC = l.RBC;
  J = {xml:!0, svg:!0, math:!0};
  S = {AREA:!0, BASE:!0, BASEFONT:!0, BR:!0, BGSOUND:!0, COL:!0, FRAME:!0, HR:!0, IMG:!0, INPUT:!0, ISINDEX:!0, KEYGEN:!0, LINK:!0, META:!0, PARAM:!0, SOURCE:!0, TRACK:!0, EMBED:!0, WBR:!0};
  T = {SCRIPT:!0, STYLE:!0, PLAINTEXT:!0, XMP:!0, TEXTAREA:!0};
  R = {action:!0, archive:!0, background:!0, cite:!0, classid:!0, codebase:!0, data:!0, href:!0, longdesc:!0, profile:!0, src:!0, usemap:!0};
  Q = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0};
  u = {a:2, b:2, c:2, d:2, e:2, f:2, g:2, h:2, i:2, j:2, k:2, l:2, m:2, n:2, o:2, p:2, q:2, r:2, s:2, t:2, u:2, v:2, w:2, x:2, y:2, z:2, A:1, B:1, C:1, D:1, E:1, F:1, G:1, H:1, I:1, J:1, K:1, L:1, M:1, N:1, O:1, P:1, Q:1, R:1, S:1, T:1, U:1, V:1, W:1, X:1, Y:1, Z:1, "\b":4, "\f":4, "\n":4, "\r":4, "\t":4, " ":4};
  r = {$:"", aa:function(a) {
    r.$ = a;
  }, ea:function(a, n, y) {
    r.$ += "<" + a;
    a = 0;
    for (var A, D; a < n.length; a += 2) {
      A = n[a], D = n[a + 1], r.$ += " " + A[0] + (!0 !== D ? '="' + D.split('"').join('\\"').split('\\\\"').join('\\"') + '"' : "");
    }
    r.$ += (y ? "/" : "") + ">";
  }, ca:function(a) {
    r.$ += "</" + a + ">";
  }, ba:function(a) {
    a.split(" ").join("") && (a = " " === a.charAt(0) ? a.substr(1) : a, a = a.length && " " === a.charAt(a.length - 1) ? a.substr(0, a.length - 1) : a, r.$ += a);
  }, ga:function() {
  }, fa:function() {
  }, ia:function() {
  }};
  O.onload = function() {
    var a = document.all("input"), n = document.all("output");
    document.all("form").onsubmit = bz;
    function bz(y) {
      y && y.preventDefault();
      "undefined" != typeof event && (event.returnValue = !1);
      P(a.value);
      n.value = r.$;
      return !1;
    }
    bz = !1;
  };
})(this, Date);

