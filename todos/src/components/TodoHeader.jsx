import styled, { css } from "styled-components";
import {BsCardChecklist} from "react-icons/bs";
import { useTodoState } from "../contexts/todo";

function TodoHeader() {

    // 금일 날짜
    const today = (new Date()).toLocaleDateString("ko-KR", {dateStyle: "full"});

    // 카운트를 위해
    const todos = useTodoState();
    const doneCnt = todos.filter(todo => todo.done).length;
    const totalCnt = todos.length;

    const per = doneCnt && totalCnt ? (doneCnt / totalCnt) * 100 : 0;

    return (
        <HeaderBlock>

                <TitleBlock>                    
                    <BsCardChecklist size={20}/> 
                    <p>{today}</p>
                </TitleBlock>

                <TodoCount>
                    진행도 : {doneCnt}/{totalCnt}
                </TodoCount>

                <TodoProgress per={per}>
                    
                </TodoProgress>
        </HeaderBlock>
    );

}

const HeaderBlock = styled.div`
    padding:10px;
    border-bottom:1px solid #d1d1d1;    

    h1 {
        font-size:24px;
        display: flex;
    }

`;

const TitleBlock = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    font-size:20px;
    font-weight: bold;

    p {
        margin-left:10px;
    } 
`;

const TodoCount = styled.div`
    font-size:12px;
    margin-top:5px;
    color:#999999;
`;


const TodoProgress = styled.div`
    width:100%;
    height:5px;
    margin-top:5px;
    background: #eeeeee;
    border-radius: 5px;

    &::after { 
        content: "";
        display: block;    
        width:${({per}) => per}%;
        height:5px;
        background:#05f;
        border-radius: 5px;
        transition: 500ms;
    }
`;

export default TodoHeader;