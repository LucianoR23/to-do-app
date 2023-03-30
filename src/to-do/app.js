import html from "./app.html?raw";
import toDoStore from "../store/to-do.store";
import { renderTodo } from "./use-cases";

const ElementIDs = {
    TodoList: '.todo-list',
    NewTodoInput: '#new-todo-input',
    ClearCompleted: '.clear-completed'
}


/**
 * 
 * @param {String} elementId 
 */

export const App = (elementId) => {

    const displayToDo = () => {
        const toDos = toDoStore.getToDo(toDoStore.getCurrentFilter());
        renderTodo(ElementIDs.TodoList, toDos)
    }


    // Cuando la funcion App() se llama
    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
        displayToDo();
    })();

    //Referencias HTML
    const newDescriptionInput = document.querySelector(ElementIDs.NewTodoInput);
    const todoListUL = document.querySelector(ElementIDs.TodoList);
    const clearCompletedButton = document.querySelector(ElementIDs.ClearCompleted);

    //Listeners
    newDescriptionInput.addEventListener('keyup', (event) => {
        if( event.keyCode !== 13 ) return;
        if( event.target.value.trim().length === 0 ) return;

        toDoStore.addToDo(event.target.value);
        displayToDo();
        event.target.value = '';

    });

    todoListUL.addEventListener('click', (event) => {
        const element = event.target.closest('[data-id]');
        toDoStore.toggleToDo(element.getAttribute('data-id'));
        displayToDo();
    })

    todoListUL.addEventListener('click', (event) => {
        const isDestroyElement = event.target.className === 'destroy';
        const element = event.target.closest('[data-id]');
        
        if(!element || !isDestroyElement ) return;
        
        toDoStore.deleteToDo(element.getAttribute('data-id'));

        displayToDo();
    })

    clearCompletedButton.addEventListener('click', () => {
        toDoStore.deleteCompleted();

        displayToDo();
    })

}