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
        console.log(todo);

        var todoElement = document.createElement('li');
        todoElement.setAttribute("onclick", "confirmRemove(this)");
        var todoText = document.createTextNode(todo);

        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);
    }
}

renderTodos();

function confirmRemove(liConfirm){
    
}

function removeTodo(liRemove){
    listElement.removeChild(liRemove);
}

function addTodo(){
    if(!inputElement.value) return;
    var todoText = inputElement.value;
    todos.push(todoText);
    inputElement.value = "";
    console.log(todos);
    
    renderTodos();
};

buttonElement.onclick = addTodo;