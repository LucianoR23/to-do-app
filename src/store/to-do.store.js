import { ToDo } from "../to-do/models/to-do.models";


const Filters = {
    All: 'all',
    Completed: 'Completed',
    Pending: 'Pending'
}

const state = {
    toDo: [
        new ToDo('Gema del alma'),
        new ToDo('Gema del tiempo'),
        new ToDo('Gema del poder'),
        new ToDo('Gema del realidad'),
    ],
    filter: Filters.All,
}


const initStore = () => {
    console.log(state);
    console.log('Se inicio store 🍺');
}

const loadStore = () => {
    throw new Error('No implementado');
}

const getToDo = (filter = Filters.All) => {
    switch (filter) {
        case Filters.All:
            return [...state.toDo];
        
        case Filters.Completed:
            return state.toDo.filter(toDo => toDo.done);
        
        case Filters.Pending:
            return state.toDo.filter(toDo => !toDo.done);

        default:
            throw new Error(`Opcion ${filter} no es valido`);
    }
}

const addToDo = (description) => {
    if(!description) throw new Error('Descripcion es requerido');
    state.toDo.push(new ToDo(description));
}

const toggleToDo = (toDoId) => {
    state.toDo = state.toDo.map(todo => {
        if(todo.id === toDoId) {
            todo.done = !todo.done
        }
        return todo;
    })
}

const deleteToDo = (toDoId) => {
    state.toDo = state.toDo.filter(todo => todo.id !== toDoId);
}

const deleteCompeted = () => {
    state.toDo = state.toDo.filter(todo => todo.done);
}

const setFilter = (newFilter = Filters.All) => {
    state.filter = newFilter;
}

const getCurrentFilter = () => {
    return state.filter;
}

export default {
    initStore,
    loadStore,
    addToDo,
    toggleToDo,
    deleteToDo,
    deleteCompeted,
    setFilter,
    getCurrentFilter,
    getToDo,
}