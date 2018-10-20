import React, {Component} from 'react';
import Todo from './Todo';
import {connect} from 'react-redux'
import {removeTodo} from './actionCreators'

class TodoList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let todos = this.props.todos.map((todo, index) => <Todo removeTodo={this.props.removeTodo.bind(this, todo.id)}
                                                                task={todo.task}
                                                                key={index}/>);
        return (
            <ul>
                {todos}
            </ul>
        )
    }

    removeTodo(id) {
        this.props.dispatch(removeTodo(id))
    }
}

const mapStateToProps = reduxState => (
    {
        todos: reduxState.todos
    });

const mapDispatchToProps = (dispatch) => ({
   removeTodo: id => {
       dispatch(removeTodo(id))
   }
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)