(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[7106],{77106:(e,t,n)=>{"use strict";n.r(t),n.d(t,{I18nContext:()=>S,I18nextProvider:()=>ae,Trans:()=>q,Translation:()=>ie,composeInitialProps:()=>R,date:()=>fe,getDefaults:()=>k,getI18n:()=>D,getInitialProps:()=>C,initReactI18next:()=>Z,number:()=>de,plural:()=>ge,select:()=>ye,selectOrdinal:()=>me,setDefaults:()=>x,setI18n:()=>I,time:()=>pe,useSSR:()=>ce,useTranslation:()=>X,withSSR:()=>le,withTranslation:()=>re});var r=n(63366);function o(e,t){if(null==e)return{};var n,o,i=(0,r.Z)(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var i=n(71002),a=n(4942),c=n(75418),s=n.n(c),u=n(71739),l=n.n(u),f=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function p(e){var t={type:"tag",name:"",voidElement:!1,attrs:{},children:[]},n=e.match(/<\/?([^\s]+?)[/\s>]/);if(n&&(t.name=n[1],(l()[n[1]]||"/"===e.charAt(e.length-2))&&(t.voidElement=!0),t.name.startsWith("!--"))){var r=e.indexOf("--\x3e");return{type:"comment",comment:-1!==r?e.slice(4,r):""}}for(var o=new RegExp(f),i=null;null!==(i=o.exec(e));)if(i[0].trim())if(i[1]){var a=i[1].trim(),c=[a,""];a.indexOf("=")>-1&&(c=a.split("=")),t.attrs[c[0]]=c[1],o.lastIndex--}else i[2]&&(t.attrs[i[2]]=i[3].trim().substring(1,i[3].length-1));return t}var d=/<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,y=/^\s*$/,g=Object.create(null);function m(e,t){switch(t.type){case"text":return e+t.content;case"tag":return e+="<"+t.name+(t.attrs?function(e){var t=[];for(var n in e)t.push(n+'="'+e[n]+'"');return t.length?" "+t.join(" "):""}(t.attrs):"")+(t.voidElement?"/>":">"),t.voidElement?e:e+t.children.reduce(m,"")+"</"+t.name+">";case"comment":return e+"\x3c!--"+t.comment+"--\x3e"}}var h={parse:function(e,t){t||(t={}),t.components||(t.components=g);var n,r=[],o=[],i=-1,a=!1;if(0!==e.indexOf("<")){var c=e.indexOf("<");r.push({type:"text",content:-1===c?e:e.substring(0,c)})}return e.replace(d,(function(c,s){if(a){if(c!=="</"+n.name+">")return;a=!1}var u,l="/"!==c.charAt(1),f=c.startsWith("\x3c!--"),d=s+c.length,g=e.charAt(d);if(f){var m=p(c);return i<0?(r.push(m),r):((u=o[i]).children.push(m),r)}if(l&&(i++,"tag"===(n=p(c)).type&&t.components[n.name]&&(n.type="component",a=!0),n.voidElement||a||!g||"<"===g||n.children.push({type:"text",content:e.slice(d,e.indexOf("<",d))}),0===i&&r.push(n),(u=o[i-1])&&u.children.push(n),o[i]=n),(!l||n.voidElement)&&(i>-1&&(n.voidElement||n.name===c.slice(2,-1))&&(i--,n=-1===i?r:o[i]),!a&&"<"!==g&&g)){u=-1===i?r:o[i].children;var h=e.indexOf("<",d),b=e.slice(d,-1===h?void 0:h);y.test(b)&&(b=" "),(h>-1&&i+u.length>=0||" "!==b)&&u.push({type:"text",content:b})}})),r},stringify:function(e){return e.reduce((function(e,t){return e+m("",t)}),"")}};const b=h;var v=n(15671),O=n(43144);function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var P,E={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0},S=s().createContext();function x(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};E=w(w({},E),e)}function k(){return E}var N=function(){function e(){(0,v.Z)(this,e),this.usedNamespaces={}}return(0,O.Z)(e,[{key:"addUsedNamespaces",value:function(e){var t=this;e.forEach((function(e){t.usedNamespaces[e]||(t.usedNamespaces[e]=!0)}))}},{key:"getUsedNamespaces",value:function(){return Object.keys(this.usedNamespaces)}}]),e}();function I(e){P=e}function D(){return P}var Z={type:"3rdParty",init:function(e){x(e.options.react),I(e)}};function R(e){return function(t){return new Promise((function(n){var r=C();e.getInitialProps?e.getInitialProps(t).then((function(e){n(w(w({},e),r))})):n(r)}))}}function C(){var e=D(),t=e.reportNamespaces?e.reportNamespaces.getUsedNamespaces():[],n={},r={};return e.languages.forEach((function(n){r[n]={},t.forEach((function(t){r[n][t]=e.getResourceBundle(n,t)||{}}))})),n.initialI18nStore=r,n.initialLanguage=e.language,n}function A(){if(console&&console.warn){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];"string"==typeof n[0]&&(n[0]="react-i18next:: ".concat(n[0])),(e=console).warn.apply(e,n)}}var T={};function z(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];"string"==typeof t[0]&&T[t[0]]||("string"==typeof t[0]&&(T[t[0]]=new Date),A.apply(void 0,t))}function L(e,t,n){e.loadNamespaces(t,(function(){if(e.isInitialized)n();else{e.on("initialized",(function t(){setTimeout((function(){e.off("initialized",t)}),0),n()}))}}))}function B(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t.languages||!t.languages.length)return z("i18n.languages were undefined or empty",t.languages),!0;var r=t.languages[0],o=!!t.options&&t.options.fallbackLng,i=t.languages[t.languages.length-1];if("cimode"===r.toLowerCase())return!0;var a=function(e,n){var r=t.services.backendConnector.state["".concat(e,"|").concat(n)];return-1===r||2===r};return!(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!a(t.isLanguageChangingTo,e))&&(!!t.hasResourceBundle(r,e)||(!t.services.backendConnector.backend||!(!a(r,e)||o&&!a(i,e))))}function U(e){return e.displayName||e.name||("string"==typeof e&&e.length>0?e:"Unknown")}var V=["format"],K=["children","count","parent","i18nKey","tOptions","values","defaults","components","ns","i18n","t"];function W(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?W(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function H(e,t){if(!e)return!1;var n=e.props?e.props.children:e.children;return t?n.length>0:!!n}function M(e){return e?e&&e.children?e.children:e.props&&e.props.children:[]}function $(e){return Array.isArray(e)?e:[e]}function Y(e,t){if(!e)return"";var n="",r=$(e),a=t.transKeepBasicHtmlNodesFor||[];return r.forEach((function(e,r){if("string"==typeof e)n+="".concat(e);else if(s().isValidElement(e)){var c=Object.keys(e.props).length,u=a.indexOf(e.type)>-1,l=e.props.children;if(!l&&u&&0===c)n+="<".concat(e.type,"/>");else if(l||u&&0===c)if(e.props.i18nIsDynamicList)n+="<".concat(r,"></").concat(r,">");else if(u&&1===c&&"string"==typeof l)n+="<".concat(e.type,">").concat(l,"</").concat(e.type,">");else{var f=Y(l,t);n+="<".concat(r,">").concat(f,"</").concat(r,">")}else n+="<".concat(r,"></").concat(r,">")}else if(null===e)A("Trans: the passed in value is invalid - seems you passed in a null child.");else if("object"===(0,i.Z)(e)){var p=e.format,d=o(e,V),y=Object.keys(d);if(1===y.length){var g=p?"".concat(y[0],", ").concat(p):y[0];n+="{{".concat(g,"}}")}else A("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",e)}else A("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",e)})),n}function _(e,t,n,r,o){if(""===t)return[];var a=r.transKeepBasicHtmlNodesFor||[],c=t&&new RegExp(a.join("|")).test(t);if(!e&&!c)return[t];var u={};!function e(t){$(t).forEach((function(t){"string"!=typeof t&&(H(t)?e(M(t)):"object"!==(0,i.Z)(t)||s().isValidElement(t)||Object.assign(u,t))}))}(e);var l=b.parse("<0>".concat(t,"</0>")),f=F(F({},u),o);function p(e,t,n){var r=M(e),o=y(r,t.children,n);return function(e){return"[object Array]"===Object.prototype.toString.call(e)&&e.every((function(e){return s().isValidElement(e)}))}(r)&&0===o.length?r:o}function d(e,t,n,r,o){e.dummy&&(e.children=t),n.push(s().cloneElement(e,F(F({},e.props),{},{key:r}),o?void 0:t))}function y(t,o,u){var l=$(t);return $(o).reduce((function(t,o,g){var m,h,b,v=o.children&&o.children[0]&&o.children[0].content&&n.services.interpolator.interpolate(o.children[0].content,f,n.language);if("tag"===o.type){var O=l[parseInt(o.name,10)];!O&&1===u.length&&u[0][o.name]&&(O=u[0][o.name]),O||(O={});var j=0!==Object.keys(o.attrs).length?(m={props:o.attrs},(b=F({},h=O)).props=Object.assign(m.props,h.props),b):O,w=s().isValidElement(j),P=w&&H(o,!0)&&!o.voidElement,E=c&&"object"===(0,i.Z)(j)&&j.dummy&&!w,S="object"===(0,i.Z)(e)&&null!==e&&Object.hasOwnProperty.call(e,o.name);if("string"==typeof j){var x=n.services.interpolator.interpolate(j,f,n.language);t.push(x)}else if(H(j)||P){d(j,p(j,o,u),t,g)}else if(E){var k=y(l,o.children,u);t.push(s().cloneElement(j,F(F({},j.props),{},{key:g}),k))}else if(Number.isNaN(parseFloat(o.name))){if(S)d(j,p(j,o,u),t,g,o.voidElement);else if(r.transSupportBasicHtmlNodes&&a.indexOf(o.name)>-1)if(o.voidElement)t.push(s().createElement(o.name,{key:"".concat(o.name,"-").concat(g)}));else{var N=y(l,o.children,u);t.push(s().createElement(o.name,{key:"".concat(o.name,"-").concat(g)},N))}else if(o.voidElement)t.push("<".concat(o.name," />"));else{var I=y(l,o.children,u);t.push("<".concat(o.name,">").concat(I,"</").concat(o.name,">"))}}else if("object"!==(0,i.Z)(j)||w)1===o.children.length&&v?t.push(s().cloneElement(j,F(F({},j.props),{},{key:g}),v)):t.push(s().cloneElement(j,F(F({},j.props),{},{key:g})));else{var D=o.children[0]?v:null;D&&t.push(D)}}else if("text"===o.type){var Z=r.transWrapTextNodes,R=n.services.interpolator.interpolate(o.content,f,n.language);Z?t.push(s().createElement(Z,{key:"".concat(o.name,"-").concat(g)},R)):t.push(R)}return t}),[])}return M(y([{dummy:!0,children:e||[]}],l,$(e||[]))[0])}function q(e){var t=e.children,n=e.count,r=e.parent,i=e.i18nKey,a=e.tOptions,u=void 0===a?{}:a,l=e.values,f=e.defaults,p=e.components,d=e.ns,y=e.i18n,g=e.t,m=o(e,K),h=(0,c.useContext)(S)||{},b=h.i18n,v=h.defaultNS,O=y||b||D();if(!O)return z("You will need to pass in an i18next instance by using i18nextReactModule"),t;var j=g||O.t.bind(O)||function(e){return e},w=F(F({},k()),O.options&&O.options.react),P=d||j.ns||v||O.options&&O.options.defaultNS;P="string"==typeof P?[P]:P||["translation"];var E=f||Y(t,w)||w.transEmptyNodeValue||i,x=w.hashTransKey,N=i||(x?x(E):E),I=l?u.interpolation:{interpolation:F(F({},u.interpolation),{},{prefix:"#$?",suffix:"?$#"})},Z=F(F(F(F({},u),{},{count:n},l),I),{},{defaultValue:E,ns:P}),R=_(p||t,N?j(N,Z):E,O,w,Z),C=void 0!==r?r:w.defaultTransParent;return C?s().createElement(C,m,R):R}var G=n(98152);function J(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?J(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):J(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function X(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.i18n,r=(0,c.useContext)(S)||{},o=r.i18n,i=r.defaultNS,a=n||o||D();if(a&&!a.reportNamespaces&&(a.reportNamespaces=new N),!a){z("You will need to pass in an i18next instance by using initReactI18next");var s=function(e){return Array.isArray(e)?e[e.length-1]:e},u=[s,{},!1];return u.t=s,u.i18n={},u.ready=!1,u}a.options.react&&void 0!==a.options.react.wait&&z("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var l=Q(Q(Q({},k()),a.options.react),t),f=l.useSuspense,p=l.keyPrefix,d=e||i||a.options&&a.options.defaultNS;d="string"==typeof d?[d]:d||["translation"],a.reportNamespaces.addUsedNamespaces&&a.reportNamespaces.addUsedNamespaces(d);var y=(a.isInitialized||a.initializedStoreOnce)&&d.every((function(e){return B(e,a,l)}));function g(){return a.getFixedT(null,"fallback"===l.nsMode?d:d[0],p)}var m=(0,c.useState)(g),h=(0,G.Z)(m,2),b=h[0],v=h[1],O=(0,c.useRef)(!0);(0,c.useEffect)((function(){var e=l.bindI18n,t=l.bindI18nStore;function n(){O.current&&v(g)}return O.current=!0,y||f||L(a,d,(function(){O.current&&v(g)})),e&&a&&a.on(e,n),t&&a&&a.store.on(t,n),function(){O.current=!1,e&&a&&e.split(" ").forEach((function(e){return a.off(e,n)})),t&&a&&t.split(" ").forEach((function(e){return a.store.off(e,n)}))}}),[a,d.join()]);var j=(0,c.useRef)(!0);(0,c.useEffect)((function(){O.current&&!j.current&&v(g),j.current=!1}),[a]);var w=[b,a,y];if(w.t=b,w.i18n=a,w.ready=y,y)return w;if(!y&&!f)return w;throw new Promise((function(e){L(a,d,(function(){e()}))}))}var ee=["forwardedRef"];function te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ne(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?te(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):te(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function re(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(n){function r(r){var i=r.forwardedRef,a=o(r,ee),c=X(e,a),u=(0,G.Z)(c,3),l=u[0],f=u[1],p=u[2],d=ne(ne({},a),{},{t:l,i18n:f,tReady:p});return t.withRef&&i?d.ref=i:!t.withRef&&i&&(d.forwardedRef=i),s().createElement(n,d)}r.displayName="withI18nextTranslation(".concat(U(n),")"),r.WrappedComponent=n;return t.withRef?s().forwardRef((function(e,t){return s().createElement(r,Object.assign({},e,{forwardedRef:t}))})):r}}var oe=["ns","children"];function ie(e){var t=e.ns,n=e.children,r=X(t,o(e,oe)),i=(0,G.Z)(r,3),a=i[0],c=i[1],s=i[2];return n(a,{i18n:c,lng:c.language},s)}function ae(e){var t=e.i18n,n=e.defaultNS,r=e.children,o=(0,c.useMemo)((function(){return{i18n:t,defaultNS:n}}),[t,n]);return(0,c.createElement)(S.Provider,{value:o},r)}function ce(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.i18n,o=(0,c.useContext)(S)||{},i=o.i18n,a=r||i||D();a.options&&a.options.isClone||(e&&!a.initializedStoreOnce&&(a.services.resourceStore.data=e,a.options.ns=Object.values(e).reduce((function(e,t){return Object.keys(t).forEach((function(t){e.indexOf(t)<0&&e.push(t)})),e}),a.options.ns),a.initializedStoreOnce=!0,a.isInitialized=!0),t&&!a.initializedLanguageOnce&&(a.changeLanguage(t),a.initializedLanguageOnce=!0))}var se=["initialI18nStore","initialLanguage"];function ue(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function le(){return function(e){function t(t){var n=t.initialI18nStore,r=t.initialLanguage,i=o(t,se);return ce(n,r),s().createElement(e,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ue(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ue(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},i))}return t.getInitialProps=R(e),t.displayName="withI18nextSSR(".concat(U(e),")"),t.WrappedComponent=e,t}}var fe=function(){return""},pe=function(){return""},de=function(){return""},ye=function(){return""},ge=function(){return""},me=function(){return""}},71739:e=>{e.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}},15671:(e,t,n)=>{"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,{Z:()=>r})},43144:(e,t,n)=>{"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,{Z:()=>o})},4942:(e,t,n)=>{"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:()=>r})},98152:(e,t,n)=>{"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,{Z:()=>o})},71002:(e,t,n)=>{"use strict";function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}n.d(t,{Z:()=>r})}}]);
//# sourceMappingURL=7106.6396810e.js.map