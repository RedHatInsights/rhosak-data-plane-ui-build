"use strict";(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[639],{38296:(e,t,r)=>{function o(...e){const t=[],r={}.hasOwnProperty;return e.filter(Boolean).forEach((e=>{const n=typeof e;if("string"===n||"number"===n)t.push(e);else if(Array.isArray(e)&&e.length){const r=o(...e);r&&t.push(r)}else if("object"===n)for(const o in e)r.call(e,o)&&e[o]&&t.push(o)})),t.join(" ")}r.r(t),r.d(t,{css:()=>o})},28942:(e,t,r)=>{r.d(t,{w:()=>d});var o=r(75418),n=r.n(o),a=r(27577),l=r(38296),s=function(){return(s=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},c=function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]])}return r},i=(0,o.createContext)({activeRow:"",onRowClick:function(){return""},loggedInUser:""}),p=i.Provider,u=function(e){var t=(0,o.useContext)(i),r=t.activeRow,a=t.onRowClick,p=t.rowDataTestId,u=e||{},m=u.trRef,f=u.className,d=u.rowProps,b=u.row,w=c(u,["trRef","className","rowProps","row"]),h=d.rowIndex,v=b.isExpanded,g=b.originalData;return n().createElement("tr",s({"data-testid":p,tabIndex:0,ref:m,className:(0,l.css)(f,"pf-c-table-row__item",r&&r===(null==g?void 0:g.rowId)&&"pf-m-selected pf-m-selectable"),hidden:void 0!==v&&!v,onClick:function(e){return a&&a(e,h,b)}},w))},m=function(){return(m=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},f=function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]])}return r},d=function(e){var t=e.tableProps,r=e.tableHeaderProps,o=e.tableBodyProps,s=e.children,c=e.activeRow,i=e.onRowClick,d=e.rowDataTestId,b=e.loggedInUser,w=t.cells,h=t.rows,v=t.actionResolver,g=t.onSort,y=t.sortBy,_=t["aria-label"],E=t.variant,O=t.className,x=t.shouldDefaultCustomRowWrapper,T=void 0!==x&&x,G=f(t,["cells","rows","actionResolver","onSort","sortBy","aria-label","variant","className","shouldDefaultCustomRowWrapper"]);return T&&(G.rowWrapper=u),n().createElement(p,{value:{activeRow:c,onRowClick:i,rowDataTestId:d,loggedInUser:b}},n().createElement(a.Table,m({className:(0,l.css)(T&&"mas--table-view__table",O),cells:w,variant:E,rows:h,"aria-label":_,actionResolver:v,onSort:g,sortBy:y},G),n().createElement(a.TableHeader,m({},r)),n().createElement(a.TableBody,m({},o)),s))}},31639:(e,t,r)=>{r.r(t),r.d(t,{ConsumerGroupDetail:()=>u,default:()=>m});var o=r(75418),n=r.n(o),a=r(54532),l=r(84669),s=r(27577),c=r(28942),i=r(70251),p=function(e){var t=e.title,r=e.description;return n().createElement(l.Popover,{"aria-label":"Consumer groups popover",headerContent:n().createElement("div",null,t),bodyContent:n().createElement("div",null,r)},n().createElement(i.OutlinedQuestionCircleIcon,null))},u=function(e){var t=e.consumerGroupDetail,r=e.consumerGroupByTopic,o=(0,a.useTranslation)().t,i=r?[{title:o("consumerGroup.partition"),transforms:[s.wrappable,(0,s.cellWidth)(20)]},{title:o("consumerGroup.consumer_id"),transforms:[s.wrappable,(0,s.cellWidth)(20)]},{title:o("consumerGroup.current_offset"),transforms:[s.wrappable,(0,s.cellWidth)(20)]},{title:o("consumerGroup.log_end_offset"),transforms:[s.wrappable,(0,s.cellWidth)(20)]},{title:o("consumerGroup.offset_lag"),transforms:[s.wrappable,(0,s.cellWidth)(20)]},{title:"",dataLabel:o("common.action")}]:[{title:o("topic.topic"),transforms:[s.wrappable,(0,s.cellWidth)(20)]},{title:o("consumerGroup.partition"),transforms:[s.wrappable,(0,s.cellWidth)(20)]},{title:o("consumerGroup.consumer_id"),transforms:[s.wrappable,(0,s.cellWidth)(20)]},{title:o("consumerGroup.current_offset"),transforms:[s.wrappable,(0,s.cellWidth)(20)]},{title:o("consumerGroup.log_end_offset"),transforms:[s.wrappable,(0,s.cellWidth)(20)]},{title:o("consumerGroup.offset_lag"),transforms:[s.wrappable,(0,s.cellWidth)(20)]},{title:"",dataLabel:o("common.action")}];return n().createElement(l.Stack,{hasGutter:!0},n().createElement(l.TextContent,null,n().createElement(l.Flex,null,n().createElement(l.FlexItem,null,n().createElement(l.Text,{component:l.TextVariants.h4,size:50},o("consumerGroup.active_members")," "),n().createElement(l.Text,{component:l.TextVariants.p},n().createElement(l.Text,{component:l.TextVariants.h2},t&&t.consumers.reduce((function(e,t){return e+(-1!=t.partition?1:0)}),0)))),n().createElement(l.FlexItem,null,n().createElement(l.Text,{component:l.TextVariants.h4},o("consumerGroup.partitions_with_lag")," ",n().createElement(p,{title:o("consumerGroup.partitions_with_lag_name"),description:o("consumerGroup.partitions_with_lag_description")})),n().createElement(l.Text,{component:l.TextVariants.p},n().createElement(l.Text,{component:l.TextVariants.h2},t&&t.consumers.reduce((function(e,t){return e+(t.lag>0?1:0)}),0)))))),n().createElement(c.w,{tableProps:{cells:i,rows:t&&t.consumers.map((function(e){return r?[e.partition,{title:e.groupId+"\n"+e.memberId},e.offset,e.logEndOffset,e.lag]:[e.topic,e.partition,{title:e.groupId+"\n"+e.memberId},e.offset,e.logEndOffset,e.lag]}))||[],"aria-label":o("consumerGroup.consumer_group_info_table_aria"),variant:s.TableVariant.compact}}))};const m=u}}]);
//# sourceMappingURL=639.f9f062eb.js.map