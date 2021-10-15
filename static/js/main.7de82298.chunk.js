(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{16:function(e,t,n){e.exports={label:"Filter_label__thd0q",input:"Filter_input__3wnTx"}},17:function(e,t,n){},18:function(e,t,n){e.exports={contactList:"ContactList_contactList__34Siq"}},29:function(e,t,n){"use strict";n.r(t);var a,c=n(0),r=n.n(c),o=n(8),s=n.n(o),i=n(10),u=n(3),l=n(6),b=n(11),j=n(2),d=Object(u.b)("contacts/save"),m=Object(u.b)("contacts/delete"),O=Object(u.b)("contacts/filter"),f=Object(u.c)([],(a={},Object(l.a)(a,d,(function(e,t){return[].concat(Object(b.a)(e),[t.payload])})),Object(l.a)(a,m,(function(e,t){return e.filter((function(e){return e.id!==t.payload}))})),a)),p=Object(u.c)("",Object(l.a)({},O,(function(e,t){return t.payload}))),h=Object(j.b)({items:f,filter:p}),x=Object(u.a)({reducer:{contacts:h},devTools:!1}),v=n(15),C=n(4),g=n(31),_=n(5),N=n.n(_),w=n(1);function S(e){var t=Object(c.useState)(""),n=Object(C.a)(t,2),a=n[0],r=n[1],o=Object(c.useState)(""),s=Object(C.a)(o,2),i=s[0],u=s[1],l=Object(c.useState)(""),b=Object(C.a)(l,2),j=b[0],d=b[1],m=function(e){var t=e.currentTarget,n=t.name,a=t.value;switch(n){case"name":r(a);break;case"number":u(a);break;default:return}},O=function(){r(""),u(""),d("")};return Object(w.jsxs)("form",{className:N.a.inputForm,onSubmit:function(t){t.preventDefault(),e.onSubmit({name:a,number:i,id:j}),O()},children:[Object(w.jsxs)("label",{className:N.a.label,children:[Object(w.jsx)("span",{children:"Name"}),Object(w.jsx)("input",{className:N.a.input,type:"text",name:"name",value:a,placeholder:"i.e. James Bond",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:m})]}),Object(w.jsxs)("label",{className:N.a.label,children:["Number",Object(w.jsx)("input",{className:N.a.input,type:"tel",name:"number",value:i,placeholder:"i.e. 007-00-00",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:m})]}),Object(w.jsx)("button",{className:N.a.submitBtn,type:"submit",children:"Add contact"})]})}S.defaultProps={value:""};var y=function(e){var t=e.id,n=e.name,a=e.number,c=e.onDeleteContact;return Object(w.jsxs)("li",{children:[Object(w.jsxs)("span",{children:[n,":"]}),Object(w.jsx)("span",{children:a}),Object(w.jsx)("button",{type:"button",onClick:function(){return c(t)},children:"Delete"})]},t)},F=n(18),k=n.n(F),L=function(e){var t=e.contacts,n=e.onDeleteContact;return Object(w.jsx)("ul",{className:k.a.contactList,children:t.map((function(e){var t=e.id,a=e.name,c=e.number;return Object(w.jsx)(y,{name:a,number:c,onDeleteContact:n,id:t},t)}))})},A=n(16),B=n.n(A),J=function(e){var t=e.value,n=e.onChange;return Object(w.jsxs)("label",{className:B.a.label,children:[" ","Find contacts by name",Object(w.jsx)("input",{className:B.a.input,type:"text",value:t,placeholder:"enter name",onChange:n})]})};J.defaultProps={value:""};var T=J;n(17);function D(){var e=Object(c.useState)((function(){var e;return null!==(e=JSON.parse(window.localStorage.getItem("contacts")))&&void 0!==e?e:[]})),t=Object(C.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)((function(){var e;return null!==(e=JSON.parse(window.localStorage.getItem("filter")))&&void 0!==e?e:""})),o=Object(C.a)(r,2),s=o[0],u=o[1];Object(c.useEffect)((function(){window.localStorage.setItem("contacts",JSON.stringify(n))}),[n]);var l=Object(i.b)(),j=s.toLowerCase(),f=n.filter((function(e){return e.name.toLowerCase().includes(j)}));return Object(w.jsxs)("div",{className:"App",children:[Object(w.jsx)("h1",{className:"title",children:"Phonebook"}),Object(w.jsx)(S,{onSubmit:function(e){var t=e.name.toLowerCase(),c=n.find((function(e){return e.name.toLowerCase()===t})),r=Object(v.a)(Object(v.a)({},e),{},{id:Object(g.a)()});c?alert("".concat(c.name," is already in contacts")):l(d(r)),a((function(e){return[r].concat(Object(b.a)(e))}))}}),Object(w.jsx)("h2",{children:"Contacts"}),Object(w.jsx)(T,{value:s,onChange:function(e){u(e.currentTarget.value),l(O(e.currentTarget.value))}}),Object(w.jsx)(L,{contacts:f,onDeleteContact:function(e){a((function(t){return t.filter((function(t){return t.id!==e}))})),l(m(e))}})]})}D.defaultProps={contacts:[]};n(28);s.a.render(Object(w.jsx)(r.a.StrictMode,{children:Object(w.jsx)(i.a,{store:x,children:Object(w.jsx)(D,{})})}),document.getElementById("root"))},5:function(e,t,n){e.exports={inputForm:"ContactForm_inputForm__3BOT-",label:"ContactForm_label__NThxc",submitBtn:"ContactForm_submitBtn__28f31"}}},[[29,1,2]]]);
//# sourceMappingURL=main.7de82298.chunk.js.map