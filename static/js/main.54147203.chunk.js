(this["webpackJsonplindogram-web"]=this["webpackJsonplindogram-web"]||[]).push([[0],[,,,,,function(e,t,n){e.exports=n.p+"static/media/loading.90a378cd.gif"},,function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEkAAABJCAMAAABGrfvuAAAA9lBMVEXM1t24w8yfrLeOnaiEk6CAkJ3K1Nugrbd0hJJld4a3wst0hZOrt8Foeoiqt8GuusNneYjAy9NsfoyFlaG1wcqIl6OHlqPG0NiotL55iZd4iZZpeonDztW4xMyxvcaruMGsucKvu8S3w8zFz9dyg5GPnqq2wsuFlKHCzdRwgY+7x89zhJKToq1pe4nF0NeksbyJmaVneIfL1dzDzdW+ydG7xs/I09q9yNC0wMmerLZxgpDJ09qjsLp6ipfK1dxugI52h5SYprFmeIfH0tmElKB7i5jI0tp8jZqGlqKaqLOjsLulsryksbt9jZrI0tm3w8u1wMmms706zo1+AAABeklEQVR4AWIYqmAUjIJRMAoA7cFjgitrFAXQ3fFuxrZttm3OfzDvXbNO5TuVv3etLZfb4/W4XVvYiM8f4HcBvw+Obe/wVzvbcGh3j7/b24cjB0H+KXgAB0Jh/i0cgl6EViJQi9JaFFoxWotDKRGktWACOklKktBxU+KGToqSNHQylGSgkqUsC40cZTlo5CnLQ+OAsgNoFCgrQqNEWQkaZcrK0KhQVoFKlZIqdGqU1KBTp6QOpQatNaDVbNFKqwm1dod/67ThQKLb4+963QSc6Q+GOyN+NdoZDvrYxHgynZVn08kY/9iaL8rL8mKOzSxWjUN+ddhYLeDQ0fEJf3dyfAS909UZ/3a2OoXS8pzWzpfQGF9cUnJ5MYaxq2vaub6CocQN7d0kYOT2juvc3cLEPde7h4EHmnjAWltBmghuYY1xmmbSY9h7pKlH2PK1aKrlg50nmnuGnTTNpWFjRo0ZZBfUuIDshRovEN0GqRF8heSNOu+QfFBngF/8D0JfTp5XjfsjAAAAAElFTkSuQmCC"},function(e,t,n){e.exports=n.p+"static/media/img01.926bc1f2.jpg"},,,,,,,,function(e,t,n){e.exports=n.p+"static/media/me.d35238da.jpg"},,,,function(e,t,n){e.exports=n.p+"static/media/uploadIcon.b2a5b02e.png"},function(e,t,n){e.exports=n.p+"static/media/img02.91db8089.jpg"},function(e,t,n){e.exports=n.p+"static/media/img03.2f9a0849.jpg"},,,,,function(e,t,n){e.exports=n(37)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(12),o=n.n(l),c=(n(32),n(13)),i=n(14),u=n(24),s=n(15),m=n(25),d=n(1),f=(n(33),function(){return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"l_wrapper l_header"},r.a.createElement("div",{className:"header-inside clearfix"},r.a.createElement("a",{href:"#",className:"header-logo"},"Lindo"),r.a.createElement("nav",{className:"nav"},r.a.createElement("h1",{className:"nav-h1"},"Global Navigation Menu"),r.a.createElement("ul",{className:"nav-menu"},r.a.createElement("li",null,r.a.createElement("div",{className:"search"},r.a.createElement("input",{className:"search-input",type:"text",placeholder:"Search"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Profile")))))))}),p=n(23),g=n(3),b=n(2),E=(n(34),n(16)),h=n.n(E),v=n(8),x=n.n(v),j=n(5),O=n.n(j);function y(){var e=Object(d.a)(["\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column-reverse;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  margin: 0 auto;\n  background-color: #f8f9fa;\n"]);return y=function(){return e},e}var w=b.a.div(y()),N=function(e){var t=Object(a.useState)(!1),n=Object(g.a)(t,2),l=n[0],o=n[1],c=Object(a.useState)(e.posts.addFollow),i=Object(g.a)(c,2),u=i[0],s=i[1],m=Object(a.useState)(e.posts.addLike),d=Object(g.a)(m,2),f=d[0],p=d[1];return r.a.createElement(w,null,e.posts.length>0?e.posts.map((function(t){return r.a.createElement("article",{className:"feed"},r.a.createElement("header",{className:"feed-user-profile"},r.a.createElement("a",{href:"#"},r.a.createElement("img",{src:h.a,alt:"\ub204\uad70\uac00"})),r.a.createElement("dl",null,r.a.createElement("div",null,r.a.createElement("h1",null,r.a.createElement("a",{href:"#"},"sinnim")),r.a.createElement("span",{"aria-label":"Posted 10 minutes ago"},(new Date).getMinutes()," min")),r.a.createElement("button",{className:u?"following":"button",onClick:function(){s(!u)},type:"button"},u?"Following":"Follow"))),r.a.createElement("div",{className:"feed-content"},r.a.createElement("div",null,r.a.createElement("img",{src:t.images,alt:O.a})),r.a.createElement("p",null,t.contents)),r.a.createElement("footer",{className:"feed-footer"},r.a.createElement("button",{onClick:function(){p(!f)},type:"button"},r.a.createElement("span",null,f?11:10," Likes")),r.a.createElement("button",{onClick:function(){o(!l)},type:"button"},r.a.createElement("span",null,"0 Comments")),r.a.createElement("button",{onClick:function(){return e.editRow(t)},type:"button"},"Edit"),r.a.createElement("button",{onClick:function(){return e.deletePost(t.id)},type:"button"},"Delete")),r.a.createElement("form",{action:"",method:"#",className:"feed-comment"},r.a.createElement("textarea",{placeholder:"Write a comment"}),r.a.createElement("button",{type:"submit"},"Submit")),r.a.createElement("form",{action:"",method:"#",className:"".concat(l?"feed-comment-form":"isHidden")},r.a.createElement("textarea",{placeholder:"Write a comment"}),r.a.createElement("button",{type:"submit"},"Submit")))})):r.a.createElement("span",null,"No Posts"))},S=n(4),k=n(6),A=n(7),F=n.n(A),C=n(20),I=n.n(C);function J(){var e=Object(d.a)(["\n  display: flex;\n  justify-content: center;\n  height: 32px;\n  padding: 0 16px;\n  border-radius: 15px;\n  transition: background-color 100ms;\n  background-color: #0081ff;\n  color: #fff;\n  &:hover {\n    background-color: #006ffe;\n  }\n"]);return J=function(){return e},e}function K(){var e=Object(d.a)(["\n  display: flex;\n  justify-content: center;\n  height: 32px;\n  margin: 0 5px;\n  padding: 0 16px;\n  border-radius: 4px;\n"]);return K=function(){return e},e}function L(){var e=Object(d.a)(["\n  display: flex;\n  justify-content: flex-end;\n"]);return L=function(){return e},e}function q(){var e=Object(d.a)(["\n  display: flex;\n  justify-content: flex-start;\n  width: 49px;\n  height: 49px;\n  border-radius: 32px;\n  padding: 10px 0;\n"]);return q=function(){return e},e}function D(){var e=Object(d.a)(["\n  display: flex;\n  justify-content: flex-end;\n  border: none;\n  font: inherit;\n  vertical-align: baseline;\n  resize: none;\n  width: 100%;\n  height: 24.938px;\n  outline: none;\n  line-height: 1.5;\n  padding: 10px 0;\n"]);return D=function(){return e},e}function z(){var e=Object(d.a)(["\n  border: 1px solid #ddd;\n  width: 520px;\n  height: 127px;\n  margin: 50px auto;\n  padding: 30px;\n"]);return z=function(){return e},e}var G=b.a.div(z()),P=b.a.textarea(D()),Q=b.a.img(q()),Z=b.a.div(L()),B=b.a.div(K()),T=b.a.button(J()),M=function(e){var t={id:null,name:"",useravatar:F.a,contents:"",posted:"",images:O.a,follows:"Follow"},n=Object(a.useState)(t),l=Object(g.a)(n,2),o=l[0],c=l[1],i=r.a.useRef(null),u=r.a.useRef(null);return r.a.createElement(G,null,r.a.createElement("form",{onSubmit:function(n){n.preventDefault(),e.addPost(o),c(t)}},r.a.createElement("div",null,r.a.createElement(Q,{src:o.useravatar,alt:"@sinnim"}),r.a.createElement(P,{name:"contents",value:o.contents,onChange:function(e){var t=e.target,n=t.name,a=t.value;c(Object(k.a)({},o,Object(S.a)({},n,a))),localStorage.setItem(n,a)},placeholder:"What's happening?"})),r.a.createElement(Z,null,r.a.createElement("input",{type:"file",accept:"image/*",onChange:function(e){var t=Object(g.a)(e.target.files,1)[0];if(t){var n=new FileReader,a=i.current;a.file=t,n.onload=function(e){a.src=e.target.result},n.readAsDataURL(t)}},ref:u,style:{display:"none"}}),r.a.createElement(B,{style:{height:"32px",width:"15px"},onClick:function(){return u.current.click()}},r.a.createElement("img",{ref:i,style:{marginTop:"2px",height:"32px",width:"15px"},src:I.a,alt:"lindo"})),r.a.createElement(T,{type:"submit"},"Submit"))))};function W(){var e=Object(d.a)(["\n  height: 32px;\n  padding: 0 16px;\n  border-radius: 15px;\n  transition: background-color 100ms;\n  background-color: #0081ff;\n  color: #fff;\n  &:hover {\n    background-color: #006ffe;\n  }\n"]);return W=function(){return e},e}function R(){var e=Object(d.a)(["\n  display: flex;\n  flex-direction: row-reverse;\n"]);return R=function(){return e},e}function Y(){var e=Object(d.a)(["\n  display: flex;\n  justify-content: flex-end;\n  border: none;\n  font: inherit;\n  vertical-align: baseline;\n  resize: none;\n  width: 100%;\n  height: 24.938px;\n  outline: none;\n  line-height: 1.5;\n  padding: 10px 0;\n"]);return Y=function(){return e},e}function H(){var e=Object(d.a)(["\n  display: flex-box;\n  border: 1px solid #ddd;\n  width: 520px;\n  height: 500%;\n  margin: 400px auto;\n  padding: 20px;\n"]);return H=function(){return e},e}var U=b.a.div(H()),V=b.a.textarea(Y()),X=b.a.div(R()),_=b.a.button(W()),$=function(e){var t=Object(a.useState)(e.currentPost),n=Object(g.a)(t,2),l=n[0],o=n[1];Object(a.useEffect)((function(){o(e.currentPost)}),[e]);return document.body.scrollTop=document.body.scrollHeight,window.scrollTo(0,0),document.body.scrollTop=0,r.a.createElement(U,null,r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.updatePost(l.id,l)}},r.a.createElement("div",null,r.a.createElement(V,{type:"text",name:"contents",value:l.contents,onChange:function(e){var t=e.target,n=t.name,a=t.value;o(Object(k.a)({},l,Object(S.a)({},n,a)))},placeholder:"What's happening?"})),r.a.createElement(X,null,r.a.createElement(_,{onClick:function(){return e.setEditing(!1)}},"Cancel"),r.a.createElement(_,{type:"submit"},"Submit"))))},ee=n(21),te=n.n(ee),ne=n(22),ae=n.n(ne),re=function(){var e=localStorage.getItem("items")?JSON.parse(localStorage.getItem("items")):[{id:1,useravatar:{user:F.a},contents:"\ud398\ub8e8 \ucfe0\uc2a4\ucf54 \uc544\ub974\ub9c8\uc2a4 \uad11\uc7a5(Plaza de Armas) ",posted:"".concat((new Date).getMinutes()),images:x.a,addFollow:!1,addLike:!1},{id:2,useravatar:"/..images/user.png",contents:"\ub9c8\ucd94\ud53d\ucd94, \uadf8 \ud070 \ub3cc\uc744 \uc5b4\ub5bb\uac8c \uc62e\uacbc\uc744\uae4c?",posted:"".concat((new Date).getMinutes()),images:te.a,addFollow:!1,addLike:!1},{id:3,useravatar:"../images/user.png",contents:"\ube0c\ub77c\uc9c8 \ub9ac\uc6b0 Praia de Copacabana",posted:"".concat((new Date).getMinutes()),images:ae.a,addFollow:!1,addLike:!1}];localStorage.setItem("items",JSON.stringify(e));var t=JSON.parse(localStorage.getItem("items")),n=Object(a.useState)(t),l=Object(g.a)(n,2),o=l[0],c=l[1],i=Object(a.useState)(!1),u=Object(g.a)(i,2),s=u[0],m=u[1],d=Object(a.useState)({id:null,name:"",useravatar:"",contents:"",posted:""}),f=Object(g.a)(d,2),b=f[0],E=f[1];return r.a.createElement("div",null,r.a.createElement("section",null,r.a.createElement("div",null,s?r.a.createElement($,{editing:s,setEditing:m,currentPost:b,updatePost:function(e,t){m(!1),c(o.map((function(n){return n.id===e?t:n}))),b=o.map((function(n){return n.id===e?t:n})),localStorage.setItem("items",JSON.stringify(b))}}):r.a.createElement(M,{addPost:function(t){t.id=o.length+1,c([].concat(Object(p.a)(o),[t])),e.push(t),localStorage.setItem("items",JSON.stringify(e))}}))),r.a.createElement("section",null,r.a.createElement(N,{posts:o,deletePost:function(t){c(o.filter((function(e){return e.id!==t}))),e=o.filter((function(e){return e.id!==t})),localStorage.setItem("items",JSON.stringify(e))},editRow:function(e){m(!0),E({id:e.id,useravatar:e.useravatar,contents:e.contents,posted:e.posted})}})))};function le(){var e=Object(d.a)(["\n  margin: 0 auto;\n  display:flex; \n  justify-content: space-around;\n  max-width: 980px;\n  min-height:100%\n  font-size: 100%;\n  font-weight: bold;\n  color: #003569;\n  padding: 20px;\n"]);return le=function(){return e},e}var oe=b.a.footer(le()),ce=function(){var e=Object(a.useState)("react"),t=Object(g.a)(e,2),n=t[0],l=t[1];return r.a.createElement("div",{name:"footer",style:{flex:1}},r.a.createElement(oe,null,r.a.createElement("a",{href:"#",target:"_blank",rel:"noopener noreferrer"},"Terms"),r.a.createElement("a",{href:"#",target:"_blank",rel:"noopener noreferrer"},"Privacy policy"),r.a.createElement("a",{href:"#",target:"_blank",rel:"noopener noreferrer"},"Cookies"),r.a.createElement("a",{href:"#",target:"_blank",rel:"noopener noreferrer"},"Ads info"),r.a.createElement("div",{class:"dropdown"},r.a.createElement("select",{onChange:function(e){l(e.target.value)},value:n,style:{border:"0px",fontSize:"100%",color:"#003569;"}},r.a.createElement("option",{value:"react"},"About"),r.a.createElement("option",{value:"angular"},"Status"),r.a.createElement("option",{value:"vue"},"Businesses"),r.a.createElement("option",{value:"vue"},"Developers")),r.a.createElement("div",null)),r.a.createElement("span",null,"\xa9 ",(new Date).getFullYear()," Lindo, Inc.")))};function ie(){var e=Object(d.a)([""]);return ie=function(){return e},e}function ue(){var e=Object(d.a)([""]);return ue=function(){return e},e}var se=b.a.main(ue()),me=b.a.section(ie()),de=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null),r.a.createElement(se,null,r.a.createElement(me,null,r.a.createElement("ol",null,r.a.createElement("li",null,r.a.createElement(re,null))))),r.a.createElement(ce,null))}}]),t}(a.Component);o.a.render(r.a.createElement(de,null),document.getElementById("root"))}],[[27,1,2]]]);
//# sourceMappingURL=main.54147203.chunk.js.map