# Four Digital To Do List

View our To Do List app [here](https://fac-12.github.io/JJJH-ToDoList/).

## Why?

We were given the challenge of creating a To Do List. We wanted to build on last week's work by making it accessible  and responsive, as well as following this week's task to build it using TDD.

## What?
We wanted our To Do List to have the following functionality:
* the user is able to add items to the To Do List
* the user is able to mark an item as complete
* the user is able to edit the description text
* the user is able to sort items by whether the item is marked as complete
* the user is able to sort items by date entered
* the user is able delete items

We wanted it to have a simple, intuitive design.

## How?

### Planning our work

This week's project was fairly structured and already split into parts, so we only spent a small amount of time in planning.

On Wednesday we started with the pure Javascript functions, splitting the work between the two pairs. We followed TDD, writing failing tests first and then writing code to make them pass. Each pair took one **add** and **delete** function. After lunch, one pair moved onto `DOM.js` to implement these functions from `logic.js`.  Another pair carried on with the functions, looking at **done** and the **sort** stretch goal.

Thursday was spent with one team working on CSS and the other adding the sorting functionality and the second stretch goal of making the description on each to do item editable.  We wrote and tested a new **edit** function and created an edit button in the DOM. The CSS was based on an initial design drawn in Sketch, where we focused on simplicity.  The teams swapped on Thursday so that everyone worked on CSS.  One pair also additionally looked at accessibility and code coverage.

### How we approached the sort and edit functions

* Sorting todos
We wanted to include two sorting functions, one which sorts by whether the items were marked as done, and one which sorts by the date (for which we used ID as a proxy as the items were always input in order).  The two sorting options were presented as a select element with dropdown menu for the two options.

* Editing todos
In order to make the descriptions editable, we needed to create a new function similar to the mark done function, where a todo could be marked as editable.  We used [contenteditable](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Editable_content) to implement this function in `DOM.js`.  We then made sure that it was obvious to a user that the description could be edited, through CSS styling and which button to press when done.

### Useful lessons

1. You can't really style Checkboxes, use a div instead!
2. Don't forget, render() removes all list elements and replaces them!
3. Using css background to put images inside an `<input>`
4. What `deepEquals()` actually means!
5. Can't set focus on a span
6. You can't style the dropdown menu from a select, if we had known that at the beginning we would probably have built it from scratch
7. When you're checking the final site, make sure you're not accidentally zoomed in on Chrome!!

### Stretch Goals
- Starring important ones to go to the top
- Storing the todos locally so they are still there when you refresh
