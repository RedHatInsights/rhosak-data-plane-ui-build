"use strict";(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[334],{96466:(e,t,i)=>{t.__esModule=!0,t.CaretDownIconConfig={name:"CaretDownIcon",height:512,width:320,svgPath:"M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z",yOffset:0,xOffset:0},t.CaretDownIcon=i(35183).createIcon(t.CaretDownIconConfig),t.default=t.CaretDownIcon},17293:()=>{},51356:(e,t,i)=>{i.d(t,{A:()=>r});var n=i(75418),a=i.n(n),o=i(99421),l=i(96466),r=function(e){var t=e.id,i=e.toggleId,r=e.items,c=e.value,p=e.ariaLabel,s=e.onSelectOption,m=e.name,d=e.menuAppendTo,u=e.isLabelAndValueNotSame,f=(0,n.useState)(),_=f[0],b=f[1],v=a().createElement(o.DropdownToggle,{id:i,onToggle:function(e){b(e)},toggleIndicator:l.default},function(){if(u){var e=null==r?void 0:r.filter((function(e){return e.value===c}))[0];return null==e?void 0:e.label}return c}());return a().createElement(o.Dropdown,{name:m,id:t,onSelect:function(e){var t=e.currentTarget.textContent;s&&t&&(e.target.name=m,s(t.toLowerCase(),e)),b((function(e){return!e}))},toggle:v,isOpen:_,"aria-label":p,dropdownItems:function(e){var t=e.map((function(e){var t=e.key,i=e.value,n=e.label;return a().createElement(o.DropdownItem,{key:t,value:i},n||i)}));return t}(r),menuAppendTo:d})}},41272:(e,t,i)=>{i.d(t,{Q:()=>r});var n=i(99421),a=i(34046),o=i(75418),l=i.n(o),r=function(e){var t=e.children,i=e.labelHead,o=e.fieldId,r=e.fieldLabel,c=e.labelBody,p=e.buttonAriaLabel,s=e.validated,m=e.helperText,d=e.helperTextInvalid,u=e.isRequired;return l().createElement(n.FormGroup,{fieldId:o,label:r,validated:s,helperText:m,helperTextInvalid:d,isRequired:u,labelIcon:l().createElement(n.Popover,{headerContent:l().createElement("div",null,i),bodyContent:l().createElement("div",null,c)},l().createElement("button",{"aria-label":p,onClick:function(e){return e.preventDefault()},className:"pf-c-form__group-label-help"},l().createElement(a.ZP,{noVerticalAlign:!0})))},t)}},92249:(e,t,i)=>{i.d(t,{J:()=>c});var n=i(75418),a=i.n(n),o=i(99421),l=i(1787),r=function(){return r=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++)for(var a in t=arguments[i])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},r.apply(this,arguments)},c=function(e){var t=e.onToggle,i=e.isOpen,n=e.selectOptions,c=e.topicData,p=e.setTopicData,s=e.name,m=function(e,t){var i,n,a=(0,l.$X)(e),o="retention.ms"===a?"selectedRetentionTimeOption":"selectedRetentionSizeOption";"+"===t?n=Number(c[a])+1:"-"===t&&(n=Number(c[a])-1),p(r(r({},c),((i={})[a]=n,i[o]=l.UC.CUSTOM,i)))};return a().createElement("div",{className:"kafka-ui--radio__parameters"},a().createElement(o.Flex,null,a().createElement(o.FlexItem,null,a().createElement(o.NumberInput,{name:s,onMinus:function(){return m(s,"-")},onPlus:function(){return m(s,"+")},value:Number(c[(0,l.$X)(s)]),onChange:function(e){return function(e,t){var i,n=e.currentTarget.value,a=Math.trunc(Number(n)).toString(),o=(0,l.$X)(t);p(r(r({},c),((i={})[o]=a,i)))}(e,s)},plusBtnProps:{name:s},minusBtnProps:{name:s},min:0})),a().createElement(o.FlexItem,null,a().createElement(o.Select,{variant:o.SelectVariant.single,"aria-label":"Select Input",onToggle:t,onSelect:function(e,i){return function(e,i){var n,a;"retention-ms"===e?a="selectedRetentionTimeOption":"retention-bytes"===e&&(a="selectedRetentionSizeOption"),p(r(r({},c),((n={})["".concat((0,l.$X)(e),".unit")]=i,n[a]=i!==l.UC.DAY?l.UC.CUSTOM:c.selectedRetentionTimeOption,n))),t(!1)}(s,i)},selections:c["".concat((0,l.$X)(s),".unit")],isOpen:i},null==n?void 0:n.map((function(e){return a().createElement(o.SelectOption,{key:e.key,value:e.value,isPlaceholder:e.isPlaceholder})}))))))}},50334:(e,t,i)=>{i.d(t,{W:()=>R});var n=i(75418),a=i.n(n),o=i(8898),l=i(99421),r=i(60540),c=i(3654),p=(i(17293),i(5736)),s=i(7451),m=function(){var e=(0,o.useTranslation)(["kafkaTemporaryFixMe"]).t;return a().createElement(l.SidebarPanel,{variant:"sticky"},a().createElement(l.JumpLinks,{isVertical:!0,label:e("topic.jump_to_section"),scrollableSelector:'.pf-c-page__main[tabindex="-1"]',style:{position:"sticky"},offset:-164},a().createElement(l.JumpLinksItem,{key:0,href:"#core-configuration"},e("topic.core_configuration")),a().createElement(l.JumpLinksItem,{key:1,href:"#messages"},e("topic.messages")),a().createElement(l.JumpLinksItem,{key:2,href:"#log"},e("topic.log")),a().createElement(l.JumpLinksItem,{key:3,href:"#replication"},e("topic.replication")),a().createElement(l.JumpLinksItem,{key:4,href:"#cleanup"},e("common.cleanup")),a().createElement(l.JumpLinksItem,{key:5,href:"#index"},e("topic.index")),a().createElement(l.JumpLinksItem,{key:6,href:"#flush"},e("topic.flush"))))},d=i(41272),u=i(76153),f=i(92249),_=i(56637),b=i(1787),v=i(93353),g=i(86737),y=function(){return y=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++)for(var a in t=arguments[i])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},y.apply(this,arguments)},E=function(e){var t=e.isCreate,i=e.topicData,r=e.setTopicData,c=e.fetchTopic,p=e.initialPartition,s=e.invalidText,m=e.setInvalidText,E=e.setTopicValidated,T=e.topicValidated,h=e.setWarning,x=e.warning,k=(0,o.useTranslation)(["kafkaTemporaryFixMe"]).t,L=(0,_.N)().validateName,I=(0,n.useState)(l.ValidatedOptions.default),C=I[0],O=I[1],S=(0,n.useState)(),V=S[0],R=S[1],P=(0,n.useState)(),A=P[0],M=P[1];(0,n.useEffect)((function(){t||c(i.name),N(i.name)}),[]);var N=function(e){var t=L(e);t?(m(t),E(l.ValidatedOptions.error)):E(l.ValidatedOptions.default)},w=function(e){r(y(y({},i),{"retention.bytes":e===b.KP.UNLIMITED||e===b.KP.CUSTOM?i["retention.bytes"]:b.AV[e],selectedRetentionSizeOption:e}))},D=function(e){r(y(y({},i),{"retention.ms":e===b.UC.UNLIMITED||e===b.UC.CUSTOM?i["retention.ms"]:b.yN[e],selectedRetentionTimeOption:e}))},z=function(e,n){var a,o,c=(0,b.FB)(e);"+"===n?o=Number(i[c])+1:"-"===n&&(o=Number(i[c])-1),r(y(y({},i),((a={})[c]=o,a))),t||function(e){var t;"+"===e?t=Number(i.numPartitions)+1:"-"===e&&(t=Number(i.numPartitions)-1),p&&t>p?(O(l.ValidatedOptions.warning),h(!0)):(O(l.ValidatedOptions.default),h(!1))}(n)},B=a().createElement(f.J,{toggleId:"core-config-retention-dropdowntoggle",name:"retention-ms",topicData:i,setTopicData:r,onToggle:function(e){R(e)},isOpen:V,selectOptions:v.i}),U=a().createElement(f.J,{toggleId:"core-config-retention-size-dropdowntoggle",name:"retention-bytes",topicData:i,setTopicData:r,onToggle:function(e){M(e)},isOpen:A,selectOptions:v.W});return a().createElement(l.FormSection,{title:k("topic.core_configuration"),id:"core-configuration",titleElement:"h2"},a().createElement(l.TextContent,null,a().createElement(l.Text,{component:l.TextVariants.p,className:"section-info"},k("topic.core_config_info"))),t?a().createElement(d.Q,{labelHead:k("topic.topic_name"),fieldId:"create-topic-name",fieldLabel:k("topic.topic_name"),labelBody:k("topic.topic_name_description"),buttonAriaLabel:"More info for topic name field",helperTextInvalid:s,validated:T,isRequired:!0,helperText:k("topic.topic_name_helper_text")},a().createElement(l.TextInput,{isRequired:!0,type:"text",id:"create-topic-name",name:"name",value:i.name,onChange:function(e,t){var n;N(e);var a=t.currentTarget.name;r(y(y({},i),((n={})[(0,b.FB)(a)]=e,n)))},label:k("topic.topic_name"),placeholder:k("topic.enter_name"),validated:T})):a().createElement(u.R,{fieldId:"topic-name",btnAriaLabel:"topic detail name",fieldLabel:"Name",fieldValue:i.name,popoverBody:k("topic.topic_name_description"),popoverHeader:k("topic.topic_name")}),a().createElement(d.Q,{fieldId:"create-topic-partitions",fieldLabel:"Partitions",labelHead:k("topic.partitions"),labelBody:k("topic.partitions_description"),buttonAriaLabel:"More info for partitions field",validated:C,helperText:x?k("topic.partitions_warning"):void 0},a().createElement(l.NumberInput,{id:"create-topic-partitions",inputName:"num-partitions",onChange:function(e){var t,n=e.currentTarget,a=n.name,o=n.value,c=Number(o);p&&(c>p&&(O(l.ValidatedOptions.warning),h(!0)),c<p?(c=p,O(l.ValidatedOptions.default),h(!1)):c>g.TE&&(c=g.TE)),r(y(y({},i),((t={})[(0,b.FB)(a)]=c,t)))},onPlus:function(){return z("num-partitions","+")},onMinus:function(){return z("num-partitions","-")},value:Number(i.numPartitions),plusBtnProps:{name:"num-partitions"},minusBtnProps:{name:"num-partitions"},min:p,max:g.TE})),a().createElement(u.R,{fieldId:"replicas",btnAriaLabel:k("topic.replicas"),fieldLabel:k("topic.replicas"),fieldValue:t?g.Rc:i.replicationFactor,popoverBody:k("topic.replicas_description"),popoverHeader:k("topic.replicas")}),a().createElement(u.R,{fieldId:"min-insync-replicas",btnAriaLabel:"topic detail min-in-sync replica",fieldLabel:"Minimum in-sync replicas",fieldValue:g.MO,popoverBody:k("topic.min_insync_replicas_description"),popoverHeader:k("topic.min_insync_replicas")}),a().createElement(d.Q,{fieldId:"retention",fieldLabel:"Retention time",labelHead:k("topic.retention_time"),labelBody:k("topic.retention_time_description"),buttonAriaLabel:"More info for retention time field"},a().createElement(l.Stack,{hasGutter:!0},a().createElement(l.Radio,{isChecked:i.selectedRetentionTimeOption===b.UC.DAY||i.selectedRetentionTimeOption===b.UC.WEEK||i.selectedRetentionTimeOption===b.UC.CUSTOM,name:"custom-retention-time",onChange:function(){return D(b.UC.CUSTOM)},label:B,className:"kafka-ui--radio-label__number-input","aria-label":"custom duration",id:"custom-retention-time",value:b.UC.CUSTOM}),a().createElement(l.Radio,{isChecked:i.selectedRetentionTimeOption===b.UC.UNLIMITED,name:"unlimited-retention-time",onChange:function(){return D(b.UC.UNLIMITED)},label:"Unlimited","aria-label":"Unlimited",id:"unlimited-retention-time",value:b.UC.UNLIMITED}))),a().createElement(d.Q,{fieldId:"retention-size",fieldLabel:"Retention size",labelHead:k("topic.retention_size"),labelBody:k("topic.retention_size_description"),buttonAriaLabel:"More info for retention size field"},a().createElement(l.Stack,{hasGutter:!0},a().createElement(l.Radio,{isChecked:i.selectedRetentionSizeOption===b.KP.CUSTOM,name:"custom-retention-size",onChange:function(){return w(b.KP.CUSTOM)},label:U,className:"kafka-ui--radio-label__number-input","aria-label":"custom size",id:"custom-retention-size",value:b.KP.CUSTOM}),a().createElement(l.Radio,{isChecked:i.selectedRetentionSizeOption===b.KP.UNLIMITED,name:"unlimited-retention-size",onChange:function(){return w(b.KP.UNLIMITED)},label:"Unlimited","aria-label":"Unlimited",id:"unlimited-retention-size",value:b.KP.UNLIMITED}))))},T=function(){var e=(0,o.useTranslation)(["kafkaTemporaryFixMe"]).t;return a().createElement(l.FormSection,{title:e("topic.messages"),id:"messages",titleElement:"h2"},a().createElement(l.TextContent,null,a().createElement(l.Text,{component:l.TextVariants.p,className:"section-info"},e("topic.message_section_info"))),a().createElement(u.R,{fieldId:"max-message-size",btnAriaLabel:e("topic.max_message_size"),fieldLabel:e("topic.max_message_size"),fieldValue:g._$,popoverBody:e("topic.max_message_size_description"),popoverHeader:e("topic.max_message_size")}),a().createElement(u.R,{fieldId:"message-timestamp-type",btnAriaLabel:e("topic.message_timestamp_type"),fieldLabel:e("topic.message_timestamp_type"),fieldValue:g.K,popoverBody:e("topic.message_timestamp_type_description"),popoverHeader:e("topic.message_timestamp_type")}),a().createElement(u.R,{fieldId:"max-message-timestamp-diff",btnAriaLabel:e("topic.max_message_timestamp_diff"),fieldLabel:e("topic.max_message_timestamp_diff"),fieldValue:g.Y,popoverBody:e("topic.max_message_timestamp_diff_description"),popoverHeader:e("topic.max_message_timestamp_diff")}),a().createElement(u.R,{fieldId:"compression-type",btnAriaLabel:e("topic.compression_type"),fieldLabel:e("topic.compression_type"),fieldValue:"Producer",popoverBody:e("topic.compression_type_description"),popoverHeader:e("topic.compression_type")}),a().createElement(u.R,{fieldId:"message-format",btnAriaLabel:e("topic.message_format"),fieldLabel:e("topic.message_format"),fieldValue:"2.7-IV2",popoverBody:e("topic.message_format_description"),popoverHeader:e("topic.message_format")}))},h=i(51356),x=function(){return x=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++)for(var a in t=arguments[i])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},x.apply(this,arguments)},k=function(e){var t=e.topicData,i=e.setTopicData,n=(0,o.useTranslation)(["kafkaTemporaryFixMe"]).t,r=[{key:"compact",value:"compact",label:n("common.compact"),isDisabled:!1},{key:"delete",value:"delete",label:n("common.delete"),isDisabled:!1},{key:"compact-delete",value:"compact,delete",label:"".concat(n("common.compact"),",").concat(n("common.delete")),isDisabled:!1}];return a().createElement(l.FormSection,{title:n("topic.log"),id:"log",titleElement:"h2"},a().createElement(l.TextContent,null,a().createElement(l.Text,{component:l.TextVariants.p},n("topic.log_section_info")),a().createElement(l.Text,{component:l.TextVariants.small},n("topic.log_section_info_note"))),a().createElement(d.Q,{fieldId:"cleanup-policy",fieldLabel:n("topic.cleanup_policy"),labelHead:n("topic.cleanup_policy"),labelBody:n("topic.cleanup_policy_description"),buttonAriaLabel:n("topic.cleanup_policy")},a().createElement(h.A,{id:"log-section-policy-type-dropdown",toggleId:"log-section-policy-type-dropdowntoggle",ariaLabel:n("common.select_policy"),onSelectOption:function(e,n){var a,o=n.target.name;i(x(x({},t),((a={})[(0,b.$X)(o)]=e,a)))},items:r,name:"cleanup-policy",value:t["cleanup.policy"]||"",isLabelAndValueNotSame:!0})),a().createElement(u.R,{fieldId:"delete-retention-time",btnAriaLabel:n("topic.delete_retention_time"),fieldLabel:n("topic.delete_retention_time"),fieldValue:g.sN,popoverBody:n("topic.delete_retention_time_description"),popoverHeader:n("topic.delete_retention_time")}),a().createElement(u.R,{fieldId:"min-cleanable-ratio",btnAriaLabel:n("topic.min_cleanable_ratio"),fieldLabel:n("topic.min_cleanable_ratio"),fieldValue:g.PT,popoverBody:n("topic.min_cleanable_ratio_description"),popoverHeader:n("topic.min_cleanable_ratio")}),a().createElement(u.R,{fieldId:"min-compaction-lag-time-description",btnAriaLabel:n("topic.min_compaction_lag_time"),fieldLabel:n("topic.min_compaction_lag_time"),fieldValue:g.A7,popoverBody:n("topic.min_compaction_lag_time_description"),popoverHeader:n("topic.min_compaction_lag_time")}))},L=function(){var e=(0,o.useTranslation)(["kafkaTemporaryFixMe"]).t;return a().createElement(l.FormSection,{title:e("topic.replication"),id:"replication",titleElement:"h2"},a().createElement(l.TextContent,null,a().createElement(l.Text,{component:l.TextVariants.p},e("topic.replication_section_info"),a().createElement(l.Text,{component:l.TextVariants.small},e("topic.replication_section_info_note")))),a().createElement(u.R,{fieldId:"unclean-leader-election",btnAriaLabel:e("topic.unclean_leader_election"),fieldLabel:e("topic.unclean_leader_election"),fieldValue:e("common.disabled"),popoverBody:e("topic.unclean_leader_election_description"),popoverHeader:e("topic.unclean_leader_election")}))},I=function(){var e=(0,o.useTranslation)(["kafkaTemporaryFixMe"]).t;return a().createElement(l.FormSection,{title:e("common.cleanup"),id:"cleanup",titleElement:"h2"},a().createElement(l.TextContent,null,a().createElement(l.Text,{component:l.TextVariants.p,className:"section-info"},e("topic.cleanup_section_info"))),a().createElement(u.R,{fieldId:"log-segment-size",btnAriaLabel:e("topic.log_segment_size"),fieldLabel:e("topic.log_segment_size"),fieldValue:g.f8,popoverBody:e("topic.log_segment_size"),popoverHeader:e("topic.log_segment_size_description")}),a().createElement(u.R,{fieldId:"segement-time",btnAriaLabel:e("topic.segement_time"),fieldLabel:e("topic.segement_time"),fieldValue:g.$$,popoverBody:e("topic.segement_time_description"),popoverHeader:e("topic.segement_time")}),a().createElement(u.R,{fieldId:"segment-jitter-time",btnAriaLabel:e("topic.segment_jitter_time"),fieldLabel:e("topic.segment_jitter_time"),fieldValue:g.W$,popoverBody:e("topic.segment_jitter_time_description"),popoverHeader:e("topic.segment_jitter_time")}),a().createElement(u.R,{fieldId:"file-delete-delay",btnAriaLabel:e("topic.file_delete_delay"),fieldLabel:e("topic.file_delete_delay"),fieldValue:g.pJ,popoverBody:e("topic.file_delete_delay_description"),popoverHeader:e("topic.file_delete_delay")}),a().createElement(u.R,{fieldId:"preallocate-log-segment-files",btnAriaLabel:e("topic.preallocate_log_segment_files"),fieldLabel:e("topic.preallocate_log_segment_files"),fieldValue:e("common.disabled"),popoverBody:e("topic.preallocate_log_segment_files_description"),popoverHeader:e("topic.preallocate_log_segment_files")}))},C=function(){var e=(0,o.useTranslation)(["kafkaTemporaryFixMe"]).t;return a().createElement(l.FormSection,{title:e("topic.index"),id:"index",titleElement:"h2"},a().createElement(l.TextContent,null,a().createElement(l.Text,{component:l.TextVariants.p,className:"section-info"},e("topic.index_section_info"))),a().createElement(u.R,{fieldId:"index-interval-size",btnAriaLabel:e("topic.index_interval_size"),fieldLabel:e("topic.index_interval_size"),fieldValue:g.Q_,popoverBody:e("topic.index_interval_size_description"),popoverHeader:e("topic.index_interval_size")}),a().createElement(u.R,{fieldId:"segment-index-size",btnAriaLabel:e("topic.segment_index_size"),fieldLabel:e("topic.segment_index_size"),fieldValue:g.nL,popoverBody:e("topic.segment_index_size_description"),popoverHeader:e("topic.segment_index_size")}))},O=function(){var e=(0,o.useTranslation)(["kafkaTemporaryFixMe"]).t;return a().createElement(l.FormSection,{title:e("topic.flush"),id:"flush",titleElement:"h2"},a().createElement(l.TextContent,null,a().createElement(l.Text,{component:l.TextVariants.p,className:"section-info"},e("topic.flush_section_info"))),a().createElement(u.R,{fieldId:"flush-interval-messages",btnAriaLabel:e("topic.flush_interval_messages"),fieldLabel:e("topic.flush_interval_messages"),fieldValue:g.mr,popoverBody:e("topic.flush_interval_messages_description"),popoverHeader:e("topic.flush_interval_messages")}),a().createElement(u.R,{fieldId:"flush-interval-time",btnAriaLabel:e("topic.flush_interval_time"),fieldLabel:e("topic.flush_interval_time"),fieldValue:g.qh,popoverBody:e("topic.flush_interval_time_description"),popoverHeader:e("topic.flush_interval_time")}))},S=function(e,t,i,n){return new(i||(i=Promise))((function(a,o){function l(e){try{c(n.next(e))}catch(e){o(e)}}function r(e){try{c(n.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(l,r)}c((n=n.apply(e,t||[])).next())}))},V=function(e,t){var i,n,a,o,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function r(o){return function(r){return function(o){if(i)throw new TypeError("Generator is already executing.");for(;l;)try{if(i=1,n&&(a=2&o[0]?n.return:o[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,o[1])).done)return a;switch(n=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return l.label++,{value:o[1],done:!1};case 5:l.label++,n=o[1],o=[0];continue;case 7:o=l.ops.pop(),l.trys.pop();continue;default:if(!(a=l.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){l=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){l.label=o[1];break}if(6===o[0]&&l.label<a[1]){l.label=a[1],a=o;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(o);break}a[2]&&l.ops.pop(),l.trys.pop();continue}o=t.call(e,l)}catch(e){o=[6,e],n=0}finally{i=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,r])}}},R=function(e){var t=e.isCreate,i=e.saveTopic,d=e.handleCancel,u=e.topicData,f=e.setTopicData,_=e.isLoadingSave,b=(0,n.useContext)(c.E),v=(0,s.useModal)().showModal,g=(0,o.useTranslation)(["kafkaTemporaryFixMe"]).t,y=g(t?"topic.create_topic":"common.save"),h=(0,n.useState)(l.ValidatedOptions.default),x=h[0],R=h[1],P=(0,n.useState)(""),A=P[0],M=P[1],N=(0,n.useState)(!1),w=N[0],D=N[1],z=(0,n.useState)(!1),B=z[0],U=z[1],H=(0,n.useState)(Number(u.numPartitions)),F=H[0],j=H[1];(0,n.useState)(u["retention.ms.unit"]||"days");var J=function(e){return S(void 0,void 0,void 0,(function(){var n,a,o,c,s;return V(this,(function(m){switch(m.label){case 0:return m.trys.push([0,2,,3]),[4,(0,r.BN)(e,b)];case 1:return(n=m.sent())&&(t?(M(g("topic.already_exists",{name:e})),R(l.ValidatedOptions.error),D(!1)):j(null===(c=null==n?void 0:n.partitions)||void 0===c?void 0:c.length)),[3,3];case 2:return a=m.sent(),o=void 0,a&&(0,p.I)(a)&&(o=null===(s=a.response)||void 0===s?void 0:s.data.code),t&&404===o&&(R(l.ValidatedOptions.default),D(!1),i()),[3,3];case 3:return[2]}}))}))};return a().createElement(l.PageSection,{padding:{default:"noPadding"}},a().createElement(l.Sidebar,{hasGutter:!0},a().createElement(m,null),a().createElement(l.SidebarContent,null,a().createElement(l.PageGroup,{hasOverflowScroll:!0,id:"topic-detail-view"},a().createElement(l.PageSection,{padding:{default:"noPadding"}},a().createElement(l.Form,null,a().createElement(E,{isCreate:t,topicData:u,setTopicData:f,fetchTopic:J,initialPartition:F,invalidText:A,setInvalidText:M,setTopicValidated:R,topicValidated:x,setWarning:U,warning:B}),a().createElement(T,null),a().createElement(k,{topicData:u,setTopicData:f}),a().createElement(L,null),a().createElement(I,null),a().createElement(C,null),a().createElement(O,null)),a().createElement(l.ActionGroup,{className:"kafka-ui--sticky-footer"},a().createElement(l.Button,{isLoading:w||_,onClick:function(){t?u.name.length<1?(M(g("topic.required")),R(l.ValidatedOptions.error)):(D(!0),J(u.name)):B?v(s.ModalType.KafkaUpdatePartitions,{onSaveTopic:i}):i()},variant:"primary","data-testid":t?"topicAdvanceCreate-actionCreate":"tabProperties-actionSave",isDisabled:"default"!==x},y),a().createElement(l.Button,{onClick:d,variant:"link","data-testid":t?"topicAdvanceCreate-actionCancel":"tabProperties-actionCancel"},g("common.cancel"))))))))}},93353:(e,t,i)=>{i.d(t,{i:()=>n,W:()=>a});var n=[{key:"days",value:"days",isPlaceholder:!0},{key:"hours",value:"hours"},{key:"minutes",value:"minutes"},{key:"seconds",value:"seconds"},{key:"milliseconds",value:"milliseconds"}],a=[{key:"bytes",value:"bytes",isPlaceholder:!0},{key:"kibibytes",value:"kibibytes"},{key:"mebibytes",value:"mebibytes"},{key:"gibibytes",value:"gibibytes"},{key:"tebibytes",value:"tebibytes"}]},56637:(e,t,i)=>{i.d(t,{N:()=>a});var n=i(8898),a=function(){var e=(0,n.useTranslation)(["kafkaTemporaryFixMe"]).t;return{validateName:function(t){var i=new RegExp("^[a-zA-Z0-9._-]+$");return t.length&&!i.test(t)?e("topic.topic_name_helper_text"):t.length>249?e("topic.cannot_exceed_characters"):"."===t||".."===t?e("topic.invalid_name_with_dot"):void 0}}}}}]);
