(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[527],{777:(e,t,a)=>{"use strict";t.lb={name:"PlusCircleIcon",height:512,width:512,svgPath:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z",yOffset:0,xOffset:0},t.wl=a(5183).createIcon(t.lb),t.ZP=t.wl},1070:(e,t,a)=>{"use strict";t.xQ={name:"SearchIcon",height:512,width:512,svgPath:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z",yOffset:0,xOffset:0},t.W1=a(5183).createIcon(t.xQ),t.ZP=t.W1},3526:(e,t,a)=>{"use strict";a.d(t,{w:()=>r});var n=a(7522),r=(a(8612),(0,n.createContext)({}))},3384:(e,t,a)=>{"use strict";a.r(t),a.d(t,{FederatedMainView:()=>P,default:()=>S});var n=a(7522),r=a.n(n),i=(a(6351),a(8612)),l=a(1064),o=a(9058),c=function(e){var t=e.search,a=e.setSearch,n=e.onClear;return r().createElement(i.InputGroup,null,r().createElement(i.SearchInput,{name:"searchName",id:"search-topics-input",type:"search","aria-label":"search input ",placeholder:"Search",value:t,onChange:function(e){a(e)},onClear:function(){n(),a("")}}))},s=a(777),u=function(e){var t=e.onCreateTopic;return r().createElement(i.Bullseye,null,r().createElement(i.EmptyState,null,r().createElement(i.EmptyStateIcon,{icon:s.ZP}),r().createElement(i.Title,{headingLevel:"h5",size:"lg"},"You don't have any topics yet"),r().createElement(i.EmptyStateBody,null,"Create a topic by clicking the button below to get started"),r().createElement(i.Button,{variant:"primary",className:"topics-empty-page",onClick:t},"Create Topic")))},m=a(1070),f=function(){return r().createElement(i.EmptyState,null,r().createElement(i.EmptyStateIcon,{icon:m.ZP}),r().createElement(i.Title,{headingLevel:"h5",size:"lg"},"No results found"),r().createElement(i.EmptyStateBody,null,"No result match the filter criteria. Remove filter or clear all filters to show results"))},d=a(9492),p=a(699),b=a(9115),h=a(7955),v=a(3526),g=a(7194),E=function(){return(E=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},T=function(e){var t,a,s,m=e.onCreateTopic,T=e.getTopicDetailsPath,y=e.onClickTopic,k=e.onDeleteTopic,C=e.onError,P=(0,n.useState)(!0),S=P[0],w=P[1],I=(0,n.useState)(1),N=I[0],M=I[1],x=(0,n.useState)(10),B=x[0],D=x[1],K=(0,n.useState)(0),L=K[0],R=K[1],_=(0,n.useState)(""),z=_[0],O=_[1],V=(0,n.useState)(),A=V[0],G=V[1],Z=(0,n.useState)(),F=Z[0],W=Z[1],j=(0,n.useState)(!1),H=j[0],Q=j[1],U=(0,n.useState)(),Y=U[0],q=U[1],J=(0,n.useContext)(v.w).addAlert,X=(0,n.useContext)(b.E),$=function(){return e=void 0,t=void 0,n=function(){var e,t;return function(e,t){var a,n,r,i,l={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function o(i){return function(o){return function(i){if(a)throw new TypeError("Generator is already executing.");for(;l;)try{if(a=1,n&&(r=2&i[0]?n.return:i[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,i[1])).done)return r;switch(n=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return l.label++,{value:i[1],done:!1};case 5:l.label++,n=i[1],i=[0];continue;case 7:i=l.ops.pop(),l.trys.pop();continue;default:if(!((r=(r=l.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){l=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){l.label=i[1];break}if(6===i[0]&&l.label<r[1]){l.label=r[1],r=i;break}if(r&&l.label<r[2]){l.label=r[2],l.ops.push(i);break}r[2]&&l.ops.pop(),l.trys.pop();continue}i=t.call(e,l)}catch(e){i=[6,e],n=0}finally{a=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,o])}}}(this,(function(a){switch(a.label){case 0:return a.trys.push([0,2,,3]),[4,(0,d.BB)(X)];case 1:return(e=a.sent())&&(G(e),W(e)),[3,3];case 2:return t=a.sent(),C&&401===t.response.data.code?C(t.response.data.code,t.response.data.error_message):J(t.response.data.error_message,i.AlertVariant.danger),[3,3];case 3:return w(!1),[2]}}))},new((a=void 0)||(a=Promise))((function(r,i){function l(e){try{c(n.next(e))}catch(e){i(e)}}function o(e){try{c(n.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(l,o)}c((n=n.apply(e,t||[])).next())}));var e,t,a,n};(0,n.useEffect)((function(){w(!0),$()}),[H]),(0,o.K)((function(){return $()}),5e3);var ee=function(e,t){M(t),R(N*B)},te=function(e,t){D(t)},ae=[{title:"Name"},{title:"Partitions",transforms:[l.sortable]},{title:"Retention Time",transforms:[l.sortable]},{title:"Retention Size",transforms:[l.sortable]}],ne=(null===(s=null==F?void 0:F.items)||void 0===s?void 0:s.map((function(e){var t,a,n,i,l,o,c,s,u;return[{title:r().createElement(g.Link,{"data-testid":"tableTopics-linkTopic",to:T(e.name),onClick:function(t){t.preventDefault(),y(e.name)}},null==e?void 0:e.name)},null===(t=e.partitions)||void 0===t?void 0:t.length,(s=Number((null===(n=null===(a=e.config)||void 0===a?void 0:a.filter((function(e){return"retention.ms"===e.key}))[0])||void 0===n?void 0:n.value)||0),-1===s?"Unlimited":s<6e4?1===s?s+" millisecond":s+" milliseconds":s>=6e4&&s<36e5?(u=s/6e4,1==(u=Math.round(100*u)/100)?u+" minute":u+" minutes"):s>=36e5&&s<1728e5?(u=s/36e5,1==(u=Math.round(100*u)/100)?u+" hour":u+" hours"):s>=1728e5?(u=s/864e5,(u=Math.round(100*u)/100)+" days"):void 0),(o=Number((null===(l=null===(i=e.config)||void 0===i?void 0:i.filter((function(e){return"retention.bytes"===e.key}))[0])||void 0===l?void 0:l.value)||0),-1===o?"Unlimited":Math.abs(o)<1e3?1===o?o+" byte":o+" bytes":Math.abs(o)>=1e3&&Math.abs(o)<1e6?1==(c=o/1e3)?c+" kilobyte":c+" kilobytes":Math.abs(o)>=1e6&&Math.abs(o)<1e9?1==(c=o/1e6)?c+" megabyte":c+" megabytes":Math.abs(o)>=1e9&&Math.abs(o)<1e12?1==(c=o/1e9)?c+" gigabyte":c+" gigabytes":Math.abs(o)>=1e12?1==(c=o/1e12)?c+" terabyte":c+" terabytes":void 0)]})))||[];(0,n.useEffect)((function(){if(z&&""!=z.trim()&&(null==A?void 0:A.items)&&A.items.length>0){var e=null==A?void 0:A.items.filter((function(e){return(null==e?void 0:e.name)&&e.name.includes(z)}));W((function(t){return t?E(E({},t),{items:e}):void 0}))}else W(A)}),[z,A]);var re=[(t={title:"Delete"},t["data-testid"]="tableTopics-actionDelete",t.onClick=function(e,t){return function(e){(null==F?void 0:F.items)&&q(F.items[e].name),Q(!0)}(t)},t),(a={title:"Edit"},a["data-testid"]="tableTopics-actionEdit",a.onClick=function(e,t){return function(e){(null==F?void 0:F.items)&&y(F.items[e].name)}(t)},a)];return S?r().createElement(h.g,null):r().createElement(r().Fragment,null,H&&r().createElement(p.i,{topicName:Y,setDeleteModal:Q,deleteModal:H,onDeleteTopic:k}),r().createElement(i.Card,{className:"kafka-ui-m-full-height"},ne.length<1&&z.length<1?r().createElement(u,{onCreateTopic:m}):r().createElement(r().Fragment,null,r().createElement(i.Toolbar,null,r().createElement(i.ToolbarContent,null,r().createElement(i.ToolbarItem,{className:"pf-c-toolbar-item--search"},r().createElement(c,{onClear:function(){W(A)},search:z,setSearch:O})),r().createElement(i.ToolbarItem,null,r().createElement(i.Button,{id:"topic-list-create-topic-button",className:"topics-per-page","data-testid":"tabTopics-actionCreate",onClick:function(){m()}},"Create topic")),r().createElement(i.ToolbarItem,{variant:"pagination"},r().createElement(i.Pagination,{itemCount:ne.length,perPage:B,page:N,onSetPage:ee,widgetId:"topic-list-pagination-top",onPerPageSelect:te})))),r().createElement(l.Table,{"aria-label":"Compact Table",variant:l.TableVariant.compact,cells:ae,rows:1!=N?ne.slice(L,L+B):ne.slice(0,B),actions:re},r().createElement(l.TableHeader,null),r().createElement(l.TableBody,null))),r().createElement(i.Divider,null),ne.length<1&&z.length>1&&r().createElement(f,null),ne.length>1&&r().createElement(i.Pagination,{itemCount:ne.length,perPage:B,page:N,onSetPage:ee,widgetId:"topic-list-pagination-bottom",onPerPageSelect:te,offset:0,variant:i.PaginationVariant.bottom})))},y=a(6302),k=a(3006),C=a(8794),P=function(e){var t,a=e.getToken,l=e.activeTab,o=void 0===l?0:l,c=e.apiBasePath,s=e.kafkaName,u=e.kafkaPageLink,m=e.onCreateTopic,f=e.getTopicDetailsPath,d=e.onClickTopic,p=e.addAlert,h=e.onDeleteConsumer,E=e.onDeleteTopic,P=e.onError,S={addAlert:p},w=(0,n.useState)(o),I=w[0],N=w[1],M=r().createRef(),x=r().createRef();return r().createElement(g.BrowserRouter,null,r().createElement(k.I18nextProvider,{i18n:y.Z},r().createElement(b.E.Provider,{value:{basePath:c,getToken:a}},r().createElement(v.w.Provider,{value:S},(t=r().createElement(i.Breadcrumb,null,r().createElement(i.BreadcrumbItem,{to:u||"#"},"Kafka Instances"),r().createElement(i.BreadcrumbItem,{to:"#",isActive:!0},s||"Kafka Instance Name")),r().createElement(r().Fragment,null,r().createElement("section",{className:"pf-c-page__main-breadcrumb"},t),r().createElement(i.PageSection,{variant:"light",className:"foobarfoobar"},r().createElement(i.Level,null,r().createElement(i.Title,{headingLevel:"h1"},s||"Kafka Instance Name"))),r().createElement(i.PageSection,{variant:i.PageSectionVariants.light,className:"pf-c-page__main-tabs",isWidthLimited:!0,padding:{default:"noPadding"}},r().createElement(i.Tabs,{activeKey:I,onSelect:function(e,t){N(t)},className:"pf-m-page-insets"},r().createElement(i.Tab,{title:r().createElement(i.TabTitleText,null,"Topics"),eventKey:0,id:"topics-tab-section","aria-label":"Topics Tab.","data-testid":"pageKafka-tabTopics",tabContentId:"kafka-ui-TabcontentTopics",tabContentRef:M}),r().createElement(i.Tab,{title:r().createElement(i.TabTitleText,null,"Consumer groups"),eventKey:1,id:"consumer-groups-tab-section","aria-label":"Consumer Groups Tab.","data-testid":"pageKafka-tabConsumers",tabContentId:"kafka-ui-TabcontentConsumers",tabContentRef:x,className:1===I?"kafka-ui--consumer-content":""}))),r().createElement(i.PageSection,{variant:i.PageSectionVariants.default},r().createElement(i.TabContent,{eventKey:0,id:"kafka-ui-TabcontentTopics",ref:M,className:"kafka-ui-m-full-height","aria-label":"Topics."},r().createElement(T,{onCreateTopic:m,onClickTopic:d,getTopicDetailsPath:f,onDeleteTopic:E,onError:P})),r().createElement(i.TabContent,{eventKey:1,id:"kafka-ui-TabcontentConsumers",ref:x,className:"kafka-ui-m-full-height","aria-label":"Consumer groups.",hidden:!0},r().createElement(C.B,{onDeleteConsumerGroup:h,consumerGroupByTopic:!1})))))))))};const S=P}}]);
//# sourceMappingURL=527.0547aa8b.bundle.js.map