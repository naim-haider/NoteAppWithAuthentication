(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[968],{8552:function(e,t,n){Promise.resolve().then(n.bind(n,8540))},8540:function(e,t,n){"use strict";n.r(t);var s=n(7437),a=n(2265),r=n(9140),c=n.n(r),o=n(1396),i=n.n(o),l=n(4033),u=n(1168);t.default=()=>{let[e,t]=(0,a.useState)(""),[n,r]=(0,a.useState)(""),o=(0,l.useRouter)(),p=new Date,_=p.getFullYear(),d=p.getMonth()+1,h=p.getDate(),f="".concat(h,"/").concat(d,"/").concat(_),x=localStorage.getItem("auth"),g=(x=JSON.parse(x)).user._id;console.log("userId -> ",g);let j=async()=>{let t=await fetch("".concat(u._,"/api/notes"),{method:"POST",body:JSON.stringify({title:e,description:n,newDate:f,userId:g})});(t=await t.json()).success&&o.push("/",{scroll:!1})};return(0,s.jsxs)("div",{className:c().container,children:[(0,s.jsxs)("header",{className:c().header,children:[(0,s.jsx)(i(),{href:"/",children:(0,s.jsx)("button",{className:c().backBtn,children:"Back"})}),(0,s.jsx)("button",{className:c().saveBtn,onClick:j,children:"Save"})]}),(0,s.jsx)("div",{className:c().popupB,children:(0,s.jsx)("div",{className:c().popup,children:(0,s.jsxs)("div",{className:c().content,children:[(0,s.jsxs)("header",{children:[(0,s.jsx)("p",{children:"Add a new Note"}),(0,s.jsx)("img",{src:"./notes.png"})]}),(0,s.jsxs)("form",{action:"#",children:[(0,s.jsxs)("div",{className:"row title",children:[(0,s.jsx)("label",{children:"Title"}),(0,s.jsx)("input",{type:"text",onChange:e=>t(e.target.value)})]}),(0,s.jsxs)("div",{className:"row description",children:[(0,s.jsx)("label",{children:"Description"}),(0,s.jsx)("textarea",{onChange:e=>r(e.target.value)})]})]})]})})})]})}},1168:function(e,t,n){"use strict";n.d(t,{_:function(){return s}});let s="http://localhost:3000"},9140:function(e){e.exports={content:"page_content__TFnMT",popupB:"page_popupB__kQSgR",header:"page_header__u__0v",container:"page_container__iG1Dz",saveBtn:"page_saveBtn__PzsLK",backBtn:"page_backBtn__jP3om",popup:"page_popup__afytT"}},622:function(e,t,n){"use strict";var s=n(2265),a=Symbol.for("react.element"),r=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var s,r={},l=null,u=null;for(s in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)c.call(t,s)&&!i.hasOwnProperty(s)&&(r[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===r[s]&&(r[s]=t[s]);return{$$typeof:a,type:e,key:l,ref:u,props:r,_owner:o.current}}t.Fragment=r,t.jsx=l,t.jsxs=l},7437:function(e,t,n){"use strict";e.exports=n(622)}},function(e){e.O(0,[251,971,938,744],function(){return e(e.s=8552)}),_N_E=e.O()}]);