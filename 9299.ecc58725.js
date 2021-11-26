"use strict";(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[9299],{29299:(e,t,n)=>{n.d(t,{e:()=>N});var a=n(75418),i=n.n(a),o=n(98068),r=n(46332),c=n(31521),l=n(84669),m=function(e){var t=e.isSwitchChecked,n=e.setIsSwitchChecked,a=e.kafkaName,o=e.kafkaPageLink,r=e.kafkaInstanceLink,m=(0,c.useTranslation)().t,s=i().createElement(l.Breadcrumb,null,i().createElement(l.BreadcrumbItem,{to:o||"#"},"Kafka Instances"),i().createElement(l.BreadcrumbItem,{to:r||"#"},a||m("common.kafka_instance_name")),i().createElement(l.BreadcrumbItem,{to:"#",isActive:!0},m("topic.create_topic")));return i().createElement(i().Fragment,null,i().createElement("section",{className:"pf-c-page__main-breadcrumb"},s),i().createElement(l.PageSection,{variant:l.PageSectionVariants.light},i().createElement(l.Title,{headingLevel:"h1",size:"2xl"},m("topic.create_topic")),i().createElement("br",null),i().createElement(l.Switch,{id:"simple-switch",label:m("topic.show_all_options"),labelOff:m("topic.show_all_options"),isChecked:t,onChange:n,className:"create-topic-wizard"})))},s=n(56637),u=(n(63168),function(){return u=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},u.apply(this,arguments)}),p=function(e){var t=e.topicData,n=e.setTopicData,o=e.topicNameValidated,r=e.setTopicNameValidated,m=e.invalidText,p=e.setInvalidText,d=(0,c.useTranslation)().t,f=(0,s.N)().validateName,E=t&&t.name;(0,a.useEffect)((function(){h(E)}),[t.name]);var h=function(e){var t=f(e);t?(p(t),r("error")):r("default")};return i().createElement(l.Form,{onSubmit:function(e){return e.preventDefault()}},i().createElement(l.FormSection,{title:d("topic.topic_name"),id:"topic-name",titleElement:"h2"},i().createElement(l.TextContent,null,i().createElement(l.Text,{component:l.TextVariants.p},d("topic.topic_name_info")),i().createElement(l.Text,{component:l.TextVariants.small},d("topic.topic_name_info_note"))),i().createElement(l.FormGroup,{label:d("topic.topic_name"),fieldId:"step-topic-name-form",helperText:d("topic.topic_name_helper_text"),helperTextInvalid:m,validated:o,isRequired:!0},i().createElement(l.TextInput,{isRequired:!0,type:"text",id:"step-topic-name-input",name:"step-topic-name",value:E,onChange:function(e){h(e),n(u(u({},t),{name:e}))},placeholder:d("topic.enter_name"),validated:o}))))},d=n(86737),f=function(){return f=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},f.apply(this,arguments)},E=function(e){var t=e.topicData,n=e.setTopicData,a=(0,c.useTranslation)().t,o=t&&t.numPartitions;return i().createElement(l.Form,null,i().createElement(l.FormSection,{title:a("topic.partitions"),id:"partitions",titleElement:"h2"},i().createElement(l.TextContent,null,i().createElement(l.Text,{component:l.TextVariants.p},a("topic.partition_info")),i().createElement(l.Text,{component:l.TextVariants.small},a("topic.partition_info_note"))),i().createElement(l.FormGroup,{label:"Partitions",fieldId:"step-topic-name-form",helperText:a("topic.partition_helper_text"),isRequired:!0},i().createElement(l.NumberInput,{onPlus:function(){n(f(f({},t),{numPartitions:String(Number(t.numPartitions)+1)}))},onMinus:function(){n(f(f({},t),{numPartitions:String(Number(t.numPartitions)-1)}))},value:Number(o),inputName:"input",onChange:function(e){var a=Number(e.target.value);a<d.jR?a=d.jR:a>d.TE&&(a=d.TE),n(f(f({},t),{numPartitions:String(a)}))},widthChars:20,min:d.jR,max:d.TE}))))},h=n(92249),T=n(1787),v=n(93353),b=function(){return b=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},b.apply(this,arguments)},C=function(e){var t=e.topicData,n=e.setTopicData,o=(0,c.useTranslation)().t,r=(0,a.useState)(!1),m=r[0],s=r[1],u=(0,a.useState)(!1),p=u[0],d=u[1],f=function(e){n(b(b({},t),{"retention.ms":e===T.UC.UNLIMITED||e===T.UC.CUSTOM?t["retention.ms"]:T.yN[e],selectedRetentionTimeOption:e}))},E=function(e){n(b(b({},t),{"retention.bytes":e===T.KP.UNLIMITED||e===T.KP.CUSTOM?t["retention.bytes"]:T.AV[e],selectedRetentionSizeOption:e}))};return i().createElement(i().Fragment,null,i().createElement(l.Form,{onSubmit:function(e){return e.preventDefault()}},i().createElement(l.FormSection,{title:o("topic.message_retention"),id:"message-retention",titleElement:"h2"},i().createElement(l.TextContent,null,i().createElement(l.Text,{component:l.TextVariants.p},o("topic.message_retention_info")),i().createElement(l.Text,{component:l.TextVariants.small},o("topic.message_retention_info_note"))),i().createElement(l.FormGroup,{fieldId:"form-group-retention-time-in-wizard",label:o("topic.retention_time")},i().createElement(l.Stack,{hasGutter:!0},i().createElement(l.Radio,{isChecked:t.selectedRetentionTimeOption===T.UC.DAY,name:"radioDay",onChange:function(){return f(T.UC.DAY)},label:"A day","aria-label":"A day",id:"radio-controlled-1",value:T.UC.DAY}),i().createElement(l.Radio,{isChecked:t.selectedRetentionTimeOption===T.UC.WEEK,name:"radioWeek",onChange:function(){return f(T.UC.WEEK)},label:"A week","aria-label":"A week",id:"radio-controlled-2",value:T.UC.WEEK}),i().createElement(l.Radio,{isChecked:t.selectedRetentionTimeOption===T.UC.CUSTOM,name:"radioCustomTime",onChange:function(){return f(T.UC.CUSTOM)},label:"Custom duration","aria-label":"custom input",id:"radio-controlled-4",value:T.UC.CUSTOM}),t.selectedRetentionTimeOption===T.UC.CUSTOM&&i().createElement(h.J,{name:"retention-ms",topicData:t,setTopicData:n,onToggle:function(e){s(e)},isOpen:m,selectOptions:v.i}),i().createElement(l.Radio,{isChecked:t.selectedRetentionTimeOption===T.UC.UNLIMITED,name:"radioUnlimitedTime",onChange:function(){return f(T.UC.UNLIMITED)},label:"Unlimited","aria-label":"Unlimited",id:"radio-controlled-3",value:T.UC.UNLIMITED}))),i().createElement(l.FormGroup,{fieldId:"form-group-retention-size-in-wizard",label:"Retention size"},i().createElement(l.Stack,{hasGutter:!0},i().createElement(l.Radio,{isChecked:t.selectedRetentionSizeOption===T.KP.UNLIMITED,name:"radioUnlimitedSize",onChange:function(){return E(T.KP.UNLIMITED)},label:"Unlimited","aria-label":"Unlimited",id:"radio-controlled-6",value:T.KP.UNLIMITED}),i().createElement(l.Radio,{isChecked:t.selectedRetentionSizeOption===T.KP.CUSTOM,name:"radioCustomSize",onChange:function(){return E(T.KP.CUSTOM)},label:"Custom size","aria-label":"custom input",id:"radio-controlled-5",value:T.KP.CUSTOM}),t.selectedRetentionSizeOption===T.KP.CUSTOM&&i().createElement(h.J,{name:"retention-bytes",topicData:t,setTopicData:n,onToggle:function(e){d(e)},isOpen:p,selectOptions:v.W}))))))},k=n(39806),g=function(e){var t=e.replicationFactor,n=e.minInSyncReplica,a=(0,c.useTranslation)().t;return i().createElement(l.Form,null,i().createElement(l.FormSection,{title:a("common.replicas"),id:"replica-section",titleElement:"h2"},i().createElement(l.TextContent,null,i().createElement(l.Text,{component:l.TextVariants.p},a("topic.replicas_info")),i().createElement(l.Text,{component:l.TextVariants.small},a("topic.replicas_detail"))),i().createElement(l.Alert,{variant:"info",isInline:!0,title:a("topic.replicas_helper_text")}),i().createElement(k.R,{fieldId:"replicas",btnAriaLabel:a("common.replicas"),fieldLabel:a("common.replicas"),fieldValue:t.toString(),popoverBody:a("topic.replicas_description"),popoverHeader:a("topic.replicas")}),i().createElement(k.R,{fieldId:"min-insync-replicas",btnAriaLabel:"topic detail min-in-sync replica",fieldLabel:"Minimum in-sync replicas",fieldValue:n.toString(),popoverBody:a("topic.min_insync_replicas_description"),popoverHeader:a("topic.min_insync_replicas")})))},y=n(50334),S=function(e){var t=e.isLoading,n=e.onValidate,a=e.topicNameValidated,o=e.closeWizard,r=(0,c.useTranslation)().t;return i().createElement(l.WizardFooter,null,i().createElement(l.WizardContextConsumer,null,(function(e){var c=e.activeStep,m=e.onNext,s=e.onBack;return c.name==r("topic.topic_name")?i().createElement(i().Fragment,null,i().createElement(l.Button,{variant:"primary",type:"submit",isLoading:t,onClick:function(){return n(m)},isDisabled:"default"!=a},r("common.next")),i().createElement(l.Button,{variant:"secondary",isDisabled:!0},r("common.back")),i().createElement(l.Button,{variant:"link",onClick:o},r("common.cancel"))):"Replicas"==c.name?i().createElement(i().Fragment,null,i().createElement(l.Button,{variant:"primary",type:"submit",onClick:m,isLoading:t},r("common.finish")),i().createElement(l.Button,{variant:"secondary",onClick:s},r("common.back")),i().createElement(l.Button,{variant:"link",onClick:o},r("common.cancel"))):i().createElement(i().Fragment,null,i().createElement(l.Button,{variant:"primary",type:"submit",onClick:m},r("common.next")),i().createElement(l.Button,{variant:"secondary",onClick:s},r("common.back")),i().createElement(l.Button,{variant:"link",onClick:o},r("common.cancel")))})))},_=n(23587),x=n(3654),I=n(60540),U=n(5736),w=function(e,t,n,a){return new(n||(n=Promise))((function(i,o){function r(e){try{l(a.next(e))}catch(e){o(e)}}function c(e){try{l(a.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,c)}l((a=a.apply(e,t||[])).next())}))},D=function(e,t){var n,a,i,o,r={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,a&&(i=2&o[0]?a.return:o[0]?a.throw||((i=a.return)&&i.call(a),0):a.next)&&!(i=i.call(a,o[1])).done)return i;switch(a=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return r.label++,{value:o[1],done:!1};case 5:r.label++,a=o[1],o=[0];continue;case 7:o=r.ops.pop(),r.trys.pop();continue;default:if(!(i=r.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){r=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){r.label=o[1];break}if(6===o[0]&&r.label<i[1]){r.label=i[1],i=o;break}if(i&&r.label<i[2]){r.label=i[2],r.ops.push(o);break}i[2]&&r.ops.pop(),r.trys.pop();continue}o=t.call(e,r)}catch(e){o=[6,e],a=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}},O=function(e){var t=e.isSwitchChecked,n=e.onCloseCreateTopic,o=(0,a.useContext)(x.E),m=(0,c.useTranslation)().t,s=((0,r.useAlert)()||{addAlert:function(){}}).addAlert,u={name:"",numPartitions:"1","retention.ms":"7","retention.ms.unit":"days","retention.bytes":"1","retention.bytes.unit":"bytes","cleanup.policy":"delete",selectedRetentionTimeOption:T.UC.WEEK,selectedRetentionSizeOption:T.KP.UNLIMITED},d=(0,a.useState)("default"),f=d[0],h=d[1],v=(0,a.useState)(!1),b=v[0],k=v[1],O=(0,a.useState)(""),P=O[0],N=O[1],R=(0,a.useState)(u),L=R[0],F=R[1],V=function(){n&&n()},z=function(){k(!0);var e=t?["cleanup.policy"]:[],n=(0,T.az)(L,e);new _.TopicsApi(new _.Configuration({basePath:null==o?void 0:o.basePath,accessToken:null==o?void 0:o.getToken})).createTopic(n).then((function(){s({variant:l.AlertVariant.success,title:m("topic.topic_successfully_created")}),k(!1),V()})).catch((function(e){k(!1),s({variant:l.AlertVariant.danger,title:e.response.data.error_message}),V()}))},B=[{name:m("topic.topic_name"),enableNext:""!==(null==L?void 0:L.name.trim())&&"default"===f,component:i().createElement(p,{topicData:L,setTopicData:F,topicNameValidated:f,setTopicNameValidated:h,invalidText:P,setInvalidText:N})},{name:m("common.partitions"),canJumpTo:""!==(null==L?void 0:L.name.trim()),component:i().createElement(E,{topicData:L,setTopicData:F})},{name:m("topic.message_retention"),canJumpTo:""!==(null==L?void 0:L.name.trim()),component:i().createElement(C,{topicData:L,setTopicData:F})},{name:m("common.replicas"),canJumpTo:""!==(null==L?void 0:L.name.trim()),component:i().createElement(g,{replicationFactor:3,minInSyncReplica:2}),nextButtonText:m("common.finish")}],M=m("topic.wizard_title");return i().createElement(i().Fragment,null,t?i().createElement(i().Fragment,null,i().createElement(l.Divider,{className:"kafka-ui--divider--FlexShrink"}),i().createElement(l.PageSection,{variant:l.PageSectionVariants.light},i().createElement(y.W,{isCreate:!0,saveTopic:z,handleCancel:n,topicData:L,setTopicData:F}))):i().createElement(l.PageSection,{variant:l.PageSectionVariants.light,type:l.PageSectionTypes.wizard,isFilled:!0},i().createElement(l.Wizard,{navAriaLabel:"".concat(M," steps"),mainAriaLabel:"".concat(M," content"),steps:B,onClose:V,onSave:z,"data-testid":"topicBasicCreate-Wizard",footer:i().createElement(S,{isLoading:b,onValidate:function(e){(null==L?void 0:L.name.length)<1?(N(m("topic.required")),h("error")):"."===(null==L?void 0:L.name)||".."===(null==L?void 0:L.name)?(N(m("topic.invalid_name_with_dot")),h("error")):(k(!0),function(e,t){w(void 0,void 0,void 0,(function(){var n,a;return D(this,(function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),[4,(0,I.BN)(e,o)];case 1:return i.sent()&&(N(m("topic.already_exists",{name:e})),h("error"),k(!1)),[3,3];case 2:return(n=i.sent())&&(0,U.I)(n)&&404===(null===(a=n.response)||void 0===a?void 0:a.status)&&(h("default"),k(!1),t()),[3,3];case 3:return[2]}}))}))}(null==L?void 0:L.name,e))},topicNameValidated:f,closeWizard:V})})))},P=n(64517),N=(n(41781),function(){var e=(0,P.S)()||{},t=e.kafkaName,n=e.kafkaPageLink,c=e.kafkaInstanceLink,l=(0,o.useHistory)(),s=(0,((0,r.useBasename)()||{getBasename:function(){return""}}).getBasename)(),u=(0,a.useState)(!1),p=u[0],d=u[1];return i().createElement(i().Fragment,null,i().createElement(m,{isSwitchChecked:p,setIsSwitchChecked:d,kafkaName:t,kafkaInstanceLink:c,kafkaPageLink:n}),i().createElement(O,{isSwitchChecked:p,onCloseCreateTopic:function(){l.push("".concat(s,"/topics"))}}))})}}]);
//# sourceMappingURL=9299.ecc58725.js.map