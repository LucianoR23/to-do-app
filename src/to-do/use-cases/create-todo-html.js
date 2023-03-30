import { ToDo } from "../models/to-do.models";



/**
 * 
 * @param {ToDo} todo 
 */


export const createTodoHTML = (todo) => {
    if (!todo) throw new Error('toDo object is required')

    const {id, done, description} = todo;

    const html = `
    <div class="view">
        <input class="toggle" type="checkbox" ${done ? 'checked' : ''}>
        <label> ${description} </label>
        <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">`

    const liElement = document.createElement('li');
    liElement.innerHTML = html;
    liElement.setAttribute('data-id', id);
    if(done)
        liElement.classList.add('completed')

    return liElement;
}