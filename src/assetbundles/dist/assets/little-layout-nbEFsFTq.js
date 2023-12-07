/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D=globalThis,X=D.ShadowRoot&&(D.ShadyCSS===void 0||D.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,dt=Symbol(),Q=new WeakMap;let gt=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==dt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(X&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=Q.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&Q.set(e,t))}return t}toString(){return this.cssText}};const $t=o=>new gt(typeof o=="string"?o:o+"",void 0,dt),vt=(o,t)=>{if(X)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),i=D.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,o.appendChild(s)}},tt=X?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return $t(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:bt,defineProperty:mt,getOwnPropertyDescriptor:xt,getOwnPropertyNames:wt,getOwnPropertySymbols:At,getPrototypeOf:St}=Object,S=globalThis,et=S.trustedTypes,Et=et?et.emptyScript:"",q=S.reactiveElementPolyfillSupport,O=(o,t)=>o,k={toAttribute(o,t){switch(t){case Boolean:o=o?Et:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},Y=(o,t)=>!bt(o,t),st={attribute:!0,type:String,converter:k,reflect:!1,hasChanged:Y};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),S.litPropertyMetadata??(S.litPropertyMetadata=new WeakMap);class M extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=st){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&mt(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:l}=xt(this.prototype,t)??{get(){return this[e]},set(r){this[e]=r}};return{get(){return i==null?void 0:i.call(this)},set(r){const n=i==null?void 0:i.call(this);l.call(this,r),this.requestUpdate(t,n,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??st}static _$Ei(){if(this.hasOwnProperty(O("elementProperties")))return;const t=St(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(O("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(O("properties"))){const e=this.properties,s=[...wt(e),...At(e)];for(const i of s)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(tt(i))}else t!==void 0&&e.push(tt(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$Eg=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$ES(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$E_??(this._$E_=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$E_)==null||e.delete(t)}_$ES(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return vt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$E_)==null||t.forEach(e=>{var s;return(s=e.hostConnected)==null?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$E_)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e){var l;const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const r=(((l=s.converter)==null?void 0:l.toAttribute)!==void 0?s.converter:k).toAttribute(e,s.type);this._$Em=t,r==null?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,e){var l;const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const r=s.getPropertyOptions(i),n=typeof r.converter=="function"?{fromAttribute:r.converter}:((l=r.converter)==null?void 0:l.fromAttribute)!==void 0?r.converter:k;this._$Em=i,this[i]=n.fromAttribute(e,r.type),this._$Em=null}}requestUpdate(t,e,s,i=!1,l){if(t!==void 0){if(s??(s=this.constructor.getPropertyOptions(t)),!(s.hasChanged??Y)(i?l:this[t],e))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[l,r]of this._$Ep)this[l]=r;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[l,r]of i)r.wrapped!==!0||this._$AL.has(l)||this[l]===void 0||this.C(l,this[l],r)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(s=this._$E_)==null||s.forEach(i=>{var l;return(l=i.hostUpdate)==null?void 0:l.call(i)}),this.update(e)):this._$ET()}catch(i){throw t=!1,this._$ET(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$E_)==null||e.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EO(e,this[e]))),this._$ET()}updated(t){}firstUpdated(t){}}M.elementStyles=[],M.shadowRootOptions={mode:"open"},M[O("elementProperties")]=new Map,M[O("finalized")]=new Map,q==null||q({ReactiveElement:M}),(S.reactiveElementVersions??(S.reactiveElementVersions=[])).push("2.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const P=globalThis,z=P.trustedTypes,it=z?z.createPolicy("lit-html",{createHTML:o=>o}):void 0,ut="$lit$",A=`lit$${(Math.random()+"").slice(9)}$`,ct="?"+A,Ct=`<${ct}>`,V=document,F=()=>V.createComment(""),T=o=>o===null||typeof o!="object"&&typeof o!="function",pt=Array.isArray,Ht=o=>pt(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",W=`[ 	
\f\r]`,R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ot=/-->/g,rt=/>/g,E=RegExp(`>|${W}(?:([^\\s"'>=/]+)(${W}*=${W}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),lt=/'/g,at=/"/g,_t=/^(?:script|style|textarea|title)$/i,Vt=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),h=Vt(1),L=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),nt=new WeakMap,C=V.createTreeWalker(V,129);function ft(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return it!==void 0?it.createHTML(t):t}const Mt=(o,t)=>{const e=o.length-1,s=[];let i,l=t===2?"<svg>":"",r=R;for(let n=0;n<e;n++){const a=o[n];let p,y,d=-1,x=0;for(;x<a.length&&(r.lastIndex=x,y=r.exec(a),y!==null);)x=r.lastIndex,r===R?y[1]==="!--"?r=ot:y[1]!==void 0?r=rt:y[2]!==void 0?(_t.test(y[2])&&(i=RegExp("</"+y[2],"g")),r=E):y[3]!==void 0&&(r=E):r===E?y[0]===">"?(r=i??R,d=-1):y[1]===void 0?d=-2:(d=r.lastIndex-y[2].length,p=y[1],r=y[3]===void 0?E:y[3]==='"'?at:lt):r===at||r===lt?r=E:r===ot||r===rt?r=R:(r=E,i=void 0);const w=r===E&&o[n+1].startsWith("/>")?" ":"";l+=r===R?a+Ct:d>=0?(s.push(p),a.slice(0,d)+ut+a.slice(d)+A+w):a+A+(d===-2?n:w)}return[ft(o,l+(o[e]||"<?>")+(t===2?"</svg>":"")),s]};class B{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let l=0,r=0;const n=t.length-1,a=this.parts,[p,y]=Mt(t,e);if(this.el=B.createElement(p,s),C.currentNode=this.el.content,e===2){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(i=C.nextNode())!==null&&a.length<n;){if(i.nodeType===1){if(i.hasAttributes())for(const d of i.getAttributeNames())if(d.endsWith(ut)){const x=y[r++],w=i.getAttribute(d).split(A),Z=/([.?@])?(.*)/.exec(x);a.push({type:1,index:l,name:Z[2],strings:w,ctor:Z[1]==="."?It:Z[1]==="?"?Rt:Z[1]==="@"?Ot:j}),i.removeAttribute(d)}else d.startsWith(A)&&(a.push({type:6,index:l}),i.removeAttribute(d));if(_t.test(i.tagName)){const d=i.textContent.split(A),x=d.length-1;if(x>0){i.textContent=z?z.emptyScript:"";for(let w=0;w<x;w++)i.append(d[w],F()),C.nextNode(),a.push({type:2,index:++l});i.append(d[x],F())}}}else if(i.nodeType===8)if(i.data===ct)a.push({type:2,index:l});else{let d=-1;for(;(d=i.data.indexOf(A,d+1))!==-1;)a.push({type:7,index:l}),d+=A.length-1}l++}}static createElement(t,e){const s=V.createElement("template");return s.innerHTML=t,s}}function I(o,t,e=o,s){var r,n;if(t===L)return t;let i=s!==void 0?(r=e._$Co)==null?void 0:r[s]:e._$Cl;const l=T(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==l&&((n=i==null?void 0:i._$AO)==null||n.call(i,!1),l===void 0?i=void 0:(i=new l(o),i._$AT(o,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=i:e._$Cl=i),i!==void 0&&(t=I(o,i._$AS(o,t.values),i,s)),t}class Lt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=((t==null?void 0:t.creationScope)??V).importNode(e,!0);C.currentNode=i;let l=C.nextNode(),r=0,n=0,a=s[0];for(;a!==void 0;){if(r===a.index){let p;a.type===2?p=new N(l,l.nextSibling,this,t):a.type===1?p=new a.ctor(l,a.name,a.strings,this,t):a.type===6&&(p=new Pt(l,this,t)),this._$AV.push(p),a=s[++n]}r!==(a==null?void 0:a.index)&&(l=C.nextNode(),r++)}return C.currentNode=V,i}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class N{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=I(this,t,e),T(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==L&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Ht(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==u&&T(this._$AH)?this._$AA.nextSibling.data=t:this.$(V.createTextNode(t)),this._$AH=t}g(t){var l;const{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=B.createElement(ft(s.h,s.h[0]),this.options)),s);if(((l=this._$AH)==null?void 0:l._$AD)===i)this._$AH.p(e);else{const r=new Lt(i,this),n=r.u(this.options);r.p(e),this.$(n),this._$AH=r}}_$AC(t){let e=nt.get(t.strings);return e===void 0&&nt.set(t.strings,e=new B(t)),e}T(t){pt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const l of t)i===e.length?e.push(s=new N(this.k(F()),this.k(F()),this,this.options)):s=e[i],s._$AI(l),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class j{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,l){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=l,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=u}_$AI(t,e=this,s,i){const l=this.strings;let r=!1;if(l===void 0)t=I(this,t,e,0),r=!T(t)||t!==this._$AH&&t!==L,r&&(this._$AH=t);else{const n=t;let a,p;for(t=l[0],a=0;a<l.length-1;a++)p=I(this,n[s+a],e,a),p===L&&(p=this._$AH[a]),r||(r=!T(p)||p!==this._$AH[a]),p===u?t=u:t!==u&&(t+=(p??"")+l[a+1]),this._$AH[a]=p}r&&!i&&this.O(t)}O(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class It extends j{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===u?void 0:t}}class Rt extends j{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==u)}}class Ot extends j{constructor(t,e,s,i,l){super(t,e,s,i,l),this.type=5}_$AI(t,e=this){if((t=I(this,t,e,0)??u)===L)return;const s=this._$AH,i=t===u&&s!==u||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,l=t!==u&&(s===u||i);i&&this.element.removeEventListener(this.name,this,s),l&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Pt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){I(this,t)}}const J=P.litHtmlPolyfillSupport;J==null||J(B,N),(P.litHtmlVersions??(P.litHtmlVersions=[])).push("3.1.0");const Ft=(o,t,e)=>{const s=(e==null?void 0:e.renderBefore)??t;let i=s._$litPart$;if(i===void 0){const l=(e==null?void 0:e.renderBefore)??null;s._$litPart$=i=new N(t.insertBefore(F(),l),l,void 0,e??{})}return i._$AI(o),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class H extends M{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ft(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return L}}var ht;H._$litElement$=!0,H.finalized=!0,(ht=globalThis.litElementHydrateSupport)==null||ht.call(globalThis,{LitElement:H});const K=globalThis.litElementPolyfillSupport;K==null||K({LitElement:H});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const G=o=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(o,t)}):customElements.define(o,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tt={attribute:!0,type:String,converter:k,reflect:!1,hasChanged:Y},Bt=(o=Tt,t,e)=>{const{kind:s,metadata:i}=e;let l=globalThis.litPropertyMetadata.get(i);if(l===void 0&&globalThis.litPropertyMetadata.set(i,l=new Map),l.set(e.name,o),s==="accessor"){const{name:r}=e;return{set(n){const a=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,a,o)},init(n){return n!==void 0&&this.C(r,void 0,o),n}}}if(s==="setter"){const{name:r}=e;return function(n){const a=this[r];t.call(this,n),this.requestUpdate(r,a,o)}}throw Error("Unsupported decorator location: "+s)};function c(o){return(t,e)=>typeof e=="object"?Bt(o,t,e):((s,i,l)=>{const r=i.hasOwnProperty(l);return i.constructor.createProperty(l,r?{...s,wrapped:!0}:s),r?Object.getOwnPropertyDescriptor(i,l):void 0})(o,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function g(o){return c({...o,state:!0,attribute:!1})}function U(...o){}function yt(...o){}var Nt=Object.defineProperty,Zt=Object.getOwnPropertyDescriptor,b=(o,t,e,s)=>{for(var i=s>1?void 0:s?Zt(t,e):t,l=o.length-1,r;l>=0;l--)(r=o[l])&&(i=(s?r(t,e,i):r(i))||i);return s&&i&&Nt(t,e,i),i};let $=class extends H{constructor(){super(...arguments),this.boxIcons={},this.clearable=!1,this.defaultValue="",this.editable=!1,this.fieldId="",this.fieldName="",this.layoutCols=1,this.layoutRows=1,this.selectionMode="box",this._fieldValue=""}_fieldValueListener(o){this._fieldValue=o.detail.fieldValue,this._setInputValueFromFieldValue()}_getFieldValueFromInput(){const o=this.querySelector("input");o&&(this._fieldValue=o.value)}_setInputValueFromFieldValue(){const o=this.querySelector("input");o&&(o.value=this._fieldValue)}connectedCallback(){super.connectedCallback(),this._getFieldValueFromInput();const o=this.querySelector("input");o&&(o.addEventListener("change",this._getFieldValueFromInput),o.addEventListener("input",this._getFieldValueFromInput)),yt({clearable:this.clearable,layoutCols:this.layoutCols,defaultValue:this.defaultValue,editable:this.editable,fieldId:this.fieldId,fieldName:this.fieldName,layoutRows:this.layoutRows,selectionMode:this.selectionMode})}disconnectedCallback(){super.disconnectedCallback();const o=this.querySelector("input");o&&(o.removeEventListener("change",this._getFieldValueFromInput),o.removeEventListener("input",this._getFieldValueFromInput))}render(){return h`
      <little-layout-field-control
        ?clearable="${this.clearable}"
        ?editable="${this.editable}"
        box-icons="${JSON.stringify(this.boxIcons)}"
        field-default="${this._fieldValue}"
        layout-cols="${this.layoutCols}"
        layout-rows="${this.layoutRows}"
        selection-mode="${this.selectionMode}"
        @value-updated="${this._fieldValueListener}"
      ></little-layout-field-control>
    `}createRenderRoot(){return this}};b([c({attribute:"box-icons",type:Object})],$.prototype,"boxIcons",2);b([c({type:Boolean})],$.prototype,"clearable",2);b([c({attribute:"default-value"})],$.prototype,"defaultValue",2);b([c({type:Boolean})],$.prototype,"editable",2);b([c({attribute:"field-id"})],$.prototype,"fieldId",2);b([c({attribute:"field-name"})],$.prototype,"fieldName",2);b([c({attribute:"layout-cols",type:Number})],$.prototype,"layoutCols",2);b([c({attribute:"layout-rows",type:Number})],$.prototype,"layoutRows",2);b([c({attribute:"selection-mode"})],$.prototype,"selectionMode",2);b([g()],$.prototype,"_fieldValue",2);$=b([G("little-layout-field")],$);const Ut={alignTop:h`<svg
    fill="currentColor"
    width="800px"
    height="800px"
    viewBox="0 0 256 256"
    id="Flat"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M224.00488,39.99414a7.99977,7.99977,0,0,1-8,8h-176a8,8,0,0,1,0-16h176A7.99977,7.99977,0,0,1,224.00488,39.99414ZM192,64H152a16.01833,16.01833,0,0,0-16,16v96a16.01833,16.01833,0,0,0,16,16h40a16.01833,16.01833,0,0,0,16-16V80A16.01833,16.01833,0,0,0,192,64Zm-88,0H64A16.01833,16.01833,0,0,0,48,80V216a16.01833,16.01833,0,0,0,16,16h40a16.01833,16.01833,0,0,0,16-16V80A16.01833,16.01833,0,0,0,104,64Z"
    />
  </svg>`,alignCenterVertical:h`<svg
    fill="currentColor"
    width="800px"
    height="800px"
    viewBox="0 0 256 256"
    id="Flat"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M232.00488,128a7.99977,7.99977,0,0,1-8,8H208v48a16.01833,16.01833,0,0,1-16,16H152a16.01833,16.01833,0,0,1-16-16V136H120v72a16.01833,16.01833,0,0,1-16,16H64a16.01833,16.01833,0,0,1-16-16V136H32.00488a8,8,0,0,1,0-16H48V48A16.01833,16.01833,0,0,1,64,32h40a16.01833,16.01833,0,0,1,16,16v72h16V72a16.01833,16.01833,0,0,1,16-16h40a16.01833,16.01833,0,0,1,16,16v48h16.00488A7.99977,7.99977,0,0,1,232.00488,128Z"
    />
  </svg>`,alignBottom:h`<svg
    fill="currentColor"
    width="800px"
    height="800px"
    viewBox="0 0 256 256"
    id="Flat"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M224.00488,216.00586a8.00008,8.00008,0,0,1-8,8h-176a8,8,0,1,1,0-16h176A8.00008,8.00008,0,0,1,224.00488,216.00586ZM152,192h40a16.01833,16.01833,0,0,0,16-16V80a16.01833,16.01833,0,0,0-16-16H152a16.01833,16.01833,0,0,0-16,16v96A16.01833,16.01833,0,0,0,152,192Zm-88,0h40a16.01833,16.01833,0,0,0,16-16V40a16.01833,16.01833,0,0,0-16-16H64A16.01833,16.01833,0,0,0,48,40V176A16.01833,16.01833,0,0,0,64,192Z"
    />
  </svg>`,alignCenter:h`<svg
    fill="currentColor"
    width="800px"
    height="800px"
    viewBox="0 0 256 256"
    id="Flat"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M236,139.31348,139.31348,236a16.01779,16.01779,0,0,1-22.627,0L20,139.31348a16.01779,16.01779,0,0,1,0-22.627L116.68652,20a16.01779,16.01779,0,0,1,22.627,0L236,116.68652A16.01779,16.01779,0,0,1,236,139.31348Z"
    />
  </svg>`,alignLeft:h`<svg
    fill="currentColor"
    width="800px"
    height="800px"
    viewBox="0 0 256 256"
    id="Flat"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M47.99414,39.99512v176a8,8,0,0,1-16,0v-176a8,8,0,0,1,16,0ZM80,120h96a16.01833,16.01833,0,0,0,16-16V64a16.01833,16.01833,0,0,0-16-16H80A16.01833,16.01833,0,0,0,64,64v40A16.01833,16.01833,0,0,0,80,120Zm136,16H80a16.01833,16.01833,0,0,0-16,16v40a16.01833,16.01833,0,0,0,16,16H216a16.01833,16.01833,0,0,0,16-16V152A16.01833,16.01833,0,0,0,216,136Z"
    />
  </svg>`,alignCenterHorizontal:h`<svg
    fill="currentColor"
    width="800px"
    height="800px"
    viewBox="0 0 256 256"
    id="Flat"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M224,152v40a16.01833,16.01833,0,0,1-16,16H136v15.99512a8,8,0,0,1-16,0V208H48a16.01833,16.01833,0,0,1-16-16V152a16.01833,16.01833,0,0,1,16-16h72V120H72a16.01833,16.01833,0,0,1-16-16V64A16.01833,16.01833,0,0,1,72,48h48V31.99512a8,8,0,1,1,16,0V48h48a16.01833,16.01833,0,0,1,16,16v40a16.01833,16.01833,0,0,1-16,16H136v16h72A16.01833,16.01833,0,0,1,224,152Z"
    />
  </svg>`,alignRight:h`<svg
    fill="currentColor"
    width="800px"
    height="800px"
    viewBox="0 0 256 256"
    id="Flat"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M224.00586,39.99512v176a8,8,0,0,1-16,0v-176a8,8,0,0,1,16,0ZM176,48H80A16.01833,16.01833,0,0,0,64,64v40a16.01833,16.01833,0,0,0,16,16h96a16.01833,16.01833,0,0,0,16-16V64A16.01833,16.01833,0,0,0,176,48Zm0,88H40a16.01833,16.01833,0,0,0-16,16v40a16.01833,16.01833,0,0,0,16,16H176a16.01833,16.01833,0,0,0,16-16V152A16.01833,16.01833,0,0,0,176,136Z"
    />
  </svg>`,arrowUp:h`<svg
    fill="currentColor"
    width="800px"
    height="800px"
    viewBox="0 0 256 256"
    id="Flat"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M215.39111,163.06152A8.00015,8.00015,0,0,1,208,168H48a7.99981,7.99981,0,0,1-5.65674-13.65674l80-80a8,8,0,0,1,11.31348,0l80,80A7.99982,7.99982,0,0,1,215.39111,163.06152Z"
    />
  </svg>`,arrowDown:h`<svg
    fill="currentColor"
    width="800px"
    height="800px"
    viewBox="0 0 256 256"
    id="Flat"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M213.65674,101.657l-80,79.99976a7.99945,7.99945,0,0,1-11.31348,0l-80-79.99976A8,8,0,0,1,48,88H208a8,8,0,0,1,5.65674,13.657Z"
    />
  </svg>`,arrowLeft:h`<svg
    fill="currentColor"
    width="800px"
    height="800px"
    viewBox="0 0 256 256"
    id="Flat"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M168,48V208a8.00018,8.00018,0,0,1-13.65674,5.65723l-80-80a8.00034,8.00034,0,0,1,0-11.31446l80-80A8.0001,8.0001,0,0,1,168,48Z"
    />
  </svg>`,arrowRight:h`<svg
    fill="currentColor"
    width="800px"
    height="800px"
    viewBox="0 0 256 256"
    id="Flat"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M181.65674,133.65723l-80,80A8.0001,8.0001,0,0,1,88,208V48a8.0001,8.0001,0,0,1,13.65674-5.65723l80,80A8.00034,8.00034,0,0,1,181.65674,133.65723Z"
    />
  </svg>`,arrowsInCorners:h`<svg
    fill="currentColor"
    width="800px"
    height="800px"
    viewBox="0 0 256 256"
    id="Flat"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M144,104V64a8.0001,8.0001,0,0,1,13.65723-5.65674L172,72.686l30.34277-30.34278a8.00018,8.00018,0,0,1,11.31446,11.31348L183.314,84l14.34327,14.34326A8.00038,8.00038,0,0,1,192,112H152A8.00008,8.00008,0,0,1,144,104Zm-40,40H64a8.00038,8.00038,0,0,0-5.65723,13.65674L72.686,172,42.34277,202.34277a8.00053,8.00053,0,0,0,11.31446,11.31446L84,183.31421l14.34277,14.343A8.00066,8.00066,0,0,0,112,192V152A8.00008,8.00008,0,0,0,104,144Zm79.314,28,14.34327-14.34326A8.00038,8.00038,0,0,0,192,144H152a8.00008,8.00008,0,0,0-8,8v40a8.00053,8.00053,0,0,0,13.65723,5.65723L172,183.31421l30.34277,30.343a8.00053,8.00053,0,0,0,11.31446-11.31446ZM107.06152,56.60889a7.9999,7.9999,0,0,0-8.71875,1.73437L84,72.686,53.65723,42.34326A8.00018,8.00018,0,1,0,42.34277,53.65674L72.686,84,58.34277,98.34326A8.00038,8.00038,0,0,0,64,112h40a8.00008,8.00008,0,0,0,8-8V64A8.00015,8.00015,0,0,0,107.06152,56.60889Z"
    />
  </svg>`,arrowsOutCardinal:h`<svg
    fill="currentColor"
    width="800px"
    height="800px"
    viewBox="0 0 256 256"
    id="Flat"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M163.6748,200.6543a7.99949,7.99949,0,0,1-1.73339,8.71826l-28.28418,28.28418a8.00063,8.00063,0,0,1-11.31446,0L94.05859,209.37256a8.00038,8.00038,0,0,1,5.65723-13.65674H120V160a8,8,0,0,1,16,0v35.71582h20.28418A8,8,0,0,1,163.6748,200.6543ZM99.71582,60.28418H120V96a8,8,0,0,0,16,0V60.28418h20.28418a8.00038,8.00038,0,0,0,5.65723-13.65674L133.65723,18.34326a8.00063,8.00063,0,0,0-11.31446,0L94.05859,46.62744a8.00038,8.00038,0,0,0,5.65723,13.65674ZM96,136a8,8,0,0,0,0-16H60.28418V99.71582A8.00038,8.00038,0,0,0,46.627,94.05859L18.34277,122.34326a8,8,0,0,0,0,11.31348L46.627,161.94141a8.00038,8.00038,0,0,0,13.65723-5.65723V136Zm141.65723-13.65674L209.37305,94.05859a8.00038,8.00038,0,0,0-13.65723,5.65723V120H160a8,8,0,0,0,0,16h35.71582v20.28418a8.00018,8.00018,0,0,0,13.65723,5.65723l28.28418-28.28467A8,8,0,0,0,237.65723,122.34326Z"
    />
  </svg>`,arrowsOutCorners:h`<svg
    fill="currentColor"
    width="800px"
    height="800px"
    viewBox="0 0 256 256"
    id="Flat"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M216,48V88a8.00018,8.00018,0,0,1-13.65723,5.65674L188,79.314l-30.34277,30.34278a8.00018,8.00018,0,0,1-11.31446-11.31348L176.686,68,162.34277,53.65674A8.00037,8.00037,0,0,1,168,40h40A8.00008,8.00008,0,0,1,216,48ZM98.34277,146.34326,68,176.686,53.65723,162.34326A8.0001,8.0001,0,0,0,40,168v40a8.00008,8.00008,0,0,0,8,8H88a8.00038,8.00038,0,0,0,5.65723-13.65674L79.314,188l30.34327-30.34326a8.00018,8.00018,0,0,0-11.31446-11.31348Zm112.71875,14.26563a8.00113,8.00113,0,0,0-8.71875,1.73437L188,176.686l-30.34277-30.34278a8.00018,8.00018,0,0,0-11.31446,11.31348L176.686,188l-14.34327,14.34326A8.00037,8.00037,0,0,0,168,216h40a8.00008,8.00008,0,0,0,8-8V168A8.00015,8.00015,0,0,0,211.06152,160.60889ZM79.314,68,93.65723,53.65674A8.00038,8.00038,0,0,0,88,40H48a8.00008,8.00008,0,0,0-8,8V88a8.00018,8.00018,0,0,0,13.65723,5.65674L68,79.314l30.34277,30.34278a8.00018,8.00018,0,0,0,11.31446-11.31348Z"
    />
  </svg>`,textAlignLeft:h`<svg
    fill="currentColor"
    width="800px"
    height="800px"
    viewBox="0 0 256 256"
    id="Flat"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M32.02344,68a8.00008,8.00008,0,0,1,8-8h176a8,8,0,0,1,0,16h-176A8.00008,8.00008,0,0,1,32.02344,68Zm8,48h128a8,8,0,0,0,0-16h-128a8,8,0,1,0,0,16Zm176,24H40.0293a8,8,0,0,0,0,16H216.02344a8,8,0,0,0,0-16Zm-48,40H40.0293a8,8,0,0,0,0,16H168.02344a8,8,0,0,0,0-16Z"
    />
  </svg>`,textAlignCenter:h`<svg
    fill="currentColor"
    width="800px"
    height="800px"
    viewBox="0 0 256 256"
    id="Flat"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M32,68a8.00008,8.00008,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8.00008,8.00008,0,0,1,32,68Zm32,32a8,8,0,0,0,0,16H192a8,8,0,0,0,0-16Zm151.99707,40H40.00293a8,8,0,1,0,0,16H215.99707a8,8,0,0,0,0-16Zm-24,40H64.00293a8,8,0,0,0,0,16H191.99707a8,8,0,0,0,0-16Z"
    />
  </svg>`,textAlignRight:h`<svg
    fill="currentColor"
    width="800px"
    height="800px"
    viewBox="0 0 256 256"
    id="Flat"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M32,68a8.00008,8.00008,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8.00008,8.00008,0,0,1,32,68Zm184,32H88a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm0,40H40.00586a8,8,0,1,0,0,16H216a8,8,0,0,0,0-16Zm0,40H88.00586a8,8,0,1,0,0,16H216a8,8,0,0,0,0-16Z"
    />
  </svg>`,textAlignJustified:h`<svg
    fill="currentColor"
    width="800px"
    height="800px"
    viewBox="0 0 256 256"
    id="Flat"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M32,68a8.00039,8.00039,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8.00039,8.00039,0,0,1,32,68Zm184,32H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm0,40H40.00586a8,8,0,1,0,0,16H216a8,8,0,0,0,0-16Zm0,40H40.00586a8,8,0,1,0,0,16H216a8,8,0,0,0,0-16Z"
    />
  </svg>`};var Dt=Object.defineProperty,kt=Object.getOwnPropertyDescriptor,f=(o,t,e,s)=>{for(var i=s>1?void 0:s?kt(t,e):t,l=o.length-1,r;l>=0;l--)(r=o[l])&&(i=(s?r(t,e,i):r(i))||i);return s&&i&&Dt(t,e,i),i};let _=class extends H{constructor(){super(...arguments),this.boxIcons={},this.clearable=!1,this.editable=!1,this.fieldDefault="",this.layoutCols=1,this.layoutRows=1,this.selectionMode="box",this._status="idle",this._timer=void 0,this._xStart=void 0,this._xEnd=void 0,this._yStart=void 0,this._yEnd=void 0,this._fieldValue="empty",this._hasSelected=!1,this._selectedBoxes=[]}_getFieldValue(){return typeof this._xStart=="number"&&typeof this._xEnd=="number"&&typeof this._yStart=="number"&&typeof this._yEnd=="number"?`${this._xStart}|${this._xEnd}|${this._yStart}|${this._yEnd}`:"empty"}_getHasSelected(){return this._fieldValue==="empty"?!1:typeof this._xStart=="number"||typeof this._xEnd=="number"||typeof this._yStart=="number"||typeof this._yEnd=="number"}_getSelectedBoxes(){const o=[];if(this.selectionMode==="box"){if(typeof this._xStart=="number"&&typeof this._yStart=="number"&&typeof this._xEnd=="number"&&typeof this._yEnd=="number")for(let t=this._xStart;t<this._xEnd+1;t++)for(let e=this._yStart;e<this._yEnd+1;e++)o.push(`${t}|${e}`)}else this.selectionMode==="single"&&o.push(`${this._xStart}|${this._yStart}`);return o}_dispatchFieldValue(){this._fieldValue&&this.dispatchEvent(new CustomEvent("value-updated",{bubbles:!0,composed:!0,detail:{fieldValue:this._fieldValue}}))}_boxClassesForBox(o,t){const e=[];return this.editable&&e.push("layout-box--editable"),this._selectedBoxes.includes(`${o}|${t}`)?e.push("layout-box--selected"):e.push("layout-box--not-selected"),o===1&&t===1&&e.push("layout-box--rounded-tl"),o===1&&t===this.layoutRows&&e.push("layout-box--rounded-bl"),o===this.layoutCols&&t===1&&e.push("layout-box--rounded-tr"),o===this.layoutCols&&t===this.layoutRows&&e.push("layout-box--rounded-br"),e.join(" ")}_boxClicked(o){const t=document.activeElement,e=o[0],s=o[1];this._status==="idle"?(this._xStart=this._xEnd=e,this._yStart=this._yEnd=s,this.selectionMode==="box"?(this._timer=setInterval(()=>{t==null||t.blur(),this._status="idle"},1e4),this._status="inputStarted"):this.selectionMode==="single"&&(t==null||t.blur())):this._status==="inputStarted"&&(e<this._xStart?(this._xEnd=this._xStart,this._xStart=e):this._xEnd=e,s<this._yStart?(this._yEnd=this._yStart,this._yStart=s):this._yEnd=s,this._endTimer(),t==null||t.blur())}_clearButtonClicked(){this._xStart=this._xEnd=this._yStart=this._yEnd=void 0,this._endTimer()}_endTimer(){clearInterval(this._timer),this._status="idle"}connectedCallback(){super.connectedCallback();const o=this.fieldDefault?this.fieldDefault.split("|"):[];this._xStart=o[0]?parseInt(o[0]):void 0,this._xEnd=o[1]?parseInt(o[1]):void 0,this._yStart=o[2]?parseInt(o[2]):void 0,this._yEnd=o[3]?parseInt(o[3]):void 0,this._fieldValue=this._getFieldValue(),this._hasSelected=this._getHasSelected(),this._selectedBoxes=this._getSelectedBoxes()}render(){const o=this.layoutCols,t=this.layoutRows,e=[];for(let s=0;s<t;s++){const i=[];for(let l=0;l<o;l++){const r=l+1,n=s+1,a=this.boxIcons[`${r}|${n}`]??void 0;i.push(h` <button
            class="layout-box ${this._boxClassesForBox(r,n)}"
            title="${(a==null?void 0:a.description)??u}"
            type="button"
            @click="${this.editable?()=>this._boxClicked([r,n]):u}"
          >
            ${Ut[a==null?void 0:a.id]??u}
          </button>`)}e.push(h`<div class="layout-boxes-row">${i}</div>`)}return h`<div>
      <p>CLEARABLE: ${this.clearable}</p>
      <p>SELECTION MODE: ${this.selectionMode}</p>
      <p>STATUS: ${this._status}</p>
      <p>X START: ${this._xStart}</p>
      <p>X END: ${this._xEnd}</p>
      <p>Y START: ${this._yStart}</p>
      <p>Y END: ${this._yEnd}</p>
      <p>FIELD VALUE: ${this._fieldValue}</p>
    </div>`,h`
      <div class="container">
        <div class="field">
          <div class="layout-boxes">${e}</div>
          ${this.clearable&&this.editable&&this._hasSelected?h`<button
                type="button"
                class="clear-button delete icon"
                title="Clear"
                aria-label="Clear"
                @click="${this._clearButtonClicked}"
              ></button>`:u}
        </div>
      </div>
      ${u}
    `}willUpdate(o){(o.has("_xStart")||o.has("_xEnd")||o.has("_yStart")||o.has("_yEnd"))&&(this._fieldValue=this._getFieldValue(),this._hasSelected=this._getHasSelected()),o.has("_fieldValue")&&this._dispatchFieldValue(),(o.has("_xStart")||o.has("_xEnd")||o.has("_yStart")||o.has("_yEnd")||o.has("selectionMode"))&&(this._selectedBoxes=this._getSelectedBoxes())}createRenderRoot(){return this}};f([c({attribute:"box-icons",type:Object})],_.prototype,"boxIcons",2);f([c({type:Boolean})],_.prototype,"clearable",2);f([c({type:Boolean})],_.prototype,"editable",2);f([c({attribute:"field-default"})],_.prototype,"fieldDefault",2);f([c({attribute:"layout-cols",type:Number})],_.prototype,"layoutCols",2);f([c({attribute:"layout-rows",type:Number})],_.prototype,"layoutRows",2);f([c({attribute:"selection-mode"})],_.prototype,"selectionMode",2);f([g()],_.prototype,"_status",2);f([g()],_.prototype,"_timer",2);f([g()],_.prototype,"_xStart",2);f([g()],_.prototype,"_xEnd",2);f([g()],_.prototype,"_yStart",2);f([g()],_.prototype,"_yEnd",2);f([g()],_.prototype,"_fieldValue",2);f([g()],_.prototype,"_hasSelected",2);f([g()],_.prototype,"_selectedBoxes",2);_=f([G("little-layout-field-control")],_);function zt(o){var e;const t=[];return(e=o.querySelectorAll("tr[data-id]"))==null||e.forEach(s=>{const i={};s.querySelectorAll("td:not(.action) :is(select, textarea)").forEach(r=>{var a;const n=(a=r.name.match(/\[[^\][]*]$/))==null?void 0:a[0].replace(/[\[\]']+/g,"");n&&(i[n]=r.value)}),t.push(i)}),t}var jt=Object.defineProperty,qt=Object.getOwnPropertyDescriptor,m=(o,t,e,s)=>{for(var i=s>1?void 0:s?qt(t,e):t,l=o.length-1,r;l>=0;l--)(r=o[l])&&(i=(s?r(t,e,i):r(i))||i);return s&&i&&jt(t,e,i),i};let v=class extends H{constructor(){super(...arguments),this.defaultValue="",this.fieldId="",this.fieldName="",this._boxIcons={},this._boxSize="",this._defaultValue="",this._layoutCols=1,this._layoutRows=1,this._selectionMode="box"}_defaultValueListener(o){this._defaultValue=o.detail.fieldValue}_getSettingsFromField(o,t){switch(o){case"boxSize":U("Settings updated: boxSize",t.value),this._boxSize=t.value;break;case"cols":U("Settings updated: cols",t.value),this._layoutCols=parseInt(t.value);break;case"rows":U("Settings updated: rows",t.value),this._layoutRows=parseInt(t.value);break;case"selectionMode":U("Settings updated: selectionMode",t.value),this._selectionMode=t.value;break}}_getBoxIconsFromTable(o){this._boxIcons={},(o?zt(o):[]).forEach(e=>{e.column&&e.row&&(this._boxIcons[`${e.column}|${e.row}`]={description:e.description??void 0,id:e.icon})})}connectedCallback(){super.connectedCallback(),yt({defaultValue:this.defaultValue,fieldId:this.fieldId,fieldName:this.fieldName}),Object.entries({boxSize:'[data-attribute="boxSize"] input',cols:'[data-attribute="cols"] input',rows:'[data-attribute="rows"] input',selectionMode:'[data-attribute="selectionMode"] select'}).forEach(([e,s])=>{const i=this.querySelector(s);i&&(i.addEventListener("change",()=>{this._getSettingsFromField(e,i)}),this._getSettingsFromField(e,i))});const t=this.querySelector('.field[data-attribute="boxIcons"] table');t&&(this._getBoxIconsFromTable(t),new MutationObserver(()=>{this._getBoxIconsFromTable(t)}).observe(t,{attributes:!0,childList:!0,subtree:!0}))}render(){return h`
      <little-layout-field-control
        style="${this._boxSize?`--little-layout-box-size: ${this._boxSize}`:u}"
        clearable="true"
        editable="true"
        box-icons="${JSON.stringify(this._boxIcons)}"
        field-default="${this.defaultValue}"
        layout-cols="${this._layoutCols}"
        layout-rows="${this._layoutRows}"
        selection-mode="${this._selectionMode}"
        @value-updated="${this._defaultValueListener}"
      >
        <input
          type="hidden"
          id="${this.fieldId}"
          name="${this.fieldName}"
          autocomplete="off"
          value="${this._defaultValue}"
        />
      </little-layout-field-control>
    `}createRenderRoot(){return this}};m([c({attribute:"default-value"})],v.prototype,"defaultValue",2);m([c({attribute:"field-id"})],v.prototype,"fieldId",2);m([c({attribute:"field-name"})],v.prototype,"fieldName",2);m([g()],v.prototype,"_boxIcons",2);m([g()],v.prototype,"_boxSize",2);m([g()],v.prototype,"_defaultValue",2);m([g()],v.prototype,"_layoutCols",2);m([g()],v.prototype,"_layoutRows",2);m([g()],v.prototype,"_selectionMode",2);v=m([G("little-layout-field-settings")],v);
