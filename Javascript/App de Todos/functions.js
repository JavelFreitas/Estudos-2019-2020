var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input#Input");
var buttonElement = document.querySelector("div#app form#form1 button#form1Button");

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
        var todoText = document.createTextNode(todo);

        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);
    }
}

renderTodos();


function addTodo(){
    
    var todoText = inputElement.value;
    todos.push(todoText);
    inputElement.value = "";
    console.log(todos);
    
    renderTodos();
};

buttonElement.onclick = alert("chegou aq");