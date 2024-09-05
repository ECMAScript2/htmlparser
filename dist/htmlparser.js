/* es2-html-parser@0.0.1
(c) 2024-2024 itozyun <itozyun@gmail.com> (https://outcloud.blogspot.com/)(undefined), MIT. */
(function(Q, Y) {
  function R(a) {
    function q() {
      g && (h.i(a.substring(0, g)), a = a.substring(g), g = 0);
    }
    function A(m, n, r) {
      for (var f = 0, p = r.length, k = 2, b, x, d; k < p && 3 !== f;) {
        x = r.charAt(k);
        switch(f) {
          case 0:
            t[x] & 3 && (f = 1, d = k);
            break;
          case 1:
            t[x] & 4 ? f = 2 : ">" === x && (f = 3);
            1 !== f && (b = r.substring(d, k));
            break;
          case 2:
            ">" === x && (f = 3);
        }
        ++k;
      }
      return 3 === f ? (B(m, n, w ? b : b.toUpperCase(), !1), k) : 0;
    }
    function B(m, n, r, f) {
      var p = 0, k = m.length, b, x, d;
      if (r) {
        for (p = k; 0 <= p && m[--p] !== r;) {
        }
      }
      if (0 <= p) {
        for (; p < k;) {
          r = n;
          b = r.j;
          x = m[--k];
          d = m[k];
          b.call(r, x, f && !(l[d] && l[d][d]), !1);
          w && L[m[k]] && (w = !!n.l);
        }
        m.length = p;
      } else {
        n.j(r, !1, !0);
      }
    }
    function E(m, n, r, f) {
      function p(J, M) {
        K[++N] = J;
        K[++N] = S[J.toLowerCase()] ? w ? M || J : !0 : M || "";
      }
      function k() {
        (F = "/>" === f.substr(d, 2)) && ++d;
        return F;
      }
      for (var b = 0, x = f.length, d = 1, K = [], N = -1, F = !1, C, e, u, z, O, I; d < x && 9 > b;) {
        e = f.charAt(d);
        switch(b) {
          case 0:
            t[e] & 3 && (b = 1, u = d);
            break;
          case 1:
            if (t[e] & 4) {
              b = 2, C = f.substring(u, d);
            } else if (">" === e || k()) {
              b = 9, C = f.substring(u, d);
            }
            break;
          case 2:
            if (":" === e) {
              b = 3, u = d;
            } else if (t[e] & 3) {
              b = 4, u = d;
            } else if (">" === e || k()) {
              b = 9;
            }
            break;
          case 3:
            b = t[e] & 3 ? 4 : 9;
            break;
          case 4:
            if ("=" === e) {
              b = 6, z = f.substring(u, d);
            } else if (t[e] & 4) {
              b = 5, z = f.substring(u, d);
            } else if (">" === e || k()) {
              b = 9, p(f.substring(u, d));
            }
            break;
          case 5:
            if (":" === e) {
              b = 3, p(z), u = d;
            } else if (t[e] & 3) {
              b = 4, p(z), u = d;
            } else if ("=" === e) {
              b = 6;
            } else if (">" === e || k()) {
              b = 9, p(z);
            }
            break;
          case 6:
            '"' === e || "'" === e ? (b = 7, O = e, u = d + 1) : t[e] & 4 || (b = 8, u = d);
            I = !1;
            break;
          case 7:
            I || e !== O || (b = 2, p(z, f.substring(u, d)));
            I = "\\" === e && !I;
            break;
          case 8:
            t[e] & 4 ? b = 2 : ">" === e ? b = 9 : !T[z] && k() && (b = 9), 8 !== b && p(z, f.substring(u, d));
        }
        ++d;
      }
      if (9 === b) {
        b = C.toUpperCase();
        w || (w = !!L[C]);
        if (!w) {
          if (U[b]) {
            for (; n && V[n];) {
              B(m, r, n, !1), n = m[m.length - 1];
            }
          }
          for (; n;) {
            if (l[n] && l[n][b]) {
              B(m, r, n, !1), n = m[m.length - 1];
            } else {
              break;
            }
          }
        }
        (F = F || W[b]) || (m[m.length] = w ? C : b);
        r.m(w ? C : b, K, F, d);
        return d;
      }
      return 0;
    }
    for (var h = v, g = 0, D = [], w = !!h.l, P = a.length - g, c, G; a;) {
      (c = G = D[D.length - 1]) && w && (G = c.toUpperCase());
      if (X[G]) {
        if ("PLAINTEXT" === G) {
          h.i(a), a = "";
        } else if (c = a.toUpperCase().indexOf("</" + G), 0 <= c) {
          if (g = c, q(), c = A(D, h, a)) {
            a = a.substring(c);
          } else {
            h.h(a);
            return;
          }
        } else {
          h.h(a);
          return;
        }
      } else if (a.indexOf("<!DOCTYPE ") === g) {
        if (q(), c = a.indexOf(">"), -1 !== c) {
          h.u(a.substring(10, c)), a = a.substring(c + 1);
        } else {
          h.h(a);
          return;
        }
      } else if (a.indexOf("<?") === g) {
        if (q(), c = a.indexOf("?>"), -1 !== c) {
          a = a.substring(c + 2);
        } else {
          h.h(a);
          return;
        }
      } else if (a.indexOf("<![CDATA[") === g) {
        if (q(), c = a.indexOf("]]\x3e"), -1 !== c) {
          a = a.substring(c + 3);
        } else {
          h.h(a);
          return;
        }
      } else if (a.indexOf("\x3c!--") === g) {
        if (q(), c = a.indexOf("--\x3e"), -1 !== c) {
          a = a.substring(c + 3);
        } else {
          h.h(a);
          return;
        }
      } else if (a.indexOf("</") === g) {
        if (q(), c = A(D, h, a)) {
          a = a.substring(c);
        } else {
          h.h(a);
          return;
        }
      } else if ("<" === a.charAt(g) && t[a.charAt(g + 1)] & 3) {
        if (q(), c = E(D, c, h, a)) {
          a = a.substring(c);
        } else {
          h.h(a);
          return;
        }
      } else {
        c = a.indexOf("<", g), -1 === c ? (h.i(a), a = "") : g < c ? g = c : ++g;
      }
      c = a.length - g;
      if (c === P) {
        h.h(a);
        return;
      }
      P = c;
    }
    q();
    B(D, h, "", !0);
  }
  var L = {xml:!0, svg:!0, math:!0}, W = {AREA:!0, BASE:!0, BASEFONT:!0, BR:!0, BGSOUND:!0, COL:!0, FRAME:!0, HR:!0, IMG:!0, INPUT:!0, ISINDEX:!0, KEYGEN:!0, LINK:!0, META:!0, PARAM:!0, SOURCE:!0, TRACK:!0, EMBED:!0, WBR:!0}, U = {ADDRESS:!0, APPLET:!0, BLOCKQUOTE:!0, BUTTON:!0, CENTER:!0, DD:!0, DEL:!0, DIR:!0, DIV:!0, DL:!0, DT:!0, FIELDSET:!0, FORM:!0, FRAMESET:!0, HR:!0, IFRAME:!0, INS:!0, ISINDEX:!0, LI:!0, MAP:!0, MARQUEE:!0, MENU:!0, NOFRAMES:!0, NOSCRIPT:!0, OBJECT:!0, OL:!0, P:!0, PRE:!0, 
  SCRIPT:!0, TABLE:!0, TBODY:!0, TD:!0, TFOOT:!0, TH:!0, THEAD:!0, TR:!0, UL:!0}, V = {ABBR:!0, ACRONYM:!0, APPLET:!0, B:!0, BASEFONT:!0, BDO:!0, BIG:!0, BR:!0, BUTTON:!0, CAPTION:!0, CITE:!0, CODE:!0, DEL:!0, DFN:!0, EM:!0, FONT:!0, I:!0, IFRAME:!0, IMG:!0, INPUT:!0, INS:!0, KBD:!0, LABEL:!0, MAP:!0, NOBR:!0, OBJECT:!0, Q:!0, RB:!0, RBC:!0, RP:!0, RT:!0, RTC:!0, RUBY:!0, S:!0, SAMP:!0, SCRIPT:!0, SELECT:!0, SMALL:!0, SPAN:!0, STRIKE:!0, STRONG:!0, SUB:!0, SUP:!0, TEXTAREA:!0, TT:!0, U:!0, VAR:!0, 
  WBR:!0}, l = {HEAD:{BODY:!0}, LI:{LI:!0}, OPTION:{OPTION:!0}, P:{P:!0}, OPTGROUP:{OPTGROUP:!0}, DT:{DT:!0, DD:!0}, CAPTION:{CAPTION:!0, COLGROUP:!0, THEAD:!0, TBODY:!0, TFOOT:!0, TR:!0}, THEAD:{CAPTION:!0, COLGROUP:!0, THEAD:!0, TBODY:!0, TFOOT:!0}, TR:{THEAD:!0, TBODY:!0, TFOOT:!0, TR:!0}, TH:{THEAD:!0, TBODY:!0, TFOOT:!0, TR:!0, TD:!0, TH:!0}, RB:{RBC:!0, RTC:!0, RB:!0, RP:!0, RT:!0}, RBC:{RBC:!0, RTC:!0}}, y, X, T, S, t, H, v;
  l.DD = l.DT;
  l.COLGROUP = l.CAPTION;
  l.TFOOT = l.TBODY = l.THEAD;
  l.TD = l.TH;
  l.RP = l.RT = l.RB;
  l.RTC = l.RBC;
  X = {SCRIPT:!0, STYLE:!0, PLAINTEXT:!0, XMP:!0, TEXTAREA:!0};
  T = {action:!0, archive:!0, background:!0, cite:!0, classid:!0, codebase:!0, data:!0, href:!0, longdesc:!0, profile:!0, src:!0, usemap:!0};
  S = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0};
  t = {};
  H = "abcdefghijklmnopqrstuvwxyz \t\r\n\f\b";
  for (y = 26; y;) {
    t[H.charAt(--y)] = 2;
  }
  y = 26;
  for (H = H.toUpperCase(); y;) {
    t[H.charAt(--y)] = 1;
  }
  for (y = 32; 26 < y;) {
    t[H.charAt(--y)] = 4;
  }
  v = {g:"", h:function(a) {
    v.g = a;
  }, m:function(a, q, A) {
    v.g += "<" + a;
    a = 0;
    for (var B, E; a < q.length; a += 2) {
      B = q[a], E = q[a + 1], v.g += " " + B[0] + (!0 !== E ? '="' + E.split('"').join('\\"').split('\\\\"').join('\\"') + '"' : "");
    }
    v.g += (A ? "/" : "") + ">";
  }, j:function(a) {
    v.g += "</" + a + ">";
  }, i:function(a) {
    a.split(" ").join("") && (a = " " === a.charAt(0) ? a.substr(1) : a, a = a.length && " " === a.charAt(a.length - 1) ? a.substr(0, a.length - 1) : a, v.g += a);
  }, s:function() {
  }, o:function() {
  }, v:function() {
  }};
  Q.onload = function() {
    var a = document.all("input"), q = document.all("output");
    document.all("form").onsubmit = bz;
    function bz(A) {
      A && A.preventDefault();
      "undefined" != typeof event && (event.returnValue = !1);
      R(a.value);
      q.value = v.g;
      return !1;
    }
    bz = !1;
  };
})(this, Date);

