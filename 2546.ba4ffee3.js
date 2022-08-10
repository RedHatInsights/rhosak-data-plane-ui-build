"use strict";(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[2546],{12546:(e,n,t)=>{t.r(n),t.d(n,{default:()=>v});var a=t(9922),o=t(85893),i=t(93264),s=t(25604),r=t(73666),l=t(10708),d=t(3654),c=t(97065),u=t(5736),m=t(50834);const v=({consumerName:e,refreshConsumerGroups:n,hideModal:t,state:v})=>{const{t:p}=(0,s.useTranslation)(["kafkaTemporaryFixMe"]),_=(0,i.useContext)(d.E),{addAlert:h}=(0,m.useAlert)()||{addAlert:()=>{}},b=v===c.ConsumerGroupState.Stable,f=()=>{t()};return(0,o.jsxs)(r.Modal,Object.assign({variant:r.ModalVariant.small,isOpen:!0,"aria-label":p("consumerGroup.delete"),title:p("consumerGroup.delete"),showClose:!0,"aria-describedby":"modal-message",onClose:f,actions:[(0,o.jsx)(r.Button,Object.assign({variant:r.ButtonVariant.primary,onClick:()=>(0,a.__awaiter)(void 0,void 0,void 0,(function*(){var t;try{e&&(yield(0,l.T3)(e,_).then((()=>{h({variant:r.AlertVariant.success,title:p("consumerGroup.consumergroup_successfully_deleted",{name:e})}),n&&n()})))}catch(e){let n;e&&(0,u.I)(e)&&(n=null===(t=e.response)||void 0===t?void 0:t.data.error_message),h({variant:r.AlertVariant.danger,title:n||""})}f()})),isDisabled:b},{children:p("common.delete")}),1),(0,o.jsx)(r.Button,Object.assign({variant:"link",onClick:f},{children:p("common.cancel")}),2)]},{children:[!b&&(0,o.jsx)(r.Text,Object.assign({id:"modal-message"},{children:(0,o.jsx)("label",{htmlFor:"instance-name-input",dangerouslySetInnerHTML:{__html:p("common.confirm_delete_modal_text",{name:e})}})})),b&&(0,o.jsx)(r.Alert,Object.assign({className:"modal-alert",variant:"danger",isInline:!0,title:p("consumerGroup.delete_consumer_connected_alert_title",{name:e})},{children:(0,o.jsx)("p",{children:p("consumerGroup.delete_consumer_connected_alert_body")})}))]}))}},10708:(e,n,t)=>{t.d(n,{T3:()=>r,e5:()=>s,v:()=>l});var a=t(9922),o=t(97065),i=t(38137);const s=(e,n,t,s,r,l=i.SortByDirection.asc,d)=>(0,a.__awaiter)(void 0,void 0,void 0,(function*(){const a=yield null==e?void 0:e.getToken(),i=new o.GroupsApi(new o.Configuration({accessToken:a,basePath:null==e?void 0:e.basePath}));return(yield i.getConsumerGroups(void 0,void 0,n,t,s,r,l,d)).data})),r=(e,n)=>(0,a.__awaiter)(void 0,void 0,void 0,(function*(){const t=yield null==n?void 0:n.getToken(),a=new o.GroupsApi(new o.Configuration({accessToken:t,basePath:null==n?void 0:n.basePath}));yield a.deleteConsumerGroupById(e)})),l=(e,n,t,i,s,r)=>(0,a.__awaiter)(void 0,void 0,void 0,(function*(){const a=yield null==e?void 0:e.getToken(),l=new o.GroupsApi(new o.Configuration({accessToken:a,basePath:null==e?void 0:e.basePath}));return yield l.resetConsumerGroupOffset(n,{value:r,offset:t,topics:[{topic:i,partitions:s}]})}))},5736:(e,n,t)=>{t.d(n,{I:()=>a});const a=e=>void 0!==e}}]);
