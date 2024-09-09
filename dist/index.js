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
function r(a) {
  var d = t, g = 0;
  function w() {
    g && (d.aa(a.substring(0, g)), a = a.substring(g), g = 0);
  }
  function J(n, q, u) {
    for (var h = 0, m = u.length, k = 2, c, y, e; k < m && 3 !== h;) {
      y = u.charAt(k);
      switch(h) {
        case 0:
          B[y] & 3 && (h = 1, e = k);
          break;
        case 1:
          B[y] & 4 ? h = 2 : ">" === y && (h = 3);
          1 !== h && (c = u.substring(e, k));
          break;
        case 2:
          ">" === y && (h = 3);
      }
      ++k;
    }
    return 3 === h ? (G(n, q, v ? c : c.toUpperCase(), !1), k) : 0;
  }
  function G(n, q, u, h) {
    var m = 0, k = n.length;
    if (u) {
      for (m = k; 0 <= m && n[--m] !== u;) {
      }
    }
    if (0 <= m) {
      for (; m < k;) {
        q.ba(n[--k], h && !l[n[k]], !1), v && F[n[k]] && (v = !!q.ea);
      }
      n.length = m;
    } else {
      q.ba(u, !1, !0);
    }
  }
  function R(n, q, u, h) {
    function m(H, L) {
      M[H] = I[H.toLowerCase()] ? v ? L || H : !0 : L || "";
      ++N;
    }
    function k() {
      (C = "/>" === h.substr(e, 2)) && ++e;
      return C;
    }
    for (var c = 0, y = h.length, e = 1, M = {}, N = 0, C = !1, z, f, p, x, O, E; e < y && 9 > c;) {
      f = h.charAt(e);
      switch(c) {
        case 0:
          B[f] & 3 && (c = 1, p = e);
          break;
        case 1:
          if (B[f] & 4) {
            c = 2, z = h.substring(p, e);
          } else if (">" === f || k()) {
            c = 9, z = h.substring(p, e);
          }
          break;
        case 2:
          if (":" === f) {
            c = 3, p = e;
          } else if (B[f] & 3) {
            c = 4, p = e;
          } else if (">" === f || k()) {
            c = 9;
          }
          break;
        case 3:
          c = B[f] & 3 ? 4 : 9;
          break;
        case 4:
          if ("=" === f) {
            c = 6, x = h.substring(p, e);
          } else if (B[f] & 4) {
            c = 5, x = h.substring(p, e);
          } else if (">" === f || k()) {
            c = 9, m(h.substring(p, e));
          }
          break;
        case 5:
          if (":" === f) {
            c = 3, m(x), p = e;
          } else if (B[f] & 3) {
            c = 4, m(x), p = e;
          } else if ("=" === f) {
            c = 6;
          } else if (">" === f || k()) {
            c = 9, m(x);
          }
          break;
        case 6:
          '"' === f || "'" === f ? (c = 7, O = f, p = e + 1) : B[f] & 4 || (c = 8, p = e);
          E = !1;
          break;
        case 7:
          E || f !== O || (c = 2, m(x, h.substring(p, e)));
          E = "\\" === f && !E;
          break;
        case 8:
          B[f] & 4 ? c = 2 : ">" === f ? c = 9 : !K[x] && k() && (c = 9), 8 !== c && m(x, h.substring(p, e));
      }
      ++e;
    }
    if (9 === c) {
      c = z.toUpperCase();
      v || (v = !!F[z]);
      if (!v) {
        for (; q;) {
          if (l[q] && !l[q][c]) {
            G(n, u, q, !1), q = n[n.length - 1];
          } else {
            break;
          }
        }
      }
      (C = C || !!Q[c]) || (n[n.length] = v ? z : c);
      u.ja(v ? z : c, N ? M : null, C, e);
      return e;
    }
    return 0;
  }
  for (var A = [], v = !!d.ea, P = a.length - g, b, D; a;) {
    (b = D = A[A.length - 1]) && v && (D = b.toUpperCase());
    if (S[D]) {
      if ("PLAINTEXT" === D) {
        d.aa(a), a = "";
      } else {
        if (b = a.toUpperCase().indexOf("</" + D), 0 <= b) {
          if (g = b, w(), b = J(A, d, a)) {
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
      if (w(), b = a.indexOf(">"), -1 !== b) {
        d.ha(a.substring(10, b)), a = a.substring(b + 1);
      } else {
        d.$(a);
        return;
      }
    } else if (a.indexOf("<?") === g) {
      if (w(), b = a.indexOf("?>"), -1 !== b) {
        d.ia(a.substring(2, b)), a = a.substring(b + 2);
      } else {
        d.$(a);
        return;
      }
    } else if (a.indexOf("<![CDATA[") === g) {
      if (w(), b = a.indexOf("]]\x3e"), -1 !== b) {
        d.fa(a.substring(9, b)), a = a.substring(b + 3);
      } else {
        d.$(a);
        return;
      }
    } else if (a.indexOf("\x3c!--") === g) {
      if (w(), b = a.indexOf("--\x3e"), -1 !== b) {
        d.ga(a.substring(4, b)), a = a.substring(b + 3);
      } else {
        d.$(a);
        return;
      }
    } else if (a.indexOf("</") === g) {
      if (w(), b = J(A, d, a)) {
        a = a.substring(b);
      } else {
        d.$(a);
        return;
      }
    } else if ("<" === a.charAt(g) && B[a.charAt(g + 1)] & 3) {
      if (w(), b = R(A, b, d, a)) {
        a = a.substring(b);
      } else {
        d.$(a);
        return;
      }
    } else {
      b = a.indexOf("<", g), -1 === b ? (d.aa(a), a = "") : g < b ? g = b : ++g;
    }
    b = a.length - g;
    if (b === P) {
      d.$(a);
      return;
    }
    P = b;
  }
  w();
  G(A, d, "", !0);
}
var F = {xml:!0, svg:!0, math:!0}, Q = {AREA:!0, BASE:!0, BASEFONT:!0, BR:!0, BGSOUND:!0, COL:!0, ka:!0, FRAME:!0, HR:!0, IMG:!0, INPUT:!0, ISINDEX:!0, KEYGEN:!0, LINK:!0, META:!0, PARAM:!0, SOURCE:!0, TRACK:!0, EMBED:!0, WBR:!0}, S = {SCRIPT:!0, STYLE:!0, PLAINTEXT:!0, XMP:!0, TEXTAREA:!0}, K = {action:!0, archive:!0, background:!0, cite:!0, classid:!0, codebase:!0, data:!0, href:!0, longdesc:!0, profile:!0, src:!0, usemap:!0}, I = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, 
multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, B = {a:2, b:2, c:2, d:2, e:2, f:2, g:2, h:2, i:2, j:2, k:2, l:2, m:2, n:2, o:2, p:2, q:2, r:2, s:2, t:2, u:2, v:2, w:2, x:2, y:2, z:2, A:1, B:1, C:1, D:1, E:1, F:1, G:1, H:1, I:1, J:1, K:1, L:1, M:1, N:1, O:1, P:1, Q:1, R:1, S:1, T:1, U:1, V:1, W:1, X:1, Y:1, Z:1, "\b":4, "\f":4, "\n":4, "\r":4, "\t":4, " ":4};
var T, U, V, t = {da:function() {
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
  d && (a[1] = d);
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
  t.da();
  r(a);
  return t.ca();
};

