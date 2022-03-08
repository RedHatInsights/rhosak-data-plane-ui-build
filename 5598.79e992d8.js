"use strict";(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[5598],{41272:(e,n,t)=>{t.d(n,{Q:()=>s});var a=t(99421),r=t(34046),i=t(75418),o=t.n(i),s=function(e){var n=e.children,t=e.labelHead,i=e.fieldId,s=e.fieldLabel,l=e.labelBody,c=e.buttonAriaLabel,u=e.validated,p=e.helperText,d=e.helperTextInvalid,m=e.isRequired;return o().createElement(a.FormGroup,{fieldId:i,label:s,validated:u,helperText:p,helperTextInvalid:d,isRequired:m,labelIcon:o().createElement(a.Popover,{headerContent:o().createElement("div",null,t),bodyContent:o().createElement("div",null,l)},o().createElement("button",{"aria-label":c,onClick:function(e){return e.preventDefault()},className:"pf-c-form__group-label-help"},o().createElement(r.ZP,{noVerticalAlign:!0})))},n)}},4055:(e,n,t)=>{t.d(n,{y:()=>s});var a=t(75418),r=t.n(a),i=t(99421),o=function(){return o=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e},o.apply(this,arguments)},s=function(e){var n=e.bullseyeProps,t=e.spinnerProps;return r().createElement(i.Bullseye,o({},n),r().createElement(i.Spinner,o({},t)))}},21118:(e,n,t)=>{t.r(n),t.d(n,{ManagePermissions:()=>ne,ManagePermissionsModal:()=>te,default:()=>ae});var a,r=t(75418),i=t.n(r),o=t(99421),s=t(2695),l=t(76621),c=t(3654),u=t(64517),p=t(7451),d=t(41272),m=function(e){var n=e.setId,t=e.id,a=e.initialOptions,l=e.setEscapeClosesModal,c=(0,s.useTranslation)(["kafkaTemporaryFixMe"]).t,u=(0,r.useState)(!1),m=u[0],v=u[1],_=function(){n({value:void 0,validated:void 0}),v(!1)},f=[i().createElement(o.SelectGroup,{key:"all_accounts_group"},i().createElement(o.SelectOption,{key:"*",value:"*",description:c("permission.manage_permissions_dialog.all_accounts_description")},c("permission.manage_permissions_dialog.all_accounts_title"))),i().createElement(o.Divider,{key:"divider"}),i().createElement(o.SelectGroup,{label:c("permission.manage_permissions_dialog.all_accounts_service_account_group"),key:"service_accounts_group"},a.filter((function(e){return e.principalType===p.PrincipalType.ServiceAccount})).sort((function(e,n){return e.displayName&&n.displayName?e.displayName.localeCompare(n.displayName):-1})).map((function(e,n){return i().createElement(o.SelectOption,{key:n,value:e.id,description:e.displayName},e.id)}))),i().createElement(o.Divider,{key:"divider"}),i().createElement(o.SelectGroup,{label:c("permission.manage_permissions_dialog.all_accounts_user_account_group"),key:"user_accounts_group"},a.filter((function(e){return e.principalType===p.PrincipalType.UserAccount})).map((function(e,n){return i().createElement(o.SelectOption,{key:n,value:e.id,description:e.displayName},e.id)})))];return i().createElement(d.Q,{labelHead:c("permission.manage_permissions_dialog.account_id_title"),fieldId:"kafka-instance-name",fieldLabel:c("permission.manage_permissions_dialog.account_id_title"),labelBody:c("permission.manage_permissions_dialog.account_id_help"),buttonAriaLabel:c("permission.manage_permissions_dialog.account_id_aria"),isRequired:!0,helperTextInvalid:t.errorMessage,validated:t.validated||o.ValidatedOptions.default},i().createElement(o.Select,{variant:o.SelectVariant.typeahead,className:"kafka-ui--select--limit-height",typeAheadAriaLabel:c("permission.manage_permissions_dialog.account_id_typeahead_aria"),onToggle:function(e){l(!e),v(e)},onSelect:function(e,t,a){""===t&&(t=void 0),a?_():n((function(){return void 0===t?{value:t,validated:o.ValidatedOptions.error,errorMessage:c("permission.manage_permissions_dialog.must_select_account_error")}:{validated:o.ValidatedOptions.default,value:t}})),v(!1)},onClear:_,selections:t.value,onFilter:function(e,n){if(!n)return f;var t=new RegExp(n,"i");return f.filter((function(e){return Array.isArray(e.props.children)})).map((function(e){return e.props.children.filter((function(e){return t.test(e.props.value)||t.test(e.props.description)}))}))},isOpen:m,isInputValuePersisted:!0,placeholderText:c("permission.manage_permissions_dialog.account_id_typeahead_placeholder"),isCreatable:!1,menuAppendTo:"parent",validated:t.validated||o.ValidatedOptions.default,isGrouped:!0},f))},v=t(10458),_=t(57294),f=t(34046),g=t(73866),y=t(54283),T=t(16560),h=function(e){var n=E();return(Array.isArray(e)?e:[e]).some((function(e){return e.aclShortcutType===a.ManageAccess||(e.aclShortcutType?!(e.patternType.value===n.patternType.value&&e.resource.value===n.resource.value):!(e.permission.value===n.permission.value&&e.patternType.value===n.patternType.value&&e.resourceType.value===n.resourceType.value&&e.resource.value===n.resource.value&&e.operation.value===n.operation.value))}))};!function(e){e.ConsumeTopic="ConsumeTopic",e.ProduceTopic="ProduceTopic",e.ManageAccess="ManageAccess"}(a||(a={}));var E=function(){return{permission:{value:T.AclPermissionType.Allow},operation:{value:void 0},resourceType:{value:void 0},patternType:{value:T.AclPatternType.Prefixed},resource:{value:void 0},aclShortcutType:void 0}},A=function(e,n,t,a){return void 0===a&&(a=0),Array.isArray(e[t])&&void 0!==a?e[t][a]=n:e[t]=n,e},b=function(e,n,t){return void 0===t&&(t=0),Array.isArray(e[n])?e[n][t]:e[n]},k=t(80887),w=t(77221),O=function(){return O=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e},O.apply(this,arguments)},S=function(e){var n=e.options,t=e.setSelected,a=e.selected,l=e.row,c=e.id,u=e.placeholder,p=e.setEscapeClosesModal,m=e.onSelect,v=e.menuAppendTo,_=e.onClear,f=e.childRow,g=(0,s.useTranslation)(["kafkaTemporaryFixMe"]).t,y=(0,r.useState)(!1),T=y[0],h=y[1];return i().createElement(d.Q,{labelHead:g("permission.manage_permissions_dialog.assign_permissions.".concat(c,".popover_head")),fieldId:c,labelBody:g("permission.manage_permissions_dialog.assign_permissions.".concat(c,".popover_label")),buttonAriaLabel:g("`permission.manage_permissions_dialog.assign_permissions.${id}.aria`"),isRequired:!0,helperTextInvalid:a.errorMessage,validated:a.validated||o.ValidatedOptions.default},i().createElement(k.P,{variant:o.SelectVariant.single,onToggle:function(e){p(!e),h(e)},onSelect:function(e,n,a){""===n&&(n=void 0),a?(t(l,_(),f),h(!1)):(t(l,n,f),h(!1),m(n))},selections:a.value,isOpen:T,isInputValuePersisted:!0,placeholderText:u,validated:a.validated||o.ValidatedOptions.default,menuAppendTo:v,maxHeight:200,direction:"up"},n.map((function(e,n){return i().createElement(w.SelectOption,O({isDisabled:e.disabled,key:n,value:e.value},e.description&&{description:e.description}),e.title)}))))},C=function(e){var n=e.acl,t=e.row,a=e.childRow,r=void 0===a?0:a,c=e.setAcls,u=e.setEscapeClosesModal,p=e.menuAppendTo,d=e.resourceOperations,m=(0,s.useTranslation)(["kafkaTemporaryFixMe"]).t;return i().createElement(S,{options:(0,l.G6)().filter((function(e){if(void 0===n.resourceType.value||""===n.resourceType.value.toString())return!0;var t=(0,y.snakeCase)(n.resourceType.value.toString()),a=(0,y.snakeCase)(e);return d[t].some((function(e){return e===a}))})).map((function(e){return{value:e,title:(0,g.sentenceCase)(e)}})),selected:n.operation,setSelected:function(e,n,t){c((function(a){return a.map((function(a,r){return r===e&&(Array.isArray(a)&&void 0!==t?a[t].operation={value:n}:a.operation={value:n}),a}))}))},row:t,id:"operation",placeholder:m("permission.manage_permissions_dialog.assign_permissions.operation_placeholder"),setEscapeClosesModal:u,menuAppendTo:p,onClear:function(){return E().operation.value},onSelect:function(e){c((function(n){var a=b(n,t,r);return void 0===e?(a.operation.validated=o.ValidatedOptions.error,a.operation.errorMessage=m("permission.manage_permissions_dialog.assign_permissions.must_select_operation_error")):a.operation.validated=o.ValidatedOptions.default,A(n,a,t,r)}))}})},x=function(e){var n,t=e.acl,a=e.row,r=e.childRow,c=void 0===r?0:r,u=e.setAcls,p=e.setEscapeClosesModal,d=e.menuAppendTo,m=(0,s.useTranslation)(["kafkaTemporaryFixMe"]).t;return t.aclShortcutType?i().createElement(i().Fragment,null,Array.isArray(null==t?void 0:t.operations)&&i().createElement(o.LabelGroup,{numLabels:4},i().createElement(o.Label,{variant:"outline",color:t.permission.value===T.AclPermissionType.Deny?"red":void 0},(0,g.sentenceCase)(t.permission.value||"")),null===(n=null==t?void 0:t.operations)||void 0===n?void 0:n.map((function(e){return i().createElement(o.Label,{variant:"outline",key:e},(0,g.sentenceCase)(e))})))):i().createElement(S,{options:(0,l.mv)().map((function(e){return{value:e,title:(0,g.sentenceCase)(e)}})),selected:t.permission,setSelected:function(e,n,t){u((function(a){return a.map((function(a,r){return r===e&&(Array.isArray(a)&&void 0!==t?a[t].permission={value:n}:a.permission={value:n}),a}))}))},row:a,id:"permission-type",setEscapeClosesModal:p,menuAppendTo:d,onClear:function(){return E().permission.value},onSelect:function(e){u((function(n){var t=b(n,a,c);return void 0===e?(t.permission.validated=o.ValidatedOptions.error,t.permission.errorMessage=m("permission.manage_permissions_dialog.assign_permissions.must_select_permission_error")):t.permission.validated=o.ValidatedOptions.default,A(n,t,a,c)}))}})},M=t(44438),P=t(87892),V=function(e){var n=e.row,t=e.acl,r=e.childRow,c=void 0===r?0:r,u=e.setAcls,p=e.setEscapeClosesModal,d=e.menuAppendTo,m=e.kafkaName,v=t.resourceType,_=(0,s.useTranslation)(["kafkaTemporaryFixMe"]).t;if((t.aclShortcutType===a.ConsumeTopic||t.aclShortcutType===a.ProduceTopic)&&(null==v?void 0:v.value))return i().createElement(i().Fragment,null,i().createElement(M.j,{variant:v.value})," ",(0,P.s)(v.value));if(t.aclShortcutType===a.ManageAccess)return i().createElement(i().Fragment,null,i().createElement(M.j,{variant:T.AclResourceType.Cluster})," ",(0,P.s)(T.AclResourceType.Cluster),' is "',m,'"');return i().createElement(S,{options:(0,l.yN)().map((function(e){return{value:e,title:(0,P.s)(e)}})),selected:t.resourceType,setSelected:function(e,n,t){u((function(a){return a.map((function(a,r){return r===e&&(Array.isArray(a)&&void 0!==t?a[e][t].resourceType={value:n}:a.resourceType={value:n}),a}))}))},row:n,id:"resource-type",placeholder:_("permission.manage_permissions_dialog.assign_permissions.resource_type_placeholder"),setEscapeClosesModal:p,menuAppendTo:d,onClear:function(){return E().resourceType.value},onSelect:function(e){u((function(t){var a=b(t,n,c);return void 0===e?(a.validated=o.ValidatedOptions.error,a.errorMessage=_("permission.manage_permissions_dialog.assign_permissions.must_select_resource_type_error")):a.validated=o.ValidatedOptions.default,A(t,a,n,c)}))}})},R=function(e){var n,t=e.acl,r=e.row,c=e.childRow,u=void 0===c?0:c,p=e.setAcls,d=e.setEscapeClosesModal,m=e.menuAppendTo,v=(0,s.useTranslation)(["kafkaTemporaryFixMe"]).t;if(t.resourceType.value===T.AclResourceType.Cluster||t.aclShortcutType===a.ManageAccess)return i().createElement(i().Fragment,null);return i().createElement(S,{options:null===(n=(0,l.t)())||void 0===n?void 0:n.map((function(e){return{value:e,title:e===T.AclPatternType.Prefixed?v("permission.manage_permissions_dialog.assign_permissions.pattern_type_prefixed"):v("permission.manage_permissions_dialog.assign_permissions.pattern_type_literal"),description:e===T.AclPatternType.Prefixed?v("permission.manage_permissions_dialog.assign_permissions.pattern_type_prefixed_help"):v("permission.manage_permissions_dialog.assign_permissions.pattern_type_literal_help")}})).sort((function(e,n){return n.value.localeCompare(e.value)})),selected:t.patternType,setSelected:function(e,n,t){p((function(a){return a.map((function(a,r){return r===e&&(Array.isArray(a)&&void 0!==t?a[t].patternType={value:n}:a.patternType={value:n}),a}))}))},row:r,childRow:u,id:"pattern-type",setEscapeClosesModal:d,menuAppendTo:m,onClear:function(){return E().patternType.value},onSelect:function(e){p((function(n){var t=b(n,r,u);return void 0===e?(t.patternType.validated=o.ValidatedOptions.error,t.patternType.validated=v("permission.manage_permissions_dialog.assign_permissions.must_select_pattern_type_error")):t.patternType.validated=o.ValidatedOptions.default,A(n,t,r,u)}))}})},N=function(){return N=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e},N.apply(this,arguments)},I=function(e,n,t){if(t||2===arguments.length)for(var a,r=0,i=n.length;r<i;r++)!a&&r in n||(a||(a=Array.prototype.slice.call(n,0,r)),a[r]=n[r]);return e.concat(a||Array.prototype.slice.call(n))},F=function(e){var n=e.row,t=e.setValue,a=e.value,l=e.initialOptions,c=e.id,u=e.placeholder,p=e.onSelect,m=e.setEscapeClosesModal,v=e.menuAppendTo,_=e.childRow,f=(0,s.useTranslation)(["kafkaTemporaryFixMe"]).t,g=(0,r.useState)(!1),y=g[0],T=g[1],h=(0,r.useState)([]),E=h[0],A=h[1];(0,r.useEffect)((function(){A(l().map((function(e){return{value:e}})))}),[l]);var b=function(){t(n,void 0,_),T(!1)};return i().createElement(d.Q,{labelHead:f("permission.manage_permissions_dialog.assign_permissions.".concat(c,".popover_head")),fieldId:c,labelBody:f("permission.manage_permissions_dialog.assign_permissions.".concat(c,".popover_label")),buttonAriaLabel:f("`permission.manage_permissions_dialog.assign_permissions.${id}.aria`"),isRequired:!0,helperTextInvalid:a.errorMessage,validated:a.validated||o.ValidatedOptions.default},i().createElement(o.Select,{variant:o.SelectVariant.typeahead,typeAheadAriaLabel:f("permission.manage_permissions_dialog.assign_permissions.resource_name_aria"),onToggle:function(e){m(!e),T(e)},className:"pf-u-pr-lg-on-lg",onSelect:function(e,a,r){""===a&&(a=void 0),r?b():(t(n,a,_),T(!1),p(a))},onClear:b,selections:a.value,isOpen:y,isInputValuePersisted:!0,placeholderText:u,isCreatable:!0,onCreateOption:function(e){A(I(I([],E,!0),[{value:e}],!1))},createText:f("permission.manage_permissions_dialog.assign_permissions.resource_name_typeahead_create_text"),validated:a.validated||o.ValidatedOptions.default,menuAppendTo:v,maxHeight:200,direction:"up"},E.map((function(e,n){return i().createElement(o.SelectOption,N({isDisabled:e.disabled,key:n,value:e.value},e.description&&{description:e.description}))}))))},L=t(56637),B=function(e){var n,t=e.row,r=e.acl,l=e.childRow,c=void 0===l?0:l,u=e.setAcls,p=e.setEscapeClosesModal,d=e.menuAppendTo,m=e.topicNames,v=e.consumerGroupIds,_=(0,s.useTranslation)(["kafkaTemporaryFixMe"]).t,f=(0,L.N)().validateName;if(r.resourceType.value===T.AclResourceType.Cluster||r.aclShortcutType===a.ManageAccess)return i().createElement(i().Fragment,null);return i().createElement(F,{row:t,childRow:c,value:r.resource,setValue:function(e,n,t){u((function(a){return a.map((function(a,r){return r===e&&(Array.isArray(a)&&void 0!==t?a[t].resource={value:n}:a.resource={value:n}),a}))}))},id:"resource",placeholder:_("permission.manage_permissions_dialog.assign_permissions.pattern_type_".concat((null===(n=r.patternType.value)||void 0===n?void 0:n.toLowerCase())||"prefixed","_placeholder")),setEscapeClosesModal:p,menuAppendTo:d,initialOptions:function(){return r.resourceType.value===T.AclResourceType.Topic?m:r.resourceType.value===T.AclResourceType.Group?v:[]},onSelect:function(e){if("*"===e)u((function(e){var n=b(e,t,c);return n.resource.validated=o.ValidatedOptions.default,A(e,n,t,c)}));else{var n=f(e);void 0!==n?u((function(e){var a=b(e,t,c);return a.validated=o.ValidatedOptions.error,a.errorMessage=n,A(e,a,t,c)})):void 0!==e&&u((function(e){var n=b(e,t,c);return n.validated=o.ValidatedOptions.default,A(e,n,t,c)}))}}})},D=t(90966),j=function(e){var n=e.row,t=e.removeRow,a=(0,s.useTranslation)(["kafkaTemporaryFixMe"]).t;return i().createElement("div",{className:"pf-u-display-flex pf-u-justify-content-flex-end"},i().createElement(o.Tooltip,{content:a("permission.manage_permissions_dialog.assign_permissions.remove_row_help")},i().createElement(o.Button,{variant:"link",icon:i().createElement(D.ZP,null),onClick:function(){return t(n)}})))},G=function(){return G=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e},G.apply(this,arguments)},W=function(e,n,t){if(t||2===arguments.length)for(var a,r=0,i=n.length;r<i;r++)!a&&r in n||(a||(a=Array.prototype.slice.call(n,0,r)),a[r]=n[r]);return e.concat(a||Array.prototype.slice.call(n))},H=function(e){var n=e.acls,t=e.setAcls,r=e.topicNames,l=e.consumerGroupIds,c=e.selectedAccount,u=e.setEscapeClosesModal,p=e.resourceOperations,d=e.menuAppendTo,m=e.kafkaName,g=(0,s.useTranslation)(["kafkaTemporaryFixMe"]).t,y=[{title:g("permission.table.resource_column_title"),columnTransforms:[(0,_.cellWidth)(20)]},{title:"",columnTransforms:[(0,_.cellWidth)(20)]},{title:"",columnTransforms:[(0,_.cellWidth)(20)]},{title:g("permission.table.permissions_column_title"),columnTransforms:[(0,_.cellWidth)(15)]},{title:"",columnTransforms:[(0,_.cellWidth)(15)]},{title:"",columnTransforms:[(0,_.cellWidth)(10)]}],h=function(e){t((function(n){return n.filter((function(n,t){return t!==e}))}))};return i().createElement("div",null,i().createElement(o.TextContent,null,i().createElement(o.Text,{component:o.TextVariants.h2},g("permission.manage_permissions_dialog.assign_permissions.title")),i().createElement(o.Text,{component:o.TextVariants.small},"*"===c?g("permission.manage_permissions_dialog.assign_permissions.help_all_accounts"):g("permission.manage_permissions_dialog.assign_permissions.help",{account_id:c})),n&&n.length>0&&i().createElement(o.Text,{component:o.TextVariants.small},g("permission.manage_permissions_dialog.assign_permissions.all_fields_are_required"))),n&&n.length>0&&i().createElement(_.TableComposable,{variant:"compact"},i().createElement(_.Thead,{noWrap:!0},i().createElement(_.Tr,null,null==y?void 0:y.map((function(e,n){return i().createElement(_.Th,{key:n},e.title)})))),i().createElement(_.Tbody,null,null==n?void 0:n.map((function(e,n){return function(e,n){var s=Array.isArray(e)?e:[e];return s.map((function(e,c){var v,g,y,T;return i().createElement(i().Fragment,null,e.aclShortcutType&&0===c&&i().createElement(_.Tr,{style:{borderBottom:"none"}},i().createElement(_.Td,{colSpan:5},i().createElement(o.TextContent,null,i().createElement(o.Text,{component:o.TextVariants.h6},null===(v=null==e?void 0:e.metaData)||void 0===v?void 0:v.title,i().createElement(o.Popover,{headerContent:i().createElement("div",null,null===(g=e.metaData)||void 0===g?void 0:g.popoverHeader),bodyContent:i().createElement("div",null,null===(y=e.metaData)||void 0===y?void 0:y.popoverBody)},i().createElement(o.Button,{variant:o.ButtonVariant.plain,"aria-label":null===(T=e.metaData)||void 0===T?void 0:T.ariaLabel},i().createElement(f.ZP,null)))))),i().createElement(_.Td,null,i().createElement(j,{acl:e,row:n,removeRow:h}))),i().createElement(_.Tr,{key:n,style:{borderBottom:s.length>1&&0===c?"none":""}},i().createElement(_.Td,{width:e.aclShortcutType===a.ManageAccess?50:20,colSpan:e.aclShortcutType===a.ManageAccess?3:0,noPadding:!0},i().createElement(V,{row:n,acl:e,childRow:c,setAcls:t,menuAppendTo:d,setEscapeClosesModal:u,kafkaName:m})),e.aclShortcutType!==a.ManageAccess&&i().createElement(i().Fragment,null,i().createElement(_.Td,{width:15,noPadding:!0},i().createElement(R,{row:n,acl:e,childRow:c,setAcls:t,menuAppendTo:d,setEscapeClosesModal:u})),i().createElement(_.Td,{width:25,noPadding:!0},i().createElement(B,{acl:e,row:n,childRow:c,setAcls:t,menuAppendTo:d,setEscapeClosesModal:u,topicNames:r,consumerGroupIds:l}))),i().createElement(_.Td,{width:e.aclShortcutType?40:15,colSpan:e.aclShortcutType?3:0,noPadding:!0},i().createElement(x,{acl:e,row:n,childRow:c,setAcls:t,menuAppendTo:d,setEscapeClosesModal:u})),!e.aclShortcutType&&i().createElement(i().Fragment,null,i().createElement(_.Td,{width:15,noPadding:!0},i().createElement(C,{acl:e,row:n,childRow:c,setAcls:t,menuAppendTo:d,setEscapeClosesModal:u,resourceOperations:p})),i().createElement(_.Td,{width:10},i().createElement(j,{acl:e,row:n,removeRow:h})))))}))}(e,n)})))),i().createElement(o.ActionList,null,i().createElement(o.ActionListItem,{className:"appServices-action-list__action-list-item"},i().createElement(v.PermissionsDropdown,{onAddPermission:function(){t((function(e){return W(W([],e,!0),[E()],!1)}))},onShortcutProduceTopic:function(){var e=G(G({},E()),{aclShortcutType:a.ProduceTopic,resourceType:{value:T.AclResourceType.Topic},metaData:{title:g("permission.manage_permissions_dialog.assign_permissions.shortcut_produce_topic"),popoverHeader:g("permission.manage_permissions_dialog.assign_permissions.shortcut_produce_topic"),popoverBody:g("permission.manage_permissions_dialog.assign_permissions.shortcut_produce_topic_description"),ariaLabel:g("permission.manage_permissions_dialog.assign_permissions.shortcut_produce_topic")},operations:[T.AclOperation.Write,T.AclOperation.Create,T.AclOperation.Describe]});t((function(n){return W(W([],n,!0),[e],!1)}))},onShortcutConsumeTopic:function(){var e=[G(G({},E()),{aclShortcutType:a.ConsumeTopic,resourceType:{value:T.AclResourceType.Topic},metaData:{title:g("permission.manage_permissions_dialog.assign_permissions.shortcut_consume_topic"),popoverHeader:g("permission.manage_permissions_dialog.assign_permissions.shortcut_consume_topic"),popoverBody:g("permission.manage_permissions_dialog.assign_permissions.shortcut_consume_topic_description"),ariaLabel:g("permission.manage_permissions_dialog.assign_permissions.shortcut_consume_topic")},operations:[T.AclOperation.Read,T.AclOperation.Describe]}),G(G({},E()),{aclShortcutType:a.ConsumeTopic,resourceType:{value:T.AclResourceType.Group},operations:[T.AclOperation.Read]})];t((function(n){return W(W([],n,!0),[e],!1)}))},onShortcutManageAccess:function(){var e=G(G({},E()),{aclShortcutType:a.ManageAccess,resource:{value:"kafka-cluster"},resourceType:{value:T.AclResourceType.Cluster},patternType:{value:T.AclPatternType.Literal},metaData:{title:g("permission.manage_permissions_dialog.assign_permissions.shortcut_manage_access"),popoverHeader:g("permission.manage_permissions_dialog.assign_permissions.shortcut_manage_access"),popoverBody:g("permission.manage_permissions_dialog.assign_permissions.shortcut_manage_access_description"),ariaLabel:g("permission.manage_permissions_dialog.assign_permissions.shortcut_manage_access")},operations:[T.AclOperation.Alter]});t((function(n){return W(W([],n,!0),[e],!1)}))}}))))},q=t(4055),Q=t(43667),K=t(48418),U=t(90732),Z=function(e,n,t){if(t||2===arguments.length)for(var a,r=0,i=n.length;r<i;r++)!a&&r in n||(a||(a=Array.prototype.slice.call(n,0,r)),a[r]=n[r]);return e.concat(a||Array.prototype.slice.call(n))},$=function(e){var n=e.existingAcls,t=e.selectedAccountId,a=e.onRemove,l=(0,s.useTranslation)(["kafkaTemporaryFixMe"]).t,c=(0,r.useState)([]),u=c[0],p=c[1];(0,r.useEffect)((function(){p(n.map((function(e,n){var t=e;return t.index=n,t})))}),[n]);var d=[{title:l("permission.table.resource_column_title"),columnTransforms:[(0,_.cellWidth)(60)]},{title:l("permission.table.permissions_column_title"),columnTransforms:[(0,_.cellWidth)(20)]},{title:"",columnTransforms:[(0,_.cellWidth)(20)]}],m=[Q.C8,Q.ev,function(e){var n=function(){return i().createElement(o.Tooltip,{content:l("permission.manage_permissions_dialog.assign_permissions.remove_row_help")},i().createElement(o.Button,{variant:"link",icon:i().createElement(K.TrashIcon,null),onClick:function(){return n=e,p(u.map((function(e){return e.hash()===n.hash()&&(e.removed=!0),e}))),void a(n);var n}}))},r=function(){return i().createElement(o.Label,{variant:"outline"},l("permission.table.all_accounts"))};return"*"===t&&"*"===e.principal?{title:i().createElement("div",{className:"pf-u-display-flex pf-u-justify-content-space-between pf-u-justify-content-flex-end-on-lg"},i().createElement(r,null)," ",i().createElement(n,null)),props:{}}:"*"===e.principal?{title:i().createElement("div",{className:"pf-u-display-flex pf-u-justify-content-flex-end-on-lg"},i().createElement(r,null)),props:{}}:{title:i().createElement("div",{className:"pf-u-display-flex pf-u-justify-content-flex-end"},i().createElement(n,null)),props:{}}}];if(void 0===t||0===u.length)return i().createElement(i().Fragment,null);return i().createElement("div",null,i().createElement(o.TextContent,null,i().createElement(o.Text,{component:o.TextVariants.h2},l("permission.manage_permissions_dialog.edit_existing.title")),i().createElement(o.Text,{component:o.TextVariants.small},i().createElement((function(){return"*"===t?l("permission.manage_permissions_dialog.edit_existing.all_accounts_help"):i().createElement(s.Trans,{ns:["kafkaTemporaryFixMe"],i18nKey:"permission.manage_permissions_dialog.edit_existing.help"},"Review the list of existing permissions for the selected account. The list includes account-specific permissions and permissions applied to all accounts within this Kafka instance. Permissions labeled",i().createElement("strong",null,"All accounts")," cannot be removed when an individual account ID is selected.")}),null))),i().createElement(U.w,{tableProps:{cells:d,rows:Z([],u.filter((function(e){return!e.removed})).map((function(e,n){return{cells:m.map((function(t){return t(e,n)})),originalData:e}})),!0),"aria-label":l("permission.table.table.permission_list_table"),shouldDefaultCustomRowWrapper:!0,variant:_.TableVariant.compact,canSelectAll:!1},rowDataTestId:"tablePermissions-row"}))},z=function(e){var n=e.isOpen,t=e.closeModal,a=e.resumeEditing,r=(0,s.useTranslation)(["kafkaTemporaryFixMe"]).t;return i().createElement(o.Modal,{id:"manage-permissions-precancel-modal",variant:o.ModalVariant.small,isOpen:n,"aria-label":r("permission.manage_permissions_pre_cancel_dialog.aria_label"),title:"".concat(r("permission.manage_permissions_pre_cancel_dialog.discard_changes"),"?"),titleIconVariant:"warning",showClose:!0,"aria-describedby":"modal-message",onClose:t,onEscapePress:t,actions:[i().createElement(o.Button,{onClick:t,key:1,variant:o.ButtonVariant.primary},r("permission.manage_permissions_pre_cancel_dialog.discard_changes")),i().createElement(o.Button,{onClick:a,key:2,variant:o.ButtonVariant.secondary},r("permission.manage_permissions_pre_cancel_dialog.resume_editing"))]},r("permission.manage_permissions_pre_cancel_dialog.modal_description"))},J=function(){return J=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++)for(var r in n=arguments[t])Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r]);return e},J.apply(this,arguments)},X=function(e,n,t,a){return new(t||(t=Promise))((function(r,i){function o(e){try{l(a.next(e))}catch(e){i(e)}}function s(e){try{l(a.throw(e))}catch(e){i(e)}}function l(e){var n;e.done?r(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(o,s)}l((a=a.apply(e,n||[])).next())}))},Y=function(e,n){var t,a,r,i,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;o;)try{if(t=1,a&&(r=2&i[0]?a.return:i[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,i[1])).done)return r;switch(a=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,a=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!(r=o.trys,(r=r.length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){o=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){o.label=i[1];break}if(6===i[0]&&o.label<r[1]){o.label=r[1],r=i;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(i);break}r[2]&&o.ops.pop(),o.trys.pop();continue}i=n.call(e,o)}catch(e){i=[6,e],a=0}finally{t=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},ee=function(e,n,t){if(t||2===arguments.length)for(var a,r=0,i=n.length;r<i;r++)!a&&r in n||(a||(a=Array.prototype.slice.call(n,0,r)),a[r]=n[r]);return e.concat(a||Array.prototype.slice.call(n))},ne=function(e){var n=e.hideModal,t=e.onSave,a=e.kafkaName,o=e.selectedAccountId,s=e.acls,u=e.topicNames,p=e.consumerGroupIds,d=e.title,m=e.variant,v=(0,r.useContext)(c.E),_=(0,l.qK)(v),f=(0,r.useState)(),g=f[0],y=f[1];return(0,r.useEffect)((function(){X(void 0,void 0,void 0,(function(){var e;return Y(this,(function(n){switch(n.label){case 0:return[4,_.getResourceOperations()];case 1:return e=n.sent(),y(e),[2]}}))}))}),[]),i().createElement(te,{topicNames:u,consumerGroupIds:p,acls:s,resourceOperations:g,hideModal:n,selectedAccountId:o,onSave:t,kafkaName:a,variant:m,title:d})},te=function(e){var n=e.hideModal,t=e.onSave,v=e.kafkaName,_=e.selectedAccountId,f=e.acls,g=e.topicNames,y=e.consumerGroupIds,E=e.resourceOperations,A=e.title,b=e.variant,k=(0,s.useTranslation)(["kafkaTemporaryFixMe"]).t,w=((0,u.S)()||{}).kafka,O=(0,p.useAuth)(),S=(0,r.useState)({value:_,validated:void 0}),C=S[0],x=S[1],M=(0,r.useState)(void 0===_?1:2),P=M[0],V=M[1],R=(0,r.useState)([]),N=R[0],I=R[1],F=(0,r.useState)([]),B=F[0],D=F[1],j=(0,r.useState)(!1),G=j[0],W=j[1],Q=(0,r.useRef)(!0),K=(0,L.N)().validateName,U=(0,r.useState)(),Z=U[0],ne=U[1],te=(0,p.usePrincipals)(),ae=(0,r.useContext)(c.E),re=(0,l.qK)(ae);(0,r.useEffect)((function(){X(void 0,void 0,void 0,(function(){var e;return Y(this,(function(n){switch(n.label){case 0:return[4,null==O?void 0:O.getUsername()];case 1:return e=n.sent(),ne(e),[2]}}))}))}),[O]);var ie=function(e){return null==e?void 0:e.map((function(e){if(Array.isArray(e)&&ie(e),Array.isArray(e))return e;if(e.aclShortcutType===a.ManageAccess)return e;var n=Object.assign({},e);if(e.aclShortcutType||(void 0===e.operation.value?(n.operation.validated=o.ValidatedOptions.error,n.operation.errorMessage=k("permission.manage_permissions_dialog.assign_permissions.must_select_operation_error")):n.operation.validated=o.ValidatedOptions.default,void 0===e.permission.value?(n.permission.validated=o.ValidatedOptions.error,n.permission.errorMessage=k("permission.manage_permissions_dialog.assign_permissions.must_select_permission_error")):n.permission.validated=o.ValidatedOptions.default),void 0===e.resourceType.value?(n.resourceType.validated=o.ValidatedOptions.error,n.resourceType.errorMessage=k("permission.manage_permissions_dialog.assign_permissions.must_select_resource_type_error")):n.resourceType.validated=o.ValidatedOptions.default,e.resourceType.value!==T.AclResourceType.Cluster){if(void 0===e.resource.value)n.resource.validated=o.ValidatedOptions.error,n.resource.errorMessage=k("permission.manage_permissions_dialog.assign_permissions.must_select_resource_error");else if("*"===e.resource.value)n.resource.validated=o.ValidatedOptions.default;else{var t=K(e.resource.value);void 0!==t?(n.resource.validated=o.ValidatedOptions.error,n.resource.errorMessage=t):n.resource.validated=o.ValidatedOptions.default}void 0===e.patternType.value?(n.patternType.validated=o.ValidatedOptions.error,n.patternType.errorMessage=k("permission.manage_permissions_dialog.assign_permissions.must_select_pattern_type_error")):n.patternType.validated=o.ValidatedOptions.default}return n}))},oe=function(){return X(void 0,void 0,void 0,(function(){var e,a;return Y(this,(function(r){return e=!0,void 0===C.value?(x((function(e){return J(J({},e),{validated:o.ValidatedOptions.error,errorMessage:k("permission.manage_permissions_dialog.must_select_account_error")})})),e=!1):x((function(e){return J(J({},e),{validated:o.ValidatedOptions.default})})),a=ie(N),!ce(a)&&e&&function(e){X(void 0,void 0,void 0,(function(){var a,r,i;return Y(this,(function(o){switch(o.label){case 0:if(!e)return[3,4];for(a=0,r=e.filter((function(e){return h(e)}));a<r.length;a++)i=r[a],(i=Array.isArray(i)?i:[i]).forEach((function(e){var n;if(void 0===e.resourceType.value)throw Error("resourceType must not be undefined");if(e.resourceType.value!==T.AclResourceType.Cluster){if(void 0===e.resource.value)throw Error("resource must not be undefined");if(void 0===e.patternType.value)throw Error("patternType must not be undefined")}else e.resource.value="kafka-cluster",e.patternType.value=T.AclPatternType.Literal;if(void 0===e.permission.value)throw Error("permission must not be undefined");if(void 0===e.operation.value&&!e.aclShortcutType)throw Error("operation must not be undefined");e.operations?null===(n=e.operations)||void 0===n||n.forEach((function(n){e.operation.value=n,se(e)})):se(e)}));return[4,le()];case 1:return o.sent(),t?[4,t()]:[3,3];case 2:o.sent(),o.label=3;case 3:n(),o.label=4;case 4:return[2]}}))}))}(a),I(a),[2]}))}))},se=function(e){return X(void 0,void 0,void 0,(function(){var n,t,a,r,i;return Y(this,(function(o){switch(o.label){case 0:return Array.isArray(e)?[3,2]:(n=e.resource,t=e.patternType,a=e.permission,r=e.resourceType,i=e.operation,(null==n?void 0:n.value)&&(null==t?void 0:t.value)&&(null==a?void 0:a.value)&&(null==r?void 0:r.value)&&(null==i?void 0:i.value)?[4,re.addPermission({resourceName:n.value,patternType:t.value,permission:a.value,resourceType:r.value,operation:i.value,principal:"User:".concat(C.value)})]:[3,2]);case 1:o.sent(),o.label=2;case 2:return[2]}}))}))},le=function(){return X(void 0,void 0,void 0,(function(){var e,n,t;return Y(this,(function(a){switch(a.label){case 0:e=0,n=B,a.label=1;case 1:return e<n.length?(t=n[e],[4,re.deletePermission({resourceName:t.resourceName,patternType:(0,l.L2)(t.patternType,T.AclPatternTypeFilter),permissionType:(0,l.L2)(t.permission,T.AclPermissionTypeFilter),resourceType:(0,l.L2)(t.resourceType,T.AclResourceTypeFilter),operation:(0,l.L2)(t.operation,T.AclOperationFilter),principal:"User:".concat(C.value)})]):[3,4];case 2:a.sent(),a.label=3;case 3:return e++,[3,1];case 4:return[2]}}))}))},ce=function(e){return e.some((function(e){return null==(e=Array.isArray(e)?e:[e])?void 0:e.some((function(e){return"error"===e.operation.validated||"error"===e.patternType.validated||"error"===e.resource.validated||"error"===e.resourceType.validated}))}))},ue=function(){if(2===P){if(void 0===E)return i().createElement(q.y,null);var e=document.getElementById("manage-permissions-modal")||void 0;return i().createElement(i().Fragment,null,i().createElement((function(){return ce(N)?i().createElement(o.FormAlert,null,i().createElement(o.Alert,{variant:"danger",title:k("common:form_invalid_alert"),"aria-live":"polite",isInline:!0})):i().createElement(i().Fragment,null)}),null),i().createElement($,{existingAcls:f.filter((function(e){return e.principal==="".concat(C.value)||"*"===e.principal})),selectedAccountId:C.value,onRemove:function(e){return D((function(n){return ee(ee([],n,!0),[e],!1)}))}}),i().createElement(H,{acls:N,setAcls:I,topicNames:g,consumerGroupIds:y,selectedAccount:C.value,setEscapeClosesModal:me,resourceOperations:E,menuAppendTo:e,kafkaName:v}))}return i().createElement(i().Fragment,null)},pe=te.getAllPrincipals().filter((function(e){return e.id!==Z&&e.id!==(null==w?void 0:w.owner)})),de=function(){return 1===P?i().createElement(m,{id:C,setId:x,initialOptions:pe,setEscapeClosesModal:me}):i().createElement(d.Q,{labelHead:k("permission.manage_permissions_dialog.account_id_title"),fieldId:"kafka-instance-name",fieldLabel:k("permission.manage_permissions_dialog.account_id_title"),labelBody:k("permission.manage_permissions_dialog.account_id_help"),buttonAriaLabel:k("permission.manage_permissions_dialog.account_id_aria"),isRequired:!0},"*"===C.value?k("permission.manage_permissions_dialog.all_accounts_title"):C.value)},me=function(e){Q.current=e},ve=!((null==N?void 0:N.some((function(e){return h(e)})))||B.length>0),_e=function(){2!==P||ve?n():W(!0)};return i().createElement(o.Modal,{id:"manage-permissions-modal",variant:b,isOpen:!0,"aria-label":k("permission.manage_permissions_dialog.aria_label"),position:"top",title:A,showClose:!0,"aria-describedby":"modal-message",onClose:_e,onEscapePress:function(){Q.current&&n()},actions:[i().createElement((function(){return 1===P?i().createElement(o.Button,{variant:"primary",onClick:function(){return V(2)},isDisabled:void 0===C.value},k("permission.manage_permissions_dialog.step_1_submit_button")):i().createElement(o.Button,{variant:"primary",onClick:oe,key:1,isDisabled:ve},k("permission.manage_permissions_dialog.step_2_submit_button"))}),{key:1}),i().createElement(o.Button,{onClick:_e,key:2,variant:"secondary"},k("permission.manage_permissions_dialog.cancel_button"))]},i().createElement(z,{isOpen:G,closeModal:function(){W(!1),n()},resumeEditing:function(){W(!1)}}),i().createElement((function(){return i().createElement(o.Form,null,i().createElement(o.FormGroup,{fieldId:"kafka-instance-name",label:k("permission.manage_permissions_dialog.kafka_instance_title")},v),i().createElement(de,null),i().createElement(ue,null))}),null))};const ae=ne},56637:(e,n,t)=>{t.d(n,{N:()=>r});var a=t(2695),r=function(){var e=(0,a.useTranslation)(["kafkaTemporaryFixMe"]).t;return{validateName:function(n){var t=new RegExp("^[a-zA-Z0-9._-]+$");return n.length&&!t.test(n)?e("topic.topic_name_helper_text"):n.length>249?e("topic.cannot_exceed_characters"):"."===n||".."===n?e("topic.invalid_name_with_dot"):void 0}}}}}]);
//# sourceMappingURL=5598.79e992d8.js.map