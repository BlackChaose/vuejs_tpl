(function(e){function t(t){for(var r,i,s=t[0],o=t[1],m=t[2],c=0,_=[];c<s.length;c++)i=s[c],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&_.push(n[i][0]),n[i]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);u&&u(t);while(_.length)_.shift()();return l.push.apply(l,m||[]),a()}function a(){for(var e,t=0;t<l.length;t++){for(var a=l[t],r=!0,s=1;s<a.length;s++){var o=a[s];0!==n[o]&&(r=!1)}r&&(l.splice(t--,1),e=i(i.s=a[0]))}return e}var r={},n={app:0},l=[];function i(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=r,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/massmail/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=t,s=s.slice();for(var m=0;m<s.length;m++)t(s[m]);var u=o;l.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var r=a("85ec"),n=a.n(r);n.a},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("custom-send-mail",{attrs:{value_button:"Отправить",label_mail_from:"Адрес для ответа",label_message_text:"текст сообщения",label_mail_theme:"Тема сообщения",label_query_select:"кастомный запрос",label_attach_file:"прикрепить файл"}})],1)},l=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"CustomSendMail"}},[a("form",{attrs:{id:"form_mailer_1",enctype:"multipart/form-data",method:"post"}},[a("label",{attrs:{for:"input_mail_from",bind:e.label_mail_from}},[e._v(e._s(e.label_mail_from))]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.mail_from,expression:"mail_from"}],attrs:{id:"input_mail_from",name:"input_from",type:"text"},domProps:{value:e.mail_from},on:{input:function(t){t.target.composing||(e.mail_from=t.target.value)}}}),a("br"),a("label",{attrs:{for:"input_mail_theme",bind:e.label_mail_theme}},[e._v(e._s(e.label_mail_theme))]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.mail_theme,expression:"mail_theme"}],attrs:{id:"input_mail_theme",name:"input_theme",type:"text"},domProps:{value:e.mail_theme},on:{input:function(t){t.target.composing||(e.mail_theme=t.target.value)}}}),a("br"),a("label",{attrs:{for:"message_text_id",bind:e.label_message_text}},[e._v(e._s(e.label_message_text))]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.message_text,expression:"message_text"}],attrs:{id:"message_text_id",name:"message_text",rows:"8",cols:"55"},domProps:{value:e.message_text},on:{input:function(t){t.target.composing||(e.message_text=t.target.value)}}}),a("br"),a("label",{attrs:{for:"input_attach_file",bind:e.label_attach_file}},[e._v(e._s(e.label_attach_file)+" ")]),a("input",{attrs:{id:"input_attach_file",type:"file",name:"attached_file",multiple:""},on:{change:e.addFiles}}),a("br"),a("label",{attrs:{for:"query_select",bind:e.label_query_select}},[e._v(e._s(e.label_query_select))]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.select_text,expression:"select_text"}],attrs:{id:"query_select",name:"select_text",rows:"8",cols:"55"},domProps:{value:e.select_text},on:{input:function(t){t.target.composing||(e.select_text=t.target.value)}}}),a("br"),a("button",{attrs:{id:"btn1"},on:{click:e.senddata}},[e._v(" "+e._s(e.value_button))]),a("br")])])},s=[],o=(a("b0c0"),a("d3b7"),a("96cf"),{name:"CustomSendMail",props:["dataset","label_mail_from","label_mail_theme","label_message_text","label_query_select","label_attach_file","value_button"],data:function(){return{un_attach_file:[],mail_from:"nik@0x4e494b.ru",mail_theme:"questions",message_text:"some text",select_text:"Select * from tables"}},methods:{addFiles:function(e){var t,a,r,n;return regeneratorRuntime.async((function(l){while(1)switch(l.prev=l.next){case 0:for(e.preventDefault(),t=new FormData,a=document.getElementById("input_attach_file"),t.append("title","attachments to the message"),r=0;r<a.files.length;r++)t.append("attachment",a.files[r]);return l.next=7,regeneratorRuntime.awrap(fetch("/massmail/ajax_massmail.php",{method:"post",mode:"same-origin",cache:"no-cache",credentials:"same-origin",redirect:"follow",referrer:"no-referrer",body:t}));case 7:return n=l.sent,l.prev=8,l.next=11,regeneratorRuntime.awrap(n.json());case 11:l.sent,l.next=17;break;case 14:l.prev=14,l.t0=l["catch"](8),console.log("There has been a problem with your fetch operation: ",l.t0.message);case 17:case"end":return l.stop()}}),null,null,[[8,14]])},senddata:function(e){var t,a,r,n;return regeneratorRuntime.async((function(l){while(1)switch(l.prev=l.next){case 0:return e.preventDefault(),t=document.getElementById("input_attach_file"),a=t.files[0],console.log(a),a&&(r={lastModified:a.lastModified,lastModifiedDate:a.lastModifiedDate,name:a.name,size:a.size,type:a.type},JSON.stringify(r),this.un_attach_file=r),l.next=7,regeneratorRuntime.awrap(fetch("/massmail/ajax_massmail.php",{method:"post",mode:"same-origin",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"follow",referrer:"no-referrer",body:JSON.stringify({query_data:{attach_file:this.un_attach_file,mail_f:this.mail_from,mail_t:this.mail_theme,message:this.message_text,select:this.select_text}})}));case 7:return n=l.sent,l.next=10,regeneratorRuntime.awrap(n.json());case 10:l.sent;case 11:case"end":return l.stop()}}),null,this)}}}),m=o,u=a("2877"),c=Object(u["a"])(m,i,s,!1,null,null,null),_=c.exports,p={name:"app",props:["value"],components:{CustomSendMail:_}},f=p,d=(a("034f"),Object(u["a"])(f,n,l,!1,null,null,null)),h=d.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(h)}}).$mount("#app")},"85ec":function(e,t,a){}});
//# sourceMappingURL=app.cc9fadcf.js.map