var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input#form1Input");
var buttonElement = document.querySelector("div#app button#form1Button");

var todos = [
    'Fazer café',
    'Estudar Javascript',
    'Acessar comunidade da Rocketseat',
    'Testar Novas Funcionalidades'
];

function renderTodos() {
    listElement.innerHTML = "";

    for (todo of todos) {

        var todoElement = document.createElement('li');
        todoElement.setAttribute("onclick", "removeTodo(this)");
        todoElement.setAttribute("onmouseover", "confirmRemove(this)");
        todoElement.setAttribute("onmouseout", "unconfirmRemove(this)");

        var todoText = document.createTextNode(todo);
        todoElement.setAttribute("value", todo);

        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);
    }
}

renderTodos();

function confirmRemove(liConfirm){
    var tracado = '';
    var textTodo = liConfirm.innerHTML;
    while(tracado.length != textTodo.length){
        tracado += "-";
    }
    liConfirm.innerHTML = tracado;
}

function unconfirmRemove(liConfirm){
    
    liConfirm.innerHTML = liConfirm.getAttribute("value");
}

function removeTodo(liRemove){
    var textoTodo = liRemove.getAttribute("value");
    var pos = todos.indexOf(textoTodo);
    todos.splice(pos, 1);
    renderTodos();
}

function addTodo(){
    if(!inputElement.value) return;
    var todoText = inputElement.value;
    todos.push(todoText);
    inputElement.value = "";
    
    renderTodos();
};

buttonElement.onclick = addTodo;