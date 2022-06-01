(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var r,c=n(10),s=n.n(c),o=n(3),a=n(15),u=n(16),i=n(4),l=n(14);!function(e){e.AddTodos="AddTodos",e.SelectUserId="SelectUserId",e.CurrentUser="CurrentUser",e.DeleteTodos="DeleteTodos"}(r||(r={}));var d=function(e){return{type:r.CurrentUser,currentUser:e}},j=function(e){return e.todos},b=function(e){return e.selectedUserId},p=function(e){return e.currentUser},f={todos:[],selectedUserId:0,currentUser:null},O=Object(l.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.AddTodos:return Object(i.a)(Object(i.a)({},e),{},{todos:Object(u.a)(t.todos)});case r.SelectUserId:return Object(i.a)(Object(i.a)({},e),{},{selectedUserId:t.selectedUserId});case r.CurrentUser:return Object(i.a)(Object(i.a)({},e),{},{currentUser:t.currentUser});case r.DeleteTodos:return Object(i.a)(Object(i.a)({},e),{},{todos:e.todos.filter((function(e){return e.id!==t.id}))});default:return e}})),h=O,x=n(7),m=n(5),v=n.n(m),_=n(0),U=(n(25),n(26),n(6)),C=(n(27),n(1)),N=function(){var e=Object(_.useState)(""),t=Object(U.a)(e,2),n=t[0],c=t[1],s=Object(_.useState)(""),a=Object(U.a)(s,2),u=a[0],i=a[1],l=Object(o.c)(j),d=Object(o.b)(),b=function(e){return d((t=e,{type:r.SelectUserId,selectedUserId:t}));var t},p=function(e){return d(function(e){return{type:r.DeleteTodos,id:e}}(e))},f=function(){switch(u){case"Active":return l.filter((function(e){return!e.completed}));case"Completed":return l.filter((function(e){return e.completed}));default:return l}}().filter((function(e){return e.title.toLowerCase().includes(n.toLowerCase())}));return Object(C.jsxs)("div",{className:"TodoList",children:[Object(C.jsx)("h2",{children:"Todos:"}),Object(C.jsxs)("div",{className:"TodoList__controlPanel controlPanel",children:[Object(C.jsx)("label",{children:Object(C.jsx)("input",{className:"controlPanel__field",type:"text",placeholder:"Enter filter text",value:n,onChange:function(e){c(e.target.value)}})}),Object(C.jsxs)("select",{className:"controlPanel__field",value:u,onChange:function(e){return i(e.target.value)},children:[Object(C.jsx)("option",{value:"All",children:"All"}),Object(C.jsx)("option",{value:"Active",children:"Active"}),Object(C.jsx)("option",{value:"Completed",children:"Completed"})]})]}),Object(C.jsx)("div",{className:"TodoList__list-container",children:Object(C.jsx)("ul",{className:"TodoList__list",children:f.map((function(e){return Object(C.jsxs)("li",{className:"TodoList__item\n                ".concat(e.completed?"TodoList__item--checked":"TodoList__item--unchecked"),children:[Object(C.jsxs)("label",{children:[Object(C.jsx)("input",{type:"checkbox",readOnly:!0}),Object(C.jsx)("p",{children:e.title})]}),Object(C.jsxs)("div",{className:"TodoList__buttons",children:[e.userId&&Object(C.jsxs)("button",{className:"TodoList__user-button button\n                      ".concat(e.completed&&"TodoList__user-button--selected","\n                    "),type:"button",onClick:function(){return b(e.userId)},children:["User\xa0#",e.userId]}),Object(C.jsx)("button",{type:"button",className:"TodoList__delete-button button",onClick:function(){return p(e.id)},children:"Delete"})]})]},e.id)}))})})]})},y="https://mate.academy/students-api";function T(){return I.apply(this,arguments)}function I(){return(I=Object(x.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(y,"/todos"));case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e){return A.apply(this,arguments)}function A(){return(A=Object(x.a)(v.a.mark((function e(t){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(y,"/users/").concat(t));case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n(29);var L=function(){var e=Object(o.c)(p),t=Object(o.c)(b),n=Object(o.b)(),c=function(){var e=Object(x.a)(v.a.mark((function e(t){var r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(t);case 2:r=e.sent,n(d(r));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(_.useEffect)((function(){c(t)}),[t]);return Object(C.jsxs)("div",{children:[e&&Object(C.jsxs)("div",{className:"CurrentUser",children:[Object(C.jsx)("h2",{className:"CurrentUser__title",children:Object(C.jsx)("span",{children:"Selected user: ".concat(e.id)})}),Object(C.jsx)("h3",{className:"CurrentUser__name",children:e.name}),Object(C.jsx)("p",{className:"CurrentUser__email",children:e.email}),Object(C.jsx)("p",{className:"CurrentUser__phone",children:e.phone})]}),Object(C.jsx)("button",{type:"button",className:"CurrentUser__button button",onClick:function(){return e=0,void n({type:r.SelectUserId,selectedUserId:e});var e},children:"Clear"})]})},k=function(){var e=Object(o.c)(b),t=Object(o.b)(),n=function(){var e=Object(x.a)(v.a.mark((function e(){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T();case 2:n=e.sent,t({type:r.AddTodos,todos:n});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(_.useEffect)((function(){n()}),[]),Object(C.jsxs)("div",{className:"App",children:[Object(C.jsx)("div",{className:"App__sidebar",children:Object(C.jsx)(N,{})}),Object(C.jsx)("div",{className:"App__content",children:Object(C.jsx)("div",{className:"App__content-container",children:e?Object(C.jsx)(L,{}):"No user selected"})})]})},S=function(){return Object(C.jsx)(o.a,{store:h,children:Object(C.jsx)(a.a,{children:Object(C.jsx)(k,{})})})};s.a.render(Object(C.jsx)(S,{}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.2c6b67f6.chunk.js.map