(this["webpackJsonplindogram-web"]=this["webpackJsonplindogram-web"]||[]).push([[0],{20:function(e,t,n){e.exports=n(30)},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(9),i=n.n(l),o=(n(25),n(10)),c=n(11),u=n(17),s=n(12),m=n(18),d=n(1),f=(n(26),function(){return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"l_wrapper l_header"},r.a.createElement("div",{className:"header-inside clearfix"},r.a.createElement("a",{href:"#",className:"header-logo"},"Lindo"),r.a.createElement("nav",{className:"nav"},r.a.createElement("h1",{className:"nav-h1"},"Global Navigation Menu"),r.a.createElement("ul",{className:"nav-menu"},r.a.createElement("li",null,r.a.createElement("div",{className:"search"},r.a.createElement("input",{className:"search-input",type:"text",placeholder:"Search"}))),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Profile")))))))}),p=n(16),g=n(3),h=n(2);n(27);function b(){var e=Object(d.a)(["\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  margin: 0 auto;\n  background-color: #f8f9fa;\n"]);return b=function(){return e},e}var v=h.a.div(b()),E=function(e){return window.onload=function(){var e=document.querySelector(".feed-user-profile button"),t=document.querySelector(".feed-footer button:first-child"),n=document.querySelector(".feed-footer button:nth-child(2)"),a=document.querySelector(".feed-comment");e.addEventListener("click",(function(){this.following?(this.innerHTML="Follow",this.classList.remove("following")):(this.innerHTML="Following",this.classList.add("following")),this.following=!this.following})),e.following=!1,t.addEventListener("click",(function(){this.following?(this.innerHTML="10 Likes",this.classList.remove("active")):(this.innerHTML="11 Likes",this.classList.add("active")),this.following=!this.following})),t.following=!1,n.addEventListener("click",(function(){this.active?a.classList.remove("active"):a.classList.add("active"),this.active=!this.active})),n.active=!1},r.a.createElement(v,null,e.posts.length>0?e.posts.map((function(t){return r.a.createElement("article",{className:"feed"},r.a.createElement("header",{className:"feed-user-profile"},r.a.createElement("a",{href:"#"},r.a.createElement("img",{src:"../images/me.jpg",alt:"\ub204\uad70\uac00"})),r.a.createElement("dl",null,r.a.createElement("div",null,r.a.createElement("h1",null,r.a.createElement("a",{href:"#"},"sinnim")),r.a.createElement("span",{"aria-label":"Posted 10 minutes ago"},(new Date).getMinutes()," min")),r.a.createElement("button",{className:"feed-user-profile-followbtn",type:"button"},"Follow"))),r.a.createElement("div",{className:"feed-content"},r.a.createElement("div",null,r.a.createElement("img",{src:t.images,alt:""})),r.a.createElement("p",null,t.contents)),r.a.createElement("footer",{className:"feed-footer"},r.a.createElement("button",{type:"button"},r.a.createElement("span",null,"10 Likes")),r.a.createElement("button",{type:"button"},r.a.createElement("span",null,"0 Comments")),r.a.createElement("button",{onClick:function(){return e.editRow(t)},type:"button"},"Edit"),r.a.createElement("button",{onClick:function(){return e.deletePost(t.id)},type:"button"},"Delete")),r.a.createElement("form",{action:"",method:"#",class:"feed-comment"},r.a.createElement("textarea",{placeholder:"Write a comment"}),r.a.createElement("button",{type:"submit"},"Submit")))})):r.a.createElement("span",null,"No Posts"))},x=n(4),y=n(5);function j(){var e=Object(d.a)(["\n  display: flex;\n  justify-content: center;\n  height: 32px;\n  padding: 0 16px;\n  border-radius: 15px;\n  transition: background-color 100ms;\n  background-color: #0081ff;\n  color: #fff;\n  &:hover {\n    background-color: #006ffe;\n  }\n"]);return j=function(){return e},e}function w(){var e=Object(d.a)(["\n  display: flex;\n  justify-content: center;\n  height: 32px;\n  margin: 0 5px;\n  padding: 0 16px;\n  border-radius: 4px;\n"]);return w=function(){return e},e}function O(){var e=Object(d.a)(["\n  display: flex;\n  justify-content: flex-end;\n"]);return O=function(){return e},e}function S(){var e=Object(d.a)(["\n  display: flex;\n  justify-content: flex-start;\n  width: 49px;\n  height: 49px;\n  border-radius: 32px;\n  padding: 10px 0;\n"]);return S=function(){return e},e}function k(){var e=Object(d.a)(["\n  display: flex;\n  justify-content: flex-end;\n  border: none;\n  font: inherit;\n  vertical-align: baseline;\n  resize: none;\n  width: 100%;\n  height: 24.938px;\n  outline: none;\n  line-height: 1.5;\n  padding: 10px 0;\n"]);return k=function(){return e},e}function N(){var e=Object(d.a)(["\n  border: 1px solid #ddd;\n  width: 520px;\n  height: 127px;\n  margin: 50px auto;\n  padding: 30px;\n"]);return N=function(){return e},e}var L=h.a.div(N()),P=h.a.textarea(k()),C=h.a.img(S()),I=h.a.div(O()),D=h.a.div(w()),M=h.a.button(j()),T=function(e){var t={id:null,name:"",useravatar:"../images/user.png",contents:"",posted:"",images:"../images/loding.gif"},n=Object(a.useState)(t),l=Object(g.a)(n,2),i=l[0],o=l[1],c=r.a.useRef(null),u=r.a.useRef(null);return r.a.createElement(L,null,r.a.createElement("form",{onSubmit:function(n){n.preventDefault(),e.addPost(i),o(t)}},r.a.createElement("div",null,r.a.createElement(C,{src:i.useravatar,alt:"@sinnim"}),r.a.createElement(P,{name:"contents",value:i.contents,onChange:function(e){var t=e.target,n=t.name,a=t.value;o(Object(y.a)({},i,Object(x.a)({},n,a))),localStorage.setItem(n,a)},placeholder:"What's happening?"})),r.a.createElement(I,null,r.a.createElement("input",{type:"file",accept:"image/*",onChange:function(e){var t=Object(g.a)(e.target.files,1)[0];if(t){var n=new FileReader,a=c.current;a.file=t,n.onload=function(e){a.src=e.target.result},n.readAsDataURL(t)}},ref:u,style:{display:"none"}}),r.a.createElement(D,{style:{height:"32px",width:"15px"},onClick:function(){return u.current.click()}},r.a.createElement("img",{ref:c,style:{marginTop:"2px",height:"32px",width:"15px"},src:"../images/uploadIcon.png",alt:"lindo"})),r.a.createElement(M,{onClick:function(){window.scrollBy(0,1055e6)},type:"submit"},"Submit"))))};function J(){var e=Object(d.a)(["\n  height: 32px;\n  padding: 0 16px;\n  border-radius: 15px;\n  transition: background-color 100ms;\n  background-color: #0081ff;\n  color: #fff;\n  &:hover {\n    background-color: #006ffe;\n  }\n"]);return J=function(){return e},e}function z(){var e=Object(d.a)(["\n  display: flex;\n  flex-direction: row-reverse;\n"]);return z=function(){return e},e}function F(){var e=Object(d.a)(["\n  display: flex;\n  justify-content: flex-end;\n  border: none;\n  font: inherit;\n  vertical-align: baseline;\n  resize: none;\n  width: 100%;\n  height: 24.938px;\n  outline: none;\n  line-height: 1.5;\n  padding: 10px 0;\n"]);return F=function(){return e},e}function R(){var e=Object(d.a)(["\n  display: flex-box;\n  border: 1px solid #ddd;\n  width: 520px;\n  height: 500%;\n  margin: 400px auto;\n  padding: 20px;\n"]);return R=function(){return e},e}var _=h.a.div(R()),H=h.a.textarea(F()),q=h.a.div(z()),A=h.a.button(J()),B=function(e){var t=Object(a.useState)(e.currentPost),n=Object(g.a)(t,2),l=n[0],i=n[1];Object(a.useEffect)((function(){i(e.currentPost)}),[e]);return document.body.scrollTop=document.body.scrollHeight,window.scrollTo(0,0),document.body.scrollTop=0,r.a.createElement(_,null,r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.updatePost(l.id,l)}},r.a.createElement("div",null,r.a.createElement(H,{type:"text",name:"contents",value:l.contents,onChange:function(e){var t=e.target,n=t.name,a=t.value;i(Object(y.a)({},l,Object(x.a)({},n,a)))},placeholder:"What's happening?"})),r.a.createElement(q,null,r.a.createElement(A,{onClick:function(){return e.setEditing(!1)}},"Cancel"),r.a.createElement(A,{type:"submit"},"Submit"))))},W=function(){var e=localStorage.getItem("items")?JSON.parse(localStorage.getItem("items")):[{id:1,useravatar:"../images/user.png",contents:"\ud398\ub8e8 \ucfe0\uc2a4\ucf54 \uc544\ub974\ub9c8\uc2a4 \uad11\uc7a5(Plaza de Armas) ",posted:"".concat((new Date).getMinutes()),images:"../images/img01.jpg"},{id:2,useravatar:"/..images/user.png",contents:"\ub9c8\ucd94\ud53d\ucd94, \uadf8 \ud070 \ub3cc\uc744 \uc5b4\ub5bb\uac8c \uc62e\uacbc\uc744\uae4c?",posted:"".concat((new Date).getMinutes()),images:"../images/img02.jpg"},{id:3,useravatar:"../images/user.png",contents:"\ube0c\ub77c\uc9c8 \ub9ac\uc6b0 Praia de Copacabana",posted:"".concat((new Date).getMinutes()),images:"../images/img03.jpg"}];localStorage.setItem("items",JSON.stringify(e));var t=JSON.parse(localStorage.getItem("items")),n=Object(a.useState)(t),l=Object(g.a)(n,2),i=l[0],o=l[1],c=Object(a.useState)(!1),u=Object(g.a)(c,2),s=u[0],m=u[1],d=Object(a.useState)({id:null,name:"",useravatar:"",contents:"",posted:""}),f=Object(g.a)(d,2),h=f[0],b=f[1];return r.a.createElement("div",null,r.a.createElement("section",null,r.a.createElement("div",null,s?r.a.createElement(B,{editing:s,setEditing:m,currentPost:h,updatePost:function(e,t){m(!1),o(i.map((function(n){return n.id===e?t:n}))),h=i.map((function(n){return n.id===e?t:n})),localStorage.setItem("items",JSON.stringify(h))}}):r.a.createElement(T,{addPost:function(t){t.id=i.length+1,o([].concat(Object(p.a)(i),[t])),e.push(t),localStorage.setItem("items",JSON.stringify(e))}}))),r.a.createElement("section",null,r.a.createElement(E,{posts:i,deletePost:function(t){o(i.filter((function(e){return e.id!==t}))),e=i.filter((function(e){return e.id!==t})),localStorage.setItem("items",JSON.stringify(e))},editRow:function(e){m(!0),b({id:e.id,useravatar:e.useravatar,contents:e.contents,posted:e.posted})}})))};function G(){var e=Object(d.a)(["\n  margin: 0 auto;\n  display:flex; \n  justify-content: space-around;\n  max-width: 980px;\n  min-height:100%\n  font-size: 100%;\n  font-weight: bold;\n  color: #003569;\n  padding: 20px;\n"]);return G=function(){return e},e}var U=h.a.footer(G()),Y=function(){var e=Object(a.useState)("react"),t=Object(g.a)(e,2),n=t[0],l=t[1];return r.a.createElement("div",{name:"footer",style:{flex:1}},r.a.createElement(U,null,r.a.createElement("a",{href:"#",target:"_blank",rel:"noopener noreferrer"},"Terms"),r.a.createElement("a",{href:"#",target:"_blank",rel:"noopener noreferrer"},"Privacy policy"),r.a.createElement("a",{href:"#",target:"_blank",rel:"noopener noreferrer"},"Cookies"),r.a.createElement("a",{href:"#",target:"_blank",rel:"noopener noreferrer"},"Ads info"),r.a.createElement("div",{class:"dropdown"},r.a.createElement("select",{onChange:function(e){l(e.target.value)},value:n,style:{border:"0px",fontSize:"100%",color:"#003569;"}},r.a.createElement("option",{value:"react"},"About"),r.a.createElement("option",{value:"angular"},"Status"),r.a.createElement("option",{value:"vue"},"Businesses"),r.a.createElement("option",{value:"vue"},"Developers")),r.a.createElement("div",null)),r.a.createElement("span",null,"\xa9 ",(new Date).getFullYear()," Lindo, Inc.")))};function K(){var e=Object(d.a)([""]);return K=function(){return e},e}function Q(){var e=Object(d.a)([""]);return Q=function(){return e},e}var V=h.a.main(Q()),X=h.a.section(K()),Z=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null),r.a.createElement(V,null,r.a.createElement(X,null,r.a.createElement("ol",null,r.a.createElement("li",null,r.a.createElement(W,null))))),r.a.createElement(Y,null))}}]),t}(a.Component);i.a.render(r.a.createElement(Z,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.78da8ffd.chunk.js.map