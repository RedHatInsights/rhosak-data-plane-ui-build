"use strict";(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[1118],{41272:(e,s,i)=>{i.d(s,{Q:()=>n});var a=i(85893),r=i(99421),o=i(34046);const n=({children:e,labelHead:s,fieldId:i,fieldLabel:n,labelBody:t,buttonAriaLabel:l,validated:c,helperText:p,helperTextInvalid:d,isRequired:u})=>(0,a.jsx)(r.FormGroup,Object.assign({fieldId:i,label:n,validated:c,helperText:p,helperTextInvalid:d,isRequired:u,labelIcon:(0,a.jsx)(r.Popover,Object.assign({headerContent:(0,a.jsx)("div",{children:s}),bodyContent:(0,a.jsx)("div",{children:t})},{children:(0,a.jsx)("button",Object.assign({"aria-label":l,onClick:e=>e.preventDefault(),className:"pf-c-form__group-label-help"},{children:(0,a.jsx)(o.ZP,{noVerticalAlign:!0})}))}))},{children:e}))},4055:(e,s,i)=>{i.d(s,{y:()=>o});var a=i(85893),r=i(99421);const o=({bullseyeProps:e,spinnerProps:s})=>(0,a.jsx)(r.Bullseye,Object.assign({},e,{children:(0,a.jsx)(r.Spinner,Object.assign({},s))}))},90732:(e,s,i)=>{i.d(s,{w:()=>d});var a=i(223),r=i(85893),o=i(57294),n=i(38296),t=i(75418);const l=(0,t.createContext)({activeRow:"",onRowClick:()=>"",loggedInUser:""}),c=l.Provider,p=e=>{const{activeRow:s,onRowClick:i,rowDataTestId:o}=(0,t.useContext)(l),c=e||{},{trRef:p,className:d,rowProps:u,row:m}=c,v=(0,a.__rest)(c,["trRef","className","rowProps","row"]),{rowIndex:_}=u||{},{isExpanded:g,originalData:T}=m||{};return(0,r.jsx)("tr",Object.assign({"data-testid":o,tabIndex:0,ref:"function"==typeof p?void 0:p,className:(0,n.css)(d,"pf-c-table-row__item",s&&s===(null==T?void 0:T.rowId)&&"pf-m-selected pf-m-selectable"),hidden:void 0!==g&&!g,onClick:e=>i&&i(e,_,m)},v))},d=({tableProps:e,tableHeaderProps:s,tableBodyProps:i,children:t,activeRow:l,onRowClick:d,rowDataTestId:u,loggedInUser:m})=>{const{cells:v,rows:_,actionResolver:g,onSort:T,sortBy:y,"aria-label":h,variant:j,className:x,shouldDefaultCustomRowWrapper:b=!1}=e,f=(0,a.__rest)(e,["cells","rows","actionResolver","onSort","sortBy","aria-label","variant","className","shouldDefaultCustomRowWrapper"]);return b&&(f.rowWrapper=p),(0,r.jsx)(c,Object.assign({value:{activeRow:l,onRowClick:d,rowDataTestId:u,loggedInUser:m}},{children:(0,r.jsxs)(o.Table,Object.assign({className:(0,n.css)(b&&"mas--table-view__table",x),cells:v,variant:j,rows:_,"aria-label":h,actionResolver:g,onSort:T,sortBy:y},f,{children:[(0,r.jsx)(o.TableHeader,Object.assign({},s)),(0,r.jsx)(o.TableBody,Object.assign({},i)),t]}))}))}},44438:(e,s,i)=>{i.d(s,{j:()=>n});var a=i(85893),r=i(98639),o=i(99421);const n=({variant:e})=>{const{labelColor:s,content:i}=(()=>{switch(e){case r.AclResourceType.Group:return{labelColor:"green",content:"G"};case r.AclResourceType.Cluster:return{labelColor:"grey",content:"KI"};case r.AclResourceType.Topic:return{labelColor:"blue",content:"T"};case r.AclResourceType.TransactionalId:return{labelColor:"orange",content:"TI"}}})();return(0,a.jsx)(o.Label,Object.assign({color:s,className:"mas-m-solid"},{children:i}))}},43667:(e,s,i)=>{i.d(s,{C8:()=>h,QG:()=>T,ev:()=>y});var a=i(223),r=i(85893),o=i(75418),n=i(4716),t=i(48418),l=i(98639),c=i(99421),p=i(7451),d=i(73866),u=i(87892),m=i(64517),v=i(44438);const _=()=>{const{t:e}=(0,n.useTranslation)(["kafkaTemporaryFixMe"]);return(0,r.jsx)("div",{children:(0,r.jsx)(c.Label,Object.assign({variant:"outline"},{children:e("permission.table.all_accounts")}))})},g=({acl:e})=>{const[s,i]=(0,o.useState)(),n=(0,p.useAuth)(),{kafka:l}=(0,m.S)()||{},d=(0,p.usePrincipals)().getAllPrincipals().filter((e=>e.id!==s&&e.id!==(null==l?void 0:l.owner))).filter((s=>s.id===e.principal));return(0,o.useEffect)((()=>{(0,a.__awaiter)(void 0,void 0,void 0,(function*(){const e=yield null==n?void 0:n.getUsername();i(e)}))}),[n]),1===d.length?d[0].principalType===p.PrincipalType.ServiceAccount?(0,r.jsx)(c.Tooltip,Object.assign({content:(0,r.jsxs)("div",{children:["Type: ",d[0].principalType," ",(0,r.jsx)("br",{})]})},{children:(0,r.jsxs)("span",Object.assign({tabIndex:0},{children:[" ",e.principal," ",(0,r.jsx)(t.InfoCircleIcon,{color:"grey"})]}))})):(0,r.jsx)(c.Tooltip,Object.assign({content:(0,r.jsxs)("div",{children:["Type: ",d[0].principalType," ",(0,r.jsx)("br",{}),"Name: ",d[0].displayName," ",(0,r.jsx)("br",{}),"Email: ",d[0].emailAddress]})},{children:(0,r.jsxs)("span",Object.assign({tabIndex:0},{children:[" ",e.principal," ",(0,r.jsx)(t.InfoCircleIcon,{color:"grey"})]}))})):(0,r.jsxs)("span",{children:[" ",e.principal]})},T=e=>"*"===e.principal?{title:(0,r.jsx)(_,{}),props:{}}:{title:(0,r.jsx)(g,{acl:e}),props:{}},y=e=>({title:(0,r.jsxs)(c.LabelGroup,{children:[e.permission&&(0,r.jsx)(c.Label,Object.assign({variant:"outline",color:e.permission===l.AclPermissionType.Deny?"red":void 0},{children:(0,d.sentenceCase)(e.permission)})),e.operation&&(0,r.jsx)(c.Label,Object.assign({variant:"outline"},{children:(0,d.sentenceCase)(e.operation)}))]}),props:{}}),h=e=>{const s=()=>{const{t:s}=(0,n.useTranslation)(["kafkaTemporaryFixMe"]);return e.patternType===l.AclPatternType.Prefixed?s("permission.cells.pattern_type_prefixed"):s("permission.cells.pattern_type_literal")};return e.resourceType===l.AclResourceType.Cluster?{title:(0,r.jsxs)("div",{children:[(0,r.jsx)(v.j,{variant:e.resourceType})," ",(0,u.s)(e.resourceType)]})}:{title:(0,r.jsxs)("div",{children:[(0,r.jsx)(v.j,{variant:e.resourceType})," ",(0,u.s)(e.resourceType)," ",(0,r.jsx)(s,{}),' "',e.resourceName,'"']})}}},21118:(e,s,i)=>{i.r(s),i.d(s,{ManagePermissions:()=>U,ManagePermissionsModal:()=>K,default:()=>Q});var a=i(223),r=i(85893),o=i(75418),n=i(99421),t=i(4716),l=i(76621),c=i(3654),p=i(64517),d=i(7451),u=i(41272);const m=({setId:e,id:s,initialOptions:i,setEscapeClosesModal:a})=>{const{t:l}=(0,t.useTranslation)(["kafkaTemporaryFixMe"]),[c,p]=(0,o.useState)(!1),m=()=>{e({value:void 0,validated:void 0}),p(!1)},v=[(0,r.jsx)(n.SelectGroup,{children:(0,r.jsx)(n.SelectOption,Object.assign({value:"*",description:l("permission.manage_permissions_dialog.all_accounts_description")},{children:l("permission.manage_permissions_dialog.all_accounts_title")}),"*")},"all_accounts_group"),(0,r.jsx)(n.Divider,{},"divider"),(0,r.jsx)(n.SelectGroup,Object.assign({label:l("permission.manage_permissions_dialog.all_accounts_service_account_group")},{children:i.filter((e=>e.principalType===d.PrincipalType.ServiceAccount)).sort(((e,s)=>e.displayName&&s.displayName?e.displayName.localeCompare(s.displayName):-1)).map(((e,s)=>(0,r.jsx)(n.SelectOption,Object.assign({value:e.id,description:e.displayName},{children:e.id}),s)))}),"service_accounts_group"),(0,r.jsx)(n.Divider,{},"divider"),(0,r.jsx)(n.SelectGroup,Object.assign({label:l("permission.manage_permissions_dialog.all_accounts_user_account_group")},{children:i.filter((e=>e.principalType===d.PrincipalType.UserAccount)).map(((e,s)=>(0,r.jsx)(n.SelectOption,Object.assign({value:e.id,description:e.displayName},{children:e.id}),s)))}),"user_accounts_group")];return(0,r.jsx)(u.Q,Object.assign({labelHead:l("permission.manage_permissions_dialog.account_id_title"),fieldId:"kafka-instance-name",fieldLabel:l("permission.manage_permissions_dialog.account_id_title"),labelBody:l("permission.manage_permissions_dialog.account_id_help"),buttonAriaLabel:l("permission.manage_permissions_dialog.account_id_aria"),isRequired:!0,helperTextInvalid:s.errorMessage,validated:s.validated||n.ValidatedOptions.default},{children:(0,r.jsx)(n.Select,Object.assign({variant:n.SelectVariant.typeahead,className:"kafka-ui--select--limit-height",typeAheadAriaLabel:l("permission.manage_permissions_dialog.account_id_typeahead_aria"),onToggle:e=>{a(!e),p(e)},onSelect:(s,i,a)=>{a?m():e((()=>""===i?{value:i,validated:n.ValidatedOptions.error,errorMessage:l("permission.manage_permissions_dialog.must_select_account_error")}:{validated:n.ValidatedOptions.default,value:i})),p(!1)},onClear:m,selections:s.value,onFilter:(e,s)=>{if(!s)return v;const i=new RegExp(s,"i");return v.filter((e=>Array.isArray(e.props.children))).map((e=>e.props.children.filter((e=>i.test(e.props.value)||i.test(e.props.description)))))},isOpen:c,isInputValuePersisted:!0,placeholderText:l("permission.manage_permissions_dialog.account_id_typeahead_placeholder"),isCreatable:!1,menuAppendTo:"parent",validated:s.validated||n.ValidatedOptions.default,isGrouped:!0},{children:v}))}))};var v=i(22299),_=i(57294),g=i(34046),T=i(73866),y=i(54283),h=i(98639);const j=e=>{const s=b();return(Array.isArray(e)?e:[e]).some((e=>e.aclShortcutType===x.ManageAccess||(e.aclShortcutType?!(e.patternType.value===s.patternType.value&&e.resource.value===s.resource.value):!(e.permission.value===s.permission.value&&e.patternType.value===s.patternType.value&&e.resourceType.value===s.resourceType.value&&e.resource.value===s.resource.value&&e.operation.value===s.operation.value))))};var x;!function(e){e.ConsumeTopic="ConsumeTopic",e.ProduceTopic="ProduceTopic",e.ManageAccess="ManageAccess"}(x||(x={}));const b=()=>({permission:{value:h.AclPermissionType.Allow},operation:{value:void 0},resourceType:{value:void 0},patternType:{value:h.AclPatternType.Prefixed},resource:{value:void 0},aclShortcutType:void 0}),f=(e,s,i,a=0)=>{const r=e[i];return Array.isArray(r)&&void 0!==a?r[a]=s:e[i]=s,e},A=(e,s,i=0)=>{const a=e[s];return Array.isArray(a)?a[i]:a};var O=i(80887),w=i(77221);const C=({options:e,setSelected:s,selected:i,row:a,id:l,placeholder:c,setEscapeClosesModal:p,onSelect:d,menuAppendTo:m,onClear:v,childRow:_})=>{const{t:g}=(0,t.useTranslation)(["kafkaTemporaryFixMe"]),[T,y]=(0,o.useState)(!1);return(0,r.jsx)(u.Q,Object.assign({labelHead:g(`permission.manage_permissions_dialog.assign_permissions.${l}.popover_head`),fieldId:l,labelBody:g(`permission.manage_permissions_dialog.assign_permissions.${l}.popover_label`),buttonAriaLabel:g("`permission.manage_permissions_dialog.assign_permissions.${id}.aria`"),isRequired:!0,helperTextInvalid:i.errorMessage,validated:i.validated||n.ValidatedOptions.default},{children:(0,r.jsx)(O.P,Object.assign({variant:n.SelectVariant.single,onToggle:e=>{p(!e),y(e)},onSelect:(e,i,r)=>{const o=""===i?void 0:i;r?(s(a,v(),_),y(!1)):(s(a,o,_),y(!1),o&&d(o))},selections:i.value,isOpen:T,isInputValuePersisted:!0,placeholderText:c,validated:i.validated||n.ValidatedOptions.default,menuAppendTo:m,maxHeight:200,direction:"up"},{children:e.map(((e,s)=>(0,r.jsx)(w.SelectOption,Object.assign({isDisabled:e.disabled,value:e.value},e.description&&{description:e.description},{children:e.title}),s)))}))}))},k=({acl:e,row:s,childRow:i=0,setAcls:a,setEscapeClosesModal:o,menuAppendTo:c,resourceOperations:p})=>{const{t:d}=(0,t.useTranslation)(["kafkaTemporaryFixMe"]);return(0,r.jsx)(C,{options:(0,l.G6)().filter((s=>{if(void 0===e.resourceType.value||""===e.resourceType.value.toString())return!0;const i=(0,y.snakeCase)(e.resourceType.value.toString()),a=(0,y.snakeCase)(s);return p[i].some((e=>e===a))})).map((e=>({value:e,title:(0,T.sentenceCase)(e)}))),selected:e.operation,setSelected:(e,s,i)=>{a((a=>a.map(((a,r)=>(r===e&&(Array.isArray(a)?void 0!==i&&(a[i].operation={value:s}):a.operation={value:s}),a)))))},row:s,id:"operation",placeholder:d("permission.manage_permissions_dialog.assign_permissions.operation_placeholder"),setEscapeClosesModal:o,menuAppendTo:c,onClear:()=>b().operation.value,onSelect:e=>{a((a=>{const r=A(a,s,i);return void 0===e?(r.operation.validated=n.ValidatedOptions.error,r.operation.errorMessage=d("permission.manage_permissions_dialog.assign_permissions.must_select_operation_error")):r.operation.validated=n.ValidatedOptions.default,f(a,r,s,i)}))}})},S=({acl:e,row:s,childRow:i=0,setAcls:a,setEscapeClosesModal:o,menuAppendTo:c})=>{var p;const{t:d}=(0,t.useTranslation)(["kafkaTemporaryFixMe"]);return e.aclShortcutType?(0,r.jsx)(r.Fragment,{children:Array.isArray(null==e?void 0:e.operations)&&(0,r.jsxs)(n.LabelGroup,Object.assign({numLabels:4},{children:[(0,r.jsx)(n.Label,Object.assign({variant:"outline",color:e.permission.value===h.AclPermissionType.Deny?"red":void 0},{children:(0,T.sentenceCase)(e.permission.value||"")})),null===(p=null==e?void 0:e.operations)||void 0===p?void 0:p.map((e=>(0,r.jsx)(n.Label,Object.assign({variant:"outline"},{children:(0,T.sentenceCase)(e)}),e)))]}))}):(0,r.jsx)(C,{options:(0,l.mv)().map((e=>({value:e,title:(0,T.sentenceCase)(e)}))),selected:e.permission,setSelected:(e,s,i)=>{a((a=>a.map(((a,r)=>(r===e&&(Array.isArray(a)?void 0!==i&&(a[i].permission={value:s}):a.permission={value:s}),a)))))},row:s,id:"permission-type",setEscapeClosesModal:o,menuAppendTo:c,onClear:()=>b().permission.value,onSelect:e=>{a((a=>{const r=A(a,s,i);return void 0===e?(r.permission.validated=n.ValidatedOptions.error,r.permission.errorMessage=d("permission.manage_permissions_dialog.assign_permissions.must_select_permission_error")):r.permission.validated=n.ValidatedOptions.default,f(a,r,s,i)}))}})};var M=i(44438),P=i(87892);const R=({row:e,acl:s,childRow:i=0,setAcls:a,setEscapeClosesModal:o,menuAppendTo:n,kafkaName:c})=>{const{resourceType:p}=s,{t:d}=(0,t.useTranslation)(["kafkaTemporaryFixMe"]);if((s.aclShortcutType===x.ConsumeTopic||s.aclShortcutType===x.ProduceTopic)&&(null==p?void 0:p.value))return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(M.j,{variant:p.value})," ",(0,P.s)(p.value)]});if(s.aclShortcutType===x.ManageAccess)return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(M.j,{variant:h.AclResourceType.Cluster})," ",(0,P.s)(h.AclResourceType.Cluster),' is "',c,'"']});return(0,r.jsx)(C,{options:(0,l.yN)().map((e=>({value:e,title:(0,P.s)(e)}))),selected:s.resourceType,setSelected:(e,s)=>{a((i=>i.map(((i,a)=>(a===e&&(Array.isArray(i)?i[e].resourceType={value:s}:i.resourceType={value:s}),i)))))},row:e,id:"resource-type",placeholder:d("permission.manage_permissions_dialog.assign_permissions.resource_type_placeholder"),setEscapeClosesModal:o,menuAppendTo:n,onClear:()=>b().resourceType.value,onSelect:s=>{a((s=>{const a=A(s,e,i);return f(s,a,e,i)}))}})},I=({acl:e,row:s,childRow:i=0,setAcls:a,setEscapeClosesModal:o,menuAppendTo:c})=>{var p;const{t:d}=(0,t.useTranslation)(["kafkaTemporaryFixMe"]);if(e.resourceType.value===h.AclResourceType.Cluster||e.aclShortcutType===x.ManageAccess)return(0,r.jsx)(r.Fragment,{});return(0,r.jsx)(C,{options:null===(p=(0,l.t)())||void 0===p?void 0:p.map((e=>({value:e,title:e===h.AclPatternType.Prefixed?d("permission.manage_permissions_dialog.assign_permissions.pattern_type_prefixed"):d("permission.manage_permissions_dialog.assign_permissions.pattern_type_literal"),description:e===h.AclPatternType.Prefixed?d("permission.manage_permissions_dialog.assign_permissions.pattern_type_prefixed_help"):d("permission.manage_permissions_dialog.assign_permissions.pattern_type_literal_help")}))).sort(((e,s)=>s.value.localeCompare(e.value))),selected:e.patternType,setSelected:(e,s,i)=>{a((a=>a.map(((a,r)=>(r===e&&(Array.isArray(a)?void 0!==i&&(a[i].patternType={value:s}):a.patternType={value:s}),a)))))},row:s,childRow:i,id:"pattern-type",setEscapeClosesModal:o,menuAppendTo:c,onClear:()=>b().patternType.value,onSelect:e=>{a((a=>{const r=A(a,s,i);return void 0===e?(r.patternType.validated=n.ValidatedOptions.error,r.patternType.validated=d("permission.manage_permissions_dialog.assign_permissions.must_select_pattern_type_error")):r.patternType.validated=n.ValidatedOptions.default,f(a,r,s,i)}))}})},N=({row:e,setValue:s,value:i,initialOptions:a,id:l,placeholder:c,onSelect:p,setEscapeClosesModal:d,menuAppendTo:m,childRow:v})=>{const{t:_}=(0,t.useTranslation)(["kafkaTemporaryFixMe"]),[g,T]=(0,o.useState)(!1),[y,h]=(0,o.useState)([]);(0,o.useEffect)((()=>{h(a().map((e=>({value:e}))))}),[a]);const j=()=>{s(e,void 0,v),T(!1)};return(0,r.jsx)(u.Q,Object.assign({labelHead:_(`permission.manage_permissions_dialog.assign_permissions.${l}.popover_head`),fieldId:l,labelBody:_(`permission.manage_permissions_dialog.assign_permissions.${l}.popover_label`),buttonAriaLabel:_("`permission.manage_permissions_dialog.assign_permissions.${id}.aria`"),isRequired:!0,helperTextInvalid:i.errorMessage,validated:i.validated||n.ValidatedOptions.default},{children:(0,r.jsx)(n.Select,Object.assign({variant:n.SelectVariant.typeahead,typeAheadAriaLabel:_("permission.manage_permissions_dialog.assign_permissions.resource_name_aria"),onToggle:e=>{d(!e),T(e)},className:"pf-u-pr-lg-on-lg",onSelect:(i,a,r)=>{const o=""===a?void 0:a;r?j():(s(e,o,v),T(!1),p(o||""))},onClear:j,selections:i.value,isOpen:g,isInputValuePersisted:!0,placeholderText:c,isCreatable:!0,onCreateOption:e=>{h([...y,{value:e}])},createText:_("permission.manage_permissions_dialog.assign_permissions.resource_name_typeahead_create_text"),validated:i.validated||n.ValidatedOptions.default,menuAppendTo:m,maxHeight:200,direction:"up"},{children:y.map(((e,s)=>(0,r.jsx)(n.SelectOption,Object.assign({isDisabled:e.disabled,value:e.value},e.description&&{description:e.description}),s)))}))}))};var V=i(56637);const E=({row:e,acl:s,childRow:i=0,setAcls:a,setEscapeClosesModal:o,menuAppendTo:l,topicNames:c,consumerGroupIds:p})=>{var d;const{t:u}=(0,t.useTranslation)(["kafkaTemporaryFixMe"]),{validateName:m}=(0,V.N)();if(s.resourceType.value===h.AclResourceType.Cluster||s.aclShortcutType===x.ManageAccess)return(0,r.jsx)(r.Fragment,{});return(0,r.jsx)(N,{row:e,childRow:i,value:s.resource,setValue:(e,s,i)=>{a((a=>a.map(((a,r)=>(r===e&&(Array.isArray(a)?void 0!==i&&(a[i].resource={value:s}):a.resource={value:s}),a)))))},id:"resource",placeholder:u(`permission.manage_permissions_dialog.assign_permissions.pattern_type_${(null===(d=s.patternType.value)||void 0===d?void 0:d.toLowerCase())||"prefixed"}_placeholder`),setEscapeClosesModal:o,menuAppendTo:l,initialOptions:()=>s.resourceType.value===h.AclResourceType.Topic?c:s.resourceType.value===h.AclResourceType.Group?p:[],onSelect:s=>{if("*"===s)a((s=>{const a=A(s,e,i);return a.resource.validated=n.ValidatedOptions.default,f(s,a,e,i)}));else{void 0!==m(s)?a((s=>{const a=A(s,e,i);return f(s,a,e,i)})):void 0!==s&&a((s=>{const a=A(s,e,i);return f(s,a,e,i)}))}}})};var F=i(90966);const L=({row:e,removeRow:s})=>{const{t:i}=(0,t.useTranslation)(["kafkaTemporaryFixMe"]);return(0,r.jsx)("div",Object.assign({className:"pf-u-display-flex pf-u-justify-content-flex-end"},{children:(0,r.jsx)(n.Tooltip,Object.assign({content:i("permission.manage_permissions_dialog.assign_permissions.remove_row_help")},{children:(0,r.jsx)(n.Button,{variant:"link",icon:(0,r.jsx)(F.ZP,{}),onClick:()=>s(e)})}))}))},D=({acls:e,setAcls:s,topicNames:i,consumerGroupIds:a,selectedAccount:o,setEscapeClosesModal:l,resourceOperations:c,menuAppendTo:p,kafkaName:d})=>{const{t:u}=(0,t.useTranslation)(["kafkaTemporaryFixMe"]),m=[{title:u("permission.table.resource_column_title"),columnTransforms:[(0,_.cellWidth)(20)]},{title:"",columnTransforms:[(0,_.cellWidth)(20)]},{title:"",columnTransforms:[(0,_.cellWidth)(20)]},{title:u("permission.table.permissions_column_title"),columnTransforms:[(0,_.cellWidth)(15)]},{title:"",columnTransforms:[(0,_.cellWidth)(15)]},{title:"",columnTransforms:[(0,_.cellWidth)(10)]}],T=e=>{s((s=>s.filter(((s,i)=>i!==e))))};return(0,r.jsxs)("div",{children:[(0,r.jsxs)(n.TextContent,{children:[(0,r.jsx)(n.Text,Object.assign({component:n.TextVariants.h2},{children:u("permission.manage_permissions_dialog.assign_permissions.title")})),(0,r.jsx)(n.Text,Object.assign({component:n.TextVariants.small},{children:"*"===o?u("permission.manage_permissions_dialog.assign_permissions.help_all_accounts"):u("permission.manage_permissions_dialog.assign_permissions.help",{account_id:o})})),e&&e.length>0&&(0,r.jsx)(n.Text,Object.assign({component:n.TextVariants.small},{children:u("permission.manage_permissions_dialog.assign_permissions.all_fields_are_required")}))]}),e&&e.length>0&&(0,r.jsxs)(_.TableComposable,Object.assign({variant:"compact"},{children:[(0,r.jsx)(_.Thead,Object.assign({noWrap:!0},{children:(0,r.jsx)(_.Tr,{children:null==m?void 0:m.map(((e,s)=>(0,r.jsx)(_.Th,{children:e.title},s)))})})),(0,r.jsx)(_.Tbody,{children:null==e?void 0:e.map(((e,o)=>((e,o)=>{const t=Array.isArray(e)?e:[e];return t.map(((e,u)=>{var m,v,y,h;return(0,r.jsxs)(r.Fragment,{children:[e.aclShortcutType&&0===u&&(0,r.jsxs)(_.Tr,Object.assign({style:{borderBottom:"none"}},{children:[(0,r.jsx)(_.Td,Object.assign({colSpan:5},{children:(0,r.jsx)(n.TextContent,{children:(0,r.jsxs)(n.Text,Object.assign({component:n.TextVariants.h6},{children:[null===(m=null==e?void 0:e.metaData)||void 0===m?void 0:m.title,(0,r.jsx)(n.Popover,Object.assign({headerContent:(0,r.jsx)("div",{children:null===(v=e.metaData)||void 0===v?void 0:v.popoverHeader}),bodyContent:(0,r.jsx)("div",{children:null===(y=e.metaData)||void 0===y?void 0:y.popoverBody})},{children:(0,r.jsx)(n.Button,Object.assign({variant:n.ButtonVariant.plain,"aria-label":null===(h=e.metaData)||void 0===h?void 0:h.ariaLabel},{children:(0,r.jsx)(g.ZP,{})}))}))]}))})})),(0,r.jsx)(_.Td,{children:(0,r.jsx)(L,{acl:e,row:o,removeRow:T})})]})),(0,r.jsxs)(_.Tr,Object.assign({style:{borderBottom:t.length>1&&0===u?"none":""}},{children:[(0,r.jsx)(_.Td,Object.assign({width:e.aclShortcutType===x.ManageAccess?50:20,colSpan:e.aclShortcutType===x.ManageAccess?3:0,noPadding:!0},{children:(0,r.jsx)(R,{row:o,acl:e,childRow:u,setAcls:s,menuAppendTo:p,setEscapeClosesModal:l,kafkaName:d})})),e.aclShortcutType!==x.ManageAccess&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(_.Td,Object.assign({width:15,noPadding:!0},{children:(0,r.jsx)(I,{row:o,acl:e,childRow:u,setAcls:s,menuAppendTo:p,setEscapeClosesModal:l})})),(0,r.jsx)(_.Td,Object.assign({width:25,noPadding:!0},{children:(0,r.jsx)(E,{acl:e,row:o,childRow:u,setAcls:s,menuAppendTo:p,setEscapeClosesModal:l,topicNames:i,consumerGroupIds:a})}))]}),(0,r.jsx)(_.Td,Object.assign({width:e.aclShortcutType?40:15,colSpan:e.aclShortcutType?3:0,noPadding:!0},{children:(0,r.jsx)(S,{acl:e,row:o,childRow:u,setAcls:s,menuAppendTo:p,setEscapeClosesModal:l})})),!e.aclShortcutType&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(_.Td,Object.assign({width:15,noPadding:!0},{children:(0,r.jsx)(k,{acl:e,row:o,childRow:u,setAcls:s,menuAppendTo:p,setEscapeClosesModal:l,resourceOperations:c})})),(0,r.jsx)(_.Td,Object.assign({width:10},{children:(0,r.jsx)(L,{acl:e,row:o,removeRow:T})}))]})]}),o)]})}))})(e,o)))})]})),(0,r.jsx)(n.ActionList,{children:(0,r.jsx)(n.ActionListItem,Object.assign({className:"appServices-action-list__action-list-item"},{children:(0,r.jsx)(v.PermissionsDropdown,{onAddPermission:()=>{s((e=>[...e,b()]))},onShortcutProduceTopic:()=>{const e=Object.assign(Object.assign({},b()),{aclShortcutType:x.ProduceTopic,resourceType:{value:h.AclResourceType.Topic},metaData:{title:u("permission.manage_permissions_dialog.assign_permissions.shortcut_produce_topic"),popoverHeader:u("permission.manage_permissions_dialog.assign_permissions.shortcut_produce_topic"),popoverBody:u("permission.manage_permissions_dialog.assign_permissions.shortcut_produce_topic_description"),ariaLabel:u("permission.manage_permissions_dialog.assign_permissions.shortcut_produce_topic")},operations:[h.AclOperation.Write,h.AclOperation.Create,h.AclOperation.Describe]});s((s=>[...s,e]))},onShortcutConsumeTopic:()=>{const e=[Object.assign(Object.assign({},b()),{aclShortcutType:x.ConsumeTopic,resourceType:{value:h.AclResourceType.Topic},metaData:{title:u("permission.manage_permissions_dialog.assign_permissions.shortcut_consume_topic"),popoverHeader:u("permission.manage_permissions_dialog.assign_permissions.shortcut_consume_topic"),popoverBody:u("permission.manage_permissions_dialog.assign_permissions.shortcut_consume_topic_description"),ariaLabel:u("permission.manage_permissions_dialog.assign_permissions.shortcut_consume_topic")},operations:[h.AclOperation.Read,h.AclOperation.Describe]}),Object.assign(Object.assign({},b()),{aclShortcutType:x.ConsumeTopic,resourceType:{value:h.AclResourceType.Group},operations:[h.AclOperation.Read]})];s((s=>[...s,e]))},onShortcutManageAccess:()=>{const e=Object.assign(Object.assign({},b()),{aclShortcutType:x.ManageAccess,resource:{value:"kafka-cluster"},resourceType:{value:h.AclResourceType.Cluster},patternType:{value:h.AclPatternType.Literal},metaData:{title:u("permission.manage_permissions_dialog.assign_permissions.shortcut_manage_access"),popoverHeader:u("permission.manage_permissions_dialog.assign_permissions.shortcut_manage_access"),popoverBody:u("permission.manage_permissions_dialog.assign_permissions.shortcut_manage_access_description"),ariaLabel:u("permission.manage_permissions_dialog.assign_permissions.shortcut_manage_access")},operations:[h.AclOperation.Alter]});s((s=>[...s,e]))}})}))})]})};var B=i(4055),G=i(43667),$=i(48418),W=i(90732);const H=({existingAcls:e,selectedAccountId:s,onRemove:i})=>{const{t:a}=(0,t.useTranslation)(["kafkaTemporaryFixMe"]),[l,c]=(0,o.useState)([]);(0,o.useEffect)((()=>{c(e.map(((e,s)=>{const i=e;return i.index=s,i})))}),[e]);const p=[{title:a("permission.table.resource_column_title"),columnTransforms:[(0,_.cellWidth)(60)]},{title:a("permission.table.permissions_column_title"),columnTransforms:[(0,_.cellWidth)(20)]},{title:"",columnTransforms:[(0,_.cellWidth)(20)]}],d=[G.C8,G.ev,e=>{const o=()=>(0,r.jsx)(n.Tooltip,Object.assign({content:a("permission.manage_permissions_dialog.assign_permissions.remove_row_help")},{children:(0,r.jsx)(n.Button,{variant:"link",icon:(0,r.jsx)($.TrashIcon,{}),onClick:()=>{return s=e,c(l.map((e=>(e.hash()===s.hash()&&(e.removed=!0),e)))),void i(s);var s}})})),t=()=>(0,r.jsx)(n.Label,Object.assign({variant:"outline"},{children:a("permission.table.all_accounts")}));return"*"===s&&"*"===e.principal?{title:(0,r.jsxs)("div",Object.assign({className:"pf-u-display-flex pf-u-justify-content-space-between pf-u-justify-content-flex-end-on-lg"},{children:[(0,r.jsx)(t,{})," ",(0,r.jsx)(o,{})]})),props:{}}:"*"===e.principal?{title:(0,r.jsx)("div",Object.assign({className:"pf-u-display-flex pf-u-justify-content-flex-end-on-lg"},{children:(0,r.jsx)(t,{})})),props:{}}:{title:(0,r.jsx)("div",Object.assign({className:"pf-u-display-flex pf-u-justify-content-flex-end"},{children:(0,r.jsx)(o,{})})),props:{}}}];if(void 0===s||0===l.length)return(0,r.jsx)(r.Fragment,{});return(0,r.jsxs)("div",{children:[(0,r.jsxs)(n.TextContent,{children:[(0,r.jsx)(n.Text,Object.assign({component:n.TextVariants.h2},{children:a("permission.manage_permissions_dialog.edit_existing.title")})),(0,r.jsx)(n.Text,Object.assign({component:n.TextVariants.small},{children:(0,r.jsx)((()=>"*"===s?a("permission.manage_permissions_dialog.edit_existing.all_accounts_help"):(0,r.jsxs)(t.Trans,Object.assign({ns:["kafkaTemporaryFixMe"],i18nKey:"permission.manage_permissions_dialog.edit_existing.help"},{children:["Review the list of existing permissions for the selected account. The list includes account-specific permissions and permissions applied to all accounts within this Kafka instance. Permissions labeled",(0,r.jsx)("strong",{children:"All accounts"})," cannot be removed when an individual account ID is selected."]}))),{})}))]}),(0,r.jsx)(W.w,{tableProps:{cells:p,rows:[...l.filter((e=>!e.removed)).map(((e,s)=>({cells:d.map((i=>i(e,s))),originalData:e})))],"aria-label":a("permission.table.table.permission_list_table"),shouldDefaultCustomRowWrapper:!0,variant:_.TableVariant.compact,canSelectAll:!1},rowDataTestId:"tablePermissions-row"})]})},q=({isOpen:e,closeModal:s,resumeEditing:i})=>{const{t:a}=(0,t.useTranslation)(["kafkaTemporaryFixMe"]);return(0,r.jsx)(n.Modal,Object.assign({id:"manage-permissions-precancel-modal",variant:n.ModalVariant.small,isOpen:e,"aria-label":a("permission.manage_permissions_pre_cancel_dialog.aria_label"),title:`${a("permission.manage_permissions_pre_cancel_dialog.discard_changes")}?`,titleIconVariant:"warning",showClose:!0,"aria-describedby":"modal-message",onClose:s,onEscapePress:s,actions:[(0,r.jsx)(n.Button,Object.assign({onClick:s,variant:n.ButtonVariant.primary},{children:a("permission.manage_permissions_pre_cancel_dialog.discard_changes")}),1),(0,r.jsx)(n.Button,Object.assign({onClick:i,variant:n.ButtonVariant.secondary},{children:a("permission.manage_permissions_pre_cancel_dialog.resume_editing")}),2)]},{children:a("permission.manage_permissions_pre_cancel_dialog.modal_description")}))},U=({hideModal:e,onSave:s,kafkaName:i,selectedAccountId:n,acls:t,topicNames:p,consumerGroupIds:d,title:u,variant:m})=>{const v=(0,o.useContext)(c.E),_=(0,l.qK)(v),[g,T]=(0,o.useState)();return(0,o.useEffect)((()=>{(0,a.__awaiter)(void 0,void 0,void 0,(function*(){const e=yield _.getResourceOperations();T(e)}))}),[_]),(0,r.jsx)(K,{topicNames:p,consumerGroupIds:d,acls:t,resourceOperations:g,hideModal:e,selectedAccountId:n,onSave:s,kafkaName:i,variant:m,title:u})},K=({hideModal:e,onSave:s,kafkaName:i,selectedAccountId:v,acls:_,topicNames:g,consumerGroupIds:T,resourceOperations:y,title:b,variant:f})=>{const{t:A}=(0,t.useTranslation)(["kafkaTemporaryFixMe"]),{kafka:O}=(0,p.S)()||{},w=(0,d.useAuth)(),[C,k]=(0,o.useState)({value:v,validated:void 0}),[S,M]=(0,o.useState)(void 0===v?1:2),[P,R]=(0,o.useState)([]),[I,N]=(0,o.useState)([]),[E,F]=(0,o.useState)(!1),L=(0,o.useRef)(!0),{validateName:G}=(0,V.N)(),[$,W]=(0,o.useState)(),U=(0,d.usePrincipals)(),K=(0,o.useContext)(c.E),Q=(0,l.qK)(K);(0,o.useEffect)((()=>{(0,a.__awaiter)(void 0,void 0,void 0,(function*(){const e=yield null==w?void 0:w.getUsername();W(e)}))}),[w]);const Z=e=>null==e?void 0:e.map((e=>{if(Array.isArray(e)&&Z(e),Array.isArray(e))return e;{if(e.aclShortcutType===x.ManageAccess)return e;const s=Object.assign({},e);if(e.aclShortcutType||(void 0===e.operation.value?(s.operation.validated=n.ValidatedOptions.error,s.operation.errorMessage=A("permission.manage_permissions_dialog.assign_permissions.must_select_operation_error")):s.operation.validated=n.ValidatedOptions.default,void 0===e.permission.value?(s.permission.validated=n.ValidatedOptions.error,s.permission.errorMessage=A("permission.manage_permissions_dialog.assign_permissions.must_select_permission_error")):s.permission.validated=n.ValidatedOptions.default),void 0===e.resourceType.value?(s.resourceType.validated=n.ValidatedOptions.error,s.resourceType.errorMessage=A("permission.manage_permissions_dialog.assign_permissions.must_select_resource_type_error")):s.resourceType.validated=n.ValidatedOptions.default,e.resourceType.value!==h.AclResourceType.Cluster){if(void 0===e.resource.value)s.resource.validated=n.ValidatedOptions.error,s.resource.errorMessage=A("permission.manage_permissions_dialog.assign_permissions.must_select_resource_error");else if("*"===e.resource.value)s.resource.validated=n.ValidatedOptions.default;else{const i=G(e.resource.value);void 0!==i?(s.resource.validated=n.ValidatedOptions.error,s.resource.errorMessage=i):s.resource.validated=n.ValidatedOptions.default}void 0===e.patternType.value?(s.patternType.validated=n.ValidatedOptions.error,s.patternType.errorMessage=A("permission.manage_permissions_dialog.assign_permissions.must_select_pattern_type_error")):s.patternType.validated=n.ValidatedOptions.default}return s}})),z=()=>(0,a.__awaiter)(void 0,void 0,void 0,(function*(){let i=!0;void 0===C.value?(k((e=>Object.assign(Object.assign({},e),{validated:n.ValidatedOptions.error,errorMessage:A("permission.manage_permissions_dialog.must_select_account_error")}))),i=!1):k((e=>Object.assign(Object.assign({},e),{validated:n.ValidatedOptions.default})));const r=Z(P);!X(r)&&i&&(i=>{(0,a.__awaiter)(void 0,void 0,void 0,(function*(){if(i){for(let e of i.filter((e=>j(e))))e=Array.isArray(e)?e:[e],e.forEach((e=>{var s;if(void 0===e.resourceType.value)throw Error("resourceType must not be undefined");if(e.resourceType.value!==h.AclResourceType.Cluster){if(void 0===e.resource.value)throw Error("resource must not be undefined");if(void 0===e.patternType.value)throw Error("patternType must not be undefined")}else e.resource.value="kafka-cluster",e.patternType.value=h.AclPatternType.Literal;if(void 0===e.permission.value)throw Error("permission must not be undefined");if(void 0===e.operation.value&&!e.aclShortcutType)throw Error("operation must not be undefined");e.operations?null===(s=e.operations)||void 0===s||s.forEach((s=>{e.operation.value=s,Y(e)})):Y(e)}));yield J(),s&&(yield s()),e()}}))})(r),R(r)})),Y=e=>(0,a.__awaiter)(void 0,void 0,void 0,(function*(){if(!Array.isArray(e)){const{resource:s,patternType:i,permission:a,resourceType:r,operation:o}=e;(null==s?void 0:s.value)&&(null==i?void 0:i.value)&&(null==a?void 0:a.value)&&(null==r?void 0:r.value)&&(null==o?void 0:o.value)&&(yield Q.addPermission({resourceName:s.value,patternType:i.value,permission:a.value,resourceType:r.value,operation:o.value,principal:`User:${C.value}`}))}})),J=()=>(0,a.__awaiter)(void 0,void 0,void 0,(function*(){for(const e of I)yield Q.deletePermission({resourceName:e.resourceName,patternType:(0,l.L2)(e.patternType,h.AclPatternTypeFilter),permissionType:(0,l.L2)(e.permission,h.AclPermissionTypeFilter),resourceType:(0,l.L2)(e.resourceType,h.AclResourceTypeFilter),operation:(0,l.L2)(e.operation,h.AclOperationFilter),principal:`User:${C.value}`})})),X=e=>e.some((e=>null==(e=Array.isArray(e)?e:[e])?void 0:e.some((e=>"error"===e.operation.validated||"error"===e.patternType.validated||"error"===e.resource.validated||"error"===e.resourceType.validated)))),ee=()=>{if(2===S){if(void 0===y)return(0,r.jsx)(B.y,{});const e=document.getElementById("manage-permissions-modal")||void 0,s=()=>X(P)?(0,r.jsx)(n.FormAlert,{children:(0,r.jsx)(n.Alert,{variant:"danger",title:A("common:form_invalid_alert"),"aria-live":"polite",isInline:!0})}):(0,r.jsx)(r.Fragment,{});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s,{}),(0,r.jsx)(H,{existingAcls:_.filter((e=>e.principal===`${C.value}`||"*"===e.principal)),selectedAccountId:C.value,onRemove:e=>N((s=>[...s,e]))}),(0,r.jsx)(D,{acls:P,setAcls:R,topicNames:g,consumerGroupIds:T,selectedAccount:C.value,setEscapeClosesModal:ae,resourceOperations:y,menuAppendTo:e,kafkaName:i})]})}return(0,r.jsx)(r.Fragment,{})},se=U.getAllPrincipals().filter((e=>e.id!==$&&e.id!==(null==O?void 0:O.owner))),ie=()=>1===S?(0,r.jsx)(m,{id:C,setId:k,initialOptions:se,setEscapeClosesModal:ae}):(0,r.jsx)(u.Q,Object.assign({labelHead:A("permission.manage_permissions_dialog.account_id_title"),fieldId:"kafka-instance-name",fieldLabel:A("permission.manage_permissions_dialog.account_id_title"),labelBody:A("permission.manage_permissions_dialog.account_id_help"),buttonAriaLabel:A("permission.manage_permissions_dialog.account_id_aria"),isRequired:!0},{children:"*"===C.value?A("permission.manage_permissions_dialog.all_accounts_title"):C.value})),ae=e=>{L.current=e},re=!((null==P?void 0:P.some((e=>j(e))))||I.length>0),oe=()=>{2!==S||re?e():F(!0)};return(0,r.jsxs)(n.Modal,Object.assign({id:"manage-permissions-modal",variant:f,isOpen:!0,"aria-label":A("permission.manage_permissions_dialog.aria_label"),position:"top",title:b,showClose:!0,"aria-describedby":"modal-message",onClose:oe,onEscapePress:()=>{L.current&&e()},actions:[(0,r.jsx)((()=>1===S?(0,r.jsx)(n.Button,Object.assign({variant:"primary",onClick:()=>M(2),isDisabled:void 0===C.value},{children:A("permission.manage_permissions_dialog.step_1_submit_button")})):(0,r.jsx)(n.Button,Object.assign({variant:"primary",onClick:z,isDisabled:re},{children:A("permission.manage_permissions_dialog.step_2_submit_button")}),1)),{},1),(0,r.jsx)(n.Button,Object.assign({onClick:oe,variant:"secondary"},{children:A("permission.manage_permissions_dialog.cancel_button")}),2)]},{children:[(0,r.jsx)(q,{isOpen:E,closeModal:()=>{F(!1),e()},resumeEditing:()=>{F(!1)}}),(0,r.jsx)((()=>(0,r.jsxs)(n.Form,{children:[(0,r.jsx)(n.FormGroup,Object.assign({fieldId:"kafka-instance-name",label:A("permission.manage_permissions_dialog.kafka_instance_title")},{children:i})),(0,r.jsx)(ie,{}),(0,r.jsx)(ee,{})]})),{})]}))},Q=U},87892:(e,s,i)=>{i.d(s,{s:()=>o});var a=i(98639),r=i(73866);const o=e=>{switch(e){case a.AclResourceType.Group:return"Consumer group";case a.AclResourceType.Topic:return"Topic";case a.AclResourceType.Cluster:return"Kafka instance";case a.AclResourceType.TransactionalId:return"Transactional ID";default:return(0,r.sentenceCase)(e)}}},56637:(e,s,i)=>{i.d(s,{N:()=>r});var a=i(4716);const r=()=>{const{t:e}=(0,a.useTranslation)(["kafkaTemporaryFixMe"]);return{validateName:s=>{const i=new RegExp("^[a-zA-Z0-9._-]+$");return s.length&&!i.test(s)?e("topic.topic_name_helper_text"):s.length>249?e("topic.cannot_exceed_characters"):"."===s||".."===s?e("topic.invalid_name_with_dot"):void 0}}}},76621:(e,s,i)=>{i.d(s,{G6:()=>d,L2:()=>t,mv:()=>p,qK:()=>l,t:()=>m,yN:()=>u});var a=i(223),r=i(98639),o=i(45330),n=i.n(o);const t=(e,s)=>{const[,i]=Object.entries(s).find((([,s])=>s===e.toString()))||[];return i},l=e=>({getPermissions:(s,i,o)=>(0,a.__awaiter)(void 0,void 0,void 0,(function*(){const a=yield null==e?void 0:e.getToken(),n=new r.AclsApi(new r.Configuration({accessToken:a,basePath:null==e?void 0:e.basePath})),t=yield n.getAcls(s.resourceType,s.resourceName,s.patternType,s.principal,s.operation,s.permissionType,o,i);return c(t)})),addPermission:s=>(0,a.__awaiter)(void 0,void 0,void 0,(function*(){const i=yield null==e?void 0:e.getToken(),a=new r.AclsApi(new r.Configuration({accessToken:i,basePath:null==e?void 0:e.basePath}));yield a.createAcl(s)})),deletePermission:s=>(0,a.__awaiter)(void 0,void 0,void 0,(function*(){const i=yield null==e?void 0:e.getToken(),a=new r.AclsApi(new r.Configuration({accessToken:i,basePath:null==e?void 0:e.basePath}));yield a.deleteAcls(s.resourceType,s.resourceName,s.patternType,s.principal,s.operation,s.permissionType)})),getResourceOperations:()=>(0,a.__awaiter)(void 0,void 0,void 0,(function*(){const s=yield null==e?void 0:e.getToken(),i=new r.AclsApi(new r.Configuration({accessToken:s,basePath:null==e?void 0:e.basePath}));return yield i.getAclResourceOperations().then((e=>e.data))}))}),c=e=>{var s;return{total:e.data.total,size:e.data.size,page:e.data.page,items:null===(s=e.data.items)||void 0===s?void 0:s.map((e=>Object.assign(Object.assign({},e),{principal:e.principal.substring(5),toString:()=>`${e.principal} ${e.permission} ${e.operation} ${e.patternType} ${e.resourceType} ${e.resourceName}`,hash:()=>n()(e)}))).sort(((e,s)=>e.principal!==s.principal?e.principal.localeCompare(s.principal):e.resourceType!==s.resourceType?e.resourceType.localeCompare(s.resourceType):e.resourceName!==s.resourceName?e.resourceName.localeCompare(s.resourceName):e.permission!==s.permission?"DENY"===e.permission?-1:1:e.operation!==s.operation?e.operation.localeCompare(s.operation):0))}},p=()=>Object.values(r.AclPermissionType),d=()=>Object.values(r.AclOperation),u=()=>Object.values(r.AclResourceType),m=()=>Object.values(r.AclPatternType)}}]);
//# sourceMappingURL=1118.632aa5e2.js.map