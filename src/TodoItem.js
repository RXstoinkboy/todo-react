import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    border-radius: 10px;
    padding: 10px;
    margin: 2px 0;
    width: 200px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background: lightblue;
`

const Text = styled.p`
    margin-left: 20px;
    font-family: 'tahoma';
`

// END OF STYLES

const TodoItem =(props)=> {

    const newStyle = {
        color: 'red',
        textDecoration: 'line-through',
        color: 'grey',
        fontStyle: 'italic',
    }

    return(
        <Container>
            <input type='checkbox' checked={props.item.completed} onChange={()=>{props.handleChange(props.item.id)}} />
            <Text style={props.item.completed ? newStyle : null}>{props.item.text}</Text>
        </Container>
    )
}

export default TodoItem;