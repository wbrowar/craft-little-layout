var e=Object.assign;import{d as t,r as l,c as s,a as i,F as a,b as o,e as d,t as n,o as r,w as u,f as c,g as f,h,v as p,i as m,j as b}from"./vendor.baa867cf.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(l){const s=new URL(e,location),i=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((l,a)=>{const o=new URL(e,s);if(self[t].moduleMap[o])return l(self[t].moduleMap[o]);const d=new Blob([`import * as m from '${o}';`,`${t}.moduleMap['${o}']=m;`],{type:"text/javascript"}),n=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(d),onerror(){a(new Error(`Failed to import: ${e}`)),i(n)},onload(){l(self[t].moduleMap[o]),i(n)}});document.head.appendChild(n)})),self[t].moduleMap={}}}("/assets/");var y=t({name:"LittleLayoutFieldControl",props:{clearable:{type:Boolean,default:!1},editable:{type:Boolean,default:!1},fieldNamespace:String,fieldDefault:String,fieldId:String,fieldName:String,layoutCols:Number,layoutRows:Number,selectionMode:{type:String,default:"box"},scrollMessage:String},setup:e=>{const t=e.fieldDefault?e.fieldDefault.split("|"):[];return{handleResize:l(),showScrollMessage:l(!1),status:l("idle"),timer:l(),valueUpdated:l(!1),xStart:t[0]?l(parseInt(t[0])):l(),xEnd:t[1]?l(parseInt(t[1])):l(),yStart:t[2]?l(parseInt(t[2])):l(),yEnd:t[3]?l(parseInt(t[3])):l()}},computed:{boxClasses(){const e=["ll-relative ll-flex-shrink-0 ll-w-8 ll-h-8 md:ll-w-6 md:ll-h-6 ll-border ll-border-solid ll-border-hairline-medium focus:ll-outline-none"];return this.editable&&e.push("hover:ll-bg-primary focus:ll-bg-primary"),e},fieldValue(){return this.xStart&&this.xEnd&&this.yStart&&this.yEnd?`${this.xStart}|${this.xEnd}|${this.yStart}|${this.yEnd}`:"empty"},fullFieldName(){return`${this.fieldNamespace}[${this.fieldName}]`},hasSelected(){return this.xStart||this.xEnd||this.yStart||this.yEnd},selectedBoxes(){const e=[];if("box"===this.selectionMode){if(this.xStart&&this.yStart&&this.xEnd&&this.yEnd)for(let t=this.xStart;t<this.xEnd+1;t++)for(let l=this.yStart;l<this.yEnd+1;l++)e.push(`${t}|${l}`)}else"single"===this.selectionMode&&e.push(`${this.xStart}|${this.yStart}`);return e}},methods:{boxClicked(e){const t=e[0],l=e[1];"idle"===this.status?(this.xStart=this.xEnd=t,this.yStart=this.yEnd=l,"box"===this.selectionMode&&(this.timer=setInterval((()=>{const e=this.$refs[`${t}|${l}`];e&&e.blur(),this.status="idle"}),1e4),this.status="inputStarted")):"inputStarted"===this.status&&(t<this.xStart?(this.xEnd=this.xStart,this.xStart=t):this.xEnd=t,l<this.yStart?(this.yEnd=this.yStart,this.yStart=l):this.yEnd=l,this.endTimer()),this.removePlaceholderInput()},boxClassesForBox(e,t){const l=[];return this.selectedBoxes.includes(`${e}|${t}`)?l.push("ll-bg-select-dark"):l.push("ll-bg-select-light"),1===e&&1===t&&l.push("ll-rounded-tl-md"),1===e&&t===this.layoutRows&&l.push("ll-rounded-bl-md"),e===this.layoutCols&&1===t&&l.push("ll-rounded-tr-md"),e===this.layoutCols&&t===this.layoutRows&&l.push("ll-rounded-br-md"),l},boxMousedOut(e,t){const l=this.$refs[`${e}|${t}`];l&&l.blur()},clearSelected(){this.xStart=this.xEnd=this.yStart=this.yEnd=null,this.endTimer(),this.removePlaceholderInput()},endTimer(){clearInterval(this.timer),this.status="idle"},keyboardArrowPressed(e,t=null){let l=(null==t?void 0:t[0])?t[0]:1,s=(null==t?void 0:t[1])?t[1]:1;switch(e){case"up":s-=1;break;case"right":l+=1;break;case"down":s+=1;break;case"left":l-=1}const i=this.$refs[`${l}|${s}`];i&&i.focus()},keyboardTabPressed(){const e=this.$refs.clear;e&&e.focus()},removePlaceholderInput(){const e=document.querySelector(`[data-little-layout-placeholder="${this.fieldId}"]`);e&&e.parentElement.removeChild(e),this.valueUpdated=!0}},mounted(){const e=document.getElementById(`${this.fieldId}-field`);e&&(this.handleResize=new ResizeObserver((e=>{for(let t of e){const e=document.getElementById(`little-layout-boxes-${this.fieldId}`);if(e){const l=e.offsetWidth,s=t.target.offsetWidth;this.showScrollMessage=l>s}}})),this.handleResize.observe(e))}});const v={class:"ll-grid ll-grid-cols-1 ll-overflow-x-auto ll-max-w-full"},g={class:"ll-flex ll-flex-row ll-space-x-1 ll-items-center ll-w-full"},w={class:"ll-flex ll-flex-row ll-flex-nowrap ll-space-x-1"},x={key:0},S={key:0,class:"ll-mt-1 ll-mb-0 ll-text-sm ll-text-light"};y.render=function(e,t,l,f,h,p){return r(),s("div",v,[i("div",g,[i("div",{id:`little-layout-boxes-${e.fieldId}`,class:"ll-space-y-1"},[(r(!0),s(a,null,o(e.layoutRows,(t=>(r(),s("div",w,[(r(!0),s(a,null,o(e.layoutCols,(l=>(r(),s("div",{ref:`${l}|${t}`,tabindex:"0",class:[e.boxClasses,e.boxClassesForBox(l,t)],onClick:s=>e.editable?e.boxClicked([l,t]):null,onMouseleave:s=>e.boxMousedOut(l,t),onKeydown:[u(c((s=>e.editable?e.boxClicked([l,t]):null),["prevent"]),["enter"]),u(c((s=>e.editable?e.boxClicked([l,t]):null),["prevent"]),["space"]),u(c((s=>e.keyboardArrowPressed("up",[l,t])),["prevent"]),["up"]),u(c((s=>e.keyboardArrowPressed("right",[l,t])),["prevent"]),["right"]),u(c((s=>e.keyboardArrowPressed("down",[l,t])),["prevent"]),["down"]),u(c((s=>e.keyboardArrowPressed("left",[l,t])),["prevent"]),["left"])]},null,42,["onClick","onMouseleave","onKeydown"])))),256))])))),256))],8,["id"]),e.clearable&&e.editable&&e.hasSelected?(r(),s("div",x,[i("button",{ref:"clear",type:"button",class:"clear-btn",title:"Clear","aria-label":"Clear",onClick:t[1]||(t[1]=(...t)=>e.clearSelected&&e.clearSelected(...t))},null,512)])):d("",!0)]),e.showScrollMessage?(r(),s("p",S,n(e.scrollMessage),1)):d("",!0),e.valueUpdated&&e.fieldId&&e.fullFieldName?(r(),s("input",{key:1,type:"hidden",id:e.fieldId,name:e.fullFieldName,autofocus:"",autocomplete:"off",value:e.fieldValue},null,8,["id","name","value"])):d("",!0)])};var C=t({name:"LittleLayoutField",components:{LittleLayoutFieldControl:y},props:["clearable","cols","defaultValue","editable","field","handle","rows","scrollMessage"],setup:e=>({settingsClearable:l(e.clearable),settingsCols:l(e.cols?parseInt(e.cols):1),settingsRows:l(e.rows?parseInt(e.rows):1)})});C.render=function(e,t,l,i,a,o){const d=f("LittleLayoutFieldControl");return r(),s(d,{clearable:"1"===e.settingsClearable,editable:"true"===e.editable,"field-namespace":e.field.fieldNamespacedName,"field-default":e.defaultValue,"field-id":e.field.namespacedId,"field-name":"raw","layout-cols":e.settingsCols,"layout-rows":e.settingsRows,"scroll-message":e.scrollMessage},null,8,["clearable","editable","field-namespace","field-default","field-id","layout-cols","layout-rows","scroll-message"])};var $=t({name:"LittleLayoutSettings",components:{LittleLayoutFieldControl:y},props:["clearable","cols","defaultValue","field","rows","selectionMode"],setup:e=>({settingsClearable:l(e.clearable),settingsCols:l(e.cols?parseInt(e.cols):1),settingsRows:l(e.rows?parseInt(e.rows):1),settingsSelectionMode:l(e.selectionMode)}),methods:{validateColsField(){this.settingsCols&&parseInt(this.settingsCols)||(this.settingsCols=1)},validateRowsField(){this.settingsRows&&parseInt(this.settingsRows)||(this.settingsRows=1)}},mounted(){console.log("Little Layout Settings")}});const L={class:"ll-grid ll-grid-cols-[minmax(100px,250px),1fr] ll-gap-6"},R={id:"cols-field",class:"field"},M=i("div",{class:"heading"},[i("label",{id:"cols-label",class:"required",for:"cols"},"Layout Columns")],-1),I=i("div",{id:"cols-instructions",class:"instructions"},[i("p",null,"Define the columns in your layout.")],-1),E={class:"input ltr"},k={id:"rows-field",class:"field"},F=i("div",{class:"heading"},[i("label",{id:"rows-label",class:"required",for:"rows"},"Layout Rows")],-1),N=i("div",{id:"rows-instructions",class:"instructions"},[i("p",null,"Define the rows in your layout.")],-1),U={class:"input ltr"},V={id:"clearable-field",class:"field"},P=i("div",{class:"heading"},[i("label",{id:"clearable-label",for:"clearable"},"Empty Layout")],-1),B={class:"input ltr"},j={class:"select"},_=i("option",{value:"1"},"Layouts can be reset",-1),O=i("option",{value:"2"},"Layouts cannot be reset",-1),z={id:"selection-mode-field",class:"field"},D=i("div",{class:"heading"},[i("label",{id:"selection-mode-label",for:"selection-mode"},"Selection Mode")],-1),T={class:"input ltr"},q={class:"select"},A=i("option",{value:"box"},"Select multiple rows and columns",-1),K=i("option",{value:"single"},"Select a single box",-1),W={id:"default-value-field",class:"field"},Q=i("div",{class:"heading"},[i("label",{id:"default-value-label",for:"default-value"},"Default Value")],-1),G={class:"input ltr"},H={key:1};$.render=function(e,t,l,a,o,d){const n=f("LittleLayoutFieldControl");return r(),s("div",L,[i("div",null,[i("div",R,[M,I,i("div",E,[h(i("input",{type:"text",id:"cols",class:"text",size:"3",name:`${e.field.fieldNamespace}[cols]`,autofocus:"",autocomplete:"off","aria-describedby":"cols-instructions",onFocusout:t[1]||(t[1]=(...t)=>e.validateColsField&&e.validateColsField(...t)),"onUpdate:modelValue":t[2]||(t[2]=t=>e.settingsCols=t)},null,40,["name"]),[[p,e.settingsCols,void 0,{number:!0}]])])]),i("div",k,[F,N,i("div",U,[h(i("input",{type:"text",id:"rows",class:"text",size:"3",name:`${e.field.fieldNamespace}[rows]`,autofocus:"",autocomplete:"off","aria-describedby":"rows-instructions",onFocusout:t[3]||(t[3]=(...t)=>e.validateRowsField&&e.validateRowsField(...t)),"onUpdate:modelValue":t[4]||(t[4]=t=>e.settingsRows=t)},null,40,["name"]),[[p,e.settingsRows,void 0,{number:!0}]])])]),i("div",V,[P,i("div",B,[i("div",j,[h(i("select",{id:"clearable",name:`${e.field.fieldNamespace}[clearable]`,"onUpdate:modelValue":t[5]||(t[5]=t=>e.settingsClearable=t)},[_,O],8,["name"]),[[m,e.settingsClearable]])])])]),i("div",z,[D,i("div",T,[i("div",q,[h(i("select",{id:"selection-mode",name:`${e.field.fieldNamespace}[selectionMode]`,"onUpdate:modelValue":t[6]||(t[6]=t=>e.settingsSelectionMode=t)},[A,K],8,["name"]),[[m,e.settingsSelectionMode]])])])])]),i("div",null,[i("div",W,[Q,i("div",G,[e.settingsCols&&e.settingsRows?(r(),s(n,{key:0,clearable:"",editable:"","field-namespace":e.field.fieldNamespace,"field-default":e.defaultValue,"field-id":e.field.namespacedId,"field-name":"defaultValue","layout-cols":e.settingsCols,"layout-rows":e.settingsRows,"selection-mode":e.settingsSelectionMode},null,8,["field-namespace","field-default","field-id","layout-cols","layout-rows","selection-mode"])):(r(),s("p",H,"⚠️ Settings missing! Layout Columns and Layout Rows settings are required."))])])])])};!function(t,l,s,i){var a="LittleLayout",o={};function d(e,l){this.element=e,this.options=t.extend({},o,l),this._defaults=o,this._name=a,this.init()}d.prototype={init:function(l){const i=this;t((function(){var t,l;const a=s.querySelector(`[data-little-layout="${i.options.namespacedId}"]`);"input"===(null==(t=null==a?void 0:a.dataset)?void 0:t.fieldType)?b(C,e({field:i.options},a.dataset)).mount(a):"settings"===(null==(l=null==a?void 0:a.dataset)?void 0:l.fieldType)&&b($,e({field:i.options},a.dataset)).mount(a)}))}},t.fn[a]=function(e){return this.each((function(){t.data(this,"plugin_"+a)||t.data(this,"plugin_"+a,new d(this,e))}))}}(jQuery,window,document);