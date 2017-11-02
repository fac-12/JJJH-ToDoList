// Part 1. Fill in any missing parts of the todoFunction object!
// you can access these on todo.todoFunctions
// For part one we expect you to use tdd

var todoFunctions = {
    // todoFunctions.generateId() will give you a unique id
    // You do not need to understand the implementation of this function.
    generateId: (function() {
        var idCounter = 0;

        function incrementCounter() {
            return (idCounter += 1);
        }

        return incrementCounter;
    })(),

    //cloneArrayOfObjects will create a copy of the todos array
    //changes to the new array don't affect the original
    cloneArrayOfObjects: function(todos) {
        return todos.map(function(todo) {
            return JSON.parse(JSON.stringify(todo));
        });
    },
    addTodo: function(todos, newTodo) {
        var newArr = todoFunctions.cloneArrayOfObjects(todos);
        newTodo.id = todoFunctions.generateId();
        newTodo.done = false;
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
// See this article for more details:
// http://www.matteoagosti.com/blog/2013/02/24/writing-javascript-modules-for-both-browser-and-node/
if (typeof module !== 'undefined') {
    module.exports = todoFunctions;
}