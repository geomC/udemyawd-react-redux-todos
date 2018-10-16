import { ADD_TODO, REMOVE_TODO } from './actionCreators';

const intialState = {
    todos: [],
    id: 0
};

export default function rootReducer(state = intialState, action) {
    switch (action.type) {
        case ADD_TODO:
            const newState = {...state};
            newState.id++;
            return {
                ...newState,
                todos: [...newState.todos, {task: action.task, id: newState.id}]
            }
            break;
        case REMOVE_TODO:
            const todos = state.todos.filter(val => val.id !== action.id)
            return {...state, todos};
            break;
        default:
            return state;
    }
}