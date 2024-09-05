/* es2-html-parser@0.0.1
(c) 2024-2024 itozyun <itozyun@gmail.com> (https://outcloud.blogspot.com/)(undefined), MIT. */
(function(Q, Y) {
  function R(a) {
    function p() {
      h && (k.i(a.substring(0, h)), a = a.substring(h), h = 0);
    }
    function A(m, n, u) {
      for (var f = 0, v = u.length, g = 2, b, w, d; g < v && 3 !== f;) {
        w = u.charAt(g);
        switch(f) {
          case 0:
            q[w] & 3 && (f = 1, d = g);
            break;
          case 1:
            q[w] & 4 ? f = 2 : ">" === w && (f = 3);
            1 !== f && (b = u.substring(d, g));
            break;
          case 2:
            ">" === w && (f = 3);
        }
        ++g;
      }
      return 3 === f ? (B(m, n, x ? b : b.toUpperCase(), !1), g) : 0;
    }
    function B(m, n, u, f) {
      function v(w) {
        return f && !(l[w] && l[w][w]);
      }
      var g = 0, b = m.length;
      if (u) {
        for (g = b; 0 <= g && m[--g] !== u;) {
        }
      }
      if (0 <= g) {
        for (; g < b;) {
          n.j(m[--b], v(m[b]), !1), x && L[m[b]] && (x = !!n.l);
        }
        m.length = g;
      } else {
        n.j(u, v(u), !0);
      }
    }
    function E(m, n, u, f) {
      function v(J, M) {
        K[++N] = J;
        K[++N] = S[J.toLowerCase()] ? x ? M || J : !0 : M || "";
      }
      function g() {
        (F = "/>" === f.substr(d, 2)) && ++d;
        return F;
      }
      for (var b = 0, w = f.length, d = 1, K = [], N = -1, F = !1, C, e, r, z, O, I; d < w && 9 > b;) {
        e = f.charAt(d);
        switch(b) {
          case 0:
            q[e] & 3 && (b = 1, r = d);
            break;
          case 1:
            if (q[e] & 4) {
              b = 2, C = f.substring(r, d);
            } else if (">" === e || g()) {
              b = 9, C = f.substring(r, d);
            }
            break;
          case 2:
            if (":" === e) {
              b = 3, r = d;
            } else if (q[e] & 3) {
              b = 4, r = d;
            } else if (">" === e || g()) {
              b = 9;
            }
            break;
          case 3:
            b = q[e] & 3 ? 4 : 9;
            break;
          case 4:
            if ("=" === e) {
              b = 6, z = f.substring(r, d);
            } else if (q[e] & 4) {
              b = 5, z = f.substring(r, d);
            } else if (">" === e || g()) {
              b = 9, v(f.substring(r, d));
            }
            break;
          case 5:
            if (":" === e) {
              b = 3, v(z), r = d;
            } else if (q[e] & 3) {
              b = 4, v(z), r = d;
            } else if ("=" === e) {
              b = 6;
            } else if (">" === e || g()) {
              b = 9, v(z);
            }
            break;
          case 6:
            '"' === e || "'" === e ? (b = 7, O = e, r = d + 1) : q[e] & 4 || (b = 8, r = d);
            I = !1;
            break;
          case 7:
            I || e !== O || (b = 2, v(z, f.substring(r, d)));
            I = "\\" === e && !I;
            break;
          case 8:
            q[e] & 4 ? b = 2 : ">" === e ? b = 9 : !T[z] && g() && (b = 9), 8 !== b && v(z, f.substring(r, d));
        }
        ++d;
      }
      if (9 === b) {
        b = C.toUpperCase();
        x || (x = !!L[C]);
        if (!x) {
          if (U[b]) {
            for (; n && V[n];) {
              B(m, u, n, !1), n = m[m.length - 1];
            }
          }
          for (; n;) {
            if (l[n] && l[n][b]) {
              B(m, u, n, !1), n = m[m.length - 1];
            } else {
              break;
            }
          }
        }
        (F = F || W[b]) || (m[m.length] = x ? C : b);
        u.m(x ? C : b, K, F, d);
        return d;
      }
      return 0;
    }
    for (var k = t, h = 0, D = [], x = !!k.l, P = a.length - h, c, G; a;) {
      (c = G = D[D.length - 1]) && x && (G = c.toUpperCase());
      if (X[G]) {
        if ("PLAINTEXT" === G) {
          k.i(a), a = "";
        } else if (c = a.toUpperCase().indexOf("</" + G), 0 <= c) {
          if (h = c, p(), c = A(D, k, a)) {
            a = a.substring(c);
          } else {
            k.h(a);
            return;
          }
        } else {
          k.h(a);
          return;
        }
      } else if (a.indexOf("<!DOCTYPE ") === h) {
        if (p(), c = a.indexOf(">"), -1 !== c) {
          k.u(a.substring(10, c)), a = a.substring(c + 1);
        } else {
          k.h(a);
          return;
        }
      } else if (a.indexOf("<?") === h) {
        if (p(), c = a.indexOf("?>"), -1 !== c) {
          a = a.substring(c + 2);
        } else {
          k.h(a);
          return;
        }
      } else if (a.indexOf("<![CDATA[") === h) {
        if (p(), c = a.indexOf("]]\x3e"), -1 !== c) {
          a = a.substring(c + 3);
        } else {
          k.h(a);
          return;
        }
      } else if (a.indexOf("\x3c!--") === h) {
        if (p(), c = a.indexOf("--\x3e"), -1 !== c) {
          a = a.substring(c + 3);
        } else {
          k.h(a);
          return;
        }
      } else if (a.indexOf("</") === h) {
        if (p(), c = A(D, k, a)) {
          a = a.substring(c);
        } else {
          k.h(a);
          return;
        }
      } else if ("<" === a.charAt(h) && q[a.charAt(h + 1)] & 3) {
        if (p(), c = E(D, c, k, a)) {
          a = a.substring(c);
        } else {
          k.h(a);
          return;
        }
      } else {
        c = a.indexOf("<", h), -1 === c ? (k.i(a), a = "") : h < c ? h = c : ++h;
      }
      c = a.length - h;
      if (c === P) {
        k.h(a);
        return;
      }
      P = c;
    }
    p();
    B(D, k, "", !0);
  }
  var L = {xml:!0, svg:!0, math:!0}, W = {AREA:!0, BASE:!0, BASEFONT:!0, BR:!0, BGSOUND:!0, COL:!0, FRAME:!0, HR:!0, IMG:!0, INPUT:!0, ISINDEX:!0, KEYGEN:!0, LINK:!0, META:!0, PARAM:!0, SOURCE:!0, TRACK:!0, EMBED:!0, WBR:!0}, U = {ADDRESS:!0, APPLET:!0, BLOCKQUOTE:!0, BUTTON:!0, CENTER:!0, DD:!0, DEL:!0, DIR:!0, DIV:!0, DL:!0, DT:!0, FIELDSET:!0, FORM:!0, FRAMESET:!0, HR:!0, IFRAME:!0, INS:!0, ISINDEX:!0, LI:!0, MAP:!0, MARQUEE:!0, MENU:!0, NOFRAMES:!0, NOSCRIPT:!0, OBJECT:!0, OL:!0, P:!0, PRE:!0, 
  SCRIPT:!0, TABLE:!0, TBODY:!0, TD:!0, TFOOT:!0, TH:!0, THEAD:!0, TR:!0, UL:!0}, V = {ABBR:!0, ACRONYM:!0, APPLET:!0, B:!0, BASEFONT:!0, BDO:!0, BIG:!0, BR:!0, BUTTON:!0, CAPTION:!0, CITE:!0, CODE:!0, DEL:!0, DFN:!0, EM:!0, FONT:!0, I:!0, IFRAME:!0, IMG:!0, INPUT:!0, INS:!0, KBD:!0, LABEL:!0, MAP:!0, NOBR:!0, OBJECT:!0, Q:!0, RB:!0, RBC:!0, RP:!0, RT:!0, RTC:!0, RUBY:!0, S:!0, SAMP:!0, SCRIPT:!0, SELECT:!0, SMALL:!0, SPAN:!0, STRIKE:!0, STRONG:!0, SUB:!0, SUP:!0, TEXTAREA:!0, TT:!0, U:!0, VAR:!0, 
  WBR:!0}, l = {HEAD:{BODY:!0}, LI:{LI:!0}, OPTION:{OPTION:!0}, P:{P:!0}, OPTGROUP:{OPTGROUP:!0}, DT:{DT:!0, DD:!0}, CAPTION:{CAPTION:!0, COLGROUP:!0, THEAD:!0, TBODY:!0, TFOOT:!0, TR:!0}, THEAD:{CAPTION:!0, COLGROUP:!0, THEAD:!0, TBODY:!0, TFOOT:!0}, TR:{THEAD:!0, TBODY:!0, TFOOT:!0, TR:!0}, TH:{THEAD:!0, TBODY:!0, TFOOT:!0, TR:!0, TD:!0, TH:!0}, RB:{RBC:!0, RTC:!0, RB:!0, RP:!0, RT:!0}, RBC:{RBC:!0, RTC:!0}}, y, X, T, S, q, H, t;
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
  for (y = 26; y;) {
    q[H.charAt(--y)] = 2;
  }
  y = 26;
  for (H = H.toUpperCase(); y;) {
    q[H.charAt(--y)] = 1;
  }
  for (y = 32; 26 < y;) {
    q[H.charAt(--y)] = 4;
  }
  t = {g:"", h:function(a) {
    t.g = a;
  }, m:function(a, p, A) {
    t.g += "<" + a;
    a = 0;
    for (var B, E; a < p.length; a += 2) {
      B = p[a], E = p[a + 1], t.g += " " + B[0] + (!0 !== E ? '="' + E.split('"').join('\\"').split('\\\\"').join('\\"') + '"' : "");
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
    var a = document.all("input"), p = document.all("output");
    document.all("form").onsubmit = bz;
    function bz(A) {
      A && A.preventDefault();
      "undefined" != typeof event && (event.returnValue = !1);
      R(a.value);
      p.value = t.g;
      return !1;
    }
    bz = !1;
  };
})(this, Date);

