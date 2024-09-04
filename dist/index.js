/* es2-html-parser@0.0.1
(c) 2024-2024 itozyun <itozyun@gmail.com> (https://outcloud.blogspot.com/)(undefined), MIT. */
function h(a) {
  function t(k, m, v) {
    for (var d = 0, n = v.length, q = 2, b, z, e; q < n && 3 !== d;) {
      z = v.charAt(q);
      switch(d) {
        case 0:
          p[z] & 3 && (d = 1, e = q);
          break;
        case 1:
          p[z] & 4 ? d = 2 : ">" === z && (d = 3);
          1 !== d && (b = v.substring(e, q));
          break;
        case 2:
          ">" === z && (d = 3);
      }
      ++q;
    }
    return 3 === d ? (B(k, m, r ? b : b.toUpperCase()), q) : 0;
  }
  function B(k, m, v) {
    var d = 0, n = k.length;
    if (v) {
      for (d = n; 0 <= d && k[--d] !== v;) {
      }
    }
    if (0 <= d) {
      for (; d < n;) {
        m.D(k[--n]), r && w[k[n]] && (r = !!m.v);
      }
      k.length = d;
    }
  }
  function A(k, m, v, d) {
    function n(I, O) {
      G[++J] = I;
      G[++J] = E[I.toLowerCase()] ? !0 : O || "";
    }
    function q() {
      (D = "/>" === d.substr(e, 2)) && ++e;
      return D;
    }
    for (var b = 0, z = d.length, e = 1, G = [], J = -1, D = !1, C, f, l, x, K, F; e < z && 9 > b;) {
      f = d.charAt(e);
      switch(b) {
        case 0:
          p[f] & 3 && (b = 1, l = e);
          break;
        case 1:
          if (p[f] & 4) {
            b = 2, C = d.substring(l, e);
          } else if (">" === f || q()) {
            b = 9, C = d.substring(l, e);
          }
          break;
        case 2:
          if (":" === f) {
            b = 3, l = e;
          } else if (p[f] & 3) {
            b = 4, l = e;
          } else if (">" === f || q()) {
            b = 9;
          }
          break;
        case 3:
          b = p[f] & 3 ? 4 : 9;
          break;
        case 4:
          if ("=" === f) {
            b = 6, x = d.substring(l, e);
          } else if (p[f] & 4) {
            b = 5, x = d.substring(l, e);
          } else if (">" === f || q()) {
            b = 9, n(d.substring(l, e));
          }
          break;
        case 5:
          if (":" === f) {
            b = 3, n(x), l = e;
          } else if (p[f] & 3) {
            b = 4, n(x), l = e;
          } else if ("=" === f) {
            b = 6;
          } else if (">" === f || q()) {
            b = 9, n(x);
          }
          break;
        case 6:
          '"' === f || "'" === f ? (b = 7, K = f, l = e + 1) : p[f] & 4 || (b = 8, l = e);
          F = !1;
          break;
        case 7:
          F || f !== K || (b = 2, n(x, d.substring(l, e)));
          F = "\\" === f && !F;
          break;
        case 8:
          p[f] & 4 ? b = 2 : ">" === f ? b = 9 : !H[x] && q() && (b = 9), 8 !== b && n(x, d.substring(l, e));
      }
      ++e;
    }
    if (9 === b) {
      b = C.toUpperCase();
      r || (r = !!w[C]);
      if (!r) {
        if (L[b]) {
          for (; m && N[m];) {
            B(k, v, m), m = k[k.length - 1];
          }
        }
        m && P[b] && (m === b || Q[b] && Q[b][m]) && B(k, v, m);
      }
      (D = D || R[b]) || (k[k.length] = r ? C : b);
      v.G(r ? C : b, G, D, e);
      return e;
    }
    return 0;
  }
  for (var g = S, y = [], r = !!g.v, M = a, c, u; a;) {
    (c = u = y[y.length - 1]) && r && (u = c.toUpperCase());
    if (c && T[u]) {
      if (c = a.toUpperCase().indexOf("</" + u), 0 <= c) {
        c && g.j(a.substring(0, c)), a = a.substring(c), (u = t(y, g, a)) ? a = a.substring(u) : (g.j(a), a = "");
      } else if ("PLAINTEXT" === u) {
        g.j(a), a = "";
      } else {
        g.i(a);
        return;
      }
    } else if (0 === a.indexOf("<!DOCTYPE ")) {
      if (c = a.indexOf(">"), -1 !== c) {
        g.C(a.substring(10, c)), a = a.substring(c + 1);
      } else {
        g.i(a);
        return;
      }
    } else if (0 === a.indexOf("<?")) {
      if (c = a.indexOf("?>"), -1 !== c) {
        g.F(a.substring(2, c)), a = a.substring(c + 2);
      } else {
        g.i(a);
        return;
      }
    } else if (0 === a.indexOf("<![CDATA[")) {
      if (c = a.indexOf("]]\x3e"), -1 !== c) {
        g.A(a.substring(9, c)), a = a.substring(c + 3);
      } else {
        g.i(a);
        return;
      }
    } else {
      0 === a.indexOf("\x3c!--") ? (c = a.indexOf("--\x3e"), -1 !== c ? (g.o(a.substring(4, c)), a = a.substring(c + 3)) : (g.o(a.substring(4)), a = "")) : (0 === a.indexOf("</") ? a = (u = t(y, g, a)) ? a.substring(u) : "&lt;" + a.substr(1) : 0 === a.indexOf("<") && (a = (u = A(y, c, g, a, r)) ? a.substring(u) : "&lt;" + a.substr(1)), a && (c = a.indexOf("<"), -1 === c ? (g.j(a), a = "") : c && (g.j(a.substring(0, c)), a = a.substring(c))));
    }
    if (a === M) {
      g.i(a);
      return;
    }
    M = a;
  }
  B(y, g);
}
var w = {xml:!0, svg:!0, math:!0}, R = {AREA:!0, BASE:!0, BASEFONT:!0, BR:!0, BGSOUND:!0, COL:!0, FRAME:!0, HR:!0, IMG:!0, INPUT:!0, ISINDEX:!0, KEYGEN:!0, LINK:!0, META:!0, PARAM:!0, SOURCE:!0, TRACK:!0, EMBED:!0, WBR:!0}, L = {ADDRESS:!0, APPLET:!0, BLOCKQUOTE:!0, BUTTON:!0, CENTER:!0, DD:!0, DEL:!0, DIR:!0, DIV:!0, DL:!0, DT:!0, FIELDSET:!0, FORM:!0, FRAMESET:!0, HR:!0, IFRAME:!0, INS:!0, ISINDEX:!0, LI:!0, MAP:!0, MARQUEE:!0, MENU:!0, NOFRAMES:!0, NOSCRIPT:!0, OBJECT:!0, OL:!0, P:!0, PRE:!0, 
SCRIPT:!0, TABLE:!0, TBODY:!0, TD:!0, TFOOT:!0, TH:!0, THEAD:!0, TR:!0, UL:!0}, N = {ABBR:!0, ACRONYM:!0, APPLET:!0, B:!0, BASEFONT:!0, BDO:!0, BIG:!0, BR:!0, BUTTON:!0, CITE:!0, CODE:!0, DEL:!0, DFN:!0, EM:!0, FONT:!0, I:!0, IFRAME:!0, IMG:!0, INPUT:!0, INS:!0, KBD:!0, LABEL:!0, MAP:!0, NOBR:!0, OBJECT:!0, Q:!0, RB:!0, RP:!0, RT:!0, RTC:!0, RUBY:!0, S:!0, SAMP:!0, SCRIPT:!0, SELECT:!0, SMALL:!0, SPAN:!0, STRIKE:!0, STRONG:!0, SUB:!0, SUP:!0, TEXTAREA:!0, TT:!0, U:!0, VAR:!0, WBR:!0}, P = {CAPTION:!0, 
COLGROUP:!0, DD:!0, DT:!0, LI:!0, OPTION:!0, OPTGROUP:!0, P:!0, TBODY:!0, TD:!0, TFOOT:!0, TH:!0, THEAD:!0, TR:!0, RP:!0, RT:!0}, Q = {HEAD:{BODY:!0}, TH:{TD:!0}, TD:{TH:!0}, DT:{DD:!0}, DD:{DT:!0}, COLGROUP:{CAPTION:!0}, THEAD:{CAPTION:!0, COLGROUP:!0}, TFOOT:{CAPTION:!0, COLGROUP:!0, THEAD:!0, TBODY:!0}, TBODY:{CAPTION:!0, COLGROUP:!0, THEAD:!0, TFOOT:!0}, RB:{RP:!0, RT:!0}, RP:{RB:!0, RT:!0}, RT:{RB:!0, RP:!0}}, T = {SCRIPT:!0, STYLE:!0, PLAINTEXT:!0, XMP:!0, TEXTAREA:!0}, H = {action:!0, archive:!0, 
background:!0, cite:!0, classid:!0, codebase:!0, data:!0, href:!0, longdesc:!0, profile:!0, src:!0, usemap:!0}, E = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, p = {}, U = "abcdefghijklmnopqrstuvwxyz \t\r\n\f\b", V;
for (V = 26; V;) {
  p[U.charAt(--V)] = 2;
}
V = 26;
for (U = U.toUpperCase(); V;) {
  p[U.charAt(--V)] = 1;
}
for (V = 32; 26 < V;) {
  p[U.charAt(--V)] = 4;
}
;var S = {l:null, m:null, h:null, u:function() {
  S.l = S.h = [];
  S.m = [];
}, s:function() {
  var a = S.l;
  "number" !== typeof a[0] && a.unshift(11);
  return a;
}, g:function() {
  return S.h;
}, i:function(a) {
  throw a;
}, C:function(a) {
  var t = S.l;
  t[0] = 9;
  t[1] = "<!DOCTYPE " + a + ">";
}, G:function(a, t, B) {
  a = [a];
  var A;
  if (t) {
    var g = {};
    for (A = 0; A < t.length; A += 2) {
      var y = t[A];
      var r = t[A + 1];
      g[y] = r;
    }
    t.length && (a[1] = g);
  }
  S.g().push(a);
  B || (S.m.push(S.h), S.h = a);
}, D:function(a) {
  a === S.g()[0] && (S.h = S.m.pop());
}, j:function(a) {
  S.g().push(a);
}, o:function(a) {
  S.g().push([8, a]);
}, A:function(a) {
  S.g().push([4, a]);
}, F:function(a) {
  S.g().push([7, a]);
}};
module.exports = function(a) {
  S.u();
  h(a);
  return S.s();
};

