//Retrieving HTML elements for logic
const form = document.getElementById('todo-list'),
  input = document.getElementById('input'),
  todosUL = document.getElementById('todos');

  // Converts the JSON to get todo items  
const todos = JSON.parse(localStorage.getItem('todos')); 

// If there are todos, for each todo, call the addTodo function
if (todos) {
  todos.forEach((todo) => addTodo(todo));
}

// When form is submitted, call the addTodo function
form.addEventListener('submit', (e) => {
  e.preventDefault();

  addTodo();
}); 


// The addTodo function creates a new todo item element in the HTML
function addTodo(todo) { 
  let todoText = input.value;// Retrieves the text from the input field

  // If there is a todo being passed in as a parameter, set todoText to be the text of that todo
  if (todo) {
    todoText = todo.text;
  }

   // If there is text in todoText, create a new todo item element
  if (todoText) {
    const todoEl = document.createElement('li');
    // If the todo being passed in as a parameter is completed, add the "completed" class to the element
    if (todo && todo.completed) {
      todoEl.classList.add('completed');
    }

    // Set the inner text of the todo item element to be the todo text
    todoEl.innerText = todoText;

    // When the todo item is clicked, toggle the "completed" class and update the local storage
    todoEl.addEventListener('click', () => { 
      todoEl.classList.toggle('completed');
      updateLS();
    });
    
    // When the todo item is clicked, prevent the default action and remove the element from the HTML, updating the local storage
    todoEl.addEventListener('click', (e) => {
      e.preventDefault();
      
      todoEl.remove();
      updateLS();
    });
    
    // Add the todo item element to the todos unordered list in the HTML
    todosUL.appendChild(todoEl);
    
    // Clear the input field
    input.value = '';
    
    // Update the local storage
    updateLS();
  }
}


// The updateLS function updates the local storage with the current state of the todo items
function updateLS() {
  // Get all todo item elements in the HTML
  todosEl = document.querySelectorAll('li');

    // Initialize an array to hold the todo objects
  const todos = [];
  // For each todo item element, push a new todo object to the todos array, with the text and completion status
  todosEl.forEach((todoEl) => {
    todos.push({
      text: todoEl.innerText,
      completed: todoEl.classList.contains('completed'),
    });
  });

  localStorage.setItem('todos', JSON.stringify(todos));
}