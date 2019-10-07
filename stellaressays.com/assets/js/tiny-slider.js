var tns=function(){function e(){for(var e,t,n,i=arguments[0]||{},a=1,r=arguments.length;a<r;a++)if(null!==(e=arguments[a]))for(t in e)n=e[t],i!==n&&void 0!==n&&(i[t]=n);return i}function t(e){return["true","false"].indexOf(e)>=0?JSON.parse(e):e}function n(e,t,n){return n&&localStorage.setItem(e,t),t}function i(){var e=window.tnsId;return window.tnsId=e?e+1:1,"tns"+window.tnsId}function a(){var e=document,t=e.body;return t||(t=e.createElement("body"),t.fake=!0),t}function r(e){var t="";return e.fake&&(t=P.style.overflow,e.style.background="",e.style.overflow=P.style.overflow="hidden",P.appendChild(e)),t}function o(e,t){e.fake&&(e.remove(),P.style.overflow=t,P.offsetHeight)}function s(e){var t=document.createElement("style");return e&&t.setAttribute("media",e),document.querySelector("head").appendChild(t),t.sheet?t.sheet:t.styleSheet}function l(e,t,n,i){"insertRule"in e?e.insertRule(t+"{"+n+"}",i):e.addRule(t,n,i)}function c(e){return("insertRule"in e?e.cssRules:e.rules).length}function u(e,t){return Math.atan2(e,t)*(180/Math.PI)}function f(e,t){var n=!1,i=Math.abs(90-Math.abs(e));return i>=90-t?n="horizontal":i<=t&&(n="vertical"),n}function d(e,t){return e.className.indexOf(t)>=0}function v(e,t){d(e,t)||(e.className+=" "+t)}function h(e,t){d(e,t)&&(e.className=e.className.replace(t,""))}function p(e,t){return e.hasAttribute(t)}function m(e,t){return e.getAttribute(t)}function y(e){return void 0!==e.item}function g(e,t){if(e=y(e)||e instanceof Array?e:[e],"[object Object]"===Object.prototype.toString.call(t))for(var n=e.length;n--;)for(var i in t)e[n].setAttribute(i,t[i])}function b(e,t){e=y(e)||e instanceof Array?e:[e],t=t instanceof Array?t:[t];for(var n=t.length,i=e.length;i--;)for(var a=n;a--;)e[i].removeAttribute(t[a])}function x(e){e.style.cssText=""}function T(e){p(e,"hidden")||g(e,{hidden:""})}function E(e){p(e,"hidden")&&b(e,"hidden")}function C(e){return e.offsetWidth>0&&e.offsetHeight>0}function w(e){return"boolean"==typeof e.complete?e.complete:"number"==typeof e.naturalWidth?0!==e.naturalWidth:void 0}function N(e){for(var t=document.createElement("fakeelement"),n=(e.length,0);n<e.length;n++){var i=e[n];if(void 0!==t.style[i])return i}return!1}function O(e,t){var n=!1;return/^Webkit/.test(e)?n="webkit"+t+"End":/^O/.test(e)?n="o"+t+"End":e&&(n=t.toLowerCase()+"end"),n}function D(e,t){for(var n in t){var i=("touchstart"===n||"touchmove"===n)&&W;e.addEventListener(n,t[n],i)}}function k(e,t){for(var n in t){var i=["touchstart","touchmove"].indexOf(n)>=0&&W;e.removeEventListener(n,t[n],i)}}function A(){return{topics:{},on:function(e,t){this.topics[e]=this.topics[e]||[],this.topics[e].push(t)},off:function(e,t){if(this.topics[e])for(var n=0;n<this.topics[e].length;n++)if(this.topics[e][n]===t){this.topics[e].splice(n,1);break}},emit:function(e,t){this.topics[e]&&this.topics[e].forEach(function(e){e(t)})}}}function M(e,t,n,i,a,r,o){function s(){r-=l,u+=f,e.style[t]=n+u+c+i,r>0?setTimeout(s,l):o()}var l=Math.min(r,10),c=a.indexOf("%")>=0?"%":"px",a=a.replace(c,""),u=Number(e.style[t].replace(n,"").replace(i,"").replace(c,"")),f=(a-u)/r*l;setTimeout(s,l)}Object.keys||(Object.keys=function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t}),function(){"use strict";"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)})}();var P=document.documentElement,I=!1;try{var S=Object.defineProperty({},"passive",{get:function(){I=!0}});window.addEventListener("test",null,S)}catch(e){}var W=!!I&&{passive:!0},H=navigator.userAgent,L=!0,z={};try{z=localStorage,z.tnsApp&&z.tnsApp!==H&&["tC","tSP","tMQ","tTf","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach(function(e){z.removeItem(e)}),z.tnsApp=H}catch(e){L=!1}localStorage||(z={});var B=document,R=window,j={ENTER:13,SPACE:32,PAGEUP:33,PAGEDOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40},q=t(z.tC)||n("tC",function(){var e=document,t=a(),n=r(t),i=e.createElement("div"),s=!1;t.appendChild(i);try{for(var l,c=["calc(10px)","-moz-calc(10px)","-webkit-calc(10px)"],u=0;u<3;u++)if(l=c[u],i.style.width=l,10===i.offsetWidth){s=l.replace("(10px)","");break}}catch(e){}return t.fake?o(t,n):i.remove(),s}(),L),G=t(z.tSP)||n("tSP",function(){var e,t,n=document,i=a(),s=r(i),l=n.createElement("div"),c=n.createElement("div");return l.style.cssText="width: 10px",c.style.cssText="float: left; width: 5.5px; height: 10px;",e=c.cloneNode(!0),l.appendChild(c),l.appendChild(e),i.appendChild(l),t=c.offsetTop!==e.offsetTop,i.fake?o(i,s):l.remove(),t}(),L),F=t(z.tMQ)||n("tMQ",function(){var e,t=document,n=a(),i=r(n),s=t.createElement("div"),l=t.createElement("style"),c="@media all and (min-width:1px){.tns-mq-test{position:absolute}}";return l.type="text/css",s.className="tns-mq-test",n.appendChild(l),n.appendChild(s),l.styleSheet?l.styleSheet.cssText=c:l.appendChild(t.createTextNode(c)),e=window.getComputedStyle?window.getComputedStyle(s).position:s.currentStyle.position,n.fake?o(n,i):s.remove(),"absolute"===e}(),L),U=t(z.tTf)||n("tTf",N(["transform","WebkitTransform","MozTransform","msTransform","OTransform"]),L),X=t(z.tTDu)||n("tTDu",N(["transitionDuration","WebkitTransitionDuration","MozTransitionDuration","OTransitionDuration"]),L),V=t(z.tTDe)||n("tTDe",N(["transitionDelay","WebkitTransitionDelay","MozTransitionDelay","OTransitionDelay"]),L),Y=t(z.tADu)||n("tADu",N(["animationDuration","WebkitAnimationDuration","MozAnimationDuration","OAnimationDuration"]),L),K=t(z.tADe)||n("tADe",N(["animationDelay","WebkitAnimationDelay","MozAnimationDelay","OAnimationDelay"]),L),Q=t(z.tTE)||n("tTE",O(X,"Transition"),L),J=t(z.tAE)||n("tAE",O(Y,"Animation"),L);F||(G=!1);var Z=function(t){function n(){return R.innerWidth||B.documentElement.clientWidth||B.body.clientWidth}function a(e){var t;do{t=e.clientWidth,e=e.parentNode}while(!t);return t}function r(e){var n=t[e];return!n&&gt&&yt.indexOf(e)>=0&&gt.forEach(function(t){mt[t][e]&&(n=!0)}),n}function o(e,n){n=n?n:xt;var i,a={slideBy:"page",edgePadding:!1,autoHeight:!0};if(!tt&&e in a)i=a[e];else if("items"===e&&o("fixedWidth"))i=Math.floor(pt/(o("fixedWidth")+o("gutter")));else if("autoHeight"===e&&"outer"===kt)i=!0;else if(i=t[e],gt&&yt.indexOf(e)>=0)for(var r=0,s=gt.length;r<s;r++){var l=gt[r];if(!(n>=l))break;e in mt[l]&&(i=mt[l][e])}return"slideBy"===e&&"page"===i&&(i=o("items")),i}function y(e){return q?q+"("+100*e+"% / "+qt+")":100*e/qt+"%"}function N(e,t,n){var i="";if(e){var a=e;t&&(a+=t),i=n?"margin: 0px "+(pt%(n+t)+t)/2+"px":lt?"margin: 0 "+e+"px 0 "+a+"px;":"padding: "+a+"px 0 "+e+"px 0;"}else if(t&&!n){var r="-"+t+"px",o=lt?r+" 0 0":"0 "+r+" 0";i="margin: 0 "+o+";"}return i}function O(e,t,n){return e?(e+t)*qt+"px":q?q+"("+100*qt+"% / "+n+")":100*qt/n+"%"}function P(e,t,n){var i="";if(lt){if(i="width:",e)i+=e+t+"px";else{var a=tt?qt:n;i+=q?q+"(100% / "+a+")":100/a+"%"}i+=ln+";"}return i}function I(e){var t="";if(e!==!1){t=(lt?"padding-":"margin-")+(lt?"right":"bottom")+": "+e+"px;"}return t}function S(e){e=e||R.event,clearTimeout(Ct),Ct=setTimeout(function(){if(st){var t=n();xt!==t&&(xt=t,W(),"outer"===kt&&en.emit("outerResized",Qe(e)))}},100)}function W(){var e=bt,t=Kt,n=Ot,i=sn;if(pt=a(ct),ot=a(ut),gt&&H(),e!==bt||Pt){var r=It,s=Lt,u=Pt,f=Mt,d=At,v=rn;if(Ot=o("items"),Dt=o("slideBy"),rn=o("disable"),sn=!!rn||!!on&&ht<=Ot,Ot!==n&&(Zt=qt-Ot,si()),rn!==v&&$(rn),sn!==i&&(sn&&(Kt=tt?jt:0),L()),e!==bt&&(St=o("speed"),Mt=o("edgePadding"),At=o("gutter"),Pt=o("fixedWidth"),rn||Pt===u||pe(),(Lt=o("autoHeight"))!==s&&(Lt||(ut.style.height=""))),It=!sn&&o("arrowKeys"),It!==r&&(It?D(B,vn):k(B,vn)),mn){var h=Dn,p=kn;Dn=!sn&&o("controls"),kn=o("controlsText"),Dn!==h&&(Dn?E(An):T(An)),kn!==p&&(Cn.innerHTML=kn[0],wn.innerHTML=kn[1])}if(yn){var m=Pn;Pn=!sn&&o("nav"),Pn!==m&&(Pn?(E(In),Ke()):T(In))}if(xn){var y=ti;ti=!sn&&o("touch"),ti!==y&&tt&&(ti?D(ft,hn):k(ft,hn))}if(Tn){var g=ri;ri=!sn&&o("mouseDrag"),ri!==g&&tt&&(ri?D(ft,pn):k(ft,pn))}if(bn){var b=Un,x=Kn,C=Jn,w=Yn;if(sn?Un=Kn=Jn=!1:(Un=o("autoplay"),Un?(Kn=o("autoplayHoverPause"),Jn=o("autoplayResetOnVisibility")):Kn=Jn=!1),Yn=o("autoplayText"),Xn=o("autoplayTimeout"),Un!==b&&(Un?(Qn&&E(Qn),jn||Gn||De()):(Qn&&T(Qn),jn&&ke())),Kn!==x&&(Kn?D(ft,fn):k(ft,fn)),Jn!==C&&(Jn?D(B,dn):k(B,dn)),Qn&&Yn!==w){var A=Un?1:0,M=Qn.innerHTML,S=M.length-w[A].length;M.substring(S)===w[A]&&(Qn.innerHTML=M.substring(0,S)+Yn[A])}}if(!F){if(sn||Mt===f&&At===d||(ut.style.cssText=N(Mt,At,Pt)),tt&&lt&&(Pt!==u||At!==d||Ot!==n)&&(ft.style.width=O(Pt,At,Ot)),lt&&(Ot!==n||At!==d||Pt!=u)){var W=P(Pt,At,Ot)+I(At);zt.removeRule(c(zt)-1),l(zt,"#"+an+" > .tns-item",W,c(zt))}Pt||Kt!==t||ye(0)}Kt!==t&&(en.emit("indexChanged",Qe()),ye(0),Qt=Kt),Ot!==n&&(ne(),se(),ee(),navigator.msMaxTouchPoints&&re())}lt||rn||(ae(),Ve(),pe()),z(!0),ee()}function H(){bt=0,gt.forEach(function(e,t){xt>=e&&(bt=t+1)})}function L(){var e="tns-transparent";if(sn){if(!Nt){if(Mt&&(ut.style.margin="0px"),jt)for(var t=jt;t--;)tt&&v(vt[t],e),v(vt[qt-t-1],e);Nt=!0}}else if(Nt){if(Mt&&!Pt&&F&&(ut.style.margin=""),jt)for(var t=jt;t--;)tt&&h(vt[t],e),h(vt[qt-t-1],e);Nt=!1}}function z(e){Pt&&Mt&&(sn||pt<=Pt+At?"0px"!==ut.style.margin&&(ut.style.margin="0px"):e&&(ut.style.cssText=N(Mt,At,Pt)))}function $(e){var t=vt.length;if(e){if(zt.disabled=!0,ft.className=ft.className.replace(nn.substring(1),""),x(ft),Ht)for(var n=jt;n--;)tt&&T(vt[n]),T(vt[t-n-1]);if(lt&&tt||x(ut),!tt)for(var i=Kt,a=Kt+ht;i<a;i++){var r=vt[i];x(r),h(r,nt),h(r,rt)}}else{if(zt.disabled=!1,ft.className+=nn,lt||ae(),pe(),Ht)for(var n=jt;n--;)tt&&E(vt[n]),E(vt[t-n-1]);if(!tt)for(var i=Kt,a=Kt+ht;i<a;i++){var r=vt[i],o=i<Kt+Ot?nt:rt;r.style.left=100*(i-Kt)/Ot+"%",v(r,o)}}}function _(){if(Bt&&!rn){var e=Kt,t=Kt+Ot;for(Mt&&(e-=1,t+=1);e<t;e++)[].forEach.call(vt[e].querySelectorAll(".tns-lazy-img"),function(e){var t={};t[Q]=function(e){e.stopPropagation()},D(e,t),d(e,"loaded")||(e.src=m(e,"data-src"),v(e,"loaded"))})}}function ee(){if(Lt&&!rn){for(var e=[],t=Kt,n=Kt+Ot;t<n;t++)[].forEach.call(vt[t].querySelectorAll("img"),function(t){e.push(t)});0===e.length?ie():te(e)}}function te(e){e.forEach(function(t,n){w(t)&&e.splice(n,1)}),0===e.length?ie():setTimeout(function(){te(e)},16)}function ne(){_(),oe(),de(),Ke(),le()}function ie(){for(var e,t=[],n=Kt,i=Kt+Ot;n<i;n++)t.push(vt[n].offsetHeight);e=Math.max.apply(null,t),ut.style.height!==e&&(X&&ve(St),ut.style.height=e+"px")}function ae(){Et=[0];for(var e,t=vt[0].getBoundingClientRect().top,n=1;n<qt;n++)e=vt[n].getBoundingClientRect().top,Et.push(e-t)}function re(){ct.style.msScrollSnapPointsX="snapInterval(0%, "+100/Ot+"%)"}function oe(){for(var e=Kt+Math.min(ht,Ot),t=qt;t--;){var n=vt[t];t>=Kt&&t<e?p(n,"tabindex")&&(g(n,{"aria-hidden":"false"}),b(n,["tabindex"]),v(n,En)):(p(n,"tabindex")||g(n,{"aria-hidden":"true",tabindex:"-1"}),d(n,En)&&h(n,En))}}function se(){if(!tt){for(var e=Kt+Math.min(ht,Ot),t=qt;t--;){var n=vt[t];t>=Kt&&t<e?(v(n,"tns-moving"),n.style.left=100*(t-Kt)/Ot+"%",v(n,nt),h(n,rt)):n.style.left&&(n.style.left="",v(n,rt),h(n,nt)),h(n,it)}setTimeout(function(){[].forEach.call(vt,function(e){h(e,"tns-moving")})},300)}}function le(){if(Pn&&(Ln=Hn!==-1?Hn:Kt%ht,Hn=-1,Ln!==zn)){var e=Mn[zn],t=Mn[Ln];g(e,{tabindex:"-1","aria-selected":"false"}),g(t,{tabindex:"0","aria-selected":"true"}),h(e,Bn),v(t,Bn)}}function ce(e){return"button"===e.nodeName.toLowerCase()}function ue(e){return"true"===e.getAttribute("aria-disabled")}function fe(e,t,n){e?t.disabled=n:t.setAttribute("aria-disabled",n.toString())}function de(){if(Dn&&!Wt&&!Ht){var e=Nn?Cn.disabled:ue(Cn),t=On?wn.disabled:ue(wn),n=Kt===Jt,i=!Wt&&Kt===Zt;n&&!e&&fe(Nn,Cn,!0),!n&&e&&fe(Nn,Cn,!1),i&&!t&&fe(On,wn,!0),!i&&t&&fe(On,wn,!1)}}function ve(e,t){e=e?e/1e3+"s":"",t=t||ft,t.style[X]=e,tt||(t.style[Y]=e),lt||(ut.style[X]=e)}function he(){var e;if(lt)if(Pt)e=-(Pt+At)*Kt+"px";else{var t=U?qt:Ot;e=100*-Kt/t+"%"}else e=-Et[Kt]+"px";return e}function pe(e){e||(e=he()),ft.style[Ut]=Xt+e+Vt}function me(e,t,n,i){for(var a=e,r=e+Ot;a<r;a++){var o=vt[a];i||(o.style.left=100*(a-Kt)/Ot+"%"),X&&ve(St,o),at&&V&&(o.style[V]=o.style[K]=at*(a-e)/1e3+"s"),h(o,t),v(o,n),i&&Rt.push(o)}}function ye(e,t){isNaN(e)&&(e=St),jn&&!C(ft)&&(e=0),X&&ve(e),li(e,t)}function ge(e,t){Ft&&si(),(Kt!==Qt||t)&&(en.emit("indexChanged",Qe()),en.emit("transitionStart",Qe()),jn&&e&&["click","keydown"].indexOf(e.type)>=0&&ke(),$t=!0,ye())}function be(e){return e.toLowerCase().replace(/-/g,"")}function xe(e){if(tt||$t){if(en.emit("transitionEnd",Qe(e)),!tt&&Rt.length>0)for(var t=0;t<Ot;t++){var n=Rt[t];n.style.left="",X&&ve(0,n),at&&V&&(n.style[V]=n.style[K]=""),h(n,it),v(n,rt)}if(!e||!tt&&e.target.parentNode===ft||e.target===ft&&be(e.propertyName)===be(Ut)){if(!Ft){var i=Kt;si(),Kt!==i&&(en.emit("indexChanged",Qe()),X&&ve(0),pe())}ee(),"inner"===kt&&en.emit("innerLoaded",Qe()),$t=!1,zn=Ln,Qt=Kt}}}function Te(e,t){if(!sn)if("Prev"===e)Ee(t,-1);else if("Next"===e)Ee(t,1);else if(!$t){var n=Kt%ht,i=0;if(n<0&&(n+=ht),"first"===e)i=-n;else if("last"===e)i=ht-Ot-n;else if("number"!=typeof e&&(e=parseInt(e)),!isNaN(e)){var a=e%ht;a<0&&(a+=ht),i=a-n}Kt+=i,Kt%ht!=Qt%ht&&ge(t)}}function Ee(e,t){if(!$t){var n;if(!t){e=e||R.event;for(var i=e.target||e.srcElement;i!==An&&[Cn,wn].indexOf(i)<0;)i=i.parentNode;var a=[Cn,wn].indexOf(i);a>=0&&(n=!0,t=0===a?-1:1)}if(Wt){if(Kt===Jt&&t===-1)return void Te("last",e);if(Kt===Zt&&1===t)return void Te(0,e)}t&&(Kt+=Dt*t,ge(n||e&&"keydown"===e.type?e:null))}}function Ce(e){if(!$t){e=e||R.event;for(var t,n=e.target||e.srcElement;n!==In&&!p(n,"data-nav");)n=n.parentNode;p(n,"data-nav")&&(t=Hn=[].indexOf.call(Mn,n),Te(t,e))}}function we(){Rn=setInterval(function(){Ee(null,Vn)},Xn),jn=!0}function Ne(){clearInterval(Rn),jn=!1}function Oe(e,t){g(Qn,{"data-action":e}),Qn.innerHTML=Zn[0]+e+Zn[1]+t}function De(){we(),Qn&&Oe("stop",Yn[1])}function ke(){Ne(),Qn&&Oe("start",Yn[0])}function Ae(){Un&&!jn&&(De(),Gn=!1)}function Me(){jn&&(ke(),Gn=!0)}function Pe(){jn?(ke(),Gn=!0):(De(),Gn=!1)}function Ie(){B.hidden?jn&&(Ne(),Fn=!0):Fn&&(we(),Fn=!1)}function Se(){jn&&(Ne(),qn=!0)}function We(){qn&&(we(),qn=!1)}function He(e){switch(e=e||R.event,e.keyCode){case j.LEFT:Ee(e,-1);break;case j.RIGHT:Ee(e,1)}}function Le(e){switch(e=e||R.event,e.keyCode){case j.LEFT:case j.UP:case j.PAGEUP:Cn.disabled||Ee(e,-1);break;case j.RIGHT:case j.DOWN:case j.PAGEDOWN:wn.disabled||Ee(e,1);break;case j.HOME:Te(0,e);break;case j.END:Te(ht-1,e)}}function ze(e){e.focus()}function Be(e){function n(e){return t.navContainer?e:Sn[e]}var i=B.activeElement;if(p(i,"data-nav")){e=e||R.event;var a=e.keyCode,r=[].indexOf.call(Mn,i),o=Sn.length,s=Sn.indexOf(r);switch(t.navContainer&&(o=ht,s=r),a){case j.LEFT:case j.PAGEUP:s>0&&ze(Mn[n(s-1)]);break;case j.UP:case j.HOME:s>0&&ze(Mn[n(0)]);break;case j.RIGHT:case j.PAGEDOWN:s<o-1&&ze(Mn[n(s+1)]);break;case j.DOWN:case j.END:s<o-1&&ze(Mn[n(o-1)]);break;case j.ENTER:case j.SPACE:Hn=r,Te(r,e)}}}function Re(){ye(0,ft.scrollLeft()),Qt=Kt}function je(e){return e.target||e.srcElement}function qe(e){return e.type.indexOf("touch")>=0}function Ge(e){e.PreventDefault?e.PreventDefault():e.returnValue=!1}function Fe(e){if(ai=0,wt=!1,ni=ii=null,!$t){e=e||R.event;var t;qe(e)?(t=e.changedTouches[0],en.emit("touchStart",Qe(e))):(t=e,Ge(e),en.emit("dragStart",Qe(e))),ni=parseInt(t.clientX),ii=parseInt(t.clientY),$n=parseFloat(ft.style[Ut].replace(Xt,"").replace(Vt,""))}}function Ue(e){if(!$t&&null!==ni){e=e||R.event;var n;if(qe(e)?n=e.changedTouches[0]:(n=e,Ge(e)),_n=parseInt(n.clientX)-ni,ei=parseInt(n.clientY)-ii,0===ai&&(ai=f(u(ei,_n),15)===t.axis),ai){qe(e)?en.emit("touchMove",Qe(e)):(oi||(oi=!0),en.emit("dragMove",Qe(e))),wt||(wt=!0);var i=$n;if(lt)if(Pt)i+=_n,i+="px";else{var a=U?_n*Ot*100/(ot*qt):100*_n/ot;i+=a,i+="%"}else i+=ei,i+="px";U&&ve(0),ft.style[Ut]=Xt+i+Vt}}}function Xe(e){if(!$t&&wt){e=e||R.event;var t;qe(e)?(t=e.changedTouches[0],en.emit("touchEnd",Qe(e))):(t=e,en.emit("dragEnd",Qe(e))),_n=parseInt(t.clientX)-ni,ei=parseInt(t.clientY)-ii;var n=Boolean(lt?_n:ei);if(ai=0,wt=!1,ni=ii=null,lt){var i=-_n*Ot/ot;i=_n>0?Math.floor(i):Math.ceil(i),Kt+=i}else{var a=-($n+ei);if(a<=0)Kt=Jt;else if(a>=Et[Et.length-1])Kt=Zt;else{var r=0;do{r++,Kt=ei<0?r+1:r}while(r<qt&&a>=Et[r+1])}}if(ge(e,n),oi){oi=!1;var o=je(e);D(o,{click:function e(t){Ge(t),k(o,{click:e})}})}}}function Ve(){ut.style.height=Et[Kt+Ot]-Et[Kt]+"px"}function Ye(){Sn=[];for(var e=Kt%ht%Ot;e<ht;)!Ht&&e+Ot>ht&&(e=ht-Ot),Sn.push(e),e+=Ot;(Ht&&Sn.length*Ot<ht||!Ht&&Sn[0]>0)&&Sn.unshift(0)}function Ke(){Pn&&!gn&&(Ye(),Sn!==Wn&&([].forEach.call(Mn,function(e,t){Sn.indexOf(t)<0?T(e):E(e)}),Wn=Sn))}function Qe(e){return{container:ft,slideItems:vt,navContainer:In,navItems:Mn,controlsContainer:An,hasControls:mn,PrevButton:Cn,NextButton:wn,items:Ot,slideBy:Dt,cloneCount:jt,slideCount:ht,slideCountNew:qt,index:Kt,indexCached:Qt,navCurrentIndex:Ln,navCurrentIndexCached:zn,visibleNavIndexes:Sn,visibleNavIndexesCached:Wn,event:e||{}}}t=e({container:B.querySelector(".slider"),mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,slideBy:1,controls:!0,controlsText:["Prev","Next"],controlsContainer:!1,nav:!0,navContainer:!1,navAsThumbnails:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,touch:!0,mouseDrag:!1,nested:!1,freezable:!0,onInit:!1},t||{}),["container","controlsContainer","navContainer","autoplayButton"].forEach(function(e){"string"==typeof t[e]&&(t[e]=B.querySelector(t[e]))});var Je=R.console&&"function"==typeof R.console.warn;if(!t.container||!t.container.nodeName)return void(Je&&console.warn("Can't find container element."));if(t.container.children.length<2)return void(Je&&console.warn("Slides less than 2."));if(t.responsive){var Ze={},$e=t.responsive;for(var _e in $e){var et=$e[_e];Ze[_e]="number"==typeof et?{items:et}:et}t.responsive=Ze,Ze=null,0 in t.responsive&&(t=e(t,t.responsive[0]),delete t.responsive[0])}var tt="carousel"===t.mode;if(!tt){t.axis="horizontal",t.rewind=!1,t.loop=!0,t.edgePadding=!1;var nt="tns-fadeIn",it="tns-fadeOut",at=!1,rt=t.animateNormal||"tns-normal";Q&&J&&(nt=t.animateIn||nt,it=t.animateOut||it,at=t.animateDelay||at)}var ot,st,lt="horizontal"===t.axis,ct=B.createElement("div"),ut=B.createElement("div"),ft=t.container,dt=ft.parentNode,vt=ft.children,ht=vt.length,pt=a(dt),mt=t.responsive,yt=[],gt=!1,bt=0,xt=n();if(mt){gt=Object.keys(mt).map(function(e){return parseInt(e)}).sort(function(e,t){return e-t}),gt.forEach(function(e){yt=yt.concat(Object.keys(mt[e]))});var Tt=[];yt.forEach(function(e){Tt.indexOf(e)<0&&Tt.push(e)}),yt=Tt,H()}var Et,Ct,wt,Nt,Ot=o("items"),Dt="page"===o("slideBy")?Ot:o("slideBy"),kt=t.nested,At=o("gutter"),Mt=o("edgePadding"),Pt=o("fixedWidth"),It=o("arrowKeys"),St=o("speed"),Wt=t.rewind,Ht=!Wt&&t.loop,Lt=o("autoHeight"),zt=s(),Bt=t.lazyload,Rt=[],jt=Ht?2*ht:0,qt=tt?ht+2*jt:ht+jt,Gt=!(!Pt||Ht||Mt),Ft=!tt||!Ht,Ut=lt?"left":"top",Xt="",Vt="",Yt=o("startIndex"),Kt=Yt?function(e){return e%=ht,e<0&&(e+=ht),e=Math.min(e,qt-Ot)}(Yt):tt?jt:0,Qt=Kt,Jt=0,Zt=qt-Ot,$t=!1,_t=t.onInit,en=new A,tn=ft.id,nn=" tns-slider tns-"+t.mode,an=ft.id||i(),rn=o("disable"),on=t.freezable,sn=!!rn||!!on&&ht<=Ot,ln="inner"===kt?" !important":"",cn={click:Ee,keydown:Le},un={click:Ce,keydown:Be},fn={mouseover:Se,mouseout:We},dn={visibilitychange:Ie},vn={keydown:He},hn={touchstart:Fe,touchmove:Ue,touchend:Xe,touchcancel:Xe},pn={mousedown:Fe,mousemove:Ue,mouseup:Xe,mouseleave:Xe},mn=r("controls"),yn=r("nav"),gn=t.navAsThumbnails,bn=r("autoplay"),xn=r("touch"),Tn=r("mouseDrag"),En="tns-slide-active";if(mn)var Cn,wn,Nn,On,Dn=o("controls"),kn=o("controlsText"),An=t.controlsContainer;if(yn)var Mn,Pn=o("nav"),In=t.navContainer,Sn=[],Wn=Sn,Hn=-1,Ln=Kt%ht,zn=Ln,Bn="tns-nav-active";if(bn)var Rn,jn,qn,Gn,Fn,Un=o("autoplay"),Xn=o("autoplayTimeout"),Vn="forward"===t.autoplayDirection?1:-1,Yn=o("autoplayText"),Kn=o("autoplayHoverPause"),Qn=t.autoplayButton,Jn=o("autoplayResetOnVisibility"),Zn=["<span class='tns-visually-hidden'>"," animation</span>"];if(xn)var $n,_n,ei,ti=o("touch"),ni=null,ii=null,ai=0;if(Tn)var ri=o("mouseDrag"),oi=!1;sn&&(Dn=Pn=ti=ri=It=Un=Kn=Jn=!1),U&&(Ut=U,Xt="translate",Xt+=lt?"X(":"Y(",Vt=")"),function(){ct.appendChild(ut),dt.insertBefore(ct,ft),ut.appendChild(ft),ot=a(ut);var e="tns-outer",n="tns-inner",i=r("gutter");if(tt?lt&&(r("edgePadding")||i&&!t.fixedWidth)?e+=" tns-ovh":n+=" tns-ovh":i&&(e+=" tns-ovh"),ct.className=e,ut.className=n,ut.id=an+"-iw",Lt&&(ut.className+=" tns-ah",ut.style[X]=St/1e3+"s"),""===ft.id&&(ft.id=an),nn+=G?" tns-subpixel":" tns-no-subpixel",nn+=q?" tns-calc":" tns-no-calc",tt&&(nn+=" tns-"+t.axis),ft.className+=nn,tt&&Q){var s={};s[Q]=xe,D(ft,s)}e=n=null;for(var u=0;u<ht;u++){var f=vt[u];f.id||(f.id=an+"-item"+u),v(f,"tns-item"),!tt&&rt&&v(f,rt),g(f,{"aria-hidden":"true",tabindex:"-1"})}if(Ht||Mt){for(var d=B.createDocumentFragment(),p=B.createDocumentFragment(),m=jt;m--;){var x=m%ht,E=vt[x].cloneNode(!0);if(b(E,"id"),p.insertBefore(E,p.firstChild),tt){var C=vt[ht-1-x].cloneNode(!0);b(C,"id"),d.appendChild(C)}}ft.insertBefore(d,ft.firstChild),ft.appendChild(p),vt=ft.children}for(var w=Kt,k=Kt+Math.min(ht,Ot);w<k;w++){var f=vt[w];g(f,{"aria-hidden":"false"}),b(f,["tabindex"]),v(f,En),tt||(f.style.left=100*(w-Kt)/Ot+"%",v(f,nt),h(f,rt))}if(tt&&lt&&(G?(l(zt,"#"+an+" > .tns-item","font-size:"+R.getComputedStyle(vt[0]).fontSize+";",c(zt)),l(zt,"#"+an,"font-size:0;",c(zt))):[].forEach.call(vt,function(e,t){e.style.marginLeft=y(t)})),F){var A=N(t.edgePadding,t.gutter,t.fixedWidth);l(zt,"#"+an+"-iw",A,c(zt)),tt&&lt&&(A="width:"+O(t.fixedWidth,t.gutter,t.items),l(zt,"#"+an,A,c(zt))),(lt||t.gutter)&&(A=P(t.fixedWidth,t.gutter,t.items)+I(t.gutter),l(zt,"#"+an+" > .tns-item",A,c(zt)))}else if(ut.style.cssText=N(Mt,At,Pt),tt&&lt&&(ft.style.width=O(Pt,At,Ot)),lt||At){var A=P(Pt,At,Ot)+I(At);l(zt,"#"+an+" > .tns-item",A,c(zt))}if(lt||rn||(ae(),Ve()),mt&&F&&gt.forEach(function(e){var t=mt[e],n="",i="",a="",s="",l=o("items",e),c=o("fixedWidth",e),u=o("edgePadding",e),f=o("gutter",e);("edgePadding"in t||"gutter"in t)&&(i="#"+an+"-iw{"+N(u,f,c)+"}"),tt&&lt&&("fixedWidth"in t||"gutter"in t||"items"in t)&&(a="#"+an+"{width:"+O(c,f,l)+"}"),("fixedWidth"in t||r("fixedWidth")&&"gutter"in t||!tt&&"items"in t)&&(s+=P(c,f,l)),"gutter"in t&&(s+=I(f)),s.length>0&&(s="#"+an+" > .tns-item{"+s+"}"),n=i+a+s,n.length>0&&zt.insertRule("@media (min-width: "+e/16+"em) {"+n+"}",zt.cssRules.length)}),tt&&!rn&&pe(),navigator.msMaxTouchPoints&&(v(ct,"ms-touch"),D(ct,{scroll:Re}),re()),yn){var M=tt?jt:0;if(In)g(In,{"aria-label":"Carousel Pagination"}),Mn=In.children,[].forEach.call(Mn,function(e,t){g(e,{"data-nav":t,tabindex:"-1","aria-selected":"false","aria-controls":vt[M+t].id})});else{for(var H="",j=gn?"":" hidden",w=0;w<ht;w++)H+='<button data-nav="'+w+'" tabindex="-1" aria-selected="false" aria-controls="'+vt[M+w].id+j+'" type="button"></button>';H='<div class="tns-nav" aria-label="Carousel Pagination">'+H+"</div>",ct.insertAdjacentHTML("afterbegin",H),In=ct.querySelector(".tns-nav"),Mn=In.children}if(Ke(),X){var U=X.substring(0,X.length-18).toLowerCase(),A="transition: all "+St/1e3+"s";U&&(A="-"+U+"-"+A),l(zt,"[aria-controls^="+an+"-item]",A,c(zt))}g(Mn[Ln],{tabindex:"0","aria-selected":"true"}),v(Mn[Ln],Bn),D(In,un),Pn||T(In)}if(bn){var V=Un?"stop":"start";Qn?g(Qn,{"data-action":V}):t.autoplayButtonOutput&&(ut.insertAdjacentHTML("beforebegin",'<button data-action="'+V+'" type="button">'+Zn[0]+V+Zn[1]+Yn[0]+"</button>"),Qn=ct.querySelector("[data-action]")),Qn&&D(Qn,{click:Pe}),Un?(De(),Kn&&D(ft,fn),Jn&&D(ft,dn)):Qn&&T(Qn)}mn&&(An?(Cn=An.children[0],wn=An.children[1],g(An,{"aria-label":"Carousel Navigation",tabindex:"0"}),g(Cn,{"data-controls":"Prev"}),g(wn,{"data-controls":"Next"}),g(An.children,{"aria-controls":an,tabindex:"-1"})):(ct.insertAdjacentHTML("afterbegin",'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="Prev" tabindex="-1" aria-controls="'+an+'" type="button">'+kn[0]+'</button><button data-controls="Next" tabindex="-1" aria-controls="'+an+'" type="button">'+kn[1]+"</button></div>"),An=ct.querySelector(".tns-controls"),Cn=An.children[0],wn=An.children[1]),Nn=ce(Cn),On=ce(wn),de(),D(An,cn),Dn||T(An)),ti&&D(ft,hn),ri&&D(ft,pn),It&&D(B,vn),"inner"===kt?en.on("outerResized",function(){W(),en.emit("innerLoaded",Qe())}):(D(R,{resize:S}),"outer"===kt&&en.on("innerLoaded",ee)),_(),ee(),L(),z(),en.on("indexChanged",ne),"function"==typeof _t&&_t(Qe()),"inner"===kt&&en.emit("innerLoaded",Qe()),rn&&$(!0),st=!0}();var si=function(){return Ht?function(){var e=Jt,t=Zt;if(tt)if(e+=Dt,t-=Dt,Mt)e+=1,t-=1;else if(Pt){var n=At?At:0;pt%(Pt+n)>n&&(t-=1)}if(Kt>t)for(;Kt>=e+ht;)Kt-=ht;else if(Kt<e)for(;Kt<=t-ht;)Kt+=ht}:function(){Kt=Math.max(Jt,Math.min(Zt,Kt))}}(),li=function(){return tt?function(e,t){t||(t=he()),Gt&&Kt===Zt&&(t=-((Pt+At)*qt-ot)+"px"),X||!e?(pe(t),e&&C(ft)||xe()):M(ft,Ut,Xt,Vt,t,St,xe),lt||Ve()}:function(e){Rt=[];var t={};t[Q]=t[J]=xe,k(vt[Qt],t),D(vt[Kt],t),me(Qt,nt,it,!0),me(Kt,rt,nt),Q&&J&&e||xe()}}();return{getInfo:Qe,events:en,goTo:Te,play:Ae,pause:Me,isOn:st,rebuild:function(){return Z(t)},destroy:function(){if(k(R,{resize:S}),k(B,vn),zt.disabled=!0,Ht)for(var e=jt;e--;)tt&&vt[0].remove(),vt[vt.length-1].remove();var n=["tns-item",En];tt||(n=n.concat("tns-normal",nt));for(var i=ht;i--;){var a=vt[i];a.id.indexOf(an+"-item")>=0&&(a.id=""),n.forEach(function(e){h(a,e)})}if(b(vt,["style","aria-hidden","tabindex"]),vt=an=ht=qt=jt=null,Dn&&(k(An,cn),t.controlsContainer&&(b(An,["aria-label","tabindex"]),b(An.children,["aria-controls","aria-disabled","tabindex"])),An=Cn=wn=null),Pn&&(k(In,un),t.navContainer&&(b(In,["aria-label"]),b(Mn,["aria-selected","aria-controls","tabindex"])),In=Mn=null),Un&&(clearInterval(Rn),Qn&&k(Qn,{click:Pe}),k(ft,fn),k(ft,dn),t.autoplayButton&&b(Qn,["data-action"])),ft.id=tn||"",ft.className=ft.className.replace(nn,""),x(ft),tt&&Q){var r={};r[Q]=xe,k(ft,r)}k(ft,hn),k(ft,pn),dt.insertBefore(ft,ct),ct.remove(),ct=ut=ft=Kt=Qt=Ot=Dt=Ln=zn=mn=Sn=Wn=this.getInfo=this.events=this.goTo=this.play=this.pause=this.destroy=null,this.isOn=st=!1}}};return Z}();
//# sourceMappingURL=../sourcemaps/tiny-slider.js.map
