(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1e94789a"],{"02ea":function(e,t,r){"use strict";var a=r("54ff"),n=r.n(a);n.a},"0642":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"body"},[r("div",{staticClass:"header"},[r("Headergoback",[r("span",{attrs:{slot:"Headertitle"},slot:"Headertitle"},[e._v(e._s(e.title))])])],1),r("div",{staticStyle:{"padding-top":"6vh"}},[r("van-form",{on:{submit:e.onSubmit}},[r("van-field",{attrs:{type:"text",name:"用户名",label:"用户名",placeholder:"用户名",readonly:"",rules:[{required:!0,message:"请填写用户名"}]},model:{value:e.villager.name,callback:function(t){e.$set(e.villager,"name",t)},expression:"villager.name"}}),r("van-field",{attrs:{type:"text",name:"账号",label:"账号",placeholder:"账号",readonly:"",rules:[{required:!0,message:"请填写账号"}]},model:{value:e.villager.account,callback:function(t){e.$set(e.villager,"account",t)},expression:"villager.account"}}),r("van-field",{attrs:{type:"password",name:"密码",label:"密码",placeholder:"密码",rules:[{required:!1,message:"请填写密码"}]},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),r("van-field",{attrs:{type:"text",name:"联系方式",label:"联系方式",placeholder:"联系方式",rules:[{required:!0,message:"请填写联系方式"}]},model:{value:e.villager.phone,callback:function(t){e.$set(e.villager,"phone",t)},expression:"villager.phone"}}),r("van-field",{attrs:{type:"text",name:"地址",label:"地址",placeholder:"地址",rules:[{required:!0,message:"请填写地址"}]},model:{value:e.villager.address,callback:function(t){e.$set(e.villager,"address",t)},expression:"villager.address"}}),r("van-field",{attrs:{name:"radio",label:"单选框"},scopedSlots:e._u([{key:"input",fn:function(){return[r("van-radio-group",{attrs:{direction:"horizontal"},model:{value:e.villager.sex,callback:function(t){e.$set(e.villager,"sex",t)},expression:"villager.sex"}},[r("van-radio",{attrs:{name:0,value:0}},[e._v("男")]),r("van-radio",{attrs:{name:1,value:1}},[e._v("女")])],1)]},proxy:!0}])}),r("div",{staticStyle:{margin:"16px"}},[r("van-button",{attrs:{round:"",block:"",type:"danger","native-type":"submit"}},[e._v(" 提交 ")])],1)],1)],1)])},n=[],i=(r("a9e3"),r("4fad"),r("d3b7"),r("25f0"),r("3835")),o=r("1bab"),l=r("a0fb"),s={name:"updataProfile",data:function(){return{title:"编辑我的资料",villager:{},password:""}},created:function(){var e=this;Object(o["E"])(this.$store.state.userid).then((function(t){console.log(t);for(var r=0,a=Object.entries(t);r<a.length;r++){var n=Object(i["a"])(a[r],2),o=n[0],l=n[1];null!=l&&e.$set(e.villager,o,l)}console.log(e.villager)}))},components:{Headergoback:l["a"]},methods:{onSubmit:function(e){var t=this;this.$dialog.confirm({title:"编辑资料",message:"确认修改吗？"}).then((function(){return t.$set(t.villager,"village",Number(t.$store.state.vid)),t.$set(t.villager,"group",Number(t.$store.state.zid)),t.$set(t.villager,"password",t.password.toString()),Object(o["G"])(t.$store.state.userid,t.villager)})).catch((function(){})).then((function(e){console.log(e),void 0!=e?t.$toast.success("操作成功！"):t.$toast.fail("操作失败！")}),(function(e){console.log(res),t.$toast.fail("操作失败！")}))}}},c=s,u=(r("6f1e"),r("2877")),d=Object(u["a"])(c,a,n,!1,null,null,null);t["default"]=d.exports},"06c5":function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));r("a630"),r("fb6a"),r("b0c0"),r("d3b7"),r("25f0"),r("3ca3");var a=r("6b75");function n(e,t){if(e){if("string"===typeof e)return Object(a["a"])(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Object(a["a"])(e,t):void 0}}},3835:function(e,t,r){"use strict";function a(e){if(Array.isArray(e))return e}r.d(t,"a",(function(){return l}));r("a4d3"),r("e01a"),r("d28b"),r("e260"),r("d3b7"),r("3ca3"),r("ddb0");function n(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],a=!0,n=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(a=(o=l.next()).done);a=!0)if(r.push(o.value),t&&r.length===t)break}catch(s){n=!0,i=s}finally{try{a||null==l["return"]||l["return"]()}finally{if(n)throw i}}return r}}var i=r("06c5");function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(e,t){return a(e)||n(e,t)||Object(i["a"])(e,t)||o()}},"3ca3":function(e,t,r){"use strict";var a=r("6547").charAt,n=r("69f3"),i=r("7dd0"),o="String Iterator",l=n.set,s=n.getterFor(o);i(String,"String",(function(e){l(this,{type:o,string:String(e),index:0})}),(function(){var e,t=s(this),r=t.string,n=t.index;return n>=r.length?{value:void 0,done:!0}:(e=a(r,n),t.index+=e.length,{value:e,done:!1})}))},"43fa":function(e,t,r){},"4a70":function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"Header",style:{"background-color":e.backcolor,color:e.fontcolor}},[r("div",{staticClass:"Header_left"},[e._t("Header_left")],2),r("div",{staticClass:"Header_title"},[e._t("Header_title")],2),r("div",{staticClass:"Header_right"},[e._t("Header_right")],2)])},n=[],i={name:"Header",props:{backcolor:{type:String,default:"#cf2d28"},fontcolor:{type:String,default:"#ffffff"}}},o=i,l=(r("02ea"),r("2877")),s=Object(l["a"])(o,a,n,!1,null,"5b42002e",null);t["a"]=s.exports},"4df4":function(e,t,r){"use strict";var a=r("0366"),n=r("7b0b"),i=r("9bdd"),o=r("e95a"),l=r("50c4"),s=r("8418"),c=r("35a1");e.exports=function(e){var t,r,u,d,f,v,p=n(e),b="function"==typeof this?this:Array,g=arguments.length,h=g>1?arguments[1]:void 0,m=void 0!==h,y=c(p),x=0;if(m&&(h=a(h,g>2?arguments[2]:void 0,2)),void 0==y||b==Array&&o(y))for(t=l(p.length),r=new b(t);t>x;x++)v=m?h(p[x],x):p[x],s(r,x,v);else for(d=y.call(p),f=d.next,r=new b;!(u=f.call(d)).done;x++)v=m?i(d,h,[u.value,x],!0):u.value,s(r,x,v);return r.length=x,r}},"4fad":function(e,t,r){var a=r("23e7"),n=r("6f53").entries;a({target:"Object",stat:!0},{entries:function(e){return n(e)}})},"54ff":function(e,t,r){},"6b75":function(e,t,r){"use strict";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}r.d(t,"a",(function(){return a}))},"6f1e":function(e,t,r){"use strict";var a=r("43fa"),n=r.n(a);n.a},"6f53":function(e,t,r){var a=r("83ab"),n=r("df75"),i=r("fc6a"),o=r("d1e7").f,l=function(e){return function(t){var r,l=i(t),s=n(l),c=s.length,u=0,d=[];while(c>u)r=s[u++],a&&!o.call(l,r)||d.push(e?[r,l[r]]:l[r]);return d}};e.exports={entries:l(!0),values:l(!1)}},a0fb:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("Header",[r("span",{staticClass:"iconfont icon-zuo",staticStyle:{"font-size":"2rem"},attrs:{slot:"Header_left"},on:{click:e.goback},slot:"Header_left"}),r("span",{attrs:{slot:"Header_title"},slot:"Header_title"},[e._t("Headertitle")],2)])],1)},n=[],i=(r("c975"),r("4a70")),o={name:"Headergoback",components:{Header:i["a"]},methods:{goback:function(){1===this.$route.path.indexOf("vhelp")||1===this.$route.path.indexOf("vaffairs")?this.$router.push("/index/home"):1===this.$route.path.indexOf("zijinbody")?this.$router.push("/cwzj"):1===this.$route.path.indexOf("cwzj")?this.$router.push("/index/home"):this.$router.go(-1)}}},l=o,s=r("2877"),c=Object(s["a"])(l,a,n,!1,null,null,null);t["a"]=c.exports},a630:function(e,t,r){var a=r("23e7"),n=r("4df4"),i=r("1c7e"),o=!i((function(e){Array.from(e)}));a({target:"Array",stat:!0,forced:o},{from:n})},c975:function(e,t,r){"use strict";var a=r("23e7"),n=r("4d64").indexOf,i=r("a640"),o=r("ae40"),l=[].indexOf,s=!!l&&1/[1].indexOf(1,-0)<0,c=i("indexOf"),u=o("indexOf",{ACCESSORS:!0,1:0});a({target:"Array",proto:!0,forced:s||!c||!u},{indexOf:function(e){return s?l.apply(this,arguments)||0:n(this,e,arguments.length>1?arguments[1]:void 0)}})},d28b:function(e,t,r){var a=r("746f");a("iterator")},ddb0:function(e,t,r){var a=r("da84"),n=r("fdbc"),i=r("e260"),o=r("9112"),l=r("b622"),s=l("iterator"),c=l("toStringTag"),u=i.values;for(var d in n){var f=a[d],v=f&&f.prototype;if(v){if(v[s]!==u)try{o(v,s,u)}catch(b){v[s]=u}if(v[c]||o(v,c,d),n[d])for(var p in i)if(v[p]!==i[p])try{o(v,p,i[p])}catch(b){v[p]=i[p]}}}},e01a:function(e,t,r){"use strict";var a=r("23e7"),n=r("83ab"),i=r("da84"),o=r("5135"),l=r("861d"),s=r("9bf2").f,c=r("e893"),u=i.Symbol;if(n&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var d={},f=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof f?new u(e):void 0===e?u():u(e);return""===e&&(d[t]=!0),t};c(f,u);var v=f.prototype=u.prototype;v.constructor=f;var p=v.toString,b="Symbol(test)"==String(u("test")),g=/^Symbol\((.*)\)[^)]+$/;s(v,"description",{configurable:!0,get:function(){var e=l(this)?this.valueOf():this,t=p.call(e);if(o(d,e))return"";var r=b?t.slice(7,-1):t.replace(g,"$1");return""===r?void 0:r}}),a({global:!0,forced:!0},{Symbol:f})}},fb6a:function(e,t,r){"use strict";var a=r("23e7"),n=r("861d"),i=r("e8b5"),o=r("23cb"),l=r("50c4"),s=r("fc6a"),c=r("8418"),u=r("b622"),d=r("1dde"),f=r("ae40"),v=d("slice"),p=f("slice",{ACCESSORS:!0,0:0,1:2}),b=u("species"),g=[].slice,h=Math.max;a({target:"Array",proto:!0,forced:!v||!p},{slice:function(e,t){var r,a,u,d=s(this),f=l(d.length),v=o(e,f),p=o(void 0===t?f:t,f);if(i(d)&&(r=d.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)?n(r)&&(r=r[b],null===r&&(r=void 0)):r=void 0,r===Array||void 0===r))return g.call(d,v,p);for(a=new(void 0===r?Array:r)(h(p-v,0)),u=0;v<p;v++,u++)v in d&&c(a,u,d[v]);return a.length=u,a}})}}]);