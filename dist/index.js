/* es2-html-parser@0.0.1
(c) 2024-2024 itozyun <itozyun@gmail.com> (https://outcloud.blogspot.com/)(undefined), MIT. */
function h(a) {
  var d = n, l = "";
  function u() {
    l && d.j(l);
    l = "";
  }
  function D(m, q, v) {
    for (var g = 0, p = v.length, k = 2, c, z, e; k < p && 3 !== g;) {
      z = v.charAt(k);
      switch(g) {
        case 0:
          r[z] & 3 && (g = 1, e = k);
          break;
        case 1:
          r[z] & 4 ? g = 2 : ">" === z && (g = 3);
          1 !== g && (c = v.substring(e, k));
          break;
        case 2:
          ">" === z && (g = 3);
      }
      ++k;
    }
    return 3 === g ? (A(m, q, w ? c : c.toUpperCase(), !1), k) : 0;
  }
  function A(m, q, v, g) {
    var p = 0, k = m.length;
    if (v) {
      for (p = k; 0 <= p && m[--p] !== v;) {
      }
    }
    if (0 <= p) {
      for (; p < k;) {
        q.D(m[--k], g), w && x[m[k]] && (w = !!q.u);
      }
      m.length = p;
    }
  }
  function I(m, q, v, g) {
    function p(L, Q) {
      J[++M] = L;
      J[++M] = G[L.toLowerCase()] ? !0 : Q || "";
    }
    function k() {
      (E = "/>" === g.substr(e, 2)) && ++e;
      return E;
    }
    for (var c = 0, z = g.length, e = 1, J = [], M = -1, E = !1, B, f, t, y, N, H; e < z && 9 > c;) {
      f = g.charAt(e);
      switch(c) {
        case 0:
          r[f] & 3 && (c = 1, t = e);
          break;
        case 1:
          if (r[f] & 4) {
            c = 2, B = g.substring(t, e);
          } else if (">" === f || k()) {
            c = 9, B = g.substring(t, e);
          }
          break;
        case 2:
          if (":" === f) {
            c = 3, t = e;
          } else if (r[f] & 3) {
            c = 4, t = e;
          } else if (">" === f || k()) {
            c = 9;
          }
          break;
        case 3:
          c = r[f] & 3 ? 4 : 9;
          break;
        case 4:
          if ("=" === f) {
            c = 6, y = g.substring(t, e);
          } else if (r[f] & 4) {
            c = 5, y = g.substring(t, e);
          } else if (">" === f || k()) {
            c = 9, p(g.substring(t, e));
          }
          break;
        case 5:
          if (":" === f) {
            c = 3, p(y), t = e;
          } else if (r[f] & 3) {
            c = 4, p(y), t = e;
          } else if ("=" === f) {
            c = 6;
          } else if (">" === f || k()) {
            c = 9, p(y);
          }
          break;
        case 6:
          '"' === f || "'" === f ? (c = 7, N = f, t = e + 1) : r[f] & 4 || (c = 8, t = e);
          H = !1;
          break;
        case 7:
          H || f !== N || (c = 2, p(y, g.substring(t, e)));
          H = "\\" === f && !H;
          break;
        case 8:
          r[f] & 4 ? c = 2 : ">" === f ? c = 9 : !K[y] && k() && (c = 9), 8 !== c && p(y, g.substring(t, e));
      }
      ++e;
    }
    if (9 === c) {
      c = B.toUpperCase();
      w || (w = !!x[B]);
      if (!w) {
        if (P[c]) {
          for (; q && R[q];) {
            A(m, v, q, !1), q = m[m.length - 1];
          }
        }
        for (; q;) {
          if (S[q] && S[q][c]) {
            A(m, v, q, !1), q = m[m.length - 1];
          } else {
            break;
          }
        }
      }
      (E = E || T[c]) || (m[m.length] = w ? B : c);
      v.G(w ? B : c, J, E, e);
      return e;
    }
    return 0;
  }
  for (var C = [], w = !!d.u, O = a, b, F; a;) {
    (b = F = C[C.length - 1]) && w && (F = b.toUpperCase());
    if (U[F]) {
      if ("PLAINTEXT" === F) {
        d.j(a), a = "";
      } else {
        if (b = a.toUpperCase().indexOf("</" + F), 0 <= b) {
          if (b && d.j(a.substring(0, b)), a = a.substring(b), b = D(C, d, a)) {
            a = a.substring(b);
          } else {
            d.g(l + a);
            return;
          }
        } else {
          d.g(l + a);
          return;
        }
      }
    } else if (0 === a.indexOf("<!DOCTYPE ")) {
      if (b = a.indexOf(">"), -1 !== b) {
        u(), d.C(a.substring(10, b)), a = a.substring(b + 1);
      } else {
        d.g(l + a);
        return;
      }
    } else if (0 === a.indexOf("<?")) {
      if (b = a.indexOf("?>"), -1 !== b) {
        u(), d.F(a.substring(2, b)), a = a.substring(b + 2);
      } else {
        d.g(l + a);
        return;
      }
    } else if (0 === a.indexOf("<![CDATA[")) {
      if (b = a.indexOf("]]\x3e"), -1 !== b) {
        u(), d.v(a.substring(9, b)), a = a.substring(b + 3);
      } else {
        d.g(l + a);
        return;
      }
    } else if (0 === a.indexOf("\x3c!--")) {
      if (b = a.indexOf("--\x3e"), -1 !== b) {
        u(), d.A(a.substring(4, b)), a = a.substring(b + 3);
      } else {
        d.g(l + a);
        return;
      }
    } else if (0 === a.indexOf("</")) {
      if (u(), b = D(C, d, a)) {
        a = a.substring(b);
      } else {
        d.g(a);
        return;
      }
    } else if ("<" === a.charAt(0) && r[a.charAt(1)] & 3) {
      if (u(), b = I(C, b, d, a)) {
        a = a.substring(b);
      } else {
        d.g(a);
        return;
      }
    } else {
      b = a.indexOf("<"), -1 === b ? (d.j(l + a), a = l = "") : b ? (l += a.substring(0, b), a = a.substring(b)) : (l += "<", a = a.substring(1));
    }
    if (a === O) {
      d.g(l + a);
      return;
    }
    O = a;
  }
  u();
  A(C, d, "", !0);
}
var x = {xml:!0, svg:!0, math:!0}, T = {AREA:!0, BASE:!0, BASEFONT:!0, BR:!0, BGSOUND:!0, COL:!0, FRAME:!0, HR:!0, IMG:!0, INPUT:!0, ISINDEX:!0, KEYGEN:!0, LINK:!0, META:!0, PARAM:!0, SOURCE:!0, TRACK:!0, EMBED:!0, WBR:!0}, P = {ADDRESS:!0, APPLET:!0, BLOCKQUOTE:!0, BUTTON:!0, CENTER:!0, DD:!0, DEL:!0, DIR:!0, DIV:!0, DL:!0, DT:!0, FIELDSET:!0, FORM:!0, FRAMESET:!0, HR:!0, IFRAME:!0, INS:!0, ISINDEX:!0, LI:!0, MAP:!0, MARQUEE:!0, MENU:!0, NOFRAMES:!0, NOSCRIPT:!0, OBJECT:!0, OL:!0, P:!0, PRE:!0, 
SCRIPT:!0, TABLE:!0, TBODY:!0, TD:!0, TFOOT:!0, TH:!0, THEAD:!0, TR:!0, UL:!0}, R = {ABBR:!0, ACRONYM:!0, APPLET:!0, B:!0, BASEFONT:!0, BDO:!0, BIG:!0, BR:!0, BUTTON:!0, CAPTION:!0, CITE:!0, CODE:!0, DEL:!0, DFN:!0, EM:!0, FONT:!0, I:!0, IFRAME:!0, IMG:!0, INPUT:!0, INS:!0, KBD:!0, LABEL:!0, MAP:!0, NOBR:!0, OBJECT:!0, Q:!0, RB:!0, RBC:!0, RP:!0, RT:!0, RTC:!0, RUBY:!0, S:!0, SAMP:!0, SCRIPT:!0, SELECT:!0, SMALL:!0, SPAN:!0, STRIKE:!0, STRONG:!0, SUB:!0, SUP:!0, TEXTAREA:!0, TT:!0, U:!0, VAR:!0, 
WBR:!0}, S = {HEAD:{BODY:!0}, LI:{LI:!0}, OPTION:{OPTION:!0}, P:{P:!0}, OPTGROUP:{OPTGROUP:!0}, DT:{DT:!0, DD:!0}, CAPTION:{CAPTION:!0, COLGROUP:!0, THEAD:!0, TBODY:!0, TFOOT:!0, TR:!0}, THEAD:{CAPTION:!0, COLGROUP:!0, THEAD:!0, TBODY:!0, TFOOT:!0}, TR:{THEAD:!0, TBODY:!0, TFOOT:!0, TR:!0}, TH:{THEAD:!0, TBODY:!0, TFOOT:!0, TR:!0, TD:!0, TH:!0}, RB:{RBC:!0, RTC:!0, RB:!0, RP:!0, RT:!0}, RBC:{RBC:!0, RTC:!0}};
S.DD = S.DT;
S.COLGROUP = S.CAPTION;
S.TFOOT = S.TBODY = S.THEAD;
S.TD = S.TH;
S.RP = S.RT = S.RB;
S.RTC = S.RBC;
var U = {SCRIPT:!0, STYLE:!0, PLAINTEXT:!0, XMP:!0, TEXTAREA:!0}, K = {action:!0, archive:!0, background:!0, cite:!0, classid:!0, codebase:!0, data:!0, href:!0, longdesc:!0, profile:!0, src:!0, usemap:!0}, G = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, r = {}, V = "abcdefghijklmnopqrstuvwxyz \t\r\n\f\b", W;
for (W = 26; W;) {
  r[V.charAt(--W)] = 2;
}
W = 26;
for (V = V.toUpperCase(); W;) {
  r[V.charAt(--W)] = 1;
}
for (W = 32; 26 < W;) {
  r[V.charAt(--W)] = 4;
}
;var n = {l:null, m:null, i:null, s:function() {
  n.l = n.i = [];
  n.m = [];
}, o:function() {
  var a = n.l;
  "number" !== typeof a[0] && a.unshift(11);
  return a;
}, h:function() {
  return n.i;
}, g:function(a) {
  throw a;
}, C:function(a) {
  var d = n.l;
  d[0] = 9;
  d[1] = "<!DOCTYPE " + a + ">";
}, G:function(a, d, l) {
  a = [a];
  var u;
  if (d) {
    var D = {};
    for (u = 0; u < d.length; u += 2) {
      var A = d[u];
      var I = d[u + 1];
      D[A] = I;
    }
    d.length && (a[1] = D);
  }
  n.h().push(a);
  l || (n.m.push(n.i), n.i = a);
}, D:function(a) {
  a === n.h()[0] && (n.i = n.m.pop());
}, j:function(a) {
  n.h().push(a);
}, A:function(a) {
  n.h().push([8, a]);
}, v:function(a) {
  n.h().push([4, a]);
}, F:function(a) {
  n.h().push([7, a]);
}};
module.exports = function(a) {
  n.s();
  h(a);
  return n.o();
};

