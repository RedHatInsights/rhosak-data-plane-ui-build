"use strict";(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[4043],{2766:(e,a,t)=>{t.d(a,{$:()=>s});var n=t(75418),o=t.n(n),r=t(2695),i=t(68199),c=t(99421),l=t(64517),s=function(e){var a=e.activeTabKey,t=(0,r.useTranslation)(["kafkaTemporaryFixMe"]).t,s=(0,i.useHistory)(),m=(0,l.S)()||{},d=m.kafkaPageLink,k=m.kafkaName,u=m.handleInstanceDrawer,b=m.onDeleteInstance,p=(0,n.useState)(),f=p[0],g=p[1],E=function(e){u&&u(!0,e)},T=o().createElement(c.Breadcrumb,null,o().createElement(c.BreadcrumbItem,{to:d||"#"},t("common.kafka_instance")),o().createElement(c.BreadcrumbItem,{to:"#",isActive:!0},k||t("common.kafka_instance_name"))),v=[o().createElement(c.DropdownItem,{key:"view-kafka",onClick:function(){return E("details")}},t("common.view_instance")),o().createElement(c.DropdownItem,{key:"connect-kafka",onClick:function(){return E("connection")}},t("common.view_connection")),o().createElement(c.DropdownItem,{key:"delete-kafka",onClick:b},t("common.delete_instance"))];return o().createElement(o().Fragment,null,o().createElement("section",{className:"pf-c-page__main-breadcrumb"},T),o().createElement(c.PageSection,{variant:c.PageSectionVariants.light},o().createElement(c.Level,null,o().createElement(c.Title,{headingLevel:"h1"},k||t("common.kafka_instance_name")),o().createElement(c.Dropdown,{onSelect:function(){g(!f)},toggle:o().createElement(c.KebabToggle,{onToggle:function(e){g(e)},id:"toggle-data-plane"}),isOpen:f,isPlain:!0,dropdownItems:v,position:c.DropdownPosition.right}))),o().createElement(c.PageSection,{variant:c.PageSectionVariants.light,padding:{default:"noPadding"},className:"pf-c-page__main-tabs"},o().createElement(c.Tabs,{activeKey:a,onSelect:function(e,a){var t;switch(a){default:t="dashboard";break;case 2:t="topics";break;case 3:t="consumer-groups";break;case 4:t="acls"}s.push(t)},"data-testid":"pageKafka-tabProperties",className:"pf-m-page-insets"},o().createElement(c.Tab,{title:o().createElement(c.TabTitleText,null,t("dashboard.dashboard")),eventKey:1,"data-testid":"pageKafka-tabDashboard",id:"dashboard-tab-section","aria-label":t("dashboard.dashboard"),tabContentId:"kafka-ui-TabcontentDashboard"}),o().createElement(c.Tab,{title:o().createElement(c.TabTitleText,null,t("topic.topics")),eventKey:2,"data-testid":"pageKafka-tabTopics",id:"topics-tab-section","aria-label":t("topic.topics"),tabContentId:"kafka-ui-TabcontentTopicsList"}),o().createElement(c.Tab,{title:o().createElement(c.TabTitleText,null,t("consumerGroup.consumer_groups")),eventKey:3,"data-testid":"pageKafka-tabConsumers",id:"consumer-groups-tab-section","aria-label":t("consumerGroup.consumer_groups"),tabContentId:"kafka-ui-TabcontentConsumersList"}),o().createElement(c.Tab,{title:o().createElement(c.TabTitleText,null,t("permission.tab.label")),eventKey:4,"data-testid":"pageKafka-tabPermissions",id:"permissions-tab-section","aria-label":t("permission.tab.label"),tabContentId:"kafka-ui-TabcontentPermissions"}))))}},64517:(e,a,t)=>{t.d(a,{J:()=>o,S:()=>r});var n=t(75418),o=t.n(n)().createContext(void 0),r=function(){return(0,n.useContext)(o)}},48845:(e,a,t)=>{t.r(a),t.d(a,{default:()=>b});var n=t(75418),o=t.n(n),r=t(99421),i=t(63850),c=t(10458),l=t(82639),s=t(2766),m=t(68640),d=t(3654),k=t(64517),u=t(7451);const b=function(e){var a=e.kafkaName,t=e.kafkaPageLink,n=e.handleInstanceDrawer,b=e.redirectAfterDeleteInstance,p=e.kafka,f=e.onError,g=e.apiBasePath,E=e.getToken,T=(0,u.useModal)().showModal;return o().createElement(d.E.Provider,{value:{basePath:g,getToken:E}},o().createElement(k.J.Provider,{value:{kafkaName:a,kafkaPageLink:t,handleInstanceDrawer:n,kafka:p,redirectAfterDeleteInstance:b,onError:f,onDeleteInstance:function(){T&&T(u.ModalType.KasDeleteInstance,{kafka:p,onDelete:b})}}},o().createElement(c.ModalProvider,null,o().createElement(l.bN,null,o().createElement(s.$,{activeTabKey:3}),o().createElement(r.PageSection,{isFilled:!0},o().createElement(i.J,{consumerGroupByTopic:!1}),o().createElement(m.J,null))))))}}}]);
//# sourceMappingURL=4043.adb96fb9.js.map