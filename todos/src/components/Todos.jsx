import styled from "styled-components";
import { TodoProvider } from "../contexts/todo";
import TodoCreate from "./TodoCreate";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

function Todos() {

    return (
        <>
            <TodoProvider>
                <TodoBlock>

                    <TodoHeader />

                    <TodoList />

                    <TodoCreate />
                    
                </TodoBlock>
            </TodoProvider>
        </>
    );

}

const TodoBlock = styled.div`
    width:300px;
    height:600px;
    margin:0 auto;
    background:#ffffff;
    display: flex;
    flex-direction: column;
    border:1px solid #d1d1d1;
    border-radius: 5px;
`;

export default Todos;