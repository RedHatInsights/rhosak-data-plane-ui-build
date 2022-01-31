"use strict";(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[226],{38296:(e,t,n)=>{function a(...e){const t=[],n={}.hasOwnProperty;return e.filter(Boolean).forEach((e=>{const o=typeof e;if("string"===o||"number"===o)t.push(e);else if(Array.isArray(e)&&e.length){const n=a(...e);n&&t.push(n)}else if("object"===o)for(const a in e)n.call(e,a)&&e[a]&&t.push(a)})),t.join(" ")}n.r(t),n.d(t,{css:()=>a})},97416:(e,t,n)=>{n.d(t,{L:()=>s});var a=n(75418),o=n.n(a),r=n(99421),i=function(){return i=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)},l=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(n[a[o]]=e[a[o]])}return n},s=function(e){var t=e.toolbarProps,n=e.toggleGroupProps,a=e.toolbarItems,s=e.toggleGroupItems,c=t.id,u=t.clearAllFilters,p=t.collapseListedFiltersBreakpoint,m=void 0===p?"md":p,d=t.inset,f=l(t,["id","clearAllFilters","collapseListedFiltersBreakpoint","inset"]);return o().createElement(o().Fragment,null,o().createElement(r.Toolbar,i({id:c,clearAllFilters:u,inset:d,collapseListedFiltersBreakpoint:m},f),o().createElement(r.ToolbarContent,null,n&&o().createElement(r.ToolbarToggleGroup,i({},n,{toggleIcon:n.toggleIcon}),s),null==a?void 0:a.map((function(e,t){var n=e.key,a=void 0===n?"mas":n,s=e.variant,c=e.className,u=e.id,p=e.alignment,m=e.item,d=l(e,["key","variant","className","id","alignment","item"]);return o().createElement(r.ToolbarItem,i({key:"".concat(a,"-").concat(t),variant:s,className:c,id:u,alignment:p},d),m)})))))}},2766:(e,t,n)=>{n.d(t,{$:()=>c});var a=n(75418),o=n.n(a),r=n(8898),i=n(68199),l=n(99421),s=n(64517),c=function(e){var t=e.activeTabKey,n=(0,r.useTranslation)(["kafkaTemporaryFixMe"]).t,c=(0,i.useHistory)(),u=(0,s.S)()||{},p=u.kafkaPageLink,m=u.kafkaName,d=u.handleInstanceDrawer,f=u.onDeleteInstance,g=(0,a.useState)(),b=g[0],v=g[1],k=function(e){d&&d(!0,e)},y=o().createElement(l.Breadcrumb,null,o().createElement(l.BreadcrumbItem,{to:p||"#"},n("common.kafka_instance")),o().createElement(l.BreadcrumbItem,{to:"#",isActive:!0},m||n("common.kafka_instance_name"))),h=[o().createElement(l.DropdownItem,{key:"view-kafka",onClick:function(){return k("details")}},n("common.view_instance")),o().createElement(l.DropdownItem,{key:"connect-kafka",onClick:function(){return k("connection")}},n("common.view_connection")),o().createElement(l.DropdownItem,{key:"delete-kafka",onClick:f},n("common.delete_instance"))];return o().createElement(o().Fragment,null,o().createElement("section",{className:"pf-c-page__main-breadcrumb"},y),o().createElement(l.PageSection,{variant:l.PageSectionVariants.light},o().createElement(l.Level,null,o().createElement(l.Title,{headingLevel:"h1"},m||n("common.kafka_instance_name")),o().createElement(l.Dropdown,{onSelect:function(){v(!b)},toggle:o().createElement(l.KebabToggle,{onToggle:function(e){v(e)},id:"toggle-data-plane"}),isOpen:b,isPlain:!0,dropdownItems:h,position:l.DropdownPosition.right}))),o().createElement(l.PageSection,{variant:l.PageSectionVariants.light,padding:{default:"noPadding"},className:"pf-c-page__main-tabs"},o().createElement(l.Tabs,{activeKey:t,onSelect:function(e,t){var n;switch(t){default:n="dashboard";break;case 2:n="topics";break;case 3:n="consumer-groups";break;case 4:n="acls"}c.push(n)},"data-testid":"pageKafka-tabProperties",className:"pf-m-page-insets"},o().createElement(l.Tab,{title:o().createElement(l.TabTitleText,null,n("dashboard.dashboard")),eventKey:1,"data-testid":"pageKafka-tabDashboard",id:"dashboard-tab-section","aria-label":n("dashboard.dashboard"),tabContentId:"kafka-ui-TabcontentDashboard"}),o().createElement(l.Tab,{title:o().createElement(l.TabTitleText,null,n("topic.topics")),eventKey:2,"data-testid":"pageKafka-tabTopics",id:"topics-tab-section","aria-label":n("topic.topics"),tabContentId:"kafka-ui-TabcontentTopicsList"}),o().createElement(l.Tab,{title:o().createElement(l.TabTitleText,null,n("consumerGroup.consumer_groups")),eventKey:3,"data-testid":"pageKafka-tabConsumers",id:"consumer-groups-tab-section","aria-label":n("consumerGroup.consumer_groups"),tabContentId:"kafka-ui-TabcontentConsumersList"}),o().createElement(l.Tab,{title:o().createElement(l.TabTitleText,null,n("permission.tab.label")),eventKey:4,"data-testid":"pageKafka-tabPermissions",id:"permissions-tab-section","aria-label":n("permission.tab.label"),tabContentId:"kafka-ui-TabcontentPermissions"}))))}},9837:(e,t,n)=>{n.d(t,{C:()=>F});var a=n(75418),o=n.n(a),r=n(76621),i=n(8898),l=n(99421),s=n(57294),c=n(82639),u=n(97416),p=function(e){var t=e.deleteSelectedEnabled,n=e.onDeleteSelected,r=(0,i.useTranslation)(["kafkaTemporaryFixMe"]).t,s=(0,a.useState)(!1),c=s[0],u=s[1],p=function(){var e=document.getElementById("permissions-toolbar-kebab-toggle");null==e||e.focus()},m=[o().createElement(l.DropdownItem,{key:"delete_selected",onClick:n,isDisabled:!t},r("permission.table.delete_selected"))];return o().createElement(l.Dropdown,{onSelect:function(){u((function(e){return!e})),p()},toggle:o().createElement(l.KebabToggle,{onToggle:function(e){u(e)},id:"permissions-toolbar-kebab-toggle"}),isOpen:c,isPlain:!0,dropdownItems:m})},m=function(e){var t=e.total,n=void 0===t?0:t,a=e.page,r=e.perPage,s=e.setFilteredValue,m=e.openManagePermissions,d=e.onDeleteSelected,f=e.deletedSelectedEnabled,g=(0,i.useTranslation)(["kafkaTemporaryFixMe"]).t,b=o().createElement(o().Fragment,null),v=[{item:o().createElement(l.Button,{id:"permissions-toolbar-manage-permissions-button","data-testid":"actionManagePermissions",onClick:m},g("permission.table.manage_button"))},{item:o().createElement(p,{deleteSelectedEnabled:f,onDeleteSelected:d})}];return n>0&&v.push({item:o().createElement(c.wu,{widgetId:"permissions-pagination-options-menu-top",itemCount:n,page:a,perPage:r,titles:{paginationTitle:g("common.minimal_pagination"),perPageSuffix:g("common.per_page_suffix"),toFirstPage:g("common.to_first_page"),toPreviousPage:g("common.to_previous_page"),toLastPage:g("common.to_last_page"),toNextPage:g("common.to_next_page"),optionsToggle:g("common.options_toggle"),currPage:g("common.curr_page")},isCompact:!0}),variant:"pagination",alignment:{default:"alignRight"}}),o().createElement(u.L,{toolbarProps:{id:"instance-toolbar",clearAllFilters:function(){s("")},collapseListedFiltersBreakpoint:"md",inset:{xl:"insetLg"}},toggleGroupProps:{toggleIcon:"",breakpoint:"md"},toggleGroupItems:b,toolbarItems:v})},d=n(63052),f=n(43667),g=n(91070),b=function(e){var t=e.openManagePermissions,n=(0,i.useTranslation)(["kafkaTemporaryFixMe"]).t;return o().createElement(g.u,{emptyStateProps:{variant:g.j.NoResult},titleProps:{title:n("permission.table.no_results_title")},emptyStateBodyProps:{body:n("permission.table.no_results_body")},buttonProps:{title:n("permission.table.manage_permissions_button"),onClick:t,"data-testid":"actionManagePermissions"}})},v=n(22806),k=n(7451),y=n(90732),h=function(){return h=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},h.apply(this,arguments)},T=function(e,t,n,a){return new(n||(n=Promise))((function(o,r){function i(e){try{s(a.next(e))}catch(e){r(e)}}function l(e){try{s(a.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}s((a=a.apply(e,t||[])).next())}))},P=function(e,t){var n,a,o,r,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return r={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function l(r){return function(l){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,a&&(o=2&r[0]?a.return:r[0]?a.throw||((o=a.return)&&o.call(a),0):a.next)&&!(o=o.call(a,r[1])).done)return o;switch(a=0,o&&(r=[2&r[0],o.value]),r[0]){case 0:case 1:o=r;break;case 4:return i.label++,{value:r[1],done:!1};case 5:i.label++,a=r[1],r=[0];continue;case 7:r=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==r[0]&&2!==r[0])){i=0;continue}if(3===r[0]&&(!o||r[1]>o[0]&&r[1]<o[3])){i.label=r[1];break}if(6===r[0]&&i.label<o[1]){i.label=o[1],o=r;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(r);break}o[2]&&i.ops.pop(),i.trys.pop();continue}r=t.call(e,i)}catch(e){r=[6,e],a=0}finally{n=o=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,l])}}},w=function(e){var t=e.permissionsService,n=e.kafkaName,u=e.topicNames,p=e.consumerGroupIds,g=(0,i.useTranslation)(["kafkaTemporaryFixMe"]).t,w=(0,a.useState)(""),_=w[0],E=w[1],S=((0,k.useModal)()||{}).showModal,I=(0,a.useState)(),x=I[0],F=I[1],C=(0,c.hI)()||{},L=C.page,N=C.perPage,O=function(){return T(void 0,void 0,void 0,(function(){var e;return P(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,t.getPermissions({resourceName:""!==_?_:void 0},N,L)];case 1:return e=n.sent(),F((function(t){var n;return{items:null===(n=e.items)||void 0===n?void 0:n.map((function(e){var n,a=null===(n=null==t?void 0:t.items)||void 0===n?void 0:n.filter((function(t){return t.hash()===e.hash()})),o=0!==(null==a?void 0:a.length)&&(null==a?void 0:a.every((function(e){return e.selected})))||!1;return h({selected:o},e)})),page:e.page,size:e.size,total:e.total}})),[3,3];case 2:return n.sent(),[3,3];case 3:return[2]}}))}))};(0,a.useEffect)((function(){O()}),[]),(0,a.useEffect)((function(){O()}),[L,N]),(0,d.K)((function(){return O()}),5e3);var D=[{title:g("permission.table.account_column_title")},{title:g("permission.table.permissions_column_title")},{title:g("permission.table.resource_column_title")},{title:""}],A=[f.QG,f.ev,f.C8],K=function(e){S&&S(k.ModalType.KafkaManagePermissions,{selectedAccountId:e,kafkaName:n,acls:(null==x?void 0:x.items)||[],topicNames:u,consumerGroupIds:p,onSave:function(){return T(void 0,void 0,void 0,(function(){return P(this,(function(e){switch(e.label){case 0:return[4,O()];case 1:return e.sent(),[2]}}))}))}})};return void 0===x||void 0===x.items||0===x.items.length?o().createElement(b,{openManagePermissions:function(){return K()}}):o().createElement(o().Fragment,null,o().createElement(m,{total:x.total||0,page:x.page||1,perPage:x.size||10,openManagePermissions:function(){return K()},setFilteredValue:E,filteredValue:_,deletedSelectedEnabled:x.items.some((function(e){return e.selected})),onDeleteSelected:function(){var e;null===(e=null==x?void 0:x.items)||void 0===e||e.filter((function(e){return e.selected})).forEach((function(e){t.deletePermission({resourceName:e.resourceName,patternType:(0,r.L2)(e.patternType,v.AclPatternTypeFilter),permissionType:(0,r.L2)(e.permission,v.AclPermissionTypeFilter),resourceType:(0,r.L2)(e.resourceType,v.AclResourceTypeFilter),operation:(0,r.L2)(e.operation,v.AclOperationFilter),principal:"User:".concat(e.principal)}).then((function(){return O()}))})),O()}}),o().createElement(y.w,{tableProps:{cells:D,rows:x.items.map((function(e,t){return{cells:A.map((function(n){return n(e,t)})),selected:e.selected,originalData:e}})),"aria-label":g("permission.table.permission_list_table"),shouldDefaultCustomRowWrapper:!0,variant:s.TableVariant.compact,onSelect:function(e,t,n){F(-1===n?function(e){var n;if(e)return h({items:null===(n=null==e?void 0:e.items)||void 0===n?void 0:n.map((function(e){return e.selected=t,e}))},e)}:function(e){if(e){var a=null==e?void 0:e.items;return void 0!==a&&(a[n].selected=t),h({items:a},e)}})},actionResolver:function(e,n){var a,o,i=n.rowIndex,l=[(a={title:g("permission.table.row_kebab.manage")},a["data-testid"]="permission-table-row-manage",a.onClick=function(){void 0!==(null==x?void 0:x.items)&&void 0!==i&&K(x.items[i].principal)},a),(o={title:g("permission.table.row_kebab.delete")},o["data-testid"]="permission-table-row-delete",o.onClick=function(){return function(e){if(void 0!==e&&void 0!==(null==x?void 0:x.items)){var n=x.items[e];t.deletePermission({resourceName:n.resourceName,patternType:(0,r.L2)(n.patternType,v.AclPatternTypeFilter),permissionType:(0,r.L2)(n.permission,v.AclPermissionTypeFilter),resourceType:(0,r.L2)(n.resourceType,v.AclResourceTypeFilter),operation:(0,r.L2)(n.operation,v.AclOperationFilter),principal:"User:".concat(n.principal)}).then((function(){return O()}))}}(i)},o)];return l},canSelectAll:!1},rowDataTestId:"tablePermissions-row"}),o().createElement(c.wu,{widgetId:"permissions-pagination-options-menu-bottom",itemCount:x.total||0,variant:l.PaginationVariant.bottom,page:x.page,perPage:x.size,titles:{paginationTitle:g("common.full_pagination"),perPageSuffix:g("common.per_page_suffix"),toFirstPage:g("common.to_first_page"),toPreviousPage:g("common.to_previous_page"),toLastPage:g("common.to_last_page"),toNextPage:g("common.to_next_page"),optionsToggle:g("common.options_toggle"),currPage:g("common.curr_page")}}))},_=n(3654),E=n(60540),S=n(10708),I=function(e,t,n,a){return new(n||(n=Promise))((function(o,r){function i(e){try{s(a.next(e))}catch(e){r(e)}}function l(e){try{s(a.throw(e))}catch(e){r(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}s((a=a.apply(e,t||[])).next())}))},x=function(e,t){var n,a,o,r,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return r={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function l(r){return function(l){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,a&&(o=2&r[0]?a.return:r[0]?a.throw||((o=a.return)&&o.call(a),0):a.next)&&!(o=o.call(a,r[1])).done)return o;switch(a=0,o&&(r=[2&r[0],o.value]),r[0]){case 0:case 1:o=r;break;case 4:return i.label++,{value:r[1],done:!1};case 5:i.label++,a=r[1],r=[0];continue;case 7:r=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==r[0]&&2!==r[0])){i=0;continue}if(3===r[0]&&(!o||r[1]>o[0]&&r[1]<o[3])){i.label=r[1];break}if(6===r[0]&&i.label<o[1]){i.label=o[1],o=r;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(r);break}o[2]&&i.ops.pop(),i.trys.pop();continue}r=t.call(e,i)}catch(e){r=[6,e],a=0}finally{n=o=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,l])}}},F=function(e){var t=e.kafkaName,n=(0,a.useContext)(_.E),i=(0,r.qK)(n),l=(0,a.useState)([]),s=l[0],c=l[1],u=(0,a.useState)([]),p=u[0],m=u[1];return(0,a.useEffect)((function(){I(void 0,void 0,void 0,(function(){var e,t,a;return x(this,(function(o){switch(o.label){case 0:return[4,(0,E.BB)(n)];case 1:return e=o.sent(),t=null===(a=e.items)||void 0===a?void 0:a.map((function(e){return e.name||""})),c(t||[]),[2]}}))}))}),[n]),(0,a.useEffect)((function(){I(void 0,void 0,void 0,(function(){var e,t,a;return x(this,(function(o){switch(o.label){case 0:return[4,(0,S.e5)(n)];case 1:return e=o.sent(),t=null===(a=e.items)||void 0===a?void 0:a.map((function(e){return e.groupId||""})),m(t||[]),[2]}}))}))}),[n]),o().createElement(w,{permissionsService:i,kafkaName:t,topicNames:s,consumerGroupIds:p})}}}]);
