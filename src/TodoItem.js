import React,{useCallback} from "react";

const TodoItem = ({ todo, onToggle, onRemove }) => {
  const { id, text, done } = todo;
  //onClick에서 사용하는 함수들을 useCallback을 사용하게 하면 
  //성능을 아주 미세하게 최적화 할 수 있음.
  const toggle = useCallback(()=>onToggle(id),[id,onToggle]);
  const remove = useCallback(()=>onRemove(id),[id,onRemove]);
  return (
    <li>
      <span
        style={{ textDecoration: done ? "line-through" : "none" }}
        // onClick={() => {
        //   onToggle(id);
        // }}
        onClick={toggle}
      >
        {text}
      </span>
      <button
        // onClick={() => {
        //   onRemove(id);
        // }}
        onClick={remove}
      >
        삭제
      </button>
    </li>
  );
};
export default TodoItem;
