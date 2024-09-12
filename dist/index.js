/* es2-html-parser@0.0.1
(c) 2024-2024 itozyun <itozyun@gmail.com> (https://outcloud.blogspot.com/)(undefined), MIT. */
var k = {CAPTION:{ARTICLE:!0, SECTION:!0, NAV:!0, ASIDE:!0, H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, HEADER:!0, FOOTER:!0, ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, 
AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, DD:{ARTICLE:!0, SECTION:!0, NAV:!0, ASIDE:!0, H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, HEADER:!0, FOOTER:!0, ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, 
DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, TABLE:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, DT:{ADDRESS:!0, 
P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, TABLE:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, 
KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, P:{A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, LABEL:!0, INPUT:!0, BUTTON:!0, 
SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, HTML:{HEAD:!0, BODY:!0}, HEAD:{TITLE:!0, BASE:!0, BGSOUND:!0, LINK:!0, META:!0, STYLE:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLETE:!0}, COLGROUP:{COL:!0}, OPTGROUP:{OPTION:!0}, OPTION:{}, TBODY:{TR:!0}, TR:{TH:!0, TD:!0}, RBC:{RB:!0, RP:!0, RT:!0}};
k.LI = k.TD = k.DD;
k.TH = k.DT;
k.RB = k.RP = k.RT = k.P;
k.TFOOT = k.THEAD = k.TBODY;
k.RTC = k.RBC;
function q(a) {
  var d = u, e = 0;
  function w() {
    e && (d.aa(x(a.substring(0, e))), a = a.substring(e), e = 0);
  }
  function x(m) {
    return m.split("&lt;").join("<").split("&gt;").join(">").split("&amp;").join("&");
  }
  function L(m, p, r) {
    for (var f = 1, n = r.length, l = 3, c, z; l < n && 3 !== f;) {
      z = r.charAt(l);
      switch(f) {
        case 1:
          C[z] & 4 ? f = 2 : ">" === z && (f = 3);
          1 !== f && (c = r.substring(2, l));
          break;
        case 2:
          ">" === z && (f = 3);
      }
      ++l;
    }
    return 3 === f ? (H(m, p, t ? c : c.toUpperCase(), !1), l) : 0;
  }
  function H(m, p, r, f) {
    var n = 0, l = m.length;
    if (r) {
      for (n = l; 0 <= n && m[--n] !== r;) {
      }
    }
    if (0 <= n) {
      for (; n < l;) {
        p.ba(m[--l], f && !k[m[l]], !1), t && G[m[l]] && (t = !!p.ea);
      }
      m.length = n;
    } else {
      p.ba(r, !1, !0);
    }
  }
  function S(m, p, r, f) {
    function n(I, J) {
      N[I] = !0 === J ? !0 : K[I.toLowerCase()] ? t ? x(J || I) : !0 : x(J || "");
      ++O;
    }
    function l() {
      (D = "/>" === f.substr(h, 2)) && ++h;
      return D;
    }
    for (var c = 1, z = f.length, h = 2, N = {}, O = 0, D = !1, g, A, v, y, P, F; h < z && 9 > c;) {
      g = f.charAt(h);
      switch(c) {
        case 1:
          if (C[g] & 4) {
            c = 2, A = f.substring(1, h);
          } else if (">" === g || l()) {
            c = 9, A = f.substring(1, h);
          }
          break;
        case 2:
          ">" === g || l() ? c = 9 : C[g] & 4 || (c = 3, v = h);
          break;
        case 3:
          if ("=" === g) {
            c = 5, y = f.substring(v, h);
          } else if (C[g] & 4) {
            c = 4, y = f.substring(v, h);
          } else if (">" === g || l()) {
            c = 9, n(f.substring(v, h), !0);
          }
          break;
        case 4:
          "=" === g ? c = 5 : ">" === g || l() ? (c = 9, n(y, !0)) : C[g] & 4 || (c = 3, n(y, !0), v = h);
          break;
        case 5:
          '"' === g || "'" === g ? (c = 6, P = g, v = h + 1) : C[g] & 4 || (c = 7, v = h);
          F = !1;
          break;
        case 6:
          F || g !== P || (c = 2, n(y, f.substring(v, h)));
          F = "\\" === g && !F;
          break;
        case 7:
          C[g] & 4 ? c = 2 : ">" === g ? c = 9 : !M[y] && l() && (c = 9), 7 !== c && n(y, f.substring(v, h));
      }
      ++h;
    }
    if (9 === c) {
      c = A.toUpperCase();
      t || (t = !!G[A]);
      if (!t) {
        for (; p;) {
          if (k[p] && !k[p][c]) {
            H(m, r, p, !1), p = m[m.length - 1];
          } else {
            break;
          }
        }
      }
      (D = D || !!R[c]) || (m[m.length] = t ? A : c);
      r.ja(t ? A : c, O ? N : null, D, h);
      return h;
    }
    return 0;
  }
  for (var B = [], t = !!d.ea, Q = a.length - e, b, E; a;) {
    (b = E = B[B.length - 1]) && t && (E = b.toUpperCase());
    if (T[E]) {
      if ("PLAINTEXT" === E) {
        d.aa(x(a)), a = "";
      } else {
        if (b = a.toUpperCase().indexOf("</" + E), 0 <= b) {
          if (e = b, w(), b = L(B, d, a)) {
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
    } else if (a.indexOf("</") === e && C[a.charAt(e + 2)] & 3) {
      if (w(), b = L(B, d, a)) {
        a = a.substring(b);
      } else {
        d.$(a);
        return;
      }
    } else if ("<" === a.charAt(e) && C[a.charAt(e + 1)] & 3) {
      if (w(), b = S(B, b, d, a)) {
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
  H(B, d, "", !0);
}
var G = {xml:!0, svg:!0, math:!0}, R = {AREA:!0, BASE:!0, BASEFONT:!0, BR:!0, BGSOUND:!0, COL:!0, ka:!0, FRAME:!0, HR:!0, IMG:!0, INPUT:!0, ISINDEX:!0, KEYGEN:!0, LINK:!0, META:!0, PARAM:!0, SOURCE:!0, TRACK:!0, EMBED:!0, WBR:!0}, T = {SCRIPT:!0, STYLE:!0, PLAINTEXT:!0, XMP:!0, TEXTAREA:!0}, M = {action:!0, archive:!0, background:!0, cite:!0, classid:!0, codebase:!0, data:!0, href:!0, longdesc:!0, profile:!0, src:!0, usemap:!0}, K = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, 
multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, C = {a:2, b:2, c:2, d:2, e:2, f:2, g:2, h:2, i:2, j:2, k:2, l:2, m:2, n:2, o:2, p:2, q:2, r:2, s:2, t:2, u:2, v:2, w:2, x:2, y:2, z:2, A:1, B:1, C:1, D:1, E:1, F:1, G:1, H:1, I:1, J:1, K:1, L:1, M:1, N:1, O:1, P:1, Q:1, R:1, S:1, T:1, U:1, V:1, W:1, X:1, Y:1, Z:1, "\b":4, "\f":4, "\n":4, "\r":4, "\t":4, " ":4};
var U, V, W, u = {da:function() {
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
  u.da();
  q(a);
  return u.ca();
};

