(this["webpackJsonptodo-redux"]=this["webpackJsonptodo-redux"]||[]).push([[0],{20:function(t,e,o){},21:function(t,e,o){},28:function(t,e,o){"use strict";o.r(e);var n=o(1),c=o(0),d=o.n(c),i=o(5),r=o.n(i),a=(o(20),o(21),o(14)),l=o(2),s=Object(l.b)(null,(function(t){return{addToDo:function(e,o){t({type:"ADD_TODO",payload:{todo:{id:o,text:e}}})}}}))((function(t){var e=t.addToDo,o=Object(c.useState)(""),d=Object(a.a)(o,2),i=d[0],r=d[1],l=function(t){if(t.preventDefault(),i.length>0){console.log(i);var o=Math.floor(1e4*Math.random()+1);e(i,o),r("")}};return Object(n.jsx)("div",{children:Object(n.jsxs)("form",{action:"",onSubmit:l,children:[Object(n.jsx)("input",{type:"text",value:i,onChange:function(t){return r(t.target.value)}}),Object(n.jsx)("button",{type:"submit",onClick:l,children:"Add To Do"})]})})})),u=Object(l.b)(null,(function(t,e){return{deleteToDo:function(){t({type:"DELETE_TODO",payload:{id:e.id}})}}}))((function(t){var e=t.text,o=t.deleteToDo;return Object(n.jsxs)("div",{className:"card d-flex flex-row justify-content-between",children:[Object(n.jsx)("p",{style:{display:"inline"},children:e}),Object(n.jsx)("button",{onClick:o,children:"Delete"})]})})),j=Object(l.b)((function(t){return{todos:t.todos}}))((function(t){var e=t.todos;return Object(n.jsx)("div",{className:"w-75 p-3",children:e.map((function(t){return Object(n.jsx)(u,{id:t.id,text:t.text},t.id)}))})}));var b=function(){return Object(n.jsxs)("div",{className:"App d-flex flex-column align-items-center",children:[Object(n.jsx)("h1",{children:"To do App w/Redux"}),Object(n.jsx)(s,{}),Object(n.jsx)(j,{})]})},O=o(13),x=o(4),f={todos:[{id:205,text:"Get a Job"},{id:6453,text:"Get a place!"}]},p=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_TODO":return console.log("Adding todo",e.payload.todo),Object(x.a)(Object(x.a)({},t),{},{todos:[].concat(Object(O.a)(t.todos),[e.payload.todo])});case"DELETE_TODO":return console.log("Deleting todo ",e.payload.id),Object(x.a)(Object(x.a)({},t),{},{todos:t.todos.filter((function(t){return t.id!==e.payload.id}))});default:return t}},h=o(7),D=Object(h.b)(p);r.a.render(Object(n.jsx)(d.a.StrictMode,{children:Object(n.jsx)(l.a,{store:D,children:Object(n.jsx)(b,{})})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.67e0d9b9.chunk.js.map