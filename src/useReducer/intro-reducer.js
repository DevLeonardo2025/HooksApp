/** reducer necesitamos 3 cosas 
 * crear el reducer (darle la condición para agregar al nuevo estado ) 🟢
 * crear el estado inicial 🟢 
 * Crear los todos del estado inicial 🟢 
 * crear la instacion de la nueva tarea  🟢
 * crear  para agregar la action de la nueva tarea 🟢 
 * enviar los parámetros al reducer de state, action
 * 
 *  **/


const initialState = [{
    id: new Date().getTime(),
    todo: 'Javascript',
    done: false
}];

const todoReducer = (state = initialState, action = {}) => {

    switch (action.type) {
        case '[TODO] add todo':
            return [...initialState, action.payload]
        default:
            break;
    }
    return state;
}

let todos = todoReducer();

const newTodo = {	 
    id: new Date().getTime(), 
    Todo: 'TypeScript', 
    done: true
}

const addTodoAction = {	 
    type: '[TODO] add todo', 
    payload: newTodo
}


todos = todoReducer(todos, addTodoAction);

console.log(todos);


