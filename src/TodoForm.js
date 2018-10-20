import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addTodo} from './actionCreators'

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.defaultState ={
            formVal: ''
        };
        this.state = this.defaultState;

        this.updateFormVal = this.updateFormVal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    id="task"
                    name="task"
                    type="text"
                    onChange={this.updateFormVal}
                    value={this.state.formVal}
                />
                <button >Submit</button>
            </form>
        )
    }

    updateFormVal(e) {
        this.setState({
            formVal: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.submitTodo(this.state.formVal);
        this.setState(this.defaultState)
    }

}



const mapDispatchToProps = (dispatch) => ({
    submitTodo: function(task) {
        dispatch(addTodo(task))
    }
});

export default connect(null, mapDispatchToProps)(TodoForm)