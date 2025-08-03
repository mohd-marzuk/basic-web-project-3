const todoList = [{
  name : 'Wash',
  dueDate : '2022-12-29'},
{
  name :  'Study',
  dueDate : '2022-02-12',
}];

renderTodoList();

function renderTodoList(){

let todoListHTML='';

for (let i=0;i< todoList.length;i++ ){
  const todoObject =  todoList[i];
  const name = todoObject.name;
  const dueDate =  todoObject.dueDate;
  const html = `
  <div>${name}</div>
  <div>${dueDate}</div>
  <button onclick = "
    todoList.splice(${i}, 1);
    renderTodoList();
  "class = deleteButton>Delete</button>`;
  todoListHTML += html;
}


document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo(){
  const inputElement = document.querySelector('.js-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({
    /*name : name ,
    dueDate : dueDate,*/
    name,
    dueDate
  });

  inputElement.value = '';

  renderTodoList();
}