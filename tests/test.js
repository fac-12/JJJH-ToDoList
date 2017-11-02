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
    t.equal(typeof logic.deleteTodo(toDoExample, 1), "object", "Should return an object");
    t.notEquals(logic.deleteTodo(toDoExample, 1), logic.deleteTodo(toDoExample, 1), "Check that function does not return same array as input");
    t.deepEquals(logic.deleteTodo(toDoExample, 1), toDoExampleDeleted, "Output array should not contain todo with an id of idToDelete");
    t.end();
});

test('Testing markTodo function', function(t) {
    t.equal(typeof logic.markTodo(toDoExample, 0), "object", "Should return an object");
    t.equal(findTodo(logic.markTodo(toDoExample, 0), 0)[0].done, false, "Should toggle the done value of idToMark");
    t.end();
});

test('Testing sortTodosBool function', function(t) {
    t.equal(typeof logic.sortTodosBool(sortingExample), "object", "Should return an object");
    t.notEquals(logic.sortTodosBool(sortingExample), logic.sortTodosBool(sortingExample), "Check that function does not return same array as input");
    t.deepEquals(logic.sortTodosBool(sortingExample), sortedBoolExample, "Function should return todos sorted by .done property (false then true)");
    t.end();
});

test('Testing sortTodosID function', function(t) {
    t.equal(typeof logic.sortTodosID(sortingExample), "object", "Should return an object");
    t.notEquals(logic.sortTodosID(sortingExample), logic.sortTodosID(sortingExample), "Check that function does not return same array as input");
    t.deepEquals(logic.sortTodosID(sortedBoolExample), sortingExample, "Function should return todos sorted by .id property (lowest to highest)");
    t.end();
});

//GENERAL//
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

//FOR ADD TODO//
var newDo = {
    description: 'go shopping'
};

//FOR DELETE TODO//
var toDoExampleDeleted = [{
    id: 0,
    description: 'smash avocados',
    done: true,
}];

//FOR MARK TODO//
function findTodo(todos, id) {
    return todos.filter(function(todo) {
        return todo.id === id;
    })
}

//FOR SORTING TODOS//

var sortingExample = [{
        id: 0,
        description: 'smash avocados',
        done: true,
    },
    {
        id: 1,
        description: 'make coffee',
        done: false,
    },
    {
        id: 2,
        description: 'make tea',
        done: false,
    },
];
var sortedBoolExample = [{
        id: 1,
        description: 'make coffee',
        done: false,
    },
    {
        id: 2,
        description: 'make tea',
        done: false,
    },
    {
        id: 0,
        description: 'smash avocados',
        done: true,
    },
];