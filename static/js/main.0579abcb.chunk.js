(this["webpackJsonpredux-workout"]=this["webpackJsonpredux-workout"]||[]).push([[0],{34:function(e,t,n){},35:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(15),c=n.n(o),s=(n(34),n(17)),a=n(18),l=n(20),u=n(19),i=(n(35),n(11)),d=n(1),b=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h3",{className:"text-black font-semibold",children:this.props.message}),Object(d.jsx)("button",{className:"bg-green-500 mt-10 shadow-xl px-6 md:px-14 py-2 md:py-4 rounded-lg font-bold focus:outline-none text-white tracking-wide",onClick:this.props.buttonClick,children:"Change"})]})})}}]),n}(r.Component),p=Object(i.b)((function(e){return{message:e.message}}),(function(e){return{buttonClick:function(){return e({type:"Message_change",payLoad:"Welcome to the redux world!"})}}}))(b),f=n(26),j=n(5),x=n.n(j),m=n(10),h=n(13),g=localStorage.getItem("todo")?JSON.parse(localStorage.getItem("todo")):[],O=Object(h.b)({name:"todo",initialState:{todos:g},reducers:{getTodos:function(e,t){e.todos=t.payload},updateTodos:function(e,t){var n=t.payload,r=n.index,o=n.value;e.todos[r]=o,localStorage.setItem("todo",JSON.stringify(e.todos))},deleteTodos:function(e,t){var n=e.todos.filter((function(e,n){return n!==t.payload}));e.todos=n,localStorage.setItem("todo",JSON.stringify(e.todos))},addTodos:function(e,t){e.todos.push(t.payload),localStorage.setItem("todo",JSON.stringify(e.todos))}}}),v=O.actions,y=(v.getTodos,v.updateTodos),w=v.deleteTodos,k=v.addTodos,N=O.reducer;var S=function(){var e=Object(r.useState)(""),t=Object(f.a)(e,2),n=t[0],o=t[1],c=Object(r.useState)(null),s=Object(f.a)(c,2),a=s[0],l=s[1],u=Object(i.c)(),b=Object(i.d)((function(e){return e.todo})).todos;return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"font-medium text-black mb-6 text-3xl",children:"Todo's using Toolkit!"}),Object(d.jsxs)("div",{className:"flex mt-20 flex-row",children:[Object(d.jsx)("input",{type:"text",value:n,onChange:function(e){o(e.target.value)},className:"w-60 md:w-100 border rounded-md text-black text-xl px-2 mr-1"}),Object(d.jsxs)("div",{className:"flex items-center",children:[Object(d.jsx)("button",{className:null!==a&&a>=0?"w-20 self-center text-black rounded-lg bg-yellow-200 text-lg py-1 focus:outline-none":"w-20 md:w-28 self-center rounded-lg bg-blue-800 text-lg py-1 focus:outline-none",onClick:function(e){var t;e.preventDefault(),""!==n&&u(null!==a&&a>=0?function(e,t){return function(){var n=Object(m.a)(x.a.mark((function n(r){return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.abrupt("return",r(y({value:e,index:t})));case 4:return n.prev=4,n.t0=n.catch(0),n.abrupt("return",console.error(n.t0.message));case 7:case"end":return n.stop()}}),n,null,[[0,4]])})));return function(e){return n.apply(this,arguments)}}()}(n,a):(t=n,function(){var e=Object(m.a)(x.a.mark((function e(n){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,n(k(t)),e.next=7;break;case 4:return e.prev=4,e.t0=e.catch(0),e.abrupt("return",console.error(e.t0.message));case 7:case"end":return e.stop()}}),e,null,[[0,4]])})));return function(t){return e.apply(this,arguments)}}())),o(""),l(null)},children:null!==a&&a>=0?"Update":"Add"}),null!==a&&a>=0&&Object(d.jsx)("button",{onClick:function(){l(null),o("")},className:"focus:outline-none border-2 ml-1 border-black rounded-full w-7 flex items-center justify-center h-7 bg-red-500 text-white font-semibold text-base",children:"\u2715"})]})]}),Object(d.jsx)("div",{className:"w-full px-4 md:px-0 mt-10",children:(null===b||void 0===b?void 0:b.length)?Object(d.jsx)("ul",{children:b.map((function(e,t){return Object(d.jsxs)("li",{className:"flex justify-between py-2 border-b-2 border-black items-center",children:[Object(d.jsx)("div",{className:"py-1 text-black text-xl cursor-pointer items-center",onClick:function(e){e.preventDefault(),o(b[t]),l(t)},children:e}),Object(d.jsx)("button",{className:"w-20 md:w-28 self-center rounded-lg bg-red-800 text-lg py-1 focus:outline-none",onClick:function(e){e.preventDefault(),u(function(e){return function(){var t=Object(m.a)(x.a.mark((function t(n){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.abrupt("return",n(w(e)));case 4:return t.prev=4,t.t0=t.catch(0),t.abrupt("return",console.error(t.t0.message));case 7:case"end":return t.stop()}}),t,null,[[0,4]])})));return function(e){return t.apply(this,arguments)}}()}(t)),l(null),o(null)},children:"Delete"})]},t)}))}):null})]})},C=n(29),T=n(3),I=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"render",value:function(){return Object(d.jsx)(C.a,{children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("div",{className:"flex h-14 items-center justify-center fixed top-0 w-full cursor-pointer bg-black",children:Object(d.jsx)("div",{className:"w-96 py-1 h-full items-center flex justify-center font-semibold text-white",children:Object(d.jsx)("div",{className:"flex px-4 rounded-lg h-full items-center",children:"Redux toolkit"})})}),Object(d.jsx)("header",{className:"App-header",children:Object(d.jsxs)(T.c,{children:[Object(d.jsx)(T.a,{path:"/",exact:!0,component:S}),Object(d.jsx)(T.a,{path:"/redux-workout",component:S}),Object(d.jsx)(T.a,{path:"/react-redux",component:p}),Object(d.jsx)(T.a,{path:"/redux-toolkit",component:S})]})})]})})}}]),n}(r.Component),J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,r=t.getFID,o=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),o(e),c(e),s(e)}))},D=n(6),A=localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):null,F=Object(h.b)({name:"user",initialState:{user:A},reducers:{loginSuccess:function(e,t){e.user=t.payload,localStorage.setItem("user",JSON.stringify(t.payload))},logoutSuccess:function(e,t){e.user=null,localStorage.removeItem("user")}}}),L=F.reducer,B=F.actions,P=(B.loginSuccess,B.logoutSuccess,Object(D.c)({user:L,todo:N})),E=Object(h.a)({reducer:P});c.a.render(Object(d.jsx)(i.a,{store:E,children:Object(d.jsx)(I,{})}),document.getElementById("root")),J()}},[[43,1,2]]]);
//# sourceMappingURL=main.0579abcb.chunk.js.map