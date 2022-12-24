import { useRef, useState } from "react";
import styled, { css } from "styled-components";
import { useTodoDispatch } from "../contexts/todo";

function TodoCreate() {

    const dispatch = useTodoDispatch();


    // 넘버링
    const nextId = useRef(3);

    // 인풋
    const inputRef = useRef();
    
    // 인풋 활성 여부
    const [flag, setFlag] = useState(false);

    // 에디터 활성 여부
    const [edit, setEdit] = useState(false);

    // 인풋 값 변경시
    const onChange = (e) => {        
        if(inputRef.current.value.length > 0) {
            setEdit(true);
        }
    }


    // 등록 및 추가
    const createHandler = (e) => {


        // 등록 버튼이 클릭시 플래스 true
        if(!flag) {
            setFlag(true);
            return;
        }

        // 인풋값이 1자 이상일때만 등록
        if(inputRef.current.value === "") { 
            setEdit(false);
            return;
        }

        // 등록
        dispatch({
                type : "CREATE", 
                todo : {
                    id : nextId.current,
                    text : inputRef.current.value,
                    done : false
                }
        });


        // 넘버링 증가
        nextId.current += 1;
 
        // 초기화
        setFlag(false);
        setEdit(false);
        inputRef.current.value = "";
        inputRef.current.focus()        
    }

    const canccelHandler = (e) => { 
        setFlag(false);
        setEdit(false);
        inputRef.current.value = "";
    }

    return (
        <CreateBlock edit={edit} flag={flag}>
            <input type="text" onChange={onChange} ref={inputRef}/>

            <div>
                <button type="button" className="save" onClick={createHandler}>
                    {!flag ? "등록" : "추가"}                
                </button>

                {flag && <button type="button" className="cancel" onClick={canccelHandler}>취소</button>}
            </div>
        </CreateBlock>
    );

}

const CreateBlock = styled.div`

    display: flex;
    flex-direction: column;
    padding:10px;
    overflow: hidden;
    
    input {
        height:0;
        padding:0;
        border:none;
        border-color:#d1d1d1;
        outline: none;
        font-size:14px;
        border-radius: 5px 5px 0 0;

        ${({flag}) => flag && css`
            height:30px;
            padding:5px;
            border:1px solid #d1d1d1;
        `}

        transition:300ms;


    }


    div {

        display:flex;
        justify-content: space-between;

        button.save { 
            width:100%;
            border:1px solid #d1d1d1;
            outline: none;
            font-size:14px;
            padding:5px;
            border-radius: 5px;
            cursor: pointer;

            background:#cccccc;
            border-top:0;
            color:#fff;

            ${({flag}) => flag && css`     
                width:calc(85% - 5px);
                border-radius: 0 0 5px 5px;
            `}

            ${({edit}) => edit && css`     
                border-color:#05f;  
                background:#05f;
            `}
        }

        button.cancel { 
            width:15%; border:1px solid #d1d1d1;
            outline: none;
            font-size:14px;
            padding:5px;
            border-radius: 0 0 5px 5px;
            cursor: pointer;

            background:#cccccc;
            border-top:0;
            color:#fff;
        }
    }

`;

const BtnBlock = styled.div`

`;

export default TodoCreate;