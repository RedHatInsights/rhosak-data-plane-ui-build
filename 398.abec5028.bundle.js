(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[398],{8670:(e,t,n)=>{"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,{Z:()=>r})},3816:(e,t,n)=>{"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,{Z:()=>o})},7811:(e,t,n)=>{"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:()=>r})},8719:(e,t,n)=>{"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,{Z:()=>r})},7725:(e,t,n)=>{e.exports={parse:n(3039),stringify:n(1320)}},8073:(e,t,n)=>{var r=/([\w-]+)|=|(['"])([.\s\S]*?)\2/g,o=n(1739);e.exports=function(e){var t,n=0,i=!0,a={type:"tag",name:"",voidElement:!1,attrs:{},children:[]};return e.replace(r,(function(r){if("="===r)return i=!0,void n++;i?0===n?((o[r]||"/"===e.charAt(e.length-2))&&(a.voidElement=!0),a.name=r):(a.attrs[t]=r.replace(/^['"]|['"]$/g,""),t=void 0):(t&&(a.attrs[t]=t),t=r),n++,i=!1})),a}},3039:(e,t,n)=>{var r=/(?:<!--[\S\s]*?-->|<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>)/g,o=n(8073),i=Object.create?Object.create(null):{};function a(e,t,n,r,o){var i=t.indexOf("<",r),a=t.slice(r,-1===i?void 0:i);/^\s*$/.test(a)&&(a=" "),(!o&&i>-1&&n+e.length>=0||" "!==a)&&e.push({type:"text",content:a})}e.exports=function(e,t){t||(t={}),t.components||(t.components=i);var n,c=[],s=-1,u=[],l={},f=!1;return e.replace(r,(function(r,i){if(f){if(r!=="</"+n.name+">")return;f=!1}var p,d="/"!==r.charAt(1),y=0===r.indexOf("\x3c!--"),g=i+r.length,b=e.charAt(g);d&&!y&&(s++,"tag"===(n=o(r)).type&&t.components[n.name]&&(n.type="component",f=!0),n.voidElement||f||!b||"<"===b||a(n.children,e,s,g,t.ignoreWhitespace),l[n.tagName]=n,0===s&&c.push(n),(p=u[s-1])&&p.children.push(n),u[s]=n),(y||!d||n.voidElement)&&(y||s--,!f&&"<"!==b&&b&&a(p=-1===s?c:u[s].children,e,s,g,t.ignoreWhitespace))})),!c.length&&e.length&&a(c,e,0,0,t.ignoreWhitespace),c}},1320:e=>{function t(e,n){switch(n.type){case"text":return e+n.content;case"tag":return e+="<"+n.name+(n.attrs?function(e){var t=[];for(var n in e)t.push(n+'="'+e[n]+'"');return t.length?" "+t.join(" "):""}(n.attrs):"")+(n.voidElement?"/>":">"),n.voidElement?e:e+n.children.reduce(t,"")+"</"+n.name+">"}}e.exports=function(e){return e.reduce((function(e,n){return e+t("",n)}),"")}},5747:(e,t,n)=>{"use strict";n.r(t),n.d(t,{I18nContext:()=>m,I18nextProvider:()=>_,Trans:()=>B,Translation:()=>Y,composeInitialProps:()=>S,getDefaults:()=>v,getI18n:()=>w,getInitialProps:()=>E,initReactI18next:()=>P,setDefaults:()=>h,setI18n:()=>j,useSSR:()=>q,useTranslation:()=>H,withSSR:()=>J,withTranslation:()=>M});var r=n(6843);function o(e,t){if(null==e)return{};var n,o,i=(0,r.Z)(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var i=n(8719),a=n(7811),c=n(7522),s=n.n(c),u=n(7725),l=n.n(u),f=n(8670),p=n(3816);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g,b={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0},m=s().createContext();function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};b=y(y({},b),e)}function v(){return b}var O=function(){function e(){(0,f.Z)(this,e),this.usedNamespaces={}}return(0,p.Z)(e,[{key:"addUsedNamespaces",value:function(e){var t=this;e.forEach((function(e){t.usedNamespaces[e]||(t.usedNamespaces[e]=!0)}))}},{key:"getUsedNamespaces",value:function(){return Object.keys(this.usedNamespaces)}}]),e}();function j(e){g=e}function w(){return g}var P={type:"3rdParty",init:function(e){h(e.options.react),j(e)}};function S(e){return function(t){return new Promise((function(n){var r=E();e.getInitialProps?e.getInitialProps(t).then((function(e){n(y(y({},e),r))})):n(r)}))}}function E(){var e=w(),t=e.reportNamespaces?e.reportNamespaces.getUsedNamespaces():[],n={},r={};return e.languages.forEach((function(n){r[n]={},t.forEach((function(t){r[n][t]=e.getResourceBundle(n,t)||{}}))})),n.initialI18nStore=r,n.initialLanguage=e.language,n}function k(){if(console&&console.warn){for(var e,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];"string"==typeof n[0]&&(n[0]="react-i18next:: ".concat(n[0])),(e=console).warn.apply(e,n)}}var x={};function N(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];"string"==typeof t[0]&&x[t[0]]||("string"==typeof t[0]&&(x[t[0]]=new Date),k.apply(void 0,t))}function I(e,t,n){e.loadNamespaces(t,(function(){e.isInitialized?n():e.on("initialized",(function t(){setTimeout((function(){e.off("initialized",t)}),0),n()}))}))}function D(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!t.languages||!t.languages.length)return N("i18n.languages were undefined or empty",t.languages),!0;var r=t.languages[0],o=!!t.options&&t.options.fallbackLng,i=t.languages[t.languages.length-1];if("cimode"===r.toLowerCase())return!0;var a=function(e,n){var r=t.services.backendConnector.state["".concat(e,"|").concat(n)];return-1===r||2===r};return!(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!a(t.isLanguageChangingTo,e)||!t.hasResourceBundle(r,e)&&t.services.backendConnector.backend&&(!a(r,e)||o&&!a(i,e)))}function C(e){return e.displayName||e.name||("string"==typeof e&&e.length>0?e:"Unknown")}function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function A(e,t){if(!e)return!1;var n=e.props?e.props.children:e.children;return t?n.length>0:!!n}function T(e){return e?e&&e.children?e.children:e.props&&e.props.children:[]}function L(e){return Array.isArray(e)?e:[e]}function z(e,t){if(!e)return"";var n="",r=L(e),a=t.transKeepBasicHtmlNodesFor||[];return r.forEach((function(e,r){if("string"==typeof e)n+="".concat(e);else if(s().isValidElement(e)){var c=Object.keys(e.props).length,u=a.indexOf(e.type)>-1,l=e.props.children;if(!l&&u&&0===c)n+="<".concat(e.type,"/>");else if(l||u&&0===c)if(e.props.i18nIsDynamicList)n+="<".concat(r,"></").concat(r,">");else if(u&&1===c&&"string"==typeof l)n+="<".concat(e.type,">").concat(l,"</").concat(e.type,">");else{var f=z(l,t);n+="<".concat(r,">").concat(f,"</").concat(r,">")}else n+="<".concat(r,"></").concat(r,">")}else if("object"===(0,i.Z)(e)){var p=e.format,d=o(e,["format"]),y=Object.keys(d);if(1===y.length){var g=p?"".concat(y[0],", ").concat(p):y[0];n+="{{".concat(g,"}}")}else k("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",e)}else k("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",e)})),n}function B(e){var t=e.children,n=e.count,r=e.parent,a=e.i18nKey,u=e.tOptions,f=void 0===u?{}:u,p=e.values,d=e.defaults,y=e.components,g=e.ns,b=e.i18n,h=e.t,O=o(e,["children","count","parent","i18nKey","tOptions","values","defaults","components","ns","i18n","t"]),j=(0,c.useContext)(m)||{},P=j.i18n,S=j.defaultNS,E=b||P||w();if(!E)return N("You will need to pass in an i18next instance by using i18nextReactModule"),t;var k=h||E.t.bind(E)||function(e){return e},x=Z(Z({},v()),E.options&&E.options.react),I=g||k.ns||S||E.options&&E.options.defaultNS;I="string"==typeof I?[I]:I||["translation"];var D=d||z(t,x)||x.transEmptyNodeValue||a,C=x.hashTransKey,R=a||(C?C(D):D),B=p?f.interpolation:{interpolation:Z(Z({},f.interpolation),{},{prefix:"#$?",suffix:"?$#"})},U=Z(Z(Z(Z({},f),{},{count:n},p),B),{},{defaultValue:D,ns:I}),V=function(e,t,n,r,o){if(""===t)return[];var a=r.transKeepBasicHtmlNodesFor||[],c=t&&new RegExp(a.join("|")).test(t);if(!e&&!c)return[t];var u={};!function e(t){L(t).forEach((function(t){"string"!=typeof t&&(A(t)?e(T(t)):"object"!==(0,i.Z)(t)||s().isValidElement(t)||Object.assign(u,t))}))}(e);var f=n.services.interpolator.interpolate(t,Z(Z({},u),o),n.language),p=l().parse("<0>".concat(f,"</0>"));function d(e,t,n){var r=T(e),o=g(r,t.children,n);return function(e){return"[object Array]"===Object.prototype.toString.call(e)&&e.every((function(e){return s().isValidElement(e)}))}(r)&&0===o.length?r:o}function y(e,t,n,r,o){e.dummy&&(e.children=t),n.push(s().cloneElement(e,Z(Z({},e.props),{},{key:r}),o?void 0:t))}function g(t,n,o){var u=L(t);return L(n).reduce((function(t,n,l){var f,p,b,m=n.children&&n.children[0]&&n.children[0].content;if("tag"===n.type){var h=u[parseInt(n.name,10)];!h&&1===o.length&&o[0][n.name]&&(h=o[0][n.name]),h||(h={});var v=0!==Object.keys(n.attrs).length?(f={props:n.attrs},(b=Z({},p=h)).props=Object.assign(f.props,p.props),b):h,O=s().isValidElement(v),j=O&&A(n,!0)&&!n.voidElement,w=c&&"object"===(0,i.Z)(v)&&v.dummy&&!O,P="object"===(0,i.Z)(e)&&null!==e&&Object.hasOwnProperty.call(e,n.name);if("string"==typeof v)t.push(v);else if(A(v)||j)y(v,d(v,n,o),t,l);else if(w){var S=g(u,n.children,o);t.push(s().cloneElement(v,Z(Z({},v.props),{},{key:l}),S))}else if(Number.isNaN(parseFloat(n.name)))if(P)y(v,d(v,n,o),t,l,n.voidElement);else if(r.transSupportBasicHtmlNodes&&a.indexOf(n.name)>-1)if(n.voidElement)t.push(s().createElement(n.name,{key:"".concat(n.name,"-").concat(l)}));else{var E=g(u,n.children,o);t.push(s().createElement(n.name,{key:"".concat(n.name,"-").concat(l)},E))}else if(n.voidElement)t.push("<".concat(n.name," />"));else{var k=g(u,n.children,o);t.push("<".concat(n.name,">").concat(k,"</").concat(n.name,">"))}else if("object"!==(0,i.Z)(v)||O)1===n.children.length&&m?t.push(s().cloneElement(v,Z(Z({},v.props),{},{key:l}),m)):t.push(s().cloneElement(v,Z(Z({},v.props),{},{key:l})));else{var x=n.children[0]?m:null;x&&t.push(x)}}else"text"===n.type&&t.push(n.content);return t}),[])}return T(g([{dummy:!0,children:e}],p,L(e||[]))[0])}(y||t,R?k(R,U):D,E,x,U),K=void 0!==r?r:x.defaultTransParent;return K?s().createElement(K,O,V):V}function U(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function V(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return U(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?U(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function K(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?K(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function H(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.i18n,r=(0,c.useContext)(m)||{},o=r.i18n,i=r.defaultNS,a=n||o||w();if(a&&!a.reportNamespaces&&(a.reportNamespaces=new O),!a){N("You will need to pass in an i18next instance by using initReactI18next");var s=function(e){return Array.isArray(e)?e[e.length-1]:e},u=[s,{},!1];return u.t=s,u.i18n={},u.ready=!1,u}a.options.react&&void 0!==a.options.react.wait&&N("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var l=F(F(F({},v()),a.options.react),t),f=l.useSuspense,p=e||i||a.options&&a.options.defaultNS;p="string"==typeof p?[p]:p||["translation"],a.reportNamespaces.addUsedNamespaces&&a.reportNamespaces.addUsedNamespaces(p);var d=(a.isInitialized||a.initializedStoreOnce)&&p.every((function(e){return D(e,a,l)}));function y(){return{t:a.getFixedT(null,"fallback"===l.nsMode?p:p[0])}}var g=(0,c.useState)(y()),b=V(g,2),h=b[0],j=b[1],P=(0,c.useRef)(!0);(0,c.useEffect)((function(){var e=l.bindI18n,t=l.bindI18nStore;function n(){P.current&&j(y())}return P.current=!0,d||f||I(a,p,(function(){P.current&&j(y())})),e&&a&&a.on(e,n),t&&a&&a.store.on(t,n),function(){P.current=!1,e&&a&&e.split(" ").forEach((function(e){return a.off(e,n)})),t&&a&&t.split(" ").forEach((function(e){return a.store.off(e,n)}))}}),[p.join()]);var S=[h.t,a,d];if(S.t=h.t,S.i18n=a,S.ready=d,d)return S;if(!d&&!f)return S;throw new Promise((function(e){I(a,p,(function(){e()}))}))}function W(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function $(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?W(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function M(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(n){function r(r){var i=r.forwardedRef,a=o(r,["forwardedRef"]),c=V(H(e,a),3),u=c[0],l=c[1],f=c[2],p=$($({},a),{},{t:u,i18n:l,tReady:f});return t.withRef&&i?p.ref=i:!t.withRef&&i&&(p.forwardedRef=i),s().createElement(n,p)}return r.displayName="withI18nextTranslation(".concat(C(n),")"),r.WrappedComponent=n,t.withRef?s().forwardRef((function(e,t){return s().createElement(r,Object.assign({},e,{forwardedRef:t}))})):r}}function Y(e){var t=e.ns,n=e.children,r=V(H(t,o(e,["ns","children"])),3),i=r[0],a=r[1],c=r[2];return n(i,{i18n:a,lng:a.language},c)}function _(e){var t=e.i18n,n=e.defaultNS,r=e.children,o=(0,c.useMemo)((function(){return{i18n:t,defaultNS:n}}),[t,n]);return(0,c.createElement)(m.Provider,{value:o},r)}function q(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.i18n,o=(0,c.useContext)(m)||{},i=o.i18n,a=r||i||w();a.options&&a.options.isClone||(e&&!a.initializedStoreOnce&&(a.services.resourceStore.data=e,a.options.ns=Object.values(e).reduce((function(e,t){return Object.keys(t).forEach((function(t){e.indexOf(t)<0&&e.push(t)})),e}),a.options.ns),a.initializedStoreOnce=!0,a.isInitialized=!0),t&&!a.initializedLanguageOnce&&(a.changeLanguage(t),a.initializedLanguageOnce=!0))}function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function J(){return function(e){function t(t){var n=t.initialI18nStore,r=t.initialLanguage,i=o(t,["initialI18nStore","initialLanguage"]);return q(n,r),s().createElement(e,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},i))}return t.getInitialProps=S(e),t.displayName="withI18nextSSR(".concat(C(e),")"),t.WrappedComponent=e,t}}},1739:e=>{e.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,menuitem:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}}}]);
//# sourceMappingURL=398.abec5028.bundle.js.map