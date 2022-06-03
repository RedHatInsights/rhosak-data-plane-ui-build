"use strict";(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[8903],{43791:()=>{},13985:(e,i,t)=>{t.d(i,{I:()=>c});var a=t(85893),o=t(3538),n=t(99922),s=(t(43791),t(68199));const c=({topicName:e,kafkaName:i,kafkaInstanceLink:t,kafkaPageLink:c})=>{const{t:l}=(0,o.useTranslation)(["kafkaTemporaryFixMe"]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("section",Object.assign({className:"pf-c-page__main-breadcrumb"},{children:(0,a.jsxs)(n.Breadcrumb,{children:[(0,a.jsx)(n.BreadcrumbItem,{render:()=>(0,a.jsx)(s.Link,Object.assign({to:c||"#"},{children:l("common.kafka_instance")}))}),(0,a.jsx)(n.BreadcrumbItem,{render:()=>(0,a.jsx)(s.Link,Object.assign({to:t||"#"},{children:i||l("common.kafka_instance_name")}))}),(0,a.jsx)(n.BreadcrumbItem,{children:e})]})})),(0,a.jsx)(n.PageSection,Object.assign({variant:n.PageSectionVariants.light},{children:(0,a.jsx)(n.TextContent,{children:(0,a.jsx)(n.Text,Object.assign({component:n.TextVariants.h1},{children:e}))})}))]})}},8903:(e,i,t)=>{t.d(i,{o:()=>T});var a=t(9922),o=t(85893),n=t(75418),s=t(68199),c=t(3538),l=t(99922),r=t(5854),p=t(86737),d=(t(43791),t(76153)),m=t(1787),_=t(64517);const f=({topic:e,deleteTopic:i})=>{const t=(0,s.useHistory)(),{topicName:a}=(0,s.useParams)(),{getBasename:n}=(0,r.useBasename)()||{getBasename:()=>""},f=n(),{t:b}=(0,c.useTranslation)(["kafkaTemporaryFixMe"]),{minInSyncReplicas:g}=(0,_.S)()||{};return(0,o.jsx)(l.PageSection,Object.assign({padding:{default:"noPadding"}},{children:(0,o.jsxs)(l.Sidebar,Object.assign({hasGutter:!0},{children:[(0,o.jsx)(l.SidebarPanel,Object.assign({variant:"sticky"},{children:(0,o.jsxs)(l.JumpLinks,Object.assign({isVertical:!0,label:b("topic.jump_to_section"),style:{position:"sticky"},scrollableSelector:".pf-c-page__main-section.pf-m-light.pf-m-overflow-scroll"},{children:[(0,o.jsx)(l.JumpLinksItem,Object.assign({href:"#core-configuration"},{children:b("topic.core_configuration")}),0),(0,o.jsx)(l.JumpLinksItem,Object.assign({href:"#messages"},{children:b("topic.messages")}),1),(0,o.jsx)(l.JumpLinksItem,Object.assign({href:"#log"},{children:b("topic.log")}),2),(0,o.jsx)(l.JumpLinksItem,Object.assign({href:"#replication"},{children:b("topic.replication")}),3),(0,o.jsx)(l.JumpLinksItem,Object.assign({href:"#cleanup"},{children:b("common.cleanup")}),4),(0,o.jsx)(l.JumpLinksItem,Object.assign({href:"#index"},{children:b("topic.index")}),5),(0,o.jsx)(l.JumpLinksItem,Object.assign({href:"#flush"},{children:b("topic.flush")}),6),(0,o.jsx)(l.JumpLinksItem,Object.assign({href:"#delete"},{children:b("common.delete")}),7)]}))})),(0,o.jsx)(l.SidebarContent,{children:(0,o.jsx)(l.PageGroup,Object.assign({hasOverflowScroll:!0,id:"topic-detail-view",className:"pf-u-mb-4xl"},{children:(0,o.jsx)(l.PageSection,Object.assign({padding:{default:"noPadding"}},{children:(0,o.jsxs)(l.Split,{children:[(0,o.jsxs)(l.SplitItem,Object.assign({isFilled:!0},{children:[(0,o.jsxs)(l.Form,Object.assign({id:"topic-form"},{children:[(0,o.jsxs)(l.FormSection,Object.assign({title:b("topic.core_configuration"),id:"core-configuration",titleElement:"h2"},{children:[(0,o.jsx)(l.TextContent,{children:(0,o.jsx)(l.Text,Object.assign({component:l.TextVariants.p,className:"section-info"},{children:b("topic.core_config_info")}))}),(0,o.jsx)(d.R,{fieldId:"topic-name",btnAriaLabel:b("common.name"),fieldLabel:b("topic.topic_name"),fieldValue:e.name,popoverBody:b("topic.topic_name_description"),popoverHeader:b("topic.topic_name")}),(0,o.jsx)(d.R,{fieldId:"partitions",btnAriaLabel:b("topic.partitions"),fieldLabel:b("topic.partitions"),fieldValue:e.numPartitions,popoverBody:b("topic.partitions_description"),popoverHeader:b("topic.partitions")}),(0,o.jsx)(d.R,{fieldId:"replicas",btnAriaLabel:b("topic.replicas"),fieldLabel:b("topic.replicas"),fieldValue:e.replicationFactor,popoverBody:b("topic.replicas_description"),popoverHeader:b("topic.replicas")}),(0,o.jsx)(d.R,{fieldId:"min-insync-replicas",btnAriaLabel:b("topic.min_insync_replicas"),fieldLabel:b("topic.min_insync_replicas"),fieldValue:(null==g?void 0:g.toString())||p.MO,popoverBody:b("topic.min_insync_replicas_description"),popoverHeader:b("topic.min_insync_replicas")}),(0,o.jsx)(d.R,{fieldId:"retention-time",btnAriaLabel:b("topic.retention_time"),fieldLabel:b("topic.retention_time"),fieldValue:(0,m.eA)(Number(e["retention.ms"])),popoverBody:b("topic.retention_time_description"),popoverHeader:b("topic.retention_time"),showUnlimited:!0}),(0,o.jsx)(d.R,{fieldId:"retention-size",btnAriaLabel:b("topic.retention_size"),fieldLabel:b("topic.retention_size"),fieldValue:(0,m.Cv)(Number(e["retention.bytes"])),popoverHeader:b("topic.retention_size"),popoverBody:b("topic.retention_size_description"),showUnlimited:!0})]})),(0,o.jsxs)(l.FormSection,Object.assign({title:b("topic.messages"),id:"messages",titleElement:"h2"},{children:[(0,o.jsx)(l.TextContent,{children:(0,o.jsx)(l.Text,Object.assign({component:l.TextVariants.p,className:"section-info"},{children:b("topic.message_section_info")}))}),(0,o.jsx)(d.R,{fieldId:"max-message-size",btnAriaLabel:b("topic.max_message_size"),fieldLabel:b("topic.max_message_size"),fieldValue:p._$,popoverBody:b("topic.max_message_size_description"),popoverHeader:b("topic.max_message_size")}),(0,o.jsx)(d.R,{fieldId:"message-timestamp-type",btnAriaLabel:b("topic.message_timestamp_type"),fieldLabel:b("topic.message_timestamp_type"),fieldValue:p.K,popoverBody:b("topic.message_timestamp_type_description"),popoverHeader:b("topic.message_timestamp_type")}),(0,o.jsx)(d.R,{fieldId:"max-message-timestamp-diff",btnAriaLabel:b("topic.max_message_timestamp_diff"),fieldLabel:b("topic.max_message_timestamp_diff"),fieldValue:p.Y,popoverBody:b("topic.max_message_timestamp_diff_description"),popoverHeader:b("topic.max_message_timestamp_diff")}),(0,o.jsx)(d.R,{fieldId:"compression-type",btnAriaLabel:b("topic.compression_type"),fieldLabel:b("topic.compression_type"),fieldValue:"Producer",popoverBody:b("topic.compression_type_description"),popoverHeader:b("topic.compression_type")}),(0,o.jsx)(d.R,{fieldId:"message-format",btnAriaLabel:b("topic.message_format"),fieldLabel:b("topic.message_format"),fieldValue:"2.7-IV2",popoverBody:b("topic.message_format_description"),popoverHeader:b("topic.message_format")})]})),(0,o.jsxs)(l.FormSection,Object.assign({title:b("topic.log"),id:"log",titleElement:"h2"},{children:[(0,o.jsx)(l.TextContent,{children:(0,o.jsxs)(l.Text,Object.assign({component:l.TextVariants.p},{children:[b("topic.log_section_info"),(0,o.jsx)(l.Text,Object.assign({component:l.TextVariants.small,className:"section-info-note"},{children:b("topic.log_section_info_note")}))]}))}),(0,o.jsx)(d.R,{fieldId:"cleanup-policy",btnAriaLabel:b("topic.cleanup_policy"),fieldLabel:b("topic.cleanup_policy"),fieldValue:e["cleanup.policy"],popoverBody:b("topic.cleanup_policy_description"),popoverHeader:b("topic.cleanup_policy")}),(0,o.jsx)(d.R,{fieldId:"delete-retention-time",btnAriaLabel:b("topic.delete_retention_time"),fieldLabel:b("topic.delete_retention_time"),fieldValue:p.sN,popoverBody:b("topic.delete_retention_time_description"),popoverHeader:b("topic.delete_retention_time")}),(0,o.jsx)(d.R,{fieldId:"min-cleanable-ratio",btnAriaLabel:b("topic.min_cleanable_ratio"),fieldLabel:b("topic.min_cleanable_ratio"),fieldValue:p.PT,popoverBody:b("topic.min_cleanable_ratio_description"),popoverHeader:b("topic.min_cleanable_ratio")}),(0,o.jsx)(d.R,{fieldId:"min-compaction-lag-time",btnAriaLabel:b("topic.min_compaction_lag_time"),fieldLabel:b("topic.min_compaction_lag_time"),fieldValue:p.A7,popoverBody:b("topic.min_compaction_lag_time_description"),popoverHeader:b("topic.min_compaction_lag_time")})]})),(0,o.jsxs)(l.FormSection,Object.assign({title:b("topic.replication"),id:"replication",titleElement:"h2"},{children:[(0,o.jsx)(l.TextContent,{children:(0,o.jsxs)(l.Text,Object.assign({component:l.TextVariants.p},{children:[b("topic.replication_section_info"),(0,o.jsx)(l.Text,Object.assign({component:l.TextVariants.small},{children:b("topic.replication_section_info_note")}))]}))}),(0,o.jsx)(d.R,{fieldId:"unclean-leader-election",btnAriaLabel:b("topic.unclean_leader_election"),fieldLabel:b("topic.unclean_leader_election"),fieldValue:b("common.disabled"),popoverBody:b("topic.unclean_leader_election_description"),popoverHeader:b("topic.unclean_leader_election")})]})),(0,o.jsxs)(l.FormSection,Object.assign({title:b("common.cleanup"),id:"cleanup",titleElement:"h2"},{children:[(0,o.jsx)(l.TextContent,{children:(0,o.jsx)(l.Text,Object.assign({component:l.TextVariants.p,className:"section-info"},{children:b("topic.cleanup_section_info")}))}),(0,o.jsx)(d.R,{fieldId:"log-segment-size",btnAriaLabel:b("topic.log_segment_size"),fieldLabel:b("topic.log_segment_size"),fieldValue:p.f8,popoverBody:b("topic.log_segment_size_description"),popoverHeader:b("topic.log_segment_size")}),(0,o.jsx)(d.R,{fieldId:"segement-time",btnAriaLabel:b("topic.segement_time"),fieldLabel:b("topic.segement_time"),fieldValue:p.$$,popoverBody:b("topic.segement_time_description"),popoverHeader:b("topic.segement_time")}),(0,o.jsx)(d.R,{fieldId:"segment-jitter-time",btnAriaLabel:b("topic.segment_jitter_time"),fieldLabel:b("topic.segment_jitter_time"),fieldValue:p.W$,popoverBody:b("topic.segment_jitter_time_description"),popoverHeader:b("topic.segment_jitter_time")}),(0,o.jsx)(d.R,{fieldId:"file-delete-delay",btnAriaLabel:b("topic.file_delete_delay"),fieldLabel:b("topic.file_delete_delay"),fieldValue:p.pJ,popoverBody:b("topic.file_delete_delay_description"),popoverHeader:b("topic.file_delete_delay")}),(0,o.jsx)(d.R,{fieldId:"preallocate-log-segment-files",btnAriaLabel:b("topic.preallocate_log_segment_files"),fieldLabel:b("topic.preallocate_log_segment_files"),fieldValue:b("common.disabled"),popoverBody:b("topic.preallocate_log_segment_files_description"),popoverHeader:b("topic.preallocate_log_segment_files")})]})),(0,o.jsxs)(l.FormSection,Object.assign({title:b("topic.index"),id:"index",titleElement:"h2"},{children:[(0,o.jsx)(l.TextContent,{children:(0,o.jsx)(l.Text,Object.assign({component:l.TextVariants.p,className:"section-info"},{children:b("topic.index_section_info")}))}),(0,o.jsx)(d.R,{fieldId:"index-interval-size",btnAriaLabel:b("topic.index_interval_size"),fieldLabel:b("topic.index_interval_size"),fieldValue:p.Q_,popoverBody:b("topic.index_interval_size_description"),popoverHeader:b("topic.index_interval_size")}),(0,o.jsx)(d.R,{fieldId:"segment-index-size",btnAriaLabel:b("topic.segment_index_size"),fieldLabel:b("topic.segment_index_size"),fieldValue:p.nL,popoverBody:b("topic.segment_index_size_description"),popoverHeader:b("topic.segment_index_size")})]})),(0,o.jsxs)(l.FormSection,Object.assign({title:b("topic.flush"),id:"flush",titleElement:"h2"},{children:[(0,o.jsx)(l.TextContent,{children:(0,o.jsx)(l.Text,Object.assign({component:l.TextVariants.p,className:"section-info"},{children:b("topic.flush_section_info")}))}),(0,o.jsx)(d.R,{fieldId:"flush-interval-messages",btnAriaLabel:b("topic.flush_interval_messages"),fieldLabel:b("topic.flush_interval_messages"),fieldValue:p.mr,popoverBody:b("topic.flush_interval_messages_description"),popoverHeader:b("topic.flush_interval_messages")}),(0,o.jsx)(d.R,{fieldId:"flush-interval-time",btnAriaLabel:b("topic.flush_interval_time"),fieldLabel:b("topic.flush_interval_time"),fieldValue:p.qh,popoverBody:b("topic.flush_interval_time_description"),popoverHeader:b("topic.flush_interval_time")})]}))]})),(0,o.jsx)(l.Divider,{className:"kafka-ui-divider__Margin"}),(0,o.jsxs)(l.TextContent,{children:[(0,o.jsx)(l.Text,Object.assign({component:l.TextVariants.h2,id:"delete"},{children:b("topic.delete_topic")})),(0,o.jsx)(l.Text,Object.assign({component:l.TextVariants.p,className:"section-info"},{children:b("topic.delete_topic_info")})),(0,o.jsx)(l.Button,Object.assign({variant:"danger",onClick:i,"data-testid":"tabProperties-actionDelete"},{children:b("common.delete_topic")}))]})]})),(0,o.jsx)(l.SplitItem,{children:(0,o.jsx)(l.Button,Object.assign({variant:"primary",onClick:()=>{t.push(`${f}/topic/update/${a}`)},"data-testid":"tabProperties-actionEdit"},{children:b("common.edit_props")}))})]})}))}))})]}))}))};var b=t(13985),g=t(60540),u=t(3654),x=t(63850),j=t(5736),h=(t(27958),t(59271)),v=t(86206),k=t(55268);const T=()=>{const{kafkaName:e,kafkaPageLink:i,kafkaInstanceLink:t,showSchemas:a}=(0,_.S)()||{},{topicName:r}=(0,s.useParams)(),[p,d]=(0,n.useState)(1),{t:m}=(0,c.useTranslation)(["kafkaTemporaryFixMe"]),f=(0,n.createRef)(),g=(0,n.createRef)(),u=(0,n.createRef)(),j=(0,n.createRef)();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(b.I,{topicName:r,kafkaName:e,kafkaPageLink:i,kafkaInstanceLink:t}),(0,o.jsx)(l.PageSection,Object.assign({variant:l.PageSectionVariants.light,padding:{default:"noPadding"},className:"pf-c-page__main-tabs"},{children:(0,o.jsxs)(l.Tabs,Object.assign({activeKey:p,onSelect:(e,i)=>{d(i)},isBox:!1,className:"pf-m-page-insets"},{children:[(0,o.jsx)(l.Tab,{eventKey:1,"data-testid":"pageTopic-tabConsumers",title:(0,o.jsx)(l.TabTitleText,{children:m("consumerGroup.consumer_groups")}),tabContentId:"kafka-ui-TabcontentConsumerGroupList",tabContentRef:g}),(0,o.jsx)(l.Tab,{eventKey:2,"data-testid":"pageTopic-tabMessages",title:(0,o.jsx)(l.TabTitleText,{children:m("topic.messages")}),tabContentId:"kafka-ui-TabcontentMessages",tabContentRef:f}),(0,o.jsx)(l.Tab,{eventKey:3,title:(0,o.jsx)(l.TabTitleText,{children:m("common.properties")}),"data-testid":"pageTopic-tabProperties",tabContentId:"kafka-ui-TabcontentProperties",tabContentRef:u}),(0,o.jsx)(l.Tab,{eventKey:4,title:(0,o.jsx)(l.TabTitleText,{children:m("common.schemas")}),"data-testid":"pageTopic-tabSchemas",tabContentId:"kafka-ui-TabSchemas",tabContentRef:j})]}))})),(0,o.jsxs)(l.PageSection,Object.assign({variant:3===p?l.PageSectionVariants.light:l.PageSectionVariants.default,hasOverflowScroll:!0},{children:[(0,o.jsx)(l.TabContent,Object.assign({eventKey:1,id:"kafka-ui-TabcontentConsumerGroupList",ref:g,className:"kafka-ui-m-full-height","aria-label":"Consumer groups",hidden:1!=p},{children:1===p&&(0,o.jsx)(x.J,{consumerGroupByTopic:!0,topic:r,rowDataTestId:"tableTopicConsumers-row"})})),(0,o.jsx)(l.TabContent,Object.assign({eventKey:2,id:"kafka-ui-TabcontentMessages",ref:f,className:"kafka-ui-m-full-height","aria-label":"Messages",hidden:2!=p},{children:2===p&&(0,o.jsx)(L,{topicName:r})})),(0,o.jsx)(l.TabContent,Object.assign({eventKey:3,id:"kafka-ui-TabcontentProperties",ref:u,className:"kafka-ui-m-full-height","aria-label":"Topic properties",hidden:3!=p},{children:3===p&&(0,o.jsx)(y,{topicName:r})})),(0,o.jsx)(l.TabContent,Object.assign({eventKey:4,id:"kafka-ui-TabSchemas",ref:j,className:"kafka-ui-m-full-height","aria-label":"Schemas mapping",hidden:4!=p},{children:4===p&&a}))]}))]})},y=({topicName:e})=>{const{t:i}=(0,c.useTranslation)(["kafkaTemporaryFixMe"]),{showModal:t}=(0,r.useModal)(),p=(0,n.useContext)(u.E),{addAlert:d}=(0,r.useAlert)()||{addAlert:()=>{}},{getBasename:m}=(0,r.useBasename)()||{getBasename:()=>""},b=(0,s.useHistory)(),x=m(),{onError:h}=(0,_.S)()||{},[v,T]=(0,n.useState)(),y=()=>{b.push(`${x}/topics`)},L=(0,n.useCallback)((e=>(0,a.__awaiter)(void 0,void 0,void 0,(function*(){var t,a,o;try{yield(0,g.Rh)(e,p).then((e=>{T(e)}))}catch(n){(0,j.I)(n)&&(h&&h((null===(t=n.response)||void 0===t?void 0:t.data.code)||-1,null===(a=n.response)||void 0===a?void 0:a.data.error_message),404===(null===(o=n.response)||void 0===o?void 0:o.status)&&d({title:i("topic.topic_not_found",{name:e}),variant:l.AlertVariant.danger}))}}))),[d,p,h,i]);(0,n.useEffect)((()=>{L(e)}),[L,e]);return v?(0,o.jsx)(f,{topic:v,deleteTopic:()=>{t(r.ModalType.KafkaDeleteTopic,{topicName:e,onDeleteTopic:y})}}):(0,o.jsx)(k.g,{})},L=({topicName:e})=>{const i=(0,n.useContext)(u.E),t=(0,n.useCallback)((({offset:t,partition:o,limit:n,timestamp:s})=>(0,a.__awaiter)(void 0,void 0,void 0,(function*(){const a=yield null==i?void 0:i.getToken(),c=new v.RecordsApi(new v.Configuration({accessToken:a,basePath:null==i?void 0:i.basePath})),{data:l}=yield c.consumeRecords(e,void 0,n,void 0,t,o,s);return l.items.map((e=>({partition:e.partition,offset:e.offset,timestamp:e.timestamp,key:e.key,value:e.value,headers:e.headers||{}})))}))),[i,e]),s=(0,n.useCallback)((()=>(0,a.__awaiter)(void 0,void 0,void 0,(function*(){var t;const a=yield null==i?void 0:i.getToken(),o=new v.TopicsApi(new v.Configuration({accessToken:a,basePath:null==i?void 0:i.basePath})),{data:n}=yield o.getTopic(e);return(null===(t=n.partitions)||void 0===t?void 0:t.length)||0}))),[i,e]),c=(0,n.useCallback)((e=>(0,a.__awaiter)(void 0,void 0,void 0,(function*(){const[i,a]=yield Promise.all([t(e),s()]);return{partitions:a,messages:i}}))),[t,s]);return(0,o.jsx)(h.KafkaMessageBrowser,{getMessages:c})}}}]);
//# sourceMappingURL=8903.a42543e4.js.map