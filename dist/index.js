/* es2-html-parser@2.0.0
(c) 2024-2025 itozyun <itozyun@gmail.com>(https://outcloud.blogspot.com/), MIT. */
var h = {area:!0, base:!0, col:!0, embed:!0, br:!0, hr:!0, img:!0, input:!0, link:!0, meta:!0, source:!0, track:!0, wbr:!0, basefont:!0, bgsound:!0, command:!0, frame:!0, isindex:!0, keygen:!0, param:!0, spacer:!0}, q = {map:!0, datalist:!0, dl:!0, ol:!0, ul:!0, select:!0, optgroup:!0, table:!0, thead:!0, tfoot:!0, tbody:!0, colgroup:!0, tr:!0, dir:!0, frameset:!0, menu:!0}, t = {script:!0, style:!0, textarea:!0, title:!0, plaintext:!0, xmp:!0}, y = {textarea:!0, title:!0}, J = {caption:{article:!0, 
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
function Q(a) {
  return a.split("&lt;").join("<").split("&gt;").join(">").split("&amp;lt;").join("&lt;").split("&amp;gt;").join("&gt;");
}
function R(a, z) {
  function v() {
    c = a.indexOf("<", c + 1);
    c === -1 && (c = a.length, A());
  }
  function A() {
    if (c) {
      var l = a.substr(0, c);
      a = a.substr(c);
      c = 0;
      (E || m && !q[m]) && n.ja(L && !y[m] ? l : Q(l));
    }
  }
  function w(l) {
    n.aa && n.aa(l);
  }
  function Y(l) {
    for (var e = 0, p = a.length, k = 3, b, B; k < p && e !== 2; ++k) {
      switch(b = a.charAt(k), e) {
        case 0:
          if (K[b] & 4) {
            e = 1;
            B = k;
            break;
          }
        case 1:
          b === ">" && (e = 2, B = k);
      }
    }
    if (e === 2) {
      e = a.substring(2, B), a = a.substr(k), 0 < e.indexOf(":") || (e = e.toLowerCase()), h[e] || M(l, e, !1);
    } else {
      return w(a), !0;
    }
  }
  function M(l, e, p) {
    var k = 0, b = l.length;
    if (e) {
      for (k = b; 0 <= k && l[--k] !== e;) {
      }
    }
    if (0 <= k) {
      for (; k < b;) {
        n.$(l[--b], p && !J[l[b]], !1);
      }
      l.length = k;
    } else {
      n.$(e, !1, !0);
    }
    m = x[x.length - 1] || "";
  }
  function Z(l) {
    function e(F) {
      r = a.substring(1, F);
      0 < r.indexOf(":") || (r = r.toLowerCase());
    }
    function p(F) {
      var O = a.substring(N, C);
      0 < r.indexOf(":") || (O = O.toLowerCase());
      G = G || {};
      G[O] = F != null ? Q(a.substring(P, F)).split('\\"').join('"').split("\\'").join("'") : !0;
    }
    function k() {
      (D = a.substr(d, 2) === "/>") && ++d;
      return D;
    }
    for (var b = 1, B = a.length, d = 2, G = null, D = !1, f, N, C, P, r, T, H; d < B && b < 9; ++d) {
      switch(f = a.charAt(d), b) {
        case 1:
          K[f] & 4 ? (b = 2, e(d)) : f === ">" ? (b = 9, e(d)) : k() && (b = 9, e(d - 1));
          break;
        case 2:
          f === ">" || k() ? b = 9 : K[f] & 4 || (b = 3, N = d);
          break;
        case 3:
          f === "=" ? (b = 5, C = d) : K[f] & 4 ? (b = 4, C = d) : f === ">" ? (b = 9, C = d, p()) : k() && (b = 9, C = d - 1, p());
          break;
        case 4:
          f === "=" ? b = 5 : f === ">" || k() ? (b = 9, p()) : K[f] & 4 || (b = 3, p(), N = d);
          break;
        case 5:
          f === '"' || f === "'" ? (b = 6, T = f, H = !1, P = d + 1) : K[f] & 4 || (b = 7, P = d);
          break;
        case 6:
          H || f !== T || (b = 2, p(d));
          H = f === "\\" && !H;
          break;
        case 7:
          K[f] & 4 ? (b = 2, p(d)) : f === ">" && (b = 9, p(d));
      }
    }
    if (b === 9) {
      if (!(0 < r.indexOf(":"))) {
        for (; m;) {
          if (J[m] && !J[m][r]) {
            M(l, m, !1);
          } else {
            break;
          }
        }
      }
      (D = D || !!h[r]) || (m = x[x.length] = r);
      a = a.substr(d);
      n.ia(r, G, D, d);
    } else {
      return w(a), !0;
    }
  }
  var n = S, x = [], E = !0, c = -1, m = "", I;
  for (v(); a;) {
    var L = t[m];
    if (E && a.length === z && a.indexOf("<?xml ") === c) {
      a = a.substr(c);
      c = 0;
      var g = a.indexOf("?>");
      if (g !== -1) {
        var u = a.substring(2, g);
        a = a.substr(g + 2);
        E = !1;
        n.ba(u);
      } else {
        w(a);
        return;
      }
    } else if (a.indexOf("<?") === c) {
      if (A(), g = a.indexOf("?>"), g !== -1) {
        u = a.substring(2 + c, g), a = a.substr(g + 2), n.ba(u);
      } else {
        w(a);
        return;
      }
    } else if (a.indexOf("</", c) === c && K[a.charAt(c + 2)] & 3) {
      if (L && (m === "plaintext" ? I = !0 : a.indexOf(m, c) !== c + 2 && a.indexOf(m.toUpperCase(), c) !== c + 2 && (I = !0)), I) {
        v(), I = !1;
      } else {
        if (A(), Y(x)) {
          return;
        }
      }
    } else if (L) {
      v();
    } else if (a.charAt(c) === "<" && K[a.charAt(c + 1)] & 3) {
      if (A(), Z(x)) {
        return;
      }
    } else if (a.indexOf("\x3c!--") === c) {
      if (A(), g = a.indexOf("--\x3e"), g !== -1) {
        u = a.substring(4, g), a = a.substr(g + 3), n.ga(Q(u));
      } else {
        w(a);
        return;
      }
    } else if (a.indexOf("<![CDATA[") === c) {
      if (A(), g = a.indexOf("]]\x3e"), g !== -1) {
        u = a.substring(9, g), a = a.substr(g + 3), n.fa(u);
      } else {
        w(a);
        return;
      }
    } else if (a.indexOf("<!DOCTYPE ") === c || a.indexOf("<!doctype ") === c) {
      if (a = a.substr(c), c = 0, g = a.indexOf(">"), g !== -1) {
        u = a.substring(0, g + 1), a = a.substr(g + 1), E = !1, n.ha(u);
      } else {
        w(a);
        return;
      }
    } else {
      v();
    }
  }
  M(x, "", !0);
}
;var U, V, W, X, S = {ea:function() {
  U = V = [];
  W = [];
  X = "";
}, da:function() {
  typeof U[0] !== "number" && U.unshift(11);
  return U;
}, aa:function(a) {
  throw a;
}, ha:function(a) {
  U[0] = 9;
  U[1] = X + a;
  X = "";
}, ia:function(a, z, v) {
  a = [a];
  z && (a[1] = z);
  V.push(a);
  v || (W.push(V), V = a);
}, $:function(a, z, v) {
  v ? V.push("</" + a + ">") : z || a === V[0] && (V = W.pop());
}, ja:function(a) {
  V.push(a);
}, ga:function(a) {
  V.push([8, a]);
}, fa:function(a) {
  V.push([4, a]);
}, ba:function(a) {
  U.length === 0 && a.indexOf("xml ") === 0 ? X = "<?" + a + "?>" : V.push([7, a]);
}};
module.exports = function(a) {
  S.ea();
  R(a, a.length);
  return S.da();
};

