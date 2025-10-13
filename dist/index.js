/* es2-html-parser@1.2.0
(c) 2024-2025 itozyun <itozyun@gmail.com>(https://outcloud.blogspot.com/), MIT. */
var k = {xml:!0, svg:!0, math:!0}, n = {async:!0, autofocus:!0, checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, draggable:!0, hidden:!0, ismap:!0, loop:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, novalidate:!0, nowrap:!0, readonly:!0, required:!0, reversed:!0, scoped:!0, selected:!0}, r = {AREA:!0, BASE:!0, BASEFONT:!0, BR:!0, BGSOUND:!0, COL:!0, COMMAND:!0, FRAME:!0, HR:!0, IMG:!0, INPUT:!0, ISINDEX:!0, KEYGEN:!0, LINK:!0, META:!0, PARAM:!0, SOURCE:!0, TRACK:!0, EMBED:!0, WBR:!0, 
area:!0, base:!0, basefont:!0, br:!0, bgsound:!0, col:!0, command:!0, frame:!0, hr:!0, img:!0, input:!0, isindex:!0, keygen:!0, link:!0, meta:!0, param:!0, source:!0, track:!0, embed:!0, wbr:!0}, F = {MAP:!0, DL:!0, OL:!0, UL:!0, SELECT:!0, OPTGROUP:!0, TABLE:!0, THEAD:!0, TFOOT:!0, TBODY:!0, COLGROUP:!0, TR:!0, HEAD:!0, MENU:!0, FRAMESET:!0, map:!0, dl:!0, ol:!0, ul:!0, select:!0, optgroup:!0, table:!0, thead:!0, tfoot:!0, tbody:!0, colgroup:!0, tr:!0, head:!0, menu:!0, frameset:!0}, aa = {SCRIPT:!0, 
STYLE:!0, TEXTAREA:!0, TITLE:!0, PLAINTEXT:!0, XMP:!0, LISTING:!0, script:!0, style:!0, textarea:!0, title:!0, plaintext:!0, xmp:!0, listing:!0}, ba = {TEXTAREA:!0, TITLE:!0, LISTING:!0, textarea:!0, title:!0, listing:!0}, G = {CAPTION:{ARTICLE:!0, SECTION:!0, NAV:!0, ASIDE:!0, H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, HEADER:!0, FOOTER:!0, ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, 
DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, DD:{ARTICLE:!0, SECTION:!0, 
NAV:!0, ASIDE:!0, H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, HEADER:!0, FOOTER:!0, ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, 
TABLE:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, DT:{ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, 
SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, TABLE:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, P:{A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, 
I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, HTML:{HEAD:!0, BODY:!0, FRAMESET:!0}, HEAD:{TITLE:!0, BASE:!0, BGSOUND:!0, LINK:!0, META:!0, STYLE:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0}, 
COLGROUP:{COL:!0}, OPTGROUP:{OPTION:!0}, OPTION:{}, TBODY:{TR:!0}, TR:{TH:!0, TD:!0}, RBC:{RB:!0, RP:!0, RT:!0}};
G.LI = G.TD = G.DD;
G.TH = G.DT;
G.RB = G.RP = G.RT = G.P;
G.TFOOT = G.THEAD = G.TBODY;
G.RTC = G.RBC;
var S = {a:2, b:2, c:2, d:2, e:2, f:2, g:2, h:2, i:2, j:2, k:2, l:2, m:2, n:2, o:2, p:2, q:2, r:2, s:2, t:2, u:2, v:2, w:2, x:2, y:2, z:2, A:1, B:1, C:1, D:1, E:1, F:1, G:1, H:1, I:1, J:1, K:1, L:1, M:1, N:1, O:1, P:1, Q:1, R:1, S:1, T:1, U:1, V:1, W:1, X:1, Y:1, Z:1, "\t":4, "\n":4, "\f":4, "\r":4, " ":4};
function T(a) {
  return a.split("&lt;").join("<").split("&gt;").join(">").split("&amp;lt;").join("&lt;").split("&amp;gt;").join("&gt;");
}
function U(a) {
  return T(a).split('\\"').join('"').split("\\'").join("'");
}
function ca(a, A) {
  function v() {
    c = a.indexOf("<", c + 1);
    -1 === c && (c = a.length, B());
  }
  function B() {
    if (c) {
      var e = a.substr(0, c);
      a = a.substr(c);
      c = 0;
      (H || m && !F[m]) && p.ja(Q && !ba[m] ? e : T(e));
    }
  }
  function C(e) {
    p.aa && p.aa(e);
  }
  function da(e) {
    for (var f = 0, w = a.length, b = 3, h, d; b < w && 2 !== f; ++b) {
      switch(h = a.charAt(b), f) {
        case 0:
          S[h] & 4 ? f = 1 : ">" === h && (f = 2);
          f && (d = a.substring(2, b));
          break;
        case 1:
          ">" === h && (f = 2);
      }
    }
    if (2 === f) {
      a = a.substr(b), r[d] || R(e, D || t || z ? d : d.toUpperCase(), !1);
    } else {
      return C(a), !0;
    }
  }
  function R(e, f, w) {
    var b = 0, h = e.length;
    if (f) {
      for (b = h; 0 <= b && e[--b] !== f;) {
      }
    }
    if (0 <= b) {
      for (; b < h;) {
        f = p;
        var d = f.$, K = e[--h], q;
        if (q = w) {
          q = e[h];
          if (D || t) {
            q = q.toUpperCase();
          }
          q = !G[q];
        }
        d.call(f, K, q, !1);
        t && k[e[h]] && (t = !1);
      }
      e.length = b;
      if (z) {
        for (z = !1, h = b; h;) {
          if (0 < e[--h].indexOf(":")) {
            z = !0;
            break;
          }
        }
      }
    } else {
      p.$(f, !1, !0);
    }
    m = e[e.length - 1];
  }
  function ea(e) {
    function f(L, M) {
      K[L] = !0 === M ? t ? L : M : n[L.toLowerCase()] ? t ? U(M || L) : !0 : U(M || "");
      ++q;
    }
    function w() {
      (I = "/>" === a.substr(d, 2)) && ++d;
      return I;
    }
    for (var b = 1, h = a.length, d = 2, K = {}, q = 0, I = !1, g, x, u, E, X, N, O; d < h && 9 > b; ++d) {
      switch(g = a.charAt(d), b) {
        case 1:
          if (S[g] & 4) {
            b = 2, x = a.substring(1, d);
          } else if (">" === g || w()) {
            b = 9, x = a.substring(1, d);
          }
          break;
        case 2:
          ">" === g || w() ? b = 9 : S[g] & 4 || (b = 3, u = d);
          break;
        case 3:
          if ("=" === g) {
            b = 5, E = a.substring(u, d);
          } else if (S[g] & 4) {
            b = 4, E = a.substring(u, d);
          } else if (">" === g || w()) {
            b = 9, f(a.substring(u, d), !0);
          }
          break;
        case 4:
          "=" === g ? b = 5 : ">" === g || w() ? (b = 9, f(E, !0)) : S[g] & 4 || (b = 3, f(E, !0), u = d);
          break;
        case 5:
          '"' === g || "'" === g ? (b = 6, X = g, u = d + 1) : S[g] & 4 || (b = 7, u = d);
          N = !1;
          break;
        case 6:
          N || g !== X || (b = 2, f(E, a.substring(u, d)));
          N = "\\" === g && !N;
          break;
        case 7:
          S[g] & 4 ? b = 2 : ">" === g && (b = 9), 7 !== b && f(E, a.substring(u, d));
      }
    }
    if (9 === b) {
      t || (t = !!k[x]);
      z || (z = 0 < x.indexOf(":"));
      b = t || z;
      if (!b) {
        for (O = x.toUpperCase(); m;) {
          if (h = m.toUpperCase(), G[h] && !G[h][O]) {
            R(e, m, !1);
          } else {
            break;
          }
        }
      }
      (I = I || !!r[x]) || (m = e[e.length] = D || b ? x : O);
      a = a.substr(d);
      p.ia(D || b ? x : O, q ? K : null, I, d);
    } else {
      return C(a), !0;
    }
  }
  var p = V, D = !1, J = [], H = !0, t = !1, z = !1, c = -1, m = J[J.length - 1], P;
  for (v(); a;) {
    var Q = aa[m];
    if (a.indexOf("<?") === c) {
      H && a.length === A && a.indexOf("<?xml ") === c && (H = !1, D = !0);
      B();
      var l = a.indexOf("?>");
      if (-1 !== l) {
        var y = a.substring(2, l);
        a = a.substr(l + 2);
        p.ha(T(y));
      } else {
        C(a);
        return;
      }
    } else if (a.indexOf("</", c) === c && S[a.charAt(c + 2)] & 3) {
      if (Q && ("PLAINTEXT" === m || "plaintext" === m ? P = !0 : a.indexOf(m.toLowerCase(), c) !== c + 2 && a.indexOf(m.toUpperCase(), c) !== c + 2 && (P = !0)), P) {
        v(), P = !1;
      } else {
        if (B(), da(J)) {
          return;
        }
      }
    } else if (Q) {
      v();
    } else if ("<" === a.charAt(c) && S[a.charAt(c + 1)] & 3) {
      if (B(), ea(J)) {
        return;
      }
    } else if (a.indexOf("\x3c!--") === c) {
      if (B(), l = a.indexOf("--\x3e"), -1 !== l) {
        y = a.substring(4, l), a = a.substr(l + 3), p.fa(T(y));
      } else {
        C(a);
        return;
      }
    } else if (a.indexOf("<![CDATA[") === c) {
      if (B(), l = a.indexOf("]]\x3e"), -1 !== l) {
        y = a.substring(9, l), a = a.substr(l + 3), p.ea(T(y));
      } else {
        C(a);
        return;
      }
    } else if (a.indexOf("<!DOCTYPE ") === c || a.indexOf("<!doctype ") === c) {
      if (a = a.substr(c), c = 0, l = a.indexOf(">"), -1 !== l) {
        y = a.substring(0, l + 1), a = a.substr(l + 1), H && (D = 0 < y.indexOf("-//W3C//DTD XHTML ")), H = !1, p.ga(y);
      } else {
        C(a);
        return;
      }
    } else {
      v();
    }
  }
  R(J, "", !0);
}
;var W, Y, Z, V = {da:function() {
  W = Y = [];
  Z = [];
}, ba:function() {
  "number" !== typeof W[0] && W.unshift(11);
  return W;
}, aa:function(a) {
  throw a;
}, ga:function(a) {
  W[0] = 9;
  W[1] = a;
}, ia:function(a, A, v) {
  a = [a];
  A && (a[1] = A);
  Y.push(a);
  v || (Z.push(Y), Y = a);
}, $:function(a, A, v) {
  v ? Y.push("</" + a + ">") : A || a === Y[0] && (Y = Z.pop());
}, ja:function(a) {
  Y.push(a);
}, fa:function(a) {
  Y.push([8, a]);
}, ea:function(a) {
  Y.push([4, a]);
}, ha:function(a) {
  Y.push([7, a]);
}};
module.exports = function(a) {
  V.da();
  ca(a, a.length);
  return V.ba();
};

