const __vite__fileDeps=["assets/home-msgList-B1tukzR0.js","assets/index-DsFI7Twa.js","assets/index-Bl2o0HX7.css","assets/home-msgList-CyCw3zR7.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as e,c as t,a as l,w as n,b as a,o,d as s,e as i,n as u,F as c,f as r,g as d,h as v,i as p,j as m,t as f,k as g,p as h,l as x,m as y,u as b,q as _,s as k,_ as w,v as C,x as S,y as L,z as V,A as T,B as I}from"./index-DsFI7Twa.js";function D(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){const t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)}))}function M(e,t=1e3){let l;return function(){const n=this,a=arguments;clearTimeout(l),l=setTimeout((function(){l=null,e.apply(n,a)}),t)}}const O=(e,t)=>{const l=e.__vccOpts||e;for(const[n,a]of t)l[n]=a;return l},U=e=>(h("data-v-ded737a1"),e=e(),x(),e),B={class:"mobil-unfold"},E=[U((()=>i("span",null,"+",-1))),U((()=>i("span",null,"New Chat",-1)))],j={class:"msg-list"},$={class:"msg-group-title"},z={class:"group-list"},P=["onClick"],R=U((()=>i("div",{class:"msg iconfont icon-message"},null,-1))),W={class:"text"},A=["onClick"],F=O({__name:"home-slider",props:{targetSession:{type:Object,default:null},unfold:Boolean},emits:"update:targetSession",setup(h,{expose:x,emit:y}){const b=y,_=h,k=e({value:!1,text:""});function w(e){k.value=!0,k.text=e}const C=t((()=>_.unfold?`${Math.min(window.innerWidth,300)}px`:0));const S=l([]);window.getDBItem("sessionList").then(((e=[])=>{const t=function(e){let t=0;for(let l=1;l<e.length;l++)e[l].timestamp>e[t].timestamp&&(t=l),e[l].subMsgList||(e[l].subMsgList=[]);return t}(e);S.value=e,(null==e?void 0:e.length)?V(e[t]):V(T())}));const L=t((()=>{const e=[];let t=null,l=null,n=null;return S.value.forEach((a=>{!function(e){const t=new Date(e),l=new Date;return t.getFullYear()===l.getFullYear()&&t.getMonth()===l.getMonth()&&t.getDate()===l.getDate()}(a.timestamp)?!function(e){const t=864e5,l=(new Date).getTime()-7*t;return e>l}(a.timestamp)?(n||(n={sort:2,label:"更早以前",id:D(),children:[]},e.push(n)),n.children.push(a)):(l||(l={sort:1,label:"一周内",id:D(),children:[]},e.push(l)),l.children.push(a)):(t||(t={sort:0,label:"今日",id:D(),children:[]},e.push(t)),t.children.push(a))})),e.sort(((e,t)=>e.sort-t.sort))}));function V(e){b("update:targetSession",e)}function T(e=""){const t={id:D(),label:e,messageList:[],subMsgList:[],timestamp:Date.now()};return S.value.unshift(t),t}return n(S,M((()=>window.setDBItem("sessionList",JSON.parse(JSON.stringify(S.value)))),500),{deep:!0}),x({createSession:T}),(e,t)=>{const l=a("VBtn"),n=a("VSnackbar");return o(),s(c,null,[i("div",{class:"home-slider",style:d({width:C.value})},[i("div",B,[i("div",{style:{"font-size":"20px",cursor:"pointer"},class:u(["iconfont",h.unfold?"icon-shousuo":"icon-zhankai"]),onClick:t[0]||(t[0]=e=>b("onChangeUnfold"))},null,2)]),i("div",{class:"new-chat",onClick:t[1]||(t[1]=e=>T())},E),i("div",j,[(o(!0),s(c,null,r(L.value,(e=>(o(),s("div",{key:e.id,class:"msg-item"},[i("div",$,f(e.label),1),i("div",z,[(o(!0),s(c,null,r(e.children,(e=>{var t;return o(),s("div",{key:e.id,class:u(["group-item",(null==(t=h.targetSession)?void 0:t.id)===e.id?"active-item":""]),onClick:g((t=>V(e)),["stop","prevent"])},[R,i("div",W,f(e.label||"新的聊天"),1),i("div",{class:"delete iconfont icon-delete",onClick:g((t=>function(e){var t;if((null==(t=S.value)?void 0:t.length)<2)return w("至少保留一个会话窗口");const l=S.value.findIndex((t=>t.id===e.id));S.value.splice(l,1),w("删除成功!"),e.id===_.targetSession.id&&V(S.value[0])}(e)),["stop"])},null,8,A)],10,P)})),128))])])))),128))])],4),v(n,{modelValue:k.value,"onUpdate:modelValue":t[3]||(t[3]=e=>k.value=e),color:"blue-darken-4",location:"top",timeout:1500},{actions:p((()=>[v(l,{color:"white",variant:"text",onClick:t[2]||(t[2]=e=>k.value=!1)},{default:p((()=>[m(" Close ")])),_:1})])),default:p((()=>[m(f(k.text)+" ",1)])),_:1},8,["modelValue"])],64)}}},[["__scopeId","data-v-ded737a1"]]);const N=e=>(h("data-v-a2dc4417"),e=e(),x(),e),J={key:1,class:"empty"},q=[N((()=>i("div",{class:"iconfont icon-empty",style:{"font-size":"70px","margin-bottom":"15px"}},null,-1))),N((()=>i("div",null,"没有内容",-1)))],K=O({__name:"home-search",props:{dialog:Boolean},emits:["update:dialog"],setup(e,{emit:t}){const i=_((()=>w((()=>import("./home-msgList-B1tukzR0.js")),__vite__mapDeps([0,1,2,3])))),u=e,c=t;function r(e=!1){c("update:dialog",e)}const d=l(""),f=l([]),g=l(!1);let h=[];n((()=>u.dialog),(e=>{e&&window.getDBItem("sessionList").then(((e=[])=>{h=e}))}),{immediate:!0,deep:!0});const x=l(!1),C=M((e=>{if(!e)return f.value=[];x.value=!0;const t=[];h.forEach((({messageList:l})=>{l.forEach((l=>{g.value&&"user"===l.role||l.content.includes(e)&&t.push(l)}))})),f.value=t,k((()=>{x.value=!1}))}),500);return n((()=>d.value),C),(t,l)=>{const n=a("VTextField"),u=a("VSwitch"),c=a("VCard"),h=a("VDialog");return o(),y(h,{opacity:"0.5","model-value":e.dialog,width:"700","onUpdate:modelValue":r},{default:p((()=>[v(c,{title:"历史记录搜索",color:"#2e2e3a",loading:x.value},{subtitle:p((()=>[m(" 输入关键字即可检索所有窗口的历史记录 ")])),default:p((()=>[v(n,{"model-value":d.value,"onUpdate:modelValue":l[0]||(l[0]=e=>d.value=e),style:{margin:"0 10px"},label:"关键字",placeholder:"请输入关键字"},null,8,["model-value"]),f.value.length?(o(),y(b(i),{key:0,messageList:f.value,contentWidth:"90%",paddingBottom:"20px"},null,8,["messageList"])):(o(),s("div",J,q))])),append:p((()=>[v(u,{"model-value":g.value,"onUpdate:modelValue":l[1]||(l[1]=e=>g.value=e),color:"success",label:"过滤掉问题",style:{margin:"0 10px"}},null,8,["model-value"])])),_:1},8,["loading"])])),_:1},8,["model-value"])}}},[["__scopeId","data-v-a2dc4417"]]),Y=e=>(h("data-v-24af3f62"),e=e(),x(),e),G={class:"main"},H={class:"right-content"},Q=Y((()=>i("div",null,[i("span",{style:{"font-size":"20px"},class:"iconfont icon-lightning"}),i("span",{style:{"margin-left":"10px"}},"Chat-GPT-3.5")],-1))),X={style:{display:"flex",gap:"20px","align-items":"center"}},Z=Y((()=>i("div",{style:{"font-size":"20px",cursor:"pointer"},class:"iconfont icon-houtaishangpinguanli"},null,-1))),ee=Y((()=>i("i",{style:{"font-weight":"bold"},class:"iconfont icon-sousuo"},null,-1))),te=Y((()=>i("span",{style:{"margin-left":"10px","font-weight":"bold","text-align":"end"}},"历史搜索",-1))),le=Y((()=>i("span",{style:{"margin-right":"5px"}},"历史搜索",-1))),ne=Y((()=>i("i",{class:"iconfont icon-sousuo"},null,-1))),ae={class:"main-content"},oe={class:"ipt","element-loading-text":"AI正在回答","element-loading-background":"rgba(0, 0, 0, 0.2)"},se=Y((()=>i("i",{class:"iconfont icon-fasong"},null,-1))),ie=Y((()=>i("span",{style:{"margin-right":"5px"}},"发送",-1))),ue={style:{display:"flex","flex-direction":"column","align-items":"center","justify-content":"center",height:"100%"}},ce=Y((()=>i("span",{style:{"margin-top":"15px"}},"AI正在回答",-1))),re="https://47.100.199.39/api?host=http://ai.qujiami.cn/api/openai",de=O({__name:"homeView",setup(r){const h=_((()=>w((()=>import("./home-msgList-B1tukzR0.js")),__vite__mapDeps([0,1,2,3])))),x=l(),M=l(),O=l(!1);const U=e({value:!1,text:""}),B=l(!1);function E(){B.value=!0}function j(e){U.value=!0,U.text=e}const $=l(!1),z=l(""),P=l(!1);function R(){P.value=!0,fetch(`${re}/v2/api/getMyUrlLink`).then((e=>e.json().then((e=>{P.value=!1,e.openlink&&(location.href=e.openlink)})))).catch((e=>{P.value=!1,j(e)}))}function W(){const e=z.value;if(!e.trim())return j("不能为空");P.value=!0,fetch(`${re}/v2/api/login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({MID:e})}).then((e=>e.json().then((e=>{if(P.value=!1,200!==e.code)return j(e.errMsg||"登录失败");$.value=!1,j(e.errMsg||"登录成功"),localStorage.setItem("accessToken",e.accessToken)})))).catch((e=>{P.value=!1,j(e)}))}n($,(e=>{e||(z.value="")}));const A=l(null),{unfold:N,onChangeUnfold:J}=function(){const e=localStorage.getItem("unfold"),t=l(null!==e&&"true"===e);return{unfold:t,onChangeUnfold:function(){t.value=!t.value,localStorage.setItem("unfold",t.value)}}}(),q=t((()=>{var e;return(null==(e=A.value)?void 0:e.messageList)||[]})),Y=t((()=>{var e;return(null==(e=A.value)?void 0:e.subMsgList)||[]})),de=l(!1),ve=window.innerWidth<768;let pe=ve?"45px":"54px";const me=l(pe),fe=l("");function ge(){xe.value.scrollIntoView({behavior:"smooth",block:"center"})}function he(){setTimeout((()=>window.scroll(0,0)))}window.addEventListener("resize",(()=>{pe=window.innerWidth<768?"45px":"54px"}));const xe=l();function ye(){xe.value.focus()}function be(e){me.value=pe,k((()=>{me.value=`${Math.min(200,e.target.scrollHeight)}px`}))}function _e(e){if("Enter"===e.key&&!e.shiftKey)return we()}setInterval((function(){document.querySelectorAll("pre code").forEach((e=>{if(e.className.includes("code-box"))return;e.classList.add("code-box");const t=document.createElement("div");t.classList.add("copy-btn"),t.addEventListener("click",(()=>{var t;j("复制成功"),function(e){const t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t)}((t=e.innerHTML,(new DOMParser).parseFromString(t,"text/html").body.textContent))})),e.appendChild(t)}))}),1e3);const ke=l();function we(){if(O.value)return j("请等待上一个回答");if(!fe.value.trim())return j("请输入内容");O.value=!0;const e=fe.value;fe.value="",me.value=pe,A.value?A.value.label||(A.value.label=e):A.value=ke.value.createSession(e),q.value.push({role:"user",content:e,id:D()}),x.value.scrollToBottom(),Ce(q.value,(e=>{q.value[q.value.length-1].content+=e,x.value.scrollToBottom()})),de.value&&(Y.value.push({role:"user",content:e,id:D()}),M.value.scrollToBottom(),Ce(Y.value,(e=>{Y.value[Y.value.length-1].content+=e,M.value.scrollToBottom()})))}function Ce(e,t){const l=function(){const e=new Date;return[{role:"system",content:`You are ChatGPT, a large language model trained by OpenAI.\n  Knowledge cutoff: 2023-04\n  Current model: gpt-3.5-turbo-16k\n  Current time: ${e.toLocaleDateString()} ${e.toLocaleTimeString()}\n  Latex inline: $x^2$ \n  Latex block: $$e=mc^2$$\n  The result is returned in markdown format`}]}().concat(e.slice(-8));fetch(`${re}/v1/chat/completions`,{method:"POST",headers:{"Content-Type":"application/json",token:localStorage.getItem("accessToken")},body:JSON.stringify({messages:l,stream:!0,model:"gpt-3.5-turbo-16k",temperature:0,presence_penalty:0,frequency_penalty:0,top_p:0})}).then((l=>{if(200!==l.status)return void e.splice(e.length-1,1);const n=l.body.getReader();Reflect.construct(ReadableStream,[{start(e){!function l(){n.read().then((({done:n,value:a})=>{if(n)return O.value=!1,void e.close();const o=new TextDecoder("utf-8").decode(a).split("\n\n");let s="";o.forEach((e=>{try{const t=JSON.parse(e.replace("data: ","")).choices[0].delta.content||"";s+=t}catch(t){}})),t(s),l()}))}()}}])})).catch((()=>{e.splice(e.length-1,1)})),e.push({role:"assistant",id:D(),content:""})}return(e,t)=>{const l=a("v-tooltip"),n=a("VBtn"),r=a("v-list-item"),_=a("v-list"),k=a("VMenu"),w=a("VProgressCircular"),D=a("VSnackbar"),j=a("VTextField"),re=a("VCard"),pe=a("VDialog");return o(),s(c,null,[i("div",G,[v(F,{ref_key:"homeSliderRef",ref:ke,targetSession:A.value,"onUpdate:targetSession":t[0]||(t[0]=e=>A.value=e),unfold:b(N),onOnChangeUnfold:b(J)},null,8,["targetSession","unfold","onOnChangeUnfold"]),i("div",H,[i("header",null,[i("div",{style:{"font-size":"20px",cursor:"pointer"},class:u(["iconfont",b(N)?"icon-shousuo":"icon-zhankai"]),onClick:t[1]||(t[1]=(...e)=>b(J)&&b(J)(...e))},[v(l,{disabled:ve,activator:"parent",location:"bottom"},{default:p((()=>[m("展开/收缩")])),_:1})],2),Q,i("div",X,[i("div",{style:{"font-size":"20px",cursor:"pointer"},class:"iconfont icon-weibiaoti-yihuifu",onClick:t[2]||(t[2]=e=>de.value=!de.value)},[v(l,{disabled:ve,activator:"parent",location:"bottom"},{default:p((()=>[m("双栏")])),_:1})]),ve?(o(),y(k,{key:0},{activator:p((({props:e})=>[v(n,I({color:"indigo"},e,{rounded:""}),{default:p((()=>[Z])),_:2},1040)])),default:p((()=>[v(_,null,{default:p((()=>[v(r,{onClick:E},{default:p((()=>[ee,te])),_:1})])),_:1})])),_:1})):C("",!0),ve?C("",!0):(o(),y(n,{key:1,color:"brown",onClick:E},{default:p((()=>[le,ne])),_:1}))])]),i("div",ae,[v(b(h),{ref_key:"DynamicScrollerRef",ref:x,messageList:q.value,contentWidth:de.value?"80%":"70%"},null,8,["messageList","contentWidth"]),de.value?(o(),y(b(h),{key:0,ref_key:"SubDynamicScrollerRef",ref:M,messageList:Y.value,contentWidth:de.value?"80%":"70%"},null,8,["messageList","contentWidth"])):C("",!0),i("div",oe,[S(i("textarea",{ref_key:"textareaRef",ref:xe,"onUpdate:modelValue":t[3]||(t[3]=e=>fe.value=e),style:d({height:me.value}),class:"chat-input",placeholder:"Type your message here...",onKeyup:T(_e,["enter"]),onInput:be,onTouchend:ye,onFocus:ge,onBlur:he},null,36),[[L,!O.value],[V,fe.value]]),S(v(n,{class:"send",variant:"tonal",position:"absolute",onClick:g(we,["stop"])},{default:p((()=>[se,ie])),_:1},512),[[L,!O.value]]),S(i("div",ue,[v(w,{color:"primary",indeterminate:""}),ce],512),[[L,O.value]])])])])]),v(D,{modelValue:U.value,"onUpdate:modelValue":t[5]||(t[5]=e=>U.value=e),color:"blue-darken-4",location:"top",timeout:2500},{actions:p((()=>[v(n,{color:"white",variant:"text",onClick:t[4]||(t[4]=e=>U.value=!1)},{default:p((()=>[m(" Close ")])),_:1})])),default:p((()=>[m(f(U.text)+" ",1)])),_:1},8,["modelValue"]),v(pe,{"model-value":$.value,"onUpdate:modelValue":t[8]||(t[8]=e=>$.value=e),opacity:"0.5",width:"500"},{default:p((()=>[v(re,{title:"登录",color:"#2e2e3a",loading:P.value},{subtitle:p((()=>[m(" 请输入MID 详见小程序【个人中心】 ")])),default:p((()=>[v(j,{"model-value":z.value,"onUpdate:modelValue":t[6]||(t[6]=e=>z.value=e),style:{margin:"0 15px"},label:"MID",placeholder:"请输入MID"},null,8,["model-value"])])),actions:p((()=>[v(n,{variant:"flat",disabled:P.value,onClick:t[7]||(t[7]=e=>$.value=!1)},{default:p((()=>[m("取消")])),_:1},8,["disabled"]),v(n,{color:"blue-darken-4",variant:"flat",disabled:P.value,onClick:W},{default:p((()=>[m("提交")])),_:1},8,["disabled"]),v(n,{color:"green-darken-4",variant:"flat",disabled:P.value,onClick:R},{default:p((()=>[m("跳转到小程序")])),_:1},8,["disabled"])])),_:1},8,["loading"])])),_:1},8,["model-value"]),v(K,{dialog:B.value,"onUpdate:dialog":t[9]||(t[9]=e=>B.value=e)},null,8,["dialog"]),i("div",{class:"mask",style:d({zIndex:b(N)?"1":"-1"}),onClick:t[10]||(t[10]=(...e)=>b(J)&&b(J)(...e))},null,4)],64)}}},[["__scopeId","data-v-24af3f62"]]),ve=Object.freeze(Object.defineProperty({__proto__:null,default:de},Symbol.toStringTag,{value:"Module"}));export{O as _,ve as h};
