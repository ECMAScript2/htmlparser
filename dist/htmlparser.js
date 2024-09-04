/* es2-html-parser@0.0.1
(c) 2024-2024 itozyun <itozyun@gmail.com> (https://outcloud.blogspot.com/)(undefined), MIT. */
(function(Q, Y) {
  function R(a) {
    function r() {
      n && g.i(n);
      n = "";
    }
    function A(l, m, u) {
      for (var f = 0, v = u.length, h = 2, b, w, d; h < v && 3 !== f;) {
        w = u.charAt(h);
        switch(f) {
          case 0:
            p[w] & 3 && (f = 1, d = h);
            break;
          case 1:
            p[w] & 4 ? f = 2 : ">" === w && (f = 3);
            1 !== f && (b = u.substring(d, h));
            break;
          case 2:
            ">" === w && (f = 3);
        }
        ++h;
      }
      return 3 === f ? (B(l, m, x ? b : b.toUpperCase(), !1), h) : 0;
    }
    function B(l, m, u, f) {
      function v(w) {
        return f && !(k[w] && k[w][w]);
      }
      var h = 0, b = l.length;
      if (u) {
        for (h = b; 0 <= h && l[--h] !== u;) {
        }
      }
      if (0 <= h) {
        for (; h < b;) {
          m.j(l[--b], v(l[b]), !1), x && L[l[b]] && (x = !!m.l);
        }
        l.length = h;
      } else {
        m.j(u, v(u), !0);
      }
    }
    function E(l, m, u, f) {
      function v(J, M) {
        K[++N] = J;
        K[++N] = S[J.toLowerCase()] ? x ? M || J : !0 : M || "";
      }
      function h() {
        (F = "/>" === f.substr(d, 2)) && ++d;
        return F;
      }
      for (var b = 0, w = f.length, d = 1, K = [], N = -1, F = !1, C, e, q, z, O, I; d < w && 9 > b;) {
        e = f.charAt(d);
        switch(b) {
          case 0:
            p[e] & 3 && (b = 1, q = d);
            break;
          case 1:
            if (p[e] & 4) {
              b = 2, C = f.substring(q, d);
            } else if (">" === e || h()) {
              b = 9, C = f.substring(q, d);
            }
            break;
          case 2:
            if (":" === e) {
              b = 3, q = d;
            } else if (p[e] & 3) {
              b = 4, q = d;
            } else if (">" === e || h()) {
              b = 9;
            }
            break;
          case 3:
            b = p[e] & 3 ? 4 : 9;
            break;
          case 4:
            if ("=" === e) {
              b = 6, z = f.substring(q, d);
            } else if (p[e] & 4) {
              b = 5, z = f.substring(q, d);
            } else if (">" === e || h()) {
              b = 9, v(f.substring(q, d));
            }
            break;
          case 5:
            if (":" === e) {
              b = 3, v(z), q = d;
            } else if (p[e] & 3) {
              b = 4, v(z), q = d;
            } else if ("=" === e) {
              b = 6;
            } else if (">" === e || h()) {
              b = 9, v(z);
            }
            break;
          case 6:
            '"' === e || "'" === e ? (b = 7, O = e, q = d + 1) : p[e] & 4 || (b = 8, q = d);
            I = !1;
            break;
          case 7:
            I || e !== O || (b = 2, v(z, f.substring(q, d)));
            I = "\\" === e && !I;
            break;
          case 8:
            p[e] & 4 ? b = 2 : ">" === e ? b = 9 : !T[z] && h() && (b = 9), 8 !== b && v(z, f.substring(q, d));
        }
        ++d;
      }
      if (9 === b) {
        b = C.toUpperCase();
        x || (x = !!L[C]);
        if (!x) {
          if (U[b]) {
            for (; m && V[m];) {
              B(l, u, m, !1), m = l[l.length - 1];
            }
          }
          for (; m;) {
            if (k[m] && k[m][b]) {
              B(l, u, m, !1), m = l[l.length - 1];
            } else {
              break;
            }
          }
        }
        (F = F || W[b]) || (l[l.length] = x ? C : b);
        u.m(x ? C : b, K, F, d);
        return d;
      }
      return 0;
    }
    for (var g = t, n = "", D = [], x = !!g.l, P = a, c, G; a;) {
      (c = G = D[D.length - 1]) && x && (G = c.toUpperCase());
      if (X[G]) {
        if ("PLAINTEXT" === G) {
          g.i(a), a = "";
        } else if (c = a.toUpperCase().indexOf("</" + G), 0 <= c) {
          if (c && g.i(a.substring(0, c)), a = a.substring(c), c = A(D, g, a)) {
            a = a.substring(c);
          } else {
            g.h(n + a);
            return;
          }
        } else {
          g.h(n + a);
          return;
        }
      } else if (0 === a.indexOf("<!DOCTYPE ")) {
        if (c = a.indexOf(">"), -1 !== c) {
          r(), g.u(a.substring(10, c)), a = a.substring(c + 1);
        } else {
          g.h(n + a);
          return;
        }
      } else if (0 === a.indexOf("<?")) {
        if (c = a.indexOf("?>"), -1 !== c) {
          r(), a = a.substring(c + 2);
        } else {
          g.h(n + a);
          return;
        }
      } else if (0 === a.indexOf("<![CDATA[")) {
        if (c = a.indexOf("]]\x3e"), -1 !== c) {
          r(), a = a.substring(c + 3);
        } else {
          g.h(n + a);
          return;
        }
      } else if (0 === a.indexOf("\x3c!--")) {
        if (c = a.indexOf("--\x3e"), -1 !== c) {
          r(), a = a.substring(c + 3);
        } else {
          g.h(n + a);
          return;
        }
      } else if (0 === a.indexOf("</")) {
        if (r(), c = A(D, g, a)) {
          a = a.substring(c);
        } else {
          g.h(a);
          return;
        }
      } else if ("<" === a.charAt(0) && p[a.charAt(1)] & 3) {
        if (r(), c = E(D, c, g, a)) {
          a = a.substring(c);
        } else {
          g.h(a);
          return;
        }
      } else {
        c = a.indexOf("<"), -1 === c ? (g.i(n + a), a = n = "") : c ? (n += a.substring(0, c), a = a.substring(c)) : (n += "<", a = a.substring(1));
      }
      if (a === P) {
        g.h(n + a);
        return;
      }
      P = a;
    }
    r();
    B(D, g, "", !0);
  }
  var L = {xml:!0, svg:!0, math:!0}, W = {AREA:!0, BASE:!0, BASEFONT:!0, BR:!0, BGSOUND:!0, COL:!0, FRAME:!0, HR:!0, IMG:!0, INPUT:!0, ISINDEX:!0, KEYGEN:!0, LINK:!0, META:!0, PARAM:!0, SOURCE:!0, TRACK:!0, EMBED:!0, WBR:!0}, U = {ADDRESS:!0, APPLET:!0, BLOCKQUOTE:!0, BUTTON:!0, CENTER:!0, DD:!0, DEL:!0, DIR:!0, DIV:!0, DL:!0, DT:!0, FIELDSET:!0, FORM:!0, FRAMESET:!0, HR:!0, IFRAME:!0, INS:!0, ISINDEX:!0, LI:!0, MAP:!0, MARQUEE:!0, MENU:!0, NOFRAMES:!0, NOSCRIPT:!0, OBJECT:!0, OL:!0, P:!0, PRE:!0, 
  SCRIPT:!0, TABLE:!0, TBODY:!0, TD:!0, TFOOT:!0, TH:!0, THEAD:!0, TR:!0, UL:!0}, V = {ABBR:!0, ACRONYM:!0, APPLET:!0, B:!0, BASEFONT:!0, BDO:!0, BIG:!0, BR:!0, BUTTON:!0, CAPTION:!0, CITE:!0, CODE:!0, DEL:!0, DFN:!0, EM:!0, FONT:!0, I:!0, IFRAME:!0, IMG:!0, INPUT:!0, INS:!0, KBD:!0, LABEL:!0, MAP:!0, NOBR:!0, OBJECT:!0, Q:!0, RB:!0, RBC:!0, RP:!0, RT:!0, RTC:!0, RUBY:!0, S:!0, SAMP:!0, SCRIPT:!0, SELECT:!0, SMALL:!0, SPAN:!0, STRIKE:!0, STRONG:!0, SUB:!0, SUP:!0, TEXTAREA:!0, TT:!0, U:!0, VAR:!0, 
  WBR:!0}, k = {HEAD:{BODY:!0}, LI:{LI:!0}, OPTION:{OPTION:!0}, P:{P:!0}, OPTGROUP:{OPTGROUP:!0}, DT:{DT:!0, DD:!0}, CAPTION:{CAPTION:!0, COLGROUP:!0, THEAD:!0, TBODY:!0, TFOOT:!0, TR:!0}, THEAD:{CAPTION:!0, COLGROUP:!0, THEAD:!0, TBODY:!0, TFOOT:!0}, TR:{THEAD:!0, TBODY:!0, TFOOT:!0, TR:!0}, TH:{THEAD:!0, TBODY:!0, TFOOT:!0, TR:!0, TD:!0, TH:!0}, RB:{RBC:!0, RTC:!0, RB:!0, RP:!0, RT:!0}, RBC:{RBC:!0, RTC:!0}}, y, X, T, S, p, H, t;
  k.DD = k.DT;
  k.COLGROUP = k.CAPTION;
  k.TFOOT = k.TBODY = k.THEAD;
  k.TD = k.TH;
  k.RP = k.RT = k.RB;
  k.RTC = k.RBC;
  X = {SCRIPT:!0, STYLE:!0, PLAINTEXT:!0, XMP:!0, TEXTAREA:!0};
  T = {action:!0, archive:!0, background:!0, cite:!0, classid:!0, codebase:!0, data:!0, href:!0, longdesc:!0, profile:!0, src:!0, usemap:!0};
  S = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0};
  p = {};
  H = "abcdefghijklmnopqrstuvwxyz \t\r\n\f\b";
  for (y = 26; y;) {
    p[H.charAt(--y)] = 2;
  }
  y = 26;
  for (H = H.toUpperCase(); y;) {
    p[H.charAt(--y)] = 1;
  }
  for (y = 32; 26 < y;) {
    p[H.charAt(--y)] = 4;
  }
  t = {g:"", h:function(a) {
    t.g = a;
  }, m:function(a, r, A) {
    t.g += "<" + a;
    a = 0;
    for (var B, E; a < r.length; a += 2) {
      B = r[a], E = r[a + 1], t.g += " " + B[0] + (!0 !== E ? '="' + E.split('"').join('\\"').split('\\\\"').join('\\"') + '"' : "");
    }
    t.g += (A ? "/" : "") + ">";
  }, j:function(a) {
    t.g += "</" + a + ">";
  }, i:function(a) {
    a.split(" ").join("") && (a = " " === a.charAt(0) ? a.substr(1) : a, a = a.length && " " === a.charAt(a.length - 1) ? a.substr(0, a.length - 1) : a, t.g += a);
  }, s:function() {
  }, o:function() {
  }, v:function() {
  }};
  Q.onload = function() {
    var a = document.all("input"), r = document.all("output");
    document.all("form").onsubmit = bz;
    function bz(A) {
      A && A.preventDefault();
      "undefined" != typeof event && (event.returnValue = !1);
      R(a.value);
      r.value = t.g;
      return !1;
    }
    bz = !1;
  };
})(this, Date);

