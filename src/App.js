import React, {Component} from 'react';
import './styles/app.css';
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";

class App extends Component {
    state = {
        todos: []
    }

    constructor(props) {
        super(props);
    }

    addHandler = (name) => {
        const todo = {
            name,
            complete: false
        }
        this.setState(s => ({todos: [todo, ...s.todos]}))
    }
    completeHandler = (index) => {
        const todo = this.state.todos[index];
        todo.complete = true;
        const todos = [...this.state.todos.slice(0, index),
            todo,
            ...this.state.todos.slice(index + 1, this.state.todos.length)];
        this.setState({todos});
    }

    deleteHandler = (index) => {
        this.setState(s => ({todos: s.todos.filter((p, i) => index !== i)}));
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">To-do</h1>
                    <h6>{this.state.todos.length} tasks left.</h6>
                </header>
                <AddTodo onAdd={this.addHandler}/>
                <TodoList
                    todos={this.state.todos}
                    onComplete={this.completeHandler}
                    onDelete={this.deleteHandler}/>
            </div>
        );
    }
}

export default App;
