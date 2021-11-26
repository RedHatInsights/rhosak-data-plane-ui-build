"use strict";(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[9861],{96466:(e,t,n)=>{t.__esModule=!0,t.CaretDownIconConfig={name:"CaretDownIcon",height:512,width:320,svgPath:"M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z",yOffset:0,xOffset:0},t.CaretDownIcon=n(35183).createIcon(t.CaretDownIconConfig),t.default=t.CaretDownIcon},51356:(e,t,n)=>{n.d(t,{A:()=>l});var r=n(75418),o=n.n(r),a=n(84669),u=n(96466),l=function(e){var t=e.id,n=e.toggleId,l=e.items,s=e.value,c=e.ariaLabel,i=e.onSelectOption,f=e.name,m=e.menuAppendTo,d=e.isLabelAndValueNotSame,p=(0,r.useState)(),b=p[0],v=p[1],h=o().createElement(a.DropdownToggle,{id:n,onToggle:function(e){v(e)},toggleIndicator:u.default},function(){if(d){var e=null==l?void 0:l.filter((function(e){return e.value===s}))[0];return null==e?void 0:e.label}return s}());return o().createElement(a.Dropdown,{name:f,id:t,onSelect:function(e){var t=e.currentTarget.textContent;i&&t&&(e.target.name=f,i(t.toLowerCase(),e)),v((function(e){return!e}))},toggle:h,isOpen:b,"aria-label":c,dropdownItems:function(e){var t=e.map((function(e){var t=e.key,n=e.value,r=e.label;return o().createElement(a.DropdownItem,{key:t,value:n},r||n)}));return t}(l),menuAppendTo:m})}},29861:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var r=n(75418),o=n.n(r),a=n(84669),u=n(31521),l=n(3654),s=n(27577),c=n(23587),i=n(10708),f=n(51356),m=n(5736),d=n(46332),p=function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function u(e){try{s(r.next(e))}catch(e){a(e)}}function l(e){try{s(r.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,l)}s((r=r.apply(e,t||[])).next())}))},b=function(e,t){var n,r,o,a,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return u.label++,{value:a[1],done:!1};case 5:u.label++,r=a[1],a=[0];continue;case 7:a=u.ops.pop(),u.trys.pop();continue;default:if(!(o=u.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){u=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){u.label=a[1];break}if(6===a[0]&&u.label<o[1]){u.label=o[1],o=a;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(a);break}o[2]&&u.ops.pop(),u.trys.pop();continue}a=t.call(e,u)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}},v=function(e,t,n){if(n||2===arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))};const h=function(e){var t=e.consumerGroupData,n=e.refreshConsumerGroups,h=e.hideModal,g=(0,r.useContext)(l.E),w=(0,u.useTranslation)().t,y=(0,r.useState)(!1),E=y[0],k=y[1],C=(0,r.useState)(!1),G=C[0],I=C[1],O=(0,r.useState)(""),S=O[0],A=O[1],T=(0,r.useState)(),_=T[0],P=T[1],x=(0,r.useState)(""),D=x[0],L=x[1],R=(0,r.useState)([]),M=R[0],z=R[1],B=((0,d.useAlert)()||{addAlert:function(){}}).addAlert,F=[{key:c.ConsumerGroupResetOffsetParametersOffsetEnum.Absolute,value:c.ConsumerGroupResetOffsetParametersOffsetEnum.Absolute,isDisabled:!1},{key:c.ConsumerGroupResetOffsetParametersOffsetEnum.Latest,value:c.ConsumerGroupResetOffsetParametersOffsetEnum.Latest,isDisabled:!1},{key:c.ConsumerGroupResetOffsetParametersOffsetEnum.Earliest,value:c.ConsumerGroupResetOffsetParametersOffsetEnum.Earliest,isDisabled:!1}];(0,r.useEffect)((function(){var e=t&&t.consumers.filter((function(e){return e.topic===S}));z(e||[])}),[S]),(0,r.useEffect)((function(){(null==t?void 0:t.state)&&I(K(t.state))}),[null==t?void 0:t.state]);var N,V,H,K=function(e){return e!==c.ConsumerGroupStateEnum.Stable},j=function(){h()},q=[w("consumerGroup.partition"),"".concat(w("consumerGroup.client_id")," + ").concat(w("consumerGroup.member_id")),w("consumerGroup.current_offset"),w("consumerGroup.log_end_offset"),w("consumerGroup.offset_lag"),w("consumerGroup.new_offset")];return o().createElement(a.Modal,{variant:a.ModalVariant.large,isOpen:!0,"aria-label":"Modal for resetting offset of Kafka consumergroup",title:w("consumerGroup.reset_offset"),showClose:!0,"aria-describedby":"modal-message",onClose:j,actions:[o().createElement(a.Button,{variant:"danger",onClick:function(){return p(void 0,void 0,void 0,(function(){var e,r,o,u;return b(this,(function(l){switch(l.label){case 0:return l.trys.push([0,7,,8]),e=M.filter((function(e){return!0===e.selected})).map((function(e){return e.partition})),_!==c.ConsumerGroupResetOffsetParametersOffsetEnum.Absolute?[3,3]:t?[4,(0,i.v)(g,t.groupId,c.ConsumerGroupResetOffsetParametersOffsetEnum.Absolute,S,e,D.toString())]:[3,2];case 1:l.sent(),l.label=2;case 2:return[3,6];case 3:return t&&_?[4,(0,i.v)(g,t.groupId,_,S,e)]:[3,5];case 4:l.sent(),l.label=5;case 5:l.label=6;case 6:return B({variant:a.AlertVariant.success,title:w("consumerGroup.offset_successfully_reset")}),n&&n(),[3,8];case 7:return r=l.sent(),o=void 0,r&&(0,m.I)(r)&&(o=null===(u=r.response)||void 0===u?void 0:u.data.error_message),B({variant:a.AlertVariant.danger,title:o||""}),[3,8];case 8:return j(),[2]}}))}))},key:1,isDisabled:""===S||!E||!G||!_||0===M.filter((function(e){return!0===e.selected})).length},w("consumerGroup.reset_offset")),o().createElement(a.Button,{variant:"link",onClick:j,key:2},w("common.cancel"))]},o().createElement(a.Stack,{hasGutter:!0},o().createElement(a.StackItem,null,o().createElement(a.Form,{isHorizontal:!0},o().createElement(a.FormGroup,{label:"Consumer group",fieldId:"horizontal-form-name"},o().createElement(a.Title,{className:"form-title",headingLevel:"h4",size:"md"},null==t?void 0:t.groupId)),G&&o().createElement(a.FormGroup,{label:"Topic",fieldId:"horizontal-form-name"},o().createElement(f.A,{id:"topic-dropdown",toggleId:"topic-dropdowntoggle",ariaLabel:"topic-select-dropdown",onSelectOption:function(e,t){A(t.currentTarget.textContent)},items:(V=t,H=V.consumers.map((function(e){return e.topic})),H.filter((function(e,t){return H.indexOf(e)===t})).map((function(e){return{key:e,value:e,isDisabled:!1}}))),name:"cleanup-policy",value:S||w("common.select"),menuAppendTo:"parent"})),G&&S&&o().createElement(a.FormGroup,{label:"New offset",fieldId:"offset-dropdown"},o().createElement(f.A,{id:"offset-dropdown",toggleId:"offset-dropdowntoggle",ariaLabel:"offset-select-dropdown",onSelectOption:function(e,t){P(t.currentTarget.textContent)},items:F,name:"offset-dropdown",value:_||w("common.select"),menuAppendTo:"parent"})),G&&S&&_===c.ConsumerGroupResetOffsetParametersOffsetEnum.Absolute&&o().createElement(a.FormGroup,{label:"Custom offset",fieldId:"custom-offset-input"},o().createElement(a.TextInput,{id:"custom-offset-input",value:D,onChange:function(e){L(e)},type:"number"})))),o().createElement(a.StackItem,null,!G&&o().createElement(a.Alert,{className:"modal-alert",variant:"danger",isInline:!0,title:w("consumerGroup.reset_offset_connected_alert_title")},o().createElement("p",null,w("consumerGroup.reset_offset_connected_alert_body")))),o().createElement(a.StackItem,null,G&&(null==M?void 0:M.length)>0&&S&&o().createElement(a.Stack,{hasGutter:!0},o().createElement(a.StackItem,null,o().createElement(s.Table,{onSelect:function(e,t,n){var r=v([],M,!0);-1===n?r=M.map((function(e){return e.selected=t,e})):r[n].selected=t,z(r)},canSelectAll:!0,"aria-label":"Selectable Table",cells:q,rows:(N=[],M&&M.forEach((function(e){var t=e.partition,n=e.groupId,r=e.memberId,o=e.offset,a=e.logEndOffset,u=e.lag,l=e.selected;N.push({cells:[t,n+r,o,a,u,{title:l&&_?_===c.ConsumerGroupResetOffsetParametersOffsetEnum.Absolute?D:_:"-"}],originalData:e,selected:l})})),N),className:"consumer-table"},o().createElement(s.TableHeader,null),o().createElement(s.TableBody,null))),o().createElement(a.StackItem,null,o().createElement(a.Checkbox,{label:w("consumerGroup.reset_offset_accept"),"aria-label":"uncontrolled checkbox example",id:"check-5",isChecked:E,onChange:function(e){k(e)}}))))))}},10708:(e,t,n)=>{n.d(t,{e5:()=>l,T3:()=>s,v:()=>c});var r=n(23587),o=n(27577),a=function(e,t,n,r){return new(n||(n=Promise))((function(o,a){function u(e){try{s(r.next(e))}catch(e){a(e)}}function l(e){try{s(r.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,l)}s((r=r.apply(e,t||[])).next())}))},u=function(e,t){var n,r,o,a,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(a){return function(l){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return u.label++,{value:a[1],done:!1};case 5:u.label++,r=a[1],a=[0];continue;case 7:a=u.ops.pop(),u.trys.pop();continue;default:if(!(o=u.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){u=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){u.label=a[1];break}if(6===a[0]&&u.label<o[1]){u.label=o[1],o=a;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(a);break}o[2]&&u.ops.pop(),u.trys.pop();continue}a=t.call(e,u)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}},l=function(e,t,n,l,s,c,i,f,m){return void 0===f&&(f=o.SortByDirection.asc),a(void 0,void 0,Promise,(function(){var o;return u(this,(function(a){switch(a.label){case 0:return[4,null==e?void 0:e.getToken()];case 1:return o=a.sent(),[4,new r.GroupsApi(new r.Configuration({accessToken:o,basePath:null==e?void 0:e.basePath})).getConsumerGroups(t,n,l,s,c,i,f,m)];case 2:return[2,a.sent().data]}}))}))},s=function(e,t){return a(void 0,void 0,Promise,(function(){var n;return u(this,(function(o){switch(o.label){case 0:return[4,null==t?void 0:t.getToken()];case 1:return n=o.sent(),[4,new r.GroupsApi(new r.Configuration({accessToken:n,basePath:null==t?void 0:t.basePath})).deleteConsumerGroupById(e)];case 2:return o.sent(),[2]}}))}))},c=function(e,t,n,o,l,s){return a(void 0,void 0,Promise,(function(){var a;return u(this,(function(u){switch(u.label){case 0:return[4,null==e?void 0:e.getToken()];case 1:return a=u.sent(),[4,new r.GroupsApi(new r.Configuration({accessToken:a,basePath:null==e?void 0:e.basePath})).resetConsumerGroupOffset(t,{value:s,offset:n,topics:[{topic:o,partitions:l}]})];case 2:return[2,u.sent()]}}))}))}},5736:(e,t,n)=>{n.d(t,{I:()=>r});var r=function(e){return void 0!==e}}}]);
//# sourceMappingURL=9861.32313b56.js.map