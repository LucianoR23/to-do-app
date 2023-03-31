import { ToDo } from "../to-do/models/to-do.models";


export const Filters = {
    All: 'all',
    Completed: 'Completed',
    Pending: 'Pending'
}

export const state = {
    toDo: [],
    filter: Filters.All,
}

// const checkCompleted = () => {
//     const checkComplete = document.querySelector('.clear-completed')
//     const doneOrNot = state.toDo.find(todo => todo.done === true);
//     console.log(!!doneOrNot, checkComplete);
//     // if(!!doneOrNot){
//     //     checkComplete[0 = button.clear-completed]
//     // }
        
// }


const initStore = () => {
    loadStore();
    console.log('Se inicio store 🍺');
}
const saveStateToLocalStorage = () => {
    localStorage.setItem('state', JSON.stringify(state))
}

const loadStore = () => {
    if(!localStorage.getItem('state')) return;

    const {toDo = [], filter = Filters.All} = JSON.parse(localStorage.getItem('state'))
    state.toDo = toDo;
    state.filter = filter;

    // checkCompleted();
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

    saveStateToLocalStorage();
}

const toggleToDo = (toDoId) => {
    state.toDo = state.toDo.map(todo => {
        if(todo.id === toDoId) {
            todo.done = !todo.done
        }
        return todo;
    })

    saveStateToLocalStorage();
}

const deleteToDo = (toDoId) => {
    state.toDo = state.toDo.filter(todo => todo.id !== toDoId);

    saveStateToLocalStorage();
}

const deleteCompleted = () => {
    state.toDo = state.toDo.filter(todo => !todo.done);

    saveStateToLocalStorage();
}

const setFilter = (newFilter = Filters.All) => {
    state.filter = newFilter;

    saveStateToLocalStorage();
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
    deleteCompleted,
    setFilter,
    getCurrentFilter,
    getToDo,
}