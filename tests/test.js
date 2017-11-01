var test = require('tape');
var logic = require('../logic');

test('Addtodo function', function(t) {
  t.equals(typeof logic.addTodo(toDoExample, newDo), "object", "Addtodo returns an object");
  t.equals(logic.addTodo(toDoExample, newDo).length, toDoExample.length + 1, "Addtodo adds Todo to newArr");
  t.notDeepEqual(logic.addTodo(toDoExample, newDo), toDoExample, "newArr should not equal todos")
  t.equals(logic.addTodo(toDoExample, newDo).pop().hasOwnProperty('id'), true, "id has been generated" )

  t.end();
});

var toDoExample = [{
    id: 0,
    description: 'smash avocados',
    done: true
  },
  {
    id: 1,
    description: 'make coffee',
    done: false
  }
];

var newDo = {
  description: 'go shopping'
};
