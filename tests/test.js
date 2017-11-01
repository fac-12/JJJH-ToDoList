var test = require('tape');
var logic = require('../logic');



test('Testing DeleteTodo function', function(t) {
    t.equal(typeof logic.deleteTodo(toDoExample, 1), "object", "Should return an array");
    t.notEquals(logic.deleteTodo(toDoExample, 1), logic.deleteTodo(toDoExample, 1), "Check that function does not return same array as input");
    t.deepEquals(logic.deleteTodo(toDoExample, 1), toDoExampleDeleted, "Output array should not contain todo with an id of idToDelete");
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

var toDoExampleDeleted = [{
    id: 0,
    description: 'smash avocados',
    done: true,
}];