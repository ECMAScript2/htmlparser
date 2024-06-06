/* es2-html-parser@0.0.1
(c) 2024-2024 itozyun <itozyun@gmail.com> (https://outcloud.blogspot.com/)(undefined), MIT. */
(function(O, ba) {
  function P(a, d) {
    function c(q, m, r, e) {
      for (var k = 1, G = r.length, n = 2, u, b, D; n < G && 4 !== k;) {
        b = r.charAt(n);
        switch(k) {
          case 1:
            v[b] & 3 && (k = 2, D = n);
            break;
          case 2:
            v[b] & 4 ? k = 3 : ">" === b && (k = 4);
            2 !== k && (u = r.substring(D, n));
            break;
          case 3:
            ">" === b && (k = 4);
        }
        ++n;
      }
      return 4 === k ? y(q, m, e ? u : u.toUpperCase()) ? 1 : n : 0;
    }
    function y(q, m, r) {
      var e = 0, k = q.length;
      if (r) {
        for (e = k; 0 <= e && q[--e] !== r;) {
        }
      }
      if (0 <= e) {
        for (; e < k;) {
          if (!1 === m.i(q[--k])) {
            return !0;
          }
        }
        q.length = e;
      }
    }
    function H(q, m, r, e, k, G) {
      function n(Q, R) {
        var I = Q.toLowerCase(), J = S[I] ? I : R || "";
        K[++L] = I;
        K[++L] = -1 !== J.indexOf('"') ? J.split('"').join('\\"').split('\\\\"').join('\\"') : J;
      }
      function u() {
        (B = "/>" === e.substr(f, 2)) && ++f;
        return B;
      }
      for (var b = 1, D = e.length, f = 1, K = [], L = -1, B = !1, z, g, p, w, M, E; f < D && 9 > b;) {
        g = e.charAt(f);
        switch(b) {
          case 1:
            v[g] & 3 && (b = 2, p = f);
            break;
          case 2:
            if (v[g] & 4) {
              b = 3, z = e.substring(p, f);
            } else if (">" === g || u()) {
              b = 9, z = e.substring(p, f);
            }
            break;
          case 3:
            if (v[g] & 3) {
              b = 4, p = f;
            } else if (">" === g || u()) {
              b = 9;
            }
            break;
          case 4:
            if ("=" === g) {
              b = 6, w = e.substring(p, f);
            } else if (v[g] & 4) {
              b = 5, w = e.substring(p, f);
            } else if (">" === g || u()) {
              b = 9, n(e.substring(p, f));
            }
            break;
          case 5:
            if (v[g] & 3) {
              b = 4, n(w), p = f;
            } else if ("=" === g) {
              b = 6;
            } else if (">" === g || u()) {
              b = 9, n(w);
            }
            break;
          case 6:
            '"' === g || "'" === g ? (b = 7, M = g, p = f + 1) : v[g] & 4 || (b = 8, p = f);
            break;
          case 7:
            E || g !== M || (b = 3, n(w, e.substring(p, f)));
            break;
          case 8:
            v[g] & 4 ? (b = 3, n(w, e.substring(p, f))) : ">" === g ? (b = 9, n(w, e.substring(p, f))) : E || T[w] || !u() || (b = 9, n(w, e.substring(p, f)));
        }
        E = "\\" === g && !E;
        ++f;
      }
      if (9 === b) {
        b = z.toUpperCase();
        if (!G && U[b]) {
          for (; m && V[k ? m.toUpperCase() : m];) {
            if (y(q, r, m)) {
              return 1;
            }
            m = q[q.length - 1];
          }
        }
        if (m && W[b] && (m === z || N[b] && N[b][k ? m.toUpperCase() : m]) && y(q, r, m)) {
          return 1;
        }
        (B = B || X[b]) || (q[q.length] = k ? z : b);
        return !1 === r.j(k ? z : b, K, B, f) ? 1 : f;
      }
      return 0;
    }
    for (var t = [], A = a, h, l; a;) {
      if ((h = l = t[t.length - 1]) && Y[l]) {
        if (h = a.toUpperCase().indexOf("</" + l), 0 <= h) {
          h && d.g(a.substring(0, h));
          a = a.substring(h);
          l = c(t, d, a);
          if (1 === l) {
            return;
          }
          l ? a = a.substring(l) : (d.g(a), a = "");
        } else if ("PLAINTEXT" === l) {
          d.g(a), a = "";
        } else {
          d.h(a);
          return;
        }
      } else if (0 === a.indexOf("<![CDATA[")) {
        if (h = a.indexOf("]]\x3e"), -1 !== h) {
          a = a.substring(h + 3);
        } else {
          d.h(a);
          return;
        }
      } else if (0 === a.indexOf("\x3c!--")) {
        h = a.indexOf("--\x3e"), a = -1 !== h ? a.substring(h + 3) : "";
      } else {
        if (0 === a.indexOf("</")) {
          l = c(t, d, a);
          if (1 === l) {
            return;
          }
          a = l ? a.substring(l) : "&lt;" + a.substr(1);
        } else if (0 === a.indexOf("<")) {
          l = H(t, h, d, a, !1, !1);
          if (1 === l) {
            return;
          }
          a = l ? a.substring(l) : "&lt;" + a.substr(1);
        }
        h = a.indexOf("<");
        -1 === h ? (d.g(a), a = "") : h && (d.g(a.substring(0, h)), a = a.substring(h));
      }
      if (a === A) {
        d.h(a);
        return;
      }
      A = a;
    }
    y(t, d);
  }
  function Z(a, d) {
    P(a, d);
  }
  function aa(a) {
    var d = "";
    Z(a, {o:!0, h:function(c) {
      d = c;
    }, j:function(c, y, H) {
      d += "<" + c;
      c = 0;
      for (var t, A; c < y.length; ++c) {
        t = y[c], A = t[1], d += " " + t[0] + (A ? '="' + A + '"' : "");
      }
      d += (H ? "/" : "") + ">";
    }, i:function(c) {
      d += "</" + c + ">";
    }, g:function(c) {
      c.split(" ").join("") && (c = " " === c.charAt(0) ? c.substr(1) : c, c = c.length && " " === c.charAt(c.length - 1) ? c.substr(0, c.length - 1) : c, d += c);
    }, u:function() {
    }, s:function() {
    }});
    return d;
  }
  var X = {AREA:!0, BASE:!0, BASEFONT:!0, BR:!0, COL:!0, FRAME:!0, HR:!0, IMG:!0, INPUT:!0, ISINDEX:!0, LINK:!0, META:!0, PARAM:!0, EMBED:!0}, U = {ADDRESS:!0, APPLET:!0, BLOCKQUOTE:!0, BUTTON:!0, CENTER:!0, DD:!0, DEL:!0, DIR:!0, DIV:!0, DL:!0, DT:!0, FIELDSET:!0, FORM:!0, FRAMESET:!0, HR:!0, IFRAME:!0, INS:!0, ISINDEX:!0, LI:!0, MAP:!0, MENU:!0, NOFRAMES:!0, NOSCRIPT:!0, OBJECT:!0, OL:!0, P:!0, PRE:!0, SCRIPT:!0, TABLE:!0, TBODY:!0, TD:!0, TFOOT:!0, TH:!0, THEAD:!0, TR:!0, UL:!0}, V = {ABBR:!0, 
  ACRONYM:!0, APPLET:!0, B:!0, BASEFONT:!0, BDO:!0, BIG:!0, BR:!0, BUTTON:!0, CITE:!0, CODE:!0, DEL:!0, DFN:!0, EM:!0, FONT:!0, I:!0, IFRAME:!0, IMG:!0, INPUT:!0, INS:!0, KBD:!0, LABEL:!0, MAP:!0, OBJECT:!0, Q:!0, S:!0, SAMP:!0, SCRIPT:!0, SELECT:!0, SMALL:!0, SPAN:!0, STRIKE:!0, STRONG:!0, SUB:!0, SUP:!0, TEXTAREA:!0, TT:!0, U:!0, VAR:!0}, W = {COLGROUP:!0, DD:!0, DT:!0, LI:!0, OPTIONS:!0, P:!0, TBODY:!0, TD:!0, TFOOT:!0, TH:!0, THEAD:!0, TR:!0}, N = {m:{l:!0}, TH:{TD:!0}, TD:{TH:!0}, DT:{DD:!0}, 
  DD:{DT:!0}, COLGROUP:{CAPTION:!0}, THEAD:{CAPTION:!0, COLGROUP:!0}, TFOOT:{CAPTION:!0, COLGROUP:!0, THEAD:!0, TBODY:!0}, TBODY:{CAPTION:!0, COLGROUP:!0, THEAD:!0, TFOOT:!0}}, Y = {SCRIPT:!0, STYLE:!0, PLAINTEXT:!0, XMP:!0, TEXTAREA:!0}, T = {action:!0, archive:!0, background:!0, cite:!0, classid:!0, codebase:!0, data:!0, href:!0, longdesc:!0, profile:!0, src:!0, usemap:!0}, S = {checked:!0, compact:!0, declare:!0, defer:!0, disabled:!0, ismap:!0, multiple:!0, nohref:!0, noresize:!0, noshade:!0, 
  nowrap:!0, readonly:!0, selected:!0}, C = "abcdefghijklmnopqrstuvwxyz \t\r\n\f\b", F = {}, x, v;
  for (x = 26; x;) {
    F[C.charAt(--x)] = 2;
  }
  x = 26;
  for (C = C.toUpperCase(); x;) {
    F[C.charAt(--x)] = 1;
  }
  for (x = 32; 26 < x;) {
    F[C.charAt(--x)] = 4;
  }
  v = F;
  O.onload = function() {
    var a = document.all("input"), d = document.all("output");
    document.all("form").onsubmit = bz;
    function bz(c) {
      c && c.preventDefault();
      "undefined" != typeof event && (event.returnValue = !1);
      d.value = aa(a.value);
      return !1;
    }
    bz = !1;
  };
})(this, parseFloat);

