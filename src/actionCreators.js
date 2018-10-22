export const GET_TODOS = "GET_TODOS";
export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

const apiBaseUrl = 'http://localhost:3002/api/todos/';

function handleTodos(data) {
    return {
        type: GET_TODOS,
        data
    }
}

function handleAdd(todo) {
    return {
        type: ADD_TODO,
        todo
    }
}

function handleRemove(id) {
    return {
        type: REMOVE_TODO,
        id
    }
}

export function getTodos() {
    return dispatch => {
        return fetch(apiBaseUrl)
            .then(res => res.json())
            .then(todos => dispatch(handleTodos(todos)))
            .catch(err => console.error(err))
    }
}

export function addTodo(task) {
    return dispatch => {
        return fetch(apiBaseUrl, {
            method: 'POST',
            headers: new Headers({
                "Content-Type": "application/json"
            }),
            body: JSON.stringify({task})
        })
        .then(res => res.json())
        .then(todo => dispatch(handleAdd(todo)))
        .catch(err => console.error(err))
    }
}

export function removeTodo(id) {
    return dispatch => {
        return  fetch(apiBaseUrl + id, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(todo => dispatch(handleRemove(todo._id)))
        .catch(err => console.error(err))
    }
}