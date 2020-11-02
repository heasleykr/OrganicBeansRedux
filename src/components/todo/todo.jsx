import React, { Component } from 'react';
import "./todo.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {fasCarrot} from '@font-awesome/free-solid-svg-icons';
// const carrot = <FontAwesomeIcon icon={fasCarrot} />

class Todo extends Component {
    state = { 
        todoText: "",
        todos: []
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
                    <button onClick={this.handleOnClick}>Add</button>
                </div>

                <div id="todoSec">
                    <ul>
                        {this.state.todos.map((d) => <li key={d}>{d}</li>)}
                    </ul>
                </div>
            </div>
         );
    }

    handleTextChange = (event) => {
        this.setState({todoText: event.target.value});
    }

    handleOnClick = (e) => {

        // Okay, but DONT modify the state directly 
        console.log(this.state.todoText);
        // this.state.todos.push(this.state.todoText);
        // this.setState({todoText:  ""});

        var list = [...this.state.todos]; // CLONE the list
        list.push(this.state.todoText); 
        this.setState({ todos: list, todoText: ""}); //Now update with new list and text
        
    } 
}
 
export default Todo;


