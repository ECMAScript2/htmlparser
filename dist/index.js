/* es2-html-parser@1.5.0
(c) 2024-2025 itozyun <itozyun@gmail.com>(https://outcloud.blogspot.com/), MIT. */
var g = {area:!0, base:!0, col:!0, embed:!0, br:!0, hr:!0, img:!0, input:!0, link:!0, meta:!0, source:!0, track:!0, wbr:!0, basefont:!0, bgsound:!0, command:!0, frame:!0, isindex:!0, keygen:!0, param:!0, spacer:!0}, q = {map:!0, datalist:!0, dl:!0, ol:!0, ul:!0, select:!0, optgroup:!0, table:!0, thead:!0, tfoot:!0, tbody:!0, colgroup:!0, tr:!0, dir:!0, frameset:!0, menu:!0}, r = {script:!0, style:!0, textarea:!0, title:!0, plaintext:!0, xmp:!0}, x = {textarea:!0, title:!0}, J = {caption:{article:!0, 
section:!0, nav:!0, aside:!0, h1:!0, h2:!0, h3:!0, h4:!0, h5:!0, h6:!0, header:!0, footer:!0, address:!0, p:!0, hr:!0, pre:!0, blockquote:!0, ol:!0, ul:!0, dl:!0, figure:!0, div:!0, a:!0, em:!0, strong:!0, small:!0, s:!0, cite:!0, q:!0, dfn:!0, abbr:!0, data:!0, time:!0, code:!0, "var":!0, samp:!0, kbd:!0, sub:!0, sup:!0, i:!0, b:!0, u:!0, mark:!0, ruby:!0, bdi:!0, bdo:!0, span:!0, br:!0, wbr:!0, ins:!0, del:!0, picture:!0, img:!0, iframe:!0, embed:!0, object:!0, video:!0, audio:!0, map:!0, area:!0, 
math:!0, svg:!0, form:!0, label:!0, input:!0, button:!0, select:!0, datalist:!0, textarea:!0, keygen:!0, output:!0, progress:!0, meter:!0, fieldset:!0, details:!0, dialog:!0, script:!0, noscript:!0, template:!0, canvas:!0}, dd:{article:!0, section:!0, nav:!0, aside:!0, h1:!0, h2:!0, h3:!0, h4:!0, h5:!0, h6:!0, header:!0, footer:!0, address:!0, p:!0, hr:!0, pre:!0, blockquote:!0, ol:!0, ul:!0, dl:!0, figure:!0, div:!0, a:!0, em:!0, strong:!0, small:!0, s:!0, cite:!0, q:!0, dfn:!0, abbr:!0, data:!0, 
time:!0, code:!0, "var":!0, samp:!0, kbd:!0, sub:!0, sup:!0, i:!0, b:!0, u:!0, mark:!0, ruby:!0, bdi:!0, bdo:!0, span:!0, br:!0, wbr:!0, ins:!0, del:!0, picture:!0, img:!0, iframe:!0, embed:!0, object:!0, video:!0, audio:!0, map:!0, area:!0, math:!0, svg:!0, table:!0, form:!0, label:!0, input:!0, button:!0, select:!0, datalist:!0, textarea:!0, keygen:!0, output:!0, progress:!0, meter:!0, fieldset:!0, details:!0, dialog:!0, script:!0, noscript:!0, template:!0, canvas:!0}, dt:{address:!0, p:!0, hr:!0, 
pre:!0, blockquote:!0, ol:!0, ul:!0, dl:!0, figure:!0, div:!0, a:!0, em:!0, strong:!0, small:!0, s:!0, cite:!0, q:!0, dfn:!0, abbr:!0, data:!0, time:!0, code:!0, "var":!0, samp:!0, kbd:!0, sub:!0, sup:!0, i:!0, b:!0, u:!0, mark:!0, ruby:!0, bdi:!0, bdo:!0, span:!0, br:!0, wbr:!0, ins:!0, del:!0, picture:!0, img:!0, iframe:!0, embed:!0, object:!0, video:!0, audio:!0, map:!0, area:!0, math:!0, svg:!0, table:!0, form:!0, label:!0, input:!0, button:!0, select:!0, datalist:!0, textarea:!0, keygen:!0, 
output:!0, progress:!0, meter:!0, fieldset:!0, details:!0, dialog:!0, script:!0, noscript:!0, template:!0, canvas:!0}, p:{a:!0, em:!0, strong:!0, small:!0, s:!0, cite:!0, q:!0, dfn:!0, abbr:!0, data:!0, time:!0, code:!0, "var":!0, samp:!0, kbd:!0, sub:!0, sup:!0, i:!0, b:!0, u:!0, mark:!0, ruby:!0, bdi:!0, bdo:!0, span:!0, br:!0, wbr:!0, ins:!0, del:!0, picture:!0, img:!0, iframe:!0, embed:!0, object:!0, video:!0, audio:!0, map:!0, area:!0, math:!0, svg:!0, label:!0, input:!0, button:!0, select:!0, 
datalist:!0, textarea:!0, keygen:!0, output:!0, progress:!0, meter:!0, script:!0, noscript:!0, template:!0, canvas:!0}, html:{head:!0, body:!0, frameset:!0}, head:{title:!0, base:!0, link:!0, meta:!0, style:!0, script:!0, noscript:!0, template:!0, bgsound:!0, isindex:!0}, colgroup:{col:!0}, optgroup:{option:!0}, option:{}, tbody:{tr:!0}, tr:{th:!0, td:!0}};
J.li = J.td = J.dd;
J.th = J.dt;
J.rp = J.rt = J.p;
J.rb = J.rp;
J.rtc = J.rbc = {rb:!0, rp:!0, rt:!0};
J.tfoot = J.thead = J.tbody;
var K = {a:2, b:2, c:2, d:2, e:2, f:2, g:2, h:2, i:2, j:2, k:2, l:2, m:2, n:2, o:2, p:2, q:2, r:2, s:2, t:2, u:2, v:2, w:2, x:2, y:2, z:2, A:1, B:1, C:1, D:1, E:1, F:1, G:1, H:1, I:1, J:1, K:1, L:1, M:1, N:1, O:1, P:1, Q:1, R:1, S:1, T:1, U:1, V:1, W:1, X:1, Y:1, Z:1, "\t":4, "\n":4, "\f":4, "\r":4, " ":4};
function P(a) {
  return a.split("&lt;").join("<").split("&gt;").join(">").split("&amp;lt;").join("&lt;").split("&amp;gt;").join("&gt;");
}
function Q(a, y) {
  function u() {
    c = a.indexOf("<", c + 1);
    c === -1 && (c = a.length, z());
  }
  function z() {
    if (c) {
      var l = a.substr(0, c);
      a = a.substr(c);
      c = 0;
      (E || m && !q[m]) && n.ja(L && !x[m] ? l : P(l));
    }
  }
  function v(l) {
    n.aa && n.aa(l);
  }
  function X(l) {
    for (var k = 0, p = a.length, h = 3, b, B; h < p && k !== 2; ++h) {
      switch(b = a.charAt(h), k) {
        case 0:
          if (K[b] & 4) {
            k = 1;
            B = h;
            break;
          }
        case 1:
          b === ">" && (k = 2, B = h);
      }
    }
    if (k === 2) {
      k = a.substring(2, B).toLowerCase(), a = a.substr(h), g[k] || M(l, k, !1);
    } else {
      return v(a), !0;
    }
  }
  function M(l, k, p) {
    var h = 0, b = l.length;
    if (k) {
      for (h = b; 0 <= h && l[--h] !== k;) {
      }
    }
    if (0 <= h) {
      for (; h < b;) {
        n.$(l[--b], p && !J[l[b]], !1);
      }
      l.length = h;
    } else {
      n.$(k, !1, !0);
    }
    m = w[w.length - 1] || "";
  }
  function Y(l) {
    function k(F) {
      A = a.substring(1, F).toLowerCase();
    }
    function p(F) {
      var Z = a.substring(N, C).toLowerCase();
      G = G || {};
      G[Z] = F != null ? P(a.substring(O, F)).split('\\"').join('"').split("\\'").join("'") : !0;
    }
    function h() {
      (D = a.substr(d, 2) === "/>") && ++d;
      return D;
    }
    for (var b = 1, B = a.length, d = 2, G = null, D = !1, e, N, C, O, A, S, H; d < B && b < 9; ++d) {
      switch(e = a.charAt(d), b) {
        case 1:
          K[e] & 4 ? (b = 2, k(d)) : e === ">" ? (b = 9, k(d)) : h() && (b = 9, k(d - 1));
          break;
        case 2:
          e === ">" || h() ? b = 9 : K[e] & 4 || (b = 3, N = d);
          break;
        case 3:
          e === "=" ? (b = 5, C = d) : K[e] & 4 ? (b = 4, C = d) : e === ">" ? (b = 9, C = d, p()) : h() && (b = 9, C = d - 1, p());
          break;
        case 4:
          e === "=" ? b = 5 : e === ">" || h() ? (b = 9, p()) : K[e] & 4 || (b = 3, p(), N = d);
          break;
        case 5:
          e === '"' || e === "'" ? (b = 6, S = e, H = !1, O = d + 1) : K[e] & 4 || (b = 7, O = d);
          break;
        case 6:
          H || e !== S || (b = 2, p(d));
          H = e === "\\" && !H;
          break;
        case 7:
          K[e] & 4 ? (b = 2, p(d)) : e === ">" && (b = 9, p(d));
      }
    }
    if (b === 9) {
      if (!(0 < A.indexOf(":"))) {
        for (; m;) {
          if (J[m] && !J[m][A]) {
            M(l, m, !1);
          } else {
            break;
          }
        }
      }
      (D = D || !!g[A]) || (m = w[w.length] = A);
      a = a.substr(d);
      n.ia(A, G, D, d);
    } else {
      return v(a), !0;
    }
  }
  var n = R, w = [], E = !0, c = -1, m = "", I;
  for (u(); a;) {
    var L = r[m];
    if (E && a.length === y && a.indexOf("<?xml ") === c) {
      a = a.substr(c);
      c = 0;
      var f = a.indexOf("?>");
      if (f !== -1) {
        var t = a.substring(2, f);
        a = a.substr(f + 2);
        E = !1;
        n.ba(t);
      } else {
        v(a);
        return;
      }
    } else if (a.indexOf("<?") === c) {
      if (z(), f = a.indexOf("?>"), f !== -1) {
        t = a.substring(2 + c, f), a = a.substr(f + 2), n.ba(t);
      } else {
        v(a);
        return;
      }
    } else if (a.indexOf("</", c) === c && K[a.charAt(c + 2)] & 3) {
      if (L && (m === "plaintext" ? I = !0 : a.indexOf(m, c) !== c + 2 && a.indexOf(m.toUpperCase(), c) !== c + 2 && (I = !0)), I) {
        u(), I = !1;
      } else {
        if (z(), X(w)) {
          return;
        }
      }
    } else if (L) {
      u();
    } else if (a.charAt(c) === "<" && K[a.charAt(c + 1)] & 3) {
      if (z(), Y(w)) {
        return;
      }
    } else if (a.indexOf("\x3c!--") === c) {
      if (z(), f = a.indexOf("--\x3e"), f !== -1) {
        t = a.substring(4, f), a = a.substr(f + 3), n.ga(P(t));
      } else {
        v(a);
        return;
      }
    } else if (a.indexOf("<![CDATA[") === c) {
      if (z(), f = a.indexOf("]]\x3e"), f !== -1) {
        t = a.substring(9, f), a = a.substr(f + 3), n.fa(t);
      } else {
        v(a);
        return;
      }
    } else if (a.indexOf("<!DOCTYPE ") === c || a.indexOf("<!doctype ") === c) {
      if (a = a.substr(c), c = 0, f = a.indexOf(">"), f !== -1) {
        t = a.substring(0, f + 1), a = a.substr(f + 1), E = !1, n.ha(t);
      } else {
        v(a);
        return;
      }
    } else {
      u();
    }
  }
  M(w, "", !0);
}
;var T, U, V, W, R = {ea:function() {
  T = U = [];
  V = [];
  W = "";
}, da:function() {
  typeof T[0] !== "number" && T.unshift(11);
  return T;
}, aa:function(a) {
  throw a;
}, ha:function(a) {
  T[0] = 9;
  T[1] = W + a;
  W = "";
}, ia:function(a, y, u) {
  a = [a];
  y && (a[1] = y);
  U.push(a);
  u || (V.push(U), U = a);
}, $:function(a, y, u) {
  u ? U.push("</" + a + ">") : y || a === U[0] && (U = V.pop());
}, ja:function(a) {
  U.push(a);
}, ga:function(a) {
  U.push([8, a]);
}, fa:function(a) {
  U.push([4, a]);
}, ba:function(a) {
  T.length === 0 && a.indexOf("xml ") === 0 ? W = "<?" + a + "?>" : U.push([7, a]);
}};
module.exports = function(a) {
  R.ea();
  Q(a, a.length);
  return R.da();
};

