import toDoStore, { Filters } from "../../store/to-do.store";

let element;

/**
 * 
 * @param {String} elementId 
 */
export const renderPending = (elementId) => {

    if(!element)
        element = document.querySelector(elementId);

    if(!element)
        throw new Error(`Element ${elementId} not found`);

    element.innerHTML = toDoStore.getToDo(Filters.Pending).length;
}