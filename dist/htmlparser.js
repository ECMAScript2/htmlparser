/* es2-html-parser@1.0.0
(c) 2024-2025 itozyun <itozyun@gmail.com> (https://outcloud.blogspot.com/)(undefined), MIT. */
(function(G, I, Z) {
  function U(a, p, f) {
    function t() {
      d && (p.aa(z(a.substring(0, d))), a = a.substring(d), d = 0);
    }
    function w(h) {
      p.ca && p.ca(h);
    }
    function z(h) {
      return h.split("&lt;").join("<").split("&gt;").join(">").split("&amp;lt;").join("&lt;").split("&amp;gt;").join("&gt;");
    }
    function M(h, u, v) {
      for (var e = 0, q = v.length, n = 3, b, A; n < q && 2 !== e;) {
        A = v.charAt(n);
        switch(e) {
          case 0:
            x[A] & 4 ? e = 1 : ">" === A && (e = 2);
            e && (b = v.substring(2, n));
            break;
          case 1:
            ">" === A && (e = 2);
        }
        ++n;
      }
      return 2 === e ? (N[b] || J(h, u, f || B ? b : b.toUpperCase(), !1), n) : 0;
    }
    function J(h, u, v, e) {
      var q = 0, n = h.length;
      if (v) {
        for (q = n; 0 <= q && h[--q] !== v;) {
        }
      }
      if (0 <= q) {
        for (; q < n;) {
          u.ba(h[--n], e && !m[h[n]], !1), f && O[h[n]] && (f = !!u.da);
        }
        h.length = q;
      } else {
        u.ba(v, !1, !0);
      }
    }
    function V(h, u, v, e) {
      function q(K, L) {
        function P(W) {
          return z(W).split('\\"').join('"').split("\\'").join("'").split("&quot;").join('"').split("&apos;").join("'");
        }
        Q[K] = !0 === L ? !0 : X[K.toLowerCase()] ? f ? P(L || K) : !0 : P(L || "");
        ++R;
      }
      function n() {
        (F = "/>" === e.substr(k, 2)) && ++k;
        return F;
      }
      for (var b = 1, A = e.length, k = 2, Q = {}, R = 0, F = !1, g, C, y, D, S, H; k < A && 9 > b;) {
        g = e.charAt(k);
        switch(b) {
          case 1:
            if (x[g] & 4) {
              b = 2, C = e.substring(1, k);
            } else if (">" === g || n()) {
              b = 9, C = e.substring(1, k);
            }
            break;
          case 2:
            ">" === g || n() ? b = 9 : x[g] & 4 || (b = 3, y = k);
            break;
          case 3:
            if ("=" === g) {
              b = 5, D = e.substring(y, k);
            } else if (x[g] & 4) {
              b = 4, D = e.substring(y, k);
            } else if (">" === g || n()) {
              b = 9, q(e.substring(y, k), !0);
            }
            break;
          case 4:
            "=" === g ? b = 5 : ">" === g || n() ? (b = 9, q(D, !0)) : x[g] & 4 || (b = 3, q(D, !0), y = k);
            break;
          case 5:
            '"' === g || "'" === g ? (b = 6, S = g, y = k + 1) : x[g] & 4 || (b = 7, y = k);
            H = !1;
            break;
          case 6:
            H || g !== S || (b = 2, q(D, e.substring(y, k)));
            H = "\\" === g && !H;
            break;
          case 7:
            x[g] & 4 ? b = 2 : ">" === g && (b = 9), 7 !== b && q(D, e.substring(y, k));
        }
        ++k;
      }
      if (9 === b) {
        b = C.toUpperCase();
        f || (f = !!O[C]);
        if (!f && !B) {
          for (; u;) {
            if (m[u] && !m[u][b]) {
              J(h, v, u, !1), u = h[h.length - 1];
            } else {
              break;
            }
          }
        }
        (F = F || !!N[b]) || (h[h.length] = f || B ? C : b);
        v.ea(f || B ? C : b, R ? Q : null, F, k);
        return k;
      }
      return 0;
    }
    for (var d = 0, B = !1, E = [], T = a.length - d, l, c; a;) {
      l = E[E.length - 1];
      if (Y[l]) {
        if ("PLAINTEXT" === l || "plaintext" === l) {
          p.aa(z(a)), a = "";
        } else if (c = a.indexOf("</" + (f || B ? l : l.toLowerCase())), -1 === c && (c = a.indexOf("</" + (f || B ? l.toUpperCase() : l))), 0 <= c) {
          if (d = c, t(), l = M(E, p, a)) {
            a = a.substring(l);
          } else {
            w(a);
            return;
          }
        } else {
          w(a);
          return;
        }
      } else if (a.indexOf("<!DOCTYPE ") === d) {
        if (t(), c = a.indexOf(">"), -1 !== c) {
          p.ha(a.substring(d, c + 1)), a = a.substring(c + 1);
        } else {
          w(a);
          return;
        }
      } else if (a.indexOf("<?") === d) {
        if (t(), c = a.indexOf("?>"), -1 !== c) {
          z(a.substring(2, c)), a = a.substring(c + 2);
        } else {
          w(a);
          return;
        }
      } else if (a.indexOf("<![CDATA[") === d) {
        if (t(), c = a.indexOf("]]\x3e"), -1 !== c) {
          z(a.substring(9, c)), a = a.substring(c + 3);
        } else {
          w(a);
          return;
        }
      } else if (a.indexOf("\x3c!--") === d) {
        if (t(), c = a.indexOf("--\x3e"), -1 !== c) {
          z(a.substring(4, c)), a = a.substring(c + 3);
        } else {
          w(a);
          return;
        }
      } else if (a.indexOf("</") === d && x[a.charAt(d + 2)] & 3) {
        if (t(), l = M(E, p, a)) {
          a = a.substring(l);
        } else {
          w(a);
          return;
        }
      } else if ("<" === a.charAt(d) && x[a.charAt(d + 1)] & 3) {
        if (t(), l = V(E, l, p, a)) {
          a = a.substring(l);
        } else {
          w(a);
          return;
        }
      } else {
        c = a.indexOf("<", d), -1 === c ? (p.aa(z(a)), a = "") : d < c ? d = c : ++d;
      }
      l = a.length - d;
      if (l === T) {
        w(a);
        return;
      }
      T = l;
    }
    t();
    J(E, p, "", !0);
  }
  var O = {xml:!0, svg:!0, math:!0}, X = {async:!0, autofocus:!0, checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, draggable:!0, hidden:!0, ismap:!0, loop:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, novalidate:!0, nowrap:!0, readonly:!0, required:!0, reversed:!0, scoped:!0, selected:!0}, N = {AREA:!0, BASE:!0, BASEFONT:!0, BR:!0, BGSOUND:!0, COL:!0, COMMAND:!0, FRAME:!0, HR:!0, IMG:!0, INPUT:!0, ISINDEX:!0, KEYGEN:!0, LINK:!0, META:!0, PARAM:!0, SOURCE:!0, TRACK:!0, EMBED:!0, WBR:!0, 
  area:!0, base:!0, basefont:!0, br:!0, bgsound:!0, col:!0, command:!0, frame:!0, hr:!0, img:!0, input:!0, isindex:!0, keygen:!0, link:!0, meta:!0, param:!0, source:!0, track:!0, embed:!0, wbr:!0}, Y = {SCRIPT:!0, STYLE:!0, TEXTAREA:!0, TITLE:!0, PLAINTEXT:!0, XMP:!0, script:!0, style:!0, textarea:!0, title:!0, plaintext:!0, xmp:!0}, m = {CAPTION:{ARTICLE:!0, SECTION:!0, NAV:!0, ASIDE:!0, H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, HEADER:!0, FOOTER:!0, ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, 
  OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, 
  FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, DD:{ARTICLE:!0, SECTION:!0, NAV:!0, ASIDE:!0, H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, HEADER:!0, FOOTER:!0, ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, 
  INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, TABLE:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, DT:{ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, 
  DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, TABLE:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, P:{A:!0, EM:!0, 
  STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, HTML:{HEAD:!0, 
  BODY:!0}, HEAD:{TITLE:!0, BASE:!0, BGSOUND:!0, LINK:!0, META:!0, STYLE:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0}, COLGROUP:{COL:!0}, OPTGROUP:{OPTION:!0}, OPTION:{}, TBODY:{TR:!0}, TR:{TH:!0, TD:!0}, RBC:{RB:!0, RP:!0, RT:!0}}, x, r;
  m.LI = m.TD = m.DD;
  m.TH = m.DT;
  m.RB = m.RP = m.RT = m.P;
  m.TFOOT = m.THEAD = m.TBODY;
  m.RTC = m.RBC;
  x = {a:2, b:2, c:2, d:2, e:2, f:2, g:2, h:2, i:2, j:2, k:2, l:2, m:2, n:2, o:2, p:2, q:2, r:2, s:2, t:2, u:2, v:2, w:2, x:2, y:2, z:2, A:1, B:1, C:1, D:1, E:1, F:1, G:1, H:1, I:1, J:1, K:1, L:1, M:1, N:1, O:1, P:1, Q:1, R:1, S:1, T:1, U:1, V:1, W:1, X:1, Y:1, Z:1, "\t":4, "\n":4, "\f":4, "\r":4, " ":4};
  r = {$:"", ca:function(a) {
    r.$ = a;
  }, ea:function(a, p, f) {
    var t;
    r.$ += "<" + a;
    for (t in p) {
      a = p[t], r.$ += " " + t + (!0 !== a ? '="' + a.split('"').join('\\"').split('\\\\"').join('\\"') + '"' : "");
    }
    r.$ += (f ? "/" : "") + ">";
  }, ba:function(a) {
    r.$ += "</" + a + ">";
  }, aa:function(a) {
    a.split(" ").join("") && (a = " " === a.charAt(0) ? a.substr(1) : a, a = a.length && " " === a.charAt(a.length - 1) ? a.substr(0, a.length - 1) : a, r.$ += a);
  }, ga:function() {
  }, fa:function() {
  }, ia:function() {
  }};
  G.onload = function() {
    var a = G.input || I.all("input"), p = G.output || I.all("output");
    (G.form || I.all("form")).onsubmit = bz;
    function bz(f) {
      f && f.preventDefault();
      "undefined" != typeof event && (event.returnValue = !1);
      f = r;
      U(a.value, f, !!f.da);
      p.value = r.$;
      return !1;
    }
    bz = !1;
  };
})(this, document, Date);

