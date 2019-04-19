import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';

class App extends Component {
  state = {
    todos:[
      {
        id:uuid.v4(),
        title : "Do coding",
        completed : false
      },
      {
        id:uuid.v4(),
        title: "Make website",
        completed : false
      },
      {
        id:uuid.v4(),
        title : "study microprocessors",
        completed : false
      }
    ]
  }

  //toggle complete
  markComplete = (id) => {
      this.setState({todos : this.state.todos.map((todo) => {
        if(todo.id === id){
          todo.completed = !todo.completed;
        }
        return todo;
      })
    })
  }

  delTodo = (id) => {
    console.log(id);
    this.setState({ todos : [...this.state.todos.filter(todo => todo.id !== id)]})
  }

  addTodo = (title) => {
    const newTodo = {
      id:uuid.v4(),
      title,
      completed:false
    }
    this.setState({ todos:[...this.state.todos, newTodo]})
  }


  render() {
    console.log(this.state.todos);
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>

        </div>
      </div>
    );
  }
}

export default App;
