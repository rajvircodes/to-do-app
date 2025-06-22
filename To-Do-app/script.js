function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();  // FIXED

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskText;

    li.onclick = () => {
        li.classList.toggle('completed');
    }

    // add delete button 
    const deleteBtn = document.createElement('button');
     deleteBtn.textContent = '❌';
     deleteBtn.onclick = () =>{
        li.remove(); // remove the taks
        deleteBtn.style.marginRight = "10px";
     };
        li.appendChild(deleteBtn);


     // Add the list item to the list 
     document.getElementById('taskList').appendChild(li);


    document.getElementById('taskList').appendChild(li);  // FIXED
    input.value = '';
}
