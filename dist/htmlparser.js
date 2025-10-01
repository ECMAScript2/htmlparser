/* es2-html-parser@1.1.0
(c) 2024-2025 itozyun <itozyun@gmail.com> (https://outcloud.blogspot.com/)(undefined), MIT. */
(function(G, L, da) {
  function W(a, q, k) {
    function x() {
      c = a.indexOf("<", c + 1);
      -1 === c && (c = a.length, y());
    }
    function y() {
      var e;
      if (c) {
        e = a.substring(0, c);
        q.ea(H && !X[w] ? e : D(e));
        a = a.substring(c);
        c = 0;
      }
    }
    function z(e) {
      q.ba && q.ba(e);
    }
    function D(e) {
      return e.split("&lt;").join("<").split("&gt;").join(">").split("&amp;lt;").join("&lt;").split("&amp;gt;").join("&gt;");
    }
    function Y(e, r, t) {
      for (var f = 0, n = t.length, m = 3, b, A; m < n && 2 !== f;) {
        A = t.charAt(m);
        switch(f) {
          case 0:
            u[A] & 4 ? f = 1 : ">" === A && (f = 2);
            f && (b = t.substring(2, m));
            break;
          case 1:
            ">" === A && (f = 2);
        }
        ++m;
      }
      return 2 === f ? (P[b] || M(e, r, k || I ? b : b.toUpperCase(), !1), m) : 0;
    }
    function M(e, r, t, f) {
      var n = 0, m = e.length;
      if (t) {
        for (n = m; 0 <= n && e[--n] !== t;) {
        }
      }
      if (0 <= n) {
        for (; n < m;) {
          r.aa(e[--m], f && !l[e[m]], !1), k && Q[e[m]] && (k = !!r.ca);
        }
        e.length = n;
      } else {
        r.aa(t, !1, !0);
      }
    }
    function Z(e, r, t, f) {
      function n(N, O) {
        function R(aa) {
          return D(aa).split('\\"').join('"').split("\\'").join("'").split("&quot;").join('"').split("&apos;").join("'");
        }
        S[N] = !0 === O ? !0 : ba[N.toLowerCase()] ? k ? R(O || N) : !0 : R(O || "");
        ++T;
      }
      function m() {
        (E = "/>" === f.substr(h, 2)) && ++h;
        return E;
      }
      for (var b = 1, A = f.length, h = 2, S = {}, T = 0, E = !1, g, B, v, C, U, J; h < A && 9 > b;) {
        g = f.charAt(h);
        switch(b) {
          case 1:
            if (u[g] & 4) {
              b = 2, B = f.substring(1, h);
            } else if (">" === g || m()) {
              b = 9, B = f.substring(1, h);
            }
            break;
          case 2:
            ">" === g || m() ? b = 9 : u[g] & 4 || (b = 3, v = h);
            break;
          case 3:
            if ("=" === g) {
              b = 5, C = f.substring(v, h);
            } else if (u[g] & 4) {
              b = 4, C = f.substring(v, h);
            } else if (">" === g || m()) {
              b = 9, n(f.substring(v, h), !0);
            }
            break;
          case 4:
            "=" === g ? b = 5 : ">" === g || m() ? (b = 9, n(C, !0)) : u[g] & 4 || (b = 3, n(C, !0), v = h);
            break;
          case 5:
            '"' === g || "'" === g ? (b = 6, U = g, v = h + 1) : u[g] & 4 || (b = 7, v = h);
            J = !1;
            break;
          case 6:
            J || g !== U || (b = 2, n(C, f.substring(v, h)));
            J = "\\" === g && !J;
            break;
          case 7:
            u[g] & 4 ? b = 2 : ">" === g && (b = 9), 7 !== b && n(C, f.substring(v, h));
        }
        ++h;
      }
      if (9 === b) {
        b = B.toUpperCase();
        k || (k = !!Q[B]);
        if (!k && !I) {
          for (; r;) {
            if (l[r] && !l[r][b]) {
              M(e, t, r, !1), r = e[e.length - 1];
            } else {
              break;
            }
          }
        }
        (E = E || !!P[b]) || (e[e.length] = k || I ? B : b);
        t.da(k || I ? B : b, T ? S : null, E, h);
        return h;
      }
      return 0;
    }
    for (var c = 0, I = !1, F = [], V = a.length - c, w, H, d, K; a;) {
      w = F[F.length - 1];
      H = ca[w];
      if (a.indexOf("<?") === c) {
        if (y(), d = a.indexOf("?>"), -1 !== d) {
          D(a.substring(2, d)), a = a.substring(d + 2);
        } else {
          z(a);
          return;
        }
      } else if (a.indexOf("</", c) === c && u[a.charAt(c + 2)] & 3) {
        if (H && ("PLAINTEXT" === w || "plaintext" === w ? K = !0 : a.indexOf(w.toLowerCase(), c) !== c + 2 && a.indexOf(w.toUpperCase(), c) !== c + 2 && (K = !0)), K) {
          x(), K = !1;
        } else if (y(), d = Y(F, q, a)) {
          a = a.substring(d);
        } else {
          z(a);
          return;
        }
      } else if (H) {
        x();
      } else if (a.indexOf("<!DOCTYPE ") === c) {
        if (y(), d = a.indexOf(">"), -1 !== d) {
          q.ha(a.substring(c, d + 1)), a = a.substring(d + 1);
        } else {
          z(a);
          return;
        }
      } else if (a.indexOf("<![CDATA[") === c) {
        if (y(), d = a.indexOf("]]\x3e"), -1 !== d) {
          D(a.substring(9, d)), a = a.substring(d + 3);
        } else {
          z(a);
          return;
        }
      } else if (a.indexOf("\x3c!--") === c) {
        if (y(), d = a.indexOf("--\x3e"), -1 !== d) {
          D(a.substring(4, d)), a = a.substring(d + 3);
        } else {
          z(a);
          return;
        }
      } else if ("<" === a.charAt(c) && u[a.charAt(c + 1)] & 3) {
        if (y(), d = Z(F, w, q, a)) {
          a = a.substring(d);
        } else {
          z(a);
          return;
        }
      } else {
        x();
      }
      d = a.length - c;
      if (d === V) {
        z(a);
        return;
      }
      V = d;
    }
    M(F, q, "", !0);
  }
  var Q = {xml:!0, svg:!0, math:!0}, ba = {async:!0, autofocus:!0, checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, draggable:!0, hidden:!0, ismap:!0, loop:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, novalidate:!0, nowrap:!0, readonly:!0, required:!0, reversed:!0, scoped:!0, selected:!0}, P = {AREA:!0, BASE:!0, BASEFONT:!0, BR:!0, BGSOUND:!0, COL:!0, COMMAND:!0, FRAME:!0, HR:!0, IMG:!0, INPUT:!0, ISINDEX:!0, KEYGEN:!0, LINK:!0, META:!0, PARAM:!0, SOURCE:!0, TRACK:!0, EMBED:!0, 
  WBR:!0, area:!0, base:!0, basefont:!0, br:!0, bgsound:!0, col:!0, command:!0, frame:!0, hr:!0, img:!0, input:!0, isindex:!0, keygen:!0, link:!0, meta:!0, param:!0, source:!0, track:!0, embed:!0, wbr:!0}, ca = {SCRIPT:!0, STYLE:!0, TEXTAREA:!0, TITLE:!0, PLAINTEXT:!0, XMP:!0, LISTING:!0, script:!0, style:!0, textarea:!0, title:!0, plaintext:!0, xmp:!0, listing:!0}, X = {TEXTAREA:!0, TITLE:!0, textarea:!0, title:!0}, l = {CAPTION:{ARTICLE:!0, SECTION:!0, NAV:!0, ASIDE:!0, H1:!0, H2:!0, H3:!0, H4:!0, 
  H5:!0, H6:!0, HEADER:!0, FOOTER:!0, ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, 
  SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, DD:{ARTICLE:!0, SECTION:!0, NAV:!0, ASIDE:!0, H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, HEADER:!0, FOOTER:!0, ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, 
  I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, TABLE:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, DT:{ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, 
  DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, TABLE:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, 
  DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, P:{A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, 
  METER:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, HTML:{HEAD:!0, BODY:!0}, HEAD:{TITLE:!0, BASE:!0, BGSOUND:!0, LINK:!0, META:!0, STYLE:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0}, COLGROUP:{COL:!0}, OPTGROUP:{OPTION:!0}, OPTION:{}, TBODY:{TR:!0}, TR:{TH:!0, TD:!0}, RBC:{RB:!0, RP:!0, RT:!0}}, u, p;
  l.LI = l.TD = l.DD;
  l.TH = l.DT;
  l.RB = l.RP = l.RT = l.P;
  l.TFOOT = l.THEAD = l.TBODY;
  l.RTC = l.RBC;
  u = {a:2, b:2, c:2, d:2, e:2, f:2, g:2, h:2, i:2, j:2, k:2, l:2, m:2, n:2, o:2, p:2, q:2, r:2, s:2, t:2, u:2, v:2, w:2, x:2, y:2, z:2, A:1, B:1, C:1, D:1, E:1, F:1, G:1, H:1, I:1, J:1, K:1, L:1, M:1, N:1, O:1, P:1, Q:1, R:1, S:1, T:1, U:1, V:1, W:1, X:1, Y:1, Z:1, "\t":4, "\n":4, "\f":4, "\r":4, " ":4};
  p = {$:"", ba:function(a) {
    p.$ = a;
  }, da:function(a, q, k) {
    var x;
    p.$ += "<" + a;
    for (x in q) {
      a = q[x], p.$ += " " + x + (!0 !== a ? '="' + a.split('"').join('\\"').split('\\\\"').join('\\"') + '"' : "");
    }
    p.$ += (k ? "/" : "") + ">";
  }, aa:function(a) {
    p.$ += "</" + a + ">";
  }, ea:function(a) {
    a.split(" ").join("") && (a = " " === a.charAt(0) ? a.substr(1) : a, a = a.length && " " === a.charAt(a.length - 1) ? a.substr(0, a.length - 1) : a, p.$ += a);
  }, ga:function() {
  }, fa:function() {
  }, ia:function() {
  }};
  G.onload = function() {
    var a = G.input || L.all("input"), q = G.output || L.all("output");
    (G.form || L.all("form")).onsubmit = bz;
    function bz(k) {
      k && k.preventDefault();
      "undefined" != typeof event && (event.returnValue = !1);
      k = p;
      W(a.value, k, !!k.ca);
      q.value = p.$;
      return !1;
    }
    bz = !1;
  };
})(this, document, Date);

