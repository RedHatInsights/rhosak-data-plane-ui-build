"use strict";(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[5183],{35183:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createIcon=t.getSize=t.IconSize=void 0;const l=i(223),r=l.__importStar(i(45052));var n;!function(e){e.sm="sm",e.md="md",e.lg="lg",e.xl="xl"}(n=t.IconSize||(t.IconSize={}));t.getSize=e=>{switch(e){case n.sm:return"1em";case n.md:return"1.5em";case n.lg:return"2em";case n.xl:return"3em";default:return"1em"}};let s=0;t.createIcon=function({name:e,xOffset:i=0,yOffset:a=0,width:o,height:c,svgPath:u}){var m;return m=class extends r.Component{constructor(){super(...arguments),this.id="icon-title-"+s++}render(){const e=this.props,{size:n,color:s,title:m,noVerticalAlign:d}=e,h=l.__rest(e,["size","color","title","noVerticalAlign"]),g=Boolean(m),f=t.getSize(n),p=-.125*Number.parseFloat(f),z=d?null:{verticalAlign:`${p}em`},k=[i,a,o,c].join(" ");return r.createElement("svg",Object.assign({style:z,fill:s,height:f,width:f,viewBox:k,"aria-labelledby":g?this.id:null,"aria-hidden":!g||null,role:"img"},h),g&&r.createElement("title",{id:this.id},m),r.createElement("path",{d:u}))}},m.displayName=e,m.defaultProps={color:"currentColor",size:n.sm,noVerticalAlign:!1},m}}}]);
