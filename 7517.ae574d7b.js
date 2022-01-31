"use strict";(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[7517],{43791:()=>{},64517:(e,t,n)=>{n.d(t,{J:()=>r,S:()=>i});var a=n(75418),r=n.n(a)().createContext(void 0),i=function(){return(0,a.useContext)(r)}},13985:(e,t,n)=>{n.d(t,{I:()=>c});var a=n(75418),r=n.n(a),i=n(8898),o=n(99421),c=(n(43791),function(e){var t=e.topicName,n=e.kafkaName,a=e.kafkaInstanceLink,c=e.kafkaPageLink,l=(0,i.useTranslation)(["kafkaTemporaryFixMe"]).t;return r().createElement(r().Fragment,null,r().createElement("section",{className:"pf-c-page__main-breadcrumb"},r().createElement(o.Breadcrumb,null,r().createElement(o.BreadcrumbItem,{to:c||"#"},l("common.kafka_instance")),r().createElement(o.BreadcrumbItem,{to:a||"#"},n||l("common.kafka_instance_name")),r().createElement(o.BreadcrumbItem,null,t))),r().createElement(o.PageSection,{variant:o.PageSectionVariants.light},r().createElement(o.TextContent,null,r().createElement(o.Text,{component:o.TextVariants.h1},t))))})},14561:(e,t,n)=>{n.r(t),n.d(t,{default:()=>S});var a=n(75418),r=n.n(a),i=n(68199),o=n(8898),c=n(7451),l=n(99421),s=n(63850),u=n(13985),m=n(50334),f=n(60540),p=n(3654),d=n(1787),k=n(5736),v=(n(17293),function(){return v=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},v.apply(this,arguments)}),b=function(e,t,n,a){return new(n||(n=Promise))((function(r,i){function o(e){try{l(a.next(e))}catch(e){i(e)}}function c(e){try{l(a.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,c)}l((a=a.apply(e,t||[])).next())}))},g=function(e,t){var n,a,r,i,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,a&&(r=2&i[0]?a.return:i[0]?a.throw||((r=a.return)&&r.call(a),0):a.next)&&!(r=r.call(a,i[1])).done)return r;switch(a=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,a=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!(r=o.trys,(r=r.length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){o=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){o.label=i[1];break}if(6===i[0]&&o.label<r[1]){o.label=r[1],r=i;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(i);break}r[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(e){i=[6,e],a=0}finally{n=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},h=function(e){var t=e.topicName,n=e.onSaveTopic,s=e.onError,u=(0,o.useTranslation)(["kafkaTemporaryFixMe"]).t,h=(0,a.useContext)(p.E),E=((0,c.useAlert)()||{addAlert:function(){}}).addAlert,T=(0,i.useHistory)(),y=(0,((0,c.useBasename)()||{getBasename:function(){return""}}).getBasename)(),P={name:t,numPartitions:"","retention.ms":"7","retention.ms.unit":"days","retention.bytes":"1","retention.bytes.unit":"bytes","cleanup.policy":"",isRetentionTimeUnlimited:!1,isRetentionSizeUnlimited:!0},S=(0,a.useState)(P),x=S[0],C=S[1],N=(0,a.useState)(!1),w=N[0],I=N[1],B=function(){T.push("".concat(y,"/topics/").concat(t))};(0,a.useEffect)((function(){!function(e){b(void 0,void 0,void 0,(function(){var t,n,a,r,i,o;return g(this,(function(c){switch(c.label){case 0:return c.trys.push([0,2,,3]),[4,(0,f.BN)(e,h).then((function(e){var t,n,a=(0,d.qS)(e);C(v(v(v({},x),a),{numPartitions:(null===(t=null==e?void 0:e.partitions)||void 0===t?void 0:t.length.toString())||"",replicationFactor:(null==e?void 0:e.partitions)&&(null===(n=null==e?void 0:e.partitions[0].replicas)||void 0===n?void 0:n.length.toString())||""}))}))];case 1:return c.sent(),[3,3];case 2:return t=c.sent(),(0,k.I)(t)&&(n=void 0,a=void 0,t&&(0,k.I)(t)&&(a=null===(r=t.response)||void 0===r?void 0:r.data.code,n=null===(i=t.response)||void 0===i?void 0:i.data.error_message),s&&s(a||-1,n||""),404===(null===(o=t.response)||void 0===o?void 0:o.status)&&(E({variant:l.AlertVariant.danger,title:"Topic ".concat(e," does not exist")}),B&&B())),[3,3];case 3:return[2]}}))}))}(t)}),[t]);return r().createElement(r().Fragment,null,r().createElement(m.W,{isCreate:!1,saveTopic:function(){return b(void 0,void 0,void 0,(function(){var e,t,a,r,i,o,c,m;return g(this,(function(p){switch(p.label){case 0:e=(0,d.az)(x,["cleanup.policy"]),t=e.name,a=e.settings,I(!0),p.label=1;case 1:return p.trys.push([1,3,,4]),[4,(0,f.eR)(t,a,h).then((function(){E({title:u("topic.topic_successfully_updated"),variant:l.AlertVariant.success}),I(!1),n()}))];case 2:return p.sent(),[3,4];case 3:return r=p.sent(),i=void 0,o=void 0,r&&(0,k.I)(r)&&(o=null===(c=r.response)||void 0===c?void 0:c.data.code,i=null===(m=r.response)||void 0===m?void 0:m.data.error_message),s&&s(o||-1,i||""),I(!1),E({title:i||"",variant:l.AlertVariant.danger}),[3,4];case 4:return[2]}}))}))},handleCancel:B,topicData:x,setTopicData:C,isLoadingSave:w}),r().createElement("br",null),r().createElement("br",null))},E=n(64517),T=(n(27958),function(){var e=(0,o.useTranslation)(["kafkaTemporaryFixMe"]).t,t=(0,i.useHistory)(),n=(0,((0,c.useBasename)()||{getBasename:function(){return""}}).getBasename)(),m=(0,i.useParams)().topicName,f=(0,E.S)()||{},p=f.kafkaName,d=f.kafkaPageLink,k=f.kafkaInstanceLink,v=f.onError,b=f.activeTab,g=void 0===b?1:b,T=(0,a.useState)(g),y=T[0],P=T[1],S=r().createRef(),x=r().createRef();return r().createElement(r().Fragment,null,r().createElement(u.I,{topicName:m,kafkaName:p,kafkaPageLink:d,kafkaInstanceLink:k}),r().createElement(l.PageSection,{variant:l.PageSectionVariants.light,className:"pf-c-page__main-tabs",padding:{default:"noPadding"}},r().createElement(l.Tabs,{onSelect:function(e,t){P(t)},activeKey:y,isBox:!1,className:"pf-m-page-insets"},r().createElement(l.Tab,{eventKey:0,title:r().createElement(l.TabTitleText,null,e("consumerGroup.consumer_groups")),tabContentId:"kafka-ui-TabcontentConsumerGroups",tabContentRef:S}),r().createElement(l.Tab,{eventKey:1,title:r().createElement(l.TabTitleText,null,e("common.properties")),tabContentId:"kafka-ui-TabcontentProperties",tabContentRef:x}))),r().createElement(l.PageSection,{variant:1===y?l.PageSectionVariants.light:l.PageSectionVariants.default},r().createElement(l.TabContent,{eventKey:0,id:"kafka-ui-TabcontentConsumerGroups",ref:S,className:"kafka-ui-m-full-height","aria-label":"Consumer groups.",hidden:0!==g},r().createElement(s.J,{topic:m,consumerGroupByTopic:!0})),r().createElement(l.TabContent,{eventKey:1,id:"kafka-ui-TabcontentProperties",ref:x,className:"kafka-ui-m-full-height","aria-label":"Topic properties",hidden:1!==g},r().createElement(h,{topicName:m,onDeleteTopic:function(){t.push(n)},onSaveTopic:function(){t.push("".concat(n,"/topics/").concat(m))},onError:v}))))}),y=n(68640),P=n(72669);const S=function(e){var t=e.getToken,n=e.apiBasePath,a=e.kafkaName,i=e.kafkaPageLink,o=e.kafkaInstanceLink,c=e.onError;return r().createElement(p.E.Provider,{value:{basePath:n,getToken:t}},r().createElement(E.J.Provider,{value:{activeTab:1,kafkaName:a,kafkaPageLink:i,kafkaInstanceLink:o,onError:c,kafka:{}}},r().createElement(P.ModalProvider,null,r().createElement(T,null),r().createElement(y.J,null))))}}}]);
