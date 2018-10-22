import React, { Component } from 'react';
import TodoList from './TodoList';
import './App.css';
import { Link, Route, Redirect } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>
            <Link to="/todos">See my todos!</Link>
        </p>
          <p>
              <Link to="/todos/new">Add a todo!</Link>
          </p>
          {/* "Outlet" for todolist with forwarding, when index route is called */}
          <Route path="/todos" component={TodoList}></Route>
          <Route exact path="/" render={() => <Redirect to="/todos"/>}/>
      </div>
    );
  }
}

export default App;
