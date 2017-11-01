var test = require('tape');
var logic = require('../logic');

test('Addtodo function', function(t) {
    t.equals(typeof logic.addTodo(toDoExample, newDo), "object", "Addtodo returns an object");
    t.equals(logic.addTodo(toDoExample, newDo).length, toDoExample.length + 1, "Addtodo adds Todo to newArr");
    t.notDeepEqual(logic.addTodo(toDoExample, newDo), toDoExample, "newArr should not equal todos")
    t.equals(logic.addTodo(toDoExample, newDo).pop().hasOwnProperty('id'), true, "id has been generated")
    t.equals(logic.addTodo(toDoExample, newDo).pop().hasOwnProperty('done'), true, "done has been generated")
    t.end();
});

test('Testing DeleteTodo function', function(t) {
    t.equal(typeof logic.deleteTodo(toDoExample, 1), "object", "Should return an array");
    t.notEquals(logic.deleteTodo(toDoExample, 1), logic.deleteTodo(toDoExample, 1), "Check that function does not return same array as input");
    t.deepEquals(logic.deleteTodo(toDoExample, 1), toDoExampleDeleted, "Output array should not contain todo with an id of idToDelete");
    t.end();
});

test('Testing markTodo function', function(t) {
    t.equal(typeof logic.markTodo(toDoExample, 0), "object", "Should return an object");
    t.equal(findTodo(logic.markTodo(toDoExample, 0), 0)[0].done, false, "Should toggle the done value of idToMark");
    t.end();
});


var toDoExample = [{
        id: 0,
        description: 'smash avocados',
        done: true,
    },
    {
        id: 1,
        description: 'make coffee',
        done: false,
    },
];

var newDo = {
    description: 'go shopping'
};

var toDoExampleDeleted = [{
    id: 0,
    description: 'smash avocados',
    done: true,
}];

function findTodo(todos, id) {
  return todos.filter(function(todo){
    return todo.id === id;
  })
}
