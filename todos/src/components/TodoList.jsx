
import styled from "styled-components";
import { useTodoState } from "../contexts/todo";
import TodoListItem from "./TodoListItem";

function TodoList() {

    // 컨텍스트에서 상태 가져오기
    const todos = useTodoState();

    return (
        <ListBlock>
            {todos.map(todo => 
                <TodoListItem key={todo.id} todo={todo} />
            )}
        </ListBlock>
    );

}


const ListBlock = styled.div`
    flex:1;
    border-bottom:1px solid #d1d1d1;
`;

export default TodoList;