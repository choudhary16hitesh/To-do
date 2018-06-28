import React, {Component} from 'react';


class Todo extends Component {
    state = {
        showRemove: false
    }
    mouseOverHandler = () => {
        this.setState({showRemove: true})
    }

    mouseLeaveHandler = () => {
        this.setState({showRemove: false})
    }


    render() {
        return (
            <div onMouseEnter={this.mouseOverHandler} onMouseLeave={this.mouseLeaveHandler}
                 className={`todo${this.props.todo.complete ? " completed" : ""}`}>
                <input disabled={this.props.todo.complete} type="checkbox" onClick={this.props.onComplete}/>
                <div className="todo-card">
                    <span>{this.props.todo.name}</span>
                    {this.state.showRemove &&
                    <a className="btn-close" onClick={this.props.onDelete}><i className="fa fa-close"/></a>}

                </div>
            </div>
        )
    };
}

export default Todo;