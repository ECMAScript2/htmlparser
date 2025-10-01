/* es2-html-parser@1.0.0
(c) 2024-2025 itozyun <itozyun@gmail.com> (https://outcloud.blogspot.com/)(undefined), MIT. */
var l = {xml:!0, svg:!0, math:!0}, t = {async:!0, autofocus:!0, checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, draggable:!0, hidden:!0, ismap:!0, loop:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, novalidate:!0, nowrap:!0, readonly:!0, required:!0, reversed:!0, scoped:!0, selected:!0}, x = {AREA:!0, BASE:!0, BASEFONT:!0, BR:!0, BGSOUND:!0, COL:!0, COMMAND:!0, FRAME:!0, HR:!0, IMG:!0, INPUT:!0, ISINDEX:!0, KEYGEN:!0, LINK:!0, META:!0, PARAM:!0, SOURCE:!0, TRACK:!0, EMBED:!0, WBR:!0, 
area:!0, base:!0, basefont:!0, br:!0, bgsound:!0, col:!0, command:!0, frame:!0, hr:!0, img:!0, input:!0, isindex:!0, keygen:!0, link:!0, meta:!0, param:!0, source:!0, track:!0, embed:!0, wbr:!0}, E = {SCRIPT:!0, STYLE:!0, TEXTAREA:!0, TITLE:!0, PLAINTEXT:!0, XMP:!0, script:!0, style:!0, textarea:!0, title:!0, plaintext:!0, xmp:!0}, K = {TEXTAREA:!0, TITLE:!0, textarea:!0, title:!0}, P = {CAPTION:{ARTICLE:!0, SECTION:!0, NAV:!0, ASIDE:!0, H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, HEADER:!0, FOOTER:!0, 
ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, 
KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, DD:{ARTICLE:!0, SECTION:!0, NAV:!0, ASIDE:!0, H1:!0, H2:!0, H3:!0, H4:!0, H5:!0, H6:!0, HEADER:!0, FOOTER:!0, ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, 
BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, TABLE:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, CANVAS:!0}, DT:{ADDRESS:!0, P:!0, HR:!0, PRE:!0, BLOCKQUOTE:!0, OL:!0, UL:!0, DL:!0, FIGURE:!0, DIV:!0, A:!0, EM:!0, STRONG:!0, SMALL:!0, 
S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, TABLE:!0, FORM:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, FIELDSET:!0, DETAILS:!0, DIALOG:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, 
CANVAS:!0}, P:{A:!0, EM:!0, STRONG:!0, SMALL:!0, S:!0, CITE:!0, Q:!0, DFN:!0, ABBR:!0, DATA:!0, TIME:!0, CODE:!0, VAR:!0, SAMP:!0, KBD:!0, SUB:!0, SUP:!0, I:!0, B:!0, U:!0, MARK:!0, RUBY:!0, BDI:!0, BDO:!0, SPAN:!0, BR:!0, WBR:!0, INS:!0, DEL:!0, PICTURE:!0, IMG:!0, IFRAME:!0, EMBED:!0, OBJECT:!0, VIDEO:!0, AUDIO:!0, MAP:!0, AREA:!0, math:!0, svg:!0, LABEL:!0, INPUT:!0, BUTTON:!0, SELECT:!0, DATALIST:!0, TEXTAREA:!0, KEYGEN:!0, OUTPUT:!0, PROGRESS:!0, METER:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0, 
CANVAS:!0}, HTML:{HEAD:!0, BODY:!0}, HEAD:{TITLE:!0, BASE:!0, BGSOUND:!0, LINK:!0, META:!0, STYLE:!0, SCRIPT:!0, NOSCRIPT:!0, TEMPLATE:!0}, COLGROUP:{COL:!0}, OPTGROUP:{OPTION:!0}, OPTION:{}, TBODY:{TR:!0}, TR:{TH:!0, TD:!0}, RBC:{RB:!0, RP:!0, RT:!0}};
P.LI = P.TD = P.DD;
P.TH = P.DT;
P.RB = P.RP = P.RT = P.P;
P.TFOOT = P.THEAD = P.TBODY;
P.RTC = P.RBC;
var Q = {a:2, b:2, c:2, d:2, e:2, f:2, g:2, h:2, i:2, j:2, k:2, l:2, m:2, n:2, o:2, p:2, q:2, r:2, s:2, t:2, u:2, v:2, w:2, x:2, y:2, z:2, A:1, B:1, C:1, D:1, E:1, F:1, G:1, H:1, I:1, J:1, K:1, L:1, M:1, N:1, O:1, P:1, Q:1, R:1, S:1, T:1, U:1, V:1, W:1, X:1, Y:1, Z:1, "\t":4, "\n":4, "\f":4, "\r":4, " ":4};
function aa(a) {
  function y() {
    var d = a.indexOf("<", e + 1);
    -1 === d ? (e = a.length, n()) : e < d ? e = d : ++e;
  }
  function n() {
    if (e) {
      var d = a.substring(0, e);
      u.ka(I && !K[v] ? d : F(d));
      a = a.substring(e);
      e = 0;
    }
  }
  function A(d) {
    u.aa && u.aa(d);
  }
  function F(d) {
    return d.split("&lt;").join("<").split("&gt;").join(">").split("&amp;lt;").join("&lt;").split("&amp;gt;").join("&gt;");
  }
  function ba(d, p, w) {
    for (var f = 0, m = w.length, g = 3, b, C; g < m && 2 !== f;) {
      C = w.charAt(g);
      switch(f) {
        case 0:
          Q[C] & 4 ? f = 1 : ">" === C && (f = 2);
          f && (b = w.substring(2, g));
          break;
        case 1:
          ">" === C && (f = 2);
      }
      ++g;
    }
    return 2 === f ? (x[b] || M(d, p, q || r ? b : b.toUpperCase(), !1), g) : 0;
  }
  function M(d, p, w, f) {
    var m = 0, g = d.length;
    if (w) {
      for (m = g; 0 <= m && d[--m] !== w;) {
      }
    }
    if (0 <= m) {
      for (; m < g;) {
        p.$(d[--g], f && !P[d[g]], !1), q && l[d[g]] && (q = !!p.ea);
      }
      d.length = m;
      if (r) {
        for (r = !1, g = m; g;) {
          if (0 < d[--g].indexOf(":")) {
            r = !0;
            break;
          }
        }
      }
    } else {
      p.$(w, !1, !0);
    }
  }
  function ca(d, p, w, f) {
    function m(N, O) {
      function S(da) {
        return F(da).split('\\"').join('"').split("\\'").join("'").split("&quot;").join('"').split("&apos;").join("'");
      }
      T[N] = !0 === O ? !0 : t[N.toLowerCase()] ? q ? S(O || N) : !0 : S(O || "");
      ++U;
    }
    function g() {
      (G = "/>" === f.substr(k, 2)) && ++k;
      return G;
    }
    for (var b = 1, C = f.length, k = 2, T = {}, U = 0, G = !1, h, B, z, D, V, J; k < C && 9 > b;) {
      h = f.charAt(k);
      switch(b) {
        case 1:
          if (Q[h] & 4) {
            b = 2, B = f.substring(1, k);
          } else if (">" === h || g()) {
            b = 9, B = f.substring(1, k);
          }
          break;
        case 2:
          ">" === h || g() ? b = 9 : Q[h] & 4 || (b = 3, z = k);
          break;
        case 3:
          if ("=" === h) {
            b = 5, D = f.substring(z, k);
          } else if (Q[h] & 4) {
            b = 4, D = f.substring(z, k);
          } else if (">" === h || g()) {
            b = 9, m(f.substring(z, k), !0);
          }
          break;
        case 4:
          "=" === h ? b = 5 : ">" === h || g() ? (b = 9, m(D, !0)) : Q[h] & 4 || (b = 3, m(D, !0), z = k);
          break;
        case 5:
          '"' === h || "'" === h ? (b = 6, V = h, z = k + 1) : Q[h] & 4 || (b = 7, z = k);
          J = !1;
          break;
        case 6:
          J || h !== V || (b = 2, m(D, f.substring(z, k)));
          J = "\\" === h && !J;
          break;
        case 7:
          Q[h] & 4 ? b = 2 : ">" === h && (b = 9), 7 !== b && m(D, f.substring(z, k));
      }
      ++k;
    }
    if (9 === b) {
      b = B.toUpperCase();
      q || (q = !!l[B]);
      r || (r = 0 < B.indexOf(":"));
      if (!q && !r) {
        for (; p;) {
          if (P[p] && !P[p][b]) {
            M(d, w, p, !1), p = d[d.length - 1];
          } else {
            break;
          }
        }
      }
      (G = G || !!x[b]) || (d[d.length] = q || r ? B : b);
      w.ja(q || r ? B : b, U ? T : null, G, k);
      return k;
    }
    return 0;
  }
  for (var u = R, q = !!R.ea, e = 0, r = !1, H = [], W = a.length - e, v, I, c, L; a;) {
    v = H[H.length - 1];
    I = E[v];
    if (a.indexOf("<?") === e) {
      if (n(), c = a.indexOf("?>"), -1 !== c) {
        u.ia(F(a.substring(2, c))), a = a.substring(c + 2);
      } else {
        A(a);
        return;
      }
    } else if (a.indexOf("</") === e && Q[a.charAt(e + 2)] & 3) {
      if (I && ("PLAINTEXT" === v || "plaintext" === v ? (y(), L = !0) : (c = a.indexOf("</" + (q || r ? v : v.toLowerCase())), -1 === c && (c = a.indexOf("</" + (q || r ? v.toUpperCase() : v))), -1 === c && (y(), L = !0))), L) {
        L = !1;
      } else {
        if (n(), c = ba(H, u, a)) {
          a = a.substring(c);
        } else {
          A(a);
          return;
        }
      }
    } else if (I) {
      y();
    } else {
      if (a.indexOf("<!DOCTYPE ") === e) {
        if (n(), c = a.indexOf(">"), -1 !== c) {
          u.ha(a.substring(e, c + 1)), a = a.substring(c + 1);
        } else {
          A(a);
          return;
        }
      } else if (a.indexOf("<![CDATA[") === e) {
        if (n(), c = a.indexOf("]]\x3e"), -1 !== c) {
          u.fa(F(a.substring(9, c))), a = a.substring(c + 3);
        } else {
          A(a);
          return;
        }
      } else if (a.indexOf("\x3c!--") === e) {
        if (n(), c = a.indexOf("--\x3e"), -1 !== c) {
          u.ga(F(a.substring(4, c))), a = a.substring(c + 3);
        } else {
          A(a);
          return;
        }
      } else if ("<" === a.charAt(e) && Q[a.charAt(e + 1)] & 3) {
        if (n(), c = ca(H, v, u, a)) {
          a = a.substring(c);
        } else {
          A(a);
          return;
        }
      } else {
        y();
      }
    }
    c = a.length - e;
    if (c === W) {
      A(a);
      return;
    }
    W = c;
  }
  M(H, u, "", !0);
}
;var X, Y, Z, R = {da:function() {
  X = Y = [];
  Z = [];
}, ba:function() {
  "number" !== typeof X[0] && X.unshift(11);
  return X;
}, aa:function(a) {
  throw a;
}, ha:function(a) {
  X[0] = 9;
  X[1] = a;
}, ja:function(a, y, n) {
  a = [a];
  y && (a[1] = y);
  Y.push(a);
  n || (Z.push(Y), Y = a);
}, $:function(a, y, n) {
  n ? Y.push("</" + a + ">") : y || a === Y[0] && (Y = Z.pop());
}, ka:function(a) {
  Y.push(a);
}, ga:function(a) {
  Y.push([8, a]);
}, fa:function(a) {
  Y.push([4, a]);
}, ia:function(a) {
  Y.push([7, a]);
}};
module.exports = function(a) {
  R.da();
  aa(a);
  return R.ba();
};

