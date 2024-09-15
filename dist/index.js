/* es2-html-parser@0.0.1
(c) 2024-2024 itozyun <itozyun@gmail.com> (https://outcloud.blogspot.com/)(undefined), MIT. */
var l = {a:2, b:2, c:2, d:2, e:2, f:2, g:2, h:2, i:2, j:2, k:2, l:2, m:2, n:2, o:2, p:2, q:2, r:2, s:2, t:2, u:2, v:2, w:2, x:2, y:2, z:2, A:1, B:1, C:1, D:1, E:1, F:1, G:1, H:1, I:1, J:1, K:1, L:1, M:1, N:1, O:1, P:1, Q:1, R:1, S:1, T:1, U:1, V:1, W:1, X:1, Y:1, Z:1, "\b":4, "\f":4, "\n":4, "\r":4, "\t":4, " ":4}, t = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, v = {xml:!0, svg:!0, math:!0}, 
D = {AREA:!0, BASE:!0, BASEFONT:!0, BR:!0, BGSOUND:!0, COL:!0, COMMAND:!0, FRAME:!0, HR:!0, IMG:!0, INPUT:!0, ISINDEX:!0, KEYGEN:!0, LINK:!0, META:!0, PARAM:!0, SOURCE:!0, TRACK:!0, EMBED:!0, WBR:!0, area:!0, base:!0, basefont:!0, br:!0, bgsound:!0, col:!0, command:!0, frame:!0, hr:!0, img:!0, input:!0, isindex:!0, keygen:!0, link:!0, meta:!0, param:!0, source:!0, track:!0, embed:!0, wbr:!0}, G = {SCRIPT:!0, STYLE:!0, TEXTAREA:!0, TITLE:!0, PLAINTEXT:!0, XMP:!0, script:!0, style:!0, textarea:!0, 
title:!0, plaintext:!0, xmp:!0}, K = {CAPTION:{ARTICLE:!0, SECTION:!0, NAV:!0, ASIDE:!0, H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, HEADER:!0, FOOTER:!0, ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, 
EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, DD:{ARTICLE:!0, SECTION:!0, NAV:!0, ASIDE:!0, H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, HEADER:!0, FOOTER:!0, ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, 
SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, TABLE:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, 
TEMPLATE:!0, CANVAS:!0}, DT:{ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, TABLE:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, 
SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, P:{A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, 
LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, HTML:{HEAD:!0, BODY:!0}, HEAD:{TITLE:!0, BASE:!0, BGSOUND:!0, LINK:!0, META:!0, STYLE:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLETE:!0}, COLGROUP:{COL:!0}, OPTGROUP:{OPTION:!0}, OPTION:{}, TBODY:{TR:!0}, TR:{TH:!0, TD:!0}, RBC:{RB:!0, RP:!0, RT:!0}};
K.LI = K.TD = K.DD;
K.TH = K.DT;
K.RB = K.RP = K.RT = K.P;
K.TFOOT = K.THEAD = K.TBODY;
K.RTC = K.RBC;
function L(a) {
  var c = M, e = 0;
  function x() {
    e && (c.aa(y(a.substring(0, e))), a = a.substring(e), e = 0);
  }
  function y(m) {
    return m.split("&lt;").join("<").split("&gt;").join(">").split("&amp;").join("&");
  }
  function N(m, q, u) {
    for (var f = 0, p = u.length, n = 3, b, z; n < p && 2 !== f;) {
      z = u.charAt(n);
      switch(f) {
        case 0:
          l[z] & 4 ? f = 1 : ">" === z && (f = 2);
          f && (b = u.substring(2, n));
          break;
        case 1:
          ">" === z && (f = 2);
      }
      ++n;
    }
    return 2 === f ? (D[b] || H(m, q, r ? b : b.toUpperCase(), !1), n) : 0;
  }
  function H(m, q, u, f) {
    var p = 0, n = m.length;
    if (u) {
      for (p = n; 0 <= p && m[--p] !== u;) {
      }
    }
    if (0 <= p) {
      for (; p < n;) {
        q.ba(m[--n], f && !K[m[n]], !1), r && v[m[n]] && (r = !!q.ea);
      }
      m.length = p;
    } else {
      q.ba(u, !1, !0);
    }
  }
  function V(m, q, u, f) {
    function p(I, J) {
      O[I] = !0 === J ? !0 : t[I.toLowerCase()] ? r ? y(J || I) : !0 : y(J || "");
      ++P;
    }
    function n() {
      (E = "/>" === f.substr(h, 2)) && ++h;
      return E;
    }
    for (var b = 1, z = f.length, h = 2, O = {}, P = 0, E = !1, g, A, w, B, Q, F; h < z && 9 > b;) {
      g = f.charAt(h);
      switch(b) {
        case 1:
          if (l[g] & 4) {
            b = 2, A = f.substring(1, h);
          } else if (">" === g || n()) {
            b = 9, A = f.substring(1, h);
          }
          break;
        case 2:
          ">" === g || n() ? b = 9 : l[g] & 4 || (b = 3, w = h);
          break;
        case 3:
          if ("=" === g) {
            b = 5, B = f.substring(w, h);
          } else if (l[g] & 4) {
            b = 4, B = f.substring(w, h);
          } else if (">" === g || n()) {
            b = 9, p(f.substring(w, h), !0);
          }
          break;
        case 4:
          "=" === g ? b = 5 : ">" === g || n() ? (b = 9, p(B, !0)) : l[g] & 4 || (b = 3, p(B, !0), w = h);
          break;
        case 5:
          '"' === g || "'" === g ? (b = 6, Q = g, w = h + 1) : l[g] & 4 || (b = 7, w = h);
          F = !1;
          break;
        case 6:
          F || g !== Q || (b = 2, p(B, f.substring(w, h)));
          F = "\\" === g && !F;
          break;
        case 7:
          l[g] & 4 ? b = 2 : ">" === g && (b = 9), 7 !== b && p(B, f.substring(w, h));
      }
      ++h;
    }
    if (9 === b) {
      b = A.toUpperCase();
      r || (r = !!v[A]);
      if (!r) {
        for (; q;) {
          if (K[q] && !K[q][b]) {
            H(m, u, q, !1), q = m[m.length - 1];
          } else {
            break;
          }
        }
      }
      (E = E || !!D[b]) || (m[m.length] = r ? A : b);
      u.ja(r ? A : b, P ? O : null, E, h);
      return h;
    }
    return 0;
  }
  for (var C = [], r = !!c.ea, R = a.length - e, k, d; a;) {
    k = C[C.length - 1];
    if (G[k]) {
      if ("PLAINTEXT" === k || "plaintext" === k) {
        c.aa(y(a)), a = "";
      } else {
        if (d = a.indexOf("</" + (r ? k : k.toLowerCase())), -1 === d && (d = a.indexOf("</" + (r ? k.toUpperCase() : k))), 0 <= d) {
          if (e = d, x(), k = N(C, c, a)) {
            a = a.substring(k);
          } else {
            c.$(a);
            return;
          }
        } else {
          c.$(a);
          return;
        }
      }
    } else if (a.indexOf("<!DOCTYPE ") === e) {
      if (x(), d = a.indexOf(">"), -1 !== d) {
        c.ha(a.substring(10, d)), a = a.substring(d + 1);
      } else {
        c.$(a);
        return;
      }
    } else if (a.indexOf("<?") === e) {
      if (x(), d = a.indexOf("?>"), -1 !== d) {
        c.ia(y(a.substring(2, d))), a = a.substring(d + 2);
      } else {
        c.$(a);
        return;
      }
    } else if (a.indexOf("<![CDATA[") === e) {
      if (x(), d = a.indexOf("]]\x3e"), -1 !== d) {
        c.fa(y(a.substring(9, d))), a = a.substring(d + 3);
      } else {
        c.$(a);
        return;
      }
    } else if (a.indexOf("\x3c!--") === e) {
      if (x(), d = a.indexOf("--\x3e"), -1 !== d) {
        c.ga(y(a.substring(4, d))), a = a.substring(d + 3);
      } else {
        c.$(a);
        return;
      }
    } else if (a.indexOf("</") === e && l[a.charAt(e + 2)] & 3) {
      if (x(), k = N(C, c, a)) {
        a = a.substring(k);
      } else {
        c.$(a);
        return;
      }
    } else if ("<" === a.charAt(e) && l[a.charAt(e + 1)] & 3) {
      if (x(), k = V(C, k, c, a)) {
        a = a.substring(k);
      } else {
        c.$(a);
        return;
      }
    } else {
      d = a.indexOf("<", e), -1 === d ? (c.aa(y(a)), a = "") : e < d ? e = d : ++e;
    }
    k = a.length - e;
    if (k === R) {
      c.$(a);
      return;
    }
    R = k;
  }
  x();
  H(C, c, "", !0);
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
}, ja:function(a, c, e) {
  a = [a];
  c && (a[1] = c);
  T.push(a);
  e || (U.push(T), T = a);
}, ba:function(a, c, e) {
  e ? T.push("</" + a + ">") : c || a === T[0] && (T = U.pop());
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

