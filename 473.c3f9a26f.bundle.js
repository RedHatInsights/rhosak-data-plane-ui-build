(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[473],{41781:()=>{},18416:(e,t,n)=>{"use strict";n.d(t,{Ny:()=>d,OU:()=>_,QK:()=>g});var i,o=n(97522),a=n.n(o),r=n(38936),s=n(10107),l=n(71302),c=n(26585),u=n(57473),p=n(62085),m=function(){return(m=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},d={DELETE_TOPIC:"DELETE_TOPIC",DELETE_CONSUMER_GROUP:"DELETE_CONSUMER_GROUP",UPDATE_PARTITIONS:"UPDATE_PARTITIONS"},h=((i={})[d.DELETE_TOPIC]=function(){var e=g(),t=e.store,n=e.hideModal,i=(0,o.useContext)(c.E),p=(0,r.useTranslation)().t,m=(null==t?void 0:t.modalProps)||{},d=m.topicName,h=m.onDeleteTopic,f=m.refreshTopics,_=(0,o.useState)(""),b=_[0],y=_[1],v=(0,u.useAlert)().addAlert,w=(0,o.useState)(!1),T=w[0],k=w[1],x=function(){n()};return a().createElement(s.Modal,{variant:s.ModalVariant.small,isOpen:!0,"aria-label":p("topic.delete_modal_title"),title:p("topic.delete_modal_title"),titleIconVariant:"warning",showClose:!0,"aria-describedby":"modal-message",onClose:x,actions:[a().createElement(s.Button,{variant:"danger",onClick:function(){return e=void 0,t=void 0,o=function(){var e;return function(e,t){var n,i,o,a,r={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,i&&(o=2&a[0]?i.return:a[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,a[1])).done)return o;switch(i=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return r.label++,{value:a[1],done:!1};case 5:r.label++,i=a[1],a=[0];continue;case 7:a=r.ops.pop(),r.trys.pop();continue;default:if(!((o=(o=r.trys).length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){r=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){r.label=a[1];break}if(6===a[0]&&r.label<o[1]){r.label=o[1],o=a;break}if(o&&r.label<o[2]){r.label=o[2],r.ops.push(a);break}o[2]&&r.ops.pop(),r.trys.pop();continue}a=t.call(e,r)}catch(e){a=[6,e],i=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}}(this,(function(t){switch(t.label){case 0:return t.trys.push([0,3,,4]),d?(k(!0),[4,(0,l.BK)(d,i).then((function(){v({title:p("topic.topic_successfully_deleted",{name:d}),variant:s.AlertVariant.success}),h&&h(),f&&f()}))]):[3,2];case 1:t.sent(),t.label=2;case 2:return[3,4];case 3:return e=t.sent(),k(!1),v({title:e.response.data.error_message,variant:s.AlertVariant.danger}),[3,4];case 4:return x(),[2]}}))},new((n=void 0)||(n=Promise))((function(i,a){function r(e){try{l(o.next(e))}catch(e){a(e)}}function s(e){try{l(o.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,s)}l((o=o.apply(e,t||[])).next())}));var e,t,n,o},key:1,"data-testid":"modalDeleteTopic-buttonDelete",isDisabled:"DELETE"!=b.toUpperCase(),isLoading:T},p("common.delete")),a().createElement(s.Button,{variant:"link",onClick:x,key:2},p("common.cancel"))]},a().createElement(s.Text,{id:"modal-message"}," ",a().createElement("label",{htmlFor:"instance-name-input",dangerouslySetInnerHTML:{__html:p("common.confirm_delete_modal_text",{name:d})}})),a().createElement("br",null),a().createElement("label",{htmlFor:"delete-text-input"},p("common.confirm_delete")),a().createElement(s.TextInput,{value:b,id:"delete-text-input",name:"delete-text-input",type:"text",onChange:function(e){y(e)},autoFocus:!0}))},i[d.DELETE_CONSUMER_GROUP]=function(){var e=(0,r.useTranslation)().t,t=(0,o.useContext)(c.E),n=g(),i=n.store,l=n.hideModal,m=(null==i?void 0:i.modalProps)||{},d=m.consumerName,h=m.refreshConsumerGroups,f=(0,o.useState)(""),_=f[0],b=f[1],y=(0,u.useAlert)().addAlert,v=function(){l()};return a().createElement(s.Modal,{variant:s.ModalVariant.small,isOpen:!0,"aria-label":e("consumerGroup.delete"),title:e("consumerGroup.delete"),titleIconVariant:"warning",showClose:!0,"aria-describedby":"modal-message",onClose:v,actions:[a().createElement(s.Button,{variant:"danger",onClick:function(){return n=void 0,i=void 0,a=function(){var n;return function(e,t){var n,i,o,a,r={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,i&&(o=2&a[0]?i.return:a[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,a[1])).done)return o;switch(i=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return r.label++,{value:a[1],done:!1};case 5:r.label++,i=a[1],a=[0];continue;case 7:a=r.ops.pop(),r.trys.pop();continue;default:if(!((o=(o=r.trys).length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){r=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){r.label=a[1];break}if(6===a[0]&&r.label<o[1]){r.label=o[1],o=a;break}if(o&&r.label<o[2]){r.label=o[2],r.ops.push(a);break}o[2]&&r.ops.pop(),r.trys.pop();continue}a=t.call(e,r)}catch(e){a=[6,e],i=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}}(this,(function(i){switch(i.label){case 0:return i.trys.push([0,3,,4]),d?[4,(0,p.v)(d,t).then((function(){y({variant:s.AlertVariant.success,title:e("consumerGroup.consumergroup_successfully_deleted",{name:d})}),h&&h()}))]:[3,2];case 1:i.sent(),i.label=2;case 2:return[3,4];case 3:return n=i.sent(),y({variant:s.AlertVariant.danger,title:n.response.data.error_message}),[3,4];case 4:return v(),[2]}}))},new((o=void 0)||(o=Promise))((function(e,t){function r(e){try{l(a.next(e))}catch(e){t(e)}}function s(e){try{l(a.throw(e))}catch(e){t(e)}}function l(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(r,s)}l((a=a.apply(n,i||[])).next())}));var n,i,o,a},key:1,isDisabled:"DELETE"!=_.toUpperCase()},e("common.delete")),a().createElement(s.Button,{variant:"link",onClick:v,key:2},e("common.cancel"))]},a().createElement(s.Text,{id:"modal-message"},a().createElement("label",{htmlFor:"instance-name-input",dangerouslySetInnerHTML:{__html:e("common.confirm_delete_modal_text",{name:d})}})),a().createElement("br",null),a().createElement("label",{htmlFor:"delete-text-input"},e("common.confirm_delete")),a().createElement(s.TextInput,{value:_,id:"delete-text-input",name:"delete-text-input",type:"text",onChange:function(e){b(e)},autoFocus:!0}))},i[d.UPDATE_PARTITIONS]=function(){var e=g(),t=e.store,n=e.hideModal,i=((null==t?void 0:t.modalProps)||{}).onSaveTopic,o=function(){n()};return a().createElement(s.Modal,{variant:s.ModalVariant.small,isOpen:!0,"aria-label":"Confirm change of partitions",title:"Increase the number of partitions?",titleIconVariant:"warning",showClose:!0,"aria-describedby":"modal-message",onClose:o,actions:[a().createElement(s.Button,{variant:"primary",onClick:i,key:1},"Yes"),a().createElement(s.Button,{variant:"link",onClick:o,key:2},"No, return to form")]},"Messages might have the same key from two different partitions, which can potentially break the message ordering guarantees that apply to a single partition.")},i),f=(0,o.createContext)({showModal:function(){return""},hideModal:function(){return""},store:""}),g=function(){return(0,o.useContext)(f)},_=function(e){var t,n=e.children,i=(0,o.useState)(),r=i[0],s=i[1],l=r||{modalType:"",modalProps:""},c=l.modalType,u=l.modalProps;return a().createElement(f.Provider,{value:{store:r,showModal:function(e,t){var n=Object.assign({},r);s({newState:n,modalType:e,modalProps:t})},hideModal:function(){var e=Object.assign({},r);s({newState:e,modalType:null,modalProps:""})}}},(t=h[c],c&&t?a().createElement(t,m({id:"root-modal"},u)):null),n)}},26585:(e,t,n)=>{"use strict";n.d(t,{E:()=>o});var i=n(97522),o=n.n(i)().createContext(void 0)},37009:(e,t,n)=>{"use strict";n.d(t,{J:()=>o,S:()=>a});var i=n(97522),o=n.n(i)().createContext({onConnectToRoute:function(){return""},getConnectToRoutePath:function(){return""},activeTab:0,kafkaName:"",kafkaPageLink:"",kafkaInstanceLink:"",topicName:"",onError:function(){return""},handleInstanceDrawer:function(){return""},setIsOpenDeleteInstanceModal:function(){return""},dispatchKafkaAction:function(){return""}}),a=function(){return(0,i.useContext)(o)}},26302:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var i=n(25948),o=n.n(i),a=n(38936),r=n(16486),s=n.n(r),l={en:{translation:JSON.parse('{"common":{"delete":"Delete","next":"Next","back":"Back","edit":"Edit","name":"Name","replicas":"Replicas","partitions":"Partitions","search":"Search","cancel":"Cancel","compact":"Compact","save":"Save","finish":"Finish","cleanup":"Cleanup","disabled":"Disabled","select_unit":"select unit from dropdown","select_policy":"select policy type from dropdown","action":"Action","properties":"Properties","edit_props":"Edit properties","delete_topic":"Delete topic","error_boundary_title":"Something went wrong","unexpected_error":"There was a problem processing the request. Please try again.","return_to_home":"Return to home","red_hat_logo":"Red Hat logo","kafka_instance":"Kafka instances","kafka_instance_name":"Kafka instance name","confirm_delete":"Type DELETE to confirm:","confirm_delete_modal_text":"<b>{{name}}</b> will be deleted.","no_results_title":"No results found","no_results_body":"No results match the filter criteria. Remove filter or clear all filters to show results.","clear_filters":"Clear all filters","minimal_pagination":"Minimal pagination","full_pagination":"Full pagination","per_page_suffix":"per page","to_first_page":"Go to first page","to_previous_page":"Go to previous page","to_last_page":"Go to last page","to_next_page":"Go to next page","options_toggle":"Items per page","curr_page":"Current page","view_instance":"View details","view_connection":"View connection information","delete_instance":"Delete instance"},"topic":{"topics":"Topics","topic":"Topic","empty_topics_title":"No topics yet","empty_topics_body":"Create a topic by clicking the button below to get started.","core_configuration":"Core configuration","flush":"Flush","index":"Index","log":"Log","messages":"Messages","replication":"Replication","jump_to_section":"JUMP TO SECTION","topic_list_table":"Topic list table","topic_search_input":"Topic search input","topic_search":"Search topics button","empty_list_head":"No topics yet","empty_list_body":"Create a topic by clicking the button below to get started.","no_result_head":"No results found","no_result_body":"No result match the filter criteria. Remove filter or clear all filters to show results.","delete_modal_title":"Delete topic?","create_topic":"Create topic","enter_name":"Enter topic name","topic_name":"Topic name","topic_name_description":"Topic name is the unique identifier for this topic within this cluster. You need this to set up your producers and consumers, so make it something memorable.","topic_name_helper_text":"Must be letters (Aa-Zz), numbers, underscores ( _ ), periods ( . ), or hyphens ( - )","topic_not_found":"Topic {{name}} does not exist","partitions":"Partitions","partitions_description":"Partitions are distinct lists of messages within a topic. Partitions are the main concurrency mechanism in Kafka and enable parts of a topic to be distributed over multiple brokers in the cluster.  A topic can contain one or more partitions, enabling producer and consumer loads to be scaled. The number of partitions in a topic cannot be changed once the topic is created. (num.partitions)","replicas":"Replicas","replicas_description":"Replicas are copies of partitions in a topic. Partition replicas are distributed over multiple brokers in the cluster to ensure topic availability if a broker fails. When a follower replica is in sync with a partition leader, the follower replica can become the new partition leader if needed. (replication.factor)","min_insync_replicas":"Minimum in-sync replicas","min_insync_replicas_description":"Minimum in-sync replicas is the minimum number of replicas that must acknowledge a write for the write to be considered successful. This property assumes that the producer requests acknowledgements from all replicas (`acks` set to `all`). If this minimum is not met, the producer raises an exception (`NotEnoughReplicas` or `NotEnoughReplicasAfterAppend`). Typically you create a topic with a replication factor of 3, set `min.insync.replicas` to 2, and set the producer `acks` to `all`.(min.insync.replicas)","retention_time":"Retention time","retention_time_description":"Retention time is the amount of time that messages are retained in a topic before they are deleted. This property applies only when the topic cleanup policy is set to `delete` or `compact, delete`. (retention.ms)","max_message_size":"Maximum message size","max_message_size_description":"Maximum message bytes is the maximum record batch size. (max.message.bytes)","message_timestamp_type":"Message timestamp type","message_timestamp_type_description":"Message timestamp type determines whether the timestamp is generated when the message is created (`CreateTime`) or when the message is appended to the log (`LogAppendTime`). (message.timestamp.type)","max_message_timestamp_diff":"Maximum message timestamp difference","max_message_timestamp_diff_description":"Maximum message timestamp difference is the maximum difference allowed between the timestamp specified in the message when it leaves the producer and the timestamp recorded when a broker receives the message. (message.timestamp.difference.max.ms)","compression_type":"Compression type","compression_type_description":"Compression type determines the final compression for the topic. The `producer` compression type retains the original compression set by the producer. (compression.type)","message_format":"Message format version","message_format_description":"Message format version is the `ApiVersion` value that the broker uses to append messages to topics. This value must be a valid `ApiVersion` value, such as 0.8.2, 0.9.0.0, or 0.10.0. (message.format.version)","cleanup_policy":"Cleanup policy","cleanup_policy_description":"Cleanup policy determines whether log messages are deleted, compacted, or both. With the `compact, delete` option, log segments are first compacted and then deleted according to the retention time or size limit settings. (cleanup.policy)","retention_size":"Retention size","retention_size_description":"Retention size is the maximum total size of all log segments in a partition before old log segments are deleted to free up space. By default, no retention size limit is applied, only a retention time limit. This property applies only when the topic cleanup policy is set to `delete` or `compact, delete`. (retention.bytes)","log_segment_size":"Log segment size","log_segment_size_description":"Log segment size is the size of the log segment files. Log processing actions, such as deletion and compaction, operate on log segments, so a larger setting results in fewer files but less frequent log processing. (segment.bytes)","unclean_leader_election":"Unclean leader election","unclean_leader_election_description":"Unclean leader election allows a follower replica that is not in sync with the partition leader to become the leader of the partition. This property provides a way to retain at least partial data if partition leaders are jeopardized. However, this property can lead to data loss, so it\'s disabled by default. (unclean.leader.election.enable)","follower_replication_throttled_replicas":"Follower replication throttled replicas","follower_replication_throttled_replicas_description":"Follower replication throttled replicas is a list of the replicas that replication should be throttled for among followers. You can use this to limit the network bandwidth consumed by replication. (follower.replication.throttled.replicas)","leader_replication_throttled_replicas":"Leader replication throttled replicas","leader_replication_throttled_replicas_description":"Leader replication throttled replicas is a list of the replicas that replication should be throttled for among partition leaders. You can use this to limit the network bandwidth consumed by replication. (leader.replication.throttled.replicas)","delete_retention_time":"Delete retention time","delete_retention_time_description":"Delete retention milliseconds is the amount of time that deletion tombstone markers are retained if the topic is compacted. (delete.retention.ms)","min_cleanable_ratio":"Minimum cleanable dirty ratio","min_cleanable_ratio_description":"Minimum cleanable dirty ratio is the ratio of entries in the log that can be compacted versus entries that cannot be compacted. When this ratio is reached, the eligible messages in the log are compacted. By default, the ratio is 0.5 or 50%, meaning that messages are compacted after at least half of the log messages are eligible. This property applies only when the topic cleanup policy is set to `compact` or `compact, delete`. (min.cleanable.dirty.ratio)","min_compaction_lag_time":"Minimum compaction lag time","min_compaction_lag_time_description":"Minimum compaction lag time is the minimum time a message remains uncompacted in a log. This property applies only when the topic cleanup policy is set to `compact` or `compact, delete`. (min.compaction.lag.ms)","segement_time":"Segment time","segement_time_description":"Segment time is the amount of time after which the current log segment is rolled even if the segment file is not full. This property ensures that the topic cleanup policy can delete or compact old messages as needed. (segment.ms)","segment_jitter_time":"Segment jitter time","segment_jitter_time_description":"Segment jitter time is the maximum delay for log segment rolling. This delay prevents bursts of log segment rolling activity. (segment.jitter.ms)","file_delete_delay":"File delete delay","file_delete_delay_description":"File delete delay is the amount of time that a file is retained in the system before the file is deleted. (file.delete.delay.ms)","preallocate_log_segment_files":"Preallocate log segment files","preallocate_log_segment_files_description":"Preallocate log segment files determines whether to preallocate the file on disk when creating a new log segment. This property ensures sufficient disk space for log segments. (preallocate)","index_interval_size":"Index interval size","index_interval_size_description":"Index interval bytes is the number of bytes between each index entry to its offset index. The default setting indexes a message about every 4096 bytes. More indexing enables reads to be closer to the exact position in the log but makes the index larger. You typically do not need to change this setting. (index.interval.bytes)","segment_index_size":"Segment index size","segment_index_size_description":"Segment index bytes is the size of the index that maps offset to file positions. You typically do not need to change this setting. (segment.index.bytes)","flush_interval_messages":"Flush interval messages","flush_interval_messages_description":"Flush interval messages is the number of messages between each data flush to the log. (flush.messages)","flush_interval_time":"Flush interval time","flush_interval_time_description":"Flush interval time is the amount of time between each data flush to the log. (flush.ms)","message_retention":"Message retention","message_retention_info":"How long messages are retained and the maximum total size of all log segments in a partition before they are deleted to free up space","message_retention_info_note":"Messages that aren\'t read by a consumer within this time will be missed. By default, a limit is only applied to retention time.","topic_name_info":"Unique name used to recognize your topic","topic_name_info_note":"The topic name is also used by your producers and consumers as part of the connection information, so make it something easy to recognize.","partition_info":"An ordered list of messages","partition_info_note":"One or more partitions make up a topic. Partitions are distributed across the brokers to increase the scalability of your topic. You can also use them to distribute messages across the members of the consumer group.","partition_helper_text":"One partition is sufficient for getting started, but production systems often have more.","replicas_info":"How many copies of a topic will be made for high availability.","replicas_detail":"The partitions of each topic can be replicated across a configurable number of brokers.","replicas_helper_text":"Streams for Apache Kafka only supports 3 replicas and a minimum in-sync replica factor of 2.","core_config_info":"Before deploying your topic, we recommend entering all core configuration details.","message_section_info":"Control how your messages will be handled in the Kafka instance.","log_section_info":"Define how your log is handled.","log_section_info_note":"Note: Messages are continually appended to the partition’s log and assigned their offset.","replication_section_info":"Control the behavior of your replicas.","replication_section_info_note":"Note: Each parameter impacts every replica created in this topic.","cleanup_section_info":"Control the cleanup processing of the log.","index_section_info":"Control the indexing of the log.","flush_section_info":"Control the frequency of the flushing of the log.","delete_topic":"Delete topic (irreversible)","delete_topic_info":"This permanently removes this topic from this instance. Applications will no longer have access to this topic.","wizard_title":"Create topics wizard","show_all_options":"Show all available options","topic_successfully_created":"The topic was successfully created in the Kafka instance","topic_successfully_updated":"The topic was successfully updated in the Kafka instance","topic_successfully_deleted":"Successfully deleted topic {{name}}","partitions_warning":"Increasing a topic\'s partitions might result in messages having the same key from two different partitions, which can potentially break the message ordering guarantees that apply to a single partition","required":"Required","already_exists":"{{name}} already exists. Try a different name","cannot_exceed_characters":"Cannot exceed 249 characters","invalid_name_with_dot":"Topic name cannot be `.` or `..`"},"consumerGroup":{"consumer_groups":"Consumer groups","consumer_group_id":"Consumer group ID","consumer_group_list":"Consumer group list","consumer_group_search_input":"Consumer group search input","consumer_group_search":"Search consumer group button","active_members":"Active members","partitions_with_lag":"Partitions with lag","uncosumed_partitions":"Unconsumed partitions","uncosumed_partitions_for_topic":"Unconsumed partitions for this topic","state":"State","partition":"Partition","client_id":"Client ID","member_id":"Member ID","consumer_id":"Consumer ID","current_offset":"Current offset","log_end_offset":"Log end offset","offset_lag":"Offset lag","reset_offset":"Reset offset","topic_table_aria":"table for consumer groups by topic","consumer_group_info_table_aria":"table for consumer group details","delete":"Delete consumer group?","consumergroup_successfully_deleted":"Successfully deleted consumer group {{name}}","search":"Search consumer groups","no_result":"No consumer groups found","empty_list":"No consumer groups yet","empty_consumer_title":"No consumer groups","view_partitions_offsets":"View partition offsets","empty_consumer_body":"When configuring an application client to access Kafka, assign a group ID to associate the consumer with a consumer group."}}')},de:{translation:JSON.parse('{"home":{"basic":"DE Welcome to the Strimzi UI","insert":"DE This includes an {{insert}}","formatted":"DE This includes <strong>formatting</strong>","formattedInsert":"DE This includes a formatted <strong>{{insert}}</strong> and {{another}}","customInserts":"DE This paragraph contains multiple inserts. First {{insert}} is a <0>div with a classname</0>. Second is <1>bold</1>. Third is <2>italic</2>. Finally there is a <3>link</3>.","customContent":"DE This is <0>Something</0>"}}')}},c=o().createInstance();c.use(a.initReactI18next).use(s()).init({detection:{order:["htmlTag","navigator"],caches:[]},fallbackLng:"en",debug:!0,interpolation:{escapeValue:!1},resources:l});const u=c},62085:(e,t,n)=>{"use strict";n.d(t,{e5:()=>s,v:()=>l});var i=n(28696),o=n(72721),a=function(e,t,n,i){return new(n||(n=Promise))((function(o,a){function r(e){try{l(i.next(e))}catch(e){a(e)}}function s(e){try{l(i.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,s)}l((i=i.apply(e,t||[])).next())}))},r=function(e,t){var n,i,o,a,r={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,i&&(o=2&a[0]?i.return:a[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,a[1])).done)return o;switch(i=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return r.label++,{value:a[1],done:!1};case 5:r.label++,i=a[1],a=[0];continue;case 7:a=r.ops.pop(),r.trys.pop();continue;default:if(!((o=(o=r.trys).length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){r=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){r.label=a[1];break}if(6===a[0]&&r.label<o[1]){r.label=o[1],o=a;break}if(o&&r.label<o[2]){r.label=o[2],r.ops.push(a);break}o[2]&&r.ops.pop(),r.trys.pop();continue}a=t.call(e,r)}catch(e){a=[6,e],i=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}},s=function(e,t,n,s,l,c,u,p,m){return void 0===p&&(p=o.SortByDirection.asc),a(void 0,void 0,void 0,(function(){var o;return r(this,(function(a){switch(a.label){case 0:return[4,null==e?void 0:e.getToken()];case 1:return o=a.sent(),[4,new i.DefaultApi(new i.Configuration({accessToken:o,basePath:null==e?void 0:e.basePath})).getConsumerGroups(t,n,s,l,c,u,p,m)];case 2:return[2,a.sent().data]}}))}))},l=function(e,t){return a(void 0,void 0,void 0,(function(){var n;return r(this,(function(o){switch(o.label){case 0:return[4,null==t?void 0:t.getToken()];case 1:return n=o.sent(),[4,new i.DefaultApi(new i.Configuration({accessToken:n,basePath:null==t?void 0:t.basePath})).deleteConsumerGroupById(e)];case 2:return o.sent(),[2]}}))}))}},71302:(e,t,n)=>{"use strict";n.d(t,{BB:()=>l,Rh:()=>c,eR:()=>p,BN:()=>m,BK:()=>d});var i,o=n(28696),a=n(72721),r=function(e,t,n,i){return new(n||(n=Promise))((function(o,a){function r(e){try{l(i.next(e))}catch(e){a(e)}}function s(e){try{l(i.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,s)}l((i=i.apply(e,t||[])).next())}))},s=function(e,t){var n,i,o,a,r={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,i&&(o=2&a[0]?i.return:a[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,a[1])).done)return o;switch(i=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return r.label++,{value:a[1],done:!1};case 5:r.label++,i=a[1],a=[0];continue;case 7:a=r.ops.pop(),r.trys.pop();continue;default:if(!((o=(o=r.trys).length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){r=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){r.label=a[1];break}if(6===a[0]&&r.label<o[1]){r.label=o[1],o=a;break}if(o&&r.label<o[2]){r.label=o[2],r.ops.push(a);break}o[2]&&r.ops.pop(),r.trys.pop();continue}a=t.call(e,r)}catch(e){a=[6,e],i=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}};!function(e){e.name="name",e.partitions="partitions",e.retentionMs="retention.ms",e.retentionSize="retention.bytes"}(i||(i={}));var l=function(e,t,n,i,l,c,u){return void 0===c&&(c=a.SortByDirection.asc),r(void 0,void 0,void 0,(function(){var a;return s(this,(function(r){switch(r.label){case 0:return[4,null==e?void 0:e.getToken()];case 1:return a=r.sent(),[4,new o.DefaultApi(new o.Configuration({accessToken:a,basePath:null==e?void 0:e.basePath})).getTopics(l,t,n,i,void 0,c,u)];case 2:return[2,r.sent().data]}}))}))},c=function(e,t){return r(void 0,void 0,void 0,(function(){var n,i;return s(this,(function(a){switch(a.label){case 0:return[4,null==t?void 0:t.getToken()];case 1:return n=a.sent(),[4,new o.DefaultApi(new o.Configuration({accessToken:n,basePath:null==t?void 0:t.basePath})).getTopic(e)];case 2:return i=a.sent().data,[2,u(i)]}}))}))},u=function(e){var t,n,i={};return i.name=e.name,null===(t=e.config)||void 0===t||t.forEach((function(e){e.key&&(i[e.key]=e.value)})),i.numPartitions=(null===(n=null==e?void 0:e.partitions)||void 0===n?void 0:n.length)||0,i},p=function(e,t,n){return r(void 0,void 0,void 0,(function(){var i;return s(this,(function(a){switch(a.label){case 0:return[4,null==n?void 0:n.getToken()];case 1:return i=a.sent(),[4,new o.DefaultApi(new o.Configuration({accessToken:i,basePath:null==n?void 0:n.basePath})).updateTopic(e,t)];case 2:return[2,a.sent().status]}}))}))},m=function(e,t){return r(void 0,void 0,void 0,(function(){var n,i,a,r,l,c;return s(this,(function(s){switch(s.label){case 0:return[4,null==t?void 0:t.getToken()];case 1:return n=s.sent(),[4,new o.DefaultApi(new o.Configuration({accessToken:n,basePath:null==t?void 0:t.basePath})).getTopic(e)];case 2:return i=s.sent(),(a=i.data).config=a.config||[],a.config.push({key:"replicationFactor",value:null===(c=null===(l=null===(r=i.data)||void 0===r?void 0:r.partitions)||void 0===l?void 0:l.map((function(e){var t;return null===(t=e.replicas)||void 0===t?void 0:t.length})).reduce((function(e,t){return void 0===e&&(e=0),void 0===t&&(t=0),e+t})))||void 0===c?void 0:c.toString()}),[2,i.data]}}))}))},d=function(e,t){return r(void 0,void 0,void 0,(function(){var n;return s(this,(function(i){switch(i.label){case 0:return[4,null==t?void 0:t.getToken()];case 1:return n=i.sent(),[4,new o.DefaultApi(new o.Configuration({accessToken:n,basePath:null==t?void 0:t.basePath})).deleteTopic(e)];case 2:return i.sent(),[2]}}))}))}},53555:(e,t,n)=>{"use strict";var i;n.d(t,{wT:()=>i,B4:()=>o,yI:()=>a}),function(e){e.ViewTopics="ViewTopics",e.CreateTopic="CreateTopic",e.DetailsTopic="DetailsTopic",e.UpdateTopic="UpdateTopic"}(i||(i={}));var o=function(e){var t;return-1===e?"Unlimited":e<6e4?1===e?e+" millisecond":e+" milliseconds":e>=6e4&&e<36e5?(t=e/6e4,1==(t=Math.round(100*t)/100)?t+" minute":t+" minutes"):e>=36e5&&e<1728e5?(t=e/36e5,1==(t=Math.round(100*t)/100)?t+" hour":t+" hours"):e>=1728e5?(t=e/864e5,(t=Math.round(100*t)/100)+" days"):e.toString()},a=function(e){var t;return-1===e?"Unlimited":Math.abs(e)<1e3?1===e?e+" byte":e+" bytes":Math.abs(e)>=1e3&&Math.abs(e)<1e6?1==(t=e/1e3)?t+" kilobyte":t+" kilobytes":Math.abs(e)>=1e6&&Math.abs(e)<1e9?1==(t=e/1e6)?t+" megabyte":t+" megabytes":Math.abs(e)>=1e9&&Math.abs(e)<1e12?1==(t=e/1e9)?t+" gigabyte":t+" gigabytes":Math.abs(e)>=1e12?1==(t=e/1e12)?t+" terabyte":t+" terabytes":e.toString()}}}]);
//# sourceMappingURL=473.c3f9a26f.bundle.js.map