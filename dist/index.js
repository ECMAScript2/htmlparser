/* es2-html-parser@0.0.1
(c) 2024-2024 itozyun <itozyun@gmail.com> (https://outcloud.blogspot.com/)(undefined), MIT. */
function l(a) {
  var d = q, h = 0;
  function n() {
    h && (d.h(a.substring(0, h)), a = a.substring(h), h = 0);
  }
  function E(m, p, t) {
    for (var g = 0, u = t.length, k = 2, b, v, e; k < u && 3 !== g;) {
      v = t.charAt(k);
      switch(g) {
        case 0:
          x[v] & 3 && (g = 1, e = k);
          break;
        case 1:
          x[v] & 4 ? g = 2 : ">" === v && (g = 3);
          1 !== g && (b = t.substring(e, k));
          break;
        case 2:
          ">" === v && (g = 3);
      }
      ++k;
    }
    return 3 === g ? (A(m, p, w ? b : b.toUpperCase(), !1), k) : 0;
  }
  function A(m, p, t, g) {
    function u(v) {
      return g && !(y[v] && y[v][v]);
    }
    var k = 0, b = m.length;
    if (t) {
      for (k = b; 0 <= k && m[--k] !== t;) {
      }
    }
    if (0 <= k) {
      for (; k < b;) {
        p.i(m[--b], u(m[b]), !1), w && D[m[b]] && (w = !!p.m);
      }
      m.length = k;
    } else {
      p.i(t, u(t), !0);
    }
  }
  function K(m, p, t, g) {
    function u(L, P) {
      M[++Q] = L;
      M[++Q] = H[L.toLowerCase()] ? w ? P || L : !0 : P || "";
    }
    function k() {
      (F = "/>" === g.substr(e, 2)) && ++e;
      return F;
    }
    for (var b = 0, v = g.length, e = 1, M = [], Q = -1, F = !1, B, f, r, z, R, I; e < v && 9 > b;) {
      f = g.charAt(e);
      switch(b) {
        case 0:
          x[f] & 3 && (b = 1, r = e);
          break;
        case 1:
          if (x[f] & 4) {
            b = 2, B = g.substring(r, e);
          } else if (">" === f || k()) {
            b = 9, B = g.substring(r, e);
          }
          break;
        case 2:
          if (":" === f) {
            b = 3, r = e;
          } else if (x[f] & 3) {
            b = 4, r = e;
          } else if (">" === f || k()) {
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
          } else if (">" === f || k()) {
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
          } else if (">" === f || k()) {
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
          x[f] & 4 ? b = 2 : ">" === f ? b = 9 : !J[z] && k() && (b = 9), 8 !== b && u(z, g.substring(r, e));
      }
      ++e;
    }
    if (9 === b) {
      b = B.toUpperCase();
      w || (w = !!D[B]);
      if (!w) {
        if (N[b]) {
          for (; p && O[p];) {
            A(m, t, p, !1), p = m[m.length - 1];
          }
        }
        for (; p;) {
          if (y[p] && y[p][b]) {
            A(m, t, p, !1), p = m[m.length - 1];
          } else {
            break;
          }
        }
      }
      (F = F || T[b]) || (m[m.length] = w ? B : b);
      t.A(w ? B : b, M, F, e);
      return e;
    }
    return 0;
  }
  for (var C = [], w = !!d.m, S = a.length - h, c, G; a;) {
    (c = G = C[C.length - 1]) && w && (G = c.toUpperCase());
    if (U[G]) {
      if ("PLAINTEXT" === G) {
        d.h(a), a = "";
      } else {
        if (c = a.toUpperCase().indexOf("</" + G), 0 <= c) {
          if (h = c, n(), c = E(C, d, a)) {
            a = a.substring(c);
          } else {
            d.g(a);
            return;
          }
        } else {
          d.g(a);
          return;
        }
      }
    } else if (a.indexOf("<!DOCTYPE ") === h) {
      if (n(), c = a.indexOf(">"), -1 !== c) {
        d.u(a.substring(10, c)), a = a.substring(c + 1);
      } else {
        d.g(a);
        return;
      }
    } else if (a.indexOf("<?") === h) {
      if (n(), c = a.indexOf("?>"), -1 !== c) {
        d.v(a.substring(2, c)), a = a.substring(c + 2);
      } else {
        d.g(a);
        return;
      }
    } else if (a.indexOf("<![CDATA[") === h) {
      if (n(), c = a.indexOf("]]\x3e"), -1 !== c) {
        d.o(a.substring(9, c)), a = a.substring(c + 3);
      } else {
        d.g(a);
        return;
      }
    } else if (a.indexOf("\x3c!--") === h) {
      if (n(), c = a.indexOf("--\x3e"), -1 !== c) {
        d.s(a.substring(4, c)), a = a.substring(c + 3);
      } else {
        d.g(a);
        return;
      }
    } else if (a.indexOf("</") === h) {
      if (n(), c = E(C, d, a)) {
        a = a.substring(c);
      } else {
        d.g(a);
        return;
      }
    } else if ("<" === a.charAt(h) && x[a.charAt(h + 1)] & 3) {
      if (n(), c = K(C, c, d, a)) {
        a = a.substring(c);
      } else {
        d.g(a);
        return;
      }
    } else {
      c = a.indexOf("<", h), -1 === c ? (d.h(a), a = "") : h < c ? h = c : ++h;
    }
    c = a.length - h;
    if (c === S) {
      d.g(a);
      return;
    }
    S = c;
  }
  n();
  A(C, d, "", !0);
}
var D = {xml:!0, svg:!0, math:!0}, T = {AREA:!0, BASE:!0, BASEFONT:!0, BR:!0, BGSOUND:!0, COL:!0, FRAME:!0, HR:!0, IMG:!0, INPUT:!0, ISINDEX:!0, KEYGEN:!0, LINK:!0, META:!0, PARAM:!0, SOURCE:!0, TRACK:!0, EMBED:!0, WBR:!0}, N = {ADDRESS:!0, APPLET:!0, BLOCKQUOTE:!0, BUTTON:!0, CENTER:!0, DD:!0, DEL:!0, DIR:!0, DIV:!0, DL:!0, DT:!0, FIELDSET:!0, FORM:!0, FRAMESET:!0, HR:!0, IFRAME:!0, INS:!0, ISINDEX:!0, LI:!0, MAP:!0, MARQUEE:!0, MENU:!0, NOFRAMES:!0, NOSCRIPT:!0, OBJECT:!0, OL:!0, P:!0, PRE:!0, 
SCRIPT:!0, TABLE:!0, TBODY:!0, TD:!0, TFOOT:!0, TH:!0, THEAD:!0, TR:!0, UL:!0}, O = {ABBR:!0, ACRONYM:!0, APPLET:!0, B:!0, BASEFONT:!0, BDO:!0, BIG:!0, BR:!0, BUTTON:!0, CAPTION:!0, CITE:!0, CODE:!0, DEL:!0, DFN:!0, EM:!0, FONT:!0, I:!0, IFRAME:!0, IMG:!0, INPUT:!0, INS:!0, KBD:!0, LABEL:!0, MAP:!0, NOBR:!0, OBJECT:!0, Q:!0, RB:!0, RBC:!0, RP:!0, RT:!0, RTC:!0, RUBY:!0, S:!0, SAMP:!0, SCRIPT:!0, SELECT:!0, SMALL:!0, SPAN:!0, STRIKE:!0, STRONG:!0, SUB:!0, SUP:!0, TEXTAREA:!0, TT:!0, U:!0, VAR:!0, 
WBR:!0}, y = {HEAD:{BODY:!0}, LI:{LI:!0}, OPTION:{OPTION:!0}, P:{P:!0}, OPTGROUP:{OPTGROUP:!0}, DT:{DT:!0, DD:!0}, CAPTION:{CAPTION:!0, COLGROUP:!0, THEAD:!0, TBODY:!0, TFOOT:!0, TR:!0}, THEAD:{CAPTION:!0, COLGROUP:!0, THEAD:!0, TBODY:!0, TFOOT:!0}, TR:{THEAD:!0, TBODY:!0, TFOOT:!0, TR:!0}, TH:{THEAD:!0, TBODY:!0, TFOOT:!0, TR:!0, TD:!0, TH:!0}, RB:{RBC:!0, RTC:!0, RB:!0, RP:!0, RT:!0}, RBC:{RBC:!0, RTC:!0}};
y.DD = y.DT;
y.COLGROUP = y.CAPTION;
y.TFOOT = y.TBODY = y.THEAD;
y.TD = y.TH;
y.RP = y.RT = y.RB;
y.RTC = y.RBC;
var U = {SCRIPT:!0, STYLE:!0, PLAINTEXT:!0, XMP:!0, TEXTAREA:!0}, J = {action:!0, archive:!0, background:!0, cite:!0, classid:!0, codebase:!0, data:!0, href:!0, longdesc:!0, profile:!0, src:!0, usemap:!0}, H = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, x = {}, V = "abcdefghijklmnopqrstuvwxyz \t\r\n\f\b", W;
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
;var X, Y, Z, q = {l:function() {
  X = Y = [];
  Z = [];
}, j:function() {
  "number" !== typeof X[0] && X.unshift(11);
  return X;
}, g:function(a) {
  throw a;
}, u:function(a) {
  X[0] = 9;
  X[1] = "<!DOCTYPE " + a + ">";
}, A:function(a, d, h) {
  a = [a];
  var n;
  if (d) {
    var E = {};
    for (n = 0; n < d.length; n += 2) {
      var A = d[n];
      var K = d[n + 1];
      E[A] = K;
    }
    n && (a[1] = E);
  }
  Y.push(a);
  h || (Z.push(Y), Y = a);
}, i:function(a) {
  a === Y[0] && (Y = Z.pop());
}, h:function(a) {
  Y.push(a);
}, s:function(a) {
  Y.push([8, a]);
}, o:function(a) {
  Y.push([4, a]);
}, v:function(a) {
  Y.push([7, a]);
}};
module.exports = function(a) {
  q.l();
  l(a);
  return q.j();
};

