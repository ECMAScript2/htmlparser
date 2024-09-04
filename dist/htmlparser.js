/* es2-html-parser@0.0.1
(c) 2024-2024 itozyun <itozyun@gmail.com> (https://outcloud.blogspot.com/)(undefined), MIT. */
(function(O, Y) {
  function P(a) {
    function x(h, k, r) {
      for (var d = 0, y = r.length, m = 2, u, b, E; m < y && 3 !== d;) {
        b = r.charAt(m);
        switch(d) {
          case 0:
            n[b] & 3 && (d = 1, E = m);
            break;
          case 1:
            n[b] & 4 ? d = 2 : ">" === b && (d = 3);
            1 !== d && (u = r.substring(E, m));
            break;
          case 2:
            ">" === b && (d = 3);
        }
        ++m;
      }
      return 3 === d ? (v(h, k, t ? u : u.toUpperCase()), m) : 0;
    }
    function v(h, k, r) {
      var d = 0, y = h.length;
      if (r) {
        for (d = y; 0 <= d && h[--d] !== r;) {
        }
      }
      if (0 <= d) {
        for (; d < y;) {
          k.l(h[--y]), t && I[h[y]] && (t = !!k.j);
        }
        h.length = d;
      }
    }
    function F(h, k, r, d, y) {
      function m(J, Q) {
        H[++K] = J;
        H[++K] = R[J.toLowerCase()] ? !0 : Q || "";
      }
      function u() {
        (C = "/>" === d.substr(f, 2)) && ++f;
        return C;
      }
      for (var b = 0, E = d.length, f = 1, H = [], K = -1, C = !1, A, e, l, z, L, G; f < E && 9 > b;) {
        e = d.charAt(f);
        switch(b) {
          case 0:
            n[e] & 3 && (b = 1, l = f);
            break;
          case 1:
            if (n[e] & 4) {
              b = 2, A = d.substring(l, f);
            } else if (">" === e || u()) {
              b = 9, A = d.substring(l, f);
            }
            break;
          case 2:
            if (":" === e) {
              b = 3, l = f;
            } else if (n[e] & 3) {
              b = 4, l = f;
            } else if (">" === e || u()) {
              b = 9;
            }
            break;
          case 3:
            b = n[e] & 3 ? 4 : 9;
            break;
          case 4:
            if ("=" === e) {
              b = 6, z = d.substring(l, f);
            } else if (n[e] & 4) {
              b = 5, z = d.substring(l, f);
            } else if (">" === e || u()) {
              b = 9, m(d.substring(l, f));
            }
            break;
          case 5:
            if (":" === e) {
              b = 3, m(z), l = f;
            } else if (n[e] & 3) {
              b = 4, m(z), l = f;
            } else if ("=" === e) {
              b = 6;
            } else if (">" === e || u()) {
              b = 9, m(z);
            }
            break;
          case 6:
            '"' === e || "'" === e ? (b = 7, L = e, l = f + 1) : n[e] & 4 || (b = 8, l = f);
            G = !1;
            break;
          case 7:
            G || e !== L || (b = 2, m(z, d.substring(l, f)));
            G = "\\" === e && !G;
            break;
          case 8:
            n[e] & 4 ? b = 2 : ">" === e ? b = 9 : !S[z] && u() && (b = 9), 8 !== b && m(z, d.substring(l, f));
        }
        ++f;
      }
      if (9 === b) {
        b = A.toUpperCase();
        if (!y && T[b]) {
          for (; k && U[t ? k.toUpperCase() : k];) {
            v(h, r, k), k = h[h.length - 1];
          }
        }
        k && V[b] && (k === A || M[b] && M[b][k.toUpperCase()]) && v(h, r, k);
        t || (t = !!I[A]);
        (C = C || W[b]) || (h[h.length] = t ? A : b);
        r.m(t ? A : b, H, C, f);
        return f;
      }
      return 0;
    }
    for (var g = p, B = [], t = !!g.j, N = a, c, q; a;) {
      (c = q = B[B.length - 1]) && t && (q = c.toUpperCase());
      if (c && X[q]) {
        if (c = a.toUpperCase().indexOf("</" + q), 0 <= c) {
          c && g.i(a.substring(0, c)), a = a.substring(c), (q = x(B, g, a)) ? a = a.substring(q) : (g.i(a), a = "");
        } else if ("PLAINTEXT" === q) {
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
        0 === a.indexOf("\x3c!--") ? (c = a.indexOf("--\x3e"), a = -1 !== c ? a.substring(c + 3) : "") : (0 === a.indexOf("</") ? a = (q = x(B, g, a)) ? a.substring(q) : "&lt;" + a.substr(1) : 0 === a.indexOf("<") && (a = (q = F(B, c, g, a, t)) ? a.substring(q) : "&lt;" + a.substr(1)), a && (c = a.indexOf("<"), -1 === c ? (g.i(a), a = "") : c && (g.i(a.substring(0, c)), a = a.substring(c))));
      }
      if (a === N) {
        g.h(a);
        return;
      }
      N = a;
    }
    v(B, g);
  }
  var I = {xml:!0, svg:!0, math:!0}, W = {AREA:!0, BASE:!0, BASEFONT:!0, BR:!0, BGSOUND:!0, COL:!0, FRAME:!0, HR:!0, IMG:!0, INPUT:!0, ISINDEX:!0, KEYGEN:!0, LINK:!0, META:!0, PARAM:!0, SOURCE:!0, TRACK:!0, EMBED:!0, WBR:!0}, T = {ADDRESS:!0, APPLET:!0, BLOCKQUOTE:!0, BUTTON:!0, CENTER:!0, DD:!0, DEL:!0, DIR:!0, DIV:!0, DL:!0, DT:!0, FIELDSET:!0, FORM:!0, FRAMESET:!0, HR:!0, IFRAME:!0, INS:!0, ISINDEX:!0, LI:!0, MAP:!0, MENU:!0, NOFRAMES:!0, NOSCRIPT:!0, OBJECT:!0, OL:!0, P:!0, PRE:!0, SCRIPT:!0, 
  TABLE:!0, TBODY:!0, TD:!0, TFOOT:!0, TH:!0, THEAD:!0, TR:!0, UL:!0}, U = {ABBR:!0, ACRONYM:!0, APPLET:!0, B:!0, BASEFONT:!0, BDO:!0, BIG:!0, BR:!0, BUTTON:!0, CITE:!0, CODE:!0, DEL:!0, DFN:!0, EM:!0, FONT:!0, I:!0, IFRAME:!0, IMG:!0, INPUT:!0, INS:!0, KBD:!0, LABEL:!0, MAP:!0, OBJECT:!0, Q:!0, S:!0, SAMP:!0, SCRIPT:!0, SELECT:!0, SMALL:!0, SPAN:!0, STRIKE:!0, STRONG:!0, SUB:!0, SUP:!0, TEXTAREA:!0, TT:!0, U:!0, VAR:!0}, V = {COLGROUP:!0, DD:!0, DT:!0, LI:!0, OPTIONS:!0, P:!0, TBODY:!0, TD:!0, TFOOT:!0, 
  TH:!0, THEAD:!0, TR:!0}, M = {HEAD:{BODY:!0}, TH:{TD:!0}, TD:{TH:!0}, DT:{DD:!0}, DD:{DT:!0}, COLGROUP:{CAPTION:!0}, THEAD:{CAPTION:!0, COLGROUP:!0}, TFOOT:{CAPTION:!0, COLGROUP:!0, THEAD:!0, TBODY:!0}, TBODY:{CAPTION:!0, COLGROUP:!0, THEAD:!0, TFOOT:!0}}, X = {SCRIPT:!0, STYLE:!0, PLAINTEXT:!0, XMP:!0, TEXTAREA:!0}, S = {action:!0, archive:!0, background:!0, cite:!0, classid:!0, codebase:!0, data:!0, href:!0, longdesc:!0, profile:!0, src:!0, usemap:!0}, R = {checked:!0, compact:!0, declare:!0, 
  defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, n = {}, D = "abcdefghijklmnopqrstuvwxyz \t\r\n\f\b", w, p;
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
    for (var F, g; a < x.length; a += 2) {
      F = x[a], g = x[a + 1], p.g += " " + F[0] + (!0 !== g ? '="' + g.split('"').join('\\"').split('\\\\"').join('\\"') + '"' : "");
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
  O.onload = function() {
    var a = document.all("input"), x = document.all("output");
    document.all("form").onsubmit = bz;
    function bz(v) {
      v && v.preventDefault();
      "undefined" != typeof event && (event.returnValue = !1);
      P(a.value);
      x.value = p.g;
      return !1;
    }
    bz = !1;
  };
})(this, Date);

