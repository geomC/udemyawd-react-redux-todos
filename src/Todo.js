import React from 'react';

const Todo = ({task, removeTodo}) => (
    <li>{task} <span onClick={removeTodo}>X</span></li>
);

export default Todo;