import React, { Component } from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import todosData from './todosData';

const Div = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      background: lightgrey;
  `

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      list: todosData,
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id){
    this.setState(prevState=>{
      const newList = prevState.list.map(todo => {
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo
      })
      return {
        list: newList
      }
    })
  }

  render(){
  const todoList = this.state.list.map(item => 
    <TodoItem 
      key={item.id} 
      item={item}
      handleChange={this.handleChange}
    />)

  return(
    <Div>
      {todoList}
    </Div>
  )
}
}

export default App;
