import styled, { css } from "styled-components";

import {AiOutlineCheck, AiFillDelete} from "react-icons/ai";
import { useState } from "react";
import { useTodoDispatch } from "../contexts/todo";

function TodoListItem({todo}) {


    // 컨텍스트에서 호출
    const dispatch = useTodoDispatch();


    // TodoList에서 받은 todo 처리
    const {id, text, done} = todo;

    return (
        <>
            <ItemBlock>
                {/* done에 따라 제어 */}

                <CheckBlock done={done} onClick={() => {dispatch({type : "TOGGLE", id : id})}}>
                   <AiOutlineCheck size={15} color="#cccccc"/>
                </CheckBlock>

                
                <TextBlock done={done}>{text}</TextBlock>

                <DeleteBlock  onClick={() => {dispatch({type : "DELETE", id : id})}}>
                    <AiFillDelete />
                </DeleteBlock>

            </ItemBlock>
        </>
    );

}

// li 
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

// 체크 아이콘 영역
const CheckBlock = styled.div`
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

// 삭제 영역
const DeleteBlock = styled.div`

    svg {
        fill:#cccccc;
    }

    svg:hover {
        fill:#ff1100;
        cursor: pointer;
    }
`;

// 텍스트
const TextBlock = styled.span`

    ${({done}) => done && css`
        color:#ccc;
    `}
`;

export default TodoListItem;