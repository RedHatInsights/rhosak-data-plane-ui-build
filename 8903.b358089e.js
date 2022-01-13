"use strict";(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[8903],{43791:()=>{},13985:(e,t,i)=>{i.d(t,{I:()=>r});var a=i(75418),n=i.n(a),o=i(59909),l=i(99421),r=(i(43791),function(e){var t=e.topicName,i=e.kafkaName,a=e.kafkaInstanceLink,r=e.kafkaPageLink,c=(0,o.useTranslation)(["kafkaTemporaryFixMe"]).t;return n().createElement(n().Fragment,null,n().createElement("section",{className:"pf-c-page__main-breadcrumb"},n().createElement(l.Breadcrumb,null,n().createElement(l.BreadcrumbItem,{to:r||"#"},c("common.kafka_instance")),n().createElement(l.BreadcrumbItem,{to:a||"#"},i||c("common.kafka_instance_name")),n().createElement(l.BreadcrumbItem,null,t))),n().createElement(l.PageSection,{variant:l.PageSectionVariants.light},n().createElement(l.TextContent,null,n().createElement(l.Text,{component:l.TextVariants.h1},t))))})},8903:(e,t,i)=>{i.d(t,{o:()=>k});var a=i(75418),n=i.n(a),o=i(68199),l=i(59909),r=i(99421),c=i(7451),p=i(86737),s=(i(43791),i(76153)),m=i(1787),d=function(e){var t=e.topic,i=e.deleteTopic,a=(0,o.useHistory)(),d=(0,o.useParams)().topicName,f=(0,((0,c.useBasename)()||{getBasename:function(){return""}}).getBasename)(),_=(0,l.useTranslation)(["kafkaTemporaryFixMe"]).t;return n().createElement(r.PageSection,{padding:{default:"noPadding"}},n().createElement(r.Sidebar,{hasGutter:!0},n().createElement(r.SidebarPanel,{variant:"sticky"},n().createElement(r.JumpLinks,{isVertical:!0,label:_("topic.jump_to_section"),offset:-164,style:{position:"sticky"},scrollableSelector:'.pf-c-page__main[tabindex="-1"]'},n().createElement(r.JumpLinksItem,{key:0,href:"#core-configuration"},_("topic.core_configuration")),n().createElement(r.JumpLinksItem,{key:1,href:"#messages"},_("topic.messages")),n().createElement(r.JumpLinksItem,{key:2,href:"#log"},_("topic.log")),n().createElement(r.JumpLinksItem,{key:3,href:"#replication"},_("topic.replication")),n().createElement(r.JumpLinksItem,{key:4,href:"#cleanup"},_("common.cleanup")),n().createElement(r.JumpLinksItem,{key:5,href:"#index"},_("topic.index")),n().createElement(r.JumpLinksItem,{key:6,href:"#flush"},_("topic.flush")),n().createElement(r.JumpLinksItem,{key:7,href:"#delete"},_("common.delete")))),n().createElement(r.SidebarContent,null,n().createElement(r.PageGroup,{hasOverflowScroll:!0,id:"topic-detail-view"},n().createElement(r.PageSection,{padding:{default:"noPadding"}},n().createElement(r.Split,null,n().createElement(r.SplitItem,{isFilled:!0},n().createElement(r.Form,{id:"topic-form"},n().createElement(r.FormSection,{title:_("topic.core_configuration"),id:"core-configuration",titleElement:"h2"},n().createElement(r.TextContent,null,n().createElement(r.Text,{component:r.TextVariants.p,className:"section-info"},_("topic.core_config_info"))),n().createElement(s.R,{fieldId:"topic-name",btnAriaLabel:_("common.name"),fieldLabel:_("topic.topic_name"),fieldValue:t.name,popoverBody:_("topic.topic_name_description"),popoverHeader:_("topic.topic_name")}),n().createElement(s.R,{fieldId:"partitions",btnAriaLabel:_("topic.partitions"),fieldLabel:_("topic.partitions"),fieldValue:t.numPartitions,popoverBody:_("topic.partitions_description"),popoverHeader:_("topic.partitions")}),n().createElement(s.R,{fieldId:"replicas",btnAriaLabel:_("topic.replicas"),fieldLabel:_("topic.replicas"),fieldValue:t.replicationFactor,popoverBody:_("topic.replicas_description"),popoverHeader:_("topic.replicas")}),n().createElement(s.R,{fieldId:"min-insync-replicas",btnAriaLabel:_("topic.min_insync_replicas"),fieldLabel:_("topic.min_insync_replicas"),fieldValue:p.MO,popoverBody:_("topic.min_insync_replicas_description"),popoverHeader:_("topic.min_insync_replicas")}),n().createElement(s.R,{fieldId:"retention-time",btnAriaLabel:_("topic.retention_time"),fieldLabel:_("topic.retention_time"),fieldValue:(0,m.eA)(Number(t["retention.ms"])),popoverBody:_("topic.retention_time_description"),popoverHeader:_("topic.retention_time"),showUnlimited:!0}),n().createElement(s.R,{fieldId:"retention-size",btnAriaLabel:_("topic.retention_size"),fieldLabel:_("topic.retention_size"),fieldValue:(0,m.Cv)(Number(t["retention.bytes"])),popoverHeader:_("topic.retention_size"),popoverBody:_("topic.retention_size_description"),showUnlimited:!0})),n().createElement(r.FormSection,{title:_("topic.messages"),id:"messages",titleElement:"h2"},n().createElement(r.TextContent,null,n().createElement(r.Text,{component:r.TextVariants.p,className:"section-info"},_("topic.message_section_info"))),n().createElement(s.R,{fieldId:"max-message-size",btnAriaLabel:_("topic.max_message_size"),fieldLabel:_("topic.max_message_size"),fieldValue:p._$,popoverBody:_("topic.max_message_size_description"),popoverHeader:_("topic.max_message_size")}),n().createElement(s.R,{fieldId:"message-timestamp-type",btnAriaLabel:_("topic.message_timestamp_type"),fieldLabel:_("topic.message_timestamp_type"),fieldValue:p.K,popoverBody:_("topic.message_timestamp_type_description"),popoverHeader:_("topic.message_timestamp_type")}),n().createElement(s.R,{fieldId:"max-message-timestamp-diff",btnAriaLabel:_("topic.max_message_timestamp_diff"),fieldLabel:_("topic.max_message_timestamp_diff"),fieldValue:p.Y,popoverBody:_("topic.max_message_timestamp_diff_description"),popoverHeader:_("topic.max_message_timestamp_diff")}),n().createElement(s.R,{fieldId:"compression-type",btnAriaLabel:_("topic.compression_type"),fieldLabel:_("topic.compression_type"),fieldValue:"Producer",popoverBody:_("topic.compression_type_description"),popoverHeader:_("topic.compression_type")}),n().createElement(s.R,{fieldId:"message-format",btnAriaLabel:_("topic.message_format"),fieldLabel:_("topic.message_format"),fieldValue:"2.7-IV2",popoverBody:_("topic.message_format_description"),popoverHeader:_("topic.message_format")})),n().createElement(r.FormSection,{title:_("topic.log"),id:"log",titleElement:"h2"},n().createElement(r.TextContent,null,n().createElement(r.Text,{component:r.TextVariants.p},_("topic.log_section_info"),n().createElement(r.Text,{component:r.TextVariants.small,className:"section-info-note"},_("topic.log_section_info_note")))),n().createElement(s.R,{fieldId:"cleanup-policy",btnAriaLabel:_("topic.cleanup_policy"),fieldLabel:_("topic.cleanup_policy"),fieldValue:t["cleanup.policy"],popoverBody:_("topic.cleanup_policy_description"),popoverHeader:_("topic.cleanup_policy")}),n().createElement(s.R,{fieldId:"delete-retention-time",btnAriaLabel:_("topic.delete_retention_time"),fieldLabel:_("topic.delete_retention_time"),fieldValue:p.sN,popoverBody:_("topic.delete_retention_time_description"),popoverHeader:_("topic.delete_retention_time")}),n().createElement(s.R,{fieldId:"min-cleanable-ratio",btnAriaLabel:_("topic.min_cleanable_ratio"),fieldLabel:_("topic.min_cleanable_ratio"),fieldValue:p.PT,popoverBody:_("topic.min_cleanable_ratio_description"),popoverHeader:_("topic.min_cleanable_ratio")}),n().createElement(s.R,{fieldId:"min-compaction-lag-time",btnAriaLabel:_("topic.min_compaction_lag_time"),fieldLabel:_("topic.min_compaction_lag_time"),fieldValue:p.A7,popoverBody:_("topic.min_compaction_lag_time_description"),popoverHeader:_("topic.min_compaction_lag_time")})),n().createElement(r.FormSection,{title:_("topic.replication"),id:"replication",titleElement:"h2"},n().createElement(r.TextContent,null,n().createElement(r.Text,{component:r.TextVariants.p},_("topic.replication_section_info"),n().createElement(r.Text,{component:r.TextVariants.small},_("topic.replication_section_info_note")))),n().createElement(s.R,{fieldId:"unclean-leader-election",btnAriaLabel:_("topic.unclean_leader_election"),fieldLabel:_("topic.unclean_leader_election"),fieldValue:_("common.disabled"),popoverBody:_("topic.unclean_leader_election_description"),popoverHeader:_("topic.unclean_leader_election")})),n().createElement(r.FormSection,{title:_("common.cleanup"),id:"cleanup",titleElement:"h2"},n().createElement(r.TextContent,null,n().createElement(r.Text,{component:r.TextVariants.p,className:"section-info"},_("topic.cleanup_section_info"))),n().createElement(s.R,{fieldId:"log-segment-size",btnAriaLabel:_("topic.log_segment_size"),fieldLabel:_("topic.log_segment_size"),fieldValue:p.f8,popoverBody:_("topic.log_segment_size_description"),popoverHeader:_("topic.log_segment_size")}),n().createElement(s.R,{fieldId:"segement-time",btnAriaLabel:_("topic.segement_time"),fieldLabel:_("topic.segement_time"),fieldValue:p.$$,popoverBody:_("topic.segement_time_description"),popoverHeader:_("topic.segement_time")}),n().createElement(s.R,{fieldId:"segment-jitter-time",btnAriaLabel:_("topic.segment_jitter_time"),fieldLabel:_("topic.segment_jitter_time"),fieldValue:p.W$,popoverBody:_("topic.segment_jitter_time_description"),popoverHeader:_("topic.segment_jitter_time")}),n().createElement(s.R,{fieldId:"file-delete-delay",btnAriaLabel:_("topic.file_delete_delay"),fieldLabel:_("topic.file_delete_delay"),fieldValue:p.pJ,popoverBody:_("topic.file_delete_delay_description"),popoverHeader:_("topic.file_delete_delay")}),n().createElement(s.R,{fieldId:"preallocate-log-segment-files",btnAriaLabel:_("topic.preallocate_log_segment_files"),fieldLabel:_("topic.preallocate_log_segment_files"),fieldValue:_("common.disabled"),popoverBody:_("topic.preallocate_log_segment_files_description"),popoverHeader:_("topic.preallocate_log_segment_files")})),n().createElement(r.FormSection,{title:_("topic.index"),id:"index",titleElement:"h2"},n().createElement(r.TextContent,null,n().createElement(r.Text,{component:r.TextVariants.p,className:"section-info"},_("topic.index_section_info"))),n().createElement(s.R,{fieldId:"index-interval-size",btnAriaLabel:_("topic.index_interval_size"),fieldLabel:_("topic.index_interval_size"),fieldValue:p.Q_,popoverBody:_("topic.index_interval_size_description"),popoverHeader:_("topic.index_interval_size")}),n().createElement(s.R,{fieldId:"segment-index-size",btnAriaLabel:_("topic.segment_index_size"),fieldLabel:_("topic.segment_index_size"),fieldValue:p.nL,popoverBody:_("topic.segment_index_size_description"),popoverHeader:_("topic.segment_index_size")})),n().createElement(r.FormSection,{title:_("topic.flush"),id:"flush",titleElement:"h2"},n().createElement(r.TextContent,null,n().createElement(r.Text,{component:r.TextVariants.p,className:"section-info"},_("topic.flush_section_info"))),n().createElement(s.R,{fieldId:"flush-interval-messages",btnAriaLabel:_("topic.flush_interval_messages"),fieldLabel:_("topic.flush_interval_messages"),fieldValue:p.mr,popoverBody:_("topic.flush_interval_messages_description"),popoverHeader:_("topic.flush_interval_messages")}),n().createElement(s.R,{fieldId:"flush-interval-time",btnAriaLabel:_("topic.flush_interval_time"),fieldLabel:_("topic.flush_interval_time"),fieldValue:p.qh,popoverBody:_("topic.flush_interval_time_description"),popoverHeader:_("topic.flush_interval_time")}))),n().createElement(r.Divider,{className:"kafka-ui-divider__Margin"}),n().createElement(r.TextContent,null,n().createElement(r.Text,{component:r.TextVariants.h2,id:"delete"},_("topic.delete_topic")),n().createElement(r.Text,{component:r.TextVariants.p,className:"section-info"},_("topic.delete_topic_info")),n().createElement(r.Button,{variant:"danger",onClick:i,"data-testid":"tabProperties-actionDelete"},_("common.delete_topic")))),n().createElement(r.SplitItem,null,n().createElement(r.Button,{variant:"primary",onClick:function(){a.push("".concat(f,"/topic/update/").concat(d))},"data-testid":"tabProperties-actionEdit"},_("common.edit_props")))))))))},f=i(13985),_=i(60540),u=i(64517),b=i(3654),g=i(63850),E=i(5736),v=(i(27958),function(e,t,i,a){return new(i||(i=Promise))((function(n,o){function l(e){try{c(a.next(e))}catch(e){o(e)}}function r(e){try{c(a.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(l,r)}c((a=a.apply(e,t||[])).next())}))}),y=function(e,t){var i,a,n,o,l={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return o={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function r(o){return function(r){return function(o){if(i)throw new TypeError("Generator is already executing.");for(;l;)try{if(i=1,a&&(n=2&o[0]?a.return:o[0]?a.throw||((n=a.return)&&n.call(a),0):a.next)&&!(n=n.call(a,o[1])).done)return n;switch(a=0,n&&(o=[2&o[0],n.value]),o[0]){case 0:case 1:n=o;break;case 4:return l.label++,{value:o[1],done:!1};case 5:l.label++,a=o[1],o=[0];continue;case 7:o=l.ops.pop(),l.trys.pop();continue;default:if(!(n=l.trys,(n=n.length>0&&n[n.length-1])||6!==o[0]&&2!==o[0])){l=0;continue}if(3===o[0]&&(!n||o[1]>n[0]&&o[1]<n[3])){l.label=o[1];break}if(6===o[0]&&l.label<n[1]){l.label=n[1],n=o;break}if(n&&l.label<n[2]){l.label=n[2],l.ops.push(o);break}n[2]&&l.ops.pop(),l.trys.pop();continue}o=t.call(e,l)}catch(e){o=[6,e],a=0}finally{i=n=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,r])}}},k=function(){var e=(0,u.S)()||{},t=e.activeTab,i=void 0===t?2:t,p=e.kafkaName,s=e.kafkaPageLink,m=e.kafkaInstanceLink,k=e.onError,h=e.showSchemas,T=(0,o.useHistory)(),x=(0,o.useParams)().topicName,L=(0,((0,c.useBasename)()||{getBasename:function(){return""}}).getBasename)(),I=(0,a.useState)({name:x,numPartitions:"","retention.ms":"","retention.ms.unit":"milliseconds","retention.bytes":"","retention.bytes.unit":"bytes","cleanup.policy":""}),V=I[0],B=I[1],S=(0,a.useState)(i),R=S[0],A=S[1],C=(0,a.useContext)(b.E),P=((0,c.useAlert)()||{addAlert:function(){}}).addAlert,H=(0,l.useTranslation)(["kafkaTemporaryFixMe"]).t,z=n().createRef(),N=n().createRef(),w=n().createRef(),F=(0,c.useModal)().showModal,J=function(){T.push("".concat(L,"/topics"))};(0,a.useEffect)((function(){!function(e){v(void 0,void 0,void 0,(function(){var t,a,n,o;return y(this,(function(l){switch(l.label){case 0:if(2!==i)return[3,4];l.label=1;case 1:return l.trys.push([1,3,,4]),[4,(0,_.Rh)(e,C).then((function(e){B(e)}))];case 2:return l.sent(),[3,4];case 3:return t=l.sent(),(0,E.I)(t)&&(k&&k((null===(a=t.response)||void 0===a?void 0:a.data.code)||-1,null===(n=t.response)||void 0===n?void 0:n.data.error_message),404===(null===(o=t.response)||void 0===o?void 0:o.status)&&P({title:H("topic.topic_not_found",{name:e}),variant:r.AlertVariant.danger})),[3,4];case 4:return[2]}}))}))}(x)}),[x]);return n().createElement(n().Fragment,null,n().createElement(f.I,{topicName:x,kafkaName:p,kafkaPageLink:s,kafkaInstanceLink:m}),n().createElement(r.PageSection,{variant:r.PageSectionVariants.light,padding:{default:"noPadding"},className:"pf-c-page__main-tabs"},n().createElement(r.Tabs,{activeKey:R,onSelect:function(e,t){A(t)},isBox:!1,className:"pf-m-page-insets"},n().createElement(r.Tab,{eventKey:1,"data-testid":"pageTopic-tabConsumers",title:n().createElement(r.TabTitleText,null,H("consumerGroup.consumer_groups")),tabContentId:"kafka-ui-TabcontentConsumerGroupList",tabContentRef:z}),n().createElement(r.Tab,{eventKey:2,title:n().createElement(r.TabTitleText,null,H("common.properties")),"data-testid":"pageTopic-tabProperties",tabContentId:"kafka-ui-TabcontentProperties",tabContentRef:N}),n().createElement(r.Tab,{eventKey:3,title:n().createElement(r.TabTitleText,null,H("common.schemas")),"data-testid":"pageTopic-tabSchemas",tabContentId:"kafka-ui-TabSchemas",tabContentRef:w}))),n().createElement(r.PageSection,{variant:2===R?r.PageSectionVariants.light:r.PageSectionVariants.default},n().createElement(r.TabContent,{eventKey:1,id:"kafka-ui-TabcontentConsumerGroupList",ref:z,className:"kafka-ui-m-full-height","aria-label":"Consumer groups.",hidden:1!=R},n().createElement(g.J,{consumerGroupByTopic:!0,topic:x,rowDataTestId:"tableTopicConsumers-row"})),n().createElement(r.TabContent,{eventKey:2,id:"kafka-ui-TabcontentProperties",ref:N,className:"kafka-ui-m-full-height","aria-label":"Topic properties.",hidden:2!=R},n().createElement(d,{topic:V,deleteTopic:function(){F(c.ModalType.KafkaDeleteTopic,{topicName:x,onDeleteTopic:J})}})),n().createElement(r.TabContent,{eventKey:3,id:"kafka-ui-TabSchemas",ref:w,className:"kafka-ui-m-full-height","aria-label":"Schemas mapping",hidden:3!=R},h)))}}}]);
