import React, {Component} from 'react';
import Todo from './Todo';
import {connect} from 'react-redux'

class TodoList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let todos = this.props.todos.map((todo, index) => <Todo task={todo.task} key={index}/>);
        return (
            <ul>
                {todos}
            </ul>
        )
    }
}

const mapStateToProps = reduxState => (
    {
        todos: reduxState.todos
    });
export default connect(mapStateToProps)(TodoList)