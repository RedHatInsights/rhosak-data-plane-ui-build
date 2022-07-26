"use strict";(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[8152],{38296:(e,t,a)=>{function s(...e){const t=[],a={}.hasOwnProperty;return e.filter(Boolean).forEach((e=>{const o=typeof e;if("string"===o||"number"===o)t.push(e);else if(Array.isArray(e)&&e.length){const a=s(...e);a&&t.push(a)}else if("object"===o)for(const s in e)a.call(e,s)&&e[s]&&t.push(s)})),t.join(" ")}a.r(t),a.d(t,{css:()=>s})},55268:(e,t,a)=>{a.d(t,{g:()=>i});var s=a(85893),o=a(73666);const i=()=>(0,s.jsx)(o.Bullseye,{children:(0,s.jsx)(o.Spinner,{})})},90732:(e,t,a)=>{a.d(t,{w:()=>d});var s=a(9922),o=a(85893),i=a(38137),n=a(38296),r=a(93264);const l=(0,r.createContext)({activeRow:"",onRowClick:()=>"",loggedInUser:""}),c=l.Provider,p=e=>{const{activeRow:t,onRowClick:a,rowDataTestId:i}=(0,r.useContext)(l),c=e||{},{trRef:p,className:d,rowProps:u,row:m}=c,g=(0,s.__rest)(c,["trRef","className","rowProps","row"]),{rowIndex:b}=u||{},{isExpanded:v,originalData:T}=m||{};return(0,o.jsx)("tr",Object.assign({"data-testid":i,tabIndex:0,ref:"function"==typeof p?void 0:p,className:(0,n.css)(d,"pf-c-table-row__item",t&&t===(null==T?void 0:T.rowId)&&"pf-m-selected pf-m-selectable"),hidden:void 0!==v&&!v,onClick:e=>a&&a(e,b,m)},g))},d=({tableProps:e,tableHeaderProps:t,tableBodyProps:a,children:r,activeRow:l,onRowClick:d,rowDataTestId:u,loggedInUser:m,ouiaId:g})=>{const{cells:b,rows:v,actionResolver:T,onSort:j,sortBy:f,"aria-label":y,variant:x,className:k,shouldDefaultCustomRowWrapper:h=!1}=e,_=(0,s.__rest)(e,["cells","rows","actionResolver","onSort","sortBy","aria-label","variant","className","shouldDefaultCustomRowWrapper"]);return h&&(_.rowWrapper=p),(0,o.jsx)(c,Object.assign({value:{activeRow:l,onRowClick:d,rowDataTestId:u,loggedInUser:m}},{children:(0,o.jsxs)(i.Table,Object.assign({className:(0,n.css)(h&&"mas--table-view__table",k),cells:b,variant:x,rows:v,"aria-label":y,actionResolver:T,onSort:j,sortBy:f},_,{ouiaId:g},{children:[(0,o.jsx)(i.TableHeader,Object.assign({},t)),(0,o.jsx)(i.TableBody,Object.assign({},a)),r]}))}))}},97416:(e,t,a)=>{a.d(t,{L:()=>n});var s=a(9922),o=a(85893),i=a(73666);const n=({toolbarProps:e,toggleGroupProps:t,toolbarItems:a,toggleGroupItems:n})=>{const{id:r,clearAllFilters:l,collapseListedFiltersBreakpoint:c="md",inset:p}=e,d=(0,s.__rest)(e,["id","clearAllFilters","collapseListedFiltersBreakpoint","inset"]);return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(i.Toolbar,Object.assign({id:r,clearAllFilters:l,inset:p,collapseListedFiltersBreakpoint:c},d,{children:(0,o.jsxs)(i.ToolbarContent,{children:[t&&(0,o.jsx)(i.ToolbarToggleGroup,Object.assign({},t,{toggleIcon:t.toggleIcon},{children:n})),null==a?void 0:a.map(((e,t)=>{const{key:a="mas",variant:n,className:r,id:l,alignment:c,item:p}=e,d=(0,s.__rest)(e,["key","variant","className","id","alignment","item"]);return(0,o.jsx)(i.ToolbarItem,Object.assign({variant:n,className:r,id:l,alignment:c},d,{children:p}),`${a}-${t}`)}))]})}))})}},2766:(e,t,a)=>{a.d(t,{$:()=>c});var s=a(85893),o=a(93264),i=a(5773),n=a(68199),r=a(73666),l=a(64517);const c=({activeTabKey:e})=>{const{t}=(0,i.useTranslation)(["kafkaTemporaryFixMe"]),a=(0,n.useHistory)(),{kafkaPageLink:c,kafkaName:p,handleInstanceDrawer:d,onDeleteInstance:u}=(0,l.S)()||{},[m,g]=(0,o.useState)(),b=e=>{d&&d(!0,e)},v=(0,s.jsxs)(r.Breadcrumb,Object.assign({ouiaId:"breadcrumb"},{children:[(0,s.jsx)(r.BreadcrumbItem,{render:()=>(0,s.jsx)(n.Link,Object.assign({to:c||"#"},{children:t("common.kafka_instance")}))}),(0,s.jsx)(r.BreadcrumbItem,Object.assign({to:"#",isActive:!0},{children:p||t("common.kafka_instance_name")}))]})),T=[(0,s.jsx)(r.DropdownItem,Object.assign({onClick:()=>b("details")},{children:t("common.view_instance")}),"view-kafka"),(0,s.jsx)(r.DropdownItem,Object.assign({onClick:()=>b("connection")},{children:t("common.view_connection")}),"connect-kafka"),(0,s.jsx)(r.DropdownItem,Object.assign({onClick:u},{children:t("common.delete_instance")}),"delete-kafka")];return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("section",Object.assign({className:"pf-c-page__main-breadcrumb"},{children:v})),(0,s.jsx)(r.PageSection,Object.assign({variant:r.PageSectionVariants.light},{children:(0,s.jsxs)(r.Level,{children:[(0,s.jsx)(r.Title,Object.assign({headingLevel:"h1"},{children:p||t("common.kafka_instance_name")})),(0,s.jsx)(r.Dropdown,{onSelect:()=>{g(!m)},toggle:(0,s.jsx)(r.KebabToggle,{"data-ouia-component-id":"kebab-menu",onToggle:e=>{g(e)},id:"toggle-data-plane"}),isOpen:m,isPlain:!0,dropdownItems:T,position:r.DropdownPosition.right})]})})),(0,s.jsx)(r.PageSection,Object.assign({variant:r.PageSectionVariants.light,padding:{default:"noPadding"},className:"pf-c-page__main-tabs"},{children:(0,s.jsxs)(r.Tabs,Object.assign({activeKey:e,onSelect:(e,t)=>{let s;switch(t){case 1:default:s="dashboard";break;case 2:s="topics";break;case 3:s="consumer-groups";break;case 4:s="acls"}a.push(s)},"data-testid":"pageKafka-tabProperties",className:"pf-m-page-insets"},{children:[(0,s.jsx)(r.Tab,{title:(0,s.jsx)(r.TabTitleText,{children:t("dashboard.dashboard")}),eventKey:1,"data-testid":"pageKafka-tabDashboard",id:"dashboard-tab-section","aria-label":t("dashboard.dashboard"),tabContentId:"kafka-ui-TabcontentDashboard",ouiaId:"tab-Dashboard"}),(0,s.jsx)(r.Tab,{title:(0,s.jsx)(r.TabTitleText,{children:t("topic.topics")}),eventKey:2,"data-testid":"pageKafka-tabTopics",id:"topics-tab-section","aria-label":t("topic.topics"),tabContentId:"kafka-ui-TabcontentTopicsList",ouiaId:"tab-Topics"}),(0,s.jsx)(r.Tab,{title:(0,s.jsx)(r.TabTitleText,{children:t("consumerGroup.consumer_groups")}),eventKey:3,"data-testid":"pageKafka-tabConsumers",id:"consumer-groups-tab-section","aria-label":t("consumerGroup.consumer_groups"),tabContentId:"kafka-ui-TabcontentConsumersList",ouiaId:"tab-Consumers"}),(0,s.jsx)(r.Tab,{title:(0,s.jsx)(r.TabTitleText,{children:t("permission.tab.label")}),eventKey:4,"data-testid":"pageKafka-tabPermissions",id:"permissions-tab-section","aria-label":t("permission.tab.label"),tabContentId:"kafka-ui-TabcontentPermissions",ouiaId:"tab-Permissions"})]}))}))]})}},44438:(e,t,a)=>{a.d(t,{j:()=>n});var s=a(85893),o=a(42121),i=a(73666);const n=({variant:e})=>{const{labelColor:t,content:a}=(()=>{switch(e){case o.AclResourceType.Group:return{labelColor:"green",content:"G"};case o.AclResourceType.Cluster:return{labelColor:"grey",content:"KI"};case o.AclResourceType.Topic:return{labelColor:"blue",content:"T"};case o.AclResourceType.TransactionalId:return{labelColor:"orange",content:"TI"}}})();return(0,s.jsx)(i.Label,Object.assign({color:t,className:"mas-m-solid"},{children:a}))}},43667:(e,t,a)=>{a.d(t,{C8:()=>f,QG:()=>T,ev:()=>j});var s=a(9922),o=a(85893),i=a(93264),n=a(5773),r=a(52831),l=a(42121),c=a(73666),p=a(5854),d=a(73866),u=a(87892),m=a(64517),g=a(44438);const b=()=>{const{t:e}=(0,n.useTranslation)(["kafkaTemporaryFixMe"]);return(0,o.jsx)("div",{children:(0,o.jsx)(c.Label,Object.assign({variant:"outline"},{children:e("permission.table.all_accounts")}))})},v=({acl:e})=>{const[t,a]=(0,i.useState)(),n=(0,p.useAuth)(),{kafka:l}=(0,m.S)()||{},d=(0,p.usePrincipals)().getAllPrincipals().filter((e=>e.id!==t&&e.id!==(null==l?void 0:l.owner))).filter((t=>t.id===e.principal));return(0,i.useEffect)((()=>{(0,s.__awaiter)(void 0,void 0,void 0,(function*(){const e=yield null==n?void 0:n.getUsername();a(e)}))}),[n]),1===d.length?d[0].principalType===p.PrincipalType.ServiceAccount?(0,o.jsx)(c.Tooltip,Object.assign({content:(0,o.jsxs)("div",{children:["Type: ",d[0].principalType," ",(0,o.jsx)("br",{})]})},{children:(0,o.jsxs)("span",Object.assign({tabIndex:0},{children:[" ",e.principal," ",(0,o.jsx)(r.InfoCircleIcon,{color:"grey"})]}))})):(0,o.jsx)(c.Tooltip,Object.assign({content:(0,o.jsxs)("div",{children:["Type: ",d[0].principalType," ",(0,o.jsx)("br",{}),"Name: ",d[0].displayName," ",(0,o.jsx)("br",{}),"Email: ",d[0].emailAddress]})},{children:(0,o.jsxs)("span",Object.assign({tabIndex:0},{children:[" ",e.principal," ",(0,o.jsx)(r.InfoCircleIcon,{color:"grey"})]}))})):(0,o.jsxs)("span",{children:[" ",e.principal]})},T=e=>"*"===e.principal?{title:(0,o.jsx)(b,{}),props:{}}:{title:(0,o.jsx)(v,{acl:e}),props:{}},j=e=>({title:(0,o.jsxs)(c.LabelGroup,{children:[e.permission&&(0,o.jsx)(c.Label,Object.assign({variant:"outline",color:e.permission===l.AclPermissionType.Deny?"red":void 0},{children:(0,d.sentenceCase)(e.permission)})),e.operation&&(0,o.jsx)(c.Label,Object.assign({variant:"outline"},{children:(0,d.sentenceCase)(e.operation)}))]}),props:{}}),f=e=>{const t=()=>{const{t}=(0,n.useTranslation)(["kafkaTemporaryFixMe"]);return e.patternType===l.AclPatternType.Prefixed?t("permission.cells.pattern_type_prefixed"):t("permission.cells.pattern_type_literal")};return e.resourceType===l.AclResourceType.Cluster?{title:(0,o.jsxs)("div",{children:[(0,o.jsx)(g.j,{variant:e.resourceType})," ",(0,u.s)(e.resourceType)]})}:{title:(0,o.jsxs)("div",{children:[(0,o.jsx)(g.j,{variant:e.resourceType})," ",(0,u.s)(e.resourceType)," ",(0,o.jsx)(t,{}),' "',e.resourceName,'"']})}}},9837:(e,t,a)=>{a.d(t,{C:()=>w});var s=a(9922),o=a(85893),i=a(93264),n=a(76621),r=a(5773),l=a(73666),c=a(38137),p=a(82639),d=a(97416);const u=({deleteSelectedEnabled:e,onDeleteSelected:t})=>{const{t:a}=(0,r.useTranslation)(["kafkaTemporaryFixMe"]),[s,n]=(0,i.useState)(!1),c=()=>{const e=document.getElementById("permissions-toolbar-kebab-toggle");null==e||e.focus()},p=[(0,o.jsx)(l.DropdownItem,Object.assign({onClick:t,isDisabled:!e},{children:a("permission.table.delete_selected")}),"delete_selected")];return(0,o.jsx)(l.Dropdown,{onSelect:()=>{n((e=>!e)),c()},toggle:(0,o.jsx)(l.KebabToggle,{onToggle:e=>{n(e)},id:"permissions-toolbar-kebab-toggle"}),isOpen:s,isPlain:!0,dropdownItems:p})},m=({total:e=0,page:t,perPage:a,setFilteredValue:s,openManagePermissions:i,onDeleteSelected:n,deletedSelectedEnabled:c})=>{const{t:m}=(0,r.useTranslation)(["kafkaTemporaryFixMe"]),g=(0,o.jsx)(o.Fragment,{}),b=[{item:(0,o.jsx)(l.Button,Object.assign({id:"permissions-toolbar-manage-permissions-button","data-testid":"actionManagePermissions",onClick:i},{children:m("permission.table.manage_button")}))},{item:(0,o.jsx)(u,{deleteSelectedEnabled:c,onDeleteSelected:n})}];return e>0&&b.push({item:(0,o.jsx)(p.wu,{widgetId:"permissions-pagination-options-menu-top",itemCount:e,page:t,perPage:a,titles:{paginationTitle:m("common.minimal_pagination"),perPageSuffix:m("common.per_page_suffix"),toFirstPage:m("common.to_first_page"),toPreviousPage:m("common.to_previous_page"),toLastPage:m("common.to_last_page"),toNextPage:m("common.to_next_page"),optionsToggle:m("common.options_toggle"),currPage:m("common.curr_page")},isCompact:!0}),variant:"pagination",alignment:{default:"alignRight"}}),(0,o.jsx)(d.L,{toolbarProps:{id:"instance-toolbar",clearAllFilters:()=>{s("")},collapseListedFiltersBreakpoint:"md",inset:{xl:"insetLg"}},toggleGroupProps:{toggleIcon:"",breakpoint:"md"},toggleGroupItems:g,toolbarItems:b})};var g=a(63052),b=a(43667),v=a(91070);const T=({openManagePermissions:e})=>{const{t}=(0,r.useTranslation)(["kafkaTemporaryFixMe"]);return(0,o.jsx)(v.u,{emptyStateProps:{variant:v.j.NoResult},titleProps:{title:t("permission.table.no_results_title")},emptyStateBodyProps:{body:t("permission.table.no_results_body")},buttonProps:{title:t("permission.table.manage_permissions_button"),onClick:e,"data-testid":"actionManagePermissions"}})};var j=a(42121),f=a(5854),y=a(55268),x=a(90732);const k=({permissionsService:e,kafkaName:t,topicNames:a,consumerGroupIds:d})=>{const{t:u}=(0,r.useTranslation)(["kafkaTemporaryFixMe"]),[v,k]=(0,i.useState)(""),{showModal:h}=(0,f.useModal)()||{},[_,P]=(0,i.useState)(),{page:w,perPage:C}=(0,p.hI)()||{},I=(0,i.useCallback)((()=>(0,s.__awaiter)(void 0,void 0,void 0,(function*(){try{const t=yield e.getPermissions({resourceName:""!==v?v:void 0},C,w);P((e=>{var a;return{items:null===(a=t.items)||void 0===a?void 0:a.map((t=>{var a;const s=null===(a=null==e?void 0:e.items)||void 0===a?void 0:a.filter((e=>e.hash()===t.hash())),o=0!==(null==s?void 0:s.length)&&(null==s?void 0:s.every((e=>e.selected)))||!1;return Object.assign({selected:o},t)})),page:t.page,size:t.size,total:t.total}}))}catch(e){}}))),[v,w,C,e]);(0,i.useEffect)((()=>{I()}),[I]),(0,i.useEffect)((()=>{I()}),[I,w,C]),(0,g.K)((()=>I()),5e3);const A=[{title:u("permission.table.account_column_title")},{title:u("permission.table.permissions_column_title")},{title:u("permission.table.resource_column_title")},{title:""}],O=[b.QG,b.ev,b.C8],N=e=>{h&&h(f.ModalType.KafkaManagePermissions,{selectedAccountId:e,kafkaName:t,acls:(null==_?void 0:_.items)||[],topicNames:a,consumerGroupIds:d,onSave:()=>(0,s.__awaiter)(void 0,void 0,void 0,(function*(){yield I()}))})};return void 0===_?(0,o.jsx)(y.g,{}):void 0===_.items||0===_.items.length?(0,o.jsx)(T,{openManagePermissions:()=>N()}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(m,{total:_.total||0,page:_.page||1,perPage:_.size||10,openManagePermissions:()=>N(),setFilteredValue:k,filteredValue:v,deletedSelectedEnabled:_.items.some((e=>e.selected)),onDeleteSelected:()=>{var t;null===(t=null==_?void 0:_.items)||void 0===t||t.filter((e=>e.selected)).forEach((t=>{e.deletePermission({resourceName:t.resourceName,patternType:(0,n.L2)(t.patternType,j.AclPatternTypeFilter),permissionType:(0,n.L2)(t.permission,j.AclPermissionTypeFilter),resourceType:(0,n.L2)(t.resourceType,j.AclResourceTypeFilter),operation:(0,n.L2)(t.operation,j.AclOperationFilter),principal:`User:${t.principal}`}).then((()=>I()))})),I()}}),(0,o.jsx)(x.w,{tableProps:{cells:A,rows:_.items.map(((e,t)=>({cells:O.map((a=>a(e,t))),selected:e.selected,originalData:e}))),"aria-label":u("permission.table.permission_list_table"),shouldDefaultCustomRowWrapper:!0,variant:c.TableVariant.compact,onSelect:(e,t,a)=>{P(-1===a?e=>{var a;if(e)return Object.assign({items:null===(a=null==e?void 0:e.items)||void 0===a?void 0:a.map((e=>(e.selected=t,e)))},e)}:e=>{if(e){const s=null==e?void 0:e.items;return void 0!==s&&(s[a].selected=t),Object.assign({items:s},e)}})},actionResolver:(t,{rowIndex:a})=>{const s=[{title:u("permission.table.row_kebab.manage"),"data-testid":"permission-table-row-manage",onClick:()=>{void 0!==(null==_?void 0:_.items)&&void 0!==a&&N(_.items[a].principal)}},{title:u("permission.table.row_kebab.delete"),"data-testid":"permission-table-row-delete",onClick:()=>(t=>{if(void 0!==t&&void 0!==(null==_?void 0:_.items)){const a=_.items[t];e.deletePermission({resourceName:a.resourceName,patternType:(0,n.L2)(a.patternType,j.AclPatternTypeFilter),permissionType:(0,n.L2)(a.permission,j.AclPermissionTypeFilter),resourceType:(0,n.L2)(a.resourceType,j.AclResourceTypeFilter),operation:(0,n.L2)(a.operation,j.AclOperationFilter),principal:`User:${a.principal}`}).then((()=>I()))}})(a)}];return s},canSelectAll:!1},rowDataTestId:"tablePermissions-row"}),(0,o.jsx)(p.wu,{widgetId:"permissions-pagination-options-menu-bottom",itemCount:_.total||0,variant:l.PaginationVariant.bottom,page:_.page,perPage:_.size,titles:{paginationTitle:u("common.full_pagination"),perPageSuffix:u("common.per_page_suffix"),toFirstPage:u("common.to_first_page"),toPreviousPage:u("common.to_previous_page"),toLastPage:u("common.to_last_page"),toNextPage:u("common.to_next_page"),optionsToggle:u("common.options_toggle"),currPage:u("common.curr_page")}})]})};var h=a(3654),_=a(60540),P=a(10708);const w=({kafkaName:e})=>{const t=(0,i.useContext)(h.E),a=(0,n.qK)(t),[r,l]=(0,i.useState)([]),[c,p]=(0,i.useState)([]);return(0,i.useEffect)((()=>{(0,s.__awaiter)(void 0,void 0,void 0,(function*(){var e;const a=null===(e=(yield(0,_.BB)(t)).items)||void 0===e?void 0:e.map((e=>e.name||""));l(a||[])}))}),[t]),(0,i.useEffect)((()=>{(0,s.__awaiter)(void 0,void 0,void 0,(function*(){var e;const a=null===(e=(yield(0,P.e5)(t)).items)||void 0===e?void 0:e.map((e=>e.groupId||""));p(a||[])}))}),[t]),(0,o.jsx)(k,{permissionsService:a,kafkaName:e,topicNames:r,consumerGroupIds:c})}},87892:(e,t,a)=>{a.d(t,{s:()=>i});var s=a(42121),o=a(73866);const i=e=>{switch(e){case s.AclResourceType.Group:return"Consumer group";case s.AclResourceType.Topic:return"Topic";case s.AclResourceType.Cluster:return"Kafka instance";case s.AclResourceType.TransactionalId:return"Transactional ID";default:return(0,o.sentenceCase)(e)}}},76621:(e,t,a)=>{a.d(t,{G6:()=>u,L2:()=>l,mv:()=>d,qK:()=>c,t:()=>g,yN:()=>m});var s=a(9922),o=a(93264),i=a(42121),n=a(9132),r=a.n(n);const l=(e,t)=>{const[,a]=Object.entries(t).find((([,t])=>t===e.toString()))||[];return a},c=e=>{const t=(0,o.useCallback)(((t,a,o)=>(0,s.__awaiter)(void 0,void 0,void 0,(function*(){const s=yield null==e?void 0:e.getToken(),n=new i.AclsApi(new i.Configuration({accessToken:s,basePath:null==e?void 0:e.basePath})),r=yield n.getAcls(t.resourceType,t.resourceName,t.patternType,t.principal,t.operation,t.permissionType,o,a);return p(r)}))),[e]),a=(0,o.useCallback)((t=>(0,s.__awaiter)(void 0,void 0,void 0,(function*(){const a=yield null==e?void 0:e.getToken(),s=new i.AclsApi(new i.Configuration({accessToken:a,basePath:null==e?void 0:e.basePath}));yield s.createAcl(t)}))),[e]),n=(0,o.useCallback)((t=>(0,s.__awaiter)(void 0,void 0,void 0,(function*(){const a=yield null==e?void 0:e.getToken(),s=new i.AclsApi(new i.Configuration({accessToken:a,basePath:null==e?void 0:e.basePath}));yield s.deleteAcls(t.resourceType,t.resourceName,t.patternType,t.principal,t.operation,t.permissionType)}))),[e]),r=(0,o.useCallback)((()=>(0,s.__awaiter)(void 0,void 0,void 0,(function*(){const t=yield null==e?void 0:e.getToken();return new i.AclsApi(new i.Configuration({accessToken:t,basePath:null==e?void 0:e.basePath})).getAclResourceOperations().then((e=>e.data))}))),[e]);return(0,o.useMemo)((()=>({getPermissions:t,addPermission:a,deletePermission:n,getResourceOperations:r})),[t,a,n,r])},p=e=>{var t;return{total:e.data.total,size:e.data.size,page:e.data.page,items:null===(t=e.data.items)||void 0===t?void 0:t.map((e=>Object.assign(Object.assign({},e),{principal:e.principal.substring(5),toString:()=>`${e.principal} ${e.permission} ${e.operation} ${e.patternType} ${e.resourceType} ${e.resourceName}`,hash:()=>r()(e)}))).sort(((e,t)=>e.principal!==t.principal?e.principal.localeCompare(t.principal):e.resourceType!==t.resourceType?e.resourceType.localeCompare(t.resourceType):e.resourceName!==t.resourceName?e.resourceName.localeCompare(t.resourceName):e.permission!==t.permission?"DENY"===e.permission?-1:1:e.operation!==t.operation?e.operation.localeCompare(t.operation):0))}},d=()=>Object.values(i.AclPermissionType),u=()=>Object.values(i.AclOperation),m=()=>Object.values(i.AclResourceType),g=()=>Object.values(i.AclPatternType)}}]);
//# sourceMappingURL=8152.7310c13b.js.map