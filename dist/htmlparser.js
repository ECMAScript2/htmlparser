/* es2-html-parser@0.0.1
(c) 2024-2024 itozyun <itozyun@gmail.com> (https://outcloud.blogspot.com/)(undefined), MIT. */
(function(N, X) {
  function O(a) {
    function x(h, l, t) {
      for (var d = 0, m = t.length, q = 2, b, z, e; q < m && 3 !== d;) {
        z = t.charAt(q);
        switch(d) {
          case 0:
            n[z] & 3 && (d = 1, e = q);
            break;
          case 1:
            n[z] & 4 ? d = 2 : ">" === z && (d = 3);
            1 !== d && (b = t.substring(e, q));
            break;
          case 2:
            ">" === z && (d = 3);
        }
        ++q;
      }
      return 3 === d ? (v(h, l, u ? b : b.toUpperCase()), q) : 0;
    }
    function v(h, l, t) {
      var d = 0, m = h.length;
      if (t) {
        for (d = m; 0 <= d && h[--d] !== t;) {
        }
      }
      if (0 <= d) {
        for (; d < m;) {
          l.l(h[--m]), u && H[h[m]] && (u = !!l.j);
        }
        h.length = d;
      }
    }
    function E(h, l, t, d) {
      function m(I, P) {
        G[++J] = I;
        G[++J] = Q[I.toLowerCase()] ? !0 : P || "";
      }
      function q() {
        (C = "/>" === d.substr(e, 2)) && ++e;
        return C;
      }
      for (var b = 0, z = d.length, e = 1, G = [], J = -1, C = !1, A, f, k, y, K, F; e < z && 9 > b;) {
        f = d.charAt(e);
        switch(b) {
          case 0:
            n[f] & 3 && (b = 1, k = e);
            break;
          case 1:
            if (n[f] & 4) {
              b = 2, A = d.substring(k, e);
            } else if (">" === f || q()) {
              b = 9, A = d.substring(k, e);
            }
            break;
          case 2:
            if (":" === f) {
              b = 3, k = e;
            } else if (n[f] & 3) {
              b = 4, k = e;
            } else if (">" === f || q()) {
              b = 9;
            }
            break;
          case 3:
            b = n[f] & 3 ? 4 : 9;
            break;
          case 4:
            if ("=" === f) {
              b = 6, y = d.substring(k, e);
            } else if (n[f] & 4) {
              b = 5, y = d.substring(k, e);
            } else if (">" === f || q()) {
              b = 9, m(d.substring(k, e));
            }
            break;
          case 5:
            if (":" === f) {
              b = 3, m(y), k = e;
            } else if (n[f] & 3) {
              b = 4, m(y), k = e;
            } else if ("=" === f) {
              b = 6;
            } else if (">" === f || q()) {
              b = 9, m(y);
            }
            break;
          case 6:
            '"' === f || "'" === f ? (b = 7, K = f, k = e + 1) : n[f] & 4 || (b = 8, k = e);
            F = !1;
            break;
          case 7:
            F || f !== K || (b = 2, m(y, d.substring(k, e)));
            F = "\\" === f && !F;
            break;
          case 8:
            n[f] & 4 ? b = 2 : ">" === f ? b = 9 : !R[y] && q() && (b = 9), 8 !== b && m(y, d.substring(k, e));
        }
        ++e;
      }
      if (9 === b) {
        b = A.toUpperCase();
        u || (u = !!H[A]);
        if (!u) {
          if (S[b]) {
            for (; l && T[l];) {
              v(h, t, l), l = h[h.length - 1];
            }
          }
          l && U[b] && (l === b || L[b] && L[b][l]) && v(h, t, l);
        }
        (C = C || V[b]) || (h[h.length] = u ? A : b);
        t.m(u ? A : b, G, C, e);
        return e;
      }
      return 0;
    }
    for (var g = p, B = [], u = !!g.j, M = a, c, r; a;) {
      (c = r = B[B.length - 1]) && u && (r = c.toUpperCase());
      if (c && W[r]) {
        if (c = a.toUpperCase().indexOf("</" + r), 0 <= c) {
          c && g.i(a.substring(0, c)), a = a.substring(c), (r = x(B, g, a)) ? a = a.substring(r) : (g.i(a), a = "");
        } else if ("PLAINTEXT" === r) {
          g.i(a), a = "";
        } else {
          g.h(a);
          return;
        }
      } else if (0 === a.indexOf("<!DOCTYPE ")) {
        if (c = a.indexOf(">"), -1 !== c) {
          g.u(a.substring(10, c)), a = a.substring(c + 1);
        } else {
          g.h(a);
          return;
        }
      } else if (0 === a.indexOf("<?")) {
        if (c = a.indexOf("?>"), -1 !== c) {
          a = a.substring(c + 2);
        } else {
          g.h(a);
          return;
        }
      } else if (0 === a.indexOf("<![CDATA[")) {
        if (c = a.indexOf("]]\x3e"), -1 !== c) {
          a = a.substring(c + 3);
        } else {
          g.h(a);
          return;
        }
      } else {
        0 === a.indexOf("\x3c!--") ? (c = a.indexOf("--\x3e"), a = -1 !== c ? a.substring(c + 3) : "") : (0 === a.indexOf("</") ? a = (r = x(B, g, a)) ? a.substring(r) : "&lt;" + a.substr(1) : 0 === a.indexOf("<") && (a = (r = E(B, c, g, a, u)) ? a.substring(r) : "&lt;" + a.substr(1)), a && (c = a.indexOf("<"), -1 === c ? (g.i(a), a = "") : c && (g.i(a.substring(0, c)), a = a.substring(c))));
      }
      if (a === M) {
        g.h(a);
        return;
      }
      M = a;
    }
    v(B, g);
  }
  var H = {xml:!0, svg:!0, math:!0}, V = {AREA:!0, BASE:!0, BASEFONT:!0, BR:!0, BGSOUND:!0, COL:!0, FRAME:!0, HR:!0, IMG:!0, INPUT:!0, ISINDEX:!0, KEYGEN:!0, LINK:!0, META:!0, PARAM:!0, SOURCE:!0, TRACK:!0, EMBED:!0, WBR:!0}, S = {ADDRESS:!0, APPLET:!0, BLOCKQUOTE:!0, BUTTON:!0, CENTER:!0, DD:!0, DEL:!0, DIR:!0, DIV:!0, DL:!0, DT:!0, FIELDSET:!0, FORM:!0, FRAMESET:!0, HR:!0, IFRAME:!0, INS:!0, ISINDEX:!0, LI:!0, MAP:!0, MARQUEE:!0, MENU:!0, NOFRAMES:!0, NOSCRIPT:!0, OBJECT:!0, OL:!0, P:!0, PRE:!0, 
  SCRIPT:!0, TABLE:!0, TBODY:!0, TD:!0, TFOOT:!0, TH:!0, THEAD:!0, TR:!0, UL:!0}, T = {ABBR:!0, ACRONYM:!0, APPLET:!0, B:!0, BASEFONT:!0, BDO:!0, BIG:!0, BR:!0, BUTTON:!0, CITE:!0, CODE:!0, DEL:!0, DFN:!0, EM:!0, FONT:!0, I:!0, IFRAME:!0, IMG:!0, INPUT:!0, INS:!0, KBD:!0, LABEL:!0, MAP:!0, NOBR:!0, OBJECT:!0, Q:!0, RB:!0, RP:!0, RT:!0, RTC:!0, RUBY:!0, S:!0, SAMP:!0, SCRIPT:!0, SELECT:!0, SMALL:!0, SPAN:!0, STRIKE:!0, STRONG:!0, SUB:!0, SUP:!0, TEXTAREA:!0, TT:!0, U:!0, VAR:!0, WBR:!0}, U = {CAPTION:!0, 
  COLGROUP:!0, DD:!0, DT:!0, LI:!0, OPTION:!0, OPTGROUP:!0, P:!0, TBODY:!0, TD:!0, TFOOT:!0, TH:!0, THEAD:!0, TR:!0, RP:!0, RT:!0}, L = {HEAD:{BODY:!0}, TH:{TD:!0}, TD:{TH:!0}, DT:{DD:!0}, DD:{DT:!0}, COLGROUP:{CAPTION:!0}, THEAD:{CAPTION:!0, COLGROUP:!0}, TFOOT:{CAPTION:!0, COLGROUP:!0, THEAD:!0, TBODY:!0}, TBODY:{CAPTION:!0, COLGROUP:!0, THEAD:!0, TFOOT:!0}, RB:{RP:!0, RT:!0}, RP:{RB:!0, RT:!0}, RT:{RB:!0, RP:!0}}, W = {SCRIPT:!0, STYLE:!0, PLAINTEXT:!0, XMP:!0, TEXTAREA:!0}, R = {action:!0, archive:!0, 
  background:!0, cite:!0, classid:!0, codebase:!0, data:!0, href:!0, longdesc:!0, profile:!0, src:!0, usemap:!0}, Q = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, n = {}, D = "abcdefghijklmnopqrstuvwxyz \t\r\n\f\b", w, p;
  for (w = 26; w;) {
    n[D.charAt(--w)] = 2;
  }
  w = 26;
  for (D = D.toUpperCase(); w;) {
    n[D.charAt(--w)] = 1;
  }
  for (w = 32; 26 < w;) {
    n[D.charAt(--w)] = 4;
  }
  p = {g:"", h:function(a) {
    p.g = a;
  }, m:function(a, x, v) {
    p.g += "<" + a;
    a = 0;
    for (var E, g; a < x.length; a += 2) {
      E = x[a], g = x[a + 1], p.g += " " + E[0] + (!0 !== g ? '="' + g.split('"').join('\\"').split('\\\\"').join('\\"') + '"' : "");
    }
    p.g += (v ? "/" : "") + ">";
  }, l:function(a) {
    p.g += "</" + a + ">";
  }, i:function(a) {
    a.split(" ").join("") && (a = " " === a.charAt(0) ? a.substr(1) : a, a = a.length && " " === a.charAt(a.length - 1) ? a.substr(0, a.length - 1) : a, p.g += a);
  }, s:function() {
  }, o:function() {
  }, v:function() {
  }};
  N.onload = function() {
    var a = document.all("input"), x = document.all("output");
    document.all("form").onsubmit = bz;
    function bz(v) {
      v && v.preventDefault();
      "undefined" != typeof event && (event.returnValue = !1);
      O(a.value);
      x.value = p.g;
      return !1;
    }
    bz = !1;
  };
})(this, Date);

