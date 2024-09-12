/* es2-html-parser@0.0.1
(c) 2024-2024 itozyun <itozyun@gmail.com> (https://outcloud.blogspot.com/)(undefined), MIT. */
(function(P, G, W) {
  function Q(a) {
    function p() {
      e && (g.ba(q(a.substring(0, e))), a = a.substring(e), e = 0);
    }
    function q(m) {
      return m.split("&lt;").join("<").split("&gt;").join(">").split("&amp;").join("&");
    }
    function z(m, t, u) {
      for (var d = 1, n = u.length, k = 3, c, A; k < n && 3 !== d;) {
        A = u.charAt(k);
        switch(d) {
          case 1:
            w[A] & 4 ? d = 2 : ">" === A && (d = 3);
            1 !== d && (c = u.substring(2, k));
            break;
          case 2:
            ">" === A && (d = 3);
        }
        ++k;
      }
      return 3 === d ? (H(m, t, v ? c : c.toUpperCase(), !1), k) : 0;
    }
    function H(m, t, u, d) {
      var n = 0, k = m.length;
      if (u) {
        for (n = k; 0 <= n && m[--n] !== u;) {
        }
      }
      if (0 <= n) {
        for (; n < k;) {
          t.ca(m[--k], d && !l[m[k]], !1), v && K[m[k]] && (v = !!t.da);
        }
        m.length = n;
      } else {
        t.ca(u, !1, !0);
      }
    }
    function R(m, t, u, d) {
      function n(I, J) {
        L[I] = !0 === J ? !0 : S[I.toLowerCase()] ? v ? q(J || I) : !0 : q(J || "");
        ++M;
      }
      function k() {
        (D = "/>" === d.substr(h, 2)) && ++h;
        return D;
      }
      for (var c = 1, A = d.length, h = 2, L = {}, M = 0, D = !1, f, B, x, y, N, F; h < A && 9 > c;) {
        f = d.charAt(h);
        switch(c) {
          case 1:
            if (w[f] & 4) {
              c = 2, B = d.substring(1, h);
            } else if (">" === f || k()) {
              c = 9, B = d.substring(1, h);
            }
            break;
          case 2:
            ">" === f || k() ? c = 9 : w[f] & 4 || (c = 3, x = h);
            break;
          case 3:
            if ("=" === f) {
              c = 5, y = d.substring(x, h);
            } else if (w[f] & 4) {
              c = 4, y = d.substring(x, h);
            } else if (">" === f || k()) {
              c = 9, n(d.substring(x, h), !0);
            }
            break;
          case 4:
            "=" === f ? c = 5 : ">" === f || k() ? (c = 9, n(y, !0)) : w[f] & 4 || (c = 3, n(y, !0), x = h);
            break;
          case 5:
            '"' === f || "'" === f ? (c = 6, N = f, x = h + 1) : w[f] & 4 || (c = 7, x = h);
            F = !1;
            break;
          case 6:
            F || f !== N || (c = 2, n(y, d.substring(x, h)));
            F = "\\" === f && !F;
            break;
          case 7:
            w[f] & 4 ? c = 2 : ">" === f ? c = 9 : !T[y] && k() && (c = 9), 7 !== c && n(y, d.substring(x, h));
        }
        ++h;
      }
      if (9 === c) {
        c = B.toUpperCase();
        v || (v = !!K[B]);
        if (!v) {
          for (; t;) {
            if (l[t] && !l[t][c]) {
              H(m, u, t, !1), t = m[m.length - 1];
            } else {
              break;
            }
          }
        }
        (D = D || !!U[c]) || (m[m.length] = v ? B : c);
        u.ea(v ? B : c, M ? L : null, D, h);
        return h;
      }
      return 0;
    }
    for (var g = r, e = 0, C = [], v = !!g.da, O = a.length - e, b, E; a;) {
      (b = E = C[C.length - 1]) && v && (E = b.toUpperCase());
      if (V[E]) {
        if ("PLAINTEXT" === E) {
          g.ba(q(a)), a = "";
        } else if (b = a.toUpperCase().indexOf("</" + E), 0 <= b) {
          if (e = b, p(), b = z(C, g, a)) {
            a = a.substring(b);
          } else {
            g.aa(a);
            return;
          }
        } else {
          g.aa(a);
          return;
        }
      } else if (a.indexOf("<!DOCTYPE ") === e) {
        if (p(), b = a.indexOf(">"), -1 !== b) {
          g.ia(a.substring(10, b)), a = a.substring(b + 1);
        } else {
          g.aa(a);
          return;
        }
      } else if (a.indexOf("<?") === e) {
        if (p(), b = a.indexOf("?>"), -1 !== b) {
          q(a.substring(2, b)), a = a.substring(b + 2);
        } else {
          g.aa(a);
          return;
        }
      } else if (a.indexOf("<![CDATA[") === e) {
        if (p(), b = a.indexOf("]]\x3e"), -1 !== b) {
          q(a.substring(9, b)), a = a.substring(b + 3);
        } else {
          g.aa(a);
          return;
        }
      } else if (a.indexOf("\x3c!--") === e) {
        if (p(), b = a.indexOf("--\x3e"), -1 !== b) {
          q(a.substring(4, b)), a = a.substring(b + 3);
        } else {
          g.aa(a);
          return;
        }
      } else if (a.indexOf("</") === e && w[a.charAt(e + 2)] & 3) {
        if (p(), b = z(C, g, a)) {
          a = a.substring(b);
        } else {
          g.aa(a);
          return;
        }
      } else if ("<" === a.charAt(e) && w[a.charAt(e + 1)] & 3) {
        if (p(), b = R(C, b, g, a)) {
          a = a.substring(b);
        } else {
          g.aa(a);
          return;
        }
      } else {
        b = a.indexOf("<", e), -1 === b ? (g.ba(q(a)), a = "") : e < b ? e = b : ++e;
      }
      b = a.length - e;
      if (b === O) {
        g.aa(a);
        return;
      }
      O = b;
    }
    p();
    H(C, g, "", !0);
  }
  var l = {CAPTION:{ARTICLE:!0, SECTION:!0, NAV:!0, ASIDE:!0, H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, HEADER:!0, FOOTER:!0, ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, 
  AUDIO:!0, MAP:!0, AREA:!0, MATH:!0, SVG:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, DD:{ARTICLE:!0, SECTION:!0, NAV:!0, ASIDE:!0, H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, HEADER:!0, FOOTER:!0, ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, 
  DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, MATH:!0, SVG:!0, TABLE:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, 
  DT:{ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, MATH:!0, SVG:!0, TABLE:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, 
  TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, P:{A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, MATH:!0, SVG:!0, LABEL:!0, INPUT:!0, 
  BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, HTML:{HEAD:!0, BODY:!0}, HEAD:{TITLE:!0, BASE:!0, BGSOUND:!0, LINK:!0, META:!0, STYLE:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLETE:!0}, COLGROUP:{COL:!0}, OPTGROUP:{OPTION:!0}, OPTION:{}, TBODY:{TR:!0}, TR:{TH:!0, TD:!0}, RBC:{RB:!0, RP:!0, RT:!0}}, K, U, V, T, S, w, r;
  l.LI = l.TD = l.DD;
  l.TH = l.DT;
  l.RB = l.RP = l.RT = l.P;
  l.TFOOT = l.THEAD = l.TBODY;
  l.RTC = l.RBC;
  K = {xml:!0, svg:!0, math:!0};
  U = {AREA:!0, BASE:!0, BASEFONT:!0, BR:!0, BGSOUND:!0, COL:!0, fa:!0, FRAME:!0, HR:!0, IMG:!0, INPUT:!0, ISINDEX:!0, KEYGEN:!0, LINK:!0, META:!0, PARAM:!0, SOURCE:!0, TRACK:!0, EMBED:!0, WBR:!0};
  V = {SCRIPT:!0, STYLE:!0, PLAINTEXT:!0, XMP:!0, TEXTAREA:!0};
  T = {action:!0, archive:!0, background:!0, cite:!0, classid:!0, codebase:!0, data:!0, href:!0, longdesc:!0, profile:!0, src:!0, usemap:!0};
  S = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0};
  w = {a:2, b:2, c:2, d:2, e:2, f:2, g:2, h:2, i:2, j:2, k:2, l:2, m:2, n:2, o:2, p:2, q:2, r:2, s:2, t:2, u:2, v:2, w:2, x:2, y:2, z:2, A:1, B:1, C:1, D:1, E:1, F:1, G:1, H:1, I:1, J:1, K:1, L:1, M:1, N:1, O:1, P:1, Q:1, R:1, S:1, T:1, U:1, V:1, W:1, X:1, Y:1, Z:1, "\b":4, "\f":4, "\n":4, "\r":4, "\t":4, " ":4};
  r = {$:"", aa:function(a) {
    r.$ = a;
  }, ea:function(a, p, q) {
    var z;
    r.$ += "<" + a;
    for (z in p) {
      a = p[z], r.$ += " " + z + (!0 !== a ? '="' + a.split('"').join('\\"').split('\\\\"').join('\\"') + '"' : "");
    }
    r.$ += (q ? "/" : "") + ">";
  }, ca:function(a) {
    r.$ += "</" + a + ">";
  }, ba:function(a) {
    a.split(" ").join("") && (a = " " === a.charAt(0) ? a.substr(1) : a, a = a.length && " " === a.charAt(a.length - 1) ? a.substr(0, a.length - 1) : a, r.$ += a);
  }, ha:function() {
  }, ga:function() {
  }, ja:function() {
  }};
  P.onload = function() {
    var a = G.all("input"), p = G.all("output");
    G.all("form").onsubmit = bz;
    function bz(q) {
      q && q.preventDefault();
      "undefined" != typeof event && (event.returnValue = !1);
      Q(a.value);
      p.value = r.$;
      return !1;
    }
    bz = !1;
  };
})(this, document, Date);

