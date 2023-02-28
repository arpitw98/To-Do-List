const taskList = document.querySelector('#task-list ul');
const listItem = document.querySelectorAll('.task-name');
const numberOfTask = document.querySelector('#numberOfTask');
let count = 4;

const addTaskButton = document.querySelector('#add-task-button');
addTaskButton.style.display='none';

// functionality to remove an item

taskList.addEventListener('click', function(e){

    if(e.target.className=='delete-btn'){

        const li = e.target.parentElement;
        taskList.removeChild(li);
        count--;
        numberOfTask.textContent = count;
    }
})

// accessing the form with id add task

const addTask = document.forms['add-task'];

// make add task button display or not display

addTask.addEventListener('mouseover', function(){

    addTaskButton.style.display='initial';
})

addTask.addEventListener('mouseout', function(){

    addTaskButton.style.display='none';
})

// functionality to add a task to the to do list

addTask.addEventListener('submit', function(e){

    e.preventDefault();
    const value = addTask.querySelector('input[type="text"]').value;

    // CREATING ELEMENTS

    const li = document.createElement('li');
    const taskNameHolder = document.createElement('div');
    const checkBoxTaskHolder = document.createElement('span');
    const checkBox = document.createElement('input');
    checkBox.type = "checkbox";
    console.log(checkBox);
    const taskName = document.createElement('p');
    const deleteBtn = document.createElement('span');
    
    taskName.classList.add('task-name');
    deleteBtn.classList.add('delete-btn');
   
    li.appendChild(taskNameHolder);
    taskNameHolder.appendChild(checkBoxTaskHolder);
    checkBoxTaskHolder.appendChild(checkBox);
    checkBoxTaskHolder.appendChild(taskName);
    li.appendChild(deleteBtn);
    
    taskList.appendChild(li);

    checkBox.innerHTML = '<input type="checkbox" class="task-list-check">'

    deleteBtn.textContent = "Delete"; 
    taskName.textContent = value;
    count++;
    // console.log(count);
    numberOfTask.textContent = count;

    checkBox.addEventListener('change', function(){

        if(checkBox.checked){
            taskName.classList.add('modify-text');
        }

        else{
            taskName.classList.remove('modify-text');
        }
    })
})





