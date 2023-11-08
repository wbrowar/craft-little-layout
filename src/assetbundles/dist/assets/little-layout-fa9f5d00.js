function D(...o){}function dt(...o){}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const z=globalThis,Y=z.ShadowRoot&&(z.ShadyCSS===void 0||z.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Z=Symbol(),Q=new WeakMap;let ut=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==Z)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Y&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=Q.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&Q.set(e,t))}return t}toString(){return this.cssText}};const $t=o=>new ut(typeof o=="string"?o:o+"",void 0,Z),bt=(o,...t)=>{const e=o.length===1?o[0]:t.reduce((s,i,l)=>s+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[l+1],o[0]);return new ut(e,o,Z)},mt=(o,t)=>{if(Y)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),i=z.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,o.appendChild(s)}},tt=Y?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return $t(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:vt,defineProperty:gt,getOwnPropertyDescriptor:xt,getOwnPropertyNames:St,getOwnPropertySymbols:At,getPrototypeOf:Et}=Object,S=globalThis,et=S.trustedTypes,wt=et?et.emptyScript:"",q=S.reactiveElementPolyfillSupport,O=(o,t)=>o,j={toAttribute(o,t){switch(t){case Boolean:o=o?wt:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},G=(o,t)=>!vt(o,t),st={attribute:!0,type:String,converter:j,reflect:!1,hasChanged:G};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),S.litPropertyMetadata??(S.litPropertyMetadata=new WeakMap);class N extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=st){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&gt(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:l}=xt(this.prototype,t)??{get(){return this[e]},set(r){this[e]=r}};return{get(){return i==null?void 0:i.call(this)},set(r){const a=i==null?void 0:i.call(this);l.call(this,r),this.requestUpdate(t,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??st}static _$Ei(){if(this.hasOwnProperty(O("elementProperties")))return;const t=Et(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(O("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(O("properties"))){const e=this.properties,s=[...St(e),...At(e)];for(const i of s)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(tt(i))}else t!==void 0&&e.push(tt(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$Eg=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$ES??(this._$ES=[])).push(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$ES)==null||e.splice(this._$ES.indexOf(t)>>>0,1)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return mt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)==null||t.forEach(e=>{var s;return(s=e.hostConnected)==null?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e){var l;const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const r=(((l=s.converter)==null?void 0:l.toAttribute)!==void 0?s.converter:j).toAttribute(e,s.type);this._$Em=t,r==null?this.removeAttribute(i):this.setAttribute(i,r),this._$Em=null}}_$AK(t,e){var l;const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const r=s.getPropertyOptions(i),a=typeof r.converter=="function"?{fromAttribute:r.converter}:((l=r.converter)==null?void 0:l.fromAttribute)!==void 0?r.converter:j;this._$Em=i,this[i]=a.fromAttribute(e,r.type),this._$Em=null}}requestUpdate(t,e,s,i=!1,l){if(t!==void 0){if(s??(s=this.constructor.getPropertyOptions(t)),!(s.hasChanged??G)(i?l:this[t],e))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(const[l,r]of this._$Ep)this[l]=r;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[l,r]of i)r.wrapped!==!0||this._$AL.has(l)||this[l]===void 0||this.C(l,this[l],r)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(s=this._$ES)==null||s.forEach(i=>{var l;return(l=i.hostUpdate)==null?void 0:l.call(i)}),this.update(e)):this._$ET()}catch(i){throw t=!1,this._$ET(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)==null||e.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EO(e,this[e]))),this._$ET()}updated(t){}firstUpdated(t){}}N.elementStyles=[],N.shadowRootOptions={mode:"open"},N[O("elementProperties")]=new Map,N[O("finalized")]=new Map,q==null||q({ReactiveElement:N}),(S.reactiveElementVersions??(S.reactiveElementVersions=[])).push("2.0.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V=globalThis,F=V.trustedTypes,it=F?F.createPolicy("lit-html",{createHTML:o=>o}):void 0,ct="$lit$",x=`lit$${(Math.random()+"").slice(9)}$`,pt="?"+x,Ct=`<${pt}>`,M=document,H=()=>M.createComment(""),k=o=>o===null||typeof o!="object"&&typeof o!="function",_t=Array.isArray,Pt=o=>_t(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",J=`[ 	
\f\r]`,U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ot=/-->/g,rt=/>/g,E=RegExp(`>|${J}(?:([^\\s"'>=/]+)(${J}*=${J}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),lt=/'/g,nt=/"/g,yt=/^(?:script|style|textarea|title)$/i,Mt=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),w=Mt(1),T=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),at=new WeakMap,C=M.createTreeWalker(M,129);function ft(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return it!==void 0?it.createHTML(t):t}const Nt=(o,t)=>{const e=o.length-1,s=[];let i,l=t===2?"<svg>":"",r=U;for(let a=0;a<e;a++){const n=o[a];let u,_,h=-1,b=0;for(;b<n.length&&(r.lastIndex=b,_=r.exec(n),_!==null);)b=r.lastIndex,r===U?_[1]==="!--"?r=ot:_[1]!==void 0?r=rt:_[2]!==void 0?(yt.test(_[2])&&(i=RegExp("</"+_[2],"g")),r=E):_[3]!==void 0&&(r=E):r===E?_[0]===">"?(r=i??U,h=-1):_[1]===void 0?h=-2:(h=r.lastIndex-_[2].length,u=_[1],r=_[3]===void 0?E:_[3]==='"'?nt:lt):r===nt||r===lt?r=E:r===ot||r===rt?r=U:(r=E,i=void 0);const g=r===E&&o[a+1].startsWith("/>")?" ":"";l+=r===U?n+Ct:h>=0?(s.push(u),n.slice(0,h)+ct+n.slice(h)+x+g):n+x+(h===-2?a:g)}return[ft(o,l+(o[e]||"<?>")+(t===2?"</svg>":"")),s]};class I{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let l=0,r=0;const a=t.length-1,n=this.parts,[u,_]=Nt(t,e);if(this.el=I.createElement(u,s),C.currentNode=this.el.content,e===2){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=C.nextNode())!==null&&n.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const h of i.getAttributeNames())if(h.endsWith(ct)){const b=_[r++],g=i.getAttribute(h).split(x),B=/([.?@])?(.*)/.exec(b);n.push({type:1,index:l,name:B[2],strings:g,ctor:B[1]==="."?Rt:B[1]==="?"?Ut:B[1]==="@"?Ot:W}),i.removeAttribute(h)}else h.startsWith(x)&&(n.push({type:6,index:l}),i.removeAttribute(h));if(yt.test(i.tagName)){const h=i.textContent.split(x),b=h.length-1;if(b>0){i.textContent=F?F.emptyScript:"";for(let g=0;g<b;g++)i.append(h[g],H()),C.nextNode(),n.push({type:2,index:++l});i.append(h[b],H())}}}else if(i.nodeType===8)if(i.data===pt)n.push({type:2,index:l});else{let h=-1;for(;(h=i.data.indexOf(x,h+1))!==-1;)n.push({type:7,index:l}),h+=x.length-1}l++}}static createElement(t,e){const s=M.createElement("template");return s.innerHTML=t,s}}function R(o,t,e=o,s){var r,a;if(t===T)return t;let i=s!==void 0?(r=e._$Co)==null?void 0:r[s]:e._$Cl;const l=k(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==l&&((a=i==null?void 0:i._$AO)==null||a.call(i,!1),l===void 0?i=void 0:(i=new l(o),i._$AT(o,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=i:e._$Cl=i),i!==void 0&&(t=R(o,i._$AS(o,t.values),i,s)),t}class Tt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=((t==null?void 0:t.creationScope)??M).importNode(e,!0);C.currentNode=i;let l=C.nextNode(),r=0,a=0,n=s[0];for(;n!==void 0;){if(r===n.index){let u;n.type===2?u=new L(l,l.nextSibling,this,t):n.type===1?u=new n.ctor(l,n.name,n.strings,this,t):n.type===6&&(u=new Vt(l,this,t)),this._$AV.push(u),n=s[++a]}r!==(n==null?void 0:n.index)&&(l=C.nextNode(),r++)}return C.currentNode=M,i}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class L{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=R(this,t,e),k(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==T&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Pt(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==d&&k(this._$AH)?this._$AA.nextSibling.data=t:this.$(M.createTextNode(t)),this._$AH=t}g(t){var l;const{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=I.createElement(ft(s.h,s.h[0]),this.options)),s);if(((l=this._$AH)==null?void 0:l._$AD)===i)this._$AH.p(e);else{const r=new Tt(i,this),a=r.u(this.options);r.p(e),this.$(a),this._$AH=r}}_$AC(t){let e=at.get(t.strings);return e===void 0&&at.set(t.strings,e=new I(t)),e}T(t){_t(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const l of t)i===e.length?e.push(s=new L(this.k(H()),this.k(H()),this,this.options)):s=e[i],s._$AI(l),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class W{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,l){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=l,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=d}_$AI(t,e=this,s,i){const l=this.strings;let r=!1;if(l===void 0)t=R(this,t,e,0),r=!k(t)||t!==this._$AH&&t!==T,r&&(this._$AH=t);else{const a=t;let n,u;for(t=l[0],n=0;n<l.length-1;n++)u=R(this,a[s+n],e,n),u===T&&(u=this._$AH[n]),r||(r=!k(u)||u!==this._$AH[n]),u===d?t=d:t!==d&&(t+=(u??"")+l[n+1]),this._$AH[n]=u}r&&!i&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Rt extends W{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}}class Ut extends W{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}}class Ot extends W{constructor(t,e,s,i,l){super(t,e,s,i,l),this.type=5}_$AI(t,e=this){if((t=R(this,t,e,0)??d)===T)return;const s=this._$AH,i=t===d&&s!==d||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,l=t!==d&&(s===d||i);i&&this.element.removeEventListener(this.name,this,s),l&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class Vt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){R(this,t)}}const K=V.litHtmlPolyfillSupport;K==null||K(I,L),(V.litHtmlVersions??(V.litHtmlVersions=[])).push("3.0.0");const Ht=(o,t,e)=>{const s=(e==null?void 0:e.renderBefore)??t;let i=s._$litPart$;if(i===void 0){const l=(e==null?void 0:e.renderBefore)??null;s._$litPart$=i=new L(t.insertBefore(H(),l),l,void 0,e??{})}return i._$AI(o),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class P extends N{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ht(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return T}}var ht;P._$litElement$=!0,P.finalized=!0,(ht=globalThis.litElementHydrateSupport)==null||ht.call(globalThis,{LitElement:P});const X=globalThis.litElementPolyfillSupport;X==null||X({LitElement:P});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kt={attribute:!0,type:String,converter:j,reflect:!1,hasChanged:G},It=(o=kt,t,e)=>{const{kind:s,metadata:i}=e;let l=globalThis.litPropertyMetadata.get(i);if(l===void 0&&globalThis.litPropertyMetadata.set(i,l=new Map),l.set(e.name,o),s==="accessor"){const{name:r}=e;return{set(a){const n=t.get.call(this);t.set.call(this,a),this.requestUpdate(r,n,o)},init(a){return a!==void 0&&this.C(r,void 0,o),a}}}if(s==="setter"){const{name:r}=e;return function(a){const n=this[r];t.call(this,a),this.requestUpdate(r,n,o)}}throw Error("Unsupported decorator location: "+s)};function c(o){return(t,e)=>typeof e=="object"?It(o,t,e):((s,i,l)=>{const r=i.hasOwnProperty(l);return i.constructor.createProperty(l,r?{...s,wrapped:!0}:s),r?Object.getOwnPropertyDescriptor(i,l):void 0})(o,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function y(o){return c({...o,state:!0,attribute:!1})}var Lt=Object.defineProperty,Bt=Object.getOwnPropertyDescriptor,m=(o,t,e,s)=>{for(var i=s>1?void 0:s?Bt(t,e):t,l=o.length-1,r;l>=0;l--)(r=o[l])&&(i=(s?r(t,e,i):r(i))||i);return s&&i&&Lt(t,e,i),i};class $ extends P{constructor(){super(...arguments),this.clearable=!1,this.editable=!1}_fieldValueListener(t){this._fieldValue=t.detail.fieldValue}connectedCallback(){super.connectedCallback(),dt({clearable:this.clearable,layoutCols:this.layoutCols,defaultValue:this.defaultValue,editable:this.editable,fieldId:this.fieldId,fieldName:this.fieldName,layoutRows:this.layoutRows,selectionMode:this.selectionMode})}render(){return w`
      <little-layout-field-control
        ?clearable="${this.clearable}"
        ?editable="${this.editable}"
        field-default="${this.defaultValue}"
        layout-cols="${this.layoutCols}"
        layout-rows="${this.layoutRows}"
        selection-mode="${this.selectionMode}"
        @value-updated="${this._fieldValueListener}"
      >
        <span slot="clear-icon" class="delete icon"></span>
      </little-layout-field-control>
      <input
        type="hidden"
        id="${this.fieldId}"
        name="${this.fieldName}[raw]"
        autocomplete="off"
        value="${this._fieldValue}"
      />
    `}createRenderRoot(){return this}}m([c({type:Boolean})],$.prototype,"clearable",2);m([c({attribute:"default-value"})],$.prototype,"defaultValue",2);m([c({type:Boolean})],$.prototype,"editable",2);m([c({attribute:"field-id"})],$.prototype,"fieldId",2);m([c({attribute:"field-name"})],$.prototype,"fieldName",2);m([c({attribute:"layout-cols",type:Number})],$.prototype,"layoutCols",2);m([c({attribute:"layout-rows",type:Number})],$.prototype,"layoutRows",2);m([c({attribute:"selection-mode"})],$.prototype,"selectionMode",2);m([y()],$.prototype,"_fieldValue",2);var Dt=Object.defineProperty,zt=Object.getOwnPropertyDescriptor,f=(o,t,e,s)=>{for(var i=s>1?void 0:s?zt(t,e):t,l=o.length-1,r;l>=0;l--)(r=o[l])&&(i=(s?r(t,e,i):r(i))||i);return s&&i&&Dt(t,e,i),i};class p extends P{constructor(){super(...arguments),this.clearable=!1,this.editable=!1,this.selectionMode="box",this._status="idle",this._xStart=void 0,this._xEnd=void 0,this._yStart=void 0,this._yEnd=void 0}_getFieldValue(){return typeof this._xStart=="number"&&typeof this._xEnd=="number"&&typeof this._yStart=="number"&&typeof this._yEnd=="number"?`${this._xStart}|${this._xEnd}|${this._yStart}|${this._yEnd}`:"empty"}_getHasSelected(){return this._fieldValue==="empty"?!1:typeof this._xStart=="number"||typeof this._xEnd=="number"||typeof this._yStart=="number"||typeof this._yEnd=="number"}_getSelectedBoxes(){const t=[];if(this.selectionMode==="box"){if(typeof this._xStart=="number"&&typeof this._yStart=="number"&&typeof this._xEnd=="number"&&typeof this._yEnd=="number")for(let e=this._xStart;e<this._xEnd+1;e++)for(let s=this._yStart;s<this._yEnd+1;s++)t.push(`${e}|${s}`)}else this.selectionMode==="single"&&t.push(`${this._xStart}|${this._yStart}`);return t}_dispatchFieldValue(){this._fieldValue&&this.dispatchEvent(new CustomEvent("value-updated",{bubbles:!0,composed:!0,detail:{fieldValue:this._fieldValue}}))}_boxClassesForBox(t,e){const s=[];return this.editable&&s.push("layout-box--editable"),this._selectedBoxes.includes(`${t}|${e}`)?s.push("layout-box--selected"):s.push("layout-box--not-selected"),t===1&&e===1&&s.push("layout-box--rounded-tl"),t===1&&e===this.layoutRows&&s.push("layout-box--rounded-bl"),t===this.layoutCols&&e===1&&s.push("layout-box--rounded-tr"),t===this.layoutCols&&e===this.layoutRows&&s.push("layout-box--rounded-br"),s.join(" ")}_boxClicked(t){const e=t[0],s=t[1];this._status==="idle"?(this._xStart=this._xEnd=e,this._yStart=this._yEnd=s,this.selectionMode==="box"?(this._timer=setInterval(()=>{document.activeElement.blur(),this._status="idle"},1e4),this._status="inputStarted"):this.selectionMode==="single"&&document.activeElement.blur()):this._status==="inputStarted"&&(e<this._xStart?(this._xEnd=this._xStart,this._xStart=e):this._xEnd=e,s<this._yStart?(this._yEnd=this._yStart,this._yStart=s):this._yEnd=s,this._endTimer(),document.activeElement.blur())}_clearButtonClicked(){this._xStart=this._xEnd=this._yStart=this._yEnd=void 0,this._endTimer()}_endTimer(){clearInterval(this._timer),this._status="idle"}connectedCallback(){super.connectedCallback();const t=this.fieldDefault?this.fieldDefault.split("|"):[];this._xStart=t[0]?parseInt(t[0]):void 0,this._xEnd=t[1]?parseInt(t[1]):void 0,this._yStart=t[2]?parseInt(t[2]):void 0,this._yEnd=t[3]?parseInt(t[3]):void 0,this._fieldValue=this._getFieldValue(),this._hasSelected=this._getHasSelected(),this._selectedBoxes=this._getSelectedBoxes()}render(){const t=this.layoutCols,e=this.layoutRows,s=[];for(let i=0;i<e;i++){const l=[];for(let r=0;r<t;r++){const a=r+1,n=i+1;l.push(w` <button
            class="layout-box ${this._boxClassesForBox(a,n)}"
            type="button"
            @click="${this.editable?()=>this._boxClicked([a,n]):d}"
          ></button>`)}s.push(w`<div class="layout-boxes-row">${l}</div>`)}return w`<div>
      <p>CLEARABLE: ${this.clearable}</p>
      <p>SELECTION MODE: ${this.selectionMode}</p>
      <p>STATUS: ${this._status}</p>
      <p>X START: ${this._xStart}</p>
      <p>X END: ${this._xEnd}</p>
      <p>Y START: ${this._yStart}</p>
      <p>Y END: ${this._yEnd}</p>
      <p>FIELD VALUE: ${this._fieldValue}</p>
    </div>`,w`
      <div class="container">
        <div class="field">
          <div class="layout-boxes">${s}</div>
          <div>
            ${this.clearable&&this.editable&&this._hasSelected?w`<button
                  type="button"
                  class="clear-button"
                  title="Clear"
                  aria-label="Clear"
                  @click="${this._clearButtonClicked}"
                >
                  <slot name="clear-icon"></slot>
                </button>`:d}
          </div>
        </div>
      </div>
      ${d}
    `}willUpdate(t){(t.has("_xStart")||t.has("_xEnd")||t.has("_yStart")||t.has("_yEnd"))&&(this._fieldValue=this._getFieldValue(),this._hasSelected=this._getHasSelected()),t.has("_fieldValue")&&this._dispatchFieldValue(),(t.has("_xStart")||t.has("_xEnd")||t.has("_yStart")||t.has("_yEnd")||t.has("selectionMode"))&&(this._selectedBoxes=this._getSelectedBoxes())}}p.styles=bt`
    .container {
      overflow: auto;
      -webkit-overflow-scrolling: touch;
    }
    .field {
      --layout-box-size: var(--little-layout-box-size, 22px);
      --layout-boxes-gap: 0.25rem;

      display: grid;
      grid-template-columns: min-content minmax(0, 1fr);
      gap: 0.3rem;
      align-items: center;
    }

    .layout-boxes {
      display: flex;
      flex-direction: column;
      gap: var(--layout-boxes-gap);
    }

    .layout-boxes-row {
      display: flex;
      gap: var(--layout-boxes-gap);
    }

    .layout-box {
      --layout-box-border-radius: 0.3rem;
      display: block;
      padding: 5px;
      width: var(--layout-box-size);
      appearance: none;
      aspect-ratio: 1 / 1;
      background-color: var(--background-color, var(--ui-control-bg-color));
      border: 1px solid var(--medium-dark-text-color);
      border-radius: var(--border-radius, 0);

      &.layout-box--editable {
        cursor: pointer;

        &:hover,
        &:focus {
          --background-color: var(--primary-color);
          border-color: var(--primary-color);
          outline: var(--layout-boxes-gap) solid color-mix(in srgb, var(--primary-color), transparent 90%);
        }
      }
      &.layout-box--rounded-tl {
        border-top-left-radius: var(--layout-box-border-radius);
      }
      &.layout-box--rounded-bl {
        border-bottom-left-radius: var(--layout-box-border-radius);
      }
      &.layout-box--rounded-tr {
        border-top-right-radius: var(--layout-box-border-radius);
      }
      &.layout-box--rounded-br {
        border-bottom-right-radius: var(--layout-box-border-radius);
      }
      &.layout-box--selected {
        --background-color: var(--medium-dark-text-color);
      }
    }

    .clear-button {
      appearance: none;
      display: block;
      align-self: stretch;
      width: 22px;
      height: 25px;
      background: transparent;
      border: none;
      cursor: pointer;
    }
  `;f([c({type:Boolean})],p.prototype,"clearable",2);f([c({type:Boolean})],p.prototype,"editable",2);f([c({attribute:"field-default"})],p.prototype,"fieldDefault",2);f([c({attribute:"layout-cols",type:Number})],p.prototype,"layoutCols",2);f([c({attribute:"layout-rows",type:Number})],p.prototype,"layoutRows",2);f([c({attribute:"selection-mode"})],p.prototype,"selectionMode",2);f([y()],p.prototype,"_status",2);f([y()],p.prototype,"_timer",2);f([y()],p.prototype,"_xStart",2);f([y()],p.prototype,"_xEnd",2);f([y()],p.prototype,"_yStart",2);f([y()],p.prototype,"_yEnd",2);f([y()],p.prototype,"_fieldValue",2);f([y()],p.prototype,"_hasSelected",2);f([y()],p.prototype,"_selectedBoxes",2);var jt=Object.defineProperty,Ft=Object.getOwnPropertyDescriptor,A=(o,t,e,s)=>{for(var i=s>1?void 0:s?Ft(t,e):t,l=o.length-1,r;l>=0;l--)(r=o[l])&&(i=(s?r(t,e,i):r(i))||i);return s&&i&&jt(t,e,i),i};class v extends P{_defaultValueListener(t){this._defaultValue=t.detail.fieldValue}_getSettingsFromField(t,e){switch(t){case"boxSize":D("Settings updated: boxSize",e.value),this._boxSize=e.value;break;case"cols":D("Settings updated: cols",e.value),this._layoutCols=e.value;break;case"rows":D("Settings updated: rows",e.value),this._layoutRows=e.value;break;case"selectionMode":D("Settings updated: selectionMode",e.value),this._selectionMode=e.value;break}}connectedCallback(){super.connectedCallback(),dt({defaultValue:this.defaultValue,fieldId:this.fieldId,fieldName:this.fieldName});const t={boxSize:`[data-little-layout-settings="${this.fieldId}"] [data-attribute="boxSize"] input`,cols:`[data-little-layout-settings="${this.fieldId}"] [data-attribute="cols"] input`,rows:`[data-little-layout-settings="${this.fieldId}"] [data-attribute="rows"] input`,selectionMode:`[data-little-layout-settings="${this.fieldId}"] [data-attribute="selectionMode"] select`};Object.entries(t).forEach(([e,s])=>{const i=document.querySelector(s);i&&(i.addEventListener("change",l=>{this._getSettingsFromField(e,i)}),this._getSettingsFromField(e,i))})}render(){return w`
      <little-layout-field-control
        style="${this._boxSize?`--little-layout-box-size: ${this._boxSize}`:d}"
        clearable="true"
        editable="true"
        field-default="${this.defaultValue}"
        layout-cols="${this._layoutCols}"
        layout-rows="${this._layoutRows}"
        selection-mode="${this._selectionMode}"
        @value-updated="${this._defaultValueListener}"
      >
        <span slot="clear-icon" class="delete icon"></span>
      </little-layout-field-control>
      <input
        type="hidden"
        id="${this.fieldId}"
        name="${this.fieldName}"
        autocomplete="off"
        value="${this._defaultValue}"
      />
    `}createRenderRoot(){return this}}A([c({attribute:"default-value"})],v.prototype,"defaultValue",2);A([c({attribute:"field-id"})],v.prototype,"fieldId",2);A([c({attribute:"field-name"})],v.prototype,"fieldName",2);A([y()],v.prototype,"_boxSize",2);A([y()],v.prototype,"_defaultValue",2);A([y({type:Number})],v.prototype,"_layoutCols",2);A([y({type:Number})],v.prototype,"_layoutRows",2);A([y()],v.prototype,"_selectionMode",2);customElements.get("little-layout-field")||customElements.define("little-layout-field",$);customElements.get("little-layout-field-control")||customElements.define("little-layout-field-control",p);customElements.get("little-layout-field-settings")||customElements.define("little-layout-field-settings",v);
