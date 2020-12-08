loadEvents();

function loadEvents(){
  document.querySelector('form').addEventListener('submit',submit);
  document.querySelector('ul').addEventListener('click',removeOrDone);
}

function submit(event){
  event.preventDefault();
  let taskList;
  let input = document.querySelector('input');
  if(input.value != '')
    addTask(input.value);
  input.value = '';
}

function addTask(task){
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  li.innerHTML = `<span class="delete">×</span><input type="checkbox"><label>${task}</label>`;
  ul.appendChild(li);
}

function removeOrDone(event){
  if(event.target.className == 'delete')
    removeTodo(event);
  else {
    doneTask(event);
  }
}

function removeTodo(event){
  let remove = event.target.parentNode;
  let parentNode = remove.parentNode;
  parentNode.removeChild(remove);
}

function doneTask(event){
  const task = event.target.nextSibling;
  if(event.target.checked){
    task.style.textDecoration = "line-through";
    task.style.color = "#dd19e6";
  }else {
    task.style.textDecoration = "none";
    task.style.color = "#19e1e6";
  }
}
