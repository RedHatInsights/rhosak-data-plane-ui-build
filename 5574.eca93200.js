"use strict";(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[5574],{2766:(e,a,t)=>{t.d(a,{$:()=>l});var n=t(75418),o=t.n(n),i=t(31521),r=t(98068),c=t(84669),s=t(64517),l=function(e){var a=e.activeTabKey,t=(0,i.useTranslation)().t,l=(0,r.useHistory)(),m=(0,s.S)()||{},d=m.kafkaPageLink,k=m.kafkaName,u=m.handleInstanceDrawer,b=m.onDeleteInstance,f=(0,n.useState)(),p=f[0],g=f[1],T=function(e){u&&u(!0,e)},E=o().createElement(c.Breadcrumb,null,o().createElement(c.BreadcrumbItem,{to:d||"#"},t("common.kafka_instance")),o().createElement(c.BreadcrumbItem,{to:"#",isActive:!0},k||t("common.kafka_instance_name"))),v=[o().createElement(c.DropdownItem,{key:"view-kafka",onClick:function(){return T("details")}},t("common.view_instance")),o().createElement(c.DropdownItem,{key:"connect-kafka",onClick:function(){return T("connection")}},t("common.view_connection")),o().createElement(c.DropdownItem,{key:"delete-kafka",onClick:b},t("common.delete_instance"))];return o().createElement(o().Fragment,null,o().createElement("section",{className:"pf-c-page__main-breadcrumb"},E),o().createElement(c.PageSection,{variant:c.PageSectionVariants.light},o().createElement(c.Level,null,o().createElement(c.Title,{headingLevel:"h1"},k||t("common.kafka_instance_name")),o().createElement(c.Dropdown,{onSelect:function(){g(!p)},toggle:o().createElement(c.KebabToggle,{onToggle:function(e){g(e)},id:"toggle-data-plane"}),isOpen:p,isPlain:!0,dropdownItems:v,position:c.DropdownPosition.right}))),o().createElement(c.PageSection,{variant:c.PageSectionVariants.light,padding:{default:"noPadding"},className:"pf-c-page__main-tabs"},o().createElement(c.Tabs,{activeKey:a,onSelect:function(e,a){var t;switch(a){default:t="dashboard";break;case 2:t="topics";break;case 3:t="consumer-groups";break;case 4:t="acls"}l.push(t)},"data-testid":"pageKafka-tabProperties",className:"pf-m-page-insets"},o().createElement(c.Tab,{title:o().createElement(c.TabTitleText,null,t("dashboard.dashboard")),eventKey:1,"data-testid":"pageKafka-tabDashboard",id:"dashboard-tab-section","aria-label":t("dashboard.dashboard"),tabContentId:"kafka-ui-TabcontentDashboard"}),o().createElement(c.Tab,{title:o().createElement(c.TabTitleText,null,t("topic.topics")),eventKey:2,"data-testid":"pageKafka-tabTopics",id:"topics-tab-section","aria-label":t("topic.topics"),tabContentId:"kafka-ui-TabcontentTopicsList"}),o().createElement(c.Tab,{title:o().createElement(c.TabTitleText,null,t("consumerGroup.consumer_groups")),eventKey:3,"data-testid":"pageKafka-tabConsumers",id:"consumer-groups-tab-section","aria-label":t("consumerGroup.consumer_groups"),tabContentId:"kafka-ui-TabcontentConsumersList"}),o().createElement(c.Tab,{title:o().createElement(c.TabTitleText,null,t("permission.tab.label")),eventKey:4,"data-testid":"pageKafka-tabPermissions",id:"permissions-tab-section","aria-label":t("permission.tab.label"),tabContentId:"kafka-ui-TabcontentPermissions"}))))}},64517:(e,a,t)=>{t.d(a,{J:()=>o,S:()=>i});var n=t(75418),o=t.n(n)().createContext(void 0),i=function(){return(0,n.useContext)(o)}},15574:(e,a,t)=>{t.r(a),t.d(a,{Dashboard:()=>m,default:()=>d});var n=t(75418),o=t.n(n),i=t(31521),r=t(35380),c=t(2766),s=t(64517),l=t(46332),m=function(e){var a=e.showMetrics,t=e.kafkaName,n=e.kafkaPageLink,m=e.handleInstanceDrawer,d=e.redirectAfterDeleteInstance,k=e.kafka,u=(0,l.useModal)().showModal;return o().createElement(i.I18nextProvider,{i18n:r.Z},o().createElement(s.J.Provider,{value:{kafkaName:t,kafkaPageLink:n,handleInstanceDrawer:m,kafka:k,redirectAfterDeleteInstance:d,onDeleteInstance:function(){u&&u(l.ModalType.KasDeleteInstance,{kafka:k,onDelete:d})}}},o().createElement(c.$,{activeTabKey:1}),a))};const d=m}}]);
//# sourceMappingURL=5574.eca93200.js.map