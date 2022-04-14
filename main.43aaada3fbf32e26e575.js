(()=>{"use strict";var t,e={45:(t,e,s)=>{var i=s(144),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container",style:t.isExtension?"width: 500px":""},[s("PasswordInput"),t._v(" "),s("SmartWM")],1)};n._withStripped=!0;var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"input-group my-2"},[s("div",{staticClass:"input-group-prepend"},[s("div",{staticClass:"input-group-text"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.visible,expression:"visible"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.visible)?t._i(t.visible,null)>-1:t.visible},on:{change:function(e){var s=t.visible,i=e.target,n=!!i.checked;if(Array.isArray(s)){var a=t._i(s,null);i.checked?a<0&&(t.visible=s.concat([null])):a>-1&&(t.visible=s.slice(0,a).concat(s.slice(a+1)))}else t.visible=n}}})])]),t._v(" "),"checkbox"==(t.visible?"text":"password")?s("input",{directives:[{name:"model",rawName:"v-model",value:t.input,expression:"input"}],staticClass:"form-control",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.input)?t._i(t.input,null)>-1:t.input},on:{change:function(e){var s=t.input,i=e.target,n=!!i.checked;if(Array.isArray(s)){var a=t._i(s,null);i.checked?a<0&&(t.input=s.concat([null])):a>-1&&(t.input=s.slice(0,a).concat(s.slice(a+1)))}else t.input=n}}}):"radio"==(t.visible?"text":"password")?s("input",{directives:[{name:"model",rawName:"v-model",value:t.input,expression:"input"}],staticClass:"form-control",attrs:{type:"radio"},domProps:{checked:t._q(t.input,null)},on:{change:function(e){t.input=null}}}):s("input",{directives:[{name:"model",rawName:"v-model",value:t.input,expression:"input"}],staticClass:"form-control",attrs:{type:t.visible?"text":"password"},domProps:{value:t.input},on:{input:function(e){e.target.composing||(t.input=e.target.value)}}}),t._v(" "),s("input",{staticClass:"form-control",attrs:{type:"text",readonly:""},domProps:{value:t.output}}),t._v(" "),s("div",{staticClass:"input-group-append"},[s("button",{staticClass:"btn btn-primary",on:{click:t.onClickCopy}},[t._v("📋")])])])};a._withStripped=!0;const r={data:()=>({visible:!1,input:"",output:""}),watch:{input(){this.output=this.convert(this.input)}},methods:{convert(t){const e=Array.from(t).map((t=>t.charCodeAt().toString())).join("");return window.btoa(e)},onClickCopy(){window.navigator.clipboard.writeText(this.output)}}};var o=s(900),l=(0,o.Z)(r,a,[],!1,null,null,null);l.options.__file="src/js/components/PasswordInput.vue";const c=l.exports;var p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"my-2"},[s("div",{staticClass:"d-flex my-2"},[s("button",{staticClass:"btn btn-primary flex-grow-1 mr-1",on:{click:function(e){t.stage="display"}}},[t._v("Display")]),t._v(" "),s("button",{staticClass:"btn btn-primary flex-grow-1 ml-1",on:{click:function(e){t.stage="storage"}}},[t._v("Storage")])]),t._v(" "),t.displayStage?[s("h3",[t._v("Display")]),t._v(" "),t.items.length>0?[s("button",{staticClass:"btn btn-primary btn-block",on:{click:t.refreshItems}},[t._v("🔄 Refresh Items")]),t._v(" "),t._l(t.items,(function(t,e){return s("CardItem",{key:e,attrs:{item:t}})}))]:t.isLoading?s("Loader"):[t._m(0)]]:t._e(),t._v(" "),t.storageStage?s("StorageList"):t._e()],2)};p._withStripped=!0;var u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card my-1"},[t.item.isLoading?s("Spinner"):[s("div",{staticClass:"card-header d-flex justify-content-between align-items-center"},[s("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.item.data.title))])]),t._v(" "),s("div",{staticClass:"card-body"},[t.item.data.error?[s("p",[t._v("⛔️ "+t._s(t.item.data.error))])]:[s("p",{staticClass:"my-1"},[t._v(t._s(t.item.data.a))]),t._v(" "),s("p",{staticClass:"my-1"},[t._v(t._s(t.item.data.b))])]],2)]],2)};u._withStripped=!0;var d=function(){var t=this;t.$createElement;return t._self._c,t._m(0)};d._withStripped=!0;var m=(0,o.Z)({},d,[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"d-flex justify-content-center my-3"},[s("div",{staticClass:"spinner-border text-primary",attrs:{role:"status"}},[s("span",{staticClass:"sr-only"},[t._v("Loading...")])])])}],!1,null,null,null);m.options.__file="src/js/components/Spinner.vue";const v=m.exports,f={props:{item:{type:Object,required:!0}},components:{Spinner:v}};var _=(0,o.Z)(f,u,[],!1,null,null,null);_.options.__file="src/js/components/CardItem.vue";const h=_.exports;var y=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card"},[e("Spinner")],1)};y._withStripped=!0;const g={components:{Spinner:v}};var b=(0,o.Z)(g,y,[],!1,null,null,null);b.options.__file="src/js/components/Loader.vue";const w=b.exports;var C=function(){var t=this,e=t.$createElement;return(t._self._c||e)("label",{staticClass:"btn btn-primary flex-grow-1 m-1",attrs:{type:"button"},on:{click:function(e){return t.$emit("click")}}},[t._v(t._s(t.title))])};C._withStripped=!0;const x={props:{title:{type:String,required:!0}}};var I=(0,o.Z)(x,C,[],!1,null,null,null);I.options.__file="src/js/components/FetchButton.vue";const S=I.exports;var k=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h3",[t._v("Storage")]),t._v(" "),s("button",{staticClass:"btn btn-primary btn-block",on:{click:function(e){return t.addItem()}}},[t._v("🆕 Add Item")]),t._v(" "),t.items.length>0?[t._l(t.items,(function(e,i){return[s("div",{key:i,staticClass:"input-group my-2"},[s("div",{staticClass:"input-group-prepend"},[s("span",{staticClass:"input-group-text"},[t._v(t._s(t.getIcon(e)))]),t._v(" "),s("span",{staticClass:"input-group-text"},[t._v("from")])]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.display.from,expression:"item.display.from"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.display.from},on:{input:function(s){s.target.composing||t.$set(e.display,"from",s.target.value)}}}),t._v(" "),t._m(0,!0),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.display.to,expression:"item.display.to"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.display.to},on:{input:function(s){s.target.composing||t.$set(e.display,"to",s.target.value)}}}),t._v(" "),s("div",{staticClass:"input-group-append"},[s("button",{staticClass:"btn btn-primary",class:{disabled:!t.isItemModified(e)},attrs:{type:"button"},on:{click:function(e){return t.updateItemAt(i)}}},[t._v("☑️")]),t._v(" "),s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.removeItemAt(i)}}},[t._v("❌")])])])]}))]:[t._m(1)]],2)};k._withStripped=!0;const j="items";function A(){try{const t=window.localStorage.getItem(j);return t?JSON.parse(t):[]}catch(t){return[]}}const E={getItems:A,updateItems:function(t){window.localStorage.setItem(j,JSON.stringify(t))},addItem:function(t){const e=A();e.push(t),window.localStorage.setItem(j,JSON.stringify(e))}},L={data:()=>({items:[]}),created(){this.items=E.getItems().map((({from:t,to:e})=>({values:{from:t,to:e},display:{from:t,to:e}})))},methods:{addItem(){this.items.push({values:{from:"",to:""},display:{from:"",to:""}}),this.saveItems()},updateItemAt(t){const e=this.items[t];e.values.from=e.display.from,e.values.to=e.display.to,this.saveItems()},isItemModified:t=>!(t.display.from===t.values.from&&t.display.to===t.values.to),removeItemAt(t){this.items.splice(t,1),this.saveItems()},getIcon(t){return this.isItemModified(t)?"❌":"✅"},saveItems(){const t=this.items.map((t=>({from:t.values.from,to:t.values.to})));E.updateItems(t)}}};var O=(0,o.Z)(L,k,[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"input-group-prepend"},[s("span",{staticClass:"input-group-text"},[t._v("to")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[t._v("Empty")])])}],!1,null,null,null);async function P(t){return(await fetch("https://modest-shaw-b5cb04.netlify.app/.netlify/functions/parsePrice",{method:"POST",body:JSON.stringify(t)})).json()}O.options.__file="src/js/components/StorageList.vue";const $={components:{CardItem:h,Loader:w,FetchButton:S,StorageList:O.exports},data:()=>({stage:"display",isLoading:!0,items:[]}),async created(){this.stage="display";const t=E.getItems();t.length>0?(await this.loadItems(t),this.isLoading=!1):this.isLoading=!1},methods:{async onClickFetch(t){const e={id:Date.now(),isLoading:!0};this.items.push(e);const s=await P({data:{from:t,to:"privatuah_auto"}});s.ok&&(e.data=s.data.constructed,e.isLoading=!1)},async loadItems(t){const e=await P({data:t});e.ok||console.log("mounted error");const s=e.data,i=(Array.isArray(s)?s:[s]).map((t=>t.error?{error:t.error}:t.constructed)).map(((t,e)=>({id:Date.now()+e,isLoading:!1,data:t})));this.items.push(...i)},async refreshItems(){this.load,this.items=[],this.isLoading=!0,await this.loadItems(E.getItems()),this.isLoading=!1}},computed:{displayStage(){return"display"===this.stage},storageStage(){return"storage"===this.stage}}};var N=(0,o.Z)($,p,[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[t._v("no items found")])])}],!1,null,null,null);N.options.__file="src/js/components/SmartWM.vue";const Z={components:{PasswordInput:c,SmartWM:N.exports},data:()=>({isExtension:!1}),mounted(){this.isExtension=!1}};var M=(0,o.Z)(Z,n,[],!1,null,null,null);M.options.__file="src/js/components/Popup.vue";const D=M.exports;new i.Z({el:"#app",render:t=>t(D)})}},s={};function i(t){var n=s[t];if(void 0!==n)return n.exports;var a=s[t]={exports:{}};return e[t](a,a.exports,i),a.exports}i.m=e,t=[],i.O=(e,s,n,a)=>{if(!s){var r=1/0;for(p=0;p<t.length;p++){for(var[s,n,a]=t[p],o=!0,l=0;l<s.length;l++)(!1&a||r>=a)&&Object.keys(i.O).every((t=>i.O[t](s[l])))?s.splice(l--,1):(o=!1,a<r&&(r=a));if(o){t.splice(p--,1);var c=n();void 0!==c&&(e=c)}}return e}a=a||0;for(var p=t.length;p>0&&t[p-1][2]>a;p--)t[p]=t[p-1];t[p]=[s,n,a]},i.d=(t,e)=>{for(var s in e)i.o(e,s)&&!i.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t={179:0};i.O.j=e=>0===t[e];var e=(e,s)=>{var n,a,[r,o,l]=s,c=0;if(r.some((e=>0!==t[e]))){for(n in o)i.o(o,n)&&(i.m[n]=o[n]);if(l)var p=l(i)}for(e&&e(s);c<r.length;c++)a=r[c],i.o(t,a)&&t[a]&&t[a][0](),t[r[c]]=0;return i.O(p)},s=self.webpackChunk=self.webpackChunk||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))})();var n=i.O(void 0,[125],(()=>i(45)));n=i.O(n)})();