"use strict";(self.webpackChunkkafka_ui=self.webpackChunkkafka_ui||[]).push([[656],{35297:(e,t,a)=>{a.r(t);var i=a(85893),o=a(3644),n=a.n(o),s=a(9922),r=a(93264),c=a.n(r),l=a(68199),u=a(3654),d=a(99922);const p=({alerts:e,onCloseAlert:t})=>(0,i.jsx)(d.AlertGroup,Object.assign({isToast:!0},{children:e.map((e=>{var{id:a,variant:o,title:n,description:r,dataTestId:c}=e,l=(0,s.__rest)(e,["id","variant","title","description","dataTestId"]);return(0,i.jsx)(d.Alert,Object.assign({isLiveRegion:!0,variant:d.AlertVariant[o],variantLabel:"",title:n,actionClose:(0,i.jsx)(d.AlertActionCloseButton,{title:n,onClose:()=>t(a)}),"data-testid":c},l,{children:r}),a)}))}));var g=a(5854);const m=({children:e})=>{const[t,a]=(0,r.useState)([]),[o,n]=(0,r.useState)([]);(0,r.useEffect)((()=>{const e=o.map((e=>e.key)),a=t.filter((t=>!e.includes(null==t?void 0:t.id))).map((e=>{const{id:t=""}=e,a=setTimeout((()=>s(t)),8e3);return{key:e.id,timeOut:a}}));return n([...o,...a]),()=>o.forEach((e=>(null==e?void 0:e.timeOut)&&clearTimeout(e.timeOut)))}),[t,o]);const s=e=>{a((t=>[...t.filter((t=>t.id!==e))])),n((t=>[...t.filter((t=>t.key===e))]))};return(0,i.jsxs)(g.AlertContext.Provider,Object.assign({value:{addAlert:e=>{const i=(new Date).getTime().toString();a([...t,Object.assign(Object.assign({},e),{id:i})])}}},{children:[(0,i.jsx)(p,{alerts:t,onCloseAlert:s}),e]}))};var j=a(82639),x=a(55268),v=a(93049),b=a(67646);const A=({children:e})=>{const{t}=(0,v.useTranslation)(["kafkaTemporaryFixMe"]),[a,o]=(0,r.useState)(!1),n=[(0,i.jsx)(d.DropdownItem,{children:"Logout"},"logout")],s=(0,i.jsx)(d.Brand,{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAAdCAYAAACKahM4AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAB3RJTUUH5QMKAg0Vebf07QAACeNJREFUaN7t22uQXVWVB/Df6b5JSEIg9uRhMlFAEBCNBKKDKOLIOIgoMJaW44ygllOWTxRLRcfSMlU+cBxQq2Ys3y/KB5avsZgpdBBKZbC0hFhYpSIDioiIiX1DYkLopLvXfFj7cs+9fbv73k63zIf+V53qe87ee+111tp7vfbpSp9o5p+j8GIsxzX4EQ6U+0vxCuzEdfhP3IQ9LRoj/U62iAVB1U+nouiH4dM4H0PYge/gZpyM52NFbdiu0vYNuTB+3WpYVPpDg0GUfSE+g8aAcwRux9dwJX7BosIfCvSr7KW4Cs89xPl+jQ/jY9i7qPA/L4Zm61B29aNx+jzMdwwuk/59UAvx/xoRISIeajZmxKzKLngG1s/TnEvwUhnsDYyWUPu9FhKzzdMvTwvBdy9a/eyuFThXnya/Tzwcm5vcMUdTvhTDM7RPyCxBRKiq+WS9A0vkJnhUua7BH7r6LNPeVJMY60FnqPRrYRwHB2WmxyIZKnOiD2U3OGmcJyyAkLbiP+Y4/o145nTvjP0yKPwvfDcixhZI4X+Df8MGPIDtOpV9GN6Px5f7n+NNuL+LzjH4II4o91/GR+bI03E4FVvKPP+iLJwpyi4+2jK5pX/MM49bmOD5FLlDD8xh7GPxtD76vRSfxLaI2LMACl8rhUsqu3trDclF/eRyv1LvDbYKZ+LIcr99jvwM4R14kbR81+FfW40N2gquo2LoVNZv4oIPYo2aPZgfnIh1uHsOY7tZCW1BV9ouZxVeh3twBWI2f9hrQcwwpjXvTKtoYprf3XTqbZOzzNvBb63fpCxwtVzcOMZb7Y2aolfIHbMVJ4yz4SVsfDNbjibeRrXcvCp8A45vcvchmo0deBdGy/2wdDsvk8oexkX4XETsLH2W4SScUIRzL27BPd0+vibINWXMRmmNbtPpZ+cVtXmXyWD22CKzpXJ//hy3RsR4ebZFWo51NTIjOKvwe7AhV+UZ0pecoWay90hj/zGMEZdSrTX98hwQKyq2vJDrD5HOXlmw+X3t2VUyCPz7cr+pCGpnEcpbZIYxIk3fmFTev8tFMVbbMcvwQrxaKnuFXPOjsko4KCZ67Nhee2hYViVfJH3wGu3FNSEX+VflQh+S7uo4qfgWTsU3y+8djfLSH8fR3bOtJ4apDuATVLcTb8ETqTrCvDliP1uPyZeap/XzIIZ0RusTct1ulVW8k7r6L8NmfEiWhS8vY5bITfA2naXgoRTPwOnoSqmAfV3PjzfVlweeivN60BmWi/diqYYrCu3lPfq1nq1q4K16KHoCZ1KdTGynClxP9TPiwrwcQ1WZm6aG8Ase91GO3E9zvzlHgUfIUu6uGumteFatz63SAnxAW9G/lVHvKM4pgl0ulXtDRPxAboRLtRW9E98tf4/Hk3D4ALw+BlebGsgN96AzKcvTz8Fueeh0F/5CVjJbdYrn4Qsys9mIp+ARpe1efL+oaI8mO5tEr+s+4utMbsiJo34dy+SlTN7A5B+IPcRuYtc0tLrp7iRexd538/b9/GVT70CxG6VQcGX0j90R8fyIODsi9pdneyPiJRGxKiJWRMQJEXFjbcyHImJpRHyp9uyuiDgnIhqFh5URsa3W/seI2NzF64qI+P4AvLZweRnfiIgtEbGmq+hyYUQcKH3vj4inRURV+n+lRufbEXFYRAxFRNWQKUNPTOLpVFdkgBZ31qLOO6jej88SpxFnle30CKyiWqJ3iDqeyy2uzOW48jK2jfN3MkX4epOD85jn/QrvkSdvb5V5L2kyX4dXtfSCR9bGnSr9/ONrz67Ct2r3+6Sfny0a7xbpdEWVpXU6xa+H3PX/JEvWh+G+wn89+2jd9wrfo8yrIbf5P07HXeBcqvXEu4nvUdV99Q6qq6VtGiFK2BhHSYe2KiepxonRIp0f45eFzmi6iK0ywNiM9zUHOyTZI4OQvTLvPU87kPkffE6asdW1McuKQqfDmtL/sNqzO9Edqfdbbm7hl9JNdPvs46SLOaL2bBivlfHCutkId6VgU9qkHnwEfy3tfU9M4glUn8IXic/i9h6ruUnVxE/qE5Urit+vYwmObtM5XPrHYWxrMtanwkeLQO4uwvqa9LWk334SbpT+q4Uxudvv1Z5/ovwelpH9H6WvbOGJaJRUpy6aQbBb+vzuCtqoNHotTEj//s9S0fvltwP/KwOx03VanekQarWFBn4go7nLdIbtHZiQYeprqc5NXx7fxK1UB2ebbZq2c4gzqWoB3hJpXm+RZrNftBS2Ry7ep8hga62MWG+SCr9P7tiGdsD2O7nTT5NB3i2F1lCRzSnl/nkyt/1imWcjzjbYmUGFRnfhJiK66/whzfbacn+TtL57y/0lsrw6m7jXFz53YGlDrs6PSh91sRnq5S1Kj6J6Ey4ifkhcV7i5i2qv2bGeuCA5rlabsj1WSPP1bQPksTUz9t8yd392aXpOUcq35AJ6pbYfPEOa1iOlUu8tgrxWru/P4IIim1V4bxl3XxHipn75mwOa0gItl8WfiwuvG7TrB92Y1Fmb3yxd3C40GyNJ9X68sxB/van52hSKsI7quUWao8SviNtwh6xP7iIeSPNdLSc24nGyUHwiVcO0dvBkmSLdOJ1ua78f9JtF4Xu1XdPKcr0BN8gCxFoZEA4nG06s0ToSb8bNVVXtjIjt0rVcLpXbKILvhSG9d/nQNL+736fe1pD18WvlZ2Dr5EKb7EGje96rZSq6urxjy9zf1iDz2yZ/wjb5NcnbtXO1aRHS0VQpwWp9UeSk3BbjNRM9XCL0Vtg4YUaHt9zMBYt7ZKxH+urxrvbr5S5+arlfK/3cNXi5VPwLtCPcg9JPXysDxVbpNQqd30iLcHoR4hh+Kk/WnlGEusvUzCbK2JY5vnOa135A+uPWQchOqY9LpLX526KmCZlr/1QGmEsLL/t4cLFfLy3jK2WJdWlpv6VjJdby3NPk6cnZ0o/OGa0JBjyOH8P5I2mSO6WXpnq1tvUZR7Oq2q6/9Fmls1CxT+1L1yLYTTKo2y+VvaPFasuv1iLchizBri7KuafMPVJecxKjVVWN1/ioSnsrFjpQeO0QR0Qs0S7dkr75T7V5N8kM4WCZd7cMoYYKv82qqg508XtE4XdZoTfaK6KuC+Mf8Bppff+c+A3OGsk8uQOzpRf99JnpNGnAU69D4mOmfjOlUnOet9fDrkrWUTISvEj6twX77KOGD+OSkanmeRGHgBkV10Pp58tI8BSdBwPziZvlKdPti1+fzi8G+W68hdWyUHGejHiPNT/nuoHvyU+Oti8qev4xkEluTh27Qe7yM/BXMrpdY5bUrQv75D8OXIXPK3niorLnH3Pyv9OcTh0uTf1j5BcvJ5b7tTIybEX1YzJN+a1MIW7ED9XKmYuKXhj8HxZqSU7CvZxWAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTAzLTEwVDAyOjEzOjIxLTA1OjAwcHSBtgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wMy0xMFQwMjoxMzoyMS0wNTowMAEpOQoAAAAASUVORK5CYII=",alt:t("common.red_hat_logo")}),l=(0,i.jsx)(d.DropdownToggle,Object.assign({id:"user-dropdown-toggle",onToggle:()=>{o(!a)},toggleIndicator:b.CaretDownIcon},{children:"Ned Username"})),u=(0,i.jsx)(d.Dropdown,{onSelect:()=>{o(!a)},toggle:l,isOpen:a,isPlain:!0,dropdownItems:n}),p=(0,i.jsx)(c().Fragment,{children:(0,i.jsx)(d.Avatar,{src:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzNiAzNiIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMzYgMzYiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+CgkvKnN0eWxlbGludC1kaXNhYmxlKi8KCS5zdDB7ZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZmlsbDojRkZGRkZGO30KCS5zdDF7ZmlsdGVyOnVybCgjYik7fQoJLnN0MnttYXNrOnVybCgjYSk7fQoJLnN0M3tmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtmaWxsOiNCQkJCQkI7fQoJLnN0NHtvcGFjaXR5OjAuMTtmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtlbmFibGUtYmFja2dyb3VuZDpuZXcgICAgO30KCS5zdDV7b3BhY2l0eTo4LjAwMDAwMGUtMDI7ZmlsbC1ydWxlOmV2ZW5vZGQ7Y2xpcC1ydWxlOmV2ZW5vZGQ7ZmlsbDojMjMxRjIwO2VuYWJsZS1iYWNrZ3JvdW5kOm5ldyAgICA7fQoJLypzdHlsZWxpbnQtZW5hYmxlKi8KPC9zdHlsZT4KCQkJPGNpcmNsZSBjbGFzcz0ic3QwIiBjeD0iMTgiIGN5PSIxOC41IiByPSIxOCIvPgoJCTxkZWZzPgoJCQk8ZmlsdGVyIGlkPSJiIiB4PSI1LjIiIHk9IjcuMiIgd2lkdGg9IjI1LjYiIGhlaWdodD0iNTMuNiIgZmlsdGVyVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KCQkJCTxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMSAwIDAgMCAwICAwIDEgMCAwIDAgIDAgMCAxIDAgMCAgMCAwIDAgMSAwIi8+CgkJCTwvZmlsdGVyPgoJCTwvZGVmcz4KCQk8bWFzayBpZD0iYSIgeD0iNS4yIiB5PSI3LjIiIHdpZHRoPSIyNS42IiBoZWlnaHQ9IjUzLjYiIG1hc2tVbml0cz0idXNlclNwYWNlT25Vc2UiPgoJCQk8ZyBjbGFzcz0ic3QxIj4KCQkJCTxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjE4IiBjeT0iMTguNSIgcj0iMTgiLz4KCQkJPC9nPgoJCTwvbWFzaz4KCQk8ZyBjbGFzcz0ic3QyIj4KCQkJPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNS4wNCA2Ljg4KSI+CgkJCQk8cGF0aCBjbGFzcz0ic3QzIiBkPSJtMjIuNiAxOC4xYy0xLjEtMS40LTIuMy0yLjItMy41LTIuNnMtMS44LTAuNi02LjMtMC42LTYuMSAwLjctNi4xIDAuNyAwIDAgMCAwYy0xLjIgMC40LTIuNCAxLjItMy40IDIuNi0yLjMgMi44LTMuMiAxMi4zLTMuMiAxNC44IDAgMy4yIDAuNCAxMi4zIDAuNiAxNS40IDAgMC0wLjQgNS41IDQgNS41bC0wLjMtNi4zLTAuNC0zLjUgMC4yLTAuOWMwLjkgMC40IDMuNiAxLjIgOC42IDEuMiA1LjMgMCA4LTAuOSA4LjgtMS4zbDAuMiAxLTAuMiAzLjYtMC4zIDYuM2MzIDAuMSAzLjctMyAzLjgtNC40czAuNi0xMi42IDAuNi0xNi41YzAuMS0yLjYtMC44LTEyLjEtMy4xLTE1eiIvPgoJCQkJPHBhdGggY2xhc3M9InN0NCIgZD0ibTIyLjUgMjZjLTAuMS0yLjEtMS41LTIuOC00LjgtMi44bDIuMiA5LjZzMS44LTEuNyAzLTEuOGMwIDAtMC40LTQuNi0wLjQtNXoiLz4KCQkJCTxwYXRoIGNsYXNzPSJzdDMiIGQ9Im0xMi43IDEzLjJjLTMuNSAwLTYuNC0yLjktNi40LTYuNHMyLjktNi40IDYuNC02LjQgNi40IDIuOSA2LjQgNi40LTIuOCA2LjQtNi40IDYuNHoiLz4KCQkJCTxwYXRoIGNsYXNzPSJzdDUiIGQ9Im05LjQgNi44YzAtMyAyLjEtNS41IDQuOS02LjMtMC41LTAuMS0xLTAuMi0xLjYtMC4yLTMuNSAwLTYuNCAyLjktNi40IDYuNHMyLjkgNi40IDYuNCA2LjRjMC42IDAgMS4xLTAuMSAxLjYtMC4yLTIuOC0wLjYtNC45LTMuMS00LjktNi4xeiIvPgoJCQkJPHBhdGggY2xhc3M9InN0NCIgZD0ibTguMyAyMi40Yy0yIDAuNC0yLjkgMS40LTMuMSAzLjVsLTAuNiAxOC42czEuNyAwLjcgMy42IDAuOWwwLjEtMjN6Ii8+CgkJCTwvZz4KCQk8L2c+Cjwvc3ZnPg==",className:"app-masthead-avatar",alt:"avatar"})}),g=(0,i.jsxs)(d.PageHeaderTools,{children:[u,p]});return(0,i.jsx)(d.Page,Object.assign({mainContainerId:"scrollablePageMain",header:(0,i.jsx)((()=>(0,i.jsx)(d.PageHeader,{logo:s,logoComponent:"h1",headerTools:g})),{})},{children:e}))};var I=a(68640),h=a(2766);const T=()=>(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(h.$,{activeTabKey:1})});var y=a(8903),C=a(29299),L=a(63850),f=a(13985),M=a(50334),N=a(60540),k=a(1787),S=a(5736);a(17293);const P=({topicName:e,onSaveTopic:t,onError:a})=>{const{t:o}=(0,v.useTranslation)(["kafkaTemporaryFixMe"]),n=(0,r.useContext)(u.E),{addAlert:c}=(0,g.useAlert)()||{addAlert:()=>{}},p=(0,l.useHistory)(),{getBasename:m}=(0,g.useBasename)()||{getBasename:()=>""},j=m(),x={name:e,numPartitions:"","retention.ms":"7","retention.ms.unit":"days","retention.bytes":"1","retention.bytes.unit":"bytes","cleanup.policy":"",isRetentionTimeUnlimited:!1,isRetentionSizeUnlimited:!0},[b,A]=(0,r.useState)(x),[I,h]=(0,r.useState)(!1),T=(0,r.useCallback)((()=>{p.push(`${j}/topics/${e}`)}),[j,p,e]),y=(0,r.useCallback)((e=>(0,s.__awaiter)(void 0,void 0,void 0,(function*(){var t,i,o;try{yield(0,N.BN)(e,n).then((e=>{var t,a;const i=(0,k.qS)(e);A(Object.assign(Object.assign(Object.assign({},b),i),{numPartitions:(null===(t=null==e?void 0:e.partitions)||void 0===t?void 0:t.length.toString())||"",replicationFactor:(null==e?void 0:e.partitions)&&(null===(a=null==e?void 0:e.partitions[0].replicas)||void 0===a?void 0:a.length.toString())||""}))}))}catch(n){if((0,S.I)(n)){let s,r;n&&(0,S.I)(n)&&(r=null===(t=n.response)||void 0===t?void 0:t.data.code,s=null===(i=n.response)||void 0===i?void 0:i.data.error_message),a&&a(r||-1,s||""),404===(null===(o=n.response)||void 0===o?void 0:o.status)&&(c({variant:d.AlertVariant.danger,title:`Topic ${e} does not exist`}),T&&T())}}}))),[c,n,T,a,b]),C=(0,r.useRef)();(0,r.useEffect)((()=>{C.current!==e&&(C.current=e,y(e))}),[y,e]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(M.W,{isCreate:!1,saveTopic:()=>(0,s.__awaiter)(void 0,void 0,void 0,(function*(){var e,i;const{name:s,settings:r}=(0,k.az)(b,["cleanup.policy"]);h(!0);try{yield(0,N.eR)(s,r,n).then((()=>{c({title:o("topic.topic_successfully_updated"),variant:d.AlertVariant.success}),h(!1),t()}))}catch(t){let o,n;t&&(0,S.I)(t)&&(n=null===(e=t.response)||void 0===e?void 0:e.data.code,o=null===(i=t.response)||void 0===i?void 0:i.data.error_message),a&&a(n||-1,o||""),h(!1),c({title:o||"",variant:d.AlertVariant.danger})}})),handleCancel:T,topicData:b,setTopicData:A,isLoadingSave:I}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{})]})};var w=a(64517);a(27958);const O=()=>{const{t:e}=(0,v.useTranslation)(["kafkaTemporaryFixMe"]),t=(0,l.useHistory)(),{getBasename:a}=(0,g.useBasename)()||{getBasename:()=>""},o=a(),{topicName:n}=(0,l.useParams)(),{kafkaName:s,kafkaPageLink:u,kafkaInstanceLink:p,onError:m,activeTab:j=1}=(0,w.S)()||{},[x,b]=(0,r.useState)(j),A=c().createRef(),I=c().createRef();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(f.I,{topicName:n,kafkaName:s,kafkaPageLink:u,kafkaInstanceLink:p}),(0,i.jsx)(d.PageSection,Object.assign({variant:d.PageSectionVariants.light,className:"pf-c-page__main-tabs",padding:{default:"noPadding"}},{children:(0,i.jsxs)(d.Tabs,Object.assign({onSelect:(e,t)=>{b(t)},activeKey:x,isBox:!1,className:"pf-m-page-insets"},{children:[(0,i.jsx)(d.Tab,{eventKey:0,title:(0,i.jsx)(d.TabTitleText,{children:e("consumerGroup.consumer_groups")}),tabContentId:"kafka-ui-TabcontentConsumerGroups",tabContentRef:A}),(0,i.jsx)(d.Tab,{eventKey:1,title:(0,i.jsx)(d.TabTitleText,{children:e("common.properties")}),tabContentId:"kafka-ui-TabcontentProperties",tabContentRef:I})]}))})),(0,i.jsxs)(d.PageSection,Object.assign({variant:1===x?d.PageSectionVariants.light:d.PageSectionVariants.default},{children:[(0,i.jsx)(d.TabContent,Object.assign({eventKey:0,id:"kafka-ui-TabcontentConsumerGroups",ref:A,className:"kafka-ui-m-full-height","aria-label":"Consumer groups.",hidden:0!==j},{children:(0,i.jsx)(L.J,{topic:n,consumerGroupByTopic:!0})})),(0,i.jsx)(d.TabContent,Object.assign({eventKey:1,id:"kafka-ui-TabcontentProperties",ref:I,className:"kafka-ui-m-full-height","aria-label":"Topic properties",hidden:1!==j},{children:(0,i.jsx)(P,{topicName:n,onDeleteTopic:()=>{t.push(o)},onSaveTopic:()=>{t.push(`${o}/topics/${n}`)},onError:m})}))]}))]})};var D=a(63052),Z=a(28251),z=a(90732),B=a(91070),G=a(97416);const V=({total:e=0,page:t,perPage:a,setFilteredValue:o,filteredValue:n="",onCreateTopic:s})=>{const{t:c}=(0,v.useTranslation)(["kafkaTemporaryFixMe"]),[l,u]=(0,r.useState)(""),p=(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(d.ToolbarFilter,Object.assign({chips:n?[n]:[],deleteChip:()=>{o("")},categoryName:""},{children:(0,i.jsxs)(d.InputGroup,{children:[(0,i.jsx)(d.TextInput,{name:"searchName",id:"search-topics-input",type:"search","aria-label":c("topic.topic_search_input"),placeholder:c("common.search"),value:l,onChange:e=>{u(e)}}),(0,i.jsx)(d.Button,Object.assign({variant:d.ButtonVariant.control,isDisabled:!l.length,onClick:()=>{o(l),u("")},"aria-label":c("topic.topic_search")},{children:(0,i.jsx)(b.SearchIcon,{})}))]})}))}),g=[{item:(0,i.jsx)(d.Button,Object.assign({id:"topic-list-create-topic-button",className:"topics-per-page","data-testid":"actionCreateTopic",onClick:s},{children:c("topic.create_topic")}))}];return e>0&&g.push({item:(0,i.jsx)(j.wu,{widgetId:"consumer-group-pagination-options-menu-top",itemCount:e,page:t,perPage:a,titles:{paginationTitle:c("common.minimal_pagination"),perPageSuffix:c("common.per_page_suffix"),toFirstPage:c("common.to_first_page"),toPreviousPage:c("common.to_previous_page"),toLastPage:c("common.to_last_page"),toNextPage:c("common.to_next_page"),optionsToggle:c("common.options_toggle"),currPage:c("common.curr_page")}}),variant:"pagination",alignment:{default:"alignRight"}}),(0,i.jsx)(G.L,{toolbarProps:{id:"instance-toolbar",clearAllFilters:()=>{o("")},collapseListedFiltersBreakpoint:"md",inset:{xl:"insetLg"}},toggleGroupProps:{toggleIcon:"",breakpoint:"md"},toggleGroupItems:p,toolbarItems:g})},R=({total:e,page:t,perPage:a,setFilteredValue:o,filteredValue:n,onCreateTopic:s,topicItems:r,rowDataTestId:c,onEdit:u,onDeleteTopic:p,refreshTopics:m,onSort:x,sortBy:b})=>{const{t:A}=(0,v.useTranslation)(["kafkaTemporaryFixMe"]),{showModal:I}=(0,g.useModal)(),{getBasename:h}=(0,g.useBasename)()||{getBasename:()=>""},T=h(),y=[{title:A("common.name")},{title:A("common.partitions"),transforms:[Z.sortable]},{title:A("topic.retention_time"),transforms:[Z.sortable]},{title:A("topic.retention_size"),transforms:[Z.sortable]}],C=(e,t)=>{const{name:a=""}=e;var i;"delete"===t?(i=a,I(g.ModalType.KafkaDeleteTopic,{topicName:i,onDeleteTopic:p,refreshTopics:m})):"edit"===t&&u&&u(a)},L=(()=>{const e=[];return null==r||r.map((t=>{var a,o;const{name:n,partitions:s,config:r}=t,c=null===(a=null==r?void 0:r.filter((e=>"retention.ms"===e.key))[0])||void 0===a?void 0:a.value,u=null===(o=null==r?void 0:r.filter((e=>"retention.bytes"===e.key))[0])||void 0===o?void 0:o.value;e.push({cells:[{title:(0,i.jsx)(l.Link,Object.assign({"data-testid":"tableTopics-linkTopic",to:`${T}/topics/${n}`},{children:n}))},null==s?void 0:s.length,(0,k.eA)(c?parseInt(c,10):0),(0,k.Cv)(u?parseInt(u,10):0)],originalData:t})})),e})();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(V,{total:e,page:t,perPage:a,onCreateTopic:s,setFilteredValue:o,filteredValue:n}),(0,i.jsx)(z.w,{tableProps:{cells:y,rows:L,"aria-label":A("topic.topic_list_table"),actionResolver:e=>{const t=e.originalData;return[{title:A("common.delete"),"data-testid":"tableTopics-actionDelete",onClick:()=>C(t,"delete")},{title:A("common.edit"),"data-testid":"tableTopics-actionEdit",onClick:()=>C(t,"edit")}]},shouldDefaultCustomRowWrapper:!0,variant:Z.TableVariant.compact,onSort:x,sortBy:b},rowDataTestId:c||"tableTopics-row"}),(null==r?void 0:r.length)<1&&n.length>0&&(0,i.jsx)(B.u,{emptyStateProps:{variant:B.j.NoResult},titleProps:{title:A("common.no_results_title")},emptyStateBodyProps:{body:A("common.no_results_body")}}),e>0&&(0,i.jsx)(j.wu,{widgetId:"consumer-group-pagination-options-menu-bottom",itemCount:e,variant:d.PaginationVariant.bottom,page:t,perPage:a,titles:{paginationTitle:A("common.full_pagination"),perPageSuffix:A("common.per_page_suffix"),toFirstPage:A("common.to_first_page"),toPreviousPage:A("common.to_previous_page"),toLastPage:A("common.to_last_page"),toNextPage:A("common.to_next_page"),optionsToggle:A("common.options_toggle"),currPage:A("common.curr_page")}})]})};var K=a(4055);const J={0:N.c4.name,1:N.c4.partitions,2:N.c4.retentionMs,3:N.c4.retentionSize},F=()=>{const{onError:e}=(0,w.S)()||{},{t}=(0,v.useTranslation)(["kafkaTemporaryFixMe"]),a=(0,r.useContext)(u.E),{page:o=1,perPage:n=10,setPage:c}=(0,j.hI)()||{},p=(0,l.useHistory)(),{getBasename:m}=(0,g.useBasename)()||{getBasename:()=>""},x=m(),[b,A]=(0,r.useState)(),[I,h]=(0,r.useState)(""),[T,y]=(0,r.useState)(),[C,L]=(0,r.useState)(),[f,M]=(0,r.useState)({index:0,direction:"asc"}),k=(0,r.useCallback)((e=>{h(e),c&&c(1)}),[c]),P=()=>{p.push(`${x}/topic/create`)},O=e=>{p.push(`${x}/topic/update/${e}`)},Z=e=>{O&&O(e)},z=(e,t,a)=>{L(J[t]),y(a),M({index:t,direction:a})},G=(0,r.useCallback)((()=>(0,s.__awaiter)(void 0,void 0,void 0,(function*(){var t,i;try{yield(0,N.BB)(a,o,n,I,T,C).then((e=>{A(e)}))}catch(a){let o,n;a&&(0,S.I)(a)&&(n=null===(t=a.response)||void 0===t?void 0:t.data.code,o=null===(i=a.response)||void 0===i?void 0:i.data.error_message),e&&401===n&&e(n,o)}}))),[a,e,T,C,o,n,I]);return(0,r.useEffect)((()=>{G()}),[I,T,C,o,n,G]),(0,D.K)((()=>G()),5e3),(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(d.Card,Object.assign({className:"kafka-ui-m-full-height","data-ouia-page-id":"tableTopics"},{children:(()=>{var e;switch(!0){case void 0===(null==b?void 0:b.items):return(0,i.jsx)(d.PageSection,Object.assign({className:"kafka-ui-m-full-height",variant:d.PageSectionVariants.light,padding:{default:"noPadding"}},{children:(0,i.jsx)(K.y,{})}));case b&&(null===(e=null==b?void 0:b.items)||void 0===e?void 0:e.length)<1&&I.length<1:return(0,i.jsx)(B.u,{emptyStateProps:{variant:B.j.NoItems,"data-ouia-page-id":"emptyStateTopics"},titleProps:{title:t("topic.empty_topics_title")},emptyStateBodyProps:{body:t("topic.empty_topics_body")},buttonProps:{title:t("topic.create_topic"),onClick:P,"data-testid":"actionCreateTopic"}});case void 0!==(null==b?void 0:b.items):return(0,i.jsx)(R,{total:(null==b?void 0:b.total)||0,page:o,perPage:n,onCreateTopic:P,topicItems:(null==b?void 0:b.items)||[],filteredValue:I,setFilteredValue:k,refreshTopics:G,onEdit:Z,onSort:z,sortBy:f});default:return(0,i.jsx)(i.Fragment,{})}})()}))})},Y=()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(h.$,{activeTabKey:2}),(0,i.jsx)(d.PageSection,Object.assign({hasOverflowScroll:!0},{children:(0,i.jsx)(F,{})}))]}),W=()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(h.$,{activeTabKey:3}),(0,i.jsx)(d.PageSection,Object.assign({hasOverflowScroll:!0},{children:(0,i.jsx)(L.J,{consumerGroupByTopic:!1})}))]});var X=a(9837);const Q=()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(h.$,{activeTabKey:4}),(0,i.jsx)(d.PageSection,Object.assign({hasOverflowScroll:!0},{children:(0,i.jsx)(X.C,{kafkaName:"test"})}))]}),U=()=>(0,i.jsx)(l.HashRouter,{children:(0,i.jsxs)(l.Switch,{children:[(0,i.jsx)(l.Route,{path:"/",component:T,exact:!0}),(0,i.jsx)(l.Route,{path:"/dashboard",component:T,exact:!0}),(0,i.jsx)(l.Route,{path:"/topics",component:Y,exact:!0}),(0,i.jsx)(l.Route,{path:"/consumer-groups",component:W,exact:!0}),(0,i.jsx)(l.Route,{path:"/acls",component:Q,exact:!0}),(0,i.jsx)(l.Route,{path:"/topics/:topicName",component:y.o,exact:!0}),(0,i.jsx)(l.Route,{path:"/topic/create",component:C.e}),(0,i.jsx)(l.Route,{path:"/topic/update/:topicName",component:O,exact:!0}),(0,i.jsx)(l.Route,{path:"/topics/consumerGroups/:topicName",component:y.o,exact:!0})]})});var E=a(30466);n().render((0,i.jsx)((()=>(0,i.jsx)(E.I18nProvider,Object.assign({lng:"en",resources:{en:{common:()=>a.e(3389).then(a.t.bind(a,3389,19)),"create-kafka-instance":()=>a.e(2192).then(a.t.bind(a,12192,19)),kafka:()=>a.e(4309).then(a.t.bind(a,94309,19)),metrics:()=>a.e(4564).then(a.t.bind(a,84564,19)),kafkaTemporaryFixMe:()=>a.e(6648).then(a.t.bind(a,36648,19))}},debug:!0},{children:(0,i.jsx)(g.BasenameContext.Provider,Object.assign({value:{getBasename:()=>""}},{children:(0,i.jsx)(u.E.Provider,Object.assign({value:{basePath:"http://localhost:8000/data/kafka",getToken:()=>(0,s.__awaiter)(void 0,void 0,void 0,(function*(){return""}))}},{children:(0,i.jsx)(l.BrowserRouter,{children:(0,i.jsx)(m,{children:(0,i.jsx)(E.ModalProvider,{children:(0,i.jsx)(j.bN,{children:(0,i.jsx)(r.Suspense,Object.assign({fallback:(0,i.jsx)(x.g,{})},{children:(0,i.jsxs)(A,{children:[(0,i.jsx)(U,{}),(0,i.jsx)(I.J,{})]})}))})})})})}))}))}))),{}),document.getElementById("root"))},64517:(e,t,a)=>{a.d(t,{S:()=>n});var i=a(93264);const o=a.n(i)().createContext(void 0),n=()=>(0,i.useContext)(o)}}]);
