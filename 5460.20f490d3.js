"use strict";(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[5460],{38296:(e,t,o)=>{function a(...e){const t=[],o={}.hasOwnProperty;return e.filter(Boolean).forEach((e=>{const r=typeof e;if("string"===r||"number"===r)t.push(e);else if(Array.isArray(e)&&e.length){const o=a(...e);o&&t.push(o)}else if("object"===r)for(const a in e)o.call(e,a)&&e[a]&&t.push(a)})),t.join(" ")}o.r(t),o.d(t,{css:()=>a})},90732:(e,t,o)=>{o.d(t,{w:()=>p});var a=o(9922),r=o(85893),s=o(19576),n=o(38296),i=o(93264);const l=(0,i.createContext)({activeRow:"",onRowClick:()=>"",loggedInUser:""}),c=l.Provider,u=e=>{const{activeRow:t,onRowClick:o,rowDataTestId:s}=(0,i.useContext)(l),c=e||{},{trRef:u,className:p,rowProps:m,row:g}=c,d=(0,a.__rest)(c,["trRef","className","rowProps","row"]),{rowIndex:_}=m||{},{isExpanded:b,originalData:h}=g||{};return(0,r.jsx)("tr",Object.assign({"data-testid":s,tabIndex:0,ref:"function"==typeof u?void 0:u,className:(0,n.css)(p,"pf-c-table-row__item",t&&t===(null==h?void 0:h.rowId)&&"pf-m-selected pf-m-selectable"),hidden:void 0!==b&&!b,onClick:e=>o&&o(e,_,g)},d))},p=({tableProps:e,tableHeaderProps:t,tableBodyProps:o,children:i,activeRow:l,onRowClick:p,rowDataTestId:m,loggedInUser:g,ouiaId:d})=>{const{cells:_,rows:b,actionResolver:h,onSort:f,sortBy:w,"aria-label":x,variant:v,className:j,shouldDefaultCustomRowWrapper:C=!1}=e,G=(0,a.__rest)(e,["cells","rows","actionResolver","onSort","sortBy","aria-label","variant","className","shouldDefaultCustomRowWrapper"]);return C&&(G.rowWrapper=u),(0,r.jsx)(c,Object.assign({value:{activeRow:l,onRowClick:p,rowDataTestId:m,loggedInUser:g}},{children:(0,r.jsxs)(s.Table,Object.assign({className:(0,n.css)(C&&"mas--table-view__table",j),cells:_,variant:v,rows:b,"aria-label":x,actionResolver:h,onSort:f,sortBy:w},G,{ouiaId:d},{children:[(0,r.jsx)(s.TableHeader,Object.assign({},t)),(0,r.jsx)(s.TableBody,Object.assign({},o)),i]}))}))}},97416:(e,t,o)=>{o.d(t,{L:()=>n});var a=o(9922),r=o(85893),s=o(28188);const n=({toolbarProps:e,toggleGroupProps:t,toolbarItems:o,toggleGroupItems:n})=>{const{id:i,clearAllFilters:l,collapseListedFiltersBreakpoint:c="md",inset:u}=e,p=(0,a.__rest)(e,["id","clearAllFilters","collapseListedFiltersBreakpoint","inset"]);return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(s.Toolbar,Object.assign({id:i,clearAllFilters:l,inset:u,collapseListedFiltersBreakpoint:c},p,{children:(0,r.jsxs)(s.ToolbarContent,{children:[t&&(0,r.jsx)(s.ToolbarToggleGroup,Object.assign({},t,{toggleIcon:t.toggleIcon},{children:n})),null==o?void 0:o.map(((e,t)=>{const{key:o="mas",variant:n,className:i,id:l,alignment:c,item:u}=e,p=(0,a.__rest)(e,["key","variant","className","id","alignment","item"]);return(0,r.jsx)(s.ToolbarItem,Object.assign({variant:n,className:i,id:l,alignment:c},p,{children:u}),`${o}-${t}`)}))]})}))})}},97369:(e,t,o)=>{o.d(t,{z:()=>n});var a=o(85893),r=o(30645),s=o(97065);const n=({state:e})=>{const{t}=(0,r.useTranslation)(["kafkaTemporaryFixMe"]);switch(e){case s.ConsumerGroupState.Stable:return(0,a.jsx)(a.Fragment,{children:t("consumerGroup.state.stable")});case s.ConsumerGroupState.Empty:return(0,a.jsx)(a.Fragment,{children:t("consumerGroup.state.empty")});case s.ConsumerGroupState.Dead:return(0,a.jsx)(a.Fragment,{children:t("consumerGroup.state.dead")});case s.ConsumerGroupState.CompletingRebalance:return(0,a.jsx)(a.Fragment,{children:t("consumerGroup.state.completing_rebalance")});case s.ConsumerGroupState.PreparingRebalance:return(0,a.jsx)(a.Fragment,{children:t("consumerGroup.state.preparing_rebalance")});case s.ConsumerGroupState.Unknown:return(0,a.jsx)(a.Fragment,{children:t("consumerGroup.state.unknown")});default:return(0,a.jsx)(a.Fragment,{})}}},95460:(e,t,o)=>{o.r(t),o.d(t,{ConsumerGroupsTable:()=>h,default:()=>f});var a=o(85893),r=o(93264),s=o.n(r),n=o(30645),i=o(28188),l=o(19576),c=o(90732),u=o(91070),p=o(82639),m=o(97416),g=o(3965);const d=s().memo((({search:e,setSearch:t,total:o,page:s,perPage:l})=>{const{t:c}=(0,n.useTranslation)(["kafkaTemporaryFixMe"]),[u,d]=(0,r.useState)(""),_=(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(i.ToolbarFilter,Object.assign({chips:e?[e]:[],deleteChip:()=>{t("")},categoryName:""},{children:(0,a.jsxs)(i.InputGroup,{children:[(0,a.jsx)(i.TextInput,{name:"searchConsumerGroups",id:"search-consumer-groups-input",type:"search","aria-label":c("consumerGroup.consumer_group_search_input"),placeholder:c("common.search"),value:u,onChange:e=>{d(e)}}),(0,a.jsx)(i.Button,Object.assign({variant:i.ButtonVariant.control,isDisabled:!u.length,onClick:()=>{t(u),d("")},"aria-label":c("consumerGroup.consumer_group_search")},{children:(0,a.jsx)(g.SearchIcon,{})}))]})}))}),b=[];return o>0&&b.push({item:(0,a.jsx)(p.wu,{widgetId:"consumer-group-pagination-options-menu-top",itemCount:o,page:s,perPage:l,titles:{paginationTitle:c("common.minimal_pagination"),perPageSuffix:c("common.per_page_suffix"),toFirstPage:c("common.to_first_page"),toPreviousPage:c("common.to_previous_page"),toLastPage:c("common.to_last_page"),toNextPage:c("common.to_next_page"),optionsToggle:c("common.options_toggle"),currPage:c("common.curr_page")}}),variant:"pagination",alignment:{default:"alignRight"}}),(0,a.jsx)(m.L,{toolbarProps:{id:"instance-toolbar",clearAllFilters:()=>{t("")},collapseListedFiltersBreakpoint:"md",inset:{xl:"insetLg"}},toggleGroupProps:{toggleIcon:"",breakpoint:"md"},toggleGroupItems:_,toolbarItems:b})}));var _=o(50834),b=o(97369);const h=({consumerGroups:e,total:t,page:o,perPage:s,search:m,setSearch:g,rowDataTestId:h,isDrawerOpen:f,onViewConsumerGroup:w,refreshConsumerGroups:x,onSort:v,sortBy:j})=>{const{t:C}=(0,n.useTranslation)(["kafkaTemporaryFixMe"]),{showModal:G}=(0,_.useModal)(),{showModal:P}=(0,_.useModal)(),[k,I]=(0,r.useState)(),T=[{title:C("consumerGroup.consumer_group_id"),transforms:[l.sortable]},{title:C("consumerGroup.active_members")},{title:C("consumerGroup.partitions_with_lag"),transforms:[(0,l.info)({popover:(0,a.jsx)("div",{children:C("consumerGroup.partitions_with_lag_description")}),ariaLabel:"partitions with lag",popoverProps:{headerContent:C("consumerGroup.partitions_with_lag_name")}})]},{title:C("consumerGroup.state_label")}];(0,r.useEffect)((()=>{f||I("")}),[f]);const y=e=>{const{groupId:t,state:o}=e;I(t),((e,t)=>{G(_.ModalType.KafkaDeleteConsumerGroup,{consumerName:e,refreshConsumerGroups:x,state:t})})(t,o)},F=e=>{var t;t=e,P(_.ModalType.KafkaConsumerGroupResetOffset,{refreshConsumerGroups:x,consumerGroupData:t})},R=(()=>{const t=[];return null==e||e.map((e=>{const{groupId:o,state:r,metrics:s}=e;t.push({cells:[o,s.activeConsumers,s.laggingPartitions,{title:(0,a.jsx)(b.z,{state:r})}],originalData:Object.assign(Object.assign({},e),{rowId:o})})})),t})();return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d,{search:m,setSearch:g,total:t,perPage:s,page:o}),(0,a.jsx)(c.w,{tableProps:{cells:T,rows:R,"aria-label":C("consumerGroup.consumer_group_list"),actionResolver:e=>{const t=e.originalData,o={title:C("common.delete"),onClick:()=>y(t),"data-testid":"tableConsumers-actionDelete"},a={title:C("consumerGroup.view_partitions_offsets"),onClick:(e,t,o)=>(e=>{const{originalData:t}=e;w(t),I(null==t?void 0:t.groupId)})(o),"data-testid":"tableConsumers-actionOpenDrawer"},r={title:C("consumerGroup.reset_offset"),onClick:()=>F(t),"data-testid":"tableConsumers-resetOffset"};return[o,a,r]},shouldDefaultCustomRowWrapper:!0,variant:l.TableVariant.compact,onSort:v,sortBy:j},activeRow:k,onRowClick:(e,t,o)=>{if(null==e?void 0:e.target){const{originalData:t}=o||{},a=((null==e?void 0:e.target).tagName||"").toLocaleLowerCase();"button"!==a&&"a"!==a&&(w(t),I(null==t?void 0:t.groupId))}},rowDataTestId:h||"tableConsumers-row"}),t<1&&m.length>0&&(0,a.jsx)(u.u,{emptyStateProps:{variant:u.j.NoResult},titleProps:{title:C("common.no_results_title")},emptyStateBodyProps:{body:C("common.no_results_body")}}),t>0&&(0,a.jsx)(p.wu,{widgetId:"consumer-group-pagination-options-menu-bottom",itemCount:t,variant:i.PaginationVariant.bottom,page:o,perPage:s,titles:{paginationTitle:C("common.full_pagination"),perPageSuffix:C("common.per_page_suffix"),toFirstPage:C("common.to_first_page"),toPreviousPage:C("common.to_previous_page"),toLastPage:C("common.to_last_page"),toNextPage:C("common.to_next_page"),optionsToggle:C("common.options_toggle"),currPage:C("common.curr_page")}})]})},f=h}}]);
//# sourceMappingURL=5460.20f490d3.js.map