import React, {Component} from 'react';
import Todo from './Todo';
import {connect} from 'react-redux'
import {addTodo, removeTodo} from './actionCreators'
import TodoForm from './TodoForm'
import { Route } from "react-router-dom";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(val) {
        this.props.addTodo(val);
    }
    removeTodo(id) {
        this.props.removeTodo(id);
    }

    render() {
        let todos = this.props.todos.map((todo, index) => <Todo removeTodo={this.props.removeTodo.bind(this, todo.id)}
                                                                task={todo.task}
                                                                key={index}/>);
        return (
            <div>
                {/*"Outlet" that shows list when in /todos route and form when in /todos/new*/}
                <Route
                    path="/todos/new"
                    component={props => (
                        <TodoForm
                            {...props} // passes down route props
                            handleSubmit={this.handleSubmit} />
                    )}
                />
                <Route exact path="/todos" component={() => <ul>{todos}</ul>} />
            </div>
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


export default connect(mapStateToProps, {addTodo, removeTodo})(TodoList)