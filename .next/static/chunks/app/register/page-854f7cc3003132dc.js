(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[11],{44:function(e,t,a){Promise.resolve().then(a.bind(a,3598))},3598:function(e,t,a){"use strict";a.r(t);var r=a(7437),o=a(1168),i=a(2265),s=a(5925),n=a(4033),l=a(1396),c=a.n(l),d=a(2449),p=a.n(d);t.default=()=>{let[e,t]=(0,i.useState)(""),[a,l]=(0,i.useState)(""),[d,u]=(0,i.useState)(""),m=(0,n.useRouter)(),f=async t=>{t.preventDefault();let r=await fetch("".concat(o._,"/api/register"),{method:"POST",body:JSON.stringify({name:e,email:a,password:d})});(r=await r.json()).success?(s.ZP.success("User Registered Successfully"),m.push("/login",{scroll:!1})):s.ZP.error("error while register user")};return(0,r.jsx)("div",{className:p().container,children:(0,r.jsx)("div",{className:p().formBox,children:(0,r.jsxs)("form",{className:p().formItems,onSubmit:f,children:[(0,r.jsx)("h1",{children:"REGISTER FORM"}),(0,r.jsx)("div",{className:p().inputBx,children:(0,r.jsx)("input",{onChange:e=>t(e.target.value),value:e,type:"text",placeholder:"Name",id:"exampleInputName1","aria-describedby":"emailHelp"})}),(0,r.jsx)("div",{className:p().inputBx,children:(0,r.jsx)("input",{onChange:e=>l(e.target.value),value:a,type:"email",placeholder:"Email",id:"exampleInputEmail1","aria-describedby":"emailHelp"})}),(0,r.jsx)("div",{className:p().inputBx,children:(0,r.jsx)("input",{onChange:e=>u(e.target.value),value:d,type:"password",placeholder:"Password",id:"exampleInputPassword1"})}),(0,r.jsx)("div",{className:p().inputBx,children:(0,r.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})}),(0,r.jsx)("div",{className:p().formLink,children:(0,r.jsx)(c(),{href:"/login",className:p().formLinkItems,children:"Already a user"})})]})})})}},1168:function(e,t,a){"use strict";a.d(t,{_:function(){return r}});let r="http://localhost:3000"},2449:function(e){e.exports={formBox:"page_formBox__neeqy",inputBx:"page_inputBx__R3Eva",container:"page_container__FrDR0",formItems:"page_formItems__0R5zY",formLink:"page_formLink__LlK7D",formLinkItems:"page_formLinkItems__53NFl"}},622:function(e,t,a){"use strict";var r=a(2265),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,n=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,a){var r,i={},c=null,d=null;for(r in void 0!==a&&(c=""+a),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)s.call(t,r)&&!l.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:c,ref:d,props:i,_owner:n.current}}t.Fragment=i,t.jsx=c,t.jsxs=c},7437:function(e,t,a){"use strict";e.exports=a(622)},5925:function(e,t,a){"use strict";let r,o;a.d(t,{ZP:function(){return ea}});var i,s=a(2265);let n={data:""},l=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||n,c=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,d=/\/\*[^]*?\*\/|  +/g,p=/\n+/g,u=(e,t)=>{let a="",r="",o="";for(let i in e){let s=e[i];"@"==i[0]?"i"==i[1]?a=i+" "+s+";":r+="f"==i[1]?u(s,i):i+"{"+u(s,"k"==i[1]?"":t)+"}":"object"==typeof s?r+=u(s,t?t.replace(/([^,])+/g,e=>i.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=s&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=u.p?u.p(i,s):i+":"+s+";")}return a+(t&&o?t+"{"+o+"}":o)+r},m={},f=e=>{if("object"==typeof e){let t="";for(let a in e)t+=a+f(e[a]);return t}return e},g=(e,t,a,r,o)=>{var i;let s=f(e),n=m[s]||(m[s]=(e=>{let t=0,a=11;for(;t<e.length;)a=101*a+e.charCodeAt(t++)>>>0;return"go"+a})(s));if(!m[n]){let t=s!==e?e:(e=>{let t,a,r=[{}];for(;t=c.exec(e.replace(d,""));)t[4]?r.shift():t[3]?(a=t[3].replace(p," ").trim(),r.unshift(r[0][a]=r[0][a]||{})):r[0][t[1]]=t[2].replace(p," ").trim();return r[0]})(e);m[n]=u(o?{["@keyframes "+n]:t}:t,a?"":"."+n)}let l=a&&m.g?m.g:null;return a&&(m.g=m[n]),i=m[n],l?t.data=t.data.replace(l,i):-1===t.data.indexOf(i)&&(t.data=r?i+t.data:t.data+i),n},y=(e,t,a)=>e.reduce((e,r,o)=>{let i=t[o];if(i&&i.call){let e=i(a),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":u(e,""):!1===e?"":e}return e+r+(null==i?"":i)},"");function h(e){let t=this||{},a=e.call?e(t.p):e;return g(a.unshift?a.raw?y(a,[].slice.call(arguments,1),t.p):a.reduce((e,a)=>Object.assign(e,a&&a.call?a(t.p):a),{}):a,l(t.target),t.g,t.o,t.k)}h.bind({g:1});let x,b,v,w=h.bind({k:1});function _(e,t){let a=this||{};return function(){let r=arguments;function o(i,s){let n=Object.assign({},i),l=n.className||o.className;a.p=Object.assign({theme:b&&b()},n),a.o=/ *go\d+/.test(l),n.className=h.apply(a,r)+(l?" "+l:""),t&&(n.ref=s);let c=e;return e[0]&&(c=n.as||e,delete n.as),v&&c[0]&&v(n),x(c,n)}return t?t(o):o}}var j=e=>"function"==typeof e,E=(e,t)=>j(e)?e(t):e,N=(r=0,()=>(++r).toString()),k=()=>{if(void 0===o&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");o=!e||e.matches}return o},$=new Map,I=e=>{if($.has(e))return;let t=setTimeout(()=>{$.delete(e),L({type:4,toastId:e})},1e3);$.set(e,t)},O=e=>{let t=$.get(e);t&&clearTimeout(t)},S=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&O(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:a}=t;return e.toasts.find(e=>e.id===a.id)?S(e,{type:1,toast:a}):S(e,{type:0,toast:a});case 3:let{toastId:r}=t;return r?I(r):e.toasts.forEach(e=>{I(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+o}))}}},P=[],R={toasts:[],pausedAt:void 0},L=e=>{R=S(R,e),P.forEach(e=>{e(R)})},C=(e,t="blank",a)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(null==a?void 0:a.id)||N()}),B=e=>(t,a)=>{let r=C(t,e,a);return L({type:2,toast:r}),r.id},F=(e,t)=>B("blank")(e,t);F.error=B("error"),F.success=B("success"),F.loading=B("loading"),F.custom=B("custom"),F.dismiss=e=>{L({type:3,toastId:e})},F.remove=e=>L({type:4,toastId:e}),F.promise=(e,t,a)=>{let r=F.loading(t.loading,{...a,...null==a?void 0:a.loading});return e.then(e=>(F.success(E(t.success,e),{id:r,...a,...null==a?void 0:a.success}),e)).catch(e=>{F.error(E(t.error,e),{id:r,...a,...null==a?void 0:a.error})}),e};var z=w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,A=w`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,D=w`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,T=_("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${z} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${A} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${D} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,M=w`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Z=_("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${M} 1s linear infinite;
`,H=w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,U=w`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,q=_("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${H} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${U} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Y=_("div")`
  position: absolute;
`,G=_("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,J=w`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,K=_("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${J} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,W=({toast:e})=>{let{icon:t,type:a,iconTheme:r}=e;return void 0!==t?"string"==typeof t?s.createElement(K,null,t):t:"blank"===a?null:s.createElement(G,null,s.createElement(Z,{...r}),"loading"!==a&&s.createElement(Y,null,"error"===a?s.createElement(T,{...r}):s.createElement(q,{...r})))},Q=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,V=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,X=_("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,ee=_("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,et=(e,t)=>{let a=e.includes("top")?1:-1,[r,o]=k()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[Q(a),V(a)];return{animation:t?`${w(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${w(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}};s.memo(({toast:e,position:t,style:a,children:r})=>{let o=e.height?et(e.position||t||"top-center",e.visible):{opacity:0},i=s.createElement(W,{toast:e}),n=s.createElement(ee,{...e.ariaProps},E(e.message,e));return s.createElement(X,{className:e.className,style:{...o,...a,...e.style}},"function"==typeof r?r({icon:i,message:n}):s.createElement(s.Fragment,null,i,n))}),i=s.createElement,u.p=void 0,x=i,b=void 0,v=void 0,h`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`;var ea=F}},function(e){e.O(0,[251,971,938,744],function(){return e(e.s=44)}),_N_E=e.O()}]);