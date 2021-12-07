"use strict";(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[9603],{41272:(e,t,n)=>{n.d(t,{Q:()=>o});var r=n(84669),a=n(34046),i=n(75418),s=n.n(i),o=function(e){var t=e.children,n=e.labelHead,i=e.fieldId,o=e.fieldLabel,l=e.labelBody,c=e.buttonAriaLabel,u=e.validated,p=e.helperText,d=e.helperTextInvalid,m=e.isRequired;return s().createElement(r.FormGroup,{fieldId:i,label:o,validated:u,helperText:p,helperTextInvalid:d,isRequired:m,labelIcon:s().createElement(r.Popover,{headerContent:s().createElement("div",null,n),bodyContent:s().createElement("div",null,l)},s().createElement("button",{"aria-label":c,onClick:function(e){return e.preventDefault()},className:"pf-c-form__group-label-help"},s().createElement(a.ZP,{noVerticalAlign:!0})))},t)}},4055:(e,t,n)=>{n.d(t,{y:()=>o});var r=n(75418),a=n.n(r),i=n(84669),s=function(){return s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},s.apply(this,arguments)},o=function(e){var t=e.bullseyeProps,n=e.spinnerProps;return a().createElement(i.Bullseye,s({},t),a().createElement(i.Spinner,s({},n)))}},95640:(e,t,n)=>{n.r(t),n.d(t,{ManagePermissions:()=>W,ManagePermissionsModal:()=>q,default:()=>H});var r=n(75418),a=n.n(r),i=n(84669),s=n(31521),o=n(76621),l=n(3654),c=n(64517),u=n(46332),p=n(41272),d=function(e){var t=e.setId,n=e.id,o=e.initialOptions,l=e.setEscapeClosesModal,c=(0,s.useTranslation)().t,d=(0,r.useState)(!1),m=d[0],f=d[1],v=function(){t({value:void 0,validated:void 0}),f(!1)},_=[a().createElement(i.SelectGroup,{key:"all_accounts_group"},a().createElement(i.SelectOption,{key:"*",value:"*",description:c("permission.manage_permissions_dialog.all_accounts_description")},c("permission.manage_permissions_dialog.all_accounts_title"))),a().createElement(i.Divider,{key:"divider"}),a().createElement(i.SelectGroup,{label:c("permission.manage_permissions_dialog.all_accounts_service_account_group"),key:"service_accounts_group"},o.filter((function(e){return e.principalType===u.PrincipalType.ServiceAccount})).sort((function(e,t){return e.displayName.localeCompare(t.displayName)})).map((function(e,t){return a().createElement(i.SelectOption,{key:t,value:e.id,description:e.displayName},e.id)}))),a().createElement(i.Divider,{key:"divider"}),a().createElement(i.SelectGroup,{label:c("permission.manage_permissions_dialog.all_accounts_user_account_group"),key:"user_accounts_group"},o.filter((function(e){return e.principalType===u.PrincipalType.UserAccount})).map((function(e,t){return a().createElement(i.SelectOption,{key:t,value:e.id,description:e.displayName},e.id)})))];return a().createElement(p.Q,{labelHead:c("permission.manage_permissions_dialog.account_id_title"),fieldId:"kafka-instance-name",fieldLabel:c("permission.manage_permissions_dialog.account_id_title"),labelBody:c("permission.manage_permissions_dialog.account_id_help"),buttonAriaLabel:c("permission.manage_permissions_dialog.account_id_aria"),isRequired:!0,helperTextInvalid:n.errorMessage,validated:n.validated||i.ValidatedOptions.default},a().createElement(i.Select,{variant:i.SelectVariant.typeahead,className:"kafka-ui--select--limit-height",typeAheadAriaLabel:c("permission.manage_permissions_dialog.account_id_typeahead_aria"),onToggle:function(e){l(!e),f(e)},onSelect:function(e,n,r){""===n&&(n=void 0),r?v():t((function(){return void 0===n?{value:n,validated:i.ValidatedOptions.error,errorMessage:c("permission.manage_permissions_dialog.must_select_account_error")}:{validated:i.ValidatedOptions.default,value:n}})),f(!1)},onClear:v,selections:n.value,onFilter:function(e,t){if(!t)return _;var n=new RegExp(t,"i");return _.filter((function(e){return Array.isArray(e.props.children)})).map((function(e){return e.props.children.filter((function(e){return n.test(e.props.value)||n.test(e.props.description)}))}))},isOpen:m,isInputValuePersisted:!0,placeholderText:c("permission.manage_permissions_dialog.account_id_typeahead_placeholder"),isCreatable:!1,menuAppendTo:"parent",validated:n.validated||i.ValidatedOptions.default,isGrouped:!0},_))},m=n(23587),f=n(27577),v=n(28942),_=n(80887),g=n(77221),y=function(){return y=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},y.apply(this,arguments)},h=function(e){var t=e.options,n=e.setSelected,o=e.selected,l=e.row,c=e.id,u=e.placeholder,d=e.setEscapeClosesModal,m=e.onSelect,f=e.menuAppendTo,v=e.onClear,h=(0,s.useTranslation)().t,T=(0,r.useState)(!1),b=T[0],E=T[1],A=function(){n(l,v()),E(!1)};return a().createElement(p.Q,{labelHead:h("permission.manage_permissions_dialog.assign_permissions.".concat(c,".popover_head")),fieldId:c,labelBody:h("permission.manage_permissions_dialog.assign_permissions.".concat(c,".popover_label")),buttonAriaLabel:h("`permission.manage_permissions_dialog.assign_permissions.${id}.aria`"),isRequired:!0,helperTextInvalid:o.errorMessage,validated:o.validated||i.ValidatedOptions.default},a().createElement(_.P,{variant:i.SelectVariant.single,onToggle:function(e){d(!e),E(e)},onSelect:function(e,t,r){""===t&&(t=void 0),r?A():(n(l,t),E(!1),m(t))},onClear:A,selections:o.value,isOpen:b,isInputValuePersisted:!0,placeholderText:u,validated:o.validated||i.ValidatedOptions.default,menuAppendTo:f,maxHeight:200,direction:"up"},t.map((function(e,t){return a().createElement(g.SelectOption,y({isDisabled:e.disabled,key:t,value:e.value},e.description&&{description:e.description}),e.title)}))))},T=n(73866),b=n(54283),E=function(){return E=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},E.apply(this,arguments)},A=function(e,t,n){if(n||2===arguments.length)for(var r,a=0,i=t.length;a<i;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))},w=function(e){var t=e.row,n=e.setValue,o=e.value,l=e.initialOptions,c=e.id,u=e.placeholder,d=e.onSelect,m=e.setEscapeClosesModal,f=e.menuAppendTo,v=(0,s.useTranslation)().t,_=(0,r.useState)(!1),g=_[0],y=_[1],h=(0,r.useState)([]),T=h[0],b=h[1];(0,r.useEffect)((function(){b(l().map((function(e){return{value:e}})))}),[l]);var w=function(){n(t,void 0),y(!1)};return a().createElement(p.Q,{labelHead:v("permission.manage_permissions_dialog.assign_permissions.".concat(c,".popover_head")),fieldId:c,labelBody:v("permission.manage_permissions_dialog.assign_permissions.".concat(c,".popover_label")),buttonAriaLabel:v("`permission.manage_permissions_dialog.assign_permissions.${id}.aria`"),isRequired:!0,helperTextInvalid:o.errorMessage,validated:o.validated||i.ValidatedOptions.default},a().createElement(i.Select,{variant:i.SelectVariant.typeahead,typeAheadAriaLabel:v("permission.manage_permissions_dialog.assign_permissions.resource_name_aria"),onToggle:function(e){m(!e),y(e)},className:"pf-u-pr-lg-on-lg",onSelect:function(e,r,a){""===r&&(r=void 0),a?w():(n(t,r),y(!1),d(r))},onClear:w,selections:o.value,isOpen:g,isInputValuePersisted:!0,placeholderText:u,isCreatable:!0,onCreateOption:function(e){b(A(A([],T,!0),[{value:e}],!1))},createText:v("permission.manage_permissions_dialog.assign_permissions.resource_name_typeahead_create_text"),validated:o.validated||i.ValidatedOptions.default,menuAppendTo:f,maxHeight:200,direction:"up"},T.map((function(e,t){return a().createElement(i.SelectOption,E({isDisabled:e.disabled,key:t,value:e.value},e.description&&{description:e.description}))}))))},O=n(20777),k=n(90966),x=function(e,t){void 0===t&&(t=0);var n=C();return!(e.permission.value===n.permission.value&&e.patternType.value===n.patternType.value&&e.resourceType.value===n.resourceType.value&&e.resource.value===n.resource.value&&e.operation.value===n.operation.value&&t<=1)},C=function(){return{permission:{value:m.AclPermissionType.Allow},operation:{value:void 0},resourceType:{value:void 0},patternType:{value:m.AclPatternType.Prefixed},resource:{value:void 0}}},S=n(87892),V=n(56637),P=function(e,t,n){if(n||2===arguments.length)for(var r,a=0,i=t.length;a<i;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))},I=function(e){var t=e.acls,n=e.setAcls,r=e.topicNames,l=e.consumerGroupIds,c=e.selectedAccount,u=e.setEscapeClosesModal,p=e.resourceOperations,d=e.menuAppendTo,_=(0,V.N)().validateName,g=(0,s.useTranslation)().t,y=[{title:g("permission.table.resource_column_title"),columnTransforms:[(0,f.cellWidth)(20)]},{title:"",columnTransforms:[(0,f.cellWidth)(15)]},{title:"",columnTransforms:[(0,f.cellWidth)(25)]},{title:g("permission.table.permissions_column_title"),columnTransforms:[(0,f.cellWidth)(20)]},{title:"",columnTransforms:[(0,f.cellWidth)(20)]}],E=function(e,t){n((function(n){return n.map((function(n,r){return r===e&&(n.permission={value:t}),n}))}))},A=function(e,t){n((function(n){return n.map((function(n,r){return r===e&&(n.operation={value:t}),n}))}))},I=function(e,t){n((function(n){return n.map((function(n,r){return r===e&&(n.resourceType={value:t}),n}))}))},M=function(e,t){n((function(n){return n.map((function(n,r){return r===e&&(n.patternType={value:t}),n}))}))},N=function(e,t){n((function(n){return n.map((function(n,r){return r===e&&(n.resource={value:t}),n}))}))},R=function(e){var t=e.acl,r=e.row;return t.resourceType.value===m.AclResourceType.Cluster?a().createElement(a().Fragment,null):a().createElement(h,{options:(0,o.t)().map((function(e){return{value:e,title:e===m.AclPatternType.Prefixed?g("permission.manage_permissions_dialog.assign_permissions.pattern_type_prefixed"):g("permission.manage_permissions_dialog.assign_permissions.pattern_type_literal"),description:e===m.AclPatternType.Prefixed?g("permission.manage_permissions_dialog.assign_permissions.pattern_type_prefixed_help"):g("permission.manage_permissions_dialog.assign_permissions.pattern_type_literal_help")}})).sort((function(e,t){return t.value.localeCompare(e.value)})),selected:t.patternType,setSelected:M,row:r,id:"pattern-type",setEscapeClosesModal:u,menuAppendTo:d,onClear:function(){return C().patternType.value},onSelect:function(e){n((function(t){return void 0===e?(t[r].patternType.validated=i.ValidatedOptions.error,t[r].patternType.validated=g("permission.manage_permissions_dialog.assign_permissions.must_select_pattern_type_error")):t[r].patternType.validated=i.ValidatedOptions.default,t}))}})},L=function(e){var t=e.row,r=e.acl;return a().createElement(h,{options:(0,o.yN)().map((function(e){return{value:e,title:(0,S.s)(e)}})),selected:r.resourceType,setSelected:I,row:t,id:"resource-type",placeholder:g("permission.manage_permissions_dialog.assign_permissions.resource_type_placeholder"),setEscapeClosesModal:u,menuAppendTo:d,onClear:function(){return C().resourceType.value},onSelect:function(e){n((function(n){return void 0===e?(n[t].resourceType.validated=i.ValidatedOptions.error,n[t].resourceType.errorMessage=g("permission.manage_permissions_dialog.assign_permissions.must_select_resource_type_error")):n[t].resourceType.validated=i.ValidatedOptions.default,n}))}})},j=function(e){var t,s=e.row,o=e.acl;return o.resourceType.value===m.AclResourceType.Cluster?a().createElement(a().Fragment,null):a().createElement(w,{row:s,value:o.resource,setValue:N,id:"resource",placeholder:g("permission.manage_permissions_dialog.assign_permissions.pattern_type_".concat((null===(t=o.patternType.value)||void 0===t?void 0:t.toLowerCase())||"prefixed","_placeholder")),setEscapeClosesModal:u,menuAppendTo:d,initialOptions:function(){return o.resourceType.value===m.AclResourceType.Topic?r:o.resourceType.value===m.AclResourceType.Group?l:[]},onSelect:function(e){if("*"===e)n((function(e){return e[s].resource.validated=i.ValidatedOptions.default,e}));else{var t=_(e);void 0!==t?n((function(e){return e[s].resource.validated=i.ValidatedOptions.error,e[s].resource.errorMessage=t,e})):void 0!==e&&n((function(e){return e[s].resource.validated=i.ValidatedOptions.default,e}))}}})},D=function(e){var t=e.acl,r=e.row;return a().createElement(h,{options:(0,o.mv)().map((function(e){return{value:e,title:(0,T.sentenceCase)(e)}})),selected:t.permission,setSelected:E,row:r,id:"permission-type",setEscapeClosesModal:u,menuAppendTo:d,onClear:function(){return C().permission.value},onSelect:function(e){n((function(t){return void 0===e?(t[r].permission.validated=i.ValidatedOptions.error,t[r].permission.errorMessage=g("permission.manage_permissions_dialog.assign_permissions.must_select_permission_error")):t[r].permission.validated=i.ValidatedOptions.default,t}))}})},G=function(e){var t=e.acl,r=e.row;return a().createElement(h,{options:(0,o.G6)().filter((function(e){if(void 0===t.resourceType.value||""===t.resourceType.value.toString())return!0;var n=(0,b.snakeCase)(t.resourceType.value.toString()),r=(0,b.snakeCase)(e);return p[n].some((function(e){return e===r}))})).map((function(e){return{value:e,title:(0,T.sentenceCase)(e)}})),selected:t.operation,setSelected:A,row:r,id:"operation",placeholder:g("permission.manage_permissions_dialog.assign_permissions.operation_placeholder"),setEscapeClosesModal:u,menuAppendTo:d,onClear:function(){return C().operation.value},onSelect:function(e){n((function(t){return void 0===e?(t[r].operation.validated=i.ValidatedOptions.error,t[r].operation.errorMessage=g("permission.manage_permissions_dialog.assign_permissions.must_select_operation_error")):t[r].operation.validated=i.ValidatedOptions.default,t}))}})},B=function(e){var r=e.row,s=e.acl;return a().createElement(i.Tooltip,{content:g("permission.manage_permissions_dialog.assign_permissions.remove_row_help")},a().createElement(i.Button,{variant:"link",icon:a().createElement(k.ZP,null),onClick:function(){return function(e){n((function(t){return t.length>1?t.filter((function(t,n){return n!==e})):[C()]}))}(r)},isDisabled:!x(s,t.length)}))};return a().createElement("div",null,a().createElement(i.TextContent,null,a().createElement(i.Text,{component:i.TextVariants.h2},g("permission.manage_permissions_dialog.assign_permissions.title")),a().createElement(i.Text,{component:i.TextVariants.small},"*"===c?g("permission.manage_permissions_dialog.assign_permissions.help_all_accounts"):g("permission.manage_permissions_dialog.assign_permissions.help",{account_id:c})),a().createElement(i.Text,{component:i.TextVariants.small},g("permission.manage_permissions_dialog.assign_permissions.all_fields_are_required"))),a().createElement(v.w,{tableProps:{cells:y,rows:t.map((function(e,t){return{cells:[{title:a().createElement(L,{row:t,acl:e})},{title:a().createElement(R,{row:t,acl:e})},{title:a().createElement(j,{acl:e,row:t})},{title:a().createElement(D,{acl:e,row:t})},{title:a().createElement("div",{className:"pf-u-display-flex pf-u-justify-content-space-between"},a().createElement("div",null,a().createElement(G,{acl:e,row:t})),a().createElement("div",null,a().createElement(B,{acl:e,row:t})))}]}})),"aria-label":g("permission.table.table.permission_list_table"),shouldDefaultCustomRowWrapper:!0,variant:f.TableVariant.compact,canSelectAll:!1},rowDataTestId:"tablePermissions-row"}),a().createElement(i.ActionList,null,a().createElement(i.ActionListItem,null,a().createElement(i.Button,{variant:"link",icon:a().createElement(O.ZP,null),onClick:function(){n((function(e){return P(P([],e,!0),[C()],!1)}))}},g("permission.manage_permissions_dialog.assign_permissions.add_row")))))},M=n(4055),N=n(74292),R=n(70251),L=function(e,t,n){if(n||2===arguments.length)for(var r,a=0,i=t.length;a<i;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))},j=function(e){var t=e.existingAcls,n=e.selectedAccountId,o=e.onRemove,l=(0,s.useTranslation)().t,c=(0,r.useState)([]),u=c[0],p=c[1];(0,r.useEffect)((function(){p(t.map((function(e,t){var n=e;return n.index=t,n})))}),[t]);var d=[{title:l("permission.table.resource_column_title"),columnTransforms:[(0,f.cellWidth)(60)]},{title:l("permission.table.permissions_column_title"),columnTransforms:[(0,f.cellWidth)(20)]},{title:"",columnTransforms:[(0,f.cellWidth)(20)]}],m=[N.C8,N.ev,function(e){var t=function(){return a().createElement(i.Button,{variant:"link",icon:a().createElement(R.TrashIcon,null),onClick:function(){return t=e,p(u.map((function(e){return e.hash()===t.hash()&&(e.removed=!0),e}))),void o(t);var t}})},r=function(){return a().createElement(i.Label,{variant:"outline"},l("permission.table.all_accounts"))};return"*"===n&&"*"===e.principal?{title:a().createElement("div",{className:"pf-u-display-flex pf-u-justify-content-space-between pf-u-justify-content-flex-end-on-lg"},a().createElement(r,null)," ",a().createElement(t,null)),props:{}}:"*"===e.principal?{title:a().createElement("div",{className:"pf-u-display-flex pf-u-justify-content-flex-end-on-lg"},a().createElement(r,null)),props:{}}:{title:a().createElement("div",{className:"pf-u-display-flex pf-u-justify-content-flex-end"},a().createElement(t,null)),props:{}}}];if(void 0===n||0===u.length)return a().createElement(a().Fragment,null);return a().createElement("div",null,a().createElement(i.TextContent,null,a().createElement(i.Text,{component:i.TextVariants.h2},l("permission.manage_permissions_dialog.edit_existing.title")),a().createElement(i.Text,{component:i.TextVariants.small},a().createElement((function(){return"*"===n?l("permission.manage_permissions_dialog.edit_existing.all_accounts_help"):a().createElement(s.Trans,{i18nKey:"permission.manage_permissions_dialog.edit_existing.help"},"Review the list of existing permissions for the selected account. The list includes account-specific permissions and permissions applied to all accounts within this Kafka instance. Permissions labeled",a().createElement("strong",null,"All accounts")," cannot be removed when an individual account ID is selected.")}),null))),a().createElement(v.w,{tableProps:{cells:d,rows:L([],u.filter((function(e){return!e.removed})).map((function(e,t){return{cells:m.map((function(n){return n(e,t)})),originalData:e}})),!0),"aria-label":l("permission.table.table.permission_list_table"),shouldDefaultCustomRowWrapper:!0,variant:f.TableVariant.compact,canSelectAll:!1},rowDataTestId:"tablePermissions-row"}))},D=function(){return D=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},D.apply(this,arguments)},G=function(e,t,n,r){return new(n||(n=Promise))((function(a,i){function s(e){try{l(r.next(e))}catch(e){i(e)}}function o(e){try{l(r.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,o)}l((r=r.apply(e,t||[])).next())}))},B=function(e,t){var n,r,a,i,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function o(i){return function(o){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(a=2&i[0]?r.return:i[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,i[1])).done)return a;switch(r=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(a=s.trys,(a=a.length>0&&a[a.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){s.label=i[1];break}if(6===i[0]&&s.label<a[1]){s.label=a[1],a=i;break}if(a&&s.label<a[2]){s.label=a[2],s.ops.push(i);break}a[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],r=0}finally{n=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,o])}}},F=function(e,t,n){if(n||2===arguments.length)for(var r,a=0,i=t.length;a<i;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))},W=function(e){var t=e.hideModal,n=e.onSave,i=e.kafkaName,s=e.selectedAccountId,c=e.acls,u=e.topicNames,p=e.consumerGroupIds,d=e.title,m=e.variant,f=(0,r.useContext)(l.E),v=(0,o.qK)(f),_=(0,r.useState)(),g=_[0],y=_[1];return(0,r.useEffect)((function(){G(void 0,void 0,void 0,(function(){var e;return B(this,(function(t){switch(t.label){case 0:return[4,v.getResourceOperations()];case 1:return e=t.sent(),y(e),[2]}}))}))}),[]),a().createElement(q,{topicNames:u,consumerGroupIds:p,acls:c,resourceOperations:g,hideModal:t,selectedAccountId:s,onSave:n,kafkaName:i,variant:m,title:d})},q=function(e){var t=e.hideModal,n=e.onSave,f=e.kafkaName,v=e.selectedAccountId,_=e.acls,g=e.topicNames,y=e.consumerGroupIds,h=e.resourceOperations,T=e.title,b=e.variant,E=(0,s.useTranslation)().t,A=((0,c.S)()||{}).kafka,w=(0,u.useAuth)(),O=(0,r.useState)({value:v,validated:void 0}),k=O[0],S=O[1],P=(0,r.useState)(void 0===v?1:2),N=P[0],R=P[1],L=(0,r.useState)([C()]),W=L[0],q=L[1],H=(0,r.useState)([]),Q=H[0],K=H[1],U=(0,r.useRef)(!0),Z=(0,V.N)().validateName,$=(0,r.useState)(),z=$[0],J=$[1],X=(0,u.usePrincipals)(),Y=(0,r.useContext)(l.E),ee=(0,o.qK)(Y);(0,r.useEffect)((function(){G(void 0,void 0,void 0,(function(){var e;return B(this,(function(t){switch(t.label){case 0:return[4,null==w?void 0:w.getUsername()];case 1:return e=t.sent(),J(e),[2]}}))}))}),[w]);var te=function(){return G(void 0,void 0,void 0,(function(){var e,r,a,s,l,c;return B(this,(function(u){switch(u.label){case 0:if(e=!0,void 0===k.value?(S((function(e){return D(D({},e),{validated:i.ValidatedOptions.error,errorMessage:E("permission.manage_permissions_dialog.must_select_account_error")})})),e=!1):S((function(e){return D(D({},e),{validated:i.ValidatedOptions.default})})),q((function(t){return t.map((function(t){if(x(t)){var n=Object.assign({},t);if(void 0===t.resourceType.value?(n.resourceType.validated=i.ValidatedOptions.error,n.resourceType.errorMessage=E("permission.manage_permissions_dialog.assign_permissions.must_select_resource_type_error"),e=!1):n.resourceType.validated=i.ValidatedOptions.default,t.resourceType.value!==m.AclResourceType.Cluster){if(void 0===t.resource.value)n.resource.validated=i.ValidatedOptions.error,n.resource.errorMessage=E("permission.manage_permissions_dialog.assign_permissions.must_select_resource_error"),e=!1;else if("*"===t.resource.value)n.resource.validated=i.ValidatedOptions.default;else{var r=Z(t.resource.value);void 0!==r?(n.resource.validated=i.ValidatedOptions.error,n.resource.errorMessage=r,e=!1):n.resource.validated=i.ValidatedOptions.default}void 0===t.patternType.value?(n.patternType.validated=i.ValidatedOptions.error,n.patternType.errorMessage=E("permission.manage_permissions_dialog.assign_permissions.must_select_pattern_type_error"),e=!1):n.patternType.validated=i.ValidatedOptions.default}return void 0===t.permission.value?(n.permission.validated=i.ValidatedOptions.error,n.permission.errorMessage=E("permission.manage_permissions_dialog.assign_permissions.must_select_permission_error"),e=!1):n.permission.validated=i.ValidatedOptions.default,void 0===t.operation.value?(n.operation.validated=i.ValidatedOptions.error,n.operation.errorMessage=E("permission.manage_permissions_dialog.assign_permissions.must_select_operation_error"),e=!1):n.operation.validated=i.ValidatedOptions.default,n}return t}))})),!e)return[3,11];r=0,a=W.filter((function(e){return x(e)})),u.label=1;case 1:if(!(r<a.length))return[3,4];if(void 0===(c=a[r]).resourceType.value)throw Error("resourceType must not be undefined");if(c.resourceType.value!==m.AclResourceType.Cluster){if(void 0===c.resource.value)throw Error("resource must not be undefined");if(void 0===c.patternType.value)throw Error("patternType must not be undefined")}else c.resource.value="kafka-cluster",c.patternType.value=m.AclPatternType.Literal;if(void 0===c.permission.value)throw Error("permission must not be undefined");if(void 0===c.operation.value)throw Error("operation must not be undefined");return[4,ee.addPermission({resourceName:c.resource.value,patternType:c.patternType.value,permission:c.permission.value,resourceType:c.resourceType.value,operation:c.operation.value,principal:"User:".concat(k.value)})];case 2:u.sent(),u.label=3;case 3:return r++,[3,1];case 4:s=0,l=Q,u.label=5;case 5:return s<l.length?(c=l[s],[4,ee.deletePermission({resourceName:c.resourceName,patternType:(0,o.L2)(c.patternType,m.AclPatternTypeFilter),permissionType:(0,o.L2)(c.permission,m.AclPermissionTypeFilter),resourceType:(0,o.L2)(c.resourceType,m.AclResourceTypeFilter),operation:(0,o.L2)(c.operation,m.AclOperationFilter),principal:"User:".concat(k.value)})]):[3,8];case 6:u.sent(),u.label=7;case 7:return s++,[3,5];case 8:return n?[4,n()]:[3,10];case 9:u.sent(),u.label=10;case 10:t(),u.label=11;case 11:return[2]}}))}))},ne=function(){if(2===N){if(void 0===h)return a().createElement(M.y,null);var e=document.getElementById("manage-permissions-modal")||void 0;return a().createElement(a().Fragment,null,a().createElement(j,{existingAcls:_.filter((function(e){return e.principal==="".concat(k.value)||"*"===e.principal})),selectedAccountId:k.value,onRemove:function(e){return K((function(t){return F(F([],t,!0),[e],!1)}))}}),a().createElement(I,{acls:W,setAcls:q,topicNames:g,consumerGroupIds:y,selectedAccount:k.value,setEscapeClosesModal:ie,resourceOperations:h,menuAppendTo:e}))}return a().createElement(a().Fragment,null)},re=X.getAllPrincipals().filter((function(e){return e.id!==z&&e.id!==(null==A?void 0:A.owner)})),ae=function(){return 1===N?a().createElement(d,{id:k,setId:S,initialOptions:re,setEscapeClosesModal:ie}):a().createElement(p.Q,{labelHead:E("permission.manage_permissions_dialog.account_id_title"),fieldId:"kafka-instance-name",fieldLabel:E("permission.manage_permissions_dialog.account_id_title"),labelBody:E("permission.manage_permissions_dialog.account_id_help"),buttonAriaLabel:E("permission.manage_permissions_dialog.account_id_aria"),isRequired:!0},"*"===k.value?E("permission.manage_permissions_dialog.all_accounts_title"):k.value)},ie=function(e){U.current=e};return a().createElement(i.Modal,{id:"manage-permissions-modal",variant:b,isOpen:!0,"aria-label":E("permission.manage_permissions_dialog.aria_label"),position:"top",title:T,showClose:!0,"aria-describedby":"modal-message",onClose:t,onEscapePress:function(){U.current&&t()},actions:[a().createElement((function(){return 1===N?a().createElement(i.Button,{variant:"primary",onClick:function(){return R(2)},isDisabled:void 0===k.value},E("permission.manage_permissions_dialog.step_1_submit_button")):a().createElement(i.Button,{variant:"primary",onClick:te,key:1,isDisabled:!W.some((function(e){return x(e)||Q.length>0}))},E("permission.manage_permissions_dialog.step_2_submit_button"))}),{key:1}),a().createElement(i.Button,{onClick:t,key:2,variant:"secondary"},E("permission.manage_permissions_dialog.cancel_button"))]},a().createElement((function(){return a().createElement(i.Form,null,a().createElement(i.FormGroup,{fieldId:"kafka-instance-name",label:E("permission.manage_permissions_dialog.kafka_instance_title")},f),a().createElement(ae,null),a().createElement(ne,null))}),null))};const H=W},56637:(e,t,n)=>{n.d(t,{N:()=>a});var r=n(31521),a=function(){var e=(0,r.useTranslation)().t;return{validateName:function(t){var n=new RegExp("^[a-zA-Z0-9._-]+$");return t.length&&!n.test(t)?e("topic.topic_name_helper_text"):t.length>249?e("topic.cannot_exceed_characters"):"."===t||".."===t?e("topic.invalid_name_with_dot"):void 0}}}}}]);
//# sourceMappingURL=9603.fb780825.js.map