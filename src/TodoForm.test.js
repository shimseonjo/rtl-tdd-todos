import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import TodoForm from "./TodoForm";

// 이 컴포넌트에는 input이 하나 있어야 하고 버튼도 하나 있어야 합니다.
// 이에 맞춰서 테스트 코드를 작성해봅시다.
describe("<TodoForm />", () => {
  const setup = (props={})=>{
    const utils = render(<TodoForm {...props}/>);
    const input = screen.getByPlaceholderText('할 일을 입력하세요');
    const button = screen.getByText('등록');
    return{
        ...utils,
        input,
        button
    };
  };

  it("has input and a button", () => {
    // render(<TodoForm />);
    // screen.getByText("등록");
    // screen.getByPlaceholderText("할 일을 입력하세요");
    const{input,button} = setup();
    expect(input).toBeTruthy();
    expect(button).toBeTruthy();
  });

  //input에 change 이벤트를 발생시키면 value 값이 바뀌어야 합니다.
  it("changes input", () => {
    // render(<TodoForm />);
    // const input = screen.getByPlaceholderText("할 일을 입력하세요");
    const{input} = setup();
    fireEvent.change(input, {
      target: {
        value: "TDD 배우기",
      },
    });
    expect(input).toHaveAttribute("value", "TDD 배우기");
  });

  //버튼을 클릭했을때 발생하는 submit 이벤트를 관리
  //TodoForm컴포넌트는 onInsert라는 함수를 props로 받아올것이고,
  //submit 이벤트가 발생하게 되면 이 함수가 호출됩니다.
  //그리고 input값은 비워져야 합니다.

  it("calls onInsert and clears input", () => {
    const onInsert = jest.fn();
    // render(<TodoForm onInsert={onInsert} />);
    // const input = screen.getByPlaceholderText("할 일을 입력하세요");
    // const button = screen.getByText("등록");
    const {input, button} = setup({onInsert});
    //수정하고
    fireEvent.change(input, {
      target: {
        value: "TDD 배우기",
      }
    });
    //버튼 클릭
    fireEvent.click(button);
    expect(onInsert).toBeCalledWith("TDD 배우기"); //onInsert가 'TDD 배우기'파라미터가
    expect(input).toHaveAttribute("value", ""); //input이 비워져야 함
  });
});
