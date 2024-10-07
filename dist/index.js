/* es2-html-parser@0.0.1
(c) 2024-2024 itozyun <itozyun@gmail.com> (https://outcloud.blogspot.com/)(undefined), MIT. */
var m = {xml:!0, svg:!0, math:!0}, u = {async:!0, autofocus:!0, checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, draggable:!0, hidden:!0, ismap:!0, loop:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, novalidate:!0, nowrap:!0, readonly:!0, required:!0, reversed:!0, scoped:!0, selected:!0}, w = {AREA:!0, BASE:!0, BASEFONT:!0, BR:!0, BGSOUND:!0, COL:!0, COMMAND:!0, FRAME:!0, HR:!0, IMG:!0, INPUT:!0, ISINDEX:!0, KEYGEN:!0, LINK:!0, META:!0, PARAM:!0, SOURCE:!0, TRACK:!0, EMBED:!0, WBR:!0, 
area:!0, base:!0, basefont:!0, br:!0, bgsound:!0, col:!0, command:!0, frame:!0, hr:!0, img:!0, input:!0, isindex:!0, keygen:!0, link:!0, meta:!0, param:!0, source:!0, track:!0, embed:!0, wbr:!0}, E = {SCRIPT:!0, STYLE:!0, TEXTAREA:!0, TITLE:!0, PLAINTEXT:!0, XMP:!0, script:!0, style:!0, textarea:!0, title:!0, plaintext:!0, xmp:!0}, H = {CAPTION:{ARTICLE:!0, SECTION:!0, NAV:!0, ASIDE:!0, H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, HEADER:!0, FOOTER:!0, ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, 
OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, 
DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, DD:{ARTICLE:!0, SECTION:!0, NAV:!0, ASIDE:!0, H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, HEADER:!0, FOOTER:!0, ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, 
PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, TABLE:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, DT:{ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, 
CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, TABLE:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, P:{A:!0, EM:!0, STRONG:!0, SMALL:!0, 
S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, HTML:{HEAD:!0, BODY:!0}, HEAD:{TITLE:!0, 
BASE:!0, BGSOUND:!0, LINK:!0, META:!0, STYLE:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLETE:!0}, COLGROUP:{COL:!0}, OPTGROUP:{OPTION:!0}, OPTION:{}, TBODY:{TR:!0}, TR:{TH:!0, TD:!0}, RBC:{RB:!0, RP:!0, RT:!0}};
H.LI = H.TD = H.DD;
H.TH = H.DT;
H.RB = H.RP = H.RT = H.P;
H.TFOOT = H.THEAD = H.TBODY;
H.RTC = H.RBC;
var L = {a:2, b:2, c:2, d:2, e:2, f:2, g:2, h:2, i:2, j:2, k:2, l:2, m:2, n:2, o:2, p:2, q:2, r:2, s:2, t:2, u:2, v:2, w:2, x:2, y:2, z:2, A:1, B:1, C:1, D:1, E:1, F:1, G:1, H:1, I:1, J:1, K:1, L:1, M:1, N:1, O:1, P:1, Q:1, R:1, S:1, T:1, U:1, V:1, W:1, X:1, Y:1, Z:1, "\t":4, "\n":4, "\f":4, "\r":4, " ":4};
function M(a) {
  var c = N, e = 0;
  function y() {
    e && (c.aa(z(a.substring(0, e))), a = a.substring(e), e = 0);
  }
  function z(n) {
    return n.split("&lt;").join("<").split("&gt;").join(">").split("&amp;lt;").join("&lt;").split("&amp;gt;").join("&gt;");
  }
  function O(n, q, v) {
    for (var f = 0, p = v.length, g = 3, b, B; g < p && 2 !== f;) {
      B = v.charAt(g);
      switch(f) {
        case 0:
          L[B] & 4 ? f = 1 : ">" === B && (f = 2);
          f && (b = v.substring(2, g));
          break;
        case 1:
          ">" === B && (f = 2);
      }
      ++g;
    }
    return 2 === f ? (w[b] || I(n, q, r || t ? b : b.toUpperCase(), !1), g) : 0;
  }
  function I(n, q, v, f) {
    var p = 0, g = n.length;
    if (v) {
      for (p = g; 0 <= p && n[--p] !== v;) {
      }
    }
    if (0 <= p) {
      for (; p < g;) {
        q.ba(n[--g], f && !H[n[g]], !1), r && m[n[g]] && (r = !!q.ea);
      }
      n.length = p;
      if (t) {
        for (t = !1, g = p; g;) {
          if (0 < n[--g].indexOf(":")) {
            t = !0;
            break;
          }
        }
      }
    } else {
      q.ba(v, !1, !0);
    }
  }
  function X(n, q, v, f) {
    function p(J, K) {
      function P(Y) {
        return z(Y).split('\\"').join('"').split("\\'").join("'").split("&quot;").join('"').split("&apos;").join("'");
      }
      Q[J] = !0 === K ? !0 : u[J.toLowerCase()] ? r ? P(K || J) : !0 : P(K || "");
      ++R;
    }
    function g() {
      (F = "/>" === f.substr(k, 2)) && ++k;
      return F;
    }
    for (var b = 1, B = f.length, k = 2, Q = {}, R = 0, F = !1, h, A, x, C, S, G; k < B && 9 > b;) {
      h = f.charAt(k);
      switch(b) {
        case 1:
          if (L[h] & 4) {
            b = 2, A = f.substring(1, k);
          } else if (">" === h || g()) {
            b = 9, A = f.substring(1, k);
          }
          break;
        case 2:
          ">" === h || g() ? b = 9 : L[h] & 4 || (b = 3, x = k);
          break;
        case 3:
          if ("=" === h) {
            b = 5, C = f.substring(x, k);
          } else if (L[h] & 4) {
            b = 4, C = f.substring(x, k);
          } else if (">" === h || g()) {
            b = 9, p(f.substring(x, k), !0);
          }
          break;
        case 4:
          "=" === h ? b = 5 : ">" === h || g() ? (b = 9, p(C, !0)) : L[h] & 4 || (b = 3, p(C, !0), x = k);
          break;
        case 5:
          '"' === h || "'" === h ? (b = 6, S = h, x = k + 1) : L[h] & 4 || (b = 7, x = k);
          G = !1;
          break;
        case 6:
          G || h !== S || (b = 2, p(C, f.substring(x, k)));
          G = "\\" === h && !G;
          break;
        case 7:
          L[h] & 4 ? b = 2 : ">" === h && (b = 9), 7 !== b && p(C, f.substring(x, k));
      }
      ++k;
    }
    if (9 === b) {
      b = A.toUpperCase();
      r || (r = !!m[A]);
      t || (t = 0 < A.indexOf(":"));
      if (!r && !t) {
        for (; q;) {
          if (H[q] && !H[q][b]) {
            I(n, v, q, !1), q = n[n.length - 1];
          } else {
            break;
          }
        }
      }
      (F = F || !!w[b]) || (n[n.length] = r || t ? A : b);
      v.ja(r || t ? A : b, R ? Q : null, F, k);
      return k;
    }
    return 0;
  }
  for (var D = [], r = !!c.ea, t = !1, T = a.length - e, l, d; a;) {
    l = D[D.length - 1];
    if (E[l]) {
      if ("PLAINTEXT" === l || "plaintext" === l) {
        c.aa(z(a)), a = "";
      } else {
        if (d = a.indexOf("</" + (r || t ? l : l.toLowerCase())), -1 === d && (d = a.indexOf("</" + (r || t ? l.toUpperCase() : l))), 0 <= d) {
          if (e = d, y(), l = O(D, c, a)) {
            a = a.substring(l);
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
      if (y(), d = a.indexOf(">"), -1 !== d) {
        c.ha(a.substring(e, d + 1)), a = a.substring(d + 1);
      } else {
        c.$(a);
        return;
      }
    } else if (a.indexOf("<?") === e) {
      if (y(), d = a.indexOf("?>"), -1 !== d) {
        c.ia(z(a.substring(2, d))), a = a.substring(d + 2);
      } else {
        c.$(a);
        return;
      }
    } else if (a.indexOf("<![CDATA[") === e) {
      if (y(), d = a.indexOf("]]\x3e"), -1 !== d) {
        c.fa(z(a.substring(9, d))), a = a.substring(d + 3);
      } else {
        c.$(a);
        return;
      }
    } else if (a.indexOf("\x3c!--") === e) {
      if (y(), d = a.indexOf("--\x3e"), -1 !== d) {
        c.ga(z(a.substring(4, d))), a = a.substring(d + 3);
      } else {
        c.$(a);
        return;
      }
    } else if (a.indexOf("</") === e && L[a.charAt(e + 2)] & 3) {
      if (y(), l = O(D, c, a)) {
        a = a.substring(l);
      } else {
        c.$(a);
        return;
      }
    } else if ("<" === a.charAt(e) && L[a.charAt(e + 1)] & 3) {
      if (y(), l = X(D, l, c, a)) {
        a = a.substring(l);
      } else {
        c.$(a);
        return;
      }
    } else {
      d = a.indexOf("<", e), -1 === d ? (c.aa(z(a)), a = "") : e < d ? e = d : ++e;
    }
    l = a.length - e;
    if (l === T) {
      c.$(a);
      return;
    }
    T = l;
  }
  y();
  I(D, c, "", !0);
}
;var U, V, W, N = {da:function() {
  U = V = [];
  W = [];
}, ca:function() {
  "number" !== typeof U[0] && U.unshift(11);
  return U;
}, $:function(a) {
  throw a;
}, ha:function(a) {
  U[0] = 9;
  U[1] = a;
}, ja:function(a, c, e) {
  a = [a];
  c && (a[1] = c);
  V.push(a);
  e || (W.push(V), V = a);
}, ba:function(a, c, e) {
  e ? V.push("</" + a + ">") : c || a === V[0] && (V = W.pop());
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
  N.da();
  M(a);
  return N.ca();
};

