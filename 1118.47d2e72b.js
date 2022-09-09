"use strict";(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[1118],{41272:(e,s,a)=>{a.d(s,{Q:()=>n});var i=a(85893),r=a(95107),o=a(34046);const n=({children:e,labelHead:s,fieldId:a,fieldLabel:n,labelBody:t,buttonAriaLabel:l,validated:c,helperText:p,helperTextInvalid:d,isRequired:u})=>(0,i.jsx)(r.FormGroup,Object.assign({fieldId:a,label:n,validated:c,helperText:p,helperTextInvalid:d,isRequired:u,labelIcon:(0,i.jsx)(r.Popover,Object.assign({headerContent:(0,i.jsx)("div",{children:s}),bodyContent:(0,i.jsx)("div",{children:t})},{children:(0,i.jsx)("button",Object.assign({"aria-label":l,onClick:e=>e.preventDefault(),className:"pf-c-form__group-label-help"},{children:(0,i.jsx)(o.ZP,{noVerticalAlign:!0})}))}))},{children:e}))},90732:(e,s,a)=>{a.d(s,{w:()=>d});var i=a(9922),r=a(85893),o=a(41415),n=a(38296),t=a(93264);const l=(0,t.createContext)({activeRow:"",onRowClick:()=>"",loggedInUser:""}),c=l.Provider,p=e=>{const{activeRow:s,onRowClick:a,rowDataTestId:o}=(0,t.useContext)(l),c=e||{},{trRef:p,className:d,rowProps:u,row:m}=c,v=(0,i.__rest)(c,["trRef","className","rowProps","row"]),{rowIndex:_}=u||{},{isExpanded:g,originalData:T}=m||{};return(0,r.jsx)("tr",Object.assign({"data-testid":o,tabIndex:0,ref:"function"==typeof p?void 0:p,className:(0,n.css)(d,"pf-c-table-row__item",s&&s===(null==T?void 0:T.rowId)&&"pf-m-selected pf-m-selectable"),hidden:void 0!==g&&!g,onClick:e=>a&&a(e,_,m)},v))},d=({tableProps:e,tableHeaderProps:s,tableBodyProps:a,children:t,activeRow:l,onRowClick:d,rowDataTestId:u,loggedInUser:m,ouiaId:v})=>{const{cells:_,rows:g,actionResolver:T,onSort:y,sortBy:h,"aria-label":j,variant:x,className:b,shouldDefaultCustomRowWrapper:f=!1}=e,A=(0,i.__rest)(e,["cells","rows","actionResolver","onSort","sortBy","aria-label","variant","className","shouldDefaultCustomRowWrapper"]);return f&&(A.rowWrapper=p),(0,r.jsx)(c,Object.assign({value:{activeRow:l,onRowClick:d,rowDataTestId:u,loggedInUser:m}},{children:(0,r.jsxs)(o.Table,Object.assign({className:(0,n.css)(f&&"mas--table-view__table",b),cells:_,variant:x,rows:g,"aria-label":j,actionResolver:T,onSort:y,sortBy:h},A,{ouiaId:v},{children:[(0,r.jsx)(o.TableHeader,Object.assign({},s)),(0,r.jsx)(o.TableBody,Object.assign({},a)),t]}))}))}},44438:(e,s,a)=>{a.d(s,{j:()=>n});var i=a(85893),r=a(53093),o=a(95107);const n=({variant:e})=>{const{labelColor:s,content:a}=(()=>{switch(e){case r.AclResourceType.Group:return{labelColor:"green",content:"G"};case r.AclResourceType.Cluster:return{labelColor:"grey",content:"KI"};case r.AclResourceType.Topic:return{labelColor:"blue",content:"T"};case r.AclResourceType.TransactionalId:return{labelColor:"orange",content:"TI"}}})();return(0,i.jsx)(o.Label,Object.assign({color:s,className:"mas-m-solid"},{children:a}))}},43667:(e,s,a)=>{a.d(s,{C8:()=>h,QG:()=>T,ev:()=>y});var i=a(9922),r=a(85893),o=a(93264),n=a(12204),t=a(47726),l=a(53093),c=a(95107),p=a(50834),d=a(73866),u=a(87892),m=a(64517),v=a(44438);const _=()=>{const{t:e}=(0,n.useTranslation)(["kafkaTemporaryFixMe"]);return(0,r.jsx)("div",{children:(0,r.jsx)(c.Label,Object.assign({variant:"outline"},{children:e("permission.table.all_accounts")}))})},g=({acl:e})=>{const[s,a]=(0,o.useState)(),n=(0,p.useAuth)(),{kafka:l}=(0,m.S)()||{},d=(0,p.usePrincipals)().getAllPrincipals().filter((e=>e.id!==s&&e.id!==(null==l?void 0:l.owner))).filter((s=>s.id===e.principal));return(0,o.useEffect)((()=>{(0,i.__awaiter)(void 0,void 0,void 0,(function*(){const e=yield null==n?void 0:n.getUsername();a(e)}))}),[n]),1===d.length?d[0].principalType===p.PrincipalType.ServiceAccount?(0,r.jsx)(c.Tooltip,Object.assign({content:(0,r.jsxs)("div",{children:["Type: ",d[0].principalType," ",(0,r.jsx)("br",{})]})},{children:(0,r.jsxs)("span",Object.assign({tabIndex:0},{children:[" ",e.principal," ",(0,r.jsx)(t.InfoCircleIcon,{color:"grey"})]}))})):(0,r.jsx)(c.Tooltip,Object.assign({content:(0,r.jsxs)("div",{children:["Type: ",d[0].principalType," ",(0,r.jsx)("br",{}),"Name: ",d[0].displayName," ",(0,r.jsx)("br",{}),"Email: ",d[0].emailAddress]})},{children:(0,r.jsxs)("span",Object.assign({tabIndex:0},{children:[" ",e.principal," ",(0,r.jsx)(t.InfoCircleIcon,{color:"grey"})]}))})):(0,r.jsxs)("span",{children:[" ",e.principal]})},T=e=>"*"===e.principal?{title:(0,r.jsx)(_,{}),props:{}}:{title:(0,r.jsx)(g,{acl:e}),props:{}},y=e=>({title:(0,r.jsxs)(c.LabelGroup,{children:[e.permission&&(0,r.jsx)(c.Label,Object.assign({variant:"outline",color:e.permission===l.AclPermissionType.Deny?"red":void 0},{children:(0,d.sentenceCase)(e.permission)})),e.operation&&(0,r.jsx)(c.Label,Object.assign({variant:"outline"},{children:(0,d.sentenceCase)(e.operation)}))]}),props:{}}),h=e=>{const s=()=>{const{t:s}=(0,n.useTranslation)(["kafkaTemporaryFixMe"]);return e.patternType===l.AclPatternType.Prefixed?s("permission.cells.pattern_type_prefixed"):s("permission.cells.pattern_type_literal")};return e.resourceType===l.AclResourceType.Cluster?{title:(0,r.jsxs)("div",{children:[(0,r.jsx)(v.j,{variant:e.resourceType})," ",(0,u.s)(e.resourceType)]})}:{title:(0,r.jsxs)("div",{children:[(0,r.jsx)(v.j,{variant:e.resourceType})," ",(0,u.s)(e.resourceType)," ",(0,r.jsx)(s,{}),' "',e.resourceName,'"']})}}},21118:(e,s,a)=>{a.r(s),a.d(s,{ManagePermissions:()=>q,ManagePermissionsModal:()=>U,default:()=>Z});var i=a(9922),r=a(85893),o=a(93264),n=a(95107),t=a(12204),l=a(76621),c=a(3654),p=a(64517),d=a(50834),u=a(41272);const m=({setId:e,id:s,initialOptions:a,setEscapeClosesModal:i})=>{const{t:l}=(0,t.useTranslation)(["kafkaTemporaryFixMe"]),[c,p]=(0,o.useState)(!1),m=()=>{e({value:void 0,validated:void 0}),p(!1)},v=[(0,r.jsx)(n.SelectGroup,{children:(0,r.jsx)(n.SelectOption,Object.assign({value:"*",description:l("permission.manage_permissions_dialog.all_accounts_description")},{children:l("permission.manage_permissions_dialog.all_accounts_title")}),"*")},"all_accounts_group"),(0,r.jsx)(n.Divider,{},"divider"),(0,r.jsx)(n.SelectGroup,Object.assign({label:l("permission.manage_permissions_dialog.all_accounts_service_account_group")},{children:a.filter((e=>e.principalType===d.PrincipalType.ServiceAccount)).sort(((e,s)=>e.displayName&&s.displayName?e.displayName.localeCompare(s.displayName):-1)).map(((e,s)=>(0,r.jsx)(n.SelectOption,Object.assign({value:e.id,description:e.displayName},{children:e.id}),s)))}),"service_accounts_group"),(0,r.jsx)(n.Divider,{},"divider"),(0,r.jsx)(n.SelectGroup,Object.assign({label:l("permission.manage_permissions_dialog.all_accounts_user_account_group")},{children:a.filter((e=>e.principalType===d.PrincipalType.UserAccount)).map(((e,s)=>(0,r.jsx)(n.SelectOption,Object.assign({value:e.id,description:e.displayName},{children:e.id}),s)))}),"user_accounts_group")];return(0,r.jsx)(u.Q,Object.assign({labelHead:l("permission.manage_permissions_dialog.account_id_title"),fieldId:"kafka-instance-name",fieldLabel:l("permission.manage_permissions_dialog.account_id_title"),labelBody:l("permission.manage_permissions_dialog.account_id_help"),buttonAriaLabel:l("permission.manage_permissions_dialog.account_id_aria"),isRequired:!0,helperTextInvalid:s.errorMessage,validated:s.validated||n.ValidatedOptions.default},{children:(0,r.jsx)(n.Select,Object.assign({variant:n.SelectVariant.typeahead,className:"kafka-ui--select--limit-height",typeAheadAriaLabel:l("permission.manage_permissions_dialog.account_id_typeahead_aria"),onToggle:e=>{i(!e),p(e)},onSelect:(s,a,i)=>{i?m():e((()=>""===a?{value:a,validated:n.ValidatedOptions.error,errorMessage:l("permission.manage_permissions_dialog.must_select_account_error")}:{validated:n.ValidatedOptions.default,value:a})),p(!1)},onClear:m,selections:s.value,onFilter:(e,s)=>{if(!s)return v;const a=new RegExp(s,"i");return v.filter((e=>Array.isArray(e.props.children))).map((e=>e.props.children.filter((e=>a.test(e.props.value)||a.test(e.props.description)))))},isOpen:c,placeholderText:l("permission.manage_permissions_dialog.account_id_typeahead_placeholder"),isCreatable:!1,menuAppendTo:"parent",validated:s.validated||n.ValidatedOptions.default,isGrouped:!0},{children:v}))}))};var v=a(70792),_=a(41415),g=a(34046),T=a(73866),y=a(54283),h=a(53093);const j=e=>{const s=b();return(Array.isArray(e)?e:[e]).some((e=>e.aclShortcutType===x.ManageAccess||(e.aclShortcutType?!(e.patternType.value===s.patternType.value&&e.resource.value===s.resource.value):!(e.permission.value===s.permission.value&&e.patternType.value===s.patternType.value&&e.resourceType.value===s.resourceType.value&&e.resource.value===s.resource.value&&e.operation.value===s.operation.value))))};var x;!function(e){e.ConsumeTopic="ConsumeTopic",e.ProduceTopic="ProduceTopic",e.ManageAccess="ManageAccess"}(x||(x={}));const b=()=>({permission:{value:h.AclPermissionType.Allow},operation:{value:void 0},resourceType:{value:void 0},patternType:{value:h.AclPatternType.Prefixed},resource:{value:void 0},aclShortcutType:void 0}),f=(e,s,a,i=0)=>{const r=e[a];return Array.isArray(r)&&void 0!==i?r[i]=s:e[a]=s,e},A=(e,s,a=0)=>{const i=e[s];return Array.isArray(i)?i[a]:i};var O=a(80887),w=a(77221);const C=({options:e,setSelected:s,selected:a,row:i,id:l,placeholder:c,setEscapeClosesModal:p,onSelect:d,menuAppendTo:m,onClear:v,childRow:_})=>{const{t:g}=(0,t.useTranslation)(["kafkaTemporaryFixMe"]),[T,y]=(0,o.useState)(!1);return(0,r.jsx)(u.Q,Object.assign({labelHead:g(`permission.manage_permissions_dialog.assign_permissions.${l}.popover_head`),fieldId:l,labelBody:g(`permission.manage_permissions_dialog.assign_permissions.${l}.popover_label`),buttonAriaLabel:g("`permission.manage_permissions_dialog.assign_permissions.${id}.aria`"),isRequired:!0,helperTextInvalid:a.errorMessage,validated:a.validated||n.ValidatedOptions.default},{children:(0,r.jsx)(O.P,Object.assign({variant:n.SelectVariant.single,onToggle:e=>{p(!e),y(e)},onSelect:(e,a,r)=>{const o=""===a?void 0:a;r?(s(i,v(),_),y(!1)):(s(i,o,_),y(!1),o&&d(o))},selections:a.value,isOpen:T,isInputValuePersisted:!0,placeholderText:c,validated:a.validated||n.ValidatedOptions.default,menuAppendTo:m,maxHeight:200,direction:"up"},{children:e.map(((e,s)=>(0,r.jsx)(w.SelectOption,Object.assign({isDisabled:e.disabled,value:e.value},e.description&&{description:e.description},{children:e.title}),s)))}))}))},k=({acl:e,row:s,childRow:a=0,setAcls:i,setEscapeClosesModal:o,menuAppendTo:c,resourceOperations:p})=>{const{t:d}=(0,t.useTranslation)(["kafkaTemporaryFixMe"]);return(0,r.jsx)(C,{options:(0,l.G6)().filter((s=>{if(void 0===e.resourceType.value||""===e.resourceType.value.toString())return!0;const a=(0,y.snakeCase)(e.resourceType.value.toString()),i=(0,y.snakeCase)(s);return p[a].some((e=>e===i))})).map((e=>({value:e,title:(0,T.sentenceCase)(e)}))),selected:e.operation,setSelected:(e,s,a)=>{i((i=>i.map(((i,r)=>(r===e&&(Array.isArray(i)?void 0!==a&&(i[a].operation={value:s}):i.operation={value:s}),i)))))},row:s,id:"operation",placeholder:d("permission.manage_permissions_dialog.assign_permissions.operation_placeholder"),setEscapeClosesModal:o,menuAppendTo:c,onClear:()=>b().operation.value,onSelect:e=>{i((i=>{const r=A(i,s,a);return void 0===e?(r.operation.validated=n.ValidatedOptions.error,r.operation.errorMessage=d("permission.manage_permissions_dialog.assign_permissions.must_select_operation_error")):r.operation.validated=n.ValidatedOptions.default,f(i,r,s,a)}))}})},S=({acl:e,row:s,childRow:a=0,setAcls:i,setEscapeClosesModal:o,menuAppendTo:c})=>{var p;const{t:d}=(0,t.useTranslation)(["kafkaTemporaryFixMe"]);return e.aclShortcutType?(0,r.jsx)(r.Fragment,{children:Array.isArray(null==e?void 0:e.operations)&&(0,r.jsxs)(n.LabelGroup,Object.assign({numLabels:4},{children:[(0,r.jsx)(n.Label,Object.assign({variant:"outline",color:e.permission.value===h.AclPermissionType.Deny?"red":void 0},{children:(0,T.sentenceCase)(e.permission.value||"")})),null===(p=null==e?void 0:e.operations)||void 0===p?void 0:p.map((e=>(0,r.jsx)(n.Label,Object.assign({variant:"outline"},{children:(0,T.sentenceCase)(e)}),e)))]}))}):(0,r.jsx)(C,{options:(0,l.mv)().map((e=>({value:e,title:(0,T.sentenceCase)(e)}))),selected:e.permission,setSelected:(e,s,a)=>{i((i=>i.map(((i,r)=>(r===e&&(Array.isArray(i)?void 0!==a&&(i[a].permission={value:s}):i.permission={value:s}),i)))))},row:s,id:"permission-type",setEscapeClosesModal:o,menuAppendTo:c,onClear:()=>b().permission.value,onSelect:e=>{i((i=>{const r=A(i,s,a);return void 0===e?(r.permission.validated=n.ValidatedOptions.error,r.permission.errorMessage=d("permission.manage_permissions_dialog.assign_permissions.must_select_permission_error")):r.permission.validated=n.ValidatedOptions.default,f(i,r,s,a)}))}})};var M=a(44438),R=a(87892);const P=({row:e,acl:s,childRow:a=0,setAcls:i,setEscapeClosesModal:o,menuAppendTo:n,kafkaName:c})=>{const{resourceType:p}=s,{t:d}=(0,t.useTranslation)(["kafkaTemporaryFixMe"]);if((s.aclShortcutType===x.ConsumeTopic||s.aclShortcutType===x.ProduceTopic)&&(null==p?void 0:p.value))return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(M.j,{variant:p.value})," ",(0,R.s)(p.value)]});if(s.aclShortcutType===x.ManageAccess)return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(M.j,{variant:h.AclResourceType.Cluster})," ",(0,R.s)(h.AclResourceType.Cluster),' is "',c,'"']});return(0,r.jsx)(C,{options:(0,l.yN)().map((e=>({value:e,title:(0,R.s)(e)}))),selected:s.resourceType,setSelected:(e,s)=>{i((a=>a.map(((a,i)=>(i===e&&(Array.isArray(a)?a[e].resourceType={value:s}:a.resourceType={value:s}),a)))))},row:e,id:"resource-type",placeholder:d("permission.manage_permissions_dialog.assign_permissions.resource_type_placeholder"),setEscapeClosesModal:o,menuAppendTo:n,onClear:()=>b().resourceType.value,onSelect:s=>{i((s=>{const i=A(s,e,a);return f(s,i,e,a)}))}})},I=({acl:e,row:s,childRow:a=0,setAcls:i,setEscapeClosesModal:o,menuAppendTo:c})=>{var p;const{t:d}=(0,t.useTranslation)(["kafkaTemporaryFixMe"]);if(e.resourceType.value===h.AclResourceType.Cluster||e.aclShortcutType===x.ManageAccess)return(0,r.jsx)(r.Fragment,{});return(0,r.jsx)(C,{options:null===(p=(0,l.t)())||void 0===p?void 0:p.map((e=>({value:e,title:e===h.AclPatternType.Prefixed?d("permission.manage_permissions_dialog.assign_permissions.pattern_type_prefixed"):d("permission.manage_permissions_dialog.assign_permissions.pattern_type_literal"),description:e===h.AclPatternType.Prefixed?d("permission.manage_permissions_dialog.assign_permissions.pattern_type_prefixed_help"):d("permission.manage_permissions_dialog.assign_permissions.pattern_type_literal_help")}))).sort(((e,s)=>s.value.localeCompare(e.value))),selected:e.patternType,setSelected:(e,s,a)=>{i((i=>i.map(((i,r)=>(r===e&&(Array.isArray(i)?void 0!==a&&(i[a].patternType={value:s}):i.patternType={value:s}),i)))))},row:s,childRow:a,id:"pattern-type",setEscapeClosesModal:o,menuAppendTo:c,onClear:()=>b().patternType.value,onSelect:e=>{i((i=>{const r=A(i,s,a);return void 0===e?(r.patternType.validated=n.ValidatedOptions.error,r.patternType.validated=d("permission.manage_permissions_dialog.assign_permissions.must_select_pattern_type_error")):r.patternType.validated=n.ValidatedOptions.default,f(i,r,s,a)}))}})},N=({row:e,setValue:s,value:a,initialOptions:i,id:l,placeholder:c,onSelect:p,setEscapeClosesModal:d,menuAppendTo:m,childRow:v})=>{const{t:_}=(0,t.useTranslation)(["kafkaTemporaryFixMe"]),[g,T]=(0,o.useState)(!1),[y,h]=(0,o.useState)([]);(0,o.useEffect)((()=>{h(i().map((e=>({value:e}))))}),[i]);const j=()=>{s(e,void 0,v),T(!1)};return(0,r.jsx)(u.Q,Object.assign({labelHead:_(`permission.manage_permissions_dialog.assign_permissions.${l}.popover_head`),fieldId:l,labelBody:_(`permission.manage_permissions_dialog.assign_permissions.${l}.popover_label`),buttonAriaLabel:_("`permission.manage_permissions_dialog.assign_permissions.${id}.aria`"),isRequired:!0,helperTextInvalid:a.errorMessage,validated:a.validated||n.ValidatedOptions.default},{children:(0,r.jsx)(n.Select,Object.assign({variant:n.SelectVariant.typeahead,typeAheadAriaLabel:_("permission.manage_permissions_dialog.assign_permissions.resource_name_aria"),onToggle:e=>{d(!e),T(e)},className:"pf-u-pr-lg-on-lg",onSelect:(a,i,r)=>{const o=""===i?void 0:i;r?j():(s(e,o,v),T(!1),p(o||""))},onClear:j,selections:a.value,isOpen:g,isInputValuePersisted:!0,placeholderText:c,isCreatable:!0,onCreateOption:e=>{h([...y,{value:e}])},createText:_("permission.manage_permissions_dialog.assign_permissions.resource_name_typeahead_create_text"),validated:a.validated||n.ValidatedOptions.default,menuAppendTo:m,maxHeight:200,direction:"up"},{children:y.map(((e,s)=>(0,r.jsx)(n.SelectOption,Object.assign({isDisabled:e.disabled,value:e.value},e.description&&{description:e.description}),s)))}))}))};var V=a(56637);const E=({row:e,acl:s,childRow:a=0,setAcls:i,setEscapeClosesModal:o,menuAppendTo:l,topicNames:c,consumerGroupIds:p})=>{var d;const{t:u}=(0,t.useTranslation)(["kafkaTemporaryFixMe"]),{validateName:m}=(0,V.N)();if(s.resourceType.value===h.AclResourceType.Cluster||s.aclShortcutType===x.ManageAccess)return(0,r.jsx)(r.Fragment,{});return(0,r.jsx)(N,{row:e,childRow:a,value:s.resource,setValue:(e,s,a)=>{i((i=>i.map(((i,r)=>(r===e&&(Array.isArray(i)?void 0!==a&&(i[a].resource={value:s}):i.resource={value:s}),i)))))},id:"resource",placeholder:u(`permission.manage_permissions_dialog.assign_permissions.pattern_type_${(null===(d=s.patternType.value)||void 0===d?void 0:d.toLowerCase())||"prefixed"}_placeholder`),setEscapeClosesModal:o,menuAppendTo:l,initialOptions:()=>s.resourceType.value===h.AclResourceType.Topic?c:s.resourceType.value===h.AclResourceType.Group?p:[],onSelect:s=>{if("*"===s)i((s=>{const i=A(s,e,a);return i.resource.validated=n.ValidatedOptions.default,f(s,i,e,a)}));else{void 0!==m(s)?i((s=>{const i=A(s,e,a);return f(s,i,e,a)})):void 0!==s&&i((s=>{const i=A(s,e,a);return f(s,i,e,a)}))}}})};var F=a(90966);const L=({row:e,removeRow:s})=>{const{t:a}=(0,t.useTranslation)(["kafkaTemporaryFixMe"]);return(0,r.jsx)("div",Object.assign({className:"pf-u-display-flex pf-u-justify-content-flex-end"},{children:(0,r.jsx)(n.Tooltip,Object.assign({content:a("permission.manage_permissions_dialog.assign_permissions.remove_row_help")},{children:(0,r.jsx)(n.Button,{variant:"link",icon:(0,r.jsx)(F.ZP,{}),onClick:()=>s(e)})}))}))},D=({acls:e,setAcls:s,topicNames:a,consumerGroupIds:i,selectedAccount:o,setEscapeClosesModal:l,resourceOperations:c,menuAppendTo:p,kafkaName:d})=>{const{t:u}=(0,t.useTranslation)(["kafkaTemporaryFixMe"]),m=[{title:u("permission.table.resource_column_title"),columnTransforms:[(0,_.cellWidth)(20)]},{title:"",columnTransforms:[(0,_.cellWidth)(20)]},{title:"",columnTransforms:[(0,_.cellWidth)(20)]},{title:u("permission.table.permissions_column_title"),columnTransforms:[(0,_.cellWidth)(15)]},{title:"",columnTransforms:[(0,_.cellWidth)(15)]},{title:"",columnTransforms:[(0,_.cellWidth)(10)]}],T=e=>{s((s=>s.filter(((s,a)=>a!==e))))};return(0,r.jsxs)("div",{children:[(0,r.jsxs)(n.TextContent,{children:[(0,r.jsx)(n.Text,Object.assign({component:n.TextVariants.h2},{children:u("permission.manage_permissions_dialog.assign_permissions.title")})),(0,r.jsx)(n.Text,Object.assign({component:n.TextVariants.small},{children:"*"===o?u("permission.manage_permissions_dialog.assign_permissions.help_all_accounts"):u("permission.manage_permissions_dialog.assign_permissions.help",{account_id:o})})),e&&e.length>0&&(0,r.jsx)(n.Text,Object.assign({component:n.TextVariants.small},{children:u("permission.manage_permissions_dialog.assign_permissions.all_fields_are_required")}))]}),e&&e.length>0&&(0,r.jsxs)(_.TableComposable,Object.assign({variant:"compact"},{children:[(0,r.jsx)(_.Thead,Object.assign({noWrap:!0},{children:(0,r.jsx)(_.Tr,{children:null==m?void 0:m.map(((e,s)=>(0,r.jsx)(_.Th,{children:e.title},s)))})})),(0,r.jsx)(_.Tbody,{children:null==e?void 0:e.map(((e,o)=>((e,o)=>{const t=Array.isArray(e)?e:[e];return t.map(((e,u)=>{var m,v,y,h;return(0,r.jsxs)(r.Fragment,{children:[e.aclShortcutType&&0===u&&(0,r.jsxs)(_.Tr,Object.assign({style:{borderBottom:"none"}},{children:[(0,r.jsx)(_.Td,Object.assign({colSpan:5},{children:(0,r.jsx)(n.TextContent,{children:(0,r.jsxs)(n.Text,Object.assign({component:n.TextVariants.h6},{children:[null===(m=null==e?void 0:e.metaData)||void 0===m?void 0:m.title,(0,r.jsx)(n.Popover,Object.assign({headerContent:(0,r.jsx)("div",{children:null===(v=e.metaData)||void 0===v?void 0:v.popoverHeader}),bodyContent:(0,r.jsx)("div",{children:null===(y=e.metaData)||void 0===y?void 0:y.popoverBody})},{children:(0,r.jsx)(n.Button,Object.assign({variant:n.ButtonVariant.plain,"aria-label":null===(h=e.metaData)||void 0===h?void 0:h.ariaLabel},{children:(0,r.jsx)(g.ZP,{})}))}))]}))})})),(0,r.jsx)(_.Td,{children:(0,r.jsx)(L,{acl:e,row:o,removeRow:T})})]})),(0,r.jsxs)(_.Tr,Object.assign({style:{borderBottom:t.length>1&&0===u?"none":""}},{children:[(0,r.jsx)(_.Td,Object.assign({width:e.aclShortcutType===x.ManageAccess?50:20,colSpan:e.aclShortcutType===x.ManageAccess?3:0,noPadding:!0},{children:(0,r.jsx)(P,{row:o,acl:e,childRow:u,setAcls:s,menuAppendTo:p,setEscapeClosesModal:l,kafkaName:d})})),e.aclShortcutType!==x.ManageAccess&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(_.Td,Object.assign({width:15,noPadding:!0},{children:(0,r.jsx)(I,{row:o,acl:e,childRow:u,setAcls:s,menuAppendTo:p,setEscapeClosesModal:l})})),(0,r.jsx)(_.Td,Object.assign({width:25,noPadding:!0},{children:(0,r.jsx)(E,{acl:e,row:o,childRow:u,setAcls:s,menuAppendTo:p,setEscapeClosesModal:l,topicNames:a,consumerGroupIds:i})}))]}),(0,r.jsx)(_.Td,Object.assign({width:e.aclShortcutType?40:15,colSpan:e.aclShortcutType?3:0,noPadding:!0},{children:(0,r.jsx)(S,{acl:e,row:o,childRow:u,setAcls:s,menuAppendTo:p,setEscapeClosesModal:l})})),!e.aclShortcutType&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(_.Td,Object.assign({width:15,noPadding:!0},{children:(0,r.jsx)(k,{acl:e,row:o,childRow:u,setAcls:s,menuAppendTo:p,setEscapeClosesModal:l,resourceOperations:c})})),(0,r.jsx)(_.Td,Object.assign({width:10},{children:(0,r.jsx)(L,{acl:e,row:o,removeRow:T})}))]})]}),o)]})}))})(e,o)))})]})),(0,r.jsx)(n.ActionList,{children:(0,r.jsx)(n.ActionListItem,Object.assign({className:"appServices-action-list__action-list-item"},{children:(0,r.jsx)(v.PermissionsDropdown,{onAddPermission:e=>{e.stopPropagation(),e.preventDefault(),s((e=>[...e,b()]))},onShortcutProduceTopic:()=>{const e=Object.assign(Object.assign({},b()),{aclShortcutType:x.ProduceTopic,resourceType:{value:h.AclResourceType.Topic},metaData:{title:u("permission.manage_permissions_dialog.assign_permissions.shortcut_produce_topic"),popoverHeader:u("permission.manage_permissions_dialog.assign_permissions.shortcut_produce_topic"),popoverBody:u("permission.manage_permissions_dialog.assign_permissions.shortcut_produce_topic_description"),ariaLabel:u("permission.manage_permissions_dialog.assign_permissions.shortcut_produce_topic")},operations:[h.AclOperation.Write,h.AclOperation.Create,h.AclOperation.Describe]});s((s=>[...s,e]))},onShortcutConsumeTopic:()=>{const e=[Object.assign(Object.assign({},b()),{aclShortcutType:x.ConsumeTopic,resourceType:{value:h.AclResourceType.Topic},metaData:{title:u("permission.manage_permissions_dialog.assign_permissions.shortcut_consume_topic"),popoverHeader:u("permission.manage_permissions_dialog.assign_permissions.shortcut_consume_topic"),popoverBody:u("permission.manage_permissions_dialog.assign_permissions.shortcut_consume_topic_description"),ariaLabel:u("permission.manage_permissions_dialog.assign_permissions.shortcut_consume_topic")},operations:[h.AclOperation.Read,h.AclOperation.Describe]}),Object.assign(Object.assign({},b()),{aclShortcutType:x.ConsumeTopic,resourceType:{value:h.AclResourceType.Group},operations:[h.AclOperation.Read]})];s((s=>[...s,e]))},onShortcutManageAccess:()=>{const e=Object.assign(Object.assign({},b()),{aclShortcutType:x.ManageAccess,resource:{value:"kafka-cluster"},resourceType:{value:h.AclResourceType.Cluster},patternType:{value:h.AclPatternType.Literal},metaData:{title:u("permission.manage_permissions_dialog.assign_permissions.shortcut_manage_access"),popoverHeader:u("permission.manage_permissions_dialog.assign_permissions.shortcut_manage_access"),popoverBody:u("permission.manage_permissions_dialog.assign_permissions.shortcut_manage_access_description"),ariaLabel:u("permission.manage_permissions_dialog.assign_permissions.shortcut_manage_access")},operations:[h.AclOperation.Alter]});s((s=>[...s,e]))}})}))})]})};var B=a(43667),G=a(47726),$=a(90732);const W=({existingAcls:e,selectedAccountId:s,onRemove:a})=>{const{t:i}=(0,t.useTranslation)(["kafkaTemporaryFixMe"]),[l,c]=(0,o.useState)([]);(0,o.useEffect)((()=>{c(e.map(((e,s)=>{const a=e;return a.index=s,a})))}),[e]);const p=[{title:i("permission.table.resource_column_title"),columnTransforms:[(0,_.cellWidth)(60)]},{title:i("permission.table.permissions_column_title"),columnTransforms:[(0,_.cellWidth)(20)]},{title:"",columnTransforms:[(0,_.cellWidth)(20)]}],d=[B.C8,B.ev,e=>{const o=()=>(0,r.jsx)(n.Tooltip,Object.assign({content:i("permission.manage_permissions_dialog.assign_permissions.remove_row_help")},{children:(0,r.jsx)(n.Button,{variant:"link",icon:(0,r.jsx)(G.TrashIcon,{}),onClick:()=>{return s=e,c(l.map((e=>(e.hash()===s.hash()&&(e.removed=!0),e)))),void a(s);var s}})})),t=()=>(0,r.jsx)(n.Label,Object.assign({variant:"outline"},{children:i("permission.table.all_accounts")}));return"*"===s&&"*"===e.principal?{title:(0,r.jsxs)("div",Object.assign({className:"pf-u-display-flex pf-u-justify-content-space-between pf-u-justify-content-flex-end-on-lg"},{children:[(0,r.jsx)(t,{})," ",(0,r.jsx)(o,{})]})),props:{}}:"*"===e.principal?{title:(0,r.jsx)("div",Object.assign({className:"pf-u-display-flex pf-u-justify-content-flex-end-on-lg"},{children:(0,r.jsx)(t,{})})),props:{}}:{title:(0,r.jsx)("div",Object.assign({className:"pf-u-display-flex pf-u-justify-content-flex-end"},{children:(0,r.jsx)(o,{})})),props:{}}}];if(void 0===s||0===l.length)return(0,r.jsx)(r.Fragment,{});return(0,r.jsxs)("div",{children:[(0,r.jsxs)(n.TextContent,{children:[(0,r.jsx)(n.Text,Object.assign({component:n.TextVariants.h2},{children:i("permission.manage_permissions_dialog.edit_existing.title")})),(0,r.jsx)(n.Text,Object.assign({component:n.TextVariants.small},{children:(0,r.jsx)((()=>"*"===s?i("permission.manage_permissions_dialog.edit_existing.all_accounts_help"):(0,r.jsxs)(t.Trans,Object.assign({ns:["kafkaTemporaryFixMe"],i18nKey:"permission.manage_permissions_dialog.edit_existing.help"},{children:["Review the list of existing permissions for the selected account. The list includes account-specific permissions and permissions applied to all accounts within this Kafka instance. Permissions labeled",(0,r.jsx)("strong",{children:"All accounts"})," cannot be removed when an individual account ID is selected."]}))),{})}))]}),(0,r.jsx)($.w,{tableProps:{cells:p,rows:[...l.filter((e=>!e.removed)).map(((e,s)=>({cells:d.map((a=>a(e,s))),originalData:e})))],"aria-label":i("permission.table.table.permission_list_table"),shouldDefaultCustomRowWrapper:!0,variant:_.TableVariant.compact,canSelectAll:!1},rowDataTestId:"tablePermissions-row"})]})},H=({isOpen:e,closeModal:s,resumeEditing:a})=>{const{t:i}=(0,t.useTranslation)(["kafkaTemporaryFixMe"]);return(0,r.jsx)(n.Modal,Object.assign({id:"manage-permissions-precancel-modal",variant:n.ModalVariant.small,isOpen:e,"aria-label":i("permission.manage_permissions_pre_cancel_dialog.aria_label"),title:`${i("permission.manage_permissions_pre_cancel_dialog.discard_changes")}?`,titleIconVariant:"warning",showClose:!0,"aria-describedby":"modal-message",onClose:s,onEscapePress:s,actions:[(0,r.jsx)(n.Button,Object.assign({onClick:s,variant:n.ButtonVariant.primary},{children:i("permission.manage_permissions_pre_cancel_dialog.discard_changes")}),1),(0,r.jsx)(n.Button,Object.assign({onClick:a,variant:n.ButtonVariant.secondary},{children:i("permission.manage_permissions_pre_cancel_dialog.resume_editing")}),2)]},{children:i("permission.manage_permissions_pre_cancel_dialog.modal_description")}))},q=({hideModal:e,onSave:s,kafkaName:a,selectedAccountId:n,acls:t,topicNames:p,consumerGroupIds:d,title:u,variant:m})=>{const v=(0,o.useContext)(c.E),_=(0,l.qK)(v),{getResourceOperations:g}=_,[T,y]=(0,o.useState)();return(0,o.useEffect)((()=>{(0,i.__awaiter)(void 0,void 0,void 0,(function*(){const e=yield g();y(e)}))}),[g]),(0,r.jsx)(U,{topicNames:p,consumerGroupIds:d,acls:t,resourceOperations:T,hideModal:e,selectedAccountId:n,onSave:s,kafkaName:a,variant:m,title:u})},U=({hideModal:e,onSave:s,kafkaName:a,selectedAccountId:v,acls:_,topicNames:g,consumerGroupIds:T,resourceOperations:y,title:b,variant:f})=>{const{t:A}=(0,t.useTranslation)(["kafkaTemporaryFixMe"]),{kafka:O}=(0,p.S)()||{},w=(0,d.useAuth)(),[C,k]=(0,o.useState)({value:v,validated:void 0}),[S,M]=(0,o.useState)(void 0===v?1:2),[R,P]=(0,o.useState)([]),[I,N]=(0,o.useState)([]),[E,F]=(0,o.useState)(!1),L=(0,o.useRef)(!0),{validateName:D}=(0,V.N)(),[B,G]=(0,o.useState)(),$=(0,d.usePrincipals)(),W=(0,o.useContext)(c.E),q=(0,l.qK)(W);(0,o.useEffect)((()=>{(0,i.__awaiter)(void 0,void 0,void 0,(function*(){const e=yield null==w?void 0:w.getUsername();G(e)}))}),[w]);const U=e=>null==e?void 0:e.map((e=>{if(Array.isArray(e)&&U(e),Array.isArray(e))return e;{if(e.aclShortcutType===x.ManageAccess)return e;const s=Object.assign({},e);if(e.aclShortcutType||(void 0===e.operation.value?(s.operation.validated=n.ValidatedOptions.error,s.operation.errorMessage=A("permission.manage_permissions_dialog.assign_permissions.must_select_operation_error")):s.operation.validated=n.ValidatedOptions.default,void 0===e.permission.value?(s.permission.validated=n.ValidatedOptions.error,s.permission.errorMessage=A("permission.manage_permissions_dialog.assign_permissions.must_select_permission_error")):s.permission.validated=n.ValidatedOptions.default),void 0===e.resourceType.value?(s.resourceType.validated=n.ValidatedOptions.error,s.resourceType.errorMessage=A("permission.manage_permissions_dialog.assign_permissions.must_select_resource_type_error")):s.resourceType.validated=n.ValidatedOptions.default,e.resourceType.value!==h.AclResourceType.Cluster){if(void 0===e.resource.value)s.resource.validated=n.ValidatedOptions.error,s.resource.errorMessage=A("permission.manage_permissions_dialog.assign_permissions.must_select_resource_error");else if("*"===e.resource.value)s.resource.validated=n.ValidatedOptions.default;else{const a=D(e.resource.value);void 0!==a?(s.resource.validated=n.ValidatedOptions.error,s.resource.errorMessage=a):s.resource.validated=n.ValidatedOptions.default}void 0===e.patternType.value?(s.patternType.validated=n.ValidatedOptions.error,s.patternType.errorMessage=A("permission.manage_permissions_dialog.assign_permissions.must_select_pattern_type_error")):s.patternType.validated=n.ValidatedOptions.default}return s}})),Z=e=>(0,i.__awaiter)(void 0,void 0,void 0,(function*(){if(!Array.isArray(e)){const{resource:s,patternType:a,permission:i,resourceType:r,operation:o}=e;(null==s?void 0:s.value)&&(null==a?void 0:a.value)&&(null==i?void 0:i.value)&&(null==r?void 0:r.value)&&(null==o?void 0:o.value)&&(yield q.addPermission({resourceName:s.value,patternType:a.value,permission:i.value,resourceType:r.value,operation:o.value,principal:`User:${C.value}`}))}})),z=()=>(0,i.__awaiter)(void 0,void 0,void 0,(function*(){for(const e of I)yield q.deletePermission({resourceName:e.resourceName,patternType:(0,l.L2)(e.patternType,h.AclPatternTypeFilter),permissionType:(0,l.L2)(e.permission,h.AclPermissionTypeFilter),resourceType:(0,l.L2)(e.resourceType,h.AclResourceTypeFilter),operation:(0,l.L2)(e.operation,h.AclOperationFilter),principal:`User:${C.value}`})})),Y=$.getAllPrincipals().filter((e=>e.id!==B&&e.id!==(null==O?void 0:O.owner))),J=e=>{L.current=e},X=!((null==R?void 0:R.some((e=>j(e))))||I.length>0),ee=()=>{2!==S||X?e():F(!0)},se=(_||[]).filter((e=>C.value&&e.principal===`${C.value}`||"*"===e.principal));return(0,r.jsxs)(n.Modal,Object.assign({id:"manage-permissions-modal",variant:f,isOpen:!0,"aria-label":A("permission.manage_permissions_dialog.aria_label"),position:"top",title:b,showClose:!0,"aria-describedby":"modal-message",onClose:ee,onEscapePress:()=>{L.current&&e()},actions:[1===S?(0,r.jsx)(n.Button,Object.assign({variant:"primary",onClick:()=>M(2),isDisabled:void 0===C.value},{children:A("permission.manage_permissions_dialog.step_1_submit_button")}),"step1"):(0,r.jsx)(n.Button,Object.assign({variant:"primary",onClick:()=>(0,i.__awaiter)(void 0,void 0,void 0,(function*(){let a=!0;void 0===C.value?(k((e=>Object.assign(Object.assign({},e),{validated:n.ValidatedOptions.error,errorMessage:A("permission.manage_permissions_dialog.must_select_account_error")}))),a=!1):k((e=>Object.assign(Object.assign({},e),{validated:n.ValidatedOptions.default})));const r=U(R);!Q(r)&&a&&(a=>{(0,i.__awaiter)(void 0,void 0,void 0,(function*(){if(a){for(let e of a.filter((e=>j(e))))e=Array.isArray(e)?e:[e],e.forEach((e=>{var s;if(void 0===e.resourceType.value)throw Error("resourceType must not be undefined");if(e.resourceType.value!==h.AclResourceType.Cluster){if(void 0===e.resource.value)throw Error("resource must not be undefined");if(void 0===e.patternType.value)throw Error("patternType must not be undefined")}else e.resource.value="kafka-cluster",e.patternType.value=h.AclPatternType.Literal;if(void 0===e.permission.value)throw Error("permission must not be undefined");if(void 0===e.operation.value&&!e.aclShortcutType)throw Error("operation must not be undefined");e.operations?null===(s=e.operations)||void 0===s||s.forEach((s=>{e.operation.value=s,Z(e)})):Z(e)}));yield z(),s&&(yield s()),e()}}))})(r),P(r)})),isDisabled:X},{children:A("permission.manage_permissions_dialog.step_2_submit_button")}),"step2"),(0,r.jsx)(n.Button,Object.assign({onClick:ee,variant:"secondary"},{children:A("permission.manage_permissions_dialog.cancel_button")}),"cancel")]},{children:[(0,r.jsx)(H,{isOpen:E,closeModal:()=>{F(!1),e()},resumeEditing:()=>{F(!1)}}),(0,r.jsxs)(n.Form,{children:[(0,r.jsx)(n.FormGroup,Object.assign({fieldId:"kafka-instance-name",label:A("permission.manage_permissions_dialog.kafka_instance_title")},{children:a})),1===S?(0,r.jsx)(m,{id:C,setId:k,initialOptions:Y,setEscapeClosesModal:J}):(0,r.jsx)(u.Q,Object.assign({labelHead:A("permission.manage_permissions_dialog.account_id_title"),fieldId:"kafka-instance-name",fieldLabel:A("permission.manage_permissions_dialog.account_id_title"),labelBody:A("permission.manage_permissions_dialog.account_id_help"),buttonAriaLabel:A("permission.manage_permissions_dialog.account_id_aria"),isRequired:!0},{children:"*"===C.value?A("permission.manage_permissions_dialog.all_accounts_title"):C.value})),2===S&&y&&(0,r.jsx)(K,{onRemoveAcl:e=>N((s=>[...s,e])),setAcls:P,setEscapeClosesModal:J,acls:se,consumerGroupIds:T,selectedAccount:C,selectedAccountId:C.value,newAcls:R,topicNames:g,resourceOperations:y,kafkaName:a})]})]}))},K=({kafkaName:e,topicNames:s,consumerGroupIds:a,selectedAccount:i,selectedAccountId:o,resourceOperations:l,acls:c,newAcls:p,onRemoveAcl:d,setAcls:u,setEscapeClosesModal:m})=>{const{t:v}=(0,t.useTranslation)(["kafkaTemporaryFixMe"]),_=document.getElementById("manage-permissions-modal")||void 0;return(0,r.jsxs)(r.Fragment,{children:[Q(p)&&(0,r.jsx)(n.FormAlert,{children:(0,r.jsx)(n.Alert,{variant:"danger",title:v("common:form_invalid_alert"),"aria-live":"polite",isInline:!0})}),(0,r.jsx)(W,{existingAcls:c,selectedAccountId:o,onRemove:d}),(0,r.jsx)(D,{acls:p,setAcls:u,topicNames:s,consumerGroupIds:a,selectedAccount:i.value,setEscapeClosesModal:m,resourceOperations:l,menuAppendTo:_,kafkaName:e})]})};function Q(e){return e.some((e=>null==(e=Array.isArray(e)?e:[e])?void 0:e.some((e=>"error"===e.operation.validated||"error"===e.patternType.validated||"error"===e.resource.validated||"error"===e.resourceType.validated))))}const Z=q},87892:(e,s,a)=>{a.d(s,{s:()=>o});var i=a(53093),r=a(73866);const o=e=>{switch(e){case i.AclResourceType.Group:return"Consumer group";case i.AclResourceType.Topic:return"Topic";case i.AclResourceType.Cluster:return"Kafka instance";case i.AclResourceType.TransactionalId:return"Transactional ID";default:return(0,r.sentenceCase)(e)}}},56637:(e,s,a)=>{a.d(s,{N:()=>o});var i=a(93264),r=a(12204);const o=()=>{const{t:e}=(0,r.useTranslation)(["kafkaTemporaryFixMe"]);return{validateName:(0,i.useCallback)((s=>{const a=new RegExp("^[a-zA-Z0-9._-]+$");return s.length&&!a.test(s)?e("topic.topic_name_helper_text"):s.length>249?e("topic.cannot_exceed_characters"):"."===s||".."===s?e("topic.invalid_name_with_dot"):void 0}),[e])}}},76621:(e,s,a)=>{a.d(s,{G6:()=>u,L2:()=>l,mv:()=>d,qK:()=>c,t:()=>v,yN:()=>m});var i=a(9922),r=a(93264),o=a(53093),n=a(9132),t=a.n(n);const l=(e,s)=>{const[,a]=Object.entries(s).find((([,s])=>s===e.toString()))||[];return a},c=e=>{const s=(0,r.useCallback)(((s,a,r)=>(0,i.__awaiter)(void 0,void 0,void 0,(function*(){const i=yield null==e?void 0:e.getToken(),n=new o.AclsApi(new o.Configuration({accessToken:i,basePath:null==e?void 0:e.basePath})),t=yield n.getAcls(s.resourceType,s.resourceName,s.patternType,s.principal,s.operation,s.permissionType,r,a);return p(t)}))),[e]),a=(0,r.useCallback)((s=>(0,i.__awaiter)(void 0,void 0,void 0,(function*(){const a=yield null==e?void 0:e.getToken(),i=new o.AclsApi(new o.Configuration({accessToken:a,basePath:null==e?void 0:e.basePath}));yield i.createAcl(s)}))),[e]),n=(0,r.useCallback)((s=>(0,i.__awaiter)(void 0,void 0,void 0,(function*(){const a=yield null==e?void 0:e.getToken(),i=new o.AclsApi(new o.Configuration({accessToken:a,basePath:null==e?void 0:e.basePath}));yield i.deleteAcls(s.resourceType,s.resourceName,s.patternType,s.principal,s.operation,s.permissionType)}))),[e]),t=(0,r.useCallback)((()=>(0,i.__awaiter)(void 0,void 0,void 0,(function*(){const s=yield null==e?void 0:e.getToken();return new o.AclsApi(new o.Configuration({accessToken:s,basePath:null==e?void 0:e.basePath})).getAclResourceOperations().then((e=>e.data))}))),[e]);return(0,r.useMemo)((()=>({getPermissions:s,addPermission:a,deletePermission:n,getResourceOperations:t})),[s,a,n,t])},p=e=>{var s;return{total:e.data.total,size:e.data.size,page:e.data.page,items:null===(s=e.data.items)||void 0===s?void 0:s.map((e=>Object.assign(Object.assign({},e),{principal:e.principal.substring(5),toString:()=>`${e.principal} ${e.permission} ${e.operation} ${e.patternType} ${e.resourceType} ${e.resourceName}`,hash:()=>t()(e)}))).sort(((e,s)=>e.principal!==s.principal?e.principal.localeCompare(s.principal):e.resourceType!==s.resourceType?e.resourceType.localeCompare(s.resourceType):e.resourceName!==s.resourceName?e.resourceName.localeCompare(s.resourceName):e.permission!==s.permission?"DENY"===e.permission?-1:1:e.operation!==s.operation?e.operation.localeCompare(s.operation):0))}},d=()=>Object.values(o.AclPermissionType),u=()=>Object.values(o.AclOperation),m=()=>Object.values(o.AclResourceType),v=()=>Object.values(o.AclPatternType)}}]);
//# sourceMappingURL=1118.47d2e72b.js.map