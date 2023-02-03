/*! For license information please see 6291.fdda07c3.js.LICENSE.txt */
"use strict";(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[6291,5893],{35183:(e,t,r)=>{t.IU=t.ap=t.Jh=void 0;const n=r(87967),a=n.__importStar(r(93264));var i;!function(e){e.sm="sm",e.md="md",e.lg="lg",e.xl="xl"}(i=t.Jh||(t.Jh={}));t.ap=e=>{switch(e){case i.sm:return"1em";case i.md:return"1.5em";case i.lg:return"2em";case i.xl:return"3em";default:return"1em"}};let o=0;t.IU=function({name:e,xOffset:r=0,yOffset:l=0,width:s,height:c,svgPath:f}){var u;return(u=class extends a.Component{constructor(){super(...arguments),this.id="icon-title-"+o++}render(){const e=this.props,{size:i,color:o,title:u,noVerticalAlign:p}=e,d=n.__rest(e,["size","color","title","noVerticalAlign"]),m=Boolean(u),h=(0,t.ap)(i),k=-.125*Number.parseFloat(h),g=p?null:{verticalAlign:`${k}em`},v=[r,l,s,c].join(" ");return a.createElement("svg",Object.assign({style:g,fill:o,height:h,width:h,viewBox:v,"aria-labelledby":m?this.id:null,"aria-hidden":!m||null,role:"img"},d),m&&a.createElement("title",{id:this.id},u),a.createElement("path",{d:f}))}}).displayName=e,u.defaultProps={color:"currentColor",size:i.sm,noVerticalAlign:!1},u}},27418:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,i){for(var o,l,s=a(e),c=1;c<arguments.length;c++){for(var f in o=Object(arguments[c]))r.call(o,f)&&(s[f]=o[f]);if(t){l=t(o);for(var u=0;u<l.length;u++)n.call(o,l[u])&&(s[l[u]]=o[l[u]])}}return s}},75251:(e,t,r)=>{r(27418);var n=r(93264),a=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;a=i("react.element"),t.Fragment=i("react.fragment")}var o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var n,i={},c=null,f=null;for(n in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(f=t.ref),t)l.call(t,n)&&!s.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:a,type:e,key:c,ref:f,props:i,_owner:o.current}}t.jsx=c,t.jsxs=c},85893:(e,t,r)=>{e.exports=r(75251)},3654:(e,t,r)=>{r.d(t,{E:()=>a});var n=r(93264);const a=r.n(n)().createContext(void 0)},64517:(e,t,r)=>{r.d(t,{J:()=>a,S:()=>i});var n=r(93264);const a=r.n(n)().createContext(void 0),i=()=>(0,n.useContext)(a)},77388:(e,t,r)=>{r.r(t),r.d(t,{default:()=>s});var n=r(85893),a=r(29299),i=r(3654),o=r(64517),l=r(2954);const s=({getToken:e,apiBasePath:t,kafkaName:r,kafkaPageLink:s,kafkaInstanceLink:c,kafka:f})=>{const{replication_factor:u,min_in_sync_replicas:p}=(null==f?void 0:f.size)||{};return(0,n.jsx)(i.E.Provider,Object.assign({value:{basePath:t,getToken:e}},{children:(0,n.jsx)(o.J.Provider,Object.assign({value:{kafkaName:r,kafkaPageLink:s,kafkaInstanceLink:c,kafka:{},replicationFactor:u,minInSyncReplicas:p,isMultiAZ:null==f?void 0:f.multi_az}},{children:(0,n.jsx)(l.ModalProvider,{children:(0,n.jsx)(a.e,{})})}))}))}}}]);
//# sourceMappingURL=6291.fdda07c3.js.map