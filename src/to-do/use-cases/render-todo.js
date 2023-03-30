import { ToDo } from "../models/to-do.models";
import { createTodoHTML } from "./";

let element;

/**
 * 
 * @param {String} elementId 
 * @param {ToDo} todo 
 */


export const renderTodo = (elementId, todo = []) => {

    if(!element)
        element = document.querySelector(elementId);

    if(!element) throw new Error(`Element ${elementId} not found`);

    element.innerHTML = '';

    todo.forEach(todo => {
        element.append(createTodoHTML(todo))
    });
}