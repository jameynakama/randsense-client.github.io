(this["webpackJsonprandsense-client"]=this["webpackJsonprandsense-client"]||[]).push([[0],[,,,function(e,n,t){e.exports={sentence:"Sentence_sentence__2EqTb",data:"Sentence_data__45Th7"}},,,,function(e,n,t){e.exports={wrapper:"Home_wrapper__299gS",error:"Home_error__4bpb1"}},,function(e,n,t){e.exports={wrapper:"Word_wrapper__1fL4w"}},,,,,function(e,n,t){},function(e,n,t){},,function(e,n,t){"use strict";t.r(n);var c=t(1),a=t.n(c),s=t(8),r=t.n(s),i=(t(14),t(15),t(2)),o=t(5),l=t.n(o),u=t(6),j=t.n(u),d=t(9),b=t.n(d),p=t(0),h=function(e){var n=e.inflectedWord,t=e.onClick;return Object(p.jsx)("span",{className:b.a.wrapper,children:Object(p.jsx)("button",{onClick:t,children:n})})},f=t(3),O=t.n(f),m=function(e){var n=e.sentence,t=a.a.useState(null),c=Object(i.a)(t,2),s=c[0],r=c[1],o=a.a.useState(!1),u=Object(i.a)(o,2),d=u[0],b=u[1],f=n.base,m=n.inflected.split(" ");return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:O.a.sentence,children:m.map((function(e,n){return Object(p.jsx)(h,{inflectedWord:e,onClick:function(){return e=f[n],r(e),void b(!1);var e}},n)}))}),Object(p.jsx)("button",{className:"appButton",onClick:function(){b(!0),r(null)},children:"See sentence data"}),Object(p.jsx)("button",{className:"appButton",children:"Is this grammatically incorrect?"}),d&&Object(p.jsx)("div",{className:j()(O.a.data,O.a.sentenceData),children:Object(p.jsx)(l.a,{src:n})}),s&&Object(p.jsx)("div",{className:j()(O.a.data,O.a.wordData),children:Object(p.jsx)(l.a,{src:s,theme:"summerfruit:inverted"})})]})},x=t(7),v=t.n(x),_=function(){var e=a.a.useState(!1),n=Object(i.a)(e,2),t=n[0],c=n[1],s=a.a.useState(null),r=Object(i.a)(s,2),o=r[0],l=r[1],u=a.a.useState(null),j=Object(i.a)(u,2),d=j[0],b=j[1];return Object(p.jsxs)("div",{className:v.a.wrapper,children:[Object(p.jsx)("h1",{children:"RandSense"}),Object(p.jsx)("button",{className:"appButton",onClick:function(){c(!0),fetch("".concat("https://jamey.wtf/randsense/api/v1/","sentences/"),{method:"POST"}).then((function(e){return e.json()})).then((function(e){b(e),c(!1),l(null)})).catch((function(e){l(e.toString()),c(!1)}))},disabled:t,children:"Generate sentence"}),o&&Object(p.jsxs)("p",{className:v.a.error,children:["Error: ",o]}),d&&!o&&Object(p.jsx)(m,{sentence:d})]})};var S=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(_,{})})},w=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,18)).then((function(n){var t=n.getCLS,c=n.getFID,a=n.getFCP,s=n.getLCP,r=n.getTTFB;t(e),c(e),a(e),s(e),r(e)}))};r.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(S,{})}),document.getElementById("root")),w()}],[[17,1,2]]]);
//# sourceMappingURL=main.92227060.chunk.js.map