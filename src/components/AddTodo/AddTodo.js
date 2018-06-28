import React, {Component} from 'react';
import {ENTER_KEY} from "../../utils/constants";

class AddTodo extends Component {
    state = {
        name: ''
    }

    keyPressHandler = (e) => {
        if (e.keyCode === ENTER_KEY) {
            this.onAdd();
        }
    }

    inputChangeHandler = (e) => {
        this.setState({name: e.target.value});
    }

    onAdd = () => {
        if (this.state.name.trim() !== '') {
            this.props.onAdd(this.state.name.trim());
            this.setState(({name: ''}))
        }
    }

    render() {
        return (
            <div className="add-todo">
                <div className="todo">
                    <input type="text" name="todo" className="todo-input"
                           value={this.state.name}
                           autoFocus
                           onKeyDown={this.keyPressHandler}
                           onChange={this.inputChangeHandler}/>
                    <a className="btn-add" onClick={this.onAdd}><i className="fa fa-plus"/></a>
                </div>
            </div>
        );
    }
}

export default AddTodo;
