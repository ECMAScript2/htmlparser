/* es2-html-parser@0.0.1
(c) 2024-2024 itozyun <itozyun@gmail.com> (https://outcloud.blogspot.com/)(undefined), MIT. */
var k = {a:2, b:2, c:2, d:2, e:2, f:2, g:2, h:2, i:2, j:2, k:2, l:2, m:2, n:2, o:2, p:2, q:2, r:2, s:2, t:2, u:2, v:2, w:2, x:2, y:2, z:2, A:1, B:1, C:1, D:1, E:1, F:1, G:1, H:1, I:1, J:1, K:1, L:1, M:1, N:1, O:1, P:1, Q:1, R:1, S:1, T:1, U:1, V:1, W:1, X:1, Y:1, Z:1, "\b":4, "\f":4, "\n":4, "\r":4, "\t":4, " ":4}, q = {xml:!0, svg:!0, math:!0}, u = {AREA:!0, BASE:!0, BASEFONT:!0, BR:!0, BGSOUND:!0, COL:!0, ka:!0, FRAME:!0, HR:!0, IMG:!0, INPUT:!0, ISINDEX:!0, KEYGEN:!0, LINK:!0, META:!0, PARAM:!0, 
SOURCE:!0, TRACK:!0, EMBED:!0, WBR:!0}, C = {SCRIPT:!0, STYLE:!0, TEXTAREA:!0, TITLE:!0, PLAINTEXT:!0, XMP:!0}, G = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, K = {CAPTION:{ARTICLE:!0, SECTION:!0, NAV:!0, ASIDE:!0, H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, HEADER:!0, FOOTER:!0, ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, 
SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, 
CANVAS:!0}, DD:{ARTICLE:!0, SECTION:!0, NAV:!0, ASIDE:!0, H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, HEADER:!0, FOOTER:!0, ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, 
AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, TABLE:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, DT:{ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, 
U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, TABLE:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, P:{A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, 
VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, HTML:{HEAD:!0, BODY:!0}, HEAD:{TITLE:!0, BASE:!0, BGSOUND:!0, LINK:!0, META:!0, STYLE:!0, SCRIPT:!0, 
NOSCRIPT:!0, TEMPLETE:!0}, COLGROUP:{COL:!0}, OPTGROUP:{OPTION:!0}, OPTION:{}, TBODY:{TR:!0}, TR:{TH:!0, TD:!0}, RBC:{RB:!0, RP:!0, RT:!0}};
K.LI = K.TD = K.DD;
K.TH = K.DT;
K.RB = K.RP = K.RT = K.P;
K.TFOOT = K.THEAD = K.TBODY;
K.RTC = K.RBC;
function L(a) {
  var d = M, e = 0;
  function w() {
    e && (d.aa(x(a.substring(0, e))), a = a.substring(e), e = 0);
  }
  function x(l) {
    return l.split("&lt;").join("<").split("&gt;").join(">").split("&amp;").join("&");
  }
  function N(l, p, r) {
    for (var f = 0, n = r.length, m = 3, c, y; m < n && 2 !== f;) {
      y = r.charAt(m);
      switch(f) {
        case 0:
          k[y] & 4 ? f = 1 : ">" === y && (f = 2);
          f && (c = r.substring(2, m));
          break;
        case 1:
          ">" === y && (f = 2);
      }
      ++m;
    }
    return 2 === f ? (c = t ? c : c.toUpperCase(), !u[c] && H(l, p, c, !1), m) : 0;
  }
  function H(l, p, r, f) {
    var n = 0, m = l.length;
    if (r) {
      for (n = m; 0 <= n && l[--n] !== r;) {
      }
    }
    if (0 <= n) {
      for (; n < m;) {
        p.ba(l[--m], f && !K[l[m]], !1), t && q[l[m]] && (t = !!p.ea);
      }
      l.length = n;
    } else {
      p.ba(r, !1, !0);
    }
  }
  function V(l, p, r, f) {
    function n(I, J) {
      O[I] = !0 === J ? !0 : G[I.toLowerCase()] ? t ? x(J || I) : !0 : x(J || "");
      ++P;
    }
    function m() {
      (D = "/>" === f.substr(h, 2)) && ++h;
      return D;
    }
    for (var c = 1, y = f.length, h = 2, O = {}, P = 0, D = !1, g, z, v, A, Q, F; h < y && 9 > c;) {
      g = f.charAt(h);
      switch(c) {
        case 1:
          if (k[g] & 4) {
            c = 2, z = f.substring(1, h);
          } else if (">" === g || m()) {
            c = 9, z = f.substring(1, h);
          }
          break;
        case 2:
          ">" === g || m() ? c = 9 : k[g] & 4 || (c = 3, v = h);
          break;
        case 3:
          if ("=" === g) {
            c = 5, A = f.substring(v, h);
          } else if (k[g] & 4) {
            c = 4, A = f.substring(v, h);
          } else if (">" === g || m()) {
            c = 9, n(f.substring(v, h), !0);
          }
          break;
        case 4:
          "=" === g ? c = 5 : ">" === g || m() ? (c = 9, n(A, !0)) : k[g] & 4 || (c = 3, n(A, !0), v = h);
          break;
        case 5:
          '"' === g || "'" === g ? (c = 6, Q = g, v = h + 1) : k[g] & 4 || (c = 7, v = h);
          F = !1;
          break;
        case 6:
          F || g !== Q || (c = 2, n(A, f.substring(v, h)));
          F = "\\" === g && !F;
          break;
        case 7:
          k[g] & 4 ? c = 2 : ">" === g && (c = 9), 7 !== c && n(A, f.substring(v, h));
      }
      ++h;
    }
    if (9 === c) {
      c = z.toUpperCase();
      t || (t = !!q[z]);
      if (!t) {
        for (; p;) {
          if (K[p] && !K[p][c]) {
            H(l, r, p, !1), p = l[l.length - 1];
          } else {
            break;
          }
        }
      }
      (D = D || !!u[c]) || (l[l.length] = t ? z : c);
      r.ja(t ? z : c, P ? O : null, D, h);
      return h;
    }
    return 0;
  }
  for (var B = [], t = !!d.ea, R = a.length - e, b, E; a;) {
    (b = E = B[B.length - 1]) && t && (E = b.toUpperCase());
    if (C[E]) {
      if ("PLAINTEXT" === E) {
        d.aa(x(a)), a = "";
      } else {
        if (b = a.toUpperCase().indexOf("</" + E), 0 <= b) {
          if (e = b, w(), b = N(B, d, a)) {
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
    } else if (a.indexOf("</") === e && k[a.charAt(e + 2)] & 3) {
      if (w(), b = N(B, d, a)) {
        a = a.substring(b);
      } else {
        d.$(a);
        return;
      }
    } else if ("<" === a.charAt(e) && k[a.charAt(e + 1)] & 3) {
      if (w(), b = V(B, b, d, a)) {
        a = a.substring(b);
      } else {
        d.$(a);
        return;
      }
    } else {
      b = a.indexOf("<", e), -1 === b ? (d.aa(x(a)), a = "") : e < b ? e = b : ++e;
    }
    b = a.length - e;
    if (b === R) {
      d.$(a);
      return;
    }
    R = b;
  }
  w();
  H(B, d, "", !0);
}
;var S, T, U, M = {da:function() {
  S = T = [];
  U = [];
}, ca:function() {
  "number" !== typeof S[0] && S.unshift(11);
  return S;
}, $:function(a) {
  throw a;
}, ha:function(a) {
  S[0] = 9;
  S[1] = "<!DOCTYPE " + a + ">";
}, ja:function(a, d, e) {
  a = [a];
  d && (a[1] = d);
  T.push(a);
  e || (U.push(T), T = a);
}, ba:function(a, d, e) {
  e ? T.push("</" + a + ">") : d || a === T[0] && (T = U.pop());
}, aa:function(a) {
  T.push(a);
}, ga:function(a) {
  T.push([8, a]);
}, fa:function(a) {
  T.push([4, a]);
}, ia:function(a) {
  T.push([7, a]);
}};
module.exports = function(a) {
  M.da();
  L(a);
  return M.ca();
};

