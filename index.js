const addTask = document.getElementById("add-task");
const inputTask = document.getElementById("input-task");
const taskContainer = document.getElementById("task-container");

inputTask.focus();

addTask.addEventListener("click",function(){
    let task = document.createElement("div");
    task.classList.add("task");

    let li = document.createElement("li");
    li.innerText = `${inputTask.value}`;
    task.append(li);

    let checkButton = document.createElement("button");
    checkButton.classList.add("checkTask");
    checkButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    task.appendChild(checkButton);

    let deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteTask");
    deleteButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    task.appendChild(deleteButton);
    if(inputTask.value === ""){
        alert("Enter a task !");
    }else{
         taskContainer.appendChild(task);
         inputTask.value = "";
         inputTask.focus();
    }

    checkButton.addEventListener("click",function(){
        let itemToCheck = this.parentElement.firstElementChild  ;
        console.log(itemToCheck);
        itemToCheck.style.textDecoration = "line-through";
    })
    deleteButton.addEventListener("click",function(){
        let itemToDelete = this.parentElement;
        itemToDelete.remove();
    })

   
})


