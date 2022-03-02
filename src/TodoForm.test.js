import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import TodoForm from "./TodoForm";

// 이 컴포넌트에는 input이 하나 있어야 하고 버튼도 하나 있어야 합니다.
// 이에 맞춰서 테스트 코드를 작성해봅시다.
describe("<TodoForm />", () => {
  it("has input and a button", () => {
    render(<TodoForm />);
    screen.getByText("등록");
    screen.getByPlaceholderText("할 일을 입력하세요");
  });
  //input에 change 이벤트를 발생시키면 value 값이 바뀌어야 합니다.
  it("changes input", () => {
    render(<TodoForm />);
    const input = screen.getByPlaceholderText("할 일을 입력하세요");
    fireEvent.change(input, {
      target: {
        value: "TDD 배우기",
      },
    });
    expect(input).toHaveAttribute("value", "TDD 배우기");
  });
});
