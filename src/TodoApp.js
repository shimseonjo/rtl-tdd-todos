import React,{useRef, useState, useCallback} from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

const TodoApp = () => {
    const [todos,setTodos] =useState([
        {
            id:1,
            text:'TDD 배우기',
            done:true
        },
        {
            id:2,
            text:'react-testing-library 사용하기',
            done:true
        }
    ]);
    const nextId = useRef(3);//새로 추가할 항목에서 사용할 id
    const onInsert = useCallback(
        text => {
            setTodos(
                todos.concat({
                    id:nextId.current,
                    text,
                    done:false
                })
            );
            //nextId값에 1더하기
            nextId.current += 1;
        },[todos]
    );
  return (
    <>
      <TodoForm onInsert={onInsert} />
      <TodoList todos={todos} />
    </>
  );
};
export default TodoApp;
