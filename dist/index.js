/* es2-html-parser@0.0.1
(c) 2024-2024 itozyun <itozyun@gmail.com> (https://outcloud.blogspot.com/)(undefined), MIT. */
function h(a) {
  function r(k, l, u) {
    for (var d = 0, x = u.length, n = 2, v, b, F; n < x && 3 !== d;) {
      b = u.charAt(n);
      switch(d) {
        case 0:
          p[b] & 3 && (d = 1, F = n);
          break;
        case 1:
          p[b] & 4 ? d = 2 : ">" === b && (d = 3);
          1 !== d && (v = u.substring(F, n));
          break;
        case 2:
          ">" === b && (d = 3);
      }
      ++n;
    }
    return 3 === d ? (C(k, l, q ? v : v.toUpperCase()), n) : 0;
  }
  function C(k, l, u) {
    var d = 0, x = k.length;
    if (u) {
      for (d = x; 0 <= d && k[--d] !== u;) {
      }
    }
    if (0 <= d) {
      for (; d < x;) {
        l.D(k[--x]), q && w[k[x]] && (q = !!l.v);
      }
      k.length = d;
    }
  }
  function A(k, l, u, d, x) {
    function n(J, P) {
      H[++K] = J;
      H[++K] = E[J.toLowerCase()] ? !0 : P || "";
    }
    function v() {
      (D = "/>" === d.substr(g, 2)) && ++g;
      return D;
    }
    for (var b = 0, F = d.length, g = 1, H = [], K = -1, D = !1, B, e, m, y, L, G; g < F && 9 > b;) {
      e = d.charAt(g);
      switch(b) {
        case 0:
          p[e] & 3 && (b = 1, m = g);
          break;
        case 1:
          if (p[e] & 4) {
            b = 2, B = d.substring(m, g);
          } else if (">" === e || v()) {
            b = 9, B = d.substring(m, g);
          }
          break;
        case 2:
          if (":" === e) {
            b = 3, m = g;
          } else if (p[e] & 3) {
            b = 4, m = g;
          } else if (">" === e || v()) {
            b = 9;
          }
          break;
        case 3:
          b = p[e] & 3 ? 4 : 9;
          break;
        case 4:
          if ("=" === e) {
            b = 6, y = d.substring(m, g);
          } else if (p[e] & 4) {
            b = 5, y = d.substring(m, g);
          } else if (">" === e || v()) {
            b = 9, n(d.substring(m, g));
          }
          break;
        case 5:
          if (":" === e) {
            b = 3, n(y), m = g;
          } else if (p[e] & 3) {
            b = 4, n(y), m = g;
          } else if ("=" === e) {
            b = 6;
          } else if (">" === e || v()) {
            b = 9, n(y);
          }
          break;
        case 6:
          '"' === e || "'" === e ? (b = 7, L = e, m = g + 1) : p[e] & 4 || (b = 8, m = g);
          G = !1;
          break;
        case 7:
          G || e !== L || (b = 2, n(y, d.substring(m, g)));
          G = "\\" === e && !G;
          break;
        case 8:
          p[e] & 4 ? b = 2 : ">" === e ? b = 9 : !I[y] && v() && (b = 9), 8 !== b && n(y, d.substring(m, g));
      }
      ++g;
    }
    if (9 === b) {
      b = B.toUpperCase();
      if (!x && M[b]) {
        for (; l && O[q ? l.toUpperCase() : l];) {
          C(k, u, l), l = k[k.length - 1];
        }
      }
      l && Q[b] && (l === B || R[b] && R[b][l.toUpperCase()]) && C(k, u, l);
      q || (q = !!w[B]);
      (D = D || S[b]) || (k[k.length] = q ? B : b);
      u.G(q ? B : b, H, D, g);
      return g;
    }
    return 0;
  }
  for (var f = T, z = [], q = !!f.v, N = a, c, t; a;) {
    (c = t = z[z.length - 1]) && q && (t = c.toUpperCase());
    if (c && U[t]) {
      if (c = a.toUpperCase().indexOf("</" + t), 0 <= c) {
        c && f.j(a.substring(0, c)), a = a.substring(c), (t = r(z, f, a)) ? a = a.substring(t) : (f.j(a), a = "");
      } else if ("PLAINTEXT" === t) {
        f.j(a), a = "";
      } else {
        f.i(a);
        return;
      }
    } else if (0 === a.indexOf("<!DOCTYPE ")) {
      if (c = a.indexOf(">"), -1 !== c) {
        f.C(a.substring(10, c)), a = a.substring(c + 1);
      } else {
        f.i(a);
        return;
      }
    } else if (0 === a.indexOf("<?")) {
      if (c = a.indexOf("?>"), -1 !== c) {
        f.F(a.substring(2, c)), a = a.substring(c + 2);
      } else {
        f.i(a);
        return;
      }
    } else if (0 === a.indexOf("<![CDATA[")) {
      if (c = a.indexOf("]]\x3e"), -1 !== c) {
        f.A(a.substring(9, c)), a = a.substring(c + 3);
      } else {
        f.i(a);
        return;
      }
    } else {
      0 === a.indexOf("\x3c!--") ? (c = a.indexOf("--\x3e"), -1 !== c ? (f.o(a.substring(4, c)), a = a.substring(c + 3)) : (f.o(a.substring(4)), a = "")) : (0 === a.indexOf("</") ? a = (t = r(z, f, a)) ? a.substring(t) : "&lt;" + a.substr(1) : 0 === a.indexOf("<") && (a = (t = A(z, c, f, a, q)) ? a.substring(t) : "&lt;" + a.substr(1)), a && (c = a.indexOf("<"), -1 === c ? (f.j(a), a = "") : c && (f.j(a.substring(0, c)), a = a.substring(c))));
    }
    if (a === N) {
      f.i(a);
      return;
    }
    N = a;
  }
  C(z, f);
}
var w = {xml:!0, svg:!0, math:!0}, S = {AREA:!0, BASE:!0, BASEFONT:!0, BR:!0, BGSOUND:!0, COL:!0, FRAME:!0, HR:!0, IMG:!0, INPUT:!0, ISINDEX:!0, KEYGEN:!0, LINK:!0, META:!0, PARAM:!0, SOURCE:!0, TRACK:!0, EMBED:!0, WBR:!0}, M = {ADDRESS:!0, APPLET:!0, BLOCKQUOTE:!0, BUTTON:!0, CENTER:!0, DD:!0, DEL:!0, DIR:!0, DIV:!0, DL:!0, DT:!0, FIELDSET:!0, FORM:!0, FRAMESET:!0, HR:!0, IFRAME:!0, INS:!0, ISINDEX:!0, LI:!0, MAP:!0, MENU:!0, NOFRAMES:!0, NOSCRIPT:!0, OBJECT:!0, OL:!0, P:!0, PRE:!0, SCRIPT:!0, TABLE:!0, 
TBODY:!0, TD:!0, TFOOT:!0, TH:!0, THEAD:!0, TR:!0, UL:!0}, O = {ABBR:!0, ACRONYM:!0, APPLET:!0, B:!0, BASEFONT:!0, BDO:!0, BIG:!0, BR:!0, BUTTON:!0, CITE:!0, CODE:!0, DEL:!0, DFN:!0, EM:!0, FONT:!0, I:!0, IFRAME:!0, IMG:!0, INPUT:!0, INS:!0, KBD:!0, LABEL:!0, MAP:!0, OBJECT:!0, Q:!0, S:!0, SAMP:!0, SCRIPT:!0, SELECT:!0, SMALL:!0, SPAN:!0, STRIKE:!0, STRONG:!0, SUB:!0, SUP:!0, TEXTAREA:!0, TT:!0, U:!0, VAR:!0}, Q = {COLGROUP:!0, DD:!0, DT:!0, LI:!0, OPTIONS:!0, P:!0, TBODY:!0, TD:!0, TFOOT:!0, TH:!0, 
THEAD:!0, TR:!0}, R = {HEAD:{BODY:!0}, TH:{TD:!0}, TD:{TH:!0}, DT:{DD:!0}, DD:{DT:!0}, COLGROUP:{CAPTION:!0}, THEAD:{CAPTION:!0, COLGROUP:!0}, TFOOT:{CAPTION:!0, COLGROUP:!0, THEAD:!0, TBODY:!0}, TBODY:{CAPTION:!0, COLGROUP:!0, THEAD:!0, TFOOT:!0}}, U = {SCRIPT:!0, STYLE:!0, PLAINTEXT:!0, XMP:!0, TEXTAREA:!0}, I = {action:!0, archive:!0, background:!0, cite:!0, classid:!0, codebase:!0, data:!0, href:!0, longdesc:!0, profile:!0, src:!0, usemap:!0}, E = {checked:!0, compact:!0, declare:!0, defer:!0, 
disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, p = {}, V = "abcdefghijklmnopqrstuvwxyz \t\r\n\f\b", W;
for (W = 26; W;) {
  p[V.charAt(--W)] = 2;
}
W = 26;
for (V = V.toUpperCase(); W;) {
  p[V.charAt(--W)] = 1;
}
for (W = 32; 26 < W;) {
  p[V.charAt(--W)] = 4;
}
;var T = {l:null, m:null, h:null, u:function() {
  T.l = T.h = [];
  T.m = [];
}, s:function() {
  var a = T.l;
  "number" !== typeof a[0] && a.unshift(11);
  return a;
}, g:function() {
  return T.h;
}, i:function(a) {
  throw a;
}, C:function(a) {
  var r = T.l;
  r[0] = 9;
  r[1] = "<!DOCTYPE " + a + ">";
}, G:function(a, r, C) {
  a = [a];
  var A;
  if (r) {
    var f = {};
    for (A = 0; A < r.length; A += 2) {
      var z = r[A];
      var q = r[A + 1];
      f[z] = q;
    }
    r.length && (a[1] = f);
  }
  T.g().push(a);
  C || (T.m.push(T.h), T.h = a);
}, D:function(a) {
  a === T.g()[0] && (T.h = T.m.pop());
}, j:function(a) {
  T.g().push(a);
}, o:function(a) {
  T.g().push([8, a]);
}, A:function(a) {
  T.g().push([4, a]);
}, F:function(a) {
  T.g().push([7, a]);
}};
module.exports = function(a) {
  T.u();
  h(a);
  return T.s();
};

