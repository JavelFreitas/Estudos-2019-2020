var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input#Input");
var buttonElement = document.querySelector("#app button#form1Button");

var todos = [
    'Fazer café',
    'Estudar Javascript',
    'Acessar comunidade da Rocketseat',
    'Testar Novas Funcionalidades'
];

function renderTodos() {

    for (todo of todos) {
        console.log(todo);

        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);
    }
}
renderTodos();