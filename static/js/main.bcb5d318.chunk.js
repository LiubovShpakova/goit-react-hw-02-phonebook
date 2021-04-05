(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{18:function(t,e,n){},2:function(t,e,n){t.exports={form:"Form_form__2n4Mz",label:"Form_label__28kwQ",input:"Form_input__mvn37"}},20:function(t,e,n){},21:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(10),i=n.n(r),o=(n(18),n(12)),s=n(3),u=n(4),l=n(6),b=n(5),m=n(22),d=n(11),h=n(2),j=n.n(h),p=n(0),f=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.nameInputId=Object(m.a)(),t.numberInputId=Object(m.a)(),t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(d.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("form",{className:j.a.form,onSubmit:this.handleSubmit,children:[Object(p.jsxs)("label",{htmlFor:this.nameInputId,className:j.a.label,children:["Name",Object(p.jsx)("input",{type:"text",id:this.nameInputId,className:j.a.input,name:"name",value:this.state.name,onChange:this.handleChange,placeholder:"enter contact name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(p.jsxs)("label",{htmlFor:this.numberInputId,className:j.a.label,children:["Number",Object(p.jsx)("input",{type:"text",id:this.numberInputId,className:j.a.input,name:"number",value:this.state.number,onChange:this.handleChange,placeholder:"enter contact number",pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(p.jsx)("button",{type:"submit",className:j.a.button,children:"Add contact"})]})}}]),n}(a.Component),O=n(9),v=n.n(O),C=function(t){var e=t.value,n=t.onChange;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h3",{children:"Find Contacts By Name"}),Object(p.jsx)("label",{className:v.a.label,children:Object(p.jsx)("input",{className:v.a.input,type:"text",value:e,onChange:n})})]})};C.defaultProps={value:""};var x=C,_=n(7),g=n.n(_),y=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(p.jsx)("ul",{className:g.a.contact__container,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(p.jsxs)("li",{className:g.a.contact_list,children:[a,": ",c,Object(p.jsx)("button",{type:"button",onClick:function(){return n(e)},className:g.a.button,children:"Delete"})]},e)}))})},N=(n(20),function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e){var n=e.name,a=e.number,c={id:Object(m.a)(),name:n,number:a};t.setState((function(t){var e=t.contacts;return{contacts:[c].concat(Object(o.a)(e))}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,a=this.getVisibleContacts();return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"Phonebook"}),Object(p.jsx)(f,{onSubmit:this.addContact,contacts:e}),Object(p.jsx)("h2",{children:"Contacts"}),Object(p.jsx)(x,{value:n,onChange:this.changeFilter}),Object(p.jsx)(y,{contacts:a,onDeleteContact:this.deleteContact})]})}}]),n}(a.Component));i.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(N,{})}),document.getElementById("root"))},7:function(t,e,n){t.exports={contact_list:"ContactList_contact_list__24Agy",contact__container:"ContactList_contact__container__1h9nm"}},9:function(t,e,n){t.exports={input:"Filter_input__3qZOo"}}},[[21,1,2]]]);
//# sourceMappingURL=main.bcb5d318.chunk.js.map