"use strict";(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[2546],{12546:(e,n,t)=>{t.r(n),t.d(n,{default:()=>m});var r=t(75418),o=t.n(r),a=t(59909),u=t(99421),i=t(10708),l=t(3654),c=t(17667),s=t(5736),f=t(7451),d=function(e,n,t,r){return new(t||(t=Promise))((function(o,a){function u(e){try{l(r.next(e))}catch(e){a(e)}}function i(e){try{l(r.throw(e))}catch(e){a(e)}}function l(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(u,i)}l((r=r.apply(e,n||[])).next())}))},p=function(e,n){var t,r,o,a,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;u;)try{if(t=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return u.label++,{value:a[1],done:!1};case 5:u.label++,r=a[1],a=[0];continue;case 7:a=u.ops.pop(),u.trys.pop();continue;default:if(!(o=u.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){u=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){u.label=a[1];break}if(6===a[0]&&u.label<o[1]){u.label=o[1],o=a;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(a);break}o[2]&&u.ops.pop(),u.trys.pop();continue}a=n.call(e,u)}catch(e){a=[6,e],r=0}finally{t=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}};const m=function(e){var n=e.consumerName,t=e.refreshConsumerGroups,m=e.hideModal,h=e.state,v=(0,a.useTranslation)(["kafkaTemporaryFixMe"]).t,b=(0,r.useContext)(l.E),y=((0,f.useAlert)()||{addAlert:function(){}}).addAlert,w=h===c.ConsumerGroupStateEnum.Stable,k=function(){m()};return o().createElement(u.Modal,{variant:u.ModalVariant.small,isOpen:!0,"aria-label":v("consumerGroup.delete"),title:v("consumerGroup.delete"),showClose:!0,"aria-describedby":"modal-message",onClose:k,actions:[o().createElement(u.Button,{variant:u.ButtonVariant.primary,onClick:function(){return d(void 0,void 0,void 0,(function(){var e,r,o;return p(this,(function(a){switch(a.label){case 0:return a.trys.push([0,3,,4]),n?[4,(0,i.T3)(n,b).then((function(){y({variant:u.AlertVariant.success,title:v("consumerGroup.consumergroup_successfully_deleted",{name:n})}),t&&t()}))]:[3,2];case 1:a.sent(),a.label=2;case 2:return[3,4];case 3:return e=a.sent(),r=void 0,e&&(0,s.I)(e)&&(r=null===(o=e.response)||void 0===o?void 0:o.data.error_message),y({variant:u.AlertVariant.danger,title:r||""}),[3,4];case 4:return k(),[2]}}))}))},key:1,isDisabled:w},v("common.delete")),o().createElement(u.Button,{variant:"link",onClick:k,key:2},v("common.cancel"))]},!w&&o().createElement(u.Text,{id:"modal-message"},o().createElement("label",{htmlFor:"instance-name-input",dangerouslySetInnerHTML:{__html:v("common.confirm_delete_modal_text",{name:n})}})),w&&o().createElement(u.Alert,{className:"modal-alert",variant:"danger",isInline:!0,title:v("consumerGroup.delete_consumer_connected_alert_title",{name:n})},o().createElement("p",null,v("consumerGroup.delete_consumer_connected_alert_body"))))}},10708:(e,n,t)=>{t.d(n,{e5:()=>i,T3:()=>l,v:()=>c});var r=t(17667),o=t(57294),a=function(e,n,t,r){return new(t||(t=Promise))((function(o,a){function u(e){try{l(r.next(e))}catch(e){a(e)}}function i(e){try{l(r.throw(e))}catch(e){a(e)}}function l(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(u,i)}l((r=r.apply(e,n||[])).next())}))},u=function(e,n){var t,r,o,a,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;u;)try{if(t=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return u.label++,{value:a[1],done:!1};case 5:u.label++,r=a[1],a=[0];continue;case 7:a=u.ops.pop(),u.trys.pop();continue;default:if(!(o=u.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){u=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){u.label=a[1];break}if(6===a[0]&&u.label<o[1]){u.label=o[1],o=a;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(a);break}o[2]&&u.ops.pop(),u.trys.pop();continue}a=n.call(e,u)}catch(e){a=[6,e],r=0}finally{t=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}},i=function(e,n,t,i,l,c,s,f,d){return void 0===f&&(f=o.SortByDirection.asc),a(void 0,void 0,Promise,(function(){var o;return u(this,(function(a){switch(a.label){case 0:return[4,null==e?void 0:e.getToken()];case 1:return o=a.sent(),[4,new r.GroupsApi(new r.Configuration({accessToken:o,basePath:null==e?void 0:e.basePath})).getConsumerGroups(n,t,i,l,c,s,f,d)];case 2:return[2,a.sent().data]}}))}))},l=function(e,n){return a(void 0,void 0,Promise,(function(){var t;return u(this,(function(o){switch(o.label){case 0:return[4,null==n?void 0:n.getToken()];case 1:return t=o.sent(),[4,new r.GroupsApi(new r.Configuration({accessToken:t,basePath:null==n?void 0:n.basePath})).deleteConsumerGroupById(e)];case 2:return o.sent(),[2]}}))}))},c=function(e,n,t,o,i,l){return a(void 0,void 0,Promise,(function(){var a;return u(this,(function(u){switch(u.label){case 0:return[4,null==e?void 0:e.getToken()];case 1:return a=u.sent(),[4,new r.GroupsApi(new r.Configuration({accessToken:a,basePath:null==e?void 0:e.basePath})).resetConsumerGroupOffset(n,{value:l,offset:t,topics:[{topic:o,partitions:i}]})];case 2:return[2,u.sent()]}}))}))}},5736:(e,n,t)=>{t.d(n,{I:()=>r});var r=function(e){return void 0!==e}}}]);
