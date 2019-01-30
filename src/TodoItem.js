import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
        background: white;
        border-radius: 5px;
        padding: 10px 20px;
        margin: 5px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        max-width: 300px;
    `

    const Paragraph = styled.p`
        margin-left: 20px;
        font-family: tahoma;
    `

const TodoItem =(props)=>{
    return(
        <Container>
            <input type="checkbox" checked={props.item.completed} />
            <Paragraph>{props.item.text}</Paragraph>
        </Container>
    )
}

export default TodoItem;