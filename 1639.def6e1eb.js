"use strict";(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[1639],{38296:(e,t,r)=>{function s(...e){const t=[],r={}.hasOwnProperty;return e.filter(Boolean).forEach((e=>{const o=typeof e;if("string"===o||"number"===o)t.push(e);else if(Array.isArray(e)&&e.length){const r=s(...e);r&&t.push(r)}else if("object"===o)for(const s in e)r.call(e,s)&&e[s]&&t.push(s)})),t.join(" ")}r.r(t),r.d(t,{css:()=>s})},90732:(e,t,r)=>{r.d(t,{w:()=>p});var s=r(223),o=r(85893),n=r(57294),a=r(38296),i=r(75418);const l=(0,i.createContext)({activeRow:"",onRowClick:()=>"",loggedInUser:""}),c=l.Provider,u=e=>{const{activeRow:t,onRowClick:r,rowDataTestId:n}=(0,i.useContext)(l),c=e||{},{trRef:u,className:p,rowProps:m,row:d}=c,b=(0,s.__rest)(c,["trRef","className","rowProps","row"]),{rowIndex:f}=m||{},{isExpanded:h,originalData:x}=d||{};return(0,o.jsx)("tr",Object.assign({"data-testid":n,tabIndex:0,ref:"function"==typeof u?void 0:u,className:(0,a.css)(p,"pf-c-table-row__item",t&&t===(null==x?void 0:x.rowId)&&"pf-m-selected pf-m-selectable"),hidden:void 0!==h&&!h,onClick:e=>r&&r(e,f,d)},b))},p=({tableProps:e,tableHeaderProps:t,tableBodyProps:r,children:i,activeRow:l,onRowClick:p,rowDataTestId:m,loggedInUser:d})=>{const{cells:b,rows:f,actionResolver:h,onSort:x,sortBy:w,"aria-label":g,variant:j,className:_,shouldDefaultCustomRowWrapper:G=!1}=e,T=(0,s.__rest)(e,["cells","rows","actionResolver","onSort","sortBy","aria-label","variant","className","shouldDefaultCustomRowWrapper"]);return G&&(T.rowWrapper=u),(0,o.jsx)(c,Object.assign({value:{activeRow:l,onRowClick:p,rowDataTestId:m,loggedInUser:d}},{children:(0,o.jsxs)(n.Table,Object.assign({className:(0,a.css)(G&&"mas--table-view__table",_),cells:b,variant:j,rows:f,"aria-label":g,actionResolver:h,onSort:x,sortBy:w},T,{children:[(0,o.jsx)(n.TableHeader,Object.assign({},t)),(0,o.jsx)(n.TableBody,Object.assign({},r)),i]}))}))}},31639:(e,t,r)=>{r.r(t),r.d(t,{ConsumerGroupDetail:()=>p,default:()=>m});var s=r(85893),o=r(79528),n=r(99421),a=r(57294),i=r(90732),l=r(48418);const c=({title:e,description:t})=>(0,s.jsx)(n.Popover,Object.assign({"aria-label":"Consumer groups popover",headerContent:(0,s.jsx)("div",{children:e}),bodyContent:(0,s.jsx)("div",{children:t})},{children:(0,s.jsx)(l.OutlinedQuestionCircleIcon,{})}));var u=r(97369);const p=({consumerGroupDetail:e,consumerGroupByTopic:t})=>{const{t:r}=(0,o.useTranslation)(["kafkaTemporaryFixMe"]),l=t?[{title:r("consumerGroup.partition"),transforms:[a.wrappable,(0,a.cellWidth)(20)]},{title:r("consumerGroup.consumer_id"),transforms:[a.wrappable,(0,a.cellWidth)(20)]},{title:r("consumerGroup.current_offset"),transforms:[a.wrappable,(0,a.cellWidth)(20)]},{title:r("consumerGroup.log_end_offset"),transforms:[a.wrappable,(0,a.cellWidth)(20)]},{title:r("consumerGroup.offset_lag"),transforms:[a.wrappable,(0,a.cellWidth)(20)]},{title:"",dataLabel:r("common.action")}]:[{title:r("topic.topic"),transforms:[a.wrappable,(0,a.cellWidth)(20)]},{title:r("consumerGroup.partition"),transforms:[a.wrappable,(0,a.cellWidth)(20)]},{title:r("consumerGroup.consumer_id"),transforms:[a.wrappable,(0,a.cellWidth)(20)]},{title:r("consumerGroup.current_offset"),transforms:[a.wrappable,(0,a.cellWidth)(20)]},{title:r("consumerGroup.log_end_offset"),transforms:[a.wrappable,(0,a.cellWidth)(20)]},{title:r("consumerGroup.offset_lag"),transforms:[a.wrappable,(0,a.cellWidth)(20)]},{title:"",dataLabel:r("common.action")}];return(0,s.jsxs)(n.Stack,Object.assign({hasGutter:!0},{children:[(0,s.jsx)(n.TextContent,{children:(0,s.jsxs)(n.Flex,{children:[(0,s.jsxs)(n.FlexItem,{children:[(0,s.jsxs)(n.Text,Object.assign({component:n.TextVariants.h4,size:50},{children:[r("consumerGroup.active_members")," "]})),(0,s.jsx)(n.Text,Object.assign({component:n.TextVariants.p},{children:(0,s.jsx)(n.Text,Object.assign({component:n.TextVariants.h2},{children:e&&e.consumers.reduce((function(e,t){return e+(-1!=t.partition?1:0)}),0)}))}))]}),(0,s.jsxs)(n.FlexItem,{children:[(0,s.jsxs)(n.Text,Object.assign({component:n.TextVariants.h4},{children:[r("consumerGroup.partitions_with_lag")," ",(0,s.jsx)(c,{title:r("consumerGroup.partitions_with_lag_name"),description:r("consumerGroup.partitions_with_lag_description")})]})),(0,s.jsx)(n.Text,Object.assign({component:n.TextVariants.p},{children:(0,s.jsx)(n.Text,Object.assign({component:n.TextVariants.h2},{children:e&&e.consumers.reduce((function(e,t){return e+(t.lag>0?1:0)}),0)}))}))]}),(0,s.jsxs)(n.FlexItem,{children:[(0,s.jsx)(n.Text,Object.assign({component:n.TextVariants.h4},{children:r("consumerGroup.state")})),(0,s.jsx)(n.Text,Object.assign({component:n.TextVariants.p},{children:(0,s.jsx)(n.Text,Object.assign({component:n.TextVariants.h2},{children:u.z[null==e?void 0:e.state]}))}))]})]})}),(0,s.jsx)(i.w,{tableProps:{cells:l,rows:e&&e.consumers.map((e=>t?[e.partition,{title:e.memberId?e.groupId+"\n"+e.memberId:(0,s.jsx)("i",{children:r("consumerGroup.unassigned")})},e.offset,e.logEndOffset,e.lag]:[e.topic,e.partition,{title:e.memberId?e.groupId+"\n"+e.memberId:(0,s.jsx)("i",{children:r("consumerGroup.unassigned")})},e.offset,e.logEndOffset,e.lag]))||[],"aria-label":r("consumerGroup.consumer_group_info_table_aria"),variant:a.TableVariant.compact}})]}))},m=p},97369:(e,t,r)=>{r.d(t,{z:()=>n});var s=r(79528),o=r(16560);const n=e=>{const{t}=(0,s.useTranslation)(["kafka"]);switch(e){case o.ConsumerGroupStateEnum.Stable:return t("consumerGroup.stable_state");case o.ConsumerGroupStateEnum.Empty:return t("consumerGroup.empty_state");case o.ConsumerGroupStateEnum.Dead:return t("consumerGroup.dead_state");case o.ConsumerGroupStateEnum.CompletingRebalance:return t("consumerGroup.completing_rebalance_state");case o.ConsumerGroupStateEnum.PreparingRebalance:return t("consumerGroup.preparing_rebalance_state");case o.ConsumerGroupStateEnum.Unknown:return t("consumerGroup.unknown_state");default:return null}}}}]);
//# sourceMappingURL=1639.def6e1eb.js.map