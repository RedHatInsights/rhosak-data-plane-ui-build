(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[135],{6466:(e,t,a)=>{"use strict";t.kc={name:"CaretDownIcon",height:512,width:320,svgPath:"M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z",yOffset:0,xOffset:0},t.VA=a(5183).createIcon(t.kc),t.ZP=t.VA},4046:(e,t,a)=>{"use strict";t.MU={name:"HelpIcon",height:1024,width:1024,svgPath:"M521.3,576 C627.5,576 713.7,502 713.7,413.7 C713.7,325.4 627.6,253.6 521.3,253.6 C366,253.6 334.5,337.7 329.2,407.2 C329.2,414.3 335.2,416 343.5,416 L445,416 C450.5,416 458,415.5 460.8,406.5 C460.8,362.6 582.9,357.1 582.9,413.6 C582.9,441.9 556.2,470.9 521.3,473 C486.4,475.1 447.3,479.8 447.3,521.7 L447.3,553.8 C447.3,570.8 456.1,576 472,576 C487.9,576 521.3,576 521.3,576 M575.3,751.3 L575.3,655.3 C575.313862,651.055109 573.620137,646.982962 570.6,644 C567.638831,640.947672 563.552355,639.247987 559.3,639.29884 L463.3,639.29884 C459.055109,639.286138 454.982962,640.979863 452,644 C448.947672,646.961169 447.247987,651.047645 447.29884,655.3 L447.29884,751.3 C447.286138,755.544891 448.979863,759.617038 452,762.6 C454.961169,765.652328 459.047645,767.352013 463.3,767.30116 L559.3,767.30116 C563.544891,767.313862 567.617038,765.620137 570.6,762.6 C573.659349,759.643612 575.360354,755.553963 575.3,751.3 M512,896 C300.2,896 128,723.9 128,512 C128,300.3 300.2,128 512,128 C723.8,128 896,300.2 896,512 C896,723.8 723.7,896 512,896 M512.1,0 C229.7,0 0,229.8 0,512 C0,794.2 229.8,1024 512.1,1024 C794.4,1024 1024,794.3 1024,512 C1024,229.7 794.4,0 512.1,0",yOffset:0,xOffset:0},t.by=a(5183).createIcon(t.MU),t.ZP=t.by},3174:()=>{},6351:()=>{},7253:(e,t,a)=>{"use strict";a.d(t,{R:()=>p});var n=a(3004),i=a(7522),o=a.n(i),r=a(4046),l=a(7043),c=a.n(l),s=a(5839),m=a.n(s),p=function(e){var t=e.fieldLabel,a=e.btnAriaLabel,i=e.fieldValue,l=e.popoverBody,s=e.popoverHeader,p=e.unit,u="-";return i&&(p?("ms"===p&&(u=m()(Number(i))),"bytes"===p&&(u=c()(Number(i),{unitSeparator:" "}))):u=i),o().createElement(n.TextContent,{className:"text-content-padding"},o().createElement(n.Text,{style:{fontWeight:700,display:"inline"}},t),o().createElement(n.Popover,{headerContent:o().createElement("div",null,s),bodyContent:o().createElement("div",null,l)},o().createElement("button",{"aria-label":a,onClick:function(e){return e.preventDefault()},className:"pf-c-form__group-label-help",style:{position:"relative",left:"5px",top:"2px"}},o().createElement(r.ZP,{noVerticalAlign:!0}))),o().createElement(n.Text,null,u))}},3921:(e,t,a)=>{"use strict";a.d(t,{W:()=>L});var n=a(7522),i=a.n(n),o=a(3004),r=(a(3174),a(3006)),l=function(e){var t=e.onSaveClick,a=e.isWarningOpen,n=e.setIsWarningOpen;return i().createElement(o.Modal,{variant:o.ModalVariant.small,isOpen:a,"aria-label":"Confirm change of partitions",title:"Increase the number of partitions?",titleIconVariant:"warning",showClose:!0,"aria-describedby":"modal-message",onClose:function(){return n(!1)},actions:[i().createElement(o.Button,{variant:"primary",onClick:t,key:1},"Yes"),i().createElement(o.Button,{variant:"link",onClick:function(){return n(!1)},key:2},"No, return to form")]},"Messages might have the same key from two different partitions, which can potentially break the message ordering guarantees that apply to a single partition.")},c=a(7253),s=a(4046),m=function(e){var t=e.children,a=e.labelHead,n=e.fieldId,r=e.fieldLabel,l=e.labelBody,c=e.buttonAriaLabel,m=e.validated,p=e.helperText,u=e.helperTextInvalid;return i().createElement(o.FormGroup,{fieldId:n,label:r,validated:m,helperText:p,helperTextInvalid:u,labelIcon:i().createElement(o.Popover,{headerContent:i().createElement("div",null,a),bodyContent:i().createElement("div",null,l)},i().createElement("button",{"aria-label":c,onClick:function(e){return e.preventDefault()},className:"pf-c-form__group-label-help"},i().createElement(s.ZP,{noVerticalAlign:!0})))},t)},p=a(6466),u=function(e){var t,a=e.id,r=e.toggleId,l=e.items,c=e.value,s=e.ariaLabel,m=e.onSelectOption,u=e.name,d=(0,n.useState)(),b=d[0],f=d[1],y=i().createElement(o.DropdownToggle,{id:r,onToggle:function(){f((function(e){return!e}))},toggleIndicator:p.ZP},c);return i().createElement(o.Dropdown,{name:u,id:a,onSelect:function(e){var t=e.currentTarget.textContent;m&&(e.target.name=u,m(t,e)),f((function(e){return!e}))},toggle:y,isOpen:b,"aria-label":s,dropdownItems:(t=l,t.map((function(e){var t=e.key,a=e.value,n=e.label;return i().createElement(o.DropdownItem,{key:t,value:a},n||a)})))})},d=function(e){var t=e.id,a=e.toggleId,n=e.dropdownValue,r=e.ariaLabel,l=e.onSelectOption,c=e.name,s=e.inputName,m=e.onChange,p=e.onPlus,d=e.onMinus,b=e.value,f=e.plusBtnProps,y=e.minusBtnProps,g=e.type,v=e.min,T=[{key:"milliseconds",value:"milliseconds",isDisabled:!1},{key:"seconds",value:"seconds",isDisabled:!1},{key:"days",value:"days",isDisabled:!1},{key:"months",value:"months",isDisabled:!1},{key:"years",value:"years",isDisabled:!1}],L=[{key:"bytes",value:"bytes",isDisabled:!1},{key:"kilobytes",value:"kilobytes",isDisabled:!1},{key:"megabytes",value:"megabytes",isDisabled:!1},{key:"gigabytes",value:"gigabytes",isDisabled:!1},{key:"terabytes",value:"terabytes",isDisabled:!1}];return i().createElement(o.Flex,null,i().createElement(o.FlexItem,{grow:{default:"grow"}},i().createElement(o.NumberInput,{inputName:s,onChange:m,onPlus:p,onMinus:d,value:b,plusBtnProps:f,minusBtnProps:y,min:v})),i().createElement(o.FlexItem,null,i().createElement(u,{id:t,toggleId:a,ariaLabel:r,onSelectOption:l,items:function(e){switch(e){case"time":return T;case"memory":return L;default:return[]}}(g),name:c,value:n||""})))},b=a(1249),f=a(9492),y=a(9115),g=function(){return(g=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var i in t=arguments[a])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},v=function(e,t,a,n){return new(a||(a=Promise))((function(i,o){function r(e){try{c(n.next(e))}catch(e){o(e)}}function l(e){try{c(n.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(r,l)}c((n=n.apply(e,t||[])).next())}))},T=function(e,t){var a,n,i,o,r={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(a)throw new TypeError("Generator is already executing.");for(;r;)try{if(a=1,n&&(i=2&o[0]?n.return:o[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,o[1])).done)return i;switch(n=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return r.label++,{value:o[1],done:!1};case 5:r.label++,n=o[1],o=[0];continue;case 7:o=r.ops.pop(),r.trys.pop();continue;default:if(!((i=(i=r.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){r=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){r.label=o[1];break}if(6===o[0]&&r.label<i[1]){r.label=i[1],i=o;break}if(i&&r.label<i[2]){r.label=i[2],r.ops.push(o);break}i[2]&&r.ops.pop(),r.trys.pop();continue}o=t.call(e,r)}catch(e){o=[6,e],n=0}finally{a=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}},L=function(e){var t=e.isCreate,a=e.saveTopic,s=e.handleCancel,p=e.topicData,L=e.setTopicData,h=(0,n.useState)("default"),E=h[0],x=h[1],k=(0,n.useState)(!1),C=k[0],B=k[1],I=(0,n.useState)(0),S=I[0],H=I[1],N=(0,n.useState)("default"),w=N[0],V=N[1],P=(0,n.useState)("This is a required field"),A=P[0],R=P[1],M=(0,n.useState)(!1),O=M[0],D=M[1],z=(0,r.useTranslation)().t,F=(0,n.useState)(!0),_=F[0],j=F[1],J=(0,n.useState)(!1),U=J[0],G=J[1],Z=(0,n.useState)(7),W=Z[0],q=Z[1],$=(0,n.useState)("days"),X=$[0],Y=$[1],K=(0,n.useState)(1),Q=K[0],ee=K[1],te=(0,n.useState)("bytes"),ae=te[0],ne=te[1],ie=!0===t?"Create Topic":"Save",oe=(0,n.useContext)(y.E);(0,n.useEffect)((function(){!function(){v(this,void 0,void 0,(function(){return T(this,(function(e){var t;return t=p.name,v(void 0,void 0,void 0,(function(){var e,a,n,i;return T(this,(function(o){switch(o.label){case 0:return[4,(0,f.BN)(t,oe)];case 1:return e=o.sent(),a={},null===(n=e.config)||void 0===n||n.forEach((function(e){a[e.key||""]=e.value||""})),H(null===(i=null==e?void 0:e.partitions)||void 0===i?void 0:i.length),[2]}}))})),[2]}))}))}()}),[]);var re=function(e,t){var a=t.target.name;"custom-retention-time-unit"===a&&(Y(e),_&&L(g(g({},p),{"retention.ms.unit":e}))),"custom-retention-size-unit"===a&&ne(e),U&&L(g(g({},p),{"retention.bytes.unit":e}))},le=function(e){var t=e.currentTarget,a=t.name,n=t.value;"custom-retention-time"===a?(q(Number(n)),_&&L(g(g({},p),{"retention.ms":n}))):"custom-retention-size"===a&&(ee(Number(n)),U&&L(g(g({},p),{"retention.bytes":n})))},ce=function(e){var t=e.currentTarget.name;if("custom-retention-time"===t){var a=W+1;q(a),_&&L(g(g({},p),{"retention.ms":a.toString()}))}else if("custom-retention-size"===t){var n=Q+1;ee(n),U&&L(g(g({},p),{"retention.bytes":n.toString()}))}},se=function(e){var t=e.currentTarget.name;if("custom-retention-time"===t){var a=W-1;q(a),_&&L(g(g({},p),{"retention.ms":a.toString()}))}else if("custom-retention-size"===t){var n=Q-1;ee(n),U&&L(g(g({},p),{"retention.bytes":n.toString()}))}},me=function(e,t){switch(t.target.name){case"custom-retention-time":j(!0),L(g(g({},p),{"retention.ms":W.toString(),"retention.ms.unit":X}));break;case"unlimited-retention-time":j(!1),L(g(g({},p),{"retention.ms":"-1","retention.ms.unit":"milliseconds"}));break;case"custom-retention-size":G(!0),L(g(g({},p),{"retention.bytes":Q.toString(),"retention.bytes.unit":ae}));break;case"unlimited-retention-size":G(!1),L(g(g({},p),{"retention.bytes":"-1","retention.bytes.unit":"bytes"}))}},pe=i().createElement(d,{inputName:"custom-retention-time",onChange:le,onPlus:ce,onMinus:se,value:W,plusBtnProps:{name:"custom-retention-time"},minusBtnProps:{name:"custom-retention-time"},id:"core-config-retention-time-unit",toggleId:"core-config-retention-dropdowntoggle",name:"custom-retention-time-unit",dropdownValue:X,ariaLabel:"select unit from dropdown",onSelectOption:re,min:0,type:"time"}),ue=i().createElement(d,{inputName:"custom-retention-size",onChange:le,onPlus:ce,onMinus:se,value:Q,plusBtnProps:{name:"custom-retention-size"},minusBtnProps:{name:"custom-retention-size"},id:"core-config-retention-size-unit",toggleId:"core-config-retention-size-dropdowntoggle",name:"custom-retention-size-unit",dropdownValue:ae,ariaLabel:"select unit from dropdown",onSelectOption:re,min:0,type:"memory"});return i().createElement(i().Fragment,null,i().createElement(o.Sidebar,{hasGutter:!0},i().createElement(o.SidebarPanel,{variant:"sticky"},i().createElement(o.JumpLinks,{isVertical:!0,label:"JUMP TO SECTION",scrollableSelector:".pf-c-page__main:first-of-type",style:{position:"sticky"},offset:-164,expandable:{default:"expandable",md:"nonExpandable"},isExpanded:!1},i().createElement(o.JumpLinksItem,{key:0,href:"#core-configuration"},"Core configuration"),i().createElement(o.JumpLinksItem,{key:1,href:"#messages"},"Messages"),i().createElement(o.JumpLinksItem,{key:2,href:"#log"},"Log"),i().createElement(o.JumpLinksItem,{key:3,href:"#replication"},"Replication"),i().createElement(o.JumpLinksItem,{key:4,href:"#cleanup"},"Cleanup"),i().createElement(o.JumpLinksItem,{key:5,href:"#index"},"Index"),i().createElement(o.JumpLinksItem,{key:6,href:"#flush"},"Flush"))),i().createElement(o.SidebarContent,null,i().createElement(o.PageSection,{className:"kafka-ui--topics-advanced-config",padding:{default:"noPadding"},hasOverflowScroll:!0,id:"topic-advance-config-scroll-container"},i().createElement(o.Stack,{hasGutter:!0},i().createElement(o.StackItem,null,i().createElement(o.TextContent,null,i().createElement(o.Text,{component:o.TextVariants.h2,tabIndex:-1,id:"core-configuration"},"Core configuration"),i().createElement(o.Text,{component:o.TextVariants.p,className:"section-info"},z("createTopic.coreConfigInfo"))),i().createElement(o.Form,null,t?i().createElement(m,{labelHead:z("createTopic.topicNameLabelHead"),fieldId:"create-topic-name",fieldLabel:"Topic name",labelBody:z("createTopic.topicNameLabelBody"),buttonAriaLabel:"More info for topic name field",helperTextInvalid:A,validated:w},i().createElement(o.TextInput,{isRequired:!0,type:"text",id:"create-topic-name",name:"name",value:p.name,onChange:function(e,t){var a;!function(e){var t=new RegExp("^[0-9A-Za-z_-]+$");e.length&&!t.test(e)?(R('Invalid input. Only letters (Aa-Zz) , numbers " _ " and " - " are accepted'),V("error")):e.length<1?(R("This is a required field"),V("error")):e.length>249?(V("error"),R("Topic name cannot exceed 249 characters")):V("default")}(e);var n=t.currentTarget.name;L(g(g({},p),((a={})[(0,b.FB)(n)]=e,a)))},label:"Topic name",placeholder:"Enter topic name",validated:w})):i().createElement(c.R,{btnAriaLabel:"topic detail name",fieldLabel:"Name",fieldValue:p.name,popoverBody:z("createTopic.topicNameLabelBody"),popoverHeader:z("createTopic.topicNameLabelHead")}),i().createElement(m,{fieldId:"create-topic-partitions",fieldLabel:"Partitions",labelHead:z("createTopic.partitionsLabelHead"),labelBody:z("createTopic.partitionsLabelBody"),buttonAriaLabel:"More info for partitions field",validated:E,helperText:C?"Increasing a topic's partitions might result in messages having the same key from two different partitions, which can potentially break the message ordering guarantees that apply to a single partition":void 0},i().createElement(o.NumberInput,{id:"create-topic-partitions",inputName:"num-partitions",onChange:function(e){var t,a=e.currentTarget,n=a.name,i=a.value;L(g(g({},p),((t={})[(0,b.FB)(n)]=Number(i),t)))},onPlus:function(e){var a,n=e.currentTarget.name,i=(0,b.FB)(n);L(g(g({},p),((a={})[i]=Number(p[i])+1,a))),t||(S&&Number(p.numPartitions+1)>S?(x("warning"),B(!0)):(x("default"),B(!1)))},onMinus:function(e){var a,n=e.currentTarget.name,i=(0,b.FB)(n);L(g(g({},p),((a={})[i]=Number(p[i])-1,a))),t||(S&&Number(p.numPartitions+-1)>S?(x("warning"),B(!0)):(x("default"),B(!1)))},value:Number(p.numPartitions),plusBtnProps:{name:"num-partitions"},minusBtnProps:{name:"num-partitions"},min:1})),i().createElement(c.R,{btnAriaLabel:"topic detail replicas",fieldLabel:"Replicas",fieldValue:"3",popoverBody:z("createTopic.replicasLabelBody"),popoverHeader:z("createTopic.replicasLabelHead")}),i().createElement(c.R,{btnAriaLabel:"topic detail min-in-sync replica",fieldLabel:"Minimum in-sync replicas",fieldValue:"2",popoverBody:z("createTopic.inSyncReplicasLabelBody"),popoverHeader:z("createTopic.inSyncReplicasLabelHead")}),i().createElement(m,{fieldId:"retention",fieldLabel:"Retention time",labelHead:z("createTopic.retentionTimeLabelHead"),labelBody:z("createTopic.retentionTimeLabelBody"),buttonAriaLabel:"More info for retention time field"},i().createElement(o.Stack,{hasGutter:!0},i().createElement(o.Radio,{isChecked:_,name:"custom-retention-time",onChange:me,label:pe,className:"kafka-ui--radio-label__number-input","aria-label":"custom duration",id:"custom-retention-time",value:"custom"}),i().createElement(o.Radio,{isChecked:!_,name:"unlimited-retention-time",onChange:me,label:"Unlimited","aria-label":"Unlimited",id:"unlimited-retention-time",value:"unlimited"}))),i().createElement(m,{fieldId:"retention-size",fieldLabel:"Retention size",labelHead:z("createTopic.retentionBytesLabelHead"),labelBody:z("createTopic.retentionBytesLabelBody"),buttonAriaLabel:"More info for retention size field"},i().createElement(o.Stack,{hasGutter:!0},i().createElement(o.Radio,{isChecked:U,name:"custom-retention-size",onChange:me,label:ue,className:"kafka-ui--radio-label__number-input","aria-label":"custom size",id:"custom-retention-size",value:"custom"}),i().createElement(o.Radio,{isChecked:!U,name:"unlimited-retention-size",onChange:me,label:"Unlimited","aria-label":"Unlimited",id:"custom-retention-size",value:"unlimited"}))))),i().createElement(o.StackItem,null,i().createElement(o.TextContent,{className:"section-margin"},i().createElement(o.Text,{component:o.TextVariants.h2,tabIndex:-1,id:"messages"},"Messages"),i().createElement(o.Text,{component:o.TextVariants.p,className:"section-info"},z("createTopic.messageSectionInfo"))),i().createElement(c.R,{btnAriaLabel:"topic detail max message bytes",fieldLabel:"Maximum message bytes",fieldValue:"1048588",popoverBody:z("createTopic.maxMessageSizeLabelBody"),popoverHeader:z("createTopic.maxMessageSizeLabelHead"),unit:"bytes"}),i().createElement(c.R,{btnAriaLabel:"topic detail message timestamp type",fieldLabel:"Message timestamp type",fieldValue:"CreateTime",popoverBody:z("createTopic.messageTimestampLabelBody"),popoverHeader:z("createTopic.messageTimestampLabelHead")}),i().createElement(c.R,{btnAriaLabel:"topic detail message timestamp difference",fieldLabel:"Maximum message timestamp difference",fieldValue:"9223372036854775807",popoverBody:z("createTopic.messageTimestampDiffLabelBody"),popoverHeader:z("createTopic.messageTimestampDiffLabelHead"),unit:"ms"}),i().createElement(c.R,{btnAriaLabel:"topic detail compression type",fieldLabel:"Compression type",fieldValue:"Producer",popoverBody:z("createTopic.compressionTypeLabelBody"),popoverHeader:z("createTopic.compressionTypeLabelHead")}),i().createElement(c.R,{btnAriaLabel:"topic detail message format version",fieldLabel:"Message format version",fieldValue:"2.7-IV2",popoverBody:z("createTopic.messageFormatLabelBody"),popoverHeader:z("createTopic.messageFormatLabelHead")})),i().createElement(o.StackItem,null,i().createElement(o.TextContent,{className:"section-margin"},i().createElement(o.Text,{component:o.TextVariants.h2,tabIndex:-1,id:"log"},"Log"),i().createElement(o.Text,{component:o.TextVariants.p,className:"section-info-head"},z("createTopic.logSectionInfo")),i().createElement(o.Text,{component:o.TextVariants.small,className:"section-info-note"},z("createTopic.logSectionInfoNote"))),i().createElement(m,{fieldId:"cleanup-policy",fieldLabel:"Cleanup policy",labelHead:z("createTopic.cleanupPolicyLabelHead"),labelBody:z("createTopic.cleanupPolicyLabelBody"),buttonAriaLabel:"More info for cleanup policy field"},i().createElement(u,{id:"log-section-policy-type-dropdown",toggleId:"log-section-policy-type-dropdowntoggle",ariaLabel:"select policy type from dropdown",onSelectOption:function(e,t){var a,n=t.target.name;L(g(g({},p),((a={})[(0,b.$X)(n)]=e,a)))},items:[{key:"compact",value:"compact",label:"Compact",isDisabled:!1},{key:"delete",value:"delete",label:"Delete",isDisabled:!1},{key:"compact-delete",value:"compact, delete",label:"Compact, Delete",isDisabled:!1},{key:"delete-compact",value:"delete, compact",label:"Delete, Compact",isDisabled:!1}],name:"cleanup-policy",value:p["cleanup.policy"]||""})),i().createElement(c.R,{btnAriaLabel:"topic detail retention bytes",fieldLabel:"Delete retention time",fieldValue:"86400000",popoverBody:z("createTopic.deleteRetentionLabelBody"),popoverHeader:z("createTopic.deleteRetentionLabelHead"),unit:"ms"}),i().createElement(c.R,{btnAriaLabel:"topic detail min cleanable dirty ratio",fieldLabel:"Minimum cleanable dirty ratio",fieldValue:"0.5",popoverBody:z("createTopic.minRatioLabelBody"),popoverHeader:z("createTopic.minRatioLabelHead")}),i().createElement(c.R,{btnAriaLabel:"topic detail min compaction lag time",fieldLabel:"Minimum compaction lag time",fieldValue:"0",popoverBody:z("createTopic.minLagLabelBody"),popoverHeader:z("createTopic.minLagLabelHead"),unit:"ms"})),i().createElement(o.StackItem,null,i().createElement(o.TextContent,{className:"section-margin"},i().createElement(o.Text,{component:o.TextVariants.h2,tabIndex:-1,id:"replication"},"Replication"),i().createElement(o.Text,{component:o.TextVariants.p,className:"section-info-head"},z("createTopic.replicationSectionInfo")),i().createElement(o.Text,{component:o.TextVariants.small,className:"section-info-note"},z("createTopic.replicationSectionInfoNote"))),i().createElement(c.R,{btnAriaLabel:"topic detail unclean leader election",fieldLabel:"Unclean leader election",fieldValue:"Disabled",popoverBody:z("createTopic.leaderElectionLabelBody"),popoverHeader:z("createTopic.leaderElectionLabelHead")})),i().createElement(o.StackItem,null,i().createElement(o.TextContent,{className:"section-margin"},i().createElement(o.Text,{component:o.TextVariants.h2,tabIndex:-1,id:"cleanup"},"Cleanup"),i().createElement(o.Text,{component:o.TextVariants.p,className:"section-info"},z("createTopic.cleanupSectionInfo"))),i().createElement(c.R,{btnAriaLabel:"topic detail log segment bytes",fieldLabel:"Log segment size",fieldValue:"1073741824",popoverBody:z("createTopic.logSegmentLabelHead"),popoverHeader:z("createTopic.logSegmentLabelBody"),unit:"bytes"}),i().createElement(c.R,{btnAriaLabel:"segment time",fieldLabel:"Segment time",fieldValue:"604800000",popoverBody:z("createTopic.segementTimeLabelBody"),popoverHeader:z("createTopic.segementTimeLabelHead"),unit:"ms"}),i().createElement(c.R,{btnAriaLabel:"segment jitter time",fieldLabel:"Segment jitter time",fieldValue:"0",popoverBody:z("createTopic.jitterTimeLabelBody"),popoverHeader:z("createTopic.jitterTimeLabelHead"),unit:"ms"}),i().createElement(c.R,{btnAriaLabel:"file delete delay",fieldLabel:"File delete delay",fieldValue:"60000",popoverBody:z("createTopic.deleteDelayLabelBody"),popoverHeader:z("createTopic.deleteDelayLabelHead"),unit:"ms"}),i().createElement(c.R,{btnAriaLabel:"preallocation log segment files",fieldLabel:"Preallocation log segment files",fieldValue:"Disabled",popoverBody:z("createTopic.preallocateLabelBody"),popoverHeader:z("createTopic.preallocateLabelHead")})),i().createElement(o.StackItem,null,i().createElement(o.TextContent,{className:"section-margin"},i().createElement(o.Text,{component:o.TextVariants.h2,tabIndex:-1,id:"index"},"Index"),i().createElement(o.Text,{component:o.TextVariants.p,className:"section-info"},z("createTopic.indexSectionInfo"))),i().createElement(c.R,{btnAriaLabel:"index interval size",fieldLabel:"Index interval size",fieldValue:"4096",popoverBody:z("createTopic.indexIntervalLabelBody"),popoverHeader:z("createTopic.indexIntervalLabelHead"),unit:"bytes"}),i().createElement(c.R,{btnAriaLabel:"segment index size",fieldLabel:"Segment index size",fieldValue:"10485760",popoverBody:z("createTopic.segementIntervalLabelBody"),popoverHeader:z("createTopic.segementIntervalLabelHead"),unit:"bytes"})),i().createElement(o.StackItem,null,i().createElement(o.TextContent,{className:"section-margin"},i().createElement(o.Text,{component:o.TextVariants.h2,tabIndex:-1,id:"flush"},"Flush"),i().createElement(o.Text,{component:o.TextVariants.p,className:"section-info"},z("createTopic.flushSectionInfo"))),i().createElement(c.R,{btnAriaLabel:"flush interval messages",fieldLabel:"Flush interval messages",fieldValue:"9223372036854775807",popoverBody:z("createTopic.intervalMessagesLabelBody"),popoverHeader:z("createTopic.intervalMessagesLabelHead"),unit:"ms"}),i().createElement(c.R,{btnAriaLabel:"flush interval time",fieldLabel:"Flush interval time",fieldValue:"9223372036854775807",popoverBody:z("createTopic.intervalTimeLabelBody"),popoverHeader:z("createTopic.intervalTimeLabelHead"),unit:"ms"})))),i().createElement(o.ActionGroup,{className:"kafka-ui--sticky-footer"},i().createElement(o.Button,{onClick:function(){C?D(!0):a()},variant:"primary","data-testid":t?"topicAdvanceCreate-actionCreate":"tabProperties-actionSave",isDisabled:!(p.name.length>0&&"default"==w)},ie),i().createElement(o.Button,{onClick:s,variant:"link","data-testid":t?"topicAdvanceCreate-actionCancel":"tabProperties-actionCancel"},"Cancel")),O&&i().createElement(l,{isWarningOpen:O,onSaveClick:function(){D(!1),a()},setIsWarningOpen:D}))))}},1249:(e,t,a)=>{"use strict";a.d(t,{FB:()=>i,$X:()=>o,L3:()=>c,hM:()=>s});var n=function(){return(n=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var i in t=arguments[a])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},i=function(e){return e.split("-").map((function(e,t){return t>0?(a=e).charAt(0).toUpperCase()+a.slice(1):e;var a})).join("")},o=function(e){return e.replaceAll("-",".")},r={bytes:1,kilobytes:1e3,megabytes:1e6,gigabytes:1e9,terabytes:1e12},l={milliseconds:1,seconds:1e3,days:864e5,months:2592e6,years:31536e6},c=function(e){var t=n({},e);for(var a in t)"ms"===a.split(".").pop()&&(t[a]=String(Number(t[a])*l[t[a+".unit"]||"milliseconds"])),"bytes"===a.split(".").pop()&&(t[a]=String(Number(t[a])*r[t[a+".unit"]||"bytes"]));for(var a in t["flush.messages"]&&(t["flush.messages"]=String(Number(t["flush.messages"])*l[t["flush.messages.unit"]||"milliseconds"])),t)"unit"===a.split(".").pop()&&delete t[a];return t},s=function(e){var t=e.name,a=e.numPartitions,n=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(a[n[i]]=e[n[i]])}return a}(e,["name","numPartitions"]),i=[];for(var o in n)o&&i.push({key:o,value:n[o].toString()});return{name:t,settings:{numPartitions:Number(a),config:i}}}}}]);
//# sourceMappingURL=135.9891813a.bundle.js.map