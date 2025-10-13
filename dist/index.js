/* es2-html-parser@1.1.1
(c) 2024-2025 itozyun <itozyun@gmail.com>(https://outcloud.blogspot.com/), MIT. */
var h = {xml:!0, svg:!0, math:!0}, n = {async:!0, autofocus:!0, checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, draggable:!0, hidden:!0, ismap:!0, loop:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, novalidate:!0, nowrap:!0, readonly:!0, required:!0, reversed:!0, scoped:!0, selected:!0}, q = {AREA:!0, BASE:!0, BASEFONT:!0, BR:!0, BGSOUND:!0, COL:!0, COMMAND:!0, FRAME:!0, HR:!0, IMG:!0, INPUT:!0, ISINDEX:!0, KEYGEN:!0, LINK:!0, META:!0, PARAM:!0, SOURCE:!0, TRACK:!0, EMBED:!0, WBR:!0, 
area:!0, base:!0, basefont:!0, br:!0, bgsound:!0, col:!0, command:!0, frame:!0, hr:!0, img:!0, input:!0, isindex:!0, keygen:!0, link:!0, meta:!0, param:!0, source:!0, track:!0, embed:!0, wbr:!0}, D = {MAP:!0, DL:!0, OL:!0, UL:!0, SELECT:!0, OPTGROUP:!0, TABLE:!0, THEAD:!0, TFOOT:!0, TBODY:!0, COLGROUP:!0, TR:!0, HEAD:!0, MENU:!0, map:!0, dl:!0, ol:!0, ul:!0, select:!0, optgroup:!0, table:!0, thead:!0, tfoot:!0, tbody:!0, colgroup:!0, tr:!0, head:!0, menu:!0}, aa = {SCRIPT:!0, STYLE:!0, TEXTAREA:!0, 
TITLE:!0, PLAINTEXT:!0, XMP:!0, LISTING:!0, script:!0, style:!0, textarea:!0, title:!0, plaintext:!0, xmp:!0, listing:!0}, ba = {TEXTAREA:!0, TITLE:!0, LISTING:!0, textarea:!0, title:!0, listing:!0}, E = {CAPTION:{ARTICLE:!0, SECTION:!0, NAV:!0, ASIDE:!0, H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, HEADER:!0, FOOTER:!0, ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, 
VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, DD:{ARTICLE:!0, SECTION:!0, NAV:!0, ASIDE:!0, H1:!0, H2:!0, 
H3:!0, H4:!0, H5:!0, H6:!0, HEADER:!0, FOOTER:!0, ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, TABLE:!0, FORM:!0, LABEL:!0, 
INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, DT:{ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, 
DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, TABLE:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, P:{A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, 
RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, HTML:{HEAD:!0, BODY:!0}, HEAD:{TITLE:!0, BASE:!0, BGSOUND:!0, LINK:!0, META:!0, STYLE:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0}, COLGROUP:{COL:!0}, OPTGROUP:{OPTION:!0}, 
OPTION:{}, TBODY:{TR:!0}, TR:{TH:!0, TD:!0}, RBC:{RB:!0, RP:!0, RT:!0}};
E.LI = E.TD = E.DD;
E.TH = E.DT;
E.RB = E.RP = E.RT = E.P;
E.TFOOT = E.THEAD = E.TBODY;
E.RTC = E.RBC;
var Q = {a:2, b:2, c:2, d:2, e:2, f:2, g:2, h:2, i:2, j:2, k:2, l:2, m:2, n:2, o:2, p:2, q:2, r:2, s:2, t:2, u:2, v:2, w:2, x:2, y:2, z:2, A:1, B:1, C:1, D:1, E:1, F:1, G:1, H:1, I:1, J:1, K:1, L:1, M:1, N:1, O:1, P:1, Q:1, R:1, S:1, T:1, U:1, V:1, W:1, X:1, Y:1, Z:1, "\t":4, "\n":4, "\f":4, "\r":4, " ":4};
function R(a) {
  return a.split("&lt;").join("<").split("&gt;").join(">").split("&amp;lt;").join("&lt;").split("&amp;gt;").join("&gt;");
}
function S(a) {
  return R(a).split('\\"').join('"').split("\\'").join("'");
}
function ca(a, z) {
  function t() {
    c = a.indexOf("<", c + 1);
    -1 === c && (c = a.length, A());
  }
  function A() {
    if (c) {
      var e = a.substr(0, c);
      a = a.substr(c);
      c = 0;
      (F || m && !D[m]) && p.ja(O && !ba[m] ? e : R(e));
    }
  }
  function B(e) {
    p.aa && p.aa(e);
  }
  function da(e) {
    for (var k = 0, u = a.length, b = 3, g, d; b < u && 2 !== k; ++b) {
      switch(g = a.charAt(b), k) {
        case 0:
          Q[g] & 4 ? k = 1 : ">" === g && (k = 2);
          k && (d = a.substring(2, b));
          break;
        case 1:
          ">" === g && (k = 2);
      }
    }
    if (2 === k) {
      a = a.substr(b), q[d] || P(e, G || v || y ? d : d.toUpperCase(), !1);
    } else {
      return B(a), !0;
    }
  }
  function P(e, k, u) {
    var b = 0, g = e.length;
    if (k) {
      for (b = g; 0 <= b && e[--b] !== k;) {
      }
    }
    if (0 <= b) {
      for (; b < g;) {
        p.$(e[--g], u && !E[e[g]], !1), v && h[e[g]] && (v = !1);
      }
      e.length = b;
      if (y) {
        for (y = !1, g = b; g;) {
          if (0 < e[--g].indexOf(":")) {
            y = !0;
            break;
          }
        }
      }
    } else {
      p.$(k, !1, !0);
    }
    m = e[e.length - 1];
  }
  function ea(e) {
    function k(J, K) {
      V[J] = !0 === K ? v ? J : K : n[J.toLowerCase()] ? v ? S(K || J) : !0 : S(K || "");
      ++W;
    }
    function u() {
      (H = "/>" === a.substr(d, 2)) && ++d;
      return H;
    }
    for (var b = 1, g = a.length, d = 2, V = {}, W = 0, H = !1, f, w, r, C, X, L, M; d < g && 9 > b; ++d) {
      switch(f = a.charAt(d), b) {
        case 1:
          if (Q[f] & 4) {
            b = 2, w = a.substring(1, d);
          } else if (">" === f || u()) {
            b = 9, w = a.substring(1, d);
          }
          break;
        case 2:
          ">" === f || u() ? b = 9 : Q[f] & 4 || (b = 3, r = d);
          break;
        case 3:
          if ("=" === f) {
            b = 5, C = a.substring(r, d);
          } else if (Q[f] & 4) {
            b = 4, C = a.substring(r, d);
          } else if (">" === f || u()) {
            b = 9, k(a.substring(r, d), !0);
          }
          break;
        case 4:
          "=" === f ? b = 5 : ">" === f || u() ? (b = 9, k(C, !0)) : Q[f] & 4 || (b = 3, k(C, !0), r = d);
          break;
        case 5:
          '"' === f || "'" === f ? (b = 6, X = f, r = d + 1) : Q[f] & 4 || (b = 7, r = d);
          L = !1;
          break;
        case 6:
          L || f !== X || (b = 2, k(C, a.substring(r, d)));
          L = "\\" === f && !L;
          break;
        case 7:
          Q[f] & 4 ? b = 2 : ">" === f && (b = 9), 7 !== b && k(C, a.substring(r, d));
      }
    }
    if (9 === b) {
      v || (v = !!h[w]);
      y || (y = 0 < w.indexOf(":"));
      b = v || y;
      if (!b) {
        for (M = w.toUpperCase(); m;) {
          if (g = m.toUpperCase(), E[g] && !E[g][M]) {
            P(e, m, !1);
          } else {
            break;
          }
        }
      }
      (H = H || !!q[w]) || (m = e[e.length] = G || b ? w : M);
      a = a.substr(d);
      p.ia(G || b ? w : M, W ? V : null, H, d);
    } else {
      return B(a), !0;
    }
  }
  var p = T, G = !1, v = !1, I = [], F = !0, y = !1, c = -1, m = I[I.length - 1], N;
  for (t(); a;) {
    var O = aa[m];
    if (a.indexOf("<?") === c) {
      F && a.length === z && a.indexOf("<?xml ") === c && (F = !1, G = !0);
      A();
      var l = a.indexOf("?>");
      if (-1 !== l) {
        var x = a.substring(2, l);
        a = a.substr(l + 2);
        p.ha(R(x));
      } else {
        B(a);
        return;
      }
    } else if (a.indexOf("</", c) === c && Q[a.charAt(c + 2)] & 3) {
      if (O && ("PLAINTEXT" === m || "plaintext" === m ? N = !0 : a.indexOf(m.toLowerCase(), c) !== c + 2 && a.indexOf(m.toUpperCase(), c) !== c + 2 && (N = !0)), N) {
        t(), N = !1;
      } else {
        if (A(), da(I)) {
          return;
        }
      }
    } else if (O) {
      t();
    } else if ("<" === a.charAt(c) && Q[a.charAt(c + 1)] & 3) {
      if (A(), ea(I)) {
        return;
      }
    } else if (a.indexOf("\x3c!--") === c) {
      if (A(), l = a.indexOf("--\x3e"), -1 !== l) {
        x = a.substring(4, l), a = a.substr(l + 3), p.fa(R(x));
      } else {
        B(a);
        return;
      }
    } else if (a.indexOf("<![CDATA[") === c) {
      if (A(), l = a.indexOf("]]\x3e"), -1 !== l) {
        x = a.substring(9, l), a = a.substr(l + 3), p.ea(R(x));
      } else {
        B(a);
        return;
      }
    } else if (a.indexOf("<!DOCTYPE ") === c) {
      if (a = a.substr(c), c = 0, l = a.indexOf(">"), -1 !== l) {
        x = a.substring(0, l + 1), a = a.substr(l + 1), F && (G = 0 < x.indexOf("-//W3C//DTD XHTML ")), F = !1, p.ga(x);
      } else {
        B(a);
        return;
      }
    } else {
      t();
    }
  }
  P(I, "", !0);
}
;var U, Y, Z, T = {da:function() {
  U = Y = [];
  Z = [];
}, ba:function() {
  "number" !== typeof U[0] && U.unshift(11);
  return U;
}, aa:function(a) {
  throw a;
}, ga:function(a) {
  U[0] = 9;
  U[1] = a;
}, ia:function(a, z, t) {
  a = [a];
  z && (a[1] = z);
  Y.push(a);
  t || (Z.push(Y), Y = a);
}, $:function(a, z, t) {
  t ? Y.push("</" + a + ">") : z || a === Y[0] && (Y = Z.pop());
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
  T.da();
  ca(a, a.length);
  return T.ba();
};

