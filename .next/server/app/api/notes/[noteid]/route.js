"use strict";(()=>{var e={};e.id=74,e.ids=[74],e.modules={1185:e=>{e.exports=require("mongoose")},517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},8602:(e,t,n)=>{n.r(t),n.d(t,{headerHooks:()=>f,originalPathname:()=>y,patchFetch:()=>P,requestAsyncStorage:()=>h,routeModule:()=>j,serverHooks:()=>v,staticGenerationAsyncStorage:()=>w,staticGenerationBailout:()=>S});var o={};n.r(o),n.d(o,{DELETE:()=>g,GET:()=>m,PUT:()=>l});var a=n(5419),i=n(9108),r=n(9678),s=n(8046),d=n(1308),c=n(1185),u=n.n(c),p=n(8070);async function l(e,t){let n=t.params.noteid;console.log(n);let o=await e.json();console.log(o),await u().connect(s.Q);let a=await d.j.findOneAndUpdate({_id:n},o);return p.Z.json({result:a,success:!0})}async function m(e,t){let n=t.params.noteid;await u().connect(s.Q);let o=await d.j.findById({_id:n});return p.Z.json({result:o,success:!0})}async function g(e,t){let n=t.params.noteid;await u().connect(s.Q);let o=await d.j.deleteOne({_id:n});return p.Z.json({result:o,success:!0})}let j=new a.AppRouteRouteModule({definition:{kind:i.x.APP_ROUTE,page:"/api/notes/[noteid]/route",pathname:"/api/notes/[noteid]",filename:"route",bundlePath:"app/api/notes/[noteid]/route"},resolvedPagePath:"D:\\VS Code\\vs-code\\Sajjad\\main projects\\NoteApp\\noteme-app modified\\src\\app\\api\\notes\\[noteid]\\route.js",nextConfigOutput:"",userland:o}),{requestAsyncStorage:h,staticGenerationAsyncStorage:w,serverHooks:v,headerHooks:f,staticGenerationBailout:S}=j,y="/api/notes/[noteid]/route";function P(){return(0,r.patchFetch)({serverHooks:v,staticGenerationAsyncStorage:w})}},8046:(e,t,n)=>{n.d(t,{Q:()=>o});let o="mongodb+srv://naimhaider76:zbFzTMsPCD4lc1bh@cluster0.3ttgmai.mongodb.net/NoteDB?retryWrites=true&w=majority"},1308:(e,t,n)=>{n.d(t,{j:()=>r});var o=n(1185),a=n.n(o);let i=new(a()).Schema({title:String,description:String,newDate:String,userId:String},{timestamps:!0}),r=a().models.notes||a().model("notes",i)}};var t=require("../../../../webpack-runtime.js");t.C(e);var n=e=>t(t.s=e),o=t.X(0,[638,206],()=>n(8602));module.exports=o})();