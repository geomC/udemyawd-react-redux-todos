import React, {Component} from 'react';

export default class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.defaultState ={
            formVal: ''
        };
        this.state = this.defaultState;

        this.updateFormVal = this.updateFormVal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.handleSubmit(this.state.formVal);
        e.target.reset();
        this.props.history.push("/todos");
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
}


