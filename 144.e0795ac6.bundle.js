(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[144],{3144:(e,n,t)=>{"use strict";function r(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.r(n),t.d(n,{I18nContext:()=>j,I18nextProvider:()=>te,Trans:()=>M,Translation:()=>ne,composeInitialProps:()=>N,date:()=>ce,getDefaults:()=>P,getI18n:()=>x,getInitialProps:()=>I,initReactI18next:()=>k,number:()=>ue,plural:()=>fe,select:()=>le,selectOrdinal:()=>pe,setDefaults:()=>w,setI18n:()=>S,time:()=>se,useSSR:()=>re,useTranslation:()=>q,withSSR:()=>ae,withTranslation:()=>X});var a=t(97522),c=t.n(a),s=t(71739),u=t.n(s),l=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function f(e){var n={type:"tag",name:"",voidElement:!1,attrs:{},children:[]},t=e.match(/<\/?([^\s]+?)[/\s>]/);if(t&&(n.name=t[1],(u()[t[1]]||"/"===e.charAt(e.length-2))&&(n.voidElement=!0),n.name.startsWith("!--"))){var r=e.indexOf("--\x3e");return{type:"comment",comment:-1!==r?e.slice(4,r):""}}for(var o=new RegExp(l),i=null;null!==(i=o.exec(e));)if(i[0].trim())if(i[1]){var a=i[1].trim(),c=[a,""];a.indexOf("=")>-1&&(c=a.split("=")),n.attrs[c[0]]=c[1],o.lastIndex--}else i[2]&&(n.attrs[i[2]]=i[3].trim().substring(1,i[3].length-1));return n}var p=/<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,d=/^\s*$/,y=Object.create(null);const g=function(e,n){n||(n={}),n.components||(n.components=y);var t,r=[],o=[],i=-1,a=!1;if(0!==e.indexOf("<")){var c=e.indexOf("<");r.push({type:"text",content:-1===c?e:e.substring(0,c)})}return e.replace(p,(function(c,s){if(a){if(c!=="</"+t.name+">")return;a=!1}var u,l="/"!==c.charAt(1),p=c.startsWith("\x3c!--"),y=s+c.length,g=e.charAt(y);if(p){var m=f(c);return i<0?(r.push(m),r):((u=o[i]).children.push(m),r)}if(l&&(i++,"tag"===(t=f(c)).type&&n.components[t.name]&&(t.type="component",a=!0),t.voidElement||a||!g||"<"===g||t.children.push({type:"text",content:e.slice(y,e.indexOf("<",y))}),0===i&&r.push(t),(u=o[i-1])&&u.children.push(t),o[i]=t),(!l||t.voidElement)&&(i>-1&&(t.voidElement||t.name===c.slice(2,-1))&&(i--,t=-1===i?r:o[i]),!a&&"<"!==g&&g)){u=-1===i?r:o[i].children;var b=e.indexOf("<",y),h=e.slice(y,-1===b?void 0:b);d.test(h)&&(h=" "),(b>-1&&i+u.length>=0||" "!==h)&&u.push({type:"text",content:h})}})),r};function m(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function h(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?b(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var v,O={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0},j=c().createContext();function w(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};O=h(h({},O),e)}function P(){return O}var E=function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.usedNamespaces={}}var n,t;return n=e,(t=[{key:"addUsedNamespaces",value:function(e){var n=this;e.forEach((function(e){n.usedNamespaces[e]||(n.usedNamespaces[e]=!0)}))}},{key:"getUsedNamespaces",value:function(){return Object.keys(this.usedNamespaces)}}])&&m(n.prototype,t),e}();function S(e){v=e}function x(){return v}var k={type:"3rdParty",init:function(e){w(e.options.react),S(e)}};function N(e){return function(n){return new Promise((function(t){var r=I();e.getInitialProps?e.getInitialProps(n).then((function(e){t(h(h({},e),r))})):t(r)}))}}function I(){var e=x(),n=e.reportNamespaces?e.reportNamespaces.getUsedNamespaces():[],t={},r={};return e.languages.forEach((function(t){r[t]={},n.forEach((function(n){r[t][n]=e.getResourceBundle(t,n)||{}}))})),t.initialI18nStore=r,t.initialLanguage=e.language,t}function D(){if(console&&console.warn){for(var e,n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];"string"==typeof t[0]&&(t[0]="react-i18next:: ".concat(t[0])),(e=console).warn.apply(e,t)}}var R={};function C(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];"string"==typeof n[0]&&R[n[0]]||("string"==typeof n[0]&&(R[n[0]]=new Date),D.apply(void 0,n))}function A(e,n,t){e.loadNamespaces(n,(function(){e.isInitialized?t():e.on("initialized",(function n(){setTimeout((function(){e.off("initialized",n)}),0),t()}))}))}function T(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!n.languages||!n.languages.length)return C("i18n.languages were undefined or empty",n.languages),!0;var r=n.languages[0],o=!!n.options&&n.options.fallbackLng,i=n.languages[n.languages.length-1];if("cimode"===r.toLowerCase())return!0;var a=function(e,t){var r=n.services.backendConnector.state["".concat(e,"|").concat(t)];return-1===r||2===r};return!(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!a(n.isLanguageChangingTo,e)||!n.hasResourceBundle(r,e)&&n.services.backendConnector.backend&&(!a(r,e)||o&&!a(i,e)))}function z(e){return e.displayName||e.name||("string"==typeof e&&e.length>0?e:"Unknown")}var L=["format"],B=["children","count","parent","i18nKey","tOptions","values","defaults","components","ns","i18n","t"];function U(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function V(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?U(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):U(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function K(e,n){if(!e)return!1;var t=e.props?e.props.children:e.children;return n?t.length>0:!!t}function W(e){return e?e&&e.children?e.children:e.props&&e.props.children:[]}function F(e){return Array.isArray(e)?e:[e]}function H(e,n){if(!e)return"";var t="",i=F(e),a=n.transKeepBasicHtmlNodesFor||[];return i.forEach((function(e,i){if("string"==typeof e)t+="".concat(e);else if(c().isValidElement(e)){var s=Object.keys(e.props).length,u=a.indexOf(e.type)>-1,l=e.props.children;if(!l&&u&&0===s)t+="<".concat(e.type,"/>");else if(l||u&&0===s)if(e.props.i18nIsDynamicList)t+="<".concat(i,"></").concat(i,">");else if(u&&1===s&&"string"==typeof l)t+="<".concat(e.type,">").concat(l,"</").concat(e.type,">");else{var f=H(l,n);t+="<".concat(i,">").concat(f,"</").concat(i,">")}else t+="<".concat(i,"></").concat(i,">")}else if(null===e)D("Trans: the passed in value is invalid - seems you passed in a null child.");else if("object"===o(e)){var p=e.format,d=r(e,L),y=Object.keys(d);if(1===y.length){var g=p?"".concat(y[0],", ").concat(p):y[0];t+="{{".concat(g,"}}")}else D("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.",e)}else D("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.",e)})),t}function M(e){var n=e.children,t=e.count,i=e.parent,s=e.i18nKey,u=e.tOptions,l=void 0===u?{}:u,f=e.values,p=e.defaults,d=e.components,y=e.ns,m=e.i18n,b=e.t,h=r(e,B),v=(0,a.useContext)(j)||{},O=v.i18n,w=v.defaultNS,E=m||O||x();if(!E)return C("You will need to pass in an i18next instance by using i18nextReactModule"),n;var S=b||E.t.bind(E)||function(e){return e},k=V(V({},P()),E.options&&E.options.react),N=y||S.ns||w||E.options&&E.options.defaultNS;N="string"==typeof N?[N]:N||["translation"];var I=p||H(n,k)||k.transEmptyNodeValue||s,D=k.hashTransKey,R=s||(D?D(I):I),A=f?l.interpolation:{interpolation:V(V({},l.interpolation),{},{prefix:"#$?",suffix:"?$#"})},T=V(V(V(V({},l),{},{count:t},f),A),{},{defaultValue:I,ns:N}),z=function(e,n,t,r,i){if(""===n)return[];var a=r.transKeepBasicHtmlNodesFor||[],s=n&&new RegExp(a.join("|")).test(n);if(!e&&!s)return[n];var u={};!function e(n){F(n).forEach((function(n){"string"!=typeof n&&(K(n)?e(W(n)):"object"!==o(n)||c().isValidElement(n)||Object.assign(u,n))}))}(e);var l=t.services.interpolator.interpolate(n,V(V({},u),i),t.language),f=g("<0>".concat(l,"</0>"));function p(e,n,t){var r=W(e),o=y(r,n.children,t);return function(e){return"[object Array]"===Object.prototype.toString.call(e)&&e.every((function(e){return c().isValidElement(e)}))}(r)&&0===o.length?r:o}function d(e,n,t,r,o){e.dummy&&(e.children=n),t.push(c().cloneElement(e,V(V({},e.props),{},{key:r}),o?void 0:n))}function y(n,t,i){var u=F(n);return F(t).reduce((function(n,t,l){var f,g,m,b=t.children&&t.children[0]&&t.children[0].content;if("tag"===t.type){var h=u[parseInt(t.name,10)];!h&&1===i.length&&i[0][t.name]&&(h=i[0][t.name]),h||(h={});var v=0!==Object.keys(t.attrs).length?(f={props:t.attrs},(m=V({},g=h)).props=Object.assign(f.props,g.props),m):h,O=c().isValidElement(v),j=O&&K(t,!0)&&!t.voidElement,w=s&&"object"===o(v)&&v.dummy&&!O,P="object"===o(e)&&null!==e&&Object.hasOwnProperty.call(e,t.name);if("string"==typeof v)n.push(v);else if(K(v)||j)d(v,p(v,t,i),n,l);else if(w){var E=y(u,t.children,i);n.push(c().cloneElement(v,V(V({},v.props),{},{key:l}),E))}else if(Number.isNaN(parseFloat(t.name)))if(P)d(v,p(v,t,i),n,l,t.voidElement);else if(r.transSupportBasicHtmlNodes&&a.indexOf(t.name)>-1)if(t.voidElement)n.push(c().createElement(t.name,{key:"".concat(t.name,"-").concat(l)}));else{var S=y(u,t.children,i);n.push(c().createElement(t.name,{key:"".concat(t.name,"-").concat(l)},S))}else if(t.voidElement)n.push("<".concat(t.name," />"));else{var x=y(u,t.children,i);n.push("<".concat(t.name,">").concat(x,"</").concat(t.name,">"))}else if("object"!==o(v)||O)1===t.children.length&&b?n.push(c().cloneElement(v,V(V({},v.props),{},{key:l}),b)):n.push(c().cloneElement(v,V(V({},v.props),{},{key:l})));else{var k=t.children[0]?b:null;k&&n.push(k)}}else if("text"===t.type){var N=r.transWrapTextNodes;N?n.push(c().createElement(N,{key:"".concat(t.name,"-").concat(l)},t.content)):n.push(t.content)}return n}),[])}return W(y([{dummy:!0,children:e}],f,F(e||[]))[0])}(d||n,R?S(R,T):I,E,k,T),L=void 0!==i?i:k.defaultTransParent;return L?c().createElement(L,h,z):z}function $(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function Y(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,i=[],a=!0,c=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);a=!0);}catch(e){c=!0,o=e}finally{try{a||null==t.return||t.return()}finally{if(c)throw o}}return i}}(e,n)||function(e,n){if(e){if("string"==typeof e)return $(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?$(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function Z(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?_(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):_(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function q(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.i18n,r=(0,a.useContext)(j)||{},o=r.i18n,i=r.defaultNS,c=t||o||x();if(c&&!c.reportNamespaces&&(c.reportNamespaces=new E),!c){C("You will need to pass in an i18next instance by using initReactI18next");var s=function(e){return Array.isArray(e)?e[e.length-1]:e},u=[s,{},!1];return u.t=s,u.i18n={},u.ready=!1,u}c.options.react&&void 0!==c.options.react.wait&&C("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var l=Z(Z(Z({},P()),c.options.react),n),f=l.useSuspense,p=e||i||c.options&&c.options.defaultNS;p="string"==typeof p?[p]:p||["translation"],c.reportNamespaces.addUsedNamespaces&&c.reportNamespaces.addUsedNamespaces(p);var d=(c.isInitialized||c.initializedStoreOnce)&&p.every((function(e){return T(e,c,l)}));function y(){return c.getFixedT(null,"fallback"===l.nsMode?p:p[0])}var g=(0,a.useState)(y),m=Y(g,2),b=m[0],h=m[1],v=(0,a.useRef)(!0);(0,a.useEffect)((function(){var e=l.bindI18n,n=l.bindI18nStore;function t(){v.current&&h(y)}return v.current=!0,d||f||A(c,p,(function(){v.current&&h(y)})),e&&c&&c.on(e,t),n&&c&&c.store.on(n,t),function(){v.current=!1,e&&c&&e.split(" ").forEach((function(e){return c.off(e,t)})),n&&c&&n.split(" ").forEach((function(e){return c.store.off(e,t)}))}}),[c,p.join()]);var O=(0,a.useRef)(!0);(0,a.useEffect)((function(){v.current&&!O.current&&h(y),O.current=!1}),[c]);var w=[b,c,d];if(w.t=b,w.i18n=c,w.ready=d,d)return w;if(!d&&!f)return w;throw new Promise((function(e){A(c,p,(function(){e()}))}))}var G=["forwardedRef"];function J(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function Q(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?J(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):J(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function X(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(t){function o(o){var i=o.forwardedRef,a=r(o,G),s=Y(q(e,a),3),u=s[0],l=s[1],f=s[2],p=Q(Q({},a),{},{t:u,i18n:l,tReady:f});return n.withRef&&i?p.ref=i:!n.withRef&&i&&(p.forwardedRef=i),c().createElement(t,p)}return o.displayName="withI18nextTranslation(".concat(z(t),")"),o.WrappedComponent=t,n.withRef?c().forwardRef((function(e,n){return c().createElement(o,Object.assign({},e,{forwardedRef:n}))})):o}}var ee=["ns","children"];function ne(e){var n=e.ns,t=e.children,o=Y(q(n,r(e,ee)),3),i=o[0],a=o[1],c=o[2];return t(i,{i18n:a,lng:a.language},c)}function te(e){var n=e.i18n,t=e.defaultNS,r=e.children,o=(0,a.useMemo)((function(){return{i18n:n,defaultNS:t}}),[n,t]);return(0,a.createElement)(j.Provider,{value:o},r)}function re(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=t.i18n,o=(0,a.useContext)(j)||{},i=o.i18n,c=r||i||x();c.options&&c.options.isClone||(e&&!c.initializedStoreOnce&&(c.services.resourceStore.data=e,c.options.ns=Object.values(e).reduce((function(e,n){return Object.keys(n).forEach((function(n){e.indexOf(n)<0&&e.push(n)})),e}),c.options.ns),c.initializedStoreOnce=!0,c.isInitialized=!0),n&&!c.initializedLanguageOnce&&(c.changeLanguage(n),c.initializedLanguageOnce=!0))}var oe=["initialI18nStore","initialLanguage"];function ie(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function ae(){return function(e){function n(n){var t=n.initialI18nStore,o=n.initialLanguage,a=r(n,oe);return re(t,o),c().createElement(e,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ie(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ie(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},a))}return n.getInitialProps=N(e),n.displayName="withI18nextSSR(".concat(z(e),")"),n.WrappedComponent=e,n}}var ce=function(){return""},se=function(){return""},ue=function(){return""},le=function(){return""},fe=function(){return""},pe=function(){return""}},71739:e=>{e.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}}}]);
//# sourceMappingURL=144.e0795ac6.bundle.js.map