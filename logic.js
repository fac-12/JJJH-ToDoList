var todoFunctions = {
    generateId: (function() {
        var idCounter = 0;

        function incrementCounter() {
            return (idCounter += 1);
        }

        return incrementCounter;
    })(),

    cloneArrayOfObjects: function(todos) {
        return todos.map(function(todo) {
            return JSON.parse(JSON.stringify(todo));
        });
    },
    addTodo: function(todos, newTodo) {
        var newArr = todoFunctions.cloneArrayOfObjects(todos);
        newTodo.id = todoFunctions.generateId();
        newTodo.done = false;
        newTodo.editable = false;
        return newArr.concat(newTodo);
    },
    deleteTodo: function(todos, idToDelete) {
        return todos.filter(function(todo) {
            return todo.id !== idToDelete
        })
    },
    markTodo: function(todos, idToMark) {
        var newArr = todoFunctions.cloneArrayOfObjects(todos);
        for (var i = 0; i < newArr.length; i++) {
            if (newArr[i].id === idToMark) {
                newArr[i].done = !newArr[i].done;
            }
        }
        return newArr;
    },
    makeEditableTodo: function(todos, idToEdit) {
        var newArr = todoFunctions.cloneArrayOfObjects(todos);
        for (var i = 0; i < newArr.length; i++) {
            if (newArr[i].id === idToEdit) {
                newArr[i].editable = !newArr[i].editable;
            }
        }
        return newArr;
    },
    sortTodosBool: function(todos) {
        var newArr = todoFunctions.cloneArrayOfObjects(todos);
        newArr.sort(function(a, b) {
            return a.done - b.done
        })
        return newArr
    },
    sortTodosID: function(todos) {
        var newArr = todoFunctions.cloneArrayOfObjects(todos);
        newArr.sort(function(a, b) {
            return a.id - b.id
        })
        return newArr
    },
};

if (typeof module !== 'undefined') {
    module.exports = todoFunctions;
}
