/*! For license information please see 4841.0f13f55f.js.LICENSE.txt */
"use strict";(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[4841,5893],{35183:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createIcon=t.getSize=t.IconSize=void 0;const a=n(9922),o=a.__importStar(n(75418));var s;!function(e){e.sm="sm",e.md="md",e.lg="lg",e.xl="xl"}(s=t.IconSize||(t.IconSize={}));t.getSize=e=>{switch(e){case s.sm:return"1em";case s.md:return"1.5em";case s.lg:return"2em";case s.xl:return"3em";default:return"1em"}};let r=0;t.createIcon=function({name:e,xOffset:n=0,yOffset:i=0,width:l,height:c,svgPath:d}){var u;return u=class extends o.Component{constructor(){super(...arguments),this.id="icon-title-"+r++}render(){const e=this.props,{size:s,color:r,title:u,noVerticalAlign:p}=e,v=a.__rest(e,["size","color","title","noVerticalAlign"]),m=Boolean(u),g=t.getSize(s),h=-.125*Number.parseFloat(g),f=p?null:{verticalAlign:`${h}em`},y=[n,i,l,c].join(" ");return o.createElement("svg",Object.assign({style:f,fill:r,height:g,width:g,viewBox:y,"aria-labelledby":m?this.id:null,"aria-hidden":!m||null,role:"img"},v),m&&o.createElement("title",{id:this.id},u),o.createElement("path",{d}))}},u.displayName=e,u.defaultProps={color:"currentColor",size:s.sm,noVerticalAlign:!1},u}},96733:(e,t,n)=>{t.Z1={name:"CubesIcon",height:512,width:512,svgPath:"M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z",yOffset:0,xOffset:0},t.TF=n(35183).createIcon(t.Z1),t.ZP=t.TF},20777:(e,t,n)=>{t.lb={name:"PlusCircleIcon",height:512,width:512,svgPath:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z",yOffset:0,xOffset:0},t.wl=n(35183).createIcon(t.lb),t.ZP=t.wl},71070:(e,t,n)=>{t.xQ={name:"SearchIcon",height:512,width:512,svgPath:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z",yOffset:0,xOffset:0},t.W1=n(35183).createIcon(t.xQ),t.ZP=t.W1},75251:(e,t,n)=>{n(27418);var a=n(75418),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var s=Symbol.for;o=s("react.element"),t.Fragment=s("react.fragment")}var r=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var a,s={},c=null,d=null;for(a in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)i.call(t,a)&&!l.hasOwnProperty(a)&&(s[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===s[a]&&(s[a]=t[a]);return{$$typeof:o,type:e,key:c,ref:d,props:s,_owner:r.current}}t.jsx=c,t.jsxs=c},85893:(e,t,n)=>{e.exports=n(75251)},91070:(e,t,n)=>{n.d(t,{j:()=>a,u:()=>d});var a,o=n(9922),s=n(85893),r=n(99922),i=n(20777),l=n(96733),c=n(71070);!function(e){e.NoConsumerGroups="NoConsumerGroups",e.NoResult="NoResult",e.NoItems="NoItems"}(a||(a={}));const d=({titleProps:e,buttonProps:t,emptyStateIconProps:n,emptyStateProps:d,emptyStateBodyProps:u,children:p})=>{const v=t||{},{variant:m=r.ButtonVariant.primary,onClick:g}=v,h=(0,o.__rest)(v,["variant","onClick"]),f=e||{},{title:y}=f,x=(0,o.__rest)(f,["title"]),b=u||{},{body:C}=b,j=(0,o.__rest)(b,["body"]),P=d||{},{variant:_=a.NoItems}=P,w=(0,o.__rest)(P,["variant"]),{variant:k,icon:S,size:z,headingLevel:O}=(()=>{let t={};switch(_){case a.NoConsumerGroups:t={variant:r.EmptyStateVariant.large,icon:l.ZP,size:r.TitleSizes.lg,headingLevel:"h2"};break;case a.NoItems:t={variant:r.EmptyStateVariant.large,icon:i.ZP,size:r.TitleSizes.lg,headingLevel:"h2"};break;case a.NoResult:t={variant:r.EmptyStateVariant.large,icon:c.ZP,size:r.TitleSizes.lg,headingLevel:"h2"};break;default:t={variant:_||r.EmptyStateVariant.full,icon:null==n?void 0:n.icon,size:null==e?void 0:e.size,headingLevel:(null==e?void 0:e.headingLevel)||"h1"}}return t})();return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(r.EmptyState,Object.assign({variant:k},w,{children:[(0,s.jsx)(r.EmptyStateIcon,Object.assign({icon:S},n)),y&&(0,s.jsx)(r.Title,Object.assign({headingLevel:O,size:z},x,{children:y})),C&&(0,s.jsx)(r.EmptyStateBody,Object.assign({},j,{children:C})),(null==t?void 0:t.title)&&(0,s.jsx)(r.Button,Object.assign({variant:m,onClick:g},h,{children:null==t?void 0:t.title})),p]}))})}},68640:(e,t,n)=>{n.d(t,{J:()=>l});var a=n(85893),o=n(75418),s=n.n(o),r=n(3538),i=n(5854);const l=()=>{const{registerModals:e}=(0,i.useModal)();return e((()=>{const{t:e}=(0,r.useTranslation)(["kafkaTemporaryFixMe"]);return{[i.ModalType.KafkaDeleteTopic]:{lazyComponent:s().lazy((()=>n.e(7290).then(n.bind(n,37290)))),variant:"small"},[i.ModalType.KafkaUpdatePartitions]:{lazyComponent:s().lazy((()=>n.e(1356).then(n.bind(n,21356)))),variant:"small"},[i.ModalType.KafkaDeleteConsumerGroup]:{lazyComponent:s().lazy((()=>n.e(2546).then(n.bind(n,12546)))),variant:"small"},[i.ModalType.KafkaConsumerGroupResetOffset]:{lazyComponent:s().lazy((()=>n.e(9537).then(n.bind(n,69537)))),variant:"large"},[i.ModalType.KafkaManagePermissions]:{lazyComponent:s().lazy((()=>Promise.all([n.e(5563),n.e(6429),n.e(6235),n.e(2650),n.e(1118)]).then(n.bind(n,21118)))),variant:"large",title:e("permission.manage_permissions_dialog.title")}}})()),(0,a.jsx)(a.Fragment,{})}},4055:(e,t,n)=>{n.d(t,{y:()=>s});var a=n(85893),o=n(99922);const s=({bullseyeProps:e,spinnerProps:t})=>(0,a.jsx)(o.Bullseye,Object.assign({},e,{children:(0,a.jsx)(o.Spinner,Object.assign({},t))}))},82639:(e,t,n)=>{n.d(t,{bN:()=>c,hI:()=>l,wu:()=>d});var a=n(9922),o=n(85893),s=n(75418),r=n(99922);const i=(0,s.createContext)(void 0),l=()=>(0,s.useContext)(i),c=({children:e})=>{const[t,n]=(0,s.useState)(1),[a,r]=(0,s.useState)(10);return(0,o.jsx)(i.Provider,Object.assign({value:{page:t,perPage:a,setPage:n,setPerPage:r}},{children:e}))},d=e=>{var{itemCount:t,variant:n=r.PaginationVariant.top,isCompact:i,titles:c}=e,d=(0,a.__rest)(e,["itemCount","variant","isCompact","titles"]);const{setPage:u,setPerPage:p,perPage:v,page:m}=l()||{},g=(0,s.useCallback)(((e,t)=>{u&&u(t)}),[u]),h=(0,s.useCallback)(((e,t)=>{u&&u(1),p&&p(t)}),[u,p]);return(0,o.jsx)(r.Pagination,Object.assign({itemCount:t,perPage:v,page:m,onSetPage:g,variant:n,onPerPageSelect:h,isCompact:i},d,{titles:c}))}},3654:(e,t,n)=>{n.d(t,{E:()=>o});var a=n(75418);const o=n.n(a)().createContext(void 0)},63052:(e,t,n)=>{n.d(t,{K:()=>o});var a=n(75418);const o=(e,t)=>{const n=(0,a.useRef)();(0,a.useEffect)((()=>{n.current=e}),[e]),(0,a.useEffect)((()=>{if(null!==t){const e=setTimeout((function(){void 0!==n.current&&n.current()}),t);return()=>{clearInterval(e)}}}),[e,t])}},63850:(e,t,n)=>{n.d(t,{J:()=>x});var a=n(9922),o=n(85893),s=n(75418),r=n(3538),i=n(99922),l=n(4055),c=n(67646),d=n(5854);const u=({onClose:e,isLoading:t=!1,drawerPanelContentProps:n,drawerHeaderProps:u,isExpanded:p,children:v,panelBodyContent:m,onExpand:g,notRequiredDrawerContentBackground:h,"data-ouia-app-id":f,inlineAlertMessage:y,refreshConsumerGroups:x,consumerGroupDetail:b})=>{const C=n||{},{widths:j}=C,P=(0,a.__rest)(C,["widths"]),{text:_,title:w}=u||{},{t:k}=(0,r.useTranslation)(["kafkaTemporaryFixMe"]),{showModal:S}=(0,d.useModal)(),{showModal:z}=(0,d.useModal)(),[O,T]=(0,s.useState)(),I=[(0,o.jsx)(i.DropdownItem,Object.assign({onClick:()=>{z(d.ModalType.KafkaConsumerGroupResetOffset,{refreshConsumerGroups:x,consumerGroupData:b})}},{children:k("consumerGroup.reset_offset")}),"reset offset"),(0,o.jsx)(i.DropdownItem,Object.assign({onClick:()=>{S(d.ModalType.KafkaDeleteConsumerGroup,{consumerName:(null==w?void 0:w.value)||"",refreshConsumerGroups:x}),e()}},{children:k("common.delete")}),"delete")],G=(0,o.jsx)(i.DrawerPanelContent,Object.assign({widths:j||{default:"width_50"}},P,{children:t?(0,o.jsx)(l.y,{}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(i.DrawerHead,{children:[(0,o.jsxs)(i.TextContent,{children:[(null==_?void 0:_.label)&&(0,o.jsx)(i.Text,Object.assign({component:(null==_?void 0:_.component)||i.TextVariants.small,className:(null==_?void 0:_.className)||"kafka-ui-mas-drawer__top-label"},{children:null==_?void 0:_.label})),(null==w?void 0:w.value)&&(0,o.jsx)(i.Title,Object.assign({headingLevel:(null==w?void 0:w.headingLevel)||"h2",size:(null==w?void 0:w.size)||i.TitleSizes.xl,className:(null==w?void 0:w.className)||"kafka-ui-mas-drawer__title"},{children:null==w?void 0:w.value}))]}),(0,o.jsxs)(i.DrawerActions,{children:[(0,o.jsx)(i.Dropdown,Object.assign({onSelect:()=>{T(!O)},toggle:(0,o.jsx)(i.KebabToggle,{onToggle:e=>{T(e)},id:"toggle-data-plane"}),isOpen:O,isPlain:!0,dropdownItems:I,position:i.DropdownPosition.right},{children:(0,o.jsx)(c.EllipsisVIcon,{})})),(0,o.jsx)(i.DrawerCloseButton,{onClick:e})]})]}),(0,o.jsxs)(i.DrawerPanelBody,{children:[y,m]})]})}));return(0,o.jsx)(i.Drawer,Object.assign({isExpanded:p,onExpand:g,"data-ouia-app-id":f},{children:(0,o.jsx)(i.DrawerContent,Object.assign({panelContent:G,className:h?"pf-m-no-background":""},{children:(0,o.jsx)(i.DrawerContentBody,Object.assign({className:"kafka-ui-mas-drawer__drawer-content-body"},{children:v}))}))}))};var p=n(82639),v=n(91070),m=n(10708),g=n(3654),h=n(63052);const f=(0,s.lazy)((()=>n.e(1639).then(n.bind(n,31639)))),y=(0,s.lazy)((()=>n.e(5460).then(n.bind(n,95460)))),x=({consumerGroupByTopic:e,topic:t,rowDataTestId:n})=>{const[c,d]=(0,s.useState)(),[x,b]=(0,s.useState)(),[C,j]=(0,s.useState)({index:void 0,direction:"asc"}),[P,_]=(0,s.useState)(),[w,k]=(0,s.useState)(!1),[S,z]=(0,s.useState)(""),[O,T]=(0,s.useState)(),[I,G]=(0,s.useState)(),E=(0,s.useContext)(g.E),{t:D}=(0,r.useTranslation)(["kafkaTemporaryFixMe"]),{page:M=1,perPage:N=10,setPage:B}=(0,p.hI)()||{},V=(0,s.useCallback)((e=>{z(e),B&&B(1)}),[B]),L=(e,t,n)=>{d(n),b("name"),j({index:t,direction:n})},F=(0,s.useCallback)((()=>(0,a.__awaiter)(void 0,void 0,void 0,(function*(){yield(0,m.e5)(E,N,M,t,S,c,x).then((e=>{_(e)}))}))),[E,c,x,M,N,S,t]);(0,s.useEffect)((()=>{F()}),[S,c,M,N,F]),(0,s.useEffect)((()=>{var e;const t=P&&(null===(e=P.items)||void 0===e?void 0:e.find((e=>e.groupId===I)));t&&T(t)}),[P,I]),(0,h.K)((()=>F()),5e3);const R=(0,o.jsx)(f,{consumerGroupDetail:O,consumerGroupByTopic:e}),A=e=>{k(!0),G(null==e?void 0:e.groupId),T(e)};return(0,o.jsx)(s.Suspense,Object.assign({fallback:(0,o.jsx)(l.y,{})},{children:(0,o.jsx)(u,Object.assign({isExpanded:w,onClose:()=>{k(!1)},panelBodyContent:R,drawerHeaderProps:{text:{label:D("consumerGroup.consumer_group_id")},title:{value:null==O?void 0:O.groupId,headingLevel:"h1"}},"data-ouia-app-id":"dataPlane-consumerGroupDetails",refreshConsumerGroups:F,consumerGroupDetail:O},{children:(()=>{var e,t;switch(!0){case void 0===P:return(0,o.jsx)(i.PageSection,Object.assign({className:"kafka-ui-m-full-height",variant:i.PageSectionVariants.light,padding:{default:"noPadding"}},{children:(0,o.jsx)(l.y,{})}));case(!(null===(e=null==P?void 0:P.items)||void 0===e?void 0:e.length)||(null===(t=null==P?void 0:P.items)||void 0===t?void 0:t.length)<1)&&S.length<1:return(0,o.jsx)(v.u,{emptyStateProps:{variant:v.j.NoConsumerGroups},titleProps:{title:D("consumerGroup.empty_consumer_title")},emptyStateBodyProps:{body:D("consumerGroup.empty_consumer_body")}});case void 0!==(null==P?void 0:P.items):return(0,o.jsx)(y,{consumerGroups:null==P?void 0:P.items,total:(null==P?void 0:P.total)||0,page:M,perPage:N,search:S,setSearch:V,rowDataTestId:n,onViewConsumerGroup:A,isDrawerOpen:w,refreshConsumerGroups:F,onSort:L,sortBy:C});default:return(0,o.jsx)(o.Fragment,{})}})()}))}))}},10708:(e,t,n)=>{n.d(t,{T3:()=>i,e5:()=>r,v:()=>l});var a=n(9922),o=n(86206),s=n(28251);const r=(e,t,n,r,i,l=s.SortByDirection.asc,c)=>(0,a.__awaiter)(void 0,void 0,void 0,(function*(){const a=yield null==e?void 0:e.getToken(),s=new o.GroupsApi(new o.Configuration({accessToken:a,basePath:null==e?void 0:e.basePath}));return(yield s.getConsumerGroups(void 0,void 0,t,n,r,i,l,c)).data})),i=(e,t)=>(0,a.__awaiter)(void 0,void 0,void 0,(function*(){const n=yield null==t?void 0:t.getToken(),a=new o.GroupsApi(new o.Configuration({accessToken:n,basePath:null==t?void 0:t.basePath}));yield a.deleteConsumerGroupById(e)})),l=(e,t,n,s,r,i)=>(0,a.__awaiter)(void 0,void 0,void 0,(function*(){const a=yield null==e?void 0:e.getToken(),l=new o.GroupsApi(new o.Configuration({accessToken:a,basePath:null==e?void 0:e.basePath}));return yield l.resetConsumerGroupOffset(t,{value:i,offset:n,topics:[{topic:s,partitions:r}]})}))}}]);
//# sourceMappingURL=4841.0f13f55f.js.map