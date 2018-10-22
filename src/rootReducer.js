import {ADD_TODO, GET_TODOS, REMOVE_TODO} from './actionCreators';

const intialState = {
    todos: []
};

export default function rootReducer(state = intialState, action) {
    switch (action.type) {
        case GET_TODOS:
            return {...state, todos: action.data};
        case ADD_TODO:
            return {...state, todos: [...state.todos, action.todo]};
        case REMOVE_TODO:
            const todos = state.todos.filter(val => val._id !== action.id);
            return {...state, todos};
        default:
            return state;
    }
}