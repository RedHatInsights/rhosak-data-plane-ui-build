"use strict";(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[2315,9208],{42315:(e,r,n)=>{n.r(r),n.d(r,{sentenceCase:()=>c,sentenceCaseTransform:()=>u});var t=n(9922);function a(e){return e.toLowerCase()}var i=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],o=/[^A-Z0-9]+/gi;function s(e,r,n){return r instanceof RegExp?e.replace(r,n):r.reduce((function(e,r){return e.replace(r,n)}),e)}function u(e,r){var n=e.toLowerCase();return 0===r?function(e){return e.charAt(0).toUpperCase()+e.substr(1)}(n):n}function c(e,r){return void 0===r&&(r={}),function(e,r){void 0===r&&(r={});for(var n=r.splitRegexp,t=void 0===n?i:n,u=r.stripRegexp,c=void 0===u?o:u,f=r.transform,p=void 0===f?a:f,d=r.delimiter,l=void 0===d?" ":d,v=s(s(e,t,"$1\0$2"),c,"\0"),g=0,k=v.length;"\0"===v.charAt(g);)g++;for(;"\0"===v.charAt(k-1);)k--;return v.slice(g,k).split("\0").map(p).join(l)}(e,(0,t.__assign)({delimiter:" ",transform:u},r))}}}]);
