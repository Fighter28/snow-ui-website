function e(e,t){const n=Object.create(null),i=e.split(",");for(let e=0;e<i.length;e++)n[i[e]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}const t=e("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");function n(e){return!!e||""===e}function i(e){if(x(e)){const t={};for(let n=0;n<e.length;n++){const o=e[n],s=R(o)?r(o):i(o);if(s)for(const e in s)t[e]=s[e]}return t}return R(e)||A(e)?e:void 0}const o=/;(?![^(]*\))/g,s=/:(.+)/;function r(e){const t={};return e.split(o).forEach((e=>{if(e){const n=e.split(s);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function a(e){let t="";if(R(e))t=e;else if(x(e))for(let n=0;n<e.length;n++){const i=a(e[n]);i&&(t+=i+" ")}else if(A(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const l=e=>R(e)?e:null==e?"":x(e)||A(e)&&(e.toString===O||!$(e.toString))?JSON.stringify(e,c,2):String(e),c=(e,t)=>t&&t.__v_isRef?c(e,t.value):k(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n])=>(e[`${t} =>`]=n,e)),{})}:_(t)?{[`Set(${t.size})`]:[...t.values()]}:!A(t)||x(t)||j(t)?t:String(t),u={},d=[],h=()=>{},p=()=>!1,f=/^on[^a-z]/,g=e=>f.test(e),v=e=>e.startsWith("onUpdate:"),m=Object.assign,b=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},y=Object.prototype.hasOwnProperty,w=(e,t)=>y.call(e,t),x=Array.isArray,k=e=>"[object Map]"===E(e),_=e=>"[object Set]"===E(e),$=e=>"function"==typeof e,R=e=>"string"==typeof e,S=e=>"symbol"==typeof e,A=e=>null!==e&&"object"==typeof e,C=e=>A(e)&&$(e.then)&&$(e.catch),O=Object.prototype.toString,E=e=>O.call(e),j=e=>"[object Object]"===E(e),z=e=>R(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,B=e(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),M=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},P=/-(\w)/g,T=M((e=>e.replace(P,((e,t)=>t?t.toUpperCase():"")))),D=/\B([A-Z])/g,F=M((e=>e.replace(D,"-$1").toLowerCase())),I=M((e=>e.charAt(0).toUpperCase()+e.slice(1))),L=M((e=>e?`on${I(e)}`:"")),N=(e,t)=>!Object.is(e,t),U=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},H=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},V=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let q;let W;class G{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&W&&(this.parent=W,this.index=(W.scopes||(W.scopes=[])).push(this)-1)}run(e){if(this.active){const t=W;try{return W=this,e()}finally{W=t}}}on(){W=this}off(){W=this.parent}stop(e){if(this.active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.active=!1}}}const K=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Z=e=>(e.w&Q)>0,Y=e=>(e.n&Q)>0,X=new WeakMap;let J=0,Q=1;let ee;const te=Symbol(""),ne=Symbol("");class ie{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,function(e,t=W){t&&t.active&&t.effects.push(e)}(this,n)}run(){if(!this.active)return this.fn();let e=ee,t=se;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=ee,ee=this,se=!0,Q=1<<++J,J<=30?(({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Q})(this):oe(this),this.fn()}finally{J<=30&&(e=>{const{deps:t}=e;if(t.length){let n=0;for(let i=0;i<t.length;i++){const o=t[i];Z(o)&&!Y(o)?o.delete(e):t[n++]=o,o.w&=~Q,o.n&=~Q}t.length=n}})(this),Q=1<<--J,ee=this.parent,se=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ee===this?this.deferStop=!0:this.active&&(oe(this),this.onStop&&this.onStop(),this.active=!1)}}function oe(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let se=!0;const re=[];function ae(){re.push(se),se=!1}function le(){const e=re.pop();se=void 0===e||e}function ce(e,t,n){if(se&&ee){let t=X.get(e);t||X.set(e,t=new Map);let i=t.get(n);i||t.set(n,i=K()),ue(i)}}function ue(e,t){let n=!1;J<=30?Y(e)||(e.n|=Q,n=!Z(e)):n=!e.has(ee),n&&(e.add(ee),ee.deps.push(e))}function de(e,t,n,i,o,s){const r=X.get(e);if(!r)return;let a=[];if("clear"===t)a=[...r.values()];else if("length"===n&&x(e))r.forEach(((e,t)=>{("length"===t||t>=i)&&a.push(e)}));else switch(void 0!==n&&a.push(r.get(n)),t){case"add":x(e)?z(n)&&a.push(r.get("length")):(a.push(r.get(te)),k(e)&&a.push(r.get(ne)));break;case"delete":x(e)||(a.push(r.get(te)),k(e)&&a.push(r.get(ne)));break;case"set":k(e)&&a.push(r.get(te))}if(1===a.length)a[0]&&he(a[0]);else{const e=[];for(const t of a)t&&e.push(...t);he(K(e))}}function he(e,t){const n=x(e)?e:[...e];for(const e of n)e.computed&&pe(e);for(const e of n)e.computed||pe(e)}function pe(e,t){(e!==ee||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const fe=e("__proto__,__v_isRef,__isVue"),ge=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(S)),ve=xe(),me=xe(!1,!0),be=xe(!0),ye=we();function we(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=st(this);for(let e=0,t=this.length;e<t;e++)ce(n,0,e+"");const i=n[t](...e);return-1===i||!1===i?n[t](...e.map(st)):i}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){ae();const n=st(this)[t].apply(this,e);return le(),n}})),e}function xe(e=!1,t=!1){return function(n,i,o){if("__v_isReactive"===i)return!e;if("__v_isReadonly"===i)return e;if("__v_isShallow"===i)return t;if("__v_raw"===i&&o===(e?t?Ye:Ze:t?Ke:Ge).get(n))return n;const s=x(n);if(!e&&s&&w(ye,i))return Reflect.get(ye,i,o);const r=Reflect.get(n,i,o);return(S(i)?ge.has(i):fe(i))?r:(e||ce(n,0,i),t?r:dt(r)?s&&z(i)?r:r.value:A(r)?e?Qe(r):Je(r):r)}}function ke(e=!1){return function(t,n,i,o){let s=t[n];if(nt(s)&&dt(s)&&!dt(i))return!1;if(!e&&!nt(i)&&(it(i)||(i=st(i),s=st(s)),!x(t)&&dt(s)&&!dt(i)))return s.value=i,!0;const r=x(t)&&z(n)?Number(n)<t.length:w(t,n),a=Reflect.set(t,n,i,o);return t===st(o)&&(r?N(i,s)&&de(t,"set",n,i):de(t,"add",n,i)),a}}const _e={get:ve,set:ke(),deleteProperty:function(e,t){const n=w(e,t);e[t];const i=Reflect.deleteProperty(e,t);return i&&n&&de(e,"delete",t,void 0),i},has:function(e,t){const n=Reflect.has(e,t);return S(t)&&ge.has(t)||ce(e,0,t),n},ownKeys:function(e){return ce(e,0,x(e)?"length":te),Reflect.ownKeys(e)}},$e={get:be,set:(e,t)=>!0,deleteProperty:(e,t)=>!0},Re=m({},_e,{get:me,set:ke(!0)}),Se=e=>e,Ae=e=>Reflect.getPrototypeOf(e);function Ce(e,t,n=!1,i=!1){const o=st(e=e.__v_raw),s=st(t);n||(t!==s&&ce(o,0,t),ce(o,0,s));const{has:r}=Ae(o),a=i?Se:n?lt:at;return r.call(o,t)?a(e.get(t)):r.call(o,s)?a(e.get(s)):void(e!==o&&e.get(t))}function Oe(e,t=!1){const n=this.__v_raw,i=st(n),o=st(e);return t||(e!==o&&ce(i,0,e),ce(i,0,o)),e===o?n.has(e):n.has(e)||n.has(o)}function Ee(e,t=!1){return e=e.__v_raw,!t&&ce(st(e),0,te),Reflect.get(e,"size",e)}function je(e){e=st(e);const t=st(this);return Ae(t).has.call(t,e)||(t.add(e),de(t,"add",e,e)),this}function ze(e,t){t=st(t);const n=st(this),{has:i,get:o}=Ae(n);let s=i.call(n,e);s||(e=st(e),s=i.call(n,e));const r=o.call(n,e);return n.set(e,t),s?N(t,r)&&de(n,"set",e,t):de(n,"add",e,t),this}function Be(e){const t=st(this),{has:n,get:i}=Ae(t);let o=n.call(t,e);o||(e=st(e),o=n.call(t,e)),i&&i.call(t,e);const s=t.delete(e);return o&&de(t,"delete",e,void 0),s}function Me(){const e=st(this),t=0!==e.size,n=e.clear();return t&&de(e,"clear",void 0,void 0),n}function Pe(e,t){return function(n,i){const o=this,s=o.__v_raw,r=st(s),a=t?Se:e?lt:at;return!e&&ce(r,0,te),s.forEach(((e,t)=>n.call(i,a(e),a(t),o)))}}function Te(e,t,n){return function(...i){const o=this.__v_raw,s=st(o),r=k(s),a="entries"===e||e===Symbol.iterator&&r,l="keys"===e&&r,c=o[e](...i),u=n?Se:t?lt:at;return!t&&ce(s,0,l?ne:te),{next(){const{value:e,done:t}=c.next();return t?{value:e,done:t}:{value:a?[u(e[0]),u(e[1])]:u(e),done:t}},[Symbol.iterator](){return this}}}}function De(e){return function(...t){return"delete"!==e&&this}}function Fe(){const e={get(e){return Ce(this,e)},get size(){return Ee(this)},has:Oe,add:je,set:ze,delete:Be,clear:Me,forEach:Pe(!1,!1)},t={get(e){return Ce(this,e,!1,!0)},get size(){return Ee(this)},has:Oe,add:je,set:ze,delete:Be,clear:Me,forEach:Pe(!1,!0)},n={get(e){return Ce(this,e,!0)},get size(){return Ee(this,!0)},has(e){return Oe.call(this,e,!0)},add:De("add"),set:De("set"),delete:De("delete"),clear:De("clear"),forEach:Pe(!0,!1)},i={get(e){return Ce(this,e,!0,!0)},get size(){return Ee(this,!0)},has(e){return Oe.call(this,e,!0)},add:De("add"),set:De("set"),delete:De("delete"),clear:De("clear"),forEach:Pe(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach((o=>{e[o]=Te(o,!1,!1),n[o]=Te(o,!0,!1),t[o]=Te(o,!1,!0),i[o]=Te(o,!0,!0)})),[e,n,t,i]}const[Ie,Le,Ne,Ue]=Fe();function He(e,t){const n=t?e?Ue:Ne:e?Le:Ie;return(t,i,o)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?t:Reflect.get(w(n,i)&&i in t?n:t,i,o)}const Ve={get:He(!1,!1)},qe={get:He(!1,!0)},We={get:He(!0,!1)},Ge=new WeakMap,Ke=new WeakMap,Ze=new WeakMap,Ye=new WeakMap;function Xe(e){return e.__v_skip||!Object.isExtensible(e)?0:function(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}((e=>E(e).slice(8,-1))(e))}function Je(e){return nt(e)?e:et(e,!1,_e,Ve,Ge)}function Qe(e){return et(e,!0,$e,We,Ze)}function et(e,t,n,i,o){if(!A(e))return e;if(e.__v_raw&&(!t||!e.__v_isReactive))return e;const s=o.get(e);if(s)return s;const r=Xe(e);if(0===r)return e;const a=new Proxy(e,2===r?i:n);return o.set(e,a),a}function tt(e){return nt(e)?tt(e.__v_raw):!(!e||!e.__v_isReactive)}function nt(e){return!(!e||!e.__v_isReadonly)}function it(e){return!(!e||!e.__v_isShallow)}function ot(e){return tt(e)||nt(e)}function st(e){const t=e&&e.__v_raw;return t?st(t):e}function rt(e){return H(e,"__v_skip",!0),e}const at=e=>A(e)?Je(e):e,lt=e=>A(e)?Qe(e):e;function ct(e){se&&ee&&ue((e=st(e)).dep||(e.dep=K()))}function ut(e,t){(e=st(e)).dep&&he(e.dep)}function dt(e){return!(!e||!0!==e.__v_isRef)}function ht(e){return pt(e,!1)}function pt(e,t){return dt(e)?e:new ft(e,t)}class ft{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:st(e),this._value=t?e:at(e)}get value(){return ct(this),this._value}set value(e){e=this.__v_isShallow?e:st(e),N(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:at(e),ut(this))}}function gt(e){return dt(e)?e.value:e}const vt={get:(e,t,n)=>gt(Reflect.get(e,t,n)),set:(e,t,n,i)=>{const o=e[t];return dt(o)&&!dt(n)?(o.value=n,!0):Reflect.set(e,t,n,i)}};function mt(e){return tt(e)?e:new Proxy(e,vt)}class bt{constructor(e,t,n,i){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new ie(e,(()=>{this._dirty||(this._dirty=!0,ut(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=n}get value(){const e=st(this);return ct(e),!e._dirty&&e._cacheable||(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function yt(e,t,n,i){let o;try{o=i?e(...i):e()}catch(e){xt(e,t,n)}return o}function wt(e,t,n,i){if($(e)){const o=yt(e,t,n,i);return o&&C(o)&&o.catch((e=>{xt(e,t,n)})),o}const o=[];for(let s=0;s<e.length;s++)o.push(wt(e[s],t,n,i));return o}function xt(e,t,n,i=!0){t&&t.vnode;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const t=i.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,o,s))return;i=i.parent}const r=t.appContext.config.errorHandler;if(r)return void yt(r,null,10,[e,o,s])}!function(e,t,n,i=!0){console.error(e)}(e,0,0,i)}let kt=!1,_t=!1;const $t=[];let Rt=0;const St=[];let At=null,Ct=0;const Ot=[];let Et=null,jt=0;const zt=Promise.resolve();let Bt=null,Mt=null;function Pt(e){const t=Bt||zt;return e?t.then(this?e.bind(this):e):t}function Tt(e){$t.length&&$t.includes(e,kt&&e.allowRecurse?Rt+1:Rt)||e===Mt||(null==e.id?$t.push(e):$t.splice(function(e){let t=Rt+1,n=$t.length;for(;t<n;){const i=t+n>>>1;Nt($t[i])<e?t=i+1:n=i}return t}(e.id),0,e),Dt())}function Dt(){kt||_t||(_t=!0,Bt=zt.then(Ut))}function Ft(e,t,n,i){x(e)?n.push(...e):t&&t.includes(e,e.allowRecurse?i+1:i)||n.push(e),Dt()}function It(e,t=null){if(St.length){for(Mt=t,At=[...new Set(St)],St.length=0,Ct=0;Ct<At.length;Ct++)At[Ct]();At=null,Ct=0,Mt=null,It(e,t)}}function Lt(e){if(It(),Ot.length){const e=[...new Set(Ot)];if(Ot.length=0,Et)return void Et.push(...e);for(Et=e,Et.sort(((e,t)=>Nt(e)-Nt(t))),jt=0;jt<Et.length;jt++)Et[jt]();Et=null,jt=0}}const Nt=e=>null==e.id?1/0:e.id;function Ut(e){_t=!1,kt=!0,It(e),$t.sort(((e,t)=>Nt(e)-Nt(t)));try{for(Rt=0;Rt<$t.length;Rt++){const e=$t[Rt];e&&!1!==e.active&&yt(e,null,14)}}finally{Rt=0,$t.length=0,Lt(),kt=!1,Bt=null,($t.length||St.length||Ot.length)&&Ut(e)}}function Ht(e,t,...n){if(e.isUnmounted)return;const i=e.vnode.props||u;let o=n;const s=t.startsWith("update:"),r=s&&t.slice(7);if(r&&r in i){const e=`${"modelValue"===r?"model":r}Modifiers`,{number:t,trim:s}=i[e]||u;s&&(o=n.map((e=>e.trim()))),t&&(o=n.map(V))}let a,l=i[a=L(t)]||i[a=L(T(t))];!l&&s&&(l=i[a=L(F(t))]),l&&wt(l,e,6,o);const c=i[a+"Once"];if(c){if(e.emitted){if(e.emitted[a])return}else e.emitted={};e.emitted[a]=!0,wt(c,e,6,o)}}function Vt(e,t,n=!1){const i=t.emitsCache,o=i.get(e);if(void 0!==o)return o;const s=e.emits;let r={},a=!1;if(!$(e)){const i=e=>{const n=Vt(e,t,!0);n&&(a=!0,m(r,n))};!n&&t.mixins.length&&t.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}return s||a?(x(s)?s.forEach((e=>r[e]=null)):m(r,s),i.set(e,r),r):(i.set(e,null),null)}function qt(e,t){return!(!e||!g(t))&&(t=t.slice(2).replace(/Once$/,""),w(e,t[0].toLowerCase()+t.slice(1))||w(e,F(t))||w(e,t))}let Wt=null,Gt=null;function Kt(e){const t=Wt;return Wt=e,Gt=e&&e.type.__scopeId||null,t}function Zt(e){Gt=e}function Yt(){Gt=null}function Xt(e,t=Wt,n){if(!t)return e;if(e._n)return e;const i=(...n)=>{i._d&&Bi(-1);const o=Kt(t),s=e(...n);return Kt(o),i._d&&Bi(1),s};return i._n=!0,i._c=!0,i._d=!0,i}function Jt(e){const{type:t,vnode:n,proxy:i,withProxy:o,props:s,propsOptions:[r],slots:a,attrs:l,emit:c,render:u,renderCache:d,data:h,setupState:p,ctx:f,inheritAttrs:g}=e;let m,b;const y=Kt(e);try{if(4&n.shapeFlag){const e=o||i;m=Ki(u.call(e,e,d,s,p,h,f)),b=l}else{const e=t;0,m=Ki(e.length>1?e(s,{attrs:l,slots:a,emit:c}):e(s,null)),b=t.props?l:Qt(l)}}catch(t){Oi.length=0,xt(t,e,1),m=Hi(Ai)}let w=m;if(b&&!1!==g){const e=Object.keys(b),{shapeFlag:t}=w;e.length&&7&t&&(r&&e.some(v)&&(b=en(b,r)),w=Vi(w,b))}return n.dirs&&(w=Vi(w),w.dirs=w.dirs?w.dirs.concat(n.dirs):n.dirs),n.transition&&(w.transition=n.transition),m=w,Kt(y),m}const Qt=e=>{let t;for(const n in e)("class"===n||"style"===n||g(n))&&((t||(t={}))[n]=e[n]);return t},en=(e,t)=>{const n={};for(const i in e)v(i)&&i.slice(9)in t||(n[i]=e[i]);return n};function tn(e,t,n){const i=Object.keys(t);if(i.length!==Object.keys(e).length)return!0;for(let o=0;o<i.length;o++){const s=i[o];if(t[s]!==e[s]&&!qt(n,s))return!0}return!1}function nn(e,t){if(eo){let n=eo.provides;const i=eo.parent&&eo.parent.provides;i===n&&(n=eo.provides=Object.create(i)),n[e]=t}else;}function on(e,t,n=!1){const i=eo||Wt;if(i){const o=null==i.parent?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(o&&e in o)return o[e];if(arguments.length>1)return n&&$(t)?t.call(i.proxy):t}}const sn={};function rn(e,t,n){return an(e,t,n)}function an(e,t,{immediate:n,deep:i,flush:o,onTrack:s,onTrigger:r}=u){const a=eo;let l,c,d=!1,p=!1;if(dt(e)?(l=()=>e.value,d=it(e)):tt(e)?(l=()=>e,i=!0):x(e)?(p=!0,d=e.some((e=>tt(e)||it(e))),l=()=>e.map((e=>dt(e)?e.value:tt(e)?un(e):$(e)?yt(e,a,2):void 0))):l=$(e)?t?()=>yt(e,a,2):()=>{if(!a||!a.isUnmounted)return c&&c(),wt(e,a,3,[f])}:h,t&&i){const e=l;l=()=>un(e())}let f=e=>{c=y.onStop=()=>{yt(e,a,4)}};if(oo)return f=h,t?n&&wt(t,a,3,[l(),p?[]:void 0,f]):l(),h;let g=p?[]:sn;const v=()=>{if(y.active)if(t){const e=y.run();(i||d||(p?e.some(((e,t)=>N(e,g[t]))):N(e,g)))&&(c&&c(),wt(t,a,3,[e,g===sn?void 0:g,f]),g=e)}else y.run()};let m;v.allowRecurse=!!t,m="sync"===o?v:"post"===o?()=>vi(v,a&&a.suspense):()=>function(e){Ft(e,At,St,Ct)}(v);const y=new ie(l,m);return t?n?v():g=y.run():"post"===o?vi(y.run.bind(y),a&&a.suspense):y.run(),()=>{y.stop(),a&&a.scope&&b(a.scope.effects,y)}}function ln(e,t,n){const i=this.proxy,o=R(e)?e.includes(".")?cn(i,e):()=>i[e]:e.bind(i,i);let s;$(t)?s=t:(s=t.handler,n=t);const r=eo;to(this);const a=an(o,s.bind(i),n);return r?to(r):no(),a}function cn(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function un(e,t){if(!A(e)||e.__v_skip)return e;if((t=t||new Set).has(e))return e;if(t.add(e),dt(e))un(e.value,t);else if(x(e))for(let n=0;n<e.length;n++)un(e[n],t);else if(_(e)||k(e))e.forEach((e=>{un(e,t)}));else if(j(e))for(const n in e)un(e[n],t);return e}function dn(e){return $(e)?{setup:e,name:e.name}:e}const hn=e=>!!e.type.__asyncLoader,pn=e=>e.type.__isKeepAlive;function fn(e,t){vn(e,"a",t)}function gn(e,t){vn(e,"da",t)}function vn(e,t,n=eo){const i=e.__wdc||(e.__wdc=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}return e()});if(bn(t,i,n),n){let e=n.parent;for(;e&&e.parent;)pn(e.parent.vnode)&&mn(i,t,n,e),e=e.parent}}function mn(e,t,n,i){const o=bn(t,e,i,!0);Rn((()=>{b(i[t],o)}),n)}function bn(e,t,n=eo,i=!1){if(n){const o=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;ae(),to(n);const o=wt(t,n,e,i);return no(),le(),o});return i?o.unshift(s):o.push(s),s}}const yn=e=>(t,n=eo)=>(!oo||"sp"===e)&&bn(e,t,n),wn=yn("bm"),xn=yn("m"),kn=yn("bu"),_n=yn("u"),$n=yn("bum"),Rn=yn("um"),Sn=yn("sp"),An=yn("rtg"),Cn=yn("rtc");function On(e,t=eo){bn("ec",e,t)}function En(e,t,n,i){const o=e.dirs,s=t&&t.dirs;for(let r=0;r<o.length;r++){const a=o[r];s&&(a.oldValue=s[r].value);let l=a.dir[i];l&&(ae(),wt(l,n,8,[e.el,a,e,t]),le())}}function jn(e,t){return Mn("components",e,!0,t)||e}const zn=Symbol();function Bn(e){return R(e)?Mn("components",e,!1)||e:e||zn}function Mn(e,t,n=!0,i=!1){const o=Wt||eo;if(o){const n=o.type;if("components"===e){const e=function(e){return $(e)&&e.displayName||e.name}(n);if(e&&(e===t||e===T(t)||e===I(T(t))))return n}const s=Pn(o[e]||n[e],t)||Pn(o.appContext[e],t);return!s&&i?n:s}}function Pn(e,t){return e&&(e[t]||e[T(t)]||e[I(T(t))])}function Tn(e,t,n,i){let o;const s=n&&n[i];if(x(e)||R(e)){o=new Array(e.length);for(let n=0,i=e.length;n<i;n++)o[n]=t(e[n],n,void 0,s&&s[n])}else if("number"==typeof e){o=new Array(e);for(let n=0;n<e;n++)o[n]=t(n+1,n,void 0,s&&s[n])}else if(A(e))if(e[Symbol.iterator])o=Array.from(e,((e,n)=>t(e,n,void 0,s&&s[n])));else{const n=Object.keys(e);o=new Array(n.length);for(let i=0,r=n.length;i<r;i++){const r=n[i];o[i]=t(e[r],r,i,s&&s[i])}}else o=[];return n&&(n[i]=o),o}function Dn(e,t,n={},i,o){if(Wt.isCE||Wt.parent&&hn(Wt.parent)&&Wt.parent.isCE)return Hi("slot","default"===t?null:{name:t},i&&i());let s=e[t];s&&s._c&&(s._d=!1),ji();const r=s&&Fn(s(n)),a=Ti(Ri,{key:n.key||`_${t}`},r||(i?i():[]),r&&1===e._?64:-2);return!o&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function Fn(e){return e.some((e=>!Di(e)||e.type!==Ai&&!(e.type===Ri&&!Fn(e.children))))?e:null}const In=e=>e?io(e)?ao(e)||e.proxy:In(e.parent):null,Ln=m(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>In(e.parent),$root:e=>In(e.root),$emit:e=>e.emit,$options:e=>Wn(e),$forceUpdate:e=>e.f||(e.f=()=>Tt(e.update)),$nextTick:e=>e.n||(e.n=Pt.bind(e.proxy)),$watch:e=>ln.bind(e)}),Nn={get({_:e},t){const{ctx:n,setupState:i,data:o,props:s,accessCache:r,type:a,appContext:l}=e;let c;if("$"!==t[0]){const a=r[t];if(void 0!==a)switch(a){case 1:return i[t];case 2:return o[t];case 4:return n[t];case 3:return s[t]}else{if(i!==u&&w(i,t))return r[t]=1,i[t];if(o!==u&&w(o,t))return r[t]=2,o[t];if((c=e.propsOptions[0])&&w(c,t))return r[t]=3,s[t];if(n!==u&&w(n,t))return r[t]=4,n[t];Un&&(r[t]=0)}}const d=Ln[t];let h,p;return d?("$attrs"===t&&ce(e,0,t),d(e)):(h=a.__cssModules)&&(h=h[t])?h:n!==u&&w(n,t)?(r[t]=4,n[t]):(p=l.config.globalProperties,w(p,t)?p[t]:void 0)},set({_:e},t,n){const{data:i,setupState:o,ctx:s}=e;return o!==u&&w(o,t)?(o[t]=n,!0):i!==u&&w(i,t)?(i[t]=n,!0):!w(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(s[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:o,propsOptions:s}},r){let a;return!!n[r]||e!==u&&w(e,r)||t!==u&&w(t,r)||(a=s[0])&&w(a,r)||w(i,r)||w(Ln,r)||w(o.config.globalProperties,r)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:w(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Un=!0;function Hn(e){const t=Wn(e),n=e.proxy,i=e.ctx;Un=!1,t.beforeCreate&&Vn(t.beforeCreate,e,"bc");const{data:o,computed:s,methods:r,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:p,beforeUpdate:f,updated:g,activated:v,deactivated:m,beforeDestroy:b,beforeUnmount:y,destroyed:w,unmounted:k,render:_,renderTracked:R,renderTriggered:S,errorCaptured:C,serverPrefetch:O,expose:E,inheritAttrs:j,components:z,directives:B,filters:M}=t;if(c&&function(e,t,n=h,i=!1){x(e)&&(e=Yn(e));for(const n in e){const o=e[n];let s;s=A(o)?"default"in o?on(o.from||n,o.default,!0):on(o.from||n):on(o),dt(s)&&i?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>s.value,set:e=>s.value=e}):t[n]=s}}(c,i,null,e.appContext.config.unwrapInjectedRef),r)for(const e in r){const t=r[e];$(t)&&(i[e]=t.bind(n))}if(o){const t=o.call(n,n);A(t)&&(e.data=Je(t))}if(Un=!0,s)for(const e in s){const t=s[e],o=$(t)?t.bind(n,n):$(t.get)?t.get.bind(n,n):h,r=!$(t)&&$(t.set)?t.set.bind(n):h,a=lo({get:o,set:r});Object.defineProperty(i,e,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e})}if(a)for(const e in a)qn(a[e],i,n,e);if(l){const e=$(l)?l.call(n):l;Reflect.ownKeys(e).forEach((t=>{nn(t,e[t])}))}function P(e,t){x(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(u&&Vn(u,e,"c"),P(wn,d),P(xn,p),P(kn,f),P(_n,g),P(fn,v),P(gn,m),P(On,C),P(Cn,R),P(An,S),P($n,y),P(Rn,k),P(Sn,O),x(E))if(E.length){const t=e.exposed||(e.exposed={});E.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});_&&e.render===h&&(e.render=_),null!=j&&(e.inheritAttrs=j),z&&(e.components=z),B&&(e.directives=B)}function Vn(e,t,n){wt(x(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function qn(e,t,n,i){const o=i.includes(".")?cn(n,i):()=>n[i];if(R(e)){const n=t[e];$(n)&&rn(o,n)}else if($(e))rn(o,e.bind(n));else if(A(e))if(x(e))e.forEach((e=>qn(e,t,n,i)));else{const i=$(e.handler)?e.handler.bind(n):t[e.handler];$(i)&&rn(o,i,e)}}function Wn(e){const t=e.type,{mixins:n,extends:i}=t,{mixins:o,optionsCache:s,config:{optionMergeStrategies:r}}=e.appContext,a=s.get(t);let l;return a?l=a:o.length||n||i?(l={},o.length&&o.forEach((e=>Gn(l,e,r,!0))),Gn(l,t,r)):l=t,s.set(t,l),l}function Gn(e,t,n,i=!1){const{mixins:o,extends:s}=t;s&&Gn(e,s,n,!0),o&&o.forEach((t=>Gn(e,t,n,!0)));for(const o in t)if(i&&"expose"===o);else{const i=Kn[o]||n&&n[o];e[o]=i?i(e[o],t[o]):t[o]}return e}const Kn={data:Zn,props:Jn,emits:Jn,methods:Jn,computed:Jn,beforeCreate:Xn,created:Xn,beforeMount:Xn,mounted:Xn,beforeUpdate:Xn,updated:Xn,beforeDestroy:Xn,beforeUnmount:Xn,destroyed:Xn,unmounted:Xn,activated:Xn,deactivated:Xn,errorCaptured:Xn,serverPrefetch:Xn,components:Jn,directives:Jn,watch:function(e,t){if(!e)return t;if(!t)return e;const n=m(Object.create(null),e);for(const i in t)n[i]=Xn(e[i],t[i]);return n},provide:Zn,inject:function(e,t){return Jn(Yn(e),Yn(t))}};function Zn(e,t){return t?e?function(){return m($(e)?e.call(this,this):e,$(t)?t.call(this,this):t)}:t:e}function Yn(e){if(x(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Xn(e,t){return e?[...new Set([].concat(e,t))]:t}function Jn(e,t){return e?m(m(Object.create(null),e),t):t}function Qn(e,t,n,i=!1){const o={},s={};H(s,Ii,1),e.propsDefaults=Object.create(null),ei(e,t,o,s);for(const t in e.propsOptions[0])t in o||(o[t]=void 0);n?e.props=i?o:et(o,!1,Re,qe,Ke):e.type.props?e.props=o:e.props=s,e.attrs=s}function ei(e,t,n,i){const[o,s]=e.propsOptions;let r,a=!1;if(t)for(let l in t){if(B(l))continue;const c=t[l];let u;o&&w(o,u=T(l))?s&&s.includes(u)?(r||(r={}))[u]=c:n[u]=c:qt(e.emitsOptions,l)||l in i&&c===i[l]||(i[l]=c,a=!0)}if(s){const t=st(n),i=r||u;for(let r=0;r<s.length;r++){const a=s[r];n[a]=ti(o,t,a,i[a],e,!w(i,a))}}return a}function ti(e,t,n,i,o,s){const r=e[n];if(null!=r){const e=w(r,"default");if(e&&void 0===i){const e=r.default;if(r.type!==Function&&$(e)){const{propsDefaults:s}=o;n in s?i=s[n]:(to(o),i=s[n]=e.call(null,t),no())}else i=e}r[0]&&(s&&!e?i=!1:!r[1]||""!==i&&i!==F(n)||(i=!0))}return i}function ni(e,t,n=!1){const i=t.propsCache,o=i.get(e);if(o)return o;const s=e.props,r={},a=[];let l=!1;if(!$(e)){const i=e=>{l=!0;const[n,i]=ni(e,t,!0);m(r,n),i&&a.push(...i)};!n&&t.mixins.length&&t.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}if(!s&&!l)return i.set(e,d),d;if(x(s))for(let e=0;e<s.length;e++){const t=T(s[e]);ii(t)&&(r[t]=u)}else if(s)for(const e in s){const t=T(e);if(ii(t)){const n=s[e],i=r[t]=x(n)||$(n)?{type:n}:n;if(i){const e=ri(Boolean,i.type),n=ri(String,i.type);i[0]=e>-1,i[1]=n<0||e<n,(e>-1||w(i,"default"))&&a.push(t)}}}const c=[r,a];return i.set(e,c),c}function ii(e){return"$"!==e[0]}function oi(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:null===e?"null":""}function si(e,t){return oi(e)===oi(t)}function ri(e,t){return x(t)?t.findIndex((t=>si(t,e))):$(t)&&si(t,e)?0:-1}const ai=e=>"_"===e[0]||"$stable"===e,li=e=>x(e)?e.map(Ki):[Ki(e)],ci=(e,t,n)=>{if(t._n)return t;const i=Xt(((...e)=>li(t(...e))),n);return i._c=!1,i},ui=(e,t,n)=>{const i=e._ctx;for(const n in e){if(ai(n))continue;const o=e[n];if($(o))t[n]=ci(0,o,i);else if(null!=o){const e=li(o);t[n]=()=>e}}},di=(e,t)=>{const n=li(t);e.slots.default=()=>n};function hi(){return{app:null,config:{isNativeTag:p,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let pi=0;function fi(e,t){return function(n,i=null){$(n)||(n=Object.assign({},n)),null==i||A(i)||(i=null);const o=hi(),s=new Set;let r=!1;const a=o.app={_uid:pi++,_component:n,_props:i,_container:null,_context:o,_instance:null,version:uo,get config(){return o.config},set config(e){},use:(e,...t)=>(s.has(e)||(e&&$(e.install)?(s.add(e),e.install(a,...t)):$(e)&&(s.add(e),e(a,...t))),a),mixin:e=>(o.mixins.includes(e)||o.mixins.push(e),a),component:(e,t)=>t?(o.components[e]=t,a):o.components[e],directive:(e,t)=>t?(o.directives[e]=t,a):o.directives[e],mount(s,l,c){if(!r){const u=Hi(n,i);return u.appContext=o,l&&t?t(u,s):e(u,s,c),r=!0,a._container=s,s.__vue_app__=a,ao(u.component)||u.component.proxy}},unmount(){r&&(e(null,a._container),delete a._container.__vue_app__)},provide:(e,t)=>(o.provides[e]=t,a)};return a}}function gi(e,t,n,i,o=!1){if(x(e))return void e.forEach(((e,s)=>gi(e,t&&(x(t)?t[s]:t),n,i,o)));if(hn(i)&&!o)return;const s=4&i.shapeFlag?ao(i.component)||i.component.proxy:i.el,r=o?null:s,{i:a,r:l}=e,c=t&&t.r,d=a.refs===u?a.refs={}:a.refs,h=a.setupState;if(null!=c&&c!==l&&(R(c)?(d[c]=null,w(h,c)&&(h[c]=null)):dt(c)&&(c.value=null)),$(l))yt(l,a,12,[r,d]);else{const t=R(l),i=dt(l);if(t||i){const i=()=>{if(e.f){const n=t?d[l]:l.value;o?x(n)&&b(n,s):x(n)?n.includes(s)||n.push(s):t?(d[l]=[s],w(h,l)&&(h[l]=d[l])):(l.value=[s],e.k&&(d[e.k]=l.value))}else t?(d[l]=r,w(h,l)&&(h[l]=r)):dt(l)&&(l.value=r,e.k&&(d[e.k]=r))};r?(i.id=-1,vi(i,n)):i()}}}const vi=function(e,t){t&&t.pendingBranch?x(e)?t.effects.push(...e):t.effects.push(e):Ft(e,Et,Ot,jt)};function mi(e){return function(e,t){(q||(q="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{})).__VUE__=!0;const{insert:n,remove:i,patchProp:o,createElement:s,createText:r,createComment:a,setText:l,setElementText:c,parentNode:p,nextSibling:f,setScopeId:g=h,cloneNode:v,insertStaticContent:b}=e,y=(e,t,n,i=null,o=null,s=null,r=!1,a=null,l=!!t.dynamicChildren)=>{if(e===t)return;e&&!Fi(e,t)&&(i=ne(e),X(e,o,s,!0),e=null),-2===t.patchFlag&&(l=!1,t.dynamicChildren=null);const{type:c,ref:u,shapeFlag:d}=t;switch(c){case Si:x(e,t,n,i);break;case Ai:k(e,t,n,i);break;case Ci:null==e&&_(t,n,i,r);break;case Ri:P(e,t,n,i,o,s,r,a,l);break;default:1&d?S(e,t,n,i,o,s,r,a,l):6&d?D(e,t,n,i,o,s,r,a,l):(64&d||128&d)&&c.process(e,t,n,i,o,s,r,a,l,se)}null!=u&&o&&gi(u,e&&e.ref,s,t||e,!t)},x=(e,t,i,o)=>{if(null==e)n(t.el=r(t.children),i,o);else{const n=t.el=e.el;t.children!==e.children&&l(n,t.children)}},k=(e,t,i,o)=>{null==e?n(t.el=a(t.children||""),i,o):t.el=e.el},_=(e,t,n,i)=>{[e.el,e.anchor]=b(e.children,t,n,i,e.el,e.anchor)},$=({el:e,anchor:t},i,o)=>{let s;for(;e&&e!==t;)s=f(e),n(e,i,o),e=s;n(t,i,o)},R=({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=f(e),i(e),e=n;i(t)},S=(e,t,n,i,o,s,r,a,l)=>{r=r||"svg"===t.type,null==e?A(t,n,i,o,s,r,a,l):j(e,t,o,s,r,a,l)},A=(e,t,i,r,a,l,u,d)=>{let h,p;const{type:f,props:g,shapeFlag:m,transition:b,patchFlag:y,dirs:w}=e;if(e.el&&void 0!==v&&-1===y)h=e.el=v(e.el);else{if(h=e.el=s(e.type,l,g&&g.is,g),8&m?c(h,e.children):16&m&&E(e.children,h,null,r,a,l&&"foreignObject"!==f,u,d),w&&En(e,null,r,"created"),g){for(const t in g)"value"===t||B(t)||o(h,t,null,g[t],l,e.children,r,a,te);"value"in g&&o(h,"value",null,g.value),(p=g.onVnodeBeforeMount)&&Xi(p,r,e)}O(h,e,e.scopeId,u,r)}w&&En(e,null,r,"beforeMount");const x=(!a||a&&!a.pendingBranch)&&b&&!b.persisted;x&&b.beforeEnter(h),n(h,t,i),((p=g&&g.onVnodeMounted)||x||w)&&vi((()=>{p&&Xi(p,r,e),x&&b.enter(h),w&&En(e,null,r,"mounted")}),a)},O=(e,t,n,i,o)=>{if(n&&g(e,n),i)for(let t=0;t<i.length;t++)g(e,i[t]);if(o){if(t===o.subTree){const t=o.vnode;O(e,t,t.scopeId,t.slotScopeIds,o.parent)}}},E=(e,t,n,i,o,s,r,a,l=0)=>{for(let c=l;c<e.length;c++){const l=e[c]=a?Zi(e[c]):Ki(e[c]);y(null,l,t,n,i,o,s,r,a)}},j=(e,t,n,i,s,r,a)=>{const l=t.el=e.el;let{patchFlag:d,dynamicChildren:h,dirs:p}=t;d|=16&e.patchFlag;const f=e.props||u,g=t.props||u;let v;n&&bi(n,!1),(v=g.onVnodeBeforeUpdate)&&Xi(v,n,t,e),p&&En(t,e,n,"beforeUpdate"),n&&bi(n,!0);const m=s&&"foreignObject"!==t.type;if(h?z(e.dynamicChildren,h,l,n,i,m,r):a||W(e,t,l,null,n,i,m,r,!1),d>0){if(16&d)M(l,t,f,g,n,i,s);else if(2&d&&f.class!==g.class&&o(l,"class",null,g.class,s),4&d&&o(l,"style",f.style,g.style,s),8&d){const r=t.dynamicProps;for(let t=0;t<r.length;t++){const a=r[t],c=f[a],u=g[a];u===c&&"value"!==a||o(l,a,c,u,s,e.children,n,i,te)}}1&d&&e.children!==t.children&&c(l,t.children)}else a||null!=h||M(l,t,f,g,n,i,s);((v=g.onVnodeUpdated)||p)&&vi((()=>{v&&Xi(v,n,t,e),p&&En(t,e,n,"updated")}),i)},z=(e,t,n,i,o,s,r)=>{for(let a=0;a<t.length;a++){const l=e[a],c=t[a],u=l.el&&(l.type===Ri||!Fi(l,c)||70&l.shapeFlag)?p(l.el):n;y(l,c,u,null,i,o,s,r,!0)}},M=(e,t,n,i,s,r,a)=>{if(n!==i){for(const l in i){if(B(l))continue;const c=i[l],u=n[l];c!==u&&"value"!==l&&o(e,l,u,c,a,t.children,s,r,te)}if(n!==u)for(const l in n)B(l)||l in i||o(e,l,n[l],null,a,t.children,s,r,te);"value"in i&&o(e,"value",n.value,i.value)}},P=(e,t,i,o,s,a,l,c,u)=>{const d=t.el=e?e.el:r(""),h=t.anchor=e?e.anchor:r("");let{patchFlag:p,dynamicChildren:f,slotScopeIds:g}=t;g&&(c=c?c.concat(g):g),null==e?(n(d,i,o),n(h,i,o),E(t.children,i,h,s,a,l,c,u)):p>0&&64&p&&f&&e.dynamicChildren?(z(e.dynamicChildren,f,i,s,a,l,c),(null!=t.key||s&&t===s.subTree)&&yi(e,t,!0)):W(e,t,i,h,s,a,l,c,u)},D=(e,t,n,i,o,s,r,a,l)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?o.ctx.activate(t,n,i,r,l):I(t,n,i,o,s,r,l):L(e,t,l)},I=(e,t,n,i,o,s,r)=>{const a=e.component=function(e,t,n){const i=e.type,o=(t?t.appContext:e.appContext)||Ji,s={uid:Qi++,vnode:e,type:i,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new G(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ni(i,o),emitsOptions:Vt(i,o),emit:null,emitted:null,propsDefaults:u,inheritAttrs:i.inheritAttrs,ctx:u,data:u,props:u,attrs:u,slots:u,refs:u,setupState:u,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};s.ctx={_:s},s.root=t?t.root:s,s.emit=Ht.bind(null,s),e.ce&&e.ce(s);return s}(e,i,o);if(pn(e)&&(a.ctx.renderer=se),function(e,t=!1){oo=t;const{props:n,children:i}=e.vnode,o=io(e);Qn(e,n,o,t),((e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=st(t),H(t,"_",n)):ui(t,e.slots={})}else e.slots={},t&&di(e,t);H(e.slots,Ii,1)})(e,i);const s=o?function(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=rt(new Proxy(e.ctx,Nn));const{setup:i}=n;if(i){const n=e.setupContext=i.length>1?function(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=function(e){return new Proxy(e.attrs,{get:(t,n)=>(ce(e,0,"$attrs"),t[n])})}(e))},slots:e.slots,emit:e.emit,expose:t}}(e):null;to(e),ae();const o=yt(i,e,0,[e.props,n]);if(le(),no(),C(o)){if(o.then(no,no),t)return o.then((n=>{so(e,n,t)})).catch((t=>{xt(t,e,0)}));e.asyncDep=o}else so(e,o,t)}else ro(e,t)}(e,t):void 0;oo=!1}(a),a.asyncDep){if(o&&o.registerDep(a,N),!e.el){const e=a.subTree=Hi(Ai);k(null,e,t,n)}}else N(a,e,t,n,o,s,r)},L=(e,t,n)=>{const i=t.component=e.component;if(function(e,t,n){const{props:i,children:o,component:s}=e,{props:r,children:a,patchFlag:l}=t,c=s.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&l>=0))return!(!o&&!a||a&&a.$stable)||i!==r&&(i?!r||tn(i,r,c):!!r);if(1024&l)return!0;if(16&l)return i?tn(i,r,c):!!r;if(8&l){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(r[n]!==i[n]&&!qt(c,n))return!0}}return!1}(e,t,n)){if(i.asyncDep&&!i.asyncResolved)return void V(i,t,n);i.next=t,function(e){const t=$t.indexOf(e);t>Rt&&$t.splice(t,1)}(i.update),i.update()}else t.el=e.el,i.vnode=t},N=(e,t,n,i,o,s,r)=>{const a=()=>{if(e.isMounted){let t,{next:n,bu:i,u:a,parent:l,vnode:c}=e,u=n;bi(e,!1),n?(n.el=c.el,V(e,n,r)):n=c,i&&U(i),(t=n.props&&n.props.onVnodeBeforeUpdate)&&Xi(t,l,n,c),bi(e,!0);const d=Jt(e),h=e.subTree;e.subTree=d,y(h,d,p(h.el),ne(h),e,o,s),n.el=d.el,null===u&&function({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}(e,d.el),a&&vi(a,o),(t=n.props&&n.props.onVnodeUpdated)&&vi((()=>Xi(t,l,n,c)),o)}else{let r;const{el:a,props:l}=t,{bm:c,m:u,parent:d}=e,h=hn(t);if(bi(e,!1),c&&U(c),!h&&(r=l&&l.onVnodeBeforeMount)&&Xi(r,d,t),bi(e,!0),a&&ue){const n=()=>{e.subTree=Jt(e),ue(a,e.subTree,e,o,null)};h?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{const r=e.subTree=Jt(e);y(null,r,n,i,e,o,s),t.el=r.el}if(u&&vi(u,o),!h&&(r=l&&l.onVnodeMounted)){const e=t;vi((()=>Xi(r,d,e)),o)}(256&t.shapeFlag||d&&hn(d.vnode)&&256&d.vnode.shapeFlag)&&e.a&&vi(e.a,o),e.isMounted=!0,t=n=i=null}},l=e.effect=new ie(a,(()=>Tt(c)),e.scope),c=e.update=()=>l.run();c.id=e.uid,bi(e,!0),c()},V=(e,t,n)=>{t.component=e;const i=e.vnode.props;e.vnode=t,e.next=null,function(e,t,n,i){const{props:o,attrs:s,vnode:{patchFlag:r}}=e,a=st(o),[l]=e.propsOptions;let c=!1;if(!(i||r>0)||16&r){let i;ei(e,t,o,s)&&(c=!0);for(const s in a)t&&(w(t,s)||(i=F(s))!==s&&w(t,i))||(l?!n||void 0===n[s]&&void 0===n[i]||(o[s]=ti(l,a,s,void 0,e,!0)):delete o[s]);if(s!==a)for(const e in s)t&&w(t,e)||(delete s[e],c=!0)}else if(8&r){const n=e.vnode.dynamicProps;for(let i=0;i<n.length;i++){let r=n[i];if(qt(e.emitsOptions,r))continue;const u=t[r];if(l)if(w(s,r))u!==s[r]&&(s[r]=u,c=!0);else{const t=T(r);o[t]=ti(l,a,t,u,e,!1)}else u!==s[r]&&(s[r]=u,c=!0)}}c&&de(e,"set","$attrs")}(e,t.props,i,n),((e,t,n)=>{const{vnode:i,slots:o}=e;let s=!0,r=u;if(32&i.shapeFlag){const e=t._;e?n&&1===e?s=!1:(m(o,t),n||1!==e||delete o._):(s=!t.$stable,ui(t,o)),r=t}else t&&(di(e,t),r={default:1});if(s)for(const e in o)ai(e)||e in r||delete o[e]})(e,t.children,n),ae(),It(void 0,e.update),le()},W=(e,t,n,i,o,s,r,a,l=!1)=>{const u=e&&e.children,d=e?e.shapeFlag:0,h=t.children,{patchFlag:p,shapeFlag:f}=t;if(p>0){if(128&p)return void Z(u,h,n,i,o,s,r,a,l);if(256&p)return void K(u,h,n,i,o,s,r,a,l)}8&f?(16&d&&te(u,o,s),h!==u&&c(n,h)):16&d?16&f?Z(u,h,n,i,o,s,r,a,l):te(u,o,s,!0):(8&d&&c(n,""),16&f&&E(h,n,i,o,s,r,a,l))},K=(e,t,n,i,o,s,r,a,l)=>{t=t||d;const c=(e=e||d).length,u=t.length,h=Math.min(c,u);let p;for(p=0;p<h;p++){const i=t[p]=l?Zi(t[p]):Ki(t[p]);y(e[p],i,n,null,o,s,r,a,l)}c>u?te(e,o,s,!0,!1,h):E(t,n,i,o,s,r,a,l,h)},Z=(e,t,n,i,o,s,r,a,l)=>{let c=0;const u=t.length;let h=e.length-1,p=u-1;for(;c<=h&&c<=p;){const i=e[c],u=t[c]=l?Zi(t[c]):Ki(t[c]);if(!Fi(i,u))break;y(i,u,n,null,o,s,r,a,l),c++}for(;c<=h&&c<=p;){const i=e[h],c=t[p]=l?Zi(t[p]):Ki(t[p]);if(!Fi(i,c))break;y(i,c,n,null,o,s,r,a,l),h--,p--}if(c>h){if(c<=p){const e=p+1,d=e<u?t[e].el:i;for(;c<=p;)y(null,t[c]=l?Zi(t[c]):Ki(t[c]),n,d,o,s,r,a,l),c++}}else if(c>p)for(;c<=h;)X(e[c],o,s,!0),c++;else{const f=c,g=c,v=new Map;for(c=g;c<=p;c++){const e=t[c]=l?Zi(t[c]):Ki(t[c]);null!=e.key&&v.set(e.key,c)}let m,b=0;const w=p-g+1;let x=!1,k=0;const _=new Array(w);for(c=0;c<w;c++)_[c]=0;for(c=f;c<=h;c++){const i=e[c];if(b>=w){X(i,o,s,!0);continue}let u;if(null!=i.key)u=v.get(i.key);else for(m=g;m<=p;m++)if(0===_[m-g]&&Fi(i,t[m])){u=m;break}void 0===u?X(i,o,s,!0):(_[u-g]=c+1,u>=k?k=u:x=!0,y(i,t[u],n,null,o,s,r,a,l),b++)}const $=x?function(e){const t=e.slice(),n=[0];let i,o,s,r,a;const l=e.length;for(i=0;i<l;i++){const l=e[i];if(0!==l){if(o=n[n.length-1],e[o]<l){t[i]=o,n.push(i);continue}for(s=0,r=n.length-1;s<r;)a=s+r>>1,e[n[a]]<l?s=a+1:r=a;l<e[n[s]]&&(s>0&&(t[i]=n[s-1]),n[s]=i)}}s=n.length,r=n[s-1];for(;s-- >0;)n[s]=r,r=t[r];return n}(_):d;for(m=$.length-1,c=w-1;c>=0;c--){const e=g+c,d=t[e],h=e+1<u?t[e+1].el:i;0===_[c]?y(null,d,n,h,o,s,r,a,l):x&&(m<0||c!==$[m]?Y(d,n,h,2):m--)}}},Y=(e,t,i,o,s=null)=>{const{el:r,type:a,transition:l,children:c,shapeFlag:u}=e;if(6&u)return void Y(e.component.subTree,t,i,o);if(128&u)return void e.suspense.move(t,i,o);if(64&u)return void a.move(e,t,i,se);if(a===Ri){n(r,t,i);for(let e=0;e<c.length;e++)Y(c[e],t,i,o);return void n(e.anchor,t,i)}if(a===Ci)return void $(e,t,i);if(2!==o&&1&u&&l)if(0===o)l.beforeEnter(r),n(r,t,i),vi((()=>l.enter(r)),s);else{const{leave:e,delayLeave:o,afterLeave:s}=l,a=()=>n(r,t,i),c=()=>{e(r,(()=>{a(),s&&s()}))};o?o(r,a,c):c()}else n(r,t,i)},X=(e,t,n,i=!1,o=!1)=>{const{type:s,props:r,ref:a,children:l,dynamicChildren:c,shapeFlag:u,patchFlag:d,dirs:h}=e;if(null!=a&&gi(a,null,n,e,!0),256&u)return void t.ctx.deactivate(e);const p=1&u&&h,f=!hn(e);let g;if(f&&(g=r&&r.onVnodeBeforeUnmount)&&Xi(g,t,e),6&u)ee(e.component,n,i);else{if(128&u)return void e.suspense.unmount(n,i);p&&En(e,null,t,"beforeUnmount"),64&u?e.type.remove(e,t,n,o,se,i):c&&(s!==Ri||d>0&&64&d)?te(c,t,n,!1,!0):(s===Ri&&384&d||!o&&16&u)&&te(l,t,n),i&&J(e)}(f&&(g=r&&r.onVnodeUnmounted)||p)&&vi((()=>{g&&Xi(g,t,e),p&&En(e,null,t,"unmounted")}),n)},J=e=>{const{type:t,el:n,anchor:o,transition:s}=e;if(t===Ri)return void Q(n,o);if(t===Ci)return void R(e);const r=()=>{i(n),s&&!s.persisted&&s.afterLeave&&s.afterLeave()};if(1&e.shapeFlag&&s&&!s.persisted){const{leave:t,delayLeave:i}=s,o=()=>t(n,r);i?i(e.el,r,o):o()}else r()},Q=(e,t)=>{let n;for(;e!==t;)n=f(e),i(e),e=n;i(t)},ee=(e,t,n)=>{const{bum:i,scope:o,update:s,subTree:r,um:a}=e;i&&U(i),o.stop(),s&&(s.active=!1,X(r,e,t,n)),a&&vi(a,t),vi((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},te=(e,t,n,i=!1,o=!1,s=0)=>{for(let r=s;r<e.length;r++)X(e[r],t,n,i,o)},ne=e=>6&e.shapeFlag?ne(e.component.subTree):128&e.shapeFlag?e.suspense.next():f(e.anchor||e.el),oe=(e,t,n)=>{null==e?t._vnode&&X(t._vnode,null,null,!0):y(t._vnode||null,e,t,null,null,null,n),Lt(),t._vnode=e},se={p:y,um:X,m:Y,r:J,mt:I,mc:E,pc:W,pbc:z,n:ne,o:e};let re,ue;t&&([re,ue]=t(se));return{render:oe,hydrate:re,createApp:fi(oe,re)}}(e)}function bi({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function yi(e,t,n=!1){const i=e.children,o=t.children;if(x(i)&&x(o))for(let e=0;e<i.length;e++){const t=i[e];let s=o[e];1&s.shapeFlag&&!s.dynamicChildren&&((s.patchFlag<=0||32===s.patchFlag)&&(s=o[e]=Zi(o[e]),s.el=t.el),n||yi(t,s))}}const wi=e=>e&&(e.disabled||""===e.disabled),xi=e=>"undefined"!=typeof SVGElement&&e instanceof SVGElement,ki=(e,t)=>{const n=e&&e.to;if(R(n)){if(t){return t(n)}return null}return n};function _i(e,t,n,{o:{insert:i},m:o},s=2){0===s&&i(e.targetAnchor,t,n);const{el:r,anchor:a,shapeFlag:l,children:c,props:u}=e,d=2===s;if(d&&i(r,t,n),(!d||wi(u))&&16&l)for(let e=0;e<c.length;e++)o(c[e],t,n,2);d&&i(a,t,n)}const $i={__isTeleport:!0,process(e,t,n,i,o,s,r,a,l,c){const{mc:u,pc:d,pbc:h,o:{insert:p,querySelector:f,createText:g,createComment:v}}=c,m=wi(t.props);let{shapeFlag:b,children:y,dynamicChildren:w}=t;if(null==e){const e=t.el=g(""),c=t.anchor=g("");p(e,n,i),p(c,n,i);const d=t.target=ki(t.props,f),h=t.targetAnchor=g("");d&&(p(h,d),r=r||xi(d));const v=(e,t)=>{16&b&&u(y,e,t,o,s,r,a,l)};m?v(n,c):d&&v(d,h)}else{t.el=e.el;const i=t.anchor=e.anchor,u=t.target=e.target,p=t.targetAnchor=e.targetAnchor,g=wi(e.props),v=g?n:u,b=g?i:p;if(r=r||xi(u),w?(h(e.dynamicChildren,w,v,o,s,r,a),yi(e,t,!0)):l||d(e,t,v,b,o,s,r,a,!1),m)g||_i(t,n,i,c,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const e=t.target=ki(t.props,f);e&&_i(t,e,null,c,0)}else g&&_i(t,u,p,c,1)}},remove(e,t,n,i,{um:o,o:{remove:s}},r){const{shapeFlag:a,children:l,anchor:c,targetAnchor:u,target:d,props:h}=e;if(d&&s(u),(r||!wi(h))&&(s(c),16&a))for(let e=0;e<l.length;e++){const i=l[e];o(i,t,n,!0,!!i.dynamicChildren)}},move:_i,hydrate:function(e,t,n,i,o,s,{o:{nextSibling:r,parentNode:a,querySelector:l}},c){const u=t.target=ki(t.props,l);if(u){const l=u._lpa||u.firstChild;if(16&t.shapeFlag)if(wi(t.props))t.anchor=c(r(e),t,a(e),n,i,o,s),t.targetAnchor=l;else{t.anchor=r(e);let a=l;for(;a;)if(a=r(a),a&&8===a.nodeType&&"teleport anchor"===a.data){t.targetAnchor=a,u._lpa=t.targetAnchor&&r(t.targetAnchor);break}c(l,t,u,n,i,o,s)}}return t.anchor&&r(t.anchor)}},Ri=Symbol(void 0),Si=Symbol(void 0),Ai=Symbol(void 0),Ci=Symbol(void 0),Oi=[];let Ei=null;function ji(e=!1){Oi.push(Ei=e?null:[])}let zi=1;function Bi(e){zi+=e}function Mi(e){return e.dynamicChildren=zi>0?Ei||d:null,Oi.pop(),Ei=Oi[Oi.length-1]||null,zi>0&&Ei&&Ei.push(e),e}function Pi(e,t,n,i,o,s){return Mi(Ui(e,t,n,i,o,s,!0))}function Ti(e,t,n,i,o){return Mi(Hi(e,t,n,i,o,!0))}function Di(e){return!!e&&!0===e.__v_isVNode}function Fi(e,t){return e.type===t.type&&e.key===t.key}const Ii="__vInternal",Li=({key:e})=>null!=e?e:null,Ni=({ref:e,ref_key:t,ref_for:n})=>null!=e?R(e)||dt(e)||$(e)?{i:Wt,r:e,k:t,f:!!n}:e:null;function Ui(e,t=null,n=null,i=0,o=null,s=(e===Ri?0:1),r=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Li(t),ref:t&&Ni(t),scopeId:Gt,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:o,dynamicChildren:null,appContext:null};return a?(Yi(l,n),128&s&&e.normalize(l)):n&&(l.shapeFlag|=R(n)?8:16),zi>0&&!r&&Ei&&(l.patchFlag>0||6&s)&&32!==l.patchFlag&&Ei.push(l),l}const Hi=function(e,t=null,n=null,o=0,s=null,r=!1){e&&e!==zn||(e=Ai);if(Di(e)){const i=Vi(e,t,!0);return n&&Yi(i,n),zi>0&&!r&&Ei&&(6&i.shapeFlag?Ei[Ei.indexOf(e)]=i:Ei.push(i)),i.patchFlag|=-2,i}l=e,$(l)&&"__vccOpts"in l&&(e=e.__vccOpts);var l;if(t){t=function(e){return e?ot(e)||Ii in e?m({},e):e:null}(t);let{class:e,style:n}=t;e&&!R(e)&&(t.class=a(e)),A(n)&&(ot(n)&&!x(n)&&(n=m({},n)),t.style=i(n))}const c=R(e)?1:(e=>e.__isSuspense)(e)?128:(e=>e.__isTeleport)(e)?64:A(e)?4:$(e)?2:0;return Ui(e,t,n,o,s,c,r,!0)};function Vi(e,t,n=!1){const{props:o,ref:s,patchFlag:r,children:l}=e,c=t?function(...e){const t={};for(let n=0;n<e.length;n++){const o=e[n];for(const e in o)if("class"===e)t.class!==o.class&&(t.class=a([t.class,o.class]));else if("style"===e)t.style=i([t.style,o.style]);else if(g(e)){const n=t[e],i=o[e];!i||n===i||x(n)&&n.includes(i)||(t[e]=n?[].concat(n,i):i)}else""!==e&&(t[e]=o[e])}return t}(o||{},t):o;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Li(c),ref:t&&t.ref?n&&s?x(s)?s.concat(Ni(t)):[s,Ni(t)]:Ni(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ri?-1===r?16:16|r:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Vi(e.ssContent),ssFallback:e.ssFallback&&Vi(e.ssFallback),el:e.el,anchor:e.anchor}}function qi(e=" ",t=0){return Hi(Si,null,e,t)}function Wi(e,t){const n=Hi(Ci,null,e);return n.staticCount=t,n}function Gi(e="",t=!1){return t?(ji(),Ti(Ai,null,e)):Hi(Ai,null,e)}function Ki(e){return null==e||"boolean"==typeof e?Hi(Ai):x(e)?Hi(Ri,null,e.slice()):"object"==typeof e?Zi(e):Hi(Si,null,String(e))}function Zi(e){return null===e.el||e.memo?e:Vi(e)}function Yi(e,t){let n=0;const{shapeFlag:i}=e;if(null==t)t=null;else if(x(t))n=16;else if("object"==typeof t){if(65&i){const n=t.default;return void(n&&(n._c&&(n._d=!1),Yi(e,n()),n._c&&(n._d=!0)))}{n=32;const i=t._;i||Ii in t?3===i&&Wt&&(1===Wt.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=Wt}}else $(t)?(t={default:t,_ctx:Wt},n=32):(t=String(t),64&i?(n=16,t=[qi(t)]):n=8);e.children=t,e.shapeFlag|=n}function Xi(e,t,n,i=null){wt(e,t,7,[n,i])}const Ji=hi();let Qi=0;let eo=null;const to=e=>{eo=e,e.scope.on()},no=()=>{eo&&eo.scope.off(),eo=null};function io(e){return 4&e.vnode.shapeFlag}let oo=!1;function so(e,t,n){$(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:A(t)&&(e.setupState=mt(t)),ro(e,n)}function ro(e,t,n){const i=e.type;e.render||(e.render=i.render||h),to(e),ae(),Hn(e),le(),no()}function ao(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(mt(rt(e.exposed)),{get:(t,n)=>n in t?t[n]:n in Ln?Ln[n](e):void 0}))}const lo=(e,t)=>function(e,t,n=!1){let i,o;const s=$(e);return s?(i=e,o=h):(i=e.get,o=e.set),new bt(i,o,s||!o,n)}(e,0,oo);function co(e,t,n){const i=arguments.length;return 2===i?A(t)&&!x(t)?Di(t)?Hi(e,null,[t]):Hi(e,t):Hi(e,null,t):(i>3?n=Array.prototype.slice.call(arguments,2):3===i&&Di(n)&&(n=[n]),Hi(e,t,n))}const uo="3.2.36",ho="undefined"!=typeof document?document:null,po=ho&&ho.createElement("template"),fo={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,i)=>{const o=t?ho.createElementNS("http://www.w3.org/2000/svg",e):ho.createElement(e,n?{is:n}:void 0);return"select"===e&&i&&null!=i.multiple&&o.setAttribute("multiple",i.multiple),o},createText:e=>ho.createTextNode(e),createComment:e=>ho.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ho.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,i,o,s){const r=n?n.previousSibling:t.lastChild;if(o&&(o===s||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),o!==s&&(o=o.nextSibling););else{po.innerHTML=i?`<svg>${e}</svg>`:e;const o=po.content;if(i){const e=o.firstChild;for(;e.firstChild;)o.appendChild(e.firstChild);o.removeChild(e)}t.insertBefore(o,n)}return[r?r.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};const go=/\s*!important$/;function vo(e,t,n){if(x(n))n.forEach((n=>vo(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=function(e,t){const n=bo[t];if(n)return n;let i=T(t);if("filter"!==i&&i in e)return bo[t]=i;i=I(i);for(let n=0;n<mo.length;n++){const o=mo[n]+i;if(o in e)return bo[t]=o}return t}(e,t);go.test(n)?e.setProperty(F(i),n.replace(go,""),"important"):e[i]=n}}const mo=["Webkit","Moz","ms"],bo={};const yo="http://www.w3.org/1999/xlink";const[wo,xo]=(()=>{let e=Date.now,t=!1;if("undefined"!=typeof window){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let ko=0;const _o=Promise.resolve(),$o=()=>{ko=0};function Ro(e,t,n,i,o=null){const s=e._vei||(e._vei={}),r=s[t];if(i&&r)r.value=i;else{const[n,a]=function(e){let t;if(So.test(e)){let n;for(t={};n=e.match(So);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[F(e.slice(2)),t]}(t);if(i){const r=s[t]=function(e,t){const n=e=>{const i=e.timeStamp||wo();(xo||i>=n.attached-1)&&wt(function(e,t){if(x(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}(e,n.value),t,5,[e])};return n.value=e,n.attached=(()=>ko||(_o.then($o),ko=wo()))(),n}(i,o);!function(e,t,n,i){e.addEventListener(t,n,i)}(e,n,r,a)}else r&&(!function(e,t,n,i){e.removeEventListener(t,n,i)}(e,n,r,a),s[t]=void 0)}}const So=/(?:Once|Passive|Capture)$/;const Ao=/^on[a-z]/;const Co=m({patchProp:(e,i,o,s,r=!1,a,l,c,u)=>{"class"===i?function(e,t,n){const i=e._vtc;i&&(t=(t?[t,...i]:[...i]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}(e,s,r):"style"===i?function(e,t,n){const i=e.style,o=R(n);if(n&&!o){for(const e in n)vo(i,e,n[e]);if(t&&!R(t))for(const e in t)null==n[e]&&vo(i,e,"")}else{const s=i.display;o?t!==n&&(i.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(i.display=s)}}(e,o,s):g(i)?v(i)||Ro(e,i,0,s,l):("."===i[0]?(i=i.slice(1),1):"^"===i[0]?(i=i.slice(1),0):function(e,t,n,i){if(i)return"innerHTML"===t||"textContent"===t||!!(t in e&&Ao.test(t)&&$(n));if("spellcheck"===t||"draggable"===t||"translate"===t)return!1;if("form"===t)return!1;if("list"===t&&"INPUT"===e.tagName)return!1;if("type"===t&&"TEXTAREA"===e.tagName)return!1;if(Ao.test(t)&&R(n))return!1;return t in e}(e,i,s,r))?function(e,t,i,o,s,r,a){if("innerHTML"===t||"textContent"===t)return o&&a(o,s,r),void(e[t]=null==i?"":i);if("value"===t&&"PROGRESS"!==e.tagName&&!e.tagName.includes("-")){e._value=i;const n=null==i?"":i;return e.value===n&&"OPTION"!==e.tagName||(e.value=n),void(null==i&&e.removeAttribute(t))}let l=!1;if(""===i||null==i){const o=typeof e[t];"boolean"===o?i=n(i):null==i&&"string"===o?(i="",l=!0):"number"===o&&(i=0,l=!0)}try{e[t]=i}catch(e){}l&&e.removeAttribute(t)}(e,i,s,a,l,c,u):("true-value"===i?e._trueValue=s:"false-value"===i&&(e._falseValue=s),function(e,i,o,s,r){if(s&&i.startsWith("xlink:"))null==o?e.removeAttributeNS(yo,i.slice(6,i.length)):e.setAttributeNS(yo,i,o);else{const s=t(i);null==o||s&&!n(o)?e.removeAttribute(i):e.setAttribute(i,s?"":o)}}(e,i,s,r))}},fo);let Oo;const Eo=(...e)=>{const t=(Oo||(Oo=mi(Co))).createApp(...e),{mount:n}=t;return t.mount=e=>{const i=function(e){if(R(e)){return document.querySelector(e)}return e}
/*!
  * vue-router v4.0.15
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */(e);if(!i)return;const o=t._component;$(o)||o.render||o.template||(o.template=i.innerHTML),i.innerHTML="";const s=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),s},t};const jo="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag,zo=e=>jo?Symbol(e):"_vr_"+e,Bo=zo("rvlm"),Mo=zo("rvd"),Po=zo("r"),To=zo("rl"),Do=zo("rvl"),Fo="undefined"!=typeof window;const Io=Object.assign;function Lo(e,t){const n={};for(const i in t){const o=t[i];n[i]=Array.isArray(o)?o.map(e):e(o)}return n}const No=()=>{},Uo=/\/$/;function Ho(e,t,n="/"){let i,o={},s="",r="";const a=t.indexOf("?"),l=t.indexOf("#",a>-1?a:0);return a>-1&&(i=t.slice(0,a),s=t.slice(a+1,l>-1?l:t.length),o=e(s)),l>-1&&(i=i||t.slice(0,l),r=t.slice(l,t.length)),i=function(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),i=e.split("/");let o,s,r=n.length-1;for(o=0;o<i.length;o++)if(s=i[o],1!==r&&"."!==s){if(".."!==s)break;r--}return n.slice(0,r).join("/")+"/"+i.slice(o-(o===i.length?1:0)).join("/")}(null!=i?i:t,n),{fullPath:i+(s&&"?")+s+r,path:i,query:o,hash:r}}function Vo(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function qo(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Wo(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Go(e[n],t[n]))return!1;return!0}function Go(e,t){return Array.isArray(e)?Ko(e,t):Array.isArray(t)?Ko(t,e):e===t}function Ko(e,t){return Array.isArray(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}var Zo,Yo,Xo,Jo;function Qo(e){if(!e)if(Fo){const t=document.querySelector("base");e=(e=t&&t.getAttribute("href")||"/").replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),e.replace(Uo,"")}(Yo=Zo||(Zo={})).pop="pop",Yo.push="push",(Jo=Xo||(Xo={})).back="back",Jo.forward="forward",Jo.unknown="";const es=/^[^#]+#/;function ts(e,t){return e.replace(es,"#")+t}const ns=()=>({left:window.pageXOffset,top:window.pageYOffset});function is(e){let t;if("el"in e){const n=e.el,i="string"==typeof n&&n.startsWith("#"),o="string"==typeof n?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=function(e,t){const n=document.documentElement.getBoundingClientRect(),i=e.getBoundingClientRect();return{behavior:t.behavior,left:i.left-n.left-(t.left||0),top:i.top-n.top-(t.top||0)}}(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function os(e,t){return(history.state?history.state.position-t:-1)+e}const ss=new Map;function rs(e,t){const{pathname:n,search:i,hash:o}=t,s=e.indexOf("#");if(s>-1){let t=o.includes(e.slice(s))?e.slice(s).length:1,n=o.slice(t);return"/"!==n[0]&&(n="/"+n),Vo(n,"")}return Vo(n,e)+i+o}function as(e,t,n,i=!1,o=!1){return{back:e,current:t,forward:n,replaced:i,position:window.history.length,scroll:o?ns():null}}function ls(e){const{history:t,location:n}=window,i={value:rs(e,n)},o={value:t.state};function s(i,s,r){const a=e.indexOf("#"),l=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+i:location.protocol+"//"+location.host+e+i;try{t[r?"replaceState":"pushState"](s,"",l),o.value=s}catch(e){console.error(e),n[r?"replace":"assign"](l)}}return o.value||s(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:i,state:o,push:function(e,n){const r=Io({},o.value,t.state,{forward:e,scroll:ns()});s(r.current,r,!0),s(e,Io({},as(i.value,e,null),{position:r.position+1},n),!1),i.value=e},replace:function(e,n){s(e,Io({},t.state,as(o.value.back,e,o.value.forward,!0),n,{position:o.value.position}),!0),i.value=e}}}function cs(e){const t=ls(e=Qo(e)),n=function(e,t,n,i){let o=[],s=[],r=null;const a=({state:s})=>{const a=rs(e,location),l=n.value,c=t.value;let u=0;if(s){if(n.value=a,t.value=s,r&&r===l)return void(r=null);u=c?s.position-c.position:0}else i(a);o.forEach((e=>{e(n.value,l,{delta:u,type:Zo.pop,direction:u?u>0?Xo.forward:Xo.back:Xo.unknown})}))};function l(){const{history:e}=window;e.state&&e.replaceState(Io({},e.state,{scroll:ns()}),"")}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:function(){r=n.value},listen:function(e){o.push(e);const t=()=>{const t=o.indexOf(e);t>-1&&o.splice(t,1)};return s.push(t),t},destroy:function(){for(const e of s)e();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}}}(e,t.state,t.location,t.replace);const i=Io({location:"",base:e,go:function(e,t=!0){t||n.pauseListeners(),history.go(e)},createHref:ts.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function us(e){return"string"==typeof e||"symbol"==typeof e}const ds={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},hs=zo("nf");var ps,fs;function gs(e,t){return Io(new Error,{type:e,[hs]:!0},t)}function vs(e,t){return e instanceof Error&&hs in e&&(null==t||!!(e.type&t))}(fs=ps||(ps={}))[fs.aborted=4]="aborted",fs[fs.cancelled=8]="cancelled",fs[fs.duplicated=16]="duplicated";const ms={sensitive:!1,strict:!1,start:!0,end:!0},bs=/[.+*?^${}()[\]/\\]/g;function ys(e,t){let n=0;for(;n<e.length&&n<t.length;){const i=t[n]-e[n];if(i)return i;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function ws(e,t){let n=0;const i=e.score,o=t.score;for(;n<i.length&&n<o.length;){const e=ys(i[n],o[n]);if(e)return e;n++}return o.length-i.length}const xs={type:0,value:""},ks=/[a-zA-Z0-9_]/;function _s(e,t,n){const i=function(e,t){const n=Io({},ms,t),i=[];let o=n.start?"^":"";const s=[];for(const t of e){const e=t.length?[]:[90];n.strict&&!t.length&&(o+="/");for(let i=0;i<t.length;i++){const r=t[i];let a=40+(n.sensitive?.25:0);if(0===r.type)i||(o+="/"),o+=r.value.replace(bs,"\\$&"),a+=40;else if(1===r.type){const{value:e,repeatable:n,optional:l,regexp:c}=r;s.push({name:e,repeatable:n,optional:l});const u=c||"[^/]+?";if("[^/]+?"!==u){a+=10;try{new RegExp(`(${u})`)}catch(t){throw new Error(`Invalid custom RegExp for param "${e}" (${u}): `+t.message)}}let d=n?`((?:${u})(?:/(?:${u}))*)`:`(${u})`;i||(d=l&&t.length<2?`(?:/${d})`:"/"+d),l&&(d+="?"),o+=d,a+=20,l&&(a+=-8),n&&(a+=-20),".*"===u&&(a+=-50)}e.push(a)}i.push(e)}if(n.strict&&n.end){const e=i.length-1;i[e][i[e].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const r=new RegExp(o,n.sensitive?"":"i");return{re:r,score:i,keys:s,parse:function(e){const t=e.match(r),n={};if(!t)return null;for(let e=1;e<t.length;e++){const i=t[e]||"",o=s[e-1];n[o.name]=i&&o.repeatable?i.split("/"):i}return n},stringify:function(t){let n="",i=!1;for(const o of e){i&&n.endsWith("/")||(n+="/"),i=!1;for(const s of o)if(0===s.type)n+=s.value;else if(1===s.type){const{value:r,repeatable:a,optional:l}=s,c=r in t?t[r]:"";if(Array.isArray(c)&&!a)throw new Error(`Provided param "${r}" is an array but it is not repeatable (* or + modifiers)`);const u=Array.isArray(c)?c.join("/"):c;if(!u){if(!l)throw new Error(`Missing required param "${r}"`);o.length<2&&e.length>1&&(n.endsWith("/")?n=n.slice(0,-1):i=!0)}n+=u}}return n}}}(function(e){if(!e)return[[]];if("/"===e)return[[xs]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${c}": ${e}`)}let n=0,i=n;const o=[];let s;function r(){s&&o.push(s),s=[]}let a,l=0,c="",u="";function d(){c&&(0===n?s.push({type:0,value:c}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),c="")}function h(){c+=a}for(;l<e.length;)if(a=e[l++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(c&&d(),r()):":"===a?(d(),n=1):h();break;case 4:h(),n=i;break;case 1:"("===a?n=2:ks.test(a)?h():(d(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&l--);break;case 2:")"===a?"\\"==u[u.length-1]?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:d(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&l--,u="";break;default:t("Unknown state")}else i=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${c}"`),d(),r(),o}(e.path),n),o=Io(i,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function $s(e,t){const n=[],i=new Map;function o(e,n,i){const a=!i,l=function(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Rs(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}(e);l.aliasOf=i&&i.record;const c=Cs(t,e),u=[l];if("alias"in e){const t="string"==typeof e.alias?[e.alias]:e.alias;for(const e of t)u.push(Io({},l,{components:i?i.record.components:l.components,path:e,aliasOf:i?i.record:l}))}let d,h;for(const t of u){const{path:u}=t;if(n&&"/"!==u[0]){const e=n.record.path,i="/"===e[e.length-1]?"":"/";t.path=n.record.path+(u&&i+u)}if(d=_s(t,n,c),i?i.alias.push(d):(h=h||d,h!==d&&h.alias.push(d),a&&e.name&&!Ss(d)&&s(e.name)),"children"in l){const e=l.children;for(let t=0;t<e.length;t++)o(e[t],d,i&&i.children[t])}i=i||d,r(d)}return h?()=>{s(h)}:No}function s(e){if(us(e)){const t=i.get(e);t&&(i.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(s),t.alias.forEach(s))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&i.delete(e.record.name),e.children.forEach(s),e.alias.forEach(s))}}function r(e){let t=0;for(;t<n.length&&ws(e,n[t])>=0&&(e.record.path!==n[t].record.path||!Os(e,n[t]));)t++;n.splice(t,0,e),e.record.name&&!Ss(e)&&i.set(e.record.name,e)}return t=Cs({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>o(e))),{addRoute:o,resolve:function(e,t){let o,s,r,a={};if("name"in e&&e.name){if(o=i.get(e.name),!o)throw gs(1,{location:e});r=o.record.name,a=Io(function(e,t){const n={};for(const i of t)i in e&&(n[i]=e[i]);return n}(t.params,o.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params),s=o.stringify(a)}else if("path"in e)s=e.path,o=n.find((e=>e.re.test(s))),o&&(a=o.parse(s),r=o.record.name);else{if(o=t.name?i.get(t.name):n.find((e=>e.re.test(t.path))),!o)throw gs(1,{location:e,currentLocation:t});r=o.record.name,a=Io({},t.params,e.params),s=o.stringify(a)}const l=[];let c=o;for(;c;)l.unshift(c.record),c=c.parent;return{name:r,path:s,params:a,matched:l,meta:As(l)}},removeRoute:s,getRoutes:function(){return n},getRecordMatcher:function(e){return i.get(e)}}}function Rs(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const i in e.components)t[i]="boolean"==typeof n?n:n[i];return t}function Ss(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function As(e){return e.reduce(((e,t)=>Io(e,t.meta)),{})}function Cs(e,t){const n={};for(const i in e)n[i]=i in t?t[i]:e[i];return n}function Os(e,t){return t.children.some((t=>t===e||Os(e,t)))}const Es=/#/g,js=/&/g,zs=/\//g,Bs=/=/g,Ms=/\?/g,Ps=/\+/g,Ts=/%5B/g,Ds=/%5D/g,Fs=/%5E/g,Is=/%60/g,Ls=/%7B/g,Ns=/%7C/g,Us=/%7D/g,Hs=/%20/g;function Vs(e){return encodeURI(""+e).replace(Ns,"|").replace(Ts,"[").replace(Ds,"]")}function qs(e){return Vs(e).replace(Ps,"%2B").replace(Hs,"+").replace(Es,"%23").replace(js,"%26").replace(Is,"`").replace(Ls,"{").replace(Us,"}").replace(Fs,"^")}function Ws(e){return null==e?"":function(e){return Vs(e).replace(Es,"%23").replace(Ms,"%3F")}(e).replace(zs,"%2F")}function Gs(e){try{return decodeURIComponent(""+e)}catch(e){}return""+e}function Ks(e){const t={};if(""===e||"?"===e)return t;const n=("?"===e[0]?e.slice(1):e).split("&");for(let e=0;e<n.length;++e){const i=n[e].replace(Ps," "),o=i.indexOf("="),s=Gs(o<0?i:i.slice(0,o)),r=o<0?null:Gs(i.slice(o+1));if(s in t){let e=t[s];Array.isArray(e)||(e=t[s]=[e]),e.push(r)}else t[s]=r}return t}function Zs(e){let t="";for(let n in e){const i=e[n];if(n=qs(n).replace(Bs,"%3D"),null==i){void 0!==i&&(t+=(t.length?"&":"")+n);continue}(Array.isArray(i)?i.map((e=>e&&qs(e))):[i&&qs(i)]).forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function Ys(e){const t={};for(const n in e){const i=e[n];void 0!==i&&(t[n]=Array.isArray(i)?i.map((e=>null==e?null:""+e)):null==i?i:""+i)}return t}function Xs(){let e=[];return{add:function(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}},list:()=>e,reset:function(){e=[]}}}function Js(e,t,n,i,o){const s=i&&(i.enterCallbacks[o]=i.enterCallbacks[o]||[]);return()=>new Promise(((r,a)=>{const l=e=>{var l;!1===e?a(gs(4,{from:n,to:t})):e instanceof Error?a(e):"string"==typeof(l=e)||l&&"object"==typeof l?a(gs(2,{from:t,to:e})):(s&&i.enterCallbacks[o]===s&&"function"==typeof e&&s.push(e),r())},c=e.call(i&&i.instances[o],t,n,l);let u=Promise.resolve(c);e.length<3&&(u=u.then(l)),u.catch((e=>a(e)))}))}function Qs(e,t,n,i){const o=[];for(const r of e)for(const e in r.components){let a=r.components[e];if("beforeRouteEnter"===t||r.instances[e])if("object"==typeof(s=a)||"displayName"in s||"props"in s||"__vccOpts"in s){const s=(a.__vccOpts||a)[t];s&&o.push(Js(s,n,i,r,e))}else{let s=a();o.push((()=>s.then((o=>{if(!o)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${r.path}"`));const s=(a=o).__esModule||jo&&"Module"===a[Symbol.toStringTag]?o.default:o;var a;r.components[e]=s;const l=(s.__vccOpts||s)[t];return l&&Js(l,n,i,r,e)()}))))}}var s;return o}function er(e){const t=on(Po),n=on(To),i=lo((()=>t.resolve(gt(e.to)))),o=lo((()=>{const{matched:e}=i.value,{length:t}=e,o=e[t-1],s=n.matched;if(!o||!s.length)return-1;const r=s.findIndex(qo.bind(null,o));if(r>-1)return r;const a=nr(e[t-2]);return t>1&&nr(o)===a&&s[s.length-1].path!==a?s.findIndex(qo.bind(null,e[t-2])):r})),s=lo((()=>o.value>-1&&function(e,t){for(const n in t){const i=t[n],o=e[n];if("string"==typeof i){if(i!==o)return!1}else if(!Array.isArray(o)||o.length!==i.length||i.some(((e,t)=>e!==o[t])))return!1}return!0}(n.params,i.value.params))),r=lo((()=>o.value>-1&&o.value===n.matched.length-1&&Wo(n.params,i.value.params)));return{route:i,href:lo((()=>i.value.href)),isActive:s,isExactActive:r,navigate:function(n={}){return function(e){if(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;if(void 0!==e.button&&0!==e.button)return;if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}e.preventDefault&&e.preventDefault();return!0}(n)?t[gt(e.replace)?"replace":"push"](gt(e.to)).catch(No):Promise.resolve()}}}const tr=dn({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:er,setup(e,{slots:t}){const n=Je(er(e)),{options:i}=on(Po),o=lo((()=>({[ir(e.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[ir(e.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const i=t.default&&t.default(n);return e.custom?i:co("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},i)}}});function nr(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const ir=(e,t,n)=>null!=e?e:null!=t?t:n;function or(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const sr=dn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const i=on(Do),o=lo((()=>e.route||i.value)),s=on(Mo,0),r=lo((()=>o.value.matched[s]));nn(Mo,s+1),nn(Bo,r),nn(Do,o);const a=ht();return rn((()=>[a.value,r.value,e.name]),(([e,t,n],[i,o,s])=>{t&&(t.instances[n]=e,o&&o!==t&&e&&e===i&&(t.leaveGuards.size||(t.leaveGuards=o.leaveGuards),t.updateGuards.size||(t.updateGuards=o.updateGuards))),!e||!t||o&&qo(t,o)&&i||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const i=o.value,s=r.value,l=s&&s.components[e.name],c=e.name;if(!l)return or(n.default,{Component:l,route:i});const u=s.props[e.name],d=u?!0===u?i.params:"function"==typeof u?u(i):u:null,h=co(l,Io({},d,t,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(s.instances[c]=null)},ref:a}));return or(n.default,{Component:h,route:i})||h}}});function rr(e){return e.reduce(((e,t)=>e.then((()=>t()))),Promise.resolve())}var ar={setup(){const e=on("asideVisible");return{toggleMenu:()=>{e.value=!e.value}}}};const lr=e=>(Zt("data-v-7f6656b2"),e=e(),Yt(),e),cr={class:"topNav"},ur=lr((()=>Ui("svg",{class:"icon"},[Ui("use",{"xlink:href":"#icon-shengdantubiao-25"})],-1))),dr={class:"menu"},hr=qi("文档"),pr=[lr((()=>Ui("svg",{class:"icon2"},[Ui("use",{"xlink:href":"#icon-daohang"})],-1)))];ar.render=function(e,t,n,i,o,s){const r=jn("router-link");return ji(),Pi("div",cr,[Hi(r,{to:"/",class:"logo"},{default:Xt((()=>[ur])),_:1}),Ui("ul",dr,[Ui("li",null,[Hi(r,{to:"/doc"},{default:Xt((()=>[hr])),_:1})])]),Ui("span",{class:"toggleAside",onClick:t[0]||(t[0]=(...e)=>i.toggleMenu&&i.toggleMenu(...e))},pr)])},ar.__scopeId="data-v-7f6656b2";var fr={components:{TopNav:ar}};const gr=e=>(Zt("data-v-31b87b5e"),e=e(),Yt(),e),vr={class:"topNavAndBanner"},mr={class:"banner"},br=gr((()=>Ui("h1",null,"雪花UI",-1))),yr=gr((()=>Ui("h2",null,"一个厉害的UI框架",-1))),wr={class:"actions"},xr=gr((()=>Ui("a",{href:"https://github.com/Fighter28/snow-vite"},"Github",-1))),kr=qi("开始"),_r=Wi('<div class="features" data-v-31b87b5e><ul data-v-31b87b5e><li data-v-31b87b5e><svg class="icon" data-v-31b87b5e><use xlink:href="#icon-Vue" data-v-31b87b5e></use></svg><h3 data-v-31b87b5e>基于Vue3</h3><p data-v-31b87b5e>使用了Vue3 Composition API</p></li><li data-v-31b87b5e><svg class="icon" data-v-31b87b5e><use xlink:href="#icon-ts" data-v-31b87b5e></use></svg><h3 data-v-31b87b5e>基于TypeScript书写</h3></li><li data-v-31b87b5e><svg class="icon" data-v-31b87b5e><use xlink:href="#icon-lights" data-v-31b87b5e></use></svg><h3 data-v-31b87b5e>代码易读</h3><p data-v-31b87b5e>每个组件代码极其简洁</p></li></ul></div>',1);fr.render=function(e,t,n,i,o,s){const r=jn("TopNav"),a=jn("router-link");return ji(),Pi("div",null,[Ui("div",vr,[Hi(r),Ui("div",mr,[br,yr,Ui("p",wr,[xr,Hi(a,{to:"/doc"},{default:Xt((()=>[kr])),_:1})])])]),_r])},fr.__scopeId="data-v-31b87b5e";var $r={components:{TopNav:ar},setup(){const e=ht(!1);return{asideVisible:on("asideVisible"),show:e}}};const Rr=e=>(Zt("data-v-c03c8ac0"),e=e(),Yt(),e),Sr={class:"layout"},Ar={class:"content"},Cr={key:0},Or=Rr((()=>Ui("h2",null,"文档",-1))),Er=qi("介绍"),jr=qi("安装"),zr=qi("开始使用"),Br={class:"list"},Mr=qi(" 组件列表 "),Pr=[Rr((()=>Ui("use",{"xlink:href":"#icon-jiantou"},null,-1)))],Tr={key:0,class:"show-list"},Dr=qi("Switch组件"),Fr=qi("Button组件"),Ir=qi("Dialog组件"),Lr=qi("Tabs组件");$r.render=function(e,t,n,i,o,s){const r=jn("TopNav"),a=jn("router-link"),l=jn("router-view");return ji(),Pi("div",Sr,[Hi(r,{class:"nav"}),Ui("div",Ar,[i.asideVisible?(ji(),Pi("aside",Cr,[Or,Ui("ol",null,[Ui("li",null,[Hi(a,{to:"/doc/intro"},{default:Xt((()=>[Er])),_:1})]),Ui("li",null,[Hi(a,{to:"/doc/install"},{default:Xt((()=>[jr])),_:1})]),Ui("li",null,[Hi(a,{to:"/doc/get-started"},{default:Xt((()=>[zr])),_:1})])]),Ui("h2",Br,[Mr,(ji(),Pi("svg",{class:"icon6",onClick:t[0]||(t[0]=e=>i.show=!i.show)},Pr))]),i.show?(ji(),Pi("ol",Tr,[Ui("li",null,[Hi(a,{to:"/doc/switch"},{default:Xt((()=>[Dr])),_:1})]),Ui("li",null,[Hi(a,{to:"/doc/button"},{default:Xt((()=>[Fr])),_:1})]),Ui("li",null,[Hi(a,{to:"/doc/dialog"},{default:Xt((()=>[Ir])),_:1})]),Ui("li",null,[Hi(a,{to:"/doc/tabs"},{default:Xt((()=>[Lr])),_:1})])])):Gi("v-if",!0)])):Gi("v-if",!0),Ui("main",null,[Hi(l)])])])},$r.__scopeId="data-v-c03c8ac0";var Nr={props:{value:Boolean},setup:(e,t)=>({toggle:()=>{t.emit("update:value",!e.value)}})};const Ur=[Ui("span",null,null,-1)];Nr.render=function(e,t,n,i,o,s){return ji(),Pi("div",null,[Ui("button",{class:a(["snow-switch",{"snow-checked":n.value}]),onClick:t[0]||(t[0]=(...e)=>i.toggle&&i.toggle(...e))},Ur,2)])};var Hr={components:{Switch:Nr},setup:()=>({bool:ht(!1)})};function Vr(e){e.__sourceCode="<template>\n  <Switch v-model:value=\"bool\"/>\n</template>\n\n<script lang=\"ts\">\nimport Switch from '../lib/Switch.vue';\nimport {ref} from 'vue';\n\nexport default {\n  components: {Switch},\n  setup() {\n    const bool = ref(false);\n    return {bool};\n  }\n};\n<\/script>",e.__sourceCodeTitle=" 常规用法 "}Vr(Hr),Hr.render=function(e,t,n,i,o,s){const r=jn("Switch");return ji(),Ti(r,{value:i.bool,"onUpdate:value":t[0]||(t[0]=e=>i.bool=e)},null,8,["value"])};var qr={components:{Switch:Nr},setup:()=>({bool:ht(!1)})};function Wr(e){e.__sourceCode="<template>\n  <Switch v-model:value=\"bool\" disabled/>\n</template>\n\n<script lang=\"ts\">\nimport Switch from '../lib/Switch.vue';\nimport {ref} from 'vue';\n\nexport default {\n  components: {Switch},\n  setup() {\n    const bool = ref(false);\n    return {bool};\n  }\n};\n<\/script>",e.__sourceCodeTitle=" 支持disabled "}Wr(qr),qr.render=function(e,t,n,i,o,s){const r=jn("Switch");return ji(),Ti(r,{value:i.bool,"onUpdate:value":t[0]||(t[0]=e=>i.bool=e),disabled:""},null,8,["value"])};var Gr={props:{theme:{type:String,default:"button"},size:{type:String,default:"normal"},level:{type:String,default:"normal"},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},setup(e){const{size:t,theme:n,level:i}=e;return{classes:lo((()=>({[`snow-theme-${n}`]:n,[`snow-size-${t}`]:t,[`snow-level-${i}`]:i})))}}};const Kr=["disabled"],Zr={key:0,class:"snow-loadingIndicator"};Gr.render=function(e,t,n,i,o,s){return ji(),Pi("button",{class:a(["snow-button",i.classes]),disabled:n.disabled},[n.loading?(ji(),Pi("span",Zr)):Gi("v-if",!0),Dn(e.$slots,"default")],10,Kr)};var Yr,Xr,Jr,Qr="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};Yr=function(e){var t=function(e){var t=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,n=0,i={},o={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(t){return t instanceof s?new s(t.type,e(t.content),t.alias):Array.isArray(t)?t.map(e):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function e(t,n){var i,s;switch(n=n||{},o.util.type(t)){case"Object":if(s=o.util.objId(t),n[s])return n[s];for(var r in i={},n[s]=i,t)t.hasOwnProperty(r)&&(i[r]=e(t[r],n));return i;case"Array":return s=o.util.objId(t),n[s]?n[s]:(i=[],n[s]=i,t.forEach((function(t,o){i[o]=e(t,n)})),i);default:return t}},getLanguage:function(e){for(;e;){var n=t.exec(e.className);if(n)return n[1].toLowerCase();e=e.parentElement}return"none"},setLanguage:function(e,n){e.className=e.className.replace(RegExp(t,"gi"),""),e.classList.add("language-"+n)},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(i){var e=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(i.stack)||[])[1];if(e){var t=document.getElementsByTagName("script");for(var n in t)if(t[n].src==e)return t[n]}return null}},isActive:function(e,t,n){for(var i="no-"+t;e;){var o=e.classList;if(o.contains(t))return!0;if(o.contains(i))return!1;e=e.parentElement}return!!n}},languages:{plain:i,plaintext:i,text:i,txt:i,extend:function(e,t){var n=o.util.clone(o.languages[e]);for(var i in t)n[i]=t[i];return n},insertBefore:function(e,t,n,i){var s=(i=i||o.languages)[e],r={};for(var a in s)if(s.hasOwnProperty(a)){if(a==t)for(var l in n)n.hasOwnProperty(l)&&(r[l]=n[l]);n.hasOwnProperty(a)||(r[a]=s[a])}var c=i[e];return i[e]=r,o.languages.DFS(o.languages,(function(t,n){n===c&&t!=e&&(this[t]=r)})),r},DFS:function e(t,n,i,s){s=s||{};var r=o.util.objId;for(var a in t)if(t.hasOwnProperty(a)){n.call(t,a,t[a],i||a);var l=t[a],c=o.util.type(l);"Object"!==c||s[r(l)]?"Array"!==c||s[r(l)]||(s[r(l)]=!0,e(l,n,a,s)):(s[r(l)]=!0,e(l,n,null,s))}}},plugins:{},highlightAll:function(e,t){o.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var i={callback:n,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};o.hooks.run("before-highlightall",i),i.elements=Array.prototype.slice.apply(i.container.querySelectorAll(i.selector)),o.hooks.run("before-all-elements-highlight",i);for(var s,r=0;s=i.elements[r++];)o.highlightElement(s,!0===t,i.callback)},highlightElement:function(t,n,i){var s=o.util.getLanguage(t),r=o.languages[s];o.util.setLanguage(t,s);var a=t.parentElement;a&&"pre"===a.nodeName.toLowerCase()&&o.util.setLanguage(a,s);var l={element:t,language:s,grammar:r,code:t.textContent};function c(e){l.highlightedCode=e,o.hooks.run("before-insert",l),l.element.innerHTML=l.highlightedCode,o.hooks.run("after-highlight",l),o.hooks.run("complete",l),i&&i.call(l.element)}if(o.hooks.run("before-sanity-check",l),(a=l.element.parentElement)&&"pre"===a.nodeName.toLowerCase()&&!a.hasAttribute("tabindex")&&a.setAttribute("tabindex","0"),!l.code)return o.hooks.run("complete",l),void(i&&i.call(l.element));if(o.hooks.run("before-highlight",l),l.grammar)if(n&&e.Worker){var u=new Worker(o.filename);u.onmessage=function(e){c(e.data)},u.postMessage(JSON.stringify({language:l.language,code:l.code,immediateClose:!0}))}else c(o.highlight(l.code,l.grammar,l.language));else c(o.util.encode(l.code))},highlight:function(e,t,n){var i={code:e,grammar:t,language:n};if(o.hooks.run("before-tokenize",i),!i.grammar)throw new Error('The language "'+i.language+'" has no grammar.');return i.tokens=o.tokenize(i.code,i.grammar),o.hooks.run("after-tokenize",i),s.stringify(o.util.encode(i.tokens),i.language)},tokenize:function(e,t){var n=t.rest;if(n){for(var i in n)t[i]=n[i];delete t.rest}var o=new l;return c(o,o.head,e),a(e,o,t,o.head,0),function(e){for(var t=[],n=e.head.next;n!==e.tail;)t.push(n.value),n=n.next;return t}(o)},hooks:{all:{},add:function(e,t){var n=o.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=o.hooks.all[e];if(n&&n.length)for(var i,s=0;i=n[s++];)i(t)}},Token:s};function s(e,t,n,i){this.type=e,this.content=t,this.alias=n,this.length=0|(i||"").length}function r(e,t,n,i){e.lastIndex=t;var o=e.exec(n);if(o&&i&&o[1]){var s=o[1].length;o.index+=s,o[0]=o[0].slice(s)}return o}function a(e,t,n,i,l,d){for(var h in n)if(n.hasOwnProperty(h)&&n[h]){var p=n[h];p=Array.isArray(p)?p:[p];for(var f=0;f<p.length;++f){if(d&&d.cause==h+","+f)return;var g=p[f],v=g.inside,m=!!g.lookbehind,b=!!g.greedy,y=g.alias;if(b&&!g.pattern.global){var w=g.pattern.toString().match(/[imsuy]*$/)[0];g.pattern=RegExp(g.pattern.source,w+"g")}for(var x=g.pattern||g,k=i.next,_=l;k!==t.tail&&!(d&&_>=d.reach);_+=k.value.length,k=k.next){var $=k.value;if(t.length>e.length)return;if(!($ instanceof s)){var R,S=1;if(b){if(!(R=r(x,_,e,m))||R.index>=e.length)break;var A=R.index,C=R.index+R[0].length,O=_;for(O+=k.value.length;A>=O;)O+=(k=k.next).value.length;if(_=O-=k.value.length,k.value instanceof s)continue;for(var E=k;E!==t.tail&&(O<C||"string"==typeof E.value);E=E.next)S++,O+=E.value.length;S--,$=e.slice(_,O),R.index-=_}else if(!(R=r(x,0,$,m)))continue;A=R.index;var j=R[0],z=$.slice(0,A),B=$.slice(A+j.length),M=_+$.length;d&&M>d.reach&&(d.reach=M);var P=k.prev;if(z&&(P=c(t,P,z),_+=z.length),u(t,P,S),k=c(t,P,new s(h,v?o.tokenize(j,v):j,y,j)),B&&c(t,k,B),S>1){var T={cause:h+","+f,reach:M};a(e,t,n,k.prev,_,T),d&&T.reach>d.reach&&(d.reach=T.reach)}}}}}}function l(){var e={value:null,prev:null,next:null},t={value:null,prev:e,next:null};e.next=t,this.head=e,this.tail=t,this.length=0}function c(e,t,n){var i=t.next,o={value:n,prev:t,next:i};return t.next=o,i.prev=o,e.length++,o}function u(e,t,n){for(var i=t.next,o=0;o<n&&i!==e.tail;o++)i=i.next;t.next=i,i.prev=t,e.length-=o}if(e.Prism=o,s.stringify=function e(t,n){if("string"==typeof t)return t;if(Array.isArray(t)){var i="";return t.forEach((function(t){i+=e(t,n)})),i}var s={type:t.type,content:e(t.content,n),tag:"span",classes:["token",t.type],attributes:{},language:n},r=t.alias;r&&(Array.isArray(r)?Array.prototype.push.apply(s.classes,r):s.classes.push(r)),o.hooks.run("wrap",s);var a="";for(var l in s.attributes)a+=" "+l+'="'+(s.attributes[l]||"").replace(/"/g,"&quot;")+'"';return"<"+s.tag+' class="'+s.classes.join(" ")+'"'+a+">"+s.content+"</"+s.tag+">"},!e.document)return e.addEventListener?(o.disableWorkerMessageHandler||e.addEventListener("message",(function(t){var n=JSON.parse(t.data),i=n.language,s=n.code,r=n.immediateClose;e.postMessage(o.highlight(s,o.languages[i],i)),r&&e.close()}),!1),o):o;var d=o.util.currentScript();function h(){o.manual||o.highlightAll()}if(d&&(o.filename=d.src,d.hasAttribute("data-manual")&&(o.manual=!0)),!o.manual){var p=document.readyState;"loading"===p||"interactive"===p&&d&&d.defer?document.addEventListener("DOMContentLoaded",h):window.requestAnimationFrame?window.requestAnimationFrame(h):window.setTimeout(h,16)}return o}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});
/**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   */e.exports&&(e.exports=t),void 0!==Qr&&(Qr.Prism=t),t.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},t.languages.markup.tag.inside["attr-value"].inside.entity=t.languages.markup.entity,t.languages.markup.doctype.inside["internal-subset"].inside=t.languages.markup,t.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))})),Object.defineProperty(t.languages.markup.tag,"addInlined",{value:function(e,n){var i={};i["language-"+n]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:t.languages[n]},i.cdata=/^<!\[CDATA\[|\]\]>$/i;var o={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:i}};o["language-"+n]={pattern:/[\s\S]+/,inside:t.languages[n]};var s={};s[e]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,(function(){return e})),"i"),lookbehind:!0,greedy:!0,inside:o},t.languages.insertBefore("markup","cdata",s)}}),Object.defineProperty(t.languages.markup.tag,"addAttribute",{value:function(e,n){t.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+e+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[n,"language-"+n],inside:t.languages[n]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),t.languages.html=t.languages.markup,t.languages.mathml=t.languages.markup,t.languages.svg=t.languages.markup,t.languages.xml=t.languages.extend("markup",{}),t.languages.ssml=t.languages.xml,t.languages.atom=t.languages.xml,t.languages.rss=t.languages.xml,function(e){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),n.tag.addAttribute("style","css"))}(t),t.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},t.languages.javascript=t.languages.extend("clike",{"class-name":[t.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),t.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,t.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:t.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:t.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:t.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:t.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:t.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),t.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:t.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),t.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),t.languages.markup&&(t.languages.markup.tag.addInlined("script","javascript"),t.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),t.languages.js=t.languages.javascript,function(){if(void 0!==t&&"undefined"!=typeof document){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},n="data-src-status",i="loading",o="loaded",s='pre[data-src]:not([data-src-status="loaded"]):not([data-src-status="loading"])';t.hooks.add("before-highlightall",(function(e){e.selector+=", "+s})),t.hooks.add("before-sanity-check",(function(r){var a=r.element;if(a.matches(s)){r.code="",a.setAttribute(n,i);var l=a.appendChild(document.createElement("CODE"));l.textContent="Loading…";var c=a.getAttribute("data-src"),u=r.language;if("none"===u){var d=(/\.(\w+)$/.exec(c)||[,"none"])[1];u=e[d]||d}t.util.setLanguage(l,u),t.util.setLanguage(a,u);var h=t.plugins.autoloader;h&&h.loadLanguages(u),function(e,t,n){var i=new XMLHttpRequest;i.open("GET",e,!0),i.onreadystatechange=function(){4==i.readyState&&(i.status<400&&i.responseText?t(i.responseText):i.status>=400?n("✖ Error "+i.status+" while fetching file: "+i.statusText):n("✖ Error: File does not exist or is empty"))},i.send(null)}(c,(function(e){a.setAttribute(n,o);var i=function(e){var t=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(e||"");if(t){var n=Number(t[1]),i=t[2],o=t[3];return i?o?[n,Number(o)]:[n,void 0]:[n,n]}}(a.getAttribute("data-range"));if(i){var s=e.split(/\r\n?|\n/g),r=i[0],c=null==i[1]?s.length:i[1];r<0&&(r+=s.length),r=Math.max(0,Math.min(r-1,s.length)),c<0&&(c+=s.length),c=Math.max(0,Math.min(c,s.length)),e=s.slice(r,c).join("\n"),a.hasAttribute("data-start")||a.setAttribute("data-start",String(r+1))}l.textContent=e,t.highlightElement(l)}),(function(e){a.setAttribute(n,"failed"),l.textContent=e}))}})),t.plugins.fileHighlight={highlight:function(e){for(var n,i=(e||document).querySelectorAll(s),o=0;n=i[o++];)t.highlightElement(n)}};var r=!1;t.fileHighlight=function(){r||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),r=!0),t.plugins.fileHighlight.highlight.apply(this,arguments)}}}()},Yr(Jr={path:Xr,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==t&&Jr.path)}},Jr.exports),Jr.exports;const ea=window.Prism;var ta={components:{Button:Gr},props:{component:Object},setup(e){const t=lo((()=>ea.highlight(e.component.__sourceCode,ea.languages.html,"html"))),n=ht(!1);return{Prism:ea,html:t,codeVisible:n}}};const na={class:"demo"},ia={class:"demo-component"},oa={class:"demo-actions"},sa=qi("查看代码"),ra={class:"demo-code"},aa=["innerHTML"];ta.render=function(e,t,n,i,o,s){const r=jn("Button");return ji(),Pi("div",na,[Ui("h1",null,l(n.component.__sourceCodeTitle),1),Ui("div",ia,[(ji(),Ti(Bn(n.component)))]),Ui("div",oa,[Hi(r,{onClick:t[0]||(t[0]=e=>i.codeVisible=!i.codeVisible)},{default:Xt((()=>[sa])),_:1})]),Ui("div",ra,[i.codeVisible?(ji(),Pi("pre",{key:0,class:"language-html",innerHTML:i.html},null,8,aa)):Gi("v-if",!0)])])};var la={components:{Demo:ta},setup:()=>({bool:ht(!1),Switch1Demo:Hr,Switch2Demo:qr})};const ca=Ui("h1",null,"Switch 组件示例",-1);la.render=function(e,t,n,i,o,s){const r=jn("Demo");return ji(),Pi(Ri,null,[ca,Hi(r,{component:i.Switch1Demo},null,8,["component"]),Hi(r,{component:i.Switch2Demo},null,8,["component"])],64)};
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ua=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,da=Symbol(),ha=new Map;class pa{constructor(e,t){if(this._$cssResult$=!0,t!==da)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let e=ha.get(this.cssText);return ua&&void 0===e&&(ha.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const fa=(e,...t)=>{const n=1===e.length?e[0]:t.reduce(((t,n,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[i+1]),e[0]);return new pa(n,da)},ga=ua?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return(e=>new pa("string"==typeof e?e:e+"",da))(t)})(e):e
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var va;const ma=window.trustedTypes,ba=ma?ma.emptyScript:"",ya=window.reactiveElementPolyfillSupport,wa={toAttribute(e,t){switch(t){case Boolean:e=e?ba:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=null!==e;break;case Number:n=null===e?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch(e){n=null}}return n}},xa=(e,t)=>t!==e&&(t==t||e==e),ka={attribute:!0,type:String,converter:wa,reflect:!1,hasChanged:xa};class _a extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var t;null!==(t=this.l)&&void 0!==t||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,n)=>{const i=this._$Eh(n,t);void 0!==i&&(this._$Eu.set(i,n),e.push(i))})),e}static createProperty(e,t=ka){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const n="symbol"==typeof e?Symbol():"__"+e,i=this.getPropertyDescriptor(e,n,t);void 0!==i&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(i){const o=this[e];this[t]=i,this.requestUpdate(e,o,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||ka}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of t)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const e of n)t.unshift(ga(e))}else void 0!==e&&t.push(ga(e));return t}static _$Eh(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}o(){var e;this._$Ep=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(e=this.constructor.l)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,n;(null!==(t=this._$Eg)&&void 0!==t?t:this._$Eg=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(n=e.hostConnected)||void 0===n||n.call(e))}removeController(e){var t;null===(t=this._$Eg)||void 0===t||t.splice(this._$Eg.indexOf(e)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Et.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e;const t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return n=t,i=this.constructor.elementStyles,ua?n.adoptedStyleSheets=i.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):i.forEach((e=>{const t=document.createElement("style"),i=window.litNonce;void 0!==i&&t.setAttribute("nonce",i),t.textContent=e.cssText,n.appendChild(t)})),t;var n,i}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$Eg)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$Eg)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ES(e,t,n=ka){var i,o;const s=this.constructor._$Eh(e,n);if(void 0!==s&&!0===n.reflect){const r=(null!==(o=null===(i=n.converter)||void 0===i?void 0:i.toAttribute)&&void 0!==o?o:wa.toAttribute)(t,n.type);this._$Ei=e,null==r?this.removeAttribute(s):this.setAttribute(s,r),this._$Ei=null}}_$AK(e,t){var n,i,o;const s=this.constructor,r=s._$Eu.get(e);if(void 0!==r&&this._$Ei!==r){const e=s.getPropertyOptions(r),a=e.converter,l=null!==(o=null!==(i=null===(n=a)||void 0===n?void 0:n.fromAttribute)&&void 0!==i?i:"function"==typeof a?a:null)&&void 0!==o?o:wa.fromAttribute;this._$Ei=r,this[r]=l(t,e.type),this._$Ei=null}}requestUpdate(e,t,n){let i=!0;void 0!==e&&(((n=n||this.constructor.getPropertyOptions(e)).hasChanged||xa)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===n.reflect&&this._$Ei!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,n))):i=!1),!this.isUpdatePending&&i&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((e,t)=>this[t]=e)),this._$Et=void 0);let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),null===(e=this._$Eg)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(n)):this._$EU()}catch(e){throw t=!1,this._$EU(),e}t&&this._$AE(n)}willUpdate(e){}_$AE(e){var t;null===(t=this._$Eg)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$ES(t,this[t],e))),this._$EC=void 0),this._$EU()}updated(e){}firstUpdated(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var $a;_a.finalized=!0,_a.elementProperties=new Map,_a.elementStyles=[],_a.shadowRootOptions={mode:"open"},null==ya||ya({ReactiveElement:_a}),(null!==(va=globalThis.reactiveElementVersions)&&void 0!==va?va:globalThis.reactiveElementVersions=[]).push("1.3.2");const Ra=globalThis.trustedTypes,Sa=Ra?Ra.createPolicy("lit-html",{createHTML:e=>e}):void 0,Aa=`lit$${(Math.random()+"").slice(9)}$`,Ca="?"+Aa,Oa=`<${Ca}>`,Ea=document,ja=(e="")=>Ea.createComment(e),za=e=>null===e||"object"!=typeof e&&"function"!=typeof e,Ba=Array.isArray,Ma=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Pa=/-->/g,Ta=/>/g,Da=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,Fa=/'/g,Ia=/"/g,La=/^(?:script|style|textarea|title)$/i,Na=(Wa=1,(e,...t)=>({_$litType$:Wa,strings:e,values:t})),Ua=Symbol.for("lit-noChange"),Ha=Symbol.for("lit-nothing"),Va=new WeakMap,qa=Ea.createTreeWalker(Ea,129,null,!1);var Wa;class Ga{constructor({strings:e,_$litType$:t},n){let i;this.parts=[];let o=0,s=0;const r=e.length-1,a=this.parts,[l,c]=((e,t)=>{const n=e.length-1,i=[];let o,s=2===t?"<svg>":"",r=Ma;for(let t=0;t<n;t++){const n=e[t];let a,l,c=-1,u=0;for(;u<n.length&&(r.lastIndex=u,l=r.exec(n),null!==l);)u=r.lastIndex,r===Ma?"!--"===l[1]?r=Pa:void 0!==l[1]?r=Ta:void 0!==l[2]?(La.test(l[2])&&(o=RegExp("</"+l[2],"g")),r=Da):void 0!==l[3]&&(r=Da):r===Da?">"===l[0]?(r=null!=o?o:Ma,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?Da:'"'===l[3]?Ia:Fa):r===Ia||r===Fa?r=Da:r===Pa||r===Ta?r=Ma:(r=Da,o=void 0);const d=r===Da&&e[t+1].startsWith("/>")?" ":"";s+=r===Ma?n+Oa:c>=0?(i.push(a),n.slice(0,c)+"$lit$"+n.slice(c)+Aa+d):n+Aa+(-2===c?(i.push(void 0),t):d)}const a=s+(e[n]||"<?>")+(2===t?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==Sa?Sa.createHTML(a):a,i]})(e,t);if(this.el=Ga.createElement(l,n),qa.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(i=qa.nextNode())&&a.length<r;){if(1===i.nodeType){if(i.hasAttributes()){const e=[];for(const t of i.getAttributeNames())if(t.endsWith("$lit$")||t.startsWith(Aa)){const n=c[s++];if(e.push(t),void 0!==n){const e=i.getAttribute(n.toLowerCase()+"$lit$").split(Aa),t=/([.?@])?(.*)/.exec(n);a.push({type:1,index:o,name:t[2],strings:e,ctor:"."===t[1]?Ja:"?"===t[1]?el:"@"===t[1]?tl:Xa})}else a.push({type:6,index:o})}for(const t of e)i.removeAttribute(t)}if(La.test(i.tagName)){const e=i.textContent.split(Aa),t=e.length-1;if(t>0){i.textContent=Ra?Ra.emptyScript:"";for(let n=0;n<t;n++)i.append(e[n],ja()),qa.nextNode(),a.push({type:2,index:++o});i.append(e[t],ja())}}}else if(8===i.nodeType)if(i.data===Ca)a.push({type:2,index:o});else{let e=-1;for(;-1!==(e=i.data.indexOf(Aa,e+1));)a.push({type:7,index:o}),e+=Aa.length-1}o++}}static createElement(e,t){const n=Ea.createElement("template");return n.innerHTML=e,n}}function Ka(e,t,n=e,i){var o,s,r,a;if(t===Ua)return t;let l=void 0!==i?null===(o=n._$Cl)||void 0===o?void 0:o[i]:n._$Cu;const c=za(t)?void 0:t._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(s=null==l?void 0:l._$AO)||void 0===s||s.call(l,!1),void 0===c?l=void 0:(l=new c(e),l._$AT(e,n,i)),void 0!==i?(null!==(r=(a=n)._$Cl)&&void 0!==r?r:a._$Cl=[])[i]=l:n._$Cu=l),void 0!==l&&(t=Ka(e,l._$AS(e,t.values),l,i)),t}class Za{constructor(e,t){this.v=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(e){var t;const{el:{content:n},parts:i}=this._$AD,o=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:Ea).importNode(n,!0);qa.currentNode=o;let s=qa.nextNode(),r=0,a=0,l=i[0];for(;void 0!==l;){if(r===l.index){let t;2===l.type?t=new Ya(s,s.nextSibling,this,e):1===l.type?t=new l.ctor(s,l.name,l.strings,this,e):6===l.type&&(t=new nl(s,this,e)),this.v.push(t),l=i[++a]}r!==(null==l?void 0:l.index)&&(s=qa.nextNode(),r++)}return o}m(e){let t=0;for(const n of this.v)void 0!==n&&(void 0!==n.strings?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class Ya{constructor(e,t,n,i){var o;this.type=2,this._$AH=Ha,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=i,this._$Cg=null===(o=null==i?void 0:i.isConnected)||void 0===o||o}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Ka(this,e,t),za(e)?e===Ha||null==e||""===e?(this._$AH!==Ha&&this._$AR(),this._$AH=Ha):e!==this._$AH&&e!==Ua&&this.$(e):void 0!==e._$litType$?this.T(e):void 0!==e.nodeType?this.k(e):(e=>{var t;return Ba(e)||"function"==typeof(null===(t=e)||void 0===t?void 0:t[Symbol.iterator])})(e)?this.S(e):this.$(e)}M(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.M(e))}$(e){this._$AH!==Ha&&za(this._$AH)?this._$AA.nextSibling.data=e:this.k(Ea.createTextNode(e)),this._$AH=e}T(e){var t;const{values:n,_$litType$:i}=e,o="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=Ga.createElement(i.h,this.options)),i);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===o)this._$AH.m(n);else{const e=new Za(o,this),t=e.p(this.options);e.m(n),this.k(t),this._$AH=e}}_$AC(e){let t=Va.get(e.strings);return void 0===t&&Va.set(e.strings,t=new Ga(e)),t}S(e){Ba(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,i=0;for(const o of e)i===t.length?t.push(n=new Ya(this.M(ja()),this.M(ja()),this,this.options)):n=t[i],n._$AI(o),i++;i<t.length&&(this._$AR(n&&n._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var n;for(null===(n=this._$AP)||void 0===n||n.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cg=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class Xa{constructor(e,t,n,i,o){this.type=1,this._$AH=Ha,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=o,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=Ha}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,i){const o=this.strings;let s=!1;if(void 0===o)e=Ka(this,e,t,0),s=!za(e)||e!==this._$AH&&e!==Ua,s&&(this._$AH=e);else{const i=e;let r,a;for(e=o[0],r=0;r<o.length-1;r++)a=Ka(this,i[n+r],t,r),a===Ua&&(a=this._$AH[r]),s||(s=!za(a)||a!==this._$AH[r]),a===Ha?e=Ha:e!==Ha&&(e+=(null!=a?a:"")+o[r+1]),this._$AH[r]=a}s&&!i&&this.C(e)}C(e){e===Ha?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class Ja extends Xa{constructor(){super(...arguments),this.type=3}C(e){this.element[this.name]=e===Ha?void 0:e}}const Qa=Ra?Ra.emptyScript:"";class el extends Xa{constructor(){super(...arguments),this.type=4}C(e){e&&e!==Ha?this.element.setAttribute(this.name,Qa):this.element.removeAttribute(this.name)}}class tl extends Xa{constructor(e,t,n,i,o){super(e,t,n,i,o),this.type=5}_$AI(e,t=this){var n;if((e=null!==(n=Ka(this,e,t,0))&&void 0!==n?n:Ha)===Ua)return;const i=this._$AH,o=e===Ha&&i!==Ha||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==Ha&&(i===Ha||o);o&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;"function"==typeof this._$AH?this._$AH.call(null!==(n=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==n?n:this.element,e):this._$AH.handleEvent(e)}}class nl{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Ka(this,e)}}const il=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var ol,sl;null==il||il(Ga,Ya),(null!==($a=globalThis.litHtmlVersions)&&void 0!==$a?$a:globalThis.litHtmlVersions=[]).push("2.2.5");class rl extends _a{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const n=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=n.firstChild),n}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=((e,t,n)=>{var i,o;const s=null!==(i=null==n?void 0:n.renderBefore)&&void 0!==i?i:t;let r=s._$litPart$;if(void 0===r){const e=null!==(o=null==n?void 0:n.renderBefore)&&void 0!==o?o:null;s._$litPart$=r=new Ya(t.insertBefore(ja(),e),e,void 0,null!=n?n:{})}return r._$AI(e),r})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Dt)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Dt)||void 0===e||e.setConnected(!1)}render(){return Ua}}rl.finalized=!0,rl._$litElement$=!0,null===(ol=globalThis.litElementHydrateSupport)||void 0===ol||ol.call(globalThis,{LitElement:rl});const al=globalThis.litElementPolyfillSupport;null==al||al({LitElement:rl}),(null!==(sl=globalThis.litElementVersions)&&void 0!==sl?sl:globalThis.litElementVersions=[]).push("3.2.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ll=e=>t=>{return"function"==typeof t?(n=e,i=t,window.customElements.define(n,i),i):((e,t)=>{const{kind:n,elements:i}=t;return{kind:n,elements:i,finisher(t){window.customElements.define(e,t)}}})(e,t);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var n,i},cl=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(n){n.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(n){n.createProperty(t.key,e)}};function ul(e){return(t,n)=>{return void 0!==n?(i=e,o=n,void t.constructor.createProperty(o,i)):cl(e,t);var i,o}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function dl(e,t){return(({finisher:e,descriptor:t})=>(n,i)=>{var o;if(void 0===i){const i=null!==(o=n.originalKey)&&void 0!==o?o:n.key,s=null!=t?{kind:"method",placement:"prototype",key:i,descriptor:t(n.key)}:{...n,key:i};return null!=e&&(s.finisher=function(t){e(t,i)}),s}{const o=n.constructor;void 0!==t&&Object.defineProperty(n,i,t(i)),null==e||e(o,i)}})({descriptor:n=>{const i={get(){var t,n;return null!==(n=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e))&&void 0!==n?n:null},enumerable:!0,configurable:!0};if(t){const t="symbol"==typeof n?Symbol():"__"+n;i.get=function(){var n,i;return void 0===this[t]&&(this[t]=null!==(i=null===(n=this.renderRoot)||void 0===n?void 0:n.querySelector(e))&&void 0!==i?i:null),this[t]}}return i}})}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var hl;null===(hl=window.HTMLSlotElement)||void 0===hl||hl.prototype.assignedElements;const pl=fa`
:host {
  opacity: 0;
}
:host(.wired-rendered) {
  opacity: 1;
}
#overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}
svg {
  display: block;
}
path {
  stroke: currentColor;
  stroke-width: 0.7;
  fill: transparent;
}
.hidden {
  display: none !important;
}
`;class fl extends rl{constructor(){super(...arguments),this.lastSize=[0,0],this.seed=Math.floor(Math.random()*2**31)}updated(e){this.wiredRender()}wiredRender(e=!1){if(this.svg){const t=this.canvasSize();if(!e&&t[0]===this.lastSize[0]&&t[1]===this.lastSize[1])return;for(;this.svg.hasChildNodes();)this.svg.removeChild(this.svg.lastChild);this.svg.setAttribute("width",`${t[0]}`),this.svg.setAttribute("height",`${t[1]}`),this.draw(this.svg,t),this.lastSize=t,this.classList.add("wired-rendered")}}fire(e,t){gl(this,e,t)}}function gl(e,t,n){e.dispatchEvent(new CustomEvent(t,{composed:!0,bubbles:!0,detail:n}))}function vl(e,t,n){if(e&&e.length){const[i,o]=t,s=Math.PI/180*n,r=Math.cos(s),a=Math.sin(s);e.forEach((e=>{const[t,n]=e;e[0]=(t-i)*r-(n-o)*a+i,e[1]=(t-i)*a+(n-o)*r+o}))}}function ml(e){const t=e[0],n=e[1];return Math.sqrt(Math.pow(t[0]-n[0],2)+Math.pow(t[1]-n[1],2))}function bl(e,t){const n=t.hachureAngle+90;let i=t.hachureGap;i<0&&(i=4*t.strokeWidth),i=Math.max(i,.1);const o=[0,0];if(n)for(const t of e)vl(t,o,n);const s=function(e,t){const n=[];for(const t of e){const e=[...t];e[0].join(",")!==e[e.length-1].join(",")&&e.push([e[0][0],e[0][1]]),e.length>2&&n.push(e)}const i=[];t=Math.max(t,.1);const o=[];for(const e of n)for(let t=0;t<e.length-1;t++){const n=e[t],i=e[t+1];if(n[1]!==i[1]){const e=Math.min(n[1],i[1]);o.push({ymin:e,ymax:Math.max(n[1],i[1]),x:e===n[1]?n[0]:i[0],islope:(i[0]-n[0])/(i[1]-n[1])})}}if(o.sort(((e,t)=>e.ymin<t.ymin?-1:e.ymin>t.ymin?1:e.x<t.x?-1:e.x>t.x?1:e.ymax===t.ymax?0:(e.ymax-t.ymax)/Math.abs(e.ymax-t.ymax))),!o.length)return i;let s=[],r=o[0].ymin;for(;s.length||o.length;){if(o.length){let e=-1;for(let t=0;t<o.length&&!(o[t].ymin>r);t++)e=t;o.splice(0,e+1).forEach((e=>{s.push({s:r,edge:e})}))}if(s=s.filter((e=>!(e.edge.ymax<=r))),s.sort(((e,t)=>e.edge.x===t.edge.x?0:(e.edge.x-t.edge.x)/Math.abs(e.edge.x-t.edge.x))),s.length>1)for(let e=0;e<s.length;e+=2){const t=e+1;if(t>=s.length)break;const n=s[e].edge,o=s[t].edge;i.push([[Math.round(n.x),r],[Math.round(o.x),r]])}r+=t,s.forEach((e=>{e.edge.x=e.edge.x+t*e.edge.islope}))}return i}(e,i);if(n){for(const t of e)vl(t,o,-n);!function(e,t,n){const i=[];e.forEach((e=>i.push(...e))),vl(i,t,n)}(s,o,-n)}return s}!function(e,t,n,i){var o,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(s<3?o(r):s>3?o(t,n,r):o(t,n))||r);s>3&&r&&Object.defineProperty(t,n,r)}([dl("svg"),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",SVGSVGElement)],fl.prototype,"svg",void 0);class yl extends class{constructor(e){this.helper=e}fillPolygons(e,t){return this._fillPolygons(e,t)}_fillPolygons(e,t){const n=bl(e,t);return{type:"fillSketch",ops:this.renderLines(n,t)}}renderLines(e,t){const n=[];for(const i of e)n.push(...this.helper.doubleLineOps(i[0][0],i[0][1],i[1][0],i[1][1],t));return n}}{fillPolygons(e,t){let n=t.hachureGap;n<0&&(n=4*t.strokeWidth),n=Math.max(n,.1);const i=bl(e,Object.assign({},t,{hachureGap:n})),o=Math.PI/180*t.hachureAngle,s=[],r=.5*n*Math.cos(o),a=.5*n*Math.sin(o);for(const[e,t]of i)ml([e,t])&&s.push([[e[0]-r,e[1]+a],[...t]],[[e[0]+r,e[1]-a],[...t]]);return{type:"fillSketch",ops:this.renderLines(s,t)}}}class wl{constructor(e){this.seed=e}next(){return this.seed?(2**31-1&(this.seed=Math.imul(48271,this.seed)))/2**31:Math.random()}}function xl(e,t,n,i,o){return{type:"path",ops:Cl(e,t,n,i,o)}}function kl(e,t){return function(e,t,n){const i=(e||[]).length;if(i>2){const o=[];for(let t=0;t<i-1;t++)o.push(...Cl(e[t][0],e[t][1],e[t+1][0],e[t+1][1],n));return t&&o.push(...Cl(e[i-1][0],e[i-1][1],e[0][0],e[0][1],n)),{type:"path",ops:o}}return 2===i?xl(e[0][0],e[0][1],e[1][0],e[1][1],n):{type:"path",ops:[]}}(e,!0,t)}function _l(e,t,n,i,o){return function(e,t,n,i){const[o,s]=jl(i.increment,e,t,i.rx,i.ry,1,i.increment*Sl(.1,Sl(.4,1,n),n),n);let r=El(o,null,n);if(!n.disableMultiStroke&&0!==n.roughness){const[o]=jl(i.increment,e,t,i.rx,i.ry,1.5,0,n),s=El(o,null,n);r=r.concat(s)}return{estimatedPoints:s,opset:{type:"path",ops:r}}}(e,t,o,$l(n,i,o)).opset}function $l(e,t,n){const i=Math.sqrt(2*Math.PI*Math.sqrt((Math.pow(e/2,2)+Math.pow(t/2,2))/2)),o=Math.ceil(Math.max(n.curveStepCount,n.curveStepCount/Math.sqrt(200)*i)),s=2*Math.PI/o;let r=Math.abs(e/2),a=Math.abs(t/2);const l=1-n.curveFitting;return r+=Al(r*l,n),a+=Al(a*l,n),{increment:s,rx:r,ry:a}}function Rl(e){return e.randomizer||(e.randomizer=new wl(e.seed||0)),e.randomizer.next()}function Sl(e,t,n,i=1){return n.roughness*i*(Rl(n)*(t-e)+e)}function Al(e,t,n=1){return Sl(-e,e,t,n)}function Cl(e,t,n,i,o,s=!1){const r=s?o.disableMultiStrokeFill:o.disableMultiStroke,a=Ol(e,t,n,i,o,!0,!1);if(r)return a;const l=Ol(e,t,n,i,o,!0,!0);return a.concat(l)}function Ol(e,t,n,i,o,s,r){const a=Math.pow(e-n,2)+Math.pow(t-i,2),l=Math.sqrt(a);let c=1;c=l<200?1:l>500?.4:-.0016668*l+1.233334;let u=o.maxRandomnessOffset||0;u*u*100>a&&(u=l/10);const d=u/2,h=.2+.2*Rl(o);let p=o.bowing*o.maxRandomnessOffset*(i-t)/200,f=o.bowing*o.maxRandomnessOffset*(e-n)/200;p=Al(p,o,c),f=Al(f,o,c);const g=[],v=()=>Al(d,o,c),m=()=>Al(u,o,c),b=o.preserveVertices;return s&&(r?g.push({op:"move",data:[e+(b?0:v()),t+(b?0:v())]}):g.push({op:"move",data:[e+(b?0:Al(u,o,c)),t+(b?0:Al(u,o,c))]})),r?g.push({op:"bcurveTo",data:[p+e+(n-e)*h+v(),f+t+(i-t)*h+v(),p+e+2*(n-e)*h+v(),f+t+2*(i-t)*h+v(),n+(b?0:v()),i+(b?0:v())]}):g.push({op:"bcurveTo",data:[p+e+(n-e)*h+m(),f+t+(i-t)*h+m(),p+e+2*(n-e)*h+m(),f+t+2*(i-t)*h+m(),n+(b?0:m()),i+(b?0:m())]}),g}function El(e,t,n){const i=e.length,o=[];if(i>3){const s=[],r=1-n.curveTightness;o.push({op:"move",data:[e[1][0],e[1][1]]});for(let t=1;t+2<i;t++){const n=e[t];s[0]=[n[0],n[1]],s[1]=[n[0]+(r*e[t+1][0]-r*e[t-1][0])/6,n[1]+(r*e[t+1][1]-r*e[t-1][1])/6],s[2]=[e[t+1][0]+(r*e[t][0]-r*e[t+2][0])/6,e[t+1][1]+(r*e[t][1]-r*e[t+2][1])/6],s[3]=[e[t+1][0],e[t+1][1]],o.push({op:"bcurveTo",data:[s[1][0],s[1][1],s[2][0],s[2][1],s[3][0],s[3][1]]})}if(t&&2===t.length){const e=n.maxRandomnessOffset;o.push({op:"lineTo",data:[t[0]+Al(e,n),t[1]+Al(e,n)]})}}else 3===i?(o.push({op:"move",data:[e[1][0],e[1][1]]}),o.push({op:"bcurveTo",data:[e[1][0],e[1][1],e[2][0],e[2][1],e[2][0],e[2][1]]})):2===i&&o.push(...Cl(e[0][0],e[0][1],e[1][0],e[1][1],n));return o}function jl(e,t,n,i,o,s,r,a){const l=[],c=[];if(0===a.roughness){e/=4,c.push([t+i*Math.cos(-e),n+o*Math.sin(-e)]);for(let s=0;s<=2*Math.PI;s+=e){const e=[t+i*Math.cos(s),n+o*Math.sin(s)];l.push(e),c.push(e)}c.push([t+i*Math.cos(0),n+o*Math.sin(0)]),c.push([t+i*Math.cos(e),n+o*Math.sin(e)])}else{const u=Al(.5,a)-Math.PI/2;c.push([Al(s,a)+t+.9*i*Math.cos(u-e),Al(s,a)+n+.9*o*Math.sin(u-e)]);const d=2*Math.PI+u-.01;for(let r=u;r<d;r+=e){const e=[Al(s,a)+t+i*Math.cos(r),Al(s,a)+n+o*Math.sin(r)];l.push(e),c.push(e)}c.push([Al(s,a)+t+i*Math.cos(u+2*Math.PI+.5*r),Al(s,a)+n+o*Math.sin(u+2*Math.PI+.5*r)]),c.push([Al(s,a)+t+.98*i*Math.cos(u+r),Al(s,a)+n+.98*o*Math.sin(u+r)]),c.push([Al(s,a)+t+.9*i*Math.cos(u+.5*r),Al(s,a)+n+.9*o*Math.sin(u+.5*r)])}return[c,l]}const zl={randOffset:(e,t)=>e,randOffsetWithRange:(e,t,n)=>(e+t)/2,ellipse:(e,t,n,i,o)=>_l(e,t,n,i,o),doubleLineOps:(e,t,n,i,o)=>function(e,t,n,i,o){return Cl(e,t,n,i,o,!0)}(e,t,n,i,o)};function Bl(e){return{maxRandomnessOffset:2,roughness:1,bowing:.85,stroke:"#000",strokeWidth:1.5,curveTightness:0,curveFitting:.95,curveStepCount:9,fillStyle:"hachure",fillWeight:3.5,hachureAngle:-41,hachureGap:5,dashOffset:-1,dashGap:-1,zigzagOffset:0,combineNestedSvgPaths:!1,disableMultiStroke:!1,disableMultiStrokeFill:!1,seed:e}}function Ml(e,t){let n="";for(const i of e.ops){const e=i.data;switch(i.op){case"move":if(t&&n)break;n+=`M${e[0]} ${e[1]} `;break;case"bcurveTo":n+=`C${e[0]} ${e[1]}, ${e[2]} ${e[3]}, ${e[4]} ${e[5]} `;break;case"lineTo":n+=`L${e[0]} ${e[1]} `}}return n.trim()}function Pl(e,t){const n=document.createElementNS("http://www.w3.org/2000/svg",e);if(t)for(const e in t)n.setAttributeNS(null,e,t[e]);return n}function Tl(e,t,n=!1){const i=Pl("path",{d:Ml(e,n)});return t&&t.appendChild(i),i}function Dl(e,t,n,i,o,s){return Tl(function(e,t,n,i,o){return kl([[e,t],[e+n,t],[e+n,t+i],[e,t+i]],o)}(t+2,n+2,i-4,o-4,Bl(s)),e)}function Fl(e,t,n,i,o,s){return Tl(xl(t,n,i,o,Bl(s)),e)}function Il(e,t,n,i,o,s){return Tl(_l(t,n,i=Math.max(i>10?i-4:i-1,1),o=Math.max(o>10?o-4:o-1,1),Bl(s)),e)}function Ll(e,t){return Tl(new yl(zl).fillPolygon(e,Bl(t)),null)}function Nl(e,t,n,i,o){const s=$l(n,i,Bl(o)),r=[];let a=0;for(;a<=2*Math.PI;)r.push([e+s.rx*Math.cos(a),t+s.ry*Math.sin(a)]),a+=s.increment;return Ll(r,o)}var Ul=function(e,t,n,i){var o,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(s<3?o(r):s>3?o(t,n,r):o(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r},Hl=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Vl=class extends fl{constructor(){super(),this.elevation=1,this.disabled=!1,this.roAttached=!1,window.ResizeObserver&&(this.ro=new window.ResizeObserver((()=>{this.svg&&this.wiredRender(!0)})))}static get styles(){return[pl,fa`
        :host {
          display: inline-block;
          font-size: 14px;
        }
        path {
          transition: transform 0.05s ease;
        }
        button {
          position: relative;
          user-select: none;
          border: none;
          background: none;
          font-family: inherit;
          font-size: inherit;
          cursor: pointer;
          letter-spacing: 1.25px;
          text-transform: uppercase;
          text-align: center;
          padding: 10px;
          color: inherit;
          outline: none;
        }
        button[disabled] {
          opacity: 0.6 !important;
          background: rgba(0, 0, 0, 0.07);
          cursor: default;
          pointer-events: none;
        }
        button:active path {
          transform: scale(0.97) translate(1.5%, 1.5%);
        }
        button:focus path {
          stroke-width: 1.5;
        }
        button::-moz-focus-inner {
          border: 0;
        }
      `]}render(){return Na`
    <button ?disabled="${this.disabled}">
      <slot @slotchange="${this.wiredRender}"></slot>
      <div id="overlay">
        <svg></svg>
      </div>
    </button>
    `}focus(){this.button?this.button.focus():super.focus()}canvasSize(){if(this.button){const e=this.button.getBoundingClientRect(),t=Math.min(Math.max(1,this.elevation),5);return[e.width+2*(t-1),e.height+2*(t-1)]}return this.lastSize}draw(e,t){const n=Math.min(Math.max(1,this.elevation),5),i={width:t[0]-2*(n-1),height:t[1]-2*(n-1)};Dl(e,0,0,i.width,i.height,this.seed);for(let t=1;t<n;t++)Fl(e,2*t,i.height+2*t,i.width+2*t,i.height+2*t,this.seed).style.opacity=""+(75-10*t)/100,Fl(e,i.width+2*t,i.height+2*t,i.width+2*t,2*t,this.seed).style.opacity=""+(75-10*t)/100,Fl(e,2*t,i.height+2*t,i.width+2*t,i.height+2*t,this.seed).style.opacity=""+(75-10*t)/100,Fl(e,i.width+2*t,i.height+2*t,i.width+2*t,2*t,this.seed).style.opacity=""+(75-10*t)/100}updated(){super.updated(),this.roAttached||this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.button&&this.ro&&(this.ro.observe(this.button),this.roAttached=!0)}detachResizeListener(){this.button&&this.ro&&this.ro.unobserve(this.button),this.roAttached=!1}};Ul([ul({type:Number}),Hl("design:type",Object)],Vl.prototype,"elevation",void 0),Ul([ul({type:Boolean,reflect:!0}),Hl("design:type",Object)],Vl.prototype,"disabled",void 0),Ul([dl("button"),Hl("design:type",HTMLButtonElement)],Vl.prototype,"button",void 0),Vl=Ul([ll("wired-button"),Hl("design:paramtypes",[])],Vl);var ql=function(e,t,n,i){var o,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(s<3?o(r):s>3?o(t,n,r):o(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r},Wl=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Gl=class extends fl{constructor(){super(),this.elevation=1,this.roAttached=!1,window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver((()=>{this.svg&&this.wiredRender()})))}static get styles(){return[pl,fa`
        :host {
          display: inline-block;
          position: relative;
          padding: 10px;
        }
        path.cardFill {
          stroke-width: 3.5;
          stroke: var(--wired-card-background-fill);
        }
        path {
          stroke: var(--wired-card-background-fill, currentColor);
        }
      `]}render(){return Na`
    <div id="overlay"><svg></svg></div>
    <div style="position: relative;">
      <slot @slotchange="${this.wiredRender}"></slot>
    </div>
    `}updated(e){const t=e.has("fill");this.wiredRender(t),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.roAttached||(this.resizeObserver?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0})),this.roAttached=!0)}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler),this.roAttached=!1}canvasSize(){const e=this.getBoundingClientRect(),t=Math.min(Math.max(1,this.elevation),5);return[e.width+2*(t-1),e.height+2*(t-1)]}draw(e,t){const n=Math.min(Math.max(1,this.elevation),5),i=t[0]-2*(n-1),o=t[1]-2*(n-1);if(this.fill&&this.fill.trim()){const t=Ll([[2,2],[i-4,2],[i-2,o-4],[2,o-4]],this.seed);t.classList.add("cardFill"),e.style.setProperty("--wired-card-background-fill",this.fill.trim()),e.appendChild(t)}Dl(e,2,2,i-4,o-4,this.seed);for(let t=1;t<n;t++)Fl(e,2*t,o-4+2*t,i-4+2*t,o-4+2*t,this.seed).style.opacity=""+(85-10*t)/100,Fl(e,i-4+2*t,o-4+2*t,i-4+2*t,2*t,this.seed).style.opacity=""+(85-10*t)/100,Fl(e,2*t,o-4+2*t,i-4+2*t,o-4+2*t,this.seed).style.opacity=""+(85-10*t)/100,Fl(e,i-4+2*t,o-4+2*t,i-4+2*t,2*t,this.seed).style.opacity=""+(85-10*t)/100}};ql([ul({type:Number}),Wl("design:type",Object)],Gl.prototype,"elevation",void 0),ql([ul({type:String}),Wl("design:type",String)],Gl.prototype,"fill",void 0),Gl=ql([ll("wired-card"),Wl("design:paramtypes",[])],Gl);var Kl=function(e,t,n,i){var o,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(s<3?o(r):s>3?o(t,n,r):o(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r},Zl=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Yl=class extends fl{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.focused=!1}static get styles(){return[pl,fa`
      :host {
        display: inline-block;
        font-family: inherit;
      }
      :host([disabled]) {
        opacity: 0.6 !important;
        cursor: default;
        pointer-events: none;
      }
      :host([disabled]) svg {
        background: rgba(0, 0, 0, 0.07);
      }

      #container {
        display: flex;
        flex-direction: row;
        position: relative;
        user-select: none;
        min-height: 24px;
        cursor: pointer;
      }
      span {
        margin-left: 1.5ex;
        line-height: 24px;
      }
      input {
        opacity: 0;
      }
      path {
        stroke: var(--wired-checkbox-icon-color, currentColor);
        stroke-width: var(--wired-checkbox-default-swidth, 0.7);
      }
      g path {
        stroke-width: 2.5;
      }
      #container.focused {
        --wired-checkbox-default-swidth: 1.5;
      }
      `]}focus(){this.input?this.input.focus():super.focus()}wiredRender(e=!1){super.wiredRender(e),this.refreshCheckVisibility()}render(){return Na`
    <label id="container" class="${this.focused?"focused":""}">
      <input type="checkbox" .checked="${this.checked}" ?disabled="${this.disabled}" 
        @change="${this.onChange}"
        @focus="${()=>this.focused=!0}"
        @blur="${()=>this.focused=!1}">
      <span><slot></slot></span>
      <div id="overlay"><svg></svg></div>
    </label>
    `}onChange(){this.checked=this.input.checked,this.refreshCheckVisibility(),this.fire("change",{checked:this.checked})}canvasSize(){return[24,24]}draw(e,t){Dl(e,0,0,t[0],t[1],this.seed),this.svgCheck=Pl("g"),e.appendChild(this.svgCheck),Fl(this.svgCheck,.3*t[0],.4*t[1],.5*t[0],.7*t[1],this.seed),Fl(this.svgCheck,.5*t[0],.7*t[1],t[0]+5,-5,this.seed)}refreshCheckVisibility(){this.svgCheck&&(this.svgCheck.style.display=this.checked?"":"none")}};Kl([ul({type:Boolean}),Zl("design:type",Object)],Yl.prototype,"checked",void 0),Kl([ul({type:Boolean,reflect:!0}),Zl("design:type",Object)],Yl.prototype,"disabled",void 0),Kl([function(e){return ul({...e,state:!0})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */(),Zl("design:type",Object)],Yl.prototype,"focused",void 0),Kl([dl("input"),Zl("design:type",HTMLInputElement)],Yl.prototype,"input",void 0),Yl=Kl([ll("wired-checkbox")],Yl);var Xl=function(e,t,n,i){var o,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(s<3?o(r):s>3?o(t,n,r):o(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r},Jl=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Ql=class extends fl{constructor(){super(...arguments),this.value="",this.name="",this.selected=!1}static get styles(){return[pl,fa`
      :host {
        display: inline-block;
        font-size: 14px;
        text-align: left;
      }
      button {
        cursor: pointer;
        outline: none;
        overflow: hidden;
        color: inherit;
        user-select: none;
        position: relative;
        font-family: inherit;
        text-align: inherit;
        font-size: inherit;
        letter-spacing: 1.25px;
        padding: 1px 10px;
        min-height: 36px;
        text-transform: inherit;
        background: none;
        border: none;
        transition: background-color 0.3s ease, color 0.3s ease;
        width: 100%;
        box-sizing: border-box;
        white-space: nowrap;
      }
      button.selected {
        color: var(--wired-item-selected-color, #fff);
      }
      button::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: currentColor;
        opacity: 0;
      }
      button span {
        display: inline-block;
        transition: transform 0.2s ease;
        position: relative;
      }
      button:active span {
        transform: scale(1.02);
      }
      #overlay {
        display: none;
      }
      button.selected #overlay {
        display: block;
      }
      svg path {
        stroke: var(--wired-item-selected-bg, #000);
        stroke-width: 2.75;
        fill: transparent;
        transition: transform 0.05s ease;
      }
      @media (hover: hover) {
        button:hover::before {
          opacity: 0.05;
        }
      }
      `]}render(){return Na`
    <button class="${this.selected?"selected":""}">
      <div id="overlay"><svg></svg></div>
      <span><slot></slot></span>
    </button>`}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){const n=Ll([[0,0],[t[0],0],[t[0],t[1]],[0,t[1]]],this.seed);e.appendChild(n)}};Xl([ul(),Jl("design:type",Object)],Ql.prototype,"value",void 0),Xl([ul(),Jl("design:type",Object)],Ql.prototype,"name",void 0),Xl([ul({type:Boolean}),Jl("design:type",Object)],Ql.prototype,"selected",void 0),Ql=Xl([ll("wired-item")],Ql);var ec=function(e,t,n,i){var o,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(s<3?o(r):s>3?o(t,n,r):o(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r},tc=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let nc=class extends rl{constructor(){super(...arguments),this.disabled=!1,this.seed=Math.floor(Math.random()*2**31),this.cardShowing=!1,this.itemNodes=[]}static get styles(){return fa`
      :host {
        display: inline-block;
        font-family: inherit;
        position: relative;
        outline: none;
        opacity: 0;
      }
    
      :host(.wired-disabled) {
        opacity: 0.5 !important;
        cursor: default;
        pointer-events: none;
        background: rgba(0, 0, 0, 0.02);
      }
      
      :host(.wired-rendered) {
        opacity: 1;
      }
  
      :host(:focus) path {
        stroke-width: 1.5;
      }
    
      #container {
        white-space: nowrap;
        position: relative;
      }
    
      .inline {
        display: inline-block;
        vertical-align: top
      }
    
      #textPanel {
        min-width: 90px;
        min-height: 18px;
        padding: 8px;
      }
    
      #dropPanel {
        width: 34px;
        cursor: pointer;
      }
    
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
      }
    
      svg {
        display: block;
      }
    
      path {
        stroke: currentColor;
        stroke-width: 0.7;
        fill: transparent;
      }
    
      #card {
        display: block;
        position: absolute;
        background: var(--wired-combo-popup-bg, white);
        z-index: 1;
        box-shadow: 1px 5px 15px -6px rgba(0, 0, 0, 0.8);
        padding: 8px;
      }
  
      ::slotted(wired-item) {
        display: block;
      }
    `}render(){return Na`
    <div id="container" @click="${this.onCombo}">
      <div id="textPanel" class="inline">
        <span>${this.value&&this.value.text}</span>
      </div>
      <div id="dropPanel" class="inline"></div>
      <div class="overlay">
        <svg></svg>
      </div>
    </div>
    <wired-card id="card" tabindex="-1" role="listbox" @mousedown="${this.onItemClick}" @touchstart="${this.onItemClick}" style="display: none;">
      <slot id="slot"></slot>
    </wired-card>
    `}refreshDisabledState(){this.disabled?this.classList.add("wired-disabled"):this.classList.remove("wired-disabled"),this.tabIndex=this.disabled?-1:+(this.getAttribute("tabindex")||0)}firstUpdated(){this.setAttribute("role","combobox"),this.setAttribute("aria-haspopup","listbox"),this.refreshSelection(),this.addEventListener("blur",(()=>{this.cardShowing&&this.setCardShowing(!1)})),this.addEventListener("keydown",(e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this.selectPrevious();break;case 39:case 40:e.preventDefault(),this.selectNext();break;case 27:e.preventDefault(),this.cardShowing&&this.setCardShowing(!1);break;case 13:e.preventDefault(),this.setCardShowing(!this.cardShowing);break;case 32:e.preventDefault(),this.cardShowing||this.setCardShowing(!0)}}))}updated(e){e.has("disabled")&&this.refreshDisabledState();const t=this.svg;for(;t.hasChildNodes();)t.removeChild(t.lastChild);const n=this.shadowRoot.getElementById("container").getBoundingClientRect();t.setAttribute("width",`${n.width}`),t.setAttribute("height",`${n.height}`);const i=this.shadowRoot.getElementById("textPanel").getBoundingClientRect();this.shadowRoot.getElementById("dropPanel").style.minHeight=i.height+"px",Dl(t,0,0,i.width,i.height,this.seed);const o=i.width-4;Dl(t,o,0,34,i.height,this.seed);const s=Math.max(0,Math.abs((i.height-24)/2)),r=(a=t,l=[[o+8,5+s],[o+26,5+s],[o+17,s+Math.min(i.height,18)]],c=this.seed,Tl(kl(l,Bl(c)),a,!0));var a,l,c;if(r.style.fill="currentColor",r.style.pointerEvents=this.disabled?"none":"auto",r.style.cursor="pointer",this.classList.add("wired-rendered"),this.setAttribute("aria-expanded",`${this.cardShowing}`),!this.itemNodes.length){this.itemNodes=[];const e=this.shadowRoot.getElementById("slot").assignedNodes();if(e&&e.length)for(let t=0;t<e.length;t++){const n=e[t];"WIRED-ITEM"===n.tagName&&(n.setAttribute("role","option"),this.itemNodes.push(n))}}}refreshSelection(){this.lastSelectedItem&&(this.lastSelectedItem.selected=!1,this.lastSelectedItem.removeAttribute("aria-selected"));const e=this.shadowRoot.getElementById("slot").assignedNodes();if(e){let t=null;for(let n=0;n<e.length;n++){const i=e[n];if("WIRED-ITEM"===i.tagName){const e=i.value||i.getAttribute("value")||"";if(this.selected&&e===this.selected){t=i;break}}}this.lastSelectedItem=t||void 0,this.lastSelectedItem&&(this.lastSelectedItem.selected=!0,this.lastSelectedItem.setAttribute("aria-selected","true")),this.value=t?{value:t.value||"",text:t.textContent||""}:void 0}}setCardShowing(e){this.card&&(this.cardShowing=e,this.card.style.display=e?"":"none",e&&setTimeout((()=>{this.shadowRoot.getElementById("slot").assignedNodes().filter((e=>e.nodeType===Node.ELEMENT_NODE)).forEach((e=>{const t=e;t.requestUpdate&&t.requestUpdate()}))}),10),this.setAttribute("aria-expanded",`${this.cardShowing}`))}onItemClick(e){e.stopPropagation(),this.selected=e.target.value,this.refreshSelection(),this.fireSelected(),setTimeout((()=>{this.setCardShowing(!1)}))}fireSelected(){gl(this,"selected",{selected:this.selected})}selectPrevious(){const e=this.itemNodes;if(e.length){let t=-1;for(let n=0;n<e.length;n++)if(e[n]===this.lastSelectedItem){t=n;break}t<0?t=0:0===t?t=e.length-1:t--,this.selected=e[t].value||"",this.refreshSelection(),this.fireSelected()}}selectNext(){const e=this.itemNodes;if(e.length){let t=-1;for(let n=0;n<e.length;n++)if(e[n]===this.lastSelectedItem){t=n;break}t<0||t>=e.length-1?t=0:t++,this.selected=e[t].value||"",this.refreshSelection(),this.fireSelected()}}onCombo(e){e.stopPropagation(),this.setCardShowing(!this.cardShowing)}};ec([ul({type:Object}),tc("design:type",Object)],nc.prototype,"value",void 0),ec([ul({type:String,reflect:!0}),tc("design:type",String)],nc.prototype,"selected",void 0),ec([ul({type:Boolean,reflect:!0}),tc("design:type",Object)],nc.prototype,"disabled",void 0),ec([dl("svg"),tc("design:type",SVGSVGElement)],nc.prototype,"svg",void 0),ec([dl("#card"),tc("design:type",HTMLDivElement)],nc.prototype,"card",void 0),nc=ec([ll("wired-combo")],nc);var ic=function(e,t,n,i){var o,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(s<3?o(r):s>3?o(t,n,r):o(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r},oc=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let sc=class extends rl{constructor(){super(...arguments),this.elevation=5,this.open=!1}static get styles(){return fa`
      #container {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
        z-index: var(--wired-dialog-z-index, 100);
      }
      #container::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.4);
        opacity: 0;
        transition: opacity 0.5s ease;
      }
      #overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0;
        transform: translateY(150px);
        transition: transform 0.5s ease, opacity 0.5s ease;
      }
      .layout.vertical {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      }
      .flex {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      }
      wired-card {
        display: inline-block;
        background: white;
        text-align: left;
      }

      :host([open]) #container {
        pointer-events: auto;
      }
      :host([open]) #container::before {
        opacity: 1;
      }
      :host([open]) #overlay {
        opacity: 1;
        transform: none;
      }
    `}render(){return Na`
    <div id="container">
      <div id="overlay" class="vertical layout">
        <div class="flex"></div>
        <div style="text-align: center; padding: 5px;">
          <wired-card .elevation="${this.elevation}"><slot></slot></wired-card>
        </div>
        <div class="flex"></div>
      </div>
    </div>
    `}updated(){this.card&&this.card.wiredRender(!0)}};ic([ul({type:Number}),oc("design:type",Object)],sc.prototype,"elevation",void 0),ic([ul({type:Boolean,reflect:!0}),oc("design:type",Object)],sc.prototype,"open",void 0),ic([dl("wired-card"),oc("design:type",Gl)],sc.prototype,"card",void 0),sc=ic([ll("wired-dialog")],sc);var rc=function(e,t,n,i){var o,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(s<3?o(r):s>3?o(t,n,r):o(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r};let ac=class extends fl{constructor(){super(...arguments),this.elevation=1,this.roAttached=!1}static get styles(){return[pl,fa`
        :host {
          display: block;
          position: relative;
        }
      `]}render(){return Na`<svg></svg>`}canvasSize(){const e=this.getBoundingClientRect(),t=Math.min(Math.max(1,this.elevation),5);return[e.width,6*t]}draw(e,t){const n=Math.min(Math.max(1,this.elevation),5);for(let i=0;i<n;i++)Fl(e,0,6*i+3,t[0],6*i+3,this.seed)}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.roAttached||(this.resizeObserver?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0})),this.roAttached=!0)}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler),this.roAttached=!1}};rc([ul({type:Number}),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",Object)],ac.prototype,"elevation",void 0),ac=rc([ll("wired-divider")],ac);var lc=function(e,t,n,i){var o,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(s<3?o(r):s>3?o(t,n,r):o(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r},cc=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let uc=class extends fl{constructor(){super(...arguments),this.disabled=!1}static get styles(){return[pl,fa`
        :host {
          display: inline-block;
          font-size: 14px;
          color: #fff;
        }
        button {
          position: relative;
          user-select: none;
          border: none;
          background: none;
          font-family: inherit;
          font-size: inherit;
          cursor: pointer;
          letter-spacing: 1.25px;
          text-transform: uppercase;
          text-align: center;
          padding: 16px;
          color: inherit;
          outline: none;
          border-radius: 50%;
        }
        button[disabled] {
          opacity: 0.6 !important;
          background: rgba(0, 0, 0, 0.07);
          cursor: default;
          pointer-events: none;
        }
        button::-moz-focus-inner {
          border: 0;
        }
        button ::slotted(*) {
          position: relative;
          font-size: var(--wired-icon-size, 24px);
          transition: transform 0.2s ease, opacity 0.2s ease;
          opacity: 0.85;
        }
        path {
          stroke: var(--wired-fab-bg-color, #018786);
          stroke-width: 3;
          fill: transparent;
        }

        button:focus ::slotted(*) {
          opacity: 1;
        }
        button:active ::slotted(*) {
          opacity: 1;
          transform: scale(1.15);
        }
      `]}render(){return Na`
    <button ?disabled="${this.disabled}">
      <div id="overlay">
        <svg></svg>
      </div>
      <slot @slotchange="${this.wiredRender}"></slot>
    </button>
    `}canvasSize(){if(this.button){const e=this.button.getBoundingClientRect();return[e.width,e.height]}return this.lastSize}draw(e,t){const n=Math.min(t[0],t[1]),i=Nl(n/2,n/2,n,n,this.seed);e.appendChild(i)}};lc([ul({type:Boolean,reflect:!0}),cc("design:type",Object)],uc.prototype,"disabled",void 0),lc([dl("button"),cc("design:type",HTMLButtonElement)],uc.prototype,"button",void 0),uc=lc([ll("wired-fab")],uc);var dc=function(e,t,n,i){var o,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(s<3?o(r):s>3?o(t,n,r):o(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r},hc=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let pc=class extends fl{constructor(){super(...arguments),this.disabled=!1}static get styles(){return[pl,fa`
        :host {
          display: inline-block;
          font-size: 14px;
        }
        path {
          transition: transform 0.05s ease;
        }
        button {
          position: relative;
          user-select: none;
          border: none;
          background: none;
          font-family: inherit;
          font-size: inherit;
          cursor: pointer;
          letter-spacing: 1.25px;
          text-transform: uppercase;
          text-align: center;
          padding: 10px;
          color: inherit;
          outline: none;
          border-radius: 50%;
        }
        button[disabled] {
          opacity: 0.6 !important;
          background: rgba(0, 0, 0, 0.07);
          cursor: default;
          pointer-events: none;
        }
        button:active path {
          transform: scale(0.97) translate(1.5%, 1.5%);
        }
        button:focus path {
          stroke-width: 1.5;
        }
        button::-moz-focus-inner {
          border: 0;
        }
        button ::slotted(*) {
          position: relative;
          font-size: var(--wired-icon-size, 24px);
        }
      `]}render(){return Na`
    <button ?disabled="${this.disabled}">
      <slot @slotchange="${this.wiredRender}"></slot>
      <div id="overlay">
        <svg></svg>
      </div>
    </button>
    `}canvasSize(){if(this.button){const e=this.button.getBoundingClientRect();return[e.width,e.height]}return this.lastSize}draw(e,t){const n=Math.min(t[0],t[1]);e.setAttribute("width",`${n}`),e.setAttribute("height",`${n}`),Il(e,n/2,n/2,n,n,this.seed)}};dc([ul({type:Boolean,reflect:!0}),hc("design:type",Object)],pc.prototype,"disabled",void 0),dc([dl("button"),hc("design:type",HTMLButtonElement)],pc.prototype,"button",void 0),pc=dc([ll("wired-icon-button")],pc);var fc=function(e,t,n,i){var o,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(s<3?o(r):s>3?o(t,n,r):o(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r},gc=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let vc=class extends fl{constructor(){super(),this.elevation=1,this.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",this.roAttached=!1,window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver((()=>{this.svg&&this.wiredRender()})))}static get styles(){return[pl,fa`
        :host {
          display: inline-block;
          position: relative;
          line-height: 1;
          padding: 3px;
        }
        img {
          display: block;
          box-sizing: border-box;
          max-width: 100%;
          max-height: 100%;
        }
        path {
          stroke-width: 1;
        }
      `]}render(){return Na`
    <img src="${this.src}">
    <div id="overlay"><svg></svg></div>
    `}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.roAttached||(this.resizeObserver&&this.resizeObserver.observe?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0})),this.roAttached=!0)}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler),this.roAttached=!1}canvasSize(){const e=this.getBoundingClientRect(),t=Math.min(Math.max(1,this.elevation),5);return[e.width+2*(t-1),e.height+2*(t-1)]}draw(e,t){const n=Math.min(Math.max(1,this.elevation),5),i=t[0]-2*(n-1),o=t[1]-2*(n-1);Dl(e,2,2,i-4,o-4,this.seed);for(let t=1;t<n;t++)Fl(e,2*t,o-4+2*t,i-4+2*t,o-4+2*t,this.seed).style.opacity=""+(85-10*t)/100,Fl(e,i-4+2*t,o-4+2*t,i-4+2*t,2*t,this.seed).style.opacity=""+(85-10*t)/100,Fl(e,2*t,o-4+2*t,i-4+2*t,o-4+2*t,this.seed).style.opacity=""+(85-10*t)/100,Fl(e,i-4+2*t,o-4+2*t,i-4+2*t,2*t,this.seed).style.opacity=""+(85-10*t)/100}};fc([ul({type:Number}),gc("design:type",Object)],vc.prototype,"elevation",void 0),fc([ul({type:String}),gc("design:type",String)],vc.prototype,"src",void 0),vc=fc([ll("wired-image"),gc("design:paramtypes",[])],vc);var mc=function(e,t,n,i){var o,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(s<3?o(r):s>3?o(t,n,r):o(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r},bc=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let yc=class extends fl{constructor(){super(),this.disabled=!1,this.placeholder="",this.type="text",this.autocomplete="",this.autocapitalize="",this.autocorrect="",this.required=!1,this.autofocus=!1,this.readonly=!1,this.roAttached=!1,window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver((()=>{this.svg&&this.wiredRender(!0)})))}static get styles(){return[pl,fa`
        :host {
          display: inline-block;
          position: relative;
          padding: 5px;
          font-family: sans-serif;
          width: 150px;
          outline: none;
        }
        :host([disabled]) {
          opacity: 0.6 !important;
          cursor: default;
          pointer-events: none;
        }
        :host([disabled]) svg {
          background: rgba(0, 0, 0, 0.07);
        }
        input {
          display: block;
          width: 100%;
          box-sizing: border-box;
          outline: none;
          border: none;
          font-family: inherit;
          font-size: inherit;
          font-weight: inherit;
          color: inherit;
          padding: 6px;
        }
        input:focus + div path {
          stroke-width: 1.5;
        }
      `]}render(){return Na`
    <input name="${this.name}" type="${this.type}" placeholder="${this.placeholder}" ?disabled="${this.disabled}"
      ?required="${this.required}" autocomplete="${this.autocomplete}" ?autofocus="${this.autofocus}" minlength="${this.minlength}"
      maxlength="${this.maxlength}" min="${this.min}" max="${this.max}" step="${this.step}" ?readonly="${this.readonly}"
      size="${this.size}" autocapitalize="${this.autocapitalize}" autocorrect="${this.autocorrect}" 
      @change="${this.refire}" @input="${this.refire}">
    <div id="overlay">
      <svg></svg>
    </div>
    `}get input(){return this.textInput}get value(){const e=this.input;return e&&e.value||""}set value(e){if(this.shadowRoot){const t=this.input;if(t)return void(t.value=e)}this.pendingValue=e}firstUpdated(){this.value=this.pendingValue||this.value||this.getAttribute("value")||"",delete this.pendingValue}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){Dl(e,2,2,t[0]-2,t[1]-2,this.seed)}refire(e){e.stopPropagation(),this.fire(e.type,{sourceEvent:e})}focus(){this.textInput?this.textInput.focus():super.focus()}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.roAttached||(this.textInput&&this.resizeObserver&&this.resizeObserver.observe(this.textInput),this.roAttached=!0)}detachResizeListener(){this.textInput&&this.resizeObserver&&this.resizeObserver.unobserve(this.textInput),this.roAttached=!1}};mc([ul({type:Boolean,reflect:!0}),bc("design:type",Object)],yc.prototype,"disabled",void 0),mc([ul({type:String}),bc("design:type",Object)],yc.prototype,"placeholder",void 0),mc([ul({type:String}),bc("design:type",String)],yc.prototype,"name",void 0),mc([ul({type:String}),bc("design:type",String)],yc.prototype,"min",void 0),mc([ul({type:String}),bc("design:type",String)],yc.prototype,"max",void 0),mc([ul({type:String}),bc("design:type",String)],yc.prototype,"step",void 0),mc([ul({type:String}),bc("design:type",Object)],yc.prototype,"type",void 0),mc([ul({type:String}),bc("design:type",Object)],yc.prototype,"autocomplete",void 0),mc([ul({type:String}),bc("design:type",Object)],yc.prototype,"autocapitalize",void 0),mc([ul({type:String}),bc("design:type",Object)],yc.prototype,"autocorrect",void 0),mc([ul({type:Boolean}),bc("design:type",Object)],yc.prototype,"required",void 0),mc([ul({type:Boolean}),bc("design:type",Object)],yc.prototype,"autofocus",void 0),mc([ul({type:Boolean}),bc("design:type",Object)],yc.prototype,"readonly",void 0),mc([ul({type:Number}),bc("design:type",Number)],yc.prototype,"minlength",void 0),mc([ul({type:Number}),bc("design:type",Number)],yc.prototype,"maxlength",void 0),mc([ul({type:Number}),bc("design:type",Number)],yc.prototype,"size",void 0),mc([dl("input"),bc("design:type",HTMLInputElement)],yc.prototype,"textInput",void 0),yc=mc([ll("wired-input"),bc("design:paramtypes",[])],yc);var wc=function(e,t,n,i){var o,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(s<3?o(r):s>3?o(t,n,r):o(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r},xc=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let kc=class extends fl{constructor(){super(...arguments),this.elevation=1}static get styles(){return[pl,fa`
        :host {
          display: inline-block;
          position: relative;
        }
        a, a:hover, a:visited {
          color: inherit;
          outline: none;
          display: inline-block;
          white-space: nowrap;
          text-decoration: none;
          border: none;
        }
        path {
          stroke: var(--wired-link-decoration-color, blue);
          stroke-opacity: 0.45;
        }
        a:focus path {
          stroke-opacity: 1;
        }
      `]}render(){return Na`
    <a href="${this.href}" target="${this.target||""}">
      <slot></slot>
      <div id="overlay"><svg></svg></div>
    </a>
    `}focus(){this.anchor?this.anchor.focus():super.focus()}canvasSize(){if(this.anchor){const e=this.anchor.getBoundingClientRect(),t=Math.min(Math.max(1,this.elevation),5);return[e.width,e.height+2*(t-1)]}return this.lastSize}draw(e,t){const n=Math.min(Math.max(1,this.elevation),5),i={width:t[0],height:t[1]-2*(n-1)};for(let t=0;t<n;t++)Fl(e,0,i.height+2*t-2,i.width,i.height+2*t-2,this.seed),Fl(e,0,i.height+2*t-2,i.width,i.height+2*t-2,this.seed)}};wc([ul({type:Number}),xc("design:type",Object)],kc.prototype,"elevation",void 0),wc([ul({type:String}),xc("design:type",String)],kc.prototype,"href",void 0),wc([ul({type:String}),xc("design:type",String)],kc.prototype,"target",void 0),wc([dl("a"),xc("design:type",HTMLAnchorElement)],kc.prototype,"anchor",void 0),kc=wc([ll("wired-link")],kc);var _c=function(e,t,n,i){var o,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(s<3?o(r):s>3?o(t,n,r):o(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r},$c=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Rc=class extends fl{constructor(){super(...arguments),this.horizontal=!1,this.itemNodes=[],this.itemClickHandler=this.onItemClick.bind(this)}static get styles(){return[pl,fa`
      :host {
        display: inline-block;
        font-family: inherit;
        position: relative;
        padding: 5px;
        outline: none;
      }
      :host(:focus) path {
        stroke-width: 1.5;
      }
      ::slotted(wired-item) {
        display: block;
      }
      :host(.wired-horizontal) ::slotted(wired-item) {
        display: inline-block;
      }
      `]}render(){return Na`
    <slot id="slot" @slotchange="${()=>this.requestUpdate()}"></slot>
    <div id="overlay">
      <svg id="svg"></svg>
    </div>
    `}firstUpdated(){this.setAttribute("role","listbox"),this.tabIndex=+(this.getAttribute("tabindex")||0),this.refreshSelection(),this.addEventListener("click",this.itemClickHandler),this.addEventListener("keydown",(e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this.selectPrevious();break;case 39:case 40:e.preventDefault(),this.selectNext()}}))}updated(){if(super.updated(),this.horizontal?this.classList.add("wired-horizontal"):this.classList.remove("wired-horizontal"),!this.itemNodes.length){this.itemNodes=[];const e=this.shadowRoot.getElementById("slot").assignedNodes();if(e&&e.length)for(let t=0;t<e.length;t++){const n=e[t];"WIRED-ITEM"===n.tagName&&(n.setAttribute("role","option"),this.itemNodes.push(n))}}}onItemClick(e){e.stopPropagation(),this.selected=e.target.value,this.refreshSelection(),this.fireSelected()}refreshSelection(){this.lastSelectedItem&&(this.lastSelectedItem.selected=!1,this.lastSelectedItem.removeAttribute("aria-selected"));const e=this.shadowRoot.getElementById("slot").assignedNodes();if(e){let t=null;for(let n=0;n<e.length;n++){const i=e[n];if("WIRED-ITEM"===i.tagName){const e=i.value||"";if(this.selected&&e===this.selected){t=i;break}}}this.lastSelectedItem=t||void 0,this.lastSelectedItem&&(this.lastSelectedItem.selected=!0,this.lastSelectedItem.setAttribute("aria-selected","true")),this.value=t?{value:t.value||"",text:t.textContent||""}:void 0}}fireSelected(){this.fire("selected",{selected:this.selected})}selectPrevious(){const e=this.itemNodes;if(e.length){let t=-1;for(let n=0;n<e.length;n++)if(e[n]===this.lastSelectedItem){t=n;break}t<0?t=0:0===t?t=e.length-1:t--,this.selected=e[t].value||"",this.refreshSelection(),this.fireSelected()}}selectNext(){const e=this.itemNodes;if(e.length){let t=-1;for(let n=0;n<e.length;n++)if(e[n]===this.lastSelectedItem){t=n;break}t<0||t>=e.length-1?t=0:t++,this.selected=e[t].value||"",this.refreshSelection(),this.fireSelected()}}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){Dl(e,0,0,t[0],t[1],this.seed)}};_c([ul({type:Object}),$c("design:type",Object)],Rc.prototype,"value",void 0),_c([ul({type:String}),$c("design:type",String)],Rc.prototype,"selected",void 0),_c([ul({type:Boolean}),$c("design:type",Object)],Rc.prototype,"horizontal",void 0),Rc=_c([ll("wired-listbox")],Rc);var Sc=function(e,t,n,i){var o,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(s<3?o(r):s>3?o(t,n,r):o(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r},Ac=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Cc=class extends fl{constructor(){super(...arguments),this.value=0,this.min=0,this.max=100,this.percentage=!1}static get styles(){return[pl,fa`
      :host {
        display: inline-block;
        position: relative;
        width: 400px;
        height: 42px;
        font-family: sans-serif;
      }
      .labelContainer {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .progressLabel {
        color: var(--wired-progress-label-color, #000);
        font-size: var(--wired-progress-font-size, 14px);
        background: var(--wired-progress-label-background, rgba(255,255,255,0.9));
        padding: 2px 6px;
        border-radius: 4px;
        letter-spacing: 1.25px;
      }
      path.progbox {
        stroke: var(--wired-progress-color, rgba(0, 0, 200, 0.8));
        stroke-width: 2.75;
        fill: none;
      }
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
      }
      `]}render(){return Na`
    <div id="overlay" class="overlay">
      <svg></svg>
    </div>
    <div class="overlay labelContainer">
      <div class="progressLabel">${this.getProgressLabel()}</div>
    </div>
    `}getProgressLabel(){if(this.percentage){if(this.max===this.min)return"%";return Math.floor((this.value-this.min)/(this.max-this.min)*100)+"%"}return""+this.value}wiredRender(e=!1){super.wiredRender(e),this.refreshProgressFill()}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){Dl(e,2,2,t[0]-2,t[1]-2,this.seed)}refreshProgressFill(){if(this.progBox&&(this.progBox.parentElement&&this.progBox.parentElement.removeChild(this.progBox),this.progBox=void 0),this.svg){let e=0;const t=this.getBoundingClientRect();if(this.max>this.min){e=(this.value-this.min)/(this.max-this.min);const n=t.width*Math.max(0,Math.min(e,100));this.progBox=Ll([[0,0],[n,0],[n,t.height],[0,t.height]],this.seed),this.svg.appendChild(this.progBox),this.progBox.classList.add("progbox")}}}};Sc([ul({type:Number}),Ac("design:type",Object)],Cc.prototype,"value",void 0),Sc([ul({type:Number}),Ac("design:type",Object)],Cc.prototype,"min",void 0),Sc([ul({type:Number}),Ac("design:type",Object)],Cc.prototype,"max",void 0),Sc([ul({type:Boolean}),Ac("design:type",Object)],Cc.prototype,"percentage",void 0),Cc=Sc([ll("wired-progress")],Cc);var Oc=function(e,t,n,i){var o,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(s<3?o(r):s>3?o(t,n,r):o(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r},Ec=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let jc=class extends fl{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.focused=!1}static get styles(){return[pl,fa`
      :host {
        display: inline-block;
        font-family: inherit;
      }
      :host([disabled]) {
        opacity: 0.6 !important;
        cursor: default;
        pointer-events: none;
      }
      :host([disabled]) svg {
        background: rgba(0, 0, 0, 0.07);
      }

      #container {
        display: flex;
        flex-direction: row;
        position: relative;
        user-select: none;
        min-height: 24px;
        cursor: pointer;
      }
      span {
        margin-left: 1.5ex;
        line-height: 24px;
      }
      input {
        opacity: 0;
      }
      path {
        stroke: var(--wired-radio-icon-color, currentColor);
        stroke-width: var(--wired-radio-default-swidth, 0.7);
      }
      g path {
        stroke-width: 0;
        fill: var(--wired-radio-icon-color, currentColor);
      }
      #container.focused {
        --wired-radio-default-swidth: 1.5;
      }
      `]}focus(){this.input?this.input.focus():super.focus()}wiredRender(e=!1){super.wiredRender(e),this.refreshCheckVisibility()}render(){return Na`
    <label id="container" class="${this.focused?"focused":""}">
      <input type="checkbox" .checked="${this.checked}" ?disabled="${this.disabled}" 
        @change="${this.onChange}"
        @focus="${()=>this.focused=!0}"
        @blur="${()=>this.focused=!1}">
      <span><slot></slot></span>
      <div id="overlay"><svg></svg></div>
    </label>
    `}onChange(){this.checked=this.input.checked,this.refreshCheckVisibility(),this.fire("change",{checked:this.checked})}canvasSize(){return[24,24]}draw(e,t){Il(e,t[0]/2,t[1]/2,t[0],t[1],this.seed),this.svgCheck=Pl("g"),e.appendChild(this.svgCheck);const n=Math.max(.6*t[0],5),i=Math.max(.6*t[1],5);Il(this.svgCheck,t[0]/2,t[1]/2,n,i,this.seed)}refreshCheckVisibility(){this.svgCheck&&(this.svgCheck.style.display=this.checked?"":"none")}};Oc([ul({type:Boolean}),Ec("design:type",Object)],jc.prototype,"checked",void 0),Oc([ul({type:Boolean,reflect:!0}),Ec("design:type",Object)],jc.prototype,"disabled",void 0),Oc([ul({type:String}),Ec("design:type",String)],jc.prototype,"name",void 0),Oc([ul(),Ec("design:type",Object)],jc.prototype,"focused",void 0),Oc([dl("input"),Ec("design:type",HTMLInputElement)],jc.prototype,"input",void 0),jc=Oc([ll("wired-radio")],jc);var zc=function(e,t,n,i){var o,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(s<3?o(r):s>3?o(t,n,r):o(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r};let Bc=class extends rl{constructor(){super(...arguments),this.radioNodes=[],this.checkListener=this.handleChecked.bind(this)}static get styles(){return fa`
      :host {
        display: inline-block;
        font-family: inherit;
        outline: none;
      }
      :host ::slotted(*) {
        padding: var(--wired-radio-group-item-padding, 5px);
      }
    `}render(){return Na`<slot id="slot" @slotchange="${this.slotChange}"></slot>`}connectedCallback(){super.connectedCallback(),this.addEventListener("change",this.checkListener)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",this.checkListener)}handleChecked(e){const t=e.detail.checked,n=e.target,i=n.name||"";t?(this.selected=t&&i||"",this.fireSelected()):n.checked=!0}slotChange(){this.requestUpdate()}firstUpdated(){this.setAttribute("role","radiogroup"),this.tabIndex=+(this.getAttribute("tabindex")||0),this.addEventListener("keydown",(e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this.selectPrevious();break;case 39:case 40:e.preventDefault(),this.selectNext()}}))}updated(){const e=this.shadowRoot.getElementById("slot").assignedNodes();if(this.radioNodes=[],e&&e.length)for(let t=0;t<e.length;t++){const n=e[t];if("WIRED-RADIO"===n.tagName){this.radioNodes.push(n);const e=n.name||"";this.selected&&e===this.selected?n.checked=!0:n.checked=!1}}}selectPrevious(){const e=this.radioNodes;if(e.length){let t=null,n=-1;if(this.selected){for(let t=0;t<e.length;t++){if(e[t].name===this.selected){n=t;break}}n<0?t=e[0]:(n--,n<0&&(n=e.length-1),t=e[n])}else t=e[0];t&&(t.focus(),this.selected=t.name,this.fireSelected())}}selectNext(){const e=this.radioNodes;if(e.length){let t=null,n=-1;if(this.selected){for(let t=0;t<e.length;t++){if(e[t].name===this.selected){n=t;break}}n<0?t=e[0]:(n++,n>=e.length&&(n=0),t=e[n])}else t=e[0];t&&(t.focus(),this.selected=t.name,this.fireSelected())}}fireSelected(){gl(this,"selected",{selected:this.selected})}};zc([ul({type:String}),function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}("design:type",String)],Bc.prototype,"selected",void 0),Bc=zc([ll("wired-radio-group")],Bc);var Mc=function(e,t,n,i){var o,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(s<3?o(r):s>3?o(t,n,r):o(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r},Pc=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Tc=class extends fl{constructor(){super(...arguments),this.disabled=!1,this.placeholder="",this.autocomplete="",this.autocorrect="",this.autofocus=!1}static get styles(){return[pl,fa`
        :host {
          display: inline-block;
          position: relative;
          padding: 10px 40px 10px 5px;
          font-family: sans-serif;
          width: 180px;
          outline: none;
        }
        :host([disabled]) {
          opacity: 0.6 !important;
          cursor: default;
          pointer-events: none;
        }
        :host([disabled]) svg {
          background: rgba(0, 0, 0, 0.07);
        }
        input {
          display: block;
          width: 100%;
          box-sizing: border-box;
          outline: none;
          border: none;
          font-family: inherit;
          font-size: inherit;
          font-weight: inherit;
          color: inherit;
          padding: 6px;
        }
        
        input[type=search]::-ms-clear {  display: none; width : 0; height: 0; }
        input[type=search]::-ms-reveal {  display: none; width : 0; height: 0; }
        input[type="search"]::-webkit-search-decoration,
        input[type="search"]::-webkit-search-cancel-button,
        input[type="search"]::-webkit-search-results-button,
        input[type="search"]::-webkit-search-results-decoration {
          display: none;
        }

        .thicker path {
          stroke-width: 1.5;
        }

        button {
          position: absolute;
          top: 0;
          right: 2px;
          width: 32px;
          height: 100%;
          box-sizing: border-box;
          background: none;
          border: none;
          cursor: pointer;
          outline: none;
          opacity: 0;
        }
      `]}render(){return Na`
    <input type="search" placeholder="${this.placeholder}" ?disabled="${this.disabled}"
      autocomplete="${this.autocomplete}" ?autofocus="${this.autofocus}" 
      autocapitalize="${this.autocapitalize}" autocorrect="${this.autocorrect}" 
      @change="${this.refire}" @input="${this.refire}">
    <div id="overlay">
      <svg></svg>
    </div>
    <button @click="${()=>this.value=""}"></button>
    `}get input(){return this.textInput}get value(){const e=this.input;return e&&e.value||""}set value(e){if(this.shadowRoot){const t=this.input;t&&(t.value=e),this.refreshIconState()}else this.pendingValue=e}wiredRender(e=!1){super.wiredRender(e),this.refreshIconState()}firstUpdated(){this.value=this.pendingValue||this.value||this.getAttribute("value")||"",delete this.pendingValue}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){Dl(e,2,2,t[0]-2,t[1]-2,this.seed),this.searchIcon=Pl("g"),this.searchIcon.classList.add("thicker"),e.appendChild(this.searchIcon),Il(this.searchIcon,t[0]-30,(t[1]-30)/2+10,20,20,this.seed),Fl(this.searchIcon,t[0]-10,(t[1]-30)/2+30,t[0]-25,(t[1]-30)/2+15,this.seed),this.closeIcon=Pl("g"),this.closeIcon.classList.add("thicker"),e.appendChild(this.closeIcon),Fl(this.closeIcon,t[0]-33,(t[1]-30)/2+2,t[0]-7,(t[1]-30)/2+28,this.seed),Fl(this.closeIcon,t[0]-7,(t[1]-30)/2+2,t[0]-33,(t[1]-30)/2+28,this.seed)}refreshIconState(){this.searchIcon&&this.closeIcon&&(this.searchIcon.style.display=this.value.trim()?"none":"",this.closeIcon.style.display=this.value.trim()?"":"none")}refire(e){this.refreshIconState(),e.stopPropagation(),this.fire(e.type,{sourceEvent:e})}};Mc([ul({type:Boolean,reflect:!0}),Pc("design:type",Object)],Tc.prototype,"disabled",void 0),Mc([ul({type:String}),Pc("design:type",Object)],Tc.prototype,"placeholder",void 0),Mc([ul({type:String}),Pc("design:type",Object)],Tc.prototype,"autocomplete",void 0),Mc([ul({type:String}),Pc("design:type",Object)],Tc.prototype,"autocorrect",void 0),Mc([ul({type:Boolean}),Pc("design:type",Object)],Tc.prototype,"autofocus",void 0),Mc([dl("input"),Pc("design:type",HTMLInputElement)],Tc.prototype,"textInput",void 0),Tc=Mc([ll("wired-search-input")],Tc);var Dc=function(e,t,n,i){var o,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(s<3?o(r):s>3?o(t,n,r):o(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r},Fc=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Ic=class extends fl{constructor(){super(...arguments),this.min=0,this.max=100,this.step=1,this.disabled=!1,this.canvasWidth=300}static get styles(){return[pl,fa`
      :host {
        display: inline-block;
        position: relative;
        width: 300px;
        box-sizing: border-box;
      }
      :host([disabled]) {
        opacity: 0.45 !important;
        cursor: default;
        pointer-events: none;
        background: rgba(0, 0, 0, 0.07);
        border-radius: 5px;
      }
      input[type=range] {
        width: 100%;
        height: 40px;
        box-sizing: border-box;
        margin: 0;
        -webkit-appearance: none;
        background: transparent;
        outline: none;
        position: relative;
      }
      input[type=range]:focus {
        outline: none;
      }
      input[type=range]::-ms-track {
        width: 100%;
        cursor: pointer;
        background: transparent;
        border-color: transparent;
        color: transparent;
      }
      input[type=range]::-moz-focus-outer {
        outline: none;
        border: 0;
      }
      input[type=range]::-moz-range-thumb {
        border-radius: 50px;
        background: none;
        cursor: pointer;
        border: none;
        margin: 0;
        height: 20px;
        width: 20px;
        line-height: 1;
      }
      input[type=range]::-webkit-slider-thumb {
        -webkit-appearance: none;
        border-radius: 50px;
        background: none;
        cursor: pointer;
        border: none;
        height: 20px;
        width: 20px;
        margin: 0;
        line-height: 1;
      }
      .knob{
        fill: var(--wired-slider-knob-color, rgb(51, 103, 214));
        stroke: var(--wired-slider-knob-color, rgb(51, 103, 214));
      }
      .bar {
        stroke: var(--wired-slider-bar-color, rgb(0, 0, 0));
      }
      input:focus + div svg .knob {
        stroke: var(--wired-slider-knob-outline-color, #000);
        fill-opacity: 0.8;
      }
      `]}get value(){return this.input?+this.input.value:this.min}set value(e){this.input?this.input.value=`${e}`:this.pendingValue=e,this.updateThumbPosition()}firstUpdated(){this.value=this.pendingValue||+(this.getAttribute("value")||this.value||this.min),delete this.pendingValue}render(){return Na`
    <div id="container">
      <input type="range" 
        min="${this.min}"
        max="${this.max}"
        step="${this.step}"
        ?disabled="${this.disabled}"
        @input="${this.onInput}">
      <div id="overlay">
        <svg></svg>
      </div>
    </div>
    `}focus(){this.input?this.input.focus():super.focus()}onInput(e){e.stopPropagation(),this.updateThumbPosition(),this.input&&this.fire("change",{value:+this.input.value})}wiredRender(e=!1){super.wiredRender(e),this.updateThumbPosition()}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){this.canvasWidth=t[0];const n=Math.round(t[1]/2);Fl(e,0,n,t[0],n,this.seed).classList.add("bar"),this.knob=Il(e,10,n,20,20,this.seed),this.knob.classList.add("knob")}updateThumbPosition(){if(this.input){const e=+this.input.value,t=Math.max(this.step,this.max-this.min),n=(e-this.min)/t;this.knob&&(this.knob.style.transform=`translateX(${n*(this.canvasWidth-20)}px)`)}}};Dc([ul({type:Number}),Fc("design:type",Object)],Ic.prototype,"min",void 0),Dc([ul({type:Number}),Fc("design:type",Object)],Ic.prototype,"max",void 0),Dc([ul({type:Number}),Fc("design:type",Object)],Ic.prototype,"step",void 0),Dc([ul({type:Boolean,reflect:!0}),Fc("design:type",Object)],Ic.prototype,"disabled",void 0),Dc([dl("input"),Fc("design:type",HTMLInputElement)],Ic.prototype,"input",void 0),Ic=Dc([ll("wired-slider")],Ic);var Lc=function(e,t,n,i){var o,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(s<3?o(r):s>3?o(t,n,r):o(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r},Nc=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Uc=class extends fl{constructor(){super(...arguments),this.spinning=!1,this.duration=1500,this.value=0,this.timerstart=0,this.frame=0}static get styles(){return[pl,fa`
        :host {
          display: inline-block;
          position: relative;
        }
        path {
          stroke: currentColor;
          stroke-opacity: 0.65;
          stroke-width: 1.5;
          fill: none;
        }
        .knob {
          stroke-width: 2.8 !important;
          stroke-opacity: 1;
        }
      `]}render(){return Na`<svg></svg>`}canvasSize(){return[76,76]}draw(e,t){Il(e,t[0]/2,t[1]/2,Math.floor(.8*t[0]),Math.floor(.8*t[1]),this.seed),this.knob=Nl(0,0,20,20,this.seed),this.knob.classList.add("knob"),e.appendChild(this.knob),this.updateCursor()}updateCursor(){if(this.knob){const e=[Math.round(38+25*Math.cos(this.value*Math.PI*2)),Math.round(38+25*Math.sin(this.value*Math.PI*2))];this.knob.style.transform=`translate3d(${e[0]}px, ${e[1]}px, 0) rotateZ(${Math.round(360*this.value*2)}deg)`}}updated(){super.updated(),this.spinning?this.startSpinner():this.stopSpinner()}startSpinner(){this.stopSpinner(),this.value=0,this.timerstart=0,this.nextTick()}stopSpinner(){this.frame&&(window.cancelAnimationFrame(this.frame),this.frame=0)}nextTick(){this.frame=window.requestAnimationFrame((e=>this.tick(e)))}tick(e){this.spinning?(this.timerstart||(this.timerstart=e),this.value=Math.min(1,(e-this.timerstart)/this.duration),this.updateCursor(),this.value>=1&&(this.value=0,this.timerstart=0),this.nextTick()):this.frame=0}};Lc([ul({type:Boolean}),Nc("design:type",Object)],Uc.prototype,"spinning",void 0),Lc([ul({type:Number}),Nc("design:type",Object)],Uc.prototype,"duration",void 0),Uc=Lc([ll("wired-spinner")],Uc);var Hc=function(e,t,n,i){var o,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(s<3?o(r):s>3?o(t,n,r):o(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r},Vc=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let qc=class extends fl{constructor(){super(),this.name="",this.label="",window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver((()=>{this.svg&&this.wiredRender()})))}static get styles(){return[pl,fa`
        :host {
          display: inline-block;
          position: relative;
          padding: 10px;
        }
      `]}render(){return Na`
    <div>
      <slot @slotchange="${this.wiredRender}"></slot>
    </div>
    <div id="overlay"><svg></svg></div>
    `}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.resizeObserver&&this.resizeObserver.observe?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0}))}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler)}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){Dl(e,2,2,t[0]-4,t[1]-4,this.seed)}};Hc([ul({type:String}),Vc("design:type",Object)],qc.prototype,"name",void 0),Hc([ul({type:String}),Vc("design:type",Object)],qc.prototype,"label",void 0),qc=Hc([ll("wired-tab"),Vc("design:paramtypes",[])],qc);var Wc=function(e,t,n,i){var o,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(s<3?o(r):s>3?o(t,n,r):o(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r},Gc=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Kc=class extends rl{constructor(){super(...arguments),this.pages=[],this.pageMap=new Map}static get styles(){return[pl,fa`
        :host {
          display: block;
          opacity: 1;
        }
        ::slotted(.hidden) {
          display: none !important;
        }
    
        :host ::slotted(.hidden) {
          display: none !important;
        }
        #bar {
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          -ms-flex-direction: row;
          -webkit-flex-direction: row;
          flex-direction: row;
        }
      `]}render(){return Na`
    <div id="bar">
      ${this.pages.map((e=>Na`
      <wired-item role="tab" .value="${e.name}" .selected="${e.name===this.selected}" ?aria-selected="${e.name===this.selected}"
        @click="${()=>this.selected=e.name}">${e.label||e.name}</wired-item>
      `))}
    </div>
    <div>
      <slot @slotchange="${this.mapPages}"></slot>
    </div>
    `}mapPages(){if(this.pages=[],this.pageMap.clear(),this.slotElement){const e=this.slotElement.assignedNodes();if(e&&e.length){for(let t=0;t<e.length;t++){const n=e[t];if(n.nodeType===Node.ELEMENT_NODE&&"wired-tab"===n.tagName.toLowerCase()){const e=n;this.pages.push(e);const t=e.getAttribute("name")||"";t&&t.trim().split(" ").forEach((t=>{t&&this.pageMap.set(t,e)}))}}this.selected||this.pages.length&&(this.selected=this.pages[0].name),this.requestUpdate()}}}firstUpdated(){this.mapPages(),this.tabIndex=+(this.getAttribute("tabindex")||0),this.addEventListener("keydown",(e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this.selectPrevious();break;case 39:case 40:e.preventDefault(),this.selectNext()}}))}updated(){const e=this.getElement();for(let t=0;t<this.pages.length;t++){const n=this.pages[t];n===e?n.classList.remove("hidden"):n.classList.add("hidden")}this.current=e||void 0,this.current&&this.current.wiredRender&&requestAnimationFrame((()=>requestAnimationFrame((()=>this.current.wiredRender()))))}getElement(){let e;return this.selected&&(e=this.pageMap.get(this.selected)),e||(e=this.pages[0]),e||null}selectPrevious(){const e=this.pages;if(e.length){let t=-1;for(let n=0;n<e.length;n++)if(e[n]===this.current){t=n;break}t<0?t=0:0===t?t=e.length-1:t--,this.selected=e[t].name||""}}selectNext(){const e=this.pages;if(e.length){let t=-1;for(let n=0;n<e.length;n++)if(e[n]===this.current){t=n;break}t<0||t>=e.length-1?t=0:t++,this.selected=e[t].name||""}}};Wc([ul({type:String}),Gc("design:type",String)],Kc.prototype,"selected",void 0),Wc([dl("slot"),Gc("design:type",HTMLSlotElement)],Kc.prototype,"slotElement",void 0),Kc=Wc([ll("wired-tabs")],Kc);var Zc=function(e,t,n,i){var o,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(s<3?o(r):s>3?o(t,n,r):o(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r},Yc=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let Xc=class extends fl{constructor(){super(...arguments),this.disabled=!1,this.rows=2,this.maxrows=0,this.autocomplete="",this.autofocus=!1,this.inputmode="",this.placeholder="",this.required=!1,this.readonly=!1}static get styles(){return[pl,fa`
        :host {
          display: inline-block;
          position: relative;
          font-family: sans-serif;
          width: 400px;
          outline: none;
          padding: 4px;
        }
        :host([disabled]) {
          opacity: 0.6 !important;
          cursor: default;
          pointer-events: none;
        }
        :host([disabled]) svg {
          background: rgba(0, 0, 0, 0.07);
        }
        textarea {
          position: relative;
          outline: none;
          border: none;
          resize: none;
          background: inherit;
          color: inherit;
          width: 100%;
          font-size: inherit;
          font-family: inherit;
          line-height: inherit;
          text-align: inherit;
          padding: 10px;
          box-sizing: border-box;
        }
      `]}render(){return Na`
    <textarea id="textarea" autocomplete="${this.autocomplete}" ?autofocus="${this.autofocus}" inputmode="${this.inputmode}"
      placeholder="${this.placeholder}" ?readonly="${this.readonly}" ?required="${this.required}" ?disabled="${this.disabled}"
      rows="${this.rows}" minlength="${this.minlength}" maxlength="${this.maxlength}"
      @change="${this.refire}" @input="${this.refire}"></textarea>
    <div id="overlay">
      <svg></svg>
    </div>
    `}get textarea(){return this.textareaInput}get value(){const e=this.textarea;return e&&e.value||""}set value(e){if(this.shadowRoot){const t=this.textarea;if(t)return void(t.value=e)}this.pendingValue=e}firstUpdated(){this.value=this.pendingValue||this.value||this.getAttribute("value")||"",delete this.pendingValue}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){Dl(e,4,4,t[0]-4,t[1]-4,this.seed)}refire(e){e.stopPropagation(),this.fire(e.type,{sourceEvent:e})}};Zc([ul({type:Boolean,reflect:!0}),Yc("design:type",Object)],Xc.prototype,"disabled",void 0),Zc([ul({type:Number}),Yc("design:type",Object)],Xc.prototype,"rows",void 0),Zc([ul({type:Number}),Yc("design:type",Object)],Xc.prototype,"maxrows",void 0),Zc([ul({type:String}),Yc("design:type",Object)],Xc.prototype,"autocomplete",void 0),Zc([ul({type:Boolean}),Yc("design:type",Object)],Xc.prototype,"autofocus",void 0),Zc([ul({type:String}),Yc("design:type",Object)],Xc.prototype,"inputmode",void 0),Zc([ul({type:String}),Yc("design:type",Object)],Xc.prototype,"placeholder",void 0),Zc([ul({type:Boolean}),Yc("design:type",Object)],Xc.prototype,"required",void 0),Zc([ul({type:Boolean}),Yc("design:type",Object)],Xc.prototype,"readonly",void 0),Zc([ul({type:Number}),Yc("design:type",Number)],Xc.prototype,"minlength",void 0),Zc([ul({type:Number}),Yc("design:type",Number)],Xc.prototype,"maxlength",void 0),Zc([dl("textarea"),Yc("design:type",HTMLTextAreaElement)],Xc.prototype,"textareaInput",void 0),Xc=Zc([ll("wired-textarea")],Xc);var Jc=function(e,t,n,i){var o,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(s<3?o(r):s>3?o(t,n,r):o(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r},Qc=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let eu=class extends fl{constructor(){super(...arguments),this.checked=!1,this.disabled=!1}static get styles(){return[pl,fa`
      :host {
        display: inline-block;
        cursor: pointer;
        position: relative;
        outline: none;
      }
      :host([disabled]) {
        opacity: 0.4 !important;
        cursor: default;
        pointer-events: none;
      }
      :host([disabled]) svg {
        background: rgba(0, 0, 0, 0.07);
      }
      input {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        cursor: pointer;
        opacity: 0;
      }
      .knob {
        transition: transform 0.3s ease;
      }
      .knob path {
        stroke-width: 0.7;
      }
      .knob.checked {
        transform: translateX(48px);
      }
      path.knobfill {
        stroke-width: 3 !important;
        fill: transparent;
      }
      .knob.unchecked path.knobfill {
        stroke: var(--wired-toggle-off-color, gray);
      }
      .knob.checked path.knobfill {
        stroke: var(--wired-toggle-on-color, rgb(63, 81, 181));
      }
      `]}render(){return Na`
    <div style="position: relative;">
      <svg></svg>
      <input type="checkbox" .checked="${this.checked}" ?disabled="${this.disabled}"  @change="${this.onChange}">
    </div>
    `}focus(){this.input?this.input.focus():super.focus()}wiredRender(e=!1){super.wiredRender(e),this.refreshKnob()}onChange(){this.checked=this.input.checked,this.refreshKnob(),this.fire("change",{checked:this.checked})}canvasSize(){return[80,34]}draw(e,t){Dl(e,16,8,t[0]-32,18,this.seed).classList.add("toggle-bar"),this.knob=Pl("g"),this.knob.classList.add("knob"),e.appendChild(this.knob);const n=Nl(16,16,32,32,this.seed);n.classList.add("knobfill"),this.knob.appendChild(n),Il(this.knob,16,16,32,32,this.seed)}refreshKnob(){if(this.knob){const e=this.knob.classList;this.checked?(e.remove("unchecked"),e.add("checked")):(e.remove("checked"),e.add("unchecked"))}}};Jc([ul({type:Boolean}),Qc("design:type",Object)],eu.prototype,"checked",void 0),Jc([ul({type:Boolean,reflect:!0}),Qc("design:type",Object)],eu.prototype,"disabled",void 0),Jc([dl("input"),Qc("design:type",HTMLInputElement)],eu.prototype,"input",void 0),eu=Jc([ll("wired-toggle")],eu);var tu=function(e,t,n,i){var o,s=arguments.length,r=s<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(s<3?o(r):s>3?o(t,n,r):o(t,n))||r);return s>3&&r&&Object.defineProperty(t,n,r),r},nu=function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};let iu=class extends fl{constructor(){super(),this.src="",this.autoplay=!1,this.loop=!1,this.muted=!1,this.playsinline=!1,this.playing=!1,this.timeDisplay="",window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver((()=>{this.svg&&this.wiredRender()})))}static get styles(){return[pl,fa`
        :host {
          display: inline-block;
          position: relative;
          line-height: 1;
          padding: 3px 3px 68px;
          --wired-progress-color: var(--wired-video-highlight-color, rgb(51, 103, 214));
          --wired-slider-knob-color: var(--wired-video-highlight-color, rgb(51, 103, 214));
        }
        video {
          display: block;
          box-sizing: border-box;
          max-width: 100%;
          max-height: 100%;
        }
        path {
          stroke-width: 1;
        }
        #controls {
          position: absolute;
          pointer-events: auto;
          left: 0;
          bottom: 0;
          width: 100%;
          box-sizing: border-box;
          height: 70px;
        }
        .layout.horizontal {
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          -ms-flex-direction: row;
          -webkit-flex-direction: row;
          flex-direction: row;
          -ms-flex-align: center;
          -webkit-align-items: center;
          align-items: center;
          padding: 5px 10px;
        }
        .flex {
          -ms-flex: 1 1 0.000000001px;
          -webkit-flex: 1;
          flex: 1;
          -webkit-flex-basis: 0.000000001px;
          flex-basis: 0.000000001px;
        }
        wired-progress {
          display: block;
          width: 100%;
          box-sizing: border-box;
          height: 20px;
          --wired-progress-label-color: transparent;
          --wired-progress-label-background: transparent;
        }
        wired-icon-button span {
          font-size: 16px;
          line-height: 16px;
          width: 16px;
          height: 16px;
          padding: 0px;
          font-family: sans-serif;
          display: inline-block;
        }
        #timeDisplay {
          padding: 0 20px 0 8px;
          font-size: 13px;
        }
        wired-slider {
          display: block;
          max-width: 200px;
          margin: 0 6px 0 auto;
        }
      `]}render(){return Na`
    <video 
      .autoplay="${this.autoplay}"
      .loop="${this.loop}"
      .muted="${this.muted}"
      .playsinline="${this.playsinline}"
      src="${this.src}"
      @play="${()=>this.playing=!0}"
      @pause="${()=>this.playing=!1}"
      @canplay="${this.canPlay}"
      @timeupdate="${this.updateTime}">
    </video>
    <div id="overlay">
      <svg></svg>
    </div>
    <div id="controls">
      <wired-progress></wired-progress>
      <div class="horizontal layout center">
        <wired-icon-button @click="${this.togglePause}">
          <span>${this.playing?"||":"▶"}</span>
        </wired-icon-button>
        <div id="timeDisplay">${this.timeDisplay}</div>
        <div class="flex">
          <wired-slider @change="${this.volumeChange}"></wired-slider>
        </div>
        <div style="width: 24px; height: 24px;">
          <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g><path style="stroke: none; fill: currentColor;" d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"></path></g></svg>
        </div>
      </div>
    </div>
    `}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.resizeObserver&&this.resizeObserver.observe?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0}))}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler)}wiredRender(){super.wiredRender(),this.progressBar&&this.progressBar.wiredRender(!0)}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){Dl(e,2,2,t[0]-4,t[1]-4,this.seed)}updateTime(){this.video&&this.progressBar&&(this.progressBar.value=this.video.duration?Math.round(this.video.currentTime/this.video.duration*100):0,this.timeDisplay=`${this.getTimeDisplay(this.video.currentTime)} / ${this.getTimeDisplay(this.video.duration)}`)}getTimeDisplay(e){const t=Math.floor(e/60);return`${t}:${Math.round(e-60*t)}`}togglePause(){this.video&&(this.playing?this.video.pause():this.video.play())}volumeChange(){this.video&&this.slider&&(this.video.volume=this.slider.value/100)}canPlay(){this.slider&&this.video&&(this.slider.value=100*this.video.volume)}};tu([ul({type:String}),nu("design:type",Object)],iu.prototype,"src",void 0),tu([ul({type:Boolean}),nu("design:type",Object)],iu.prototype,"autoplay",void 0),tu([ul({type:Boolean}),nu("design:type",Object)],iu.prototype,"loop",void 0),tu([ul({type:Boolean}),nu("design:type",Object)],iu.prototype,"muted",void 0),tu([ul({type:Boolean}),nu("design:type",Object)],iu.prototype,"playsinline",void 0),tu([ul(),nu("design:type",Object)],iu.prototype,"playing",void 0),tu([ul(),nu("design:type",Object)],iu.prototype,"timeDisplay",void 0),tu([dl("wired-progress"),nu("design:type",Cc)],iu.prototype,"progressBar",void 0),tu([dl("wired-slider"),nu("design:type",Ic)],iu.prototype,"slider",void 0),tu([dl("video"),nu("design:type",HTMLVideoElement)],iu.prototype,"video",void 0),iu=tu([ll("wired-video"),nu("design:paramtypes",[])],iu);var ou={components:{Button:Gr,Demo:ta}};const su=qi("按钮"),ru=qi("按钮1"),au=qi(" 按钮2"),lu=qi("按钮3");function cu(e){e.__sourceCode='<template>\n  <div>\n    <div>\n      <Button>按钮</Button>\n      <Button>按钮1</Button>\n      <Button theme="text"> 按钮2</Button>\n      <Button theme="link">按钮3</Button>\n    </div>\n  </div>\n</template>\n<script lang="ts">\nimport Demo from "./Demo.vue";\nimport Button from "../lib/Button.vue";\nexport default {\n  components: {Button, Demo}\n}\n<\/script>',e.__sourceCodeTitle=" 常规使用 "}cu(ou),ou.render=function(e,t,n,i,o,s){const r=jn("Button");return ji(),Pi("div",null,[Ui("div",null,[Hi(r,null,{default:Xt((()=>[su])),_:1}),Hi(r,null,{default:Xt((()=>[ru])),_:1}),Hi(r,{theme:"text"},{default:Xt((()=>[au])),_:1}),Hi(r,{theme:"link"},{default:Xt((()=>[lu])),_:1})])])};var uu={components:{Button:Gr}};const du=qi("大按钮"),hu=qi("普通按钮"),pu=qi(" 小按钮"),fu=qi("大按钮"),gu=qi("普通按钮"),vu=qi(" 小按钮"),mu=qi("大按钮"),bu=qi("普通按钮"),yu=qi(" 小按钮");function wu(e){e.__sourceCode='<template>\n  <div>\n    <div>\n      <Button size="big">大按钮</Button>\n      <Button>普通按钮</Button>\n      <Button size="small"> 小按钮</Button>\n    </div>\n    <div>\n      <Button theme=\'link\' size="big">大按钮</Button>\n      <Button theme="link">普通按钮</Button>\n      <Button theme="link" size="small"> 小按钮</Button>\n    </div>\n    <div>\n      <Button theme="text" size="big">大按钮</Button>\n      <Button theme="text">普通按钮</Button>\n      <Button theme="text" size="small"> 小按钮</Button>\n    </div>\n  </div>\n</template>\n<script lang="ts">\nimport Button from \'../lib/Button.vue\';\n\nexport default {\n  components: {Button}\n};\n<\/script>',e.__sourceCodeTitle=" 支持size "}wu(uu),uu.render=function(e,t,n,i,o,s){const r=jn("Button");return ji(),Pi("div",null,[Ui("div",null,[Hi(r,{size:"big"},{default:Xt((()=>[du])),_:1}),Hi(r,null,{default:Xt((()=>[hu])),_:1}),Hi(r,{size:"small"},{default:Xt((()=>[pu])),_:1})]),Ui("div",null,[Hi(r,{theme:"link",size:"big"},{default:Xt((()=>[fu])),_:1}),Hi(r,{theme:"link"},{default:Xt((()=>[gu])),_:1}),Hi(r,{theme:"link",size:"small"},{default:Xt((()=>[vu])),_:1})]),Ui("div",null,[Hi(r,{theme:"text",size:"big"},{default:Xt((()=>[mu])),_:1}),Hi(r,{theme:"text"},{default:Xt((()=>[bu])),_:1}),Hi(r,{theme:"text",size:"small"},{default:Xt((()=>[yu])),_:1})])])};var xu={components:{Button:Gr}};const ku=qi("主要按钮"),_u=qi("普通按钮"),$u=qi("危险按钮"),Ru=qi("主要按钮"),Su=qi("普通按钮"),Au=qi("危险按钮"),Cu=qi("主要按钮"),Ou=qi("普通按钮"),Eu=qi("危险按钮");function ju(e){e.__sourceCode='<template>\n  <div>\n    <Button level="main">主要按钮</Button>\n    <Button>普通按钮</Button>\n    <Button level="danger">危险按钮</Button>\n  </div>\n  <div>\n    <Button theme="link" level="main">主要按钮</Button>\n    <Button theme="link">普通按钮</Button>\n    <Button theme="link" level="danger">危险按钮</Button>\n  </div>\n  <div>\n    <Button theme="text" level="main">主要按钮</Button>\n    <Button theme="text">普通按钮</Button>\n    <Button theme="text" level="danger">危险按钮</Button>\n  </div>\n</template>\n<script lang="ts">\nimport Button from \'../lib/Button.vue\';\n\nexport default {\n  components: {Button}\n};\n<\/script>',e.__sourceCodeTitle=" 支持level "}ju(xu),xu.render=function(e,t,n,i,o,s){const r=jn("Button");return ji(),Pi(Ri,null,[Ui("div",null,[Hi(r,{level:"main"},{default:Xt((()=>[ku])),_:1}),Hi(r,null,{default:Xt((()=>[_u])),_:1}),Hi(r,{level:"danger"},{default:Xt((()=>[$u])),_:1})]),Ui("div",null,[Hi(r,{theme:"link",level:"main"},{default:Xt((()=>[Ru])),_:1}),Hi(r,{theme:"link"},{default:Xt((()=>[Su])),_:1}),Hi(r,{theme:"link",level:"danger"},{default:Xt((()=>[Au])),_:1})]),Ui("div",null,[Hi(r,{theme:"text",level:"main"},{default:Xt((()=>[Cu])),_:1}),Hi(r,{theme:"text"},{default:Xt((()=>[Ou])),_:1}),Hi(r,{theme:"text",level:"danger"},{default:Xt((()=>[Eu])),_:1})])],64)};var zu={components:{Demo:ta,Button:Gr}};const Bu=qi("禁用按钮"),Mu=qi("禁用按钮"),Pu=qi("禁用按钮");function Tu(e){e.__sourceCode='<template>\n  <div>\n    <Button theme="link" disabled>禁用按钮</Button>\n    <Button disabled>禁用按钮</Button>\n    <Button theme="text" disabled>禁用按钮</Button>\n  </div>\n</template>\n<script lang="ts">\nimport Demo from \'./Demo.vue\';\nimport Button from \'../lib/Button.vue\';\n\nexport default {\n  components: {Demo, Button}\n};\n<\/script>',e.__sourceCodeTitle=" 支持disabled "}Tu(zu),zu.render=function(e,t,n,i,o,s){const r=jn("Button");return ji(),Pi("div",null,[Hi(r,{theme:"link",disabled:""},{default:Xt((()=>[Bu])),_:1}),Hi(r,{disabled:""},{default:Xt((()=>[Mu])),_:1}),Hi(r,{theme:"text",disabled:""},{default:Xt((()=>[Pu])),_:1})])};var Du={components:{Demo:ta,Button:Gr}};const Fu=qi("加载完毕"),Iu=qi("加载中");function Lu(e){e.__sourceCode="<template>\n  <div>\n    <Button>加载完毕</Button>\n    <Button loading>加载中</Button>\n  </div>\n</template>\n<script lang=\"ts\">\nimport Demo from './Demo.vue';\nimport Button from '../lib/Button.vue';\n\nexport default {\n  components: {Demo, Button}\n};\n<\/script>",e.__sourceCodeTitle=" 支持loading "}Lu(Du),Du.render=function(e,t,n,i,o,s){const r=jn("Button");return ji(),Pi("div",null,[Hi(r,null,{default:Xt((()=>[Fu])),_:1}),Hi(r,{loading:""},{default:Xt((()=>[Iu])),_:1})])};var Nu={components:{Demo:ta}};const Uu=qi(" 返回Switch组件 ");function Hu(e){e.__sourceCode='<template>\n  <router-link to="/doc/switch">\n    <wired-button elevation="8">\n      返回Switch组件\n    </wired-button>\n  </router-link>\n</template>\n<script lang="ts">\nimport Demo from \'./Demo.vue\';\nexport default {\n  components: {Demo}\n};\n<\/script>',e.__sourceCodeTitle=" 创新样式 "}Hu(Nu),Nu.render=function(e,t,n,i,o,s){const r=jn("wired-button"),a=jn("router-link");return ji(),Ti(a,{to:"/doc/switch"},{default:Xt((()=>[Hi(r,{elevation:"8"},{default:Xt((()=>[Uu])),_:1})])),_:1})};var Vu={components:{Demo:ta,Button:Gr},setup:()=>({Button1Demo:ou,Button2Demo:uu,Button3Demo:xu,Button4Demo:zu,Button5Demo:Du,Button6Demo:Nu})};const qu=Ui("h1",null,"Button示例",-1);Vu.render=function(e,t,n,i,o,s){const r=jn("Demo");return ji(),Pi("div",null,[qu,Hi(r,{component:i.Button1Demo},null,8,["component"]),Hi(r,{component:i.Button2Demo},null,8,["component"]),Hi(r,{component:i.Button3Demo},null,8,["component"]),Hi(r,{component:i.Button4Demo},null,8,["component"]),Hi(r,{component:i.Button5Demo},null,8,["component"]),Hi(r,{component:i.Button6Demo},null,8,["component"])])};var Wu={setup(e,t){const n=ht(!1),i=()=>{t.emit("update:visible",!1)};return{close:i,onClickOverlay:()=>{e.closeOnClickOverlay&&i()},ok:()=>{n.value=!0,setTimeout((()=>{n.value=!1,t.emit("update:visible",!1)}),2e3)},cancel:()=>{t.emit("cancel"),i()},loading:n}},props:{visible:{type:Boolean,default:!1},closeOnClickOverlay:{type:Boolean,default:!0}},components:{Button:Gr}};const Gu={class:"snow-dialog-wrapper"},Ku={class:"snow-dialog"},Zu=qi("OK"),Yu=qi("Cancel");Wu.render=function(e,t,n,i,o,s){const r=jn("Button");return n.visible?(ji(),Ti($i,{key:0,to:"body"},[Ui("div",{class:"snow-dialog-overlay",onClick:t[0]||(t[0]=(...e)=>i.onClickOverlay&&i.onClickOverlay(...e))}," Dialog示例 "),Ui("div",Gu,[Ui("div",Ku,[Ui("header",null,[Dn(e.$slots,"title"),Ui("span",{onClick:t[1]||(t[1]=(...e)=>i.close&&i.close(...e)),class:"snow-dialog-close"})]),Ui("main",null,[Dn(e.$slots,"content")]),Ui("footer",null,[Hi(r,{onClick:i.ok,loading:i.loading},{default:Xt((()=>[Zu])),_:1},8,["onClick","loading"]),Hi(r,{onClick:i.cancel},{default:Xt((()=>[Yu])),_:1},8,["onClick"])])])])])):Gi("v-if",!0)};const Xu=e=>{const{title:t,content:n}=e,i=document.createElement("div");document.body.appendChild(i);const o=Eo({render:()=>co(Wu,{visible:!0,"onUpdate:visible":e=>{!1===e&&(o.unmount(i),i.remove())}},{title:t,content:n})});o.mount(i)};var Ju={components:{Dialog:Wu,Button:Gr},setup(){const e=ht(!1);return{toggle:()=>{e.value=!e.value},x:e,showDialog:()=>{Xu({title:"你好",content:"你好2"})}}}};const Qu=qi("toggle"),ed=Ui("strong",null,"加粗的可自定义标题",-1),td=Ui("div",null,"1",-1),nd=Ui("div",null,"2",-1);function id(e){e.__sourceCode="<template>\n  <div>\n    <Button @click=\"toggle\">toggle</Button>\n    <Dialog v-model:visible=\"x\" :close-on-click-overlay=\"false\">\n      <template v-slot:title>\n        <strong>加粗的可自定义标题</strong>\n      </template>\n      <template v-slot:content>\n        <div>1</div>\n        <div>2</div>\n      </template>\n    </Dialog>\n  </div>\n</template>\n<script lang=\"ts\">\nimport Dialog from '../lib/Dialog.vue'\nimport Button from '../lib/Button.vue'\nimport {openDialog} from '../lib/openDialog.ts';\nimport {ref} from 'vue';\nexport default {\n  components: {\n    Dialog,\n    Button\n  },\n  setup() {\n    const showDialog = () => {\n      openDialog({\n        title: '你好',\n        content: '你好2'\n      });\n    };\n    const x = ref(false);\n    const toggle = () => {\n      x.value = !(x.value);\n    };\n    return {toggle, x, showDialog};\n  }\n};\n<\/script>",e.__sourceCodeTitle=" 常规使用 "}id(Ju),Ju.render=function(e,t,n,i,o,s){const r=jn("Button"),a=jn("Dialog");return ji(),Pi("div",null,[Hi(r,{onClick:i.toggle},{default:Xt((()=>[Qu])),_:1},8,["onClick"]),Hi(a,{visible:i.x,"onUpdate:visible":t[0]||(t[0]=e=>i.x=e),"close-on-click-overlay":!1},{title:Xt((()=>[ed])),content:Xt((()=>[td,nd])),_:1},8,["visible"])])};var od={components:{Demo:ta,Button:Gr},setup:()=>({showDialog:()=>{Xu({title:co("strong",{},"标题"),content:"你好",ok(){console.log("ok")},cancel(){console.log("cancel")}})}})};const sd=qi("打开对话框");function rd(e){e.__sourceCode="<template>\n  <div>\n    <Button @click=\"showDialog\">打开对话框</Button>\n  </div>\n</template>\n<script lang=\"ts\">\nimport Demo from './Demo.vue';\nimport Button from '../lib/Button.vue';\nimport {ref, h} from 'vue';\nimport {openDialog} from '../lib/openDialog';\n\nexport default {\n  components: {Demo, Button},\n  setup() {\n    const showDialog = () => {\n      openDialog({\n        title: h('strong', {}, '标题'),\n        content: '你好',\n        ok() {\n          console.log('ok');\n        },\n        cancel() {\n          console.log('cancel');\n        }\n      });\n    };\n    return {\n      showDialog\n    };\n  }\n\n};\n<\/script>",e.__sourceCodeTitle=" 一键打开Dialog "}rd(od),od.render=function(e,t,n,i,o,s){const r=jn("Button");return ji(),Pi("div",null,[Hi(r,{onClick:i.showDialog},{default:Xt((()=>[sd])),_:1},8,["onClick"])])};var ad={components:{Demo:ta},setup:()=>({Dialog1Demo:Ju,Dialog2Demo:od})};const ld=Ui("h1",null," Dialog示例 ",-1);ad.render=function(e,t,n,i,o,s){const r=jn("Demo");return ji(),Pi(Ri,null,[ld,Hi(r,{component:i.Dialog1Demo},null,8,["component"]),Hi(r,{component:i.Dialog2Demo},null,8,["component"])],64)};const cd={render:function(e,t){return ji(),Pi("div",null,[Dn(e.$slots,"default")])}};var ud={props:{selected:{type:String}},setup(e,t){const n=ht(null),i=ht(null),o=ht(null);xn((()=>{var e;an((()=>{const{width:e}=n.value.getBoundingClientRect();i.value.style.width=e+"px";const{left:t}=o.value.getBoundingClientRect(),{left:s}=n.value.getBoundingClientRect(),r=s-t;i.value.style.left=r+"px"}),null,e)}));const s=lo((()=>r.filter((t=>t.props.title===e.selected))[0])),r=t.slots.default();r.forEach((e=>{if(e.type!==cd)throw new Error("Tabs的子标签必须是Tab")}));const a=r.map((e=>e.props.title));return{defaults:r,titles:a,select:e=>{t.emit("update:selected",e)},selectedItem:n,indicator:i,container:o,current:s}}};const dd={class:"snow-tabs"},hd={class:"snow-tabs-nav",ref:"container"},pd=["onClick"],fd={class:"snow-tabs-nav-indicator",ref:"indicator"},gd={class:"snow-tabs-content"};ud.render=function(e,t,n,i,o,s){return ji(),Pi("div",dd,[Ui("div",hd,[(ji(!0),Pi(Ri,null,Tn(i.titles,((e,t)=>(ji(),Pi("div",{class:a(["snow-tabs-nav-item",{selected:e===n.selected}]),onClick:t=>i.select(e),ref_for:!0,ref:t=>{e===n.selected&&(i.selectedItem=t)},key:t},l(e),11,pd)))),128)),Ui("div",fd,null,512)],512),Ui("div",gd,[(ji(),Ti(Bn(i.current),{class:"snow-tabs-content-item",key:i.current.props.title}))])])};var vd={components:{Demo:ta,Tabs:ud,Tab:cd},setup:()=>({x:ht("导航1")})};const md=qi("内容1"),bd=qi("内容2");function yd(e){e.__sourceCode="<template>\n  <Tabs v-model:selected=\"x\">\n    <Tab title=\"导航1\">内容1</Tab>\n    <Tab title=\"导航2\">内容2</Tab>\n  </Tabs>\n</template>\n<script lang=\"ts\">\nimport Demo from './Demo.vue';\nimport Tabs from '../lib/Tabs.vue';\nimport Tab from '../lib/Tab.vue';\nimport {ref} from 'vue';\n\nexport default {\n  components: {Demo, Tabs, Tab},\n  setup() {\n    const x = ref('导航1');\n    return {x};\n  }\n};\n<\/script>",e.__sourceCodeTitle=" 常规使用 "}yd(vd),vd.render=function(e,t,n,i,o,s){const r=jn("Tab"),a=jn("Tabs");return ji(),Ti(a,{selected:i.x,"onUpdate:selected":t[0]||(t[0]=e=>i.x=e)},{default:Xt((()=>[Hi(r,{title:"导航1"},{default:Xt((()=>[md])),_:1}),Hi(r,{title:"导航2"},{default:Xt((()=>[bd])),_:1})])),_:1},8,["selected"])};var wd={components:{Demo:ta},setup:()=>({Tabs1Demo:vd})};const xd=Ui("h1",null," Tabs 示例 ",-1);wd.render=function(e,t,n,i,o,s){const r=jn("Demo");return ji(),Pi(Ri,null,[xd,Hi(r,{component:i.Tabs1Demo},null,8,["component"])],64)};var kd={props:{content:{path:String,required:!0}}};const _d=["innerHTML"];kd.render=function(e,t,n,i,o,s){return ji(),Pi("article",{class:"markdown-body",innerHTML:n.content},null,8,_d)};const $d=e=>co(kd,{content:e,key:e});var Rd;const Sd=function(e){const t=$s(e.routes,e),n=e.parseQuery||Ks,i=e.stringifyQuery||Zs,o=e.history,s=Xs(),r=Xs(),a=Xs(),l=pt(ds,!0);let c=ds;Fo&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Lo.bind(null,(e=>""+e)),d=Lo.bind(null,Ws),h=Lo.bind(null,Gs);function p(e,s){if(s=Io({},s||l.value),"string"==typeof e){const i=Ho(n,e,s.path),r=t.resolve({path:i.path},s),a=o.createHref(i.fullPath);return Io(i,r,{params:h(r.params),hash:Gs(i.hash),redirectedFrom:void 0,href:a})}let r;if("path"in e)r=Io({},e,{path:Ho(n,e.path,s.path).path});else{const t=Io({},e.params);for(const e in t)null==t[e]&&delete t[e];r=Io({},e,{params:d(e.params)}),s.params=d(s.params)}const a=t.resolve(r,s),c=e.hash||"";a.params=u(h(a.params));const p=function(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}(i,Io({},e,{hash:(f=c,Vs(f).replace(Ls,"{").replace(Us,"}").replace(Fs,"^")),path:a.path}));var f;const g=o.createHref(p);return Io({fullPath:p,hash:c,query:i===Zs?Ys(e.query):e.query||{}},a,{redirectedFrom:void 0,href:g})}function f(e){return"string"==typeof e?Ho(n,e,l.value.path):Io({},e)}function g(e,t){if(c!==e)return gs(8,{from:t,to:e})}function v(e){return b(e)}function m(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let i="function"==typeof n?n(e):n;return"string"==typeof i&&(i=i.includes("?")||i.includes("#")?i=f(i):{path:i},i.params={}),Io({query:e.query,hash:e.hash,params:e.params},i)}}function b(e,t){const n=c=p(e),o=l.value,s=e.state,r=e.force,a=!0===e.replace,u=m(n);if(u)return b(Io(f(u),{state:s,force:r,replace:a}),t||n);const d=n;let h;return d.redirectedFrom=t,!r&&function(e,t,n){const i=t.matched.length-1,o=n.matched.length-1;return i>-1&&i===o&&qo(t.matched[i],n.matched[o])&&Wo(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}(i,o,n)&&(h=gs(16,{to:d,from:o}),E(o,o,!0,!1)),(h?Promise.resolve(h):w(d,o)).catch((e=>vs(e)?vs(e,2)?e:O(e):C(e,d,o))).then((e=>{if(e){if(vs(e,2))return b(Io(f(e.to),{state:s,force:r,replace:a}),t||d)}else e=k(d,o,!0,a,s);return x(d,o,e),e}))}function y(e,t){const n=g(e,t);return n?Promise.reject(n):Promise.resolve()}function w(e,t){let n;const[i,o,a]=function(e,t){const n=[],i=[],o=[],s=Math.max(t.matched.length,e.matched.length);for(let r=0;r<s;r++){const s=t.matched[r];s&&(e.matched.find((e=>qo(e,s)))?i.push(s):n.push(s));const a=e.matched[r];a&&(t.matched.find((e=>qo(e,a)))||o.push(a))}return[n,i,o]}(e,t);n=Qs(i.reverse(),"beforeRouteLeave",e,t);for(const o of i)o.leaveGuards.forEach((i=>{n.push(Js(i,e,t))}));const l=y.bind(null,e,t);return n.push(l),rr(n).then((()=>{n=[];for(const i of s.list())n.push(Js(i,e,t));return n.push(l),rr(n)})).then((()=>{n=Qs(o,"beforeRouteUpdate",e,t);for(const i of o)i.updateGuards.forEach((i=>{n.push(Js(i,e,t))}));return n.push(l),rr(n)})).then((()=>{n=[];for(const i of e.matched)if(i.beforeEnter&&!t.matched.includes(i))if(Array.isArray(i.beforeEnter))for(const o of i.beforeEnter)n.push(Js(o,e,t));else n.push(Js(i.beforeEnter,e,t));return n.push(l),rr(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=Qs(a,"beforeRouteEnter",e,t),n.push(l),rr(n)))).then((()=>{n=[];for(const i of r.list())n.push(Js(i,e,t));return n.push(l),rr(n)})).catch((e=>vs(e,8)?e:Promise.reject(e)))}function x(e,t,n){for(const i of a.list())i(e,t,n)}function k(e,t,n,i,s){const r=g(e,t);if(r)return r;const a=t===ds,c=Fo?history.state:{};n&&(i||a?o.replace(e.fullPath,Io({scroll:a&&c&&c.scroll},s)):o.push(e.fullPath,s)),l.value=e,E(e,t,n,a),O()}let _;function $(){_||(_=o.listen(((e,t,n)=>{const i=p(e),s=m(i);if(s)return void b(Io(s,{replace:!0}),i).catch(No);c=i;const r=l.value;var a,u;Fo&&(a=os(r.fullPath,n.delta),u=ns(),ss.set(a,u)),w(i,r).catch((e=>vs(e,12)?e:vs(e,2)?(b(e.to,i).then((e=>{vs(e,20)&&!n.delta&&n.type===Zo.pop&&o.go(-1,!1)})).catch(No),Promise.reject()):(n.delta&&o.go(-n.delta,!1),C(e,i,r)))).then((e=>{(e=e||k(i,r,!1))&&(n.delta?o.go(-n.delta,!1):n.type===Zo.pop&&vs(e,20)&&o.go(-1,!1)),x(i,r,e)})).catch(No)})))}let R,S=Xs(),A=Xs();function C(e,t,n){O(e);const i=A.list();return i.length?i.forEach((i=>i(e,t,n))):console.error(e),Promise.reject(e)}function O(e){return R||(R=!e,$(),S.list().forEach((([t,n])=>e?n(e):t())),S.reset()),e}function E(t,n,i,o){const{scrollBehavior:s}=e;if(!Fo||!s)return Promise.resolve();const r=!i&&function(e){const t=ss.get(e);return ss.delete(e),t}(os(t.fullPath,0))||(o||!i)&&history.state&&history.state.scroll||null;return Pt().then((()=>s(t,n,r))).then((e=>e&&is(e))).catch((e=>C(e,t,n)))}const j=e=>o.go(e);let z;const B=new Set;return{currentRoute:l,addRoute:function(e,n){let i,o;return us(e)?(i=t.getRecordMatcher(e),o=n):o=e,t.addRoute(o,i)},removeRoute:function(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)},hasRoute:function(e){return!!t.getRecordMatcher(e)},getRoutes:function(){return t.getRoutes().map((e=>e.record))},resolve:p,options:e,push:v,replace:function(e){return v(Io(f(e),{replace:!0}))},go:j,back:()=>j(-1),forward:()=>j(1),beforeEach:s.add,beforeResolve:r.add,afterEach:a.add,onError:A.add,isReady:function(){return R&&l.value!==ds?Promise.resolve():new Promise(((e,t)=>{S.add([e,t])}))},install(e){e.component("RouterLink",tr),e.component("RouterView",sr),e.config.globalProperties.$router=this,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>gt(l)}),Fo&&!z&&l.value===ds&&(z=!0,v(o.location).catch((e=>{})));const t={};for(const e in ds)t[e]=lo((()=>l.value[e]));e.provide(Po,this),e.provide(To,Je(t)),e.provide(Do,l);const n=e.unmount;B.add(e),e.unmount=function(){B.delete(e),B.size<1&&(c=ds,_&&_(),_=null,l.value=ds,z=!1,R=!1),n()}}}}({history:((Rd=location.host?Rd||location.pathname+location.search:"").includes("#")||(Rd+="#"),cs(Rd)),routes:[{path:"/",component:fr},{path:"/doc",component:$r,children:[{path:"",redirect:"/doc/intro"},{path:"get-started",component:$d('<h1 id="开始使用">开始使用</h1>\n<p>请先<a href="#/doc/install">安装</a>本组件库</p>\n<p>然后在你的代码中写入下面的代码</p>\n<pre><code>import {Button,Tabs,Switch,Dialog} from &quot;snow-ui&quot;\n</code></pre>\n<p>就能使用该组件了</p>\n<h2 id="vue单文件组件">Vue单文件组件</h2>\n<p>代码示例:</p>\n<pre><code>&lt;template&gt;\n  &lt;div&gt;\n     &lt;Button&gt;按钮&lt;Button&gt;\n  &lt;/div&gt;\n&lt;/template&gt;\n&lt;script&gt;\nimport{BUtton,Tabs,Switch,Dialog} from &quot;snow-ui&quot;\nexport default{\n   components:{Button}\n}\n&lt;/script&gt;   \n</code></pre>\n')},{path:"switch",component:la},{path:"install",component:$d('<h1 id="安装">安装</h1>\n<p>打开终端运行以下命令：</p>\n<pre><code>npm install snow-ui\n</code></pre>\n<p>或</p>\n<pre><code>yarn add snow-ui\n</code></pre>\n<p>下一节：<a href="#/doc/get-started">开始使用</a></p>\n')},{path:"intro",component:$d('<h1 id="介绍">介绍</h1>\n<p>Snow UI 是一款基于 Vue3 和 TypeScript 的 UI 组件库。</p>\n<p>这款组件库其实是为了自我练习而写的，全部自己编写</p>\n<p>所以强烈不建议你将此UI库用于生产环节。但如果你是抱着看源代码的目的而来，那么这个库还是这值得一看的，源代码放在了github.com/Fighter28/snow-vite\n,方便你查看，运行方法见README.md</p>\n<p>下一节:<a href="#/doc/install">安装</a>\n    </p>\n')},{path:"button",component:Vu},{path:"dialog",component:ad},{path:"tabs",component:wd}]}]});var Ad={name:"App",setup(){const e=document.documentElement.clientWidth,t=ht(e>500);nn("asideVisible",t),Sd.afterEach((()=>{e<=500&&(t.value=!1)}))}};Ad.render=function(e,t,n,i,o,s){const r=jn("router-view");return ji(),Ti(r)};const Cd=Eo(Ad);Cd.use(Sd),Cd.mount("#app"),Cd.component("Markdown",kd);
