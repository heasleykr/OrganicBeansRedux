import React, { Component } from 'react';
import { connect } from "react-redux";
import "./todo.css";

//Imprt your Redux Actions
import { addTodo } from '../../store/actions/actions';


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
                <div>
                    <input type="text" 
                    value={this.state.todoText}
                    onChange={this.handleTextChange} 
                    placeholder="Todo Task"/>
                    <button onClick={this.addOnClick}>Add</button>
                </div>

                <div id="todoSec">
                    <ul>
                        {this.props.todo.map((d) => <li key={d.id}>{d.task}</li>)}
                    </ul>
                </div>
            </div>
         );
    }

    handleTextChange = (event) => {
        this.setState({todoText: event.target.value});
    }

    // Add Todo to state on click
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
    
    // TODO: Write function to delete. Add button to display
    // Delete Todo frome store on click
    deleteOnClick = () => {

        // Create task obj literal
        // const todoObj = {
        //     task: this.state.todoText,
        //     id: this.state.id + 1,
        // };

        // Push todo task to Store
        // this.props.addTodo(todoObj);

        //Set text back to blank
        //Increment id
        // var counter = this.state.id + 1;

        // this.setState({ todoText: ""}); 
        // this.setState({ id: counter});
        
    }
}

// Grab state properties to use with our Component
const mapStateToProps = (state) => {
    return {
        todo: state.todo //todo is an array in props
    }
};
 
export default connect(mapStateToProps, { addTodo, removeTodo })(Todo);


