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
  var d = v, e = 0;
  function w() {
    e && (d.aa(x(a.substring(0, e))), a = a.substring(e), e = 0);
  }
  function x(n) {
    return n.split("&lt;").join("<").split("&gt;").join(">").split("&amp;").join("&");
  }
  function L(n, q, t) {
    for (var f = 0, p = t.length, h = 2, c, m, E; h < p && 3 !== f;) {
      m = t.charAt(h);
      switch(f) {
        case 0:
          B[m] & 3 && (f = 1, E = h);
          break;
        case 1:
          B[m] & 4 ? f = 2 : ">" === m && (f = 3);
          1 !== f && (c = t.substring(E, h));
          break;
        case 2:
          ">" === m && (f = 3);
      }
      ++h;
    }
    return 3 === f ? (H(n, q, u ? c : c.toUpperCase(), !1), h) : 0;
  }
  function H(n, q, t, f) {
    var p = 0, h = n.length;
    if (t) {
      for (p = h; 0 <= p && n[--p] !== t;) {
      }
    }
    if (0 <= p) {
      for (; p < h;) {
        q.ba(n[--h], f && !l[n[h]], !1), u && G[n[h]] && (u = !!q.ea);
      }
      n.length = p;
    } else {
      q.ba(t, !1, !0);
    }
  }
  function S(n, q, t, f) {
    function p(I, J) {
      N[I] = !0 === J ? !0 : K[I.toLowerCase()] ? u ? x(J || I) : !0 : x(J || "");
      ++O;
    }
    function h() {
      (C = "/>" === f.substr(k, 2)) && ++k;
      return C;
    }
    for (var c = 1, m = 1, E = f.length, k = 2, N = {}, O = 0, C = !1, z, g, y, P, F; k < E && 9 > c;) {
      g = f.charAt(k);
      switch(c) {
        case 1:
          if (B[g] & 4) {
            c = 2, z = f.substring(m, k);
          } else if (">" === g || h()) {
            c = 9, z = f.substring(m, k);
          }
          break;
        case 2:
          ">" === g || h() ? c = 9 : B[g] & 4 || (c = 3, m = k);
          break;
        case 3:
          if ("=" === g) {
            c = 5, y = f.substring(m, k);
          } else if (B[g] & 4) {
            c = 4, y = f.substring(m, k);
          } else if (">" === g || h()) {
            c = 9, p(f.substring(m, k), !0);
          }
          break;
        case 4:
          "=" === g ? c = 5 : ">" === g || h() ? (c = 9, p(y, !0)) : B[g] & 4 || (c = 3, p(y, !0), m = k);
          break;
        case 5:
          '"' === g || "'" === g ? (c = 6, P = g, m = k + 1) : B[g] & 4 || (c = 7, m = k);
          F = !1;
          break;
        case 6:
          F || g !== P || (c = 2, p(y, f.substring(m, k)));
          F = "\\" === g && !F;
          break;
        case 7:
          B[g] & 4 ? c = 2 : ">" === g ? c = 9 : !M[y] && h() && (c = 9), 7 !== c && p(y, f.substring(m, k));
      }
      ++k;
    }
    if (9 === c) {
      c = z.toUpperCase();
      u || (u = !!G[z]);
      if (!u) {
        for (; q;) {
          if (l[q] && !l[q][c]) {
            H(n, t, q, !1), q = n[n.length - 1];
          } else {
            break;
          }
        }
      }
      (C = C || !!R[c]) || (n[n.length] = u ? z : c);
      t.ja(u ? z : c, O ? N : null, C, k);
      return k;
    }
    return 0;
  }
  for (var A = [], u = !!d.ea, Q = a.length - e, b, D; a;) {
    (b = D = A[A.length - 1]) && u && (D = b.toUpperCase());
    if (T[D]) {
      if ("PLAINTEXT" === D) {
        d.aa(x(a)), a = "";
      } else {
        if (b = a.toUpperCase().indexOf("</" + D), 0 <= b) {
          if (e = b, w(), b = L(A, d, a)) {
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
    } else if (a.indexOf("<!DOCTYPE ") === e) {
      if (w(), b = a.indexOf(">"), -1 !== b) {
        d.ha(a.substring(10, b)), a = a.substring(b + 1);
      } else {
        d.$(a);
        return;
      }
    } else if (a.indexOf("<?") === e) {
      if (w(), b = a.indexOf("?>"), -1 !== b) {
        d.ia(x(a.substring(2, b))), a = a.substring(b + 2);
      } else {
        d.$(a);
        return;
      }
    } else if (a.indexOf("<![CDATA[") === e) {
      if (w(), b = a.indexOf("]]\x3e"), -1 !== b) {
        d.fa(x(a.substring(9, b))), a = a.substring(b + 3);
      } else {
        d.$(a);
        return;
      }
    } else if (a.indexOf("\x3c!--") === e) {
      if (w(), b = a.indexOf("--\x3e"), -1 !== b) {
        d.ga(x(a.substring(4, b))), a = a.substring(b + 3);
      } else {
        d.$(a);
        return;
      }
    } else if (a.indexOf("</") === e) {
      if (w(), b = L(A, d, a)) {
        a = a.substring(b);
      } else {
        d.$(a);
        return;
      }
    } else if ("<" === a.charAt(e) && B[a.charAt(e + 1)] & 3) {
      if (w(), b = S(A, b, d, a)) {
        a = a.substring(b);
      } else {
        d.$(a);
        return;
      }
    } else {
      b = a.indexOf("<", e), -1 === b ? (d.aa(x(a)), a = "") : e < b ? e = b : ++e;
    }
    b = a.length - e;
    if (b === Q) {
      d.$(a);
      return;
    }
    Q = b;
  }
  w();
  H(A, d, "", !0);
}
var G = {xml:!0, svg:!0, math:!0}, R = {AREA:!0, BASE:!0, BASEFONT:!0, BR:!0, BGSOUND:!0, COL:!0, ka:!0, FRAME:!0, HR:!0, IMG:!0, INPUT:!0, ISINDEX:!0, KEYGEN:!0, LINK:!0, META:!0, PARAM:!0, SOURCE:!0, TRACK:!0, EMBED:!0, WBR:!0}, T = {SCRIPT:!0, STYLE:!0, PLAINTEXT:!0, XMP:!0, TEXTAREA:!0}, M = {action:!0, archive:!0, background:!0, cite:!0, classid:!0, codebase:!0, data:!0, href:!0, longdesc:!0, profile:!0, src:!0, usemap:!0}, K = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, 
multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, B = {a:2, b:2, c:2, d:2, e:2, f:2, g:2, h:2, i:2, j:2, k:2, l:2, m:2, n:2, o:2, p:2, q:2, r:2, s:2, t:2, u:2, v:2, w:2, x:2, y:2, z:2, A:1, B:1, C:1, D:1, E:1, F:1, G:1, H:1, I:1, J:1, K:1, L:1, M:1, N:1, O:1, P:1, Q:1, R:1, S:1, T:1, U:1, V:1, W:1, X:1, Y:1, Z:1, "\b":4, "\f":4, "\n":4, "\r":4, "\t":4, " ":4};
var U, V, W, v = {da:function() {
  U = V = [];
  W = [];
}, ca:function() {
  "number" !== typeof U[0] && U.unshift(11);
  return U;
}, $:function(a) {
  throw a;
}, ha:function(a) {
  U[0] = 9;
  U[1] = "<!DOCTYPE " + a + ">";
}, ja:function(a, d, e) {
  a = [a];
  d && (a[1] = d);
  V.push(a);
  e || (W.push(V), V = a);
}, ba:function(a, d, e) {
  e ? V.push("</" + a + ">") : d || a === V[0] && (V = W.pop());
}, aa:function(a) {
  V.push(a);
}, ga:function(a) {
  V.push([8, a]);
}, fa:function(a) {
  V.push([4, a]);
}, ia:function(a) {
  V.push([7, a]);
}};
module.exports = function(a) {
  v.da();
  r(a);
  return v.ca();
};

