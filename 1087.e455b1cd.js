"use strict";(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[1087],{38296:(e,t,n)=>{function a(...e){const t=[],n={}.hasOwnProperty;return e.filter(Boolean).forEach((e=>{const o=typeof e;if("string"===o||"number"===o)t.push(e);else if(Array.isArray(e)&&e.length){const n=a(...e);n&&t.push(n)}else if("object"===o)for(const a in e)n.call(e,a)&&e[a]&&t.push(a)})),t.join(" ")}n.r(t),n.d(t,{css:()=>a})},41781:()=>{},4055:(e,t,n)=>{n.d(t,{y:()=>l});var a=n(75418),o=n.n(a),r=n(84669),i=function(){return i=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)},l=function(e){var t=e.bullseyeProps,n=e.spinnerProps;return o().createElement(r.Bullseye,i({},t),o().createElement(r.Spinner,i({},n)))}},28942:(e,t,n)=>{n.d(t,{w:()=>f});var a=n(75418),o=n.n(a),r=n(27577),i=n(38296),l=function(){return l=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},l.apply(this,arguments)},c=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n},s=(0,a.createContext)({activeRow:"",onRowClick:function(){return""},loggedInUser:""}),u=s.Provider,p=function(e){var t=(0,a.useContext)(s),n=t.activeRow,r=t.onRowClick,u=t.rowDataTestId,p=e||{},d=p.trRef,m=p.className,f=p.rowProps,b=p.row,v=c(p,["trRef","className","rowProps","row"]),g=(f||{}).rowIndex,y=b||{},h=y.isExpanded,k=y.originalData;return o().createElement("tr",l({"data-testid":u,tabIndex:0,ref:"function"==typeof d?void 0:d,className:(0,i.css)(m,"pf-c-table-row__item",n&&n===(null==k?void 0:k.rowId)&&"pf-m-selected pf-m-selectable"),hidden:void 0!==h&&!h,onClick:function(e){return r&&r(e,g,b)}},v))},d=function(){return d=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},d.apply(this,arguments)},m=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n},f=function(e){var t=e.tableProps,n=e.tableHeaderProps,a=e.tableBodyProps,l=e.children,c=e.activeRow,s=e.onRowClick,f=e.rowDataTestId,b=e.loggedInUser,v=t.cells,g=t.rows,y=t.actionResolver,h=t.onSort,k=t.sortBy,T=t["aria-label"],w=t.variant,E=t.className,P=t.shouldDefaultCustomRowWrapper,I=void 0!==P&&P,_=m(t,["cells","rows","actionResolver","onSort","sortBy","aria-label","variant","className","shouldDefaultCustomRowWrapper"]);return I&&(_.rowWrapper=p),o().createElement(u,{value:{activeRow:c,onRowClick:s,rowDataTestId:f,loggedInUser:b}},o().createElement(r.Table,d({className:(0,i.css)(I&&"mas--table-view__table",E),cells:v,variant:w,rows:g,"aria-label":T,actionResolver:y,onSort:h,sortBy:k},_),o().createElement(r.TableHeader,d({},n)),o().createElement(r.TableBody,d({},a)),l))}},97416:(e,t,n)=>{n.d(t,{L:()=>c});var a=n(75418),o=n.n(a),r=n(84669),i=function(){return i=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)},l=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n},c=function(e){var t=e.toolbarProps,n=e.toggleGroupProps,a=e.toolbarItems,c=e.toggleGroupItems,s=t.id,u=t.clearAllFilters,p=t.collapseListedFiltersBreakpoint,d=void 0===p?"md":p,m=t.inset,f=l(t,["id","clearAllFilters","collapseListedFiltersBreakpoint","inset"]);return o().createElement(o().Fragment,null,o().createElement(r.Toolbar,i({id:s,clearAllFilters:u,inset:m,collapseListedFiltersBreakpoint:d},f),o().createElement(r.ToolbarContent,null,n&&o().createElement(r.ToolbarToggleGroup,i({},n,{toggleIcon:n.toggleIcon}),c),null==a?void 0:a.map((function(e,t){var n=e.key,a=void 0===n?"mas":n,c=e.variant,s=e.className,u=e.id,p=e.alignment,d=e.item,m=l(e,["key","variant","className","id","alignment","item"]);return o().createElement(r.ToolbarItem,i({key:"".concat(a,"-").concat(t),variant:c,className:s,id:u,alignment:p},m),d)})))))}},2766:(e,t,n)=>{n.d(t,{$:()=>s});var a=n(75418),o=n.n(a),r=n(31521),i=n(98068),l=n(84669),c=n(64517),s=function(e){var t=e.activeTabKey,n=(0,r.useTranslation)().t,s=(0,i.useHistory)(),u=(0,c.S)()||{},p=u.kafkaPageLink,d=u.kafkaName,m=u.handleInstanceDrawer,f=u.onDeleteInstance,b=(0,a.useState)(),v=b[0],g=b[1],y=function(e){m&&m(!0,e)},h=o().createElement(l.Breadcrumb,null,o().createElement(l.BreadcrumbItem,{to:p||"#"},n("common.kafka_instance")),o().createElement(l.BreadcrumbItem,{to:"#",isActive:!0},d||n("common.kafka_instance_name"))),k=[o().createElement(l.DropdownItem,{key:"view-kafka",onClick:function(){return y("details")}},n("common.view_instance")),o().createElement(l.DropdownItem,{key:"connect-kafka",onClick:function(){return y("connection")}},n("common.view_connection")),o().createElement(l.DropdownItem,{key:"delete-kafka",onClick:f},n("common.delete_instance"))];return o().createElement(o().Fragment,null,o().createElement("section",{className:"pf-c-page__main-breadcrumb"},h),o().createElement(l.PageSection,{variant:l.PageSectionVariants.light},o().createElement(l.Level,null,o().createElement(l.Title,{headingLevel:"h1"},d||n("common.kafka_instance_name")),o().createElement(l.Dropdown,{onSelect:function(){g(!v)},toggle:o().createElement(l.KebabToggle,{onToggle:function(e){g(e)},id:"toggle-data-plane"}),isOpen:v,isPlain:!0,dropdownItems:k,position:l.DropdownPosition.right}))),o().createElement(l.PageSection,{variant:l.PageSectionVariants.light,padding:{default:"noPadding"},className:"pf-c-page__main-tabs"},o().createElement(l.Tabs,{activeKey:t,onSelect:function(e,t){var n;switch(t){default:n="dashboard";break;case 2:n="topics";break;case 3:n="consumer-groups";break;case 4:n="acls"}s.push(n)},"data-testid":"pageKafka-tabProperties",className:"pf-m-page-insets"},o().createElement(l.Tab,{title:o().createElement(l.TabTitleText,null,n("dashboard.dashboard")),eventKey:1,"data-testid":"pageKafka-tabDashboard",id:"dashboard-tab-section","aria-label":n("dashboard.dashboard"),tabContentId:"kafka-ui-TabcontentDashboard"}),o().createElement(l.Tab,{title:o().createElement(l.TabTitleText,null,n("topic.topics")),eventKey:2,"data-testid":"pageKafka-tabTopics",id:"topics-tab-section","aria-label":n("topic.topics"),tabContentId:"kafka-ui-TabcontentTopicsList"}),o().createElement(l.Tab,{title:o().createElement(l.TabTitleText,null,n("consumerGroup.consumer_groups")),eventKey:3,"data-testid":"pageKafka-tabConsumers",id:"consumer-groups-tab-section","aria-label":n("consumerGroup.consumer_groups"),tabContentId:"kafka-ui-TabcontentConsumersList"}),o().createElement(l.Tab,{title:o().createElement(l.TabTitleText,null,n("permission.tab.label")),eventKey:4,"data-testid":"pageKafka-tabPermissions",id:"permissions-tab-section","aria-label":n("permission.tab.label"),tabContentId:"kafka-ui-TabcontentPermissions"}))))}},64517:(e,t,n)=>{n.d(t,{J:()=>o,S:()=>r});var a=n(75418),o=n.n(a)().createContext(void 0),r=function(){return(0,a.useContext)(o)}},41087:(e,t,n)=>{n.r(t),n.d(t,{default:()=>B});var a=n(75418),o=n.n(a),r=n(84669),i=n(98068),l=n(31521),c=n(63052),s=n(27577),u=n(46332),p=n(28942),d=n(91070),m=n(82639),f=n(70251),b=n(97416),v=function(e){var t=e.total,n=void 0===t?0:t,i=e.page,c=e.perPage,s=e.setFilteredValue,u=e.filteredValue,p=void 0===u?"":u,d=e.onCreateTopic,v=(0,l.useTranslation)().t,g=(0,a.useState)(""),y=g[0],h=g[1],k=o().createElement(o().Fragment,null,o().createElement(r.ToolbarFilter,{chips:p?[p]:[],deleteChip:function(){s("")},categoryName:""},o().createElement(r.InputGroup,null,o().createElement(r.TextInput,{name:"searchName",id:"search-topics-input",type:"search","aria-label":v("topic.topic_search_input"),placeholder:v("common.search"),value:y,onChange:function(e){h(e)}}),o().createElement(r.Button,{variant:r.ButtonVariant.control,isDisabled:!y.length,onClick:function(){s(y),h("")},"aria-label":v("topic.topic_search")},o().createElement(f.SearchIcon,null))))),T=[{item:o().createElement(r.Button,{id:"topic-list-create-topic-button",className:"topics-per-page","data-testid":"actionCreateTopic",onClick:d},v("topic.create_topic"))}];return n>0&&T.push({item:o().createElement(m.wu,{widgetId:"consumer-group-pagination-options-menu-top",itemCount:n,page:i,perPage:c,titles:{paginationTitle:v("common.minimal_pagination"),perPageSuffix:v("common.per_page_suffix"),toFirstPage:v("common.to_first_page"),toPreviousPage:v("common.to_previous_page"),toLastPage:v("common.to_last_page"),toNextPage:v("common.to_next_page"),optionsToggle:v("common.options_toggle"),currPage:v("common.curr_page")}}),variant:"pagination",alignment:{default:"alignRight"}}),o().createElement(b.L,{toolbarProps:{id:"instance-toolbar",clearAllFilters:function(){s("")},collapseListedFiltersBreakpoint:"md",inset:{xl:"insetLg"}},toggleGroupProps:{toggleIcon:"",breakpoint:"md"},toggleGroupItems:k,toolbarItems:T})},g=n(1787),y=function(e){var t,n=e.total,a=e.page,c=e.perPage,f=e.setFilteredValue,b=e.filteredValue,y=e.onCreateTopic,h=e.topicItems,k=e.rowDataTestId,T=e.onEdit,w=e.onDeleteTopic,E=e.refreshTopics,P=e.onSort,I=e.sortBy,_=(0,l.useTranslation)().t,S=(0,u.useModal)().showModal,O=(0,((0,u.useBasename)()||{getBasename:function(){return""}}).getBasename)(),C=[{title:_("common.name")},{title:_("common.partitions"),transforms:[s.sortable]},{title:_("topic.retention_time"),transforms:[s.sortable]},{title:_("topic.retention_size"),transforms:[s.sortable]}],N=function(e,t){var n,a=e.name,o=void 0===a?"":a;"delete"===t?(n=o,S(u.ModalType.KafkaDeleteTopic,{topicName:n,onDeleteTopic:w,refreshTopics:E})):"edit"===t&&T&&T(o)},B=(t=[],null==h||h.map((function(e){var n,a,r=e.name,l=e.partitions,c=e.config,s=(null===(n=null==c?void 0:c.filter((function(e){return"retention.ms"===e.key}))[0])||void 0===n?void 0:n.value)||0,u=(null===(a=null==c?void 0:c.filter((function(e){return"retention.bytes"===e.key}))[0])||void 0===a?void 0:a.value)||0;t.push({cells:[{title:o().createElement(i.Link,{"data-testid":"tableTopics-linkTopic",to:"".concat(O,"/topics/").concat(r)},r)},null==l?void 0:l.length,(0,g.eA)(s),(0,g.Cv)(u)],originalData:e})})),t);return o().createElement(o().Fragment,null,o().createElement(v,{total:n,page:a,perPage:c,onCreateTopic:y,setFilteredValue:f,filteredValue:b}),o().createElement(p.w,{tableProps:{cells:C,rows:B,"aria-label":_("topic.topic_list_table"),actionResolver:function(e){var t,n,a=e.originalData;return[(t={title:_("common.delete")},t["data-testid"]="tableTopics-actionDelete",t.onClick=function(){return N(a,"delete")},t),(n={title:_("common.edit")},n["data-testid"]="tableTopics-actionEdit",n.onClick=function(){return N(a,"edit")},n)]},shouldDefaultCustomRowWrapper:!0,variant:s.TableVariant.compact,onSort:P,sortBy:I},rowDataTestId:k||"tableTopics-row"}),(null==h?void 0:h.length)<1&&b.length>0&&o().createElement(d.u,{emptyStateProps:{variant:d.j.NoResult},titleProps:{title:_("common.no_results_title")},emptyStateBodyProps:{body:_("common.no_results_body")}}),n>0&&o().createElement(m.wu,{widgetId:"consumer-group-pagination-options-menu-bottom",itemCount:n,variant:r.PaginationVariant.bottom,page:a,perPage:c,titles:{paginationTitle:_("common.full_pagination"),perPageSuffix:_("common.per_page_suffix"),toFirstPage:_("common.to_first_page"),toPreviousPage:_("common.to_previous_page"),toLastPage:_("common.to_last_page"),toNextPage:_("common.to_next_page"),optionsToggle:_("common.options_toggle"),currPage:_("common.curr_page")}}))},h=n(4055),k=n(60540),T=n(64517),w=n(3654),E=n(5736),P=function(e,t,n,a){return new(n||(n=Promise))((function(o,r){function i(e){try{c(a.next(e))}catch(e){r(e)}}function l(e){try{c(a.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((a=a.apply(e,t||[])).next())}))},I=function(e,t){var n,a,o,r,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return r={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function l(r){return function(l){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,a&&(o=2&r[0]?a.return:r[0]?a.throw||((o=a.return)&&o.call(a),0):a.next)&&!(o=o.call(a,r[1])).done)return o;switch(a=0,o&&(r=[2&r[0],o.value]),r[0]){case 0:case 1:o=r;break;case 4:return i.label++,{value:r[1],done:!1};case 5:i.label++,a=r[1],r=[0];continue;case 7:r=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==r[0]&&2!==r[0])){i=0;continue}if(3===r[0]&&(!o||r[1]>o[0]&&r[1]<o[3])){i.label=r[1];break}if(6===r[0]&&i.label<o[1]){i.label=o[1],o=r;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(r);break}o[2]&&i.ops.pop(),i.trys.pop();continue}r=t.call(e,i)}catch(e){r=[6,e],a=0}finally{n=o=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,l])}}},_=function(){var e=((0,T.S)()||{}).onError,t=(0,l.useTranslation)().t,n=((0,u.useAlert)()||{addAlert:function(){}}).addAlert,s=(0,a.useContext)(w.E),p=(0,m.hI)()||{},f=p.page,b=void 0===f?1:f,v=p.perPage,g=void 0===v?10:v,_=(0,i.useHistory)(),S=(0,((0,u.useBasename)()||{getBasename:function(){return""}}).getBasename)(),O=(0,a.useState)(),C=O[0],N=O[1],B=(0,a.useState)(""),D=B[0],x=B[1],R=(0,a.useState)(0),j=R[0],A=R[1],F=(0,a.useState)(),L=F[0],M=F[1],K=(0,a.useState)(),U=K[0],V=K[1],G=(0,a.useState)({index:0,direction:"asc"}),z=G[0],Y=G[1];(0,a.useEffect)((function(){q()}),[D,L,U]),(0,c.K)((function(){return q()}),5e3),(0,a.useEffect)((function(){A(g*(b-1))}),[b,g]);var H=function(){_.push("".concat(S,"/topic/create"))},W=function(e){_.push("".concat(S,"/topic/update/").concat(e))},J=function(e){W&&W(e)},$=function(e,t,n){V({0:"name",1:"partitions",2:"retention.ms",3:"retention.bytes"}[t]),M(n),Y({index:t,direction:n})},q=function(){return P(void 0,void 0,void 0,(function(){var t,a,o,i,l;return I(this,(function(c){switch(c.label){case 0:return c.trys.push([0,2,,3]),[4,(0,k.BB)(s,100,g,D,j,L,U).then((function(e){N(null==e?void 0:e.items)}))];case 1:return c.sent(),[3,3];case 2:return t=c.sent(),a=void 0,o=void 0,t&&(0,E.I)(t)&&(o=null===(i=t.response)||void 0===i?void 0:i.data.code,a=null===(l=t.response)||void 0===l?void 0:l.data.error_message),e&&401===o?e(o,a):n({title:a||"",variant:r.AlertVariant.danger}),[3,3];case 3:return[2]}}))}))};return o().createElement(o().Fragment,null,o().createElement(r.Card,{className:"kafka-ui-m-full-height","data-ouia-page-id":"tableTopics"},void 0===C?o().createElement(r.PageSection,{className:"kafka-ui-m-full-height",variant:r.PageSectionVariants.light,padding:{default:"noPadding"}},o().createElement(h.y,null)):C.length<1&&D.length<1?o().createElement(d.u,{emptyStateProps:{variant:d.j.NoItems,"data-ouia-page-id":"emptyStateTopics"},titleProps:{title:t("topic.empty_topics_title")},emptyStateBodyProps:{body:t("topic.empty_topics_body")},buttonProps:{title:t("topic.create_topic"),onClick:H,"data-testid":"actionCreateTopic"}}):C?o().createElement(y,{total:C.length||0,page:b,perPage:g,onCreateTopic:H,topicItems:D?null==C?void 0:C.slice(0,g):null==C?void 0:C.slice(C.length>1?j:0,j+g),filteredValue:D,setFilteredValue:x,refreshTopics:q,onEdit:J,onSort:$,sortBy:z}):o().createElement(o().Fragment,null)))};var S=n(97919),O=n(35380),C=n(2766),N=n(68640);n(41781);const B=function(e){var t=e.kafkaName,n=e.kafkaPageLink,a=e.handleInstanceDrawer,i=e.redirectAfterDeleteInstance,c=e.kafka,s=e.onError,p=e.apiBasePath,d=e.getToken,f=(0,u.useModal)().showModal;return o().createElement(l.I18nextProvider,{i18n:O.Z},o().createElement(w.E.Provider,{value:{basePath:p,getToken:d}},o().createElement(T.J.Provider,{value:{kafkaName:t,kafkaPageLink:n,handleInstanceDrawer:a,kafka:c,redirectAfterDeleteInstance:i,onError:s,onDeleteInstance:function(){f&&f(u.ModalType.KasDeleteInstance,{kafka:c,onDelete:i})}}},o().createElement(S.ModalProvider,null,o().createElement(m.bN,null,o().createElement(C.$,{activeTabKey:2}),o().createElement(r.PageSection,{isFilled:!0},o().createElement(_,null),o().createElement(N.J,null)))))))}},1787:(e,t,n)=>{n.d(t,{FB:()=>l,$X:()=>c,UC:()=>a,KP:()=>o,AV:()=>s,yN:()=>p,eA:()=>m,Cv:()=>f,qS:()=>v,az:()=>g});var a,o,r=function(){return r=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)},i=function(e,t,n){if(n||2===arguments.length)for(var a,o=0,r=t.length;o<r;o++)!a&&o in t||(a||(a=Array.prototype.slice.call(t,0,o)),a[o]=t[o]);return e.concat(a||Array.prototype.slice.call(t))},l=function(e){return e.split("-").map((function(e,t){return t>0?(n=e).charAt(0).toUpperCase()+n.slice(1):e;var n})).join("")},c=function(e){return"string"==typeof e?e.replace(/-/g,"."):e};!function(e){e.MILLISECOND="milliseconds",e.SECOND="seconds",e.MINUTE="minutes",e.HOUR="hours",e.DAY="day",e.WEEK="weeks",e.CUSTOM="custom",e.UNLIMITED="unlimited"}(a||(a={})),function(e){e.BYTE="bytes",e.KIBIBYTE="kibibytes",e.MEBIBYTE="mebibytes",e.GIBIBYTE="gibibytes",e.TEBIBYTE="tebibytes",e.CUSTOM="custom",e.UNLIMITED="unlimited"}(o||(o={}));var s={bytes:1,kibibytes:1024,mebibytes:1048576,gibibytes:1073741824,tebibytes:10995116e5},u={milliseconds:1,seconds:1e3,minutes:6e4,hours:36e5,days:864e5},p=r(r({},u),{day:1,weeks:7}),d=function(e){if(e){if(e%u.days==0)return{value:e/u.days,unit:"days"};if(e%u.hours==0)return{value:e/u.hours,unit:"hours"};if(e%u.minutes==0)return{value:e/u.minutes,unit:"minutes"};if(e%u.seconds==0)return{value:e/u.seconds,unit:"seconds"}}return{value:e,unit:"milliseconds"}},m=function(e){var t=d(e),n=t.unit,a=t.value;return-1===Number(a)?"Unlimited":"".concat(e," ms (").concat(a," ").concat(n,")")},f=function(e){var t=b(e),n=t.unit,a=t.value;return-1===Number(a)?"Unlimited":"".concat(e," bytes (").concat(a," ").concat(n,")")},b=function(e){if(e){if(e%s.tebibytes==0)return{value:e/s.tebibytes,unit:"tebibytes"};if(e%s.gibibytes==0)return{value:e/s.gibibytes,unit:"gibibytes"};if(e%s.mebibytes==0)return{value:e/s.mebibytes,unit:"mebibytes"};if(e%s.kibibytes==0)return{value:e/s.kibibytes,unit:"kibibytes"}}return{value:e,unit:"bytes"}},v=function(e){var t,n=r({},e),i={};return null===(t=null==n?void 0:n.config)||void 0===t||t.forEach((function(e){var t=e.key,n=void 0===t?"":t,r=e.value;if("retention.ms"===n&&Number(r)>=0){var l=d(Number(r)),c=l.value,s=l.unit;i[n]=c,i["".concat(n,".unit")]=s,i.selectedRetentionTimeOption=a.CUSTOM}else"retention.ms"===n&&-1===Number(r)&&(i.selectedRetentionTimeOption=a.UNLIMITED);if("retention.bytes"===n&&Number(r)>=0){var u=b(Number(r));c=u.value,s=u.unit;i[n]=c,i["".concat(n,".unit")]=s,i.selectedRetentionSizeOption=o.CUSTOM}else"retention.bytes"===n&&-1===Number(r)&&(i.selectedRetentionSizeOption=o.UNLIMITED);"cleanup.policy"===n&&(i[n]=r||"delete")})),i},g=function(e,t){void 0===t&&(t=[]);var n=i(["retention.ms","retention.bytes","flush.messages"],t,!0),l=["retention.ms.unit","retention.bytes.unit","selectedRetentionTimeOption","selectedRetentionSizeOption"],c=r({},e),p=[];for(var d in c){var m=void 0;if(n.includes(d))if(c.selectedRetentionTimeOption===a.UNLIMITED&&"retention.ms"===d||c.selectedRetentionSizeOption===o.UNLIMITED&&"retention.bytes"===d)m="-1";else if("retention.ms"===d||"retention.bytes"===d){var f="retention.ms"===d?u[c["".concat(d,".unit")]||"milliseconds"]:s[c["".concat(d,".unit")]||"bytes"];m=Number(c[d])*f}else m=c[d];("unit"===d.split(".").pop()||l.includes(d))&&delete c[d],m&&d&&p.push({key:d,value:m.toString()})}return{name:c.name,settings:{numPartitions:Number(c.numPartitions),config:p}}}},60540:(e,t,n)=>{n.d(t,{BB:()=>c,Rh:()=>s,eR:()=>p,BN:()=>d,BK:()=>m});var a,o=n(23587),r=n(27577),i=function(e,t,n,a){return new(n||(n=Promise))((function(o,r){function i(e){try{c(a.next(e))}catch(e){r(e)}}function l(e){try{c(a.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((a=a.apply(e,t||[])).next())}))},l=function(e,t){var n,a,o,r,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return r={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function l(r){return function(l){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,a&&(o=2&r[0]?a.return:r[0]?a.throw||((o=a.return)&&o.call(a),0):a.next)&&!(o=o.call(a,r[1])).done)return o;switch(a=0,o&&(r=[2&r[0],o.value]),r[0]){case 0:case 1:o=r;break;case 4:return i.label++,{value:r[1],done:!1};case 5:i.label++,a=r[1],r=[0];continue;case 7:r=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==r[0]&&2!==r[0])){i=0;continue}if(3===r[0]&&(!o||r[1]>o[0]&&r[1]<o[3])){i.label=r[1];break}if(6===r[0]&&i.label<o[1]){i.label=o[1],o=r;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(r);break}o[2]&&i.ops.pop(),i.trys.pop();continue}r=t.call(e,i)}catch(e){r=[6,e],a=0}finally{n=o=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,l])}}};!function(e){e.name="name",e.partitions="partitions",e.retentionMs="retention.ms",e.retentionSize="retention.bytes"}(a||(a={}));var c=function(e,t,n,a,c,s,u){return void 0===s&&(s=r.SortByDirection.asc),i(void 0,void 0,Promise,(function(){var r;return l(this,(function(i){switch(i.label){case 0:return[4,null==e?void 0:e.getToken()];case 1:return r=i.sent(),[4,new o.TopicsApi(new o.Configuration({accessToken:r,basePath:null==e?void 0:e.basePath})).getTopics(c,t,n,a,void 0,s,u)];case 2:return[2,i.sent().data]}}))}))},s=function(e,t){return i(void 0,void 0,Promise,(function(){var n,a;return l(this,(function(r){switch(r.label){case 0:return[4,null==t?void 0:t.getToken()];case 1:return n=r.sent(),[4,new o.TopicsApi(new o.Configuration({accessToken:n,basePath:null==t?void 0:t.basePath})).getTopic(e)];case 2:return a=r.sent().data,[2,u(a)]}}))}))},u=function(e){var t,n,a,o={name:"",numPartitions:"0"};return e&&e.name&&(o.name=e.name),null===(t=e.config)||void 0===t||t.forEach((function(e){e.key&&(o[e.key]=e.value)})),o.numPartitions=(null===(n=null==e?void 0:e.partitions)||void 0===n?void 0:n.length.toString())||"0",o.replicationFactor=(null==e?void 0:e.partitions)&&(null===(a=null==e?void 0:e.partitions[0].replicas)||void 0===a?void 0:a.length.toString())||"0",o},p=function(e,t,n){return i(void 0,void 0,Promise,(function(){var a;return l(this,(function(r){switch(r.label){case 0:return[4,null==n?void 0:n.getToken()];case 1:return a=r.sent(),[4,new o.TopicsApi(new o.Configuration({accessToken:a,basePath:null==n?void 0:n.basePath})).updateTopic(e,t)];case 2:return[2,r.sent().status]}}))}))},d=function(e,t){return i(void 0,void 0,Promise,(function(){var n,a,r,i,c,s;return l(this,(function(l){switch(l.label){case 0:return[4,null==t?void 0:t.getToken()];case 1:return n=l.sent(),[4,new o.TopicsApi(new o.Configuration({accessToken:n,basePath:null==t?void 0:t.basePath})).getTopic(e)];case 2:return a=l.sent(),(r=a.data).config=r.config||[],r.config.push({key:"replicationFactor",value:null===(s=null===(c=null===(i=a.data)||void 0===i?void 0:i.partitions)||void 0===c?void 0:c.map((function(e){var t;return null===(t=e.replicas)||void 0===t?void 0:t.length})).reduce((function(e,t){return void 0===e&&(e=0),void 0===t&&(t=0),e+t})))||void 0===s?void 0:s.toString()}),[2,a.data]}}))}))},m=function(e,t){return i(void 0,void 0,Promise,(function(){var n;return l(this,(function(a){switch(a.label){case 0:return[4,null==t?void 0:t.getToken()];case 1:return n=a.sent(),[4,new o.TopicsApi(new o.Configuration({accessToken:n,basePath:null==t?void 0:t.basePath})).deleteTopic(e)];case 2:return a.sent(),[2]}}))}))}},5736:(e,t,n)=>{n.d(t,{I:()=>a});var a=function(e){return void 0!==e}}}]);
//# sourceMappingURL=1087.e455b1cd.js.map