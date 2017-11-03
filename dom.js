(function() {

  var container = document.getElementById('todo-container');
  var addTodoForm = document.getElementById('add-todo');
  var sortTodos = document.getElementById('sort-todo')

  var state = [];

  var createTodoNode = function(todo) {
    var todoNode = document.createElement('li');

    var checkboxContainer = document.createElement('div');
    checkboxContainer.className = "todo-listitem-checkboxContainer";
    checkboxContainer.setAttribute('tabindex',0);
    checkboxContainer.setAttribute('aria-label','box to mark whether a to do has been completed');
    var tick = document.createTextNode('✓');
    checkboxContainer.appendChild(tick);

    checkboxContainer.addEventListener('click', function(event) {
      todo.description = descriptionInput.value;
      var newState = todoFunctions.markTodo(state, todo.id);
      update(newState);
    })

    if(todo.done) {
      checkboxContainer.classList.add('checked');
    }
    else checkboxContainer.className = 'todo-listitem-checkboxContainer';

    todoNode.appendChild(checkboxContainer);

    var descriptionInput = document.createElement('input');
    descriptionInput.value = todo.description;
    descriptionInput.className = "todo-listitem-text";

    if (todo.editable) {
        descriptionInput.className = "todo-listitem-text edit";
        descriptionInput.removeAttribute('disabled');
    }
    else descriptionInput.setAttribute('disabled','')

    todoNode.appendChild(descriptionInput);

    var editButtonNode = document.createElement('button');
    var editButtonImage = document.createElement('img');
    editButtonImage.src = "images/pencil.svg";
    editButtonImage.alt = "";
    editButtonImage.setAttribute('role','presentation');
    editButtonImage.className = "todo-listitem-editIcon";

    editButtonNode.setAttribute('aria-label','edit your to do')
    editButtonNode.appendChild(editButtonImage);
    editButtonNode.className = "todo-listitem-editButton";

    editButtonNode.addEventListener('click', function(event) {
        todo.description = descriptionInput.value;
        var newState = todoFunctions.makeEditableTodo(state, todo.id);
        update(newState);

        var input = document.getElementsByClassName('todo-listitem-text')[todo.id-1];
        // Weird hack because 'todo' here is the old todo so editable state updates one step behind
        if(!todo.editable) input.focus();
    });

    if(todo.editable) editButtonNode.innerText = "Done";

    todoNode.appendChild(editButtonNode);

    if (todo.done) descriptionInput.classList.add('strike');

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

    todoNode.className = "todo-listitem";

    return todoNode;
  };

  if (addTodoForm) {
      addTodoForm.addEventListener('submit', function(event) {
          event.preventDefault()
          var textinput = event.target[0].value;
          var newObj = {
                description: textinput
          }
          event.target[0].value = "";
          var newState = todoFunctions.addTodo(state, newObj);
          update(newState);
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

  var update = function(newState) {
      state = newState;
      renderState(state);
  };

  var renderState = function(state) {
      var todoListNode = document.createElement('ul');

      state.forEach(function(todo) {
          todoListNode.appendChild(createTodoNode(todo));
      });

      container.replaceChild(todoListNode, container.firstChild);
      console.log('State re-rendered');
  };

  if (container) renderState(state);
})();
