"use strict";(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[9449],{96466:(e,i,t)=>{i.__esModule=!0,i.CaretDownIconConfig={name:"CaretDownIcon",height:512,width:320,svgPath:"M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z",yOffset:0,xOffset:0},i.CaretDownIcon=t(35183).createIcon(i.CaretDownIconConfig),i.default=i.CaretDownIcon},34046:(e,i,t)=>{i.MU={name:"HelpIcon",height:1024,width:1024,svgPath:"M521.3,576 C627.5,576 713.7,502 713.7,413.7 C713.7,325.4 627.6,253.6 521.3,253.6 C366,253.6 334.5,337.7 329.2,407.2 C329.2,414.3 335.2,416 343.5,416 L445,416 C450.5,416 458,415.5 460.8,406.5 C460.8,362.6 582.9,357.1 582.9,413.6 C582.9,441.9 556.2,470.9 521.3,473 C486.4,475.1 447.3,479.8 447.3,521.7 L447.3,553.8 C447.3,570.8 456.1,576 472,576 C487.9,576 521.3,576 521.3,576 M575.3,751.3 L575.3,655.3 C575.313862,651.055109 573.620137,646.982962 570.6,644 C567.638831,640.947672 563.552355,639.247987 559.3,639.29884 L463.3,639.29884 C459.055109,639.286138 454.982962,640.979863 452,644 C448.947672,646.961169 447.247987,651.047645 447.29884,655.3 L447.29884,751.3 C447.286138,755.544891 448.979863,759.617038 452,762.6 C454.961169,765.652328 459.047645,767.352013 463.3,767.30116 L559.3,767.30116 C563.544891,767.313862 567.617038,765.620137 570.6,762.6 C573.659349,759.643612 575.360354,755.553963 575.3,751.3 M512,896 C300.2,896 128,723.9 128,512 C128,300.3 300.2,128 512,128 C723.8,128 896,300.2 896,512 C896,723.8 723.7,896 512,896 M512.1,0 C229.7,0 0,229.8 0,512 C0,794.2 229.8,1024 512.1,1024 C794.4,1024 1024,794.3 1024,512 C1024,229.7 794.4,0 512.1,0",yOffset:0,xOffset:0},i.by=t(35183).createIcon(i.MU),i.ZP=i.by},17293:()=>{},27958:()=>{},51356:(e,i,t)=>{t.d(i,{A:()=>l});var n=t(85893),o=t(75418),a=t(99421),s=t(96466);const l=({id:e,toggleId:i,items:t,value:l,ariaLabel:c,onSelectOption:r,name:d,menuAppendTo:p,isLabelAndValueNotSame:m})=>{const[u,b]=(0,o.useState)(),g=(0,n.jsx)(a.DropdownToggle,Object.assign({id:i,onToggle:e=>{b(e)},toggleIndicator:s.default},{children:(()=>{if(m){const e=null==t?void 0:t.filter((e=>e.value===l))[0];return null==e?void 0:e.label}return l})()}));return(0,n.jsx)(a.Dropdown,{name:d,id:e,onSelect:e=>{if(e&&e.currentTarget.textContent){const i=e.currentTarget.textContent;r&&i&&r(i.toLowerCase(),d),b((e=>!e))}},toggle:g,isOpen:u,"aria-label":c,dropdownItems:(e=>{const i=e.map((e=>{const{key:i,value:t,label:o}=e;return(0,n.jsx)(a.DropdownItem,Object.assign({value:t},{children:o||t}),i)}));return i})(t),menuAppendTo:p})}},41272:(e,i,t)=>{t.d(i,{Q:()=>s});var n=t(85893),o=t(99421),a=t(34046);const s=({children:e,labelHead:i,fieldId:t,fieldLabel:s,labelBody:l,buttonAriaLabel:c,validated:r,helperText:d,helperTextInvalid:p,isRequired:m})=>(0,n.jsx)(o.FormGroup,Object.assign({fieldId:t,label:s,validated:r,helperText:d,helperTextInvalid:p,isRequired:m,labelIcon:(0,n.jsx)(o.Popover,Object.assign({headerContent:(0,n.jsx)("div",{children:i}),bodyContent:(0,n.jsx)("div",{children:l})},{children:(0,n.jsx)("button",Object.assign({"aria-label":c,onClick:e=>e.preventDefault(),className:"pf-c-form__group-label-help"},{children:(0,n.jsx)(a.ZP,{noVerticalAlign:!0})}))}))},{children:e}))},76153:(e,i,t)=>{t.d(i,{R:()=>s});var n=t(85893),o=t(99421),a=t(34046);const s=({fieldId:e,fieldLabel:i,btnAriaLabel:t,fieldValue:s,popoverBody:l,popoverHeader:c,showUnlimited:r})=>{let d="-";return!0===r&&void 0!==s&&parseInt(s)<0?d="Unlimited":s&&(d=s),(0,n.jsx)(o.FormGroup,Object.assign({fieldId:e,label:i,className:"kafka-ui-form-group--readonly",labelIcon:(0,n.jsx)(o.Popover,Object.assign({headerContent:(0,n.jsx)("div",{children:c}),bodyContent:(0,n.jsx)("div",{children:l})},{children:(0,n.jsx)("button",Object.assign({"aria-label":t,onClick:e=>e.preventDefault(),className:"pf-c-form__group-label-help"},{children:(0,n.jsx)(a.ZP,{noVerticalAlign:!0})}))}))},{children:(0,n.jsx)(o.TextInput,{isReadOnly:!0,type:"text",id:e,name:e,value:d})}))}},86737:(e,i,t)=>{t.d(i,{$$:()=>s,A7:()=>f,K:()=>g,MO:()=>a,PT:()=>o,Q_:()=>r,Rc:()=>n,TE:()=>j,W$:()=>m,Y:()=>l,_$:()=>b,f8:()=>d,jR:()=>x,mr:()=>_,nL:()=>c,pJ:()=>u,qh:()=>v,sN:()=>p});const n="3",o="0.5",a="2",s="604800000 milliseconds (7 days)",l="9223372036854775807 milliseconds",c="10485760 bytes (10 mebibytes)",r="4096 bytes (4 kibibytes)",d="1073741824 bytes (1 gibibyte)",p="86400000 milliseconds (1 day)",m="0 milliseconds",u="60000 milliseconds (1 minute)",b="1048588 bytes",g="CreateTime",f="0 milliseconds",_="9223372036854775807 messages",v="9223372036854775807 milliseconds",x=1,j=1e3},92249:(e,i,t)=>{t.d(i,{J:()=>s});var n=t(85893),o=t(99421),a=t(1787);const s=({onToggle:e,isOpen:i,selectOptions:t,topicData:s,setTopicData:l,name:c})=>{const r=(e,i)=>{let t;const n=(0,a.$X)(e),o="retention.ms"===n?"selectedRetentionTimeOption":"selectedRetentionSizeOption";"+"===i?t=Number(s[n])+1:"-"===i&&(t=Number(s[n])-1),l(Object.assign(Object.assign({},s),{[n]:t,[o]:a.UC.CUSTOM}))};return(0,n.jsx)("div",Object.assign({className:"kafka-ui--radio__parameters"},{children:(0,n.jsxs)(o.Flex,{children:[(0,n.jsx)(o.FlexItem,{children:(0,n.jsx)(o.NumberInput,{name:c,onMinus:()=>r(c,"-"),onPlus:()=>r(c,"+"),value:Number(s[(0,a.$X)(c)]),onChange:e=>((e,i)=>{const{value:t}=e.currentTarget,n=Math.trunc(Number(t)).toString(),o=(0,a.$X)(i);l(Object.assign(Object.assign({},s),{[o]:n}))})(e,c),plusBtnProps:{name:c},minusBtnProps:{name:c},min:0})}),(0,n.jsx)(o.FlexItem,{children:(0,n.jsx)(o.Select,Object.assign({variant:o.SelectVariant.single,"aria-label":"Select Input",onToggle:e,onSelect:(i,t)=>((i,t)=>{let n;"retention-ms"===i?n="selectedRetentionTimeOption":"retention-bytes"===i&&(n="selectedRetentionSizeOption"),void 0!==n&&l(Object.assign(Object.assign({},s),{[`${(0,a.$X)(i)}.unit`]:t,[n]:t!==a.UC.DAY?a.UC.CUSTOM:s.selectedRetentionTimeOption})),e(!1)})(c,t),selections:s[`${(0,a.$X)(c)}.unit`],isOpen:i},{children:null==t?void 0:t.map((e=>(0,n.jsx)(o.SelectOption,{value:e.value,isPlaceholder:e.isPlaceholder},e.key)))}))})]})}))}},50334:(e,i,t)=>{t.d(i,{W:()=>L});var n=t(223),o=t(85893),a=t(75418),s=t(4716),l=t(99421),c=t(60540),r=t(3654),d=(t(17293),t(5736)),p=t(7451);const m=()=>{const{t:e}=(0,s.useTranslation)(["kafkaTemporaryFixMe"]);return(0,o.jsx)(l.SidebarPanel,Object.assign({variant:"sticky"},{children:(0,o.jsxs)(l.JumpLinks,Object.assign({isVertical:!0,label:e("topic.jump_to_section"),scrollableSelector:'.pf-c-page__main[tabindex="-1"]',style:{position:"sticky"},offset:-164},{children:[(0,o.jsx)(l.JumpLinksItem,Object.assign({href:"#core-configuration"},{children:e("topic.core_configuration")}),0),(0,o.jsx)(l.JumpLinksItem,Object.assign({href:"#messages"},{children:e("topic.messages")}),1),(0,o.jsx)(l.JumpLinksItem,Object.assign({href:"#log"},{children:e("topic.log")}),2),(0,o.jsx)(l.JumpLinksItem,Object.assign({href:"#replication"},{children:e("topic.replication")}),3),(0,o.jsx)(l.JumpLinksItem,Object.assign({href:"#cleanup"},{children:e("common.cleanup")}),4),(0,o.jsx)(l.JumpLinksItem,Object.assign({href:"#index"},{children:e("topic.index")}),5),(0,o.jsx)(l.JumpLinksItem,Object.assign({href:"#flush"},{children:e("topic.flush")}),6)]}))}))};var u=t(41272),b=t(76153),g=t(92249),f=t(56637),_=t(1787),v=t(93353),x=t(86737);const j=({isCreate:e,topicData:i,setTopicData:t,fetchTopic:n,initialPartition:c,invalidText:r,setInvalidText:d,setTopicValidated:p,topicValidated:m,setWarning:j,warning:h})=>{const{t:y}=(0,s.useTranslation)(["kafkaTemporaryFixMe"]),{validateName:T}=(0,f.N)(),[O,C]=(0,a.useState)(l.ValidatedOptions.default),[I,k]=(0,a.useState)(),[L,S]=(0,a.useState)(),N=(0,a.useCallback)((e=>{const i=T(e);i?(d(i),p(l.ValidatedOptions.error)):p(l.ValidatedOptions.default)}),[d,p,T]);(0,a.useEffect)((()=>{e||n(i.name),N(i.name)}),[n,e,i.name,N]);const M=e=>{t(Object.assign(Object.assign({},i),{"retention.bytes":e===_.KP.UNLIMITED||e===_.KP.CUSTOM?i["retention.bytes"]:`${_.AV[e]}`,selectedRetentionSizeOption:e}))},B=e=>{t(Object.assign(Object.assign({},i),{"retention.ms":e===_.UC.UNLIMITED||e===_.UC.CUSTOM?i["retention.ms"]:`${_.yN[e]}`,selectedRetentionTimeOption:e}))},R=(n,o)=>{let a;const s=(0,_.FB)(n);"+"===o?a=Number(i[s])+1:"-"===o&&(a=Number(i[s])-1),t(Object.assign(Object.assign({},i),{[s]:a})),e||(e=>{let t;"+"===e?t=Number(i.numPartitions)+1:"-"===e&&(t=Number(i.numPartitions)-1),t&&(c&&t>c?(C(l.ValidatedOptions.warning),j(!0)):(C(l.ValidatedOptions.default),j(!1)))})(o)},P=(0,o.jsx)(g.J,{toggleId:"core-config-retention-dropdowntoggle",name:"retention-ms",topicData:i,setTopicData:t,onToggle:e=>{k(e)},isOpen:I,selectOptions:v.i}),U=(0,o.jsx)(g.J,{toggleId:"core-config-retention-size-dropdowntoggle",name:"retention-bytes",topicData:i,setTopicData:t,onToggle:e=>{S(e)},isOpen:L,selectOptions:v.W});return(0,o.jsxs)(l.FormSection,Object.assign({title:y("topic.core_configuration"),id:"core-configuration",titleElement:"h2"},{children:[(0,o.jsx)(l.TextContent,{children:(0,o.jsx)(l.Text,Object.assign({component:l.TextVariants.p,className:"section-info"},{children:y("topic.core_config_info")}))}),e?(0,o.jsx)(u.Q,Object.assign({labelHead:y("topic.topic_name"),fieldId:"create-topic-name",fieldLabel:y("topic.topic_name"),labelBody:y("topic.topic_name_description"),buttonAriaLabel:"More info for topic name field",helperTextInvalid:r,validated:m,isRequired:!0,helperText:y("topic.topic_name_helper_text")},{children:(0,o.jsx)(l.TextInput,{isRequired:!0,type:"text",id:"create-topic-name",name:"name",value:i.name,onChange:(e,n)=>{N(e);const{name:o}=n.currentTarget;t(Object.assign(Object.assign({},i),{[(0,_.FB)(o)]:e}))},label:y("topic.topic_name"),placeholder:y("topic.enter_name"),validated:m})})):(0,o.jsx)(b.R,{fieldId:"topic-name",btnAriaLabel:"topic detail name",fieldLabel:"Name",fieldValue:i.name,popoverBody:y("topic.topic_name_description"),popoverHeader:y("topic.topic_name")}),(0,o.jsx)(u.Q,Object.assign({fieldId:"create-topic-partitions",fieldLabel:"Partitions",labelHead:y("topic.partitions"),labelBody:y("topic.partitions_description"),buttonAriaLabel:"More info for partitions field",validated:O,helperText:h?y("topic.partitions_warning"):void 0},{children:(0,o.jsx)(l.NumberInput,{id:"create-topic-partitions",inputName:"num-partitions",onChange:e=>{const{name:n,value:o}=e.currentTarget;let a=Number(o);c&&(a>c&&(C(l.ValidatedOptions.warning),j(!0)),a<c?(a=c,C(l.ValidatedOptions.default),j(!1)):a>x.TE&&(a=x.TE)),t(Object.assign(Object.assign({},i),{[(0,_.FB)(n)]:a}))},onPlus:()=>R("num-partitions","+"),onMinus:()=>R("num-partitions","-"),value:Number(i.numPartitions),plusBtnProps:{name:"num-partitions"},minusBtnProps:{name:"num-partitions"},min:c,max:x.TE})})),(0,o.jsx)(b.R,{fieldId:"replicas",btnAriaLabel:y("topic.replicas"),fieldLabel:y("topic.replicas"),fieldValue:e?x.Rc:i.replicationFactor,popoverBody:y("topic.replicas_description"),popoverHeader:y("topic.replicas")}),(0,o.jsx)(b.R,{fieldId:"min-insync-replicas",btnAriaLabel:"topic detail min-in-sync replica",fieldLabel:"Minimum in-sync replicas",fieldValue:x.MO,popoverBody:y("topic.min_insync_replicas_description"),popoverHeader:y("topic.min_insync_replicas")}),(0,o.jsx)(u.Q,Object.assign({fieldId:"retention",fieldLabel:"Retention time",labelHead:y("topic.retention_time"),labelBody:y("topic.retention_time_description"),buttonAriaLabel:"More info for retention time field"},{children:(0,o.jsxs)(l.Stack,Object.assign({hasGutter:!0},{children:[(0,o.jsx)(l.Radio,{isChecked:i.selectedRetentionTimeOption===_.UC.DAY||i.selectedRetentionTimeOption===_.UC.WEEK||i.selectedRetentionTimeOption===_.UC.CUSTOM,name:"custom-retention-time",onChange:()=>B(_.UC.CUSTOM),label:P,className:"kafka-ui--radio-label__number-input","aria-label":"custom duration",id:"custom-retention-time",value:_.UC.CUSTOM}),(0,o.jsx)(l.Radio,{isChecked:i.selectedRetentionTimeOption===_.UC.UNLIMITED,name:"unlimited-retention-time",onChange:()=>B(_.UC.UNLIMITED),label:"Unlimited","aria-label":"Unlimited",id:"unlimited-retention-time",value:_.UC.UNLIMITED})]}))})),(0,o.jsx)(u.Q,Object.assign({fieldId:"retention-size",fieldLabel:"Retention size",labelHead:y("topic.retention_size"),labelBody:y("topic.retention_size_description"),buttonAriaLabel:"More info for retention size field"},{children:(0,o.jsxs)(l.Stack,Object.assign({hasGutter:!0},{children:[(0,o.jsx)(l.Radio,{isChecked:i.selectedRetentionSizeOption===_.KP.CUSTOM,name:"custom-retention-size",onChange:()=>M(_.KP.CUSTOM),label:U,className:"kafka-ui--radio-label__number-input","aria-label":"custom size",id:"custom-retention-size",value:_.KP.CUSTOM}),(0,o.jsx)(l.Radio,{isChecked:i.selectedRetentionSizeOption===_.KP.UNLIMITED,name:"unlimited-retention-size",onChange:()=>M(_.KP.UNLIMITED),label:"Unlimited","aria-label":"Unlimited",id:"unlimited-retention-size",value:_.KP.UNLIMITED})]}))}))]}))},h=()=>{const{t:e}=(0,s.useTranslation)(["kafkaTemporaryFixMe"]);return(0,o.jsxs)(l.FormSection,Object.assign({title:e("topic.messages"),id:"messages",titleElement:"h2"},{children:[(0,o.jsx)(l.TextContent,{children:(0,o.jsx)(l.Text,Object.assign({component:l.TextVariants.p,className:"section-info"},{children:e("topic.message_section_info")}))}),(0,o.jsx)(b.R,{fieldId:"max-message-size",btnAriaLabel:e("topic.max_message_size"),fieldLabel:e("topic.max_message_size"),fieldValue:x._$,popoverBody:e("topic.max_message_size_description"),popoverHeader:e("topic.max_message_size")}),(0,o.jsx)(b.R,{fieldId:"message-timestamp-type",btnAriaLabel:e("topic.message_timestamp_type"),fieldLabel:e("topic.message_timestamp_type"),fieldValue:x.K,popoverBody:e("topic.message_timestamp_type_description"),popoverHeader:e("topic.message_timestamp_type")}),(0,o.jsx)(b.R,{fieldId:"max-message-timestamp-diff",btnAriaLabel:e("topic.max_message_timestamp_diff"),fieldLabel:e("topic.max_message_timestamp_diff"),fieldValue:x.Y,popoverBody:e("topic.max_message_timestamp_diff_description"),popoverHeader:e("topic.max_message_timestamp_diff")}),(0,o.jsx)(b.R,{fieldId:"compression-type",btnAriaLabel:e("topic.compression_type"),fieldLabel:e("topic.compression_type"),fieldValue:"Producer",popoverBody:e("topic.compression_type_description"),popoverHeader:e("topic.compression_type")}),(0,o.jsx)(b.R,{fieldId:"message-format",btnAriaLabel:e("topic.message_format"),fieldLabel:e("topic.message_format"),fieldValue:"2.7-IV2",popoverBody:e("topic.message_format_description"),popoverHeader:e("topic.message_format")})]}))};var y=t(51356);const T=({topicData:e,setTopicData:i})=>{const{t}=(0,s.useTranslation)(["kafkaTemporaryFixMe"]),n=[{key:"compact",value:"compact",label:t("common.compact"),isDisabled:!1},{key:"delete",value:"delete",label:t("common.delete"),isDisabled:!1},{key:"compact-delete",value:"compact,delete",label:`${t("common.compact")},${t("common.delete")}`,isDisabled:!1}];return(0,o.jsxs)(l.FormSection,Object.assign({title:t("topic.log"),id:"log",titleElement:"h2"},{children:[(0,o.jsxs)(l.TextContent,{children:[(0,o.jsx)(l.Text,Object.assign({component:l.TextVariants.p},{children:t("topic.log_section_info")})),(0,o.jsx)(l.Text,Object.assign({component:l.TextVariants.small},{children:t("topic.log_section_info_note")}))]}),(0,o.jsx)(u.Q,Object.assign({fieldId:"cleanup-policy",fieldLabel:t("topic.cleanup_policy"),labelHead:t("topic.cleanup_policy"),labelBody:t("topic.cleanup_policy_description"),buttonAriaLabel:t("topic.cleanup_policy")},{children:(0,o.jsx)(y.A,{id:"log-section-policy-type-dropdown",toggleId:"log-section-policy-type-dropdowntoggle",ariaLabel:t("common.select_policy"),onSelectOption:(t,n)=>{i(Object.assign(Object.assign({},e),{[(0,_.$X)(n)]:t}))},items:n,name:"cleanup-policy",value:e["cleanup.policy"]||"",isLabelAndValueNotSame:!0})})),(0,o.jsx)(b.R,{fieldId:"delete-retention-time",btnAriaLabel:t("topic.delete_retention_time"),fieldLabel:t("topic.delete_retention_time"),fieldValue:x.sN,popoverBody:t("topic.delete_retention_time_description"),popoverHeader:t("topic.delete_retention_time")}),(0,o.jsx)(b.R,{fieldId:"min-cleanable-ratio",btnAriaLabel:t("topic.min_cleanable_ratio"),fieldLabel:t("topic.min_cleanable_ratio"),fieldValue:x.PT,popoverBody:t("topic.min_cleanable_ratio_description"),popoverHeader:t("topic.min_cleanable_ratio")}),(0,o.jsx)(b.R,{fieldId:"min-compaction-lag-time-description",btnAriaLabel:t("topic.min_compaction_lag_time"),fieldLabel:t("topic.min_compaction_lag_time"),fieldValue:x.A7,popoverBody:t("topic.min_compaction_lag_time_description"),popoverHeader:t("topic.min_compaction_lag_time")})]}))},O=()=>{const{t:e}=(0,s.useTranslation)(["kafkaTemporaryFixMe"]);return(0,o.jsxs)(l.FormSection,Object.assign({title:e("topic.replication"),id:"replication",titleElement:"h2"},{children:[(0,o.jsx)(l.TextContent,{children:(0,o.jsxs)(l.Text,Object.assign({component:l.TextVariants.p},{children:[e("topic.replication_section_info"),(0,o.jsx)(l.Text,Object.assign({component:l.TextVariants.small},{children:e("topic.replication_section_info_note")}))]}))}),(0,o.jsx)(b.R,{fieldId:"unclean-leader-election",btnAriaLabel:e("topic.unclean_leader_election"),fieldLabel:e("topic.unclean_leader_election"),fieldValue:e("common.disabled"),popoverBody:e("topic.unclean_leader_election_description"),popoverHeader:e("topic.unclean_leader_election")})]}))},C=()=>{const{t:e}=(0,s.useTranslation)(["kafkaTemporaryFixMe"]);return(0,o.jsxs)(l.FormSection,Object.assign({title:e("common.cleanup"),id:"cleanup",titleElement:"h2"},{children:[(0,o.jsx)(l.TextContent,{children:(0,o.jsx)(l.Text,Object.assign({component:l.TextVariants.p,className:"section-info"},{children:e("topic.cleanup_section_info")}))}),(0,o.jsx)(b.R,{fieldId:"log-segment-size",btnAriaLabel:e("topic.log_segment_size"),fieldLabel:e("topic.log_segment_size"),fieldValue:x.f8,popoverBody:e("topic.log_segment_size"),popoverHeader:e("topic.log_segment_size_description")}),(0,o.jsx)(b.R,{fieldId:"segement-time",btnAriaLabel:e("topic.segement_time"),fieldLabel:e("topic.segement_time"),fieldValue:x.$$,popoverBody:e("topic.segement_time_description"),popoverHeader:e("topic.segement_time")}),(0,o.jsx)(b.R,{fieldId:"segment-jitter-time",btnAriaLabel:e("topic.segment_jitter_time"),fieldLabel:e("topic.segment_jitter_time"),fieldValue:x.W$,popoverBody:e("topic.segment_jitter_time_description"),popoverHeader:e("topic.segment_jitter_time")}),(0,o.jsx)(b.R,{fieldId:"file-delete-delay",btnAriaLabel:e("topic.file_delete_delay"),fieldLabel:e("topic.file_delete_delay"),fieldValue:x.pJ,popoverBody:e("topic.file_delete_delay_description"),popoverHeader:e("topic.file_delete_delay")}),(0,o.jsx)(b.R,{fieldId:"preallocate-log-segment-files",btnAriaLabel:e("topic.preallocate_log_segment_files"),fieldLabel:e("topic.preallocate_log_segment_files"),fieldValue:e("common.disabled"),popoverBody:e("topic.preallocate_log_segment_files_description"),popoverHeader:e("topic.preallocate_log_segment_files")})]}))},I=()=>{const{t:e}=(0,s.useTranslation)(["kafkaTemporaryFixMe"]);return(0,o.jsxs)(l.FormSection,Object.assign({title:e("topic.index"),id:"index",titleElement:"h2"},{children:[(0,o.jsx)(l.TextContent,{children:(0,o.jsx)(l.Text,Object.assign({component:l.TextVariants.p,className:"section-info"},{children:e("topic.index_section_info")}))}),(0,o.jsx)(b.R,{fieldId:"index-interval-size",btnAriaLabel:e("topic.index_interval_size"),fieldLabel:e("topic.index_interval_size"),fieldValue:x.Q_,popoverBody:e("topic.index_interval_size_description"),popoverHeader:e("topic.index_interval_size")}),(0,o.jsx)(b.R,{fieldId:"segment-index-size",btnAriaLabel:e("topic.segment_index_size"),fieldLabel:e("topic.segment_index_size"),fieldValue:x.nL,popoverBody:e("topic.segment_index_size_description"),popoverHeader:e("topic.segment_index_size")})]}))},k=()=>{const{t:e}=(0,s.useTranslation)(["kafkaTemporaryFixMe"]);return(0,o.jsxs)(l.FormSection,Object.assign({title:e("topic.flush"),id:"flush",titleElement:"h2"},{children:[(0,o.jsx)(l.TextContent,{children:(0,o.jsx)(l.Text,Object.assign({component:l.TextVariants.p,className:"section-info"},{children:e("topic.flush_section_info")}))}),(0,o.jsx)(b.R,{fieldId:"flush-interval-messages",btnAriaLabel:e("topic.flush_interval_messages"),fieldLabel:e("topic.flush_interval_messages"),fieldValue:x.mr,popoverBody:e("topic.flush_interval_messages_description"),popoverHeader:e("topic.flush_interval_messages")}),(0,o.jsx)(b.R,{fieldId:"flush-interval-time",btnAriaLabel:e("topic.flush_interval_time"),fieldLabel:e("topic.flush_interval_time"),fieldValue:x.qh,popoverBody:e("topic.flush_interval_time_description"),popoverHeader:e("topic.flush_interval_time")})]}))},L=({isCreate:e,saveTopic:i,handleCancel:t,topicData:u,setTopicData:b,isLoadingSave:g})=>{const f=(0,a.useContext)(r.E),{showModal:_}=(0,p.useModal)(),{t:v}=(0,s.useTranslation)(["kafkaTemporaryFixMe"]),x=v(e?"topic.create_topic":"common.save"),[y,L]=(0,a.useState)(l.ValidatedOptions.default),[S,N]=(0,a.useState)(""),[M,B]=(0,a.useState)(!1),[R,P]=(0,a.useState)(!1),[U,A]=(0,a.useState)(Number(u.numPartitions));(0,a.useState)(u["retention.ms.unit"]||"days");const E=t=>(0,n.__awaiter)(void 0,void 0,void 0,(function*(){var n,o;try{const i=yield(0,c.BN)(t,f);i&&(e?(N(v("topic.already_exists",{name:t})),L(l.ValidatedOptions.error),B(!1)):A(null===(n=null==i?void 0:i.partitions)||void 0===n?void 0:n.length))}catch(t){let n;t&&(0,d.I)(t)&&(n=null===(o=t.response)||void 0===o?void 0:o.data.code),e&&404===n&&(L(l.ValidatedOptions.default),B(!1),i())}}));return(0,o.jsx)(l.PageSection,Object.assign({padding:{default:"noPadding"}},{children:(0,o.jsxs)(l.Sidebar,Object.assign({hasGutter:!0},{children:[(0,o.jsx)(m,{}),(0,o.jsx)(l.SidebarContent,{children:(0,o.jsx)(l.PageGroup,Object.assign({hasOverflowScroll:!0,id:"topic-detail-view"},{children:(0,o.jsxs)(l.PageSection,Object.assign({padding:{default:"noPadding"}},{children:[(0,o.jsxs)(l.Form,{children:[(0,o.jsx)(j,{isCreate:e,topicData:u,setTopicData:b,fetchTopic:E,initialPartition:U,invalidText:S,setInvalidText:N,setTopicValidated:L,topicValidated:y,setWarning:P,warning:R}),(0,o.jsx)(h,{}),(0,o.jsx)(T,{topicData:u,setTopicData:b}),(0,o.jsx)(O,{}),(0,o.jsx)(C,{}),(0,o.jsx)(I,{}),(0,o.jsx)(k,{})]}),(0,o.jsxs)(l.ActionGroup,Object.assign({className:"kafka-ui--sticky-footer"},{children:[(0,o.jsx)(l.Button,Object.assign({isLoading:M||g,onClick:()=>{e?u.name.length<1?(N(v("topic.required")),L(l.ValidatedOptions.error)):(B(!0),E(u.name)):R?_(p.ModalType.KafkaUpdatePartitions,{onSaveTopic:i}):i()},variant:"primary","data-testid":e?"topicAdvanceCreate-actionCreate":"tabProperties-actionSave",isDisabled:"default"!==y},{children:x})),(0,o.jsx)(l.Button,Object.assign({onClick:t,variant:"link","data-testid":e?"topicAdvanceCreate-actionCancel":"tabProperties-actionCancel"},{children:v("common.cancel")}))]}))]}))}))})]}))}))}},93353:(e,i,t)=>{t.d(i,{W:()=>o,i:()=>n});const n=[{key:"days",value:"days",isPlaceholder:!0},{key:"hours",value:"hours"},{key:"minutes",value:"minutes"},{key:"seconds",value:"seconds"},{key:"milliseconds",value:"milliseconds"}],o=[{key:"bytes",value:"bytes",isPlaceholder:!0},{key:"kibibytes",value:"kibibytes"},{key:"mebibytes",value:"mebibytes"},{key:"gibibytes",value:"gibibytes"},{key:"tebibytes",value:"tebibytes"}]},56637:(e,i,t)=>{t.d(i,{N:()=>o});var n=t(4716);const o=()=>{const{t:e}=(0,n.useTranslation)(["kafkaTemporaryFixMe"]);return{validateName:i=>{const t=new RegExp("^[a-zA-Z0-9._-]+$");return i.length&&!t.test(i)?e("topic.topic_name_helper_text"):i.length>249?e("topic.cannot_exceed_characters"):"."===i||".."===i?e("topic.invalid_name_with_dot"):void 0}}}},1787:(e,i,t)=>{t.d(i,{$X:()=>o,AV:()=>l,Cv:()=>m,FB:()=>n,KP:()=>s,UC:()=>a,az:()=>g,eA:()=>p,qS:()=>b,yN:()=>r});const n=function(e){return e.split("-").map(((e,i)=>{return i>0?(t=e).charAt(0).toUpperCase()+t.slice(1):e;var t})).join("")},o=e=>"string"==typeof e?e.replace(/-/g,"."):e;var a,s;!function(e){e.MILLISECOND="milliseconds",e.SECOND="seconds",e.MINUTE="minutes",e.HOUR="hours",e.DAY="day",e.WEEK="weeks",e.CUSTOM="custom",e.UNLIMITED="unlimited"}(a||(a={})),function(e){e.BYTE="bytes",e.KIBIBYTE="kibibytes",e.MEBIBYTE="mebibytes",e.GIBIBYTE="gibibytes",e.TEBIBYTE="tebibytes",e.CUSTOM="custom",e.UNLIMITED="unlimited"}(s||(s={}));const l={[s.BYTE]:1,[s.KIBIBYTE]:1024,[s.MEBIBYTE]:1048576,[s.GIBIBYTE]:1073741824,[s.TEBIBYTE]:10995116e5},c={[a.MILLISECOND]:1,[a.SECOND]:1e3,[a.MINUTE]:6e4,[a.HOUR]:36e5,[a.DAY]:864e5},r=Object.assign(Object.assign({},c),{[a.DAY]:1,[a.WEEK]:7}),d=e=>{if(e){if(e%c.day==0)return{value:e/c.day,unit:"days"};if(e%c.hours==0)return{value:e/c.hours,unit:"hours"};if(e%c.minutes==0)return{value:e/c.minutes,unit:"minutes"};if(e%c.seconds==0)return{value:e/c.seconds,unit:"seconds"}}return{value:e,unit:"milliseconds"}},p=e=>{const{unit:i,value:t}=d(e);return-1===Number(t)?"Unlimited":`${e} ms (${t} ${i})`},m=e=>{const{unit:i,value:t}=u(e);return-1===Number(t)?"Unlimited":`${e} bytes (${t} ${i})`},u=e=>{if(e){if(e%l.tebibytes==0)return{value:e/l.tebibytes,unit:"tebibytes"};if(e%l.gibibytes==0)return{value:e/l.gibibytes,unit:"gibibytes"};if(e%l.mebibytes==0)return{value:e/l.mebibytes,unit:"mebibytes"};if(e%l.kibibytes==0)return{value:e/l.kibibytes,unit:"kibibytes"}}return{value:e,unit:"bytes"}},b=e=>{var i;const t=Object.assign({},e),n={};return null===(i=null==t?void 0:t.config)||void 0===i||i.forEach((e=>{const{key:i="",value:t}=e;if("retention.ms"===i&&Number(t)>=0){const{value:e,unit:o}=d(Number(t));n[i]=`${e}`,n[`${i}.unit`]=o,n.selectedRetentionTimeOption=a.CUSTOM}else"retention.ms"===i&&-1===Number(t)&&(n.selectedRetentionTimeOption=a.UNLIMITED);if("retention.bytes"===i&&Number(t)>=0){const{value:e,unit:o}=u(Number(t));n[i]=`${e}`,n[`${i}.unit`]=o,n.selectedRetentionSizeOption=s.CUSTOM}else"retention.bytes"===i&&-1===Number(t)&&(n.selectedRetentionSizeOption=s.UNLIMITED);"cleanup.policy"===i&&(n[i]=t||"delete")})),n},g=(e,i=[])=>{const t=["retention.ms","retention.bytes","flush.messages",...i],n=["retention.ms.unit","retention.bytes.unit","selectedRetentionTimeOption","selectedRetentionSizeOption"],o=Object.assign({},e),r=[];for(const e in o){const i=e;let d;if(t.includes(i))if(o.selectedRetentionTimeOption===a.UNLIMITED&&"retention.ms"===i||o.selectedRetentionSizeOption===s.UNLIMITED&&"retention.bytes"===i)d="-1";else if("retention.ms"===i||"retention.bytes"===i){const e=o[`${i}.unit`]||"milliseconds",t=o[`${i}.unit`]||"bytes",n="retention.ms"===i?c[e]:l[t];d=Number(o[i])*n}else d=o[i];("unit"===i.split(".").pop()||n.includes(i))&&delete o[i],d&&i&&r.push({key:i,value:d.toString()})}return{name:o.name,settings:{numPartitions:Number(o.numPartitions),config:r}}}},60540:(e,i,t)=>{t.d(i,{BB:()=>l,BK:()=>m,BN:()=>p,Rh:()=>c,c4:()=>n,eR:()=>d});var n,o=t(223),a=t(98639),s=t(57294);!function(e){e.name="name",e.partitions="partitions",e.retentionMs="retention.ms",e.retentionSize="retention.bytes"}(n||(n={}));const l=(e,i,t,n,l=s.SortByDirection.asc,c)=>(0,o.__awaiter)(void 0,void 0,void 0,(function*(){const o=yield null==e?void 0:e.getToken(),s=new a.TopicsApi(new a.Configuration({accessToken:o,basePath:null==e?void 0:e.basePath}));return(yield s.getTopics(void 0,void 0,t,n,i,l,c)).data})),c=(e,i)=>(0,o.__awaiter)(void 0,void 0,void 0,(function*(){const t=yield null==i?void 0:i.getToken(),n=new a.TopicsApi(new a.Configuration({accessToken:t,basePath:null==i?void 0:i.basePath})),{data:o}=yield n.getTopic(e);return r(o)})),r=e=>{var i,t,n;const o={name:"",numPartitions:"0"};return e&&e.name&&(o.name=e.name),null===(i=e.config)||void 0===i||i.forEach((e=>{if(e.key&&e.value){const i=e.key;o[i]=e.value}})),o.numPartitions=(null===(t=null==e?void 0:e.partitions)||void 0===t?void 0:t.length.toString())||"0",o.replicationFactor=(null==e?void 0:e.partitions)&&(null===(n=null==e?void 0:e.partitions[0].replicas)||void 0===n?void 0:n.length.toString())||"0",o},d=(e,i,t)=>(0,o.__awaiter)(void 0,void 0,void 0,(function*(){const n=yield null==t?void 0:t.getToken(),o=new a.TopicsApi(new a.Configuration({accessToken:n,basePath:null==t?void 0:t.basePath}));return(yield o.updateTopic(e,i)).status})),p=(e,i)=>(0,o.__awaiter)(void 0,void 0,void 0,(function*(){const t=yield null==i?void 0:i.getToken(),n=new a.TopicsApi(new a.Configuration({accessToken:t,basePath:null==i?void 0:i.basePath})),o=yield n.getTopic(e),s=(o.data.partitions||[]).map((e=>{var i;return(null===(i=e.replicas)||void 0===i?void 0:i.length)||0})).reduce(((e=0,i=0)=>e+i)).toString(),l=o.data;return l.config=l.config||[],l.config.push({key:"replicationFactor",value:s}),o.data})),m=(e,i)=>(0,o.__awaiter)(void 0,void 0,void 0,(function*(){const t=yield null==i?void 0:i.getToken(),n=new a.TopicsApi(new a.Configuration({accessToken:t,basePath:null==i?void 0:i.basePath}));yield n.deleteTopic(e)}))},5736:(e,i,t)=>{t.d(i,{I:()=>n});const n=e=>void 0!==e}}]);
//# sourceMappingURL=9449.277ebd0f.js.map