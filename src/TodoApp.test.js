import React from "react";
import TodoApp from "./TodoApp";
import { fireEvent, render,screen } from "@testing-library/react";

describe('<TodoApp />',()=>{
    it('renders TodoForm and TodoList',()=>{
        render(<TodoApp/>);
        screen.getByText('등록');//TodoForm 존재유무 확인
        screen.getByTestId('TodoList');//TodoList 존재유무 확인
    });
    it('renders two defaults todos',()=>{
        render(<TodoApp />);
        screen.getByText('TDD 배우기');
        screen.getByText('react-testing-library 사용하기');
    });
    it('creates new todo',()=>{
        render(<TodoApp/>);
        fireEvent.change(screen.getByPlaceholderText('할 일을 입력하세요'),{
            target:{
                value:'새 항목 추가하기'
            }
        });
        fireEvent.click(screen.getByText('등록'));
        //해당 항목이 보여져야합니다.
        screen.getByText('새 항목 추가하기');
    });
});