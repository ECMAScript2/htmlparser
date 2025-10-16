/* es2-html-parser@1.4.1
(c) 2024-2025 itozyun <itozyun@gmail.com>(https://outcloud.blogspot.com/), MIT. */
var g = {xml:!0, svg:!0, math:!0}, ba = {async:!0, autofocus:!0, checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, draggable:!0, hidden:!0, ismap:!0, loop:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, novalidate:!0, nowrap:!0, readonly:!0, required:!0, reversed:!0, scoped:!0, selected:!0}, p = {AREA:!0, BASE:!0, COL:!0, EMBED:!0, BR:!0, HR:!0, IMG:!0, INPUT:!0, LINK:!0, META:!0, SOURCE:!0, TRACK:!0, WBR:!0, BASEFONT:!0, BGSOUND:!0, COMMAND:!0, FRAME:!0, ISINDEX:!0, KEYGEN:!0, PARAM:!0, 
SPACER:!0}, ca = {MAP:!0, DATALIST:!0, DL:!0, OL:!0, UL:!0, SELECT:!0, OPTGROUP:!0, TABLE:!0, THEAD:!0, TFOOT:!0, TBODY:!0, COLGROUP:!0, TR:!0, DIR:!0, FRAMESET:!0, MENU:!0}, da = {SCRIPT:!0, STYLE:!0, TEXTAREA:!0, TITLE:!0, LISTING:!0, PLAINTEXT:!0, XMP:!0}, ea = {TEXTAREA:!0, TITLE:!0, LISTING:!0}, v = {CAPTION:{ARTICLE:!0, SECTION:!0, NAV:!0, ASIDE:!0, H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, HEADER:!0, FOOTER:!0, ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, 
DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, 
SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, DD:{ARTICLE:!0, SECTION:!0, NAV:!0, ASIDE:!0, H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, HEADER:!0, FOOTER:!0, ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, 
EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, TABLE:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, DT:{ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, 
SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, TABLE:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, P:{A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, 
DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, HTML:{HEAD:!0, BODY:!0, FRAMESET:!0}, HEAD:{TITLE:!0, BASE:!0, LINK:!0, META:!0, 
STYLE:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, BGSOUND:!0, ISINDEX:!0}, COLGROUP:{COL:!0}, OPTGROUP:{OPTION:!0}, OPTION:{}, TBODY:{TR:!0}, TR:{TH:!0, TD:!0}};
v.LI = v.TD = v.DD;
v.TH = v.DT;
v.RP = v.RT = v.P;
v.RB = v.RP;
v.RTC = v.RBC = {RB:!0, RP:!0, RT:!0};
v.TFOOT = v.THEAD = v.TBODY;
var D = {a:2, b:2, c:2, d:2, e:2, f:2, g:2, h:2, i:2, j:2, k:2, l:2, m:2, n:2, o:2, p:2, q:2, r:2, s:2, t:2, u:2, v:2, w:2, x:2, y:2, z:2, A:1, B:1, C:1, D:1, E:1, F:1, G:1, H:1, I:1, J:1, K:1, L:1, M:1, N:1, O:1, P:1, Q:1, R:1, S:1, T:1, U:1, V:1, W:1, X:1, Y:1, Z:1, "\t":4, "\n":4, "\f":4, "\r":4, " ":4};
function I(a) {
  return a.split("&lt;").join("<").split("&gt;").join(">").split("&amp;lt;").join("&lt;").split("&amp;gt;").join("&gt;");
}
function S(a) {
  return I(a).split('\\"').join('"').split("\\'").join("'");
}
function fa(a, E) {
  function y() {
    q || 0 < m.indexOf(":") ? w = "" : w = z ? m.toUpperCase() : m;
  }
  function L() {
    d = a.indexOf("<", d + 1);
    -1 === d && (d = a.length, F());
  }
  function F() {
    if (d) {
      var h = a.substr(0, d);
      a = a.substr(d);
      d = 0;
      (J || m && !ca[w]) && r.ja(T && !ea[w] ? h : I(h));
    }
  }
  function G(h) {
    r.aa && r.aa(h);
  }
  function ha(h) {
    for (var e = 0, A = a.length, b = 3, l, c; b < A && 2 !== e; ++b) {
      switch(l = a.charAt(b), e) {
        case 0:
          D[l] & 4 ? e = 1 : ">" === l && (e = 2);
          e && (c = a.substring(2, b));
          break;
        case 1:
          ">" === l && (e = 2);
      }
    }
    if (2 === e) {
      a = a.substr(b), q || 0 < c.indexOf(":") ? M(h, c, !1) : (e = c.toUpperCase(), p[e] || M(h, z ? c : e, !1));
    } else {
      return G(a), !0;
    }
  }
  function M(h, e, A) {
    var b = 0, l = h.length;
    if (e) {
      for (b = l; 0 <= b && h[--b] !== e;) {
      }
    }
    if (0 <= b) {
      for (; b < l;) {
        e = r;
        var c = e.$, N = h[--l], t;
        if (t = A) {
          t = h[l], z && (t = t.toUpperCase()), t = !v[t];
        }
        c.call(e, N, t, !1);
        q && g[h[l]] && (q = !1);
      }
      h.length = b;
    } else {
      r.$(e, !1, !0);
    }
    m = n[n.length - 1] || "";
    y();
  }
  function ia(h) {
    function e(O, P) {
      N[O] = !0 === P ? q ? O : P : ba[O.toLowerCase()] ? q ? S(P || O) : !0 : S(P || "");
      ++t;
    }
    function A() {
      (C = "/>" === a.substr(c, 2)) && ++c;
      return C;
    }
    for (var b = 1, l = a.length, c = 2, N = {}, t = 0, C = !1, f, x, u, H, Z, Q, aa, K; c < l && 9 > b; ++c) {
      switch(f = a.charAt(c), b) {
        case 1:
          D[f] & 4 ? (b = 2, x = a.substring(1, c)) : ">" === f ? (b = 9, x = a.substring(1, c)) : A() && (b = 9, x = a.substring(1, c - 1));
          break;
        case 2:
          ">" === f || A() ? b = 9 : D[f] & 4 || (b = 3, u = c);
          break;
        case 3:
          "=" === f ? (b = 5, H = a.substring(u, c)) : D[f] & 4 ? (b = 4, H = a.substring(u, c)) : ">" === f ? (b = 9, e(a.substring(u, c), !0)) : A() && (b = 9, e(a.substring(u, c - 1), !0));
          break;
        case 4:
          "=" === f ? b = 5 : ">" === f || A() ? (b = 9, e(H, !0)) : D[f] & 4 || (b = 3, e(H, !0), u = c);
          break;
        case 5:
          '"' === f || "'" === f ? (b = 6, Z = f, u = c + 1) : D[f] & 4 || (b = 7, u = c);
          Q = !1;
          break;
        case 6:
          Q || f !== Z || (b = 2, e(H, a.substring(u, c)));
          Q = "\\" === f && !Q;
          break;
        case 7:
          D[f] & 4 ? b = 2 : ">" === f && (b = 9), 7 !== b && e(H, a.substring(u, c));
      }
    }
    if (9 === b) {
      (b = q) || (q = !!g[x]);
      if (q || 0 < x.indexOf(":")) {
        aa = !0, C ? q = b : (m = n[n.length] = x, y());
      } else {
        for (K = x.toUpperCase(); m;) {
          if (v[w] && !v[w][K]) {
            M(h, m, !1);
          } else {
            break;
          }
        }
        C = C || !!p[K];
        C || (m = n[n.length] = z ? x : K, y());
      }
      a = a.substr(c);
      r.ia(z || aa ? x : K, t ? N : null, C, c);
    } else {
      return G(a), !0;
    }
  }
  var r = U, z = !1, n = [], J = !0, q = !1, d = -1, w, R;
  var m = n[n.length - 1] || "";
  y();
  for (L(); a;) {
    var T = da[w];
    if (a.indexOf("<?") === d) {
      J && a.length === E && a.indexOf("<?xml ") === d && (J = !1, z = !0);
      F();
      var k = a.indexOf("?>");
      if (-1 !== k) {
        var B = a.substring(2, k);
        a = a.substr(k + 2);
        r.ha(I(B));
      } else {
        G(a);
        return;
      }
    } else if (a.indexOf("</", d) === d && D[a.charAt(d + 2)] & 3) {
      if (T && ("PLAINTEXT" === w ? R = !0 : a.indexOf(z ? m : m.toLowerCase(), d) !== d + 2 && a.indexOf(w, d) !== d + 2 && (R = !0)), R) {
        L(), R = !1;
      } else {
        if (F(), ha(n)) {
          return;
        }
      }
    } else if (T) {
      L();
    } else if ("<" === a.charAt(d) && D[a.charAt(d + 1)] & 3) {
      if (F(), ia(n)) {
        return;
      }
    } else if (a.indexOf("\x3c!--") === d) {
      if (F(), k = a.indexOf("--\x3e"), -1 !== k) {
        B = a.substring(4, k), a = a.substr(k + 3), r.fa(I(B));
      } else {
        G(a);
        return;
      }
    } else if (a.indexOf("<![CDATA[") === d) {
      if (F(), k = a.indexOf("]]\x3e"), -1 !== k) {
        B = a.substring(9, k), a = a.substr(k + 3), r.ea(I(B));
      } else {
        G(a);
        return;
      }
    } else if (a.indexOf("<!DOCTYPE ") === d || a.indexOf("<!doctype ") === d) {
      if (a = a.substr(d), d = 0, k = a.indexOf(">"), -1 !== k) {
        B = a.substring(0, k + 1), a = a.substr(k + 1), J && (z = 0 < B.indexOf("-//W3C//DTD XHTML ")), J = !1, r.ga(B);
      } else {
        G(a);
        return;
      }
    } else {
      L();
    }
  }
  M(n, "", !0);
}
;var V, W, X, Y, U = {da:function() {
  V = W = [];
  X = [];
  Y = "";
}, ba:function() {
  "number" !== typeof V[0] && V.unshift(11);
  return V;
}, aa:function(a) {
  throw a;
}, ga:function(a) {
  V[0] = 9;
  V[1] = Y + a;
  Y = "";
}, ia:function(a, E, y) {
  a = [a];
  E && (a[1] = E);
  W.push(a);
  y || (X.push(W), W = a);
}, $:function(a, E, y) {
  y ? W.push("</" + a + ">") : E || a === W[0] && (W = X.pop());
}, ja:function(a) {
  W.push(a);
}, fa:function(a) {
  W.push([8, a]);
}, ea:function(a) {
  W.push([4, a]);
}, ha:function(a) {
  0 === V.length && 0 === a.indexOf("xml ") ? Y = "<?" + a + "?>" : W.push([7, a]);
}};
module.exports = function(a) {
  U.da();
  fa(a, a.length);
  return U.ba();
};

