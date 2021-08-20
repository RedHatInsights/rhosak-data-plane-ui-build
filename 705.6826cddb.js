"use strict";(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[705],{70705:(e,n,t)=>{t.r(n),t.d(n,{ConsumerGroups:()=>C,default:()=>P});var r=t(75418),o=t.n(r),a=t(54532),l=t(76007),u=t(58788),i=t(41861),s=t(52049),c=t(4055),d=t(14708),p=function(){return(p=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e}).apply(this,arguments)},f=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t},m=function(e){var n=e.onClose,t=e.isLoading,l=void 0!==t&&t,m=e.drawerPanelContentProps,h=e.drawerHeaderProps,v=e.isExpanded,w=e.children,y=e.panelBodyContent,b=e.onExpand,g=e.notRequiredDrawerContentBackground,E=e["data-ouia-app-id"],k=e.inlineAlertMessage,C=e.refreshConsumerGroups,P=e.consumerGroupDetail,G=m||{},x=G.widths,S=f(G,["widths"]),D=h||{},T=D.text,O=D.title,_=(0,a.useTranslation)().t,B=(0,i.dd)().showModal,I=(0,i.dd)().showModal,N=(0,r.useState)(),j=N[0],L=N[1],z=[o().createElement(u.DropdownItem,{key:"reset offset",onClick:function(){I(s.w.ConsumerGroupResetOffset,{refreshConsumerGroups:C,consumerGroupData:P})}},_("consumerGroup.reset_offset")),o().createElement(u.DropdownItem,{key:"delete",onClick:function(){B(s.w.DeleteConsumerGroup,{consumerName:(null==O?void 0:O.value)||"",refreshConsumerGroups:C}),n()}},_("common.delete"))],A=o().createElement(u.DrawerPanelContent,p({widths:x||{default:"width_50"}},S),l?o().createElement(c.y,null):o().createElement(o().Fragment,null,o().createElement(u.DrawerHead,null,o().createElement(u.TextContent,null,(null==T?void 0:T.label)&&o().createElement(u.Text,{component:(null==T?void 0:T.component)||u.TextVariants.small,className:(null==T?void 0:T.className)||"kafka-ui-mas-drawer__top-label"},null==T?void 0:T.label),(null==O?void 0:O.value)&&o().createElement(u.Title,{headingLevel:(null==O?void 0:O.headingLevel)||"h2",size:(null==O?void 0:O.size)||u.TitleSizes.xl,className:(null==O?void 0:O.className)||"kafka-ui-mas-drawer__title"},null==O?void 0:O.value)),o().createElement(u.DrawerActions,null,o().createElement(u.Dropdown,{onSelect:function(){L(!j)},toggle:o().createElement(u.KebabToggle,{onToggle:function(e){L(e)},id:"toggle-data-plane"}),isOpen:j,isPlain:!0,dropdownItems:z,position:u.DropdownPosition.right},o().createElement(d.EllipsisVIcon,null)),o().createElement(u.DrawerCloseButton,{onClick:n}))),o().createElement(u.DrawerPanelBody,null,k,y)));return o().createElement(u.Drawer,{isExpanded:v,onExpand:b,"data-ouia-app-id":E},o().createElement(u.DrawerContent,{panelContent:A,className:g?"pf-m-no-background":""},o().createElement(u.DrawerContentBody,{className:"kafka-ui-mas-drawer__drawer-content-body"},w)))},h=t(91070),v=t(10708),w=t(3654),y=t(63052),b=function(e,n,t,r){return new(t||(t=Promise))((function(o,a){function l(e){try{i(r.next(e))}catch(e){a(e)}}function u(e){try{i(r.throw(e))}catch(e){a(e)}}function i(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(l,u)}i((r=r.apply(e,n||[])).next())}))},g=function(e,n){var t,r,o,a,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;l;)try{if(t=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return l.label++,{value:a[1],done:!1};case 5:l.label++,r=a[1],a=[0];continue;case 7:a=l.ops.pop(),l.trys.pop();continue;default:if(!(o=l.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){l=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){l.label=a[1];break}if(6===a[0]&&l.label<o[1]){l.label=o[1],o=a;break}if(o&&l.label<o[2]){l.label=o[2],l.ops.push(a);break}o[2]&&l.ops.pop(),l.trys.pop();continue}a=n.call(e,l)}catch(e){a=[6,e],r=0}finally{t=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}},E=(0,r.lazy)((function(){return t.e(136).then(t.bind(t,31136))})),k=(0,r.lazy)((function(){return t.e(460).then(t.bind(t,95460))})),C=function(e){var n=e.consumerGroupByTopic,t=e.topic,i=e.rowDataTestId,s=(0,r.useState)(0),d=s[0],p=s[1],f=(0,r.useState)(),C=f[0],P=f[1],G=(0,r.useState)(),x=G[0],S=G[1],D=(0,r.useState)({index:void 0,direction:"asc"}),T=D[0],O=D[1],_=(0,r.useState)(),B=_[0],I=_[1],N=(0,r.useState)(!1),j=N[0],L=N[1],z=(0,r.useState)(""),A=z[0],V=z[1],H=(0,r.useState)(),M=H[0],R=H[1],F=(0,r.useContext)(w.E),K=(0,a.useTranslation)().t,q=(0,l.useLocation)(),U=new URLSearchParams(q.search),J=parseInt(U.get("page")||"",10)||1,Q=parseInt(U.get("perPage")||"",10)||10;(0,r.useEffect)((function(){p(Q*(J-1))}),[J,Q]);var W=function(e,n,t){P(t),S("name"),O({index:n,direction:t})},X=function(){return b(void 0,void 0,void 0,(function(){var e;return g(this,(function(n){switch(n.label){case 0:e=100,n.label=1;case 1:return n.trys.push([1,3,,4]),[4,(0,v.e5)(F,d,e,Q,J,t,A,C,x).then((function(e){I(e)}))];case 2:return n.sent(),[3,4];case 3:return n.sent(),[3,4];case 4:return[2]}}))}))};(0,r.useEffect)((function(){X()}),[A,C]),(0,y.K)((function(){return X()}),5e3);var Y=o().createElement(E,{consumerGroupDetail:M,consumerGroupByTopic:n}),Z=function(e){L(!0),R(e)};return o().createElement(r.Suspense,{fallback:o().createElement(c.y,null)},o().createElement(m,{isExpanded:j,onClose:function(){L(!1)},panelBodyContent:Y,drawerHeaderProps:{text:{label:K("consumerGroup.consumer_group_id")},title:{value:null==M?void 0:M.groupId,headingLevel:"h1"}},"data-ouia-app-id":"dataPlane-consumerGroupDetails",refreshConsumerGroups:X,consumerGroupDetail:M},function(){var e,t,r,a;return void 0===B?o().createElement(u.PageSection,{className:"kafka-ui-m-full-height",variant:u.PageSectionVariants.light,padding:{default:"noPadding"}},o().createElement(c.y,null)):(!(null===(e=null==B?void 0:B.items)||void 0===e?void 0:e.length)||(null===(t=null==B?void 0:B.items)||void 0===t?void 0:t.length)<1)&&A.length<1?o().createElement(h.u,{emptyStateProps:{variant:h.j.NoConsumerGroups},titleProps:{title:K("consumerGroup.empty_consumer_title")},emptyStateBodyProps:{body:K("consumerGroup.empty_consumer_body")}}):B?o().createElement(k,{consumerGroups:null===(r=null==B?void 0:B.items)||void 0===r?void 0:r.slice(d,d+Q),total:(null===(a=null==B?void 0:B.items)||void 0===a?void 0:a.length)||0,page:J,perPage:Q,search:A,setSearch:V,rowDataTestId:i,onViewConsumerGroup:Z,isDrawerOpen:j,refreshConsumerGroups:X,consumerGroupByTopic:n,onSort:W,sortBy:T}):o().createElement(o().Fragment,null)}()))};const P=C},10708:(e,n,t)=>{t.d(n,{e5:()=>u,T3:()=>i,v:()=>s});var r=t(80444),o=t(94550),a=function(e,n,t,r){return new(t||(t=Promise))((function(o,a){function l(e){try{i(r.next(e))}catch(e){a(e)}}function u(e){try{i(r.throw(e))}catch(e){a(e)}}function i(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(l,u)}i((r=r.apply(e,n||[])).next())}))},l=function(e,n){var t,r,o,a,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;l;)try{if(t=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return l.label++,{value:a[1],done:!1};case 5:l.label++,r=a[1],a=[0];continue;case 7:a=l.ops.pop(),l.trys.pop();continue;default:if(!(o=l.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){l=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){l.label=a[1];break}if(6===a[0]&&l.label<o[1]){l.label=o[1],o=a;break}if(o&&l.label<o[2]){l.label=o[2],l.ops.push(a);break}o[2]&&l.ops.pop(),l.trys.pop();continue}a=n.call(e,l)}catch(e){a=[6,e],r=0}finally{t=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}},u=function(e,n,t,u,i,s,c,d,p){return void 0===d&&(d=o.SortByDirection.asc),a(void 0,void 0,Promise,(function(){var o;return l(this,(function(a){switch(a.label){case 0:return[4,null==e?void 0:e.getToken()];case 1:return o=a.sent(),[4,new r.GroupsApi(new r.Configuration({accessToken:o,basePath:null==e?void 0:e.basePath})).getConsumerGroups(n,t,u,i,s,c,d,p)];case 2:return[2,a.sent().data]}}))}))},i=function(e,n){return a(void 0,void 0,Promise,(function(){var t;return l(this,(function(o){switch(o.label){case 0:return[4,null==n?void 0:n.getToken()];case 1:return t=o.sent(),[4,new r.GroupsApi(new r.Configuration({accessToken:t,basePath:null==n?void 0:n.basePath})).deleteConsumerGroupById(e)];case 2:return o.sent(),[2]}}))}))},s=function(e,n,t,o,u,i){return a(void 0,void 0,Promise,(function(){var a;return l(this,(function(l){switch(l.label){case 0:return[4,null==e?void 0:e.getToken()];case 1:return a=l.sent(),[4,new r.GroupsApi(new r.Configuration({accessToken:a,basePath:null==e?void 0:e.basePath})).resetConsumerGroupOffset(n,{value:i,offset:t,topics:[{topic:o,partitions:u}]})];case 2:return[2,l.sent()]}}))}))}}}]);
//# sourceMappingURL=705.6826cddb.js.map