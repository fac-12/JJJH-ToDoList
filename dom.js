// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {

  // This is the dom node where we will keep our todo
  var container = document.getElementById('todo-container');
  var addTodoForm = document.getElementById('add-todo');
  var sortTodos = document.getElementById('sort-todo')

  var state = [
      { id: -3, description: 'Master TDD', done: false, editable: false },
      { id: -2, description: 'Buy hummus', done: false, editable: false },
      { id: -1, description: 'Fix No. 14 door', done: false, editable: false }
  ]; // this is our initial todoList

  // This function takes a todo, it returns the DOM node representing that todo
  var createTodoNode = function(todo) {
    var todoNode = document.createElement('li');

    // you will need to use addEventListener

    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todo.done;
    checkbox.className = "todo-listitem-checkbox";
    checkbox.setAttribute('aria-label','check box if to do has been completed');
    checkbox.addEventListener('click', function(event) {
      event.preventDefault();
      var newState = todoFunctions.markTodo(state, todo.id);
      update(newState);
    });

    todoNode.appendChild(checkbox);

    // add span holding description

    var span = document.createElement('span');
    var todoText = document.createTextNode(todo.description);
    span.className = "todo-listitem-text";
    span.setAttribute('tabindex',0);
    span.appendChild(todoText);
    todoNode.appendChild(span);

    // this adds the edit button
    var editButtonNode = document.createElement('button');
    var editButtonImage = document.createElement('img');
    editButtonImage.src = "images/pencil.svg";
    editButtonImage.alt = "";
    editButtonImage.setAttribute('role','presentation');
    editButtonImage.className = "todo-listitem-editIcon";

    editButtonNode.setAttribute('aria-label','edit your to do')
    editButtonNode.appendChild(editButtonImage);
    editButtonNode.className = "todo-listitem-editButton";

    span.setAttribute("contenteditable", todo.editable);
    editButtonNode.addEventListener('click', function(event) {
        todo.description = span.innerText;
        var newState = todoFunctions.makeEditableTodo(state, todo.id);
        update(newState);
    });
    if (span.contentEditable === "true") {
        editButtonNode.innerText = "Done";
        span.className = "todo-listitem-text edit";
    }
    todoNode.appendChild(editButtonNode);

    if (checkbox.checked) span.className = 'strike todo-listitem-text';

    // this adds the delete button
    var deleteButtonNode = document.createElement('button');
    var buttonImage = document.createElement('img');
    buttonImage.src = "images/garbage.svg";
    buttonImage.className = "todo-listitem-deleteIcon";
    buttonImage.alt = "";
    buttonImage.setAttribute('role','presentation');
    deleteButtonNode.className = "todo-listitem-deleteButton";
    deleteButtonNode.setAttribute('aria-label','delete to do');
    deleteButtonNode.appendChild(buttonImage);

    deleteButtonNode.addEventListener('click', function(event) {
      var newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });
    todoNode.appendChild(deleteButtonNode);

    // add markTodo button

    // add classes for css
    todoNode.className = "todo-listitem";

    // TO FINISH!!!

    return todoNode;
  };

  // bind create todo form
  if (addTodoForm) {
      addTodoForm.addEventListener('submit', function(event) {

          event.preventDefault();
          var textinput = event.target[0].value;
          if (textinput === "") {
              alert("Please add a description for your to do")
          } else {
              var newObj = {
                  description: textinput
              }
              var newState = todoFunctions.addTodo(state, newObj);
              update(newState);
          }
      });
  }




  sortTodos.onchange = function(event) {
      if (event.target.value === "date") {
          var newState = todoFunctions.sortTodosID(state);
      } else if (event.target.value === "completed") {
          var newState = todoFunctions.sortTodosBool(state);
      }
      update(newState);
  }

  // you should not need to change this function
  var update = function(newState) {
      state = newState;
      renderState(state);
  };

  // you do not need to change this function
  var renderState = function(state) {
      var todoListNode = document.createElement('ul');

      state.forEach(function(todo) {
          todoListNode.appendChild(createTodoNode(todo));
      });

      // you may want to add a class for css
      container.replaceChild(todoListNode, container.firstChild);
  };

  if (container) renderState(state);
})();
