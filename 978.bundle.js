/*!
 * Copyright Strimzi authors.
 * License: Apache License 2.0 (see the file LICENSE or http://apache.org/licenses/LICENSE-2.0.html).
 *
 */
(self.webpackChunkstrimzi_ui=self.webpackChunkstrimzi_ui||[]).push([[978],{9981:()=>{},7978:(e,t,n)=>{"use strict";n.d(t,{q:()=>CreateTopicWizard});var a=n(2491),i=n.n(a),l=n(7345),o=(n(9981),function(e){var t=e.topicNameInput,n=e.setTopicNameInput;return i().createElement(i().Fragment,null,i().createElement(l.TextContent,{className:"topics-wizard-content"},i().createElement(l.Text,{component:l.TextVariants.h2},"Topic name"),i().createElement(l.Text,{component:l.TextVariants.p},"This is the unique name used to recognize your topic."),i().createElement(l.Text,{component:l.TextVariants.small},"It will also be used by your producers and consumers as part of the connection information, so make it something easy to recognize."),i().createElement(l.Form,null,i().createElement(l.FormGroup,{label:"Topic name",fieldId:"step-topic-name-form"},i().createElement(l.TextInput,{isRequired:!0,type:"text",id:"step-topic-name-input",name:"step-topic-name","aria-describedby":"step-topic-name-helper",value:t,onChange:function(e){n(e)},placeholder:"Enter topic name"})))))}),StepPartitions=function(e){var t=e.partitionTouchspinValue,n=e.setPartitionTouchspinValue;return i().createElement(l.TextContent,{className:"topics-wizard-content"},i().createElement(l.Text,{component:l.TextVariants.h2},"Partitions"),i().createElement(l.Text,{component:l.TextVariants.p},"One or more partitions make up a topic. A partition is an ordered list of messages."),i().createElement(l.Text,{component:l.TextVariants.small},"Partitions are distributed across the brokers in order to increase the scalability of your topic. You can also use them to distribute messages across the members of a consumer group."),i().createElement(l.NumberInput,{onPlus:function(){n(t+1)},onMinus:function(){n(t-1)},value:t,inputName:"input",onChange:function(e){n(Number(e.target.value))}}))},StepMessageRetention=function(e){var t,n=e.setMsgRetentionValue;!function(e){e[e.DAY=1]="DAY",e[e.WEEK=7]="WEEK",e[e.MONTH=30]="MONTH",e.CUSTOM="custom"}(t||(t={}));var o=i().useState(t.DAY),r=o[0],c=o[1],m=(0,a.useState)(7),s=m[0],d=m[1],u=(0,a.useState)(!1),p=u[0],g=u[1],b=(0,a.useState)(!1),f=b[0],T=b[1],E=(0,a.useState)(1),y=E[0],v=E[1];(0,a.useEffect)((function(){r===t.DAY?n(t.DAY):r===t.WEEK?n(t.WEEK):r===t.MONTH?n(t.MONTH):r===t.CUSTOM&&n(y*s)}),[r,s,y]);var handleMessageRetention=function(e,n){var a=n.target.name;"radio1"===a?c(t.DAY):"radio2"===a?c(t.WEEK):"radio3"===a?c(t.MONTH):"radio4"===a&&c(t.CUSTOM)};return i().createElement(i().Fragment,null,i().createElement(l.TextContent,{className:"topics-wizard-content"},i().createElement(l.Text,{component:l.TextVariants.h2},"Message retention"),i().createElement(l.Text,{component:l.TextVariants.p},"This is how long messages are retained before they are deleted."),i().createElement(l.Text,{component:l.TextVariants.small},"If your messages are not read by a consumer within this time, they will be missed.")),i().createElement(l.Form,{className:"form-in-wizard"},i().createElement(l.FormGroup,{fieldId:"form-group-in-wizard",label:"Message retention",className:"form-group-radio"},i().createElement(l.Radio,{isChecked:r===t.DAY,name:"radio1",onChange:handleMessageRetention,label:"A day","aria-label":"A day",id:"radio-controlled-1",value:"day"}),i().createElement(l.Radio,{isChecked:r===t.WEEK,name:"radio2",onChange:handleMessageRetention,label:"A week","aria-label":"A week",id:"radio-controlled-2",value:"week"}),i().createElement(l.Radio,{isChecked:r===t.MONTH,name:"radio3",onChange:handleMessageRetention,label:"A month","aria-label":"A month",id:"radio-controlled-3",value:"month"}),i().createElement(l.Radio,{isChecked:r===t.CUSTOM,name:"radio4",onChange:handleMessageRetention,label:"","aria-label":"custom input",id:"radio-controlled-4",value:"custom"}),i().createElement("div",{className:"radio-description radio-step-3"},i().createElement(l.Flex,null,i().createElement(l.FlexItem,null,i().createElement(l.NumberInput,{onMinus:function(){d(s-1)},onPlus:function(){d(s+1)},value:s,onChange:function(e){d(Number(e.target.value))}})),i().createElement(l.FlexItem,null,i().createElement(l.Select,{variant:l.SelectVariant.single,"aria-label":"Select Input",onToggle:function(e){g(e)},onSelect:function(e,n){"days"===n?v(t.DAY):"weeks"===n?v(t.WEEK):"months"===n&&v(t.MONTH),T(n),g(!1)},selections:f,isOpen:p},i().createElement(l.SelectOption,{key:0,value:"days",isPlaceholder:!0}),i().createElement(l.SelectOption,{key:1,value:"weeks"}),i().createElement(l.SelectOption,{key:2,value:"months"}))))))))},StepReplicas=function(e){var t,n=e.setReplicationFactorTouchspinValue,a=e.setMinInSyncReplicaTouchspinValue,o=e.replicationFactorTouchspinValue,r=e.minInSyncReplicaTouchspinValue;!function(e){e[e.ONE=1]="ONE",e[e.TWO=2]="TWO",e.CUSTOM="custom"}(t||(t={}));var c=i().useState(t.ONE),m=c[0],s=c[1],handleChangeReplicationFactor=function(e,i){var l=i.target.name;"radio4"===l?(s(t.ONE),a(t.ONE),n(t.ONE)):"radio5"===l?(s(t.TWO),a(t.TWO),n(t.TWO)):"radio6"===l&&(s(t.CUSTOM),a(r),n(o))};return i().createElement(i().Fragment,null,i().createElement(l.TextContent,{className:"topics-wizard-content"},i().createElement(l.Text,{component:l.TextVariants.h2},"Replicas"),i().createElement(l.Text,{component:l.TextVariants.p},"This is how many copies of a topic will be made for high availability."),i().createElement(l.Text,{component:l.TextVariants.small},"The partitions of each topic can be replicated across a configurable number of brokers."),i().createElement(l.Form,null,i().createElement(l.FormGroup,{fieldId:"create-wizard-replica-form-group",label:"Replicas",className:"form-group-radio"},i().createElement(l.Radio,{isChecked:m===t.ONE,name:"radio4",onChange:handleChangeReplicationFactor,label:"Replication factor: 1",id:"radio-controlled-4",value:"radio4",description:"Minimum in-sync replicas: 1"}),i().createElement(l.Radio,{isChecked:m===t.TWO,name:"radio5",onChange:handleChangeReplicationFactor,label:"Replication factor: 2",id:"radio-controlled-5",value:"radio5",description:"Minimum in-sync replicas: 2"}),i().createElement(l.Radio,{isChecked:m===t.CUSTOM,name:"radio6",onChange:handleChangeReplicationFactor,label:"Replication factor",id:"radio-controlled-6",value:"radio6"}),i().createElement("div",{className:"radio-description"},i().createElement(l.NumberInput,{value:o,onMinus:function(){n(o-1)},onPlus:function(){n(o+1)},onChange:function(e){n(Number(e.target.value))}}),i().createElement(l.Text,{component:l.TextVariants.small,className:"minimum-in-sync-replicas"},"Minimum in-sync replicas"),i().createElement(l.NumberInput,{value:r,onMinus:function(){a(r-1)},onPlus:function(){a(r+1)},onChange:function(e){a(Number(e.target.value))}}))))))},r=n(4396),c=n(7446),CreateTopicWizard=function(e){var t=e.setIsCreateTopic,n=(0,a.useState)(!1),m=n[0],s=n[1],d=(0,a.useState)(!1),u=d[0],p=d[1],g=(0,a.useState)(1),b=(g[0],g[1]),f=(0,a.useState)(""),T=f[0],E=f[1],y=(0,a.useState)(1),v=y[0],h=y[1],x=(0,a.useState)(1),L=x[0],I=x[1],C=(0,a.useState)(1),B=C[0],w=C[1],S=i().createElement(l.Breadcrumb,null,i().createElement(l.BreadcrumbItem,{to:"/openshiftstreams"},"Red Hat OpenShift Streams for Apache Kafka"),i().createElement(l.BreadcrumbItem,{to:"/openshiftstreams"},"MK Cluster Instance"),i().createElement(l.BreadcrumbItem,{to:"#",isActive:!0},"Create topic")),closeWizard=function(){t&&t(!1)},saveTopic=function(){var e={name:T,settings:{numPartitions:v,replicationFactor:L}};(new c.M2).createTopic(e).then((function(e){200===e.status&&s(!0),closeWizard()}))},M=[{name:"Topic name",enableNext:""!==T.trim(),component:i().createElement(o,{topicNameInput:T,setTopicNameInput:E})},{name:"Partitions",canJumpTo:""!==T.trim(),component:i().createElement(StepPartitions,{partitionTouchspinValue:v,setPartitionTouchspinValue:h})},{name:"Message retention",canJumpTo:""!==T.trim(),component:i().createElement(StepMessageRetention,{setMsgRetentionValue:b})},{name:"Replicas",canJumpTo:""!==T.trim(),component:i().createElement(StepReplicas,{setReplicationFactorTouchspinValue:I,setMinInSyncReplicaTouchspinValue:w,replicationFactorTouchspinValue:L,minInSyncReplicaTouchspinValue:B}),nextButtonText:"Finish"}],P="Create topics wizard";return i().createElement(i().Fragment,null,i().createElement("section",{className:"pf-c-page__main-breadcrumb"},S),i().createElement(l.PageSection,{variant:l.PageSectionVariants.light},i().createElement(l.AlertGroup,{isToast:!0},m?i().createElement(l.Alert,{isLiveRegion:!0,variant:"success",title:"OpenShift Streams topic created",actionClose:i().createElement(l.AlertActionCloseButton,{"aria-label":"Close success alert",onClose:function(){s(!0)}})},"The topic was successfully created in the Kafka instance."):i().createElement(i().Fragment,null)),i().createElement(l.Title,{headingLevel:"h1",size:"lg"},"Create topic"),i().createElement(l.Switch,{id:"simple-switch",label:"Show all available options",labelOff:"Show all available options",isChecked:u,onChange:p,className:"create-topic-wizard"})),i().createElement(l.Divider,null),u?i().createElement(i().Fragment,null,i().createElement(l.Divider,null),i().createElement(l.PageSection,{variant:l.PageSectionVariants.light},i().createElement(r.W,{isCreate:!0,saveTopic:saveTopic}))):i().createElement(l.PageSection,{variant:l.PageSectionVariants.light,padding:{default:"noPadding"}},i().createElement(l.Wizard,{navAriaLabel:P+" steps",mainAriaLabel:P+" content",steps:M,onClose:closeWizard,onSave:saveTopic})))}},4396:(e,t,n)=>{"use strict";n.d(t,{W:()=>TopicAdvanceConfig});var a=n(2491),i=n.n(a),l=n(7345),o=(n(9981),n(5964)),DropdownWithToggle=function(e){var t,n=e.id,r=e.toggleId,c=e.items,m=e.value,s=e.ariaLabel,d=e.onSelectOption,u=e.name,p=(0,a.useState)(),g=p[0],b=p[1],f=i().createElement(l.DropdownToggle,{id:r,onToggle:function(){b((function(e){return!e}))},toggleIndicator:o.VA},m);return i().createElement(l.Dropdown,{name:u,id:n,onSelect:function(e){var t=e.currentTarget.textContent;d&&(e.target.name=u,d(t,e)),b((function(e){return!e}))},toggle:f,isOpen:g,"aria-label":s,dropdownItems:(t=c,t.map((function(e){var t=e.key,n=e.value,a=e.label;return i().createElement(l.DropdownItem,{key:t,value:n},a||n)})))})},r=n(4213),FormGroupWithPopover=function(e){var t=e.children,n=e.labelHead,a=e.fieldId,o=e.fieldLabel,c=e.labelBody,m=e.buttonAriaLabel;return i().createElement(l.FormGroup,{fieldId:a,label:o,labelIcon:i().createElement(l.Popover,{headerContent:i().createElement("div",null,n),bodyContent:i().createElement("div",null,c)},i().createElement("button",{"aria-label":m,onClick:function(e){return e.preventDefault()},className:"pf-c-form__group-label-help"},i().createElement(r.by,{noVerticalAlign:!0})))},t)},kebabToCamel=function(e){return e.split("-").map((function(e,t){return t>0?(n=e).charAt(0).toUpperCase()+n.slice(1):e;var n})).join("")},c=n(6738),SizeTimeFormGroup=function(e){var t=e.id,n=e.toggleId,a=e.dropdownValue,o=e.ariaLabel,r=e.onSelectOption,c=e.name,m=e.inputName,s=e.onChange,d=e.onPlus,u=e.onMinus,p=e.value,g=e.plusBtnProps,b=e.minusBtnProps,f=e.type,T=[{key:"millisecond",value:"millisecond",isDisabled:!1},{key:"second",value:"second",isDisabled:!1},{key:"day",value:"day",isDisabled:!1},{key:"month",value:"month",isDisabled:!1},{key:"year",value:"year",isDisabled:!1}],E=[{key:"bytes",value:"bytes",isDisabled:!1},{key:"kilobytes",value:"kilobytes",isDisabled:!1},{key:"megabytes",value:"megabytes",isDisabled:!1},{key:"gigabytes",value:"gigabytes",isDisabled:!1},{key:"terabytes",value:"terabytes",isDisabled:!1}];return i().createElement(l.Flex,null,i().createElement(l.FlexItem,{grow:{default:"grow"}},i().createElement(l.NumberInput,{inputName:m,onChange:s,onPlus:d,onMinus:u,value:p,plusBtnProps:g,minusBtnProps:b})),i().createElement(l.FlexItem,null,i().createElement(DropdownWithToggle,{id:t,toggleId:n,ariaLabel:o,onSelectOption:r,items:function(e){switch(e){case"time":return T;case"memory":return E;default:return[]}}(f),name:c,value:a})))},m=n(7687),s=[{key:"create-time",value:"CreateTime",isDisabled:!1},{key:"log-append-time",value:"LogAppendTime",isDisabled:!1}],d=[{key:"Producer",value:"Producer",isDisabled:!1},{key:"Gzip",value:"Gzip",isDisabled:!1},{key:"Snappy",value:"Snappy",isDisabled:!1},{key:"LZ4",value:"LZ4",isDisabled:!1},{key:"Zstandard",value:"Zstandard",isDisabled:!1},{key:"Uncompressed",value:"Uncompressed",isDisabled:!1}],MessageSection=function(){var e=i().useContext(c.J),t=e.store,n=e.updateStore,a=(0,m.$)().t,handleTouchSpinInputChange=function(e){var t=e.currentTarget,a=t.name,i=t.value;n(kebabToCamel(a),i)},handleTouchSpinPlus=function(e){var a=e.currentTarget.name,i=kebabToCamel(a);n(i,t[i]+1)},handleTouchSpinMinus=function(e){var a=e.currentTarget.name,i=kebabToCamel(a);n(i,t[i]-1)},onDropdownChange=function(e,t){var a=t.target.name;n(kebabToCamel(a),e)};return i().createElement(i().Fragment,null,i().createElement(l.TextContent,null,i().createElement(l.Text,{component:l.TextVariants.h2,tabIndex:-1,id:"messages"},"Messages"),i().createElement(l.Text,{component:l.TextVariants.p},a("createTopic.messageSectionInfo"))),i().createElement(l.Form,null,i().createElement(FormGroupWithPopover,{fieldId:"maxsize",fieldLabel:"Maximum message size",labelHead:a("createTopic.maxMessageSizeLabelHead"),labelBody:a("createTopic.maxMessageSizeLabelBody"),buttonAriaLabel:"More info for maximum message size field"},i().createElement(SizeTimeFormGroup,{inputName:"max-message-size",onChange:handleTouchSpinInputChange,onPlus:handleTouchSpinPlus,onMinus:handleTouchSpinMinus,value:t.maxMessageSize,plusBtnProps:{name:"max-message-size"},minusBtnProps:{name:"max-message-size"},id:"msg-section-units-dropdown",toggleId:"msg-section-units-dropdowntoggle",ariaLabel:"select unit from dropdown",onSelectOption:onDropdownChange,type:"memory",name:"message-size-unit",dropdownValue:t.messageSizeUnit})),i().createElement(FormGroupWithPopover,{fieldId:"timestamp",fieldLabel:"Message timestamp type",labelHead:a("createTopic.messageTimestampLabelHead"),labelBody:a("createTopic.messageTimestampLabelBody"),buttonAriaLabel:"More info for message timestamp field"},i().createElement(DropdownWithToggle,{id:"msg-section-timestamp-dropdown",toggleId:"msg-section-timestamp-dropdowntoggle",ariaLabel:"select timestamp type from dropdown",name:"timestamp-type",onSelectOption:onDropdownChange,items:s,value:t.timestampType})),i().createElement(FormGroupWithPopover,{fieldId:"max-difference",fieldLabel:"Message timestamp difference",labelHead:a("createTopic.messageTimestampDiffLabelHead"),labelBody:a("createTopic.messageTimestampDiffLabelBody"),buttonAriaLabel:"More info for maximum message timestamp difference field"},i().createElement(SizeTimeFormGroup,{inputName:"max-timestamp-diff",onChange:handleTouchSpinInputChange,onPlus:handleTouchSpinPlus,onMinus:handleTouchSpinMinus,value:t.maxTimestampDiff,plusBtnProps:{name:"max-timestamp-diff"},minusBtnProps:{name:"max-timestamp-diff"},id:"msg-section-timestamp-diff-units-dropdown",toggleId:"msg-section-timestamp-diff-units-dropdowntoggle",ariaLabel:"select unit from dropdown",onSelectOption:onDropdownChange,type:"time",name:"timestamp-diff-unit",dropdownValue:t.timestampDiffUnit})),i().createElement(FormGroupWithPopover,{fieldId:"compression-type",fieldLabel:"Compression type",labelHead:a("createTopic.compressionTypeLabelHead"),labelBody:a("createTopic.compressionTypeLabelBody"),buttonAriaLabel:"More info for comprssion type field"},i().createElement(DropdownWithToggle,{id:"compression-type",toggleId:"msg-section-compression-type-dropdowntoggle",ariaLabel:"select timestamp type from dropdown",name:"compression-type",onSelectOption:onDropdownChange,items:d,value:t.compressionType}))))},CoreConfiguration=function(){var e=i().useContext(c.J),t=e.store,n=e.updateStore,a=(0,m.$)().t,handleTouchSpinInputChange=function(e){var t=e.currentTarget,a=t.name,i=t.value;n(kebabToCamel(a),Number(i))},handleTouchSpinPlus=function(e){var a=e.currentTarget.name,i=kebabToCamel(a);n(i,t[i]+1)},handleTouchSpinMinus=function(e){var a=e.currentTarget.name,i=kebabToCamel(a);n(i,t[i]-1)};return i().createElement(i().Fragment,null,i().createElement(l.TextContent,null,i().createElement(l.Title,{headingLevel:"h2",size:"2xl",id:"core-configuration",tabIndex:-1},"Core configuration"),i().createElement(l.Text,{component:l.TextVariants.p},a("createTopic.coreConfigInfo"))),i().createElement(l.Form,null,i().createElement(FormGroupWithPopover,{labelHead:a("createTopic.topicNameLabelHead"),fieldId:"create-topic-name",fieldLabel:"Topic name",labelBody:a("createTopic.topicNameLabelBody"),buttonAriaLabel:"More info for topic name field"},i().createElement(l.TextInput,{isRequired:!0,type:"text",id:"create-topic-name",name:"topic-name",value:t.topicName,onChange:function(e,t){var a=t.currentTarget.name;n(kebabToCamel(a),e)},label:"Topic name",placeholder:"Test topic name"})),i().createElement(FormGroupWithPopover,{fieldId:"create-topic-partitions",fieldLabel:"Partitions",labelHead:a("createTopic.partitionsLabelHead"),labelBody:a("createTopic.partitionsLabelBody"),buttonAriaLabel:"More info for partitions field"},i().createElement(l.NumberInput,{id:"create-topic-partitions",inputName:"partitions",onChange:handleTouchSpinInputChange,onPlus:handleTouchSpinPlus,onMinus:handleTouchSpinMinus,value:t.partitions,plusBtnProps:{name:"partitions"},minusBtnProps:{name:"partitions"}})),i().createElement(FormGroupWithPopover,{fieldId:"replicas",fieldLabel:"Replicas",labelHead:a("createTopic.replicasLabelHead"),labelBody:a("createTopic.replicasLabelBody"),buttonAriaLabel:"More info for replicas field"},i().createElement(l.NumberInput,{inputName:"replicas",onChange:handleTouchSpinInputChange,onPlus:handleTouchSpinPlus,onMinus:handleTouchSpinMinus,value:t.replicas,plusBtnProps:{name:"replicas"},minusBtnProps:{name:"replicas"}})),i().createElement(FormGroupWithPopover,{fieldId:"insyncreplicas",fieldLabel:"Minimum in-sync replicas",labelHead:a("createTopic.inSyncReplicasLabelHead"),labelBody:a("createTopic.inSyncReplicasLabelBody"),buttonAriaLabel:"More info for minimum in-sync replicas field"},i().createElement(l.NumberInput,{id:"insyncreplicas",inputName:"min-in-sync-replicas",onChange:handleTouchSpinInputChange,onPlus:handleTouchSpinPlus,onMinus:handleTouchSpinMinus,value:t.minInSyncReplicas,plusBtnProps:{name:"min-in-sync-replicas"},minusBtnProps:{name:"min-in-sync-replicas"}})),i().createElement(FormGroupWithPopover,{fieldId:"retention",fieldLabel:"Retention time",labelHead:a("createTopic.retentionTimeLabelHead"),labelBody:a("createTopic.retentionTimeLabelBody"),buttonAriaLabel:"More info for retention time field"},i().createElement(SizeTimeFormGroup,{inputName:"retention-time",onChange:handleTouchSpinInputChange,onPlus:handleTouchSpinPlus,onMinus:handleTouchSpinMinus,value:t.retentionTime,plusBtnProps:{name:"retention-time"},minusBtnProps:{name:"retention-time"},id:"core-config-retention-time-unit",toggleId:"core-config-retention-dropdowntoggle",name:"retention-time-unit",dropdownValue:t.retentionTimeUnit,ariaLabel:"select unit from dropdown",onSelectOption:function(e,t){var a=t.target.name;n(kebabToCamel(a),e)},type:"time"}))))},u=[{key:"compact",value:"compact",isDisabled:!1},{key:"delete",value:"delete",isDisabled:!1},{key:"compact-delete",value:"compact, delete",isDisabled:!1},{key:"delete-compact",value:"delete, compact",isDisabled:!1}],LogSection=function(){var e=i().useContext(c.J),t=e.store,n=e.updateStore,a=(0,m.$)().t,onDropdownChange=function(e,t){var a=t.target.name;n(kebabToCamel(a),e)},handleTouchSpinInputChange=function(e){var t=e.currentTarget,a=t.name,i=t.value;n(kebabToCamel(a),Number(i))},handleTouchSpinPlus=function(e){var a=e.currentTarget.name,i=kebabToCamel(a);n(i,t[i]+1)},handleTouchSpinMinus=function(e){var a=e.currentTarget.name,i=kebabToCamel(a);n(i,t[i]-1)};return i().createElement(i().Fragment,null,i().createElement(l.TextContent,null,i().createElement(l.Text,{component:l.TextVariants.h2,tabIndex:-1,id:"log"},"Log"),i().createElement(l.Text,{component:l.TextVariants.p},a("createTopic.logSectionInfo"))),i().createElement(l.Form,null,i().createElement(FormGroupWithPopover,{fieldId:"cleanup-policy",fieldLabel:"Cleanup policy",labelHead:a("createTopic.cleanupPolicyLabelHead"),labelBody:a("createTopic.cleanupPolicyLabelBody"),buttonAriaLabel:"More info for cleanup policy field"},i().createElement(DropdownWithToggle,{id:"log-section-policy-type-dropdown",toggleId:"log-section-policy-type-dropdowntoggle",ariaLabel:"select policy type from dropdown",onSelectOption:onDropdownChange,items:u,name:"cleanup-policy",value:t.cleanupPolicy})),i().createElement(FormGroupWithPopover,{fieldId:"retention-bytes",fieldLabel:"Retention bytes",labelHead:a("createTopic.retentionBytesLabelHead"),labelBody:a("createTopic.retentionBytesLabelBody"),buttonAriaLabel:"More info for retention bytes field"},i().createElement(SizeTimeFormGroup,{inputName:"retention-bytes",onChange:handleTouchSpinInputChange,onPlus:handleTouchSpinPlus,onMinus:handleTouchSpinMinus,value:t.retentionBytes,plusBtnProps:{name:"retention-bytes"},minusBtnProps:{name:"retention-bytes"},id:"log-section-retention-unit-dropdown",toggleId:"log-section-retention-unit-dropdowntoggle",ariaLabel:"select unit from dropdown",onSelectOption:onDropdownChange,type:"memory",name:"retention-unit",dropdownValue:t.retentionUnit})),i().createElement(FormGroupWithPopover,{fieldId:"log-type",fieldLabel:"Log segment types",labelHead:a("createTopic.logSegmentLabelHead"),labelBody:a("createTopic.logSegmentLabelBody"),buttonAriaLabel:"More info for log segment types field"},i().createElement(SizeTimeFormGroup,{inputName:"segment-size",onChange:handleTouchSpinInputChange,onPlus:handleTouchSpinPlus,onMinus:handleTouchSpinMinus,value:t.segmentSize,plusBtnProps:{name:"segment-size"},minusBtnProps:{name:"segment-size"},id:"log-section-segment-unit-dropdown",toggleId:"log-section-segment-unit-dropdowntoggle",ariaLabel:"select unit from dropdown",onSelectOption:onDropdownChange,type:"memory",name:"segment-unit",dropdownValue:t.segmentUnit}))))},ReplicationSection=function(){var e=i().useContext(c.J),t=e.store,n=e.updateStore,a=(0,m.$)().t,handleTextInputChange=function(e,t){var a=t.currentTarget.name;n(kebabToCamel(a),e)};return i().createElement(i().Fragment,null,i().createElement(l.TextContent,null,i().createElement(l.Text,{component:l.TextVariants.h2,tabIndex:-1,id:"replication"},"Replication"),i().createElement(l.Text,{component:l.TextVariants.p},a("createTopic.replicationSectionInfo"))),i().createElement(l.Form,null,i().createElement(FormGroupWithPopover,{fieldId:"unclean-leader-election",fieldLabel:"Unclean leader election",labelHead:a("createTopic.leaderElectionLabelHead"),labelBody:a("createTopic.leaderElectionLabelBody"),buttonAriaLabel:"More info for leader election field"},i().createElement(l.Checkbox,{isChecked:t.uncleanLeaderElection,label:"Allow unclean leader election","aria-label":"uncontrolled checkbox example",id:"leader-election",onChange:function(e,t){var a=t.currentTarget.name;n(kebabToCamel(a),e)},name:"unclean-leader-election"})),i().createElement(FormGroupWithPopover,{fieldId:"follower-replicas",fieldLabel:"Follower replication throttled replicas",labelHead:a("createTopic.followerReplicaLabelHead"),labelBody:a("createTopic.followerReplicaLabelBody"),buttonAriaLabel:"More info for follower throttled replicas field"},i().createElement(l.InputGroup,null,i().createElement(l.TextInput,{name:"follower-replicas",type:"text","aria-label":"Text",onChange:handleTextInputChange,value:t.followerReplicas}))),i().createElement(FormGroupWithPopover,{fieldId:"leader-replicas",fieldLabel:"Leader replication throttled replicas",labelHead:a("createTopic.leaderReplicaLabelHead"),labelBody:a("createTopic.leaderReplicaLabelBody"),buttonAriaLabel:"More info for leader throttled replicas field"},i().createElement(l.InputGroup,null,i().createElement(l.TextInput,{name:"leader-replicas",type:"text","aria-label":"Text",onChange:handleTextInputChange,value:t.leaderReplicas})))))},IndexSection=function(){var e=i().useContext(c.J),t=e.store,n=e.updateStore,a=(0,m.$)().t,handleTouchSpinInputChange=function(e){var t=e.currentTarget,a=t.name,i=t.value;n(kebabToCamel(a),i)},handleTouchSpinPlus=function(e){var a=e.currentTarget.name,i=kebabToCamel(a);n(i,t[i]+1)},handleTouchSpinMinus=function(e){var a=e.currentTarget.name,i=kebabToCamel(a);n(i,t[i]-1)},onDropdownChange=function(e,t){var a=t.target.name;n(kebabToCamel(a),e)};return i().createElement(i().Fragment,null,i().createElement(l.TextContent,null,i().createElement(l.Text,{component:l.TextVariants.h2,tabIndex:-1,id:"index"},"Index"),i().createElement(l.Text,{component:l.TextVariants.p},a("createTopic.indexSectionInfo"))),i().createElement(l.Form,null,i().createElement(FormGroupWithPopover,{fieldId:"interval-bytes",fieldLabel:"Index interval bytes",labelHead:a("createTopic.indexIntervalLabelHead"),labelBody:a("createTopic.indexIntervalLabelBody"),buttonAriaLabel:"More info for index interval bytes field"},i().createElement(SizeTimeFormGroup,{id:"index-interval-size",inputName:"index-interval-size",onChange:handleTouchSpinInputChange,onPlus:handleTouchSpinPlus,onMinus:handleTouchSpinMinus,value:t.indexIntervalSize,plusBtnProps:{name:"index-interval-size"},minusBtnProps:{name:"index-interval-size"},toggleId:"index-interval-unit-dropdowntoggle",name:"index-interval-unit",ariaLabel:"select unit from dropdown",onSelectOption:onDropdownChange,type:"memory",dropdownValue:t.indexIntervalUnit})),i().createElement(FormGroupWithPopover,{fieldId:"int-bytes",fieldLabel:"Segment interval bytes",labelHead:a("createTopic.segementIntervalLabelHead"),labelBody:a("createTopic.segementIntervalLabelBody"),buttonAriaLabel:"More info for segment interval bytes field"},i().createElement(SizeTimeFormGroup,{id:"segment-index-size",inputName:"segment-index-size",onChange:handleTouchSpinInputChange,onPlus:handleTouchSpinPlus,onMinus:handleTouchSpinMinus,value:t.segmentIndexSize,plusBtnProps:{name:"segment-index-size"},minusBtnProps:{name:"segment-index-size"},toggleId:"segment-index-unit-dropdowntoggle",name:"segment-index-unit",ariaLabel:"select duration from dropdown",onSelectOption:onDropdownChange,type:"memory",dropdownValue:t.segmentIndexUnit}))))},FlushSection=function(){var e=i().useContext(c.J),t=e.store,n=e.updateStore,a=(0,m.$)().t,handleTouchSpinInputChange=function(e){var t=e.currentTarget,a=t.name,i=t.value;n(a,i)},handleTouchSpinPlus=function(e){var a=e.currentTarget.name,i=kebabToCamel(a);n(i,t[i]+1)},handleTouchSpinMinus=function(e){var a=e.currentTarget.name,i=kebabToCamel(a);n(i,t[i]-1)},onDropdownChange=function(e,t){var a=t.target.name;n(kebabToCamel(a),e)};return i().createElement(i().Fragment,null,i().createElement(l.TextContent,null,i().createElement(l.Text,{component:l.TextVariants.h2,tabIndex:-1,id:"flush"},"Flush"),i().createElement(l.Text,{component:l.TextVariants.p},a("createTopic.flushSectionInfo"))),i().createElement(l.Form,null,i().createElement(FormGroupWithPopover,{fieldId:"interval-messages",fieldLabel:"Flush interval messages",labelHead:"createTopic.intervalMessagesLabelHead",labelBody:"createTopic.intervalMessagesLabelBody",buttonAriaLabel:"More info for flush interval messages field"},i().createElement(SizeTimeFormGroup,{inputName:"interval-messages",onChange:handleTouchSpinInputChange,onPlus:handleTouchSpinPlus,onMinus:handleTouchSpinMinus,value:t.intervalMessages,plusBtnProps:{name:"interval-messages"},minusBtnProps:{name:"interval-messages"},id:"interval-messages-unit-dropdown",toggleId:"interval-messages-unit-dropdowntoggle",name:"interval-messages-unit",ariaLabel:"select unit from dropdown",onSelectOption:onDropdownChange,type:"time",dropdownValue:t.intervalMessagesUnit})),i().createElement(FormGroupWithPopover,{fieldId:"flush",fieldLabel:"Flush interval time",labelHead:a("createTopic.intervalTimeLabelHead"),labelBody:a("createTopic.intervalTimeLabelBody"),buttonAriaLabel:"More info for flush interval time field"},i().createElement(SizeTimeFormGroup,{inputName:"interval-time",onChange:handleTouchSpinInputChange,onPlus:handleTouchSpinPlus,onMinus:handleTouchSpinMinus,value:t.intervalTime,plusBtnProps:{name:"interval-time"},minusBtnProps:{name:"interval-time"},id:"interval-time-unit-dropdown",toggleId:"interval-time-unit-dropdowntoggle",name:"interval-time-unit",ariaLabel:"select unit from dropdown",onSelectOption:onDropdownChange,dropdownValue:t.intervalTimeUnit,type:"time"}))))},CleanupSection=function(){var e=i().useContext(c.J),t=e.store,n=e.updateStore,a=(0,m.$)().t,handleTouchSpinInputChange=function(e){var t=e.currentTarget,a=t.name,i=t.value,l=kebabToCamel(a);n(l,Number(i))},handleTouchSpinPlus=function(e){var a=e.currentTarget.name,i=kebabToCamel(a);n(i,t[i]+1)},handleTouchSpinMinus=function(e){var a=e.currentTarget.name,i=kebabToCamel(a);n(i,t[i]-1)},onDropdownChange=function(e,t){var a=t.target.name;n(kebabToCamel(a),e)};return i().createElement(i().Fragment,null,i().createElement(l.TextContent,null,i().createElement(l.Text,{component:l.TextVariants.h2,tabIndex:-1,id:"cleanup"},"Cleanup"),i().createElement(l.Text,{component:l.TextVariants.p},a("createTopic.cleanupSectionInfo"))),i().createElement(l.Form,null,i().createElement(FormGroupWithPopover,{fieldId:"delete-retention",fieldLabel:"Delete retention",labelHead:a("createTopic.deleteRetentionLabelHead"),labelBody:a("createTopic.deleteRetentionLabelBody"),buttonAriaLabel:"More info for delete retention field"},i().createElement(SizeTimeFormGroup,{inputName:"delete-retention-time",onChange:handleTouchSpinInputChange,onPlus:handleTouchSpinPlus,onMinus:handleTouchSpinMinus,value:t.deleteRetentionTime,plusBtnProps:{name:"delete-retention-time"},minusBtnProps:{name:"delete-retention-time"},id:"delete-retention-unit",toggleId:"delete-retention-dropdowntoggle",ariaLabel:"select unit from dropdown",onSelectOption:onDropdownChange,type:"time",name:"delete-retention-unit",dropdownValue:t.deleteRetentionUnit})),i().createElement(FormGroupWithPopover,{fieldId:"dirty-ratio",fieldLabel:"Minimum cleanable dirty ratio",labelHead:a("createTopic.minRatioLabelHead"),labelBody:a("createTopic.minRatioLabelBody"),buttonAriaLabel:"More info for minimum cleanable ratio field"},i().createElement(l.NumberInput,{inputName:"min-ratio",onChange:handleTouchSpinInputChange,onPlus:handleTouchSpinPlus,onMinus:handleTouchSpinMinus,value:t.minRatio,plusBtnProps:{name:"min-ratio"},minusBtnProps:{name:"min-ratio"}})),i().createElement(FormGroupWithPopover,{fieldId:"compaction",fieldLabel:"Minimum compaction lag time",labelHead:a("createTopic.minLagLabelHead"),labelBody:a("createTopic.minLagLabelBody"),buttonAriaLabel:"More info for minimum compaction log time field"},i().createElement(SizeTimeFormGroup,{inputName:"min-lag-time",onChange:handleTouchSpinInputChange,onPlus:handleTouchSpinPlus,onMinus:handleTouchSpinMinus,value:t.minLagTime,plusBtnProps:{name:"min-lag-time"},minusBtnProps:{name:"min-lag-time"},id:"min-lag-unit",toggleId:"min-lag-unit-dropdowntoggle",ariaLabel:"select unit from dropdown",onSelectOption:onDropdownChange,type:"time",name:"min-lag-unit",dropdownValue:t.minLagUnit})),i().createElement(FormGroupWithPopover,{fieldId:"segment-time",fieldLabel:"Segment time",labelHead:a("createTopic.segementTimeLabelHead"),labelBody:a("createTopic.segementTimeLabelBody"),buttonAriaLabel:"More info for segment time field"},i().createElement(SizeTimeFormGroup,{inputName:"segment-time",onChange:handleTouchSpinInputChange,onPlus:handleTouchSpinPlus,onMinus:handleTouchSpinMinus,value:t.segmentTime,plusBtnProps:{name:"segment-time"},minusBtnProps:{name:"segment-time"},id:"segment-time-unit",toggleId:"segment-time-unit-dropdowntoggle",ariaLabel:"select unit from dropdown",onSelectOption:onDropdownChange,type:"time",name:"segment-time-unit",dropdownValue:t.segmentTimeUnit})),i().createElement(FormGroupWithPopover,{fieldId:"jitter",fieldLabel:"Segment jitter time",labelHead:a("createTopic.jitterTimeLabelHead"),labelBody:a("createTopic.jitterTimeLabelBody"),buttonAriaLabel:"More info for segment jitter time field"},i().createElement(SizeTimeFormGroup,{inputName:"jitter-time",onChange:handleTouchSpinInputChange,onPlus:handleTouchSpinPlus,onMinus:handleTouchSpinMinus,value:t.jitterTime,plusBtnProps:{name:"jitter-time"},minusBtnProps:{name:"jitter-time"},id:"jitter-time-unit",toggleId:"jitter-time-unit-dropdowntoggle",ariaLabel:"select unit from dropdown",onSelectOption:onDropdownChange,type:"time",name:"jitter-time-unit",dropdownValue:t.jitterTimeUnit})),i().createElement(FormGroupWithPopover,{fieldId:"delete",fieldLabel:"File delete delay",labelHead:a("createTopic.deleteDelayLabelHead"),labelBody:a("createTopic.deleteDelayLabelBody"),buttonAriaLabel:"More info for file delete delay field"},i().createElement(SizeTimeFormGroup,{inputName:"delete-delay",onChange:handleTouchSpinInputChange,onPlus:handleTouchSpinPlus,onMinus:handleTouchSpinMinus,value:t.deleteDelay,plusBtnProps:{name:"delete-delay"},minusBtnProps:{name:"delete-delay"},id:"delete-delay-unit",toggleId:"delete-delay-unit-dropdowntoggle",ariaLabel:"select unit from dropdown",onSelectOption:onDropdownChange,type:"time",name:"delete-delay-unit",dropdownValue:t.deleteDelayUnit})),i().createElement(FormGroupWithPopover,{fieldId:"log-preallocation",fieldLabel:"Preallocate log segment files",labelHead:a("createTopic.preallocateLabelHead"),labelBody:a("createTopic.preallocateLabelBody"),buttonAriaLabel:"More info for preallocation field"},i().createElement(l.Checkbox,{isChecked:t.logPreallocation,label:"Allow preallocation of log segment files","aria-label":"log segment files pre allocation",id:"log-preallocation",onChange:function(e,t){var a=t.currentTarget.name,i=kebabToCamel(a);n(i,e)},name:"log-preallocation"}))))},TopicAdvanceConfig=function(e){var t=e.isCreate,n=e.saveTopic,a=!0===t?"Create Topic":"Save";return i().createElement(i().Fragment,null,i().createElement(l.Grid,{hasGutter:!0},i().createElement(l.GridItem,{span:2,style:{padding:"30px 30px"}},i().createElement(l.JumpLinks,{isVertical:!0,label:"JUMP TO SECTION",scrollableSelector:"#advanced-create-topic",style:{position:"absolute"}},i().createElement(l.JumpLinksItem,{key:0,href:"#core-configuration"},"Core configuration"),i().createElement(l.JumpLinksItem,{key:1,href:"#messages"},"Messages"),i().createElement(l.JumpLinksItem,{key:2,href:"#log"},"Log"),i().createElement(l.JumpLinksItem,{key:3,href:"#replication"},"Replication"),i().createElement(l.JumpLinksItem,{key:4,href:"#cleanup"},"Cleanup"),i().createElement(l.JumpLinksItem,{key:5,href:"#index"},"Index"),i().createElement(l.JumpLinksItem,{key:6,href:"#flush"},"Flush"),t?i().createElement(i().Fragment,null):i().createElement(l.JumpLinksItem,{key:7,href:"#delete"},"Delete"))),i().createElement(l.GridItem,{span:10,style:{padding:"30px 30px"}},i().createElement("div",null,i().createElement(l.PageGroup,{hasOverflowScroll:!0,id:"advanced-create-topic",className:"topics-wizard-content"},i().createElement(l.PageSection,null,i().createElement(CoreConfiguration,null),i().createElement(MessageSection,null),i().createElement(LogSection,null),i().createElement(ReplicationSection,null),i().createElement(CleanupSection,null),i().createElement(IndexSection,null),i().createElement(FlushSection,null),i().createElement(l.ActionGroup,null,i().createElement(l.Button,{onClick:n,variant:"primary"},a),i().createElement(l.Button,{variant:"link"},"Cancel")),t?i().createElement(i().Fragment,null):i().createElement(i().Fragment,null,i().createElement("br",null),i().createElement(l.Divider,null),i().createElement("br",null),i().createElement("br",null),i().createElement(l.TextContent,{className:"section-margin"},i().createElement(l.Text,{component:l.TextVariants.h2,tabIndex:-1,id:"delete"},"Delete topic (irreversible)"),i().createElement(l.Text,{component:l.TextVariants.p},"This permanently removes this topic from this instance of Strimzi. Applications will no longer have access to this topic.")),i().createElement("br",null),i().createElement(l.Button,{variant:"danger",className:"section-margin"},"Delete topic"))))))))}}}]);