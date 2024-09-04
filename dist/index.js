/* es2-html-parser@0.0.1
(c) 2024-2024 itozyun <itozyun@gmail.com> (https://outcloud.blogspot.com/)(undefined), MIT. */
function h(a) {
  function u(k, m, w) {
    for (var d = 0, p = w.length, r = 2, b, A, e; r < p && 3 !== d;) {
      A = w.charAt(r);
      switch(d) {
        case 0:
          l[A] & 3 && (d = 1, e = r);
          break;
        case 1:
          l[A] & 4 ? d = 2 : ">" === A && (d = 3);
          1 !== d && (b = w.substring(e, r));
          break;
        case 2:
          ">" === A && (d = 3);
      }
      ++r;
    }
    return 3 === d ? (C(k, m, t ? b : b.toUpperCase()), r) : 0;
  }
  function C(k, m, w) {
    var d = 0, p = k.length;
    if (w) {
      for (d = p; 0 <= d && k[--d] !== w;) {
      }
    }
    if (0 <= d) {
      for (; d < p;) {
        m.D(k[--p]), t && q[k[p]] && (t = !!m.v);
      }
      k.length = d;
    }
  }
  function B(k, m, w, d) {
    function p(J, O) {
      H[++K] = J;
      H[++K] = x[J.toLowerCase()] ? !0 : O || "";
    }
    function r() {
      (E = "/>" === d.substr(e, 2)) && ++e;
      return E;
    }
    for (var b = 0, A = d.length, e = 1, H = [], K = -1, E = !1, D, f, n, y, L, G; e < A && 9 > b;) {
      f = d.charAt(e);
      switch(b) {
        case 0:
          l[f] & 3 && (b = 1, n = e);
          break;
        case 1:
          if (l[f] & 4) {
            b = 2, D = d.substring(n, e);
          } else if (">" === f || r()) {
            b = 9, D = d.substring(n, e);
          }
          break;
        case 2:
          if (":" === f) {
            b = 3, n = e;
          } else if (l[f] & 3) {
            b = 4, n = e;
          } else if (">" === f || r()) {
            b = 9;
          }
          break;
        case 3:
          b = l[f] & 3 ? 4 : 9;
          break;
        case 4:
          if ("=" === f) {
            b = 6, y = d.substring(n, e);
          } else if (l[f] & 4) {
            b = 5, y = d.substring(n, e);
          } else if (">" === f || r()) {
            b = 9, p(d.substring(n, e));
          }
          break;
        case 5:
          if (":" === f) {
            b = 3, p(y), n = e;
          } else if (l[f] & 3) {
            b = 4, p(y), n = e;
          } else if ("=" === f) {
            b = 6;
          } else if (">" === f || r()) {
            b = 9, p(y);
          }
          break;
        case 6:
          '"' === f || "'" === f ? (b = 7, L = f, n = e + 1) : l[f] & 4 || (b = 8, n = e);
          G = !1;
          break;
        case 7:
          G || f !== L || (b = 2, p(y, d.substring(n, e)));
          G = "\\" === f && !G;
          break;
        case 8:
          l[f] & 4 ? b = 2 : ">" === f ? b = 9 : !F[y] && r() && (b = 9), 8 !== b && p(y, d.substring(n, e));
      }
      ++e;
    }
    if (9 === b) {
      b = D.toUpperCase();
      t || (t = !!q[D]);
      if (!t) {
        if (I[b]) {
          for (; m && N[m];) {
            C(k, w, m), m = k[k.length - 1];
          }
        }
        for (; m;) {
          if (P[m] && P[m][b]) {
            C(k, w, m), m = k[k.length - 1];
          } else {
            break;
          }
        }
      }
      (E = E || Q[b]) || (k[k.length] = t ? D : b);
      w.G(t ? D : b, H, E, e);
      return e;
    }
    return 0;
  }
  for (var g = R, z = [], t = !!g.v, M = a, c, v; a;) {
    (c = v = z[z.length - 1]) && t && (v = c.toUpperCase());
    if (c && S[v]) {
      if (c = a.toUpperCase().indexOf("</" + v), 0 <= c) {
        c && g.j(a.substring(0, c)), a = a.substring(c), (v = u(z, g, a)) ? a = a.substring(v) : (g.j(a), a = "");
      } else if ("PLAINTEXT" === v) {
        g.j(a), a = "";
      } else {
        g.i(a);
        return;
      }
    } else if (0 === a.indexOf("<!DOCTYPE ")) {
      if (c = a.indexOf(">"), -1 !== c) {
        g.C(a.substring(10, c)), a = a.substring(c + 1);
      } else {
        g.i(a);
        return;
      }
    } else if (0 === a.indexOf("<?")) {
      if (c = a.indexOf("?>"), -1 !== c) {
        g.F(a.substring(2, c)), a = a.substring(c + 2);
      } else {
        g.i(a);
        return;
      }
    } else if (0 === a.indexOf("<![CDATA[")) {
      if (c = a.indexOf("]]\x3e"), -1 !== c) {
        g.A(a.substring(9, c)), a = a.substring(c + 3);
      } else {
        g.i(a);
        return;
      }
    } else {
      0 === a.indexOf("\x3c!--") ? (c = a.indexOf("--\x3e"), -1 !== c ? (g.o(a.substring(4, c)), a = a.substring(c + 3)) : (g.o(a.substring(4)), a = "")) : (0 === a.indexOf("</") ? a = (v = u(z, g, a)) ? a.substring(v) : "&lt;" + a.substr(1) : 0 === a.indexOf("<") && (a = (v = B(z, c, g, a, t)) ? a.substring(v) : "&lt;" + a.substr(1)), a && (c = a.indexOf("<"), -1 === c ? (g.j(a), a = "") : c && (g.j(a.substring(0, c)), a = a.substring(c))));
    }
    if (a === M) {
      g.i(a);
      return;
    }
    M = a;
  }
  C(z, g);
}
var q = {xml:!0, svg:!0, math:!0}, Q = {AREA:!0, BASE:!0, BASEFONT:!0, BR:!0, BGSOUND:!0, COL:!0, FRAME:!0, HR:!0, IMG:!0, INPUT:!0, ISINDEX:!0, KEYGEN:!0, LINK:!0, META:!0, PARAM:!0, SOURCE:!0, TRACK:!0, EMBED:!0, WBR:!0}, I = {ADDRESS:!0, APPLET:!0, BLOCKQUOTE:!0, BUTTON:!0, CENTER:!0, DD:!0, DEL:!0, DIR:!0, DIV:!0, DL:!0, DT:!0, FIELDSET:!0, FORM:!0, FRAMESET:!0, HR:!0, IFRAME:!0, INS:!0, ISINDEX:!0, LI:!0, MAP:!0, MARQUEE:!0, MENU:!0, NOFRAMES:!0, NOSCRIPT:!0, OBJECT:!0, OL:!0, P:!0, PRE:!0, 
SCRIPT:!0, TABLE:!0, TBODY:!0, TD:!0, TFOOT:!0, TH:!0, THEAD:!0, TR:!0, UL:!0}, N = {ABBR:!0, ACRONYM:!0, APPLET:!0, B:!0, BASEFONT:!0, BDO:!0, BIG:!0, BR:!0, BUTTON:!0, CAPTION:!0, CITE:!0, CODE:!0, DEL:!0, DFN:!0, EM:!0, FONT:!0, I:!0, IFRAME:!0, IMG:!0, INPUT:!0, INS:!0, KBD:!0, LABEL:!0, MAP:!0, NOBR:!0, OBJECT:!0, Q:!0, RB:!0, RBC:!0, RP:!0, RT:!0, RTC:!0, RUBY:!0, S:!0, SAMP:!0, SCRIPT:!0, SELECT:!0, SMALL:!0, SPAN:!0, STRIKE:!0, STRONG:!0, SUB:!0, SUP:!0, TEXTAREA:!0, TT:!0, U:!0, VAR:!0, 
WBR:!0}, P = {HEAD:{BODY:!0}, LI:{LI:!0}, OPTION:{OPTION:!0}, P:{P:!0}, OPTGROUP:{OPTGROUP:!0}, DT:{DT:!0, DD:!0}, CAPTION:{CAPTION:!0, COLGROUP:!0, THEAD:!0, TBODY:!0, TFOOT:!0, TR:!0}, THEAD:{CAPTION:!0, COLGROUP:!0, THEAD:!0, TBODY:!0, TFOOT:!0}, TR:{THEAD:!0, TBODY:!0, TFOOT:!0, TR:!0}, TH:{THEAD:!0, TBODY:!0, TFOOT:!0, TR:!0, TD:!0, TH:!0}, RB:{RBC:!0, RTC:!0, RB:!0, RP:!0, RT:!0}, RBC:{RBC:!0, RTC:!0}};
P.DD = P.DT;
P.COLGROUP = P.CAPTION;
P.TFOOT = P.TBODY = P.THEAD;
P.TD = P.TH;
P.RP = P.RT = P.RB;
P.RTC = P.RBC;
var S = {SCRIPT:!0, STYLE:!0, PLAINTEXT:!0, XMP:!0, TEXTAREA:!0}, F = {action:!0, archive:!0, background:!0, cite:!0, classid:!0, codebase:!0, data:!0, href:!0, longdesc:!0, profile:!0, src:!0, usemap:!0}, x = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0}, l = {}, T = "abcdefghijklmnopqrstuvwxyz \t\r\n\f\b", U;
for (U = 26; U;) {
  l[T.charAt(--U)] = 2;
}
U = 26;
for (T = T.toUpperCase(); U;) {
  l[T.charAt(--U)] = 1;
}
for (U = 32; 26 < U;) {
  l[T.charAt(--U)] = 4;
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
  var u = R.l;
  u[0] = 9;
  u[1] = "<!DOCTYPE " + a + ">";
}, G:function(a, u, C) {
  a = [a];
  var B;
  if (u) {
    var g = {};
    for (B = 0; B < u.length; B += 2) {
      var z = u[B];
      var t = u[B + 1];
      g[z] = t;
    }
    u.length && (a[1] = g);
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

