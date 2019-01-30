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

const App =()=> {
  const todoList = todosData.map(item => <TodoItem key={item.id} item={item} />)

  return(
    <Div>
      {todoList}
    </Div>
  )
}

export default App;
