/* es2-html-parser@0.0.1
(c) 2024-2024 itozyun <itozyun@gmail.com> (https://outcloud.blogspot.com/)(undefined), MIT. */
(function(P, Y) {
  function Q(a) {
    function t() {
      n && g.i(n);
      n = "";
    }
    function z(k, p, v) {
      for (var f = 0, m = v.length, h = 2, b, A, d; h < m && 3 !== f;) {
        A = v.charAt(h);
        switch(f) {
          case 0:
            q[A] & 3 && (f = 1, d = h);
            break;
          case 1:
            q[A] & 4 ? f = 2 : ">" === A && (f = 3);
            1 !== f && (b = v.substring(d, h));
            break;
          case 2:
            ">" === A && (f = 3);
        }
        ++h;
      }
      return 3 === f ? (B(k, p, w ? b : b.toUpperCase(), !1), h) : 0;
    }
    function B(k, p, v, f) {
      var m = 0, h = k.length;
      if (v) {
        for (m = h; 0 <= m && k[--m] !== v;) {
        }
      }
      if (0 <= m) {
        for (; m < h;) {
          p.l(k[--h], f), w && K[k[h]] && (w = !!p.j);
        }
        k.length = m;
      }
    }
    function E(k, p, v, f) {
      function m(L, R) {
        J[++M] = L;
        J[++M] = S[L.toLowerCase()] ? !0 : R || "";
      }
      function h() {
        (F = "/>" === f.substr(d, 2)) && ++d;
        return F;
      }
      for (var b = 0, A = f.length, d = 1, J = [], M = -1, F = !1, C, e, r, y, N, I; d < A && 9 > b;) {
        e = f.charAt(d);
        switch(b) {
          case 0:
            q[e] & 3 && (b = 1, r = d);
            break;
          case 1:
            if (q[e] & 4) {
              b = 2, C = f.substring(r, d);
            } else if (">" === e || h()) {
              b = 9, C = f.substring(r, d);
            }
            break;
          case 2:
            if (":" === e) {
              b = 3, r = d;
            } else if (q[e] & 3) {
              b = 4, r = d;
            } else if (">" === e || h()) {
              b = 9;
            }
            break;
          case 3:
            b = q[e] & 3 ? 4 : 9;
            break;
          case 4:
            if ("=" === e) {
              b = 6, y = f.substring(r, d);
            } else if (q[e] & 4) {
              b = 5, y = f.substring(r, d);
            } else if (">" === e || h()) {
              b = 9, m(f.substring(r, d));
            }
            break;
          case 5:
            if (":" === e) {
              b = 3, m(y), r = d;
            } else if (q[e] & 3) {
              b = 4, m(y), r = d;
            } else if ("=" === e) {
              b = 6;
            } else if (">" === e || h()) {
              b = 9, m(y);
            }
            break;
          case 6:
            '"' === e || "'" === e ? (b = 7, N = e, r = d + 1) : q[e] & 4 || (b = 8, r = d);
            I = !1;
            break;
          case 7:
            I || e !== N || (b = 2, m(y, f.substring(r, d)));
            I = "\\" === e && !I;
            break;
          case 8:
            q[e] & 4 ? b = 2 : ">" === e ? b = 9 : !T[y] && h() && (b = 9), 8 !== b && m(y, f.substring(r, d));
        }
        ++d;
      }
      if (9 === b) {
        b = C.toUpperCase();
        w || (w = !!K[C]);
        if (!w) {
          if (U[b]) {
            for (; p && V[p];) {
              B(k, v, p, !1), p = k[k.length - 1];
            }
          }
          for (; p;) {
            if (l[p] && l[p][b]) {
              B(k, v, p, !1), p = k[k.length - 1];
            } else {
              break;
            }
          }
        }
        (F = F || W[b]) || (k[k.length] = w ? C : b);
        v.m(w ? C : b, J, F, d);
        return d;
      }
      return 0;
    }
    for (var g = u, n = "", D = [], w = !!g.j, O = a, c, G; a;) {
      (c = G = D[D.length - 1]) && w && (G = c.toUpperCase());
      if (X[G]) {
        if ("PLAINTEXT" === G) {
          g.i(a), a = "";
        } else if (c = a.toUpperCase().indexOf("</" + G), 0 <= c) {
          if (c && g.i(a.substring(0, c)), a = a.substring(c), c = z(D, g, a)) {
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
          t(), g.u(a.substring(10, c)), a = a.substring(c + 1);
        } else {
          g.h(n + a);
          return;
        }
      } else if (0 === a.indexOf("<?")) {
        if (c = a.indexOf("?>"), -1 !== c) {
          t(), a = a.substring(c + 2);
        } else {
          g.h(n + a);
          return;
        }
      } else if (0 === a.indexOf("<![CDATA[")) {
        if (c = a.indexOf("]]\x3e"), -1 !== c) {
          t(), a = a.substring(c + 3);
        } else {
          g.h(n + a);
          return;
        }
      } else if (0 === a.indexOf("\x3c!--")) {
        if (c = a.indexOf("--\x3e"), -1 !== c) {
          t(), a = a.substring(c + 3);
        } else {
          g.h(n + a);
          return;
        }
      } else if (0 === a.indexOf("</")) {
        if (t(), c = z(D, g, a)) {
          a = a.substring(c);
        } else {
          g.h(a);
          return;
        }
      } else if ("<" === a.charAt(0) && q[a.charAt(1)] & 3) {
        if (t(), c = E(D, c, g, a)) {
          a = a.substring(c);
        } else {
          g.h(a);
          return;
        }
      } else {
        c = a.indexOf("<"), -1 === c ? (g.i(n + a), a = n = "") : c ? (n += a.substring(0, c), a = a.substring(c)) : (n += "<", a = a.substring(1));
      }
      if (a === O) {
        g.h(n + a);
        return;
      }
      O = a;
    }
    t();
    B(D, g, "", !0);
  }
  var K = {xml:!0, svg:!0, math:!0}, W = {AREA:!0, BASE:!0, BASEFONT:!0, BR:!0, BGSOUND:!0, COL:!0, FRAME:!0, HR:!0, IMG:!0, INPUT:!0, ISINDEX:!0, KEYGEN:!0, LINK:!0, META:!0, PARAM:!0, SOURCE:!0, TRACK:!0, EMBED:!0, WBR:!0}, U = {ADDRESS:!0, APPLET:!0, BLOCKQUOTE:!0, BUTTON:!0, CENTER:!0, DD:!0, DEL:!0, DIR:!0, DIV:!0, DL:!0, DT:!0, FIELDSET:!0, FORM:!0, FRAMESET:!0, HR:!0, IFRAME:!0, INS:!0, ISINDEX:!0, LI:!0, MAP:!0, MARQUEE:!0, MENU:!0, NOFRAMES:!0, NOSCRIPT:!0, OBJECT:!0, OL:!0, P:!0, PRE:!0, 
  SCRIPT:!0, TABLE:!0, TBODY:!0, TD:!0, TFOOT:!0, TH:!0, THEAD:!0, TR:!0, UL:!0}, V = {ABBR:!0, ACRONYM:!0, APPLET:!0, B:!0, BASEFONT:!0, BDO:!0, BIG:!0, BR:!0, BUTTON:!0, CAPTION:!0, CITE:!0, CODE:!0, DEL:!0, DFN:!0, EM:!0, FONT:!0, I:!0, IFRAME:!0, IMG:!0, INPUT:!0, INS:!0, KBD:!0, LABEL:!0, MAP:!0, NOBR:!0, OBJECT:!0, Q:!0, RB:!0, RBC:!0, RP:!0, RT:!0, RTC:!0, RUBY:!0, S:!0, SAMP:!0, SCRIPT:!0, SELECT:!0, SMALL:!0, SPAN:!0, STRIKE:!0, STRONG:!0, SUB:!0, SUP:!0, TEXTAREA:!0, TT:!0, U:!0, VAR:!0, 
  WBR:!0}, l = {HEAD:{BODY:!0}, LI:{LI:!0}, OPTION:{OPTION:!0}, P:{P:!0}, OPTGROUP:{OPTGROUP:!0}, DT:{DT:!0, DD:!0}, CAPTION:{CAPTION:!0, COLGROUP:!0, THEAD:!0, TBODY:!0, TFOOT:!0, TR:!0}, THEAD:{CAPTION:!0, COLGROUP:!0, THEAD:!0, TBODY:!0, TFOOT:!0}, TR:{THEAD:!0, TBODY:!0, TFOOT:!0, TR:!0}, TH:{THEAD:!0, TBODY:!0, TFOOT:!0, TR:!0, TD:!0, TH:!0}, RB:{RBC:!0, RTC:!0, RB:!0, RP:!0, RT:!0}, RBC:{RBC:!0, RTC:!0}}, x, X, T, S, q, H, u;
  l.DD = l.DT;
  l.COLGROUP = l.CAPTION;
  l.TFOOT = l.TBODY = l.THEAD;
  l.TD = l.TH;
  l.RP = l.RT = l.RB;
  l.RTC = l.RBC;
  X = {SCRIPT:!0, STYLE:!0, PLAINTEXT:!0, XMP:!0, TEXTAREA:!0};
  T = {action:!0, archive:!0, background:!0, cite:!0, classid:!0, codebase:!0, data:!0, href:!0, longdesc:!0, profile:!0, src:!0, usemap:!0};
  S = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0};
  q = {};
  H = "abcdefghijklmnopqrstuvwxyz \t\r\n\f\b";
  for (x = 26; x;) {
    q[H.charAt(--x)] = 2;
  }
  x = 26;
  for (H = H.toUpperCase(); x;) {
    q[H.charAt(--x)] = 1;
  }
  for (x = 32; 26 < x;) {
    q[H.charAt(--x)] = 4;
  }
  u = {g:"", h:function(a) {
    u.g = a;
  }, m:function(a, t, z) {
    u.g += "<" + a;
    a = 0;
    for (var B, E; a < t.length; a += 2) {
      B = t[a], E = t[a + 1], u.g += " " + B[0] + (!0 !== E ? '="' + E.split('"').join('\\"').split('\\\\"').join('\\"') + '"' : "");
    }
    u.g += (z ? "/" : "") + ">";
  }, l:function(a) {
    u.g += "</" + a + ">";
  }, i:function(a) {
    a.split(" ").join("") && (a = " " === a.charAt(0) ? a.substr(1) : a, a = a.length && " " === a.charAt(a.length - 1) ? a.substr(0, a.length - 1) : a, u.g += a);
  }, s:function() {
  }, o:function() {
  }, v:function() {
  }};
  P.onload = function() {
    var a = document.all("input"), t = document.all("output");
    document.all("form").onsubmit = bz;
    function bz(z) {
      z && z.preventDefault();
      "undefined" != typeof event && (event.returnValue = !1);
      Q(a.value);
      t.value = u.g;
      return !1;
    }
    bz = !1;
  };
})(this, Date);

