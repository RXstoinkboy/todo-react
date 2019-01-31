import React, { Component } from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import todosData from './todosData';

const Div = styled.div`
    display: flex;
    align-items: center;
    flex-flow: column;
`

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      todos: todosData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id){
    this.setState(prevState => {
      const newTodos = prevState.todos.map(todo => {
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo
      })
      return {
        todos: newTodos
      }
    })
  }

  render(){
    return(
      <Div>
        {this.state.todos.map(item => {
          return <TodoItem item={item} key={item.id} handleChange={this.handleChange} />
        })}
      </Div>
    )
  }
}

export default App;
