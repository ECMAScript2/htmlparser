/* es2-html-parser@0.0.1
(c) 2024-2024 itozyun <itozyun@gmail.com> (https://outcloud.blogspot.com/)(undefined), MIT. */
var m = {xml:!0, svg:!0, math:!0}, w = {async:!0, autofocus:!0, checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, draggable:!0, hidden:!0, ismap:!0, loop:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, novalidate:!0, nowrap:!0, readonly:!0, required:!0, reversed:!0, scoped:!0, selected:!0}, y = {AREA:!0, BASE:!0, BASEFONT:!0, BR:!0, BGSOUND:!0, COL:!0, COMMAND:!0, FRAME:!0, HR:!0, IMG:!0, INPUT:!0, ISINDEX:!0, KEYGEN:!0, LINK:!0, META:!0, PARAM:!0, SOURCE:!0, TRACK:!0, EMBED:!0, WBR:!0, 
area:!0, base:!0, basefont:!0, br:!0, bgsound:!0, col:!0, command:!0, frame:!0, hr:!0, img:!0, input:!0, isindex:!0, keygen:!0, link:!0, meta:!0, param:!0, source:!0, track:!0, embed:!0, wbr:!0}, F = {SCRIPT:!0, STYLE:!0, TEXTAREA:!0, TITLE:!0, PLAINTEXT:!0, XMP:!0, script:!0, style:!0, textarea:!0, title:!0, plaintext:!0, xmp:!0}, I = {CAPTION:{ARTICLE:!0, SECTION:!0, NAV:!0, ASIDE:!0, H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, HEADER:!0, FOOTER:!0, ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, 
OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, 
DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, DD:{ARTICLE:!0, SECTION:!0, NAV:!0, ASIDE:!0, H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, HEADER:!0, FOOTER:!0, ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, 
PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, TABLE:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, DT:{ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, 
CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, TABLE:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, P:{A:!0, EM:!0, STRONG:!0, SMALL:!0, 
S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, HTML:{HEAD:!0, BODY:!0}, HEAD:{TITLE:!0, 
BASE:!0, BGSOUND:!0, LINK:!0, META:!0, STYLE:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0}, COLGROUP:{COL:!0}, OPTGROUP:{OPTION:!0}, OPTION:{}, TBODY:{TR:!0}, TR:{TH:!0, TD:!0}, RBC:{RB:!0, RP:!0, RT:!0}};
I.LI = I.TD = I.DD;
I.TH = I.DT;
I.RB = I.RP = I.RT = I.P;
I.TFOOT = I.THEAD = I.TBODY;
I.RTC = I.RBC;
var M = {a:2, b:2, c:2, d:2, e:2, f:2, g:2, h:2, i:2, j:2, k:2, l:2, m:2, n:2, o:2, p:2, q:2, r:2, s:2, t:2, u:2, v:2, w:2, x:2, y:2, z:2, A:1, B:1, C:1, D:1, E:1, F:1, G:1, H:1, I:1, J:1, K:1, L:1, M:1, N:1, O:1, P:1, Q:1, R:1, S:1, T:1, U:1, V:1, W:1, X:1, Y:1, Z:1, "\t":4, "\n":4, "\f":4, "\r":4, " ":4};
function N(a) {
  function p() {
    d && (q.$(A(a.substring(0, d))), a = a.substring(d), d = 0);
  }
  function r(f) {
    q.ba && q.ba(f);
  }
  function A(f) {
    return f.split("&lt;").join("<").split("&gt;").join(">").split("&amp;lt;").join("&lt;").split("&amp;gt;").join("&gt;");
  }
  function P(f, t, x) {
    for (var e = 0, n = x.length, g = 3, b, C; g < n && 2 !== e;) {
      C = x.charAt(g);
      switch(e) {
        case 0:
          M[C] & 4 ? e = 1 : ">" === C && (e = 2);
          e && (b = x.substring(2, g));
          break;
        case 1:
          ">" === C && (e = 2);
      }
      ++g;
    }
    return 2 === e ? (y[b] || J(f, t, u || v ? b : b.toUpperCase(), !1), g) : 0;
  }
  function J(f, t, x, e) {
    var n = 0, g = f.length;
    if (x) {
      for (n = g; 0 <= n && f[--n] !== x;) {
      }
    }
    if (0 <= n) {
      for (; n < g;) {
        t.aa(f[--g], e && !I[f[g]], !1), u && m[f[g]] && (u = !!t.fa);
      }
      f.length = n;
      if (v) {
        for (v = !1, g = n; g;) {
          if (0 < f[--g].indexOf(":")) {
            v = !0;
            break;
          }
        }
      }
    } else {
      t.aa(x, !1, !0);
    }
  }
  function Y(f, t, x, e) {
    function n(K, L) {
      function Q(Z) {
        return A(Z).split('\\"').join('"').split("\\'").join("'").split("&quot;").join('"').split("&apos;").join("'");
      }
      R[K] = !0 === L ? !0 : w[K.toLowerCase()] ? u ? Q(L || K) : !0 : Q(L || "");
      ++S;
    }
    function g() {
      (G = "/>" === e.substr(k, 2)) && ++k;
      return G;
    }
    for (var b = 1, C = e.length, k = 2, R = {}, S = 0, G = !1, h, B, z, D, T, H; k < C && 9 > b;) {
      h = e.charAt(k);
      switch(b) {
        case 1:
          if (M[h] & 4) {
            b = 2, B = e.substring(1, k);
          } else if (">" === h || g()) {
            b = 9, B = e.substring(1, k);
          }
          break;
        case 2:
          ">" === h || g() ? b = 9 : M[h] & 4 || (b = 3, z = k);
          break;
        case 3:
          if ("=" === h) {
            b = 5, D = e.substring(z, k);
          } else if (M[h] & 4) {
            b = 4, D = e.substring(z, k);
          } else if (">" === h || g()) {
            b = 9, n(e.substring(z, k), !0);
          }
          break;
        case 4:
          "=" === h ? b = 5 : ">" === h || g() ? (b = 9, n(D, !0)) : M[h] & 4 || (b = 3, n(D, !0), z = k);
          break;
        case 5:
          '"' === h || "'" === h ? (b = 6, T = h, z = k + 1) : M[h] & 4 || (b = 7, z = k);
          H = !1;
          break;
        case 6:
          H || h !== T || (b = 2, n(D, e.substring(z, k)));
          H = "\\" === h && !H;
          break;
        case 7:
          M[h] & 4 ? b = 2 : ">" === h && (b = 9), 7 !== b && n(D, e.substring(z, k));
      }
      ++k;
    }
    if (9 === b) {
      b = B.toUpperCase();
      u || (u = !!m[B]);
      v || (v = 0 < B.indexOf(":"));
      if (!u && !v) {
        for (; t;) {
          if (I[t] && !I[t][b]) {
            J(f, x, t, !1), t = f[f.length - 1];
          } else {
            break;
          }
        }
      }
      (G = G || !!y[b]) || (f[f.length] = u || v ? B : b);
      x.ka(u || v ? B : b, S ? R : null, G, k);
      return k;
    }
    return 0;
  }
  for (var q = O, u = !!O.fa, d = 0, v = !1, E = [], U = a.length - d, l, c; a;) {
    l = E[E.length - 1];
    if (F[l]) {
      if ("PLAINTEXT" === l || "plaintext" === l) {
        q.$(A(a)), a = "";
      } else {
        if (c = a.indexOf("</" + (u || v ? l : l.toLowerCase())), -1 === c && (c = a.indexOf("</" + (u || v ? l.toUpperCase() : l))), 0 <= c) {
          if (d = c, p(), l = P(E, q, a)) {
            a = a.substring(l);
          } else {
            r(a);
            return;
          }
        } else {
          r(a);
          return;
        }
      }
    } else if (a.indexOf("<!DOCTYPE ") === d) {
      if (p(), c = a.indexOf(">"), -1 !== c) {
        q.ia(a.substring(d, c + 1)), a = a.substring(c + 1);
      } else {
        r(a);
        return;
      }
    } else if (a.indexOf("<?") === d) {
      if (p(), c = a.indexOf("?>"), -1 !== c) {
        q.ja(A(a.substring(2, c))), a = a.substring(c + 2);
      } else {
        r(a);
        return;
      }
    } else if (a.indexOf("<![CDATA[") === d) {
      if (p(), c = a.indexOf("]]\x3e"), -1 !== c) {
        q.ga(A(a.substring(9, c))), a = a.substring(c + 3);
      } else {
        r(a);
        return;
      }
    } else if (a.indexOf("\x3c!--") === d) {
      if (p(), c = a.indexOf("--\x3e"), -1 !== c) {
        q.ha(A(a.substring(4, c))), a = a.substring(c + 3);
      } else {
        r(a);
        return;
      }
    } else if (a.indexOf("</") === d && M[a.charAt(d + 2)] & 3) {
      if (p(), l = P(E, q, a)) {
        a = a.substring(l);
      } else {
        r(a);
        return;
      }
    } else if ("<" === a.charAt(d) && M[a.charAt(d + 1)] & 3) {
      if (p(), l = Y(E, l, q, a)) {
        a = a.substring(l);
      } else {
        r(a);
        return;
      }
    } else {
      c = a.indexOf("<", d), -1 === c ? (q.$(A(a)), a = "") : d < c ? d = c : ++d;
    }
    l = a.length - d;
    if (l === U) {
      r(a);
      return;
    }
    U = l;
  }
  p();
  J(E, q, "", !0);
}
;var V, W, X, O = {ea:function() {
  V = W = [];
  X = [];
}, da:function() {
  "number" !== typeof V[0] && V.unshift(11);
  return V;
}, ba:function(a) {
  throw a;
}, ia:function(a) {
  V[0] = 9;
  V[1] = a;
}, ka:function(a, p, r) {
  a = [a];
  p && (a[1] = p);
  W.push(a);
  r || (X.push(W), W = a);
}, aa:function(a, p, r) {
  r ? W.push("</" + a + ">") : p || a === W[0] && (W = X.pop());
}, $:function(a) {
  W.push(a);
}, ha:function(a) {
  W.push([8, a]);
}, ga:function(a) {
  W.push([4, a]);
}, ja:function(a) {
  W.push([7, a]);
}};
module.exports = function(a) {
  O.ea();
  N(a);
  return O.da();
};

