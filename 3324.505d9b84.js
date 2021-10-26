"use strict";(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[3324],{28942:(e,n,t)=>{t.d(n,{w:()=>d});var r=t(75418),o=t.n(r),a=t(27577),l=t(38296),c=function(){return c=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},c.apply(this,arguments)},i=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t},s=(0,r.createContext)({activeRow:"",onRowClick:function(){return""},loggedInUser:""}),u=s.Provider,p=function(e){var n=(0,r.useContext)(s),t=n.activeRow,a=n.onRowClick,u=n.rowDataTestId,p=e||{},f=p.trRef,y=p.className,d=p.rowProps,v=p.row,b=i(p,["trRef","className","rowProps","row"]),m=(d||{}).rowIndex,h=v||{},w=h.isExpanded,T=h.originalData;return o().createElement("tr",c({"data-testid":u,tabIndex:0,ref:"function"==typeof f?void 0:f,className:(0,l.css)(y,"pf-c-table-row__item",t&&t===(null==T?void 0:T.rowId)&&"pf-m-selected pf-m-selectable"),hidden:void 0!==w&&!w,onClick:function(e){return a&&a(e,m,v)}},b))},f=function(){return f=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},f.apply(this,arguments)},y=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t},d=function(e){var n=e.tableProps,t=e.tableHeaderProps,r=e.tableBodyProps,c=e.children,i=e.activeRow,s=e.onRowClick,d=e.rowDataTestId,v=e.loggedInUser,b=n.cells,m=n.rows,h=n.actionResolver,w=n.onSort,T=n.sortBy,g=n["aria-label"],E=n.variant,P=n.className,O=n.shouldDefaultCustomRowWrapper,C=void 0!==O&&O,k=y(n,["cells","rows","actionResolver","onSort","sortBy","aria-label","variant","className","shouldDefaultCustomRowWrapper"]);return C&&(k.rowWrapper=p),o().createElement(u,{value:{activeRow:i,onRowClick:s,rowDataTestId:d,loggedInUser:v}},o().createElement(a.Table,f({className:(0,l.css)(C&&"mas--table-view__table",P),cells:b,variant:E,rows:m,"aria-label":g,actionResolver:h,onSort:w,sortBy:T},k),o().createElement(a.TableHeader,f({},t)),o().createElement(a.TableBody,f({},r)),c))}},74292:(e,n,t)=>{t.d(n,{ev:()=>w,QG:()=>h,C8:()=>T});var r=t(75418),o=t.n(r),a=t(11593),l=t(70251),c=t(70853),i=t(84669),s=t(46332),u=t(73866),p=t(87892),f=t(64517),y=function(e){var n=e.variant,t=function(){switch(n){case c.AclResourceType.Group:return{labelColor:"green",content:"G"};case c.AclResourceType.Cluster:return{labelColor:"grey",content:"KI"};case c.AclResourceType.Topic:return{labelColor:"blue",content:"T"};case c.AclResourceType.TransactionalId:return{labelColor:"orange",content:"TI"}}}(),r=t.labelColor,a=t.content;return o().createElement(i.Label,{color:r,className:"mas-m-solid"},a)},d=function(e,n,t,r){return new(t||(t=Promise))((function(o,a){function l(e){try{i(r.next(e))}catch(e){a(e)}}function c(e){try{i(r.throw(e))}catch(e){a(e)}}function i(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(l,c)}i((r=r.apply(e,n||[])).next())}))},v=function(e,n){var t,r,o,a,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;l;)try{if(t=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return l.label++,{value:a[1],done:!1};case 5:l.label++,r=a[1],a=[0];continue;case 7:a=l.ops.pop(),l.trys.pop();continue;default:if(!(o=l.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){l=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){l.label=a[1];break}if(6===a[0]&&l.label<o[1]){l.label=o[1],o=a;break}if(o&&l.label<o[2]){l.label=o[2],l.ops.push(a);break}o[2]&&l.ops.pop(),l.trys.pop();continue}a=n.call(e,l)}catch(e){a=[6,e],r=0}finally{t=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}},b=function(){var e=(0,a.useTranslation)().t;return o().createElement(o().Fragment,null,o().createElement(i.Label,{variant:"outline"},e("permission.table.all_accounts")))},m=function(e){var n=e.acl,t=(0,r.useState)(),a=t[0],c=t[1],u=(0,s.useAuth)(),p=((0,f.S)()||{}).kafka,y=(0,s.usePrincipals)().getAllPrincipals().filter((function(e){return e.id!==a&&e.id!==(null==p?void 0:p.owner)})).filter((function(e){return e.id===n.principal}));return(0,r.useEffect)((function(){d(void 0,void 0,void 0,(function(){var e;return v(this,(function(n){switch(n.label){case 0:return[4,null==u?void 0:u.getUsername()];case 1:return e=n.sent(),c(e),[2]}}))}))}),[u]),1===y.length?y[0].principalType===s.PrincipalType.ServiceAccount?o().createElement(i.Tooltip,{content:o().createElement("div",null,"Type: ",y[0].principalType," ",o().createElement("br",null))},o().createElement("span",{tabIndex:0}," ",n.principal," ",o().createElement(l.InfoCircleIcon,{color:"grey"}))):o().createElement(i.Tooltip,{content:o().createElement("div",null,"Type: ",y[0].principalType," ",o().createElement("br",null),"Name: ",y[0].displayName," ",o().createElement("br",null),"Email: ",y[0].emailAddress)},o().createElement("span",{tabIndex:0}," ",n.principal," ",o().createElement(l.InfoCircleIcon,{color:"grey"}))):o().createElement("span",null," ",n.principal)},h=function(e){return"*"===e.principal?{title:o().createElement(b,null),props:{}}:{title:o().createElement(m,{acl:e}),props:{}}},w=function(e){return{title:o().createElement(i.LabelGroup,null,o().createElement(i.Label,{variant:"outline",color:e.permission===c.AclPermissionType.Deny?"red":void 0},(0,u.sentenceCase)(e.permission)),o().createElement(i.Label,{variant:"outline"},(0,u.sentenceCase)(e.operation))),props:{}}},T=function(e){return e.resourceType===c.AclResourceType.Cluster?{title:o().createElement("div",null,o().createElement(y,{variant:e.resourceType})," ",(0,p.s)(e.resourceType))}:{title:o().createElement("div",null,o().createElement(y,{variant:e.resourceType})," ",(0,p.s)(e.resourceType)," ",o().createElement((function(){var n=(0,a.useTranslation)().t;return e.patternType===c.AclPatternType.Prefixed?n("permission.cells.pattern_type_prefixed"):n("permission.cells.pattern_type_literal")}),null)," ",e.resourceName)}}},87892:(e,n,t)=>{t.d(n,{s:()=>a});var r=t(70853),o=t(73866),a=function(e){switch(e){case r.AclResourceType.Group:return"Consumer group";case r.AclResourceType.Topic:return"Topic";case r.AclResourceType.Cluster:return"Kafka instance";case r.AclResourceType.TransactionalId:return"Transactional ID";default:return(0,o.sentenceCase)(e)}}},76621:(e,n,t)=>{t.d(n,{L2:()=>s,qK:()=>u,mv:()=>f,G6:()=>y,yN:()=>d,t:()=>v});var r=t(70853),o=t(45330),a=t.n(o),l=function(){return l=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},l.apply(this,arguments)},c=function(e,n,t,r){return new(t||(t=Promise))((function(o,a){function l(e){try{i(r.next(e))}catch(e){a(e)}}function c(e){try{i(r.throw(e))}catch(e){a(e)}}function i(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(l,c)}i((r=r.apply(e,n||[])).next())}))},i=function(e,n){var t,r,o,a,l={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;l;)try{if(t=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return l.label++,{value:a[1],done:!1};case 5:l.label++,r=a[1],a=[0];continue;case 7:a=l.ops.pop(),l.trys.pop();continue;default:if(!(o=l.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){l=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){l.label=a[1];break}if(6===a[0]&&l.label<o[1]){l.label=o[1],o=a;break}if(o&&l.label<o[2]){l.label=o[2],l.ops.push(a);break}o[2]&&l.ops.pop(),l.trys.pop();continue}a=n.call(e,l)}catch(e){a=[6,e],r=0}finally{t=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}},s=function(e,n){return(Object.entries(n).find((function(n){return n[1]===e.toString()}))||[])[1]},u=function(e){return{getPermissions:function(n,t,o){return c(void 0,void 0,Promise,(function(){var a,l;return i(this,(function(c){switch(c.label){case 0:return[4,null==e?void 0:e.getToken()];case 1:return a=c.sent(),[4,new r.AclsApi(new r.Configuration({accessToken:a,basePath:null==e?void 0:e.basePath})).getAcls(n.resourceType,n.resourceName,n.patternType,n.principal,n.operation,n.permissionType,o,t)];case 2:return l=c.sent(),[2,p(l)]}}))}))},addPermission:function(n){return c(void 0,void 0,void 0,(function(){var t;return i(this,(function(o){switch(o.label){case 0:return[4,null==e?void 0:e.getToken()];case 1:return t=o.sent(),[4,new r.AclsApi(new r.Configuration({accessToken:t,basePath:null==e?void 0:e.basePath})).createAcl(n)];case 2:return o.sent(),[2]}}))}))},deletePermission:function(n){return c(void 0,void 0,void 0,(function(){var t;return i(this,(function(o){switch(o.label){case 0:return[4,null==e?void 0:e.getToken()];case 1:return t=o.sent(),[4,new r.AclsApi(new r.Configuration({accessToken:t,basePath:null==e?void 0:e.basePath})).deleteAcls(n.resourceType,n.resourceName,n.patternType,n.principal,n.operation,n.permissionType)];case 2:return o.sent(),[2]}}))}))},getResourceOperations:function(){return c(void 0,void 0,void 0,(function(){var n;return i(this,(function(t){switch(t.label){case 0:return[4,null==e?void 0:e.getToken()];case 1:return n=t.sent(),[4,new r.AclsApi(new r.Configuration({accessToken:n,basePath:null==e?void 0:e.basePath})).getAclResourceOperations().then((function(e){return e.data}))];case 2:return[2,t.sent()]}}))}))}}},p=function(e){var n;return{total:e.data.total,size:e.data.size,page:e.data.page,items:null===(n=e.data.items)||void 0===n?void 0:n.map((function(e){return l(l({},e),{principal:e.principal.substring(5),toString:function(){return e.principal+" "+e.permission+" "+e.operation+" "+e.patternType+" "+e.resourceType+" "+e.resourceName},hash:function(){return a()(e)}})})).sort((function(e,n){return e.permission!==n.permission?"DENY"===e.permission?-1:1:e.principal!==n.principal?e.principal.localeCompare(n.principal):e.resourceType!==n.resourceType?e.resourceType.localeCompare(n.resourceType):e.resourceName!==n.resourceName?e.resourceName.localeCompare(n.resourceName):e.operation!==n.operation?e.operation.localeCompare(n.operation):0}))}},f=function(){return Object.values(r.AclPermissionType)},y=function(){return Object.values(r.AclOperation)},d=function(){return Object.values(r.AclResourceType)},v=function(){return Object.values(r.AclPatternType)}}}]);
//# sourceMappingURL=3324.505d9b84.js.map