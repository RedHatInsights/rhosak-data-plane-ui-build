"use strict";(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[5380],{35380:(e,t,i)=>{i.d(t,{Z:()=>p});var s=i(45113),o=i.n(s),a=i(31521),n=i(16486),r=i.n(n);var c={en:{translation:JSON.parse('{"common":{"delete":"Delete","next":"Next","back":"Back","edit":"Edit","name":"Name","replicas":"Replicas","partitions":"Partitions","search":"Search","cancel":"Cancel","compact":"Compact","save":"Save","finish":"Finish","cleanup":"Cleanup","disabled":"Disabled","select":"Select","select_unit":"select unit from dropdown","select_policy":"select policy type from dropdown","action":"Action","properties":"Properties","edit_props":"Edit properties","delete_topic":"Delete topic","error_boundary_title":"Something went wrong","unexpected_error":"There was a problem processing the request. Please try again.","return_to_home":"Return to home","red_hat_logo":"Red Hat logo","kafka_instance":"Kafka Instances","kafka_instance_name":"Kafka instance name","confirm_delete":"Type DELETE to confirm:","confirm_delete_modal_text":"<b>{{name}}</b> will be deleted.","no_results_title":"No results found","no_results_body":"No results match the filter criteria. Remove filter or clear all filters to show results.","clear_filters":"Clear all filters","minimal_pagination":"Minimal pagination","full_pagination":"Full pagination","per_page_suffix":"per page","to_first_page":"Go to first page","to_previous_page":"Go to previous page","to_last_page":"Go to last page","to_next_page":"Go to next page","options_toggle":"Items per page","curr_page":"Current page","view_instance":"Details","view_connection":"Connection","delete_instance":"Delete","schemas":"Schemas"},"dashboard":{"dashboard":"Dashboard"},"topic":{"topics":"Topics","topic":"Topic","empty_topics_title":"No topics yet","empty_topics_body":"Create a topic by clicking the button below to get started.","core_configuration":"Core configuration","flush":"Flush","index":"Index","log":"Log","messages":"Messages","replication":"Replication","jump_to_section":"JUMP TO SECTION","topic_list_table":"Topic list table","topic_search_input":"Topic search input","topic_search":"Search topics button","empty_list_head":"No topics yet","empty_list_body":"Create a topic by clicking the button below to get started.","no_result_head":"No results found","no_result_body":"No result match the filter criteria. Remove filter or clear all filters to show results.","delete_modal_title":"Delete topic?","create_topic":"Create topic","enter_name":"Enter topic name","topic_name":"Topic name","topic_name_description":"Topic name is the unique identifier for this topic within this cluster. You need this to set up your producers and consumers, so make it something memorable.","topic_name_helper_text":"Must be letters (Aa-Zz), numbers, underscores ( _ ), periods ( . ), or hyphens ( - )","topic_not_found":"Topic {{name}} does not exist","partitions":"Partitions","partitions_description":"Partitions are distinct lists of messages within a topic. Partitions are the main concurrency mechanism in Kafka and enable parts of a topic to be distributed over multiple brokers in the cluster.  A topic can contain one or more partitions, enabling producer and consumer loads to be scaled. The number of partitions in a topic cannot be changed once the topic is created. (num.partitions)","replicas":"Replicas","replicas_description":"Replicas are copies of partitions in a topic. Partition replicas are distributed over multiple brokers in the cluster to ensure topic availability if a broker fails. When a follower replica is in sync with a partition leader, the follower replica can become the new partition leader if needed. (replication.factor)","min_insync_replicas":"Minimum in-sync replicas","min_insync_replicas_description":"Minimum in-sync replicas is the minimum number of replicas that must acknowledge a write for the write to be considered successful. This property assumes that the producer requests acknowledgements from all replicas (`acks` set to `all`). If this minimum is not met, the producer raises an exception (`NotEnoughReplicas` or `NotEnoughReplicasAfterAppend`). Typically you create a topic with a replication factor of 3, set `min.insync.replicas` to 2, and set the producer `acks` to `all`.(min.insync.replicas)","retention_time":"Retention time","retention_time_description":"Retention time is the amount of time that messages are retained in a topic before they are deleted. This property applies only when the topic cleanup policy is set to `delete` or `compact, delete`. (retention.ms)","max_message_size":"Maximum message size","max_message_size_description":"Maximum message bytes is the maximum record batch size. (max.message.bytes)","message_timestamp_type":"Message timestamp type","message_timestamp_type_description":"Message timestamp type determines whether the timestamp is generated when the message is created (`CreateTime`) or when the message is appended to the log (`LogAppendTime`). (message.timestamp.type)","max_message_timestamp_diff":"Maximum message timestamp difference","max_message_timestamp_diff_description":"Maximum message timestamp difference is the maximum difference allowed between the timestamp specified in the message when it leaves the producer and the timestamp recorded when a broker receives the message. (message.timestamp.difference.max.ms)","compression_type":"Compression type","compression_type_description":"Compression type determines the final compression for the topic. The `producer` compression type retains the original compression set by the producer. (compression.type)","message_format":"Message format version","message_format_description":"Message format version is the `ApiVersion` value that the broker uses to append messages to topics. This value must be a valid `ApiVersion` value, such as 0.8.2, 0.9.0.0, or 0.10.0. (message.format.version)","cleanup_policy":"Cleanup policy","cleanup_policy_description":"Cleanup policy determines whether log messages are deleted, compacted, or both. With the `compact, delete` option, log segments are first compacted and then deleted according to the retention time or size limit settings. (cleanup.policy)","retention_size":"Retention size","retention_size_description":"Retention size is the maximum total size of all log segments in a partition before old log segments are deleted to free up space. By default, no retention size limit is applied, only a retention time limit. This property applies only when the topic cleanup policy is set to `delete` or `compact, delete`. (retention.bytes)","log_segment_size":"Log segment size","log_segment_size_description":"Log segment size is the size of the log segment files. Log processing actions, such as deletion and compaction, operate on log segments, so a larger setting results in fewer files but less frequent log processing. (segment.bytes)","unclean_leader_election":"Unclean leader election","unclean_leader_election_description":"Unclean leader election allows a follower replica that is not in sync with the partition leader to become the leader of the partition. This property provides a way to retain at least partial data if partition leaders are jeopardized. However, this property can lead to data loss, so it\'s disabled by default. (unclean.leader.election.enable)","follower_replication_throttled_replicas":"Follower replication throttled replicas","follower_replication_throttled_replicas_description":"Follower replication throttled replicas is a list of the replicas that replication should be throttled for among followers. You can use this to limit the network bandwidth consumed by replication. (follower.replication.throttled.replicas)","leader_replication_throttled_replicas":"Leader replication throttled replicas","leader_replication_throttled_replicas_description":"Leader replication throttled replicas is a list of the replicas that replication should be throttled for among partition leaders. You can use this to limit the network bandwidth consumed by replication. (leader.replication.throttled.replicas)","delete_retention_time":"Delete retention time","delete_retention_time_description":"Delete retention milliseconds is the amount of time that deletion tombstone markers are retained if the topic is compacted. (delete.retention.ms)","min_cleanable_ratio":"Minimum cleanable dirty ratio","min_cleanable_ratio_description":"Minimum cleanable dirty ratio is the ratio of entries in the log that can be compacted versus entries that cannot be compacted. When this ratio is reached, the eligible messages in the log are compacted. By default, the ratio is 0.5 or 50%, meaning that messages are compacted after at least half of the log messages are eligible. This property applies only when the topic cleanup policy is set to `compact` or `compact, delete`. (min.cleanable.dirty.ratio)","min_compaction_lag_time":"Minimum compaction lag time","min_compaction_lag_time_description":"Minimum compaction lag time is the minimum time a message remains uncompacted in a log. This property applies only when the topic cleanup policy is set to `compact` or `compact, delete`. (min.compaction.lag.ms)","segement_time":"Segment time","segement_time_description":"Segment time is the amount of time after which the current log segment is rolled even if the segment file is not full. This property ensures that the topic cleanup policy can delete or compact old messages as needed. (segment.ms)","segment_jitter_time":"Segment jitter time","segment_jitter_time_description":"Segment jitter time is the maximum delay for log segment rolling. This delay prevents bursts of log segment rolling activity. (segment.jitter.ms)","file_delete_delay":"File delete delay","file_delete_delay_description":"File delete delay is the amount of time that a file is retained in the system before the file is deleted. (file.delete.delay.ms)","preallocate_log_segment_files":"Preallocate log segment files","preallocate_log_segment_files_description":"Preallocate log segment files determines whether to preallocate the file on disk when creating a new log segment. This property ensures sufficient disk space for log segments. (preallocate)","index_interval_size":"Index interval size","index_interval_size_description":"Index interval bytes is the number of bytes between each index entry to its offset index. The default setting indexes a message about every 4096 bytes. More indexing enables reads to be closer to the exact position in the log but makes the index larger. You typically do not need to change this setting. (index.interval.bytes)","segment_index_size":"Segment index size","segment_index_size_description":"Segment index bytes is the size of the index that maps offset to file positions. You typically do not need to change this setting. (segment.index.bytes)","flush_interval_messages":"Flush interval messages","flush_interval_messages_description":"Flush interval messages is the number of messages between each data flush to the log. (flush.messages)","flush_interval_time":"Flush interval time","flush_interval_time_description":"Flush interval time is the amount of time between each data flush to the log. (flush.ms)","message_retention":"Message retention","message_retention_info":"How long messages are retained and the maximum total size of all log segments in a partition before they are deleted to free up space","message_retention_info_note":"Messages that aren\'t read by a consumer within this time will be missed. By default, a limit is only applied to retention time.","topic_name_info":"Unique name used to recognize your topic","topic_name_info_note":"The topic name is also used by your producers and consumers as part of the connection information, so make it something easy to recognize.","partition_info":"An ordered list of messages","partition_info_note":"One or more partitions make up a topic. Partitions are distributed across the brokers to increase the scalability of your topic. You can also use them to distribute messages across the members of the consumer group.","partition_helper_text":"One partition is sufficient for getting started, but production systems often have more.","replicas_info":"How many copies of a topic will be made for high availability.","replicas_detail":"The partitions of each topic can be replicated across a configurable number of brokers.","replicas_helper_text":"Streams for Apache Kafka only supports 3 replicas and a minimum in-sync replica factor of 2.","core_config_info":"Before deploying your topic, we recommend entering all core configuration details.","message_section_info":"Control how your messages will be handled in the Kafka instance.","log_section_info":"Define how your log is handled.","log_section_info_note":"Note: Messages are continually appended to the partition’s log and assigned their offset.","replication_section_info":"Control the behavior of your replicas.","replication_section_info_note":"Note: Each parameter impacts every replica created in this topic.","cleanup_section_info":"Control the cleanup processing of the log.","index_section_info":"Control the indexing of the log.","flush_section_info":"Control the frequency of the flushing of the log.","delete_topic":"Delete topic (irreversible)","delete_topic_info":"This permanently removes this topic from this instance. Applications will no longer have access to this topic.","wizard_title":"Create topics wizard","show_all_options":"Show all available options","topic_successfully_created":"The topic was successfully created in the Kafka instance","topic_successfully_updated":"The topic was successfully updated in the Kafka instance","topic_successfully_deleted":"Successfully deleted topic {{name}}","partitions_warning":"Increasing a topic\'s partitions might result in messages having the same key from two different partitions, which can potentially break the message ordering guarantees that apply to a single partition","required":"Required","already_exists":"{{name}} already exists. Try a different name","cannot_exceed_characters":"Cannot exceed 249 characters","invalid_name_with_dot":"Must contain at least 3 periods ( ... ) if periods are the only characters used "},"permission":{"tab":{"label":"Access"},"table":{"manage_button":"Manage access","no_results_title":"No permissions defined","no_results_body":"The Kafka instance owner and organization administrators have access to resources in this instance. Give other accounts access by managing permissions.","manage_permissions_button":"Manage access","all_accounts":"All accounts","all_accounts_help":"Uses a wildcard (*) to assign permission to all user and service accounts.","delete_selected":"Delete selected permissions","row_kebab":{"delete":"Delete","manage":"Manage"},"resource_column_title":"Resource","permissions_column_title":"Permission","account_column_title":"Account"},"manage_permissions_dialog":{"title":"Manage access","aria_label":"Manage access dialog","step_1_submit_button":"Next","step_2_submit_button":"Save","cancel_button":"Cancel","kafka_instance_title":"Kafka instance","account_id_title":"Account","account_id_aria":"The account","account_id_help":"A service account enables your application or tool to connect securely to your resources. A user account enables users in your organization to access resources.","account_id_typeahead_aria":"Select an account","account_id_typeahead_placeholder":"Select an account","must_select_account_error":"Required","all_accounts_title":"All accounts","all_accounts_description":"Uses a wildcard (*) to assign permissions to all user and service accounts","all_accounts_service_account_group":"Service accounts","all_accounts_user_account_group":"User accounts","edit_existing":{"title":"Review existing permissions","help":"Review the list of existing permissions for the selected account. The list includes account-specific permissions and permissions applied to all accounts within this Kafka instance. Permissions labeled <1>All accounts</1> cannot be removed when an individual account ID is selected.","all_accounts_help":"Review the list of existing permissions applied to all accounts within this Kafka instance. "},"assign_permissions":{"title":"Assign permissions","help":"Assign permissions to the selected account ({{account_id}}).","help_all_accounts":"Assign permissions to all accounts.","all_fields_are_required":"All fields are required.","placeholder":"Choose...","resource_name_typeahead_placeholder":"Choose...","must_select_resource_error":"Required","must_select_pattern_type_error":"Required","must_select_permission_error":"Required","must_select_resource_type_error":"Required","must_select_operation_error":"Required","valid_characters_for_topic_name":"Valid characters in a topic name include (Aa-Zz), numbers, underscores ( _ ), periods ( . ), and hyphens ( - )","valid_characters_for_consumer_group":"Valid characters in a consumer group ID include (Aa-Zz), numbers, underscores ( _ ), periods ( . ), and hyphens ( - )","cannot_exceed_max_length":"Cannot exceed {{max_length}} characters","resource_type_placeholder":"Select type","pattern_type_prefixed_placeholder":"Enter prefix","pattern_type_literal_placeholder":"Enter name","operation_placeholder":"Select operation","add_row":"Add","remove_row_help":"Remove","pattern_type_prefixed":"Starts with","pattern_type_prefixed_help":"Refers to the prefix of the name in the API","pattern_type_literal":"Is","pattern_type_literal_help":"Refers to the literal name in the API","resource_name_typeahead_create_text":"Use"}},"cells":{"pattern_type_prefixed":"starts with","pattern_type_literal":"is"}},"consumerGroup":{"consumer_groups":"Consumer groups","consumer_group_id":"Consumer group ID","consumer_group_list":"Consumer group list","consumer_group_search_input":"Consumer group search input","consumer_group_search":"Search consumer group button","active_members":"Active members","unassigned":"unassigned","partitions_with_lag":"Partitions with lag","partitions_with_lag_name":"Partitions with lag","partitions_with_lag_description":"Partitions with lag shows the number of partitions where the assigned consumer has not caught up with the last message in the partition. The offset lag of a partition reflects the current offset position of a consumer in relation to the end of the partition log. Use this number to identify any delay in the consumption of messages. To reduce consumer lag, you typically add new consumers to a group.","uncosumed_partitions":"Unconsumed partitions","uncosumed_partitions_for_topic":"Unconsumed partitions for this topic","state":"State","partition":"Partition","client_id":"Client ID","member_id":"Member ID","consumer_id":"Consumer ID","current_offset":"Current offset","log_end_offset":"Log end offset","offset_lag":"Offset lag","new_offset":"New offset","reset_offset":"Reset offset","topic_table_aria":"table for consumer groups by topic","consumer_group_info_table_aria":"table for consumer group details","delete":"Delete consumer group?","consumergroup_successfully_deleted":"Successfully deleted consumer group {{name}}","search":"Search consumer groups","no_result":"No consumer groups found","empty_list":"No consumer groups yet","empty_consumer_title":"No consumer groups","view_partitions_offsets":"View partition offsets","empty_consumer_body":"When configuring an application client to access Kafka, assign a group ID to associate the consumer with a consumer group.","reset_offset_accept":"I understand that by resetting the offset position, I risk clients skipping or duplicating messages.","reset_offset_connected_alert_title":"The offset for this consumer group cannot be reset at this time","reset_offset_connected_alert_body":"One or more members of the consumer group are currently connected to a topic. All members of a consumer group must be disconnected before resetting the offset.","offset_successfully_reset":"offsets for the consumer group have been successfully reset","delete_consumer_connected_alert_title":"The {{name}} consumer group cannot be deleted at this time","delete_consumer_connected_alert_body":"One or more members are currently connected to a topic. All members of a consumer group that are connected to topic must be disconnected before deleting the consumer group."}}')},de:{translation:JSON.parse('{"home":{"basic":"DE Welcome to the Strimzi UI","insert":"DE This includes an {{insert}}","formatted":"DE This includes <strong>formatting</strong>","formattedInsert":"DE This includes a formatted <strong>{{insert}}</strong> and {{another}}","customInserts":"DE This paragraph contains multiple inserts. First {{insert}} is a <0>div with a classname</0>. Second is <1>bold</1>. Third is <2>italic</2>. Finally there is a <3>link</3>.","customContent":"DE This is <0>Something</0>"}}')}},l=o().createInstance();l.use(a.initReactI18next).use(r()).init({detection:{order:["htmlTag","navigator"],caches:[]},fallbackLng:"en",debug:!0,interpolation:{escapeValue:!1},resources:c});const p=l}}]);
