(this["webpackJsonpweb3-react-example"]=this["webpackJsonpweb3-react-example"]||[]).push([[0],{108:function(t,e,n){"use strict";n.r(e);var r=n(6),o=n.n(r),i=n(54),c=n.n(i),a=n(35),s=n(59),u=n(15),h=n(30),l=n(12),d=n(38),f=(n(73),n(112)),p=n(58),v=n(60);function b(t,e,n,r,o,i,c){try{var a=t[i](c),s=a.value}catch(u){return void n(u)}a.done?e(s):Promise.resolve(s).then(r,o)}function g(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function c(t){b(i,r,o,c,a,"next",t)}function a(t){b(i,r,o,c,a,"throw",t)}c(void 0)}))}}function m(t,e){return(m=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var j=function(t,e){return t(e={exports:{}},e.exports),e.exports}((function(t){var e=function(t){var e,n=Object.prototype,r=n.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(T){s=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var o=e&&e.prototype instanceof b?e:b,i=Object.create(o.prototype),c=new S(r||[]);return i._invoke=function(t,e,n){var r=l;return function(o,i){if(r===f)throw new Error("Generator is already running");if(r===p){if("throw"===o)throw i;return L()}for(n.method=o,n.arg=i;;){var c=n.delegate;if(c){var a=C(c,n);if(a){if(a===v)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var s=h(t,e,n);if("normal"===s.type){if(r=n.done?p:d,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=p,n.method="throw",n.arg=s.arg)}}}(t,n,c),i}function h(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(T){return{type:"throw",arg:T}}}t.wrap=u;var l="suspendedStart",d="suspendedYield",f="executing",p="completed",v={};function b(){}function g(){}function m(){}var j={};j[i]=function(){return this};var w=Object.getPrototypeOf,y=w&&w(w(k([])));y&&y!==n&&r.call(y,i)&&(j=y);var O=m.prototype=b.prototype=Object.create(j);function x(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function n(o,i,c,a){var s=h(t[o],t,i);if("throw"!==s.type){var u=s.arg,l=u.value;return l&&"object"===typeof l&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,c,a)}),(function(t){n("throw",t,c,a)})):e.resolve(l).then((function(t){u.value=t,c(u)}),(function(t){return n("throw",t,c,a)}))}a(s.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function C(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,C(t,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=h(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,v;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function k(t){if(t){var n=t[i];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,c=function n(){for(;++o<t.length;)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return c.next=c}}return{next:L}}function L(){return{value:e,done:!0}}return g.prototype=O.constructor=m,m.constructor=g,g.displayName=s(m,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,s(t,a,"GeneratorFunction")),t.prototype=Object.create(O),t},t.awrap=function(t){return{__await:t}},x(E.prototype),E.prototype[c]=function(){return this},t.AsyncIterator=E,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var c=new E(u(e,n,r,o),i);return t.isGeneratorFunction(n)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},x(O),s(O,a,"Generator"),O[i]=function(){return this},O.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=k,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(I),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return a.type="throw",a.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var c=this.tryEntries[i],a=c.completion;if("root"===c.tryLoc)return o("end");if(c.tryLoc<=this.prev){var s=r.call(c,"catchLoc"),u=r.call(c,"finallyLoc");if(s&&u){if(this.prev<c.catchLoc)return o(c.catchLoc,!0);if(this.prev<c.finallyLoc)return o(c.finallyLoc)}else if(s){if(this.prev<c.catchLoc)return o(c.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return o(c.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),I(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;I(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:k(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=e}catch(n){Function("r","regeneratorRuntime = r")(e)}})),w=function(t){var e,r;function o(e){var n;n=t.call(this,{supportedChainIds:e.supportedChainIds||o.supportedChainIds})||this;var r=e.url,i=e.windowClosedError,c=e.subscriptionNotFoundNoThrow,a=e.infuraId,s=e.chainId,u=e.newChain;return n.url=r,n.chainId="string"===typeof s?parseInt(s):"undefined"===typeof s?1:s,n.newChain=u,n.windowClosedError=i||!0,n.subscriptionNotFoundNoThrow=c||!0,n.infuraId=a,n}r=t,(e=o).prototype=Object.create(r.prototype),e.prototype.constructor=e,m(e,r),o.addSupportedChainIds=function(t){o.supportedChainIds=[].concat(o.supportedChainIds,[t])},o.addSupportedNetwork=function(t){o.supportedChainIds=[].concat(o.supportedChainIds,[t.chainID]),o.supportedNetworks=[].concat(o.supportedNetworks,[t])};var i=o.prototype;return i.activate=function(){var t=g(j.mark((function t(){var e,r,i,c,a=this;return j.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Promise.all([n.e(2),n.e(4)]).then(n.bind(null,1201));case 3:if(e=t.sent,(r=e.default).Provider.isConnected){t.next=19;break}return c={chainId:this.chainId||1,noUrlCheck:!0,rpcUrl:void 0,infuraId:this.infuraId,windowClosedError:this.windowClosedError,subscriptionNotFoundNoThrow:this.subscriptionNotFoundNoThrow,newNetwork:!1},this.url.includes("https://mainnet.infura.io/v3/")&&!c.infuraId?c.infuraId=this.url.replace("https://mainnet.infura.io/v3/",""):c.rpcUrl=this.url,this.chainId&&(c.chainId=this.chainId),this.newChain&&(c.newNetwork=[].concat(this.newChain,o.supportedNetworks)),this.mewConnect=new r.Provider(c),this.provider=this.mewConnect.makeWeb3Provider(),this.mewConnect.on("disconnected",(function(){a.emitDeactivate()})),t.next=15,this.mewConnect.enable().catch((function(){throw new Error("The user rejected the request.")})).then((function(t){return t[0]}));case 15:return i=t.sent,t.abrupt("return",{provider:this.provider,chainId:this.chainId,account:i});case 19:if(!this.mewConnect){t.next=25;break}return t.next=22,this.mewConnect.enable().catch((function(){throw new Error("The user rejected the request.")})).then((function(t){return t[0]}));case 22:return i=t.sent,console.log({provider:this.provider,chainId:1,account:i}),t.abrupt("return",{provider:this.provider,chainId:this.chainId,account:i});case 25:return console.log({provider:this.provider,chainId:this.chainId,account:i}),t.abrupt("return",{provider:this.provider,chainId:this.chainId,account:i});case 29:return t.prev=29,t.t0=t.catch(0),console.log(t.t0),t.abrupt("return",{provider:this.provider,chainId:this.chainId,account:""});case 33:case"end":return t.stop()}}),t,this,[[0,29]])})));return function(){return t.apply(this,arguments)}}(),i.getProvider=function(){var t=g(j.mark((function t(){return j.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.provider);case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}(),i.getChainId=function(){var t=g(j.mark((function t(){return j.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("string"!==typeof this.chainId){t.next=4;break}return t.abrupt("return",parseInt(this.chainId));case 4:if("undefined"!==typeof this.chainId){t.next=8;break}return t.abrupt("return",1);case 8:return t.abrupt("return",this.chainId);case 9:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}(),i.getAccount=function(){var t=g(j.mark((function t(){return j.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.provider.send("eth_accounts").then((function(t){return t[0]})).catch((function(){throw new Error("No account present to get.")})));case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}(),i.deactivate=function(){this.provider&&this.provider.close(),this.emitDeactivate()},i.close=function(){var t=g(j.mark((function t(){return j.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.provider&&this.provider.close(),this.emitDeactivate();case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}(),o}(v.a);w.supportedChainIds=[1,3,5,42],w.supportedNetworks=[];Object({NODE_ENV:"production",PUBLIC_URL:"/mewconnect-external-plugins",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).RPC_URL_1,Object({NODE_ENV:"production",PUBLIC_URL:"/mewconnect-external-plugins",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).RPC_URL_4,Object({NODE_ENV:"production",PUBLIC_URL:"/mewconnect-external-plugins",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).RPC_URL_42,Object({NODE_ENV:"production",PUBLIC_URL:"/mewconnect-external-plugins",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).RPC_URL_80001;var y=new d.a({supportedChainIds:[1,3,4,5,42]}),O=new w({url:"https://ropsten.infura.io/v3/c9b249497d074ab59c47a97bdfe6b401",chainId:3});w.addSupportedNetwork({name:"matic",name_long:"MaticNetwork",blockExplorerTX:"https://explorer-mainnet.maticvigil.com/tx/[[txHash]]",blockExplorerAddr:"https://explorer-mainnet.maticvigil.com/address/[[address]]",chainID:80001,currencyName:"MATIC",service:"matic",url:"https://rpc-mumbai.matic.today"});var x,E=n(3);function C(){var t=Object(l.b)(),e=t.library,n=t.account,o=Object(r.useState)(0),i=Object(u.a)(o,2),c=i[0],a=i[1],s=Object(r.useState)(""),h=Object(u.a)(s,2),d=h[0],f=h[1];return Object(E.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(E.jsx)("input",{type:"number",value:c,onChange:function(t){t.nativeEvent.data>=0?a(t.nativeEvent.data):a(0)}}),Object(E.jsx)("button",{style:{height:"3rem",borderRadius:"1rem",cursor:"pointer"},onClick:function(){e.getSigner(n).sendTransaction({to:n,value:c}).then((function(t){console.log(t),f(t.hash),window.alert("Success!\n\n".concat(t))})).catch((function(t){window.alert("Failure!"+(t&&t.message?"\n\n".concat(t.message):""))}))},children:"Send"}),""!==d&&Object(E.jsxs)("span",{children:[" ",d]})]})}function _(){var t=Object(l.b)(),e=t.library,n=t.account,o=Object(r.useState)(0),i=Object(u.a)(o,2);i[0],i[1];return Object(E.jsx)(E.Fragment,{children:Object(E.jsx)("button",{style:{height:"3rem",borderRadius:"1rem",cursor:"pointer"},onClick:function(){e.getSigner(n).signMessage("\ud83d\udc4b").then((function(t){window.alert("Success!\n\n".concat(t))})).catch((function(t){window.alert("Failure!"+(t&&t.message?"\n\n".concat(t.message):""))}))},children:"Sign Message"})})}var I="Injected",S="MewConnect",k=(x={},Object(h.a)(x,I,y),Object(h.a)(x,S,O),x);function L(t){var e=new f.a(t);return e.pollingInterval=12e3,e}var T=function(){return Object(E.jsx)(l.a,{getLibrary:L,children:Object(E.jsx)(N,{})})};function N(){var t=Object(l.b)(),e=t.connector,n=t.library,i=(t.chainId,t.account),c=t.activate,a=(t.deactivate,t.active,t.error),s=o.a.useState(),h=Object(u.a)(s,2),d=h[0],f=h[1];o.a.useEffect((function(){d&&d===e&&f(void 0)}),[d,e]);var p=function(){var t=Object(l.b)(),e=t.activate,n=t.active,o=Object(r.useState)(!1),i=Object(u.a)(o,2),c=i[0],a=i[1];return Object(r.useEffect)((function(){y.isAuthorized().then((function(t){t?e(y,void 0,!0).catch((function(){a(!0)})):a(!0)}))}),[]),Object(r.useEffect)((function(){!c&&n&&a(!0)}),[c,n]),c}();return function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=Object(l.b)(),n=e.active,o=e.error,i=e.activate;Object(r.useEffect)((function(){var e=window.ethereum;if(e&&e.on&&!n&&!o&&!t){var r=function(){console.log("Handling 'connect' event"),i(y)},c=function(t){console.log("Handling 'chainChanged' event with payload",t),i(y)},a=function(t){console.log("Handling 'accountsChanged' event with payload",t),t.length>0&&i(y)},s=function(t){console.log("Handling 'networkChanged' event with payload",t),i(y)};return e.on("connect",r),e.on("chainChanged",c),e.on("accountsChanged",a),e.on("networkChanged",s),function(){e.removeListener&&(e.removeListener("connect",r),e.removeListener("chainChanged",c),e.removeListener("accountsChanged",a),e.removeListener("networkChanged",s))}}}),[n,o,t,i])}(!p||!!d),Object(E.jsxs)("div",{style:{display:"flex",flexDirection:"column",gridGap:"1rem",gridTemplateColumns:"1fr min-content 1fr",maxWidth:"20rem",lineHeight:"2rem",margin:"auto"},children:[Object(E.jsx)(W,{}),Object.keys(k).map((function(t){var n=k[t],r=n===d,o=n===e,i=!p||!!d||o||!!a;return Object(E.jsxs)("button",{style:{height:"3rem",borderRadius:"1rem",borderColor:r?"orange":o?"green":"unset",cursor:i?"unset":"pointer",position:"relative"},disabled:i,onClick:function(){f(n),c(k[t])},children:[Object(E.jsxs)("div",{style:{position:"absolute",top:"0",left:"0",height:"100%",display:"flex",alignItems:"center",color:"black",margin:"0 0 0 1rem"},children:[r&&Object(E.jsx)(R,{color:"black",style:{height:"25%",marginLeft:"-1rem"}}),o&&Object(E.jsx)("span",{role:"img","aria-label":"check",children:"\u2705"})]}),t]},t)})),!(!n||!i)&&Object(E.jsx)(E.Fragment,{children:Object(E.jsxs)("ol",{children:[Object(E.jsxs)("li",{children:[Object(E.jsx)(_,{}),Object(E.jsx)("hr",{})]}),Object(E.jsxs)("li",{children:[Object(E.jsx)(C,{}),Object(E.jsx)("hr",{})]})]})}),e===k[S]&&Object(E.jsx)("button",{style:{height:"3rem",borderRadius:"1rem",cursor:"pointer"},onClick:function(){e.close()},children:"Kill MEWconnect Session"})]})}function R(t){var e=t.color,n=Object(s.a)(t,["color"]);return Object(E.jsx)("svg",Object(a.a)(Object(a.a)({width:"38",height:"38",viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",stroke:e},n),{},{children:Object(E.jsx)("g",{fill:"none",fillRule:"evenodd",children:Object(E.jsxs)("g",{transform:"translate(1 1)",strokeWidth:"2",children:[Object(E.jsx)("circle",{strokeOpacity:".5",cx:"18",cy:"18",r:"18"}),Object(E.jsx)("path",{d:"M36 18c0-9.94-8.06-18-18-18",children:Object(E.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"1s",repeatCount:"indefinite"})})]})})}))}function P(){var t=Object(l.b)().chainId;return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("span",{children:"Chain Id"}),Object(E.jsx)("span",{role:"img","aria-label":"chain",children:"\u26d3"}),Object(E.jsx)("span",{children:null!==t&&void 0!==t?t:""})]})}function F(){var t=Object(l.b)(),e=t.chainId,n=t.library,r=o.a.useState(),i=Object(u.a)(r,2),c=i[0],a=i[1];return o.a.useEffect((function(){if(n){var t=!1;n.getBlockNumber().then((function(e){t||a(e)})).catch((function(){t||a(null)}));var e=function(t){a(t)};return n.on("block",e),function(){t=!0,n.removeListener("block",e),a(void 0)}}}),[n,e]),Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("span",{children:"Block Number"}),Object(E.jsx)("span",{role:"img","aria-label":"numbers",children:"\ud83d\udd22"}),Object(E.jsx)("span",{children:null===c?"Error":null!==c&&void 0!==c?c:""})]})}function D(){var t=Object(l.b)().account;return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("span",{children:"Account"}),Object(E.jsx)("span",{role:"img","aria-label":"robot",children:"\ud83e\udd16"}),Object(E.jsx)("span",{children:null===t?"-":t?"".concat(t.substring(0,6),"...").concat(t.substring(t.length-4)):""})]})}function H(){var t=Object(l.b)(),e=t.account,n=t.library,r=t.chainId,i=o.a.useState(),c=Object(u.a)(i,2),a=c[0],s=c[1];return o.a.useEffect((function(){if(e&&n){var t=!1;return n.getBalance(e).then((function(e){t||s(e)})).catch((function(){t||s(null)})),function(){t=!0,s(void 0)}}}),[e,n,r]),Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("span",{children:"Balance"}),Object(E.jsx)("span",{role:"img","aria-label":"gold",children:"\ud83d\udcb0"}),Object(E.jsx)("span",{children:null===a?"Error":a?"\u039e".concat(Object(p.a)(a)):""})]})}function W(){var t=Object(l.b)(),e=t.active,n=t.error;return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("h1",{style:{margin:"1rem",textAlign:"right"},children:e?"\ud83d\udfe2":n?"\ud83d\udd34":"\ud83d\udfe0"}),Object(E.jsxs)("h3",{style:{display:"grid",gridGap:"1rem",gridTemplateColumns:"1fr min-content 1fr",maxWidth:"20rem",lineHeight:"2rem",margin:"auto"},children:[Object(E.jsx)(P,{}),Object(E.jsx)(F,{}),Object(E.jsx)(D,{}),Object(E.jsx)(H,{})]})]})}c.a.render(Object(E.jsx)(T,{}),document.getElementById("root"))},95:function(t,e){}},[[108,1,3]]]);
//# sourceMappingURL=main.c7fce6e3.chunk.js.map