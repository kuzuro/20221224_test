import { createContext, useContext, useReducer } from "react";

// 초기값
const initialState = [
    {
        id: 1,
        text:"투두 리스트 레이아웃 만들기",
        done : true
    },    
    {
        id: 2,
        text:"투두 리스트 완성하기",
        done : false
    }
]


// 리듀서
function todoReducer(state, action) {

    switch(action.type) { 


        case "CREATE" :
            return state.concat(action.todo);

        case "TOGGLE" :
            return state.map(todo => todo.id === action.id ? {...todo, done: !todo.done} : todo);

        case "DELETE" :

            return state.filter(todo => todo.id !== action.id);
        default :
            return state;
    }
}


// 컨텍스트
const TodoStateContext = createContext(null);
const TodoDispatchContext = createContext(null);

// 컨텍스트 호출
export function useTodoState() { 
    const context = useContext(TodoStateContext);
    if(!context) {
        throw new Error("프로바이더가 없습니다.");
    }
    return context;
}

export function useTodoDispatch() { 
    const context = useContext(TodoDispatchContext);
    if(!context) {
        throw new Error("프로바이더가 없습니다.");
    }
    return context;
}



// 프로바이더 블록
export function TodoProvider({children}) {

    const [state, dispatch] = useReducer(todoReducer, initialState);

    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                {children}{/* TodoProvider로 감싼 영역의 자식요소가 위치함 */}
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    );
}

