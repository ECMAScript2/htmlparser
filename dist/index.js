/* es2-html-parser@1.4.0
(c) 2024-2025 itozyun <itozyun@gmail.com>(https://outcloud.blogspot.com/), MIT. */
var g = {xml:!0, svg:!0, math:!0}, ba = {async:!0, autofocus:!0, checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, draggable:!0, hidden:!0, ismap:!0, loop:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, novalidate:!0, nowrap:!0, readonly:!0, required:!0, reversed:!0, scoped:!0, selected:!0}, n = {AREA:!0, BASE:!0, COL:!0, EMBED:!0, BR:!0, HR:!0, IMG:!0, INPUT:!0, LINK:!0, META:!0, SOURCE:!0, TRACK:!0, WBR:!0, BASEFONT:!0, BGSOUND:!0, COMMAND:!0, FRAME:!0, ISINDEX:!0, KEYGEN:!0, PARAM:!0, 
SPACER:!0}, ca = {MAP:!0, DATALIST:!0, DL:!0, OL:!0, UL:!0, SELECT:!0, OPTGROUP:!0, TABLE:!0, THEAD:!0, TFOOT:!0, TBODY:!0, COLGROUP:!0, TR:!0, HEAD:!0, DIR:!0, FRAMESET:!0, MENU:!0}, da = {SCRIPT:!0, STYLE:!0, TEXTAREA:!0, TITLE:!0, LISTING:!0, PLAINTEXT:!0, XMP:!0}, ea = {TEXTAREA:!0, TITLE:!0, LISTING:!0}, u = {CAPTION:{ARTICLE:!0, SECTION:!0, NAV:!0, ASIDE:!0, H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, HEADER:!0, FOOTER:!0, ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, 
DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, 
SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, DD:{ARTICLE:!0, SECTION:!0, NAV:!0, ASIDE:!0, H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, HEADER:!0, FOOTER:!0, ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, 
EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, TABLE:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, DT:{ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, 
SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, TABLE:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, P:{A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, 
DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, HTML:{HEAD:!0, BODY:!0, FRAMESET:!0}, HEAD:{TITLE:!0, BASE:!0, LINK:!0, META:!0, 
STYLE:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, BGSOUND:!0, ISINDEX:!0}, COLGROUP:{COL:!0}, OPTGROUP:{OPTION:!0}, OPTION:{}, TBODY:{TR:!0}, TR:{TH:!0, TD:!0}};
u.LI = u.TD = u.DD;
u.TH = u.DT;
u.RP = u.RT = u.P;
u.RB = u.RP;
u.RTC = u.RBC = {RB:!0, RP:!0, RT:!0};
u.TFOOT = u.THEAD = u.TBODY;
var E = {a:2, b:2, c:2, d:2, e:2, f:2, g:2, h:2, i:2, j:2, k:2, l:2, m:2, n:2, o:2, p:2, q:2, r:2, s:2, t:2, u:2, v:2, w:2, x:2, y:2, z:2, A:1, B:1, C:1, D:1, E:1, F:1, G:1, H:1, I:1, J:1, K:1, L:1, M:1, N:1, O:1, P:1, Q:1, R:1, S:1, T:1, U:1, V:1, W:1, X:1, Y:1, Z:1, "\t":4, "\n":4, "\f":4, "\r":4, " ":4};
function J(a) {
  return a.split("&lt;").join("<").split("&gt;").join(">").split("&amp;lt;").join("&lt;").split("&amp;gt;").join("&gt;");
}
function T(a) {
  return J(a).split('\\"').join('"').split("\\'").join("'");
}
function fa(a, F) {
  function y() {
    v || z ? w = "" : w = A ? p.toUpperCase() : p;
  }
  function M() {
    d = a.indexOf("<", d + 1);
    -1 === d && (d = a.length, G());
  }
  function G() {
    if (d) {
      var h = a.substr(0, d);
      a = a.substr(d);
      d = 0;
      (K || p && !ca[w]) && q.ja(U && !ea[w] ? h : J(h));
    }
  }
  function H(h) {
    q.aa && q.aa(h);
  }
  function ha(h) {
    for (var e = 0, B = a.length, b = 3, k, c; b < B && 2 !== e; ++b) {
      switch(k = a.charAt(b), e) {
        case 0:
          E[k] & 4 ? e = 1 : ">" === k && (e = 2);
          e && (c = a.substring(2, b));
          break;
        case 1:
          ">" === k && (e = 2);
      }
    }
    if (2 === e) {
      a = a.substr(b), v || z ? N(h, c, !1) : (e = c.toUpperCase(), n[e] || N(h, A ? c : e, !1));
    } else {
      return H(a), !0;
    }
  }
  function N(h, e, B) {
    var b = 0, k = h.length;
    if (e) {
      for (b = k; 0 <= b && h[--b] !== e;) {
      }
    }
    if (0 <= b) {
      for (; b < k;) {
        e = q;
        var c = e.$, O = h[--k], r;
        if (r = B) {
          r = h[k], A && (r = r.toUpperCase()), r = !u[r];
        }
        c.call(e, O, r, !1);
        v && g[h[k]] && (v = !1);
      }
      h.length = b;
      if (z) {
        for (z = !1, k = b; k;) {
          if (0 < h[--k].indexOf(":")) {
            z = !0;
            break;
          }
        }
      }
    } else {
      q.$(e, !1, !0);
    }
    p = m[m.length - 1] || "";
    y();
  }
  function ia(h) {
    function e(P, Q) {
      O[P] = !0 === Q ? v ? P : Q : ba[P.toLowerCase()] ? v ? T(Q || P) : !0 : T(Q || "");
      ++r;
    }
    function B() {
      (D = "/>" === a.substr(c, 2)) && ++c;
      return D;
    }
    for (var b = 1, k = a.length, c = 2, O = {}, r = 0, D = !1, f, x, t, I, aa, R, L; c < k && 9 > b; ++c) {
      switch(f = a.charAt(c), b) {
        case 1:
          E[f] & 4 ? (b = 2, x = a.substring(1, c)) : ">" === f ? (b = 9, x = a.substring(1, c)) : B() && (b = 9, x = a.substring(1, c - 1));
          break;
        case 2:
          ">" === f || B() ? b = 9 : E[f] & 4 || (b = 3, t = c);
          break;
        case 3:
          "=" === f ? (b = 5, I = a.substring(t, c)) : E[f] & 4 ? (b = 4, I = a.substring(t, c)) : ">" === f ? (b = 9, e(a.substring(t, c), !0)) : B() && (b = 9, e(a.substring(t, c - 1), !0));
          break;
        case 4:
          "=" === f ? b = 5 : ">" === f || B() ? (b = 9, e(I, !0)) : E[f] & 4 || (b = 3, e(I, !0), t = c);
          break;
        case 5:
          '"' === f || "'" === f ? (b = 6, aa = f, t = c + 1) : E[f] & 4 || (b = 7, t = c);
          R = !1;
          break;
        case 6:
          R || f !== aa || (b = 2, e(I, a.substring(t, c)));
          R = "\\" === f && !R;
          break;
        case 7:
          E[f] & 4 ? b = 2 : ">" === f && (b = 9), 7 !== b && e(I, a.substring(t, c));
      }
    }
    if (9 === b) {
      v || (v = !!g[x]);
      z || (z = 0 < x.indexOf(":"));
      if (b = v || z) {
        D || (p = m[m.length] = x, y());
      } else {
        for (L = x.toUpperCase(); p;) {
          if (u[w] && !u[w][L]) {
            N(h, p, !1);
          } else {
            break;
          }
        }
        D = D || !!n[L];
        D || (p = m[m.length] = A ? x : L, y());
      }
      a = a.substr(c);
      q.ia(A || b ? x : L, r ? O : null, D, c);
    } else {
      return H(a), !0;
    }
  }
  var q = V, A = !1, m = [], K = !0, v = !1, z = !1, d = -1, w, S;
  var p = m[m.length - 1] || "";
  y();
  for (M(); a;) {
    var U = da[w];
    if (a.indexOf("<?") === d) {
      K && a.length === F && a.indexOf("<?xml ") === d && (K = !1, A = !0);
      G();
      var l = a.indexOf("?>");
      if (-1 !== l) {
        var C = a.substring(2, l);
        a = a.substr(l + 2);
        q.ha(J(C));
      } else {
        H(a);
        return;
      }
    } else if (a.indexOf("</", d) === d && E[a.charAt(d + 2)] & 3) {
      if (U && ("PLAINTEXT" === w ? S = !0 : a.indexOf(A ? p : p.toLowerCase(), d) !== d + 2 && a.indexOf(w, d) !== d + 2 && (S = !0)), S) {
        M(), S = !1;
      } else {
        if (G(), ha(m)) {
          return;
        }
      }
    } else if (U) {
      M();
    } else if ("<" === a.charAt(d) && E[a.charAt(d + 1)] & 3) {
      if (G(), ia(m)) {
        return;
      }
    } else if (a.indexOf("\x3c!--") === d) {
      if (G(), l = a.indexOf("--\x3e"), -1 !== l) {
        C = a.substring(4, l), a = a.substr(l + 3), q.fa(J(C));
      } else {
        H(a);
        return;
      }
    } else if (a.indexOf("<![CDATA[") === d) {
      if (G(), l = a.indexOf("]]\x3e"), -1 !== l) {
        C = a.substring(9, l), a = a.substr(l + 3), q.ea(J(C));
      } else {
        H(a);
        return;
      }
    } else if (a.indexOf("<!DOCTYPE ") === d || a.indexOf("<!doctype ") === d) {
      if (a = a.substr(d), d = 0, l = a.indexOf(">"), -1 !== l) {
        C = a.substring(0, l + 1), a = a.substr(l + 1), K && (A = 0 < C.indexOf("-//W3C//DTD XHTML ")), K = !1, q.ga(C);
      } else {
        H(a);
        return;
      }
    } else {
      M();
    }
  }
  N(m, "", !0);
}
;var W, X, Y, Z, V = {da:function() {
  W = X = [];
  Y = [];
  Z = "";
}, ba:function() {
  "number" !== typeof W[0] && W.unshift(11);
  return W;
}, aa:function(a) {
  throw a;
}, ga:function(a) {
  W[0] = 9;
  W[1] = Z + a;
  Z = "";
}, ia:function(a, F, y) {
  a = [a];
  F && (a[1] = F);
  X.push(a);
  y || (Y.push(X), X = a);
}, $:function(a, F, y) {
  y ? X.push("</" + a + ">") : F || a === X[0] && (X = Y.pop());
}, ja:function(a) {
  X.push(a);
}, fa:function(a) {
  X.push([8, a]);
}, ea:function(a) {
  X.push([4, a]);
}, ha:function(a) {
  0 === W.length && 0 === a.indexOf("xml ") ? Z = "<?" + a + "?>" : X.push([7, a]);
}};
module.exports = function(a) {
  V.da();
  fa(a, a.length);
  return V.ba();
};

