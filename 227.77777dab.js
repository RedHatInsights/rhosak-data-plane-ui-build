"use strict";(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[227],{81369:(e,t,a)=>{a.d(t,{J:()=>c});var n=a(75418),r=a.n(n),i=a(76752),o=a(30782),l=a(11593),c=function(){var e,t;return(0,(0,o.dd)().registerModals)((t=(0,l.useTranslation)().t,(e={})[i.w.KafkaDeleteTopic]={lazyComponent:r().lazy((function(){return Promise.all([a.e(853),a.e(577),a.e(333),a.e(290)]).then(a.bind(a,37290))})),variant:"small"},e[i.w.KafkaUpdatePartitions]={lazyComponent:r().lazy((function(){return a.e(479).then(a.bind(a,21356))})),variant:"small"},e[i.w.KafkaDeleteConsumerGroup]={lazyComponent:r().lazy((function(){return Promise.all([a.e(853),a.e(577),a.e(333),a.e(546)]).then(a.bind(a,12546))})),variant:"small"},e[i.w.KafkaConsumerGroupResetOffset]={lazyComponent:r().lazy((function(){return Promise.all([a.e(853),a.e(577),a.e(333),a.e(861)]).then(a.bind(a,29861))})),variant:"large"},e[i.w.KafkaManagePermissions]={lazyComponent:r().lazy((function(){return Promise.all([a.e(177),a.e(883),a.e(356),a.e(853),a.e(577),a.e(333),a.e(235),a.e(251),a.e(965),a.e(195)]).then(a.bind(a,26380))})),variant:"large",title:t("permission.manage_permissions_dialog.title")},e)),r().createElement(r().Fragment,null)}},82639:(e,t,a)=>{a.d(t,{hI:()=>s,bN:()=>m,wu:()=>u});var n=a(75418),r=a.n(n),i=a(84669),o=function(){return o=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},o.apply(this,arguments)},l=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},c=(0,n.createContext)(void 0),s=function(){return(0,n.useContext)(c)},m=function(e){var t=e.children,a=(0,n.useState)(1),i=a[0],o=a[1],l=(0,n.useState)(10),s=l[0],m=l[1];return r().createElement(c.Provider,{value:{page:i,perPage:s,setPage:o,setPerPage:m}},t)},u=function(e){var t=e.itemCount,a=e.variant,c=void 0===a?i.PaginationVariant.top:a,m=e.isCompact,u=e.titles,d=l(e,["itemCount","variant","isCompact","titles"]),f=s()||{},b=f.setPage,p=f.setPerPage,k=f.perPage,g=f.page,h=(0,n.useCallback)((function(e,t){b&&b(t)}),[]),v=(0,n.useCallback)((function(e,t){b&&b(1),p&&p(t)}),[]);return r().createElement(i.Pagination,o({itemCount:t,perPage:k,page:g,onSetPage:h,variant:c,onPerPageSelect:v,isCompact:m},d,{titles:u}))}},64517:(e,t,a)=>{a.d(t,{J:()=>r,S:()=>i});var n=a(75418),r=a.n(n)().createContext(void 0),i=function(){return(0,n.useContext)(r)}},5473:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var n=a(75418),r=a.n(n),i=a(11593),o=a(3654),l=a(64517),c=a(35380),s=a(84669),m=a(4055),u=(a(41781),(0,n.lazy)((function(){return Promise.all([a.e(853),a.e(577),a.e(333),a.e(308),a.e(68),a.e(251),a.e(380)]).then(a.bind(a,93380))}))),d=(0,n.lazy)((function(){return Promise.all([a.e(853),a.e(577),a.e(308),a.e(251),a.e(705),a.e(847)]).then(a.bind(a,70705))})),f=(0,n.lazy)((function(){return Promise.all([a.e(853),a.e(577),a.e(333),a.e(308),a.e(251),a.e(965),a.e(302)]).then(a.bind(a,9837))})),b=function(){var e=(0,i.useTranslation)().t,t=(0,l.S)()||{},a=t.kafkaPageLink,o=t.kafkaName,c=t.handleInstanceDrawer,b=t.setIsOpenDeleteInstanceModal,p=t.showMetrics,k=t.activeTab,g=(0,n.useState)(k||1),h=g[0],v=g[1],E=r().createRef(),P=r().createRef(),T=r().createRef(),y=r().createRef(),C=(0,n.useState)(),w=C[0],I=C[1],K=function(e){c&&c(!0,e)},S=[r().createElement(s.DropdownItem,{key:"view-kafka",onClick:function(){return K("details")}},e("common.view_instance")),r().createElement(s.DropdownItem,{key:"connect-kafka",onClick:function(){return K("connection")}},e("common.view_connection")),r().createElement(s.DropdownItem,{key:"delete-kafka",onClick:function(){b&&b(!0)}},e("common.delete_instance"))],_=r().createElement(s.Breadcrumb,null,r().createElement(s.BreadcrumbItem,{to:a||"#"},e("common.kafka_instance")),r().createElement(s.BreadcrumbItem,{to:"#",isActive:!0},o||e("common.kafka_instance_name")));return r().createElement(r().Fragment,null,r().createElement("section",{className:"pf-c-page__main-breadcrumb"},_),r().createElement(s.PageSection,{variant:s.PageSectionVariants.light},r().createElement(s.Level,null,r().createElement(s.Title,{headingLevel:"h1"},o||e("common.kafka_instance_name")),r().createElement(s.Dropdown,{onSelect:function(){I(!w)},toggle:r().createElement(s.KebabToggle,{onToggle:function(e){I(e)},id:"toggle-data-plane"}),isOpen:w,isPlain:!0,dropdownItems:S,position:s.DropdownPosition.right}))),r().createElement(s.PageSection,{variant:s.PageSectionVariants.light,padding:{default:"noPadding"},className:"pf-c-page__main-tabs"},r().createElement(s.Tabs,{activeKey:h,onSelect:function(e,t){v(t)},"data-testid":"pageKafka-tabProperties",className:"pf-m-page-insets"},r().createElement(s.Tab,{title:r().createElement(s.TabTitleText,null,e("dashboard.dashboard")),eventKey:1,"data-testid":"pageKafka-tabDashboard",id:"dashboard-tab-section","aria-label":e("dashboard.dashboard"),tabContentRef:T,tabContentId:"kafka-ui-TabcontentDashboard"}),r().createElement(s.Tab,{title:r().createElement(s.TabTitleText,null,e("topic.topics")),eventKey:2,"data-testid":"pageKafka-tabTopics",id:"topics-tab-section","aria-label":e("topic.topics"),tabContentRef:P,tabContentId:"kafka-ui-TabcontentTopicsList"}),r().createElement(s.Tab,{title:r().createElement(s.TabTitleText,null,e("consumerGroup.consumer_groups")),eventKey:3,"data-testid":"pageKafka-tabConsumers",id:"consumer-groups-tab-section","aria-label":e("consumerGroup.consumer_groups"),tabContentRef:E,tabContentId:"kafka-ui-TabcontentConsumersList"}),r().createElement(s.Tab,{title:r().createElement(s.TabTitleText,null,e("permission.tab.label")),eventKey:4,"data-testid":"pageKafka-tabPermissions",id:"permissions-tab-section","aria-label":e("permission.tab.label"),tabContentRef:y,tabContentId:"kafka-ui-TabcontentPermissions"}))),r().createElement(s.PageSection,{isFilled:!0},r().createElement(s.TabContent,{eventKey:1,ref:T,id:"kafka-ui-TabcontentDashboard",className:"kafka-ui-m-full-height","aria-label":e("dashboard.dashboard"),hidden:1!==h},p),r().createElement(s.TabContent,{eventKey:2,ref:P,id:"kafka-ui-TabcontentTopicsList",className:"kafka-ui-m-full-height","aria-label":e("topic.topics"),hidden:2!==h},r().createElement(r().Suspense,{fallback:r().createElement(m.y,null)},r().createElement(u,null))),r().createElement(s.TabContent,{eventKey:3,ref:E,id:"kafka-ui-TabcontentConsumersList",className:"kafka-ui-m-full-height","aria-label":e("consumerGroup.consumer_groups"),hidden:3!=h},r().createElement(r().Suspense,{fallback:r().createElement(m.y,null)},r().createElement(d,{consumerGroupByTopic:!1}))),r().createElement(s.TabContent,{eventKey:4,ref:y,id:"kafka-ui-TabcontentPermissions",className:"kafka-ui-m-full-height","aria-label":e("permission.tab.label"),hidden:!0},r().createElement(r().Suspense,{fallback:r().createElement(m.y,null)},r().createElement(f,{kafkaName:o})))))},p=a(30782),k=a(82639),g=a(81369);const h=function(e){var t=e.getToken,a=e.apiBasePath,n=e.kafkaName,s=e.kafkaPageLink,m=e.onError,u=e.handleInstanceDrawer,d=e.setIsOpenDeleteInstanceModal,f=e.showMetrics,h=e.activeTab,v=void 0===h?1:h;return r().createElement(i.I18nextProvider,{i18n:c.Z},r().createElement(o.E.Provider,{value:{basePath:a,getToken:t}},r().createElement(l.J.Provider,{value:{kafkaName:n,kafkaPageLink:s,onError:m,handleInstanceDrawer:u,setIsOpenDeleteInstanceModal:d,showMetrics:f,activeTab:v}},r().createElement(p.DY,null,r().createElement(k.bN,null,r().createElement(b,null),r().createElement(g.J,null))))))}}}]);
//# sourceMappingURL=227.77777dab.js.map