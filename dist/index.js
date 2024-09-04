/* es2-html-parser@0.0.1
(c) 2024-2024 itozyun <itozyun@gmail.com> (https://outcloud.blogspot.com/)(undefined), MIT. */
function k(a) {
  var d = q, m = "";
  function p() {
    m && d.h(m);
    m = "";
  }
  function D(l, n, t) {
    for (var g = 0, u = t.length, h = 2, b, v, e; h < u && 3 !== g;) {
      v = t.charAt(h);
      switch(g) {
        case 0:
          x[v] & 3 && (g = 1, e = h);
          break;
        case 1:
          x[v] & 4 ? g = 2 : ">" === v && (g = 3);
          1 !== g && (b = t.substring(e, h));
          break;
        case 2:
          ">" === v && (g = 3);
      }
      ++h;
    }
    return 3 === g ? (A(l, n, w ? b : b.toUpperCase(), !1), h) : 0;
  }
  function A(l, n, t, g) {
    function u(v) {
      return g && !(y[v] && y[v][v]);
    }
    var h = 0, b = l.length;
    if (t) {
      for (h = b; 0 <= h && l[--h] !== t;) {
      }
    }
    if (0 <= h) {
      for (; h < b;) {
        n.i(l[--b], u(l[b]), !1), w && G[l[b]] && (w = !!n.l);
      }
      l.length = h;
    } else {
      n.i(t, u(t), !0);
    }
  }
  function J(l, n, t, g) {
    function u(K, P) {
      L[++Q] = K;
      L[++Q] = H[K.toLowerCase()] ? w ? P || K : !0 : P || "";
    }
    function h() {
      (E = "/>" === g.substr(e, 2)) && ++e;
      return E;
    }
    for (var b = 0, v = g.length, e = 1, L = [], Q = -1, E = !1, B, f, r, z, R, I; e < v && 9 > b;) {
      f = g.charAt(e);
      switch(b) {
        case 0:
          x[f] & 3 && (b = 1, r = e);
          break;
        case 1:
          if (x[f] & 4) {
            b = 2, B = g.substring(r, e);
          } else if (">" === f || h()) {
            b = 9, B = g.substring(r, e);
          }
          break;
        case 2:
          if (":" === f) {
            b = 3, r = e;
          } else if (x[f] & 3) {
            b = 4, r = e;
          } else if (">" === f || h()) {
            b = 9;
          }
          break;
        case 3:
          b = x[f] & 3 ? 4 : 9;
          break;
        case 4:
          if ("=" === f) {
            b = 6, z = g.substring(r, e);
          } else if (x[f] & 4) {
            b = 5, z = g.substring(r, e);
          } else if (">" === f || h()) {
            b = 9, u(g.substring(r, e));
          }
          break;
        case 5:
          if (":" === f) {
            b = 3, u(z), r = e;
          } else if (x[f] & 3) {
            b = 4, u(z), r = e;
          } else if ("=" === f) {
            b = 6;
          } else if (">" === f || h()) {
            b = 9, u(z);
          }
          break;
        case 6:
          '"' === f || "'" === f ? (b = 7, R = f, r = e + 1) : x[f] & 4 || (b = 8, r = e);
          I = !1;
          break;
        case 7:
          I || f !== R || (b = 2, u(z, g.substring(r, e)));
          I = "\\" === f && !I;
          break;
        case 8:
          x[f] & 4 ? b = 2 : ">" === f ? b = 9 : !M[z] && h() && (b = 9), 8 !== b && u(z, g.substring(r, e));
      }
      ++e;
    }
    if (9 === b) {
      b = B.toUpperCase();
      w || (w = !!G[B]);
      if (!w) {
        if (N[b]) {
          for (; n && O[n];) {
            A(l, t, n, !1), n = l[l.length - 1];
          }
        }
        for (; n;) {
          if (y[n] && y[n][b]) {
            A(l, t, n, !1), n = l[l.length - 1];
          } else {
            break;
          }
        }
      }
      (E = E || T[b]) || (l[l.length] = w ? B : b);
      t.v(w ? B : b, L, E, e);
      return e;
    }
    return 0;
  }
  for (var C = [], w = !!d.l, S = a, c, F; a;) {
    (c = F = C[C.length - 1]) && w && (F = c.toUpperCase());
    if (U[F]) {
      if ("PLAINTEXT" === F) {
        d.h(a), a = "";
      } else {
        if (c = a.toUpperCase().indexOf("</" + F), 0 <= c) {
          if (c && d.h(a.substring(0, c)), a = a.substring(c), c = D(C, d, a)) {
            a = a.substring(c);
          } else {
            d.g(m + a);
            return;
          }
        } else {
          d.g(m + a);
          return;
        }
      }
    } else if (0 === a.indexOf("<!DOCTYPE ")) {
      if (c = a.indexOf(">"), -1 !== c) {
        p(), d.s(a.substring(10, c)), a = a.substring(c + 1);
      } else {
        d.g(m + a);
        return;
      }
    } else if (0 === a.indexOf("<?")) {
      if (c = a.indexOf("?>"), -1 !== c) {
        p(), d.u(a.substring(2, c)), a = a.substring(c + 2);
      } else {
        d.g(m + a);
        return;
      }
    } else if (0 === a.indexOf("<![CDATA[")) {
      if (c = a.indexOf("]]\x3e"), -1 !== c) {
        p(), d.m(a.substring(9, c)), a = a.substring(c + 3);
      } else {
        d.g(m + a);
        return;
      }
    } else if (0 === a.indexOf("\x3c!--")) {
      if (c = a.indexOf("--\x3e"), -1 !== c) {
        p(), d.o(a.substring(4, c)), a = a.substring(c + 3);
      } else {
        d.g(m + a);
        return;
      }
    } else if (0 === a.indexOf("</")) {
      if (p(), c = D(C, d, a)) {
        a = a.substring(c);
      } else {
        d.g(a);
        return;
      }
    } else if ("<" === a.charAt(0) && x[a.charAt(1)] & 3) {
      if (p(), c = J(C, c, d, a)) {
        a = a.substring(c);
      } else {
        d.g(a);
        return;
      }
    } else {
      c = a.indexOf("<"), -1 === c ? (d.h(m + a), a = m = "") : c ? (m += a.substring(0, c), a = a.substring(c)) : (m += "<", a = a.substring(1));
    }
    if (a === S) {
      d.g(m + a);
      return;
    }
    S = a;
  }
  p();
  A(C, d, "", !0);
}
var G = {xml:!0, svg:!0, math:!0}, T = {AREA:!0, BASE:!0, BASEFONT:!0, BR:!0, BGSOUND:!0, COL:!0, FRAME:!0, HR:!0, IMG:!0, INPUT:!0, ISINDEX:!0, KEYGEN:!0, LINK:!0, META:!0, PARAM:!0, SOURCE:!0, TRACK:!0, EMBED:!0, WBR:!0}, N = {ADDRESS:!0, APPLET:!0, BLOCKQUOTE:!0, BUTTON:!0, CENTER:!0, DD:!0, DEL:!0, DIR:!0, DIV:!0, DL:!0, DT:!0, FIELDSET:!0, FORM:!0, FRAMESET:!0, HR:!0, IFRAME:!0, INS:!0, ISINDEX:!0, LI:!0, MAP:!0, MARQUEE:!0, MENU:!0, NOFRAMES:!0, NOSCRIPT:!0, OBJECT:!0, OL:!0, P:!0, PRE:!0, 
SCRIPT:!0, TABLE:!0, TBODY:!0, TD:!0, TFOOT:!0, TH:!0, THEAD:!0, TR:!0, UL:!0}, O = {ABBR:!0, ACRONYM:!0, APPLET:!0, B:!0, BASEFONT:!0, BDO:!0, BIG:!0, BR:!0, BUTTON:!0, CAPTION:!0, CITE:!0, CODE:!0, DEL:!0, DFN:!0, EM:!0, FONT:!0, I:!0, IFRAME:!0, IMG:!0, INPUT:!0, INS:!0, KBD:!0, LABEL:!0, MAP:!0, NOBR:!0, OBJECT:!0, Q:!0, RB:!0, RBC:!0, RP:!0, RT:!0, RTC:!0, RUBY:!0, S:!0, SAMP:!0, SCRIPT:!0, SELECT:!0, SMALL:!0, SPAN:!0, STRIKE:!0, STRONG:!0, SUB:!0, SUP:!0, TEXTAREA:!0, TT:!0, U:!0, VAR:!0, 
WBR:!0}, y = {HEAD:{BODY:!0}, LI:{LI:!0}, OPTION:{OPTION:!0}, P:{P:!0}, OPTGROUP:{OPTGROUP:!0}, DT:{DT:!0, DD:!0}, CAPTION:{CAPTION:!0, COLGROUP:!0, THEAD:!0, TBODY:!0, TFOOT:!0, TR:!0}, THEAD:{CAPTION:!0, COLGROUP:!0, THEAD:!0, TBODY:!0, TFOOT:!0}, TR:{THEAD:!0, TBODY:!0, TFOOT:!0, TR:!0}, TH:{THEAD:!0, TBODY:!0, TFOOT:!0, TR:!0, TD:!0, TH:!0}, RB:{RBC:!0, RTC:!0, RB:!0, RP:!0, RT:!0}, RBC:{RBC:!0, RTC:!0}};
y.DD = y.DT;
y.COLGROUP = y.CAPTION;
y.TFOOT = y.TBODY = y.THEAD;
y.TD = y.TH;
y.RP = y.RT = y.RB;
y.RTC = y.RBC;
var U = {SCRIPT:!0, STYLE:!0, PLAINTEXT:!0, XMP:!0, TEXTAREA:!0}, M = {action:!0, archive:!0, background:!0, cite:!0, classid:!0, codebase:!0, data:!0, href:!0, longdesc:!0, profile:!0, src:!0, usemap:!0}, H = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, x = {}, V = "abcdefghijklmnopqrstuvwxyz \t\r\n\f\b", W;
for (W = 26; W;) {
  x[V.charAt(--W)] = 2;
}
W = 26;
for (V = V.toUpperCase(); W;) {
  x[V.charAt(--W)] = 1;
}
for (W = 32; 26 < W;) {
  x[V.charAt(--W)] = 4;
}
;var X = [], Y = X, Z = [], q = {j:function() {
  var a = X;
  X = Y = [];
  Z = [];
  "number" !== typeof a[0] && a.unshift(11);
  return a;
}, g:function(a) {
  throw a;
}, s:function(a) {
  X[0] = 9;
  X[1] = "<!DOCTYPE " + a + ">";
}, v:function(a, d, m) {
  a = [a];
  var p;
  if (d) {
    var D = {};
    for (p = 0; p < d.length; p += 2) {
      var A = d[p];
      var J = d[p + 1];
      D[A] = J;
    }
    p && (a[1] = D);
  }
  Y.push(a);
  m || (Z.push(Y), Y = a);
}, i:function(a) {
  a === Y[0] && (Y = Z.pop());
}, h:function(a) {
  Y.push(a);
}, o:function(a) {
  Y.push([8, a]);
}, m:function(a) {
  Y.push([4, a]);
}, u:function(a) {
  Y.push([7, a]);
}};
module.exports = function(a) {
  k(a);
  return q.j();
};

