import"./global.744331c3.js";import{d as l,c as t,F as s,r as o,o as e,b as i,e as a,f as n,g as u,v as r,t as d,a as c}from"./vendor.2ac72789.js";var g=l({name:"LittleLayoutFieldControl",props:{layoutCols:Number,layoutRows:Number}});const p={class:"ll-flex ll-flex-nowrap ll-mb-1"},y={class:"ll-flex-shrink ll-mr-1 ll-w-5 ll-h-5 ll-bg-select-light ll-border ll-border-solid ll-border-hairline-medium"};g.render=function(l,i,a,n,u,r){return e(),t("div",null,[(e(!0),t(s,null,o(l.layoutRows,(i=>(e(),t("div",p,[(e(!0),t(s,null,o(l.layoutCols,(l=>(e(),t("div",y)))),256))])))),256))])};var w=l({name:"LittleLayoutSettings",components:{LittleLayoutFieldControl:g},setup:()=>{let l=1,t=1;const s=document.querySelector("[data-little-layout-settings-data]");parseInt(null==s?void 0:s.getAttribute("data-little-layout-settings-cols"))&&(l=parseInt(null==s?void 0:s.getAttribute("data-little-layout-settings-cols"))),parseInt(null==s?void 0:s.getAttribute("data-little-layout-settings-rows"))&&(t=parseInt(null==s?void 0:s.getAttribute("data-little-layout-settings-rows")));return{settingsCols:i(l),settingsRows:i(t)}},mounted(){console.log("Little Layout Settings")}});const b={class:"ll-grid ll-grid-cols-[minmax(100px,300px),1fr] ll-gap-6"},m={id:"cols-field",class:"field"},f=n("div",{class:"heading"},[n("label",{id:"cols-label",class:"required",for:"cols"},"Layout Columns")],-1),v=n("div",{id:"cols-instructions",class:"instructions"},[n("p",null,"What this field will be called in the control panel.")],-1),h={class:"input ltr"},L={id:"rows-field",class:"field"},C=n("div",{class:"heading"},[n("label",{id:"rows-label",class:"required",for:"rows"},"Layout Rows")],-1),x=n("div",{id:"rows-instructions",class:"instructions"},[n("p",null,"What this field will be called in the control panel.")],-1),R={class:"input ltr"};w.render=function(l,s,o,i,c,g){const p=a("LittleLayoutFieldControl");return e(),t("div",b,[n("div",null,[n("div",m,[f,v,n("div",h,[u(n("input",{type:"text",id:"cols",class:"text fullwidth",name:"types[wbrowar\\littlelayout\\fields\\Layout][cols]",autofocus:"",autocomplete:"off","aria-describedby":"cols-instructions","onUpdate:modelValue":s[1]||(s[1]=t=>l.settingsCols=t)},null,512),[[r,l.settingsCols,void 0,{number:!0}]])])]),n("div",L,[C,x,n("div",R,[u(n("input",{type:"text",id:"rows",class:"text fullwidth",name:"types[wbrowar\\littlelayout\\fields\\Layout][rows]",autofocus:"",autocomplete:"off","aria-describedby":"rows-instructions","onUpdate:modelValue":s[2]||(s[2]=t=>l.settingsRows=t)},null,512),[[r,l.settingsRows,void 0,{number:!0}]])])])]),n("div",null,[n("p",null,"Columns: "+d(l.settingsCols),1),n("p",null,"Rows: "+d(l.settingsRows),1),n(p,{"layout-cols":l.settingsCols,"layout-rows":l.settingsRows},null,8,["layout-cols","layout-rows"])])])},console.log("whatttt"),c(w).mount("[data-little-layout-settings]");
