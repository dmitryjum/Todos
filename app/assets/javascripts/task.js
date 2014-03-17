var task;
var checked;
var allTasks;

function addTask(task){
  checked = false;
 $.post("/tasks?task=" + task + "&checked=" + checked);
 showTask();
 // $("ul").append("<li>" + task + "</li>");
};

function showTask(){
  $.getJSON("/tasklist", function(tasksObject){
    allTasks = tasksObject;
    console.log(tasksObject);
    $("ul").empty();
    for(i = 0; i < allTasks.length; i++) {
      var checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = allTasks[i].checked;
      var liCheckBox = $("<li>");
      liCheckBox.text(allTasks[i].task);
      liCheckBox.append(checkbox);
      $("ul").append(liCheckBox);
      // $("ul").append("<li>" + allTasks[i].task + checkbox.checked + "</li>");
     }
  })
}

$("button").on("click", function(e) {
    e.preventDefault();
    task = $("input").val();
    addTask(task)
    $("input").val("");
  });
showTask();
// var checkbox = $('<input>', {
//     type:"checkbox",
//     "checked":"checked"
// });

// read and use document.ready and document.exists$.post( "/tasks", { tasks: task, checked: checked } );