import React from "react";
import TodoList from "./TodoList";
import { render ,screen} from "@testing-library/react";

describe('<TodoList />',()=>{
    const sampleTodos = [{
        id:1,
        text:'TDD 배우기',
        done:true
    },{
        id:2,
        text:'react-testing-library 사용하기',
        done:true
    }];
    it('renders todos properly',()=>{
        render(<TodoList todos={sampleTodos}/>);
        screen.getByText(sampleTodos[0].text);
        screen.getByText(sampleTodos[0].text);
    });
});