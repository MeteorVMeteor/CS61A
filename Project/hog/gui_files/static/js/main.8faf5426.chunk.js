(this["webpackJsonphog-gui"]=this["webpackJsonphog-gui"]||[]).push([[0],{52:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(20),l=n.n(c),u=(n(52),n(11)),o=n(35),i=n(5),s=(n(53),n(44)),m=n(37),g=n(28),f=n(17),b=n.n(f),E=n(45),p=n(22),h=n(12),v=n(10),d=n(6),O=n(7);function y(){var e=Object(d.a)(["\n  font-size: 1.25rem;\n  width: 100%;\n  text-align: center;\n  margin: 20px;\n"]);return y=function(){return e},e}var j=O.a.div(y());function x(e){var t=e.numRolls;return r.a.createElement(j,null,r.a.createElement("p",null,"It is the ",r.a.createElement("b",null,"COMPUTER\u2018s")," turn."),r.a.createElement("p",null,"The computer rolls ",t," dice."))}function k(){var e=Object(d.a)(["\n  margin-top: 15px;\n"]);return k=function(){return e},e}var C=O.a.div(k());function w(e){var t=e.gameRules,n=e.onGameRulesChange;return r.a.createElement(C,null,r.a.createElement("h5",null,"Enable game rules:"),Object.entries(t).map((function(e){var t=Object(i.a)(e,2),a=t[0],c=t[1];return r.a.createElement(g.a.Check,{key:a,custom:!0,inline:!0,type:"switch",id:"rule-checkbox-".concat(a),checked:c,label:a,onChange:function(){return n(a,!c)}})})))}var R=n(23),P=n(32);function S(){var e=Object(d.a)(["\n  margin-top: 15px;\n"]);return S=function(){return e},e}var I=O.a.div(S());function _(e){var t=e.strategy,n=e.onStrategyChange,c="Pick a strategy",l=t||c,u=Object(a.useState)(l),o=Object(i.a)(u,2),s=o[0],m=o[1];return r.a.createElement(I,null,r.a.createElement("h5",null,"Play against the computer:"),r.a.createElement(P.a,{className:"mb-3"},r.a.createElement(P.a.Prepend,null,r.a.createElement(P.a.Checkbox,{"aria-label":"Checkbox for following text input",checked:!!t,onChange:function(e){e.target.checked?n(s):n(null)}})),r.a.createElement(R.a,{as:"select",onChange:function(e){m(e.target.value),n(e.target.value)},value:s},r.a.createElement("option",{disabled:!0,hidden:!0},c),r.a.createElement("option",null,"piggypoints_strategy"),r.a.createElement("option",null,"more_boar_strategy"),r.a.createElement("option",null,"final_strategy"))))}var G=n(46);function M(e){var t=e.messages;return t?t.map((function(e,t){return r.a.createElement(G.a,{key:t,variant:"dark"},e)})):null}function N(){var e=Object(d.a)(["\n  width: 120px;\n  height: 120px;\n  margin: 10px;\n"]);return N=function(){return e},e}function T(){var e=Object(d.a)(["\n  text-align: center;\n  width: 100%;\n"]);return T=function(){return e},e}var z=O.a.div(T()),A=O.a.img(N());function L(e){var t=e.rolls.map((function(e,t){return r.a.createElement(A,{src:"/dice_graphic.svg?num="+e,key:t})}));return r.a.createElement(z,null,t)}function D(){return F.apply(this,arguments)}function F(){return(F=Object(p.a)(b.a.mark((function e(){var t,n,a,r=arguments;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"",n=r.length>1&&void 0!==r[1]?r[1]:{},e.next=4,fetch(t,{method:"POST",mode:"same-origin",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json"},redirect:"manual",body:JSON.stringify(n)});case 4:if(200===(a=e.sent).status){e.next=7;break}throw new Error("Error ".concat(a.status,"."));case 7:return e.abrupt("return",a.json());case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var B=n(27),H=["ZERO","ONE"],J=["#28a745","#17a2b8"],U=["white","white"];function V(){var e=Object(d.a)(["\n  font-size: 1.25rem;\n  width: 100%;\n  text-align: center;\n  margin-top: 20px;\n"]);return V=function(){return e},e}var Y=O.a.div(V());function W(e){var t=e.playerIndex,n=e.piggyPoints,c=e.onClick,l=n?0:1,u=Object(a.useState)(l),o=Object(i.a)(u,2),s=o[0],m=o[1];return r.a.createElement(Y,null,r.a.createElement("p",null,"It is Player"," ",r.a.createElement("b",null,H[t],"\u2018s")," ","turn."),r.a.createElement("p",null,"Roll"," ",r.a.createElement("input",{type:"number",min:l,max:10,value:s,onChange:function(e){var t=Math.max(Math.min(10,e.target.value),l);m(e.target.value&&t)}})," ","Dice.",r.a.createElement(B.a,{variant:"info",size:"lg",style:{marginLeft:"10px"},onClick:function(){c(s)}}," ","Roll!")),r.a.createElement("p",null))}function Z(e){return new Promise((function(t){return setTimeout(t,e)}))}function q(e){var t=e.numRolls,n=function(){return Array(t).fill().map((function(){return Math.floor(6*Math.random())+1}))},c=Object(a.useState)(n),l=Object(i.a)(c,2),u=l[0],o=l[1];return function(e,t){var n=Object(a.useRef)(e);n.current=e,Object(a.useEffect)((function(){if(null!==t){var e=setInterval((function(){return n.current()}),t);return function(){return clearInterval(e)}}}),[t])}((function(){o(n)}),200),r.a.createElement(L,{rolls:u})}function K(){var e=Object(d.a)(["\n  width: 100%;\n  line-height: 30px;\n  background: ",";\n  color: white;\n"]);return K=function(){return e},e}function Q(){var e=Object(d.a)(["\n  width: 100%;\n  height: 130px;\n  line-height: 130px;\n  font-size: 48pt;\n  background: ",";\n"]);return Q=function(){return e},e}function X(){var e=Object(d.a)(["\n  width: 150px;\n  border: solid black 2px;\n  font-weight: bold;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n"]);return X=function(){return e},e}var $=O.a.div(X()),ee=O.a.div(Q(),(function(e){return e.isCurrent?"white":"transparent"})),te=O.a.div(K(),(function(e){return e.isCurrent?"#17a2b8":"grey"}));function ne(e){var t=e.score,n=e.playerIndex,a=e.currentPlayer===n;return r.a.createElement($,null,r.a.createElement(ee,{isCurrent:a},t),r.a.createElement(te,{isCurrent:a},a?"\u279c ":"","Player ",H[n]))}function ae(){var e=Object(d.a)(["\n  display: flex;\n  justify-content: space-evenly;\n"]);return ae=function(){return e},e}var re=O.a.div(ae());function ce(e){var t=e.scores,n=e.currentPlayer;return r.a.createElement(re,null,t.map((function(e,t){return r.a.createElement(ne,{key:t,score:e,playerIndex:t,currentPlayer:n})})))}function le(e){var t=e.onClick;return r.a.createElement(B.a,{variant:"secondary",onClick:t},"New Game")}function ue(){var e=Object(d.a)(["\n  font-size: 1.25rem;\n  width: 100%;\n  text-align: center;\n  margin: 20px;\n"]);return ue=function(){return e},e}function oe(){var e=Object(d.a)(["\n  text-align: center;\n  margin-top: 30px;\n  font-weight: bold;\n  font-size: 24px;\n  width: 100%;\n  color: ",";\n  background: ",";\n  padding: 5px;\n"]);return oe=function(){return e},e}var ie=O.a.div(oe(),(function(e){return e.color}),(function(e){return e.bgColor})),se=O.a.div(ue());function me(e){var t=e.winner,n=e.onRestart,a=e.onStrategyChange;return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,null,r.a.createElement(ie,{color:U[t],bgColor:J[t]},"Player ",H[t]," has won! Congratulations!")),r.a.createElement(v.a,null,r.a.createElement(se,null,r.a.createElement(le,{onClick:n}))),r.a.createElement(v.a,null,r.a.createElement(h.a,null,r.a.createElement(_,{strategy:null,onStrategyChange:a}))))}var ge="WAITING_FOR_INPUT",fe="DISPLAYING_COMPUTER_MOVE",be="ROLLING_DICE",Ee="DISPLAYING_CHANGE",pe="GAME_OVER",he=100;function ve(e){var t,n=e.onRestart,c=e.strategy,l=e.onStrategyChange,o=e.gameRules,s=e.onGameRulesChange,m=Object(a.useState)(ge),g=Object(i.a)(m,2),f=g[0],d=g[1],O=Object(a.useState)([]),y=Object(i.a)(O,2),j=y[0],k=y[1],C=Object(a.useState)(0),R=Object(i.a)(C,2),P=R[0],S=R[1],I=Object(a.useState)([0,0]),G=Object(i.a)(I,2),N=G[0],T=G[1],z=Object(a.useState)(0),A=Object(i.a)(z,2),F=A[0],B=A[1],H=Object(a.useState)([]),J=Object(i.a)(H,2),U=J[0],V=J[1],Y=Object(a.useRef)([]),K=Object(a.useRef)([]),Q=function(){var e=Object(p.a)(b.a.mark((function e(t){var n,a,r,l,u,s,m,g,f,p,h=arguments;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=h.length>1&&void 0!==h[1]?h[1]:P,d(be),B(t),Y.current.push(t),e.next=6,Promise.all([D("/take_turn",{prevRolls:K.current,moveHistory:Y.current,goal:he,gameRules:o})].concat([t&&Z(1e3)]));case 6:if(a=e.sent,r=Object(i.a)(a,1),l=r[0],u=l.message,s=l.rolls,m=l.finalScores,g=l.who,k(s.slice(K.current.length)),T(m),d(Ee),f=[],g===n&&f.push("More boar! Extra turn granted to Player ".concat(g)),u&&f.push(u),V(f),K.current=s,e.t0=c,!e.t0){e.next=25;break}return e.next=25,Z(2500);case 25:if(S(g),!(Math.max.apply(Math,Object(E.a)(m))>=he)){e.next=30;break}d(pe),e.next=42;break;case 30:if(1!==g||!c){e.next=41;break}return e.next=33,D("/strategy",{name:c,scores:N});case 33:return p=e.sent,B(p),d(fe),e.next=38,Z(2500);case 38:return e.abrupt("return",Q(p,g));case 41:d(ge);case 42:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),X=(t={},Object(u.a)(t,ge,r.a.createElement(L,{rolls:j})),Object(u.a)(t,be,r.a.createElement(q,{numRolls:F})),Object(u.a)(t,Ee,r.a.createElement(L,{rolls:j})),Object(u.a)(t,pe,null),Object(u.a)(t,fe,r.a.createElement(x,{numRolls:F})),t)[f];return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,null,r.a.createElement(h.a,null,r.a.createElement(ce,{scores:N,currentPlayer:P}))),f!==fe&&r.a.createElement(v.a,null,r.a.createElement(W,{playerIndex:P,piggyPoints:o["Piggy Points"],onClick:Q})),r.a.createElement(v.a,null,r.a.createElement(h.a,null,X)),r.a.createElement(v.a,null,r.a.createElement(h.a,null,r.a.createElement(M,{messages:U}))),f===pe&&r.a.createElement(me,{winner:N[0]>N[1]?0:1,onRestart:n,onStrategyChange:l}),f===ge&&r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,null,r.a.createElement(h.a,null,r.a.createElement(w,{gameRules:o,onGameRulesChange:s}))),r.a.createElement(v.a,null,r.a.createElement(h.a,null,r.a.createElement(_,{strategy:c,onStrategyChange:l})))))}n(61);function de(){var e=Object(a.useState)(0),t=Object(i.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(null),f=Object(i.a)(l,2),b=f[0],E=f[1],p=Object(a.useState)({"Piggy Points":!1,"More Boar":!1}),h=Object(i.a)(p,2),v=h[0],d=h[1],O=function(){c((function(e){return e+1}))};return r.a.createElement(s.a,null,r.a.createElement(m.a,{bg:"dark",variant:"dark",className:"justify-content-between hognav"},r.a.createElement(m.a.Brand,null,"The Game of ",r.a.createElement("strong",null,"Hog")),r.a.createElement(g.a,{inline:!0},r.a.createElement(le,{onClick:O}))),r.a.createElement(ve,{style:{paddingTop:"10px"},key:n,strategy:b,onStrategyChange:function(e){E(e),O()},gameRules:v,onGameRulesChange:function(e,t){d(Object(o.a)(Object(o.a)({},v),{},Object(u.a)({},e,t))),O()}}))}l.a.render(r.a.createElement(de,null),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.8faf5426.chunk.js.map