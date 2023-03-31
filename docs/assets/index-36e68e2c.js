(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const p of n.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&c(p)}).observe(document,{childList:!0,subtree:!0});function i(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(o){if(o.ep)return;o.ep=!0;const n=i(o);fetch(o.href,n)}})();const w=`<section class="todoapp">\r
    <header class="header">\r
        <h1>Tareas</h1>\r
        <input id="new-todo-input" class="new-todo" placeholder="¿Qué necesita ser hecho?" autofocus>\r
    </header>\r
    \r
    <section class="main">\r
        <input id="toggle-all" class="toggle-all" type="checkbox">\r
        <label for="toggle-all">Mark all as complete</label>\r
        <ul class="todo-list">\r
\r
        </ul>\r
    </section>\r
\r
    <footer class="footer">\r
        <span class="todo-count"><strong id="pending-count">0</strong> pendiente(s)</span>\r
        <ul class="filters">\r
            <li>\r
                <a class="filtro" class="selected" href="#/">Todos</a>\r
            </li>\r
            <li>\r
                <a class="filtro" href="#/active">Pendientes</a>\r
            </li>\r
            <li>\r
                <a class="filtro completed" href="#/completed">Completados</a>\r
            </li>\r
        </ul>\r
        <button class="clear-completed hidden">Borrar completados</button>\r
    </footer>\r
</section>\r
\r
\r
<footer class="info">\r
    <p>Template creado por <a href="https://lucianor23.github.io/presentation/">Luciano Rodriguez</a></p>\r
</footer>`;let y;const C=new Uint8Array(16);function S(){if(!y&&(y=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!y))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return y(C)}const r=[];for(let e=0;e<256;++e)r.push((e+256).toString(16).slice(1));function b(e,t=0){return(r[e[t+0]]+r[e[t+1]]+r[e[t+2]]+r[e[t+3]]+"-"+r[e[t+4]]+r[e[t+5]]+"-"+r[e[t+6]]+r[e[t+7]]+"-"+r[e[t+8]]+r[e[t+9]]+"-"+r[e[t+10]]+r[e[t+11]]+r[e[t+12]]+r[e[t+13]]+r[e[t+14]]+r[e[t+15]]).toLowerCase()}const E=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),T={randomUUID:E};function v(e,t,i){if(T.randomUUID&&!t&&!e)return T.randomUUID();e=e||{};const c=e.random||(e.rng||S)();if(c[6]=c[6]&15|64,c[8]=c[8]&63|128,t){i=i||0;for(let o=0;o<16;++o)t[i+o]=c[o];return t}return b(c)}class P{constructor(t){this.id=v(),this.description=t,this.done=!1,this.createDate=new Date}}const a={All:"all",Completed:"Completed",Pending:"Pending"},s={toDo:[],filter:a.All},A=()=>{L(),console.log("Se inicio store 🍺")},f=()=>{localStorage.setItem("state",JSON.stringify(s))},L=()=>{if(!localStorage.getItem("state"))return;const{toDo:e=[],filter:t=a.All}=JSON.parse(localStorage.getItem("state"));s.toDo=e,s.filter=t},U=(e=a.All)=>{switch(e){case a.All:return[...s.toDo];case a.Completed:return s.toDo.filter(t=>t.done);case a.Pending:return s.toDo.filter(t=>!t.done);default:throw new Error(`Opcion ${e} no es valido`)}},q=e=>{if(!e)throw new Error("Descripcion es requerido");s.toDo.push(new P(e)),f()},I=e=>{s.toDo=s.toDo.map(t=>(t.id===e&&(t.done=!t.done),t)),f()},O=e=>{s.toDo=s.toDo.filter(t=>t.id!==e),f()},k=()=>{s.toDo=s.toDo.filter(e=>!e.done),f()},F=(e=a.All)=>{s.filter=e,f()},N=()=>s.filter,d={initStore:A,loadStore:L,addToDo:q,toggleToDo:I,deleteToDo:O,deleteCompleted:k,setFilter:F,getCurrentFilter:N,getToDo:U};let D;const x=e=>{if(D||(D=document.querySelector(e)),!D)throw new Error(`Element ${e} not found`);D.innerHTML=d.getToDo(a.Pending).length},M=e=>{if(!e)throw new Error("toDo object is required");const{id:t,done:i,description:c}=e,o=`
    <div class="view">
        <input class="toggle" type="checkbox" ${i?"checked":""}>
        <label> ${c} </label>
        <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">`,n=document.createElement("li");return n.innerHTML=o,n.setAttribute("data-id",t),i&&n.classList.add("completed"),n};let g;const H=(e,t=[])=>{if(g||(g=document.querySelector(e)),!g)throw new Error(`Element ${e} not found`);g.innerHTML="",t.forEach(i=>{g.append(M(i))})},u={TodoList:".todo-list",NewTodoInput:"#new-todo-input",ClearCompleted:".clear-completed",ToDoFilter:".filtro",PendingCount:"#pending-count"},$=()=>{const e=document.querySelector(u.ClearCompleted);s.toDo.find(i=>i.done===!0)?e.classList.remove("hidden"):e.classList.add("hidden")},R=e=>{const t=()=>{const l=d.getToDo(d.getCurrentFilter());H(u.TodoList,l),i(),$()},i=()=>{x(u.PendingCount)};(()=>{const l=document.createElement("div");l.innerHTML=w,document.querySelector(e).append(l),t()})();const c=document.querySelector(u.NewTodoInput),o=document.querySelector(u.TodoList),n=document.querySelector(u.ClearCompleted),p=document.querySelectorAll(u.ToDoFilter);c.addEventListener("keyup",l=>{l.keyCode===13&&l.target.value.trim().length!==0&&(d.addToDo(l.target.value),t(),l.target.value="")}),o.addEventListener("click",l=>{const m=l.target.closest("[data-id]");d.toggleToDo(m.getAttribute("data-id")),t()}),o.addEventListener("click",l=>{const m=l.target.className==="destroy",h=l.target.closest("[data-id]");!h||!m||(d.deleteToDo(h.getAttribute("data-id")),t())}),n.addEventListener("click",()=>{d.deleteCompleted(),t()}),p.forEach(l=>{l.addEventListener("click",m=>{switch(p.forEach(h=>h.classList.remove("selected")),m.target.classList.add("selected"),m.target.text){case"Todos":d.setFilter(a.All);break;case"Pendientes":d.setFilter(a.Pending);break;case"Completados":d.setFilter(a.Completed);break}t()})})};d.initStore();R("#app");
