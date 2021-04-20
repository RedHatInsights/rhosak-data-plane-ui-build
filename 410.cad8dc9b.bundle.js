(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[410],{9410:(e,t,a)=>{"use strict";a.d(t,{e:()=>g});var n=a(7522),i=a.n(n),r=a(3004),l=function(e){var t=e.isSwitchChecked,a=e.setIsSwitchChecked,n=i().createElement(r.Breadcrumb,null,i().createElement(r.BreadcrumbItem,{to:"/openshiftstreams"},"Kafka Instances"),i().createElement(r.BreadcrumbItem,{to:"/openshiftstreams"},"Kafka Instance Name"),i().createElement(r.BreadcrumbItem,{to:"#",isActive:!0},"Create topic"));return i().createElement(i().Fragment,null,i().createElement("section",{className:"pf-c-page__main-breadcrumb"},n),i().createElement(r.PageSection,{variant:r.PageSectionVariants.light},i().createElement(r.Title,{headingLevel:"h1",size:"2xl"},"Create topic"),i().createElement("br",null),i().createElement(r.Switch,{id:"simple-switch",label:"Show all available options",labelOff:"Show all available options",isChecked:t,onChange:a,className:"create-topic-wizard"})))},o=(a(3174),a(3006)),c=function(e){var t=e.topicNameInput,a=e.setTopicNameInput,n=(0,o.useTranslation)().t;return i().createElement(r.Stack,{hasGutter:!0,className:"kafka-ui--wizard-main-body__stack"},i().createElement(r.TextContent,null,i().createElement(r.Text,{component:r.TextVariants.h2},"Topic name"),i().createElement(r.Text,{component:r.TextVariants.p},"Unique name used to recognize your topic"),i().createElement(r.Text,{component:r.TextVariants.small},"The topic name is also used by your producers and consumers as part of the connection information, so make it something easy to recognize.")),i().createElement(r.Form,{onSubmit:function(e){return e.preventDefault()}},i().createElement(r.FormGroup,{label:"Topic name",fieldId:"step-topic-name-form",helperText:"Must be letters (Aa-Zz), numbers, underscores( _ ), or hyphens ( - ).",isRequired:!0},i().createElement(r.TextInput,{isRequired:!0,type:"text",id:"step-topic-name-input",name:"step-topic-name","aria-describedby":"step-topic-name-helper",value:t,onChange:function(e){a(e)},placeholder:n("createTopic.enterName")}))))},s=function(e){var t=e.partitionTouchspinValue,a=e.setPartitionTouchspinValue;return i().createElement(r.Stack,{hasGutter:!0,className:"kafka-ui--wizard-main-body__stack"},i().createElement(r.TextContent,null,i().createElement(r.Text,{component:r.TextVariants.h2},"Partitions"),i().createElement(r.Text,{component:r.TextVariants.p},"An ordered list of messages"),i().createElement(r.Text,{component:r.TextVariants.small},"One or more partitions make up a topic. Partitions are distributed across the brokers to increase the salability of your topic. You can also use them to distribute messages across the members of the consumer group.")),i().createElement(r.Form,null,i().createElement(r.FormGroup,{label:"Partitions",fieldId:"step-topic-name-form",helperText:"One partition is sufficient for getting started, but production systems often have more.",isRequired:!0},i().createElement(r.NumberInput,{onPlus:function(){a(t+1)},onMinus:function(){a(t-1)},value:t,inputName:"input",onChange:function(e){a(Number(e.target.value))},widthChars:20}))))},m=function(e){var t,a,l=e.setMsgRetentionValue,o=e.currentPeriod,c=e.currentSize,s=e.setCurrentPeriod,m=e.setCurrentSize,u=e.setRetentionSize;!function(e){e[e.MILLISECOND=1]="MILLISECOND",e[e.SECOND=1e3]="SECOND",e[e.MINUTE=6e4]="MINUTE",e[e.HOUR=36e5]="HOUR",e[e.DAY=864e5]="DAY",e[e.WEEK=6048e5]="WEEK",e.CUSTOM="custom",e[e.UNLIMITED=-1]="UNLIMITED"}(t||(t={})),function(e){e[e.BYTE=1]="BYTE",e[e.KILOBYTE=1e3]="KILOBYTE",e[e.MEGABYTE=1e6]="MEGABYTE",e[e.GIGABYTE=1e9]="GIGABYTE",e[e.TERABYTE=1e12]="TERABYTE",e.CUSTOM="custom",e[e.UNLIMITED=-1]="UNLIMITED"}(a||(a={}));var p=(0,n.useState)(7),d=p[0],E=p[1],T=(0,n.useState)(-1),h=T[0],S=T[1],b=(0,n.useState)(!1),f=b[0],k=b[1],g=(0,n.useState)(!1),I=g[0],y=g[1],C=(0,n.useState)(!1),v=C[0],x=C[1],N=(0,n.useState)(!1),M=N[0],U=N[1],D=(0,n.useState)(t.DAY),L=D[0],O=D[1],w=(0,n.useState)(a.BYTE),A=w[0],R=w[1];(0,n.useEffect)((function(){o===t.DAY?l(t.DAY):o===t.WEEK?l(t.WEEK):o===t.UNLIMITED?l(t.UNLIMITED):o===t.CUSTOM&&l(L*d),c===a.UNLIMITED?u(a.UNLIMITED):c===a.CUSTOM&&u(A*h)}),[o,c,d,h,L,A]);var z=function(e,n){var i=n.target.name;"radioDay"===i?s(t.DAY):"radioWeek"===i?s(t.WEEK):"radioUnlimitedTime"===i?s(t.UNLIMITED):"radioCustomTime"===i&&s(t.CUSTOM),"radioCustomSize"===i?m(a.CUSTOM):"radioUnlimitedSize"===i&&m(a.UNLIMITED)};return i().createElement(i().Fragment,null,i().createElement(r.Stack,{hasGutter:!0,className:"kafka-ui--wizard-main-body__stack"},i().createElement(r.TextContent,null,i().createElement(r.Text,{component:r.TextVariants.h2},"Message retention"),i().createElement(r.Text,{component:r.TextVariants.p},"How long messages are retained and the maximum total size of all log segments in a partition before they are deleted to free up space"),i().createElement(r.Text,{component:r.TextVariants.small},"Messages that aren't read by a consumer within this time will be missed. By default, a limit is only applied to retention time.")),i().createElement(r.Form,{onSubmit:function(e){return e.preventDefault()}},i().createElement(r.FormGroup,{fieldId:"form-group-retention-time-in-wizard",label:"Retention time"},i().createElement(r.Stack,{hasGutter:!0},i().createElement(r.Radio,{isChecked:o===t.DAY,name:"radioDay",onChange:z,label:"A day","aria-label":"A day",id:"radio-controlled-1",value:"day"}),i().createElement(r.Radio,{isChecked:o===t.WEEK,name:"radioWeek",onChange:z,label:"A week","aria-label":"A week",id:"radio-controlled-2",value:"week"}),i().createElement(r.Radio,{isChecked:o===t.CUSTOM,name:"radioCustomTime",onChange:z,label:"Custom duration","aria-label":"custom input",id:"radio-controlled-4",value:"custom"}),i().createElement("div",{className:"kafka-ui--radio__parameters"},i().createElement(r.Flex,null,i().createElement(r.FlexItem,null,i().createElement(r.NumberInput,{onMinus:function(){E(d-1)},onPlus:function(){E(d+1)},value:d,onChange:function(e){E(Number(e.target.value))}})),i().createElement(r.FlexItem,null,i().createElement(r.Select,{variant:r.SelectVariant.single,"aria-label":"Select Input",onToggle:function(e){k(e)},onSelect:function(e,a){"days"===a?O(t.DAY):"unlimited"===a?O(t.UNLIMITED):"milliseconds"===a?O(t.MILLISECOND):"seconds"===a?O(t.SECOND):"minutes"===a?O(t.MINUTE):"hours"===a&&O(t.HOUR),x(a),k(!1)},selections:v,isOpen:f},i().createElement(r.SelectOption,{key:0,value:"days",isPlaceholder:!0}),i().createElement(r.SelectOption,{key:1,value:"seconds"}),i().createElement(r.SelectOption,{key:2,value:"minutes"}),i().createElement(r.SelectOption,{key:3,value:"hours"}),i().createElement(r.SelectOption,{key:4,value:"milliseconds"}))))),i().createElement(r.Radio,{isChecked:o===t.UNLIMITED,name:"radioUnlimitedTime",onChange:z,label:"Unlimited","aria-label":"Unlimited",id:"radio-controlled-3",value:"unlimited"}))),i().createElement(r.FormGroup,{fieldId:"form-group-retention-size-in-wizard",label:"Retention size"},i().createElement(r.Stack,{hasGutter:!0},i().createElement(r.Radio,{isChecked:c===a.UNLIMITED,name:"radioUnlimitedSize",onChange:z,label:"Unlimited","aria-label":"Unlimited",id:"radio-controlled-6",value:"unlimited"}),i().createElement(r.Radio,{isChecked:c===a.CUSTOM,name:"radioCustomSize",onChange:z,label:"Custom size","aria-label":"custom input",id:"radio-controlled-5",value:"custom"}),i().createElement("div",{className:"kafka-ui--radio__parameters"},i().createElement(r.Flex,null,i().createElement(r.FlexItem,null,i().createElement(r.NumberInput,{onMinus:function(){S(h-1)},onPlus:function(){S(h+1)},value:h,onChange:function(e){S(Number(e.target.value))}})),i().createElement(r.FlexItem,null,i().createElement(r.Select,{variant:r.SelectVariant.single,"aria-label":"Select Input",onToggle:function(e){y(e)},onSelect:function(e,t){"unlimited"===t?R(a.UNLIMITED):"bytes"===t?R(a.BYTE):"kilobytes"===t?R(a.KILOBYTE):"megabytes"===t?R(a.MEGABYTE):"gigabytes"===t?R(a.GIGABYTE):"terabytes"===t&&R(a.TERABYTE),U(t),y(!1)},selections:M,isOpen:I},i().createElement(r.SelectOption,{key:5,value:"bytes",isPlaceholder:!0}),i().createElement(r.SelectOption,{key:6,value:"kilobytes"}),i().createElement(r.SelectOption,{key:7,value:"megabytes"}),i().createElement(r.SelectOption,{key:8,value:"gigabytes"}),i().createElement(r.SelectOption,{key:9,value:"terabytes"}))))))))))},u=a(7253),p=function(e){var t=e.replicationFactor,a=e.minInSyncReplica,n=(0,o.useTranslation)().t;return i().createElement(r.Stack,{hasGutter:!0,className:"kafka-ui--wizard-main-body__stack"},i().createElement(r.TextContent,null,i().createElement(r.Text,{component:r.TextVariants.h2},"Replicas"),i().createElement(r.Text,{component:r.TextVariants.p},"How many copies of a topic will be made for high availability."),i().createElement(r.Text,{component:r.TextVariants.small},"The partitions of each topic can be replicated across a configurable number of brokers.")),i().createElement(r.Alert,{variant:"info",isInline:!0,title:"Streams for Apache Kafka only supports 3 replicas and a minimum in-sync replica factor of 2."}),i().createElement(u.R,{btnAriaLabel:"topic detail replicas",fieldLabel:"Replicas",fieldValue:t.toString(),popoverBody:n("createTopic.replicasLabelBody"),popoverHeader:n("createTopic.replicasLabelHead")}),i().createElement(u.R,{btnAriaLabel:"topic detail min-in-sync replica",fieldLabel:"Minimum in-sync replicas",fieldValue:a.toString(),popoverBody:n("createTopic.inSyncReplicasLabelBody"),popoverHeader:n("createTopic.inSyncReplicasLabelHead")}))},d=a(2111),E=a(7887),T=a(1249),h=a(9115),S=a(7830),b=a(3526),f=a(5977),k=function(e){var t=e.setIsCreateTopic,a=e.isSwitchChecked,l=(0,n.useContext)(h.E),o=(0,f.k6)(),u=(0,n.useContext)(b.w).addAlert,k=(0,n.useState)(1),g=k[0],I=k[1],y=(0,n.useState)(1),C=y[0],v=y[1],x=(0,n.useState)(""),N=x[0],M=x[1],U=(0,n.useState)(1),D=U[0],L=U[1],O=(0,n.useState)(3)[0],w=(0,n.useState)(2)[0],A=(0,n.useState)({name:"",numPartitions:"1","retention.ms":"7","retention.ms.unit":"days","retention.bytes":"-1","retention.bytes.unit":"bytes","cleanup.policy":"delete"}),R=A[0],z=A[1],V=i().useState(864e5),B=V[0],P=V[1],Y=i().useState(-1),F=Y[0],G=Y[1],_=function(){t&&t(!1)},K=function(){var e=a?(0,T.hM)((0,T.L3)(R)):{name:N,settings:{numPartitions:D,config:[{key:"retention.ms",value:g.toString()},{key:"retention.bytes",value:C.toString()}]}};new E.M2(new S.VK({basePath:null==l?void 0:l.basePath,accessToken:null==l?void 0:l.getToken})).createTopic(e).then((function(e){200===e.status&&u("The topic was successfully created in the Kafka instance",r.AlertVariant.success),_()})).catch((function(e){u(e.response.data.error_message,r.AlertVariant.danger),_()}))},W=[{name:"Topic name",enableNext:""!==N.trim(),component:i().createElement(c,{topicNameInput:N,setTopicNameInput:M})},{name:"Partitions",canJumpTo:""!==N.trim(),component:i().createElement(s,{partitionTouchspinValue:D,setPartitionTouchspinValue:L})},{name:"Message retention",canJumpTo:""!==N.trim(),component:i().createElement(m,{setMsgRetentionValue:I,currentPeriod:B,currentSize:F,setCurrentPeriod:P,setCurrentSize:G,setRetentionSize:v})},{name:"Replicas",canJumpTo:""!==N.trim(),component:i().createElement(p,{replicationFactor:O,minInSyncReplica:w}),nextButtonText:"Finish"}],H="Create topics wizard";return i().createElement(i().Fragment,null,a?i().createElement(i().Fragment,null,i().createElement(r.Divider,{className:"kafka-ui--divider--FlexShrink"}),i().createElement(r.PageSection,{variant:r.PageSectionVariants.light},i().createElement(d.W,{isCreate:!0,saveTopic:K,handleCancel:function(){o.push("/topics")},topicData:R,setTopicData:z}))):i().createElement(r.PageSection,{variant:r.PageSectionVariants.light,type:r.PageSectionTypes.wizard,isFilled:!0},i().createElement(r.Wizard,{navAriaLabel:H+" steps",mainAriaLabel:H+" content",steps:W,onClose:_,onSave:K})))},g=function(e){var t=e.setIsCreateTopic,a=(0,n.useState)(!1),r=a[0],o=a[1];return i().createElement(i().Fragment,null,i().createElement(l,{isSwitchChecked:r,setIsSwitchChecked:o}),i().createElement(k,{isSwitchChecked:r,setIsCreateTopic:t}))}}}]);
//# sourceMappingURL=410.cad8dc9b.bundle.js.map