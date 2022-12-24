import styled, { css } from "styled-components";

import {AiOutlineCheck, AiFillDelete} from "react-icons/ai";
import { useState } from "react";
import { useTodoDispatch } from "../contexts/todo";

function TodoListItem({todo}) {


    const dispatch = useTodoDispatch();

    // TodoList에서 받은 todo 처리

    const {id, text, done} = todo;

    return (
        <>
            <ItemBlock>
                <IconBlock done={done} onClick={() => {dispatch({type : "TOGGLE", id : id})}}>
                   <AiOutlineCheck size={15} color="#cccccc"/>
                </IconBlock>

                <span>{text}</span>

                <DeleteBlock  onClick={() => {dispatch({type : "DELETE", id : id})}}>
                    <AiFillDelete />
                </DeleteBlock>

            </ItemBlock>
        </>
    );

}


const ItemBlock = styled.li`
    font-size:16px;
    padding:5px;
    border-bottom:1px solid #f0f0f0;
    display: flex;
    justify-content: left;
    align-items: center;

    span {
        margin-left:5px;
        flex:1;
    }

    &:hover { 
        background:#fafafa;
    }
`;

const IconBlock = styled.div`
    width:20px;
    height:20px;
    border-radius: 50%;
    cursor: pointer;       
    border:1px solid #cccccc;
    display: flex;
    justify-content: center;
    align-items: center;

    svg { 
        opacity: 0;
    }

    ${({done}) => done && css`
        border-color:#05f;
        
        span {
            color:#ddd;
        }

        svg {
            opacity: 1;
            fill:#05f;
        }
    `}



`;

const DeleteBlock = styled.div`

    svg {
        fill:#cccccc;
    }

    svg:hover {
        fill:#ff1100;
        cursor: pointer;
    }
`;

export default TodoListItem;