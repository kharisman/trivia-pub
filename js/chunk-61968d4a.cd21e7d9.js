(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-61968d4a"],{"1a4d":function(t,e,c){"use strict";c.r(e);var r=c("7a23");function n(t,e,c,n,i,a){var o=Object(r["x"])("HomeTop");return Object(r["r"])(),Object(r["e"])(o)}var i=c("eb35"),a={name:"Trivia",components:{HomeTop:i["a"]}};a.render=n;e["default"]=a},b0c0:function(t,e,c){var r=c("83ab"),n=c("9bf2").f,i=Function.prototype,a=i.toString,o=/^\s*function ([^ (]*)/,s="name";r&&!(s in i)&&n(i,s,{configurable:!0,get:function(){try{return a.call(this).match(o)[1]}catch(t){return""}}})},e01a:function(t,e,c){"use strict";var r=c("23e7"),n=c("83ab"),i=c("da84"),a=c("5135"),o=c("861d"),s=c("9bf2").f,u=c("e893"),b=i.Symbol;if(n&&"function"==typeof b&&(!("description"in b.prototype)||void 0!==b().description)){var l={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new b(t):void 0===t?b():b(t);return""===t&&(l[e]=!0),e};u(d,b);var v=d.prototype=b.prototype;v.constructor=d;var f=v.toString,p="Symbol(test)"==String(b("test")),O=/^Symbol\((.*)\)[^)]+$/;s(v,"description",{configurable:!0,get:function(){var t=o(this)?this.valueOf():this,e=f.call(t);if(a(l,t))return"";var c=p?e.slice(7,-1):e.replace(O,"$1");return""===c?void 0:c}}),r({global:!0,forced:!0},{Symbol:d})}},eb35:function(t,e,c){"use strict";c("b0c0"),c("a4d3"),c("e01a");var r=c("7a23"),n={class:"row"},i={class:"card"},a=Object(r["h"])("img",{src:"https://via.placeholder.com/300/f54278/FFFFFF ?Text=Qualitiva.id",class:"card-img-top",alt:"..."},null,-1),o={class:"card-body"},s={class:"card-title"},u={class:"card-text"},b=Object(r["h"])("a",{class:"btn btn-primary"},"Ikuti",-1);function l(t,e,c,l,d,v){var f=Object(r["x"])("router-link");return Object(r["r"])(),Object(r["e"])("div",n,[(Object(r["r"])(!0),Object(r["e"])(r["a"],null,Object(r["v"])(l.quizzes,(function(t){var e=t.id,c=t.name,n=t.description;return Object(r["r"])(),Object(r["e"])("div",{class:"col-sm-3 mb-4",key:e},[Object(r["h"])("div",i,[a,Object(r["h"])("div",o,[Object(r["h"])("h5",s,Object(r["z"])(c),1),Object(r["h"])("p",u,Object(r["z"])(n),1),Object(r["h"])(f,{to:"/trivia/".concat(e)},{default:Object(r["E"])((function(){return[b]})),_:2},1032,["to"])])])])})),128))])}var d=c("dc59"),v={setup:function(){var t=Object(d["g"])();return{quizzes:t}}};v.render=l;e["a"]=v}}]);
//# sourceMappingURL=chunk-61968d4a.cd21e7d9.js.map