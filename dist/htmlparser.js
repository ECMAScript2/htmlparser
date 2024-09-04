/* es2-html-parser@0.0.1
(c) 2024-2024 itozyun <itozyun@gmail.com> (https://outcloud.blogspot.com/)(undefined), MIT. */
(function(N, W) {
  function O(a) {
    function y(k, n, u) {
      for (var f = 0, l = u.length, h = 2, b, A, d; h < l && 3 !== f;) {
        A = u.charAt(h);
        switch(f) {
          case 0:
            q[A] & 3 && (f = 1, d = h);
            break;
          case 1:
            q[A] & 4 ? f = 2 : ">" === A && (f = 3);
            1 !== f && (b = u.substring(d, h));
            break;
          case 2:
            ">" === A && (f = 3);
        }
        ++h;
      }
      return 3 === f ? (v(k, n, w ? b : b.toUpperCase(), !1), h) : 0;
    }
    function v(k, n, u, f) {
      var l = 0, h = k.length;
      if (u) {
        for (l = h; 0 <= l && k[--l] !== u;) {
        }
      }
      if (0 <= l) {
        for (; l < h;) {
          n.l(k[--h], f || l < h), w && I[k[h]] && (w = !!n.j);
        }
        k.length = l;
      }
    }
    function F(k, n, u, f) {
      function l(J, P) {
        H[++K] = J;
        H[++K] = Q[J.toLowerCase()] ? !0 : P || "";
      }
      function h() {
        (D = "/>" === f.substr(d, 2)) && ++d;
        return D;
      }
      for (var b = 0, A = f.length, d = 1, H = [], K = -1, D = !1, B, e, p, z, L, G; d < A && 9 > b;) {
        e = f.charAt(d);
        switch(b) {
          case 0:
            q[e] & 3 && (b = 1, p = d);
            break;
          case 1:
            if (q[e] & 4) {
              b = 2, B = f.substring(p, d);
            } else if (">" === e || h()) {
              b = 9, B = f.substring(p, d);
            }
            break;
          case 2:
            if (":" === e) {
              b = 3, p = d;
            } else if (q[e] & 3) {
              b = 4, p = d;
            } else if (">" === e || h()) {
              b = 9;
            }
            break;
          case 3:
            b = q[e] & 3 ? 4 : 9;
            break;
          case 4:
            if ("=" === e) {
              b = 6, z = f.substring(p, d);
            } else if (q[e] & 4) {
              b = 5, z = f.substring(p, d);
            } else if (">" === e || h()) {
              b = 9, l(f.substring(p, d));
            }
            break;
          case 5:
            if (":" === e) {
              b = 3, l(z), p = d;
            } else if (q[e] & 3) {
              b = 4, l(z), p = d;
            } else if ("=" === e) {
              b = 6;
            } else if (">" === e || h()) {
              b = 9, l(z);
            }
            break;
          case 6:
            '"' === e || "'" === e ? (b = 7, L = e, p = d + 1) : q[e] & 4 || (b = 8, p = d);
            G = !1;
            break;
          case 7:
            G || e !== L || (b = 2, l(z, f.substring(p, d)));
            G = "\\" === e && !G;
            break;
          case 8:
            q[e] & 4 ? b = 2 : ">" === e ? b = 9 : !R[z] && h() && (b = 9), 8 !== b && l(z, f.substring(p, d));
        }
        ++d;
      }
      if (9 === b) {
        b = B.toUpperCase();
        w || (w = !!I[B]);
        if (!w) {
          if (S[b]) {
            for (; n && T[n];) {
              v(k, u, n, !0), n = k[k.length - 1];
            }
          }
          for (; n;) {
            if (m[n] && m[n][b]) {
              v(k, u, n, !0), n = k[k.length - 1];
            } else {
              break;
            }
          }
        }
        (D = D || U[b]) || (k[k.length] = w ? B : b);
        u.m(w ? B : b, H, D, d);
        return d;
      }
      return 0;
    }
    for (var g = r, C = [], w = !!g.j, M = a, c, t; a;) {
      (c = t = C[C.length - 1]) && w && (t = c.toUpperCase());
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
        0 === a.indexOf("\x3c!--") ? (c = a.indexOf("--\x3e"), a = -1 !== c ? a.substring(c + 3) : "") : (0 === a.indexOf("</") ? a = (t = y(C, g, a)) ? a.substring(t) : "&lt;" + a.substr(1) : 0 === a.indexOf("<") && (a = (t = F(C, c, g, a)) ? a.substring(t) : "&lt;" + a.substr(1)), a && (c = a.indexOf("<"), -1 === c ? (g.i(a), a = "") : c && (g.i(a.substring(0, c)), a = a.substring(c))));
      }
      if (a === M) {
        g.h(a);
        return;
      }
      M = a;
    }
    v(C, g, "", !0);
  }
  var I = {xml:!0, svg:!0, math:!0}, U = {AREA:!0, BASE:!0, BASEFONT:!0, BR:!0, BGSOUND:!0, COL:!0, FRAME:!0, HR:!0, IMG:!0, INPUT:!0, ISINDEX:!0, KEYGEN:!0, LINK:!0, META:!0, PARAM:!0, SOURCE:!0, TRACK:!0, EMBED:!0, WBR:!0}, S = {ADDRESS:!0, APPLET:!0, BLOCKQUOTE:!0, BUTTON:!0, CENTER:!0, DD:!0, DEL:!0, DIR:!0, DIV:!0, DL:!0, DT:!0, FIELDSET:!0, FORM:!0, FRAMESET:!0, HR:!0, IFRAME:!0, INS:!0, ISINDEX:!0, LI:!0, MAP:!0, MARQUEE:!0, MENU:!0, NOFRAMES:!0, NOSCRIPT:!0, OBJECT:!0, OL:!0, P:!0, PRE:!0, 
  SCRIPT:!0, TABLE:!0, TBODY:!0, TD:!0, TFOOT:!0, TH:!0, THEAD:!0, TR:!0, UL:!0}, T = {ABBR:!0, ACRONYM:!0, APPLET:!0, B:!0, BASEFONT:!0, BDO:!0, BIG:!0, BR:!0, BUTTON:!0, CAPTION:!0, CITE:!0, CODE:!0, DEL:!0, DFN:!0, EM:!0, FONT:!0, I:!0, IFRAME:!0, IMG:!0, INPUT:!0, INS:!0, KBD:!0, LABEL:!0, MAP:!0, NOBR:!0, OBJECT:!0, Q:!0, RB:!0, RBC:!0, RP:!0, RT:!0, RTC:!0, RUBY:!0, S:!0, SAMP:!0, SCRIPT:!0, SELECT:!0, SMALL:!0, SPAN:!0, STRIKE:!0, STRONG:!0, SUB:!0, SUP:!0, TEXTAREA:!0, TT:!0, U:!0, VAR:!0, 
  WBR:!0}, m = {HEAD:{BODY:!0}, LI:{LI:!0}, OPTION:{OPTION:!0}, P:{P:!0}, OPTGROUP:{OPTGROUP:!0}, DT:{DT:!0, DD:!0}, CAPTION:{CAPTION:!0, COLGROUP:!0, THEAD:!0, TBODY:!0, TFOOT:!0, TR:!0}, THEAD:{CAPTION:!0, COLGROUP:!0, THEAD:!0, TBODY:!0, TFOOT:!0}, TR:{THEAD:!0, TBODY:!0, TFOOT:!0, TR:!0}, TH:{THEAD:!0, TBODY:!0, TFOOT:!0, TR:!0, TD:!0, TH:!0}, RB:{RBC:!0, RTC:!0, RB:!0, RP:!0, RT:!0}, RBC:{RBC:!0, RTC:!0}}, x, V, R, Q, q, E, r;
  m.DD = m.DT;
  m.COLGROUP = m.CAPTION;
  m.TFOOT = m.TBODY = m.THEAD;
  m.TD = m.TH;
  m.RP = m.RT = m.RB;
  m.RTC = m.RBC;
  V = {SCRIPT:!0, STYLE:!0, PLAINTEXT:!0, XMP:!0, TEXTAREA:!0};
  R = {action:!0, archive:!0, background:!0, cite:!0, classid:!0, codebase:!0, data:!0, href:!0, longdesc:!0, profile:!0, src:!0, usemap:!0};
  Q = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, nowrap:!0, readonly:!0, selected:!0};
  q = {};
  E = "abcdefghijklmnopqrstuvwxyz \t\r\n\f\b";
  for (x = 26; x;) {
    q[E.charAt(--x)] = 2;
  }
  x = 26;
  for (E = E.toUpperCase(); x;) {
    q[E.charAt(--x)] = 1;
  }
  for (x = 32; 26 < x;) {
    q[E.charAt(--x)] = 4;
  }
  r = {g:"", h:function(a) {
    r.g = a;
  }, m:function(a, y, v) {
    r.g += "<" + a;
    a = 0;
    for (var F, g; a < y.length; a += 2) {
      F = y[a], g = y[a + 1], r.g += " " + F[0] + (!0 !== g ? '="' + g.split('"').join('\\"').split('\\\\"').join('\\"') + '"' : "");
    }
    r.g += (v ? "/" : "") + ">";
  }, l:function(a) {
    r.g += "</" + a + ">";
  }, i:function(a) {
    a.split(" ").join("") && (a = " " === a.charAt(0) ? a.substr(1) : a, a = a.length && " " === a.charAt(a.length - 1) ? a.substr(0, a.length - 1) : a, r.g += a);
  }, s:function() {
  }, o:function() {
  }, v:function() {
  }};
  N.onload = function() {
    var a = document.all("input"), y = document.all("output");
    document.all("form").onsubmit = bz;
    function bz(v) {
      v && v.preventDefault();
      "undefined" != typeof event && (event.returnValue = !1);
      O(a.value);
      y.value = r.g;
      return !1;
    }
    bz = !1;
  };
})(this, Date);

