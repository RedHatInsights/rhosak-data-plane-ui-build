"use strict";(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[3380],{38296:(e,t,n)=>{function o(...e){const t=[],n={}.hasOwnProperty;return e.filter(Boolean).forEach((e=>{const i=typeof e;if("string"===i||"number"===i)t.push(e);else if(Array.isArray(e)&&e.length){const n=o(...e);n&&t.push(n)}else if("object"===i)for(const o in e)n.call(e,o)&&e[o]&&t.push(o)})),t.join(" ")}n.r(t),n.d(t,{css:()=>o})},28942:(e,t,n)=>{n.d(t,{w:()=>m});var o=n(75418),i=n.n(o),r=n(27577),a=n(38296),l=function(){return l=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},l.apply(this,arguments)},s=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(n[o[i]]=e[o[i]])}return n},c=(0,o.createContext)({activeRow:"",onRowClick:function(){return""},loggedInUser:""}),u=c.Provider,p=function(e){var t=(0,o.useContext)(c),n=t.activeRow,r=t.onRowClick,u=t.rowDataTestId,p=e||{},d=p.trRef,f=p.className,m=p.rowProps,v=p.row,b=s(p,["trRef","className","rowProps","row"]),g=(m||{}).rowIndex,y=v||{},h=y.isExpanded,w=y.originalData;return i().createElement("tr",l({"data-testid":u,tabIndex:0,ref:"function"==typeof d?void 0:d,className:(0,a.css)(f,"pf-c-table-row__item",n&&n===(null==w?void 0:w.rowId)&&"pf-m-selected pf-m-selectable"),hidden:void 0!==h&&!h,onClick:function(e){return r&&r(e,g,v)}},b))},d=function(){return d=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},d.apply(this,arguments)},f=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(n[o[i]]=e[o[i]])}return n},m=function(e){var t=e.tableProps,n=e.tableHeaderProps,o=e.tableBodyProps,l=e.children,s=e.activeRow,c=e.onRowClick,m=e.rowDataTestId,v=e.loggedInUser,b=t.cells,g=t.rows,y=t.actionResolver,h=t.onSort,w=t.sortBy,T=t["aria-label"],P=t.variant,E=t.className,k=t.shouldDefaultCustomRowWrapper,O=void 0!==k&&k,I=f(t,["cells","rows","actionResolver","onSort","sortBy","aria-label","variant","className","shouldDefaultCustomRowWrapper"]);return O&&(I.rowWrapper=p),i().createElement(u,{value:{activeRow:s,onRowClick:c,rowDataTestId:m,loggedInUser:v}},i().createElement(r.Table,d({className:(0,a.css)(O&&"mas--table-view__table",E),cells:b,variant:P,rows:g,"aria-label":T,actionResolver:y,onSort:h,sortBy:w},I),i().createElement(r.TableHeader,d({},n)),i().createElement(r.TableBody,d({},o)),l))}},97416:(e,t,n)=>{n.d(t,{L:()=>s});var o=n(75418),i=n.n(o),r=n(84669),a=function(){return a=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},a.apply(this,arguments)},l=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(n[o[i]]=e[o[i]])}return n},s=function(e){var t=e.toolbarProps,n=e.toggleGroupProps,o=e.toolbarItems,s=e.toggleGroupItems,c=t.id,u=t.clearAllFilters,p=t.collapseListedFiltersBreakpoint,d=void 0===p?"md":p,f=t.inset,m=l(t,["id","clearAllFilters","collapseListedFiltersBreakpoint","inset"]);return i().createElement(i().Fragment,null,i().createElement(r.Toolbar,a({id:c,clearAllFilters:u,inset:f,collapseListedFiltersBreakpoint:d},m),i().createElement(r.ToolbarContent,null,n&&i().createElement(r.ToolbarToggleGroup,a({},n,{toggleIcon:n.toggleIcon}),s),null==o?void 0:o.map((function(e,t){var n=e.key,o=void 0===n?"mas":n,s=e.variant,c=e.className,u=e.id,p=e.alignment,d=e.item,f=l(e,["key","variant","className","id","alignment","item"]);return i().createElement(r.ToolbarItem,a({key:"".concat(o,"-").concat(t),variant:s,className:c,id:u,alignment:p},f),d)})))))}},93380:(e,t,n)=>{n.r(t),n.d(t,{Topics:()=>I,default:()=>S});var o=n(75418),i=n.n(o),r=n(98068),a=n(31521),l=n(84669),s=n(63052),c=n(27577),u=n(46332),p=n(28942),d=n(91070),f=n(82639),m=n(70251),v=n(97416),b=function(e){var t=e.total,n=void 0===t?0:t,r=e.page,s=e.perPage,c=e.setFilteredValue,u=e.filteredValue,p=void 0===u?"":u,d=e.onCreateTopic,b=(0,a.useTranslation)().t,g=(0,o.useState)(""),y=g[0],h=g[1],w=i().createElement(i().Fragment,null,i().createElement(l.ToolbarFilter,{chips:p?[p]:[],deleteChip:function(){c("")},categoryName:""},i().createElement(l.InputGroup,null,i().createElement(l.TextInput,{name:"searchName",id:"search-topics-input",type:"search","aria-label":b("topic.topic_search_input"),placeholder:b("common.search"),value:y,onChange:function(e){h(e)}}),i().createElement(l.Button,{variant:l.ButtonVariant.control,isDisabled:!y.length,onClick:function(){c(y),h("")},"aria-label":b("topic.topic_search")},i().createElement(m.SearchIcon,null))))),T=[{item:i().createElement(l.Button,{id:"topic-list-create-topic-button",className:"topics-per-page","data-testid":"actionCreateTopic",onClick:d},b("topic.create_topic"))}];return n>0&&T.push({item:i().createElement(f.wu,{widgetId:"consumer-group-pagination-options-menu-top",itemCount:n,page:r,perPage:s,titles:{paginationTitle:b("common.minimal_pagination"),perPageSuffix:b("common.per_page_suffix"),toFirstPage:b("common.to_first_page"),toPreviousPage:b("common.to_previous_page"),toLastPage:b("common.to_last_page"),toNextPage:b("common.to_next_page"),optionsToggle:b("common.options_toggle"),currPage:b("common.curr_page")}}),variant:"pagination",alignment:{default:"alignRight"}}),i().createElement(v.L,{toolbarProps:{id:"instance-toolbar",clearAllFilters:function(){c("")},collapseListedFiltersBreakpoint:"md",inset:{xl:"insetLg"}},toggleGroupProps:{toggleIcon:"",breakpoint:"md"},toggleGroupItems:w,toolbarItems:T})},g=n(1787),y=function(e){var t,n=e.total,o=e.page,s=e.perPage,m=e.setFilteredValue,v=e.filteredValue,y=e.onCreateTopic,h=e.topicItems,w=e.rowDataTestId,T=e.onEdit,P=e.onDeleteTopic,E=e.refreshTopics,k=e.onSort,O=e.sortBy,I=(0,a.useTranslation)().t,S=(0,u.useModal)().showModal,_=(0,((0,u.useBasename)()||{getBasename:function(){return""}}).getBasename)(),C=[{title:I("common.name")},{title:I("common.partitions"),transforms:[c.sortable]},{title:I("topic.retention_time"),transforms:[c.sortable]},{title:I("topic.retention_size"),transforms:[c.sortable]}],B=function(e,t){var n,o=e.name,i=void 0===o?"":o;"delete"===t?(n=i,S(u.ModalType.KafkaDeleteTopic,{topicName:n,onDeleteTopic:P,refreshTopics:E})):"edit"===t&&T&&T(i)},N=(t=[],null==h||h.map((function(e){var n,o,a=e.name,l=e.partitions,s=e.config,c=(null===(n=null==s?void 0:s.filter((function(e){return"retention.ms"===e.key}))[0])||void 0===n?void 0:n.value)||0,u=(null===(o=null==s?void 0:s.filter((function(e){return"retention.bytes"===e.key}))[0])||void 0===o?void 0:o.value)||0;t.push({cells:[{title:i().createElement(r.Link,{"data-testid":"tableTopics-linkTopic",to:"".concat(_,"/topics/").concat(a)},a)},null==l?void 0:l.length,(0,g.eA)(c),(0,g.Cv)(u)],originalData:e})})),t);return i().createElement(i().Fragment,null,i().createElement(b,{total:n,page:o,perPage:s,onCreateTopic:y,setFilteredValue:m,filteredValue:v}),i().createElement(p.w,{tableProps:{cells:C,rows:N,"aria-label":I("topic.topic_list_table"),actionResolver:function(e){var t,n,o=e.originalData;return[(t={title:I("common.delete")},t["data-testid"]="tableTopics-actionDelete",t.onClick=function(){return B(o,"delete")},t),(n={title:I("common.edit")},n["data-testid"]="tableTopics-actionEdit",n.onClick=function(){return B(o,"edit")},n)]},shouldDefaultCustomRowWrapper:!0,variant:c.TableVariant.compact,onSort:k,sortBy:O},rowDataTestId:w||"tableTopics-row"}),(null==h?void 0:h.length)<1&&v.length>0&&i().createElement(d.u,{emptyStateProps:{variant:d.j.NoResult},titleProps:{title:I("common.no_results_title")},emptyStateBodyProps:{body:I("common.no_results_body")}}),n>0&&i().createElement(f.wu,{widgetId:"consumer-group-pagination-options-menu-bottom",itemCount:n,variant:l.PaginationVariant.bottom,page:o,perPage:s,titles:{paginationTitle:I("common.full_pagination"),perPageSuffix:I("common.per_page_suffix"),toFirstPage:I("common.to_first_page"),toPreviousPage:I("common.to_previous_page"),toLastPage:I("common.to_last_page"),toNextPage:I("common.to_next_page"),optionsToggle:I("common.options_toggle"),currPage:I("common.curr_page")}}))},h=n(4055),w=n(60540),T=n(64517),P=n(3654),E=n(5736),k=function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function a(e){try{s(o.next(e))}catch(e){r(e)}}function l(e){try{s(o.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,l)}s((o=o.apply(e,t||[])).next())}))},O=function(e,t){var n,o,i,r,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function l(r){return function(l){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(i=2&r[0]?o.return:r[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,r[1])).done)return i;switch(o=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return a.label++,{value:r[1],done:!1};case 5:a.label++,o=r[1],r=[0];continue;case 7:r=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==r[0]&&2!==r[0])){a=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){a.label=r[1];break}if(6===r[0]&&a.label<i[1]){a.label=i[1],i=r;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(r);break}i[2]&&a.ops.pop(),a.trys.pop();continue}r=t.call(e,a)}catch(e){r=[6,e],o=0}finally{n=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,l])}}},I=function(){var e=((0,T.S)()||{}).onError,t=(0,a.useTranslation)().t,n=((0,u.useAlert)()||{addAlert:function(){}}).addAlert,c=(0,o.useContext)(P.E),p=(0,f.hI)()||{},m=p.page,v=void 0===m?1:m,b=p.perPage,g=void 0===b?10:b,I=(0,r.useHistory)(),S=(0,((0,u.useBasename)()||{getBasename:function(){return""}}).getBasename)(),_=(0,o.useState)(),C=_[0],B=_[1],N=(0,o.useState)(""),x=N[0],R=N[1],D=(0,o.useState)(0),j=D[0],F=D[1],A=(0,o.useState)(),U=A[0],L=A[1],M=(0,o.useState)(),V=M[0],G=M[1],z=(0,o.useState)({index:0,direction:"asc"}),K=z[0],Y=z[1];(0,o.useEffect)((function(){$()}),[x,U,V]),(0,s.K)((function(){return $()}),5e3),(0,o.useEffect)((function(){F(g*(v-1))}),[v,g]);var W=function(){I.push("".concat(S,"/topic/create"))},H=function(e){I.push("".concat(S,"/topic/update/").concat(e))},q=function(e){H&&H(e)},X=function(e,t,n){G({0:"name",1:"partitions",2:"retention.ms",3:"retention.bytes"}[t]),L(n),Y({index:t,direction:n})},$=function(){return k(void 0,void 0,void 0,(function(){var t,o,i,r,a;return O(this,(function(s){switch(s.label){case 0:return s.trys.push([0,2,,3]),[4,(0,w.BB)(c,100,g,x,j,U,V).then((function(e){B(null==e?void 0:e.items)}))];case 1:return s.sent(),[3,3];case 2:return t=s.sent(),o=void 0,i=void 0,t&&(0,E.I)(t)&&(i=null===(r=t.response)||void 0===r?void 0:r.data.code,o=null===(a=t.response)||void 0===a?void 0:a.data.error_message),e&&401===i?e(i,o):n({title:o||"",variant:l.AlertVariant.danger}),[3,3];case 3:return[2]}}))}))};return i().createElement(i().Fragment,null,i().createElement(l.Card,{className:"kafka-ui-m-full-height","data-ouia-page-id":"tableTopics"},void 0===C?i().createElement(l.PageSection,{className:"kafka-ui-m-full-height",variant:l.PageSectionVariants.light,padding:{default:"noPadding"}},i().createElement(h.y,null)):C.length<1&&x.length<1?i().createElement(d.u,{emptyStateProps:{variant:d.j.NoItems,"data-ouia-page-id":"emptyStateTopics"},titleProps:{title:t("topic.empty_topics_title")},emptyStateBodyProps:{body:t("topic.empty_topics_body")},buttonProps:{title:t("topic.create_topic"),onClick:W,"data-testid":"actionCreateTopic"}}):C?i().createElement(y,{total:C.length||0,page:v,perPage:g,onCreateTopic:W,topicItems:x?null==C?void 0:C.slice(0,g):null==C?void 0:C.slice(j,j+g),filteredValue:x,setFilteredValue:R,refreshTopics:$,onEdit:q,onSort:X,sortBy:K}):i().createElement(i().Fragment,null)))};const S=I},1787:(e,t,n)=>{n.d(t,{FB:()=>l,$X:()=>s,UC:()=>o,KP:()=>i,AV:()=>c,yN:()=>p,eA:()=>f,Cv:()=>m,qS:()=>b,az:()=>g});var o,i,r=function(){return r=Object.assign||function(e){for(var t,n=1,o=arguments.length;n<o;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},r.apply(this,arguments)},a=function(e,t,n){if(n||2===arguments.length)for(var o,i=0,r=t.length;i<r;i++)!o&&i in t||(o||(o=Array.prototype.slice.call(t,0,i)),o[i]=t[i]);return e.concat(o||Array.prototype.slice.call(t))},l=function(e){return e.split("-").map((function(e,t){return t>0?(n=e).charAt(0).toUpperCase()+n.slice(1):e;var n})).join("")},s=function(e){return"string"==typeof e?e.replace(/-/g,"."):e};!function(e){e.MILLISECOND="milliseconds",e.SECOND="seconds",e.MINUTE="minutes",e.HOUR="hours",e.DAY="day",e.WEEK="weeks",e.CUSTOM="custom",e.UNLIMITED="unlimited"}(o||(o={})),function(e){e.BYTE="bytes",e.KIBIBYTE="kibibytes",e.MEBIBYTE="mebibytes",e.GIBIBYTE="gibibytes",e.TEBIBYTE="tebibytes",e.CUSTOM="custom",e.UNLIMITED="unlimited"}(i||(i={}));var c={bytes:1,kibibytes:1024,mebibytes:1048576,gibibytes:1073741824,tebibytes:10995116e5},u={milliseconds:1,seconds:1e3,minutes:6e4,hours:36e5,days:864e5},p=r(r({},u),{day:1,weeks:7}),d=function(e){if(e){if(e%u.days==0)return{value:e/u.days,unit:"days"};if(e%u.hours==0)return{value:e/u.hours,unit:"hours"};if(e%u.minutes==0)return{value:e/u.minutes,unit:"minutes"};if(e%u.seconds==0)return{value:e/u.seconds,unit:"seconds"}}return{value:e,unit:"milliseconds"}},f=function(e){var t=d(e),n=t.unit,o=t.value;return-1===Number(o)?"Unlimited":"".concat(e," ms (").concat(o," ").concat(n,")")},m=function(e){var t=v(e),n=t.unit,o=t.value;return-1===Number(o)?"Unlimited":"".concat(e," bytes (").concat(o," ").concat(n,")")},v=function(e){if(e){if(e%c.tebibytes==0)return{value:e/c.tebibytes,unit:"tebibytes"};if(e%c.gibibytes==0)return{value:e/c.gibibytes,unit:"gibibytes"};if(e%c.mebibytes==0)return{value:e/c.mebibytes,unit:"mebibytes"};if(e%c.kibibytes==0)return{value:e/c.kibibytes,unit:"kibibytes"}}return{value:e,unit:"bytes"}},b=function(e){var t,n=r({},e),a={};return null===(t=null==n?void 0:n.config)||void 0===t||t.forEach((function(e){var t=e.key,n=void 0===t?"":t,r=e.value;if("retention.ms"===n&&Number(r)>=0){var l=d(Number(r)),s=l.value,c=l.unit;a[n]=s,a["".concat(n,".unit")]=c,a.selectedRetentionTimeOption=o.CUSTOM}else"retention.ms"===n&&-1===Number(r)&&(a.selectedRetentionTimeOption=o.UNLIMITED);if("retention.bytes"===n&&Number(r)>=0){var u=v(Number(r));s=u.value,c=u.unit;a[n]=s,a["".concat(n,".unit")]=c,a.selectedRetentionSizeOption=i.CUSTOM}else"retention.bytes"===n&&-1===Number(r)&&(a.selectedRetentionSizeOption=i.UNLIMITED);"cleanup.policy"===n&&(a[n]=r||"delete")})),a},g=function(e,t){void 0===t&&(t=[]);var n=a(["retention.ms","retention.bytes","flush.messages"],t,!0),l=["retention.ms.unit","retention.bytes.unit","selectedRetentionTimeOption","selectedRetentionSizeOption"],s=r({},e),p=[];for(var d in s){var f=void 0;if(n.includes(d))if(s.selectedRetentionTimeOption===o.UNLIMITED&&"retention.ms"===d||s.selectedRetentionSizeOption===i.UNLIMITED&&"retention.bytes"===d)f="-1";else if("retention.ms"===d||"retention.bytes"===d){var m="retention.ms"===d?u[s["".concat(d,".unit")]||"milliseconds"]:c[s["".concat(d,".unit")]||"bytes"];f=Number(s[d])*m}else f=s[d];("unit"===d.split(".").pop()||l.includes(d))&&delete s[d],f&&d&&p.push({key:d,value:f.toString()})}return{name:s.name,settings:{numPartitions:Number(s.numPartitions),config:p}}}},60540:(e,t,n)=>{n.d(t,{BB:()=>s,Rh:()=>c,eR:()=>p,BN:()=>d,BK:()=>f});var o,i=n(82625),r=n(27577),a=function(e,t,n,o){return new(n||(n=Promise))((function(i,r){function a(e){try{s(o.next(e))}catch(e){r(e)}}function l(e){try{s(o.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,l)}s((o=o.apply(e,t||[])).next())}))},l=function(e,t){var n,o,i,r,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function l(r){return function(l){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,o&&(i=2&r[0]?o.return:r[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,r[1])).done)return i;switch(o=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return a.label++,{value:r[1],done:!1};case 5:a.label++,o=r[1],r=[0];continue;case 7:r=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==r[0]&&2!==r[0])){a=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){a.label=r[1];break}if(6===r[0]&&a.label<i[1]){a.label=i[1],i=r;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(r);break}i[2]&&a.ops.pop(),a.trys.pop();continue}r=t.call(e,a)}catch(e){r=[6,e],o=0}finally{n=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,l])}}};!function(e){e.name="name",e.partitions="partitions",e.retentionMs="retention.ms",e.retentionSize="retention.bytes"}(o||(o={}));var s=function(e,t,n,o,s,c,u){return void 0===c&&(c=r.SortByDirection.asc),a(void 0,void 0,Promise,(function(){var r;return l(this,(function(a){switch(a.label){case 0:return[4,null==e?void 0:e.getToken()];case 1:return r=a.sent(),[4,new i.TopicsApi(new i.Configuration({accessToken:r,basePath:null==e?void 0:e.basePath})).getTopics(s,t,n,o,void 0,c,u)];case 2:return[2,a.sent().data]}}))}))},c=function(e,t){return a(void 0,void 0,Promise,(function(){var n,o;return l(this,(function(r){switch(r.label){case 0:return[4,null==t?void 0:t.getToken()];case 1:return n=r.sent(),[4,new i.TopicsApi(new i.Configuration({accessToken:n,basePath:null==t?void 0:t.basePath})).getTopic(e)];case 2:return o=r.sent().data,[2,u(o)]}}))}))},u=function(e){var t,n,o,i={name:"",numPartitions:"0"};return e&&e.name&&(i.name=e.name),null===(t=e.config)||void 0===t||t.forEach((function(e){e.key&&(i[e.key]=e.value)})),i.numPartitions=(null===(n=null==e?void 0:e.partitions)||void 0===n?void 0:n.length.toString())||"0",i.replicationFactor=(null==e?void 0:e.partitions)&&(null===(o=null==e?void 0:e.partitions[0].replicas)||void 0===o?void 0:o.length.toString())||"0",i},p=function(e,t,n){return a(void 0,void 0,Promise,(function(){var o;return l(this,(function(r){switch(r.label){case 0:return[4,null==n?void 0:n.getToken()];case 1:return o=r.sent(),[4,new i.TopicsApi(new i.Configuration({accessToken:o,basePath:null==n?void 0:n.basePath})).updateTopic(e,t)];case 2:return[2,r.sent().status]}}))}))},d=function(e,t){return a(void 0,void 0,Promise,(function(){var n,o,r,a,s,c;return l(this,(function(l){switch(l.label){case 0:return[4,null==t?void 0:t.getToken()];case 1:return n=l.sent(),[4,new i.TopicsApi(new i.Configuration({accessToken:n,basePath:null==t?void 0:t.basePath})).getTopic(e)];case 2:return o=l.sent(),(r=o.data).config=r.config||[],r.config.push({key:"replicationFactor",value:null===(c=null===(s=null===(a=o.data)||void 0===a?void 0:a.partitions)||void 0===s?void 0:s.map((function(e){var t;return null===(t=e.replicas)||void 0===t?void 0:t.length})).reduce((function(e,t){return void 0===e&&(e=0),void 0===t&&(t=0),e+t})))||void 0===c?void 0:c.toString()}),[2,o.data]}}))}))},f=function(e,t){return a(void 0,void 0,Promise,(function(){var n;return l(this,(function(o){switch(o.label){case 0:return[4,null==t?void 0:t.getToken()];case 1:return n=o.sent(),[4,new i.TopicsApi(new i.Configuration({accessToken:n,basePath:null==t?void 0:t.basePath})).deleteTopic(e)];case 2:return o.sent(),[2]}}))}))}},5736:(e,t,n)=>{n.d(t,{I:()=>o});var o=function(e){return void 0!==e}}}]);
//# sourceMappingURL=3380.aa30afa1.js.map