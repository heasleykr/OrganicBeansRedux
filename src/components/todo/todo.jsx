import React, { Component } from 'react';
import { connect } from "react-redux";
import "./todo.css";

//Imprt your Redux Actions
import { addTodo } from '../../store/actions/actions';
import { removeTodo } from '../../store/actions/actions';


class Todo extends Component {
    state = { 
        todoText: "",
        id: 0,
    }

    render() { 
        return ( 
            <div id="todoHead">
                <h5 id="todoTitle">Green Reminders Here.</h5>
                <h5 id="todoMessage">What's on your mind?</h5>
                <div className="inputField">
                    <input type="text" 
                    value={this.state.todoText}
                    onChange={this.handleTextChange} 
                    placeholder="Todo Task"/>
                    <button onClick={this.addOnClick}>Add</button>
                </div>

                <div id="todoSec">
                        {/* Display Task from Store */}
                        {this.props.todo.map((d) => <div className="todoItem" key={d.id}>
                            <h5 className="taskName">{d.task}</h5>
                            <button onClick={() => this.deleteOnClick(d)} className="btn btn-warning">Delete Task</button>
                        </div>
                        )}
                </div>
            </div>
         );
    }

    handleTextChange = (event) => {
        this.setState({todoText: event.target.value});
    }

    // Add Todo to store on click
    addOnClick = () => {

        // Create task obj literal
        const todoObj = {
            task: this.state.todoText,
            id: this.state.id + 1,
        };

        // Push todo task to Store
        this.props.addTodo(todoObj);

        //Set text back to blank
        //Increment id
        var counter = this.state.id + 1;

        this.setState({ todoText: ""}); 
        this.setState({ id: counter});
        
    }
    
    // Function to delete Todo from store on click
    deleteOnClick = (todo) => {

        // Call action function and dispatch request
        this.props.removeTodo(todo);
    }
}

// Grab state properties to use with our Component
const mapStateToProps = (state) => {
    return {
        todo: state.todo //todo is an array in props
    }
};
 
export default connect(mapStateToProps, { addTodo, removeTodo })(Todo);


