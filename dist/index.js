/* es2-html-parser@1.2.0
(c) 2024-2025 itozyun <itozyun@gmail.com>(https://outcloud.blogspot.com/), MIT. */
var g = {xml:!0, svg:!0, math:!0}, aa = {async:!0, autofocus:!0, checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, draggable:!0, hidden:!0, ismap:!0, loop:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, novalidate:!0, nowrap:!0, readonly:!0, required:!0, reversed:!0, scoped:!0, selected:!0}, n = {AREA:!0, BASE:!0, BASEFONT:!0, BR:!0, BGSOUND:!0, COL:!0, COMMAND:!0, FRAME:!0, HR:!0, IMG:!0, INPUT:!0, ISINDEX:!0, KEYGEN:!0, LINK:!0, META:!0, PARAM:!0, SOURCE:!0, TRACK:!0, EMBED:!0, WBR:!0}, 
ba = {MAP:!0, DL:!0, OL:!0, UL:!0, SELECT:!0, OPTGROUP:!0, TABLE:!0, THEAD:!0, TFOOT:!0, TBODY:!0, COLGROUP:!0, TR:!0, HEAD:!0, MENU:!0, FRAMESET:!0}, ca = {SCRIPT:!0, STYLE:!0, TEXTAREA:!0, TITLE:!0, PLAINTEXT:!0, XMP:!0, LISTING:!0}, da = {TEXTAREA:!0, TITLE:!0, LISTING:!0}, t = {CAPTION:{ARTICLE:!0, SECTION:!0, NAV:!0, ASIDE:!0, H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, HEADER:!0, FOOTER:!0, ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, 
SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, 
CANVAS:!0}, DD:{ARTICLE:!0, SECTION:!0, NAV:!0, ASIDE:!0, H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, HEADER:!0, FOOTER:!0, ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, 
AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, TABLE:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, DT:{ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, 
U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, TABLE:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, P:{A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, 
VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, HTML:{HEAD:!0, BODY:!0, FRAMESET:!0}, HEAD:{TITLE:!0, BASE:!0, BGSOUND:!0, LINK:!0, META:!0, STYLE:!0, 
SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0}, COLGROUP:{COL:!0}, OPTGROUP:{OPTION:!0}, OPTION:{}, TBODY:{TR:!0}, TR:{TH:!0, TD:!0}, RBC:{RB:!0, RP:!0, RT:!0}};
t.LI = t.TD = t.DD;
t.TH = t.DT;
t.RB = t.RP = t.RT = t.P;
t.TFOOT = t.THEAD = t.TBODY;
t.RTC = t.RBC;
var I = {a:2, b:2, c:2, d:2, e:2, f:2, g:2, h:2, i:2, j:2, k:2, l:2, m:2, n:2, o:2, p:2, q:2, r:2, s:2, t:2, u:2, v:2, w:2, x:2, y:2, z:2, A:1, B:1, C:1, D:1, E:1, F:1, G:1, H:1, I:1, J:1, K:1, L:1, M:1, N:1, O:1, P:1, Q:1, R:1, S:1, T:1, U:1, V:1, W:1, X:1, Y:1, Z:1, "\t":4, "\n":4, "\f":4, "\r":4, " ":4};
function J(a) {
  return a.split("&lt;").join("<").split("&gt;").join(">").split("&amp;lt;").join("&lt;").split("&amp;gt;").join("&gt;");
}
function T(a) {
  return J(a).split('\\"').join('"').split("\\'").join("'");
}
function ea(a, E) {
  function x() {
    u || y ? v = "" : v = z ? p.toUpperCase() : p;
  }
  function M() {
    c = a.indexOf("<", c + 1);
    -1 === c && (c = a.length, F());
  }
  function F() {
    if (c) {
      var h = a.substr(0, c);
      a = a.substr(c);
      c = 0;
      (K || p && !ba[v]) && q.ja(S && !da[v] ? h : J(h));
    }
  }
  function G(h) {
    q.aa && q.aa(h);
  }
  function fa(h) {
    for (var e = 0, A = a.length, b = 3, l, d; b < A && 2 !== e; ++b) {
      switch(l = a.charAt(b), e) {
        case 0:
          I[l] & 4 ? e = 1 : ">" === l && (e = 2);
          e && (d = a.substring(2, b));
          break;
        case 1:
          ">" === l && (e = 2);
      }
    }
    if (2 === e) {
      a = a.substr(b), u || y ? N(h, d, !1) : (e = d.toUpperCase(), n[e] || N(h, z ? d : e, !1));
    } else {
      return G(a), !0;
    }
  }
  function N(h, e, A) {
    var b = 0, l = h.length;
    if (e) {
      for (b = l; 0 <= b && h[--b] !== e;) {
      }
    }
    if (0 <= b) {
      for (; b < l;) {
        e = q;
        var d = e.$, O = h[--l], r;
        if (r = A) {
          r = h[l], z && (r = r.toUpperCase()), r = !t[r];
        }
        d.call(e, O, r, !1);
        u && g[h[l]] && (u = !1);
      }
      h.length = b;
      if (y) {
        for (y = !1, l = b; l;) {
          if (0 < h[--l].indexOf(":")) {
            y = !0;
            break;
          }
        }
      }
    } else {
      q.$(e, !1, !0);
    }
    p = m[m.length - 1] || "";
    x();
  }
  function ha(h) {
    function e(P, Q) {
      O[P] = !0 === Q ? u ? P : Q : aa[P.toLowerCase()] ? u ? T(Q || P) : !0 : T(Q || "");
      ++r;
    }
    function A() {
      (D = "/>" === a.substr(d, 2)) && ++d;
      return D;
    }
    for (var b = 1, l = a.length, d = 2, O = {}, r = 0, D = !1, f, B, w, H, Z, R, L; d < l && 9 > b; ++d) {
      switch(f = a.charAt(d), b) {
        case 1:
          if (I[f] & 4) {
            b = 2, B = a.substring(1, d);
          } else if (">" === f || A()) {
            b = 9, B = a.substring(1, d);
          }
          break;
        case 2:
          ">" === f || A() ? b = 9 : I[f] & 4 || (b = 3, w = d);
          break;
        case 3:
          if ("=" === f) {
            b = 5, H = a.substring(w, d);
          } else if (I[f] & 4) {
            b = 4, H = a.substring(w, d);
          } else if (">" === f || A()) {
            b = 9, e(a.substring(w, d), !0);
          }
          break;
        case 4:
          "=" === f ? b = 5 : ">" === f || A() ? (b = 9, e(H, !0)) : I[f] & 4 || (b = 3, e(H, !0), w = d);
          break;
        case 5:
          '"' === f || "'" === f ? (b = 6, Z = f, w = d + 1) : I[f] & 4 || (b = 7, w = d);
          R = !1;
          break;
        case 6:
          R || f !== Z || (b = 2, e(H, a.substring(w, d)));
          R = "\\" === f && !R;
          break;
        case 7:
          I[f] & 4 ? b = 2 : ">" === f && (b = 9), 7 !== b && e(H, a.substring(w, d));
      }
    }
    if (9 === b) {
      u || (u = !!g[B]);
      y || (y = 0 < B.indexOf(":"));
      if (b = u || y) {
        D || (p = m[m.length] = B, x());
      } else {
        for (L = B.toUpperCase(); p;) {
          if (t[v] && !t[v][L]) {
            N(h, p, !1);
          } else {
            break;
          }
        }
        D = D || !!n[L];
        D || (p = m[m.length] = z ? B : L, x());
      }
      a = a.substr(d);
      q.ia(z || b ? B : L, r ? O : null, D, d);
    } else {
      return G(a), !0;
    }
  }
  var q = V, z = !1, m = [], K = !0, u = !1, y = !1, c = -1, v;
  var p = m[m.length - 1] || "";
  x();
  for (M(); a;) {
    var S = ca[v];
    if (a.indexOf("<?") === c) {
      K && a.length === E && a.indexOf("<?xml ") === c && (K = !1, z = !0);
      F();
      var k = a.indexOf("?>");
      if (-1 !== k) {
        var C = a.substring(2, k);
        a = a.substr(k + 2);
        q.ha(J(C));
      } else {
        G(a);
        return;
      }
    } else if (a.indexOf("</", c) === c && I[a.charAt(c + 2)] & 3) {
      if (S) {
        if ("PLAINTEXT" === v) {
          var U = !0;
        } else {
          k = z ? p : p.toLowerCase(), a.indexOf(k, c) !== c + 2 && a.indexOf(v, c) !== c + 2 && (U = !0);
        }
      }
      if (U) {
        M(), U = !1;
      } else {
        if (F(), fa(m)) {
          return;
        }
      }
    } else if (S) {
      M();
    } else if ("<" === a.charAt(c) && I[a.charAt(c + 1)] & 3) {
      if (F(), ha(m)) {
        return;
      }
    } else if (a.indexOf("\x3c!--") === c) {
      if (F(), k = a.indexOf("--\x3e"), -1 !== k) {
        C = a.substring(4, k), a = a.substr(k + 3), q.fa(J(C));
      } else {
        G(a);
        return;
      }
    } else if (a.indexOf("<![CDATA[") === c) {
      if (F(), k = a.indexOf("]]\x3e"), -1 !== k) {
        C = a.substring(9, k), a = a.substr(k + 3), q.ea(J(C));
      } else {
        G(a);
        return;
      }
    } else if (a.indexOf("<!DOCTYPE ") === c || a.indexOf("<!doctype ") === c) {
      if (a = a.substr(c), c = 0, k = a.indexOf(">"), -1 !== k) {
        C = a.substring(0, k + 1), a = a.substr(k + 1), K && (z = 0 < C.indexOf("-//W3C//DTD XHTML ")), K = !1, q.ga(C);
      } else {
        G(a);
        return;
      }
    } else {
      M();
    }
  }
  N(m, "", !0);
}
;var W, X, Y, V = {da:function() {
  W = X = [];
  Y = [];
}, ba:function() {
  "number" !== typeof W[0] && W.unshift(11);
  return W;
}, aa:function(a) {
  throw a;
}, ga:function(a) {
  W[0] = 9;
  W[1] = a;
}, ia:function(a, E, x) {
  a = [a];
  E && (a[1] = E);
  X.push(a);
  x || (Y.push(X), X = a);
}, $:function(a, E, x) {
  x ? X.push("</" + a + ">") : E || a === X[0] && (X = Y.pop());
}, ja:function(a) {
  X.push(a);
}, fa:function(a) {
  X.push([8, a]);
}, ea:function(a) {
  X.push([4, a]);
}, ha:function(a) {
  X.push([7, a]);
}};
module.exports = function(a) {
  V.da();
  ea(a, a.length);
  return V.ba();
};

