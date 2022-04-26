"use strict";(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[8903],{43791:()=>{},55268:(e,i,t)=>{t.d(i,{g:()=>n});var a=t(85893),o=t(99922);const n=()=>(0,a.jsx)(o.Bullseye,{children:(0,a.jsx)(o.Spinner,{})})},13985:(e,i,t)=>{t.d(i,{I:()=>c});var a=t(85893),o=t(47412),n=t(99922),s=(t(43791),t(68199));const c=({topicName:e,kafkaName:i,kafkaInstanceLink:t,kafkaPageLink:c})=>{const{t:l}=(0,o.useTranslation)(["kafkaTemporaryFixMe"]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("section",Object.assign({className:"pf-c-page__main-breadcrumb"},{children:(0,a.jsxs)(n.Breadcrumb,{children:[(0,a.jsx)(n.BreadcrumbItem,{render:()=>(0,a.jsx)(s.Link,Object.assign({to:c||"#"},{children:l("common.kafka_instance")}))}),(0,a.jsx)(n.BreadcrumbItem,{render:()=>(0,a.jsx)(s.Link,Object.assign({to:t||"#"},{children:i||l("common.kafka_instance_name")}))}),(0,a.jsx)(n.BreadcrumbItem,{children:e})]})})),(0,a.jsx)(n.PageSection,Object.assign({variant:n.PageSectionVariants.light},{children:(0,a.jsx)(n.TextContent,{children:(0,a.jsx)(n.Text,Object.assign({component:n.TextVariants.h1},{children:e}))})}))]})}},8903:(e,i,t)=>{t.d(i,{o:()=>T});var a=t(9922),o=t(85893),n=t(75418),s=t(68199),c=t(47412),l=t(99922),r=t(7451),p=t(86737),d=(t(43791),t(76153)),m=t(1787);const _=({topic:e,deleteTopic:i})=>{const t=(0,s.useHistory)(),{topicName:a}=(0,s.useParams)(),{getBasename:n}=(0,r.useBasename)()||{getBasename:()=>""},_=n(),{t:f}=(0,c.useTranslation)(["kafkaTemporaryFixMe"]);return(0,o.jsx)(l.PageSection,Object.assign({padding:{default:"noPadding"}},{children:(0,o.jsxs)(l.Sidebar,Object.assign({hasGutter:!0},{children:[(0,o.jsx)(l.SidebarPanel,Object.assign({variant:"sticky"},{children:(0,o.jsxs)(l.JumpLinks,Object.assign({isVertical:!0,label:f("topic.jump_to_section"),style:{position:"sticky"},scrollableSelector:".pf-c-page__main-section.pf-m-light.pf-m-overflow-scroll"},{children:[(0,o.jsx)(l.JumpLinksItem,Object.assign({href:"#core-configuration"},{children:f("topic.core_configuration")}),0),(0,o.jsx)(l.JumpLinksItem,Object.assign({href:"#messages"},{children:f("topic.messages")}),1),(0,o.jsx)(l.JumpLinksItem,Object.assign({href:"#log"},{children:f("topic.log")}),2),(0,o.jsx)(l.JumpLinksItem,Object.assign({href:"#replication"},{children:f("topic.replication")}),3),(0,o.jsx)(l.JumpLinksItem,Object.assign({href:"#cleanup"},{children:f("common.cleanup")}),4),(0,o.jsx)(l.JumpLinksItem,Object.assign({href:"#index"},{children:f("topic.index")}),5),(0,o.jsx)(l.JumpLinksItem,Object.assign({href:"#flush"},{children:f("topic.flush")}),6),(0,o.jsx)(l.JumpLinksItem,Object.assign({href:"#delete"},{children:f("common.delete")}),7)]}))})),(0,o.jsx)(l.SidebarContent,{children:(0,o.jsx)(l.PageGroup,Object.assign({hasOverflowScroll:!0,id:"topic-detail-view",className:"pf-u-mb-4xl"},{children:(0,o.jsx)(l.PageSection,Object.assign({padding:{default:"noPadding"}},{children:(0,o.jsxs)(l.Split,{children:[(0,o.jsxs)(l.SplitItem,Object.assign({isFilled:!0},{children:[(0,o.jsxs)(l.Form,Object.assign({id:"topic-form"},{children:[(0,o.jsxs)(l.FormSection,Object.assign({title:f("topic.core_configuration"),id:"core-configuration",titleElement:"h2"},{children:[(0,o.jsx)(l.TextContent,{children:(0,o.jsx)(l.Text,Object.assign({component:l.TextVariants.p,className:"section-info"},{children:f("topic.core_config_info")}))}),(0,o.jsx)(d.R,{fieldId:"topic-name",btnAriaLabel:f("common.name"),fieldLabel:f("topic.topic_name"),fieldValue:e.name,popoverBody:f("topic.topic_name_description"),popoverHeader:f("topic.topic_name")}),(0,o.jsx)(d.R,{fieldId:"partitions",btnAriaLabel:f("topic.partitions"),fieldLabel:f("topic.partitions"),fieldValue:e.numPartitions,popoverBody:f("topic.partitions_description"),popoverHeader:f("topic.partitions")}),(0,o.jsx)(d.R,{fieldId:"replicas",btnAriaLabel:f("topic.replicas"),fieldLabel:f("topic.replicas"),fieldValue:e.replicationFactor,popoverBody:f("topic.replicas_description"),popoverHeader:f("topic.replicas")}),(0,o.jsx)(d.R,{fieldId:"min-insync-replicas",btnAriaLabel:f("topic.min_insync_replicas"),fieldLabel:f("topic.min_insync_replicas"),fieldValue:p.MO,popoverBody:f("topic.min_insync_replicas_description"),popoverHeader:f("topic.min_insync_replicas")}),(0,o.jsx)(d.R,{fieldId:"retention-time",btnAriaLabel:f("topic.retention_time"),fieldLabel:f("topic.retention_time"),fieldValue:(0,m.eA)(Number(e["retention.ms"])),popoverBody:f("topic.retention_time_description"),popoverHeader:f("topic.retention_time"),showUnlimited:!0}),(0,o.jsx)(d.R,{fieldId:"retention-size",btnAriaLabel:f("topic.retention_size"),fieldLabel:f("topic.retention_size"),fieldValue:(0,m.Cv)(Number(e["retention.bytes"])),popoverHeader:f("topic.retention_size"),popoverBody:f("topic.retention_size_description"),showUnlimited:!0})]})),(0,o.jsxs)(l.FormSection,Object.assign({title:f("topic.messages"),id:"messages",titleElement:"h2"},{children:[(0,o.jsx)(l.TextContent,{children:(0,o.jsx)(l.Text,Object.assign({component:l.TextVariants.p,className:"section-info"},{children:f("topic.message_section_info")}))}),(0,o.jsx)(d.R,{fieldId:"max-message-size",btnAriaLabel:f("topic.max_message_size"),fieldLabel:f("topic.max_message_size"),fieldValue:p._$,popoverBody:f("topic.max_message_size_description"),popoverHeader:f("topic.max_message_size")}),(0,o.jsx)(d.R,{fieldId:"message-timestamp-type",btnAriaLabel:f("topic.message_timestamp_type"),fieldLabel:f("topic.message_timestamp_type"),fieldValue:p.K,popoverBody:f("topic.message_timestamp_type_description"),popoverHeader:f("topic.message_timestamp_type")}),(0,o.jsx)(d.R,{fieldId:"max-message-timestamp-diff",btnAriaLabel:f("topic.max_message_timestamp_diff"),fieldLabel:f("topic.max_message_timestamp_diff"),fieldValue:p.Y,popoverBody:f("topic.max_message_timestamp_diff_description"),popoverHeader:f("topic.max_message_timestamp_diff")}),(0,o.jsx)(d.R,{fieldId:"compression-type",btnAriaLabel:f("topic.compression_type"),fieldLabel:f("topic.compression_type"),fieldValue:"Producer",popoverBody:f("topic.compression_type_description"),popoverHeader:f("topic.compression_type")}),(0,o.jsx)(d.R,{fieldId:"message-format",btnAriaLabel:f("topic.message_format"),fieldLabel:f("topic.message_format"),fieldValue:"2.7-IV2",popoverBody:f("topic.message_format_description"),popoverHeader:f("topic.message_format")})]})),(0,o.jsxs)(l.FormSection,Object.assign({title:f("topic.log"),id:"log",titleElement:"h2"},{children:[(0,o.jsx)(l.TextContent,{children:(0,o.jsxs)(l.Text,Object.assign({component:l.TextVariants.p},{children:[f("topic.log_section_info"),(0,o.jsx)(l.Text,Object.assign({component:l.TextVariants.small,className:"section-info-note"},{children:f("topic.log_section_info_note")}))]}))}),(0,o.jsx)(d.R,{fieldId:"cleanup-policy",btnAriaLabel:f("topic.cleanup_policy"),fieldLabel:f("topic.cleanup_policy"),fieldValue:e["cleanup.policy"],popoverBody:f("topic.cleanup_policy_description"),popoverHeader:f("topic.cleanup_policy")}),(0,o.jsx)(d.R,{fieldId:"delete-retention-time",btnAriaLabel:f("topic.delete_retention_time"),fieldLabel:f("topic.delete_retention_time"),fieldValue:p.sN,popoverBody:f("topic.delete_retention_time_description"),popoverHeader:f("topic.delete_retention_time")}),(0,o.jsx)(d.R,{fieldId:"min-cleanable-ratio",btnAriaLabel:f("topic.min_cleanable_ratio"),fieldLabel:f("topic.min_cleanable_ratio"),fieldValue:p.PT,popoverBody:f("topic.min_cleanable_ratio_description"),popoverHeader:f("topic.min_cleanable_ratio")}),(0,o.jsx)(d.R,{fieldId:"min-compaction-lag-time",btnAriaLabel:f("topic.min_compaction_lag_time"),fieldLabel:f("topic.min_compaction_lag_time"),fieldValue:p.A7,popoverBody:f("topic.min_compaction_lag_time_description"),popoverHeader:f("topic.min_compaction_lag_time")})]})),(0,o.jsxs)(l.FormSection,Object.assign({title:f("topic.replication"),id:"replication",titleElement:"h2"},{children:[(0,o.jsx)(l.TextContent,{children:(0,o.jsxs)(l.Text,Object.assign({component:l.TextVariants.p},{children:[f("topic.replication_section_info"),(0,o.jsx)(l.Text,Object.assign({component:l.TextVariants.small},{children:f("topic.replication_section_info_note")}))]}))}),(0,o.jsx)(d.R,{fieldId:"unclean-leader-election",btnAriaLabel:f("topic.unclean_leader_election"),fieldLabel:f("topic.unclean_leader_election"),fieldValue:f("common.disabled"),popoverBody:f("topic.unclean_leader_election_description"),popoverHeader:f("topic.unclean_leader_election")})]})),(0,o.jsxs)(l.FormSection,Object.assign({title:f("common.cleanup"),id:"cleanup",titleElement:"h2"},{children:[(0,o.jsx)(l.TextContent,{children:(0,o.jsx)(l.Text,Object.assign({component:l.TextVariants.p,className:"section-info"},{children:f("topic.cleanup_section_info")}))}),(0,o.jsx)(d.R,{fieldId:"log-segment-size",btnAriaLabel:f("topic.log_segment_size"),fieldLabel:f("topic.log_segment_size"),fieldValue:p.f8,popoverBody:f("topic.log_segment_size_description"),popoverHeader:f("topic.log_segment_size")}),(0,o.jsx)(d.R,{fieldId:"segement-time",btnAriaLabel:f("topic.segement_time"),fieldLabel:f("topic.segement_time"),fieldValue:p.$$,popoverBody:f("topic.segement_time_description"),popoverHeader:f("topic.segement_time")}),(0,o.jsx)(d.R,{fieldId:"segment-jitter-time",btnAriaLabel:f("topic.segment_jitter_time"),fieldLabel:f("topic.segment_jitter_time"),fieldValue:p.W$,popoverBody:f("topic.segment_jitter_time_description"),popoverHeader:f("topic.segment_jitter_time")}),(0,o.jsx)(d.R,{fieldId:"file-delete-delay",btnAriaLabel:f("topic.file_delete_delay"),fieldLabel:f("topic.file_delete_delay"),fieldValue:p.pJ,popoverBody:f("topic.file_delete_delay_description"),popoverHeader:f("topic.file_delete_delay")}),(0,o.jsx)(d.R,{fieldId:"preallocate-log-segment-files",btnAriaLabel:f("topic.preallocate_log_segment_files"),fieldLabel:f("topic.preallocate_log_segment_files"),fieldValue:f("common.disabled"),popoverBody:f("topic.preallocate_log_segment_files_description"),popoverHeader:f("topic.preallocate_log_segment_files")})]})),(0,o.jsxs)(l.FormSection,Object.assign({title:f("topic.index"),id:"index",titleElement:"h2"},{children:[(0,o.jsx)(l.TextContent,{children:(0,o.jsx)(l.Text,Object.assign({component:l.TextVariants.p,className:"section-info"},{children:f("topic.index_section_info")}))}),(0,o.jsx)(d.R,{fieldId:"index-interval-size",btnAriaLabel:f("topic.index_interval_size"),fieldLabel:f("topic.index_interval_size"),fieldValue:p.Q_,popoverBody:f("topic.index_interval_size_description"),popoverHeader:f("topic.index_interval_size")}),(0,o.jsx)(d.R,{fieldId:"segment-index-size",btnAriaLabel:f("topic.segment_index_size"),fieldLabel:f("topic.segment_index_size"),fieldValue:p.nL,popoverBody:f("topic.segment_index_size_description"),popoverHeader:f("topic.segment_index_size")})]})),(0,o.jsxs)(l.FormSection,Object.assign({title:f("topic.flush"),id:"flush",titleElement:"h2"},{children:[(0,o.jsx)(l.TextContent,{children:(0,o.jsx)(l.Text,Object.assign({component:l.TextVariants.p,className:"section-info"},{children:f("topic.flush_section_info")}))}),(0,o.jsx)(d.R,{fieldId:"flush-interval-messages",btnAriaLabel:f("topic.flush_interval_messages"),fieldLabel:f("topic.flush_interval_messages"),fieldValue:p.mr,popoverBody:f("topic.flush_interval_messages_description"),popoverHeader:f("topic.flush_interval_messages")}),(0,o.jsx)(d.R,{fieldId:"flush-interval-time",btnAriaLabel:f("topic.flush_interval_time"),fieldLabel:f("topic.flush_interval_time"),fieldValue:p.qh,popoverBody:f("topic.flush_interval_time_description"),popoverHeader:f("topic.flush_interval_time")})]}))]})),(0,o.jsx)(l.Divider,{className:"kafka-ui-divider__Margin"}),(0,o.jsxs)(l.TextContent,{children:[(0,o.jsx)(l.Text,Object.assign({component:l.TextVariants.h2,id:"delete"},{children:f("topic.delete_topic")})),(0,o.jsx)(l.Text,Object.assign({component:l.TextVariants.p,className:"section-info"},{children:f("topic.delete_topic_info")})),(0,o.jsx)(l.Button,Object.assign({variant:"danger",onClick:i,"data-testid":"tabProperties-actionDelete"},{children:f("common.delete_topic")}))]})]})),(0,o.jsx)(l.SplitItem,{children:(0,o.jsx)(l.Button,Object.assign({variant:"primary",onClick:()=>{t.push(`${_}/topic/update/${a}`)},"data-testid":"tabProperties-actionEdit"},{children:f("common.edit_props")}))})]})}))}))})]}))}))};var f=t(13985),b=t(60540),g=t(64517),x=t(3654),u=t(63850),j=t(5736),h=(t(27958),t(53376)),v=t(40011),k=t(55268);const T=()=>{const{kafkaName:e,kafkaPageLink:i,kafkaInstanceLink:t,showSchemas:a}=(0,g.S)()||{},{topicName:r}=(0,s.useParams)(),[p,d]=(0,n.useState)(1),{t:m}=(0,c.useTranslation)(["kafkaTemporaryFixMe"]),_=(0,n.createRef)(),b=(0,n.createRef)(),x=(0,n.createRef)(),j=(0,n.createRef)();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(f.I,{topicName:r,kafkaName:e,kafkaPageLink:i,kafkaInstanceLink:t}),(0,o.jsx)(l.PageSection,Object.assign({variant:l.PageSectionVariants.light,padding:{default:"noPadding"},className:"pf-c-page__main-tabs"},{children:(0,o.jsxs)(l.Tabs,Object.assign({activeKey:p,onSelect:(e,i)=>{d(i)},isBox:!1,className:"pf-m-page-insets"},{children:[(0,o.jsx)(l.Tab,{eventKey:1,"data-testid":"pageTopic-tabConsumers",title:(0,o.jsx)(l.TabTitleText,{children:m("consumerGroup.consumer_groups")}),tabContentId:"kafka-ui-TabcontentConsumerGroupList",tabContentRef:b}),(0,o.jsx)(l.Tab,{eventKey:2,"data-testid":"pageTopic-tabMessages",title:(0,o.jsx)(l.TabTitleText,{children:m("topic.messages")}),tabContentId:"kafka-ui-TabcontentMessages",tabContentRef:_}),(0,o.jsx)(l.Tab,{eventKey:3,title:(0,o.jsx)(l.TabTitleText,{children:m("common.properties")}),"data-testid":"pageTopic-tabProperties",tabContentId:"kafka-ui-TabcontentProperties",tabContentRef:x}),(0,o.jsx)(l.Tab,{eventKey:4,title:(0,o.jsx)(l.TabTitleText,{children:m("common.schemas")}),"data-testid":"pageTopic-tabSchemas",tabContentId:"kafka-ui-TabSchemas",tabContentRef:j})]}))})),(0,o.jsxs)(l.PageSection,Object.assign({variant:3===p?l.PageSectionVariants.light:l.PageSectionVariants.default,hasOverflowScroll:!0},{children:[(0,o.jsx)(l.TabContent,Object.assign({eventKey:1,id:"kafka-ui-TabcontentConsumerGroupList",ref:b,className:"kafka-ui-m-full-height","aria-label":"Consumer groups",hidden:1!=p},{children:1===p&&(0,o.jsx)(u.J,{consumerGroupByTopic:!0,topic:r,rowDataTestId:"tableTopicConsumers-row"})})),(0,o.jsx)(l.TabContent,Object.assign({eventKey:2,id:"kafka-ui-TabcontentMessages",ref:_,className:"kafka-ui-m-full-height","aria-label":"Messages",hidden:2!=p},{children:2===p&&(0,o.jsx)(L,{topicName:r})})),(0,o.jsx)(l.TabContent,Object.assign({eventKey:3,id:"kafka-ui-TabcontentProperties",ref:x,className:"kafka-ui-m-full-height","aria-label":"Topic properties",hidden:3!=p},{children:3===p&&(0,o.jsx)(y,{topicName:r})})),(0,o.jsx)(l.TabContent,Object.assign({eventKey:4,id:"kafka-ui-TabSchemas",ref:j,className:"kafka-ui-m-full-height","aria-label":"Schemas mapping",hidden:4!=p},{children:4===p&&a}))]}))]})},y=({topicName:e})=>{const{t:i}=(0,c.useTranslation)(["kafkaTemporaryFixMe"]),{showModal:t}=(0,r.useModal)(),p=(0,n.useContext)(x.E),{addAlert:d}=(0,r.useAlert)()||{addAlert:()=>{}},{getBasename:m}=(0,r.useBasename)()||{getBasename:()=>""},f=(0,s.useHistory)(),u=m(),{onError:h}=(0,g.S)()||{},[v,T]=(0,n.useState)(),y=()=>{f.push(`${u}/topics`)},L=(0,n.useCallback)((e=>(0,a.__awaiter)(void 0,void 0,void 0,(function*(){var t,a,o;try{yield(0,b.Rh)(e,p).then((e=>{T(e)}))}catch(n){(0,j.I)(n)&&(h&&h((null===(t=n.response)||void 0===t?void 0:t.data.code)||-1,null===(a=n.response)||void 0===a?void 0:a.data.error_message),404===(null===(o=n.response)||void 0===o?void 0:o.status)&&d({title:i("topic.topic_not_found",{name:e}),variant:l.AlertVariant.danger}))}}))),[d,p,h,i]);(0,n.useEffect)((()=>{L(e)}),[L,e]);return v?(0,o.jsx)(_,{topic:v,deleteTopic:()=>{t(r.ModalType.KafkaDeleteTopic,{topicName:e,onDeleteTopic:y})}}):(0,o.jsx)(k.g,{})},L=({topicName:e})=>{const i=(0,n.useContext)(x.E),t=(0,n.useCallback)((({offset:t,partition:o,limit:n,timestamp:s})=>(0,a.__awaiter)(void 0,void 0,void 0,(function*(){const a=yield null==i?void 0:i.getToken(),c=new v.RecordsApi(new v.Configuration({accessToken:a,basePath:null==i?void 0:i.basePath})),{data:l}=yield c.consumeRecords(e,void 0,n,t,o,s);return l.items.map((e=>({partition:e.partition,offset:e.offset,timestamp:e.timestamp,key:e.key,value:e.value,headers:e.headers||{}})))}))),[i,e]),s=(0,n.useCallback)((()=>(0,a.__awaiter)(void 0,void 0,void 0,(function*(){var t;const a=yield null==i?void 0:i.getToken(),o=new v.TopicsApi(new v.Configuration({accessToken:a,basePath:null==i?void 0:i.basePath})),{data:n}=yield o.getTopic(e);return(null===(t=n.partitions)||void 0===t?void 0:t.length)||0}))),[i,e]),c=(0,n.useCallback)((e=>(0,a.__awaiter)(void 0,void 0,void 0,(function*(){const[i,a]=yield Promise.all([t(e),s()]);return{partitions:a,messages:i}}))),[t,s]);return(0,o.jsx)(h.KafkaMessageBrowser,{getMessages:c})}}}]);
//# sourceMappingURL=8903.6a117a4f.js.map