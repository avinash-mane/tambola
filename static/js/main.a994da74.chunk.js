(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{58:function(e,t,n){},60:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var c=n(5),r=n(4),a=n.n(r),s=n(48),i=n.n(s),l=(n(58),n(59),n(60),n(13)),o=n(9),d=n(74),j=n(72),b=n(73),u=n(14),p=n.p+"static/media/spin.16183bed.mp3",m=["Early 5","Top Line","Middle Line","Bottom Line","Four Corners","Full House 1"," Full House 2"];function h(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1],s=Object(r.useState)(!1),i=Object(o.a)(s,2),h=i[0],f=i[1],O=Object(r.useState)(1),x=Object(o.a)(O,2),g=x[0],v=x[1],y=Object(r.useState)(new Audio(p)),k=Object(o.a)(y,2),S=(k[0],k[1],Object(u.f)());Object(r.useEffect)((function(){n.length&&localStorage.setItem("numbers",JSON.stringify(n))}),[n]),Object(r.useEffect)((function(){var e=JSON.parse(localStorage.getItem("numbers"));e&&a(e)}),[]);var N=function(){for(var e=[],t=[],r=1;r<=90;r++)t.push(Object(c.jsx)("div",{className:"col  ".concat(n.includes(r)?"border-danger":""," rounded-pill mx-2 my-2"),style:{backgroundColor:n.includes(r)?"#d5e4f3":""},children:Object(c.jsx)("span",{style:{fontSize:"25px",color:n.includes(r)?"":"#6c757d",fontWeight:n.includes(r)?"bold":"100"},children:Object(c.jsx)("b",{children:r})})})),r%10===0&&(e.push(Object(c.jsx)("div",{className:"row",style:{margin:"0px",width:"auto",borderLeft:"1px solid #fff",borderRight:"1px solid"},children:t})),t=[]);return e};return Object(c.jsxs)("div",{className:"row",style:{height:"100vh",border:"2px solid"},children:[Object(c.jsxs)("div",{className:"col-3 d-flex align-items-center flex-column pt-3",style:{backgroundColor:"#adb5bd"},children:[Object(c.jsxs)("div",{className:"d-flex justify-content-center",children:[Object(c.jsx)(d.a,{variant:"info",onClick:function(){a([]),localStorage.removeItem("numbers")},size:"sm",children:"Reset"}),Object(c.jsx)(d.a,{className:"ml-3",variant:"secondary",onClick:function(){return S.push("/tickets")},size:"sm",children:"generate tickets"}),Object(c.jsx)(d.a,{className:"ml-3",style:{zIndex:1},variant:"warning",onClick:function(){return S.push("/card")},size:"sm",children:"Play Card"})]}),Object(c.jsx)("div",{style:{fontSize:"20px"},className:"pt-2",children:"Previous"}),Object(c.jsx)("div",{style:{width:"100px",height:"100px"},className:"d-flex align-items-center justify-content-center border border-secondary rounded-circle mb-1",children:0!==n.length&&Object(c.jsx)("span",{style:{fontSize:"60px",color:"grey"},children:n[n.length-2]})}),Object(c.jsx)("div",{style:{width:"200px",height:"200px",background:"#d5e4f3"},className:"d-flex align-items-center justify-content-center border border-dark rounded-circle",children:h?Object(c.jsx)("span",{style:{fontSize:"135px",color:"grey"},children:g}):n.length?Object(c.jsx)("span",{style:{fontSize:0!=n.length?"135px":"50px",fontWeight:"bold"},children:n[n.length-1]}):Object(c.jsx)("h2",{children:"Start With Spin \u21e9"})}),Object(c.jsx)(d.a,{className:"mt-3",onClick:function(){n.length<90&&function(){for(var e=setInterval((function(){var e=Math.floor(90*Math.random()+1);v(e)}),50),t=!0,c=function(){var c=Math.floor(90*Math.random()+1);n.includes(c)||(f(!0),t=!1,setTimeout((function(){clearInterval(e),a([].concat(Object(l.a)(n),[c])),f(!1)}),2e3))};t;)c()}()},disabled:h,children:h?Object(c.jsx)(j.a,{animation:"border",variant:"info"}):Object(c.jsx)(c.Fragment,{children:"Spin \u27f3"})}),Object(c.jsx)("div",{class:"d-flex flex-wrap mt-2 mx-4",children:m.map((function(e){return Object(c.jsx)(b.a,{style:{width:"120px",textAlign:"left"},className:"p-2",label:e})}))})]}),Object(c.jsx)("div",{className:"col-9 pt-2",style:{height:"100%",backgroundColor:"#adb5bd",borderLeft:"1px solid"},children:Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:Object(c.jsx)("b",{children:"Good Luck...!"})}),Object(c.jsx)("div",{class:"d-flex mx-5 mb-5 bg-dark",style:{borderColor:"#adb5bd",border:"5px solid #d5e4f3"},children:Object(c.jsx)(N,{})})]})})]})}var f=a.a.memo(h),O=n(0),x=n.n(O),g=n(3),v=n(50),y=n.n(v),k=n(31),S=n(51),N=n(36),w=Object(S.a)({apiKey:"AIzaSyAWBao_ZI8vLJIloZ4RN-iiwpCpQyjYznM",authDomain:"ticket-afeb3.firebaseapp.com",projectId:"ticket-afeb3",storageBucket:"ticket-afeb3.appspot.com",messagingSenderId:"12088333664",appId:"1:12088333664:web:5c99748047e3c7e964fa05",measurementId:"G-TKVGNV2VSX"}),C=Object(N.d)(w),I=[1,2,3,4,5,6],F=["red","green","blue","purple","orange","yellow"];function z(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1],s=Object(r.useState)(0),i=Object(o.a)(s,2),l=i[0],j=i[1],b=Object(r.useState)(1),p=Object(o.a)(b,2),m=p[0],h=p[1],f=Object(r.useState)(""),O=Object(o.a)(f,2),v=O[0],S=O[1],N=Object(r.useState)(!1),w=Object(o.a)(N,2),z=w[0],L=w[1],A=Object(u.f)(),T=function(){var e=Object(g.a)(x.a.mark((function e(){var t,c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("admin123"!==v){e.next=9;break}return t=Object(k.b)(C,"tickets","tickets"),c={list:JSON.stringify(n),players:parseInt(l),sets:m},e.next=5,Object(k.d)(t,c);case 5:alert("tickets uploaded successfully"),L(!1),e.next=10;break;case 9:alert("password mismatch");case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(e,t){var n=Math.floor(t/m)+1,r=F[t%m];return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"mb-4",children:Object(c.jsxs)("div",{id:"".concat(n,"_").concat(r),style:{marginLeft:"20px",padding:"30px",background:"#fff"},className:"border border-success",children:[Object(c.jsx)("span",{children:r}),e._entries.map((function(e){return Object(c.jsx)("div",{class:"row ",children:e.map((function(e){return Object(c.jsx)("div",{class:"col border border-dark",style:{width:"40px",height:"40px",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"20px",background:e?"#fff":r},children:e||" "})}))})})),Object(c.jsxs)("span",{children:[" ticket : ","".concat(n,"_").concat(r)]})]})})})};return Object(c.jsx)(c.Fragment,{children:n.length?Object(c.jsxs)("div",{style:{background:"#cccbab"},className:"mb-5",children:[Object(c.jsx)(d.a,{onClick:function(){return A.push("/")},size:"sm",variant:"success",className:"mb-2",children:"Home"}),Object(c.jsx)(d.a,{onClick:function(){return L((function(e){return!e}))},size:"sm",variant:"warning",className:"ml-2 mb-2",children:"Upload Ticket"}),z&&Object(c.jsxs)("div",{children:[Object(c.jsx)("input",{type:"text",value:v,onChange:function(e){return S(e.target.value)}}),Object(c.jsx)(d.a,{onClick:T,size:"sm",variant:"primary",className:"ml-2 mb-2",children:"Submit"})]}),Object(c.jsx)("div",{className:"row",children:n.map((function(e,t){return E(e,t)}))})]}):Object(c.jsx)("div",{className:"row",style:{height:"100vh",background:"#cccbab",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(c.jsxs)("div",{children:[Object(c.jsx)(d.a,{onClick:function(){return A.push("/")},size:"sm",variant:"success",className:"mb-2",children:"Home"}),Object(c.jsx)("div",{children:Object(c.jsx)("input",{style:{padding:"10px"},placeholder:"enter number of players",onChange:function(e){return j(e.target.value)},type:"number"})}),Object(c.jsxs)("div",{className:"mt-2",children:[Object(c.jsx)("label",{className:"mr-3",children:"select number of sets : "}),Object(c.jsx)("select",{onChange:function(e){return h(parseInt(e.target.value))},className:"px-2 py-1",children:I.map((function(e){return Object(c.jsx)("option",{value:e,children:e})}))})]}),Object(c.jsx)("div",{className:"mt-5",children:Object(c.jsx)(d.a,{onClick:function(){var e=y.a.generateTickets(parseInt(l*m));a(e)},variant:"success",children:"Generate Tickets"})})]})})})}var L=a.a.memo(z),A=n(32),T=n.p+"static/media/clap.ba7b35d2.mp3",E=n.p+"static/media/clapman.d389f1c3.gif",M=["red","green","blue","purple","orange","yellow"],J=["top","middle","bottom"],_={all:0,top:0,bottom:0,middle:0,corner:0};function B(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1],s=Object(r.useState)(1),i=Object(o.a)(s,2),j=i[0],b=i[1],p=Object(r.useState)(""),m=Object(o.a)(p,2),h=m[0],f=m[1],O=Object(u.g)().ticketId,v="",y=Object(r.useState)(new Audio(T)),S=Object(o.a)(y,2),N=S[0],w=(S[1],Object(r.useState)(0)),I=Object(o.a)(w,2),F=I[0],z=I[1],L=Object(r.useState)([]),B=Object(o.a)(L,2),W=B[0],H=B[1],D=Object(r.useState)([]),G=Object(o.a)(D,2),P=G[0],R=G[1],V=Object(k.a)(C,"tickets"),K=Object(r.useState)(null),Z=Object(o.a)(K,2),Q=Z[0],U=Z[1],X=Object(r.useState)(Object(l.a)(Array(3)).map((function(e){return Array(9).fill(null)}))),Y=Object(o.a)(X,2),q=Y[0],$=Y[1],ee=Object(r.useState)([]),te=Object(o.a)(ee,2),ne=te[0],ce=te[1];Object(r.useEffect)((function(){(function(){var e=Object(g.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(k.c)(V);case 2:t=(t=e.sent).docs[0].data(),a(JSON.parse(t.list)),b(t.sets),z(t.players);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(r.useEffect)((function(){O&&f(parseInt(O))}),[O]),Object(r.useEffect)((function(){Q&&setTimeout((function(){U(null)}),3500)}),[Q]);Object(r.useEffect)((function(){if(n.length>0&&j&&parseInt(h)<=F&&parseInt(h)>0){ce(Object(l.a)(Array(j)).map((function(e){return Object(A.a)({},_)}))),$(Object(l.a)(Array(j)).map((function(e){return Object(l.a)(Array(3)).map((function(e){return Array(9).fill(null)}))})));for(var e=[],t=(parseInt(h)-1)*j;t<parseInt(h)*j;t++)e.push(n[t]);!function(e){var t=[];e.map((function(e){var n=[];e._entries[0].map((function(e){0!=e&&n.push(e)}));var c=[];e._entries[2].map((function(e){0!=e&&c.push(e)}));var r=[n[0],n[4],c[0],c[4]];t.push(r)})),R(t)}(e),H(e)}}),[h,n,F,j]);return Object(c.jsxs)(c.Fragment,{children:[""===h&&Object(c.jsxs)("div",{children:[Object(c.jsx)("input",{placeholder:"insert you ticket id",className:"m-5 p-3",onChange:function(e){return v=e.target.value}}),Object(c.jsx)(d.a,{onClick:function(){return f(v)},className:"m-5",variant:"success",children:"Submit"})]}),W.map((function(e,t){return Object(c.jsxs)("div",{style:{background:"#fff",border:"1px solid"},className:"d-sm-flex p-1 p-md-3 m-0 m-md-3",children:[Object(c.jsx)("div",{className:"w-sm-100 col-sm-9 p-0",children:e._entries.map((function(e,n){return Object(c.jsx)("div",{style:{display:"flex",height:"30%"},children:e.map((function(e,r){return Object(c.jsx)("button",{style:{width:"15%",minWidth:"30px",border:"1px solid",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"20px",padding:"2%",background:e?q[t][n][r]?"#6c757d":"#fff":M[t],cursor:e?"pointer":"unset",textDecoration:q[t][n][r]?"line-through":"none",textDecorationThickness:q[t][n][r]?"1px":"none"},onClick:function(c){return function(e,t,n,c){if(0!=c){var r=Object(l.a)(q),a=Object(A.a)({},ne);null===r[e][t][n]?(r[e][t][n]=c,a[e].all=ne[e].all+1,a[e][J[t]]=ne[e][J[t]]+1,P[e].includes(c)&&(a[e].corner=ne[e].corner+1)):(r[e][t][n]=null,a[e].all=ne[e].all-1,a[e][J[t]]=ne[e][J[t]]-1,P[e].includes(c)&&(a[e].corner=ne[e].corner-1)),$(r),ce(a),15==a[e].all&&(U(e+1),N.play())}}(t,n,r,e)},children:e||" "})}))})}))}),15==ne[t].all?Q==t+1&&Object(c.jsx)("img",{src:E,height:"180px",className:"p-2"}):Object(c.jsxs)("div",{style:{textAlign:"left",marginLeft:"10px",fontSize:"14px",fontWeight:"600"},children:[Object(c.jsxs)("div",{style:{padding:"3px"},children:["Early 5: ",ne[t].all>=5?Object(c.jsx)(c.Fragment,{children:"\u2705"}):Object(c.jsx)(c.Fragment,{children:"\u274c"})]}),Object(c.jsxs)("div",{style:{padding:"3px"},children:["Top Line: ",5==ne[t].top?Object(c.jsx)(c.Fragment,{children:"\u2705"}):Object(c.jsx)(c.Fragment,{children:"\u274c"})]}),Object(c.jsxs)("div",{style:{padding:"3px"},children:["Middle Line: ",5==ne[t].middle?Object(c.jsx)(c.Fragment,{children:"\u2705"}):Object(c.jsx)(c.Fragment,{children:"\u274c"})]}),Object(c.jsxs)("div",{style:{padding:"3px"},children:["Bottom Line: ",5==ne[t].bottom?Object(c.jsx)(c.Fragment,{children:"\u2705"}):Object(c.jsx)(c.Fragment,{children:"\u274c"})]}),Object(c.jsxs)("div",{style:{padding:"3px"},children:["Four Corners: ",4==ne[t].corner?Object(c.jsx)(c.Fragment,{children:"\u2705"}):Object(c.jsx)(c.Fragment,{children:"\u274c"})]}),Object(c.jsxs)("div",{style:{padding:"3px"},children:["Full House 1: ",15==ne[t].all?Object(c.jsx)(c.Fragment,{children:"\u2705"}):Object(c.jsx)(c.Fragment,{children:"\u274c"})]})]})]})})),""!==h&&0!=F&&(parseInt(h)>F||h<=0)&&Object(c.jsx)("h1",{children:"Card Not Found"})]})}var W=a.a.memo(B);function H(){return Object(c.jsx)("div",{className:"App",style:{overflow:"hidden"},children:Object(c.jsxs)(u.c,{children:[Object(c.jsx)(u.a,{path:"/tickets",component:L}),Object(c.jsx)(u.a,{path:"/card/:ticketId",component:W}),Object(c.jsx)(u.a,{path:"/card",component:W}),Object(c.jsx)(u.a,{path:"/",component:f})]})})}var D=a.a.memo(H),G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,75)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))},P=n(28);i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(P.a,{children:Object(c.jsx)(D,{})})}),document.getElementById("root")),G()}},[[71,1,2]]]);
//# sourceMappingURL=main.a994da74.chunk.js.map