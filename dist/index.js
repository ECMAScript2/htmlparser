/* es2-html-parser@0.0.1
(c) 2024-2024 itozyun <itozyun@gmail.com> (https://outcloud.blogspot.com/)(undefined), MIT. */
function h(a) {
  function t(l, p, w) {
    for (var g = 0, m = w.length, k = 2, b, A, d; k < m && 3 !== g;) {
      A = w.charAt(k);
      switch(g) {
        case 0:
          n[A] & 3 && (g = 1, d = k);
          break;
        case 1:
          n[A] & 4 ? g = 2 : ">" === A && (g = 3);
          1 !== g && (b = w.substring(d, k));
          break;
        case 2:
          ">" === A && (g = 3);
      }
      ++k;
    }
    return 3 === g ? (C(l, p, u ? b : b.toUpperCase(), !1), k) : 0;
  }
  function C(l, p, w, g) {
    var m = 0, k = l.length;
    if (w) {
      for (m = k; 0 <= m && l[--m] !== w;) {
      }
    }
    if (0 <= m) {
      for (; m < k;) {
        p.D(l[--k], g || m < k), u && r[l[k]] && (u = !!p.v);
      }
      l.length = m;
    }
  }
  function B(l, p, w, g) {
    function m(J, O) {
      H[++K] = J;
      H[++K] = x[J.toLowerCase()] ? !0 : O || "";
    }
    function k() {
      (E = "/>" === g.substr(d, 2)) && ++d;
      return E;
    }
    for (var b = 0, A = g.length, d = 1, H = [], K = -1, E = !1, D, e, q, y, L, G; d < A && 9 > b;) {
      e = g.charAt(d);
      switch(b) {
        case 0:
          n[e] & 3 && (b = 1, q = d);
          break;
        case 1:
          if (n[e] & 4) {
            b = 2, D = g.substring(q, d);
          } else if (">" === e || k()) {
            b = 9, D = g.substring(q, d);
          }
          break;
        case 2:
          if (":" === e) {
            b = 3, q = d;
          } else if (n[e] & 3) {
            b = 4, q = d;
          } else if (">" === e || k()) {
            b = 9;
          }
          break;
        case 3:
          b = n[e] & 3 ? 4 : 9;
          break;
        case 4:
          if ("=" === e) {
            b = 6, y = g.substring(q, d);
          } else if (n[e] & 4) {
            b = 5, y = g.substring(q, d);
          } else if (">" === e || k()) {
            b = 9, m(g.substring(q, d));
          }
          break;
        case 5:
          if (":" === e) {
            b = 3, m(y), q = d;
          } else if (n[e] & 3) {
            b = 4, m(y), q = d;
          } else if ("=" === e) {
            b = 6;
          } else if (">" === e || k()) {
            b = 9, m(y);
          }
          break;
        case 6:
          '"' === e || "'" === e ? (b = 7, L = e, q = d + 1) : n[e] & 4 || (b = 8, q = d);
          G = !1;
          break;
        case 7:
          G || e !== L || (b = 2, m(y, g.substring(q, d)));
          G = "\\" === e && !G;
          break;
        case 8:
          n[e] & 4 ? b = 2 : ">" === e ? b = 9 : !F[y] && k() && (b = 9), 8 !== b && m(y, g.substring(q, d));
      }
      ++d;
    }
    if (9 === b) {
      b = D.toUpperCase();
      u || (u = !!r[D]);
      if (!u) {
        if (I[b]) {
          for (; p && N[p];) {
            C(l, w, p, !0), p = l[l.length - 1];
          }
        }
        for (; p;) {
          if (P[p] && P[p][b]) {
            C(l, w, p, !0), p = l[l.length - 1];
          } else {
            break;
          }
        }
      }
      (E = E || Q[b]) || (l[l.length] = u ? D : b);
      w.G(u ? D : b, H, E, d);
      return d;
    }
    return 0;
  }
  for (var f = R, z = [], u = !!f.v, M = a, c, v; a;) {
    (c = v = z[z.length - 1]) && u && (v = c.toUpperCase());
    if (c && S[v]) {
      if (c = a.toUpperCase().indexOf("</" + v), 0 <= c) {
        c && f.j(a.substring(0, c)), a = a.substring(c), (v = t(z, f, a)) ? a = a.substring(v) : (f.j(a), a = "");
      } else if ("PLAINTEXT" === v) {
        f.j(a), a = "";
      } else {
        f.i(a);
        return;
      }
    } else if (0 === a.indexOf("<!DOCTYPE ")) {
      if (c = a.indexOf(">"), -1 !== c) {
        f.C(a.substring(10, c)), a = a.substring(c + 1);
      } else {
        f.i(a);
        return;
      }
    } else if (0 === a.indexOf("<?")) {
      if (c = a.indexOf("?>"), -1 !== c) {
        f.F(a.substring(2, c)), a = a.substring(c + 2);
      } else {
        f.i(a);
        return;
      }
    } else if (0 === a.indexOf("<![CDATA[")) {
      if (c = a.indexOf("]]\x3e"), -1 !== c) {
        f.A(a.substring(9, c)), a = a.substring(c + 3);
      } else {
        f.i(a);
        return;
      }
    } else {
      0 === a.indexOf("\x3c!--") ? (c = a.indexOf("--\x3e"), -1 !== c ? (f.o(a.substring(4, c)), a = a.substring(c + 3)) : (f.o(a.substring(4)), a = "")) : (0 === a.indexOf("</") ? a = (v = t(z, f, a)) ? a.substring(v) : "&lt;" + a.substr(1) : 0 === a.indexOf("<") && (a = (v = B(z, c, f, a)) ? a.substring(v) : "&lt;" + a.substr(1)), a && (c = a.indexOf("<"), -1 === c ? (f.j(a), a = "") : c && (f.j(a.substring(0, c)), a = a.substring(c))));
    }
    if (a === M) {
      f.i(a);
      return;
    }
    M = a;
  }
  C(z, f, "", !0);
}
var r = {xml:!0, svg:!0, math:!0}, Q = {AREA:!0, BASE:!0, BASEFONT:!0, BR:!0, BGSOUND:!0, COL:!0, FRAME:!0, HR:!0, IMG:!0, INPUT:!0, ISINDEX:!0, KEYGEN:!0, LINK:!0, META:!0, PARAM:!0, SOURCE:!0, TRACK:!0, EMBED:!0, WBR:!0}, I = {ADDRESS:!0, APPLET:!0, BLOCKQUOTE:!0, BUTTON:!0, CENTER:!0, DD:!0, DEL:!0, DIR:!0, DIV:!0, DL:!0, DT:!0, FIELDSET:!0, FORM:!0, FRAMESET:!0, HR:!0, IFRAME:!0, INS:!0, ISINDEX:!0, LI:!0, MAP:!0, MARQUEE:!0, MENU:!0, NOFRAMES:!0, NOSCRIPT:!0, OBJECT:!0, OL:!0, P:!0, PRE:!0, 
SCRIPT:!0, TABLE:!0, TBODY:!0, TD:!0, TFOOT:!0, TH:!0, THEAD:!0, TR:!0, UL:!0}, N = {ABBR:!0, ACRONYM:!0, APPLET:!0, B:!0, BASEFONT:!0, BDO:!0, BIG:!0, BR:!0, BUTTON:!0, CAPTION:!0, CITE:!0, CODE:!0, DEL:!0, DFN:!0, EM:!0, FONT:!0, I:!0, IFRAME:!0, IMG:!0, INPUT:!0, INS:!0, KBD:!0, LABEL:!0, MAP:!0, NOBR:!0, OBJECT:!0, Q:!0, RB:!0, RBC:!0, RP:!0, RT:!0, RTC:!0, RUBY:!0, S:!0, SAMP:!0, SCRIPT:!0, SELECT:!0, SMALL:!0, SPAN:!0, STRIKE:!0, STRONG:!0, SUB:!0, SUP:!0, TEXTAREA:!0, TT:!0, U:!0, VAR:!0, 
WBR:!0}, P = {HEAD:{BODY:!0}, LI:{LI:!0}, OPTION:{OPTION:!0}, P:{P:!0}, OPTGROUP:{OPTGROUP:!0}, DT:{DT:!0, DD:!0}, CAPTION:{CAPTION:!0, COLGROUP:!0, THEAD:!0, TBODY:!0, TFOOT:!0, TR:!0}, THEAD:{CAPTION:!0, COLGROUP:!0, THEAD:!0, TBODY:!0, TFOOT:!0}, TR:{THEAD:!0, TBODY:!0, TFOOT:!0, TR:!0}, TH:{THEAD:!0, TBODY:!0, TFOOT:!0, TR:!0, TD:!0, TH:!0}, RB:{RBC:!0, RTC:!0, RB:!0, RP:!0, RT:!0}, RBC:{RBC:!0, RTC:!0}};
P.DD = P.DT;
P.COLGROUP = P.CAPTION;
P.TFOOT = P.TBODY = P.THEAD;
P.TD = P.TH;
P.RP = P.RT = P.RB;
P.RTC = P.RBC;
var S = {SCRIPT:!0, STYLE:!0, PLAINTEXT:!0, XMP:!0, TEXTAREA:!0}, F = {action:!0, archive:!0, background:!0, cite:!0, classid:!0, codebase:!0, data:!0, href:!0, longdesc:!0, profile:!0, src:!0, usemap:!0}, x = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, n = {}, T = "abcdefghijklmnopqrstuvwxyz \t\r\n\f\b", U;
for (U = 26; U;) {
  n[T.charAt(--U)] = 2;
}
U = 26;
for (T = T.toUpperCase(); U;) {
  n[T.charAt(--U)] = 1;
}
for (U = 32; 26 < U;) {
  n[T.charAt(--U)] = 4;
}
;var R = {l:null, m:null, h:null, u:function() {
  R.l = R.h = [];
  R.m = [];
}, s:function() {
  var a = R.l;
  "number" !== typeof a[0] && a.unshift(11);
  return a;
}, g:function() {
  return R.h;
}, i:function(a) {
  throw a;
}, C:function(a) {
  var t = R.l;
  t[0] = 9;
  t[1] = "<!DOCTYPE " + a + ">";
}, G:function(a, t, C) {
  a = [a];
  var B;
  if (t) {
    var f = {};
    for (B = 0; B < t.length; B += 2) {
      var z = t[B];
      var u = t[B + 1];
      f[z] = u;
    }
    t.length && (a[1] = f);
  }
  R.g().push(a);
  C || (R.m.push(R.h), R.h = a);
}, D:function(a) {
  a === R.g()[0] && (R.h = R.m.pop());
}, j:function(a) {
  R.g().push(a);
}, o:function(a) {
  R.g().push([8, a]);
}, A:function(a) {
  R.g().push([4, a]);
}, F:function(a) {
  R.g().push([7, a]);
}};
module.exports = function(a) {
  R.u();
  h(a);
  return R.s();
};

