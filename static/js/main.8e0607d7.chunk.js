(this["webpackJsonptest-task-popup"]=this["webpackJsonptest-task-popup"]||[]).push([[0],[,,,function(e,t,n){e.exports={button:"Button_button__38M1N",border:"Button_border__16Hpu",disabled:"Button_disabled__pPsYU",text:"Button_text__2ge-k",small:"Button_small__3pCJY",tag:"Button_tag__3OLsN",notActive:"Button_notActive__1TYYH",fullScreenWidth:"Button_fullScreenWidth__3iCwO"}},function(e,t,n){e.exports={taxDeduction:"TaxDeduction_taxDeduction__3FWHF",closeBtn:"TaxDeduction_closeBtn__3ytQQ",checkboxBlocksContainer:"TaxDeduction_checkboxBlocksContainer__3wgQq",checkboxBlocksHeader:"TaxDeduction_checkboxBlocksHeader__Ky3-9",tagContainer:"TaxDeduction_tagContainer__3r6E4",addButtonContainer:"TaxDeduction_addButtonContainer__3YfhF",addButtonContainer_checkboxBlock_empty:"TaxDeduction_addButtonContainer_checkboxBlock_empty__3Gu2S"}},function(e,t,n){e.exports={input:"Input_input__2lSPw",inputWrapper:"Input_inputWrapper__28XQP",prefix:"Input_prefix__3eLHn",label:"Input_label__3UzSK",error:"Input_error__Oyo4y",errors:"Input_errors__2KlpP"}},function(e,t,n){e.exports={checkboxContainer:"Checkbox_checkboxContainer__3z9uL",checkbox:"Checkbox_checkbox__2Vmbo",disabled:"Checkbox_disabled__3QBp9",checked:"Checkbox_checked__3sZx8",checkboxLabel:"Checkbox_checkboxLabel__wEaWc"}},,function(e,t,n){e.exports={popUp:"PopUp_popUp__2il-V",active:"PopUp_active__1QSSq"}},function(e,t,n){e.exports={checkboxBlock:"CheckboxBlock_checkboxBlock__3JaoJ",noBorder:"CheckboxBlock_noBorder__DwV9W"}},,function(e,t,n){e.exports={app:"App_app__1kX79"}},function(e,t,n){e.exports={background:"PopUpBackground_background__39smd"}},function(e,t,n){e.exports={closeButton:"CloseButton_closeButton__eO_uY"}},,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),o=n(10),r=n.n(o),s=(n(19),n(2)),u=n(11),i=n.n(u),l=n(3),b=n.n(l),d=n(0),p=function(e){var t=e.type,n=void 0===t?"big":t,c=e.label,a=e.handler,o=e.disabled,r=void 0!==o&&o,s=e.border,u=void 0!==s&&s,i=e.notActive,l=b.a.button;switch(n){case"big":l="".concat(l," + ").concat(u?b.a.border:"","  + ").concat(r?b.a.disabled:"");break;case"text":l="".concat(l," + ").concat(b.a.text);break;case"small":l="".concat(l," + ").concat(b.a.small," + ").concat(u?b.a.border:""," + ").concat(r?b.a.disabled:"");break;case"tag":l="".concat(l," + ").concat(b.a.tag," + ").concat(i?b.a.notActive:"")}return"text"===n&&r?Object(d.jsx)(d.Fragment,{}):Object(d.jsx)("button",{className:l,onClick:function(){r||a()},children:c})},j=Object(c.memo)(p),x=n(14),_=n(8),h=n.n(_),O=n(12),f=n.n(O),m=function(){return Object(d.jsx)("div",{className:"".concat(f.a.background)})},k=n(4),v=n.n(k),g=n(9),B=n.n(g),C=n(13),N=n.n(C),S=n.p+"static/media/closeButton.beb7d290.svg",y=function(e){var t=e.handler;return Object(d.jsx)("div",{className:N.a.closeButton,onClick:function(){t()},children:Object(d.jsx)("img",{src:S,alt:"close-button"})})},P=Object(c.memo)(y),U=n(5),D=n.n(U),F=function(e){var t,n=e.value,c=e.setValue,a=e.placeholder,o=e.label,r=e.errors,s=void 0===r?[]:r,u=e.unsetErrors,i=e.onEnterPress,l=e.unit,b=e.autoFocus,p=void 0!==b&&b,j=!1;switch(s.forEach((function(e){j=j||!!e})),l){case"ruble":t="\u20bd";break;case"euro":t="\u20ac";break;case"dollar":t="$";break;default:t=""}return Object(d.jsxs)("div",{className:"".concat(D.a.input," + ").concat(j?D.a.error:""),children:[o&&Object(d.jsx)("span",{className:D.a.label,children:o}),Object(d.jsxs)("div",{className:D.a.inputWrapper,children:[Object(d.jsx)("input",{type:"text",value:n,onChange:function(e){c(e.target.value),u&&u()},placeholder:a,onFocus:function(){u&&u()},onKeyPress:i,prefix:t,autoFocus:p}),l&&Object(d.jsx)("div",{className:D.a.prefix,children:t})]}),Object(d.jsx)("div",{className:D.a.errors,children:s.map((function(e,t){if(e)return Object(d.jsx)("span",{children:e},t)}))})]})},E=Object(c.memo)(F),L=n(6),w=n.n(L),T=n.p+"static/media/check.62a8ceae.svg",V=function(e){var t=e.value,n=e.setValue,c=e.label,a=e.disabled,o=void 0!==a&&a;return Object(d.jsxs)("div",{className:w.a.checkboxContainer,children:[Object(d.jsx)("div",{className:"".concat(w.a.checkbox," + ").concat(t?w.a.checked:""," + ").concat(o?w.a.disabled:""),onClick:function(){o||n(!t)},children:t&&Object(d.jsx)("img",{src:T,alt:"check"})}),c&&Object(d.jsx)("span",{className:w.a.checkboxLabel,children:c})]})},W=Object(c.memo)(V);function I(e){var t=26e4,n=[],c=1,a=Math.round(.13*e*12);if(e>=5e3){for(;t-a>0;)n.push({amount:a,yearNumber:c}),c+=1,t-=a;return[].concat(n,[{amount:t,yearNumber:c}])}return[]}var M=["\u044b\u0439","\u044b\u0439","\u043e\u0439","\u0438\u0439","\u044b\u0439","\u044b\u0439","\u043e\u0439","\u043e\u0439","\u043e\u0439","\u044b\u0439"];function A(e){return(e=Math.abs(e))>=11&&e<=19?"\u044b\u0439":0===e?"\u043e\u0439":M[e%10]}var H=["\u0435\u0439","\u044c","\u044f","\u044f","\u044f","\u0435\u0439","\u0435\u0439","\u0435\u0439","\u0435\u0439","\u0435\u0439"];function Q(e){return!!e.trim()}function Y(e){return!isNaN(+e)}var J=function(e){var t,n=e.amount,c=e.value,a=e.setValue,o=e.yearNumber,r=e.isLast;return Object(d.jsxs)("div",{className:"".concat(B.a.checkboxBlock," + ").concat(r?B.a.noBorder:""),children:[Object(d.jsx)(W,{label:"".concat(n," \u0440\u0443\u0431\u043b").concat((t=n,(t=Math.abs(t))>=11&&t<=19?"\u0435\u0439":H[t%10])),setValue:a,value:c}),Object(d.jsxs)("span",{children:[2===o?"\u0432\u043e ":"\u0432 ",o,"-",A(o)," \u0433\u043e\u0434"]})]})},K=function(e){var t=e.closePopUp,n=Object(c.useState)(""),a=Object(s.a)(n,2),o=a[0],r=a[1],u=Object(c.useState)(""),i=Object(s.a)(u,2),l=i[0],b=i[1],p=Object(c.useState)(""),x=Object(s.a)(p,2),_=x[0],h=x[1],O=Object(c.useState)(""),f=Object(s.a)(O,2),m=f[0],k=f[1],g=Object(c.useState)([]),B=Object(s.a)(g,2),C=B[0],N=B[1],S=Object(c.useState)([]),y=Object(s.a)(S,2),U=y[0],D=y[1],F=Object(c.useState)(!1),L=Object(s.a)(F,2),w=L[0],T=L[1];Object(c.useEffect)((function(){U.length&&(U.reduce((function(e,t){return e&&t}),!0)&&!w?T(!0):U.reduce((function(e,t){return e&&t}),!0)||T(!1))}),[U]);var V=Object(c.useState)(!0),M=Object(s.a)(V,2),A=M[0],H=M[1];Object(c.useEffect)((function(){w&&!U.reduce((function(e,t){return e&&t}),!0)&&U.forEach((function(e,t){D(U.map((function(e){return!0})))}))}),[w]);var K=function(){if(Q(o)&&Y(o))if(function(e,t){return e>=t}(+o,5e3)){var e=I(+o);N(I(+o)),D(e.map((function(e){return!1})))}else k("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u043e\u0445\u043e\u0434 \u043e\u0442 5000 \u0432\u043a\u043b\u044e\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u043e");else Q(o)?Y(o)||b("\u0414\u043e\u0445\u043e\u0434 \u0434\u043e\u043b\u0436\u0435\u043d \u0431\u044b\u0442\u044c \u0446\u0435\u043b\u044b\u043c \u0447\u0438\u0441\u043b\u043e\u043c \u0431\u0435\u0437 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432 \u0442\u043e\u0447\u0435\u043a \u0438 \u0437\u0430\u043f\u044f\u0442\u044b\u0445"):h("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u043e\u0445\u043e\u0434")};return Object(d.jsxs)("div",{className:v.a.taxDeduction,children:[Object(d.jsx)("div",{className:v.a.closeBtn,children:Object(d.jsx)(P,{handler:t})}),Object(d.jsx)("h3",{children:"\u041d\u0430\u043b\u043e\u0433\u043e\u0432\u044b\u0439 \u0432\u044b\u0447\u0435\u0442"}),Object(d.jsx)("p",{children:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u043d\u0430\u043b\u043e\u0433\u043e\u0432\u044b\u0439 \u0432\u044b\u0447\u0435\u0442 \u0447\u0442\u043e\u0431\u044b \u043f\u043e\u0433\u0430\u0441\u0438\u0442\u044c \u0438\u043f\u043e\u0442\u0435\u043a\u0443 \u0434\u043e\u0441\u0440\u043e\u0447\u043d\u043e. \u0420\u0430\u0437\u043c\u0435\u0440 \u043d\u0430\u043b\u043e\u0433\u043e\u0432\u043e\u0433\u043e \u0432\u044b\u0447\u0435\u0442\u0430 \u0441\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 13% \u043e\u0442 \u0441\u0432\u043e\u0435\u0433\u043e \u043e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0433\u043e\u0434\u043e\u0432\u043e\u0433\u043e \u0434\u043e\u0445\u043e\u0434\u0430."}),Object(d.jsx)(E,{value:o,setValue:r,onEnterPress:function(e){"Enter"===e.key&&K()},errors:[_,l,m],unsetErrors:function(){b(""),h(""),k("")},label:"\u0412\u0430\u0448\u0430 \u0437\u0430\u0440\u043f\u043b\u0430\u0442\u0430 \u0432 \u043c\u0435\u0441\u044f\u0446",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u043e\u0445\u043e\u0434 \u0431\u043e\u043b\u044c\u0448\u0435 5000",unit:"ruble",autoFocus:!0}),Object(d.jsx)(j,{label:"\u0420\u0430\u0441\u0441\u0447\u0438\u0442\u0430\u0442\u044c",handler:function(){K()},type:"text",fullScreenWidth:!0}),Object(d.jsxs)("div",{className:v.a.checkboxBlocksHeader,children:[!!C.length&&Object(d.jsx)("span",{children:"\u0418\u0442\u043e\u0433\u043e \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u043d\u0435\u0441\u0442\u0438 \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0434\u043e\u0441\u0440\u043e\u0447\u043d\u044b\u0445:"}),C.length>=4&&Object(d.jsx)(W,{label:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0432\u0441\u0435",value:w,setValue:T})]}),Object(d.jsx)("div",{className:v.a.checkboxBlocksContainer,children:C.map((function(e,t){return Object(d.jsx)(J,{amount:e.amount,value:U[t],setValue:function(){return e=t,void D((function(t){return t.map((function(t,n){return n===e?!t:t}))}));var e},yearNumber:e.yearNumber,isLast:t+1===C.length},t)}))}),Object(d.jsxs)("div",{className:v.a.tagContainer,children:[Object(d.jsx)("span",{children:"\u0427\u0442\u043e \u0443\u043c\u0435\u043d\u044c\u0448\u0430\u0435\u043c?"}),Object(d.jsx)(j,{label:"\u041f\u043b\u0430\u0442\u0435\u0436",handler:function(){H(!0)},type:"tag",notActive:!A}),Object(d.jsx)(j,{label:"\u0421\u0440\u043e\u043a",handler:function(){H(!1)},type:"tag",notActive:A})]}),Object(d.jsx)("div",{className:"".concat(C.length?v.a.addButtonContainer:v.a.addButtonContainer_checkboxBlock_empty),children:Object(d.jsx)(j,{label:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",handler:function(){}})})]})},q=Object(c.memo)(K),z=function(e){var t,n=e.popUpOptions,a=e.closePopUp,o=Object(c.useState)(!1),r=Object(s.a)(o,2),u=r[0],i=r[1],l=Object(c.useState)(!1),b=Object(s.a)(l,2),p=b[0],j=b[1];if(Object(c.useEffect)((function(){i(!0)}),[]),"taxDeduction"===n.renderingComponent)t=Object(d.jsx)(q,Object(x.a)({},n.props));else t=Object(d.jsx)(d.Fragment,{});return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(m,{}),Object(d.jsx)("div",{className:"".concat(h.a.popUp," + ").concat(u?h.a.active:""),onMouseDown:function(){p||a()},children:Object(d.jsx)("div",{onMouseOver:function(){j(!0)},onMouseLeave:function(){j(!1)},children:t})})]})},X=Object(c.memo)(z),G=function(){var e=Object(c.useState)({renderingComponent:null,props:null}),t=Object(s.a)(e,2),n=t[0],a=t[1],o=function(){return a({renderingComponent:null,props:null})};return Object(d.jsxs)("div",{className:i.a.app,children:[!n.renderingComponent&&Object(d.jsx)(j,{label:"\u041d\u0430\u043b\u043e\u0433\u043e\u0432\u044b\u0439 \u0432\u044b\u0447\u0435\u0442",handler:function(){a({popUpOptions:{renderingComponent:"taxDeduction",props:{closePopUp:o}}}.popUpOptions)},border:!0}),n.renderingComponent&&Object(d.jsx)(X,{popUpOptions:n,closePopUp:o})]})},Z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),o(e),r(e)}))};r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(G,{})}),document.getElementById("root")),Z()}],[[21,1,2]]]);
//# sourceMappingURL=main.8e0607d7.chunk.js.map