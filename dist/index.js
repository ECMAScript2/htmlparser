/* es2-html-parser@1.4.1
(c) 2024-2025 itozyun <itozyun@gmail.com>(https://outcloud.blogspot.com/), MIT. */
var h = {xml:!0, svg:!0, math:!0}, aa = {async:!0, autofocus:!0, checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, draggable:!0, hidden:!0, ismap:!0, loop:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, novalidate:!0, nowrap:!0, readonly:!0, required:!0, reversed:!0, scoped:!0, selected:!0}, q = {AREA:!0, BASE:!0, COL:!0, EMBED:!0, BR:!0, HR:!0, IMG:!0, INPUT:!0, LINK:!0, META:!0, SOURCE:!0, TRACK:!0, WBR:!0, BASEFONT:!0, BGSOUND:!0, COMMAND:!0, FRAME:!0, ISINDEX:!0, KEYGEN:!0, PARAM:!0, 
SPACER:!0}, ea = {MAP:!0, DATALIST:!0, DL:!0, OL:!0, UL:!0, SELECT:!0, OPTGROUP:!0, TABLE:!0, THEAD:!0, TFOOT:!0, TBODY:!0, COLGROUP:!0, TR:!0, DIR:!0, FRAMESET:!0, MENU:!0}, fa = {SCRIPT:!0, STYLE:!0, TEXTAREA:!0, TITLE:!0, PLAINTEXT:!0, XMP:!0}, ha = {TEXTAREA:!0, TITLE:!0}, v = {CAPTION:{ARTICLE:!0, SECTION:!0, NAV:!0, ASIDE:!0, H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, HEADER:!0, FOOTER:!0, ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, 
SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, 
CANVAS:!0}, DD:{ARTICLE:!0, SECTION:!0, NAV:!0, ASIDE:!0, H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, HEADER:!0, FOOTER:!0, ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, 
AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, TABLE:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, DT:{ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, 
U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, TABLE:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, P:{A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, 
VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, HTML:{HEAD:!0, BODY:!0, FRAMESET:!0}, HEAD:{TITLE:!0, BASE:!0, LINK:!0, META:!0, STYLE:!0, SCRIPT:!0, 
NOSCRIPT:!0, TEMPLATE:!0, BGSOUND:!0, ISINDEX:!0}, COLGROUP:{COL:!0}, OPTGROUP:{OPTION:!0}, OPTION:{}, TBODY:{TR:!0}, TR:{TH:!0, TD:!0}};
v.LI = v.TD = v.DD;
v.TH = v.DT;
v.RP = v.RT = v.P;
v.RB = v.RP;
v.RTC = v.RBC = {RB:!0, RP:!0, RT:!0};
v.TFOOT = v.THEAD = v.TBODY;
var E = {a:2, b:2, c:2, d:2, e:2, f:2, g:2, h:2, i:2, j:2, k:2, l:2, m:2, n:2, o:2, p:2, q:2, r:2, s:2, t:2, u:2, v:2, w:2, x:2, y:2, z:2, A:1, B:1, C:1, D:1, E:1, F:1, G:1, H:1, I:1, J:1, K:1, L:1, M:1, N:1, O:1, P:1, Q:1, R:1, S:1, T:1, U:1, V:1, W:1, X:1, Y:1, Z:1, "\t":4, "\n":4, "\f":4, "\r":4, " ":4};
function I(a) {
  return a.split("&lt;").join("<").split("&gt;").join(">").split("&amp;lt;").join("&lt;").split("&amp;gt;").join("&gt;");
}
function ia(a) {
  return I(a).split('\\"').join('"').split("\\'").join("'");
}
function ja(a, F) {
  function y() {
    z || 0 < m.indexOf(":") ? w = "" : w = r ? m.toUpperCase() : m;
  }
  function N() {
    c = a.indexOf("<", c + 1);
    -1 === c && (c = a.length, G());
  }
  function G() {
    if (c) {
      var k = a.substr(0, c);
      a = a.substr(c);
      c = 0;
      (J || m && !ea[w]) && t.ja(T && !ha[w] ? k : I(k));
    }
  }
  function H(k) {
    t.aa && t.aa(k);
  }
  function ka(k) {
    for (var e = 0, n = a.length, f = 3, b, B; f < n && 2 !== e; ++f) {
      switch(b = a.charAt(f), e) {
        case 0:
          if (E[b] & 4) {
            e = 1;
            B = f;
            break;
          }
        case 1:
          ">" === b && (e = 2, B = f);
      }
    }
    if (2 === e) {
      e = a.substring(2, B), a = a.substr(f), z || 0 < e.indexOf(":") ? O(k, e, !1) : (f = e.toUpperCase(), q[f] || O(k, r ? e : f, !1));
    } else {
      return H(a), !0;
    }
  }
  function O(k, e, n) {
    var f = 0, b = k.length;
    if (e) {
      for (f = b; 0 <= f && k[--f] !== e;) {
      }
    }
    if (0 <= f) {
      for (; f < b;) {
        e = t;
        var B = e.$, d = k[--b], u;
        if (u = n) {
          u = k[b], r && (u = u.toUpperCase()), u = !v[u];
        }
        B.call(e, d, u, !1);
        z && h[k[b]] && (z = !1);
      }
      k.length = f;
    } else {
      t.$(e, !1, !0);
    }
    m = p[p.length - 1] || "";
    y();
  }
  function la(k) {
    function e(x) {
      C = a.substring(1, x);
      ba || (z = !!h[C]);
      K = z || 0 < C.indexOf(":");
    }
    function n(x) {
      var P = a.substring(U, L);
      x = null != x ? a.substring(V, x) : !0;
      u[P] = !0 === x ? r || K ? P : x : aa[P.toLowerCase()] ? r || K ? ia(x || P) : !0 : ia(x || "");
      ++ca;
    }
    function f() {
      (D = "/>" === a.substr(d, 2)) && ++d;
      return D;
    }
    for (var b = 1, B = a.length, d = 2, u = {}, ca = 0, D = !1, ba = z, g, U, L, V, C, da, Q, K, M; d < B && 9 > b; ++d) {
      switch(g = a.charAt(d), b) {
        case 1:
          E[g] & 4 ? (b = 2, e(d)) : ">" === g ? (b = 9, e(d)) : f() && (b = 9, e(d - 1));
          break;
        case 2:
          ">" === g || f() ? b = 9 : E[g] & 4 || (b = 3, U = d);
          break;
        case 3:
          "=" === g ? (b = 5, L = d) : E[g] & 4 ? (b = 4, L = d) : ">" === g ? (b = 9, L = d, n()) : f() && (b = 9, L = d - 1, n());
          break;
        case 4:
          "=" === g ? b = 5 : ">" === g || f() ? (b = 9, n()) : E[g] & 4 || (b = 3, n(), U = d);
          break;
        case 5:
          '"' === g || "'" === g ? (b = 6, da = g, V = d + 1) : E[g] & 4 || (b = 7, V = d);
          Q = !1;
          break;
        case 6:
          Q || g !== da || (b = 2, n(d));
          Q = "\\" === g && !Q;
          break;
        case 7:
          E[g] & 4 ? (b = 2, n(d)) : ">" === g && (b = 9, n(d));
      }
    }
    if (9 === b) {
      if (K) {
        D ? z = ba : (m = p[p.length] = C, y());
      } else {
        for (M = C.toUpperCase(); m;) {
          if (v[w] && !v[w][M]) {
            O(k, m, !1);
          } else {
            break;
          }
        }
        D = D || !!q[M];
        D || (m = p[p.length] = r ? C : M, y());
      }
      a = a.substr(d);
      t.ia(r || K ? C : M, ca ? u : null, D, d);
    } else {
      return H(a), !0;
    }
  }
  var t = S, r = !1, p = [], J = !0, z = !1, c = -1, w, R;
  var m = p[p.length - 1] || "";
  y();
  for (N(); a;) {
    var T = fa[w];
    if (a.indexOf("<?") === c) {
      J && a.length === F && a.indexOf("<?xml ") === c && (J = !1, r = !0);
      G();
      var l = a.indexOf("?>");
      if (-1 !== l) {
        var A = a.substring(2, l);
        a = a.substr(l + 2);
        t.ha(I(A));
      } else {
        H(a);
        return;
      }
    } else if (a.indexOf("</", c) === c && E[a.charAt(c + 2)] & 3) {
      if (T && ("PLAINTEXT" === w ? R = !0 : a.indexOf(r ? m : m.toLowerCase(), c) !== c + 2 && a.indexOf(w, c) !== c + 2 && (R = !0)), R) {
        N(), R = !1;
      } else {
        if (G(), ka(p)) {
          return;
        }
      }
    } else if (T) {
      N();
    } else if ("<" === a.charAt(c) && E[a.charAt(c + 1)] & 3) {
      if (G(), la(p)) {
        return;
      }
    } else if (a.indexOf("\x3c!--") === c) {
      if (G(), l = a.indexOf("--\x3e"), -1 !== l) {
        A = a.substring(4, l), a = a.substr(l + 3), t.fa(I(A));
      } else {
        H(a);
        return;
      }
    } else if (a.indexOf("<![CDATA[") === c) {
      if (G(), l = a.indexOf("]]\x3e"), -1 !== l) {
        A = a.substring(9, l), a = a.substr(l + 3), t.ea(I(A));
      } else {
        H(a);
        return;
      }
    } else if (a.indexOf("<!DOCTYPE ") === c || a.indexOf("<!doctype ") === c) {
      if (a = a.substr(c), c = 0, l = a.indexOf(">"), -1 !== l) {
        A = a.substring(0, l + 1), a = a.substr(l + 1), J && (r = 0 < A.indexOf("-//W3C//DTD XHTML ")), J = !1, t.ga(A);
      } else {
        H(a);
        return;
      }
    } else {
      N();
    }
  }
  O(p, "", !0);
}
;var W, X, Y, Z, S = {da:function() {
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
  S.da();
  ja(a, a.length);
  return S.ba();
};

