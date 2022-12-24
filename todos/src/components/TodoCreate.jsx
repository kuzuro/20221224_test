import { useRef, useState } from "react";
import styled, { css } from "styled-components";
import { useTodoDispatch } from "../contexts/todo";

function TodoCreate() {

    const dispatch = useTodoDispatch();


    // 넘버링
    const nextId = useRef(3);

    // 포커스 요소
    const inputRef = useRef();



    // 에디터 활성 여부
    const [edit, setEdit] = useState(false);


    console.log(edit)
    // 등록
    const createHandler = (e) => {

        dispatch({
                type : "CREATE", 
                todo : {
                    id : nextId.current,
                    text : inputRef.current.value,
                    done : false
                }
        });

        nextId.current += 1;

        inputRef.current.value = "";
        inputRef.current.focus()
    }

    return (
        <CreateBlock edit={edit}>
            <input type="text" ref={inputRef}/>
            <button type="button" onClick={createHandler}>추가</button>
        </CreateBlock>
    );

}

const CreateBlock = styled.div`

    display: flex;
    flex-direction: column;
    padding:10px;
    
    input {
        border:1px solid #d1d1d1;
        outline: none;
        font-size:14px;
        padding:5px;
        border-radius: 5px 5px 0 0;
        border-bottom:0;
    }

    button { 
        border:1px solid #d1d1d1;
        outline: none;
        font-size:14px;
        padding:5px;
        border-radius: 0 0 5px 5px;
        cursor: pointer;

        background:#05f;
        opacity: 0.8;
        color:#fff;

        :hover {
            opacity: 0.9;
        }

        :active {
            opacity: 1;
        }
    }

    
        


`;

export default TodoCreate;