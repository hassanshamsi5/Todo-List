        window.onload = function () {
            var savedTasks = localStorage.getItem("tasks");
            if (savedTasks) {
                var taskList = document.getElementById("taskList");
                taskList.innerHTML = savedTasks;
            }
        }

        document.getElementById("taskList").addEventListener("click", function (event) {
            if (event.target && event.target.nodeName === "BUTTON") {
                var button = event.target;
                if (button.textContent === "Edit") {
                    editTask(button);
                } else if (button.textContent === "Delete") {
                    deleteTask(button);
                }
            }
        });

        function addTask() {
            var taskInput = document.getElementById("taskInput");
            var taskList = document.getElementById("taskList");

        
            var listItem = document.createElement("li");
            listItem.appendChild(document.createTextNode(taskInput.value));


            var editButton = document.createElement("button");
            editButton.appendChild(document.createTextNode("Edit"));
            listItem.appendChild(editButton);

       
            var deleteButton = document.createElement("button");
            deleteButton.appendChild(document.createTextNode("Delete"));
            listItem.appendChild(deleteButton);

            taskList.appendChild(listItem);

         
            taskInput.value = "";

            
            saveTasks();
        }

        function editTask(editButton) {
            var listItem = editButton.parentNode;
            var taskText = listItem.firstChild;
            var newText = prompt("Edit task:", taskText.nodeValue);

            if (newText !== null && newText.trim() !== "") {
                taskText.nodeValue = newText;

               
                saveTasks();
            }
        }

        function deleteTask(deleteButton) {
            var listItem = deleteButton.parentNode;
            var taskList = listItem.parentNode;
            taskList.removeChild(listItem);

   
            saveTasks();
        }

        function deleteAllTasks() {
            var taskList = document.getElementById("taskList");
            taskList.innerHTML = "";

          
            saveTasks();
        }

        function saveTasks() {
            var taskList = document.getElementById("taskList");
            localStorage.setItem("tasks", taskList.innerHTML);
        }
