"use strict";(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[5283,2729],{85283:(e,i,r)=>{r.r(i),r.d(i,{snakeCase:()=>c});var n=r(223);function t(e){return e.toLowerCase()}var a=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],o=/[^A-Z0-9]+/gi;function u(e,i,r){return i instanceof RegExp?e.replace(i,r):i.reduce((function(e,i){return e.replace(i,r)}),e)}function s(e,i){return void 0===i&&(i={}),function(e,i){void 0===i&&(i={});for(var r=i.splitRegexp,n=void 0===r?a:r,s=i.stripRegexp,c=void 0===s?o:s,f=i.transform,d=void 0===f?t:f,p=i.delimiter,l=void 0===p?" ":p,v=u(u(e,n,"$1\0$2"),c,"\0"),g=0,k=v.length;"\0"===v.charAt(g);)g++;for(;"\0"===v.charAt(k-1);)k--;return v.slice(g,k).split("\0").map(d).join(l)}(e,(0,n.__assign)({delimiter:"."},i))}function c(e,i){return void 0===i&&(i={}),s(e,(0,n.__assign)({delimiter:"_"},i))}}}]);
