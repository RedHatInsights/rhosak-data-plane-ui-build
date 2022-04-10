"use strict";(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[9299],{29299:(e,t,i)=>{i.d(t,{e:()=>U});var n=i(85893),a=i(75418),s=i(68199),o=i(7451),c=i(85843),r=i(99421);const l=({isSwitchChecked:e,setIsSwitchChecked:t,kafkaName:i,kafkaPageLink:a,kafkaInstanceLink:s})=>{const{t:o}=(0,c.useTranslation)(["kafkaTemporaryFixMe"]),l=(0,n.jsxs)(r.Breadcrumb,{children:[(0,n.jsx)(r.BreadcrumbItem,Object.assign({to:a||"#"},{children:"Kafka Instances"})),(0,n.jsx)(r.BreadcrumbItem,Object.assign({to:s||"#"},{children:i||o("common.kafka_instance_name")})),(0,n.jsx)(r.BreadcrumbItem,Object.assign({to:"#",isActive:!0},{children:o("topic.create_topic")}))]});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("section",Object.assign({className:"pf-c-page__main-breadcrumb"},{children:l})),(0,n.jsxs)(r.PageSection,Object.assign({variant:r.PageSectionVariants.light},{children:[(0,n.jsx)(r.Title,Object.assign({headingLevel:"h1",size:"2xl"},{children:o("topic.create_topic")})),(0,n.jsx)("br",{}),(0,n.jsx)(r.Switch,{id:"simple-switch",label:o("topic.show_all_options"),labelOff:o("topic.show_all_options"),isChecked:e,onChange:t,className:"create-topic-wizard"})]}))]})};var d=i(223),m=i(56637);i(17293);const p=({topicData:e,setTopicData:t,topicNameValidated:i,setTopicNameValidated:s,invalidText:o,setInvalidText:l})=>{const{t:d}=(0,c.useTranslation)(["kafkaTemporaryFixMe"]),{validateName:p}=(0,m.N)(),u=e&&e.name,j=(0,a.useCallback)((e=>{const t=p(e);t?(l(t),s("error")):s("default")}),[l,s,p]);(0,a.useEffect)((()=>{j(u)}),[e.name,u,j]);return(0,n.jsx)(r.Form,Object.assign({onSubmit:e=>e.preventDefault()},{children:(0,n.jsxs)(r.FormSection,Object.assign({title:d("topic.topic_name"),id:"topic-name",titleElement:"h2"},{children:[(0,n.jsxs)(r.TextContent,{children:[(0,n.jsx)(r.Text,Object.assign({component:r.TextVariants.p},{children:d("topic.topic_name_info")})),(0,n.jsx)(r.Text,Object.assign({component:r.TextVariants.small},{children:d("topic.topic_name_info_note")}))]}),(0,n.jsx)(r.FormGroup,Object.assign({label:d("topic.topic_name"),fieldId:"step-topic-name-form",helperText:d("topic.topic_name_helper_text"),helperTextInvalid:o,validated:i,isRequired:!0},{children:(0,n.jsx)(r.TextInput,{isRequired:!0,type:"text",id:"step-topic-name-input",name:"step-topic-name",value:u,onChange:i=>{j(i),t(Object.assign(Object.assign({},e),{name:i}))},placeholder:d("topic.enter_name"),validated:i})}))]}))}))};var u=i(86737);const j=({topicData:e,setTopicData:t})=>{const{t:i}=(0,c.useTranslation)(["kafkaTemporaryFixMe"]),a=e&&e.numPartitions;return(0,n.jsx)(r.Form,{children:(0,n.jsxs)(r.FormSection,Object.assign({title:i("topic.partitions"),id:"partitions",titleElement:"h2"},{children:[(0,n.jsxs)(r.TextContent,{children:[(0,n.jsx)(r.Text,Object.assign({component:r.TextVariants.p},{children:i("topic.partition_info")})),(0,n.jsx)(r.Text,Object.assign({component:r.TextVariants.small},{children:i("topic.partition_info_note")}))]}),(0,n.jsx)(r.FormGroup,Object.assign({label:"Partitions",fieldId:"step-topic-name-form",helperText:i("topic.partition_helper_text"),isRequired:!0},{children:(0,n.jsx)(r.NumberInput,{onPlus:()=>{t(Object.assign(Object.assign({},e),{numPartitions:String(Number(e.numPartitions)+1)}))},onMinus:()=>{t(Object.assign(Object.assign({},e),{numPartitions:String(Number(e.numPartitions)-1)}))},value:Number(a),inputName:"input",onChange:i=>{let n=Number(i.target.value);n<u.jR?n=u.jR:n>u.TE&&(n=u.TE),t(Object.assign(Object.assign({},e),{numPartitions:String(n)}))},widthChars:20,min:u.jR,max:u.TE})}))]}))})};var x=i(92249),h=i(1787),b=i(93353);const g=({topicData:e,setTopicData:t})=>{const{t:i}=(0,c.useTranslation)(["kafkaTemporaryFixMe"]),[s,o]=(0,a.useState)(!1),[l,d]=(0,a.useState)(!1),m=i=>{t(Object.assign(Object.assign({},e),{"retention.ms":i===h.UC.UNLIMITED||i===h.UC.CUSTOM?e["retention.ms"]:`${h.yN[i]}`,selectedRetentionTimeOption:i}))},p=i=>{t(Object.assign(Object.assign({},e),{"retention.bytes":i===h.KP.UNLIMITED||i===h.KP.CUSTOM?e["retention.bytes"]:`${h.AV[i]}`,selectedRetentionSizeOption:i}))};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(r.Form,Object.assign({onSubmit:e=>e.preventDefault()},{children:(0,n.jsxs)(r.FormSection,Object.assign({title:i("topic.message_retention"),id:"message-retention",titleElement:"h2"},{children:[(0,n.jsxs)(r.TextContent,{children:[(0,n.jsx)(r.Text,Object.assign({component:r.TextVariants.p},{children:i("topic.message_retention_info")})),(0,n.jsx)(r.Text,Object.assign({component:r.TextVariants.small},{children:i("topic.message_retention_info_note")}))]}),(0,n.jsx)(r.FormGroup,Object.assign({fieldId:"form-group-retention-time-in-wizard",label:i("topic.retention_time")},{children:(0,n.jsxs)(r.Stack,Object.assign({hasGutter:!0},{children:[(0,n.jsx)(r.Radio,{isChecked:e.selectedRetentionTimeOption===h.UC.DAY,name:"radioDay",onChange:()=>m(h.UC.DAY),label:"A day","aria-label":"A day",id:"radio-controlled-1",value:h.UC.DAY}),(0,n.jsx)(r.Radio,{isChecked:e.selectedRetentionTimeOption===h.UC.WEEK,name:"radioWeek",onChange:()=>m(h.UC.WEEK),label:"A week","aria-label":"A week",id:"radio-controlled-2",value:h.UC.WEEK}),(0,n.jsx)(r.Radio,{isChecked:e.selectedRetentionTimeOption===h.UC.CUSTOM,name:"radioCustomTime",onChange:()=>m(h.UC.CUSTOM),label:"Custom duration","aria-label":"custom input",id:"radio-controlled-4",value:h.UC.CUSTOM}),e.selectedRetentionTimeOption===h.UC.CUSTOM&&(0,n.jsx)(x.J,{name:"retention-ms",topicData:e,setTopicData:t,onToggle:e=>{o(e)},isOpen:s,selectOptions:b.i}),(0,n.jsx)(r.Radio,{isChecked:e.selectedRetentionTimeOption===h.UC.UNLIMITED,name:"radioUnlimitedTime",onChange:()=>m(h.UC.UNLIMITED),label:"Unlimited","aria-label":"Unlimited",id:"radio-controlled-3",value:h.UC.UNLIMITED})]}))})),(0,n.jsx)(r.FormGroup,Object.assign({fieldId:"form-group-retention-size-in-wizard",label:"Retention size"},{children:(0,n.jsxs)(r.Stack,Object.assign({hasGutter:!0},{children:[(0,n.jsx)(r.Radio,{isChecked:e.selectedRetentionSizeOption===h.KP.UNLIMITED,name:"radioUnlimitedSize",onChange:()=>p(h.KP.UNLIMITED),label:"Unlimited","aria-label":"Unlimited",id:"radio-controlled-6",value:h.KP.UNLIMITED}),(0,n.jsx)(r.Radio,{isChecked:e.selectedRetentionSizeOption===h.KP.CUSTOM,name:"radioCustomSize",onChange:()=>p(h.KP.CUSTOM),label:"Custom size","aria-label":"custom input",id:"radio-controlled-5",value:h.KP.CUSTOM}),e.selectedRetentionSizeOption===h.KP.CUSTOM&&(0,n.jsx)(x.J,{name:"retention-bytes",topicData:e,setTopicData:t,onToggle:e=>{d(e)},isOpen:l,selectOptions:b.W})]}))}))]}))}))})};var T=i(76153);const k=({replicationFactor:e,minInSyncReplica:t})=>{const{t:i}=(0,c.useTranslation)(["kafkaTemporaryFixMe"]);return(0,n.jsx)(r.Form,{children:(0,n.jsxs)(r.FormSection,Object.assign({title:i("common.replicas"),id:"replica-section",titleElement:"h2"},{children:[(0,n.jsxs)(r.TextContent,{children:[(0,n.jsx)(r.Text,Object.assign({component:r.TextVariants.p},{children:i("topic.replicas_info")})),(0,n.jsx)(r.Text,Object.assign({component:r.TextVariants.small},{children:i("topic.replicas_detail")}))]}),(0,n.jsx)(r.Alert,{variant:"info",isInline:!0,title:i("topic.replicas_helper_text")}),(0,n.jsx)(T.R,{fieldId:"replicas",btnAriaLabel:i("common.replicas"),fieldLabel:i("common.replicas"),fieldValue:e.toString(),popoverBody:i("topic.replicas_description"),popoverHeader:i("topic.replicas")}),(0,n.jsx)(T.R,{fieldId:"min-insync-replicas",btnAriaLabel:"topic detail min-in-sync replica",fieldLabel:"Minimum in-sync replicas",fieldValue:t.toString(),popoverBody:i("topic.min_insync_replicas_description"),popoverHeader:i("topic.min_insync_replicas")})]}))})};var C=i(50334);const O=({isLoading:e,onValidate:t,topicNameValidated:i,closeWizard:a})=>{const{t:s}=(0,c.useTranslation)(["kafkaTemporaryFixMe"]);return(0,n.jsx)(r.WizardFooter,{children:(0,n.jsx)(r.WizardContextConsumer,{children:({activeStep:o,onNext:c,onBack:l})=>o.name==s("topic.topic_name")?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.Button,Object.assign({variant:"primary",type:"submit",isLoading:e,onClick:()=>t(c),isDisabled:"default"!=i},{children:s("common.next")})),(0,n.jsx)(r.Button,Object.assign({variant:"secondary",isDisabled:!0},{children:s("common.back")})),(0,n.jsx)(r.Button,Object.assign({variant:"link",onClick:a},{children:s("common.cancel")}))]}):"Replicas"==o.name?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.Button,Object.assign({variant:"primary",type:"submit",onClick:c,isLoading:e},{children:s("common.finish")})),(0,n.jsx)(r.Button,Object.assign({variant:"secondary",onClick:l},{children:s("common.back")})),(0,n.jsx)(r.Button,Object.assign({variant:"link",onClick:a},{children:s("common.cancel")}))]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.Button,Object.assign({variant:"primary",type:"submit",onClick:c},{children:s("common.next")})),(0,n.jsx)(r.Button,Object.assign({variant:"secondary",onClick:l},{children:s("common.back")})),(0,n.jsx)(r.Button,Object.assign({variant:"link",onClick:a},{children:s("common.cancel")}))]})})})};var v=i(98639),f=i(3654),_=i(60540),S=i(5736);const y=({isSwitchChecked:e,onCloseCreateTopic:t})=>{const i=(0,a.useContext)(f.E),{t:s}=(0,c.useTranslation)(["kafkaTemporaryFixMe"]),{addAlert:l}=(0,o.useAlert)()||{addAlert:()=>{}},m={name:"",numPartitions:"1","retention.ms":"7","retention.ms.unit":"days","retention.bytes":"1","retention.bytes.unit":"bytes","cleanup.policy":"delete",selectedRetentionTimeOption:h.UC.WEEK,selectedRetentionSizeOption:h.KP.UNLIMITED},[u,x]=(0,a.useState)("default"),[b,T]=(0,a.useState)(!1),[y,I]=(0,a.useState)(""),[U,D]=(0,a.useState)(m),N=()=>{t&&t()},F=()=>{T(!0);const t=e?["cleanup.policy"]:[],n=(0,h.az)(U,t);new v.TopicsApi(new v.Configuration({basePath:null==i?void 0:i.basePath,accessToken:null==i?void 0:i.getToken})).createTopic(n).then((()=>{l({variant:r.AlertVariant.success,title:s("topic.topic_successfully_created")}),T(!1),N()})).catch((e=>{T(!1),l({variant:r.AlertVariant.danger,title:e.response.data.error_message}),N()}))},P=[{name:s("topic.topic_name"),enableNext:""!==(null==U?void 0:U.name.trim())&&"default"===u,component:(0,n.jsx)(p,{topicData:U,setTopicData:D,topicNameValidated:u,setTopicNameValidated:x,invalidText:y,setInvalidText:I})},{name:s("common.partitions"),canJumpTo:""!==(null==U?void 0:U.name.trim()),component:(0,n.jsx)(j,{topicData:U,setTopicData:D})},{name:s("topic.message_retention"),canJumpTo:""!==(null==U?void 0:U.name.trim()),component:(0,n.jsx)(g,{topicData:U,setTopicData:D})},{name:s("common.replicas"),canJumpTo:""!==(null==U?void 0:U.name.trim()),component:(0,n.jsx)(k,{replicationFactor:3,minInSyncReplica:2}),nextButtonText:s("common.finish")}],R=s("topic.wizard_title");return(0,n.jsx)(n.Fragment,{children:e?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.Divider,{className:"kafka-ui--divider--FlexShrink"}),(0,n.jsx)(r.PageSection,Object.assign({variant:r.PageSectionVariants.light},{children:(0,n.jsx)(C.W,{isCreate:!0,saveTopic:F,handleCancel:t,topicData:U,setTopicData:D})}))]}):(0,n.jsx)(r.PageSection,Object.assign({variant:r.PageSectionVariants.light,type:r.PageSectionTypes.wizard,isFilled:!0},{children:(0,n.jsx)(r.Wizard,{navAriaLabel:`${R} steps`,mainAriaLabel:`${R} content`,steps:P,onClose:N,onSave:F,"data-testid":"topicBasicCreate-Wizard",footer:(0,n.jsx)(O,{isLoading:b,onValidate:e=>{(null==U?void 0:U.name.length)<1?(I(s("topic.required")),x("error")):"."===(null==U?void 0:U.name)||".."===(null==U?void 0:U.name)?(I(s("topic.invalid_name_with_dot")),x("error")):(T(!0),((e,t)=>{(0,d.__awaiter)(void 0,void 0,void 0,(function*(){var n;try{(yield(0,_.BN)(e,i))&&(I(s("topic.already_exists",{name:e})),x("error"),T(!1))}catch(e){e&&(0,S.I)(e)&&404===(null===(n=e.response)||void 0===n?void 0:n.status)&&(x("default"),T(!1),t())}}))})(null==U?void 0:U.name,e))},topicNameValidated:u,closeWizard:N})})}))})};var I=i(64517);i(27958);const U=()=>{const{kafkaName:e,kafkaPageLink:t,kafkaInstanceLink:i}=(0,I.S)()||{},c=(0,s.useHistory)(),{getBasename:r}=(0,o.useBasename)()||{getBasename:()=>""},d=r(),[m,p]=(0,a.useState)(!1);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l,{isSwitchChecked:m,setIsSwitchChecked:p,kafkaName:e,kafkaInstanceLink:i,kafkaPageLink:t}),(0,n.jsx)(y,{isSwitchChecked:m,onCloseCreateTopic:()=>{c.push(`${d}/topics`)}})]})}}}]);
//# sourceMappingURL=9299.9787cc17.js.map