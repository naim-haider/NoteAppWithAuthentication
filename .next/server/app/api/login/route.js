(()=>{var e={};e.id=740,e.ids=[740],e.modules={7096:e=>{"use strict";e.exports=require("bcrypt")},1185:e=>{"use strict";e.exports=require("mongoose")},517:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},4300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},2781:e=>{"use strict";e.exports=require("stream")},3837:e=>{"use strict";e.exports=require("util")},9586:(e,t,r)=>{"use strict";r.r(t),r.d(t,{headerHooks:()=>f,originalPathname:()=>v,patchFetch:()=>S,requestAsyncStorage:()=>w,routeModule:()=>h,serverHooks:()=>y,staticGenerationAsyncStorage:()=>x,staticGenerationBailout:()=>q});var s={};r.r(s),r.d(s,{POST:()=>g});var i=r(5419),a=r(9108),o=r(9678),n=r(3989),u=r(8046),c=r(3264),d=r(1185),p=r.n(d),l=r(8070);let m=r(6082);async function g(e){let{password:t,email:r}=await e.json();if(!r||!t)return res.status(404).send({success:!1,message:"Invalid email or password"});let s=await c.n.findOne({email:r});if(!s)return res.status(404).send({success:!1,message:"Email is not registered"});if(!await (0,n.comparePassword)(t,s.password))return res.status(200).send({success:!1,message:"Invalid Password"});let i=await m.sign({_id:s._id},"GSGSHJGSJL",{expiresIn:"7d"});return await p().connect(u.Q),l.Z.json({success:!0,message:"login successfully",user:{_id:s._id,name:s.name,email:s.email},token:i})}let h=new i.AppRouteRouteModule({definition:{kind:a.x.APP_ROUTE,page:"/api/login/route",pathname:"/api/login",filename:"route",bundlePath:"app/api/login/route"},resolvedPagePath:"D:\\VS Code\\vs-code\\Sajjad\\main projects\\NoteApp\\noteme-app modified\\src\\app\\api\\login\\route.js",nextConfigOutput:"",userland:s}),{requestAsyncStorage:w,staticGenerationAsyncStorage:x,serverHooks:y,headerHooks:f,staticGenerationBailout:q}=h,v="/api/login/route";function S(){return(0,o.patchFetch)({serverHooks:y,staticGenerationAsyncStorage:x})}},3989:(e,t,r)=>{let s=r(7096),i=async e=>{try{return await s.hash(e,10)}catch(e){console.log(e)}},a=async(e,t)=>s.compare(e,t);e.exports={hashPassword:i,comparePassword:a}},8046:(e,t,r)=>{"use strict";r.d(t,{Q:()=>s});let s="mongodb+srv://naimhaider76:zbFzTMsPCD4lc1bh@cluster0.3ttgmai.mongodb.net/NoteDB?retryWrites=true&w=majority"},3264:(e,t,r)=>{"use strict";r.d(t,{n:()=>o});var s=r(1185),i=r.n(s);let a=new(i()).Schema({name:{type:String,required:!0,trim:!0},email:{type:String,required:!0,unique:!0},password:{type:String,required:!0}}),o=i().models.users||i().model("users",a)}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[638,206,82],()=>r(9586));module.exports=s})();