/*! For license information please see 4841.c402fc57.js.LICENSE.txt */
"use strict";(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[4841,5183],{35183:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createIcon=t.getSize=t.IconSize=void 0;const a=n(223),o=a.__importStar(n(45052));var s;!function(e){e.sm="sm",e.md="md",e.lg="lg",e.xl="xl"}(s=t.IconSize||(t.IconSize={}));t.getSize=e=>{switch(e){case s.sm:return"1em";case s.md:return"1.5em";case s.lg:return"2em";case s.xl:return"3em";default:return"1em"}};let i=0;t.createIcon=function({name:e,xOffset:n=0,yOffset:r=0,width:l,height:c,svgPath:d}){var u;return u=class extends o.Component{constructor(){super(...arguments),this.id="icon-title-"+i++}render(){const e=this.props,{size:s,color:i,title:u,noVerticalAlign:p}=e,v=a.__rest(e,["size","color","title","noVerticalAlign"]),m=Boolean(u),g=t.getSize(s),h=-.125*Number.parseFloat(g),f=p?null:{verticalAlign:`${h}em`},y=[n,r,l,c].join(" ");return o.createElement("svg",Object.assign({style:f,fill:i,height:g,width:g,viewBox:y,"aria-labelledby":m?this.id:null,"aria-hidden":!m||null,role:"img"},v),m&&o.createElement("title",{id:this.id},u),o.createElement("path",{d}))}},u.displayName=e,u.defaultProps={color:"currentColor",size:s.sm,noVerticalAlign:!1},u}},96733:(e,t,n)=>{t.Z1={name:"CubesIcon",height:512,width:512,svgPath:"M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z",yOffset:0,xOffset:0},t.TF=n(35183).createIcon(t.Z1),t.ZP=t.TF},20777:(e,t,n)=>{t.lb={name:"PlusCircleIcon",height:512,width:512,svgPath:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z",yOffset:0,xOffset:0},t.wl=n(35183).createIcon(t.lb),t.ZP=t.wl},71070:(e,t,n)=>{t.xQ={name:"SearchIcon",height:512,width:512,svgPath:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z",yOffset:0,xOffset:0},t.W1=n(35183).createIcon(t.xQ),t.ZP=t.W1},75251:(e,t,n)=>{n(27418);var a=n(13400),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var s=Symbol.for;o=s("react.element"),t.Fragment=s("react.fragment")}var i=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,r=Object.prototype.hasOwnProperty,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var a,s={},c=null,d=null;for(a in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)r.call(t,a)&&!l.hasOwnProperty(a)&&(s[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===s[a]&&(s[a]=t[a]);return{$$typeof:o,type:e,key:c,ref:d,props:s,_owner:i.current}}t.jsx=c,t.jsxs=c},85893:(e,t,n)=>{e.exports=n(75251)},91070:(e,t,n)=>{n.d(t,{j:()=>a,u:()=>d});var a,o=n(223),s=n(85893),i=n(99421),r=n(20777),l=n(96733),c=n(71070);!function(e){e.NoConsumerGroups="NoConsumerGroups",e.NoResult="NoResult",e.NoItems="NoItems"}(a||(a={}));const d=({titleProps:e,buttonProps:t,emptyStateIconProps:n,emptyStateProps:d,emptyStateBodyProps:u,children:p})=>{const v=t||{},{variant:m=i.ButtonVariant.primary,onClick:g}=v,h=(0,o.__rest)(v,["variant","onClick"]),f=e||{},{title:y}=f,x=(0,o.__rest)(f,["title"]),b=u||{},{body:j}=b,C=(0,o.__rest)(b,["body"]),P=d||{},{variant:_=a.NoItems}=P,w=(0,o.__rest)(P,["variant"]),{variant:k,icon:S,size:z,headingLevel:O}=(()=>{let t={};switch(_){case a.NoConsumerGroups:t={variant:i.EmptyStateVariant.large,icon:l.ZP,size:i.TitleSizes.lg,headingLevel:"h2"};break;case a.NoItems:t={variant:i.EmptyStateVariant.large,icon:r.ZP,size:i.TitleSizes.lg,headingLevel:"h2"};break;case a.NoResult:t={variant:i.EmptyStateVariant.large,icon:c.ZP,size:i.TitleSizes.lg,headingLevel:"h2"};break;default:t={variant:_||i.EmptyStateVariant.full,icon:null==n?void 0:n.icon,size:null==e?void 0:e.size,headingLevel:(null==e?void 0:e.headingLevel)||"h1"}}return t})();return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(i.EmptyState,Object.assign({variant:k},w,{children:[(0,s.jsx)(i.EmptyStateIcon,Object.assign({icon:S},n)),y&&(0,s.jsx)(i.Title,Object.assign({headingLevel:O,size:z},x,{children:y})),j&&(0,s.jsx)(i.EmptyStateBody,Object.assign({},C,{children:j})),(null==t?void 0:t.title)&&(0,s.jsx)(i.Button,Object.assign({variant:m,onClick:g},h,{children:null==t?void 0:t.title})),p]}))})}},68640:(e,t,n)=>{n.d(t,{J:()=>l});var a=n(85893),o=n(75418),s=n.n(o),i=n(79528),r=n(7451);const l=()=>{const{registerModals:e}=(0,r.useModal)();return e((()=>{const{t:e}=(0,i.useTranslation)(["kafkaTemporaryFixMe"]);return{[r.ModalType.KafkaDeleteTopic]:{lazyComponent:s().lazy((()=>n.e(7290).then(n.bind(n,37290)))),variant:"small"},[r.ModalType.KafkaUpdatePartitions]:{lazyComponent:s().lazy((()=>n.e(1356).then(n.bind(n,21356)))),variant:"small"},[r.ModalType.KafkaDeleteConsumerGroup]:{lazyComponent:s().lazy((()=>n.e(2546).then(n.bind(n,12546)))),variant:"small"},[r.ModalType.KafkaConsumerGroupResetOffset]:{lazyComponent:s().lazy((()=>n.e(9537).then(n.bind(n,69537)))),variant:"large"},[r.ModalType.KafkaManagePermissions]:{lazyComponent:s().lazy((()=>Promise.all([n.e(3883),n.e(6429),n.e(6797),n.e(7454),n.e(1118)]).then(n.bind(n,21118)))),variant:"large",title:e("permission.manage_permissions_dialog.title")}}})()),(0,a.jsx)(a.Fragment,{})}},4055:(e,t,n)=>{n.d(t,{y:()=>s});var a=n(85893),o=n(99421);const s=({bullseyeProps:e,spinnerProps:t})=>(0,a.jsx)(o.Bullseye,Object.assign({},e,{children:(0,a.jsx)(o.Spinner,Object.assign({},t))}))},82639:(e,t,n)=>{n.d(t,{bN:()=>c,hI:()=>l,wu:()=>d});var a=n(223),o=n(85893),s=n(75418),i=n(99421);const r=(0,s.createContext)(void 0),l=()=>(0,s.useContext)(r),c=({children:e})=>{const[t,n]=(0,s.useState)(1),[a,i]=(0,s.useState)(10);return(0,o.jsx)(r.Provider,Object.assign({value:{page:t,perPage:a,setPage:n,setPerPage:i}},{children:e}))},d=e=>{var{itemCount:t,variant:n=i.PaginationVariant.top,isCompact:r,titles:c}=e,d=(0,a.__rest)(e,["itemCount","variant","isCompact","titles"]);const{setPage:u,setPerPage:p,perPage:v,page:m}=l()||{},g=(0,s.useCallback)(((e,t)=>{u&&u(t)}),[u]),h=(0,s.useCallback)(((e,t)=>{u&&u(1),p&&p(t)}),[u,p]);return(0,o.jsx)(i.Pagination,Object.assign({itemCount:t,perPage:v,page:m,onSetPage:g,variant:n,onPerPageSelect:h,isCompact:r},d,{titles:c}))}},3654:(e,t,n)=>{n.d(t,{E:()=>o});var a=n(75418);const o=n.n(a)().createContext(void 0)},63052:(e,t,n)=>{n.d(t,{K:()=>o});var a=n(75418);const o=(e,t)=>{const n=(0,a.useRef)();(0,a.useEffect)((()=>{n.current=e}),[e]),(0,a.useEffect)((()=>{if(null!==t){const e=setTimeout((function(){void 0!==n.current&&n.current()}),t);return()=>{clearInterval(e)}}}),[e,t])}},63850:(e,t,n)=>{n.d(t,{J:()=>x});var a=n(223),o=n(85893),s=n(75418),i=n(79528),r=n(99421),l=n(4055),c=n(48418),d=n(7451);const u=({onClose:e,isLoading:t=!1,drawerPanelContentProps:n,drawerHeaderProps:u,isExpanded:p,children:v,panelBodyContent:m,onExpand:g,notRequiredDrawerContentBackground:h,"data-ouia-app-id":f,inlineAlertMessage:y,refreshConsumerGroups:x,consumerGroupDetail:b})=>{const j=n||{},{widths:C}=j,P=(0,a.__rest)(j,["widths"]),{text:_,title:w}=u||{},{t:k}=(0,i.useTranslation)(["kafkaTemporaryFixMe"]),{showModal:S}=(0,d.useModal)(),{showModal:z}=(0,d.useModal)(),[O,T]=(0,s.useState)(),G=[(0,o.jsx)(r.DropdownItem,Object.assign({onClick:()=>{z(d.ModalType.KafkaConsumerGroupResetOffset,{refreshConsumerGroups:x,consumerGroupData:b})}},{children:k("consumerGroup.reset_offset")}),"reset offset"),(0,o.jsx)(r.DropdownItem,Object.assign({onClick:()=>{S(d.ModalType.KafkaDeleteConsumerGroup,{consumerName:(null==w?void 0:w.value)||"",refreshConsumerGroups:x}),e()}},{children:k("common.delete")}),"delete")],I=(0,o.jsx)(r.DrawerPanelContent,Object.assign({widths:C||{default:"width_50"}},P,{children:t?(0,o.jsx)(l.y,{}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.DrawerHead,{children:[(0,o.jsxs)(r.TextContent,{children:[(null==_?void 0:_.label)&&(0,o.jsx)(r.Text,Object.assign({component:(null==_?void 0:_.component)||r.TextVariants.small,className:(null==_?void 0:_.className)||"kafka-ui-mas-drawer__top-label"},{children:null==_?void 0:_.label})),(null==w?void 0:w.value)&&(0,o.jsx)(r.Title,Object.assign({headingLevel:(null==w?void 0:w.headingLevel)||"h2",size:(null==w?void 0:w.size)||r.TitleSizes.xl,className:(null==w?void 0:w.className)||"kafka-ui-mas-drawer__title"},{children:null==w?void 0:w.value}))]}),(0,o.jsxs)(r.DrawerActions,{children:[(0,o.jsx)(r.Dropdown,Object.assign({onSelect:()=>{T(!O)},toggle:(0,o.jsx)(r.KebabToggle,{onToggle:e=>{T(e)},id:"toggle-data-plane"}),isOpen:O,isPlain:!0,dropdownItems:G,position:r.DropdownPosition.right},{children:(0,o.jsx)(c.EllipsisVIcon,{})})),(0,o.jsx)(r.DrawerCloseButton,{onClick:e})]})]}),(0,o.jsxs)(r.DrawerPanelBody,{children:[y,m]})]})}));return(0,o.jsx)(r.Drawer,Object.assign({isExpanded:p,onExpand:g,"data-ouia-app-id":f},{children:(0,o.jsx)(r.DrawerContent,Object.assign({panelContent:I,className:h?"pf-m-no-background":""},{children:(0,o.jsx)(r.DrawerContentBody,Object.assign({className:"kafka-ui-mas-drawer__drawer-content-body"},{children:v}))}))}))};var p=n(82639),v=n(91070),m=n(10708),g=n(3654),h=n(63052);const f=(0,s.lazy)((()=>n.e(1639).then(n.bind(n,31639)))),y=(0,s.lazy)((()=>n.e(5460).then(n.bind(n,95460)))),x=({consumerGroupByTopic:e,topic:t,rowDataTestId:n})=>{const[c,d]=(0,s.useState)(0),[x,b]=(0,s.useState)(),[j,C]=(0,s.useState)(),[P,_]=(0,s.useState)({index:void 0,direction:"asc"}),[w,k]=(0,s.useState)(),[S,z]=(0,s.useState)(!1),[O,T]=(0,s.useState)(""),[G,I]=(0,s.useState)(),[E,D]=(0,s.useState)(),M=(0,s.useContext)(g.E),{t:N}=(0,i.useTranslation)(["kafkaTemporaryFixMe"]),{page:B=1,perPage:V=10}=(0,p.hI)()||{};(0,s.useEffect)((()=>{d(V*(B-1))}),[B,V]);const L=(e,t,n)=>{b(n),C("name"),_({index:t,direction:n})},F=(0,s.useCallback)((()=>(0,a.__awaiter)(void 0,void 0,void 0,(function*(){yield(0,m.e5)(M,c,100,V,B,t,O,x,j).then((e=>{k(e)}))}))),[M,c,x,j,B,V,O,t]);(0,s.useEffect)((()=>{F()}),[O,x,F]),(0,s.useEffect)((()=>{var e;const t=w&&(null===(e=w.items)||void 0===e?void 0:e.filter((e=>e.groupId===E)));t&&t.length>0&&I(t[0])}),[w,E]),(0,h.K)((()=>F()),5e3);const R=(0,o.jsx)(f,{consumerGroupDetail:G,consumerGroupByTopic:e}),A=e=>{z(!0),D(null==e?void 0:e.groupId),I(e)};return(0,o.jsx)(s.Suspense,Object.assign({fallback:(0,o.jsx)(l.y,{})},{children:(0,o.jsx)(u,Object.assign({isExpanded:S,onClose:()=>{z(!1)},panelBodyContent:R,drawerHeaderProps:{text:{label:N("consumerGroup.consumer_group_id")},title:{value:null==G?void 0:G.groupId,headingLevel:"h1"}},"data-ouia-app-id":"dataPlane-consumerGroupDetails",refreshConsumerGroups:F,consumerGroupDetail:G},{children:void 0===w?(0,o.jsx)(r.PageSection,Object.assign({className:"kafka-ui-m-full-height",variant:r.PageSectionVariants.light,padding:{default:"noPadding"}},{children:(0,o.jsx)(l.y,{})})):(!(null===(K=null==w?void 0:w.items)||void 0===K?void 0:K.length)||(null===(Z=null==w?void 0:w.items)||void 0===Z?void 0:Z.length)<1)&&O.length<1?(0,o.jsx)(v.u,{emptyStateProps:{variant:v.j.NoConsumerGroups},titleProps:{title:N("consumerGroup.empty_consumer_title")},emptyStateBodyProps:{body:N("consumerGroup.empty_consumer_body")}}):w?(0,o.jsx)(y,{consumerGroups:O?null===(H=null==w?void 0:w.items)||void 0===H?void 0:H.slice(0,V):null===(U=null==w?void 0:w.items)||void 0===U?void 0:U.slice((null==w?void 0:w.items.length)>1?c:0,c+V),total:(null===(W=null==w?void 0:w.items)||void 0===W?void 0:W.length)||0,page:B,perPage:V,search:O,setSearch:T,rowDataTestId:n,onViewConsumerGroup:A,isDrawerOpen:S,refreshConsumerGroups:F,consumerGroupByTopic:e,onSort:L,sortBy:P}):(0,o.jsx)(o.Fragment,{})}))}));var K,Z,H,U,W}},10708:(e,t,n)=>{n.d(t,{T3:()=>r,e5:()=>i,v:()=>l});var a=n(223),o=n(16560),s=n(57294);const i=(e,t,n,i,r,l,c,d=s.SortByDirection.asc,u)=>(0,a.__awaiter)(void 0,void 0,void 0,(function*(){const a=yield null==e?void 0:e.getToken(),s=new o.GroupsApi(new o.Configuration({accessToken:a,basePath:null==e?void 0:e.basePath}));return(yield s.getConsumerGroups(t,n,i,r,l,c,d,u)).data})),r=(e,t)=>(0,a.__awaiter)(void 0,void 0,void 0,(function*(){const n=yield null==t?void 0:t.getToken(),a=new o.GroupsApi(new o.Configuration({accessToken:n,basePath:null==t?void 0:t.basePath}));yield a.deleteConsumerGroupById(e)})),l=(e,t,n,s,i,r)=>(0,a.__awaiter)(void 0,void 0,void 0,(function*(){const a=yield null==e?void 0:e.getToken(),l=new o.GroupsApi(new o.Configuration({accessToken:a,basePath:null==e?void 0:e.basePath}));return yield l.resetConsumerGroupOffset(t,{value:r,offset:n,topics:[{topic:s,partitions:i}]})}))}}]);
//# sourceMappingURL=4841.c402fc57.js.map