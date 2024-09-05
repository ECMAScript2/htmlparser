/* es2-html-parser@0.0.1
(c) 2024-2024 itozyun <itozyun@gmail.com> (https://outcloud.blogspot.com/)(undefined), MIT. */
var l = {CAPTION:{ARTICLE:!0, SECTION:!0, NAV:!0, ASIDE:!0, H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, HEADER:!0, FOOTER:!0, ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, 
AUDIO:!0, MAP:!0, AREA:!0, MATH:!0, SVG:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, DD:{ARTICLE:!0, SECTION:!0, NAV:!0, ASIDE:!0, H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, HEADER:!0, FOOTER:!0, ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, 
DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, MATH:!0, SVG:!0, TABLE:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, DT:{ADDRESS:!0, 
P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, MATH:!0, SVG:!0, TABLE:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, 
KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, P:{A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, MATH:!0, SVG:!0, LABEL:!0, INPUT:!0, BUTTON:!0, 
SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, HTML:{HEAD:!0, BODY:!0}, HEAD:{TITLE:!0, BASE:!0, BGSOUND:!0, LINK:!0, META:!0, STYLE:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLETE:!0}, COLGROUP:{COL:!0}, OPTGROUP:{OPTION:!0}, OPTION:{}, TBODY:{TR:!0}, TR:{TH:!0, TD:!0}, RBC:{RB:!0, RP:!0, RT:!0}};
l.LI = l.TD = l.DD;
l.TH = l.DT;
l.RB = l.RP = l.RT = l.P;
l.TFOOT = l.THEAD = l.TBODY;
l.RTC = l.RBC;
function t(a) {
  var d = u, g = 0;
  function m() {
    g && (d.aa(a.substring(0, g)), a = a.substring(g), g = 0);
  }
  function C(p, r, v) {
    for (var h = 0, n = v.length, k = 2, c, y, e; k < n && 3 !== h;) {
      y = v.charAt(k);
      switch(h) {
        case 0:
          B[y] & 3 && (h = 1, e = k);
          break;
        case 1:
          B[y] & 4 ? h = 2 : ">" === y && (h = 3);
          1 !== h && (c = v.substring(e, k));
          break;
        case 2:
          ">" === y && (h = 3);
      }
      ++k;
    }
    return 3 === h ? (D(p, r, w ? c : c.toUpperCase(), !1), k) : 0;
  }
  function D(p, r, v, h) {
    var n = 0, k = p.length;
    if (v) {
      for (n = k; 0 <= n && p[--n] !== v;) {
      }
    }
    if (0 <= n) {
      for (; n < k;) {
        r.ba(p[--k], h && !l[p[k]], !1), w && H[p[k]] && (w = !!r.ea);
      }
      p.length = n;
    } else {
      r.ba(v, !1, !0);
    }
  }
  function I(p, r, v, h) {
    function n(J, N) {
      K[++O] = J;
      K[++O] = L[J.toLowerCase()] ? w ? N || J : !0 : N || "";
    }
    function k() {
      (E = "/>" === h.substr(e, 2)) && ++e;
      return E;
    }
    for (var c = 0, y = h.length, e = 1, K = [], O = -1, E = !1, z, f, q, x, P, G; e < y && 9 > c;) {
      f = h.charAt(e);
      switch(c) {
        case 0:
          B[f] & 3 && (c = 1, q = e);
          break;
        case 1:
          if (B[f] & 4) {
            c = 2, z = h.substring(q, e);
          } else if (">" === f || k()) {
            c = 9, z = h.substring(q, e);
          }
          break;
        case 2:
          if (":" === f) {
            c = 3, q = e;
          } else if (B[f] & 3) {
            c = 4, q = e;
          } else if (">" === f || k()) {
            c = 9;
          }
          break;
        case 3:
          c = B[f] & 3 ? 4 : 9;
          break;
        case 4:
          if ("=" === f) {
            c = 6, x = h.substring(q, e);
          } else if (B[f] & 4) {
            c = 5, x = h.substring(q, e);
          } else if (">" === f || k()) {
            c = 9, n(h.substring(q, e));
          }
          break;
        case 5:
          if (":" === f) {
            c = 3, n(x), q = e;
          } else if (B[f] & 3) {
            c = 4, n(x), q = e;
          } else if ("=" === f) {
            c = 6;
          } else if (">" === f || k()) {
            c = 9, n(x);
          }
          break;
        case 6:
          '"' === f || "'" === f ? (c = 7, P = f, q = e + 1) : B[f] & 4 || (c = 8, q = e);
          G = !1;
          break;
        case 7:
          G || f !== P || (c = 2, n(x, h.substring(q, e)));
          G = "\\" === f && !G;
          break;
        case 8:
          B[f] & 4 ? c = 2 : ">" === f ? c = 9 : !M[x] && k() && (c = 9), 8 !== c && n(x, h.substring(q, e));
      }
      ++e;
    }
    if (9 === c) {
      c = z.toUpperCase();
      w || (w = !!H[z]);
      if (!w) {
        for (; r;) {
          if (l[r] && !l[r][c]) {
            D(p, v, r, !1), r = p[p.length - 1];
          } else {
            break;
          }
        }
      }
      (E = E || R[c]) || (p[p.length] = w ? z : c);
      v.ja(w ? z : c, K, E, e);
      return e;
    }
    return 0;
  }
  for (var A = [], w = !!d.ea, Q = a.length - g, b, F; a;) {
    (b = F = A[A.length - 1]) && w && (F = b.toUpperCase());
    if (S[F]) {
      if ("PLAINTEXT" === F) {
        d.aa(a), a = "";
      } else {
        if (b = a.toUpperCase().indexOf("</" + F), 0 <= b) {
          if (g = b, m(), b = C(A, d, a)) {
            a = a.substring(b);
          } else {
            d.$(a);
            return;
          }
        } else {
          d.$(a);
          return;
        }
      }
    } else if (a.indexOf("<!DOCTYPE ") === g) {
      if (m(), b = a.indexOf(">"), -1 !== b) {
        d.ha(a.substring(10, b)), a = a.substring(b + 1);
      } else {
        d.$(a);
        return;
      }
    } else if (a.indexOf("<?") === g) {
      if (m(), b = a.indexOf("?>"), -1 !== b) {
        d.ia(a.substring(2, b)), a = a.substring(b + 2);
      } else {
        d.$(a);
        return;
      }
    } else if (a.indexOf("<![CDATA[") === g) {
      if (m(), b = a.indexOf("]]\x3e"), -1 !== b) {
        d.fa(a.substring(9, b)), a = a.substring(b + 3);
      } else {
        d.$(a);
        return;
      }
    } else if (a.indexOf("\x3c!--") === g) {
      if (m(), b = a.indexOf("--\x3e"), -1 !== b) {
        d.ga(a.substring(4, b)), a = a.substring(b + 3);
      } else {
        d.$(a);
        return;
      }
    } else if (a.indexOf("</") === g) {
      if (m(), b = C(A, d, a)) {
        a = a.substring(b);
      } else {
        d.$(a);
        return;
      }
    } else if ("<" === a.charAt(g) && B[a.charAt(g + 1)] & 3) {
      if (m(), b = I(A, b, d, a)) {
        a = a.substring(b);
      } else {
        d.$(a);
        return;
      }
    } else {
      b = a.indexOf("<", g), -1 === b ? (d.aa(a), a = "") : g < b ? g = b : ++g;
    }
    b = a.length - g;
    if (b === Q) {
      d.$(a);
      return;
    }
    Q = b;
  }
  m();
  D(A, d, "", !0);
}
var H = {xml:!0, svg:!0, math:!0}, R = {AREA:!0, BASE:!0, BASEFONT:!0, BR:!0, BGSOUND:!0, COL:!0, FRAME:!0, HR:!0, IMG:!0, INPUT:!0, ISINDEX:!0, KEYGEN:!0, LINK:!0, META:!0, PARAM:!0, SOURCE:!0, TRACK:!0, EMBED:!0, WBR:!0}, S = {SCRIPT:!0, STYLE:!0, PLAINTEXT:!0, XMP:!0, TEXTAREA:!0}, M = {action:!0, archive:!0, background:!0, cite:!0, classid:!0, codebase:!0, data:!0, href:!0, longdesc:!0, profile:!0, src:!0, usemap:!0}, L = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, 
nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, B = {a:2, b:2, c:2, d:2, e:2, f:2, g:2, h:2, i:2, j:2, k:2, l:2, m:2, n:2, o:2, p:2, q:2, r:2, s:2, t:2, u:2, v:2, w:2, x:2, y:2, z:2, A:1, B:1, C:1, D:1, E:1, F:1, G:1, H:1, I:1, J:1, K:1, L:1, M:1, N:1, O:1, P:1, Q:1, R:1, S:1, T:1, U:1, V:1, W:1, X:1, Y:1, Z:1, "\b":4, "\f":4, "\n":4, "\r":4, "\t":4, " ":4};
var T, U, V, u = {da:function() {
  T = U = [];
  V = [];
}, ca:function() {
  "number" !== typeof T[0] && T.unshift(11);
  return T;
}, $:function(a) {
  throw a;
}, ha:function(a) {
  T[0] = 9;
  T[1] = "<!DOCTYPE " + a + ">";
}, ja:function(a, d, g) {
  a = [a];
  var m;
  if (d) {
    var C = {};
    for (m = 0; m < d.length; m += 2) {
      var D = d[m];
      var I = d[m + 1];
      C[D] = I;
    }
    m && (a[1] = C);
  }
  U.push(a);
  g || (V.push(U), U = a);
}, ba:function(a, d, g) {
  g ? U.push("</" + a + ">") : d || a === U[0] && (U = V.pop());
}, aa:function(a) {
  U.push(a);
}, ga:function(a) {
  U.push([8, a]);
}, fa:function(a) {
  U.push([4, a]);
}, ia:function(a) {
  U.push([7, a]);
}};
module.exports = function(a) {
  u.da();
  t(a);
  return u.ca();
};

