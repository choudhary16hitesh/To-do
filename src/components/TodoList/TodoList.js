import React, {Component} from 'react';
import Todo from "../Todo/Todo";


class TodoList extends Component {

    render() {
        return (
            <React.Fragment>
                {this.props.todos.length > 0 && <div className="add-todo">
                    {
                        this.props.todos.map((t, i) => <Todo key={i} todo={t}
                                                             onComplete={() => this.props.onComplete(i)}
                                                             onDelete={() => this.props.onDelete(i)}/>)
                    }
                </div>}
            </React.Fragment>
        )
    };
}

export default TodoList;