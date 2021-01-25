(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{26:function(e,t,n){},31:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n(0),i=n.n(o),a=n(7),c=n.n(a),s=(n(26),n(4)),d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=i.a.useState(e),n=Object(s.a)(t,2),r=n[0],o=n[1],a=function(e){return o(e.target.value)},c=function(){return o("")};return[r,a,c]},l=n(13),u=n(18),b=n(46);var j,h,m,f,g=function(e,t){switch(t.type){case"delete":return e.filter((function(e){return t.id!==e.id}));case"add":return[].concat(Object(u.a)(e),[{task:t.task,id:Object(b.a)(),isComplete:!1}]);case"done":return e.map((function(e){return t.id===e.id?Object(l.a)(Object(l.a)({},e),{},{isComplete:!e.isComplete}):e}));case"edit":return e.map((function(e){return t.id===e.id?Object(l.a)(Object(l.a)({},e),{},{task:t.task}):e}))}},p=function(e,t,n){var r=i.a.useReducer(n,t,(function(){return JSON.parse(localStorage.getItem(e))||t})),o=Object(s.a)(r,2),a=o[0],c=o[1];return i.a.useEffect((function(){localStorage.setItem(e,JSON.stringify(a))}),[a]),[a,c]},x=[{task:"Do Laundry",id:1,isComplete:!1},{task:"Meditate",id:2,isComplete:!1}],O=i.a.createContext(),C=function(e){var t=e.children,n=p("todos",x,g),o=Object(s.a)(n,2),i=o[0],a=o[1];return Object(r.jsx)(O.Provider,{value:{todos:i,dispatch:a},children:t})},v=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=i.a.useState(e),n=Object(s.a)(t,2),r=n[0],o=n[1],a=function(){return o(!r)};return[r,a]},y=i.a.createContext(),k=function(e){var t=e.children,n=v(!1),o=Object(s.a)(n,2),i=o[0],a=o[1];return Object(r.jsx)(y.Provider,{value:{isAlert:i,toggleAlert:a},children:t})},w=n(44),S={EditTodo:{display:"flex",justifyContent:"space-between",alignItems:"center",height:"3rem",backgroundColor:"rgb(245,245,255)","& input":{fontSize:"1.2rem",height:"95%",border:"none",width:"85%",outline:"none",paddingLeft:"1rem",backgroundColor:"inherit"},"& div":{width:"15%",display:"flex",justifyContent:"center"},"& button":{borderRadius:"50%",backgroundColor:"rgb(250,103,104)",color:"white",border:"none",outline:"none",fontSize:"1.4rem",padding:"0.2rem 0.5rem",margin:"0 1rem",width:"2.5rem",cursor:"pointer",height:"80%","&:hover":{backgroundColor:"rgb(255,79,80)"}}}},N=Object(w.a)(S)((function(e){var t=e.toggleEdit,n=e.task,o=e.id,a=e.classes,c=e.inputRef,l=i.a.useContext(y).toggleAlert,u=i.a.useContext(O).dispatch,b=d(n),j=Object(s.a)(b,2),h=j[0],m=j[1];return i.a.useEffect((function(){return c.current&&c.current.focus()})),Object(r.jsxs)("form",{className:a.EditTodo,children:[Object(r.jsx)("input",{value:h,onChange:m,type:"text",maxLength:"35",ref:c}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{onClick:function(e){e.preventDefault(),""===h.trim()?l():(u({type:"edit",task:h,id:o}),t())},children:"\u2713"})})]})})),T=(n(31),function(e){var t=e.id,n=e.isComplete,o=i.a.useContext(O).dispatch;return Object(r.jsxs)("label",{className:"container",children:[Object(r.jsx)("input",{type:"checkbox",onChange:function(){return o({type:"done",id:t})},checked:n}),Object(r.jsx)("span",{className:"box"})]})}),A=n(3),F=function(e){return"@media (max-width: ".concat({xs:"575.98px",sm:"767.98px",md:"991.98px",lg:"1199.98px"}[e],")")},R={Todo:{fontSize:"1.2rem",display:"flex",justifyContent:"space-between",alignItems:"center",minHeight:"3rem"},TodoTask:(j={width:"85%",marginLeft:"1rem",display:"flex",alignItems:"center"},Object(A.a)(j,F("sm"),{width:"75%"}),Object(A.a)(j,"& p",Object(A.a)({marginLeft:"1.5rem",color:"rgba(0,0,0,0.7)",fontFamily:"Rubik, sans-serif"},F("sm"),{marginLeft:"1rem",fontSize:"1rem"})),Object(A.a)(j,"& input",{"&:checked":{color:"red"}}),j),TodoBtns:(h={width:"15%",display:"flex",justifyContent:"space-around"},Object(A.a)(h,F("sm"),{width:"25%"}),Object(A.a)(h,"& i",{cursor:"pointer","&.fa-trash":{"&:hover":{color:"red"}},"&.fa-edit":{color:"rgb(98,104,216)","&:hover":{color:"rgb(49,58,214)"}}}),h),task:{textDecoration:function(e){return e.isComplete?"line-through":"none"}}},I=Object(w.a)(R)((function(e){var t=e.task,n=e.classes,o=e.id,a=e.isComplete,c=i.a.useContext(O).dispatch,d=v(!1),l=Object(s.a)(d,2),u=l[0],b=l[1],j=i.a.useRef();return u?Object(r.jsx)(N,{toggleEdit:b,task:t,id:o,inputRef:j}):Object(r.jsxs)("div",{className:n.Todo,children:[Object(r.jsxs)("div",{className:n.TodoTask,children:[Object(r.jsx)(T,{id:o,isComplete:a}),Object(r.jsx)("p",{className:n.task,children:t})]}),Object(r.jsxs)("div",{className:n.TodoBtns,children:[Object(r.jsx)("span",{onClick:b,children:Object(r.jsx)("i",{className:"far fa-edit"})}),Object(r.jsx)("span",{onClick:function(){c({type:"delete",id:o})},children:Object(r.jsx)("i",{className:"fas fa-trash"})})]})]})})),L=function(){return Object(r.jsx)("hr",{style:{borderTop:"1px solid #bbb",margin:"0"}})},z=n(45),D=n(47),E={"@global":{".todo-enter":{opacity:0},".todo-enter-active":{opacity:1,transition:"opacity 300ms ease-in"},".todo-exit":{opacity:1},".todo-exit-active":{opacity:0,transition:"opacity 300ms ease-in"}}},B=Object(w.a)(E)((function(){var e=i.a.useContext(O).todos,t=i.a.useMemo((function(){return e.map((function(t,n){return Object(r.jsx)(z.a,{timeout:300,classNames:"todo",children:Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(I,{task:t.task,id:t.id,isComplete:t.isComplete},t.id),n<e.length-1&&Object(r.jsx)(L,{})]})},t.id)}))}),[e]);return Object(r.jsx)("div",{children:Object(r.jsx)(D.a,{children:t})})})),J={Form:{height:"3rem",width:"100%",display:"flex",alignItems:"center","& div":{display:"flex",justifyContent:"center"}},FormInput:{height:"95%",border:"none",outline:"none",fontSize:"1.2rem",width:"90%",paddingLeft:"1rem",borderBottomLeftRadius:"7px"},FormAddBtn:(m={width:"10%",borderRadius:"50%",backgroundColor:"rgb(250,103,104)",color:"white",border:"none",outline:"none",fontSize:"1.6rem",margin:"0 1rem"},Object(A.a)(m,"width","2.5rem"),Object(A.a)(m,"cursor","pointer"),Object(A.a)(m,"height","80%"),Object(A.a)(m,"&:hover",{backgroundColor:"rgb(255,79,80)"}),m)},M=Object(w.a)(J)((function(e){var t=e.classes,n=i.a.useContext(O).dispatch,o=i.a.useContext(y).toggleAlert,a=d(""),c=Object(s.a)(a,3),l=c[0],u=c[1],b=c[2];return Object(r.jsx)("div",{children:Object(r.jsxs)("form",{className:t.Form,children:[Object(r.jsx)("input",{type:"text",onChange:u,value:l,className:t.FormInput,placeholder:"Insert Todo",maxLength:"35"}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{onClick:function(e){e.preventDefault(),""===l.trim()?o():(n({type:"add",task:l}),b())},className:t.FormAddBtn,children:"+"})})]})})})),W=new Date,P=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][W.getDay()],Y="".concat(W.getDate()," ").concat(["January","February","March","April","May","June","July","August","September","October","November","Desember"][W.getMonth()]," ").concat(W.getFullYear()),H={container:(f={width:"40%",backgroundColor:"white",borderRadius:"7px",margin:"0 auto"},Object(A.a)(f,F("md"),{width:"65%"}),Object(A.a)(f,F("xs"),{width:"85%"}),f),header:Object(A.a)({backgroundColor:"rgb(245,245,255)",borderTopLeftRadius:"7px",borderTopRightRadius:"7px",fontFamily:"Work Sans, sans-serif",textAlign:"left",padding:"0.5rem 1rem ",display:"flex",justifyContent:"space-between"},F("sm"),{"& h2":{fontSize:"1.2rem"}}),rightSide:{"& h2":{fontWeight:"400",color:"rgb(98,104,216)"}}},q={Alert:{width:"100%",heigth:"100%",position:"absolute",top:"0",right:"0",left:"0",bottom:"0",backgroundColor:"rgba(0,0,0,0.7)",display:"flex",justifyContent:"center",alignItems:"center",zIndex:"4"},AlertBox:{backgroundColor:"rgb(240,240,240)",fontFamily:"Work Sans, sans-serif",color:"rgb(230,0,0)",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"30%",padding:"1rem",fontSize:"1.5rem",borderRadius:"7px","& button":{borderRadius:"7px",padding:"10px",fontSize:"1.2rem",textAlign:"center",color:"white",backgroundColor:"rgba(200,0,0,0.8)",border:"none",cursor:"pointer",outline:"none","&:hover":{backgroundColor:"rgba(220,0,0,1)"}},"& span":{borderRadius:"50%",backgroundColor:"red",color:"white",fontSize:"1.5rem",padding:"0.5rem 1.1rem"}}},G=Object(w.a)(q)((function(e){var t=e.classes,n=i.a.useContext(y).toggleAlert,o=i.a.useRef(),a=function(e){o.current.contains(e.target)||n()};return i.a.useEffect((function(){return document.addEventListener("mousedown",a),function(){document.removeEventListener("mousedown",a)}}),[]),Object(r.jsx)("div",{className:t.Alert,children:Object(r.jsxs)("div",{className:t.AlertBox,onClick:a,ref:o,children:[Object(r.jsx)("span",{children:"!"}),Object(r.jsx)("p",{children:"Task cannot be empty"}),Object(r.jsx)("button",{onClick:n,children:" Close "})]})})})),K=Object(w.a)(H)((function(e){var t=e.classes,n=i.a.useContext(O).todos,o=i.a.useContext(y).isAlert;return Object(r.jsxs)("div",{className:t.container,children:[o&&Object(r.jsx)(G,{}),Object(r.jsxs)("div",{className:t.header,children:[Object(r.jsxs)("div",{className:t.leftSide,children:[Object(r.jsx)("h2",{style:{fontWeight:400,color:"rgb(98,104,216)"},children:P}),Object(r.jsx)("h2",{style:{color:"rgba(0,0,0,0.65)"},children:Y})]}),Object(r.jsx)("div",{className:t.rightSide,children:Object(r.jsx)("h2",{children:1>n.length?"You have no task":"".concat(n.length," task left")})})]}),Object(r.jsx)(M,{}),Object(r.jsx)(B,{})]})}));n(32),n(33);var Q=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(C,{children:Object(r.jsx)(k,{children:Object(r.jsx)(K,{})})})})},U=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(t){var n=t.getCLS,r=t.getFID,o=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),r(e),o(e),i(e),a(e)}))};c.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(Q,{})}),document.getElementById("root")),U()}},[[34,1,2]]]);
//# sourceMappingURL=main.74a1258b.chunk.js.map