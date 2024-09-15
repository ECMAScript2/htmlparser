/* es2-html-parser@0.0.1
(c) 2024-2024 itozyun <itozyun@gmail.com> (https://outcloud.blogspot.com/)(undefined), MIT. */
(function(Q, G, V) {
  function R(a) {
    function q() {
      e && (g.ba(r(a.substring(0, e))), a = a.substring(e), e = 0);
    }
    function r(m) {
      return m.split("&lt;").join("<").split("&gt;").join(">").split("&amp;").join("&");
    }
    function z(m, u, w) {
      for (var d = 0, p = w.length, n = 3, b, A; n < p && 2 !== d;) {
        A = w.charAt(n);
        switch(d) {
          case 0:
            x[A] & 4 ? d = 1 : ">" === A && (d = 2);
            d && (b = w.substring(2, n));
            break;
          case 1:
            ">" === A && (d = 2);
        }
        ++n;
      }
      return 2 === d ? (K[b] || H(m, u, v ? b : b.toUpperCase(), !1), n) : 0;
    }
    function H(m, u, w, d) {
      var p = 0, n = m.length;
      if (w) {
        for (p = n; 0 <= p && m[--p] !== w;) {
        }
      }
      if (0 <= p) {
        for (; p < n;) {
          u.ca(m[--n], d && !l[m[n]], !1), v && L[m[n]] && (v = !!u.da);
        }
        m.length = p;
      } else {
        u.ca(w, !1, !0);
      }
    }
    function S(m, u, w, d) {
      function p(I, J) {
        M[I] = !0 === J ? !0 : T[I.toLowerCase()] ? v ? r(J || I) : !0 : r(J || "");
        ++N;
      }
      function n() {
        (E = "/>" === d.substr(h, 2)) && ++h;
        return E;
      }
      for (var b = 1, A = d.length, h = 2, M = {}, N = 0, E = !1, f, B, y, C, O, F; h < A && 9 > b;) {
        f = d.charAt(h);
        switch(b) {
          case 1:
            if (x[f] & 4) {
              b = 2, B = d.substring(1, h);
            } else if (">" === f || n()) {
              b = 9, B = d.substring(1, h);
            }
            break;
          case 2:
            ">" === f || n() ? b = 9 : x[f] & 4 || (b = 3, y = h);
            break;
          case 3:
            if ("=" === f) {
              b = 5, C = d.substring(y, h);
            } else if (x[f] & 4) {
              b = 4, C = d.substring(y, h);
            } else if (">" === f || n()) {
              b = 9, p(d.substring(y, h), !0);
            }
            break;
          case 4:
            "=" === f ? b = 5 : ">" === f || n() ? (b = 9, p(C, !0)) : x[f] & 4 || (b = 3, p(C, !0), y = h);
            break;
          case 5:
            '"' === f || "'" === f ? (b = 6, O = f, y = h + 1) : x[f] & 4 || (b = 7, y = h);
            F = !1;
            break;
          case 6:
            F || f !== O || (b = 2, p(C, d.substring(y, h)));
            F = "\\" === f && !F;
            break;
          case 7:
            x[f] & 4 ? b = 2 : ">" === f && (b = 9), 7 !== b && p(C, d.substring(y, h));
        }
        ++h;
      }
      if (9 === b) {
        b = B.toUpperCase();
        v || (v = !!L[B]);
        if (!v) {
          for (; u;) {
            if (l[u] && !l[u][b]) {
              H(m, w, u, !1), u = m[m.length - 1];
            } else {
              break;
            }
          }
        }
        (E = E || !!K[b]) || (m[m.length] = v ? B : b);
        w.ea(v ? B : b, N ? M : null, E, h);
        return h;
      }
      return 0;
    }
    for (var g = t, e = 0, D = [], v = !!g.da, P = a.length - e, k, c; a;) {
      k = D[D.length - 1];
      if (U[k]) {
        if ("PLAINTEXT" === k || "plaintext" === k) {
          g.ba(r(a)), a = "";
        } else if (c = a.indexOf("</" + (v ? k : k.toLowerCase())), -1 === c && (c = a.indexOf("</" + (v ? k.toUpperCase() : k))), 0 <= c) {
          if (e = c, q(), k = z(D, g, a)) {
            a = a.substring(k);
          } else {
            g.aa(a);
            return;
          }
        } else {
          g.aa(a);
          return;
        }
      } else if (a.indexOf("<!DOCTYPE ") === e) {
        if (q(), c = a.indexOf(">"), -1 !== c) {
          g.ha(a.substring(10, c)), a = a.substring(c + 1);
        } else {
          g.aa(a);
          return;
        }
      } else if (a.indexOf("<?") === e) {
        if (q(), c = a.indexOf("?>"), -1 !== c) {
          r(a.substring(2, c)), a = a.substring(c + 2);
        } else {
          g.aa(a);
          return;
        }
      } else if (a.indexOf("<![CDATA[") === e) {
        if (q(), c = a.indexOf("]]\x3e"), -1 !== c) {
          r(a.substring(9, c)), a = a.substring(c + 3);
        } else {
          g.aa(a);
          return;
        }
      } else if (a.indexOf("\x3c!--") === e) {
        if (q(), c = a.indexOf("--\x3e"), -1 !== c) {
          r(a.substring(4, c)), a = a.substring(c + 3);
        } else {
          g.aa(a);
          return;
        }
      } else if (a.indexOf("</") === e && x[a.charAt(e + 2)] & 3) {
        if (q(), k = z(D, g, a)) {
          a = a.substring(k);
        } else {
          g.aa(a);
          return;
        }
      } else if ("<" === a.charAt(e) && x[a.charAt(e + 1)] & 3) {
        if (q(), k = S(D, k, g, a)) {
          a = a.substring(k);
        } else {
          g.aa(a);
          return;
        }
      } else {
        c = a.indexOf("<", e), -1 === c ? (g.ba(r(a)), a = "") : e < c ? e = c : ++e;
      }
      k = a.length - e;
      if (k === P) {
        g.aa(a);
        return;
      }
      P = k;
    }
    q();
    H(D, g, "", !0);
  }
  var x = {a:2, b:2, c:2, d:2, e:2, f:2, g:2, h:2, i:2, j:2, k:2, l:2, m:2, n:2, o:2, p:2, q:2, r:2, s:2, t:2, u:2, v:2, w:2, x:2, y:2, z:2, A:1, B:1, C:1, D:1, E:1, F:1, G:1, H:1, I:1, J:1, K:1, L:1, M:1, N:1, O:1, P:1, Q:1, R:1, S:1, T:1, U:1, V:1, W:1, X:1, Y:1, Z:1, "\b":4, "\f":4, "\n":4, "\r":4, "\t":4, " ":4}, T = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, L = {xml:!0, svg:!0, 
  math:!0}, K = {AREA:!0, BASE:!0, BASEFONT:!0, BR:!0, BGSOUND:!0, COL:!0, COMMAND:!0, FRAME:!0, HR:!0, IMG:!0, INPUT:!0, ISINDEX:!0, KEYGEN:!0, LINK:!0, META:!0, PARAM:!0, SOURCE:!0, TRACK:!0, EMBED:!0, WBR:!0, area:!0, base:!0, basefont:!0, br:!0, bgsound:!0, col:!0, command:!0, frame:!0, hr:!0, img:!0, input:!0, isindex:!0, keygen:!0, link:!0, meta:!0, param:!0, source:!0, track:!0, embed:!0, wbr:!0}, U = {SCRIPT:!0, STYLE:!0, TEXTAREA:!0, TITLE:!0, PLAINTEXT:!0, XMP:!0, script:!0, style:!0, textarea:!0, 
  title:!0, plaintext:!0, xmp:!0}, l = {CAPTION:{ARTICLE:!0, SECTION:!0, NAV:!0, ASIDE:!0, H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, HEADER:!0, FOOTER:!0, ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, 
  EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, DD:{ARTICLE:!0, SECTION:!0, NAV:!0, ASIDE:!0, H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, HEADER:!0, FOOTER:!0, ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, 
  SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, TABLE:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, 
  TEMPLATE:!0, CANVAS:!0}, DT:{ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, TABLE:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, 
  SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, P:{A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, 
  svg:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, HTML:{HEAD:!0, BODY:!0}, HEAD:{TITLE:!0, BASE:!0, BGSOUND:!0, LINK:!0, META:!0, STYLE:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLETE:!0}, COLGROUP:{COL:!0}, OPTGROUP:{OPTION:!0}, OPTION:{}, TBODY:{TR:!0}, TR:{TH:!0, TD:!0}, RBC:{RB:!0, RP:!0, RT:!0}}, t;
  l.LI = l.TD = l.DD;
  l.TH = l.DT;
  l.RB = l.RP = l.RT = l.P;
  l.TFOOT = l.THEAD = l.TBODY;
  l.RTC = l.RBC;
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
  }, ga:function() {
  }, fa:function() {
  }, ia:function() {
  }};
  Q.onload = function() {
    var a = G.all("input"), q = G.all("output");
    G.all("form").onsubmit = bz;
    function bz(r) {
      r && r.preventDefault();
      "undefined" != typeof event && (event.returnValue = !1);
      R(a.value);
      q.value = t.$;
      return !1;
    }
    bz = !1;
  };
})(this, document, Date);

