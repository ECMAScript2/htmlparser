/* es2-html-parser@0.0.1
(c) 2024-2024 itozyun <itozyun@gmail.com> (https://outcloud.blogspot.com/)(undefined), MIT. */
(function(N, W) {
  function O(a) {
    function y(h, l, u) {
      for (var d = 0, n = u.length, r = 2, b, A, e; r < n && 3 !== d;) {
        A = u.charAt(r);
        switch(d) {
          case 0:
            p[A] & 3 && (d = 1, e = r);
            break;
          case 1:
            p[A] & 4 ? d = 2 : ">" === A && (d = 3);
            1 !== d && (b = u.substring(e, r));
            break;
          case 2:
            ">" === A && (d = 3);
        }
        ++r;
      }
      return 3 === d ? (w(h, l, v ? b : b.toUpperCase()), r) : 0;
    }
    function w(h, l, u) {
      var d = 0, n = h.length;
      if (u) {
        for (d = n; 0 <= d && h[--d] !== u;) {
        }
      }
      if (0 <= d) {
        for (; d < n;) {
          l.l(h[--n]), v && I[h[n]] && (v = !!l.j);
        }
        h.length = d;
      }
    }
    function F(h, l, u, d) {
      function n(J, P) {
        H[++K] = J;
        H[++K] = Q[J.toLowerCase()] ? !0 : P || "";
      }
      function r() {
        (D = "/>" === d.substr(e, 2)) && ++e;
        return D;
      }
      for (var b = 0, A = d.length, e = 1, H = [], K = -1, D = !1, B, f, m, z, L, G; e < A && 9 > b;) {
        f = d.charAt(e);
        switch(b) {
          case 0:
            p[f] & 3 && (b = 1, m = e);
            break;
          case 1:
            if (p[f] & 4) {
              b = 2, B = d.substring(m, e);
            } else if (">" === f || r()) {
              b = 9, B = d.substring(m, e);
            }
            break;
          case 2:
            if (":" === f) {
              b = 3, m = e;
            } else if (p[f] & 3) {
              b = 4, m = e;
            } else if (">" === f || r()) {
              b = 9;
            }
            break;
          case 3:
            b = p[f] & 3 ? 4 : 9;
            break;
          case 4:
            if ("=" === f) {
              b = 6, z = d.substring(m, e);
            } else if (p[f] & 4) {
              b = 5, z = d.substring(m, e);
            } else if (">" === f || r()) {
              b = 9, n(d.substring(m, e));
            }
            break;
          case 5:
            if (":" === f) {
              b = 3, n(z), m = e;
            } else if (p[f] & 3) {
              b = 4, n(z), m = e;
            } else if ("=" === f) {
              b = 6;
            } else if (">" === f || r()) {
              b = 9, n(z);
            }
            break;
          case 6:
            '"' === f || "'" === f ? (b = 7, L = f, m = e + 1) : p[f] & 4 || (b = 8, m = e);
            G = !1;
            break;
          case 7:
            G || f !== L || (b = 2, n(z, d.substring(m, e)));
            G = "\\" === f && !G;
            break;
          case 8:
            p[f] & 4 ? b = 2 : ">" === f ? b = 9 : !R[z] && r() && (b = 9), 8 !== b && n(z, d.substring(m, e));
        }
        ++e;
      }
      if (9 === b) {
        b = B.toUpperCase();
        v || (v = !!I[B]);
        if (!v) {
          if (S[b]) {
            for (; l && T[l];) {
              w(h, u, l), l = h[h.length - 1];
            }
          }
          for (; l;) {
            if (k[l] && k[l][b]) {
              w(h, u, l), l = h[h.length - 1];
            } else {
              break;
            }
          }
        }
        (D = D || U[b]) || (h[h.length] = v ? B : b);
        u.m(v ? B : b, H, D, e);
        return e;
      }
      return 0;
    }
    for (var g = q, C = [], v = !!g.j, M = a, c, t; a;) {
      (c = t = C[C.length - 1]) && v && (t = c.toUpperCase());
      if (c && V[t]) {
        if (c = a.toUpperCase().indexOf("</" + t), 0 <= c) {
          c && g.i(a.substring(0, c)), a = a.substring(c), (t = y(C, g, a)) ? a = a.substring(t) : (g.i(a), a = "");
        } else if ("PLAINTEXT" === t) {
          g.i(a), a = "";
        } else {
          g.h(a);
          return;
        }
      } else if (0 === a.indexOf("<!DOCTYPE ")) {
        if (c = a.indexOf(">"), -1 !== c) {
          g.u(a.substring(10, c)), a = a.substring(c + 1);
        } else {
          g.h(a);
          return;
        }
      } else if (0 === a.indexOf("<?")) {
        if (c = a.indexOf("?>"), -1 !== c) {
          a = a.substring(c + 2);
        } else {
          g.h(a);
          return;
        }
      } else if (0 === a.indexOf("<![CDATA[")) {
        if (c = a.indexOf("]]\x3e"), -1 !== c) {
          a = a.substring(c + 3);
        } else {
          g.h(a);
          return;
        }
      } else {
        0 === a.indexOf("\x3c!--") ? (c = a.indexOf("--\x3e"), a = -1 !== c ? a.substring(c + 3) : "") : (0 === a.indexOf("</") ? a = (t = y(C, g, a)) ? a.substring(t) : "&lt;" + a.substr(1) : 0 === a.indexOf("<") && (a = (t = F(C, c, g, a, v)) ? a.substring(t) : "&lt;" + a.substr(1)), a && (c = a.indexOf("<"), -1 === c ? (g.i(a), a = "") : c && (g.i(a.substring(0, c)), a = a.substring(c))));
      }
      if (a === M) {
        g.h(a);
        return;
      }
      M = a;
    }
    w(C, g);
  }
  var I = {xml:!0, svg:!0, math:!0}, U = {AREA:!0, BASE:!0, BASEFONT:!0, BR:!0, BGSOUND:!0, COL:!0, FRAME:!0, HR:!0, IMG:!0, INPUT:!0, ISINDEX:!0, KEYGEN:!0, LINK:!0, META:!0, PARAM:!0, SOURCE:!0, TRACK:!0, EMBED:!0, WBR:!0}, S = {ADDRESS:!0, APPLET:!0, BLOCKQUOTE:!0, BUTTON:!0, CENTER:!0, DD:!0, DEL:!0, DIR:!0, DIV:!0, DL:!0, DT:!0, FIELDSET:!0, FORM:!0, FRAMESET:!0, HR:!0, IFRAME:!0, INS:!0, ISINDEX:!0, LI:!0, MAP:!0, MARQUEE:!0, MENU:!0, NOFRAMES:!0, NOSCRIPT:!0, OBJECT:!0, OL:!0, P:!0, PRE:!0, 
  SCRIPT:!0, TABLE:!0, TBODY:!0, TD:!0, TFOOT:!0, TH:!0, THEAD:!0, TR:!0, UL:!0}, T = {ABBR:!0, ACRONYM:!0, APPLET:!0, B:!0, BASEFONT:!0, BDO:!0, BIG:!0, BR:!0, BUTTON:!0, CAPTION:!0, CITE:!0, CODE:!0, DEL:!0, DFN:!0, EM:!0, FONT:!0, I:!0, IFRAME:!0, IMG:!0, INPUT:!0, INS:!0, KBD:!0, LABEL:!0, MAP:!0, NOBR:!0, OBJECT:!0, Q:!0, RB:!0, RBC:!0, RP:!0, RT:!0, RTC:!0, RUBY:!0, S:!0, SAMP:!0, SCRIPT:!0, SELECT:!0, SMALL:!0, SPAN:!0, STRIKE:!0, STRONG:!0, SUB:!0, SUP:!0, TEXTAREA:!0, TT:!0, U:!0, VAR:!0, 
  WBR:!0}, k = {HEAD:{BODY:!0}, LI:{LI:!0}, OPTION:{OPTION:!0}, P:{P:!0}, OPTGROUP:{OPTGROUP:!0}, DT:{DT:!0, DD:!0}, CAPTION:{CAPTION:!0, COLGROUP:!0, THEAD:!0, TBODY:!0, TFOOT:!0, TR:!0}, THEAD:{CAPTION:!0, COLGROUP:!0, THEAD:!0, TBODY:!0, TFOOT:!0}, TR:{THEAD:!0, TBODY:!0, TFOOT:!0, TR:!0}, TH:{THEAD:!0, TBODY:!0, TFOOT:!0, TR:!0, TD:!0, TH:!0}, RB:{RBC:!0, RTC:!0, RB:!0, RP:!0, RT:!0}, RBC:{RBC:!0, RTC:!0}}, x, V, R, Q, p, E, q;
  k.DD = k.DT;
  k.COLGROUP = k.CAPTION;
  k.TFOOT = k.TBODY = k.THEAD;
  k.TD = k.TH;
  k.RP = k.RT = k.RB;
  k.RTC = k.RBC;
  V = {SCRIPT:!0, STYLE:!0, PLAINTEXT:!0, XMP:!0, TEXTAREA:!0};
  R = {action:!0, archive:!0, background:!0, cite:!0, classid:!0, codebase:!0, data:!0, href:!0, longdesc:!0, profile:!0, src:!0, usemap:!0};
  Q = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0};
  p = {};
  E = "abcdefghijklmnopqrstuvwxyz \t\r\n\f\b";
  for (x = 26; x;) {
    p[E.charAt(--x)] = 2;
  }
  x = 26;
  for (E = E.toUpperCase(); x;) {
    p[E.charAt(--x)] = 1;
  }
  for (x = 32; 26 < x;) {
    p[E.charAt(--x)] = 4;
  }
  q = {g:"", h:function(a) {
    q.g = a;
  }, m:function(a, y, w) {
    q.g += "<" + a;
    a = 0;
    for (var F, g; a < y.length; a += 2) {
      F = y[a], g = y[a + 1], q.g += " " + F[0] + (!0 !== g ? '="' + g.split('"').join('\\"').split('\\\\"').join('\\"') + '"' : "");
    }
    q.g += (w ? "/" : "") + ">";
  }, l:function(a) {
    q.g += "</" + a + ">";
  }, i:function(a) {
    a.split(" ").join("") && (a = " " === a.charAt(0) ? a.substr(1) : a, a = a.length && " " === a.charAt(a.length - 1) ? a.substr(0, a.length - 1) : a, q.g += a);
  }, s:function() {
  }, o:function() {
  }, v:function() {
  }};
  N.onload = function() {
    var a = document.all("input"), y = document.all("output");
    document.all("form").onsubmit = bz;
    function bz(w) {
      w && w.preventDefault();
      "undefined" != typeof event && (event.returnValue = !1);
      O(a.value);
      y.value = q.g;
      return !1;
    }
    bz = !1;
  };
})(this, Date);

